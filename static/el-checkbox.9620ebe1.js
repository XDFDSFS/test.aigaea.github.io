import{cj as X,bt as O,bs as _,bI as De,bR as Ne,bu as Z,ck as ve,bT as Fe,bF as Re,bV as Ge,cl as Me,bk as ce,N as Y,K as W,aP as M,$ as T,h as x,a0 as U,w as be,p as me,O as ge,g as z,aD as E,aw as Ue,cd as j,d as L,aU as pe,P as V,o as S,B as he,k as ye,b as ee,n as C,e as v,Q as B,c as k,l as $,cm as D,r as H,X as ze,F as xe,t as Ce,G as K,aN as Se,Z as q,i as Ke,J as Ve,aK as He,M as qe,aq as Je,a1 as Qe,a2 as ke}from"./entry.6690c985.js";import{F as Le,h as Xe,J as ne,y as ae,o as le,v as te,S as R,D as Ze,K as Ye,U as F,d as We,b as J,z as we,c as se,L as Ee}from"./el-input.a153acf6.js";function je(e){return e}function en(e,n,l){switch(l.length){case 0:return e.call(n);case 1:return e.call(n,l[0]);case 2:return e.call(n,l[0],l[1]);case 3:return e.call(n,l[0],l[1],l[2])}return e.apply(n,l)}var nn=800,an=16,ln=Date.now;function tn(e){var n=0,l=0;return function(){var a=ln(),s=an-(a-l);if(l=a,s>0){if(++n>=nn)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function sn(e){return function(){return e}}var rn=X?function(e,n){return X(e,"toString",{configurable:!0,enumerable:!1,value:sn(n),writable:!0})}:je;const un=rn;var on=tn(un);const dn=on;var ie=Math.max;function fn(e,n,l){return n=ie(n===void 0?e.length-1:n,0),function(){for(var a=arguments,s=-1,t=ie(a.length-n,0),u=Array(t);++s<t;)u[s]=a[n+s];s=-1;for(var i=Array(n+1);++s<n;)i[s]=a[s];return i[n]=l(u),en(e,this,i)}}var re=O?O.isConcatSpreadable:void 0;function vn(e){return _(e)||Le(e)||!!(re&&e&&e[re])}function Te(e,n,l,a,s){var t=-1,u=e.length;for(l||(l=vn),s||(s=[]);++t<u;){var i=e[t];n>0&&l(i)?n>1?Te(i,n-1,l,a,s):Xe(s,i):a||(s[s.length]=i)}return s}function cn(e){var n=e==null?0:e.length;return n?Te(e,1):[]}function bn(e){return dn(fn(e,void 0,cn),e+"")}var mn="__lodash_hash_undefined__";function gn(e){return this.__data__.set(e,mn),this}function pn(e){return this.__data__.has(e)}function N(e){var n=-1,l=e==null?0:e.length;for(this.__data__=new De;++n<l;)this.add(e[n])}N.prototype.add=N.prototype.push=gn;N.prototype.has=pn;function hn(e,n){for(var l=-1,a=e==null?0:e.length;++l<a;)if(n(e[l],l,e))return!0;return!1}function yn(e,n){return e.has(n)}var xn=1,Cn=2;function Ae(e,n,l,a,s,t){var u=l&xn,i=e.length,f=n.length;if(i!=f&&!(u&&f>i))return!1;var r=t.get(e),b=t.get(n);if(r&&b)return r==n&&b==e;var p=-1,h=!0,d=l&Cn?new N:void 0;for(t.set(e,n),t.set(n,e);++p<i;){var o=e[p],c=n[p];if(a)var m=u?a(c,o,p,n,e,t):a(o,c,p,e,n,t);if(m!==void 0){if(m)continue;h=!1;break}if(d){if(!hn(n,function(g,y){if(!yn(d,y)&&(o===g||s(o,g,l,a,t)))return d.push(y)})){h=!1;break}}else if(!(o===c||s(o,c,l,a,t))){h=!1;break}}return t.delete(e),t.delete(n),h}function Sn(e){var n=-1,l=Array(e.size);return e.forEach(function(a,s){l[++n]=[s,a]}),l}function kn(e){var n=-1,l=Array(e.size);return e.forEach(function(a){l[++n]=a}),l}var Ln=1,wn=2,En="[object Boolean]",Tn="[object Date]",An="[object Error]",Pn="[object Map]",In="[object Number]",On="[object RegExp]",_n="[object Set]",Bn="[object String]",$n="[object Symbol]",Dn="[object ArrayBuffer]",Nn="[object DataView]",ue=O?O.prototype:void 0,G=ue?ue.valueOf:void 0;function Fn(e,n,l,a,s,t,u){switch(l){case Nn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Dn:return!(e.byteLength!=n.byteLength||!t(new ne(e),new ne(n)));case En:case Tn:case In:return Ne(+e,+n);case An:return e.name==n.name&&e.message==n.message;case On:case Bn:return e==n+"";case Pn:var i=Sn;case _n:var f=a&Ln;if(i||(i=kn),e.size!=n.size&&!f)return!1;var r=u.get(e);if(r)return r==n;a|=wn,u.set(e,n);var b=Ae(i(e),i(n),a,s,t,u);return u.delete(e),b;case $n:if(G)return G.call(e)==G.call(n)}return!1}var Rn=1,Gn=Object.prototype,Mn=Gn.hasOwnProperty;function Un(e,n,l,a,s,t){var u=l&Rn,i=ae(e),f=i.length,r=ae(n),b=r.length;if(f!=b&&!u)return!1;for(var p=f;p--;){var h=i[p];if(!(u?h in n:Mn.call(n,h)))return!1}var d=t.get(e),o=t.get(n);if(d&&o)return d==n&&o==e;var c=!0;t.set(e,n),t.set(n,e);for(var m=u;++p<f;){h=i[p];var g=e[h],y=n[h];if(a)var Q=u?a(y,g,h,n,e,t):a(g,y,h,e,n,t);if(!(Q===void 0?g===y||s(g,y,l,a,t):Q)){c=!1;break}m||(m=h=="constructor")}if(c&&!m){var A=e.constructor,P=n.constructor;A!=P&&"constructor"in e&&"constructor"in n&&!(typeof A=="function"&&A instanceof A&&typeof P=="function"&&P instanceof P)&&(c=!1)}return t.delete(e),t.delete(n),c}var zn=1,oe="[object Arguments]",de="[object Array]",I="[object Object]",Kn=Object.prototype,fe=Kn.hasOwnProperty;function Vn(e,n,l,a,s,t){var u=_(e),i=_(n),f=u?de:le(e),r=i?de:le(n);f=f==oe?I:f,r=r==oe?I:r;var b=f==I,p=r==I,h=f==r;if(h&&te(e)){if(!te(n))return!1;u=!0,b=!1}if(h&&!b)return t||(t=new R),u||Ze(e)?Ae(e,n,l,a,s,t):Fn(e,n,f,l,a,s,t);if(!(l&zn)){var d=b&&fe.call(e,"__wrapped__"),o=p&&fe.call(n,"__wrapped__");if(d||o){var c=d?e.value():e,m=o?n.value():n;return t||(t=new R),s(c,m,l,a,t)}}return h?(t||(t=new R),Un(e,n,l,a,s,t)):!1}function Pe(e,n,l,a,s){return e===n?!0:e==null||n==null||!Z(e)&&!Z(n)?e!==e&&n!==n:Vn(e,n,l,a,Pe,s)}function Hn(e,n){return e!=null&&n in Object(e)}function qn(e,n,l){n=ve(n,e);for(var a=-1,s=n.length,t=!1;++a<s;){var u=Fe(n[a]);if(!(t=e!=null&&l(e,u)))break;e=e[u]}return t||++a!=s?t:(s=e==null?0:e.length,!!s&&Ye(s)&&Re(u,s)&&(_(e)||Le(e)))}function Jn(e,n){return e!=null&&qn(e,n,Hn)}function Qn(e,n){return Pe(e,n)}function Xn(e,n,l){for(var a=-1,s=n.length,t={};++a<s;){var u=n[a],i=Ge(e,u);l(i,u)&&Me(t,ve(u,e),i)}return t}function Zn(e,n){return Xn(e,n,function(l,a){return Jn(e,a)})}var Yn=bn(function(e,n){return e==null?{}:Zn(e,n)});const Wn=Yn,Ie={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:ce,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},Oe={[F]:e=>Y(e)||W(e)||M(e),change:e=>Y(e)||W(e)||M(e)},w=Symbol("checkboxGroupContextKey"),jn=({model:e,isChecked:n})=>{const l=T(w,void 0),a=x(()=>{var t,u;const i=(t=l==null?void 0:l.max)==null?void 0:t.value,f=(u=l==null?void 0:l.min)==null?void 0:u.value;return!U(i)&&e.value.length>=i&&!n.value||!U(f)&&e.value.length<=f&&n.value});return{isDisabled:We(x(()=>(l==null?void 0:l.disabled.value)||a.value)),isLimitDisabled:a}},ea=(e,{model:n,isLimitExceeded:l,hasOwnLabel:a,isDisabled:s,isLabeledByFormItem:t})=>{const u=T(w,void 0),{formItem:i}=J(),{emit:f}=ge();function r(o){var c,m;return o===e.trueLabel||o===!0?(c=e.trueLabel)!=null?c:!0:(m=e.falseLabel)!=null?m:!1}function b(o,c){f("change",r(o),c)}function p(o){if(l.value)return;const c=o.target;f("change",r(c.checked),o)}async function h(o){l.value||!a.value&&!s.value&&t.value&&(o.composedPath().some(g=>g.tagName==="LABEL")||(n.value=r([!1,e.falseLabel].includes(n.value)),await me(),b(n.value,o)))}const d=x(()=>(u==null?void 0:u.validateEvent)||e.validateEvent);return be(()=>e.modelValue,()=>{d.value&&(i==null||i.validate("change").catch(o=>we()))}),{handleChange:p,onClickRoot:h}},na=e=>{const n=z(!1),{emit:l}=ge(),a=T(w,void 0),s=x(()=>U(a)===!1),t=z(!1);return{model:x({get(){var i,f;return s.value?(i=a==null?void 0:a.modelValue)==null?void 0:i.value:(f=e.modelValue)!=null?f:n.value},set(i){var f,r;s.value&&E(i)?(t.value=((f=a==null?void 0:a.max)==null?void 0:f.value)!==void 0&&i.length>(a==null?void 0:a.max.value),t.value===!1&&((r=a==null?void 0:a.changeEvent)==null||r.call(a,i))):(l(F,i),n.value=i)}}),isGroup:s,isLimitExceeded:t}},aa=(e,n,{model:l})=>{const a=T(w,void 0),s=z(!1),t=x(()=>{const r=l.value;return M(r)?r:E(r)?Ue(e.label)?r.map(j).some(b=>Qn(b,e.label)):r.map(j).includes(e.label):r!=null?r===e.trueLabel:!!r}),u=se(x(()=>{var r;return(r=a==null?void 0:a.size)==null?void 0:r.value}),{prop:!0}),i=se(x(()=>{var r;return(r=a==null?void 0:a.size)==null?void 0:r.value})),f=x(()=>!!(n.default||e.label));return{checkboxButtonSize:u,isChecked:t,isFocused:s,checkboxSize:i,hasOwnLabel:f}},la=(e,{model:n})=>{function l(){E(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&l()},_e=(e,n)=>{const{formItem:l}=J(),{model:a,isGroup:s,isLimitExceeded:t}=na(e),{isFocused:u,isChecked:i,checkboxButtonSize:f,checkboxSize:r,hasOwnLabel:b}=aa(e,n,{model:a}),{isDisabled:p}=jn({model:a,isChecked:i}),{inputId:h,isLabeledByFormItem:d}=Ee(e,{formItemContext:l,disableIdGeneration:b,disableIdManagement:s}),{handleChange:o,onClickRoot:c}=ea(e,{model:a,isLimitExceeded:t,hasOwnLabel:b,isDisabled:p,isLabeledByFormItem:d});return la(e,{model:a}),{inputId:h,isLabeledByFormItem:d,isChecked:i,isDisabled:p,isFocused:u,checkboxButtonSize:f,checkboxSize:r,hasOwnLabel:b,model:a,handleChange:o,onClickRoot:c}},ta=["tabindex","role","aria-checked"],sa=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],ia=["id","aria-hidden","disabled","value","name","tabindex"],ra=L({name:"ElCheckbox"}),ua=L({...ra,props:Ie,emits:Oe,setup(e){const n=e,l=pe(),{inputId:a,isLabeledByFormItem:s,isChecked:t,isDisabled:u,isFocused:i,checkboxSize:f,hasOwnLabel:r,model:b,handleChange:p,onClickRoot:h}=_e(n,l),d=V("checkbox"),o=x(()=>[d.b(),d.m(f.value),d.is("disabled",u.value),d.is("bordered",n.border),d.is("checked",t.value)]),c=x(()=>[d.e("input"),d.is("disabled",u.value),d.is("checked",t.value),d.is("indeterminate",n.indeterminate),d.is("focus",i.value)]);return(m,g)=>(S(),he(Se(!v(r)&&v(s)?"span":"label"),{class:C(v(o)),"aria-controls":m.indeterminate?m.controls:null,onClick:v(h)},{default:ye(()=>[ee("span",{class:C(v(c)),tabindex:m.indeterminate?0:void 0,role:m.indeterminate?"checkbox":void 0,"aria-checked":m.indeterminate?"mixed":void 0},[m.trueLabel||m.falseLabel?B((S(),k("input",{key:0,id:v(a),"onUpdate:modelValue":g[0]||(g[0]=y=>$(b)?b.value=y:null),class:C(v(d).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",name:m.name,tabindex:m.tabindex,disabled:v(u),"true-value":m.trueLabel,"false-value":m.falseLabel,onChange:g[1]||(g[1]=(...y)=>v(p)&&v(p)(...y)),onFocus:g[2]||(g[2]=y=>i.value=!0),onBlur:g[3]||(g[3]=y=>i.value=!1)},null,42,sa)),[[D,v(b)]]):B((S(),k("input",{key:1,id:v(a),"onUpdate:modelValue":g[4]||(g[4]=y=>$(b)?b.value=y:null),class:C(v(d).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",disabled:v(u),value:m.label,name:m.name,tabindex:m.tabindex,onChange:g[5]||(g[5]=(...y)=>v(p)&&v(p)(...y)),onFocus:g[6]||(g[6]=y=>i.value=!0),onBlur:g[7]||(g[7]=y=>i.value=!1)},null,42,ia)),[[D,v(b)]]),ee("span",{class:C(v(d).e("inner"))},null,2)],10,ta),v(r)?(S(),k("span",{key:0,class:C(v(d).e("label"))},[H(m.$slots,"default"),m.$slots.default?K("v-if",!0):(S(),k(ze,{key:0},[xe(Ce(m.label),1)],64))],2)):K("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var oa=q(ua,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const da=["name","tabindex","disabled","true-value","false-value"],fa=["name","tabindex","disabled","value"],va=L({name:"ElCheckboxButton"}),ca=L({...va,props:Ie,emits:Oe,setup(e){const n=e,l=pe(),{isFocused:a,isChecked:s,isDisabled:t,checkboxButtonSize:u,model:i,handleChange:f}=_e(n,l),r=T(w,void 0),b=V("checkbox"),p=x(()=>{var d,o,c,m;const g=(o=(d=r==null?void 0:r.fill)==null?void 0:d.value)!=null?o:"";return{backgroundColor:g,borderColor:g,color:(m=(c=r==null?void 0:r.textColor)==null?void 0:c.value)!=null?m:"",boxShadow:g?`-1px 0 0 0 ${g}`:void 0}}),h=x(()=>[b.b("button"),b.bm("button",u.value),b.is("disabled",t.value),b.is("checked",s.value),b.is("focus",a.value)]);return(d,o)=>(S(),k("label",{class:C(v(h))},[d.trueLabel||d.falseLabel?B((S(),k("input",{key:0,"onUpdate:modelValue":o[0]||(o[0]=c=>$(i)?i.value=c:null),class:C(v(b).be("button","original")),type:"checkbox",name:d.name,tabindex:d.tabindex,disabled:v(t),"true-value":d.trueLabel,"false-value":d.falseLabel,onChange:o[1]||(o[1]=(...c)=>v(f)&&v(f)(...c)),onFocus:o[2]||(o[2]=c=>a.value=!0),onBlur:o[3]||(o[3]=c=>a.value=!1)},null,42,da)),[[D,v(i)]]):B((S(),k("input",{key:1,"onUpdate:modelValue":o[4]||(o[4]=c=>$(i)?i.value=c:null),class:C(v(b).be("button","original")),type:"checkbox",name:d.name,tabindex:d.tabindex,disabled:v(t),value:d.label,onChange:o[5]||(o[5]=(...c)=>v(f)&&v(f)(...c)),onFocus:o[6]||(o[6]=c=>a.value=!0),onBlur:o[7]||(o[7]=c=>a.value=!1)},null,42,fa)),[[D,v(i)]]),d.$slots.default||d.label?(S(),k("span",{key:2,class:C(v(b).be("button","inner")),style:Ke(v(s)?v(p):void 0)},[H(d.$slots,"default",{},()=>[xe(Ce(d.label),1)])],6)):K("v-if",!0)],2))}});var Be=q(ca,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const ba=Ve({modelValue:{type:He(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:ce,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),ma={[F]:e=>E(e),change:e=>E(e)},ga=L({name:"ElCheckboxGroup"}),pa=L({...ga,props:ba,emits:ma,setup(e,{emit:n}){const l=e,a=V("checkbox"),{formItem:s}=J(),{inputId:t,isLabeledByFormItem:u}=Ee(l,{formItemContext:s}),i=async r=>{n(F,r),await me(),n("change",r)},f=x({get(){return l.modelValue},set(r){i(r)}});return qe(w,{...Wn(Je(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:i}),be(()=>l.modelValue,()=>{l.validateEvent&&(s==null||s.validate("change").catch(r=>we()))}),(r,b)=>{var p;return S(),he(Se(r.tag),{id:v(t),class:C(v(a).b("group")),role:"group","aria-label":v(u)?void 0:r.label||"checkbox-group","aria-labelledby":v(u)?(p=v(s))==null?void 0:p.labelId:void 0},{default:ye(()=>[H(r.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var $e=q(pa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const xa=Qe(oa,{CheckboxButton:Be,CheckboxGroup:$e});ke(Be);const Ca=ke($e);export{xa as E,Ca as a,Pe as b,Te as c,Qn as d,cn as f,Jn as h,je as i,fn as o,dn as s};
