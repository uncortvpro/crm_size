import{ac as x,I as L,F as T,L as k,H as I,E as A,i as M,q as H,f as D}from"./entry.22f5ca64.js";function b(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,b),r}var C=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(C||{}),U=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(U||{});function q({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var i;let l=P(r,n),a=Object.assign(o,{props:l});if(e||t&2&&l.static)return g(a);if(t&1){let m=(i=l.unmount)==null||i?0:1;return b(m,{0(){return null},1(){return g({...o,props:{...l,hidden:!0,style:{display:"none"}}})}})}return g(a)}function g({props:e,attrs:t,slots:n,slot:r,name:o}){var i,l;let{as:a,...m}=R(e,["unmount","static"]),u=(i=n.default)==null?void 0:i.call(n,r),s={};if(r){let p=!1,v=[];for(let[f,c]of Object.entries(r))typeof c=="boolean"&&(p=!0),c===!0&&v.push(f);p&&(s["data-headlessui-state"]=v.join(" "))}if(a==="template"){if(u=N(u??[]),Object.keys(m).length>0||Object.keys(t).length>0){let[p,...v]=u??[];if(!_(p)||v.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(m).concat(Object.keys(t)).map(d=>d.trim()).filter((d,w,$)=>$.indexOf(d)===w).sort((d,w)=>d.localeCompare(w)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let f=P((l=p.props)!=null?l:{},m),c=x(p,f);for(let d in f)d.startsWith("on")&&(c.props||(c.props={}),c.props[d]=f[d]);return c}return Array.isArray(u)&&u.length===1?u[0]:u}return L(a,Object.assign({},m,s),{default:()=>u})}function N(e){return e.flatMap(t=>t.type===T?N(t.children):[t])}function P(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...i){let l=n[r];for(let a of l){if(o instanceof Event&&o.defaultPrevented)return;a(o,...i)}}});return t}function me(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function R(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function _(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let K=0;function W(){return++K}function ve(){return W()}var V=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(V||{});function F(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let S=Symbol("Context");var G=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(G||{});function he(){return B()!==null}function B(){return k(S,null)}function we(e){I(S,e)}var X=Object.defineProperty,Y=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t,n)=>(Y(e,typeof t!="symbol"?t+"":t,n),n);class z{constructor(){O(this,"current",this.detect()),O(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let E=new z;function J(e){if(E.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=F(e);if(t)return t.ownerDocument}return document}let y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Q=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Q||{}),Z=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Z||{}),ee=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ee||{});function te(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(y)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var j=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(j||{});function ne(e,t=0){var n;return e===((n=J(e))==null?void 0:n.body)?!1:b(t,{0(){return e.matches(y)},1(){let r=e;for(;r!==null;){if(r.matches(y))return!0;r=r.parentElement}return!1}})}var re=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(re||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ge(e){e==null||e.focus({preventScroll:!0})}let oe=["textarea","input"].join(",");function ie(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,oe))!=null?n:!1}function ae(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),i=t(r);if(o===null||i===null)return 0;let l=o.compareDocumentPosition(i);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ye(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var i;let l=(i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?i:document,a=Array.isArray(e)?n?ae(e):e:te(e);o.length>0&&a.length>1&&(a=a.filter(c=>!o.includes(c))),r=r??l.activeElement;let m=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},p=0,v=a.length,f;do{if(p>=v||p+v<=0)return 0;let c=u+p;if(t&16)c=(c+v)%v;else{if(c<0)return 3;if(c>=v)return 1}f=a[c],f==null||f.focus(s),p+=m}while(f!==l.activeElement);return t&6&&ie(f)&&f.select(),2}function h(e,t,n){E.isServer||A(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function le(e,t,n){E.isServer||A(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function be(e,t,n=H(()=>!0)){function r(i,l){if(!n.value||i.defaultPrevented)return;let a=l(i);if(a===null||!a.getRootNode().contains(a))return;let m=function u(s){return typeof s=="function"?u(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let u of m){if(u===null)continue;let s=u instanceof HTMLElement?u:F(u);if(s!=null&&s.contains(a)||i.composed&&i.composedPath().includes(s))return}return!ne(a,j.Loose)&&a.tabIndex!==-1&&i.preventDefault(),t(i,a)}let o=M(null);h("pointerdown",i=>{var l,a;n.value&&(o.value=((a=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:a[0])||i.target)},!0),h("mousedown",i=>{var l,a;n.value&&(o.value=((a=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:a[0])||i.target)},!0),h("click",i=>{o.value&&(r(i,()=>o.value),o.value=null)},!0),h("touchend",i=>r(i,()=>i.target instanceof HTMLElement?i.target:null),!0),le("blur",i=>r(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var ue=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ue||{});let Ee=D({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...o}=e,i={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return q({ourProps:i,theirProps:o,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function se(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ce(){return/Android/gi.test(window.navigator.userAgent)}function Oe(){return se()||ce()}function de(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function fe(){let e=[],t={addEventListener(n,r,o,i){return n.addEventListener(r,o,i),t.add(()=>n.removeEventListener(r,o,i))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return de(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let i=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:i})})},group(n){let r=fe();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}export{he as C,q as H,me as K,C as N,ae as O,ye as P,ge as S,R as T,ue as a,V as b,we as c,fe as d,le as e,Ee as f,E as g,j as h,de as i,Q as j,Z as k,G as l,J as m,Oe as n,F as o,B as p,se as q,U as r,ve as t,b as u,ne as w,be as y};
