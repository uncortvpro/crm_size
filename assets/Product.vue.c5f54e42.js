import{_ as Z}from"./AlertDanger.e2355836.js";import{_ as J}from"./AlertSuccess.2999cc75.js";import{_ as D}from"./Header2.ea895c44.js";import{_ as F}from"./ModalTitle.vue.5436b0e2.js";import{_ as R}from"./LabelProfile.vue.3e32a02a.js";import{a as K,_ as X,b as ee}from"./SelectVariant.vue.9e1f81d0.js";import{_ as oe,a as le}from"./SelectSubwarehouse.vue.0c8423a4.js";import{_ as L}from"./DivBorderBg.58473391.js";import{_ as j,a as H}from"./InputImage.vue.cc3e5eb5.js";import{u as N}from"./useBase64.1efa7b71.js";import{k as S,a as P,b as O,F as d,G as x,H as l,R as i,I as e,Q as $,u as I,Z as C,f as q,a4 as te,V as s,Y as G,a2 as B,a3 as T,U as w}from"./swiper-vue.6e4b9487.js";import ae from"./Cross.da19ed6d.js";import{_ as ne}from"./ButtonText.40c98744.js";import{_ as se}from"./entry.a7db78e0.js";import{_ as ue}from"./ButtonOpacityBorder.b20bc0a5.js";import{a as ie,b as pe,c as re}from"./Table.vue.d83bd75d.js";import me from"./AddImage.f29940f9.js";import{_ as de}from"./TransitionTableCell.vue.8666db8d.js";import{_ as ce}from"./InputProfileTable.4eccab86.js";import{_ as _e}from"./CurrencyText.d295505c.js";import{_ as fe}from"./ButtonOpacityDelete.b5df1415.js";const ve={class:"relative w-[100px] h-[100px] 2xl:w-[110px] 2xl:h-[110px] overflow-hidden rounded-[3px] bg-beige md:rounded-[3px]"},Ve={class:"absolute left-0 top-0 z-10 h-full w-full cursor-pointer"},xe=["src"],ge=i("div",{class:"absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[5px] xl:gap-[10px]"},[i("span",{class:"relative h-[12px] w-[12px] before:absolute before:inset-0 before:m-auto before:h-[100%] before:w-[1px] before:bg-beige-1 after:absolute after:inset-0 after:m-auto after:h-[100%] after:w-[1px] after:rotate-[90deg] after:bg-beige-1 md:h-[16px] md:w-[16px] xl:h-[20px] xl:w-[20px]"})],-1),be=S({__name:"AddingPhotoProduct",props:{modelValue:{}},emits:["updateInput","update:modelValue"],setup(U,{emit:g}){const V=g,p=P(),a=P(),r=()=>{const o=new FileReader;o.onload=()=>{var n;const t=typeof o.result=="string"?(n=o.result)==null?void 0:n.split(",")[1]:"";a.value=t,V("update:modelValue",a.value)},o.readAsDataURL(p.value)};return O(p,()=>{r()}),(o,t)=>{const n=j,v=H;return d(),x(v,{modelValue:I(p),"onUpdate:modelValue":t[0]||(t[0]=c=>q(p)?p.value=c:null)},{input_box:l(({image:c,updateInput:f})=>[i("div",ve,[i("label",Ve,[e(n,{class:"hidden",onUpdateInput:f},null,8,["onUpdateInput"])]),o.modelValue?(d(),$("img",{key:0,class:"absolute block w-full h-full z-10 top-0 object-cover left-0",src:("useBase64"in o?o.useBase64:I(N))(o.modelValue),alt:""},null,8,xe)):C("",!0),ge])]),_:1},8,["modelValue"])}}}),Ue={};function he(U,g){const V=ae,p=ne;return d(),x(p,{class:"!text-[12px] flex items-center gap-[5px]"},{default:l(()=>[e(V,{class:"!w-[10px] !h-[10px] mt-[2px] stroke-black"}),i("span",null,[te(U.$slots,"default")])]),_:3})}const we=se(Ue,[["render",he]]),$e=["onSubmit"],Ie={class:"flex flex-col"},ye={class:"mt-[15px] md:mt-[20px] xl:mt-[25px]"},ke=S({__name:"AddProductVariations",props:{modelValue:{}},emits:["update:modelValue"],setup(U,{emit:g}){const V=U,p=g,a=P({sizes:[{value:""}],colors:[{value:""}]}),r=t=>{a.value[t].push({value:""})},o=()=>{const t=[];for(let n of a.value.sizes)for(let v of a.value.colors)t.push({size:n.value,colour:v.value,price:"0",in_stock:"0",photos:"",cost_price:"0"});p("update:modelValue",[...V.modelValue,...t]),a.value.colors=[{value:""}],a.value.sizes=[{value:""}]};return(t,n)=>{const v=D,c=F,f=R,m=we,_=ue,A=L;return d(),x(A,null,{default:l(()=>[e(v,{class:"text-center"},{default:l(()=>[s("Варіації")]),_:1}),i("form",{action:"#",onSubmit:G(o,["prevent"])},[i("div",Ie,[i("div",null,[e(f,{label:"Назва варіації:"},{default:l(()=>[e(c,{value:"Розмір",readonly:"",class:""})]),_:1}),e(f,{class:"mt-[10px]",label:"Опції:"},{default:l(()=>[(d(!0),$(B,null,T(I(a).sizes,(b,y)=>(d(),x(c,{required:"",key:y,modelValue:b.value,"onUpdate:modelValue":k=>b.value=k,class:""},null,8,["modelValue","onUpdate:modelValue"]))),128))]),_:1}),e(m,{onClick:n[0]||(n[0]=b=>r("sizes")),class:"mt-[10px] xl:mt-[15px]"},{default:l(()=>[s("Додати нову опцію")]),_:1})]),i("div",ye,[e(f,{label:"Назва варіації:"},{default:l(()=>[e(c,{value:"Колір",readonly:"",class:""})]),_:1}),e(f,{class:"mt-[10px]",label:"Опції:"},{default:l(()=>[(d(!0),$(B,null,T(I(a).colors,(b,y)=>(d(),x(c,{required:"",key:y,modelValue:b.value,"onUpdate:modelValue":k=>b.value=k,class:""},null,8,["modelValue","onUpdate:modelValue"]))),128))]),_:1}),e(m,{onClick:n[1]||(n[1]=b=>r("colors")),class:"mt-[10px] xl:mt-[15px]"},{default:l(()=>[s("Додати нову опцію")]),_:1})]),e(_,{type:"submit",class:"self-center mt-[25px] md:mt-[35px] 2xl:mt-[44px]"},{default:l(()=>[s("Зберегти зміни")]),_:1})])],40,$e)]),_:1})}}}),Ce={class:"relative w-[31px] h-[31px] overflow-hidden rounded-[3px] bg-beige md:rounded-[3px]"},Pe={class:"absolute left-0 top-0 z-10 h-full w-full cursor-pointer"},Se=["src"],Ae={class:"absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[5px] xl:gap-[10px]"},Be=S({__name:"AddingPhotoProductVariation",props:{modelValue:{}},emits:["updateInput","update:modelValue"],setup(U,{emit:g}){const V=g,p=P(),a=P(),r=()=>{const o=new FileReader;o.onload=()=>{var n;const t=typeof o.result=="string"?(n=o.result)==null?void 0:n.split(",")[1]:"";a.value=t,V("update:modelValue",a.value)},o.readAsDataURL(p.value)};return O(p,()=>{r()}),(o,t)=>{const n=j,v=me,c=H;return d(),x(c,{modelValue:I(p),"onUpdate:modelValue":t[0]||(t[0]=f=>q(p)?p.value=f:null)},{input_box:l(({image:f,updateInput:m})=>[i("div",Ce,[i("label",Pe,[e(n,{class:"hidden",onUpdateInput:m},null,8,["onUpdateInput"])]),o.modelValue?(d(),$("img",{key:0,class:"absolute block w-full h-full z-10 top-0 object-cover left-0",src:("useBase64"in o?o.useBase64:I(N))(o.modelValue),alt:""},null,8,Se)):C("",!0),i("div",Ae,[e(v,{class:"text-beige-2"})])])]),_:1},8,["modelValue"])}}}),Te={class:"3xl:!hidden"},ze={class:"!hidden 3xl:!block"},De={class:"flex items-center gap-[5px] md:gap-[25px]"},Fe=S({__name:"TableItemVariation",props:{variation:{}},emits:["deleteAction"],setup(U,{emit:g}){const V=g,p=()=>{V("deleteAction")};return(a,r)=>{const o=Be,t=de,n=ce,v=_e,c=fe,f=ie;return d(),x(f,{isMobileClose:!0},{header:l(()=>[s(w(a.variation.size)+", "+w(a.variation.colour),1)]),elements:l(({active:m})=>[e(t,{class:"3xl:w-[10%]",vIf:m},{title:l(()=>[i("div",Te,[e(o,{modelValue:a.variation.photos,"onUpdate:modelValue":r[0]||(r[0]=_=>a.variation.photos=_)},null,8,["modelValue"])])]),value:l(()=>[i("div",ze,[e(o,{modelValue:a.variation.photos,"onUpdate:modelValue":r[1]||(r[1]=_=>a.variation.photos=_)},null,8,["modelValue"])])]),_:2},1032,["vIf"]),e(t,{class:"3xl:w-[18%]",vIf:m},{title:l(()=>[s("Розмір")]),value:l(()=>[s(w(a.variation.size),1)]),_:2},1032,["vIf"]),e(t,{class:"3xl:w-[18%]",vIf:m},{title:l(()=>[s("Колір")]),value:l(()=>[s(w(a.variation.colour),1)]),_:2},1032,["vIf"]),e(t,{class:"3xl:w-[18%]",vIf:m},{title:l(()=>[s("Собівартість товару")]),value:l(()=>[e(n,{type:"number",modelValue:a.variation.cost_price,"onUpdate:modelValue":r[2]||(r[2]=_=>a.variation.cost_price=_)},null,8,["modelValue"]),e(v)]),_:2},1032,["vIf"]),e(t,{class:"3xl:w-[18%]",vIf:m},{title:l(()=>[s("Ціна")]),value:l(()=>[e(n,{type:"number",modelValue:a.variation.price,"onUpdate:modelValue":r[3]||(r[3]=_=>a.variation.price=_)},null,8,["modelValue"]),e(v)]),_:2},1032,["vIf"]),e(t,{class:"3xl:w-[18%]",vIf:m},{title:l(()=>[s("Кількість на складі")]),value:l(()=>[e(n,{type:"number",modelValue:a.variation.in_stock,"onUpdate:modelValue":r[4]||(r[4]=_=>a.variation.in_stock=_)},null,8,["modelValue"])]),_:2},1032,["vIf"])]),"additional-buttons":l(()=>[i("div",De,[e(c,{class:"flex-shrink-0",onClick:G(p,["stop"])},null,8,["onClick"])])]),_:1})}}}),Re={class:"mt-[30px]"},Le={class:"flex flex-col 2xl:grid grid-cols-12 2xl:grid-rows-product-page-grid gap-[25px] lg:gap-[30px] 2xl:gap-y-[50px] 2xl:gap-x-[100px]"},je={class:"col-span-12 2xl:col-span-7"},He={action:"#"},Ne={class:"col-span-12 2xl:col-span-5 2xl:row-span-6 flex flex-col gap-[25px] lg:gap-[30px]"},Oe={class:"col-span-12 2xl:col-span-7"},mo=S({__name:"Product",props:{error:{},messageToUser:{},inputs:{}},emits:["updateInputs"],setup(U,{emit:g}){const V=U,p=g,a=(o,t)=>{p("updateInputs",o,t)},r=o=>{const t=V.inputs.variations.filter(n=>n!==o);a(t,"variations")};return(o,t)=>{const n=Z,v=J,c=D,f=F,m=R,_=K,A=X,b=ee,y=oe,k=le,z=L,M=be,E=ke,h=pe,Q=Fe,W=re;return d(),$("div",Re,[o.error?(d(),x(n,{key:0},{default:l(()=>[s(w(o.error),1)]),_:1})):C("",!0),o.messageToUser?(d(),x(v,{key:1},{default:l(()=>[s(w(o.messageToUser),1)]),_:1})):C("",!0),i("div",Le,[i("div",je,[i("form",He,[e(z,{class:"w-full"},{default:l(()=>[e(_,null,{default:l(()=>[e(c,{class:"col-span-2"},{default:l(()=>[s(" Інформація ")]),_:1}),e(_,{class:"!grid-cols-none col-span-2 md:col-span-1"},{default:l(()=>[e(m,{class:"col-span-2 md:col-span-1",label:"Назва товару:"},{default:l(()=>[e(f,{modelValue:o.inputs.name,"onUpdate:modelValue":t[0]||(t[0]=u=>o.inputs.name=u)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{class:"row-span-2 col-span-2 md:col-span-1",label:"Опис товару:"},{default:l(()=>[e(A,{modelValue:o.inputs.description,"onUpdate:modelValue":t[1]||(t[1]=u=>o.inputs.description=u),class:"min-h-[80px] md:min-h-[120px]"},null,8,["modelValue"])]),_:1}),e(c,{class:"col-span-2"},{default:l(()=>[s(" Додаткова інформація ")]),_:1}),e(m,{class:"col-span-2 md:col-span-1",label:"Обрати статус товару:"},{default:l(()=>[e(b,{modelValue:o.inputs.status,"onUpdate:modelValue":t[2]||(t[2]=u=>o.inputs.status=u),valueSelect:o.inputs.status,typeSelect:"status",typeVariant:"product",onUpdateValue:a},null,8,["modelValue","valueSelect"])]),_:1}),e(m,{class:"col-span-2 md:col-span-1",label:"Склад:"},{default:l(()=>[e(y,{modelValue:o.inputs.warehouse,"onUpdate:modelValue":t[3]||(t[3]=u=>o.inputs.warehouse=u),valueSelect:o.inputs.warehouse},null,8,["modelValue","valueSelect"])]),_:1}),e(m,{label:"Підсклад:",class:"col-span-2 md:col-span-1"},{default:l(()=>[e(k,{modelValue:o.inputs.subwarehouse,"onUpdate:modelValue":t[4]||(t[4]=u=>o.inputs.subwarehouse=u)},null,8,["modelValue"])]),_:1}),e(m,{class:"col-span-2 md:col-span-1 row-span-2",label:"Коментар:"},{default:l(()=>[e(A,{modelValue:o.inputs.comment,"onUpdate:modelValue":t[5]||(t[5]=u=>o.inputs.comment=u),class:"min-h-[80px] md:h-full md:max-h-[120px]"},null,8,["modelValue"])]),_:1}),e(m,{label:"Категорія:",class:"col-span-2 md:col-span-1"},{default:l(()=>[e(b,{modelValue:o.inputs.category,"onUpdate:modelValue":t[6]||(t[6]=u=>o.inputs.category=u),valueSelect:o.inputs.category,typeSelect:"category",typeVariant:"product_category",onUpdateValue:a},null,8,["modelValue","valueSelect"])]),_:1})]),_:1})]),_:1})])]),i("div",Ne,[e(z,{class:"flex flex-col items-center"},{default:l(()=>[e(c,{class:"text-center mb-[15px] block xl:mb-[20px]"},{default:l(()=>[s("Фото")]),_:1}),e(M,{modelValue:o.inputs.photo,"onUpdate:modelValue":t[7]||(t[7]=u=>o.inputs.photo=u)},null,8,["modelValue"])]),_:1}),e(E,{modelValue:o.inputs.variations,"onUpdate:modelValue":t[8]||(t[8]=u=>o.inputs.variations=u)},null,8,["modelValue"])]),i("div",Oe,[o.inputs.variations.length>0?(d(),x(W,{key:0,pagination:!1,class:"bg-beige-light !m-0"},{headers:l(()=>[e(h),e(h,null,{default:l(()=>[s("Розмір")]),_:1}),e(h,null,{default:l(()=>[s("Колір")]),_:1}),e(h,null,{default:l(()=>[s("Собівартість товару")]),_:1}),e(h,null,{default:l(()=>[s("Ціна")]),_:1}),e(h,null,{default:l(()=>[s("Кількість на складі")]),_:1})]),items:l(()=>[(d(!0),$(B,null,T(o.inputs.variations,(u,Y)=>(d(),x(Q,{key:Y,variation:u,onDeleteAction:qe=>r(u)},null,8,["variation","onDeleteAction"]))),128))]),_:1})):C("",!0)])])])}}});export{mo as _};
