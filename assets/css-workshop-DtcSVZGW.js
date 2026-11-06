const o=e=>e.replace(/(-?\d*\.?\d+)cu\b/g,"calc($1*var(--cu))").replace(/@w\b/g,"[data-profile=wide]").replace(/@c\b/g,"[data-profile=compact]").replace(/&(?=[a-z])/g,".marche-").replace(/\$([a-z][\w-]*)/g,"var(--ws-$1)"),t=o(`
&ws{--cu:var(--ws-cu,1px);--ws-panel:#1e1214e0;--ws-trim:#c9973e;--ws-cream:#f6e7c1;--ws-gold:#f6c343;--ws-green:#7ee05a;display:block;padding:0;background:transparent;color:$cream}
&ws button{cursor:pointer;outline:none}
&ws button:focus-visible{outline:3px solid $gold;outline-offset:2px}
&ws-probe{position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:var(--sat) var(--sar) var(--sab) var(--sal)}
&ws-shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(to bottom,#0b08068c,#0b080600 22%,#0b080600 80%,#0b08068c)}
&ws-header{position:absolute;top:$top;left:$hl;right:$hr;height:max(44px,44cu);display:flex;align-items:center;gap:10cu}
@w &ws-header{height:56cu}
&ws-back{flex:none;min-width:44px;height:max(44px,44cu);display:inline-flex;align-items:center;gap:6cu;padding:0 14cu 0 8cu;background:linear-gradient(#6e4a33,#5a3a24 55%,#3a2416);border:2px solid $trim;border-radius:12cu;box-shadow:0 0 0 2px #2a1b1d,0 4px 8px #00000073;color:$cream;font:700 max(13px,15cu)/1 var(--font-title);white-space:nowrap}
@w &ws-back{height:52cu;font-size:19cu}
&ws-back.is-pressed{transform:translateY(2px)}
&ws-back &ico{width:20cu;height:20cu;transform:rotate(180deg)}
&ws-titles{min-width:0;display:flex;flex-direction:column}
&ws &screen-title{font-size:22cu;line-height:1.05;white-space:nowrap}
@w &ws &screen-title{font-size:32cu}
&ws &screen-sub{font-size:max(11px,12cu);white-space:nowrap}
&ws-header.is-tight &screen-sub{display:none}
&ws-gold{flex:none;margin-left:auto;display:inline-flex;align-items:center;gap:4cu;height:max(28px,27cu);min-width:72cu;padding:0 9cu 0 4cu;background:$panel;border:2px solid $trim;border-radius:999px;box-shadow:0 0 0 2px #2a1b1d,0 4px 8px #00000073;font-size:max(13px,14cu);color:#ffe39a}
@w &ws-gold{height:32cu;font-size:17cu;min-width:94cu}
&ws-gold &ico{width:19cu;height:19cu}
@w &ws-gold &ico{width:23cu;height:23cu}
&ws-item{position:absolute;display:flex;flex-direction:column;align-items:center;padding:0;background:none;border:0;color:$cream}
&ws-item.is-pressed &ws-tag{transform:translateY(2px)}
&ws-tag{position:relative;max-width:100%;display:flex;flex-direction:column;align-items:center;gap:1px;padding:3cu 8cu 4cu;background:$panel;border:2px solid $trim;border-radius:10cu;box-shadow:0 0 0 2px #2a1b1d,0 4px 8px #00000073;font:700 max(12px,13cu)/1.1 var(--font-title);white-space:nowrap}
@w &ws-tag{padding:5cu 12cu 6cu;font-size:16cu;border-radius:12cu}
&ws-tag::after{content:'';position:absolute;left:50%;bottom:-8px;width:12px;height:12px;background:inherit;border:inherit;border-width:0 2px 2px 0;transform:translateX(-50%) rotate(45deg)}
&ws-tag-name{font-size:1em}
&ws-tag-level{font:600 max(11px,11cu)/1.15 var(--font-body);color:#e0cfa9}
@w &ws-tag-level{font-size:max(11px,13cu)}
&ws-tag-cost{display:inline-flex;align-items:center;gap:3cu;color:#ffe39a}
&ws-tag-cost &ico{width:1.05em;height:1.05em}
&ws-item.is-affordable &ws-tag{border-color:$green;box-shadow:0 0 0 2px #2a1b1d,0 0 14px #7ee05acc}
&ws-item.is-affordable &ws-tag-cost{color:#c9ff9a}
&ws-item.is-short &ws-tag{filter:saturate(.45) brightness(.82)}
&ws-item.is-short &ws-tag-cost{color:#ffb4a2}
&ws-item.is-max &ws-tag{border-color:#e9d8a6}
&ws-item.is-max &ws-tag-cost{color:#b8e08a}
&ws-item.is-on &ws-tag{border-color:$gold;box-shadow:0 0 0 2px #2a1b1d,0 0 0 5px #f6c34388}
&ws-item-spot{flex:1;width:100%}
@keyframes marche-ws-pulse{50%{box-shadow:0 0 0 2px #2a1b1d,0 0 22px #7ee05a}}
&ws-item.is-affordable:not(.is-on) &ws-tag{animation:marche-ws-pulse 1.8s ease-in-out infinite}
@media (prefers-reduced-motion:reduce){&ws-item &ws-tag{animation:none}}
&ws-detail{position:absolute;z-index:2;top:$main;bottom:$b;width:min(300cu,44%);display:flex;flex-direction:column;gap:6cu;padding:8cu 10cu;overflow:hidden}
&ws-detail[hidden]{display:none}
&ws-detail.is-right{right:$r}
&ws-detail.is-left{left:$l}
@w &ws-detail{width:min(340cu,36%);gap:10cu;padding:14cu 16cu;bottom:auto;max-height:calc(100% - $main - $b)}
&ws-detail-head{flex:none;display:flex;align-items:center;gap:8cu}
&ws-detail-art{position:relative;flex:none;width:44cu;height:44cu}
@w &ws-detail-art{width:64cu;height:64cu}
&ws-detail-art>&camp-paint{position:absolute;inset:0}
&ws-detail-art svg{width:100%;height:100%;display:block}
&ws-detail-title{flex:1;min-width:0;display:flex;flex-direction:column}
&ws-detail-name{font:700 max(15px,17cu)/1.1 var(--font-title);color:var(--ink)}
@w &ws-detail-name{font-size:22cu}
&ws-detail-level{font:600 max(11px,12cu)/1.2 var(--font-body);color:var(--ink-soft)}
&ws-close{flex:none;width:44px;height:44px;display:grid;place-items:center;border:2px solid var(--ink);border-radius:50%;background:#f3e3b5;color:var(--ink);font:700 18px/1 var(--font-body)}
&ws-close.is-pressed{transform:translateY(2px)}
&ws-pips{flex:none;display:flex;gap:3cu}
&ws-pip{flex:1;max-width:16cu;height:8cu;border:1.5px solid #2a1b1d;border-radius:2px;background:#3b241626}
&ws-pip.is-on{background:linear-gradient(#ffe07a,#f6c343 60%,#d48a1c);box-shadow:inset 0 1px 0 #ffffff99}
&ws-body{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;gap:5cu;margin:0 -4cu;padding:0 4cu 2cu;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-x pan-y;outline:none}
&ws-body.is-more{-webkit-mask-image:linear-gradient(#000 calc(100% - 22px),#0000);mask-image:linear-gradient(#000 calc(100% - 22px),#0000)}
@w &ws-body{gap:8cu}
&ws-body>*{flex:none;margin:0}
&ws-flavor{font:italic 600 max(12px,13cu)/1.3 var(--font-title);color:#5b3d28}
@w &ws-flavor{font-size:16cu}
&ws-flavor.is-maxed{color:#2f6a1f}
&ws-play{font:600 max(12px,12.5cu)/1.3 var(--font-body);color:var(--ink)}
@w &ws-play{font-size:14cu}
&ws-rows{display:flex;flex-direction:column;border-top:1px solid #3b241633}
&ws-row{display:flex;align-items:baseline;justify-content:space-between;gap:8cu;padding:2cu 0;border-bottom:1px dashed #3b241640;font:600 max(12px,12.5cu)/1.25 var(--font-body);color:var(--ink)}
@w &ws-row{font-size:15cu;padding:4cu 0}
&ws-row-label{min-width:0;color:#5b3d28}
&ws-row-value{flex:none;max-width:62%;text-align:right;white-space:nowrap}
&ws-row.is-combo &ws-row-value{white-space:normal}
&ws-now{color:var(--ink)}
&ws-arrow{color:#8a6a48}
&ws-next{color:#2f7a1f}
&ws-stat-max{margin-left:.35em;padding:0 .4em;border-radius:999px;background:var(--ink);color:var(--cream);font-size:.8em}
&ws-power{font:700 max(12px,13cu)/1.2 var(--font-title);color:#2f5f9a}
@w &ws-power{font-size:16cu}
&ws-note{font:600 max(11px,11.5cu)/1.3 var(--font-body);color:var(--ink-soft)}
@w &ws-note{font-size:13cu}
&ws-milestone{padding:3cu 6cu;border-radius:8cu;background:#f6c34333;border:1px solid #d48a1c66;font:600 max(11px,12cu)/1.3 var(--font-body);color:var(--ink)}
@w &ws-milestone{font-size:14cu;padding:5cu 8cu}
&ws-milestone>b{color:#8a4a10}
&ws-actions{flex:none;margin-top:auto;display:flex;align-items:stretch;gap:6cu}
&ws &ws-buy{flex:1;min-width:0;min-height:max(48px,50cu);padding:0 6cu;font-size:max(14px,16cu)}
&ws-step{flex:none;width:44px;min-height:44px;display:grid;place-items:center;border:2px solid var(--ink);border-radius:10px;background:#f3e3b5;color:var(--ink);font:700 22px/1 var(--font-body)}
&ws-step.is-pressed{transform:translateY(2px)}
&ws-buy &button-label{flex-wrap:wrap;justify-content:center;gap:0 .35em;white-space:normal;text-align:center}
&ws-buy-cost{display:inline-flex;align-items:center;gap:.2em;white-space:nowrap}
&ws-buy-cost &ico{width:1.1em;height:1.1em}
&ws-buy.is-short{background:linear-gradient(#e9dcc0,#cdbb95);color:#6d5a48}
&ws-buy-missing{flex-basis:100%;font:700 max(11px,12cu)/1.15 var(--font-body);color:#7f2c18}
&ws-buy.is-maxed{background:linear-gradient(#e7f2d5,#b8d39a);color:#2f4a1c}
@container marche-frame (max-height:420px){&ws-pips{display:none}}
@container marche-frame (max-height:340px){&ws-detail-art{display:none}}
&ws &keys-hint{position:absolute;left:$l;right:$r;bottom:$b;text-shadow:0 1px 2px #000}
.is-opening &ws-header{animation:marche-fade-in 180ms ease-out both}
.is-opening &ws-item{animation:marche-fade-in 260ms ease-out 120ms both}
&ws &ws-back{background:linear-gradient(#6b4630 0 8%,#573722 8% 70%,#462b1a 70%);border:3px solid #e5a73a;border-radius:10cu;box-shadow:0 0 0 2px #1b0f0c,0 3px 0 2px #1b0f0c,inset 0 0 0 2px #00000059;text-shadow:1px 0 #1b0f0c,-1px 0 #1b0f0c,0 1px #1b0f0c,0 2px #1b0f0c}
&ws &ws-back.is-pressed{box-shadow:0 0 0 2px #1b0f0c,0 1px 0 2px #1b0f0c,inset 0 0 0 2px #00000059}
&ws &ws-tag{background:linear-gradient(#3a2418 0 10%,#24150f 10%);border:3px solid #e5a73a;box-shadow:0 0 0 2px #1b0f0c,0 3px 0 2px #1b0f0c;font-family:var(--font-title)}
&ws &ws-item.is-affordable &ws-tag{border-color:#5fd64a;box-shadow:0 0 0 2px #1b0f0c,0 3px 0 2px #1b0f0c,0 0 0 5px #5fd64a40}
&ws &ws-item.is-on &ws-tag{border-color:#ffe07a;box-shadow:0 0 0 2px #1b0f0c,0 3px 0 2px #1b0f0c,0 0 0 5px #ffd25a59}
&ws &ws-close,&ws &ws-step{background:radial-gradient(circle at 50% 38%,#fff6e0 0 40%,#f3e2bd 41% 70%,#e2c48a 71%);border:3px solid #e5a73a;box-shadow:0 0 0 2px #1b0f0c,0 3px 0 2px #1b0f0c;color:#3b2416}
&ws &ws-buy.marche-button:not(.is-short):not(.is-maxed):not(.is-made){background:linear-gradient(#ffe68a 0 12%,#fcc945 12% 62%,#f0a72e 62% 88%,#d18318 88%);border:3px solid #b8741a;border-radius:10cu;box-shadow:0 0 0 2px #1b0f0c,0 5px 0 2px #1b0f0c,inset 0 2px 0 #fff3c4;color:#3b2416;text-shadow:none}
&ws &ws-buy.marche-button{font-family:var(--font-title)}
&ws &ws-buy.is-short{background:linear-gradient(#efe3c8 0 14%,#d8c7a0 14% 80%,#bfac84 80%);border:3px solid #9a8560;box-shadow:0 0 0 2px #1b0f0c,0 4px 0 2px #1b0f0c}
&ws &ws-buy.is-maxed{background:linear-gradient(#eef6e0 0 14%,#c9dfac 14% 80%,#a9c788 80%);border:3px solid #6f9a48;box-shadow:0 0 0 2px #1b0f0c,0 4px 0 2px #1b0f0c}
&ws &ws-buy.is-pressed{box-shadow:0 0 0 2px #1b0f0c,0 1px 0 2px #1b0f0c}
`),a="marche-workshop-css";function i(){if(typeof document>"u"||document.getElementById(a))return;const e=document.createElement("style");e.id=a,e.textContent=t,document.head.append(e)}export{i as e};

