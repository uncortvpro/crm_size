import{_ as U}from"./Modal.vue.211cbc51.js";import{_ as S}from"./AlertDanger.e70b84dd.js";import{_ as A}from"./AlertSuccess.065c3d7d.js";import{_ as B}from"./Client.vue.83010324.js";import{_ as D}from"./ProfilePage.vue.5b5fd59e.js";import{b as V,d as F,e as I}from"./entry.1f9114cb.js";import{u as N}from"./useFormatDate.72bca445.js";import{k as w,a as r,F as m,G as l,H as o,I as c,V as p,u as n,U as h,Z as v,R as P}from"./swiper-vue.c9fc6337.js";import"./ButtonOpacity.90bda4a4.js";import"./Button.vue.e17c2130.js";import"./nuxt-link.535aad9c.js";import"./ui.config.08aa9104.js";import"./TextPrimary.b857d4fd.js";import"./Header2.8b668e21.js";import"./ModalTitle.vue.b92a1580.js";import"./LabelProfile.vue.6631002c.js";import"./SelectProfile.vue.c9a50664.js";import"./tw-merge.040ae221.js";import"./useFormGroup.be765698.js";import"./SelectVariant.vue.d9655de9.js";import"./Radio.39528578.js";import"./uid.12f507af.js";import"./DivBorderBg.5e62df53.js";import"./Photo.3ddb4d06.js";import"./nuxt-icon.879b3d26.js";import"./User.b4be7916.js";import"./useBase64.1efa7b71.js";import"./Calendar.feb45f8d.js";const T={class:"flex justify-center"},ce=w({__name:"new_client",setup($){const t=r({additional_phone:"",email:"",gender:"",birthday:"",instagram:"",telegram:"",comment:"",status:"",userpic:"",phone:"",name:""}),u=r();V();const s=r(""),i=r(""),g=()=>{const a=localStorage.getItem("token"),e=new FormData;e.append("additional_phone",t.value.additional_phone),e.append("email",t.value.email),e.append("gender",t.value.gender),e.append("birthday",t.value.birthday?N(t.value.birthday):""),e.append("instagram",t.value.instagram),e.append("telegram",t.value.telegram),e.append("comment",t.value.comment),e.append("status",t.value.status),e.append("userpic",t.value.userpic),e.append("phone",t.value.phone),e.append("name",t.value.name),e.append("access_token",a||""),u.value=e},y=(a,e)=>{t.value[e]=a},d=a=>{if(a==="Client already exists")return s.value="Клієнт вже існує",!1;if(a==="Client created successfully")return i.value="Клієнта успішно створено",t.value={},!1;s.value="Щось не вийшло!"},_=()=>{g(),F(`${I()}/add_client`,{method:"POST",body:u.value}).then(a=>{d(a.message)}).catch(a=>{d(a.message),console.log(a)})};return(a,e)=>{const f=U,k=S,C=A,x=B,b=D;return m(),l(b,{title:"Додати клієнта"},{header:o(()=>[c(f,{onClick:_,class:"hidden lg:block"},{default:o(()=>[p(" Створити ")]),_:1})]),content:o(()=>[n(s)?(m(),l(k,{key:0},{default:o(()=>[p(h(n(s)),1)]),_:1})):v("",!0),n(i)?(m(),l(C,{key:1},{default:o(()=>[p(h(n(i)),1)]),_:1})):v("",!0),c(x,{inputs:n(t),labelStatus:"Статус клієнта:",onUpdateInputs:y},null,8,["inputs"]),P("div",T,[c(f,{onClick:_,class:"lg:hidden"},{default:o(()=>[p(" Створити ")]),_:1})])]),_:1})}}});export{ce as default};
