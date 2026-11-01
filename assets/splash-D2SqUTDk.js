import{a5 as ga,a6 as ba,a7 as ya,a8 as va,a9 as wa,aa as R,ab as C,ac as xa}from"./index-NpJFjyZn.js";import"./phaser-0YPJO2g1.js";const w=600,ka=400,aa=450,na=500,La=150,ia=600,Sa=15e3,la=220,_a=450,Aa=7e3,Pa=1600,Ea=[[.494,.052,.095,4200,-600],[.494,.318,.08,5200,-2600],[.259,.4,.06,6100,-4700],[.731,.4,.06,5800,-2e3],[.215,.525,.07,4600,-1500],[.772,.525,.07,4900,-3900],[.49,.915,.08,5600,-300]],$={far:[-.012,-.014],near:[-.034,-.02],logo:[.016,.014],fx:[-.05,-.035]},ea=[5,4],ta=14,sa=.45,Ma=5200,$a=1600,ra=22,Ta=26,Fa="Georgia, 'Times New Roman', serif",Na="polygon(var(--t) 0, calc(100% - var(--t)) 0, 100% 50%, calc(100% - var(--t)) 100%, var(--t) 100%, 0 50%)",Ia=`
#marche-splash { contain: strict; user-select: none; -webkit-user-select: none; touch-action: none; cursor: default; }
#marche-splash.is-out { animation: msp-out ${ia}ms ease-in forwards; pointer-events: none; }
#marche-splash.is-drop { animation-duration: ${la}ms; }
#marche-splash .msp-veil { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; }
#marche-splash.is-dark .msp-veil { animation: msp-in ${na}ms ease-in forwards; }
#marche-splash .msp-art { position: absolute; inset: 0; opacity: 0; }
#marche-splash.is-on .msp-art { animation: msp-in ${w}ms ease-out forwards; }
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
/* The logo and « Jouer » under it (their layout: splash-boot.ts, shared with the loading cover). */
#marche-splash .msp-art .msp-safe { perspective: 900px; }
#marche-splash .msp-art .msp-logo { will-change: transform; }
#marche-splash .msp-hold { opacity: 0; animation: msp-in 700ms ease-out ${_a}ms forwards; }
#marche-splash .msp-play {
  /* The plaque (--h); the button around it at least 44 px tall: the thumb's target. */
  --h: ${ga}; --tip: calc(var(--h) * .34);
  position: relative; flex: none; display: grid; place-items: center; box-sizing: border-box;
  height: ${ba}; min-width: clamp(132px, 16.5cqw, 216px); padding: 0 calc(var(--tip) + clamp(12px, 1.6cqw, 24px));
  margin: 0 0 ${ya}; border: 0; background: none; font: inherit; cursor: pointer; outline: none; visibility: hidden;
  -webkit-tap-highlight-color: transparent; transition: transform 90ms ease-out, filter 120ms ease-out;
}
#marche-splash .msp-play::before, #marche-splash .msp-play::after { content: ''; position: absolute; top: 50%; width: 7px; height: 7px;
  background: linear-gradient(135deg, #fff1b8, #d39a35 50%, #7a4612); box-shadow: 0 0 7px rgba(176, 76, 255, .75); transform: translateY(-50%) rotate(45deg); }
#marche-splash .msp-play::before { left: -10px; }
#marche-splash .msp-play::after { right: -10px; }
#marche-splash .msp-play > span { pointer-events: none; }
#marche-splash .msp-play-glow { position: absolute; inset: calc(50% - var(--h) * 1.05) -16%; border-radius: 50%; opacity: .6;
  background: radial-gradient(closest-side, rgba(176, 76, 255, .62), rgba(120, 40, 230, .22) 58%, transparent 100%); }
#marche-splash .msp-play-rim, #marche-splash .msp-play-face { position: absolute; clip-path: ${Na}; }
#marche-splash .msp-play-rim { left: 0; right: 0; top: calc(50% - var(--h) / 2); height: var(--h); --t: var(--tip);
  background: linear-gradient(180deg, #fff3c4 0%, #f3c65a 24%, #9c5f1a 50%, #f0c160 74%, #6e3f10 100%); }
#marche-splash .msp-play-face { left: 4px; right: 4px; top: calc(50% - var(--h) / 2 + 2.5px); height: calc(var(--h) - 5px); --t: calc(var(--tip) - 2px);
  background: radial-gradient(ellipse 60% 110% at 50% 118%, rgba(160, 80, 255, .5), transparent 70%),
    linear-gradient(180deg, #3a2640 0%, #1d1022 48%, #0e0711 100%);
  box-shadow: inset 0 1px 0 rgba(255, 230, 170, .3), inset 0 -2px 6px rgba(0, 0, 0, .5); }
#marche-splash .msp-play-label { position: relative; font: 700 clamp(16px, 3.9cqh, 26px) / 1 ${Fa}; letter-spacing: .16em; text-indent: .16em; text-transform: uppercase;
  background: linear-gradient(180deg, #fff6d2 0%, #ffd978 38%, #c98a2c 62%, #ffe7a3 100%); -webkit-background-clip: text; background-clip: text; color: transparent;
  filter: drop-shadow(0 1px 0 rgba(20, 8, 4, .9)) drop-shadow(0 0 6px rgba(186, 100, 255, .65)); }
#marche-splash .msp-play:hover { filter: brightness(1.08); }
#marche-splash .msp-play:focus-visible .msp-play-rim { filter: brightness(1.12) saturate(1.1); }
#marche-splash .msp-play.is-pressed { transform: translateY(2px) scale(.965); filter: brightness(1.2); }
#marche-splash .msp-play.is-pressed .msp-play-glow { opacity: 1; animation: none; }
#marche-splash.is-play .msp-play { visibility: visible; animation: msp-play-in ${aa}ms cubic-bezier(.2,.7,.3,1) backwards; }
#marche-splash.is-play .msp-play-glow { animation: msp-play-pulse 1800ms ease-in-out ${aa}ms infinite alternate; }
#marche-splash .msp-float { position: absolute; inset: 0; }
#marche-splash.is-on .msp-float { animation: msp-rise ${w+500}ms cubic-bezier(.2,.7,.3,1) both, msp-float 2600ms ease-in-out ${w+500}ms infinite alternate; }
/* The logo already waited on the cover, at this very place: no rise, it only floats on. */
#marche-splash.is-on.is-booted .msp-float { animation: msp-float 2600ms ease-in-out ${w+500}ms infinite alternate; }
#marche-splash .msp-aura { position: absolute; inset: -20% -11%; border-radius: 50%; opacity: .75;
  background: radial-gradient(closest-side, rgba(150, 70, 255, .36), rgba(110, 40, 220, .14) 52%, transparent 100%); }
/* The halo: the logo turned to violet light (black, its violet shadows), behind the gold. */
#marche-splash .msp-glow { opacity: .8;
  filter: brightness(0) drop-shadow(0 0 .45cqw rgba(178, 100, 255, .95)) drop-shadow(0 0 1.6cqw rgba(132, 58, 255, .75)); }
#marche-splash .msp-mark { filter: drop-shadow(0 .5cqw 1cqw rgba(0, 0, 0, .55)); }
#marche-splash.is-on .msp-glow { animation: msp-pulse 2600ms ease-in-out infinite alternate; }
#marche-splash.is-on .msp-aura { animation: msp-aura 2600ms ease-in-out infinite alternate; }
/* The sheen: a violet-white band gliding across, masked to the logo, its light added (screen). */
#marche-splash .msp-sheen { position: absolute; inset: 0; overflow: hidden; pointer-events: none; mix-blend-mode: screen;
  -webkit-mask: var(--msp-logo) center / 100% 100% no-repeat; mask: var(--msp-logo) center / 100% 100% no-repeat; }
#marche-splash .msp-sheen::before { content: ''; position: absolute; top: -12%; bottom: -12%; left: 0; width: 20%; opacity: 0;
  background: linear-gradient(90deg, transparent, rgba(140, 70, 255, .22) 26%, rgba(180, 116, 255, .6) 44%, rgba(222, 186, 255, .82) 50%, rgba(180, 116, 255, .6) 56%, rgba(140, 70, 255, .22) 74%, transparent);
  transform: translate3d(-130%, 0, 0) skewX(-20deg); }
#marche-splash.is-on .msp-sheen::before { animation: msp-sweep ${Aa}ms cubic-bezier(.45,.05,.55,.95) ${Pa}ms infinite; }
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
@keyframes msp-kb { from { transform: scale(1.06) translate3d(-1.1%, .7%, 0); } to { transform: scale(1.13) translate3d(1.1%, -.6%, 0); } }
@keyframes msp-rise { from { transform: translate3d(0, 4%, 0) scale(.93); } to { transform: none; } }
@keyframes msp-float { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(0, -2.2%, 0) scale(1.012); } }
@keyframes msp-pulse { from { opacity: .5; } to { opacity: 1; } }
@keyframes msp-sweep { 0% { opacity: 0; transform: translate3d(-130%, 0, 0) skewX(-20deg); } 5% { opacity: 1; }
  27% { opacity: 1; } 32%, 100% { opacity: 0; transform: translate3d(620%, 0, 0) skewX(-20deg); } }
@keyframes msp-twinkle { 0%, 60%, 100% { opacity: 0; transform: scale(.3) rotate(0deg); }
  75% { opacity: 1; transform: scale(1) rotate(28deg); } 88% { opacity: .25; transform: scale(.55) rotate(44deg); } }
@keyframes msp-play-in { from { opacity: 0; transform: translate3d(0, 10px, 0) scale(.96); } to { opacity: 1; transform: none; } }
@keyframes msp-play-pulse { from { opacity: .42; transform: scale(.96); } to { opacity: .92; transform: scale(1.05); } }
@keyframes msp-aura { from { opacity: .55; transform: scale(.97); } to { opacity: .95; transform: scale(1.04); } }
@keyframes msp-ember { 0% { opacity: 0; transform: translate3d(0, 0, 0); } 12% { opacity: var(--o); }
  70% { opacity: calc(var(--o) * .8); } 100% { opacity: 0; transform: translate3d(var(--dx), -70cqh, 0); } }
@keyframes msp-flake { 0% { opacity: 0; transform: translate3d(0, 0, 0); } 15% { opacity: var(--o); }
  85% { opacity: var(--o); } 100% { opacity: 0; transform: translate3d(var(--dx), 60cqh, 0); } }
@media (prefers-reduced-motion: reduce) {
  #marche-splash.is-on .msp-drift, #marche-splash.is-on .msp-float, #marche-splash.is-on.is-booted .msp-float, #marche-splash.is-on .msp-glow, #marche-splash.is-on .msp-aura { animation: none; }
  #marche-splash .msp-drift { transform: scale(1.06); }
  #marche-splash .msp-fx, #marche-splash .msp-sheen, #marche-splash .msp-glint { display: none; }
  #marche-splash.is-play .msp-play { animation-name: msp-in; }
  #marche-splash.is-play .msp-play-glow { animation: none; }
  #marche-splash .msp-play.is-pressed { transform: none; }
}
`;function Oa(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function l(t,...e){const r=document.createElement("div");return r.className=t,r.append(...e),r}function Da(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let r=e;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296}}function Ha(){const t=l("msp-fx"),e=Da(24301),r=d=>`${(d*100).toFixed(1)}%`;for(let d=0;d<ra+Ta;d++){const n=d<ra,b=l(`msp-p ${n?"msp-ember":"msp-flake"}`),h=!n&&e()<.3;h&&b.classList.add("is-near");const x=n?2600+e()*2600:4200+e()*3600,S=n?4+e()*6:h?7+e()*6:2.5+e()*3.5,F={"--x":r(n?.3+e()*.55:e()),"--y":r(n?.72+e()*.3:-.08+e()*.55),"--s":`${S.toFixed(1)}px`,"--o":(n?.55+e()*.45:h?.5+e()*.3:.45+e()*.45).toFixed(2),"--dx":`${((n?-40:-60)+e()*(n?110:90)).toFixed(0)}px`,"--a":n?"msp-ember":"msp-flake","--d":`${x.toFixed(0)}ms`,"--w":`${(-e()*x).toFixed(0)}ms`};for(const[N,_]of Object.entries(F))b.style.setProperty(N,_);t.append(b)}return t}function oa(t){return typeof t.decode=="function"?t.decode().then(()=>!0,()=>t.complete&&t.naturalWidth>0):t.complete?Promise.resolve(t.naturalWidth>0):new Promise(e=>{t.addEventListener("load",()=>e(!0),{once:!0}),t.addEventListener("error",()=>e(!1),{once:!0})})}function Ya(t,e){const r=R(),d=C(r,0,0),n=C(r,t,e);return[n.x-d.x,n.y-d.y]}const T=t=>Math.max(-1,Math.min(1,t));function za(t){const{cover:e,shield:r}=t,d=Oa(),n=document.createElement("style");n.id="marche-splash-css",n.textContent=Ia,document.head.append(n),t.bg.className="msp-bg",t.logo.className="msp-mark";const b=t.bg.cloneNode(),h=t.logo.cloneNode();h.className="msp-glow",h.alt="";for(const a of[t.bg,b,h])a.setAttribute("aria-hidden","true");const x=l("msp-layer msp-far",l("msp-drift",t.bg)),S=l("msp-layer msp-near",l("msp-drift",b)),F=l("msp-aura");e.style.setProperty("--msp-logo",`url("${t.logo.src}")`);const N=Ea.map(([a,s,o,i,c])=>{const m=l("msp-glint");m.setAttribute("aria-hidden","true");const g={"--x":a,"--y":s,"--s":o};for(const[u,v]of Object.entries(g))m.style.setProperty(u,`${(v*100).toFixed(1)}%`);return m.style.setProperty("--d",`${i}ms`),m.style.setProperty("--w",`${c}ms`),m}),_=l("msp-logo",l("msp-float",F,h,t.logo,l("msp-sheen"),...N)),p=document.createElement("button");p.type="button",p.id=va,p.className="msp-play";const I=document.createElement("span");I.className="msp-play-label",I.textContent=t.playLabel;for(const a of["msp-play-glow","msp-play-rim","msp-play-face"]){const s=document.createElement("span");s.className=a,p.append(s)}p.append(I);const pa=l("msp-safe",_,p),A=d?null:Ha(),O=l("msp-art",x,S,l("msp-vignette"),pa);A&&O.append(A);const G=l("msp-veil");e.append(O,G),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",t.alt);let f="load",W=0,D=0;const k=[],y=(a,s)=>{k.push(window.setTimeout(s,a))},j=(a,s,o)=>{let i=!1;const c=()=>{i||(i=!0,a.removeEventListener("animationend",m),o())},m=g=>{g.target===a&&c()};a.addEventListener("animationend",m),y(s+400,c)},L=a=>{f=a,e.dataset.phase=a},B=()=>wa(e);B();let H=0,Y=0,q=-1/0,P=0,E=0,X=null;const ca=a=>{const s=R(),o=C(s,a.clientX,a.clientY);H=T(o.x/Math.max(1,s.w)*2-1),Y=T(o.y/Math.max(1,s.h)*2-1),q=performance.now()},ma=a=>{if(a.beta===null||a.gamma===null)return;const s=((screen.orientation?.angle??0)%360+360)%360,o=a.gamma,i=a.beta,[c,m]=s===90?[i,-o]:s===180?[-o,-i]:s===270?[-i,o]:[o,i];X??=[c,m];const[g,u]=Ya(c-X[0],m-X[1]);H=T(g/ta),Y=T(u/ta),q=performance.now()},M=(a,s,o,i,c="")=>{a.style.transform=`translate3d(${(P*s[0]*o).toFixed(2)}px, ${(E*s[1]*i).toFixed(2)}px, 0)${c}`},U=a=>{D=requestAnimationFrame(U);const s=(a-W)/Ma,o=Math.sin(s*Math.PI*2)*sa,i=Math.sin(s*Math.PI*4+.6)*sa*.55,c=Math.max(0,Math.min(1,1-(a-q-$a)/900)),m=o*(1-c)+H*c,g=i*(1-c)+Y*c;P+=(m-P)*.07,E+=(g-E)*.07;const{w:u,h:v}=R();M(x,$.far,u,v),M(S,$.near,u,v),M(_,$.logo,u,v,` rotateY(${(P*ea[0]).toFixed(2)}deg) rotateX(${(-E*ea[1]).toFixed(2)}deg)`),A&&M(A,$.fx,u,v)},K=a=>{const s=a?"addEventListener":"removeEventListener";window[s]("resize",B),!d&&(window[s]("pointermove",ca,{passive:!0}),window[s]("deviceorientation",ma))},J=()=>{cancelAnimationFrame(D),K(!1)},da=()=>{for(const a of k.splice(0))window.clearTimeout(a);J(),e.remove(),n.remove(),r.onPress=null,r.lift()},z=(a=!1)=>{if(f!=="out"){L("out");for(const s of k.splice(0))window.clearTimeout(s);e.classList.add("is-out"),a&&e.classList.add("is-drop"),j(e,a?la:ia,da)}},Q=a=>{t.isReady()||performance.now()>=a?z():y(100,()=>Q(a))},ha=()=>{if(!(f!=="in"&&f!=="hold")){L("dark");for(const a of k.splice(0))window.clearTimeout(a);r.onPress=null,r.play=null,p.classList.add("is-pressed"),p.blur(),e.querySelector(".msp-wait")?.remove(),e.classList.add("is-dark"),j(G,na,()=>{L("black"),J(),O.remove();const a=xa(t.logo);a.classList.add("msp-hold"),e.append(a);const s=performance.now()+Sa;y(La,()=>Q(s))})}};p.addEventListener("blur",()=>{window.setTimeout(()=>{r.play===p&&document.activeElement!==p&&V()},0)});const V=()=>{try{p.focus({preventScroll:!0})}catch{}},fa=()=>{f!=="in"&&f!=="hold"||(e.classList.add("is-play"),r.onPress=a=>p.classList.toggle("is-pressed",a),r.onPlay=ha,r.play=p,V())};K(!0);let Z=!1;const ua=()=>Promise.all([oa(t.bg),oa(t.logo)]).then(([a,s])=>{if(f!=="load"||Z)return;if(!a||!s){z(!0);return}for(const i of k.splice(0))window.clearTimeout(i);L("in"),W=performance.now();const o=e.querySelector(".msp-wait");o?.classList.contains("is-in")&&Number(getComputedStyle(o).opacity)>.05&&e.classList.add("is-booted"),e.classList.add("is-on"),d||(D=requestAnimationFrame(U)),y(w,()=>{L("hold"),o?.remove()}),y(w+ka,fa)});t.studio.then(()=>(y(Math.max(0,t.loadBy-performance.now()),()=>{Z=!0,f==="load"&&z(!0)}),ua()))}export{La as SPLASH_BLACK_MIN_MS,na as SPLASH_DARK_MS,w as SPLASH_FADE_IN_MS,ia as SPLASH_FADE_OUT_MS,ka as SPLASH_PLAY_DELAY_MS,Sa as SPLASH_WAIT_MAX_MS,za as runSplash};

