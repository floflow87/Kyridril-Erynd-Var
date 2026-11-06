import{P as s}from"./phaser-DIUF0PZB.js";const l=3,c=[1050639,330526,529707,466228,400195,2169902,3873046,797503,928089,1260104,4007731,1062001,6630181,2706502,1788507,1326977,4874047,9189669,2575004,4351088,7698231,12536096,11236663,4025024,8417930,14580261,16363300,13473911,11030508,4897515,16039282,15523791],n="CampPixel",m=`#define SHADER_NAME CAMP_PIXEL_DOWN
precision highp float;
uniform sampler2D uMainSampler;
uniform vec2 uSrc;
uniform vec2 uShift;
uniform vec3 uPal[${c.length}];
float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
vec3 at(vec2 o, vec2 q) { return texture2D(uMainSampler, (o + q) / uSrc).rgb; }
void main () {
  float k = ${l.toFixed(1)};
  vec2 t = floor(gl_FragCoord.xy);
  // the block's corner on the canvas (GL px), on the world's own grid
  vec2 o = t * k - uShift;
  // the camp's sprites are pixel art already (§15.3): one sample at the block's centre keeps
  // their pixels crisp; the rest (the ground's drawing, the fire, the FX) falls on the grid
  vec3 c = at(o, vec2(k * 0.5));
  float l = lum(c);
  c = vec3(l) + (c - vec3(l)) * 1.38;
  c = pow(clamp((c - 0.5) * 1.06 + 0.5, 0.0, 1.0), vec3(0.78));
  float d = bayer2(0.5 * t) * 0.25 + bayer2(t) - 0.5;
  c = clamp(c + d * 0.025, 0.0, 1.0);
  vec3 best = uPal[0];
  float bd = 9.0;
  for (int i = 0; i < ${c.length}; i++) {
    vec3 e = (uPal[i] - c) * vec3(1.0, 1.2, 0.8);
    float dd = dot(e, e);
    if (dd < bd) { bd = dd; best = uPal[i]; }
  }
  gl_FragColor = vec4(mix(c, best, 0.55), 1.0);
}`,p=`#define SHADER_NAME CAMP_PIXEL_UP
precision highp float;
uniform sampler2D uMainSampler;
uniform vec2 uLow;
uniform vec2 uShift;
void main () {
  vec2 t = floor((floor(gl_FragCoord.xy) + uShift) / ${l.toFixed(1)});
  gl_FragColor = texture2D(uMainSampler, (t + 0.5) / uLow);
}`,P=new Float32Array(c.flatMap(i=>[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]));class v extends s.Renderer.WebGL.Pipelines.PostFXPipeline{low=null;refit=(e,t)=>this.fitLow(e,t);cam=null;constructor(e){super({game:e,name:n,shaders:[{name:"down",fragShader:m},{name:"up",fragShader:p}]}),this.fitLow(this.renderer.width,this.renderer.height),this.renderer.on(s.Renderer.Events.RESIZE,this.refit)}fitLow(e,t){const a=Math.max(1,Math.ceil(e/l)+1),r=Math.max(1,Math.ceil(t/l)+1);this.low&&this.low.width===a&&this.low.height===r||(this.low?.destroy(),this.low=new s.Renderer.WebGL.RenderTarget(this.renderer,a,r,1,1,!0,!1))}onPreBatch(e){e instanceof s.Cameras.Scene2D.Camera&&(this.cam=e)}onDraw(e){const t=this.low,[a,r]=this.shaders;if(!t||!a||!r){this.bindAndDraw(e);return}const o=l,f=this.cam?Math.round(this.cam.scrollX):0,u=this.cam?Math.round(this.cam.scrollY):0,h=(f%o+o)%o,d=(-(e.height+u)%o+o)%o;this.set2f("uSrc",e.width,e.height,a),this.set2f("uShift",h,d,a),this.set3fv("uPal",P,a),this.set2f("uLow",t.width,t.height,r),this.set2f("uShift",h,d,r),this.bindAndDraw(e,t,!0,!1,a),this.bindAndDraw(t,void 0,!0,!1,r)}destroy(){return this.renderer.off(s.Renderer.Events.RESIZE,this.refit),this.low?.destroy(),this.low=null,super.destroy()}}function w(i){if(i.game.renderer.type!==s.WEBGL)return!1;const e=new URLSearchParams(globalThis.location?.search??"").get("pixel");return e==="0"?!1:!(typeof navigator<"u"&&navigator.webdriver===!0)||e==="1"}function x(i){if(!w(i))return()=>{};const t=i.game.renderer.pipelines;t.postPipelineClasses.has(n)||t.addPostPipeline(n,v);const a=i.cameras.main;a.setPostPipeline(n);const r=i.game.canvas;return r.style.imageRendering="pixelated",r.dataset.campPixel="1",()=>{a.removePostPipeline(n),r.style.imageRendering="",delete r.dataset.campPixel}}export{x as a};

