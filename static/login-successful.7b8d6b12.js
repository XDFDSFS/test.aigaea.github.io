import{c as m}from"./utils.51f5cda9.js";import{d,g as _,m as p,p as f,q as g,o as i,c,Q as h,e as w,b as o,ap as x}from"./entry.1678d90d.js";import{_ as v}from"./plugin-vueexport-helper.9b3aefc7.js";import{v as b}from"./el-loading.c16a4e42.js";const y=["id"],T=d({__name:"Turnstile",props:{id:{default:"example-container"}},emits:["toUpdate"],setup(l,{emit:s}){const n=l;_();const t=e=>new Promise((a,u)=>{const r=document.createElement("script");r.src=e,r.defer=!0,r.onload=()=>a(!0),r.onerror=()=>u(new Error("Script load error")),document.body.appendChild(r)});return p(async()=>{await f();try{await t("https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"),window.onloadTurnstileCallback=function(){window.turnstile&&window.turnstile.render(`#${n.id}`,{sitekey:m(),language:"en",callback:function(e){s("toUpdate",e)}})}}catch(e){console.error(e)}}),g(()=>{const e=document.getElementById(n.id);e&&(e.innerHTML=""),delete window.onloadTurnstileCallback}),(e,a)=>(i(),c("div",{id:`${n.id}`,class:"w-full turnstile h-[68px] flex items-center justify-center"},null,8,y))}});const $=v(T,[["__scopeId","data-v-4220f032"]]),k=""+globalThis.__publicAssetsURL("images/public/google.png"),N={className:"w-full space-y-2"},D=o("div",{className:"w-full flex items-center space-x-7 "},[o("div",{className:"flex-1 h-[.0625rem] bg-[#D2D2D2]"}),o("div",{className:" text-base font-medium text-white"},"Or sign in with"),o("div",{className:"flex-1 h-[.0625rem] bg-[#D2D2D2]"})],-1),C=o("img",{src:k,class:"w-5 h-5"},null,-1),E=o("span",{className:"text-base font-medium "},"Google",-1),B=[C,E],j=d({__name:"OtherLoginOrRegist",setup(l){const s=_(!1),n=async()=>{try{s.value=!0;const t=await x();s.value=!1,t.code===200&&window.open(t.data.url,"_self")}catch(t){console.log(t,"error"),s.value=!1}};return(t,e)=>{const a=b;return i(),c("div",N,[D,h((i(),c("div",{className:`flex items-center  justify-center space-x-2 border text-white border-white rounded-lg\r
                     py-2 hover:border-[#FFE099] cursor-pointer hover:text-[#FFE099]`,onClick:n},B)),[[a,w(s)]])])}}}),O=""+globalThis.__publicAssetsURL("images/login/login_successful.png");export{$ as _,j as a,O as b};
