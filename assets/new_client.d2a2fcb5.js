import{_ as A}from"./disposables.e43502a6.js";import{_ as S}from"./AlertDanger.51965057.js";import{_ as U}from"./AlertSuccess.6064e2ce.js";import{_ as B,a as D}from"./useDateToString.9e79c6d5.js";import{_ as w}from"./ProfilePage.vue.163c5b3f.js";import{f as N,i as r,h as V,o as i,j as c,w as n,b as m,d as p,l as o,t as _,m as f,a as F,z as I,A as P}from"./entry.a0142ef1.js";import"./ButtonOpacity.d5eb19ed.js";import"./useFormGroup.caf475e0.js";import"./index.842286eb.js";import"./Header2.8e05bf54.js";import"./DivBorderBg.54795580.js";import"./tw-merge.b150eb74.js";import"./ui.config.f134f843.js";import"./index.ea2b25d5.js";import"./Calendar.01f4050f.js";import"./nuxt-icon.b4cdb491.js";import"./nuxt-link.2473991e.js";import"./Photo.f34c065d.js";import"./User.1a06d223.js";const T={class:"flex justify-center"},ae=N({__name:"new_client",setup($){const t=r({}),u=r();V();const s=r(""),l=r(""),h=()=>{const a=localStorage.getItem("token"),e=new FormData;e.append("additional_phone",t.value.additional_phone),e.append("email",t.value.email),e.append("gender",t.value.gender),e.append("birthday",D(t.value.birthday)),e.append("instagram",t.value.instagram),e.append("telegram",t.value.telegram),e.append("comment",t.value.comment),e.append("status",t.value.status),e.append("userpic",t.value.userpic),e.append("phone",t.value.phone),e.append("name",t.value.name),e.append("access_token",a||""),u.value=e},v=(a,e)=>{t.value[e]=a},g=a=>{if(a==="Client already exists")return s.value="Клієнт вже існує",!1;if(a==="Client created successfully")return l.value="Клієнта успішно створено",t.value={},!1;s.value="Щось не вийшло!"},y=()=>{h(),I(`${P()}/add_client`,{method:"POST",body:u.value}).then(a=>{g(a.message)}).catch(a=>{console.log(a)})};return(a,e)=>{const d=A,k=S,x=U,C=B,b=w;return i(),c(b,{title:"Додати клієнта"},{header:n(()=>[m(d,{onClick:y,class:"hidden lg:block"},{default:n(()=>[p(" Створити ")]),_:1})]),content:n(()=>[o(s)?(i(),c(k,{key:0},{default:n(()=>[p(_(o(s)),1)]),_:1})):f("",!0),o(l)?(i(),c(x,{key:1},{default:n(()=>[p(_(o(l)),1)]),_:1})):f("",!0),m(C,{inputs:o(t),labelStatus:"Статус клієнта:",onUpdateInputs:v},null,8,["inputs"]),F("div",T,[m(d,{disabled:"",class:"lg:hidden"},{default:n(()=>[p(" Створити ")]),_:1})])]),_:1})}}});export{ae as default};