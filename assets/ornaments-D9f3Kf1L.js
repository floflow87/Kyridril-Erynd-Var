import{an as o,dX as n}from"./index-THNtbUgO.js";const c="marche-orn-css",r="#f2c35a",i="#ffe9a6",a="#9a6417",h="#2a1810",s="#1a0f0a",f=e=>e.replace(/(-?\d*\.?\d+)u\b/g,"calc($1*var(--u,1px))").replace(/&(?=[a-z])/g,".marche-orn-"),g="M12 1.5 14.2 9.8 22.5 12 14.2 14.2 12 22.5 9.8 14.2 1.5 12 9.8 9.8Z",x=`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${g}" fill="${i}" stroke="${a}" stroke-width="1.2" stroke-linejoin="round"/></svg>`,v=`<svg viewBox="0 0 120 34" xmlns="http://www.w3.org/2000/svg"><path d="M0 33c18 0 30-3 40-11 7-6 12-12 20-20 8 8 13 14 20 20 10 8 22 11 40 11Z" fill="${h}" stroke="${r}" stroke-width="2.4" stroke-linejoin="round"/><path d="M12 33c14-1 24-4 31-10m65 10c-14-1-24-4-31-10" fill="none" stroke="${a}" stroke-width="1.4"/><path d="M60 7 62.9 17.1 73 20 62.9 22.9 60 33 57.1 22.9 47 20 57.1 17.1Z" fill="${i}" stroke="${a}" stroke-width="1.2" stroke-linejoin="round"/></svg>`,b=(()=>{const t=[[15,40,-40],[10,33,-25],[8,25,-12],[8,17,0],[10,9,14],[17,35,55],[14,27,50],[13,19,40],[14,11,35]].map(([l,d,p])=>`<ellipse cx="${l}" cy="${d}" rx="2.6" ry="5.2" transform="rotate(${p} ${l} ${d})"/>`).join("");return`<svg viewBox="0 0 24 48" xmlns="http://www.w3.org/2000/svg"><path d="M20 47C11 40 7 28 11 4" fill="none" stroke="${a}" stroke-width="1.6" stroke-linecap="round"/><g fill="#d9a63a" stroke="${a}" stroke-width=".9">${t}</g></svg>`})(),m='<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg"><path d="M0 56V40c8-3 14-3 18-1V24c0-11 8-18 17-18 10 0 17 7 17 18v18c12-1 34 2 68 14Z"/><path d="M27 44V27c0-5 4-9 8-9s8 4 8 9v17Z" fill="#fff4d6" opacity=".55"/><path d="M60 41c1-6 3-9 6-9 2 0 4 3 4 8M8 37c0-4 2-6 4-6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',w='<svg viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg"><path d="M0 56c24-10 50-14 72-13V30h-8v-7h8v-9h8v9h8v7h-8v13c16 0 28 3 40 7v6Z"/><path d="M66 46h22v-3H66Z"/><path d="M30 50l3-9 2 8 3-11 2 11 3-7 1 8M100 46l2-8 2 7 2-9 1 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',$=f(`
&frame{position:relative;border-radius:16px;border:3px solid ${r};box-shadow:0 0 0 2px ${s},0 0 0 4px #b98a3a59,0 16px 40px #000c,inset 0 0 0 2px ${s}}
&frame::before{content:"";position:absolute;inset:4u;border:1.5px solid #e2b85a99;border-radius:11px;pointer-events:none}
&frame.is-dark{color:#f6e7c1;background:radial-gradient(ellipse at 30% 30%,#4a2f20,#2e1c13 55%,#1f130d)}
&frame.is-parch{color:#3b2416;border:7u solid #3a2418;background:radial-gradient(ellipse at 50% 25%,#fbf0d4,#f1dcae 55%,#e3c58a);box-shadow:0 0 0 2px ${r},0 0 0 4px ${s},0 16px 40px #000c,inset 0 0 0 2px ${r},inset 0 0 26u #a8783a40}
&frame.is-parch::before{inset:3u;border-color:#c9963a8c;border-radius:9px}
&crown{position:absolute;left:50%;z-index:3;width:92u;height:26u;margin-left:-46u;pointer-events:none;filter:drop-shadow(0 2px 1px #0008)}
&crown>svg,&star>svg,&laurel>svg,&grave>svg{width:100%;height:100%;display:block;overflow:visible}
&crown.is-top{top:-24u}
&crown.is-bottom{bottom:-24u;transform:scaleY(-1)}
&tab{position:absolute;left:50%;top:0;z-index:2;transform:translate(-50%,-55%);display:flex;align-items:center;max-width:calc(100% - 120u)}
&tab::before,&tab::after{content:"";flex:none;width:8u;height:8u;margin:0 -1px;background:${r};border:1px solid ${a};transform:rotate(45deg);z-index:1}
&tab-in{min-width:0;padding:2px;background:linear-gradient(${i},${r} 45%,${a});clip-path:polygon(14u 0,calc(100% - 14u) 0,100% 50%,calc(100% - 14u) 100%,14u 100%,0 50%);filter:drop-shadow(0 2px 0 #0007)}
&tab-text{display:block;margin:0;padding:4u 26u 5u;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:700 max(15px,19u)/1.15 var(--font-title,Georgia,serif);color:#fff1cf;background:linear-gradient(#4a2e1e,#2e1c13);clip-path:polygon(13u 0,calc(100% - 13u) 0,100% 50%,calc(100% - 13u) 100%,13u 100%,0 50%);text-shadow:0 2px 0 #0009}
&rule{display:flex;align-items:center;gap:6u;width:100%;color:${r}}
&rule::before,&rule::after{content:"";flex:1 1 0;height:1.5px;background:linear-gradient(90deg,#c9963a00,#c9963a 40%)}
&rule::after{transform:scaleX(-1)}
&rule>i{flex:none;width:9u;height:9u;border:1.5px solid ${a};background:${i};transform:rotate(45deg)}
&rule>&star{width:16u;height:16u}
&star{flex:none;display:inline-block;width:14u;height:14u;line-height:0}
&vdiv{flex:none;align-self:stretch;display:flex;flex-direction:column;align-items:center;justify-content:center;width:12u}
&vdiv::before,&vdiv::after{content:"";flex:1 1 0;width:1.5px;background:linear-gradient(#c9963a00,#c9963a 50%)}
&vdiv::after{transform:scaleY(-1)}
&vdiv>i{flex:none;width:8u;height:8u;margin:3u 0;border:1.5px solid ${r};transform:rotate(45deg)}
&laurel{flex:none;display:block;width:16u;height:34u;line-height:0}
&laurel.is-right{transform:scaleX(-1)}
&ribbon{position:relative;display:flex;align-items:center;justify-content:center;gap:6u;min-width:0;white-space:nowrap;margin:0;padding:3u 22u 4u;font:700 max(14px,17u)/1.2 var(--font-title,Georgia,serif);color:#3b2416;background:linear-gradient(${i},#f4cf72 50%,#d9a640);clip-path:polygon(0 0,100% 0,calc(100% - 10u) 50%,100% 100%,0 100%,10u 50%);filter:drop-shadow(0 2px 0 #7a4b1266)}
&ribbon>&star{width:15u;height:15u}
&ribbon>&star path{fill:#3b2416;stroke:none}
&grave{position:absolute;bottom:0;z-index:0;width:110u;height:50u;color:#8a6a3c;fill:#8a6a3c;opacity:.28;pointer-events:none;line-height:0}
&grave.is-left{left:0}
&grave.is-right{right:0}
&close{position:absolute;top:-12u;right:-12u;z-index:4;width:max(44px,46u);height:max(44px,46u);padding:0;display:grid;place-items:center;border-radius:50%;border:2.5px solid ${r};background:radial-gradient(circle at 45% 38%,#fff8e4,#f1dcae 60%,#d8b878);box-shadow:0 0 0 3px ${s},0 0 0 5px #b98a3a99,0 4px 8px #000a;color:#2a1b1d;font:700 max(18px,20u)/1 var(--font-body,system-ui,sans-serif);cursor:pointer;touch-action:none}
&close.is-pressed,&close:active{transform:translateY(2px)}
&close:focus-visible{outline:3px solid ${i};outline-offset:3px}
@container marche-frame (max-height:420px){&crown{width:72u;height:20u;margin-left:-36u}&crown.is-top{top:-17u}&crown.is-bottom{bottom:-17u}&tab-text{padding:3u 22u 4u;font-size:max(14px,16u)}&ribbon{padding:2u 18u 3u;font-size:max(13px,15u)}&laurel{width:13u;height:28u}&close{top:-8u;right:-8u}}
@container marche-frame (max-height:330px){&grave{display:none}}
`);function y(){if(document.getElementById(c))return;const e=document.createElement("style");e.id=c,e.textContent=$,document.head.append(e)}const u=(e="")=>n(x,`marche-orn-star${e?` ${e}`:""}`),_=e=>n(v,`marche-orn-crown is-${e}`);function M(e,t){return o("div","marche-orn-tab",void 0,[o("div","marche-orn-tab-in",void 0,[o("h2","marche-orn-tab-text",void 0,[e])])])}function R(e="diamond",t=""){return o("div",`marche-orn-rule${t?` ${t}`:""}`,{"aria-hidden":"true"},[e==="star"?u():o("i")])}const O=()=>o("div","marche-orn-vdiv",{"aria-hidden":"true"},[o("i")]),G=e=>n(b,`marche-orn-laurel is-${e}`);function S(e,t=""){return o("p",`marche-orn-ribbon${t?` ${t}`:""}`,void 0,[u(),o("span",void 0,void 0,[e])])}const V=()=>[n(m,"marche-orn-grave is-left"),n(w,"marche-orn-grave is-right")];function z(e,t=""){return o("button",`marche-orn-close${t?` ${t}`:""}`,{type:"button","aria-label":e,title:e},["✕"])}export{S as a,_ as b,z as c,M as d,y as e,V as g,G as l,R as r,u as s,O as v};

