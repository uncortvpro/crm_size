import{_ as f}from"./ButtonOpacityBorder.1f2ac977.js";import{_ as v}from"./Product.vue.bc52db24.js";import{_ as g}from"./ProfilePage.vue.f82ea350.js";import{f as y,e as k}from"./entry.898c0673.js";import{k as w,a as r,F as x,G as C,H as e,I as s,V as _,u as a,R as U}from"./swiper-vue.36f73e51.js";import"./ButtonOpacity.780ed2cd.js";import"./Button.vue.e3fb8d91.js";import"./nuxt-link.1f55300a.js";import"./AlertDanger.b816b03d.js";import"./TextPrimary.61ae8473.js";import"./AlertSuccess.eb669c18.js";import"./Header2.f049bf9f.js";import"./ModalTitle.vue.c57cba72.js";import"./Modal.vue.c9eae6b4.js";import"./ui.config.5e05e01d.js";import"./LabelProfile.vue.6b6d5235.js";import"./SelectVariant.vue.356e45a2.js";import"./SelectProfile.vue.5c9b5c98.js";import"./tw-merge.d8bd0e26.js";import"./index.138a22ef.js";import"./useFormGroup.240eb3f1.js";import"./Radio.066d92ac.js";import"./uid.12f507af.js";import"./SelectSubwarehouse.vue.d5bb3235.js";import"./useSorting.9908e62e.js";import"./DivBorderBg.fb4de90d.js";import"./InputImage.vue.14686b75.js";import"./useBase64.1efa7b71.js";import"./Cross.07497417.js";import"./nuxt-icon.d7959468.js";import"./ButtonText.2f59fa7f.js";import"./Table.vue.645d6582.js";import"./ArrowTop.27a17a69.js";import"./ArrowRight.abe8433c.js";import"./AddImage.61f16d5e.js";import"./TransitionTableCell.vue.e3cf9081.js";import"./CurrencyText.a64d6df9.js";import"./ButtonOpacityDelete.ae936d65.js";import"./Delete.c79342c0.js";const b={class:"flex justify-center"},_o=w({__name:"new_product",setup(B){const i=r(""),p=r(""),t=r({name:"",description:"",status:"",status_type:"product",category:"",warehouse:"",subwarehouse:"",comment:"",photo:"",variations:[]}),l=(o,c)=>{t.value[c]=o},n=o=>{if(o===!0)return p.value="Товар успішно створено",!1;i.value="Щось не вийшло!"},m=()=>{y(`${k()}/add_product`,{body:{name:t.value.name,description:t.value.description,status:t.value.status,status_type:"product",category:t.value.category,warehouse:t.value.warehouse,subwarehouse:t.value.subwarehouse,comment:t.value.comment,photo:t.value.photo,variations:t.value.variations.map(o=>({size:o.size,colour:o.colour,price:+o.price,in_stock:+o.in_stock,photos:[o.photos]}))}}).then(o=>{n(o.message)}).catch(o=>{n(o),console.log(o)})};return(o,c)=>{const u=f,d=v,h=g;return x(),C(h,{title:"Додати товар"},{header:e(()=>[s(u,{onClick:m,class:"hidden lg:block"},{default:e(()=>[_(" Створити ")]),_:1})]),content:e(()=>[s(d,{inputs:a(t),error:a(i),messageToUser:a(p),onUpdateInputs:l},null,8,["inputs","error","messageToUser"]),U("div",b,[s(u,{onClick:m,class:"lg:hidden mt-[25px]"},{default:e(()=>[_(" Створити ")]),_:1})])]),_:1})}}});export{_o as default};
