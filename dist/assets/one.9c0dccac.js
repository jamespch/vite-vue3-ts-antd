import{d as Y,T as E,j as M,a6 as R,b as m,f as e,w as u,a7 as T,X as $,r as o,o as p,i as r}from"./vendor.58f6be3b.js";import{_ as I}from"./index.5c3f203d.js";const j=Y({setup(){const t=E(),a=E(!1),i=M({name:"vite+vue3+Ts",region:"qianhou",date1:R("2022-02-28","YYYY-MM-DD"),delivery:!0,rate:4.5,type:["1","2","3","4","5","6","7"],resource:"2",desc:"\u8FD9\u662F\u4E00\u4E2A\u6781\u7B80\u7684 vue3 \u7BA1\u7406\u540E\u53F0\u3002\u9664\u4E86\u6280\u672F\u6808\u63D0\u4F9B\u7684\u76F8\u5173\u4F9D\u8D56\uFF0C\u672C\u6A21\u677F\u8FD8\u96C6\u6210\u4E86\u52A8\u6001\u83DC\u5355\u3001\u8DEF\u7531\u6743\u9650\u3001\u8BF7\u6C42\u4E8C\u6B21\u5C01\u88C5\u3001\u516C\u5171\u5B58\u50A8\u7B49\u529F\u80FD\uFF0C\u8BA9\u5F00\u53D1\u66F4\u52A0\u4FBF\u6377\uFF0C\u771F\u6B63\u505A\u5230\u5F00\u7BB1\u5373\u7528\u3002"}),c={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",trigger:"blur"},{min:2,max:10,message:"\u957F\u5EA6\u57283 - 5\u4F4D\u4E4B\u95F4",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE\u7C7B\u578B",trigger:"change"}],date1:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u7EBF\u65E5\u671F",trigger:"change",type:"object"}],type:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE\u6280\u672F\u6808",trigger:"change"}],resource:[{required:!0,message:"\u8BF7\u9009\u62E9\u9879\u76EE\u6846\u67B6",trigger:"change"}],rate:[{required:!0,message:"\u8BF7\u8FDB\u884C\u9879\u76EE\u8BC4\u5206",trigger:"change"}],desc:[{required:!0,message:"\u8BF7\u8F93\u5165\u5176\u4ED6\u4FE1\u606F",trigger:"blur"}]};return setTimeout(()=>{a.value=!0},2e3),{formRef:t,labelCol:{span:2},wrapperCol:{span:16},formState:i,rules:c,onSubmit:()=>{t.value.validate().then(()=>{console.log("values",i,T(i)),$.success({message:"\u4FDD\u5B58\u6210\u529F",description:"\u8868\u5355\u4FE1\u606F\u5DF2\u5B58\u50A8"})}).catch(d=>{console.log("error",d)})},resetForm:()=>{t.value.resetFields()},showInfo:a}}}),N={class:"appMain"},z={key:0},L=r("\u524D\u540E\u7AEF\u5206\u79BB\u5F0F\u5F00\u53D1"),X=r("SSR\u6E32\u67D3"),G=r("React"),H=r("Vue"),J=r("Angular"),K=r("Vite"),O=r("Vue3"),P=r("Vuex"),Q=r("Vue-router"),W=r("Axios"),Z=r("TypeScript"),x=r("Ant Design Vue"),ee=r("\u4FDD \u5B58"),ue=r("\u91CD \u7F6E"),te={key:1,class:"loading"};function ae(t,a,i,c,g,B){const d=o("a-step"),h=o("a-steps"),f=o("a-card"),D=o("a-divider"),C=o("a-input"),l=o("a-form-item"),F=o("a-select-option"),y=o("a-select"),b=o("a-date-picker"),_=o("a-radio"),S=o("a-radio-group"),k=o("a-switch"),s=o("a-checkbox"),A=o("a-checkbox-group"),w=o("a-rate"),q=o("a-textarea"),v=o("a-button"),U=o("a-form"),V=o("a-spin");return p(),m("div",N,[t.showInfo?(p(),m("div",z,[e(f,{hoverable:""},{default:u(()=>[e(h,{current:1},{default:u(()=>[e(d,{title:"\u53D1\u8D77\u6D41\u7A0B"}),e(d,{title:"\u6D41\u7A0B\u4E2D\u8F6C"}),e(d,{title:"\u5BA1\u6838\u901A\u8FC7"})]),_:1})]),_:1}),e(D),e(f,{hoverable:"",title:"\u8868\u5355\u4FE1\u606F",style:{"text-align":"left"}},{default:u(()=>[e(U,{ref:"formRef",model:t.formState,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol},{default:u(()=>[e(l,{ref:"name",label:"\u9879\u76EE\u540D\u79F0",name:"name"},{default:u(()=>[e(C,{value:t.formState.name,"onUpdate:value":a[0]||(a[0]=n=>t.formState.name=n),placeholder:"\u8BF7\u8F93\u5165"},null,8,["value"])]),_:1},512),e(l,{label:"\u9879\u76EE\u7C7B\u578B",name:"region"},{default:u(()=>[e(y,{value:t.formState.region,"onUpdate:value":a[1]||(a[1]=n=>t.formState.region=n),placeholder:"\u8BF7\u9009\u62E9"},{default:u(()=>[e(F,{value:"qianhou"},{default:u(()=>[L]),_:1}),e(F,{value:"houduan"},{default:u(()=>[X]),_:1})]),_:1},8,["value"])]),_:1}),e(l,{label:"\u4E0A\u7EBF\u65E5\u671F",required:"",name:"date1"},{default:u(()=>[e(b,{value:t.formState.date1,"onUpdate:value":a[2]||(a[2]=n=>t.formState.date1=n),format:"YYYY-MM-DD",placeholder:"\u8BF7\u9009\u62E9",style:{width:"100%"}},null,8,["value"])]),_:1}),e(l,{label:"\u9879\u76EE\u6846\u67B6",name:"resource"},{default:u(()=>[e(S,{value:t.formState.resource,"onUpdate:value":a[3]||(a[3]=n=>t.formState.resource=n)},{default:u(()=>[e(_,{value:"1"},{default:u(()=>[G]),_:1}),e(_,{value:"2"},{default:u(()=>[H]),_:1}),e(_,{value:"3"},{default:u(()=>[J]),_:1})]),_:1},8,["value"])]),_:1}),e(l,{label:"\u662F\u5426\u5F00\u6E90",name:"delivery"},{default:u(()=>[e(k,{"checked-children":"\u662F","un-checked-children":"\u5426",checked:t.formState.delivery,"onUpdate:checked":a[4]||(a[4]=n=>t.formState.delivery=n)},null,8,["checked"])]),_:1}),e(l,{label:"\u9879\u76EE\u6280\u672F\u6808",name:"type"},{default:u(()=>[e(A,{value:t.formState.type,"onUpdate:value":a[5]||(a[5]=n=>t.formState.type=n)},{default:u(()=>[e(s,{value:"1",name:"type"},{default:u(()=>[K]),_:1}),e(s,{value:"2",name:"type"},{default:u(()=>[O]),_:1}),e(s,{value:"3",name:"type"},{default:u(()=>[P]),_:1}),e(s,{value:"4",name:"type"},{default:u(()=>[Q]),_:1}),e(s,{value:"5",name:"type"},{default:u(()=>[W]),_:1}),e(s,{value:"6",name:"type"},{default:u(()=>[Z]),_:1}),e(s,{value:"7",name:"type"},{default:u(()=>[x]),_:1})]),_:1},8,["value"])]),_:1}),e(l,{label:"\u9879\u76EE\u8BC4\u5206",name:"rate"},{default:u(()=>[e(w,{value:t.formState.rate,"onUpdate:value":a[6]||(a[6]=n=>t.formState.rate=n),"allow-half":""},null,8,["value"])]),_:1}),e(l,{label:"\u5176\u4ED6\u4FE1\u606F",name:"desc"},{default:u(()=>[e(q,{value:t.formState.desc,"onUpdate:value":a[7]||(a[7]=n=>t.formState.desc=n),rows:3,showCount:"",maxlength:255,placeholder:"\u8BF7\u8F93\u5165"},null,8,["value"])]),_:1}),e(l,{"wrapper-col":{span:14,offset:4}},{default:u(()=>[e(v,{type:"primary",onClick:t.onSubmit},{default:u(()=>[ee]),_:1},8,["onClick"]),e(v,{style:{"margin-left":"10px"},onClick:t.resetForm},{default:u(()=>[ue]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules","label-col","wrapper-col"])]),_:1})])):(p(),m("div",te,[e(V,{size:"large",tip:"Loading..."})]))])}var re=I(j,[["render",ae],["__scopeId","data-v-50d4f1dc"]]);export{re as default};
