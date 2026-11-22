import{ay as a}from"./index-rRZdLVLD.js";import{c4 as i}from"./scene-kit-DIfRz-Nk.js";import{e as t}from"./ornaments-xKM4QbxT.js";import{ensureCss as n}from"./save-panel-C_rkB2Nt.js";const o=e=>e.replace(/(-?\d*\.?\d+)u\b/g,"calc($1*var(--u))").replace(/&(?=[a-z])/g,".marche-ol-"),r=o(`
.marche-online .marche-sub-panel{width:min(100%,880u);height:min(100%,480u)}
.marche-online .marche-sub-body{container:ol-body/size;display:flex;flex-direction:column;gap:var(--menu-gap);padding:2px 2px 10px}
.marche-online .marche-sub-body>*{flex:none}
.marche-online .marche-sub-body.is-split{overflow:hidden;padding:0 2px 2px}
.marche-online .marche-sub-body.is-split>*{flex:1 1 auto;min-height:0}
.marche-online .marche-button{min-width:0;--bh:max(34px,34u);padding:0 max(10px,11u);font-size:var(--menu-btn)}
.marche-online .marche-button[hidden]{display:none}
.marche-online .marche-button-label{white-space:normal;text-align:center;line-height:1.15}
.marche-online .marche-button .marche-ico{flex:none;width:max(13px,14u);height:max(13px,14u)}
&rep{flex:none;margin-right:max(4px,4u);display:inline-flex;align-items:center;gap:max(5px,5u);height:max(30px,30u);padding:0 max(12px,13u) 0 max(5px,5u);background:#1e1214d6;border:2px solid #c9973e;border-radius:999px;box-shadow:0 0 0 2px #2a1b1d,0 4px 8px #00000073;color:#ffe39a;font:700 max(14px,15u)/1 var(--font-body);white-space:nowrap}
&rep[hidden]{display:none}
&rep .marche-defi-rep-ico{flex:none;display:block;width:max(20px,21u);height:max(20px,21u)}
&rep .marche-defi-rep-ico>svg{display:block;width:100%;height:100%}
&lead{margin:0;font:600 var(--menu-text)/1.3 var(--font-body);color:var(--ink-soft)}
&note{margin:0;font:600 max(11px,12u)/1.3 var(--font-body);color:var(--ink-soft);font-style:italic}
&label{display:flex;flex-direction:column;gap:5px;font:700 var(--menu-text)/1.2 var(--font-body);color:var(--ink)}
&field{display:block;box-sizing:border-box;width:100%;min-width:0;height:44px;margin:0;padding:0 10px;border:2px solid var(--ink);border-radius:10px;background:#fffaf0;color:#2a1b1d;font:600 16px/1.2 var(--font-body);-webkit-user-select:text!important;user-select:text!important;-webkit-touch-callout:default!important;pointer-events:auto;outline:none;box-shadow:inset 0 2px 4px #3b241626}
&field:focus{border-color:#c0631f;box-shadow:0 0 0 2px #f6c34399,inset 0 2px 4px #3b241626}
&field::placeholder{color:#8a6a4a}
&field.is-key{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.04em}
&hint{min-height:1.25em;margin:0;font:700 max(12px,12.5u)/1.25 var(--font-body);color:#3f7d3a}
&hint:empty{min-height:0}
&hint.is-error{color:#a3271a}
&row{display:flex;flex-wrap:wrap;align-items:flex-end;gap:var(--menu-gap)}
&row>&label{flex:1 1 180px;min-width:0}
&actions{display:flex;flex-wrap:wrap;gap:var(--menu-gap)}
&actions>.marche-button{flex:1 1 auto}
&grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),1fr));gap:var(--menu-gap)}
&key{display:block;width:100%;box-sizing:border-box;height:auto!important;min-height:56px;padding:8px 10px!important;text-align:center;font:800 max(20px,28u)/1.25 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace!important;letter-spacing:.06em;word-break:normal!important;white-space:nowrap;overflow:hidden;color:#2a1b1d}
&advice{margin:0;padding:8px 12px;border-left:4px solid #c0631f;background:#fff6dccc;border-radius:6px;font:700 var(--menu-text)/1.3 var(--font-body);color:#8a2f1f}
&card{display:flex;flex-direction:column;gap:var(--menu-gap);padding:max(10px,12u) var(--menu-pad);border:2px solid #c9a865;border-radius:14px;background:linear-gradient(#fdf6e6,#f6e7c4);box-shadow:inset 0 0 0 2px #fffaf0,0 2px 0 #b9966255}
&who{display:flex;align-items:center;gap:max(10px,14u);min-width:0}
&who-text{flex:1;min-width:0;display:flex;flex-direction:column}
&pseudo{font:700 max(15px,18u)/1.15 var(--font-title);color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
&card &pseudo{font-size:max(18px,21u)}
&title{font:600 var(--menu-small)/1.2 var(--font-body);color:var(--ink-soft)}
&rank{flex:none;display:flex;align-items:center;gap:7px;padding:5px 12px 5px 8px;border-radius:999px;background:#3b2416;color:#ffe39a;font:700 var(--menu-small)/1.25 var(--font-body);white-space:nowrap;text-align:center}
&rank-ico{flex:none;display:block;width:max(22px,24u);height:max(22px,24u);line-height:0}
&rank-ico>svg{display:block;width:100%;height:100%}
&rank-text{display:block}
&rank small{display:block;font-size:.78em;font-weight:600;color:#ecd9ad}
&lv{flex:none;position:relative;display:inline-block;width:max(34px,40u);height:max(34px,40u);border-radius:50%;background:radial-gradient(circle at 35% 30%,#fffaf0,#f3e3b5 55%,#dcbf82);border:2px solid #c9973e;box-shadow:0 0 0 1.5px #2a1b1d;--lv-fs:max(11px,12u)}
&lv[data-lv]::after{bottom:50%;transform:translate(-50%,50%)}
&lv.is-small{width:30px;height:30px;--lv-fs:11px}
&stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,140px),1fr));gap:var(--menu-gap)}
&stat{min-width:0;display:flex;flex-direction:column;gap:2px;padding:6px 10px;border-radius:10px;background:#3b24160f;border:2px solid #3b241633}
&stat-label{font:700 var(--menu-small)/1.15 var(--font-body);color:#6b4a30}
&stat-value{font:700 max(14px,15.5u)/1.15 var(--font-title);color:#3b2416;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&bar{position:relative;display:block;height:6px;margin-top:2px;border-radius:999px;background:#3b241626;box-shadow:inset 0 1px 2px #3b241659;overflow:hidden}
&bar>span{position:absolute;left:0;top:0;bottom:0;width:calc(var(--p,0)*100%);border-radius:999px;background:linear-gradient(#ffe07a,#d48a1c)}
&flag{margin:0;padding:8px 12px;border-radius:10px;background:#fff1c9;border:2px dashed #c9973e;font:600 var(--menu-text)/1.3 var(--font-body);color:#6b4a30}
&eye{flex:none;align-self:center;display:grid;place-items:center;width:44px;height:44px;margin:0 -6px 0 -4px;padding:0;border:0;background:none;cursor:pointer;touch-action:none;-webkit-tap-highlight-color:transparent}
&eye-disc{display:block;width:max(32px,34u);height:max(32px,34u);padding:max(5px,5.5u);box-sizing:border-box;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fffaf0,#f3e3b5 60%,#dcbf82);border:2px solid #c9973e;box-shadow:0 0 0 1.5px #2a1b1d,0 2px 0 #3b241640;line-height:0;transition:transform .1s}
&eye-disc>svg{display:block;width:100%;height:100%}
&eye[aria-pressed=true] &eye-disc{background:radial-gradient(circle at 35% 30%,#efe3c8,#d9c59c 60%,#bfa478);border-color:#8a6a3c}
&eye.is-pressed &eye-disc{transform:translateY(1px) scale(.95)}
&eye[aria-busy=true] &eye-disc{opacity:.7}
&solo{display:flex;justify-content:center}
&solo>.marche-button{flex:0 1 auto;min-width:min(100%,240px)}
&confirm{display:flex;flex-direction:column;gap:8px;padding:10px 12px;border:2px solid #a3271a;border-radius:12px;background:#ffe9e1}
&confirm p{margin:0;font:700 var(--menu-text)/1.3 var(--font-body);color:#8a2f1f}
&section{margin:6px 0 0;padding-bottom:2px;font:700 var(--menu-h)/1.2 var(--font-title);color:var(--ink);border-bottom:2px solid #3b241633}
&empty{margin:6px 0;font:600 var(--menu-text)/1.3 var(--font-body);color:var(--ink-soft);text-align:center}
&offline{display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px 12px;text-align:center}
&offline p{margin:0;font:700 max(13px,14u)/1.3 var(--font-body);color:#8a2f1f}
&skel{display:flex;flex-direction:column;gap:6px}
&skel>span{display:block;height:max(18px,22u);border-radius:8px;background:linear-gradient(90deg,#3b241614 0,#3b24162e 40%,#3b241614 80%);background-size:200% 100%;animation:marche-ol-shimmer 1.2s linear infinite}
&skel>span:nth-child(2){width:80%}&skel>span:nth-child(3){width:60%}
@keyframes marche-ol-shimmer{to{background-position:-200% 0}}
@media (prefers-reduced-motion:reduce){&skel>span{animation:none}}
.marche-online-camp-ico{color:#3b2416}

&av{position:relative;display:inline-block;flex:none;width:48px;height:48px;border-radius:50%;line-height:0}
&av>img{position:relative;display:block;width:100%;height:100%;border-radius:50%;object-fit:contain;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;pointer-events:none;background:radial-gradient(43.5% 43.5% at 49.8% 50%,#6f93c0,#34507a 96%,#34507a00 100%)}
&av:is(.is-custom,.is-bare)>img{position:absolute;left:8%;top:8%;width:84%;height:84%;object-fit:cover;background:#1c1420}
&av:is(.is-custom,.is-bare)::after{content:"";position:absolute;inset:5%;border-radius:50%;border:max(2.5px,3.5u) solid #e8b84a;box-shadow:0 0 0 1.5px #2a1b1d,inset 0 0 0 1.5px #2a1b1d,inset 0 2px 4px #0006;pointer-events:none}

&split{display:grid;grid-template-columns:minmax(0,1.6fr) auto minmax(0,1fr);height:100%;min-height:0;column-gap:8u}
&split>.marche-orn-vdiv{width:12u}
&main{display:flex;flex-direction:column;min-width:0;min-height:0;gap:max(6px,7u)}
&main>*{flex:none}
&side{display:flex;flex-direction:column;align-items:center;min-width:0;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:2u 8u 8u;gap:max(5px,7u)}
&side>*{flex:none}
&scroll{flex:1 1 auto!important;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 2px 4px}
&h{display:flex;align-items:center;justify-content:center;gap:8u;margin:0;min-width:0}
&h>h3{margin:0;min-width:0;font:700 max(16px,19u)/1.1 var(--font-title);color:#2a1b1d;text-shadow:0 1px 0 #fff9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&h .marche-orn-laurel{width:max(11px,12u);height:max(23px,26u)}
&h.is-small>h3{font-size:max(15px,17u)}
&h.is-small .marche-orn-laurel{width:max(10px,11u);height:max(21px,23u)}
&h.is-left{justify-content:flex-start}
&h.is-left::after{content:"";flex:1 1 0;min-width:20px;height:1.5px;margin-left:6u;background:linear-gradient(90deg,#c9963a,#c9963a00)}
&h.is-left .marche-orn-laurel.is-right{display:none}

&seg{display:flex;flex-wrap:wrap;gap:4px;min-width:0}
&seg>button{position:relative;z-index:0;flex:none;min-height:44px;min-width:44px;padding:0 max(9px,10u);background:none;border:0;color:#5b3d28;font:700 max(11px,11u)/1 var(--font-btn);letter-spacing:.02em;white-space:nowrap;cursor:pointer}
&seg>button::before{content:"";position:absolute;z-index:-1;inset:max(0px,calc(50% - 17u)) 0;border-radius:7px;background:#3b241612;border:2px solid #3b241659}
&seg>button[aria-pressed=true]{color:#f6e7c1;text-shadow:0 1px 0 #2a1b1d}
&seg>button[aria-pressed=true]::before{background:linear-gradient(#7a5236,#5a3a24);border-color:#2a1b1d;box-shadow:inset 0 -4px 0 #321e12,inset 0 2px 0 #fff3,0 2px 3px #0006}
&seg>button.is-pressed{transform:translateY(2px)}
&boards{justify-content:center;flex-wrap:nowrap;gap:max(6px,10u)}
&boards>button{display:inline-flex;align-items:center;gap:5u;padding:0 max(10px,11u) 0 max(8px,9u);color:#3b2416;font-size:max(11px,11.5u)}
&boards>button::before{background:linear-gradient(#fdf5df,#f0dfb4);border-color:#bf9d63;box-shadow:inset 0 1px 0 #fff,0 2px 0 #a8875466}
&boards>button[aria-pressed=true]{color:#fff1cf}
&boards>button[aria-pressed=true]::before{background:linear-gradient(#64283c,#43172a 55%,#2e0e1d);border-color:#e0ad4a;box-shadow:0 0 0 1.5px #2a1b1d,0 3px 0 #2a1b1d,inset 0 1px 0 #ffffff26}
&boards .marche-ico{flex:none;width:max(13px,14u);height:max(13px,14u)}
&thead{display:flex;align-items:center;gap:4u;min-height:44px;padding:0 8u 0 0;border-radius:10px;background:linear-gradient(#ecd9ae,#e3c993);box-shadow:inset 0 1px 0 #fff9,0 1px 0 #b9966288;font:700 max(12px,14u)/1 var(--font-title);color:#3b2416}
&thead>.is-rank{flex:none;width:max(44px,52u);text-align:center}
&thead>.is-player{flex:1 1 auto;min-width:0;padding-left:max(4px,8u);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
&thead>.is-value{flex:none;min-width:max(52px,70u);text-align:right;padding-right:6u}
&scope{flex:none;gap:0;flex-wrap:nowrap}
&scope>button{min-height:44px;min-width:44px;padding:0 3px;border:none;background:none;box-shadow:none;color:#6b4a30;font:700 max(11px,11u)/1 var(--font-body)}
&scope>button::before{content:none}
&scope>button>span{display:inline-block;padding:3px 8px;border:1.5px solid #b99662;background:#fff8e8;color:#5b3d28}
&scope>button:first-child>span{border-radius:999px 0 0 999px;border-right:none}
&scope>button:last-child>span{border-radius:0 999px 999px 0}
&scope>button[aria-pressed=true]{background:none;box-shadow:none}
&scope>button[aria-pressed=true]>span{background:#5a2a3a;border-color:#5a2a3a;color:#fff1cf}
&refresh{flex:none;width:44px;height:44px;display:grid;place-items:center;padding:0;border:none;border-radius:50%;background:none;color:#5b3d28;font:700 20px/1 var(--font-body);cursor:pointer}
&refresh>span{display:grid;place-items:center;width:25px;height:25px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fffaf0,#f3e3b5 55%,#dcbf82);border:1.5px solid #b99662}
&refresh.is-pressed{transform:translateY(2px)}
&board{margin:0;padding:0;list-style:none;display:flex;flex-direction:column}
&line{position:relative;display:flex;align-items:center;gap:max(8px,10u);min-height:44px;padding:2px 8u 2px 0;color:#2a1b1d}
&line::after{content:"";position:absolute;left:4%;right:4%;bottom:0;height:1.5px;background:linear-gradient(90deg,#c9963a00,#c9963a8c 12%,#c9963a8c 88%,#c9963a00)}
&line:last-child::after{display:none}
&line.is-me{background:linear-gradient(90deg,#f6c34300,#f6c3435c 14%,#f6c3435c 86%,#f6c34300);border-radius:12px}
&line-rank{flex:none;width:max(44px,52u);display:grid;place-items:center;font:700 max(15px,17u)/1 var(--font-title);color:#5b3d28;font-variant-numeric:tabular-nums}
&medal{display:block;width:max(34px,38u);height:max(34px,38u);margin:-2px 0;filter:drop-shadow(0 2px 1px #0005)}
&medal>svg{width:100%;height:100%;display:block}
&line &av{width:max(32px,36u);height:max(32px,36u)}
&line-name{flex:1;min-width:0;padding-left:max(2px,4u);font:700 max(14px,16u)/1.15 var(--font-title);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
&line-value{flex:none;min-width:max(52px,70u);text-align:right;font:800 max(16px,19u)/1 var(--font-title);font-variant-numeric:tabular-nums;white-space:nowrap}
&line-value>small{font-size:max(11px,12.5u);font-weight:700;color:#6b4a30}
&more-wrap{display:flex;justify-content:center;padding:6u 0 2u}
&more-wrap>.marche-button{min-height:44px;min-width:44px}
&board>&line{cursor:pointer}
&line.is-selected{background:linear-gradient(90deg,#5a2a3a00,#5a2a3a24 12%,#5a2a3a24 88%,#5a2a3a00);border-radius:12px;box-shadow:inset 0 0 0 2px #5a2a3a66}
&line.is-selected::after{display:none}
&line.is-result{padding-left:max(8px,10u)}
&line-value.is-level{min-width:0;font:700 max(13px,14u)/1 var(--font-body);color:#5b3d28}
&thead>&search{position:relative;flex:0 1 max(200px,240u);min-width:0;display:flex;align-items:center;margin:0 0 0 max(2px,6u);container:ol-search/inline-size}
&search-ico{position:absolute;left:11px;top:50%;z-index:1;width:17px;height:17px;transform:translateY(-50%);pointer-events:none;line-height:0}
&search-ico>svg{display:block;width:100%;height:100%}
&thead &search-field{height:44px;padding:0 42px 0 34px;border:1.5px solid #b99662;border-radius:999px;background:#fffaf0;font:600 16px/1.2 var(--font-body);text-overflow:ellipsis;box-shadow:inset 0 1px 3px #3b24161f}
&thead &search-field::placeholder{color:transparent}
&thead &search-field:placeholder-shown{padding-right:12px}
&search-ph{position:absolute;left:34px;right:12px;top:50%;transform:translateY(-50%);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font:600 max(12.5px,13.5u)/1.2 var(--font-body);color:#8a6a4a;pointer-events:none}
&search-field:not(:placeholder-shown)~&search-ph{display:none}
&search-ph>.is-short{display:none}
@container ol-search (max-width:330px){&search-ph>.is-long{display:none}&search-ph>.is-short{display:inline}}
&thead &search-field::-webkit-search-cancel-button{display:none}
&clear{position:absolute;right:0;top:50%;transform:translateY(-50%)}
&clear[hidden]{display:none}
&clear>span{width:26px;height:26px;font-size:18px}
&clear.is-pressed{transform:translateY(-50%) translateY(1px)}
&main.is-searching &thead>:is(.is-rank,&scope,&refresh,.is-value),&thead:focus-within>:is(.is-rank,&scope,&refresh,.is-value){display:none}
&main.is-searching &thead>&search,&thead:focus-within>&search{margin-left:0;flex:1 1 auto}
&main.is-searching &thead,&thead:focus-within{padding:0}

&hero{position:relative;flex:none;width:max(50px,58u);height:max(50px,58u);margin:max(8px,10u) auto max(12px,14u)}
&hero::before{content:"";position:absolute;inset:-16%;border-radius:50%;background:repeating-conic-gradient(from 8deg,#e3ad3a99 0 3deg,#0000 3deg 24deg);-webkit-mask:radial-gradient(closest-side,#0000 74%,#000 76%,#000 92%,#0000 94%);mask:radial-gradient(closest-side,#0000 74%,#000 76%,#000 92%,#0000 94%)}
&hero>&av{position:absolute;inset:0;width:100%;height:100%;z-index:1}
&hero-wreath{position:absolute;left:-22%;right:-22%;bottom:-24%;height:64%;z-index:2;pointer-events:none;line-height:0}
&hero-wreath>svg,&hero-emblem>svg,&envelope>svg{display:block;width:100%;height:100%}
&hero-emblem{position:absolute;left:50%;bottom:-17%;width:30%;height:30%;transform:translateX(-50%);z-index:3;filter:drop-shadow(0 2px 1px #0006);line-height:0}
&hero-nameline{display:flex;align-items:center;justify-content:center;gap:max(6px,8u);max-width:100%;min-width:0}
&hero-nameline>&hero-name{min-width:0}
&namebadge{flex:none;display:flex}
&namebadge:empty{display:none}
&hero-name{max-width:100%;font:700 max(16px,19u)/1.1 var(--font-title);color:#2a1b1d;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
&hero-sub{font:600 var(--menu-text)/1.2 var(--font-body);color:#5b3d28;text-align:center}
&side>.marche-orn-rule{width:86%;margin:0}
&facts{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:max(4px,5u);align-items:flex-start}
&facts>li{display:flex;align-items:center;gap:max(6px,8u);font:700 max(13px,15u)/1.15 var(--font-title);color:#2a1b1d}
&facts .marche-ico{flex:none;width:max(17px,19u);height:max(17px,19u)}
&facts small{display:block;font:600 var(--menu-small)/1.2 var(--font-body);color:#6b4a30}
&facts sup{font-size:.62em;line-height:0}
&side &lead{text-align:center}
&back{align-self:flex-start;display:inline-flex;align-items:center;gap:5px;min-width:44px;min-height:44px;margin:0 0 -4px -4px;padding:0 8px;border:none;border-radius:10px;background:none;color:#5a2a3a;font:700 max(11px,11u)/1 var(--font-title);text-decoration:underline;text-underline-offset:3px;cursor:pointer}
&back-arrow{display:inline-block;font-size:1.2em;text-decoration:none}
&back.is-pressed{transform:translateY(1px)}
&facts.is-player{gap:max(4px,5u)}
&facts.is-player>li{gap:max(5px,7u);font-size:max(13px,14u)}
&sep{color:#8a6a4a}
&facts.is-player small{font-size:max(10.5px,11u)}
&side.is-player{gap:max(3px,5u)}
&pline{display:flex;align-items:center;gap:6px;min-height:max(17px,19u);font:700 max(12px,13u)/1 var(--font-body);color:#5b3d28}
&pline>&bar{width:max(64px,76u);margin:0}
&pline>b{font:700 max(13px,15u)/1 var(--font-title);color:#2a1b1d;white-space:nowrap}
&paction{display:flex;flex-direction:column;align-items:center;width:100%;margin-top:max(2px,4u)}
&paction>.marche-button{width:min(100%,200px)}
&paction>&note{text-align:center}
.marche-online .marche-button:disabled{cursor:default;filter:saturate(.25);opacity:.85}
&isfriend{position:relative;z-index:0;display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0 13px;box-sizing:border-box;color:#24521a;font:700 max(11px,11.5u)/1 var(--font-title)}
&isfriend::before{content:"";position:absolute;z-index:-1;inset:max(0px,calc(50% - 17u)) 0;border-radius:999px;background:linear-gradient(#ecf8da,#d3eeb0);border:1.5px solid #96c874}
&isfriend .marche-ico{flex:none;width:20px;height:20px}
&side.is-player>&hint{text-align:center}

&flist{margin:0;padding:0 2px;list-style:none;display:flex;flex-direction:column;gap:var(--menu-gap)}
&sublabel{margin:max(2px,4u) 0 0;font:700 var(--menu-text)/1.2 var(--font-title);color:#6b4a30}
&friend{position:relative;border:1.5px solid #cdb07a;border-radius:16px;background:linear-gradient(#fdf7e8,#f5e6c3);box-shadow:inset 0 0 0 2px #fffaf0,0 2px 0 #b9966259}
&friend::before{content:"";position:absolute;inset:5px;border:1px solid #dcc08a99;border-radius:11px;pointer-events:none}
&fhead{position:relative;display:flex;align-items:center;gap:max(10px,12u);width:100%;min-height:max(48px,52u);padding:max(4px,5u) max(12px,14u);margin:0;border:none;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}
&fhead.is-pressed{transform:translateY(1px)}
&fhead &av,&fstatic &av{width:max(36px,40u);height:max(36px,40u)}
&fwho{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:1px}
&fname{font:700 max(15px,17u)/1.1 var(--font-title);color:#2a1b1d;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
&flevel{font:600 var(--menu-small)/1.15 var(--font-body);color:#5b3d28;white-space:nowrap}
&pillbox{flex:none;display:flex;flex-direction:column;align-items:center;gap:2px}
&pill{display:inline-flex;align-items:center;gap:max(5px,6u);padding:max(3px,4u) max(9px,11u);border-radius:999px;border:1.5px solid;font:700 max(12px,13u)/1 var(--font-title);white-space:nowrap}
&pill::before{content:"";flex:none;width:max(9px,10u);height:max(9px,10u);border-radius:50%}
&pill.is-online{background:linear-gradient(#ecf8da,#d3eeb0);border-color:#96c874;color:#24521a}
&pill.is-online::before{background:radial-gradient(circle at 35% 30%,#a6f584,#2f9a1f 70%);box-shadow:0 0 0 1px #1f5f14}
&pill.is-arena{background:linear-gradient(#fdefd8,#f9dcb0);border-color:#e3a75f;color:#7a3a10}
&pill.is-arena::before{display:none}
&pill.is-arena .marche-ico{flex:none;width:max(13px,15u);height:max(13px,15u);color:#e2621c}
&pill.is-offline{background:linear-gradient(#f1ece3,#e4ddd1);border-color:#c8bead;color:#6b5e4c}
&pill.is-offline::before{background:radial-gradient(circle at 35% 30%,#d6cfc4,#a59b8c 70%);box-shadow:inset 0 1px 1px #0003}
&seen{font:600 var(--menu-small)/1.1 var(--font-body);color:#7a6a58;white-space:nowrap}
&fstatic{position:relative;display:flex;flex-wrap:wrap;align-items:center;gap:6px max(10px,12u);padding:max(5px,6u) max(12px,14u)}
&fstatic>&fwho{flex:1 1 90px}
&fstatic>&actions{flex:0 1 auto;gap:6px}
&fstatic .marche-button{padding:0 max(10px,12u);font-size:var(--menu-btn)}
&fmore{position:relative;display:flex;flex-direction:column;gap:8px;padding:0 max(12px,16u) max(10px,12u)}
&fmore[hidden]{display:none}
&fstats{display:flex;flex-wrap:wrap;align-items:center;gap:4px 12px;font:600 var(--menu-text)/1.25 var(--font-body);color:#5b3d28}
&fstats b{color:#3b2416}
&fline{display:flex;align-items:center;gap:8px;min-width:0;font:700 var(--menu-text)/1 var(--font-body);color:#3b2416}
&fline>&bar{flex:1;min-width:40px}
&fmore>&actions{justify-content:flex-end}
&fmore>&actions>.marche-button{flex:0 0 auto;min-width:96px}
&fmore &confirm{flex:1 1 100%}
&waiting{font:600 var(--menu-small)/1.2 var(--font-body);color:#7a6a58;font-style:italic}

&invite{gap:max(6px,8u)}
&envelope{flex:none;width:min(100%,max(84px,100u));aspect-ratio:180/104;line-height:0}
&invite &field{height:max(44px,46u);border:2px solid #c9a865;border-radius:14px;background:#fffaf0;font-size:16px;font-family:var(--font-title);box-shadow:inset 0 2px 4px #3b24161f}
&invite &field::placeholder{color:#a08766}
.marche-online .marche-ol-big{width:100%;--bh:max(37px,37u);--br:8px;--bd:#c76a12;font-size:max(12px,13u);background:linear-gradient(#ffe68e,#fcc54a 50%,#f5a92c)}
&big .marche-ico{width:max(11px,12u);height:max(11px,12u);color:#7a4510}
.marche-online .marche-ol-big .marche-button-label{white-space:nowrap}
&copyrow{display:flex;gap:8px;width:100%;justify-content:center}
.marche-online .marche-ol-copy{flex:1 1 auto;font-size:var(--menu-btn)}
.marche-online .marche-ol-share{flex:none;width:44px;padding:0}
&copy .marche-ico,&share .marche-ico{width:max(16px,18u);height:max(16px,18u)}
&mycode{margin:0;font:600 var(--menu-small)/1.2 var(--font-body);color:#6b4a30;text-align:center}
&mycode b{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.05em;color:#3b2416;-webkit-user-select:text;user-select:text}

&card-av{position:relative;flex:none;width:max(50px,60u);height:max(50px,60u)}
&card-av>&av{width:100%;height:100%}
&card-av>&lv{position:absolute;right:-6px;bottom:-4px;width:26px;height:26px;--lv-fs:10px}
&pickhead{display:flex;align-items:center;gap:12px}
&pickhead>h3{flex:1 1 auto;margin:0;font:700 var(--menu-h)/1.1 var(--font-title);color:#2a1b1d}
/* « Mon avatar » (the player's mockup): a card on the left, a rule, a tab per group and its grid. */
&picker{display:flex;flex-direction:column;gap:max(6px,8u)}
&picker>&pickhead>h3{flex:none;font-size:max(17px,20u)}
&picker>&pickhead>&hint{flex:1 1 auto;min-width:0;margin:0;text-align:center;font-size:max(11px,12u);line-height:1.2}
&picker>&pickhead>.marche-button{flex:none;margin-left:auto}
&avpage{flex:1 1 auto;min-height:0;display:grid;grid-template-columns:minmax(0,29fr) auto minmax(0,71fr);grid-template-rows:minmax(0,1fr);gap:max(8px,12u)}
&avdiv{width:1.5px;margin:2px 0;background:linear-gradient(#c9963a00,#c9963a8c 10%,#c9963a8c 90%,#c9963a00)}
&avcard{container:ol-avcard/size;min-width:0;min-height:0;box-sizing:border-box;padding:max(6px,9u) max(8px,10u);border:1.5px solid #d6bc86;border-radius:14px;background:linear-gradient(#fffbf2,#f7ead0);box-shadow:inset 0 0 0 2px #fff9,0 2px 0 #b9966233;overflow:hidden auto;overscroll-behavior:contain}
&avcard-in{height:100%;display:flex;flex-direction:column;align-items:center;gap:1px;text-align:center}
&avcard-in>*{flex:none}
&avcard-in>:first-child{margin-top:auto}
&avcard-in>:last-child{margin-bottom:auto}
&avcard-in>[hidden]{display:none}
&avcard-ring{display:block;flex:1 1 0;min-height:50px;max-height:min(112px,80cqw);aspect-ratio:1;margin:max(3px,5u) 0 max(5px,7u)}
&avcard-title{max-width:100%;font:700 min(max(15px,18u),9cqw)/1.1 var(--font-title);color:#2a1b1d}
&avcard-sub{max-width:100%;font:600 min(max(11px,12u),6.4cqw)/1.25 var(--font-body);color:#5b3d28}
&avcard-others{display:flex;align-items:center;justify-content:center;gap:6px;max-width:100%;margin:3px 0 0;font:600 min(max(10.5px,11u),6cqw)/1.2 var(--font-body);color:#6b4a30;text-align:left}
&avcard-others>&av{width:22px;height:22px}
&avcard-others>span{min-width:0}
&avcard-rule{align-self:stretch;height:1.5px;margin:max(5px,7u) 2px max(2px,3u);background:#c9963a73}
.marche-online .marche-button&import{flex:none;width:min(100%,180px);min-height:44px;padding:0 10px;z-index:0;overflow:visible;background:none;border:0;box-shadow:none;color:#2a1b1d;text-shadow:none;font-size:max(11.5px,12.5u)}
.marche-online .marche-button&import::before{content:"";position:absolute;z-index:-1;inset:7px 0;border-radius:9px;background:linear-gradient(#fffaf0,#f3e3bf);border:2px solid #3b2416;box-shadow:inset 0 1px 0 #fff,0 3px 0 #3b2416}
.marche-online .marche-button&import.is-pressed{transform:none}
.marche-online .marche-button&import.is-pressed::before{transform:translateY(2px);box-shadow:0 1px 0 #3b2416}
.marche-online .marche-button&import .marche-button-label{gap:8px;white-space:nowrap;font-size:1em;letter-spacing:.01em}
.marche-online .marche-button&import .marche-ico{width:max(17px,19u);height:max(17px,19u)}
.marche-online .marche-button&import.is-remove{margin-top:-5px;color:#8a2f1f;font-size:max(11px,11.5u)}
.marche-online .marche-button&import.is-remove::before{inset:9px 10px;background:none;border:1.5px solid #8a2f1f80;box-shadow:none}
&avcard-note{max-width:230px;margin-top:2px;text-align:center}
&avside{min-width:0;min-height:0;display:flex;flex-direction:column}
&avpick-title{flex:none;margin:0 0 max(2px,3u);padding:0 6px max(3px,4u);border-bottom:1.5px solid #c9963a73;font:700 max(14px,16u)/1.15 var(--font-title);color:#3b2416}
&avpanes{flex:1 1 auto;min-height:0;container:ol-avpanes/size;overflow:hidden auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
&avgrid{--gap:clamp(3px,1cqw,6px);--tile:clamp(56px,(100cqw - 4*var(--gap) - 12px)/5,112px);box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;gap:var(--gap);width:100%;padding:7px 6px}
&avtile{position:relative;flex:none;display:block;box-sizing:border-box;width:var(--tile);height:var(--tile);margin:0;padding:calc(var(--tile)*.035);border:0;border-radius:50%;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent}
&avframe{position:relative;display:block;width:100%;height:100%;border-radius:50%}
&avframe>&av{width:100%;height:100%}
&avgem{display:none;position:absolute;z-index:2;width:17%;height:17%;transform:translate(-50%,-50%);background:#3b2416;clip-path:polygon(50% 0,62% 38%,100% 50%,62% 62%,50% 100%,38% 62%,0 50%,38% 38%);pointer-events:none}
&avgem::after{content:"";position:absolute;inset:9%;background:linear-gradient(135deg,#fff4c4,#eebc4c 50%,#a8701c);clip-path:inherit}
&avframe:has(>&av:is(.is-bare,.is-custom))>&avgem{display:block}
&avgem.is-t{top:7%;left:50%}
&avgem.is-b{top:93%;left:50%}
&avgem.is-l{top:50%;left:7%}
&avgem.is-r{top:50%;left:93%}
&avtile[aria-pressed=true]>&avframe::before{content:"";position:absolute;inset:-3%;border-radius:50%;border:max(3px,3.5u) solid #6a2d8e;box-shadow:0 0 0 1px #2e1240,inset 0 0 0 1px #2e1240,0 0 10px #8b4fc080}
&avcheck{display:none;position:absolute;right:1%;bottom:2%;z-index:3;width:32%;height:32%;box-sizing:border-box;border-radius:50%;background:radial-gradient(circle at 38% 32%,#ffeaa6,#f2b63c 55%,#b9781c);border:1.5px solid #3b2416;box-shadow:0 2px 3px #0006}
&avcheck::after{content:"";position:absolute;left:35%;top:17%;width:23%;height:43%;border:solid #2a1b1d;border-width:0 max(2.5px,3u) max(2.5px,3u) 0;transform:rotate(45deg)}
&avtile[aria-pressed=true]>&avcheck{display:block}
&avtile.is-locked>&avframe{filter:grayscale(1) brightness(.62) contrast(.9)}
&avtile.is-pressed{transform:translateY(1px)}
&lock{position:absolute;z-index:3;right:2%;bottom:2%;width:max(18px,24u);height:max(18px,24u);filter:drop-shadow(0 1px 1px #0008);line-height:0}
&lock>svg{display:block;width:100%;height:100%}
/* A short card (the Claude viewer): the avatar beside its title, the rest under them. */
@container ol-avcard (max-height:200px){
  &avcard-in{display:grid;grid-template-columns:auto minmax(0,1fr);align-content:center;column-gap:8px;row-gap:0;text-align:left}
  &avcard-in>:first-child,&avcard-in>:last-child{margin:0}
  &avcard-ring{grid-row:1/span 3;align-self:center;width:clamp(44px,30cqh,60px);height:auto;max-height:none;margin:1px 0}
  &avcard-title{align-self:end;font-size:min(max(14px,15u),8cqw)}
  &avcard-sub{align-self:start;font-size:min(11px,6cqw)}
  &avcard-others{grid-column:2;justify-content:flex-start;margin:1px 0 0;font-size:min(10.5px,5.6cqw)}
  &avcard-others>&av{width:16px;height:16px}
  &avcard-rule{grid-column:1/-1;margin:3px 2px 0}
  &avcard-in>.marche-button{grid-column:1/-1;justify-self:center}
  &avcard-note{grid-column:1/-1;justify-self:center;font-size:min(10.5px,5.6cqw);line-height:1.2}
  .marche-online .marche-button&import.is-remove{margin-top:-10px}
}
&crop{display:flex;flex-wrap:wrap;gap:16px;align-items:center}
&crop-box{position:relative;flex:none;width:min(200px,46cqh,100%);aspect-ratio:1;border-radius:12px;overflow:hidden;background:#2a1b1d;box-shadow:0 0 0 2px #c9a865}
&crop-box>canvas{display:block;width:100%;height:100%;cursor:grab}
.marche-online .marche-ol-crop-box,.marche-online .marche-ol-crop-box>canvas{touch-action:none!important}
&crop-box::after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle closest-side,#0000 97%,#2a1b1dbb 99%);box-shadow:inset 0 0 0 2px #e8b84a}
&crop-side{flex:1 1 200px;min-width:0;display:flex;flex-direction:column;gap:10px}
&zoom{display:flex;align-items:center;gap:8px;min-height:44px;font:700 max(12px,14u)/1 var(--font-body);color:#3b2416}
&zoom>input{flex:1;min-width:80px;height:44px;margin:0;accent-color:#7a3a10;touch-action:pan-x!important;pointer-events:auto}

@container ol-body (max-height:320px){
  &split.is-boards>&main>&h{display:none}
  &split.is-boards>&side.is-player{display:grid;grid-template-columns:auto minmax(0,1fr);grid-template-areas:"back back" "hero name" "hero sub" "facts facts" "act act" "st st";align-content:start;align-items:center;gap:2px 10px}
  &side.is-player>&back{grid-area:back;justify-self:start}
  &side.is-player>&hero{grid-area:hero;width:48px;height:48px;margin:2px 4px 12px 8px}
  &side.is-player>&hero-nameline{grid-area:name;justify-self:stretch;justify-content:space-between;align-self:end}
  &side.is-player &hero-name{text-align:left}
  &side.is-player>&hero-sub{grid-area:sub;justify-self:start;align-self:start;text-align:left}
  &side.is-player>.marche-orn-rule{display:none}
  &side.is-player>&facts{grid-area:facts;justify-self:center;margin-top:2px}
  &side.is-player>&paction{grid-area:act;margin-top:6px}
  &side.is-player>&hint{grid-area:st}
}
@container ol-body (max-height:280px){
  &main>&h{display:none}
  &hero{width:46px;height:46px;margin:6px auto 10px}
  &hero-name{font-size:16px}
  &hero-sub{font-size:12px}
  &facts>li{font-size:13px}
  &facts .marche-ico{width:17px;height:17px}
  &side>.marche-orn-rule{display:none}
  &envelope{width:min(100%,104px)}
  &invite>&h{display:none}
  &line{min-height:44px}
}
@container ol-body (max-height:220px){
  &envelope{display:none}
  &side>&h{display:none}
}
@container ol-body (max-width:760px){
  &boards{gap:6px}
  &boards>button{padding:0 8px 0 6px;gap:3px;font-size:11px}
  &boards .marche-ico{width:13px;height:13px}
  &thead>:is(.is-player,.is-rank,.is-value){display:none}
  &thead{justify-content:space-between;padding-left:4px}
  &split{column-gap:2px}
  .marche-online .marche-ol-copy{font-size:11px;padding:0 8px}
  .marche-online .marche-ol-big{font-size:12px;padding:0 7px}
  .marche-online .marche-ol-big .marche-ico{display:none}
  .marche-online .marche-ol-copy .marche-button-label{white-space:nowrap}
}
@container ol-body (max-width:600px){
  &split{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr) auto}
  &split>.marche-orn-vdiv{display:none}
  &split.is-boards{position:relative}
  &split.is-boards>&side:not(.is-player){flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;column-gap:12px;overflow:visible;padding:4px 4px 2px;border-top:1.5px solid #c9963a8c}
  &split.is-boards>&side:not(.is-player)>&h,&split.is-boards>&side:not(.is-player)>.marche-orn-rule,&split.is-boards>&side:not(.is-player) :is(&hero-wreath,&hero-emblem),&split.is-boards>&side:not(.is-player) &hero::before{display:none}
  &split.is-boards>&side:not(.is-player) &hero{width:44px;height:44px;margin:0}
  &split.is-boards>&side:not(.is-player) &hero-name{font-size:16px;max-width:40%}
  &split.is-boards>&side:not(.is-player) &hero-sub{display:none}
  &split.is-boards>&side:not(.is-player) &facts{flex-direction:row;flex-wrap:wrap;gap:4px 12px}
  &split.is-boards>&side:not(.is-player) &facts>li{font-size:13px}
  &split.is-boards>&side.is-player{position:absolute;inset:0;z-index:3;display:grid;grid-template-columns:minmax(0,2fr) minmax(0,3fr);grid-template-areas:"back back" "hero facts" "name facts" "sub facts" "act act" "st st";grid-template-rows:auto auto auto 1fr auto auto;align-content:start;align-items:center;justify-items:center;gap:2px 12px;overflow-y:auto;padding:2px 12px 10px;border:2px solid #c9a865;border-radius:14px;background:radial-gradient(ellipse at 25% 15%,var(--parch-hi) 0%,var(--parch) 48%,var(--parch-lo) 100%);box-shadow:inset 0 0 0 2px #fffaf0,0 4px 14px #0005}
  &side.is-player>&back{grid-area:back;justify-self:start}
  &side.is-player>&hero{grid-area:hero;margin:4px auto 12px}
  &side.is-player>&hero-nameline{grid-area:name;justify-self:center;align-self:center}
  &side.is-player>&hero-sub{grid-area:sub;justify-self:center;align-self:start;text-align:center}
  &side.is-player>.marche-orn-rule{display:none}
  &side.is-player>&facts{grid-area:facts;align-self:center;margin-top:0}
  &side.is-player>&paction{grid-area:act;margin-top:4px}
  &side.is-player>&hint{grid-area:st}
  &split.is-friends{display:flex;flex-direction:column;overflow-y:auto}
  &split.is-friends>*{flex:none}
  &split.is-friends &scroll{overflow:visible}
  &split.is-friends>&side{order:-1;overflow:visible}
  &split.is-friends &envelope{display:none}
  &thead>.is-player{display:none}
  &pillbox>&seen{display:none}
}
/* « Compte », the camp's pause menu's rubric (compagnie.ts \`mountAccount\`, the player's mockup). */
.marche-pz-account{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;gap:6u;overflow-y:auto;overscroll-behavior:contain;container:pz-acct/size}
.marche-pz-account>*{flex:none}
.marche-pz-account>&acct,.marche-pz-account>&acct-none{flex:1 1 auto}
&acct{min-height:0;display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.12fr);grid-template-rows:minmax(0,1fr);gap:10u}
&acct-id,&acct-box,&acct-none{position:relative;border:1.5px solid #c9a865;border-radius:10u;background:linear-gradient(#fffcf3,#f6e8c8);box-shadow:inset 0 0 0 2px #fff8,0 2px 0 #3b24161f}
&acct-id::before,&acct-id::after,&acct-box::before,&acct-box::after,&acct-none::before,&acct-none::after{content:"";position:absolute;top:3px;width:6px;height:6px;transform:rotate(45deg);background:#e2a948;border:1px solid #9a6417}
&acct-id::before,&acct-box::before,&acct-none::before{left:3px}
&acct-id::after,&acct-box::after,&acct-none::after{right:3px}
&acct-id{min-height:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:6u 10u;text-align:center;overflow:hidden}
&acct-ring{position:relative;flex:none;width:clamp(44px,min(31cqh,22cqw),100px);height:clamp(44px,min(31cqh,22cqw),100px);margin:7px 0 10px;border-radius:50%;border:3px solid #e2a948;box-shadow:0 0 0 1.5px #6b4413,0 0 0 3.5px #f6d27a,0 0 0 5px #6b4413,0 3px 6px #0005}
&acct-ring>&av{width:100%;height:100%}
&acct-gem{position:absolute;z-index:2;width:8px;height:8px;transform:translate(-50%,-50%) rotate(45deg);background:linear-gradient(135deg,#fff0bc,#e2a948 55%,#9a6417);border:1px solid #5a3410}
&acct-gem.is-t{top:-3px;left:50%}
&acct-gem.is-b{top:calc(100% + 3px);left:50%}
&acct-gem.is-l{left:-3px;top:50%}
&acct-gem.is-r{left:calc(100% + 3px);top:50%}
&acct-name{max-width:100%;font:700 max(17px,20u)/1.15 var(--font-title);color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
&acct-sub{font:600 max(11px,12u)/1.2 var(--font-body);color:var(--ink-soft)}
&acct-rule{flex:none;align-self:stretch;margin:3u 0}
&acct-data{display:flex;align-items:center;gap:7u;text-align:left}
&acct-data strong{display:block;font:700 max(12px,13u)/1.15 var(--font-title);color:var(--ink)}
&acct-data p{margin:1px 0 0;font:600 max(10.5px,11u)/1.25 var(--font-body);color:var(--ink-soft)}
&acct-ico{flex:none;display:block;width:max(22px,24u);height:max(22px,24u);line-height:0}
&acct-ico>svg{display:block;width:100%;height:100%}
&acct-vsep{flex:none;align-self:stretch;width:1.5px;margin:2px 0;background:#b98a3a8c;font-style:normal}
&acct-side{min-width:0;min-height:0;display:flex;flex-direction:column;gap:6u}
&acct-box{flex:none;display:flex;flex-direction:column;padding:4u 9u 1px}
&acct-head{display:flex;align-items:center;gap:7u;padding:0 0 3u;border-bottom:1px solid #b98a3a66}
&acct-head h4{margin:0;min-width:0;font:700 max(14px,15u)/1.1 var(--font-title);color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
&acct-btns{display:flex;gap:9u}
.marche-pz &acct .marche-button,.marche-pz &acct-side .marche-button{flex:1 1 0;min-width:0;--bh:max(30px,31u);--bw:2px;padding:0 7u;font-size:max(12px,13u)}
&acct-side>&acct-rule{margin:auto 4u -2px}
&acct-foot{flex:none;display:flex;justify-content:center}
.marche-pz &acct .marche-button&acct-del{flex:0 1 auto;width:min(100%,280px);--bc:#a3271a;--bd:#efc3b2;color:#a3271a;text-shadow:none;background:linear-gradient(#fffaf3,#fbe7dc)}
&acct-del .marche-button-label{gap:8u}
&acct-trash{flex:none;display:block;width:max(16px,17u);height:max(16px,17u);line-height:0}
&acct-trash>svg{display:block;width:100%;height:100%}
&acct-del &acct-vsep{background:#a3271a66;margin:-2px 0}
&acct-note:empty{display:none}
&acct-side>&confirm{flex:none}
.marche-pz &acct-side &confirm .marche-button{flex:1 1 auto}
/* …and without an account (its empty state, the Battle's own: the picture, the title, a gold rule). */
&acct-none{min-height:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:max(3px,min(5u,1.8cqh));padding:min(6u,2.4cqh) min(14u,3cqw);text-align:center;overflow:hidden}
&acct-none>&acct-ring{width:clamp(44px,24cqh,92px);height:clamp(44px,24cqh,92px);margin:6px 0 9px}
&acct-none-title{margin:0;font:700 max(17px,min(22u,9cqh))/1.1 var(--font-title);color:var(--ink)}
&acct-none-rule{position:relative;flex:none;width:min(70%,220u);height:1.5px;margin:max(2px,min(3u,1.2cqh)) 0;background:linear-gradient(90deg,#d6a54800,#d6a548 25%,#d6a548 75%,#d6a54800)}
&acct-none-rule::before{content:"";position:absolute;left:50%;top:50%;width:7px;height:7px;transform:translate(-50%,-50%) rotate(45deg);background:#e8b84a;box-shadow:0 0 0 2px #fbf3df}
&acct-none-lead{max-width:540u;margin:0;font:italic 600 max(11.5px,min(12.5u,5cqh))/1.3 var(--font-body);color:#5b3d28}
&acct-none-note{display:flex;align-items:center;justify-content:center;gap:5u;margin:0;font:600 max(10.5px,min(11u,4.4cqh))/1.25 var(--font-body);color:var(--ink-soft)}
&acct-none-note>&acct-ico{width:max(16px,min(17u,6.5cqh));height:max(16px,min(17u,6.5cqh))}
&acct-none-btns{display:flex;justify-content:center;gap:10u;width:min(100%,460u);margin-top:max(3px,min(4u,1.6cqh))}
.marche-pz &acct-none .marche-button{flex:1 1 0;min-width:0;--bh:max(34px,min(36u,15cqh));--bw:2px;padding:0 8u;font-size:max(12.5px,min(13.5u,5.4cqh))}
&acct-none>&hint{font-size:max(11px,min(11.5u,4.6cqh))}
&acct-none>&hint:empty{display:none}
&acct-none:has(>&hint:not(:empty)) &acct-none-note{display:none}
@container pz-acct (max-height:250px){
  &acct-none{gap:3px}
  &acct-none>&acct-ring{width:clamp(40px,22cqh,92px);height:clamp(40px,22cqh,92px);margin:5px 0 7px}
  &acct-none-title{font-size:max(17px,19u)}
  &acct-none-note{display:none}
  &acct-none:has(>&hint:not(:empty))>&acct-ring{width:clamp(36px,16cqh,92px);height:clamp(36px,16cqh,92px);margin:4px 0 6px}
  &acct-side{gap:6u}
  &acct-side>&acct-rule{display:none}
  &acct-foot{margin-top:auto}
  &acct-head{padding:0 0 2px}
  &acct-head h4{font-size:max(13px,13.5u)}
  &acct-ico{width:20px;height:20px}
  &acct-id{padding:4u 8u}
  &acct-id>&acct-rule{margin:1px 0}
  &acct-ring{width:clamp(44px,min(25cqh,22cqw),100px);height:clamp(44px,min(25cqh,22cqw),100px);margin:6px 0 9px}
}
@container pz-acct (max-height:212px){
  &acct-side{gap:4px}
  &acct-box{padding-top:2px}
  &acct-head{padding:0;border:0}
  &acct-btns{margin:-7px 0 0}
  &acct-id{gap:0}
  &acct-ring{margin:5px 0 8px}
}
@container pz-acct (max-width:470px){
  &acct{grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:8u}
  &acct-data>&acct-vsep{display:none}
  &acct-data{gap:5px}
  &acct-data>&acct-ico{width:18px;height:18px}
  &acct-data p{font-size:10px}
  .marche-pz &acct-side .marche-button{padding:0 5u;font-size:max(11px,11.5u)}
  .marche-pz &acct-side .marche-button-label{white-space:normal;text-align:center;line-height:1.05}
  &acct-btns{gap:6u}
}
`);function c(){if(n(),i(),t(),document.getElementById("marche-online-css"))return;const e=a("style",void 0,{id:"marche-online-css"});e.textContent=r,document.head.append(e)}export{c as e};

