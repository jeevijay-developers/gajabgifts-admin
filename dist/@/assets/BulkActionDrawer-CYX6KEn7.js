import{j as e,u as ee,r as x,S as Y,L as se,f as D}from"./index-eCljlgW-.js";import{a as ce}from"./index.prod-DLjbbcrz.js";import{C as ae,P as te,A as K}from"./ProductServices-DyjR-0YH.js";import{C as J}from"./CouponServices-ClgVJs1S.js";import{C as X}from"./CurrencyServices-Cv5sLHdT.js";import{n as p,a as R}from"./toast-B6PEetj3.js";import{P as de,M as pe,R as ge,T as Q}from"./ParentCategory-DUNG3mn6.js";import{a as me,T as ue}from"./DrawerButton-tXa7dQCi.js";import{u as he,j as xe,l as je}from"./Layout-CLuA73Dq.js";import{u as fe,E as P}from"./index.esm-Z-EGr4Ry.js";import{L as c}from"./LabelArea-CKGaWpTG.js";import{S as k}from"./SwitchToggle-CSUCzwig.js";import{u as be}from"./useDisableForDemo-3Yn1Itnm.js";const Ie=({id:g,name:o,type:v,handleClick:b,isChecked:i})=>e.jsx(e.Fragment,{children:e.jsx("input",{id:g,name:o,type:v,onChange:b,checked:i})}),Oe=({id:g,status:o,category:v,currencyStatusName:b})=>{const i=ee(),{setIsUpdate:d}=x.useContext(Y),j=async t=>{var A,F;try{let a;if(o==="show"?a="hide":a="show",i.pathname==="/categories"||v){const r=await ae.updateStatus(t,{status:a});d(!0),p(r.message)}if(i.pathname==="/products"){const r=await te.updateStatus(t,{status:a});d(!0),p(r.message)}if(i.pathname==="/languages"){const r=await se.updateStatus(t,{status:a});d(!0),p(r.message)}if(i.pathname==="/currencies")if(b==="status"){const r=await X.updateEnabledStatus(t,{status:a});d(!0),p(r.message)}else{const r=await X.updateLiveExchangeRateStatus(t,{live_exchange_rates:a});d(!0),p(r.message)}if(i.pathname==="/attributes"){const r=await K.updateStatus(t,{status:a});d(!0),p(r.message)}if(i.pathname===`/attributes/${i.pathname.split("/")[2]}`){const r=await K.updateChildStatus(t,{status:a});d(!0),p(r.message)}if(i.pathname==="/coupons"){const r=await J.updateStatus(t,{status:a});d(!0),p(r.message)}if(i.pathname==="/our-staff"){const r=await J.updateStaffStatus(t,{status:a});d(!0),p(r.message)}}catch(a){R(a?(F=(A=a==null?void 0:a.response)==null?void 0:A.data)==null?void 0:F.message:a==null?void 0:a.message)}};return e.jsx(ce,{onChange:()=>j(g),checked:o==="show",className:"react-switch md:ml-0",uncheckedIcon:e.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",width:120,fontSize:14,color:"white",paddingRight:22,paddingTop:1}}),width:30,height:15,handleDiameter:13,offColor:"#E53E3E",onColor:"#2F855A",checkedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:73,height:"100%",fontSize:14,color:"white",paddingLeft:20,paddingTop:1}})})},Z=({register:g,name:o,label:v,placeholder:b,required:i,type:d,value:j})=>e.jsx(e.Fragment,{children:e.jsx(D.Textarea,{className:"border text-sm border-gray-200 focus:border-gray-300 block w-full bg-gray-100",...g(`${o}`,{required:i?`${v} is required!`:!1}),type:d,placeholder:b,name:o,value:j,rows:"4",spellCheck:"false"})}),ye=(g,o="en",v)=>{const[b,i]=x.useState(""),[d,j]=x.useState([]),t=ee(),[A,F]=x.useState(""),[a,r]=x.useState(!0),[M,N]=x.useState(!0),[f,V]=x.useState([]),[w,O]=x.useState([]),[q,G]=x.useState(!1),[z,S]=x.useState(""),{isBulkDrawerOpen:L,closeBulkDrawer:C,setIsUpdate:T}=x.useContext(Y),{handleDisableForDemo:H}=be(),{register:_,handleSubmit:W,watch:I,setValue:n,clearErrors:l,formState:{errors:$}}=fe(),U=async s=>{var y,m,E;if(!H())try{const h={ids:g,categories:f==null?void 0:f.map(u=>u._id),category:(y=w[0])==null?void 0:y._id,productType:[q?"food":"others"],show:s.show,status:a?"show":"hide",tag:JSON.stringify(d)},B={ids:g,status:a?"show":"hide"},re={ids:g,enabled:a?"show":"hide",live_exchange_rates:M?"show":"hide"},le={ids:g,parentId:A,description:s.description,parentName:z,status:a?"show":"hide"},oe={ids:g,option:s.option,status:a?"show":"hide"},ne={ids:g,currentId:v,changeId:s.groupName,status:a?"show":"hide"},ie={ids:g,startTime:s.startTime,endTime:s.endTime,status:a?"show":"hide"};if(t.pathname==="/products"){const u=await te.updateManyProducts(h);T(!0),p(u.message),C()}if(t.pathname==="/coupons"){const u=await J.updateManyCoupons(ie);T(!0),p(u.message),C()}if(t.pathname==="/languages"){const u=await se.updateManyLanguage(B);T(!0),p(u.message),C()}if(t.pathname==="/currencies"){const u=await X.updateManyCurrencies(re);T(!0),p(u.message),C()}if(t.pathname==="/categories"||t.pathname===`/categories/${v}`){const u=await ae.updateManyCategory(le);T(!0),p(u.message),C()}if(t.pathname==="/attributes"){const u=await K.updateManyAttribute(oe);T(!0),p(u.message),C()}if(t.pathname===`/attributes/${t.pathname.split("/")[2]}`){const u=await K.updateManyChildAttribute(ne);T(!0),p(u.message),C()}}catch(h){R(((E=(m=h==null?void 0:h.response)==null?void 0:m.data)==null?void 0:E.message)||(h==null?void 0:h.message))}};return x.useEffect(()=>{if(!L){n("parent"),n("children"),n("type"),n("show"),n("name"),i(""),j([]),l("parent"),l("children"),l("type"),l("name"),n("name"),n("iso_code"),n("call_prefix"),n("currency"),n("zone"),l("name"),l("iso_code"),l("call_prefix"),l("currency"),l("zone"),l("status"),n("name"),n("iso_code"),n("country"),n("zone"),n("description"),l("name"),l("iso_code"),l("country"),l("zone"),l("status"),l("show"),l("description"),O([]),V([]);return}},[n,L,l]),x.useEffect(()=>{i(I("children"))},[I,b]),{register:_,watch:I,handleSubmit:W,onSubmit:U,errors:$,tag:d,setTag:j,published:a,setPublished:r,published2:M,setPublished2:N,checked:A,setChecked:F,selectedCategory:f,setSelectedCategory:V,defaultCategory:w,setDefaultCategory:O,selectCategoryName:z,setSelectCategoryName:S,isFoodItem:q,setIsFoodItem:G}},Le=({ids:g,title:o,lang:v,data:b,childId:i,attributes:d,isCheck:j})=>{const{toggleBulkDrawer:t,isBulkDrawerOpen:A,closeBulkDrawer:F}=x.useContext(Y),{showingTranslateValue:a}=he(),{tag:r,setTag:M,published:N,register:f,onSubmit:V,errors:w,checked:O,setChecked:q,resetRefTwo:G,handleSubmit:z,setPublished:S,selectedCategory:L,setSelectedCategory:C,defaultCategory:T,setDefaultCategory:H,selectCategoryName:_,setSelectCategoryName:W}=ye(g,v,i),I={motionName:"node-motion",motionAppear:!1,onAppearStart:s=>({height:0}),onAppearActive:s=>({height:s.scrollHeight}),onLeaveStart:s=>({height:s.offsetHeight}),onLeaveActive:()=>({height:0})},n=s=>{let y=[];for(let m of s)y.push({title:a(m==null?void 0:m.name),key:m._id,children:m.children.length>0&&n(m.children)});return y},l=(s,y)=>{var m;return s._id===y?s:(m=s==null?void 0:s.children)==null?void 0:m.reduce((E,h)=>E??l(h,y),void 0)},$=s=>{var m,E;const y=j==null?void 0:j.find(h=>h===s);if((j==null?void 0:j.length)===((E=(m=b[0])==null?void 0:m.children)==null?void 0:E.length))return R("This can't be select as a parent category!");if(y!==void 0)return R("This can't be select as a parent category!");if(s===i)return R("This can't be select as a parent category!");{if(s===void 0)return;q(s);const h=b[0],B=l(h,s);W(a(B==null?void 0:B.name))}},U=`
  .rc-tree-child-tree {
    display: hidden;
  }
  .node-motion {
    transition: all .3s;
    overflow-y: hidden;
  }
`;return e.jsx(e.Fragment,{children:e.jsxs(me,{open:A,onClose:F,parent:null,level:null,placement:"right",children:[e.jsx("button",{onClick:t,className:"absolute z-50 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center",children:e.jsx(xe,{className:"mx-auto"})}),e.jsxs("div",{className:"flex flex-col w-full h-full justify-between",children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:e.jsx(ue,{title:`Update Selected ${o}`,description:`Apply changes to the selected ${o} from the list`})}),e.jsx(je.Scrollbars,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsxs("form",{onSubmit:z(V),className:"block",children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32",children:[o==="Products"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Categorys"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(de,{lang:v,selectedCategory:L,setSelectedCategory:C,setDefaultCategory:H})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Default Category"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(pe,{displayValue:"name",isObject:!0,singleSelect:!0,ref:G,hidePlaceholder:!0,onKeyPressFn:function(){},onRemove:function(){},onSearch:function(){},onSelect:s=>H(s),selectedValues:T,options:L,placeholder:"Default Category"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Published"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(k,{handleProcess:S,processOption:N}),e.jsx(P,{errorName:w.status})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Product Tags"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(ge,{placeholder:"Product Tag (Write then press enter to add new tag )",tags:r,onChange:s=>M(s)})})]})]}),o==="Coupons"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Start Time"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(D.Input,{...f("startTime",{required:"Coupon Validation Start Time"}),label:"Coupon Validation Start Time",name:"startTime",type:"datetime-local",placeholder:"Start Time"}),e.jsx(P,{errorName:w.startTime})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"End Time"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(D.Input,{...f("endTime",{required:"Coupon Validation End Time"}),label:"Coupon Validation End Time",name:"endTime",type:"datetime-local",placeholder:"End Time"}),e.jsx(P,{errorName:w.endTime})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Published"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(k,{handleProcess:S,processOption:N}),e.jsx(P,{errorName:w.published})]})]})]}),o==="Languages"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Published"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(k,{title:"",processOption:N,handleProcess:S})})]})}),o==="Currencies"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Enabled"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(k,{title:"",processOption:N,handleProcess:S})})]})}),o==="Categories"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Description"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(Z,{register:f,label:"Description",name:"description",type:"text",placeholder:"Category Description"}),e.jsx(P,{errorName:w.description})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Parent Category"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(D.Input,{readOnly:!0,...f("parent",{required:!1}),name:"parent",value:_||"Home",placeholder:"parent category",type:"text"}),e.jsxs("div",{className:"draggable-demo capitalize",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:U}}),e.jsx(Q,{treeData:n(b),selectedKeys:[O],onSelect:s=>$(s[0]),motion:I,animation:"slide-up"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Published"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(k,{title:"",processOption:N,handleProcess:S})})]})]}),o==="Child Categories"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Description"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(Z,{register:f,label:"Description",name:"description",type:"text",placeholder:"Category Description"}),e.jsx(P,{errorName:w.description})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Parent Category"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(D.Input,{readOnly:!0,...f("parent",{required:!1}),name:"parent",value:_||"Home",placeholder:"parent category",type:"text"}),e.jsxs("div",{className:"draggable-demo capitalize",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:U}}),e.jsx(Q,{treeData:n(b),selectedKeys:[O],onSelect:s=>$(s[0]),motion:I,animation:"slide-up"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Published"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(k,{title:"",processOption:N,handleProcess:S})})]})]}),o==="Attributes"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Options"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsxs(D.Select,{name:"option",...f("option",{required:"Option is required!"}),children:[e.jsx("option",{value:"",defaultValue:!0,hidden:!0,children:"Select type"}),e.jsx("option",{value:"Dropdown",children:"Dropdown"}),e.jsx("option",{value:"Radio",children:"Radio"})]}),e.jsx(P,{errorName:w.option})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Published"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(k,{title:"",processOption:N,handleProcess:S})})]})]}),o==="Attribute Value(s)"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Change Attribute Group"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsxs(D.Select,{name:"groupName",...f("groupName",{required:!1}),children:[e.jsx("option",{value:"",defaultValue:!0,hidden:!0,children:"Select Attribute Group"}),d==null?void 0:d.map((s,y)=>e.jsx("option",{value:s._id,children:a(s==null?void 0:s.name)},y+1))]}),e.jsx(P,{errorName:w.groupName})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(c,{label:"Published"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(k,{title:"",processOption:N,handleProcess:S})})]})]})]}),e.jsxs("div",{className:"fixed bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:[e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsx(D.Button,{onClick:t,className:" text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700",layout:"outline",children:"Cancel"})}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(D.Button,{type:"submit",className:"h-12 w-full",children:[" ","Bulk Update ",o]})})]})]})})]})]})})};export{Le as B,Ie as C,Oe as S,Z as T};
