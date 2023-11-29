import{_ as T}from"./Modal.vue.684dd50f.js";import{_ as b,a as g,b as w,c as U}from"./Table.vue.bc21cef9.js";import{_ as $}from"./TransitionTableCell.vue.58c62f12.js";import{_ as k}from"./CurrencyText.3d61b5e4.js";import{k as I,F as h,G as v,H as t,V as e,I as o,a as f,u as d,R as y}from"./swiper-vue.c2b88c58.js";import{_ as B}from"./Product.vue.057e6914.js";import{_ as V}from"./ProfilePage.vue.e06eb2c8.js";import"./ButtonOpacity.1ca87902.js";import"./Button.vue.09b0195d.js";import"./nuxt-link.793ce550.js";import"./entry.e567a446.js";import"./ui.config.28a3590b.js";import"./ArrowTop.abb4671e.js";import"./nuxt-icon.c7004446.js";import"./ArrowRight.e5c2102e.js";import"./ButtonText.e961c12d.js";import"./AlertDanger.be139bea.js";import"./TextPrimary.6c84577b.js";import"./AlertSuccess.f7f5dccb.js";import"./Header2.aa18153b.js";import"./ModalTitle.vue.dd0c4a1d.js";import"./LabelProfile.vue.29b0aa91.js";import"./SelectVariant.vue.6bc193be.js";import"./SelectProfile.vue.5e641d36.js";import"./tw-merge.c375e922.js";import"./useFormGroup.a119c6c7.js";import"./Radio.447f2dd6.js";import"./uid.12f507af.js";import"./SelectSubwarehouse.vue.e155e4ba.js";import"./DivBorderBg.123898ef.js";const O=I({__name:"TableItemVariation",props:{variation:{}},emits:["showOrderDetails"],setup(x,{emit:_}){const l=x,m=_,p=()=>{m("showOrderDetails",l.variation._id)};return(c,r)=>{const n=$,i=k,s=b,u=g;return h(),v(u,{isMobileClose:!0},{header:t(()=>[e(" S ")]),elements:t(({active:a})=>[o(n,{class:"2xl:w-[25%]",vIf:a},{title:t(()=>[e("Розмір")]),value:t(()=>[e("S")]),_:2},1032,["vIf"]),o(n,{class:"2xl:w-[25%]",vIf:a},{title:t(()=>[e("Колір")]),value:t(()=>[e("Білий"),o(i)]),_:2},1032,["vIf"]),o(n,{class:"2xl:w-[25%]",vIf:a},{title:t(()=>[e("Ціна")]),value:t(()=>[e("1370₴")]),_:2},1032,["vIf"]),o(n,{class:"2xl:w-[25%]",vIf:a},{title:t(()=>[e("Кількість на складі")]),value:t(()=>[e("12")]),_:2},1032,["vIf"]),o(n,{vIf:a,class:"3xl:hidden col-span-2"},{title:t(()=>[o(s,{onClick:p},{default:t(()=>[e("Детальніше")]),_:1})]),_:2},1032,["vIf"])]),_:1})}}}),D={class:"flex justify-center"},_t=I({__name:"[product_id]",setup(x){const _=f(""),l=f(""),m=f({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),p=(c,r)=>{m.value[r]=c};return(c,r)=>{const n=T,i=w,s=O,u=U,a=B,C=V;return h(),v(C,{title:"Редагувати товар"},{header:t(()=>[o(n,{onClick:r[0]||(r[0]=()=>{}),class:"hidden lg:block"},{default:t(()=>[e(" Редагувати ")]),_:1})]),content:t(()=>[o(a,{inputs:d(m),error:d(_),messageToUser:d(l),onUpdateInputs:p},{table:t(()=>[o(u,{class:"bg-beige-light"},{headers:t(()=>[o(i,null,{default:t(()=>[e("Розмір")]),_:1}),o(i,null,{default:t(()=>[e("Колір")]),_:1}),o(i,null,{default:t(()=>[e("Ціна")]),_:1}),o(i,null,{default:t(()=>[e("Кількість на складі")]),_:1})]),items:t(()=>[o(s),o(s),o(s),o(s),o(s),o(s)]),_:1})]),_:1},8,["inputs","error","messageToUser"]),y("div",D,[o(n,{onClick:r[1]||(r[1]=()=>{}),class:"lg:hidden mt-[25px]"},{default:t(()=>[e(" Редагувати ")]),_:1})])]),_:1})}}});export{_t as default};