import{_ as h}from"./disposables.e3f9ff83.js";import{_ as v}from"./Order.vue.b69a481d.js";import{_ as g}from"./ProfilePage.vue.4e8faf10.js";import{f as y,e as x}from"./entry.cc5e7feb.js";import{k,a as r,b as C,F as U,G as B,H as o,I as s,V as l,u as a,R as T}from"./swiper-vue.76d67008.js";import"./ButtonOpacity.fc710c82.js";import"./nuxt-link.8e638fd7.js";import"./AlertDanger.fe3ad7bc.js";import"./TextPrimary.a064acff.js";import"./AlertSuccess.4e4c868e.js";import"./Header2.e5c3690b.js";import"./SelectProfile.vue.d057932d.js";import"./tw-merge.7e46835e.js";import"./ui.config.b3e47b6e.js";import"./index.ee4f7712.js";import"./index.d04bfb4b.js";import"./useFormGroup.4e0b29c3.js";import"./ButtonOpacityDelete.182ce5d2.js";import"./CrossInCircle.2c2c6515.js";import"./nuxt-icon.311fb41a.js";import"./Search.fbae3962.js";import"./cn.a642df04.js";import"./Delete.a144a7d4.js";import"./SelectVariant.vue.51e8f147.js";import"./uid.12f507af.js";import"./ModalTitle.vue.3f12c400.js";import"./Modal.vue.2b023da3.js";import"./DivBorderBg.92d0bb82.js";import"./Table.vue.b969d40a.js";import"./ArrowTop.5235c37b.js";import"./ArrowRight.c8e633f0.js";import"./ButtonText.1fc26491.js";import"./CurrencyText.e36eea0c.js";import"./useBase64.1efa7b71.js";import"./ordersStore.872e3b81.js";import"./useSorting.9414d803.js";const V={class:"flex justify-center"},ct=k({__name:"new_order",setup(b){const i=r(""),p=r(""),t=r({client:"",email:"",comment:"",payment:"",shipping:"",source:"",status:"",products:[]}),_=(e,c)=>{t.value[c]=e},m=e=>{if(e===!0)return p.value="Замовлення успішно створено",t.value={},!1;i.value="Щось не вийшло!"},n=()=>{y(`${x()}/add_order`,{body:{client:t.value.client,email:t.value.email,shipping:t.value.shipping,status:t.value.status,source:t.value.source,payment:t.value.payment,comment:t.value.comment,products:t.value.products}}).then(e=>{m(e.message)}).catch(e=>{m(e),console.log(e)})};return C(t,()=>{console.log(t.value)},{deep:!0}),(e,c)=>{const u=h,d=v,f=g;return U(),B(f,{title:"Додати замовлення"},{header:o(()=>[s(u,{onClick:n,class:"hidden lg:block"},{default:o(()=>[l(" Створити ")]),_:1})]),content:o(()=>[s(d,{inputs:a(t),error:a(i),messageToUser:a(p),onUpdateInputs:_},null,8,["inputs","error","messageToUser"]),T("div",V,[s(u,{onClick:n,class:"lg:hidden mt-[25px]"},{default:o(()=>[l(" Створити ")]),_:1})])]),_:1})}}});export{ct as default};
