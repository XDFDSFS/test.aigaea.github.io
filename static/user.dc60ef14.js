import{b7 as h,r as n,k as s,b8 as x}from"./entry.33d7f840.js";const A=h("user",()=>{const o=n(""),l=n({}),u=n(""),v=n(!0),a=n(3e4),t=n(null),c=s(()=>o.value),i=s(()=>l.value),I=s(()=>u.value),g=s(()=>v.value),d=s(()=>a.value),f=s(()=>t.value),p=e=>{o.value=e},P=e=>{v.value=e},U=e=>{u.value=e},k=e=>{l.value=e},m=e=>{a.value=e},T=e=>{t.value=e},b=e=>{r(),t.value=setInterval(()=>{e()},a.value)},r=()=>{t.value&&(clearInterval(t.value),t.value=null)};return{token:o,userInfo:l,uuidv4:u,interval:a,pingIntervalId:t,disconnect:v,getToken:c,getUserInfo:i,getUuidv4:I,getDisconnect:g,getPingIntervalId:f,getPingInterval:d,setToken:p,setUserInfo:k,setUuidv4:U,setDisconnect:P,setPingIntervalId:T,clearUserInfo:()=>{o.value="",u.value="",v.value=!0,l.value={},r(),a.value=3e4},setPingInterval:m,setPingIntervalTime:b,clearPingIntervalTime:r}},{persist:[{paths:["token","userInfo","uuidv4","disconnect","interval","pingIntervalId"],storage:x.cookiesWithOptions({maxAge:604800})}]});export{A as u};
