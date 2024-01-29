import{_ as z,a as Q}from"./ModalTitle.vue.1b8da5bd.js";import{_ as N}from"./LabelProfile.vue.7927c4cc.js";import{a as Z}from"./SelectProfile.vue.3961a818.js";import{_ as O}from"./AlertDanger.8ffe68fc.js";import{_ as j}from"./ButtonOpacityBorder.331d6c0f.js";import{f as B,e as C}from"./entry.14287089.js";import{k as R,a as g,F as u,G as y,H as n,R as k,I as a,u as e,V as w,U as M,Z as E,l as q,Q as A,_ as I,a2 as F,a3 as G,f as U}from"./swiper-vue.7d7207a4.js";import{_ as J}from"./Button.vue.8bc0fe75.js";import{c as D}from"./cn.a642df04.js";import{_ as K}from"./ButtonOpacityBorderAddItem.f637ac3a.js";import{_ as W}from"./TextareaProfile.vue.42abf356.js";import{_ as X}from"./DivBorderBg.51e86300.js";import{_ as Y}from"./ProfilePage.vue.bb1cb1e7.js";import"./Header2.b6d63107.js";import"./Modal.vue.d6d3610a.js";import"./ui.config.28bdcf52.js";import"./nuxt-link.7861695d.js";import"./tw-merge.c12b54cd.js";import"./index.4e64f9f1.js";import"./useFormGroup.348c1ff5.js";import"./TextPrimary.9c6a2407.js";import"./ButtonOpacity.467a53d6.js";import"./CrossInCircle.d363a90c.js";import"./nuxt-icon.90b68e3b.js";const ee={class:"flex flex-col mt-[7px] md:mt-[10px] xl:mt-[13px]"},te={class:"flex items-center gap-[15px]"},le={class:"flex items-center gap-[15px]"},ae=R({__name:"MailingModalAddingRecipients",props:{mailingEmails:{},typeMessage:{}},emits:["update:mailingEmails","switcherModal"],setup(h,{emit:b}){const i=h,s=b,_=m=>{s("update:mailingEmails",m)},x=g([]),t=g(""),l=g({category:"",min_price:"",max_price:"",min_total_price:"",min_max_price:""}),V=()=>{B(`${C()}/get_category`).then(m=>{x.value=m.categories})},d=()=>{B(`${C()}/new_mailing_list`,{body:{category:l.value.category,min_max_price:+l.value.min_max_price,min_total_price:+l.value.min_total_price,min_price:+l.value.min_price,max_price:+l.value.max_price}}).then(m=>{if(m.emails.length===0)return t.value="Нічого не знайдено!",!1;_(m.emails),s("switcherModal",!1)})},o=()=>{B(`${C()}/new_telegram_list`,{body:{category:l.value.category,min_max_price:+l.value.min_max_price,min_total_price:+l.value.min_total_price,min_price:+l.value.min_price,max_price:+l.value.max_price}}).then(m=>{if(console.log(m),m.tgIDs.length===0)return t.value="Нічого не знайдено!",!1;_(m.tgIDs),s("switcherModal",!1)})},$=()=>{i.typeMessage==="mail"&&d(),i.typeMessage==="telegram"&&o()};return V(),(m,r)=>{const v=z,f=N,L=Z,P=O,T=j,S=Q;return u(),y(S,{title:"Отримувачі",ui:{width:"!max-w-[480px]"}},{default:n(()=>[k("div",ee,[a(f,{label:"Ціна товару:",class:""},{default:n(()=>[k("div",te,[a(f,{noLabelTruncate:"",class:"!flex-row flex-1 items-center !gap-[10px]",label:"від"},{default:n(()=>[a(v,{modelValue:e(l).min_price,"onUpdate:modelValue":r[0]||(r[0]=c=>e(l).min_price=c),type:"number",class:"w-full"},null,8,["modelValue"])]),_:1}),a(f,{noLabelTruncate:"",class:"!flex-row flex-1 items-center !gap-[10px]",label:"до"},{default:n(()=>[a(v,{type:"number",modelValue:e(l).max_price,"onUpdate:modelValue":r[1]||(r[1]=c=>e(l).max_price=c),class:"w-full"},null,8,["modelValue"])]),_:1})])]),_:1}),a(f,{class:"mt-[15px] xl:mt-[20px]",label:"Загальна вартість замовлення:"},{default:n(()=>[k("div",le,[a(f,{noLabelTruncate:"",class:"!flex-row flex-1 items-center !gap-[10px]",label:"від"},{default:n(()=>[a(v,{type:"number",modelValue:e(l).min_total_price,"onUpdate:modelValue":r[2]||(r[2]=c=>e(l).min_total_price=c),class:"w-full"},null,8,["modelValue"])]),_:1}),a(f,{noLabelTruncate:"",class:"!flex-row flex-1 items-center !gap-[10px]",label:"до"},{default:n(()=>[a(v,{type:"number",modelValue:e(l).min_max_price,"onUpdate:modelValue":r[3]||(r[3]=c=>e(l).min_max_price=c),class:"w-full"},null,8,["modelValue"])]),_:1})])]),_:1}),a(f,{class:"mt-[15px] xl:mt-[20px]",label:"Категорія товару:"},{default:n(()=>[a(L,{modelValue:e(l).category,"onUpdate:modelValue":r[4]||(r[4]=c=>e(l).category=c),valueSelect:e(l).category,options:e(x),class:"lg:max-w-[320px]"},null,8,["modelValue","valueSelect","options"])]),_:1}),e(t)?(u(),y(P,{key:0},{default:n(()=>[w(M(e(t)),1)]),_:1})):E("",!0),a(T,{onClick:$,class:"mt-[35px] self-center xl:mt-[45px]"},{default:n(()=>[w("Зберегти")]),_:1})])]),_:1})}}}),oe=R({__name:"Switcher",props:{options:{},modelValue:{},error:{type:Boolean}},emits:["update:modelValue"],setup(h,{emit:b}){const i=h,s=b,_=t=>{s("update:modelValue",t)},x=q(()=>i.options.find(t=>t.id===i.modelValue));return(t,l)=>{var d;const V=J;return u(),A("div",{class:I(("cn"in t?t.cn:e(D))("relative flex w-fit overflow-hidden rounded-[3px] border border-black md:rounded-[7px] xl:rounded-[5px]",{"!border-status_red":t.error}))},[k("span",{class:I(("cn"in t?t.cn:e(D))("absolute top-0 h-full text_xs z-10 px-[9px] text-transparent py-[5px] text-black md:px-[10px]  xl:px-[12px] rounded-[2px] bg-black duration-200 md:rounded-[5px] xl:rounded-[3px]",{"right-0":t.modelValue===t.options[1].id}))},M((d=e(x))==null?void 0:d.title),3),(u(!0),A(F,null,G(t.options,o=>(u(),y(V,{key:o.id,class:I(("cn"in t?t.cn:e(D))("text_xs relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]",{"text-white":t.modelValue===o.id})),onClick:$=>_(o.id)},{default:n(()=>[w(M(o.title),1)]),_:2},1032,["class","onClick"]))),128))],2)}}}),ne={class:"bg-beige h-[195px] overflow-auto scroll_bar xl:h-[170px] sm:max-w-[350px] rounded-[3px] text-[9px] md:text-[12px] no_scroll_bar resize-none focus:outline-none p-[10px]"},Ee=R({__name:"mailing_list",setup(h){const b=g(!1),i=g([]),s=g("telegram"),_=g(""),x=g(""),t=g(""),l=()=>{if(i.value.length===0)return t.value="Додайте отримувачів!",!1;const d={type:s.value,text:x.value,recipients:i.value};s.value==="mail"&&Object.assign(d,{subject:_.value}),B(`${C()}/send_mailing`,{body:d}).then(o=>{t.value=""})},V=d=>{b.value=d};return(d,o)=>{const $=ae,m=oe,r=K,v=N,f=z,L=W,P=O,T=j,S=X,c=Y;return u(),y(c,{title:"Розсилка"},{content:n(()=>[a($,{modelValue:e(b),"onUpdate:modelValue":o[0]||(o[0]=p=>U(b)?b.value=p:null),mailingEmails:e(i),"onUpdate:mailingEmails":o[1]||(o[1]=p=>U(i)?i.value=p:null),typeMessage:e(s),onSwitcherModal:V},null,8,["modelValue","mailingEmails","typeMessage"]),a(m,{modelValue:e(s),"onUpdate:modelValue":o[2]||(o[2]=p=>U(s)?s.value=p:null),options:[{id:"telegram",title:"Telegram"},{id:"mail",title:"Email"}]},null,8,["modelValue"]),a(S,{class:"max-w-[830px] mt-[10px] xl:mt-[40px] flex flex-col"},{default:n(()=>[a(r,{onClick:o[3]||(o[3]=p=>V(!0)),class:"flex-shrink-0 self-start mb-[15px] xl:mb-[20px]"},{default:n(()=>[w("Додати отримувачів")]),_:1}),e(i).length>0?(u(),y(v,{key:0,class:"",label:"Отримувачі:"},{default:n(()=>[k("div",ne,[(u(!0),A(F,null,G(e(i),(p,H)=>(u(),A("p",{key:H,class:"text-black text-[9px] leading-[150%] md:text-[10px] xl:text-[12px]"},M(p),1))),128))])]),_:1})):E("",!0),e(s)!=="telegram"?(u(),y(v,{key:1,class:"mt-[15px] xl:mt-[20px]",label:"Тема повідомлення:"},{default:n(()=>[a(f,{modelValue:e(_),"onUpdate:modelValue":o[4]||(o[4]=p=>U(_)?_.value=p:null),class:"sm:max-w-[350px] w-full"},null,8,["modelValue"])]),_:1})):E("",!0),a(v,{class:"mt-[15px] xl:mt-[20px]",label:"Текст повідомлення:"},{default:n(()=>[a(L,{modelValue:e(x),"onUpdate:modelValue":o[5]||(o[5]=p=>U(x)?x.value=p:null),class:"h-[110px] xl:h-[170px]"},null,8,["modelValue"])]),_:1}),e(t)?(u(),y(P,{key:2},{default:n(()=>[w(M(e(t)),1)]),_:1})):E("",!0),a(T,{onClick:l,class:"mt-[35px] self-center lg:self-start"},{default:n(()=>[w("Надіслати")]),_:1})]),_:1})]),_:1})}}});export{Ee as default};
