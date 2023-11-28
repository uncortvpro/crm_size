import{_ as Re,a as Ce}from"./ButtonOpacityEdit.4fe6dfc3.js";import{u as he,a as De}from"./SelectSubwarehouse.vue.7c67719d.js";import{a as Ae,b as Be,c as Ee}from"./Table.vue.442320f3.js";import{_ as He}from"./TransitionTableCell.vue.cd181c6b.js";import{_ as Ne}from"./StatusOutput.vue.d0366f84.js";import{_ as Fe}from"./CurrencyText.a6f93f3e.js";import{d as ge,p as Le,e as je,u as Ue,x as ze,f as B,g as ye,h as Ie,i as Ve,j as We}from"./SelectProfile.vue.66df8240.js";import{_ as Ge}from"./nuxt-link.bd4ec4a4.js";import{m as de,h as q,_ as ce,t as Ke,i as qe,a as Qe,n as _e}from"./entry.2b2d1aa6.js";import{t as Je}from"./tw-merge.2047e3c3.js";import{k as Ye,u as pe,d as Ze,o as Xe,t as et}from"./ui.config.f5c9c7f7.js";import{k as P,a as k,l as w,p as ie,aa as U,ab as ve,w as we,n as G,i as oe,m as ae,b as Se,a4 as L,t as J,F as S,Q as C,a2 as Y,V as T,U as E,E as W,ai as N,G as O,H as h,I,R as A,_ as D,a8 as ke,T as tt,Z as ee,a3 as K,N as at,u as j,Y as fe,f as nt}from"./swiper-vue.4e3db160.js";import{y as lt,w as ot,h as st,o as y,c as ut,u as Q,l as ne,H as F,t as Z,p as rt,N as le,a as _,v as it,b as R,d as Te,O as V,e as dt,f as $e,T as ct,g as te,i as pt,m as vt,P as z}from"./disposables.bf01bd00.js";import{_ as mt}from"./ButtonOpacityDelete.3e8203ee.js";import{u as be}from"./useBase64.1efa7b71.js";import{u as ft}from"./ButtonOpacity.d893a985.js";import{_ as bt}from"./ProfilePage.vue.598a9d42.js";import"./Edit.c4488714.js";import"./nuxt-icon.7df86eed.js";import"./LabelProfile.vue.6bc478a5.js";import"./ModalTitle.vue.759a9195.js";import"./Header2.982283e5.js";import"./Modal.vue.4665c4cc.js";import"./index.52f37379.js";import"./ArrowTop.684f6ea1.js";import"./ArrowRight.382cb66a.js";import"./ButtonText.a00b627f.js";import"./useFormGroup.4f8166fe.js";import"./CrossInCircle.63db2970.js";import"./Search.a6dfe96c.js";import"./cn.a642df04.js";import"./Delete.8aec251b.js";var ht=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ht||{}),gt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(gt||{});function yt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Pe=Symbol("MenuContext");function se(e){let c=oe(Pe,null);if(c===null){let i=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,se),i}return c}let It=P({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:c,attrs:i}){let v=k(1),t=k(null),u=k(null),o=k([]),f=k(""),p=k(null),m=k(1);function a(r=d=>d){let d=p.value!==null?o.value[p.value]:null,b=V(r(o.value.slice()),n=>y(n.dataRef.domRef)),l=d?b.indexOf(d):null;return l===-1&&(l=null),{items:b,activeItemIndex:l}}let s={menuState:v,buttonRef:t,itemsRef:u,items:o,searchQuery:f,activeItemIndex:p,activationTrigger:m,closeMenu:()=>{v.value=1,p.value=null},openMenu:()=>v.value=0,goToItem(r,d,b){let l=a(),n=ze(r===B.Specific?{focus:B.Specific,id:d}:{focus:r},{resolveItems:()=>l.items,resolveActiveIndex:()=>l.activeItemIndex,resolveId:g=>g.id,resolveDisabled:g=>g.dataRef.disabled});f.value="",p.value=n,m.value=b??1,o.value=l.items},search(r){let d=f.value!==""?0:1;f.value+=r.toLowerCase();let b=(p.value!==null?o.value.slice(p.value+d).concat(o.value.slice(0,p.value+d)):o.value).find(n=>n.dataRef.textValue.startsWith(f.value)&&!n.dataRef.disabled),l=b?o.value.indexOf(b):-1;l===-1||l===p.value||(p.value=l,m.value=1)},clearSearch(){f.value=""},registerItem(r,d){let b=a(l=>[...l,{id:r,dataRef:d}]);o.value=b.items,p.value=b.activeItemIndex,m.value=1},unregisterItem(r){let d=a(b=>{let l=b.findIndex(n=>n.id===r);return l!==-1&&b.splice(l,1),b});o.value=d.items,p.value=d.activeItemIndex,m.value=1}};return lt([t,u],(r,d)=>{var b;s.closeMenu(),ot(d,st.Loose)||(r.preventDefault(),(b=y(t))==null||b.focus())},w(()=>v.value===0)),ie(Pe,s),ut(w(()=>Q(v.value,{0:ne.Open,1:ne.Closed}))),()=>{let r={open:v.value===0,close:s.closeMenu};return F({ourProps:{},theirProps:e,slot:r,slots:c,attrs:i,name:"Menu"})}}}),_t=P({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${Z()}`}},setup(e,{attrs:c,slots:i,expose:v}){let t=se("MenuButton");v({el:t.buttonRef,$el:t.buttonRef});function u(m){switch(m.key){case _.Space:case _.Enter:case _.ArrowDown:m.preventDefault(),m.stopPropagation(),t.openMenu(),G(()=>{var a;(a=y(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(B.First)});break;case _.ArrowUp:m.preventDefault(),m.stopPropagation(),t.openMenu(),G(()=>{var a;(a=y(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(B.Last)});break}}function o(m){switch(m.key){case _.Space:m.preventDefault();break}}function f(m){e.disabled||(t.menuState.value===0?(t.closeMenu(),G(()=>{var a;return(a=y(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(m.preventDefault(),t.openMenu(),yt(()=>{var a;return(a=y(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let p=ge(w(()=>({as:e.as,type:c.type})),t.buttonRef);return()=>{var m;let a={open:t.menuState.value===0},{id:s,...r}=e,d={ref:t.buttonRef,id:s,type:p.value,"aria-haspopup":"menu","aria-controls":(m=y(t.itemsRef))==null?void 0:m.id,"aria-expanded":t.menuState.value===0,onKeydown:u,onKeyup:o,onClick:f};return F({ourProps:d,theirProps:r,slot:a,attrs:c,slots:i,name:"MenuButton"})}}}),wt=P({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${Z()}`}},setup(e,{attrs:c,slots:i,expose:v}){let t=se("MenuItems"),u=k(null);v({el:t.itemsRef,$el:t.itemsRef}),Le({container:w(()=>y(t.itemsRef)),enabled:w(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function o(a){var s;switch(u.value&&clearTimeout(u.value),a.key){case _.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case _.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let r=t.items.value[t.activeItemIndex.value];(s=y(r.dataRef.domRef))==null||s.click()}t.closeMenu(),Te(y(t.buttonRef));break;case _.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(B.Next);case _.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(B.Previous);case _.Home:case _.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(B.First);case _.End:case _.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(B.Last);case _.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),G(()=>{var r;return(r=y(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})});break;case _.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),G(()=>it(y(t.buttonRef),a.shiftKey?R.Previous:R.Next));break;default:a.key.length===1&&(t.search(a.key),u.value=setTimeout(()=>t.clearSearch(),350));break}}function f(a){switch(a.key){case _.Space:a.preventDefault();break}}let p=rt(),m=w(()=>p!==null?(p.value&ne.Open)===ne.Open:t.menuState.value===0);return()=>{var a,s;let r={open:t.menuState.value===0},{id:d,...b}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(s=y(t.buttonRef))==null?void 0:s.id,id:d,onKeydown:o,onKeyup:f,role:"menu",tabIndex:0,ref:t.itemsRef};return F({ourProps:l,theirProps:b,slot:r,attrs:c,slots:i,features:le.RenderStrategy|le.Static,visible:m.value,name:"MenuItems"})}}}),St=P({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${Z()}`}},setup(e,{slots:c,attrs:i,expose:v}){let t=se("MenuItem"),u=k(null);v({el:u,$el:u});let o=w(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),f=je(u),p=w(()=>({disabled:e.disabled,get textValue(){return f()},domRef:u}));U(()=>t.registerItem(e.id,p)),ve(()=>t.unregisterItem(e.id)),we(()=>{t.menuState.value===0&&o.value&&t.activationTrigger.value!==0&&G(()=>{var l,n;return(n=(l=y(u))==null?void 0:l.scrollIntoView)==null?void 0:n.call(l,{block:"nearest"})})});function m(l){if(e.disabled)return l.preventDefault();t.closeMenu(),Te(y(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(B.Nothing);t.goToItem(B.Specific,e.id)}let s=Ue();function r(l){s.update(l)}function d(l){s.wasMoved(l)&&(e.disabled||o.value||t.goToItem(B.Specific,e.id,0))}function b(l){s.wasMoved(l)&&(e.disabled||o.value&&t.goToItem(B.Nothing))}return()=>{let{disabled:l}=e,n={active:o.value,disabled:l,close:t.closeMenu},{id:g,...$}=e;return F({ourProps:{id:g,ref:u,role:"menuitem",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,disabled:void 0,onClick:m,onFocus:a,onPointerenter:r,onMouseenter:r,onPointermove:d,onMousemove:d,onPointerleave:b,onMouseleave:b},theirProps:{...i,...$},slot:n,attrs:i,slots:c,name:"MenuItem"})}}}),kt=P({props:{onFocus:{type:Function,required:!0}},setup(e){let c=k(!0);return()=>c.value?ae($e,{as:"button",type:"button",features:dt.Focusable,onFocus(i){i.preventDefault();let v,t=50;function u(){var o;if(t--<=0){v&&cancelAnimationFrame(v);return}if((o=e.onFocus)!=null&&o.call(e)){c.value=!1,cancelAnimationFrame(v);return}v=requestAnimationFrame(u)}v=requestAnimationFrame(u)}}):null}});var Tt=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Tt||{}),$t=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))($t||{});let Me=Symbol("TabsContext");function X(e){let c=oe(Me,null);if(c===null){let i=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,X),i}return c}let me=Symbol("TabsSSRContext"),Pt=P({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:c,attrs:i,emit:v}){var t;let u=k((t=e.selectedIndex)!=null?t:e.defaultIndex),o=k([]),f=k([]),p=w(()=>e.selectedIndex!==null),m=w(()=>p.value?e.selectedIndex:u.value);function a(l){var n;let g=V(s.tabs.value,y),$=V(s.panels.value,y),H=g.filter(M=>{var x;return!((x=y(M))!=null&&x.hasAttribute("disabled"))});if(l<0||l>g.length-1){let M=Q(u.value===null?0:Math.sign(l-u.value),{[-1]:()=>1,0:()=>Q(Math.sign(l),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),x=Q(M,{0:()=>g.indexOf(H[0]),1:()=>g.indexOf(H[H.length-1])});x!==-1&&(u.value=x),s.tabs.value=g,s.panels.value=$}else{let M=g.slice(0,l),x=[...g.slice(l),...M].find(Oe=>H.includes(Oe));if(!x)return;let ue=(n=g.indexOf(x))!=null?n:s.selectedIndex.value;ue===-1&&(ue=s.selectedIndex.value),u.value=ue,s.tabs.value=g,s.panels.value=$}}let s={selectedIndex:w(()=>{var l,n;return(n=(l=u.value)!=null?l:e.defaultIndex)!=null?n:null}),orientation:w(()=>e.vertical?"vertical":"horizontal"),activation:w(()=>e.manual?"manual":"auto"),tabs:o,panels:f,setSelectedIndex(l){m.value!==l&&v("change",l),p.value||a(l)},registerTab(l){var n;if(o.value.includes(l))return;let g=o.value[u.value];o.value.push(l),o.value=V(o.value,y);let $=(n=o.value.indexOf(g))!=null?n:u.value;$!==-1&&(u.value=$)},unregisterTab(l){let n=o.value.indexOf(l);n!==-1&&o.value.splice(n,1)},registerPanel(l){f.value.includes(l)||(f.value.push(l),f.value=V(f.value,y))},unregisterPanel(l){let n=f.value.indexOf(l);n!==-1&&f.value.splice(n,1)}};ie(Me,s);let r=k({tabs:[],panels:[]}),d=k(!1);U(()=>{d.value=!0}),ie(me,w(()=>d.value?null:r.value));let b=w(()=>e.selectedIndex);return U(()=>{Se([b],()=>{var l;return a((l=e.selectedIndex)!=null?l:e.defaultIndex)},{immediate:!0})}),we(()=>{if(!p.value||m.value==null||s.tabs.value.length<=0)return;let l=V(s.tabs.value,y);l.some((n,g)=>y(s.tabs.value[g])!==y(n))&&s.setSelectedIndex(l.findIndex(n=>y(n)===y(s.tabs.value[m.value])))}),()=>{let l={selectedIndex:u.value};return ae(L,[o.value.length<=0&&ae(kt,{onFocus:()=>{for(let n of o.value){let g=y(n);if((g==null?void 0:g.tabIndex)===0)return g.focus(),!0}return!1}}),F({theirProps:{...i,...ct(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:l,slots:c,attrs:i,name:"TabGroup"})])}}}),Mt=P({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:c,slots:i}){let v=X("TabList");return()=>{let t={selectedIndex:v.selectedIndex.value},u={role:"tablist","aria-orientation":v.orientation.value};return F({ourProps:u,theirProps:e,slot:t,attrs:c,slots:i,name:"TabList"})}}}),xt=P({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${Z()}`}},setup(e,{attrs:c,slots:i,expose:v}){let t=X("Tab"),u=k(null);v({el:u,$el:u}),U(()=>t.registerTab(u)),ve(()=>t.unregisterTab(u));let o=oe(me),f=w(()=>{if(o.value){let n=o.value.tabs.indexOf(e.id);return n===-1?o.value.tabs.push(e.id)-1:n}return-1}),p=w(()=>{let n=t.tabs.value.indexOf(u);return n===-1?f.value:n}),m=w(()=>p.value===t.selectedIndex.value);function a(n){var g;let $=n();if($===te.Success&&t.activation.value==="auto"){let H=(g=vt(u))==null?void 0:g.activeElement,M=t.tabs.value.findIndex(x=>y(x)===H);M!==-1&&t.setSelectedIndex(M)}return $}function s(n){let g=t.tabs.value.map($=>y($)).filter(Boolean);if(n.key===_.Space||n.key===_.Enter){n.preventDefault(),n.stopPropagation(),t.setSelectedIndex(p.value);return}switch(n.key){case _.Home:case _.PageUp:return n.preventDefault(),n.stopPropagation(),a(()=>z(g,R.First));case _.End:case _.PageDown:return n.preventDefault(),n.stopPropagation(),a(()=>z(g,R.Last))}if(a(()=>Q(t.orientation.value,{vertical(){return n.key===_.ArrowUp?z(g,R.Previous|R.WrapAround):n.key===_.ArrowDown?z(g,R.Next|R.WrapAround):te.Error},horizontal(){return n.key===_.ArrowLeft?z(g,R.Previous|R.WrapAround):n.key===_.ArrowRight?z(g,R.Next|R.WrapAround):te.Error}}))===te.Success)return n.preventDefault()}let r=k(!1);function d(){var n;r.value||(r.value=!0,!e.disabled&&((n=y(u))==null||n.focus({preventScroll:!0}),t.setSelectedIndex(p.value),pt(()=>{r.value=!1})))}function b(n){n.preventDefault()}let l=ge(w(()=>({as:e.as,type:c.type})),u);return()=>{var n;let g={selected:m.value},{id:$,...H}=e,M={ref:u,onKeydown:s,onMousedown:b,onClick:d,id:$,role:"tab",type:l.value,"aria-controls":(n=y(t.panels.value[p.value]))==null?void 0:n.id,"aria-selected":m.value,tabIndex:m.value?0:-1,disabled:e.disabled?!0:void 0};return F({ourProps:M,theirProps:H,slot:g,attrs:c,slots:i,name:"Tab"})}}}),Ot=P({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:c,attrs:i}){let v=X("TabPanels");return()=>{let t={selectedIndex:v.selectedIndex.value};return F({theirProps:e,ourProps:{},slot:t,attrs:i,slots:c,name:"TabPanels"})}}}),Rt=P({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${Z()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:c,slots:i,expose:v}){let t=X("TabPanel"),u=k(null);v({el:u,$el:u}),U(()=>t.registerPanel(u)),ve(()=>t.unregisterPanel(u));let o=oe(me),f=w(()=>{if(o.value){let a=o.value.panels.indexOf(e.id);return a===-1?o.value.panels.push(e.id)-1:a}return-1}),p=w(()=>{let a=t.panels.value.indexOf(u);return a===-1?f.value:a}),m=w(()=>p.value===t.selectedIndex.value);return()=>{var a;let s={selected:m.value},{id:r,tabIndex:d,...b}=e,l={ref:u,id:r,role:"tabpanel","aria-labelledby":(a=y(t.tabs.value[p.value]))==null?void 0:a.id,tabIndex:m.value?d:-1};return!m.value&&e.unmount&&!e.static?ae($e,{as:"span",...l}):F({ourProps:l,theirProps:b,slot:s,attrs:c,slots:i,features:le.Static|le.RenderStrategy,visible:m.value,name:"TabPanel"})}}});const re=de(q.ui.strategy,q.ui.kbd,Ye),Ct=P({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>re.default.size,validator(e){return Object.keys(re.size).includes(e)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:c,attrs:i}=pe("kbd",J(e,"ui"),re),v=w(()=>Je(Ke(c.value.base,c.value.size[e.size],c.value.padding,c.value.rounded,c.value.font,c.value.background,c.value.ring),e.class));return{ui:c,attrs:i,kbdClass:v}}});function Dt(e,c,i,v,t,u){return S(),C("kbd",W({class:e.kbdClass},e.attrs),[Y(e.$slots,"default",{},()=>[T(E(e.value),1)])],16)}const xe=ce(Ct,[["render",Dt]]),At=de(q.ui.strategy,q.ui.dropdown,Ze),Bt=P({components:{HMenu:It,HMenuButton:_t,HMenuItems:wt,HMenuItem:St,UIcon:ye,UAvatar:Ie,UKbd:xe},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:c,attrs:i}=pe("dropdown",J(e,"ui"),At,J(e,"class")),v=w(()=>qe(e.mode==="hover"?{offsetDistance:0}:{},e.popper,c.value.popper)),[t,u]=Ve(v.value),o=k(null);let f=null,p=null;U(()=>{setTimeout(()=>{var l;const d=(l=t.value)==null?void 0:l.$.provides;if(!d)return;const b=Object.getOwnPropertySymbols(d);o.value=b.length&&d[b[0]]},200)});const m=w(()=>{var b,l;const d=((b=e.popper)==null?void 0:b.offsetDistance)||((l=c.value.popper)==null?void 0:l.offsetDistance)||8;return e.mode==="hover"?{paddingTop:`${d}px`,paddingBottom:`${d}px`}:{}});function a(){e.mode!=="hover"||!o.value||(p&&(clearTimeout(p),p=null),o.value.menuState!==0&&(f=f||setTimeout(()=>{o.value.openMenu&&o.value.openMenu(),f=null},e.openDelay)))}function s(){e.mode!=="hover"||!o.value||(f&&(clearTimeout(f),f=null),o.value.menuState!==1&&(p=p||setTimeout(()=>{o.value.closeMenu&&o.value.closeMenu(),p=null},e.closeDelay)))}return{ui:c,attrs:i,popper:v,trigger:t,container:u,containerStyle:m,onMouseOver:a,onMouseLeave:s,omit:Xe,NuxtLink:Ge}}}),Et=["disabled"],Ht={class:"truncate"};function Nt(e,c,i,v,t,u){const o=N("HMenuButton"),f=ye,p=Ie,m=xe,a=N("HMenuItem"),s=N("HMenuItems"),r=N("HMenu");return S(),O(r,W({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:h(({open:d})=>[I(o,{ref:"trigger",as:"div",disabled:e.disabled,class:"inline-flex w-full",role:"button",onMouseover:e.onMouseOver},{default:h(()=>[Y(e.$slots,"default",{open:d,disabled:e.disabled},()=>[A("button",{disabled:e.disabled}," Open ",8,Et)])]),_:2},1032,["disabled","onMouseover"]),d&&e.items.length?(S(),C("div",{key:0,ref:"container",class:D([e.ui.container,e.ui.width]),style:ke(e.containerStyle),onMouseover:c[0]||(c[0]=(...b)=>e.onMouseOver&&e.onMouseOver(...b))},[I(tt,W({appear:""},e.ui.transition),{default:h(()=>[A("div",null,[e.popper.arrow?(S(),C("div",{key:0,"data-popper-arrow":"",class:D(["invisible before:visible before:block before:rotate-45 before:z-[-1]",Object.values(e.ui.arrow)])},null,2)):ee("",!0),I(s,{class:D([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:h(()=>[(S(!0),C(L,null,K(e.items,(b,l)=>(S(),C("div",{key:l,class:D(e.ui.padding)},[(S(!0),C(L,null,K(b,(n,g)=>(S(),O(a,{key:g,disabled:n.disabled},{default:h(({active:$,disabled:H})=>[(S(),O(at(n.to?e.NuxtLink:"button"),W(e.omit(n,["label","slot","icon","iconClass","avatar","shortcuts","disabled","click"]),{class:[e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,$?e.ui.item.active:e.ui.item.inactive,H&&e.ui.item.disabled],onClick:n.click}),{default:h(()=>[Y(e.$slots,n.slot||"item",{item:n},()=>{var M;return[n.icon?(S(),O(f,{key:0,name:n.icon,class:D([e.ui.item.icon.base,$?e.ui.item.icon.active:e.ui.item.icon.inactive,n.iconClass])},null,8,["name","class"])):n.avatar?(S(),O(p,W({key:1},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):ee("",!0),A("span",Ht,E(n.label),1),(M=n.shortcuts)!=null&&M.length?(S(),C("span",{key:2,class:D(e.ui.item.shortcuts)},[(S(!0),C(L,null,K(n.shortcuts,x=>(S(),O(m,{key:x},{default:h(()=>[T(E(x),1)]),_:2},1024))),128))],2)):ee("",!0)]})]),_:2},1040,["class","onClick"]))]),_:2},1032,["disabled"]))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):ee("",!0)]),_:3},16,["class","onMouseleave"])}const Ft=ce(Bt,[["render",Nt]]),Lt=P({__name:"SelectSwitchWarehouse",setup(e){const c=[[{label:"Profile",avatar:{src:"https://avatars.githubusercontent.com/u/739984?v=4"}}],[{label:"Edit",icon:"i-heroicons-pencil-square-20-solid",shortcuts:["E"],click:()=>{console.log("Edit")}},{label:"Duplicate",icon:"i-heroicons-document-duplicate-20-solid",shortcuts:["D"],disabled:!0}],[{label:"Archive",icon:"i-heroicons-archive-box-20-solid"},{label:"Move",icon:"i-heroicons-arrow-right-circle-20-solid"}],[{label:"Delete",icon:"i-heroicons-trash-20-solid",shortcuts:["⌘","D"]}]];return(i,v)=>{const t=We,u=Ft;return S(),O(u,{items:c,popper:{placement:"bottom-start"}},{default:h(()=>[I(t,{value:"1",open:!1})]),_:1})}}}),jt={class:"max-w-[200px] w-full inline-block truncate"},Ut=["src"],zt=["src"],Vt={class:"font-medium leading-[130%] max-w-[200px] inline-block truncate"},Wt={class:"flex items-center gap-[5px] md:gap-[25px]"},Gt=P({__name:"TableItemWarehouse",props:{product:{}},emits:["deleteAction"],setup(e,{emit:c}){return Qe(),(i,v)=>{const t=He,u=Ne,o=Fe,f=Lt,p=Re,m=mt,a=Ae;return S(),O(a,null,{header:h(()=>{var s;return[A("span",jt,E((s=i.product)==null?void 0:s.name),1)]}),elements:h(({active:s})=>[I(t,{vIf:s},{title:h(()=>{var r,d;return[A("img",{class:"w-[23px] h-[28px] 3xl:w-[30px] 3xl:h-[35px] object-cover",src:("useBase64"in i?i.useBase64:j(be))((d=(r=i.product)==null?void 0:r.variations[0])==null?void 0:d.photos[0]),alt:""},null,8,Ut)]}),value:h(()=>{var r,d;return[A("img",{class:"w-[23px] h-[28px] 3xl:w-[30px] 3xl:h-[35px] object-cover hidden 3xl:inline-block",src:("useBase64"in i?i.useBase64:j(be))((d=(r=i.product)==null?void 0:r.variations[0])==null?void 0:d.photos[0]),alt:""},null,8,zt)]}),_:2},1032,["vIf"]),I(t,{vIf:s},{title:h(()=>[T("Товар")]),value:h(()=>{var r;return[A("span",Vt,E((r=i.product)==null?void 0:r.name),1)]}),_:2},1032,["vIf"]),I(t,{vIf:s},{title:h(()=>[T("Статус")]),value:h(()=>[I(u,{color:i.product.status.colour},{default:h(()=>[T(E(i.product.status.status),1)]),_:1},8,["color"])]),_:2},1032,["vIf"]),I(t,{vIf:s},{title:h(()=>[T("Кількість")]),value:h(()=>{var r;return[T(E((r=i.product)==null?void 0:r.pieces),1),I(o)]}),_:2},1032,["vIf"]),I(t,{vIf:s},{title:h(()=>[T("Склади")]),value:h(()=>[I(f)]),_:2},1032,["vIf"]),I(t,{vIf:s},{title:h(()=>[T("Категорія")]),value:h(()=>{var r;return[T(E((r=i.product)==null?void 0:r.category),1)]}),_:2},1032,["vIf"]),I(t,{vIf:s},{title:h(()=>[T("Коментар")]),value:h(()=>[T(E(i.product.comment),1)]),_:2},1032,["vIf"])]),"additional-buttons":h(()=>[A("div",Wt,[I(p,{class:"flex-shrink-0",onClick:v[0]||(v[0]=fe(s=>("navigateTo"in i?i.navigateTo:j(_e))("/profile/edit_product/"+i.product._id),["stop"]))}),I(m,{class:"flex-shrink-0",onClick:v[1]||(v[1]=fe(()=>{},["stop"]))})])]),_:1})}}}),Kt=P({__name:"warehouses",props:{warehouseId:{}},setup(e){const c=e,i=he(),v=()=>i.warehouseType(c.warehouseId),t=k(""),u=w(()=>i.warehouseProducts[v()]),o=()=>i.setSubwarehouse(t.value,c.warehouseId),f=()=>i.fetchProducts(c.warehouseId),p=m=>i.searchProducts(m,c.warehouseId);return f(),(m,a)=>{const s=Ce,r=De,d=Be,b=Gt,l=Ee;return S(),C("div",null,[I(s,{onSearch:p,onAdd:a[0]||(a[0]=n=>("navigateTo"in m?m.navigateTo:j(_e))("new_product"))},{add_name:h(()=>[T(" Додати товар")]),_:1}),I(l,{class:"bg-beige-light"},{additional_elements:h(()=>[I(r,{placeholder:"",modelValue:j(t),"onUpdate:modelValue":a[1]||(a[1]=n=>nt(t)?t.value=n:null),onActionUpdate:o,class:"max-w-[213px] mb-[15px] 3xl:mb-[5px]"},null,8,["modelValue"])]),headers:h(()=>[I(d),I(d,null,{default:h(()=>[T("Товар")]),_:1}),I(d,null,{default:h(()=>[T("Статус")]),_:1}),I(d,null,{default:h(()=>[T("Кількість")]),_:1}),I(d,null,{default:h(()=>[T("Склади")]),_:1}),I(d,null,{default:h(()=>[T("Категорія")]),_:1}),I(d,null,{default:h(()=>[T("Коментар")]),_:1})]),items:h(()=>[(S(!0),C(L,null,K(j(u),n=>(S(),O(b,{key:n._id,product:n},null,8,["product"]))),128))]),_:1})])}}}),qt=de(q.ui.strategy,q.ui.tabs,et),Qt=P({components:{HTabGroup:Pt,HTabList:Mt,HTab:xt,HTabPanels:Ot,HTabPanel:Rt},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:c}){const{ui:i,attrs:v}=pe("tabs",J(e,"ui"),qt,J(e,"class")),t=k(),u=k([]),o=k(),f=k(e.modelValue||e.defaultIndex);function p(a){var r;const s=(r=u.value[a])==null?void 0:r.$el;s&&(o.value.style.top=`${s.offsetTop}px`,o.value.style.left=`${s.offsetLeft}px`,o.value.style.width=`${s.offsetWidth}px`,o.value.style.height=`${s.offsetHeight}px`)}function m(a){f.value=a,c("change",a),e.modelValue!==void 0&&c("update:modelValue",a),p(a)}return ft(t,()=>{p(f.value)}),Se(()=>e.modelValue,a=>{f.value=a,p(a)}),U(()=>p(f.value)),{ui:i,attrs:v,listRef:t,itemRefs:u,markerRef:o,selectedIndex:f,onChange:m}}}),Jt={class:"truncate"};function Yt(e,c,i,v,t,u){const o=N("HTab"),f=N("HTabList"),p=N("HTabPanel"),m=N("HTabPanels"),a=N("HTabGroup");return S(),O(a,W({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:h(()=>[I(f,{ref:"listRef",class:D([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:ke([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:h(()=>[A("div",{ref:"markerRef",class:D(e.ui.list.marker.wrapper)},[A("div",{class:D([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(S(!0),C(L,null,K(e.items,(s,r)=>(S(),O(o,{key:r,ref_for:!0,ref:"itemRefs",disabled:s.disabled,as:"template"},{default:h(({selected:d,disabled:b})=>[A("button",{class:D([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,d?e.ui.list.tab.active:e.ui.list.tab.inactive])},[Y(e.$slots,"default",{item:s,index:r,selected:d,disabled:b},()=>[A("span",Jt,E(s.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),I(m,{class:D(e.ui.container)},{default:h(()=>[(S(!0),C(L,null,K(e.items,(s,r)=>(S(),O(p,{key:r,class:D(e.ui.base),tabindex:"-1"},{default:h(({selected:d})=>[Y(e.$slots,s.slot||"item",{item:s,index:r,selected:d},()=>[T(E(s.content),1)])]),_:2},1032,["class"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const Zt=ce(Qt,[["render",Yt]]),Ra=P({__name:"warehouses",setup(e){const i=he().warehouses.map(v=>({id:v.id,label:v.name,slot:"warehousesSlot"}));return(v,t)=>{const u=Kt,o=Zt,f=bt;return S(),O(f,{title:"Склади"},{content:h(()=>[I(o,{ui:{container:"!pt-[20px]",list:{base:"bg-transparent h-auto gap-[10px] md:gap-[35px] !p-0 !flex  flex-col !items-start xs:flex-row xs:!items-center",width:"w-fit",marker:{wrapper:"hidden"},tab:{base:"!text-[9px] md:!text-[12px] truncate !inline-flex justify-start lg:!text-[15px] !h-auto w-fit focus:!ring-0 !p-0",active:"!text-black",inactive:"!text-beige-1"}}},items:j(i),"default-index":0},{warehousesSlot:h(({item:p})=>[I(u,{warehouseId:p.id},null,8,["warehouseId"])]),_:1},8,["items"])]),_:1})}}});export{Ra as default};
