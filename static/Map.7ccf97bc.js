import{_ as y,E as _}from"./default_avatar.e0d861f2.js";import{d as S,r as f,b9 as C,ab as E,o as x,n as k,b3 as z,O as T,a as B,c as I,b as a,f as L,w as D,t as M,u as N,H as p}from"./entry.33d7f840.js";import{n as O}from"./dashboard.a50ba364.js";import"./debounce.c85397d6.js";import"./index.68df5e39.js";import"./scroll.689f9264.js";import"./request.330907ef.js";import"./user.dc60ef14.js";const j={class:"w-full h-full min-h-[250px] bg-[#0F0F0F] rounded-lg shadow-3d relative"},F=["id"],$={class:"w-fit absolute left-5 bottom-5 flex items-center space-x-1"},H={class:"w-5 h-5 bg-black rounded-full overflow-hidden"},U=a("div",{class:"image-slot"},[a("img",{src:y,class:"w-full h-full object-cover"})],-1),V={class:"text-xs text-white"},X=S({__name:"Map",props:{id:{default:"echartMap"},data:{default:[]}},setup(m){const s=m,{$worldData:h}=p(),v=h,{$eChart:i}=p(),c=f(null),d=f();i.registerMap("world",v);const e=C();E(()=>s.data,()=>{u()},{deep:!0});const u=async()=>{e.value!=null&&e.value.dispose();const t=document.getElementById(s.id);if(!t||t.clientWidth===0||t.clientHeight===0){console.error("Chart container has no width or height");return}e.value=i.init(t),window.addEventListener("resize",()=>{e.value&&(clearTimeout(c.value),c.value=setTimeout(()=>{e.value.resize()},500))});const n=[],r=[],l=[];s.data&&s.data.forEach(o=>{r.find(g=>o.country===g.name)||r.push({name:o.country,itemStyle:{areaColor:"#866c50",borderColor:"#d9af80"}}),n.push({coords:[[o.longitude,o.latitude],[103.51,1.16]]}),l.push({value:[o.longitude,o.latitude]})});let b={geo:{type:"map",map:"world",zoom:1.2,roam:!0,scaleLimit:{min:1.2,max:3},itemStyle:{areaColor:"rgba(51, 51, 51,1)",borderColor:"rgba(51, 51, 51,1)",borderType:"dotted"},emphasis:{itemStyle:{areaColor:"#866c50"},label:{show:!1,color:"#fff"}},regions:r},series:[{type:"lines",zlevel:2,effect:{color:"#d9af80",show:!0,period:2,trailLength:.4,symbol:"pin",symbolSize:8},lineStyle:{width:1,opacity:1,curveness:.5,color:"rgba(255, 255, 255, 0.4)"},data:n},{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",symbolSize:8,rippleEffect:{number:4,period:4,scale:3,brushType:"stroke"},itemStyle:{color:"#d9af80"},data:[{value:s.data.length>0?[103.51,1.16]:[]}]},{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",symbolSize:8,rippleEffect:{number:4,period:4,scale:3,brushType:"stroke"},itemStyle:{color:"#d9af80"},data:l}]};setTimeout(()=>{e.value.setOption(b)},0)},w=async()=>{const t=await O();t.code===200&&(d.value=t.data)};return x(async()=>{await k(),u(),w()}),z(()=>{window.removeEventListener("resize",e.value.resize())}),T(()=>{e.value&&e.value.dispose()}),(t,n)=>{var l;const r=_;return B(),I("div",j,[a("div",{id:t.$props.id,class:"w-full h-full"},null,8,F),a("div",$,[a("div",H,[L(r,{src:"/images/public/head/default_avatar.png",fit:"cover"},{error:D(()=>[U]),_:1})]),a("span",V,M(((l=N(d))==null?void 0:l.devices_all)||0),1)])])}}});export{X as default};
