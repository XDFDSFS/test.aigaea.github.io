import{P as t,G as e}from"./request.e3b9313f.js";const n=a=>t("/api/auth/login",a),r=a=>t("/api/auth/register",a),o=a=>t("/api/auth/forget-password",a),i=()=>t("/api/auth/session"),u=a=>t("/api/auth/change-password",a),h=a=>t("/api/auth/reset-password",a),c=a=>t("/api/validate/email",a),p=a=>t("/api/validate/username",a),g=a=>t("/api/auth/change-email",a),d=()=>e("/api/notify/announcement"),l=()=>e("/api/auth/google/auth"),m=a=>t("/api/bind/referral",a);export{n as a,p as b,g as c,r as d,h as e,o as f,l as g,m as h,u as i,i as j,d as n,c as v};
