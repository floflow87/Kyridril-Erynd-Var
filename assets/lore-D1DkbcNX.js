const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dioramas-BTwrqrSc.js","./index-CnLfrqzb.js","./phaser-DIUF0PZB.js","./depths-kit-CkKbvTca.js","./ribbon-zD4PkBp8.js","./ashlands-kit-C4fsNm4I.js","./cinder-kit-BjudAcFc.js","./void-kit-U_JfgOGq.js"])))=>i.map(i=>d[i]);
import{dM as be,eA as ge,af as o,a9 as ee,ab as s,dI as P,ad as E,aQ as ve,dY as xe,aZ as V,dn as ye,bw as re}from"./index-CnLfrqzb.js";import{_ as we,w as ke,a1 as qe}from"./arena-JGFn_QPD.js";import"./phaser-DIUF0PZB.js";import"./scene-kit-CkzbaX21.js";const Le={chapter:"Chapitre {{n}}",chapterFull:"Chapitre {{n}} — {{name}}",intro:"Introduction",epilogue:"Épilogue",skip:"Passer",more:"Toucher pour continuer",end:"Toucher pour reprendre la route",moreKeys:"[[{{enter}}]] continuer",replay:"Revoir les récits",replayRow:"Récits",replayTitle:"Les récits",replaySub:"Les cartes des chapitres déjà découvertes",replayLocked:"À découvrir",close:"Fermer",dismiss:"Fermer la réplique"},Ee={erynd:"Erynd",valeor:"Valeor",gardienne:"La Gardienne"},Me={1:{name:"Les Brumes",subtitle:"Là où la forêt se souvient",intro:["La guerre est terminée depuis six ans. Pourtant, dans les terres occidentales de Kyridril, des villages disparaissent et les anciennes routes ne mènent plus nulle part.","Erynd Var marche seul, portant sur son bouclier les noms de cent treize soldats qu’il n’a pas pu sauver.","Au-delà des brumes, quelque chose s’éveille sous les racines."],epilogue:["Le Sylvain s’effondra dans un craquement qui fit trembler toute la forêt. Dans sa poitrine, une étrange lueur violette s’éteignit.","Erynd découvrit sous ses racines les vestiges d’un ancien passage. Sur une dalle de pierre était gravé un cercle traversé de cinq entailles.","Dans les profondeurs, une lumière identique venait de s’allumer."]},2:{name:"Les Profondeurs",subtitle:"Ce que la pierre a englouti",intro:["Sous les montagnes s’étend un royaume oublié des hommes. Les galeries abandonnées renferment des cristaux plus anciens que les premières couronnes.","Quelque chose circule dans les profondeurs, réveillant les créatures qui y sommeillaient.","Erynd descend là où même les mineurs refusaient autrefois de s’aventurer."],epilogue:["La Reine Tisseuse poussa un dernier cri. Ses innombrables fils se détendirent et la fosse fut soudain plongée dans le silence.","Parmi les cocons éventrés, Erynd trouva un fragment de métal noir portant le même symbole que la dalle du Cœur Sylvestre.","À travers une fissure de la montagne, il aperçut une lueur rouge à l’horizon. Des terres entières brûlaient."]},3:{name:"Les Terres Brûlées",subtitle:"Les guerres qui ne meurent jamais",intro:["Les flammes ont dévoré les forêts et la terre s’est ouverte sous les champs de bataille.","Dans les ruines de la guerre contre Krynax, des bandes de pillards se disputent les dernières routes encore praticables.","Erynd reconnaît les étendards abandonnés. Certains appartenaient aux hommes qu’il avait jadis commandés."],epilogue:["Gorvak le Fléau tomba devant les portes de son fort. Sa mort mit fin au règne de terreur des pillards.","Dans ses quartiers, Erynd découvrit une carte indiquant plusieurs lieux déjà traversés. Tous étaient reliés par un tracé noir.","La dernière route menait vers les anciennes terres funéraires de Kyridril.","Une inscription figurait au dos : « Les morts gardent ce que les vivants ont oublié. »"]},4:{name:"Les Cendres",subtitle:"Le nom des disparus",intro:["Au-delà des plaines, les morts ne reposent plus en paix.","Les sépultures sont ouvertes, les statues pleurent des larmes de cendre et une voix inconnue appelle les voyageurs par leur nom.","Erynd entre dans la nécropole avec une seule certitude : certains souvenirs devraient appartenir aux vivants."],epilogue:["Morvane se dissipa dans une pluie de cendres violettes.","Les voix qui hantaient la nécropole se turent. Mais avant de disparaître, la Nécromancienne avait prononcé un nom qu’Erynd espérait ne plus jamais entendre.","Elian Tor.","Le plus jeune des soldats tombés au col de Sael.","Comment Morvane connaissait-elle ce nom ?"]},5:{name:"La Corruption",subtitle:"Le dernier rempart",intro:["La terre est déchirée. Des îlots de pierre flottent au-dessus du Néant et les derniers vestiges d’une forteresse oubliée se dressent au bord de l’abîme.","Quelque chose a guidé Erynd jusqu’ici, à travers les forêts, les profondeurs et les tombeaux.","Au bout de la route l’attend un guerrier portant les couleurs de son ancien régiment."],epilogue:["Le Guerrier Corrompu posa un genou à terre. Sa silhouette se défit, révélant une armure vide.","Erynd souleva le casque. Il n’y avait personne dessous.","Un dernier murmure s’éleva :","« Les noms ne disparaissent jamais. Ils attendent qu’on les appelle. »","Au-delà du trône, Erynd découvrit une carte ancienne. Sept marques entouraient un passage effacé des registres royaux.","Au centre figurait un nom : le Pont des Sept Cloches.","Le chevalier replia la carte, ranima les dernières braises de son camp et reprit la route.","Il n’avait pas trouvé toutes les réponses.","Mais pour la première fois, il savait où chercher."]}},Re={sylvan:{name:"Le Sylvain Corrompu",encounter:"Le Gardien aux racines noires",appear:"« J’ai gardé cette forêt avant la naissance de vos rois. Étranger, pourquoi viens-tu troubler mon dernier sommeil ? »",rage:"« Mes racines plongent plus loin que tes souvenirs ! Tu ne peux arracher ce qui grandit sous le monde ! »",fall:"« La forêt… n’est pas malade. Quelqu’un… l’empoisonne… »"},weaver:{name:"La Reine Tisseuse",encounter:"La Mère des mille fils",appear:"« Un autre voyageur… Tous ceux qui entrent dans ma fosse finissent par appartenir à ma toile. »",rage:"« Mes enfants ! Refermez les passages ! Aucun vivant ne quittera mon royaume ! »",fall:"« J’avais tissé les portes… pour empêcher quelque chose d’entrer… »"},gorvak:{name:"Gorvak le Fléau",encounter:"Le Seigneur des terres brûlées",appear:"« Un soldat de Kyridril ? J’ai vu ton royaume à genoux ! Et maintenant, c’est mon tour de prendre ce qui reste ! »",rage:"« Vous autres, chevaliers, parlez toujours d’honneur ! L’honneur ne nourrit pas mes hommes ! »",fall:"« Tu crois m’avoir arrêté ? J’étais payé pour garder la route… Pas pour la comprendre… »"},morvane:{name:"Morvane la Nécromancienne",encounter:"La Reine des noms perdus",appear:"« Erynd Var… Je connais cent treize noms que tu n’as jamais réussi à oublier. Veux-tu entendre leurs voix ? »",rage:"« Regarde la rune, chevalier ! Tu sauras où je reviendrai… mais jamais quand je te prendrai ton dernier souffle ! »",fall:"« Tes morts ne sont pas ici, Erynd… Mais quelqu’un possède encore leur souvenir… »"},corruptedWarrior:{name:"Le Guerrier Corrompu",encounter:"Le Rempart sans âme",appear:"« Cent vingt soldats. Sept survivants. Un capitaine qui marche encore. Pourquoi es-tu le dernier à porter leur histoire ? »",rage:"« Tu peux briser mon armure, Erynd ! Mais tu ne peux combattre ce que tu es devenu ! »",fall:"« Tu ne les as pas abandonnés… Ce sont d’autres hommes… qui ont fermé le passage… »"}},Se={first:{speaker:"erynd",text:"« Encore une nuit. Encore une route. C’est déjà davantage que ce que certains ont eu. »"},a3:{speaker:"valeor",text:"« Une bonne lame ne te sauvera pas de la fatigue. Apprends aussi à te reposer. »"},a6:{speaker:"gardienne",text:"« Les pierres ont de la mémoire. Certaines préfèrent qu’on les laisse dormir. »"},a10:{speaker:"erynd",text:"« Il protégeait cette forêt. Qu’a-t-il fallu lui faire pour qu’il se retourne contre elle ? »"},a11:{speaker:"valeor",text:"« Ce minerai ne ressemble à rien de ce que j’ai forgé. Et je ne suis pas certain de vouloir essayer. »"},a16:{speaker:"gardienne",text:"« La lumière attire les égarés. Elle attire aussi ce qui les poursuit. »"},a20:{speaker:"erynd",text:"« Même cette créature défendait quelque chose. Je me demande contre quoi. »"},a24:{speaker:"erynd",text:"« Je reconnais ces couleurs. J’aurais préféré ne jamais les revoir. »"},a28:{speaker:"valeor",text:"« Ton armure tiendra contre les flammes. Mais ne me demande pas de garantir ce qu’il y a dedans. »"},a30:{speaker:"gardienne",text:"« Certains choisissent le mal. D’autres lui ouvrent simplement la porte. »"},a34:{speaker:"erynd",text:"« Cent treize noms. Je les ai répétés chaque nuit pour être certain de n’en oublier aucun. »"},a38:{speaker:"gardienne",text:"« Morvane ne commande pas aux morts. Elle commande à ce qu’il reste d’eux. »"},a40:{speaker:"erynd",text:"« Elle connaissait Elian. Je dois comprendre comment. »"},a45:{speaker:"valeor",text:"« Cette armure… Les marques sur le métal ressemblent aux tiennes. »"},a49:{speaker:"erynd",text:"« Si quelqu’un m’attend là-bas, alors il est temps de lui répondre. »"},a50:{speaker:"gardienne",text:"« Certaines portes ne s’ouvrent qu’à ceux qui ont cessé de fuir. »"}},Te={gold:{speaker:"valeor",text:"« Même les héros ont besoin d’une bourse. Reviens quand tu auras de quoi payer le métal. »"},defeats:{speaker:"erynd",text:"« J’ai déjà connu des jours où me relever semblait impossible. Celui-ci n’en fera pas partie. »"},offering:{speaker:"gardienne",text:"« La lumière peut guider ta lame. C’est à toi de décider où elle frappera. »"},bossAgain:{speaker:"erynd",text:"« Je connais maintenant ce chemin. Mais je me souviens aussi de ce qui m’y attend. »"}},$e={ui:Le,speaker:Ee,chapter:Me,boss:Re,camp:Se,context:Te},Ce={loreRecits:$e};function k(e){return e.lore??{chapterIntroSeen:[],chapterEpilogueSeen:[],campLinesSeen:[]}}function te(e,r){const t={...k(e),...r};return t.lossStreak||delete t.lossStreak,{...e,lore:t}}function ae(e,r,t){const a=k(e);return r>=1&&!(t==="intro"?a.chapterIntroSeen:a.chapterEpilogueSeen).includes(r)}function Ae(e,r,t){if(!ae(e,r,t))return e;const a=k(e),n=[...t==="intro"?a.chapterIntroSeen:a.chapterEpilogueSeen,r].sort((i,c)=>i-c);return te(e,t==="intro"?{chapterIntroSeen:n}:{chapterEpilogueSeen:n})}const _e=[{id:"first",speaker:"erynd",after:0},{id:"a3",speaker:"valeor",after:3},{id:"a6",speaker:"gardienne",after:6},{id:"a10",speaker:"erynd",after:10},{id:"a11",speaker:"valeor",after:11,reached:!0},{id:"a16",speaker:"gardienne",after:16},{id:"a20",speaker:"erynd",after:20},{id:"a24",speaker:"erynd",after:24},{id:"a28",speaker:"valeor",after:28},{id:"a30",speaker:"gardienne",after:30},{id:"a34",speaker:"erynd",after:34},{id:"a38",speaker:"gardienne",after:38},{id:"a40",speaker:"erynd",after:40},{id:"a45",speaker:"valeor",after:45},{id:"a49",speaker:"erynd",after:49},{id:"a50",speaker:"gardienne",after:50}],De={gold:"valeor",defeats:"erynd",offering:"gardienne",bossAgain:"erynd"},Ie=3;function Fe(e){return Math.max(0,...e.cleared,...e.checkpoints)}function Pe(e,r){const t=Fe(e);return(r.reached?Math.max(t,e.stats.bestArena):t)>=r.after}function Oe(e){const r=new Set(k(e).campLinesSeen);let t=null;for(const a of _e)if(!(r.has(a.id)||!Pe(e,a))){if(a.after===0)return a;(!t||a.after>t.after)&&(t=a)}return t}function je(e,r){const t=k(e).campLinesSeen;return t.includes(r)?e:te(e,{campLinesSeen:[...t,r]})}function Be(e){return(k(e).lossStreak??0)>=Ie}class Ne{said=new Set;take(r){return this.said.has(r)?!1:(this.said.add(r),!0)}has(r){return this.said.has(r)}}const Ke=`
.marche-lore-card {
  position: fixed; inset: 0; z-index: 320; overflow: hidden; pointer-events: auto; touch-action: none;
  background: #07040b; color: #f6ead0; cursor: pointer;
  --lore-accent: #b04cff; --lore-tint: #3d2a6e; --lore-glow: #d9a6ff;
  animation: marche-lore-in 520ms ease-out both;
}
.marche-lore-card.is-closing { animation: marche-lore-out 480ms ease-in both; pointer-events: none; }
@keyframes marche-lore-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes marche-lore-out { from { opacity: 1; } to { opacity: 0; } }
.marche-lore-card.is-ch-1 { --lore-accent: #8fd16a; --lore-tint: #1f5a46; --lore-glow: #c7a6ff; }
.marche-lore-card.is-ch-2 { --lore-accent: #7fc8ff; --lore-tint: #24307a; --lore-glow: #b9a2ff; }
.marche-lore-card.is-ch-3 { --lore-accent: #ff9a4a; --lore-tint: #7a2414; --lore-glow: #ffc27a; }
.marche-lore-card.is-ch-4 { --lore-accent: #cfc2e6; --lore-tint: #3c3550; --lore-glow: #d9c8ff; }
.marche-lore-card.is-ch-5 { --lore-accent: #c77dff; --lore-tint: #4a1478; --lore-glow: #e2b0ff; }

/* The illustration: the author's file, else the key art toned to the chapter with the boss's
   lair floating on the right — both drifting slowly (Ken Burns). */
.marche-lore-art { position: absolute; inset: -4%; transform-origin: 60% 45%; animation: marche-lore-drift 28s ease-in-out infinite alternate; }
@keyframes marche-lore-drift {
  from { transform: scale(1.02) translate3d(0, 0, 0); }
  to { transform: scale(1.12) translate3d(-2.2%, -1.4%, 0); }
}
.marche-lore-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 900ms ease-out; }
.marche-lore-bg.is-ready { opacity: 1; }
.marche-lore-card:not(.is-custom) .marche-lore-bg { filter: brightness(0.52) saturate(0.75) contrast(1.05) blur(1.2px); }
.marche-lore-tint { position: absolute; inset: 0; background: var(--lore-tint); mix-blend-mode: color; opacity: 0.72; }
.marche-lore-card.is-custom .marche-lore-tint { display: none; }
.marche-lore-halo {
  position: absolute; right: 2%; top: 50%; width: min(48cqw, 86cqh); aspect-ratio: 1.25; transform: translate(4%, -46%);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--lore-glow) 42%, transparent), transparent 72%);
  opacity: 0; transition: opacity 1400ms ease-out 200ms;
}
.marche-lore-dio {
  position: absolute; right: 3%; top: 50%; width: min(41cqw, 76cqh); aspect-ratio: 1.25; transform: translate(2%, -50%);
  opacity: 0; transition: opacity 1400ms ease-out 200ms;
  filter: drop-shadow(0 0 18px color-mix(in srgb, var(--lore-glow) 55%, transparent)) brightness(0.92);
}
.marche-lore-dio.is-ready, .marche-lore-dio.is-ready + .marche-lore-halo { opacity: 1; }
.marche-lore-dio.is-ready { animation: marche-lore-bob 7s ease-in-out infinite alternate; }
@keyframes marche-lore-bob { from { translate: 0 -1.2%; } to { translate: 0 1.2%; } }
.marche-lore-card.is-custom .marche-lore-dio, .marche-lore-card.is-custom .marche-lore-halo { display: none; }
.marche-lore-veil {
  position: absolute; inset: 0; pointer-events: none;
  background:
    linear-gradient(90deg, rgba(7, 4, 11, 0.94) 0%, rgba(7, 4, 11, 0.82) 34%, rgba(7, 4, 11, 0.3) 62%, rgba(7, 4, 11, 0.08) 80%, rgba(7, 4, 11, 0.4) 100%),
    linear-gradient(180deg, rgba(7, 4, 11, 0.55) 0%, transparent 22%, transparent 70%, rgba(7, 4, 11, 0.85) 100%),
    radial-gradient(ellipse 120% 95% at 60% 45%, transparent 55%, rgba(0, 0, 0, 0.6) 100%);
}
.marche-lore-motes { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.marche-lore-mote {
  position: absolute; bottom: -4%; width: 4px; height: 4px; border-radius: 50%;
  background: var(--lore-accent); box-shadow: 0 0 8px 2px color-mix(in srgb, var(--lore-accent) 70%, transparent);
  opacity: 0; animation: marche-lore-rise linear infinite;
}
@keyframes marche-lore-rise {
  0% { transform: translate3d(0, 0, 0); opacity: 0; }
  12% { opacity: 0.85; }
  70% { opacity: 0.5; }
  100% { transform: translate3d(var(--dx, 20px), -105cqh, 0); opacity: 0; }
}

/* The text: kicker, title, subtitle, the gold rule, then the paragraphs one by one. */
.marche-lore-text {
  position: absolute; display: flex; flex-direction: column;
  left: calc(var(--hud-l) + max(18px, 4cqw)); top: calc(var(--hud-y) + max(14px, 6cqh));
  bottom: calc(var(--sab) + max(46px, 14cqh)); width: min(55cqw, 660px);
}
.marche-lore-kicker {
  font: 700 max(10px, min(2.7cqh, 15px)) / 1.2 var(--font-body); letter-spacing: 0.32em; text-transform: uppercase;
  color: #f6c343; text-shadow: 0 1px 6px rgba(0, 0, 0, 0.8);
}
.marche-lore-title {
  margin: 0.1em 0 0; font: 700 max(24px, min(8.6cqh, 56px)) / 1.02 var(--font-title); color: #fbf1d3; letter-spacing: 0.01em;
  text-shadow: 0 2px 0 #2a1b1d, 0 0 26px color-mix(in srgb, var(--lore-glow) 55%, transparent), 0 4px 14px rgba(0, 0, 0, 0.8);
}
.marche-lore-sub {
  margin-top: 0.3em; font: italic 400 max(13px, min(3.7cqh, 22px)) / 1.25 var(--font-title);
  color: color-mix(in srgb, var(--lore-glow) 78%, #fff); text-shadow: 0 1px 8px rgba(0, 0, 0, 0.9);
}
.marche-lore-rule {
  position: relative; flex: none; width: min(46%, 240px); height: 2px; margin: max(7px, 2.2cqh) 0 max(8px, 2.6cqh);
  background: linear-gradient(90deg, #f6c343, rgba(246, 195, 67, 0.5) 60%, transparent);
}
.marche-lore-rule::before {
  content: ''; position: absolute; left: -2px; top: 50%; width: 9px; height: 9px; transform: translate(0, -50%) rotate(45deg);
  background: #f6c343; box-shadow: 0 0 10px #f6c343a0;
}
.marche-lore-body {
  flex: 1 1 auto; min-height: 0; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: none;
  padding-right: 0.4em; scroll-behavior: smooth;
}
.marche-lore-body::-webkit-scrollbar { display: none; }
.marche-lore-body.is-scrolled { mask-image: linear-gradient(180deg, transparent 0, #000 3.2em); -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 3.2em); }
.marche-lore-p {
  margin: 0 0 0.55em; font: 400 max(14px, min(4cqh, 22px)) / 1.42 var(--font-title); color: #f6ead0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.95), 0 0 14px rgba(0, 0, 0, 0.7); text-wrap: pretty;
  opacity: 0; transform: translateY(0.5em); filter: blur(4px);
  transition: opacity 1100ms ease-out, transform 1100ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 1100ms ease-out, color 900ms;
}
.marche-lore-p:not(.is-in) { display: none; }
.marche-lore-p.is-shown { opacity: 1; transform: none; filter: none; }
.marche-lore-p.is-past { color: #d9ccb0; }
.marche-lore-p.is-quote { font-style: italic; color: #fbe7b8; }
.marche-lore-head > * { opacity: 0; transform: translateY(0.35em); transition: opacity 900ms ease-out, transform 900ms ease-out; }
.marche-lore-head.is-shown > * { opacity: 1; transform: none; }
.marche-lore-head.is-shown > :nth-child(2) { transition-delay: 160ms; }
.marche-lore-head.is-shown > :nth-child(3) { transition-delay: 380ms; }
.marche-lore-head.is-shown > :nth-child(4) { transition-delay: 560ms; }

/* Foot: what a tap does now; « Passer » bottom right. */
.marche-lore-more {
  position: absolute; left: calc(var(--hud-l) + max(18px, 4cqw)); bottom: calc(var(--sab) + max(14px, 5cqh));
  display: flex; align-items: center; gap: 0.5em; font: 600 max(11px, min(3cqh, 15px)) / 1.2 var(--font-body);
  letter-spacing: 0.06em; color: rgba(246, 234, 208, 0.72); opacity: 0; transition: opacity 600ms ease-out;
}
.marche-lore-more.is-shown { opacity: 1; }
.marche-lore-more::after {
  content: ''; width: 0.5em; height: 0.5em; border-right: 2px solid #f6c343; border-bottom: 2px solid #f6c343;
  transform: rotate(-45deg); animation: marche-lore-nudge 1.4s ease-in-out infinite;
}
@keyframes marche-lore-nudge { 0%, 100% { translate: 0 0; } 50% { translate: 4px 0; } }
.marche-lore-more .marche-kbd { font-size: 0.95em; }
.marche-lore-skip {
  position: absolute; right: calc(var(--sar) + max(14px, 3.4cqw)); bottom: calc(var(--sab) + max(10px, 4cqh));
  display: inline-flex; align-items: center; gap: 0.45em; min-height: 44px; padding: 0.45em 1.15em 0.45em 1.25em;
  font: 700 max(13px, min(3.4cqh, 17px)) / 1 var(--font-title); letter-spacing: 0.04em; color: #fbf1d3; cursor: pointer;
  background: rgba(20, 12, 28, 0.62); border: 2px solid rgba(246, 195, 67, 0.75); border-radius: 999px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), 0 6px 18px rgba(0, 0, 0, 0.5), inset 0 0 12px rgba(246, 195, 67, 0.12);
  -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px);
}
.marche-lore-skip::after { content: '››'; color: #f6c343; font-size: 1.15em; margin-top: -0.08em; }
.marche-lore-skip.is-pressed { transform: translateY(1px) scale(0.97); }
@media (prefers-reduced-motion: reduce) {
  .marche-lore-art, .marche-lore-dio.is-ready, .marche-lore-mote, .marche-lore-more::after { animation: none; }
  .marche-lore-p { filter: none; transform: none; }
}

/* The arena's speech line: a dark plate under the HUD (or between the thumbs). */
.marche-lore-say {
  position: fixed; left: 50%; top: calc(var(--hint-y) + 4 * var(--u)); z-index: 255; pointer-events: auto; touch-action: none;
  display: flex; align-items: center; gap: calc(10 * var(--u));
  width: max-content; max-width: max(260px, min(62cqw, 600px));
  padding: calc(7 * var(--u)) calc(16 * var(--u)) calc(8 * var(--u)) calc(7 * var(--u));
  background: linear-gradient(100deg, rgba(18, 9, 26, 0.84), rgba(30, 14, 40, 0.74));
  border: 1.5px solid rgba(217, 166, 255, 0.55); border-radius: calc(16 * var(--u));
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.55), 0 8px 22px rgba(0, 0, 0, 0.45), 0 0 22px rgba(176, 76, 255, 0.22);
  color: #f6ead0; opacity: 0; transform: translate(-50%, -12%) scale(0.97);
  transition: opacity 260ms ease-out, transform 320ms cubic-bezier(0.2, 1.3, 0.4, 1);
}
.marche-lore-say.is-shown { opacity: 1; transform: translate(-50%, 0) scale(1); }
.marche-lore-say.is-shown.is-veiled { opacity: 0.22; }
.marche-lore-say.is-bottom { top: auto; bottom: calc(var(--sab) + 12 * var(--u)); max-width: max(240px, min(56cqw, var(--hint-max, 100cqw))); }
.marche-lore-say.is-erynd { border-color: rgba(246, 195, 67, 0.6); box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.55), 0 8px 22px rgba(0, 0, 0, 0.45), 0 0 18px rgba(246, 195, 67, 0.18); }
.marche-lore-say-emblem { flex: none; width: calc(40 * var(--u)); height: calc(40 * var(--u)); filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.6)); }
.marche-lore-say-emblem svg { width: 100%; height: 100%; display: block; }
.marche-lore-say-box { min-width: 0; }
.marche-lore-say-name {
  font: 700 max(10px, calc(11 * var(--u))) / 1.2 var(--font-body); letter-spacing: 0.16em; text-transform: uppercase; color: #d9a6ff;
}
.marche-lore-say.is-erynd .marche-lore-say-name { color: #f6c343; }
.marche-lore-say-text { margin-top: calc(2 * var(--u)); font: italic 400 max(12.5px, calc(14.5 * var(--u))) / 1.34 var(--font-title); text-wrap: pretty; }
.marche-lore-w { opacity: 0; transition: opacity 240ms ease-out; }
.marche-lore-w.is-on { opacity: 1; }

/* The camp's evening bubble: parchment, the speaker's medallion on its left edge. */
.marche-lore-bubble {
  position: fixed; z-index: 330; pointer-events: auto; touch-action: none; cursor: pointer;
  left: calc(var(--hud-l) + 26 * var(--u)); top: calc(var(--hud-y) + 64 * var(--u));
  display: flex; align-items: center; gap: calc(10 * var(--u));
  width: max-content; max-width: min(56cqw, 500px);
  padding: calc(8 * var(--u)) calc(16 * var(--u)) calc(9 * var(--u)) calc(8 * var(--u));
  background: radial-gradient(ellipse at 25% 15%, #fbf1d3, #f3e3b5 58%, #e3c98d);
  border: 3px solid #3b2416; border-radius: calc(18 * var(--u)); color: #3b2416;
  box-shadow: 0 5px 0 rgba(59, 36, 22, 0.75), 0 12px 26px rgba(0, 0, 0, 0.45);
  opacity: 0; transform: translateY(-8px) scale(0.94); transform-origin: 12% 100%;
  transition: opacity 260ms ease-out, transform 360ms cubic-bezier(0.2, 1.4, 0.4, 1);
}
.marche-lore-bubble.is-shown { opacity: 1; transform: none; }
.marche-lore-bubble.is-leaving { opacity: 0; transform: translateY(-4px) scale(0.97); transition-duration: 320ms; pointer-events: none; }
.marche-lore-bubble.is-erynd:not(.is-room)::after {
  content: ''; position: absolute; left: calc(30 * var(--u)); bottom: calc(-12 * var(--u)); width: calc(18 * var(--u)); height: calc(18 * var(--u));
  background: #ead39c; border-right: 3px solid #3b2416; border-bottom: 3px solid #3b2416; transform: rotate(45deg) skew(8deg, 8deg);
  border-bottom-right-radius: 4px;
}
.marche-lore-bubble.is-room { left: calc(var(--hud-l) + 12 * var(--u)); top: calc(var(--hud-y) + 60 * var(--u)); max-width: min(42cqw, 400px); }
.marche-lore-bubble-emblem { flex: none; width: calc(46 * var(--u)); height: calc(46 * var(--u)); filter: drop-shadow(0 2px 2px rgba(59, 36, 22, 0.45)); }
.marche-lore-bubble-emblem svg { width: 100%; height: 100%; display: block; }
.marche-lore-bubble-box { min-width: 0; }
.marche-lore-bubble-name { font: 700 max(13px, calc(15 * var(--u))) / 1.1 var(--font-title); color: #7a2f33; }
.marche-lore-bubble.is-valeor .marche-lore-bubble-name { color: #8a4b12; }
.marche-lore-bubble.is-gardienne .marche-lore-bubble-name { color: #5b3a8c; }
.marche-lore-bubble-text { margin-top: calc(3 * var(--u)); font: italic 600 max(12.5px, calc(14 * var(--u))) / 1.32 var(--font-title); text-wrap: pretty; }
.marche-lore-bubble-timer {
  position: absolute; left: calc(18 * var(--u)); right: calc(18 * var(--u)); bottom: calc(4 * var(--u)); height: 2px; border-radius: 2px;
  background: rgba(59, 36, 22, 0.28); transform-origin: left; animation: marche-lore-timer linear forwards;
}
@keyframes marche-lore-timer { from { transform: scaleX(1); } to { transform: scaleX(0); } }

/* « Revoir les récits »: the chapters, each with its two cards (the camp's sub-panel look). */
.marche-lore-replay .marche-sub-panel { width: min(100%, calc(620 * var(--u))); }
.marche-lore-replay-sub { margin: 0 0 calc(6 * var(--u)); font: italic 600 max(12px, calc(13 * var(--u))) / 1.25 var(--font-title); color: #6b4a30; }
.marche-lore-replay-list { display: grid; gap: calc(6 * var(--u)); }
.marche-lore-replay-row {
  display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: calc(6 * var(--u));
  padding: calc(5 * var(--u)) calc(6 * var(--u)) calc(5 * var(--u)) calc(10 * var(--u));
  border: 2px solid rgba(59, 36, 22, 0.22); border-radius: 12px; background: rgba(255, 250, 240, 0.45);
}
.marche-lore-replay-name { min-width: 0; font: 700 max(13px, calc(15 * var(--u))) / 1.15 var(--font-title); color: #3b2416; }
.marche-lore-replay-name small { display: block; margin-top: 1px; font: italic 400 max(11px, calc(12 * var(--u))) / 1.2 var(--font-title); color: #6b4a30; }
.marche-lore-replay-row .marche-seg-btn { min-height: 40px; padding: 0 calc(12 * var(--u)); border-radius: 10px; font-size: max(12px, calc(13 * var(--u))); }
.marche-lore-replay-row .marche-seg-btn[aria-disabled='true'] { opacity: 0.5; font-style: italic; }
`,Q="marche-lore-css";function A(){if(typeof document>"u"||document.getElementById(Q))return;const e=document.createElement("style");e.id=Q,e.textContent=Ke,document.head.append(e)}const y="#2a1b1d";let He=0;function z(e,r){const t=`marche-lore-em-${He++}`;return`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<defs><clipPath id="${t}"><circle cx="32" cy="32" r="26.5"/></clipPath>
<radialGradient id="${t}-bg" cx=".38" cy=".3" r=".9"><stop offset="0" stop-color="${e[0]}"/><stop offset="1" stop-color="${e[1]}"/></radialGradient></defs>
<circle cx="32" cy="32" r="30" fill="#c9a646" stroke="${y}" stroke-width="3"/>
<circle cx="32" cy="32" r="30" fill="none" stroke="#f3dc8a" stroke-width="1.5" stroke-dasharray="30 200" stroke-dashoffset="-118" stroke-linecap="round"/>
<g clip-path="url(#${t})"><rect width="64" height="64" fill="url(#${t}-bg)"/>${r}</g>
<circle cx="32" cy="32" r="26.5" fill="none" stroke="${y}" stroke-width="2"/>
</svg>`}const ze=`<g transform="translate(9 8) scale(.96)" stroke-linejoin="round">
<path d="M3.5 26.5Q8 26 11 26h29v5.5q-5 .5-9 3.5v3h4v5.5H13V38h4v-3q-4-3-8-3.5-4-1-5.5-5Z" fill="#8a919e" stroke="${y}" stroke-width="3"/>
<path d="M11.5 28.7H38" stroke="#d6dbe4" stroke-width="2.2" stroke-linecap="round"/>
<g transform="rotate(38 20 16)"><path d="M18.3-2h3.6v14h-3.6Z" fill="#b07a4a" stroke="${y}" stroke-width="2.6"/>
<path d="M11.5 11.5h17a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-17a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z" fill="#6d7480" stroke="${y}" stroke-width="3"/>
<path d="M12.5 14h15" stroke="#c4cad4" stroke-width="2" stroke-linecap="round"/></g>
<path d="m35.5 13 1.7 4.6 4.6 1.7-4.6 1.7-1.7 4.6-1.7-4.6-4.6-1.7 4.6-1.7Z" fill="#ffd25a" stroke="${y}" stroke-width="1.8"/>
<path d="M42 26.5l3 1.5M40.5 8.5l2-2.5M29 22.5l-1.5-2" stroke="#ffb02e" stroke-width="2.4" stroke-linecap="round"/></g>`;function Ye(){let e="";for(let r=0;r<12;r++){const t=r*Math.PI/6,a=(n,i)=>`${(32+Math.cos(t+i)*n).toFixed(1)} ${(32+Math.sin(t+i)*n).toFixed(1)}`;e+=`M${a(9.5,-.24)}L${a(18.5,0)}L${a(9.5,.24)}Z`}return`<circle cx="32" cy="32" r="21" fill="#ffd25a" opacity=".22"/>
<path d="${e}" fill="#e2b850" stroke="${y}" stroke-width="1.6" stroke-linejoin="round"/>
<circle cx="32" cy="32" r="11" fill="#f3cf62" stroke="${y}" stroke-width="2"/>
<path d="M27.4 30.4q1.4-1.3 2.8 0M33.8 30.4q1.4-1.3 2.8 0" fill="none" stroke="${y}" stroke-width="1.6" stroke-linecap="round"/>
<path d="M28.6 35.2q3.4 2.6 6.8 0" fill="none" stroke="${y}" stroke-width="1.6" stroke-linecap="round"/>
<circle cx="26.6" cy="34" r="1.4" fill="#e8846a" opacity=".6"/><circle cx="37.4" cy="34" r="1.4" fill="#e8846a" opacity=".6"/>`}const Je={sylvan:["#4f8f5a","#1d3b2a"],weaver:["#6a5bb8","#24194d"],gorvak:["#c0582e","#4a1a10"],morvane:["#8a7fa8","#2a2338"],corruptedWarrior:["#9b4fd6","#2e0f4a"]};function Ue(e){const r=ge.replace("<svg ",'<svg x="14" y="13" width="36" height="36" ');return z(Je[e],`<g color="#efe6f6">${r}</g>`)}function oe(e){switch(e){case"erynd":return be(46);case"valeor":return z(["#e08a3a","#5a2410"],ze);case"gardienne":return z(["#5d4aa0","#1b1440"],Ye());default:return Ue(e)}}const Ge="marche-lore-bubble";function Ve(e){return Math.round(Math.min(8e3,Math.max(6e3,4200+e.length*22)))}let M=null;function $r(){return M?.el.querySelector(".marche-lore-bubble-text")?.textContent??null}function Cr(){M?.close()}function ne(e,r,t,a,n){A(),M?.close();const i=Ve(a),c=o("span","marche-lore-bubble-timer",{"aria-hidden":"true"});c.style.animationDuration=`${i}ms`;const h=o("span","marche-lore-bubble-emblem",{"aria-hidden":"true"});h.innerHTML=oe(r);const u=o("div",`marche-lore-bubble is-${r}${n==="room"?" is-room":""}`,{id:Ge,role:"status","aria-live":"polite"},[h,o("div","marche-lore-bubble-box",void 0,[o("div","marche-lore-bubble-name",void 0,[t]),o("div","marche-lore-bubble-text",void 0,[a])]),c]),p=e.dataset.screen;let f=!1;const v=()=>{f||(f=!0,window.clearTimeout(_),x.disconnect(),M?.el===u&&(M=null),u.classList.remove("is-shown"),u.classList.add("is-leaving"),window.setTimeout(()=>u.remove(),360))},_=window.setTimeout(v,i),x=new MutationObserver(b=>{(b.some(T=>[...T.addedNodes].some(g=>g instanceof HTMLElement&&g.classList.contains("marche-modal")))||e.dataset.screen!==p)&&v()});x.observe(e,{attributes:!0,attributeFilter:["data-screen"],childList:!0}),u.addEventListener("pointerdown",b=>{b.preventDefault(),b.stopPropagation(),v()}),e.append(u),M={el:u,close:v},requestAnimationFrame(()=>requestAnimationFrame(()=>!f&&u.classList.add("is-shown")))}const Qe="marche-lore-card",We="marche-lore-skip",Ze={1:"grove",2:"webs",3:"warcamp",4:"necropolis",5:"bastion"},Xe="assets/marche/splash-bg.webp",er=420,rr=440,tr=1300;function ar(e=""){return new Set((e??"").split(",").map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>0))}function or(e){return Math.round(Math.min(6e3,Math.max(2400,1200+e.length*34)))}function nr(e,r){const t=`loreRecits:chapter.${e}`,a=s(`${t}.${r}`,{returnObjects:!0});return{name:s(`${t}.name`),sub:s(`${t}.subtitle`),paras:Array.isArray(a)?a.map(String):[]}}const sr=()=>typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function ir(e,r,t){const a=ar().has(t);E(e,"is-custom",a);const n=new Image;if(n.className="marche-lore-bg",n.alt="",n.decoding="async",n.onload=()=>n.classList.add("is-ready"),n.src=a?`assets/lore/chapitre-${t}.webp`:Xe,r.append(n),a)return;const i=o("canvas","marche-lore-dio",{"aria-hidden":"true"});r.append(o("div","marche-lore-tint"),i,o("div","marche-lore-halo"));const c=Ze[t];c&&requestAnimationFrame(()=>{const h=i.getBoundingClientRect(),u=Math.min(2,window.devicePixelRatio||1);i.width=Math.max(1,Math.round(Math.max(h.width,h.height)*u)),i.height=Math.max(1,Math.round(i.width/1.25*1)),ve(()=>import("./dioramas-BTwrqrSc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(p=>p.drawDiorama(i,c)).then(()=>i.classList.add("is-ready"),()=>{})})}function lr(){const e=o("div","marche-lore-motes",{"aria-hidden":"true"});if(sr())return e;for(let r=0;r<16;r++){const t=o("span","marche-lore-mote"),a=r*.618%1;t.style.left=`${(40+a*58).toFixed(1)}%`,t.style.animationDuration=`${(9+r*7%9).toFixed(1)}s`,t.style.animationDelay=`${(-r*1.37).toFixed(2)}s`,t.style.setProperty("--dx",`${(r*37%60-30).toFixed(0)}px`);const n=2+r*3%4;t.style.width=t.style.height=`${n}px`,e.append(t)}return e}function se(e,r,t,a){A();const{name:n,sub:i,paras:c}=nr(r,t);return new Promise(h=>{const u=ee(e.host,{id:Qe,className:`marche-lore-card is-ch-${r} is-${t}`,screen:e.host.screen(),lockMs:er,restoreScreen:!0}),p=u.el;p.classList.remove("marche-modal"),p.setAttribute("aria-label",s("loreRecits:ui.chapterFull",{n:P(r),name:n}));const f=o("div","marche-lore-art",{"aria-hidden":"true"});ir(p,f,r);const v=o("div","marche-lore-kicker",void 0,[t==="intro"?s("loreRecits:ui.chapter",{n:P(r)}):`${s("loreRecits:ui.chapter",{n:P(r)})} · ${s("loreRecits:ui.epilogue")}`]),_=o("div","marche-lore-head",void 0,[v,o("h2","marche-lore-title",void 0,[n]),o("div","marche-lore-sub",void 0,[i]),o("div","marche-lore-rule")]),x=c.map(m=>o("p",`marche-lore-p${m.startsWith("«")?" is-quote":""}`,void 0,[m])),b=o("div","marche-lore-body",{"aria-live":"polite"},x),S=o("div","marche-lore-more"),T=o("button","marche-lore-skip",{id:We,type:"button"},[s("loreRecits:ui.skip")]);T.addEventListener("pointerdown",m=>m.stopPropagation()),p.append(f,o("div","marche-lore-veil"),lr(),o("div","marche-lore-text",void 0,[_,b]),S,T);let g=0,$=0,D=!1;const he=e.device()==="keyboard",fe=()=>{const m=g>=x.length;he?xe(S,s("loreRecits:ui.moreKeys",{enter:e.keys().enter})+(m?"":` · [[Échap]] ${s("loreRecits:ui.skip").toLowerCase()}`)):S.textContent=s(m?"loreRecits:ui.end":"loreRecits:ui.more"),E(S,"is-shown",g>0)},N=()=>{if(window.clearTimeout($),g>=x.length||D)return;x[g-1]?.classList.add("is-past");const m=x[g];g+=1,m&&(m.classList.add("is-in"),m.offsetWidth,m.classList.add("is-shown"),requestAnimationFrame(()=>{b.scrollHeight>b.clientHeight+1&&(b.classList.add("is-scrolled"),b.scrollTop=b.scrollHeight)})),fe(),g<x.length&&($=window.setTimeout(N,or(m?.textContent??"")))},K=()=>{D||(D=!0,window.clearTimeout($),p.classList.add("is-closing"),window.setTimeout(()=>u.close(),rr),h())},G=()=>{g<x.length?N():K()};u.onClose(()=>{D=!0,window.clearTimeout($),h()}),u.press(p,G,{sound:null}),u.press(T,K),u.onKey(m=>u.isLocked()?!0:m.code==="Escape"||m.code==="Backspace"?(K(),!0):["Enter","NumpadEnter","Space","KeyJ","ArrowRight"].includes(m.code)?(G(),!0):!1),requestAnimationFrame(()=>{_.classList.add("is-shown"),a?.()}),$=window.setTimeout(N,tr)})}const W=55,I=34;function cr(e){return Math.round(Math.min(6200,Math.max(3400,2e3+e.length*26)))}let l=null,O=null,j=null,B=null,q=[];const C=[];let d=null,w=0;const R=new Set;let L=0,U=null,Y={top:null,bottom:null};function ur(e){return l&&l.parentElement===e||(l?.remove(),A(),O=o("span","marche-lore-say-emblem",{"aria-hidden":"true"}),j=o("div","marche-lore-say-name"),B=o("div","marche-lore-say-text"),l=o("div","marche-lore-say",{id:"marche-lore-say",role:"status","aria-live":"polite"},[O,o("div","marche-lore-say-box",void 0,[j,B])]),l.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),pr()}),e.append(l),new MutationObserver(()=>{e.dataset.screen!=="arena"&&e.dataset.screen!=="pause"&&de()}).observe(e,{attributes:!0,attributeFilter:["data-screen"]})),l}function dr(){if(!l)return;const e=l.classList.contains("is-bottom");l.classList.remove("is-bottom");const r=V(l);l.classList.add("is-bottom");const t=V(l);E(l,"is-bottom",e),Y={top:r,bottom:t}}function Z(e,r){return e!==null&&r.x>e.left-I&&r.x<e.right+I&&r.y>e.top-I&&r.y<e.bottom+I*1.6}function ie(){if(L=0,!l||!d)return;const e=U?.()??null;if(e){const r=Z(Y.top,e),t=Z(Y.bottom,e),a=l.classList.contains("is-bottom");(a?t&&!r:r&&!t)&&E(l,"is-bottom",!a),E(l,"is-veiled",r&&t)}L=requestAnimationFrame(ie)}function mr(){if(!(!d||d.typed)){d.typed=!0;for(const e of q)e.style.transitionDelay="0ms";le()}}function le(){window.clearTimeout(w),d&&(w=window.setTimeout(ce,cr(d.line.text)))}function pr(){d&&(d.typed?ce():mr())}function J(e){!l||!O||!j||!B||(d={line:e,typed:!1},l.className=`marche-lore-say is-${e.who==="erynd"?"erynd":"boss"}`,O.innerHTML=oe(e.who),j.textContent=e.name,q=e.text.split(/(\s+)/).map((r,t)=>{if(/^\s+$/.test(r))return document.createTextNode(r);const a=o("span","marche-lore-w",void 0,[r]);return a.style.transitionDelay=`${Math.round(t/2*W)}ms`,a}),B.replaceChildren(...q),q=q.filter(r=>r instanceof HTMLElement),dr(),requestAnimationFrame(()=>{if(!(!l||d?.line!==e)){l.classList.add("is-shown");for(const r of q)r.classList.add("is-on")}}),window.clearTimeout(w),w=window.setTimeout(()=>{d?.line===e&&(d.typed=!0,le())},q.length*W+200),L||(L=requestAnimationFrame(ie)))}function ce(){window.clearTimeout(w),d=null,l&&E(l,"is-shown",!1);const e=C.shift();e&&(w=window.setTimeout(()=>J(e),380))}function ue(e,r,t){ur(e),t&&(U=t);const a=()=>{if(r.now){C.length=0;for(const n of R)window.clearTimeout(n);R.clear(),window.clearTimeout(w),d=null,J(r)}else d||C.length>0?C.push(r):J(r)};if(r.delayMs&&r.delayMs>0){const n=window.setTimeout(()=>{R.delete(n),a()},r.delayMs);R.add(n)}else a()}function de(){C.length=0,window.clearTimeout(w);for(const e of R)window.clearTimeout(e);R.clear(),L&&cancelAnimationFrame(L),L=0,d=null,U=null,l&&E(l,"is-shown",!1)}function Ar(){return d?{name:d.line.name,text:d.line.text}:null}const X="marche-settings-lore",hr="marche-settings-lore-btn",fr="marche-lore-replay",br=(e,r)=>`marche-lore-replay-${e}-${r}`,gr=[1,2,3,4,5];function vr(e){const r=k(e);return r.chapterIntroSeen.length+r.chapterEpilogueSeen.length>0}function xr(e,r){A();const t=ee(e.host,{id:fr,className:"marche-sub marche-lore-replay",screen:e.host.screen(),lockMs:200,restoreScreen:!0}),a=k(r()),n=o("button","marche-icon-button marche-sub-close",{type:"button","aria-label":s("loreRecits:ui.close"),title:s("loreRecits:ui.close")},["✕"]);t.press(n,()=>t.close()),t.onKey(c=>c.code==="Escape"||c.code==="Backspace"?(t.close(),!0):!1);const i=gr.map(c=>{const h=p=>{const f=(p==="intro"?a.chapterIntroSeen:a.chapterEpilogueSeen).includes(c),v=o("button","marche-seg-btn"+(f?" is-on":""),{id:br(c,p),type:"button","aria-disabled":String(!f)});return v.textContent=f?s(`loreRecits:ui.${p}`):s("loreRecits:ui.replayLocked"),f&&t.press(v,()=>void se(e,c,p)),v},u=o("div","marche-lore-replay-name",void 0,[s("loreRecits:ui.chapterFull",{n:P(c),name:s(`loreRecits:chapter.${c}.name`)}),o("small",void 0,void 0,[s(`loreRecits:chapter.${c}.subtitle`)])]);return o("div","marche-lore-replay-row",void 0,[u,h("intro"),h("epilogue")])});return t.el.append(o("div","marche-panel marche-sub-panel",{role:"dialog","aria-label":s("loreRecits:ui.replayTitle")},[o("div","marche-sub-head",void 0,[o("h2","marche-panel-title",void 0,[s("loreRecits:ui.replayTitle")]),n]),o("div","marche-sub-body",void 0,[o("p","marche-lore-replay-sub",void 0,[s("loreRecits:ui.replaySub")]),o("div","marche-lore-replay-list",void 0,i)])])),t}function _r(e,r,t,a){if(!r.isOpen()||!vr(a())||t.querySelector(`#${X}`))return;A();const n=o("button","marche-seg-btn is-on",{id:hr,type:"button"});n.textContent=s("loreRecits:ui.replay"),r.press(n,()=>void xr(e,a)),t.append(o("div","marche-settings-row is-lore",{id:X},[o("span","marche-settings-label",void 0,[s("loreRecits:ui.replayRow")]),o("div","marche-seg",void 0,[n])]))}await ye(Ce);const yr=new Ne;function me(e,r,t){return ae(e.store.get(),r,t)?(de(),se(e.ui.menu,r,t,()=>{e.store.set(Ae(e.store.get(),r,t)),e.store.flush(!0)})):Promise.resolve()}re.intro=(e,r)=>me(e,r,"intro");re.epilogue=(e,r)=>me(e,r,"epilogue");function wr(e){return`loreRecits:boss.${e}.encounter`}const kr={appear:900,rage:1500,fall:1e3};function F(e){return()=>{const r=document.querySelector("#game-root canvas"),t=e.hero.body;return r?ke(r,t.x,t.y-qe):null}}function H(e,r,t,a){ue(e,{who:r,name:s(`marcheData:boss.${r}.name`),text:s(`loreRecits:boss.${r}.${t}`),delayMs:kr[t],now:t==="fall"},a)}function pe(e,r,t,a){if(!yr.take(r))return!1;const n=De[r],i=s(`loreRecits:speaker.${n}`),c=s(`loreRecits:context.${r}.text`);return t==="arena"?ue(e,{who:n,name:i,text:c},a):ne(e,n,i,c,t),!0}function qr(e,r,t){const a=r.arena.bossId;if(!a)return;const n=t.services.ui,i=n.menu.host.root;switch(e.type){case"spawn":if(r.boss?.id!==e.id)return;queueMicrotask(()=>n.banner("bossIntro",{nameKey:`marcheData:boss.${a}.name`,titleKey:wr(a)})),H(i,a,"appear",F(r));return;case"bossStage2":H(i,a,"rage",F(r));return;case"kill":e.defId==="boss"&&H(i,a,"fall",F(r));return;case"doorsClosed":t.services.store.get().bossesDefeated.includes(a)&&pe(i,"bossAgain","arena",F(r));return;default:return}}we(qr);function Lr(e,r,t,a=0){window.setTimeout(()=>{if(!t())return;if(e.ui.screen()!=="camp"){a<12&&Lr(e,r,t,a+1);return}const n=Er(e.ui.menu.host.root,e.store.get(),{fromResult:r});n!==e.store.get()&&(e.store.set(n),e.store.flush(!0))},a===0?1100:300)}function Er(e,r,t){if(t.fromResult&&Be(r)&&pe(e,"defeats","camp"))return r;const a=Oe(r);return a?(ne(e,a.speaker,s(`loreRecits:speaker.${a.speaker}`),s(`loreRecits:camp.${a.id}.text`),"camp"),je(r,a.id)):r}export{Ge as LORE_BUBBLE_ID,Qe as LORE_CARD_ID,We as LORE_SKIP_ID,hr as REPLAY_BUTTON_ID,fr as REPLAY_PANEL_ID,_r as addReplayRow,H as bossLine,Lr as campArrival,Er as campEvening,pe as contextLine,Cr as dismissBubble,wr as encounterKey,de as hush,xr as openReplay,se as showChapterCard,$r as shownBubble,Ar as shownLine,me as tellChapter};

