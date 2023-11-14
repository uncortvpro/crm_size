import{_ as Z,a as ee,b as te}from"./ButtonOpacityDelete.679c92db.js";import{_ as oe}from"./useSorting.5d9dbf97.js";import{_ as ne,o as u,c as w,a as h,N as F,f as A,j,w as e,b as o,d as t,t as r,l,F as N,v as R,m as x,q as $,g as se,k as M,n as q,i as V,s as L}from"./entry.ca0fa042.js";import{a as H,_ as ae,c as ie,d as le,e as ce}from"./Table.vue.9de92d38.js";import{u as B,a as re,_ as me}from"./useDate.c4205e29.js";import{_ as pe}from"./ButtonSortingTable.vue.11e809ef.js";import{_ as ue}from"./ParticipantItem.vue.a1d7176c.js";import{_ as de}from"./ProfilePage.vue.ba803fd5.js";import{u as _e}from"./objectivesStore.f8def89b.js";import"./CrossInCircle.f46e7bf3.js";import"./nuxt-icon.645fff3f.js";import"./ButtonOpacityBorder.62677860.js";import"./ButtonOpacity.cc18440e.js";import"./Search.a8ce7b08.js";import"./Edit.a0e29953.js";import"./Delete.231e09ef.js";import"./Modal.vue.87be9b70.js";import"./ui.config.22a9e43e.js";import"./disposables.f662e4db.js";import"./ArrowTop.e0b1e9db.js";import"./index.d8427f16.js";import"./index.b81f869a.js";import"./ArrowRight.81b7e6b9.js";import"./ButtonText.965e8f0b.js";import"./Header2.0b7a6b66.js";import"./Close.8d59f99b.js";import"./tw-merge.fbe1d045.js";import"./ThreeDots.8f4a8e38.js";import"./cn.a642df04.js";const ve={},fe={class:"grid grid-cols-3 sm:grid-cols-4 gap-[20px] md:px-[10px] py-[15px] border-beige-1 border-b"},be={class:"text-[9px] md:text-[12px] font-normal text-black"},je={class:"text-[9px] col-span-2 sm:col-span-3 md:text-[12px] font-normal text-black"};function ge(D,n){return u(),w("div",fe,[h("p",be,[F(D.$slots,"header")]),h("p",je,[F(D.$slots,"content")])])}const he=ne(ve,[["render",ge]]),$e={class:"bg-beige rounded-[3px] mt-[15px] md:mt-[20px] px-[10px] md:px-[0px]"},De=A({__name:"ModalObjectivesDetails",props:{objective:{}},setup(D){return(n,C)=>{const d=he,I=H,f=re;return u(),j(f,{ui:{width:"!max-w-[730px]"},label:"Деталі завдання"},{default:e(()=>[h("div",$e,[o(d,null,{header:e(()=>[t(" Заголовок: ")]),content:e(()=>{var s;return[t(r((s=n.objective)==null?void 0:s.headline),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Опис завдання: ")]),content:e(()=>{var s;return[t(r((s=n.objective)==null?void 0:s.description),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Відповідальний: ")]),content:e(()=>{var s;return[t(r((s=n.objective)==null?void 0:s.responsible),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Дедлайн: ")]),content:e(()=>{var s;return[t(r(("useDate"in n?n.useDate:l(B))((s=n.objective)==null?void 0:s.deadline)),1)]}),_:1}),o(d,null,{header:e(()=>[t(" Створив: ")]),content:e(()=>{var s;return[t(r((s=n.objective)==null?void 0:s.creator),1)]}),_:1}),n.objective.participants?(u(),j(d,{key:0},{header:e(()=>[t(" Учасники: ")]),content:e(()=>[(u(!0),w(N,null,R(n.objective.participants,s=>(u(),w("span",null,r(s+", "),1))),256))]),_:1})):x("",!0),o(d,null,{header:e(()=>[t(" Статус: ")]),content:e(()=>[o(I,{color:n.objective.status.colour},{default:e(()=>[t(r(n.objective.status.status),1)]),_:1},8,["color"])]),_:1}),o(d,{class:"border-none"},{header:e(()=>[t(" Коментар: ")]),content:e(()=>{var s;return[t(r((s=n.objective)==null?void 0:s.comment),1)]}),_:1})])]),_:1})}}}),Ce={class:"max-w-[200px] w-full inline-block truncate"},ke={class:"font-medium leading-[130%] max-w-[200px] inline-block truncate"},Ie={class:"flex items-center gap-[5px]"},Oe={class:"max-w-[120px] inline-block truncate"},we={class:"flex items-center gap-[5px] md:gap-[25px]"},Te=A({__name:"TableItemObjectives",props:{objective:{}},emits:["deleteAction","showDetails"],setup(D,{emit:n}){const C=D,d=n,I=()=>{d("deleteAction")},f=()=>{d("showDetails",C.objective._id)},s=$(()=>C.objective.participants.filter((a,b)=>b<3)||[]);return se(),(a,b)=>{const _=ae,O=ue,S=H,U=me,y=Z,P=ee,k=ie;return u(),j(k,null,{header:e(()=>{var m;return[h("span",Ce,r((m=a.objective)==null?void 0:m.headline),1)]}),elements:e(({active:m})=>[o(_,{vIf:m},{title:e(()=>[t("Дата")]),value:e(()=>{var i;return[t(r(("useDate"in a?a.useDate:l(B))((i=a.objective)==null?void 0:i.date)),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Завдання")]),value:e(()=>{var i;return[h("span",ke,r((i=a.objective)==null?void 0:i.headline),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Відповідальний")]),value:e(()=>{var i;return[t(r((i=a.objective)==null?void 0:i.responsible),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Дедлайн")]),value:e(()=>{var i;return[t(r(("useDate"in a?a.useDate:l(B))((i=a.objective)==null?void 0:i.deadline)),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Створив")]),value:e(()=>{var i;return[t(r((i=a.objective)==null?void 0:i.creator),1)]}),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Учасники")]),value:e(()=>[h("div",Ie,[(u(!0),w(N,null,R(l(s),(i,T)=>(u(),j(O,{disabled:"",key:T,name:i[0]},null,8,["name"]))),128)),a.objective.participants.length>3?(u(),j(O,{key:0,output:`+${a.objective.participants.length-3}`,disabled:""},null,8,["output"])):x("",!0)])]),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Статус")]),value:e(()=>[o(S,{color:a.objective.status.colour},{default:e(()=>[t(r(a.objective.status.status),1)]),_:1},8,["color"])]),_:2},1032,["vIf"]),o(_,{vIf:m},{title:e(()=>[t("Коментар")]),value:e(()=>{var i;return[h("span",Oe,r((i=a.objective)==null?void 0:i.comment),1)]}),_:2},1032,["vIf"])]),"additional-buttons":e(()=>[h("div",we,[o(U,{onClick:M(f,["stop"])},null,8,["onClick"]),o(y,{class:"flex-shrink-0",onClick:b[0]||(b[0]=M(m=>("navigateTo"in a?a.navigateTo:l(q))("/profile/edit_objective/"+a.objective._id),["stop"]))}),o(P,{class:"flex-shrink-0",onClick:M(I,["stop"])},null,8,["onClick"])])]),_:1})}}}),at=A({__name:"objectives",setup(D){const n=_e(),C=$(()=>n.objectives),d=()=>n.fetchObjectives(),I=c=>n.searchObjectives(c),f=V(!1),s=V(""),a=$(()=>C.value.find(c=>c._id===s.value)),b=$(()=>n.sorting),_=$(()=>n.reverseSorting),O=c=>{n.setSorting(c)},S=$(()=>n.page),U=$(()=>n.endPage),y=c=>n.setPage(c),P=async()=>{n.deleteObjectives(s.value),i(!1)},k=V(!1),m=c=>{T(c),i(!0)},i=c=>{k.value=c},T=c=>{s.value=c},W=c=>{f.value=c},z=c=>{T(c),f.value=!0};return d(),(c,p)=>{const G=te,J=oe,K=De,E=pe,g=le,Q=Te,X=ce,Y=de;return u(),j(Y,{title:"Задачі"},{content:e(()=>[o(G,{onSearch:I,onAdd:p[0]||(p[0]=v=>("navigateTo"in c?c.navigateTo:l(q))("new_objectives"))},{add_name:e(()=>[t(" Додати завдання")]),_:1}),l(a)?(u(),j(J,{key:0,modelValue:l(k),"onUpdate:modelValue":p[1]||(p[1]=v=>L(k)?k.value=v:null),onCloseModal:p[2]||(p[2]=v=>i(!1)),onConfirm:P},{default:e(()=>[t("Ви впевнені, що хочете видалити завдання?")]),_:1},8,["modelValue"])):x("",!0),l(a)?(u(),j(K,{key:1,modelValue:l(f),"onUpdate:modelValue":p[3]||(p[3]=v=>L(f)?f.value=v:null),onCloseModal:p[4]||(p[4]=v=>W(!1)),objective:l(a)},null,8,["modelValue","objective"])):x("",!0),o(X,{pageTable:l(S),endPage:l(U),onSetPage:y},{headers:e(()=>[o(g,null,{default:e(()=>[o(E,{sortingUp:l(b)==="date"&&l(_),sortingDown:l(b)==="date"&&!l(_),onClick:p[5]||(p[5]=v=>O("date")),class:"!font-normal"},{default:e(()=>[t(" Дата")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),o(g,null,{default:e(()=>[t("Завдання")]),_:1}),o(g,null,{default:e(()=>[t("Відповідальний")]),_:1}),o(g,null,{default:e(()=>[o(E,{sortingUp:l(b)==="deadline"&&l(_),sortingDown:l(b)==="deadline"&&!l(_),onClick:p[6]||(p[6]=v=>O("deadline")),class:"!font-normal"},{default:e(()=>[t(" Дедлайн")]),_:1},8,["sortingUp","sortingDown"])]),_:1}),o(g,null,{default:e(()=>[t("Створив")]),_:1}),o(g,null,{default:e(()=>[t("Учасники")]),_:1}),o(g,null,{default:e(()=>[t("Статус")]),_:1}),o(g,null,{default:e(()=>[t("Коментар")]),_:1})]),items:e(()=>[(u(!0),w(N,null,R(l(C),v=>(u(),j(Q,{key:v._id,objective:v,onShowDetails:z,onDeleteAction:xe=>m(v._id)},null,8,["objective","onDeleteAction"]))),128))]),_:1},8,["pageTable","endPage"])]),_:1})}}});export{at as default};
