import{_ as h}from"./Modal.vue.33ae423b.js";import{_ as v}from"./Transaction.vue.d75f317a.js";import{_ as g}from"./ProfilePage.vue.b2257f83.js";import{f as y,e as x}from"./entry.204f0e3f.js";import{u as k}from"./useFormatDate.3613cc39.js";import{k as C,a as r,F as T,G as U,H as o,I as a,V as l,u as s,R as B}from"./swiper-vue.926809d1.js";import"./ButtonOpacity.11a6e927.js";import"./Button.vue.baae92a2.js";import"./nuxt-link.0dc977bc.js";import"./ui.config.db83fc77.js";import"./AlertDanger.0ec785c5.js";import"./TextPrimary.8ae9a7da.js";import"./AlertSuccess.df5c708c.js";import"./ModalAddCashier.vue.e2c7492c.js";import"./ModalTitle.vue.d5ca4275.js";import"./Header2.160c6059.js";import"./LabelProfile.vue.4e57014c.js";import"./Radio.805e86dc.js";import"./tw-merge.d981b2d8.js";import"./uid.12f507af.js";import"./useFormGroup.e010994d.js";import"./ButtonText.94c8e86f.js";import"./cn.a642df04.js";import"./ChangeTransaction.3332a3eb.js";import"./nuxt-icon.04fd4b87.js";import"./SelectProfile.vue.80c8211b.js";import"./ButtonOpacityBorderAddItem.e2a6b079.js";import"./CrossInCircle.30f2d746.js";import"./SelectVariant.vue.c22ddb79.js";import"./DivBorderBg.c9a5bfae.js";import"./Calendar.c0a850aa.js";const V={class:"flex justify-center"},st=C({__name:"new_transaction",setup(F){const n=r(""),i=r(""),t=r({cashier:"",counterpartie:"",sum:"",date:"",category:"",comment:"",type:"На рахунок"}),_=(e,c)=>{t.value[c]=e},m=e=>{if(e===!0)return i.value="Транзакцію успішно створено",!1;n.value="Щось не вийшло!"},p=()=>{y(`${x()}/add_transaction`,{body:{type:t.value.type,cashier:t.value.cashier,sum:+t.value.sum,counterpartie:t.value.counterpartie,date:k(t.value.date),category:t.value.category,comment:t.value.comment}}).then(e=>{m(e.message)}).catch(e=>{m(!1)})};return(e,c)=>{const u=h,d=v,f=g;return T(),U(f,{title:"Додати транзакцію"},{header:o(()=>[a(u,{onClick:p,class:"hidden lg:block"},{default:o(()=>[l(" Створити ")]),_:1})]),content:o(()=>[a(d,{inputs:s(t),error:s(n),messageToUser:s(i),onUpdateInputs:_},null,8,["inputs","error","messageToUser"]),B("div",V,[a(u,{onClick:p,class:"lg:hidden mt-[25px]"},{default:o(()=>[l(" Створити ")]),_:1})])]),_:1})}}});export{st as default};
