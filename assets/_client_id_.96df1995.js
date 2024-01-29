import{_ as J}from"./ButtonOpacityBorder.331d6c0f.js";import K from"./Delete.ca1322ce.js";import{_ as W}from"./SelectProfile.vue.3961a818.js";import{u as X,_ as Y}from"./RemoveClient.vue.5c48118a.js";import{_ as ee}from"./AlertDanger.8ffe68fc.js";import{_ as te}from"./AlertSuccess.6782c0b1.js";import{_ as oe}from"./Client.vue.086e6ff1.js";import{_ as ne}from"./Header2.b6d63107.js";import{_ as ae}from"./ModalOrderDetails.vue.8faa52a9.js";import{_ as se}from"./ButtonSortingTable.vue.40bbf3d8.js";import{_ as re,a as ie,b as le,c as me}from"./Table.vue.313f3609.js";import{_ as pe}from"./TransitionTableCell.vue.871fbee3.js";import{_ as ue}from"./CurrencyText.1030543a.js";import{_ as _e}from"./StatusOutput.vue.d8f5df7c.js";import{_ as ce}from"./ButtonOpacityThreeDots.782a8f54.js";import{u as R}from"./useDate.7255fb09.js";import{k as O,F as v,G as b,H as e,V as s,U as y,u as m,I as a,Z as T,a as _,l as N,Q as A,f as L,a2 as de,a3 as fe,b as ge,R as F}from"./swiper-vue.7d7207a4.js";import{_ as ve}from"./ProfilePage.vue.bb1cb1e7.js";import{c as he,d as Ce,e as M,f as ye}from"./entry.14287089.js";import{u as Se}from"./useSorting.9908e62e.js";import{u as Ie}from"./useFormatDate.5fdabf97.js";import"./ButtonOpacity.467a53d6.js";import"./Button.vue.8bc0fe75.js";import"./nuxt-link.7861695d.js";import"./nuxt-icon.90b68e3b.js";import"./tw-merge.c12b54cd.js";import"./ui.config.28bdcf52.js";import"./index.4e64f9f1.js";import"./useFormGroup.348c1ff5.js";import"./Modal.vue.d6d3610a.js";import"./ModalWarning.vue.51e14e47.js";import"./TextPrimary.9c6a2407.js";import"./ModalTitle.vue.1b8da5bd.js";import"./LabelProfile.vue.7927c4cc.js";import"./cn.a642df04.js";import"./TextareaProfile.vue.42abf356.js";import"./SelectVariant.vue.3d3263dd.js";import"./Radio.7ae81355.js";import"./uid.12f507af.js";import"./DivBorderBg.51e86300.js";import"./InputImage.vue.7bdec52a.js";import"./useBase64.1efa7b71.js";import"./Photo.74dac9ee.js";import"./User.f89dd025.js";import"./ArrowRight.c06a60ed.js";import"./ButtonText.217e85d2.js";import"./ArrowTop.36751400.js";import"./Close.59b92f47.js";import"./ThreeDots.04b1ca0f.js";import"./Calendar.d5ab1dc1.js";const be=O({__name:"TableItemShoppingHistory",props:{order:{}},emits:["showOrderDetails"],setup(U,{emit:k}){const S=U,t=k,d=()=>{t("showOrderDetails",S.order._id)};return(r,I)=>{const p=pe,f=ue,D=_e,h=re,o=ce,c=ie;return v(),b(c,{isMobileClose:!0},{header:e(()=>{var u;return[s(y(("useDate"in r?r.useDate:m(R))((u=r.order)==null?void 0:u.date)),1)]}),elements:e(({active:u})=>[a(p,{vIf:u},{title:e(()=>[s("Дата покупки")]),value:e(()=>{var i;return[s(y(("useDate"in r?r.useDate:m(R))((i=r.order)==null?void 0:i.date)),1)]}),_:2},1032,["vIf"]),a(p,{vIf:u},{title:e(()=>[s("Сума замовлення")]),value:e(()=>{var i;return[s(y((i=r.order)==null?void 0:i.total_sum),1),a(f)]}),_:2},1032,["vIf"]),a(p,{vIf:u},{title:e(()=>[s("Товари")]),value:e(()=>{var i;return[s(y((i=r.order)==null?void 0:i.products.length),1)]}),_:2},1032,["vIf"]),a(p,{vIf:u},{title:e(()=>[s("Оплата")]),value:e(()=>{var i;return[s(y((i=r.order)==null?void 0:i.payment),1)]}),_:2},1032,["vIf"]),r.order.status?(v(),b(p,{key:0,vIf:u,class:"3xl:w-[12%]"},{title:e(()=>[s("Статус замовлення")]),value:e(()=>[a(D,{color:r.order.status.colour},{default:e(()=>{var i;return[s(y((i=r.order)==null?void 0:i.status.status),1)]}),_:1},8,["color"])]),_:2},1032,["vIf"])):T("",!0),a(p,{vIf:u,class:"3xl:hidden col-span-2"},{title:e(()=>[a(h,{onClick:d},{default:e(()=>[s("Детальніше")]),_:1})]),_:2},1032,["vIf"])]),"additional-buttons":e(()=>[a(o,{onClick:d,class:"hidden 3xl:block"})]),_:1})}}}),De=O({__name:"ClientShoppingHistory",props:{emailClient:{},shoppingHistoryItems:{},page:{},endPage:{},sorting:{},reverseSorting:{type:Boolean}},emits:["setPage","setSorting"],setup(U,{emit:k}){const S=U,t=k,d=o=>{t("setPage",o)},r=o=>{t("setSorting",o)},I=_(""),p=_(!1),f=o=>{p.value=o},D=o=>{I.value=o,f(!0)},h=N(()=>S.shoppingHistoryItems?S.shoppingHistoryItems.find(o=>o._id===I.value):!1);return(o,c)=>{const u=ne,i=ae,w=se,C=le,$=be,H=me;return v(),A("div",null,[a(u,null,{default:e(()=>[s("Історія покупок")]),_:1}),m(h)?(v(),b(i,{key:0,products:m(h).products,modelValue:m(p),"onUpdate:modelValue":c[0]||(c[0]=g=>L(p)?p.value=g:null),label:"Деталі замовлення",onCloseModal:f},null,8,["products","modelValue"])):T("",!0),a(H,{pageTable:o.page,endPage:o.endPage,onSetPage:d},{headers:e(()=>[a(C,null,{default:e(()=>[a(w,{sortingUp:o.sorting==="order_date"&&o.reverseSorting,sortingDown:o.sorting==="order_date"&&!o.reverseSorting,onClick:c[1]||(c[1]=g=>r("order_date")),class:"!font-normal"},{default:e(()=>[s(" Дата покупки")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),a(C,null,{default:e(()=>[a(w,{sortingUp:o.sorting==="total_sum"&&o.reverseSorting,sortingDown:o.sorting==="total_sum"&&!o.reverseSorting,onClick:c[2]||(c[2]=g=>r("total_sum")),class:"!font-normal"},{default:e(()=>[s(" Сума замовлення")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),a(C,null,{default:e(()=>[s("Товари")]),_:1}),a(C,null,{default:e(()=>[s("Оплата")]),_:1}),a(C,null,{default:e(()=>[s("Статус замовлення")]),_:1})]),items:e(()=>[(v(!0),A(de,null,fe(o.shoppingHistoryItems,g=>(v(),b($,{key:g._id,order:g,onShowOrderDetails:D},null,8,["order"]))),128))]),_:1},8,["pageTable","endPage"])])}}}),ke={class:"items-center gap-[40px] hidden lg:flex"},$e={class:"flex flex-col items-center pb-[50px] gap-[20px] lg:hidden mt-[25px]"},bt=O({__name:"[client_id]",setup(U){X();const k=he(),S=N(()=>k.params.client_id),t=_({additional_phone:"",email:"",gender:"",birthday:"",instagram:"",telegram:"",comment:"",status:"",userpic:"",phone:"",name:""}),d=_({}),r=_(),I=_(""),p=_(""),f=_(1),D=_(1),h=_(""),o=_(!1),c=n=>{Se(n,o,h,$)},u=n=>{f.value=n};ge(f,()=>{$()},{deep:!0});const i=(n,l)=>{t.value[l]=n},w=()=>{const n=localStorage.getItem("token"),l=new FormData;l.append("additional_phone",t.value.additional_phone),l.append("email",t.value.email),l.append("gender",t.value.gender),l.append("birthday",Ie(t.value.birthday)),l.append("instagram",t.value.instagram),l.append("telegram",t.value.telegram),l.append("comment",t.value.comment),l.append("status",t.value.status),l.append("userpic",t.value.userpic),l.append("phone",t.value.phone),l.append("name",t.value.name),l.append("access_token",n||""),r.value=l},C=()=>{w(),Ce(`${M()}/update_client/${S.value}`,{method:"POST",body:r.value}).then(n=>{n.message==="Client updated successfully"?p.value="Клієнт успішно оновився!":I.value="Щось не вийшло!"})},$=()=>{ye(`${M()}/client_info`,{body:{client_id:S.value,page:f.value,per_page:5,sort_by:h.value,reverse_sort:o.value}}).then(n=>{D.value=n.total_pages,d.value=n.client_info,t.value.additional_phone=n.client_info.additional_phone,t.value.birthday=n.client_info.birthday,t.value.comment=n.client_info.comment,t.value.email=n.client_info.email,t.value.gender=n.client_info.gender,t.value.instagram=n.client_info.instagram,t.value.name=n.client_info.name,t.value.phone=n.client_info.phone,t.value.status=n.client_info.status.status,t.value.telegram=n.client_info.telegram,t.value.userpic=n.client_info.userpic})},H=n=>{P.value=n},g=n=>{H(!0)},P=_(!1);return $(),(n,l)=>{const B=J,V=K,x=W,E=Y,G=ee,Q=te,Z=oe,j=De,q=ve;return v(),b(q,{title:"Редагувати клієнта"},{header:e(()=>[F("div",ke,[a(B,{onClick:C},{default:e(()=>[s(" Оновити ")]),_:1}),a(x,{onClick:g,value:"Видалити",class:"w-fit"},{default:e(()=>[a(V,{class:"-order-10"})]),_:1})])]),content:e(()=>[a(E,{modelValue:m(P),"onUpdate:modelValue":l[0]||(l[0]=z=>L(P)?P.value=z:null),clientId:m(d)._id,onSwitchModal:H},null,8,["modelValue","clientId"]),m(I)?(v(),b(G,{key:0},{default:e(()=>[s(y(m(I)),1)]),_:1})):T("",!0),m(p)?(v(),b(Q,{key:1},{default:e(()=>[s(y(m(p)),1)]),_:1})):T("",!0),a(Z,{labelStatus:"Змінити статус клієнта:",inputs:m(t),onUpdateInputs:i},null,8,["inputs"]),a(j,{shoppingHistoryItems:m(d).orders,emailClient:m(d).email,page:m(f),endPage:m(D),sorting:m(h),reverseSorting:m(o),onSetSorting:c,onSetPage:u,class:"mt-[25px] xl:mt-[40px]"},null,8,["shoppingHistoryItems","emailClient","page","endPage","sorting","reverseSorting"]),F("div",$e,[a(B,{onClick:C},{default:e(()=>[s(" Оновити ")]),_:1}),a(x,{onClick:g,value:"Видалити",class:"w-fit"},{default:e(()=>[a(V,{class:"-order-10"})]),_:1})])]),_:1})}}});export{bt as default};
