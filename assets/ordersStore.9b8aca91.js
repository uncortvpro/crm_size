import{u as _}from"./useSorting.9908e62e.js";import{g as P,f as a,e as u}from"./entry.a7db78e0.js";import{a as r}from"./swiper-vue.6e4b9487.js";const $=P("ordersStore",()=>{const c=r([]),t=r(1),d=r(""),i=r(1),f=r([]),l=r("");function p(e){l.value=e,y()}const s=r(""),n=r(!1),v=e=>{_(e,n,s,o)};function g(e){if(e===0)return!1;t.value=e,o()}function h(e){a(`${u()}/delete_order`,{body:{order_id:e}}).then(S=>{S.message===!0&&o()})}function m(e){d.value=e,o()}function o(){a(`${u()}/orders`,{body:{page:t.value,per_page:10,keyword:d.value,sort_by:s.value,reverse_sort:n.value}}).then(e=>{c.value=e.orders,i.value=e.total_pages}).catch(e=>{console.error(e)})}async function y(){const e=await a(`${u()}/products`,{body:{keyword:l.value}});f.value=e.products}return{fetchOrders:o,addingProducts:f,searchProducts:p,orders:c,searchOrders:m,setPage:g,deleteOrder:h,page:t,endPage:i,sorting:s,reverseSorting:n,setSorting:v}});export{$ as u};
