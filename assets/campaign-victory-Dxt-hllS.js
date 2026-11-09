import{e2 as et,e0 as at,ah as ot,dX as T,an as a,dW as z,es as B,aj as G,e1 as H,et as it,ai as N,ak as rt,am as nt,al as Q,dU as st,dY as j,eu as ct}from"./index-DIEDMZum.js";import{S as lt}from"./shield-badges-DAWNEArX.js";import"./phaser-DIUF0PZB.js";import"./shield-keys-anZuuT0n.js";const dt=["arenas","kills","time","gold","bosses","deaths"],L=t=>Number.isFinite(t)&&t>0?Math.floor(t):0;function F(t,e){return t==="time"?et(L(e)*1e3):at(L(e))}function ht(t){if(!t)return[];const e={arenas:L(t.arenas),kills:L(t.kills),time:Math.floor(L(t.timeMs)/1e3),gold:L(t.gold),bosses:L(t.bosses),deaths:L(t.deaths)};return dt.map(o=>({key:o,value:e[o],text:F(o,e[o]),format:s=>F(o,s)}))}function ft(t,e){if(!(e>0))return 0;if(e>=1)return t;const o=1-Math.pow(1-e,3);return Math.min(t,Math.floor(t*o))}const Z=1800,Y=[960,1672],K=t=>`assets/marche/victoire/fond-${t}.webp`,P=t=>globalThis.__EMBEDDED_ASSETS__?.[t]??t,ut=.85,pt=.26,mt=2.05,gt=.08,xt=900,vt=2.65,wt=2.9,f="#f2c35a",m="#ffe9a6",$="#9a6417",S="#1a0f0a",bt=(()=>{const t=[[0,0,1,1],[40,0,-1,1],[0,40,1,-1],[40,40,-1,-1]].map(([o,s,n,d])=>`<g transform="translate(${o} ${s}) scale(${n} ${d})"><path d="M5 15c1-6 4-9 10-10" fill="none" stroke="${f}" stroke-width="1.1"/><path d="M8 13c0-3 2-5 5-5" fill="none" stroke="${$}" stroke-width=".9"/><circle cx="8.4" cy="8.4" r="1.4" fill="${m}"/></g>`).join(""),e=`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect x="1" y="1" width="38" height="38" rx="6" fill="none" stroke="${f}" stroke-width="1.6"/><rect x="3.6" y="3.6" width="32.8" height="32.8" rx="3.5" fill="none" stroke="${$}" stroke-width=".9"/>${t}</svg>`;return`url("data:image/svg+xml,${encodeURIComponent(e)}")`})(),yt=t=>t.replace(/(-?\d*\.?\d+)u\b/g,"calc($1*var(--u,1px))").replace(/&(?=[a-z])/g,".marche-victory-").replace(/&(?=[{ .:,])/g,".marche-victory"),h="var(--font-title,Georgia,serif)",D=`background:linear-gradient(180deg,${m} 8%,${f} 48%,#c98a2a 72%,#f4cf72);-webkit-background-clip:text;background-clip:text;color:transparent`,kt=yt(`
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
&title{margin:0;min-width:0;text-align:center;font:700 46u/1.05 ${h};letter-spacing:.01em;white-space:nowrap;${D};filter:drop-shadow(0 2px 0 #3a1c08) drop-shadow(0 0 1px #3a1c08) drop-shadow(0 0 14u #ffb84a66)}
&sub{margin:0;max-width:100%;text-align:center;font:italic 400 19u/1.25 ${h};color:#f6ead2;text-shadow:0 1px 2px #000,0 0 8u #000a;text-wrap:balance}
&sub .marche-heroic-tag{font-style:normal;margin-left:.4em}
&label{display:flex;align-items:center;gap:10u;width:min(100%,460u);margin-top:2u;font:400 13u/1 ${h};letter-spacing:.42em;text-transform:uppercase;color:${f};white-space:nowrap;text-shadow:0 1px 2px #000}
&label>b{flex:1 1 0;height:1.5px;background:linear-gradient(90deg,${$},${f})}
&label>b:last-of-type{transform:scaleX(-1)}
&label>i{flex:none;width:8u;height:8u;margin:0 -6u;background:${m};border:1px solid ${$};transform:rotate(45deg)}
&label>i.is-small{width:5u;height:5u;margin:0}
&label>span{margin-right:-.42em}
&chapters{display:flex;align-items:flex-start;justify-content:center;width:min(100%,860u);margin:0;padding:0;list-style:none}
&chapter{position:relative;flex:1 1 0;min-width:0;display:flex;flex-direction:column;align-items:center;gap:3u;text-align:center}
&chapter:not(:first-child)::before{content:"";position:absolute;z-index:0;top:calc(var(--medal) / 2 - .75px);left:calc(-50% + var(--medal) / 2 + 6u);right:calc(50% + var(--medal) / 2 + 6u);height:1.5px;background:linear-gradient(90deg,${$},${f} 50%,${$})}
&chapter:not(:first-child)::after{content:"";position:absolute;z-index:0;top:calc(var(--medal) / 2 - 4u);left:-4u;width:8u;height:8u;background:${m};border:1px solid ${$};transform:rotate(45deg)}
&chapters{--medal:52u}
&medal{position:relative;z-index:1;flex:none;display:grid;place-items:center;width:var(--medal);height:var(--medal)}
&medal>svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
&medal>b{position:relative;font:700 calc(var(--medal) * .4)/1 ${h};color:#4a2a0c;text-shadow:0 1px 0 #ffeeb866}
&chapter.is-last &medal>b{color:#fff6ff;text-shadow:0 0 6u #e7b8ff,0 1px 0 #3a0f5a}
&chapter.is-last &medal::before{content:"";position:absolute;inset:-34%;border-radius:50%;background:radial-gradient(circle,#c070ffcc 0,#a04cff66 38%,transparent 68%);z-index:-1}
&name{font:700 18u/1.15 ${h};${D};filter:drop-shadow(0 1px 1px #000)}
&boss{font:400 14u/1.2 ${h};color:#efe2cb;text-shadow:0 1px 2px #000;text-wrap:balance}
&stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12u 22u;width:min(100%,700u)}
&stat{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1u;min-width:0;padding:8u 8u 9u;border:2px solid transparent;border-image:${bt} 12/14u stretch;border-radius:9u;background:radial-gradient(ellipse at 50% 0%,#4a2e1ef0,#2a1810f2 60%,#1d110bf5);box-shadow:0 4u 10u #0009}
&value{font:700 34u/1 ${h};font-variant-numeric:lining-nums tabular-nums;white-space:nowrap;${D};filter:drop-shadow(0 1.5px 0 #2a1408)}
&stat-label{font:400 16u/1.15 ${h};color:#f3e6cf;text-align:center;text-shadow:0 1px 1px #000}
&heroic{position:relative;display:flex;align-items:center;gap:14u;width:min(100%,720u);min-height:76u;padding:6u 26u 6u 16u;border:1.5px solid #cf9bff;border-radius:22u;background:radial-gradient(ellipse 70% 120% at 30% 50%,#4a1d6af2,#2c103ff2 60%,#1e0b2cf2);box-shadow:0 0 0 1px #2a0f3c,0 0 0 3px #a65cff40,inset 0 0 0 3px #1e0b2c,inset 0 0 0 4px #e7b8ff40,0 0 22u #a54cff8c}
&heroic::after{content:"";position:absolute;inset:-6u;border-radius:26u;box-shadow:0 0 26u #b55cffaa;opacity:.5;pointer-events:none}
&heroic[data-tier]{border-color:var(--tier-edge);box-shadow:0 0 0 1px #2a0f3c,0 0 0 3px var(--tier-glow),inset 0 0 0 3px #1e0b2c,inset 0 0 0 4px #e7b8ff40,0 0 22u var(--tier-glow)}
&heroic[data-tier]::after{box-shadow:0 0 26u var(--tier-edge)}
&gem{position:absolute;left:50%;width:10u;height:10u;margin-left:-5u;background:linear-gradient(135deg,#ffe2ff,#c47cff 55%,#7a2fc0);border:1px solid #f0d0ff;transform:rotate(45deg);box-shadow:0 0 8u #c070ff}
&gem.is-top{top:-6u}
&gem.is-bottom{bottom:-6u}
&pennant{flex:none;width:96u;height:96u;margin:-18u 0 -16u;line-height:0;filter:drop-shadow(0 3u 3u #000a)}
&pennant>svg{width:100%;height:100%;display:block;overflow:visible}
&vdiv{flex:none;align-self:stretch;display:flex;flex-direction:column;align-items:center;justify-content:center;width:8u;margin:4u 0}
&vdiv::before,&vdiv::after{content:"";flex:1 1 0;width:1.5px;background:linear-gradient(#c9963a00,${f})}
&vdiv::after{transform:scaleY(-1)}
&vdiv>i{flex:none;width:7u;height:7u;margin:3u 0;background:${f};transform:rotate(45deg)}
&heroic-text{display:flex;flex-direction:column;gap:3u;min-width:0;text-align:left}
&heroic-title{font:700 27u/1.1 ${h};${D};filter:drop-shadow(0 1.5px 0 #2a0f3c)}
&heroic-sub{font:400 16u/1.3 ${h};color:#f6ead2;text-shadow:0 1px 1px #000;text-wrap:pretty}
&heroic.has-reward{width:min(100%,860u)}
&heroic.has-reward &heroic-text{flex:1 1 0}
&reward{flex:none;display:flex;align-items:center;gap:8u;align-self:stretch}
&reward-ico{flex:none;width:46u;height:46u;line-height:0;filter:drop-shadow(0 2u 3u #000a)}
&reward-ico>svg{width:100%;height:100%;display:block;overflow:visible}
&reward-ico.is-sword{width:40u;margin-left:-6u}
&reward-text{display:flex;flex-direction:column;gap:1u;text-align:left}
&reward-new{font:700 12u/1.1 ${h};letter-spacing:.18em;text-transform:uppercase;color:#e7b8ff;text-shadow:0 0 6u #a54cff}
&reward-name{font:700 17u/1.15 ${h};${D};white-space:nowrap;filter:drop-shadow(0 1px 0 #2a0f3c)}
&actions{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:18u;width:min(100%,940u);filter:drop-shadow(0 4u 6u #000b)}
&actions>.marche-victory-cta{grid-column:2}
&actions>.marche-victory-carnet{grid-column:3;justify-self:start}
& .marche-button.marche-victory-cta{min-width:320u;min-height:max(44px,62u);padding:0 58u;border:0;border-radius:0;box-shadow:none;background:linear-gradient(${m},#b9822c 50%,#7a4a14);clip-path:polygon(22u 0,calc(100% - 22u) 0,100% 50%,calc(100% - 22u) 100%,22u 100%,0 50%);font:700 34u/1 ${h};color:#3a1e08;text-shadow:0 1px 0 #ffe9a6aa}
& .marche-victory-cta::before{content:"";position:absolute;inset:3px;clip-path:polygon(20u 0,calc(100% - 20u) 0,100% 50%,calc(100% - 20u) 100%,20u 100%,0 50%);background:linear-gradient(#fff0b8,#f6cf6a 38%,#e7a93a 62%,#f2c35a)}
& .marche-victory-cta::after{content:"";position:absolute;inset:7px 14u;clip-path:polygon(14u 0,calc(100% - 14u) 0,100% 50%,calc(100% - 14u) 100%,14u 100%,0 50%);box-shadow:inset 0 0 0 1.5px #9a6417aa;background:linear-gradient(#ffffff40,#ffffff00 50%)}
& .marche-victory-cta .marche-button-label,& .marche-victory-cta .marche-button-arming{z-index:1}
& .marche-victory-cta.is-pressed{transform:translateY(3px)}
&cta-star{position:absolute;z-index:1;top:50%;width:18u;height:18u;margin-top:-9u;line-height:0}
&cta-star>svg{width:100%;height:100%;display:block}
&cta-star.is-left{left:30u}
&cta-star.is-right{right:30u}
& .marche-button.marche-victory-carnet{min-height:max(44px,52u);padding:0 22u 0 16u;gap:14u;border:2px solid #c99a45;border-radius:9u;background:linear-gradient(#3a2418,#24150e);box-shadow:inset 0 0 0 2px ${S},inset 0 0 0 3px #e2b85a40,0 3px 0 ${S};font:400 22u/1 ${h};color:#f6e7c8;text-shadow:0 1px 1px #000}
& .marche-victory-carnet .marche-button-label{gap:12u}
& .marche-victory-carnet.is-pressed{transform:translateY(2px);box-shadow:inset 0 0 0 2px ${S},inset 0 0 0 3px #e2b85a40}
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
&heroic{animation:marche-victory-pop .55s cubic-bezier(.2,.9,.3,1.2) ${vt}s both}
&heroic::after{animation:marche-victory-pulse 2.6s ease-in-out infinite}
&chapter.is-last &medal::before{animation:marche-victory-pulse 2.2s ease-in-out infinite}
&actions{animation:marche-victory-rise .5s ease-out ${wt}s both}
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
&reward-ico{width:38u;height:38u}
&reward-ico.is-sword{width:33u}
&reward-name{font-size:15u}
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
&reward{gap:5u}
&reward-ico{width:28u;height:28u}
&reward-ico.is-sword{width:24u;margin-left:-4u}
&reward-new{font-size:max(8.5px,9u)}
&reward-name{font-size:max(11px,12u)}
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
`);function $t(){if(document.getElementById("marche-victory-css"))return;const t=document.createElement("style");t.id="marche-victory-css",t.textContent=kt,document.head.append(t)}st({campaignVictory(t){[523.25,659.25,783.99,1046.5].forEach((o,s)=>{j(t,{type:"sawtooth",f0:o,dur:.22,gain:.07,attack:.01,at:s*.14}),j(t,{type:"triangle",f0:o,dur:.3,gain:.12,attack:.01,at:s*.14})});for(const o of[523.25,659.25,783.99,1046.5])j(t,{type:"triangle",f0:o,dur:1.4,gain:.08,attack:.05,at:.6});return j(t,{f0:130.81,dur:1.6,gain:.25,attack:.04,at:.56}),ct(t,{type:"highpass",f0:5e3,dur:1.2,gain:.05,attack:.3,at:.56}),2.1}});const l=t=>t.toFixed(1),W=(()=>{const t=[31,78],e=[2,50],o=[17,3],s=r=>{const x=(1-r)**2*t[0]+2*(1-r)*r*e[0]+r*r*o[0],v=(1-r)**2*t[1]+2*(1-r)*r*e[1]+r*r*o[1],c=2*(1-r)*(e[0]-t[0])+2*r*(o[0]-e[0]),p=2*(1-r)*(e[1]-t[1])+2*r*(o[1]-e[1]);return[x,v,Math.atan2(p,c)*180/Math.PI]},n=(r,x,v,c)=>`<path transform="translate(${l(r)} ${l(x)}) rotate(${l(v)})" d="M0 0C${l(c*.3)} ${l(-c*.28)} ${l(c*.75)} ${l(-c*.26)} ${l(c)} 0C${l(c*.75)} ${l(c*.26)} ${l(c*.3)} ${l(c*.28)} 0 0Z"/>`,d=[];for(let r=0;r<7;r++){const x=.1+r*.13,[v,c,p]=s(x),_=15-r*.9;d.push(n(v,c,p-48,_),n(v,c,p+44,_*.86))}const[y,u,g]=s(1);return d.push(n(y,u,g,11)),`<defs><linearGradient id="mv-laurel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${m}"/><stop offset=".5" stop-color="${f}"/><stop offset="1" stop-color="#b07a26"/></linearGradient></defs><path d="M${t.join(" ")}Q${e.join(" ")} ${o.join(" ")}" fill="none" stroke="${$}" stroke-width="2" stroke-linecap="round"/><g fill="url(#mv-laurel)" stroke="#6e4610" stroke-width=".7">${d.join("")}</g><circle cx="21" cy="57" r="2" fill="${m}" stroke="#6e4610" stroke-width=".6"/><circle cx="12" cy="33" r="1.7" fill="${m}" stroke="#6e4610" stroke-width=".6"/>`})(),U=`<svg viewBox="0 0 40 80" xmlns="http://www.w3.org/2000/svg">${W}</svg>`;function X(t,e,o,s,n,d,y,u,g){let r="";for(let x=0;x<y;x++){const v=n+(d-n)*x/Math.max(1,y-1),c=v*Math.PI/180,p=l(t+Math.cos(c)*o),_=l(e+Math.sin(c)*s),V=d>n?-18:18;r+=`<ellipse cx="${p}" cy="${_}" rx="${u}" ry="${g}" transform="rotate(${l(v+V)} ${p} ${_})"/>`}return r}function Mt(t,e){const o=`mv-m${e}`,s=Array.from({length:16},(y,u)=>{const g=u*Math.PI/8;return`<circle cx="${l(30+Math.cos(g)*25.5)}" cy="${l(30+Math.sin(g)*25.5)}" r=".9"/>`}).join(""),n=t?`<radialGradient id="${o}d" cx=".42" cy=".36"><stop offset="0" stop-color="#f3d8ff"/><stop offset=".45" stop-color="#b45cf0"/><stop offset="1" stop-color="#4c1a7a"/></radialGradient>`:`<radialGradient id="${o}d" cx=".42" cy=".36"><stop offset="0" stop-color="#fff2c0"/><stop offset=".5" stop-color="#f2b843"/><stop offset="1" stop-color="#b06a14"/></radialGradient>`,d=t?`<g fill="${f}" stroke="#6e4610" stroke-width=".5">${X(30,30,33,33,100,232,7,2.2,5)}${X(30,30,33,33,80,-52,7,2.2,5)}</g>`:"";return`<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${o}r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${m}"/><stop offset=".5" stop-color="${f}"/><stop offset="1" stop-color="#8a5612"/></linearGradient>${n}</defs>${d}<circle cx="30" cy="30" r="28.5" fill="${S}"/><circle cx="30" cy="30" r="27" fill="url(#${o}r)"/><g fill="#7a4a10">${s}</g><circle cx="30" cy="30" r="22.5" fill="${t?"#3a1458":"#6e4210"}"/><circle cx="30" cy="30" r="21" fill="url(#${o}d)"/><circle cx="30" cy="30" r="17.5" fill="none" stroke="${t?"#f0c8ff":"#fff0c0"}" stroke-opacity=".55" stroke-width=".9"/></svg>`}const zt=(()=>{const t=`<svg x="4" y="34" width="34" height="68" viewBox="0 0 40 80">${W}</svg>`;return`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mvp-gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${m}"/><stop offset=".55" stop-color="${f}"/><stop offset="1" stop-color="#a06818"/></linearGradient><linearGradient id="mvp-cloth" x1="0" x2="1"><stop offset="0" stop-color="#3c1260"/><stop offset=".5" stop-color="#7a34b0"/><stop offset="1" stop-color="#3c1260"/></linearGradient></defs>${t}<g transform="translate(120 0) scale(-1 1)">${t}</g><path d="M36 16H84V96L60 114L36 96Z" fill="url(#mvp-cloth)" stroke="${S}" stroke-width="2.5" stroke-linejoin="round"/><path d="M40.5 19H79.5V93.5L60 108.5L40.5 93.5Z" fill="none" stroke="${f}" stroke-width="2" stroke-linejoin="round"/><g fill="url(#mvp-gold)" stroke="#5a3608" stroke-width="1.2" stroke-linejoin="round"><path d="M60 34c-3-3-8-4-12-2 4 1 6 3 7 6Z"/><path d="M45 62c0-12 6-20 15-20s15 8 15 20v14l-6 5v-11h-4v12h-10v-12h-4v11l-6-5Z"/></g><path d="M52 58h16M60 58v12" stroke="#2a1008" stroke-width="3" stroke-linecap="round"/><path d="M60 42c4-6 10-9 16-8-3 3-5 6-6 10" fill="#d23a3a" stroke="#5a1010" stroke-width="1"/><rect x="26" y="11" width="68" height="6" rx="3" fill="url(#mvp-gold)" stroke="${S}" stroke-width="1.8"/><circle cx="26" cy="14" r="4" fill="url(#mvp-gold)" stroke="${S}" stroke-width="1.5"/><circle cx="94" cy="14" r="4" fill="url(#mvp-gold)" stroke="${S}" stroke-width="1.5"/><path d="M60 1L65 7L60 13L55 7Z" fill="${m}" stroke="${$}" stroke-width="1.2"/></svg>`})(),q='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5 14 10 22.5 12 14 14 12 22.5 10 14 1.5 12 10 10Z" fill="#6e3f0c" stroke="#fff0b8" stroke-width=".8" stroke-linejoin="round"/></svg>',Lt=`<svg viewBox="0 0 48 34" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${f}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M24 7C18 3 10 3 3 5v24c7-2 15-2 21 2 6-4 14-4 21-2V5c-7-2-15-2-21 2Z"/><path d="M24 7v24"/><path d="M8 11c4-1 8-1 12 1M8 16c4-1 8-1 12 1M8 21c4-1 8-1 12 1M28 12c4-2 8-2 12-1M28 17c4-2 8-2 12-1M28 22c4-2 8-2 12-1" stroke-width="1.3" stroke-opacity=".8"/></svg>`;function St(){const t=a("div","marche-victory-bg",{"aria-hidden":"true"}),e=document.createElement("img");return e.alt="",e.draggable=!1,e.decoding="async",e.addEventListener("load",()=>Q(t,"is-loaded",!0),{once:!0}),e.addEventListener("error",()=>e.remove(),{once:!0}),e.sizes="100vw",e.srcset=Y.map(o=>`${P(K(o))} ${o}w`).join(", "),e.src=P(K(Y[0])),t.append(e),t}const _t=()=>typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ct='<svg viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="vsg"><stop offset="0" stop-color="#b87bff" stop-opacity=".8"/><stop offset="1" stop-color="#9b4dff" stop-opacity="0"/></radialGradient></defs><ellipse cx="22" cy="20" rx="17" ry="20" fill="url(#vsg)"/><g transform="rotate(35 20 24)"><path d="M17 4 20 0 23 4V32H17Z" fill="#2b1f3d" stroke="#2a1b1d" stroke-width="2" stroke-linejoin="round"/><path d="M21.6 4.5V31" stroke="#d7b6ff" stroke-width="1"/><path d="M19 9l2 2-2 2M21 17l-2 2 2 2M19 25l2 2-2 2" fill="none" stroke="#f3e6ff" stroke-width="1.1"/><path d="M11 32.5Q20 30 29 32.5L28 35.5Q20 34 12 35.5Z" fill="#1d1724" stroke="#d9a63e" stroke-width="1.4" stroke-linejoin="round"/><path d="M18 36h4v6h-4z" fill="#231a2c" stroke="#9c6f22" stroke-width="1"/><circle cx="20" cy="44.5" r="2.8" fill="#7a35d6" stroke="#2a1b1d" stroke-width="1.2"/><circle cx="19.2" cy="43.7" r=".8" fill="#fff"/><circle cx="20" cy="34" r="1.4" fill="#b87bff"/></g><path d="M33 8l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8z" fill="#f3e6ff"/><circle cx="7" cy="30" r="1.6" fill="#c89bff"/></svg>';function Dt(t,e){return $t(),new Promise(o=>{const s=ot(t.host,{id:T.campaignVictory,className:"marche-victory",screen:"result",lockMs:Z,restoreScreen:!1}),n=(i,b)=>G(`marche:victory.${i}`,b),d=e.journey;let y=!1,u=0;const g=i=>{y||(y=!0,u&&cancelAnimationFrame(u),s.close(),o(i))},r=a("div","marche-victory-head",void 0,[z(U,"marche-victory-laurel is-left"),a("h2","marche-victory-title",{id:`${T.campaignVictory}-title`},[n("title")]),z(U,"marche-victory-laurel is-right")]),x=a("p","marche-victory-sub",void 0,[e.heroicLevel>0?n("subHeroic"):n("sub"),e.heroicLevel>0?a("span","marche-heroic-tag",{"data-tier":String(B(e.heroicLevel))},[G("marche:result.heroic",{level:H(e.heroicLevel)})]):null]),v=a("ol","marche-victory-chapters",void 0,(d?.chapters??[]).map((i,b,k)=>{const M=b===k.length-1,w=a("span","marche-victory-medal",{"aria-hidden":"true"},[a("b",void 0,void 0,[it(i.id)])]);w.insertAdjacentHTML("afterbegin",Mt(M,b));const E=a("li",`marche-victory-chapter${M?" is-last":""}`,void 0,[w,a("span","marche-victory-name",void 0,[G(i.nameKey)]),a("span","marche-victory-boss",void 0,[G(i.bossNameKey)])]),R=`${(ut+b*pt).toFixed(2)}s`;return E.style.animationDelay=R,w.style.animationDelay=R,E})),c=ht(d),p=[],_=c.length?a("div","marche-victory-stats",void 0,c.map((i,b)=>{const k=a("span","marche-victory-value",{"data-value":i.text},[i.text]),M=a("div",`marche-victory-stat is-${i.key}`,void 0,[k,a("span","marche-victory-stat-label",void 0,[n(`stat.${i.key}`)])]),w=mt+b*gt;return M.style.animationDelay=`${w.toFixed(2)}s`,p.push({el:k,to:i.value,at:w*1e3,format:i.format}),M})):null,V=e.unlockedHeroicLevel===1?n("heroicOpen"):e.unlockedHeroicLevel>1?n("heroicNext",{level:H(e.unlockedHeroicLevel)}):d?.topStep?n("heroicTop"):null,I=e.victoryReward?a("div","marche-victory-reward",{role:"note","aria-label":n("rewardAria")},[a("span","marche-victory-vdiv",{"aria-hidden":"true"},[a("i")]),z(lt.onyx,"marche-victory-reward-ico"),z(Ct,"marche-victory-reward-ico is-sword"),a("div","marche-victory-reward-text",{"aria-hidden":"true"},[a("span","marche-victory-reward-new",void 0,[n("rewardNew")]),a("span","marche-victory-reward-name",void 0,[n("reward")])])]):null,J=V?a("div",`marche-victory-heroic${I?" has-reward":""}`,{"data-tier":String(B(e.unlockedHeroicLevel>0?e.unlockedHeroicLevel:4))},[a("i","marche-victory-gem is-top",{"aria-hidden":"true"}),z(zt,"marche-victory-pennant"),a("span","marche-victory-vdiv",{"aria-hidden":"true"},[a("i")]),a("div","marche-victory-heroic-text",void 0,[a("span","marche-victory-heroic-title",void 0,[V]),a("span","marche-victory-heroic-sub",void 0,[n(e.unlockedHeroicLevel>0?I?"heroicSubShort":"heroicSub":"heroicTopSub")])]),I,a("i","marche-victory-gem is-bottom",{"aria-hidden":"true"})]):null,C=N(G("marche:result.toCamp"),"primary",T.toCamp);C.classList.add("marche-victory-cta"),C.append(z(q,"marche-victory-cta-star is-left"),z(q,"marche-victory-cta-star is-right"));const A=N(n("toCarnet"),"secondary",T.victoryCarnet);A.classList.add("marche-victory-carnet"),A.firstElementChild?.prepend(z(Lt,"marche-victory-book"));for(const i of[C,A])rt(i,Z);s.press(C,()=>g("camp")),s.press(A,()=>g("carnet")),s.el.setAttribute("aria-labelledby",`${T.campaignVictory}-title`),s.el.append(St(),a("div","marche-victory-body",void 0,[r,x,a("div","marche-victory-label",{role:"heading","aria-level":"3"},[a("i"),a("b"),a("i","is-small"),a("span",void 0,void 0,[n("journey")]),a("i","is-small"),a("b"),a("i")]),v,_,J,a("div","marche-victory-actions",void 0,[C,A])]));const tt=()=>{u&&cancelAnimationFrame(u),u=0;for(const i of p)i.el.textContent=i.format(i.to)};if(p.length&&!_t()&&typeof requestAnimationFrame=="function"){const i=performance.now();for(const k of p)k.el.textContent=k.format(0);const b=k=>{let M=!1;for(const w of p){const E=(k-i-w.at)/xt;w.el.textContent=w.format(ft(w.to,E)),E<1&&(M=!0)}u=M&&!y?requestAnimationFrame(b):0};u=requestAnimationFrame(b)}const O=()=>{Q(s.el,"is-skip",!0),tt()};s.el.addEventListener("pointerdown",O),s.onKey(i=>(O(),s.isLocked()||(nt.confirm.includes(i.code)||i.code==="Digit1"?(t.sfx?.play("uiClick"),g("camp")):(i.code==="KeyC"||i.code==="Digit2")&&(t.sfx?.play("uiClick"),g("carnet"))),!0)),t.sfx?.play("campaignVictory")})}export{Y as VICTORY_BG_WIDTHS,Z as VICTORY_LOCK_MS,Dt as showCampaignVictory,K as victoryBgPath};

