import{a as P,b as R,c as T}from"./SelectProfile.vue.0db388dd.js";import{E as z,G as M,_ as J,f as $,H as O,I as H,q as U,J as K,o as v,c as C,a as w,K as Q,L as W,M as X,N as Y,d as N,t as x,D as k,m as E,j as B,l as u,O as Z,B as j,A as h,i as S,w as b,b as i,s as m}from"./entry.3b1b6b86.js";import{t as ee}from"./tw-merge.48857ced.js";import{r as le,u as te}from"./ui.config.5f7e67b8.js";import{u as oe}from"./uid.12f507af.js";import{u as ae}from"./useFormGroup.8c32d6e8.js";import{_ as I}from"./disposables.7e45f5e4.js";import{_ as G}from"./ModalTitle.vue.4dcffda2.js";const D=z(M.ui.strategy,M.ui.radio,le),ne=$({inheritAttrs:!1,props:{id:{type:String,default:()=>oe()},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>D.default.color,validator(e){return M.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:a,attrs:c}=te("radio",O(e,"ui"),D,O(e,"class")),f=H("radio-group",null),{emitFormChange:l,color:d,name:p}=f??ae(e,D),V=U({get(){return e.modelValue},set(t){r("update:modelValue",t),r("change",t),f||l()}}),y=U(()=>ee(K(a.value.base,a.value.background,a.value.border,a.value.ring.replaceAll("{color}",d.value),a.value.color.replaceAll("{color}",d.value)),e.inputClass));return{ui:a,attrs:c,pick:V,name:p,inputClass:y}}}),se={class:"flex items-center h-5"},ue=["id","name","required","value","disabled"],re={key:0,class:"ms-3 inline-flex items-center"},ie=["for"];function de(e,r,a,c,f,l){return v(),C("div",{class:k(e.ui.wrapper)},[w("div",se,[Q(w("input",X({id:e.id,"onUpdate:modelValue":r[0]||(r[0]=d=>e.pick=d),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:["form-radio",e.inputClass]},e.attrs),null,16,ue),[[W,e.pick]])]),e.label||e.$slots.label?(v(),C("div",re,[w("label",{for:e.id,class:k(e.ui.label)},[Y(e.$slots,"label",{},()=>[N(x(e.label),1)]),e.required?(v(),C("span",{key:0,class:k(e.ui.required)},"*",2)):E("",!0)],10,ie),e.help?(v(),C("p",{key:0,class:k(e.ui.help)},x(e.help),3)):E("",!0)])):E("",!0)],2)}const pe=J(ne,[["render",de]]),me=$({__name:"RadioColor",props:{color:{}},setup(e){const r=U(()=>({base:"w-[25px] h-[25px] checked:!bg-none",border:"border-transparent border-[4px] checked:!border-dark-transparent"}));return(a,c)=>{const f=pe;return v(),B(f,{ui:u(r),style:Z(`background: ${a.color};`)},null,8,["ui","style"])}}});function L(e,r,a=""){return j(`${h()}/new_status`,{body:{status:e,colour:a,type:r}})}const ce={class:"flex gap-[10px] flex-wrap mt-[5px]"},fe=$({__name:"ModalAddStatus",props:{type:{}},emits:["actionSuccess"],setup(e,{emit:r}){const a=e,c=r,f=()=>{c("actionSuccess")},l=S(""),d=S(""),p=U(()=>!!(l.value&&d.value)),V=()=>{L(d.value,a.type,l.value).then(()=>{f()})};return(y,t)=>{const _=P,s=R,o=me,g=I,F=G;return v(),B(F,{title:"Додати статус",ui:{width:"!max-w-[414px]"}},{default:b(()=>[i(s,{class:"mt-[15px] md:mt-[20px]",label:"Введіть статус:"},{default:b(()=>[i(_,{modelValue:u(d),"onUpdate:modelValue":t[0]||(t[0]=n=>m(d)?d.value=n:null)},null,8,["modelValue"])]),_:1}),i(s,{class:"mt-[15px] md:mt-[20px]",label:"Оберіть колір:"},{default:b(()=>[w("div",ce,[i(o,{modelValue:u(l),"onUpdate:modelValue":t[1]||(t[1]=n=>m(l)?l.value=n:null),color:"#AAC3F4",value:"#AAC3F4",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[2]||(t[2]=n=>m(l)?l.value=n:null),color:"#BAD388",value:"#BAD388",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[3]||(t[3]=n=>m(l)?l.value=n:null),color:"#EBAEAE",value:"#EBAEAE",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[4]||(t[4]=n=>m(l)?l.value=n:null),color:"#F1B2EE",value:"#F1B2EE",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[5]||(t[5]=n=>m(l)?l.value=n:null),color:"#FFEAA5",value:"#FFEAA5",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[6]||(t[6]=n=>m(l)?l.value=n:null),color:"#FBD9C0",value:"#FBD9C0",name:"color"},null,8,["modelValue"]),i(o,{modelValue:u(l),"onUpdate:modelValue":t[7]||(t[7]=n=>m(l)?l.value=n:null),color:"#DBBDF3",value:"#DBBDF3",name:"color"},null,8,["modelValue"])])]),_:1}),i(g,{disabled:!u(p),onClick:V,class:"self-center mt-[25px]"},{default:b(()=>[N("Зберегти")]),_:1},8,["disabled"])]),_:1})}}}),Ve=$({__name:"ModalAddVariant",props:{type:{}},emits:["actionSuccess"],setup(e,{emit:r}){const a=e,c=r,f=()=>{c("actionSuccess")},l=S(""),d=()=>{L(l.value,a.type).then(()=>{f()})};return(p,V)=>{const y=P,t=R,_=I,s=G;return v(),B(s,{title:"Додати варіант",ui:{width:"!max-w-[414px]"}},{default:b(()=>[i(t,{class:"mt-[15px] md:mt-[20px]",label:"Введіть варіант:"},{default:b(()=>[i(y,{modelValue:u(l),"onUpdate:modelValue":V[0]||(V[0]=o=>m(l)?l.value=o:null)},null,8,["modelValue"])]),_:1}),i(_,{disabled:!u(l),onClick:d,class:"self-center mt-[25px]"},{default:b(()=>[N("Зберегти")]),_:1},8,["disabled"])]),_:1})}}}),q="+ Додати інший варіант",Ue=$({__name:"SelectVariant",props:{valueSelect:{},typeSelect:{},typeVariant:{}},emits:["updateValue"],setup(e,{emit:r}){const a=e,c=S(""),f=r,l=s=>{f("updateValue",s,a.typeSelect)},d=s=>{if(s===q)return V(!0),!1;l(s)},p=S(!1),V=s=>{p.value=s},y=S([]),t=U(()=>[...y.value,q]),_=()=>{j(`${h()}/get_statuses`,{body:{type:a.typeVariant}}).then(s=>{const o=s.statuses;y.value=o.map(g=>g.status)})};return _(),(s,o)=>{const g=T,F=fe,n=Ve;return v(),C("div",null,[i(g,{modelValue:u(c),"onUpdate:modelValue":o[0]||(o[0]=A=>m(c)?c.value=A:null),valueSelect:s.valueSelect,options:u(t),onChange:d},null,8,["modelValue","valueSelect","options"]),s.typeSelect==="status"?(v(),B(F,{key:0,modelValue:u(p),"onUpdate:modelValue":o[1]||(o[1]=A=>m(p)?p.value=A:null),type:a.typeVariant,onActionSuccess:o[2]||(o[2]=()=>{_(),V(!1)})},null,8,["modelValue","type"])):(v(),B(n,{key:1,modelValue:u(p),"onUpdate:modelValue":o[3]||(o[3]=A=>m(p)?p.value=A:null),type:a.typeVariant,onActionSuccess:o[4]||(o[4]=()=>{_(),V(!1)})},null,8,["modelValue","type"]))])}}});export{Ue as _};
