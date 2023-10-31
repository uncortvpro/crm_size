import{_ as b,o as a,c as k,n as C,f as w,g as M,i as L,h as A,B as N,S as V,j as p,w as t,l as o,d as n,m as i,b as e,a as l,ad as z}from"./entry.a2f787e0.js";import{_ as H}from"./ButtonPrimary.0150949b.js";import{_ as S,a as I,b as P}from"./Header.91b6f395.js";import{a as T}from"./MenuLink.vue.c5c2ecb9.js";import{_ as U}from"./Base.9606008a.js";import"./nuxt-link.bc5ebee5.js";import"./index.7705a307.js";import"./index.37b4ade9.js";const j={},E={class:"text-[11px] md:text-[15px] lg:text-[20px] py-[9px] font-semibold rounded-[2px] uppercase lg:py-[18px] text-black bg-transparent hover:opacity-hover duration-200 px-[25px] lg:px-[35px] xl:px-[47px]"};function R(m,c){return a(),k("button",E,[C(m.$slots,"default")])}const q=b(j,[["render",R]]),D={class:"flex bg-white flex-col pt-[67px] rounded-b-[3px] text-center mx-[-15px] gap-[26px] relative z-[15] py-4 lg:py-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0"},F={key:0},G={class:"flex bg-white flex-col rounded-b-[3px] text-center mx-[-15px] gap-[26px] relative z-[15] py-4 lg:py-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0"},J=w({__name:"MainHeader",setup(m){const c=M(),_=L(!1),d=A(),r=N(()=>d.isLoggedIn),f=g=>{_.value=g};return V("switchMenu",f),(g,s)=>{const h=q,y=H,v=S,u=T,$=I,B=P;return a(),p(B,null,{"header-items":t(()=>[o(r)?i("",!0):(a(),p(h,{key:0,class:"hidden lg:block",onClick:s[0]||(s[0]=x=>o(c).push("/register")),type:"button"},{default:t(()=>[n(" РЕЄСТРАЦІЯ ")]),_:1})),o(r)?i("",!0):(a(),p(y,{key:1,type:"button",onClick:s[1]||(s[1]=x=>o(c).push("/authorize"))},{default:t(()=>[n(" УВІЙТИ ")]),_:1})),o(r)?(a(),p(y,{key:2,type:"button",onClick:s[2]||(s[2]=x=>o(c).push("/profile"))},{default:t(()=>[n(" Профіль ")]),_:1})):i("",!0),e(v,{class:"self-center ml-[15px] lg:hidden",isActive:o(_),onClick:s[3]||(s[3]=x=>f(!o(_)))},null,8,["isActive"])]),"header-menu-list":t(()=>[e($,{isActive:o(_)},{mobile:t(()=>[l("ul",D,[l("li",null,[e(u,{to:"/"},{default:t(()=>[n("МОЖЛИВОСТІ")]),_:1})]),l("li",null,[e(u,{to:"/"},{default:t(()=>[n("БЛОГ")]),_:1})]),l("li",null,[e(u,{to:"/"},{default:t(()=>[n("КОНТАКТИ")]),_:1})]),o(r)?i("",!0):(a(),k("li",F,[e(h,{class:"lg:hidden !px-[0px]"},{default:t(()=>[n("РЕЄСТРАЦІЯ")]),_:1})]))])]),desktop:t(()=>[l("ul",G,[l("li",null,[e(u,{to:"/"},{default:t(()=>[n("МОЖЛИВОСТІ")]),_:1})]),l("li",null,[e(u,{to:"/"},{default:t(()=>[n("БЛОГ")]),_:1})]),l("li",null,[e(u,{to:"/"},{default:t(()=>[n("КОНТАКТИ")]),_:1})])])]),_:1},8,["isActive"])]),_:1})}}}),K={};function O(m,c){const _=J,d=z,r=U;return a(),p(r,null,{default:t(()=>[e(_),e(d)]),_:1})}const nt=b(K,[["render",O]]);export{nt as default};
