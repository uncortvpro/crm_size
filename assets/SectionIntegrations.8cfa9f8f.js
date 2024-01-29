import{_ as f,b}from"./TitleSection.e05afa57.js";import{_ as k}from"./ButtonPrimary.c4ed6df8.js";import{c as l}from"./cn.a642df04.js";import{n as B,_ as v}from"./entry.1dbfaf80.js";import{k as u,F as d,Q as c,R as t,_ as r,u as o,U as p,I as a,H as i,V as m,a4 as A}from"./swiper-vue.7d7207a4.js";import{_ as I}from"./DivBorderBg.08ef3703.js";const C={class:"mt-[20px]"},J={class:"container"},G={class:"max-w-[1168px] text-black col-span-8 3xl:col-span-10"},S={class:"uppercase text-[30px] font-bold md:text-[45px] 3xl:text-[65px]"},L=u({__name:"SectionMain",props:{bgBeige:{type:Boolean},header:{},description:{},button:{},paddingY:{type:Boolean},paddingContainer:{type:Boolean},bgContainerOverflowHidden:{type:Boolean}},setup(x){return(e,n)=>{const s=f,g=k;return d(),c("main",C,[t("div",J,[t("div",{class:r(("cn"in e?e.cn:o(l))("rounded-[20px]",{"bg-beige":e.bgBeige,"xl:py-[50px]":e.paddingY,"overflow-hidden":e.bgContainerOverflowHidden}))},[t("div",{class:r(("cn"in e?e.cn:o(l))("relative flex xl:grid grid-cols-12 flex-col xl:pt-[110px] 3xl:pt-[200px] ",{"px-[19px] md:px-[40px] xl:px-[70px] pt-[60px]  md:pt-[90px] xl:pt-[110px] 3xl:pt-[200px]":e.paddingContainer}))},[t("div",G,[t("h2",S,p(e.header),1),a(s,{class:"text-[15px] mt-[10px] md:mt-[15px] xl:mt-[20px] font-medium md:text-[20px] xl:text-[25px]"},{default:i(()=>[m(p(e.description),1)]),_:1}),a(g,{onClick:n[0]||(n[0]=Q=>("navigateTo"in e?e.navigateTo:o(B))("/register")),class:"mt-[25px] md:mt-[35px] xl:mt-[65px]"},{default:i(()=>[m(p(e.button),1)]),_:1})]),A(e.$slots,"main_image")],2),A(e.$slots,"additional_elements")],2)])])}}}),U={class:"flex items-center gap-[5px] md:gap-[15px] xl:gap-[20px]"},N=u({__name:"ItemMarkGradient",props:{markValue:{},markStyles:{}},setup(x){return(e,n)=>{const s=f;return d(),c("h3",U,[t("span",{class:r(("cn"in e?e.cn:o(l))("w-[10px] h-[10px] flex-shrink-0 md:w-[20px] md:h-[20px] xl:w-[30px] xl:h-[30px] bg-gradient-to-r rounded-[50%] from-beige-1 to-transparent",e.markStyles))},p(e.markValue),3),a(s,null,{default:i(()=>[A(e.$slots,"default")]),_:3})])}}}),q=""+new URL("shopify.86f33f7e.png",import.meta.url).href,y="data:image/png;base64,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",R=""+new URL("google.4175a3fb.png",import.meta.url).href,j="data:image/png;base64,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",D={},V={class:"mt-[70px] md:mt-[90px] xl:mt-[110xp] 3xl:mt-[130px]"},h={class:"container"},w=t("div",{class:"max-w-[955px] self-center w-full flex gap-[30px] justify-between xl:justify-evenly"},[t("div",{class:"flex"},[t("img",{class:"object-contain",src:q,alt:""})]),t("div",{class:"flex justify-center"},[t("img",{class:"object-contain",src:y,alt:""})]),t("div",{class:"flex justify-center"},[t("img",{class:"object-contain",src:R,alt:""})]),t("div",{class:"flex justify-end"},[t("img",{class:"object-contain",src:j,alt:""})])],-1);function O(x,e){const n=b,s=I;return d(),c("div",V,[t("div",h,[a(s,{class:"!bg-beige flex flex-col gap-[18px] md:gap-[25px] xl:gap-[40px]"},{default:i(()=>[a(n,{class:"text-center md:!text-[30px]"},{default:i(()=>[m("Інтеграції з різними платформами без складнощів")]),_:1}),w]),_:1})])])}const T=v(D,[["render",O]]);export{L as _,N as a,T as b};