import{P as y}from"./phaser-DIUF0PZB.js";const A=3,B=[1050639,330526,529707,466228,400195,2169902,3873046,797503,928089,1260104,4007731,1062001,6630181,2706502,1788507,1326977,4874047,9189669,2575004,4351088,7698231,12536096,11236663,4025024,8417930,14580261,16363300,13473911,11030508,4897515,16039282,15523791],L="CampPixel",tt=`#define SHADER_NAME CAMP_PIXEL_DOWN
precision highp float;
uniform sampler2D uMainSampler;
uniform vec2 uSrc;
uniform vec2 uShift;
uniform vec3 uPal[${B.length}];
float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
vec3 at(vec2 o, vec2 q) { return texture2D(uMainSampler, (o + q) / uSrc).rgb; }
void main () {
  float k = ${A.toFixed(1)};
  vec2 t = floor(gl_FragCoord.xy);
  // the block's corner on the canvas (GL px), on the world's own grid
  vec2 o = t * k - uShift;
  // the camp's sprites are pixel art already (§15.3): one sample at the block's centre keeps
  // their pixels crisp; the rest (the ground's drawing, the fire, the FX) falls on the grid
  vec3 c = at(o, vec2(k * 0.5));
  float l = lum(c);
  c = vec3(l) + (c - vec3(l)) * 1.3;
  c = pow(clamp((c - 0.5) * 1.06 + 0.5, 0.0, 1.0), vec3(0.85));
  float d = bayer2(0.5 * t) * 0.25 + bayer2(t) - 0.5;
  c = clamp(c + d * 0.025, 0.0, 1.0);
  vec3 best = uPal[0];
  float bd = 9.0;
  for (int i = 0; i < ${B.length}; i++) {
    vec3 e = (uPal[i] - c) * vec3(1.0, 1.2, 0.8);
    float dd = dot(e, e);
    if (dd < bd) { bd = dd; best = uPal[i]; }
  }
  gl_FragColor = vec4(mix(c, best, 0.65), 1.0);
}`,et=`#define SHADER_NAME CAMP_PIXEL_UP
precision highp float;
uniform sampler2D uMainSampler;
uniform vec2 uLow;
uniform vec2 uShift;
void main () {
  vec2 t = floor((floor(gl_FragCoord.xy) + uShift) / ${A.toFixed(1)});
  gl_FragColor = texture2D(uMainSampler, (t + 0.5) / uLow);
}`,ot=new Float32Array(B.flatMap(r=>[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]));class nt extends y.Renderer.WebGL.Pipelines.PostFXPipeline{low=null;refit=(e,t)=>this.fitLow(e,t);cam=null;constructor(e){super({game:e,name:L,shaders:[{name:"down",fragShader:tt},{name:"up",fragShader:et}]}),this.fitLow(this.renderer.width,this.renderer.height),this.renderer.on(y.Renderer.Events.RESIZE,this.refit)}fitLow(e,t){const n=Math.max(1,Math.ceil(e/A)+1),o=Math.max(1,Math.ceil(t/A)+1);this.low&&this.low.width===n&&this.low.height===o||(this.low?.destroy(),this.low=new y.Renderer.WebGL.RenderTarget(this.renderer,n,o,1,1,!0,!1))}onPreBatch(e){e instanceof y.Cameras.Scene2D.Camera&&(this.cam=e)}onDraw(e){const t=this.low,[n,o]=this.shaders;if(!t||!n||!o){this.bindAndDraw(e);return}const s=A,a=this.cam?Math.round(this.cam.scrollX):0,c=this.cam?Math.round(this.cam.scrollY):0,f=(a%s+s)%s,m=(-(e.height+c)%s+s)%s;this.set2f("uSrc",e.width,e.height,n),this.set2f("uShift",f,m,n),this.set3fv("uPal",ot,n),this.set2f("uLow",t.width,t.height,o),this.set2f("uShift",f,m,o),this.bindAndDraw(e,t,!0,!1,n),this.bindAndDraw(t,void 0,!0,!1,o)}destroy(){return this.renderer.off(y.Renderer.Events.RESIZE,this.refit),this.low?.destroy(),this.low=null,super.destroy()}}function rt(r){if(r.game.renderer.type!==y.WEBGL)return!1;const e=new URLSearchParams(globalThis.location?.search??"").get("pixel");return e==="0"?!1:!(typeof navigator<"u"&&navigator.webdriver===!0)||e==="1"}function dt(r){if(!rt(r))return()=>{};const t=r.game.renderer.pipelines;t.postPipelineClasses.has(L)||t.addPostPipeline(L,nt);const n=r.cameras.main;n.setPostPipeline(L);const o=r.game.canvas;return o.style.imageRendering="pixelated",o.dataset.campPixel="1",()=>{n.removePostPipeline(L),o.style.imageRendering="",delete o.dataset.campPixel}}const u=3;function it(){const r=new URLSearchParams(globalThis.location?.search??"").get("pixel");return r==="0"?!1:!(typeof navigator<"u"&&navigator.webdriver===!0)||r==="1"}const st=(r,e,t)=>(.299*r+.587*e+.114*t)/255;function at(r,e,t){const n=r/255,o=e/255,s=t/255,a=Math.max(n,o,s),c=Math.min(n,o,s),f=(a+c)/2;if(a===c)return[0,0,f];const m=a-c,F=f>.5?m/(2-a-c):m/(a+c);let P=a===n?(o-s)/m+(o<s?6:0):a===o?(s-n)/m+2:(n-o)/m+4;return P/=6,[P,F,f]}function ct(r,e,t){if(e===0)return[t*255,t*255,t*255];const n=t<.5?t*(1+e):t+e-t*e,o=2*t-n,s=a=>{let c=a;return c<0&&(c+=1),c>1&&(c-=1),c<1/6?o+(n-o)*6*c:c<1/2?n:c<2/3?o+(n-o)*(2/3-c)*6:o};return[s(r+1/3)*255,s(r)*255,s(r-1/3)*255]}function lt(r,e,t){const[n,o,s]=at(r,e,t),a=Math.round(s*8)/8,c=Math.round(o*5)/5;return ct(n,c,Math.min(.97,Math.max(.04,a)))}function j(r,e,t,n,o,s,a){if(n<2||o<2)return;const c=r.getImageData(e,t,n,o),f=c.data,m=(Math.round(s)%u+u)%u,F=(Math.round(a)%u+u)%u,P=m-u,X=F-u,g=Math.ceil((n-P)/u),w=Math.ceil((o-X)/u),d=new Float32Array(g*w*3),C=new Uint8Array(g*w),K=new Uint8Array(g*w);let I=0,O=0;for(let i=3;i<f.length;i+=4){const l=f[i]??0;l>8&&I++,l>=200&&O++}if(I===0||O<I*.3)return;for(let i=0;i<w;i++)for(let l=0;l<g;l++){let h=0,S=0,v=0,p=0,x=0,T=2,J=0,Q=0,V=0;for(let q=0;q<u;q++){const G=X+i*u+q;if(!(G<0||G>=o))for(let N=0;N<u;N++){const U=P+l*u+N;if(U<0||U>=n)continue;const k=(G*n+U)*4,b=f[k+3]??0;if(b===0)continue;const H=f[k]??0,Y=f[k+1]??0,$=f[k+2]??0;if(h+=b,S+=H*b,v+=Y*b,p+=$*b,b>=128){const z=st(H,Y,$);z<.2&&x++,z<T&&(T=z,J=H,Q=Y,V=$)}}}const E=i*g+l,W=h/(u*u);if(W<56)continue;C[E]=W>=150?255:W>=96?180:110;let D=S/h,R=v/h,_=p/h;x>=3&&T<.16?(D=J,R=Q,_=V,K[E]=1):[D,R,_]=lt(D,R,_),d[E*3]=D,d[E*3+1]=R,d[E*3+2]=_}const M=(i,l)=>i>=0&&l>=0&&i<g&&l<w&&C[l*g+i]===255,Z=[];for(let i=0;i<w;i++)for(let l=0;l<g;l++){const h=i*g+l;if(C[h]!==255||K[h]||!(!M(l-1,i)||!M(l+1,i)||!M(l,i-1)||!M(l,i+1)))continue;let v=0;for(let p=-1;p<=1;p++)for(let x=-1;x<=1;x++)(x||p)&&M(l+x,i+p)&&v++;v>=5&&Z.push(h)}for(const i of Z)d[i*3]=(d[i*3]??0)*.28+27*.3,d[i*3+1]=(d[i*3+1]??0)*.28+15*.3,d[i*3+2]=(d[i*3+2]??0)*.28+12*.3;for(let i=0;i<o;i++){const l=Math.floor((i-X)/u);for(let h=0;h<n;h++){const S=Math.floor((h-P)/u),v=l*g+S,p=(i*n+h)*4,x=C[v]??0;f[p]=d[v*3]??0,f[p+1]=d[v*3+1]??0,f[p+2]=d[v*3+2]??0,f[p+3]=x}}r.putImageData(c,e,t)}const ft=/^camp:(night|r\d:night|riverGlint)$/;function ut(r,e){if(ft.test(e)||!r.textures.exists(e))return;const t=r.textures.get(e);if(t.campPx||typeof t.getContext!="function")return;t.campPx=!0;const n=t.getContext(),o=t.getFrameNames(!1);if(o.length===0){const s=t.get(),a=s.customPivot?s.pivotX*s.cutWidth:0,c=s.customPivot?s.pivotY*s.cutHeight:0;j(n,0,0,t.width,t.height,a,c)}else for(const s of o){const a=t.get(s),c=a.customPivot?a.pivotX*a.cutWidth:0,f=a.customPivot?a.pivotY*a.cutHeight:0;j(n,a.cutX,a.cutY,a.cutWidth,a.cutHeight,c,f)}t.refresh()}function pt(r){if(it())for(const e of r.textures.getTextureKeys())e.startsWith("camp:")&&ut(r,e)}export{dt as a,pt as p};

