import{ae as $,dM as w,ak as a,dT as g,ag as h,dS as v,dU as j,af as H,ah as E,aj as N,ai as V,dN as G,dO as u,eh as I}from"./index-BO224ITN.js";import"./phaser-DIUF0PZB.js";const L=1800,T=`
.marche-victory{flex-direction:column;overflow:hidden;background:radial-gradient(ellipse 90% 70% at 50% 0%,#ffcf6a 0%,#c8743a 18%,#5a2a6a 48%,#1a0e24 78%,#09060c 100%)}
.marche-victory-rays{position:absolute;left:50%;top:-40%;width:180vmax;height:180vmax;margin-left:-90vmax;pointer-events:none;opacity:.32;background:repeating-conic-gradient(from 0deg,rgba(255,226,140,.55) 0deg 6deg,transparent 6deg 18deg);-webkit-mask:radial-gradient(circle,#000 0%,transparent 55%);mask:radial-gradient(circle,#000 0%,transparent 55%);animation:marche-victory-spin 60s linear infinite}
.marche-victory-body{position:relative;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:calc(14*var(--u));width:min(100%,calc(860*var(--u)));max-height:100%}
.marche-victory-banner{position:relative;width:calc(128*var(--u));height:calc(236*var(--u));transform-origin:50% 4%;animation:marche-victory-sway 5s ease-in-out 1.2s infinite}
.marche-victory-banner svg{width:100%;height:100%;overflow:visible;filter:drop-shadow(0 calc(6*var(--u)) calc(10*var(--u)) rgba(0,0,0,.5))}
.marche-victory-cloth{transform-origin:50% 6%;animation:marche-victory-unfurl .9s cubic-bezier(.2,.9,.3,1.2) .15s both}
.marche-victory-sun{transform-origin:60px 88px;animation:marche-victory-sun 1.1s ease-out .8s both}
.marche-victory-caption{margin-top:calc(4*var(--u));text-align:center;font:italic 600 max(10px,calc(11*var(--u)))/1.25 var(--font-title);color:#ffe9b0;text-shadow:0 1px 2px #000}
.marche-victory-main{display:flex;flex-direction:column;align-items:center;gap:calc(7*var(--u));min-width:0}
.marche-victory-title{margin:0;text-align:center;font:700 calc(34*var(--u))/1.02 var(--font-title);color:#ffe38a;text-shadow:-2px -2px 0 var(--outline),2px -2px 0 var(--outline),-2px 2px 0 var(--outline),2px 2px 0 var(--outline),0 3px 0 var(--outline),0 0 calc(22*var(--u)) rgba(255,200,90,.75);animation:marche-victory-rise .7s ease-out .5s both}
.marche-victory-sub{text-align:center;font:italic 600 max(11px,calc(13.5*var(--u)))/1.3 var(--font-title);color:#fff0cf;text-shadow:0 1px 2px #000;animation:marche-victory-rise .6s ease-out .85s both}
.marche-victory-sub .marche-heroic-tag{font-style:normal}
.marche-victory-label{font:700 max(10px,calc(11*var(--u)))/1 var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:#f3d48a;animation:marche-victory-rise .5s ease-out 1.1s both}
.marche-victory-chapters{display:flex;align-items:flex-start;justify-content:center;width:100%}
.marche-victory-chapter{flex:1 1 0;min-width:0;max-width:calc(132*var(--u));display:flex;flex-direction:column;align-items:center;gap:calc(3*var(--u));text-align:center;animation:marche-victory-pop .45s cubic-bezier(.2,.9,.3,1.4) both}
.marche-victory-medal{display:grid;place-items:center;width:calc(34*var(--u));height:calc(34*var(--u));border-radius:50%;border:3px solid var(--ink);background:radial-gradient(circle at 40% 35%,#fff3c0,#f6b23c 60%,#c47a1a);font:700 calc(13*var(--u))/1 var(--font-title);color:var(--ink);box-shadow:0 0 calc(10*var(--u)) rgba(255,210,90,.7)}
.marche-victory-chapter.is-last .marche-victory-medal{background:radial-gradient(circle at 40% 35%,#f3dcff,#b04cff 60%,#5e2f80);color:#fff6e3;box-shadow:0 0 calc(14*var(--u)) #b04cff}
.marche-victory-chapter-name{font:700 max(10px,calc(11*var(--u)))/1.15 var(--font-title);color:#fff0cf;text-shadow:0 1px 2px #000}
.marche-victory-chapter-boss{font:600 max(9px,calc(10*var(--u)))/1.15 var(--font-body);color:#e9c9f5;text-shadow:0 1px 2px #000}
.marche-victory-stats{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:calc(6*var(--u));width:100%}
.marche-victory-stat{display:flex;flex-direction:column;align-items:center;gap:calc(2*var(--u));padding:calc(5*var(--u)) calc(4*var(--u));border:2px solid rgba(255,214,120,.55);border-radius:10px;background:linear-gradient(rgba(40,20,48,.72),rgba(14,8,18,.82));animation:marche-victory-pop .4s cubic-bezier(.2,.9,.3,1.4) both}
.marche-victory-stat-value{font:700 calc(19*var(--u))/1 var(--font-body);font-variant-numeric:tabular-nums;color:#ffe38a;white-space:nowrap}
.marche-victory-stat-label{font:600 max(9px,calc(10*var(--u)))/1.1 var(--font-body);color:#e8d8c0;text-align:center}
.marche-victory-heroic{display:flex;flex-direction:column;align-items:center;gap:calc(1*var(--u));padding:calc(4*var(--u)) calc(16*var(--u));border:2px solid var(--ink);border-radius:999px;background:linear-gradient(#9a5cc8,#5e2f80);box-shadow:0 0 0 2px #b04cff8c,0 0 calc(18*var(--u)) #b04cffb3;animation:marche-victory-pop .5s cubic-bezier(.2,.9,.3,1.4) 2.9s both}
.marche-victory-heroic-title{font:700 max(12px,calc(15*var(--u)))/1.15 var(--font-title);color:#fff2c4;text-shadow:0 1px 0 var(--outline)}
.marche-victory-heroic-sub{font:600 max(10px,calc(11*var(--u)))/1.2 var(--font-body);color:#f2e2ff}
.marche-victory-actions{display:flex;justify-content:center;animation:marche-victory-rise .5s ease-out 3.2s both}
.marche-victory-actions .marche-button{min-width:calc(220*var(--u));min-height:calc(50*var(--u))}
.marche-victory.is-skip *{animation-delay:0s!important;animation-duration:.01s!important}
.marche-victory.is-skip .marche-victory-rays,.marche-victory.is-skip .marche-victory-banner{animation-duration:60s!important}
@keyframes marche-victory-spin{to{transform:rotate(360deg)}}
@keyframes marche-victory-sway{0%,100%{transform:rotate(-1.2deg)}50%{transform:rotate(1.2deg)}}
@keyframes marche-victory-unfurl{from{transform:scaleY(.04);opacity:.2}to{transform:scaleY(1);opacity:1}}
@keyframes marche-victory-sun{from{transform:scale(.2) rotate(-90deg);opacity:0}to{transform:scale(1) rotate(0);opacity:1}}
@keyframes marche-victory-rise{from{transform:translateY(calc(10*var(--u)));opacity:0}to{transform:none;opacity:1}}
@keyframes marche-victory-pop{from{transform:scale(.6);opacity:0}to{transform:none;opacity:1}}
@media (max-aspect-ratio:4/3){.marche-victory-body{grid-template-columns:minmax(0,1fr)}.marche-victory-flag{display:none}.marche-victory-stats{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (prefers-reduced-motion:reduce){.marche-victory *{animation:none!important}}
`;function D(){if(document.getElementById("marche-victory-css"))return;const t=document.createElement("style");t.id="marche-victory-css",t.textContent=T,document.head.append(t)}G({campaignVictory(t){[523.25,659.25,783.99,1046.5].forEach((n,i)=>{u(t,{type:"sawtooth",f0:n,dur:.22,gain:.07,attack:.01,at:i*.14}),u(t,{type:"triangle",f0:n,dur:.3,gain:.12,attack:.01,at:i*.14})});for(const n of[523.25,659.25,783.99,1046.5])u(t,{type:"triangle",f0:n,dur:1.4,gain:.08,attack:.05,at:.6});return u(t,{f0:130.81,dur:1.6,gain:.25,attack:.04,at:.56}),I(t,{type:"highpass",f0:5e3,dur:1.2,gain:.05,attack:.3,at:.56}),2.1}});function K(){const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("viewBox","0 0 120 220"),r.setAttribute("aria-hidden","true");const n=Array.from({length:12},(i,e)=>{const o=e*Math.PI/6,s=(d,f)=>`${(60+Math.cos(o+f)*d).toFixed(1)},${(88+Math.sin(o+f)*d).toFixed(1)}`;return`<polygon points="${s(25,-.17)} ${s(e%2?37:42,0)} ${s(25,.17)}"/>`}).join("");return r.innerHTML=`
<defs>
<linearGradient id="mvb-cloth" x1="0" x2="1"><stop offset="0" stop-color="#13205a"/><stop offset=".5" stop-color="#2a3c94"/><stop offset="1" stop-color="#13205a"/></linearGradient>
<radialGradient id="mvb-sun" cx=".42" cy=".38"><stop offset="0" stop-color="#fff6c8"/><stop offset=".55" stop-color="#ffd25a"/><stop offset="1" stop-color="#e48d22"/></radialGradient>
<linearGradient id="mvb-pole" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#a8641c"/></linearGradient>
</defs>
<g class="marche-victory-cloth">
<path d="M14 14H106V168L60 204L14 168Z" fill="url(#mvb-cloth)" stroke="#2a1b1d" stroke-width="4" stroke-linejoin="round"/>
<path d="M22 20H98V163L60 193L22 163Z" fill="none" stroke="#ffd25a" stroke-width="2.5" stroke-linejoin="round"/>
<g class="marche-victory-sun"><g fill="#ffd25a" stroke="#2a1b1d" stroke-width="1.5" stroke-linejoin="round">${n}</g>
<circle cx="60" cy="88" r="22" fill="url(#mvb-sun)" stroke="#2a1b1d" stroke-width="3"/>
<circle cx="60" cy="88" r="14" fill="none" stroke="#e48d22" stroke-width="1.5" opacity=".7"/></g>
<path d="M40 140H80M46 150H74" stroke="#ffd25a" stroke-width="2.5" stroke-linecap="round"/>
<path d="M60 204v10" stroke="#2a1b1d" stroke-width="3"/><circle cx="60" cy="216" r="4" fill="#ffd25a" stroke="#2a1b1d" stroke-width="2"/>
</g>
<rect x="2" y="6" width="116" height="9" rx="4.5" fill="url(#mvb-pole)" stroke="#2a1b1d" stroke-width="3"/>
<circle cx="4" cy="10.5" r="5.5" fill="#ffd25a" stroke="#2a1b1d" stroke-width="2.5"/>
<circle cx="116" cy="10.5" r="5.5" fill="#ffd25a" stroke="#2a1b1d" stroke-width="2.5"/>`,r}function z(t,r){return D(),new Promise(n=>{const i=$(t.host,{id:w.campaignVictory,className:"marche-victory",screen:"result",lockMs:L,restoreScreen:!1}),e=(c,l)=>h(`marche:victory.${c}`,l),o=r.journey;let s=!1;const d=()=>{s||(s=!0,i.close(),n("camp"))},f=a("div","marche-victory-chapters",void 0,(o?.chapters??[]).map((c,l,y)=>{const m=a("div",`marche-victory-chapter${l===y.length-1?" is-last":""}`,void 0,[a("span","marche-victory-medal",void 0,[g(c.id)]),a("span","marche-victory-chapter-name",void 0,[h(c.nameKey)]),a("span","marche-victory-chapter-boss",void 0,[h(c.bossNameKey)])]);return m.style.animationDelay=`${1.25+l*.18}s`,m})),M=o?[["arenas",v(o.arenas)],["bosses",v(o.bosses)],["time",j(o.timeMs)],["gold",v(o.gold)],["kills",v(o.kills)],["deaths",v(o.deaths)]]:[],S=a("div","marche-victory-stats",void 0,M.map(([c,l],y)=>{const m=a("div",`marche-victory-stat is-${c}`,void 0,[a("span","marche-victory-stat-value",void 0,[l]),a("span","marche-victory-stat-label",void 0,[e(`stat.${c}`)])]);return m.style.animationDelay=`${2.15+y*.1}s`,m})),b=r.unlockedHeroicLevel===1?e("heroicOpen"):r.unlockedHeroicLevel>1?e("heroicNext",{level:g(r.unlockedHeroicLevel)}):o?.topStep?e("heroicTop"):null,C=b?a("div","marche-victory-heroic",void 0,[a("span","marche-victory-heroic-title",void 0,[b]),a("span","marche-victory-heroic-sub",void 0,[e(r.unlockedHeroicLevel>0?"heroicSub":"heroicTopSub")])]):null,p=H(h("marche:result.toCamp"),"primary",w.toCamp);p.classList.add("marche-cta"),E(p,L),i.press(p,d);const x=a("div","marche-victory-flag",void 0,[a("div","marche-victory-banner"),a("div","marche-victory-caption",void 0,[e("banner")])]);x.firstElementChild?.append(K()),i.el.append(a("div","marche-victory-rays"),a("div","marche-victory-body",void 0,[x,a("div","marche-victory-main",void 0,[a("h2","marche-victory-title",void 0,[e("title")]),a("div","marche-victory-sub",void 0,[r.heroicLevel>0?e("subHeroic"):e("sub"),r.heroicLevel>0?a("span","marche-heroic-tag",void 0,[h("marche:result.heroic",{level:g(r.heroicLevel)})]):null]),a("div","marche-victory-label",void 0,[e("journey")]),f,S,C,a("div","marche-victory-actions",void 0,[p])])]));const k=()=>V(i.el,"is-skip",!0);i.el.addEventListener("pointerdown",k),i.onKey(c=>(k(),i.isLocked()||(N.confirm.includes(c.code)||c.code==="Digit2")&&(t.sfx?.play("uiClick"),d()),!0)),t.sfx?.play("campaignVictory")})}export{L as VICTORY_LOCK_MS,z as showCampaignVictory};

