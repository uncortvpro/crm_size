import{_ as b}from"./ButtonOpacityBorder.06e98313.js";import{_ as g}from"./Objective.vue.34edd746.js";import{_ as k}from"./ProfilePage.vue.618878d2.js";import{b as x,f as U,e as y}from"./entry.a6c15489.js";import{u as B}from"./useFormatDate.a04898b8.js";import{k as C,l as j,a as s,F as T,G as V,H as o,I as a,V as u,u as r,R as A}from"./swiper-vue.36f73e51.js";import"./ButtonOpacity.a7366e8b.js";import"./Button.vue.dae32332.js";import"./nuxt-link.0a0c2998.js";import"./AlertDanger.736a7662.js";import"./TextPrimary.51c9550e.js";import"./AlertSuccess.b79ec89d.js";import"./Header2.93b6c6e2.js";import"./ModalTitle.vue.44d41ddf.js";import"./Modal.vue.1c5ef812.js";import"./ui.config.37bc306e.js";import"./LabelProfile.vue.376c900b.js";import"./ParticipantItem.vue.37a4dbaa.js";import"./Delete.48f75c53.js";import"./nuxt-icon.9ee65076.js";import"./cn.a642df04.js";import"./Cross.b99a39ef.js";import"./CheckMark.e752a3d0.js";import"./SelectVariant.vue.85f6f41a.js";import"./SelectProfile.vue.2acd6954.js";import"./tw-merge.e5c826f7.js";import"./index.246acd74.js";import"./useFormGroup.946dc5da.js";import"./Radio.24744806.js";import"./uid.12f507af.js";import"./DivBorderBg.342d8771.js";import"./Calendar.d9fdb599.js";const F={class:"flex justify-center"},ce=C({__name:"new_objectives",setup(I){const d=x(),_=j(()=>{var e;return(e=d.user)==null?void 0:e.name}),i=s(""),n=s(""),t=s({participants:[],headline:"",description:"",responsible:"",deadline:"",status:"",comment:""}),f=(e,c)=>{t.value[c]=e},p=e=>{if(e===!0)return n.value="Завдання успішно створено",t.value={},!1;i.value="Щось не вийшло!"},m=()=>{U(`${y()}/add_task`,{body:{creator:_.value,headline:t.value.headline,description:t.value.description,participants:t.value.participants,responsible:t.value.responsible,deadline:B(t.value.deadline),status:t.value.status,comment:t.value.comment}}).then(e=>{p(e.message)}).catch(e=>{p(e),console.log(e)})};return(e,c)=>{const l=b,h=g,v=k;return T(),V(v,{title:"Додати завдання"},{header:o(()=>[a(l,{onClick:m,class:"hidden lg:block"},{default:o(()=>[u(" Створити ")]),_:1})]),content:o(()=>[a(h,{inputs:r(t),error:r(i),messageToUser:r(n),labelStatus:"Статус завдання:",onUpdateInputs:f},null,8,["inputs","error","messageToUser"]),A("div",F,[a(l,{onClick:m,class:"lg:hidden mt-[25px]"},{default:o(()=>[u(" Створити ")]),_:1})])]),_:1})}}});export{ce as default};
