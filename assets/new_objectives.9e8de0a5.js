import{_ as b}from"./ButtonOpacityBorder.b20bc0a5.js";import{_ as g}from"./Objective.vue.cc1ee071.js";import{_ as k}from"./ProfilePage.vue.e53e23ed.js";import{b as x,f as U,e as y}from"./entry.a7db78e0.js";import{u as B}from"./useFormatDate.7c088cb4.js";import{k as C,l as j,a as s,F as T,G as V,H as o,I as a,V as u,u as r,R as A}from"./swiper-vue.6e4b9487.js";import"./ButtonOpacity.a941fccb.js";import"./Button.vue.403d863a.js";import"./nuxt-link.c84a3561.js";import"./AlertDanger.e2355836.js";import"./TextPrimary.dfbade2b.js";import"./AlertSuccess.2999cc75.js";import"./Header2.ea895c44.js";import"./ModalTitle.vue.5436b0e2.js";import"./Modal.vue.8e19d014.js";import"./ui.config.221b1ad4.js";import"./LabelProfile.vue.3e32a02a.js";import"./ParticipantItem.vue.6fd1139b.js";import"./Delete.21faf37d.js";import"./nuxt-icon.1ff6c1ea.js";import"./cn.a642df04.js";import"./Cross.da19ed6d.js";import"./CheckMark.b54f072c.js";import"./SelectVariant.vue.9e1f81d0.js";import"./SelectProfile.vue.45aea98a.js";import"./tw-merge.ce19ca2b.js";import"./index.156df155.js";import"./uid.67695475.js";import"./Radio.096c81ae.js";import"./DivBorderBg.58473391.js";import"./Calendar.ddaf579d.js";const F={class:"flex justify-center"},me=C({__name:"new_objectives",setup(I){const d=x(),_=j(()=>{var e;return(e=d.user)==null?void 0:e.name}),i=s(""),n=s(""),t=s({participants:[],headline:"",description:"",responsible:"",deadline:"",status:"",comment:""}),f=(e,c)=>{t.value[c]=e},p=e=>{if(e===!0)return n.value="Завдання успішно створено",t.value={},!1;i.value="Щось не вийшло!"},m=()=>{U(`${y()}/add_task`,{body:{creator:_.value,headline:t.value.headline,description:t.value.description,participants:t.value.participants,responsible:t.value.responsible,deadline:B(t.value.deadline),status:t.value.status,comment:t.value.comment}}).then(e=>{p(e.message)}).catch(e=>{p(e),console.log(e)})};return(e,c)=>{const l=b,h=g,v=k;return T(),V(v,{title:"Додати завдання"},{header:o(()=>[a(l,{onClick:m,class:"hidden lg:block"},{default:o(()=>[u(" Створити ")]),_:1})]),content:o(()=>[a(h,{inputs:r(t),error:r(i),messageToUser:r(n),labelStatus:"Статус завдання:",onUpdateInputs:f},null,8,["inputs","error","messageToUser"]),A("div",F,[a(l,{onClick:m,class:"lg:hidden mt-[25px]"},{default:o(()=>[u(" Створити ")]),_:1})])]),_:1})}}});export{me as default};
