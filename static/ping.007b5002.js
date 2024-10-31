var F=Object.defineProperty;var R=(t,r,e)=>r in t?F(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var S=(t,r,e)=>(R(t,typeof r!="symbol"?r+"":r,e),e);import{a6 as T,f as M}from"./entry.ac906a3b.js";import{C as y}from"./index.1735d320.js";import{n as H}from"./referral.1093e5c1.js";const L=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function $(t){return typeof t=="string"&&L.test(t)}function P(t){if(!$(t))throw TypeError("Invalid UUID");var r,e=new Uint8Array(16);return e[0]=(r=parseInt(t.slice(0,8),16))>>>24,e[1]=r>>>16&255,e[2]=r>>>8&255,e[3]=r&255,e[4]=(r=parseInt(t.slice(9,13),16))>>>8,e[5]=r&255,e[6]=(r=parseInt(t.slice(14,18),16))>>>8,e[7]=r&255,e[8]=(r=parseInt(t.slice(19,23),16))>>>8,e[9]=r&255,e[10]=(r=parseInt(t.slice(24,36),16))/1099511627776&255,e[11]=r/4294967296&255,e[12]=r>>>24&255,e[13]=r>>>16&255,e[14]=r>>>8&255,e[15]=r&255,e}var i=[];for(var I=0;I<256;++I)i.push((I+256).toString(16).slice(1));function N(t,r=0){return(i[t[r+0]]+i[t[r+1]]+i[t[r+2]]+i[t[r+3]]+"-"+i[t[r+4]]+i[t[r+5]]+"-"+i[t[r+6]]+i[t[r+7]]+"-"+i[t[r+8]]+i[t[r+9]]+"-"+i[t[r+10]]+i[t[r+11]]+i[t[r+12]]+i[t[r+13]]+i[t[r+14]]+i[t[r+15]]).toLowerCase()}function k(t){t=unescape(encodeURIComponent(t));for(var r=[],e=0;e<t.length;++e)r.push(t.charCodeAt(e));return r}var O="6ba7b810-9dad-11d1-80b4-00c04fd430c8",G="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function J(t,r,e){function n(o,g,c,f){var l;if(typeof o=="string"&&(o=k(o)),typeof g=="string"&&(g=P(g)),((l=g)===null||l===void 0?void 0:l.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+o.length);if(s.set(g),s.set(o,g.length),s=e(s),s[6]=s[6]&15|r,s[8]=s[8]&63|128,c){f=f||0;for(var a=0;a<16;++a)c[f+a]=s[a];return c}return N(s)}try{n.name=t}catch{}return n.DNS=O,n.URL=G,n}function B(t,r,e,n){switch(t){case 0:return r&e^~r&n;case 1:return r^e^n;case 2:return r&e^r&n^e&n;case 3:return r^e^n}}function b(t,r){return t<<r|t>>>32-r}function K(t){var r=[1518500249,1859775393,2400959708,3395469782],e=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){var n=unescape(encodeURIComponent(t));t=[];for(var o=0;o<n.length;++o)t.push(n.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var g=t.length/4+2,c=Math.ceil(g/16),f=new Array(c),l=0;l<c;++l){for(var s=new Uint32Array(16),a=0;a<16;++a)s[a]=t[l*64+a*4]<<24|t[l*64+a*4+1]<<16|t[l*64+a*4+2]<<8|t[l*64+a*4+3];f[l]=s}f[c-1][14]=(t.length-1)*8/Math.pow(2,32),f[c-1][14]=Math.floor(f[c-1][14]),f[c-1][15]=(t.length-1)*8&4294967295;for(var U=0;U<c;++U){for(var v=new Uint32Array(80),p=0;p<16;++p)v[p]=f[U][p];for(var u=16;u<80;++u)v[u]=b(v[u-3]^v[u-8]^v[u-14]^v[u-16],1);for(var h=e[0],d=e[1],x=e[2],m=e[3],A=e[4],w=0;w<80;++w){var C=Math.floor(w/20),E=b(h,5)+B(C,d,x,m)+A+r[C]+v[w]>>>0;A=m,m=x,x=b(d,30)>>>0,d=h,h=E}e[0]=e[0]+h>>>0,e[1]=e[1]+d>>>0,e[2]=e[2]+x>>>0,e[3]=e[3]+m>>>0,e[4]=e[4]+A>>>0}return[e[0]>>24&255,e[0]>>16&255,e[0]>>8&255,e[0]&255,e[1]>>24&255,e[1]>>16&255,e[1]>>8&255,e[1]&255,e[2]>>24&255,e[2]>>16&255,e[2]>>8&255,e[2]&255,e[3]>>24&255,e[3]>>16&255,e[3]>>8&255,e[3]&255,e[4]>>24&255,e[4]>>16&255,e[4]>>8&255,e[4]&255]}var Z=J("v5",80,K);const V=Z;class D{static convertToUUID(r){return V(r,this.NAMESPACE)}static async getStableComponents(r){var e,n,o,g,c,f,l,s;try{const a=await r.get();return{userAgent:((e=a.components.userAgent)==null?void 0:e.value)||navigator.userAgent,screenResolution:((n=a.components.screenResolution)==null?void 0:n.value)||`${screen.width}x${screen.height}`,availableScreenResolution:((o=a.components.availableScreenResolution)==null?void 0:o.value)||`${screen.availWidth}x${screen.availHeight}`,hardwareConcurrency:((g=a.components.hardwareConcurrency)==null?void 0:g.value)||navigator.hardwareConcurrency,deviceMemory:((c=a.components.deviceMemory)==null?void 0:c.value)||navigator.deviceMemory,colorDepth:((f=a.components.colorDepth)==null?void 0:f.value)||screen.colorDepth,timezone:((l=a.components.timezone)==null?void 0:l.value)||Intl.DateTimeFormat().resolvedOptions().timeZone,platform:((s=a.components.platform)==null?void 0:s.value)||navigator.platform}}catch(a){return console.error("Error occurred while obtaining stable components:",a),{userAgent:navigator.userAgent,screenResolution:`${screen.width}x${screen.height}`,availableScreenResolution:`${screen.availWidth}x${screen.availHeight}`,hardwareConcurrency:navigator.hardwareConcurrency,deviceMemory:navigator.deviceMemory,colorDepth:screen.colorDepth,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,platform:navigator.platform}}}static getCanvasFingerprint(){try{const r=document.createElement("canvas"),e=r.getContext("2d");return e?(r.width=200,r.height=50,e.textBaseline="top",e.font="14px 'Arial'",e.fillStyle="#f60",e.fillRect(10,10,100,30),e.fillStyle="#069",e.fillText("fingerprint",15,15),r.toDataURL()):""}catch(r){return console.error("error:",r),""}}static getWebGLFingerprint(){try{const e=document.createElement("canvas").getContext("webgl");if(!e)return"";const n=e.getExtension("WEBGL_debug_renderer_info");return n?e.getParameter(n.UNMASKED_RENDERER_WEBGL):""}catch(r){return console.error("error:",r),""}}static async hashString(r){if(window.crypto&&window.crypto.subtle)try{const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(r));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}catch(e){console.error("error:",e)}return y.SHA256(r).toString(y.enc.Hex)}static async getFingerprint(){try{const e=await(await T(()=>import("./fp.esm.2bb0de18.js"),[],import.meta.url)).load(),[n,o,g]=await Promise.all([this.getStableComponents(e),this.getCanvasFingerprint(),this.getWebGLFingerprint()]),c=JSON.stringify({...n,canvas:o,webgl:g,timestamp:Date.now()}),f=await this.hashString(c);return this.convertToUUID(f)}catch(r){console.error("error:",r);const e=`fallback-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.convertToUUID(e)}}static async getOrCreateFingerprint(){const r=localStorage.getItem("fingerprintId");if(r)return r;{const e=await this.getFingerprint();return localStorage.setItem("fingerprintId",e),e}}static generateUserAgentHash(r,e){const n=e+this.SALT+r;return y.SHA256(n).toString(y.enc.Hex).slice(0,8)}static replaceUUIDPrefix(r,e){if(e.length!==8)throw new Error("The new prefix must be 8 characters long");return e+r.slice(8)}static async getFinalFingerprint(r){try{let e=await this.getOrCreateFingerprint();const n=navigator.userAgent,o=this.generateUserAgentHash(n,r);return this.replaceUUIDPrefix(e,o)}catch(e){console.error(e);const n=`fallback-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.convertToUUID(n)}}}S(D,"NAMESPACE","10000000-1000-4000-8000-100000000000"),S(D,"SALT","S1gnd6ox2CJ8Laxj");const Y=async()=>{const t=M();if(!t.getUserInfo)return!1;if(!t.getUuidv4){const r=await D.getFinalFingerprint(t.getUserInfo.uid);t.setUuidv4(r)}try{const r=await H({uid:t.getUserInfo.uid,browser_id:t.getUuidv4,timestamp:Math.floor(Date.now()/1e3),version:"1.0.0"});if(r.code===200){const{interval:e}=r.data;return t.setPingInterval(e*1e3),t.setScore(r.data.score),!0}else return console.error("ping error:",r.msg),!1}catch(r){return console.error("An error occurred during the network ping process:",r),t.clearPingIntervalTime(),!1}};export{Y as n};
