import{_ as C,a as U,b as V,c as B}from"./Auth.29eeb47c.js";import{_ as A}from"./ButtonText.e961c12d.js";import{_ as T}from"./AlertDanger.be139bea.js";import{_ as N}from"./ButtonPrimary.68f0a26f.js";import{_ as S}from"./TextPrimary.6c84577b.js";import{k as $,r as G,a as D,F as u,G as x,H as t,R as n,Y as I,I as s,V as o,u as c,U as L,Z as P}from"./swiper-vue.c2b88c58.js";import{a as R,b as j}from"./entry.e567a446.js";import"./tw-merge.c375e922.js";import"./ui.config.28a3590b.js";import"./useFormGroup.a119c6c7.js";import"./Button.vue.09b0195d.js";import"./nuxt-link.793ce550.js";import"./uid.12f507af.js";import"./Google.c26be4f2.js";import"./nuxt-icon.c7004446.js";const z={class:"rounded-[5px] bg-white max-w-[560px] w-full shadow-auth-shadow mx-[15px] my-[50px] shadow-gray-300 pt-[35px] px-[20px] pb-[15px] lg:pt-[55px] lg:px-[40px] lg:pb-[30px]"},F=["onSubmit"],H=n("h5",{class:"font-semibold uppercase text-[18px] text-center md:text-[24px] lg:text-[28px] xl:text-[30px]"}," АВТОРИЗАЦІЯ ",-1),M={class:"mt-[12px] lg:mt-[20px] gap-y-[12px] md:gap-y-[20px] md:gap-x-[20px] grid"},Y={class:"mt-[12px] grid items-center grid-cols-2 gap-[12px]"},Z={class:"flex gap-[7px] items-center justify-center mt-[12px] lg:mt-[25px]"},rt=$({__name:"authorize",setup(q){const d=R(),_=j(),f=e=>_.successAuth(e),r=G({login:"",password:""}),a=D(""),m=(e,p)=>{r[e]=p},g=()=>{_.login(r).then(async e=>{e.access_token||(a.value="Користувач не існує"),await f(e.access_token)}).catch(e=>{a.value="Користувач не існує"})};return(e,p)=>{const i=C,h=U,l=A,y=T,w=N,b=V,v=S,k=B;return u(),x(k,null,{default:t(()=>[n("div",z,[n("form",{action:"#",onSubmit:I(g,["prevent"])},[H,n("div",M,[s(i,{inputType:"login",onChangeValue:m,type:"text",class:"md:col-span-1"},{default:t(()=>[o("Електронна пошта або логін:")]),_:1}),s(i,{inputType:"password",onChangeValue:m,type:"password",class:"md:col-span-1"},{default:t(()=>[o("Пароль:")]),_:1})]),n("div",Y,[s(h,null,{default:t(()=>[o("Запам’ятати мене")]),_:1}),s(l,{type:"button",class:"text-right !font-normal"},{default:t(()=>[o(" Забули пароль? ")]),_:1})]),c(a)?(u(),x(y,{key:0,class:"!text-red-600 mt-[15px]"},{default:t(()=>[o(L(c(a)),1)]),_:1})):P("",!0),s(w,{class:"!rounded-[5px] mt-[15px] md:mt-[30px] lg:mt-[40px] w-full"},{default:t(()=>[o("Увійти")]),_:1}),s(b,{type:"button",class:"w-full mt-[9px] lg:mt-[15px]"},{default:t(()=>[o("Увійти з Google")]),_:1}),n("div",Z,[s(v,null,{default:t(()=>[o(" Ще не зареєстровані? ")]),_:1}),s(l,{type:"button",onClick:p[0]||(p[0]=E=>c(d).push("/register"))},{default:t(()=>[o("Зареєструватися")]),_:1})])],40,F)])]),_:1})}}});export{rt as default};