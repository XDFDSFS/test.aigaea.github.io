import{bS as G,r as t,i as o,bT as H,w as K}from"./entry.6260d686.js";const J=G("user",()=>{const s=t(""),l=t({}),r=t(""),v=t(!0),a=t(3e4),n=t(null),c=t(null),g=t(),m=t("1.0.1"),i=t(!1),d=t(),u=t(),S=o(()=>s.value),A=o(()=>l.value),T=o(()=>r.value),p=o(()=>v.value),R=o(()=>a.value),_=o(()=>n.value),w=o(()=>c.value),N=o(()=>g.value),D=o(()=>m.value),E=o(()=>i.value),P=o(()=>d.value),k=o(()=>u.value),U=e=>{s.value=e},B=e=>{v.value=e},L=e=>{r.value=e},O=e=>{l.value=e},C=e=>{g.value=e},F=e=>{m.value=e},V=e=>{d.value=e},b=e=>{i.value=e},h=e=>{u.value=e},W=e=>{a.value=e},x=e=>{n.value=e},M=e=>{c.value=e},Y=e=>{I();const f=()=>{n.value=setInterval(()=>{e()},a.value)};f(),K(a,(q,y)=>{I(),f()})},I=()=>{n.value&&(clearInterval(n.value),n.value=null)};return{token:s,userInfo:l,pingInfo:c,uuidv4:r,interval:a,version:m,updateBrowserId:i,pingIntervalId:n,pingNetworkInfo:u,disconnect:v,invitationCode:g,timeDifference:d,getToken:S,getUserInfo:A,getUuidv4:T,getPingInfo:w,getDisconnect:p,getPingIntervalId:_,getPingInterval:R,getInvitationCode:N,getVersion:D,getUpdateBrowserId:E,getTimeDifference:P,getPingNetworkInfo:k,setInvitationCode:C,setVersion:F,setUpdateBrowserId:b,setToken:U,setUserInfo:O,setUuidv4:L,setDisconnect:B,setPingInfo:M,setPingIntervalId:x,clearUserInfo:()=>{s.value="",r.value="",v.value=!0,l.value={},u.value={},I(),a.value=3e4,localStorage.removeItem("gaea_token"),localStorage.removeItem("browser_id"),localStorage.removeItem("REFERRAL_INFO_DATA"),localStorage.removeItem("REFERRAL_REWARDS"),localStorage.removeItem("MISSION_DATA"),localStorage.removeItem("TABLE_DATA_ARR_HISTORY"),localStorage.removeItem("INTEGRAL_DATA"),localStorage.removeItem("DAILY_STATISTIC"),localStorage.removeItem("NETWORK_INFO_LIST"),localStorage.removeItem("ANNOUNCEMENT"),localStorage.removeItem("TABLE_DATA_ARR"),localStorage.removeItem("version"),localStorage.removeItem("updateBrowserId"),c.value=null,i.value=!1},setPingInterval:W,setPingIntervalTime:Y,setPingNetworkInfo:h,clearPingIntervalTime:I,setTimeDifference:V}},{persist:[{paths:["userInfo","token","uuidv4","disconnect","interval","pingIntervalId","invitationCode","pingInfo","version","updateBrowserId","pingNetworkInfo","timeDifference"],storage:H.cookiesWithOptions({maxAge:604800})}]});export{J as u};
