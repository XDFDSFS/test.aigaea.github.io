import{_ as k}from"./WebglWavMin.11a9685f.js";import{E as P}from"./el-button.d7546849.js";import{d as M,r as d,u as F,f as N,g as L,o as n,c as h,m as J,b as s,j as z,e as r,F as A,C as R,B as y,q as g,v as j,E as q,n as D,p as H,h as Y,i as O}from"./entry.fa384109.js";import{u as W}from"./godhood.344437d6.js";import{g as G}from"./godhead.8d5546ea.js";import"./istpPersonality.74cd3ea6.js";import"./request.05bd5414.js";import"./user.06e41118.js";const U=""+globalThis.__publicAssetsURL("images/godhoodId/id_card/chassis_circle.svg"),v=u=>(H("data-v-ea1559fc"),u=u(),Y(),u),V={class:"w-full h-screen fixed bottom-0 left-0 flex flex-col items-center justify-end z-[10]"},K={class:"absolute bottom-0 aspect-[1/1] round-card"},Q={class:"w-full h-full top-[64%] absolute rounded-full"},X={class:"card-wrapper"},Z=["onMouseover","onClick"],ee=["src"],te=v(()=>s("img",{src:U,alt:"",class:"w-full h-full absolute top-0 left-0 object-fill"},null,-1)),oe=v(()=>s("span",{class:"text-[15px] font-[500]"},"My GODHOOD",-1)),se={key:1},ae=v(()=>s("span",{class:"text-[15px] font-[500]"}," Mint Now ",-1)),ne=v(()=>s("span",{class:"text-[15px] font-[500]"}," TAKE THE TEST ",-1)),le=5,re=M({__name:"index",setup(u){const x=d(["ENFJ","ENTJ","ESFJ","ESFP","ENFP","ENTP","ESTJ","ESTP","INFJ","INTJ","ISFJ","ISFP","INFP","INTP","ISTJ","ISTP"]),f=d(null),m=d(!1),i=d(0),E=F(),l=W(),p=d(.1),S=e=>{f.value=e,m.value=!0},w=()=>{f.value=null,m.value=!1},T=e=>{const o=e*22.5,t=-170,a=f.value===e?1.05:1;return{transform:`rotate(-${o}deg) translateY(${t}%) scale(${a})`,transition:"transform 0.5s ease"}},b=async()=>{i.value=0;const e=document.querySelector(".semi-circle-container");e&&(e.style.animation="none",await j(()=>{e.style.transform="translate(0, 0)",setTimeout(()=>{e.style.animation="moveCircle 5s infinite alternate"},0)})),m.value=!1,f.value=null;for(let o=x.value.length-1;o>=0;o--){const t=document.querySelector(`.card:nth-child(${o+1})`);t&&(t.style.transform="rotate(0deg) translateY(-170%)",t.style.transition="transform 0.8s ease")}setTimeout(()=>{E.push("/godhoodId/theFirstStep")},600)},C=e=>{e.preventDefault();const o=e.deltaY;p.value=Math.min(p.value+.1,le),i.value+=o*p.value;const t=document.querySelector(".semi-circle-container");t?(t.style.animation="none",t.style.transition=`transform ${p.value}s linear`,t.style.transform=`rotate(${i.value}deg)`):console.error("Semi-circle container not found"),setTimeout(()=>{console.log(i.value,"rotationAngle.value"),t&&(t.style.animation="",t.style.transition="none",t.style.transform=`rotate(${i.value}deg)`,t.style.transition="transform 60s linear infinite")},1e3)},B=async()=>{try{const e=await G();if(e)if(e.code===200&&e.data){const{mood:o,point_all_today:t,invite_user:a}=e.data;if(o){const _=o||l.getMyCardList;l.setMyCardList(_)}l.setPointAllToday({...t,invite_user:a})}else q.error(e.msg)}catch(e){console.log(e)}finally{}};return N(()=>{window.addEventListener("wheel",C,{passive:!1}),B()}),L(()=>{window.removeEventListener("wheel",C)}),(e,o)=>{var _;const t=k,a=P;return n(),h("div",V,[J(t),s("div",K,[s("div",Q,[s("div",{class:z(["w-full h-full semi-circle-container",{"stop-rotation":r(m)}])},[s("div",X,[(n(!0),h(A,null,R(r(x),(c,I)=>(n(),h("div",{class:"w-[20%] aspect-[1/2] card duration-500 cursor-pointer",key:c,onMouseover:$=>S(I),onMouseleave:w,onClick:$=>e.$router.push(`/godhoodId/intpPersonality/${c}`),style:D(T(I))},[s("img",{src:`/images/godhoodId/id_card/${c}-min.png`,alt:"",class:"w-full h-full object-contain"},null,8,ee)],44,Z))),128))])],2),te,r(l).getIsPayCard&&((_=r(l).getMyCardList)!=null&&_.emotion_code)?(n(),y(a,{key:0,class:"w-[187px] absolute left-1/2 -translate-x-1/2 top-[30%] hover:scale-[1.01] duration-500",style:{height:"40px","border-radius":"70px"},color:"#EBEBEB",round:"",size:"small",onClick:o[0]||(o[0]=c=>e.$router.push("/godhoodId/myResultPreview"))},{default:g(()=>[oe]),_:1})):(n(),h("div",se,[r(l).getTestCardList?(n(),y(a,{key:0,class:"w-[187px] absolute left-1/2 -translate-x-1/2 top-[30%] hover:scale-[1.01] duration-500",style:{height:"40px","border-radius":"70px"},color:"#EBEBEB",round:"",size:"small",onClick:o[1]||(o[1]=c=>r(E).push("/godhoodId/theSecondStep"))},{default:g(()=>[ae]),_:1})):(n(),y(a,{key:1,class:"w-[187px] absolute left-1/2 -translate-x-1/2 top-[30%] hover:scale-[1.01] duration-500",style:{height:"40px","border-radius":"70px"},color:"#EBEBEB",round:"",size:"small",onClick:b},{default:g(()=>[ne]),_:1}))]))])])])}}});const he=O(re,[["__scopeId","data-v-ea1559fc"]]);export{he as default};
