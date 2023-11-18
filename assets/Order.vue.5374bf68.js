import{_ as G}from"./AlertDanger.3f45526c.js";import{_ as J}from"./AlertSuccess.c66c03da.js";import{_ as E}from"./Header2.a91c7a94.js";import{a as K,f as F,b as Q,g as W,d as X,e as Y}from"./SelectVariant.vue.cfcdc7f8.js";import{_ as H}from"./ButtonOpacity.56d0f423.js";import{f as O,i as S,o as u,c as x,b as t,l as _,s as Z,a as U,F as A,v as I,j as C,w as e,d as a,t as y,m as b,B as ee,A as te,k as oe,q as se,n as ne}from"./entry.2c4ac607.js";import{o as N}from"./index.822b4d9b.js";import{w as j}from"./index.a6b833fe.js";import{_ as le,a as ae,b as re}from"./ButtonOpacityDelete.c89ddd8e.js";import{d as ce,e as ue,a as pe,b as ie,c as de}from"./Table.vue.b8c656f9.js";import{_ as me}from"./CurrencyText.07630cf7.js";import{u as z}from"./useBase64.937b19aa.js";import{u as _e}from"./ordersStore.6565c1bf.js";const fe={key:0,class:"absolute top-[100%] left-0 w-full bg-beige max-h-[300px] overflow-y-scroll scroll_bar"},xe={key:0,class:"text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] w-full text-left"},ve=O({__name:"SearchClients",props:{name:{},email:{}},emits:["update:name","update:email"],setup(P,{emit:V}){const i=P,f=V,o=(p,m)=>{f("update:name",p),f("update:email",m)},s=S(null),k=S(!1),v=p=>{k.value=p},n=S(""),h=S([]),d=()=>{n.value=i.name||""},g=()=>{ee(`${te()}/clients`,{body:{keyword:n.value}}).then(p=>{h.value=p.clients}).catch(p=>{console.error(p)})};N(s,p=>v(!1));const r=(p,m)=>{o(p,m),n.value=p,v(!1)};return j(()=>i.name,()=>{d()}),(p,m)=>{const c=K,$=H;return u(),x("div",{class:"relative z-50",ref_key:"hiddenOutsideClickElement",ref:s},[t(c,{modelValue:_(n),"onUpdate:modelValue":m[0]||(m[0]=l=>Z(n)?n.value=l:null),onFocus:m[1]||(m[1]=l=>v(!0)),onInput:g,class:"w-full"},null,8,["modelValue"]),_(k)?(u(),x("div",fe,[U("div",null,[(u(!0),x(A,null,I(_(h),l=>(u(),C($,{key:l._id,onClick:B=>r(l.name,l.email),class:"text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] duration-hover hover:bg-beige-1 w-full text-left"},{default:e(()=>[a(y(l.name)+" ("+y(l.email)+") ",1)]),_:2},1032,["onClick"]))),128)),_(h).length===0?(u(),x("p",xe," Не знайдено ")):b("",!0)])])):b("",!0)],512)}}}),he=["src"],ge=O({__name:"TableItemOrderProduct",props:{product:{}},emits:["deleteAction"],setup(P,{emit:V}){const i=P,f=V,o=()=>{f("deleteAction",i.product._id)};return(s,k)=>{const v=ce,n=ue,h=me,d=le,g=pe;return u(),C(g,{isMobileClose:!1,class:"grid-cols-order-details-modal-xs gap-x-[10px] md:grid-cols-order-details-modal-md relative"},{elements:e(()=>[t(v,{class:"!grid-cols-1 !col-span-1 row-span-5"},{default:e(()=>[s.product.photos[0]?(u(),x("img",{key:0,class:"max-w-[40px]",src:("useBase64"in s?s.useBase64:_(z))(s.product.photos[0])||"",alt:""},null,8,he)):b("",!0)]),_:1}),t(n,{class:"col-span-2"},{title:e(()=>[a("Найменування")]),value:e(()=>{var r;return[a(y((r=s.product)==null?void 0:r.name),1)]}),_:1}),t(n,{class:"col-span-2"},{title:e(()=>[a("Розмір")]),value:e(()=>{var r;return[a(y((r=s.product)==null?void 0:r.size),1)]}),_:1}),t(n,{class:"col-span-2"},{title:e(()=>[a("Кількість")]),value:e(()=>{var r;return[a(y((r=s.product)==null?void 0:r.in_stock),1)]}),_:1}),t(n,{class:"col-span-2"},{title:e(()=>[a("Ціна")]),value:e(()=>{var r;return[a(y((r=s.product)==null?void 0:r.price),1),t(h)]}),_:1}),t(n,{class:"col-span-2"},{title:e(()=>[a("Ціна")]),value:e(()=>[t(d,{class:"flex-shrink-0 absolute right-0 top-0 3xl:relative",onClick:oe(o,["stop"])},null,8,["onClick"])]),_:1})]),_:1})}}}),ye={key:0,class:"absolute top-[100%] left-0 w-full bg-beige max-h-[300px] overflow-y-scroll scroll_bar"},be=["src"],ke={key:0,class:"text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] w-full text-left"},Ce=O({__name:"ProductToOrderAdding",props:{modelValue:{},startProducts:{}},emits:["update:modelValue"],setup(P,{emit:V}){const i=P,f=V,o=c=>{f("update:modelValue",c)},s=S(null),k=_e(),v=se(()=>k.addingProducts),n=S([]),h=()=>{if(!i.startProducts)return!1;i.startProducts.forEach(c=>{o([...i.modelValue,c._id])}),n.value=i.startProducts||[]},d=async c=>{await k.searchProducts(c),g.value=!0},g=S(!1),r=()=>{g.value=!1},p=c=>{o([...i.modelValue,c._id]),n.value=[...n.value,c]},m=c=>{const $=i.modelValue.filter(B=>B!==c),l=n.value.filter(B=>B._id!==c);o($),n.value=l};return N(s,c=>r()),j(()=>i.startProducts,()=>{console.log(i.startProducts),h()}),(c,$)=>{const l=E,B=ae,L=H,T=ie,M=ge,R=de,q=F;return u(),C(q,{class:"w-full flex flex-col"},{default:e(()=>[t(l,{class:"text-center"},{default:e(()=>[a(" Додати товари ")]),_:1}),U("div",{class:"relative",ref_key:"hiddenOutsideClickElement",ref:s},[t(B,{theme:"beige",class:"mt-[15px] xl:mt-[25px]",onSearch:d}),_(g)?(u(),x("div",ye,[U("div",null,[(u(!0),x(A,null,I(_(v),w=>(u(),C(L,{key:w._id,onClick:D=>p(w),class:"text-[9px] md:text-[12px] flex gap-[10px] items-center truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] duration-hover hover:bg-beige-1 w-full text-left"},{default:e(()=>[w.photos[0]?(u(),x("img",{key:0,src:("useBase64"in c?c.useBase64:_(z))(w.photos[0])||void 0,alt:"",class:"w-[23px]h-[28px] object-cover"},null,8,be)):b("",!0),a(" "+y(w.name),1)]),_:2},1032,["onClick"]))),128)),_(v).length===0?(u(),x("p",ke," Не знайдено ")):b("",!0)])])):b("",!0)],512),U("div",null,[_(n).length>0?(u(),C(R,{key:0,pagination:!1,class:"!mt-[20px]"},{headers:e(()=>[t(T),t(T,null,{default:e(()=>[a("Найменування")]),_:1}),t(T,null,{default:e(()=>[a("Розмір")]),_:1}),t(T,null,{default:e(()=>[a("Кількість")]),_:1}),t(T,null,{default:e(()=>[a("Ціна")]),_:1})]),items:e(()=>[(u(!0),x(A,null,I(_(n),(w,D)=>(u(),C(M,{key:D,product:w,onDeleteAction:m},null,8,["product"]))),128))]),_:1})):b("",!0)])]),_:1})}}}),Ue={action:"#"},Ve={class:"flex flex-col 3xl:items-start 3xl:flex-row gap-[25px]"},we={class:"flex items-center gap-[15px] md:mt-[10px]"},Se=U("span",{class:"text-[9px] md:text-[10px] xl:text-[12px]"},"або",-1),ze=O({__name:"Order",props:{error:{},messageToUser:{},inputs:{},orderProducts:{}},emits:["updateInputs"],setup(P,{emit:V}){const i=V,f=(o,s)=>{i("updateInputs",o,s)};return(o,s)=>{const k=G,v=J,n=E,h=ve,d=Q,g=re,r=W,p=X,m=Y,c=F,$=Ce;return u(),x(A,null,[o.error?(u(),C(k,{key:0},{default:e(()=>[a(y(o.error),1)]),_:1})):b("",!0),o.messageToUser?(u(),C(v,{key:1},{default:e(()=>[a(y(o.messageToUser),1)]),_:1})):b("",!0),U("form",Ue,[U("div",Ve,[t(c,{class:"w-full 3xl:basis-[60%]"},{default:e(()=>[t(m,null,{default:e(()=>[t(n,{class:"col-span-2"},{default:e(()=>[a(" Інформація ")]),_:1}),t(d,{class:"col-span-2 md:col-span-1",label:"Обрати клієнта:"},{default:e(()=>[t(h,{name:o.inputs.client,"onUpdate:name":s[0]||(s[0]=l=>o.inputs.client=l),email:o.inputs.email,"onUpdate:email":s[1]||(s[1]=l=>o.inputs.email=l)},null,8,["name","email"])]),_:1}),U("div",we,[Se,t(g,{type:"button",onClick:s[2]||(s[2]=l=>("navigateTo"in o?o.navigateTo:_(ne))("/profile/new_client"))},{default:e(()=>[a("Додати клієнта")]),_:1})]),t(n,{class:"col-span-2 mt-[10px] xl:mt-[20px]"},{default:e(()=>[a(" Додаткова інформація ")]),_:1}),t(d,{class:"col-span-2 md:col-span-1",label:"Доставка:"},{default:e(()=>[t(r,{valueSelect:o.inputs.shipping,typeSelect:"shipping",typeVariant:"shipping",onUpdateValue:f},null,8,["valueSelect"])]),_:1}),t(d,{class:"col-span-2 md:col-span-1",label:"Обрати статус замовлення:"},{default:e(()=>[t(r,{valueSelect:o.inputs.status,typeSelect:"status",typeVariant:"order",onUpdateValue:f},null,8,["valueSelect"])]),_:1}),t(d,{class:"col-span-2 md:col-span-1",label:"Джерело замовлення:"},{default:e(()=>[t(r,{valueSelect:o.inputs.source,typeSelect:"source",typeVariant:"source",onUpdateValue:f},null,8,["valueSelect"])]),_:1}),t(d,{class:"col-span-2 md:col-span-1",label:"Оплата:"},{default:e(()=>[t(r,{valueSelect:o.inputs.payment,typeSelect:"payment",typeVariant:"payment",onUpdateValue:f},null,8,["valueSelect"])]),_:1}),t(d,{class:"col-span-2",label:"Коментар:"},{default:e(()=>[t(p,{modelValue:o.inputs.comment,"onUpdate:modelValue":s[3]||(s[3]=l=>o.inputs.comment=l),class:"min-h-[80px] md:min-h-[105px]"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t($,{modelValue:o.inputs.products,"onUpdate:modelValue":s[4]||(s[4]=l=>o.inputs.products=l),startProducts:o.orderProducts,class:"3xl:basis-[40%]"},null,8,["modelValue","startProducts"])])])],64)}}});export{ze as _};
