import{bS as K,r as t,q as o,bT as M,w as q}from"./entry.a1fec27a.js";const J=K("user",()=>{const l=t(""),s=t({}),r=t(""),v=t(!0),a=t(600),n=t(null),c=t(null),g=t(),m=t("1.0.1"),I=t(!1),d=t(),i=t(),A=o(()=>l.value),S=o(()=>s.value),T=o(()=>r.value),R=o(()=>v.value),_=o(()=>a.value),N=o(()=>n.value),p=o(()=>c.value),D=o(()=>g.value),w=o(()=>m.value),E=o(()=>I.value),P=o(()=>d.value),U=o(()=>i.value),O=e=>{l.value=e},k=e=>{v.value=e},L=e=>{r.value=e},B=e=>{s.value=e},C=e=>{g.value=e},F=e=>{m.value=e},W=e=>{d.value=e},V=e=>{I.value=e},b=e=>{i.value=e},h=e=>{a.value=e},Y=e=>{n.value=e},x=e=>{c.value=e},G=e=>{u();const f=()=>{n.value=setInterval(()=>{e()},a.value)};f(),q(a,(j,y)=>{u(),f()})},u=()=>{n.value&&(clearInterval(n.value),n.value=null)};return{token:l,userInfo:s,pingInfo:c,uuidv4:r,interval:a,version:m,updateBrowserId:I,pingIntervalId:n,pingNetworkInfo:i,disconnect:v,invitationCode:g,timeDifference:d,getToken:A,getUserInfo:S,getUuidv4:T,getPingInfo:p,getDisconnect:R,getPingIntervalId:N,getPingInterval:_,getInvitationCode:D,getVersion:w,getUpdateBrowserId:E,getTimeDifference:P,getPingNetworkInfo:U,setInvitationCode:C,setVersion:F,setUpdateBrowserId:V,setToken:O,setUserInfo:B,setUuidv4:L,setDisconnect:k,setPingInfo:x,setPingIntervalId:Y,clearUserInfo:()=>{l.value="",r.value="",v.value=!0,s.value={},i.value={},u(),a.value=3e4,localStorage.removeItem("gaea_token"),localStorage.removeItem("browser_id"),localStorage.removeItem("REFERRAL_INFO_DATA"),localStorage.removeItem("REFERRAL_REWARDS"),localStorage.removeItem("MISSION_DATA"),localStorage.removeItem("TABLE_DATA_ARR_HISTORY"),localStorage.removeItem("INTEGRAL_DATA"),localStorage.removeItem("DAILY_STATISTIC"),localStorage.removeItem("NETWORK_INFO_LIST"),localStorage.removeItem("ANNOUNCEMENT"),localStorage.removeItem("TABLE_DATA_ARR"),localStorage.removeItem("REWARD_ERA_INFO"),localStorage.removeItem("PLUGIN_DATA_INFO"),localStorage.removeItem("NETWORK_COUNTRY"),localStorage.removeItem("version"),localStorage.removeItem("updateBrowserId"),c.value=null,I.value=!1},setPingInterval:h,setPingIntervalTime:G,setPingNetworkInfo:b,clearPingIntervalTime:u,setTimeDifference:W}},{persist:[{paths:["userInfo","token","uuidv4","disconnect","interval","pingIntervalId","invitationCode","pingInfo","version","updateBrowserId","pingNetworkInfo","timeDifference"],storage:M.cookiesWithOptions({maxAge:604800})}]});export{J as u};
