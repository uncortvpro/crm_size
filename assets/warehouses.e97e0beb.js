import{_ as Re,a as Ce}from"./ButtonOpacityEdit.b52542ee.js";import{u as he,a as De}from"./SelectSubwarehouse.vue.a0f3a5ac.js";import{a as Ae,b as Be,c as Ee}from"./Table.vue.3c118e84.js";import{_ as He}from"./TransitionTableCell.vue.c304fabd.js";import{_ as Ne}from"./StatusOutput.vue.8eb3a93d.js";import{_ as je}from"./CurrencyText.00226054.js";import{c as ge,p as Fe,d as Le,u as Ue,x as ze,e as B,f as ye,g as Ie,h as Ve,i as We}from"./SelectProfile.vue.b14a0ab4.js";import{_ as Ge}from"./nuxt-link.b5742774.js";import{m as ce,h as q,_ as pe,t as Ke,i as qe,a as Qe,n as _e}from"./entry.0fc0c82e.js";import{t as Je}from"./tw-merge.5a7c0b21.js";import{k as Ye,u as ve,d as Ze,o as Xe,t as et}from"./ui.config.1da60734.js";import{k as P,a as k,l as w,p as de,a8 as U,a9 as me,w as we,n as G,i as se,m as ne,b as Se,a2 as L,t as J,F as S,Q as C,a4 as Y,V as T,U as E,E as W,aj as N,G as O,H as h,I,R as A,_ as D,ae as ke,T as tt,Z as ee,a3 as K,N as at,u as j,Y as be,f as nt}from"./swiper-vue.36f73e51.js";import{y as lt,w as ot,h as st,o as y,c as ut,u as Q,l as le,H as F,t as Z,p as rt,N as oe,b as _,v as it,d as R,e as Te,O as V,f as dt,g as $e,T as ct,i as te,j as pt,m as vt,P as z}from"./Modal.vue.3dc3c055.js";import{_ as mt}from"./ButtonOpacityDelete.746dbed1.js";import{u as ae}from"./useBase64.1efa7b71.js";import{u as ft}from"./ButtonOpacity.7a6728f2.js";import{_ as bt}from"./ProfilePage.vue.644be210.js";import"./ButtonOpacityBorderAddItem.eb0ac8d7.js";import"./CrossInCircle.23b38782.js";import"./nuxt-icon.2859c15b.js";import"./Edit.e382c08b.js";import"./LabelProfile.vue.3ad4914f.js";import"./ModalTitle.vue.430bc7cc.js";import"./Header2.1431a63d.js";import"./Button.vue.e58ade20.js";import"./ArrowTop.3f4cb32b.js";import"./ArrowRight.1d58d019.js";import"./ButtonText.38b19505.js";import"./useFormGroup.e5e40c3f.js";import"./Search.fbfe7c01.js";import"./cn.a642df04.js";import"./Delete.11b2a582.js";var ht=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ht||{}),gt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(gt||{});function yt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Pe=Symbol("MenuContext");function ue(e){let c=se(Pe,null);if(c===null){let o=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,ue),o}return c}let It=P({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:c,attrs:o}){let v=k(1),t=k(null),r=k(null),s=k([]),b=k(""),p=k(null),m=k(1);function a(i=d=>d){let d=p.value!==null?s.value[p.value]:null,f=V(i(s.value.slice()),n=>y(n.dataRef.domRef)),l=d?f.indexOf(d):null;return l===-1&&(l=null),{items:f,activeItemIndex:l}}let u={menuState:v,buttonRef:t,itemsRef:r,items:s,searchQuery:b,activeItemIndex:p,activationTrigger:m,closeMenu:()=>{v.value=1,p.value=null},openMenu:()=>v.value=0,goToItem(i,d,f){let l=a(),n=ze(i===B.Specific?{focus:B.Specific,id:d}:{focus:i},{resolveItems:()=>l.items,resolveActiveIndex:()=>l.activeItemIndex,resolveId:g=>g.id,resolveDisabled:g=>g.dataRef.disabled});b.value="",p.value=n,m.value=f??1,s.value=l.items},search(i){let d=b.value!==""?0:1;b.value+=i.toLowerCase();let f=(p.value!==null?s.value.slice(p.value+d).concat(s.value.slice(0,p.value+d)):s.value).find(n=>n.dataRef.textValue.startsWith(b.value)&&!n.dataRef.disabled),l=f?s.value.indexOf(f):-1;l===-1||l===p.value||(p.value=l,m.value=1)},clearSearch(){b.value=""},registerItem(i,d){let f=a(l=>[...l,{id:i,dataRef:d}]);s.value=f.items,p.value=f.activeItemIndex,m.value=1},unregisterItem(i){let d=a(f=>{let l=f.findIndex(n=>n.id===i);return l!==-1&&f.splice(l,1),f});s.value=d.items,p.value=d.activeItemIndex,m.value=1}};return lt([t,r],(i,d)=>{var f;u.closeMenu(),ot(d,st.Loose)||(i.preventDefault(),(f=y(t))==null||f.focus())},w(()=>v.value===0)),de(Pe,u),ut(w(()=>Q(v.value,{0:le.Open,1:le.Closed}))),()=>{let i={open:v.value===0,close:u.closeMenu};return F({ourProps:{},theirProps:e,slot:i,slots:c,attrs:o,name:"Menu"})}}}),_t=P({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${Z()}`}},setup(e,{attrs:c,slots:o,expose:v}){let t=ue("MenuButton");v({el:t.buttonRef,$el:t.buttonRef});function r(m){switch(m.key){case _.Space:case _.Enter:case _.ArrowDown:m.preventDefault(),m.stopPropagation(),t.openMenu(),G(()=>{var a;(a=y(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(B.First)});break;case _.ArrowUp:m.preventDefault(),m.stopPropagation(),t.openMenu(),G(()=>{var a;(a=y(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(B.Last)});break}}function s(m){switch(m.key){case _.Space:m.preventDefault();break}}function b(m){e.disabled||(t.menuState.value===0?(t.closeMenu(),G(()=>{var a;return(a=y(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(m.preventDefault(),t.openMenu(),yt(()=>{var a;return(a=y(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let p=ge(w(()=>({as:e.as,type:c.type})),t.buttonRef);return()=>{var m;let a={open:t.menuState.value===0},{id:u,...i}=e,d={ref:t.buttonRef,id:u,type:p.value,"aria-haspopup":"menu","aria-controls":(m=y(t.itemsRef))==null?void 0:m.id,"aria-expanded":t.menuState.value===0,onKeydown:r,onKeyup:s,onClick:b};return F({ourProps:d,theirProps:i,slot:a,attrs:c,slots:o,name:"MenuButton"})}}}),wt=P({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${Z()}`}},setup(e,{attrs:c,slots:o,expose:v}){let t=ue("MenuItems"),r=k(null);v({el:t.itemsRef,$el:t.itemsRef}),Fe({container:w(()=>y(t.itemsRef)),enabled:w(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function s(a){var u;switch(r.value&&clearTimeout(r.value),a.key){case _.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case _.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let i=t.items.value[t.activeItemIndex.value];(u=y(i.dataRef.domRef))==null||u.click()}t.closeMenu(),Te(y(t.buttonRef));break;case _.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(B.Next);case _.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(B.Previous);case _.Home:case _.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(B.First);case _.End:case _.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(B.Last);case _.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),G(()=>{var i;return(i=y(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})});break;case _.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),G(()=>it(y(t.buttonRef),a.shiftKey?R.Previous:R.Next));break;default:a.key.length===1&&(t.search(a.key),r.value=setTimeout(()=>t.clearSearch(),350));break}}function b(a){switch(a.key){case _.Space:a.preventDefault();break}}let p=rt(),m=w(()=>p!==null?(p.value&le.Open)===le.Open:t.menuState.value===0);return()=>{var a,u;let i={open:t.menuState.value===0},{id:d,...f}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(u=y(t.buttonRef))==null?void 0:u.id,id:d,onKeydown:s,onKeyup:b,role:"menu",tabIndex:0,ref:t.itemsRef};return F({ourProps:l,theirProps:f,slot:i,attrs:c,slots:o,features:oe.RenderStrategy|oe.Static,visible:m.value,name:"MenuItems"})}}}),St=P({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${Z()}`}},setup(e,{slots:c,attrs:o,expose:v}){let t=ue("MenuItem"),r=k(null);v({el:r,$el:r});let s=w(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),b=Le(r),p=w(()=>({disabled:e.disabled,get textValue(){return b()},domRef:r}));U(()=>t.registerItem(e.id,p)),me(()=>t.unregisterItem(e.id)),we(()=>{t.menuState.value===0&&s.value&&t.activationTrigger.value!==0&&G(()=>{var l,n;return(n=(l=y(r))==null?void 0:l.scrollIntoView)==null?void 0:n.call(l,{block:"nearest"})})});function m(l){if(e.disabled)return l.preventDefault();t.closeMenu(),Te(y(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(B.Nothing);t.goToItem(B.Specific,e.id)}let u=Ue();function i(l){u.update(l)}function d(l){u.wasMoved(l)&&(e.disabled||s.value||t.goToItem(B.Specific,e.id,0))}function f(l){u.wasMoved(l)&&(e.disabled||s.value&&t.goToItem(B.Nothing))}return()=>{let{disabled:l}=e,n={active:s.value,disabled:l,close:t.closeMenu},{id:g,...$}=e;return F({ourProps:{id:g,ref:r,role:"menuitem",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,disabled:void 0,onClick:m,onFocus:a,onPointerenter:i,onMouseenter:i,onPointermove:d,onMousemove:d,onPointerleave:f,onMouseleave:f},theirProps:{...o,...$},slot:n,attrs:o,slots:c,name:"MenuItem"})}}}),kt=P({props:{onFocus:{type:Function,required:!0}},setup(e){let c=k(!0);return()=>c.value?ne($e,{as:"button",type:"button",features:dt.Focusable,onFocus(o){o.preventDefault();let v,t=50;function r(){var s;if(t--<=0){v&&cancelAnimationFrame(v);return}if((s=e.onFocus)!=null&&s.call(e)){c.value=!1,cancelAnimationFrame(v);return}v=requestAnimationFrame(r)}v=requestAnimationFrame(r)}}):null}});var Tt=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Tt||{}),$t=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))($t||{});let Me=Symbol("TabsContext");function X(e){let c=se(Me,null);if(c===null){let o=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,X),o}return c}let fe=Symbol("TabsSSRContext"),Pt=P({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:c,attrs:o,emit:v}){var t;let r=k((t=e.selectedIndex)!=null?t:e.defaultIndex),s=k([]),b=k([]),p=w(()=>e.selectedIndex!==null),m=w(()=>p.value?e.selectedIndex:r.value);function a(l){var n;let g=V(u.tabs.value,y),$=V(u.panels.value,y),H=g.filter(M=>{var x;return!((x=y(M))!=null&&x.hasAttribute("disabled"))});if(l<0||l>g.length-1){let M=Q(r.value===null?0:Math.sign(l-r.value),{[-1]:()=>1,0:()=>Q(Math.sign(l),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),x=Q(M,{0:()=>g.indexOf(H[0]),1:()=>g.indexOf(H[H.length-1])});x!==-1&&(r.value=x),u.tabs.value=g,u.panels.value=$}else{let M=g.slice(0,l),x=[...g.slice(l),...M].find(Oe=>H.includes(Oe));if(!x)return;let re=(n=g.indexOf(x))!=null?n:u.selectedIndex.value;re===-1&&(re=u.selectedIndex.value),r.value=re,u.tabs.value=g,u.panels.value=$}}let u={selectedIndex:w(()=>{var l,n;return(n=(l=r.value)!=null?l:e.defaultIndex)!=null?n:null}),orientation:w(()=>e.vertical?"vertical":"horizontal"),activation:w(()=>e.manual?"manual":"auto"),tabs:s,panels:b,setSelectedIndex(l){m.value!==l&&v("change",l),p.value||a(l)},registerTab(l){var n;if(s.value.includes(l))return;let g=s.value[r.value];s.value.push(l),s.value=V(s.value,y);let $=(n=s.value.indexOf(g))!=null?n:r.value;$!==-1&&(r.value=$)},unregisterTab(l){let n=s.value.indexOf(l);n!==-1&&s.value.splice(n,1)},registerPanel(l){b.value.includes(l)||(b.value.push(l),b.value=V(b.value,y))},unregisterPanel(l){let n=b.value.indexOf(l);n!==-1&&b.value.splice(n,1)}};de(Me,u);let i=k({tabs:[],panels:[]}),d=k(!1);U(()=>{d.value=!0}),de(fe,w(()=>d.value?null:i.value));let f=w(()=>e.selectedIndex);return U(()=>{Se([f],()=>{var l;return a((l=e.selectedIndex)!=null?l:e.defaultIndex)},{immediate:!0})}),we(()=>{if(!p.value||m.value==null||u.tabs.value.length<=0)return;let l=V(u.tabs.value,y);l.some((n,g)=>y(u.tabs.value[g])!==y(n))&&u.setSelectedIndex(l.findIndex(n=>y(n)===y(u.tabs.value[m.value])))}),()=>{let l={selectedIndex:r.value};return ne(L,[s.value.length<=0&&ne(kt,{onFocus:()=>{for(let n of s.value){let g=y(n);if((g==null?void 0:g.tabIndex)===0)return g.focus(),!0}return!1}}),F({theirProps:{...o,...ct(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:l,slots:c,attrs:o,name:"TabGroup"})])}}}),Mt=P({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:c,slots:o}){let v=X("TabList");return()=>{let t={selectedIndex:v.selectedIndex.value},r={role:"tablist","aria-orientation":v.orientation.value};return F({ourProps:r,theirProps:e,slot:t,attrs:c,slots:o,name:"TabList"})}}}),xt=P({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${Z()}`}},setup(e,{attrs:c,slots:o,expose:v}){let t=X("Tab"),r=k(null);v({el:r,$el:r}),U(()=>t.registerTab(r)),me(()=>t.unregisterTab(r));let s=se(fe),b=w(()=>{if(s.value){let n=s.value.tabs.indexOf(e.id);return n===-1?s.value.tabs.push(e.id)-1:n}return-1}),p=w(()=>{let n=t.tabs.value.indexOf(r);return n===-1?b.value:n}),m=w(()=>p.value===t.selectedIndex.value);function a(n){var g;let $=n();if($===te.Success&&t.activation.value==="auto"){let H=(g=vt(r))==null?void 0:g.activeElement,M=t.tabs.value.findIndex(x=>y(x)===H);M!==-1&&t.setSelectedIndex(M)}return $}function u(n){let g=t.tabs.value.map($=>y($)).filter(Boolean);if(n.key===_.Space||n.key===_.Enter){n.preventDefault(),n.stopPropagation(),t.setSelectedIndex(p.value);return}switch(n.key){case _.Home:case _.PageUp:return n.preventDefault(),n.stopPropagation(),a(()=>z(g,R.First));case _.End:case _.PageDown:return n.preventDefault(),n.stopPropagation(),a(()=>z(g,R.Last))}if(a(()=>Q(t.orientation.value,{vertical(){return n.key===_.ArrowUp?z(g,R.Previous|R.WrapAround):n.key===_.ArrowDown?z(g,R.Next|R.WrapAround):te.Error},horizontal(){return n.key===_.ArrowLeft?z(g,R.Previous|R.WrapAround):n.key===_.ArrowRight?z(g,R.Next|R.WrapAround):te.Error}}))===te.Success)return n.preventDefault()}let i=k(!1);function d(){var n;i.value||(i.value=!0,!e.disabled&&((n=y(r))==null||n.focus({preventScroll:!0}),t.setSelectedIndex(p.value),pt(()=>{i.value=!1})))}function f(n){n.preventDefault()}let l=ge(w(()=>({as:e.as,type:c.type})),r);return()=>{var n;let g={selected:m.value},{id:$,...H}=e,M={ref:r,onKeydown:u,onMousedown:f,onClick:d,id:$,role:"tab",type:l.value,"aria-controls":(n=y(t.panels.value[p.value]))==null?void 0:n.id,"aria-selected":m.value,tabIndex:m.value?0:-1,disabled:e.disabled?!0:void 0};return F({ourProps:M,theirProps:H,slot:g,attrs:c,slots:o,name:"Tab"})}}}),Ot=P({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:c,attrs:o}){let v=X("TabPanels");return()=>{let t={selectedIndex:v.selectedIndex.value};return F({theirProps:e,ourProps:{},slot:t,attrs:o,slots:c,name:"TabPanels"})}}}),Rt=P({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${Z()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:c,slots:o,expose:v}){let t=X("TabPanel"),r=k(null);v({el:r,$el:r}),U(()=>t.registerPanel(r)),me(()=>t.unregisterPanel(r));let s=se(fe),b=w(()=>{if(s.value){let a=s.value.panels.indexOf(e.id);return a===-1?s.value.panels.push(e.id)-1:a}return-1}),p=w(()=>{let a=t.panels.value.indexOf(r);return a===-1?b.value:a}),m=w(()=>p.value===t.selectedIndex.value);return()=>{var a;let u={selected:m.value},{id:i,tabIndex:d,...f}=e,l={ref:r,id:i,role:"tabpanel","aria-labelledby":(a=y(t.tabs.value[p.value]))==null?void 0:a.id,tabIndex:m.value?d:-1};return!m.value&&e.unmount&&!e.static?ne($e,{as:"span",...l}):F({ourProps:l,theirProps:f,slot:u,attrs:c,slots:o,features:oe.Static|oe.RenderStrategy,visible:m.value,name:"TabPanel"})}}});const ie=ce(q.ui.strategy,q.ui.kbd,Ye),Ct=P({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>ie.default.size,validator(e){return Object.keys(ie.size).includes(e)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:c,attrs:o}=ve("kbd",J(e,"ui"),ie),v=w(()=>Je(Ke(c.value.base,c.value.size[e.size],c.value.padding,c.value.rounded,c.value.font,c.value.background,c.value.ring),e.class));return{ui:c,attrs:o,kbdClass:v}}});function Dt(e,c,o,v,t,r){return S(),C("kbd",W({class:e.kbdClass},e.attrs),[Y(e.$slots,"default",{},()=>[T(E(e.value),1)])],16)}const xe=pe(Ct,[["render",Dt]]),At=ce(q.ui.strategy,q.ui.dropdown,Ze),Bt=P({components:{HMenu:It,HMenuButton:_t,HMenuItems:wt,HMenuItem:St,UIcon:ye,UAvatar:Ie,UKbd:xe},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:c,attrs:o}=ve("dropdown",J(e,"ui"),At,J(e,"class")),v=w(()=>qe(e.mode==="hover"?{offsetDistance:0}:{},e.popper,c.value.popper)),[t,r]=Ve(v.value),s=k(null);let b=null,p=null;U(()=>{setTimeout(()=>{var l;const d=(l=t.value)==null?void 0:l.$.provides;if(!d)return;const f=Object.getOwnPropertySymbols(d);s.value=f.length&&d[f[0]]},200)});const m=w(()=>{var f,l;const d=((f=e.popper)==null?void 0:f.offsetDistance)||((l=c.value.popper)==null?void 0:l.offsetDistance)||8;return e.mode==="hover"?{paddingTop:`${d}px`,paddingBottom:`${d}px`}:{}});function a(){e.mode!=="hover"||!s.value||(p&&(clearTimeout(p),p=null),s.value.menuState!==0&&(b=b||setTimeout(()=>{s.value.openMenu&&s.value.openMenu(),b=null},e.openDelay)))}function u(){e.mode!=="hover"||!s.value||(b&&(clearTimeout(b),b=null),s.value.menuState!==1&&(p=p||setTimeout(()=>{s.value.closeMenu&&s.value.closeMenu(),p=null},e.closeDelay)))}return{ui:c,attrs:o,popper:v,trigger:t,container:r,containerStyle:m,onMouseOver:a,onMouseLeave:u,omit:Xe,NuxtLink:Ge}}}),Et=["disabled"],Ht={class:"truncate"};function Nt(e,c,o,v,t,r){const s=N("HMenuButton"),b=ye,p=Ie,m=xe,a=N("HMenuItem"),u=N("HMenuItems"),i=N("HMenu");return S(),O(i,W({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:h(({open:d})=>[I(s,{ref:"trigger",as:"div",disabled:e.disabled,class:"inline-flex w-full",role:"button",onMouseover:e.onMouseOver},{default:h(()=>[Y(e.$slots,"default",{open:d,disabled:e.disabled},()=>[A("button",{disabled:e.disabled}," Open ",8,Et)])]),_:2},1032,["disabled","onMouseover"]),d&&e.items.length?(S(),C("div",{key:0,ref:"container",class:D([e.ui.container,e.ui.width]),style:ke(e.containerStyle),onMouseover:c[0]||(c[0]=(...f)=>e.onMouseOver&&e.onMouseOver(...f))},[I(tt,W({appear:""},e.ui.transition),{default:h(()=>[A("div",null,[e.popper.arrow?(S(),C("div",{key:0,"data-popper-arrow":"",class:D(["invisible before:visible before:block before:rotate-45 before:z-[-1]",Object.values(e.ui.arrow)])},null,2)):ee("",!0),I(u,{class:D([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:h(()=>[(S(!0),C(L,null,K(e.items,(f,l)=>(S(),C("div",{key:l,class:D(e.ui.padding)},[(S(!0),C(L,null,K(f,(n,g)=>(S(),O(a,{key:g,disabled:n.disabled},{default:h(({active:$,disabled:H})=>[(S(),O(at(n.to?e.NuxtLink:"button"),W(e.omit(n,["label","slot","icon","iconClass","avatar","shortcuts","disabled","click"]),{class:[e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,$?e.ui.item.active:e.ui.item.inactive,H&&e.ui.item.disabled],onClick:n.click}),{default:h(()=>[Y(e.$slots,n.slot||"item",{item:n},()=>{var M;return[n.icon?(S(),O(b,{key:0,name:n.icon,class:D([e.ui.item.icon.base,$?e.ui.item.icon.active:e.ui.item.icon.inactive,n.iconClass])},null,8,["name","class"])):n.avatar?(S(),O(p,W({key:1},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):ee("",!0),A("span",Ht,E(n.label),1),(M=n.shortcuts)!=null&&M.length?(S(),C("span",{key:2,class:D(e.ui.item.shortcuts)},[(S(!0),C(L,null,K(n.shortcuts,x=>(S(),O(m,{key:x},{default:h(()=>[T(E(x),1)]),_:2},1024))),128))],2)):ee("",!0)]})]),_:2},1040,["class","onClick"]))]),_:2},1032,["disabled"]))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):ee("",!0)]),_:3},16,["class","onMouseleave"])}const jt=pe(Bt,[["render",Nt]]),Ft=P({__name:"SelectSwitchWarehouse",setup(e){const c=[[{label:"Profile",avatar:{src:"https://avatars.githubusercontent.com/u/739984?v=4"}}],[{label:"Edit",icon:"i-heroicons-pencil-square-20-solid",shortcuts:["E"],click:()=>{console.log("Edit")}},{label:"Duplicate",icon:"i-heroicons-document-duplicate-20-solid",shortcuts:["D"],disabled:!0}],[{label:"Archive",icon:"i-heroicons-archive-box-20-solid"},{label:"Move",icon:"i-heroicons-arrow-right-circle-20-solid"}],[{label:"Delete",icon:"i-heroicons-trash-20-solid",shortcuts:["⌘","D"]}]];return(o,v)=>{const t=We,r=jt;return S(),O(r,{items:c,popper:{placement:"bottom-start"}},{default:h(()=>[I(t,{value:"1",open:!1})]),_:1})}}}),Lt={class:"max-w-[200px] w-full inline-block truncate"},Ut=["src"],zt=["src"],Vt={class:"font-medium leading-[130%] max-w-[200px] inline-block truncate"},Wt={class:"flex items-center gap-[5px] md:gap-[25px]"},Gt=P({__name:"TableItemWarehouse",props:{product:{}},emits:["deleteAction"],setup(e,{emit:c}){return Qe(),(o,v)=>{const t=He,r=Ne,s=je,b=Ft,p=Re,m=mt,a=Ae;return S(),O(a,null,{header:h(()=>{var u;return[A("span",Lt,E((u=o.product)==null?void 0:u.name),1)]}),elements:h(({active:u})=>[I(t,{vIf:u},{title:h(()=>{var i,d,f;return[A("img",{class:"w-[23px] h-[28px] 3xl:w-[30px] 3xl:h-[35px] object-cover",src:("useBase64"in o?o.useBase64:j(ae))((i=o.product)==null?void 0:i.photo)||("useBase64"in o?o.useBase64:j(ae))((f=(d=o.product)==null?void 0:d.variations[0])==null?void 0:f.photos[0]),alt:""},null,8,Ut)]}),value:h(()=>{var i,d,f;return[A("img",{class:"w-[23px] h-[28px] 3xl:w-[30px] 3xl:h-[35px] object-cover hidden 3xl:inline-block",src:("useBase64"in o?o.useBase64:j(ae))((i=o.product)==null?void 0:i.photo)||("useBase64"in o?o.useBase64:j(ae))((f=(d=o.product)==null?void 0:d.variations[0])==null?void 0:f.photos[0]),alt:""},null,8,zt)]}),_:2},1032,["vIf"]),I(t,{vIf:u},{title:h(()=>[T("Товар")]),value:h(()=>{var i;return[A("span",Vt,E((i=o.product)==null?void 0:i.name),1)]}),_:2},1032,["vIf"]),I(t,{vIf:u},{title:h(()=>[T("Статус")]),value:h(()=>[I(r,{color:o.product.status.colour},{default:h(()=>[T(E(o.product.status.status),1)]),_:1},8,["color"])]),_:2},1032,["vIf"]),I(t,{vIf:u},{title:h(()=>[T("Кількість")]),value:h(()=>{var i;return[T(E((i=o.product)==null?void 0:i.pieces),1),I(s)]}),_:2},1032,["vIf"]),I(t,{vIf:u},{title:h(()=>[T("Склади")]),value:h(()=>[I(b)]),_:2},1032,["vIf"]),I(t,{vIf:u},{title:h(()=>[T("Категорія")]),value:h(()=>{var i;return[T(E((i=o.product)==null?void 0:i.category),1)]}),_:2},1032,["vIf"]),I(t,{vIf:u},{title:h(()=>[T("Коментар")]),value:h(()=>[T(E(o.product.comment),1)]),_:2},1032,["vIf"])]),"additional-buttons":h(()=>[A("div",Wt,[I(p,{class:"flex-shrink-0",onClick:v[0]||(v[0]=be(u=>("navigateTo"in o?o.navigateTo:j(_e))("/profile/edit_product/"+o.product._id),["stop"]))}),I(m,{class:"flex-shrink-0",onClick:v[1]||(v[1]=be(()=>{},["stop"]))})])]),_:1})}}}),Kt=P({__name:"warehouses",props:{warehouseId:{}},setup(e){const c=e,o=he(),v=()=>o.warehouseType(c.warehouseId),t=k(""),r=w(()=>o.warehouseProducts[v()]),s=()=>o.setSubwarehouse(t.value,c.warehouseId),b=()=>o.fetchProducts(c.warehouseId),p=m=>o.searchProducts(m,c.warehouseId);return b(),(m,a)=>{const u=Ce,i=De,d=Be,f=Gt,l=Ee;return S(),C("div",null,[I(u,{onSearch:p,onAdd:a[0]||(a[0]=n=>("navigateTo"in m?m.navigateTo:j(_e))("new_product"))},{add_name:h(()=>[T(" Додати товар")]),_:1}),I(l,{class:"bg-beige-light"},{additional_elements:h(()=>[I(i,{placeholder:"",modelValue:j(t),"onUpdate:modelValue":a[1]||(a[1]=n=>nt(t)?t.value=n:null),onActionUpdate:s,class:"max-w-[213px] mb-[15px] 3xl:mb-[5px]"},null,8,["modelValue"])]),headers:h(()=>[I(d),I(d,null,{default:h(()=>[T("Товар")]),_:1}),I(d,null,{default:h(()=>[T("Статус")]),_:1}),I(d,null,{default:h(()=>[T("Кількість")]),_:1}),I(d,null,{default:h(()=>[T("Склади")]),_:1}),I(d,null,{default:h(()=>[T("Категорія")]),_:1}),I(d,null,{default:h(()=>[T("Коментар")]),_:1})]),items:h(()=>[(S(!0),C(L,null,K(j(r),n=>(S(),O(f,{key:n._id,product:n},null,8,["product"]))),128))]),_:1})])}}}),qt=ce(q.ui.strategy,q.ui.tabs,et),Qt=P({components:{HTabGroup:Pt,HTabList:Mt,HTab:xt,HTabPanels:Ot,HTabPanel:Rt},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:c}){const{ui:o,attrs:v}=ve("tabs",J(e,"ui"),qt,J(e,"class")),t=k(),r=k([]),s=k(),b=k(e.modelValue||e.defaultIndex);function p(a){var i;const u=(i=r.value[a])==null?void 0:i.$el;u&&(s.value.style.top=`${u.offsetTop}px`,s.value.style.left=`${u.offsetLeft}px`,s.value.style.width=`${u.offsetWidth}px`,s.value.style.height=`${u.offsetHeight}px`)}function m(a){b.value=a,c("change",a),e.modelValue!==void 0&&c("update:modelValue",a),p(a)}return ft(t,()=>{p(b.value)}),Se(()=>e.modelValue,a=>{b.value=a,p(a)}),U(()=>p(b.value)),{ui:o,attrs:v,listRef:t,itemRefs:r,markerRef:s,selectedIndex:b,onChange:m}}}),Jt={class:"truncate"};function Yt(e,c,o,v,t,r){const s=N("HTab"),b=N("HTabList"),p=N("HTabPanel"),m=N("HTabPanels"),a=N("HTabGroup");return S(),O(a,W({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:h(()=>[I(b,{ref:"listRef",class:D([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:ke([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:h(()=>[A("div",{ref:"markerRef",class:D(e.ui.list.marker.wrapper)},[A("div",{class:D([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(S(!0),C(L,null,K(e.items,(u,i)=>(S(),O(s,{key:i,ref_for:!0,ref:"itemRefs",disabled:u.disabled,as:"template"},{default:h(({selected:d,disabled:f})=>[A("button",{class:D([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,d?e.ui.list.tab.active:e.ui.list.tab.inactive])},[Y(e.$slots,"default",{item:u,index:i,selected:d,disabled:f},()=>[A("span",Jt,E(u.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),I(m,{class:D(e.ui.container)},{default:h(()=>[(S(!0),C(L,null,K(e.items,(u,i)=>(S(),O(p,{key:i,class:D(e.ui.base),tabindex:"-1"},{default:h(({selected:d})=>[Y(e.$slots,u.slot||"item",{item:u,index:i,selected:d},()=>[T(E(u.content),1)])]),_:2},1032,["class"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const Zt=pe(Qt,[["render",Yt]]),Ra=P({__name:"warehouses",setup(e){const o=he().warehouses.map(v=>({id:v.id,label:v.name,slot:"warehousesSlot"}));return(v,t)=>{const r=Kt,s=Zt,b=bt;return S(),O(b,{title:"Склади"},{content:h(()=>[I(s,{ui:{container:"!pt-[20px]",list:{base:"bg-transparent h-auto gap-[10px] md:gap-[35px] !p-0 !flex  flex-col !items-start xs:flex-row xs:!items-center",width:"w-fit",marker:{wrapper:"hidden"},tab:{base:"!text-[9px] md:!text-[12px] truncate !inline-flex justify-start lg:!text-[15px] !h-auto w-fit focus:!ring-0 !p-0",active:"!text-black",inactive:"!text-beige-1"}}},items:j(o),"default-index":0},{warehousesSlot:h(({item:p})=>[I(r,{warehouseId:p.id},null,8,["warehouseId"])]),_:1},8,["items"])]),_:1})}}});export{Ra as default};
