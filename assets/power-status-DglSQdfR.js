import{dp as n}from"./index-yjG8IKG5.js";function l(a,t,e,u,r,p){const s=n(a,e),c=s?.kind===t?Math.max(s.until,e+u):e+u,o={kind:t,since:s?.kind===t?s.since:e,until:c,damageTakenMult:r.damageTakenMult??1,speedMult:r.speedMult??(t==="frozen"||t==="shocked"?0:1),recoveryExtraMs:r.recoveryExtraMs??0};return a.status=o,p.push({type:"status",targetId:a.id,kind:t,until:c}),o}export{l as s};

