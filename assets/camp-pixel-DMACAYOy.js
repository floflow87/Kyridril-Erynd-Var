import{P as n}from"./phaser-DIUF0PZB.js";import{c as l}from"./camp-pixel-sprites-BvXQlD00.js";const a="CampPixel",u=r=>{const e=r*r,i=[];for(let s=0;s<r;s++)for(let t=0;t<r;t++)i.push(`  s[${s*r+t}] = at(o, vec2(${t}.5, ${s}.5));`);return`#define SHADER_NAME CAMP_PIXEL_DOWN
precision highp float;
uniform sampler2D uMainSampler;
uniform vec2 uSrc;
uniform vec2 uShift;
float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
vec3 at(vec2 o, vec2 q) { return texture2D(uMainSampler, (o + q) / uSrc).rgb; }
void main () {
  vec2 t = floor(gl_FragCoord.xy);
  vec2 o = t * ${r}.0 - uShift;
  vec3 s[${e}];
${i.join(`
`)}
  vec3 c = s[${e>>1}];
  float bd = 1e9;
  for (int a = 0; a < ${e}; a++) {
    float sum = 0.0;
    for (int b = 0; b < ${e}; b++) { vec3 e = s[a] - s[b]; sum += dot(e, e); }
    if (sum < bd - 1e-6) { bd = sum; c = s[a]; }
  }
  float l = lum(c);
  c = vec3(l) + (c - vec3(l)) * 1.24;
  c = pow(clamp(c, 0.0, 1.0), vec3(0.84));
  gl_FragColor = vec4(c, 1.0);
}`},m=r=>`#define SHADER_NAME CAMP_PIXEL_UP
precision highp float;
uniform sampler2D uMainSampler;
uniform vec2 uLow;
uniform vec2 uShift;
void main () {
  vec2 t = floor((floor(gl_FragCoord.xy) + uShift) / ${r.toFixed(1)});
  gl_FragColor = texture2D(uMainSampler, (t + 0.5) / uLow);
}`;class p extends n.Renderer.WebGL.Pipelines.PostFXPipeline{low=null;refit=(e,i)=>this.fitLow(e,i);cam=null;constructor(e){super({game:e,name:a,shaders:[{name:"down",fragShader:u(l())},{name:"up",fragShader:m(l())}]}),this.fitLow(this.renderer.width,this.renderer.height),this.renderer.on(n.Renderer.Events.RESIZE,this.refit)}fitLow(e,i){const s=l(),t=Math.max(1,Math.ceil(e/s)+1),o=Math.max(1,Math.ceil(i/s)+1);this.low&&this.low.width===t&&this.low.height===o||(this.low?.destroy(),this.low=new n.Renderer.WebGL.RenderTarget(this.renderer,t,o,1,1,!0,!1))}onPreBatch(e){e instanceof n.Cameras.Scene2D.Camera&&(this.cam=e)}onDraw(e){const i=this.low,[s,t]=this.shaders;if(!i||!s||!t){this.bindAndDraw(e);return}const o=l(),d=this.cam?Math.round(this.cam.scrollX):0,f=this.cam?Math.round(this.cam.scrollY):0,c=(d%o+o)%o,h=(-(e.height+f)%o+o)%o;this.set2f("uSrc",e.width,e.height,s),this.set2f("uShift",c,h,s),this.set2f("uLow",i.width,i.height,t),this.set2f("uShift",c,h,t),this.bindAndDraw(e,i,!0,!1,s),this.bindAndDraw(i,void 0,!0,!1,t)}destroy(){return this.renderer.off(n.Renderer.Events.RESIZE,this.refit),this.low?.destroy(),this.low=null,super.destroy()}}function v(r){if(r.game.renderer.type!==n.WEBGL)return!1;const e=new URLSearchParams(globalThis.location?.search??"").get("pixel");return e==="0"?!1:!(typeof navigator<"u"&&navigator.webdriver===!0)||e==="1"}function g(r){if(!v(r))return()=>{};const i=r.game.renderer.pipelines;i.postPipelineClasses.has(a)||i.addPostPipeline(a,p);const s=r.cameras.main;s.setPostPipeline(a);const t=r.game.canvas;return t.style.imageRendering="pixelated",t.dataset.campPixel="1",()=>{s.removePostPipeline(a),t.style.imageRendering="",delete t.dataset.campPixel}}export{g as a};

