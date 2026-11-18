import{al as i,ap as r,dj as l}from"./index-Db6Hoiz9.js";const s="Battle",d="Une arène que tu as franchie, des vagues sans fin : les créatures du Bestiaire, des plus faibles aux plus redoutables. Tout le monde joue en même temps, chacun sur son téléphone, sur les mêmes vagues.",p="Arène",c="Arène {{n}}",u="repaire du boss",f="À franchir d’abord",x="Arène précédente",g="Arène suivante",m="Franchis une première arène pour ouvrir la Battle.",b="Difficulté",h="{{count}} vague",w="{{count}} vagues",y="{{count}} ennemi",v="{{count}} ennemis",k="Maintiens Entrée",j={title:"Équipement",personal:"Équipement personnel",common:"Équipement commun",personalHint:"Chacun son équipement, son pouvoir et son esquive.",commonHint:"Niveau médian pour tous. Chacun garde son pouvoir et son esquive.",shared:"L’équipement de tous",sword:"Épée",armor:"Armure",magic:"Magie",shield:"Bouclier",level:"niv. {{n}}",noShield:"aucun",locked:"Un joueur est prêt : l’équipement ne change plus.",creatorOnly:"Le créateur choisit l’équipement."},z={offline:"La Battle se joue en ligne, entre amis : active le jeu en ligne dans Social.",account:"La Battle se joue entre amis : crée ton compte dans Social.",friends:"Une battle se joue à deux ou plus : ajoute d’abord un ami dans Social.",open:"Ouvrir Social"},P={title:"Salon",sub:"Manche {{n}} · {{setting}}",countdown:"Départ dans",seconds:"{{n}} s",rules:"Quand tous les présents sont prêts, la battle part. À zéro, elle part avec ceux qui sont prêts (deux au moins).",ready:"Prêt",hold:"maintiens pour confirmer",unready:"Je ne suis plus prêt",isReady:"Prêt !",waiting:"Pas encore prêt",absent:"Pas dans le salon",present:"Au salon",online:"En ligne",offline:"Hors ligne",out:"Hors de cette manche",you:"toi",leave:"Quitter le salon",starting:"La battle commence !",cancelled:"Manche annulée : moins de deux joueurs prêts.",live:"Cette manche se joue déjà : attends la revanche.",join:"Rejoindre le salon",joinIn:"Rejoindre le salon ({{s}} s)",invite:"{{pseudo}} t’attend au salon - {{setting}}",inviteGo:"Y aller",inviteLater:"Plus tard",launch:"Lancer la battle",badge_one:"{{count}} salon t’attend",badge_other:"{{count}} salons t’attendent",readyCost:"Prêt · {{cost}} pts de réputation",short:"Il te faut {{cost}} points de réputation pour jouer."},C={wave:"Vague {{n}}",label:"Battle · vague {{n}} · {{left}} restant(s)",cleared:"Vague {{n}} franchie !",next:"Vague {{n}}",guardian:"Un gardien approche !",go:"Combattez !",wait:"Les autres arrivent…"},R={title:"Adversaires",playing:"en jeu",fallen:"tombé",forfeit:"abandon",stopped:"vainqueur",away:"déconnecté",wave:"V{{n}}",line:"{{pseudo}} : vague {{n}}, {{status}}"},q={live:"La battle continue pendant que tu es dans ce menu : rien n’est en pause.",propose:"Proposer une pause",left:"Pauses restantes : {{n}}",none:"Plus aucune pause",active:"Une pause est déjà en cours",title:"Pause",by:"Pause demandée par {{pseudo}}",byMe:"Tu as demandé une pause",for:"Tout le monde est en pause",resume:"Reprise",abandonWarning:"Tu finis dernier, sans point, sans or ni réputation. En duel, ton adversaire gagne aussitôt.",away:"Si tu quittes le jeu, tu as 60 s pour revenir dans la battle (sinon, c’est un abandon)."},L={title:"Battle terminée",fell:"Erynd est tombé à la vague {{n}}.",quit:"Tu as abandonné à la vague {{n}}.",won:"Ton adversaire a abandonné : tu gagnes !",waves:"Vagues franchies",kills:"Ennemis vaincus",time:"Temps",gain:"+{{gold}} or",gainNone:"Aucun or : franchis une vague.",gainCap:"L’or des {{n}} premières vagues seulement.",waiting:"Les autres jouent encore…",camp:"Au camp",rematch:"Revanche",points:"Pts",pointsFull:"Points de la manche",ranking:"Manche {{n}}",forfeit:"abandon",record:"Nouveau record !",dropped:"Connexion perdue plus d’une minute : compté comme un abandon.",gainForfeit:"Aucun or : abandon.",rep:"+{{n}} réputation",repNone:"Aucun point de réputation",repWait:"Réputation : à la fin de la manche"},S={loading:"Chargement…",none:"Aucune battle pour l’instant. Lance la première !",new:"Nouvelle battle",goBattle:"Battle",emptyTitle:"Aucune battle en cours",emptyLead:"Crée une nouvelle battle ou attends l’invitation d’un ami.",emptyTag:"Jusqu’à {{n}} joueurs · Défi entre amis",emptyCreate:"Créer",emptyCreateSub:"Choisis une arène et invite tes amis",emptyJoin:"Rejoindre",emptyJoinSub:"Les invitations reçues apparaîtront ici",create:"Créer la battle",pickFriends:"Invite jusqu’à {{n}} amis",noFriends:"Ajoute d’abord des amis dans Social.",chosen:"{{n}}/{{max}} amis",setting:"Arène {{n}} · {{mode}}",by:"par {{pseudo}}",members_one:"{{count}} joueur",members_other:"{{count}} joueurs",round:"Manche {{n}}",roundSaloon:"Salon ouvert",roundLive:"En cours",roundPlayed:"Jouée",roundWaiting:"À toi de jouer",rematch:"Revanche",rematchHint:"Une nouvelle manche, une nouvelle graine pour tous ; les anciennes restent.",invite:"Inviter",leave:"Quitter",leaveConfirm:"Quitter cette battle ?",noScore:"Personne n’a encore joué cette manche.",scores:"Manche {{n}}",standings:"Classement",history:"Historique",winner:"Vainqueur : {{pseudo}}",noWinner:"Pas encore de vainqueur",colRank:"#",colPlayer:"Joueur",colPlayed:"MJ",colWins:"V",colPodiums:"Pod.",colPoints:"Pts",colBest:"Record",colAvg:"Moy.",colWaves:"Vagues",colKills:"Ennemis",colTime:"Temps",you:"toi",flagged:"en vérification",forfeit:"abandon",launchHere:"Lance une battle depuis l’icône Battle du camp.",badge_one:"{{count}} salon t’attend",badge_other:"{{count}} salons t’attendent",sent:"Battle créée !",submitted:"Score envoyé.",rateLimited:"Trop de battles d’affilée : réessaie dans une heure.",notFound:"Cette battle n’existe plus.",inviteMore:"Inviter d’autres amis",invited:"Invitations envoyées.",offline:"Connexion impossible. Réessaie plus tard.",retry:"Réessayer",back:"Retour",colRankFull:"Place",colPlayedFull:"Manches jouées",colWinsFull:"Victoires",colPodiumsFull:"Podiums (les trois premières places)",colPointsFull:"Points : en duel 1 au premier ; à trois 2 et 1 ; à quatre ou plus 3, 2 et 1 ; un abandon, rien",colBestFull:"Record : le plus de vagues franchies en une manche",colAvgFull:"Moyenne des vagues franchies par manche",colWavesFull:"Vagues franchies",colKillsFull:"Ennemis vaincus",colTimeFull:"Temps survécu",colRep:"Réputation",colRepFull:"Points de réputation gagnés dans la manche (le pot partagé selon les points)"},A="{{n}} · {{name}}",B={title:"Réputation",points_one:"{{count}} point de réputation",points_other:"{{count}} points de réputation",cost:"{{cost}} points de réputation",label:"Réputation : {{count}} points. Chaque manche en coûte {{cost}} (le pot va aux premiers)."},F={banner:"Battle en cours - {{time}} pour y retourner",go:"Revenir",going:"Retour dans la battle…",lost:"Battle perdue : plus d’une minute sans revenir, compté comme un abandon (ni or ni réputation).",ok:"OK",see:"Voir",back:"Te revoilà !",backSub:"La battle a continué sans toi."},T={title:"Messages",label:"Messages",empty:"Aucun message pour l’instant.",offline:"Les messages arrivent en ligne : active le jeu en ligne dans Social.",account:"Les messages arrivent avec un compte : crée-le dans Social.",saloon:"{{pseudo}} t’invite au salon - {{setting}}",rematch:"{{pseudo}} propose une revanche - {{setting}}",go:"Y aller",closed:"Ce salon est fermé.",round:"Battle avec {{with}} : {{place}} · {{won}}",forfeit:"abandon",place1:"1er",place:"{{n}}e",won:"+{{n}} réputation",wonNone:"0 réputation",nobody:"tes amis",friend:"{{pseudo}} veut devenir ton ami",friendGo:"Social",open:"Voir",unread_one:"{{count}} message non lu",unread_other:"{{count}} messages non lus"},_={title:s,lead:d,arenas:p,arenaRow:c,arenaBoss:u,arenaLocked:f,prev:x,next:g,noArena:m,mode:b,waves_one:h,waves_other:w,kills_one:y,kills_other:v,holdKeys:k,kit:j,gate:z,saloon:P,hud:C,board:R,pause:q,result:L,online:S,carLabel:A,rep:B,resume:F,inbox:T};l({marche:{defi:_}});const M=(e,o)=>i(`marche:defi.${e}`,o),W=e=>M("waves",{count:e});function D(e){const o=[];return e.split(" ").forEach((a,n)=>{n>0&&o.push(r("span","marche-defi-nb",void 0,[" "])),a&&o.push(a)}),o}const E=e=>e.replace(/(-?\d*\.?\d+)u\b/g,"calc($1*var(--u))").replace(/&(?=[a-z])/g,".marche-defi-").replace(/%%/g,".marche-"),V=E(`
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
&cols.is-empty{grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr);gap:16u}
&cols.is-empty>&col{position:relative;overflow:hidden}
&cols.is-empty>&col:first-child{gap:8u;padding-top:4u}
&empty-tag{display:flex;align-items:center;justify-content:center;gap:8u;margin:0;font:italic 600 max(11px,12u)/1.3 var(--font-title);color:#6b4a30;text-align:center}
&empty-tag::before,&empty-tag::after{content:"";flex:0 0 max(10px,14u);height:1px;background:#b9966299}
&empty-ghost{position:absolute;left:-6%;bottom:-4%;width:96%;height:auto;opacity:.13;filter:sepia(1) saturate(.4) brightness(1.05);pointer-events:none;z-index:0}
&cols.is-empty>&col:first-child>:not(&empty-ghost){position:relative;z-index:1}
&empty-hero{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:max(4px,5u);text-align:center}
&empty-emblem{flex:0 1 auto;min-height:0;width:auto;height:max(92px,118u);max-width:62%;object-fit:contain;filter:drop-shadow(0 6px 8px #3b241640)}
&empty-title{margin:0;font:700 max(19px,23u)/1.1 var(--font-title);color:#2a1b1d}
&empty-rule{position:relative;width:min(70%,220u);height:1.5px;margin:max(2px,3u) 0;background:linear-gradient(90deg,#d6a54800,#d6a548 25%,#d6a548 75%,#d6a54800)}
&empty-rule::before{content:"";position:absolute;left:50%;top:50%;width:7px;height:7px;transform:translate(-50%,-50%) rotate(45deg);background:#e8b84a;box-shadow:0 0 0 2px #fbf3df}
&empty-lead{margin:0;font:italic 600 max(11.5px,12.5u)/1.3 var(--font-body);color:#5b3d28}
&empty-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:max(8px,10u);width:100%;margin-top:max(4px,6u)}
&empty-card{display:flex;align-items:center;gap:max(6px,8u);min-height:44px;padding:max(6px,7u) max(8px,10u);border:1.5px solid #c9a46a;border-radius:12px;background:linear-gradient(#fffaf0,#f3e3c2);box-shadow:0 2px 4px #3b24161f,inset 0 1px 0 #fff;color:#2a1b1d;font:inherit;text-align:left}
button&empty-card{cursor:pointer}
button&empty-card.is-pressed{transform:translateY(1px);box-shadow:0 1px 2px #3b24161f}
&empty-ico{flex:none;width:max(40px,50u);height:max(34px,42u);object-fit:contain}
&empty-sep{flex:none;align-self:stretch;width:1.5px;margin:2px 0;background:#c9a46a99}
&empty-ctext{min-width:0;display:flex;flex-direction:column;gap:2px}
&empty-ctext>b{font:700 max(13px,15u)/1.1 var(--font-title);color:#2a1b1d}
&empty-ctext>span{font:italic 600 max(10.5px,11.5u)/1.25 var(--font-body);color:#5b3d28}
@container marche-defi (max-height:330px){&empty-emblem{height:max(72px,84u)}&empty-lead{display:none}}
@container marche-defi (max-width:700px){&empty-tag{white-space:nowrap;font-size:max(10.5px,11u)}&empty-tag::before,&empty-tag::after{display:none}}
&empty-go{margin:auto 0;display:flex;flex-direction:column;align-items:center;gap:max(10px,12u)}
&empty-go>&empty{margin:0}
&empty-go>.marche-button{min-width:max(160px,170u)}
@container marche-defi (max-width:620px){&cols{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:8u}&row{gap:5u;padding:2u 6u}&row-n{min-width:26px}&hold{min-width:0;width:100%}}
@container marche-defi (max-height:400px){&lead{display:none}&card{padding:5u 9u;gap:2u}}
@container marche-defi (max-height:330px){&sheet %%sub-head{min-height:40px}&card-title{font-size:max(14px,15u)}&note{font-size:10px}&h.is-mode,&card-sub.is-chapter{display:none}&col{gap:4u}}
@container marche-defi-r (max-width:620px){&score{gap:4u}&stat-v{font-size:max(16px,18u)}}
@container marche-defi-r (max-height:330px){&stat{padding:3u 4u}&lead{display:none}}
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
&saloon &hold{min-width:0;width:100%}
@container marche-defi-s (max-height:330px){&saloon-p{min-height:42px;padding:2u 8u}&saloon &note.is-rules{display:none}}
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
&toast{position:fixed;z-index:330;left:50%;top:calc(env(safe-area-inset-top,0px) + 10px);transform:translateX(-50%);display:flex;align-items:center;gap:8px;max-width:calc(100vw - 32px);padding:6px 8px 6px 12px;border-radius:14px;background:linear-gradient(#3a2414f2,#2a170cf2);border:2px solid #c9963c;box-shadow:0 6px 16px #000a;color:#fff3d6;font:600 13px/1.25 var(--font-body)}
&toast-text{min-width:0}
&toast-go{flex:none;min-height:40px;padding:0 12px;border-radius:999px;border:2px solid #2a170c;background:linear-gradient(#ffe07a,#f6b23c);color:#2e1c13;font:700 13px/1 var(--font-title);cursor:pointer}
&toast &link{color:#ffd76a;margin:0}
&car{display:flex;align-items:center;gap:0;min-width:0;flex:none}
&car-track{position:relative;flex:1 1 auto;min-width:0;display:flex;align-items:flex-start;gap:0;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;padding:12px 0 6px;-webkit-overflow-scrolling:touch}
&car-track::-webkit-scrollbar{display:none}
&car-track::before,&car-track::after{content:"";flex:none;width:33%}
&car-item{flex:none;scroll-snap-align:center;width:34%;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;border:0;background:none;cursor:pointer;color:#efe0b8;font:inherit;text-align:center}
&car-item.is-locked{cursor:default;opacity:.6}
&car-pic{position:relative;display:block;width:100%;height:max(108px,132u);transform:scale(.7);transform-origin:50% 72%;transition:transform .25s ease-out,filter .25s}
&car-item.is-on &car-pic{transform:scale(1.24);transform-origin:50% 82%;filter:drop-shadow(0 0 10px #6fe3c45c) drop-shadow(0 4px 6px #0008)}
&car-pic canvas{display:block;width:100%;height:100%}
&car-item.is-before &car-pic{transform-origin:92% 72%}
&car-item.is-after &car-pic{transform-origin:8% 72%}
&car-item.is-before &car-label,&car-item.is-after &car-label{align-self:center;max-width:96%}
&car-label{display:block;max-width:100%;margin-top:-10u;font:600 max(10px,11u)/1.2 var(--font-title);color:#d9c99f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
&car-item.is-on &car-label{position:relative;max-width:none;margin:6u -40% 0;padding:0 4px 6px;overflow:visible;font-size:max(13px,15u);color:#f6e7c0;text-shadow:0 1px 0 #06120f}
&car-item.is-on &car-label::after{content:"";position:absolute;left:4%;right:4%;bottom:0;height:1.5px;background:linear-gradient(90deg,#e8c06200,#e8c062 30%,#e8c062 70%,#e8c06200)}
&car-item.is-on &car-label::before{content:"";position:absolute;left:50%;bottom:-2.5px;width:6px;height:6px;transform:translateX(-50%) rotate(45deg);background:#f0cd6e;box-shadow:0 0 5px #e8c062aa}
&car-boss{position:absolute;left:50%;bottom:6%;transform:translateX(-50%);padding:1px 6px;border-radius:999px;background:#0a201dcc;color:#ffe07a;font:700 9px/1.2 var(--font-body);white-space:nowrap}
&car-lock{position:absolute;inset:0;display:grid;place-items:center}
&car-lock svg{width:24px;height:24px}
&car-arrow{flex:none;display:grid;place-items:center;width:40px;height:44px;padding:0;border:0;background:none;color:#efe0b8;cursor:pointer}
&car-arrow:disabled{opacity:.3;cursor:default}
&car-chev{display:block;width:13px;height:24px}
&car-chev svg{display:block;width:100%;height:100%}
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
&sheet.is-new &seg{background:#f3e7cf;color:#3b2416}
&sheet.is-new &seg+&seg{border-left-color:#c9a24a}
&sheet.is-new &seg.is-on{background:linear-gradient(#ffd96a,#f0a92e);color:#2e1c13}
&sheet.is-new &mode{border-color:#c9a24a;opacity:.55}
&sheet.is-new &mode.is-on{opacity:1;box-shadow:0 0 0 2px #0f2e2a,0 0 0 3.5px #e8c062}
&col.is-friends{padding-left:12u;border-left:1px solid #c9a24a80}
&sheet.is-new &friend{background:#0a201d66;border:1.5px solid #c9a24a99;border-radius:14px;color:#f3e3b5;font:600 max(12px,13u)/1.2 var(--font-title)}
&sheet.is-new &friend.is-on{background:#17433c;border-color:#f0cd6e}
&actions.is-end{margin-top:auto;justify-content:flex-end}
&create-foot{display:flex;flex-direction:column;align-items:flex-end;gap:2u;text-align:right}
&sheet.is-new &rep.is-cost{color:#d8c9a3}
@container marche-defi (max-height:400px){&car-pic{height:max(92px,104u)}&line{padding-top:2u}}
@container marche-defi (max-height:330px){&car-pic{height:72px}&kit-hint{display:none}}
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
`),t="marche-defi-css";function H(){if(typeof document>"u"||document.getElementById(t))return;const e=document.createElement("style");e.id=t,e.textContent=V,document.head.append(e)}export{H as e,D as n,M as t,W as w};

