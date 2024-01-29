import{_ as B}from"./ButtonOpacityBorder.ce19117e.js";import{_ as U}from"./Order.vue.ff73b80a.js";import{_ as C}from"./ProfilePage.vue.93e3d5b3.js";import{c as I,f as d,e as _}from"./entry.1dbfaf80.js";import{k as O,a as e,l as T,F as V,G as $,H as i,I as m,V as v,u as n,R as b}from"./swiper-vue.7d7207a4.js";import"./ButtonOpacity.30d58bf2.js";import"./Button.vue.615ee25e.js";import"./nuxt-link.07a8edf6.js";import"./AlertDanger.d0c306d7.js";import"./TextPrimary.c65ae8b6.js";import"./AlertSuccess.af82e017.js";import"./Header2.82d1d87f.js";import"./ModalTitle.vue.be1ef6f5.js";import"./Modal.vue.5eccd174.js";import"./ui.config.eb0896a1.js";import"./index.502b48fe.js";import"./index.1876d4a2.js";import"./LabelProfile.vue.885c02a7.js";import"./cn.a642df04.js";import"./ButtonOpacityBorderAddItem.0115d3bd.js";import"./CrossInCircle.f766c5d3.js";import"./nuxt-icon.7be9f2e5.js";import"./SelectVariant.vue.8fe954ec.js";import"./SelectProfile.vue.8ee20a6d.js";import"./tw-merge.df26e4d0.js";import"./useFormGroup.36eda7f7.js";import"./Radio.f69ad87b.js";import"./uid.12f507af.js";import"./TextareaProfile.vue.42abf356.js";import"./DivBorderBg.08ef3703.js";import"./Table.vue.e87c21a0.js";import"./ArrowTop.70c91463.js";import"./ArrowRight.bf4d3123.js";import"./ButtonText.dedd0d6a.js";import"./Checkbox.vue.82c95655.js";import"./SearchBorder.vue.027a853a.js";import"./Search.6744efe3.js";import"./InputProfileTable.9eef2dc3.js";import"./CurrencyText.c76e0582.js";import"./ButtonOpacityDelete.be530159.js";import"./Delete.aa8bc491.js";import"./useBase64.1efa7b71.js";import"./ordersStore.08f68161.js";import"./useSorting.9908e62e.js";const N={class:"flex justify-center"},Ut=O({__name:"[order_id]",setup(R){const f=I(),p=e(""),r=e(""),u=T(()=>f.params.order_id),h=e(),o=e({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),g=(t,a)=>{o.value[a]=t},y=()=>{d(`${_()}/order_info`,{body:{order_id:u.value}}).then(t=>{var a;o.value.client=t==null?void 0:t.client,o.value.email=t==null?void 0:t.email,o.value.payment=t==null?void 0:t.payment,o.value.shipping=t==null?void 0:t.shipping,o.value.source=t==null?void 0:t.source,o.value.status=(a=t==null?void 0:t.status)==null?void 0:a.status,o.value.comment=t==null?void 0:t.comment,o.value.products=t==null?void 0:t.variations,h.value=t})},c=t=>{if(t===!0)return r.value="Замовлення успішно обновлено",!1;p.value="Щось не вийшло!"},s=()=>{const t=o.value.products.map(a=>({...a,amount:a.amount?+a.amount:0}));d(`${_()}/update_order`,{body:{order_id:u.value,client:o.value.client,email:o.value.email,shipping:o.value.shipping,status:o.value.status,source:o.value.source,payment:o.value.payment,comment:o.value.comment,variations:t}}).then(a=>{c(a.message)}).catch(a=>{c(a),console.log(a)})};return y(),(t,a)=>{const l=B,k=U,x=C;return V(),$(x,{isButtonBack:"",title:"Редагувати замовлення"},{header:i(()=>[m(l,{onClick:s,class:"hidden lg:block"},{default:i(()=>[v(" Оновити ")]),_:1})]),content:i(()=>[m(k,{inputs:n(o),error:n(p),messageToUser:n(r),onUpdateInputs:g},null,8,["inputs","error","messageToUser"]),b("div",N,[m(l,{onClick:s,class:"lg:hidden mt-[25px]"},{default:i(()=>[v(" Оновити ")]),_:1})])]),_:1})}}});export{Ut as default};