import{bP as E,f0 as X,ge as Q,ax as a,eq as T,eB as Y,at as M,ep as Z,av as v,eu as G,bJ as w,dq as I,as as ee,et as te}from"./index-hsGAfJ-k.js";import"./phaser-DIUF0PZB.js";const A={pricePerChapter:[35,55,80,85,105],dailyBuys:3};function L(e){const o=new Date(e);return o.getFullYear()*1e4+(o.getMonth()+1)*100+o.getDate()}function ae(e){const o=A.pricePerChapter;return o[Math.max(0,Math.min(o.length-1,e-1))]??o[0]}function j(e,o){const d=e.energyBuyDay===L(o)?e.energyBuys:0;return Math.max(0,A.dailyBuys-d)}function oe(e,o,d,h=E.max){const r=Math.max(0,h-e);if(r<=0)return[];const g=[{kind:"one",amount:1,price:d}],s=Math.min(o,h)-e;return s>1&&s<r&&g.push({kind:"enough",amount:s,price:s*d}),r>1&&g.push({kind:"full",amount:r,price:r*d}),g}function ne(e,o,d,h){const r=X(e,h),g=Q(e),s=Math.min(Math.floor(o),g-r.energy),m=s*Math.round(d);if(!(s>0)||!(m>=0)||m>e.gold||j(e,h)<=0)return null;const $=r.energy+s,k=L(h);return{...r,gold:e.gold-m,energy:$,energyUpdatedAt:$>=g?h:r.energyUpdatedAt,energyBuys:(e.energyBuyDay===k?e.energyBuys:0)+1,energyBuyDay:k}}const he="marche-energy-shop",H=e=>`marche-shop-${e}`,i=(e,o)=>M(`marche:camp.energyShop.${e}`,o),_=e=>globalThis.__EMBEDDED_ASSETS__?.[e]??e,P="assets/marche/energie/potion-peinte-",V=(e,o)=>a("img",e,{src:_(`${P}160.webp`),srcset:`${_(`${P}160.webp`)} 160w, ${_(`${P}320.webp`)} 320w`,sizes:o,alt:"",draggable:"false",decoding:"async"}),S=(e,o)=>`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><g transform="translate(${e<0?40:0} ${o<0?40:0}) scale(${e} ${o})" fill="none" stroke-linecap="round"><path d="M3 30V9a6 6 0 0 1 6-6h21" stroke="#9a6417" stroke-width="4.5"/><path d="M3 30V9a6 6 0 0 1 6-6h21" stroke="#f2c35a" stroke-width="2.4"/><path d="M9 22c0-8 4-13 13-13" stroke="#d9a13a" stroke-width="2"/><path d="M14 14q4 1 5 6m-5-6q-1 4-6 5" stroke="#d9a13a" stroke-width="1.6"/><circle cx="14" cy="14" r="2.6" fill="#ffe9a6" stroke="#9a6417" stroke-width="1.2"/><circle cx="30" cy="3" r="2" fill="#f2c35a"/><circle cx="3" cy="30" r="2" fill="#f2c35a"/></g></svg>`)}")`,re=e=>e.replace(/&&/g,".marche-shop-sheet").replace(/&(?=[a-z])/g,".marche-shop-").replace(/%%/g,".marche-"),ie=re(`
&&{container:marche-shop/size}
&& %%sub-panel{position:relative;width:auto;max-width:100%;gap:2px;padding:max(6px,1.6cqh) 16px max(10px,2.6cqh);border:3px solid #d9a13a;border-radius:16px;background:radial-gradient(ellipse at 50% 18%,#fffaf0,#f9eed4 55%,#efdcb0);box-shadow:0 0 0 2px #6b4413,0 0 0 4px #2a1b1d,0 14px 30px #000a,inset 0 0 0 2px #fff6dc,inset 0 0 0 4px #e3b85e66,inset 0 -10px 20px #a8783a26;overflow:visible}
&& %%sub-panel::before,&& %%sub-panel::after{content:"";position:absolute;left:-5px;right:-5px;height:34px;pointer-events:none;background-repeat:no-repeat;background-size:34px}
&& %%sub-panel::before{top:-5px;background-image:${S(1,1)},${S(-1,1)};background-position:left top,right top}
&& %%sub-panel::after{bottom:-5px;background-image:${S(1,-1)},${S(-1,-1)};background-position:left bottom,right bottom}
&& %%sub-head{position:relative;z-index:1;justify-content:center;padding:0 40px}
&& %%sub-head>%%panel-title{flex:0 1 auto;text-align:center;font-size:clamp(19px,6.6cqh,26px);color:#2e1c13;text-shadow:0 1px 0 #fff9}
&& %%sub-head>%%sub-close{position:absolute;right:-6px;top:50%;transform:translateY(-50%)}
&& %%sub-body{position:relative;z-index:1;overflow-x:hidden;padding:0}
.marche-shop{display:flex;align-items:stretch;justify-content:center;gap:16px;--ls:clamp(12px,3.6cqh,14.5px)}
&main{flex:0 1 auto;width:330px;min-width:260px;display:flex;flex-direction:column;align-items:center;gap:clamp(2px,1.3cqh,7px)}
&hero{--ph:clamp(44px,20cqh,80px);position:relative;flex:none;display:flex;justify-content:center;height:var(--ph);width:calc(var(--ph)*1.4);margin-top:clamp(0px,1cqh,6px)}
&hero::before{content:"";position:absolute;inset:-30% -40%;border-radius:50%;background:radial-gradient(closest-side,#ffe9a6 0,#ffe9a6b3 34%,#ffefc24d 62%,#fff4d600);pointer-events:none}
&potion{position:relative;display:block;height:var(--ph);width:auto;aspect-ratio:160/226;filter:drop-shadow(0 3px 2px #3b241640)}
&count{font:800 clamp(18px,6.6cqh,27px)/1 var(--font-body);color:#2e1c13;letter-spacing:.02em;white-space:nowrap;text-shadow:0 1px 0 #fff9}
&gauge{--gh:clamp(12px,4.4cqh,18px);position:relative;display:flex;gap:var(--sg,3px);width:min(100%,270px);height:var(--gh);padding:2.5px;border-radius:999px;background:linear-gradient(#2c1b12,#4a3020);box-shadow:0 0 0 1.5px #b9852c,0 0 0 3px #5a3a1255,inset 0 2px 3px #000a;box-sizing:border-box;margin:2px 0}
&gauge::after{content:"";position:absolute;left:4px;right:4px;top:3px;height:32%;border-radius:999px;background:linear-gradient(#fff8,#fff0);pointer-events:none}
&seg{position:relative;flex:1 1 0;min-width:0;border-radius:1.5px;background:linear-gradient(#6b5040,#4d3528);box-shadow:inset 0 0 0 1px #0000004d;overflow:hidden}
&seg:first-child{border-top-left-radius:999px;border-bottom-left-radius:999px}
&seg:last-child{border-top-right-radius:999px;border-bottom-right-radius:999px}
&seg.is-on{background:linear-gradient(#fff6b8,#ffd84a 38%,#f5a91f 72%,#c97a12);box-shadow:inset 0 0 0 1px #a8670f80,0 0 5px #ffc83dcc}
&seg.is-charging::before{content:"";position:absolute;left:0;top:0;bottom:0;width:calc(var(--p,0)*100%);background:linear-gradient(#ffe48a,#e8a52b);opacity:.55}
&gauge.is-full{box-shadow:0 0 0 1.5px #b9852c,0 0 0 3px #5a3a1255,0 0 12px #ffcf4a99,inset 0 2px 3px #000a}
&gauge.is-full::before{content:"";position:absolute;z-index:1;left:28%;right:28%;top:12%;bottom:12%;border-radius:50%;background:radial-gradient(closest-side,#fffbe6d9,#fffbe600);pointer-events:none}
&state{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:center;gap:0 10px;min-height:1.25em;text-align:center;font:700 var(--ls)/1.25 var(--font-body)}
&is-full{margin:0;font:700 clamp(16px,5.8cqh,23px)/1.1 var(--font-title);color:#2f7a1f;text-shadow:0 1px 0 #fff9}
&short{color:#9a3b26}
&next{color:#6b4a30;font-weight:600}
&rule{display:flex;align-items:center;gap:6px;width:100%;margin:clamp(0px,.6cqh,3px) 0 0}
&rule::before,&rule::after{content:"";flex:1 1 0;height:1.5px;background:linear-gradient(90deg,#d9a13a00,#d9a13a 35%,#d9a13a)}
&rule::after{transform:scaleX(-1)}
&rule>i{flex:none;width:7px;height:7px;border:1.5px solid #b07a22;background:#fff6dc;transform:rotate(45deg)}
&rules{margin:0;text-align:center;font:600 var(--ls)/1.35 var(--font-body);color:#3b2416}
&rules>span{display:block}
&info{display:flex;align-items:stretch;width:100%;min-height:clamp(30px,10cqh,40px);margin-top:clamp(1px,.8cqh,4px);border:1.5px solid #dcc08a;border-radius:999px;background:linear-gradient(#fffaee,#f4e5c4);box-shadow:inset 0 1px 0 #fff,0 1px 0 #fff9;font:600 var(--ls)/1.15 var(--font-body);color:#2e1c13}
&info>span{flex:1 1 0;display:flex;align-items:center;justify-content:center;padding:2px 8px;text-align:center;white-space:nowrap}
&info>&sep{flex:none;width:1.5px;padding:0;margin:5px 0;background:linear-gradient(#c9963a00,#c9963a 25%,#c9963a 75%,#c9963a00)}
&left.is-out{color:#9a3b26}
&offers{flex:0 1 auto;width:300px;min-width:240px;display:flex;flex-direction:column;justify-content:center;gap:clamp(4px,1.8cqh,8px);padding-left:16px;border-left:1.5px solid #d9a13a80}
.marche-shop.is-full &offers{display:none}
&list{display:contents}
&offers-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:2px}
&offers-title{margin:0;font:700 clamp(16px,5.2cqh,20px)/1.1 var(--font-title);color:#2e1c13;text-shadow:0 1px 0 #fff9}
&gold{flex:none;display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px 0 3px;border:2px solid #c9973e;border-radius:999px;background:linear-gradient(#3a2418,#1e1214);box-shadow:0 0 0 2px #2a1b1d,inset 0 1px 0 #fff2;color:#ffe39a;font:700 16px/1 var(--font-title)}
&gold>%%ico{width:22px;height:22px}
&offer{position:relative;display:flex;align-items:center;gap:8px;min-height:0;padding:3px 4px 3px 8px;border:2px solid #3b241640;border-radius:12px;background:radial-gradient(ellipse at 40% 25%,#fffcf3,#f5e6c4);box-shadow:inset 0 0 0 2px #fff8,0 2px 0 #3b24161f}
&offer.is-best{border-color:#7b4fa8;box-shadow:0 0 0 2px #c9a8f059,inset 0 0 0 2px #fff8,0 0 10px #8e5fd04d}
&art{flex:none;display:flex;align-items:flex-end;justify-content:center;width:44px;height:36px}
&art>img{display:block;height:100%;width:auto;aspect-ratio:160/226;filter:drop-shadow(0 1px 1px #0003)}
&art>img+img{margin-left:-11px}
&art.is-2>img{height:88%}
&art.is-3>img{height:80%}
&art.is-3>img:nth-child(2){position:relative;z-index:1;height:100%}
&text{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:1px}
&name{font:700 15px/1.05 var(--font-title);color:#2e1c13}
&amount{font:700 12.5px/1.15 var(--font-body);color:#6b4a30;white-space:nowrap}
&why{font:700 12px/1.15 var(--font-body);color:#9a3b26}
&why:empty{display:none}
%%sub &pay{flex:none;--bh:38px;min-width:88px;padding:0 10px}
&pay %%button-label{display:inline-flex;align-items:center;gap:5px;font:700 15px/1 var(--font-title);white-space:nowrap}
&pay %%ico{width:18px;height:18px}
&pay.is-blocked{filter:saturate(.15) brightness(.9);opacity:.85}
&offer.is-blocked &art{filter:saturate(.35) opacity(.8)}
&offer.is-blocked &name{color:#7a6650}
@container marche-shop (max-height:330px){&& %%sub-head>%%sub-close{right:-10px}&offer{padding-top:1px;padding-bottom:1px}%%sub &pay{--bh:34px}&art{height:30px}&name{font-size:14px}&gold{height:26px;font-size:15px}&gold>%%ico{width:19px;height:19px}}
@container marche-shop (max-width:700px){.marche-shop{gap:12px}&offers{padding-left:12px}}
`),U="marche-shop-css";function se(){if(typeof document>"u"||document.getElementById(U))return;const e=document.createElement("style");e.id=U,e.textContent=ie,document.head.append(e)}function pe(e){return a("span",`marche-shop-art is-${e}`,{"aria-hidden":"true"},Array.from({length:e},()=>V("","36px")))}function ce(e){const o=e.arenaCount??1;return ae(Z(Math.min(o,(e.cleared??0)+1),10))}function fe(e,o){se();const{ctx:d}=o,h=a("div","marche-shop-count marche-num"),r=a("div","marche-shop-gauge",{role:"img"}),g=a("p","marche-shop-is-full",void 0,[i("isFull")]),s=a("span","marche-shop-short"),m=a("span","marche-shop-next marche-num"),$=a("span","marche-shop-price marche-num"),k=a("span","marche-shop-left"),B=a("span","marche-shop-gold",{"aria-label":M("marche:camp.gold")},[T(Y),a("span","marche-num")]),O=a("div","marche-shop-list"),J=a("div","marche-shop-offers",void 0,[a("div","marche-shop-offers-head",void 0,[a("h3","marche-shop-offers-title",void 0,[i("offers")]),B]),O]),N=a("div","marche-shop",void 0,[a("div","marche-shop-main",void 0,[a("div","marche-shop-hero",{"aria-hidden":"true"},[V("marche-shop-potion","80px")]),h,r,a("div","marche-shop-state",void 0,[g,s,m]),a("div","marche-shop-rule",{"aria-hidden":"true"},[a("i")]),a("p","marche-shop-rules",void 0,[a("span",void 0,void 0,[i("costs",{arena:E.arenaCost,boss:E.bossCost})]),a("span",void 0,void 0,[i("recharge",{min:Math.round(E.rechargeMs/6e4)})])]),a("div","marche-shop-info",void 0,[$,a("span","marche-shop-sep",{"aria-hidden":"true"}),k])]),J]);let b=A.dailyBuys;const K=()=>o.apply((f,t)=>(b=j(f,t),null)),W=(f,t)=>{let q=!1;if(o.apply((y,x)=>{const u=ne(y,f.amount,f.price/f.amount,x);return q=u!==null,u&&(b=j(u,x)),u}),!q){te(t,d.sfx);return}d.sfx?.play("coin"),z()};let R="";const z=()=>{const f=o.view(),t=f.energy,q=ce(f),y=t?oe(t.value,t.cost,q,t.max):[],x=!t||t.nextMs===null||t.value>=t.max;if(v(N,"is-full",x),v(r,"is-full",x),g.hidden=!x,t){r.childElementCount!==t.max&&(r.replaceChildren(...Array.from({length:t.max},()=>a("span","marche-shop-seg"))),r.style.setProperty("--sg",`${Math.max(1,Math.min(3,36/t.max)).toFixed(1)}px`));const p=t.nextMs===null?0:Math.max(0,Math.min(1,1-t.nextMs/E.rechargeMs));[...r.children].forEach((c,n)=>{v(c,"is-on",n<t.value);const l=!x&&n===t.value;v(c,"is-charging",l),l&&c.style.setProperty("--p",p.toFixed(3))}),r.setAttribute("aria-label",M("marche:energy.gauge",{n:t.value,max:t.max,next:x?M("marche:energy.full"):M("marche:energy.next",{time:G((t.nextMs??0)+999)})}))}w(h,t?i("count",{n:t.value,max:t.max}):"");const u=t?Math.min(t.cost,t.max)-t.value:0;w(s,u>0?i("short",{n:u}):""),s.hidden=u<=0,w(m,!t||x?"":M("marche:energy.next",{time:G((t.nextMs??0)+999)})),m.hidden=!t||x,w($,i("price",{price:q})),w(k,b>0?i("left",{count:b}):i("none")),v(k,"is-out",b<=0),w(B.lastElementChild??B,I(f.gold));const F=y.map(p=>`${p.kind}${p.amount}${p.price}`).join()||"full";if(F!==R){R=F;const p=y.some(n=>n.kind==="enough")?"enough":"full",c=n=>n.kind==="one"?1:n.kind==="full"&&y.length>2?3:2;O.replaceChildren(...y.map(n=>{const l=ee("","primary",H(n.kind));l.classList.add("marche-shop-pay"),l.querySelector(".marche-button-label")?.replaceChildren(T(Y),a("span","marche-num",void 0,[i("pay",{n:I(n.price)})]));const C=a("div",`marche-shop-offer is-${n.kind}${n.kind===p?" is-best":""}`,void 0,[pe(c(n)),a("div","marche-shop-text",void 0,[a("span","marche-shop-name",void 0,[i(n.kind)]),a("span","marche-shop-amount marche-num",void 0,[i("amount",{n:n.amount})]),a("span","marche-shop-why")]),l]);return e.press(l,()=>W(n,l),{sound:null}),C}))}for(const p of y){const c=O.querySelector(`#${H(p.kind)}`),n=c?.parentElement,l=n?.querySelector(".marche-shop-why");if(!c||!n||!l)continue;const C=p.price-f.gold,D=b<=0||C>0;c.setAttribute("aria-disabled",String(D)),v(c,"is-blocked",D),v(n,"is-blocked",D),c.setAttribute("aria-label",i("buy",{n:p.amount,price:p.price})),w(l,b<=0?i("tomorrow"):C>0?i("missing",{n:I(C)}):"")}};return K(),z(),{body:N,refresh:z}}export{he as ENERGY_SHOP_ID,fe as energyShop,ce as priceOf,H as shopOfferId};

