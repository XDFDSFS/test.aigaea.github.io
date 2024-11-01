import{g as h,D as B,aq as N,ar as T,d as E,as as P,ae as g,k as O,Q as j,j as z,U as R,V as q,at as x,au as D,p as _,N as A,av as b,aw as L,ax as I,l as F,ay as G}from"./entry.843e1310.js";function H(t){let e;const l=h(!1),n=B({...t,originalPosition:"",originalOverflow:"",visible:!1});function a(s){n.text=s}function o(){const s=n.parent,r=u.ns;if(!s.vLoadingAddClassList){let c=s.getAttribute("loading-number");c=Number.parseInt(c)-1,c?s.setAttribute("loading-number",c.toString()):(x(s,r.bm("parent","relative")),s.removeAttribute("loading-number")),x(s,r.bm("parent","hidden"))}i(),m.unmount()}function i(){var s,r;(r=(s=u.$el)==null?void 0:s.parentNode)==null||r.removeChild(u.$el)}function d(){var s;t.beforeClose&&!t.beforeClose()||(l.value=!0,clearTimeout(e),e=window.setTimeout(f,400),n.visible=!1,(s=t.closed)==null||s.call(t))}function f(){if(!l.value)return;const s=n.parent;l.value=!1,s.vLoadingAddClassList=void 0,o()}const m=N(E({name:"ElLoading",setup(s,{expose:r}){const{ns:c,zIndex:S}=P("loading");return r({ns:c,zIndex:S}),()=>{const C=n.spinner||n.svg,V=g("svg",{class:"circular",viewBox:n.svgViewBox?n.svgViewBox:"0 0 50 50",...C?{innerHTML:C}:{}},[g("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),$=n.text?g("p",{class:c.b("text")},[n.text]):void 0;return g(q,{name:c.b("fade"),onAfterLeave:f},{default:O(()=>[j(z("div",{style:{backgroundColor:n.background||""},class:[c.b("mask"),n.customClass,n.fullscreen?"is-fullscreen":""]},[g("div",{class:c.b("spinner")},[V,$])]),[[R,n.visible]])])})}}})),u=m.mount(document.createElement("div"));return{...T(n),setText:a,removeElLoadingChild:i,close:d,handleAfterLeave:f,vm:u,get $el(){return u.$el}}}let p;const K=function(t={}){if(!D)return;const e=M(t);if(e.fullscreen&&p)return p;const l=H({...e,closed:()=>{var a;(a=e.closed)==null||a.call(e),e.fullscreen&&(p=void 0)}});Q(e,e.parent,l),k(e,e.parent,l),e.parent.vLoadingAddClassList=()=>k(e,e.parent,l);let n=e.parent.getAttribute("loading-number");return n?n=`${Number.parseInt(n)+1}`:n="1",e.parent.setAttribute("loading-number",n),e.parent.appendChild(l.$el),_(()=>l.visible.value=e.visible),e.fullscreen&&(p=l),l},M=t=>{var e,l,n,a;let o;return A(t.target)?o=(e=document.querySelector(t.target))!=null?e:document.body:o=t.target||document.body,{parent:o===document.body||t.body?document.body:o,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:o===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(n=t.lock)!=null?n:!1,customClass:t.customClass||"",visible:(a=t.visible)!=null?a:!0,target:o}},Q=async(t,e,l)=>{const{nextZIndex:n}=l.vm.zIndex||l.vm._.exposed.zIndex,a={};if(t.fullscreen)l.originalPosition.value=b(document.body,"position"),l.originalOverflow.value=b(document.body,"overflow"),a.zIndex=n();else if(t.parent===document.body){l.originalPosition.value=b(document.body,"position"),await _();for(const o of["top","left"]){const i=o==="top"?"scrollTop":"scrollLeft";a[o]=`${t.target.getBoundingClientRect()[o]+document.body[i]+document.documentElement[i]-Number.parseInt(b(document.body,`margin-${o}`),10)}px`}for(const o of["height","width"])a[o]=`${t.target.getBoundingClientRect()[o]}px`}else l.originalPosition.value=b(e,"position");for(const[o,i]of Object.entries(a))l.$el.style[o]=i},k=(t,e,l)=>{const n=l.vm.ns||l.vm._.exposed.ns;["absolute","fixed","sticky"].includes(l.originalPosition.value)?x(e,n.bm("parent","relative")):L(e,n.bm("parent","relative")),t.fullscreen&&t.lock?L(e,n.bm("parent","hidden")):x(e,n.bm("parent","hidden"))},y=Symbol("ElLoading"),w=(t,e)=>{var l,n,a,o;const i=e.instance,d=s=>I(e.value)?e.value[s]:void 0,f=s=>{const r=A(s)&&(i==null?void 0:i[s])||s;return r&&h(r)},v=s=>f(d(s)||t.getAttribute(`element-loading-${G(s)}`)),m=(l=d("fullscreen"))!=null?l:e.modifiers.fullscreen,u={text:v("text"),svg:v("svg"),svgViewBox:v("svgViewBox"),spinner:v("spinner"),background:v("background"),customClass:v("customClass"),fullscreen:m,target:(n=d("target"))!=null?n:m?void 0:t,body:(a=d("body"))!=null?a:e.modifiers.body,lock:(o=d("lock"))!=null?o:e.modifiers.lock};t[y]={options:u,instance:K(u)}},U=(t,e)=>{for(const l of Object.keys(e))F(e[l])&&(e[l].value=t[l])},Z={mounted(t,e){e.value&&w(t,e)},updated(t,e){const l=t[y];e.oldValue!==e.value&&(e.value&&!e.oldValue?w(t,e):e.value&&e.oldValue?I(e.value)&&U(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[y])==null||e.instance.close()}};export{Z as v};
