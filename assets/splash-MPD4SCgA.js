import{bd as va,Q as P,U as u,dV as ka,dW as Sa,dX as La,dY as _a,dZ as Aa,d_ as Pa,d$ as z,e0 as V,e1 as Ta}from"./index-CaZJXXda.js";import"./phaser-DIUF0PZB.js";const Ea=.3,Ma=2.4,$a=1500,Ia=[[466.16,.105],[587.33,.095],[698.46,.088],[932.33,.075],[1174.66,.056]];function R(e,a){const s=e.createGain();return s.gain.value=a,s}function Na(e,a,s,o){const n=R(e.ctx,1);if(n.connect(e.out),typeof e.ctx.createDelay!="function")return n;const f=e.ctx.createDelay(1);f.delayTime.value=a;const p=e.ctx.createBiquadFilter();p.type="lowpass",p.frequency.value=4200;const y=R(e.ctx,s);return n.connect(f).connect(p).connect(y).connect(f),p.connect(R(e.ctx,o)).connect(e.out),n}const Oa={studioSting(e){const a=Ea;P(e,{type:"bandpass",f0:280,f1:4400,q:1.2,dur:a+.04,gain:.42,attack:a*.9}),u(e,{f0:170,f1:760,dur:a,gain:.06,attack:a*.85}),P(e,{type:"highpass",f0:2600,dur:.03,gain:.5,attack:.001,at:a}),u(e,{type:"triangle",f0:230,f1:72,dur:.24,gain:.34,attack:.002,at:a}),u(e,{f0:112,f1:36,dur:.95,gain:.85,attack:.003,at:a}),P(e,{type:"lowpass",f0:1800,f1:120,q:.7,dur:.5,gain:.48,at:a});const s={...e,out:Na(e,.23,.3,.24)};u(e,{type:"triangle",f0:116.54,dur:1.7,gain:.13,attack:.01,lowpass:900,at:a}),Ia.forEach(([o,n],f)=>{const p=a+.008+f*.014;u(s,{type:"triangle",f0:o,dur:1.95,gain:n,attack:.003,at:p}),u(s,{f0:o*1.004,dur:1.75,gain:n*.6,attack:.004,at:p}),u(s,{f0:o*2,dur:1.2,gain:n*.4,attack:.002,at:p}),u(s,{f0:o*4.2,dur:.22,gain:n*.22,attack:.001,at:p})});for(const[o,n]of[[2349.3,.12],[2793.8,.24],[3520,.36],[4698.6,.5]])u(s,{f0:o,dur:.32,gain:.03,attack:.002,at:a+n});return P(s,{type:"highpass",f0:6e3,f1:8800,q:.6,dur:1.2,gain:.04,attack:.06,at:a}),Ma}};let oa=!1;function ae(e,a=()=>performance.now()){if(oa)return;oa=!0,va(Oa);const s=a()+$a,o=()=>{try{e.state()==="running"?e.play("studioSting"):a()<s&&window.setTimeout(o,25)}catch{}};o()}const B=600,qa=400,U=450,ma=500,Da=150,da=600,Fa=15e3,ha=220,Ha=450,Ya=7e3,Ga=1600,Xa=[[.494,.052,.095,4200,-600],[.494,.318,.08,5200,-2600],[.259,.4,.06,6100,-4700],[.731,.4,.06,5800,-2e3],[.215,.525,.07,4600,-1500],[.772,.525,.07,4900,-3900],[.49,.915,.08,5600,-300]],W={far:[-.012,-.014],near:[-.034,-.02],fx:[-.05,-.035]},ia=14,pa=.45,Ca=5200,Ra=1600,ca=22,Ua=26,Wa="Georgia, 'Times New Roman', serif",za="polygon(var(--t) 0, calc(100% - var(--t)) 0, 100% 50%, calc(100% - var(--t)) 100%, var(--t) 100%, 0 50%)",Va=`
#marche-splash { contain: strict; user-select: none; -webkit-user-select: none; touch-action: none; cursor: default; }
#marche-splash.is-out { animation: msp-out ${da}ms ease-in forwards; pointer-events: none; }
#marche-splash.is-drop { animation-duration: ${ha}ms; }
#marche-splash .msp-veil { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; }
#marche-splash.is-dark .msp-veil { animation: msp-in ${ma}ms ease-in forwards; }
#marche-splash .msp-art { position: absolute; inset: 0; opacity: 0; }
#marche-splash.is-on .msp-art { animation: msp-in ${B}ms ease-out forwards; }
#marche-splash .msp-layer, #marche-splash .msp-drift { position: absolute; inset: -2%; will-change: transform; }
#marche-splash .msp-drift { inset: 0; }
/* The whole picture, as tall as the frame (a wide phone shows it whole, its sides feathered
   into a blurred, darkened copy of itself: .msp-fill); a narrower frame crops its sides. */
#marche-splash .msp-fill { position: absolute; inset: -6%; background: var(--msp-bg) 50% 50% / cover no-repeat; filter: blur(22px) brightness(.5) saturate(1.15); }
#marche-splash .msp-layer img { position: absolute; top: 0; left: 50%; height: 100%; width: auto; max-width: none; translate: -50% 0; pointer-events: none;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent); mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent); }
#marche-splash.is-on .msp-drift { animation: msp-kb 4200ms cubic-bezier(.25,.6,.35,1) forwards; }
#marche-splash .msp-near {
  /* Only the blurred rocks of the bottom corners and edge: their blur hides the offset. */
  --msp-mask: radial-gradient(30% 36% at 0% 100%, #000 50%, transparent 100%), radial-gradient(22% 32% at 100% 100%, #000 45%, transparent 100%), linear-gradient(to top, #000, transparent 7%);
  -webkit-mask-image: var(--msp-mask); mask-image: var(--msp-mask);
}
#marche-splash .msp-vignette { position: absolute; inset: 0; background:
  radial-gradient(ellipse 40% 34% at 50% 50%, rgba(10, 5, 22, .62), rgba(10, 5, 22, .3) 60%, transparent 100%),
  radial-gradient(ellipse 85% 80% at 50% 50%, transparent 55%, rgba(6, 3, 12, .55) 100%); }
/* The logo and « Jouer » under it (their layout: splash-boot.ts, shared with the loading cover). */
#marche-splash .msp-art .msp-safe { perspective: 900px; }
#marche-splash .msp-art .msp-logo { will-change: transform; }
#marche-splash .msp-hold { opacity: 0; animation: msp-in 700ms ease-out ${Ha}ms forwards; }
#marche-splash .msp-play {
  /* The plaque (--h); the button around it at least 44 px tall: the thumb's target. */
  --h: ${ka}; --tip: calc(var(--h) * .34);
  position: relative; flex: none; display: grid; place-items: center; box-sizing: border-box;
  height: ${Sa}; min-width: clamp(132px, 16.5cqw, 216px); padding: 0 calc(var(--tip) + clamp(12px, 1.6cqw, 24px));
  margin: 0 0 ${La}; border: 0; background: none; font: inherit; cursor: pointer; outline: none; visibility: hidden;
  -webkit-tap-highlight-color: transparent; transition: transform 90ms ease-out, filter 120ms ease-out;
}
#marche-splash .msp-play::before, #marche-splash .msp-play::after { content: ''; position: absolute; top: 50%; width: 7px; height: 7px;
  background: linear-gradient(135deg, #fff1b8, #d39a35 50%, #7a4612); box-shadow: 0 0 7px rgba(176, 76, 255, .75); transform: translateY(-50%) rotate(45deg); }
#marche-splash .msp-play::before { left: -10px; }
#marche-splash .msp-play::after { right: -10px; }
#marche-splash .msp-play > span { pointer-events: none; }
#marche-splash .msp-play-glow { position: absolute; inset: calc(50% - var(--h) * 1.05) -16%; border-radius: 50%; opacity: .6;
  background: radial-gradient(closest-side, rgba(176, 76, 255, .62), rgba(120, 40, 230, .22) 58%, transparent 100%); }
#marche-splash .msp-play-rim, #marche-splash .msp-play-face { position: absolute; clip-path: ${za}; }
#marche-splash .msp-play-rim { left: 0; right: 0; top: calc(50% - var(--h) / 2); height: var(--h); --t: var(--tip);
  background: linear-gradient(180deg, #fff3c4 0%, #f3c65a 24%, #9c5f1a 50%, #f0c160 74%, #6e3f10 100%); }
#marche-splash .msp-play-face { left: 4px; right: 4px; top: calc(50% - var(--h) / 2 + 2.5px); height: calc(var(--h) - 5px); --t: calc(var(--tip) - 2px);
  background: radial-gradient(ellipse 60% 110% at 50% 118%, rgba(160, 80, 255, .5), transparent 70%),
    linear-gradient(180deg, #3a2640 0%, #1d1022 48%, #0e0711 100%);
  box-shadow: inset 0 1px 0 rgba(255, 230, 170, .3), inset 0 -2px 6px rgba(0, 0, 0, .5); }
#marche-splash .msp-play-label { position: relative; font: 700 clamp(16px, 3.9cqh, 26px) / 1 ${Wa}; letter-spacing: .16em; text-indent: .16em; text-transform: uppercase;
  background: linear-gradient(180deg, #fff6d2 0%, #ffd978 38%, #c98a2c 62%, #ffe7a3 100%); -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 1px 0 rgba(20, 8, 4, .9)) drop-shadow(0 0 6px rgba(186, 100, 255, .65)); }
#marche-splash .msp-play:hover { filter: brightness(1.08); }
#marche-splash .msp-play:focus-visible .msp-play-rim { filter: brightness(1.12) saturate(1.1); }
#marche-splash .msp-play.is-pressed { filter: brightness(1.2); }
#marche-splash .msp-play.is-pressed .msp-play-glow { opacity: 1; animation: none; }
#marche-splash.is-play .msp-play { visibility: visible; animation: msp-play-in ${U}ms cubic-bezier(.2,.7,.3,1) backwards; }
#marche-splash.is-play .msp-play-glow { animation: msp-play-pulse 1800ms ease-in-out ${U}ms infinite alternate; }
#marche-splash .msp-float { position: absolute; inset: 0; }
/* The logo and « Jouer » hold still (the author's ask): only the picture behind drifts. */
#marche-splash.is-on .msp-float { animation: none; }
/* The logo already waited on the cover, at this very place: it stays there. */
#marche-splash.is-on.is-booted .msp-float { animation: none; }
#marche-splash .msp-aura { position: absolute; inset: -20% -11%; border-radius: 50%; opacity: .75;
  background: radial-gradient(closest-side, rgba(150, 70, 255, .36), rgba(110, 40, 220, .14) 52%, transparent 100%); }
/* The halo: the logo turned to violet light (black, its violet shadows), behind the gold. */
#marche-splash .msp-glow { opacity: .8;
  filter: brightness(0) drop-shadow(0 0 .33cqw rgba(178, 100, 255, .95)) drop-shadow(0 0 1.15cqw rgba(132, 58, 255, .75)); }
#marche-splash .msp-mark { filter: drop-shadow(0 .36cqw .72cqw rgba(0, 0, 0, .55)); }
#marche-splash.is-on .msp-glow { animation: msp-pulse 2600ms ease-in-out infinite alternate; }
#marche-splash.is-on .msp-aura { animation: msp-aura 2600ms ease-in-out infinite alternate; }
/* The sheen: a violet-white band gliding across, masked to the logo, its light added (screen). */
#marche-splash .msp-sheen { position: absolute; inset: 0; overflow: hidden; pointer-events: none; mix-blend-mode: screen;
  -webkit-mask: var(--msp-logo) center / 100% 100% no-repeat; mask: var(--msp-logo) center / 100% 100% no-repeat; }
#marche-splash .msp-sheen::before { content: ''; position: absolute; top: -12%; bottom: -12%; left: 0; width: 20%; opacity: 0;
  background: linear-gradient(90deg, transparent, rgba(140, 70, 255, .22) 26%, rgba(180, 116, 255, .6) 44%, rgba(222, 186, 255, .82) 50%, rgba(180, 116, 255, .6) 56%, rgba(140, 70, 255, .22) 74%, transparent);
  transform: translate3d(-130%, 0, 0) skewX(-20deg); }
#marche-splash.is-on .msp-sheen::before { animation: msp-sweep ${Ya}ms cubic-bezier(.45,.05,.55,.95) ${Ga}ms infinite; }
/* A glint: a four-point arcane star, white at heart, violet rays. */
#marche-splash .msp-glint { position: absolute; left: var(--x); top: var(--y); width: var(--s); aspect-ratio: 1; margin: calc(var(--s) / -2) 0 0 calc(var(--s) / -2);
  opacity: 0; pointer-events: none; mix-blend-mode: screen;
  background: radial-gradient(closest-side, #fff 0, rgba(238, 214, 255, .95) 12%, rgba(178, 106, 255, .55) 30%, transparent 68%),
    linear-gradient(90deg, transparent, rgba(214, 168, 255, .95) 50%, transparent) center / 100% 6% no-repeat,
    linear-gradient(0deg, transparent, rgba(214, 168, 255, .95) 50%, transparent) center / 6% 100% no-repeat; }
#marche-splash.is-on .msp-glint { animation: msp-twinkle var(--d) ease-in-out var(--w) infinite; }
#marche-splash .msp-fx { position: absolute; inset: -6%; pointer-events: none; will-change: transform; }
#marche-splash .msp-p { position: absolute; left: var(--x); top: var(--y); width: var(--s); height: var(--s); border-radius: 50%; opacity: 0;
  animation: var(--a) var(--d) linear var(--w) infinite; }
#marche-splash .msp-ember { background: radial-gradient(circle, #fff1c4 0, #ffb347 35%, rgba(255, 110, 30, .55) 60%, transparent 72%); box-shadow: 0 0 8px 2px rgba(255, 130, 40, .35); }
#marche-splash .msp-flake { background: radial-gradient(circle, rgba(255, 255, 255, .95) 0, rgba(225, 230, 255, .6) 45%, transparent 72%); }
#marche-splash .msp-flake.is-near { filter: blur(1.5px); }
@keyframes msp-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes msp-out { from { opacity: 1; } to { opacity: 0; } }
@keyframes msp-kb { from { transform: scale(1) translate3d(-.5%, .3%, 0); } to { transform: scale(1.035) translate3d(.5%, -.3%, 0); } }
@keyframes msp-pulse { from { opacity: .5; } to { opacity: 1; } }
@keyframes msp-sweep { 0% { opacity: 0; transform: translate3d(-130%, 0, 0) skewX(-20deg); } 5% { opacity: 1; }
  27% { opacity: 1; } 32%, 100% { opacity: 0; transform: translate3d(620%, 0, 0) skewX(-20deg); } }
@keyframes msp-twinkle { 0%, 60%, 100% { opacity: 0; transform: scale(.3) rotate(0deg); }
  75% { opacity: 1; transform: scale(1) rotate(28deg); } 88% { opacity: .25; transform: scale(.55) rotate(44deg); } }
@keyframes msp-play-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes msp-play-pulse { from { opacity: .42; transform: scale(.96); } to { opacity: .92; transform: scale(1.05); } }
@keyframes msp-aura { from { opacity: .55; transform: scale(.97); } to { opacity: .95; transform: scale(1.04); } }
@keyframes msp-ember { 0% { opacity: 0; transform: translate3d(0, 0, 0); } 12% { opacity: var(--o); }
  70% { opacity: calc(var(--o) * .8); } 100% { opacity: 0; transform: translate3d(var(--dx), -70cqh, 0); } }
@keyframes msp-flake { 0% { opacity: 0; transform: translate3d(0, 0, 0); } 15% { opacity: var(--o); }
  85% { opacity: var(--o); } 100% { opacity: 0; transform: translate3d(var(--dx), 60cqh, 0); } }
#marche-splash .msp-foot { position: absolute; bottom: max(10px, env(safe-area-inset-bottom)); pointer-events: none;
  opacity: 0; transition: opacity ${U}ms ease-out; filter: drop-shadow(0 1px 2px rgba(0, 0, 0, .7)); }
#marche-splash.is-play .msp-foot { opacity: .72; }
#marche-splash .msp-studio { left: max(14px, env(safe-area-inset-left)); height: clamp(20px, 5.6cqh, 32px); width: auto; }
/* « Jouer » pressed: the Volta Games mark, above the darkening veil, flares with the studio's
   sting (its impact, ~0.3 s in: audio/studio-voices.ts), then fades out with the black. */
#marche-splash .msp-studio.is-sting { transform-origin: 0 100%; animation: msp-sting 1400ms ease-out forwards; }
@keyframes msp-sting { 0% { opacity: .72; transform: none; }
  22% { opacity: 1; transform: scale(1.14); filter: drop-shadow(0 0 6px rgba(206, 178, 255, .95)) brightness(1.35); }
  55% { opacity: .9; transform: scale(1.04); filter: drop-shadow(0 0 3px rgba(160, 120, 255, .6)); }
  100% { opacity: 0; transform: none; } }
#marche-splash .msp-version { right: max(14px, env(safe-area-inset-right)); color: #f3e6c8;
  font: 600 clamp(10px, 2.9cqh, 13px)/1 system-ui, sans-serif; letter-spacing: .06em; }
@media (prefers-reduced-motion: reduce) {
  #marche-splash.is-on .msp-drift, #marche-splash.is-on .msp-float, #marche-splash.is-on.is-booted .msp-float, #marche-splash.is-on .msp-glow, #marche-splash.is-on .msp-aura { animation: none; }
  #marche-splash .msp-drift { transform: none; }
  #marche-splash .msp-fx, #marche-splash .msp-sheen, #marche-splash .msp-glint { display: none; }
  #marche-splash.is-play .msp-play { animation-name: msp-in; }
  #marche-splash.is-play .msp-play-glow { animation: none; }
  #marche-splash .msp-play.is-pressed { transform: none; }
  #marche-splash .msp-studio.is-sting { transform: none !important; }
}
`;function Ba(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function c(e,...a){const s=document.createElement("div");return s.className=e,s.append(...a),s}function Ja(e){let a=e>>>0;return()=>{a=a+1831565813>>>0;let s=a;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}function Ka(){const e=c("msp-fx"),a=Ja(24301),s=o=>`${(o*100).toFixed(1)}%`;for(let o=0;o<ca+Ua;o++){const n=o<ca,f=c(`msp-p ${n?"msp-ember":"msp-flake"}`),p=!n&&a()<.3;p&&f.classList.add("is-near");const y=n?2600+a()*2600:4200+a()*3600,_=n?4+a()*6:p?7+a()*6:2.5+a()*3.5,E={"--x":s(n?.3+a()*.55:a()),"--y":s(n?.72+a()*.3:-.08+a()*.55),"--s":`${_.toFixed(1)}px`,"--o":(n?.55+a()*.45:p?.5+a()*.3:.45+a()*.45).toFixed(2),"--dx":`${((n?-40:-60)+a()*(n?110:90)).toFixed(0)}px`,"--a":n?"msp-ember":"msp-flake","--d":`${y.toFixed(0)}ms`,"--w":`${(-a()*y).toFixed(0)}ms`};for(const[M,$]of Object.entries(E))f.style.setProperty(M,$);e.append(f)}return e}function la(e){return typeof e.decode=="function"?e.decode().then(()=>!0,()=>e.complete&&e.naturalWidth>0):e.complete?Promise.resolve(e.naturalWidth>0):new Promise(a=>{e.addEventListener("load",()=>a(!0),{once:!0}),e.addEventListener("error",()=>a(!1),{once:!0})})}function ja(e,a){const s=z(),o=V(s,0,0),n=V(s,e,a);return[n.x-o.x,n.y-o.y]}const T=e=>Math.max(-1,Math.min(1,e));function ee(e){const{cover:a,shield:s}=e,o=Ba(),n=document.createElement("style");n.id="marche-splash-css",n.textContent=Va,document.head.append(n),e.bg.className="msp-bg",e.logo.className="msp-mark";const f=e.bg.cloneNode(),p=e.logo.cloneNode();p.className="msp-glow",p.alt="";for(const t of[e.bg,f,p])t.setAttribute("aria-hidden","true");const y=c("msp-layer msp-far",c("msp-drift",e.bg)),_=c("msp-layer msp-near",c("msp-drift",f)),E=c("msp-aura");a.style.setProperty("--msp-logo",`url("${e.logo.src}")`);const M=Xa.map(([t,r,i,l,d])=>{const h=c("msp-glint");h.setAttribute("aria-hidden","true");const b={"--x":t,"--y":r,"--s":i};for(const[w,L]of Object.entries(b))h.style.setProperty(w,`${(L*100).toFixed(1)}%`);return h.style.setProperty("--d",`${l}ms`),h.style.setProperty("--w",`${d}ms`),h}),$=c("msp-logo",c("msp-float",E,p,e.logo,c("msp-sheen"),...M)),m=document.createElement("button");m.type="button",m.id=_a,m.className="msp-play";const I=document.createElement("span");I.className="msp-play-label",I.textContent=e.playLabel;for(const t of["msp-play-glow","msp-play-rim","msp-play-face"]){const r=document.createElement("span");r.className=t,m.append(r)}m.append(I);const fa=c("msp-safe",$,m),A=o?null:Ka();a.style.setProperty("--msp-bg",`url("${e.bg.src}")`);const x=document.createElement("img");x.className="msp-foot msp-studio",x.src=Aa,x.alt="Volta Games";const J=c("msp-foot msp-version");J.textContent="V1.0.1";const N=c("msp-art",c("msp-fill"),y,_,c("msp-vignette"),fa,x,J);A&&N.append(A);const K=c("msp-veil");a.append(N,K),a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-label",e.alt);let g="load",j=0,O=0;const k=[],v=(t,r)=>{k.push(window.setTimeout(r,t))},Q=(t,r,i)=>{let l=!1;const d=()=>{l||(l=!0,t.removeEventListener("animationend",h),i())},h=b=>{b.target===t&&d()};t.addEventListener("animationend",h),v(r+400,d)},S=t=>{g=t,a.dataset.phase=t},Z=()=>Pa(a);Z();let q=0,D=0,F=-1/0,H=0,Y=0,G=null;const ua=t=>{const r=z(),i=V(r,t.clientX,t.clientY);q=T(i.x/Math.max(1,r.w)*2-1),D=T(i.y/Math.max(1,r.h)*2-1),F=performance.now()},ga=t=>{if(t.beta===null||t.gamma===null)return;const r=((screen.orientation?.angle??0)%360+360)%360,i=t.gamma,l=t.beta,[d,h]=r===90?[l,-i]:r===180?[-i,-l]:r===270?[-l,i]:[i,l];G??=[d,h];const[b,w]=ja(d-G[0],h-G[1]);q=T(b/ia),D=T(w/ia),F=performance.now()},X=(t,r,i,l,d="")=>{t.style.transform=`translate3d(${(H*r[0]*i).toFixed(2)}px, ${(Y*r[1]*l).toFixed(2)}px, 0)${d}`},aa=t=>{O=requestAnimationFrame(aa);const r=(t-j)/Ca,i=Math.sin(r*Math.PI*2)*pa,l=Math.sin(r*Math.PI*4+.6)*pa*.55,d=Math.max(0,Math.min(1,1-(t-F-Ra)/900)),h=i*(1-d)+q*d,b=l*(1-d)+D*d;H+=(h-H)*.07,Y+=(b-Y)*.07;const{w,h:L}=z();X(y,W.far,w,L),X(_,W.near,w,L),A&&X(A,W.fx,w,L)},ea=t=>{const r=t?"addEventListener":"removeEventListener";window[r]("resize",Z),!o&&(window[r]("pointermove",ua,{passive:!0}),window[r]("deviceorientation",ga))},ta=()=>{cancelAnimationFrame(O),ea(!1)},ya=()=>{for(const t of k.splice(0))window.clearTimeout(t);ta(),a.remove(),n.remove(),s.onPress=null,s.lift()},C=(t=!1)=>{if(g!=="out"){S("out");for(const r of k.splice(0))window.clearTimeout(r);a.classList.add("is-out"),t&&a.classList.add("is-drop"),Q(a,t?ha:da,ya)}},sa=t=>{e.isReady()||performance.now()>=t?C():v(100,()=>sa(t))},ba=()=>{if(!(g!=="in"&&g!=="hold")){S("dark");for(const t of k.splice(0))window.clearTimeout(t);s.onPress=null,s.play=null,m.classList.add("is-pressed"),m.blur(),a.append(x),x.classList.add("is-sting"),a.querySelector(".msp-wait")?.remove(),a.classList.add("is-dark"),Q(K,ma,()=>{S("black"),ta(),N.remove();const t=Ta(e.logo);t.classList.add("msp-hold"),a.append(t);const r=performance.now()+Fa;v(Da,()=>sa(r))})}};m.addEventListener("blur",()=>{window.setTimeout(()=>{s.play===m&&document.activeElement!==m&&ra()},0)});const ra=()=>{try{m.focus({preventScroll:!0})}catch{}},wa=()=>{g!=="in"&&g!=="hold"||(a.classList.add("is-play"),s.onPress=t=>m.classList.toggle("is-pressed",t),s.onPlay=ba,s.play=m,ra())};ea(!0);let na=!1;const xa=()=>Promise.all([la(e.bg),la(e.logo)]).then(([t,r])=>{if(g!=="load"||na)return;if(!t||!r){C(!0);return}for(const l of k.splice(0))window.clearTimeout(l);S("in"),j=performance.now();const i=a.querySelector(".msp-wait");i?.classList.contains("is-in")&&Number(getComputedStyle(i).opacity)>.05&&a.classList.add("is-booted"),a.classList.add("is-on"),o||(O=requestAnimationFrame(aa)),v(B,()=>{S("hold"),i?.remove()}),v(B+qa,wa)});e.studio.then(()=>(v(Math.max(0,e.loadBy-performance.now()),()=>{na=!0,g==="load"&&C(!0)}),xa()))}export{Da as SPLASH_BLACK_MIN_MS,ma as SPLASH_DARK_MS,B as SPLASH_FADE_IN_MS,da as SPLASH_FADE_OUT_MS,qa as SPLASH_PLAY_DELAY_MS,Fa as SPLASH_WAIT_MAX_MS,ae as playStudioSting,ee as runSplash};

