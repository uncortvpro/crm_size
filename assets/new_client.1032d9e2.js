import{_ as U}from"./disposables.60fc7ce5.js";import{_ as S}from"./AlertDanger.2071aea5.js";import{_ as A}from"./AlertSuccess.7b121661.js";import{_ as B}from"./Client.vue.17b50778.js";import{_ as D}from"./ProfilePage.vue.82f3a9f1.js";import{b as V,d as F,e as I}from"./entry.c96ea7b3.js";import{u as N}from"./useFormatDate.49389e74.js";import{k as w,a as s,F as m,G as l,H as o,I as c,V as p,u as n,U as h,Z as v,R as P}from"./swiper-vue.c8cb2f00.js";import"./ButtonOpacity.f518d4a2.js";import"./index.fe933732.js";import"./nuxt-link.5c40ffd7.js";import"./TextPrimary.2d49b8bb.js";import"./Header2.b011104a.js";import"./InputProfile.vue.8ae544ab.js";import"./LabelProfile.vue.2af0f154.js";import"./SelectProfile.vue.6e188d44.js";import"./tw-merge.84b2a5e2.js";import"./ui.config.a43d3c0d.js";import"./useFormGroup.1bfd3ee2.js";import"./DatePicker.vue.801bba8e.js";import"./Calendar.b8907dce.js";import"./nuxt-icon.4f438bac.js";import"./DivGridForm.a132057f.js";import"./DivBorderBg.3b0e8f81.js";import"./Photo.cea2b680.js";import"./User.8a96a24c.js";import"./useBase64.1efa7b71.js";import"./SelectVariant.vue.0b2c8629.js";import"./Radio.170e0cc1.js";import"./uid.12f507af.js";import"./ModalTitle.vue.2f0728f3.js";import"./Modal.vue.b1984bec.js";const T={class:"flex justify-center"},fe=w({__name:"new_client",setup($){const t=s({additional_phone:"",email:"",gender:"",birthday:"",instagram:"",telegram:"",comment:"",status:"",userpic:"",phone:"",name:""}),u=s();V();const r=s(""),i=s(""),g=()=>{const a=localStorage.getItem("token"),e=new FormData;e.append("additional_phone",t.value.additional_phone),e.append("email",t.value.email),e.append("gender",t.value.gender),e.append("birthday",t.value.birthday?N(t.value.birthday):""),e.append("instagram",t.value.instagram),e.append("telegram",t.value.telegram),e.append("comment",t.value.comment),e.append("status",t.value.status),e.append("userpic",t.value.userpic),e.append("phone",t.value.phone),e.append("name",t.value.name),e.append("access_token",a||""),u.value=e},y=(a,e)=>{t.value[e]=a},d=a=>{if(a==="Client already exists")return r.value="Клієнт вже існує",!1;if(a==="Client created successfully")return i.value="Клієнта успішно створено",t.value={},!1;r.value="Щось не вийшло!"},_=()=>{g(),F(`${I()}/add_client`,{method:"POST",body:u.value}).then(a=>{d(a.message)}).catch(a=>{d(a.message),console.log(a)})};return(a,e)=>{const f=U,k=S,C=A,x=B,b=D;return m(),l(b,{title:"Додати клієнта"},{header:o(()=>[c(f,{onClick:_,class:"hidden lg:block"},{default:o(()=>[p(" Створити ")]),_:1})]),content:o(()=>[n(r)?(m(),l(k,{key:0},{default:o(()=>[p(h(n(r)),1)]),_:1})):v("",!0),n(i)?(m(),l(C,{key:1},{default:o(()=>[p(h(n(i)),1)]),_:1})):v("",!0),c(x,{inputs:n(t),labelStatus:"Статус клієнта:",onUpdateInputs:y},null,8,["inputs"]),P("div",T,[c(f,{onClick:_,class:"lg:hidden"},{default:o(()=>[p(" Створити ")]),_:1})])]),_:1})}}});export{fe as default};
