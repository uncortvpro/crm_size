import{_ as B,u as w,t as S}from"./useFormGroup.3f227360.js";import{f as m,o as n,c as u,i as I,R as U,b as c,w as y,n as i,D as j,E as x,_ as v,G as $,B as k,H as D,a as d,x as A,ae as N,J as P,d as T,t as C,I as p,m as b,j as G}from"./entry.b9692a03.js";import{e as O,u as E}from"./ui.config.326912ea.js";import F from"./Google.4c7992cf.js";const J=["value"],M=m({__name:"InputPrimary",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:t}){const a=t,s=l=>{const o=l.target.value;a("update:modelValue",o)};return(l,o)=>(n(),u("input",{value:l.modelValue,onInput:s,class:"rounded-[5px] border input_without_arrow border-[#DCDCDC] h-[35px] md:h-[40px] lg:h-[50px] xl:h-[60px] focus:outline-none px-[10px]"},null,40,J))}}),R={class:"flex flex-col gap-[5px]",for:""},de=m({__name:"InputLabel",props:{placeholder:{},type:{},inputType:{}},emits:["changeValue"],setup(e,{emit:t}){const a=e,s=t,l=I("");return U(l,()=>{s("changeValue",a.inputType,l)}),(o,r)=>{const f=B,_=M;return n(),u("label",R,[c(f,null,{default:y(()=>[i(o.$slots,"default")]),_:3}),c(_,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=h=>l.value=h),placeholder:o.placeholder,type:o.type},null,8,["modelValue","placeholder","type"])])}}});let z=0;function H(){return`nuid-${z++}`}const V=j(x.ui.strategy,x.ui.checkbox,O),L=m({inheritAttrs:!1,props:{id:{type:String,default:()=>H()},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>V.default.color,validator(e){return x.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:a,attrs:s}=E("checkbox",$(e,"ui"),V,$(e,"class")),{emitFormChange:l,color:o,name:r,inputId:f}=w(e),_=k({get(){return e.modelValue},set(g){t("update:modelValue",g)}}),h=g=>{t("change",g),l()},q=k(()=>S(D(a.value.base,a.value.rounded,a.value.background,a.value.border,a.value.ring.replaceAll("{color}",o.value),a.value.color.replaceAll("{color}",o.value)),e.inputClass));return{ui:a,attrs:s,toggle:_,inputId:f,name:r,inputClass:q,onChange:h}}}),K={class:"flex items-center h-5"},Q=["id","name","required","value","disabled","checked","indeterminate"],W={key:0,class:"ms-3 text-sm"},X=["for"];function Y(e,t,a,s,l,o){return n(),u("div",{class:p(e.ui.wrapper)},[d("div",K,[A(d("input",P({id:e.inputId,"onUpdate:modelValue":t[0]||(t[0]=r=>e.toggle=r),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:["form-checkbox",e.inputClass]},e.attrs,{onChange:t[1]||(t[1]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,Q),[[N,e.toggle]])]),e.label||e.$slots.label?(n(),u("div",W,[d("label",{for:e.inputId,class:p(e.ui.label)},[i(e.$slots,"label",{},()=>[T(C(e.label),1)]),e.required?(n(),u("span",{key:0,class:p(e.ui.required)},"*",2)):b("",!0)],10,X),e.help?(n(),u("p",{key:0,class:p(e.ui.help)},C(e.help),3)):b("",!0)])):b("",!0)],2)}const Z=v(L,[["render",Y]]),ce=m({__name:"Checkbox",props:{required:{type:Boolean},name:{}},setup(e){return(t,a)=>{const s=B,l=Z;return n(),G(l,{required:t.required,ui:{base:"w-[11px] text-black h-[11px] lg:w-[14px] lg:h-[14px]",label:"flex py-[5px] lg:py-[2px] lg:inline-block",required:"hidden"},class:"gap-[3px] ms-0 items-start",style:{color:"#111111"},name:t.name},{label:y(()=>[c(s,{class:"text-black ml-[-10px] lg:ml-[-5px] font-normal text-[9px] lg:text-[15px]"},{default:y(()=>[i(t.$slots,"default")]),_:3})]),_:3},8,["required","name"])}}});const ee={},te={class:"flex items-center gap-[8px] justify-center hover:opacity-hover duration-200 rounded-[5px] border-[2px] py-[8px] lg:py-[18px] border-black border-solid"},ae={class:"text-[11px] md:text-[15px] font-medium lg:text-[20px]"};function le(e,t){const a=F;return n(),u("button",te,[c(a,{class:"google"}),d("span",ae,[i(e.$slots,"default")])])}const me=v(ee,[["render",le]]),oe={},ne={class:"min-h-[100vh] bg-auth-bg flex-1 flex justify-center items-center"};function se(e,t){return n(),u("div",ne,[i(e.$slots,"default")])}const fe=v(oe,[["render",se]]);export{de as _,ce as a,me as b,fe as c};