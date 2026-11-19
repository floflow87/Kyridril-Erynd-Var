const n=[200,400],t=(a,s)=>`assets/marche/carnet/${a}-${s}.webp`,r=a=>globalThis.__EMBEDDED_ASSETS__?.[a]??a;function l(a,s,o){const e=document.createElement("img");return e.className=o,e.alt="",e.draggable=!1,e.decoding="async",e.srcset=n.map(c=>`${r(t(a,c))} ${c}w`).join(", "),e.sizes=`${Math.round(s)}px`,e.src=r(t(a,n[0])),e}export{l as c};

