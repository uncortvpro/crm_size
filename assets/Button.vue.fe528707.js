import{b as _,A as w,B as y,g as h,a7 as b,n as g,u as O,k as S,F as l,G as j,H as k,a2 as p,Q as C}from"./swiper-vue.c2b88c58.js";import{_ as T}from"./nuxt-link.8b951553.js";function W(t){return w()?(y(t),!0):!1}function f(t){return typeof t=="function"?t():O(t)}const B=typeof window<"u"&&typeof document<"u",D=Object.prototype.toString,$=t=>D.call(t)==="[object Object]",d=()=>{},E=P();function P(){var t;return B&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function v(t,e){function o(...n){return new Promise((s,r)=>{Promise.resolve(t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(s).catch(r)})}return o}function x(t,e={}){let o,n,s=d;const r=i=>{clearTimeout(i),s(),s=d};return i=>{const c=f(t),a=f(e.maxWait);return o&&r(o),c<=0||a!==void 0&&a<=0?(n&&(r(n),n=null),Promise.resolve(i())):new Promise((u,m)=>{s=e.rejectOnCancel?m:u,a&&!n&&(n=setTimeout(()=>{o&&r(o),n=null,u(i())},a)),o=setTimeout(()=>{n&&r(n),n=null,u(i())},c)})}}function G(t,e=200,o={}){return v(x(e,o),t)}function H(t,e=!0){h()?b(t):e?t():g(t)}function L(t,e,o){return _(t,e,{...o,deep:!0})}const A=["type"],Q=S({__name:"Button",props:{to:{},type:{}},setup(t){return(e,o)=>{const n=T;return e.to?(l(),j(n,{key:0,to:e.to},{default:k(()=>[p(e.$slots,"default")]),_:3},8,["to"])):(l(),C("button",{key:1,type:e.type||"button"},[p(e.$slots,"default")],8,A))}}});export{Q as _,H as a,f as b,B as c,$ as d,E as i,d as n,W as t,G as u,L as w};
