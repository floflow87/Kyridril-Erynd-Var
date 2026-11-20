import{bk as ke,$ as E,a0 as u,d$ as Se,e0 as Le,e1 as _e,e2 as Ae,e3 as Pe,e4 as Ee,e5 as Te,e6 as V,e7 as j,e8 as Me}from"./index-CevjNfJl.js";import"./phaser-DIUF0PZB.js";const $e=.3,Ie=2.4,Oe=1500,Fe=[[466.16,.105],[587.33,.095],[698.46,.088],[932.33,.075],[1174.66,.056]];function U(a,e){const s=a.createGain();return s.gain.value=e,s}function Ne(a,e,s,r){const o=U(a.ctx,1);if(o.connect(a.out),typeof a.ctx.createDelay!="function")return o;const f=a.ctx.createDelay(1);f.delayTime.value=e;const p=a.ctx.createBiquadFilter();p.type="lowpass",p.frequency.value=4200;const b=U(a.ctx,s);return o.connect(f).connect(p).connect(b).connect(f),p.connect(U(a.ctx,r)).connect(a.out),o}const qe={studioSting(a){const e=$e;E(a,{type:"bandpass",f0:280,f1:4400,q:1.2,dur:e+.04,gain:.42,attack:e*.9}),u(a,{f0:170,f1:760,dur:e,gain:.06,attack:e*.85}),E(a,{type:"highpass",f0:2600,dur:.03,gain:.5,attack:.001,at:e}),u(a,{type:"triangle",f0:230,f1:72,dur:.24,gain:.34,attack:.002,at:e}),u(a,{f0:112,f1:36,dur:.95,gain:.85,attack:.003,at:e}),E(a,{type:"lowpass",f0:1800,f1:120,q:.7,dur:.5,gain:.48,at:e});const s={...a,out:Ne(a,.23,.3,.24)};u(a,{type:"triangle",f0:116.54,dur:1.7,gain:.13,attack:.01,lowpass:900,at:e}),Fe.forEach(([r,o],f)=>{const p=e+.008+f*.014;u(s,{type:"triangle",f0:r,dur:1.95,gain:o,attack:.003,at:p}),u(s,{f0:r*1.004,dur:1.75,gain:o*.6,attack:.004,at:p}),u(s,{f0:r*2,dur:1.2,gain:o*.4,attack:.002,at:p}),u(s,{f0:r*4.2,dur:.22,gain:o*.22,attack:.001,at:p})});for(const[r,o]of[[2349.3,.12],[2793.8,.24],[3520,.36],[4698.6,.5]])u(s,{f0:r,dur:.32,gain:.03,attack:.002,at:e+o});return E(s,{type:"highpass",f0:6e3,f1:8800,q:.6,dur:1.2,gain:.04,attack:.06,at:e}),Ie}};let z=!1,g=null;function sa(a,e=()=>performance.now()){if(z)return;const s=e()+Oe;if(g!==null){g=Math.max(g,s);return}g=s,ke(qe);const r=()=>{try{if(z)return;a.state()==="running"?(z=!0,g=null,a.play("studioSting")):g!==null&&e()<g?window.setTimeout(r,25):g=null}catch{g=null}};r()}const J=600,De=400,B=450,de=500,He=150,he=600,Ye=15e3,fe=220,Ge=450,Ce=7e3,Xe=1600,Re=[[.494,.052,.095,4200,-600],[.494,.318,.08,5200,-2600],[.259,.4,.06,6100,-4700],[.731,.4,.06,5800,-2e3],[.215,.525,.07,4600,-1500],[.772,.525,.07,4900,-3900],[.49,.915,.08,5600,-300]],W={far:[-.012,-.014],near:[-.034,-.02],fx:[-.05,-.035]},pe=14,ce=.45,Ue=5200,ze=1600,le=22,Be="36% 50%",We=26,Ve="Georgia, 'Times New Roman', serif",je="polygon(var(--t) 0, calc(100% - var(--t)) 0, 100% 50%, calc(100% - var(--t)) 100%, var(--t) 100%, 0 50%)",Je=`
#marche-splash { contain: strict; user-select: none; -webkit-user-select: none; touch-action: none; cursor: default; }
#marche-splash.is-out { animation: msp-out ${he}ms ease-in forwards; pointer-events: none; }
#marche-splash.is-drop { animation-duration: ${fe}ms; }
#marche-splash .msp-veil { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; }
#marche-splash.is-dark .msp-veil { animation: msp-in ${de}ms ease-in forwards; }
#marche-splash .msp-art { position: absolute; inset: 0; opacity: 0; }
#marche-splash.is-on .msp-art { animation: msp-in ${J}ms ease-out forwards; }
#marche-splash .msp-layer, #marche-splash .msp-drift { position: absolute; inset: -2%; will-change: transform; }
#marche-splash .msp-drift { inset: 0; }
/* The painting covers the frame (cropped to it), Erynd and his sword's trail kept in view on a
   wide phone (a little of the sky and the grass cut) as on a 4:3 tablet (the orc's side cut). */
#marche-splash .msp-layer img { position: absolute; inset: 0; width: 100%; height: 100%; max-width: none; object-fit: cover; object-position: ${Be}; pointer-events: none; }
#marche-splash.is-on .msp-drift { animation: msp-kb 4200ms cubic-bezier(.25,.6,.35,1) forwards; }
#marche-splash .msp-near {
  /* Only the blurred foreground of the bottom corners (the grass and daisies, a rock): their blur hides the offset. */
  --msp-mask: radial-gradient(28% 34% at 0% 100%, #000 50%, transparent 100%), radial-gradient(14% 22% at 100% 100%, #000 40%, transparent 100%);
  -webkit-mask-image: var(--msp-mask); mask-image: var(--msp-mask);
}
#marche-splash .msp-vignette { position: absolute; inset: 0; background:
  radial-gradient(ellipse 30% 36% at 73% 24%, rgba(14, 6, 30, .5), rgba(14, 6, 30, .22) 60%, transparent 100%),
  radial-gradient(ellipse 85% 80% at 50% 50%, transparent 58%, rgba(6, 3, 12, .45) 100%); }
/* The logo and « Jouer » under it, on the right (their layout: splash-boot.ts, shared with the loading cover). */
#marche-splash .msp-art .msp-safe { perspective: 900px; }
#marche-splash .msp-art .msp-logo { will-change: transform; }
#marche-splash .msp-hold { opacity: 0; animation: msp-in 700ms ease-out ${Ge}ms forwards; }
#marche-splash .msp-play {
  /* The plaque (--h); the button around it at least 44 px tall: the thumb's target. */
  --h: ${Se}; --tip: calc(var(--h) * .34);
  position: relative; flex: none; display: grid; place-items: center; box-sizing: border-box;
  height: ${Le}; min-width: clamp(132px, 16.5cqw, 216px); padding: 0 calc(var(--tip) + clamp(12px, 1.6cqw, 24px));
  margin: 0 0 ${_e}; border: 0; background: none; font: inherit; cursor: pointer; outline: none; visibility: hidden;
  -webkit-tap-highlight-color: transparent; transition: transform 90ms ease-out, filter 120ms ease-out;
}
#marche-splash .msp-play::before, #marche-splash .msp-play::after { content: ''; position: absolute; top: 50%; width: 7px; height: 7px;
  background: linear-gradient(135deg, #fff1b8, #d39a35 50%, #7a4612); box-shadow: 0 0 7px rgba(176, 76, 255, .75); transform: translateY(-50%) rotate(45deg); }
#marche-splash .msp-play::before { left: -10px; }
#marche-splash .msp-play::after { right: -10px; }
#marche-splash .msp-play > span { pointer-events: none; }
#marche-splash .msp-play-glow { position: absolute; inset: calc(50% - var(--h) * 1.05) -16%; border-radius: 50%; opacity: .6;
  background: radial-gradient(closest-side, rgba(176, 76, 255, .62), rgba(120, 40, 230, .22) 58%, transparent 100%); }
#marche-splash .msp-play-rim, #marche-splash .msp-play-face { position: absolute; clip-path: ${je}; }
#marche-splash .msp-play-rim { left: 0; right: 0; top: calc(50% - var(--h) / 2); height: var(--h); --t: var(--tip);
  background: linear-gradient(180deg, #fff3c4 0%, #f3c65a 24%, #9c5f1a 50%, #f0c160 74%, #6e3f10 100%); }
#marche-splash .msp-play-face { left: 4px; right: 4px; top: calc(50% - var(--h) / 2 + 2.5px); height: calc(var(--h) - 5px); --t: calc(var(--tip) - 2px);
  background: radial-gradient(ellipse 60% 110% at 50% 118%, rgba(160, 80, 255, .5), transparent 70%),
    linear-gradient(180deg, #3a2640 0%, #1d1022 48%, #0e0711 100%);
  box-shadow: inset 0 1px 0 rgba(255, 230, 170, .3), inset 0 -2px 6px rgba(0, 0, 0, .5); }
#marche-splash .msp-play-label { position: relative; font: 700 clamp(16px, 3.9cqh, 26px) / 1 ${Ve}; letter-spacing: .16em; text-indent: .16em; text-transform: uppercase;
  background: linear-gradient(180deg, #fff6d2 0%, #ffd978 38%, #c98a2c 62%, #ffe7a3 100%); -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 1px 0 rgba(20, 8, 4, .9)) drop-shadow(0 0 6px rgba(186, 100, 255, .65)); }
#marche-splash .msp-play:hover { filter: brightness(1.08); }
#marche-splash .msp-play:focus-visible .msp-play-rim { filter: brightness(1.12) saturate(1.1); }
#marche-splash .msp-play.is-pressed { filter: brightness(1.2); }
#marche-splash .msp-play.is-pressed .msp-play-glow { opacity: 1; animation: none; }
#marche-splash.is-play .msp-play { visibility: visible; animation: msp-play-in ${B}ms cubic-bezier(.2,.7,.3,1) backwards; }
#marche-splash.is-play .msp-play-glow { animation: msp-play-pulse 1800ms ease-in-out ${B}ms infinite alternate; }
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
#marche-splash.is-on .msp-sheen::before { animation: msp-sweep ${Ce}ms cubic-bezier(.45,.05,.55,.95) ${Xe}ms infinite; }
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
#marche-splash .msp-flake { background: radial-gradient(circle, rgba(255, 252, 232, .95) 0, rgba(255, 228, 160, .55) 45%, transparent 72%); }
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
  opacity: 0; transition: opacity ${B}ms ease-out; filter: drop-shadow(0 1px 2px rgba(0, 0, 0, .7)); }
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
`;function Ke(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function c(a,...e){const s=document.createElement("div");return s.className=a,s.append(...e),s}function Qe(a){let e=a>>>0;return()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}function Ze(){const a=c("msp-fx"),e=Qe(24301),s=r=>`${(r*100).toFixed(1)}%`;for(let r=0;r<le+We;r++){const o=r<le,f=c(`msp-p ${o?"msp-ember":"msp-flake"}`),p=!o&&e()<.3;p&&f.classList.add("is-near");const b=o?2600+e()*2600:4200+e()*3600,A=o?4+e()*6:p?7+e()*6:2.5+e()*3.5,M={"--x":s(o?.3+e()*.55:e()),"--y":s(o?.72+e()*.3:-.08+e()*.55),"--s":`${A.toFixed(1)}px`,"--o":(o?.55+e()*.45:p?.5+e()*.3:.45+e()*.45).toFixed(2),"--dx":`${((o?-40:-60)+e()*(o?110:90)).toFixed(0)}px`,"--a":o?"msp-ember":"msp-flake","--d":`${b.toFixed(0)}ms`,"--w":`${(-e()*b).toFixed(0)}ms`};for(const[$,I]of Object.entries(M))f.style.setProperty($,I);a.append(f)}return a}function me(a){return typeof a.decode=="function"?a.decode().then(()=>!0,()=>a.complete&&a.naturalWidth>0):a.complete?Promise.resolve(a.naturalWidth>0):new Promise(e=>{a.addEventListener("load",()=>e(!0),{once:!0}),a.addEventListener("error",()=>e(!1),{once:!0})})}function ea(a,e){const s=V(),r=j(s,0,0),o=j(s,a,e);return[o.x-r.x,o.y-r.y]}const T=a=>Math.max(-1,Math.min(1,a));function na(a){const{cover:e,shield:s}=a,r=Ke(),o=document.createElement("style");o.id="marche-splash-css",o.textContent=Je,document.head.append(o),a.bg.className="msp-bg",a.logo.className="msp-mark";const f=a.bg.cloneNode(),p=a.logo.cloneNode();p.className="msp-glow",p.alt="";for(const t of[a.bg,f,p])t.setAttribute("aria-hidden","true");const b=c("msp-layer msp-far",c("msp-drift",a.bg)),A=c("msp-layer msp-near",c("msp-drift",f)),M=c("msp-aura");e.style.setProperty("--msp-logo",`url("${a.logo.src}")`);const $=Re.map(([t,n,i,l,d])=>{const h=c("msp-glint");h.setAttribute("aria-hidden","true");const w={"--x":t,"--y":n,"--s":i};for(const[x,_]of Object.entries(w))h.style.setProperty(x,`${(_*100).toFixed(1)}%`);return h.style.setProperty("--d",`${l}ms`),h.style.setProperty("--w",`${d}ms`),h}),I=c("msp-logo",c("msp-float",M,p,a.logo,c("msp-sheen"),...$)),m=document.createElement("button");m.type="button",m.id=Ae,m.className="msp-play";const O=document.createElement("span");O.className="msp-play-label",O.textContent=a.playLabel;for(const t of["msp-play-glow","msp-play-rim","msp-play-face"]){const n=document.createElement("span");n.className=t,m.append(n)}m.append(O);const ue=c("msp-safe",I,m),P=r?null:Ze(),v=document.createElement("img");v.className="msp-foot msp-studio",v.src=Pe,v.alt="Volta Games";const K=c("msp-foot msp-version");K.textContent="V1.0.5";const F=c("msp-art",b,A,c("msp-vignette"),ue,v,K);P&&F.append(P);const Q=c("msp-veil");e.append(F,Q),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",a.alt);let y="load",Z=0,N=0;const S=[],k=(t,n)=>{S.push(window.setTimeout(n,t))},ee=(t,n,i)=>{let l=!1;const d=()=>{l||(l=!0,t.removeEventListener("animationend",h),i())},h=w=>{w.target===t&&d()};t.addEventListener("animationend",h),k(n+400,d)},L=t=>{y=t,e.dataset.phase=t},ae=()=>Ee(e);ae();let q=0,D=0,H=-1/0,Y=0,G=0,C=null;const ge=t=>{const n=V(),i=j(n,t.clientX,t.clientY);q=T(i.x/Math.max(1,n.w)*2-1),D=T(i.y/Math.max(1,n.h)*2-1),H=performance.now()},ye=t=>{if(t.beta===null||t.gamma===null)return;const n=((screen.orientation?.angle??0)%360+360)%360,i=t.gamma,l=t.beta,[d,h]=n===90?[l,-i]:n===180?[-i,-l]:n===270?[-l,i]:[i,l];C??=[d,h];const[w,x]=ea(d-C[0],h-C[1]);q=T(w/pe),D=T(x/pe),H=performance.now()},X=(t,n,i,l,d="")=>{t.style.transform=`translate3d(${(Y*n[0]*i).toFixed(2)}px, ${(G*n[1]*l).toFixed(2)}px, 0)${d}`},te=t=>{N=requestAnimationFrame(te);const n=(t-Z)/Ue,i=Math.sin(n*Math.PI*2)*ce,l=Math.sin(n*Math.PI*4+.6)*ce*.55,d=Math.max(0,Math.min(1,1-(t-H-ze)/900)),h=i*(1-d)+q*d,w=l*(1-d)+D*d;Y+=(h-Y)*.07,G+=(w-G)*.07;const{w:x,h:_}=V();X(b,W.far,x,_),X(A,W.near,x,_),P&&X(P,W.fx,x,_)},se=t=>{const n=t?"addEventListener":"removeEventListener";window[n]("resize",ae),!r&&(window[n]("pointermove",ge,{passive:!0}),window[n]("deviceorientation",ye))},ne=()=>{cancelAnimationFrame(N),se(!1)},be=()=>{for(const t of S.splice(0))window.clearTimeout(t);ne(),e.remove(),o.remove(),s.onPress=null,s.lift()},R=(t=!1)=>{if(y!=="out"){L("out");for(const n of S.splice(0))window.clearTimeout(n);e.classList.add("is-out"),t&&e.classList.add("is-drop"),ee(e,t?fe:he,be)}},oe=t=>{a.isReady()||performance.now()>=t?R():k(100,()=>oe(t))},we=()=>{if(!(y!=="in"&&y!=="hold")){L("dark");for(const t of S.splice(0))window.clearTimeout(t);s.onPress=null,s.play=null,m.classList.add("is-pressed"),m.blur(),e.append(v),v.classList.add("is-sting"),e.querySelector(".msp-wait")?.remove(),e.classList.add("is-dark"),ee(Q,de,()=>{L("black"),ne(),F.remove();const t=Me(a.logo);t.classList.add("msp-hold"),e.append(t);const n=performance.now()+Ye;k(He,()=>oe(n))})}};m.addEventListener("blur",()=>{window.setTimeout(()=>{s.play===m&&document.activeElement!==m&&re()},0)});const re=()=>{try{m.focus({preventScroll:!0})}catch{}},xe=()=>{y!=="in"&&y!=="hold"||(e.classList.add("is-play"),s.onPress=t=>m.classList.toggle("is-pressed",t),s.onPlay=we,s.play=m,re())};se(!0);let ie=!1;const ve=()=>Promise.all([me(a.bg),me(a.logo)]).then(([t,n])=>{if(y!=="load"||ie)return;if(!t||!n){R(!0);return}for(const l of S.splice(0))window.clearTimeout(l);L("in"),Z=performance.now(),Te();const i=e.querySelector(".msp-wait");i?.classList.contains("is-in")&&Number(getComputedStyle(i).opacity)>.05&&e.classList.add("is-booted"),e.classList.add("is-on"),r||(N=requestAnimationFrame(te)),k(J,()=>{L("hold"),i?.remove()}),k(J+De,xe)});a.studio.then(()=>(k(Math.max(0,a.loadBy-performance.now()),()=>{ie=!0,y==="load"&&R(!0)}),ve()))}export{He as SPLASH_BLACK_MIN_MS,de as SPLASH_DARK_MS,J as SPLASH_FADE_IN_MS,he as SPLASH_FADE_OUT_MS,De as SPLASH_PLAY_DELAY_MS,Ye as SPLASH_WAIT_MAX_MS,sa as playStudioSting,na as runSplash};

