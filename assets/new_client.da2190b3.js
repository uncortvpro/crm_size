import{_ as S}from"./ButtonOpacityBorder.2e92b8eb.js";import{_ as U}from"./AlertDanger.c37ba145.js";import{_ as A}from"./AlertSuccess.3ef4f6d8.js";import{_ as B,u as D}from"./useDateToString.ebddabeb.js";import{_ as w}from"./ProfilePage.vue.c75d0b90.js";import{f as N,i as r,h as V,o as i,j as c,w as n,b as u,d as p,l as o,t as _,m as f,a as F,K as I,v as P}from"./entry.524c610c.js";import"./ButtonOpacity.9a4547b2.js";import"./useFormGroup.6b8db274.js";import"./index.b78e9366.js";import"./DivBorderBg.95754b74.js";import"./ui.config.11131de5.js";import"./index.879abb1f.js";import"./disposables.d200f846.js";import"./Calendar.370c0fd6.js";import"./nuxt-icon.b87310e9.js";import"./nuxt-link.8ba89c35.js";import"./Photo.66cf328c.js";import"./User.7a1768e2.js";const T={class:"flex justify-center"},te=N({__name:"new_client",setup($){const t=r({}),m=r();V();const s=r(""),l=r(""),v=()=>{const a=localStorage.getItem("token"),e=new FormData;e.append("additional_phone",t.value.additional_phone),e.append("email",t.value.email),e.append("gender",t.value.gender),e.append("birthday",D(t.value.birthday)),e.append("instagram",t.value.instagram),e.append("telegram",t.value.telegram),e.append("comment",t.value.comment),e.append("status",t.value.status),e.append("userpic",t.value.userpic),e.append("phone",t.value.phone),e.append("name",t.value.name),e.append("access_token",a||""),m.value=e},h=(a,e)=>{t.value[e]=a},g=a=>{if(a==="Client already exists")return s.value="Клієнт вже існує",!1;if(a==="Client created successfully")return l.value="Клієнта успішно створено",t.value={},!1;s.value="Щось не вийшло!"},y=()=>{v(),I(`${P()}/add_client`,{method:"POST",body:m.value}).then(a=>{g(a.message)}).catch(a=>{console.log(a)})};return(a,e)=>{const d=S,k=U,x=A,C=B,b=w;return i(),c(b,{title:"Додати клієнта"},{header:n(()=>[u(d,{onClick:y,class:"hidden lg:block"},{default:n(()=>[p(" Створити ")]),_:1})]),content:n(()=>[o(s)?(i(),c(k,{key:0},{default:n(()=>[p(_(o(s)),1)]),_:1})):f("",!0),o(l)?(i(),c(x,{key:1},{default:n(()=>[p(_(o(l)),1)]),_:1})):f("",!0),u(C,{inputs:o(t),labelStatus:"Статус клієнта:",onUpdateInputs:h},null,8,["inputs"]),F("div",T,[u(d,{disabled:"",class:"lg:hidden"},{default:n(()=>[p(" Створити ")]),_:1})])]),_:1})}}});export{te as default};
