import{dK as ue,dL as ge,dM as be,dN as ye,dO as we,dP as R,dQ as z,dR as ve}from"./index-DXWm3Meo.js";import"./phaser-DIUF0PZB.js";const C=600,xe=400,ee=450,ne=500,ke=150,oe=600,Le=15e3,ie=220,Se=450,Ae=7e3,_e=1600,Pe=[[.494,.052,.095,4200,-600],[.494,.318,.08,5200,-2600],[.259,.4,.06,6100,-4700],[.731,.4,.06,5800,-2e3],[.215,.525,.07,4600,-1500],[.772,.525,.07,4900,-3900],[.49,.915,.08,5600,-300]],X={far:[-.012,-.014],near:[-.034,-.02],fx:[-.05,-.035]},ae=14,te=.45,Me=5200,Ee=1600,se=22,Te=26,$e="Georgia, 'Times New Roman', serif",Fe="polygon(var(--t) 0, calc(100% - var(--t)) 0, 100% 50%, calc(100% - var(--t)) 100%, var(--t) 100%, 0 50%)",Ne=`
#marche-splash { contain: strict; user-select: none; -webkit-user-select: none; touch-action: none; cursor: default; }
#marche-splash.is-out { animation: msp-out ${oe}ms ease-in forwards; pointer-events: none; }
#marche-splash.is-drop { animation-duration: ${ie}ms; }
#marche-splash .msp-veil { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; }
#marche-splash.is-dark .msp-veil { animation: msp-in ${ne}ms ease-in forwards; }
#marche-splash .msp-art { position: absolute; inset: 0; opacity: 0; }
#marche-splash.is-on .msp-art { animation: msp-in ${C}ms ease-out forwards; }
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
#marche-splash .msp-hold { opacity: 0; animation: msp-in 700ms ease-out ${Se}ms forwards; }
#marche-splash .msp-play {
  /* The plaque (--h); the button around it at least 44 px tall: the thumb's target. */
  --h: ${ue}; --tip: calc(var(--h) * .34);
  position: relative; flex: none; display: grid; place-items: center; box-sizing: border-box;
  height: ${ge}; min-width: clamp(132px, 16.5cqw, 216px); padding: 0 calc(var(--tip) + clamp(12px, 1.6cqw, 24px));
  margin: 0 0 ${be}; border: 0; background: none; font: inherit; cursor: pointer; outline: none; visibility: hidden;
  -webkit-tap-highlight-color: transparent; transition: transform 90ms ease-out, filter 120ms ease-out;
}
#marche-splash .msp-play::before, #marche-splash .msp-play::after { content: ''; position: absolute; top: 50%; width: 7px; height: 7px;
  background: linear-gradient(135deg, #fff1b8, #d39a35 50%, #7a4612); box-shadow: 0 0 7px rgba(176, 76, 255, .75); transform: translateY(-50%) rotate(45deg); }
#marche-splash .msp-play::before { left: -10px; }
#marche-splash .msp-play::after { right: -10px; }
#marche-splash .msp-play > span { pointer-events: none; }
#marche-splash .msp-play-glow { position: absolute; inset: calc(50% - var(--h) * 1.05) -16%; border-radius: 50%; opacity: .6;
  background: radial-gradient(closest-side, rgba(176, 76, 255, .62), rgba(120, 40, 230, .22) 58%, transparent 100%); }
#marche-splash .msp-play-rim, #marche-splash .msp-play-face { position: absolute; clip-path: ${Fe}; }
#marche-splash .msp-play-rim { left: 0; right: 0; top: calc(50% - var(--h) / 2); height: var(--h); --t: var(--tip);
  background: linear-gradient(180deg, #fff3c4 0%, #f3c65a 24%, #9c5f1a 50%, #f0c160 74%, #6e3f10 100%); }
#marche-splash .msp-play-face { left: 4px; right: 4px; top: calc(50% - var(--h) / 2 + 2.5px); height: calc(var(--h) - 5px); --t: calc(var(--tip) - 2px);
  background: radial-gradient(ellipse 60% 110% at 50% 118%, rgba(160, 80, 255, .5), transparent 70%),
    linear-gradient(180deg, #3a2640 0%, #1d1022 48%, #0e0711 100%);
  box-shadow: inset 0 1px 0 rgba(255, 230, 170, .3), inset 0 -2px 6px rgba(0, 0, 0, .5); }
#marche-splash .msp-play-label { position: relative; font: 700 clamp(16px, 3.9cqh, 26px) / 1 ${$e}; letter-spacing: .16em; text-indent: .16em; text-transform: uppercase;
  background: linear-gradient(180deg, #fff6d2 0%, #ffd978 38%, #c98a2c 62%, #ffe7a3 100%); -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 1px 0 rgba(20, 8, 4, .9)) drop-shadow(0 0 6px rgba(186, 100, 255, .65)); }
#marche-splash .msp-play:hover { filter: brightness(1.08); }
#marche-splash .msp-play:focus-visible .msp-play-rim { filter: brightness(1.12) saturate(1.1); }
#marche-splash .msp-play.is-pressed { filter: brightness(1.2); }
#marche-splash .msp-play.is-pressed .msp-play-glow { opacity: 1; animation: none; }
#marche-splash.is-play .msp-play { visibility: visible; animation: msp-play-in ${ee}ms cubic-bezier(.2,.7,.3,1) backwards; }
#marche-splash.is-play .msp-play-glow { animation: msp-play-pulse 1800ms ease-in-out ${ee}ms infinite alternate; }
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
#marche-splash.is-on .msp-sheen::before { animation: msp-sweep ${Ae}ms cubic-bezier(.45,.05,.55,.95) ${_e}ms infinite; }
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
@media (prefers-reduced-motion: reduce) {
  #marche-splash.is-on .msp-drift, #marche-splash.is-on .msp-float, #marche-splash.is-on.is-booted .msp-float, #marche-splash.is-on .msp-glow, #marche-splash.is-on .msp-aura { animation: none; }
  #marche-splash .msp-drift { transform: none; }
  #marche-splash .msp-fx, #marche-splash .msp-sheen, #marche-splash .msp-glint { display: none; }
  #marche-splash.is-play .msp-play { animation-name: msp-in; }
  #marche-splash.is-play .msp-play-glow { animation: none; }
  #marche-splash .msp-play.is-pressed { transform: none; }
}
`;function De(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function i(t,...e){const r=document.createElement("div");return r.className=t,r.append(...e),r}function He(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let r=e;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function Ie(){const t=i("msp-fx"),e=He(24301),r=d=>`${(d*100).toFixed(1)}%`;for(let d=0;d<se+Te;d++){const o=d<se,b=i(`msp-p ${o?"msp-ember":"msp-flake"}`),h=!o&&e()<.3;h&&b.classList.add("is-near");const w=o?2600+e()*2600:4200+e()*3600,L=o?4+e()*6:h?7+e()*6:2.5+e()*3.5,_={"--x":r(o?.3+e()*.55:e()),"--y":r(o?.72+e()*.3:-.08+e()*.55),"--s":`${L.toFixed(1)}px`,"--o":(o?.55+e()*.45:h?.5+e()*.3:.45+e()*.45).toFixed(2),"--dx":`${((o?-40:-60)+e()*(o?110:90)).toFixed(0)}px`,"--a":o?"msp-ember":"msp-flake","--d":`${w.toFixed(0)}ms`,"--w":`${(-e()*w).toFixed(0)}ms`};for(const[P,M]of Object.entries(_))b.style.setProperty(P,M);t.append(b)}return t}function re(t){return typeof t.decode=="function"?t.decode().then(()=>!0,()=>t.complete&&t.naturalWidth>0):t.complete?Promise.resolve(t.naturalWidth>0):new Promise(e=>{t.addEventListener("load",()=>e(!0),{once:!0}),t.addEventListener("error",()=>e(!1),{once:!0})})}function Oe(t,e){const r=R(),d=z(r,0,0),o=z(r,t,e);return[o.x-d.x,o.y-d.y]}const A=t=>Math.max(-1,Math.min(1,t));function Xe(t){const{cover:e,shield:r}=t,d=De(),o=document.createElement("style");o.id="marche-splash-css",o.textContent=Ne,document.head.append(o),t.bg.className="msp-bg",t.logo.className="msp-mark";const b=t.bg.cloneNode(),h=t.logo.cloneNode();h.className="msp-glow",h.alt="";for(const a of[t.bg,b,h])a.setAttribute("aria-hidden","true");const w=i("msp-layer msp-far",i("msp-drift",t.bg)),L=i("msp-layer msp-near",i("msp-drift",b)),_=i("msp-aura");e.style.setProperty("--msp-logo",`url("${t.logo.src}")`);const P=Pe.map(([a,s,n,l,c])=>{const m=i("msp-glint");m.setAttribute("aria-hidden","true");const u={"--x":a,"--y":s,"--s":n};for(const[g,k]of Object.entries(u))m.style.setProperty(g,`${(k*100).toFixed(1)}%`);return m.style.setProperty("--d",`${l}ms`),m.style.setProperty("--w",`${c}ms`),m}),M=i("msp-logo",i("msp-float",_,h,t.logo,i("msp-sheen"),...P)),p=document.createElement("button");p.type="button",p.id=ye,p.className="msp-play";const E=document.createElement("span");E.className="msp-play-label",E.textContent=t.playLabel;for(const a of["msp-play-glow","msp-play-rim","msp-play-face"]){const s=document.createElement("span");s.className=a,p.append(s)}p.append(E);const le=i("msp-safe",M,p),S=d?null:Ie();e.style.setProperty("--msp-bg",`url("${t.bg.src}")`);const T=i("msp-art",i("msp-fill"),w,L,i("msp-vignette"),le);S&&T.append(S);const W=i("msp-veil");e.append(T,W),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",t.alt);let f="load",B=0,$=0;const v=[],y=(a,s)=>{v.push(window.setTimeout(s,a))},G=(a,s,n)=>{let l=!1;const c=()=>{l||(l=!0,a.removeEventListener("animationend",m),n())},m=u=>{u.target===a&&c()};a.addEventListener("animationend",m),y(s+400,c)},x=a=>{f=a,e.dataset.phase=a},K=()=>we(e);K();let F=0,N=0,D=-1/0,H=0,I=0,O=null;const pe=a=>{const s=R(),n=z(s,a.clientX,a.clientY);F=A(n.x/Math.max(1,s.w)*2-1),N=A(n.y/Math.max(1,s.h)*2-1),D=performance.now()},ce=a=>{if(a.beta===null||a.gamma===null)return;const s=((screen.orientation?.angle??0)%360+360)%360,n=a.gamma,l=a.beta,[c,m]=s===90?[l,-n]:s===180?[-n,-l]:s===270?[-l,n]:[n,l];O??=[c,m];const[u,g]=Oe(c-O[0],m-O[1]);F=A(u/ae),N=A(g/ae),D=performance.now()},q=(a,s,n,l,c="")=>{a.style.transform=`translate3d(${(H*s[0]*n).toFixed(2)}px, ${(I*s[1]*l).toFixed(2)}px, 0)${c}`},U=a=>{$=requestAnimationFrame(U);const s=(a-B)/Me,n=Math.sin(s*Math.PI*2)*te,l=Math.sin(s*Math.PI*4+.6)*te*.55,c=Math.max(0,Math.min(1,1-(a-D-Ee)/900)),m=n*(1-c)+F*c,u=l*(1-c)+N*c;H+=(m-H)*.07,I+=(u-I)*.07;const{w:g,h:k}=R();q(w,X.far,g,k),q(L,X.near,g,k),S&&q(S,X.fx,g,k)},j=a=>{const s=a?"addEventListener":"removeEventListener";window[s]("resize",K),!d&&(window[s]("pointermove",pe,{passive:!0}),window[s]("deviceorientation",ce))},J=()=>{cancelAnimationFrame($),j(!1)},me=()=>{for(const a of v.splice(0))window.clearTimeout(a);J(),e.remove(),o.remove(),r.onPress=null,r.lift()},Y=(a=!1)=>{if(f!=="out"){x("out");for(const s of v.splice(0))window.clearTimeout(s);e.classList.add("is-out"),a&&e.classList.add("is-drop"),G(e,a?ie:oe,me)}},Q=a=>{t.isReady()||performance.now()>=a?Y():y(100,()=>Q(a))},de=()=>{if(!(f!=="in"&&f!=="hold")){x("dark");for(const a of v.splice(0))window.clearTimeout(a);r.onPress=null,r.play=null,p.classList.add("is-pressed"),p.blur(),e.querySelector(".msp-wait")?.remove(),e.classList.add("is-dark"),G(W,ne,()=>{x("black"),J(),T.remove();const a=ve(t.logo);a.classList.add("msp-hold"),e.append(a);const s=performance.now()+Le;y(ke,()=>Q(s))})}};p.addEventListener("blur",()=>{window.setTimeout(()=>{r.play===p&&document.activeElement!==p&&V()},0)});const V=()=>{try{p.focus({preventScroll:!0})}catch{}},he=()=>{f!=="in"&&f!=="hold"||(e.classList.add("is-play"),r.onPress=a=>p.classList.toggle("is-pressed",a),r.onPlay=de,r.play=p,V())};j(!0);let Z=!1;const fe=()=>Promise.all([re(t.bg),re(t.logo)]).then(([a,s])=>{if(f!=="load"||Z)return;if(!a||!s){Y(!0);return}for(const l of v.splice(0))window.clearTimeout(l);x("in"),B=performance.now();const n=e.querySelector(".msp-wait");n?.classList.contains("is-in")&&Number(getComputedStyle(n).opacity)>.05&&e.classList.add("is-booted"),e.classList.add("is-on"),d||($=requestAnimationFrame(U)),y(C,()=>{x("hold"),n?.remove()}),y(C+xe,he)});t.studio.then(()=>(y(Math.max(0,t.loadBy-performance.now()),()=>{Z=!0,f==="load"&&Y(!0)}),fe()))}export{ke as SPLASH_BLACK_MIN_MS,ne as SPLASH_DARK_MS,C as SPLASH_FADE_IN_MS,oe as SPLASH_FADE_OUT_MS,xe as SPLASH_PLAY_DELAY_MS,Le as SPLASH_WAIT_MAX_MS,Xe as runSplash};

