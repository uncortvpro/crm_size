import{_ as S}from"./disposables.70b61260.js";import{_ as U}from"./AlertDanger.bd31df70.js";import{_ as w}from"./AlertSuccess.fe4fa188.js";import{b as A,u as B}from"./useDateToString.4c6bcc04.js";import{_ as D}from"./ProfilePage.vue.9eee05d3.js";import{f as N,i as r,h as V,R as F,o as c,j as i,w as n,b as u,d as l,l as o,t as _,m as f,a as I,M as P,v as T}from"./entry.b9692a03.js";import"./ButtonOpacity.218cfc58.js";import"./useFormGroup.3f227360.js";import"./index.24f3f10d.js";import"./nuxt-link.f2797933.js";import"./ui.config.326912ea.js";import"./index.97eb10f0.js";import"./Calendar.cb6368a3.js";import"./nuxt-icon.0c4ce2b5.js";import"./Photo.9b507acd.js";import"./User.75d6572f.js";const $={class:"flex justify-center"},ee=N({__name:"new_client",setup(j){const e=r({}),m=r();V();const s=r(""),p=r(""),v=()=>{const a=localStorage.getItem("token"),t=new FormData;t.append("additional_phone",e.value.additional_phone),t.append("email",e.value.email),t.append("gender",e.value.gender),t.append("birthday",B(e.value.birthday)),t.append("instagram",e.value.instagram),t.append("telegram",e.value.telegram),t.append("comment",e.value.comment),t.append("status",e.value.status),t.append("userpic",e.value.userpic),t.append("phone",e.value.phone),t.append("name",e.value.name),t.append("access_token",a||""),m.value=t},h=(a,t)=>{e.value[t]=a},g=a=>{if(a==="Client already exists")return s.value="Клієнт вже існує",!1;if(a==="Client created successfully")return p.value="Клієнта успішно створено",e.value={},!1;s.value="Щось не вийшло!"},y=()=>{v(),P(`${T()}/add_client`,{method:"POST",body:m.value}).then(a=>{g(a.message)}).catch(a=>{console.log(a)})};return F(()=>e.value,()=>{console.log(e.value)},{deep:!0}),(a,t)=>{const d=S,k=U,x=w,C=A,b=D;return c(),i(b,{title:"Додати клієнта"},{header:n(()=>[u(d,{onClick:y,class:"hidden lg:block"},{default:n(()=>[l(" Створити ")]),_:1})]),content:n(()=>[o(s)?(c(),i(k,{key:0},{default:n(()=>[l(_(o(s)),1)]),_:1})):f("",!0),o(p)?(c(),i(x,{key:1},{default:n(()=>[l(_(o(p)),1)]),_:1})):f("",!0),u(C,{inputs:o(e),labelStatus:"Статус клієнта:",onUpdateInputs:h},null,8,["inputs"]),I("div",$,[u(d,{disabled:"",class:"lg:hidden"},{default:n(()=>[l(" Створити ")]),_:1})])]),_:1})}}});export{ee as default};