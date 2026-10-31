import{a5 as ue,a6 as be,a7 as F,a8 as X}from"./index-CcGJDpw6.js";import"./phaser-0YPJO2g1.js";const k=600,ye=400,Z=450,oe=500,ge=150,ne=600,xe=15e3,ie=220,$={far:[-.012,-.014],near:[-.034,-.02],logo:[.016,.014],fx:[-.05,-.035]},ee=[5,4],ae=14,te=.45,ve=5200,we=1600,se=22,ke=26,Le="Georgia, 'Times New Roman', serif",Pe="polygon(var(--t) 0, calc(100% - var(--t)) 0, 100% 50%, calc(100% - var(--t)) 100%, var(--t) 100%, 0 50%)",Ae=`
#marche-splash { contain: strict; user-select: none; -webkit-user-select: none; touch-action: none; cursor: default; }
#marche-splash.is-out { animation: msp-out ${ne}ms ease-in forwards; pointer-events: none; }
#marche-splash.is-drop { animation-duration: ${ie}ms; }
#marche-splash .msp-veil { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; }
#marche-splash.is-dark .msp-veil { animation: msp-in ${oe}ms ease-in forwards; }
#marche-splash .msp-art { position: absolute; inset: 0; opacity: 0; }
#marche-splash.is-on .msp-art { animation: msp-in ${k}ms ease-out forwards; }
#marche-splash .msp-layer, #marche-splash .msp-drift { position: absolute; inset: -3%; will-change: transform; }
#marche-splash .msp-drift { inset: 0; }
#marche-splash .msp-layer img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 55%; pointer-events: none; }
#marche-splash.is-on .msp-drift { animation: msp-kb 4200ms cubic-bezier(.25,.6,.35,1) forwards; }
#marche-splash .msp-near {
  /* Only the blurred rocks of the bottom corners and edge: their blur hides the offset. */
  --msp-mask: radial-gradient(30% 36% at 0% 100%, #000 50%, transparent 100%), radial-gradient(22% 32% at 100% 100%, #000 45%, transparent 100%), linear-gradient(to top, #000, transparent 7%);
  -webkit-mask-image: var(--msp-mask); mask-image: var(--msp-mask);
}
#marche-splash .msp-vignette { position: absolute; inset: 0; background:
  radial-gradient(ellipse 40% 34% at 50% 50%, rgba(10, 5, 22, .62), rgba(10, 5, 22, .3) 60%, transparent 100%),
  radial-gradient(ellipse 85% 80% at 50% 50%, transparent 55%, rgba(6, 3, 12, .55) 100%); }
/* The logo and « Jouer » under it, centred together in the safe area: the logo sits above centre. */
#marche-splash .msp-safe { position: absolute; left: var(--msp-l, 0px); right: var(--msp-r, 0px); top: var(--msp-t, 0px); bottom: var(--msp-b, 0px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: clamp(12px, 3.6cqh, 28px); perspective: 900px; }
#marche-splash .msp-logo { position: relative; flex: none; width: min(56cqw, (100cqh - var(--msp-t, 0px) - var(--msp-b, 0px)) * 1.36); aspect-ratio: 1000 / 512; will-change: transform; }
#marche-splash .msp-play {
  --h: clamp(48px, 10.5cqh, 70px); --tip: calc(var(--h) * .34);
  position: relative; flex: none; display: grid; place-items: center; box-sizing: border-box;
  height: var(--h); min-width: clamp(184px, 23cqw, 300px); padding: 0 calc(var(--tip) + clamp(16px, 2.2cqw, 32px));
  margin: 0; border: 0; background: none; font: inherit; cursor: pointer; outline: none; visibility: hidden;
  -webkit-tap-highlight-color: transparent; transition: transform 90ms ease-out, filter 120ms ease-out;
}
#marche-splash .msp-play::before, #marche-splash .msp-play::after { content: ''; position: absolute; top: 50%; width: 9px; height: 9px;
  background: linear-gradient(135deg, #fff1b8, #d39a35 50%, #7a4612); box-shadow: 0 0 7px rgba(176, 76, 255, .75); transform: translateY(-50%) rotate(45deg); }
#marche-splash .msp-play::before { left: -13px; }
#marche-splash .msp-play::after { right: -13px; }
#marche-splash .msp-play > span { pointer-events: none; }
#marche-splash .msp-play-glow { position: absolute; inset: -55% -16%; border-radius: 50%; opacity: .6;
  background: radial-gradient(closest-side, rgba(176, 76, 255, .62), rgba(120, 40, 230, .22) 58%, transparent 100%); }
#marche-splash .msp-play-rim, #marche-splash .msp-play-face { position: absolute; clip-path: ${Pe}; }
#marche-splash .msp-play-rim { inset: 0; --t: var(--tip);
  background: linear-gradient(180deg, #fff3c4 0%, #f3c65a 24%, #9c5f1a 50%, #f0c160 74%, #6e3f10 100%); }
#marche-splash .msp-play-face { inset: 3px 5px; --t: calc(var(--tip) - 2.5px);
  background: radial-gradient(ellipse 60% 110% at 50% 118%, rgba(160, 80, 255, .5), transparent 70%),
    linear-gradient(180deg, #3a2640 0%, #1d1022 48%, #0e0711 100%);
  box-shadow: inset 0 1px 0 rgba(255, 230, 170, .3), inset 0 -2px 6px rgba(0, 0, 0, .5); }
#marche-splash .msp-play-label { position: relative; font: 700 clamp(22px, 5.4cqh, 36px) / 1 ${Le}; letter-spacing: .16em; text-indent: .16em; text-transform: uppercase;
  background: linear-gradient(180deg, #fff6d2 0%, #ffd978 38%, #c98a2c 62%, #ffe7a3 100%); -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 1px 0 rgba(20, 8, 4, .9)) drop-shadow(0 0 6px rgba(186, 100, 255, .65)); }
#marche-splash .msp-play:hover { filter: brightness(1.08); }
#marche-splash .msp-play:focus-visible .msp-play-rim { filter: brightness(1.12) saturate(1.1); }
#marche-splash .msp-play.is-pressed { transform: translateY(2px) scale(.965); filter: brightness(1.2); }
#marche-splash .msp-play.is-pressed .msp-play-glow { opacity: 1; animation: none; }
#marche-splash.is-play .msp-play { visibility: visible; animation: msp-play-in ${Z}ms cubic-bezier(.2,.7,.3,1) backwards; }
#marche-splash.is-play .msp-play-glow { animation: msp-play-pulse 1800ms ease-in-out ${Z}ms infinite alternate; }
#marche-splash .msp-float { position: absolute; inset: 0; }
#marche-splash.is-on .msp-float { animation: msp-rise ${k+500}ms cubic-bezier(.2,.7,.3,1) both, msp-float 2600ms ease-in-out ${k+500}ms infinite alternate; }
#marche-splash .msp-aura { position: absolute; inset: -18% -10%; border-radius: 50%; background: radial-gradient(closest-side, rgba(150, 70, 255, .34), rgba(110, 40, 220, .12) 55%, transparent 100%); opacity: .7; }
#marche-splash .msp-float img { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
#marche-splash .msp-glow { filter: blur(12px) saturate(1.5) brightness(1.25); opacity: .35; mix-blend-mode: screen; }
#marche-splash .msp-mark { filter: drop-shadow(0 4px 10px rgba(0, 0, 0, .55)); }
#marche-splash.is-on .msp-glow { animation: msp-pulse 1500ms ease-in-out infinite alternate; }
#marche-splash.is-on .msp-aura { animation: msp-aura 1500ms ease-in-out infinite alternate; }
#marche-splash .msp-fx { position: absolute; inset: -6%; pointer-events: none; will-change: transform; }
#marche-splash .msp-p { position: absolute; left: var(--x); top: var(--y); width: var(--s); height: var(--s); border-radius: 50%; opacity: 0;
  animation: var(--a) var(--d) linear var(--w) infinite; }
#marche-splash .msp-ember { background: radial-gradient(circle, #fff1c4 0, #ffb347 35%, rgba(255, 110, 30, .55) 60%, transparent 72%); box-shadow: 0 0 8px 2px rgba(255, 130, 40, .35); }
#marche-splash .msp-flake { background: radial-gradient(circle, rgba(255, 255, 255, .95) 0, rgba(225, 230, 255, .6) 45%, transparent 72%); }
#marche-splash .msp-flake.is-near { filter: blur(1.5px); }
@keyframes msp-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes msp-out { from { opacity: 1; } to { opacity: 0; } }
@keyframes msp-kb { from { transform: scale(1.06) translate3d(-1.1%, .7%, 0); } to { transform: scale(1.13) translate3d(1.1%, -.6%, 0); } }
@keyframes msp-rise { from { transform: translate3d(0, 4%, 0) scale(.93); } to { transform: none; } }
@keyframes msp-float { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, -2.2%, 0) scale(1.012); } }
@keyframes msp-pulse { from { opacity: .22; } to { opacity: .62; } }
@keyframes msp-play-in { from { opacity: 0; transform: translate3d(0, 10px, 0) scale(.96); } to { opacity: 1; transform: none; } }
@keyframes msp-play-pulse { from { opacity: .42; transform: scale(.96); } to { opacity: .92; transform: scale(1.05); } }
@keyframes msp-aura { from { opacity: .55; transform: scale(.97); } to { opacity: .95; transform: scale(1.04); } }
@keyframes msp-ember { 0% { opacity: 0; transform: translate3d(0, 0, 0); } 12% { opacity: var(--o); }
  70% { opacity: calc(var(--o) * .8); } 100% { opacity: 0; transform: translate3d(var(--dx), -70cqh, 0); } }
@keyframes msp-flake { 0% { opacity: 0; transform: translate3d(0, 0, 0); } 15% { opacity: var(--o); }
  85% { opacity: var(--o); } 100% { opacity: 0; transform: translate3d(var(--dx), 60cqh, 0); } }
@media (prefers-reduced-motion: reduce) {
  #marche-splash.is-on .msp-drift, #marche-splash.is-on .msp-float, #marche-splash.is-on .msp-glow, #marche-splash.is-on .msp-aura { animation: none; }
  #marche-splash .msp-drift { transform: scale(1.06); }
  #marche-splash .msp-fx { display: none; }
  #marche-splash.is-play .msp-play { animation-name: msp-in; }
  #marche-splash.is-play .msp-play-glow { animation: none; }
  #marche-splash .msp-play.is-pressed { transform: none; }
}
`;function Se(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function c(t,...a){const r=document.createElement("div");return r.className=t,r.append(...a),r}function _e(t){let a=t>>>0;return()=>{a=a+1831565813>>>0;let r=a;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function Me(){const t=c("msp-fx"),a=_e(24301),r=m=>`${(m*100).toFixed(1)}%`;for(let m=0;m<se+ke;m++){const o=m<se,u=c(`msp-p ${o?"msp-ember":"msp-flake"}`),d=!o&&a()<.3;d&&u.classList.add("is-near");const g=o?2600+a()*2600:4200+a()*3600,L=o?4+a()*6:d?7+a()*6:2.5+a()*3.5,I={"--x":r(o?.3+a()*.55:a()),"--y":r(o?.72+a()*.3:-.08+a()*.55),"--s":`${L.toFixed(1)}px`,"--o":(o?.55+a()*.45:d?.5+a()*.3:.45+a()*.45).toFixed(2),"--dx":`${((o?-40:-60)+a()*(o?110:90)).toFixed(0)}px`,"--a":o?"msp-ember":"msp-flake","--d":`${g.toFixed(0)}ms`,"--w":`${(-a()*g).toFixed(0)}ms`};for(const[P,i]of Object.entries(I))u.style.setProperty(P,i);t.append(u)}return t}function re(t){return typeof t.decode=="function"?t.decode().then(()=>!0,()=>t.complete&&t.naturalWidth>0):t.complete?Promise.resolve(t.naturalWidth>0):new Promise(a=>{t.addEventListener("load",()=>a(!0),{once:!0}),t.addEventListener("error",()=>a(!1),{once:!0})})}function Ee(t,a){const r=F(),m=X(r,0,0),o=X(r,t,a);return[o.x-m.x,o.y-m.y]}const T=t=>Math.max(-1,Math.min(1,t));function Fe(t){const{cover:a,shield:r}=t,m=Se(),o=document.createElement("style");o.id="marche-splash-css",o.textContent=Ae,document.head.append(o),t.bg.className="msp-bg",t.logo.className="msp-mark";const u=t.bg.cloneNode(),d=t.logo.cloneNode();d.className="msp-glow",d.alt="";for(const e of[t.bg,u,d])e.setAttribute("aria-hidden","true");const g=c("msp-layer msp-far",c("msp-drift",t.bg)),L=c("msp-layer msp-near",c("msp-drift",u)),I=c("msp-aura"),P=c("msp-logo",c("msp-float",I,d,t.logo)),i=document.createElement("button");i.type="button",i.id=ue,i.className="msp-play";const N=document.createElement("span");N.className="msp-play-label",N.textContent=t.playLabel;for(const e of["msp-play-glow","msp-play-rim","msp-play-face"]){const s=document.createElement("span");s.className=e,i.append(s)}i.append(N);const pe=c("msp-safe",P,i),A=m?null:Me(),D=c("msp-art",g,L,c("msp-vignette"),pe);A&&D.append(A);const C=c("msp-veil");a.append(D,C),a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-label",t.alt);let f="load",j=0,q=0;const x=[],b=(e,s)=>{x.push(window.setTimeout(s,e))},U=(e,s,n)=>{let p=!1;const l=()=>{p||(p=!0,e.removeEventListener("animationend",h),n())},h=w=>{w.target===e&&l()};e.addEventListener("animationend",h),b(s+400,l)},v=e=>{f=e,a.dataset.phase=e},B=()=>{const e=getComputedStyle(document.documentElement),s=l=>parseFloat(e.getPropertyValue(`--sai-${l}`))||0,n={top:s("top"),right:s("right"),bottom:s("bottom"),left:s("left")},p=be(n,F().rot);a.style.setProperty("--msp-t",`${p.top}px`),a.style.setProperty("--msp-r",`${p.right}px`),a.style.setProperty("--msp-b",`${p.bottom}px`),a.style.setProperty("--msp-l",`${p.left}px`)};B();let O=0,Y=0,H=-1/0,S=0,_=0,R=null;const le=e=>{const s=F(),n=X(s,e.clientX,e.clientY);O=T(n.x/Math.max(1,s.w)*2-1),Y=T(n.y/Math.max(1,s.h)*2-1),H=performance.now()},ce=e=>{if(e.beta===null||e.gamma===null)return;const s=((screen.orientation?.angle??0)%360+360)%360,n=e.gamma,p=e.beta,[l,h]=s===90?[p,-n]:s===180?[-n,-p]:s===270?[-p,n]:[n,p];R??=[l,h];const[w,y]=Ee(l-R[0],h-R[1]);O=T(w/ae),Y=T(y/ae),H=performance.now()},M=(e,s,n,p,l="")=>{e.style.transform=`translate3d(${(S*s[0]*n).toFixed(2)}px, ${(_*s[1]*p).toFixed(2)}px, 0)${l}`},G=e=>{q=requestAnimationFrame(G);const s=(e-j)/ve,n=Math.sin(s*Math.PI*2)*te,p=Math.sin(s*Math.PI*4+.6)*te*.55,l=Math.max(0,Math.min(1,1-(e-H-we)/900)),h=n*(1-l)+O*l,w=p*(1-l)+Y*l;S+=(h-S)*.07,_+=(w-_)*.07;const{w:y,h:E}=F();M(g,$.far,y,E),M(L,$.near,y,E),M(P,$.logo,y,E,` rotateY(${(S*ee[0]).toFixed(2)}deg) rotateX(${(-_*ee[1]).toFixed(2)}deg)`),A&&M(A,$.fx,y,E)},K=e=>{const s=e?"addEventListener":"removeEventListener";window[s]("resize",B),!m&&(window[s]("pointermove",le,{passive:!0}),window[s]("deviceorientation",ce))},W=()=>{cancelAnimationFrame(q),K(!1)},me=()=>{for(const e of x.splice(0))window.clearTimeout(e);W(),a.remove(),o.remove(),r.onPress=null,r.lift()},z=(e=!1)=>{if(f!=="out"){v("out");for(const s of x.splice(0))window.clearTimeout(s);a.classList.add("is-out"),e&&a.classList.add("is-drop"),U(a,e?ie:ne,me)}},J=e=>{t.isReady()||performance.now()>=e?z():b(100,()=>J(e))},de=()=>{if(!(f!=="in"&&f!=="hold")){v("dark");for(const e of x.splice(0))window.clearTimeout(e);r.onPress=null,r.play=null,i.classList.add("is-pressed"),i.blur(),a.classList.add("is-dark"),U(C,oe,()=>{v("black"),W(),D.remove();const e=performance.now()+xe;b(ge,()=>J(e))})}};i.addEventListener("blur",()=>{window.setTimeout(()=>{r.play===i&&document.activeElement!==i&&V()},0)});const V=()=>{try{i.focus({preventScroll:!0})}catch{}},fe=()=>{f!=="in"&&f!=="hold"||(a.classList.add("is-play"),r.onPress=e=>i.classList.toggle("is-pressed",e),r.onPlay=de,r.play=i,V())};K(!0);const he=Math.max(0,t.loadBy-performance.now());let Q=!1;b(he,()=>{Q=!0,f==="load"&&z(!0)}),Promise.all([re(t.bg),re(t.logo)]).then(([e,s])=>{if(!(f!=="load"||Q)){if(!e||!s){z(!0);return}for(const n of x.splice(0))window.clearTimeout(n);v("in"),j=performance.now(),a.classList.add("is-on"),m||(q=requestAnimationFrame(G)),b(k,()=>v("hold")),b(k+ye,fe)}})}export{ge as SPLASH_BLACK_MIN_MS,oe as SPLASH_DARK_MS,k as SPLASH_FADE_IN_MS,ne as SPLASH_FADE_OUT_MS,ye as SPLASH_PLAY_DELAY_MS,xe as SPLASH_WAIT_MAX_MS,Fe as runSplash};

