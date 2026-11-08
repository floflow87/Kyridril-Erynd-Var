import{e0 as J,d_ as tt,ah as et,dU as E,an as o,dT as _,aj as G,d$ as I,ai as B,ak as at,am as ot,al as X,dV as it,dW as j,ep as rt}from"./index-BFPqg505.js";import"./phaser-DIUF0PZB.js";const nt=["arenas","kills","time","gold","bosses","deaths"],z=t=>Number.isFinite(t)&&t>0?Math.floor(t):0;function N(t,e){return t==="time"?J(z(e)*1e3):tt(z(e))}function st(t){if(!t)return[];const e={arenas:z(t.arenas),kills:z(t.kills),time:Math.floor(z(t.timeMs)/1e3),gold:z(t.gold),bosses:z(t.bosses),deaths:z(t.deaths)};return nt.map(a=>({key:a,value:e[a],text:N(a,e[a]),format:n=>N(a,n)}))}function ct(t,e){if(!(e>0))return 0;if(e>=1)return t;const a=1-Math.pow(1-e,3);return Math.min(t,Math.floor(t*a))}const F=1800,H=[960,1672],K=t=>`assets/marche/victoire/fond-${t}.webp`,P=t=>globalThis.__EMBEDDED_ASSETS__?.[t]??t,lt=.85,dt=.26,ht=2.05,ut=.08,ft=900,pt=2.65,mt=2.9,h="#f2c35a",m="#ffe9a6",k="#9a6417",L="#1a0f0a",gt=(()=>{const t=[[0,0,1,1],[40,0,-1,1],[0,40,1,-1],[40,40,-1,-1]].map(([a,n,s,d])=>`<g transform="translate(${a} ${n}) scale(${s} ${d})"><path d="M5 15c1-6 4-9 10-10" fill="none" stroke="${h}" stroke-width="1.1"/><path d="M8 13c0-3 2-5 5-5" fill="none" stroke="${k}" stroke-width=".9"/><circle cx="8.4" cy="8.4" r="1.4" fill="${m}"/></g>`).join(""),e=`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect x="1" y="1" width="38" height="38" rx="6" fill="none" stroke="${h}" stroke-width="1.6"/><rect x="3.6" y="3.6" width="32.8" height="32.8" rx="3.5" fill="none" stroke="${k}" stroke-width=".9"/>${t}</svg>`;return`url("data:image/svg+xml,${encodeURIComponent(e)}")`})(),xt=t=>t.replace(/(-?\d*\.?\d+)u\b/g,"calc($1*var(--u,1px))").replace(/&(?=[a-z])/g,".marche-victory-").replace(/&(?=[{ .:,])/g,".marche-victory"),p="var(--font-title,Georgia,serif)",V=`background:linear-gradient(180deg,${m} 8%,${h} 48%,#c98a2a 72%,#f4cf72);-webkit-background-clip:text;background-clip:text;color:transparent`,vt=xt(`
&{--u:calc(var(--ui,1) * .84px);flex-direction:column;overflow:hidden;background:#120a18;color:#f3e2bd}
&bg{position:absolute;inset:0;z-index:0;overflow:hidden;background:radial-gradient(ellipse 45% 55% at 86% 14%,#e0894a59,transparent 70%),radial-gradient(ellipse 80% 60% at 30% 100%,#3c1f5299,transparent 70%),linear-gradient(#2c1a44,#1c1028 55%,#0e0814)}
&bg>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:56% 30%;opacity:0;transition:opacity .7s ease}
&bg.is-loaded>img{opacity:1}
&bg::after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 58% 66% at 50% 54%,#140a1ccc 0%,#140a1cad 50%,#140a1c52 82%,#140a1c33),linear-gradient(#0a060e70,#0a060e00 22%,#0a060e00 72%,#0a060ea6)}
&body{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:9u;width:min(100%,940u);max-height:100%;min-height:0}
&head{display:flex;align-items:center;justify-content:center;gap:14u;max-width:100%}
&laurel{flex:none;width:34u;height:64u;line-height:0;filter:drop-shadow(0 2px 1px #000a)}
&laurel>svg{width:100%;height:100%;display:block;overflow:visible}
&laurel.is-right{transform:scaleX(-1)}
&title{margin:0;min-width:0;text-align:center;font:700 46u/1.05 ${p};letter-spacing:.01em;white-space:nowrap;${V};filter:drop-shadow(0 2px 0 #3a1c08) drop-shadow(0 0 1px #3a1c08) drop-shadow(0 0 14u #ffb84a66)}
&sub{margin:0;max-width:100%;text-align:center;font:italic 400 19u/1.25 ${p};color:#f6ead2;text-shadow:0 1px 2px #000,0 0 8u #000a;text-wrap:balance}
&sub .marche-heroic-tag{font-style:normal;margin-left:.4em}
&label{display:flex;align-items:center;gap:10u;width:min(100%,460u);margin-top:2u;font:400 13u/1 ${p};letter-spacing:.42em;text-transform:uppercase;color:${h};white-space:nowrap;text-shadow:0 1px 2px #000}
&label>b{flex:1 1 0;height:1.5px;background:linear-gradient(90deg,${k},${h})}
&label>b:last-of-type{transform:scaleX(-1)}
&label>i{flex:none;width:8u;height:8u;margin:0 -6u;background:${m};border:1px solid ${k};transform:rotate(45deg)}
&label>i.is-small{width:5u;height:5u;margin:0}
&label>span{margin-right:-.42em}
&chapters{display:flex;align-items:flex-start;justify-content:center;width:min(100%,860u);margin:0;padding:0;list-style:none}
&chapter{position:relative;flex:1 1 0;min-width:0;display:flex;flex-direction:column;align-items:center;gap:3u;text-align:center}
&chapter:not(:first-child)::before{content:"";position:absolute;z-index:0;top:calc(var(--medal) / 2 - .75px);left:calc(-50% + var(--medal) / 2 + 6u);right:calc(50% + var(--medal) / 2 + 6u);height:1.5px;background:linear-gradient(90deg,${k},${h} 50%,${k})}
&chapter:not(:first-child)::after{content:"";position:absolute;z-index:0;top:calc(var(--medal) / 2 - 4u);left:-4u;width:8u;height:8u;background:${m};border:1px solid ${k};transform:rotate(45deg)}
&chapters{--medal:52u}
&medal{position:relative;z-index:1;flex:none;display:grid;place-items:center;width:var(--medal);height:var(--medal)}
&medal>svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
&medal>b{position:relative;font:700 calc(var(--medal) * .4)/1 ${p};color:#4a2a0c;text-shadow:0 1px 0 #ffeeb866}
&chapter.is-last &medal>b{color:#fff6ff;text-shadow:0 0 6u #e7b8ff,0 1px 0 #3a0f5a}
&chapter.is-last &medal::before{content:"";position:absolute;inset:-34%;border-radius:50%;background:radial-gradient(circle,#c070ffcc 0,#a04cff66 38%,transparent 68%);z-index:-1}
&name{font:700 18u/1.15 ${p};${V};filter:drop-shadow(0 1px 1px #000)}
&boss{font:400 14u/1.2 ${p};color:#efe2cb;text-shadow:0 1px 2px #000;text-wrap:balance}
&stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12u 22u;width:min(100%,700u)}
&stat{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1u;min-width:0;padding:8u 8u 9u;border:2px solid transparent;border-image:${gt} 12/14u stretch;border-radius:9u;background:radial-gradient(ellipse at 50% 0%,#4a2e1ef0,#2a1810f2 60%,#1d110bf5);box-shadow:0 4u 10u #0009}
&value{font:700 34u/1 ${p};font-variant-numeric:lining-nums tabular-nums;white-space:nowrap;${V};filter:drop-shadow(0 1.5px 0 #2a1408)}
&stat-label{font:400 16u/1.15 ${p};color:#f3e6cf;text-align:center;text-shadow:0 1px 1px #000}
&heroic{position:relative;display:flex;align-items:center;gap:14u;width:min(100%,720u);min-height:76u;padding:6u 26u 6u 16u;border:1.5px solid #cf9bff;border-radius:22u;background:radial-gradient(ellipse 70% 120% at 30% 50%,#4a1d6af2,#2c103ff2 60%,#1e0b2cf2);box-shadow:0 0 0 1px #2a0f3c,0 0 0 3px #a65cff40,inset 0 0 0 3px #1e0b2c,inset 0 0 0 4px #e7b8ff40,0 0 22u #a54cff8c}
&heroic::after{content:"";position:absolute;inset:-6u;border-radius:26u;box-shadow:0 0 26u #b55cffaa;opacity:.5;pointer-events:none}
&gem{position:absolute;left:50%;width:10u;height:10u;margin-left:-5u;background:linear-gradient(135deg,#ffe2ff,#c47cff 55%,#7a2fc0);border:1px solid #f0d0ff;transform:rotate(45deg);box-shadow:0 0 8u #c070ff}
&gem.is-top{top:-6u}
&gem.is-bottom{bottom:-6u}
&pennant{flex:none;width:96u;height:96u;margin:-18u 0 -16u;line-height:0;filter:drop-shadow(0 3u 3u #000a)}
&pennant>svg{width:100%;height:100%;display:block;overflow:visible}
&vdiv{flex:none;align-self:stretch;display:flex;flex-direction:column;align-items:center;justify-content:center;width:8u;margin:4u 0}
&vdiv::before,&vdiv::after{content:"";flex:1 1 0;width:1.5px;background:linear-gradient(#c9963a00,${h})}
&vdiv::after{transform:scaleY(-1)}
&vdiv>i{flex:none;width:7u;height:7u;margin:3u 0;background:${h};transform:rotate(45deg)}
&heroic-text{display:flex;flex-direction:column;gap:3u;min-width:0;text-align:left}
&heroic-title{font:700 27u/1.1 ${p};${V};filter:drop-shadow(0 1.5px 0 #2a0f3c)}
&heroic-sub{font:400 16u/1.3 ${p};color:#f6ead2;text-shadow:0 1px 1px #000;text-wrap:pretty}
&actions{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:18u;width:min(100%,940u);filter:drop-shadow(0 4u 6u #000b)}
&actions>.marche-victory-cta{grid-column:2}
&actions>.marche-victory-carnet{grid-column:3;justify-self:start}
& .marche-button.marche-victory-cta{min-width:320u;min-height:max(44px,62u);padding:0 58u;border:0;border-radius:0;box-shadow:none;background:linear-gradient(${m},#b9822c 50%,#7a4a14);clip-path:polygon(22u 0,calc(100% - 22u) 0,100% 50%,calc(100% - 22u) 100%,22u 100%,0 50%);font:700 34u/1 ${p};color:#3a1e08;text-shadow:0 1px 0 #ffe9a6aa}
& .marche-victory-cta::before{content:"";position:absolute;inset:3px;clip-path:polygon(20u 0,calc(100% - 20u) 0,100% 50%,calc(100% - 20u) 100%,20u 100%,0 50%);background:linear-gradient(#fff0b8,#f6cf6a 38%,#e7a93a 62%,#f2c35a)}
& .marche-victory-cta::after{content:"";position:absolute;inset:7px 14u;clip-path:polygon(14u 0,calc(100% - 14u) 0,100% 50%,calc(100% - 14u) 100%,14u 100%,0 50%);box-shadow:inset 0 0 0 1.5px #9a6417aa;background:linear-gradient(#ffffff40,#ffffff00 50%)}
& .marche-victory-cta .marche-button-label,& .marche-victory-cta .marche-button-arming{z-index:1}
& .marche-victory-cta.is-pressed{transform:translateY(3px)}
&cta-star{position:absolute;z-index:1;top:50%;width:18u;height:18u;margin-top:-9u;line-height:0}
&cta-star>svg{width:100%;height:100%;display:block}
&cta-star.is-left{left:30u}
&cta-star.is-right{right:30u}
& .marche-button.marche-victory-carnet{min-height:max(44px,52u);padding:0 22u 0 16u;gap:14u;border:2px solid #c99a45;border-radius:9u;background:linear-gradient(#3a2418,#24150e);box-shadow:inset 0 0 0 2px ${L},inset 0 0 0 3px #e2b85a40,0 3px 0 ${L};font:400 22u/1 ${p};color:#f6e7c8;text-shadow:0 1px 1px #000}
& .marche-victory-carnet .marche-button-label{gap:12u}
& .marche-victory-carnet.is-pressed{transform:translateY(2px);box-shadow:inset 0 0 0 2px ${L},inset 0 0 0 3px #e2b85a40}
&book{flex:none;width:36u;height:26u;line-height:0}
&book>svg{width:100%;height:100%;display:block}
& .marche-button:focus-visible{outline:3px solid ${m};outline-offset:3px}
@media (prefers-reduced-motion:no-preference){
&title{animation:marche-victory-title .8s cubic-bezier(.2,.9,.3,1.1) .1s both}
&laurel.is-left{animation:marche-victory-laurel-l .7s ease-out .3s both}
&laurel.is-right{animation:marche-victory-laurel-r .7s ease-out .3s both}
&sub{animation:marche-victory-rise .6s ease-out .5s both}
&label{animation:marche-victory-rise .5s ease-out .7s both}
&chapter{animation:marche-victory-rise .45s ease-out both}
&medal{animation:marche-victory-light .55s ease-out both}
&chapter:not(:first-child)::before,&chapter:not(:first-child)::after{animation:marche-victory-fadein .4s ease-out both;animation-delay:inherit}
&stat{animation:marche-victory-pop .45s cubic-bezier(.2,.9,.3,1.3) both}
&heroic{animation:marche-victory-pop .55s cubic-bezier(.2,.9,.3,1.2) ${pt}s both}
&heroic::after{animation:marche-victory-pulse 2.6s ease-in-out infinite}
&chapter.is-last &medal::before{animation:marche-victory-pulse 2.2s ease-in-out infinite}
&actions{animation:marche-victory-rise .5s ease-out ${mt}s both}
}
&.is-skip *{animation-delay:0s!important;animation-duration:.01s!important}
@keyframes marche-victory-title{from{opacity:0;transform:scale(.9);letter-spacing:.08em}to{opacity:1;transform:none}}
@keyframes marche-victory-laurel-l{from{opacity:0;transform:translateX(18u) rotate(-12deg)}to{opacity:1;transform:none}}
@keyframes marche-victory-laurel-r{from{opacity:0;transform:scaleX(-1) translateX(18u) rotate(-12deg)}to{opacity:1;transform:scaleX(-1)}}
@keyframes marche-victory-rise{from{transform:translateY(10u);opacity:0}to{transform:none;opacity:1}}
@keyframes marche-victory-fadein{from{opacity:0}to{opacity:1}}
@keyframes marche-victory-light{0%{filter:grayscale(1) brightness(.4);transform:scale(.85)}55%{filter:brightness(1.6) drop-shadow(0 0 10u #ffd27a);transform:scale(1.12)}100%{filter:none;transform:none}}
@keyframes marche-victory-pop{from{transform:scale(.7);opacity:0}to{transform:none;opacity:1}}
@keyframes marche-victory-pulse{0%,100%{opacity:.45}50%{opacity:1}}
@container marche-frame (max-height:560px){
&body{gap:6u}
&head{gap:10u}
&laurel{width:26u;height:48u}
&title{font-size:36u}
&sub{font-size:15.5u}
&label{font-size:11u}
&chapters{--medal:40u}
&name{font-size:15u}
&boss{font-size:12.5u}
&stats{gap:8u 16u}
&stat{padding:5u 8u 6u}
&value{font-size:27u}
&stat-label{font-size:13.5u}
&heroic{min-height:60u}
&pennant{width:76u;height:76u;margin:-14u 0 -12u}
&heroic-title{font-size:22u}
&heroic-sub{font-size:13.5u}
& .marche-button.marche-victory-cta{min-width:260u;min-height:max(44px,52u);font-size:28u}
& .marche-button.marche-victory-carnet{min-height:max(44px,46u);font-size:18u}
}
@container marche-frame (max-height:420px){
&{--u:calc(var(--ui,1) * 1px)}
&body{gap:max(3px,4u)}
&head{gap:8u}
&laurel{width:18u;height:34u}
&title{font-size:27u}
&sub{font-size:max(11.5px,12u)}
&label{font-size:max(9px,9u);gap:8u;margin-top:3u}
&chapters{--medal:28u}
&chapter{gap:1u}
&chapter:not(:first-child)::after{width:6u;height:6u;left:-3u;top:calc(var(--medal) / 2 - 3u)}
&name{font-size:max(11px,11.5u)}
&boss{font-size:max(10px,10u)}
&stats{gap:5u 12u;width:min(100%,600u)}
&stat{padding:3u 6u 4u;border-image-width:10u}
&value{font-size:21u}
&stat-label{font-size:max(10.5px,11u)}
&heroic{min-height:0;gap:10u;padding:4u 18u 4u 8u;border-radius:16u}
&pennant{width:50u;height:50u;margin:-9u 0 -8u}
&gem{width:7u;height:7u;margin-left:-3.5u}
&gem.is-top{top:-4.5u}
&gem.is-bottom{bottom:-4.5u}
&heroic-text{gap:1u}
&heroic-title{font-size:16u}
&heroic-sub{font-size:max(10.5px,11u)}
&actions{gap:12u}
& .marche-button.marche-victory-cta{min-width:210u;min-height:44px;padding:0 44u;font-size:max(19px,21u)}
&cta-star{width:12u;height:12u;margin-top:-6u}
&cta-star.is-left{left:22u}
&cta-star.is-right{right:22u}
& .marche-button.marche-victory-carnet{min-height:44px;padding:0 14u 0 10u;font-size:max(14px,15u)}
&book{width:26u;height:19u}
}
@container marche-frame (max-height:380px){
&title{font-size:24u}
&laurel{width:16u;height:30u}
&chapters{--medal:25u}
&value{font-size:19u}
&stat{padding:2u 6u 3u}
&pennant{width:44u;height:44u}
}
@container marche-frame (max-width:640px){
&actions{display:flex;justify-content:center;flex-wrap:wrap}
&title{white-space:normal;text-wrap:balance}
}
`);function bt(){if(document.getElementById("marche-victory-css"))return;const t=document.createElement("style");t.id="marche-victory-css",t.textContent=vt,document.head.append(t)}it({campaignVictory(t){[523.25,659.25,783.99,1046.5].forEach((a,n)=>{j(t,{type:"sawtooth",f0:a,dur:.22,gain:.07,attack:.01,at:n*.14}),j(t,{type:"triangle",f0:a,dur:.3,gain:.12,attack:.01,at:n*.14})});for(const a of[523.25,659.25,783.99,1046.5])j(t,{type:"triangle",f0:a,dur:1.4,gain:.08,attack:.05,at:.6});return j(t,{f0:130.81,dur:1.6,gain:.25,attack:.04,at:.56}),rt(t,{type:"highpass",f0:5e3,dur:1.2,gain:.05,attack:.3,at:.56}),2.1}});const l=t=>t.toFixed(1),q=(()=>{const t=[31,78],e=[2,50],a=[17,3],n=r=>{const x=(1-r)**2*t[0]+2*(1-r)*r*e[0]+r*r*a[0],v=(1-r)**2*t[1]+2*(1-r)*r*e[1]+r*r*a[1],c=2*(1-r)*(e[0]-t[0])+2*r*(a[0]-e[0]),f=2*(1-r)*(e[1]-t[1])+2*r*(a[1]-e[1]);return[x,v,Math.atan2(f,c)*180/Math.PI]},s=(r,x,v,c)=>`<path transform="translate(${l(r)} ${l(x)}) rotate(${l(v)})" d="M0 0C${l(c*.3)} ${l(-c*.28)} ${l(c*.75)} ${l(-c*.26)} ${l(c)} 0C${l(c*.75)} ${l(c*.26)} ${l(c*.3)} ${l(c*.28)} 0 0Z"/>`,d=[];for(let r=0;r<7;r++){const x=.1+r*.13,[v,c,f]=n(x),C=15-r*.9;d.push(s(v,c,f-48,C),s(v,c,f+44,C*.86))}const[w,u,g]=n(1);return d.push(s(w,u,g,11)),`<defs><linearGradient id="mv-laurel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${m}"/><stop offset=".5" stop-color="${h}"/><stop offset="1" stop-color="#b07a26"/></linearGradient></defs><path d="M${t.join(" ")}Q${e.join(" ")} ${a.join(" ")}" fill="none" stroke="${k}" stroke-width="2" stroke-linecap="round"/><g fill="url(#mv-laurel)" stroke="#6e4610" stroke-width=".7">${d.join("")}</g><circle cx="21" cy="57" r="2" fill="${m}" stroke="#6e4610" stroke-width=".6"/><circle cx="12" cy="33" r="1.7" fill="${m}" stroke="#6e4610" stroke-width=".6"/>`})(),U=`<svg viewBox="0 0 40 80" xmlns="http://www.w3.org/2000/svg">${q}</svg>`;function Y(t,e,a,n,s,d,w,u,g){let r="";for(let x=0;x<w;x++){const v=s+(d-s)*x/Math.max(1,w-1),c=v*Math.PI/180,f=l(t+Math.cos(c)*a),C=l(e+Math.sin(c)*n),D=d>s?-18:18;r+=`<ellipse cx="${f}" cy="${C}" rx="${u}" ry="${g}" transform="rotate(${l(v+D)} ${f} ${C})"/>`}return r}function yt(t,e){const a=`mv-m${e}`,n=Array.from({length:16},(w,u)=>{const g=u*Math.PI/8;return`<circle cx="${l(30+Math.cos(g)*25.5)}" cy="${l(30+Math.sin(g)*25.5)}" r=".9"/>`}).join(""),s=t?`<radialGradient id="${a}d" cx=".42" cy=".36"><stop offset="0" stop-color="#f3d8ff"/><stop offset=".45" stop-color="#b45cf0"/><stop offset="1" stop-color="#4c1a7a"/></radialGradient>`:`<radialGradient id="${a}d" cx=".42" cy=".36"><stop offset="0" stop-color="#fff2c0"/><stop offset=".5" stop-color="#f2b843"/><stop offset="1" stop-color="#b06a14"/></radialGradient>`,d=t?`<g fill="${h}" stroke="#6e4610" stroke-width=".5">${Y(30,30,33,33,100,232,7,2.2,5)}${Y(30,30,33,33,80,-52,7,2.2,5)}</g>`:"";return`<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${a}r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${m}"/><stop offset=".5" stop-color="${h}"/><stop offset="1" stop-color="#8a5612"/></linearGradient>${s}</defs>${d}<circle cx="30" cy="30" r="28.5" fill="${L}"/><circle cx="30" cy="30" r="27" fill="url(#${a}r)"/><g fill="#7a4a10">${n}</g><circle cx="30" cy="30" r="22.5" fill="${t?"#3a1458":"#6e4210"}"/><circle cx="30" cy="30" r="21" fill="url(#${a}d)"/><circle cx="30" cy="30" r="17.5" fill="none" stroke="${t?"#f0c8ff":"#fff0c0"}" stroke-opacity=".55" stroke-width=".9"/></svg>`}const wt=(()=>{const t=`<svg x="4" y="34" width="34" height="68" viewBox="0 0 40 80">${q}</svg>`;return`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mvp-gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${m}"/><stop offset=".55" stop-color="${h}"/><stop offset="1" stop-color="#a06818"/></linearGradient><linearGradient id="mvp-cloth" x1="0" x2="1"><stop offset="0" stop-color="#3c1260"/><stop offset=".5" stop-color="#7a34b0"/><stop offset="1" stop-color="#3c1260"/></linearGradient></defs>${t}<g transform="translate(120 0) scale(-1 1)">${t}</g><path d="M36 16H84V96L60 114L36 96Z" fill="url(#mvp-cloth)" stroke="${L}" stroke-width="2.5" stroke-linejoin="round"/><path d="M40.5 19H79.5V93.5L60 108.5L40.5 93.5Z" fill="none" stroke="${h}" stroke-width="2" stroke-linejoin="round"/><g fill="url(#mvp-gold)" stroke="#5a3608" stroke-width="1.2" stroke-linejoin="round"><path d="M60 34c-3-3-8-4-12-2 4 1 6 3 7 6Z"/><path d="M45 62c0-12 6-20 15-20s15 8 15 20v14l-6 5v-11h-4v12h-10v-12h-4v11l-6-5Z"/></g><path d="M52 58h16M60 58v12" stroke="#2a1008" stroke-width="3" stroke-linecap="round"/><path d="M60 42c4-6 10-9 16-8-3 3-5 6-6 10" fill="#d23a3a" stroke="#5a1010" stroke-width="1"/><rect x="26" y="11" width="68" height="6" rx="3" fill="url(#mvp-gold)" stroke="${L}" stroke-width="1.8"/><circle cx="26" cy="14" r="4" fill="url(#mvp-gold)" stroke="${L}" stroke-width="1.5"/><circle cx="94" cy="14" r="4" fill="url(#mvp-gold)" stroke="${L}" stroke-width="1.5"/><path d="M60 1L65 7L60 13L55 7Z" fill="${m}" stroke="${k}" stroke-width="1.2"/></svg>`})(),Z='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5 14 10 22.5 12 14 14 12 22.5 10 14 1.5 12 10 10Z" fill="#6e3f0c" stroke="#fff0b8" stroke-width=".8" stroke-linejoin="round"/></svg>',$t=`<svg viewBox="0 0 48 34" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${h}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M24 7C18 3 10 3 3 5v24c7-2 15-2 21 2 6-4 14-4 21-2V5c-7-2-15-2-21 2Z"/><path d="M24 7v24"/><path d="M8 11c4-1 8-1 12 1M8 16c4-1 8-1 12 1M8 21c4-1 8-1 12 1M28 12c4-2 8-2 12-1M28 17c4-2 8-2 12-1M28 22c4-2 8-2 12-1" stroke-width="1.3" stroke-opacity=".8"/></svg>`;function kt(){const t=o("div","marche-victory-bg",{"aria-hidden":"true"}),e=document.createElement("img");return e.alt="",e.draggable=!1,e.decoding="async",e.addEventListener("load",()=>X(t,"is-loaded",!0),{once:!0}),e.addEventListener("error",()=>e.remove(),{once:!0}),e.sizes="100vw",e.srcset=H.map(a=>`${P(K(a))} ${a}w`).join(", "),e.src=P(K(H[0])),t.append(e),t}const Mt=()=>typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Ct(t,e){return bt(),new Promise(a=>{const n=et(t.host,{id:E.campaignVictory,className:"marche-victory",screen:"result",lockMs:F,restoreScreen:!1}),s=(i,y)=>G(`marche:victory.${i}`,y),d=e.journey;let w=!1,u=0;const g=i=>{w||(w=!0,u&&cancelAnimationFrame(u),n.close(),a(i))},r=o("div","marche-victory-head",void 0,[_(U,"marche-victory-laurel is-left"),o("h2","marche-victory-title",{id:`${E.campaignVictory}-title`},[s("title")]),_(U,"marche-victory-laurel is-right")]),x=o("p","marche-victory-sub",void 0,[e.heroicLevel>0?s("subHeroic"):s("sub"),e.heroicLevel>0?o("span","marche-heroic-tag",void 0,[G("marche:result.heroic",{level:I(e.heroicLevel)})]):null]),v=o("ol","marche-victory-chapters",void 0,(d?.chapters??[]).map((i,y,$)=>{const M=y===$.length-1,b=o("span","marche-victory-medal",{"aria-hidden":"true"},[o("b",void 0,void 0,[I(i.id)])]);b.insertAdjacentHTML("afterbegin",yt(M,y));const A=o("li",`marche-victory-chapter${M?" is-last":""}`,void 0,[b,o("span","marche-victory-name",void 0,[G(i.nameKey)]),o("span","marche-victory-boss",void 0,[G(i.bossNameKey)])]),R=`${(lt+y*dt).toFixed(2)}s`;return A.style.animationDelay=R,b.style.animationDelay=R,A})),c=st(d),f=[],C=c.length?o("div","marche-victory-stats",void 0,c.map((i,y)=>{const $=o("span","marche-victory-value",{"data-value":i.text},[i.text]),M=o("div",`marche-victory-stat is-${i.key}`,void 0,[$,o("span","marche-victory-stat-label",void 0,[s(`stat.${i.key}`)])]),b=ht+y*ut;return M.style.animationDelay=`${b.toFixed(2)}s`,f.push({el:$,to:i.value,at:b*1e3,format:i.format}),M})):null,D=e.unlockedHeroicLevel===1?s("heroicOpen"):e.unlockedHeroicLevel>1?s("heroicNext",{level:I(e.unlockedHeroicLevel)}):d?.topStep?s("heroicTop"):null,W=D?o("div","marche-victory-heroic",void 0,[o("i","marche-victory-gem is-top",{"aria-hidden":"true"}),_(wt,"marche-victory-pennant"),o("span","marche-victory-vdiv",{"aria-hidden":"true"},[o("i")]),o("div","marche-victory-heroic-text",void 0,[o("span","marche-victory-heroic-title",void 0,[D]),o("span","marche-victory-heroic-sub",void 0,[s(e.unlockedHeroicLevel>0?"heroicSub":"heroicTopSub")])]),o("i","marche-victory-gem is-bottom",{"aria-hidden":"true"})]):null,S=B(G("marche:result.toCamp"),"primary",E.toCamp);S.classList.add("marche-victory-cta"),S.append(_(Z,"marche-victory-cta-star is-left"),_(Z,"marche-victory-cta-star is-right"));const T=B(s("toCarnet"),"secondary",E.victoryCarnet);T.classList.add("marche-victory-carnet"),T.firstElementChild?.prepend(_($t,"marche-victory-book"));for(const i of[S,T])at(i,F);n.press(S,()=>g("camp")),n.press(T,()=>g("carnet")),n.el.setAttribute("aria-labelledby",`${E.campaignVictory}-title`),n.el.append(kt(),o("div","marche-victory-body",void 0,[r,x,o("div","marche-victory-label",{role:"heading","aria-level":"3"},[o("i"),o("b"),o("i","is-small"),o("span",void 0,void 0,[s("journey")]),o("i","is-small"),o("b"),o("i")]),v,C,W,o("div","marche-victory-actions",void 0,[S,T])]));const Q=()=>{u&&cancelAnimationFrame(u),u=0;for(const i of f)i.el.textContent=i.format(i.to)};if(f.length&&!Mt()&&typeof requestAnimationFrame=="function"){const i=performance.now();for(const $ of f)$.el.textContent=$.format(0);const y=$=>{let M=!1;for(const b of f){const A=($-i-b.at)/ft;b.el.textContent=b.format(ct(b.to,A)),A<1&&(M=!0)}u=M&&!w?requestAnimationFrame(y):0};u=requestAnimationFrame(y)}const O=()=>{X(n.el,"is-skip",!0),Q()};n.el.addEventListener("pointerdown",O),n.onKey(i=>(O(),n.isLocked()||(ot.confirm.includes(i.code)||i.code==="Digit1"?(t.sfx?.play("uiClick"),g("camp")):(i.code==="KeyC"||i.code==="Digit2")&&(t.sfx?.play("uiClick"),g("carnet"))),!0)),t.sfx?.play("campaignVictory")})}export{H as VICTORY_BG_WIDTHS,F as VICTORY_LOCK_MS,Ct as showCampaignVictory,K as victoryBgPath};

