import{_ as g}from"./ButtonOpacityBorder.ce19117e.js";import{_ as h}from"./Transaction.vue.0d903d23.js";import{_ as v}from"./ProfilePage.vue.93e3d5b3.js";import{f as y,e as k,n as x}from"./entry.1dbfaf80.js";import{u as B}from"./useFormatDate.d2b5f0db.js";import{k as T,a,F as C,G as U,H as r,I as i,V as u,u as s,R as V}from"./swiper-vue.7d7207a4.js";import"./ButtonOpacity.30d58bf2.js";import"./Button.vue.615ee25e.js";import"./nuxt-link.07a8edf6.js";import"./AlertDanger.d0c306d7.js";import"./TextPrimary.c65ae8b6.js";import"./AlertSuccess.af82e017.js";import"./ModalAddCashier.vue.64a2dff6.js";import"./ModalTitle.vue.be1ef6f5.js";import"./Header2.82d1d87f.js";import"./Modal.vue.5eccd174.js";import"./ui.config.eb0896a1.js";import"./LabelProfile.vue.885c02a7.js";import"./cn.a642df04.js";import"./Radio.f69ad87b.js";import"./tw-merge.df26e4d0.js";import"./uid.12f507af.js";import"./useFormGroup.36eda7f7.js";import"./index.1876d4a2.js";import"./ButtonText.dedd0d6a.js";import"./ChangeTransaction.bef68e65.js";import"./nuxt-icon.7be9f2e5.js";import"./SelectProfile.vue.8ee20a6d.js";import"./index.502b48fe.js";import"./ButtonOpacityBorderAddItem.0115d3bd.js";import"./CrossInCircle.f766c5d3.js";import"./SelectVariant.vue.8fe954ec.js";import"./TextareaProfile.vue.42abf356.js";import"./Checkbox.vue.82c95655.js";import"./DivBorderBg.08ef3703.js";import"./ArrowRight.bf4d3123.js";import"./Calendar.9ca6adae.js";const F={class:"flex justify-center"},lt=T({__name:"new_transaction",setup(I){const n=a(""),l=a(""),t=a({cashier:"",counterpartie:"",sum:"",date:"",category:"",comment:"",type:"На рахунок",recuring:!1,periodicity:7}),_=(e,o)=>{t.value[o]=e},m=e=>{if(e===!0)return x("/profile/finance"),!1;n.value="Щось не вийшло!"},p=()=>{var e;y(`${k()}/add_transaction`,{body:{type:t.value.type,cashier:t.value.cashier,sum:+t.value.sum,counterpartie:t.value.counterpartie,date:B(t.value.date),category:t.value.category,comment:t.value.comment,recuring:t.value.recuring,periodicity:+((e=t.value)==null?void 0:e.periodicity)||!1}}).then(o=>{m(o.message)}).catch(o=>{m(!1)})};return(e,o)=>{const c=g,d=h,f=v;return C(),U(f,{isButtonBack:"",title:"Додати транзакцію"},{header:r(()=>[i(c,{onClick:p,class:"hidden lg:block"},{default:r(()=>[u(" Створити ")]),_:1})]),content:r(()=>[i(d,{inputs:s(t),error:s(n),messageToUser:s(l),onUpdateInputs:_},null,8,["inputs","error","messageToUser"]),V("div",F,[i(c,{onClick:p,class:"lg:hidden mt-[25px]"},{default:r(()=>[u(" Створити ")]),_:1})])]),_:1})}}});export{lt as default};