import{_ as T}from"./Modal.vue.0c332ca5.js";import{_ as b,a as g,b as w,c as U}from"./Table.vue.86a68380.js";import{_ as $}from"./TransitionTableCell.vue.a913062a.js";import{_ as k}from"./CurrencyText.e0a25e6b.js";import{k as I,F as h,G as v,H as t,V as e,I as o,a as f,u as d,R as y}from"./swiper-vue.c2b88c58.js";import{_ as B}from"./Product.vue.4edd9c8d.js";import{_ as V}from"./ProfilePage.vue.284371ff.js";import"./ButtonOpacity.dc986b85.js";import"./Button.vue.fe528707.js";import"./nuxt-link.8b951553.js";import"./entry.67d43b7a.js";import"./ui.config.774b3127.js";import"./ArrowTop.cc30804c.js";import"./nuxt-icon.4dbfd0d2.js";import"./ArrowRight.5c48ce0f.js";import"./ButtonText.4228120b.js";import"./AlertDanger.799553f7.js";import"./TextPrimary.34ace5ec.js";import"./AlertSuccess.5218ce6d.js";import"./Header2.700b2c28.js";import"./ModalTitle.vue.2fdf3e12.js";import"./LabelProfile.vue.10d7d3b4.js";import"./SelectVariant.vue.583d056a.js";import"./SelectProfile.vue.37327d60.js";import"./tw-merge.d5dfc584.js";import"./useFormGroup.807bc207.js";import"./Radio.f44b8754.js";import"./uid.12f507af.js";import"./SelectSubwarehouse.vue.f4d99a81.js";import"./DivBorderBg.e876b08d.js";const O=I({__name:"TableItemVariation",props:{variation:{}},emits:["showOrderDetails"],setup(x,{emit:_}){const l=x,m=_,p=()=>{m("showOrderDetails",l.variation._id)};return(c,r)=>{const n=$,i=k,s=b,u=g;return h(),v(u,{isMobileClose:!0},{header:t(()=>[e(" S ")]),elements:t(({active:a})=>[o(n,{class:"2xl:w-[25%]",vIf:a},{title:t(()=>[e("Розмір")]),value:t(()=>[e("S")]),_:2},1032,["vIf"]),o(n,{class:"2xl:w-[25%]",vIf:a},{title:t(()=>[e("Колір")]),value:t(()=>[e("Білий"),o(i)]),_:2},1032,["vIf"]),o(n,{class:"2xl:w-[25%]",vIf:a},{title:t(()=>[e("Ціна")]),value:t(()=>[e("1370₴")]),_:2},1032,["vIf"]),o(n,{class:"2xl:w-[25%]",vIf:a},{title:t(()=>[e("Кількість на складі")]),value:t(()=>[e("12")]),_:2},1032,["vIf"]),o(n,{vIf:a,class:"3xl:hidden col-span-2"},{title:t(()=>[o(s,{onClick:p},{default:t(()=>[e("Детальніше")]),_:1})]),_:2},1032,["vIf"])]),_:1})}}}),D={class:"flex justify-center"},_t=I({__name:"[product_id]",setup(x){const _=f(""),l=f(""),m=f({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),p=(c,r)=>{m.value[r]=c};return(c,r)=>{const n=T,i=w,s=O,u=U,a=B,C=V;return h(),v(C,{title:"Редагувати товар"},{header:t(()=>[o(n,{onClick:r[0]||(r[0]=()=>{}),class:"hidden lg:block"},{default:t(()=>[e(" Редагувати ")]),_:1})]),content:t(()=>[o(a,{inputs:d(m),error:d(_),messageToUser:d(l),onUpdateInputs:p},{table:t(()=>[o(u,{class:"bg-beige-light"},{headers:t(()=>[o(i,null,{default:t(()=>[e("Розмір")]),_:1}),o(i,null,{default:t(()=>[e("Колір")]),_:1}),o(i,null,{default:t(()=>[e("Ціна")]),_:1}),o(i,null,{default:t(()=>[e("Кількість на складі")]),_:1})]),items:t(()=>[o(s),o(s),o(s),o(s),o(s),o(s)]),_:1})]),_:1},8,["inputs","error","messageToUser"]),y("div",D,[o(n,{onClick:r[1]||(r[1]=()=>{}),class:"lg:hidden mt-[25px]"},{default:t(()=>[e(" Редагувати ")]),_:1})])]),_:1})}}});export{_t as default};