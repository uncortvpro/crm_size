import{_ as b}from"./ButtonOpacityBorder.503958f2.js";import{_ as g}from"./Objective.vue.49a031fb.js";import{_ as k}from"./ProfilePage.vue.91b7bb0f.js";import{b as x,c as B,d as U,n as j}from"./entry.9837a20a.js";import{u as y}from"./useFormatDate.82d30fae.js";import{k as C,l as T,a as s,F as V,G as A,H as o,I as a,V as l,u as r,R as F}from"./swiper-vue.df2f0745.js";import"./ButtonOpacity.8fd52cb5.js";import"./Button.vue.38cd8abf.js";import"./nuxt-link.21791279.js";import"./AlertDanger.c5cbbe4f.js";import"./TextPrimary.597a46d7.js";import"./AlertSuccess.b275b201.js";import"./Header2.0df1f0de.js";import"./ModalTitle.vue.ad05d48d.js";import"./Modal.vue.24fa8f69.js";import"./ui.config.ed65c54b.js";import"./LabelProfile.vue.c7348741.js";import"./cn.a642df04.js";import"./ParticipantItem.vue.c2fc2a6a.js";import"./Delete.6d225995.js";import"./nuxt-icon.91f9f1b8.js";import"./Cross.2f6e0af9.js";import"./CheckMark.4b1cfb5b.js";import"./SelectVariant.vue.bc9a1e1a.js";import"./SelectProfile.vue.ef6af844.js";import"./tw-merge.82eb27f5.js";import"./index.14c8fbbe.js";import"./index.7fa93687.js";import"./useFormGroup.429088e7.js";import"./Radio.fc1ee864.js";import"./uid.12f507af.js";import"./TextareaProfile.vue.9ff30fe5.js";import"./DivBorderBg.c839b7ad.js";import"./ArrowRight.63b5977e.js";import"./Calendar.47cb65df.js";const I={class:"flex justify-center"},_e=C({__name:"new_objectives",setup(N){const u=x(),d=T(()=>{var e;return(e=u.user)==null?void 0:e.name}),i=s(""),_=s(""),t=s({participants:[],headline:"",description:"",responsible:"",deadline:"",status:"",comment:""}),f=(e,m)=>{t.value[m]=e},n=e=>{if(e===!0)return j("/profile/objectives"),t.value={},!1;i.value="Щось не вийшло!"},p=()=>{B(`${U()}/add_task`,{body:{creator:d.value,headline:t.value.headline,description:t.value.description,participants:t.value.participants,responsible:t.value.responsible,deadline:y(t.value.deadline),status:t.value.status,comment:t.value.comment}}).then(e=>{n(e.message)}).catch(e=>{n(e),console.log(e)})};return(e,m)=>{const c=b,v=g,h=k;return V(),A(h,{isButtonBack:"",title:"Додати завдання"},{header:o(()=>[a(c,{onClick:p,class:"hidden lg:block"},{default:o(()=>[l(" Створити ")]),_:1})]),content:o(()=>[a(v,{inputs:r(t),error:r(i),messageToUser:r(_),labelStatus:"Статус завдання:",onUpdateInputs:f},null,8,["inputs","error","messageToUser"]),F("div",I,[a(c,{onClick:p,class:"lg:hidden mt-[25px]"},{default:o(()=>[l(" Створити ")]),_:1})])]),_:1})}}});export{_e as default};
