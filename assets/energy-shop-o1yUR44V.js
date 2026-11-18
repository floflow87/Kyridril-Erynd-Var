import{bI as M,eU as Y,ap as a,ej as O,et as P,al as $,ei as T,an as z,bC as y,eo as V,di as I,ak as F,en as K}from"./index-Bb8Gg0jt.js";import"./phaser-DIUF0PZB.js";const _={pricePerChapter:[35,55,80,85,105],dailyBuys:3};function G(e){const t=new Date(e);return t.getFullYear()*1e4+(t.getMonth()+1)*100+t.getDate()}function W(e){const t=_.pricePerChapter;return t[Math.max(0,Math.min(t.length-1,e-1))]??t[0]}function D(e,t){const l=e.energyBuyDay===G(t)?e.energyBuys:0;return Math.max(0,_.dailyBuys-l)}function X(e,t,l){const i=Math.max(0,M.max-e);if(i<=0)return[];const s=[{kind:"one",amount:1,price:l}],p=Math.min(t,M.max)-e;return p>1&&p<i&&s.push({kind:"enough",amount:p,price:p*l}),i>1&&s.push({kind:"full",amount:i,price:i*l}),s}function Z(e,t,l,i){const s=Y(e,i),p=Math.min(Math.floor(t),M.max-s.energy),m=p*Math.round(l);if(!(p>0)||!(m>=0)||m>e.gold||D(e,i)<=0)return null;const g=s.energy+p,b=G(i);return{...s,gold:e.gold-m,energy:g,energyUpdatedAt:g>=M.max?i:s.energyUpdatedAt,energyBuys:(e.energyBuyDay===b?e.energyBuys:0)+1,energyBuyDay:b}}const ie="marche-energy-shop",R=e=>`marche-shop-${e}`,d=(e,t)=>$(`marche:camp.energyShop.${e}`,t),J="assets/marche/energie/potion.webp",Q='<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M29 3 9 27h12l-4 18 22-26H27l6-16Z" fill="#ffd34a" stroke="#2a1b1d" stroke-width="3.5" stroke-linejoin="round"/></svg>',C=(e,t)=>`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><g transform="translate(${e<0?40:0} ${t<0?40:0}) scale(${e} ${t})" fill="none" stroke-linecap="round"><path d="M3 30V9a6 6 0 0 1 6-6h21" stroke="#9a6417" stroke-width="4.5"/><path d="M3 30V9a6 6 0 0 1 6-6h21" stroke="#f2c35a" stroke-width="2.4"/><path d="M9 22c0-8 4-13 13-13" stroke="#d9a13a" stroke-width="2"/><path d="M14 14q4 1 5 6m-5-6q-1 4-6 5" stroke="#d9a13a" stroke-width="1.6"/><circle cx="14" cy="14" r="2.6" fill="#ffe9a6" stroke="#9a6417" stroke-width="1.2"/><circle cx="30" cy="3" r="2" fill="#f2c35a"/><circle cx="3" cy="30" r="2" fill="#f2c35a"/></g></svg>`)}")`,ee=e=>e.replace(/(-?\d*\.?\d+)u\b/g,"calc($1*var(--u))").replace(/&&/g,".marche-shop-sheet").replace(/&(?=[a-z])/g,".marche-shop-").replace(/%%/g,".marche-"),ae=ee(`
&&{container:marche-shop/size}
&& %%sub-panel{position:relative;width:min(100%,780u);gap:var(--menu-gap);border:3px solid #d9a13a;border-radius:16px;background:radial-gradient(ellipse at 50% 18%,#fffaf0,#f9eed4 55%,#efdcb0);box-shadow:0 0 0 2px #6b4413,0 0 0 4px #2a1b1d,0 14px 30px #000a,inset 0 0 0 2px #fff6dc,inset 0 0 0 4px #e3b85e66,inset 0 -10px 20px #a8783a26;overflow:visible}
&& %%sub-panel::before,&& %%sub-panel::after{content:"";position:absolute;left:-5px;right:-5px;height:max(30px,36u);pointer-events:none;background-repeat:no-repeat;background-size:max(30px,36u)}
&& %%sub-panel::before{top:-5px;background-image:${C(1,1)},${C(-1,1)};background-position:left top,right top}
&& %%sub-panel::after{bottom:-5px;background-image:${C(1,-1)},${C(-1,-1)};background-position:left bottom,right bottom}
&& %%sub-head{position:relative;z-index:1;padding-left:6u}
&& %%sub-head>%%panel-title{font-size:max(20px,23u);color:#2e1c13;text-shadow:0 1px 0 #fff9}
&& %%sub-body{position:relative;z-index:1;overflow-x:hidden}
.marche-shop{display:flex;flex-direction:column;gap:var(--menu-gap)}
&rule{display:flex;align-items:center;gap:6u;margin:-2u 0 0}
&rule::before,&rule::after{content:"";flex:1 1 0;height:2px;background:linear-gradient(90deg,#d9a13a33,#d9a13a 30%,#d9a13a)}
&rule::after{transform:scaleX(-1)}
&rule>i{flex:none;width:9u;height:9u;border:1.5px solid #9a6417;background:#ffe9a6;transform:rotate(45deg)}
&strip{display:flex;align-items:center;flex-wrap:wrap;gap:4u 12u;padding:0 4u 8u;border-bottom:1.5px solid #d9a13a66;font:700 max(12px,13.5u)/1.2 var(--font-body);color:#3b2416}
&sep{flex:none;align-self:stretch;width:1.5px;min-height:22u;background:linear-gradient(#c9963a00,#c9963a 25%,#c9963a 75%,#c9963a00)}
&badge{flex:none;width:max(28px,32u);height:max(28px,32u);display:grid;place-items:center;border-radius:50%;background:radial-gradient(circle at 36% 30%,#9fe0ff,#3f8ff0 55%,#1d4aa8);box-shadow:0 0 0 2px #1b1830,inset 0 0 0 2px #ffffff59,0 2px 0 #0004}
&badge>%%ico{width:64%;height:64%}
&energy{display:flex;flex-direction:column;gap:1u;min-width:0}
&energy-top{display:flex;align-items:center;gap:7u;white-space:nowrap}
&pips{display:flex;gap:2u}
&pips>span{width:max(5px,6u);height:max(14px,16u);border-radius:3px;background:linear-gradient(#b9b0a4,#8f8579);box-shadow:inset 0 0 0 1px #0000004d}
&pips>.is-on{background:linear-gradient(#ffe07a,#f6b23c 55%,#d48a1c);box-shadow:inset 0 0 0 1px #7a4b12,inset 0 2px 0 #fff4}
&next{font:600 max(11px,12u)/1.1 var(--font-body);color:#6b4a30}
&price,&left{white-space:nowrap}
&day{flex:1 1 auto;display:flex;align-items:center;gap:inherit}
&left{color:#3f7a26}
&left.is-out{color:#9a3b26}
&gold{flex:none;margin-left:auto;display:inline-flex;align-items:center;gap:6u;height:max(30px,32u);padding:0 13u 0 4u;border:2px solid #c9973e;border-radius:999px;background:linear-gradient(#3a2418,#1e1214);box-shadow:0 0 0 2px #2a1b1d,inset 0 1px 0 #fff2;color:#ffe39a;font:700 max(15px,17u)/1 var(--font-title)}
&gold>%%ico{width:max(23px,26u);height:max(23px,26u)}
&offers{display:flex;justify-content:center;gap:16u}
&offer{position:relative;flex:1 1 0;min-width:0;container:shop-card/inline-size;max-width:380u;display:flex;flex-direction:column;gap:10u;padding:12u 16u 14u;border:2px solid #3b241640;border-radius:14px;background:radial-gradient(ellipse at 40% 25%,#fffcf3,#f5e6c4);box-shadow:inset 0 0 0 2px #fff8,0 2px 0 #3b24161f}
&offer.is-best{border:3px solid #7b4fa8;box-shadow:0 0 0 2px #c9a8f059,inset 0 0 0 2px #fff8,0 0 14px #8e5fd04d}
&card{flex:1 1 auto;display:flex;align-items:center;justify-content:center;gap:12u;min-height:0}
&art{flex:none;display:flex;align-items:flex-end;justify-content:center;height:var(--art);--art:max(52px,66u)}
&art>img{display:block;height:100%;width:auto;aspect-ratio:32/42;image-rendering:pixelated;filter:drop-shadow(0 2px 1px #0003)}
&art>img+img{margin-left:calc(var(--art)*-.34)}
&art.is-3>img:nth-child(2){position:relative;z-index:1;height:108%;margin-bottom:-2%}
&vdiv{flex:none;align-self:stretch;width:1.5px;margin:4u 0;background:linear-gradient(#c9963a00,#c9963a 30%,#c9963a 70%,#c9963a00)}
&text{min-width:0;display:flex;flex-direction:column;gap:2u}
&name,&amount{font:700 max(16px,19u)/1.1 var(--font-title);color:#2e1c13}
&amount{white-space:nowrap}
&why{font:700 max(12px,13u)/1.2 var(--font-body);color:#9a3b26}
&why:empty{display:none}
%%sub &pay{align-self:stretch;--bh:max(36px,39u)}
&pay %%button-label{display:inline-flex;align-items:center;gap:6u;font:700 max(13px,16.5u)/1 var(--font-title)}
&pay %%ico{width:max(17px,20u);height:max(17px,20u)}
&pay.is-blocked{filter:saturate(.15) brightness(.9);opacity:.85}
&offer.is-blocked &art{filter:saturate(.35) opacity(.8)}
&offer.is-blocked &name,&offer.is-blocked &amount{color:#7a6650}
&full{display:flex;align-items:center;justify-content:center;gap:16u;padding:14u 20u;border:2px solid #3b241640;border-radius:14px;background:radial-gradient(ellipse at 40% 25%,#fffcf3,#f5e6c4)}
&full-text{display:flex;flex-direction:column;gap:4u;max-width:420u}
&full-title{margin:0;font:700 max(15px,18u)/1.2 var(--font-title);color:#3f7a26}
&full-tip{margin:0;font:600 max(12px,13u)/1.3 var(--font-body);color:#6b4a30}
@container marche-shop (max-height:400px){&& %%sub-head>%%panel-title{font-size:max(19px,21u)}.marche-shop{gap:8u}&strip{padding-bottom:6u;row-gap:2u}&art{--art:60px}&offer{gap:8u;padding:8u 12u 10u}&name,&amount{font-size:max(16px,18u)}&pay %%button-label{font-size:max(13px,15.5u)}%%sub &pay{--bh:36px}}
@container marche-shop (max-height:330px){&& %%sub-head>%%panel-title{font-size:20px}&& %%sub-panel{gap:2px;padding-top:4px;padding-bottom:8px}.marche-shop{gap:5u}&strip{border-bottom:0;padding-bottom:0}&art{--art:46px}&offer{gap:4px;padding:5px 10px 7px}&name,&amount{font-size:16px}%%sub &pay{--bh:34px}&pay %%button-label{font-size:15px}&full-tip{display:none}}
@container marche-shop (max-width:760px){&strip{column-gap:8u;font-size:13px}&badge{width:28px;height:28px}&energy-top{gap:6px}&pips>span{width:5px}&gold{font-size:17px;padding-right:11px}&offers{gap:10u}}
@container marche-shop (max-width:680px){&day{flex-basis:100%}&day>&sep{display:none}&offers{gap:10u}&offer{padding-left:10u;padding-right:10u}&card{gap:8u}}
@container shop-card (max-width:215px){&card{flex-direction:column;gap:3px}&vdiv{display:none}&text{align-items:center;text-align:center}&art{--art:44px}&name{font-size:15px;line-height:1.05}&amount{font-size:16px}}
`),A="marche-shop-css";function te(){if(typeof document>"u"||document.getElementById(A))return;const e=document.createElement("style");e.id=A,e.textContent=ae,document.head.append(e)}function q(e){return a("span",`marche-shop-art is-${e}`,{"aria-hidden":"true"},Array.from({length:e},()=>a("img",void 0,{src:J,alt:"",draggable:"false",decoding:"async"})))}function ne(e){const t=e.arenaCount??1;return W(T(Math.min(t,(e.cleared??0)+1),10))}function se(e,t){te();const{ctx:l}=t,i=a("span","marche-num"),s=a("span","marche-shop-pips",{"aria-hidden":"true"}),p=a("span","marche-shop-next marche-num"),m=a("span","marche-shop-price marche-num"),g=a("span","marche-shop-left"),b=a("span","marche-shop-gold",{"aria-label":$("marche:camp.gold")},[O(P),a("span","marche-num")]),j=()=>a("span","marche-shop-sep",{"aria-hidden":"true"}),S=a("div","marche-shop-offers"),H=a("div","marche-shop",void 0,[a("div","marche-shop-rule",{"aria-hidden":"true"},[a("i")]),a("div","marche-shop-strip",void 0,[O(Q,"marche-shop-badge"),a("span","marche-shop-energy",void 0,[a("span","marche-shop-energy-top",void 0,[i,s]),p]),j(),m,a("span","marche-shop-day",void 0,[j(),g,b])]),S]);let x=_.dailyBuys;const L=()=>t.apply((c,r)=>(x=D(c,r),null)),U=(c,r)=>{let v=!1;if(t.apply((f,w)=>{const n=Z(f,c.amount,c.price/c.amount,w);return v=n!==null,n&&(x=D(n,w)),n}),!v){K(r,l.sfx);return}l.sfx?.play("coin"),E()};let N="";const E=()=>{const c=t.view(),r=c.energy,v=ne(c),f=r?X(r.value,r.cost,v):[];if(r){for(;s.childElementCount<r.max;)s.append(a("span"));[...s.children].forEach((n,u)=>z(n,"is-on",u<r.value))}y(i,r?d("energy",{n:r.value,max:r.max}):""),y(p,r?r.nextMs===null?$("marche:energy.full"):$("marche:energy.next",{time:V(r.nextMs+999)}):""),y(m,d("price",{price:v})),y(g,x>0?d("left",{n:x}):d("none")),z(g,"is-out",x<=0),y(b.lastElementChild??b,I(c.gold));const w=f.map(n=>`${n.kind}${n.amount}${n.price}`).join()||"full";if(w!==N){N=w;const n=f.some(o=>o.kind==="enough")?"enough":"full",u=o=>o.kind==="one"?1:o.kind==="full"&&f.length>2?3:2;S.replaceChildren(...f.length===0?[a("div","marche-shop-full",void 0,[q(1),a("div","marche-shop-full-text",void 0,[a("p","marche-shop-full-title",void 0,[d("isFull")]),a("p","marche-shop-full-tip",void 0,[$("marche:energy.tip")])])])]:f.map(o=>{const h=F("","primary",R(o.kind));h.classList.add("marche-shop-pay"),h.querySelector(".marche-button-label")?.replaceChildren(O(P),a("span","marche-num",void 0,[d("pay",{n:I(o.price)})]));const k=a("div",`marche-shop-offer is-${o.kind}${o.kind===n?" is-best":""}`,void 0,[a("div","marche-shop-card",void 0,[q(u(o)),a("span","marche-shop-vdiv",{"aria-hidden":"true"}),a("div","marche-shop-text",void 0,[a("span","marche-shop-name",void 0,[d(o.kind)]),a("span","marche-shop-amount marche-num",void 0,[d("amount",{n:o.amount})]),a("span","marche-shop-why")])]),h]);return e.press(h,()=>U(o,h),{sound:null}),k}))}for(const n of f){const u=S.querySelector(`#${R(n.kind)}`),o=u?.parentElement,h=o?.querySelector(".marche-shop-why");if(!u||!o||!h)continue;const k=n.price-c.gold,B=x<=0||k>0;u.setAttribute("aria-disabled",String(B)),z(u,"is-blocked",B),z(o,"is-blocked",B),u.setAttribute("aria-label",d("buy",{n:n.amount,price:n.price})),y(h,x<=0?d("tomorrow"):k>0?d("missing",{n:I(k)}):"")}};return L(),E(),{body:H,refresh:E}}export{ie as ENERGY_SHOP_ID,J as POTION_SRC,se as energyShop,ne as priceOf,R as shopOfferId};

