import{_ as U}from"./ButtonOpacityBorder.331d6c0f.js";import{_ as B}from"./Order.vue.0a262e37.js";import{_ as C}from"./ProfilePage.vue.bb1cb1e7.js";import{c as I,f as d,e as _}from"./entry.14287089.js";import{k as O,a as e,l as T,F as V,G as $,H as i,I as m,V as v,u as n,R as b}from"./swiper-vue.7d7207a4.js";import"./ButtonOpacity.467a53d6.js";import"./Button.vue.8bc0fe75.js";import"./nuxt-link.7861695d.js";import"./AlertDanger.8ffe68fc.js";import"./TextPrimary.9c6a2407.js";import"./AlertSuccess.6782c0b1.js";import"./Header2.b6d63107.js";import"./ModalTitle.vue.1b8da5bd.js";import"./Modal.vue.d6d3610a.js";import"./ui.config.28bdcf52.js";import"./index.4e64f9f1.js";import"./LabelProfile.vue.7927c4cc.js";import"./cn.a642df04.js";import"./ButtonOpacityBorderAddItem.f637ac3a.js";import"./CrossInCircle.d363a90c.js";import"./nuxt-icon.90b68e3b.js";import"./SelectVariant.vue.3d3263dd.js";import"./SelectProfile.vue.3961a818.js";import"./tw-merge.c12b54cd.js";import"./useFormGroup.348c1ff5.js";import"./Radio.7ae81355.js";import"./uid.12f507af.js";import"./TextareaProfile.vue.42abf356.js";import"./DivBorderBg.51e86300.js";import"./Table.vue.313f3609.js";import"./ArrowTop.36751400.js";import"./ArrowRight.c06a60ed.js";import"./ButtonText.217e85d2.js";import"./Checkbox.vue.4dff3ed2.js";import"./SearchBorder.vue.32f71f0d.js";import"./Search.d2214331.js";import"./InputProfileTable.fcef8795.js";import"./CurrencyText.1030543a.js";import"./ButtonOpacityDelete.659487c3.js";import"./Delete.ca1322ce.js";import"./useBase64.1efa7b71.js";import"./ordersStore.7e332574.js";import"./useSorting.9908e62e.js";const N={class:"flex justify-center"},Ut=O({__name:"[order_id]",setup(R){const f=I(),p=e(""),r=e(""),u=T(()=>f.params.order_id),h=e(),o=e({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),g=(t,a)=>{o.value[a]=t},y=()=>{d(`${_()}/order_info`,{body:{order_id:u.value}}).then(t=>{var a;o.value.client=t==null?void 0:t.client,o.value.email=t==null?void 0:t.email,o.value.payment=t==null?void 0:t.payment,o.value.shipping=t==null?void 0:t.shipping,o.value.source=t==null?void 0:t.source,o.value.status=(a=t==null?void 0:t.status)==null?void 0:a.status,o.value.comment=t==null?void 0:t.comment,o.value.products=t==null?void 0:t.variations,h.value=t})},c=t=>{if(t===!0)return r.value="Замовлення успішно обновлено",!1;p.value="Щось не вийшло!"},s=()=>{const t=o.value.products.map(a=>({...a,amount:a.amount?+a.amount:0}));d(`${_()}/update_order`,{body:{order_id:u.value,client:o.value.client,email:o.value.email,shipping:o.value.shipping,status:o.value.status,source:o.value.source,payment:o.value.payment,comment:o.value.comment,variations:t}}).then(a=>{c(a.message)}).catch(a=>{c(a),console.log(a)})};return y(),(t,a)=>{const l=U,x=B,k=C;return V(),$(k,{title:"Редагувати замовлення"},{header:i(()=>[m(l,{onClick:s,class:"hidden lg:block"},{default:i(()=>[v(" Оновити ")]),_:1})]),content:i(()=>[m(x,{inputs:n(o),error:n(p),messageToUser:n(r),onUpdateInputs:g},null,8,["inputs","error","messageToUser"]),b("div",N,[m(l,{onClick:s,class:"lg:hidden mt-[25px]"},{default:i(()=>[v(" Оновити ")]),_:1})])]),_:1})}}});export{Ut as default};
