import{eY as f,aV as x,af as e,dB as l,dI as u,e$ as g}from"./index-k9ya8IvD.js";import{r as v,L as m,t as a,R as y}from"./strings-Cluog4Sb.js";import"./phaser-DIUF0PZB.js";const d="marche-blessings-css",w=`
.marche-sheet-panel.is-forces:not([hidden]){overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y}
.marche-bl-title{font:700 max(13px,calc(15 * var(--u,1px)))/1.3 var(--font-title,Georgia,serif);color:#3b2416;border-bottom:2px solid #3b241633}
.marche-sheet-blessings{grid-column:1/-1;padding-bottom:4px;min-width:0;display:flex;flex-direction:column;gap:calc(6 * var(--u,1px))}
.marche-sheet-blessings:empty{display:none}
.marche-bl-head{display:flex;align-items:baseline;justify-content:space-between;gap:8px}
.marche-bl-count{font:700 max(12px,calc(13 * var(--u,1px)))/1 var(--font-body,system-ui,sans-serif);color:#6b4a30}
.marche-bl-sub{margin:0;font:600 max(11px,calc(12 * var(--u,1px)))/1.25 var(--font-body,system-ui,sans-serif);color:#6b4a30}
.marche-bl-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:calc(8 * var(--u,1px))}
.marche-bl-item{min-width:0;display:flex;gap:calc(8 * var(--u,1px));align-items:flex-start;padding:calc(7 * var(--u,1px)) calc(9 * var(--u,1px));border-radius:10px;background:linear-gradient(#fff8e6,#f3e1b8);border:2px solid #b8913f;box-shadow:inset 0 0 0 1px #fff6d6}
.marche-bl-item.is-locked{background:#3b24160d;border:2px dashed #3b241640;box-shadow:none}
.marche-bl-ico{flex:none;width:calc(40 * var(--u,1px));height:calc(40 * var(--u,1px));filter:drop-shadow(0 2px 2px #0000004d)}
.marche-bl-item.is-locked .marche-bl-ico{filter:grayscale(1) opacity(.75)}
.marche-bl-ico svg{width:100%;height:100%;display:block}
.marche-bl-text{min-width:0;display:flex;flex-direction:column;gap:2px}
.marche-bl-name{font:700 max(13px,calc(15 * var(--u,1px)))/1.15 var(--font-title,Georgia,serif);color:#3b2416}
.marche-bl-item.is-locked .marche-bl-name{color:#6b4a30}
.marche-bl-bonus{align-self:flex-start;font:800 max(11px,calc(12 * var(--u,1px)))/1.2 var(--font-body,system-ui,sans-serif);color:#24603a;background:#2f8f4e1f;border-radius:999px;padding:1px 8px}
.marche-bl-origin{font:600 max(10px,calc(11 * var(--u,1px)))/1.2 var(--font-body,system-ui,sans-serif);color:#8a5a2b}
.marche-bl-desc{font:italic 500 max(11px,calc(12 * var(--u,1px)))/1.3 var(--font-body,system-ui,sans-serif);color:#5b3d28}
@container marche-frame (max-height:300px){.marche-bl-desc{display:none}}
@container marche-frame (max-width:560px){.marche-bl-grid{grid-template-columns:minmax(0,1fr)}}
`;function E(){if(document.getElementById(d))return;const o=document.createElement("style");o.id=d,o.textContent=w,document.head.append(o)}function k(o){return Math.round(Math.abs(f[o].mult-1)*100)}function N(o,t){E();const b=t.permanent.filter(r=>r.owned).length,h=t.permanent.map(({id:r,owned:p})=>{const n=v(r),c=n?x[n].arena:0;if(!p)return e("div","marche-bl-item is-locked",{"data-blessing":r,"data-owned":"0"},[l(m,"marche-bl-ico"),e("span","marche-bl-text",void 0,[e("span","marche-bl-name",void 0,[a("sheet.lockedName")]),e("span","marche-bl-origin",void 0,[a("sheet.lockedHint",{chapter:u(Math.ceil(c/10))})])])]);const s=a(`blessing.${r}.name`),i=a(`bonus.${r}`,{pct:k(r)});return e("div","marche-bl-item",{"data-blessing":r,"data-owned":"1","aria-label":`${s} · ${i}`},[l(y[r]??m,"marche-bl-ico"),e("span","marche-bl-text",void 0,[e("span","marche-bl-name",void 0,[s]),e("span","marche-bl-bonus marche-num",void 0,[i]),e("span","marche-bl-origin",void 0,[a("sheet.origin",{room:n?a(`room.${n}.name`):"",arena:g(c)||`${c}`})]),e("span","marche-bl-desc",void 0,[n?a(`room.${n}.desc`):""])])])});o.replaceChildren(e("div","marche-bl-head",void 0,[e("div","marche-bl-title",void 0,[a("sheet.title")]),e("span","marche-bl-count marche-num",void 0,[a("sheet.count",{n:b,of:t.permanent.length})])]),e("p","marche-bl-sub",void 0,[a("sheet.sub")]),e("div","marche-bl-grid",{role:"list"},h))}export{k as bonusPct,N as fillBlessingsSection};

