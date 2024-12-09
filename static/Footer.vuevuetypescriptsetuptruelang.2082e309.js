import{x as k,u as w,d as q,i as A,bm as S,r as C,f as N,g as L,ae as P,b1 as j,bn as I,bo as U,bp as V,bq as z,aj as F,o as y,c as T,b as s,m as v,q as f,a4 as c,e as G,B as O}from"./entry.2e409262.js";import{u as D}from"./user.3edfcce7.js";const B=globalThis.requestIdleCallback||(t=>{const n=Date.now(),i={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-n))};return setTimeout(()=>{t(i)},1)}),M=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),X=t=>{const n=k();n.isHydrating?n.hooks.hookOnce("app:suspense:resolve",()=>{B(t)}):B(t)};async function R(t,n=w()){const{path:i,matched:e}=n.resolve(t);if(!e.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(i)))return;const a=n._preloadPromises=n._preloadPromises||[];if(a.length>4)return Promise.all(a).then(()=>R(t,n));n._routePreloaded.add(i);const r=e.map(l=>{var u;return(u=l.components)==null?void 0:u.default}).filter(l=>typeof l=="function");for(const l of r){const u=Promise.resolve(l()).catch(()=>{}).finally(()=>a.splice(a.indexOf(u)));a.push(u)}await Promise.all(a)}const H=(...t)=>t.find(n=>n!==void 0),Q="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function Y(t){const n=t.componentName||"NuxtLink",i=(e,a)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const r=t.trailingSlash==="append"?V:z;if(typeof e=="string")return r(e,!0);const l="path"in e?e.path:a(e).path;return{...e,name:void 0,path:r(l,!0)}};return q({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:a}){const r=w(),l=A(()=>{const o=e.to||e.href||"";return i(o,r.resolve)}),u=A(()=>e.external||e.target&&e.target!=="_self"?!0:typeof l.value=="object"?!1:l.value===""||S(l.value,{acceptRelative:!0})),m=C(!1),p=C(null),E=o=>{var _;p.value=e.custom?(_=o==null?void 0:o.$el)==null?void 0:_.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!K()){const _=k();let g,d=null;N(()=>{const b=J();X(()=>{g=B(()=>{var x;(x=p==null?void 0:p.value)!=null&&x.tagName&&(d=b.observe(p.value,async()=>{d==null||d(),d=null;const h=typeof l.value=="string"?l.value:r.resolve(l.value).fullPath;await Promise.all([_.hooks.callHook("link:prefetch",h).catch(()=>{}),!u.value&&R(l.value,r).catch(()=>{})]),m.value=!0}))})})}),L(()=>{g&&M(g),d==null||d(),d=null})}return()=>{var b,x;if(!u.value){const h={ref:E,to:l.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(m.value&&(h.class=e.prefetchedClass||t.prefetchedClass),h.rel=e.rel),P(j("RouterLink"),h,a.default)}const o=typeof l.value=="object"?((b=r.resolve(l.value))==null?void 0:b.href)??null:l.value||null,_=e.target||null,g=e.noRel?null:H(e.rel,t.externalRelAttribute,o?Q:"")||null,d=()=>F(o,{replace:e.replace});return e.custom?a.default?a.default({href:o,navigate:d,get route(){if(!o)return;const h=I(o);return{path:h.pathname,fullPath:h.pathname,get query(){return U(h.search)},hash:h.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:g,target:_,isExternal:u.value,isActive:!1,isExactActive:!1}):null:P("a",{ref:p,href:o,rel:g,target:_},(x=a.default)==null?void 0:x.call(a))}}})}const $=Y({componentName:"NuxtLink"});function J(){const t=k();if(t._observer)return t._observer;let n=null;const i=new Map,e=(r,l)=>(n||(n=new IntersectionObserver(u=>{for(const m of u){const p=i.get(m.target);(m.isIntersecting||m.intersectionRatio>0)&&p&&p()}})),i.set(r,l),n.observe(r),()=>{i.delete(r),n.unobserve(r),i.size===0&&(n.disconnect(),n=null)});return t._observer={observe:e}}function K(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const W=""+globalThis.__publicAssetsURL("images/public/separation_line.png"),Z=""+globalThis.__publicAssetsURL("images/public/logo.png"),ee={class:"Regular"},te=s("div",{class:"w-full h-7 mb-12"},[s("img",{src:W,class:"w-full h-full object-fill"})],-1),ae={class:"flex justify-between text-[#EBEBEB]"},ne=s("div",{class:"text-[12px]"},[c(" Becoming a GAEA community ambassador and join us in creating a new blockchain"),s("br"),c(" and AI-driven silicon-based world. ")],-1),le=s("div",{class:"w-fit mt-6 px-5 py-2 rounded-full border border-[#EBEBEB] hover:bg-[#EBEBEB] duration-500 hover:text-[black] text-[12px] font-semibold"}," APPLY ",-1),se={class:"flex space-x-20 text-[12px] text-[#B0B0B0]"},oe={class:"flex flex-col space-y-4"},re=s("span",{class:"text-[#EBEBEB] text-[14px]"},"About",-1),ie={class:"flex flex-col space-y-2"},ce={key:1,class:"cursor-not-allowed text-[#2B2B2]"},ue={class:"flex flex-col space-y-4 text-[#B0B0B0]"},de=s("span",{class:"text-[#EBEBEB] text-[14px]"},"Community",-1),fe={class:"flex flex-col space-y-2"},he={class:"flex flex-col space-y-4 text-[#B0B0B0]"},ve=s("span",{class:"text-[#EBEBEB] text-[14px]"},"Legal",-1),pe={class:"flex flex-col space-y-2"},_e=s("div",{class:"flex items-end justify-between mt-12"},[s("div",{class:"w-40 h-10 relative top-2"},[s("img",{src:Z,alt:"",class:"w-full h-full object-contain"})]),s("span",{class:"text-[#2E2E2E] text-[11px]"},"© 2024 GAEA Foundation.All rights reserved")],-1),xe=q({__name:"Footer",setup(t){const n=D();return(i,e)=>{const a=$;return y(),T("div",ee,[te,s("div",ae,[s("div",null,[ne,v(a,{to:"https://forms.gle/KjhxnFAx4qRe1q5GA",target:"_blank",rel:"noopener"},{default:f(()=>[le]),_:1})]),s("div",se,[s("div",oe,[re,s("div",ie,[v(a,{to:"https://aigaea.net/displayPdf/",target:"_blank",rel:"noopener",class:"hover:underline underline-offset-4"},{default:f(()=>[c("Whitepaper")]),_:1}),v(a,{to:"https://aigaea.net/home/?type=FAQ",target:"_blank",rel:"noopener",class:"hover:underline underline-offset-4"},{default:f(()=>[c("FAQ")]),_:1}),G(n).getToken?(y(),O(a,{key:0,to:"/godhood",rel:"noopener",class:"hover:underline underline-offset-4"},{default:f(()=>[c("Godhood")]),_:1})):(y(),T("span",ce,"Godhood")),v(a,{to:" https://medium.com/@aigaea3",target:"_blank",rel:"noopener",class:"hover:underline underline-offset-4"},{default:f(()=>[c("Medium")]),_:1})])]),s("div",ue,[de,s("div",fe,[v(a,{to:"https://x.com/aigaea",target:"_blank",rel:"noopener",class:"hover:underline underline-offset-4"},{default:f(()=>[c(" X ")]),_:1}),v(a,{to:"https://discord.com/invite/n5JrYzKGBz",target:"_blank",rel:"noopener",class:"hover:underline underline-offset-4"},{default:f(()=>[c(" Discord ")]),_:1}),v(a,{to:"https://t.me/AIGAEA_Community",target:"_blank",rel:"noopener",class:"hover:underline underline-offset-4"},{default:f(()=>[c(" Telegram ")]),_:1}),v(a,{to:"https://forms.gle/MYzXeXBX6zTwHAHz5",target:"_blank",rel:"noopener",class:"hover:underline underline-offset-4"},{default:f(()=>[c(" Join us ")]),_:1})])]),s("div",he,[ve,s("div",pe,[v(a,{to:"https://aigaea.net/home/?type=termsOfUse",target:"_blank",rel:"noopener",class:"hover:underline underline-offset-4"},{default:f(()=>[c("Terms of Use")]),_:1}),v(a,{to:"https://aigaea.net/home/?type=privacyPolicy",target:"_blank",rel:"noopener",class:"hover:underline underline-offset-4"},{default:f(()=>[c("Privacy Policy")]),_:1})])])])]),_e])}}});export{$ as _,xe as a,Z as b};
