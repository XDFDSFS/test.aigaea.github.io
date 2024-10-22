import{E as A}from"./el-input.d2c0e926.js";import{C as B,E as q,a as z}from"./index.ee74d838.js";import{_ as N,a as J}from"./login-successful.c75815fa.js";import{E as K}from"./el-checkbox.64caa141.js";import{_ as Q,a as X}from"./logo.7f92b0e7.js";import{E as R,_ as Y}from"./plugin-vueexport-helper.a8b01892.js";import{d as j,G as b,bb as I,a5 as V,y as U,o as y,c as E,b as e,a0 as a,V as n,e as s,aC as Z,bv as ee,bw as te,bc as H,bf as se,bg as oe,a as M,B as O,a1 as S,t as ae,bx as le,U as L}from"./entry.e4cc06ac.js";import{t as W}from"./throttle.a1e10328.js";import{_ as D,a as ne,b as re}from"./bg-kuang.a69d1dd7.js";import{_ as ce}from"./client-only.6b18bf02.js";import"./utils.04f80cb0.js";import"./dict.8013a525.js";const ie=""+globalThis.__publicAssetsURL("images/login/leaf.png"),f=v=>(se("data-v-d4b34369"),v=v(),oe(),v),de={class:"w-full h-full flex flex-col py-5"},_e=f(()=>e("div",{class:"w-full h-[80px] mt-32 flex flex-col items-center justify-center"},[e("div",{class:"text-3xl font-normal text-[#FFE099]"},"Let's get start "),e("div",{class:"text-sm font-normal text-[#C6BFAA]"},"Log in your account")],-1)),pe={class:"w-full flex-1 px-12 mt-8"},ue=f(()=>e("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1)),me=f(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),fe={class:"flex items-center justify-between text-white text-opacity-80 font-normal"},xe={class:"flex items-center space-x-2"},he=f(()=>e("span",{class:"text-[12px]"},"Rememebr me",-1)),ge=f(()=>e("span",{class:"duration-300 cursor-pointer text-[12px] show_spw"}," Forgot Password ? ",-1)),we=f(()=>e("img",{src:ie,class:"w-14 h-2 tig opacity-0 duration-300"},null,-1)),be=[ge,we],ve={class:"flex items-center justify-center space-x-3 mt-3"},ye=f(()=>e("span",{class:"text-white"},"Don't have an account?",-1)),ke={class:"text-[#5CF3FF] cursor-pointer"},$e={class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer"},Ee=f(()=>e("img",{src:D,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1)),Fe=f(()=>e("span",{class:"text-base font-normal text-[#4E4A3C]"},"CONTINUE",-1)),Ce=j({__name:"Index",emits:["updateDisplay"],setup(v,{emit:_}){const r=b(),x=I(),t=V({email:"",password:"",rememberPassword:!1,recaptcha_token:""}),p=b(!1),F=U(()=>!t.email||!t.password||!t.recaptcha_token);U(()=>F.value?"/images/login/btn_no.png":"/images/login/btn_selected.png");const k=V({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"}],password:[{required:!0,message:"Please enter a valide password",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),c=async i=>{i&&await i.validate(async(l,$)=>{if(l)try{p.value=!0;const u={username:t.email.trim(),password:B.SHA256(t.password).toString(B.enc.Hex).trim(),remember_me:t.rememberPassword,recaptcha_token:t.recaptcha_token.trim()},o=await ee({...u});o.code===200?(x.setToken(o.data.token),x.setUserInfo(o.data.user_info),localStorage.setItem("gaea_token",o.data.token),te("/dashboard")):(H.error(o.msg),C()),p.value=!1}catch(u){console.log(u),p.value=!1,C()}})},h=i=>{t.recaptcha_token=i,r.value.clearValidate("recaptcha_token")},C=()=>{t.recaptcha_token="";const i=document.getElementById("login_recaptcha_token");i&&(i.innerHTML="",window.onloadTurnstileCallback())};return(i,l)=>{const $=A,u=q,o=N,d=K,P=Q,g=z,w=R;return y(),E("div",de,[_e,e("div",pe,[a(g,{model:s(t),class:"",ref_key:"ruleFormRef",ref:r,rules:s(k),"label-position":"top","hide-required-asterisk":""},{default:n(()=>[a(u,{label:"Email or Uername",prop:"email"},{default:n(()=>[a($,{placeholder:"Enter your email or uername",modelValue:s(t).email,"onUpdate:modelValue":l[0]||(l[0]=m=>s(t).email=m)},{prefix:n(()=>[ue]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"Password",prop:"password",class:"mt-8"},{default:n(()=>[a($,{placeholder:"Enter your password",type:"password",modelValue:s(t).password,"onUpdate:modelValue":l[1]||(l[1]=m=>s(t).password=m),"show-password":"",oncopy:"return false"},{prefix:n(()=>[me]),_:1},8,["modelValue"])]),_:1}),a(u,{prop:"recaptcha_token",class:"mt-8"},{default:n(()=>[a(o,{onToUpdate:h,id:"login_recaptcha_token"})]),_:1}),e("div",fe,[e("div",xe,[a(d,{modelValue:s(t).rememberPassword,"onUpdate:modelValue":l[2]||(l[2]=m=>s(t).rememberPassword=m)},null,8,["modelValue"]),he]),e("div",{class:"flex flex-col items-center forgot_password",onClick:l[3]||(l[3]=m=>_("updateDisplay",!1))},be)]),e("div",ve,[ye,e("span",ke,[a(P,{to:"/register"},{default:n(()=>[Z("Sign up")]),_:1})])])]),_:1},8,["model","rules"])]),e("div",$e,[a(w,{type:"primary",loading:s(p),onClick:l[4]||(l[4]=m=>("throttle"in i?i.throttle:s(W))(()=>{c(s(r))})),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:n(()=>[Ee,Fe]),_:1},8,["loading"])])])}}});const Pe=Y(Ce,[["__scopeId","data-v-d4b34369"]]),Te=(v,_,r)=>{const x=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!_||x.test(_))return r();r(new Error("Please enter a valid email address!"))},Ve={class:"w-full px-12 h-full flex flex-col items-center justify-center space-y-12"},Ue={class:"flex flex-col items-center space-y-1"},je=e("span",{class:"text-3xl font-normal text-[#FFE099]"},"Forgot Password",-1),Ie={class:"flex items-center justify-center space-x-3 mt-3"},De=e("span",{class:"text-sm font-normal text-white"}," We will send a recovery link to this email ",-1),Be=e("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1),Se={class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer"},Le=e("img",{src:D,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1),Ae=e("span",{class:"text-base font-normal text-[#4E4A3C]"},"SEND",-1),qe={class:"w-full h-full flex flex-col items-center justify-center space-y-6"},ze=e("div",{class:"w-[266px] h-72"},[e("img",{src:J,alt:"",class:"w-full h-full"})],-1),Ne={class:"flex flex-col items-center space-y-1"},Re=e("span",{class:"text-base font-normal text-[#FFE099]"}," Send successful ",-1),He={class:"text-sm font-normal text-white"},Me=e("img",{src:D,class:"w-full h-full object-cover"},null,-1),Oe=e("span",{class:"text-base font-normal text-[#4E4A3C] absolute z-10"}," BACK TO LOGIN ",-1),We=[Me,Oe],Ge=j({__name:"ForgotPassWord",emits:["updateDisplay"],setup(v,{emit:_}){const r=b(),x=M(),t=b(!1),p=b(!1),F=I(),k=b(""),c=V({email:"",recaptcha_token:""}),h=b(!1),C=U(()=>!c.email||!c.recaptcha_token);U(()=>C.value?"/images/login/btn_no.png":"/images/login/btn_selected.png");const i=V({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:Te,trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),l=async o=>{await o.validate(async(d,P)=>{if(d)try{const g={email:c.email.trim(),recaptcha_token:c.recaptcha_token.trim()};h.value=!0;const w=await le({...g});h.value=!1,w.code===200?(p.value=!0,k.value=w.data):(H.error(w.msg||w.detail.type.msg),u())}catch(g){console.log(g),h.value=!1,u()}})},$=o=>{c.recaptcha_token=o,r.value.clearValidate("recaptcha_token")},u=()=>{c.recaptcha_token="";const o=document.getElementById("forgot_password_recaptcha_token");o&&(o.innerHTML="",window.onloadTurnstileCallback())};return O(async()=>{F.clearUserInfo(),x.query.type==="forgotPassword"&&(t.value=!0)}),(o,d)=>{const P=A,g=q,w=N,m=z,G=R;return y(),E("div",Ve,[s(p)?(y(),E(S,{key:1},[e("div",qe,[ze,e("div",Ne,[Re,e("span",He,ae(s(k)),1)])]),e("div",{class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer flex items-center justify-center",onClick:d[3]||(d[3]=T=>_("updateDisplay",!0))},We)],64)):(y(),E(S,{key:0},[e("div",Ue,[je,e("div",Ie,[De,e("span",{class:"text-sm font-normal text-[#5CF3FF] cursor-pointer",onClick:d[0]||(d[0]=T=>_("updateDisplay",!0))}," Log in ")])]),a(m,{model:s(c),class:"w-full",ref_key:"ruleFormRef",ref:r,rules:s(i),"label-position":"top","hide-required-asterisk":""},{default:n(()=>[a(g,{label:"Email",prop:"email"},{default:n(()=>[a(P,{placeholder:"Enter your email",modelValue:s(c).email,"onUpdate:modelValue":d[1]||(d[1]=T=>s(c).email=T)},{prefix:n(()=>[Be]),_:1},8,["modelValue"])]),_:1}),a(g,{prop:"recaptcha_token",class:"mt-10"},{default:n(()=>[a(w,{onToUpdate:$,id:"forgot_password_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),e("div",Se,[a(G,{type:"primary",loading:s(h),onClick:d[2]||(d[2]=T=>("throttle"in o?o.throttle:s(W))(()=>{l(s(r))})),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:n(()=>[Le,Ae]),_:1},8,["loading"])])],64))])}}}),Je={class:"w-full h-screen pb-5"},Ke=e("img",{src:ne,class:"w-full h-full fixed inset-0 object-cover -z-10"},null,-1),Qe={class:"w-full h-screen flex flex-col overflow-auto"},Xe=e("div",{class:"w-full h-12 text-base text-white font-normal px-5 flex items-center justify-between"},[e("img",{src:X,alt:"",class:"w-52 h-16 mt-4"})],-1),Ye={class:"w-full flex-1 flex justify-end overflow-auto pr-32"},Ze={class:"w-[480px] h-[680px] relative sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100"},et=e("img",{src:re,class:"w-full h-full absolute top-0 left-0 -z-10 object-left-top"},null,-1),ut=j({__name:"login",setup(v){const _=b(!0),r=M(),x=I(),t=p=>{_.value=p};return O(async()=>{x.clearUserInfo(),r.query.type==="forgotPassword"&&(_.value=!1)}),(p,F)=>{const k=Pe,c=Ge,h=ce;return y(),E("div",Je,[a(h,null,{default:n(()=>[Ke,e("div",Qe,[Xe,e("div",Ye,[e("div",Ze,[et,s(_)?(y(),L(k,{key:0,onUpdateDisplay:t})):(y(),L(c,{key:1,onUpdateDisplay:t}))])])])]),_:1})])}}});export{ut as default};
