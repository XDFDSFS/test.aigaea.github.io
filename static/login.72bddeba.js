import{E as A}from"./el-input.556382a4.js";import{E as q,a as z}from"./el-form.9978737c.js";import{_ as N,a as J}from"./login-successful.05752ce7.js";import{E as K}from"./el-checkbox.336468de.js";import{_ as X,a as Q}from"./logo.b21f6f85.js";import{E as R,_ as Y}from"./plugin-vueexport-helper.a033d8c0.js";import{d as U,g as v,f as I,D as j,h as V,o as b,c as E,b as e,j as a,k as n,e as s,F as Z,ai as ee,aj as te,E as H,x as se,y as oe,a as M,m as O,X as B,t as ae,ak as le,B as S}from"./entry.ac906a3b.js";import{t as W}from"./throttle.a1e10328.js";import{_ as D,a as ne,b as re}from"./bg-kuang.3b448b53.js";import{C as L}from"./index.1735d320.js";import{_ as ce}from"./client-only.84b8ba8e.js";import"./utils.a65c8719.js";const ie=""+globalThis.__publicAssetsURL("images/login/leaf.png"),f=y=>(se("data-v-d4b34369"),y=y(),oe(),y),de={class:"w-full h-full flex flex-col py-5"},_e=f(()=>e("div",{class:"w-full h-[80px] mt-32 flex flex-col items-center justify-center"},[e("div",{class:"text-3xl font-normal text-[#FFE099]"},"Let's get start "),e("div",{class:"text-sm font-normal text-[#C6BFAA]"},"Log in your account")],-1)),pe={class:"w-full flex-1 px-12 mt-8"},ue=f(()=>e("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1)),me=f(()=>e("span",{class:"iconfont icon-cfmpassword text-[#FFE099] text-xl"},null,-1)),fe={class:"flex items-center justify-between text-white text-opacity-80 font-normal"},he={class:"flex items-center space-x-2"},xe=f(()=>e("span",{class:"text-[12px]"},"Rememebr me",-1)),ge=f(()=>e("span",{class:"duration-300 cursor-pointer text-[12px] show_spw"}," Forgot Password ? ",-1)),we=f(()=>e("img",{src:ie,class:"w-14 h-2 tig opacity-0 duration-300"},null,-1)),ve=[ge,we],ye={class:"flex items-center justify-center space-x-3 mt-3"},be=f(()=>e("span",{class:"text-white"},"Don't have an account?",-1)),ke={class:"text-[#5CF3FF] cursor-pointer"},$e={class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer"},Ee=f(()=>e("img",{src:D,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1)),Fe=f(()=>e("span",{class:"text-base font-normal text-[#4E4A3C]"},"CONTINUE",-1)),Pe=U({__name:"Index",emits:["updateDisplay"],setup(y,{emit:_}){const r=v(),h=I(),t=j({email:"",password:"",rememberPassword:!1,recaptcha_token:""}),p=v(!1),F=V(()=>!t.email||!t.password||!t.recaptcha_token);V(()=>F.value?"/images/login/btn_no.png":"/images/login/btn_selected.png");const k=j({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"}],password:[{required:!0,message:"Please enter a valide password",trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),c=async i=>{i&&await i.validate(async(l,$)=>{if(l)try{p.value=!0;const u={username:t.email.trim(),password:L.SHA256(t.password).toString(L.enc.Hex).trim(),remember_me:t.rememberPassword,recaptcha_token:t.recaptcha_token.trim()},o=await ee({...u});o.code===200?(h.setToken(o.data.token),h.setUserInfo(o.data.user_info),localStorage.setItem("gaea_token",o.data.token),te("/dashboard")):(H.error(o.msg),P()),p.value=!1}catch(u){console.log(u),p.value=!1,P()}})},x=i=>{t.recaptcha_token=i,r.value.clearValidate("recaptcha_token")},P=()=>{t.recaptcha_token="";const i=document.getElementById("login_recaptcha_token");i&&(i.innerHTML="",window.onloadTurnstileCallback())};return(i,l)=>{const $=A,u=q,o=N,d=K,C=X,g=z,w=R;return b(),E("div",de,[_e,e("div",pe,[a(g,{model:s(t),class:"",ref_key:"ruleFormRef",ref:r,rules:s(k),"label-position":"top","hide-required-asterisk":""},{default:n(()=>[a(u,{label:"Email or Uername",prop:"email"},{default:n(()=>[a($,{placeholder:"Enter your email or uername",modelValue:s(t).email,"onUpdate:modelValue":l[0]||(l[0]=m=>s(t).email=m)},{prefix:n(()=>[ue]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"Password",prop:"password",class:"mt-8"},{default:n(()=>[a($,{placeholder:"Enter your password",type:"password",modelValue:s(t).password,"onUpdate:modelValue":l[1]||(l[1]=m=>s(t).password=m),"show-password":"",oncopy:"return false"},{prefix:n(()=>[me]),_:1},8,["modelValue"])]),_:1}),a(u,{prop:"recaptcha_token",class:"mt-8"},{default:n(()=>[a(o,{onToUpdate:x,id:"login_recaptcha_token"})]),_:1}),e("div",fe,[e("div",he,[a(d,{modelValue:s(t).rememberPassword,"onUpdate:modelValue":l[2]||(l[2]=m=>s(t).rememberPassword=m)},null,8,["modelValue"]),xe]),e("div",{class:"flex flex-col items-center forgot_password",onClick:l[3]||(l[3]=m=>_("updateDisplay",!1))},ve)]),e("div",ye,[be,e("span",ke,[a(C,{to:"/register"},{default:n(()=>[Z("Sign up")]),_:1})])])]),_:1},8,["model","rules"])]),e("div",$e,[a(w,{type:"primary",loading:s(p),onClick:l[4]||(l[4]=m=>("throttle"in i?i.throttle:s(W))(()=>{c(s(r))})),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:n(()=>[Ee,Fe]),_:1},8,["loading"])])])}}});const Ce=Y(Pe,[["__scopeId","data-v-d4b34369"]]),Te=(y,_,r)=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!_||h.test(_))return r();r(new Error("Please enter a valid email address!"))},je={class:"w-full px-12 h-full flex flex-col items-center justify-center space-y-12"},Ve={class:"flex flex-col items-center space-y-1"},Ue=e("span",{class:"text-3xl font-normal text-[#FFE099]"},"Forgot Password",-1),Ie={class:"flex items-center justify-center space-x-3 mt-3"},De=e("span",{class:"text-sm font-normal text-white"}," We will send a recovery link to this email ",-1),Be=e("span",{class:"iconfont icon-email text-[#FFE099] text-xl"},null,-1),Se={class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer"},Le=e("img",{src:D,alt:"",class:"absolute top-0 left-0 -z-10 w-full h-full object-cover"},null,-1),Ae=e("span",{class:"text-base font-normal text-[#4E4A3C]"},"SEND",-1),qe={class:"w-full h-full flex flex-col items-center justify-center space-y-6"},ze=e("div",{class:"w-[266px] h-72"},[e("img",{src:J,alt:"",class:"w-full h-full"})],-1),Ne={class:"flex flex-col items-center space-y-1"},Re=e("span",{class:"text-base font-normal text-[#FFE099]"}," Send successful ",-1),He={class:"text-sm font-normal text-white"},Me=e("img",{src:D,class:"w-full h-full object-cover"},null,-1),Oe=e("span",{class:"text-base font-normal text-[#4E4A3C] absolute z-10"}," BACK TO LOGIN ",-1),We=[Me,Oe],Ge=U({__name:"ForgotPassWord",emits:["updateDisplay"],setup(y,{emit:_}){const r=v(),h=M(),t=v(!1),p=v(!1),F=I(),k=v(""),c=j({email:"",recaptcha_token:""}),x=v(!1),P=V(()=>!c.email||!c.recaptcha_token);V(()=>P.value?"/images/login/btn_no.png":"/images/login/btn_selected.png");const i=j({email:[{required:!0,message:"Please enter a valide email address",trigger:"blur"},{validator:Te,trigger:"blur"}],recaptcha_token:[{required:!0,message:"Please verify",trigger:["blur","change"]}]}),l=async o=>{await o.validate(async(d,C)=>{if(d)try{const g={email:c.email.trim(),recaptcha_token:c.recaptcha_token.trim()};x.value=!0;const w=await le({...g});x.value=!1,w.code===200?(p.value=!0,k.value=w.data):(H.error(w.msg||w.detail.type.msg),u())}catch(g){console.log(g),x.value=!1,u()}})},$=o=>{c.recaptcha_token=o,r.value.clearValidate("recaptcha_token")},u=()=>{c.recaptcha_token="";const o=document.getElementById("forgot_password_recaptcha_token");o&&(o.innerHTML="",window.onloadTurnstileCallback())};return O(async()=>{F.clearUserInfo(),h.query.type==="forgotPassword"&&(t.value=!0)}),(o,d)=>{const C=A,g=q,w=N,m=z,G=R;return b(),E("div",je,[s(p)?(b(),E(B,{key:1},[e("div",qe,[ze,e("div",Ne,[Re,e("span",He,ae(s(k)),1)])]),e("div",{class:"w-[243px] h-12 absolute left-[118px] -bottom-[17px] z-10 cursor-pointer flex items-center justify-center",onClick:d[3]||(d[3]=T=>_("updateDisplay",!0))},We)],64)):(b(),E(B,{key:0},[e("div",Ve,[Ue,e("div",Ie,[De,e("span",{class:"text-sm font-normal text-[#5CF3FF] cursor-pointer",onClick:d[0]||(d[0]=T=>_("updateDisplay",!0))}," Log in ")])]),a(m,{model:s(c),class:"w-full",ref_key:"ruleFormRef",ref:r,rules:s(i),"label-position":"top","hide-required-asterisk":""},{default:n(()=>[a(g,{label:"Email",prop:"email"},{default:n(()=>[a(C,{placeholder:"Enter your email",modelValue:s(c).email,"onUpdate:modelValue":d[1]||(d[1]=T=>s(c).email=T)},{prefix:n(()=>[Be]),_:1},8,["modelValue"])]),_:1}),a(g,{prop:"recaptcha_token",class:"mt-10"},{default:n(()=>[a(w,{onToUpdate:$,id:"forgot_password_recaptcha_token"})]),_:1})]),_:1},8,["model","rules"]),e("div",Se,[a(G,{type:"primary",loading:s(x),onClick:d[2]||(d[2]=T=>("throttle"in o?o.throttle:s(W))(()=>{l(s(r))})),style:{margin:"0",height:"100%",padding:"0","background-color":"transparent",border:"transparent",color:"#4E4A3C"},class:"w-full h-full flex items-center justify-center relative"},{default:n(()=>[Le,Ae]),_:1},8,["loading"])])],64))])}}}),Je={class:"w-full h-screen pb-5"},Ke=e("img",{src:ne,class:"w-full h-full fixed inset-0 object-cover -z-10"},null,-1),Xe={class:"w-full h-screen flex flex-col overflow-auto"},Qe=e("div",{class:"w-full h-12 text-base text-white font-normal px-5 flex items-center justify-between"},[e("img",{src:Q,alt:"",class:"w-52 h-16 mt-4"})],-1),Ye={class:"w-full flex-1 flex justify-end overflow-auto pr-32"},Ze={class:"w-[480px] h-[680px] relative sm:scale-50 md:scale-[0.7] xl:scale-[0.8] 2xl:scale-100"},et=e("img",{src:re,class:"w-full h-full absolute top-0 left-0 -z-10 object-left-top"},null,-1),ut=U({__name:"login",setup(y){const _=v(!0),r=M(),h=I(),t=p=>{_.value=p};return O(async()=>{h.clearUserInfo(),r.query.type==="forgotPassword"&&(_.value=!1)}),(p,F)=>{const k=Ce,c=Ge,x=ce;return b(),E("div",Je,[a(x,null,{default:n(()=>[Ke,e("div",Xe,[Qe,e("div",Ye,[e("div",Ze,[et,s(_)?(b(),S(k,{key:0,onUpdateDisplay:t})):(b(),S(c,{key:1,onUpdateDisplay:t}))])])])]),_:1})])}}});export{ut as default};
