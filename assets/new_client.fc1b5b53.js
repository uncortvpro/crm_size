import{_ as B}from"./ButtonOpacityBorder.a8320009.js";import{_ as U}from"./AlertDanger.d22546c1.js";import{_ as S}from"./AlertSuccess.9cd524ad.js";import{_ as A}from"./Client.vue.59d19ea5.js";import{_ as D}from"./ProfilePage.vue.fb5ff74a.js";import{b as V,d as F,e as I,n as N}from"./entry.1ece7de6.js";import{u as T}from"./useFormatDate.5d8a9f2b.js";import{k as w,a as s,F as i,G as m,H as o,I as l,V as p,u as n,U as h,Z as g,R as P}from"./swiper-vue.7d7207a4.js";import"./ButtonOpacity.36bd00f9.js";import"./Button.vue.2d6eab8e.js";import"./nuxt-link.c6d28d06.js";import"./TextPrimary.2dbc12b6.js";import"./Header2.5a29f5db.js";import"./ModalTitle.vue.08a3dde7.js";import"./Modal.vue.4fd597f3.js";import"./ui.config.c588cbc6.js";import"./LabelProfile.vue.ba6cf204.js";import"./cn.a642df04.js";import"./SelectProfile.vue.54b369fa.js";import"./tw-merge.8bcd16fa.js";import"./index.502b48fe.js";import"./index.1876d4a2.js";import"./useFormGroup.36eda7f7.js";import"./TextareaProfile.vue.42abf356.js";import"./SelectVariant.vue.93aa74c9.js";import"./Radio.3555339e.js";import"./uid.12f507af.js";import"./DivBorderBg.44a39ae4.js";import"./InputImage.vue.7bdec52a.js";import"./useBase64.1efa7b71.js";import"./Photo.97e6cc67.js";import"./nuxt-icon.aa89098f.js";import"./User.0df0a1eb.js";import"./ArrowRight.2feefc93.js";import"./Calendar.9cc7dad8.js";const $={class:"flex justify-center"},ye=w({__name:"new_client",setup(L){const t=s({additional_phone:"",email:"",gender:"",birthday:"",instagram:"",telegram:"",comment:"",status:"",userpic:"",phone:"",name:""}),c=s();V();const r=s(""),u=s(""),v=()=>{const a=localStorage.getItem("token"),e=new FormData;e.append("additional_phone",t.value.additional_phone),e.append("email",t.value.email),e.append("gender",t.value.gender),e.append("birthday",t.value.birthday?T(t.value.birthday):""),e.append("instagram",t.value.instagram),e.append("telegram",t.value.telegram),e.append("comment",t.value.comment),e.append("status",t.value.status),e.append("userpic",t.value.userpic),e.append("phone",t.value.phone),e.append("name",t.value.name),e.append("access_token",a||""),c.value=e},y=(a,e)=>{t.value[e]=a},d=a=>{if(a==="Client already exists")return r.value="Клієнт вже існує",!1;if(a==="Client created successfully")return N("/profile/clients"),t.value={},!1;r.value="Щось не вийшло!"},_=()=>{v(),F(`${I()}/add_client`,{method:"POST",body:c.value}).then(a=>{d(a.message)}).catch(a=>{d(a.message),console.log(a)})};return(a,e)=>{const f=B,k=U,C=S,x=A,b=D;return i(),m(b,{isButtonBack:"",title:"Додати клієнта"},{header:o(()=>[l(f,{onClick:_,class:"hidden lg:block"},{default:o(()=>[p(" Створити ")]),_:1})]),content:o(()=>[n(r)?(i(),m(k,{key:0},{default:o(()=>[p(h(n(r)),1)]),_:1})):g("",!0),n(u)?(i(),m(C,{key:1},{default:o(()=>[p(h(n(u)),1)]),_:1})):g("",!0),l(x,{inputs:n(t),labelStatus:"Статус клієнта:",onUpdateInputs:y},null,8,["inputs"]),P("div",$,[l(f,{onClick:_,class:"lg:hidden"},{default:o(()=>[p(" Створити ")]),_:1})])]),_:1})}}});export{ye as default};