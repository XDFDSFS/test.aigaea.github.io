import{_ as ee}from"./WebglWavMin.11a9685f.js";import{_ as te,a as oe,b as se,c as ne}from"./IntpPersonality.vuevuetypescriptsetuptruelang.e4d4a27e.js";import{d as O,r as _,u as V,H as N,o as p,c as u,m as c,q as x,b as e,e as s,t as A,F as j,C as M,l as H,D as w,E as k,I as ae,G as le,f as ie,v as ce,k as re,p as de,h as pe,i as ue}from"./entry.fa384109.js";import{E as _e}from"./el-popover.8c1ae7b9.js";import{E as fe,a as me,b as he}from"./el-form.5b6afb78.js";import{E as ge}from"./el-button.d7546849.js";import{E as xe}from"./el-overlay.9ba8204f.js";import{_ as ve}from"./client-only.d4d268e1.js";import"./el-popper.219a4e50.js";import{u as we}from"./user.06e41118.js";import{u as R}from"./godhood.344437d6.js";import{b as be,c as ye,d as Ee,w as Ce}from"./godhead.8d5546ea.js";import{s as De,f as $e,d as Ie,c as ke}from"./ethers.b2c9c9b5.js";import{i as Be}from"./istpPersonality.74cd3ea6.js";import"./event.b1d61335.js";import"./focus-trap.e7976a37.js";import"./request.05bd5414.js";import"./verification.64b14b7b.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";const Le=""+globalThis.__publicAssetsURL("images/godhoodId/Base_Network_Logo.svg"),Ae=ae(()=>le(()=>import("./WalletSelection.bbb1e05b.js"),["./WalletSelection.bbb1e05b.js","./Obk.b5f62f3b.js","./entry.fa384109.js","./entry.c830f50d.css","./phantom.e55587f8.js","./Metamask.28398526.js","./el-overlay.9ba8204f.js","./focus-trap.e7976a37.js","./event.b1d61335.js","./el-button.d7546849.js","./el-button.2e70eb9e.css","./el-overlay.155e27a7.css","./client-only.d4d268e1.js","./godhood.344437d6.js","./ethers.b2c9c9b5.js","./user.06e41118.js","./verification.64b14b7b.js","./-vite-browser-externalcommonjs-proxy.0e49e858.js"],import.meta.url).then(f=>f.default||f)),Pe={class:"z-[99]"},Se={key:0,class:"flex flex-col items-center mx-auto"},Te=e("div",{class:"text-[20px] font-sans-[700] text-[#EDEDED]"},"Unlock Your GodHood ID",-1),Ge=e("div",{class:"text-[14px] font-[600] text-[#B0B0B0] text-center my-5"},[w(" GodHood ID will record your data on the blockchain"),e("br"),w(" to train AI with human-like characteristics. ")],-1),We={class:"w-[117px] h-[164px]"},Ue=["src"],Ne={class:"mt-6"},He={class:"w-[310px] grid grid-cols-2 gap-2"},Oe=e("div",{class:"h-[28px] bg-[#2E2E2E] rounded-[3px] text-[14px] font-sans-[400] text-[#EDEDED] flex items-center justify-center space-x-2"},[e("span",null,"Price:"),e("span",null,"$10")],-1),Ve={class:"h-[28px] cursor-pointer bg-[#2E2E2E] rounded-[3px] text-[14px] px-4 font-sans-[400] text-[#EDEDED] flex items-center justify-center space-x-2"},je=e("div",{class:"w-[15px] h-[15px] rounded-full"},[e("img",{src:Le,alt:"",class:"w-full h-full object-contain"})],-1),Me={class:"flex-1 text-[14px] font-[400] u-line-1"},Re=e("span",{class:"iconfont icon-gengduo hover:rotate-90 duration-500"},null,-1),ze={key:0,class:"w-[289px] border border-[#EBEBEB] rounded-[9px] space-x-1 space-y-3 px-4 py-3 z-[9999]"},Fe=["onClick"],Ye={class:"text-[#B0B0B0] text-[12px] font-[400]"},qe={class:"w-full relative"},Je={key:0,class:"w-5 h-5 absolute top-1/2 text-[24px] -translate-y-1/2 right-5 flex items-center justify-center"},Ke={key:0,class:"iconfont icon-tick text-green-500"},Qe={key:1,class:"iconfont icon-del text-red-400"},Xe=e("div",{class:"text-[12px] font-[400] text-[#828282] -mt-2 text-center"}," Enter your refer code to unlock a mystery box ",-1),Ze={class:"space-y-2 mt-4 mb-6"},et=e("span",{class:"text-[12px] font-[400] text-[#E7E7E7]"},"Pay ",-1),tt={key:1,class:"flex flex-col items-center justify-center space-y-4"},ot=e("div",{class:"text-[20px] font-[700] text-[#EBEBEB]"},"Payment Successful",-1),st=e("div",{class:"text-[14px] font-[600] text-[#B0B0B0] text-center"},[w(" Congratulations! Your payment was successful. Go explore your"),e("br"),w(" benefits now. ")],-1),nt={class:"w-[117px] h-[164px]"},at=["src"],lt=e("span",{class:"text-[12px] font-[400] text-[#E7E7E7]"},"View more",-1),it=O({__name:"MintNft",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(f,{emit:D}){const a=_(!1),P=we(),S=_(),r=R();V();const y=_(!1),l=_(!1),n=_(),$=_(!1),d=N({code:""}),T=N({}),m=_(),E=_([]),C=t=>{t&&t.resetFields()},I=()=>{C(S.value),d.code="",n.value="",$.value=!1,D("update:closeDialog")},z=()=>{var t;E.value=r.getWeb3ConfigData,m.value=(t=E.value)==null?void 0:t[0],r.setweb3ConfigItem(m.value)},F=t=>{try{const o=new URL(t),h=/[?&]ref=([^&]*)/,i=o.search.match(h);return i?i[1]:t}catch{return t}},G=async()=>{if(d.code&&!n.value){const t=F(d.code);d.code=t;const o=await be({referral_code:d.code.trim()});$.value=!0,o&&o.code===200&&o.data&&o.data.eth_address&&(n.value=o.data.eth_address)}},Y=t=>{m.value=t,r.setweb3ConfigItem(t)},W=async()=>{try{y.value=!0,await De(r.getAccountWalletItem.provider,m.value.chain_id);const t=await $e(r.getAccountsWalletAddress),o=await Ie(r.getAccountsWalletAddress);if(o<10)return k.warning(`USDC balance insufficient, current balance is ${o}`);if(t<=1e-4)return k.warning(`ETH balance is insufficient, current balance is ${t}`);if(d.code===P.getUserInfo.referral_code)return k.warning("Cannot use one's own referral code");if(await G(),r.getAccountsWalletAddress){const h=await ke(n.value);if(h){const{eth_address:i,approveHash:v,invierHash:B}=h;console.log(i,v,B," eth_address, approveHash, invierHash "),await q(v,B,i)}}else console.log("Connect wallet")}catch(t){console.log(t),y.value=!1}finally{y.value=!1}},q=async(t,o,h)=>{try{const i=r.getTestCardList,v=await ye({emotion_code:i==null?void 0:i.type,emotion_detail:i,approve_hash:t,inviter_hash:o,wallet_address:h,invite_code:d.code.trim(),note:"",web3_type:m.value.network});v&&v.code===200&&(l.value=!0)}catch(i){console.log(i)}},J=()=>{r.getAccountWalletItem?W():a.value=!0};return(t,o)=>{const h=_e,i=fe,v=me,B=he,U=ge,K=xe,Q=Ae,X=ve;return p(),u("div",Pe,[c(X,null,{default:x(()=>[c(K,{class:"border-box",draggable:"","model-value":t.$props.dialogVisible,"show-close":!1,width:"750px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:I,onOpen:z},{default:x(()=>{var L;return[e("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:I}),s(l)?(p(),u("div",tt,[ot,st,e("div",nt,[e("img",{src:`/images/godhoodId/id_card/${(L=s(r).getTestCardList)==null?void 0:L.emotion_code}-min.png`,alt:"",class:"w-full h-full object-contain cursor-pointer"},null,8,at)]),e("div",null,[c(U,{class:"w-[310px] h-[28px] mb-6",color:"#6435E9",onClick:o[1]||(o[1]=g=>t.$router.push("/godhoodId/myResultPreview"))},{default:x(()=>[lt]),_:1})])])):(p(),u("div",Se,[Te,Ge,e("div",We,[e("img",{src:`/images/godhoodId/id_card/${s(r).getTestCardList.emotion_code}-min.png`,alt:" ",class:"w-full h-full object-contain"},null,8,Ue)]),e("div",Ne,[e("div",He,[Oe,c(h,{placement:"bottom-start",title:"",width:289,style:{"z-index":"9999",position:"relative"},trigger:"hover",content:""},{reference:x(()=>{var g;return[e("div",Ve,[je,e("span",Me,A((g=s(m))==null?void 0:g.network),1),Re])]}),default:x(()=>[s(E)?(p(),u("div",ze,[(p(!0),u(j,null,M(s(E),(g,Z)=>(p(),u("div",{class:"space-y-1",key:Z},[e("div",{onClick:kt=>Y(g),class:"w-full border border-[#2E2E2E] cursor-pointer rounded-[9px] h-8 flex items-center justify-between px-4 hover:scale-[1.05] duration-700"},[e("span",Ye,A(g.network),1)],8,Fe)]))),128))])):H("",!0)]),_:1})]),c(B,{rules:s(T),model:s(d),class:"w-[310px] my-2"},{default:x(()=>[c(v,{label:"",style:{border:"none"}},{default:x(()=>[e("div",qe,[c(i,{modelValue:s(d).code,"onUpdate:modelValue":o[0]||(o[0]=g=>s(d).code=g),placeholder:"Enter code to get discount",onBlur:G},null,8,["modelValue"]),s($)?(p(),u("div",Je,[s(n)?(p(),u("span",Ke)):(p(),u("span",Qe))])):H("",!0)])]),_:1})]),_:1},8,["rules","model"]),Xe]),e("div",Ze,[c(U,{class:"w-[310px] h-[28px]",color:"#6435E9",onClick:J,loading:s(y)},{default:x(()=>[et]),_:1},8,["loading"])])]))]}),_:1},8,["model-value"]),c(Q,{"dialog-visible":s(a),"onUpdate:success":o[2]||(o[2]=L=>W()),"onUpdate:closeDialog":o[3]||(o[3]=L=>a.value=!1)},null,8,["dialog-visible"])]),_:1})])}}}),b=f=>(de("data-v-aff06749"),f=f(),pe(),f),ct={class:"w-full h-screen fixed bottom-0 left-0 overflow-auto text-[#EBEBEB]"},rt={class:"w-full h-screen relative"},dt={class:"absolute top-0 left-0"},pt=b(()=>e("div",{class:"absolute bottom-0 left-0 w-full h-full z-20",style:{background:"linear-gradient(0.37deg, black 1.3%, rgba(23, 25, 97, 0) 20.99%)"}},null,-1)),ut={class:"w-full h-full adaptation-padding absolute top-0 left-0 z-20 flex justify-between mt-10"},_t=b(()=>e("div",{class:"text-[55px] font-[400] mt-24"},[w(" Unlock Your GODHOOD ID "),e("br"),w("Become the God of AI ")],-1)),ft={class:"mt-24 space-y-2"},mt=b(()=>e("p",{class:"text-[20px] font-[400] mb-4"}," GODHOOD ID privileges",-1)),ht={class:"flex items-center space-x-12 mt-16"},gt={class:"button-container"},xt=re('<div class="border-lines" data-v-aff06749><span class="line top" data-v-aff06749></span><span class="line right" data-v-aff06749></span><span class="line bottom" data-v-aff06749></span><span class="line left" data-v-aff06749></span></div>',1),vt=b(()=>e("span",{class:"iconfont icon-shuaxin1 text-[16px]"},null,-1)),wt=b(()=>e("span",{class:"text-[16px] font-[400]"},"Retest",-1)),bt=[vt,wt],yt={class:"w-[450px] h-[550px] p-5 z-[10] mt-20 relative right-0 cursor-pointer arrow-icon hover:scale-[1.05] duration-700"},Et=b(()=>e("img",{src:ne,alt:"",class:"w-full h-full object-contain absolute top-0 left-0"},null,-1)),Ct=["src"],Dt=b(()=>e("div",{class:"w-[40px] h-[40px] arrow-icon absolute bottom-10 left-1/2 -translate-x-1/2"},[e("svg",{t:"1735996705618",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13657",width:"40",height:"40"},[e("path",{d:"M512 728.576a51.84 51.84 0 0 0 37.888-15.872l326.656-326.656a52.864 52.864 0 0 0 0-75.264 52.864 52.864 0 0 0-75.264 0L512 600.064l-289.28-289.28a52.864 52.864 0 0 0-75.264 0 52.864 52.864 0 0 0 0 75.264l326.656 326.656a53.12 53.12 0 0 0 37.888 15.872z","p-id":"13658",fill:"#515151"})])],-1)),$t={class:"w-full mt-20 adaptation-padding space-y-20"},It=O({__name:"theSecondStep",setup(f){const D=_(!1),a=R(),P=V(),S=async()=>{if(a.getIsPayCard){const l=await Ee({emotion_code:a.getTestCardList.emotion_code,emotion_detail:a.getTestCardList});l&&(l.code===200?P.push("/godhoodId/myResultPreview"):k.error(l.msg))}else D.value=!0},r=_(["Unlock exclusive GODHOOD evaluation report.","Data collection reward 1.5x.",'Upload emotional coordinates and earn "Soul Points".',"GAEA mystery box opening privilege.","refer friends to buy the Godhood ID to get 1USD and 1 Mystery Box."]),y=async()=>{var l;try{const n=await Ce();n&&(n.code===200?a.setWeb3ConfigData((l=n.data)==null?void 0:l.config):k.error(n.msg))}catch(n){console.dir(n)}};return ie(async()=>{var l;await ce(),await y(),document.documentElement.style.setProperty("--btn-color",((l=Be(a.getTestCardList.emotion_code))==null?void 0:l.color)||"rgba(90, 90, 90, 1)")}),(l,n)=>{const $=ee,d=te,T=oe,m=se,E=it;return p(),u("div",ct,[e("div",rt,[e("div",dt,[c($,{type:s(a).getTestCardList.emotion_code},null,8,["type"]),pt]),e("div",ut,[e("div",null,[_t,e("div",ft,[mt,(p(!0),u(j,null,M(s(r),(C,I)=>(p(),u("div",{key:I,class:"text-[14px] font-[400] text-[#9C9C9C] flex items-center space-x-2"},[e("span",null,A(I+1)+".",1),e("span",null,A(C),1)]))),128))]),e("div",ht,[e("div",gt,[e("button",{class:"glow-button",onClick:n[0]||(n[0]=C=>S())},[w(" Mint Now "),xt])]),e("div",{class:"h-fit flex items-center space-x-2 cursor-pointer text-[#B0B0B0] hover:text-[#EBEBEB]",onClick:n[1]||(n[1]=C=>l.$router.push("/godhoodId/theFirstStep"))},bt)])]),e("div",yt,[Et,e("img",{src:`/images/godhoodId/id_card/${s(a).getTestCardList.emotion_code}-min.png`,alt:"",class:"w-full h-full object-contain absolute top-12 -left-[95px] preserve_3d"},null,8,Ct)]),Dt])]),e("div",$t,[c(d,{type:s(a).getTestCardList.emotion_code},null,8,["type"]),c(T,{data:s(a).getTestCardList},null,8,["data"]),c(m,{type:s(a).getTestCardList.emotion_code},null,8,["type"])]),c(E,{"dialog-visible":s(D),"onUpdate:closeDialog":n[2]||(n[2]=C=>D.value=!1)},null,8,["dialog-visible"])])}}});const qt=ue(It,[["__scopeId","data-v-aff06749"]]);export{qt as default};
