import{a as B}from"./SelectProfile.vue.54b369fa.js";import{u as E}from"./useSorting.9908e62e.js";import{g as F,f as x,e as P}from"./entry.1ece7de6.js";import{a as n,k as A,l as U,F as k,G as O,u as m,H as M,I as b,f as y,V as I,Q as D}from"./swiper-vue.7d7207a4.js";import{_ as G}from"./LabelProfile.vue.ba6cf204.js";import{_ as H,a as L}from"./ModalTitle.vue.08a3dde7.js";import{_ as Q}from"./ButtonOpacityBorder.a8320009.js";import{w as R}from"./index.1876d4a2.js";const T=F("warehousesStore",()=>{const h=[{id:1,name:"Склад готової продукції",secondName:"finishedWarehouse"},{id:2,name:"Склад дистриб’ютора",secondName:"distributorWarehouse"},{id:3,name:"Склад матеріалів",secondName:"warehouseMaterials"}],p=n([]),c=n({finishedWarehouse:"",distributorWarehouse:"",warehouseMaterials:""}),f=n({finishedWarehouse:[],distributorWarehouse:[],warehouseMaterials:[]}),a=n({finishedWarehouse:1,distributorWarehouse:1,warehouseMaterials:1}),t=n({finishedWarehouse:"",distributorWarehouse:"",warehouseMaterials:""}),u=n({finishedWarehouse:1,distributorWarehouse:1,warehouseMaterials:1}),i=(e,o)=>{c.value[s(o)]=e,l(o)},_=(e,o)=>{f.value[s(o)]=e},S=(e,o)=>{if(e===0)return!1;a.value[s(o)]=e,l(o)},v=(e,o)=>{u.value[s(o)]=e};function s(e){const o=h.find(g=>g.id===e);return(o==null?void 0:o.secondName)||h[0].secondName}function V(e){const o=h.find(g=>g.id===e);return(o==null?void 0:o.name)||h[0].name}const w=n({finishedWarehouse:"",distributorWarehouse:"",warehouseMaterials:""}),d=n({finishedWarehouse:!1,distributorWarehouse:!1,warehouseMaterials:!1}),r=(e,o)=>{E(e,d,w,l,o,s)};function W(){x(`${P()}/subwarehouses`).then(e=>{p.value=e.subwarehouses})}function $(e,o){x(`${P()}/delete_product`,{body:{product_id:e}}).then(g=>{g.message===!0&&l(o)})}function N(e,o){t.value[s(o)]=e,l(o)}function l(e){x(`${P()}/products`,{body:{page:a.value[s(e)],per_page:10,keyword:t.value[s(e)],warehouse:V(e),subwarehouse:c.value[s(e)],sort_by:w.value[s(e)],reverse_sort:d.value[s(e)]}}).then(o=>{_(o.products,e),v(o.total_pages,e)}).catch(o=>{console.error(o)})}return{warehouseProducts:f,fetchProducts:l,searchProducts:N,warehouses:h,warehouseType:s,setSubwarehouse:i,deleteProducts:$,page:a,endPage:u,setPage:S,setSorting:r,sorting:w,reverseSorting:d,fetchSubwarehouses:W,allSubwarehouses:p}}),j=A({__name:"SelectWarehouse",setup(h){const p=T(),c=U(()=>p.warehouses),f=U(()=>c.value.map(a=>a.name));return(a,t)=>{const u=B;return k(),O(u,{options:m(f)},null,8,["options"])}}}),q=A({__name:"ModalAddSubwarehouse",emits:["actionSuccess"],setup(h,{emit:p}){const c=p,f=()=>{c("actionSuccess")},a=n(""),t=n(""),u=()=>{x(`${P()}/add_subwarehouse`,{body:{warehouse:t.value,subwarehouse:a.value}}).then(i=>{i.message&&f()})};return(i,_)=>{const S=j,v=G,s=H,V=Q,w=L;return k(),O(w,{title:"Додати підсклад",ui:{width:"!max-w-[414px]"}},{default:M(()=>[b(v,{class:"mt-[15px] md:mt-[20px] col-span-2 md:col-span-1",label:"Склад:"},{default:M(()=>[b(S,{modelValue:m(t),"onUpdate:modelValue":_[0]||(_[0]=d=>y(t)?t.value=d:null),valueSelect:m(t)},null,8,["modelValue","valueSelect"])]),_:1}),b(v,{class:"mt-[15px] md:mt-[20px]",label:"Введіть підсклад:"},{default:M(()=>[b(s,{modelValue:m(a),"onUpdate:modelValue":_[1]||(_[1]=d=>y(a)?a.value=d:null)},null,8,["modelValue"])]),_:1}),b(V,{disabled:!m(a)||!m(t),onClick:u,class:"self-center mt-[25px]"},{default:M(()=>[I("Зберегти")]),_:1},8,["disabled"])]),_:1})}}}),C="+ Додати інший підсклад",se=A({__name:"SelectSubwarehouse",props:{modelValue:{},placeholder:{type:Boolean}},emits:["actionUpdate","update:modelValue"],setup(h,{emit:p}){const c=p,f=()=>{c("actionUpdate")},a=()=>{c("update:modelValue",u.value)},t=T(),u=n(""),i=n(!1),_=()=>{t.fetchSubwarehouses()},S=r=>{i.value=r},v=U(()=>t.allSubwarehouses),s=U(()=>v.value.map(r=>r.subwarehouse)),V=U(()=>[...s.value,C]),w=r=>{if(r===C)return S(!0),!1;a(),f()};R(()=>u.value,()=>{w(u.value)});const d=async()=>{await _(),S(!1)};return(r,W)=>{const $=B,N=q;return k(),D("div",null,[b($,{placeholder:r.placeholder?"Оберіть склад":void 0,modelValue:m(u),"onUpdate:modelValue":W[0]||(W[0]=l=>y(u)?u.value=l:null),options:m(V),valueSelect:r.modelValue},null,8,["placeholder","modelValue","options","valueSelect"]),b(N,{modelValue:m(i),"onUpdate:modelValue":W[1]||(W[1]=l=>y(i)?i.value=l:null),onActionSuccess:d},null,8,["modelValue"])])}}});export{j as _,se as a,T as u};