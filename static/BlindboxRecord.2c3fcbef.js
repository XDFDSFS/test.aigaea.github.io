import{_ as N,E as P,a as S}from"./el-scrollbar.f4084ece.js";import{E as A}from"./el-select.15cced94.js";import{E as O}from"./el-dialog.396a3ad9.js";import{_ as R}from"./client-only.2f64c806.js";import{d as T,r as _,X as f,o as c,B as g,q as l,m as i,b as r,A as L,e as a,l as b,t as x,c as U}from"./entry.b8636d5f.js";import"./el-checkbox.44f4ace0.js";import"./el-popper.5ac5f017.js";import"./el-form.6860e615.js";import{v as $}from"./el-loading.2ba434bb.js";import{l as j}from"./godhead.91334948.js";import"./event.ed2678b4.js";import"./-vite-browser-externalcommonjs-proxy.0e49e858.js";import"./Refresh.de990eb5.js";import"./el-button.5908491f.js";import"./metamask.27a63ae2.js";import"./request.124f1f34.js";import"./user.8cfe7a63.js";import"./godhood.7b4e004c.js";import"./focus-trap.31a99dd4.js";const q={class:"max-h-[90vh] overflow-hidden flex flex-col"},F={class:"w-full mt-4"},G={key:0,class:"w-full flex items-center justify-end mt-4 px-10"},ce=T({__name:"BlindboxRecord",props:{dialogVisible:{type:Boolean,default:!1}},emits:["update:closeDialog"],setup(H,{emit:h}){const v=_([]),s=_(!1),o=f({page:1,page_size:10}),n=f({content:[],totalElements:0}),u=()=>{o.page=1,o.page_size=10,n.content=[],n.totalElements=0,h("update:closeDialog")},E=e=>{o.page=e,m()},w=e=>{o.page_size=e,m()},y=()=>{m()},m=async()=>{try{if(v.value){s.value=!0;const e=await j(o.page,o.page_size);s.value=!1,e&&e&&e.code===200&&(n.content=e.data,n.totalElements=e.total)}}catch{s.value=!1}};return(e,p)=>{const z=N,d=P,D=S,C=A,k=O,B=R,V=$;return c(),g(B,null,{default:l(()=>[i(k,{class:"border-box",draggable:"","model-value":e.$props.dialogVisible,"show-close":!1,width:"750px",style:{background:"black","border-radius":"10px","padding-bottom":"10px"},"align-center":"",onClose:u,onOpen:y},{default:l(()=>[r("span",{class:"iconfont icon-del text-sm absolute top-5 right-5 text-[#EDEDED] cursor-pointer",onClick:u}),r("div",q,[r("div",F,[L((c(),g(D,{data:a(n).content,style:{width:"100%"},"max-height":"400px"},{empty:l(()=>[a(s)?b("",!0):(c(),g(z,{key:0,title:"No records available at the moment"}))]),default:l(()=>[i(d,{prop:"updated_time",label:"DATE","min-width":"130px",align:"center"}),i(d,{prop:"type",label:"TYPE","min-width":"130px",align:"center"},{default:l(t=>[r("span",null,x(t.row.type===1?"GodHood ID":t.row.type===2?"Check-in":t.row.type===3?"Referral":"Event"),1)]),_:1}),i(d,{prop:"usd",label:"REWARD","min-width":"130px",align:"center"},{default:l(t=>[r("span",null,x(t.row.usd.toFixed(0)>0?t.row.usd+"USD":t.row.diamond+"Soul"),1)]),_:1})]),_:1},8,["data"])),[[V,a(s)]])]),a(n).content.length!==0?(c(),U("div",G,[i(C,{"current-page":a(o).page,"onUpdate:currentPage":p[0]||(p[0]=t=>a(o).page=t),background:"",size:"small","page-size":a(o).page_size,"onUpdate:pageSize":p[1]||(p[1]=t=>a(o).page_size=t),"page-sizes":[10,20,50,100],layout:"total, prev, pager, next,sizes",total:a(n).totalElements,onCurrentChange:E,onSizeChange:w},null,8,["current-page","page-size","total"])])):b("",!0)])]),_:1},8,["model-value"])]),_:1})}}});export{ce as default};
