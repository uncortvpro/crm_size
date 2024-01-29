import{_ as k,a as v,b as C}from"./TitleSection.cbaf7c52.js";import{a as T,_ as y,b as $}from"./SectionIntegrations.53049afe.js";import{c as _}from"./cn.a642df04.js";import{k as u,F as p,Q as r,R as o,I as e,H as n,V as s,U as x,_ as d,u as c,a2 as U,a3 as V}from"./swiper-vue.7d7207a4.js";import{_ as B}from"./ButtonPrimary.f4bad1ba.js";import{n as M}from"./entry.1ece7de6.js";import"./DivBorderBg.44a39ae4.js";const R={class:"grid gap-[15px] md:gap-[25px] xl:gap-[70px] md:grid-cols-2"},S=["src"],H=u({__name:"ItemHowThisWork",props:{leftImage:{type:Boolean},item:{}},setup(g){return(t,i)=>{const a=T,l=k;return p(),r("div",R,[o("div",{class:d(("cn"in t?t.cn:c(_))("",{"md:order-2":t.leftImage}))},[e(a,{markValue:t.item.number,markStyles:"flex items-center justify-center text-[17px] md:text-[28px] xl:text-[40px] font-semibold !w-[27px] !h-[27px] md:!w-[45px] md:!h-[45px] xl:!w-[70px] xl:!h-[70px]"},{default:n(()=>[s(x(t.item.title),1)]),_:1},8,["markValue"]),e(l,{class:"mt-[10px] md:leading-[150%] md:!text-[16px] 2xl:!text-[25px] md:mt-[20px] xl:mt-[40px]"},{default:n(()=>[s(x(t.item.description),1)]),_:1})],2),o("img",{class:d(("cn"in t?t.cn:c(_))("rounded-[20px] drop-shadow-xl")),src:t.item.image,alt:""},null,10,S)])}}}),N=""+new URL("two_mobile.79508f42.png",import.meta.url).href,P={class:""},W=o("img",{src:N,class:"w-full mt-[50px] self-center z-10 xl:mt-0 xl:max-w-full col-span-4 3xl:col-span-2 3xl:ml-[-250px] 3xl:mt-[-100px] 3xl:w-[500px] 4xl:ml-[-300px] 4xl:w-[600px] 3xl:max-w-[700px] max-w-[400px]",alt:""},null,-1),z={class:"mt-[100px] md:mt-[110px]"},F={class:"container flex flex-col"},G={class:"mt-[51px] xl:[60px] flex flex-col gap-[35px] md:gap-[40px] xl:gap-[50px]"},q=u({__name:"opportunities",setup(g){const t=[{number:1,title:"Робота з клієнтами",leftImage:!0,image:"./img/clients_img.png",description:"Створюйте унікальні пропозиції для кожного клієнта на основі їхніх попередніх покупок та переглядів.Додавайте нових клієнтів, редагуйте інформацію та відстежуйте історію їхніх покупок – все це в одному місці. Інтуїтивний інтерфейс дозволяє вашому персоналу швидко освоїти всі функції, щоб вони могли зосередитися на наданні високоякісного обслуговування клієнтів."},{number:2,title:"Робота з працівниками",leftImage:!1,image:"./img/tasks_table.png",description:"Забезпечте чітке розподілення завдань та відстеження їх виконання. Наша CRM-система допомагає управляти робочим процесом, забезпечуючи прозорість та високу ефективність. Система дозволяє створювати індивідуальні та командні завдання, роблячи роботу захопливою та стимулюючою."},{number:3,title:"Робота зі складами",leftImage:!0,image:"./img/products_table.png",description:"Забудьте про невпорядковані склади та втрату товарів. Система дозволяє точно відстежувати рух кожної одиниці товару, гарантуючи, що ви завжди знаєте, скільки товару у вас є, і де він знаходиться. Це ключ до оптимального управління вашими запасами та логістикою. Від зручного ведення інвентарю до автоматизованого контролю за поставками."}];return(i,a)=>{const l=v,f=y,h=C,b=H,w=B,I=$;return p(),r("div",P,[e(f,{paddingY:"",button:"СПРОБУВАТИ",header:"ПРОСТІШЕ НЕ ПРИДУМАЄШ",description:"CRM-система, в якій все просто і зрозуміло!"},{main_image:n(()=>[W,e(l,{class:"bottom-[20%] md:bottom-[10%] left-0 right-0 m-auto xl:bottom-[0%] xl:left-auto"})]),_:1}),o("div",z,[o("div",F,[e(h,{class:"text-center"},{default:n(()=>[s("Як це працює")]),_:1}),o("div",G,[(p(),r(U,null,V(t,m=>e(b,{leftImage:m.leftImage,key:m.number,item:m},null,8,["leftImage","item"])),64))]),e(w,{onClick:a[0]||(a[0]=m=>("navigateTo"in i?i.navigateTo:c(M))("/register")),class:"mt-[40px] self-center md:mt-[60px] xl:mt-[80px]"},{default:n(()=>[s("СПРОБУВАТИ")]),_:1})])]),e(I)])}}});export{q as default};