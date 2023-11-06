import{m as lt,u as at}from"./ui.config.11131de5.js";import{i as c,L as R,f as O,y as f,M as $,N as H,O as S,F as rt,P as te,Q as k,R as D,T as ot,r as ut,S as it,U as st,G as Z,B as dt,C as He,_ as ft,D as ke,V as ue,o as Se,j as Te,w as Q,b as ge,H as ye,a as be,m as ct,n as Ve}from"./entry.524c610c.js";import{w as pt,c as Ue,m as ne,f as Le,a as Ce,H as M,S as _,o as y,t as We,u as G,P as de,N as V,T as vt,b as mt,d as fe,e as Ae,p as Ie,l as C,y as ht,g as $e,h as gt,C as yt,i as W,j as bt,k as wt}from"./disposables.d200f846.js";var ee=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ee||{});function Et(){let e=c(0);return pt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function _e(e,t,n,l){Ue.isServer||R(a=>{e=e??window,e.addEventListener(t,n,l),a(()=>e.removeEventListener(t,n,l))})}function St(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ge(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=y(n);l instanceof HTMLElement&&t.add(l)}return t}var qe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(qe||{});let J=Object.assign(O({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:c(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let a=c(null);l({el:a,$el:a});let r=f(()=>ne(a)),o=c(!1);$(()=>o.value=!0),H(()=>o.value=!1),Lt({ownerDocument:r},f(()=>o.value&&!!(e.features&16)));let u=Ct({ownerDocument:r,container:a,initialFocus:f(()=>e.initialFocus)},f(()=>o.value&&!!(e.features&2)));$t({ownerDocument:r,container:a,containers:e.containers,previousActiveElement:u},f(()=>o.value&&!!(e.features&8)));let i=Et();function s(h){let b=y(a);b&&(w=>w())(()=>{G(i.value,{[ee.Forwards]:()=>{de(b,V.First,{skipElements:[h.relatedTarget]})},[ee.Backwards]:()=>{de(b,V.Last,{skipElements:[h.relatedTarget]})}})})}let d=c(!1);function m(h){h.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function v(h){if(!o.value)return;let b=Ge(e.containers);y(a)instanceof HTMLElement&&b.add(y(a));let w=h.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(Ye(b,w)||(d.value?de(y(a),G(i.value,{[ee.Forwards]:()=>V.Next,[ee.Backwards]:()=>V.Previous})|V.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&_(h.target)))}return()=>{let h={},b={ref:a,onKeydown:m,onFocusout:v},{features:w,initialFocus:T,containers:x,...L}=e;return S(rt,[!!(w&4)&&S(Le,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Ce.Focusable}),M({ourProps:b,theirProps:{...t,...L},slot:h,attrs:t,slots:n,name:"FocusTrap"}),!!(w&4)&&S(Le,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Ce.Focusable})])}}}),{features:qe}),U=[];St(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&U[0]!==t.target&&(U.unshift(t.target),U=U.filter(n=>n!=null&&n.isConnected),U.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Tt(e){let t=c(U.slice());return te([e],([n],[l])=>{l===!0&&n===!1?We(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=U.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function Lt({ownerDocument:e},t){let n=Tt(t);$(()=>{R(()=>{var l,a;t.value||((l=e.value)==null?void 0:l.activeElement)===((a=e.value)==null?void 0:a.body)&&_(n())},{flush:"post"})}),H(()=>{t.value&&_(n())})}function Ct({ownerDocument:e,container:t,initialFocus:n},l){let a=c(null),r=c(!1);return $(()=>r.value=!0),H(()=>r.value=!1),$(()=>{te([t,n,l],(o,u)=>{if(o.every((s,d)=>(u==null?void 0:u[d])===s)||!l.value)return;let i=y(t);i&&We(()=>{var s,d;if(!r.value)return;let m=y(n),v=(s=e.value)==null?void 0:s.activeElement;if(m){if(m===v){a.value=v;return}}else if(i.contains(v)){a.value=v;return}m?_(m):de(i,V.First|V.NoScroll)===vt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),a}function $t({ownerDocument:e,container:t,containers:n,previousActiveElement:l},a){var r;_e((r=e.value)==null?void 0:r.defaultView,"focus",o=>{if(!a.value)return;let u=Ge(n);y(t)instanceof HTMLElement&&u.add(y(t));let i=l.value;if(!i)return;let s=o.target;s&&s instanceof HTMLElement?Ye(u,s)?(l.value=s,_(s)):(o.preventDefault(),o.stopPropagation(),_(i)):_(l.value)},!0)}function Ye(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let we=new Map,K=new Map;function Me(e,t=c(!0)){R(n=>{var l;if(!t.value)return;let a=y(e);if(!a)return;n(function(){var o;if(!a)return;let u=(o=K.get(a))!=null?o:1;if(u===1?K.delete(a):K.set(a,u-1),u!==1)return;let i=we.get(a);i&&(i["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",i["aria-hidden"]),a.inert=i.inert,we.delete(a))});let r=(l=K.get(a))!=null?l:0;K.set(a,r+1),r===0&&(we.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}let Qe=Symbol("ForcePortalRootContext");function Ft(){return D(Qe,!1)}let Ne=O({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return k(Qe,e.force),()=>{let{force:l,...a}=e;return M({theirProps:a,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Pt(e){let t=ne(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let Ot=O({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=c(null),a=f(()=>ne(l)),r=Ft(),o=D(xe,null),u=c(r===!0||o==null?Pt(l.value):o.resolveTarget());R(()=>{r||o!=null&&(u.value=o.resolveTarget())});let i=D(Fe,null);return $(()=>{let s=y(l);s&&i&&H(i.register(s))}),H(()=>{var s,d;let m=(s=a.value)==null?void 0:s.getElementById("headlessui-portal-root");m&&u.value===m&&u.value.children.length<=0&&((d=u.value.parentElement)==null||d.removeChild(u.value))}),()=>{if(u.value===null)return null;let s={ref:l,"data-headlessui-portal":""};return S(ot,{to:u.value},M({ourProps:s,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Fe=Symbol("PortalParentContext");function Dt(){let e=D(Fe,null),t=c([]);function n(r){return t.value.push(r),e&&e.register(r),()=>l(r)}function l(r){let o=t.value.indexOf(r);o!==-1&&t.value.splice(o,1),e&&e.unregister(r)}let a={register:n,unregister:l,portals:t};return[t,O({name:"PortalWrapper",setup(r,{slots:o}){return k(Fe,a),()=>{var u;return(u=o.default)==null?void 0:u.call(o)}}})]}let xe=Symbol("PortalGroupContext"),At=O({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=ut({resolveTarget(){return e.target}});return k(xe,l),()=>{let{target:a,...r}=e;return M({theirProps:r,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),ze=Symbol("StackContext");var Pe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Pe||{});function Bt(){return D(ze,()=>{})}function Rt({type:e,enabled:t,element:n,onUpdate:l}){let a=Bt();function r(...o){l==null||l(...o),a(...o)}$(()=>{te(t,(o,u)=>{o?r(0,e,n):u===!0&&r(1,e,n)},{immediate:!0,flush:"sync"})}),H(()=>{t.value&&r(1,e,n)}),k(ze,r)}let Ht=Symbol("DescriptionContext");function kt({slot:e=c({}),name:t="Description",props:n={}}={}){let l=c([]);function a(r){return l.value.push(r),()=>{let o=l.value.indexOf(r);o!==-1&&l.value.splice(o,1)}}return k(Ht,{register:a,slot:e,name:t,props:n}),f(()=>l.value.length>0?l.value.join(" "):void 0)}function Mt(e){let t=it(e.getSnapshot());return H(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Nt(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(a){return l.add(a),()=>l.delete(a)},dispatch(a,...r){let o=t[a].call(n,...r);o&&(n=o,l.forEach(u=>u()))}}}function jt(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,a=l.clientWidth-l.offsetWidth,r=e-a;n.style(l,"paddingRight",`${r}px`)}}}function Vt(){if(!mt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:l}){function a(o){return l.containers.flatMap(u=>u()).some(u=>u.contains(o))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=fe();o.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>o.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let r=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let u=o.target.closest("a");if(!u)return;let{hash:i}=new URL(u.href),s=t.querySelector(i);s&&!a(s)&&(r=s)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!a(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})}}}function Ut(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Wt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let I=Nt(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:fe(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Wt(n)},a=[Vt(),jt(),Ut()];a.forEach(({before:r})=>r==null?void 0:r(l)),a.forEach(({after:r})=>r==null?void 0:r(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});I.subscribe(()=>{let e=I.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!l||!a&&l)&&I.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&I.dispatch("TEARDOWN",n)}});function It(e,t,n){let l=Mt(I),a=f(()=>{let r=e.value?l.value.get(e.value):void 0;return r?r.count>0:!1});return te([e,t],([r,o],[u],i)=>{if(!r||!o)return;I.dispatch("PUSH",r,n);let s=!1;i(()=>{s||(I.dispatch("POP",u??r,n),s=!0)})},{immediate:!0}),a}function _t({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=c(null),a=ne(l);function r(){var o;let u=[];for(let i of e)i!==null&&(i instanceof HTMLElement?u.push(i):"value"in i&&i.value instanceof HTMLElement&&u.push(i.value));if(t!=null&&t.value)for(let i of t.value)u.push(i);for(let i of(o=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?o:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(y(l))||u.some(s=>i.contains(s))||u.push(i));return u}return{resolveContainers:r,contains(o){return r().some(u=>u.contains(o))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:S(Le,{features:Ce.Hidden,ref:l})}}}var Gt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Gt||{});let Oe=Symbol("DialogContext");function Xe(e){let t=D(Oe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Xe),n}return t}let ie="DC8F892D-2EBD-447C-A4C8-A03058436FF4",qt=O({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ie},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${Ae()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){var r;let o=c(!1);$(()=>{o.value=!0});let u=c(0),i=Ie(),s=f(()=>e.open===ie&&i!==null?(i.value&C.Open)===C.Open:e.open),d=c(null),m=f(()=>ne(d));if(a({el:d,$el:d}),!(e.open!==ie||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===ie?void 0:e.open}`);let v=f(()=>o.value&&s.value?0:1),h=f(()=>v.value===0),b=f(()=>u.value>1),w=D(Oe,null)!==null,[T,x]=Dt(),{resolveContainers:L,mainTreeNodeRef:N,MainTreeNode:le}=_t({portals:T,defaultContainers:[f(()=>{var p;return(p=E.panelRef.value)!=null?p:d.value})]}),ae=f(()=>b.value?"parent":"leaf"),z=f(()=>i!==null?(i.value&C.Closing)===C.Closing:!1),pe=f(()=>w||z.value?!1:h.value),re=f(()=>{var p,g,F;return(F=Array.from((g=(p=m.value)==null?void 0:p.querySelectorAll("body > *"))!=null?g:[]).find(P=>P.id==="headlessui-portal-root"?!1:P.contains(y(N))&&P instanceof HTMLElement))!=null?F:null});Me(re,pe);let ve=f(()=>b.value?!0:h.value),me=f(()=>{var p,g,F;return(F=Array.from((g=(p=m.value)==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(P=>P.contains(y(N))&&P instanceof HTMLElement))!=null?F:null});Me(me,ve),Rt({type:"Dialog",enabled:f(()=>v.value===0),element:d,onUpdate:(p,g)=>{if(g==="Dialog")return G(p,{[Pe.Add]:()=>u.value+=1,[Pe.Remove]:()=>u.value-=1})}});let he=kt({name:"DialogDescription",slot:f(()=>({open:s.value}))}),q=c(null),E={titleId:q,panelRef:c(null),dialogState:v,setTitleId(p){q.value!==p&&(q.value=p)},close(){t("close",!1)}};k(Oe,E);let X=f(()=>!(!h.value||b.value));ht(L,(p,g)=>{E.close(),st(()=>g==null?void 0:g.focus())},X);let A=f(()=>!(b.value||v.value!==0));_e((r=m.value)==null?void 0:r.defaultView,"keydown",p=>{A.value&&(p.defaultPrevented||p.key===gt.Escape&&(p.preventDefault(),p.stopPropagation(),E.close()))});let Y=f(()=>!(z.value||v.value!==0||w));return It(m,Y,p=>{var g;return{containers:[...(g=p.containers)!=null?g:[],L]}}),R(p=>{if(v.value!==0)return;let g=y(d);if(!g)return;let F=new ResizeObserver(P=>{for(let oe of P){let B=oe.target.getBoundingClientRect();B.x===0&&B.y===0&&B.width===0&&B.height===0&&E.close()}});F.observe(g),p(()=>F.disconnect())}),()=>{let{id:p,open:g,initialFocus:F,...P}=e,oe={...n,ref:d,id:p,role:"dialog","aria-modal":v.value===0?!0:void 0,"aria-labelledby":q.value,"aria-describedby":he.value},B={open:v.value===0};return S(Ne,{force:!0},()=>[S(Ot,()=>S(At,{target:d.value},()=>S(Ne,{force:!1},()=>S(J,{initialFocus:F,containers:L,features:h.value?G(ae.value,{parent:J.features.RestoreFocus,leaf:J.features.All&~J.features.FocusLock}):J.features.None},()=>S(x,{},()=>M({ourProps:oe,theirProps:{...P,...n},slot:B,attrs:n,slots:l,visible:v.value===0,features:$e.RenderStrategy|$e.Static,name:"Dialog"})))))),S(le)])}}}),Yt=O({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${Ae()}`}},setup(e,{attrs:t,slots:n,expose:l}){let a=Xe("DialogPanel");l({el:a.panelRef,$el:a.panelRef});function r(o){o.stopPropagation()}return()=>{let{id:o,...u}=e,i={id:o,ref:a.panelRef,onClick:r};return M({ourProps:i,theirProps:u,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function Qt(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Ee(e,...t){e&&t.length>0&&e.classList.add(...t)}function se(e,...t){e&&t.length>0&&e.classList.remove(...t)}var De=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(De||{});function xt(e,t){let n=fe();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:a}=getComputedStyle(e),[r,o]=[l,a].map(u=>{let[i=0]=u.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return i});return r!==0?n.setTimeout(()=>t("finished"),r+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function je(e,t,n,l,a,r){let o=fe(),u=r!==void 0?Qt(r):()=>{};return se(e,...a),Ee(e,...t,...n),o.nextFrame(()=>{se(e,...n),Ee(e,...l),o.add(xt(e,i=>(se(e,...l,...t),Ee(e,...a),u(i))))}),o.add(()=>se(e,...t,...n,...l,...a)),o.add(()=>u("cancelled")),o.dispose}function j(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Be=Symbol("TransitionContext");var zt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(zt||{});function Xt(){return D(Be,null)!==null}function Jt(){let e=D(Be,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Kt(){let e=D(Re,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Re=Symbol("NestingContext");function ce(e){return"children"in e?ce(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Je(e){let t=c([]),n=c(!1);$(()=>n.value=!0),H(()=>n.value=!1);function l(r,o=W.Hidden){let u=t.value.findIndex(({id:i})=>i===r);u!==-1&&(G(o,{[W.Unmount](){t.value.splice(u,1)},[W.Hidden](){t.value[u].state="hidden"}}),!ce(t)&&n.value&&(e==null||e()))}function a(r){let o=t.value.find(({id:u})=>u===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>l(r,W.Unmount)}return{children:t,register:a,unregister:l}}let Ke=$e.RenderStrategy,Ze=O({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){let r=c(0);function o(){r.value|=C.Opening,t("beforeEnter")}function u(){r.value&=~C.Opening,t("afterEnter")}function i(){r.value|=C.Closing,t("beforeLeave")}function s(){r.value&=~C.Closing,t("afterLeave")}if(!Xt()&&yt())return()=>S(et,{...e,onBeforeEnter:o,onAfterEnter:u,onBeforeLeave:i,onAfterLeave:s},l);let d=c(null),m=f(()=>e.unmount?W.Unmount:W.Hidden);a({el:d,$el:d});let{show:v,appear:h}=Jt(),{register:b,unregister:w}=Kt(),T=c(v.value?"visible":"hidden"),x={value:!0},L=Ae(),N={value:!1},le=Je(()=>{!N.value&&T.value!=="hidden"&&(T.value="hidden",w(L),s())});$(()=>{let E=b(L);H(E)}),R(()=>{if(m.value===W.Hidden&&L){if(v.value&&T.value!=="visible"){T.value="visible";return}G(T.value,{hidden:()=>w(L),visible:()=>b(L)})}});let ae=j(e.enter),z=j(e.enterFrom),pe=j(e.enterTo),re=j(e.entered),ve=j(e.leave),me=j(e.leaveFrom),he=j(e.leaveTo);$(()=>{R(()=>{if(T.value==="visible"){let E=y(d);if(E instanceof Comment&&E.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function q(E){let X=x.value&&!h.value,A=y(d);!A||!(A instanceof HTMLElement)||X||(N.value=!0,v.value&&o(),v.value||i(),E(v.value?je(A,ae,z,pe,re,Y=>{N.value=!1,Y===De.Finished&&u()}):je(A,ve,me,he,re,Y=>{N.value=!1,Y===De.Finished&&(ce(le)||(T.value="hidden",w(L),s()))})))}return $(()=>{te([v],(E,X,A)=>{q(A),x.value=!1},{immediate:!0})}),k(Re,le),bt(f(()=>G(T.value,{visible:C.Open,hidden:C.Closed})|r.value)),()=>{let{appear:E,show:X,enter:A,enterFrom:Y,enterTo:p,entered:g,leave:F,leaveFrom:P,leaveTo:oe,...B}=e,tt={ref:d},nt={...B,...h.value&&v.value&&Ue.isServer?{class:Z([n.class,B.class,...ae,...z])}:{}};return M({theirProps:nt,ourProps:tt,slot:{},slots:l,attrs:n,features:Ke,visible:T.value==="visible",name:"TransitionChild"})}}}),Zt=Ze,et=O({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let a=Ie(),r=f(()=>e.show===null&&a!==null?(a.value&C.Open)===C.Open:e.show);R(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=c(r.value?"visible":"hidden"),u=Je(()=>{o.value="hidden"}),i=c(!0),s={show:r,appear:f(()=>e.appear||!i.value)};return $(()=>{R(()=>{i.value=!1,r.value?o.value="visible":ce(u)||(o.value="hidden")})}),k(Re,u),k(Be,s),()=>{let d=wt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),m={unmount:e.unmount};return M({ourProps:{...m,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[S(Zt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...m,...d},l.default)]},attrs:{},features:Ke,visible:o.value==="visible",name:"Transition"})}}});const en=dt(He.ui.strategy,He.ui.modal,lt),tn=O({components:{HDialog:qt,HDialogPanel:Yt,TransitionRoot:et,TransitionChild:Ze},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","close"],setup(e,{emit:t}){const{ui:n,attrs:l}=at("modal",ke(e,"ui"),en,ke(e,"class")),a=f({get(){return e.modelValue},set(u){t("update:modelValue",u)}}),r=f(()=>e.transition?{...n.value.transition}:{});function o(u){a.value=u,t("close")}return{ui:n,attrs:l,isOpen:a,transitionClass:r,close:o}}});function nn(e,t,n,l,a,r){const o=ue("TransitionChild"),u=ue("HDialogPanel"),i=ue("HDialog"),s=ue("TransitionRoot");return Se(),Te(s,{appear:e.appear,show:e.isOpen,as:"template"},{default:Q(()=>[ge(i,ye({class:e.ui.wrapper},e.attrs,{onClose:t[0]||(t[0]=d=>!e.preventClose&&e.close(d))}),{default:Q(()=>[e.overlay?(Se(),Te(o,ye({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:Q(()=>[be("div",{class:Z([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):ct("",!0),be("div",{class:Z(e.ui.inner)},[be("div",{class:Z([e.ui.container,e.ui.padding])},[ge(o,ye({as:"template",appear:e.appear},e.transitionClass),{default:Q(()=>[ge(u,{class:Z([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?"w-screen":e.ui.width,e.fullscreen?"h-screen":e.ui.height,e.fullscreen?"rounded-none":e.ui.rounded,e.fullscreen?"m-0":e.ui.margin])},{default:Q(()=>[Ve(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class"])]),_:3},8,["appear","show"])}const ln=ft(tn,[["render",nn]]),un=O({__name:"Modal",props:{ui:{}},setup(e){return(t,n)=>{const l=ln;return Se(),Te(l,{ui:{container:"items-center",rounded:"rounded-[5px] md:rounded-[20px]",base:"p-[20px] md:p-[30px]",...t.ui,overlay:{background:"bg-dark-transparent"}}},{default:Q(()=>[Ve(t.$slots,"default")]),_:3},8,["ui"])}}});export{un as _};
