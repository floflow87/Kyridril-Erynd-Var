const t=e=>e.replace(/(-?\d*\.?\d+)cu\b/g,"calc($1*var(--cu))").replace(/@w\b/g,"[data-profile=wide]").replace(/@c\b/g,"[data-profile=compact]").replace(/&(?=[a-z])/g,".marche-").replace(/\$([a-z][\w-]*)/g,"var(--ws-$1)"),i=t(`
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
&ws &screen-sub.is-dear{color:#ffc46a;font-weight:700}
&ws-gold{flex:none;margin-left:auto;display:inline-flex;align-items:center;gap:4cu;height:max(28px,27cu);min-width:72cu;padding:0 9cu 0 4cu;background:$panel;border:2px solid $trim;border-radius:999px;box-shadow:0 0 0 2px #2a1b1d,0 4px 8px #00000073;font-size:max(13px,14cu);color:#ffe39a}
@w &ws-gold{height:32cu;font-size:17cu;min-width:94cu}
&ws-gold &ico{width:19cu;height:19cu}
@w &ws-gold &ico{width:23cu;height:23cu}
&ws-item{position:absolute;display:flex;flex-direction:column;align-items:center;padding:0;background:none;border:0;color:$cream}
&ws-item.is-pressed &ws-tag{transform:translateY(2px)}
&ws-tag{position:relative;max-width:100%;display:flex;flex-direction:column;align-items:center;gap:1px;padding:3cu 8cu 4cu;background:$panel;border:2px solid $trim;border-radius:10cu;box-shadow:0 0 0 2px #2a1b1d,0 4px 8px #00000073;font:700 max(12px,13cu)/1.1 var(--font-title);white-space:nowrap}
@w &ws-tag{padding:5cu 12cu 6cu;font-size:16cu;border-radius:12cu}
&ws-tag::after{content:'';position:absolute;left:50%;top:-8px;width:12px;height:12px;background:inherit;border:inherit;border-width:2px 0 0 2px;transform:translateX(-50%) rotate(45deg)}
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
&ws-rack{position:absolute;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding:0 0 6cu;background:none;border:0;border-radius:12cu;color:$cream}
&ws-rack[hidden]{display:none}
&ws-rack-tag{display:inline-flex;align-items:center;gap:5cu;max-width:100%;padding:3cu 9cu 3cu 6cu;background:$panel;border:2px solid $trim;border-radius:999px;box-shadow:0 0 0 2px #2a1b1d,0 4px 8px #00000073;font:700 max(12px,13cu)/1.1 var(--font-title);white-space:nowrap}
@w &ws-rack-tag{font-size:16cu;padding:5cu 12cu 5cu 8cu}
&ws-rack-tag &ico{flex:none;width:1.25em;height:1.25em;color:#ffe39a}
&ws-rack-count{font:600 max(11px,11cu)/1 var(--font-body);color:#e0cfa9}
&ws-rack.is-pressed &ws-rack-tag{transform:translateY(2px)}
&ws-rack:focus-visible{outline-offset:-3px}
.is-opening &ws-header{animation:marche-fade-in 180ms ease-out both}
.is-opening &ws-item{animation:marche-fade-in 260ms ease-out 120ms both}
`),o=t(`
&ws-shields{background:#0b0806b3}
&wsr-panel{display:flex;flex-direction:column;gap:calc(6*var(--u));width:min(100%,calc(760*var(--u)));height:min(100%,calc(470*var(--u)));padding:calc(8*var(--u)) calc(14*var(--u)) calc(10*var(--u));overflow:hidden}
&wsr-head{flex:none;display:flex;align-items:center;gap:12px;min-height:44px}
&wsr-heading{flex:1;min-width:0;display:flex;align-items:baseline;flex-wrap:wrap;column-gap:12px}
&wsr-sub{font:italic 600 max(12px,calc(13*var(--u)))/1.2 var(--font-title);color:#6b4a30}
&wsr-close{flex:none;width:44px;height:44px;padding:0;display:grid;place-items:center;font:700 20px/1 var(--font-body)}
&wsr-stage{position:relative;flex:1 1 auto;min-height:0;overflow:hidden;container:wsr-stage/size;border-radius:14px;background:radial-gradient(ellipse at 50% 40%,#5a3a24,#3a2416 60%,#24160e);box-shadow:inset 0 0 0 2px #3b2416,inset 0 8px 22px #0000008c;touch-action:none;user-select:none;-webkit-user-select:none}
&wsr-track{position:absolute;top:0;bottom:0;left:0;display:flex;column-gap:max(12px,4cqw);transition:transform .34s cubic-bezier(.2,.8,.25,1);will-change:transform}
&wsr-track.is-dragging{transition:none}
&wsr-page{position:relative;flex:none;width:min(74cqw,250cqh);height:100cqh;display:flex;align-items:center;gap:max(10px,3cqw);padding:6px 4px;opacity:.45;transform:scale(.84);transition:transform .34s,opacity .34s;cursor:pointer}
&wsr-page.is-focus{opacity:1;transform:none;cursor:default}
&wsr-page:not(.is-focus) &wsr-info{opacity:0;pointer-events:none}
&wsr-info{transition:opacity .25s}
&wsr-art{position:relative;flex:none;height:92cqh;aspect-ratio:816/1220;filter:drop-shadow(0 6px 8px #000000a6)}
&wsr-img{width:100%;height:100%;display:block;object-fit:contain}
&wsr-lock{position:absolute;left:50%;top:46%;width:30%;transform:translate(-50%,-50%);display:none;filter:drop-shadow(0 3px 2px #00000099)}
&wsr-lock>svg{width:100%;height:auto;display:block}
&wsr-page.is-locked &wsr-img{filter:grayscale(1) brightness(.55) contrast(.9)}
&wsr-page.is-locked &wsr-lock{display:block}
&wsr-info{flex:1 1 auto;min-width:0;align-self:stretch;display:flex;flex-direction:column;justify-content:center;gap:max(4px,1.6cqh);color:#f6e7c1}
&wsr-titles{display:flex;flex-direction:column;gap:2px}
&wsr-name{margin:0;font:700 max(16px,7.2cqh)/1.05 var(--font-title);color:#fff2cc;text-shadow:0 2px 0 #000000b3}
&wsr-tier{align-self:flex-start;padding:1px 9px;border-radius:999px;background:var(--accent,#c9973e);box-shadow:0 0 0 2px #2a1b1d;color:#2a1b1d;font:700 max(11px,4.4cqh)/1.35 var(--font-body)}
&wsr-stats{margin:0;display:grid;grid-template-columns:minmax(0,1fr) auto;column-gap:10px;row-gap:max(1px,.6cqh);font:600 max(11px,4.6cqh)/1.2 var(--font-body)}
&wsr-stat{display:contents}
&wsr-stat>dt{min-width:0;color:#e0cfa9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&wsr-stat>dd{margin:0;text-align:right;color:#fff6da;white-space:nowrap}
&wsr-page.is-locked &wsr-stats{opacity:.55}
&wsr-locked{display:none;margin:0;font:italic 600 max(11px,4.4cqh)/1.25 var(--font-title);color:#ffc46a}
&wsr-page.is-locked &wsr-locked{display:block}
&wsr-panel &wsr-equip{flex:none;align-self:stretch;min-height:max(44px,13cqh);font-size:max(14px,5.6cqh)}
&wsr-equip.is-worn{background:linear-gradient(#e7f2d5,#b8d39a);color:#2f4a1c}
&wsr-equip.is-locked{filter:saturate(.3) brightness(.85)}
&wsr-page.is-worn &wsr-art::after{content:'';position:absolute;inset:-4%;border-radius:10px;box-shadow:0 0 0 3px #ffe07a,0 0 18px 4px #f6c343aa;pointer-events:none}
&wsr-nav{position:absolute;top:50%;z-index:2;width:44px;height:44px;margin-top:-22px;padding:0 0 3px;display:grid;place-items:center;border:2px solid #2a1b1d;border-radius:50%;background:linear-gradient(#fffaf0,#e9d3a2);box-shadow:0 3px 0 #2a1b1da6;color:#3b2416;font:700 30px/1 var(--font-title);cursor:pointer}
&wsr-nav.is-prev{left:8px}
&wsr-nav.is-next{right:8px}
&wsr-nav:disabled{opacity:.3;cursor:default}
&wsr-nav.is-pressed{transform:translateY(2px)}
&wsr-dots{flex:none;display:flex;justify-content:center;align-items:center;gap:5px;height:8px}
&wsr-dots>span{width:7px;height:7px;border-radius:4px;background:#3b241640;transition:width .2s}
&wsr-dots>.is-worn{background:#3f9a3a}
&wsr-dots>.is-locked{background:#3b24161f}
&wsr-dots>.is-on{width:20px;background:#d48a1c}
&wsr-note{flex:none;margin:0;font:600 max(11px,calc(12*var(--u)))/1.25 var(--font-body);color:#6b4a30;text-align:center}
&wsr-note[hidden]{display:none}
&wsr-panel &keys-hint{flex:none}
@container marche-frame (max-height:420px){&wsr-panel{padding:6px 12px 8px;gap:4px}&wsr-sub{display:none}}
`),a="marche-workshop-css";function s(){if(typeof document>"u"||document.getElementById(a))return;const e=document.createElement("style");e.id=a,e.textContent=i+o,document.head.append(e)}export{s as e};

