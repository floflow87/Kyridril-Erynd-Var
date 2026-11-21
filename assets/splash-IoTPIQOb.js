import{bk as dt,$ as M,a0 as g,d$ as Tt,e0 as At,e1 as Pt,e2 as Et,e3 as Mt,e4 as $t,e5 as It,e6 as Nt,e7 as W,e8 as j,dN as Ot,e9 as Dt,ea as Ft}from"./index-Bx1AFipv.js";import"./phaser-DIUF0PZB.js";const ht=.3,ft=2.4,qt=1500,Ht=[[466.16,.105],[587.33,.095],[698.46,.088],[932.33,.075],[1174.66,.056]];function z(e,t){const a=e.createGain();return a.gain.value=t,a}function Gt(e,t,a,r){const n=z(e.ctx,1);if(n.connect(e.out),typeof e.ctx.createDelay!="function")return n;const l=e.ctx.createDelay(1);l.delayTime.value=t;const i=e.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=4200;const f=z(e.ctx,a);return n.connect(l).connect(i).connect(f).connect(l),i.connect(z(e.ctx,r)).connect(e.out),n}const ut={studioSting(e){const t=ht;M(e,{type:"bandpass",f0:280,f1:4400,q:1.2,dur:t+.04,gain:.42,attack:t*.9}),g(e,{f0:170,f1:760,dur:t,gain:.06,attack:t*.85}),M(e,{type:"highpass",f0:2600,dur:.03,gain:.5,attack:.001,at:t}),g(e,{type:"triangle",f0:230,f1:72,dur:.24,gain:.34,attack:.002,at:t}),g(e,{f0:112,f1:36,dur:.95,gain:.85,attack:.003,at:t}),M(e,{type:"lowpass",f0:1800,f1:120,q:.7,dur:.5,gain:.48,at:t});const a={...e,out:Gt(e,.23,.3,.24)};g(e,{type:"triangle",f0:116.54,dur:1.7,gain:.13,attack:.01,lowpass:900,at:t}),Ht.forEach(([r,n],l)=>{const i=t+.008+l*.014;g(a,{type:"triangle",f0:r,dur:1.95,gain:n,attack:.003,at:i}),g(a,{f0:r*1.004,dur:1.75,gain:n*.6,attack:.004,at:i}),g(a,{f0:r*2,dur:1.2,gain:n*.4,attack:.002,at:i}),g(a,{f0:r*4.2,dur:.22,gain:n*.22,attack:.001,at:i})});for(const[r,n]of[[2349.3,.12],[2793.8,.24],[3520,.36],[4698.6,.5]])g(a,{f0:r,dur:.32,gain:.03,attack:.002,at:t+n});return M(a,{type:"highpass",f0:6e3,f1:8800,q:.6,dur:1.2,gain:.04,attack:.06,at:t}),ft}};let S=!1,y=null;function de(e,t=()=>performance.now()){if(S)return;const a=t()+qt;if(y!==null){y=Math.max(y,a);return}y=a,dt(ut);const r=()=>{try{if(S)return;e.state()==="running"?(S=!0,y=null,e.play("studioSting")):y!==null&&t()<y?window.setTimeout(r,25):y=null}catch{y=null}};r()}function Yt(){return S}const Ct=.08,Xt=1e3;function Rt(){try{return navigator.getAutoplayPolicy?.("audiocontext")==="disallowed"}catch{return!1}}function Ut(e){const t=e.now??(()=>performance.now());return new Promise(a=>{let r=null,n=!1;const l=i=>{n||(n=!0,i||r?.destroy(),a(i))};if(S||t()>=e.by||Rt()){l(null);return}window.setTimeout(()=>l(null),e.by-t()),e.settings.then(i=>{try{if(n)return;if(!i.sound||!(i.volume>0)){l(null);return}const f=r=e.make();f.setVolume(i.volume),f.unlockNow(),dt(ut);const w=()=>{if(n)return;const x=f.context();f.state()==="running"&&x&&x.currentTime>=Ct?l(zt(f,x)):window.setTimeout(w,10)};w()}catch{l(null)}},()=>l(null))})}function zt(e,t){const a=window.setTimeout(()=>e.destroy(),Xt);return r=>{window.clearTimeout(a);try{if(!S){S=!0;const n=t.outputLatency||t.baseLatency||0,l=t.currentTime+r/1e3-ht-n;e.play("studioSting",{at:Math.max(0,l)})}}catch{}window.setTimeout(()=>e.destroy(),r+(ft+.5)*1e3)}}function he(e){return Ut({settings:$t().then(t=>t.loaded.meta.settings),by:e,make:()=>Ot({onPlay:Dt,cold:!0})})}const K=600,Bt=400,B=450,gt=500,Vt=150,yt=600,Wt=15e3,bt=220,jt=450,Kt=7e3,Jt=1600,Qt=[[.494,.052,.095,4200,-600],[.494,.318,.08,5200,-2600],[.259,.4,.06,6100,-4700],[.731,.4,.06,5800,-2e3],[.215,.525,.07,4600,-1500],[.772,.525,.07,4900,-3900],[.49,.915,.08,5600,-300]],V={far:[-.012,-.014],near:[-.034,-.02],fx:[-.05,-.035]},lt=14,ct=.45,Zt=5200,te=1600,pt=22,ee="36% 50%",ae=26,se="Georgia, 'Times New Roman', serif",ne="polygon(var(--t) 0, calc(100% - var(--t)) 0, 100% 50%, calc(100% - var(--t)) 100%, var(--t) 100%, 0 50%)",oe=`
#marche-splash { contain: strict; user-select: none; -webkit-user-select: none; touch-action: none; cursor: default; }
#marche-splash.is-out { animation: msp-out ${yt}ms ease-in forwards; pointer-events: none; }
#marche-splash.is-drop { animation-duration: ${bt}ms; }
#marche-splash .msp-veil { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; }
#marche-splash.is-dark .msp-veil { animation: msp-in ${gt}ms ease-in forwards; }
#marche-splash .msp-art { position: absolute; inset: 0; opacity: 0; }
#marche-splash.is-on .msp-art { animation: msp-in ${K}ms ease-out forwards; }
#marche-splash .msp-layer, #marche-splash .msp-drift { position: absolute; inset: -2%; will-change: transform; }
#marche-splash .msp-drift { inset: 0; }
/* The painting covers the frame (cropped to it), Erynd and his sword's trail kept in view on a
   wide phone (a little of the sky and the grass cut) as on a 4:3 tablet (the orc's side cut). */
#marche-splash .msp-layer img { position: absolute; inset: 0; width: 100%; height: 100%; max-width: none; object-fit: cover; object-position: ${ee}; pointer-events: none; }
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
#marche-splash .msp-hold { opacity: 0; animation: msp-in 700ms ease-out ${jt}ms forwards; }
#marche-splash .msp-play {
  /* The plaque (--h); the button around it at least 44 px tall: the thumb's target. */
  --h: ${Tt}; --tip: calc(var(--h) * .34);
  position: relative; flex: none; display: grid; place-items: center; box-sizing: border-box;
  height: ${At}; min-width: clamp(132px, 16.5cqw, 216px); padding: 0 calc(var(--tip) + clamp(12px, 1.6cqw, 24px));
  margin: 0 0 ${Pt}; border: 0; background: none; font: inherit; cursor: pointer; outline: none; visibility: hidden;
  -webkit-tap-highlight-color: transparent; transition: transform 90ms ease-out, filter 120ms ease-out;
}
#marche-splash .msp-play::before, #marche-splash .msp-play::after { content: ''; position: absolute; top: 50%; width: 7px; height: 7px;
  background: linear-gradient(135deg, #fff1b8, #d39a35 50%, #7a4612); box-shadow: 0 0 7px rgba(176, 76, 255, .75); transform: translateY(-50%) rotate(45deg); }
#marche-splash .msp-play::before { left: -10px; }
#marche-splash .msp-play::after { right: -10px; }
#marche-splash .msp-play > span { pointer-events: none; }
#marche-splash .msp-play-glow { position: absolute; inset: calc(50% - var(--h) * 1.05) -16%; border-radius: 50%; opacity: .6;
  background: radial-gradient(closest-side, rgba(176, 76, 255, .62), rgba(120, 40, 230, .22) 58%, transparent 100%); }
#marche-splash .msp-play-rim, #marche-splash .msp-play-face { position: absolute; clip-path: ${ne}; }
#marche-splash .msp-play-rim { left: 0; right: 0; top: calc(50% - var(--h) / 2); height: var(--h); --t: var(--tip);
  background: linear-gradient(180deg, #fff3c4 0%, #f3c65a 24%, #9c5f1a 50%, #f0c160 74%, #6e3f10 100%); }
#marche-splash .msp-play-face { left: 4px; right: 4px; top: calc(50% - var(--h) / 2 + 2.5px); height: calc(var(--h) - 5px); --t: calc(var(--tip) - 2px);
  background: radial-gradient(ellipse 60% 110% at 50% 118%, rgba(160, 80, 255, .5), transparent 70%),
    linear-gradient(180deg, #3a2640 0%, #1d1022 48%, #0e0711 100%);
  box-shadow: inset 0 1px 0 rgba(255, 230, 170, .3), inset 0 -2px 6px rgba(0, 0, 0, .5); }
#marche-splash .msp-play-label { position: relative; font: 700 clamp(16px, 3.9cqh, 26px) / 1 ${se}; letter-spacing: .16em; text-indent: .16em; text-transform: uppercase;
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
#marche-splash.is-on .msp-sheen::before { animation: msp-sweep ${Kt}ms cubic-bezier(.45,.05,.55,.95) ${Jt}ms infinite; }
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
/* « Jouer » pressed, the studio's sting not heard yet (its logo's arrival could not ring it):
   the Volta Games mark, above the darkening veil, flares with it (its impact, ~0.3 s in:
   audio/studio-voices.ts), then fades out with the black. */
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
`;function re(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function p(e,...t){const a=document.createElement("div");return a.className=e,a.append(...t),a}function ie(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let a=t;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}function le(){const e=p("msp-fx"),t=ie(24301),a=r=>`${(r*100).toFixed(1)}%`;for(let r=0;r<pt+ae;r++){const n=r<pt,l=p(`msp-p ${n?"msp-ember":"msp-flake"}`),i=!n&&t()<.3;i&&l.classList.add("is-near");const f=n?2600+t()*2600:4200+t()*3600,w=n?4+t()*6:i?7+t()*6:2.5+t()*3.5,x={"--x":a(n?.3+t()*.55:t()),"--y":a(n?.72+t()*.3:-.08+t()*.55),"--s":`${w.toFixed(1)}px`,"--o":(n?.55+t()*.45:i?.5+t()*.3:.45+t()*.45).toFixed(2),"--dx":`${((n?-40:-60)+t()*(n?110:90)).toFixed(0)}px`,"--a":n?"msp-ember":"msp-flake","--d":`${f.toFixed(0)}ms`,"--w":`${(-t()*f).toFixed(0)}ms`};for(const[I,N]of Object.entries(x))l.style.setProperty(I,N);e.append(l)}return e}function mt(e){return typeof e.decode=="function"?e.decode().then(()=>!0,()=>e.complete&&e.naturalWidth>0):e.complete?Promise.resolve(e.naturalWidth>0):new Promise(t=>{e.addEventListener("load",()=>t(!0),{once:!0}),e.addEventListener("error",()=>t(!1),{once:!0})})}function ce(e,t){const a=W(),r=j(a,0,0),n=j(a,e,t);return[n.x-r.x,n.y-r.y]}const $=e=>Math.max(-1,Math.min(1,e));function fe(e){const{cover:t,shield:a}=e,r=re(),n=document.createElement("style");n.id="marche-splash-css",n.textContent=oe,document.head.append(n),e.bg.className="msp-bg",e.logo.className="msp-mark";const l=e.bg.cloneNode(),i=e.logo.cloneNode();i.className="msp-glow",i.alt="";for(const s of[e.bg,l,i])s.setAttribute("aria-hidden","true");const f=p("msp-layer msp-far",p("msp-drift",e.bg)),w=p("msp-layer msp-near",p("msp-drift",l)),x=p("msp-aura");t.style.setProperty("--msp-logo",`url("${e.logo.src}")`);const I=Qt.map(([s,o,c,m,h])=>{const u=p("msp-glint");u.setAttribute("aria-hidden","true");const v={"--x":s,"--y":o,"--s":c};for(const[k,P]of Object.entries(v))u.style.setProperty(k,`${(P*100).toFixed(1)}%`);return u.style.setProperty("--d",`${m}ms`),u.style.setProperty("--w",`${h}ms`),u}),N=p("msp-logo",p("msp-float",x,i,e.logo,p("msp-sheen"),...I)),d=document.createElement("button");d.type="button",d.id=Et,d.className="msp-play";const O=document.createElement("span");O.className="msp-play-label",O.textContent=e.playLabel;for(const s of["msp-play-glow","msp-play-rim","msp-play-face"]){const o=document.createElement("span");o.className=s,d.append(o)}d.append(O);const wt=p("msp-safe",N,d),E=r?null:le(),L=document.createElement("img");L.className="msp-foot msp-studio",L.src=Mt,L.alt="Volta Games";const J=p("msp-foot msp-version");J.textContent="V1.0.5";const D=p("msp-art",f,w,p("msp-vignette"),wt,L,J);E&&D.append(E);const Q=p("msp-veil");t.append(D,Q),t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.alt);let b="load",Z=0,F=0;const T=[],_=(s,o)=>{T.push(window.setTimeout(o,s))},tt=(s,o,c)=>{let m=!1;const h=()=>{m||(m=!0,s.removeEventListener("animationend",u),c())},u=v=>{v.target===s&&h()};s.addEventListener("animationend",u),_(o+400,h)},A=s=>{b=s,t.dataset.phase=s},et=()=>It(t);et();let q=0,H=0,G=-1/0,Y=0,C=0,X=null;const xt=s=>{const o=W(),c=j(o,s.clientX,s.clientY);q=$(c.x/Math.max(1,o.w)*2-1),H=$(c.y/Math.max(1,o.h)*2-1),G=performance.now()},vt=s=>{if(s.beta===null||s.gamma===null)return;const o=((screen.orientation?.angle??0)%360+360)%360,c=s.gamma,m=s.beta,[h,u]=o===90?[m,-c]:o===180?[-c,-m]:o===270?[-m,c]:[c,m];X??=[h,u];const[v,k]=ce(h-X[0],u-X[1]);q=$(v/lt),H=$(k/lt),G=performance.now()},R=(s,o,c,m,h="")=>{s.style.transform=`translate3d(${(Y*o[0]*c).toFixed(2)}px, ${(C*o[1]*m).toFixed(2)}px, 0)${h}`},at=s=>{F=requestAnimationFrame(at);const o=(s-Z)/Zt,c=Math.sin(o*Math.PI*2)*ct,m=Math.sin(o*Math.PI*4+.6)*ct*.55,h=Math.max(0,Math.min(1,1-(s-G-te)/900)),u=c*(1-h)+q*h,v=m*(1-h)+H*h;Y+=(u-Y)*.07,C+=(v-C)*.07;const{w:k,h:P}=W();R(f,V.far,k,P),R(w,V.near,k,P),E&&R(E,V.fx,k,P)},st=s=>{const o=s?"addEventListener":"removeEventListener";window[o]("resize",et),!r&&(window[o]("pointermove",xt,{passive:!0}),window[o]("deviceorientation",vt))},nt=()=>{cancelAnimationFrame(F),st(!1)},kt=()=>{for(const s of T.splice(0))window.clearTimeout(s);nt(),t.remove(),n.remove(),a.onPress=null,a.lift()},U=(s=!1)=>{if(b!=="out"){A("out");for(const o of T.splice(0))window.clearTimeout(o);t.classList.add("is-out"),s&&t.classList.add("is-drop"),tt(t,s?bt:yt,kt)}},ot=s=>{e.isReady()||performance.now()>=s?U():_(100,()=>ot(s))},St=()=>{if(!(b!=="in"&&b!=="hold")){A("dark");for(const s of T.splice(0))window.clearTimeout(s);a.onPress=null,a.play=null,d.classList.add("is-pressed"),d.blur(),Yt()||(t.append(L),L.classList.add("is-sting")),t.querySelector(".msp-wait")?.remove(),t.classList.add("is-dark"),tt(Q,gt,()=>{A("black"),nt(),D.remove();const s=Ft(e.logo);s.classList.add("msp-hold"),t.append(s);const o=performance.now()+Wt;_(Vt,()=>ot(o))})}};d.addEventListener("blur",()=>{window.setTimeout(()=>{a.play===d&&document.activeElement!==d&&rt()},0)});const rt=()=>{try{d.focus({preventScroll:!0})}catch{}},Lt=()=>{b!=="in"&&b!=="hold"||(t.classList.add("is-play"),a.onPress=s=>d.classList.toggle("is-pressed",s),a.onPlay=St,a.play=d,rt())};st(!0);let it=!1;const _t=()=>Promise.all([mt(e.bg),mt(e.logo)]).then(([s,o])=>{if(b!=="load"||it)return;if(!s||!o){U(!0);return}for(const m of T.splice(0))window.clearTimeout(m);A("in"),Z=performance.now(),Nt();const c=t.querySelector(".msp-wait");c?.classList.contains("is-in")&&Number(getComputedStyle(c).opacity)>.05&&t.classList.add("is-booted"),t.classList.add("is-on"),r||(F=requestAnimationFrame(at)),_(K,()=>{A("hold"),c?.remove()}),_(K+Bt,Lt)});e.studio.then(()=>(_(Math.max(0,e.loadBy-performance.now()),()=>{it=!0,b==="load"&&U(!0)}),_t()))}export{Vt as SPLASH_BLACK_MIN_MS,gt as SPLASH_DARK_MS,K as SPLASH_FADE_IN_MS,yt as SPLASH_FADE_OUT_MS,Bt as SPLASH_PLAY_DELAY_MS,Wt as SPLASH_WAIT_MAX_MS,de as playStudioSting,fe as runSplash,he as studioSting};

