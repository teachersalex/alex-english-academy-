(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function DE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bg={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),LE=Symbol.for("react.portal"),VE=Symbol.for("react.fragment"),OE=Symbol.for("react.strict_mode"),ME=Symbol.for("react.profiler"),FE=Symbol.for("react.provider"),UE=Symbol.for("react.context"),jE=Symbol.for("react.forward_ref"),zE=Symbol.for("react.suspense"),BE=Symbol.for("react.memo"),$E=Symbol.for("react.lazy"),um=Symbol.iterator;function WE(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var Dg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lg=Object.assign,Vg={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||Dg}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Og(){}Og.prototype=zs.prototype;function kd(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||Dg}var Cd=kd.prototype=new Og;Cd.constructor=kd;Lg(Cd,zs.prototype);Cd.isPureReactComponent=!0;var cm=Array.isArray,Mg=Object.prototype.hasOwnProperty,Rd={current:null},Fg={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Mg.call(e,r)&&!Fg.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:po,type:t,key:i,ref:o,props:s,_owner:Rd.current}}function HE(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function qE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dm=/\/+/g;function Cu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qE(""+t.key):e.toString(36)}function _a(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case po:case LE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Cu(o,0):r,cm(s)?(n="",t!=null&&(n=t.replace(dm,"$&/")+"/"),_a(s,e,n,"",function(d){return d})):s!=null&&(Nd(s)&&(s=HE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(dm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",cm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Cu(i,l);o+=_a(i,e,n,u,s)}else if(u=WE(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Cu(i,l++),o+=_a(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(t,e,n){if(t==null)return t;var r=[],s=0;return _a(t,r,"","",function(i){return e.call(n,i,s++)}),r}function GE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ea={transition:null},KE={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Rd};function jg(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Qo,forEach:function(t,e,n){Qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qo(t,function(){e++}),e},toArray:function(t){return Qo(t,function(e){return e})||[]},only:function(t){if(!Nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=zs;re.Fragment=VE;re.Profiler=ME;re.PureComponent=kd;re.StrictMode=OE;re.Suspense=zE;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KE;re.act=jg;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lg({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Rd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Mg.call(e,u)&&!Fg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:po,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:UE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FE,_context:t},t.Consumer=t};re.createElement=Ug;re.createFactory=function(t){var e=Ug.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:jE,render:t}};re.isValidElement=Nd;re.lazy=function(t){return{$$typeof:$E,_payload:{_status:-1,_result:t},_init:GE}};re.memo=function(t,e){return{$$typeof:BE,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};re.unstable_act=jg;re.useCallback=function(t,e){return ht.current.useCallback(t,e)};re.useContext=function(t){return ht.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};re.useEffect=function(t,e){return ht.current.useEffect(t,e)};re.useId=function(){return ht.current.useId()};re.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return ht.current.useMemo(t,e)};re.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};re.useRef=function(t){return ht.current.useRef(t)};re.useState=function(t){return ht.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return ht.current.useTransition()};re.version="18.3.1";bg.exports=re;var G=bg.exports;const f=DE(G);var hc={},zg={exports:{}},Pt={},Bg={exports:{}},$g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,B){var $=z.length;z.push(B);e:for(;0<$;){var Y=$-1>>>1,W=z[Y];if(0<s(W,B))z[Y]=B,z[$]=W,$=Y;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var B=z[0],$=z.pop();if($!==B){z[0]=$;e:for(var Y=0,W=z.length,Q=W>>>1;Y<Q;){var J=2*(Y+1)-1,he=z[J],Pe=J+1,Ne=z[Pe];if(0>s(he,$))Pe<W&&0>s(Ne,he)?(z[Y]=Ne,z[Pe]=$,Y=Pe):(z[Y]=he,z[J]=$,Y=J);else if(Pe<W&&0>s(Ne,$))z[Y]=Ne,z[Pe]=$,Y=Pe;else break e}}return B}function s(z,B){var $=z.sortIndex-B.sortIndex;return $!==0?$:z.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],m=1,y=null,_=3,P=!1,N=!1,C=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var B=n(d);B!==null;){if(B.callback===null)r(d);else if(B.startTime<=z)r(d),B.sortIndex=B.expirationTime,e(u,B);else break;B=n(d)}}function b(z){if(C=!1,A(z),!N)if(n(u)!==null)N=!0,Xe(V);else{var B=n(d);B!==null&&Re(b,B.startTime-z)}}function V(z,B){N=!1,C&&(C=!1,I(p),p=-1),P=!0;var $=_;try{for(A(B),y=n(u);y!==null&&(!(y.expirationTime>B)||z&&!x());){var Y=y.callback;if(typeof Y=="function"){y.callback=null,_=y.priorityLevel;var W=Y(y.expirationTime<=B);B=t.unstable_now(),typeof W=="function"?y.callback=W:y===n(u)&&r(u),A(B)}else r(u);y=n(u)}if(y!==null)var Q=!0;else{var J=n(d);J!==null&&Re(b,J.startTime-B),Q=!1}return Q}finally{y=null,_=$,P=!1}}var O=!1,w=null,p=-1,v=5,S=-1;function x(){return!(t.unstable_now()-S<v)}function k(){if(w!==null){var z=t.unstable_now();S=z;var B=!0;try{B=w(!0,z)}finally{B?T():(O=!1,w=null)}}else O=!1}var T;if(typeof E=="function")T=function(){E(k)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Qe=Ee.port2;Ee.port1.onmessage=k,T=function(){Qe.postMessage(null)}}else T=function(){D(k,0)};function Xe(z){w=z,O||(O=!0,T())}function Re(z,B){p=D(function(){z(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){N||P||(N=!0,Xe(V))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var $=_;_=B;try{return z()}finally{_=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,B){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=_;_=z;try{return B()}finally{_=$}},t.unstable_scheduleCallback=function(z,B,$){var Y=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Y+$:Y):$=Y,z){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=$+W,z={id:m++,callback:B,priorityLevel:z,startTime:$,expirationTime:W,sortIndex:-1},$>Y?(z.sortIndex=$,e(d,z),n(u)===null&&z===n(d)&&(C?(I(p),p=-1):C=!0,Re(b,$-Y))):(z.sortIndex=W,e(u,z),N||P||(N=!0,Xe(V))),z},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(z){var B=_;return function(){var $=_;_=B;try{return z.apply(this,arguments)}finally{_=$}}}})($g);Bg.exports=$g;var QE=Bg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XE=G,xt=QE;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wg=new Set,Bi={};function $r(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(Bi[t]=e,t=0;t<e.length;t++)Wg.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=Object.prototype.hasOwnProperty,YE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hm={},fm={};function JE(t){return fc.call(fm,t)?!0:fc.call(hm,t)?!1:YE.test(t)?fm[t]=!0:(hm[t]=!0,!1)}function ZE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ew(t,e,n,r){if(e===null||typeof e>"u"||ZE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var bd=/[\-:]([a-z])/g;function Dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bd,Dd);Ge[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bd,Dd);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bd,Dd);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ld(t,e,n,r){var s=Ge.hasOwnProperty(e)?Ge[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ew(e,n,s,r)&&(n=null),r||s===null?JE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=XE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),Hg=Symbol.for("react.provider"),qg=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),gc=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),Gg=Symbol.for("react.offscreen"),mm=Symbol.iterator;function ui(t){return t===null||typeof t!="object"?null:(t=mm&&t[mm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Ru;function vi(t){if(Ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ru=e&&e[1]||""}return`
`+Ru+t}var Nu=!1;function bu(t,e){if(!t||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vi(t):""}function tw(t){switch(t.tag){case 5:return vi(t.type);case 16:return vi("Lazy");case 13:return vi("Suspense");case 19:return vi("SuspenseList");case 0:case 2:case 15:return t=bu(t.type,!1),t;case 11:return t=bu(t.type.render,!1),t;case 1:return t=bu(t.type,!0),t;default:return""}}function yc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case mc:return"Profiler";case Vd:return"StrictMode";case pc:return"Suspense";case gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qg:return(t.displayName||"Context")+".Consumer";case Hg:return(t._context.displayName||"Context")+".Provider";case Od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Md:return e=t.displayName||null,e!==null?e:yc(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return yc(t(e))}catch{}}return null}function nw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yc(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rw(t){var e=Kg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yo(t){t._valueTracker||(t._valueTracker=rw(t))}function Qg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vc(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xg(t,e){e=e.checked,e!=null&&Ld(t,"checked",e,!1)}function _c(t,e){Xg(t,e);var n=ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ec(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ec(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ec(t,e,n){(e!=="number"||ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _i=Array.isArray;function gs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(_i(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Yg(t,e){var n=ar(e.value),r=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,Zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $i(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sw=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(t){sw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ki[e]=ki[t]})});function ey(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ki.hasOwnProperty(t)&&ki[t]?(""+e).trim():e+"px"}function ty(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ey(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var iw=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ic(t,e){if(e){if(iw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Sc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function Fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xc=null,ys=null,vs=null;function _m(t){if(t=vo(t)){if(typeof xc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Nl(e),xc(t.stateNode,t.type,e))}}function ny(t){ys?vs?vs.push(t):vs=[t]:ys=t}function ry(){if(ys){var t=ys,e=vs;if(vs=ys=null,_m(t),e)for(t=0;t<e.length;t++)_m(e[t])}}function sy(t,e){return t(e)}function iy(){}var Du=!1;function oy(t,e,n){if(Du)return t(e,n);Du=!0;try{return sy(t,e,n)}finally{Du=!1,(ys!==null||vs!==null)&&(iy(),ry())}}function Wi(t,e){var n=t.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Pc=!1;if(In)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{Pc=!1}function ow(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var Ci=!1,za=null,Ba=!1,kc=null,aw={onError:function(t){Ci=!0,za=t}};function lw(t,e,n,r,s,i,o,l,u){Ci=!1,za=null,ow.apply(aw,arguments)}function uw(t,e,n,r,s,i,o,l,u){if(lw.apply(this,arguments),Ci){if(Ci){var d=za;Ci=!1,za=null}else throw Error(U(198));Ba||(Ba=!0,kc=d)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ay(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Em(t){if(Wr(t)!==t)throw Error(U(188))}function cw(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Em(s),t;if(i===r)return Em(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function ly(t){return t=cw(t),t!==null?uy(t):null}function uy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uy(t);if(e!==null)return e;t=t.sibling}return null}var cy=xt.unstable_scheduleCallback,wm=xt.unstable_cancelCallback,dw=xt.unstable_shouldYield,hw=xt.unstable_requestPaint,Ce=xt.unstable_now,fw=xt.unstable_getCurrentPriorityLevel,Ud=xt.unstable_ImmediatePriority,dy=xt.unstable_UserBlockingPriority,$a=xt.unstable_NormalPriority,mw=xt.unstable_LowPriority,hy=xt.unstable_IdlePriority,Pl=null,tn=null;function pw(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:vw,gw=Math.log,yw=Math.LN2;function vw(t){return t>>>=0,t===0?32:31-(gw(t)/yw|0)|0}var Zo=64,ea=4194304;function Ei(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ei(l):(i&=o,i!==0&&(r=Ei(i)))}else o=n&~s,o!==0?r=Ei(o):i!==0&&(r=Ei(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),s=1<<n,r|=t[n],e&=~s;return r}function _w(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ew(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-qt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=_w(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fy(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function Lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function ww(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-qt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ce=0;function my(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var py,zd,gy,yy,vy,Rc=!1,ta=[],Qn=null,Xn=null,Yn=null,Hi=new Map,qi=new Map,jn=[],Tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(t,e){switch(t){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(e.pointerId)}}function di(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=vo(e),e!==null&&zd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Iw(t,e,n,r,s){switch(e){case"focusin":return Qn=di(Qn,t,e,n,r,s),!0;case"dragenter":return Xn=di(Xn,t,e,n,r,s),!0;case"mouseover":return Yn=di(Yn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Hi.set(i,di(Hi.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,qi.set(i,di(qi.get(i)||null,t,e,n,r,s)),!0}return!1}function _y(t){var e=Sr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=ay(n),e!==null){t.blockedOn=e,vy(t.priority,function(){gy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ac=r,n.target.dispatchEvent(r),Ac=null}else return e=vo(n),e!==null&&zd(e),t.blockedOn=n,!1;e.shift()}return!0}function Im(t,e,n){wa(t)&&n.delete(e)}function Sw(){Rc=!1,Qn!==null&&wa(Qn)&&(Qn=null),Xn!==null&&wa(Xn)&&(Xn=null),Yn!==null&&wa(Yn)&&(Yn=null),Hi.forEach(Im),qi.forEach(Im)}function hi(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,Sw)))}function Gi(t){function e(s){return hi(s,t)}if(0<ta.length){hi(ta[0],t);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qn!==null&&hi(Qn,t),Xn!==null&&hi(Xn,t),Yn!==null&&hi(Yn,t),Hi.forEach(e),qi.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)_y(n),n.blockedOn===null&&jn.shift()}var _s=Nn.ReactCurrentBatchConfig,Ha=!0;function Aw(t,e,n,r){var s=ce,i=_s.transition;_s.transition=null;try{ce=1,Bd(t,e,n,r)}finally{ce=s,_s.transition=i}}function xw(t,e,n,r){var s=ce,i=_s.transition;_s.transition=null;try{ce=4,Bd(t,e,n,r)}finally{ce=s,_s.transition=i}}function Bd(t,e,n,r){if(Ha){var s=Nc(t,e,n,r);if(s===null)Wu(t,e,r,qa,n),Tm(t,r);else if(Iw(s,t,e,n,r))r.stopPropagation();else if(Tm(t,r),e&4&&-1<Tw.indexOf(t)){for(;s!==null;){var i=vo(s);if(i!==null&&py(i),i=Nc(t,e,n,r),i===null&&Wu(t,e,r,qa,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Wu(t,e,r,null,n)}}var qa=null;function Nc(t,e,n,r){if(qa=null,t=Fd(r),t=Sr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ay(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function Ey(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fw()){case Ud:return 1;case dy:return 4;case $a:case mw:return 16;case hy:return 536870912;default:return 16}default:return 16}}var qn=null,$d=null,Ta=null;function wy(){if(Ta)return Ta;var t,e=$d,n=e.length,r,s="value"in qn?qn.value:qn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ta=s.slice(t,1<r?1-r:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function Sm(){return!1}function kt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?na:Sm,this.isPropagationStopped=Sm,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=kt(Bs),yo=Ie({},Bs,{view:0,detail:0}),Pw=kt(yo),Vu,Ou,fi,kl=Ie({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fi&&(fi&&t.type==="mousemove"?(Vu=t.screenX-fi.screenX,Ou=t.screenY-fi.screenY):Ou=Vu=0,fi=t),Vu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),Am=kt(kl),kw=Ie({},kl,{dataTransfer:0}),Cw=kt(kw),Rw=Ie({},yo,{relatedTarget:0}),Mu=kt(Rw),Nw=Ie({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),bw=kt(Nw),Dw=Ie({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lw=kt(Dw),Vw=Ie({},Bs,{data:0}),xm=kt(Vw),Ow={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fw[t])?!!e[t]:!1}function Hd(){return Uw}var jw=Ie({},yo,{key:function(t){if(t.key){var e=Ow[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zw=kt(jw),Bw=Ie({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=kt(Bw),$w=Ie({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),Ww=kt($w),Hw=Ie({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),qw=kt(Hw),Gw=Ie({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kw=kt(Gw),Qw=[9,13,27,32],qd=In&&"CompositionEvent"in window,Ri=null;In&&"documentMode"in document&&(Ri=document.documentMode);var Xw=In&&"TextEvent"in window&&!Ri,Ty=In&&(!qd||Ri&&8<Ri&&11>=Ri),km=" ",Cm=!1;function Iy(t,e){switch(t){case"keyup":return Qw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function Yw(t,e){switch(t){case"compositionend":return Sy(e);case"keypress":return e.which!==32?null:(Cm=!0,km);case"textInput":return t=e.data,t===km&&Cm?null:t;default:return null}}function Jw(t,e){if(is)return t==="compositionend"||!qd&&Iy(t,e)?(t=wy(),Ta=$d=qn=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ty&&e.locale!=="ko"?null:e.data;default:return null}}var Zw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zw[t.type]:e==="textarea"}function Ay(t,e,n,r){ny(r),e=Ga(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ni=null,Ki=null;function eT(t){Oy(t,0)}function Cl(t){var e=ls(t);if(Qg(e))return t}function tT(t,e){if(t==="change")return e}var xy=!1;if(In){var Fu;if(In){var Uu="oninput"in document;if(!Uu){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),Uu=typeof Nm.oninput=="function"}Fu=Uu}else Fu=!1;xy=Fu&&(!document.documentMode||9<document.documentMode)}function bm(){Ni&&(Ni.detachEvent("onpropertychange",Py),Ki=Ni=null)}function Py(t){if(t.propertyName==="value"&&Cl(Ki)){var e=[];Ay(e,Ki,t,Fd(t)),oy(eT,e)}}function nT(t,e,n){t==="focusin"?(bm(),Ni=e,Ki=n,Ni.attachEvent("onpropertychange",Py)):t==="focusout"&&bm()}function rT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(Ki)}function sT(t,e){if(t==="click")return Cl(e)}function iT(t,e){if(t==="input"||t==="change")return Cl(e)}function oT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:oT;function Qi(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!fc.call(e,s)||!Kt(t[s],e[s]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=Dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function ky(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ky(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cy(){for(var t=window,e=ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ja(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aT(t){var e=Cy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ky(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Lm(n,i);var o=Lm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lT=In&&"documentMode"in document&&11>=document.documentMode,os=null,bc=null,bi=null,Dc=!1;function Vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dc||os==null||os!==ja(r)||(r=os,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&Qi(bi,r)||(bi=r,r=Ga(bc,"onSelect"),0<r.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=os)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},ju={},Ry={};In&&(Ry=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Rl(t){if(ju[t])return ju[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ry)return ju[t]=e[n];return t}var Ny=Rl("animationend"),by=Rl("animationiteration"),Dy=Rl("animationstart"),Ly=Rl("transitionend"),Vy=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){Vy.set(t,e),$r(e,[t])}for(var zu=0;zu<Om.length;zu++){var Bu=Om[zu],uT=Bu.toLowerCase(),cT=Bu[0].toUpperCase()+Bu.slice(1);hr(uT,"on"+cT)}hr(Ny,"onAnimationEnd");hr(by,"onAnimationIteration");hr(Dy,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(Ly,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dT=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uw(r,e,void 0,t),t.currentTarget=null}function Oy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Mm(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Mm(s,l,d),i=u}}}if(Ba)throw t=kc,Ba=!1,kc=null,t}function ge(t,e){var n=e[Fc];n===void 0&&(n=e[Fc]=new Set);var r=t+"__bubble";n.has(r)||(My(e,t,2,!1),n.add(r))}function $u(t,e,n){var r=0;e&&(r|=4),My(n,t,r,e)}var sa="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[sa]){t[sa]=!0,Wg.forEach(function(n){n!=="selectionchange"&&(dT.has(n)||$u(n,!1,t),$u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sa]||(e[sa]=!0,$u("selectionchange",!1,e))}}function My(t,e,n,r){switch(Ey(e)){case 1:var s=Aw;break;case 4:s=xw;break;default:s=Bd}n=s.bind(null,e,n,t),s=void 0,!Pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Wu(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Sr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}oy(function(){var d=i,m=Fd(n),y=[];e:{var _=Vy.get(t);if(_!==void 0){var P=Wd,N=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":P=zw;break;case"focusin":N="focus",P=Mu;break;case"focusout":N="blur",P=Mu;break;case"beforeblur":case"afterblur":P=Mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Cw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Ww;break;case Ny:case by:case Dy:P=bw;break;case Ly:P=qw;break;case"scroll":P=Pw;break;case"wheel":P=Kw;break;case"copy":case"cut":case"paste":P=Lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Pm}var C=(e&4)!==0,D=!C&&t==="scroll",I=C?_!==null?_+"Capture":null:_;C=[];for(var E=d,A;E!==null;){A=E;var b=A.stateNode;if(A.tag===5&&b!==null&&(A=b,I!==null&&(b=Wi(E,I),b!=null&&C.push(Yi(E,b,A)))),D)break;E=E.return}0<C.length&&(_=new P(_,N,null,n,m),y.push({event:_,listeners:C}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",P=t==="mouseout"||t==="pointerout",_&&n!==Ac&&(N=n.relatedTarget||n.fromElement)&&(Sr(N)||N[Sn]))break e;if((P||_)&&(_=m.window===m?m:(_=m.ownerDocument)?_.defaultView||_.parentWindow:window,P?(N=n.relatedTarget||n.toElement,P=d,N=N?Sr(N):null,N!==null&&(D=Wr(N),N!==D||N.tag!==5&&N.tag!==6)&&(N=null)):(P=null,N=d),P!==N)){if(C=Am,b="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(C=Pm,b="onPointerLeave",I="onPointerEnter",E="pointer"),D=P==null?_:ls(P),A=N==null?_:ls(N),_=new C(b,E+"leave",P,n,m),_.target=D,_.relatedTarget=A,b=null,Sr(m)===d&&(C=new C(I,E+"enter",N,n,m),C.target=A,C.relatedTarget=D,b=C),D=b,P&&N)t:{for(C=P,I=N,E=0,A=C;A;A=Jr(A))E++;for(A=0,b=I;b;b=Jr(b))A++;for(;0<E-A;)C=Jr(C),E--;for(;0<A-E;)I=Jr(I),A--;for(;E--;){if(C===I||I!==null&&C===I.alternate)break t;C=Jr(C),I=Jr(I)}C=null}else C=null;P!==null&&Fm(y,_,P,C,!1),N!==null&&D!==null&&Fm(y,D,N,C,!0)}}e:{if(_=d?ls(d):window,P=_.nodeName&&_.nodeName.toLowerCase(),P==="select"||P==="input"&&_.type==="file")var V=tT;else if(Rm(_))if(xy)V=iT;else{V=rT;var O=nT}else(P=_.nodeName)&&P.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(V=sT);if(V&&(V=V(t,d))){Ay(y,V,n,m);break e}O&&O(t,_,d),t==="focusout"&&(O=_._wrapperState)&&O.controlled&&_.type==="number"&&Ec(_,"number",_.value)}switch(O=d?ls(d):window,t){case"focusin":(Rm(O)||O.contentEditable==="true")&&(os=O,bc=d,bi=null);break;case"focusout":bi=bc=os=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Vm(y,n,m);break;case"selectionchange":if(lT)break;case"keydown":case"keyup":Vm(y,n,m)}var w;if(qd)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else is?Iy(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Ty&&n.locale!=="ko"&&(is||p!=="onCompositionStart"?p==="onCompositionEnd"&&is&&(w=wy()):(qn=m,$d="value"in qn?qn.value:qn.textContent,is=!0)),O=Ga(d,p),0<O.length&&(p=new xm(p,t,null,n,m),y.push({event:p,listeners:O}),w?p.data=w:(w=Sy(n),w!==null&&(p.data=w)))),(w=Xw?Yw(t,n):Jw(t,n))&&(d=Ga(d,"onBeforeInput"),0<d.length&&(m=new xm("onBeforeInput","beforeinput",null,n,m),y.push({event:m,listeners:d}),m.data=w))}Oy(y,e)})}function Yi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ga(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Wi(t,n),i!=null&&r.unshift(Yi(t,i,s)),i=Wi(t,e),i!=null&&r.push(Yi(t,i,s))),t=t.return}return r}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=Wi(n,i),u!=null&&o.unshift(Yi(n,u,l))):s||(u=Wi(n,i),u!=null&&o.push(Yi(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hT=/\r\n?/g,fT=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(hT,`
`).replace(fT,"")}function ia(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error(U(425))}function Ka(){}var Lc=null,Vc=null;function Oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,mT=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,pT=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(t){return jm.resolve(null).then(t).catch(gT)}:Mc;function gT(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Gi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Gi(e)}function Jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Zt="__reactFiber$"+$s,Ji="__reactProps$"+$s,Sn="__reactContainer$"+$s,Fc="__reactEvents$"+$s,yT="__reactListeners$"+$s,vT="__reactHandles$"+$s;function Sr(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zm(t);t!==null;){if(n=t[Zt])return n;t=zm(t)}return e}t=n,n=t.parentNode}return null}function vo(t){return t=t[Zt]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Nl(t){return t[Ji]||null}var Uc=[],us=-1;function fr(t){return{current:t}}function ye(t){0>us||(t.current=Uc[us],Uc[us]=null,us--)}function me(t,e){us++,Uc[us]=t.current,t.current=e}var lr={},ot=fr(lr),yt=fr(!1),Nr=lr;function Ps(t,e){var n=t.type.contextTypes;if(!n)return lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function vt(t){return t=t.childContextTypes,t!=null}function Qa(){ye(yt),ye(ot)}function Bm(t,e,n){if(ot.current!==lr)throw Error(U(168));me(ot,e),me(yt,n)}function Fy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,nw(t)||"Unknown",s));return Ie({},n,r)}function Xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Nr=ot.current,me(ot,t),me(yt,yt.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Fy(t,e,Nr),r.__reactInternalMemoizedMergedChildContext=t,ye(yt),ye(ot),me(ot,t)):ye(yt),me(yt,n)}var fn=null,bl=!1,qu=!1;function Uy(t){fn===null?fn=[t]:fn.push(t)}function _T(t){bl=!0,Uy(t)}function mr(){if(!qu&&fn!==null){qu=!0;var t=0,e=ce;try{var n=fn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,bl=!1}catch(s){throw fn!==null&&(fn=fn.slice(t+1)),cy(Ud,mr),s}finally{ce=e,qu=!1}}return null}var cs=[],ds=0,Ya=null,Ja=0,Nt=[],bt=0,br=null,mn=1,pn="";function wr(t,e){cs[ds++]=Ja,cs[ds++]=Ya,Ya=t,Ja=e}function jy(t,e,n){Nt[bt++]=mn,Nt[bt++]=pn,Nt[bt++]=br,br=t;var r=mn;t=pn;var s=32-qt(r)-1;r&=~(1<<s),n+=1;var i=32-qt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,mn=1<<32-qt(e)+s|n<<s|r,pn=i+t}else mn=1<<i|n<<s|r,pn=t}function Kd(t){t.return!==null&&(wr(t,1),jy(t,1,0))}function Qd(t){for(;t===Ya;)Ya=cs[--ds],cs[ds]=null,Ja=cs[--ds],cs[ds]=null;for(;t===br;)br=Nt[--bt],Nt[bt]=null,pn=Nt[--bt],Nt[bt]=null,mn=Nt[--bt],Nt[bt]=null}var It=null,Tt=null,ve=!1,Wt=null;function zy(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,Tt=Jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:mn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,It=t,Tt=null,!0):!1;default:return!1}}function jc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zc(t){if(ve){var e=Tt;if(e){var n=e;if(!Wm(t,e)){if(jc(t))throw Error(U(418));e=Jn(n.nextSibling);var r=It;e&&Wm(t,e)?zy(r,n):(t.flags=t.flags&-4097|2,ve=!1,It=t)}}else{if(jc(t))throw Error(U(418));t.flags=t.flags&-4097|2,ve=!1,It=t}}}function Hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function oa(t){if(t!==It)return!1;if(!ve)return Hm(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oc(t.type,t.memoizedProps)),e&&(e=Tt)){if(jc(t))throw By(),Error(U(418));for(;e;)zy(t,e),e=Jn(e.nextSibling)}if(Hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=Jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=It?Jn(t.stateNode.nextSibling):null;return!0}function By(){for(var t=Tt;t;)t=Jn(t.nextSibling)}function ks(){Tt=It=null,ve=!1}function Xd(t){Wt===null?Wt=[t]:Wt.push(t)}var ET=Nn.ReactCurrentBatchConfig;function mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function aa(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function $y(t){function e(I,E){if(t){var A=I.deletions;A===null?(I.deletions=[E],I.flags|=16):A.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function s(I,E){return I=nr(I,E),I.index=0,I.sibling=null,I}function i(I,E,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<E?(I.flags|=2,E):A):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,A,b){return E===null||E.tag!==6?(E=Zu(A,I.mode,b),E.return=I,E):(E=s(E,A),E.return=I,E)}function u(I,E,A,b){var V=A.type;return V===ss?m(I,E,A.props.children,b,A.key):E!==null&&(E.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Fn&&qm(V)===E.type)?(b=s(E,A.props),b.ref=mi(I,E,A),b.return=I,b):(b=Ra(A.type,A.key,A.props,null,I.mode,b),b.ref=mi(I,E,A),b.return=I,b)}function d(I,E,A,b){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=ec(A,I.mode,b),E.return=I,E):(E=s(E,A.children||[]),E.return=I,E)}function m(I,E,A,b,V){return E===null||E.tag!==7?(E=Cr(A,I.mode,b,V),E.return=I,E):(E=s(E,A),E.return=I,E)}function y(I,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Zu(""+E,I.mode,A),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Xo:return A=Ra(E.type,E.key,E.props,null,I.mode,A),A.ref=mi(I,null,E),A.return=I,A;case rs:return E=ec(E,I.mode,A),E.return=I,E;case Fn:var b=E._init;return y(I,b(E._payload),A)}if(_i(E)||ui(E))return E=Cr(E,I.mode,A,null),E.return=I,E;aa(I,E)}return null}function _(I,E,A,b){var V=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return V!==null?null:l(I,E,""+A,b);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Xo:return A.key===V?u(I,E,A,b):null;case rs:return A.key===V?d(I,E,A,b):null;case Fn:return V=A._init,_(I,E,V(A._payload),b)}if(_i(A)||ui(A))return V!==null?null:m(I,E,A,b,null);aa(I,A)}return null}function P(I,E,A,b,V){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(A)||null,l(E,I,""+b,V);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Xo:return I=I.get(b.key===null?A:b.key)||null,u(E,I,b,V);case rs:return I=I.get(b.key===null?A:b.key)||null,d(E,I,b,V);case Fn:var O=b._init;return P(I,E,A,O(b._payload),V)}if(_i(b)||ui(b))return I=I.get(A)||null,m(E,I,b,V,null);aa(E,b)}return null}function N(I,E,A,b){for(var V=null,O=null,w=E,p=E=0,v=null;w!==null&&p<A.length;p++){w.index>p?(v=w,w=null):v=w.sibling;var S=_(I,w,A[p],b);if(S===null){w===null&&(w=v);break}t&&w&&S.alternate===null&&e(I,w),E=i(S,E,p),O===null?V=S:O.sibling=S,O=S,w=v}if(p===A.length)return n(I,w),ve&&wr(I,p),V;if(w===null){for(;p<A.length;p++)w=y(I,A[p],b),w!==null&&(E=i(w,E,p),O===null?V=w:O.sibling=w,O=w);return ve&&wr(I,p),V}for(w=r(I,w);p<A.length;p++)v=P(w,I,p,A[p],b),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?p:v.key),E=i(v,E,p),O===null?V=v:O.sibling=v,O=v);return t&&w.forEach(function(x){return e(I,x)}),ve&&wr(I,p),V}function C(I,E,A,b){var V=ui(A);if(typeof V!="function")throw Error(U(150));if(A=V.call(A),A==null)throw Error(U(151));for(var O=V=null,w=E,p=E=0,v=null,S=A.next();w!==null&&!S.done;p++,S=A.next()){w.index>p?(v=w,w=null):v=w.sibling;var x=_(I,w,S.value,b);if(x===null){w===null&&(w=v);break}t&&w&&x.alternate===null&&e(I,w),E=i(x,E,p),O===null?V=x:O.sibling=x,O=x,w=v}if(S.done)return n(I,w),ve&&wr(I,p),V;if(w===null){for(;!S.done;p++,S=A.next())S=y(I,S.value,b),S!==null&&(E=i(S,E,p),O===null?V=S:O.sibling=S,O=S);return ve&&wr(I,p),V}for(w=r(I,w);!S.done;p++,S=A.next())S=P(w,I,p,S.value,b),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?p:S.key),E=i(S,E,p),O===null?V=S:O.sibling=S,O=S);return t&&w.forEach(function(k){return e(I,k)}),ve&&wr(I,p),V}function D(I,E,A,b){if(typeof A=="object"&&A!==null&&A.type===ss&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Xo:e:{for(var V=A.key,O=E;O!==null;){if(O.key===V){if(V=A.type,V===ss){if(O.tag===7){n(I,O.sibling),E=s(O,A.props.children),E.return=I,I=E;break e}}else if(O.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Fn&&qm(V)===O.type){n(I,O.sibling),E=s(O,A.props),E.ref=mi(I,O,A),E.return=I,I=E;break e}n(I,O);break}else e(I,O);O=O.sibling}A.type===ss?(E=Cr(A.props.children,I.mode,b,A.key),E.return=I,I=E):(b=Ra(A.type,A.key,A.props,null,I.mode,b),b.ref=mi(I,E,A),b.return=I,I=b)}return o(I);case rs:e:{for(O=A.key;E!==null;){if(E.key===O)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(I,E.sibling),E=s(E,A.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=ec(A,I.mode,b),E.return=I,I=E}return o(I);case Fn:return O=A._init,D(I,E,O(A._payload),b)}if(_i(A))return N(I,E,A,b);if(ui(A))return C(I,E,A,b);aa(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(I,E.sibling),E=s(E,A),E.return=I,I=E):(n(I,E),E=Zu(A,I.mode,b),E.return=I,I=E),o(I)):n(I,E)}return D}var Cs=$y(!0),Wy=$y(!1),Za=fr(null),el=null,hs=null,Yd=null;function Jd(){Yd=hs=el=null}function Zd(t){var e=Za.current;ye(Za),t._currentValue=e}function Bc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){el=t,Yd=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(Yd!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(el===null)throw Error(U(308));hs=t,el.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var Ar=null;function eh(t){Ar===null?Ar=[t]:Ar.push(t)}function Hy(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,eh(e)):(n.next=s.next,s.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Un=!1;function th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,An(t,n)}return s=r.interleaved,s===null?(e.next=e,eh(r)):(e.next=s.next,s.next=e),r.interleaved=e,An(t,n)}function Sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jd(t,n)}}function Gm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,r){var s=t.updateQueue;Un=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=u))}if(i!==null){var y=s.baseState;o=0,m=d=u=null,l=i;do{var _=l.lane,P=l.eventTime;if((r&_)===_){m!==null&&(m=m.next={eventTime:P,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,C=l;switch(_=e,P=n,C.tag){case 1:if(N=C.payload,typeof N=="function"){y=N.call(P,y,_);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=C.payload,_=typeof N=="function"?N.call(P,y,_):N,_==null)break e;y=Ie({},y,_);break e;case 2:Un=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[l]:_.push(l))}else P={eventTime:P,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=P,u=y):m=m.next=P,o|=_;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;_=l,l=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(m===null&&(u=y),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=y}}function Km(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var _o={},nn=fr(_o),Zi=fr(_o),eo=fr(_o);function xr(t){if(t===_o)throw Error(U(174));return t}function nh(t,e){switch(me(eo,e),me(Zi,t),me(nn,_o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tc(e,t)}ye(nn),me(nn,e)}function Rs(){ye(nn),ye(Zi),ye(eo)}function Gy(t){xr(eo.current);var e=xr(nn.current),n=Tc(e,t.type);e!==n&&(me(Zi,t),me(nn,n))}function rh(t){Zi.current===t&&(ye(nn),ye(Zi))}var we=fr(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function sh(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var Aa=Nn.ReactCurrentDispatcher,Ku=Nn.ReactCurrentBatchConfig,Dr=0,Te=null,Le=null,Ue=null,rl=!1,Di=!1,to=0,wT=0;function et(){throw Error(U(321))}function ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function oh(t,e,n,r,s,i){if(Dr=i,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?AT:xT,t=n(r,s),Di){i=0;do{if(Di=!1,to=0,25<=i)throw Error(U(301));i+=1,Ue=Le=null,e.updateQueue=null,Aa.current=PT,t=n(r,s)}while(Di)}if(Aa.current=sl,e=Le!==null&&Le.next!==null,Dr=0,Ue=Le=Te=null,rl=!1,e)throw Error(U(300));return t}function ah(){var t=to!==0;return to=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Te.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Mt(){if(Le===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=Ue===null?Te.memoizedState:Ue.next;if(e!==null)Ue=e,Le=t;else{if(t===null)throw Error(U(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ue===null?Te.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function no(t,e){return typeof e=="function"?e(t):e}function Qu(t){var e=Mt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Le,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var m=d.lane;if((Dr&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var y={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,Te.lanes|=m,Lr|=m}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,Kt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Te.lanes|=i,Lr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xu(t){var e=Mt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Kt(i,e.memoizedState)||(pt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Ky(){}function Qy(t,e){var n=Te,r=Mt(),s=e(),i=!Kt(r.memoizedState,s);if(i&&(r.memoizedState=s,pt=!0),r=r.queue,lh(Jy.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,ro(9,Yy.bind(null,n,r,s,e),void 0,null),je===null)throw Error(U(349));Dr&30||Xy(n,e,s)}return s}function Xy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yy(t,e,n,r){e.value=n,e.getSnapshot=r,Zy(e)&&ev(t)}function Jy(t,e,n){return n(function(){Zy(e)&&ev(t)})}function Zy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function ev(t){var e=An(t,1);e!==null&&Gt(e,t,1,-1)}function Qm(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:t},e.queue=t,t=t.dispatch=ST.bind(null,Te,t),[e.memoizedState,t]}function ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tv(){return Mt().memoizedState}function xa(t,e,n,r){var s=Jt();Te.flags|=t,s.memoizedState=ro(1|e,n,void 0,r===void 0?null:r)}function Dl(t,e,n,r){var s=Mt();r=r===void 0?null:r;var i=void 0;if(Le!==null){var o=Le.memoizedState;if(i=o.destroy,r!==null&&ih(r,o.deps)){s.memoizedState=ro(e,n,i,r);return}}Te.flags|=t,s.memoizedState=ro(1|e,n,i,r)}function Xm(t,e){return xa(8390656,8,t,e)}function lh(t,e){return Dl(2048,8,t,e)}function nv(t,e){return Dl(4,2,t,e)}function rv(t,e){return Dl(4,4,t,e)}function sv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iv(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4,4,sv.bind(null,e,t),n)}function uh(){}function ov(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ih(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function av(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ih(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lv(t,e,n){return Dr&21?(Kt(n,e)||(n=fy(),Te.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function TT(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Ku.transition;Ku.transition={};try{t(!1),e()}finally{ce=n,Ku.transition=r}}function uv(){return Mt().memoizedState}function IT(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cv(t))dv(e,n);else if(n=Hy(t,e,n,r),n!==null){var s=dt();Gt(n,t,r,s),hv(n,e,r)}}function ST(t,e,n){var r=tr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cv(t))dv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Kt(l,o)){var u=e.interleaved;u===null?(s.next=s,eh(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Hy(t,e,s,r),n!==null&&(s=dt(),Gt(n,t,r,s),hv(n,e,r))}}function cv(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function dv(t,e){Di=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jd(t,n)}}var sl={readContext:Ot,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},AT={readContext:Ot,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:Xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xa(4194308,4,sv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return xa(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=IT.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:uh,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=TT.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,s=Jt();if(ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),je===null)throw Error(U(349));Dr&30||Xy(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Xm(Jy.bind(null,r,i,t),[t]),r.flags|=2048,ro(9,Yy.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Jt(),e=je.identifierPrefix;if(ve){var n=pn,r=mn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=to++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xT={readContext:Ot,useCallback:ov,useContext:Ot,useEffect:lh,useImperativeHandle:iv,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:av,useReducer:Qu,useRef:tv,useState:function(){return Qu(no)},useDebugValue:uh,useDeferredValue:function(t){var e=Mt();return lv(e,Le.memoizedState,t)},useTransition:function(){var t=Qu(no)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:Ky,useSyncExternalStore:Qy,useId:uv,unstable_isNewReconciler:!1},PT={readContext:Ot,useCallback:ov,useContext:Ot,useEffect:lh,useImperativeHandle:iv,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:av,useReducer:Xu,useRef:tv,useState:function(){return Xu(no)},useDebugValue:uh,useDeferredValue:function(t){var e=Mt();return Le===null?e.memoizedState=t:lv(e,Le.memoizedState,t)},useTransition:function(){var t=Xu(no)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:Ky,useSyncExternalStore:Qy,useId:uv,unstable_isNewReconciler:!1};function Bt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $c(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),s=tr(t),i=_n(r,s);i.payload=e,n!=null&&(i.callback=n),e=Zn(t,i,s),e!==null&&(Gt(e,t,s,r),Sa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),s=tr(t),i=_n(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Zn(t,i,s),e!==null&&(Gt(e,t,s,r),Sa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=tr(t),s=_n(n,r);s.tag=2,e!=null&&(s.callback=e),e=Zn(t,s,r),e!==null&&(Gt(e,t,r,n),Sa(e,t,r))}};function Ym(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Qi(n,r)||!Qi(s,i):!0}function fv(t,e,n){var r=!1,s=lr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ot(i):(s=vt(e)?Nr:ot.current,r=e.contextTypes,i=(r=r!=null)?Ps(t,s):lr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function Wc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},th(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ot(i):(i=vt(e)?Nr:ot.current,s.context=Ps(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&($c(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ll.enqueueReplaceState(s,s.state,null),tl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",r=e;do n+=tw(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kT=typeof WeakMap=="function"?WeakMap:Map;function mv(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ol||(ol=!0,td=r),Hc(t,e)},n}function pv(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Hc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hc(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=BT.bind(null,t,e,n),e.then(t,t))}function ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tp(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var CT=Nn.ReactCurrentOwner,pt=!1;function ct(t,e,n,r){e.child=t===null?Wy(e,null,n,r):Cs(e,t.child,n,r)}function np(t,e,n,r,s){n=n.render;var i=e.ref;return Es(e,s),r=oh(t,e,n,r,i,s),n=ah(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,xn(t,e,s)):(ve&&n&&Kd(e),e.flags|=1,ct(t,e,r,s),e.child)}function rp(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!yh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,gv(t,e,i,r,s)):(t=Ra(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(o,r)&&t.ref===e.ref)return xn(t,e,s)}return e.flags|=1,t=nr(i,r),t.ref=e.ref,t.return=e,e.child=t}function gv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Qi(i,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,xn(t,e,s)}return qc(t,e,n,r,s)}function yv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ms,wt),wt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(ms,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(ms,wt),wt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,me(ms,wt),wt|=r;return ct(t,e,s,n),e.child}function vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qc(t,e,n,r,s){var i=vt(n)?Nr:ot.current;return i=Ps(e,i),Es(e,s),n=oh(t,e,n,r,i,s),r=ah(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,xn(t,e,s)):(ve&&r&&Kd(e),e.flags|=1,ct(t,e,n,s),e.child)}function sp(t,e,n,r,s){if(vt(n)){var i=!0;Xa(e)}else i=!1;if(Es(e,s),e.stateNode===null)Pa(t,e),fv(e,n,r),Wc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ot(d):(d=vt(n)?Nr:ot.current,d=Ps(e,d));var m=n.getDerivedStateFromProps,y=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Jm(e,o,r,d),Un=!1;var _=e.memoizedState;o.state=_,tl(e,r,o,s),u=e.memoizedState,l!==r||_!==u||yt.current||Un?(typeof m=="function"&&($c(e,n,m,r),u=e.memoizedState),(l=Un||Ym(e,n,l,r,_,u,d))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qy(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Bt(e.type,l),o.props=d,y=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=vt(n)?Nr:ot.current,u=Ps(e,u));var P=n.getDerivedStateFromProps;(m=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||_!==u)&&Jm(e,o,r,u),Un=!1,_=e.memoizedState,o.state=_,tl(e,r,o,s);var N=e.memoizedState;l!==y||_!==N||yt.current||Un?(typeof P=="function"&&($c(e,n,P,r),N=e.memoizedState),(d=Un||Ym(e,n,d,r,_,N,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Gc(t,e,n,r,i,s)}function Gc(t,e,n,r,s,i){vv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&$m(e,n,!1),xn(t,e,i);r=e.stateNode,CT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Cs(e,t.child,null,i),e.child=Cs(e,null,l,i)):ct(t,e,l,i),e.memoizedState=r.state,s&&$m(e,n,!0),e.child}function _v(t){var e=t.stateNode;e.pendingContext?Bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bm(t,e.context,!1),nh(t,e.containerInfo)}function ip(t,e,n,r,s){return ks(),Xd(s),e.flags|=256,ct(t,e,n,r),e.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ev(t,e,n){var r=e.pendingProps,s=we.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),me(we,s&1),t===null)return zc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ml(o,r,0,null),t=Cr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Qc(n),e.memoizedState=Kc,t):ch(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return RT(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=nr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=nr(l,i):(i=Cr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Qc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Kc,r}return i=t.child,t=i.sibling,r=nr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ch(t,e){return e=Ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function la(t,e,n,r){return r!==null&&Xd(r),Cs(e,t.child,null,n),t=ch(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Yu(Error(U(422))),la(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Ml({mode:"visible",children:r.children},s,0,null),i=Cr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Cs(e,t.child,null,o),e.child.memoizedState=Qc(o),e.memoizedState=Kc,i);if(!(e.mode&1))return la(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=Yu(i,r,void 0),la(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=je,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,An(t,s),Gt(r,t,s,-1))}return gh(),r=Yu(Error(U(421))),la(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=$T.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Tt=Jn(s.nextSibling),It=e,ve=!0,Wt=null,t!==null&&(Nt[bt++]=mn,Nt[bt++]=pn,Nt[bt++]=br,mn=t.id,pn=t.overflow,br=e),e=ch(e,r.children),e.flags|=4096,e)}function op(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bc(t.return,e,n)}function Ju(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function wv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ct(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,n,e);else if(t.tag===19)op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(we,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ju(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&nl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ju(e,!0,n,null,i);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NT(t,e,n){switch(e.tag){case 3:_v(e),ks();break;case 5:Gy(e);break;case 1:vt(e.type)&&Xa(e);break;case 4:nh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;me(Za,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?Ev(t,e,n):(me(we,we.current&1),t=xn(t,e,n),t!==null?t.sibling:null);me(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),me(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,yv(t,e,n)}return xn(t,e,n)}var Tv,Xc,Iv,Sv;Tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xc=function(){};Iv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,xr(nn.current);var i=null;switch(n){case"input":s=vc(t,s),r=vc(t,r),i=[];break;case"select":s=Ie({},s,{value:void 0}),r=Ie({},r,{value:void 0}),i=[];break;case"textarea":s=wc(t,s),r=wc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ka)}Ic(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Bi.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Bi.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ge("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};Sv=function(t,e,n,r){n!==r&&(e.flags|=4)};function pi(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bT(t,e,n){var r=e.pendingProps;switch(Qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return vt(e.type)&&Qa(),tt(e),null;case 3:return r=e.stateNode,Rs(),ye(yt),ye(ot),sh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(sd(Wt),Wt=null))),Xc(t,e),tt(e),null;case 5:rh(e);var s=xr(eo.current);if(n=e.type,t!==null&&e.stateNode!=null)Iv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return tt(e),null}if(t=xr(nn.current),oa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Zt]=e,r[Ji]=i,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(s=0;s<wi.length;s++)ge(wi[s],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":pm(r,i),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ge("invalid",r);break;case"textarea":ym(r,i),ge("invalid",r)}Ic(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ia(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ia(r.textContent,l,t),s=["children",""+l]):Bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Yo(r),gm(r,i,!0);break;case"textarea":Yo(r),vm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ka)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[Ji]=r,Tv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sc(n,r),n){case"dialog":ge("cancel",t),ge("close",t),s=r;break;case"iframe":case"object":case"embed":ge("load",t),s=r;break;case"video":case"audio":for(s=0;s<wi.length;s++)ge(wi[s],t);s=r;break;case"source":ge("error",t),s=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),s=r;break;case"details":ge("toggle",t),s=r;break;case"input":pm(t,r),s=vc(t,r),ge("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ie({},r,{value:void 0}),ge("invalid",t);break;case"textarea":ym(t,r),s=wc(t,r),ge("invalid",t);break;default:s=r}Ic(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?ty(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Zg(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$i(t,u):typeof u=="number"&&$i(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ge("scroll",t):u!=null&&Ld(t,i,u,o))}switch(n){case"input":Yo(t),gm(t,r,!1);break;case"textarea":Yo(t),vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ar(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?gs(t,!!r.multiple,i,!1):r.defaultValue!=null&&gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)Sv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=xr(eo.current),xr(nn.current),oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(i=r.nodeValue!==n)&&(t=It,t!==null))switch(t.tag){case 3:ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ia(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return tt(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Tt!==null&&e.mode&1&&!(e.flags&128))By(),ks(),e.flags|=98560,i=!1;else if(i=oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[Zt]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),i=!1}else Wt!==null&&(sd(Wt),Wt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Oe===0&&(Oe=3):gh())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return Rs(),Xc(t,e),t===null&&Xi(e.stateNode.containerInfo),tt(e),null;case 10:return Zd(e.type._context),tt(e),null;case 17:return vt(e.type)&&Qa(),tt(e),null;case 19:if(ye(we),i=e.memoizedState,i===null)return tt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)pi(i,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,pi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(we,we.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ce()>bs&&(e.flags|=128,r=!0,pi(i,!1),e.lanes=4194304)}else{if(!r)if(t=nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ve)return tt(e),null}else 2*Ce()-i.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,r=!0,pi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ce(),e.sibling=null,n=we.current,me(we,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return ph(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function DT(t,e){switch(Qd(e),e.tag){case 1:return vt(e.type)&&Qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),ye(yt),ye(ot),sh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rh(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return Rs(),null;case 10:return Zd(e.type._context),null;case 22:case 23:return ph(),null;case 24:return null;default:return null}}var ua=!1,st=!1,LT=typeof WeakSet=="function"?WeakSet:Set,H=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function Yc(t,e,n){try{n()}catch(r){xe(t,e,r)}}var ap=!1;function VT(t,e){if(Lc=Ha,t=Cy(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,m=0,y=t,_=null;t:for(;;){for(var P;y!==n||s!==0&&y.nodeType!==3||(l=o+s),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(P=y.firstChild)!==null;)_=y,y=P;for(;;){if(y===t)break t;if(_===n&&++d===s&&(l=o),_===i&&++m===r&&(u=o),(P=y.nextSibling)!==null)break;y=_,_=y.parentNode}y=P}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vc={focusedElem:t,selectionRange:n},Ha=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var C=N.memoizedProps,D=N.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?C:Bt(e.type,C),D);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){xe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return N=ap,ap=!1,N}function Li(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Yc(e,n,i)}s=s.next}while(s!==r)}}function Vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Av(t){var e=t.alternate;e!==null&&(t.alternate=null,Av(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[Ji],delete e[Fc],delete e[yT],delete e[vT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xv(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ka));else if(r!==4&&(t=t.child,t!==null))for(Zc(t,e,n),t=t.sibling;t!==null;)Zc(t,e,n),t=t.sibling}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var Be=null,$t=!1;function On(t,e,n){for(n=n.child;n!==null;)Pv(t,e,n),n=n.sibling}function Pv(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:st||fs(n,e);case 6:var r=Be,s=$t;Be=null,On(t,e,n),Be=r,$t=s,Be!==null&&($t?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&($t?(t=Be,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),Gi(t)):Hu(Be,n.stateNode));break;case 4:r=Be,s=$t,Be=n.stateNode.containerInfo,$t=!0,On(t,e,n),Be=r,$t=s;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Yc(n,e,o),s=s.next}while(s!==r)}On(t,e,n);break;case 1:if(!st&&(fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}On(t,e,n);break;case 21:On(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,On(t,e,n),st=r):On(t,e,n);break;default:On(t,e,n)}}function up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LT),e.forEach(function(r){var s=WT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,$t=!1;break e;case 3:Be=l.stateNode.containerInfo,$t=!0;break e;case 4:Be=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(Be===null)throw Error(U(160));Pv(i,o,s),Be=null,$t=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){xe(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kv(e,t),e=e.sibling}function kv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),Yt(t),r&4){try{Li(3,t,t.return),Vl(3,t)}catch(C){xe(t,t.return,C)}try{Li(5,t,t.return)}catch(C){xe(t,t.return,C)}}break;case 1:zt(e,t),Yt(t),r&512&&n!==null&&fs(n,n.return);break;case 5:if(zt(e,t),Yt(t),r&512&&n!==null&&fs(n,n.return),t.flags&32){var s=t.stateNode;try{$i(s,"")}catch(C){xe(t,t.return,C)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Xg(s,i),Sc(l,o);var d=Sc(l,i);for(o=0;o<u.length;o+=2){var m=u[o],y=u[o+1];m==="style"?ty(s,y):m==="dangerouslySetInnerHTML"?Zg(s,y):m==="children"?$i(s,y):Ld(s,m,y,d)}switch(l){case"input":_c(s,i);break;case"textarea":Yg(s,i);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var P=i.value;P!=null?gs(s,!!i.multiple,P,!1):_!==!!i.multiple&&(i.defaultValue!=null?gs(s,!!i.multiple,i.defaultValue,!0):gs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ji]=i}catch(C){xe(t,t.return,C)}}break;case 6:if(zt(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(C){xe(t,t.return,C)}}break;case 3:if(zt(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(e.containerInfo)}catch(C){xe(t,t.return,C)}break;case 4:zt(e,t),Yt(t);break;case 13:zt(e,t),Yt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(fh=Ce())),r&4&&up(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(st=(d=st)||m,zt(e,t),st=d):zt(e,t),Yt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(H=t,m=t.child;m!==null;){for(y=H=m;H!==null;){switch(_=H,P=_.child,_.tag){case 0:case 11:case 14:case 15:Li(4,_,_.return);break;case 1:fs(_,_.return);var N=_.stateNode;if(typeof N.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(C){xe(r,n,C)}}break;case 5:fs(_,_.return);break;case 22:if(_.memoizedState!==null){dp(y);continue}}P!==null?(P.return=_,H=P):dp(y)}m=m.sibling}e:for(m=null,y=t;;){if(y.tag===5){if(m===null){m=y;try{s=y.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ey("display",o))}catch(C){xe(t,t.return,C)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(C){xe(t,t.return,C)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:zt(e,t),Yt(t),r&4&&up(t);break;case 21:break;default:zt(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&($i(s,""),r.flags&=-33);var i=lp(t);ed(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lp(t);Zc(t,l,o);break;default:throw Error(U(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OT(t,e,n){H=t,Cv(t)}function Cv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ua;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||st;l=ua;var d=st;if(ua=o,(st=u)&&!d)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?hp(s):u!==null?(u.return=o,H=u):hp(s);for(;i!==null;)H=i,Cv(i),i=i.sibling;H=s,ua=l,st=d}cp(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):cp(t)}}function cp(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||Vl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Km(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Km(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&Gi(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}st||e.flags&512&&Jc(e)}catch(_){xe(e,e.return,_)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function dp(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function hp(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vl(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){xe(e,s,u)}}var i=e.return;try{Jc(e)}catch(u){xe(e,i,u)}break;case 5:var o=e.return;try{Jc(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var MT=Math.ceil,il=Nn.ReactCurrentDispatcher,dh=Nn.ReactCurrentOwner,Vt=Nn.ReactCurrentBatchConfig,ae=0,je=null,De=null,He=0,wt=0,ms=fr(0),Oe=0,so=null,Lr=0,Ol=0,hh=0,Vi=null,mt=null,fh=0,bs=1/0,hn=null,ol=!1,td=null,er=null,ca=!1,Gn=null,al=0,Oi=0,nd=null,ka=-1,Ca=0;function dt(){return ae&6?Ce():ka!==-1?ka:ka=Ce()}function tr(t){return t.mode&1?ae&2&&He!==0?He&-He:ET.transition!==null?(Ca===0&&(Ca=fy()),Ca):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Ey(t.type)),t):1}function Gt(t,e,n,r){if(50<Oi)throw Oi=0,nd=null,Error(U(185));go(t,n,r),(!(ae&2)||t!==je)&&(t===je&&(!(ae&2)&&(Ol|=n),Oe===4&&zn(t,He)),_t(t,r),n===1&&ae===0&&!(e.mode&1)&&(bs=Ce()+500,bl&&mr()))}function _t(t,e){var n=t.callbackNode;Ew(t,e);var r=Wa(t,t===je?He:0);if(r===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?_T(fp.bind(null,t)):Uy(fp.bind(null,t)),pT(function(){!(ae&6)&&mr()}),n=null;else{switch(my(r)){case 1:n=Ud;break;case 4:n=dy;break;case 16:n=$a;break;case 536870912:n=hy;break;default:n=$a}n=Mv(n,Rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rv(t,e){if(ka=-1,Ca=0,ae&6)throw Error(U(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var r=Wa(t,t===je?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ll(t,r);else{e=r;var s=ae;ae|=2;var i=bv();(je!==t||He!==e)&&(hn=null,bs=Ce()+500,kr(t,e));do try{jT();break}catch(l){Nv(t,l)}while(!0);Jd(),il.current=i,ae=s,De!==null?e=0:(je=null,He=0,e=Oe)}if(e!==0){if(e===2&&(s=Cc(t),s!==0&&(r=s,e=rd(t,s))),e===1)throw n=so,kr(t,0),zn(t,r),_t(t,Ce()),n;if(e===6)zn(t,r);else{if(s=t.current.alternate,!(r&30)&&!FT(s)&&(e=ll(t,r),e===2&&(i=Cc(t),i!==0&&(r=i,e=rd(t,i))),e===1))throw n=so,kr(t,0),zn(t,r),_t(t,Ce()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Tr(t,mt,hn);break;case 3:if(zn(t,r),(r&130023424)===r&&(e=fh+500-Ce(),10<e)){if(Wa(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Mc(Tr.bind(null,t,mt,hn),e);break}Tr(t,mt,hn);break;case 4:if(zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-qt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MT(r/1960))-r,10<r){t.timeoutHandle=Mc(Tr.bind(null,t,mt,hn),r);break}Tr(t,mt,hn);break;case 5:Tr(t,mt,hn);break;default:throw Error(U(329))}}}return _t(t,Ce()),t.callbackNode===n?Rv.bind(null,t):null}function rd(t,e){var n=Vi;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=ll(t,e),t!==2&&(e=mt,mt=n,e!==null&&sd(e)),t}function sd(t){mt===null?mt=t:mt.push.apply(mt,t)}function FT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Kt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zn(t,e){for(e&=~hh,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function fp(t){if(ae&6)throw Error(U(327));ws();var e=Wa(t,0);if(!(e&1))return _t(t,Ce()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var r=Cc(t);r!==0&&(e=r,n=rd(t,r))}if(n===1)throw n=so,kr(t,0),zn(t,e),_t(t,Ce()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,mt,hn),_t(t,Ce()),null}function mh(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(bs=Ce()+500,bl&&mr())}}function Vr(t){Gn!==null&&Gn.tag===0&&!(ae&6)&&ws();var e=ae;ae|=1;var n=Vt.transition,r=ce;try{if(Vt.transition=null,ce=1,t)return t()}finally{ce=r,Vt.transition=n,ae=e,!(ae&6)&&mr()}}function ph(){wt=ms.current,ye(ms)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mT(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:Rs(),ye(yt),ye(ot),sh();break;case 5:rh(r);break;case 4:Rs();break;case 13:ye(we);break;case 19:ye(we);break;case 10:Zd(r.type._context);break;case 22:case 23:ph()}n=n.return}if(je=t,De=t=nr(t.current,null),He=wt=e,Oe=0,so=null,hh=Ol=Lr=0,mt=Vi=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ar=null}return t}function Nv(t,e){do{var n=De;try{if(Jd(),Aa.current=sl,rl){for(var r=Te.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}rl=!1}if(Dr=0,Ue=Le=Te=null,Di=!1,to=0,dh.current=null,n===null||n.return===null){Oe=1,so=e,De=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=l,y=m.tag;if(!(m.mode&1)&&(y===0||y===11||y===15)){var _=m.alternate;_?(m.updateQueue=_.updateQueue,m.memoizedState=_.memoizedState,m.lanes=_.lanes):(m.updateQueue=null,m.memoizedState=null)}var P=ep(o);if(P!==null){P.flags&=-257,tp(P,o,l,i,e),P.mode&1&&Zm(i,d,e),e=P,u=d;var N=e.updateQueue;if(N===null){var C=new Set;C.add(u),e.updateQueue=C}else N.add(u);break e}else{if(!(e&1)){Zm(i,d,e),gh();break e}u=Error(U(426))}}else if(ve&&l.mode&1){var D=ep(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),tp(D,o,l,i,e),Xd(Ns(u,l));break e}}i=u=Ns(u,l),Oe!==4&&(Oe=2),Vi===null?Vi=[i]:Vi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=mv(i,u,e);Gm(i,I);break e;case 1:l=u;var E=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(er===null||!er.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=pv(i,l,e);Gm(i,b);break e}}i=i.return}while(i!==null)}Lv(n)}catch(V){e=V,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function bv(){var t=il.current;return il.current=sl,t===null?sl:t}function gh(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),je===null||!(Lr&268435455)&&!(Ol&268435455)||zn(je,He)}function ll(t,e){var n=ae;ae|=2;var r=bv();(je!==t||He!==e)&&(hn=null,kr(t,e));do try{UT();break}catch(s){Nv(t,s)}while(!0);if(Jd(),ae=n,il.current=r,De!==null)throw Error(U(261));return je=null,He=0,Oe}function UT(){for(;De!==null;)Dv(De)}function jT(){for(;De!==null&&!dw();)Dv(De)}function Dv(t){var e=Ov(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?Lv(t):De=e,dh.current=null}function Lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DT(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,De=null;return}}else if(n=bT(n,e,wt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Oe===0&&(Oe=5)}function Tr(t,e,n){var r=ce,s=Vt.transition;try{Vt.transition=null,ce=1,zT(t,e,n,r)}finally{Vt.transition=s,ce=r}return null}function zT(t,e,n,r){do ws();while(Gn!==null);if(ae&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(ww(t,i),t===je&&(De=je=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ca||(ca=!0,Mv($a,function(){return ws(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Vt.transition,Vt.transition=null;var o=ce;ce=1;var l=ae;ae|=4,dh.current=null,VT(t,n),kv(n,t),aT(Vc),Ha=!!Lc,Vc=Lc=null,t.current=n,OT(n),hw(),ae=l,ce=o,Vt.transition=i}else t.current=n;if(ca&&(ca=!1,Gn=t,al=s),i=t.pendingLanes,i===0&&(er=null),pw(n.stateNode),_t(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ol)throw ol=!1,t=td,td=null,t;return al&1&&t.tag!==0&&ws(),i=t.pendingLanes,i&1?t===nd?Oi++:(Oi=0,nd=t):Oi=0,mr(),null}function ws(){if(Gn!==null){var t=my(al),e=Vt.transition,n=ce;try{if(Vt.transition=null,ce=16>t?16:t,Gn===null)var r=!1;else{if(t=Gn,Gn=null,al=0,ae&6)throw Error(U(331));var s=ae;for(ae|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(H=d;H!==null;){var m=H;switch(m.tag){case 0:case 11:case 15:Li(8,m,i)}var y=m.child;if(y!==null)y.return=m,H=y;else for(;H!==null;){m=H;var _=m.sibling,P=m.return;if(Av(m),m===d){H=null;break}if(_!==null){_.return=P,H=_;break}H=P}}}var N=i.alternate;if(N!==null){var C=N.child;if(C!==null){N.child=null;do{var D=C.sibling;C.sibling=null,C=D}while(C!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Li(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,H=I;break e}H=i.return}}var E=t.current;for(H=E;H!==null;){o=H;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,H=A;else e:for(o=E;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vl(9,l)}}catch(V){xe(l,l.return,V)}if(l===o){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(ae=s,mr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Pl,t)}catch{}r=!0}return r}finally{ce=n,Vt.transition=e}}return!1}function mp(t,e,n){e=Ns(n,e),e=mv(t,e,1),t=Zn(t,e,1),e=dt(),t!==null&&(go(t,1,e),_t(t,e))}function xe(t,e,n){if(t.tag===3)mp(t,t,n);else for(;e!==null;){if(e.tag===3){mp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=Ns(n,t),t=pv(e,t,1),e=Zn(e,t,1),t=dt(),e!==null&&(go(e,1,t),_t(e,t));break}}e=e.return}}function BT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(He&n)===n&&(Oe===4||Oe===3&&(He&130023424)===He&&500>Ce()-fh?kr(t,0):hh|=n),_t(t,e)}function Vv(t,e){e===0&&(t.mode&1?(e=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):e=1);var n=dt();t=An(t,e),t!==null&&(go(t,e,n),_t(t,n))}function $T(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vv(t,n)}function WT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),Vv(t,n)}var Ov;Ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,NT(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ve&&e.flags&1048576&&jy(e,Ja,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pa(t,e),t=e.pendingProps;var s=Ps(e,ot.current);Es(e,n),s=oh(null,e,r,t,s,n);var i=ah();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(i=!0,Xa(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,th(e),s.updater=Ll,e.stateNode=s,s._reactInternals=e,Wc(e,r,t,n),e=Gc(null,e,r,!0,i,n)):(e.tag=0,ve&&i&&Kd(e),ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pa(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=qT(r),t=Bt(r,t),s){case 0:e=qc(null,e,r,t,n);break e;case 1:e=sp(null,e,r,t,n);break e;case 11:e=np(null,e,r,t,n);break e;case 14:e=rp(null,e,r,Bt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),qc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),sp(t,e,r,s,n);case 3:e:{if(_v(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,qy(t,e),tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ns(Error(U(423)),e),e=ip(t,e,r,n,s);break e}else if(r!==s){s=Ns(Error(U(424)),e),e=ip(t,e,r,n,s);break e}else for(Tt=Jn(e.stateNode.containerInfo.firstChild),It=e,ve=!0,Wt=null,n=Wy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),r===s){e=xn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return Gy(e),t===null&&zc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Oc(r,s)?o=null:i!==null&&Oc(r,i)&&(e.flags|=32),vv(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&zc(e),null;case 13:return Ev(t,e,n);case 4:return nh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Cs(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),np(t,e,r,s,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,me(Za,r._currentValue),r._currentValue=o,i!==null)if(Kt(i.value,o)){if(i.children===s.children&&!yt.current){e=xn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=_n(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Bc(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Bc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Es(e,n),s=Ot(s),r=r(s),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,s=Bt(r,e.pendingProps),s=Bt(r.type,s),rp(t,e,r,s,n);case 15:return gv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Bt(r,s),Pa(t,e),e.tag=1,vt(r)?(t=!0,Xa(e)):t=!1,Es(e,n),fv(e,r,s),Wc(e,r,s,n),Gc(null,e,r,!0,t,n);case 19:return wv(t,e,n);case 22:return yv(t,e,n)}throw Error(U(156,e.tag))};function Mv(t,e){return cy(t,e)}function HT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new HT(t,e,n,r)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qT(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Od)return 11;if(t===Md)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ra(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")yh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ss:return Cr(n.children,s,i,e);case Vd:o=8,s|=8;break;case mc:return t=Lt(12,n,e,s|2),t.elementType=mc,t.lanes=i,t;case pc:return t=Lt(13,n,e,s),t.elementType=pc,t.lanes=i,t;case gc:return t=Lt(19,n,e,s),t.elementType=gc,t.lanes=i,t;case Gg:return Ml(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hg:o=10;break e;case qg:o=9;break e;case Od:o=11;break e;case Md:o=14;break e;case Fn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Cr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Ml(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=Gg,t.lanes=n,t.stateNode={isHidden:!1},t}function Zu(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function ec(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lu(0),this.expirationTimes=Lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function vh(t,e,n,r,s,i,o,l,u){return t=new GT(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Lt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(i),t}function KT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fv(t){if(!t)return lr;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(vt(n))return Fy(t,n,e)}return e}function Uv(t,e,n,r,s,i,o,l,u){return t=vh(n,r,!0,t,s,i,o,l,u),t.context=Fv(null),n=t.current,r=dt(),s=tr(n),i=_n(r,s),i.callback=e??null,Zn(n,i,s),t.current.lanes=s,go(t,s,r),_t(t,r),t}function Fl(t,e,n,r){var s=e.current,i=dt(),o=tr(s);return n=Fv(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(s,e,o),t!==null&&(Gt(t,s,o,i),Sa(t,s,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _h(t,e){pp(t,e),(t=t.alternate)&&pp(t,e)}function QT(){return null}var jv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eh(t){this._internalRoot=t}Ul.prototype.render=Eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Fl(t,e,null,null)};Ul.prototype.unmount=Eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Fl(null,t,null,null)}),e[Sn]=null}};function Ul(t){this._internalRoot=t}Ul.prototype.unstable_scheduleHydration=function(t){if(t){var e=yy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&_y(t)}};function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function XT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=ul(o);i.call(d)}}var o=Uv(e,r,t,0,null,!1,!1,"",gp);return t._reactRootContainer=o,t[Sn]=o.current,Xi(t.nodeType===8?t.parentNode:t),Vr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=ul(u);l.call(d)}}var u=vh(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=u,t[Sn]=u.current,Xi(t.nodeType===8?t.parentNode:t),Vr(function(){Fl(e,u,n,r)}),u}function zl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=ul(o);l.call(u)}}Fl(e,o,t,s)}else o=XT(n,e,t,s,r);return ul(o)}py=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ei(e.pendingLanes);n!==0&&(jd(e,n|1),_t(e,Ce()),!(ae&6)&&(bs=Ce()+500,mr()))}break;case 13:Vr(function(){var r=An(t,1);if(r!==null){var s=dt();Gt(r,t,1,s)}}),_h(t,1)}};zd=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=dt();Gt(e,t,134217728,n)}_h(t,134217728)}};gy=function(t){if(t.tag===13){var e=tr(t),n=An(t,e);if(n!==null){var r=dt();Gt(n,t,e,r)}_h(t,e)}};yy=function(){return ce};vy=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};xc=function(t,e,n){switch(e){case"input":if(_c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Nl(r);if(!s)throw Error(U(90));Qg(r),_c(r,s)}}}break;case"textarea":Yg(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};sy=mh;iy=Vr;var YT={usingClientEntryPoint:!1,Events:[vo,ls,Nl,ny,ry,mh]},gi={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JT={bundleType:gi.bundleType,version:gi.version,rendererPackageName:gi.rendererPackageName,rendererConfig:gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ly(t),t===null?null:t.stateNode},findFiberByHostInstance:gi.findFiberByHostInstance||QT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!da.isDisabled&&da.supportsFiber)try{Pl=da.inject(JT),tn=da}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YT;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(e))throw Error(U(200));return KT(t,e,null,n)};Pt.createRoot=function(t,e){if(!wh(t))throw Error(U(299));var n=!1,r="",s=jv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=vh(t,1,!1,null,null,n,!1,r,s),t[Sn]=e.current,Xi(t.nodeType===8?t.parentNode:t),new Eh(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=ly(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Vr(t)};Pt.hydrate=function(t,e,n){if(!jl(e))throw Error(U(200));return zl(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!wh(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=jv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Uv(e,null,t,1,n??null,s,!1,i,o),t[Sn]=e.current,Xi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ul(e)};Pt.render=function(t,e,n){if(!jl(e))throw Error(U(200));return zl(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!jl(t))throw Error(U(40));return t._reactRootContainer?(Vr(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};Pt.unstable_batchedUpdates=mh;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jl(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return zl(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zv)}catch(t){console.error(t)}}zv(),zg.exports=Pt;var ZT=zg.exports,yp=ZT;hc.createRoot=yp.createRoot,hc.hydrateRoot=yp.hydrateRoot;var vp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,m=i>>2,y=(i&3)<<4|l>>4;let _=(l&15)<<2|d>>6,P=d&63;u||(P=64,o||(_=64)),r.push(n[m],n[y],n[_],n[P])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||y==null)throw new tI;const _=i<<2|l>>4;if(r.push(_),d!==64){const P=l<<4&240|d>>2;if(r.push(P),y!==64){const N=d<<6&192|y;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(t){const e=Bv(t);return $v.encodeByteArray(e,!0)},cl=function(t){return nI(t).replace(/\./g,"")},Wv=function(t){try{return $v.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=()=>rI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof vp>"u")return;const t=vp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wv(t[1]);return e&&JSON.parse(e)},Bl=()=>{try{return sI()||iI()||oI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hv=t=>{var e,n;return(n=(e=Bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aI=t=>{const e=Hv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qv=()=>{var t;return(t=Bl())===null||t===void 0?void 0:t.config},Gv=t=>{var e;return(e=Bl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function dI(){var t;const e=(t=Bl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pI(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gI(){return!dI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yI(){try{return typeof indexedDB=="object"}catch{return!1}}function vI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_I,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new bn(s,l,r)}}function EI(t,e){return t.replace(wI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wI=/\{\$([^}]+)}/g;function TI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_p(i)&&_p(o)){if(!dl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _p(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function II(t,e){const n=new SI(t,e);return n.subscribe.bind(n)}class SI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tc),s.error===void 0&&(s.error=tc),s.complete===void 0&&(s.complete=tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){return t&&t._delegate?t._delegate:t}class Or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kI(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PI(t){return t===Ir?void 0:t}function kI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const RI={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},NI=ie.INFO,bI={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},DI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=bI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Th{constructor(e){this.name=e,this._logLevel=NI,this._logHandler=DI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const LI=(t,e)=>e.some(n=>t instanceof n);let Ep,wp;function VI(){return Ep||(Ep=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OI(){return wp||(wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kv=new WeakMap,id=new WeakMap,Qv=new WeakMap,nc=new WeakMap,Ih=new WeakMap;function MI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kv.set(n,t)}).catch(()=>{}),Ih.set(e,t),e}function FI(t){if(id.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});id.set(t,e)}let od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return id.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UI(t){od=t(od)}function jI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rc(this),e,...n);return Qv.set(r,e.sort?e.sort():[e]),rr(r)}:OI().includes(t)?function(...e){return t.apply(rc(this),e),rr(Kv.get(this))}:function(...e){return rr(t.apply(rc(this),e))}}function zI(t){return typeof t=="function"?jI(t):(t instanceof IDBTransaction&&FI(t),LI(t,VI())?new Proxy(t,od):t)}function rr(t){if(t instanceof IDBRequest)return MI(t);if(nc.has(t))return nc.get(t);const e=zI(t);return e!==t&&(nc.set(t,e),Ih.set(e,t)),e}const rc=t=>Ih.get(t);function BI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(rr(o.result),u.oldVersion,u.newVersion,rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const $I=["get","getKey","getAll","getAllKeys","count"],WI=["put","add","delete","clear"],sc=new Map;function Tp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sc.get(e))return sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=WI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$I.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return sc.set(e,i),i}UI(t=>({...t,get:(e,n,r)=>Tp(e,n)||t.get(e,n,r),has:(e,n)=>!!Tp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ad="@firebase/app",Ip="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Th("@firebase/app"),GI="@firebase/app-compat",KI="@firebase/analytics-compat",QI="@firebase/analytics",XI="@firebase/app-check-compat",YI="@firebase/app-check",JI="@firebase/auth",ZI="@firebase/auth-compat",eS="@firebase/database",tS="@firebase/data-connect",nS="@firebase/database-compat",rS="@firebase/functions",sS="@firebase/functions-compat",iS="@firebase/installations",oS="@firebase/installations-compat",aS="@firebase/messaging",lS="@firebase/messaging-compat",uS="@firebase/performance",cS="@firebase/performance-compat",dS="@firebase/remote-config",hS="@firebase/remote-config-compat",fS="@firebase/storage",mS="@firebase/storage-compat",pS="@firebase/firestore",gS="@firebase/vertexai-preview",yS="@firebase/firestore-compat",vS="firebase",_S="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="[DEFAULT]",ES={[ad]:"fire-core",[GI]:"fire-core-compat",[QI]:"fire-analytics",[KI]:"fire-analytics-compat",[YI]:"fire-app-check",[XI]:"fire-app-check-compat",[JI]:"fire-auth",[ZI]:"fire-auth-compat",[eS]:"fire-rtdb",[tS]:"fire-data-connect",[nS]:"fire-rtdb-compat",[rS]:"fire-fn",[sS]:"fire-fn-compat",[iS]:"fire-iid",[oS]:"fire-iid-compat",[aS]:"fire-fcm",[lS]:"fire-fcm-compat",[uS]:"fire-perf",[cS]:"fire-perf-compat",[dS]:"fire-rc",[hS]:"fire-rc-compat",[fS]:"fire-gcs",[mS]:"fire-gcs-compat",[pS]:"fire-fst",[yS]:"fire-fst-compat",[gS]:"fire-vertex","fire-js":"fire-js",[vS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map,wS=new Map,ud=new Map;function Sp(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(ud.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;ud.set(e,t);for(const n of hl.values())Sp(n,t);for(const n of wS.values())Sp(n,t);return!0}function Sh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new Eo("app","Firebase",TS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=_S;function Xv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ld,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sr.create("bad-app-name",{appName:String(s)});if(n||(n=qv()),!n)throw sr.create("no-options");const i=hl.get(s);if(i){if(dl(n,i.options)&&dl(r,i.config))return i;throw sr.create("duplicate-app",{appName:s})}const o=new CI(s);for(const u of ud.values())o.addComponent(u);const l=new IS(n,r,o);return hl.set(s,l),l}function Yv(t=ld){const e=hl.get(t);if(!e&&t===ld&&qv())return Xv();if(!e)throw sr.create("no-app",{appName:t});return e}function ir(t,e,n){var r;let s=(r=ES[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(l.join(" "));return}Ds(new Or(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="firebase-heartbeat-database",AS=1,io="firebase-heartbeat-store";let ic=null;function Jv(){return ic||(ic=BI(SS,AS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(io)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),ic}async function xS(t){try{const n=(await Jv()).transaction(io),r=await n.objectStore(io).get(Zv(t));return await n.done,r}catch(e){if(e instanceof bn)Pn.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function Ap(t,e){try{const r=(await Jv()).transaction(io,"readwrite");await r.objectStore(io).put(e,Zv(t)),await r.done}catch(n){if(n instanceof bn)Pn.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function Zv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=1024,kS=30*24*60*60*1e3;class CS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=kS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xp(),{heartbeatsToSend:r,unsentEntries:s}=RS(this._heartbeatsCache.heartbeats),i=cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pn.warn(n),""}}}function xp(){return new Date().toISOString().substring(0,10)}function RS(t,e=PS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yI()?vI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pp(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t){Ds(new Or("platform-logger",e=>new HI(e),"PRIVATE")),Ds(new Or("heartbeat",e=>new CS(e),"PRIVATE")),ir(ad,Ip,t),ir(ad,Ip,"esm2017"),ir("fire-js","")}bS("");var DS="firebase",LS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(DS,LS,"app");function Ah(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VS=e_,t_=new Eo("auth","Firebase",e_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Th("@firebase/auth");function OS(t,...e){fl.logLevel<=ie.WARN&&fl.warn(`Auth (${Ws}): ${t}`,...e)}function Na(t,...e){fl.logLevel<=ie.ERROR&&fl.error(`Auth (${Ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw xh(t,...e)}function rn(t,...e){return xh(t,...e)}function n_(t,e,n){const r=Object.assign(Object.assign({},VS()),{[e]:n});return new Eo("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return n_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return t_.create(t,...e)}function Z(t,e,...n){if(!t)throw xh(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Na(e),new Error(e)}function kn(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MS(){return kp()==="http:"||kp()==="https:"}function kp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MS()||fI()||"connection"in navigator)?navigator.onLine:!0}function US(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=cI()||mI()}get(){return FS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new To(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gr(t,e,n,r,s={}){return s_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=wo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return hI()||(d.referrerPolicy="no-referrer"),r_.fetch()(i_(t,t.config.apiHost,n,l),d)})}async function s_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jS),e);try{const s=new $S(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ha(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ha(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ha(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ha(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw n_(t,m,d);Qt(t,m)}}catch(s){if(s instanceof bn)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function Io(t,e,n,r,s={}){const i=await gr(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function i_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ph(t.config,s):`${t.config.apiScheme}://${s}`}function BS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $S{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),zS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}function Cp(t){return t!==void 0&&t.enterprise!==void 0}class WS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return BS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function HS(t,e){return gr(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function o_(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GS(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=kh(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mi(oc(s.auth_time)),issuedAtTime:Mi(oc(s.iat)),expirationTime:Mi(oc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oc(t){return Number(t)*1e3}function kh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wv(n);return s?JSON.parse(s):(Na("Failed to decode base64 JWT payload"),null)}catch(s){return Na("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rp(t){const e=kh(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&KS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(t){var e;const n=t.auth,r=await t.getIdToken(),s=await oo(t,o_(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?a_(i.providerUserInfo):[],l=YS(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),m=u?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new dd(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(t,y)}async function XS(t){const e=Ft(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function a_(t){return t.map(e=>{var{providerId:n}=e,r=Ah(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(t,e){const n=await s_(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=i_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",r_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZS(t,e){return gr(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Rp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await JS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ts;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ah(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await oo(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GS(this,e)}reload(){return XS(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await oo(this,qS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,d,m;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,P=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(d=n.createdAt)!==null&&d!==void 0?d:void 0,E=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:A,emailVerified:b,isAnonymous:V,providerData:O,stsTokenManager:w}=n;Z(A&&w,e,"internal-error");const p=Ts.fromJSON(this.name,w);Z(typeof A=="string",e,"internal-error"),Mn(y,e.name),Mn(_,e.name),Z(typeof b=="boolean",e,"internal-error"),Z(typeof V=="boolean",e,"internal-error"),Mn(P,e.name),Mn(N,e.name),Mn(C,e.name),Mn(D,e.name),Mn(I,e.name),Mn(E,e.name);const v=new yn({uid:A,auth:e,email:_,emailVerified:b,displayName:y,isAnonymous:V,photoURL:N,phoneNumber:P,tenantId:C,stsTokenManager:p,createdAt:I,lastLoginAt:E});return O&&Array.isArray(O)&&(v.providerData=O.map(S=>Object.assign({},S))),D&&(v._redirectEventId=D),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ts;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ml(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?a_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ts;l.updateFromIdToken(r);const u=new yn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new dd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=new Map;function vn(t){kn(t instanceof Function,"Expected a class definition");let e=Np.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Np.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}l_.type="NONE";const bp=l_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ba(this.userKey,s.apiKey,i),this.fullPersistenceKey=ba("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is(vn(bp),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||vn(bp);const o=ba(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const m=await d._get(o);if(m){const y=yn._fromJSON(e,m);d!==i&&(l=y),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Is(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Is(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(m_(e))return"Blackberry";if(p_(e))return"Webos";if(c_(e))return"Safari";if((e.includes("chrome/")||d_(e))&&!e.includes("edge/"))return"Chrome";if(f_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function u_(t=at()){return/firefox\//i.test(t)}function c_(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d_(t=at()){return/crios\//i.test(t)}function h_(t=at()){return/iemobile/i.test(t)}function f_(t=at()){return/android/i.test(t)}function m_(t=at()){return/blackberry/i.test(t)}function p_(t=at()){return/webos/i.test(t)}function Ch(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eA(t=at()){var e;return Ch(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tA(){return pI()&&document.documentMode===10}function g_(t=at()){return Ch(t)||f_(t)||p_(t)||m_(t)||/windows phone/i.test(t)||h_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t,e=[]){let n;switch(t){case"Browser":n=Dp(at());break;case"Worker":n=`${Dp(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e={}){return gr(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=6;class iA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lp(this),this.idTokenSubscription=new Lp(this),this.beforeStateQueue=new nA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await o_(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=US()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(En(this));const n=e?Ft(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rA(this),n=new iA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hr(t){return Ft(t)}class Lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aA(t){$l=t}function v_(t){return $l.loadJS(t)}function lA(){return $l.recaptchaEnterpriseScript}function uA(){return $l.gapiScript}function cA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dA="recaptcha-enterprise",hA="NO_RECAPTCHA";class fA{constructor(e){this.type=dA,this.auth=Hr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{HS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new WS(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Cp(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(hA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Cp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lA();u.length!==0&&(u+=l),v_(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Vp(t,e,n,r=!1){const s=new fA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Vp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t,e){const n=Sh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(dl(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function pA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gA(t,e,n){const r=Hr(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=__(e),{host:o,port:l}=yA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),vA()}function __(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yA(t){const e=__(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Op(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Op(o)}}}function Op(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function _A(t,e){return gr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){return Io(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function TA(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Rh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ao(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ao(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hd(e,n,"signInWithPassword",EA);case"emailLink":return wA(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hd(e,r,"signUpPassword",_A);case"emailLink":return TA(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e){return Io(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="http://localhost";class Mr extends Rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ah(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:IA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AA(t){const e=Ti(Ii(t)).link,n=e?Ti(Ii(e)).deep_link_id:null,r=Ti(Ii(t)).deep_link_id;return(r?Ti(Ii(r)).link:null)||r||n||e||t}class Nh{constructor(e){var n,r,s,i,o,l;const u=Ti(Ii(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,y=SA((s=u.mode)!==null&&s!==void 0?s:null);Z(d&&m&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=AA(e);try{return new Nh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return ao._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nh.parseLink(n);return Z(r,"argument-error"),ao._fromEmailAndCode(e,r.code,r.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends E_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends So{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends So{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends So{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t,e){return Io(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=Mp(r);return new Fr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mp(r);return new Fr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pl(e,n,r,s)}}function w_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(t,i,e,r):i})}async function PA(t,e,n=!1){const r=await oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await oo(t,w_(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=kh(i.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),Fr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(t,e,n=!1){if(en(t.app))return Promise.reject(En(t));const r="signIn",s=await w_(t,r,e),i=await Fr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function CA(t,e){return T_(Hr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(t){const e=Hr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RA(t,e,n){if(en(t.app))return Promise.reject(En(t));const r=Hr(t),o=await hd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&I_(t),u}),l=await Fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Fp(t,e,n){return en(t.app)?Promise.reject(En(t)):CA(Ft(t),Hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&I_(t),r})}function NA(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function bA(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}const gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=1e3,LA=10;class A_ extends S_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,LA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}A_.type="LOCAL";const VA=A_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_ extends S_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}x_.type="SESSION";const P_=x_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await OA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=bh("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(y){const _=y;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function FA(t){sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function UA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zA(){return k_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="firebaseLocalStorageDb",BA=1,yl="firebaseLocalStorage",R_="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hl(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function $A(){const t=indexedDB.deleteDatabase(C_);return new Ao(t).toPromise()}function fd(){const t=indexedDB.open(C_,BA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:R_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await $A(),e(await fd()))})})}async function Up(t,e,n){const r=Hl(t,!0).put({[R_]:e,value:n});return new Ao(r).toPromise()}async function WA(t,e){const n=Hl(t,!1).get(e),r=await new Ao(n).toPromise();return r===void 0?null:r.value}function jp(t,e){const n=Hl(t,!0).delete(e);return new Ao(n).toPromise()}const HA=800,qA=3;class N_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wl._getInstance(zA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UA(),!this.activeServiceWorker)return;this.sender=new MA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fd();return await Up(e,gl,"1"),await jp(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Up(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hl(s,!1).getAll();return new Ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N_.type="LOCAL";const GA=N_;new To(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t,e){return e?vn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends Rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QA(t){return T_(t.auth,new Dh(t),t.bypassAuthState)}function XA(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),kA(n,new Dh(t),t.bypassAuthState)}async function YA(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),PA(n,new Dh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QA;case"linkViaPopup":case"linkViaRedirect":return YA;case"reauthViaPopup":case"reauthViaRedirect":return XA;default:Qt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new To(2e3,1e4);class ps extends b_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=bh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JA.get())};e()}}ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="pendingRedirect",Da=new Map;class e1 extends b_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const r=await t1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t1(t,e){const n=s1(e),r=r1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function n1(t,e){Da.set(t._key(),e)}function r1(t){return vn(t._redirectPersistence)}function s1(t){return ba(ZA,t.config.apiKey,t.name)}async function i1(t,e,n=!1){if(en(t.app))return Promise.reject(En(t));const r=Hr(t),s=KA(r,e),o=await new e1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=10*60*1e3;class a1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!D_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o1&&this.cachedEventUids.clear(),this.cachedEventUids.has(zp(e))}saveEventToCache(e){this.cachedEventUids.add(zp(e)),this.lastProcessedEventTime=Date.now()}}function zp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function D_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d1=/^https?/;async function h1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await u1(t);for(const n of e)try{if(f1(n))return}catch{}Qt(t,"unauthorized-domain")}function f1(t){const e=cd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!d1.test(n))return!1;if(c1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new To(3e4,6e4);function Bp(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function p1(t){return new Promise((e,n)=>{var r,s,i;function o(){Bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bp(),n(rn(t,"network-request-failed"))},timeout:m1.get()})}if(!((s=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)o();else{const l=cA("iframefcb");return sn()[l]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},v_(`${uA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw La=null,e})}let La=null;function g1(t){return La=La||p1(t),La}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=new To(5e3,15e3),v1="__/auth/iframe",_1="emulator/auth/iframe",E1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T1(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ph(e,_1):`https://${t.config.authDomain}/${v1}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},s=w1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wo(r).slice(1)}`}async function I1(t){const e=await g1(t),n=sn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:T1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=sn().setTimeout(()=>{i(o)},y1.get());function u(){sn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A1=500,x1=600,P1="_blank",k1="http://localhost";class $p{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C1(t,e,n,r=A1,s=x1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},S1),{width:r.toString(),height:s.toString(),top:i,left:o}),d=at().toLowerCase();n&&(l=d_(d)?P1:n),u_(d)&&(e=e||k1,u.scrollbars="yes");const m=Object.entries(u).reduce((_,[P,N])=>`${_}${P}=${N},`,"");if(eA(d)&&l!=="_self")return R1(e||"",l),new $p(null);const y=window.open(e||"",l,m);Z(y,t,"popup-blocked");try{y.focus()}catch{}return new $p(y)}function R1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="__/auth/handler",b1="emulator/auth/handler",D1=encodeURIComponent("fac");async function Wp(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:s};if(e instanceof E_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))o[m]=y}if(e instanceof So){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await t._getAppCheckToken(),d=u?`#${D1}=${encodeURIComponent(u)}`:"";return`${L1(t)}?${wo(l).slice(1)}${d}`}function L1({config:t}){return t.emulator?Ph(t,b1):`https://${t.authDomain}/${N1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="webStorageSupport";class V1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P_,this._completeRedirectFn=i1,this._overrideRedirectResult=n1}async _openPopup(e,n,r,s){var i;kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Wp(e,n,r,cd(),s);return C1(e,o,bh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wp(e,n,r,cd(),s);return FA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await I1(e),r=new a1(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ac,{type:ac},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ac];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=h1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g_()||c_()||Ch()}}const O1=V1;var Hp="@firebase/auth",qp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function U1(t){Ds(new Or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y_(t)},d=new oA(r,s,i,u);return pA(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ds(new Or("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(r=>new M1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(Hp,qp,F1(t)),ir(Hp,qp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=5*60,z1=Gv("authIdTokenMaxAge")||j1;let Gp=null;const B1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>z1)return;const s=n==null?void 0:n.token;Gp!==s&&(Gp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $1(t=Yv()){const e=Sh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mA(t,{popupRedirectResolver:O1,persistence:[GA,VA,P_]}),r=Gv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=B1(i.toString());bA(n,o,()=>o(n.currentUser)),NA(n,l=>o(l))}}const s=Hv("auth");return s&&gA(n,`http://${s}`),n}function W1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",W1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});U1("Browser");var Kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,L_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,p){function v(){}v.prototype=p.prototype,w.D=p.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(S,x,k){for(var T=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)T[Ee-2]=arguments[Ee];return p.prototype[x].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,p,v){v||(v=0);var S=Array(16);if(typeof p=="string")for(var x=0;16>x;++x)S[x]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(x=0;16>x;++x)S[x]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=w.g[0],v=w.g[1],x=w.g[2];var k=w.g[3],T=p+(k^v&(x^k))+S[0]+3614090360&4294967295;p=v+(T<<7&4294967295|T>>>25),T=k+(x^p&(v^x))+S[1]+3905402710&4294967295,k=p+(T<<12&4294967295|T>>>20),T=x+(v^k&(p^v))+S[2]+606105819&4294967295,x=k+(T<<17&4294967295|T>>>15),T=v+(p^x&(k^p))+S[3]+3250441966&4294967295,v=x+(T<<22&4294967295|T>>>10),T=p+(k^v&(x^k))+S[4]+4118548399&4294967295,p=v+(T<<7&4294967295|T>>>25),T=k+(x^p&(v^x))+S[5]+1200080426&4294967295,k=p+(T<<12&4294967295|T>>>20),T=x+(v^k&(p^v))+S[6]+2821735955&4294967295,x=k+(T<<17&4294967295|T>>>15),T=v+(p^x&(k^p))+S[7]+4249261313&4294967295,v=x+(T<<22&4294967295|T>>>10),T=p+(k^v&(x^k))+S[8]+1770035416&4294967295,p=v+(T<<7&4294967295|T>>>25),T=k+(x^p&(v^x))+S[9]+2336552879&4294967295,k=p+(T<<12&4294967295|T>>>20),T=x+(v^k&(p^v))+S[10]+4294925233&4294967295,x=k+(T<<17&4294967295|T>>>15),T=v+(p^x&(k^p))+S[11]+2304563134&4294967295,v=x+(T<<22&4294967295|T>>>10),T=p+(k^v&(x^k))+S[12]+1804603682&4294967295,p=v+(T<<7&4294967295|T>>>25),T=k+(x^p&(v^x))+S[13]+4254626195&4294967295,k=p+(T<<12&4294967295|T>>>20),T=x+(v^k&(p^v))+S[14]+2792965006&4294967295,x=k+(T<<17&4294967295|T>>>15),T=v+(p^x&(k^p))+S[15]+1236535329&4294967295,v=x+(T<<22&4294967295|T>>>10),T=p+(x^k&(v^x))+S[1]+4129170786&4294967295,p=v+(T<<5&4294967295|T>>>27),T=k+(v^x&(p^v))+S[6]+3225465664&4294967295,k=p+(T<<9&4294967295|T>>>23),T=x+(p^v&(k^p))+S[11]+643717713&4294967295,x=k+(T<<14&4294967295|T>>>18),T=v+(k^p&(x^k))+S[0]+3921069994&4294967295,v=x+(T<<20&4294967295|T>>>12),T=p+(x^k&(v^x))+S[5]+3593408605&4294967295,p=v+(T<<5&4294967295|T>>>27),T=k+(v^x&(p^v))+S[10]+38016083&4294967295,k=p+(T<<9&4294967295|T>>>23),T=x+(p^v&(k^p))+S[15]+3634488961&4294967295,x=k+(T<<14&4294967295|T>>>18),T=v+(k^p&(x^k))+S[4]+3889429448&4294967295,v=x+(T<<20&4294967295|T>>>12),T=p+(x^k&(v^x))+S[9]+568446438&4294967295,p=v+(T<<5&4294967295|T>>>27),T=k+(v^x&(p^v))+S[14]+3275163606&4294967295,k=p+(T<<9&4294967295|T>>>23),T=x+(p^v&(k^p))+S[3]+4107603335&4294967295,x=k+(T<<14&4294967295|T>>>18),T=v+(k^p&(x^k))+S[8]+1163531501&4294967295,v=x+(T<<20&4294967295|T>>>12),T=p+(x^k&(v^x))+S[13]+2850285829&4294967295,p=v+(T<<5&4294967295|T>>>27),T=k+(v^x&(p^v))+S[2]+4243563512&4294967295,k=p+(T<<9&4294967295|T>>>23),T=x+(p^v&(k^p))+S[7]+1735328473&4294967295,x=k+(T<<14&4294967295|T>>>18),T=v+(k^p&(x^k))+S[12]+2368359562&4294967295,v=x+(T<<20&4294967295|T>>>12),T=p+(v^x^k)+S[5]+4294588738&4294967295,p=v+(T<<4&4294967295|T>>>28),T=k+(p^v^x)+S[8]+2272392833&4294967295,k=p+(T<<11&4294967295|T>>>21),T=x+(k^p^v)+S[11]+1839030562&4294967295,x=k+(T<<16&4294967295|T>>>16),T=v+(x^k^p)+S[14]+4259657740&4294967295,v=x+(T<<23&4294967295|T>>>9),T=p+(v^x^k)+S[1]+2763975236&4294967295,p=v+(T<<4&4294967295|T>>>28),T=k+(p^v^x)+S[4]+1272893353&4294967295,k=p+(T<<11&4294967295|T>>>21),T=x+(k^p^v)+S[7]+4139469664&4294967295,x=k+(T<<16&4294967295|T>>>16),T=v+(x^k^p)+S[10]+3200236656&4294967295,v=x+(T<<23&4294967295|T>>>9),T=p+(v^x^k)+S[13]+681279174&4294967295,p=v+(T<<4&4294967295|T>>>28),T=k+(p^v^x)+S[0]+3936430074&4294967295,k=p+(T<<11&4294967295|T>>>21),T=x+(k^p^v)+S[3]+3572445317&4294967295,x=k+(T<<16&4294967295|T>>>16),T=v+(x^k^p)+S[6]+76029189&4294967295,v=x+(T<<23&4294967295|T>>>9),T=p+(v^x^k)+S[9]+3654602809&4294967295,p=v+(T<<4&4294967295|T>>>28),T=k+(p^v^x)+S[12]+3873151461&4294967295,k=p+(T<<11&4294967295|T>>>21),T=x+(k^p^v)+S[15]+530742520&4294967295,x=k+(T<<16&4294967295|T>>>16),T=v+(x^k^p)+S[2]+3299628645&4294967295,v=x+(T<<23&4294967295|T>>>9),T=p+(x^(v|~k))+S[0]+4096336452&4294967295,p=v+(T<<6&4294967295|T>>>26),T=k+(v^(p|~x))+S[7]+1126891415&4294967295,k=p+(T<<10&4294967295|T>>>22),T=x+(p^(k|~v))+S[14]+2878612391&4294967295,x=k+(T<<15&4294967295|T>>>17),T=v+(k^(x|~p))+S[5]+4237533241&4294967295,v=x+(T<<21&4294967295|T>>>11),T=p+(x^(v|~k))+S[12]+1700485571&4294967295,p=v+(T<<6&4294967295|T>>>26),T=k+(v^(p|~x))+S[3]+2399980690&4294967295,k=p+(T<<10&4294967295|T>>>22),T=x+(p^(k|~v))+S[10]+4293915773&4294967295,x=k+(T<<15&4294967295|T>>>17),T=v+(k^(x|~p))+S[1]+2240044497&4294967295,v=x+(T<<21&4294967295|T>>>11),T=p+(x^(v|~k))+S[8]+1873313359&4294967295,p=v+(T<<6&4294967295|T>>>26),T=k+(v^(p|~x))+S[15]+4264355552&4294967295,k=p+(T<<10&4294967295|T>>>22),T=x+(p^(k|~v))+S[6]+2734768916&4294967295,x=k+(T<<15&4294967295|T>>>17),T=v+(k^(x|~p))+S[13]+1309151649&4294967295,v=x+(T<<21&4294967295|T>>>11),T=p+(x^(v|~k))+S[4]+4149444226&4294967295,p=v+(T<<6&4294967295|T>>>26),T=k+(v^(p|~x))+S[11]+3174756917&4294967295,k=p+(T<<10&4294967295|T>>>22),T=x+(p^(k|~v))+S[2]+718787259&4294967295,x=k+(T<<15&4294967295|T>>>17),T=v+(k^(x|~p))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(x+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+x&4294967295,w.g[3]=w.g[3]+k&4294967295}r.prototype.u=function(w,p){p===void 0&&(p=w.length);for(var v=p-this.blockSize,S=this.B,x=this.h,k=0;k<p;){if(x==0)for(;k<=v;)s(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<p;)if(S[x++]=w.charCodeAt(k++),x==this.blockSize){s(this,S),x=0;break}}else for(;k<p;)if(S[x++]=w[k++],x==this.blockSize){s(this,S),x=0;break}}this.h=x,this.o+=p},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;var v=8*this.o;for(p=w.length-8;p<w.length;++p)w[p]=v&255,v/=256;for(this.u(w),w=Array(16),p=v=0;4>p;++p)for(var S=0;32>S;S+=8)w[v++]=this.g[p]>>>S&255;return w};function i(w,p){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=p(w)}function o(w,p){this.h=p;for(var v=[],S=!0,x=w.length-1;0<=x;x--){var k=w[x]|0;S&&k==p||(v[x]=k,S=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?i(w,function(p){return new o([p|0],0>p?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return y;if(0>w)return D(d(-w));for(var p=[],v=1,S=0;w>=v;S++)p[S]=w/v|0,v*=4294967296;return new o(p,0)}function m(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return D(m(w.substring(1),p));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(p,8)),S=y,x=0;x<w.length;x+=8){var k=Math.min(8,w.length-x),T=parseInt(w.substring(x,x+k),p);8>k?(k=d(Math.pow(p,k)),S=S.j(k).add(d(T))):(S=S.j(v),S=S.add(d(T)))}return S}var y=u(0),_=u(1),P=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-D(this).m();for(var w=0,p=1,v=0;v<this.g.length;v++){var S=this.i(v);w+=(0<=S?S:4294967296+S)*p,p*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(C(this))return"-"+D(this).toString(w);for(var p=d(Math.pow(w,6)),v=this,S="";;){var x=b(v,p).g;v=I(v,x.j(p));var k=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=x,N(v))return k+S;for(;6>k.length;)k="0"+k;S=k+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=I(this,w),C(w)?-1:N(w)?0:1};function D(w){for(var p=w.g.length,v=[],S=0;S<p;S++)v[S]=~w.g[S];return new o(v,~w.h).add(_)}t.abs=function(){return C(this)?D(this):this},t.add=function(w){for(var p=Math.max(this.g.length,w.g.length),v=[],S=0,x=0;x<=p;x++){var k=S+(this.i(x)&65535)+(w.i(x)&65535),T=(k>>>16)+(this.i(x)>>>16)+(w.i(x)>>>16);S=T>>>16,k&=65535,T&=65535,v[x]=T<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(w,p){return w.add(D(p))}t.j=function(w){if(N(this)||N(w))return y;if(C(this))return C(w)?D(this).j(D(w)):D(D(this).j(w));if(C(w))return D(this.j(D(w)));if(0>this.l(P)&&0>w.l(P))return d(this.m()*w.m());for(var p=this.g.length+w.g.length,v=[],S=0;S<2*p;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(var x=0;x<w.g.length;x++){var k=this.i(S)>>>16,T=this.i(S)&65535,Ee=w.i(x)>>>16,Qe=w.i(x)&65535;v[2*S+2*x]+=T*Qe,E(v,2*S+2*x),v[2*S+2*x+1]+=k*Qe,E(v,2*S+2*x+1),v[2*S+2*x+1]+=T*Ee,E(v,2*S+2*x+1),v[2*S+2*x+2]+=k*Ee,E(v,2*S+2*x+2)}for(S=0;S<p;S++)v[S]=v[2*S+1]<<16|v[2*S];for(S=p;S<2*p;S++)v[S]=0;return new o(v,0)};function E(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function A(w,p){this.g=w,this.h=p}function b(w,p){if(N(p))throw Error("division by zero");if(N(w))return new A(y,y);if(C(w))return p=b(D(w),p),new A(D(p.g),D(p.h));if(C(p))return p=b(w,D(p)),new A(D(p.g),p.h);if(30<w.g.length){if(C(w)||C(p))throw Error("slowDivide_ only works with positive integers.");for(var v=_,S=p;0>=S.l(w);)v=V(v),S=V(S);var x=O(v,1),k=O(S,1);for(S=O(S,2),v=O(v,2);!N(S);){var T=k.add(S);0>=T.l(w)&&(x=x.add(v),k=T),S=O(S,1),v=O(v,1)}return p=I(w,x.j(p)),new A(x,p)}for(x=y;0<=w.l(p);){for(v=Math.max(1,Math.floor(w.m()/p.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),k=d(v),T=k.j(p);C(T)||0<T.l(w);)v-=S,k=d(v),T=k.j(p);N(k)&&(k=_),x=x.add(k),w=I(w,T)}return new A(x,w)}t.A=function(w){return b(this,w).h},t.and=function(w){for(var p=Math.max(this.g.length,w.g.length),v=[],S=0;S<p;S++)v[S]=this.i(S)&w.i(S);return new o(v,this.h&w.h)},t.or=function(w){for(var p=Math.max(this.g.length,w.g.length),v=[],S=0;S<p;S++)v[S]=this.i(S)|w.i(S);return new o(v,this.h|w.h)},t.xor=function(w){for(var p=Math.max(this.g.length,w.g.length),v=[],S=0;S<p;S++)v[S]=this.i(S)^w.i(S);return new o(v,this.h^w.h)};function V(w){for(var p=w.g.length+1,v=[],S=0;S<p;S++)v[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(v,w.h)}function O(w,p){var v=p>>5;p%=32;for(var S=w.g.length-v,x=[],k=0;k<S;k++)x[k]=0<p?w.i(k+v)>>>p|w.i(k+v+1)<<32-p:w.i(k+v);return new o(x,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,L_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,Rr=o}).apply(typeof Kp<"u"?Kp:typeof self<"u"?self:typeof window<"u"?window:{});var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var V_,Si,O_,Va,md,M_,F_,U_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fa=="object"&&fa];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var h=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in h))break e;h=h[R]}a=a[a.length-1],g=h[a],c=c(g),c!=g&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var h=0,g=!1,R={next:function(){if(!g&&h<a.length){var L=h++;return{value:c(L,a[L]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function m(a,c,h){return a.call.apply(a.bind,arguments)}function y(a,c,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),a.apply(c,R)}}return function(){return a.apply(c,arguments)}}function _(a,c,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,_.apply(null,arguments)}function P(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function N(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,R,L){for(var j=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)j[fe-2]=arguments[fe];return c.prototype[R].apply(g,j)}}function C(a){const c=a.length;if(0<c){const h=Array(c);for(let g=0;g<c;g++)h[g]=a[g];return h}return[]}function D(a,c){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(u(g)){const R=a.length||0,L=g.length||0;a.length=R+L;for(let j=0;j<L;j++)a[R+j]=g[j]}else a.push(g)}}class I{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var V=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function O(a,c,h){for(const g in a)c.call(h,a[g],g,a)}function w(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function p(a){const c={};for(const h in a)c[h]=a[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let h,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(h in g)a[h]=g[h];for(let L=0;L<v.length;L++)h=v[L],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function x(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function k(a){l.setTimeout(()=>{throw a},0)}function T(){var a=B;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ee{constructor(){this.h=this.g=null}add(c,h){const g=Qe.get();g.set(c,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Qe=new I(()=>new Xe,a=>a.reset());class Xe{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,z=!1,B=new Ee,$=()=>{const a=l.Promise.resolve(void 0);Re=()=>{a.then(Y)}};var Y=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(h){k(h)}var c=Qe;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function he(a,c){if(Q.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(V){e:{try{b(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&he.aa.h.call(this)}}N(he,Q);var Pe={2:"touch",3:"pen",4:"mouse"};he.prototype.h=function(){he.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ne="closure_listenable_"+(1e6*Math.random()|0),Ct=0;function bo(a,c,h,g,R){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!g,this.ha=R,this.key=++Ct,this.da=this.fa=!1}function Xt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Rt(a){this.src=a,this.g={},this.h=0}Rt.prototype.add=function(a,c,h,g,R){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var j=au(a,c,g,R);return-1<j?(c=a[j],h||(c.fa=!1)):(c=new bo(c,this.src,L,!!g,R),c.fa=h,a.push(c)),c};function ou(a,c){var h=c.type;if(h in a.g){var g=a.g[h],R=Array.prototype.indexOf.call(g,c,void 0),L;(L=0<=R)&&Array.prototype.splice.call(g,R,1),L&&(Xt(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function au(a,c,h,g){for(var R=0;R<a.length;++R){var L=a[R];if(!L.da&&L.listener==c&&L.capture==!!h&&L.ha==g)return R}return-1}var lu="closure_lm_"+(1e6*Math.random()|0),uu={};function cf(a,c,h,g,R){if(Array.isArray(c)){for(var L=0;L<c.length;L++)cf(a,c[L],h,g,R);return null}return h=ff(h),a&&a[Ne]?a.K(c,h,d(g)?!!g.capture:!1,R):sE(a,c,h,!1,g,R)}function sE(a,c,h,g,R,L){if(!c)throw Error("Invalid event type");var j=d(R)?!!R.capture:!!R,fe=du(a);if(fe||(a[lu]=fe=new Rt(a)),h=fe.add(c,h,g,j,L),h.proxy)return h;if(g=iE(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)J||(R=j),R===void 0&&(R=!1),a.addEventListener(c.toString(),g,R);else if(a.attachEvent)a.attachEvent(hf(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function iE(){function a(h){return c.call(a.src,a.listener,h)}const c=oE;return a}function df(a,c,h,g,R){if(Array.isArray(c))for(var L=0;L<c.length;L++)df(a,c[L],h,g,R);else g=d(g)?!!g.capture:!!g,h=ff(h),a&&a[Ne]?(a=a.i,c=String(c).toString(),c in a.g&&(L=a.g[c],h=au(L,h,g,R),-1<h&&(Xt(L[h]),Array.prototype.splice.call(L,h,1),L.length==0&&(delete a.g[c],a.h--)))):a&&(a=du(a))&&(c=a.g[c.toString()],a=-1,c&&(a=au(c,h,g,R)),(h=-1<a?c[a]:null)&&cu(h))}function cu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Ne])ou(c.i,a);else{var h=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(h,g,a.capture):c.detachEvent?c.detachEvent(hf(h),g):c.addListener&&c.removeListener&&c.removeListener(g),(h=du(c))?(ou(h,a),h.h==0&&(h.src=null,c[lu]=null)):Xt(a)}}}function hf(a){return a in uu?uu[a]:uu[a]="on"+a}function oE(a,c){if(a.da)a=!0;else{c=new he(c,this);var h=a.listener,g=a.ha||a.src;a.fa&&cu(a),a=h.call(g,c)}return a}function du(a){return a=a[lu],a instanceof Rt?a:null}var hu="__closure_events_fn_"+(1e9*Math.random()>>>0);function ff(a){return typeof a=="function"?a:(a[hu]||(a[hu]=function(c){return a.handleEvent(c)}),a[hu])}function Ye(){W.call(this),this.i=new Rt(this),this.M=this,this.F=null}N(Ye,W),Ye.prototype[Ne]=!0,Ye.prototype.removeEventListener=function(a,c,h,g){df(this,a,c,h,g)};function lt(a,c){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Q(c,a);else if(c instanceof Q)c.target=c.target||a;else{var R=c;c=new Q(g,a),S(c,R)}if(R=!0,h)for(var L=h.length-1;0<=L;L--){var j=c.g=h[L];R=Do(j,g,!0,c)&&R}if(j=c.g=a,R=Do(j,g,!0,c)&&R,R=Do(j,g,!1,c)&&R,h)for(L=0;L<h.length;L++)j=c.g=h[L],R=Do(j,g,!1,c)&&R}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],g=0;g<h.length;g++)Xt(h[g]);delete a.g[c],a.h--}}this.F=null},Ye.prototype.K=function(a,c,h,g){return this.i.add(String(a),c,!1,h,g)},Ye.prototype.L=function(a,c,h,g){return this.i.add(String(a),c,!0,h,g)};function Do(a,c,h,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,L=0;L<c.length;++L){var j=c[L];if(j&&!j.da&&j.capture==h){var fe=j.listener,ze=j.ha||j.src;j.fa&&ou(a.i,j),R=fe.call(ze,g)!==!1&&R}}return R&&!g.defaultPrevented}function mf(a,c,h){if(typeof a=="function")h&&(a=_(a,h));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function pf(a){a.g=mf(()=>{a.g=null,a.i&&(a.i=!1,pf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class aE extends W{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:pf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xs(a){W.call(this),this.h=a,this.g={}}N(Xs,W);var gf=[];function yf(a){O(a.g,function(c,h){this.g.hasOwnProperty(h)&&cu(c)},a),a.g={}}Xs.prototype.N=function(){Xs.aa.N.call(this),yf(this)},Xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fu=l.JSON.stringify,lE=l.JSON.parse,uE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function mu(){}mu.prototype.h=null;function vf(a){return a.h||(a.h=a.i())}function _f(){}var Ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pu(){Q.call(this,"d")}N(pu,Q);function gu(){Q.call(this,"c")}N(gu,Q);var yr={},Ef=null;function Lo(){return Ef=Ef||new Ye}yr.La="serverreachability";function wf(a){Q.call(this,yr.La,a)}N(wf,Q);function Js(a){const c=Lo();lt(c,new wf(c))}yr.STAT_EVENT="statevent";function Tf(a,c){Q.call(this,yr.STAT_EVENT,a),this.stat=c}N(Tf,Q);function ut(a){const c=Lo();lt(c,new Tf(c,a))}yr.Ma="timingevent";function If(a,c){Q.call(this,yr.Ma,a),this.size=c}N(If,Q);function Zs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ei(){this.g=!0}ei.prototype.xa=function(){this.g=!1};function cE(a,c,h,g,R,L){a.info(function(){if(a.g)if(L)for(var j="",fe=L.split("&"),ze=0;ze<fe.length;ze++){var le=fe[ze].split("=");if(1<le.length){var Je=le[0];le=le[1];var Ze=Je.split("_");j=2<=Ze.length&&Ze[1]=="type"?j+(Je+"="+le+"&"):j+(Je+"=redacted&")}}else j=null;else j=L;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+c+`
`+h+`
`+j})}function dE(a,c,h,g,R,L,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+c+`
`+h+`
`+L+" "+j})}function Kr(a,c,h,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+fE(a,h)+(g?" "+g:"")})}function hE(a,c){a.info(function(){return"TIMEOUT: "+c})}ei.prototype.info=function(){};function fE(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var L=R[0];if(L!="noop"&&L!="stop"&&L!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return fu(h)}catch{return c}}var Vo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yu;function Oo(){}N(Oo,mu),Oo.prototype.g=function(){return new XMLHttpRequest},Oo.prototype.i=function(){return{}},yu=new Oo;function Dn(a,c,h,g){this.j=a,this.i=c,this.l=h,this.R=g||1,this.U=new Xs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Af}function Af(){this.i=null,this.g="",this.h=!1}var xf={},vu={};function _u(a,c,h){a.L=1,a.v=jo(cn(c)),a.m=h,a.P=!0,Pf(a,null)}function Pf(a,c){a.F=Date.now(),Mo(a),a.A=cn(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),zf(h.i,"t",g),a.C=0,h=a.j.J,a.h=new Af,a.g=im(a.j,h?c:null,!a.m),0<a.O&&(a.M=new aE(_(a.Y,a,a.g),a.O)),c=a.U,h=a.g,g=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(gf[0]=R.toString()),R=gf);for(var L=0;L<R.length;L++){var j=cf(h,R[L],g||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?p(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Js(),cE(a.i,a.u,a.A,a.l,a.R,a.m)}Dn.prototype.ca=function(a){a=a.target;const c=this.M;c&&dn(a)==3?c.j():this.Y(a)},Dn.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=dn(this.g);var c=this.g.Ba();const Yr=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||Kf(this.g)))){this.J||Ze!=4||c==7||(c==8||0>=Yr?Js(3):Js(2)),Eu(this);var h=this.g.Z();this.X=h;t:if(kf(this)){var g=Kf(this.g);a="";var R=g.length,L=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),ti(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(L&&c==R-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,dE(this.i,this.u,this.A,this.l,this.R,Ze,h),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,ze=this.g;if((fe=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(fe)){var le=fe;break t}}le=null}if(h=le)Kr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wu(this,h);else{this.o=!1,this.s=3,ut(12),vr(this),ti(this);break e}}if(this.P){h=!0;let jt;for(;!this.J&&this.C<j.length;)if(jt=mE(this,j),jt==vu){Ze==4&&(this.s=4,ut(14),h=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==xf){this.s=4,ut(15),Kr(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else Kr(this.i,this.l,jt,null),wu(this,jt);if(kf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||j.length!=0||this.h.h||(this.s=1,ut(16),h=!1),this.o=this.o&&h,!h)Kr(this.i,this.l,j,"[Invalid Chunked Response]"),vr(this),ti(this);else if(0<j.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Pu(Je),Je.M=!0,ut(11))}}else Kr(this.i,this.l,j,null),wu(this,j);Ze==4&&vr(this),this.o&&!this.J&&(Ze==4?tm(this.j,this):(this.o=!1,Mo(this)))}else NE(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),vr(this),ti(this)}}}catch{}finally{}};function kf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function mE(a,c){var h=a.C,g=c.indexOf(`
`,h);return g==-1?vu:(h=Number(c.substring(h,g)),isNaN(h)?xf:(g+=1,g+h>c.length?vu:(c=c.slice(g,g+h),a.C=g+h,c)))}Dn.prototype.cancel=function(){this.J=!0,vr(this)};function Mo(a){a.S=Date.now()+a.I,Cf(a,a.I)}function Cf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zs(_(a.ba,a),c)}function Eu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Dn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(hE(this.i,this.A),this.L!=2&&(Js(),ut(17)),vr(this),this.s=2,ti(this)):Cf(this,this.S-a)};function ti(a){a.j.G==0||a.J||tm(a.j,a)}function vr(a){Eu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,yf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function wu(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||Tu(h.h,a))){if(!a.K&&Tu(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)qo(h),Wo(h);else break e;xu(h),ut(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=Zs(_(h.Za,h),6e3));if(1>=bf(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Er(h,11)}else if((a.K||h.g==a)&&qo(h),!E(c))for(R=h.Da.g.parse(c),c=0;c<R.length;c++){let le=R[c];if(h.T=le[0],le=le[1],h.G==2)if(le[0]=="c"){h.K=le[1],h.ia=le[2];const Je=le[3];Je!=null&&(h.la=Je,h.j.info("VER="+h.la));const Ze=le[4];Ze!=null&&(h.Aa=Ze,h.j.info("SVER="+h.Aa));const Yr=le[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(g=1.5*Yr,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const jt=a.g;if(jt){const Ko=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ko){var L=g.h;L.g||Ko.indexOf("spdy")==-1&&Ko.indexOf("quic")==-1&&Ko.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Iu(L,L.h),L.h=null))}if(g.D){const ku=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;ku&&(g.ya=ku,pe(g.I,g.D,ku))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var j=a;if(g.qa=sm(g,g.J?g.ia:null,g.W),j.K){Df(g.h,j);var fe=j,ze=g.L;ze&&(fe.I=ze),fe.B&&(Eu(fe),Mo(fe)),g.g=j}else Zf(g);0<h.i.length&&Ho(h)}else le[0]!="stop"&&le[0]!="close"||Er(h,7);else h.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Er(h,7):Au(h):le[0]!="noop"&&h.l&&h.l.ta(le),h.v=0)}}Js(4)}catch{}}var pE=class{constructor(a,c){this.g=a,this.map=c}};function Rf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bf(a){return a.h?1:a.g?a.g.size:0}function Tu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Iu(a,c){a.g?a.g.add(c):a.h=c}function Df(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Rf.prototype.cancel=function(){if(this.i=Lf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return C(a.i)}function gE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,g=0;g<h;g++)c.push(a[g]);return c}c=[],h=0;for(g in a)c[h++]=a[g];return c}function yE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const g in a)c[h++]=g;return c}}}function Vf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=yE(a),g=gE(a),R=g.length,L=0;L<R;L++)c.call(void 0,g[L],h&&h[L],a)}var Of=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vE(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),R=null;if(0<=g){var L=a[h].substring(0,g);R=a[h].substring(g+1)}else L=a[h];c(L,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function _r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof _r){this.h=a.h,Fo(this,a.j),this.o=a.o,this.g=a.g,Uo(this,a.s),this.l=a.l;var c=a.i,h=new si;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Mf(this,h),this.m=a.m}else a&&(c=String(a).match(Of))?(this.h=!1,Fo(this,c[1]||"",!0),this.o=ni(c[2]||""),this.g=ni(c[3]||"",!0),Uo(this,c[4]),this.l=ni(c[5]||"",!0),Mf(this,c[6]||"",!0),this.m=ni(c[7]||"")):(this.h=!1,this.i=new si(null,this.h))}_r.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ri(c,Ff,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ri(c,Ff,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(ri(h,h.charAt(0)=="/"?wE:EE,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",ri(h,IE)),a.join("")};function cn(a){return new _r(a)}function Fo(a,c,h){a.j=h?ni(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Uo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Mf(a,c,h){c instanceof si?(a.i=c,SE(a.i,a.h)):(h||(c=ri(c,TE)),a.i=new si(c,a.h))}function pe(a,c,h){a.i.set(c,h)}function jo(a){return pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ni(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ri(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,_E),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _E(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ff=/[#\/\?@]/g,EE=/[#\?:]/g,wE=/[#\?]/g,TE=/[#\?@]/g,IE=/#/g;function si(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Ln(a){a.g||(a.g=new Map,a.h=0,a.i&&vE(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=si.prototype,t.add=function(a,c){Ln(this),this.i=null,a=Qr(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function Uf(a,c){Ln(a),c=Qr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function jf(a,c){return Ln(a),c=Qr(a,c),a.g.has(c)}t.forEach=function(a,c){Ln(this),this.g.forEach(function(h,g){h.forEach(function(R){a.call(c,R,g,this)},this)},this)},t.na=function(){Ln(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let g=0;g<c.length;g++){const R=a[g];for(let L=0;L<R.length;L++)h.push(c[g])}return h},t.V=function(a){Ln(this);let c=[];if(typeof a=="string")jf(this,a)&&(c=c.concat(this.g.get(Qr(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return Ln(this),this.i=null,a=Qr(this,a),jf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function zf(a,c,h){Uf(a,c),0<h.length&&(a.i=null,a.g.set(Qr(a,c),C(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var g=c[h];const L=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var R=L;j[g]!==""&&(R+="="+encodeURIComponent(String(j[g]))),a.push(R)}}return this.i=a.join("&")};function Qr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function SE(a,c){c&&!a.j&&(Ln(a),a.i=null,a.g.forEach(function(h,g){var R=g.toLowerCase();g!=R&&(Uf(this,g),zf(this,R,h))},a)),a.j=c}function AE(a,c){const h=new ei;if(l.Image){const g=new Image;g.onload=P(Vn,h,"TestLoadImage: loaded",!0,c,g),g.onerror=P(Vn,h,"TestLoadImage: error",!1,c,g),g.onabort=P(Vn,h,"TestLoadImage: abort",!1,c,g),g.ontimeout=P(Vn,h,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function xE(a,c){const h=new ei,g=new AbortController,R=setTimeout(()=>{g.abort(),Vn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(R),L.ok?Vn(h,"TestPingServer: ok",!0,c):Vn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Vn(h,"TestPingServer: error",!1,c)})}function Vn(a,c,h,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(h)}catch{}}function PE(){this.g=new uE}function kE(a,c,h){const g=h||"";try{Vf(a,function(R,L){let j=R;d(R)&&(j=fu(R)),c.push(g+L+"="+encodeURIComponent(j))})}catch(R){throw c.push(g+"type="+encodeURIComponent("_badmap")),R}}function zo(a){this.l=a.Ub||null,this.j=a.eb||!1}N(zo,mu),zo.prototype.g=function(){return new Bo(this.l,this.j)},zo.prototype.i=function(a){return function(){return a}}({});function Bo(a,c){Ye.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Bo,Ye),t=Bo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,oi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ii(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ii(this):oi(this),this.readyState==3&&Bf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ii(this))},t.Qa=function(a){this.g&&(this.response=a,ii(this))},t.ga=function(){this.g&&ii(this)};function ii(a){a.readyState=4,a.l=null,a.j=null,a.v=null,oi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function oi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $f(a){let c="";return O(a,function(h,g){c+=g,c+=":",c+=h,c+=`\r
`}),c}function Su(a,c,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=$f(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):pe(a,c,h))}function Ae(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Ae,Ye);var CE=/^https?$/i,RE=["POST","PUT"];t=Ae.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yu.g(),this.v=this.o?vf(this.o):vf(yu),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(L){Wf(this,L);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)h.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())h.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(L=>L.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(RE,c,void 0))||g||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,j]of h)this.g.setRequestHeader(L,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gf(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Wf(this,L)}};function Wf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Hf(a),$o(a)}function Hf(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),$o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$o(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qf(this):this.bb())},t.bb=function(){qf(this)};function qf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||dn(a)!=4||a.Z()!=2)){if(a.u&&dn(a)==4)mf(a.Ea,0,a);else if(lt(a,"readystatechange"),dn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var g;if(g=j===0){var R=String(a.D).match(Of)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!CE.test(R?R.toLowerCase():"")}h=g}if(h)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var L=2<dn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",Hf(a)}}finally{$o(a)}}}}function $o(a,c){if(a.g){Gf(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||lt(a,"ready");try{h.onreadystatechange=g}catch{}}}function Gf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),lE(c)}};function Kf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function NE(a){const c={};a=(a.g&&2<=dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var h=x(a[g]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const L=c[R]||[];c[R]=L,L.push(h)}w(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ai(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function Qf(a){this.Aa=0,this.i=[],this.j=new ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ai("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ai("baseRetryDelayMs",5e3,a),this.cb=ai("retryDelaySeedMs",1e4,a),this.Wa=ai("forwardChannelMaxRetries",2,a),this.wa=ai("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Rf(a&&a.concurrentRequestLimit),this.Da=new PE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qf.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,g){ut(0),this.W=a,this.H=c||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=sm(this,null,this.W),Ho(this)};function Au(a){if(Xf(a),a.G==3){var c=a.U++,h=cn(a.I);if(pe(h,"SID",a.K),pe(h,"RID",c),pe(h,"TYPE","terminate"),li(a,h),c=new Dn(a,a.j,c),c.L=2,c.v=jo(cn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=im(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Mo(c)}rm(a)}function Wo(a){a.g&&(Pu(a),a.g.cancel(),a.g=null)}function Xf(a){Wo(a),a.u&&(l.clearTimeout(a.u),a.u=null),qo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ho(a){if(!Nf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Re||$(),z||(Re(),z=!0),B.add(c,a),a.B=0}}function bE(a,c){return bf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zs(_(a.Ga,a,c),nm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Dn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=p(L),S(L,this.S)):L=this.S),this.m!==null||this.O||(R.H=L,L=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Jf(this,R,c),h=cn(this.I),pe(h,"RID",a),pe(h,"CVER",22),this.D&&pe(h,"X-HTTP-Session-Id",this.D),li(this,h),L&&(this.O?c="headers="+encodeURIComponent(String($f(L)))+"&"+c:this.m&&Su(h,this.m,L)),Iu(this.h,R),this.Ua&&pe(h,"TYPE","init"),this.P?(pe(h,"$req",c),pe(h,"SID","null"),R.T=!0,_u(R,h,null)):_u(R,h,c),this.G=2}}else this.G==3&&(a?Yf(this,a):this.i.length==0||Nf(this.h)||Yf(this))};function Yf(a,c){var h;c?h=c.l:h=a.U++;const g=cn(a.I);pe(g,"SID",a.K),pe(g,"RID",h),pe(g,"AID",a.T),li(a,g),a.m&&a.o&&Su(g,a.m,a.o),h=new Dn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Jf(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Iu(a.h,h),_u(h,g,c)}function li(a,c){a.H&&O(a.H,function(h,g){pe(c,g,h)}),a.l&&Vf({},function(h,g){pe(c,g,h)})}function Jf(a,c,h){h=Math.min(a.i.length,h);var g=a.l?_(a.l.Na,a.l,a):null;e:{var R=a.i;let L=-1;for(;;){const j=["count="+h];L==-1?0<h?(L=R[0].g,j.push("ofs="+L)):L=0:j.push("ofs="+L);let fe=!0;for(let ze=0;ze<h;ze++){let le=R[ze].g;const Je=R[ze].map;if(le-=L,0>le)L=Math.max(0,R[ze].g-100),fe=!1;else try{kE(Je,j,"req"+le+"_")}catch{g&&g(Je)}}if(fe){g=j.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,g}function Zf(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Re||$(),z||(Re(),z=!0),B.add(c,a),a.v=0}}function xu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zs(_(a.Fa,a),nm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,em(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zs(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Wo(this),em(this))};function Pu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function em(a){a.g=new Dn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=cn(a.qa);pe(c,"RID","rpc"),pe(c,"SID",a.K),pe(c,"AID",a.T),pe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&pe(c,"TO",a.ja),pe(c,"TYPE","xmlhttp"),li(a,c),a.m&&a.o&&Su(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=jo(cn(c)),h.m=null,h.P=!0,Pf(h,a)}t.Za=function(){this.C!=null&&(this.C=null,Wo(this),xu(this),ut(19))};function qo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function tm(a,c){var h=null;if(a.g==c){qo(a),Pu(a),a.g=null;var g=2}else if(Tu(a.h,c))h=c.D,Df(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var R=a.B;g=Lo(),lt(g,new If(g,h)),Ho(a)}else Zf(a);else if(R=c.s,R==3||R==0&&0<c.X||!(g==1&&bE(a,c)||g==2&&xu(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),R){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function nm(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function Er(a,c){if(a.j.info("Error code "+c),c==2){var h=_(a.fb,a),g=a.Xa;const R=!g;g=new _r(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fo(g,"https"),jo(g),R?AE(g.toString(),h):xE(g.toString(),h)}else ut(2);a.G=0,a.l&&a.l.sa(c),rm(a),Xf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function rm(a){if(a.G=0,a.ka=[],a.l){const c=Lf(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function sm(a,c,h){var g=h instanceof _r?cn(h):new _r(h);if(g.g!="")c&&(g.g=c+"."+g.g),Uo(g,g.s);else{var R=l.location;g=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var L=new _r(null);g&&Fo(L,g),c&&(L.g=c),R&&Uo(L,R),h&&(L.l=h),g=L}return h=a.D,c=a.ya,h&&c&&pe(g,h,c),pe(g,"VER",a.la),li(a,g),g}function im(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ae(new zo({eb:h})):new Ae(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function om(){}t=om.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Go(){}Go.prototype.g=function(a,c){return new Et(a,c)};function Et(a,c){Ye.call(this),this.g=new Qf(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Xr(this)}N(Et,Ye),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Au(this.g)},Et.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=fu(a),a=h);c.i.push(new pE(c.Ya++,a)),c.G==3&&Ho(c)},Et.prototype.N=function(){this.g.l=null,delete this.j,Au(this.g),delete this.g,Et.aa.N.call(this)};function am(a){pu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}N(am,pu);function lm(){gu.call(this),this.status=1}N(lm,gu);function Xr(a){this.g=a}N(Xr,om),Xr.prototype.ua=function(){lt(this.g,"a")},Xr.prototype.ta=function(a){lt(this.g,new am(a))},Xr.prototype.sa=function(a){lt(this.g,new lm)},Xr.prototype.ra=function(){lt(this.g,"b")},Go.prototype.createWebChannel=Go.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,U_=function(){return new Go},F_=function(){return Lo()},M_=yr,md={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vo.NO_ERROR=0,Vo.TIMEOUT=8,Vo.HTTP_ERROR=6,Va=Vo,Sf.COMPLETE="complete",O_=Sf,_f.EventType=Ys,Ys.OPEN="a",Ys.CLOSE="b",Ys.ERROR="c",Ys.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,Si=_f,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,V_=Ae}).apply(typeof fa<"u"?fa:typeof self<"u"?self:typeof window<"u"?window:{});const Qp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Th("@firebase/firestore");function yi(){return Ur.logLevel}function q(t,...e){if(Ur.logLevel<=ie.DEBUG){const n=e.map(Lh);Ur.debug(`Firestore (${qs}): ${t}`,...n)}}function Cn(t,...e){if(Ur.logLevel<=ie.ERROR){const n=e.map(Lh);Ur.error(`Firestore (${qs}): ${t}`,...n)}}function Ls(t,...e){if(Ur.logLevel<=ie.WARN){const n=e.map(Lh);Ur.warn(`Firestore (${qs}): ${t}`,...n)}}function Lh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw Cn(e),new Error(e)}function de(t,e){t||ee()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class H1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class q1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class G1{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new j_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new rt(e)}}class K1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Q1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new K1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class X1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Y1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new X1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=J1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Vs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Me(0,0))}static max(){return new te(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return lo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends lo{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const Z1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends lo{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return Z1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new K(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(_e.fromString(e))}static fromName(e){return new X(_e.fromString(e).popFirst(5))}static empty(){return new X(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new _e(e.slice()))}}function ex(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new ur(s,X.empty(),e)}function tx(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(te.min(),X.empty(),-1)}static max(){return new ur(te.max(),X.empty(),-1)}}function nx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==rx)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(m=>{o[d]=m,++l,l===i&&r(o)},m=>s(m))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ix(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Po(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vh.oe=-1;function ql(t){return t==null}function vl(t){return t===0&&1/t==-1/0}function ox(t){return typeof t=="number"&&Number.isInteger(t)&&!vl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function B_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ma(this.root,e,this.comparator,!0)}}class ma{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $e(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yp(this.data.getIterator())}getIteratorFrom(e){return new Yp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Yp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new qe(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $_("Invalid base64 string: "+i):i}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const ax=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(de(!!t),typeof t=="string"){let e=0;const n=ax.exec(t);if(de(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mh(t){const e=t.mapValue.fields.__previous_value__;return Oh(e)?Mh(e):e}function uo(t){const e=cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n,r,s,i,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class co{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new co("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof co&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={mapValue:{}};function zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Oh(t)?4:cx(t)?9007199254740991:ux(t)?10:11:ee()}function ln(t,e){if(t===e)return!0;const n=zr(t);if(n!==zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=cr(s.timestampValue),l=cr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),l=ke(i.doubleValue);return o===l?vl(o)===vl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Xp(o)!==Xp(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!ln(o[u],l[u])))return!1;return!0}(t,e);default:return ee()}}function ho(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function Os(t,e){if(t===e)return 0;const n=zr(t),r=zr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ke(i.integerValue||i.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Jp(t.timestampValue,e.timestampValue);case 4:return Jp(uo(t),uo(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const l=jr(i),u=jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=ue(l[d],u[d]);if(m!==0)return m}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(ke(i.latitude),ke(o.latitude));return l!==0?l:ue(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,d,m;const y=i.fields||{},_=o.fields||{},P=(l=y.value)===null||l===void 0?void 0:l.arrayValue,N=(u=_.value)===null||u===void 0?void 0:u.arrayValue,C=ue(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((m=N==null?void 0:N.values)===null||m===void 0?void 0:m.length)||0);return C!==0?C:Zp(P,N)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===pa.mapValue&&o===pa.mapValue)return 0;if(i===pa.mapValue)return 1;if(o===pa.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const _=ue(u[y],m[y]);if(_!==0)return _;const P=Os(l[u[y]],d[m[y]]);if(P!==0)return P}return ue(u.length,m.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=cr(t),r=cr(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function Zp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Os(n[s],r[s]);if(i)return i}return ue(n.length,r.length)}function Ms(t){return pd(t)}function pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=pd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pd(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function gd(t){return!!t&&"integerValue"in t}function Fh(t){return!!t&&"arrayValue"in t}function eg(t){return!!t&&"nullValue"in t}function tg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oa(t){return!!t&&"mapValue"in t}function ux(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fi(n)}setAll(e){let n=We.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Fi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(Fi(this.value))}}function W_(t){const e=[];return Gs(t.fields,(n,r)=>{const s=new We([n]);if(Oa(r)){const i=W_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,te.min(),te.min(),te.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new it(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new it(e,2,n,te.min(),te.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,te.min(),te.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this.position=e,this.inclusive=n}}function ng(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=Os(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n="asc"){this.field=e,this.dir=n}}function dx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{}class Ve extends H_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fx(e,n,r):n==="array-contains"?new gx(e,r):n==="in"?new yx(e,r):n==="not-in"?new vx(e,r):n==="array-contains-any"?new _x(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mx(e,r):new px(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Os(n,this.value)):n!==null&&zr(this.value)===zr(n)&&this.matchesComparison(Os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends H_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return q_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function q_(t){return t.op==="and"}function G_(t){return hx(t)&&q_(t)}function hx(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function yd(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(G_(t))return t.filters.map(e=>yd(e)).join(",");{const e=t.filters.map(n=>yd(n)).join(",");return`${t.op}(${e})`}}function K_(t,e){return t instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&ln(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&K_(o,s.filters[l]),!0):!1}(t,e):void ee()}function Q_(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(Q_).join(" ,")+"}"}(t):"Filter"}class fx extends Ve{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class mx extends Ve{constructor(e,n){super(e,"in",n),this.keys=X_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class px extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=X_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function X_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class gx extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fh(n)&&ho(n.arrayValue,this.value)}}class yx extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class vx extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class _x extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function sg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ex(t,e,n,r,s,i,o)}function Uh(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.ue=n}return e.ue}function jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!K_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rg(t.startAt,e.startAt)&&rg(t.endAt,e.endAt)}function vd(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wx(t,e,n,r,s,i,o,l){return new Gl(t,e,n,r,s,i,o,l)}function zh(t){return new Gl(t)}function ig(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tx(t){return t.collectionGroup!==null}function Ui(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new El(i,r))}),n.has(We.keyField().canonicalString())||e.ce.push(new El(We.keyField(),r))}return e.ce}function on(t){const e=ne(t);return e.le||(e.le=Ix(e,Ui(t))),e.le}function Ix(t,e){if(t.limitType==="F")return sg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new El(s.field,i)});const n=t.endAt?new _l(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _l(t.startAt.position,t.startAt.inclusive):null;return sg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _d(t,e,n){return new Gl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Kl(t,e){return jh(on(t),on(e))&&t.limitType===e.limitType}function Y_(t){return`${Uh(on(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Q_(s)).join(", ")}]`),ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function Ql(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ui(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=ng(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Ui(r),s)||r.endAt&&!function(o,l,u){const d=ng(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Ui(r),s))}(t,e)}function Sx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function J_(t){return(e,n)=>{let r=!1;for(const s of Ui(t)){const i=Ax(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ax(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Os(u,d):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return B_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new Se(X.comparator);function Rn(){return xx}const Z_=new Se(X.comparator);function Ai(...t){let e=Z_;for(const n of t)e=e.insert(n.key,n);return e}function e0(t){let e=Z_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return ji()}function t0(){return ji()}function ji(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const Px=new Se(X.comparator),kx=new qe(X.comparator);function se(...t){let e=kx;for(const n of t)e=e.add(n);return e}const Cx=new qe(ue);function Rx(){return Cx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vl(e)?"-0":e}}function n0(t){return{integerValue:""+t}}function Nx(t,e){return ox(e)?n0(e):Bh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this._=void 0}}function bx(t,e,n){return t instanceof wl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oh(i)&&(i=Mh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof fo?s0(t,e):t instanceof mo?i0(t,e):function(s,i){const o=r0(s,i),l=og(o)+og(s.Pe);return gd(o)&&gd(s.Pe)?n0(l):Bh(s.serializer,l)}(t,e)}function Dx(t,e,n){return t instanceof fo?s0(t,e):t instanceof mo?i0(t,e):n}function r0(t,e){return t instanceof Tl?function(r){return gd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class wl extends Xl{}class fo extends Xl{constructor(e){super(),this.elements=e}}function s0(t,e){const n=o0(e);for(const r of t.elements)n.some(s=>ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class mo extends Xl{constructor(e){super(),this.elements=e}}function i0(t,e){let n=o0(e);for(const r of t.elements)n=n.filter(s=>!ln(s,r));return{arrayValue:{values:n}}}class Tl extends Xl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function og(t){return ke(t.integerValue||t.doubleValue)}function o0(t){return Fh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Lx(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof fo&&s instanceof fo||r instanceof mo&&s instanceof mo?Vs(r.elements,s.elements,ln):r instanceof Tl&&s instanceof Tl?ln(r.Pe,s.Pe):r instanceof wl&&s instanceof wl}(t.transform,e.transform)}class Vx{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yl{}function a0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new u0(t.key,Tn.none()):new ko(t.key,t.data,Tn.none());{const n=t.data,r=Dt.empty();let s=new qe(We.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new qr(t.key,r,new Ht(s.toArray()),Tn.none())}}function Ox(t,e,n){t instanceof ko?function(s,i,o){const l=s.value.clone(),u=lg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof qr?function(s,i,o){if(!Ma(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=lg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(l0(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zi(t,e,n,r){return t instanceof ko?function(i,o,l,u){if(!Ma(i.precondition,o))return l;const d=i.value.clone(),m=ug(i.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof qr?function(i,o,l,u){if(!Ma(i.precondition,o))return l;const d=ug(i.fieldTransforms,u,o),m=o.data;return m.setAll(l0(i)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(i,o,l){return Ma(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Mx(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=r0(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function ag(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vs(r,s,(i,o)=>Lx(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ko extends Yl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qr extends Yl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function l0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lg(t,e,n){const r=new Map;de(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Dx(o,l,n[s]))}return r}function ug(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,bx(i,o,e))}return r}class u0 extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fx extends Yl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ox(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=t0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=a0(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>ag(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>ag(n,r))}}class $h{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){de(e.mutations.length===r.length);let s=function(){return Px}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new $h(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,oe;function Bx(t){switch(t){default:return ee();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function c0(t){if(t===void 0)return Cn("GRPC error has no .code"),M.UNKNOWN;switch(t){case be.OK:return M.OK;case be.CANCELLED:return M.CANCELLED;case be.UNKNOWN:return M.UNKNOWN;case be.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case be.INTERNAL:return M.INTERNAL;case be.UNAVAILABLE:return M.UNAVAILABLE;case be.UNAUTHENTICATED:return M.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case be.NOT_FOUND:return M.NOT_FOUND;case be.ALREADY_EXISTS:return M.ALREADY_EXISTS;case be.PERMISSION_DENIED:return M.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case be.ABORTED:return M.ABORTED;case be.OUT_OF_RANGE:return M.OUT_OF_RANGE;case be.UNIMPLEMENTED:return M.UNIMPLEMENTED;case be.DATA_LOSS:return M.DATA_LOSS;default:return ee()}}(oe=be||(be={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=new Rr([4294967295,4294967295],0);function cg(t){const e=$x().encode(t),n=new L_;return n.update(e),new Uint8Array(n.digest())}function dg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rr([n,r],0),new Rr([s,i],0)]}class Wh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xi(`Invalid padding: ${n}`);if(r<0)throw new xi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Rr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Rr.fromNumber(r)));return s.compare(Wx)===1&&(s=new Rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=cg(e),[r,s]=dg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=cg(e),[r,s]=dg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jl(te.min(),s,new Se(ue),Rn(),se())}}class Co{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Co(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class d0{constructor(e,n){this.targetId=e,this.me=n}}class h0{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class hg{constructor(){this.fe=0,this.ge=mg(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new Co(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=mg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Hx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rn(),this.qe=fg(),this.Qe=new Se(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(vd(i))if(r===0){const o=new X(i.path);this.Ue(n,o,it.newNoDocument(o,te.min()))}else de(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=jr(r).toUint8Array()}catch(u){if(u instanceof $_)return Ls("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Wh(o,s,i)}catch(u){return Ls(u instanceof xi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&vd(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,it.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=se();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Jl(e,n,this.Qe,this.ke,r);return this.ke=Rn(),this.qe=fg(),this.Qe=new Se(ue),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new hg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new qe(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function fg(){return new Se(X.comparator)}function mg(){return new Se(X.comparator)}const qx={asc:"ASCENDING",desc:"DESCENDING"},Gx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Kx={and:"AND",or:"OR"};class Qx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ed(t,e){return t.useProto3Json||ql(e)?e:{value:e}}function Il(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function f0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Xx(t,e){return Il(t,e.toTimestamp())}function an(t){return de(!!t),te.fromTimestamp(function(n){const r=cr(n);return new Me(r.seconds,r.nanos)}(t))}function Hh(t,e){return wd(t,e).canonicalString()}function wd(t,e){const n=function(s){return new _e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function m0(t){const e=_e.fromString(t);return de(_0(e)),e}function Td(t,e){return Hh(t.databaseId,e.path)}function lc(t,e){const n=m0(e);if(n.get(1)!==t.databaseId.projectId)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(g0(n))}function p0(t,e){return Hh(t.databaseId,e)}function Yx(t){const e=m0(t);return e.length===4?_e.emptyPath():g0(e)}function Id(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function g0(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pg(t,e,n){return{name:Td(t,e),fields:n.value.mapValue.fields}}function Jx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(de(m===void 0||typeof m=="string"),Ke.fromBase64String(m||"")):(de(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Ke.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const m=d.code===void 0?M.UNKNOWN:c0(d.code);return new K(m,d.message||"")}(o);n=new h0(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lc(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):te.min(),l=new Dt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(s,i,o,l),d=r.targetIds||[],m=r.removedTargetIds||[];n=new Fa(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lc(t,r.document),i=r.readTime?an(r.readTime):te.min(),o=it.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Fa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lc(t,r.document),i=r.removedTargetIds||[];n=new Fa([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new zx(s,i),l=r.targetId;n=new d0(l,o)}}return n}function Zx(t,e){let n;if(e instanceof ko)n={update:pg(t,e.key,e.value)};else if(e instanceof u0)n={delete:Td(t,e.key)};else if(e instanceof qr)n={update:pg(t,e.key,e.data),updateMask:lP(e.fieldMask)};else{if(!(e instanceof Fx))return ee();n={verify:Td(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof wl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Tl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Xx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function eP(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(te.min())&&(o=an(i)),new Vx(o,s.transformResults||[])}(n,e))):[]}function tP(t,e){return{documents:[p0(t,e.path)]}}function nP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=p0(t,s);const i=function(d){if(d.length!==0)return v0(un.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(m=>function(_){return{field:ts(_.field),direction:iP(_.dir)}}(m))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ed(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function rP(t){let e=Yx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){de(r===1);const m=n.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];n.where&&(i=function(y){const _=y0(y);return _ instanceof un&&G_(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(_=>function(N){return new El(ns(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(y){let _;return _=typeof y=="object"?y.value:y,ql(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(y){const _=!!y.before,P=y.values||[];return new _l(P,_)}(n.startAt));let d=null;return n.endAt&&(d=function(y){const _=!y.before,P=y.values||[];return new _l(P,_)}(n.endAt)),wx(e,s,o,i,l,"F",u,d)}function sP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function y0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ns(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ns(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(ns(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>y0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function iP(t){return qx[t]}function oP(t){return Gx[t]}function aP(t){return Kx[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return We.fromServerFormat(t.fieldPath)}function v0(t){return t instanceof Ve?function(n){if(n.op==="=="){if(tg(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(eg(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tg(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(eg(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:oP(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>v0(s));return r.length===1?r[0]:{compositeFilter:{op:aP(n.op),filters:r}}}(t):ee()}function lP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r,s,i=te.min(),o=te.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.ct=e}}function cP(t){const e=rP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_d(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.un=new hP}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ur.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class hP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(_e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fs(0)}static kn(){return new Fs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zi(r.mutation,s,Ht.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=Pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ai();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Rn();const o=ji(),l=function(){return ji()}();return n.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof qr)?i=i.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),zi(m.mutation,d,m.mutation.getFieldMask(),Me.now())):o.set(d.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>o.set(d,m)),n.forEach((d,m)=>{var y;return l.set(d,new mP(m,(y=o.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ji();let s=new Se((o,l)=>o-l),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let m=r.get(u)||Ht.empty();m=l.applyToLocalView(d,m),r.set(u,m);const y=(s.get(l.batchId)||se()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,y=t0();m.forEach(_=>{if(!i.has(_)){const P=a0(n.get(_),r.get(_));P!==null&&y.set(_,P),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,y))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Pr());let l=-1,u=i;return o.next(d=>F.forEach(d,(m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(m)?F.resolve():this.remoteDocumentCache.getEntry(e,m).next(_=>{u=u.insert(m,_)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,se())).next(m=>({batchId:l,changes:e0(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=Ai();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ai();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const d=function(y,_){return new Gl(_,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((y,_)=>{o=o.insert(y,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,it.newInvalidDocument(m)))});let l=Ai();return o.forEach((u,d)=>{const m=i.get(u);m!==void 0&&zi(m.mutation,d,Ht.empty(),Me.now()),Ql(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:cP(s.bundledQuery),readTime:an(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.overlays=new Se(X.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Pr(),i=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((d,m)=>d-m);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=Pr(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Pr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return F.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jx(n,r));let i=this.Ir.get(n);i===void 0&&(i=se(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.Tr=new qe(Fe.Er),this.dr=new qe(Fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Fe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new _e([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new _e([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=se();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new qe(Fe.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ux(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Fe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ue);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new X(i),0);let l=new qe(ue);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){de(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Fe(n,0),s=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.Mr=e,this.docs=function(){return new Se(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Rn();const o=n.path,l=new X(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||nx(tx(m),r)<=0||(s.has(m.key)||Ql(n,m))&&(i=i.insert(m.key,m.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wP(this)}getSize(e){return F.resolve(this.size)}}class wP extends fP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.persistence=e,this.Nr=new Ks(n=>Uh(n),jh),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new qh,this.targetCount=0,this.kr=Fs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Vh(0),this.Kr=!1,this.Kr=!0,this.$r=new vP,this.referenceDelegate=e(this),this.Ur=new TP(this),this.indexManager=new dP,this.remoteDocumentCache=function(s){return new EP(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new uP(n),this.Gr=new gP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new _P(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new SP(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class SP extends sx{constructor(e){super(),this.currentSequenceNumber=e}}class Gh{constructor(e){this.persistence=e,this.Jr=new qh,this.Yr=null}static Zr(e){return new Gh(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gI()?8:ix(at())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AP;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(yi()<=ie.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(yi()<=ie.DEBUG&&q("QueryEngine","Query:",es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(yi()<=ie.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):F.resolve())}Yi(e,n){if(ig(n))return F.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_d(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,_d(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,s){return ig(n)||s.isEqual(te.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?F.resolve(null):(yi()<=ie.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(n)),this.rs(e,o,n,ex(s,-1)).next(l=>l))})}ts(e,n){let r=new qe(J_(e));return n.forEach((s,i)=>{Ql(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return yi()<=ie.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",es(n)),this.Ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Se(ue),this._s=new Ks(i=>Uh(i),jh),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function kP(t,e,n,r){return new PP(t,e,n,r)}async function E0(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=se();for(const d of s){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function CP(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const y=d.batch,_=y.keys();let P=F.resolve();return _.forEach(N=>{P=P.next(()=>m.getEntry(u,N)).next(C=>{const D=d.docVersions.get(N);de(D!==null),C.version.compareTo(D)<0&&(y.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),m.addEntry(C)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function w0(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function RP(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((m,y)=>{const _=s.get(y);if(!_)return;l.push(n.Ur.removeMatchingKeys(i,m.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(i,m.addedDocuments,y)));let P=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?P=P.withResumeToken(Ke.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):m.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(m.resumeToken,r)),s=s.insert(y,P),function(C,D,I){return C.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(_,P,m)&&l.push(n.Ur.updateTargetData(i,P))});let u=Rn(),d=se();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(NP(i,o,e.documentUpdates).next(m=>{u=m.Ps,d=m.Is})),!r.isEqual(te.min())){const m=n.Ur.getLastRemoteSnapshotVersion(i).next(y=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.os=s,i))}function NP(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Rn();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function bP(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DP(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Sd(t,e,n){const r=ne(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Po(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function gg(t,e,n){const r=ne(t);let s=te.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,m){const y=ne(u),_=y._s.get(m);return _!==void 0?F.resolve(y.os.get(_)):y.Ur.getTargetData(d,m)}(r,o,on(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:se())).next(l=>(LP(r,Sx(e),l),{documents:l,Ts:i})))}function LP(t,e,n){let r=t.us.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class yg{constructor(){this.activeTargetIds=Rx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VP{constructor(){this.so=new yg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new yg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga=null;function uc(){return ga===null?ga=function(){return 268435456+Math.round(2147483648*Math.random())}():ga++,"0x"+ga.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class UP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=uc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,u,d,s).then(m=>(q("RestConnection",`Received RPC '${n}' ${l}: `,m),m),m=>{throw Ls("RestConnection",`RPC '${n}' ${l} failed with error: `,m,"url: ",u,"request:",s),m})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=MP[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=uc();return new Promise((o,l)=>{const u=new V_;u.setWithCredentials(!0),u.listenOnce(O_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Va.NO_ERROR:const m=u.getResponseJson();q(nt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case Va.TIMEOUT:q(nt,`RPC '${e}' ${i} timed out`),l(new K(M.DEADLINE_EXCEEDED,"Request time out"));break;case Va.HTTP_ERROR:const y=u.getStatus();if(q(nt,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const P=_==null?void 0:_.error;if(P&&P.status&&P.message){const N=function(D){const I=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(I)>=0?I:M.UNKNOWN}(P.status);l(new K(N,P.message))}else l(new K(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(M.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{q(nt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);q(nt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=uc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=U_(),l=F_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const m=i.join("");q(nt,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=o.createWebChannel(m,u);let _=!1,P=!1;const N=new FP({Io:D=>{P?q(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(_||(q(nt,`Opening RPC '${e}' stream ${s} transport.`),y.open(),_=!0),q(nt,`RPC '${e}' stream ${s} sending:`,D),y.send(D))},To:()=>y.close()}),C=(D,I,E)=>{D.listen(I,A=>{try{E(A)}catch(b){setTimeout(()=>{throw b},0)}})};return C(y,Si.EventType.OPEN,()=>{P||(q(nt,`RPC '${e}' stream ${s} transport opened.`),N.yo())}),C(y,Si.EventType.CLOSE,()=>{P||(P=!0,q(nt,`RPC '${e}' stream ${s} transport closed`),N.So())}),C(y,Si.EventType.ERROR,D=>{P||(P=!0,Ls(nt,`RPC '${e}' stream ${s} transport errored:`,D),N.So(new K(M.UNAVAILABLE,"The operation could not be completed")))}),C(y,Si.EventType.MESSAGE,D=>{var I;if(!P){const E=D.data[0];de(!!E);const A=E,b=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(b){q(nt,`RPC '${e}' stream ${s} received error:`,b);const V=b.status;let O=function(v){const S=be[v];if(S!==void 0)return c0(S)}(V),w=b.message;O===void 0&&(O=M.INTERNAL,w="Unknown error status: "+V+" with message "+b.message),P=!0,N.So(new K(O,w)),y.close()}else q(nt,`RPC '${e}' stream ${s} received:`,E),N.bo(E)}}),C(l,M_.STAT_EVENT,D=>{D.stat===md.PROXY?q(nt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===md.NOPROXY&&q(nt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){return new Qx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new T0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new K(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jP extends I0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Jx(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?an(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Id(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=vd(u)?{documents:tP(i,u)}:{query:nP(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=f0(i,o.resumeToken);const d=Ed(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Il(i,o.snapshotVersion.toTimestamp());const d=Ed(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=sP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Id(this.serializer),n.removeTarget=e,this.a_(n)}}class zP extends I0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=eP(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Id(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Zx(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,wd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,wd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class $P{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Cn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ne(u);d.L_.add(4),await Ro(d),d.q_.set("Unknown"),d.L_.delete(4),await eu(d)}(this))})}),this.q_=new $P(r,s)}}async function eu(t){if(Gr(t))for(const e of t.B_)await e(!0)}async function Ro(t){for(const e of t.B_)await e(!1)}function S0(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Jh(n)?Yh(n):Qs(n).r_()&&Xh(n,e))}function Qh(t,e){const n=ne(t),r=Qs(n);n.N_.delete(e),r.r_()&&A0(n,e),n.N_.size===0&&(r.r_()?r.o_():Gr(n)&&n.q_.set("Unknown"))}function Xh(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).A_(e)}function A0(t,e){t.Q_.xe(e),Qs(t).R_(e)}function Yh(t){t.Q_=new Hx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.q_.v_()}function Jh(t){return Gr(t)&&!Qs(t).n_()&&t.N_.size>0}function Gr(t){return ne(t).L_.size===0}function x0(t){t.Q_=void 0}async function HP(t){t.q_.set("Online")}async function qP(t){t.N_.forEach((e,n)=>{Xh(t,e)})}async function GP(t,e){x0(t),Jh(t)?(t.q_.M_(e),Yh(t)):t.q_.set("Unknown")}async function KP(t,e,n){if(t.q_.set("Online"),e instanceof h0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sl(t,r)}else if(e instanceof Fa?t.Q_.Ke(e):e instanceof d0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await w0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.N_.get(d);m&&i.N_.set(d,m.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const m=i.N_.get(u);if(!m)return;i.N_.set(u,m.withResumeToken(Ke.EMPTY_BYTE_STRING,m.snapshotVersion)),A0(i,u);const y=new Kn(m.target,u,d,m.sequenceNumber);Xh(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Sl(t,r)}}async function Sl(t,e,n){if(!Po(e))throw e;t.L_.add(1),await Ro(t),t.q_.set("Offline"),n||(n=()=>w0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await eu(t)})}function P0(t,e){return e().catch(n=>Sl(t,n,e))}async function tu(t){const e=ne(t),n=dr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;QP(e);)try{const s=await bP(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,XP(e,s)}catch(s){await Sl(e,s)}k0(e)&&C0(e)}function QP(t){return Gr(t)&&t.O_.length<10}function XP(t,e){t.O_.push(e);const n=dr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function k0(t){return Gr(t)&&!dr(t).n_()&&t.O_.length>0}function C0(t){dr(t).start()}async function YP(t){dr(t).p_()}async function JP(t){const e=dr(t);for(const n of t.O_)e.m_(n.mutations)}async function ZP(t,e,n){const r=t.O_.shift(),s=$h.from(r,e,n);await P0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await tu(t)}async function ek(t,e){e&&dr(t).V_&&await async function(r,s){if(function(o){return Bx(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();dr(r).s_(),await P0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await tu(r)}}(t,e),k0(t)&&C0(t)}async function _g(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n.L_.add(3),await Ro(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await eu(n)}async function tk(t,e){const n=ne(t);e?(n.L_.delete(2),await eu(n)):e||(n.L_.add(2),await Ro(n),n.q_.set("Unknown"))}function Qs(t){return t.K_||(t.K_=function(n,r,s){const i=ne(n);return i.w_(),new jP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:HP.bind(null,t),Ro:qP.bind(null,t),mo:GP.bind(null,t),d_:KP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Jh(t)?Yh(t):t.q_.set("Unknown")):(await t.K_.stop(),x0(t))})),t.K_}function dr(t){return t.U_||(t.U_=function(n,r,s){const i=ne(n);return i.w_(),new zP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:YP.bind(null,t),mo:ek.bind(null,t),f_:JP.bind(null,t),g_:ZP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await tu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Zh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ef(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),Po(t))return new K(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Ai(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new As(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof As)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new As;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.W_=new Se(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Us{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Us(e,n,As.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class rk{constructor(){this.queries=wg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=wg(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(M.ABORTED,"Firestore shutting down"))}}function wg(){return new Ks(t=>Y_(t),Kl)}async function R0(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new nk,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=ef(o,`Initialization of query '${es(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&tf(n)}async function N0(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sk(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&tf(n)}function ik(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function tf(t){t.Y_.forEach(e=>{e.next()})}var Ad,Tg;(Tg=Ad||(Ad={})).ea="default",Tg.Cache="cache";class b0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ad.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.key=e}}class L0{constructor(e){this.key=e}}class ok{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=J_(e),this.Ra=new As(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Eg,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const _=s.get(m),P=Ql(this.query,y)?y:null,N=!!_&&this.mutatedKeys.has(_.key),C=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;_&&P?_.data.isEqual(P.data)?N!==C&&(r.track({type:3,doc:P}),D=!0):this.ga(_,P)||(r.track({type:2,doc:P}),D=!0,(u&&this.Aa(P,u)>0||d&&this.Aa(P,d)<0)&&(l=!0)):!_&&P?(r.track({type:0,doc:P}),D=!0):_&&!P&&(r.track({type:1,doc:_}),D=!0,(u||d)&&(l=!0)),D&&(P?(o=o.add(P),i=C?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((m,y)=>function(P,N){const C=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return C(P)-C(N)}(m.type,y.type)||this.Aa(m.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Us(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Eg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new L0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new D0(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Us.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ak{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lk{constructor(e){this.key=e,this.va=!1}}class uk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ks(l=>Y_(l),Kl),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(X.comparator),this.Na=new Map,this.La=new qh,this.Ba={},this.ka=new Map,this.qa=Fs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ck(t,e,n=!0){const r=j0(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await V0(r,e,n,!0),s}async function dk(t,e){const n=j0(t);await V0(n,e,!0,!1)}async function V0(t,e,n,r){const s=await DP(t.localStore,on(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await hk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&S0(t.remoteStore,s),l}async function hk(t,e,n,r,s){t.Ka=(y,_,P)=>async function(C,D,I,E){let A=D.view.ma(I);A.ns&&(A=await gg(C.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,A)));const b=E&&E.targetChanges.get(D.targetId),V=E&&E.targetMismatches.get(D.targetId)!=null,O=D.view.applyChanges(A,C.isPrimaryClient,b,V);return Sg(C,D.targetId,O.wa),O.snapshot}(t,y,_,P);const i=await gg(t.localStore,e,!0),o=new ok(e,i.Ts),l=o.ma(i.documents),u=Co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);Sg(t,n,d.wa);const m=new ak(e,n,o);return t.Fa.set(e,m),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function fk(t,e,n){const r=ne(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Kl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Sd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Qh(r.remoteStore,s.targetId),xd(r,s.targetId)}).catch(xo)):(xd(r,s.targetId),await Sd(r.localStore,s.targetId,!0))}async function mk(t,e){const n=ne(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qh(n.remoteStore,r.targetId))}async function pk(t,e,n){const r=Tk(t);try{const s=await function(o,l){const u=ne(o),d=Me.now(),m=l.reduce((P,N)=>P.add(N.key),se());let y,_;return u.persistence.runTransaction("Locally write mutations","readwrite",P=>{let N=Rn(),C=se();return u.cs.getEntries(P,m).next(D=>{N=D,N.forEach((I,E)=>{E.isValidDocument()||(C=C.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(P,N)).next(D=>{y=D;const I=[];for(const E of l){const A=Mx(E,y.get(E.key).overlayedDocument);A!=null&&I.push(new qr(E.key,A,W_(A.value.mapValue),Tn.exists(!0)))}return u.mutationQueue.addMutationBatch(P,d,I,l)}).next(D=>{_=D;const I=D.applyToLocalDocumentSet(y,C);return u.documentOverlayCache.saveOverlays(P,D.batchId,I)})}).then(()=>({batchId:_.batchId,changes:e0(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Se(ue)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await No(r,s.changes),await tu(r.remoteStore)}catch(s){const i=ef(s,"Failed to persist write");n.reject(i)}}async function O0(t,e){const n=ne(t);try{const r=await RP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?de(o.va):s.removedDocuments.size>0&&(de(o.va),o.va=!1))}),await No(n,r,e)}catch(r){await xo(r)}}function Ig(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let d=!1;u.queries.forEach((m,y)=>{for(const _ of y.j_)_.Z_(l)&&(d=!0)}),d&&tf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gk(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Se(X.comparator);o=o.insert(i,it.newNoDocument(i,te.min()));const l=se().add(i),u=new Jl(te.min(),new Map,new Se(ue),o,l);await O0(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),nf(r)}else await Sd(r.localStore,e,!1).then(()=>xd(r,e,n)).catch(xo)}async function yk(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await CP(n.localStore,e);F0(n,r,null),M0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await No(n,s)}catch(s){await xo(s)}}async function vk(t,e,n){const r=ne(t);try{const s=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(y=>(de(y!==null),m=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);F0(r,e,n),M0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await No(r,s)}catch(s){await xo(s)}}function M0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function F0(t,e,n){const r=ne(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function xd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||U0(t,r)})}function U0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Qh(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),nf(t))}function Sg(t,e,n){for(const r of n)r instanceof D0?(t.La.addReference(r.key,e),_k(t,r)):r instanceof L0?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||U0(t,r.key)):ee()}function _k(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),nf(t))}function nf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new lk(n)),t.Oa=t.Oa.insert(n,r),S0(t.remoteStore,new Kn(on(zh(n.path)),r,"TargetPurposeLimboResolution",Vh.oe))}}async function No(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var m;if((d||n)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=n==null?void 0:n.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Kh.Wi(u.targetId,d);i.push(y)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,d){const m=ne(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>F.forEach(d,_=>F.forEach(_.$i,P=>m.persistence.referenceDelegate.addReference(y,_.targetId,P)).next(()=>F.forEach(_.Ui,P=>m.persistence.referenceDelegate.removeReference(y,_.targetId,P)))))}catch(y){if(!Po(y))throw y;q("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const _=y.targetId;if(!y.fromCache){const P=m.os.get(_),N=P.snapshotVersion,C=P.withLastLimboFreeSnapshotVersion(N);m.os=m.os.insert(_,C)}}}(r.localStore,i))}async function Ek(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await E0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await No(n,r.hs)}}function wk(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let s=se();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function j0(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=O0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gk.bind(null,e),e.Ca.d_=sk.bind(null,e.eventManager),e.Ca.$a=ik.bind(null,e.eventManager),e}function Tk(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vk.bind(null,e),e}class Al{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return kP(this.persistence,new xP,e.initialUser,this.serializer)}Ga(e){return new IP(Gh.Zr,this.serializer)}Wa(e){return new VP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Al.provider={build:()=>new Al};class Pd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ig(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ek.bind(null,this.syncEngine),await tk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rk}()}createDatastore(e){const n=Zl(e.databaseInfo.databaseId),r=function(i){return new UP(i)}(e.databaseInfo);return function(i,o,l,u){return new BP(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new WP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ig(this.syncEngine,n,0),function(){return vg.D()?new vg:new OP}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,m){const y=new uk(s,i,o,l,u,d);return m&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ro(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Pd.provider={build:()=>new Pd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=z_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ef(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await E0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ag(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sk(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_g(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>_g(e.remoteStore,s)),t._onlineComponents=e}async function Sk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ls("Error using user provided cache. Falling back to memory cache: "+n),await dc(t,new Al)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await dc(t,new Al);return t._offlineComponents}async function B0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Ag(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Ag(t,new Pd))),t._onlineComponents}function Ak(t){return B0(t).then(e=>e.syncEngine)}async function $0(t){const e=await B0(t),n=e.eventManager;return n.onListen=ck.bind(null,e.syncEngine),n.onUnlisten=fk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mk.bind(null,e.syncEngine),n}function xk(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const m=new z0({next:_=>{m.Za(),o.enqueueAndForget(()=>N0(i,y));const P=_.docs.has(l);!P&&_.fromCache?d.reject(new K(M.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&_.fromCache&&u&&u.source==="server"?d.reject(new K(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),y=new b0(zh(l.path),m,{includeMetadataChanges:!0,_a:!0});return R0(i,y)}(await $0(t),t.asyncQueue,e,n,r)),r.promise}function Pk(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const m=new z0({next:_=>{m.Za(),o.enqueueAndForget(()=>N0(i,y)),_.fromCache&&u.source==="server"?d.reject(new K(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),y=new b0(l,m,{includeMetadataChanges:!0,_a:!0});return R0(i,y)}(await $0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t,e,n){if(!n)throw new K(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kk(t,e,n,r){if(e===!0&&r===!0)throw new K(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pg(t){if(!X.isDocumentKey(t))throw new K(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kg(t){if(X.isDocumentKey(t))throw new K(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Br(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rf(t);throw new K(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new H1;switch(r.type){case"firstParty":return new Q1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xg.get(n);r&&(q("ComponentProvider","Removing Datastore"),xg.delete(n),r.terminate())}(this),Promise.resolve()}}function Ck(t,e,n,r={}){var s;const i=(t=Br(t,nu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=rt.MOCK_USER;else{l=uI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new K(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new rt(d)}t._authCredentials=new q1(new j_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ru(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class or extends ru{constructor(e,n,r){super(e,n,zh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new X(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function Rk(t,e,...n){if(t=Ft(t),H0("collection","path",e),t instanceof nu){const r=_e.fromString(e,...n);return kg(r),new or(t,null,r)}{if(!(t instanceof St||t instanceof or))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return kg(r),new or(t.firestore,null,r)}}function At(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=z_.newId()),H0("doc","path",e),t instanceof nu){const r=_e.fromString(e,...n);return Pg(r),new St(t,null,new X(r))}{if(!(t instanceof St||t instanceof or))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Pg(r),new St(t.firestore,t instanceof or?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new T0(this,"async_queue_retry"),this.Vu=()=>{const r=cc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new wn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Po(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Cn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Zh.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class su extends nu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Rg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rg(e),this._firestoreClient=void 0,await e}}}function Nk(t,e){const n=typeof t=="object"?t:Yv(),r=typeof t=="string"?t:"(default)",s=Sh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=aI("firestore");i&&Ck(s,...i)}return s}function sf(t){if(t._terminated)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||bk(t),t._firestoreClient}function bk(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,d,m){return new lx(l,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,W0(m.experimentalLongPollingOptions),m.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Ik(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(Ke.fromBase64String(e))}catch(n){throw new K(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=/^__.*__$/;class Lk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ko(e,this.data,n,this.fieldTransforms)}}function G0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class uf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return xl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(G0(this.Cu)&&Dk.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Vk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zl(e)}Qu(e,n,r,s=!1){return new uf({Cu:e,methodName:n,qu:r,path:We.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ok(t){const e=t._freezeSettings(),n=Zl(t._databaseId);return new Vk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mk(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Y0("Data must be an object, but it was:",o,r);const l=Q0(r,o);let u,d;if(i.merge)u=new Ht(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const _=Fk(e,y,n);if(!o.contains(_))throw new K(M.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);jk(m,_)||m.push(_)}u=new Ht(m),d=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=o.fieldTransforms;return new Lk(new Dt(l),u,d)}function K0(t,e){if(X0(t=Ft(t)))return Y0("Unsupported field value:",e,t),Q0(t,e);if(t instanceof q0)return function(r,s){if(!G0(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=K0(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nx(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Il(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Il(s.serializer,i)}}if(r instanceof af)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:f0(s.serializer,r._byteString)};if(r instanceof St){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof lf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Bh(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${rf(r)}`)}(t,e)}function Q0(t,e){const n={};return B_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(r,s)=>{const i=K0(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function X0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof af||t instanceof js||t instanceof St||t instanceof q0||t instanceof lf)}function Y0(t,e,n){if(!X0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=rf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Fk(t,e,n){if((e=Ft(e))instanceof of)return e._internalPath;if(typeof e=="string")return J0(t,e);throw xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Uk=new RegExp("[~\\*/\\[\\]]");function J0(t,e,n){if(e.search(Uk)>=0)throw xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new of(...e.split("."))._internalPath}catch{throw xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new K(M.INVALID_ARGUMENT,l+t+u)}function jk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zk extends Z0{data(){return super.data()}}function eE(t,e){return typeof e=="string"?J0(t,e):e instanceof of?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $k{convertValue(e,n="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ke(o.doubleValue));return new lf(i)}convertGeoPoint(e){return new af(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const n=cr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);de(_0(r));const s=new co(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||Cn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tE extends Z0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(eE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ua extends tE{data(e={}){return super.data(e)}}class Hk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Pi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ua(this._firestore,this._userDataWriter,r.key,r,new Pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Ua(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ua(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Pi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),m=o.indexOf(l.doc.key)),{type:qk(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){t=Br(t,St);const e=Br(t.firestore,su);return xk(sf(e),t._key).then(n=>Qk(e,t,n))}class nE extends $k{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function Gk(t){t=Br(t,ru);const e=Br(t.firestore,su),n=sf(e),r=new nE(e);return Bk(t._query),Pk(n,t._query).then(s=>new Hk(e,r,t,s))}function iu(t,e,n){t=Br(t,St);const r=Br(t.firestore,su),s=Wk(t.converter,e,n);return Kk(r,[Mk(Ok(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Tn.none())])}function Kk(t,e){return function(r,s){const i=new wn;return r.asyncQueue.enqueueAndForget(async()=>pk(await Ak(r),s,i)),i.promise}(sf(t),e)}function Qk(t,e,n){const r=n.docs.get(e._key),s=new nE(t);return new tE(t,s,e._key,r,new Pi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){qs=s})(Ws),Ds(new Or("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new su(new G1(r.getProvider("auth-internal")),new Y1(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new K(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new co(d.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ir(Qp,"4.7.3",e),ir(Qp,"4.7.3","esm2017")})();const Xk={apiKey:"AIzaSyAcjNCDe3-Whc5LUcd9Xfyl68hVYcdz1GU",authDomain:"alex-english-academy-react.firebaseapp.com",projectId:"alex-english-academy-react",storageBucket:"alex-english-academy-react.firebasestorage.app",messagingSenderId:"166060472334",appId:"1:166060472334:web:5e12a5376efc73f192e45f"},rE=Xv(Xk),ya=$1(rE),gt=Nk(rE);function Ng({onLogin:t,onNavigate:e}){const[n,r]=G.useState(!1),[s,i]=G.useState(!1),[o,l]=G.useState(!1),[u,d]=G.useState(""),[m,y]=G.useState(""),[_,P]=G.useState(""),[N,C]=G.useState(""),[D,I]=G.useState(""),[E,A]=G.useState(""),[b,V]=G.useState(!1),O=async p=>{var v;if(p.preventDefault(),I(""),A(""),V(!0),!u||!m){I("Por favor, preencha todos os campos"),V(!1);return}try{const S=At(gt,"students",u),x=await Ut(S);if(!x.exists()){I("Usuário não encontrado. Contate o Professor Alex."),V(!1);return}const k=x.data();if(k.password!==m){I("Senha incorreta"),V(!1);return}const T=`${u}@student.alexacademy.com`;try{await Fp(ya,T,m)}catch(Qe){if(Qe.code==="auth/user-not-found")try{await RA(ya,T,m)}catch(Xe){console.log("User creation error:",Xe)}}const Ee={username:u,displayName:k.name||u,email:T,userType:"student",uid:(v=ya.currentUser)==null?void 0:v.uid};A("✅ Login realizado com sucesso!"),setTimeout(()=>{t(Ee,"student"),V(!1)},1e3)}catch(S){console.error("Student Login Error:",S),I("Erro ao fazer login. Verifique suas credenciais."),V(!1)}},w=async p=>{if(p.preventDefault(),I(""),A(""),V(!0),!_||!N){I("Por favor, preencha todos os campos"),V(!1);return}try{const S=(await Fp(ya,_,N)).user,x=At(gt,"teachers",S.uid),k=await Ut(x);let T;k.exists()?T=k.data():(T={email:_,displayName:"Professor Alex",userType:"teacher",createdAt:Date.now(),uid:S.uid},await iu(x,T));const Ee={email:_,displayName:T.displayName||"Professor Alex",userType:"teacher",uid:S.uid};A("✅ Login de professor realizado com sucesso!"),setTimeout(()=>{t(Ee,"teacher"),r(!1),V(!1)},1e3)}catch(v){console.error("Teacher Login Error:",v);let S="Email ou senha inválidos";v.code==="auth/user-not-found"?S="Professor não encontrado. Contate o administrador.":v.code==="auth/wrong-password"?S="Senha incorreta":v.code==="auth/invalid-email"?S="Email inválido":v.code==="auth/too-many-requests"&&(S="Muitas tentativas. Tente novamente mais tarde."),I(S),V(!1)}};return f.createElement("div",{className:"sophisticated-bg min-h-screen"},f.createElement("div",{className:"min-h-screen flex items-center justify-center p-4"},f.createElement("div",{className:"w-full max-w-md"},f.createElement("div",{className:"elegant-card rounded-3xl p-8 fade-in"},f.createElement("div",{className:"text-center mb-8"},f.createElement("div",{className:"w-20 h-20 logo-sophisticated rounded-full flex items-center justify-center mx-auto mb-6"},f.createElement("span",{className:"text-3xl font-bold text-white"},"A")),f.createElement("h1",{className:"text-2xl font-medium",style:{color:"var(--alex-blue)"},className:"mb-1"},"Teacher Alex"),f.createElement("h2",{className:"text-4xl font-bold",style:{color:"var(--academy-red)"},className:"mb-4"},"ENGLISH ACADEMY"),f.createElement("div",{className:"beta-badge text-white px-4 py-2 rounded-full text-sm font-semibold mb-5"},f.createElement("span",{className:"w-2 h-2 bg-white rounded-full mr-2 animate-pulse"}),"FIREBASE AUTH"),f.createElement("h3",{className:"text-xl font-medium mb-2",style:{color:"var(--academy-red)"}},"Portal do Estudante"),f.createElement("p",{className:"text-base",style:{color:"var(--medium-gray)"}},"Autenticação segura via Firebase")),f.createElement("form",{onSubmit:O,className:"space-y-5"},f.createElement("div",null,f.createElement("label",{className:"block text-base font-medium mb-2",style:{color:"var(--charcoal)"}},"Nome de usuário"),f.createElement("input",{type:"text",placeholder:"Digite seu nome de usuário",value:u,onChange:p=>d(p.target.value),disabled:b,required:!0,className:"elegant-input"})),f.createElement("div",null,f.createElement("label",{className:"block text-base font-medium mb-2",style:{color:"var(--charcoal)"}},"Senha"),f.createElement("div",{className:"relative"},f.createElement("input",{type:s?"text":"password",placeholder:"Digite sua senha",value:m,onChange:p=>y(p.target.value),disabled:b,required:!0,className:"elegant-input pr-12"}),f.createElement("button",{type:"button",onClick:()=>i(!s),disabled:b,className:"absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity",style:{background:"none",border:"none",fontSize:"18px",color:"var(--medium-gray)"}},s?"👁️":"👁️‍🗨️"))),f.createElement("button",{type:"submit",disabled:b,className:`btn-primary w-full text-white font-bold py-4 rounded-xl text-lg transition-all ${b?"opacity-50 cursor-not-allowed":"hover:transform hover:scale-105"}`},b?f.createElement("div",{className:"flex items-center justify-center"},f.createElement("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"AUTENTICANDO..."):"ACESSAR MINHAS AULAS")),f.createElement("div",{className:"text-center mt-8 pt-6",style:{borderTop:"1px solid var(--light-gray)"}},f.createElement("p",{className:"text-base mb-1",style:{color:"var(--medium-gray)"}},"Precisa de ajuda?"),f.createElement("p",{className:"text-base font-medium mb-6",style:{color:"var(--charcoal)"}},"Entre em contato com ",f.createElement("span",{style:{color:"var(--academy-red)"},className:"font-semibold"},"Professor Alex")),f.createElement("div",{className:"space-y-3"},f.createElement("button",{className:"block w-full link-sophisticated text-base py-3 px-4 rounded-lg transition-all font-medium",style:{background:"none",border:"none"},disabled:b},"Esqueci minha senha"),f.createElement("button",{onClick:()=>r(!0),disabled:b,className:"block w-full link-muted text-sm py-3 px-4 rounded-lg hover:bg-gray-50 transition-all",style:{background:"none",border:"none"}},"🎓 Acesso para Professores"))),D&&f.createElement("div",{className:"mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-base text-center font-medium"},D),E&&f.createElement("div",{className:"mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-base text-center font-medium"},E)))),n&&f.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-4 z-50"},f.createElement("div",{className:"elegant-card rounded-2xl p-6 w-full max-w-sm"},f.createElement("h3",{className:"text-xl font-bold mb-6 text-center",style:{color:"var(--charcoal)"}},"🎓 Acesso Professor (Firebase)"),f.createElement("form",{onSubmit:w,className:"space-y-4"},f.createElement("input",{type:"email",placeholder:"Email do Professor",value:_,onChange:p=>P(p.target.value),disabled:b,required:!0,className:"elegant-input p-3 rounded-lg"}),f.createElement("div",{className:"relative"},f.createElement("input",{type:o?"text":"password",placeholder:"Senha",value:N,onChange:p=>C(p.target.value),disabled:b,required:!0,className:"elegant-input p-3 rounded-lg pr-12"}),f.createElement("button",{type:"button",onClick:()=>l(!o),disabled:b,className:"absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity",style:{background:"none",border:"none",fontSize:"16px",color:"var(--medium-gray)"}},o?"👁️":"👁️‍🗨️")),f.createElement("button",{type:"submit",disabled:b,className:`btn-secondary w-full text-white font-semibold py-3 rounded-lg transition-all ${b?"opacity-50 cursor-not-allowed":"hover:transform hover:scale-105"}`},b?f.createElement("div",{className:"flex items-center justify-center"},f.createElement("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"Autenticando..."):"Acessar Dashboard")),f.createElement("button",{onClick:()=>r(!1),disabled:b,className:"w-full mt-4 text-sm py-2 transition-colors",style:{background:"none",border:"none",color:"var(--medium-gray)"}},"Fechar"))),f.createElement("style",{jsx:!0},`
        .sophisticated-bg {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          min-height: 100vh;
        }

        .elegant-card {
          background: white;
          border: 2px solid #e2e8f0;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .logo-sophisticated {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .beta-badge {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          display: inline-flex;
          align-items: center;
        }

        .elegant-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          background: white;
          color: #1f2937;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .elegant-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          transform: translateY(-1px);
        }

        .elegant-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-primary {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover:not(:disabled) {
          background: linear-gradient(135deg, #b91c1c, #991b1b);
          box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3);
        }

        .btn-secondary {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover:not(:disabled) {
          background: linear-gradient(135deg, #1e40af, #1d4ed8);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        .link-sophisticated {
          color: #3b82f6;
          border: 2px solid #dbeafe;
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
        }

        .link-sophisticated:hover {
          background: linear-gradient(135deg, #bfdbfe, #93c5fd);
          border-color: #3b82f6;
        }

        .link-muted {
          color: #6b7280;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        :root {
          --alex-blue: #3b82f6;
          --academy-red: #dc2626;
          --charcoal: #1f2937;
          --medium-gray: #6b7280;
          --light-gray: #e2e8f0;
          --soft-blue: #dbeafe;
        }
      `))}function Yk({user:t,onLogout:e,onNavigate:n}){const[r,s]=G.useState({level:1,xp:0,streak:0,completedLessons:0,totalLessons:110}),[i,o]=G.useState(!0),[l,u]=G.useState("🔥 Loading your progress...");G.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){u("❌ User not found"),o(!1);return}try{u("🔥 Loading Foundation progress...");const E=At(gt,"students",t.username,"progress","foundation"),A=await Ut(E);u("🎮 Loading Gaming progress...");const b=At(gt,"students",t.username,"progress","gaming"),V=await Ut(b);let O=0,w=0,p=0,v=0;if(A.exists()){const T=A.data();O+=T.totalXP||0,p=Object.keys(T.lessons||{}).length,w+=p}if(V.exists()){const T=V.data();O+=T.totalXP||0,v=Object.keys(T.lessons||{}).length,w+=v}const S=d(O),x=m(A,V),k={level:S,xp:O,streak:x,completedLessons:w,totalLessons:110,foundationLessons:p,gamingLessons:v};s(k),u(`✅ Progress loaded! ${p} Foundation + ${v} Gaming lessons`),o(!1),setTimeout(()=>{_(k)},500)}catch(E){console.error("Firebase Error loading progress:",E),u("❌ Failed to load progress"),o(!1);const A={level:3,xp:275,streak:5,completedLessons:8,totalLessons:110};s(A),setTimeout(()=>_(A),500)}})()},[t]);const d=I=>{if(I<100)return 1;let E=1,A=0;for(;I>=A&&(E++,A+=(E-1)*150,!(E>1e3)););return Math.min(E-1,1e3)},m=(I,E)=>{let A=0;if(I.exists()){const V=I.data();A=Math.max(A,V.lastUpdated||0)}if(E.exists()){const V=E.data();A=Math.max(A,V.lastUpdated||0)}if(A===0)return 0;const b=Math.floor((Date.now()-A)/(1e3*60*60*24));return b<=1?5:Math.max(0,5-b)},y=I=>I<=50?"Beginner":I<=150?"Elementary":I<=400?"Intermediate":I<=700?"Advanced":"Expert",_=I=>{[{id:"totalCompletedCounter",value:I.completedLessons},{id:"totalXPCounter",value:I.xp},{id:"currentLevelCounter",value:I.level},{id:"dayStreakCounter",value:I.streak}].forEach((A,b)=>{setTimeout(()=>{const V=document.getElementById(A.id);P(V,A.value,1200+b*200)},100+b*200)})},P=(I,E,A=1500)=>{if(!I)return;const b=0,V=Date.now(),O=()=>{const w=Date.now()-V,p=Math.min(w/A,1),v=1-Math.pow(1-p,3),S=Math.floor(b+(E-b)*v);I.textContent=S.toLocaleString("pt-BR"),p<1?requestAnimationFrame(O):(I.textContent=E.toLocaleString("pt-BR"),I.style.transform="scale(1.1)",setTimeout(()=>{I.style.transform="scale(1)"},200))};O()},N=r.level,C=y(N),D=r.completedLessons/r.totalLessons*100;return i?f.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-6xl mb-4"},"📊"),f.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Your Progress..."),f.createElement("p",{className:"text-gray-600 mb-4"},l),f.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):f.createElement("div",{className:"sophisticated-bg min-h-screen"},f.createElement("div",{className:"portal-header"},f.createElement("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 md:px-8"},f.createElement("div",{className:"brand-title"},"TEACHER ALEX ENGLISH ACADEMY"),f.createElement("div",{className:"welcome-message"},"Bem-vindo(a) de volta, ",(t==null?void 0:t.displayName)||"Estudante"),f.createElement("div",{className:"firebase-status"},l))),f.createElement("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6"},f.createElement("div",{className:"professional-card rounded-xl p-4 sm:p-5 md:p-6"},f.createElement("div",{className:"text-center"},f.createElement("h2",{className:"text-lg sm:text-xl md:text-2xl font-semibold mb-2",style:{color:"var(--charcoal)"}},"Nível ",N," • ",C),f.createElement("div",{className:"flex items-center justify-center space-x-4 sm:space-x-6 text-sm sm:text-base mb-3",style:{color:"var(--medium-gray)"}},f.createElement("span",null,r.xp," XP"),f.createElement("span",{style:{color:"var(--light-gray)"}},"•"),f.createElement("span",null,"Sequência ",r.streak)),f.createElement("div",{className:"progress-card rounded-lg p-3 mt-3"},f.createElement("div",{className:"flex justify-between text-xs sm:text-sm mb-1",style:{color:"var(--medium-gray)"}},f.createElement("span",null,"Progresso das Aulas"),f.createElement("span",null,r.completedLessons,"/",r.totalLessons)),f.createElement("div",{className:"w-full rounded-full h-2",style:{backgroundColor:"var(--light-gray)"}},f.createElement("div",{className:"h-2 rounded-full transition-all duration-500",style:{backgroundColor:"var(--alex-blue)",width:`${D}%`}}))),(r.foundationLessons>0||r.gamingLessons>0)&&f.createElement("div",{className:"mt-4 flex justify-center space-x-4 text-xs"},r.foundationLessons>0&&f.createElement("div",{className:"bg-blue-100 text-blue-800 px-2 py-1 rounded-full"},"🌟 Foundation: ",r.foundationLessons,"/10"),r.gamingLessons>0&&f.createElement("div",{className:"bg-purple-100 text-purple-800 px-2 py-1 rounded-full"},"🎮 Gaming: ",r.gamingLessons,"/10")))),f.createElement("div",{className:"professional-card rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100"},f.createElement("div",{className:"text-center mb-4"},f.createElement("h3",{className:"text-xl sm:text-2xl font-bold mb-2",style:{color:"var(--charcoal)"}},"📊 Seu Progresso Real"),f.createElement("p",{className:"text-sm sm:text-base",style:{color:"var(--medium-gray)"}},"Dados carregados diretamente do Firebase!")),f.createElement("div",{className:"grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"},f.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300"},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-blue-600 mb-1 counter-number",id:"totalCompletedCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),f.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Lições Completas"))),f.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-red-100 hover:shadow-md transition-all duration-300"},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-red-500 mb-1 counter-number",id:"totalXPCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),f.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"XP Real"))),f.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300"},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-purple-600 mb-1 counter-number",id:"currentLevelCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"1"),f.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Nível Atual"))),f.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-green-100 hover:shadow-md transition-all duration-300"},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-green-600 mb-1 counter-number",id:"dayStreakCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),f.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Sequência")))),f.createElement("div",{className:"mt-4 text-center"},f.createElement("p",{className:"text-sm sm:text-base text-blue-600 font-medium"},"🔥 Dados reais do Firebase! XP persiste entre sessões! 🚀"))),f.createElement("div",null,f.createElement("h2",{className:"text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6",style:{color:"var(--charcoal)"}},"🎧 Suas Aulas"),f.createElement("div",{className:"space-y-4 sm:space-y-5 md:space-y-6"},f.createElement("div",{className:"lesson-card-enhanced"},f.createElement("div",{className:"flex items-center justify-between"},f.createElement("div",{className:"flex-1"},f.createElement("h3",{className:"text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2"},"🌟 STUDY ENGLISH"),f.createElement("p",{className:"text-sm sm:text-base text-blue-100 mb-3 sm:mb-4"},r.completedLessons," lições completadas • ",r.xp," XP total"),f.createElement("div",{className:"flex items-center gap-2 mb-3"},f.createElement("div",{className:"bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white"},"🎧 Audio Lessons"),f.createElement("div",{className:"bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white"},"🔥 Firebase Sync"))),f.createElement("div",{className:"ml-4 text-3xl sm:text-4xl"},"🌟")),f.createElement("button",{onClick:()=>n("hub"),className:"btn-enhanced w-full sm:w-auto inline-block text-center font-bold py-3 px-6 rounded-lg text-sm sm:text-base"},"🎯 CONTINUAR ESTUDOS")),f.createElement("div",{className:"lesson-card-soon"},f.createElement("div",{className:"flex items-center justify-between"},f.createElement("div",{className:"flex-1"},f.createElement("h3",{className:"text-lg sm:text-xl font-semibold mb-1 sm:mb-2",style:{color:"var(--medium-gray)"}},"📝 EXERCÍCIOS"),f.createElement("p",{className:"text-sm sm:text-base mb-3 sm:mb-4",style:{color:"var(--medium-gray)"}},"Sistema de exercícios interativos completo")),f.createElement("div",{className:"ml-4 text-2xl sm:text-3xl",style:{color:"var(--light-gray)"}},"────")),f.createElement("button",{className:"btn-disabled w-full sm:w-auto font-semibold py-3 px-6 rounded-lg text-sm sm:text-base cursor-not-allowed"},"EM BREVE")))),f.createElement("div",{className:"revolutionary-footer"},f.createElement("p",{className:"revolutionary-text"},"🔥 Sua revolução no inglês agora é REAL • XP salvo no Firebase • Teacher Alex English Academy")),f.createElement("div",{className:"text-center pb-4"},f.createElement("button",{onClick:e,className:"text-sm transition-colors",style:{color:"var(--charcoal)",background:"none",border:"none"}},"Sair"))),f.createElement("style",{jsx:!0},`
        .portal-header {
          background: linear-gradient(135deg, var(--alex-blue), #2563eb);
          text-align: center;
          padding: 2rem 1rem;
          border-bottom: 2px solid #1e40af;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .brand-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: white;
          letter-spacing: 0.5px;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .welcome-message {
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .firebase-status {
          font-size: 0.875rem;
          color: #bfdbfe;
          font-weight: 500;
        }

        .professional-card {
          background: white;
          border: 2px solid var(--soft-blue);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
          transition: all 0.3s ease;
          animation: subtleBreath 4s ease-in-out infinite;
        }

        .progress-card {
          background: linear-gradient(135deg, #e2e8f0, var(--soft-blue));
          border: 2px solid #93c5fd;
        }

        .revolutionary-footer {
          text-align: center;
          padding: 2rem 1rem;
          background: linear-gradient(135deg, var(--soft-blue), #e2e8f0);
          border: 2px solid #93c5fd;
          border-radius: 1rem;
          margin: 1.5rem 0;
        }

        .revolutionary-text {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1e40af;
          margin: 0;
          text-align: center;
        }

        .lesson-card-enhanced {
          background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
          border: 2px solid #1e40af;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .lesson-card-enhanced:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(59, 130, 246, 0.35);
        }

        .lesson-card-soon {
          background: #e2e8f0;
          border: 2px solid var(--light-gray);
          border-radius: 0.75rem;
          padding: 1.5rem;
          opacity: 0.7;
        }

        .btn-enhanced {
          background: rgba(255, 255, 255, 0.95);
          color: #1e40af;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: none;
          cursor: pointer;
        }

        .btn-enhanced:hover {
          background: white;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .btn-disabled {
          background: var(--light-gray);
          color: #9ca3af;
          border: none;
        }

        @keyframes subtleBreath {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15); 
          }
          50% { 
            transform: scale(1.002); 
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.18); 
          }
        }

        @media (min-width: 640px) {
          .brand-title {
            font-size: 1.5rem;
            letter-spacing: 1px;
          }
          
          .welcome-message {
            font-size: 1.125rem;
          }
        }

        @media (min-width: 768px) {
          .brand-title {
            font-size: 1.75rem;
            letter-spacing: 1.5px;
          }
          
          .welcome-message {
            font-size: 1.25rem;
          }
        }
      `))}function Jk({user:t,onLogout:e,onNavigate:n}){const[r,s]=G.useState({totalXP:0,completedLessons:0,foundationLessons:0,gamingLessons:0,themesCompleted:0,totalThemes:6}),[i,o]=G.useState(!0),[l,u]=G.useState("🔥 Loading your progress..."),d=[{id:"foundation",title:"Foundation",emoji:"🌟",description:"Basics of English - Start here!",lessons:10,status:"active",color:"blue",completedLessons:0,totalXP:0},{id:"gaming",title:"Gaming World",emoji:"🎮",description:"Video games and technology",lessons:10,status:"active",color:"purple",completedLessons:0,totalXP:0},{id:"movies",title:"Movie Magic",emoji:"🎬",description:"Cinema and entertainment",lessons:10,status:"coming-soon",color:"red",completedLessons:0,totalXP:0},{id:"food",title:"Food Adventures",emoji:"🍕",description:"Cooking and restaurants",lessons:10,status:"coming-soon",color:"orange",completedLessons:0,totalXP:0},{id:"travel",title:"Travel Dreams",emoji:"✈️",description:"Vacations and adventures",lessons:10,status:"coming-soon",color:"green",completedLessons:0,totalXP:0},{id:"business",title:"Business English",emoji:"💼",description:"Professional communication",lessons:10,status:"coming-soon",color:"gray",completedLessons:0,totalXP:0}],[m,y]=G.useState(d);G.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){u("❌ User not found"),o(!1);return}try{u("🔥 Loading Foundation progress...");const D=At(gt,"students",t.username,"progress","foundation"),I=await Ut(D);u("🎮 Loading Gaming progress...");const E=At(gt,"students",t.username,"progress","gaming"),A=await Ut(E);let b=0,V=0,O=0,w=0,p=0,v=0,S=0;if(I.exists()){const T=I.data();p=T.totalXP||0,O=Object.keys(T.lessons||{}).length,b+=p,V+=O,O===10&&S++}if(A.exists()){const T=A.data();v=T.totalXP||0,w=Object.keys(T.lessons||{}).length,b+=v,V+=w,w===10&&S++}s({totalXP:b,completedLessons:V,foundationLessons:O,gamingLessons:w,themesCompleted:S,totalThemes:6});const k=d.map(T=>T.id==="foundation"?{...T,completedLessons:O,totalXP:p,status:(O>0,"active")}:T.id==="gaming"?{...T,completedLessons:w,totalXP:v,status:(w>0,"active")}:T);y(k),u(`✅ Progress loaded! ${O} Foundation + ${w} Gaming = ${b} XP`),o(!1)}catch(D){console.error("Hub Firebase Error:",D),u("❌ Failed to load progress"),o(!1),s({totalXP:0,completedLessons:0,foundationLessons:0,gamingLessons:0,themesCompleted:0,totalThemes:6})}})()},[t]);const _=C=>{const D="theme-card rounded-xl p-6 transition-all duration-300 border-2";return C.status==="active"?`${D} theme-card-active cursor-pointer hover:transform hover:scale-105`:`${D} theme-card-disabled opacity-60`},P=(C,D)=>{if(D!=="active")return{background:"#f3f4f6",border:"#e5e7eb",text:"#6b7280"};const I={blue:{background:"linear-gradient(135deg, #dbeafe, #93c5fd)",border:"#3b82f6",text:"#1e40af"},purple:{background:"linear-gradient(135deg, #e9d5ff, #c084fc)",border:"#8b5cf6",text:"#6b21a8"},red:{background:"linear-gradient(135deg, #fecaca, #f87171)",border:"#ef4444",text:"#b91c1c"},orange:{background:"linear-gradient(135deg, #fed7aa, #fb923c)",border:"#f97316",text:"#c2410c"},green:{background:"linear-gradient(135deg, #d1fae5, #6ee7b7)",border:"#10b981",text:"#047857"},gray:{background:"linear-gradient(135deg, #f3f4f6, #d1d5db)",border:"#6b7280",text:"#374151"}};return I[C]||I.gray},N=C=>{C.status==="active"?C.id==="foundation"?n("foundation-lessons"):C.id==="gaming"?n("gaming-lessons"):C.id==="movies"?alert("🎬 Movie Magic lessons coming soon! Currently implementing..."):C.id==="food"?alert("🍕 Food Adventures lessons coming soon! Currently implementing..."):alert(`${C.title} lessons are being prepared! 🚀`):alert(`${C.title} será lançado em breve! 🚀`)};return i?f.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-6xl mb-4"},"🎯"),f.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Study Hub..."),f.createElement("p",{className:"text-gray-600 mb-4"},l),f.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):f.createElement("div",{className:"sophisticated-bg min-h-screen"},f.createElement("div",{className:"hub-header"},f.createElement("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8"},f.createElement("div",{className:"flex items-center justify-between"},f.createElement("div",null,f.createElement("h1",{className:"brand-title"},"🎯 STUDY ENGLISH HUB"),f.createElement("p",{className:"subtitle"},"Escolha seu tema de interesse"),f.createElement("p",{className:"firebase-status"},l)),f.createElement("button",{onClick:()=>n("portal"),className:"back-btn"},"← Voltar")))),f.createElement("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8"},f.createElement("div",{className:"text-center mb-8"},f.createElement("h2",{className:"text-2xl sm:text-3xl font-bold mb-2",style:{color:"var(--charcoal)"}},"Olá, ",(t==null?void 0:t.displayName)||"Estudante","! 👋"),f.createElement("p",{className:"text-lg",style:{color:"var(--medium-gray)"}},"Selecione um tema para continuar seus estudos")),f.createElement("div",{className:"professional-card rounded-xl p-4 mb-6 text-center"},f.createElement("h3",{className:"text-lg font-bold mb-2",style:{color:"var(--charcoal)"}},"📊 Seu Progresso Real (Firebase)"),f.createElement("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4"},f.createElement("div",{className:"stat-item"},f.createElement("div",{className:"text-2xl font-bold text-blue-600"},r.themesCompleted),f.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Temas Completos")),f.createElement("div",{className:"stat-item"},f.createElement("div",{className:"text-2xl font-bold text-green-600"},r.completedLessons),f.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Lições Completas")),f.createElement("div",{className:"stat-item"},f.createElement("div",{className:"text-2xl font-bold text-purple-600"},r.foundationLessons+r.gamingLessons),f.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Total Estudado")),f.createElement("div",{className:"stat-item"},f.createElement("div",{className:"text-2xl font-bold text-red-600"},r.totalXP),f.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"XP Total"))),f.createElement("div",{className:"mt-4 text-sm text-blue-600"},"🔥 Dados carregados em tempo real do Firebase!")),f.createElement("div",{className:"professional-card rounded-xl p-4 mb-6 text-center"},f.createElement("h3",{className:"text-lg font-bold mb-2",style:{color:"var(--charcoal)"}},"🎉 Series Status: Foundation & Gaming Active!"),f.createElement("div",{className:"flex justify-center space-x-6 text-sm"},f.createElement("div",{className:"text-blue-600"},"🌟 Foundation: ",r.foundationLessons,"/10 (",r.foundationLessons>0?"Started":"Ready",")"),f.createElement("div",{className:"text-purple-600"},"🎮 Gaming: ",r.gamingLessons,"/10 (",r.gamingLessons>0?"Started":"Ready",")"))),f.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"},m.map(C=>{const D=P(C.color,C.status);return f.createElement("div",{key:C.id,className:_(C),onClick:()=>N(C),style:{background:D.background,borderColor:D.border}},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-5xl mb-4"},C.emoji),f.createElement("h3",{className:"text-xl font-bold mb-2",style:{color:D.text}},C.title),f.createElement("p",{className:"text-sm mb-4",style:{color:D.text,opacity:.8}},C.description),f.createElement("div",{className:"flex items-center justify-center space-x-4 text-sm"},f.createElement("span",{style:{color:D.text}},"📚 ",C.lessons," lições"),C.status==="active"&&(C.id==="foundation"||C.id==="gaming")&&f.createElement("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"},"✅ Ready!"),C.status==="active"&&(C.id==="movies"||C.id==="food")&&f.createElement("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold"},"🚧 Building"),C.status==="coming-soon"&&f.createElement("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold"},"🚀 Em breve")),C.completedLessons>0&&f.createElement("div",{className:"mt-3 text-xs",style:{color:D.text}},f.createElement("div",{className:"bg-white/20 rounded-full p-2"},"✨ ",C.completedLessons,"/",C.lessons," completas • ",C.totalXP," XP"))))})),f.createElement("div",{className:"professional-card rounded-xl p-6 text-center"},f.createElement("h3",{className:"text-xl font-bold mb-4",style:{color:"var(--charcoal)"}},"📈 Resumo Completo (Firebase)"),f.createElement("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4"},f.createElement("div",{className:"stat-item"},f.createElement("div",{className:"text-2xl font-bold text-blue-600"},m.filter(C=>C.status==="active").length),f.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Temas Ativos")),f.createElement("div",{className:"stat-item"},f.createElement("div",{className:"text-2xl font-bold text-green-600"},r.completedLessons),f.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Lições Feitas")),f.createElement("div",{className:"stat-item"},f.createElement("div",{className:"text-2xl font-bold text-purple-600"},r.themesCompleted),f.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Séries Completas")),f.createElement("div",{className:"stat-item"},f.createElement("div",{className:"text-2xl font-bold text-red-600"},r.totalXP),f.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"XP Acumulado"))),f.createElement("div",{className:"mt-4 text-sm text-gray-600"},"🔥 Todos os dados sincronizados com Firebase em tempo real")),f.createElement("div",{className:"text-center mt-8"},f.createElement("button",{onClick:e,className:"text-sm transition-colors",style:{color:"var(--medium-gray)",background:"none",border:"none"}},"Sair da conta"))),f.createElement("style",{jsx:!0},`
        .sophisticated-bg {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          min-height: 100vh;
        }

        .hub-header {
          background: linear-gradient(135deg, var(--alex-blue), #2563eb);
          padding: 2rem 1rem;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .brand-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          margin-bottom: 0.5rem;
        }

        .subtitle {
          font-size: 1rem;
          color: #e2e8f0;
          margin: 0;
        }

        .firebase-status {
          font-size: 0.875rem;
          color: #bfdbfe;
          margin-top: 0.5rem;
          font-weight: 500;
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .professional-card {
          background: white;
          border: 2px solid var(--soft-blue);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
        }

        .theme-card {
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .theme-card-active:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transform: translateY(-3px) scale(1.02);
        }

        .theme-card-disabled {
          cursor: not-allowed;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
        }

        @media (min-width: 768px) {
          .brand-title {
            font-size: 2rem;
            letter-spacing: 1.5px;
          }
          
          .subtitle {
            font-size: 1.125rem;
          }
        }

        :root {
          --alex-blue: #3b82f6;
          --charcoal: #1f2937;
          --medium-gray: #6b7280;
          --light-gray: #e2e8f0;
          --soft-blue: #dbeafe;
        }
      `))}function Zk({user:t,onLogout:e,onNavigate:n}){const[r,s]=G.useState({totalStudents:0,activeStudents:0,newStudentsThisMonth:0,totalLessonsCompleted:0,totalXPEarned:0}),[i,o]=G.useState(!1),[l,u]=G.useState({name:"",username:"",password:""}),[d,m]=G.useState([]),[y,_]=G.useState(!0),[P,N]=G.useState("🔥 Loading dashboard...");G.useEffect(()=>{(async()=>{try{N("🔥 Loading students from Firebase...");const I=Rk(gt,"students"),E=await Gk(I);if(E.empty){m([]),s({totalStudents:0,activeStudents:0,newStudentsThisMonth:0,totalLessonsCompleted:0,totalXPEarned:0}),N("✅ Firebase connected - No students yet"),_(!1);return}N("📊 Calculating student progress...");const A=[];let b=0,V=0,O=0,w=0;const p=new Date().getMonth(),v=new Date().getFullYear();for(const S of E.docs){const x=S.id,k=At(gt,"students",x,"progress","foundation"),T=await Ut(k),Ee=At(gt,"students",x,"progress","gaming"),Qe=await Ut(Ee);let Xe=0,Re=0,z=0,B=0,$="Never";if(T.exists()){const J=T.data();Xe+=J.totalXP||0,z=Object.keys(J.lessons||{}).length,Re+=z,J.lastUpdated&&($=new Date(J.lastUpdated).toLocaleDateString("pt-BR"))}if(Qe.exists()){const J=Qe.data();if(Xe+=J.totalXP||0,B=Object.keys(J.lessons||{}).length,Re+=B,J.lastUpdated){const he=new Date(J.lastUpdated),Pe=T.exists()&&T.data().lastUpdated?new Date(T.data().lastUpdated):new Date(0);$=(he>Pe?he:Pe).toLocaleDateString("pt-BR")}}const Y=$!=="Never"&&Date.now()-new Date($.split("/").reverse().join("-")).getTime()<7*24*60*60*1e3;Y&&O++;const W=S.data().createdAt;if(W){const J=new Date(W);J.getMonth()===p&&J.getFullYear()===v&&w++}const Q=Math.round(Re/20*100);A.push({id:x,name:S.data().name||x,username:x,lastAccess:$,totalXP:Xe,totalLessons:Re,foundationLessons:z,gamingLessons:B,progress:Q,isActive:Y}),b+=Re,V+=Xe}A.sort((S,x)=>x.totalXP-S.totalXP),m(A),s({totalStudents:A.length,activeStudents:O,newStudentsThisMonth:w,totalLessonsCompleted:b,totalXPEarned:V}),N(`✅ ${A.length} students loaded, ${b} lessons completed`),_(!1)}catch(I){console.error("Firebase Dashboard Error:",I),N("❌ Failed to load dashboard data"),_(!1),m([{id:1,name:"João Silva",username:"joao123",lastAccess:"23/07/2025",progress:75,totalXP:450,totalLessons:8},{id:2,name:"Maria Santos",username:"maria456",lastAccess:"22/07/2025",progress:45,totalXP:280,totalLessons:5},{id:3,name:"Pedro Costa",username:"pedro789",lastAccess:"21/07/2025",progress:90,totalXP:680,totalLessons:12}])}})()},[]);const C=async D=>{if(D.preventDefault(),!l.name||!l.username||!l.password){alert("Por favor, preencha todos os campos");return}if(l.password.length<4){alert("Senha deve ter pelo menos 4 caracteres");return}if(d.find(E=>E.username===l.username)){alert("Nome de usuário já existe! Escolha outro.");return}try{N("📝 Creating student account...");const E=At(gt,"students",l.username);await iu(E,{name:l.name,username:l.username,password:l.password,createdAt:Date.now(),createdBy:(t==null?void 0:t.email)||"teacher",status:"active"});const A={id:Date.now(),name:l.name,username:l.username,lastAccess:"Never",progress:0,totalXP:0,totalLessons:0,foundationLessons:0,gamingLessons:0,isActive:!1};m([...d,A]),s(b=>({...b,totalStudents:b.totalStudents+1,newStudentsThisMonth:b.newStudentsThisMonth+1})),alert(`✅ Conta criada com sucesso no Firebase!

Usuário: ${l.username}
Senha: ${l.password}

Envie estas credenciais para o aluno.`),u({name:"",username:"",password:""}),o(!1),N(`✅ Student ${l.name} created successfully`)}catch(E){console.error("Firebase Create Student Error:",E),alert("❌ Erro ao criar estudante no Firebase. Tente novamente."),N("❌ Failed to create student")}};return y?f.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-6xl mb-4"},"👨‍🏫"),f.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Teacher Dashboard..."),f.createElement("p",{className:"text-gray-600 mb-4"},P),f.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):f.createElement("div",{className:"sophisticated-bg min-h-screen"},f.createElement("nav",{className:"bg-white shadow-sm border-b border-gray-200 p-4"},f.createElement("div",{className:"flex justify-between items-center max-w-6xl mx-auto"},f.createElement("div",{className:"flex items-center space-x-3"},f.createElement("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"},f.createElement("span",{className:"text-xl font-bold text-white"},"A")),f.createElement("div",null,f.createElement("span",{className:"text-gray-800 font-semibold text-lg"},"Dashboard Professor"),f.createElement("div",{className:"text-gray-500 text-sm"},"Teacher Alex English Academy"))),f.createElement("div",{className:"flex items-center space-x-4"},f.createElement("span",{className:"text-gray-600 text-sm"},(t==null?void 0:t.displayName)||"Professor"),f.createElement("button",{onClick:e,className:"bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"},"Sair")))),f.createElement("div",{className:"max-w-6xl mx-auto p-6"},f.createElement("div",{className:"bg-white rounded-xl shadow-lg p-4 mb-6 text-center"},f.createElement("div",{className:"text-sm"},f.createElement("span",{className:"text-blue-600 font-medium"},P)))),f.createElement("div",{className:"max-w-6xl mx-auto p-6"},f.createElement("div",{className:"grid md:grid-cols-5 gap-6 mb-8"},f.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},f.createElement("div",{className:"text-3xl font-bold text-blue-600 mb-2"},r.totalStudents),f.createElement("div",{className:"text-gray-600 text-sm"},"Total Students")),f.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},f.createElement("div",{className:"text-3xl font-bold text-green-600 mb-2"},r.activeStudents),f.createElement("div",{className:"text-gray-600 text-sm"},"Active Students")),f.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},f.createElement("div",{className:"text-3xl font-bold text-red-500 mb-2"},r.newStudentsThisMonth),f.createElement("div",{className:"text-gray-600 text-sm"},"New This Month")),f.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},f.createElement("div",{className:"text-3xl font-bold text-purple-600 mb-2"},r.totalLessonsCompleted),f.createElement("div",{className:"text-gray-600 text-sm"},"Lessons Completed")),f.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},f.createElement("div",{className:"text-3xl font-bold text-yellow-600 mb-2"},r.totalXPEarned.toLocaleString()),f.createElement("div",{className:"text-gray-600 text-sm"},"Total XP Earned"))),f.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8"},f.createElement("div",{className:"flex justify-between items-center mb-6"},f.createElement("h3",{className:"text-xl font-bold text-gray-800"},"👥 Gerenciar Alunos (Firebase)"),f.createElement("button",{onClick:()=>o(!i),className:"bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"},"+ Adicionar Novo Aluno")),i&&f.createElement("div",{className:"bg-gray-50 rounded-lg p-6 mb-6"},f.createElement("h4",{className:"text-lg font-semibold text-gray-800 mb-4"},"📝 Criar Conta Firebase para Cliente"),f.createElement("form",{onSubmit:C,className:"grid md:grid-cols-3 gap-4 mb-4"},f.createElement("input",{type:"text",placeholder:"Nome do aluno",value:l.name,onChange:D=>u({...l,name:D.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),f.createElement("input",{type:"text",placeholder:"Nome de usuário (login)",value:l.username,onChange:D=>u({...l,username:D.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),f.createElement("input",{type:"password",placeholder:"Senha (min 4 caracteres)",value:l.password,onChange:D=>u({...l,password:D.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),f.createElement("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"},"✅ Criar no Firebase"),f.createElement("button",{type:"button",onClick:()=>o(!1),className:"bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"},"❌ Cancelar"))),f.createElement("div",{className:"space-y-3"},d.length===0?f.createElement("div",{className:"text-center py-8"},f.createElement("div",{className:"text-gray-500 mb-4"},"📚 Nenhum estudante no Firebase ainda"),f.createElement("p",{className:"text-sm text-gray-400"},'Clique em "Adicionar Novo Aluno" para criar a primeira conta')):d.map(D=>f.createElement("div",{key:D.id,className:"border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"},f.createElement("div",{className:"flex justify-between items-start"},f.createElement("div",{className:"flex-1"},f.createElement("div",{className:"flex items-center space-x-3 mb-2"},f.createElement("h4",{className:"font-semibold text-gray-800"},D.name),D.isActive&&f.createElement("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"},"● Active")),f.createElement("p",{className:"text-sm text-gray-600 mb-2"},"@",D.username," • Último acesso: ",D.lastAccess),f.createElement("div",{className:"flex items-center space-x-4 text-xs text-gray-500"},f.createElement("span",null,"🌟 Foundation: ",D.foundationLessons||0,"/10"),f.createElement("span",null,"🎮 Gaming: ",D.gamingLessons||0,"/10"),f.createElement("span",null,"⚡ Total XP: ",D.totalXP))),f.createElement("div",{className:"text-right"},f.createElement("div",{className:"text-lg font-bold text-blue-600"},D.progress,"%"),f.createElement("div",{className:"text-xs text-gray-500"},D.totalLessons,"/20 lessons"))))))),f.createElement("div",{className:"grid lg:grid-cols-2 gap-8"},f.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6"},f.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"⚡ Ações Rápidas"),f.createElement("div",{className:"space-y-3"},f.createElement("button",{onClick:()=>n("portal"),className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm transition-colors"},"📱 Visualizar Portal do Estudante"),f.createElement("button",{className:"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg text-sm transition-colors"},"📊 Exportar Relatório Firebase"),f.createElement("button",{className:"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg text-sm transition-colors"},"📧 Mensagem para Todos os Alunos"),f.createElement("button",{onClick:()=>window.location.reload(),className:"w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-sm transition-colors"},"🔄 Atualizar Dados Firebase"))),f.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6"},f.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"📈 Status do Sistema"),f.createElement("div",{className:"space-y-4"},f.createElement("div",{className:"flex items-center justify-between"},f.createElement("span",{className:"text-gray-600 text-sm"},"🔥 Firebase Connection"),f.createElement("span",{className:"text-green-600 font-semibold"},"● Connected")),f.createElement("div",{className:"flex items-center justify-between"},f.createElement("span",{className:"text-gray-600 text-sm"},"📊 React System"),f.createElement("span",{className:"text-green-600 font-semibold"},"● Running")),f.createElement("div",{className:"flex items-center justify-between"},f.createElement("span",{className:"text-gray-600 text-sm"},"🌟 Foundation Series"),f.createElement("span",{className:"text-green-600 font-semibold"},"10/10 Active")),f.createElement("div",{className:"flex items-center justify-between"},f.createElement("span",{className:"text-gray-600 text-sm"},"🎮 Gaming Series"),f.createElement("span",{className:"text-green-600 font-semibold"},"10/10 Active")),f.createElement("div",{className:"flex items-center justify-between"},f.createElement("span",{className:"text-gray-600 text-sm"},"📊 Student Data"),f.createElement("span",{className:"text-blue-600 font-semibold"},"Real Firebase")),f.createElement("div",{className:"flex items-center justify-between"},f.createElement("span",{className:"text-gray-600 text-sm"},"⚡ XP Tracking"),f.createElement("span",{className:"text-green-600 font-semibold"},"● Persistent")))))),f.createElement("style",{jsx:!0},`
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(31, 41, 55, 0.15);
        }
        
        .elegant-input {
          background: white;
          border: 1px solid #d1d5db;
          transition: all 0.2s ease;
        }
        
        .elegant-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `))}const va=[{id:"foundation-01",title:"Basic Greetings",description:"Learn essential greeting phrases and introductions",duration:"35s",icon:"🌟",audioFile:"audio-01-greetings.mp3",questions:[{question:"What is the woman's name?",options:["Suri","Sarah","Sandra","Samantha"],correct:1},{question:"Where is she from?",options:["Brazil","USA","Canada","Mexico"],correct:2},{question:"What is her job?",options:["Teacher","Nurse","Doctor","Engineer"],correct:1},{question:"How old is she?",options:["23","24","25","26"],correct:2},{question:"What does she say at the end?",options:["Goodbye","See you later","Have a great day","Take care"],correct:2}]}];function eC({user:t,onBack:e}){const[n,r]=G.useState("selection"),[s,i]=G.useState(null),[o,l]=G.useState([]),[u,d]=G.useState(0),[m,y]=G.useState("Listen to Audio"),[_,P]=G.useState(!1),[N,C]=G.useState(!1),[D,I]=G.useState({}),[E,A]=G.useState(1),[b,V]=G.useState(null),[O,w]=G.useState(null),[p,v]=G.useState("🔥 Loading Firebase..."),[S,x]=G.useState(!0);G.useRef(null),G.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),x(!1);return}try{v("🔥 Connecting to Firebase...");const $=At(gt,"students",t.username,"progress","foundation"),Y=await Ut($);if(Y.exists()){const W=Y.data();I(W.lessons||{}),w({totalXP:W.totalXP||0,completedLessons:Object.keys(W.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Foundation progress loaded")}else I({}),w({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New student initialized");x(!1)}catch($){console.error("Firebase Error:",$),v("❌ Firebase connection failed"),x(!1),I({"foundation-01":{status:"completed",score:5,attempts:1},"foundation-02":{status:"completed",score:4,attempts:2}})}})()},[t]);const k=async(B,$,Y=1)=>{if(t!=null&&t.username)try{const W=$*10+($===5?25:0),Q=Date.now(),J={lessonId:B,score:$,attempts:Y,xpEarned:W,completedAt:Q,status:"completed"};I(Ct=>({...Ct,[B]:J}));const he=At(gt,"students",t.username,"progress","foundation"),Pe=await Ut(he);let Ne={lessons:{[B]:J},totalXP:W,lastUpdated:Q,series:"foundation"};if(Pe.exists()){const Ct=Pe.data();Ne={...Ct,lessons:{...Ct.lessons,[B]:J},totalXP:(Ct.totalXP||0)+W,lastUpdated:Q}}await iu(he,Ne,{merge:!0}),w(Ct=>({...Ct,totalXP:Ne.totalXP,completedLessons:Object.keys(Ne.lessons).length})),console.log("✅ Firebase Save Success:",{lessonId:B,score:$,xpEarned:W})}catch(W){console.error("❌ Firebase Save Error:",W)}},T=B=>{const $=va.find(Y=>Y.id===B);$&&(i($),l(new Array($.questions.length).fill(null)),d(0),y("Listen to Audio"),r("lesson"),V(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},Ee=async()=>{const B=o.reduce((W,Q,J)=>W+(Q===s.questions[J].correct?1:0),0),$=D[s.id],Y=$?$.attempts+1:1;await k(s.id,B,Y),console.log(`✅ Foundation Lesson ${s.id} saved to Firebase! Score: ${B}/5, Attempts: ${Y}`),P(!0)},Qe=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},Xe=B=>{const $=D[B];return $?{status:"Completed",class:"status-completed",score:$.score,attempts:$.attempts,xpEarned:$.xpEarned}:{status:"Available",class:"status-not-started"}},Re=o.filter(B=>B!==null).length,z=Re===(s==null?void 0:s.questions.length);return S?f.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-6xl mb-4"},"🔥"),f.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),f.createElement("p",{className:"text-gray-600"},"Loading your Foundation progress"))):n==="selection"?f.createElement("div",{className:"sophisticated-bg min-h-screen"},f.createElement("div",{className:"foundation-header"},f.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},f.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),f.createElement("div",{className:"text-center mt-6"},f.createElement("div",{className:"text-5xl mb-4"},"🌟"),f.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"A1 Foundation Course"),f.createElement("p",{className:"text-blue-100 mb-4"},"Complete English basics with 10 interactive audio lessons"),f.createElement("div",{className:"foundation-accent-card rounded-lg p-3"},f.createElement("p",{className:"text-white font-medium"},"🎯 Complete questions • 📊 Track progress • 🏆 Earn XP & achievements!"))))),f.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},f.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},f.createElement("div",{className:"text-sm"},f.createElement("span",{className:"text-primary-blue font-medium"},p),O&&f.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Total XP: ",O.totalXP," • Lessons: ",O.completedLessons,"/10")))),f.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},f.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},va.map((B,$)=>{const Y=Xe(B.id);return f.createElement("div",{key:B.id,className:"lesson-card foundation-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>T(B.id)},f.createElement("div",{className:"flex items-center justify-between mb-3"},f.createElement("div",{className:"text-2xl"},B.icon),f.createElement("span",{className:`status-badge ${Y.class}`},Y.status)),f.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",$+1,": ",B.title),f.createElement("p",{className:"text-sm text-gray-600 mb-3"},B.description),f.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},f.createElement("span",null,"🎧 ",B.duration),f.createElement("span",{className:"font-semibold text-blue-600"},Y.score?`✅ ${Y.score}/5`:"+50 XP")),Y.attempts>0&&f.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",Y.attempts," • Score: ",Y.score||0,"/5 • XP: ",Y.xpEarned||0))}))),f.createElement("style",{jsx:!0},`
          .foundation-header {
            background: linear-gradient(135deg, #3b82f6, #1e40af);
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
          }
          
          .foundation-accent-card {
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
          }
          
          .back-btn {
            background: rgba(255, 255, 255, 0.9);
            color: #1e40af;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .back-btn:hover {
            background: white;
            transform: translateY(-1px);
          }
          
          .foundation-card {
            background: white;
            border: 2px solid #dbeafe;
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
          }
          
          .foundation-card:hover {
            border-color: #3b82f6;
            box-shadow: 0 12px 35px rgba(59, 130, 246, 0.25);
          }
          
          .status-badge {
            padding: 0.3rem 0.8rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
          }
          
          .status-completed {
            background: #3b82f6;
            color: white;
          }
          
          .status-not-started {
            background: #dbeafe;
            color: #1e40af;
          }

          .status-card {
            background: linear-gradient(135deg, #dbeafe, #e2e8f0);
            border: 2px solid #93c5fd;
            color: #1e40af;
          }

          .text-primary-blue {
            color: #3b82f6;
          }
        `)):f.createElement("div",{className:"lesson-interface"},f.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},f.createElement("div",{className:"foundation-lesson-card rounded-xl p-6 mb-6"},f.createElement("div",{className:"flex items-center justify-between mb-4"},f.createElement("button",{onClick:Qe,className:"text-blue-600 text-sm hover:underline"},"← Back to Foundation"),f.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",va.findIndex(B=>B.id===s.id)+1," of ",va.length)),f.createElement("h2",{className:"text-2xl font-bold text-blue-600 mb-2"},s.title),f.createElement("p",{className:"text-gray-600 mb-4"},s.description),f.createElement("div",{className:"progress-card rounded-lg p-3"},f.createElement("div",{className:"flex justify-between text-sm mb-2"},f.createElement("span",null,"Lesson Progress"),f.createElement("span",null,m)),f.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},f.createElement("div",{className:"bg-blue-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),f.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},f.createElement("button",{onClick:Ee,disabled:!z,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${z?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},z?"🔥 Save to Firebase - Ready! 🌟":`Submit Answers (${Re}/5 Complete)`),f.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Your progress will be saved permanently!"))))}const Zr=[{id:"gaming-01",title:"My Gaming PC Setup",description:"Building the perfect gaming computer setup",duration:"38s",icon:"🖥️",audioFile:"audio-01-pc-setup.mp3",questions:[{question:"What graphics card does she have?",options:["RTX 3070","RTX 4070","GTX 1080","RX 6700"],correct:1},{question:"How much RAM is in her computer?",options:["8GB","16GB","32GB","64GB"],correct:1},{question:"What type of keyboard switches does she use?",options:["Blue switches","Brown switches","Red switches","Black switches"],correct:2},{question:"How much did she spend on her setup?",options:["$2000","$3000","$4000","$5000"],correct:1},{question:"What happens to her RGB lighting during games?",options:["Turns off","Changes colors when she gets kills","Stays red","Flashes randomly"],correct:1}]},{id:"gaming-02",title:"Online Gaming with Friends",description:"Playing with friends and communicating online",duration:"36s",icon:"🎮",audioFile:"audio-02-online-gaming.mp3",questions:[{question:"What game do they play together?",options:["Counter-Strike","Valorant","Overwatch","Call of Duty"],correct:1},{question:"What platform do they use to communicate?",options:["Skype","Discord","TeamSpeak","WhatsApp"],correct:1},{question:"What is her role in the team?",options:["Tank","DPS","Support","Sniper"],correct:2},{question:"How many games did they win last week?",options:["5","6","7","8"],correct:2},{question:"Where does her best friend live?",options:["Rio de Janeiro","São Paulo","Belo Horizonte","Brasília"],correct:1}]}];function tC({user:t,onBack:e}){const[n,r]=G.useState("selection"),[s,i]=G.useState(null),[o,l]=G.useState([]),[u,d]=G.useState(0),[m,y]=G.useState("Listen to Audio"),[_,P]=G.useState(!1),[N,C]=G.useState(!1),[D,I]=G.useState({}),[E,A]=G.useState(1),[b,V]=G.useState(null),[O,w]=G.useState(null),[p,v]=G.useState("🔥 Loading Firebase..."),[S,x]=G.useState(!0),k=G.useRef(null);G.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),x(!1);return}try{v("🔥 Connecting to Firebase...");const Q=At(gt,"students",t.username,"progress","gaming"),J=await Ut(Q);if(J.exists()){const he=J.data();I(he.lessons||{}),w({totalXP:he.totalXP||0,completedLessons:Object.keys(he.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Gaming progress loaded")}else I({}),w({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New gamer initialized");x(!1)}catch(Q){console.error("Firebase Error:",Q),v("❌ Firebase connection failed"),x(!1),I({"gaming-01":{status:"completed",score:5,attempts:1},"gaming-02":{status:"completed",score:4,attempts:1}})}})()},[t]);const T=async(W,Q,J=1)=>{if(t!=null&&t.username)try{const he=Q*10+(Q===5?25:0),Pe=Date.now(),Ne={lessonId:W,score:Q,attempts:J,xpEarned:he,completedAt:Pe,status:"completed",series:"gaming"};I(Rt=>({...Rt,[W]:Ne}));const Ct=At(gt,"students",t.username,"progress","gaming"),bo=await Ut(Ct);let Xt={lessons:{[W]:Ne},totalXP:he,lastUpdated:Pe,series:"gaming"};if(bo.exists()){const Rt=bo.data();Xt={...Rt,lessons:{...Rt.lessons,[W]:Ne},totalXP:(Rt.totalXP||0)+he,lastUpdated:Pe}}await iu(Ct,Xt,{merge:!0}),w(Rt=>({...Rt,totalXP:Xt.totalXP,completedLessons:Object.keys(Xt.lessons).length})),Object.keys(Xt.lessons).length===10&&console.log("🏆 GAMING WORLD COMPLETE! Game Master Achievement Unlocked!"),console.log("✅ Firebase Gaming Save Success:",{lessonId:W,score:Q,xpEarned:he})}catch(he){console.error("❌ Firebase Gaming Save Error:",he)}},Ee=W=>{const Q=Zr.find(J=>J.id===W);Q&&(i(Q),l(new Array(Q.questions.length).fill(null)),d(0),y("Listen to Audio"),r("lesson"),V(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},Qe=async()=>{const W=o.reduce((he,Pe,Ne)=>he+(Pe===s.questions[Ne].correct?1:0),0),Q=D[s.id],J=Q?Q.attempts+1:1;await T(s.id,W,J),console.log(`✅ Gaming Lesson ${s.id} saved to Firebase! Score: ${W}/5, Attempts: ${J}`),P(!0)},Xe=()=>{const W=Zr.findIndex(J=>J.id===s.id),Q=Zr[W+1];P(!1),Q?Ee(Q.id):(r("selection"),alert("🎉 Congratulations! Gaming World Complete! 🎮 Game Master Achievement Unlocked!"))},Re=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},z=()=>{s&&(P(!1),l(new Array(s.questions.length).fill(null)),V(Date.now()),d(0),y("Listen to Audio"),k.current&&(k.current.currentTime=0,k.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},B=W=>{const Q=D[W];return Q?{status:"Completed",class:"status-completed",score:Q.score,attempts:Q.attempts,xpEarned:Q.xpEarned}:{status:"Available",class:"status-not-started"}},$=o.filter(W=>W!==null).length,Y=$===(s==null?void 0:s.questions.length);return S?f.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-6xl mb-4"},"🎮"),f.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),f.createElement("p",{className:"text-gray-600"},"Loading your Gaming World progress"))):n==="selection"?f.createElement("div",{className:"sophisticated-bg min-h-screen"},f.createElement("div",{className:"gaming-header"},f.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},f.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),f.createElement("div",{className:"text-center mt-6"},f.createElement("div",{className:"text-5xl mb-4"},"🎮"),f.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"Gaming World"),f.createElement("p",{className:"text-blue-100 mb-4"},"Learn English through gaming vocabulary and Brazilian gaming culture"),f.createElement("div",{className:"gaming-accent-card rounded-lg p-3"},f.createElement("p",{className:"text-white font-medium"},"🎯 PC Gaming • 🏆 Esports • 🎧 Gaming English vocabulary!"))))),f.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},f.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},f.createElement("div",{className:"text-sm"},f.createElement("span",{className:"text-primary-blue font-medium"},p),O&&f.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Gaming XP: ",O.totalXP," • Lessons: ",O.completedLessons,"/10")))),f.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},f.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},Zr.map((W,Q)=>{const J=B(W.id);return f.createElement("div",{key:W.id,className:"lesson-card gaming-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>Ee(W.id)},f.createElement("div",{className:"flex items-center justify-between mb-3"},f.createElement("div",{className:"text-2xl"},W.icon),f.createElement("span",{className:`status-badge ${J.class}`},J.status)),f.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",Q+1,": ",W.title),f.createElement("p",{className:"text-sm text-gray-600 mb-3"},W.description),f.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},f.createElement("span",null,"🎧 ",W.duration),f.createElement("span",{className:"font-semibold text-purple-600"},J.score?`✅ ${J.score}/5`:"+50 XP")),J.attempts>0&&f.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",J.attempts," • Score: ",J.score||0,"/5 • XP: ",J.xpEarned||0))}))),f.createElement("style",{jsx:!0},`
          .gaming-header {
            background: linear-gradient(135deg, #8b5cf6, #7c3aed);
            box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
          }
          
          .gaming-accent-card {
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
          }
          
          .back-btn {
            background: rgba(255, 255, 255, 0.9);
            color: #7c3aed;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .back-btn:hover {
            background: white;
            transform: translateY(-1px);
          }
          
          .gaming-card {
            background: white;
            border: 2px solid #e9d5ff;
            box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15);
          }
          
          .gaming-card:hover {
            border-color: #8b5cf6;
            box-shadow: 0 12px 35px rgba(139, 92, 246, 0.25);
          }
          
          .status-badge {
            padding: 0.3rem 0.8rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
          }
          
          .status-completed {
            background: #8b5cf6;
            color: white;
          }
          
          .status-not-started {
            background: #e9d5ff;
            color: #7c3aed;
          }

          .status-card {
            background: linear-gradient(135deg, #dbeafe, #e2e8f0);
            border: 2px solid #93c5fd;
            color: #1e40af;
          }

          .text-primary-blue {
            color: #3b82f6;
          }
        `)):f.createElement("div",{className:"lesson-interface"},f.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},f.createElement("div",{className:"gaming-lesson-card rounded-xl p-6 mb-6"},f.createElement("div",{className:"flex items-center justify-between mb-4"},f.createElement("button",{onClick:Re,className:"text-purple-600 text-sm hover:underline"},"← Back to Gaming World"),f.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",Zr.findIndex(W=>W.id===s.id)+1," of ",Zr.length)),f.createElement("h2",{className:"text-2xl font-bold text-purple-600 mb-2"},s.title),f.createElement("p",{className:"text-gray-600 mb-4"},s.description),f.createElement("div",{className:"progress-card rounded-lg p-3"},f.createElement("div",{className:"flex justify-between text-sm mb-2"},f.createElement("span",null,"Lesson Progress"),f.createElement("span",null,m)),f.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},f.createElement("div",{className:"bg-purple-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),f.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},f.createElement("button",{onClick:Qe,disabled:!Y,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${Y?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},Y?"🔥 Save Gaming Progress - Ready! 🎮":`Submit Answers (${$}/5 Complete)`),f.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Your gaming progress will be saved permanently!"))),_&&f.createElement(nC,{lesson:s,userAnswers:o,onNext:Xe,onReview:()=>C(!0),onClose:()=>P(!1),onRestart:z}),N&&f.createElement(rC,{lesson:s,userAnswers:o,onClose:()=>C(!1)}),f.createElement("style",{jsx:!0},`
        .gaming-lesson-card {
          background: white;
          border: 2px solid #e9d5ff;
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15);
        }
        
        .audio-card, .question-card, .submit-card {
          background: white;
          border: 2px solid #e9d5ff;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.1);
        }
        
        .btn-gaming {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          color: white;
          transition: all 0.3s ease;
        }
        
        .btn-gaming:hover {
          background: linear-gradient(135deg, #7c3aed, #6d28d9);
          transform: translateY(-1px);
        }
        
        .btn-subtle {
          background: #e9d5ff;
          color: #7c3aed;
          border: 2px solid #c4b5fd;
          transition: all 0.3s ease;
        }
        
        .btn-subtle:hover {
          background: #c4b5fd;
          border-color: #8b5cf6;
        }
      `))}function nC({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((m,y,_)=>m+(y===t.questions[_].correct?1:0),0),l=Math.round(o/5*100),u=o*10+(o===5?25:0),d=o===5;return f.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},f.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},f.createElement("div",{className:"text-center"},f.createElement("div",{className:"text-5xl mb-4"},d?"🏆":o>=4?"🎮":"📝"),f.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},d?"Perfect Gaming Score!":o>=4?"Great Gaming!":"Lesson Complete!"),f.createElement("div",{className:"bg-purple-50 rounded-lg p-4 mb-4"},f.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),f.createElement("div",{className:"text-lg text-gray-600 mb-2"},l,"% Correct"),f.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," Gaming XP Earned!")),d&&f.createElement("div",{className:"bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-3 mb-4"},f.createElement("div",{className:"text-sm font-semibold text-purple-700 mb-2"},"🎉 Achievement Unlocked!"),f.createElement("div",{className:"font-medium"},"🎮 Perfect Gaming Score!")),f.createElement("div",{className:"space-y-3"},f.createElement("button",{onClick:r,className:"w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&f.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),f.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Gaming Lesson →"),f.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Gaming World")))))}function rC({lesson:t,userAnswers:e,onClose:n}){return f.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},f.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},f.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"📝 Answer Review"),f.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,l=r.options[r.correct],u=r.options[i];return f.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},f.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),f.createElement("div",{className:"space-y-1"},f.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&f.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",l)))})),f.createElement("button",{onClick:n,className:"w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}function sC(){const[t,e]=G.useState("login"),[n,r]=G.useState(null);G.useEffect(()=>{const u=localStorage.getItem("studentAuth"),d=localStorage.getItem("teacherAuth");if(u){const m=JSON.parse(u);m.isAuthenticated&&(r(m),e("portal"))}else if(d){const m=JSON.parse(d);m.isAuthenticated&&(r(m),e("teacher-dashboard"))}},[]);const s=u=>{e(u)},i=(u,d)=>{r(u),d==="student"?(localStorage.setItem("studentAuth",JSON.stringify({...u,isAuthenticated:!0,loginTime:new Date().toISOString()})),e("portal")):d==="teacher"&&(localStorage.setItem("teacherAuth",JSON.stringify({...u,isAuthenticated:!0,loginTime:new Date().toISOString()})),e("teacher-dashboard"))},o=()=>{localStorage.removeItem("studentAuth"),localStorage.removeItem("teacherAuth"),r(null),e("login")},l=()=>{switch(t){case"login":return f.createElement(Ng,{onLogin:i,onNavigate:s});case"portal":return f.createElement(Yk,{user:n,onLogout:o,onNavigate:s});case"hub":return f.createElement(Jk,{user:n,onLogout:o,onNavigate:s});case"foundation-lessons":return f.createElement(eC,{user:n,onBack:()=>e("hub")});case"gaming-lessons":return f.createElement(tC,{user:n,onBack:()=>e("hub")});case"teacher-dashboard":return f.createElement(Zk,{user:n,onLogout:o,onNavigate:s});default:return f.createElement(Ng,{onLogin:i,onNavigate:s})}};return f.createElement("div",{className:"App"},l())}hc.createRoot(document.getElementById("root")).render(f.createElement(f.StrictMode,null,f.createElement(sC,null)));
