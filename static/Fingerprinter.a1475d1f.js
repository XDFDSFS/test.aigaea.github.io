var E=Object.defineProperty;var T=(n,t,r)=>t in n?E(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var I=(n,t,r)=>(T(n,typeof t!="symbol"?t+"":t,r),r);import{a8 as M}from"./entry.95c14075.js";import{C as p}from"./index.1735d320.js";const F=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function R(n){return typeof n=="string"&&F.test(n)}function L(n){if(!R(n))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(n.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=t&255,r[4]=(t=parseInt(n.slice(9,13),16))>>>8,r[5]=t&255,r[6]=(t=parseInt(n.slice(14,18),16))>>>8,r[7]=t&255,r[8]=(t=parseInt(n.slice(19,23),16))>>>8,r[9]=t&255,r[10]=(t=parseInt(n.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=t&255,r}var o=[];for(var y=0;y<256;++y)o.push((y+256).toString(16).slice(1));function N(n,t=0){return(o[n[t+0]]+o[n[t+1]]+o[n[t+2]]+o[n[t+3]]+"-"+o[n[t+4]]+o[n[t+5]]+"-"+o[n[t+6]]+o[n[t+7]]+"-"+o[n[t+8]]+o[n[t+9]]+"-"+o[n[t+10]]+o[n[t+11]]+o[n[t+12]]+o[n[t+13]]+o[n[t+14]]+o[n[t+15]]).toLowerCase()}function O(n){n=unescape(encodeURIComponent(n));for(var t=[],r=0;r<n.length;++r)t.push(n.charCodeAt(r));return t}var P="6ba7b810-9dad-11d1-80b4-00c04fd430c8",k="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function J(n,t,r){function e(a,s,f,i){var g;if(typeof a=="string"&&(a=O(a)),typeof s=="string"&&(s=L(s)),((g=s)===null||g===void 0?void 0:g.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var c=new Uint8Array(16+a.length);if(c.set(s),c.set(a,s.length),c=r(c),c[6]=c[6]&15|t,c[8]=c[8]&63|128,f){i=i||0;for(var l=0;l<16;++l)f[i+l]=c[l];return f}return N(c)}try{e.name=n}catch{}return e.DNS=P,e.URL=k,e}function $(n,t,r,e){switch(n){case 0:return t&r^~t&e;case 1:return t^r^e;case 2:return t&r^t&e^r&e;case 3:return t^r^e}}function D(n,t){return n<<t|n>>>32-t}function B(n){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof n=="string"){var e=unescape(encodeURIComponent(n));n=[];for(var a=0;a<e.length;++a)n.push(e.charCodeAt(a))}else Array.isArray(n)||(n=Array.prototype.slice.call(n));n.push(128);for(var s=n.length/4+2,f=Math.ceil(s/16),i=new Array(f),g=0;g<f;++g){for(var c=new Uint32Array(16),l=0;l<16;++l)c[l]=n[g*64+l*4]<<24|n[g*64+l*4+1]<<16|n[g*64+l*4+2]<<8|n[g*64+l*4+3];i[g]=c}i[f-1][14]=(n.length-1)*8/Math.pow(2,32),i[f-1][14]=Math.floor(i[f-1][14]),i[f-1][15]=(n.length-1)*8&4294967295;for(var v=0;v<f;++v){for(var h=new Uint32Array(80),u=0;u<16;++u)h[u]=i[v][u];for(var x=16;x<80;++x)h[x]=D(h[x-3]^h[x-8]^h[x-14]^h[x-16],1);for(var w=r[0],U=r[1],d=r[2],A=r[3],m=r[4],S=0;S<80;++S){var b=Math.floor(S/20),H=D(w,5)+$(b,U,d,A)+m+t[b]+h[S]>>>0;m=A,A=d,d=D(U,30)>>>0,U=w,w=H}r[0]=r[0]+w>>>0,r[1]=r[1]+U>>>0,r[2]=r[2]+d>>>0,r[3]=r[3]+A>>>0,r[4]=r[4]+m>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}var G=J("v5",80,B);const K=G;class C{static convertToUUID(t){return K(t,this.NAMESPACE)}static async getStableComponents(t,r,e){try{const s=await t.get();var a=navigator.userAgent+s.visitorId+e;return{userAgent:a}}catch{return{userAgent:a}}}static async hashString(t){if(window.crypto&&window.crypto.subtle)try{const r=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,"0")).join("")}catch(r){console.error("error:",r)}return p.SHA256(t).toString(p.enc.Hex)}static async getFingerprint(t,r){try{const a=await(await M(()=>import("./fp.esm.50f1bc6b.js"),[],import.meta.url)).load(),[s]=await Promise.all([this.getStableComponents(a,t,r)]),f=JSON.stringify({...s}),i=await this.hashString(f);return this.convertToUUID(i)}catch{const a=`fallback-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.convertToUUID(a)}}static async getOrCreateFingerprint(t,r){return await this.getFingerprint(t,r)}static generateUserAgentHash(t){const r=t+this.SALT;return p.SHA256(r).toString(p.enc.Hex).slice(0,8)}static replaceUUIDPrefix(t,r){if(r.length!==8)throw new Error("The new prefix must be 8 characters long");return r+t.slice(8)}static async getFinalFingerprint(t,r="browser"){try{let e=await this.getOrCreateFingerprint(r,t);const a=await this.generateUserAgentHash(t),f=this.replaceUUIDPrefix(e,a).split("-"),i=f.slice(1,4).join(""),g=window.location.origin,c=r==="browser"?i+g:i+this.CHROME,l=p.SHA256(c).toString(p.enc.Hex).slice(0,12);return f[0]+"-"+f[1]+"-"+f[2]+"-"+f[3]+"-"+l}catch(e){console.error(e);const a=`fallback-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.convertToUUID(a)}}}I(C,"NAMESPACE","10000000-1000-4000-8000-100000000000"),I(C,"SALT","S1gnd6ox2CJ8Laxj"),I(C,"CHROME","chrome-extension://cpjicfogbgognnifjgmenmaldnmeeeib");export{C as F};
