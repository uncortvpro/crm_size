import{_ as h}from"./Modal.vue.3dc3c055.js";import{_ as v}from"./Transaction.vue.86ad9dac.js";import{_ as g}from"./ProfilePage.vue.644be210.js";import{f as y,e as x}from"./entry.0fc0c82e.js";import{u as k}from"./useFormatDate.fd2ffbc5.js";import{k as C,a as r,F as T,G as U,H as o,I as a,V as l,u as s,R as B}from"./swiper-vue.36f73e51.js";import"./ButtonOpacity.7a6728f2.js";import"./Button.vue.e58ade20.js";import"./nuxt-link.b5742774.js";import"./ui.config.1da60734.js";import"./AlertDanger.8f4369fc.js";import"./TextPrimary.110be8e7.js";import"./AlertSuccess.ae7419a4.js";import"./ModalAddCashier.vue.fa97d106.js";import"./ModalTitle.vue.430bc7cc.js";import"./Header2.1431a63d.js";import"./LabelProfile.vue.3ad4914f.js";import"./Radio.08813d01.js";import"./tw-merge.5a7c0b21.js";import"./uid.12f507af.js";import"./useFormGroup.e5e40c3f.js";import"./ButtonText.38b19505.js";import"./cn.a642df04.js";import"./ChangeTransaction.cd44443a.js";import"./nuxt-icon.2859c15b.js";import"./SelectProfile.vue.b14a0ab4.js";import"./ButtonOpacityBorderAddItem.eb0ac8d7.js";import"./CrossInCircle.23b38782.js";import"./SelectVariant.vue.1009b458.js";import"./DivBorderBg.e6f70cb4.js";import"./Calendar.cd7e3055.js";const V={class:"flex justify-center"},st=C({__name:"new_transaction",setup(F){const n=r(""),i=r(""),t=r({cashier:"",counterpartie:"",sum:"",date:"",category:"",comment:"",type:"На рахунок"}),_=(e,c)=>{t.value[c]=e},m=e=>{if(e===!0)return i.value="Транзакцію успішно створено",!1;n.value="Щось не вийшло!"},p=()=>{y(`${x()}/add_transaction`,{body:{type:t.value.type,cashier:t.value.cashier,sum:+t.value.sum,counterpartie:t.value.counterpartie,date:k(t.value.date),category:t.value.category,comment:t.value.comment}}).then(e=>{m(e.message)}).catch(e=>{m(!1)})};return(e,c)=>{const u=h,d=v,f=g;return T(),U(f,{title:"Додати транзакцію"},{header:o(()=>[a(u,{onClick:p,class:"hidden lg:block"},{default:o(()=>[l(" Створити ")]),_:1})]),content:o(()=>[a(d,{inputs:s(t),error:s(n),messageToUser:s(i),onUpdateInputs:_},null,8,["inputs","error","messageToUser"]),B("div",V,[a(u,{onClick:p,class:"lg:hidden mt-[25px]"},{default:o(()=>[l(" Створити ")]),_:1})])]),_:1})}}});export{st as default};
