import{a5 as rt,a6 as _,a7 as R}from"./index-BSovtxDo.js";import"./phaser-0YPJO2g1.js";const A=600,Y=600,nt=8e3,tt=220,F={far:[-.012,-.014],near:[-.034,-.02],logo:[.016,.018],fx:[-.05,-.035]},K=[5,4],V=14,J=.45,it=5200,mt=1600,Q=22,ct=26,pt=`
#marche-splash { contain: strict; user-select: none; -webkit-user-select: none; touch-action: none; cursor: default; }
#marche-splash.is-out { animation: msp-out ${Y}ms ease-in forwards; pointer-events: none; }
#marche-splash.is-drop { animation-duration: ${tt}ms; }
#marche-splash .msp-art { position: absolute; inset: 0; opacity: 0; }
#marche-splash.is-on .msp-art { animation: msp-in ${A}ms ease-out forwards; }
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
#marche-splash .msp-safe { position: absolute; left: var(--msp-l, 0px); right: var(--msp-r, 0px); top: var(--msp-t, 0px); bottom: var(--msp-b, 0px); display: flex; align-items: center; justify-content: center; perspective: 900px; }
#marche-splash .msp-logo { position: relative; width: min(66cqw, (100cqh - var(--msp-t, 0px) - var(--msp-b, 0px)) * 1.6); aspect-ratio: 1000 / 512; will-change: transform; }
#marche-splash .msp-float { position: absolute; inset: 0; }
#marche-splash.is-on .msp-float { animation: msp-rise ${A+500}ms cubic-bezier(.2,.7,.3,1) both, msp-float 2600ms ease-in-out ${A+500}ms infinite alternate; }
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
@keyframes msp-aura { from { opacity: .55; transform: scale(.97); } to { opacity: .95; transform: scale(1.04); } }
@keyframes msp-ember { 0% { opacity: 0; transform: translate3d(0, 0, 0); } 12% { opacity: var(--o); }
  70% { opacity: calc(var(--o) * .8); } 100% { opacity: 0; transform: translate3d(var(--dx), -70cqh, 0); } }
@keyframes msp-flake { 0% { opacity: 0; transform: translate3d(0, 0, 0); } 15% { opacity: var(--o); }
  85% { opacity: var(--o); } 100% { opacity: 0; transform: translate3d(var(--dx), 60cqh, 0); } }
@media (prefers-reduced-motion: reduce) {
  #marche-splash.is-on .msp-drift, #marche-splash.is-on .msp-float, #marche-splash.is-on .msp-glow, #marche-splash.is-on .msp-aura { animation: none; }
  #marche-splash .msp-drift { transform: scale(1.06); }
  #marche-splash .msp-fx { display: none; }
}
`;function lt(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function c(e,...t){const o=document.createElement("div");return o.className=e,o.append(...t),o}function dt(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function ft(){const e=c("msp-fx"),t=dt(24301),o=m=>`${(m*100).toFixed(1)}%`;for(let m=0;m<Q+ct;m++){const r=m<Q,d=c(`msp-p ${r?"msp-ember":"msp-flake"}`),l=!r&&t()<.3;l&&d.classList.add("is-near");const h=r?2600+t()*2600:4200+t()*3600,g=r?4+t()*6:l?7+t()*6:2.5+t()*3.5,E={"--x":o(r?.3+t()*.55:t()),"--y":o(r?.72+t()*.3:-.08+t()*.55),"--s":`${g.toFixed(1)}px`,"--o":(r?.55+t()*.45:l?.5+t()*.3:.45+t()*.45).toFixed(2),"--dx":`${((r?-40:-60)+t()*(r?110:90)).toFixed(0)}px`,"--a":r?"msp-ember":"msp-flake","--d":`${h.toFixed(0)}ms`,"--w":`${(-t()*h).toFixed(0)}ms`};for(const[y,T]of Object.entries(E))d.style.setProperty(y,T);e.append(d)}return e}function Z(e){return typeof e.decode=="function"?e.decode().then(()=>!0,()=>e.complete&&e.naturalWidth>0):e.complete?Promise.resolve(e.naturalWidth>0):new Promise(t=>{e.addEventListener("load",()=>t(!0),{once:!0}),e.addEventListener("error",()=>t(!1),{once:!0})})}function ht(e,t){const o=_(),m=R(o,0,0),r=R(o,e,t);return[r.x-m.x,r.y-m.y]}const P=e=>Math.max(-1,Math.min(1,e));function gt(e){const{cover:t,shield:o}=e,m=lt(),r=document.createElement("style");r.id="marche-splash-css",r.textContent=pt,document.head.append(r),e.bg.className="msp-bg",e.logo.className="msp-mark";const d=e.bg.cloneNode(),l=e.logo.cloneNode();l.className="msp-glow",l.alt="";for(const a of[e.bg,d,l])a.setAttribute("aria-hidden","true");const h=c("msp-layer msp-far",c("msp-drift",e.bg)),g=c("msp-layer msp-near",c("msp-drift",d)),E=c("msp-aura"),y=c("msp-logo",c("msp-float",E,l,e.logo)),T=c("msp-safe",y),x=m?null:ft(),j=c("msp-art",h,g,c("msp-vignette"),T);x&&j.append(x),t.append(j),t.setAttribute("role","img"),t.setAttribute("aria-label",e.alt);let u="load",z=0,I=0;const v=[],b=(a,s)=>{v.push(window.setTimeout(s,a))},O=a=>{u=a,t.dataset.phase=a},U=()=>{const a=getComputedStyle(document.documentElement),s=p=>parseFloat(a.getPropertyValue(`--sai-${p}`))||0,n={top:s("top"),right:s("right"),bottom:s("bottom"),left:s("left")},i=rt(n,_().rot);t.style.setProperty("--msp-t",`${i.top}px`),t.style.setProperty("--msp-r",`${i.right}px`),t.style.setProperty("--msp-b",`${i.bottom}px`),t.style.setProperty("--msp-l",`${i.left}px`)};U();let D=0,N=0,q=-1/0,w=0,k=0,X=null;const et=a=>{const s=_(),n=R(s,a.clientX,a.clientY);D=P(n.x/Math.max(1,s.w)*2-1),N=P(n.y/Math.max(1,s.h)*2-1),q=performance.now()},at=a=>{if(a.beta===null||a.gamma===null)return;const s=((screen.orientation?.angle??0)%360+360)%360,n=a.gamma,i=a.beta,[p,S]=s===90?[i,-n]:s===180?[-n,-i]:s===270?[-i,n]:[n,i];X??=[p,S];const[H,f]=ht(p-X[0],S-X[1]);D=P(H/V),N=P(f/V),q=performance.now()},M=(a,s,n,i,p="")=>{a.style.transform=`translate3d(${(w*s[0]*n).toFixed(2)}px, ${(k*s[1]*i).toFixed(2)}px, 0)${p}`},C=a=>{I=requestAnimationFrame(C);const s=(a-z)/it,n=Math.sin(s*Math.PI*2)*J,i=Math.sin(s*Math.PI*4+.6)*J*.55,p=Math.max(0,Math.min(1,1-(a-q-mt)/900)),S=n*(1-p)+D*p,H=i*(1-p)+N*p;w+=(S-w)*.07,k+=(H-k)*.07;const{w:f,h:$}=_();M(h,F.far,f,$),M(g,F.near,f,$),M(y,F.logo,f,$,` rotateY(${(w*K[0]).toFixed(2)}deg) rotateX(${(-k*K[1]).toFixed(2)}deg)`),x&&M(x,F.fx,f,$)},W=a=>{const s=a?"addEventListener":"removeEventListener";window[s]("resize",U),!m&&(window[s]("pointermove",et,{passive:!0}),window[s]("deviceorientation",at))},st=()=>{for(const a of v.splice(0))window.clearTimeout(a);cancelAnimationFrame(I),W(!1),t.remove(),r.remove(),o.onSkip=null,o.lift()},L=(a=!1)=>{if(u!=="out"){O("out");for(const s of v.splice(0))window.clearTimeout(s);t.classList.add("is-out"),a&&t.classList.add("is-drop"),b(a?tt:Y,st)}},B=a=>{e.isReady()||performance.now()>=a?L():b(100,()=>B(a))};o.onSkip=()=>L(u==="load"),W(!0);const ot=Math.max(0,e.loadBy-performance.now());let G=!1;b(ot,()=>{G=!0,u==="load"&&L(!0)}),Promise.all([Z(e.bg),Z(e.logo)]).then(([a,s])=>{if(!(u!=="load"||G)){if(!a||!s){L(!0);return}for(const n of v.splice(0))window.clearTimeout(n);O("in"),z=performance.now(),t.classList.add("is-on"),m||(I=requestAnimationFrame(C)),b(A,()=>O("hold")),b(e.totalMs-Y,()=>B(performance.now()+nt))}})}export{A as SPLASH_FADE_IN_MS,Y as SPLASH_FADE_OUT_MS,nt as SPLASH_WAIT_MAX_MS,gt as runSplash};

