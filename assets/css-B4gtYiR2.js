const o=e=>e.replace(/(-?\d*\.?\d+)u\b/g,"calc($1*var(--u))").replace(/&(?=[a-z])/g,".marche-defi-").replace(/%%/g,".marche-"),i=o(`
&sheet{container:marche-defi/size}
&sheet %%sub-panel{width:min(100%,860u);height:min(100%,440u);gap:6u}
&sheet %%sub-body{display:flex;flex-direction:column;overflow:hidden}
&host,&body{flex:1 1 auto;min-height:0;display:flex;flex-direction:column}
&host>&cols,&body>&cols{flex:1 1 auto}
&tabs{display:flex;gap:6u;flex:none}
&tab{min-height:40px;padding:0 14u;border-radius:999px;border:2px solid #3b241659;background:#3b24160f;font:700 max(12px,13u)/1 var(--font-title);color:#5b3d28;cursor:pointer}
&tab.is-on{background:linear-gradient(#ffe07a,#f6b23c);border-color:#3b2416;color:#2e1c13}
&tab-badge{display:inline-grid;place-items:center;min-width:16px;height:16px;margin-left:5px;padding:0 4px;border-radius:999px;background:#c8402f;color:#fff;font:700 10px/1 var(--font-body);vertical-align:middle}
&tab-badge[hidden]{display:none}
&cols{flex:1 1 auto;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:12u}
&col{min-height:0;display:flex;flex-direction:column;gap:6u}
&cols>&col{overflow-y:auto;overscroll-behavior:contain}
&scroll{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding-right:2px}
&h{margin:0;font:700 max(12px,13u)/1.2 var(--font-title);color:#6b4a30;letter-spacing:.02em}
&lead{margin:0;font:600 max(11px,12u)/1.3 var(--font-body);color:#5b3d28}
&list{display:flex;flex-direction:column;gap:4u;margin:0;padding:0;list-style:none}
&row{width:100%;min-height:44px;display:flex;align-items:center;gap:8u;padding:3u 9u;border-radius:10px;border:2px solid #3b241633;background:#fffaf0b3;text-align:left;font:inherit;color:#3b2416;cursor:pointer}
&row.is-on{border-color:#3b2416;background:linear-gradient(#fff3c4,#f6dc8a);box-shadow:0 2px 0 #3b2416}
&row-n{flex:none;display:grid;place-items:center;min-width:30u;height:26u;border-radius:8px;background:#3b2416;color:#ffe39a;font:700 max(12px,13u)/1 var(--font-title)}
&row-text{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;line-height:1.15}
&row-name{font:700 max(12px,13u)/1.15 var(--font-title);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&row-sub{font:600 max(10px,11u)/1.2 var(--font-body);color:#6b4a30;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&row-tag{flex:none;font:700 max(10px,11u)/1 var(--font-body);padding:3px 7px;border-radius:999px;background:#c8402f;color:#fff}
&row-tag.is-done{background:#3f7a26}
&modes{display:flex;flex-wrap:wrap;gap:5u}
&mode{min-height:40px;padding:0 10u;border-radius:999px;border:2px solid #3b2416;background:var(--tier-bg,#eee);color:var(--tier-ink,#222);font:700 max(11px,12u)/1 var(--font-title);cursor:pointer;opacity:.62}
&mode.is-on{opacity:1;box-shadow:0 0 0 2px #fffaf0,0 0 0 4px #3b2416}
&link{flex:none;min-height:44px;min-width:44px;margin:-12px -6u -12px 0;padding:0 6u;background:none;border:0;font:700 max(11px,12u)/1 var(--font-body);color:#7a4b2a;text-decoration:underline;text-underline-offset:3px;cursor:pointer;white-space:nowrap}
&link.is-danger{color:#9a3b26}
&nb{font-family:var(--font-body)}
&note{margin:0;font:600 max(10px,11u)/1.3 var(--font-body);color:#6b4a30}
&note.is-error{color:#9a3b26}
&actions{display:flex;flex-wrap:wrap;gap:6u;align-items:center}
/* The salon's « Prêt » (ui/defi/ready-tile.ts): the painted tile is the button, on the right (its words left of it); held, its slot
   fills (gold, left to right, clipped to the painted pill); pressed in; refused: dimmed. */
&saloon &actions{flex:1 1 auto;min-height:0;flex-wrap:nowrap;flex-direction:column;justify-content:center}
&ready{flex:1 1 auto;width:100%;min-width:0;min-height:0;display:flex;flex-direction:row-reverse;align-items:center;justify-content:center;gap:10u}
&ready-stage{flex:none;height:100%;min-height:48px;max-height:200px;aspect-ratio:1;max-width:55%;container-type:size;display:grid;place-items:center}
&tile{--fill:0;position:relative;flex:none;display:block;width:min(100cqh,100cqw);height:min(100cqh,100cqw);margin:0;padding:0;border:0;border-radius:22%;background:none;cursor:pointer;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;transition:transform 90ms ease-out,filter 90ms ease-out}
&tile-img{display:block;width:100%;height:100%;pointer-events:none;filter:drop-shadow(0 3px 5px #000b)}
&tile-slot{position:absolute;border-radius:999px;overflow:hidden;pointer-events:none}
&tile-slot>i{position:absolute;inset:0;background:linear-gradient(#fffbe6,#ffe58a 38%,#f6c045 70%,#e09a2a);clip-path:inset(0 calc(100% - var(--fill)*100%) 0 0 round 999px)}
&tile-slot::after{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 2px 3px #4a230699,inset 0 -1px 1px #ffe9b066}
&tile.is-holding,&tile:not(.is-blocked):not(.is-done):active{transform:scale(.97);filter:brightness(.92)}
&tile.is-blocked{filter:saturate(.2) brightness(.78);opacity:.8;cursor:not-allowed}
&tile.is-full{animation:marche-defi-pop 260ms ease-out}
&tile.is-full &tile-slot,&tile.is-done &tile-slot{box-shadow:0 0 5px 2px #fff1a8,0 0 16px 5px #ffc94acc}
&tile.is-done{cursor:default}
&tile.is-done &tile-img{filter:drop-shadow(0 0 8px #ffd76a99) drop-shadow(0 3px 5px #000b)}
&tile-cap{flex:0 1 auto;min-width:0;margin:0;display:flex;flex-direction:column;align-items:flex-end;text-align:right;gap:4u;font:600 max(10px,11u)/1.25 var(--font-body);color:#ecd3a3}
&tile-how{max-width:150px}
&tile-cap &rep{white-space:normal}
&tile-cap.is-done{font:700 max(15px,17u)/1.1 var(--font-title);color:#c8f59a;text-shadow:0 1px 0 #1a0d06}
&ready-side{flex:0 1 auto;min-width:0;display:flex;flex-direction:column;align-items:flex-end;text-align:right;gap:5u}
&ready-side %%button{white-space:nowrap}
@keyframes marche-defi-pop{50%{transform:scale(1.06)}}
&switch{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;overflow:hidden}
&hud{position:fixed;z-index:206;right:calc(var(--hud-r,0px) + 66u);top:calc(var(--hud-y,0px) + 54u);display:flex;align-items:baseline;gap:7u;padding:3u 13u;border-radius:999px;background:linear-gradient(#33222af0,#170d12f2 70%);border:1.5px solid #d6a548;box-shadow:0 0 0 1px #1a0f0a,0 3px 6px #0009;pointer-events:none;white-space:nowrap}
&hud-wave{font:700 max(14px,16u)/1.1 var(--font-title);color:#ffe07a;text-shadow:0 1px 0 #000}
&hud-sub{font:600 max(10px,11u)/1 var(--font-body);color:#ecd9ad}
&hud-sub:empty{display:none}
&hud.is-docked{display:none}
%%stat.is-arena.is-defi{white-space:nowrap}
&hud.is-rest{border-color:#8fe06a}
&flash{position:fixed;z-index:205;left:50%;top:30%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:4u;opacity:0;pointer-events:none;text-align:center}
&flash.is-on{animation:marche-defi-flash 1.9s ease-out both}
&flash-main{font:700 max(22px,30u)/1.1 var(--font-title);color:#fff4d6;text-shadow:-2px -2px 0 #2a1b1d,2px -2px 0 #2a1b1d,-2px 2px 0 #2a1b1d,2px 2px 0 #2a1b1d,0 3px 8px #000a}
&flash-sub{font:700 max(13px,15u)/1.1 var(--font-title);color:#ffb347;text-shadow:0 1px 0 #2a1b1d,0 0 6px #000}
@keyframes marche-defi-flash{0%{opacity:0;transform:translate(-50%,-40%) scale(.9)}15%{opacity:1;transform:translate(-50%,-50%) scale(1)}75%{opacity:1}100%{opacity:0}}
@media (prefers-reduced-motion:reduce){&flash.is-on{animation-duration:1.4s}}
&result{container:marche-defi-r/size}
&result %%sub-panel{width:min(100%,820u);height:min(100%,420u);gap:6u}
&result %%sub-body{display:flex;flex-direction:column;overflow:hidden}
&result.is-solo %%sub-panel{width:min(100%,600u);height:auto}
&score{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6u}
&stat{display:flex;flex-direction:column;align-items:center;gap:1u;padding:6u 4u;border-radius:10px;background:#3b24160f;border:2px solid #3b241633}
&stat-v{font:700 max(18px,22u)/1.05 var(--font-title);color:#2e1c13}
&stat-k{font:600 max(10px,11u)/1.1 var(--font-body);color:#6b4a30;text-align:center}
&record{align-self:flex-start;padding:2u 9u;border-radius:999px;background:linear-gradient(#ffe07a,#f6b23c);border:2px solid #3b2416;font:700 max(12px,13u)/1.2 var(--font-title);color:#2e1c13}
&gain{font:700 max(12px,13u)/1.2 var(--font-body);color:#3f7a26}
&table{width:100%;border-collapse:collapse;font:600 max(11px,12u)/1.2 var(--font-body);color:#3b2416}
&table th{font:700 max(10px,11u)/1.1 var(--font-body);color:#6b4a30;text-align:right;padding:3px 4px;border-bottom:1.5px solid #3b241640;white-space:nowrap}
&table td{text-align:right;padding:4px;border-bottom:1px dashed #3b241633;white-space:nowrap}
&table th.is-title{text-align:left;font:700 max(12px,13u)/1.2 var(--font-title);color:#6b4a30;letter-spacing:.02em;padding-left:0}
&table th[title]{cursor:help}
&table td.is-name{text-align:left;width:99%;max-width:0;overflow:hidden;text-overflow:ellipsis}
&table+&table{margin-top:6u}
&table tr.is-me td{background:#ffe07a40;font-weight:700}
&table tr.is-flagged td{color:#9a6a50;font-style:italic}
&table td:first-child{color:#6b4a30;font-weight:700}
&place-1 td:first-child{color:#b07a00}
&rounds{display:flex;flex-direction:column;gap:3u;margin:0;padding:0;list-style:none}
&round-line{display:flex;justify-content:space-between;gap:8u;font:600 max(11px,12u)/1.3 var(--font-body);color:#3b2416;border-bottom:1px dashed #3b241633;padding:2px 0}
&round-line b{font-family:var(--font-title)}
&friends{display:flex;flex-direction:column;gap:3u;margin:0;padding:0;list-style:none}
&friend{display:flex;align-items:center;gap:8u;min-height:44px;padding:0 8u;border-radius:10px;border:2px solid #3b241633;background:#fffaf0b3;cursor:pointer}
&friend.is-on{border-color:#3b2416;background:linear-gradient(#fff3c4,#f6dc8a)}
&friend input{width:18px;height:18px;accent-color:#7b4fa8;pointer-events:none}
&friend .marche-ol-avatar{width:30px;height:30px}
&empty{margin:auto 0;text-align:center;font:600 max(12px,13u)/1.35 var(--font-body);color:#6b4a30}
&cols.is-empty{position:relative;overflow:hidden;grid-template-columns:minmax(0,1fr)}
&cols.is-empty>&col:first-child{display:none}
&cols.is-empty>&col{position:static;overflow:hidden}
&empty-tag{display:flex;align-items:center;justify-content:center;gap:8u;margin:0;font:italic 600 max(11px,12u)/1.3 var(--font-title);color:#6b4a30;text-align:center}
&empty-tag::before,&empty-tag::after{content:"";flex:0 0 max(10px,14u);height:1px;background:#b9966299}
&empty-ghost{position:absolute;left:-2%;bottom:-6%;width:min(34%,300u);height:auto;opacity:.12;filter:sepia(1) saturate(.4) brightness(1.05);pointer-events:none;z-index:0}
&empty-hero{position:relative;z-index:1;flex:1 1 auto;min-height:0;width:min(100%,560u);margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:max(4px,5u);text-align:center}
&empty-emblem{flex:0 1 auto;min-height:0;width:auto;height:max(92px,118u);max-width:62%;object-fit:contain;filter:drop-shadow(0 6px 8px #3b241640)}
&empty-title{margin:0;font:700 max(19px,23u)/1.1 var(--font-title);color:#2a1b1d}
&empty-rule{position:relative;width:min(70%,220u);height:1.5px;margin:max(2px,3u) 0;background:linear-gradient(90deg,#d6a54800,#d6a548 25%,#d6a548 75%,#d6a54800)}
&empty-rule::before{content:"";position:absolute;left:50%;top:50%;width:7px;height:7px;transform:translate(-50%,-50%) rotate(45deg);background:#e8b84a;box-shadow:0 0 0 2px #fbf3df}
&empty-lead{margin:0;font:italic 600 max(11.5px,12.5u)/1.3 var(--font-body);color:#5b3d28}
&empty-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:max(8px,10u);width:100%;margin-top:max(2px,4u)}
&empty-card{display:flex;align-items:center;gap:max(6px,8u);min-height:44px;padding:max(6px,7u) max(8px,10u);border:1.5px solid #c9a46a;border-radius:12px;background:linear-gradient(#fffaf0,#f3e3c2);box-shadow:0 2px 4px #3b24161f,inset 0 1px 0 #fff;color:#2a1b1d;font:inherit;text-align:left}
button&empty-card{cursor:pointer}
button&empty-card.is-pressed{transform:translateY(1px);box-shadow:0 1px 2px #3b24161f}
&empty-ico{flex:none;width:max(40px,50u);height:max(34px,42u);object-fit:contain}
&empty-sep{flex:none;align-self:stretch;width:1.5px;margin:2px 0;background:#c9a46a99}
&empty-ctext{min-width:0;display:flex;flex-direction:column;gap:2px}
&empty-ctext>b{font:700 max(13px,15u)/1.1 var(--font-title);color:#2a1b1d}
&empty-ctext>span{font:italic 600 max(10.5px,11.5u)/1.25 var(--font-body);color:#5b3d28}
@container marche-defi (max-height:330px){&empty-emblem{height:max(64px,76u)}&empty-lead{display:none}}
@container marche-defi (max-width:700px){&empty-tag{white-space:nowrap;font-size:max(10.5px,11u)}&empty-tag::before,&empty-tag::after{display:none}}
@container marche-defi (max-width:620px){&cols{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:8u}&row{gap:5u;padding:2u 6u}&row-n{min-width:26px}}
@container marche-defi (max-height:400px){&lead{display:none}&card{padding:5u 9u;gap:2u}}
@container marche-defi (max-height:330px){&sheet %%sub-head{min-height:40px}&card-title{font-size:max(14px,15u)}&note{font-size:10px}&h.is-mode,&card-sub.is-chapter{display:none}&col{gap:4u}}
@container marche-defi-r (max-width:620px){&score{gap:4u}&stat-v{font-size:max(16px,18u)}}
@container marche-defi-r (max-height:330px){&stat{padding:3u 4u}&lead{display:none}}
/* « Revanche »: its rule (ui/defi/rematch.ts) - the creator's switch, else the rule said. */
&rkit{flex:none;display:flex;flex-wrap:wrap;align-items:center;gap:3u 8u;min-width:0}
&rkit &kitbox{display:contents}
&rkit &seg{min-height:44px}
&rkit &kit-hint{flex:1 0 100%}
&rkit.is-said{align-items:baseline;gap:2u 8u}
&rkit-rule{font:700 max(12px,13u)/1.2 var(--font-title);color:#6b4a30}
&rkit-slot:empty{display:none}
@container marche-defi-r (max-height:400px){&rkit &kit-hint{display:none}}
@container marche-defi-r (max-height:330px){&result &col{gap:3u}&rkit>&h{display:none}}
&table th.is-score,&table td.is-score{border-left:1.5px solid #3b24165c;border-right:1.5px solid #3b24165c;padding-left:6px;padding-right:6px}
&table thead th.is-score{border-top:1.5px solid #3b24165c;background:#3b24160d}
&table tbody tr:last-child td.is-score{border-bottom:1.5px solid #3b24165c}
&table tr.is-forfeit td{color:#8a5a44}
&row-tag.is-live{background:#7b4fa8}
&gate{margin:auto;max-width:520u;display:flex;flex-direction:column;align-items:center;gap:10u;text-align:center}
&segs{display:flex;gap:0;border:2px solid #3b2416;border-radius:999px;overflow:hidden;align-self:flex-start}
&seg{min-height:40px;padding:0 12u;border:0;background:#fffaf0b3;color:#5b3d28;font:700 max(11px,12u)/1 var(--font-title);cursor:pointer}
&seg+&seg{border-left:2px solid #3b2416}
&seg.is-on{background:linear-gradient(#ffe07a,#f6b23c);color:#2e1c13}
&kitbox{display:flex;flex-direction:column;gap:3u}
&kitbox.is-locked &seg:not(.is-on){opacity:.45}
&kit{display:inline-flex;align-items:center;gap:3u}
&kit-part{position:relative;display:inline-grid;place-items:center;width:26px;height:26px}
&kit.is-big &kit-part{width:38px;height:38px}
&kit-img{width:100%;height:100%;object-fit:contain;display:block}
&kit-part b{position:absolute;right:-3px;bottom:-3px;min-width:14px;height:14px;padding:0 2px;border-radius:999px;background:#2e1c13;color:#ffe07a;font:700 9px/14px var(--font-body);text-align:center}
&kit-part.is-none &kit-img{display:grid;place-items:center;color:#9a7a5a;font-weight:700}
&saloon{container:marche-defi-s/size}
&saloon &cols{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}
&saloon-p &kit{gap:1px}
&saloon-p &kit-part{width:22px;height:22px}
&saloon %%sub-panel{width:min(100%,880u);height:min(100%,440u);gap:6u;color:#f6e7c8;background:radial-gradient(ellipse at 22% 0%,#ffcf6a40,transparent 46%),radial-gradient(ellipse at 85% 110%,#c8402f33,transparent 50%),repeating-linear-gradient(90deg,#4a2c18 0 46px,#3f2513 46px 48px,#53321c 48px 94px,#3a2212 94px 96px);border:3px solid #c9963c;box-shadow:inset 0 0 0 2px #2a170c,inset 0 0 40px #1a0d06cc,0 8px 22px #000a}
&saloon %%sub-body{display:flex;flex-direction:column;overflow:hidden}
&saloon %%panel-title{display:flex;align-items:center;gap:8u;color:#ffd76a;text-shadow:0 2px 0 #2a170c,0 0 12px #ffb34766}
&saloon-sub{flex:1 1 auto;min-width:0;font:600 max(11px,12u)/1.2 var(--font-body);color:#ecd3a3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&saloon-lamp{flex:none;display:inline-block;width:14px;height:20px;border-radius:5px 5px 7px 7px;background:radial-gradient(circle at 50% 60%,#fff6c2,#ffb347 45%,#a8541a 80%);box-shadow:0 0 14px 4px #ffb34780;animation:marche-defi-lamp 2.6s ease-in-out infinite}
@keyframes marche-defi-lamp{50%{box-shadow:0 0 18px 6px #ffb347a0}}
@media (prefers-reduced-motion:reduce){&saloon-lamp{animation:none}}
&saloon &col.is-side{align-items:stretch;gap:7u;padding:8u 10u;border-radius:14px;background:#1f110acc;border:1.5px solid #c9963c80}
&saloon &note,&saloon &h,&saloon &card-line{color:#ecd3a3}
&saloon &note.is-error{color:#ffb38f}
&saloon &note.is-rules{font-size:max(10px,11u);opacity:.85}
&saloon &link{color:#ffd76a;margin:0;align-self:center}
&saloon &seg{background:#2e1c13;color:#ecd3a3}
&saloon &seg.is-on{background:linear-gradient(#ffe07a,#f6b23c);color:#2e1c13}
&saloon &segs{border-color:#c9963c}
&saloon &seg+&seg{border-left-color:#c9963c}
&saloon-list{display:flex;flex-direction:column;gap:5u;margin:0;padding:0;list-style:none}
&saloon-p{display:flex;align-items:center;gap:8u;min-height:48px;padding:4u 9u;border-radius:12px;background:linear-gradient(#3a2414e6,#2a170ce6);border:1.5px solid #8a6a3a80;box-shadow:inset 0 1px 0 #ffd76a22}
&saloon-p.is-me{border-color:#ffd76a}
&saloon-p.is-ready{background:linear-gradient(#3d4a1ee6,#26300fe6);border-color:#a8d35a}
&saloon-av{flex:none;width:34px;height:34px}
&saloon-who{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;line-height:1.2}
&saloon-who b{font:700 max(12px,13u)/1.2 var(--font-title);color:#fff3d6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&saloon-dot{font:600 max(10px,11u)/1.2 var(--font-body);color:#cdb38a;white-space:nowrap}
&saloon-dot::before{content:"";display:inline-block;width:7px;height:7px;margin-right:4px;border-radius:50%;background:#7a6a58;vertical-align:1px}
&saloon-dot.is-present::before{background:#8fe06a;box-shadow:0 0 6px #8fe06a}
&saloon-dot.is-online::before{background:#e0c46a}
&saloon-tick{flex:none;display:grid;place-items:center;width:24px;height:24px;border-radius:6px;border:2px solid #c9963c;background:#1f110a;color:#a8f070;font:700 16px/1 var(--font-body)}
&saloon-tick.is-on{background:#2f4a14;border-color:#a8f070}
&saloon-state{flex:none;width:max(64px,70u);font:700 max(10px,11u)/1.15 var(--font-body);color:#ecd3a3;text-align:left}
&saloon-p.is-ready &saloon-state{color:#c8f59a}
&saloon-p &kit-part b{background:#1a0d06}
&saloon-top{display:flex;align-items:center;gap:8u}
&saloon-top &link{margin-left:auto;align-self:flex-start}
&saloon-count{font:700 max(12px,13u)/1.2 var(--font-title);color:#ffd76a}
&ring{position:relative;flex:none;width:max(54px,58u);height:max(54px,58u)}
&ring svg{width:100%;height:100%;transform:rotate(-90deg)}
&ring circle{fill:none;stroke-width:5}
&ring .is-track{stroke:#ffffff1f}
&ring .is-fill{stroke:#ffd76a;stroke-linecap:round;transition:stroke-dashoffset .25s linear}
&ring.is-low .is-fill{stroke:#ff8a5c}
&ring-n{position:absolute;inset:0;display:grid;place-items:center;font:700 max(18px,20u)/1 var(--font-title);color:#fff3d6}
&saloon-kit{display:flex;flex-direction:column;gap:4u}
&saloon-shared{display:flex;align-items:center;justify-content:space-between;gap:6u;padding:5u 8u;border-radius:10px;background:#00000033;border:1px dashed #c9963c99}
@container marche-defi-s (max-height:330px){&saloon-p{min-height:42px;padding:2u 8u}&saloon &note.is-rules{display:none}&saloon &ring{width:46px;height:46px}&saloon &ring-n{font-size:17px}&saloon-shared>&h{display:none}&saloon-shared{padding:2u 6u}&saloon-shared>&kit{margin:0 auto}&saloon &col.is-side{gap:5u;padding:6u 10u}}
@container marche-defi-s (max-width:700px){&saloon-state{display:none}&saloon &cols{grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:8u}}
&board{position:fixed;z-index:206;left:calc(var(--hud-l,0px) + 10u);top:calc(var(--hud-y,0px) + 96u);display:flex;flex-direction:column;gap:3u;margin:0;padding:5u 7u;list-style:none;border-radius:10px;background:linear-gradient(#33222ae6,#170d12e6);border:1.5px solid #d6a548;box-shadow:0 3px 6px #0008;pointer-events:none;max-width:44vw}
&board[hidden]{display:none}
&board.is-result{position:static;max-width:none;background:none;border:0;box-shadow:none;padding:0}
&board-row{display:grid;grid-template-columns:minmax(0,1fr) auto auto;align-items:baseline;gap:6u;font:700 max(11px,12u)/1.2 var(--font-body);color:#fff3d6;white-space:nowrap}
&board.is-result &board-row{color:#3b2416;padding:3px 0;border-bottom:1px dashed #3b241633}
&board-name{min-width:0;overflow:hidden;text-overflow:ellipsis;max-width:92u}
&board.is-result &board-name{max-width:none}
&board-wave{color:#ffe07a;font-family:var(--font-title);padding:0 6px;border-left:1.5px solid #d6a54880;border-right:1.5px solid #d6a54880;text-align:right}
&board.is-result &board-wave{color:#6b4a30;border-color:#3b24165c}
&board-st{font-weight:600;font-size:max(10px,11u);color:#bfe9a0}
&board-row.is-fallen &board-st,&board-row.is-forfeit &board-st{color:#ff9c7a}
&board-row.is-away &board-st{color:#c9b0a0}
&board-row.is-stopped &board-st{color:#ffe07a}
&board.is-result &board-st{color:#3f7a26}
&board.is-result &board-row.is-fallen &board-st,&board.is-result &board-row.is-forfeit &board-st{color:#9a3b26}
&ov{position:fixed;inset:0;z-index:320;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6u;background:radial-gradient(ellipse at 50% 45%,#1a0d12b3,#0a0508e6);pointer-events:auto;text-align:center}
&ov[hidden]{display:none}
&ov.is-go{background:none;pointer-events:none}
&ov-title{font:700 max(24px,32u)/1.1 var(--font-title);color:#ffd76a;text-shadow:0 2px 0 #2a170c,0 0 14px #ffb34766}
&ov-big{font:700 max(56px,84u)/1 var(--font-title);color:#fff4d6;text-shadow:-3px -3px 0 #2a1b1d,3px -3px 0 #2a1b1d,-3px 3px 0 #2a1b1d,3px 3px 0 #2a1b1d,0 4px 12px #000a}
&ov.is-pause &ov-big{font-size:max(44px,64u);color:#ffe07a}
&ov-sub{font:700 max(14px,16u)/1.2 var(--font-title);color:#ecd9ad}
&ov-note{font:600 max(11px,12u)/1.3 var(--font-body);color:#cdb38a}
&lead.is-win{align-self:flex-start;padding:3u 11u;border-radius:999px;background:linear-gradient(#ffe07a,#f6b23c);border:2px solid #3b2416;font:700 max(13px,14u)/1.2 var(--font-title);color:#2e1c13}
&pz{display:flex;flex-direction:column;gap:5px;margin:4px 0;padding:7px 9px;border-radius:10px;background:#7b4fa81f;border:1.5px solid #7b4fa866}
&pz-note{margin:0;font:600 max(10px,11u)/1.3 var(--font-body);color:#4a2c5e}
&pz-btn{min-height:40px;padding:0 10px;border-radius:999px;border:2px solid #3b2416;background:linear-gradient(#d9b8ff,#a979e0);color:#2a1340;font:700 max(11px,12u)/1 var(--font-title);cursor:pointer}
&pz-btn:disabled{opacity:.5;cursor:default}
&pz-left{font:700 max(10px,11u)/1.2 var(--font-body);color:#4a2c5e}
&pz-left.is-error{color:#9a3b26}
&pz-btn[hidden],&pz-left[hidden]{display:none}
&pz-finish{display:flex;flex-direction:column;gap:5px}
&pz-finish:empty{display:none}
&pz-note.is-finish{font-weight:700;color:#3b2416}
&pz-btn.is-finish{min-height:44px;background:linear-gradient(#ffe07a,#f6b23c);color:#2e1c13;box-shadow:0 2px 0 #3b2416}
&toast{position:fixed;z-index:330;left:50%;top:calc(env(safe-area-inset-top,0px) + 10px);transform:translateX(-50%);display:flex;align-items:center;gap:8px;max-width:calc(100vw - 32px);padding:6px 8px 6px 12px;border-radius:14px;background:linear-gradient(#3a2414f2,#2a170cf2);border:2px solid #c9963c;box-shadow:0 6px 16px #000a;color:#fff3d6;font:600 13px/1.25 var(--font-body)}
&toast-text{min-width:0}
&toast-go{flex:none;min-height:40px;padding:0 12px;border-radius:999px;border:2px solid #2a170c;background:linear-gradient(#ffe07a,#f6b23c);color:#2e1c13;font:700 13px/1 var(--font-title);cursor:pointer}
&toast &link{color:#ffd76a;margin:0}
&car{display:flex;align-items:center;gap:0;min-width:0;flex:none}
&car-track{position:relative;flex:1 1 auto;min-width:0;display:flex;align-items:flex-start;gap:0;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;padding:max(22px,26u) 0 6px;-webkit-overflow-scrolling:touch}
&car-track::-webkit-scrollbar{display:none}
&car-track::before,&car-track::after{content:"";flex:none;width:33%}
&car-item{flex:none;scroll-snap-align:center;width:34%;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;border:0;background:none;cursor:pointer;color:#efe0b8;font:inherit;text-align:center}
&car-item.is-locked{cursor:default;opacity:.6}
&car-pic{position:relative;display:block;width:100%;height:max(116px,142u);transform:scale(.78);transform-origin:50% 72%;transition:transform .25s ease-out,filter .25s}
&car-item.is-on &car-pic{transform:scale(1.32);transform-origin:50% 82%;filter:drop-shadow(0 0 10px #6fe3c45c) drop-shadow(0 4px 6px #0008)}
&car-pic canvas{display:block;width:100%;height:100%}
&car-item.is-before &car-pic{transform-origin:92% 72%}
&car-item.is-after &car-pic{transform-origin:8% 72%}
&car-item.is-before &car-label,&car-item.is-after &car-label{align-self:center;max-width:96%}
&car-label{display:block;max-width:100%;margin-top:-10u;font:600 max(10px,11u)/1.2 var(--font-title);color:#d9c99f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&car-item.is-on &car-label{position:relative;max-width:none;margin:6u -40% 0;padding:0 4px;overflow:visible;font-size:max(13px,15u);color:#f6e7c0;text-shadow:0 1px 0 #06120f}
&car-boss{position:absolute;left:50%;bottom:6%;transform:translateX(-50%);padding:1px 6px;border-radius:999px;background:#0a201dcc;color:#ffe07a;font:700 9px/1.2 var(--font-body);white-space:nowrap}
&car-lock{position:absolute;inset:0;display:grid;place-items:center}
&car-lock svg{width:24px;height:24px}
&rule{display:none}
&sheet.is-new &rule{display:block;position:relative;flex:1 1 auto;align-self:center;height:1px;margin:0 10u;background:linear-gradient(90deg,#c9a24a33,#c9a24a 10%,#c9a24a 90%,#c9a24a33)}
&sheet.is-new &rule::after{content:"";position:absolute;left:50%;top:50%;width:7px;height:7px;transform:translate(-50%,-50%) rotate(45deg);background:#f0cd6e;box-shadow:0 0 6px #e8c06299}
&rep{display:inline-flex;align-items:center;gap:4px;font:700 max(11px,12u)/1.1 var(--font-body);color:#6b4a30;white-space:nowrap}
&rep[hidden]{display:none}
&rep-ico{flex:none;display:block;width:18px;height:18px}
&rep-ico svg{display:block;width:100%;height:100%}
%%sub-head>&rep{margin:0 8u 0 auto}
&sheet.is-new %%sub-head>&rep{margin:0 8u 0 0;color:#e8d7aa}
&rep.is-cost{font-size:max(10px,11u);font-weight:600}
&rep.is-cost &rep-ico{width:15px;height:15px}
&saloon &rep{color:#ffd76a}
&help{flex:none;position:relative;z-index:0;width:max(44px,44u);height:max(44px,44u);margin-right:-6px;padding:0;display:grid;place-items:center;background:none;border:0;box-shadow:none;font:700 max(16px,17u)/1 var(--font-title);color:var(--ink)}
&help[hidden]{display:none}
&help::before{content:"";position:absolute;z-index:-1;inset:max(0px,calc(50% - 15u));border-radius:50%;background:radial-gradient(circle at 35% 30%,var(--parch-hi),var(--parch) 55%,var(--parch-lo));border:3px solid var(--ink);box-shadow:0 3px 0 var(--ink)}
&sheet.is-new %%sub-panel{color:#efe0b8;background:radial-gradient(ellipse at 30% 30%,#14332f,#0c2421 55%,#071714);border:2px solid #c9a24a;box-shadow:inset 0 0 0 3px #0b2522,inset 0 0 0 4.5px #c9a24a8c,inset 0 0 40px #020a09aa,0 8px 22px #000a}
&sheet.is-new %%panel-title{color:#f3e3b5;text-shadow:0 2px 0 #06120f}
&sheet.is-new &h{color:#efe0b8;font-size:max(13px,14u)}
&h.is-rule{display:flex;align-items:center;gap:10u}
&h.is-rule::after{content:"";flex:1 1 auto;height:1px;background:linear-gradient(90deg,#c9a24a,#c9a24a40)}
&sheet.is-new &note{color:#d8c9a3}
&sheet.is-new &note.is-error{color:#ffb38f}
&cols.is-new{grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:14u}
&line{display:grid;grid-template-columns:max(78px,92u) minmax(0,1fr);align-items:center;gap:3u 10u;padding:4u 0 0;border-top:1px solid #c9a24a4d}
&line &kitbox{display:contents}
&line &kit-hint{grid-column:1/-1}
&line &segs,&line &modes{justify-self:start}
&sheet.is-new &segs{border-color:#c9a24a;box-shadow:0 0 0 1px #06120f}
&sheet.is-new &seg{min-height:32px;padding:0 10u;font-size:max(10.5px,11u);white-space:nowrap;background:#f3e7cf;color:#3b2416}
&sheet.is-new &seg+&seg{border-left-color:#c9a24a}
&sheet.is-new &seg.is-on{background:linear-gradient(#ffd96a,#f0a92e);color:#2e1c13}
&sheet.is-new &mode{min-height:32px;padding:0 9u;font-size:max(10.5px,11u);border-color:#c9a24a;opacity:.55}
&cols.is-new>&col:first-child{overflow:hidden}
&cols.is-new &kit-hint{margin:0;font-size:max(10.5px,11u);line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&sheet.is-new &mode.is-on{opacity:1;box-shadow:0 0 0 2px #0f2e2a,0 0 0 3.5px #e8c062}
&col.is-friends{padding-left:12u;border-left:1px solid #c9a24a80}
&search{position:relative;flex:none;display:flex;align-items:center}
&search-ico{position:absolute;left:11px;top:50%;width:16px;height:16px;transform:translateY(-50%);pointer-events:none;color:#c9a24a;line-height:0}
&search-ico>svg{display:block;width:100%;height:100%}
&search-field{width:100%;min-width:0;height:38px;padding:0 12px 0 34px;border:1.5px solid #c9a24a99;border-radius:999px;background:#0a201dcc;color:#f3e3b5;font:600 max(14px,14u)/1.2 var(--font-body);outline:none;-webkit-appearance:none;appearance:none}
&search-field::placeholder{color:#d8c9a399}
&search-field:focus{border-color:#f0cd6e;box-shadow:0 0 0 2px #f0cd6e33}
&search-field::-webkit-search-cancel-button{display:none}
&friend[hidden]{display:none}
&sheet.is-new &friend{background:#0a201d66;border:1.5px solid #c9a24a99;border-radius:14px;color:#f3e3b5;font:600 max(12px,13u)/1.2 var(--font-title)}
&sheet.is-new &friend.is-on{background:#17433c;border-color:#f0cd6e}
&actions.is-end{margin-top:auto;justify-content:flex-end}
&create-foot{display:flex;flex-direction:column;align-items:flex-end;gap:2u;text-align:right}
&sheet.is-new &rep.is-cost{color:#d8c9a3}
@container marche-defi (max-height:400px){&car-pic{height:max(80px,96u)}&line{padding-top:2u}}
@container marche-defi (max-height:330px){&car-pic{height:60px}&kit-hint{display:none}&cols.is-new &car-track{padding-top:12px}&cols.is-new>&col:first-child>&h.is-rule{display:none}}
&gains{display:flex;flex-wrap:wrap;align-items:center;gap:3u 14u}
&gain.is-rep{display:inline-flex;align-items:center;gap:4px;color:#7a4b2a}
&gain.is-rep &rep-ico{width:17px;height:17px}
&table td.is-rep{color:#7a4b2a;font-weight:700}
&back{position:fixed;z-index:321;left:50%;top:22%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 16px;border-radius:14px;background:linear-gradient(#3a2414f2,#2a170cf2);border:2px solid #c9963c;box-shadow:0 6px 16px #000a;color:#fff3d6;font:600 12px/1.25 var(--font-body);pointer-events:none;animation:marche-defi-flash 2.6s ease-out both}
&back b{font:700 max(16px,18u)/1.1 var(--font-title);color:#ffd76a}
&pz-note.is-away{font-weight:700}
&return{z-index:331;padding:8px 10px 8px 14px;border-width:2.5px;box-shadow:0 0 0 2px #2a170c,0 6px 18px #000c,0 0 22px #ffb34766;font-size:14px}
&return &toast-text{font-weight:700}
&return.is-lost{border-color:#c8402f}
&return-actions{flex:none;display:flex;align-items:center;gap:6px}
.marche-inbox %%sub-panel{width:min(100%,640u);height:min(100%,420u);gap:6u}
.marche-inbox-list{display:flex;flex-direction:column;gap:5u;margin:0;padding:0;list-style:none}
.marche-inbox-row{width:100%;min-height:48px;display:flex;align-items:center;gap:9u;padding:4u 9u;border-radius:12px;border:2px solid #3b241633;background:#fffaf0b3;color:#3b2416;font:inherit;text-align:left}
button.marche-inbox-row{cursor:pointer}
.marche-inbox-row.is-unread{border-color:#c9963c;background:linear-gradient(#fff6d6,#f6e2a6)}
.marche-inbox-ico{flex:none;position:relative;width:30px;height:30px;border-radius:50%;border:2px solid #2a1b1d;background:radial-gradient(circle at 38% 30%,#3f8f7d,#1f5a4c 60%,#0f3229)}
.marche-inbox-ico.is-saloon{background:radial-gradient(circle at 50% 60%,#fff6c2,#ffb347 45%,#a8541a 80%)}
.marche-inbox-ico.is-round{background:radial-gradient(circle at 38% 30%,#d4503a,#8a2318 58%,#4a0f0b)}
.marche-inbox-ico.is-friend{background:radial-gradient(circle at 38% 30%,#3d6aa8,#1d3a66 58%,#10213f)}
.marche-inbox-row.is-unread .marche-inbox-ico::after{content:"";position:absolute;right:-3px;top:-3px;width:10px;height:10px;border-radius:50%;background:#c8402f;border:1.5px solid #fff6d6}
.marche-inbox-text{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:1px}
.marche-inbox-line{font:700 max(12px,13u)/1.25 var(--font-title)}
.marche-inbox-when{font:600 max(10px,11u)/1.2 var(--font-body);color:#6b4a30}
.marche-inbox-go{flex:none;min-height:40px}
/* The level gate (« Niveau 10 requis pour créer une battle »): « Créer » in place, locked. */
&lock{flex:none;display:inline-block;width:1.15em;height:1.15em;vertical-align:-.2em;margin-right:4px;color:#7a4b2a}
&lock svg{display:block;width:100%;height:100%}
&lock-line{display:flex;align-items:center;gap:2px;font-weight:700;color:#7a4b2a}
&lock-text{font-style:normal!important;font-weight:700!important;color:#8a3b26!important}
&empty-picbox{position:relative;flex:none;display:grid;place-items:center}
&empty-picbox>&lock{position:absolute;right:-4px;bottom:-4px;width:20px;height:20px;margin:0;padding:2px;border-radius:50%;background:#fff6dc;box-shadow:0 1px 2px #3b241666}
&empty-card.is-locked{border-style:dashed;background:linear-gradient(#f4ecdc,#e6d6b8);box-shadow:none}
&empty-card.is-locked &empty-ico{filter:grayscale(.85) opacity(.7)}
&empty-card.is-locked &empty-ctext>b{color:#7a6650}
%%button.is-blocked{filter:saturate(.15) brightness(.92);opacity:.8}
/* The saloon: the rule said (no switch), « L'équipement de tous » wrapping, never sideways. */
&saloon %%sub-head>%%panel-title{flex:none}
&saloon &col.is-side{min-width:0}
&saloon-rule{margin:0;font:700 max(12px,13u)/1.2 var(--font-title);color:#ffd76a}
&saloon-shared{flex-wrap:wrap;row-gap:3u;min-width:0}
&saloon-shared>&h{flex:1 1 auto;min-width:0}
&saloon-shared>&kit{flex:none;margin-left:auto;gap:2px}
&saloon-shared &kit.is-big &kit-part{width:32px;height:32px}
&saloon-top{min-width:0}
&saloon-count{min-width:0}
&saloon-mine:empty{display:none}
/* « Mon équipement » (ui/defi/loadout.ts): the block in the saloon, the sheet over it. */
&lo-open{flex:none;width:100%;min-height:48px;display:flex;align-items:center;gap:8u;padding:4u 10u;border-radius:12px;border:1.5px solid #ffd76a;background:linear-gradient(#4a3016e6,#2a170ce6);box-shadow:inset 0 1px 0 #ffd76a33;color:#fff3d6;font:inherit;text-align:left;cursor:pointer}
&lo-open.is-pressed{transform:translateY(1px)}
&lo-text{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:1px}
&lo-h{font:700 max(10px,11u)/1.1 var(--font-body);color:#ecd3a3;letter-spacing:.03em;text-transform:uppercase}
&lo-name{font:700 max(12px,13u)/1.2 var(--font-title);color:#fff3d6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&lo-pics{flex:none;display:flex;align-items:center;gap:4u}
&lo-pics &lo-medal{width:30px;height:30px}
&lo-pics &lo-cards{height:32px}
&lo-change{flex:none;font:700 max(11px,12u)/1 var(--font-body);color:#ffd76a;text-decoration:underline;text-underline-offset:3px}
&lo-medal{flex:none;display:block;width:44px;height:44px}
&lo-cards{flex:none;display:inline-flex;align-items:center;height:48px}
&lo-card{display:block;height:100%;width:auto;object-fit:contain;filter:drop-shadow(0 1px 2px #0008)}
&lo-cards.is-both &lo-card+&lo-card{margin-left:-28%}
&lo-sheet %%sub-panel{width:min(100%,700u);height:auto;max-height:100%}
&lo-sheet %%sub-body{gap:8u}
&lo-cols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12u}
&lo-group{min-width:0;display:flex;flex-direction:column;gap:5u}
&lo-opts{flex:1 1 auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6u}
&lo-opt{min-width:0;min-height:44px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3u;padding:6u 4u;border-radius:12px;border:1.5px solid #8a6a3a80;background:linear-gradient(#3a2414e6,#2a170ce6);color:#ecd3a3;font:700 max(10.5px,11.5u)/1.15 var(--font-body);text-align:center;cursor:pointer}
&lo-opt.is-on{border-color:#ffd76a;background:linear-gradient(#5a3e14,#33200c);box-shadow:0 0 0 2px #ffd76a55,0 0 14px #ffb34744;color:#fff3d6}
&lo-opt.is-pressed{transform:translateY(1px)}
&lo-opt-name{display:block;max-width:100%;overflow-wrap:anywhere}
&lo-foot{display:flex;align-items:center;gap:10u;min-width:0}
&lo-foot>&note{flex:1 1 auto;min-width:0}
&lo-shared{flex:none;display:flex;align-items:center;gap:6u;padding:4u 8u;border-radius:10px;background:#00000033;border:1px dashed #c9963c99}
/* « Bénédiction »: one row - its label, the four painted medallions, the chosen one's name and bonus. */
&lo-group.is-bless{flex-direction:row;align-items:center;gap:10u;min-width:0}
&lo-group.is-bless>&h{flex:none}
&lo-opts.is-bless{flex:none;display:flex;gap:6u}
&lo-opt.is-bless{flex:none;width:54px;min-height:54px;padding:3px}
&lo-bl{flex:none;display:block;width:30px;height:30px}
&lo-opt &lo-bl{width:44px;height:44px}
&lo-bl-img{display:block;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 1px 2px #0008)}
&lo-bl-info{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:2px}
&lo-bl-name{font:700 max(12px,13u)/1.2 var(--font-title);color:#fff3d6}
&lo-bl-bonus{font:700 max(11px,12u)/1.2 var(--font-body);color:#ffd76a}
@container marche-defi-s (max-height:330px){&lo-medal{width:38px;height:38px}&lo-opt &lo-cards{height:40px}&lo-opt{padding:4u 3u}&saloon-hint{display:none}&lo-opt.is-bless{width:48px;min-height:48px;padding:2px}&lo-opt &lo-bl{width:40px;height:40px}}
@container marche-defi-s (max-width:620px){&lo-foot{flex-wrap:wrap}&lo-pics{display:none}}
.marche-inbox-ico.is-friend_answer{background:radial-gradient(circle at 38% 30%,#4fa86a,#23663a 58%,#103a1e)}
.marche-inbox-row.is-declined .marche-inbox-ico{background:radial-gradient(circle at 38% 30%,#a99a86,#6b5a48 58%,#3d3127)}
.marche-inbox-acts{flex:none;display:flex;align-items:center;gap:6u}
.marche-inbox-acts .marche-button{min-width:44px}
.marche-inbox-acts .marche-button:disabled{filter:saturate(.3) brightness(.92);cursor:default}
.marche-inbox-done{display:inline-flex;align-items:center;min-height:44px;padding:0 4u;font:700 max(12px,13u)/1.2 var(--font-title);color:#6b4a30;white-space:nowrap}
.marche-inbox-done.is-accepted{color:#23663a}
.marche-inbox-done::before{content:"✓";margin-right:4u;font-size:1.15em}
.marche-inbox-done:not(.is-accepted)::before{content:"✕";font-size:.95em}
.marche-inbox-note{font:600 max(10px,11u)/1.25 var(--font-body);color:#a8321f}
/* A battle's page (the player's mockup; src/online/ui/defi-views.ts): the battles as cards on the
   left (a picture of the arena, its name, « Arène 29 · 2 joueurs », the chosen one gold), the chosen
   one's painted banner (its name, setting and rule; its players and state), its actions centred,
   then « Manche N » / « Classement », folder tabs over one table that scrolls. The tabs and the
   arrows are 44 px tall, their faces 30: the rest lies over the table's head (--tab-h). */
&title-ico{display:inline-block;width:1.05em;height:1.05em;margin-right:.3em;vertical-align:-.16em}
&title-ico>svg{display:block;width:100%;height:100%}
&sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
&cols.is-page{grid-template-columns:minmax(0,.43fr) minmax(0,1fr);gap:0}
&cols.is-page>&col:first-child{overflow:hidden;padding:2u 10u 0 1px;border-right:1.5px solid #3b24161f;gap:7u}
&cols.is-page>&col+&col{--tab-h:max(30px,32u);padding:2u 1px 0 10u;gap:6u;overflow-x:hidden}
&cols.is-page &list{gap:6u;padding:1px 1px 4px}
&cols.is-page>&col>%%button{flex:none;width:100%}
&new-plus{font:700 1.3em/1 var(--font-body);margin-right:.1em}
&cols.is-page &row{position:relative;min-height:max(52px,58u);gap:8u;padding:5u 7u 5u 5u;border-radius:11px;border:2px solid #3b241626;background:#fffaf0b3;box-shadow:none}
&cols.is-page &row.is-on{border-color:#b88a2e;background:linear-gradient(#fff2bf,#f7d47c);box-shadow:inset 0 0 0 1.5px #fff7d6,0 2px 0 #8a6420}
&row-pic{position:relative;flex:none;width:max(48px,58u);height:max(40px,46u);border-radius:7px;overflow:hidden;background:radial-gradient(ellipse at 50% 70%,#6b4a30,#2a1a12 75%);box-shadow:inset 0 0 0 1.5px #3b2416b3}
&row-pic>&car-pic{width:100%;height:100%;transform:scale(1.18);transform-origin:50% 60%;transition:none}
&row-pic &car-boss{display:none}
&cols.is-page &row-name{font-size:max(13px,15u);line-height:1.1;color:#2e1c13;white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
&cols.is-page &row-sub{font-size:max(11px,12u);color:#5b3d28}
&cols.is-page &row-tag{position:absolute;left:max(46px,56u);top:3px;width:11px;height:11px;padding:0;border-radius:50%;border:2px solid #fff6dc;box-shadow:0 1px 2px #3b241699}
&row-tag.is-turn{background:#d68a1c}
&banner{position:relative;flex:none;display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,auto);grid-template-rows:minmax(0,1fr) auto;grid-template-areas:"info sep who" "info sep state";gap:5u 12u;min-height:max(88px,104u);padding:7u 14u 7u 16u;border-radius:12px;overflow:hidden;color:#fff3d6;background:linear-gradient(90deg,#120a06e6,#120a06b3 34%,#120a0626 60%,#120a0673 76%,#120a06c7),var(--ban-art,none) 50% var(--ban-y,30%)/155% auto no-repeat,#3a2416;box-shadow:inset 0 0 0 1.5px #0000004d,0 2px 6px #3b241666}
&col.is-loading{opacity:.6;transition:opacity .2s}
&ban-info{grid-area:info;min-width:0;display:flex;flex-direction:column;justify-content:center;gap:2u;text-shadow:0 1px 2px #000d,0 0 10px #0009}
&ban-title{margin:0 0 1u;font:700 max(19px,25u)/1.08 var(--font-title);color:#fff6df;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&ban-set{font:700 max(13px,15u)/1.2 var(--font-title);color:#ffe9b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&banner &card-sub{font:600 max(11.5px,13u)/1.25 var(--font-body);color:#f4e4c4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&ban-sep{grid-area:sep;width:1.5px;margin:2u 0;background:linear-gradient(#ffe9b800,#ffe9b8b3 18%,#ffe9b8b3 82%,#ffe9b800)}
&ban-players{grid-area:who;align-self:center;min-height:0;max-height:100%;display:grid;gap:4u 10u;margin:0;padding:0;list-style:none;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}
&ban-players.is-many{grid-template-columns:repeat(2,minmax(0,auto));gap:3u 8u}
&ban-p{display:flex;align-items:center;gap:7u;min-width:0;font:700 max(13px,15u)/1.1 var(--font-title);color:#fff3d6;text-shadow:0 1px 2px #000d}
&ban-p>&ban-av{width:max(28px,32u);height:max(28px,32u);filter:drop-shadow(0 1px 2px #000a)}
&ban-players.is-many &ban-p>&ban-av{width:max(22px,24u);height:max(22px,24u)}
&ban-players.is-many &ban-p{font-size:max(11.5px,12.5u)}
&ban-name{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&state{grid-area:state;justify-self:center;align-self:end;padding:3u 11u 4u;border-radius:999px;border:1.5px solid #ffcdbd;background:linear-gradient(#d9503c,#b0301f);box-shadow:0 1px 3px #000a;font:700 max(12px,13u)/1.15 var(--font-title);color:#fff;text-shadow:0 1px 0 #0006;white-space:nowrap}
&state.is-live{border-color:#e2cbff;background:linear-gradient(#9064be,#6a3f98)}
&state.is-done{border-color:#cdeab6;background:linear-gradient(#4f9032,#346a1f)}
&state.is-turn{border-color:#ffe3a8;background:linear-gradient(#e49a2a,#bf7414)}
&actions.is-page{flex:none;justify-content:center;gap:4u 12u;min-width:0}
&actions.is-page>%%button{flex:0 1 auto;min-width:0}
&actions.is-page>%%button{--bh:36px}
&actions.is-page>%%button.is-secondary{min-width:max(72px,84u);font-size:max(12.5px,13.5u)}
&actions.is-page>#marche-defi-play{--bh:36px;min-width:min(34%,160u);font-size:max(13.5px,15u)}
&actions.is-page>&link{margin:0;padding:0 8u;font:700 max(13px,14.5u)/1 var(--font-title);color:#5b3d28}
&actions.is-page>&link.is-danger{color:#9a3b26}
&actions.is-page>&note{flex:1 1 auto;min-width:0;text-align:center;font-size:max(11px,12u)}
&actions.is-page>&rkit{flex-wrap:nowrap;gap:0}
&actions.is-page>&rkit~#marche-defi-play{min-width:0}
&actions.is-page>&rkit>&h,&actions.is-page>&rkit &kit-hint{display:none}
&actions.is-page>&rkit &seg{padding:0 9u;font-size:max(12px,13u)}
&cols.is-page &col>#marche-defi-status:empty{display:none}
&cols.is-page &col>#marche-defi-status{flex:none;text-align:center}
&tabbed{flex:1 1 auto;min-height:0;display:flex;flex-direction:column}
&dtabs{position:relative;z-index:1;flex:none;display:flex;align-items:flex-start;gap:5u;height:44px;margin-bottom:calc(var(--tab-h) - 44px);padding:0 0 0 8u;pointer-events:none}
&dtabs::after{content:"";position:absolute;left:0;right:0;top:calc(var(--tab-h) - 1.5px);height:1.5px;background:#8a6a3a}
&dtab,&rnav{pointer-events:auto;flex:none;min-width:44px;height:44px;display:flex;align-items:flex-start;padding:0;border:0;background:none;font:inherit;cursor:pointer}
&dtab-face{position:relative;z-index:1;display:flex;align-items:center;height:var(--tab-h);padding:0 18u;border:1.5px solid #8a6a3a;border-radius:9px 9px 0 0;background:linear-gradient(#f8efd9,#ecdcb9);font:700 max(13px,15u)/1 var(--font-title);color:#4a3020;white-space:nowrap}
&dtab.is-on>&dtab-face{border-color:#8a6420;border-bottom-color:#f7d47c;background:linear-gradient(#ffe590,#f7d47c);color:#2e1c13;box-shadow:inset 0 1px 0 #fff7d6}
&dtab.is-pressed>&dtab-face{filter:brightness(.95)}
&rnavs{flex:none;display:flex;margin-left:auto}
&rnav{justify-content:center}
&rnav-face{display:grid;place-items:center;width:28px;height:calc(var(--tab-h) - 4px);border-radius:8px;border:1.5px solid #8a6a3a;background:#fffaf0;font:700 20px/1 var(--font-title);color:#3b2416}
&rnav.is-off{opacity:.35;cursor:default}
&pane{flex:1 1 auto;min-height:44px;padding:0 1px 2px}
&pane &table{font:700 max(13px,15u)/1.2 var(--font-title);color:#2e1c13}
&pane &table th{height:max(26px,28u);padding:0 9u;border-bottom:1.5px solid #8a6a3a73;background:#e9d7b0;font:700 max(11.5px,13u)/1.2 var(--font-title);color:#3b2416}
&pane &table th.is-title{padding-left:12u;color:#3b2416}
&pane &table td{height:max(32px,34u);padding:0 9u;border-bottom:1.5px solid #8a6a3a40}
&pane &table tbody tr:last-child td{border-bottom-color:#8a6a3a99}
&pane &table :is(th,td).is-score{border-left:0;border-right:0;border-top:0;padding-left:9u;padding-right:9u}
&pane &table thead th.is-score{background:#e9d7b0}
&pane &table tbody tr:last-child td.is-score{border-bottom:1.5px solid #8a6a3a99}
&pane &table td.is-place{width:1%;padding:0 2u 0 8u;text-align:center;color:#8a6a4a;font:700 max(14px,16u)/1 var(--font-title)}
&pane &table tr.is-me td{background:none;font-weight:700}
&pane &table td.is-rep{color:#3b2416}
&pane &table td.is-rep.is-gain{color:#b07a00}
&pane>&h{margin:6u 0 3u}
&pane>&note{padding:8u 12u}
&medal{position:relative;display:inline-grid;place-items:center;width:max(28px,30u);height:max(28px,30u);vertical-align:middle}
&medal>svg{position:absolute;inset:0;width:100%;height:100%}
&medal>b{position:relative;margin-top:-1px;font:700 max(13px,15u)/1 var(--font-title);color:#5a3a10}
@container marche-defi (max-width:760px){&cols.is-page{grid-template-columns:minmax(0,.46fr) minmax(0,1fr)}&cols.is-page>&col:first-child{padding-right:7u}&cols.is-page>&col+&col{padding-left:8u}&row-pic{width:42px;height:36px}&cols.is-page &row{gap:6u;padding:4u 5u 4u 4u}&cols.is-page &row-tag{left:40px}&cols.is-page &row-name{font-size:max(12.5px,13u)}&cols.is-page &row-sub{font-size:max(10.5px,11u)}&ban-title{font-size:max(17px,20u)}&banner{padding:6u 10u 6u 12u;column-gap:9u}&actions.is-page{column-gap:7u}&actions.is-page>#marche-defi-play{min-width:0}&actions.is-page>%%button{padding:0 9u}&actions.is-page>%%button.is-secondary{min-width:0}&actions.is-page>&link{padding:0 4u}&pane &table :is(th,td),&pane &table :is(th,td).is-score{padding-left:6u;padding-right:6u}&dtab-face{padding:0 12u}}
@container marche-defi (max-height:340px){&cols.is-page>&col+&col{--tab-h:28px;gap:4px}&actions.is-page{column-gap:7u}&actions.is-page>%%button{padding:0 9u}&actions.is-page>%%button.is-secondary{min-width:0}&actions.is-page>&link{padding:0 4u}&cols.is-page>&col:first-child{gap:5px}&banner{grid-template-areas:"info sep who" "state sep who";grid-template-rows:auto auto;align-content:center;row-gap:3px;min-height:0;padding:4px 10px 4px 12px}&ban-info{flex-flow:row wrap;justify-content:flex-start;align-content:center;align-items:baseline;gap:1px 0}&ban-title{flex:1 0 100%;margin:0;font-size:17px}&ban-set,&banner &card-sub{font-size:12px}&banner &card-sub::before{content:"\\a0·\\a0"}&state{justify-self:start;padding:1px 9px 2px;font-size:11.5px}&ban-p>&ban-av{width:22px;height:22px}&ban-players.is-many &ban-p>&ban-av{width:20px;height:20px}&ban-players{gap:2px 8px;max-height:46px}&ban-p{font-size:12.5px;gap:5px}&cols.is-page &row{min-height:46px}&row-pic{width:40px;height:34px}&cols.is-page &row-tag{left:38px}&pane &table th{height:24px}&pane &table td{height:28px}&medal{width:24px;height:24px}&medal>b{font-size:13px}}
`),a="marche-defi-css";function t(){if(typeof document>"u"||document.getElementById(a))return;const e=document.createElement("style");e.id=a,e.textContent=i,document.head.append(e)}export{t as e};

