import{_ as h}from"./Modal.vue.0c332ca5.js";import{_ as v}from"./Transaction.vue.e129e73d.js";import{_ as g}from"./ProfilePage.vue.284371ff.js";import{f as y,e as x}from"./entry.67d43b7a.js";import{u as k}from"./useFormatDate.49389e74.js";import{k as C,a as r,F as T,G as U,H as o,I as a,V as l,u as s,R as B}from"./swiper-vue.c2b88c58.js";import"./ButtonOpacity.dc986b85.js";import"./Button.vue.fe528707.js";import"./nuxt-link.8b951553.js";import"./ui.config.774b3127.js";import"./AlertDanger.799553f7.js";import"./TextPrimary.34ace5ec.js";import"./AlertSuccess.5218ce6d.js";import"./ModalAddCashier.vue.5bcea1d9.js";import"./ModalTitle.vue.2fdf3e12.js";import"./Header2.700b2c28.js";import"./LabelProfile.vue.10d7d3b4.js";import"./Radio.f44b8754.js";import"./tw-merge.d5dfc584.js";import"./uid.12f507af.js";import"./useFormGroup.807bc207.js";import"./ButtonText.4228120b.js";import"./cn.a642df04.js";import"./ChangeTransaction.b4750b61.js";import"./nuxt-icon.4dbfd0d2.js";import"./SelectProfile.vue.37327d60.js";import"./ButtonOpacityBorderAddItem.9dfc8560.js";import"./CrossInCircle.f892b003.js";import"./DatePicker.vue.353ba825.js";import"./Calendar.7731d097.js";import"./SelectVariant.vue.583d056a.js";import"./DivBorderBg.e876b08d.js";const V={class:"flex justify-center"},nt=C({__name:"new_transaction",setup(F){const n=r(""),i=r(""),t=r({cashier:"",counterpartie:"",sum:"",date:"",category:"",comment:"",type:"На рахунок"}),_=(e,c)=>{t.value[c]=e},m=e=>{if(e===!0)return i.value="Транзакцію успішно створено",!1;n.value="Щось не вийшло!"},p=()=>{y(`${x()}/add_transaction`,{body:{type:t.value.type,cashier:t.value.cashier,sum:+t.value.sum,counterparte:t.value.counterpartie,date:k(t.value.date),category:t.value.category,comment:t.value.comment}}).then(e=>{m(e.message)}).catch(e=>{m(!1)})};return(e,c)=>{const u=h,d=v,f=g;return T(),U(f,{title:"Додати транзакцію"},{header:o(()=>[a(u,{onClick:p,class:"hidden lg:block"},{default:o(()=>[l(" Створити ")]),_:1})]),content:o(()=>[a(d,{inputs:s(t),error:s(n),messageToUser:s(i),onUpdateInputs:_},null,8,["inputs","error","messageToUser"]),B("div",V,[a(u,{onClick:p,class:"lg:hidden mt-[25px]"},{default:o(()=>[l(" Створити ")]),_:1})])]),_:1})}}});export{nt as default};
