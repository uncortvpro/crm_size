import{_ as U}from"./disposables.54d7e101.js";import{_ as S}from"./AlertDanger.ab58dd30.js";import{_ as A}from"./AlertSuccess.1d97116f.js";import{_ as B}from"./Client.vue.c7a02e1a.js";import{_ as D}from"./ProfilePage.vue.ff370904.js";import{b as V,d as F,e as I}from"./entry.1e93d377.js";import{u as N}from"./useFormatDate.49389e74.js";import{k as w,a as s,F as m,G as l,H as o,I as c,V as p,u as n,U as h,Z as v,R as P}from"./swiper-vue.4e3db160.js";import"./ButtonOpacity.f3c85dea.js";import"./index.52f37379.js";import"./nuxt-link.4d0a7976.js";import"./TextPrimary.91b6abbf.js";import"./Header2.94aba7e8.js";import"./SelectProfile.vue.8e153d89.js";import"./tw-merge.0e95fa20.js";import"./ui.config.838c3409.js";import"./useFormGroup.4f8166fe.js";import"./LabelProfile.vue.b093ea81.js";import"./DatePicker.vue.75e28c21.js";import"./Calendar.41c9e1a9.js";import"./nuxt-icon.1dd6481e.js";import"./DivGridForm.bb088b90.js";import"./DivBorderBg.acf2b856.js";import"./Photo.9c1a92ba.js";import"./User.0847ecf4.js";import"./useBase64.1efa7b71.js";import"./SelectVariant.vue.4ca0e715.js";import"./uid.12f507af.js";import"./ModalTitle.vue.66966d41.js";import"./Modal.vue.ddcb5f2b.js";const T={class:"flex justify-center"},de=w({__name:"new_client",setup($){const t=s({additional_phone:"",email:"",gender:"",birthday:"",instagram:"",telegram:"",comment:"",status:"",userpic:"",phone:"",name:""}),u=s();V();const r=s(""),i=s(""),g=()=>{const a=localStorage.getItem("token"),e=new FormData;e.append("additional_phone",t.value.additional_phone),e.append("email",t.value.email),e.append("gender",t.value.gender),e.append("birthday",t.value.birthday?N(t.value.birthday):""),e.append("instagram",t.value.instagram),e.append("telegram",t.value.telegram),e.append("comment",t.value.comment),e.append("status",t.value.status),e.append("userpic",t.value.userpic),e.append("phone",t.value.phone),e.append("name",t.value.name),e.append("access_token",a||""),u.value=e},y=(a,e)=>{t.value[e]=a},d=a=>{if(a==="Client already exists")return r.value="Клієнт вже існує",!1;if(a==="Client created successfully")return i.value="Клієнта успішно створено",t.value={},!1;r.value="Щось не вийшло!"},_=()=>{g(),F(`${I()}/add_client`,{method:"POST",body:u.value}).then(a=>{d(a.message)}).catch(a=>{d(a.message),console.log(a)})};return(a,e)=>{const f=U,k=S,C=A,x=B,b=D;return m(),l(b,{title:"Додати клієнта"},{header:o(()=>[c(f,{onClick:_,class:"hidden lg:block"},{default:o(()=>[p(" Створити ")]),_:1})]),content:o(()=>[n(r)?(m(),l(k,{key:0},{default:o(()=>[p(h(n(r)),1)]),_:1})):v("",!0),n(i)?(m(),l(C,{key:1},{default:o(()=>[p(h(n(i)),1)]),_:1})):v("",!0),c(x,{inputs:n(t),labelStatus:"Статус клієнта:",onUpdateInputs:y},null,8,["inputs"]),P("div",T,[c(f,{onClick:_,class:"lg:hidden"},{default:o(()=>[p(" Створити ")]),_:1})])]),_:1})}}});export{de as default};