import{_ as h}from"./disposables.28b19e04.js";import{_ as v}from"./Order.vue.f58f1cfc.js";import{_ as g}from"./ProfilePage.vue.dfe81b5e.js";import{f as y,i as r,y as x,o as B,j as C,w as o,b as s,d as u,l as a,a as U,B as k,A as w}from"./entry.7e18eae5.js";import"./ButtonOpacity.99014ff8.js";import"./nuxt-link.51af7f6e.js";import"./AlertDanger.cc375051.js";import"./uid.0dae9c6c.js";import"./AlertSuccess.9b155fcf.js";import"./Header2.d4c6c01a.js";import"./SelectVariant.vue.366a770b.js";import"./SelectProfile.vue.f8a7a8e9.js";import"./tw-merge.7205049a.js";import"./ui.config.ca287e43.js";import"./index.ca0dae19.js";import"./index.09d836d6.js";import"./useFormGroup.83955626.js";import"./Modal.vue.0f8345e5.js";import"./ButtonOpacityDelete.1f925073.js";import"./CrossInCircle.09d503d2.js";import"./nuxt-icon.00703481.js";import"./Search.c91aebed.js";import"./cn.a642df04.js";import"./Delete.c5718822.js";import"./Table.vue.dcfb50ab.js";import"./ArrowTop.a94d16aa.js";import"./ArrowRight.ab4e0445.js";import"./ButtonText.d94497dc.js";import"./CurrencyText.ad61ee6a.js";import"./useBase64.1efa7b71.js";import"./ordersStore.a166818a.js";import"./useSorting.9414d803.js";const T={class:"flex justify-center"},ie=y({__name:"new_order",setup(b){const i=r(""),n=r(""),e=r({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),_=(t,c)=>{e.value[c]=t},p=t=>{if(t===!0)return n.value="Замовлення успішно створено",e.value={},!1;i.value="Щось не вийшло!"},m=()=>{k(`${w()}/add_order`,{body:{client:e.value.client,email:e.value.email,shipping:e.value.shipping,status:e.value.status,source:e.value.source,payment:e.value.payment,comment:e.value.comment,products:e.value.products}}).then(t=>{p(t.message)}).catch(t=>{p(t),console.log(t)})};return x(e,()=>{console.log(e.value)},{deep:!0}),(t,c)=>{const l=h,d=v,f=g;return B(),C(f,{title:"Додати замовлення"},{header:o(()=>[s(l,{onClick:m,class:"hidden lg:block"},{default:o(()=>[u(" Створити ")]),_:1})]),content:o(()=>[s(d,{inputs:a(e),error:a(i),messageToUser:a(n),onUpdateInputs:_},null,8,["inputs","error","messageToUser"]),U("div",T,[s(l,{onClick:m,class:"lg:hidden mt-[25px]"},{default:o(()=>[u(" Створити ")]),_:1})])]),_:1})}}});export{ie as default};
