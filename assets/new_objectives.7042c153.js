import{_ as b}from"./ButtonOpacityBorder.62677860.js";import{_ as g}from"./Objective.vue.448f906d.js";import{_ as x}from"./ProfilePage.vue.ba803fd5.js";import{f as k,h as B,q as U,i as s,o as j,j as y,w as o,b as a,d as u,l as r,a as C,B as A,A as T}from"./entry.ca0fa042.js";import{u as w}from"./useFormatDate.b8b5d9a4.js";import"./ButtonOpacity.cc18440e.js";import"./AlertDanger.7400778a.js";import"./useFormGroup.99167769.js";import"./index.b81f869a.js";import"./AlertSuccess.108d8705.js";import"./Header2.0b7a6b66.js";import"./ParticipantItem.vue.a1d7176c.js";import"./Delete.231e09ef.js";import"./nuxt-icon.645fff3f.js";import"./cn.a642df04.js";import"./Cross.a7590ef0.js";import"./CheckMark.18252728.js";import"./Modal.vue.87be9b70.js";import"./ui.config.22a9e43e.js";import"./disposables.f662e4db.js";import"./tw-merge.fbe1d045.js";import"./index.d8427f16.js";import"./Calendar.e873690e.js";import"./nuxt-link.351415d6.js";const N={class:"flex justify-center"},oe=k({__name:"new_objectives",setup(O){const d=B(),_=U(()=>{var e;return(e=d.user)==null?void 0:e.name}),n=s(""),i=s(""),t=s({participants:[],headline:"",description:"",responsible:"",deadline:"",status:"",comment:""}),f=(e,m)=>{t.value[m]=e},c=e=>{if(e===!0)return i.value="Завдання успішно створено",t.value={},!1;n.value="Щось не вийшло!"},p=()=>{A(`${T()}/add_task`,{body:{creator:_.value,headline:t.value.headline,description:t.value.description,participants:t.value.participants,responsible:t.value.responsible,deadline:w(t.value.deadline),status:t.value.status,comment:t.value.comment}}).then(e=>{c(e.message)}).catch(e=>{c(e),console.log(e)})};return(e,m)=>{const l=b,h=g,v=x;return j(),y(v,{title:"Додати завдання"},{header:o(()=>[a(l,{onClick:p,class:"hidden lg:block"},{default:o(()=>[u(" Створити ")]),_:1})]),content:o(()=>[a(h,{inputs:r(t),error:r(n),messageToUser:r(i),labelStatus:"Статус завдання:",onUpdateInputs:f},null,8,["inputs","error","messageToUser"]),C("div",N,[a(l,{onClick:p,class:"lg:hidden mt-[25px]"},{default:o(()=>[u(" Створити ")]),_:1})])]),_:1})}}});export{oe as default};
