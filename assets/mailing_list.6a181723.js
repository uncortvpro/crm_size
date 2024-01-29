import{_ as D,a as Q}from"./ModalTitle.vue.42f2a726.js";import{_ as R}from"./LabelProfile.vue.a9365522.js";import{a as Z}from"./SelectProfile.vue.a369cf9c.js";import{_ as z}from"./AlertDanger.c27a8342.js";import{_ as N}from"./ButtonOpacityBorder.abea7ab6.js";import{f as $,e as B}from"./entry.94a6c9d5.js";import{k as j,a as f,F as u,G as b,H as i,R as U,I as o,u as e,V as y,U as k,Z as C,l as q,Q as E,_ as O,a2 as F,a3 as G,f as w}from"./swiper-vue.7d7207a4.js";import{_ as J}from"./Button.vue.38c12ad4.js";import{c as S}from"./cn.a642df04.js";import{_ as K}from"./ButtonOpacityBorderAddItem.36857b93.js";import{_ as W}from"./TextareaProfile.vue.42abf356.js";import{_ as X}from"./DivBorderBg.83b56692.js";import{_ as Y}from"./ProfilePage.vue.56052c5c.js";import"./Header2.4fa46062.js";import"./Modal.vue.aa485fad.js";import"./ui.config.a12e1c6d.js";import"./nuxt-link.c1d266ab.js";import"./tw-merge.d7afe501.js";import"./index.502b48fe.js";import"./index.1876d4a2.js";import"./useFormGroup.36eda7f7.js";import"./TextPrimary.9dfa35fb.js";import"./ButtonOpacity.00bc6a96.js";import"./CrossInCircle.9697d7fe.js";import"./nuxt-icon.63d722e8.js";import"./ArrowRight.2fa52525.js";const ee={class:"flex flex-col mt-[7px] md:mt-[10px] xl:mt-[13px]"},te={class:"flex items-center gap-[15px]"},le={class:"flex items-center gap-[15px]"},ae=j({__name:"MailingModalAddingRecipients",props:{mailingEmails:{},typeMessage:{}},emits:["update:mailingEmails","switcherModal"],setup(M,{emit:g}){const r=M,p=g,d=s=>{p("update:mailingEmails",s)},_=f([]),t=f(""),l=f({category:"",min_price:"",max_price:"",min_total_price:"",min_max_price:""}),v=()=>{$(`${B()}/get_category`).then(s=>{_.value=s.categories})},c=()=>{const s={category:l.value.category};return l.value.min_max_price&&Object.assign(s,{min_max_price:+l.value.min_max_price}),l.value.min_total_price&&Object.assign(s,{min_total_price:+l.value.min_total_price}),l.value.min_price&&Object.assign(s,{min_price:+l.value.min_price}),l.value.max_price&&Object.assign(s,{max_price:+l.value.max_price}),s},n=()=>{$(`${B()}/new_mailing_list`,{body:c()}).then(s=>{if(s.emails.length===0)return t.value="Нічого не знайдено!",!1;d(s.emails),t.value="",p("switcherModal",!1)})},h=()=>{$(`${B()}/new_telegram_list`,{body:c()}).then(s=>{if(console.log(s),s.tgIDs.length===0)return t.value="Нічого не знайдено!",!1;d(s.tgIDs),t.value="",p("switcherModal",!1)})},A=()=>{r.typeMessage==="mail"&&n(),r.typeMessage==="telegram"&&h()};return v(),(s,m)=>{const V=D,x=R,L=Z,P=z,T=N,I=Q;return u(),b(I,{title:"Отримувачі",ui:{width:"!max-w-[480px]"}},{default:i(()=>[U("div",ee,[o(x,{label:"Ціна товару:",class:""},{default:i(()=>[U("div",te,[o(x,{noLabelTruncate:"",class:"!flex-row flex-1 items-center !gap-[10px]",label:"від"},{default:i(()=>[o(V,{modelValue:e(l).min_price,"onUpdate:modelValue":m[0]||(m[0]=a=>e(l).min_price=a),type:"number",class:"w-full"},null,8,["modelValue"])]),_:1}),o(x,{noLabelTruncate:"",class:"!flex-row flex-1 items-center !gap-[10px]",label:"до"},{default:i(()=>[o(V,{type:"number",modelValue:e(l).max_price,"onUpdate:modelValue":m[1]||(m[1]=a=>e(l).max_price=a),class:"w-full"},null,8,["modelValue"])]),_:1})])]),_:1}),o(x,{class:"mt-[15px] xl:mt-[20px]",label:"Загальна вартість замовлення:"},{default:i(()=>[U("div",le,[o(x,{noLabelTruncate:"",class:"!flex-row flex-1 items-center !gap-[10px]",label:"від"},{default:i(()=>[o(V,{type:"number",modelValue:e(l).min_total_price,"onUpdate:modelValue":m[2]||(m[2]=a=>e(l).min_total_price=a),class:"w-full"},null,8,["modelValue"])]),_:1}),o(x,{noLabelTruncate:"",class:"!flex-row flex-1 items-center !gap-[10px]",label:"до"},{default:i(()=>[o(V,{type:"number",modelValue:e(l).min_max_price,"onUpdate:modelValue":m[3]||(m[3]=a=>e(l).min_max_price=a),class:"w-full"},null,8,["modelValue"])]),_:1})])]),_:1}),o(x,{class:"mt-[15px] xl:mt-[20px]",label:"Категорія товару:"},{default:i(()=>[o(L,{modelValue:e(l).category,"onUpdate:modelValue":m[4]||(m[4]=a=>e(l).category=a),valueSelect:e(l).category,options:e(_),class:"lg:max-w-[320px]"},null,8,["modelValue","valueSelect","options"])]),_:1}),e(t)?(u(),b(P,{key:0},{default:i(()=>[y(k(e(t)),1)]),_:1})):C("",!0),o(T,{onClick:A,class:"mt-[35px] self-center xl:mt-[45px]"},{default:i(()=>[y("Зберегти")]),_:1})])]),_:1})}}}),oe=j({__name:"Switcher",props:{options:{},modelValue:{},error:{type:Boolean}},emits:["update:modelValue"],setup(M,{emit:g}){const r=M,p=g,d=t=>{p("update:modelValue",t)},_=q(()=>r.options.find(t=>t.id===r.modelValue));return(t,l)=>{var c;const v=J;return u(),E("div",{class:O(("cn"in t?t.cn:e(S))("relative flex w-fit overflow-hidden rounded-[3px] border border-black md:rounded-[7px] xl:rounded-[5px]",{"!border-status_red":t.error}))},[U("span",{class:O(("cn"in t?t.cn:e(S))("absolute top-0 h-full text_xs z-10 px-[9px] text-transparent py-[5px] text-black md:px-[10px]  xl:px-[12px] rounded-[2px] bg-black duration-200 md:rounded-[5px] xl:rounded-[3px]",{"right-0":t.modelValue===t.options[1].id}))},k((c=e(_))==null?void 0:c.title),3),(u(!0),E(F,null,G(t.options,n=>(u(),b(v,{key:n.id,class:O(("cn"in t?t.cn:e(S))("text_xs relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]",{"text-white":t.modelValue===n.id})),onClick:h=>d(n.id)},{default:i(()=>[y(k(n.title),1)]),_:2},1032,["class","onClick"]))),128))],2)}}}),ne={class:"bg-beige h-[195px] overflow-auto scroll_bar xl:h-[170px] sm:max-w-[350px] rounded-[3px] text-[9px] md:text-[12px] no_scroll_bar resize-none focus:outline-none p-[10px]"},Le=j({__name:"mailing_list",setup(M){const g=f(!1),r=f([]),p=f("telegram"),d=f(""),_=f(""),t=f(""),l=()=>{if(r.value.length===0)return t.value="Додайте отримувачів!",!1;const c={type:p.value,text:_.value,recipients:r.value};p.value==="mail"&&Object.assign(c,{subject:d.value}),$(`${B()}/send_mailing`,{body:c}).then(n=>{t.value=""})},v=c=>{g.value=c};return(c,n)=>{const h=ae,A=oe,s=K,m=R,V=D,x=W,L=z,P=N,T=X,I=Y;return u(),b(I,{title:"Розсилка"},{content:i(()=>[o(h,{modelValue:e(g),"onUpdate:modelValue":n[0]||(n[0]=a=>w(g)?g.value=a:null),mailingEmails:e(r),"onUpdate:mailingEmails":n[1]||(n[1]=a=>w(r)?r.value=a:null),typeMessage:e(p),onSwitcherModal:v},null,8,["modelValue","mailingEmails","typeMessage"]),o(A,{modelValue:e(p),"onUpdate:modelValue":n[2]||(n[2]=a=>w(p)?p.value=a:null),options:[{id:"telegram",title:"Telegram"},{id:"mail",title:"Email"}]},null,8,["modelValue"]),o(T,{class:"max-w-[830px] mt-[10px] xl:mt-[40px] flex flex-col"},{default:i(()=>[o(s,{onClick:n[3]||(n[3]=a=>v(!0)),class:"flex-shrink-0 self-start mb-[15px] xl:mb-[20px]"},{default:i(()=>[y("Додати отримувачів")]),_:1}),e(r).length>0?(u(),b(m,{key:0,class:"",label:"Отримувачі:"},{default:i(()=>[U("div",ne,[(u(!0),E(F,null,G(e(r),(a,H)=>(u(),E("p",{key:H,class:"text-black text-[9px] leading-[150%] md:text-[10px] xl:text-[12px]"},k(a),1))),128))])]),_:1})):C("",!0),e(p)!=="telegram"?(u(),b(m,{key:1,class:"mt-[15px] xl:mt-[20px]",label:"Тема повідомлення:"},{default:i(()=>[o(V,{modelValue:e(d),"onUpdate:modelValue":n[4]||(n[4]=a=>w(d)?d.value=a:null),class:"sm:max-w-[350px] w-full"},null,8,["modelValue"])]),_:1})):C("",!0),o(m,{class:"mt-[15px] xl:mt-[20px]",label:"Текст повідомлення:"},{default:i(()=>[o(x,{modelValue:e(_),"onUpdate:modelValue":n[5]||(n[5]=a=>w(_)?_.value=a:null),class:"h-[110px] xl:h-[170px]"},null,8,["modelValue"])]),_:1}),e(t)?(u(),b(L,{key:2},{default:i(()=>[y(k(e(t)),1)]),_:1})):C("",!0),o(P,{onClick:l,class:"mt-[35px] self-center lg:self-start"},{default:i(()=>[y("Надіслати")]),_:1})]),_:1})]),_:1})}}});export{Le as default};
