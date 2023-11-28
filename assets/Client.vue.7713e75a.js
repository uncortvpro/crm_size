import{_ as B}from"./Header2.982283e5.js";import{a as k,b as C}from"./SelectProfile.vue.66df8240.js";import{_ as x}from"./LabelProfile.vue.6bc478a5.js";import{_ as D}from"./DatePicker.vue.8cdcf28b.js";import{_ as j,a as N}from"./DivGridForm.10e2c40a.js";import{_ as L}from"./DivBorderBg.bfa3bfc5.js";import{k as h,a as y,F as _,Q as b,l as R,b as w,R as m,I as e,u as c,Z as T,H as o,V as g}from"./swiper-vue.4e3db160.js";import z from"./Photo.bed9bc6f.js";import E from"./User.eee94b84.js";import{u as I}from"./useBase64.1efa7b71.js";import{_ as H}from"./SelectVariant.vue.acac0c57.js";const G=h({__name:"InputFile",props:{typeInput:{}},emits:["updateInput"],setup(d,{emit:r}){const p=d,f=r,s=y(null),l=()=>{const t=s.value.files[0];t.value=t,f("updateInput",t.value,p==null?void 0:p.typeInput)};return(t,a)=>(_(),b("input",{id:"inp_file_popup",ref_key:"fileUpload",ref:s,class:"input_photo",type:"file",name:"inp_file_popup",onChange:a[0]||(a[0]=i=>l())},null,544))}}),O={class:"w-[37%] bg-beige pt-[37%] relative rounded-[50%] overflow-hidden mt-[15px] lg:mt-[25px]"},Q={class:"absolute w-full inline-block h-full z-20 top-0 left-0"},Z=["src"],q={class:"w-full pt-[22%] absolute bottom-0 left-0 bg-beige-2 block"},A={class:"absolute top-0 left-0 w-full h-[93%] flex items-center justify-center"},J=h({__name:"InputFilePhoto",props:{typeInput:{},uploadedPhoto:{}},emits:["updateInput"],setup(d,{emit:r}){const p=d,f=r,s=y(null),l=a=>{s.value=a},t=R(()=>s.value?URL.createObjectURL(s.value):"");return w(s,()=>{f("updateInput",s.value,p==null?void 0:p.typeInput)},{deep:!0}),(a,i)=>{const u=G,V=z,U=E;return _(),b("div",O,[m("label",Q,[e(u,{onUpdateInput:l,class:"hidden"})]),("useBase64"in a?a.useBase64:c(I))(a.uploadedPhoto)||c(t)?(_(),b("img",{key:0,class:"absolute block w-full h-full z-10 top-0 object-cover left-0",src:("useBase64"in a?a.useBase64:c(I))(a.uploadedPhoto)||c(t),alt:""},null,8,Z)):T("",!0),m("span",q,[e(V,{color:"#FFFFFF",class:"absolute top-[50%] !w-[10%] !h-[38%] left-[50%] translate-x-[-50%] translate-y-[-50%]"})]),m("span",A,[e(U,{color:"#c8c8be",class:"!fill-emerald-50 !w-[32%] !h-[32%]"})])])}}}),K={class:"flex flex-col gap-[25px] xl:flex-row items-center justify-between xl:items-start"},M={class:"col-span-2 mt-[15px]"},pe=h({__name:"Client",props:{labelStatus:{},inputs:{}},emits:["updateInputs"],setup(d,{emit:r}){const p=d,f=r,s=(l,t)=>{f("updateInputs",l,t)};return w(()=>p.inputs,()=>{console.log(p.inputs)},{deep:!0}),(l,t)=>{const a=B,i=k,u=x,V=C,U=D,F=j,P=N,v=L,S=J,$=H;return _(),b("div",null,[m("div",K,[e(v,{class:"max-w-[830px]"},{default:o(()=>[m("form",null,[e(P,null,{default:o(()=>[e(a,{class:"col-span-2"},{default:o(()=>[g(" Інформація ")]),_:1}),e(u,{label:"Ім'я"},{default:o(()=>[e(i,{modelValue:l.inputs.name,"onUpdate:modelValue":t[0]||(t[0]=n=>l.inputs.name=n)},null,8,["modelValue"])]),_:1}),e(u,{label:"Номер телефону:"},{default:o(()=>[e(i,{modelValue:l.inputs.phone,"onUpdate:modelValue":t[1]||(t[1]=n=>l.inputs.phone=n)},null,8,["modelValue"])]),_:1}),e(u,{class:"whitespace-nowrap truncate",label:"Додатковий номер телефону:"},{default:o(()=>[e(i,{modelValue:l.inputs.additional_phone,"onUpdate:modelValue":t[2]||(t[2]=n=>l.inputs.additional_phone=n)},null,8,["modelValue"])]),_:1}),e(u,{label:"Email:"},{default:o(()=>[e(i,{modelValue:l.inputs.email,"onUpdate:modelValue":t[3]||(t[3]=n=>l.inputs.email=n)},null,8,["modelValue"])]),_:1}),m("div",M,[e(a,null,{default:o(()=>[g(" Додаткова інформація ")]),_:1})]),e(u,{label:"Стать:"},{default:o(()=>[e(V,{valueSelect:l.inputs.gender,modelValue:l.inputs.gender,"onUpdate:modelValue":t[4]||(t[4]=n=>l.inputs.gender=n),typeSelect:"gender",onUpdateValue:s,options:["Чоловіча","Жіноча"]},null,8,["valueSelect","modelValue"])]),_:1}),e(u,{label:"Дата народження:"},{default:o(()=>[e(U,{modelValue:l.inputs.birthday,"onUpdate:modelValue":t[5]||(t[5]=n=>l.inputs.birthday=n),valueData:l.inputs.birthday},null,8,["modelValue","valueData"])]),_:1}),e(u,{label:"Instagram:"},{default:o(()=>[e(i,{modelValue:l.inputs.instagram,"onUpdate:modelValue":t[6]||(t[6]=n=>l.inputs.instagram=n)},null,8,["modelValue"])]),_:1}),e(u,{label:"Telegram:"},{default:o(()=>[e(i,{modelValue:l.inputs.telegram,"onUpdate:modelValue":t[7]||(t[7]=n=>l.inputs.telegram=n)},null,8,["modelValue"])]),_:1}),e(u,{class:"col-span-2 self-stretch",label:"Коментар:"},{default:o(()=>[e(F,{modelValue:l.inputs.comment,"onUpdate:modelValue":t[8]||(t[8]=n=>l.inputs.comment=n),class:"min-h-[80px] md:min-h-[90px] xl:min-h-[105px]"},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),e(v,{class:"max-w-[527px] flex flex-col items-center"},{default:o(()=>[e(a,{class:"text-center"},{default:o(()=>[g("Фото")]),_:1}),e(S,{uploadedPhoto:l.inputs.userpic,typeInput:"userpic",onUpdateInput:s},null,8,["uploadedPhoto"]),e(u,{label:l.labelStatus,class:"self-stretch mt-[15px] lg:mt-[25px]"},{default:o(()=>[e($,{valueSelect:l.inputs.status,typeSelect:"status",typeVariant:"client",onUpdateValue:s},null,8,["valueSelect"])]),_:1},8,["label"])]),_:1})])])}}});export{pe as _};
