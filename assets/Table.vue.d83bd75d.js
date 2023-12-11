import{_ as x,a as M}from"./entry.a7db78e0.js";import{F as n,Q as m,a4 as o,I as _,H as l,G as f,R as p,k as v,a as P,l as N,u,Z as b,Y as A,_ as T,V as h}from"./swiper-vue.6e4b9487.js";import R from"./ArrowTop.45e95320.js";import{_ as S}from"./ButtonOpacity.a941fccb.js";import{b as V}from"./index.156df155.js";import y from"./ArrowRight.222cf0a8.js";import{_ as w}from"./ButtonText.40c98744.js";import{c as q}from"./cn.a642df04.js";const I={},j={class:"text-[9px] text-left sm:text-[12px] font-normal text-black"};function z(e,t){return n(),m("h5",j,[o(e.$slots,"default")])}const k=x(I,[["render",z]]),E={};function F(e,t){const s=k;return n(),m("th",null,[_(s,{class:"p-[5px] sm:p-[10px] 3xl:py-[19px]"},{default:l(()=>[o(e.$slots,"default")]),_:3})])}const _e=x(E,[["render",F]]),G={},H={class:"p-[10px] 3xl:py-[19px] 3xl:table-cell"};function L(e,t){return n(),m("td",H,[o(e.$slots,"default")])}const C=x(G,[["render",L]]),O={};function Q(e,t){const s=k,r=C;return n(),f(r,{class:"grid grid-cols-2 3xl:table-cell 3xl: col-span-2"},{default:l(()=>[_(s,{class:"3xl:hidden"},{default:l(()=>[o(e.$slots,"title")]),_:3}),_(s,null,{default:l(()=>[o(e.$slots,"value")]),_:3})]),_:3})}const pe=x(O,[["render",Q]]),W={};function Y(e,t){const s=y,r=w;return n(),f(r,{class:"!text-[12px] flex gap-[5px]"},{default:l(()=>[p("span",null,[o(e.$slots,"default")]),_(s)]),_:3})}const Z=x(W,[["render",Y]]),D={class:"grid relative grid-cols-auto-3 sm:grid-cols-auto-3 3xl:table-row border-b py-[5px] border-beige-1"},J={class:"flex justify-end items-center gap-1"},me=v({__name:"TableItem",props:{isMobileClose:{default:!0,type:Boolean,required:!1}},setup(e){const t=P(!1),{width:s,height:r}=V();M();const c=N(()=>!!(s.value>=1600||t.value)),i=d=>{t.value=d};return(d,a)=>{const $=C,B=R,U=S;return n(),m("tr",D,[d.$slots.header?(n(),f($,{key:0,onClick:a[0]||(a[0]=g=>i(!u(t))),class:"col-span-1 sm:col-span-2 3xl:hidden cursor-pointer font-medium -order-2"},{default:l(()=>[o(d.$slots,"header")]),_:3})):b("",!0),o(d.$slots,"elements",{active:u(c)}),d.$slots.header||e.isMobileClose?(n(),f($,{key:1,onClick:a[2]||(a[2]=g=>i(!u(t))),class:"relative cursor-pointer z-10 -order-1 col-span-2 sm:col-span-1"},{default:l(()=>[p("div",J,[o(d.$slots,"additional-buttons"),e.isMobileClose?(n(),f(U,{key:0,onClick:a[1]||(a[1]=A(g=>i(!u(t)),["stop"])),class:"3xl:hidden"},{default:l(()=>[_(B,{color:"transparent",class:T(["!w-[14px] rotate-180 duration-300 ml-[25px] !h-[7px]",{"!rotate-0":u(t)}])},null,8,["class"])]),_:1})):b("",!0)])]),_:3})):b("",!0),!u(t)&&e.isMobileClose?(n(),m("button",{key:2,onClick:a[3]||(a[3]=g=>i(!u(t))),class:"3xl:hidden absolute w-full h-full top-0 left-0"})):b("",!0)])}}}),K={};function X(e,t){const s=y,r=w;return n(),f(r,{class:"!text-[12px] flex gap-[5px]"},{default:l(()=>[_(s,{class:"rotate-180"}),p("span",null,[o(e.$slots,"default")])]),_:3})}const ee=x(K,[["render",X]]),te={class:"p-[20px] 2xl:p-[30px] mt-[29px] 2xl:mt-[35px] rounded-[10px] 2xl:rounded-[20px] bg-beige"},ne={class:"table-auto w-full"},oe={key:0,class:"flex mt-[15px] items-center justify-between md:justify-end gap-[20px] xl:gap-[40px]"},fe=v({__name:"Table",props:{pagination:{default:!0,type:Boolean},pageTable:{type:Number,default:1,required:!1},endPage:{type:Number,default:1,required:!1},noMobile:{type:Boolean,default:!1,required:!1}},emits:["setPage"],setup(e,{emit:t}){const s=t,r=c=>{s("setPage",c)};return(c,i)=>{const d=ee,a=Z;return n(),m("div",te,[o(c.$slots,"additional_elements"),p("table",ne,[p("thead",null,[p("tr",{class:T(("cn"in c?c.cn:u(q))("hidden 3xl:table-row border-b border-beige-1",{"!table-row":e.noMobile}))},[o(c.$slots,"headers")],2)]),p("tbody",null,[o(c.$slots,"items")])]),e.pagination?(n(),m("div",oe,[_(d,{disabled:e.pageTable===1,onClick:i[0]||(i[0]=$=>r(e.pageTable-1))},{default:l(()=>[h("Попередня сторінка")]),_:1},8,["disabled"]),_(a,{disabled:e.pageTable===e.endPage,onClick:i[1]||(i[1]=$=>r(e.pageTable+1))},{default:l(()=>[h("Наступна сторінка")]),_:1},8,["disabled"])])):b("",!0)])}}});export{Z as _,me as a,_e as b,fe as c,C as d,pe as e,k as f};
