import{R as Je,Q as ee,h as xe,a as Ye,b as Ce}from"./QBtn.b72122a2.js";import{i as Ze,e as oe,t as ke,r as S,c as g,o as W,a as N,w as et,h as _,s as Se,d as tt,f as nt,g as j,j as at,k as K,l as $e,n as Ie,m as _e,p as ue,q as H,u as ze,v as lt,x as ot,y as Y,z as it,A as rt,_ as Be,B as V,C as Me,D as ce,E as Z,F as ie,G as qe,H as st,I as ut,J as ct,K as dt,L as ft}from"./index.d798e3b6.js";import{u as vt,a as re,b as Le,r as bt,s as ht,g as mt,c as gt,d as Tt,e as se,Q as wt,O as yt}from"./OrdersPage.e6c3750d.js";import"./axios.0ed95acd.js";let Ct=0;const St=["click","keydown"],_t={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ct++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function qt(e,h,o,n){const l=Ze(ke,oe);if(l===oe)return console.error("QTab/QRouteTab component needs to be child of QTabs"),oe;const{proxy:q}=j(),r=S(null),T=S(null),f=S(null),c=g(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),L=g(()=>l.currentModel.value===e.name),I=g(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(L.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(n!==void 0?n.linkClass.value:"")),k=g(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),m=g(()=>e.disable===!0||l.hasFocus.value===!0||L.value===!1&&l.hasActiveTab.value===!0?-1:e.tabindex||0);function R(u,i){if(i!==!0&&r.value!==null&&r.value.focus(),e.disable===!0){n!==void 0&&n.hasRouterLink.value===!0&&Se(u);return}if(n===void 0){l.updateModel({name:e.name}),o("click",u);return}if(n.hasRouterLink.value===!0){const v=(w={})=>{let P;const $=w.to===void 0||at(w.to,e.to)===!0?l.avoidRouteWatcher=vt():null;return n.navigateToRouterLink(u,{...w,returnRouterError:!0}).catch(z=>{P=z}).then(z=>{if($===l.avoidRouteWatcher&&(l.avoidRouteWatcher=!1,P===void 0&&(z===void 0||z.message!==void 0&&z.message.startsWith("Avoided redundant navigation")===!0)&&l.updateModel({name:e.name})),w.returnRouterError===!0)return P!==void 0?Promise.reject(P):z})};o("click",u,v),u.defaultPrevented!==!0&&v();return}o("click",u)}function B(u){tt(u,[13,32])?R(u,!0):nt(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&l.onKbdNavigate(u.keyCode,q.$el)===!0&&Se(u),o("keydown",u)}function D(){const u=l.tabProps.value.narrowIndicator,i=[],v=_("div",{ref:f,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&i.push(_(ee,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&i.push(_("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&i.push(e.alertIcon!==void 0?_(ee,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):_("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&i.push(v);const w=[_("div",{class:"q-focus-helper",tabindex:-1,ref:r}),_("div",{class:k.value},xe(h.default,i))];return u===!1&&w.push(v),w}const M={name:g(()=>e.name),rootRef:T,tabIndicatorRef:f,routeData:n};W(()=>{l.unregisterTab(M)}),N(()=>{l.registerTab(M)});function p(u,i){const v={ref:T,class:I.value,tabindex:m.value,role:"tab","aria-selected":L.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:R,onKeydown:B,...i};return et(_(u,v,D()),[[Je,c.value]])}return{renderTab:p,$tabs:l}}var Lt=K({name:"QTab",props:_t,emits:St,setup(e,{slots:h,emit:o}){const{renderTab:n}=qt(e,h,o);return()=>n("div")}});function Pt(){const e=S(!$e.value);return e.value===!1&&N(()=>{e.value=!0}),{isHydrated:e}}const pe=typeof ResizeObserver!="undefined",Pe=pe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var de=K({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:h}){let o=null,n,l={width:-1,height:-1};function q(f){f===!0||e.debounce===0||e.debounce==="0"?r():o===null&&(o=setTimeout(r,e.debounce))}function r(){if(o!==null&&(clearTimeout(o),o=null),n){const{offsetWidth:f,offsetHeight:c}=n;(f!==l.width||c!==l.height)&&(l={width:f,height:c},h("resize",l))}}const{proxy:T}=j();if(T.trigger=q,pe===!0){let f;const c=L=>{n=T.$el.parentNode,n?(f=new ResizeObserver(q),f.observe(n),r()):L!==!0&&_e(()=>{c(!0)})};return N(()=>{c()}),W(()=>{o!==null&&clearTimeout(o),f!==void 0&&(f.disconnect!==void 0?f.disconnect():n&&f.unobserve(n))}),Ie}else{let L=function(){o!==null&&(clearTimeout(o),o=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",q,ue.passive),c=void 0)},I=function(){L(),n&&n.contentDocument&&(c=n.contentDocument.defaultView,c.addEventListener("resize",q,ue.passive),r())};const{isHydrated:f}=Pt();let c;return N(()=>{_e(()=>{n=T.$el,n&&I()})}),W(L),()=>{if(f.value===!0)return _("object",{class:"q--avoid-card-border",style:Pe.style,tabindex:-1,type:"text/html",data:Pe.url,"aria-hidden":"true",onLoad:I})}}}});function Rt(e,h,o){const n=o===!0?["left","right"]:["top","bottom"];return`absolute-${h===!0?n[0]:n[1]}${e?` text-${e}`:""}`}const xt=["left","center","right","justify"];var kt=K({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>xt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:h,emit:o}){const{proxy:n}=j(),{$q:l}=n,{registerTick:q}=re(),{registerTick:r}=re(),{registerTick:T}=re(),{registerTimeout:f,removeTimeout:c}=Le(),{registerTimeout:L,removeTimeout:I}=Le(),k=S(null),m=S(null),R=S(e.modelValue),B=S(!1),D=S(!0),M=S(!1),p=S(!1),u=[],i=S(0),v=S(!1);let w=null,P=null,$;const z=g(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Rt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ae=g(()=>{const t=i.value,a=R.value;for(let s=0;s<t;s++)if(u[s].name.value===a)return!0;return!1}),Ee=g(()=>`q-tabs__content--align-${B.value===!0?"left":p.value===!0?"justify":e.align}`),Oe=g(()=>`q-tabs row no-wrap items-center q-tabs--${B.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),De=g(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ee.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),U=g(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),G=g(()=>e.vertical!==!0&&l.lang.rtl===!0),te=g(()=>bt===!1&&G.value===!0);H(G,F),H(()=>e.modelValue,t=>{ne({name:t,setCurrent:!0,skipEmit:!0})}),H(()=>e.outsideArrows,X);function ne({name:t,setCurrent:a,skipEmit:s}){R.value!==t&&(s!==!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(He(R.value,t),R.value=t))}function X(){q(()=>{fe({width:k.value.offsetWidth,height:k.value.offsetHeight})})}function fe(t){if(U.value===void 0||m.value===null)return;const a=t[U.value.container],s=Math.min(m.value[U.value.scroll],Array.prototype.reduce.call(m.value.children,(C,b)=>C+(b[U.value.content]||0),0)),y=a>0&&s>a;B.value=y,y===!0&&r(F),p.value=a<parseInt(e.breakpoint,10)}function He(t,a){const s=t!=null&&t!==""?u.find(C=>C.name.value===t):null,y=a!=null&&a!==""?u.find(C=>C.name.value===a):null;if(s&&y){const C=s.tabIndicatorRef.value,b=y.tabIndicatorRef.value;w!==null&&(clearTimeout(w),w=null),C.style.transition="none",C.style.transform="none",b.style.transition="none",b.style.transform="none";const d=C.getBoundingClientRect(),x=b.getBoundingClientRect();b.style.transform=e.vertical===!0?`translate3d(0,${d.top-x.top}px,0) scale3d(1,${x.height?d.height/x.height:1},1)`:`translate3d(${d.left-x.left}px,0,0) scale3d(${x.width?d.width/x.width:1},1,1)`,T(()=>{w=setTimeout(()=>{w=null,b.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",b.style.transform="none"},70)})}y&&B.value===!0&&Q(y.rootRef.value)}function Q(t){const{left:a,width:s,top:y,height:C}=m.value.getBoundingClientRect(),b=t.getBoundingClientRect();let d=e.vertical===!0?b.top-y:b.left-a;if(d<0){m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(d),F();return}d+=e.vertical===!0?b.height-C:b.width-s,d>0&&(m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(d),F())}function F(){const t=m.value;if(t===null)return;const a=t.getBoundingClientRect(),s=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);G.value===!0?(D.value=Math.ceil(s+a.width)<t.scrollWidth-1,M.value=s>0):(D.value=s>0,M.value=e.vertical===!0?Math.ceil(s+a.height)<t.scrollHeight:Math.ceil(s+a.width)<t.scrollWidth)}function ve(t){P!==null&&clearInterval(P),P=setInterval(()=>{Ve(t)===!0&&E()},5)}function be(){ve(te.value===!0?Number.MAX_SAFE_INTEGER:0)}function he(){ve(te.value===!0?0:Number.MAX_SAFE_INTEGER)}function E(){P!==null&&(clearInterval(P),P=null)}function Qe(t,a){const s=Array.prototype.filter.call(m.value.children,x=>x===a||x.matches&&x.matches(".q-tab.q-focusable")===!0),y=s.length;if(y===0)return;if(t===36)return Q(s[0]),s[0].focus(),!0;if(t===35)return Q(s[y-1]),s[y-1].focus(),!0;const C=t===(e.vertical===!0?38:37),b=t===(e.vertical===!0?40:39),d=C===!0?-1:b===!0?1:void 0;if(d!==void 0){const x=G.value===!0?-1:1,A=s.indexOf(a)+d*x;return A>=0&&A<y&&(Q(s[A]),s[A].focus({preventScroll:!0})),!0}}const Fe=g(()=>te.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Ve(t){const a=m.value,{get:s,set:y}=Fe.value;let C=!1,b=s(a);const d=t<b?-1:1;return b+=d*5,b<0?(C=!0,b=0):(d===-1&&b<=t||d===1&&b>=t)&&(C=!0,b=t),y(a,b),F(),C}function me(t,a){for(const s in t)if(t[s]!==a[s])return!1;return!0}function We(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const s=u.filter(d=>d.routeData!==void 0&&d.routeData.hasRouterLink.value===!0),{hash:y,query:C}=n.$route,b=Object.keys(C).length;for(const d of s){const x=d.routeData.exact.value===!0;if(d.routeData[x===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:A,query:ae,matched:Ge,href:Xe}=d.routeData.resolvedLink.value,le=Object.keys(ae).length;if(x===!0){if(A!==y||le!==b||me(C,ae)===!1)continue;t=d.name.value;break}if(A!==""&&A!==y||le!==0&&me(ae,C)===!1)continue;const O={matchedLen:Ge.length,queryDiff:b-le,hrefLen:Xe.length-A.length};if(O.matchedLen>a.matchedLen){t=d.name.value,a=O;continue}else if(O.matchedLen!==a.matchedLen)continue;if(O.queryDiff<a.queryDiff)t=d.name.value,a=O;else if(O.queryDiff!==a.queryDiff)continue;O.hrefLen>a.hrefLen&&(t=d.name.value,a=O)}t===null&&u.some(d=>d.routeData===void 0&&d.name.value===R.value)===!0||ne({name:t,setCurrent:!0})}function Ne(t){if(c(),v.value!==!0&&k.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&k.value.contains(a)===!0&&(v.value=!0,B.value===!0&&Q(a))}}function je(){f(()=>{v.value=!1},30)}function J(){Te.avoidRouteWatcher===!1?L(We):I()}function ge(){if($===void 0){const t=H(()=>n.$route.fullPath,J);$=()=>{t(),$=void 0}}}function Ke(t){u.push(t),i.value++,X(),t.routeData===void 0||n.$route===void 0?L(()=>{if(B.value===!0){const a=R.value,s=a!=null&&a!==""?u.find(y=>y.name.value===a):null;s&&Q(s.rootRef.value)}}):(ge(),t.routeData.hasRouterLink.value===!0&&J())}function Ue(t){u.splice(u.indexOf(t),1),i.value--,X(),$!==void 0&&t.routeData!==void 0&&(u.every(a=>a.routeData===void 0)===!0&&$(),J())}const Te={currentModel:R,tabProps:z,hasFocus:v,hasActiveTab:Ae,registerTab:Ke,unregisterTab:Ue,verifyRouteModel:J,updateModel:ne,onKbdNavigate:Qe,avoidRouteWatcher:!1};ze(ke,Te);function we(){w!==null&&clearTimeout(w),E(),$!==void 0&&$()}let ye;return W(we),lt(()=>{ye=$!==void 0,we()}),ot(()=>{ye===!0&&ge(),X()}),()=>_("div",{ref:k,class:Oe.value,role:"tablist",onFocusin:Ne,onFocusout:je},[_(de,{onResize:fe}),_("div",{ref:m,class:De.value,onScroll:F},Ye(h.default)),_(ee,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:be,onTouchstartPassive:be,onMouseupPassive:E,onMouseleavePassive:E,onTouchendPassive:E}),_(ee,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:he,onTouchstartPassive:he,onMouseupPassive:E,onMouseleavePassive:E,onTouchendPassive:E})])}});const{passive:Re}=ue,$t=["both","horizontal","vertical"];var It=K({name:"QScrollObserver",props:{axis:{type:String,validator:e=>$t.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ht},emits:["scroll"],setup(e,{emit:h}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,l,q;H(()=>e.scrollTarget,()=>{f(),T()});function r(){n!==null&&n();const I=Math.max(0,gt(l)),k=Tt(l),m={top:I-o.position.top,left:k-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const R=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:I,left:k},o.directionChanged=o.direction!==R,o.delta=m,o.directionChanged===!0&&(o.direction=R,o.inflectionPoint=o.position),h("scroll",{...o})}function T(){l=mt(q,e.scrollTarget),l.addEventListener("scroll",c,Re),c(!0)}function f(){l!==void 0&&(l.removeEventListener("scroll",c,Re),l=void 0)}function c(I){if(I===!0||e.debounce===0||e.debounce==="0")r();else if(n===null){const[k,m]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];n=()=>{m(k),n=null}}}const{proxy:L}=j();return H(()=>L.$q.lang.rtl,r),N(()=>{q=L.$el.parentNode,T()}),W(()=>{n!==null&&n(),f()}),Object.assign(L,{trigger:c,getPosition:()=>o}),Ie}}),zt=K({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:h,emit:o}){const{proxy:{$q:n}}=j(),l=S(null),q=S(n.screen.height),r=S(e.container===!0?0:n.screen.width),T=S({position:0,direction:"down",inflectionPoint:0}),f=S(0),c=S($e.value===!0?0:se()),L=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),I=g(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),k=g(()=>c.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=g(()=>c.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function R(i){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};T.value=v,e.onScroll!==void 0&&o("scroll",v)}}function B(i){const{height:v,width:w}=i;let P=!1;q.value!==v&&(P=!0,q.value=v,e.onScrollHeight!==void 0&&o("scrollHeight",v),M()),r.value!==w&&(P=!0,r.value=w),P===!0&&e.onResize!==void 0&&o("resize",i)}function D({height:i}){f.value!==i&&(f.value=i,M())}function M(){if(e.container===!0){const i=q.value>f.value?se():0;c.value!==i&&(c.value=i)}}let p=null;const u={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:l,height:q,containerHeight:f,scrollbarWidth:c,totalWidth:g(()=>r.value+c.value),rows:g(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:Y({size:0,offset:0,space:!1}),right:Y({size:300,offset:0,space:!1}),footer:Y({size:0,offset:0,space:!1}),left:Y({size:300,offset:0,space:!1}),scroll:T,animate(){p!==null?clearTimeout(p):document.body.classList.add("q-body--layout-animate"),p=setTimeout(()=>{p=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,v,w){u[i][v]=w}};if(ze(rt,u),se()>0){let w=function(){i=null,v.classList.remove("hide-scrollbar")},P=function(){if(i===null){if(v.scrollHeight>n.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(w,300)},$=function(z){i!==null&&z==="remove"&&(clearTimeout(i),w()),window[`${z}EventListener`]("resize",P)},i=null;const v=document.body;H(()=>e.container!==!0?"add":"remove",$),e.container!==!0&&$("add"),it(()=>{$("remove")})}return()=>{const i=xe(h.default,[_(It,{onScroll:R}),_(de,{onResize:B})]),v=_("div",{class:L.value,style:I.value,ref:e.container===!0?void 0:l,tabindex:-1},i);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:l},[_(de,{onResize:D}),_("div",{class:"absolute-full",style:k.value},[_("div",{class:"scroll",style:m.value},[v])])]):v}}});const Bt=[{name:"number",required:!0,label:"#",align:"left",field:e=>e.num,format:e=>`${e}`,sortable:!0},{name:"product",align:"center",label:"Product",field:"stg",sortable:!0,format:e=>e.join(", ")},{name:"date",label:"Date",field:"initiated_at",sortable:!0,format:e=>new Date(e).toISOString().split("T")[0]},{name:"client",label:"Client",field:"client_name",sortable:!0},{name:"state",label:"State",field:"state",sortable:!0,format:e=>e==="init"?"Initial":""},{name:"contact",label:"Contact",field:"person_phone",sortable:!1}],Mt=[{id:"1",num:3440,initiated_at:"2021-06-24T14:28:14.237",dadd:"2021-06-24T14:28:14.237",state:"init",lastUpd:"2021-06-24T14:28:14.237",stg:["ACCOPEN"],inn:"780528376562",client_name:"  ",person_phone:"79000000000"},{id:"2",num:3439,initiated_at:"2021-06-09T14:44:59.307",dadd:"2021-06-09T14:44:59.307",state:"init",lastUpd:"2021-06-11T02:46:01.703",stg:["FNS.REG"],inn:null,client_name:"\u0422\u0435\u0441\u0442 \u0422\u0435\u0441\u0442 \u0422\u0435\u0441\u0442",person_phone:"79999627081"}],pt={setup(){return{columns:Bt,rows:Mt}}},At={class:"q-pa-md"};function Et(e,h,o,n,l,q){return V(),Me("div",At,[ce(wt,{title:"Orders",rows:n.rows,columns:n.columns,"row-key":"name"},null,8,["rows","columns"])])}var Ot=Be(pt,[["render",Et]]);const Dt={components:{MeetingsPage:Ot,OrdersPage:yt},setup(){const e=S([{name:"orders",label:"Orders",closable:!1,component:"OrdersPage"},{name:"meetings",label:"Meetings",closable:!1,component:"MeetingsPage"}]),h=S("orders"),o=(r,T)=>r.findIndex(f=>f.name===T),n=g(()=>{const r=o(e.value,h.value);return e.value[r].component});return{activeTab:h,tabs:e,currentTabComponent:n,closeTab:r=>{o(e.value,h.value)===r&&(h.value=e.value.slice(-2)[0].name),e.value.splice(r,1)},addTab:r=>{const T={name:`order${r}`,label:`Order ${r}`,closable:!0,component:`OrderPage${r}`};e.value.push(T),h.value=T.name}}}},Ht={class:"q-pa-lg"};function Qt(e,h,o,n,l,q){return V(),Z(zt,{view:"hhh LpR lfr"},{default:ie(()=>[qe("div",null,[ce(kt,{modelValue:n.activeTab,"onUpdate:modelValue":h[0]||(h[0]=r=>n.activeTab=r),dense:"",align:"left",class:"bg-indigo text-grey-2","inline-label":"","active-color":"white"},{default:ie(()=>[(V(!0),Me(ut,null,st(n.tabs,(r,T)=>(V(),Z(Lt,{key:T,name:r.name,label:r.label},{default:ie(()=>[r.closable?(V(),Z(Ce,{key:0,icon:"close",flat:"",round:"",size:"0.5rem",onClick:dt(f=>n.closeTab(T),["stop"]),class:"q-ml-md"},null,8,["onClick"])):ft("",!0)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"]),qe("div",Ht,[(V(),Z(ct(n.currentTabComponent)))]),ce(Ce,{label:"New tab",onClick:h[1]||(h[1]=r=>n.addTab(Math.random().toString()))})])]),_:1})}var jt=Be(Dt,[["render",Qt]]);export{jt as default};
