import{_ as I,E as z,a as A}from"./el-scrollbar.36fc6b85.js";import{E as T}from"./el-select.62b7c7e4.js";import{E as L}from"./ethers.349c5e6a.js";import{_ as V}from"./client-only.cce2e736.js";import{d as J,r as f,I as b,o as m,A as g,m as n,l as s,b as r,z as P,e as l,k as E,t as x,c as R}from"./entry.9365d9fc.js";import"./el-checkbox.98de4255.js";import"./el-popper.945ecfdd.js";import"./el-form.cbb0a663.js";import{v as X}from"./el-loading.38cc8c1a.js";import{j as U}from"./godhead.a8b625d5.js";import"./event.585b4dd7.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./Refresh.af012c03.js";import"./plugin-vueexport-helper.c27b6911.js";import"./el-button.546c7c51.js";import"./metamask.0039094a.js";import"./request.df259aed.js";import"./user.c71e7d42.js";import"./godhood.ee72e8bf.js";import"./focus-trap.c7dbd8ac.js";import"./verification.856d912b.js";const j={class:"max-h-[90vh] overflow-hidden flex flex-col"},$={class:"w-full mt-4"},F={key:0,class:"w-full flex items-center justify-end mt-4 px-10"},gt=J({__name:"BlindboxRecord",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(G,{emit:h}){const v=f([]),i=f(!1),o=b({page:1,limit:10}),a=b(JSON.parse(localStorage.getItem("TABLE_BIND_BOX")||JSON.stringify({content:[],totalElements:0}))),u=()=>{o.page=1,o.limit=10,a.content=[],a.totalElements=0,h("update:closeDialog")},B=t=>{o.page=t,c()},w=t=>{o.limit=t,c()},y=()=>{a.content=JSON.parse(localStorage.getItem("TABLE_BIND_BOX")||"[]").content,a.totalElements=JSON.parse(localStorage.getItem("TABLE_BIND_BOX")||"[]").totalElements,c()},c=async()=>{try{if(v.value){i.value=!0;const t=await U(o.page,o.limit);i.value=!1,t&&t&&t.code===200&&(a.content=t.data,a.totalElements=t.total,localStorage.setItem("TABLE_BIND_BOX",JSON.stringify({content:t.data,totalElements:t.total})))}}catch{i.value=!1}};return(t,p)=>{const D=I,d=z,N=A,S=T,O=L,C=V,k=X;return m(),g(C,null,{default:n(()=>[s(O,{class:"border-box",draggable:"","model-value":t.$props.dialogVisible,"show-close":!1,width:"750px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:u,onOpen:y},{default:n(()=>{var _;return[r("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:u}),r("div",j,[r("div",$,[P((m(),g(N,{data:l(a).content,style:{width:"100%"},"max-height":"400px"},{empty:n(()=>[l(i)?E("",!0):(m(),g(D,{key:0,title:"No records available at the moment"}))]),default:n(()=>[s(d,{prop:"updated",label:"DATE","min-width":"130px",align:"center"}),s(d,{prop:"type",label:"TYPE","min-width":"130px",align:"center"},{default:n(e=>[r("span",null,x(e.row.type===1?"GodHood ID":e.row.type===2?"Check-in":e.row.type===3?"Referral":"Event"),1)]),_:1}),s(d,{prop:"usd",label:"REWARD","min-width":"130px",align:"center"},{default:n(e=>[r("span",null,x(e.row.usd.toFixed(0)>0?e.row.usd+" USD":e.row.soul+" Soul"),1)]),_:1})]),_:1},8,["data"])),[[k,l(i)]])]),((_=l(a).content)==null?void 0:_.length)!==0?(m(),R("div",F,[s(S,{"current-page":l(o).page,"onUpdate:currentPage":p[0]||(p[0]=e=>l(o).page=e),background:"",size:"small","page-size":l(o).limit,"onUpdate:pageSize":p[1]||(p[1]=e=>l(o).limit=e),"page-sizes":[10,20,50,100],layout:"total, prev, pager, next,sizes",total:l(a).totalElements,onCurrentChange:B,onSizeChange:w},null,8,["current-page","page-size","total"])])):E("",!0)])]}),_:1},8,["model-value"])]),_:1})}}});export{gt as default};
