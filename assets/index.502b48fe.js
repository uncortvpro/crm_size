import{i as W,n as w,t as b,a as N,b as g,c as P,d as z}from"./index.1876d4a2.js";import{l as I,b as A,a as h,w as M,f as _,s as k,g as T,a7 as C}from"./swiper-vue.7d7207a4.js";function V(n,s,r){let t;_(r)?t={evaluating:r}:t=r||{};const{lazy:i=!1,evaluating:o=void 0,shallow:u=!0,onError:c=w}=t,d=h(!i),m=u?k(s):h(s);let l=0;return M(async p=>{if(!d.value)return;l++;const e=l;let a=!1;o&&Promise.resolve().then(()=>{o.value=!0});try{const f=await n(S=>{p(()=>{o&&(o.value=!1),a||S()})});e===l&&(m.value=f)}catch(f){c(f)}finally{o&&e===l&&(o.value=!1),a=!0}}),i?I(()=>(d.value=!0,m.value)):m}function v(n){var s;const r=g(n);return(s=r==null?void 0:r.$el)!=null?s:r}const y=P?window:void 0;function E(...n){let s,r,t,i;if(typeof n[0]=="string"||Array.isArray(n[0])?([r,t,i]=n,s=y):[s,r,t,i]=n,!s)return w;Array.isArray(r)||(r=[r]),Array.isArray(t)||(t=[t]);const o=[],u=()=>{o.forEach(l=>l()),o.length=0},c=(l,p,e,a)=>(l.addEventListener(p,e,a),()=>l.removeEventListener(p,e,a)),d=A(()=>[v(s),g(i)],([l,p])=>{if(u(),!l)return;const e=z(p)?{...p}:p;o.push(...r.flatMap(a=>t.map(f=>c(l,a,f,e))))},{immediate:!0,flush:"post"}),m=()=>{d(),u()};return b(m),m}let L=!1;function Q(n,s,r={}){const{window:t=y,ignore:i=[],capture:o=!0,detectIframe:u=!1}=r;if(!t)return;W&&!L&&(L=!0,Array.from(t.document.body.children).forEach(e=>e.addEventListener("click",w)),t.document.documentElement.addEventListener("click",w));let c=!0;const d=e=>i.some(a=>{if(typeof a=="string")return Array.from(t.document.querySelectorAll(a)).some(f=>f===e.target||e.composedPath().includes(f));{const f=v(a);return f&&(e.target===f||e.composedPath().includes(f))}}),l=[E(t,"click",e=>{const a=v(n);if(!(!a||a===e.target||e.composedPath().includes(a))){if(e.detail===0&&(c=!d(e)),!c){c=!0;return}s(e)}},{passive:!0,capture:o}),E(t,"pointerdown",e=>{const a=v(n);a&&(c=!e.composedPath().includes(a)&&!d(e))},{passive:!0}),u&&E(t,"blur",e=>{setTimeout(()=>{var a;const f=v(n);((a=t.document.activeElement)==null?void 0:a.tagName)==="IFRAME"&&!(f!=null&&f.contains(t.document.activeElement))&&s(e)},0)})].filter(Boolean);return()=>l.forEach(e=>e())}function F(){const n=h(!1);return T()&&C(()=>{n.value=!0}),n}function O(n){const s=F();return I(()=>(s.value,!!n()))}function R(n,s={}){const{window:r=y}=s,t=O(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let i;const o=h(!1),u=m=>{o.value=m.matches},c=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",u):i.removeListener(u))},d=M(()=>{t.value&&(c(),i=r.matchMedia(g(n)),"addEventListener"in i?i.addEventListener("change",u):i.addListener(u),o.value=i.matches)});return b(()=>{d(),c(),i=void 0}),o}function Y(n,s,r={}){const{window:t=y,...i}=r;let o;const u=O(()=>t&&"ResizeObserver"in t),c=()=>{o&&(o.disconnect(),o=void 0)},d=I(()=>Array.isArray(n)?n.map(p=>v(p)):[v(n)]),m=A(d,p=>{if(c(),u.value&&t){o=new ResizeObserver(s);for(const e of p)e&&o.observe(e,i)}},{immediate:!0,flush:"post",deep:!0}),l=()=>{c(),m()};return b(l),{isSupported:u,stop:l}}function j(n={}){const{window:s=y,initialWidth:r=Number.POSITIVE_INFINITY,initialHeight:t=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:o=!0}=n,u=h(r),c=h(t),d=()=>{s&&(o?(u.value=s.innerWidth,c.value=s.innerHeight):(u.value=s.document.documentElement.clientWidth,c.value=s.document.documentElement.clientHeight))};if(d(),N(d),E("resize",d,{passive:!0}),i){const m=R("(orientation: portrait)");A(m,()=>d())}return{width:u,height:c}}export{v as a,j as b,V as c,Q as o,Y as u};
