import{b as m}from"./utils.b9cfd8d4.js";import{d as c,r as d,f,v as h,g as w,o as u,c as _,i as g,m as x,q as v,A as y,b as p,e as l}from"./entry.b8636d5f.js";import{E}from"./el-button.5908491f.js";import{v as b}from"./el-loading.2ba434bb.js";import{g as k}from"./user.af534cb3.js";import{t as B}from"./throttle.3832cdac.js";const T=["id"],C=c({__name:"Turnstile",props:{id:{default:"example-container"}},emits:["toUpdate"],setup(i,{emit:o}){const s=i;d();const t=e=>new Promise((a,r)=>{const n=document.createElement("script");n.src=e,n.defer=!0,n.onload=()=>a(!0),n.onerror=()=>r(new Error("Script load error")),document.body.appendChild(n)});return f(async()=>{await h();try{await t("https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"),window.onloadTurnstileCallback=function(){window.turnstile&&window.turnstile.render(`#${s.id}`,{sitekey:m(),language:"en",callback:function(e){o("toUpdate",e)}})}}catch{}}),w(()=>{const e=document.getElementById(s.id);e&&(e.innerHTML=""),delete window.onloadTurnstileCallback}),(e,a)=>(u(),_("div",{id:`${s.id}`,class:"w-full turnstile h-[68px] flex items-center justify-center"},null,8,T))}});const I=g(C,[["__scopeId","data-v-2ab66cdc"]]),$={className:"w-full space-y-4 flex flex-col items-center  z-[99]"},N=p("div",{className:" text-[10px] font-medium text-[#E6E6E6]  mt-3  z-[99]"},"or Sign with",-1),z={class:"iconfont icon-guge text-[26px] font-bold"},M=c({__name:"OtherLoginOrRegist",setup(i){const o=d(!1),s=async()=>{try{if(o.value)return;o.value=!0;const t=await k();o.value=!1,t&&t.code===200&&window.open(t.data.url,"_self")}catch{o.value=!1}};return(t,e)=>{const a=E,r=b;return u(),_("div",$,[N,x(a,{class:"z-[99]",color:"#EBEBEB",style:{width:"47px",height:"47px"},circle:"",onClick:e[0]||(e[0]=n=>("throttle"in t?t.throttle:l(B))(()=>{s()}))},{default:v(()=>[y(p("span",z,null,512),[[r,l(o)]])]),_:1})])}}});export{I as _,M as a};
