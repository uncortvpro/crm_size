import{_ as k}from"./micro-task.f2b8702a.js";import{_ as C}from"./Order.vue.5374bf68.js";import{_ as b}from"./ProfilePage.vue.db57ce06.js";import{f as I,x as O,i as r,q as P,o as T,j as $,w as a,b as i,d as v,l as s,a as A,B as f,A as h}from"./entry.2c4ac607.js";import"./ButtonOpacity.56d0f423.js";import"./nuxt-link.bbe2d9d5.js";import"./AlertDanger.3f45526c.js";import"./uid.85c98e67.js";import"./index.a6b833fe.js";import"./AlertSuccess.c66c03da.js";import"./Header2.a91c7a94.js";import"./SelectVariant.vue.cfcdc7f8.js";import"./tw-merge.5c8f39e5.js";import"./ui.config.4a5c0603.js";import"./index.822b4d9b.js";import"./Modal.vue.9dd43d42.js";import"./use-resolve-button-type.e5dfd55e.js";import"./ButtonOpacityDelete.c89ddd8e.js";import"./CrossInCircle.bc48627f.js";import"./nuxt-icon.a636b460.js";import"./Search.b94ce439.js";import"./cn.a642df04.js";import"./Delete.9566d238.js";import"./Table.vue.b8c656f9.js";import"./ArrowTop.0a5ff5a0.js";import"./ArrowRight.40c2d2b0.js";import"./ButtonText.0e7e3120.js";import"./CurrencyText.07630cf7.js";import"./useBase64.937b19aa.js";import"./ordersStore.6565c1bf.js";import"./useSorting.9414d803.js";const N={class:"flex justify-center"},ue=I({__name:"[order_id]",setup(V){const g=O(),n=r(""),p=r(""),m=P(()=>g.params.order_id),c=r(),t=r({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),y=(e,o)=>{t.value[o]=e},x=()=>{f(`${h()}/order_info`,{body:{order_id:m.value}}).then(e=>{var o;t.value.client=e.client,t.value.email=e.email,t.value.payment=e.payment,t.value.shipping=e.shipping,t.value.source=e.source,t.value.status=(o=e.status)==null?void 0:o.status,t.value.comment=e.comment,c.value=e})},u=e=>{if(e===!0)return p.value="Замовлення успішно обновлено",!1;n.value="Щось не вийшло!"},l=()=>{f(`${h()}/update_order`,{body:{order_id:m.value,client:t.value.client,email:t.value.email,shipping:t.value.shipping,status:t.value.status,source:t.value.source,payment:t.value.payment,comment:t.value.comment,products:t.value.products}}).then(e=>{u(e.message)}).catch(e=>{u(e),console.log(e)})};return x(),(e,o)=>{const d=k,B=C,U=b;return T(),$(U,{title:"Редагувати замовлення"},{header:a(()=>[i(d,{onClick:l,class:"hidden lg:block"},{default:a(()=>[v(" Оновити ")]),_:1})]),content:a(()=>{var _;return[i(B,{inputs:s(t),error:s(n),messageToUser:s(p),orderProducts:(_=s(c))==null?void 0:_.products,onUpdateInputs:y},null,8,["inputs","error","messageToUser","orderProducts"]),A("div",N,[i(d,{onClick:l,class:"lg:hidden mt-[25px]"},{default:a(()=>[v(" Оновити ")]),_:1})])]}),_:1})}}});export{ue as default};
