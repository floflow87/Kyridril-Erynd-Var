const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./campaign-menus-Cr8pkwlV.js","./index-D-IRUL7v.js","./phaser-DIUF0PZB.js","./shield-defs-gkCTL_Y2.js","./shield-badges-C9FU2R81.js","./shield-keys-sMIOg2a0.js","./shield-pictures-DZtJmdq6.js","./dodge-card-art-Dj4tRfRN.js","./boss-energy-BO07SxpX.js"])))=>i.map(i=>d[i]);
import{eu as ne,dq as ce,ar as se,bI as C,ax as a,eq as k,eU as P,at as M,ds as F,eV as le,as as Z,au as de,aw as he,aZ as fe,av as te,aQ as ue,bk as pe,a0 as R,$ as me}from"./index-D-IRUL7v.js";import{S as j}from"./shield-badges-C9FU2R81.js";import{b as ge}from"./boss-energy-BO07SxpX.js";import{f as ve,I as xe,s as we}from"./vaucendre-grovHKTz.js";import"./phaser-DIUF0PZB.js";import"./shield-keys-sMIOg2a0.js";import"./shield-pictures-DZtJmdq6.js";const ye=["arenas","kills","time","gold","bosses","deaths"],_=e=>Number.isFinite(e)&&e>0?Math.floor(e):0;function Y(e,t){return e==="time"?ne(_(t)*1e3):ce(_(t))}function be(e){if(!e)return[];const t={arenas:_(e.arenas),kills:_(e.kills),time:Math.floor(_(e.timeMs)/1e3),gold:_(e.gold),bosses:_(e.bosses),deaths:_(e.deaths)};return ye.map(r=>({key:r,value:t[r],text:Y(r,t[r]),format:c=>Y(r,c)}))}function ke(e,t){if(!(t>0))return 0;if(t>=1)return e;const r=1-Math.pow(1-t,3);return Math.min(e,Math.floor(e*r))}const D={gear:"marche-victory-reveal-gear",gearOk:"marche-victory-gear-ok",place:"marche-victory-reveal-place",placeOk:"marche-victory-place-ok"},K=1800,U=[960,1672],X=e=>`assets/marche/victoire/fond-${e}.webp`,q=e=>globalThis.__EMBEDDED_ASSETS__?.[e]??e,$e=.85,Me=.26,Se=2.05,ze=.08,_e=900,Le=2.65,Q=2.9,m="#f2c35a",x="#ffe9a6",S="#9a6417",L="#1a0f0a",Ee=(()=>{const e=[[0,0,1,1],[40,0,-1,1],[0,40,1,-1],[40,40,-1,-1]].map(([r,c,o,h])=>`<g transform="translate(${r} ${c}) scale(${o} ${h})"><path d="M5 15c1-6 4-9 10-10" fill="none" stroke="${m}" stroke-width="1.1"/><path d="M8 13c0-3 2-5 5-5" fill="none" stroke="${S}" stroke-width=".9"/><circle cx="8.4" cy="8.4" r="1.4" fill="${x}"/></g>`).join(""),t=`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect x="1" y="1" width="38" height="38" rx="6" fill="none" stroke="${m}" stroke-width="1.6"/><rect x="3.6" y="3.6" width="32.8" height="32.8" rx="3.5" fill="none" stroke="${S}" stroke-width=".9"/>${e}</svg>`;return`url("data:image/svg+xml,${encodeURIComponent(t)}")`})(),Ce=e=>e.replace(/(-?\d*\.?\d+)u\b/g,"calc($1*var(--u,1px))").replace(/&(?=[a-z])/g,".marche-victory-").replace(/&(?=[{ .:,])/g,".marche-victory"),f="var(--font-title,Georgia,serif)",A=`background:linear-gradient(180deg,${x} 8%,${m} 48%,#c98a2a 72%,#f4cf72);-webkit-background-clip:text;background-clip:text;color:transparent`,Ae=Ce(`
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
&title{margin:0;min-width:0;text-align:center;font:700 46u/1.05 ${f};letter-spacing:.01em;white-space:nowrap;${A};filter:drop-shadow(0 2px 0 #3a1c08) drop-shadow(0 0 1px #3a1c08) drop-shadow(0 0 14u #ffb84a66)}
&sub{margin:0;max-width:100%;text-align:center;font:italic 400 19u/1.25 ${f};color:#f6ead2;text-shadow:0 1px 2px #000,0 0 8u #000a;text-wrap:balance}
&sub .marche-heroic-tag{font-style:normal;margin-left:.4em}
&label{display:flex;align-items:center;gap:10u;width:min(100%,460u);margin-top:2u;font:400 13u/1 ${f};letter-spacing:.42em;text-transform:uppercase;color:${m};white-space:nowrap;text-shadow:0 1px 2px #000}
&label>b{flex:1 1 0;height:1.5px;background:linear-gradient(90deg,${S},${m})}
&label>b:last-of-type{transform:scaleX(-1)}
&label>i{flex:none;width:8u;height:8u;margin:0 -6u;background:${x};border:1px solid ${S};transform:rotate(45deg)}
&label>i.is-small{width:5u;height:5u;margin:0}
&label>span{margin-right:-.42em}
&chapters{display:flex;align-items:flex-start;justify-content:center;width:min(100%,860u);margin:0;padding:0;list-style:none}
&chapter{position:relative;flex:1 1 0;min-width:0;display:flex;flex-direction:column;align-items:center;gap:3u;text-align:center}
&chapter:not(:first-child)::before{content:"";position:absolute;z-index:0;top:calc(var(--medal) / 2 - .75px);left:calc(-50% + var(--medal) / 2 + 6u);right:calc(50% + var(--medal) / 2 + 6u);height:1.5px;background:linear-gradient(90deg,${S},${m} 50%,${S})}
&chapter:not(:first-child)::after{content:"";position:absolute;z-index:0;top:calc(var(--medal) / 2 - 4u);left:-4u;width:8u;height:8u;background:${x};border:1px solid ${S};transform:rotate(45deg)}
&chapters{--medal:52u}
&medal{position:relative;z-index:1;flex:none;display:grid;place-items:center;width:var(--medal);height:var(--medal)}
&medal>svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
&medal>b{position:relative;font:700 calc(var(--medal) * .4)/1 ${f};color:#4a2a0c;text-shadow:0 1px 0 #ffeeb866}
&chapter.is-last &medal>b{color:#fff6ff;text-shadow:0 0 6u #e7b8ff,0 1px 0 #3a0f5a}
&chapter.is-last &medal::before{content:"";position:absolute;inset:-34%;border-radius:50%;background:radial-gradient(circle,#c070ffcc 0,#a04cff66 38%,transparent 68%);z-index:-1}
&name{font:700 18u/1.15 ${f};${A};filter:drop-shadow(0 1px 1px #000)}
&boss{font:400 14u/1.2 ${f};color:#efe2cb;text-shadow:0 1px 2px #000;text-wrap:balance}
&stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12u 22u;width:min(100%,700u)}
&stat{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1u;min-width:0;padding:8u 8u 9u;border:2px solid transparent;border-image:${Ee} 12/14u stretch;border-radius:9u;background:radial-gradient(ellipse at 50% 0%,#4a2e1ef0,#2a1810f2 60%,#1d110bf5);box-shadow:0 4u 10u #0009}
&value{font:700 34u/1 ${f};font-variant-numeric:lining-nums tabular-nums;white-space:nowrap;${A};filter:drop-shadow(0 1.5px 0 #2a1408)}
&stat-label{font:400 16u/1.15 ${f};color:#f3e6cf;text-align:center;text-shadow:0 1px 1px #000}
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
&vdiv::before,&vdiv::after{content:"";flex:1 1 0;width:1.5px;background:linear-gradient(#c9963a00,${m})}
&vdiv::after{transform:scaleY(-1)}
&vdiv>i{flex:none;width:7u;height:7u;margin:3u 0;background:${m};transform:rotate(45deg)}
&heroic-text{display:flex;flex-direction:column;gap:3u;min-width:0;text-align:left}
&heroic-title{font:700 27u/1.1 ${f};${A};filter:drop-shadow(0 1.5px 0 #2a0f3c)}
&heroic-sub{font:400 16u/1.3 ${f};color:#f6ead2;text-shadow:0 1px 1px #000;text-wrap:pretty}
&heroic.has-reward{width:min(100%,860u)}
&heroic.has-reward &heroic-text{flex:1 1 0}
&reward{flex:none;display:flex;align-items:center;gap:8u;align-self:stretch}
&reward-ico{flex:none;width:46u;height:46u;line-height:0;filter:drop-shadow(0 2u 3u #000a)}
&reward-ico>svg{width:100%;height:100%;display:block;overflow:visible}
&reward-ico.is-sword{width:40u;margin-left:-6u}
&reward-text{display:flex;flex-direction:column;gap:1u;text-align:left}
&reward-new{font:700 12u/1.1 ${f};letter-spacing:.18em;text-transform:uppercase;color:#e7b8ff;text-shadow:0 0 6u #a54cff}
&reward-name{font:700 17u/1.15 ${f};${A};white-space:nowrap;filter:drop-shadow(0 1px 0 #2a0f3c)}
&actions{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:18u;width:min(100%,940u);filter:drop-shadow(0 4u 6u #000b)}
&actions>.marche-victory-cta{grid-column:2}
&actions>.marche-victory-carnet{grid-column:3;justify-self:start}
&place{grid-column:1;grid-row:1;justify-self:end;display:flex;align-items:center;gap:8u;min-width:0;padding:4u 16u 4u 8u;border:1.5px solid #b67cf0;border-radius:12u;background:linear-gradient(#3a1a52f0,#21102ff0);box-shadow:inset 0 0 0 2px #160a20,0 0 14u #a54cff66}
&place-ico{flex:none;width:32u;height:40u;line-height:0;filter:drop-shadow(0 2u 2u #000a)}
&place-ico>svg{width:100%;height:100%;display:block;overflow:visible}
&place-text{display:flex;flex-direction:column;gap:1u;min-width:0;text-align:left}
&place-new{font:700 11u/1.1 ${f};letter-spacing:.14em;text-transform:uppercase;color:#e7b8ff;text-shadow:0 0 6u #a54cff}
&place-name{font:700 19u/1.1 ${f};${A};white-space:nowrap;filter:drop-shadow(0 1px 0 #2a0f3c)}
& .marche-button.marche-victory-cta{min-width:250u;min-height:max(44px,48u);padding:0 45u;border:0;border-radius:0;box-shadow:none;background:linear-gradient(${x},#b9822c 50%,#7a4a14);clip-path:polygon(22u 0,calc(100% - 22u) 0,100% 50%,calc(100% - 22u) 100%,22u 100%,0 50%);font:700 26.5u/1 ${f};color:#3a1e08;text-shadow:0 1px 0 #ffe9a6aa}
& .marche-victory-cta::before{content:"";position:absolute;inset:3px;border:0;border-radius:0;box-shadow:none;clip-path:polygon(20u 0,calc(100% - 20u) 0,100% 50%,calc(100% - 20u) 100%,20u 100%,0 50%);background:linear-gradient(#fff0b8,#f6cf6a 38%,#e7a93a 62%,#f2c35a)}
& .marche-victory-cta::after{content:"";position:absolute;inset:7px 14u;clip-path:polygon(14u 0,calc(100% - 14u) 0,100% 50%,calc(100% - 14u) 100%,14u 100%,0 50%);box-shadow:inset 0 0 0 1.5px #9a6417aa;background:linear-gradient(#ffffff40,#ffffff00 50%)}
& .marche-victory-cta .marche-button-label,& .marche-victory-cta .marche-button-arming{z-index:1}
& .marche-victory-cta.is-pressed{transform:translateY(3px)}
&cta-star{position:absolute;z-index:1;top:50%;width:14u;height:14u;margin-top:-7u;line-height:0}
&cta-star>svg{width:100%;height:100%;display:block}
&cta-star.is-left{left:23u}
&cta-star.is-right{right:23u}
& .marche-button.marche-victory-carnet{min-height:max(44px,41u);padding:0 17u 0 12u;gap:11u;border:2px solid #c99a45;border-radius:9u;background:linear-gradient(#3a2418,#24150e);box-shadow:inset 0 0 0 2px ${L},inset 0 0 0 3px #e2b85a40,0 3px 0 ${L};font:400 17u/1 ${f};color:#f6e7c8;text-shadow:0 1px 1px #000}
& .marche-victory-carnet::before{content:none}
& .marche-victory-carnet .marche-button-label{gap:9u}
& .marche-victory-carnet.is-pressed{transform:translateY(2px);box-shadow:inset 0 0 0 2px ${L},inset 0 0 0 3px #e2b85a40}
&book{flex:none;width:28u;height:20u;line-height:0}
&book>svg{width:100%;height:100%;display:block}
& .marche-button:focus-visible{outline:3px solid ${x};outline-offset:3px}
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
&heroic{animation:marche-victory-pop .55s cubic-bezier(.2,.9,.3,1.2) ${Le}s both}
&heroic::after{animation:marche-victory-pulse 2.6s ease-in-out infinite}
&chapter.is-last &medal::before{animation:marche-victory-pulse 2.2s ease-in-out infinite}
&actions{animation:marche-victory-rise .5s ease-out ${Q}s both}
&place{animation:marche-victory-pop .5s cubic-bezier(.2,.9,.3,1.3) ${Q+.3}s both}
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
& .marche-button.marche-victory-cta{min-width:205u;min-height:max(44px,41u);font-size:22u}
& .marche-button.marche-victory-carnet{min-height:44px;font-size:14u}
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
& .marche-button.marche-victory-cta{min-width:165u;min-height:44px;padding:0 34u;font-size:max(15px,16.5u)}
&cta-star{width:10u;height:10u;margin-top:-5u}
&cta-star.is-left{left:17u}
&cta-star.is-right{right:17u}
& .marche-button.marche-victory-carnet{min-height:44px;padding:0 11u 0 8u;font-size:max(11px,12u)}
&place{gap:6u;padding:3u 12u 3u 6u;border-radius:10u}
&place-ico{width:24u;height:30u}
&place-new{font-size:max(8.5px,9u);letter-spacing:.1em}
&place-name{font-size:max(13px,14u)}
&book{width:20u;height:15u}
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
&place{order:3}
&title{white-space:normal;text-wrap:balance}
}
`);function Te(){if(document.getElementById("marche-victory-css"))return;const e=document.createElement("style");e.id="marche-victory-css",e.textContent=Ae,document.head.append(e)}pe({campaignVictory(e){[523.25,659.25,783.99,1046.5].forEach((r,c)=>{R(e,{type:"sawtooth",f0:r,dur:.22,gain:.07,attack:.01,at:c*.14}),R(e,{type:"triangle",f0:r,dur:.3,gain:.12,attack:.01,at:c*.14})});for(const r of[523.25,659.25,783.99,1046.5])R(e,{type:"triangle",f0:r,dur:1.4,gain:.08,attack:.05,at:.6});return R(e,{f0:130.81,dur:1.6,gain:.25,attack:.04,at:.56}),me(e,{type:"highpass",f0:5e3,dur:1.2,gain:.05,attack:.3,at:.56}),2.1}});const d=e=>e.toFixed(1),ae=(()=>{const e=[31,78],t=[2,50],r=[17,3],c=i=>{const w=(1-i)**2*e[0]+2*(1-i)*i*t[0]+i*i*r[0],y=(1-i)**2*e[1]+2*(1-i)*i*t[1]+i*i*r[1],s=2*(1-i)*(t[0]-e[0])+2*i*(r[0]-t[0]),g=2*(1-i)*(t[1]-e[1])+2*i*(r[1]-t[1]);return[w,y,Math.atan2(g,s)*180/Math.PI]},o=(i,w,y,s)=>`<path transform="translate(${d(i)} ${d(w)}) rotate(${d(y)})" d="M0 0C${d(s*.3)} ${d(-s*.28)} ${d(s*.75)} ${d(-s*.26)} ${d(s)} 0C${d(s*.75)} ${d(s*.26)} ${d(s*.3)} ${d(s*.28)} 0 0Z"/>`,h=[];for(let i=0;i<7;i++){const w=.1+i*.13,[y,s,g]=c(w),E=15-i*.9;h.push(o(y,s,g-48,E),o(y,s,g+44,E*.86))}const[v,l,u]=c(1);return h.push(o(v,l,u,11)),`<defs><linearGradient id="mv-laurel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${x}"/><stop offset=".5" stop-color="${m}"/><stop offset="1" stop-color="#b07a26"/></linearGradient></defs><path d="M${e.join(" ")}Q${t.join(" ")} ${r.join(" ")}" fill="none" stroke="${S}" stroke-width="2" stroke-linecap="round"/><g fill="url(#mv-laurel)" stroke="#6e4610" stroke-width=".7">${h.join("")}</g><circle cx="21" cy="57" r="2" fill="${x}" stroke="#6e4610" stroke-width=".6"/><circle cx="12" cy="33" r="1.7" fill="${x}" stroke="#6e4610" stroke-width=".6"/>`})(),W=`<svg viewBox="0 0 40 80" xmlns="http://www.w3.org/2000/svg">${ae}</svg>`;function J(e,t,r,c,o,h,v,l,u){let i="";for(let w=0;w<v;w++){const y=o+(h-o)*w/Math.max(1,v-1),s=y*Math.PI/180,g=d(e+Math.cos(s)*r),E=d(t+Math.sin(s)*c),O=h>o?-18:18;i+=`<ellipse cx="${g}" cy="${E}" rx="${l}" ry="${u}" transform="rotate(${d(y+O)} ${g} ${E})"/>`}return i}function Ge(e,t){const r=`mv-m${t}`,c=Array.from({length:16},(v,l)=>{const u=l*Math.PI/8;return`<circle cx="${d(30+Math.cos(u)*25.5)}" cy="${d(30+Math.sin(u)*25.5)}" r=".9"/>`}).join(""),o=e?`<radialGradient id="${r}d" cx=".42" cy=".36"><stop offset="0" stop-color="#f3d8ff"/><stop offset=".45" stop-color="#b45cf0"/><stop offset="1" stop-color="#4c1a7a"/></radialGradient>`:`<radialGradient id="${r}d" cx=".42" cy=".36"><stop offset="0" stop-color="#fff2c0"/><stop offset=".5" stop-color="#f2b843"/><stop offset="1" stop-color="#b06a14"/></radialGradient>`,h=e?`<g fill="${m}" stroke="#6e4610" stroke-width=".5">${J(30,30,33,33,100,232,7,2.2,5)}${J(30,30,33,33,80,-52,7,2.2,5)}</g>`:"";return`<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${r}r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${x}"/><stop offset=".5" stop-color="${m}"/><stop offset="1" stop-color="#8a5612"/></linearGradient>${o}</defs>${h}<circle cx="30" cy="30" r="28.5" fill="${L}"/><circle cx="30" cy="30" r="27" fill="url(#${r}r)"/><g fill="#7a4a10">${c}</g><circle cx="30" cy="30" r="22.5" fill="${e?"#3a1458":"#6e4210"}"/><circle cx="30" cy="30" r="21" fill="url(#${r}d)"/><circle cx="30" cy="30" r="17.5" fill="none" stroke="${e?"#f0c8ff":"#fff0c0"}" stroke-opacity=".55" stroke-width=".9"/></svg>`}const Ie=(()=>{const e=`<svg x="4" y="34" width="34" height="68" viewBox="0 0 40 80">${ae}</svg>`;return`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mvp-gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${x}"/><stop offset=".55" stop-color="${m}"/><stop offset="1" stop-color="#a06818"/></linearGradient><linearGradient id="mvp-cloth" x1="0" x2="1"><stop offset="0" stop-color="#3c1260"/><stop offset=".5" stop-color="#7a34b0"/><stop offset="1" stop-color="#3c1260"/></linearGradient></defs>${e}<g transform="translate(120 0) scale(-1 1)">${e}</g><path d="M36 16H84V96L60 114L36 96Z" fill="url(#mvp-cloth)" stroke="${L}" stroke-width="2.5" stroke-linejoin="round"/><path d="M40.5 19H79.5V93.5L60 108.5L40.5 93.5Z" fill="none" stroke="${m}" stroke-width="2" stroke-linejoin="round"/><g fill="url(#mvp-gold)" stroke="#5a3608" stroke-width="1.2" stroke-linejoin="round"><path d="M60 34c-3-3-8-4-12-2 4 1 6 3 7 6Z"/><path d="M45 62c0-12 6-20 15-20s15 8 15 20v14l-6 5v-11h-4v12h-10v-12h-4v11l-6-5Z"/></g><path d="M52 58h16M60 58v12" stroke="#2a1008" stroke-width="3" stroke-linecap="round"/><path d="M60 42c4-6 10-9 16-8-3 3-5 6-6 10" fill="#d23a3a" stroke="#5a1010" stroke-width="1"/><rect x="26" y="11" width="68" height="6" rx="3" fill="url(#mvp-gold)" stroke="${L}" stroke-width="1.8"/><circle cx="26" cy="14" r="4" fill="url(#mvp-gold)" stroke="${L}" stroke-width="1.5"/><circle cx="94" cy="14" r="4" fill="url(#mvp-gold)" stroke="${L}" stroke-width="1.5"/><path d="M60 1L65 7L60 13L55 7Z" fill="${x}" stroke="${S}" stroke-width="1.2"/></svg>`})(),ee='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5 14 10 22.5 12 14 14 12 22.5 10 14 1.5 12 10 10Z" fill="#6e3f0c" stroke="#fff0b8" stroke-width=".8" stroke-linejoin="round"/></svg>',Oe=`<svg viewBox="0 0 48 34" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="${m}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M24 7C18 3 10 3 3 5v24c7-2 15-2 21 2 6-4 14-4 21-2V5c-7-2-15-2-21 2Z"/><path d="M24 7v24"/><path d="M8 11c4-1 8-1 12 1M8 16c4-1 8-1 12 1M8 21c4-1 8-1 12 1M28 12c4-2 8-2 12-1M28 17c4-2 8-2 12-1M28 22c4-2 8-2 12-1" stroke-width="1.3" stroke-opacity=".8"/></svg>`;function Re(){const e=a("div","marche-victory-bg",{"aria-hidden":"true"}),t=document.createElement("img");return t.alt="",t.draggable=!1,t.decoding="async",t.addEventListener("load",()=>te(e,"is-loaded",!0),{once:!0}),t.addEventListener("error",()=>t.remove(),{once:!0}),t.sizes="100vw",t.srcset=U.map(r=>`${q(X(r))} ${r}w`).join(", "),t.src=q(X(U[0])),e.append(t),e}const De=()=>typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,N='<svg viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="vsg"><stop offset="0" stop-color="#b87bff" stop-opacity=".8"/><stop offset="1" stop-color="#9b4dff" stop-opacity="0"/></radialGradient></defs><ellipse cx="22" cy="20" rx="17" ry="20" fill="url(#vsg)"/><g transform="rotate(35 20 24)"><path d="M17 4 20 0 23 4V32H17Z" fill="#2b1f3d" stroke="#2a1b1d" stroke-width="2" stroke-linejoin="round"/><path d="M21.6 4.5V31" stroke="#d7b6ff" stroke-width="1"/><path d="M19 9l2 2-2 2M21 17l-2 2 2 2M19 25l2 2-2 2" fill="none" stroke="#f3e6ff" stroke-width="1.1"/><path d="M11 32.5Q20 30 29 32.5L28 35.5Q20 34 12 35.5Z" fill="#1d1724" stroke="#d9a63e" stroke-width="1.4" stroke-linejoin="round"/><path d="M18 36h4v6h-4z" fill="#231a2c" stroke="#9c6f22" stroke-width="1"/><circle cx="20" cy="44.5" r="2.8" fill="#7a35d6" stroke="#2a1b1d" stroke-width="1.2"/><circle cx="19.2" cy="43.7" r=".8" fill="#fff"/><circle cx="20" cy="34" r="1.4" fill="#b87bff"/></g><path d="M33 8l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8z" fill="#f3e6ff"/><circle cx="7" cy="30" r="1.6" fill="#c89bff"/></svg>';async function Ve(e,t){const r=l=>M(`marche:victory.${l}`),c=await ue(()=>import("./campaign-menus-Cr8pkwlV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);if(!t.isOpen())return;const o=(l,u)=>l.replace("<svg ",`<svg ${u} `),h=`<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">${o(j.onyx,'x="0" y="20" width="80" height="96"')}${o(N,'x="42" y="0" width="58" height="70"')}</svg>`,v=(l,u,i)=>({icon:l,label:u,from:null,to:0,format:()=>i,delta:M("marche:reveal.new"),text:{from:null,to:i}});await c.showRevealScreen(e,{id:D.gear,okId:D.gearOk,screen:"result",parts:{data:["item","victoryReward"],title:r("revealGear"),name:r("reward"),sub:r("revealGearSub"),art:k(h,"marche-unlock-medal is-art"),accent:"#a45cff",ribbon:r("rewardNew"),lines:[v(j.onyx,M("marcheData:shield.onyx.name"),r("revealShield")),v(N,M("marche:camp.sheet.voidSword"),r("revealSword"))]}}),t.isOpen()&&await we(e,{id:D.place,okId:D.placeOk,screen:"result",title:r("placeNew")})}function Ye(e,t){return Te(),new Promise(r=>{const c=se(e.host,{id:C.campaignVictory,className:"marche-victory",screen:"result",lockMs:K,restoreScreen:!1}),o=(n,p)=>M(`marche:victory.${n}`,p),h=t.journey;let v=!1,l=0;const u=n=>{if(v)return;v=!0,l&&cancelAnimationFrame(l);const p=()=>{c.close(),r(n)};t.victoryReward&&fe("forge")?Ve(e,c).then(p,p):p()},i=a("div","marche-victory-head",void 0,[k(W,"marche-victory-laurel is-left"),a("h2","marche-victory-title",{id:`${C.campaignVictory}-title`},[o("title")]),k(W,"marche-victory-laurel is-right")]),w=a("p","marche-victory-sub",void 0,[t.heroicLevel>0?o("subHeroic"):o("sub"),t.heroicLevel>0?a("span","marche-heroic-tag",{"data-tier":String(P(t.heroicLevel))},[M("marche:result.heroic",{level:F(t.heroicLevel)})]):null,t.bossEnergy?ge(t.bossEnergy,!0):null]),y=a("ol","marche-victory-chapters",void 0,(h?.chapters??[]).map((n,p,$)=>{const z=p===$.length-1,b=a("span","marche-victory-medal",{"aria-hidden":"true"},[a("b",void 0,void 0,[le(n.id)])]);b.insertAdjacentHTML("afterbegin",Ge(z,p));const I=a("li",`marche-victory-chapter${z?" is-last":""}`,void 0,[b,a("span","marche-victory-name",void 0,[M(n.nameKey)]),a("span","marche-victory-boss",void 0,[M(n.bossNameKey)])]),H=`${($e+p*Me).toFixed(2)}s`;return I.style.animationDelay=H,b.style.animationDelay=H,I})),s=be(h),g=[],E=s.length?a("div","marche-victory-stats",void 0,s.map((n,p)=>{const $=a("span","marche-victory-value",{"data-value":n.text},[n.text]),z=a("div",`marche-victory-stat is-${n.key}`,void 0,[$,a("span","marche-victory-stat-label",void 0,[o(`stat.${n.key}`)])]),b=Se+p*ze;return z.style.animationDelay=`${b.toFixed(2)}s`,g.push({el:$,to:n.value,at:b*1e3,format:n.format}),z})):null,O=t.unlockedHeroicLevel===1?o("heroicOpen"):t.unlockedHeroicLevel>1?o("heroicNext",{level:F(t.unlockedHeroicLevel)}):h?.topStep?o("heroicTop"):null,V=t.victoryReward?a("div","marche-victory-reward",{role:"note","aria-label":o("rewardAria")},[a("span","marche-victory-vdiv",{"aria-hidden":"true"},[a("i")]),k(j.onyx,"marche-victory-reward-ico"),k(N,"marche-victory-reward-ico is-sword"),a("div","marche-victory-reward-text",{"aria-hidden":"true"},[a("span","marche-victory-reward-new",void 0,[o("rewardNew")]),a("span","marche-victory-reward-name",void 0,[o("reward")])])]):null,re=O?a("div",`marche-victory-heroic${V?" has-reward":""}`,{"data-tier":String(P(t.unlockedHeroicLevel>0?t.unlockedHeroicLevel:4))},[a("i","marche-victory-gem is-top",{"aria-hidden":"true"}),k(Ie,"marche-victory-pennant"),a("span","marche-victory-vdiv",{"aria-hidden":"true"},[a("i")]),a("div","marche-victory-heroic-text",void 0,[a("span","marche-victory-heroic-title",void 0,[O]),a("span","marche-victory-heroic-sub",void 0,[o(t.unlockedHeroicLevel>0?V?"heroicSubShort":"heroicSub":"heroicTopSub")])]),V,a("i","marche-victory-gem is-bottom",{"aria-hidden":"true"})]):null;t.victoryReward&&ve();const oe=t.victoryReward?a("div","marche-victory-place",{id:`${C.campaignVictory}-place`,role:"note","aria-label":o("placeAria")},[k(xe,"marche-victory-place-ico"),a("span","marche-victory-place-text",{"aria-hidden":"true"},[a("span","marche-victory-place-new",void 0,[o("placeNew")]),a("span","marche-victory-place-name",void 0,[o("placeName")])])]):null,T=Z(M("marche:result.toCamp"),"primary",C.toCamp);T.classList.add("marche-victory-cta"),T.append(k(ee,"marche-victory-cta-star is-left"),k(ee,"marche-victory-cta-star is-right"));const G=Z(o("toCarnet"),"secondary",C.victoryCarnet);G.classList.add("marche-victory-carnet"),G.firstElementChild?.prepend(k(Oe,"marche-victory-book"));for(const n of[T,G])de(n,K);c.press(T,()=>u("camp")),c.press(G,()=>u("carnet")),c.el.setAttribute("aria-labelledby",`${C.campaignVictory}-title`),c.el.append(Re(),a("div","marche-victory-body",void 0,[i,w,a("div","marche-victory-label",{role:"heading","aria-level":"3"},[a("i"),a("b"),a("i","is-small"),a("span",void 0,void 0,[o("journey")]),a("i","is-small"),a("b"),a("i")]),y,E,re,a("div","marche-victory-actions",void 0,[oe,T,G])]));const ie=()=>{l&&cancelAnimationFrame(l),l=0;for(const n of g)n.el.textContent=n.format(n.to)};if(g.length&&!De()&&typeof requestAnimationFrame=="function"){const n=performance.now();for(const $ of g)$.el.textContent=$.format(0);const p=$=>{let z=!1;for(const b of g){const I=($-n-b.at)/_e;b.el.textContent=b.format(ke(b.to,I)),I<1&&(z=!0)}l=z&&!v?requestAnimationFrame(p):0};l=requestAnimationFrame(p)}const B=()=>{te(c.el,"is-skip",!0),ie()};c.el.addEventListener("pointerdown",B),c.onKey(n=>(B(),c.isLocked()||(he.confirm.includes(n.code)||n.code==="Digit1"?(e.sfx?.play("uiClick"),u("camp")):(n.code==="KeyC"||n.code==="Digit2")&&(e.sfx?.play("uiClick"),u("carnet"))),!0)),e.sfx?.play("campaignVictory")})}export{U as VICTORY_BG_WIDTHS,K as VICTORY_LOCK_MS,D as VICTORY_REVEAL_IDS,Ye as showCampaignVictory,X as victoryBgPath};

