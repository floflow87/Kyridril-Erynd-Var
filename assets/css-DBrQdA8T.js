import{al as A,ap as E,dj as S,aW as m,aV as P,t as I,u as _,aT as h,fS as k,C as F}from"./index-DHpHQRsV.js";import{bm as T,bn as j}from"./scene-kit-wYlkXH6N.js";const C="Défi",V="Défi : vagues sans fin, seul ou entre amis",B="Défi",O={solo:"Seul",friends:"Entre amis"},W="Une arène que tu as franchie, des vagues sans fin : les créatures du Bestiaire, des plus faibles aux plus redoutables, puis tout se corse.",L="Arène",q="Arène {{n}}",H="repaire du boss",z="Franchis une première arène pour ouvrir le Défi.",N="Difficulté",X="Record : {{waves}}",G="Aucun record",U="{{kills}} ennemis · {{time}}",J="{{count}} vague",K="{{count}} vagues",Q="{{count}} ennemi",$="{{count}} ennemis",Y="Énergie {{n}}/{{max}}",Z="Énergie insuffisante - encore {{time}}",ee="Récompenses : un peu d’or et d’expérience par vague, pour les {{n}} premières.",ne="Maintiens pour lancer",oe="⚡ {{n}}",ae="Garde le doigt appuyé jusqu’à ce que la jauge soit pleine.",te="Maintiens Entrée",ie="Verrouillé",re="Franchis d’abord l’arène {{n}}.",se="Débloque d’abord le mode {{mode}}.",le={wave:"Vague {{n}}",label:"Défi · vague {{n}} · {{left}} restant(s)",cleared:"Vague {{n}} franchie !",next:"Vague {{n}}",guardian:"Un gardien approche !",best:"Record {{n}}"},de="Le Défi s’arrête ici : ton score est gardé.",ce={title:"Défi terminé",fell:"Erynd est tombé à la vague {{n}}.",quit:"Défi arrêté à la vague {{n}}.",waves:"Vagues franchies",kills:"Ennemis vaincus",time:"Temps",record:"Nouveau record !",best:"Record : {{waves}} · {{kills}}",gain:"+{{gold}} or · +{{xp}} XP",gainNone:"Aucune récompense : franchis une vague.",gainCap:"Récompenses des {{n}} premières vagues seulement.",retry:"Rejouer",retryRound:"Rejouer la manche",camp:"Au camp",friend:"Défier un ami",noEnergy:"Il faut 1 ⚡ - le camp la recharge en {{time}}"},ue={needAccount:"Crée ton compte dans Compagnie pour défier tes amis.",loading:"Chargement…",none:"Aucun défi pour l’instant. Crée le premier !",new:"Nouveau défi",create:"Créer le défi",pickFriends:"Invite jusqu’à {{n}} amis",noFriends:"Ajoute d’abord des amis dans Compagnie.",chosen:"{{n}}/{{max}} amis",setting:"Arène {{n}} · {{mode}}",by:"par {{pseudo}}",members_one:"{{count}} joueur",members_other:"{{count}} joueurs",round:"Manche {{n}}",roundWaiting:"À toi de jouer",roundPlayed:"Joué",play:"Jouer la manche {{n}}",rematch:"Revanche",rematchHint:"Une nouvelle manche, une nouvelle graine pour tous ; les anciennes restent.",invite:"Inviter",leave:"Quitter",leaveConfirm:"Quitter ce défi ?",noScore:"Personne n’a encore joué cette manche.",scores:"Manche {{n}}",standings:"Classement",history:"Historique",winner:"Vainqueur : {{pseudo}}",noWinner:"Pas encore de vainqueur",colRank:"#",colPlayer:"Joueur",colPlayed:"MJ",colWins:"V",colPodiums:"Pod.",colPoints:"Pts",colBest:"Record",colAvg:"Moy.",colWaves:"Vagues",colKills:"Ennemis",colTime:"Temps",you:"toi",flagged:"en vérification",launchHere:"Lance une manche depuis l’icône Défi du camp.",badge_one:"{{count}} manche t’attend",badge_other:"{{count}} manches t’attendent",sent:"Défi envoyé !",submitted:"Score envoyé.",submitFailed:"Score gardé ici, pas encore envoyé : réessaie depuis le Défi.",rateLimited:"Trop de défis d’affilée : réessaie dans une heure.",notFound:"Ce défi n’existe plus.",newLead:"Le défi se joue dans l’arène et la difficulté choisies dans l’onglet Seul : change-les là-bas.",inviteMore:"Inviter d’autres amis",invited:"Invitations envoyées.",offline:"Connexion impossible. Réessaie plus tard.",retry:"Réessayer",back:"Retour",colRankFull:"Place",colPlayedFull:"Manches jouées",colWinsFull:"Victoires",colPodiumsFull:"Podiums (les trois premières places)",colPointsFull:"Points : en duel 1 au premier ; à trois 2 et 1 ; à quatre ou plus 3, 2 et 1 ; seul, rien",colBestFull:"Record : le plus de vagues franchies en une manche",colAvgFull:"Moyenne des vagues franchies par manche",colWavesFull:"Vagues franchies",colKillsFull:"Ennemis vaincus",colTimeFull:"Temps survécu"},fe={title:C,camp:V,tabs:B,tab:O,lead:W,arenas:L,arenaRow:q,arenaBoss:H,noArena:z,mode:N,record:X,recordNone:G,recordLine:U,waves_one:J,waves_other:K,kills_one:Q,kills_other:$,energy:Y,energyShort:Z,rewards:ee,hold:ne,holdSub:oe,holdHint:ae,holdKeys:te,locked:ie,lockedArena:re,lockedMode:se,hud:le,abandonWarning:de,result:ce,online:ue};S({marche:{defi:fe}});const pe=(e,n)=>A(`marche:defi.${e}`,n),_e=e=>pe("waves",{count:e});function Fe(e){const n=[];return e.split(" ").forEach((a,o)=>{o>0&&n.push(E("span","marche-defi-nb",void 0,[" "])),a&&n.push(a)}),n}const d={restMs:2500,healPct:.08,maxRound:14,maxWave:6,triggerAtAlive:2,maxElites:4,bestiaryRounds:35,hpPerRound:.08,maxHpMult:2.5,damagePerRound:.04,maxDamageMult:1.6,rewardRounds:10,goldPerRound:15,energy:1},p=Object.keys(h),R=["galleries","flooded","battlefield","catacombs","fallenkeep"],me=["enraged","armored","explosive"];p.flatMap(e=>h[e]);const he=e=>Math.min(4,Math.floor(e/3))+1,ge=p.flatMap((e,n)=>[{stage:n,kind:"intro"},{stage:n,kind:"full"},...R.includes(e)?[{stage:n,kind:"guardian"}]:[]]),xe=e=>Math.min(d.maxRound,3+Math.floor((Math.max(1,e)-1)*2/3)),be=e=>e<8?0:e<=d.bestiaryRounds?Math.min(3,1+Math.floor((e-8)/6)):Math.min(d.maxElites,3+Math.floor((e-d.bestiaryRounds)/10)),b=e=>h[p[Math.max(0,Math.min(p.length-1,e))]],y=e=>p.some(n=>h[n][3]===e);function ve(e){const n=e.filter(i=>y(i.enemyId)||i.guardian),a=e.filter(i=>!(y(i.enemyId)||i.guardian)),o=Math.max(1,Math.ceil(e.length/d.maxWave),n.length),t=Array.from({length:o},()=>[]);n.forEach((i,r)=>t[r%o]?.push(i));for(const i of a){let r=0;for(let c=1;c<o;c++)(t[c]?.length??0)<(t[r]?.length??0)&&(r=c);t[r]?.push(i)}return t.filter(i=>i.length>0).map((i,r)=>r===0?{entries:i}:{entries:i,triggerAtAlive:d.triggerAtAlive})}function v(e,n,a){const o=[];for(let t=0;t<a;t++)o.push(t<n.length?n[t]:e.pick(n));return o}function ye(e,n){const a=xe(e),o=ge[e-1],t=[],i=(l,u={})=>{t.push({enemyId:l,count:1,...u})};if(o){const l=b(o.stage),u=o.stage>0?b(o.stage-1).slice(0,3):[];if(o.kind==="guardian"){i(l[3],{guardian:!0});for(const g of v(n,l.slice(0,3),a-1))i(g);return{list:t,stage:o.stage,guardian:!0}}const D=o.kind==="intro"?l.slice(0,3):[l[3],...l.slice(0,3)],w=u.length>0?Math.floor(a/3):0;for(const g of v(n,D,a-w))i(g);for(const g of v(n,n.shuffle(u),w))i(g);return{list:t,stage:o.stage,guardian:!1}}const r=p.length-6,c=r+n.int(0,5);let s=r+n.int(0,4);s>=c&&(s+=1);const f=e%5===0;if(f){const l=n.pick(R);i(h[l][3],{guardian:!0})}const x=[...b(c),...b(s)];for(const l of v(n,n.shuffle(x),a-t.length))i(l);return{list:t,stage:Math.max(c,s),guardian:f}}function we(e){const n=Math.max(1,Math.ceil(e.length/d.maxWave)),a=e.find(t=>!y(t.enemyId))?.enemyId;let o=e.filter(t=>t.guardian).length;for(let t=0;t<e.length;t++){const i=e[t];i.guardian||!y(i.enemyId)||++o>n&&a&&(e[t]={enemyId:a,count:1})}}function Me(e,n){const a=Math.max(1,Math.floor(n)),o=I(_(e>>>0,9100+a)),{list:t,stage:i,guardian:r}=ye(a,o);we(t);const c=he(i);let s=be(a);const f=o.shuffle(t.map((l,u)=>u));for(const l of f){if(s<=0)break;const u=t[l];u.guardian||(t[l]={...u,elite:c>=3?o.pick(me)??!0:!0},s--)}const x=Math.max(0,a-d.bestiaryRounds);return{index:a,waves:ve(t),stage:i,chapter:c,guardian:r,hpMult:Math.min(d.maxHpMult,1+d.hpPerRound*x),damageMult:Math.min(d.maxDamageMult,1+d.damagePerRound*x)}}const Te=e=>[...new Set(e.waves.flatMap(n=>n.entries.map(a=>p.find(o=>h[o].includes(a.enemyId))??"forest")))];function je(e,n){const a=m.chapters[e.chapter-1]?.scaling,o=k(m.heroic,n),t={enemyHpMult:((a?.enemyHpMult??1)+o.enemyHpMult-1)*e.hpMult,enemyDamageMult:((a?.enemyDamageMult??1)+o.enemyDamageMult-1)*e.damageMult,goldMult:0,cooldownMult:Math.max(F,(a?.cooldownMult??1)*o.cooldownMult),extraMeleeTokens:(a?.extraMeleeTokens??0)+o.extraMeleeTokens,bossHpMult:1,bossDamageMult:1,bossGoldMult:0};return o.afflictions&&(t.afflictions=!0),t}function ke(e,n){return(m.chapters[e.chapter-1]?.scaling?.goldMult??1)+k(m.heroic,n).goldMult-1}function Re(e){return Array.from({length:P(e,m.heroic)+1},(n,a)=>a)}function De(e){const n=Math.max(0,...T(e));return m.arenas.filter(a=>a.number<=n)}function Ce(e,n,a){return De(e).some(o=>o.number===n)&&Re(e).includes(a)}function Ve(e,n){const{bossId:a,guardian:o,waveVariants:t,...i}=e;return{...i,waves:n.waves,clearGold:0}}function Be(){try{const e=new Uint32Array(1);return globalThis.crypto.getRandomValues(e),e[0]%2147483646||1}catch{return Date.now()%2147483646||1}}function Ae(e,n){return e.waves-n.waves||e.kills-n.kills||e.ms-n.ms}function Oe(e,n,a){const o=Math.max(0,Math.min(d.rewardRounds,Math.floor(a)));let t=0;for(let r=1;r<=o;r++)t+=Math.round(d.goldPerRound*ke(Me(e,r),n));const i=Math.round((j.replay[Math.max(0,Math.min(4,n))]??10)/2);return{gold:t,xp:i*o,paid:o}}function We(e,n,a){const o=(e.defi??[]).find(t=>t.a===n&&t.m===a);return o?{waves:o.w,kills:o.k,ms:o.t}:null}function Le(e,n,a,o){const t=(e??[]).filter(s=>!(s.a===n&&s.m===a)),i=(e??[]).find(s=>s.a===n&&s.m===a),r=!i||Ae(o,{waves:i.w,kills:i.k,ms:i.t})>0,c=r?{a:n,m:a,w:Math.floor(o.waves),k:Math.floor(o.kills),t:Math.floor(o.ms)}:i;return{list:[...t,c].sort((s,f)=>s.a-f.a||s.m-f.m),record:r}}const qe=8,Ee=e=>e.replace(/(-?\d*\.?\d+)u\b/g,"calc($1*var(--u))").replace(/&(?=[a-z])/g,".marche-defi-").replace(/%%/g,".marche-"),Se=Ee(`
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
&card{display:flex;flex-direction:column;gap:4u;padding:8u 11u;border-radius:12px;border:2px solid #3b241640;background:radial-gradient(ellipse at 40% 25%,#fffcf3,#f5e6c4)}
&card-title{margin:0;font:700 max(15px,17u)/1.15 var(--font-title);color:#2e1c13}
&card-sub{font:600 max(11px,12u)/1.25 var(--font-body);color:#6b4a30}
&card-row{display:flex;align-items:center;gap:8u;min-width:0}
&card-row>&card-sub{flex:1 1 auto;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&link{flex:none;min-height:44px;min-width:44px;margin:-12px -6u -12px 0;padding:0 6u;background:none;border:0;font:700 max(11px,12u)/1 var(--font-body);color:#7a4b2a;text-decoration:underline;text-underline-offset:3px;cursor:pointer;white-space:nowrap}
&link.is-danger{color:#9a3b26}
&nb{font-family:var(--font-body)}
&card-line{display:flex;flex-wrap:wrap;align-items:center;gap:4u 10u;font:700 max(12px,13u)/1.2 var(--font-body);color:#3b2416}
&card-line.is-low{color:#9a3b26}
&note{margin:0;font:600 max(10px,11u)/1.3 var(--font-body);color:#6b4a30}
&note.is-error{color:#9a3b26}
&actions{display:flex;flex-wrap:wrap;gap:6u;align-items:center}
&hold{--fill:0;position:relative;overflow:hidden;min-width:max(200px,220u)}
&hold::after{content:"";position:absolute;left:0;top:0;bottom:0;width:100%;transform-origin:0 50%;transform:scaleX(var(--fill));background:linear-gradient(90deg,#fff8d0cc,#fffef0e6);mix-blend-mode:soft-light;pointer-events:none}
&hold-bar{position:absolute;left:8%;right:8%;bottom:4px;height:5px;border-radius:999px;background:#3b241640;overflow:hidden;pointer-events:none}
&hold-bar>i{display:block;height:100%;width:100%;transform-origin:0 50%;transform:scaleX(var(--fill));background:linear-gradient(90deg,#7b4fa8,#c84cff)}
&hold.is-holding{filter:brightness(1.06)}
&hold.is-blocked{filter:saturate(.15) brightness(.9);opacity:.85}
&hold.is-full{animation:marche-defi-pop 260ms ease-out}
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
@container marche-defi (max-width:620px){&cols{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:8u}&row{gap:5u;padding:2u 6u}&row-n{min-width:26px}&hold{min-width:0;width:100%}}
@container marche-defi (max-height:400px){&lead{display:none}&card{padding:5u 9u;gap:2u}}
@container marche-defi (max-height:330px){&sheet %%sub-head{min-height:40px}&card-title{font-size:max(14px,15u)}&note{font-size:10px}&h.is-mode,&card-sub.is-chapter{display:none}&col{gap:4u}}
@container marche-defi-r (max-width:620px){&score{gap:4u}&stat-v{font-size:max(16px,18u)}}
@container marche-defi-r (max-height:330px){&stat{padding:3u 4u}&lead{display:none}}
`),M="marche-defi-css";function He(){if(typeof document>"u"||document.getElementById(M))return;const e=document.createElement("style");e.id=M,e.textContent=Se,document.head.append(e)}export{d as D,qe as M,je as a,We as b,Ve as c,Me as d,He as e,Be as f,Oe as g,Ae as h,Ce as i,_e as j,De as k,Re as l,Fe as n,Te as r,pe as t,Le as w};

