import{u as _}from"./useSorting.9414d803.js";import{g as P,f as c,e as u}from"./entry.cc5e7feb.js";import{a as o}from"./swiper-vue.76d67008.js";const k=P("ordersStore",()=>{const d=o([]),t=o(1),l=o(""),i=o(1),s=o([]),f=o("");function v(e){f.value=e,y()}const n=o(""),a=o(!1),g=e=>{_(e,a,n,r)};function p(e){if(e===0)return!1;t.value=e,r()}function h(e){console.log(e),c(`${u()}/delete_order`,{body:{order_id:e}}).then(S=>{S.message===!0&&r()})}function m(e){l.value=e,r()}function r(){c(`${u()}/orders`,{body:{page:t.value,per_page:10,keyword:l.value,sort_by:n.value,reverse_sort:a.value}}).then(e=>{console.log(e),d.value=e.orders,i.value=e.total_pages}).catch(e=>{console.error(e)})}async function y(){const e=await c(`${u()}/variations`,{body:{name:f.value}});s.value=e.variations,console.log(s.value)}return{fetchOrders:r,addingProducts:s,searchProducts:v,orders:d,searchOrders:m,setPage:p,deleteOrder:h,page:t,endPage:i,sorting:n,reverseSorting:a,setSorting:g}});export{k as u};
