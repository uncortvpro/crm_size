import{_ as g}from"./ButtonOpacityBorder.06e98313.js";import{_ as x}from"./Transaction.vue.640f527c.js";import{_ as B}from"./ProfilePage.vue.618878d2.js";import{c as T,f as k,e as U}from"./entry.a6c15489.js";import{u as C}from"./financeStore.3d63cdb3.js";import{u as I}from"./useFormatDate.a04898b8.js";import{k as F,a as r,l as V,a5 as N,F as R,G as S,H as a,I as s,V as d,u as n,R as $}from"./swiper-vue.36f73e51.js";import"./ButtonOpacity.a7366e8b.js";import"./Button.vue.dae32332.js";import"./nuxt-link.0a0c2998.js";import"./AlertDanger.736a7662.js";import"./TextPrimary.51c9550e.js";import"./AlertSuccess.b79ec89d.js";import"./ModalAddCashier.vue.dec44105.js";import"./ModalTitle.vue.44d41ddf.js";import"./Header2.93b6c6e2.js";import"./Modal.vue.1c5ef812.js";import"./ui.config.37bc306e.js";import"./LabelProfile.vue.376c900b.js";import"./Radio.24744806.js";import"./tw-merge.e5c826f7.js";import"./uid.12f507af.js";import"./useFormGroup.946dc5da.js";import"./ButtonText.f19a46e5.js";import"./cn.a642df04.js";import"./ChangeTransaction.93d1228a.js";import"./nuxt-icon.9ee65076.js";import"./SelectProfile.vue.2acd6954.js";import"./index.246acd74.js";import"./ButtonOpacityBorderAddItem.769f1094.js";import"./CrossInCircle.2a3dabc6.js";import"./SelectVariant.vue.85f6f41a.js";import"./DivBorderBg.342d8771.js";import"./useSorting.9414d803.js";import"./Calendar.d9fdb599.js";const b={class:"flex justify-center"},ht=F({__name:"[transaction_id]",setup(A){const i=r(""),c=r(""),m=T().params.transaction_id,v=C(),e=V(()=>v.getTransactionById(m)),t=r({cashier:"",counterpartie:"",sum:"",date:"",category:"",comment:"",type:"На рахунок"});N(()=>{t.value.cashier=e.value.cashier,t.value.counterpartie=e.value.counterpartie,t.value.sum=String(e.value.sum),t.value.date=e.value.date,t.value.category=e.value.category,t.value.comment=e.value.comment,t.value.type=e.value.type});const f=(o,l)=>{t.value[l]=o},u=o=>{if(o===!0)return c.value="Транзакцію успішно обновлено",!1;i.value="Щось не вийшло!"},p=()=>{k(`${U()}/update_transaction`,{body:{transaction_id:m,type:t.value.type,cashier:t.value.cashier,sum:+t.value.sum,counterpartie:t.value.counterpartie,date:I(t.value.date),category:t.value.category,comment:t.value.comment}}).then(o=>{u(o.message)}).catch(o=>{u(!1)})};return(o,l)=>{const _=g,h=x,y=B;return R(),S(y,{title:"Редагувати транзакцію"},{header:a(()=>[s(_,{onClick:p,class:"hidden lg:block"},{default:a(()=>[d(" Редагувати ")]),_:1})]),content:a(()=>[s(h,{inputs:n(t),error:n(i),messageToUser:n(c),onUpdateInputs:f},null,8,["inputs","error","messageToUser"]),$("div",b,[s(_,{onClick:p,class:"lg:hidden mt-[25px]"},{default:a(()=>[d(" Редагувати ")]),_:1})])]),_:1})}}});export{ht as default};
