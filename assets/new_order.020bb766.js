import{_ as h}from"./Modal.vue.684dd50f.js";import{_ as v}from"./Order.vue.3bccf4e3.js";import{_ as g}from"./ProfilePage.vue.e06eb2c8.js";import{f as y,e as x}from"./entry.e567a446.js";import{k,a as r,F as C,G as U,H as o,I as s,V as l,u as a,R as B}from"./swiper-vue.c2b88c58.js";import"./ButtonOpacity.1ca87902.js";import"./Button.vue.09b0195d.js";import"./nuxt-link.793ce550.js";import"./ui.config.28a3590b.js";import"./AlertDanger.be139bea.js";import"./TextPrimary.6c84577b.js";import"./AlertSuccess.f7f5dccb.js";import"./Header2.aa18153b.js";import"./ModalTitle.vue.dd0c4a1d.js";import"./LabelProfile.vue.29b0aa91.js";import"./ButtonOpacityBorderAddItem.b84c969b.js";import"./CrossInCircle.b520091a.js";import"./nuxt-icon.c7004446.js";import"./SelectVariant.vue.6bc193be.js";import"./SelectProfile.vue.5e641d36.js";import"./tw-merge.c375e922.js";import"./useFormGroup.a119c6c7.js";import"./Radio.447f2dd6.js";import"./uid.12f507af.js";import"./DivBorderBg.123898ef.js";import"./ButtonOpacityDelete.d230a659.js";import"./Search.ca21635d.js";import"./cn.a642df04.js";import"./Delete.477f669b.js";import"./Table.vue.bc21cef9.js";import"./ArrowTop.abb4671e.js";import"./ArrowRight.e5c2102e.js";import"./ButtonText.e961c12d.js";import"./CurrencyText.3d61b5e4.js";import"./useBase64.1efa7b71.js";import"./ordersStore.6f778af6.js";import"./useSorting.9414d803.js";const T={class:"flex justify-center"},ct=k({__name:"new_order",setup(V){const i=r(""),p=r(""),t=r({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),_=(e,c)=>{t.value[c]=e},m=e=>{if(e===!0)return p.value="Замовлення успішно створено",t.value={},!1;i.value="Щось не вийшло!"},n=()=>{y(`${x()}/add_order`,{body:{client:t.value.client,email:t.value.email,shipping:t.value.shipping,status:t.value.status,source:t.value.source,payment:t.value.payment,comment:t.value.comment,products:t.value.products}}).then(e=>{m(e.message)}).catch(e=>{m(e),console.log(e)})};return(e,c)=>{const u=h,d=v,f=g;return C(),U(f,{title:"Додати замовлення"},{header:o(()=>[s(u,{onClick:n,class:"hidden lg:block"},{default:o(()=>[l(" Створити ")]),_:1})]),content:o(()=>[s(d,{inputs:a(t),error:a(i),messageToUser:a(p),onUpdateInputs:_},null,8,["inputs","error","messageToUser"]),B("div",T,[s(u,{onClick:n,class:"lg:hidden mt-[25px]"},{default:o(()=>[l(" Створити ")]),_:1})])]),_:1})}}});export{ct as default};
