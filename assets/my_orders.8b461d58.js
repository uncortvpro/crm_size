import{_ as P,a as x,b as F}from"./ButtonOpacityDelete.995f763b.js";import{_ as M}from"./ModalOrderDetails.vue.950b1db2.js";import{_ as E,a as L,c as R,d as j,e as q}from"./Table.vue.ebc51706.js";import{_ as H}from"./CurrencyText.a7b4a000.js";import{u as $,_ as W}from"./useDate.e9eca808.js";import{f as B,g as z,o as C,j as k,w as e,a as T,t as f,l as _,b as n,d as s,k as b,n as U,C as G,i as d,B as J,A as K,q as S,s as Q,m as X,c as Y,v as Z,F as ee}from"./entry.46bbb6e6.js";import{_ as oe}from"./ProfilePage.vue.d9e990f1.js";import"./ButtonOpacityBorderAddItem.43d5f7f5.js";import"./CrossInCircle.ffb5a2d1.js";import"./nuxt-icon.48ed8123.js";import"./Modal.vue.0a293924.js";import"./ButtonOpacity.759a828d.js";import"./ui.config.4098eca1.js";import"./Search.2bc88d86.js";import"./Edit.fe011833.js";import"./Delete.843e6a34.js";import"./useBase64.937b19aa.js";import"./ArrowTop.bde30aab.js";import"./index.76901e9c.js";import"./index.025f4197.js";import"./ArrowRight.4e108bd9.js";import"./ButtonText.4688b2d5.js";import"./Header2.95ac9943.js";import"./Close.e4e3bb03.js";import"./tw-merge.2d30b16a.js";import"./ThreeDots.eb877df9.js";const te={class:"max-w-[200px] w-full inline-block truncate"},ne={class:"font-medium leading-[130%] max-w-[200px] inline-block truncate"},se={class:"flex items-center gap-[5px] md:gap-[25px]"},re=B({__name:"TableItemOrders",props:{order:{}},emits:["deleteAction","showDetails"],setup(g,{emit:c}){const p=g,h=c,O=()=>{h("showDetails",p.order._id)};return z(),(o,m)=>{const a=E,i=H,I=L,D=W,r=P,u=x,w=R;return C(),k(w,null,{header:e(()=>{var l;return[T("span",te,f(("useDate"in o?o.useDate:_($))((l=o.order)==null?void 0:l.date)),1)]}),elements:e(({active:l})=>[n(a,{vIf:l},{title:e(()=>[s("Дата")]),value:e(()=>{var t;return[T("span",ne,f(("useDate"in o?o.useDate:_($))((t=o.order)==null?void 0:t.date)),1)]}),_:2},1032,["vIf"]),n(a,{vIf:l},{title:e(()=>[s("Клієнт")]),value:e(()=>{var t;return[s(f((t=o.order)==null?void 0:t.client),1)]}),_:2},1032,["vIf"]),n(a,{vIf:l},{title:e(()=>[s("Сума замовлення")]),value:e(()=>{var t;return[s(f((t=o.order)==null?void 0:t.total_sum),1),n(i)]}),_:2},1032,["vIf"]),n(a,{vIf:l},{title:e(()=>[s("Джерело замовлення")]),value:e(()=>{var t;return[s(f((t=o.order)==null?void 0:t.source),1)]}),_:2},1032,["vIf"]),n(a,{vIf:l},{title:e(()=>[s("Статус")]),value:e(()=>[n(I,{color:o.order.status.colour},{default:e(()=>[s(f(o.order.status.status),1)]),_:1},8,["color"])]),_:2},1032,["vIf"]),n(a,{vIf:l},{title:e(()=>[s("Оплата")]),value:e(()=>{var t;return[s(f((t=o.order)==null?void 0:t.payment),1)]}),_:2},1032,["vIf"])]),"additional-buttons":e(()=>[T("div",se,[n(D,{onClick:b(O,["stop"])},null,8,["onClick"]),n(r,{class:"flex-shrink-0",onClick:m[0]||(m[0]=b(l=>("navigateTo"in o?o.navigateTo:_(U))("/profile/edit_order/"+o.order._id),["stop"]))}),n(u,{class:"flex-shrink-0",onClick:m[1]||(m[1]=b(()=>{},["stop"]))})])]),_:1})}}}),ae=G("ordersStore",()=>{const g=d([]),c=d(1),p=d(""),h=d(1),O=d(""),o=d(!1);function m(i){p.value=i,a()}function a(){J(`${K()}/orders`,{body:{page:c.value,per_page:10,keyword:p.value,sort_by:O.value,reverse_sort:o.value}}).then(i=>{console.log(i),g.value=i.orders,h.value=i.total_pages}).catch(i=>{console.error(i)})}return{fetchOrders:a,orders:g,searchOrders:m}}),Ae=B({__name:"my_orders",setup(g){const c=ae(),p=S(()=>c.orders),h=()=>c.fetchOrders(),O=r=>c.searchOrders(r),o=d(!1),m=d(""),a=S(()=>p.value.find(r=>r._id===m.value)),i=r=>{m.value=r},I=r=>{o.value=r},D=r=>{i(r),I(!0)};return h(),(r,u)=>{const w=F,l=M,t=j,V=re,A=q,N=oe;return C(),k(N,{title:"Мої замовлення"},{content:e(()=>{var y;return[n(w,{onSearch:O,onAdd:u[0]||(u[0]=v=>("navigateTo"in r?r.navigateTo:_(U))("new_order"))},{add_name:e(()=>[s(" Додати замовлення")]),_:1}),_(a)?(C(),k(l,{key:0,modelValue:_(o),"onUpdate:modelValue":u[1]||(u[1]=v=>Q(o)?o.value=v:null),onCloseModal:u[2]||(u[2]=v=>I(!1)),label:"Деталі замовлення",products:(y=_(a))==null?void 0:y.products},null,8,["modelValue","products"])):X("",!0),n(A,null,{headers:e(()=>[n(t,null,{default:e(()=>[s("Дата замовлення")]),_:1}),n(t,null,{default:e(()=>[s("Клієнт")]),_:1}),n(t,null,{default:e(()=>[s("Сума замовлення")]),_:1}),n(t,null,{default:e(()=>[s("Джерело замовлення")]),_:1}),n(t,null,{default:e(()=>[s("Статус")]),_:1}),n(t,null,{default:e(()=>[s("Оплата")]),_:1})]),items:e(()=>[(C(!0),Y(ee,null,Z(_(p),v=>(C(),k(V,{key:v._id,order:v,onShowDetails:D},null,8,["order"]))),128))]),_:1})]}),_:1})}}});export{Ae as default};
