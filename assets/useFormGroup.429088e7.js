import{u as h}from"./index.7fa93687.js";import{i as n,a as I,a7 as B,l as t}from"./swiper-vue.df2f0745.js";const C=(a,v)=>{const z=n("form-events",void 0),e=n("form-group",void 0),F=n("form-inputs",void 0),d=I(a==null?void 0:a.id);B(()=>{d.value=(a==null?void 0:a.id)??(e==null?void 0:e.inputId.value),e&&(e.inputId.value=d.value,F&&(F.value[e.name.value]=d))});const u=I(!1);function c(l,m){z&&z.emit({type:l,path:m})}function i(){c("blur",e==null?void 0:e.name.value),u.value=!0}function b(){c("change",e==null?void 0:e.name.value)}const s=h(()=>{u.value&&c("input",e==null?void 0:e.name.value)},300);return{inputId:d,name:t(()=>(a==null?void 0:a.name)??(e==null?void 0:e.name.value)),size:t(()=>{var m;const l=v.size[e==null?void 0:e.size.value]?e==null?void 0:e.size.value:null;return(a==null?void 0:a.size)??l??((m=v==null?void 0:v.default)==null?void 0:m.size)}),color:t(()=>{var l;return(l=e==null?void 0:e.error)!=null&&l.value?"red":a==null?void 0:a.color}),emitFormBlur:i,emitFormInput:s,emitFormChange:b}};export{C as u};