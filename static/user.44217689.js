import{P as t,G as n}from"./request.e81f1336.js";const r=a=>t("/api/auth/login",a),e=a=>t("/api/auth/register",a),i=a=>t("/api/auth/forget-password",a),u=()=>t("/api/auth/session"),o=a=>t("/api/auth/change-password",a),h=a=>t("/api/auth/reset-password",a),d=a=>t("/api/validate/email",a),c=a=>t("/api/validate/username",a),p=a=>t("/api/auth/change-email",a),g=()=>n("/api/notify/announcement"),l=()=>n("/api/auth/google/auth"),m=a=>t("/api/bind/referral",a),b=()=>n("/api/auth/unbind/x"),f=()=>n("/api/auth/unbind/discord"),w=a=>t("/api/auth/unbind/address",a);export{r as a,c as b,p as c,e as d,h as e,i as f,l as g,m as h,f as i,b as j,w as k,o as l,u as m,g as n,d as v};
