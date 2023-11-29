import{_ as U}from"./Modal.vue.684dd50f.js";import{_ as S}from"./AlertDanger.be139bea.js";import{_ as A}from"./AlertSuccess.f7f5dccb.js";import{_ as B}from"./Client.vue.6599e5d6.js";import{_ as D}from"./ProfilePage.vue.e06eb2c8.js";import{b as V,d as F,e as I}from"./entry.e567a446.js";import{u as N}from"./useFormatDate.49389e74.js";import{k as w,a as s,F as m,G as l,H as o,I as c,V as p,u as n,U as h,Z as v,R as P}from"./swiper-vue.c2b88c58.js";import"./ButtonOpacity.1ca87902.js";import"./Button.vue.09b0195d.js";import"./nuxt-link.793ce550.js";import"./ui.config.28a3590b.js";import"./TextPrimary.6c84577b.js";import"./Header2.aa18153b.js";import"./ModalTitle.vue.dd0c4a1d.js";import"./LabelProfile.vue.29b0aa91.js";import"./SelectProfile.vue.5e641d36.js";import"./tw-merge.c375e922.js";import"./useFormGroup.a119c6c7.js";import"./DatePicker.vue.9050935f.js";import"./Calendar.e01eac2d.js";import"./nuxt-icon.c7004446.js";import"./SelectVariant.vue.6bc193be.js";import"./Radio.447f2dd6.js";import"./uid.12f507af.js";import"./DivBorderBg.123898ef.js";import"./Photo.65a27577.js";import"./User.ad5792c1.js";import"./useBase64.1efa7b71.js";const T={class:"flex justify-center"},ue=w({__name:"new_client",setup($){const t=s({additional_phone:"",email:"",gender:"",birthday:"",instagram:"",telegram:"",comment:"",status:"",userpic:"",phone:"",name:""}),u=s();V();const r=s(""),i=s(""),g=()=>{const a=localStorage.getItem("token"),e=new FormData;e.append("additional_phone",t.value.additional_phone),e.append("email",t.value.email),e.append("gender",t.value.gender),e.append("birthday",t.value.birthday?N(t.value.birthday):""),e.append("instagram",t.value.instagram),e.append("telegram",t.value.telegram),e.append("comment",t.value.comment),e.append("status",t.value.status),e.append("userpic",t.value.userpic),e.append("phone",t.value.phone),e.append("name",t.value.name),e.append("access_token",a||""),u.value=e},y=(a,e)=>{t.value[e]=a},d=a=>{if(a==="Client already exists")return r.value="Клієнт вже існує",!1;if(a==="Client created successfully")return i.value="Клієнта успішно створено",t.value={},!1;r.value="Щось не вийшло!"},_=()=>{g(),F(`${I()}/add_client`,{method:"POST",body:u.value}).then(a=>{d(a.message)}).catch(a=>{d(a.message),console.log(a)})};return(a,e)=>{const f=U,k=S,C=A,x=B,b=D;return m(),l(b,{title:"Додати клієнта"},{header:o(()=>[c(f,{onClick:_,class:"hidden lg:block"},{default:o(()=>[p(" Створити ")]),_:1})]),content:o(()=>[n(r)?(m(),l(k,{key:0},{default:o(()=>[p(h(n(r)),1)]),_:1})):v("",!0),n(i)?(m(),l(C,{key:1},{default:o(()=>[p(h(n(i)),1)]),_:1})):v("",!0),c(x,{inputs:n(t),labelStatus:"Статус клієнта:",onUpdateInputs:y},null,8,["inputs"]),P("div",T,[c(f,{onClick:_,class:"lg:hidden"},{default:o(()=>[p(" Створити ")]),_:1})])]),_:1})}}});export{ue as default};