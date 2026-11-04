const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-CroE2W7j.js","./native-core-CUb6lIim.js"])))=>i.map(i=>d[i]);
import{_ as t}from"./index-q_mEzB0Z.js";import{r as i}from"./native-core-CUb6lIim.js";import"./phaser-0YPJO2g1.js";const e=i("Share",{web:()=>t(()=>import("./web-CroE2W7j.js"),__vite__mapDeps([0,1]),import.meta.url).then(r=>new r.ShareWeb)});async function u(r,a){try{return(await e.canShare()).value?(await e.share({title:r,text:a,dialogTitle:r}),!0):!1}catch{return!1}}export{u as shareText};

