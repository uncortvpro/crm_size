import{_ as Q}from"./AlertDanger.fe3ad7bc.js";import{_ as Y}from"./AlertSuccess.4e4c868e.js";import{_ as E}from"./Header2.e5c3690b.js";import{a as Z,b as q}from"./SelectProfile.vue.d057932d.js";import{a as F}from"./ButtonOpacity.fc710c82.js";import{f as J,e as K,n as W}from"./entry.cc5e7feb.js";import{o as H}from"./index.ee4f7712.js";import{w as N}from"./index.d04bfb4b.js";import{k as A,a as S,F as u,Q as x,I as t,u as _,f as X,R as U,$ as O,a3 as I,G as C,H as e,V as r,U as y,Z as b,Y as ee,l as te}from"./swiper-vue.76d67008.js";import{_ as oe,a as se,b as ne}from"./ButtonOpacityDelete.182ce5d2.js";import{_ as le}from"./SelectVariant.vue.51e8f147.js";import{b as R,_ as ae,a as re}from"./DivBorderBg.92d0bb82.js";import{d as ce,e as ue,a as pe,b as ie,c as me}from"./Table.vue.b969d40a.js";import{_ as de}from"./CurrencyText.e36eea0c.js";import{u as z}from"./useBase64.1efa7b71.js";import{u as _e}from"./ordersStore.872e3b81.js";const fe={key:0,class:"absolute top-[100%] left-0 w-full bg-beige max-h-[300px] overflow-y-scroll scroll_bar"},xe={key:0,class:"text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] w-full text-left"},ve=A({__name:"SearchClients",props:{name:{},email:{}},emits:["update:name","update:email"],setup($,{emit:V}){const i=$,f=V,o=(p,d)=>{f("update:name",p),f("update:email",d)},s=S(null),k=S(!1),v=p=>{k.value=p},n=S(""),h=S([]),m=()=>{n.value=i.name||""},g=()=>{J(`${K()}/clients`,{body:{keyword:n.value}}).then(p=>{h.value=p.clients}).catch(p=>{console.error(p)})};H(s,p=>v(!1));const a=(p,d)=>{o(p,d),n.value=p,v(!1)};return N(()=>i.name,()=>{m()}),(p,d)=>{const c=Z,P=F;return u(),x("div",{class:"relative z-50",ref_key:"hiddenOutsideClickElement",ref:s},[t(c,{modelValue:_(n),"onUpdate:modelValue":d[0]||(d[0]=l=>X(n)?n.value=l:null),onFocus:d[1]||(d[1]=l=>v(!0)),onInput:g,class:"w-full"},null,8,["modelValue"]),_(k)?(u(),x("div",fe,[U("div",null,[(u(!0),x(O,null,I(_(h),l=>(u(),C(P,{key:l._id,onClick:B=>a(l.name,l.email),class:"text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] duration-hover hover:bg-beige-1 w-full text-left"},{default:e(()=>[r(y(l.name)+" ("+y(l.email)+") ",1)]),_:2},1032,["onClick"]))),128)),_(h).length===0?(u(),x("p",xe," Не знайдено ")):b("",!0)])])):b("",!0)],512)}}}),he=["src"],ge=A({__name:"TableItemOrderProduct",props:{product:{}},emits:["deleteAction"],setup($,{emit:V}){const i=$,f=V,o=()=>{f("deleteAction",i.product._id)};return(s,k)=>{const v=ce,n=ue,h=de,m=oe,g=pe;return u(),C(g,{isMobileClose:!1,class:"grid-cols-order-details-modal-xs gap-x-[10px] md:grid-cols-order-details-modal-md relative"},{elements:e(()=>[t(v,{class:"!grid-cols-1 !col-span-1 row-span-5"},{default:e(()=>[s.product.photos[0]?(u(),x("img",{key:0,class:"max-w-[40px]",src:("useBase64"in s?s.useBase64:_(z))(s.product.photos[0])||"",alt:""},null,8,he)):b("",!0)]),_:1}),t(n,{class:"col-span-2"},{title:e(()=>[r("Найменування")]),value:e(()=>{var a;return[r(y((a=s.product)==null?void 0:a.name),1)]}),_:1}),t(n,{class:"col-span-2"},{title:e(()=>[r("Розмір")]),value:e(()=>{var a;return[r(y((a=s.product)==null?void 0:a.size),1)]}),_:1}),t(n,{class:"col-span-2"},{title:e(()=>[r("Кількість")]),value:e(()=>{var a;return[r(y((a=s.product)==null?void 0:a.in_stock),1)]}),_:1}),t(n,{class:"col-span-2"},{title:e(()=>[r("Ціна")]),value:e(()=>{var a;return[r(y((a=s.product)==null?void 0:a.price),1),t(h)]}),_:1}),t(n,{class:"col-span-2"},{title:e(()=>[]),value:e(()=>[t(m,{class:"flex-shrink-0 absolute right-0 top-0 3xl:relative",onClick:ee(o,["stop"])},null,8,["onClick"])]),_:1})]),_:1})}}}),ye={key:0,class:"absolute top-[100%] left-0 w-full bg-beige max-h-[300px] overflow-y-scroll scroll_bar"},be=["src"],ke={key:0,class:"text-[9px] md:text-[12px] truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] w-full text-left"},Ce=A({__name:"ProductToOrderAdding",props:{modelValue:{},startProducts:{}},emits:["update:modelValue"],setup($,{emit:V}){const i=$,f=V,o=c=>{f("update:modelValue",c)},s=S(null),k=_e(),v=te(()=>k.addingProducts),n=S([]),h=()=>{if(!i.startProducts)return!1;i.startProducts.forEach(c=>{o([...i.modelValue,c._id])}),n.value=i.startProducts||[]},m=async c=>{await k.searchProducts(c),g.value=!0},g=S(!1),a=()=>{g.value=!1},p=c=>{o([...i.modelValue,c._id]),n.value=[...n.value,c]},d=c=>{const P=i.modelValue.filter(B=>B!==c),l=n.value.filter(B=>B._id!==c);o(P),n.value=l};return H(s,c=>a()),N(()=>i.startProducts,()=>{h()}),(c,P)=>{const l=E,B=se,G=F,T=ie,L=ge,M=me,j=R;return u(),C(j,{class:"w-full flex flex-col"},{default:e(()=>[t(l,{class:"text-center"},{default:e(()=>[r(" Додати товари ")]),_:1}),U("div",{class:"relative",ref_key:"hiddenOutsideClickElement",ref:s},[t(B,{theme:"beige",class:"mt-[15px] xl:mt-[25px]",onSearch:m}),_(g)?(u(),x("div",ye,[U("div",null,[(u(!0),x(O,null,I(_(v),w=>(u(),C(G,{key:w._id,onClick:D=>p(w),class:"text-[9px] md:text-[12px] flex gap-[10px] items-center truncate px-[7px] py-[10px] md:px-[10px] md:pt-[15px] duration-hover hover:bg-beige-1 w-full text-left"},{default:e(()=>[w.photos[0]?(u(),x("img",{key:0,src:("useBase64"in c?c.useBase64:_(z))(w.photos[0])||void 0,alt:"",class:"w-[23px] h-[28px] object-cover"},null,8,be)):b("",!0),r(" "+y(w.name),1)]),_:2},1032,["onClick"]))),128)),_(v).length===0?(u(),x("p",ke," Не знайдено ")):b("",!0)])])):b("",!0)],512),U("div",null,[_(n).length>0?(u(),C(M,{key:0,pagination:!1,class:"!mt-[20px]"},{headers:e(()=>[t(T),t(T,null,{default:e(()=>[r("Найменування")]),_:1}),t(T,null,{default:e(()=>[r("Розмір")]),_:1}),t(T,null,{default:e(()=>[r("Кількість")]),_:1}),t(T,null,{default:e(()=>[r("Ціна")]),_:1})]),items:e(()=>[(u(!0),x(O,null,I(_(n),(w,D)=>(u(),C(L,{key:D,product:w,onDeleteAction:d},null,8,["product"]))),128))]),_:1})):b("",!0)])]),_:1})}}}),Ue={action:"#"},Ve={class:"flex flex-col 3xl:items-start 3xl:flex-row gap-[25px]"},we={class:"flex items-center gap-[15px] md:mt-[10px]"},Se=U("span",{class:"text-[9px] md:text-[10px] xl:text-[12px]"},"або",-1),Me=A({__name:"Order",props:{error:{},messageToUser:{},inputs:{},orderProducts:{}},emits:["updateInputs"],setup($,{emit:V}){const i=V,f=(o,s)=>{i("updateInputs",o,s)};return(o,s)=>{const k=Q,v=Y,n=E,h=ve,m=q,g=ne,a=le,p=ae,d=re,c=R,P=Ce;return u(),x(O,null,[o.error?(u(),C(k,{key:0},{default:e(()=>[r(y(o.error),1)]),_:1})):b("",!0),o.messageToUser?(u(),C(v,{key:1},{default:e(()=>[r(y(o.messageToUser),1)]),_:1})):b("",!0),U("form",Ue,[U("div",Ve,[t(c,{class:"w-full 3xl:basis-[60%]"},{default:e(()=>[t(d,null,{default:e(()=>[t(n,{class:"col-span-2"},{default:e(()=>[r(" Інформація ")]),_:1}),t(m,{class:"col-span-2 md:col-span-1",label:"Обрати клієнта:"},{default:e(()=>[t(h,{name:o.inputs.client,"onUpdate:name":s[0]||(s[0]=l=>o.inputs.client=l),email:o.inputs.email,"onUpdate:email":s[1]||(s[1]=l=>o.inputs.email=l)},null,8,["name","email"])]),_:1}),U("div",we,[Se,t(g,{type:"button",onClick:s[2]||(s[2]=l=>("navigateTo"in o?o.navigateTo:_(W))("/profile/new_client"))},{default:e(()=>[r("Додати клієнта")]),_:1})]),t(n,{class:"col-span-2 mt-[10px] xl:mt-[20px]"},{default:e(()=>[r(" Додаткова інформація ")]),_:1}),t(m,{class:"col-span-2 md:col-span-1",label:"Доставка:"},{default:e(()=>[t(a,{valueSelect:o.inputs.shipping,typeSelect:"shipping",typeVariant:"shipping",onUpdateValue:f},null,8,["valueSelect"])]),_:1}),t(m,{class:"col-span-2 md:col-span-1",label:"Обрати статус замовлення:"},{default:e(()=>[t(a,{valueSelect:o.inputs.status,typeSelect:"status",typeVariant:"order",onUpdateValue:f},null,8,["valueSelect"])]),_:1}),t(m,{class:"col-span-2 md:col-span-1",label:"Джерело замовлення:"},{default:e(()=>[t(a,{valueSelect:o.inputs.source,typeSelect:"source",typeVariant:"source",onUpdateValue:f},null,8,["valueSelect"])]),_:1}),t(m,{class:"col-span-2 md:col-span-1",label:"Оплата:"},{default:e(()=>[t(a,{valueSelect:o.inputs.payment,typeSelect:"payment",typeVariant:"payment",onUpdateValue:f},null,8,["valueSelect"])]),_:1}),t(m,{class:"col-span-2",label:"Коментар:"},{default:e(()=>[t(p,{modelValue:o.inputs.comment,"onUpdate:modelValue":s[3]||(s[3]=l=>o.inputs.comment=l),class:"min-h-[80px] md:min-h-[105px]"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(P,{modelValue:o.inputs.products,"onUpdate:modelValue":s[4]||(s[4]=l=>o.inputs.products=l),startProducts:o.orderProducts,class:"3xl:basis-[40%]"},null,8,["modelValue","startProducts"])])])],64)}}});export{Me as _};
