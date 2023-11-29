import{_ as j}from"./ModalWarning.vue.c8034d13.js";import{_ as z,a as J}from"./ButtonOpacityEdit.78cd0a90.js";import{_ as K}from"./ModalOrderDetails.vue.5117acae.js";import{_ as X}from"./ButtonSortingTable.vue.a1b5ef51.js";import{a as ee,b as oe,c as te}from"./Table.vue.86a68380.js";import{_ as ne}from"./TransitionTableCell.vue.a913062a.js";import{_ as se}from"./CurrencyText.e0a25e6b.js";import{_ as re}from"./StatusOutput.vue.2e22050c.js";import{_ as ae}from"./ButtonOpacityThreeDots.95bc2bd3.js";import{_ as le}from"./ButtonOpacityDelete.68074b96.js";import{k as E,F as C,G as I,H as e,R as P,U as _,u as r,I as t,V as a,Y as h,l as v,a as B,f as R,Z as x,Q as ie,a3 as me,a4 as de}from"./swiper-vue.c2b88c58.js";import{a as ue,n as F}from"./entry.67d43b7a.js";import{u as q}from"./useDate.d306248e.js";import{_ as pe}from"./ProfilePage.vue.284371ff.js";import{u as _e}from"./ordersStore.8ad3cbe0.js";import"./Modal.vue.0c332ca5.js";import"./ButtonOpacity.dc986b85.js";import"./Button.vue.fe528707.js";import"./nuxt-link.8b951553.js";import"./ui.config.774b3127.js";import"./ButtonOpacityBorderAddItem.9dfc8560.js";import"./CrossInCircle.f892b003.js";import"./nuxt-icon.4dbfd0d2.js";import"./Edit.8e1157a5.js";import"./useBase64.1efa7b71.js";import"./ArrowRight.5c48ce0f.js";import"./ButtonText.4228120b.js";import"./cn.a642df04.js";import"./ArrowTop.cc30804c.js";import"./Header2.700b2c28.js";import"./Close.6c4892db.js";import"./tw-merge.d5dfc584.js";import"./ThreeDots.1f637f37.js";import"./Search.ff849a65.js";import"./Delete.f6467ce9.js";import"./useSorting.9414d803.js";const ce={class:"max-w-[200px] w-full inline-block truncate"},fe={class:"font-medium leading-[130%] max-w-[200px] inline-block truncate"},ge={class:"flex items-center gap-[5px] md:gap-[25px]"},ve=E({__name:"TableItemOrders",props:{order:{}},emits:["deleteAction","showDetails"],setup(M,{emit:m}){const D=M,T=m,$=()=>{T("showDetails",D.order._id)},c=()=>{T("deleteAction",D.order._id)};return ue(),(n,p)=>{const u=ne,b=se,U=re,y=ae,S=z,f=le,V=ee;return C(),I(V,null,{header:e(()=>{var l;return[P("span",ce,_(("useDate"in n?n.useDate:r(q))((l=n.order)==null?void 0:l.date)),1)]}),elements:e(({active:l})=>[t(u,{vIf:l},{title:e(()=>[a("Дата")]),value:e(()=>{var o;return[P("span",fe,_(("useDate"in n?n.useDate:r(q))((o=n.order)==null?void 0:o.date)),1)]}),_:2},1032,["vIf"]),t(u,{vIf:l},{title:e(()=>[a("Клієнт")]),value:e(()=>{var o;return[a(_((o=n.order)==null?void 0:o.client),1)]}),_:2},1032,["vIf"]),t(u,{vIf:l},{title:e(()=>[a("Сума замовлення")]),value:e(()=>{var o;return[a(_((o=n.order)==null?void 0:o.total_sum),1),t(b)]}),_:2},1032,["vIf"]),t(u,{vIf:l},{title:e(()=>[a("Джерело замовлення")]),value:e(()=>{var o;return[a(_((o=n.order)==null?void 0:o.source),1)]}),_:2},1032,["vIf"]),t(u,{vIf:l},{title:e(()=>[a("Статус")]),value:e(()=>{var o,w;return[t(U,{color:(w=(o=n.order)==null?void 0:o.status)==null?void 0:w.colour},{default:e(()=>{var O,k;return[a(_((k=(O=n.order)==null?void 0:O.status)==null?void 0:k.status),1)]}),_:1},8,["color"])]}),_:2},1032,["vIf"]),t(u,{vIf:l},{title:e(()=>[a("Оплата")]),value:e(()=>{var o;return[a(_((o=n.order)==null?void 0:o.payment),1)]}),_:2},1032,["vIf"])]),"additional-buttons":e(()=>[P("div",ge,[t(y,{onClick:h($,["stop"])},null,8,["onClick"]),t(S,{class:"flex-shrink-0",onClick:p[0]||(p[0]=h(l=>("navigateTo"in n?n.navigateTo:r(F))("/profile/edit_order/"+n.order._id),["stop"]))}),t(f,{class:"flex-shrink-0",onClick:h(c,["stop"])},null,8,["onClick"])])]),_:1})}}}),eo=E({__name:"my_orders",setup(M){const m=_e(),D=v(()=>m.orders),T=()=>m.fetchOrders(),$=s=>m.searchOrders(s),c=B(""),n=v(()=>m.sorting),p=v(()=>m.reverseSorting),u=s=>{m.setSorting(s)},b=v(()=>m.page),U=v(()=>m.endPage),y=s=>m.setPage(s),S=async()=>{m.deleteOrder(c.value),l(!1)},f=B(!1),V=s=>{console.log("qwdqwd"),O(s),l(!0)},l=s=>{f.value=s},o=B(!1),w=v(()=>D.value.find(s=>s._id===c.value)),O=s=>{c.value=s},k=s=>{o.value=s},H=s=>{O(s),k(!0)};return T(),(s,i)=>{const L=j,G=J,Q=K,A=X,g=oe,W=ve,Y=te,Z=pe;return C(),I(Z,{title:"Мої замовлення"},{content:e(()=>{var N;return[r(c)?(C(),I(L,{key:0,modelValue:r(f),"onUpdate:modelValue":i[0]||(i[0]=d=>R(f)?f.value=d:null),onCloseModal:i[1]||(i[1]=d=>l(!1)),onConfirm:S},{default:e(()=>[a("Ви впевнені, що хочете видалити завдання?")]),_:1},8,["modelValue"])):x("",!0),t(G,{onSearch:$,onAdd:i[2]||(i[2]=d=>("navigateTo"in s?s.navigateTo:r(F))("new_order"))},{add_name:e(()=>[a(" Додати замовлення")]),_:1}),r(w)?(C(),I(Q,{key:1,modelValue:r(o),"onUpdate:modelValue":i[3]||(i[3]=d=>R(o)?o.value=d:null),onCloseModal:i[4]||(i[4]=d=>k(!1)),label:"Деталі замовлення",products:(N=r(w))==null?void 0:N.products},null,8,["modelValue","products"])):x("",!0),t(Y,{pageTable:r(b),endPage:r(U),onSetPage:y},{headers:e(()=>[t(g,null,{default:e(()=>[t(A,{sortingUp:r(n)==="date"&&r(p),sortingDown:r(n)==="date"&&!r(p),onClick:i[5]||(i[5]=d=>u("date")),class:"!font-normal"},{default:e(()=>[a(" Дата замовлення")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),t(g,null,{default:e(()=>[a("Клієнт")]),_:1}),t(g,null,{default:e(()=>[t(A,{sortingUp:r(n)==="total_sum"&&r(p),sortingDown:r(n)==="total_sum"&&!r(p),onClick:i[6]||(i[6]=d=>u("total_sum")),class:"!font-normal"},{default:e(()=>[a(" Сума замовлення")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),t(g,null,{default:e(()=>[a("Джерело замовлення")]),_:1}),t(g,null,{default:e(()=>[a("Статус")]),_:1}),t(g,null,{default:e(()=>[a("Оплата")]),_:1})]),items:e(()=>[(C(!0),ie(de,null,me(r(D),d=>(C(),I(W,{key:d._id,order:d,onShowDetails:H,onDeleteAction:V},null,8,["order"]))),128))]),_:1},8,["pageTable","endPage"])]}),_:1})}}});export{eo as default};
