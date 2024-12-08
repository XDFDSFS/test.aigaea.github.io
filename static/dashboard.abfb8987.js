import{_ as S}from"./cursor-mask.2d1fffca.js";import{d as C,r as b,f as M,g as j,o as p,c as f,b as t,n as R,p as Y,h as G,i as _t,w as K,e as _,t as k,j as O,k as tt,l as et,m as x,q as N,E as Z,s as U,v as lt,x as Q,y as pt,z as gt,A as xt,B as it,F as rt,C as ct}from"./entry.6260d686.js";import{_ as W}from"./plugin-vueexport-helper.c27b6911.js";import{_ as st}from"./el-popper.87c2f4a2.js";import{E as bt}from"./el-input.752d3990.js";import{u as ot}from"./user.e0a4c3b9.js";import{n as dt}from"./ping.ea3ede7b.js";import{t as wt}from"./throttle.3832cdac.js";import{_ as yt}from"./client-only.621682bd.js";import{n as Et,a as $t,e as kt,r as Bt,b as Dt}from"./dashboard.0a06669f.js";import{E as Ct,_ as Rt,a as St,b as It}from"./el-tooltip.718f5312.js";import{f as V}from"./utils.aeaeec7c.js";import"./el-checkbox.a2b32de3.js";import{v as Tt}from"./el-loading.642e4c87.js";import"./referral.31476ddf.js";import"./request.444506da.js";import"./Fingerprinter.adc2488b.js";import"./index.1735d320.js";const L=c=>(Y("data-v-3b54fc05"),c=c(),G(),c),Mt={class:"m-auto gaea_box relative cursor-pointer overflow-hidden z-[1]"},Nt=L(()=>t("svg",{class:"w-full h-full relative z-10",viewBox:"0 0 3712 1024",version:"1.1",fill:"black",xmlns:"http://www.w3.org/2000/svg","p-id":"4297",width:"100%",height:"100%"},[t("mask",{id:"gaea",fill:"black"},[t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"}),t("path",{id:"path",d:"M912.64 422.4V896c-117.76 61.44-247.04 87.04-380.16 87.04-282.88 0-488.96-185.6-488.96-476.16C43.52 216.32 249.6 30.72 532.48 30.72c143.36 0 270.08 32 360.96 116.48l-140.8 153.6c-53.76-56.32-119.04-85.76-220.16-85.76-170.24 0-281.6 122.88-281.6 291.84 0 168.96 111.36 291.84 281.6 291.84 87.04 0 151.04-24.32 188.16-44.8v-147.2H558.08V422.4h354.56z m81.92 537.6L1386.24 53.76h165.12L1945.6 960h-225.28l-78.08-192h-352l-75.52 192h-220.16z m579.84-360.96l-111.36-281.6-110.08 281.6h221.44zM2044.16 960V53.76h615.68v184.32h-416v168.96h392.96v184.32h-392.96v184.32h439.04V960h-638.72z m705.28 0L3141.12 53.76h165.12L3700.48 960H3475.2l-78.08-192h-352l-75.52 192h-220.16z m579.84-360.96l-111.36-281.6-110.08 281.6h221.44z","p-id":"4298",fill:"none",stroke:"black","stroke-width":"5"})]),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:"url(#gaea)",fill:"black"})],-1)),zt=L(()=>t("div",{class:"w-2 h-full bg-[black] absolute z-50 top-0 -left-1"},null,-1)),Lt=L(()=>t("div",{class:"w-2 h-full bg-[black] absolute z-50 top-0 -right-1"},null,-1)),At=L(()=>t("div",{class:"w-full h-2 bg-[black] absolute z-50 bottom-0 -right-1"},null,-1)),Ot=L(()=>t("div",{class:"mask"},null,-1)),Pt=L(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Ft=[Pt],jt=L(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Yt=[jt],Gt=L(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Wt=[Gt],Xt=C({__name:"Gaea",setup(c){const o=b({transform:"translate(0, 0)"});return M(()=>{const e=document.querySelector("#path"),n=e.getTotalLength();e.style.strokeDasharray=n.toString(),e.style.strokeDashoffset=n.toString(),e.classList.add("path-animation");const s=document.querySelector(".gaea_box"),a=l=>{const u=s.getBoundingClientRect(),h=l.clientX-u.left,w=l.clientY-u.top,r=200,d=200,m=u.width-r,y=u.height-d+20,E=Math.max(0,Math.min(h-r/2,m)),B=Math.max(-20,Math.min(w-d/2,y));o.value={transform:`translate(${E}px, ${B}px)`}},i=l=>{requestAnimationFrame(()=>a(l))};document.addEventListener("mousemove",i),j(()=>{document.removeEventListener("mousemove",i)})}),(e,n)=>(p(),f("div",Mt,[Nt,zt,Lt,At,Ot,t("div",{class:"mask-animation",style:R(o.value)},Ft,4),t("div",{class:"mask-animation mask-animation-frist",style:R(o.value)},Yt,4),t("div",{class:"mask-animation mask-animation-second",style:R(o.value)},Wt,4)]))}});const mt=W(Xt,[["__scopeId","data-v-3b54fc05"]]),Ht={key:0,class:"relative w-[160px] h-[160px]"},Jt=tt('<div class="absolute inset-0 flex items-center justify-center"><div class="w-[150px] h-[150px] rounded-full border-1 border-[#EDEDED] opacity-50 animate-ping [animation-duration:2s]"></div></div><div class="absolute inset-0 flex items-center justify-center"><div class="w-[130px] h-[130px] rounded-full border-1 border-[#EDEDED] opacity-75 animate-ping [animation-duration:2s]"></div></div><div class="absolute inset-0 flex items-center justify-center"><div class="w-[110px] h-[110px] rounded-full border-1 border-[#EDEDED] animate-ping [animation-duration:2s]"></div></div><div class="absolute inset-0 flex items-center justify-center"><div class="w-[90px] h-[90px] rounded-full"></div></div>',4),Vt={key:1,class:"w-[160px] h-[160px] cursor-pointer relative"},Kt=tt('<div class="w-full h-full absolute top-0 left-0 z-5 scale-[1.07]"><svg width="100%" height="100%" viewBox="0 0 100 100"><circle class="inner-circle" cx="50" cy="50" r="45" fill="none" stroke-width="2" stroke="#2E2E2E" stroke-dasharray="2,6" transform="rotate(50 50 50)"></circle><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#2E2E2E"><tspan class="text uppercase Regular" style="font-size:30px;"> 0 </tspan></text></svg></div>',1),Ut=[Kt],qt=C({__name:"ProgressBar",setup(c){const o=ot(),e=b(0),n=b(null),s=b(!0),a=b(!1);_t(()=>({backgroundImage:`conic-gradient(transparent 0deg, white, white, transparent ${e.value}%)`}));const i=()=>{const{score:l}=o.getPingNetworkInfo;a.value?e.value>l?(s.value=!1,e.value-=.05):(clearInterval(n.value),s.value=!1):e.value<100?e.value+=1:(a.value=!0,n.value=setInterval(i,50))};return K(()=>o.getDisconnect,l=>{l||(e.value=0,a.value=!1,s.value=!0,n.value=setInterval(i,40))}),M(()=>{o.getDisconnect||(e.value=0,a.value=!1,s.value=!0,n.value=setInterval(i,40))}),(l,u)=>_(o).getDisconnect?(p(),f("div",Vt,Ut)):(p(),f("div",Ht,[Jt,t("span",{class:O(["absolute top-1/2 left-1/2 z-[99] -translate-y-1/2 -translate-x-1/2 Regular font-bold",_(s)?"text-[14px] text-[#2E2E2E]":"text-[40px] text-[#EDEDED]"])},k(_(s)?"Connecting":_(e).toFixed(1)),3)]))}});const Zt={class:"w-full h-full flex items-center justify-center px-8 pb-2 pt-6"},Qt={key:0,class:"flex-1 h-full flex flex-col items-start"},te=t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"NETWORK IS CONNECTED",-1),ee={class:"flex items-center space-x-2 mt-2"},se={key:0,class:"w-4 h-3"},oe=["src"],ae={class:"text-[10px] Regular u-line-1 text-[#EBEBEB]"},ne=t("span",{class:"text-black Regular font-medium text-[14px]"}," DISCONNECT ",-1),le={key:1,class:"flex-1 h-full flex flex-col items-start"},ie=t("div",{class:"flex flex-col items-start justify-center"},[t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"Network Connection"),t("span",{class:"text-[10px] text-[#EBEBEB] Regular font-light"}," Connect to the network to start earning ")],-1),re=t("span",{class:"text-black Regular font-medium text-[14px]"}," CONNECTION",-1),ce=C({__name:"NetworkPing",props:{data:{default:[]}},setup(c){const o=ot(),e=b(!1),n=i=>{if(i)return i.startsWith("http")?i:`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${i}.svg`},s=async()=>{try{e.value=!0,await dt()&&(o.setPingIntervalTime(dt),o.setDisconnect(!1))}catch{e.value=!1,Z.error("Connection error, please try again later")}finally{e.value=!1}},a=()=>{o.setDisconnect(!0),Z.success("Disconnected successfully"),o.clearPingIntervalTime(),o.setPingInfo(null)};return(i,l)=>{var w,r,d;const u=bt,h=qt;return p(),f("div",Zt,[_(o).getDisconnect?(p(),f("div",le,[ie,x(u,{class:"mt-17 hover:scale-105",round:"",onClick:l[1]||(l[1]=m=>s()),loading:_(e)},{default:N(()=>[re]),_:1},8,["loading"])])):(p(),f("div",Qt,[te,t("div",ee,[(w=_(o).getPingInfo)!=null&&w.country_icon?(p(),f("div",se,[t("img",{src:n((r=_(o).getPingInfo)==null?void 0:r.country_icon),class:"w-full h-full object-cover"},null,8,oe)])):et("",!0),t("span",ae,k((d=_(o).getPingInfo)==null?void 0:d.ip_address),1)]),x(u,{class:"mt-15 hover:scale-105",color:"#B0B0B0",round:"",onClick:l[0]||(l[0]=m=>("throttle"in i?i.throttle:_(wt))(()=>{a()})),loading:_(e)},{default:N(()=>[ne]),_:1},8,["loading"])])),x(h)])}}}),X=c=>(Y("data-v-c29fd60c"),c=c(),G(),c),de={class:"w-full h-full relative z-10",viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","p-id":"4297",width:"100%",height:"100%"},ue=["id"],_e=X(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),pe=["id"],me=["mask"],he=X(()=>t("div",{class:"mask"},null,-1)),fe=X(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),ve=[fe],ge=X(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),xe=[ge],be=X(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),we=[be],ye=C({__name:"BrowserChrome",props:{id:{default:"browser_chrome"}},setup(c){const o=c,e=b({transform:"translate(0, 0)"});return M(()=>{const n=document.querySelector(`.${o.id}_G_box`),s=i=>{const l=n.getBoundingClientRect(),u=i.clientX-l.left,h=i.clientY-l.top,w=20,r=20,d=l.width-w,m=l.height-r+20,y=Math.max(0,Math.min(u-w/2,d)),E=Math.max(-20,Math.min(h-r/2,m));e.value={transform:`translate(${y}px, ${E}px)`}},a=i=>{requestAnimationFrame(()=>s(i))};document.addEventListener("mousemove",a),j(()=>{document.removeEventListener("mousemove",a)})}),(n,s)=>(p(),f("div",{class:O(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${n.$props.id}_G_box`])},[(p(),f("svg",de,[t("mask",{id:`${n.$props.id}_G`,fill:"black"},[_e,t("path",{id:`${n.$props.id}_path`,stroke:"rgba(46, 46, 46, 1.00)","stroke-width":"1.5","stroke-linejoin":"round","stroke-linecap":"round",fill:"none",d:"M50 31.2502C60.3554 31.2502 68.75 39.6447 68.75 50.0001C68.75 60.3556 60.3554 68.7501 50 68.7501C39.6446 68.7501 31.25 60.3556 31.25 50.0001C31.25 39.6447 39.6446 31.2502 50 31.2502ZM50 31.2502L87.2196 31.2502M35.4167 89.0435L61.7581 64.5835M12.5 31.8162L35.1565 61.5668M50 91.6668C73.0119 91.6668 91.6667 73.012 91.6667 50.0001C91.6667 26.9883 73.0119 8.3335 50 8.3335C26.9882 8.3335 8.33337 26.9883 8.33337 50.0001C8.33337 73.012 26.9882 91.6668 50 91.6668Z"},null,8,pe)],8,ue),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${n.$props.id}_G)`,fill:"black"},null,8,me)])),he,t("div",{class:"mask-animation",style:R(_(e))},ve,4),t("div",{class:"mask-animation mask-animation-frist",style:R(_(e))},xe,4),t("div",{class:"mask-animation mask-animation-second",style:R(_(e))},we,4)],2))}});const Ee=W(ye,[["__scopeId","data-v-c29fd60c"]]),A=c=>(Y("data-v-e07ba3c6"),c=c(),G(),c),$e={class:"w-full h-full relative z-10",viewBox:"0 0 96 96",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","p-id":"4297",width:"100%",height:"100%"},ke=["id"],Be=A(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),De=["id"],Ce=A(()=>t("path",{fill:"rgba(46, 46, 46, 1.00)",d:"M11 15.25L84.9999 15.25C85.9664 15.25 86.7499 16.0335 86.7499 17L86.7499 62.9999C86.7499 63.9664 85.9664 64.7499 84.9999 64.7499L11 64.7499C10.0335 64.7499 9.25 63.9664 9.25 62.9999L9.25 17C9.25 16.0335 10.0335 15.25 11 15.25ZM11 16.75C10.8619 16.75 10.75 16.8619 10.75 17L10.75 62.9999C10.75 63.138 10.8619 63.2499 11 63.2499L84.9999 63.2499C85.138 63.2499 85.2499 63.138 85.2499 62.9999L85.2499 17C85.2499 16.8619 85.138 16.75 84.9999 16.75L11 16.75Z"},null,-1)),Re=A(()=>t("path",{stroke:"rgba(46, 46, 46, 1.00)","stroke-width":"1.5","stroke-linejoin":"round","stroke-linecap":"round",d:"M44 54L52 54"},null,-1)),Se=A(()=>t("path",{stroke:"rgba(46, 46, 46, 1.00)","stroke-width":"1.5","stroke-linejoin":"round","stroke-linecap":"round",d:"M28 82L67.9999 82"},null,-1)),Ie=["mask"],Te=A(()=>t("div",{class:"mask"},null,-1)),Me=A(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Ne=[Me],ze=A(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Le=[ze],Ae=A(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),Oe=[Ae],Pe=C({__name:"Computer",props:{id:{default:"browser_chrome"}},setup(c){const o=c,e=b({transform:"translate(0, 0)"});return M(()=>{const n=document.querySelector(`.${o.id}_G_box`),s=i=>{const l=n.getBoundingClientRect(),u=i.clientX-l.left,h=i.clientY-l.top,w=20,r=20,d=l.width-w,m=l.height-r,y=Math.max(0,Math.min(u-w/2,d)),E=Math.max(0,Math.min(h-r/2,m));e.value={transform:`translate(${y}px, ${E}px)`}},a=i=>{requestAnimationFrame(()=>s(i))};document.addEventListener("mousemove",a),j(()=>{document.removeEventListener("mousemove",a)})}),(n,s)=>(p(),f("div",{class:O(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${n.$props.id}_G_box`])},[(p(),f("svg",$e,[t("mask",{id:`${n.$props.id}_G`,fill:"black"},[Be,t("rect",{id:`${n.$props.id}_path`,x:"38",y:"64",width:"19.999996185302734",height:"17.99999237060547",stroke:"rgba(46, 46, 46, 1.00)",fill:"none","stroke-width":"2","stroke-linejoin":"round","stroke-linecap":"round"},null,8,De),Ce,Re,Se],8,ke),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${n.$props.id}_G)`,fill:"black"},null,8,Ie)])),Te,t("div",{class:"mask-animation",style:R(_(e))},Ne,4),t("div",{class:"mask-animation mask-animation-frist",style:R(_(e))},Le,4),t("div",{class:"mask-animation mask-animation-second",style:R(_(e))},Oe,4)],2))}});const Fe=W(Pe,[["__scopeId","data-v-e07ba3c6"]]),je={class:"w-full grid grid-cols-2 gap-4"},Ye={class:"w-[80px] aspect-[1/1] absolute -left-5 -bottom-5"},Ge=t("div",{class:"w-full h-full flex flex-col items-end justify-between py-3 px-3 space-y-5"},[t("span",{class:"u-line-1 Regular text-[14px] text-[#EBEBEB] z-[99]"},"GAEA EXTENSION"),t("span",{class:"font-bold Regular text-[16px] text-[#EBEBEB] z-[99]"},"1.2X REWARDS")],-1),We={class:"h-full border-box relative cursor-pointer"},Xe={class:"w-[80px] aspect-[1/1] absolute -left-5 -bottom-5"},He=t("div",{class:"w-full h-full flex flex-col items-end justify-between py-3 px-3 space-y-5"},[t("span",{class:"u-line-1 Regular text-[14px] text-[#4D4D4D] z-[99]"},"GAEA DESKTOP APP"),t("span",{class:"font-bold Regular text-[16px] text-[#4D4D4D] z-[99]"},"1.4X REWARDS")],-1),Je=C({__name:"RewardCategory",setup(c){const o=()=>{window.open("https://chromewebstore.google.com/detail/gaea-extension/cpjicfogbgognnifjgmenmaldnmeeeib","_blank")};return(e,n)=>{const s=Ee,a=Fe;return p(),f("div",je,[t("div",{class:"h-full border-box relative cursor-pointer",onClick:o},[t("div",Ye,[x(s,{id:"chrome"})]),Ge]),t("div",We,[t("div",Xe,[x(a)]),He])])}}}),P=c=>(Y("data-v-0da405e1"),c=c(),G(),c),Ve={class:"w-full h-full relative z-10 svg",viewBox:"0 0 980 954",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4297",width:"100%",height:"100%",fill:"#fff"},Ke=["id"],Ue=P(()=>t("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#fff"},null,-1)),qe=["id"],Ze=P(()=>t("path",{class:"cls-2",fill:"none",stroke:"black","stroke-width":"3",d:"M507.239,717.264h58.7V595.526s-17.613-115.017,128.27-128.259c21.281,0,41.308-2.174,41.308-2.174s-123.724-16.112-182.383,26.881c7.395-5.419-45.157,26.562-45.157,104.127C507.976,626.8,507.239,725,507.239,717.264Z"},null,-1)),Qe=P(()=>t("path",{"stroke-width":"3",class:"cls-2",fill:"none",stroke:"black",d:"M748.56,273.791s-149.449,1.794-263.062,0c-55.194,2.606-108.4,3.227-163.451,42.978C275.5,352.9,246.923,401.237,235.48,462.919S250.328,617.249,316,669.48c27.607,21.958,91.341,52.339,167.326,49.958,0.856-3.366,0-60.433,0-71.739-65.066,1.734-117.114-25.639-145.663-65.216-25.427-35.251-31.4-80.587-23.914-117.39C346.192,352.541,437.461,343.36,485.5,345.529c56.246-.567,183.336,2.817,241.321-45.651C745.952,281.5,748.56,273.791,748.56,273.791Z"},null,-1)),ts=["mask"],es=P(()=>t("div",{class:"mask"},null,-1)),ss=P(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),os=[ss],as=P(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),ns=[as],ls=P(()=>t("img",{src:S,class:"w-full h-full object-cover",alt:""},null,-1)),is=[ls],rs=C({__name:"G",props:{id:{default:"today"}},setup(c){const o=c,e=b({transform:"translate(0, 0)"});return M(()=>{const n=document.querySelector(`.${o.id}_G_box`),s=i=>{const l=n.getBoundingClientRect(),u=i.clientX-l.left,h=i.clientY-l.top,w=20,r=20,d=l.width-w,m=l.height-r,y=Math.max(0,Math.min(u-w/2,d)),E=Math.max(0,Math.min(h-r/2,m));e.value={transform:`translate(${y}px, ${E}px)`}},a=i=>{requestAnimationFrame(()=>s(i))};document.addEventListener("mousemove",a),j(()=>{document.removeEventListener("mousemove",a)})}),(n,s)=>(p(),f("div",{class:O(["m-auto relative cursor-pointer overflow-hidden z-[1]",`${n.$props.id}_G_box`])},[(p(),f("svg",Ve,[t("mask",{id:`${n.$props.id}_G`,fill:"black"},[Ue,t("circle",{fill:"none",stroke:"black","stroke-width":"3",class:"glow-path",id:`${n.$props.id}_path`,cx:"490.25",cy:"475.375",r:"373.406"},null,8,qe),Ze,Qe],8,Ke),t("rect",{x:"0",y:"0",width:"100%",height:"100%",mask:`url(#${n.$props.id}_G)`,fill:"black"},null,8,ts)])),es,t("div",{class:"mask-animation",style:R(e.value)},os,4),t("div",{class:"mask-animation mask-animation-frist",style:R(e.value)},ns,4),t("div",{class:"mask-animation mask-animation-second",style:R(e.value)},is,4)],2))}});const cs=W(rs,[["__scopeId","data-v-0da405e1"]]),ds={class:"w-full h-full flex-1 flex flex-col items-end justify-between pb-2 pt-6 px-4 space-y-2 border-box relative"},us={class:"text-[#EBEBEB] text-[14px] text-center uppercase z-[99]"},_s={class:"text-[24px] text-[#EBEBEB] font-bold z-[99]"},ps={class:"w-[160px] aspect-[1/1] absolute -left-9 -bottom-9"},ms=C({__name:"EarnInfoCard",props:{num:{default:0},icon:{default:"today"},title:{default:"Today's Points"}},emits:["toUpdate"],setup(c,{emit:o}){const e=c;return(n,s)=>{const a=cs;return p(),f("div",ds,[t("div",us,k(e.title),1),t("span",_s,k(e.num),1),t("div",ps,[x(a,{id:e.icon},null,8,["id"])])])}}});let F=null;const ut=(c,o=500,e=!1)=>{if(F!==null&&clearTimeout(F),e){const n=!F;F=setTimeout(function(){F=null},o),n&&typeof c=="function"&&c()}else F=setTimeout(function(){typeof c=="function"&&c()},o)},hs={class:"w-full h-full min-h-[250px] border-box relative"},fs={class:"absolute top-2 right-4 cursor-pointer z-50"},vs=["id"],gs={class:"text-[#EBEBEB] flex items-center space-x-1"},xs=t("div",{class:"w-2 h-2 bg-[#EBEBEB] rounded-full"},null,-1),bs=t("span",{class:"text-[14px] Regular"},"ONLINE ： ",-1),ws={class:"text-[14px] Regular font-semibold text-[#EBEBEB]"},ys={class:"text-[#4D4D4D] flex items-center space-x-1"},Es=t("div",{class:"w-2 h-2 bg-[#4D4D4D] rounded-full"},null,-1),$s=t("span",{class:"text-[14px] Regular"},"OFFLINE ： ",-1),ks={class:"text-[14px] Regular font-semibold text-[#4D4D4D]"},Bs=C({__name:"Map",props:{id:{default:"echartMap"},data:{default:()=>[]}},setup(c){const o=c,{$eChart:e}=Q(),{$worldData:n}=Q(),s=n;e.registerMap("world",s);const a=b(),i=b(!0),l=b(null),u=b(JSON.parse(localStorage.getItem("NETWORK_INFO_LIST")||"{}")),h=b(JSON.parse(localStorage.getItem("NETWORK_COUNTRY")||"[]")),w=v=>{const D=new Map;for(let g=0;g<h.value.length;g++){const I=h.value[g],$=1,H=.1,q=`rgba(235, 235, 235, ${Math.max(H,$-g/h.value.length*($-H))})`;D.has(I.country)||D.set(I.country,{name:I.country,itemStyle:{areaColor:q,borderColor:"none"}})}return{regionsData:Array.from(D.values())}},r=_t(()=>w(o.data)),d=async()=>{a.value&&(a.value.dispose(),a.value=null);const v=document.getElementById(o.id);if(!v||v.clientWidth===0||v.clientHeight===0)return;a.value=e.init(v);const{regionsData:D}=r.value,g={animation:!1,progressive:500,progressiveThreshold:3e3,geo:{type:"map",map:"world",zoom:1.2,roam:!1,scaleLimit:{min:1.2,max:3},itemStyle:{areaColor:"#2E2E2E",borderColor:"none",borderType:"none"},emphasis:{itemStyle:{areaColor:"none"},label:{show:!1,color:"#fff"}},regions:D.map(I=>({...I}))},series:[]};a.value.setOption(g)};K(()=>o.data,()=>{i.value&&ut(d,300)},{deep:!0});const m=async()=>{try{const v=await Et();v&&v.code===200&&(u.value=v.data,localStorage.setItem("NETWORK_INFO_LIST",JSON.stringify(v.data)))}catch(v){console.error("error:",v)}},y=async()=>{try{const v=await $t();v&&v.code===200&&(h.value=v.data,localStorage.setItem("NETWORK_COUNTRY",JSON.stringify(v.data)))}catch(v){console.error("error:",v)}},E=()=>{a.value&&a.value.resize()},B=()=>{a.value&&ut(E(),300)};M(async()=>{i.value=!0,await U(),z(),d(),window.addEventListener("resize",B)});const z=async()=>{await y(),m()};return j(()=>{i.value=!1,a.value&&(a.value.dispose(),a.value=null),l.value&&clearTimeout(l.value),window.removeEventListener("resize",B)}),(v,D)=>{const g=st,I=yt;return p(),f("div",hs,[t("div",fs,[x(g,{onToRefresh:D[0]||(D[0]=$=>z())})]),t("div",{id:v.id,class:"w-full h-full"},null,8,vs),D[1]||(lt(-1),D[1]=t("div",{class:"flex flex-col justify-end space-y-1 absolute bottom-4 left-8 z-50"},[t("div",gs,[xs,bs,x(I,null,{default:N(()=>{var $;return[t("span",ws,k((($=_(u))==null?void 0:$.devices)||0),1)]}),_:1})]),t("div",ys,[Es,$s,x(I,null,{default:N(()=>{var $;return[t("span",ks,k((($=_(u))==null?void 0:$.users)||0),1)]}),_:1})])]),lt(1),D[1])])}}}),Ds=["id"],Cs=C({__name:"ProgressBar",props:{id:{default:""},data:{default:()=>({network_points:0,referral_points:0,earned_points:0,date:""})},maxPoints:{default:200}},setup(c){const o=c,{$eChart:e}=Q(),n=b(["#EBEBEB","#8C8C8C","#2B2B2B"]),s=pt(),a=b(null),i=async()=>{s.value&&s.value.dispose();const u=document.getElementById(o.id);if(!u||u.clientWidth===0||u.clientHeight===0)return;s.value=e.init(u);const h=30,w=o.maxPoints===0?100:Math.ceil(o.maxPoints/100)*100,r=o.data.network_points===0?.1:o.data.network_points,d=o.data.referral_points===0?.1:o.data.referral_points,m=o.data.earned_points===0?.1:o.data.earned_points,y=r+d+m,E=2e3,B=5e3,z=Math.min(E*(r/y),B),v=Math.min(E*(d/y),B),D=Math.min(E*(m/y),B),g=z,I=z+v,$=[{name:"NETWORKS",target:r,color:n.value[0]},{name:"REFERRALS",target:d,color:n.value[1]},{name:"REWARD",target:m,color:n.value[2]}],H={backgroundColor:"black",grid:{top:"1%",left:"1%",right:"1%",bottom:"1%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(150,150,150,0)"}},appendToBody:!0,formatter:at=>{var nt;const q=at;let J=0;const ft=(nt=o.data)==null?void 0:nt.date,vt=q.map(T=>{if(T.componentSubType==="bar")return J+=Number(T.value)||0,`
           <div class="flex items-center justify-between mt-2 ">
             <div class="flex items-center space-x-1" style="color: ${T.color};">
               <span class="w-3 h-3 rounded-full" style="background-color: ${T.color};"></span>
               <span >${T.seriesName}</span>
             </div>
             <span style="color: ${T.color};">${typeof T.value=="number"?T.value==.1?0:T.value.toFixed(2):T.value}</span>
           </div>`}).join("");return`
         <div class="bg-black rounded-lg text-white text-xs ">
           <div class="flex items-center  pb-2 space-x-32">
             <span>${V(ft)}</span>
           </div>
           <div class="flex items-center justify-between border-b border-[#2E2E2E] pb-2 space-x-32">
             <span>TOTAL:</span>
             <span class="text-[#EBEBEB]">${typeof J=="number"?J.toFixed(2):J}</span>
           </div>${vt}
         </div>`},textStyle:{color:"#FFFFFF"},borderColor:"#2E2E2E",backgroundColor:"black"},xAxis:{show:!1,type:"value",min:0,max:w,interval:25,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},yAxis:[{data:[""],splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}}],series:[{type:"bar",name:$[0].name,barWidth:h,itemStyle:{color:n.value[0],shadowBlur:4,shadowColor:"none"},data:[$[0].target],z:1,stack:"total",animationDuration:z,animationDelay:0},{type:"bar",name:$[1].name,barWidth:h,itemStyle:{color:$[1].color,shadowBlur:4,shadowColor:"none"},data:[$[1].target],z:1,stack:"total",animationDuration:v,animationDelay:g},{type:"bar",name:$[2].name,barWidth:h,itemStyle:{color:$[2].color,shadowBlur:4,shadowColor:"none"},data:[$[2].target],z:1,stack:"total",animationDuration:D,animationDelay:I},{type:"pictorialBar",itemStyle:{color:"#000"},symbolRepeat:"fixed",symbolMargin:4,symbol:"rect",symbolClip:!0,symbolSize:[2,h],symbolPosition:"start",data:[r+d+m],z:2}]};s.value.setOption(H)};K(()=>o.data,i,{deep:!0});const l=()=>{s.value&&(a.value&&clearTimeout(a.value),a.value=setTimeout(()=>{s.value.resize()},300))};return M(async()=>{await U(),setTimeout(i,500),window.addEventListener("resize",l)}),j(()=>{s.value&&(window.removeEventListener("resize",l),s.value.dispose()),a.value&&clearTimeout(a.value)}),(u,h)=>(p(),f("div",{id:u.id,class:"w-full h-full"},null,8,Ds))}}),ht=c=>(Y("data-v-16045ac1"),c=c(),G(),c),Rs={class:"bg-black Regular"},Ss={class:"flex items-center justify-between mt-2 mb-4"},Is=ht(()=>t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB] uppercase"},"Networks Statistics",-1)),Ts={class:"w-fit"},Ms={class:"border-box py-4 relative"},Ns={class:"absolute top-2 right-4 cursor-pointer z-50"},zs={class:"text-[#EDEDED] text-[13px] font-medium"},Ls={class:"flex items-center"},As={class:"flex-1 h-11"},Os={class:"text-[#EDEDED] text-[13px] font-medium"},Ps=ht(()=>t("span",{class:"flex-1 text-[13px] font-medium uppercase"}," CHECK IN ",-1)),Fs=[Ps],js={class:"flex-1 text-[13px] font-medium uppercase"},Ys=tt('<div class="flex items-center text-[12px] space-x-8 mt-4" data-v-16045ac1><div class="flex items-center space-x-1" data-v-16045ac1><span class="w-3 h-3 rounded-full bg-[#EBEBEB]" data-v-16045ac1></span><span class="text-[#EBEBEB]" data-v-16045ac1>NETWORKS </span></div><div class="flex items-center space-x-1" data-v-16045ac1><span class="w-3 h-3 rounded-full bg-[#8C8C8C]" data-v-16045ac1></span><span class="text-[#8C8C8C]" data-v-16045ac1>REFERRALS </span></div><div class="flex items-center space-x-1" data-v-16045ac1><span class="w-3 h-3 rounded-full bg-[#2B2B2B]" data-v-16045ac1></span><span class="text-[#2B2B2B]" data-v-16045ac1>REWARD</span></div></div>',1),Gs=C({__name:"PointsRecord",setup(c){const o=b(),e=new Date,n=new Date(e);n.setDate(e.getDate()-7);const s=b(!1),a=b([n.toISOString().split("T")[0],e.toISOString().split("T")[0]]),i=b(JSON.parse(localStorage.getItem("DAILY_STATISTIC")||"[]")),l=ot(),u=()=>{const[r,d]=a.value;if(r&&d){const m=new Date(r);if((new Date(d).getTime()-m.getTime())/(1e3*60*60*24)>30){Z.warning("Please select a date range of no more than 30 days."),a.value=[r,r];return}h()}},h=async()=>{try{if(s.value=!0,a.value){const r=await kt(a.value[0],a.value[1]);r&&r.code===200&&(i.value=r.data,o.value=Math.max(...r.data.map(d=>{const m=d.network_points+d.referral_points+d.earned_points;return parseFloat(m.toFixed(2))})),localStorage.setItem("DAILY_STATISTIC",JSON.stringify(r.data)))}}catch(r){console.log(r)}finally{s.value=!1}},w=r=>{const d=new Date,m=new Date(r);return d.getFullYear()===m.getFullYear()&&d.getMonth()===m.getMonth()&&d.getDate()===m.getDate()};return K(()=>l.getDisconnect,r=>{r||setTimeout(()=>{h()},5e3)}),M(async()=>{await U(),h()}),(r,d)=>{const m=Ct,y=st,E=Rt,B=St,z=Cs,v=It,D=Tt;return p(),f("div",Rs,[t("div",Ss,[Is,t("div",Ts,[x(m,{modelValue:_(a),"onUpdate:modelValue":d[0]||(d[0]=g=>gt(a)?a.value=g:null),type:"daterange","range-separator":"-","start-placeholder":"Start date","end-placeholder":"End date",onChange:u,format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])])]),t("div",Ms,[t("div",Ns,[x(y,{onToRefresh:d[1]||(d[1]=g=>h())})]),xt((p(),it(v,{data:_(i),style:{width:"100%"},"max-height":"550px"},{empty:N(()=>[x(E)]),default:N(()=>[x(B,{prop:"date",label:"DATE",align:"center","min-width":"120px"},{default:N(g=>[t("span",zs,k(("formatDate"in r?r.formatDate:_(V))(g.row.date)),1)]),_:1}),x(B,{label:"EARNED POINTS","min-width":"400px",align:"center"},{default:N(g=>[t("div",Ls,[t("div",As,[_(s)?et("",!0):(p(),it(z,{key:0,id:`progressBar_${g.$index+1}`,data:g.row,maxPoints:_(o)},null,8,["id","data","maxPoints"]))]),t("span",Os,k((g.row.network_points+g.row.referral_points+g.row.checkin_points).toFixed(2)),1)])]),_:1}),x(B,{label:"CHECK IN",align:"center","min-width":"120px"},{default:N(g=>[w(g.row.date)&&g.row.checkin_points===0?(p(),f("div",{key:0,class:"w-[140px] text-[#EDEDED] border mx-auto border-[#EDEDED] rounded-full py-1 px-2 cursor-pointer flex items-center",onClick:d[2]||(d[2]=I=>r.$router.push("/missions"))},Fs)):(p(),f("div",{key:1,class:O(["w-[140px] text-black mx-auto rounded-full py-1 px-2 flex items-center cursor-not-allowed",g.row.checkin_points===0?"bg-[#2E2E2E]":"bg-[#B0B0B0]"])},[t("span",js,k(g.row.checkin_points===0?"expired":"checked in"),1)],2))]),_:1})]),_:1},8,["data"])),[[D,_(s)]])]),Ys])}}});const Ws=W(Gs,[["__scopeId","data-v-16045ac1"]]),Xs=""+globalThis.__publicAssetsURL("images/dashboard/line.png"),Hs={class:"w-full space-y-4 bg-black pb-[180px]"},Js=t("span",{class:"text-[20px] Regular font-bold text-[#EBEBEB]"},"GAEA ERA",-1),Vs={class:"border-box z-50 relative bg-black"},Ks={class:"grid grid-cols-5"},Us={key:0,class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[1.5px] bg-[#EBEBEB] z-50"},qs=t("div",{class:"w-full h-8 absolute -top-4 z-10"},[t("img",{src:Xs,class:"w-full h-full",alt:""})],-1),Zs={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},Qs=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),to={class:"Regular text-[12px]"},eo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},so=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),oo={class:"Regular text-[12px]"},ao={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},no=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),lo={class:"Regular text-[12px]"},io={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},ro=t("div",{class:"w-[2px] h-5 absolute top-1/2 -translate-y-1/2 -right-[2px] bg-[#EBEBEB] z-[999]"},null,-1),co={class:"Regular text-[12px]"},uo={class:"py-6 text-[#EBEBEB] text-center relative border-r border-[#B0B0B0] border-opacity-40"},_o={class:"Regular text-[12px]"},po={class:"relative"},mo={class:"w-[90%] h-[200px] mx-auto absolute -top-38 left-1/2 -translate-x-1/2 bg-black"},ho=t("div",{class:"h-full absolute top-20 left-0 w-full z-20 rotate-180",style:{background:"linear-gradient(0.7deg, black 50.3%, rgba(23, 25, 97, 0) 80.99%)"}},null,-1),fo=C({__name:"CapturingTheWeb",setup(c){const o=b(["ERA","START / END DATE","REFERRALS","GAEA POINTS","WORKING HOURS"]),e=b([]),n=async()=>{e.value=JSON.parse(localStorage.getItem("REWARD_ERA_INFO"))||[];const s=await Bt();s&&s.code===200&&(e.value=s.data,localStorage.setItem("REWARD_ERA_INFO",JSON.stringify(s.data)))};return M(()=>{n()}),(s,a)=>{const i=mt;return p(),f("div",Hs,[Js,t("div",Vs,[t("div",Ks,[(p(!0),f(rt,null,ct(_(o),(l,u)=>(p(),f("div",{class:O(["py-6 text-[#EBEBEB] text-center relative bg-black",{"border-r border-[#B0B0B0] border-opacity-40":(u+1)%5!==0}]),key:u},[(u+1)%5!==0?(p(),f("div",Us)):et("",!0),t("span",{class:O(["",u>=5?"Regular text-[12px]":"Regular font-[600] text-[14px]"])},k(l),3)],2))),128))]),(p(!0),f(rt,null,ct(_(e),(l,u)=>(p(),f("div",{class:"grid grid-cols-5 relative",key:u},[qs,t("div",Zs,[Qs,t("span",to,k(l.name),1)]),t("div",eo,[so,t("span",oo,k(("formatDate"in s?s.formatDate:_(V))(l.start_date))+" / "+k(l.end_date=="-"?l.end_date:("formatDate"in s?s.formatDate:_(V))(l.end_date)),1)]),t("div",ao,[no,t("span",lo,k(l.referral_points),1)]),t("div",io,[ro,t("span",co,k(l.total_points),1)]),t("div",uo,[t("span",_o,k(l.total_uptime),1)])]))),128))]),t("div",po,[t("div",mo,[x(i),ho])])])}}}),vo={class:"w-full h-full flex flex-col adaptation-padding"},go={class:"w-[90%] mx-auto overflow-hidden relative"},xo=t("div",{class:"absolute bottom-0 left-0 w-full h-full z-20",style:{background:"linear-gradient(0.37deg, black 35.3%, rgba(23, 25, 97, 0) 80.99%)"}},null,-1),bo={class:"w-full h-auto relative z-50 space-y-[49px] -top-26"},wo={class:"w-full h-fit grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 bg-black z-20"},yo={class:"flex flex-col col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2 space-y-4"},Eo={class:"w-full min-h-[216px] border-box relative"},$o={class:"absolute top-2 right-4 cursor-pointer z-50"},ko={class:"h-full flex flex-col justify-between space-y-4"},Bo={class:"col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"},Xo=C({__name:"dashboard",setup(c){const o=b(JSON.parse(localStorage.getItem("INTEGRAL_DATA")||"{}")),e=pt([]),n=async()=>{try{const s=await Dt();if(s&&s.code===200){localStorage.setItem("INTEGRAL_DATA",JSON.stringify(s.data)),o.value=s.data;const a=JSON.parse(localStorage.getItem("PLUGIN_DATA_INFO"));localStorage.setItem("PLUGIN_DATA_INFO",JSON.stringify({...a,...s.data}))}}catch(s){console.error("Error fetching data:",s)}};return M(async()=>{await U(),await n()}),(s,a)=>{var y,E;const i=mt,l=st,u=ce,h=Je,w=ms,r=Bs,d=Ws,m=fo;return p(),f("div",vo,[t("div",go,[x(i),xo]),t("div",bo,[t("div",wo,[t("div",yo,[t("div",Eo,[t("div",$o,[x(l,{onToRefresh:a[0]||(a[0]=B=>n())})]),x(u)]),x(h)]),t("div",ko,[x(w,{num:(y=_(o))==null?void 0:y.today_total},null,8,["num"]),x(w,{icon:"total",title:"ERA2 POINTS",num:(E=_(o))==null?void 0:E.total_total,onToUpdate:a[1]||(a[1]=B=>n())},null,8,["num"])]),t("div",Bo,[x(r,{data:_(e)},null,8,["data"])])]),x(d),x(m)])])}}});export{Xo as default};
