import{_ as X,a as ee}from"./ButtonOpacityEdit.78cd0a90.js";import{_ as te}from"./ModalWarning.vue.c8034d13.js";import{_ as oe,a as ne,n as L}from"./entry.67d43b7a.js";import{F as u,Q as w,R as h,a2 as F,k as A,G as j,H as e,I as o,V as t,U as c,u as l,a4 as N,a3 as R,Z as x,l as D,Y as V,a as M,f as H}from"./swiper-vue.c2b88c58.js";import{_ as G}from"./StatusOutput.vue.2e22050c.js";import{a as se,_ as ae}from"./ButtonOpacityThreeDots.95bc2bd3.js";import{u as B}from"./useDate.d306248e.js";import{_ as ie}from"./ButtonSortingTable.vue.a1b5ef51.js";import{a as le,b as re,c as ce}from"./Table.vue.86a68380.js";import{_ as me}from"./TransitionTableCell.vue.a913062a.js";import{_ as pe}from"./ParticipantItem.vue.75e24346.js";import{_ as ue}from"./ButtonOpacityDelete.68074b96.js";import{_ as de}from"./ProfilePage.vue.284371ff.js";import{u as _e}from"./objectivesStore.6d358922.js";import"./ButtonOpacityBorderAddItem.9dfc8560.js";import"./CrossInCircle.f892b003.js";import"./nuxt-icon.4dbfd0d2.js";import"./Modal.vue.0c332ca5.js";import"./ButtonOpacity.dc986b85.js";import"./Button.vue.fe528707.js";import"./nuxt-link.8b951553.js";import"./ui.config.774b3127.js";import"./Edit.8e1157a5.js";import"./Header2.700b2c28.js";import"./Close.6c4892db.js";import"./tw-merge.d5dfc584.js";import"./ThreeDots.1f637f37.js";import"./ArrowRight.5c48ce0f.js";import"./ButtonText.4228120b.js";import"./cn.a642df04.js";import"./ArrowTop.cc30804c.js";import"./Delete.f6467ce9.js";import"./Search.ff849a65.js";import"./useSorting.9414d803.js";const ve={},fe={class:"grid grid-cols-3 sm:grid-cols-4 gap-[20px] md:px-[10px] py-[15px] border-beige-1 border-b"},be={class:"text-[9px] md:text-[12px] font-normal text-black"},je={class:"text-[9px] col-span-2 sm:col-span-3 md:text-[12px] font-normal text-black"};function ge($,n){return u(),w("div",fe,[h("p",be,[F($.$slots,"header")]),h("p",je,[F($.$slots,"content")])])}const he=oe(ve,[["render",ge]]),De={class:"bg-beige rounded-[3px] mt-[15px] md:mt-[20px] px-[10px] md:px-[0px]"},$e=A({__name:"ModalObjectivesDetails",props:{objective:{}},setup($){return(n,C)=>{const d=he,I=G,f=se;return u(),j(f,{ui:{width:"!max-w-[730px]"},label:"Деталі завдання"},{default:e(()=>[h("div",De,[o(d,null,{header:e(()=>[t(" Заголовок: ")]),content:e(()=>{var s;return[t(c((s=n.objective)==null?void 0:s.headline),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Опис завдання: ")]),content:e(()=>{var s;return[t(c((s=n.objective)==null?void 0:s.description),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Відповідальний: ")]),content:e(()=>{var s;return[t(c((s=n.objective)==null?void 0:s.responsible),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Дедлайн: ")]),content:e(()=>{var s;return[t(c(("useDate"in n?n.useDate:l(B))((s=n.objective)==null?void 0:s.deadline)),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Створив: ")]),content:e(()=>{var s;return[t(c((s=n.objective)==null?void 0:s.creator),1)]}),_:1}),n.objective.participants?(u(),j(d,{key:0},{header:e(()=>[t(" Учасники: ")]),content:e(()=>[(u(!0),w(N,null,R(n.objective.participants,s=>(u(),w("span",null,c(s+", "),1))),256))]),_:1})):x("",!0),o(d,null,{header:e(()=>[t(" Статус: ")]),content:e(()=>[o(I,{color:n.objective.status.colour},{default:e(()=>[t(c(n.objective.status.status),1)]),_:1},8,["color"])]),_:1}),o(d,{class:"border-none"},{header:e(()=>[t(" Коментар: ")]),content:e(()=>{var s;return[t(c((s=n.objective)==null?void 0:s.comment),1)]}),_:1})])]),_:1})}}}),Ce={class:"max-w-[200px] w-full inline-block truncate"},ke={class:"font-medium leading-[130%] max-w-[200px] inline-block truncate"},Ie={class:"flex items-center gap-[5px]"},Oe={class:"max-w-[120px] inline-block truncate"},we={class:"flex items-center gap-[5px] md:gap-[25px]"},Te=A({__name:"TableItemObjectives",props:{objective:{}},emits:["deleteAction","showDetails"],setup($,{emit:n}){const C=$,d=n,I=()=>{d("deleteAction")},f=()=>{d("showDetails",C.objective._id)},s=D(()=>C.objective.participants.filter((a,b)=>b<3)||[]);return ne(),(a,b)=>{const _=me,O=pe,U=G,S=ae,y=X,P=ue,k=le;return u(),j(k,null,{header:e(()=>{var m;return[h("span",Ce,c((m=a.objective)==null?void 0:m.headline),1)]}),elements:e(({active:m})=>[o(_,{vIf:m},{title:e(()=>[t("Дата")]),value:e(()=>{var i;return[t(c(("useDate"in a?a.useDate:l(B))((i=a.objective)==null?void 0:i.date)),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Завдання")]),value:e(()=>{var i;return[h("span",ke,c((i=a.objective)==null?void 0:i.headline),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Відповідальний")]),value:e(()=>{var i;return[t(c((i=a.objective)==null?void 0:i.responsible),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Дедлайн")]),value:e(()=>{var i;return[t(c(("useDate"in a?a.useDate:l(B))((i=a.objective)==null?void 0:i.deadline)),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Створив")]),value:e(()=>{var i;return[t(c((i=a.objective)==null?void 0:i.creator),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Учасники")]),value:e(()=>[h("div",Ie,[(u(!0),w(N,null,R(l(s),(i,T)=>(u(),j(O,{disabled:"",key:T,name:i[0]},null,8,["name"]))),128)),a.objective.participants.length>3?(u(),j(O,{key:0,output:`+${a.objective.participants.length-3}`,disabled:""},null,8,["output"])):x("",!0)])]),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Статус")]),value:e(()=>[o(U,{color:a.objective.status.colour},{default:e(()=>[t(c(a.objective.status.status),1)]),_:1},8,["color"])]),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Коментар")]),value:e(()=>{var i;return[h("span",Oe,c((i=a.objective)==null?void 0:i.comment),1)]}),_:2},1032,["vIf"])]),"additional-buttons":e(()=>[h("div",we,[o(S,{onClick:V(f,["stop"])},null,8,["onClick"]),o(y,{class:"flex-shrink-0",onClick:b[0]||(b[0]=V(m=>("navigateTo"in a?a.navigateTo:l(L))("/profile/edit_objective/"+a.objective._id),["stop"]))}),o(P,{class:"flex-shrink-0",onClick:V(I,["stop"])},null,8,["onClick"])])]),_:1})}}}),mt=A({__name:"objectives",setup($){const n=_e(),C=D(()=>n.objectives),d=()=>n.fetchObjectives(),I=r=>n.searchObjectives(r),f=M(!1),s=M(""),a=D(()=>C.value.find(r=>r._id===s.value)),b=D(()=>n.sorting),_=D(()=>n.reverseSorting),O=r=>{n.setSorting(r)},U=D(()=>n.page),S=D(()=>n.endPage),y=r=>n.setPage(r),P=async()=>{n.deleteObjectives(s.value),i(!1)},k=M(!1),m=r=>{T(r),i(!0)},i=r=>{k.value=r},T=r=>{s.value=r},Q=r=>{f.value=r},W=r=>{T(r),f.value=!0};return d(),(r,p)=>{const Y=ee,Z=te,q=$e,E=ie,g=re,z=Te,J=ce,K=de;return u(),j(K,{title:"Задачі"},{content:e(()=>[o(Y,{onSearch:I,onAdd:p[0]||(p[0]=v=>("navigateTo"in r?r.navigateTo:l(L))("new_objectives"))},{add_name:e(()=>[t(" Додати завдання")]),_:1}),l(a)?(u(),j(Z,{key:0,modelValue:l(k),"onUpdate:modelValue":p[1]||(p[1]=v=>H(k)?k.value=v:null),onCloseModal:p[2]||(p[2]=v=>i(!1)),onConfirm:P},{default:e(()=>[t("Ви впевнені, що хочете видалити завдання?")]),_:1},8,["modelValue"])):x("",!0),l(a)?(u(),j(q,{key:1,modelValue:l(f),"onUpdate:modelValue":p[3]||(p[3]=v=>H(f)?f.value=v:null),onCloseModal:p[4]||(p[4]=v=>Q(!1)),objective:l(a)},null,8,["modelValue","objective"])):x("",!0),o(J,{pageTable:l(U),endPage:l(S),onSetPage:y},{headers:e(()=>[o(g,null,{default:e(()=>[o(E,{sortingUp:l(b)==="date"&&l(_),sortingDown:l(b)==="date"&&!l(_),onClick:p[5]||(p[5]=v=>O("date")),class:"!font-normal"},{default:e(()=>[t(" Дата")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),o(g,null,{default:e(()=>[t("Завдання")]),_:1}),o(g,null,{default:e(()=>[t("Відповідальний")]),_:1}),o(g,null,{default:e(()=>[o(E,{sortingUp:l(b)==="deadline"&&l(_),sortingDown:l(b)==="deadline"&&!l(_),onClick:p[6]||(p[6]=v=>O("deadline")),class:"!font-normal"},{default:e(()=>[t(" Дедлайн")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),o(g,null,{default:e(()=>[t("Створив")]),_:1}),o(g,null,{default:e(()=>[t("Учасники")]),_:1}),o(g,null,{default:e(()=>[t("Статус")]),_:1}),o(g,null,{default:e(()=>[t("Коментар")]),_:1})]),items:e(()=>[(u(!0),w(N,null,R(l(C),v=>(u(),j(z,{key:v._id,objective:v,onShowDetails:W,onDeleteAction:xe=>m(v._id)},null,8,["objective","onDeleteAction"]))),128))]),_:1},8,["pageTable","endPage"])]),_:1})}}});export{mt as default};