import{_ as f}from"./ButtonOpacityBorder.b20bc0a5.js";import{_ as v}from"./Product.vue.c5f54e42.js";import{_ as g}from"./ProfilePage.vue.e53e23ed.js";import{f as y,e as k}from"./entry.a7db78e0.js";import{k as w,a as r,F as x,G as C,H as e,I as s,V as _,u as a,R as U}from"./swiper-vue.6e4b9487.js";import"./ButtonOpacity.a941fccb.js";import"./Button.vue.403d863a.js";import"./nuxt-link.c84a3561.js";import"./AlertDanger.e2355836.js";import"./TextPrimary.dfbade2b.js";import"./AlertSuccess.2999cc75.js";import"./Header2.ea895c44.js";import"./ModalTitle.vue.5436b0e2.js";import"./Modal.vue.8e19d014.js";import"./ui.config.221b1ad4.js";import"./LabelProfile.vue.3e32a02a.js";import"./SelectVariant.vue.9e1f81d0.js";import"./SelectProfile.vue.45aea98a.js";import"./tw-merge.ce19ca2b.js";import"./index.156df155.js";import"./uid.67695475.js";import"./Radio.096c81ae.js";import"./SelectSubwarehouse.vue.0c8423a4.js";import"./useSorting.9908e62e.js";import"./DivBorderBg.58473391.js";import"./InputImage.vue.cc3e5eb5.js";import"./useBase64.1efa7b71.js";import"./Cross.da19ed6d.js";import"./nuxt-icon.1ff6c1ea.js";import"./ButtonText.40c98744.js";import"./Table.vue.d83bd75d.js";import"./ArrowTop.45e95320.js";import"./ArrowRight.222cf0a8.js";import"./cn.a642df04.js";import"./AddImage.f29940f9.js";import"./TransitionTableCell.vue.8666db8d.js";import"./InputProfileTable.4eccab86.js";import"./CurrencyText.d295505c.js";import"./ButtonOpacityDelete.b5df1415.js";import"./Delete.21faf37d.js";const b={class:"flex justify-center"},lo=w({__name:"new_product",setup(B){const i=r(""),p=r(""),t=r({name:"",description:"",status:"",status_type:"product",category:"",warehouse:"",subwarehouse:"",comment:"",photo:"",variations:[]}),l=(o,c)=>{t.value[c]=o},m=o=>{if(o===!0)return p.value="Товар успішно створено",!1;i.value="Щось не вийшло!"},n=()=>{y(`${k()}/add_product`,{body:{name:t.value.name,description:t.value.description,status:t.value.status,status_type:"product",category:t.value.category,warehouse:t.value.warehouse,subwarehouse:t.value.subwarehouse,comment:t.value.comment,photo:t.value.photo,variations:t.value.variations.map(o=>({size:o.size,colour:o.colour,price:+o.price,in_stock:+o.in_stock,photos:[o.photos],cost_price:o.cost_price}))}}).then(o=>{m(o.message)}).catch(o=>{m(o),console.log(o)})};return(o,c)=>{const u=f,d=v,h=g;return x(),C(h,{title:"Додати товар"},{header:e(()=>[s(u,{onClick:n,class:"hidden lg:block"},{default:e(()=>[_(" Створити ")]),_:1})]),content:e(()=>[s(d,{inputs:a(t),error:a(i),messageToUser:a(p),onUpdateInputs:l},null,8,["inputs","error","messageToUser"]),U("div",b,[s(u,{onClick:n,class:"lg:hidden mt-[25px]"},{default:e(()=>[_(" Створити ")]),_:1})])]),_:1})}}});export{lo as default};
