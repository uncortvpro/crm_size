import{u as _}from"./useSorting.9414d803.js";import{C as P,i as o,B as c,A as u}from"./entry.2c4ac607.js";const A=P("ordersStore",()=>{const d=o([]),s=o(1),l=o(""),i=o(1),t=o([]),f=o("");function v(e){f.value=e,y()}const n=o(""),a=o(!1),g=e=>{_(e,a,n,r)};function p(e){if(e===0)return!1;s.value=e,r()}function h(e){console.log(e),c(`${u()}/delete_order`,{body:{order_id:e}}).then(S=>{S.message===!0&&r()})}function m(e){l.value=e,r()}function r(){c(`${u()}/orders`,{body:{page:s.value,per_page:10,keyword:l.value,sort_by:n.value,reverse_sort:a.value}}).then(e=>{console.log(e),d.value=e.orders,i.value=e.total_pages}).catch(e=>{console.error(e)})}async function y(){const e=await c(`${u()}/variations`,{body:{name:f.value}});t.value=e.variations,console.log(t.value)}return{fetchOrders:r,addingProducts:t,searchProducts:v,orders:d,searchOrders:m,setPage:p,deleteOrder:h,page:s,endPage:i,sorting:n,reverseSorting:a,setSorting:g}});export{A as u};
