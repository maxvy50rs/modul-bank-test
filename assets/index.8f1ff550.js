import{n as g,V as I,W as x,X as O,Y as b,r as m,l as S}from"./index.e593c5a3.js";import{A as p}from"./index.ddbd5591.js";function w(e){return I(e)===!0?"__q_date|"+e.getTime():x(e)===!0?"__q_expr|"+e.source:typeof e=="number"?"__q_numb|"+e:typeof e=="boolean"?"__q_bool|"+(e?"1":"0"):typeof e=="string"?"__q_strn|"+e:typeof e=="function"?"__q_strn|"+e.toString():e===Object(e)?"__q_objt|"+JSON.stringify(e):e}function q(e){if(e.length<9)return e;const c=e.substring(0,8),o=e.substring(9);switch(c){case"__q_date":const u=Number(o);return new Date(Number.isNaN(u)===!0?o:u);case"__q_expr":return new RegExp(o);case"__q_numb":return Number(o);case"__q_bool":return Boolean(o==="1");case"__q_strn":return""+o;case"__q_objt":return JSON.parse(o);default:return e}}function N(){const e=()=>null;return{has:()=>!1,hasItem:()=>!1,getLength:()=>0,getItem:e,getIndex:e,getKey:e,getAll:()=>{},getAllKeys:()=>[],set:g,setItem:g,remove:g,removeItem:g,clear:g,isEmpty:()=>!0}}function E(e){const t=window[e+"Storage"],c=n=>{const s=t.getItem(n);return s?q(s):null},o=n=>t.getItem(n)!==null,u=(n,s)=>{t.setItem(n,w(s))},a=n=>{t.removeItem(n)};return{has:o,hasItem:o,getLength:()=>t.length,getItem:c,getIndex:n=>n<t.length?c(t.key(n)):null,getKey:n=>n<t.length?t.key(n):null,getAll:()=>{let n;const s={},l=t.length;for(let d=0;d<l;d++)n=t.key(d),s[n]=c(n);return s},getAllKeys:()=>{const n=[],s=t.length;for(let l=0;l<s;l++)n.push(t.key(l));return n},set:u,setItem:u,remove:a,removeItem:a,clear:()=>{t.clear()},isEmpty:()=>t.length===0}}const h=O.has.webStorage===!1?N():E("local"),_={install({$q:e}){e.localStorage=h}};Object.assign(_,h);const D=b("tabsStore",()=>{const e=[{name:"/orders",label:"Orders",closable:!1},{name:"/meetings",label:"Meetings",closable:!1}],t=m(_.getItem("tabs")||e);S(t,(a,n)=>{_.setItem("tabs",n)},{deep:!0});function c(a){return t.value.findIndex(s=>s.name===a)>-1}function o(a){c(a.name)||t.value.push(a)}function u(a){const n=t.value.findIndex(s=>s.name===a);t.value.splice(n,1)}return{tabs:t,addNewTab:o,removeTabByName:u}}),T=b("orderStore",()=>{const e=m([]),t=m(new Map);function c(r){e.value=[...r]}function o(r){t.value.set(r.id,r)}function u(r){e.value.push(r),t.value.set(r.id,r)}function a(r){const i=e.value.findIndex(f=>f.id===r);i!==-1&&e.value.splice(i,1)}async function n(){try{const{status:r,data:i}=await p.orders.getOrders();r===200&&c(i)}catch{}return null}async function s(r){try{if(t.value.get(r))return null;const{status:i,data:f}=await p.orders.getOrderById(r);i===200&&o(f)}catch{}return null}async function l(r){u(r)}async function d(r){const i=e.value.findIndex(f=>f.id===r.id);i!==-1&&(e.value.splice(i,1,r),t.value.set(r.id,r))}async function y(r){a(r)}return{orders:e,orderDetailsMap:t,dispatchGetOrders:n,dispatchGetOrderById:s,dispatchCreateNewOrder:l,dispatchUpdateOrder:d,dispatchDeleteOrder:y}});export{T as a,D as u};
