import v from"./Clients.8a6ef761.js";import{a as S}from"./MenuLink.vue.e56a390b.js";import{c as g,b as P,_ as L,a as q}from"./entry.1dbfaf80.js";import{k as x,F as n,Q as s,I as e,H as t,R as u,a4 as _,u as p,Z as c,l as X,V as r,G as f,U as k}from"./swiper-vue.7d7207a4.js";import K from"./Tasks.571d1e2c.js";import W from"./Finance.ccca1ade.js";import N from"./Stock.cb264349.js";import U from"./Orders.7d13f615.js";import F from"./Newsletter.6dc2ee2f.js";import T from"./Analytics.6364646d.js";import O from"./Settings.b6c4cdb3.js";import{_ as d}from"./ButtonOpacity.30d58bf2.js";import j from"./Notifications.b8df3ac6.js";const H={class:"flex items-center justify-between min-h-[26px]"},J={class:"w-[24px] lg:w-[30px]"},R={key:0,class:"w-[3px] h-[26px] bg-black rounded-[2px]"},y=x({__name:"MenuProfileItem",props:{to:{}},setup(m){const l=g();return(o,a)=>{const A=S;return n(),s("div",H,[e(A,{class:"!normal-case flex items-center gap-[13px] lg:!text-[15px] xl:!text-[15px]",to:o.to},{default:t(()=>[u("span",J,[_(o.$slots,"logo")]),u("span",null,[_(o.$slots,"title")])]),_:3},8,["to"]),p(l).path===o.to?(n(),s("span",R)):c("",!0)])}}}),M={key:0},D={key:1},Z={key:2},G={key:3},C={key:4},z={key:5},ft=x({__name:"MenuProfileList",setup(m){const l=P(),o=X(()=>l.onlyFinance);return(a,A)=>{const E=v,i=y,h=K,B=W,Q=N,b=U,w=F,V=T;return n(),s("ul",null,[p(o)?c("",!0):(n(),s("li",M,[e(i,{to:"/profile/clients"},{logo:t(()=>[e(E,{class:"!w-full !h-auto"})]),title:t(()=>[r("Клієнти")]),_:1})])),p(o)?c("",!0):(n(),s("li",D,[e(i,{to:"/profile/objectives"},{logo:t(()=>[e(h,{class:"!w-full !h-auto"})]),title:t(()=>[r("Задачі")]),_:1})])),u("li",null,[e(i,{to:"/profile/finance"},{logo:t(()=>[e(B,{color:"transparent",class:"!w-full !h-auto"})]),title:t(()=>[r("Фінанси")]),_:1})]),p(o)?c("",!0):(n(),s("li",Z,[e(i,{to:"/profile/warehouses"},{logo:t(()=>[e(Q,{class:"!w-full !h-auto"})]),title:t(()=>[r("Склади")]),_:1})])),p(o)?c("",!0):(n(),s("li",G,[e(i,{to:"/profile/my_orders"},{logo:t(()=>[e(b,{class:"!w-full !h-auto"})]),title:t(()=>[r("Мої замовлення")]),_:1})])),p(o)?c("",!0):(n(),s("li",C,[e(i,{to:"/profile/mailing_list"},{logo:t(()=>[e(w,{class:"!w-full !h-auto"})]),title:t(()=>[r("Розсилка")]),_:1})])),p(o)?c("",!0):(n(),s("li",z,[e(i,{to:"/profile/analytics"},{logo:t(()=>[e(V,{class:"!w-full !h-auto"})]),title:t(()=>[r("Аналітика")]),_:1})]))])}}}),I={};function Y(m,l){const o=O,a=d;return n(),f(a,{class:"w-[20px] h-[20px] lg:w-[32px] lg:h-[32px]"},{default:t(()=>[e(o,{class:"!w-full !h-full text-black"})]),_:1})}const dt=L(I,[["render",Y]]),$={key:0,class:"absolute right-0 top-0 rounded-[50%] bg-black flex justify-center items-center w-[9px] h-[9px] lg:w-[14px] lg:h-[14px]"},tt={class:"text-[4px] text-white font-medium lg:text-[8px]"},Et=x({__name:"ButtonOpacityNotifications",props:{countNotification:{}},setup(m){return(l,o)=>{const a=j,A=d;return n(),f(A,{class:"relative w-[20px] h-[20px] lg:w-[32px] lg:h-[32px]"},{default:t(()=>[l.countNotification?(n(),s("div",$,[u("span",tt,k(l.countNotification),1)])):c("",!0),e(a,{class:"!w-full !h-full text-black"})]),_:1})}}}),ot={class:"hidden lg:inline-block lg:text-[15px] lg:w-[75px] leading-[130%] text-left font-medium text-black"},et={class:"overflow-hidden rounded-[50%] inline-block w-[20px] h-[20px] lg:w-[45px] lg:h-[45px]"},ht=x({__name:"ButtonOpacityUser",setup(m){const l=q();return(o,a)=>{const A=d;return n(),f(A,{onClick:a[0]||(a[0]=E=>p(l).push("/profile")),class:"flex lg:w items-center gap-[15px]"},{default:t(()=>[u("span",ot,[_(o.$slots,"name")]),u("span",et,[_(o.$slots,"image")])]),_:3})}}}),Bt="data:image/jpeg;base64,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";export{Bt as _,ft as a,dt as b,Et as c,ht as d};
