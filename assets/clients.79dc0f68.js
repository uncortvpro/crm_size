import{u as O,_ as F}from"./RemoveClient.vue.e70fe092.js";import{_ as H,a as L}from"./ButtonOpacityEdit.18371b59.js";import{_ as G}from"./ButtonSortingTable.vue.59ace6b0.js";import{_ as Q,a as Y,b as j,c as q}from"./Table.vue.048cbff3.js";import{_ as z}from"./TransitionTableCell.vue.ce511523.js";import{_ as J}from"./CurrencyText.84b4e272.js";import{_ as K}from"./StatusOutput.vue.d8f5df7c.js";import{_ as W}from"./ButtonOpacityDelete.f051109e.js";import{k as R,F as k,G as D,H as t,R as P,U as p,I as e,V as n,Y as h,u as l,a as B,l as C,f as X,Q as Z,a3 as tt,a2 as et}from"./swiper-vue.7d7207a4.js";import{a as nt,n as V}from"./entry.1ece7de6.js";import{_ as ot}from"./ProfilePage.vue.fb5ff74a.js";import"./ModalWarning.vue.63971df5.js";import"./ButtonOpacityBorder.a8320009.js";import"./ButtonOpacity.36bd00f9.js";import"./Button.vue.2d6eab8e.js";import"./nuxt-link.c6d28d06.js";import"./Modal.vue.4fd597f3.js";import"./ui.config.c588cbc6.js";import"./useSorting.9908e62e.js";import"./ButtonOpacityBorderAddItem.bdcb7f2a.js";import"./CrossInCircle.b99fd802.js";import"./nuxt-icon.aa89098f.js";import"./SearchBorder.vue.eafce9f0.js";import"./Search.9cd6c473.js";import"./cn.a642df04.js";import"./Edit.1658ed1c.js";import"./ArrowRight.2feefc93.js";import"./ButtonText.066757d6.js";import"./ArrowTop.d41427af.js";import"./index.502b48fe.js";import"./index.1876d4a2.js";import"./Delete.1a6fcd68.js";const lt={class:"max-w-[200px] w-full inline-block truncate"},st={class:"font-medium leading-[130%] max-w-[200px] inline-block truncate"},at=R({__name:"TableItemClients",props:{client:{}},emits:["deleteAction"],setup(y,{emit:r}){const g=r,I=()=>{g("deleteAction")};return nt(),(a,T)=>{const m=z,w=J,U=K,b=Q,u=H,f=W,v=Y;return k(),D(v,null,{header:t(()=>{var s;return[P("span",lt,p((s=a.client)==null?void 0:s.name),1)]}),elements:t(({active:s})=>[e(m,{vIf:s},{title:t(()=>[n("Ім’я")]),value:t(()=>{var o;return[P("span",st,p((o=a.client)==null?void 0:o.name),1)]}),_:2},1032,["vIf"]),e(m,{vIf:s},{title:t(()=>[n("Номер телефону")]),value:t(()=>{var o;return[n(p((o=a.client)==null?void 0:o.phone),1)]}),_:2},1032,["vIf"]),e(m,{vIf:s},{title:t(()=>[n("Email")]),value:t(()=>{var o;return[n(p((o=a.client)==null?void 0:o.email),1)]}),_:2},1032,["vIf"]),e(m,{vIf:s},{title:t(()=>[n("Instagram")]),value:t(()=>{var o;return[n(p((o=a.client)==null?void 0:o.instagram),1)]}),_:2},1032,["vIf"]),e(m,{vIf:s},{title:t(()=>[n("Історія покупок ")]),value:t(()=>[n(p(a.client.orders.length)+" замовлень",1)]),_:2},1032,["vIf"]),e(m,{vIf:s},{title:t(()=>[n("Тотал сума покупок ")]),value:t(()=>{var o;return[n(p((o=a.client)==null?void 0:o.total_price_sum),1),e(w)]}),_:2},1032,["vIf"]),e(m,{vIf:s},{title:t(()=>[n("Дата останньої покупки")]),value:t(()=>{var o;return[n(p((o=a.client)==null?void 0:o.latest_order_date),1)]}),_:2},1032,["vIf"]),e(m,{vIf:s},{title:t(()=>[n("Статус")]),value:t(()=>[e(U,{color:a.client.status.colour},{default:t(()=>{var o,$;return[n(p(($=(o=a.client)==null?void 0:o.status)==null?void 0:$.status),1)]}),_:1},8,["color"])]),_:2},1032,["vIf"]),e(m,{vIf:s,class:"3xl:hidden col-span-2"},{title:t(()=>[e(b,null,{default:t(()=>[n("Детальніше")]),_:1})]),_:2},1032,["vIf"])]),"additional-buttons":t(()=>[e(u,{class:"flex-shrink-0",onClick:T[0]||(T[0]=h(s=>("navigateTo"in a?a.navigateTo:l(V))("/profile/edit_client/"+a.client._id),["stop"]))}),e(f,{class:"flex-shrink-0",onClick:h(I,["stop"])},null,8,["onClick"])]),_:1})}}}),Ft=R({__name:"clients",setup(y){const r=O(),g=B(!1),I=B(""),a=C(()=>r.clients),T=C(()=>r.page),m=C(()=>r.endPage),w=()=>r.fetchClients(),U=i=>r.setPage(i),b=i=>r.searchClients(i),u=C(()=>r.sorting),f=C(()=>r.reverseSorting),v=i=>{r.setSorting(i)},s=i=>{g.value=i},o=i=>{I.value=i},$=i=>{o(i),s(!0)};return w(),(i,_)=>{const A=F,x=L,S=G,d=j,E=at,M=q,N=ot;return k(),D(N,{title:"Клієнти"},{content:t(()=>[P("div",null,[e(A,{modelValue:l(g),"onUpdate:modelValue":_[0]||(_[0]=c=>X(g)?g.value=c:null),clientId:l(I),onSwitchModal:s},null,8,["modelValue","clientId"]),e(x,{onAdd:_[1]||(_[1]=c=>("navigateTo"in i?i.navigateTo:l(V))("new_client")),onSearch:b},{add_name:t(()=>[n(" Додати клієнта ")]),_:1}),e(M,{pageTable:l(T),endPage:l(m),onSetPage:U},{headers:t(()=>[e(d,null,{default:t(()=>[e(S,{sortingUp:l(u)==="name"&&l(f),sortingDown:l(u)==="name"&&!l(f),onClick:_[2]||(_[2]=c=>v("name")),class:"!font-normal"},{default:t(()=>[n(" Ім’я")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),e(d,null,{default:t(()=>[n("Номер телефону")]),_:1}),e(d,null,{default:t(()=>[n("Email")]),_:1}),e(d,null,{default:t(()=>[n("Instagram")]),_:1}),e(d,null,{default:t(()=>[n("Історія покупок ")]),_:1}),e(d,null,{default:t(()=>[e(S,{sortingUp:l(u)==="total_price_sum"&&l(f),sortingDown:l(u)==="total_price_sum"&&!l(f),onClick:_[3]||(_[3]=c=>v("total_price_sum")),class:"!font-normal"},{default:t(()=>[n(" Тотал сума покупок")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),e(d,null,{default:t(()=>[e(S,{sortingUp:l(u)==="latest_order_date"&&l(f),sortingDown:l(u)==="latest_order_date"&&!l(f),onClick:_[4]||(_[4]=c=>v("latest_order_date")),class:"!font-normal"},{default:t(()=>[n(" Дата останньої покупки")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),e(d,null,{default:t(()=>[n("Статус")]),_:1})]),items:t(()=>[(k(!0),Z(et,null,tt(l(a),c=>(k(),D(E,{key:c._id,client:c,onDeleteAction:it=>$(c._id)},null,8,["client","onDeleteAction"]))),128))]),_:1},8,["pageTable","endPage"])])]),_:1})}}});export{Ft as default};