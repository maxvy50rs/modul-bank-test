import{j as he,f as ke,k as ye,l as be,m as xe,n as we,o as fe,p as ne,q as Me,Q as Se,a as Ve,b as oe,i as re}from"./QPage.7818dab3.js";import{r as W,l as U,p as K,f as Ce,c as _,k as me,o as Fe,a as le,h as G,a4 as Ee,g as ge,R as ie,u as Re,v as De,x as pe,s as se,a3 as Pe,_ as Ae,af as qe,C as Oe,Z as Te,E as J,F as te,G as ue,M as $,I as Ie,H as B,$ as ae}from"./index.e593c5a3.js";import{b as Be,v as Ne,c as _e}from"./QBtn.1bbc7c36.js";import{a as je,u as ze}from"./index.8f1ff550.js";import"./index.ddbd5591.js";import"./axios.0ed95acd.js";const de={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ee={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ve=Object.keys(ee);ve.forEach(e=>{ee[e].regex=new RegExp(ee[e].pattern)});const Ue=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ve.join("")+"])|(.)","g"),ce=/[.*+?^${}()|[\]\\]/g,S=String.fromCharCode(1),Le={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ke(e,d,q,i){let s,f,b,V,o,k;const F=W(null),g=W(u());function Z(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}U(()=>e.type+e.autogrow,O),U(()=>e.mask,n=>{if(n!==void 0)N(g.value,!0);else{const a=A(g.value);O(),e.modelValue!==a&&d("update:modelValue",a)}}),U(()=>e.fillMask+e.reverseFillMask,()=>{F.value===!0&&N(g.value,!0)}),U(()=>e.unmaskedValue,()=>{F.value===!0&&N(g.value)});function u(){if(O(),F.value===!0){const n=D(A(e.modelValue));return e.fillMask!==!1?X(n):n}return e.modelValue}function E(n){if(n<s.length)return s.slice(-n);let a="",r=s;const l=r.indexOf(S);if(l!==-1){for(let m=n-r.length;m>0;m--)a+=S;r=r.slice(0,l)+a+r.slice(l)}return r}function O(){if(F.value=e.mask!==void 0&&e.mask.length!==0&&Z(),F.value===!1){V=void 0,s="",f="";return}const n=de[e.mask]===void 0?e.mask:de[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",r=a.replace(ce,"\\$&"),l=[],m=[],c=[];let M=e.reverseFillMask===!0,v="",h="";n.replace(Ue,(C,t,x,j,I)=>{if(j!==void 0){const p=ee[j];c.push(p),h=p.negate,M===!0&&(m.push("(?:"+h+"+)?("+p.pattern+"+)?(?:"+h+"+)?("+p.pattern+"+)?"),M=!1),m.push("(?:"+h+"+)?("+p.pattern+")?")}else if(x!==void 0)v="\\"+(x==="\\"?"":x),c.push(x),l.push("([^"+v+"]+)?"+v+"?");else{const p=t!==void 0?t:I;v=p==="\\"?"\\\\\\\\":p.replace(ce,"\\\\$&"),c.push(p),l.push("([^"+v+"]+)?"+v+"?")}});const L=new RegExp("^"+l.join("")+"("+(v===""?".":"[^"+v+"]")+"+)?"+(v===""?"":"["+v+"]*")+"$"),z=m.length-1,y=m.map((C,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+C):t===z?new RegExp("^"+C+"("+(h===""?".":h)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+C));b=c,V=C=>{const t=L.exec(e.reverseFillMask===!0?C:C.slice(0,c.length+1));t!==null&&(C=t.slice(1).join(""));const x=[],j=y.length;for(let I=0,p=C;I<j;I++){const H=y[I].exec(p);if(H===null)break;p=p.slice(H.shift().length),x.push(...H)}return x.length!==0?x.join(""):C},s=c.map(C=>typeof C=="string"?C:S).join(""),f=s.split(S).join(a)}function N(n,a,r){const l=i.value,m=l.selectionEnd,c=l.value.length-m,M=A(n);a===!0&&O();const v=D(M),h=e.fillMask!==!1?X(v):v,L=g.value!==h;l.value!==h&&(l.value=h),L===!0&&(g.value=h),document.activeElement===l&&K(()=>{if(h===f){const y=e.reverseFillMask===!0?f.length:0;l.setSelectionRange(y,y,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const y=l.selectionEnd;let C=m-1;for(let t=o;t<=C&&t<y;t++)s[t]!==S&&C++;P.right(l,C);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)!==-1){const y=e.reverseFillMask===!0?m===0?h.length>v.length?1:0:Math.max(0,h.length-(h===f?0:Math.min(v.length,c)+1))+1:m;l.setSelectionRange(y,y,"forward");return}if(e.reverseFillMask===!0)if(L===!0){const y=Math.max(0,h.length-(h===f?0:Math.min(v.length,c+1)));y===1&&m===1?l.setSelectionRange(y,y,"forward"):P.rightReverse(l,y)}else{const y=h.length-c;l.setSelectionRange(y,y,"backward")}else if(L===!0){const y=Math.max(0,s.indexOf(S),Math.min(v.length,m)-1);P.right(l,y)}else{const y=m-1;P.right(l,y)}});const z=e.unmaskedValue===!0?A(h):h;String(e.modelValue)!==z&&(e.modelValue!==null||z!=="")&&q(z,!0)}function Q(n,a,r){const l=D(A(n.value));a=Math.max(0,s.indexOf(S),Math.min(l.length,a)),o=a,n.setSelectionRange(a,r,"forward")}const P={left(n,a){const r=s.slice(a-1).indexOf(S)===-1;let l=Math.max(0,a-1);for(;l>=0;l--)if(s[l]===S){a=l,r===!0&&a++;break}if(l<0&&s[a]!==void 0&&s[a]!==S)return P.right(n,0);a>=0&&n.setSelectionRange(a,a,"backward")},right(n,a){const r=n.value.length;let l=Math.min(r,a+1);for(;l<=r;l++)if(s[l]===S){a=l;break}else s[l-1]===S&&(a=l);if(l>r&&s[a-1]!==void 0&&s[a-1]!==S)return P.left(n,r);n.setSelectionRange(a,a,"forward")},leftReverse(n,a){const r=E(n.value.length);let l=Math.max(0,a-1);for(;l>=0;l--)if(r[l-1]===S){a=l;break}else if(r[l]===S&&(a=l,l===0))break;if(l<0&&r[a]!==void 0&&r[a]!==S)return P.rightReverse(n,0);a>=0&&n.setSelectionRange(a,a,"backward")},rightReverse(n,a){const r=n.value.length,l=E(r),m=l.slice(0,a+1).indexOf(S)===-1;let c=Math.min(r,a+1);for(;c<=r;c++)if(l[c-1]===S){a=c,a>0&&m===!0&&a--;break}if(c>r&&l[a-1]!==void 0&&l[a-1]!==S)return P.leftReverse(n,r);n.setSelectionRange(a,a,"forward")}};function w(n){d("click",n),k=void 0}function R(n){if(d("keydown",n),Ce(n)===!0||n.altKey===!0)return;const a=i.value,r=a.selectionStart,l=a.selectionEnd;if(n.shiftKey||(k=void 0),n.keyCode===37||n.keyCode===39){n.shiftKey&&k===void 0&&(k=a.selectionDirection==="forward"?r:l);const m=P[(n.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(n.preventDefault(),m(a,k===r?l:r),n.shiftKey){const c=a.selectionStart;a.setSelectionRange(Math.min(k,c),Math.max(k,c),"forward")}}else n.keyCode===8&&e.reverseFillMask!==!0&&r===l?(P.left(a,r),a.setSelectionRange(a.selectionStart,l,"backward")):n.keyCode===46&&e.reverseFillMask===!0&&r===l&&(P.rightReverse(a,l),a.setSelectionRange(r,a.selectionEnd,"forward"))}function D(n){if(n==null||n==="")return"";if(e.reverseFillMask===!0)return T(n);const a=b;let r=0,l="";for(let m=0;m<a.length;m++){const c=n[r],M=a[m];if(typeof M=="string")l+=M,c===M&&r++;else if(c!==void 0&&M.regex.test(c))l+=M.transform!==void 0?M.transform(c):c,r++;else return l}return l}function T(n){const a=b,r=s.indexOf(S);let l=n.length-1,m="";for(let c=a.length-1;c>=0&&l!==-1;c--){const M=a[c];let v=n[l];if(typeof M=="string")m=M+m,v===M&&l--;else if(v!==void 0&&M.regex.test(v))do m=(M.transform!==void 0?M.transform(v):v)+m,l--,v=n[l];while(r===c&&v!==void 0&&M.regex.test(v));else return m}return m}function A(n){return typeof n!="string"||V===void 0?typeof n=="number"?V(""+n):n:V(n)}function X(n){return f.length-n.length<=0?n:e.reverseFillMask===!0&&n.length!==0?f.slice(0,-n.length)+n:n+f.slice(n.length)}return{innerValue:g,hasMask:F,moveCursorForPaste:Q,updateMaskValue:N,onMaskedKeydown:R,onMaskedClick:w}}function Ze(e,d){function q(){const i=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(f=>{s.items.add(f)}),{files:s.files}}catch{return{files:void 0}}}return d===!0?_(()=>{if(e.type==="file")return q()}):_(q)}var Y=me({name:"QInput",inheritAttrs:!1,props:{...he,...Le,...ke,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ye,"paste","change","keydown","click","animationend"],setup(e,{emit:d,attrs:q}){const{proxy:i}=ge(),{$q:s}=i,f={};let b=NaN,V,o,k=null,F;const g=W(null),Z=be(e),{innerValue:u,hasMask:E,moveCursorForPaste:O,updateMaskValue:N,onMaskedKeydown:Q,onMaskedClick:P}=Ke(e,d,v,g),w=Ze(e,!0),R=_(()=>ne(u.value)),D=Me(c),T=xe({changeEvent:!0}),A=_(()=>e.type==="textarea"||e.autogrow===!0),X=_(()=>A.value===!0||["text","search","url","tel","password"].includes(e.type)),n=_(()=>{const t={...T.splitAttrs.listeners.value,onInput:c,onPaste:m,onChange:L,onBlur:z,onFocus:ie};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=D,E.value===!0&&(t.onKeydown=Q,t.onClick=P),e.autogrow===!0&&(t.onAnimationend=M),t}),a=_(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Z.value,...T.splitAttrs.attributes.value,id:T.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return A.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});U(()=>e.type,()=>{g.value&&(g.value.value=e.modelValue)}),U(()=>e.modelValue,t=>{if(E.value===!0){if(o===!0&&(o=!1,String(t)===b))return;N(t)}else u.value!==t&&(u.value=t,e.type==="number"&&f.hasOwnProperty("value")===!0&&(V===!0?V=!1:delete f.value));e.autogrow===!0&&K(h)}),U(()=>e.autogrow,t=>{t===!0?K(h):g.value!==null&&q.rows>0&&(g.value.style.height="auto")}),U(()=>e.dense,()=>{e.autogrow===!0&&K(h)});function r(){fe(()=>{const t=document.activeElement;g.value!==null&&g.value!==t&&(t===null||t.id!==T.targetUid.value)&&g.value.focus({preventScroll:!0})})}function l(){g.value!==null&&g.value.select()}function m(t){if(E.value===!0&&e.reverseFillMask!==!0){const x=t.target;O(x,x.selectionStart,x.selectionEnd)}d("paste",t)}function c(t){if(!t||!t.target)return;if(e.type==="file"){d("update:modelValue",t.target.files);return}const x=t.target.value;if(t.target.qComposing===!0){f.value=x;return}if(E.value===!0)N(x,!1,t.inputType);else if(v(x),X.value===!0&&t.target===document.activeElement){const{selectionStart:j,selectionEnd:I}=t.target;j!==void 0&&I!==void 0&&K(()=>{t.target===document.activeElement&&x.indexOf(t.target.value)===0&&t.target.setSelectionRange(j,I)})}e.autogrow===!0&&h()}function M(t){d("animationend",t),h()}function v(t,x){F=()=>{k=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==t&&b!==t&&(b=t,x===!0&&(o=!0),d("update:modelValue",t),K(()=>{b===t&&(b=NaN)})),F=void 0},e.type==="number"&&(V=!0,f.value=t),e.debounce!==void 0?(k!==null&&clearTimeout(k),f.value=t,k=setTimeout(F,e.debounce)):F()}function h(){requestAnimationFrame(()=>{const t=g.value;if(t!==null){const x=t.parentNode.style,{scrollTop:j}=t,{overflowY:I,maxHeight:p}=s.platform.is.firefox===!0?{}:window.getComputedStyle(t),H=I!==void 0&&I!=="scroll";H===!0&&(t.style.overflowY="hidden"),x.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",H===!0&&(t.style.overflowY=parseInt(p,10)<t.scrollHeight?"auto":"hidden"),x.marginBottom="",t.scrollTop=j}})}function L(t){D(t),k!==null&&(clearTimeout(k),k=null),F!==void 0&&F(),d("change",t.target.value)}function z(t){t!==void 0&&ie(t),k!==null&&(clearTimeout(k),k=null),F!==void 0&&F(),V=!1,o=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{g.value!==null&&(g.value.value=u.value!==void 0?u.value:"")})}function y(){return f.hasOwnProperty("value")===!0?f.value:u.value!==void 0?u.value:""}Fe(()=>{z()}),le(()=>{e.autogrow===!0&&h()}),Object.assign(T,{innerValue:u,fieldClass:_(()=>`q-${A.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:_(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:g,emitValue:v,hasValue:R,floatingLabel:_(()=>R.value===!0&&(e.type!=="number"||isNaN(u.value)===!1)||ne(e.displayValue)),getControl:()=>G(A.value===!0?"textarea":"input",{ref:g,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...n.value,...e.type!=="file"?{value:y()}:w.value}),getShadowControl:()=>G("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(A.value===!0?"":" text-no-wrap")},[G("span",{class:"invisible"},y()),G("span",e.shadowText)])});const C=we(T);return Object.assign(i,{focus:r,select:l,getNativeElement:()=>g.value}),Ee(i,"nativeEl",()=>g.value),C}}),Qe=me({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:d,emit:q}){const i=ge(),s=W(null);let f=0;const b=[];function V(u){const E=typeof u=="boolean"?u:e.noErrorFocus!==!0,O=++f,N=(w,R)=>{q(`validation${w===!0?"Success":"Error"}`,R)},Q=w=>{const R=w.validate();return typeof R.then=="function"?R.then(D=>({valid:D,comp:w}),D=>({valid:!1,comp:w,err:D})):Promise.resolve({valid:R,comp:w})};return(e.greedy===!0?Promise.all(b.map(Q)).then(w=>w.filter(R=>R.valid!==!0)):b.reduce((w,R)=>w.then(()=>Q(R).then(D=>{if(D.valid===!1)return Promise.reject(D)})),Promise.resolve()).catch(w=>[w])).then(w=>{if(w===void 0||w.length===0)return O===f&&N(!0),!0;if(O===f){const{comp:R,err:D}=w[0];if(D!==void 0&&console.error(D),N(!1,R),E===!0){const T=w.find(({comp:A})=>typeof A.focus=="function"&&Ne(A.$)===!1);T!==void 0&&T.comp.focus()}}return!1})}function o(){f++,b.forEach(u=>{typeof u.resetValidation=="function"&&u.resetValidation()})}function k(u){u!==void 0&&se(u);const E=f+1;V().then(O=>{E===f&&O===!0&&(e.onSubmit!==void 0?q("submit",u):u!==void 0&&u.target!==void 0&&typeof u.target.submit=="function"&&u.target.submit())})}function F(u){u!==void 0&&se(u),q("reset"),K(()=>{o(),e.autofocus===!0&&e.noResetFocus!==!0&&g()})}function g(){fe(()=>{if(s.value===null)return;const u=s.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),E=>E.tabIndex!==-1);u!=null&&u.focus({preventScroll:!0})})}Re(Pe,{bindComponent(u){b.push(u)},unbindComponent(u){const E=b.indexOf(u);E!==-1&&b.splice(E,1)}});let Z=!1;return De(()=>{Z=!0}),pe(()=>{Z===!0&&e.autofocus===!0&&g()}),le(()=>{e.autofocus===!0&&g()}),Object.assign(i.proxy,{validate:V,resetValidation:o,submit:k,reset:F,focus:g,getValidationComponents:()=>b}),()=>G("form",{class:"q-form",ref:s,onSubmit:k,onReset:F},Be(d.default))}});const He={setup(){const e=je(),d=qe(),q=Oe(),{removeTabByName:i}=ze(),s=d.params.id,{orderDetailsMap:f}=Te(e);function b(o){const k=new Date(Date.now());return o==="new"?{id:k.toISOString(),num:Math.floor(k.getTime()*1e-9),dadd:k.toISOString(),initiated_at:k.toISOString(),state:"init",extra:{partner:{client_name:""}}}:f.value.get(o)}const V=W();return le(async()=>{s!=="new"&&await e.dispatchGetOrderById(s),V.value=b(s)}),{orderDetails:V,stateToBadgeMap:new Map([["init",{label:"Initial",color:"red"}],["finish",{label:"Finished",color:"green"}],["progress",{label:"WIP",color:"orange"}]]),validateEmail(o){return/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(o)},businessStructureList:["UL","IP"],stgsList:["ACCOPEN","FNS.REG"],onSubmit(o){console.log(o),s==="new"?e.dispatchCreateNewOrder(o):e.dispatchUpdateOrder(o),q.push("/orders"),i("/orders/new")},onReset(){}}}},Ye={key:1,class:"q-gutter-sm q-pa-lg col-12"},Ge={class:"col-6 q-px-lg q-pb-xl"},We={class:"col-6 q-px-lg q-pb-xl"},Xe={class:"row justify-end q-mt-xl"};function Je(e,d,q,i,s,f){return J(),te(Se,{class:"q-pa-md row justify-center items-start",style:{"align-content":"start"}},{default:ue(()=>{var b,V;return[i.orderDetails?$("",!0):(J(),te(Ve,{key:0,indeterminate:"",size:"90px",thickness:.2,color:"indigo","center-color":"grey-4","track-color":"grey-2"})),i.orderDetails?(J(),Ie("div",Ye,[B(oe,{outline:"",color:"orange",label:new Date(i.orderDetails.dadd).toISOString().split("T").join(", ").slice(0,-8)},null,8,["label"]),B(oe,{color:(b=i.stateToBadgeMap.get(i.orderDetails.state))==null?void 0:b.color,label:(V=i.stateToBadgeMap.get(i.orderDetails.state))==null?void 0:V.label},null,8,["color","label"])])):$("",!0),i.orderDetails?(J(),te(Qe,{key:2,class:"col-12 row justify-center items-start"},{default:ue(()=>[ae("div",Ge,[B(Y,{class:"q-mb-sm",filled:"",modelValue:i.orderDetails.company_name,"onUpdate:modelValue":d[0]||(d[0]=o=>i.orderDetails.company_name=o),label:"Company name *","lazy-rules":"",rules:[o=>o&&o.length>0||"Please type something"]},null,8,["modelValue","rules"]),B(Y,{class:"q-mb-sm",filled:"",modelValue:i.orderDetails.extra.partner.client_name,"onUpdate:modelValue":d[1]||(d[1]=o=>i.orderDetails.extra.partner.client_name=o),label:"Partner name *","lazy-rules":"",rules:[o=>o&&o.length>0||"Please type something"]},null,8,["modelValue","rules"]),B(re,{class:"q-mb-sm q-pb-lg",filled:"",modelValue:i.orderDetails.company_type,"onUpdate:modelValue":d[2]||(d[2]=o=>i.orderDetails.company_type=o),options:i.businessStructureList,label:"Business structure","stack-label":""},null,8,["modelValue","options"]),B(Y,{class:"q-mb-sm",filled:"",type:"number",modelValue:i.orderDetails.inn,"onUpdate:modelValue":d[3]||(d[3]=o=>i.orderDetails.inn=o),label:"INN *","lazy-rules":"",rules:[o=>o!==null&&o!==""||"Please type INN",o=>o.toString().split("").length===12||"Please type 12 digits"]},null,8,["modelValue","rules"]),B(re,{filled:"",modelValue:i.orderDetails.stg,"onUpdate:modelValue":d[4]||(d[4]=o=>i.orderDetails.stg=o),multiple:"",options:i.stgsList,label:"Product(s)"},null,8,["modelValue","options"])]),ae("div",We,[B(Y,{class:"q-mb-sm",filled:"",modelValue:i.orderDetails.person_fullname,"onUpdate:modelValue":d[5]||(d[5]=o=>i.orderDetails.person_fullname=o),label:"Contact person *","lazy-rules":"",rules:[o=>o&&o.length>0||"Please type something"]},null,8,["modelValue","rules"]),B(Y,{class:"q-mb-sm q-pb-lg",modelValue:i.orderDetails.person_phone,"onUpdate:modelValue":d[6]||(d[6]=o=>i.orderDetails.person_phone=o),filled:"",type:"tel",label:"Telephone number","stack-label":""},null,8,["modelValue"]),B(Y,{class:"q-mb-lg",filled:"",label:"E-mail *",modelValue:i.orderDetails.person_email,"onUpdate:modelValue":d[7]||(d[7]=o=>i.orderDetails.person_email=o),"lazy-rules":"",rules:[o=>i.validateEmail(o)||"Please enter a valid email address"]},null,8,["modelValue","rules"]),ae("div",Xe,[$("",!0),B(_e,{label:"Submit",color:"indigo",onClick:d[8]||(d[8]=o=>i.onSubmit(i.orderDetails))})])])]),_:1})):$("",!0)]}),_:1})}var ot=Ae(He,[["render",Je]]);export{ot as default};
