import{d as o,r as u,f as d,c as k}from"./entry.b8636d5f.js";const m=o({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(b,{slots:a,attrs:r}){const l=u(!1);return d(()=>{l.value=!0}),e=>{var c;if(l.value)return(c=a.default)==null?void 0:c.call(a);const n=a.fallback||a.placeholder;if(n)return n();const t=e.fallback||e.placeholder||"",f=e.fallbackTag||e.placeholderTag||"span";return k(f,r,t)}}});export{m as _};
