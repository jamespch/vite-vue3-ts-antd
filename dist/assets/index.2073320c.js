import{_ as D,r as B,S}from"./index.5c3f203d.js";import{d as U,T as f,j as k,U as N,V as E,W as O,b as x,e as n,f as t,w as a,g as I,X as F,Y as R,Z as K,i as y,r as l,o as V,t as $}from"./vendor.58f6be3b.js";const L=U({setup(){const o=f("login"),p=f(!1),g=f(!1),h=I().appContext.config.globalProperties,r=f(B()),i=k({user:"Admin",password:"123456",verification:""}),u=k({user:"",password:"",secondary:""});return{notReset:!0,activeKey:o,loginState:i,registerState:u,isConfirm:p,isRegister:g,randomNumber:r,handleFinishFailed:d=>{console.log(d)},handleFinishFaileds:d=>{console.log(d)},primaryClick:()=>{p.value=!0,i.user=="Admin"?i.verification==r.value?(F.success({message:"\u6210\u529F",description:"\u767B\u5F55\u6210\u529F!",placement:"topRight",duration:3}),S.set("access-token","e10adc3949ba59abbe56e057f20f883e"),S.set("user-name","Admin"),setTimeout(()=>h.$router.replace({path:"/home"}))):(F.error({message:"\u5931\u8D25",description:"\u9A8C\u8BC1\u7801\u9519\u8BEF,\u8BF7\u68C0\u67E5!",placement:"topRight",duration:3}),p.value=!1):(F.error({message:"\u5931\u8D25",description:"\u8D26\u53F7\u9519\u8BEF,\u8BF7\u68C0\u67E5!",placement:"topRight",duration:3}),p.value=!1)},registerClick:()=>{g.value=!0},randomNumbers:()=>{r.value=B()}}},components:{UserOutlined:N,LockOutlined:E,SafetyOutlined:O}}),C=e=>(R("data-v-1aefffe8"),e=e(),K(),e),T={class:"login-container"},P=C(()=>n("div",{class:"left-box"},null,-1)),j={class:"right-box"},Q={class:"login-box"},W=C(()=>n("div",{class:"login-header"},[n("h1",null,"Vite+Vue3 \xB7 \u7BA1\u7406\u7CFB\u7EDF"),n("p",null,[n("span",{style:{"white-space":"pre-wrap","line-height":"30px"}},"vite2.x + vue3.x + antd-design-vue2.x + typescript4.x + vue-router4.x + vuex4.x")])],-1)),X={class:"login-content"},Y=y("\u767B \u5F55"),Z=y("\u6CE8 \u518C "),q=C(()=>n("div",{class:"copyright"},[y("\xA9 2022 \u6F58\u7A0B\u79D1\u6280\u6709\u9650\u516C\u53F8 |"),n("a",{style:{color:"#0094ff","margin-left":"3px"},href:"https://beian.miit.gov.cn/#/Integrated/recordQuery",target:"_back"}," \u7CA4ICP\u5907123456789\u53F7")],-1));function z(e,o,p,g,w,h){const r=l("UserOutlined"),i=l("a-input"),u=l("a-form-item"),c=l("LockOutlined"),m=l("a-input-password"),b=l("SafetyOutlined"),v=l("a-button"),_=l("a-form"),d=l("a-tab-pane"),A=l("a-tabs");return V(),x("div",T,[P,n("div",j,[n("div",Q,[W,n("div",X,[t(A,{activeKey:e.activeKey,"onUpdate:activeKey":o[7]||(o[7]=s=>e.activeKey=s),style:{"margin-bottom":"10px"}},{default:a(()=>[t(d,{key:"login",tab:"\u767B\u5F55"},{default:a(()=>[t(_,{layout:"vertical",model:e.loginState,onFinishFailed:e.handleFinishFailed},{default:a(()=>[t(u,{label:"\u7528\u6237\u540D"},{default:a(()=>[t(i,{value:e.loginState.user,"onUpdate:value":o[0]||(o[0]=s=>e.loginState.user=s),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",maxlength:11,"allow-clear":""},{prefix:a(()=>[t(r,{style:{color:"rgba(0, 0, 0, 0.25)"}})]),_:1},8,["value"])]),_:1}),t(u,{label:"\u5BC6\u7801"},{default:a(()=>[t(m,{value:e.loginState.password,"onUpdate:value":o[1]||(o[1]=s=>e.loginState.password=s),autocomplete:"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{prefix:a(()=>[t(c,{style:{color:"rgba(0, 0, 0, 0.25)"}})]),_:1},8,["value"])]),_:1}),t(u,{label:"\u9A8C\u8BC1\u7801"},{default:a(()=>[t(i,{value:e.loginState.verification,"onUpdate:value":o[3]||(o[3]=s=>e.loginState.verification=s),maxlength:4,placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},{prefix:a(()=>[t(b,{style:{color:"rgba(0, 0, 0, 0.25)"}})]),addonAfter:a(()=>[n("p",{class:"code",onClick:o[2]||(o[2]=(...s)=>e.randomNumbers&&e.randomNumbers(...s))},$(e.randomNumber),1)]),_:1},8,["value"])]),_:1}),t(u,null,{default:a(()=>[t(v,{type:"primary",style:{width:"100%"},loading:e.isConfirm,onClick:e.primaryClick},{default:a(()=>[Y]),_:1},8,["loading","onClick"])]),_:1})]),_:1},8,["model","onFinishFailed"])]),_:1}),t(d,{key:"register",tab:"\u6CE8\u518C","force-render":""},{default:a(()=>[t(_,{layout:"vertical",model:e.registerState,onFinishFailed:e.handleFinishFaileds},{default:a(()=>[t(u,{label:"\u7528\u6237\u540D"},{default:a(()=>[t(i,{value:e.registerState.user,"onUpdate:value":o[4]||(o[4]=s=>e.registerState.user=s),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",maxlength:11,"allow-clear":""},{prefix:a(()=>[t(r,{style:{color:"rgba(0, 0, 0, 0.25)"}})]),_:1},8,["value"])]),_:1}),t(u,{label:"\u5BC6\u7801"},{default:a(()=>[t(m,{value:e.registerState.password,"onUpdate:value":o[5]||(o[5]=s=>e.registerState.password=s),autocomplete:"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{prefix:a(()=>[t(c,{style:{color:"rgba(0, 0, 0, 0.25)"}})]),_:1},8,["value"])]),_:1}),t(u,{label:"\u518D\u6B21\u786E\u8BA4\u5BC6\u7801"},{default:a(()=>[t(m,{value:e.registerState.secondary,"onUpdate:value":o[6]||(o[6]=s=>e.registerState.secondary=s),autocomplete:"",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"},{prefix:a(()=>[t(c,{style:{color:"rgba(0, 0, 0, 0.25)"}})]),_:1},8,["value"])]),_:1}),t(u,null,{default:a(()=>[t(v,{type:"primary",style:{width:"100%"},loading:e.isRegister,onClick:e.registerClick},{default:a(()=>[Z]),_:1},8,["loading","onClick"])]),_:1})]),_:1},8,["model","onFinishFailed"])]),_:1})]),_:1},8,["activeKey"])])]),q])])}var J=D(L,[["render",z],["__scopeId","data-v-1aefffe8"]]);export{J as default};
