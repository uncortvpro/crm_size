import{_ as h}from"./ButtonOpacityBorder.331d6c0f.js";import{_ as v}from"./Order.vue.0a262e37.js";import{_ as g}from"./ProfilePage.vue.bb1cb1e7.js";import{f as y,e as x}from"./entry.14287089.js";import{k,a as i,F as C,G as U,H as r,I as m,V as l,u as s,R as B}from"./swiper-vue.7d7207a4.js";import"./ButtonOpacity.467a53d6.js";import"./Button.vue.8bc0fe75.js";import"./nuxt-link.7861695d.js";import"./AlertDanger.8ffe68fc.js";import"./TextPrimary.9c6a2407.js";import"./AlertSuccess.6782c0b1.js";import"./Header2.b6d63107.js";import"./ModalTitle.vue.1b8da5bd.js";import"./Modal.vue.d6d3610a.js";import"./ui.config.28bdcf52.js";import"./index.4e64f9f1.js";import"./LabelProfile.vue.7927c4cc.js";import"./cn.a642df04.js";import"./ButtonOpacityBorderAddItem.f637ac3a.js";import"./CrossInCircle.d363a90c.js";import"./nuxt-icon.90b68e3b.js";import"./SelectVariant.vue.3d3263dd.js";import"./SelectProfile.vue.3961a818.js";import"./tw-merge.c12b54cd.js";import"./useFormGroup.348c1ff5.js";import"./Radio.7ae81355.js";import"./uid.12f507af.js";import"./TextareaProfile.vue.42abf356.js";import"./DivBorderBg.51e86300.js";import"./Table.vue.313f3609.js";import"./ArrowTop.36751400.js";import"./ArrowRight.c06a60ed.js";import"./ButtonText.217e85d2.js";import"./Checkbox.vue.4dff3ed2.js";import"./SearchBorder.vue.32f71f0d.js";import"./Search.d2214331.js";import"./InputProfileTable.fcef8795.js";import"./CurrencyText.1030543a.js";import"./ButtonOpacityDelete.659487c3.js";import"./Delete.ca1322ce.js";import"./useBase64.1efa7b71.js";import"./ordersStore.7e332574.js";import"./useSorting.9908e62e.js";const T={class:"flex justify-center"},ht=k({__name:"new_order",setup(V){const a=i(""),p=i(""),t=i({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),_=(e,o)=>{t.value[o]=e},n=e=>{if(e===!0)return p.value="Замовлення успішно створено",t.value={},!1;a.value="Щось не вийшло!"},c=()=>{const e=t.value.products.map(o=>({...o,amount:o.amount?+o.amount:0}));y(`${x()}/add_order`,{body:{client:t.value.client,email:t.value.email,shipping:t.value.shipping,status:t.value.status,source:t.value.source,payment:t.value.payment,comment:t.value.comment,variations:e}}).then(o=>{n(o.message)}).catch(o=>{n(o),console.log(o)})};return(e,o)=>{const u=h,d=v,f=g;return C(),U(f,{title:"Додати замовлення"},{header:r(()=>[m(u,{onClick:c,class:"hidden lg:block"},{default:r(()=>[l(" Створити ")]),_:1})]),content:r(()=>[m(d,{inputs:s(t),error:s(a),messageToUser:s(p),onUpdateInputs:_},null,8,["inputs","error","messageToUser"]),B("div",T,[m(u,{onClick:c,class:"lg:hidden mt-[25px]"},{default:r(()=>[l(" Створити ")]),_:1})])]),_:1})}}});export{ht as default};
