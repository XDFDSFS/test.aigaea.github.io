import{bg as ce,aB as K,bh as ue,at as L,au as le,bi as de,m as M,q as V,aJ as se,g as P,Z as fe,d as re,M as ve,w as $,e as C,r as ae,p as q,N as pe,o as me,B as Ee,k as Te,b as be,n as ge,t as ye,i as he}from"./entry.ac906a3b.js";import{i as Fe}from"./el-input.556382a4.js";import{E as we}from"./plugin-vueexport-helper.a033d8c0.js";var Se=/\s/;function _e(e){for(var n=e.length;n--&&Se.test(e.charAt(n)););return n}var Ce=/^\s+/;function Le(e){return e&&e.slice(0,_e(e)+1).replace(Ce,"")}var J=0/0,ke=/^[-+]0x[0-9a-f]+$/i,Pe=/^0b[01]+$/i,Ie=/^0o[0-7]+$/i,Oe=parseInt;function G(e){if(typeof e=="number")return e;if(ce(e))return J;if(K(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=K(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Le(e);var t=Pe.test(e);return t||Ie.test(e)?Oe(e.slice(2),t?2:8):ke.test(e)?J:+e}var Ne=function(){return ue.Date.now()};const H=Ne;var Re="Expected a function",xe=Math.max,Be=Math.min;function et(e,n,t){var o,r,i,a,u,f,E=0,k=!1,b=!1,h=!0;if(typeof e!="function")throw new TypeError(Re);n=G(n)||0,K(t)&&(k=!!t.leading,b="maxWait"in t,i=b?xe(G(t.maxWait)||0,n):i,h="trailing"in t?!!t.trailing:h);function F(l){var m=o,T=r;return o=r=void 0,E=l,a=e.apply(T,m),a}function s(l){return E=l,u=setTimeout(d,n),k?F(l):a}function c(l){var m=l-f,T=l-E,S=n-m;return b?Be(S,i-T):S}function v(l){var m=l-f,T=l-E;return f===void 0||m>=n||m<0||b&&T>=i}function d(){var l=H();if(v(l))return p(l);u=setTimeout(d,c(l))}function p(l){return u=void 0,h&&o?F(l):(o=r=void 0,a)}function I(){u!==void 0&&clearTimeout(u),E=0,o=f=r=u=void 0}function O(){return u===void 0?a:p(H())}function w(){var l=H(),m=v(l);if(o=arguments,r=this,f=l,m){if(u===void 0)return s(f);if(b)return clearTimeout(u),u=setTimeout(d,n),F(f)}return u===void 0&&(u=setTimeout(d,n)),a}return w.cancel=I,w.flush=O,w}const Ae=(e,n)=>{if(!L)return!1;const t={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(n)],o=le(e,t);return["scroll","auto","overlay"].some(r=>o.includes(r))},tt=(e,n)=>{if(!L)return;let t=e;for(;t;){if([window,document,document.documentElement].includes(t))return window;if(Ae(t,n))return t;t=t.parentNode}return t};let N;const nt=e=>{var n;if(!L)return 0;if(N!==void 0)return N;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const o=t.offsetWidth;t.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",t.appendChild(r);const i=r.offsetWidth;return(n=t.parentNode)==null||n.removeChild(t),N=o-i,N};function ot(e,n){if(!L)return;if(!n){e.scrollTop=0;return}const t=[];let o=n.offsetParent;for(;o!==null&&e!==o&&e.contains(o);)t.push(o),o=o.offsetParent;const r=n.offsetTop+t.reduce((f,E)=>f+E.offsetTop,0),i=r+n.offsetHeight,a=e.scrollTop,u=a+e.clientHeight;r<a?e.scrollTop=r:i>u&&(e.scrollTop=i-e.clientHeight)}const st=e=>["",...de].includes(e);let _=[];const X=e=>{const n=e;n.key===se.esc&&_.forEach(t=>t(n))},Ue=e=>{M(()=>{_.length===0&&document.addEventListener("keydown",X),L&&_.push(e)}),V(()=>{_=_.filter(n=>n!==e),_.length===0&&L&&document.removeEventListener("keydown",X)})},W="focus-trap.focus-after-trapped",D="focus-trap.focus-after-released",$e="focus-trap.focusout-prevented",Y={cancelable:!0,bubbles:!1},He={cancelable:!0,bubbles:!1},Z="focusAfterTrapped",Q="focusAfterReleased",We=Symbol("elFocusTrap"),z=P(),A=P(0),j=P(0);let R=0;const ie=e=>{const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n},ee=(e,n)=>{for(const t of e)if(!De(t,n))return t},De=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},Ke=e=>{const n=ie(e),t=ee(n,e),o=ee(n.reverse(),e);return[t,o]},Me=e=>e instanceof HTMLInputElement&&"select"in e,y=(e,n)=>{if(e&&e.focus){const t=document.activeElement;e.focus({preventScroll:!0}),j.value=window.performance.now(),e!==t&&Me(e)&&n&&e.select()}};function te(e,n){const t=[...e],o=e.indexOf(n);return o!==-1&&t.splice(o,1),t}const Ve=()=>{let e=[];return{push:o=>{const r=e[0];r&&o!==r&&r.pause(),e=te(e,o),e.unshift(o)},remove:o=>{var r,i;e=te(e,o),(i=(r=e[0])==null?void 0:r.resume)==null||i.call(r)}}},ze=(e,n=!1)=>{const t=document.activeElement;for(const o of e)if(y(o,n),document.activeElement!==t)return},ne=Ve(),je=()=>A.value>j.value,x=()=>{z.value="pointer",A.value=window.performance.now()},oe=()=>{z.value="keyboard",A.value=window.performance.now()},qe=()=>(M(()=>{R===0&&(document.addEventListener("mousedown",x),document.addEventListener("touchstart",x),document.addEventListener("keydown",oe)),R++}),V(()=>{R--,R<=0&&(document.removeEventListener("mousedown",x),document.removeEventListener("touchstart",x),document.removeEventListener("keydown",oe))}),{focusReason:z,lastUserFocusTimestamp:A,lastAutomatedFocusTimestamp:j}),B=e=>new CustomEvent($e,{...He,detail:e}),Je=re({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[Z,Q,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const t=P();let o,r;const{focusReason:i}=qe();Ue(s=>{e.trapped&&!a.paused&&n("release-requested",s)});const a={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},u=s=>{if(!e.loop&&!e.trapped||a.paused)return;const{key:c,altKey:v,ctrlKey:d,metaKey:p,currentTarget:I,shiftKey:O}=s,{loop:w}=e,l=c===se.tab&&!v&&!d&&!p,m=document.activeElement;if(l&&m){const T=I,[S,U]=Ke(T);if(S&&U){if(!O&&m===U){const g=B({focusReason:i.value});n("focusout-prevented",g),g.defaultPrevented||(s.preventDefault(),w&&y(S,!0))}else if(O&&[S,T].includes(m)){const g=B({focusReason:i.value});n("focusout-prevented",g),g.defaultPrevented||(s.preventDefault(),w&&y(U,!0))}}else if(m===T){const g=B({focusReason:i.value});n("focusout-prevented",g),g.defaultPrevented||s.preventDefault()}}};ve(We,{focusTrapRef:t,onKeydown:u}),$(()=>e.focusTrapEl,s=>{s&&(t.value=s)},{immediate:!0}),$([t],([s],[c])=>{s&&(s.addEventListener("keydown",u),s.addEventListener("focusin",k),s.addEventListener("focusout",b)),c&&(c.removeEventListener("keydown",u),c.removeEventListener("focusin",k),c.removeEventListener("focusout",b))});const f=s=>{n(Z,s)},E=s=>n(Q,s),k=s=>{const c=C(t);if(!c)return;const v=s.target,d=s.relatedTarget,p=v&&c.contains(v);e.trapped||d&&c.contains(d)||(o=d),p&&n("focusin",s),!a.paused&&e.trapped&&(p?r=v:y(r,!0))},b=s=>{const c=C(t);if(!(a.paused||!c))if(e.trapped){const v=s.relatedTarget;!Fe(v)&&!c.contains(v)&&setTimeout(()=>{if(!a.paused&&e.trapped){const d=B({focusReason:i.value});n("focusout-prevented",d),d.defaultPrevented||y(r,!0)}},0)}else{const v=s.target;v&&c.contains(v)||n("focusout",s)}};async function h(){await q();const s=C(t);if(s){ne.push(a);const c=s.contains(document.activeElement)?o:document.activeElement;if(o=c,!s.contains(c)){const d=new Event(W,Y);s.addEventListener(W,f),s.dispatchEvent(d),d.defaultPrevented||q(()=>{let p=e.focusStartEl;pe(p)||(y(p),document.activeElement!==p&&(p="first")),p==="first"&&ze(ie(s),!0),(document.activeElement===c||p==="container")&&y(s)})}}}function F(){const s=C(t);if(s){s.removeEventListener(W,f);const c=new CustomEvent(D,{...Y,detail:{focusReason:i.value}});s.addEventListener(D,E),s.dispatchEvent(c),!c.defaultPrevented&&(i.value=="keyboard"||!je()||s.contains(document.activeElement))&&y(o??document.body),s.removeEventListener(D,E),ne.remove(a)}}return M(()=>{e.trapped&&h(),$(()=>e.trapped,s=>{s?h():F()})}),V(()=>{e.trapped&&F()}),{onKeydown:u}}});function Ge(e,n,t,o,r,i){return ae(e.$slots,"default",{handleKeydown:e.onKeydown})}var rt=fe(Je,[["render",Ge],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);const at=re({__name:"Btn",props:{title:{default:""},hoverTitle:{default:"Go"},btnLoading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},bg:{default:"#272C30"},hoverBg:{default:"#c79e70"},round:{type:Boolean,default:!0},border:{default:"none"}},emits:["clickHandle"],setup(e,{emit:n}){const t=e,o=P(!1),r=()=>{n("clickHandle")};return(i,a)=>{const u=we;return me(),Ee(u,{class:"w-full",color:t.bg,round:t.round,onMouseenter:a[0]||(a[0]=f=>o.value=!0),onMouseleave:a[1]||(a[1]=f=>o.value=!1),onClick:a[2]||(a[2]=f=>r()),loading:t.btnLoading,disabled:t.btnLoading||t.disabled,style:he({border:t.border,backgroundColor:C(o)||t.btnLoading?t.hoverBg:t.bg})},{default:Te(()=>[ae(i.$slots,"default"),be("div",{class:ge(["font-semibold text-base",i.disabled?"text-[#6E6E6E]":"text-white "])},ye(C(o)?t.hoverTitle:t.title),3)]),_:3},8,["color","round","loading","disabled","style"])}}});export{rt as E,We as F,at as _,tt as a,et as d,nt as g,st as i,ot as s};
