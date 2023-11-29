import{a as N}from"./SelectProfile.vue.6e188d44.js";import{g as k,f as U,e as x}from"./entry.c96ea7b3.js";import{a as l,k as g,l as S,F as M,G as $,u as c,H as v,I as _,f as V,V as C,Q as B}from"./swiper-vue.c8cb2f00.js";import{_ as O}from"./LabelProfile.vue.2af0f154.js";import{_ as T}from"./InputProfile.vue.8ae544ab.js";import{_ as E}from"./disposables.60fc7ce5.js";import{_ as F}from"./ModalTitle.vue.2f0728f3.js";import{w as I}from"./index.fe933732.js";const D=k("warehousesStore",()=>{const i=[{id:1,name:"Склад готової продукції",secondName:"finishedWarehouse"},{id:2,name:"Склад дистриб’ютора",secondName:"distributorWarehouse"},{id:3,name:"Склад матеріалів",secondName:"warehouseMaterials"}],d=l({finishedWarehouse:"",distributorWarehouse:"",warehouseMaterials:""}),s=l({finishedWarehouse:[],distributorWarehouse:[],warehouseMaterials:[]}),n=l({finishedWarehouse:1,distributorWarehouse:1,warehouseMaterials:1}),a=l({finishedWarehouse:"",distributorWarehouse:"",warehouseMaterials:""}),t=l({finishedWarehouse:1,distributorWarehouse:1,warehouseMaterials:1}),p=(o,e)=>{d.value[u(e)]=o,h(e)},f=(o,e)=>{s.value[u(e)]=o},r=(o,e)=>{t.value[u(e)]=o};function u(o){const e=i.find(m=>m.id===o);return(e==null?void 0:e.secondName)||i[0].secondName}function w(o){const e=i.find(m=>m.id===o);return(e==null?void 0:e.name)||i[0].name}function b(o,e){a.value[u(e)]=o,h(e)}function h(o){U(`${x()}/products`,{body:{page:n.value[u(o)],per_page:10,keyword:a.value[u(o)],warehouse:w(o),subwarehouse:d.value[u(o)]}}).then(e=>{f(e.products,o),r(e.total_pages,o),console.log(s.value)}).catch(e=>{console.error(e)})}return{warehouseProducts:s,fetchProducts:h,searchProducts:b,warehouses:i,warehouseType:u,setSubwarehouse:p}}),G=g({__name:"SelectWarehouse",setup(i){const d=D(),s=S(()=>d.warehouses),n=S(()=>s.value.map(a=>a.name));return(a,t)=>{const p=N;return M(),$(p,{options:c(n)},null,8,["options"])}}}),H=g({__name:"ModalAddSubwarehouse",emits:["actionSuccess"],setup(i,{emit:d}){const s=d,n=()=>{s("actionSuccess")},a=l(""),t=l(""),p=()=>{U(`${x()}/add_subwarehouse`,{body:{warehouse:t.value,subwarehouse:a.value}}).then(f=>{f.message&&n()})};return(f,r)=>{const u=G,w=O,b=T,h=E,o=F;return M(),$(o,{title:"Додати підсклад",ui:{width:"!max-w-[414px]"}},{default:v(()=>[_(w,{class:"mt-[15px] md:mt-[20px] col-span-2 md:col-span-1",label:"Склад:"},{default:v(()=>[_(u,{modelValue:c(t),"onUpdate:modelValue":r[0]||(r[0]=e=>V(t)?t.value=e:null),valueSelect:c(t)},null,8,["modelValue","valueSelect"])]),_:1}),_(w,{class:"mt-[15px] md:mt-[20px]",label:"Введіть підсклад:"},{default:v(()=>[_(b,{modelValue:c(a),"onUpdate:modelValue":r[1]||(r[1]=e=>V(a)?a.value=e:null)},null,8,["modelValue"])]),_:1}),_(h,{disabled:!c(a)||!c(t),onClick:p,class:"self-center mt-[25px]"},{default:v(()=>[C("Зберегти")]),_:1},8,["disabled"])]),_:1})}}}),P="+ Додати інший підсклад",X=g({__name:"SelectSubwarehouse",props:{modelValue:{},placeholder:{type:Boolean}},emits:["actionUpdate","update:modelValue"],setup(i,{emit:d}){const s=l(""),n=l(!1),a=e=>{n.value=e},t=d,p=()=>{t("actionUpdate")},f=()=>{t("update:modelValue",s.value)},r=l([]),u=S(()=>r.value.map(e=>e.subwarehouse)),w=S(()=>[...u.value,P]),b=()=>{U(`${x()}/subwarehouses`).then(e=>{r.value=e.subwarehouses})},h=e=>{if(e===P)return a(!0),!1;f(),p()};b(),I(()=>s.value,()=>{h(s.value)});const o=async()=>{await b(),a(!1)};return(e,m)=>{const y=N,A=H;return M(),B("div",null,[_(y,{placeholder:e.placeholder?"Оберіть склад":void 0,modelValue:c(s),"onUpdate:modelValue":m[0]||(m[0]=W=>V(s)?s.value=W:null),options:c(w),valueSelect:e.modelValue},null,8,["placeholder","modelValue","options","valueSelect"]),_(A,{modelValue:c(n),"onUpdate:modelValue":m[1]||(m[1]=W=>V(n)?n.value=W:null),onActionSuccess:o},null,8,["modelValue"])])}}});export{G as _,X as a,D as u};
