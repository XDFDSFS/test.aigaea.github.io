import{cd as Z,bs as P,br as _,bH as Ne,c3 as De,bt as Q,ce as ve,c5 as Fe,bE as Ge,c6 as Re,cf as Me,bK as ce,K as X,H as W,aC as M,V as A,i as x,Y as U,w as be,s as me,L as ge,r as z,aq as E,b4 as Ue,bV as j,d as k,aH as pe,M as K,o as S,B as he,q as ye,b as ee,j as C,e as v,A as O,c as L,z as $,cg as N,S as V,F as ze,a4 as xe,t as Ce,l as H,a1 as Se,U as q,n as He,G as Ke,az as Ve,J as qe,b0 as Je,Z as Ye,$ as Le}from"./entry.9537c1fe.js";import{J as ke,j as Ze,K as ne,z as ae,p as le,w as te,S as G,I as Qe,L as Xe,U as F,M as We,F as J,B as we,A as se,N as Ee}from"./el-input.c4d8d441.js";function je(e){return e}function en(e,n,l){switch(l.length){case 0:return e.call(n);case 1:return e.call(n,l[0]);case 2:return e.call(n,l[0],l[1]);case 3:return e.call(n,l[0],l[1],l[2])}return e.apply(n,l)}var nn=800,an=16,ln=Date.now;function tn(e){var n=0,l=0;return function(){var a=ln(),s=an-(a-l);if(l=a,s>0){if(++n>=nn)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function sn(e){return function(){return e}}var rn=Z?function(e,n){return Z(e,"toString",{configurable:!0,enumerable:!1,value:sn(n),writable:!0})}:je;const un=rn;var on=tn(un);const dn=on;var ie=Math.max;function fn(e,n,l){return n=ie(n===void 0?e.length-1:n,0),function(){for(var a=arguments,s=-1,t=ie(a.length-n,0),u=Array(t);++s<t;)u[s]=a[n+s];s=-1;for(var i=Array(n+1);++s<n;)i[s]=a[s];return i[n]=l(u),en(e,this,i)}}var re=P?P.isConcatSpreadable:void 0;function vn(e){return _(e)||ke(e)||!!(re&&e&&e[re])}function Ae(e,n,l,a,s){var t=-1,u=e.length;for(l||(l=vn),s||(s=[]);++t<u;){var i=e[t];n>0&&l(i)?n>1?Ae(i,n-1,l,a,s):Ze(s,i):a||(s[s.length]=i)}return s}function cn(e){var n=e==null?0:e.length;return n?Ae(e,1):[]}function bn(e){return dn(fn(e,void 0,cn),e+"")}var mn="__lodash_hash_undefined__";function gn(e){return this.__data__.set(e,mn),this}function pn(e){return this.__data__.has(e)}function D(e){var n=-1,l=e==null?0:e.length;for(this.__data__=new Ne;++n<l;)this.add(e[n])}D.prototype.add=D.prototype.push=gn;D.prototype.has=pn;function hn(e,n){for(var l=-1,a=e==null?0:e.length;++l<a;)if(n(e[l],l,e))return!0;return!1}function yn(e,n){return e.has(n)}var xn=1,Cn=2;function Te(e,n,l,a,s,t){var u=l&xn,i=e.length,f=n.length;if(i!=f&&!(u&&f>i))return!1;var r=t.get(e),b=t.get(n);if(r&&b)return r==n&&b==e;var p=-1,h=!0,d=l&Cn?new D:void 0;for(t.set(e,n),t.set(n,e);++p<i;){var o=e[p],c=n[p];if(a)var m=u?a(c,o,p,n,e,t):a(o,c,p,e,n,t);if(m!==void 0){if(m)continue;h=!1;break}if(d){if(!hn(n,function(g,y){if(!yn(d,y)&&(o===g||s(o,g,l,a,t)))return d.push(y)})){h=!1;break}}else if(!(o===c||s(o,c,l,a,t))){h=!1;break}}return t.delete(e),t.delete(n),h}function Sn(e){var n=-1,l=Array(e.size);return e.forEach(function(a,s){l[++n]=[s,a]}),l}function Ln(e){var n=-1,l=Array(e.size);return e.forEach(function(a){l[++n]=a}),l}var kn=1,wn=2,En="[object Boolean]",An="[object Date]",Tn="[object Error]",Bn="[object Map]",In="[object Number]",Pn="[object RegExp]",_n="[object Set]",On="[object String]",$n="[object Symbol]",Nn="[object ArrayBuffer]",Dn="[object DataView]",ue=P?P.prototype:void 0,R=ue?ue.valueOf:void 0;function Fn(e,n,l,a,s,t,u){switch(l){case Dn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Nn:return!(e.byteLength!=n.byteLength||!t(new ne(e),new ne(n)));case En:case An:case In:return De(+e,+n);case Tn:return e.name==n.name&&e.message==n.message;case Pn:case On:return e==n+"";case Bn:var i=Sn;case _n:var f=a&kn;if(i||(i=Ln),e.size!=n.size&&!f)return!1;var r=u.get(e);if(r)return r==n;a|=wn,u.set(e,n);var b=Te(i(e),i(n),a,s,t,u);return u.delete(e),b;case $n:if(R)return R.call(e)==R.call(n)}return!1}var Gn=1,Rn=Object.prototype,Mn=Rn.hasOwnProperty;function Un(e,n,l,a,s,t){var u=l&Gn,i=ae(e),f=i.length,r=ae(n),b=r.length;if(f!=b&&!u)return!1;for(var p=f;p--;){var h=i[p];if(!(u?h in n:Mn.call(n,h)))return!1}var d=t.get(e),o=t.get(n);if(d&&o)return d==n&&o==e;var c=!0;t.set(e,n),t.set(n,e);for(var m=u;++p<f;){h=i[p];var g=e[h],y=n[h];if(a)var Y=u?a(y,g,h,n,e,t):a(g,y,h,e,n,t);if(!(Y===void 0?g===y||s(g,y,l,a,t):Y)){c=!1;break}m||(m=h=="constructor")}if(c&&!m){var T=e.constructor,B=n.constructor;T!=B&&"constructor"in e&&"constructor"in n&&!(typeof T=="function"&&T instanceof T&&typeof B=="function"&&B instanceof B)&&(c=!1)}return t.delete(e),t.delete(n),c}var zn=1,oe="[object Arguments]",de="[object Array]",I="[object Object]",Hn=Object.prototype,fe=Hn.hasOwnProperty;function Kn(e,n,l,a,s,t){var u=_(e),i=_(n),f=u?de:le(e),r=i?de:le(n);f=f==oe?I:f,r=r==oe?I:r;var b=f==I,p=r==I,h=f==r;if(h&&te(e)){if(!te(n))return!1;u=!0,b=!1}if(h&&!b)return t||(t=new G),u||Qe(e)?Te(e,n,l,a,s,t):Fn(e,n,f,l,a,s,t);if(!(l&zn)){var d=b&&fe.call(e,"__wrapped__"),o=p&&fe.call(n,"__wrapped__");if(d||o){var c=d?e.value():e,m=o?n.value():n;return t||(t=new G),s(c,m,l,a,t)}}return h?(t||(t=new G),Un(e,n,l,a,s,t)):!1}function Be(e,n,l,a,s){return e===n?!0:e==null||n==null||!Q(e)&&!Q(n)?e!==e&&n!==n:Kn(e,n,l,a,Be,s)}function Vn(e,n){return e!=null&&n in Object(e)}function qn(e,n,l){n=ve(n,e);for(var a=-1,s=n.length,t=!1;++a<s;){var u=Fe(n[a]);if(!(t=e!=null&&l(e,u)))break;e=e[u]}return t||++a!=s?t:(s=e==null?0:e.length,!!s&&Xe(s)&&Ge(u,s)&&(_(e)||ke(e)))}function Jn(e,n){return e!=null&&qn(e,n,Vn)}function Yn(e,n){return Be(e,n)}function Zn(e,n,l){for(var a=-1,s=n.length,t={};++a<s;){var u=n[a],i=Re(e,u);l(i,u)&&Me(t,ve(u,e),i)}return t}function Qn(e,n){return Zn(e,n,function(l,a){return Jn(e,a)})}var Xn=bn(function(e,n){return e==null?{}:Qn(e,n)});const Wn=Xn,Ie={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:ce,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},Pe={[F]:e=>X(e)||W(e)||M(e),change:e=>X(e)||W(e)||M(e)},w=Symbol("checkboxGroupContextKey"),jn=({model:e,isChecked:n})=>{const l=A(w,void 0),a=x(()=>{var t,u;const i=(t=l==null?void 0:l.max)==null?void 0:t.value,f=(u=l==null?void 0:l.min)==null?void 0:u.value;return!U(i)&&e.value.length>=i&&!n.value||!U(f)&&e.value.length<=f&&n.value});return{isDisabled:We(x(()=>(l==null?void 0:l.disabled.value)||a.value)),isLimitDisabled:a}},ea=(e,{model:n,isLimitExceeded:l,hasOwnLabel:a,isDisabled:s,isLabeledByFormItem:t})=>{const u=A(w,void 0),{formItem:i}=J(),{emit:f}=ge();function r(o){var c,m;return o===e.trueLabel||o===!0?(c=e.trueLabel)!=null?c:!0:(m=e.falseLabel)!=null?m:!1}function b(o,c){f("change",r(o),c)}function p(o){if(l.value)return;const c=o.target;f("change",r(c.checked),o)}async function h(o){l.value||!a.value&&!s.value&&t.value&&(o.composedPath().some(g=>g.tagName==="LABEL")||(n.value=r([!1,e.falseLabel].includes(n.value)),await me(),b(n.value,o)))}const d=x(()=>(u==null?void 0:u.validateEvent)||e.validateEvent);return be(()=>e.modelValue,()=>{d.value&&(i==null||i.validate("change").catch(o=>we()))}),{handleChange:p,onClickRoot:h}},na=e=>{const n=z(!1),{emit:l}=ge(),a=A(w,void 0),s=x(()=>U(a)===!1),t=z(!1);return{model:x({get(){var i,f;return s.value?(i=a==null?void 0:a.modelValue)==null?void 0:i.value:(f=e.modelValue)!=null?f:n.value},set(i){var f,r;s.value&&E(i)?(t.value=((f=a==null?void 0:a.max)==null?void 0:f.value)!==void 0&&i.length>(a==null?void 0:a.max.value),t.value===!1&&((r=a==null?void 0:a.changeEvent)==null||r.call(a,i))):(l(F,i),n.value=i)}}),isGroup:s,isLimitExceeded:t}},aa=(e,n,{model:l})=>{const a=A(w,void 0),s=z(!1),t=x(()=>{const r=l.value;return M(r)?r:E(r)?Ue(e.label)?r.map(j).some(b=>Yn(b,e.label)):r.map(j).includes(e.label):r!=null?r===e.trueLabel:!!r}),u=se(x(()=>{var r;return(r=a==null?void 0:a.size)==null?void 0:r.value}),{prop:!0}),i=se(x(()=>{var r;return(r=a==null?void 0:a.size)==null?void 0:r.value})),f=x(()=>!!(n.default||e.label));return{checkboxButtonSize:u,isChecked:t,isFocused:s,checkboxSize:i,hasOwnLabel:f}},la=(e,{model:n})=>{function l(){E(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&l()},_e=(e,n)=>{const{formItem:l}=J(),{model:a,isGroup:s,isLimitExceeded:t}=na(e),{isFocused:u,isChecked:i,checkboxButtonSize:f,checkboxSize:r,hasOwnLabel:b}=aa(e,n,{model:a}),{isDisabled:p}=jn({model:a,isChecked:i}),{inputId:h,isLabeledByFormItem:d}=Ee(e,{formItemContext:l,disableIdGeneration:b,disableIdManagement:s}),{handleChange:o,onClickRoot:c}=ea(e,{model:a,isLimitExceeded:t,hasOwnLabel:b,isDisabled:p,isLabeledByFormItem:d});return la(e,{model:a}),{inputId:h,isLabeledByFormItem:d,isChecked:i,isDisabled:p,isFocused:u,checkboxButtonSize:f,checkboxSize:r,hasOwnLabel:b,model:a,handleChange:o,onClickRoot:c}},ta=["tabindex","role","aria-checked"],sa=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],ia=["id","aria-hidden","disabled","value","name","tabindex"],ra=k({name:"ElCheckbox"}),ua=k({...ra,props:Ie,emits:Pe,setup(e){const n=e,l=pe(),{inputId:a,isLabeledByFormItem:s,isChecked:t,isDisabled:u,isFocused:i,checkboxSize:f,hasOwnLabel:r,model:b,handleChange:p,onClickRoot:h}=_e(n,l),d=K("checkbox"),o=x(()=>[d.b(),d.m(f.value),d.is("disabled",u.value),d.is("bordered",n.border),d.is("checked",t.value)]),c=x(()=>[d.e("input"),d.is("disabled",u.value),d.is("checked",t.value),d.is("indeterminate",n.indeterminate),d.is("focus",i.value)]);return(m,g)=>(S(),he(Se(!v(r)&&v(s)?"span":"label"),{class:C(v(o)),"aria-controls":m.indeterminate?m.controls:null,onClick:v(h)},{default:ye(()=>[ee("span",{class:C(v(c)),tabindex:m.indeterminate?0:void 0,role:m.indeterminate?"checkbox":void 0,"aria-checked":m.indeterminate?"mixed":void 0},[m.trueLabel||m.falseLabel?O((S(),L("input",{key:0,id:v(a),"onUpdate:modelValue":g[0]||(g[0]=y=>$(b)?b.value=y:null),class:C(v(d).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",name:m.name,tabindex:m.tabindex,disabled:v(u),"true-value":m.trueLabel,"false-value":m.falseLabel,onChange:g[1]||(g[1]=(...y)=>v(p)&&v(p)(...y)),onFocus:g[2]||(g[2]=y=>i.value=!0),onBlur:g[3]||(g[3]=y=>i.value=!1)},null,42,sa)),[[N,v(b)]]):O((S(),L("input",{key:1,id:v(a),"onUpdate:modelValue":g[4]||(g[4]=y=>$(b)?b.value=y:null),class:C(v(d).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",disabled:v(u),value:m.label,name:m.name,tabindex:m.tabindex,onChange:g[5]||(g[5]=(...y)=>v(p)&&v(p)(...y)),onFocus:g[6]||(g[6]=y=>i.value=!0),onBlur:g[7]||(g[7]=y=>i.value=!1)},null,42,ia)),[[N,v(b)]]),ee("span",{class:C(v(d).e("inner"))},null,2)],10,ta),v(r)?(S(),L("span",{key:0,class:C(v(d).e("label"))},[V(m.$slots,"default"),m.$slots.default?H("v-if",!0):(S(),L(ze,{key:0},[xe(Ce(m.label),1)],64))],2)):H("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var oa=q(ua,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const da=["name","tabindex","disabled","true-value","false-value"],fa=["name","tabindex","disabled","value"],va=k({name:"ElCheckboxButton"}),ca=k({...va,props:Ie,emits:Pe,setup(e){const n=e,l=pe(),{isFocused:a,isChecked:s,isDisabled:t,checkboxButtonSize:u,model:i,handleChange:f}=_e(n,l),r=A(w,void 0),b=K("checkbox"),p=x(()=>{var d,o,c,m;const g=(o=(d=r==null?void 0:r.fill)==null?void 0:d.value)!=null?o:"";return{backgroundColor:g,borderColor:g,color:(m=(c=r==null?void 0:r.textColor)==null?void 0:c.value)!=null?m:"",boxShadow:g?`-1px 0 0 0 ${g}`:void 0}}),h=x(()=>[b.b("button"),b.bm("button",u.value),b.is("disabled",t.value),b.is("checked",s.value),b.is("focus",a.value)]);return(d,o)=>(S(),L("label",{class:C(v(h))},[d.trueLabel||d.falseLabel?O((S(),L("input",{key:0,"onUpdate:modelValue":o[0]||(o[0]=c=>$(i)?i.value=c:null),class:C(v(b).be("button","original")),type:"checkbox",name:d.name,tabindex:d.tabindex,disabled:v(t),"true-value":d.trueLabel,"false-value":d.falseLabel,onChange:o[1]||(o[1]=(...c)=>v(f)&&v(f)(...c)),onFocus:o[2]||(o[2]=c=>a.value=!0),onBlur:o[3]||(o[3]=c=>a.value=!1)},null,42,da)),[[N,v(i)]]):O((S(),L("input",{key:1,"onUpdate:modelValue":o[4]||(o[4]=c=>$(i)?i.value=c:null),class:C(v(b).be("button","original")),type:"checkbox",name:d.name,tabindex:d.tabindex,disabled:v(t),value:d.label,onChange:o[5]||(o[5]=(...c)=>v(f)&&v(f)(...c)),onFocus:o[6]||(o[6]=c=>a.value=!0),onBlur:o[7]||(o[7]=c=>a.value=!1)},null,42,fa)),[[N,v(i)]]),d.$slots.default||d.label?(S(),L("span",{key:2,class:C(v(b).be("button","inner")),style:He(v(s)?v(p):void 0)},[V(d.$slots,"default",{},()=>[xe(Ce(d.label),1)])],6)):H("v-if",!0)],2))}});var Oe=q(ca,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const ba=Ke({modelValue:{type:Ve(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:ce,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),ma={[F]:e=>E(e),change:e=>E(e)},ga=k({name:"ElCheckboxGroup"}),pa=k({...ga,props:ba,emits:ma,setup(e,{emit:n}){const l=e,a=K("checkbox"),{formItem:s}=J(),{inputId:t,isLabeledByFormItem:u}=Ee(l,{formItemContext:s}),i=async r=>{n(F,r),await me(),n("change",r)},f=x({get(){return l.modelValue},set(r){i(r)}});return qe(w,{...Wn(Je(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:i}),be(()=>l.modelValue,()=>{l.validateEvent&&(s==null||s.validate("change").catch(r=>we()))}),(r,b)=>{var p;return S(),he(Se(r.tag),{id:v(t),class:C(v(a).b("group")),role:"group","aria-label":v(u)?void 0:r.label||"checkbox-group","aria-labelledby":v(u)?(p=v(s))==null?void 0:p.labelId:void 0},{default:ye(()=>[V(r.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var $e=q(pa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const xa=Ye(oa,{CheckboxButton:Oe,CheckboxGroup:$e});Le(Oe);const Ca=Le($e);export{xa as E,Ca as a,je as b,Be as c,Ae as d,cn as f,Jn as h,Yn as i,fn as o,dn as s};
