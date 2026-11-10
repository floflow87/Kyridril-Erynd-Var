const i=[96,192],c=(s,e)=>`assets/marche/boucliers/${s}-${e}.webp`;function a(s){const e=globalThis.__EMBEDDED_ASSETS__;return!e||s in e}function l(s,e=!1){const[t,n]=i;return e||!a(c(s,n))?t:n}function o(s,e=!1){const t=c(s,l(s,e));return globalThis.__EMBEDDED_ASSETS__?.[t]??t}export{c as a,l as b,o as s};

