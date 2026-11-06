import{P as s}from"./phaser-DIUF0PZB.js";const n=3,c=[1050639,330526,529707,466228,400195,2169902,3873046,797503,928089,1260104,4007731,1062001,6630181,2706502,1788507,1326977,4874047,9189669,2575004,4351088,7698231,12536096,11236663,4025024,8417930,14580261,16363300,13473911,11030508,4897515,16039282,15523791],l="CampPixel",u=`#define SHADER_NAME CAMP_PIXEL_DOWN
precision highp float;
uniform sampler2D uMainSampler;
uniform vec2 uSrc;
uniform vec2 uShift;
uniform vec3 uPal[${c.length}];
float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
vec3 at(vec2 o, vec2 q) { return texture2D(uMainSampler, (o + q) / uSrc).rgb; }
void main () {
  float k = ${n.toFixed(1)};
  vec2 t = floor(gl_FragCoord.xy);
  // the block's corner on the canvas (GL px), on the world's own grid
  vec2 o = t * k - uShift;
  vec3 s0 = at(o, vec2(0.75, 0.75));
  vec3 s1 = at(o, vec2(k - 0.75, 0.75));
  vec3 s2 = at(o, vec2(0.75, k - 0.75));
  vec3 s3 = at(o, vec2(k - 0.75, k - 0.75));
  float l0 = lum(s0); float l1 = lum(s1); float l2 = lum(s2); float l3 = lum(s3);
  vec3 c = (s0 + s1 + s2 + s3) * 0.25;
  float lo = min(min(l0, l1), min(l2, l3));
  float hi = max(max(l0, l1), max(l2, l3));
  if (lo < 0.13 && hi - lo > 0.2) {
    c = l0 == lo ? s0 : l1 == lo ? s1 : l2 == lo ? s2 : s3;
  }
  float l = lum(c);
  vec2 m = vec2(k * 0.5);
  float n = max(max(lum(at(o + vec2(k, 0.0), m)), lum(at(o - vec2(k, 0.0), m))),
                max(lum(at(o + vec2(0.0, k), m)), lum(at(o - vec2(0.0, k), m))));
  c = vec3(l) + (c - vec3(l)) * 1.3;
  c = pow(clamp((c - 0.5) * 1.06 + 0.5, 0.0, 1.0), vec3(0.85));
  if (n - l > 0.32) c *= 0.7;
  float d = bayer2(0.5 * t) * 0.25 + bayer2(t) - 0.5;
  c = clamp(c + d * 0.025, 0.0, 1.0);
  vec3 best = uPal[0];
  float bd = 9.0;
  for (int i = 0; i < ${c.length}; i++) {
    vec3 e = (uPal[i] - c) * vec3(1.0, 1.2, 0.8);
    float dd = dot(e, e);
    if (dd < bd) { bd = dd; best = uPal[i]; }
  }
  gl_FragColor = vec4(mix(c, best, 0.65), 1.0);
}`,v=`#define SHADER_NAME CAMP_PIXEL_UP
precision highp float;
uniform sampler2D uMainSampler;
uniform vec2 uLow;
uniform vec2 uShift;
void main () {
  vec2 t = floor((floor(gl_FragCoord.xy) + uShift) / ${n.toFixed(1)});
  gl_FragColor = texture2D(uMainSampler, (t + 0.5) / uLow);
}`,p=new Float32Array(c.flatMap(i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]));class P extends s.Renderer.WebGL.Pipelines.PostFXPipeline{low=null;refit=(e,t)=>this.fitLow(e,t);cam=null;constructor(e){super({game:e,name:l,shaders:[{name:"down",fragShader:u},{name:"up",fragShader:v}]}),this.fitLow(this.renderer.width,this.renderer.height),this.renderer.on(s.Renderer.Events.RESIZE,this.refit)}fitLow(e,t){const o=Math.max(1,Math.ceil(e/n)+1),a=Math.max(1,Math.ceil(t/n)+1);this.low&&this.low.width===o&&this.low.height===a||(this.low?.destroy(),this.low=new s.Renderer.WebGL.RenderTarget(this.renderer,o,a,1,1,!0,!1))}onPreBatch(e){e instanceof s.Cameras.Scene2D.Camera&&(this.cam=e)}onDraw(e){const t=this.low,[o,a]=this.shaders;if(!t||!o||!a){this.bindAndDraw(e);return}const r=n,d=this.cam?Math.round(this.cam.scrollX):0,m=this.cam?Math.round(this.cam.scrollY):0,h=(d%r+r)%r,f=(-(e.height+m)%r+r)%r;this.set2f("uSrc",e.width,e.height,o),this.set2f("uShift",h,f,o),this.set3fv("uPal",p,o),this.set2f("uLow",t.width,t.height,a),this.set2f("uShift",h,f,a),this.bindAndDraw(e,t,!0,!1,o),this.bindAndDraw(t,void 0,!0,!1,a)}destroy(){return this.renderer.off(s.Renderer.Events.RESIZE,this.refit),this.low?.destroy(),this.low=null,super.destroy()}}function w(i){if(i.game.renderer.type!==s.WEBGL)return!1;const e=new URLSearchParams(globalThis.location?.search??"").get("pixel");return e==="0"?!1:!(typeof navigator<"u"&&navigator.webdriver===!0)||e==="1"}function x(i){if(!w(i))return()=>{};const t=i.game.renderer.pipelines;t.postPipelineClasses.has(l)||t.addPostPipeline(l,P);const o=i.cameras.main;o.setPostPipeline(l);const a=i.game.canvas;return a.style.imageRendering="pixelated",a.dataset.campPixel="1",()=>{o.removePostPipeline(l),a.style.imageRendering="",delete a.dataset.campPixel}}export{x as a};

