import{_ as b}from"./disposables.28b19e04.js";import{_ as g}from"./Objective.vue.912e8cca.js";import{_ as x}from"./ProfilePage.vue.dfe81b5e.js";import{f as k,h as B,q as U,i as s,o as j,j as y,w as o,b as a,d as u,l as r,a as C,B as A,A as T}from"./entry.7e18eae5.js";import{u as w}from"./useFormatDate.0e4adb69.js";import"./ButtonOpacity.99014ff8.js";import"./nuxt-link.51af7f6e.js";import"./AlertDanger.cc375051.js";import"./uid.0dae9c6c.js";import"./AlertSuccess.9b155fcf.js";import"./Header2.d4c6c01a.js";import"./SelectVariant.vue.366a770b.js";import"./SelectProfile.vue.f8a7a8e9.js";import"./tw-merge.7205049a.js";import"./ui.config.ca287e43.js";import"./index.ca0dae19.js";import"./index.09d836d6.js";import"./useFormGroup.83955626.js";import"./Modal.vue.0f8345e5.js";import"./ParticipantItem.vue.931125f6.js";import"./Delete.c5718822.js";import"./nuxt-icon.00703481.js";import"./cn.a642df04.js";import"./Cross.934575e3.js";import"./CheckMark.971e1779.js";import"./Calendar.f19d33dc.js";const N={class:"flex justify-center"},ae=k({__name:"new_objectives",setup(O){const d=B(),_=U(()=>{var e;return(e=d.user)==null?void 0:e.name}),n=s(""),i=s(""),t=s({participants:[],headline:"",description:"",responsible:"",deadline:"",status:"",comment:""}),f=(e,m)=>{t.value[m]=e},p=e=>{if(e===!0)return i.value="Завдання успішно створено",t.value={},!1;n.value="Щось не вийшло!"},c=()=>{A(`${T()}/add_task`,{body:{creator:_.value,headline:t.value.headline,description:t.value.description,participants:t.value.participants,responsible:t.value.responsible,deadline:w(t.value.deadline),status:t.value.status,comment:t.value.comment}}).then(e=>{p(e.message)}).catch(e=>{p(e),console.log(e)})};return(e,m)=>{const l=b,h=g,v=x;return j(),y(v,{title:"Додати завдання"},{header:o(()=>[a(l,{onClick:c,class:"hidden lg:block"},{default:o(()=>[u(" Створити ")]),_:1})]),content:o(()=>[a(h,{inputs:r(t),error:r(n),messageToUser:r(i),labelStatus:"Статус завдання:",onUpdateInputs:f},null,8,["inputs","error","messageToUser"]),C("div",N,[a(l,{onClick:c,class:"lg:hidden mt-[25px]"},{default:o(()=>[u(" Створити ")]),_:1})])]),_:1})}}});export{ae as default};
