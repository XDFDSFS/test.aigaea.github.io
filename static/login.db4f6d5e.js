import{E as R}from"./el-input.b621932d.js";import{E as q,a as z}from"./el-form.5b23b367.js";import{E as H}from"./el-checkbox.ee27eed7.js";import{_ as B,a as W}from"./OtherLoginOrRegist.vuevuetypescriptsetuptruelang.f695d209.js";import{E as A}from"./el-button.f7ebb3d1.js";import{_ as G,a as J}from"./logo.d58cd25a.js";import{d as S,r as m,I as T,o as v,c as $,b as e,l,m as c,e as t,aj as C,G as Q,R as N,ak as X,E as K,p as Y,h as Z,a as M,f as O,F as j,t as ee,A as L}from"./entry.120a12ae.js";import{u as te}from"./user.b72a64e6.js";import{c as I}from"./request.31d870c1.js";import{b as oe,f as se}from"./user.fcadf783.js";import{t as k,_ as ae}from"./Footer.vuevuetypescriptsetuptruelang.39184f14.js";import{C as U}from"./index.2d9eff2e.js";import{_ as ne}from"./plugin-vueexport-helper.c27b6911.js";import{c as le}from"./verification.856d912b.js";import{_ as re}from"./client-only.7198c9cb.js";import{_ as ie}from"./freecompress-floor1-1.fd561744.js";import"./event.2c073216.js";import"./isNil.c75b1b34.js";import"./-initCloneObject.421231b9.js";import"./utils.154eefbe.js";import"./el-loading.927e9db4.js";import"./godhood.fb2b4ddc.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";const E=w=>(Y("data-v-f6ab2d44"),w=w(),Z(),w),ce={class:"w-full h-full flex flex-col items-center justify-center Regular"},pe=E(()=>e("div",{class:"w-full flex flex-col py-2 z-[999]"},[e("div",{class:"text-[48px] font-bold text-[#EDEDED] uppercase"},"Let's get start "),e("div",{class:"text-lg font-light text-[#EDEDED] uppercase"},"Log in your account")],-1)),de={class:"w-full mt-4"},me=E(()=>e("div",{class:"flex items-center space-x-2"},[e("span",{class:"iconfont icon-email text-[#EDEDED] text-xl"}),e("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),ue=E(()=>e("div",{class:"flex items-center space-x-2"},[e("span",{class:"iconfont icon-cfmpassword text-[#EDEDED] text-xl"}),e("span",{class:"w-[2px] h-[18px] bg-[#2E2E2E]"})],-1)),_e={class:"flex items-center justify-between text-white text-opacity-80 font-normal mb-6"},fe={class:"flex items-center space-x-2 set_checkbox_sty text-[#2E2E2E] hover:text-[#EDEDED]"},xe=E(()=>e("span",{class:"text-[12px]"},"Remember me",-1)),he=E(()=>e("span",{class:"duration-300 cursor-pointer text-[12px] text-[#2E2E2E] hover:text-[#EDEDED]"}," Forgot Password ? ",-1)),ge=[he],ve={class:"w-full flex justify-center px-12 mb-2 mt-4"},Ee=E(()=>e("span",{class:"text-black Regular font-semibold text-[14px] uppercase"}," Login",-1)),we={class:"flex items-center justify-center space-x-3 mb-6 text-[12px]"},ye=E(()=>e("span",{class:"text-[#8F8F8F] z-[999]"},"Don't have an account?",-1)),be={class:"text-[#EDEDED] cursor-pointer z-[999]"},De=S({__name:"Index",emits:["updateDisplay"],setup(w,{emit:x}){const d=m();m(!0),m(0);const g=te(),r=T({email:"",password:"",rememberPassword:!1,recaptcha_token:""}),u=m(!1),y=T({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"}],password:[{required:!0,message:"Please enter a valide password",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),p=async s=>{I(),g.clearUserInfo(),s&&(u.value||await s.validate(async(a,D)=>{if(a)try{u.value=!0;const n={username:r.email.trim(),password:U.SHA256(r.password).toString(U.enc.Hex).trim(),remember_me:r.rememberPassword,recaptcha_token:r.recaptcha_token.trim()},o=await oe({...n});o&&(o.code===200?(g.setToken(o.data.token),X("/dashboard")):(K.error(o.msg),b()))}catch(n){console.log(n),b()}finally{u.value=!1}}))},_=s=>{r.recaptcha_token=s,d.value.clearValidate("recaptcha_token")},b=()=>{r.recaptcha_token="";const s=document.getElementById("login_recaptcha_token");s&&(s.innerHTML="",window.onloadTurnstileCallback())};return(s,a)=>{const D=R,n=q,o=H,P=B,h=A,f=G,V=W,F=z;return v(),$("div",ce,[pe,e("div",de,[l(F,{model:t(r),class:"",ref_key:"ruleFormRef",ref:d,rules:t(y),"label-position":"top","hide-required-asterisk":"",onSubmit:a[7]||(a[7]=N(i=>("throttle"in s?s.throttle:t(k))(()=>{p(t(d))}),["prevent"]))},{default:c(()=>[l(n,{label:"Email or username",prop:"email"},{default:c(()=>[l(D,{placeholder:"Enter your email or username",maxlength:50,modelValue:t(r).email,"onUpdate:modelValue":a[0]||(a[0]=i=>t(r).email=i),onKeyup:a[1]||(a[1]=C(i=>("throttle"in s?s.throttle:t(k))(()=>{p(t(d))}),["enter","native"]))},{prefix:c(()=>[me]),_:1},8,["modelValue"])]),_:1}),l(n,{label:"Password",prop:"password"},{default:c(()=>[l(D,{placeholder:"Enter your password",maxlength:50,type:"password",modelValue:t(r).password,"onUpdate:modelValue":a[2]||(a[2]=i=>t(r).password=i),"show-password":"",onKeyup:a[3]||(a[3]=C(i=>("throttle"in s?s.throttle:t(k))(()=>{p(t(d))}),["enter","native"])),oncopy:"return false"},{prefix:c(()=>[ue]),_:1},8,["modelValue"])]),_:1}),e("div",_e,[e("div",fe,[l(o,{modelValue:t(r).rememberPassword,"onUpdate:modelValue":a[4]||(a[4]=i=>t(r).rememberPassword=i)},null,8,["modelValue"]),xe]),e("div",{class:"flex flex-col items-center",onClick:a[5]||(a[5]=i=>x("updateDisplay",!1))},ge)]),l(n,{prop:"recaptcha_token"},{default:c(()=>[l(P,{onToUpdate:_,id:"login_recaptcha_token",class:"mt-2"})]),_:1}),e("div",ve,[l(h,{class:"w-full z-[999]",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(u),onClick:a[6]||(a[6]=i=>("throttle"in s?s.throttle:t(k))(()=>{p(t(d))}))},{default:c(()=>[Ee]),_:1},8,["loading"])]),e("div",we,[ye,e("span",be,[l(f,{to:"/register"},{default:c(()=>[Q("Sign up")]),_:1})])]),l(V)]),_:1},8,["model","rules"])])])}}});const ke=ne(De,[["__scopeId","data-v-f6ab2d44"]]),$e={class:"w-full h-full flex flex-col items-center justify-center space-y-6 Regular"},Pe={class:"w-full flex items-center justify-between space-x-2"},Fe=e("span",{class:"text-sm font-normal text-[#EDEDED]"},"Forgot Password",-1),Te={class:"text-sm font-normal text-[#EDEDED] cursor-pointer flex items-center space-x-6"},Ve=e("span",null," Login in",-1),Ce=e("span",{class:"iconfont icon-gengduo11"},null,-1),Se=[Ce],Ie=e("div",{class:"flex items-center space-x-2 text-[#666666]"},[e("span",{class:"iconfont icon-email text-base"}),e("span",{class:"w-[1px] h-[18px] bg-[#666666]"})],-1),je=e("span",{class:"text-sm font-normal text-[#7A7A7A]"}," We will send a recovery link to this email ",-1),Le={class:"w-full flex justify-center px-12 mb-2 mt-4"},Ue=e("span",{class:"font-medium"},"SEND",-1),Re={class:"w-[300px] flex flex-col items-center justify-center space-y-6"},qe={class:"flex flex-col items-center space-y-1 z-[99]"},ze=e("span",{class:"text-[24px] font-normal text-[#EDEDED]"}," Send successful ",-1),Be={class:"text-sm font-normal text-white"},Ae=e("span",{class:"font-medium"},"BACK TO LOGIN",-1),Ne=S({__name:"ForgotPassWord",emits:["updateDisplay"],setup(w,{emit:x}){const d=m(),g=M(),r=m(!1),u=m(!1);m(!0),m(0);const y=m(""),p=T({email:"",recaptcha_token:""}),_=m(!1),b=T({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:le,trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),s=async n=>{n&&await n.validate(async(o,P)=>{if(o){if(_.value)return;try{const h={email:p.email.trim(),recaptcha_token:p.recaptcha_token.trim()};_.value=!0;const f=await se({...h});_.value=!1,f&&f.code===200?(u.value=!0,y.value=f.data):(K.error(f.msg||f.detail.type.msg),D())}catch(h){console.log(h),_.value=!1,D()}}})},a=n=>{p.recaptcha_token=n,d.value.clearValidate("recaptcha_token")},D=()=>{p.recaptcha_token="";const n=document.getElementById("forgot_password_recaptcha_token");n&&(n.innerHTML="",window.onloadTurnstileCallback())};return O(async()=>{I(),g.query.type==="forgotPassword"&&(r.value=!0)}),(n,o)=>{const P=R,h=q,f=B,V=z,F=A;return v(),$("div",$e,[t(u)?(v(),$(j,{key:1},[e("div",Re,[e("div",qe,[ze,e("span",Be,ee(t(y)),1)])]),l(F,{class:"w-fit z-[99]",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(_),onClick:o[5]||(o[5]=i=>x("updateDisplay",!0))},{default:c(()=>[Ae]),_:1},8,["loading"])],64)):(v(),$(j,{key:0},[e("div",Pe,[Fe,e("span",Te,[Ve,e("div",{onClick:o[0]||(o[0]=i=>x("updateDisplay",!0)),class:"w-6 h-6 rounded-full border bordder-[#EDEDED] hover:bg-[#EDEDED] hover:text-black flex items-center justify-center"},Se)])]),l(V,{onSubmit:o[3]||(o[3]=N(()=>{},["prevent"])),model:t(p),class:"w-full",ref_key:"ruleFormRef",ref:d,rules:t(b),"label-position":"top","hide-required-asterisk":""},{default:c(()=>[l(h,{label:"Email",prop:"email"},{default:c(()=>[l(P,{placeholder:"Enter your email",modelValue:t(p).email,"onUpdate:modelValue":o[1]||(o[1]=i=>t(p).email=i),onKeyup:o[2]||(o[2]=C(i=>("throttle"in n?n.throttle:t(k))(()=>{s(t(d))}),["enter","native"]))},{prefix:c(()=>[Ie]),_:1},8,["modelValue"])]),_:1}),je,l(h,{prop:"recaptcha_token",class:"mt-10"},{default:c(()=>[l(f,{onToUpdate:a,id:"forgot_password_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),e("div",Le,[l(F,{class:"w-full",style:{height:"44px"},color:"#EDEDED",round:"",loading:t(_),onClick:o[4]||(o[4]=i=>("throttle"in n?n.throttle:t(k))(()=>{s(t(d))}))},{default:c(()=>[Ue]),_:1},8,["loading"])])],64))])}}}),Ke={class:"w-full overflow-auto bg-black"},Me={class:"w-full h-screen bg-black flex flex-col overflow-auto px-12 pb-6 pt-20 relative"},Oe=e("img",{src:ie,class:"w-[55%] h-[80vh] object-fill absolute right-16 top-1/2 -translate-y-1/2 z-[1]"},null,-1),He=e("img",{src:J,alt:"",class:"w-full h-full object-contain"},null,-1),We=[He],Ge={class:"w-full flex-1 flex items-center justify-between overflow-auto relative z-[9999]"},Je={class:"px-8 h-full rounded-lg"},Qe={class:"pb-[80px]"},Et=S({__name:"login",setup(w){const x=m(!0),d=M(),g=r=>{x.value=r};return O(async()=>{I(),localStorage.removeItem("np_token"),d.query.type==="forgotPassword"&&(x.value=!1)}),(r,u)=>{const y=ke,p=Ne,_=re,b=ae;return v(),$("div",Ke,[e("div",Me,[Oe,e("div",{class:"w-40 h-10 cursor-pointer fixed top-5 left-5",onClick:u[0]||(u[0]=s=>r.$router.go(0))},We),l(_,null,{default:c(()=>[e("div",Ge,[e("div",Je,[t(x)?(v(),L(y,{key:0,onUpdateDisplay:g})):(v(),L(p,{key:1,onUpdateDisplay:g}))])])]),_:1})]),e("div",Qe,[l(b)])])}}});export{Et as default};
