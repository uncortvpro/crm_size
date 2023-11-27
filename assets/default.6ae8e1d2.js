import{_ as b,a as B,b as M,j as w}from"./entry.cc5e7feb.js";import{F as a,Q as k,_ as L,k as A,a as N,l as V,p as H,G as c,H as t,u as o,V as n,Z as i,I as e,R as l}from"./swiper-vue.76d67008.js";import{_ as z}from"./ButtonPrimary.e8510215.js";import{_ as I,a as P,b as R}from"./Header.bcfcbe5a.js";import{_ as S}from"./MenuLink.vue.03e27874.js";import{_ as T}from"./Base.0bce25b1.js";import"./Logo.beee2da7.js";import"./nuxt-link.8e638fd7.js";import"./index.ee4f7712.js";import"./index.d04bfb4b.js";const U={},j={class:"text-[11px] md:text-[15px] lg:text-[20px] py-[9px] font-semibold rounded-[2px] uppercase lg:py-[18px] text-black bg-transparent hover:opacity-hover duration-200 px-[25px] lg:px-[35px] xl:px-[47px]"};function E(m,u){return a(),k("button",j,[L(m.$slots,"default")])}const F=b(U,[["render",E]]),G={class:"flex bg-white flex-col pt-[67px] rounded-b-[3px] text-center mx-[-15px] gap-[26px] relative z-[15] py-4 lg:py-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0"},Q={key:0},Z={class:"flex bg-white flex-col rounded-b-[3px] text-center mx-[-15px] gap-[26px] relative z-[15] py-4 lg:py-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0"},q=A({__name:"MainHeader",setup(m){const u=B(),_=N(!1),d=M(),r=V(()=>d.isLoggedIn),f=g=>{_.value=g};return H("switchMenu",f),(g,s)=>{const y=F,h=z,v=I,p=S,$=P,C=R;return a(),c(C,null,{"header-items":t(()=>[o(r)?i("",!0):(a(),c(y,{key:0,class:"hidden lg:block",onClick:s[0]||(s[0]=x=>o(u).push("/register")),type:"button"},{default:t(()=>[n(" РЕЄСТРАЦІЯ ")]),_:1})),o(r)?i("",!0):(a(),c(h,{key:1,type:"button",onClick:s[1]||(s[1]=x=>o(u).push("/authorize"))},{default:t(()=>[n(" УВІЙТИ ")]),_:1})),o(r)?(a(),c(h,{key:2,type:"button",onClick:s[2]||(s[2]=x=>o(u).push("/profile"))},{default:t(()=>[n(" Профіль ")]),_:1})):i("",!0),e(v,{class:"self-center ml-[15px] lg:hidden",isActive:o(_),onClick:s[3]||(s[3]=x=>f(!o(_)))},null,8,["isActive"])]),"header-menu-list":t(()=>[e($,{isActive:o(_)},{mobile:t(()=>[l("ul",G,[l("li",null,[e(p,{to:"/"},{default:t(()=>[n("МОЖЛИВОСТІ")]),_:1})]),l("li",null,[e(p,{to:"/"},{default:t(()=>[n("БЛОГ")]),_:1})]),l("li",null,[e(p,{to:"/"},{default:t(()=>[n("КОНТАКТИ")]),_:1})]),o(r)?i("",!0):(a(),k("li",Q,[e(y,{class:"lg:hidden !px-[0px]"},{default:t(()=>[n("РЕЄСТРАЦІЯ")]),_:1})]))])]),desktop:t(()=>[l("ul",Z,[l("li",null,[e(p,{to:"/"},{default:t(()=>[n("МОЖЛИВОСТІ")]),_:1})]),l("li",null,[e(p,{to:"/"},{default:t(()=>[n("БЛОГ")]),_:1})]),l("li",null,[e(p,{to:"/"},{default:t(()=>[n("КОНТАКТИ")]),_:1})])])]),_:1},8,["isActive"])]),_:1})}}}),D={};function J(m,u){const _=q,d=w,r=T;return a(),c(r,null,{default:t(()=>[e(_),e(d)]),_:1})}const lt=b(D,[["render",J]]);export{lt as default};
