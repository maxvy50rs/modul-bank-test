import{R as Je,Q as ne,h as _e,u as Ye,a as Ze,b as Pe,c as Se}from"./QBtn.1bbc7c36.js";import{i as $e,e as N,t as ze,r as q,c as g,o as U,a as W,w as et,h as T,s as qe,d as tt,f as nt,g as j,j as ot,k as V,l as D,m as Be,n as pe,p as Re,q as ce,u as fe,v as at,x as lt,y as Ie,z as rt,A as Z,B as it,_ as st,C as ut,D as ct,E as K,F as ee,G as te,H as ie,I as dt,J as ft,K as vt,L as ht,M as bt}from"./index.e593c5a3.js";import{u as gt,a as se,b as Le,r as mt,s as yt,g as wt,c as Tt,d as Ct,e as ue}from"./index.ddbd5591.js";import{u as St,a as qt}from"./index.8f1ff550.js";import"./axios.0ed95acd.js";let Rt=0;const Lt=["click","keydown"],kt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Rt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function xt(e,R,l,n){const o=$e(ze,N);if(o===N)return console.error("QTab/QRouteTab component needs to be child of QTabs"),N;const{proxy:v}=j(),y=q(null),b=q(null),d=q(null),u=g(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),L=g(()=>o.currentModel.value===e.name),z=g(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(L.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(n!==void 0?n.linkClass.value:"")),P=g(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),m=g(()=>e.disable===!0||o.hasFocus.value===!0||L.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function x(s,r){if(r!==!0&&y.value!==null&&y.value.focus(),e.disable===!0){n!==void 0&&n.hasRouterLink.value===!0&&qe(s);return}if(n===void 0){o.updateModel({name:e.name}),l("click",s);return}if(n.hasRouterLink.value===!0){const f=(w={})=>{let k;const $=w.to===void 0||ot(w.to,e.to)===!0?o.avoidRouteWatcher=gt():null;return n.navigateToRouterLink(s,{...w,returnRouterError:!0}).catch(B=>{k=B}).then(B=>{if($===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,k===void 0&&(B===void 0||B.message!==void 0&&B.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),w.returnRouterError===!0)return k!==void 0?Promise.reject(k):B})};l("click",s,f),s.defaultPrevented!==!0&&f();return}l("click",s)}function p(s){tt(s,[13,32])?x(s,!0):nt(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&o.onKbdNavigate(s.keyCode,v.$el)===!0&&qe(s),l("keydown",s)}function H(){const s=o.tabProps.value.narrowIndicator,r=[],f=T("div",{ref:d,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&r.push(T(ne,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&r.push(T("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&r.push(e.alertIcon!==void 0?T(ne,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):T("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&r.push(f);const w=[T("div",{class:"q-focus-helper",tabindex:-1,ref:y}),T("div",{class:P.value},_e(R.default,r))];return s===!1&&w.push(f),w}const I={name:g(()=>e.name),rootRef:b,tabIndicatorRef:d,routeData:n};U(()=>{o.unregisterTab(I)}),W(()=>{o.registerTab(I)});function A(s,r){const f={ref:b,class:z.value,tabindex:m.value,role:"tab","aria-selected":L.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:x,onKeydown:p,...r};return et(T(s,f,H()),[[Je,u.value]])}return{renderTab:A,$tabs:o}}var _t=V({name:"QRouteTab",props:{...Ye,...kt},emits:Lt,setup(e,{slots:R,emit:l}){const n=Ze({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:v}=xt(e,R,l,{exact:g(()=>e.exact),...n});return D(()=>`${e.name} | ${e.exact} | ${(n.resolvedLink.value||{}).href}`,()=>{v.verifyRouteModel()}),()=>o(n.linkTag.value,n.linkAttrs.value)}});function Pt(){const e=q(!Be.value);return e.value===!1&&W(()=>{e.value=!0}),{isHydrated:e}}const Ae=typeof ResizeObserver!="undefined",ke=Ae===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var de=V({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:R}){let l=null,n,o={width:-1,height:-1};function v(d){d===!0||e.debounce===0||e.debounce==="0"?y():l===null&&(l=setTimeout(y,e.debounce))}function y(){if(l!==null&&(clearTimeout(l),l=null),n){const{offsetWidth:d,offsetHeight:u}=n;(d!==o.width||u!==o.height)&&(o={width:d,height:u},R("resize",o))}}const{proxy:b}=j();if(b.trigger=v,Ae===!0){let d;const u=L=>{n=b.$el.parentNode,n?(d=new ResizeObserver(v),d.observe(n),y()):L!==!0&&Re(()=>{u(!0)})};return W(()=>{u()}),U(()=>{l!==null&&clearTimeout(l),d!==void 0&&(d.disconnect!==void 0?d.disconnect():n&&d.unobserve(n))}),pe}else{let L=function(){l!==null&&(clearTimeout(l),l=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",v,ce.passive),u=void 0)},z=function(){L(),n&&n.contentDocument&&(u=n.contentDocument.defaultView,u.addEventListener("resize",v,ce.passive),y())};const{isHydrated:d}=Pt();let u;return W(()=>{Re(()=>{n=b.$el,n&&z()})}),U(L),()=>{if(d.value===!0)return T("object",{class:"q--avoid-card-border",style:ke.style,tabindex:-1,type:"text/html",data:ke.url,"aria-hidden":"true",onLoad:z})}}}});function $t(e,R,l){const n=l===!0?["left","right"]:["top","bottom"];return`absolute-${R===!0?n[0]:n[1]}${e?` text-${e}`:""}`}const zt=["left","center","right","justify"];var Bt=V({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>zt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:R,emit:l}){const{proxy:n}=j(),{$q:o}=n,{registerTick:v}=se(),{registerTick:y}=se(),{registerTick:b}=se(),{registerTimeout:d,removeTimeout:u}=Le(),{registerTimeout:L,removeTimeout:z}=Le(),P=q(null),m=q(null),x=q(e.modelValue),p=q(!1),H=q(!0),I=q(!1),A=q(!1),s=[],r=q(0),f=q(!1);let w=null,k=null,$;const B=g(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:$t(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Me=g(()=>{const t=r.value,a=x.value;for(let i=0;i<t;i++)if(s[i].name.value===a)return!0;return!1}),Ee=g(()=>`q-tabs__content--align-${p.value===!0?"left":A.value===!0?"justify":e.align}`),Qe=g(()=>`q-tabs row no-wrap items-center q-tabs--${p.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),De=g(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ee.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),G=g(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),X=g(()=>e.vertical!==!0&&o.lang.rtl===!0),oe=g(()=>mt===!1&&X.value===!0);D(X,F),D(()=>e.modelValue,t=>{ae({name:t,setCurrent:!0,skipEmit:!0})}),D(()=>e.outsideArrows,J);function ae({name:t,setCurrent:a,skipEmit:i}){x.value!==t&&(i!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(He(x.value,t),x.value=t))}function J(){v(()=>{ve({width:P.value.offsetWidth,height:P.value.offsetHeight})})}function ve(t){if(G.value===void 0||m.value===null)return;const a=t[G.value.container],i=Math.min(m.value[G.value.scroll],Array.prototype.reduce.call(m.value.children,(S,h)=>S+(h[G.value.content]||0),0)),C=a>0&&i>a;p.value=C,C===!0&&y(F),A.value=a<parseInt(e.breakpoint,10)}function He(t,a){const i=t!=null&&t!==""?s.find(S=>S.name.value===t):null,C=a!=null&&a!==""?s.find(S=>S.name.value===a):null;if(i&&C){const S=i.tabIndicatorRef.value,h=C.tabIndicatorRef.value;w!==null&&(clearTimeout(w),w=null),S.style.transition="none",S.style.transform="none",h.style.transition="none",h.style.transform="none";const c=S.getBoundingClientRect(),_=h.getBoundingClientRect();h.style.transform=e.vertical===!0?`translate3d(0,${c.top-_.top}px,0) scale3d(1,${_.height?c.height/_.height:1},1)`:`translate3d(${c.left-_.left}px,0,0) scale3d(${_.width?c.width/_.width:1},1,1)`,b(()=>{w=setTimeout(()=>{w=null,h.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",h.style.transform="none"},70)})}C&&p.value===!0&&O(C.rootRef.value)}function O(t){const{left:a,width:i,top:C,height:S}=m.value.getBoundingClientRect(),h=t.getBoundingClientRect();let c=e.vertical===!0?h.top-C:h.left-a;if(c<0){m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(c),F();return}c+=e.vertical===!0?h.height-S:h.width-i,c>0&&(m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(c),F())}function F(){const t=m.value;if(t===null)return;const a=t.getBoundingClientRect(),i=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);X.value===!0?(H.value=Math.ceil(i+a.width)<t.scrollWidth-1,I.value=i>0):(H.value=i>0,I.value=e.vertical===!0?Math.ceil(i+a.height)<t.scrollHeight:Math.ceil(i+a.width)<t.scrollWidth)}function he(t){k!==null&&clearInterval(k),k=setInterval(()=>{Ne(t)===!0&&E()},5)}function be(){he(oe.value===!0?Number.MAX_SAFE_INTEGER:0)}function ge(){he(oe.value===!0?0:Number.MAX_SAFE_INTEGER)}function E(){k!==null&&(clearInterval(k),k=null)}function Oe(t,a){const i=Array.prototype.filter.call(m.value.children,_=>_===a||_.matches&&_.matches(".q-tab.q-focusable")===!0),C=i.length;if(C===0)return;if(t===36)return O(i[0]),i[0].focus(),!0;if(t===35)return O(i[C-1]),i[C-1].focus(),!0;const S=t===(e.vertical===!0?38:37),h=t===(e.vertical===!0?40:39),c=S===!0?-1:h===!0?1:void 0;if(c!==void 0){const _=X.value===!0?-1:1,M=i.indexOf(a)+c*_;return M>=0&&M<C&&(O(i[M]),i[M].focus({preventScroll:!0})),!0}}const Fe=g(()=>oe.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Ne(t){const a=m.value,{get:i,set:C}=Fe.value;let S=!1,h=i(a);const c=t<h?-1:1;return h+=c*5,h<0?(S=!0,h=0):(c===-1&&h<=t||c===1&&h>=t)&&(S=!0,h=t),C(a,h),F(),S}function me(t,a){for(const i in t)if(t[i]!==a[i])return!1;return!0}function We(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const i=s.filter(c=>c.routeData!==void 0&&c.routeData.hasRouterLink.value===!0),{hash:C,query:S}=n.$route,h=Object.keys(S).length;for(const c of i){const _=c.routeData.exact.value===!0;if(c.routeData[_===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:M,query:le,matched:Ge,href:Xe}=c.routeData.resolvedLink.value,re=Object.keys(le).length;if(_===!0){if(M!==C||re!==h||me(S,le)===!1)continue;t=c.name.value;break}if(M!==""&&M!==C||re!==0&&me(le,S)===!1)continue;const Q={matchedLen:Ge.length,queryDiff:h-re,hrefLen:Xe.length-M.length};if(Q.matchedLen>a.matchedLen){t=c.name.value,a=Q;continue}else if(Q.matchedLen!==a.matchedLen)continue;if(Q.queryDiff<a.queryDiff)t=c.name.value,a=Q;else if(Q.queryDiff!==a.queryDiff)continue;Q.hrefLen>a.hrefLen&&(t=c.name.value,a=Q)}t===null&&s.some(c=>c.routeData===void 0&&c.name.value===x.value)===!0||ae({name:t,setCurrent:!0})}function je(t){if(u(),f.value!==!0&&P.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&P.value.contains(a)===!0&&(f.value=!0,p.value===!0&&O(a))}}function Ve(){d(()=>{f.value=!1},30)}function Y(){we.avoidRouteWatcher===!1?L(We):z()}function ye(){if($===void 0){const t=D(()=>n.$route.fullPath,Y);$=()=>{t(),$=void 0}}}function Ke(t){s.push(t),r.value++,J(),t.routeData===void 0||n.$route===void 0?L(()=>{if(p.value===!0){const a=x.value,i=a!=null&&a!==""?s.find(C=>C.name.value===a):null;i&&O(i.rootRef.value)}}):(ye(),t.routeData.hasRouterLink.value===!0&&Y())}function Ue(t){s.splice(s.indexOf(t),1),r.value--,J(),$!==void 0&&t.routeData!==void 0&&(s.every(a=>a.routeData===void 0)===!0&&$(),Y())}const we={currentModel:x,tabProps:B,hasFocus:f,hasActiveTab:Me,registerTab:Ke,unregisterTab:Ue,verifyRouteModel:Y,updateModel:ae,onKbdNavigate:Oe,avoidRouteWatcher:!1};fe(ze,we);function Te(){w!==null&&clearTimeout(w),E(),$!==void 0&&$()}let Ce;return U(Te),at(()=>{Ce=$!==void 0,Te()}),lt(()=>{Ce===!0&&ye(),J()}),()=>T("div",{ref:P,class:Qe.value,role:"tablist",onFocusin:je,onFocusout:Ve},[T(de,{onResize:ve}),T("div",{ref:m,class:De.value,onScroll:F},Pe(R.default)),T(ne,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(H.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:be,onTouchstartPassive:be,onMouseupPassive:E,onMouseleavePassive:E,onTouchendPassive:E}),T(ne,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ge,onTouchstartPassive:ge,onMouseupPassive:E,onMouseleavePassive:E,onTouchendPassive:E})])}}),pt=V({name:"QPageContainer",setup(e,{slots:R}){const{proxy:{$q:l}}=j(),n=$e(Ie,N);if(n===N)return console.error("QPageContainer needs to be child of QLayout"),N;fe(rt,!0);const o=g(()=>{const v={};return n.header.space===!0&&(v.paddingTop=`${n.header.size}px`),n.right.space===!0&&(v[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(v.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(v[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),v});return()=>T("div",{class:"q-page-container",style:o.value},Pe(R.default))}});const{passive:xe}=ce,It=["both","horizontal","vertical"];var At=V({name:"QScrollObserver",props:{axis:{type:String,validator:e=>It.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:yt},emits:["scroll"],setup(e,{emit:R}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,o,v;D(()=>e.scrollTarget,()=>{d(),b()});function y(){n!==null&&n();const z=Math.max(0,Tt(o)),P=Ct(o),m={top:z-l.position.top,left:P-l.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const x=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";l.position={top:z,left:P},l.directionChanged=l.direction!==x,l.delta=m,l.directionChanged===!0&&(l.direction=x,l.inflectionPoint=l.position),R("scroll",{...l})}function b(){o=wt(v,e.scrollTarget),o.addEventListener("scroll",u,xe),u(!0)}function d(){o!==void 0&&(o.removeEventListener("scroll",u,xe),o=void 0)}function u(z){if(z===!0||e.debounce===0||e.debounce==="0")y();else if(n===null){const[P,m]=e.debounce?[setTimeout(y,e.debounce),clearTimeout]:[requestAnimationFrame(y),cancelAnimationFrame];n=()=>{m(P),n=null}}}const{proxy:L}=j();return D(()=>L.$q.lang.rtl,y),W(()=>{v=L.$el.parentNode,b()}),U(()=>{n!==null&&n(),d()}),Object.assign(L,{trigger:u,getPosition:()=>l}),pe}}),Mt=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:R,emit:l}){const{proxy:{$q:n}}=j(),o=q(null),v=q(n.screen.height),y=q(e.container===!0?0:n.screen.width),b=q({position:0,direction:"down",inflectionPoint:0}),d=q(0),u=q(Be.value===!0?0:ue()),L=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=g(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),P=g(()=>u.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),m=g(()=>u.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function x(r){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};b.value=f,e.onScroll!==void 0&&l("scroll",f)}}function p(r){const{height:f,width:w}=r;let k=!1;v.value!==f&&(k=!0,v.value=f,e.onScrollHeight!==void 0&&l("scrollHeight",f),I()),y.value!==w&&(k=!0,y.value=w),k===!0&&e.onResize!==void 0&&l("resize",r)}function H({height:r}){d.value!==r&&(d.value=r,I())}function I(){if(e.container===!0){const r=v.value>d.value?ue():0;u.value!==r&&(u.value=r)}}let A=null;const s={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:o,height:v,containerHeight:d,scrollbarWidth:u,totalWidth:g(()=>y.value+u.value),rows:g(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:b,animate(){A!==null?clearTimeout(A):document.body.classList.add("q-body--layout-animate"),A=setTimeout(()=>{A=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,f,w){s[r][f]=w}};if(fe(Ie,s),ue()>0){let w=function(){r=null,f.classList.remove("hide-scrollbar")},k=function(){if(r===null){if(f.scrollHeight>n.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(w,300)},$=function(B){r!==null&&B==="remove"&&(clearTimeout(r),w()),window[`${B}EventListener`]("resize",k)},r=null;const f=document.body;D(()=>e.container!==!0?"add":"remove",$),e.container!==!0&&$("add"),it(()=>{$("remove")})}return()=>{const r=_e(R.default,[T(At,{onScroll:x}),T(de,{onResize:p})]),f=T("div",{class:L.value,style:z.value,ref:e.container===!0?void 0:o,tabindex:-1},r);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:o},[T(de,{onResize:H}),T("div",{class:"absolute-full",style:P.value},[T("div",{class:"scroll",style:m.value},[f])])]):f}}});const Et={setup(){const{tabs:e,removeTabByName:R,addNewTab:l}=St(),{dispatchGetOrders:n}=qt(),o=ut();W(n);function v(b){o.currentRoute.value.fullPath===b&&o.push("/orders"),R(b)}function y(){const b="/orders/new";l({name:b,label:"New order",closable:!0}),o.push(b)}return{tabs:e,router:o,closeTab:v,onNewOrderClick:y}}};function Qt(e,R,l,n,o,v){const y=ct("router-view");return K(),ee(Mt,{view:"hhh LpR lfr"},{default:te(()=>[ie(Bt,{dense:"",align:"left",class:"bg-indigo text-grey-2 row justify-start","inline-label":"","active-color":"white"},{default:te(()=>[(K(!0),dt(vt,null,ft(n.tabs,(b,d)=>(K(),ee(_t,{key:d,name:b.name,to:`${b.name}`,label:b.label,exact:"",replace:""},{default:te(()=>[b.closable?(K(),ee(Se,{key:0,icon:"close",flat:"",round:"",size:"0.5rem",onClick:ht(u=>n.closeTab(b.name),["prevent"]),class:"q-ml-md"},null,8,["onClick"])):bt("",!0)]),_:2},1032,["name","to","label"]))),128)),ie(Se,{class:"self-right bg-grey-2 text-indigo q-ma-sm q-ml-auto",flat:"",onClick:n.onNewOrderClick,label:"Create order"},null,8,["onClick"])]),_:1}),ie(pt,{style:{"max-width":"1280px",margin:"auto","margin-top":"2rem"}},{default:te(()=>[(K(),ee(y,{key:e.$route.fullPath}))]),_:1})]),_:1})}var Wt=st(Et,[["render",Qt]]);export{Wt as default};
