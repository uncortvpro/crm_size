import{_ as h}from"./ButtonOpacityBorder.503958f2.js";import{_ as v}from"./Order.vue.cdd804cf.js";import{_ as g}from"./ProfilePage.vue.91b7bb0f.js";import{c as y,d as k,n as x}from"./entry.9837a20a.js";import{k as B,a as i,F as C,G as U,H as r,I as s,V as u,u as a,R as T}from"./swiper-vue.df2f0745.js";import"./ButtonOpacity.8fd52cb5.js";import"./Button.vue.38cd8abf.js";import"./nuxt-link.21791279.js";import"./AlertDanger.c5cbbe4f.js";import"./TextPrimary.597a46d7.js";import"./AlertSuccess.b275b201.js";import"./Header2.0df1f0de.js";import"./ModalTitle.vue.ad05d48d.js";import"./Modal.vue.24fa8f69.js";import"./ui.config.ed65c54b.js";import"./index.14c8fbbe.js";import"./index.7fa93687.js";import"./LabelProfile.vue.c7348741.js";import"./cn.a642df04.js";import"./ButtonOpacityBorderAddItem.f3aa5c64.js";import"./CrossInCircle.a0bf07aa.js";import"./nuxt-icon.91f9f1b8.js";import"./SelectVariant.vue.bc9a1e1a.js";import"./SelectProfile.vue.ef6af844.js";import"./tw-merge.82eb27f5.js";import"./useFormGroup.429088e7.js";import"./Radio.fc1ee864.js";import"./uid.12f507af.js";import"./TextareaProfile.vue.9ff30fe5.js";import"./DivBorderBg.c839b7ad.js";import"./Table.vue.12d954a7.js";import"./ArrowTop.fb31f4a4.js";import"./ArrowRight.63b5977e.js";import"./ButtonText.60071046.js";import"./Checkbox.vue.5d520c18.js";import"./SearchBorder.vue.71d0fe05.js";import"./Search.d9618135.js";import"./InputProfileTable.1610277c.js";import"./CurrencyText.68eccced.js";import"./ButtonOpacityDelete.3ca8558b.js";import"./Delete.6d225995.js";import"./useBase64.1efa7b71.js";import"./ordersStore.c9cc0cd5.js";import"./useSorting.9908e62e.js";const V={class:"flex justify-center"},gt=B({__name:"new_order",setup(I){const m=i(""),l=i(""),t=i({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),_=(e,o)=>{t.value[o]=e},p=e=>{if(e===!0)return x("/profile/orders"),t.value={},!1;m.value="Щось не вийшло!"},n=()=>{const e=t.value.products.map(o=>({...o,amount:o.amount?+o.amount:0}));y(`${k()}/add_order`,{body:{client:t.value.client,email:t.value.email,shipping:t.value.shipping,status:t.value.status,source:t.value.source,payment:t.value.payment,comment:t.value.comment,variations:e}}).then(o=>{p(o.message)}).catch(o=>{p(o),console.log(o)})};return(e,o)=>{const c=h,d=v,f=g;return C(),U(f,{isButtonBack:"",title:"Додати замовлення"},{header:r(()=>[s(c,{onClick:n,class:"hidden lg:block"},{default:r(()=>[u(" Створити ")]),_:1})]),content:r(()=>[s(d,{inputs:a(t),error:a(m),messageToUser:a(l),onUpdateInputs:_},null,8,["inputs","error","messageToUser"]),T("div",V,[s(c,{onClick:n,class:"lg:hidden mt-[25px]"},{default:r(()=>[u(" Створити ")]),_:1})])]),_:1})}}});export{gt as default};
