import{an as n,aj as r}from"./index-DY2ykVRM.js";const o="marche-boss-energy",t="marche-boss-energy-css",c=`
.marche-boss-energy{align-self:center;display:inline-flex;align-items:center;gap:calc(5*var(--u,1px));padding:calc(2*var(--u,1px)) calc(11*var(--u,1px));border-radius:999px;background:linear-gradient(#3b2a1c,#1c120c);border:calc(1.5*var(--u,1px)) solid #f2c35a;box-shadow:0 0 0 1px #1a0f0a,0 0 calc(10*var(--u,1px)) #ffd34a66;font:700 max(12px,calc(13*var(--u,1px)))/1.25 var(--font-body);color:#ffe9a6;white-space:nowrap;text-shadow:0 1px 0 #000}
.marche-boss-energy-bolt{display:inline-block;width:.7em;height:1.1em;background:#ffd34a;clip-path:polygon(60% 0,8% 58%,42% 58%,30% 100%,92% 38%,56% 38%);filter:drop-shadow(0 0 2px #ffd34a)}
.marche-boss-energy.is-inline{margin-left:.5em;vertical-align:.05em;font-style:normal}
.marche-boss-energy-note{font-weight:600;color:#e4d2ad}
.marche-boss-energy.is-full{border-color:#b08a4a;box-shadow:0 0 0 1px #1a0f0a}
`;function i(){if(typeof document>"u"||document.getElementById(t))return;const e=document.createElement("style");e.id=t,e.textContent=c,document.head.append(e)}function p(e,a=!1){i();const s=d(a?"span":"div",e);return a&&s.classList.add("is-inline"),s}function d(e,a){return a.gained<=0?n(e,"marche-boss-energy is-full",{id:o},[r("marche:energy.bossFull")]):n(e,"marche-boss-energy",{id:o},[r("marche:energy.boss",{n:a.gained}),n("span","marche-boss-energy-bolt",{"aria-hidden":"true"}),a.gained<a.gift?n("span","marche-boss-energy-note",void 0,[`· ${r("marche:energy.bossCapped")}`]):null])}export{p as b};

