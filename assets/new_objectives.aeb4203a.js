import{_ as b}from"./ButtonOpacityBorder.331d6c0f.js";import{_ as g}from"./Objective.vue.d5b48a9f.js";import{_ as k}from"./ProfilePage.vue.bb1cb1e7.js";import{b as x,f as U,e as y}from"./entry.14287089.js";import{u as B}from"./useFormatDate.5fdabf97.js";import{k as C,l as j,a as s,F as T,G as V,H as o,I as a,V as u,u as r,R as A}from"./swiper-vue.7d7207a4.js";import"./ButtonOpacity.467a53d6.js";import"./Button.vue.8bc0fe75.js";import"./nuxt-link.7861695d.js";import"./AlertDanger.8ffe68fc.js";import"./TextPrimary.9c6a2407.js";import"./AlertSuccess.6782c0b1.js";import"./Header2.b6d63107.js";import"./ModalTitle.vue.1b8da5bd.js";import"./Modal.vue.d6d3610a.js";import"./ui.config.28bdcf52.js";import"./LabelProfile.vue.7927c4cc.js";import"./cn.a642df04.js";import"./ParticipantItem.vue.0e315048.js";import"./Delete.ca1322ce.js";import"./nuxt-icon.90b68e3b.js";import"./Cross.f822aa56.js";import"./CheckMark.cd2a7305.js";import"./SelectVariant.vue.3d3263dd.js";import"./SelectProfile.vue.3961a818.js";import"./tw-merge.c12b54cd.js";import"./index.4e64f9f1.js";import"./useFormGroup.348c1ff5.js";import"./Radio.7ae81355.js";import"./uid.12f507af.js";import"./TextareaProfile.vue.42abf356.js";import"./DivBorderBg.51e86300.js";import"./Calendar.d5ab1dc1.js";const F={class:"flex justify-center"},le=C({__name:"new_objectives",setup(I){const d=x(),_=j(()=>{var e;return(e=d.user)==null?void 0:e.name}),i=s(""),n=s(""),t=s({participants:[],headline:"",description:"",responsible:"",deadline:"",status:"",comment:""}),f=(e,c)=>{t.value[c]=e},p=e=>{if(e===!0)return n.value="Завдання успішно створено",t.value={},!1;i.value="Щось не вийшло!"},m=()=>{U(`${y()}/add_task`,{body:{creator:_.value,headline:t.value.headline,description:t.value.description,participants:t.value.participants,responsible:t.value.responsible,deadline:B(t.value.deadline),status:t.value.status,comment:t.value.comment}}).then(e=>{p(e.message)}).catch(e=>{p(e),console.log(e)})};return(e,c)=>{const l=b,h=g,v=k;return T(),V(v,{title:"Додати завдання"},{header:o(()=>[a(l,{onClick:m,class:"hidden lg:block"},{default:o(()=>[u(" Створити ")]),_:1})]),content:o(()=>[a(h,{inputs:r(t),error:r(i),messageToUser:r(n),labelStatus:"Статус завдання:",onUpdateInputs:f},null,8,["inputs","error","messageToUser"]),A("div",F,[a(l,{onClick:m,class:"lg:hidden mt-[25px]"},{default:o(()=>[u(" Створити ")]),_:1})])]),_:1})}}});export{le as default};
