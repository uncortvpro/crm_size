import{_ as X,a as ee}from"./ButtonOpacityEdit.e6c76dc1.js";import{_ as te}from"./ModalWarning.vue.07f835d1.js";import{_ as oe,a as ne,n as L}from"./entry.cc5e7feb.js";import{F as u,Q as w,R as h,_ as F,k as A,G as j,H as e,I as o,V as t,U as c,u as l,$ as N,a3 as R,Z as x,l as $,Y as V,a as M,f as H}from"./swiper-vue.76d67008.js";import{_ as G}from"./StatusOutput.vue.8dff593d.js";import{a as se,_ as ae}from"./ButtonOpacityThreeDots.671faf84.js";import{u as B}from"./useDate.d306248e.js";import{_ as ie}from"./ButtonSortingTable.vue.4f94268f.js";import{a as le,b as re,c as ce}from"./Table.vue.b969d40a.js";import{_ as me}from"./TransitionTableCell.vue.36cca3e9.js";import{_ as pe}from"./ParticipantItem.vue.aeae686e.js";import{_ as ue}from"./ButtonOpacityDelete.182ce5d2.js";import{_ as de}from"./ProfilePage.vue.4e8faf10.js";import{u as _e}from"./objectivesStore.2b49be16.js";import"./Edit.ae76fa81.js";import"./nuxt-icon.311fb41a.js";import"./ButtonOpacity.fc710c82.js";import"./nuxt-link.8e638fd7.js";import"./disposables.e3f9ff83.js";import"./Modal.vue.2b023da3.js";import"./ui.config.b3e47b6e.js";import"./Header2.e5c3690b.js";import"./Close.fe4d5307.js";import"./tw-merge.7e46835e.js";import"./ThreeDots.f09ab959.js";import"./ArrowRight.c8e633f0.js";import"./ButtonText.1fc26491.js";import"./cn.a642df04.js";import"./ArrowTop.5235c37b.js";import"./index.ee4f7712.js";import"./index.d04bfb4b.js";import"./Delete.a144a7d4.js";import"./CrossInCircle.2c2c6515.js";import"./Search.fbae3962.js";import"./useSorting.9414d803.js";const ve={},fe={class:"grid grid-cols-3 sm:grid-cols-4 gap-[20px] md:px-[10px] py-[15px] border-beige-1 border-b"},be={class:"text-[9px] md:text-[12px] font-normal text-black"},je={class:"text-[9px] col-span-2 sm:col-span-3 md:text-[12px] font-normal text-black"};function ge(D,n){return u(),w("div",fe,[h("p",be,[F(D.$slots,"header")]),h("p",je,[F(D.$slots,"content")])])}const he=oe(ve,[["render",ge]]),$e={class:"bg-beige rounded-[3px] mt-[15px] md:mt-[20px] px-[10px] md:px-[0px]"},De=A({__name:"ModalObjectivesDetails",props:{objective:{}},setup(D){return(n,C)=>{const d=he,I=G,f=se;return u(),j(f,{ui:{width:"!max-w-[730px]"},label:"Деталі завдання"},{default:e(()=>[h("div",$e,[o(d,null,{header:e(()=>[t(" Заголовок: ")]),content:e(()=>{var s;return[t(c((s=n.objective)==null?void 0:s.headline),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Опис завдання: ")]),content:e(()=>{var s;return[t(c((s=n.objective)==null?void 0:s.description),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Відповідальний: ")]),content:e(()=>{var s;return[t(c((s=n.objective)==null?void 0:s.responsible),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Дедлайн: ")]),content:e(()=>{var s;return[t(c(("useDate"in n?n.useDate:l(B))((s=n.objective)==null?void 0:s.deadline)),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Створив: ")]),content:e(()=>{var s;return[t(c((s=n.objective)==null?void 0:s.creator),1)]}),_:1}),n.objective.participants?(u(),j(d,{key:0},{header:e(()=>[t(" Учасники: ")]),content:e(()=>[(u(!0),w(N,null,R(n.objective.participants,s=>(u(),w("span",null,c(s+", "),1))),256))]),_:1})):x("",!0),o(d,null,{header:e(()=>[t(" Статус: ")]),content:e(()=>[o(I,{color:n.objective.status.colour},{default:e(()=>[t(c(n.objective.status.status),1)]),_:1},8,["color"])]),_:1}),o(d,{class:"border-none"},{header:e(()=>[t(" Коментар: ")]),content:e(()=>{var s;return[t(c((s=n.objective)==null?void 0:s.comment),1)]}),_:1})])]),_:1})}}}),Ce={class:"max-w-[200px] w-full inline-block truncate"},ke={class:"font-medium leading-[130%] max-w-[200px] inline-block truncate"},Ie={class:"flex items-center gap-[5px]"},Oe={class:"max-w-[120px] inline-block truncate"},we={class:"flex items-center gap-[5px] md:gap-[25px]"},Te=A({__name:"TableItemObjectives",props:{objective:{}},emits:["deleteAction","showDetails"],setup(D,{emit:n}){const C=D,d=n,I=()=>{d("deleteAction")},f=()=>{d("showDetails",C.objective._id)},s=$(()=>C.objective.participants.filter((a,b)=>b<3)||[]);return ne(),(a,b)=>{const _=me,O=pe,U=G,S=ae,y=X,P=ue,k=le;return u(),j(k,null,{header:e(()=>{var m;return[h("span",Ce,c((m=a.objective)==null?void 0:m.headline),1)]}),elements:e(({active:m})=>[o(_,{vIf:m},{title:e(()=>[t("Дата")]),value:e(()=>{var i;return[t(c(("useDate"in a?a.useDate:l(B))((i=a.objective)==null?void 0:i.date)),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Завдання")]),value:e(()=>{var i;return[h("span",ke,c((i=a.objective)==null?void 0:i.headline),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Відповідальний")]),value:e(()=>{var i;return[t(c((i=a.objective)==null?void 0:i.responsible),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Дедлайн")]),value:e(()=>{var i;return[t(c(("useDate"in a?a.useDate:l(B))((i=a.objective)==null?void 0:i.deadline)),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Створив")]),value:e(()=>{var i;return[t(c((i=a.objective)==null?void 0:i.creator),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Учасники")]),value:e(()=>[h("div",Ie,[(u(!0),w(N,null,R(l(s),(i,T)=>(u(),j(O,{disabled:"",key:T,name:i[0]},null,8,["name"]))),128)),a.objective.participants.length>3?(u(),j(O,{key:0,output:`+${a.objective.participants.length-3}`,disabled:""},null,8,["output"])):x("",!0)])]),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Статус")]),value:e(()=>[o(U,{color:a.objective.status.colour},{default:e(()=>[t(c(a.objective.status.status),1)]),_:1},8,["color"])]),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Коментар")]),value:e(()=>{var i;return[h("span",Oe,c((i=a.objective)==null?void 0:i.comment),1)]}),_:2},1032,["vIf"])]),"additional-buttons":e(()=>[h("div",we,[o(S,{onClick:V(f,["stop"])},null,8,["onClick"]),o(y,{class:"flex-shrink-0",onClick:b[0]||(b[0]=V(m=>("navigateTo"in a?a.navigateTo:l(L))("/profile/edit_objective/"+a.objective._id),["stop"]))}),o(P,{class:"flex-shrink-0",onClick:V(I,["stop"])},null,8,["onClick"])])]),_:1})}}}),pt=A({__name:"objectives",setup(D){const n=_e(),C=$(()=>n.objectives),d=()=>n.fetchObjectives(),I=r=>n.searchObjectives(r),f=M(!1),s=M(""),a=$(()=>C.value.find(r=>r._id===s.value)),b=$(()=>n.sorting),_=$(()=>n.reverseSorting),O=r=>{n.setSorting(r)},U=$(()=>n.page),S=$(()=>n.endPage),y=r=>n.setPage(r),P=async()=>{n.deleteObjectives(s.value),i(!1)},k=M(!1),m=r=>{T(r),i(!0)},i=r=>{k.value=r},T=r=>{s.value=r},Q=r=>{f.value=r},W=r=>{T(r),f.value=!0};return d(),(r,p)=>{const Y=ee,Z=te,q=De,E=ie,g=re,z=Te,J=ce,K=de;return u(),j(K,{title:"Задачі"},{content:e(()=>[o(Y,{onSearch:I,onAdd:p[0]||(p[0]=v=>("navigateTo"in r?r.navigateTo:l(L))("new_objectives"))},{add_name:e(()=>[t(" Додати завдання")]),_:1}),l(a)?(u(),j(Z,{key:0,modelValue:l(k),"onUpdate:modelValue":p[1]||(p[1]=v=>H(k)?k.value=v:null),onCloseModal:p[2]||(p[2]=v=>i(!1)),onConfirm:P},{default:e(()=>[t("Ви впевнені, що хочете видалити завдання?")]),_:1},8,["modelValue"])):x("",!0),l(a)?(u(),j(q,{key:1,modelValue:l(f),"onUpdate:modelValue":p[3]||(p[3]=v=>H(f)?f.value=v:null),onCloseModal:p[4]||(p[4]=v=>Q(!1)),objective:l(a)},null,8,["modelValue","objective"])):x("",!0),o(J,{pageTable:l(U),endPage:l(S),onSetPage:y},{headers:e(()=>[o(g,null,{default:e(()=>[o(E,{sortingUp:l(b)==="date"&&l(_),sortingDown:l(b)==="date"&&!l(_),onClick:p[5]||(p[5]=v=>O("date")),class:"!font-normal"},{default:e(()=>[t(" Дата")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),o(g,null,{default:e(()=>[t("Завдання")]),_:1}),o(g,null,{default:e(()=>[t("Відповідальний")]),_:1}),o(g,null,{default:e(()=>[o(E,{sortingUp:l(b)==="deadline"&&l(_),sortingDown:l(b)==="deadline"&&!l(_),onClick:p[6]||(p[6]=v=>O("deadline")),class:"!font-normal"},{default:e(()=>[t(" Дедлайн")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),o(g,null,{default:e(()=>[t("Створив")]),_:1}),o(g,null,{default:e(()=>[t("Учасники")]),_:1}),o(g,null,{default:e(()=>[t("Статус")]),_:1}),o(g,null,{default:e(()=>[t("Коментар")]),_:1})]),items:e(()=>[(u(!0),w(N,null,R(l(C),v=>(u(),j(z,{key:v._id,objective:v,onShowDetails:W,onDeleteAction:xe=>m(v._id)},null,8,["objective","onDeleteAction"]))),128))]),_:1},8,["pageTable","endPage"])]),_:1})}}});export{pt as default};
