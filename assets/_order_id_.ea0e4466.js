import{_ as B}from"./Modal.vue.684dd50f.js";import{_ as C}from"./Order.vue.3bccf4e3.js";import{_ as I}from"./ProfilePage.vue.e06eb2c8.js";import{c as O,f,e as v}from"./entry.e567a446.js";import{k as P,a as r,l as T,F as V,G as $,H as a,I as i,V as h,u as s,R as b}from"./swiper-vue.c2b88c58.js";import"./ButtonOpacity.1ca87902.js";import"./Button.vue.09b0195d.js";import"./nuxt-link.793ce550.js";import"./ui.config.28a3590b.js";import"./AlertDanger.be139bea.js";import"./TextPrimary.6c84577b.js";import"./AlertSuccess.f7f5dccb.js";import"./Header2.aa18153b.js";import"./ModalTitle.vue.dd0c4a1d.js";import"./LabelProfile.vue.29b0aa91.js";import"./ButtonOpacityBorderAddItem.b84c969b.js";import"./CrossInCircle.b520091a.js";import"./nuxt-icon.c7004446.js";import"./SelectVariant.vue.6bc193be.js";import"./SelectProfile.vue.5e641d36.js";import"./tw-merge.c375e922.js";import"./useFormGroup.a119c6c7.js";import"./Radio.447f2dd6.js";import"./uid.12f507af.js";import"./DivBorderBg.123898ef.js";import"./ButtonOpacityDelete.d230a659.js";import"./Search.ca21635d.js";import"./cn.a642df04.js";import"./Delete.477f669b.js";import"./Table.vue.bc21cef9.js";import"./ArrowTop.abb4671e.js";import"./ArrowRight.e5c2102e.js";import"./ButtonText.e961c12d.js";import"./CurrencyText.3d61b5e4.js";import"./useBase64.1efa7b71.js";import"./ordersStore.6f778af6.js";import"./useSorting.9414d803.js";const N={class:"flex justify-center"},ht=P({__name:"[order_id]",setup(R){const g=O(),p=r(""),n=r(""),m=T(()=>g.params.order_id),c=r(),e=r({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),y=(t,o)=>{e.value[o]=t},x=()=>{f(`${v()}/order_info`,{body:{order_id:m.value}}).then(t=>{var o;e.value.client=t.client,e.value.email=t.email,e.value.payment=t.payment,e.value.shipping=t.shipping,e.value.source=t.source,e.value.status=(o=t.status)==null?void 0:o.status,e.value.comment=t.comment,c.value=t})},u=t=>{if(t===!0)return n.value="Замовлення успішно обновлено",!1;p.value="Щось не вийшло!"},l=()=>{f(`${v()}/update_order`,{body:{order_id:m.value,client:e.value.client,email:e.value.email,shipping:e.value.shipping,status:e.value.status,source:e.value.source,payment:e.value.payment,comment:e.value.comment,products:e.value.products}}).then(t=>{u(t.message)}).catch(t=>{u(t),console.log(t)})};return x(),(t,o)=>{const d=B,k=C,U=I;return V(),$(U,{title:"Редагувати замовлення"},{header:a(()=>[i(d,{onClick:l,class:"hidden lg:block"},{default:a(()=>[h(" Оновити ")]),_:1})]),content:a(()=>{var _;return[i(k,{inputs:s(e),error:s(p),messageToUser:s(n),orderProducts:(_=s(c))==null?void 0:_.products,onUpdateInputs:y},null,8,["inputs","error","messageToUser","orderProducts"]),b("div",N,[i(d,{onClick:l,class:"lg:hidden mt-[25px]"},{default:a(()=>[h(" Оновити ")]),_:1})])]}),_:1})}}});export{ht as default};