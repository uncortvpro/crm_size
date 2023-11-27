import{a as q,b as P,c as z}from"./SelectProfile.vue.d057932d.js";import{k,t as x,i as L,l as C,F as v,Q as U,R as w,a5 as H,a6 as J,E as Q,_ as Z,V as N,U as O,a4 as $,Z as E,G as B,u,a7 as K,a as S,H as b,I as i,f as m}from"./swiper-vue.76d67008.js";import{m as W,h as M,_ as X,t as Y,f as h,e as j}from"./entry.cc5e7feb.js";import{t as ee}from"./tw-merge.7e46835e.js";import{r as le,u as te}from"./ui.config.b3e47b6e.js";import{u as oe}from"./uid.12f507af.js";import{u as ae}from"./useFormGroup.4e0b29c3.js";import{_ as I}from"./disposables.e3f9ff83.js";import{_ as G}from"./ModalTitle.vue.3f12c400.js";const D=W(M.ui.strategy,M.ui.radio,le),ne=k({inheritAttrs:!1,props:{id:{type:String,default:()=>oe()},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>D.default.color,validator(e){return M.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:a,attrs:c}=te("radio",x(e,"ui"),D,x(e,"class")),f=L("radio-group",null),{emitFormChange:l,color:d,name:p}=f??ae(e,D),V=C({get(){return e.modelValue},set(t){r("update:modelValue",t),r("change",t),f||l()}}),_=C(()=>ee(Y(a.value.base,a.value.background,a.value.border,a.value.ring.replaceAll("{color}",d.value),a.value.color.replaceAll("{color}",d.value)),e.inputClass));return{ui:a,attrs:c,pick:V,name:p,inputClass:_}}}),se={class:"flex items-center h-5"},ue=["id","name","required","value","disabled"],re={key:0,class:"ms-3 inline-flex items-center"},ie=["for"];function de(e,r,a,c,f,l){return v(),U("div",{class:$(e.ui.wrapper)},[w("div",se,[H(w("input",Q({id:e.id,"onUpdate:modelValue":r[0]||(r[0]=d=>e.pick=d),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:["form-radio",e.inputClass]},e.attrs),null,16,ue),[[J,e.pick]])]),e.label||e.$slots.label?(v(),U("div",re,[w("label",{for:e.id,class:$(e.ui.label)},[Z(e.$slots,"label",{},()=>[N(O(e.label),1)]),e.required?(v(),U("span",{key:0,class:$(e.ui.required)},"*",2)):E("",!0)],10,ie),e.help?(v(),U("p",{key:0,class:$(e.ui.help)},O(e.help),3)):E("",!0)])):E("",!0)],2)}const pe=X(ne,[["render",de]]),me=k({__name:"RadioColor",props:{color:{}},setup(e){const r=C(()=>({base:"w-[25px] h-[25px] checked:!bg-none",border:"border-transparent border-[4px] checked:!border-dark-transparent"}));return(a,c)=>{const f=pe;return v(),B(f,{ui:u(r),style:K(`background: ${a.color};`)},null,8,["ui","style"])}}});function T(e,r,a=""){return h(`${j()}/new_status`,{body:{status:e,colour:a,type:r}})}const ce={class:"flex gap-[10px] flex-wrap mt-[5px]"},fe=k({__name:"ModalAddStatus",props:{type:{}},emits:["actionSuccess"],setup(e,{emit:r}){const a=e,c=r,f=()=>{c("actionSuccess")},l=S(""),d=S(""),p=C(()=>!!(l.value&&d.value)),V=()=>{T(d.value,a.type,l.value).then(()=>{f()})};return(_,t)=>{const y=q,s=P,o=me,g=I,F=G;return v(),B(F,{title:"Додати статус",ui:{width:"!max-w-[414px]"}},{default:b(()=>[i(s,{class:"mt-[15px] md:mt-[20px]",label:"Введіть статус:"},{default:b(()=>[i(y,{modelValue:u(d),"onUpdate:modelValue":t[0]||(t[0]=n=>m(d)?d.value=n:null)},null,8,["modelValue"])]),_:1}),i(s,{class:"mt-[15px] md:mt-[20px]",label:"Оберіть колір:"},{default:b(()=>[w("div",ce,[i(o,{modelValue:u(l),"onUpdate:modelValue":t[1]||(t[1]=n=>m(l)?l.value=n:null),color:"#AAC3F4",value:"#AAC3F4",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[2]||(t[2]=n=>m(l)?l.value=n:null),color:"#BAD388",value:"#BAD388",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[3]||(t[3]=n=>m(l)?l.value=n:null),color:"#EBAEAE",value:"#EBAEAE",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[4]||(t[4]=n=>m(l)?l.value=n:null),color:"#F1B2EE",value:"#F1B2EE",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[5]||(t[5]=n=>m(l)?l.value=n:null),color:"#FFEAA5",value:"#FFEAA5",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[6]||(t[6]=n=>m(l)?l.value=n:null),color:"#FBD9C0",value:"#FBD9C0",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[7]||(t[7]=n=>m(l)?l.value=n:null),color:"#DBBDF3",value:"#DBBDF3",name:"color"},null,8,["modelValue"])])]),_:1}),i(g,{disabled:!u(p),onClick:V,class:"self-center mt-[25px]"},{default:b(()=>[N("Зберегти")]),_:1},8,["disabled"])]),_:1})}}}),Ve=k({__name:"ModalAddVariant",props:{type:{}},emits:["actionSuccess"],setup(e,{emit:r}){const a=e,c=r,f=()=>{c("actionSuccess")},l=S(""),d=()=>{T(l.value,a.type).then(()=>{f()})};return(p,V)=>{const _=q,t=P,y=I,s=G;return v(),B(s,{title:"Додати варіант",ui:{width:"!max-w-[414px]"}},{default:b(()=>[i(t,{class:"mt-[15px] md:mt-[20px]",label:"Введіть варіант:"},{default:b(()=>[i(_,{modelValue:u(l),"onUpdate:modelValue":V[0]||(V[0]=o=>m(l)?l.value=o:null)},null,8,["modelValue"])]),_:1}),i(y,{disabled:!u(l),onClick:d,class:"self-center mt-[25px]"},{default:b(()=>[N("Зберегти")]),_:1},8,["disabled"])]),_:1})}}}),R="+ Додати інший варіант",Be=k({__name:"SelectVariant",props:{valueSelect:{},typeSelect:{},typeVariant:{}},emits:["updateValue"],setup(e,{emit:r}){const a=e,c=S(""),f=r,l=s=>{f("updateValue",s,a.typeSelect)},d=s=>{if(s===R)return V(!0),!1;l(s)},p=S(!1),V=s=>{p.value=s},_=S([]),t=C(()=>[..._.value,R]),y=()=>{h(`${j()}/get_statuses`,{body:{type:a.typeVariant}}).then(s=>{const o=s.statuses;_.value=o.map(g=>g.status)})};return y(),(s,o)=>{const g=z,F=fe,n=Ve;return v(),U("div",null,[i(g,{modelValue:u(c),"onUpdate:modelValue":o[0]||(o[0]=A=>m(c)?c.value=A:null),valueSelect:s.valueSelect,options:u(t),onChange:d},null,8,["modelValue","valueSelect","options"]),s.typeSelect==="status"?(v(),B(F,{key:0,modelValue:u(p),"onUpdate:modelValue":o[1]||(o[1]=A=>m(p)?p.value=A:null),type:a.typeVariant,onActionSuccess:o[2]||(o[2]=()=>{y(),V(!1)})},null,8,["modelValue","type"])):(v(),B(n,{key:1,modelValue:u(p),"onUpdate:modelValue":o[3]||(o[3]=A=>m(p)?p.value=A:null),type:a.typeVariant,onActionSuccess:o[4]||(o[4]=()=>{y(),V(!1)})},null,8,["modelValue","type"]))])}}});export{Be as _};
