import{d as L,r as i,o as I,n as A,a as u,c as O,b as c,u as e,e as v,w as D,f as a,E as V,g as s,_ as r}from"./entry.33d7f840.js";import{_ as R}from"./Btn.vue.25a214b7.js";import{u as B}from"./user.dc60ef14.js";import{e as F,d as M}from"./dashboard.a50ba364.js";import{n as x}from"./ping.1604863f.js";import{t as H}from"./throttle.edf33636.js";import"./request.330907ef.js";import"./utils.3aae5e71.js";import"./referral.9e1f9244.js";import"./use-form-item.5d7a91f4.js";const $=s(()=>r(()=>import("./NoNetworkPing.bc3a0a85.js"),["./NoNetworkPing.bc3a0a85.js","./entry.33d7f840.js","./entry.f1adcd45.css"],import.meta.url).then(t=>t.default||t)),j=s(()=>r(()=>import("./NetworkPing.d06ed52a.js"),["./NetworkPing.d06ed52a.js","./entry.33d7f840.js","./entry.f1adcd45.css"],import.meta.url).then(t=>t.default||t)),K=s(()=>r(()=>import("./EarnInfoCard.758ba858.js"),["./EarnInfoCard.758ba858.js","./bi.970c0439.js","./entry.33d7f840.js","./entry.f1adcd45.css"],import.meta.url).then(t=>t.default||t)),S=s(()=>r(()=>import("./Map.7ccf97bc.js"),["./Map.7ccf97bc.js","./default_avatar.e0d861f2.js","./entry.33d7f840.js","./entry.f1adcd45.css","./debounce.c85397d6.js","./index.68df5e39.js","./scroll.689f9264.js","./default_avatar.bcc58336.css","./dashboard.a50ba364.js","./request.330907ef.js","./user.dc60ef14.js"],import.meta.url).then(t=>t.default||t)),U=s(()=>r(()=>import("./EarningsStatistics.d360de34.js"),["./EarningsStatistics.d360de34.js","./el-input.48de7221.js","./entry.33d7f840.js","./entry.f1adcd45.css","./index.68df5e39.js","./use-form-item.5d7a91f4.js","./el-input.c43a23be.css","./throttle.edf33636.js","./throttle.2e70eb9e.css","./isEqual.08fef7da.js","./statistical_table.9c1ed7fd.js","./focus-trap.baae0871.js","./statistical_table.36582aa6.css","./debounce.c85397d6.js","./dashboard.a50ba364.js","./request.330907ef.js","./user.dc60ef14.js","./EarningsStatistics.04dc15e9.css"],import.meta.url).then(t=>t.default||t)),Y=s(()=>r(()=>import("./YourNetworks.26b9f4a4.js"),["./YourNetworks.26b9f4a4.js","./statistical_table.9c1ed7fd.js","./entry.33d7f840.js","./entry.f1adcd45.css","./el-input.48de7221.js","./index.68df5e39.js","./use-form-item.5d7a91f4.js","./el-input.c43a23be.css","./focus-trap.baae0871.js","./statistical_table.36582aa6.css","./_initCloneObject.c33b1856.js","./el-checkbox.d00e19e5.js","./isEqual.08fef7da.js","./el-checkbox.3ca32550.css","./debounce.c85397d6.js","./throttle.edf33636.js","./throttle.2e70eb9e.css","./scroll.689f9264.js","./validator.b9f48bc6.js","./dashboard.a50ba364.js","./request.330907ef.js","./user.dc60ef14.js","./YourNetworks.013af945.css"],import.meta.url).then(t=>t.default||t)),q={class:"w-full h-full flex flex-col space-y-5 overflow-auto"},G={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-3"},J={class:"col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2"},Q={class:"w-full h-full min-h-[250px] bg-[#0F0F0F] rounded-lg flex items-center justify-center px-6 py-4 space-x-10 shadow-3d"},W={class:"flex flex-col space-y-3"},it=L({__name:"dashboard",setup(t){const _=i(),l=i([]),n=B(),d=i(!1),p=i(0),w=async()=>{try{const o=await F();o.code===200&&(_.value=o.data)}catch(o){console.log(o)}},m=async()=>{try{const o=await M(0,10,!0);o.code===200&&(l.value=o.data)}catch(o){console.log(o)}},E=async()=>{d.value=!0,await x(),d.value=!1,p.value+=1,await m(),n.setPingIntervalTime(x),n.setDisconnect(!1)},k=()=>{n.setDisconnect(!0),V.success("Disconnect the connection"),n.clearPingIntervalTime()};return I(async()=>{await A(),await m(),await w()}),(o,f)=>{var h,y;const P=R,C=$,N=j,g=K,T=S,b=U,z=Y;return u(),O("div",q,[c("div",G,[c("div",J,[c("div",Q,[e(l).length===0||e(n).getDisconnect===!0?(u(),v(C,{key:0},{default:D(()=>[a(P,{title:"CONNECT",bg:"#D9AF80",hoverTitle:"CONNECT",onClickHandle:f[0]||(f[0]=X=>("throttle"in o?o.throttle:e(H))(()=>{E()})),loading:e(d)},null,8,["loading"])]),_:1})):(u(),v(N,{key:1,data:e(l)},{default:D(()=>[c("span",{class:"px-2 rounded bg-[#303035] text-[#DCDCDC] cursor-pointer",onClick:k},"Disconnect")]),_:1},8,["data"]))])]),c("div",W,[a(g,{num:(h=e(_))==null?void 0:h.today_total},null,8,["num"]),a(g,{icon:"total",title:"Total's Points",num:(y=e(_))==null?void 0:y.total_total},null,8,["num"])]),a(T,{class:"col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2",data:e(n).getDisconnect===!0?[]:e(l)},null,8,["data"])]),a(b),a(z,{refresh:e(p)},null,8,["refresh"])])}}});export{it as default};
