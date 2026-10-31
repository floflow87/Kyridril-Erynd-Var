function v(t,o){if(!(o>0)||!Number.isFinite(t))return 1;const e=t/o;return e>=.8?3:e>=.4?2:1}const r="#2a1b1d",d="#e2b850",m="#b5832a",k={sword:"#a3312b",armor:"#5d6c86",magic:"#3d6db5"};let x=0;function p(t){return`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${t}</svg>`}function $(t){return`<path d="M9 40C4 30 9 15 22 10c9-4 22-3 30 4 9 8 8 22 2 31-6 9-19 13-30 10C16 53 12 47 9 40Z" fill="${t}" opacity=".9"/>
<path d="M14 45c-3-5-2-11 1-15M50 18c4 5 5 12 3 18" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="3" stroke-linecap="round"/>`}function h(t,o,e,s="#fff6c8"){const i=e*.28;return`<path d="M${t} ${o-e}L${t+i} ${o-i}L${t+e} ${o}L${t+i} ${o+i}L${t} ${o+e}L${t-i} ${o+i}L${t-e} ${o}L${t-i} ${o-i}Z" fill="${s}"/>`}function g(t,o,e){let s="";for(let a=0;a<12;a++){const c=a*Math.PI/6,n=(l,f)=>`${(t+Math.cos(c+f)*l).toFixed(1)} ${(o+Math.sin(c+f)*l).toFixed(1)}`;s+=`M${n(e*.8,-.22)}L${n(e*1.45,0)}L${n(e*.8,.22)}Z`}const i=e*.32;return`<path d="${s}" fill="${d}" stroke="${r}" stroke-width="1.6" stroke-linejoin="round"/>
<circle cx="${t}" cy="${o}" r="${e}" fill="${d}" stroke="${r}" stroke-width="1.8"/>
<circle cx="${t-i}" cy="${o-e*.12}" r="${e*.11}" fill="${r}"/><circle cx="${t+i}" cy="${o-e*.12}" r="${e*.11}" fill="${r}"/>
<path d="M${t-i} ${o+e*.38}q${i} ${e*.3} ${2*i} 0" fill="none" stroke="${r}" stroke-width="1.3" stroke-linecap="round"/>`}function Z(t){const o=t===3,e=o?5.5:4.2,s=`<path d="M32 4L${32+e} ${o?11:10}V41H${32-e}V${o?11:10}Z" fill="#e2e7ef" stroke="${r}" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M32 6L${32+e-1} ${o?12:11}V40H32Z" fill="#aab4c3"/>
<path d="M32 12V37" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" stroke-linecap="round"/>`,i=l=>`<rect x="29.4" y="45" width="5.2" height="10" rx="1.5" fill="${l}" stroke="${r}" stroke-width="2.2"/>
<path d="M29.8 48.5h4.4M29.8 51.5h4.4" stroke="${r}" stroke-opacity=".45" stroke-width="1.2"/>`;let a,c="";t===1?a=`${i("#7a4f2c")}<rect x="22" y="40.5" width="20" height="5" rx="2.2" fill="#8e94a0" stroke="${r}" stroke-width="2.4"/>
<circle cx="32" cy="58" r="3.6" fill="#8e94a0" stroke="${r}" stroke-width="2.2"/>`:t===2?(a=`${i("#8e2f2f")}<path d="M21 46c-4 0-5-5-1-6 1 2 3 1 4 0h16c1 1 3 2 4 0 4 1 3 6-1 6Z" fill="${d}" stroke="${r}" stroke-width="2.3" stroke-linejoin="round"/>
<circle cx="32" cy="58" r="3.8" fill="${d}" stroke="${r}" stroke-width="2.2"/>`,c=`<path d="M27 41c6-1 10 2 16 1 4-1 6 1 9 0-2 3-5 4-9 4-5 0-9-2-14-1ZM27 43c5 2 8 6 13 8 3 1 5 3 6 6-4 0-7-1-9-3-3-3-6-6-10-8Z" fill="#c43a2f" stroke="${r}" stroke-width="1.9" stroke-linejoin="round"/>
<circle cx="26.5" cy="42" r="2.6" fill="#a3312b" stroke="${r}" stroke-width="1.8"/>`):a=`${i("#5a1a1a")}<path d="M32 41l-6 4c-5 2-11 0-14-5 5 1 9 0 13-3ZM32 41l6 4c5 2 11 0 14-5-5 1-9 0-13-3Z" fill="${d}" stroke="${r}" stroke-width="2.2" stroke-linejoin="round"/>
<path d="M18 41.5c3 .5 5 0 7-1.5M46 41.5c-3 .5-5 0-7-1.5" fill="none" stroke="${m}" stroke-width="1.2"/>
<circle cx="32" cy="43" r="3.4" fill="#3d8bff" stroke="${r}" stroke-width="2"/><circle cx="31" cy="42" r="1" fill="#cfe8ff"/>
<path d="M32 55l4 3-4 4-4-4Z" fill="${d}" stroke="${r}" stroke-width="2" stroke-linejoin="round"/>`;const n=t===3?h(48,12,4.5)+h(14,22,3)+h(52,30,2.5):"";return`${$(k.sword)}<g transform="rotate(42 32 32)">${s}${a}</g>${c}${n}`}const u="M21 14c4 3 18 3 22 0l8 6-4 9v18c-9 5-21 5-30 0V29l-4-9Z";function L(t){if(t===1)return`${$(k.armor)}<path d="${u}" fill="#8a5a33" stroke="${r}" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M32 18v28c6 0 11-1 15-3V29l3-8-6-5c-4 2-8 2-12 2Z" fill="#6e4524"/>
<path d="M27 16q5 4 10 0" fill="none" stroke="${r}" stroke-width="2"/>
<path d="M29 24l6 3M35 24l-6 3M29 30l6 3M35 30l-6 3" stroke="#e8c58f" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17 38h30" stroke="#5a3920" stroke-width="3"/>
<circle cx="45" cy="46" r="11" fill="#a0703c" stroke="${r}" stroke-width="2.6"/>
<path d="M36 44a10 10 0 0 1 17-6" fill="none" stroke="#c8935a" stroke-width="2"/>
<circle cx="45" cy="46" r="3.5" fill="#8e94a0" stroke="${r}" stroke-width="2"/>`;if(t===2){let o="";for(let e=22;e<=44;e+=4)for(let s=21+e/4%2*2;s<=43;s+=4)o+=`M${s} ${e}a1.4 1.4 0 1 0 .1 0`;return`${$(k.armor)}<path d="${u}" fill="#a7aebb" stroke="${r}" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M32 18v28c6 0 11-1 15-3V29l3-8-6-5c-4 2-8 2-12 2Z" fill="#8a93a3"/>
<path d="${o}" fill="none" stroke="#5f6775" stroke-width=".9"/>
<path d="M27 16q5 4 10 0" fill="none" stroke="${r}" stroke-width="2"/>
<path d="M17 38h30" stroke="#7a4f2c" stroke-width="3.4"/><rect x="29.5" y="36" width="5" height="4.5" rx="1" fill="${d}" stroke="${r}" stroke-width="1.4"/>
<path d="M38 17c3-7 13-8 17-1l1 9c-6 3-13 3-18 0Z" fill="#c9cfd8" stroke="${r}" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M38 21c5 2 12 2 17-1M38 25c5 2 12 2 18-1" fill="none" stroke="#7d8696" stroke-width="1.6"/>
<path d="M42 15c2-2 5-3 8-2" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" stroke-linecap="round"/>
<circle cx="47" cy="18.5" r="1.2" fill="${r}"/>`}return`${$(k.armor)}<path d="${u}" fill="#5f6775" stroke="${r}" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M32 18v28c6 0 11-1 15-3V29l3-8-6-5c-4 2-8 2-12 2Z" fill="#4b525e"/>
<path d="M25 22c3 7 3 15 0 21M39 22c-3 7-3 15 0 21" fill="none" stroke="#9aa3b1" stroke-width="1.6"/>
<path d="M21 14c4 3 18 3 22 0M18 46c9 5 19 5 28 0M32 18v28" fill="none" stroke="${d}" stroke-width="2.2"/>
<path d="M9 22c0-8 7-12 14-9l3 3-1 9c-6 2-12 1-16-3Z" fill="#6b7381" stroke="${r}" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M55 22c0-8-7-12-14-9l-3 3 1 9c6 2 12 1 16-3Z" fill="#6b7381" stroke="${r}" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M10 21c4 3 10 4 15 2M54 21c-4 3-10 4-15 2" fill="none" stroke="${d}" stroke-width="2"/>
<path d="M13 16c2-2 5-3 8-2M43 14c3-1 6 0 8 2" fill="none" stroke="#c9cfd8" stroke-width="1.5" stroke-linecap="round"/>
${g(32,30,4.2)}${h(50,34,3.5)}${h(15,30,2.5)}`}function j(t,o,e,s){let i="";const a=s*Math.PI*2;for(let c=0;c<=a+1e-6;c+=.3){const n=e*c/(Math.PI*2);i+=`${i?"L":"M"}${(t+Math.cos(c)*n).toFixed(1)} ${(o+Math.sin(c)*n).toFixed(1)}`}return i}function w(t,o,e,s,i){const a=j(t,o,e,s);return`<path d="${a}" fill="none" stroke="${r}" stroke-width="${i+2.6}" stroke-linecap="round"/>
<path d="${a}" fill="none" stroke="#9fd4ff" stroke-width="${i}" stroke-linecap="round"/>
<path d="${a}" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="${i*.35}" stroke-linecap="round"/>`}function F(t,o){const e=`marche-ca-${x++}`,s=`<defs><radialGradient id="${e}"><stop offset="0" stop-color="#cfe8ff" stop-opacity=".9"/><stop offset=".55" stop-color="#5fa8ff" stop-opacity=".55"/><stop offset="1" stop-color="#3d6db5" stop-opacity="0"/></radialGradient></defs>
<circle cx="32" cy="32" r="${t===1?17:22}" fill="url(#${e})"/>`;let i;if(o==="chain")i=`<path d="M36 8L22 34h9l-5 22 16-28h-9l5-20Z" fill="#ffe27a" stroke="${r}" stroke-width="2.6" stroke-linejoin="round"/>`;else if(o==="frost"){let n="";for(let l=0;l<6;l++)n+=`<g transform="rotate(${l*60} 32 32)"><path d="M32 32V12M32 18l-4-4M32 18l4-4" fill="none" stroke="${r}" stroke-width="5" stroke-linecap="round"/><path d="M32 32V12M32 18l-4-4M32 18l4-4" fill="none" stroke="#dff4ff" stroke-width="2.4" stroke-linecap="round"/></g>`;i=n}else i=t===1?w(32,32,5.5,2.2,3.2):w(32,32,6,2.6,3.6)+'<path d="M14 18c4-6 11-9 18-8" fill="none" stroke="#9fd4ff" stroke-width="2.4" stroke-linecap="round"/>';let a="";if(t===3){const n=["M-2 -3l4 3-4 3","M0 -3v6M-2 0h4","M-2 3l2-6 2 6","M-2 -2h4l-4 4h4"];for(let l=0;l<8;l++){const f=l*Math.PI/4-Math.PI/2,b=(32+Math.cos(f)*25).toFixed(1),y=(32+Math.sin(f)*25).toFixed(1);a+=`<g transform="translate(${b} ${y})"><circle r="4.4" fill="#22305a" stroke="${r}" stroke-width="1.6"/><path d="${n[l%4]}" fill="none" stroke="#9fd4ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></g>`}a=`<circle cx="32" cy="32" r="25" fill="none" stroke="#9fd4ff" stroke-opacity=".55" stroke-width="2"/>${a}`}const c=t>=2?h(50,14,3.5,"#dff4ff")+h(13,46,3,"#dff4ff")+h(48,50,2.2):"";return`${$(k.magic)}${s}${a}${i}${c}`}function S(t,o,e){return p(t==="sword"?Z(o):t==="armor"?L(o):F(o,e))}function V(t){const o=`marche-co-${x++}`,e=(a,c)=>{const n=52-c,l=t?`<path d="M${a} ${n-7}c3 3 3 6 0 7-3-1-3-4 0-7Z" fill="#ffcf5a" stroke="#d4701c" stroke-width="1"/><circle cx="${a}" cy="${n-4}" r="5" fill="#ffcf5a" opacity=".25"/>`:`<path d="M${a} ${n}v-2.5" stroke="${r}" stroke-width="1.2"/>`;return`<rect x="${a-2.4}" y="${n}" width="4.8" height="${c}" rx="1" fill="#f3e3b5" stroke="${r}" stroke-width="1.6"/>${l}`};let s="";for(let a=0;a<12;a++){const c=a*Math.PI/6,n=(l,f)=>`${(32+Math.cos(c+f)*l).toFixed(1)} ${(31+Math.sin(c+f)*l).toFixed(1)}`;s+=`M${n(4.4,-.26)}L${n(a%2?7.4:8.8,0)}L${n(4.4,.26)}Z`}const i=`<circle cx="32" cy="31" r="${t?15:11}" fill="url(#${o})" opacity="${t?1:.55}"/>
<path d="${s}" fill="#ffd25a" stroke="#8a5a1a" stroke-width=".8" stroke-linejoin="round"/>
<circle cx="32" cy="31" r="4.8" fill="#e2b850" stroke="#8a5a1a" stroke-width="1.1"/><circle cx="30.8" cy="29.8" r="1.6" fill="#fff3c4" opacity=".8"/>`;return p(`<defs><radialGradient id="${o}"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".95"/><stop offset="1" stop-color="#ffcf5a" stop-opacity="0"/></radialGradient></defs>
<path d="M8 60V24C8 10 19 3 32 3s24 7 24 21v36Z" fill="#4a4452" stroke="${r}" stroke-width="2.4"/>
<path d="M14 58V26c0-10 8-16 18-16s18 6 18 16v32Z" fill="#2c2734"/>
<path d="M9 30c3-2 5 0 6 3M55 22c-3 0-5 2-5 5M10 44c2 0 4 2 4 4" fill="none" stroke="#4f8a3a" stroke-width="2.6" stroke-linecap="round"/>
<circle cx="11" cy="31" r="1.8" fill="#6fae4f"/><circle cx="53" cy="25" r="1.8" fill="#6fae4f"/><circle cx="12" cy="47" r="1.8" fill="#6fae4f"/>
<path d="M32 11c-7 0-10 6-10 12 0 3-2 6-4 9l-2 20h32l-2-20c-2-3-4-6-4-9 0-6-3-12-10-12Z" fill="#9aa0a8" stroke="${r}" stroke-width="2.4" stroke-linejoin="round"/>
<path d="M32 11c5 0 9 4 10 12 0 3 2 6 4 9l2 20H38l-1-24c0-8-2-13-5-17Z" fill="#7d8189"/>
<path d="M26.5 21c0-4 2.5-6.5 5.5-6.5s5.5 2.5 5.5 6.5c0 3.5-2.5 5.5-5.5 5.5s-5.5-2-5.5-5.5Z" fill="#858a93" stroke="#4a4452" stroke-width="1.2"/>
<path d="M26.6 20.4c.6-3.6 2.8-5.6 5.4-5.6s4.8 2 5.4 5.6c-1.8-1.4-3.4-2-5.4-2s-3.6.6-5.4 2Z" fill="#3a3542" opacity=".7"/>
<path d="M28.8 21.4q1.2 .9 2.3 0M32.9 21.4q1.2 .9 2.3 0M31.2 24.4h1.6" fill="none" stroke="#3a3542" stroke-width="1.1" stroke-linecap="round"/>
${i}
<path d="M22.5 38.5c0-3.4 2.6-5 5.4-4.3l4.1 2 4.1-2c2.8-.7 5.4.9 5.4 4.3-2.2 2.6-5.6 3.4-9.5 3.4s-7.3-.8-9.5-3.4Z" fill="#a9aeb6" stroke="#4a4452" stroke-width="1.3" stroke-linejoin="round"/>
<path d="M26 37.6q1.6 1 3 .4M38 37.6q-1.6 1-3 .4" fill="none" stroke="#5a5560" stroke-width="1" stroke-linecap="round"/>
<rect x="6" y="52" width="52" height="8" rx="1.5" fill="#7d8189" stroke="${r}" stroke-width="2.2"/>
<path d="M6 55h52" stroke="#9aa0a8" stroke-width="1.4"/>
${e(11,9)}${e(17,6)}${e(47,6)}${e(53,10)}`)}function A(){let t="";for(const o of[-1,1])for(let e=0;e<14;e++){const s=Math.PI/2+o*(.42+Math.floor(e/2)*.3),i=s+o*(e%2===0?1.05:2.1),a=(32+Math.cos(s)*27+Math.cos(i)*4).toFixed(1),c=(34+Math.sin(s)*27+Math.sin(i)*4).toFixed(1),n=(i*180/Math.PI).toFixed(0);t+=`<ellipse cx="${a}" cy="${c}" rx="4.6" ry="1.9" transform="rotate(${n} ${a} ${c})"/>`}return p(`<path d="M18 57C9 52 4 43 5 32M46 57c9-5 14-14 13-25" fill="none" stroke="${m}" stroke-width="2.4" stroke-linecap="round"/>
<g fill="${d}" stroke="${r}" stroke-width="1.4">${t}</g>
<path d="M27 59l5-3 5 3" fill="none" stroke="${r}" stroke-width="2" stroke-linecap="round"/>`)}function C(){return p(`<path d="M10 4h44" stroke="#7a5536" stroke-width="4" stroke-linecap="round"/>
<circle cx="8" cy="4" r="3" fill="${d}" stroke="${r}" stroke-width="1.6"/><circle cx="56" cy="4" r="3" fill="${d}" stroke="${r}" stroke-width="1.6"/>
<path d="M14 6h36v52l-7-6-5 6-6-6-6 6-5-6-7 6Z" fill="#7a2f33" stroke="${r}" stroke-width="2.6" stroke-linejoin="round"/>
<path d="M18 9h28v42" fill="none" stroke="${d}" stroke-opacity=".7" stroke-width="1.6"/>
${g(32,28,8)}`)}function M(t,o,e){if(t.dataset.art===o)return;const s=t.firstChild!==null;t.dataset.art=o,t.innerHTML=e,s&&t.animate?.([{opacity:0},{opacity:1}],{duration:160,easing:"ease-out"})}function I(t,o,e,s,i,a){const c=v(e,s),n=i?`<span class="marche-camp-laurel">${A()}</span>`:"";M(t,`${c}${a??""}${i}`,S(o,c,a)+n)}function q(t,o){M(t,String(o),V(o))}function G(t){M(t,"sun",C())}const P=`
.marche-camp-paint .marche-camp-laurel{position:absolute;inset:-14% 0 0;pointer-events:none}
.marche-camp-paint svg,.marche-camp-emblem svg{width:100%;height:100%;display:block}
.marche-buy.is-primary::after{content:'';position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.55) 50%,transparent 70%);transform:translateX(-120%);animation:marche-camp-shine 3.2s ease-in-out infinite;pointer-events:none}
@keyframes marche-camp-shine{0%,70%{transform:translateX(-120%)}100%{transform:translateX(120%)}}
.marche-upgrade-band::after{content:'';position:absolute;left:8%;right:8%;top:38%;height:2px;background:rgba(0,0,0,.18);box-shadow:0 6px 0 rgba(0,0,0,.12);pointer-events:none}
.marche-upgrade-max{margin-left:.3em;padding:0 .35em;border-radius:999px;background:var(--camp-ink);color:var(--camp-cream)}
.marche-camp-depart.is-next{animation:marche-camp-glow 2.4s ease-in-out infinite}
@keyframes marche-camp-glow{0%,100%{box-shadow:0 5px 0 #3b2416,0 0 0 #ffd25a00}50%{box-shadow:0 5px 0 #3b2416,0 0 20px #ffd25acc}}
.marche-camp-depart.is-next.is-heroic{animation-name:marche-camp-glow-heroic}
@keyframes marche-camp-glow-heroic{0%,100%{box-shadow:0 5px 0 #3b2416,0 0 0 2px #b04cff8c,0 8px 16px #7828c873,0 0 0 #ffd25a00}50%{box-shadow:0 5px 0 #3b2416,0 0 0 2px #b04cff8c,0 8px 16px #7828c873,0 0 20px #ffd25acc}}
@media (hover:hover) and (pointer:fine){.marche-upgrade{transition:transform 120ms ease-out,box-shadow 120ms}.marche-upgrade:hover{transform:translateY(-2px);box-shadow:0 7px 0 #3b2416bf,0 16px 32px #00000080}.marche-camp button:not(:disabled):not(.is-short):not(.is-arming):hover{filter:brightness(1.07)}}
@media (prefers-reduced-motion:reduce){.marche-buy.is-primary::after{animation:none;display:none}.marche-camp-depart.is-next{animation:none}}
`;function H(){if(typeof document>"u"||document.getElementById("marche-camp-art-css"))return;const t=document.createElement("style");t.id="marche-camp-art-css",t.textContent=P,document.head.append(t)}export{S as cardArtSvg,v as cardTier,H as ensureCampArtCss,A as laurelSvg,V as offeringArtSvg,I as paintCardArt,G as paintEmblem,q as paintStatue,C as sunEmblemSvg};

