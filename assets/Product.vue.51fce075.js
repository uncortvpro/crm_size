import{_ as $}from"./AlertDanger.1693e37c.js";import{_ as k}from"./AlertSuccess.e09a98fd.js";import{_ as y}from"./Header2.7da6ddd9.js";import{a as T,b as h}from"./SelectProfile.vue.0db388dd.js";import{a as v,_ as D,b as N}from"./DivBorderBg.4736b3af.js";import{_ as P}from"./SelectVariant.vue.0c400f36.js";import{_ as F,a as I}from"./SelectSubwarehouse.vue.18a03a7b.js";import{f as x,o as m,c as A,j as i,w as n,d as t,t as c,m as _,a as j,b as e,F as E}from"./entry.3b1b6b86.js";const G={action:"#"},Q=x({__name:"Product",props:{error:{},messageToUser:{},inputs:{}},emits:["updateInputs"],setup(H,{emit:f}){const V=f,U=(o,s)=>{V("updateInputs",o,s)};return(o,s)=>{const b=$,g=k,p=y,u=T,l=h,r=v,d=D,S=P,w=F,C=I,B=N;return m(),A(E,null,[o.error?(m(),i(b,{key:0},{default:n(()=>[t(c(o.error),1)]),_:1})):_("",!0),o.messageToUser?(m(),i(g,{key:1},{default:n(()=>[t(c(o.messageToUser),1)]),_:1})):_("",!0),j("form",G,[e(B,{class:"w-full max-w-[1008px]"},{default:n(()=>[e(r,null,{default:n(()=>[e(p,{class:"col-span-2"},{default:n(()=>[t(" Інформація ")]),_:1}),e(r,{class:"!grid-cols-none col-span-2 md:col-span-1"},{default:n(()=>[e(l,{class:"col-span-2 md:col-span-1",label:"Назва товару:"},{default:n(()=>[e(u,{modelValue:o.inputs.headline,"onUpdate:modelValue":s[0]||(s[0]=a=>o.inputs.headline=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{class:"row-span-2 col-span-2 md:col-span-1",label:"Опис товару:"},{default:n(()=>[e(d,{modelValue:o.inputs.description,"onUpdate:modelValue":s[1]||(s[1]=a=>o.inputs.description=a),class:"min-h-[80px] md:min-h-[120px]"},null,8,["modelValue"])]),_:1}),e(p,{class:"col-span-2"},{default:n(()=>[t(" Додаткова інформація ")]),_:1}),e(l,{class:"col-span-2 md:col-span-1",label:"Обрати статус товару:"},{default:n(()=>[e(S,{valueSelect:o.inputs.status,typeSelect:"status",typeVariant:"product",onUpdateValue:U},null,8,["valueSelect"])]),_:1}),e(l,{class:"col-span-2 md:col-span-1",label:"Склад:"},{default:n(()=>[e(w)]),_:1}),e(l,{label:"Підсклад:",class:"col-span-2 md:col-span-1"},{default:n(()=>[e(C,{modelValue:o.inputs.status,"onUpdate:modelValue":s[2]||(s[2]=a=>o.inputs.status=a)},null,8,["modelValue"])]),_:1}),e(l,{class:"col-span-2 md:col-span-1 row-span-2",label:"Коментар:"},{default:n(()=>[e(d,{modelValue:o.inputs.comment,"onUpdate:modelValue":s[3]||(s[3]=a=>o.inputs.comment=a),class:"min-h-[80px] md:h-full md:max-h-[120px]"},null,8,["modelValue"])]),_:1}),e(l,{label:"Категорія:",class:"col-span-2 md:col-span-1"},{default:n(()=>[e(u,{modelValue:o.inputs.responsible,"onUpdate:modelValue":s[4]||(s[4]=a=>o.inputs.responsible=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])],64)}}});export{Q as _};
