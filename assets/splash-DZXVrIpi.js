import{dM as be,dN as ye,dO as we,dP as ve,dQ as xe,dR as ke,dS as C,dT as G,dU as Le}from"./index-CeSbvDLi.js";import"./phaser-DIUF0PZB.js";const U=600,Se=400,R=450,ie=500,_e=150,pe=600,Ae=15e3,le=220,Pe=450,Ee=7e3,Me=1600,Te=[[.494,.052,.095,4200,-600],[.494,.318,.08,5200,-2600],[.259,.4,.06,6100,-4700],[.731,.4,.06,5800,-2e3],[.215,.525,.07,4600,-1500],[.772,.525,.07,4900,-3900],[.49,.915,.08,5600,-300]],z={far:[-.012,-.014],near:[-.034,-.02],fx:[-.05,-.035]},se=14,re=.45,$e=5200,Fe=1600,oe=22,Ne=26,Oe="Georgia, 'Times New Roman', serif",De="polygon(var(--t) 0, calc(100% - var(--t)) 0, 100% 50%, calc(100% - var(--t)) 100%, var(--t) 100%, 0 50%)",Ie=`
#marche-splash { contain: strict; user-select: none; -webkit-user-select: none; touch-action: none; cursor: default; }
#marche-splash.is-out { animation: msp-out ${pe}ms ease-in forwards; pointer-events: none; }
#marche-splash.is-drop { animation-duration: ${le}ms; }
#marche-splash .msp-veil { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; }
#marche-splash.is-dark .msp-veil { animation: msp-in ${ie}ms ease-in forwards; }
#marche-splash .msp-art { position: absolute; inset: 0; opacity: 0; }
#marche-splash.is-on .msp-art { animation: msp-in ${U}ms ease-out forwards; }
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
#marche-splash .msp-hold { opacity: 0; animation: msp-in 700ms ease-out ${Pe}ms forwards; }
#marche-splash .msp-play {
  /* The plaque (--h); the button around it at least 44 px tall: the thumb's target. */
  --h: ${be}; --tip: calc(var(--h) * .34);
  position: relative; flex: none; display: grid; place-items: center; box-sizing: border-box;
  height: ${ye}; min-width: clamp(132px, 16.5cqw, 216px); padding: 0 calc(var(--tip) + clamp(12px, 1.6cqw, 24px));
  margin: 0 0 ${we}; border: 0; background: none; font: inherit; cursor: pointer; outline: none; visibility: hidden;
  -webkit-tap-highlight-color: transparent; transition: transform 90ms ease-out, filter 120ms ease-out;
}
#marche-splash .msp-play::before, #marche-splash .msp-play::after { content: ''; position: absolute; top: 50%; width: 7px; height: 7px;
  background: linear-gradient(135deg, #fff1b8, #d39a35 50%, #7a4612); box-shadow: 0 0 7px rgba(176, 76, 255, .75); transform: translateY(-50%) rotate(45deg); }
#marche-splash .msp-play::before { left: -10px; }
#marche-splash .msp-play::after { right: -10px; }
#marche-splash .msp-play > span { pointer-events: none; }
#marche-splash .msp-play-glow { position: absolute; inset: calc(50% - var(--h) * 1.05) -16%; border-radius: 50%; opacity: .6;
  background: radial-gradient(closest-side, rgba(176, 76, 255, .62), rgba(120, 40, 230, .22) 58%, transparent 100%); }
#marche-splash .msp-play-rim, #marche-splash .msp-play-face { position: absolute; clip-path: ${De}; }
#marche-splash .msp-play-rim { left: 0; right: 0; top: calc(50% - var(--h) / 2); height: var(--h); --t: var(--tip);
  background: linear-gradient(180deg, #fff3c4 0%, #f3c65a 24%, #9c5f1a 50%, #f0c160 74%, #6e3f10 100%); }
#marche-splash .msp-play-face { left: 4px; right: 4px; top: calc(50% - var(--h) / 2 + 2.5px); height: calc(var(--h) - 5px); --t: calc(var(--tip) - 2px);
  background: radial-gradient(ellipse 60% 110% at 50% 118%, rgba(160, 80, 255, .5), transparent 70%),
    linear-gradient(180deg, #3a2640 0%, #1d1022 48%, #0e0711 100%);
  box-shadow: inset 0 1px 0 rgba(255, 230, 170, .3), inset 0 -2px 6px rgba(0, 0, 0, .5); }
#marche-splash .msp-play-label { position: relative; font: 700 clamp(16px, 3.9cqh, 26px) / 1 ${Oe}; letter-spacing: .16em; text-indent: .16em; text-transform: uppercase;
  background: linear-gradient(180deg, #fff6d2 0%, #ffd978 38%, #c98a2c 62%, #ffe7a3 100%); -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 1px 0 rgba(20, 8, 4, .9)) drop-shadow(0 0 6px rgba(186, 100, 255, .65)); }
#marche-splash .msp-play:hover { filter: brightness(1.08); }
#marche-splash .msp-play:focus-visible .msp-play-rim { filter: brightness(1.12) saturate(1.1); }
#marche-splash .msp-play.is-pressed { filter: brightness(1.2); }
#marche-splash .msp-play.is-pressed .msp-play-glow { opacity: 1; animation: none; }
#marche-splash.is-play .msp-play { visibility: visible; animation: msp-play-in ${R}ms cubic-bezier(.2,.7,.3,1) backwards; }
#marche-splash.is-play .msp-play-glow { animation: msp-play-pulse 1800ms ease-in-out ${R}ms infinite alternate; }
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
#marche-splash.is-on .msp-sheen::before { animation: msp-sweep ${Ee}ms cubic-bezier(.45,.05,.55,.95) ${Me}ms infinite; }
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
  opacity: 0; transition: opacity ${R}ms ease-out; filter: drop-shadow(0 1px 2px rgba(0, 0, 0, .7)); }
#marche-splash.is-play .msp-foot { opacity: .72; }
#marche-splash .msp-studio { left: max(14px, env(safe-area-inset-left)); height: clamp(20px, 5.6cqh, 32px); width: auto; }
#marche-splash .msp-version { right: max(14px, env(safe-area-inset-right)); color: #f3e6c8;
  font: 600 clamp(10px, 2.9cqh, 13px)/1 system-ui, sans-serif; letter-spacing: .06em; }
@media (prefers-reduced-motion: reduce) {
  #marche-splash.is-on .msp-drift, #marche-splash.is-on .msp-float, #marche-splash.is-on.is-booted .msp-float, #marche-splash.is-on .msp-glow, #marche-splash.is-on .msp-aura { animation: none; }
  #marche-splash .msp-drift { transform: none; }
  #marche-splash .msp-fx, #marche-splash .msp-sheen, #marche-splash .msp-glint { display: none; }
  #marche-splash.is-play .msp-play { animation-name: msp-in; }
  #marche-splash.is-play .msp-play-glow { animation: none; }
  #marche-splash .msp-play.is-pressed { transform: none; }
}
`;function qe(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function i(t,...e){const r=document.createElement("div");return r.className=t,r.append(...e),r}function He(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let r=e;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function Ye(){const t=i("msp-fx"),e=He(24301),r=d=>`${(d*100).toFixed(1)}%`;for(let d=0;d<oe+Ne;d++){const n=d<oe,b=i(`msp-p ${n?"msp-ember":"msp-flake"}`),h=!n&&e()<.3;h&&b.classList.add("is-near");const w=n?2600+e()*2600:4200+e()*3600,L=n?4+e()*6:h?7+e()*6:2.5+e()*3.5,P={"--x":r(n?.3+e()*.55:e()),"--y":r(n?.72+e()*.3:-.08+e()*.55),"--s":`${L.toFixed(1)}px`,"--o":(n?.55+e()*.45:h?.5+e()*.3:.45+e()*.45).toFixed(2),"--dx":`${((n?-40:-60)+e()*(n?110:90)).toFixed(0)}px`,"--a":n?"msp-ember":"msp-flake","--d":`${w.toFixed(0)}ms`,"--w":`${(-e()*w).toFixed(0)}ms`};for(const[E,M]of Object.entries(P))b.style.setProperty(E,M);t.append(b)}return t}function ne(t){return typeof t.decode=="function"?t.decode().then(()=>!0,()=>t.complete&&t.naturalWidth>0):t.complete?Promise.resolve(t.naturalWidth>0):new Promise(e=>{t.addEventListener("load",()=>e(!0),{once:!0}),t.addEventListener("error",()=>e(!1),{once:!0})})}function Xe(t,e){const r=C(),d=G(r,0,0),n=G(r,t,e);return[n.x-d.x,n.y-d.y]}const A=t=>Math.max(-1,Math.min(1,t));function Ce(t){const{cover:e,shield:r}=t,d=qe(),n=document.createElement("style");n.id="marche-splash-css",n.textContent=Ie,document.head.append(n),t.bg.className="msp-bg",t.logo.className="msp-mark";const b=t.bg.cloneNode(),h=t.logo.cloneNode();h.className="msp-glow",h.alt="";for(const a of[t.bg,b,h])a.setAttribute("aria-hidden","true");const w=i("msp-layer msp-far",i("msp-drift",t.bg)),L=i("msp-layer msp-near",i("msp-drift",b)),P=i("msp-aura");e.style.setProperty("--msp-logo",`url("${t.logo.src}")`);const E=Te.map(([a,s,o,p,c])=>{const m=i("msp-glint");m.setAttribute("aria-hidden","true");const u={"--x":a,"--y":s,"--s":o};for(const[g,k]of Object.entries(u))m.style.setProperty(g,`${(k*100).toFixed(1)}%`);return m.style.setProperty("--d",`${p}ms`),m.style.setProperty("--w",`${c}ms`),m}),M=i("msp-logo",i("msp-float",P,h,t.logo,i("msp-sheen"),...E)),l=document.createElement("button");l.type="button",l.id=ve,l.className="msp-play";const T=document.createElement("span");T.className="msp-play-label",T.textContent=t.playLabel;for(const a of["msp-play-glow","msp-play-rim","msp-play-face"]){const s=document.createElement("span");s.className=a,l.append(s)}l.append(T);const ce=i("msp-safe",M,l),S=d?null:Ye();e.style.setProperty("--msp-bg",`url("${t.bg.src}")`);const _=document.createElement("img");_.className="msp-foot msp-studio",_.src=xe,_.alt="Volta Games";const W=i("msp-foot msp-version");W.textContent="V1.0.1";const $=i("msp-art",i("msp-fill"),w,L,i("msp-vignette"),ce,_,W);S&&$.append(S);const B=i("msp-veil");e.append($,B),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",t.alt);let f="load",K=0,F=0;const v=[],y=(a,s)=>{v.push(window.setTimeout(s,a))},j=(a,s,o)=>{let p=!1;const c=()=>{p||(p=!0,a.removeEventListener("animationend",m),o())},m=u=>{u.target===a&&c()};a.addEventListener("animationend",m),y(s+400,c)},x=a=>{f=a,e.dataset.phase=a},J=()=>ke(e);J();let N=0,O=0,D=-1/0,I=0,q=0,H=null;const me=a=>{const s=C(),o=G(s,a.clientX,a.clientY);N=A(o.x/Math.max(1,s.w)*2-1),O=A(o.y/Math.max(1,s.h)*2-1),D=performance.now()},de=a=>{if(a.beta===null||a.gamma===null)return;const s=((screen.orientation?.angle??0)%360+360)%360,o=a.gamma,p=a.beta,[c,m]=s===90?[p,-o]:s===180?[-o,-p]:s===270?[-p,o]:[o,p];H??=[c,m];const[u,g]=Xe(c-H[0],m-H[1]);N=A(u/se),O=A(g/se),D=performance.now()},Y=(a,s,o,p,c="")=>{a.style.transform=`translate3d(${(I*s[0]*o).toFixed(2)}px, ${(q*s[1]*p).toFixed(2)}px, 0)${c}`},V=a=>{F=requestAnimationFrame(V);const s=(a-K)/$e,o=Math.sin(s*Math.PI*2)*re,p=Math.sin(s*Math.PI*4+.6)*re*.55,c=Math.max(0,Math.min(1,1-(a-D-Fe)/900)),m=o*(1-c)+N*c,u=p*(1-c)+O*c;I+=(m-I)*.07,q+=(u-q)*.07;const{w:g,h:k}=C();Y(w,z.far,g,k),Y(L,z.near,g,k),S&&Y(S,z.fx,g,k)},Q=a=>{const s=a?"addEventListener":"removeEventListener";window[s]("resize",J),!d&&(window[s]("pointermove",me,{passive:!0}),window[s]("deviceorientation",de))},Z=()=>{cancelAnimationFrame(F),Q(!1)},he=()=>{for(const a of v.splice(0))window.clearTimeout(a);Z(),e.remove(),n.remove(),r.onPress=null,r.lift()},X=(a=!1)=>{if(f!=="out"){x("out");for(const s of v.splice(0))window.clearTimeout(s);e.classList.add("is-out"),a&&e.classList.add("is-drop"),j(e,a?le:pe,he)}},ee=a=>{t.isReady()||performance.now()>=a?X():y(100,()=>ee(a))},fe=()=>{if(!(f!=="in"&&f!=="hold")){x("dark");for(const a of v.splice(0))window.clearTimeout(a);r.onPress=null,r.play=null,l.classList.add("is-pressed"),l.blur(),e.querySelector(".msp-wait")?.remove(),e.classList.add("is-dark"),j(B,ie,()=>{x("black"),Z(),$.remove();const a=Le(t.logo);a.classList.add("msp-hold"),e.append(a);const s=performance.now()+Ae;y(_e,()=>ee(s))})}};l.addEventListener("blur",()=>{window.setTimeout(()=>{r.play===l&&document.activeElement!==l&&ae()},0)});const ae=()=>{try{l.focus({preventScroll:!0})}catch{}},ue=()=>{f!=="in"&&f!=="hold"||(e.classList.add("is-play"),r.onPress=a=>l.classList.toggle("is-pressed",a),r.onPlay=fe,r.play=l,ae())};Q(!0);let te=!1;const ge=()=>Promise.all([ne(t.bg),ne(t.logo)]).then(([a,s])=>{if(f!=="load"||te)return;if(!a||!s){X(!0);return}for(const p of v.splice(0))window.clearTimeout(p);x("in"),K=performance.now();const o=e.querySelector(".msp-wait");o?.classList.contains("is-in")&&Number(getComputedStyle(o).opacity)>.05&&e.classList.add("is-booted"),e.classList.add("is-on"),d||(F=requestAnimationFrame(V)),y(U,()=>{x("hold"),o?.remove()}),y(U+Se,ue)});t.studio.then(()=>(y(Math.max(0,t.loadBy-performance.now()),()=>{te=!0,f==="load"&&X(!0)}),ge()))}export{_e as SPLASH_BLACK_MIN_MS,ie as SPLASH_DARK_MS,U as SPLASH_FADE_IN_MS,pe as SPLASH_FADE_OUT_MS,Se as SPLASH_PLAY_DELAY_MS,Ae as SPLASH_WAIT_MAX_MS,Ce as runSplash};

