import{r as w,bg as O,ba as R,X as b,w as $,x as M,e as g,bQ as U,L as B,bR as A,i as F,W as H,E as T,aj as L}from"./entry.6260d686.js";import{u as z}from"./user.e0a4c3b9.js";const j=()=>null;function S(...a){const c=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(c);let[t,n,r={}]=a;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof n!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");r.server=r.server??!0,r.default=r.default??j,r.lazy=r.lazy??!1,r.immediate=r.immediate??!0;const e=M(),l=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],o=()=>l()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:w(l()??r.default()),pending:w(!o()),error:O(e.payload._errors,t),status:w("idle")});const s={...e._asyncData[t]};s.refresh=s.execute=(u={})=>{if(e._asyncDataPromises[t]){if(u.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((u._initial||e.isHydrating&&u._initial!==!1)&&o())return l();s.pending.value=!0,s.status.value="pending";const d=new Promise((i,f)=>{try{i(n(e))}catch(v){f(v)}}).then(i=>{if(d.cancelled)return e._asyncDataPromises[t];let f=i;r.transform&&(f=r.transform(i)),r.pick&&(f=G(f,r.pick)),s.data.value=f,s.error.value=null,s.status.value="success"}).catch(i=>{if(d.cancelled)return e._asyncDataPromises[t];s.error.value=i,s.data.value=g(r.default()),s.status.value="error"}).finally(()=>{d.cancelled||(s.pending.value=!1,e.payload.data[t]=s.data.value,s.error.value&&(e.payload._errors[t]=U(s.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=d,e._asyncDataPromises[t]};const h=()=>s.refresh({_initial:!0}),_=r.server!==!1&&e.payload.serverRendered;{const u=B();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const i=u._nuxtOnBeforeMountCbs;u&&(R(()=>{i.forEach(f=>{f()}),i.splice(0,i.length)}),b(()=>i.splice(0,i.length)))}_&&e.isHydrating&&o()?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):u&&(e.payload.serverRendered&&e.isHydrating||r.lazy)&&r.immediate?u._nuxtOnBeforeMountCbs.push(h):r.immediate&&h(),r.watch&&$(r.watch,()=>s.refresh());const d=e.hook("app:data:refresh",i=>{if(!i||i.includes(t))return s.refresh()});u&&b(d)}const m=Promise.resolve(e._asyncDataPromises[t]).then(()=>s);return Object.assign(m,s),m}function G(a,c){const t={};for(const n of c)t[n]=a[n];return t}function I(a,c,t){const[n={},r]=typeof c=="string"?[{},c]:[c,t],e=n.key||A([r,g(n.baseURL),typeof a=="string"?a:"",g(n.params||n.query)]);if(!e||typeof e!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+e);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const l=e===r?"$f"+e:e,o=F(()=>{let p=a;return typeof p=="function"&&(p=p()),g(p)});if(!n.baseURL&&typeof o.value=="string"&&o.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:s,lazy:h,default:_,transform:m,pick:u,watch:d,immediate:i,...f}=n,v=H({...f,cache:typeof n.cache=="boolean"?void 0:n.cache}),C={server:s,lazy:h,default:_,transform:m,pick:u,immediate:i,watch:d===!1?[]:[v,o,...d||[]]};let y;return S(l,()=>{var D;return(D=y==null?void 0:y.abort)==null||D.call(y),y=typeof AbortController<"u"?new AbortController:{},typeof o.value=="string"&&o.value.startsWith("/"),(n.$fetch||globalThis.$fetch)(o.value,{signal:y.signal,...v})},C)}const W="https://api.gaea.la";let E=!1,k=0;const q=3e3,K=a=>({"Content-Type":"application/json",Authorization:`Bearer ${a}`}),P=a=>{var r,e,l,o,s,h;const c=Date.now(),t=((r=a.data)==null?void 0:r.message)||((e=a.data)==null?void 0:e.msg)||((s=(o=(l=a.data)==null?void 0:l.detail)==null?void 0:o[0])==null?void 0:s.msg)||a.detail||((h=a.data)==null?void 0:h.detail)||"network error",n=a.statusCode;if(!((t==="network error"||n===502)&&c-k<q)&&n!==502){if(n===403)return t;T.error(t),(t==="network error"||n===502)&&(k=c)}},x=async(a,c,t)=>{const n=z(),r=K(n.getToken),e=`${W}${a}`;try{const{data:l,error:o}=await I(e,{...c,headers:r,responseType:t},"$mr5k66ooDp");if(l.value)return l.value;if(o.value)return o.value.statusCode===401&&!E?(T.error(o.value.data.detail),E=!0,L("/"),n.clearUserInfo(),!0):P(o.value)}catch(l){return P(l)}},J=(a,c)=>x(a,{method:"GET",params:c}),V=(a,c,t)=>x(a,{method:"POST",body:c},t);export{J as G,V as P};
