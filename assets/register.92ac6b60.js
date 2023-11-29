import{b as S,_ as N,a as P,c as D}from"./Auth.1a0d725b.js";import{_ as G}from"./AlertSuccess.7b121661.js";import{_ as R}from"./ButtonPrimary.43d10bbd.js";import{_ as $}from"./TextPrimary.2d49b8bb.js";import{_ as q}from"./ButtonText.6f805a11.js";import{k as I,r as L,a as g,ai as j,F as d,G as x,H as t,R as a,Y as z,I as o,V as e,u as c,U as h,Z as y}from"./swiper-vue.c8cb2f00.js";import{a as F,b as H}from"./entry.c96ea7b3.js";import"./tw-merge.84b2a5e2.js";import"./ui.config.a43d3c0d.js";import"./useFormGroup.1bfd3ee2.js";import"./index.fe933732.js";import"./uid.12f507af.js";import"./Google.8fc3f288.js";import"./nuxt-icon.4f438bac.js";function M(i,l=null){return l||(l=i),i!==l?"Паролі не співпадають":!1}const W={class:"rounded-[5px] bg-white max-w-[715px] w-full shadow-auth-shadow mx-[15px] my-[50px] shadow-gray-300 pt-[35px] px-[20px] pb-[15px] lg:pt-[55px] lg:px-[40px] lg:pb-[30px]"},Y=["onSubmit"],Z=a("h5",{class:"font-semibold uppercase text-[18px] text-center md:text-[24px] lg:text-[28px] xl:text-[30px]"}," РЕЄСТРАЦІЯ ",-1),E=a("p",{class:"text-center text-[9px] lg:text-[15px] mt-[12px] lg:mt-[20px]"}," або ",-1),J={class:"mt-[12px] lg:mt-[20px] gap-y-[12px] md:gap-y-[20px] md:gap-x-[20px] grid"},K={class:"mt-[12px] grid grid-cols-1 lg:grid-cols-2 gap-[12px]"},O=a("span",{class:"font-semibold"},"умови використання",-1),Q={class:"flex gap-[7px] items-center justify-center mt-[12px] lg:mt-[25px]"},dt=I({__name:"register",setup(i){const l=F(),w=H(),u=L({name:"",telephone:"",email:"",password:"",cPassword:""}),p=g(""),m=g(""),r=(s,_)=>{u[s]=_},v=()=>{const s=M(u.password,u.cPassword);return s?(p.value=s,!1):(p.value="",!0)},b=()=>{if(!v())return!1;w.register(u).then(s=>{(s.message="User created successfully")?m.value="Користувача успішно створено.":p.value="Не вдалося створити користувача. Спробуйте ще раз."}).catch(s=>{p.value="Не вдалося створити користувача. Спробуйте ще раз."})};return(s,_)=>{const C=S,n=N,f=P,V=j("AlertDanger"),U=G,T=R,k=$,B=q,A=D;return d(),x(A,{maxWidth:"715px"},{default:t(()=>[a("div",W,[a("form",{action:"#",onSubmit:z(b,["prevent"])},[Z,o(C,{class:"w-full mt-[20px] lg:mt-[30px] xl:mt-[40px]"},{default:t(()=>[e("Зареєструватися через Google")]),_:1}),E,a("div",J,[o(n,{inputType:"name",onChangeValue:r,type:"text",class:"md:col-span-1"},{default:t(()=>[e("Введіть повне ім’я:")]),_:1}),o(n,{inputType:"telephone",onChangeValue:r,type:"number",class:"md:col-span-1"},{default:t(()=>[e("Введіть номер телефону:")]),_:1}),o(n,{inputType:"email",onChangeValue:r,type:"text",class:"md:col-span-2"},{default:t(()=>[e("Введіть email:")]),_:1}),o(n,{type:"text",class:"md:col-span-1"},{default:t(()=>[e("Назва Бренду:")]),_:1}),o(n,{type:"text",class:"md:col-span-1"},{default:t(()=>[e("Посада:")]),_:1}),o(n,{inputType:"password",onChangeValue:r,type:"password",class:"md:col-span-1"},{default:t(()=>[e("Введіть пароль:")]),_:1}),o(n,{inputType:"cPassword",onChangeValue:r,type:"password",class:"md:col-span-1"},{default:t(()=>[e("Повторіть пароль:")]),_:1})]),a("div",K,[o(f,{required:!0},{default:t(()=>[e("Ви приймаєте "),O]),_:1}),o(f,{required:!0},{default:t(()=>[e("Я хочу отримувати листи на email з новинами та спеціальними пропозиціями")]),_:1})]),c(p)?(d(),x(V,{key:0},{default:t(()=>[e(h(c(p)),1)]),_:1})):y("",!0),c(m)?(d(),x(U,{key:1},{default:t(()=>[e(h(c(m)),1)]),_:1})):y("",!0),o(T,{type:"submit",class:"!rounded-[5px] mt-[15px] md:mt-[30px] lg:mt-[40px] w-full"},{default:t(()=>[e("Зареєструватися")]),_:1}),a("div",Q,[o(k,null,{default:t(()=>[e(" Вже зареєстровані? ")]),_:1}),o(B,{type:"button",onClick:_[0]||(_[0]=X=>c(l).push("/authorize"))},{default:t(()=>[e("Увійти")]),_:1})])],40,Y)])]),_:1})}}});export{dt as default};
