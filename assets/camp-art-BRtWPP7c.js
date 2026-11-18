const m=[128,256],f=(t,a)=>`assets/marche/camp/${t}-${a}.webp`,u=t=>globalThis.__EMBEDDED_ASSETS__?.[t]??t;function k(t,a){const e=document.createElement("img");return e.className="marche-camp-action-art",e.alt="",e.draggable=!1,e.decoding="async",e.setAttribute("aria-hidden","true"),e.srcset=m.map(r=>`${u(f(t,r))} ${r}w`).join(", "),e.sizes=`${Math.round(a)}px`,e.src=u(f(t,m[1])),e}function S(t,a){if(t.querySelector(".marche-camp-action-art"))return;const e=k(a,Math.max(52,t.getBoundingClientRect().width*1.14)),r=()=>t.classList.add("is-painted");e.addEventListener("load",r,{once:!0}),e.addEventListener("error",()=>e.remove(),{once:!0}),t.prepend(e),e.complete&&e.naturalWidth>0&&r()}const x=`
.marche-camp-action-art{position:absolute;inset:-7%;width:114%;height:114%;object-fit:contain;display:block;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;opacity:0;filter:drop-shadow(0 3px 0 #2a1b1d) drop-shadow(0 6px 6px #00000059);transition:opacity 160ms ease-out,filter 160ms,transform 70ms ease-out}
.marche-camp-action.is-painted{background:none;border-color:transparent;box-shadow:none}
.marche-camp-action.is-painted .marche-camp-action-art{opacity:1}
.marche-camp-action.is-painted .marche-camp-action-ico{visibility:hidden}
.marche-camp-action.is-painted.is-pressed{transform:none;box-shadow:none}
.marche-camp-action.is-painted.is-pressed .marche-camp-action-art{transform:translateY(3px) scale(.96);filter:drop-shadow(0 1px 0 #2a1b1d) brightness(.88)}
.marche-camp-action.is-painted.is-ready{box-shadow:none;border-color:transparent}
.marche-camp-action.is-painted.is-ready .marche-camp-action-art{filter:drop-shadow(0 3px 0 #2a1b1d) drop-shadow(0 0 7px #8fe06ad9)}
.marche-camp-action.is-painted.is-made{box-shadow:none;border-color:transparent}
.marche-camp-action.is-painted.is-made .marche-camp-action-art{filter:drop-shadow(0 3px 0 #2a1b1d) drop-shadow(0 0 8px #ffd25ae6)}
.marche-camp-action.is-painted:disabled .marche-camp-action-art{filter:grayscale(.8) brightness(.7)}
.marche-camp-action.is-painted .marche-camp-badge{top:-3px;right:-3px;z-index:1}
@media (prefers-reduced-motion:reduce){.marche-camp-action-art{transition:none}}
`;function C(t,a){if(!(a>0)||!Number.isFinite(t))return 1;const e=t/a;return e>=.7?3:e>=.4?2:1}const i="#2a1b1d",p="#e2b850",g="#b5832a";let b=0;function h(t){return`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${t}</svg>`}function w(t,a,e){let r="";for(let o=0;o<12;o++){const s=o*Math.PI/6,n=(d,l)=>`${(t+Math.cos(s+l)*d).toFixed(1)} ${(a+Math.sin(s+l)*d).toFixed(1)}`;r+=`M${n(e*.8,-.22)}L${n(e*1.45,0)}L${n(e*.8,.22)}Z`}const c=e*.32;return`<path d="${r}" fill="${p}" stroke="${i}" stroke-width="1.6" stroke-linejoin="round"/>
<circle cx="${t}" cy="${a}" r="${e}" fill="${p}" stroke="${i}" stroke-width="1.8"/>
<circle cx="${t-c}" cy="${a-e*.12}" r="${e*.11}" fill="${i}"/><circle cx="${t+c}" cy="${a-e*.12}" r="${e*.11}" fill="${i}"/>
<path d="M${t-c} ${a+e*.38}q${c} ${e*.3} ${2*c} 0" fill="none" stroke="${i}" stroke-width="1.3" stroke-linecap="round"/>`}function M(t){const a=`marche-co-${b++}`,e=(o,s)=>{const n=52-s,d=t?`<path d="M${o} ${n-7}c3 3 3 6 0 7-3-1-3-4 0-7Z" fill="#ffcf5a" stroke="#d4701c" stroke-width="1"/><circle cx="${o}" cy="${n-4}" r="5" fill="#ffcf5a" opacity=".25"/>`:`<path d="M${o} ${n}v-2.5" stroke="${i}" stroke-width="1.2"/>`;return`<rect x="${o-2.4}" y="${n}" width="4.8" height="${s}" rx="1" fill="#f3e3b5" stroke="${i}" stroke-width="1.6"/>${d}`};let r="";for(let o=0;o<12;o++){const s=o*Math.PI/6,n=(d,l)=>`${(32+Math.cos(s+l)*d).toFixed(1)} ${(31+Math.sin(s+l)*d).toFixed(1)}`;r+=`M${n(4.4,-.26)}L${n(o%2?7.4:8.8,0)}L${n(4.4,.26)}Z`}const c=`<circle cx="32" cy="31" r="${t?15:11}" fill="url(#${a})" opacity="${t?1:.55}"/>
<path d="${r}" fill="#ffd25a" stroke="#8a5a1a" stroke-width=".8" stroke-linejoin="round"/>
<circle cx="32" cy="31" r="4.8" fill="#e2b850" stroke="#8a5a1a" stroke-width="1.1"/><circle cx="30.8" cy="29.8" r="1.6" fill="#fff3c4" opacity=".8"/>`;return h(`<defs><radialGradient id="${a}"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".95"/><stop offset="1" stop-color="#ffcf5a" stop-opacity="0"/></radialGradient></defs>
<path d="M8 60V24C8 10 19 3 32 3s24 7 24 21v36Z" fill="#4a4452" stroke="${i}" stroke-width="2.4"/>
<path d="M14 58V26c0-10 8-16 18-16s18 6 18 16v32Z" fill="#2c2734"/>
<path d="M9 30c3-2 5 0 6 3M55 22c-3 0-5 2-5 5M10 44c2 0 4 2 4 4" fill="none" stroke="#4f8a3a" stroke-width="2.6" stroke-linecap="round"/>
<circle cx="11" cy="31" r="1.8" fill="#6fae4f"/><circle cx="53" cy="25" r="1.8" fill="#6fae4f"/><circle cx="12" cy="47" r="1.8" fill="#6fae4f"/>
<path d="M32 11c-7 0-10 6-10 12 0 3-2 6-4 9l-2 20h32l-2-20c-2-3-4-6-4-9 0-6-3-12-10-12Z" fill="#9aa0a8" stroke="${i}" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M32 11c5 0 9 4 10 12 0 3 2 6 4 9l2 20H38l-1-24c0-8-2-13-5-17Z" fill="#7d8189"/>
<path d="M26.5 21c0-4 2.5-6.5 5.5-6.5s5.5 2.5 5.5 6.5c0 3.5-2.5 5.5-5.5 5.5s-5.5-2-5.5-5.5Z" fill="#858a93" stroke="#4a4452" stroke-width="1.2"/>
<path d="M26.6 20.4c.6-3.6 2.8-5.6 5.4-5.6s4.8 2 5.4 5.6c-1.8-1.4-3.4-2-5.4-2s-3.6.6-5.4 2Z" fill="#3a3542" opacity=".7"/>
<path d="M28.8 21.4q1.2 .9 2.3 0M32.9 21.4q1.2 .9 2.3 0M31.2 24.4h1.6" fill="none" stroke="#3a3542" stroke-width="1.1" stroke-linecap="round"/>
${c}
<path d="M22.5 38.5c0-3.4 2.6-5 5.4-4.3l4.1 2 4.1-2c2.8-.7 5.4.9 5.4 4.3-2.2 2.6-5.6 3.4-9.5 3.4s-7.3-.8-9.5-3.4Z" fill="#a9aeb6" stroke="#4a4452" stroke-width="1.3" stroke-linejoin="round"/>
<path d="M26 37.6q1.6 1 3 .4M38 37.6q-1.6 1-3 .4" fill="none" stroke="#5a5560" stroke-width="1" stroke-linecap="round"/>
<rect x="6" y="52" width="52" height="8" rx="1.5" fill="#7d8189" stroke="${i}" stroke-width="2.2"/>
<path d="M6 55h52" stroke="#9aa0a8" stroke-width="1.4"/>
${e(11,9)}${e(17,6)}${e(47,6)}${e(53,10)}`)}function E(){let t="";for(const a of[-1,1])for(let e=0;e<14;e++){const r=Math.PI/2+a*(.42+Math.floor(e/2)*.3),c=r+a*(e%2===0?1.05:2.1),o=(32+Math.cos(r)*27+Math.cos(c)*4).toFixed(1),s=(34+Math.sin(r)*27+Math.sin(c)*4).toFixed(1),n=(c*180/Math.PI).toFixed(0);t+=`<ellipse cx="${o}" cy="${s}" rx="4.6" ry="1.9" transform="rotate(${n} ${o} ${s})"/>`}return h(`<path d="M18 57C9 52 4 43 5 32M46 57c9-5 14-14 13-25" fill="none" stroke="${g}" stroke-width="2.4" stroke-linecap="round"/>
<g fill="${p}" stroke="${i}" stroke-width="1.4">${t}</g>
<path d="M27 59l5-3 5 3" fill="none" stroke="${i}" stroke-width="2" stroke-linecap="round"/>`)}function y(){return h(`<path d="M10 4h44" stroke="#7a5536" stroke-width="4" stroke-linecap="round"/>
<circle cx="8" cy="4" r="3" fill="${p}" stroke="${i}" stroke-width="1.6"/><circle cx="56" cy="4" r="3" fill="${p}" stroke="${i}" stroke-width="1.6"/>
<path d="M14 6h36v52l-7-6-5 6-6-6-6 6-5-6-7 6Z" fill="#7a2f33" stroke="${i}" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M18 9h28v42" fill="none" stroke="${p}" stroke-opacity=".7" stroke-width="1.6"/>
${w(32,28,8)}`)}function $(t,a,e){if(t.dataset.art===a)return;const r=t.firstChild!==null;t.dataset.art=a,t.innerHTML=e,r&&t.animate?.([{opacity:0},{opacity:1}],{duration:160,easing:"ease-out"})}function Z(t,a){$(t,String(a),M(a))}function _(t){$(t,"sun",y())}const v=`
.marche-camp-paint .marche-camp-laurel{position:absolute;inset:-14% 0 0;pointer-events:none}
.marche-camp-paint svg,.marche-camp-emblem svg{width:100%;height:100%;display:block}
.marche-buy.is-primary::after{content:'';position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.55) 50%,transparent 70%);transform:translateX(-120%);animation:marche-camp-shine 3.2s ease-in-out infinite;pointer-events:none}
@keyframes marche-camp-shine{0%,70%{transform:translateX(-120%)}100%{transform:translateX(120%)}}
.marche-upgrade-band::after{content:'';position:absolute;left:8%;right:8%;top:38%;height:2px;background:rgba(0,0,0,.18);box-shadow:0 6px 0 rgba(0,0,0,.12);pointer-events:none}
.marche-upgrade-max{margin-left:.3em;padding:0 .35em;border-radius:999px;background:var(--camp-ink);color:var(--camp-cream)}
.marche-camp-depart.is-next{animation:marche-camp-glow 2.4s ease-in-out infinite}
@keyframes marche-camp-glow{0%,100%{box-shadow:0 5px 0 #3b2416,var(--tier-ring,0 0 0 #0000),0 8px 16px var(--tier-glow,#0000),0 0 0 #ffd25a00}50%{box-shadow:0 5px 0 #3b2416,var(--tier-ring,0 0 0 #0000),0 8px 16px var(--tier-glow,#0000),0 0 20px #ffd25acc}}
@media (hover:hover) and (pointer:fine){.marche-upgrade{transition:transform 120ms ease-out,box-shadow 120ms}.marche-upgrade:hover{transform:translateY(-2px);box-shadow:0 7px 0 #3b2416bf,0 16px 32px #00000080}.marche-camp button:not(:disabled):not(.is-short):not(.is-arming):hover{filter:brightness(1.07)}}
@media (prefers-reduced-motion:reduce){.marche-buy.is-primary::after{animation:none;display:none}.marche-camp-depart.is-next{animation:none}}
`;function L(){if(typeof document>"u"||document.getElementById("marche-camp-art-css"))return;const t=document.createElement("style");t.id="marche-camp-art-css",t.textContent=v+x,document.head.append(t)}export{C as cardTier,L as ensureCampArtCss,E as laurelSvg,M as offeringArtSvg,S as paintCampButton,_ as paintEmblem,Z as paintStatue,y as sunEmblemSvg};

