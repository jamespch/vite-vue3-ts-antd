import{_ as c}from"./index.5c3f203d.js";import{d as u,T as m,a0 as f,g as y,o as l,b as p,e as F,f as a,w as n,r as i}from"./vendor.58f6be3b.js";const C=u({setup(){const s=y().appContext.config.globalProperties,t=m(void 0),o=e=>{e.setOption({series:[{type:"gauge",progress:{show:!0,width:15},axisLine:{lineStyle:{width:15}},axisTick:{show:!1},splitLine:{distance:3,length:5,lineStyle:{width:2,color:"#999"}},axisLabel:{distance:18,color:"#999",fontSize:10},anchor:{show:!0,showAbove:!0,size:15,itemStyle:{borderWidth:10}},title:{show:!1},detail:{valueAnimation:!0,fontSize:30,offsetCenter:[0,"70%"]},data:[{value:75}]}]})};return f(()=>{const e=s.echarts.init(t.value,"dark");o(e)}),{myRef1:t}}}),S={id:"mycharts1",ref:"myRef1",class:"chart-box"};function E(r,s,t,o,e,_){return l(),p("div",S,null,512)}var k=c(C,[["render",E],["__scopeId","data-v-27082d90"]]);const A=u({setup(){const s=y().appContext.config.globalProperties,t=m(void 0),o=e=>{e.setOption({series:[{name:"Nightingale Chart",type:"pie",radius:[20,80],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:8},data:[{value:40,name:"Vue3"},{value:38,name:"TypeScript"},{value:32,name:"Vite"},{value:30,name:"Vuex"},{value:28,name:"Vue-router"},{value:26,name:"Ant Design Vue"},{value:22,name:"Echarts"}]}]})};return f(()=>{const e=s.echarts.init(t.value,"dark");o(e)}),{myRef2:t}}}),B={id:"mmycharts2",ref:"myRef2",class:"chart-box"};function T(r,s,t,o,e,_){return l(),p("div",B,null,512)}var D=c(A,[["render",T],["__scopeId","data-v-19656c00"]]);const L=u({setup(){const s=y().appContext.config.globalProperties,t=m(void 0),o=e=>{e.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"3%",left:"5%",right:"2%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:["\u4E00\u5B63\u5EA6","\u4E8C\u5B63\u5EA6","\u4E09\u5B63\u5EA6","\u56DB\u5B63\u5EA6"]},series:[{name:"\u65B0\u589E\u7528\u6237",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:[2,5,4,3,1,5,4]},{name:"\u88C2\u53D8\u7528\u6237",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:[3,4,1,5,7,2,5]},{name:"\u6F5C\u6C34\u7528\u6237",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:[2,1,1,2,3,3,3]},{name:"\u65E5\u6D3B\u7528\u6237",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:[1,2,2,1,1,3,4]},{name:"\u57FA\u7840\u7528\u6237",type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:[8,8,9,8,12,13,13]}]})};return f(()=>{const e=s.echarts.init(t.value,"dark");o(e)}),{myRef3:t}}}),R={id:"mycharts3",ref:"myRef3",class:"chart-box"};function P(r,s,t,o,e,_){return l(),p("div",R,null,512)}var V=c(L,[["render",P],["__scopeId","data-v-ccb4def0"]]);const I=u({setup(){const s=y().appContext.config.globalProperties,t=m(void 0),o=e=>{e.setOption({color:["#80FFA5","#00DDFF","#37A2FF","#FF0087","#FFBF00"],tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{top:"5%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u65E5"]}],yAxis:[{type:"value"}],series:[{name:"Line 1",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:"#80FFA5"},emphasis:{focus:"series"},data:[140,232,101,264,90,340,250]},{name:"Line 2",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:"#00DDFF"},emphasis:{focus:"series"},data:[120,282,111,234,220,340,310]},{name:"Line 3",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:"#37A2FF"},emphasis:{focus:"series"},data:[320,132,201,334,190,130,220]},{name:"Line 4",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:"#FF0087"},emphasis:{focus:"series"},data:[220,402,231,134,190,230,120]},{name:"Line 5",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,label:{show:!0,position:"top"},areaStyle:{opacity:.8,color:"#FFBF00"},emphasis:{focus:"series"},data:[220,302,181,234,210,290,150]}]})};return f(()=>{const e=s.echarts.init(t.value,"dark");o(e)}),{myRef4:t}}}),O={id:"mycharts4",ref:"myRef4",class:"chart-box"};function z(r,s,t,o,e,_){return l(),p("div",O,null,512)}var N=c(I,[["render",z],["__scopeId","data-v-4857eafc"]]);const M=u({setup(){return{}},components:{echart1:k,echart2:D,echart3:V,echart4:N}}),G={class:"appMain"},U={class:"chart"};function W(r,s,t,o,e,_){const b=i("echart1"),d=i("a-card"),h=i("a-col"),x=i("echart2"),v=i("a-row"),g=i("a-divider"),$=i("echart3"),w=i("echart4");return l(),p("div",G,[F("div",U,[a(v,{type:"flex",gutter:16},{default:n(()=>[a(h,{span:12},{default:n(()=>[a(d,{hoverable:"",title:"CPU\u4F7F\u7528\u7387"},{default:n(()=>[a(b)]),_:1})]),_:1}),a(h,{span:12},{default:n(()=>[a(d,{hoverable:"",title:"\u9879\u76EE\u6280\u672F\u6808"},{default:n(()=>[a(x)]),_:1})]),_:1})]),_:1}),a(g),a(v,{type:"flex",gutter:16},{default:n(()=>[a(h,{span:12},{default:n(()=>[a(d,{hoverable:"",title:"\u7528\u6237\u7C7B\u578B\u5206\u6790"},{default:n(()=>[a($)]),_:1})]),_:1}),a(h,{span:12},{default:n(()=>[a(d,{hoverable:"",title:"\u9879\u76EE\u5468\u6D3B\u8DC3"},{default:n(()=>[a(w)]),_:1})]),_:1})]),_:1})])])}var H=c(M,[["render",W]]);export{H as default};
