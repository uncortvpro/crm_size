import{_ as B}from"./AlertDanger.f2166624.js";import{_ as w}from"./AlertSuccess.cee7e446.js";import{_ as y}from"./Header2.982283e5.js";import{a as T}from"./SelectProfile.vue.66df8240.js";import{_ as D}from"./LabelProfile.vue.6bc478a5.js";import{a as I,_ as N}from"./DivGridForm.10e2c40a.js";import{_ as P}from"./SelectVariant.vue.acac0c57.js";import{_ as F,a as A}from"./SelectSubwarehouse.vue.7c67719d.js";import{_ as G}from"./DivBorderBg.bfa3bfc5.js";import{k as H,F as p,Q as E,G as c,H as s,V as m,U as _,Z as f,R as t,I as o,a2 as V,a4 as L}from"./swiper-vue.4e3db160.js";const Q={class:"grid grid-cols-12"},R={class:"col-span-12 2xl:col-span-7"},W={action:"#"},Z={class:"col-span-12 2xl:col-span-7"},oe=H({__name:"Product",props:{error:{},messageToUser:{},inputs:{}},emits:["updateInputs"],setup(j,{emit:U}){const b=U,g=(e,l)=>{b("updateInputs",e,l)};return(e,l)=>{const S=B,v=w,r=y,u=T,a=D,d=I,i=N,$=P,h=F,C=A,k=G;return p(),E(L,null,[e.error?(p(),c(S,{key:0},{default:s(()=>[m(_(e.error),1)]),_:1})):f("",!0),e.messageToUser?(p(),c(v,{key:1},{default:s(()=>[m(_(e.messageToUser),1)]),_:1})):f("",!0),t("div",Q,[t("div",R,[t("form",W,[o(k,{class:"w-full"},{default:s(()=>[o(d,null,{default:s(()=>[o(r,{class:"col-span-2"},{default:s(()=>[m(" Інформація ")]),_:1}),o(d,{class:"!grid-cols-none col-span-2 md:col-span-1"},{default:s(()=>[o(a,{class:"col-span-2 md:col-span-1",label:"Назва товару:"},{default:s(()=>[o(u,{modelValue:e.inputs.headline,"onUpdate:modelValue":l[0]||(l[0]=n=>e.inputs.headline=n)},null,8,["modelValue"])]),_:1})]),_:1}),o(a,{class:"row-span-2 col-span-2 md:col-span-1",label:"Опис товару:"},{default:s(()=>[o(i,{modelValue:e.inputs.description,"onUpdate:modelValue":l[1]||(l[1]=n=>e.inputs.description=n),class:"min-h-[80px] md:min-h-[120px]"},null,8,["modelValue"])]),_:1}),o(r,{class:"col-span-2"},{default:s(()=>[m(" Додаткова інформація ")]),_:1}),o(a,{class:"col-span-2 md:col-span-1",label:"Обрати статус товару:"},{default:s(()=>[o($,{valueSelect:e.inputs.status,typeSelect:"status",typeVariant:"product",onUpdateValue:g},null,8,["valueSelect"])]),_:1}),o(a,{class:"col-span-2 md:col-span-1",label:"Склад:"},{default:s(()=>[o(h)]),_:1}),o(a,{label:"Підсклад:",class:"col-span-2 md:col-span-1"},{default:s(()=>[o(C,{modelValue:e.inputs.status,"onUpdate:modelValue":l[2]||(l[2]=n=>e.inputs.status=n)},null,8,["modelValue"])]),_:1}),o(a,{class:"col-span-2 md:col-span-1 row-span-2",label:"Коментар:"},{default:s(()=>[o(i,{modelValue:e.inputs.comment,"onUpdate:modelValue":l[3]||(l[3]=n=>e.inputs.comment=n),class:"min-h-[80px] md:h-full md:max-h-[120px]"},null,8,["modelValue"])]),_:1}),o(a,{label:"Категорія:",class:"col-span-2 md:col-span-1"},{default:s(()=>[o(u,{modelValue:e.inputs.responsible,"onUpdate:modelValue":l[4]||(l[4]=n=>e.inputs.responsible=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])]),t("div",null,[V(e.$slots,"")]),t("div",Z,[V(e.$slots,"table")])])],64)}}});export{oe as _};
