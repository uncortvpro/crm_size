import{u as v,_ as g}from"./useSorting.5d9dbf97.js";import{C,i as n,B as p,A as _,f as h,o as y,j as w,w as S,d as M,n as k}from"./entry.ca0fa042.js";const x=C("clientsStore",()=>{const r=n([]),s=n(1),o=n(""),l=n(1),a=n(""),c=n(!1),u=e=>{v(e,c,a,t)};function f(e){o.value=e,t()}function i(e){if(e===0)return!1;s.value=e,t()}function t(){p(`${_()}/clients`,{body:{page:s.value,per_page:10,keyword:o.value,sort_by:a.value,reverse_sort:c.value}}).then(e=>{r.value=e.clients,l.value=e.total_pages}).catch(e=>{console.error(e)})}function d(e){return console.log(e),p(`${_()}/delete_client`,{body:{client_id:e}}).then(async m=>m.message==="Client deleted successfully"?(await t(),m.message):!1)}return{clients:r,fetchClients:t,deleteClient:d,setPage:i,searchClients:f,page:s,keyWord:o,endPage:l,setSorting:u,sorting:a,reverseSorting:c}}),A=h({__name:"RemoveClient",props:{clientId:{}},emits:["switchModal"],setup(r,{emit:s}){const o=r,l=s,a=x(),c=i=>a.deleteClient(i).then(t=>{t==="Client deleted successfully"&&k("/profile/clients")}),u=i=>{l("switchModal",!1)},f=async()=>{await c(o.clientId),l("switchModal",!1)};return(i,t)=>{const d=g;return y(),w(d,{onCloseModal:t[0]||(t[0]=e=>u()),onConfirm:f},{default:S(()=>[M("Ви впевнені, що хочете видалити клієнта?")]),_:1})}}});export{A as _,x as u};
