(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function OE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lg={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),VE=Symbol.for("react.portal"),ME=Symbol.for("react.fragment"),FE=Symbol.for("react.strict_mode"),UE=Symbol.for("react.profiler"),jE=Symbol.for("react.provider"),BE=Symbol.for("react.context"),zE=Symbol.for("react.forward_ref"),qE=Symbol.for("react.suspense"),$E=Symbol.for("react.memo"),WE=Symbol.for("react.lazy"),dm=Symbol.iterator;function HE(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var Og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,Mg={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=Mg,this.updater=n||Og}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fg(){}Fg.prototype=Xs.prototype;function Cd(t,e,n){this.props=t,this.context=e,this.refs=Mg,this.updater=n||Og}var Rd=Cd.prototype=new Fg;Rd.constructor=Cd;Vg(Rd,Xs.prototype);Rd.isPureReactComponent=!0;var hm=Array.isArray,Ug=Object.prototype.hasOwnProperty,Dd={current:null},jg={key:!0,ref:!0,__self:!0,__source:!0};function Bg(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Ug.call(e,r)&&!jg.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:So,type:t,key:i,ref:o,props:s,_owner:Dd.current}}function GE(t,e){return{$$typeof:So,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===So}function KE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fm=/\/+/g;function Ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KE(""+t.key):e.toString(36)}function ka(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case So:case VE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Ru(o,0):r,hm(s)?(n="",t!=null&&(n=t.replace(fm,"$&/")+"/"),ka(s,e,n,"",function(h){return h})):s!=null&&(Ld(s)&&(s=GE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(fm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",hm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Ru(i,l);o+=ka(i,e,n,u,s)}else if(u=HE(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Ru(i,l++),o+=ka(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(t,e,n){if(t==null)return t;var r=[],s=0;return ka(t,r,"","",function(i){return e.call(n,i,s++)}),r}function QE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},Aa={transition:null},XE={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:Dd};function zg(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!Ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Xs;ie.Fragment=ME;ie.Profiler=UE;ie.PureComponent=Cd;ie.StrictMode=FE;ie.Suspense=qE;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XE;ie.act=zg;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vg({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Dd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ug.call(e,u)&&!jg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:So,type:t.type,key:s,ref:i,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:BE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jE,_context:t},t.Consumer=t};ie.createElement=Bg;ie.createFactory=function(t){var e=Bg.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:zE,render:t}};ie.isValidElement=Ld;ie.lazy=function(t){return{$$typeof:WE,_payload:{_status:-1,_result:t},_init:QE}};ie.memo=function(t,e){return{$$typeof:$E,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Aa.transition;Aa.transition={};try{t()}finally{Aa.transition=e}};ie.unstable_act=zg;ie.useCallback=function(t,e){return bt.current.useCallback(t,e)};ie.useContext=function(t){return bt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return bt.current.useEffect(t,e)};ie.useId=function(){return bt.current.useId()};ie.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return bt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};ie.useRef=function(t){return bt.current.useRef(t)};ie.useState=function(t){return bt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return bt.current.useTransition()};ie.version="18.3.1";Lg.exports=ie;var $=Lg.exports;const c=OE($);var pc={},qg={exports:{}},Mt={},$g={exports:{}},Wg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var Y=X-1>>>1,se=z[Y];if(0<s(se,G))z[Y]=G,z[X]=se,X=Y;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var Y=0,se=z.length,ge=se>>>1;Y<ge;){var ye=2*(Y+1)-1,Ne=z[ye],Te=ye+1,N=z[Te];if(0>s(Ne,X))Te<se&&0>s(N,Ne)?(z[Y]=N,z[Te]=X,Y=Te):(z[Y]=Ne,z[ye]=X,Y=ye);else if(Te<se&&0>s(N,X))z[Y]=N,z[Te]=X,Y=Te;else break e}}return G}function s(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],m=1,y=null,_=3,A=!1,C=!1,P=!1,L=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=z)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function D(z){if(P=!1,I(z),!C)if(n(u)!==null)C=!0,be(M);else{var G=n(h);G!==null&&_e(D,G.startTime-z)}}function M(z,G){C=!1,P&&(P=!1,b(p),p=-1),A=!0;var X=_;try{for(I(G),y=n(u);y!==null&&(!(y.expirationTime>G)||z&&!k());){var Y=y.callback;if(typeof Y=="function"){y.callback=null,_=y.priorityLevel;var se=Y(y.expirationTime<=G);G=t.unstable_now(),typeof se=="function"?y.callback=se:y===n(u)&&r(u),I(G)}else r(u);y=n(u)}if(y!==null)var ge=!0;else{var ye=n(h);ye!==null&&_e(D,ye.startTime-G),ge=!1}return ge}finally{y=null,_=X,A=!1}}var F=!1,T=null,p=-1,v=5,x=-1;function k(){return!(t.unstable_now()-x<v)}function E(){if(T!==null){var z=t.unstable_now();x=z;var G=!0;try{G=T(!0,z)}finally{G?S():(F=!1,T=null)}}else F=!1}var S;if(typeof w=="function")S=function(){w(E)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ve=le.port2;le.port1.onmessage=E,S=function(){ve.postMessage(null)}}else S=function(){L(E,0)};function be(z){T=z,F||(F=!0,S())}function _e(z,G){p=L(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||A||(C=!0,be(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var X=_;_=G;try{return z()}finally{_=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=_;_=z;try{return G()}finally{_=X}},t.unstable_scheduleCallback=function(z,G,X){var Y=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Y+X:Y):X=Y,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=X+se,z={id:m++,callback:G,priorityLevel:z,startTime:X,expirationTime:se,sortIndex:-1},X>Y?(z.sortIndex=X,e(h,z),n(u)===null&&z===n(h)&&(P?(b(p),p=-1):P=!0,_e(D,X-Y))):(z.sortIndex=se,e(u,z),C||A||(C=!0,be(M))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var G=_;return function(){var X=_;_=G;try{return z.apply(this,arguments)}finally{_=X}}}})(Wg);$g.exports=Wg;var YE=$g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JE=$,Vt=YE;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hg=new Set,Ji={};function Qr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Ji[t]=e,t=0;t<e.length;t++)Hg.add(e[t])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gc=Object.prototype.hasOwnProperty,ZE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},pm={};function ew(t){return gc.call(pm,t)?!0:gc.call(mm,t)?!1:ZE.test(t)?pm[t]=!0:(mm[t]=!0,!1)}function tw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nw(t,e,n,r){if(e===null||typeof e>"u"||tw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function Vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Od,Vd);it[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Od,Vd);it[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Od,Vd);it[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Md(t,e,n,r){var s=it.hasOwnProperty(e)?it[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nw(e,n,s,r)&&(n=null),r||s===null?ew(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=JE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ia=Symbol.for("react.element"),hs=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),Fd=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),Gg=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),Ud=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),_c=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Qg=Symbol.for("react.offscreen"),gm=Symbol.iterator;function _i(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Du;function Ai(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Lu=!1;function Ou(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ai(t):""}function rw(t){switch(t.tag){case 5:return Ai(t.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 2:case 15:return t=Ou(t.type,!1),t;case 11:return t=Ou(t.type.render,!1),t;case 1:return t=Ou(t.type,!0),t;default:return""}}function Ec(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case hs:return"Portal";case yc:return"Profiler";case Fd:return"StrictMode";case vc:return"Suspense";case _c:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kg:return(t.displayName||"Context")+".Consumer";case Gg:return(t._context.displayName||"Context")+".Provider";case Ud:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jd:return e=t.displayName||null,e!==null?e:Ec(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return Ec(t(e))}catch{}}return null}function sw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ec(e);case 8:return e===Fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iw(t){var e=Xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oa(t){t._valueTracker||(t._valueTracker=iw(t))}function Yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wc(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ym(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jg(t,e){e=e.checked,e!=null&&Md(t,"checked",e,!1)}function Tc(t,e){Jg(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&xc(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xc(t,e,n){(e!=="number"||Ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ni=Array.isArray;function Ss(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function bc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(Ni(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function Zg(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ey(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ey(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var aa,ty=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(aa=aa||document.createElement("div"),aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ow=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(t){ow.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fi[e]=Fi[t]})});function ny(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fi.hasOwnProperty(t)&&Fi[t]?(""+e).trim():e+"px"}function ry(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ny(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var aw=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ic(t,e){if(e){if(aw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function Bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nc=null,Is=null,ks=null;function wm(t){if(t=Ao(t)){if(typeof Nc!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Ul(e),Nc(t.stateNode,t.type,e))}}function sy(t){Is?ks?ks.push(t):ks=[t]:Is=t}function iy(){if(Is){var t=Is,e=ks;if(ks=Is=null,wm(t),e)for(t=0;t<e.length;t++)wm(e[t])}}function oy(t,e){return t(e)}function ay(){}var Vu=!1;function ly(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return oy(t,e,n)}finally{Vu=!1,(Is!==null||ks!==null)&&(ay(),iy())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ul(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var Pc=!1;if(Nn)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Pc=!1}function lw(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(m){this.onError(m)}}var Ui=!1,Qa=null,Xa=!1,Cc=null,uw={onError:function(t){Ui=!0,Qa=t}};function cw(t,e,n,r,s,i,o,l,u){Ui=!1,Qa=null,lw.apply(uw,arguments)}function dw(t,e,n,r,s,i,o,l,u){if(cw.apply(this,arguments),Ui){if(Ui){var h=Qa;Ui=!1,Qa=null}else throw Error(q(198));Xa||(Xa=!0,Cc=h)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tm(t){if(Xr(t)!==t)throw Error(q(188))}function hw(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Tm(s),t;if(i===r)return Tm(s),e;i=i.sibling}throw Error(q(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function cy(t){return t=hw(t),t!==null?dy(t):null}function dy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dy(t);if(e!==null)return e;t=t.sibling}return null}var hy=Vt.unstable_scheduleCallback,xm=Vt.unstable_cancelCallback,fw=Vt.unstable_shouldYield,mw=Vt.unstable_requestPaint,Be=Vt.unstable_now,pw=Vt.unstable_getCurrentPriorityLevel,zd=Vt.unstable_ImmediatePriority,fy=Vt.unstable_UserBlockingPriority,Ya=Vt.unstable_NormalPriority,gw=Vt.unstable_LowPriority,my=Vt.unstable_IdlePriority,Ol=null,ln=null;function yw(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Ew,vw=Math.log,_w=Math.LN2;function Ew(t){return t>>>=0,t===0?32:31-(vw(t)/_w|0)|0}var la=64,ua=4194304;function Pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Pi(l):(i&=o,i!==0&&(r=Pi(i)))}else o=n&~s,o!==0?r=Pi(o):i!==0&&(r=Pi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),s=1<<n,r|=t[n],e&=~s;return r}function ww(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Zt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=ww(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Rc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function py(){var t=la;return la<<=1,!(la&4194240)&&(la=64),t}function Mu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function xw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Zt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Ee=0;function gy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yy,$d,vy,_y,Ey,Dc=!1,ca=[],tr=null,nr=null,rr=null,to=new Map,no=new Map,Hn=[],bw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bm(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function wi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ao(e),e!==null&&$d(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Sw(t,e,n,r,s){switch(e){case"focusin":return tr=wi(tr,t,e,n,r,s),!0;case"dragenter":return nr=wi(nr,t,e,n,r,s),!0;case"mouseover":return rr=wi(rr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return to.set(i,wi(to.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,no.set(i,wi(no.get(i)||null,t,e,n,r,s)),!0}return!1}function wy(t){var e=Pr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=uy(n),e!==null){t.blockedOn=e,Ey(t.priority,function(){vy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ac=r,n.target.dispatchEvent(r),Ac=null}else return e=Ao(n),e!==null&&$d(e),t.blockedOn=n,!1;e.shift()}return!0}function Sm(t,e,n){Na(t)&&n.delete(e)}function Iw(){Dc=!1,tr!==null&&Na(tr)&&(tr=null),nr!==null&&Na(nr)&&(nr=null),rr!==null&&Na(rr)&&(rr=null),to.forEach(Sm),no.forEach(Sm)}function Ti(t,e){t.blockedOn===e&&(t.blockedOn=null,Dc||(Dc=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,Iw)))}function ro(t){function e(s){return Ti(s,t)}if(0<ca.length){Ti(ca[0],t);for(var n=1;n<ca.length;n++){var r=ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&Ti(tr,t),nr!==null&&Ti(nr,t),rr!==null&&Ti(rr,t),to.forEach(e),no.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)wy(n),n.blockedOn===null&&Hn.shift()}var As=Mn.ReactCurrentBatchConfig,Za=!0;function kw(t,e,n,r){var s=Ee,i=As.transition;As.transition=null;try{Ee=1,Wd(t,e,n,r)}finally{Ee=s,As.transition=i}}function Aw(t,e,n,r){var s=Ee,i=As.transition;As.transition=null;try{Ee=4,Wd(t,e,n,r)}finally{Ee=s,As.transition=i}}function Wd(t,e,n,r){if(Za){var s=Lc(t,e,n,r);if(s===null)Gu(t,e,r,el,n),bm(t,r);else if(Sw(s,t,e,n,r))r.stopPropagation();else if(bm(t,r),e&4&&-1<bw.indexOf(t)){for(;s!==null;){var i=Ao(s);if(i!==null&&yy(i),i=Lc(t,e,n,r),i===null&&Gu(t,e,r,el,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Gu(t,e,r,null,n)}}var el=null;function Lc(t,e,n,r){if(el=null,t=Bd(r),t=Pr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function Ty(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pw()){case zd:return 1;case fy:return 4;case Ya:case gw:return 16;case my:return 536870912;default:return 16}default:return 16}}var Jn=null,Hd=null,Pa=null;function xy(){if(Pa)return Pa;var t,e=Hd,n=e.length,r,s="value"in Jn?Jn.value:Jn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Pa=s.slice(t,1<r?1-r:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function Im(){return!1}function Ft(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?da:Im,this.isPropagationStopped=Im,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gd=Ft(Ys),ko=Oe({},Ys,{view:0,detail:0}),Nw=Ft(ko),Fu,Uu,xi,Vl=Oe({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xi&&(xi&&t.type==="mousemove"?(Fu=t.screenX-xi.screenX,Uu=t.screenY-xi.screenY):Uu=Fu=0,xi=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),km=Ft(Vl),Pw=Oe({},Vl,{dataTransfer:0}),Cw=Ft(Pw),Rw=Oe({},ko,{relatedTarget:0}),ju=Ft(Rw),Dw=Oe({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Lw=Ft(Dw),Ow=Oe({},Ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vw=Ft(Ow),Mw=Oe({},Ys,{data:0}),Am=Ft(Mw),Fw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jw[t])?!!e[t]:!1}function Kd(){return Bw}var zw=Oe({},ko,{key:function(t){if(t.key){var e=Fw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qw=Ft(zw),$w=Oe({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=Ft($w),Ww=Oe({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),Hw=Ft(Ww),Gw=Oe({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kw=Ft(Gw),Qw=Oe({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xw=Ft(Qw),Yw=[9,13,27,32],Qd=Nn&&"CompositionEvent"in window,ji=null;Nn&&"documentMode"in document&&(ji=document.documentMode);var Jw=Nn&&"TextEvent"in window&&!ji,by=Nn&&(!Qd||ji&&8<ji&&11>=ji),Pm=" ",Cm=!1;function Sy(t,e){switch(t){case"keyup":return Yw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function Zw(t,e){switch(t){case"compositionend":return Iy(e);case"keypress":return e.which!==32?null:(Cm=!0,Pm);case"textInput":return t=e.data,t===Pm&&Cm?null:t;default:return null}}function eT(t,e){if(ms)return t==="compositionend"||!Qd&&Sy(t,e)?(t=xy(),Pa=Hd=Jn=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return by&&e.locale!=="ko"?null:e.data;default:return null}}var tT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tT[t.type]:e==="textarea"}function ky(t,e,n,r){sy(r),e=tl(e,"onChange"),0<e.length&&(n=new Gd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bi=null,so=null;function nT(t){Fy(t,0)}function Ml(t){var e=ys(t);if(Yg(e))return t}function rT(t,e){if(t==="change")return e}var Ay=!1;if(Nn){var Bu;if(Nn){var zu="oninput"in document;if(!zu){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),zu=typeof Dm.oninput=="function"}Bu=zu}else Bu=!1;Ay=Bu&&(!document.documentMode||9<document.documentMode)}function Lm(){Bi&&(Bi.detachEvent("onpropertychange",Ny),so=Bi=null)}function Ny(t){if(t.propertyName==="value"&&Ml(so)){var e=[];ky(e,so,t,Bd(t)),ly(nT,e)}}function sT(t,e,n){t==="focusin"?(Lm(),Bi=e,so=n,Bi.attachEvent("onpropertychange",Ny)):t==="focusout"&&Lm()}function iT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(so)}function oT(t,e){if(t==="click")return Ml(e)}function aT(t,e){if(t==="input"||t==="change")return Ml(e)}function lT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:lT;function io(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!gc.call(e,s)||!tn(t[s],e[s]))return!1}return!0}function Om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,e){var n=Om(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Om(n)}}function Py(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Py(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cy(){for(var t=window,e=Ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ka(t.document)}return e}function Xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uT(t){var e=Cy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Py(n.ownerDocument.documentElement,n)){if(r!==null&&Xd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Vm(n,i);var o=Vm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cT=Nn&&"documentMode"in document&&11>=document.documentMode,ps=null,Oc=null,zi=null,Vc=!1;function Mm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vc||ps==null||ps!==Ka(r)||(r=ps,"selectionStart"in r&&Xd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zi&&io(zi,r)||(zi=r,r=tl(Oc,"onSelect"),0<r.length&&(e=new Gd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ps)))}function ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},qu={},Ry={};Nn&&(Ry=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Fl(t){if(qu[t])return qu[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ry)return qu[t]=e[n];return t}var Dy=Fl("animationend"),Ly=Fl("animationiteration"),Oy=Fl("animationstart"),Vy=Fl("transitionend"),My=new Map,Fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){My.set(t,e),Qr(e,[t])}for(var $u=0;$u<Fm.length;$u++){var Wu=Fm[$u],dT=Wu.toLowerCase(),hT=Wu[0].toUpperCase()+Wu.slice(1);vr(dT,"on"+hT)}vr(Dy,"onAnimationEnd");vr(Ly,"onAnimationIteration");vr(Oy,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(Vy,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Um(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dw(r,e,void 0,t),t.currentTarget=null}function Fy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Um(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Um(s,l,h),i=u}}}if(Xa)throw t=Cc,Xa=!1,Cc=null,t}function ke(t,e){var n=e[Bc];n===void 0&&(n=e[Bc]=new Set);var r=t+"__bubble";n.has(r)||(Uy(e,t,2,!1),n.add(r))}function Hu(t,e,n){var r=0;e&&(r|=4),Uy(n,t,r,e)}var fa="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[fa]){t[fa]=!0,Hg.forEach(function(n){n!=="selectionchange"&&(fT.has(n)||Hu(n,!1,t),Hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fa]||(e[fa]=!0,Hu("selectionchange",!1,e))}}function Uy(t,e,n,r){switch(Ty(e)){case 1:var s=kw;break;case 4:s=Aw;break;default:s=Wd}n=s.bind(null,e,n,t),s=void 0,!Pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Gu(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Pr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}ly(function(){var h=i,m=Bd(n),y=[];e:{var _=My.get(t);if(_!==void 0){var A=Gd,C=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":A=qw;break;case"focusin":C="focus",A=ju;break;case"focusout":C="blur",A=ju;break;case"beforeblur":case"afterblur":A=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Cw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Hw;break;case Dy:case Ly:case Oy:A=Lw;break;case Vy:A=Kw;break;case"scroll":A=Nw;break;case"wheel":A=Xw;break;case"copy":case"cut":case"paste":A=Vw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Nm}var P=(e&4)!==0,L=!P&&t==="scroll",b=P?_!==null?_+"Capture":null:_;P=[];for(var w=h,I;w!==null;){I=w;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,b!==null&&(D=eo(w,b),D!=null&&P.push(ao(w,D,I)))),L)break;w=w.return}0<P.length&&(_=new A(_,C,null,n,m),y.push({event:_,listeners:P}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",_&&n!==Ac&&(C=n.relatedTarget||n.fromElement)&&(Pr(C)||C[Pn]))break e;if((A||_)&&(_=m.window===m?m:(_=m.ownerDocument)?_.defaultView||_.parentWindow:window,A?(C=n.relatedTarget||n.toElement,A=h,C=C?Pr(C):null,C!==null&&(L=Xr(C),C!==L||C.tag!==5&&C.tag!==6)&&(C=null)):(A=null,C=h),A!==C)){if(P=km,D="onMouseLeave",b="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=Nm,D="onPointerLeave",b="onPointerEnter",w="pointer"),L=A==null?_:ys(A),I=C==null?_:ys(C),_=new P(D,w+"leave",A,n,m),_.target=L,_.relatedTarget=I,D=null,Pr(m)===h&&(P=new P(b,w+"enter",C,n,m),P.target=I,P.relatedTarget=L,D=P),L=D,A&&C)t:{for(P=A,b=C,w=0,I=P;I;I=ss(I))w++;for(I=0,D=b;D;D=ss(D))I++;for(;0<w-I;)P=ss(P),w--;for(;0<I-w;)b=ss(b),I--;for(;w--;){if(P===b||b!==null&&P===b.alternate)break t;P=ss(P),b=ss(b)}P=null}else P=null;A!==null&&jm(y,_,A,P,!1),C!==null&&L!==null&&jm(y,L,C,P,!0)}}e:{if(_=h?ys(h):window,A=_.nodeName&&_.nodeName.toLowerCase(),A==="select"||A==="input"&&_.type==="file")var M=rT;else if(Rm(_))if(Ay)M=aT;else{M=iT;var F=sT}else(A=_.nodeName)&&A.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(M=oT);if(M&&(M=M(t,h))){ky(y,M,n,m);break e}F&&F(t,_,h),t==="focusout"&&(F=_._wrapperState)&&F.controlled&&_.type==="number"&&xc(_,"number",_.value)}switch(F=h?ys(h):window,t){case"focusin":(Rm(F)||F.contentEditable==="true")&&(ps=F,Oc=h,zi=null);break;case"focusout":zi=Oc=ps=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Mm(y,n,m);break;case"selectionchange":if(cT)break;case"keydown":case"keyup":Mm(y,n,m)}var T;if(Qd)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else ms?Sy(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(by&&n.locale!=="ko"&&(ms||p!=="onCompositionStart"?p==="onCompositionEnd"&&ms&&(T=xy()):(Jn=m,Hd="value"in Jn?Jn.value:Jn.textContent,ms=!0)),F=tl(h,p),0<F.length&&(p=new Am(p,t,null,n,m),y.push({event:p,listeners:F}),T?p.data=T:(T=Iy(n),T!==null&&(p.data=T)))),(T=Jw?Zw(t,n):eT(t,n))&&(h=tl(h,"onBeforeInput"),0<h.length&&(m=new Am("onBeforeInput","beforeinput",null,n,m),y.push({event:m,listeners:h}),m.data=T))}Fy(y,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=eo(t,n),i!=null&&r.unshift(ao(t,i,s)),i=eo(t,e),i!=null&&r.push(ao(t,i,s))),t=t.return}return r}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=eo(n,i),u!=null&&o.unshift(ao(n,u,l))):s||(u=eo(n,i),u!=null&&o.push(ao(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mT=/\r\n?/g,pT=/\u0000|\uFFFD/g;function Bm(t){return(typeof t=="string"?t:""+t).replace(mT,`
`).replace(pT,"")}function ma(t,e,n){if(e=Bm(e),Bm(t)!==e&&n)throw Error(q(425))}function nl(){}var Mc=null,Fc=null;function Uc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,gT=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,yT=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(t){return zm.resolve(null).then(t).catch(vT)}:jc;function vT(t){setTimeout(function(){throw t})}function Ku(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ro(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),on="__reactFiber$"+Js,lo="__reactProps$"+Js,Pn="__reactContainer$"+Js,Bc="__reactEvents$"+Js,_T="__reactListeners$"+Js,ET="__reactHandles$"+Js;function Pr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qm(t);t!==null;){if(n=t[on])return n;t=qm(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[on]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Ul(t){return t[lo]||null}var zc=[],vs=-1;function _r(t){return{current:t}}function Ae(t){0>vs||(t.current=zc[vs],zc[vs]=null,vs--)}function Se(t,e){vs++,zc[vs]=t.current,t.current=e}var mr={},gt=_r(mr),At=_r(!1),Mr=mr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Nt(t){return t=t.childContextTypes,t!=null}function rl(){Ae(At),Ae(gt)}function $m(t,e,n){if(gt.current!==mr)throw Error(q(168));Se(gt,e),Se(At,n)}function jy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(q(108,sw(t)||"Unknown",s));return Oe({},n,r)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Mr=gt.current,Se(gt,t),Se(At,At.current),!0}function Wm(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=jy(t,e,Mr),r.__reactInternalMemoizedMergedChildContext=t,Ae(At),Ae(gt),Se(gt,t)):Ae(At),Se(At,n)}var _n=null,jl=!1,Qu=!1;function By(t){_n===null?_n=[t]:_n.push(t)}function wT(t){jl=!0,By(t)}function Er(){if(!Qu&&_n!==null){Qu=!0;var t=0,e=Ee;try{var n=_n;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,jl=!1}catch(s){throw _n!==null&&(_n=_n.slice(t+1)),hy(zd,Er),s}finally{Ee=e,Qu=!1}}return null}var _s=[],Es=0,il=null,ol=0,Ut=[],jt=0,Fr=null,En=1,wn="";function kr(t,e){_s[Es++]=ol,_s[Es++]=il,il=t,ol=e}function zy(t,e,n){Ut[jt++]=En,Ut[jt++]=wn,Ut[jt++]=Fr,Fr=t;var r=En;t=wn;var s=32-Zt(r)-1;r&=~(1<<s),n+=1;var i=32-Zt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,En=1<<32-Zt(e)+s|n<<s|r,wn=i+t}else En=1<<i|n<<s|r,wn=t}function Yd(t){t.return!==null&&(kr(t,1),zy(t,1,0))}function Jd(t){for(;t===il;)il=_s[--Es],_s[Es]=null,ol=_s[--Es],_s[Es]=null;for(;t===Fr;)Fr=Ut[--jt],Ut[jt]=null,wn=Ut[--jt],Ut[jt]=null,En=Ut[--jt],Ut[jt]=null}var Lt=null,Dt=null,Ce=!1,Yt=null;function qy(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Dt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:En,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Dt=null,!0):!1;default:return!1}}function qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $c(t){if(Ce){var e=Dt;if(e){var n=e;if(!Hm(t,e)){if(qc(t))throw Error(q(418));e=sr(n.nextSibling);var r=Lt;e&&Hm(t,e)?qy(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Lt=t)}}else{if(qc(t))throw Error(q(418));t.flags=t.flags&-4097|2,Ce=!1,Lt=t}}}function Gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function pa(t){if(t!==Lt)return!1;if(!Ce)return Gm(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uc(t.type,t.memoizedProps)),e&&(e=Dt)){if(qc(t))throw $y(),Error(q(418));for(;e;)qy(t,e),e=sr(e.nextSibling)}if(Gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Lt?sr(t.stateNode.nextSibling):null;return!0}function $y(){for(var t=Dt;t;)t=sr(t.nextSibling)}function Ms(){Dt=Lt=null,Ce=!1}function Zd(t){Yt===null?Yt=[t]:Yt.push(t)}var TT=Mn.ReactCurrentBatchConfig;function bi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function ga(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Km(t){var e=t._init;return e(t._payload)}function Wy(t){function e(b,w){if(t){var I=b.deletions;I===null?(b.deletions=[w],b.flags|=16):I.push(w)}}function n(b,w){if(!t)return null;for(;w!==null;)e(b,w),w=w.sibling;return null}function r(b,w){for(b=new Map;w!==null;)w.key!==null?b.set(w.key,w):b.set(w.index,w),w=w.sibling;return b}function s(b,w){return b=lr(b,w),b.index=0,b.sibling=null,b}function i(b,w,I){return b.index=I,t?(I=b.alternate,I!==null?(I=I.index,I<w?(b.flags|=2,w):I):(b.flags|=2,w)):(b.flags|=1048576,w)}function o(b){return t&&b.alternate===null&&(b.flags|=2),b}function l(b,w,I,D){return w===null||w.tag!==6?(w=nc(I,b.mode,D),w.return=b,w):(w=s(w,I),w.return=b,w)}function u(b,w,I,D){var M=I.type;return M===fs?m(b,w,I.props.children,D,I.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$n&&Km(M)===w.type)?(D=s(w,I.props),D.ref=bi(b,w,I),D.return=b,D):(D=Fa(I.type,I.key,I.props,null,b.mode,D),D.ref=bi(b,w,I),D.return=b,D)}function h(b,w,I,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=rc(I,b.mode,D),w.return=b,w):(w=s(w,I.children||[]),w.return=b,w)}function m(b,w,I,D,M){return w===null||w.tag!==7?(w=Or(I,b.mode,D,M),w.return=b,w):(w=s(w,I),w.return=b,w)}function y(b,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=nc(""+w,b.mode,I),w.return=b,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ia:return I=Fa(w.type,w.key,w.props,null,b.mode,I),I.ref=bi(b,null,w),I.return=b,I;case hs:return w=rc(w,b.mode,I),w.return=b,w;case $n:var D=w._init;return y(b,D(w._payload),I)}if(Ni(w)||_i(w))return w=Or(w,b.mode,I,null),w.return=b,w;ga(b,w)}return null}function _(b,w,I,D){var M=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return M!==null?null:l(b,w,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ia:return I.key===M?u(b,w,I,D):null;case hs:return I.key===M?h(b,w,I,D):null;case $n:return M=I._init,_(b,w,M(I._payload),D)}if(Ni(I)||_i(I))return M!==null?null:m(b,w,I,D,null);ga(b,I)}return null}function A(b,w,I,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return b=b.get(I)||null,l(w,b,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ia:return b=b.get(D.key===null?I:D.key)||null,u(w,b,D,M);case hs:return b=b.get(D.key===null?I:D.key)||null,h(w,b,D,M);case $n:var F=D._init;return A(b,w,I,F(D._payload),M)}if(Ni(D)||_i(D))return b=b.get(I)||null,m(w,b,D,M,null);ga(w,D)}return null}function C(b,w,I,D){for(var M=null,F=null,T=w,p=w=0,v=null;T!==null&&p<I.length;p++){T.index>p?(v=T,T=null):v=T.sibling;var x=_(b,T,I[p],D);if(x===null){T===null&&(T=v);break}t&&T&&x.alternate===null&&e(b,T),w=i(x,w,p),F===null?M=x:F.sibling=x,F=x,T=v}if(p===I.length)return n(b,T),Ce&&kr(b,p),M;if(T===null){for(;p<I.length;p++)T=y(b,I[p],D),T!==null&&(w=i(T,w,p),F===null?M=T:F.sibling=T,F=T);return Ce&&kr(b,p),M}for(T=r(b,T);p<I.length;p++)v=A(T,b,p,I[p],D),v!==null&&(t&&v.alternate!==null&&T.delete(v.key===null?p:v.key),w=i(v,w,p),F===null?M=v:F.sibling=v,F=v);return t&&T.forEach(function(k){return e(b,k)}),Ce&&kr(b,p),M}function P(b,w,I,D){var M=_i(I);if(typeof M!="function")throw Error(q(150));if(I=M.call(I),I==null)throw Error(q(151));for(var F=M=null,T=w,p=w=0,v=null,x=I.next();T!==null&&!x.done;p++,x=I.next()){T.index>p?(v=T,T=null):v=T.sibling;var k=_(b,T,x.value,D);if(k===null){T===null&&(T=v);break}t&&T&&k.alternate===null&&e(b,T),w=i(k,w,p),F===null?M=k:F.sibling=k,F=k,T=v}if(x.done)return n(b,T),Ce&&kr(b,p),M;if(T===null){for(;!x.done;p++,x=I.next())x=y(b,x.value,D),x!==null&&(w=i(x,w,p),F===null?M=x:F.sibling=x,F=x);return Ce&&kr(b,p),M}for(T=r(b,T);!x.done;p++,x=I.next())x=A(T,b,p,x.value,D),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?p:x.key),w=i(x,w,p),F===null?M=x:F.sibling=x,F=x);return t&&T.forEach(function(E){return e(b,E)}),Ce&&kr(b,p),M}function L(b,w,I,D){if(typeof I=="object"&&I!==null&&I.type===fs&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ia:e:{for(var M=I.key,F=w;F!==null;){if(F.key===M){if(M=I.type,M===fs){if(F.tag===7){n(b,F.sibling),w=s(F,I.props.children),w.return=b,b=w;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$n&&Km(M)===F.type){n(b,F.sibling),w=s(F,I.props),w.ref=bi(b,F,I),w.return=b,b=w;break e}n(b,F);break}else e(b,F);F=F.sibling}I.type===fs?(w=Or(I.props.children,b.mode,D,I.key),w.return=b,b=w):(D=Fa(I.type,I.key,I.props,null,b.mode,D),D.ref=bi(b,w,I),D.return=b,b=D)}return o(b);case hs:e:{for(F=I.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(b,w.sibling),w=s(w,I.children||[]),w.return=b,b=w;break e}else{n(b,w);break}else e(b,w);w=w.sibling}w=rc(I,b.mode,D),w.return=b,b=w}return o(b);case $n:return F=I._init,L(b,w,F(I._payload),D)}if(Ni(I))return C(b,w,I,D);if(_i(I))return P(b,w,I,D);ga(b,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(n(b,w.sibling),w=s(w,I),w.return=b,b=w):(n(b,w),w=nc(I,b.mode,D),w.return=b,b=w),o(b)):n(b,w)}return L}var Fs=Wy(!0),Hy=Wy(!1),al=_r(null),ll=null,ws=null,eh=null;function th(){eh=ws=ll=null}function nh(t){var e=al.current;Ae(al),t._currentValue=e}function Wc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){ll=t,eh=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(eh!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(ll===null)throw Error(q(308));ws=t,ll.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var Cr=null;function rh(t){Cr===null?Cr=[t]:Cr.push(t)}function Gy(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,rh(e)):(n.next=s.next,s.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ky(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Cn(t,n)}return s=r.interleaved,s===null?(e.next=e,rh(r)):(e.next=s.next,s.next=e),r.interleaved=e,Cn(t,n)}function Ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}function Qm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,r){var s=t.updateQueue;Wn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=h:l.next=h,m.lastBaseUpdate=u))}if(i!==null){var y=s.baseState;o=0,m=h=u=null,l=i;do{var _=l.lane,A=l.eventTime;if((r&_)===_){m!==null&&(m=m.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(_=e,A=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){y=C.call(A,y,_);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,_=typeof C=="function"?C.call(A,y,_):C,_==null)break e;y=Oe({},y,_);break e;case 2:Wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[l]:_.push(l))}else A={eventTime:A,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(h=m=A,u=y):m=m.next=A,o|=_;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;_=l,l=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(m===null&&(u=y),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=y}}function Xm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(q(191,s));s.call(r)}}}var No={},un=_r(No),uo=_r(No),co=_r(No);function Rr(t){if(t===No)throw Error(q(174));return t}function ih(t,e){switch(Se(co,e),Se(uo,t),Se(un,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sc(e,t)}Ae(un),Se(un,e)}function Us(){Ae(un),Ae(uo),Ae(co)}function Qy(t){Rr(co.current);var e=Rr(un.current),n=Sc(e,t.type);e!==n&&(Se(uo,t),Se(un,n))}function oh(t){uo.current===t&&(Ae(un),Ae(uo))}var De=_r(0);function cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function ah(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var Da=Mn.ReactCurrentDispatcher,Yu=Mn.ReactCurrentBatchConfig,Ur=0,Le=null,He=null,Ye=null,dl=!1,qi=!1,ho=0,xT=0;function ct(){throw Error(q(321))}function lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function uh(t,e,n,r,s,i){if(Ur=i,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Da.current=t===null||t.memoizedState===null?kT:AT,t=n(r,s),qi){i=0;do{if(qi=!1,ho=0,25<=i)throw Error(q(301));i+=1,Ye=He=null,e.updateQueue=null,Da.current=NT,t=n(r,s)}while(qi)}if(Da.current=hl,e=He!==null&&He.next!==null,Ur=0,Ye=He=Le=null,dl=!1,e)throw Error(q(300));return t}function ch(){var t=ho!==0;return ho=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Le.memoizedState=Ye=t:Ye=Ye.next=t,Ye}function Wt(){if(He===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Ye===null?Le.memoizedState:Ye.next;if(e!==null)Ye=e,He=t;else{if(t===null)throw Error(q(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ye===null?Le.memoizedState=Ye=t:Ye=Ye.next=t}return Ye}function fo(t,e){return typeof e=="function"?e(t):e}function Ju(t){var e=Wt(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=He,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var m=h.lane;if((Ur&m)===m)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var y={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,Le.lanes|=m,jr|=m}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,tn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Le.lanes|=i,jr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=Wt(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);tn(i,e.memoizedState)||(kt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Xy(){}function Yy(t,e){var n=Le,r=Wt(),s=e(),i=!tn(r.memoizedState,s);if(i&&(r.memoizedState=s,kt=!0),r=r.queue,dh(ev.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,mo(9,Zy.bind(null,n,r,s,e),void 0,null),Je===null)throw Error(q(349));Ur&30||Jy(n,e,s)}return s}function Jy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zy(t,e,n,r){e.value=n,e.getSnapshot=r,tv(e)&&nv(t)}function ev(t,e,n){return n(function(){tv(e)&&nv(t)})}function tv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function nv(t){var e=Cn(t,1);e!==null&&en(e,t,1,-1)}function Ym(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:t},e.queue=t,t=t.dispatch=IT.bind(null,Le,t),[e.memoizedState,t]}function mo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rv(){return Wt().memoizedState}function La(t,e,n,r){var s=sn();Le.flags|=t,s.memoizedState=mo(1|e,n,void 0,r===void 0?null:r)}function Bl(t,e,n,r){var s=Wt();r=r===void 0?null:r;var i=void 0;if(He!==null){var o=He.memoizedState;if(i=o.destroy,r!==null&&lh(r,o.deps)){s.memoizedState=mo(e,n,i,r);return}}Le.flags|=t,s.memoizedState=mo(1|e,n,i,r)}function Jm(t,e){return La(8390656,8,t,e)}function dh(t,e){return Bl(2048,8,t,e)}function sv(t,e){return Bl(4,2,t,e)}function iv(t,e){return Bl(4,4,t,e)}function ov(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function av(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,ov.bind(null,e,t),n)}function hh(){}function lv(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uv(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cv(t,e,n){return Ur&21?(tn(n,e)||(n=py(),Le.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function bT(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Yu.transition;Yu.transition={};try{t(!1),e()}finally{Ee=n,Yu.transition=r}}function dv(){return Wt().memoizedState}function ST(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hv(t))fv(e,n);else if(n=Gy(t,e,n,r),n!==null){var s=xt();en(n,t,r,s),mv(n,e,r)}}function IT(t,e,n){var r=ar(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hv(t))fv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,tn(l,o)){var u=e.interleaved;u===null?(s.next=s,rh(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Gy(t,e,s,r),n!==null&&(s=xt(),en(n,t,r,s),mv(n,e,r))}}function hv(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function fv(t,e){qi=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}var hl={readContext:$t,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},kT={readContext:$t,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:Jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,ov.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ST.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:Ym,useDebugValue:hh,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=Ym(!1),e=t[0];return t=bT.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,s=sn();if(Ce){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),Je===null)throw Error(q(349));Ur&30||Jy(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Jm(ev.bind(null,r,i,t),[t]),r.flags|=2048,mo(9,Zy.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=sn(),e=Je.identifierPrefix;if(Ce){var n=wn,r=En;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AT={readContext:$t,useCallback:lv,useContext:$t,useEffect:dh,useImperativeHandle:av,useInsertionEffect:sv,useLayoutEffect:iv,useMemo:uv,useReducer:Ju,useRef:rv,useState:function(){return Ju(fo)},useDebugValue:hh,useDeferredValue:function(t){var e=Wt();return cv(e,He.memoizedState,t)},useTransition:function(){var t=Ju(fo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:Xy,useSyncExternalStore:Yy,useId:dv,unstable_isNewReconciler:!1},NT={readContext:$t,useCallback:lv,useContext:$t,useEffect:dh,useImperativeHandle:av,useInsertionEffect:sv,useLayoutEffect:iv,useMemo:uv,useReducer:Zu,useRef:rv,useState:function(){return Zu(fo)},useDebugValue:hh,useDeferredValue:function(t){var e=Wt();return He===null?e.memoizedState=t:cv(e,He.memoizedState,t)},useTransition:function(){var t=Zu(fo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:Xy,useSyncExternalStore:Yy,useId:dv,unstable_isNewReconciler:!1};function Qt(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zl={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),s=ar(t),i=Sn(r,s);i.payload=e,n!=null&&(i.callback=n),e=ir(t,i,s),e!==null&&(en(e,t,s,r),Ra(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),s=ar(t),i=Sn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ir(t,i,s),e!==null&&(en(e,t,s,r),Ra(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=ar(t),s=Sn(n,r);s.tag=2,e!=null&&(s.callback=e),e=ir(t,s,r),e!==null&&(en(e,t,r,n),Ra(e,t,r))}};function Zm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(s,i):!0}function pv(t,e,n){var r=!1,s=mr,i=e.contextType;return typeof i=="object"&&i!==null?i=$t(i):(s=Nt(e)?Mr:gt.current,r=e.contextTypes,i=(r=r!=null)?Vs(t,s):mr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function ep(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zl.enqueueReplaceState(e,e.state,null)}function Gc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},sh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=$t(i):(i=Nt(e)?Mr:gt.current,s.context=Vs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Hc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&zl.enqueueReplaceState(s,s.state,null),ul(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",r=e;do n+=rw(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PT=typeof WeakMap=="function"?WeakMap:Map;function gv(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ml||(ml=!0,sd=r),Kc(t,e)},n}function yv(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Kc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Kc(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=$T.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rp(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var CT=Mn.ReactCurrentOwner,kt=!1;function Tt(t,e,n,r){e.child=t===null?Hy(e,null,n,r):Fs(e,t.child,n,r)}function sp(t,e,n,r,s){n=n.render;var i=e.ref;return Ns(e,s),r=uh(t,e,n,r,i,s),n=ch(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rn(t,e,s)):(Ce&&n&&Yd(e),e.flags|=1,Tt(t,e,r,s),e.child)}function ip(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Eh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,vv(t,e,i,r,s)):(t=Fa(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,r)&&t.ref===e.ref)return Rn(t,e,s)}return e.flags|=1,t=lr(i,r),t.ref=e.ref,t.return=e,e.child=t}function vv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(io(i,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Rn(t,e,s)}return Qc(t,e,n,r,s)}function _v(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(xs,Rt),Rt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(xs,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Se(xs,Rt),Rt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Se(xs,Rt),Rt|=r;return Tt(t,e,s,n),e.child}function Ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qc(t,e,n,r,s){var i=Nt(n)?Mr:gt.current;return i=Vs(e,i),Ns(e,s),n=uh(t,e,n,r,i,s),r=ch(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rn(t,e,s)):(Ce&&r&&Yd(e),e.flags|=1,Tt(t,e,n,s),e.child)}function op(t,e,n,r,s){if(Nt(n)){var i=!0;sl(e)}else i=!1;if(Ns(e,s),e.stateNode===null)Oa(t,e),pv(e,n,r),Gc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=$t(h):(h=Nt(n)?Mr:gt.current,h=Vs(e,h));var m=n.getDerivedStateFromProps,y=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&ep(e,o,r,h),Wn=!1;var _=e.memoizedState;o.state=_,ul(e,r,o,s),u=e.memoizedState,l!==r||_!==u||At.current||Wn?(typeof m=="function"&&(Hc(e,n,m,r),u=e.memoizedState),(l=Wn||Zm(e,n,l,r,_,u,h))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ky(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Qt(e.type,l),o.props=h,y=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=Nt(n)?Mr:gt.current,u=Vs(e,u));var A=n.getDerivedStateFromProps;(m=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||_!==u)&&ep(e,o,r,u),Wn=!1,_=e.memoizedState,o.state=_,ul(e,r,o,s);var C=e.memoizedState;l!==y||_!==C||At.current||Wn?(typeof A=="function"&&(Hc(e,n,A,r),C=e.memoizedState),(h=Wn||Zm(e,n,h,r,_,C,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Xc(t,e,n,r,i,s)}function Xc(t,e,n,r,s,i){Ev(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Wm(e,n,!1),Rn(t,e,i);r=e.stateNode,CT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,i),e.child=Fs(e,null,l,i)):Tt(t,e,l,i),e.memoizedState=r.state,s&&Wm(e,n,!0),e.child}function wv(t){var e=t.stateNode;e.pendingContext?$m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$m(t,e.context,!1),ih(t,e.containerInfo)}function ap(t,e,n,r,s){return Ms(),Zd(s),e.flags|=256,Tt(t,e,n,r),e.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function Jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tv(t,e,n){var r=e.pendingProps,s=De.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Se(De,s&1),t===null)return $c(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Wl(o,r,0,null),t=Or(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Jc(n),e.memoizedState=Yc,t):fh(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return RT(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=lr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=lr(l,i):(i=Or(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Jc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Yc,r}return i=t.child,t=i.sibling,r=lr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fh(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ya(t,e,n,r){return r!==null&&Zd(r),Fs(e,t.child,null,n),t=fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ec(Error(q(422))),ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Wl({mode:"visible",children:r.children},s,0,null),i=Or(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=Jc(o),e.memoizedState=Yc,i);if(!(e.mode&1))return ya(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(q(419)),r=ec(i,r,void 0),ya(t,e,o,r)}if(l=(o&t.childLanes)!==0,kt||l){if(r=Je,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Cn(t,s),en(r,t,s,-1))}return _h(),r=ec(Error(q(421))),ya(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=WT.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Dt=sr(s.nextSibling),Lt=e,Ce=!0,Yt=null,t!==null&&(Ut[jt++]=En,Ut[jt++]=wn,Ut[jt++]=Fr,En=t.id,wn=t.overflow,Fr=e),e=fh(e,r.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wc(t.return,e,n)}function tc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function xv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Tt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(De,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&cl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),tc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&cl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}tc(e,!0,n,null,i);break;case"together":tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DT(t,e,n){switch(e.tag){case 3:wv(e),Ms();break;case 5:Qy(e);break;case 1:Nt(e.type)&&sl(e);break;case 4:ih(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Se(al,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?Tv(t,e,n):(Se(De,De.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);Se(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return xv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Se(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,_v(t,e,n)}return Rn(t,e,n)}var bv,Zc,Sv,Iv;bv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zc=function(){};Sv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Rr(un.current);var i=null;switch(n){case"input":s=wc(t,s),r=wc(t,r),i=[];break;case"select":s=Oe({},s,{value:void 0}),r=Oe({},r,{value:void 0}),i=[];break;case"textarea":s=bc(t,s),r=bc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nl)}Ic(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ji.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ji.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ke("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Iv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Si(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LT(t,e,n){var r=e.pendingProps;switch(Jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Nt(e.type)&&rl(),dt(e),null;case 3:return r=e.stateNode,Us(),Ae(At),Ae(gt),ah(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(ad(Yt),Yt=null))),Zc(t,e),dt(e),null;case 5:oh(e);var s=Rr(co.current);if(n=e.type,t!==null&&e.stateNode!=null)Sv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return dt(e),null}if(t=Rr(un.current),pa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[on]=e,r[lo]=i,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(s=0;s<Ci.length;s++)ke(Ci[s],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ym(r,i),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ke("invalid",r);break;case"textarea":_m(r,i),ke("invalid",r)}Ic(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),s=["children",""+l]):Ji.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":oa(r),vm(r,i,!0);break;case"textarea":oa(r),Em(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=nl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ey(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[lo]=r,bv(t,e,!1,!1),e.stateNode=t;e:{switch(o=kc(n,r),n){case"dialog":ke("cancel",t),ke("close",t),s=r;break;case"iframe":case"object":case"embed":ke("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ci.length;s++)ke(Ci[s],t);s=r;break;case"source":ke("error",t),s=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),s=r;break;case"details":ke("toggle",t),s=r;break;case"input":ym(t,r),s=wc(t,r),ke("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Oe({},r,{value:void 0}),ke("invalid",t);break;case"textarea":_m(t,r),s=bc(t,r),ke("invalid",t);break;default:s=r}Ic(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?ry(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ty(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zi(t,u):typeof u=="number"&&Zi(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ji.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ke("scroll",t):u!=null&&Md(t,i,u,o))}switch(n){case"input":oa(t),vm(t,r,!1);break;case"textarea":oa(t),Em(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ss(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)Iv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Rr(co.current),Rr(un.current),pa(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(i=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return dt(e),null;case 13:if(Ae(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Dt!==null&&e.mode&1&&!(e.flags&128))$y(),Ms(),e.flags|=98560,i=!1;else if(i=pa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(q(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(q(317));i[on]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),i=!1}else Yt!==null&&(ad(Yt),Yt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Ke===0&&(Ke=3):_h())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return Us(),Zc(t,e),t===null&&oo(e.stateNode.containerInfo),dt(e),null;case 10:return nh(e.type._context),dt(e),null;case 17:return Nt(e.type)&&rl(),dt(e),null;case 19:if(Ae(De),i=e.memoizedState,i===null)return dt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Si(i,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cl(t),o!==null){for(e.flags|=128,Si(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(De,De.current&1|2),e.child}t=t.sibling}i.tail!==null&&Be()>Bs&&(e.flags|=128,r=!0,Si(i,!1),e.lanes=4194304)}else{if(!r)if(t=cl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Si(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ce)return dt(e),null}else 2*Be()-i.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,r=!0,Si(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Be(),e.sibling=null,n=De.current,Se(De,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return vh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function OT(t,e){switch(Jd(e),e.tag){case 1:return Nt(e.type)&&rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),Ae(At),Ae(gt),ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return oh(e),null;case 13:if(Ae(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(De),null;case 4:return Us(),null;case 10:return nh(e.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var va=!1,mt=!1,VT=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function ed(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var up=!1;function MT(t,e){if(Mc=Za,t=Cy(),Xd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,m=0,y=t,_=null;t:for(;;){for(var A;y!==n||s!==0&&y.nodeType!==3||(l=o+s),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(A=y.firstChild)!==null;)_=y,y=A;for(;;){if(y===t)break t;if(_===n&&++h===s&&(l=o),_===i&&++m===r&&(u=o),(A=y.nextSibling)!==null)break;y=_,_=y.parentNode}y=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fc={focusedElem:t,selectionRange:n},Za=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,L=C.memoizedState,b=e.stateNode,w=b.getSnapshotBeforeUpdate(e.elementType===e.type?P:Qt(e.type,P),L);b.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(D){Fe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return C=up,up=!1,C}function $i(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ed(e,n,i)}s=s.next}while(s!==r)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kv(t){var e=t.alternate;e!==null&&(t.alternate=null,kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[lo],delete e[Bc],delete e[_T],delete e[ET])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(r!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}var et=null,Xt=!1;function zn(t,e,n){for(n=n.child;n!==null;)Nv(t,e,n),n=n.sibling}function Nv(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:mt||Ts(n,e);case 6:var r=et,s=Xt;et=null,zn(t,e,n),et=r,Xt=s,et!==null&&(Xt?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Xt?(t=et,n=n.stateNode,t.nodeType===8?Ku(t.parentNode,n):t.nodeType===1&&Ku(t,n),ro(t)):Ku(et,n.stateNode));break;case 4:r=et,s=Xt,et=n.stateNode.containerInfo,Xt=!0,zn(t,e,n),et=r,Xt=s;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ed(n,e,o),s=s.next}while(s!==r)}zn(t,e,n);break;case 1:if(!mt&&(Ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,zn(t,e,n),mt=r):zn(t,e,n);break;default:zn(t,e,n)}}function dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VT),e.forEach(function(r){var s=HT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,Xt=!1;break e;case 3:et=l.stateNode.containerInfo,Xt=!0;break e;case 4:et=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(et===null)throw Error(q(160));Nv(i,o,s),et=null,Xt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Fe(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pv(e,t),e=e.sibling}function Pv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),rn(t),r&4){try{$i(3,t,t.return),ql(3,t)}catch(P){Fe(t,t.return,P)}try{$i(5,t,t.return)}catch(P){Fe(t,t.return,P)}}break;case 1:Kt(e,t),rn(t),r&512&&n!==null&&Ts(n,n.return);break;case 5:if(Kt(e,t),rn(t),r&512&&n!==null&&Ts(n,n.return),t.flags&32){var s=t.stateNode;try{Zi(s,"")}catch(P){Fe(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Jg(s,i),kc(l,o);var h=kc(l,i);for(o=0;o<u.length;o+=2){var m=u[o],y=u[o+1];m==="style"?ry(s,y):m==="dangerouslySetInnerHTML"?ty(s,y):m==="children"?Zi(s,y):Md(s,m,y,h)}switch(l){case"input":Tc(s,i);break;case"textarea":Zg(s,i);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?Ss(s,!!i.multiple,A,!1):_!==!!i.multiple&&(i.defaultValue!=null?Ss(s,!!i.multiple,i.defaultValue,!0):Ss(s,!!i.multiple,i.multiple?[]:"",!1))}s[lo]=i}catch(P){Fe(t,t.return,P)}}break;case 6:if(Kt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(q(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Fe(t,t.return,P)}}break;case 3:if(Kt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(P){Fe(t,t.return,P)}break;case 4:Kt(e,t),rn(t);break;case 13:Kt(e,t),rn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(gh=Be())),r&4&&dp(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(h=mt)||m,Kt(e,t),mt=h):Kt(e,t),rn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!m&&t.mode&1)for(K=t,m=t.child;m!==null;){for(y=K=m;K!==null;){switch(_=K,A=_.child,_.tag){case 0:case 11:case 14:case 15:$i(4,_,_.return);break;case 1:Ts(_,_.return);var C=_.stateNode;if(typeof C.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){Fe(r,n,P)}}break;case 5:Ts(_,_.return);break;case 22:if(_.memoizedState!==null){fp(y);continue}}A!==null?(A.return=_,K=A):fp(y)}m=m.sibling}e:for(m=null,y=t;;){if(y.tag===5){if(m===null){m=y;try{s=y.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ny("display",o))}catch(P){Fe(t,t.return,P)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(P){Fe(t,t.return,P)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Kt(e,t),rn(t),r&4&&dp(t);break;case 21:break;default:Kt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Zi(s,""),r.flags&=-33);var i=cp(t);rd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=cp(t);nd(t,l,o);break;default:throw Error(q(161))}}catch(u){Fe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FT(t,e,n){K=t,Cv(t)}function Cv(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||va;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||mt;l=va;var h=mt;if(va=o,(mt=u)&&!h)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?mp(s):u!==null?(u.return=o,K=u):mp(s);for(;i!==null;)K=i,Cv(i),i=i.sibling;K=s,va=l,mt=h}hp(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):hp(t)}}function hp(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||ql(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Xm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&ro(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}mt||e.flags&512&&td(e)}catch(_){Fe(e,e.return,_)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function fp(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function mp(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(u){Fe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Fe(e,s,u)}}var i=e.return;try{td(e)}catch(u){Fe(e,i,u)}break;case 5:var o=e.return;try{td(e)}catch(u){Fe(e,o,u)}}}catch(u){Fe(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var UT=Math.ceil,fl=Mn.ReactCurrentDispatcher,mh=Mn.ReactCurrentOwner,qt=Mn.ReactCurrentBatchConfig,fe=0,Je=null,$e=null,rt=0,Rt=0,xs=_r(0),Ke=0,po=null,jr=0,$l=0,ph=0,Wi=null,It=null,gh=0,Bs=1/0,vn=null,ml=!1,sd=null,or=null,_a=!1,Zn=null,pl=0,Hi=0,id=null,Va=-1,Ma=0;function xt(){return fe&6?Be():Va!==-1?Va:Va=Be()}function ar(t){return t.mode&1?fe&2&&rt!==0?rt&-rt:TT.transition!==null?(Ma===0&&(Ma=py()),Ma):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:Ty(t.type)),t):1}function en(t,e,n,r){if(50<Hi)throw Hi=0,id=null,Error(q(185));Io(t,n,r),(!(fe&2)||t!==Je)&&(t===Je&&(!(fe&2)&&($l|=n),Ke===4&&Gn(t,rt)),Pt(t,r),n===1&&fe===0&&!(e.mode&1)&&(Bs=Be()+500,jl&&Er()))}function Pt(t,e){var n=t.callbackNode;Tw(t,e);var r=Ja(t,t===Je?rt:0);if(r===0)n!==null&&xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xm(n),e===1)t.tag===0?wT(pp.bind(null,t)):By(pp.bind(null,t)),yT(function(){!(fe&6)&&Er()}),n=null;else{switch(gy(r)){case 1:n=zd;break;case 4:n=fy;break;case 16:n=Ya;break;case 536870912:n=my;break;default:n=Ya}n=Uv(n,Rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rv(t,e){if(Va=-1,Ma=0,fe&6)throw Error(q(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var r=Ja(t,t===Je?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gl(t,r);else{e=r;var s=fe;fe|=2;var i=Lv();(Je!==t||rt!==e)&&(vn=null,Bs=Be()+500,Lr(t,e));do try{zT();break}catch(l){Dv(t,l)}while(!0);th(),fl.current=i,fe=s,$e!==null?e=0:(Je=null,rt=0,e=Ke)}if(e!==0){if(e===2&&(s=Rc(t),s!==0&&(r=s,e=od(t,s))),e===1)throw n=po,Lr(t,0),Gn(t,r),Pt(t,Be()),n;if(e===6)Gn(t,r);else{if(s=t.current.alternate,!(r&30)&&!jT(s)&&(e=gl(t,r),e===2&&(i=Rc(t),i!==0&&(r=i,e=od(t,i))),e===1))throw n=po,Lr(t,0),Gn(t,r),Pt(t,Be()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:Ar(t,It,vn);break;case 3:if(Gn(t,r),(r&130023424)===r&&(e=gh+500-Be(),10<e)){if(Ja(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=jc(Ar.bind(null,t,It,vn),e);break}Ar(t,It,vn);break;case 4:if(Gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Zt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UT(r/1960))-r,10<r){t.timeoutHandle=jc(Ar.bind(null,t,It,vn),r);break}Ar(t,It,vn);break;case 5:Ar(t,It,vn);break;default:throw Error(q(329))}}}return Pt(t,Be()),t.callbackNode===n?Rv.bind(null,t):null}function od(t,e){var n=Wi;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=It,It=n,e!==null&&ad(e)),t}function ad(t){It===null?It=t:It.push.apply(It,t)}function jT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!tn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e){for(e&=~ph,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function pp(t){if(fe&6)throw Error(q(327));Ps();var e=Ja(t,0);if(!(e&1))return Pt(t,Be()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var r=Rc(t);r!==0&&(e=r,n=od(t,r))}if(n===1)throw n=po,Lr(t,0),Gn(t,e),Pt(t,Be()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,It,vn),Pt(t,Be()),null}function yh(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(Bs=Be()+500,jl&&Er())}}function Br(t){Zn!==null&&Zn.tag===0&&!(fe&6)&&Ps();var e=fe;fe|=1;var n=qt.transition,r=Ee;try{if(qt.transition=null,Ee=1,t)return t()}finally{Ee=r,qt.transition=n,fe=e,!(fe&6)&&Er()}}function vh(){Rt=xs.current,Ae(xs)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gT(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Jd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rl();break;case 3:Us(),Ae(At),Ae(gt),ah();break;case 5:oh(r);break;case 4:Us();break;case 13:Ae(De);break;case 19:Ae(De);break;case 10:nh(r.type._context);break;case 22:case 23:vh()}n=n.return}if(Je=t,$e=t=lr(t.current,null),rt=Rt=e,Ke=0,po=null,ph=$l=jr=0,It=Wi=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Cr=null}return t}function Dv(t,e){do{var n=$e;try{if(th(),Da.current=hl,dl){for(var r=Le.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}dl=!1}if(Ur=0,Ye=He=Le=null,qi=!1,ho=0,mh.current=null,n===null||n.return===null){Ke=1,po=e,$e=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=rt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,m=l,y=m.tag;if(!(m.mode&1)&&(y===0||y===11||y===15)){var _=m.alternate;_?(m.updateQueue=_.updateQueue,m.memoizedState=_.memoizedState,m.lanes=_.lanes):(m.updateQueue=null,m.memoizedState=null)}var A=np(o);if(A!==null){A.flags&=-257,rp(A,o,l,i,e),A.mode&1&&tp(i,h,e),e=A,u=h;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){tp(i,h,e),_h();break e}u=Error(q(426))}}else if(Ce&&l.mode&1){var L=np(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),rp(L,o,l,i,e),Zd(js(u,l));break e}}i=u=js(u,l),Ke!==4&&(Ke=2),Wi===null?Wi=[i]:Wi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var b=gv(i,u,e);Qm(i,b);break e;case 1:l=u;var w=i.type,I=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(or===null||!or.has(I)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=yv(i,l,e);Qm(i,D);break e}}i=i.return}while(i!==null)}Vv(n)}catch(M){e=M,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function Lv(){var t=fl.current;return fl.current=hl,t===null?hl:t}function _h(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Je===null||!(jr&268435455)&&!($l&268435455)||Gn(Je,rt)}function gl(t,e){var n=fe;fe|=2;var r=Lv();(Je!==t||rt!==e)&&(vn=null,Lr(t,e));do try{BT();break}catch(s){Dv(t,s)}while(!0);if(th(),fe=n,fl.current=r,$e!==null)throw Error(q(261));return Je=null,rt=0,Ke}function BT(){for(;$e!==null;)Ov($e)}function zT(){for(;$e!==null&&!fw();)Ov($e)}function Ov(t){var e=Fv(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?Vv(t):$e=e,mh.current=null}function Vv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OT(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,$e=null;return}}else if(n=LT(n,e,Rt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Ke===0&&(Ke=5)}function Ar(t,e,n){var r=Ee,s=qt.transition;try{qt.transition=null,Ee=1,qT(t,e,n,r)}finally{qt.transition=s,Ee=r}return null}function qT(t,e,n,r){do Ps();while(Zn!==null);if(fe&6)throw Error(q(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(xw(t,i),t===Je&&($e=Je=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_a||(_a=!0,Uv(Ya,function(){return Ps(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=qt.transition,qt.transition=null;var o=Ee;Ee=1;var l=fe;fe|=4,mh.current=null,MT(t,n),Pv(n,t),uT(Fc),Za=!!Mc,Fc=Mc=null,t.current=n,FT(n),mw(),fe=l,Ee=o,qt.transition=i}else t.current=n;if(_a&&(_a=!1,Zn=t,pl=s),i=t.pendingLanes,i===0&&(or=null),yw(n.stateNode),Pt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ml)throw ml=!1,t=sd,sd=null,t;return pl&1&&t.tag!==0&&Ps(),i=t.pendingLanes,i&1?t===id?Hi++:(Hi=0,id=t):Hi=0,Er(),null}function Ps(){if(Zn!==null){var t=gy(pl),e=qt.transition,n=Ee;try{if(qt.transition=null,Ee=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,pl=0,fe&6)throw Error(q(331));var s=fe;for(fe|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(K=h;K!==null;){var m=K;switch(m.tag){case 0:case 11:case 15:$i(8,m,i)}var y=m.child;if(y!==null)y.return=m,K=y;else for(;K!==null;){m=K;var _=m.sibling,A=m.return;if(kv(m),m===h){K=null;break}if(_!==null){_.return=A,K=_;break}K=A}}}var C=i.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var L=P.sibling;P.sibling=null,P=L}while(P!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$i(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,K=b;break e}K=i.return}}var w=t.current;for(K=w;K!==null;){o=K;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,K=I;else e:for(o=w;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ql(9,l)}}catch(M){Fe(l,l.return,M)}if(l===o){K=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,K=D;break e}K=l.return}}if(fe=s,Er(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Ol,t)}catch{}r=!0}return r}finally{Ee=n,qt.transition=e}}return!1}function gp(t,e,n){e=js(n,e),e=gv(t,e,1),t=ir(t,e,1),e=xt(),t!==null&&(Io(t,1,e),Pt(t,e))}function Fe(t,e,n){if(t.tag===3)gp(t,t,n);else for(;e!==null;){if(e.tag===3){gp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=js(n,t),t=yv(e,t,1),e=ir(e,t,1),t=xt(),e!==null&&(Io(e,1,t),Pt(e,t));break}}e=e.return}}function $T(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(rt&n)===n&&(Ke===4||Ke===3&&(rt&130023424)===rt&&500>Be()-gh?Lr(t,0):ph|=n),Pt(t,e)}function Mv(t,e){e===0&&(t.mode&1?(e=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):e=1);var n=xt();t=Cn(t,e),t!==null&&(Io(t,e,n),Pt(t,n))}function WT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mv(t,n)}function HT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),Mv(t,n)}var Fv;Fv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,DT(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Ce&&e.flags&1048576&&zy(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Oa(t,e),t=e.pendingProps;var s=Vs(e,gt.current);Ns(e,n),s=uh(null,e,r,t,s,n);var i=ch();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(i=!0,sl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,sh(e),s.updater=zl,e.stateNode=s,s._reactInternals=e,Gc(e,r,t,n),e=Xc(null,e,r,!0,i,n)):(e.tag=0,Ce&&i&&Yd(e),Tt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Oa(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=KT(r),t=Qt(r,t),s){case 0:e=Qc(null,e,r,t,n);break e;case 1:e=op(null,e,r,t,n);break e;case 11:e=sp(null,e,r,t,n);break e;case 14:e=ip(null,e,r,Qt(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),Qc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),op(t,e,r,s,n);case 3:e:{if(wv(e),t===null)throw Error(q(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Ky(t,e),ul(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=js(Error(q(423)),e),e=ap(t,e,r,n,s);break e}else if(r!==s){s=js(Error(q(424)),e),e=ap(t,e,r,n,s);break e}else for(Dt=sr(e.stateNode.containerInfo.firstChild),Lt=e,Ce=!0,Yt=null,n=Hy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),r===s){e=Rn(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return Qy(e),t===null&&$c(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Uc(r,s)?o=null:i!==null&&Uc(r,i)&&(e.flags|=32),Ev(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&$c(e),null;case 13:return Tv(t,e,n);case 4:return ih(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fs(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),sp(t,e,r,s,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Se(al,r._currentValue),r._currentValue=o,i!==null)if(tn(i.value,o)){if(i.children===s.children&&!At.current){e=Rn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Sn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?u.next=u:(u.next=m.next,m.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Wc(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Tt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ns(e,n),s=$t(s),r=r(s),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,s=Qt(r,e.pendingProps),s=Qt(r.type,s),ip(t,e,r,s,n);case 15:return vv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),Oa(t,e),e.tag=1,Nt(r)?(t=!0,sl(e)):t=!1,Ns(e,n),pv(e,r,s),Gc(e,r,s,n),Xc(null,e,r,!0,t,n);case 19:return xv(t,e,n);case 22:return _v(t,e,n)}throw Error(q(156,e.tag))};function Uv(t,e){return hy(t,e)}function GT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new GT(t,e,n,r)}function Eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KT(t){if(typeof t=="function")return Eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ud)return 11;if(t===jd)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fa(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return Or(n.children,s,i,e);case Fd:o=8,s|=8;break;case yc:return t=zt(12,n,e,s|2),t.elementType=yc,t.lanes=i,t;case vc:return t=zt(13,n,e,s),t.elementType=vc,t.lanes=i,t;case _c:return t=zt(19,n,e,s),t.elementType=_c,t.lanes=i,t;case Qg:return Wl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gg:o=10;break e;case Kg:o=9;break e;case Ud:o=11;break e;case jd:o=14;break e;case $n:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=zt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Or(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function Wl(t,e,n,r){return t=zt(22,t,r,e),t.elementType=Qg,t.lanes=n,t.stateNode={isHidden:!1},t}function nc(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function rc(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mu(0),this.expirationTimes=Mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function wh(t,e,n,r,s,i,o,l,u){return t=new QT(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=zt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(i),t}function XT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jv(t){if(!t)return mr;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(Nt(n))return jy(t,n,e)}return e}function Bv(t,e,n,r,s,i,o,l,u){return t=wh(n,r,!0,t,s,i,o,l,u),t.context=jv(null),n=t.current,r=xt(),s=ar(n),i=Sn(r,s),i.callback=e??null,ir(n,i,s),t.current.lanes=s,Io(t,s,r),Pt(t,r),t}function Hl(t,e,n,r){var s=e.current,i=xt(),o=ar(s);return n=jv(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(s,e,o),t!==null&&(en(t,s,o,i),Ra(t,s,o)),o}function yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Th(t,e){yp(t,e),(t=t.alternate)&&yp(t,e)}function YT(){return null}var zv=typeof reportError=="function"?reportError:function(t){console.error(t)};function xh(t){this._internalRoot=t}Gl.prototype.render=xh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));Hl(t,e,null,null)};Gl.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Hl(null,t,null,null)}),e[Pn]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=_y();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&wy(t)}};function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function JT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=yl(o);i.call(h)}}var o=Bv(e,r,t,0,null,!1,!1,"",vp);return t._reactRootContainer=o,t[Pn]=o.current,oo(t.nodeType===8?t.parentNode:t),Br(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=yl(u);l.call(h)}}var u=wh(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=u,t[Pn]=u.current,oo(t.nodeType===8?t.parentNode:t),Br(function(){Hl(e,u,n,r)}),u}function Ql(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=yl(o);l.call(u)}}Hl(e,o,t,s)}else o=JT(n,e,t,s,r);return yl(o)}yy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pi(e.pendingLanes);n!==0&&(qd(e,n|1),Pt(e,Be()),!(fe&6)&&(Bs=Be()+500,Er()))}break;case 13:Br(function(){var r=Cn(t,1);if(r!==null){var s=xt();en(r,t,1,s)}}),Th(t,1)}};$d=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=xt();en(e,t,134217728,n)}Th(t,134217728)}};vy=function(t){if(t.tag===13){var e=ar(t),n=Cn(t,e);if(n!==null){var r=xt();en(n,t,e,r)}Th(t,e)}};_y=function(){return Ee};Ey=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};Nc=function(t,e,n){switch(e){case"input":if(Tc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ul(r);if(!s)throw Error(q(90));Yg(r),Tc(r,s)}}}break;case"textarea":Zg(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};oy=yh;ay=Br;var ZT={usingClientEntryPoint:!1,Events:[Ao,ys,Ul,sy,iy,yh]},Ii={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ex={bundleType:Ii.bundleType,version:Ii.version,rendererPackageName:Ii.rendererPackageName,rendererConfig:Ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ii.findFiberByHostInstance||YT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Ol=Ea.inject(ex),ln=Ea}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZT;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(e))throw Error(q(200));return XT(t,e,null,n)};Mt.createRoot=function(t,e){if(!bh(t))throw Error(q(299));var n=!1,r="",s=zv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=wh(t,1,!1,null,null,n,!1,r,s),t[Pn]=e.current,oo(t.nodeType===8?t.parentNode:t),new xh(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=cy(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return Br(t)};Mt.hydrate=function(t,e,n){if(!Kl(e))throw Error(q(200));return Ql(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!bh(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=zv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bv(e,null,t,1,n??null,s,!1,i,o),t[Pn]=e.current,oo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Gl(e)};Mt.render=function(t,e,n){if(!Kl(e))throw Error(q(200));return Ql(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!Kl(t))throw Error(q(40));return t._reactRootContainer?(Br(function(){Ql(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1};Mt.unstable_batchedUpdates=yh;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Kl(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return Ql(t,e,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)}catch(t){console.error(t)}}qv(),qg.exports=Mt;var tx=qg.exports,_p=tx;pc.createRoot=_p.createRoot,pc.hydrateRoot=_p.hydrateRoot;var Ep={};/**
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
 */const $v=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,m=i>>2,y=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(_=64)),r.push(n[m],n[y],n[_],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($v(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||y==null)throw new rx;const _=i<<2|l>>4;if(r.push(_),h!==64){const A=l<<4&240|h>>2;if(r.push(A),y!==64){const C=h<<6&192|y;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sx=function(t){const e=$v(t);return Wv.encodeByteArray(e,!0)},vl=function(t){return sx(t).replace(/\./g,"")},Hv=function(t){try{return Wv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ix(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ox=()=>ix().__FIREBASE_DEFAULTS__,ax=()=>{if(typeof process>"u"||typeof Ep>"u")return;const t=Ep.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hv(t[1]);return e&&JSON.parse(e)},Xl=()=>{try{return ox()||ax()||lx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gv=t=>{var e,n;return(n=(e=Xl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ux=t=>{const e=Gv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kv=()=>{var t;return(t=Xl())===null||t===void 0?void 0:t.config},Qv=t=>{var e;return(e=Xl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vl(JSON.stringify(n)),vl(JSON.stringify(o)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function fx(){var t;const e=(t=Xl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function px(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yx(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vx(){return!fx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _x(){try{return typeof indexedDB=="object"}catch{return!1}}function Ex(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const wx="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wx,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Tx(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,l,r)}}function Tx(t,e){return t.replace(xx,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xx=/\{\$([^}]+)}/g;function bx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(wp(i)&&wp(o)){if(!_l(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wp(t){return t!==null&&typeof t=="object"}/**
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
 */function Co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Di(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sx(t,e){const n=new Ix(t,e);return n.subscribe.bind(n)}class Ix{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kx(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sc),s.error===void 0&&(s.error=sc),s.complete===void 0&&(s.complete=sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
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
 */function Ht(t){return t&&t._delegate?t._delegate:t}class zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class Ax{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Px(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nx(t){return t===Nr?void 0:t}function Px(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ax(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Rx={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Dx=ce.INFO,Lx={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Ox=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Lx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sh{constructor(e){this.name=e,this._logLevel=Dx,this._logHandler=Ox,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Vx=(t,e)=>e.some(n=>t instanceof n);let Tp,xp;function Mx(){return Tp||(Tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fx(){return xp||(xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xv=new WeakMap,ld=new WeakMap,Yv=new WeakMap,ic=new WeakMap,Ih=new WeakMap;function Ux(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xv.set(n,t)}).catch(()=>{}),Ih.set(e,t),e}function jx(t){if(ld.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ld.set(t,e)}let ud={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bx(t){ud=t(ud)}function zx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return Yv.set(r,e.sort?e.sort():[e]),ur(r)}:Fx().includes(t)?function(...e){return t.apply(oc(this),e),ur(Xv.get(this))}:function(...e){return ur(t.apply(oc(this),e))}}function qx(t){return typeof t=="function"?zx(t):(t instanceof IDBTransaction&&jx(t),Vx(t,Mx())?new Proxy(t,ud):t)}function ur(t){if(t instanceof IDBRequest)return Ux(t);if(ic.has(t))return ic.get(t);const e=qx(t);return e!==t&&(ic.set(t,e),Ih.set(e,t)),e}const oc=t=>Ih.get(t);function $x(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ur(o.result),u.oldVersion,u.newVersion,ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Wx=["get","getKey","getAll","getAllKeys","count"],Hx=["put","add","delete","clear"],ac=new Map;function bp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Hx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wx.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return ac.set(e,i),i}Bx(t=>({...t,get:(e,n,r)=>bp(e,n)||t.get(e,n,r),has:(e,n)=>!!bp(e,n)||t.has(e,n)}));/**
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
 */class Gx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",Sp="0.10.13";/**
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
 */const Dn=new Sh("@firebase/app"),Qx="@firebase/app-compat",Xx="@firebase/analytics-compat",Yx="@firebase/analytics",Jx="@firebase/app-check-compat",Zx="@firebase/app-check",eb="@firebase/auth",tb="@firebase/auth-compat",nb="@firebase/database",rb="@firebase/data-connect",sb="@firebase/database-compat",ib="@firebase/functions",ob="@firebase/functions-compat",ab="@firebase/installations",lb="@firebase/installations-compat",ub="@firebase/messaging",cb="@firebase/messaging-compat",db="@firebase/performance",hb="@firebase/performance-compat",fb="@firebase/remote-config",mb="@firebase/remote-config-compat",pb="@firebase/storage",gb="@firebase/storage-compat",yb="@firebase/firestore",vb="@firebase/vertexai-preview",_b="@firebase/firestore-compat",Eb="firebase",wb="10.14.1";/**
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
 */const dd="[DEFAULT]",Tb={[cd]:"fire-core",[Qx]:"fire-core-compat",[Yx]:"fire-analytics",[Xx]:"fire-analytics-compat",[Zx]:"fire-app-check",[Jx]:"fire-app-check-compat",[eb]:"fire-auth",[tb]:"fire-auth-compat",[nb]:"fire-rtdb",[rb]:"fire-data-connect",[sb]:"fire-rtdb-compat",[ib]:"fire-fn",[ob]:"fire-fn-compat",[ab]:"fire-iid",[lb]:"fire-iid-compat",[ub]:"fire-fcm",[cb]:"fire-fcm-compat",[db]:"fire-perf",[hb]:"fire-perf-compat",[fb]:"fire-rc",[mb]:"fire-rc-compat",[pb]:"fire-gcs",[gb]:"fire-gcs-compat",[yb]:"fire-fst",[_b]:"fire-fst-compat",[vb]:"fire-vertex","fire-js":"fire-js",[Eb]:"fire-js-all"};/**
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
 */const El=new Map,xb=new Map,hd=new Map;function Ip(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(hd.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;hd.set(e,t);for(const n of El.values())Ip(n,t);for(const n of xb.values())Ip(n,t);return!0}function kh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t.settings!==void 0}/**
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
 */const bb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new Po("app","Firebase",bb);/**
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
 */class Sb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Zs=wb;function Jv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw cr.create("bad-app-name",{appName:String(s)});if(n||(n=Kv()),!n)throw cr.create("no-options");const i=El.get(s);if(i){if(_l(n,i.options)&&_l(r,i.config))return i;throw cr.create("duplicate-app",{appName:s})}const o=new Cx(s);for(const u of hd.values())o.addComponent(u);const l=new Sb(n,r,o);return El.set(s,l),l}function Zv(t=dd){const e=El.get(t);if(!e&&t===dd&&Kv())return Jv();if(!e)throw cr.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let s=(r=Tb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}zs(new zr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ib="firebase-heartbeat-database",kb=1,go="firebase-heartbeat-store";let lc=null;function e0(){return lc||(lc=$x(Ib,kb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),lc}async function Ab(t){try{const n=(await e0()).transaction(go),r=await n.objectStore(go).get(t0(t));return await n.done,r}catch(e){if(e instanceof Fn)Dn.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function kp(t,e){try{const r=(await e0()).transaction(go,"readwrite");await r.objectStore(go).put(e,t0(t)),await r.done}catch(n){if(n instanceof Fn)Dn.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function t0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Nb=1024,Pb=30*24*60*60*1e3;class Cb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Db(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ap();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Pb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ap(),{heartbeatsToSend:r,unsentEntries:s}=Rb(this._heartbeatsCache.heartbeats),i=vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dn.warn(n),""}}}function Ap(){return new Date().toISOString().substring(0,10)}function Rb(t,e=Nb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Np(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Np(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Db{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _x()?Ex().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ab(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Np(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lb(t){zs(new zr("platform-logger",e=>new Gx(e),"PRIVATE")),zs(new zr("heartbeat",e=>new Cb(e),"PRIVATE")),dr(cd,Sp,t),dr(cd,Sp,"esm2017"),dr("fire-js","")}Lb("");var Ob="firebase",Vb="10.14.1";/**
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
 */dr(Ob,Vb,"app");function Ah(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function n0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mb=n0,r0=new Po("auth","Firebase",n0());/**
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
 */const wl=new Sh("@firebase/auth");function Fb(t,...e){wl.logLevel<=ce.WARN&&wl.warn(`Auth (${Zs}): ${t}`,...e)}function Ua(t,...e){wl.logLevel<=ce.ERROR&&wl.error(`Auth (${Zs}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw Nh(t,...e)}function cn(t,...e){return Nh(t,...e)}function s0(t,e,n){const r=Object.assign(Object.assign({},Mb()),{[e]:n});return new Po("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return s0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return r0.create(t,...e)}function ee(t,e,...n){if(!t)throw Nh(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function Ln(t,e){t||Tn(e)}/**
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
 */function fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ub(){return Pp()==="http:"||Pp()==="https:"}function Pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function jb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ub()||px()||"connection"in navigator)?navigator.onLine:!0}function Bb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=hx()||gx()}get(){return jb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ph(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class i0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qb=new Ro(3e4,6e4);function wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tr(t,e,n,r,s={}){return o0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Co(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return mx()||(h.referrerPolicy="no-referrer"),i0.fetch()(a0(t,t.config.apiHost,n,l),h)})}async function o0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zb),e);try{const s=new Wb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw wa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw wa(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw s0(t,m,h);nn(t,m)}}catch(s){if(s instanceof Fn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function Do(t,e,n,r,s={}){const i=await Tr(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function a0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ph(t.config,s):`${t.config.apiScheme}://${s}`}function $b(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),qb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}function Cp(t){return t!==void 0&&t.enterprise!==void 0}class Hb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $b(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gb(t,e){return Tr(t,"GET","/v2/recaptchaConfig",wr(t,e))}/**
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
 */async function Kb(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function l0(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qb(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),s=Ch(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gi(uc(s.auth_time)),issuedAtTime:Gi(uc(s.iat)),expirationTime:Gi(uc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function Ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hv(n);return s?JSON.parse(s):(Ua("Failed to decode base64 JWT payload"),null)}catch(s){return Ua("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rp(t){const e=Ch(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&Xb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Yb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await yo(t,l0(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?u0(i.providerUserInfo):[],l=Zb(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),m=u?h:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(t,y)}async function Jb(t){const e=Ht(t);await Tl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function u0(t){return t.map(e=>{var{providerId:n}=e,r=Ah(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function eS(t,e){const n=await o0(t,{},async()=>{const r=Co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=a0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",i0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tS(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",wr(t,e))}/**
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
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Rp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await eS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cs;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function qn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ah(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new md(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yo(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qb(this,e)}reload(){return Jb(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await yo(this,Kb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,m;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,A=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,b=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:I,emailVerified:D,isAnonymous:M,providerData:F,stsTokenManager:T}=n;ee(I&&T,e,"internal-error");const p=Cs.fromJSON(this.name,T);ee(typeof I=="string",e,"internal-error"),qn(y,e.name),qn(_,e.name),ee(typeof D=="boolean",e,"internal-error"),ee(typeof M=="boolean",e,"internal-error"),qn(A,e.name),qn(C,e.name),qn(P,e.name),qn(L,e.name),qn(b,e.name),qn(w,e.name);const v=new xn({uid:I,auth:e,email:_,emailVerified:D,displayName:y,isAnonymous:M,photoURL:C,phoneNumber:A,tenantId:P,stsTokenManager:p,createdAt:b,lastLoginAt:w});return F&&Array.isArray(F)&&(v.providerData=F.map(x=>Object.assign({},x))),L&&(v._redirectEventId=L),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cs;s.updateFromServerResponse(n);const i=new xn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?u0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Cs;l.updateFromIdToken(r);const u=new xn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new md(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Dp=new Map;function bn(t){Ln(t instanceof Function,"Expected a class definition");let e=Dp.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dp.set(t,e),e)}/**
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
 */class c0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c0.type="NONE";const Lp=c0;/**
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
 */function ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ja(this.userKey,s.apiKey,i),this.fullPersistenceKey=ja("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(bn(Lp),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bn(Lp);const o=ja(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const m=await h._get(o);if(m){const y=xn._fromJSON(e,m);h!==i&&(l=y),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Rs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Rs(i,e,r))}}/**
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
 */function Op(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(d0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(g0(e))return"Blackberry";if(y0(e))return"Webos";if(h0(e))return"Safari";if((e.includes("chrome/")||f0(e))&&!e.includes("edge/"))return"Chrome";if(p0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function d0(t=yt()){return/firefox\//i.test(t)}function h0(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function f0(t=yt()){return/crios\//i.test(t)}function m0(t=yt()){return/iemobile/i.test(t)}function p0(t=yt()){return/android/i.test(t)}function g0(t=yt()){return/blackberry/i.test(t)}function y0(t=yt()){return/webos/i.test(t)}function Rh(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nS(t=yt()){var e;return Rh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rS(){return yx()&&document.documentMode===10}function v0(t=yt()){return Rh(t)||p0(t)||y0(t)||g0(t)||/windows phone/i.test(t)||m0(t)}/**
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
 */function _0(t,e=[]){let n;switch(t){case"Browser":n=Op(yt());break;case"Worker":n=`${Op(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${r}`}/**
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
 */class sS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iS(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",wr(t,e))}/**
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
 */const oS=6;class aS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class lS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vp(this),this.idTokenSubscription=new Vp(this),this.beforeStateQueue=new sS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await l0(this,{idToken:e}),r=await xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(In(this));const n=e?Ht(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iS(this),n=new aS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return Ht(t)}class Vp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sx(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uS(t){Yl=t}function E0(t){return Yl.loadJS(t)}function cS(){return Yl.recaptchaEnterpriseScript}function dS(){return Yl.gapiScript}function hS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fS="recaptcha-enterprise",mS="NO_RECAPTCHA";class pS{constructor(e){this.type=fS,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Gb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Hb(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Cp(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(mS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Cp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=cS();u.length!==0&&(u+=l),E0(u).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Mp(t,e,n,r=!1){const s=new pS(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Mp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Mp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function gS(t,e){const n=kh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_l(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function yS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vS(t,e,n){const r=Yr(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=w0(e),{host:o,port:l}=_S(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ES()}function w0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _S(t){const e=w0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fp(o)}}}function Fp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ES(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Dh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function wS(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function TS(t,e){return Do(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}/**
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
 */async function xS(t,e){return Do(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}async function bS(t,e){return Do(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}/**
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
 */class vo extends Dh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,n,"signInWithPassword",TS);case"emailLink":return xS(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,r,"signUpPassword",wS);case"emailLink":return bS(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ds(t,e){return Do(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}/**
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
 */const SS="http://localhost";class qr extends Dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ah(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ds(e,n)}buildRequest(){const e={requestUri:SS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Co(n)}return e}}/**
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
 */function IS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kS(t){const e=Ri(Di(t)).link,n=e?Ri(Di(e)).deep_link_id:null,r=Ri(Di(t)).deep_link_id;return(r?Ri(Di(r)).link:null)||r||n||e||t}class Lh{constructor(e){var n,r,s,i,o,l;const u=Ri(Di(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,y=IS((s=u.mode)!==null&&s!==void 0?s:null);ee(h&&m&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=kS(e);try{return new Lh(n)}catch{return null}}}/**
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
 */class ei{constructor(){this.providerId=ei.PROVIDER_ID}static credential(e,n){return vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lh.parseLink(n);return ee(r,"argument-error"),vo._fromEmailAndCode(e,r.code,r.tenantId)}}ei.PROVIDER_ID="password";ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class T0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lo extends T0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends Lo{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class Xn extends Lo{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Yn extends Lo{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function AS(t,e){return Do(t,"POST","/v1/accounts:signUp",wr(t,e))}/**
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
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xn._fromIdTokenResponse(e,r,s),o=Up(r);return new $r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Up(r);return new $r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Up(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xl extends Fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xl(e,n,r,s)}}function x0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xl._fromErrorAndOperation(t,i,e,r):i})}async function NS(t,e,n=!1){const r=await yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $r._forOperation(t,"link",r)}/**
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
 */async function PS(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(In(r));const s="reauthenticate";try{const i=await yo(t,x0(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=Ch(i.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),$r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
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
 */async function b0(t,e,n=!1){if(an(t.app))return Promise.reject(In(t));const r="signIn",s=await x0(t,r,e),i=await $r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function CS(t,e){return b0(Yr(t),e)}/**
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
 */async function S0(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RS(t,e,n){if(an(t.app))return Promise.reject(In(t));const r=Yr(t),o=await pd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",AS).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&S0(t),u}),l=await $r._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function jp(t,e,n){return an(t.app)?Promise.reject(In(t)):CS(Ht(t),ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&S0(t),r})}function DS(t,e,n,r){return Ht(t).onIdTokenChanged(e,n,r)}function LS(t,e,n){return Ht(t).beforeAuthStateChanged(e,n)}const bl="__sak";/**
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
 */class I0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bl,"1"),this.storage.removeItem(bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OS=1e3,VS=10;class k0 extends I0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=v0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}k0.type="LOCAL";const MS=k0;/**
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
 */class A0 extends I0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A0.type="SESSION";const N0=A0;/**
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
 */function FS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await FS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jl.receivers=[];/**
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
 */function Oh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class US{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Oh("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(y){const _=y;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function jS(t){dn().location.href=t}/**
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
 */function P0(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function BS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qS(){return P0()?self:null}/**
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
 */const C0="firebaseLocalStorageDb",$S=1,Sl="firebaseLocalStorage",R0="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zl(t,e){return t.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function WS(){const t=indexedDB.deleteDatabase(C0);return new Oo(t).toPromise()}function gd(){const t=indexedDB.open(C0,$S);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sl,{keyPath:R0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sl)?e(r):(r.close(),await WS(),e(await gd()))})})}async function Bp(t,e,n){const r=Zl(t,!0).put({[R0]:e,value:n});return new Oo(r).toPromise()}async function HS(t,e){const n=Zl(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function zp(t,e){const n=Zl(t,!0).delete(e);return new Oo(n).toPromise()}const GS=800,KS=3;class D0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return P0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jl._getInstance(qS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BS(),!this.activeServiceWorker)return;this.sender=new US(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await Bp(e,bl,"1"),await zp(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Zl(s,!1).getAll();return new Oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}D0.type="LOCAL";const QS=D0;new Ro(3e4,6e4);/**
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
 */function XS(t,e){return e?bn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vh extends Dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YS(t){return b0(t.auth,new Vh(t),t.bypassAuthState)}function JS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),PS(n,new Vh(t),t.bypassAuthState)}async function ZS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),NS(n,new Vh(t),t.bypassAuthState)}/**
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
 */class L0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YS;case"linkViaPopup":case"linkViaRedirect":return ZS;case"reauthViaPopup":case"reauthViaRedirect":return JS;default:nn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const e1=new Ro(2e3,1e4);class bs extends L0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e1.get())};e()}}bs.currentPopupAction=null;/**
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
 */const t1="pendingRedirect",Ba=new Map;class n1 extends L0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const r=await r1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r1(t,e){const n=o1(e),r=i1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function s1(t,e){Ba.set(t._key(),e)}function i1(t){return bn(t._redirectPersistence)}function o1(t){return ja(t1,t.config.apiKey,t.name)}async function a1(t,e,n=!1){if(an(t.app))return Promise.reject(In(t));const r=Yr(t),s=XS(r,e),o=await new n1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const l1=10*60*1e3;class u1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!c1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l1&&this.cachedEventUids.clear(),this.cachedEventUids.has(qp(e))}saveEventToCache(e){this.cachedEventUids.add(qp(e)),this.lastProcessedEventTime=Date.now()}}function qp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function c1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O0(t);default:return!1}}/**
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
 */async function d1(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
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
 */const h1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f1=/^https?/;async function m1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d1(t);for(const n of e)try{if(p1(n))return}catch{}nn(t,"unauthorized-domain")}function p1(t){const e=fd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!f1.test(n))return!1;if(h1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const g1=new Ro(3e4,6e4);function $p(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function y1(t){return new Promise((e,n)=>{var r,s,i;function o(){$p(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$p(),n(cn(t,"network-request-failed"))},timeout:g1.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const l=hS("iframefcb");return dn()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},E0(`${dS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw za=null,e})}let za=null;function v1(t){return za=za||y1(t),za}/**
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
 */const _1=new Ro(5e3,15e3),E1="__/auth/iframe",w1="emulator/auth/iframe",T1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b1(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ph(e,w1):`https://${t.config.authDomain}/${E1}`,r={apiKey:e.apiKey,appName:t.name,v:Zs},s=x1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Co(r).slice(1)}`}async function S1(t){const e=await v1(t),n=dn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:b1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:T1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},_1.get());function u(){dn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const I1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k1=500,A1=600,N1="_blank",P1="http://localhost";class Wp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C1(t,e,n,r=k1,s=A1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},I1),{width:r.toString(),height:s.toString(),top:i,left:o}),h=yt().toLowerCase();n&&(l=f0(h)?N1:n),d0(h)&&(e=e||P1,u.scrollbars="yes");const m=Object.entries(u).reduce((_,[A,C])=>`${_}${A}=${C},`,"");if(nS(h)&&l!=="_self")return R1(e||"",l),new Wp(null);const y=window.open(e||"",l,m);ee(y,t,"popup-blocked");try{y.focus()}catch{}return new Wp(y)}function R1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const D1="__/auth/handler",L1="emulator/auth/handler",O1=encodeURIComponent("fac");async function Hp(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zs,eventId:s};if(e instanceof T0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))o[m]=y}if(e instanceof Lo){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await t._getAppCheckToken(),h=u?`#${O1}=${encodeURIComponent(u)}`:"";return`${V1(t)}?${Co(l).slice(1)}${h}`}function V1({config:t}){return t.emulator?Ph(t,L1):`https://${t.authDomain}/${D1}`}/**
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
 */const cc="webStorageSupport";class M1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N0,this._completeRedirectFn=a1,this._overrideRedirectResult=s1}async _openPopup(e,n,r,s){var i;Ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Hp(e,n,r,fd(),s);return C1(e,o,Oh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Hp(e,n,r,fd(),s);return jS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await S1(e),r=new u1(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cc,{type:cc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[cc];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return v0()||h0()||Rh()}}const F1=M1;var Gp="@firebase/auth",Kp="1.7.9";/**
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
 */class U1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function j1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function B1(t){zs(new zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_0(t)},h=new lS(r,s,i,u);return yS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zs(new zr("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new U1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(Gp,Kp,j1(t)),dr(Gp,Kp,"esm2017")}/**
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
 */const z1=5*60,q1=Qv("authIdTokenMaxAge")||z1;let Qp=null;const $1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>q1)return;const s=n==null?void 0:n.token;Qp!==s&&(Qp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function W1(t=Zv()){const e=kh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gS(t,{popupRedirectResolver:F1,persistence:[QS,MS,N0]}),r=Qv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=$1(i.toString());LS(n,o,()=>o(n.currentUser)),DS(n,l=>o(l))}}const s=Gv("auth");return s&&vS(n,`http://${s}`),n}function H1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",H1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});B1("Browser");var Xp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,V0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,p){function v(){}v.prototype=p.prototype,T.D=p.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(x,k,E){for(var S=Array(arguments.length-2),le=2;le<arguments.length;le++)S[le-2]=arguments[le];return p.prototype[k].apply(x,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,v){v||(v=0);var x=Array(16);if(typeof p=="string")for(var k=0;16>k;++k)x[k]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(k=0;16>k;++k)x[k]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=T.g[0],v=T.g[1],k=T.g[2];var E=T.g[3],S=p+(E^v&(k^E))+x[0]+3614090360&4294967295;p=v+(S<<7&4294967295|S>>>25),S=E+(k^p&(v^k))+x[1]+3905402710&4294967295,E=p+(S<<12&4294967295|S>>>20),S=k+(v^E&(p^v))+x[2]+606105819&4294967295,k=E+(S<<17&4294967295|S>>>15),S=v+(p^k&(E^p))+x[3]+3250441966&4294967295,v=k+(S<<22&4294967295|S>>>10),S=p+(E^v&(k^E))+x[4]+4118548399&4294967295,p=v+(S<<7&4294967295|S>>>25),S=E+(k^p&(v^k))+x[5]+1200080426&4294967295,E=p+(S<<12&4294967295|S>>>20),S=k+(v^E&(p^v))+x[6]+2821735955&4294967295,k=E+(S<<17&4294967295|S>>>15),S=v+(p^k&(E^p))+x[7]+4249261313&4294967295,v=k+(S<<22&4294967295|S>>>10),S=p+(E^v&(k^E))+x[8]+1770035416&4294967295,p=v+(S<<7&4294967295|S>>>25),S=E+(k^p&(v^k))+x[9]+2336552879&4294967295,E=p+(S<<12&4294967295|S>>>20),S=k+(v^E&(p^v))+x[10]+4294925233&4294967295,k=E+(S<<17&4294967295|S>>>15),S=v+(p^k&(E^p))+x[11]+2304563134&4294967295,v=k+(S<<22&4294967295|S>>>10),S=p+(E^v&(k^E))+x[12]+1804603682&4294967295,p=v+(S<<7&4294967295|S>>>25),S=E+(k^p&(v^k))+x[13]+4254626195&4294967295,E=p+(S<<12&4294967295|S>>>20),S=k+(v^E&(p^v))+x[14]+2792965006&4294967295,k=E+(S<<17&4294967295|S>>>15),S=v+(p^k&(E^p))+x[15]+1236535329&4294967295,v=k+(S<<22&4294967295|S>>>10),S=p+(k^E&(v^k))+x[1]+4129170786&4294967295,p=v+(S<<5&4294967295|S>>>27),S=E+(v^k&(p^v))+x[6]+3225465664&4294967295,E=p+(S<<9&4294967295|S>>>23),S=k+(p^v&(E^p))+x[11]+643717713&4294967295,k=E+(S<<14&4294967295|S>>>18),S=v+(E^p&(k^E))+x[0]+3921069994&4294967295,v=k+(S<<20&4294967295|S>>>12),S=p+(k^E&(v^k))+x[5]+3593408605&4294967295,p=v+(S<<5&4294967295|S>>>27),S=E+(v^k&(p^v))+x[10]+38016083&4294967295,E=p+(S<<9&4294967295|S>>>23),S=k+(p^v&(E^p))+x[15]+3634488961&4294967295,k=E+(S<<14&4294967295|S>>>18),S=v+(E^p&(k^E))+x[4]+3889429448&4294967295,v=k+(S<<20&4294967295|S>>>12),S=p+(k^E&(v^k))+x[9]+568446438&4294967295,p=v+(S<<5&4294967295|S>>>27),S=E+(v^k&(p^v))+x[14]+3275163606&4294967295,E=p+(S<<9&4294967295|S>>>23),S=k+(p^v&(E^p))+x[3]+4107603335&4294967295,k=E+(S<<14&4294967295|S>>>18),S=v+(E^p&(k^E))+x[8]+1163531501&4294967295,v=k+(S<<20&4294967295|S>>>12),S=p+(k^E&(v^k))+x[13]+2850285829&4294967295,p=v+(S<<5&4294967295|S>>>27),S=E+(v^k&(p^v))+x[2]+4243563512&4294967295,E=p+(S<<9&4294967295|S>>>23),S=k+(p^v&(E^p))+x[7]+1735328473&4294967295,k=E+(S<<14&4294967295|S>>>18),S=v+(E^p&(k^E))+x[12]+2368359562&4294967295,v=k+(S<<20&4294967295|S>>>12),S=p+(v^k^E)+x[5]+4294588738&4294967295,p=v+(S<<4&4294967295|S>>>28),S=E+(p^v^k)+x[8]+2272392833&4294967295,E=p+(S<<11&4294967295|S>>>21),S=k+(E^p^v)+x[11]+1839030562&4294967295,k=E+(S<<16&4294967295|S>>>16),S=v+(k^E^p)+x[14]+4259657740&4294967295,v=k+(S<<23&4294967295|S>>>9),S=p+(v^k^E)+x[1]+2763975236&4294967295,p=v+(S<<4&4294967295|S>>>28),S=E+(p^v^k)+x[4]+1272893353&4294967295,E=p+(S<<11&4294967295|S>>>21),S=k+(E^p^v)+x[7]+4139469664&4294967295,k=E+(S<<16&4294967295|S>>>16),S=v+(k^E^p)+x[10]+3200236656&4294967295,v=k+(S<<23&4294967295|S>>>9),S=p+(v^k^E)+x[13]+681279174&4294967295,p=v+(S<<4&4294967295|S>>>28),S=E+(p^v^k)+x[0]+3936430074&4294967295,E=p+(S<<11&4294967295|S>>>21),S=k+(E^p^v)+x[3]+3572445317&4294967295,k=E+(S<<16&4294967295|S>>>16),S=v+(k^E^p)+x[6]+76029189&4294967295,v=k+(S<<23&4294967295|S>>>9),S=p+(v^k^E)+x[9]+3654602809&4294967295,p=v+(S<<4&4294967295|S>>>28),S=E+(p^v^k)+x[12]+3873151461&4294967295,E=p+(S<<11&4294967295|S>>>21),S=k+(E^p^v)+x[15]+530742520&4294967295,k=E+(S<<16&4294967295|S>>>16),S=v+(k^E^p)+x[2]+3299628645&4294967295,v=k+(S<<23&4294967295|S>>>9),S=p+(k^(v|~E))+x[0]+4096336452&4294967295,p=v+(S<<6&4294967295|S>>>26),S=E+(v^(p|~k))+x[7]+1126891415&4294967295,E=p+(S<<10&4294967295|S>>>22),S=k+(p^(E|~v))+x[14]+2878612391&4294967295,k=E+(S<<15&4294967295|S>>>17),S=v+(E^(k|~p))+x[5]+4237533241&4294967295,v=k+(S<<21&4294967295|S>>>11),S=p+(k^(v|~E))+x[12]+1700485571&4294967295,p=v+(S<<6&4294967295|S>>>26),S=E+(v^(p|~k))+x[3]+2399980690&4294967295,E=p+(S<<10&4294967295|S>>>22),S=k+(p^(E|~v))+x[10]+4293915773&4294967295,k=E+(S<<15&4294967295|S>>>17),S=v+(E^(k|~p))+x[1]+2240044497&4294967295,v=k+(S<<21&4294967295|S>>>11),S=p+(k^(v|~E))+x[8]+1873313359&4294967295,p=v+(S<<6&4294967295|S>>>26),S=E+(v^(p|~k))+x[15]+4264355552&4294967295,E=p+(S<<10&4294967295|S>>>22),S=k+(p^(E|~v))+x[6]+2734768916&4294967295,k=E+(S<<15&4294967295|S>>>17),S=v+(E^(k|~p))+x[13]+1309151649&4294967295,v=k+(S<<21&4294967295|S>>>11),S=p+(k^(v|~E))+x[4]+4149444226&4294967295,p=v+(S<<6&4294967295|S>>>26),S=E+(v^(p|~k))+x[11]+3174756917&4294967295,E=p+(S<<10&4294967295|S>>>22),S=k+(p^(E|~v))+x[2]+718787259&4294967295,k=E+(S<<15&4294967295|S>>>17),S=v+(E^(k|~p))+x[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(k+(S<<21&4294967295|S>>>11))&4294967295,T.g[2]=T.g[2]+k&4294967295,T.g[3]=T.g[3]+E&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var v=p-this.blockSize,x=this.B,k=this.h,E=0;E<p;){if(k==0)for(;E<=v;)s(this,T,E),E+=this.blockSize;if(typeof T=="string"){for(;E<p;)if(x[k++]=T.charCodeAt(E++),k==this.blockSize){s(this,x),k=0;break}}else for(;E<p;)if(x[k++]=T[E++],k==this.blockSize){s(this,x),k=0;break}}this.h=k,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var v=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=v&255,v/=256;for(this.u(T),T=Array(16),p=v=0;4>p;++p)for(var x=0;32>x;x+=8)T[v++]=this.g[p]>>>x&255;return T};function i(T,p){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=p(T)}function o(T,p){this.h=p;for(var v=[],x=!0,k=T.length-1;0<=k;k--){var E=T[k]|0;x&&E==p||(v[k]=E,x=!1)}this.g=v}var l={};function u(T){return-128<=T&&128>T?i(T,function(p){return new o([p|0],0>p?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return L(h(-T));for(var p=[],v=1,x=0;T>=v;x++)p[x]=T/v|0,v*=4294967296;return new o(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return L(m(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(p,8)),x=y,k=0;k<T.length;k+=8){var E=Math.min(8,T.length-k),S=parseInt(T.substring(k,k+E),p);8>E?(E=h(Math.pow(p,E)),x=x.j(E).add(h(S))):(x=x.j(v),x=x.add(h(S)))}return x}var y=u(0),_=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-L(this).m();for(var T=0,p=1,v=0;v<this.g.length;v++){var x=this.i(v);T+=(0<=x?x:4294967296+x)*p,p*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(P(this))return"-"+L(this).toString(T);for(var p=h(Math.pow(T,6)),v=this,x="";;){var k=D(v,p).g;v=b(v,k.j(p));var E=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=k,C(v))return E+x;for(;6>E.length;)E="0"+E;x=E+x}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=b(this,T),P(T)?-1:C(T)?0:1};function L(T){for(var p=T.g.length,v=[],x=0;x<p;x++)v[x]=~T.g[x];return new o(v,~T.h).add(_)}t.abs=function(){return P(this)?L(this):this},t.add=function(T){for(var p=Math.max(this.g.length,T.g.length),v=[],x=0,k=0;k<=p;k++){var E=x+(this.i(k)&65535)+(T.i(k)&65535),S=(E>>>16)+(this.i(k)>>>16)+(T.i(k)>>>16);x=S>>>16,E&=65535,S&=65535,v[k]=S<<16|E}return new o(v,v[v.length-1]&-2147483648?-1:0)};function b(T,p){return T.add(L(p))}t.j=function(T){if(C(this)||C(T))return y;if(P(this))return P(T)?L(this).j(L(T)):L(L(this).j(T));if(P(T))return L(this.j(L(T)));if(0>this.l(A)&&0>T.l(A))return h(this.m()*T.m());for(var p=this.g.length+T.g.length,v=[],x=0;x<2*p;x++)v[x]=0;for(x=0;x<this.g.length;x++)for(var k=0;k<T.g.length;k++){var E=this.i(x)>>>16,S=this.i(x)&65535,le=T.i(k)>>>16,ve=T.i(k)&65535;v[2*x+2*k]+=S*ve,w(v,2*x+2*k),v[2*x+2*k+1]+=E*ve,w(v,2*x+2*k+1),v[2*x+2*k+1]+=S*le,w(v,2*x+2*k+1),v[2*x+2*k+2]+=E*le,w(v,2*x+2*k+2)}for(x=0;x<p;x++)v[x]=v[2*x+1]<<16|v[2*x];for(x=p;x<2*p;x++)v[x]=0;return new o(v,0)};function w(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function I(T,p){this.g=T,this.h=p}function D(T,p){if(C(p))throw Error("division by zero");if(C(T))return new I(y,y);if(P(T))return p=D(L(T),p),new I(L(p.g),L(p.h));if(P(p))return p=D(T,L(p)),new I(L(p.g),p.h);if(30<T.g.length){if(P(T)||P(p))throw Error("slowDivide_ only works with positive integers.");for(var v=_,x=p;0>=x.l(T);)v=M(v),x=M(x);var k=F(v,1),E=F(x,1);for(x=F(x,2),v=F(v,2);!C(x);){var S=E.add(x);0>=S.l(T)&&(k=k.add(v),E=S),x=F(x,1),v=F(v,1)}return p=b(T,k.j(p)),new I(k,p)}for(k=y;0<=T.l(p);){for(v=Math.max(1,Math.floor(T.m()/p.m())),x=Math.ceil(Math.log(v)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),E=h(v),S=E.j(p);P(S)||0<S.l(T);)v-=x,E=h(v),S=E.j(p);C(E)&&(E=_),k=k.add(E),T=b(T,S)}return new I(k,T)}t.A=function(T){return D(this,T).h},t.and=function(T){for(var p=Math.max(this.g.length,T.g.length),v=[],x=0;x<p;x++)v[x]=this.i(x)&T.i(x);return new o(v,this.h&T.h)},t.or=function(T){for(var p=Math.max(this.g.length,T.g.length),v=[],x=0;x<p;x++)v[x]=this.i(x)|T.i(x);return new o(v,this.h|T.h)},t.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),v=[],x=0;x<p;x++)v[x]=this.i(x)^T.i(x);return new o(v,this.h^T.h)};function M(T){for(var p=T.g.length+1,v=[],x=0;x<p;x++)v[x]=T.i(x)<<1|T.i(x-1)>>>31;return new o(v,T.h)}function F(T,p){var v=p>>5;p%=32;for(var x=T.g.length-v,k=[],E=0;E<x;E++)k[E]=0<p?T.i(E+v)>>>p|T.i(E+v+1)<<32-p:T.i(E+v);return new o(k,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,V0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=m,Vr=o}).apply(typeof Xp<"u"?Xp:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var M0,Li,F0,qa,yd,U0,j0,B0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var R=a[g];if(!(R in f))break e;f=f[R]}a=a[a.length-1],g=f[a],d=d(g),d!=g&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,g=!1,R={next:function(){if(!g&&f<a.length){var O=f++;return{value:d(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function m(a,d,f){return a.call.apply(a.bind,arguments)}function y(a,d,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),a.apply(d,R)}}return function(){return a.apply(d,arguments)}}function _(a,d,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,_.apply(null,arguments)}function A(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,R,O){for(var H=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)H[xe-2]=arguments[xe];return d.prototype[R].apply(g,H)}}function P(a){const d=a.length;if(0<d){const f=Array(d);for(let g=0;g<d;g++)f[g]=a[g];return f}return[]}function L(a,d){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const R=a.length||0,O=g.length||0;a.length=R+O;for(let H=0;H<O;H++)a[R+H]=g[H]}else a.push(g)}}class b{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var M=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function F(a,d,f){for(const g in a)d.call(f,a[g],g,a)}function T(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function p(a){const d={};for(const f in a)d[f]=a[f];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,d){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)a[f]=g[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function k(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function E(a){l.setTimeout(()=>{throw a},0)}function S(){var a=G;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class le{constructor(){this.h=this.g=null}add(d,f){const g=ve.get();g.set(d,f),this.h?this.h.next=g:this.g=g,this.h=g}}var ve=new b(()=>new be,a=>a.reset());class be{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,z=!1,G=new le,X=()=>{const a=l.Promise.resolve(void 0);_e=()=>{a.then(Y)}};var Y=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){E(f)}var d=ve;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}z=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return a}();function Ne(a,d){if(ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(M){e:{try{D(d.nodeName);var R=!0;break e}catch{}R=!1}R||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Te[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ne.aa.h.call(this)}}C(Ne,ge);var Te={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),V=0;function U(a,d,f,g,R){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!g,this.ha=R,this.key=++V,this.da=this.fa=!1}function W(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function oe(a){this.src=a,this.g={},this.h=0}oe.prototype.add=function(a,d,f,g,R){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var H=vt(a,d,g,R);return-1<H?(d=a[H],f||(d.fa=!1)):(d=new U(d,this.src,O,!!g,R),d.fa=f,a.push(d)),d};function ue(a,d){var f=d.type;if(f in a.g){var g=a.g[f],R=Array.prototype.indexOf.call(g,d,void 0),O;(O=0<=R)&&Array.prototype.splice.call(g,R,1),O&&(W(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function vt(a,d,f,g){for(var R=0;R<a.length;++R){var O=a[R];if(!O.da&&O.listener==d&&O.capture==!!f&&O.ha==g)return R}return-1}var _t="closure_lm_"+(1e6*Math.random()|0),Pe={};function de(a,d,f,g,R){if(Array.isArray(d)){for(var O=0;O<d.length;O++)de(a,d[O],f,g,R);return null}return f=pf(f),a&&a[N]?a.K(d,f,h(g)?!!g.capture:!1,R):oE(a,d,f,!1,g,R)}function oE(a,d,f,g,R,O){if(!d)throw Error("Invalid event type");var H=h(R)?!!R.capture:!!R,xe=mu(a);if(xe||(a[_t]=xe=new oe(a)),f=xe.add(d,f,g,H,O),f.proxy)return f;if(g=aE(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)ye||(R=H),R===void 0&&(R=!1),a.addEventListener(d.toString(),g,R);else if(a.attachEvent)a.attachEvent(mf(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function aE(){function a(f){return d.call(a.src,a.listener,f)}const d=lE;return a}function ff(a,d,f,g,R){if(Array.isArray(d))for(var O=0;O<d.length;O++)ff(a,d[O],f,g,R);else g=h(g)?!!g.capture:!!g,f=pf(f),a&&a[N]?(a=a.i,d=String(d).toString(),d in a.g&&(O=a.g[d],f=vt(O,f,g,R),-1<f&&(W(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[d],a.h--)))):a&&(a=mu(a))&&(d=a.g[d.toString()],a=-1,d&&(a=vt(d,f,g,R)),(f=-1<a?d[a]:null)&&fu(f))}function fu(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[N])ue(d.i,a);else{var f=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(f,g,a.capture):d.detachEvent?d.detachEvent(mf(f),g):d.addListener&&d.removeListener&&d.removeListener(g),(f=mu(d))?(ue(f,a),f.h==0&&(f.src=null,d[_t]=null)):W(a)}}}function mf(a){return a in Pe?Pe[a]:Pe[a]="on"+a}function lE(a,d){if(a.da)a=!0;else{d=new Ne(d,this);var f=a.listener,g=a.ha||a.src;a.fa&&fu(a),a=f.call(g,d)}return a}function mu(a){return a=a[_t],a instanceof oe?a:null}var pu="__closure_events_fn_"+(1e9*Math.random()>>>0);function pf(a){return typeof a=="function"?a:(a[pu]||(a[pu]=function(d){return a.handleEvent(d)}),a[pu])}function at(){se.call(this),this.i=new oe(this),this.M=this,this.F=null}C(at,se),at.prototype[N]=!0,at.prototype.removeEventListener=function(a,d,f,g){ff(this,a,d,f,g)};function Et(a,d){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new ge(d,a);else if(d instanceof ge)d.target=d.target||a;else{var R=d;d=new ge(g,a),x(d,R)}if(R=!0,f)for(var O=f.length-1;0<=O;O--){var H=d.g=f[O];R=zo(H,g,!0,d)&&R}if(H=d.g=a,R=zo(H,g,!0,d)&&R,R=zo(H,g,!1,d)&&R,f)for(O=0;O<f.length;O++)H=d.g=f[O],R=zo(H,g,!1,d)&&R}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],g=0;g<f.length;g++)W(f[g]);delete a.g[d],a.h--}}this.F=null},at.prototype.K=function(a,d,f,g){return this.i.add(String(a),d,!1,f,g)},at.prototype.L=function(a,d,f,g){return this.i.add(String(a),d,!0,f,g)};function zo(a,d,f,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var R=!0,O=0;O<d.length;++O){var H=d[O];if(H&&!H.da&&H.capture==f){var xe=H.listener,Ze=H.ha||H.src;H.fa&&ue(a.i,H),R=xe.call(Ze,g)!==!1&&R}}return R&&!g.defaultPrevented}function gf(a,d,f){if(typeof a=="function")f&&(a=_(a,f));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function yf(a){a.g=gf(()=>{a.g=null,a.i&&(a.i=!1,yf(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class uE extends se{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:yf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(a){se.call(this),this.h=a,this.g={}}C(oi,se);var vf=[];function _f(a){F(a.g,function(d,f){this.g.hasOwnProperty(f)&&fu(d)},a),a.g={}}oi.prototype.N=function(){oi.aa.N.call(this),_f(this)},oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gu=l.JSON.stringify,cE=l.JSON.parse,dE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function yu(){}yu.prototype.h=null;function Ef(a){return a.h||(a.h=a.i())}function wf(){}var ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vu(){ge.call(this,"d")}C(vu,ge);function _u(){ge.call(this,"c")}C(_u,ge);var xr={},Tf=null;function qo(){return Tf=Tf||new at}xr.La="serverreachability";function xf(a){ge.call(this,xr.La,a)}C(xf,ge);function li(a){const d=qo();Et(d,new xf(d))}xr.STAT_EVENT="statevent";function bf(a,d){ge.call(this,xr.STAT_EVENT,a),this.stat=d}C(bf,ge);function wt(a){const d=qo();Et(d,new bf(d,a))}xr.Ma="timingevent";function Sf(a,d){ge.call(this,xr.Ma,a),this.size=d}C(Sf,ge);function ui(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function ci(){this.g=!0}ci.prototype.xa=function(){this.g=!1};function hE(a,d,f,g,R,O){a.info(function(){if(a.g)if(O)for(var H="",xe=O.split("&"),Ze=0;Ze<xe.length;Ze++){var me=xe[Ze].split("=");if(1<me.length){var lt=me[0];me=me[1];var ut=lt.split("_");H=2<=ut.length&&ut[1]=="type"?H+(lt+"="+me+"&"):H+(lt+"=redacted&")}}else H=null;else H=O;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+d+`
`+f+`
`+H})}function fE(a,d,f,g,R,O,H){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+d+`
`+f+`
`+O+" "+H})}function es(a,d,f,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+pE(a,f)+(g?" "+g:"")})}function mE(a,d){a.info(function(){return"TIMEOUT: "+d})}ci.prototype.info=function(){};function pE(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var H=1;H<R.length;H++)R[H]=""}}}}return gu(f)}catch{return d}}var $o={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},If={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Eu;function Wo(){}C(Wo,yu),Wo.prototype.g=function(){return new XMLHttpRequest},Wo.prototype.i=function(){return{}},Eu=new Wo;function Un(a,d,f,g){this.j=a,this.i=d,this.l=f,this.R=g||1,this.U=new oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kf}function kf(){this.i=null,this.g="",this.h=!1}var Af={},wu={};function Tu(a,d,f){a.L=1,a.v=Qo(gn(d)),a.m=f,a.P=!0,Nf(a,null)}function Nf(a,d){a.F=Date.now(),Ho(a),a.A=gn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),qf(f.i,"t",g),a.C=0,f=a.j.J,a.h=new kf,a.g=am(a.j,f?d:null,!a.m),0<a.O&&(a.M=new uE(_(a.Y,a,a.g),a.O)),d=a.U,f=a.g,g=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(vf[0]=R.toString()),R=vf);for(var O=0;O<R.length;O++){var H=de(f,R[O],g||d.handleEvent,!1,d.h||d);if(!H)break;d.g[H.key]=H}d=a.H?p(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),li(),hE(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const d=this.M;d&&yn(a)==3?d.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const ut=yn(this.g);var d=this.g.Ba();const rs=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Xf(this.g)))){this.J||ut!=4||d==7||(d==8||0>=rs?li(3):li(2)),xu(this);var f=this.g.Z();this.X=f;t:if(Pf(this)){var g=Xf(this.g);a="";var R=g.length,O=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){br(this),di(this);var H="";break t}this.h.i=new l.TextDecoder}for(d=0;d<R;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(O&&d==R-1)});g.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=f==200,fE(this.i,this.u,this.A,this.l,this.R,ut,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,Ze=this.g;if((xe=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(xe)){var me=xe;break t}}me=null}if(f=me)es(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bu(this,f);else{this.o=!1,this.s=3,wt(12),br(this),di(this);break e}}if(this.P){f=!0;let Gt;for(;!this.J&&this.C<H.length;)if(Gt=gE(this,H),Gt==wu){ut==4&&(this.s=4,wt(14),f=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Af){this.s=4,wt(15),es(this.i,this.l,H,"[Invalid Chunk]"),f=!1;break}else es(this.i,this.l,Gt,null),bu(this,Gt);if(Pf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||H.length!=0||this.h.h||(this.s=1,wt(16),f=!1),this.o=this.o&&f,!f)es(this.i,this.l,H,"[Invalid Chunked Response]"),br(this),di(this);else if(0<H.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Pu(lt),lt.M=!0,wt(11))}}else es(this.i,this.l,H,null),bu(this,H);ut==4&&br(this),this.o&&!this.J&&(ut==4?rm(this.j,this):(this.o=!1,Ho(this)))}else DE(this.g),f==400&&0<H.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),br(this),di(this)}}}catch{}finally{}};function Pf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function gE(a,d){var f=a.C,g=d.indexOf(`
`,f);return g==-1?wu:(f=Number(d.substring(f,g)),isNaN(f)?Af:(g+=1,g+f>d.length?wu:(d=d.slice(g,g+f),a.C=g+f,d)))}Un.prototype.cancel=function(){this.J=!0,br(this)};function Ho(a){a.S=Date.now()+a.I,Cf(a,a.I)}function Cf(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ui(_(a.ba,a),d)}function xu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(mE(this.i,this.A),this.L!=2&&(li(),wt(17)),br(this),this.s=2,di(this)):Cf(this,this.S-a)};function di(a){a.j.G==0||a.J||rm(a.j,a)}function br(a){xu(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,_f(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function bu(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||Su(f.h,a))){if(!a.K&&Su(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ta(f),Zo(f);else break e;Nu(f),wt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=ui(_(f.Za,f),6e3));if(1>=Lf(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Ir(f,11)}else if((a.K||f.g==a)&&ta(f),!w(d))for(R=f.Da.g.parse(d),d=0;d<R.length;d++){let me=R[d];if(f.T=me[0],me=me[1],f.G==2)if(me[0]=="c"){f.K=me[1],f.ia=me[2];const lt=me[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ut=me[4];ut!=null&&(f.Aa=ut,f.j.info("SVER="+f.Aa));const rs=me[5];rs!=null&&typeof rs=="number"&&0<rs&&(g=1.5*rs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Gt=a.g;if(Gt){const ra=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ra){var O=g.h;O.g||ra.indexOf("spdy")==-1&&ra.indexOf("quic")==-1&&ra.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Iu(O,O.h),O.h=null))}if(g.D){const Cu=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Cu&&(g.ya=Cu,Ie(g.I,g.D,Cu))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var H=a;if(g.qa=om(g,g.J?g.ia:null,g.W),H.K){Of(g.h,H);var xe=H,Ze=g.L;Ze&&(xe.I=Ze),xe.B&&(xu(xe),Ho(xe)),g.g=H}else tm(g);0<f.i.length&&ea(f)}else me[0]!="stop"&&me[0]!="close"||Ir(f,7);else f.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Ir(f,7):Au(f):me[0]!="noop"&&f.l&&f.l.ta(me),f.v=0)}}li(4)}catch{}}var yE=class{constructor(a,d){this.g=a,this.map=d}};function Rf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Df(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lf(a){return a.h?1:a.g?a.g.size:0}function Su(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Iu(a,d){a.g?a.g.add(d):a.h=d}function Of(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Rf.prototype.cancel=function(){if(this.i=Vf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return P(a.i)}function vE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],f=a.length,g=0;g<f;g++)d.push(a[g]);return d}d=[],f=0;for(g in a)d[f++]=a[g];return d}function _E(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const g in a)d[f++]=g;return d}}}function Mf(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=_E(a),g=vE(a),R=g.length,O=0;O<R;O++)d.call(void 0,g[O],f&&f[O],a)}var Ff=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EE(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),R=null;if(0<=g){var O=a[f].substring(0,g);R=a[f].substring(g+1)}else O=a[f];d(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Sr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Sr){this.h=a.h,Go(this,a.j),this.o=a.o,this.g=a.g,Ko(this,a.s),this.l=a.l;var d=a.i,f=new mi;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Uf(this,f),this.m=a.m}else a&&(d=String(a).match(Ff))?(this.h=!1,Go(this,d[1]||"",!0),this.o=hi(d[2]||""),this.g=hi(d[3]||"",!0),Ko(this,d[4]),this.l=hi(d[5]||"",!0),Uf(this,d[6]||"",!0),this.m=hi(d[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}Sr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(fi(d,jf,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(fi(d,jf,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(fi(f,f.charAt(0)=="/"?xE:TE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",fi(f,SE)),a.join("")};function gn(a){return new Sr(a)}function Go(a,d,f){a.j=f?hi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ko(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Uf(a,d,f){d instanceof mi?(a.i=d,IE(a.i,a.h)):(f||(d=fi(d,bE)),a.i=new mi(d,a.h))}function Ie(a,d,f){a.i.set(d,f)}function Qo(a){return Ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function hi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fi(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,wE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jf=/[#\/\?@]/g,TE=/[#\?:]/g,xE=/[#\?]/g,bE=/[#\?@]/g,SE=/#/g;function mi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&EE(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=mi.prototype,t.add=function(a,d){jn(this),this.i=null,a=ts(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Bf(a,d){jn(a),d=ts(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function zf(a,d){return jn(a),d=ts(a,d),a.g.has(d)}t.forEach=function(a,d){jn(this),this.g.forEach(function(f,g){f.forEach(function(R){a.call(d,R,g,this)},this)},this)},t.na=function(){jn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let g=0;g<d.length;g++){const R=a[g];for(let O=0;O<R.length;O++)f.push(d[g])}return f},t.V=function(a){jn(this);let d=[];if(typeof a=="string")zf(this,a)&&(d=d.concat(this.g.get(ts(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return jn(this),this.i=null,a=ts(this,a),zf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function qf(a,d,f){Bf(a,d),0<f.length&&(a.i=null,a.g.set(ts(a,d),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var g=d[f];const O=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var R=O;H[g]!==""&&(R+="="+encodeURIComponent(String(H[g]))),a.push(R)}}return this.i=a.join("&")};function ts(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function IE(a,d){d&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Bf(this,g),qf(this,R,f))},a)),a.j=d}function kE(a,d){const f=new ci;if(l.Image){const g=new Image;g.onload=A(Bn,f,"TestLoadImage: loaded",!0,d,g),g.onerror=A(Bn,f,"TestLoadImage: error",!1,d,g),g.onabort=A(Bn,f,"TestLoadImage: abort",!1,d,g),g.ontimeout=A(Bn,f,"TestLoadImage: timeout",!1,d,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function AE(a,d){const f=new ci,g=new AbortController,R=setTimeout(()=>{g.abort(),Bn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(R),O.ok?Bn(f,"TestPingServer: ok",!0,d):Bn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),Bn(f,"TestPingServer: error",!1,d)})}function Bn(a,d,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function NE(){this.g=new dE}function PE(a,d,f){const g=f||"";try{Mf(a,function(R,O){let H=R;h(R)&&(H=gu(R)),d.push(g+O+"="+encodeURIComponent(H))})}catch(R){throw d.push(g+"type="+encodeURIComponent("_badmap")),R}}function Xo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Xo,yu),Xo.prototype.g=function(){return new Yo(this.l,this.j)},Xo.prototype.i=function(a){return function(){return a}}({});function Yo(a,d){at.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Yo,at),t=Yo.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,gi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$f(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function $f(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?pi(this):gi(this),this.readyState==3&&$f(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,pi(this))},t.Qa=function(a){this.g&&(this.response=a,pi(this))},t.ga=function(){this.g&&pi(this)};function pi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,gi(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function gi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wf(a){let d="";return F(a,function(f,g){d+=g,d+=":",d+=f,d+=`\r
`}),d}function ku(a,d,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Wf(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ie(a,d,f))}function Me(a){at.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Me,at);var CE=/^https?$/i,RE=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Eu.g(),this.v=this.o?Ef(this.o):Ef(Eu),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){Hf(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(RE,d,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,H]of f)this.g.setRequestHeader(O,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qf(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Hf(this,O)}};function Hf(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Gf(a),Jo(a)}function Gf(a){a.A||(a.A=!0,Et(a,"complete"),Et(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Et(this,"complete"),Et(this,"abort"),Jo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jo(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kf(this):this.bb())},t.bb=function(){Kf(this)};function Kf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||yn(a)!=4||a.Z()!=2)){if(a.u&&yn(a)==4)gf(a.Ea,0,a);else if(Et(a,"readystatechange"),yn(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var g;if(g=H===0){var R=String(a.D).match(Ff)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),g=!CE.test(R?R.toLowerCase():"")}f=g}if(f)Et(a,"complete"),Et(a,"success");else{a.m=6;try{var O=2<yn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Gf(a)}}finally{Jo(a)}}}}function Jo(a,d){if(a.g){Qf(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Et(a,"ready");try{f.onreadystatechange=g}catch{}}}function Qf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function yn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),cE(d)}};function Xf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function DE(a){const d={};a=(a.g&&2<=yn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var f=k(a[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=d[R]||[];d[R]=O,O.push(f)}T(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yi(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Yf(a){this.Aa=0,this.i=[],this.j=new ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yi("baseRetryDelayMs",5e3,a),this.cb=yi("retryDelaySeedMs",1e4,a),this.Wa=yi("forwardChannelMaxRetries",2,a),this.wa=yi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Rf(a&&a.concurrentRequestLimit),this.Da=new NE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yf.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,g){wt(0),this.W=a,this.H=d||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=om(this,null,this.W),ea(this)};function Au(a){if(Jf(a),a.G==3){var d=a.U++,f=gn(a.I);if(Ie(f,"SID",a.K),Ie(f,"RID",d),Ie(f,"TYPE","terminate"),vi(a,f),d=new Un(a,a.j,d),d.L=2,d.v=Qo(gn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=am(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ho(d)}im(a)}function Zo(a){a.g&&(Pu(a),a.g.cancel(),a.g=null)}function Jf(a){Zo(a),a.u&&(l.clearTimeout(a.u),a.u=null),ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ea(a){if(!Df(a.h)&&!a.s){a.s=!0;var d=a.Ga;_e||X(),z||(_e(),z=!0),G.add(d,a),a.B=0}}function LE(a,d){return Lf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ui(_(a.Ga,a,d),sm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Un(this,this.j,a);let O=this.o;if(this.S&&(O?(O=p(O),x(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=em(this,R,d),f=gn(this.I),Ie(f,"RID",a),Ie(f,"CVER",22),this.D&&Ie(f,"X-HTTP-Session-Id",this.D),vi(this,f),O&&(this.O?d="headers="+encodeURIComponent(String(Wf(O)))+"&"+d:this.m&&ku(f,this.m,O)),Iu(this.h,R),this.Ua&&Ie(f,"TYPE","init"),this.P?(Ie(f,"$req",d),Ie(f,"SID","null"),R.T=!0,Tu(R,f,null)):Tu(R,f,d),this.G=2}}else this.G==3&&(a?Zf(this,a):this.i.length==0||Df(this.h)||Zf(this))};function Zf(a,d){var f;d?f=d.l:f=a.U++;const g=gn(a.I);Ie(g,"SID",a.K),Ie(g,"RID",f),Ie(g,"AID",a.T),vi(a,g),a.m&&a.o&&ku(g,a.m,a.o),f=new Un(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=em(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Iu(a.h,f),Tu(f,g,d)}function vi(a,d){a.H&&F(a.H,function(f,g){Ie(d,g,f)}),a.l&&Mf({},function(f,g){Ie(d,g,f)})}function em(a,d,f){f=Math.min(a.i.length,f);var g=a.l?_(a.l.Na,a.l,a):null;e:{var R=a.i;let O=-1;for(;;){const H=["count="+f];O==-1?0<f?(O=R[0].g,H.push("ofs="+O)):O=0:H.push("ofs="+O);let xe=!0;for(let Ze=0;Ze<f;Ze++){let me=R[Ze].g;const lt=R[Ze].map;if(me-=O,0>me)O=Math.max(0,R[Ze].g-100),xe=!1;else try{PE(lt,H,"req"+me+"_")}catch{g&&g(lt)}}if(xe){g=H.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,g}function tm(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;_e||X(),z||(_e(),z=!0),G.add(d,a),a.v=0}}function Nu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ui(_(a.Fa,a),sm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,nm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ui(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),Zo(this),nm(this))};function Pu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function nm(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=gn(a.qa);Ie(d,"RID","rpc"),Ie(d,"SID",a.K),Ie(d,"AID",a.T),Ie(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ie(d,"TO",a.ja),Ie(d,"TYPE","xmlhttp"),vi(a,d),a.m&&a.o&&ku(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Qo(gn(d)),f.m=null,f.P=!0,Nf(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Zo(this),Nu(this),wt(19))};function ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function rm(a,d){var f=null;if(a.g==d){ta(a),Pu(a),a.g=null;var g=2}else if(Su(a.h,d))f=d.D,Of(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var R=a.B;g=qo(),Et(g,new Sf(g,f)),ea(a)}else tm(a);else if(R=d.s,R==3||R==0&&0<d.X||!(g==1&&LE(a,d)||g==2&&Nu(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),R){case 1:Ir(a,5);break;case 4:Ir(a,10);break;case 3:Ir(a,6);break;default:Ir(a,2)}}}function sm(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function Ir(a,d){if(a.j.info("Error code "+d),d==2){var f=_(a.fb,a),g=a.Xa;const R=!g;g=new Sr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Go(g,"https"),Qo(g),R?kE(g.toString(),f):AE(g.toString(),f)}else wt(2);a.G=0,a.l&&a.l.sa(d),im(a),Jf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function im(a){if(a.G=0,a.ka=[],a.l){const d=Vf(a.h);(d.length!=0||a.i.length!=0)&&(L(a.ka,d),L(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function om(a,d,f){var g=f instanceof Sr?gn(f):new Sr(f);if(g.g!="")d&&(g.g=d+"."+g.g),Ko(g,g.s);else{var R=l.location;g=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;var O=new Sr(null);g&&Go(O,g),d&&(O.g=d),R&&Ko(O,R),f&&(O.l=f),g=O}return f=a.D,d=a.ya,f&&d&&Ie(g,f,d),Ie(g,"VER",a.la),vi(a,g),g}function am(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Me(new Xo({eb:f})):new Me(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lm(){}t=lm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function na(){}na.prototype.g=function(a,d){return new Ct(a,d)};function Ct(a,d){at.call(this),this.g=new Yf(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!w(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new ns(this)}C(Ct,at),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Au(this.g)},Ct.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=gu(a),a=f);d.i.push(new yE(d.Ya++,a)),d.G==3&&ea(d)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Au(this.g),delete this.g,Ct.aa.N.call(this)};function um(a){vu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}C(um,vu);function cm(){_u.call(this),this.status=1}C(cm,_u);function ns(a){this.g=a}C(ns,lm),ns.prototype.ua=function(){Et(this.g,"a")},ns.prototype.ta=function(a){Et(this.g,new um(a))},ns.prototype.sa=function(a){Et(this.g,new cm)},ns.prototype.ra=function(){Et(this.g,"b")},na.prototype.createWebChannel=na.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,B0=function(){return new na},j0=function(){return qo()},U0=xr,yd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$o.NO_ERROR=0,$o.TIMEOUT=8,$o.HTTP_ERROR=6,qa=$o,If.COMPLETE="complete",F0=If,wf.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",at.prototype.listen=at.prototype.K,Li=wf,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,M0=Me}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});const Yp="@firebase/firestore";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let ti="10.14.0";/**
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
 */const Wr=new Sh("@firebase/firestore");function ki(){return Wr.logLevel}function Q(t,...e){if(Wr.logLevel<=ce.DEBUG){const n=e.map(Mh);Wr.debug(`Firestore (${ti}): ${t}`,...n)}}function On(t,...e){if(Wr.logLevel<=ce.ERROR){const n=e.map(Mh);Wr.error(`Firestore (${ti}): ${t}`,...n)}}function qs(t,...e){if(Wr.logLevel<=ce.WARN){const n=e.map(Mh);Wr.warn(`Firestore (${ti}): ${t}`,...n)}}function Mh(t){if(typeof t=="string")return t;try{/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${ti}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function we(t,e){t||te()}function re(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class z0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class G1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class K1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Q1{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new z0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new ft(e)}}class X1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Y1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new X1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){we(this.o===void 0);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new J1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class q0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=eI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function $s(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Qe(0,0))}static max(){return new ne(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _o{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _o.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _o?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends _o{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const tI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends _o{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return tI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new J(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Re.fromString(e))}static fromName(e){return new Z(Re.fromString(e).popFirst(5))}static empty(){return new Z(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Re(e.slice()))}}function nI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new pr(s,Z.empty(),e)}function rI(t){return new pr(t.readTime,t.key,-1)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(ne.min(),Z.empty(),-1)}static max(){return new pr(ne.max(),Z.empty(),-1)}}function sI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const iI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Vo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==iI)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(m=>{o[h]=m,++l,l===i&&r(o)},m=>s(m))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function aI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fh.oe=-1;function eu(t){return t==null}function Il(t){return t===0&&1/t==-1/0}function lI(t){return typeof t=="number"&&Number.isInteger(t)&&!Il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xa(this.root,e,this.comparator,!0)}}class xa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zp(this.data.getIterator())}getIteratorFrom(e){return new Zp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class Zp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new st(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class W0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new W0("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const uI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(we(!!t),typeof t=="string"){let e=0;const n=uI.exec(t);if(we(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function Uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jh(t){const e=t.mapValue.fields.__previous_value__;return Uh(e)?jh(e):e}function Eo(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class cI{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class wo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ba={mapValue:{}};function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uh(t)?4:hI(t)?9007199254740991:dI(t)?10:11:te()}function mn(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eo(t).isEqual(Eo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gr(s.timestampValue),l=gr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hr(s.bytesValue).isEqual(Hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),l=je(i.doubleValue);return o===l?Il(o)===Il(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return $s(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Jp(o)!==Jp(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mn(o[u],l[u])))return!1;return!0}(t,e);default:return te()}}function To(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=je(i.integerValue||i.doubleValue),u=je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return eg(t.timestampValue,e.timestampValue);case 4:return eg(Eo(t),Eo(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Hr(i),u=Hr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const m=pe(l[h],u[h]);if(m!==0)return m}return pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=pe(je(i.latitude),je(o.latitude));return l!==0?l:pe(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return tg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,m;const y=i.fields||{},_=o.fields||{},A=(l=y.value)===null||l===void 0?void 0:l.arrayValue,C=(u=_.value)===null||u===void 0?void 0:u.arrayValue,P=pe(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0);return P!==0?P:tg(A,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ba.mapValue&&o===ba.mapValue)return 0;if(i===ba.mapValue)return 1;if(o===ba.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},m=Object.keys(h);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const _=pe(u[y],m[y]);if(_!==0)return _;const A=Ws(l[u[y]],h[m[y]]);if(A!==0)return A}return pe(u.length,m.length)}(t.mapValue,e.mapValue);default:throw te()}}function eg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=gr(t),r=gr(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function tg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ws(n[s],r[s]);if(i)return i}return pe(n.length,r.length)}function Hs(t){return vd(t)}function vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vd(n.fields[o])}`;return s+"}"}(t.mapValue):te()}function _d(t){return!!t&&"integerValue"in t}function Bh(t){return!!t&&"arrayValue"in t}function ng(t){return!!t&&"nullValue"in t}function rg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $a(t){return!!t&&"mapValue"in t}function dI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ki(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ki(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ki(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$a(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ki(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$a(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$a(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ni(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Bt(Ki(this.value))}}function H0(t){const e=[];return ni(t.fields,(n,r)=>{const s=new nt([n]);if($a(r)){const i=H0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Jt(e)}/**
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
 */class pt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,ne.min(),ne.min(),ne.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new pt(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new pt(e,2,n,ne.min(),ne.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,ne.min(),ne.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kl{constructor(e,n){this.position=e,this.inclusive=n}}function sg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=Ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ig(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Al{constructor(e,n="asc"){this.field=e,this.dir=n}}function fI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class G0{}class Ge extends G0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pI(e,n,r):n==="array-contains"?new vI(e,r):n==="in"?new _I(e,r):n==="not-in"?new EI(e,r):n==="array-contains-any"?new wI(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gI(e,r):new yI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ws(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends G0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pn(e,n)}matches(e){return K0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function K0(t){return t.op==="and"}function Q0(t){return mI(t)&&K0(t)}function mI(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Ed(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Hs(t.value);if(Q0(t))return t.filters.map(e=>Ed(e)).join(",");{const e=t.filters.map(n=>Ed(n)).join(",");return`${t.op}(${e})`}}function X0(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(t,e):t instanceof pn?function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&X0(o,s.filters[l]),!0):!1}(t,e):void te()}function Y0(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Hs(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(Y0).join(" ,")+"}"}(t):"Filter"}class pI extends Ge{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class gI extends Ge{constructor(e,n){super(e,"in",n),this.keys=J0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yI extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=J0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function J0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class vI extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bh(n)&&To(n.arrayValue,this.value)}}class _I extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class EI extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!To(this.value.arrayValue,n)}}class wI extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>To(this.value.arrayValue,r))}}/**
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
 */class TI{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function og(t,e=null,n=[],r=[],s=null,i=null,o=null){return new TI(t,e,n,r,s,i,o)}function zh(t){const e=re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),eu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hs(r)).join(",")),e.ue=n}return e.ue}function qh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!X0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ig(t.startAt,e.startAt)&&ig(t.endAt,e.endAt)}function wd(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class tu{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xI(t,e,n,r,s,i,o,l){return new tu(t,e,n,r,s,i,o,l)}function $h(t){return new tu(t)}function ag(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bI(t){return t.collectionGroup!==null}function Qi(t){const e=re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new st(nt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Al(i,r))}),n.has(nt.keyField().canonicalString())||e.ce.push(new Al(nt.keyField(),r))}return e.ce}function hn(t){const e=re(t);return e.le||(e.le=SI(e,Qi(t))),e.le}function SI(t,e){if(t.limitType==="F")return og(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Al(s.field,i)});const n=t.endAt?new kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kl(t.startAt.position,t.startAt.inclusive):null;return og(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Td(t,e,n){return new tu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nu(t,e){return qh(hn(t),hn(e))&&t.limitType===e.limitType}function Z0(t){return`${zh(hn(t))}|lt:${t.limitType}`}function us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Y0(s)).join(", ")}]`),eu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Hs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Hs(s)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function ru(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Qi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=sg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Qi(r),s)||r.endAt&&!function(o,l,u){const h=sg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Qi(r),s))}(t,e)}function II(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function e_(t){return(e,n)=>{let r=!1;for(const s of Qi(t)){const i=kI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kI(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Ws(u,h):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return $0(this.inner)}size(){return this.innerSize}}/**
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
 */const AI=new Ve(Z.comparator);function Vn(){return AI}const t_=new Ve(Z.comparator);function Oi(...t){let e=t_;for(const n of t)e=e.insert(n.key,n);return e}function n_(t){let e=t_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Xi()}function r_(){return Xi()}function Xi(){return new ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const NI=new Ve(Z.comparator),PI=new st(Z.comparator);function ae(...t){let e=PI;for(const n of t)e=e.add(n);return e}const CI=new st(pe);function RI(){return CI}/**
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
 */function Wh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function s_(t){return{integerValue:""+t}}function DI(t,e){return lI(e)?s_(e):Wh(t,e)}/**
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
 */class su{constructor(){this._=void 0}}function LI(t,e,n){return t instanceof Nl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uh(i)&&(i=jh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof xo?o_(t,e):t instanceof bo?a_(t,e):function(s,i){const o=i_(s,i),l=lg(o)+lg(s.Pe);return _d(o)&&_d(s.Pe)?s_(l):Wh(s.serializer,l)}(t,e)}function OI(t,e,n){return t instanceof xo?o_(t,e):t instanceof bo?a_(t,e):n}function i_(t,e){return t instanceof Pl?function(r){return _d(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Nl extends su{}class xo extends su{constructor(e){super(),this.elements=e}}function o_(t,e){const n=l_(e);for(const r of t.elements)n.some(s=>mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends su{constructor(e){super(),this.elements=e}}function a_(t,e){let n=l_(e);for(const r of t.elements)n=n.filter(s=>!mn(s,r));return{arrayValue:{values:n}}}class Pl extends su{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function lg(t){return je(t.integerValue||t.doubleValue)}function l_(t){return Bh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof xo&&s instanceof xo||r instanceof bo&&s instanceof bo?$s(r.elements,s.elements,mn):r instanceof Pl&&s instanceof Pl?mn(r.Pe,s.Pe):r instanceof Nl&&s instanceof Nl}(t.transform,e.transform)}class MI{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class iu{}function u_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new d_(t.key,An.none()):new Fo(t.key,t.data,An.none());{const n=t.data,r=Bt.empty();let s=new st(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Jr(t.key,r,new Jt(s.toArray()),An.none())}}function FI(t,e,n){t instanceof Fo?function(s,i,o){const l=s.value.clone(),u=cg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(s,i,o){if(!Wa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=cg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(c_(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yi(t,e,n,r){return t instanceof Fo?function(i,o,l,u){if(!Wa(i.precondition,o))return l;const h=i.value.clone(),m=dg(i.fieldTransforms,u,o);return h.setAll(m),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(i,o,l,u){if(!Wa(i.precondition,o))return l;const h=dg(i.fieldTransforms,u,o),m=o.data;return m.setAll(c_(i)),m.setAll(h),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(i,o,l){return Wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function UI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=i_(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function ug(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$s(r,s,(i,o)=>VI(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends iu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jr extends iu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function c_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cg(t,e,n){const r=new Map;we(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,OI(o,l,n[s]))}return r}function dg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,LI(i,o,e))}return r}class d_ extends iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jI extends iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class BI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&FI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=r_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=u_(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&$s(this.mutations,e.mutations,(n,r)=>ug(n,r))&&$s(this.baseMutations,e.baseMutations,(n,r)=>ug(n,r))}}class Hh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length);let s=function(){return NI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hh(e,n,r,s)}}/**
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
 */class zI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,he;function $I(t){switch(t){default:return te();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function h_(t){if(t===void 0)return On("GRPC error has no .code"),j.UNKNOWN;switch(t){case qe.OK:return j.OK;case qe.CANCELLED:return j.CANCELLED;case qe.UNKNOWN:return j.UNKNOWN;case qe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case qe.INTERNAL:return j.INTERNAL;case qe.UNAVAILABLE:return j.UNAVAILABLE;case qe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case qe.NOT_FOUND:return j.NOT_FOUND;case qe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case qe.ABORTED:return j.ABORTED;case qe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case qe.DATA_LOSS:return j.DATA_LOSS;default:return te()}}(he=qe||(qe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function WI(){return new TextEncoder}/**
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
 */const HI=new Vr([4294967295,4294967295],0);function hg(t){const e=WI().encode(t),n=new V0;return n.update(e),new Uint8Array(n.digest())}function fg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vr([n,r],0),new Vr([s,i],0)]}class Gh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vi(`Invalid padding: ${n}`);if(r<0)throw new Vi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Vr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Vr.fromNumber(r)));return s.compare(HI)===1&&(s=new Vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=hg(e),[r,s]=fg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Gh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=hg(e),[r,s]=fg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ou{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ou(ne.min(),s,new Ve(pe),Vn(),ae())}}class Uo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,ae(),ae(),ae())}}/**
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
 */class Ha{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class f_{constructor(e,n){this.targetId=e,this.me=n}}class m_{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mg{constructor(){this.fe=0,this.ge=gg(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ae(),n=ae(),r=ae();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new Uo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=gg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class GI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Vn(),this.qe=pg(),this.Qe=new Ve(pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(wd(i))if(r===0){const o=new Z(i.path);this.Ue(n,o,pt.newNoDocument(o,ne.min()))}else we(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Hr(r).toUint8Array()}catch(u){if(u instanceof W0)return qs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Gh(o,s,i)}catch(u){return qs(u instanceof Vi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&wd(l.target)){const u=new Z(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,pt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ae();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ou(e,n,this.Qe,this.ke,r);return this.ke=Vn(),this.qe=pg(),this.Qe=new Ve(pe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new mg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new st(pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function pg(){return new Ve(Z.comparator)}function gg(){return new Ve(Z.comparator)}const KI={asc:"ASCENDING",desc:"DESCENDING"},QI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XI={and:"AND",or:"OR"};class YI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xd(t,e){return t.useProto3Json||eu(e)?e:{value:e}}function Cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function p_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JI(t,e){return Cl(t,e.toTimestamp())}function fn(t){return we(!!t),ne.fromTimestamp(function(n){const r=gr(n);return new Qe(r.seconds,r.nanos)}(t))}function Kh(t,e){return bd(t,e).canonicalString()}function bd(t,e){const n=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function g_(t){const e=Re.fromString(t);return we(w_(e)),e}function Sd(t,e){return Kh(t.databaseId,e.path)}function dc(t,e){const n=g_(e);if(n.get(1)!==t.databaseId.projectId)throw new J(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(v_(n))}function y_(t,e){return Kh(t.databaseId,e)}function ZI(t){const e=g_(t);return e.length===4?Re.emptyPath():v_(e)}function Id(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function v_(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yg(t,e,n){return{name:Sd(t,e),fields:n.value.mapValue.fields}}function ek(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,m){return h.useProto3Json?(we(m===void 0||typeof m=="string"),ot.fromBase64String(m||"")):(we(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ot.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const m=h.code===void 0?j.UNKNOWN:h_(h.code);return new J(m,h.message||"")}(o);n=new m_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=dc(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):ne.min(),l=new Bt({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(s,i,o,l),h=r.targetIds||[],m=r.removedTargetIds||[];n=new Ha(h,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=dc(t,r.document),i=r.readTime?fn(r.readTime):ne.min(),o=pt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ha([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=dc(t,r.document),i=r.removedTargetIds||[];n=new Ha([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new qI(s,i),l=r.targetId;n=new f_(l,o)}}return n}function tk(t,e){let n;if(e instanceof Fo)n={update:yg(t,e.key,e.value)};else if(e instanceof d_)n={delete:Sd(t,e.key)};else if(e instanceof Jr)n={update:yg(t,e.key,e.data),updateMask:ck(e.fieldMask)};else{if(!(e instanceof jI))return te();n={verify:Sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:JI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function nk(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(ne.min())&&(o=fn(i)),new MI(o,s.transformResults||[])}(n,e))):[]}function rk(t,e){return{documents:[y_(t,e.path)]}}function sk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=y_(t,s);const i=function(h){if(h.length!==0)return E_(pn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(m=>function(_){return{field:cs(_.field),direction:ak(_.dir)}}(m))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function ik(t){let e=ZI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1);const m=n.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];n.where&&(i=function(y){const _=__(y);return _ instanceof pn&&Q0(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(_=>function(C){return new Al(ds(C.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(y){let _;return _=typeof y=="object"?y.value:y,eu(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(y){const _=!!y.before,A=y.values||[];return new kl(A,_)}(n.startAt));let h=null;return n.endAt&&(h=function(y){const _=!y.before,A=y.values||[];return new kl(A,_)}(n.endAt)),xI(e,s,o,i,l,"F",u,h)}function ok(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function __(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ds(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ds(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>__(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te()}}(n.compositeFilter.op))}(t):te()}function ak(t){return KI[t]}function lk(t){return QI[t]}function uk(t){return XI[t]}function cs(t){return{fieldPath:t.canonicalString()}}function ds(t){return nt.fromServerFormat(t.fieldPath)}function E_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(rg(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NAN"}};if(ng(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rg(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NAN"}};if(ng(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(n.field),op:lk(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>E_(s));return r.length===1?r[0]:{compositeFilter:{op:uk(n.op),filters:r}}}(t):te()}function ck(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function w_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,s,i=ne.min(),o=ne.min(),l=ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class dk{constructor(e){this.ct=e}}function hk(t){const e=ik({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Td(e,e.limit,"L"):e}/**
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
 */class fk{constructor(){this.un=new mk}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(pr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class mk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Re.comparator)).toArray()}}/**
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
 */class Gs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Gs(0)}static kn(){return new Gs(-1)}}/**
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
 */class pk{constructor(){this.changes=new ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class yk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Yi(r.mutation,s,Jt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const s=Dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Oi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Vn();const o=Xi(),l=function(){return Xi()}();return n.forEach((u,h)=>{const m=r.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof Jr)?i=i.insert(h.key,h):m!==void 0?(o.set(h.key,m.mutation.getFieldMask()),Yi(m.mutation,h,m.mutation.getFieldMask(),Qe.now())):o.set(h.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,m)=>o.set(h,m)),n.forEach((h,m)=>{var y;return l.set(h,new gk(m,(y=o.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Xi();let s=new Ve((o,l)=>o-l),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let m=r.get(u)||Jt.empty();m=l.applyToLocalView(h,m),r.set(u,m);const y=(s.get(l.batchId)||ae()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,m=u.value,y=r_();m.forEach(_=>{if(!i.has(_)){const A=u_(n.get(_),r.get(_));A!==null&&y.set(_,A),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Dr());let l=-1,u=i;return o.next(h=>B.forEach(h,(m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(m)?B.resolve():this.remoteDocumentCache.getEntry(e,m).next(_=>{u=u.insert(m,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ae())).next(m=>({batchId:l,changes:n_(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let s=Oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,u=>{const h=function(y,_){return new tu(_,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(m=>{m.forEach((y,_)=>{o=o.insert(y,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const m=h.getKey();o.get(m)===null&&(o=o.insert(m,pt.newInvalidDocument(m)))});let l=Oi();return o.forEach((u,h)=>{const m=i.get(u);m!==void 0&&Yi(m.mutation,h,Jt.empty(),Qe.now()),ru(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class vk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:hk(s.bundledQuery),readTime:fn(s.readTime)}}(n)),B.resolve()}}/**
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
 */class _k{constructor(){this.overlays=new Ve(Z.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Dr(),i=n.length+1,o=new Z(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((h,m)=>h-m);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let m=i.get(h.largestBatchId);m===null&&(m=Dr(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const l=Dr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,m)=>l.set(h,m)),!(l.size()>=s)););return B.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zI(n,r));let i=this.Ir.get(n);i===void 0&&(i=ae(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class Ek{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Qh{constructor(){this.Tr=new st(Xe.Er),this.dr=new st(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Z(new Re([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Z(new Re([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=ae();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Z.comparator(e.key,n.key)||pe(e.wr,n.wr)}static Ar(e,n){return pe(e.wr,n.wr)||Z.comparator(e.key,n.key)}}/**
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
 */class wk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new st(Xe.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BI(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(pe);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new Z(i),0);let l=new st(pe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Xe(n,0),s=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Tk{constructor(e){this.Mr=e,this.docs=function(){return new Ve(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vn();const o=n.path,l=new Z(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:m}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||sI(rI(m),r)<=0||(s.has(m.key)||ru(n,m))&&(i=i.insert(m.key,m.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xk(this)}getSize(e){return B.resolve(this.size)}}class xk extends pk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class bk{constructor(e){this.persistence=e,this.Nr=new ri(n=>zh(n),qh),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Qh,this.targetCount=0,this.kr=Gs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
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
 */class Sk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Fh(0),this.Kr=!1,this.Kr=!0,this.$r=new Ek,this.referenceDelegate=e(this),this.Ur=new bk(this),this.indexManager=new fk,this.remoteDocumentCache=function(s){return new Tk(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new dk(n),this.Gr=new vk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _k,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new wk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const s=new Ik(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Ik extends oI{constructor(e){super(),this.currentSequenceNumber=e}}class Xh{constructor(e){this.persistence=e,this.Jr=new Qh,this.Yr=null}static Zr(e){return new Xh(e)}get Xr(){if(this.Yr)return this.Yr;throw te()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const s=Z.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Yh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ae(),s=ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yh(e,n.fromCache,r,s)}}/**
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
 */class kk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ak{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return vx()?8:aI(yt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new kk;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ki()<=ce.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(ki()<=ce.DEBUG&&Q("QueryEngine","Query:",us(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ki()<=ce.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):B.resolve())}Yi(e,n){if(ag(n))return B.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Td(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ae(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Td(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return ag(n)||s.isEqual(ne.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?B.resolve(null):(ki()<=ce.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),us(n)),this.rs(e,o,n,nI(s,-1)).next(l=>l))})}ts(e,n){let r=new st(e_(e));return n.forEach((s,i)=>{ru(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ki()<=ce.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",us(n)),this.Ji.getDocumentsMatchingQuery(e,n,pr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Nk{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ve(pe),this._s=new ri(i=>zh(i),qh),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Pk(t,e,n,r){return new Nk(t,e,n,r)}async function T_(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ae();for(const h of s){o.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}for(const h of i){l.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Ck(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,m){const y=h.batch,_=y.keys();let A=B.resolve();return _.forEach(C=>{A=A.next(()=>m.getEntry(u,C)).next(P=>{const L=h.docVersions.get(C);we(L!==null),P.version.compareTo(L)<0&&(y.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),m.addEntry(P)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function x_(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Rk(t,e){const n=re(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((m,y)=>{const _=s.get(y);if(!_)return;l.push(n.Ur.removeMatchingKeys(i,m.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(i,m.addedDocuments,y)));let A=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?A=A.withResumeToken(ot.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,r)),s=s.insert(y,A),function(P,L,b){return P.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(_,A,m)&&l.push(n.Ur.updateTargetData(i,A))});let u=Vn(),h=ae();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(Dk(i,o,e.documentUpdates).next(m=>{u=m.Ps,h=m.Is})),!r.isEqual(ne.min())){const m=n.Ur.getLastRemoteSnapshotVersion(i).next(y=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function Dk(t,e,n){let r=ae(),s=ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Vn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function Lk(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ok(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function kd(t,e,n){const r=re(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Mo(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function vg(t,e,n){const r=re(t);let s=ne.min(),i=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,m){const y=re(u),_=y._s.get(m);return _!==void 0?B.resolve(y.os.get(_)):y.Ur.getTargetData(h,m)}(r,o,hn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?i:ae())).next(l=>(Vk(r,II(e),l),{documents:l,Ts:i})))}function Vk(t,e,n){let r=t.us.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class _g{constructor(){this.activeTargetIds=RI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mk{constructor(){this.so=new _g,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Fk{_o(e){}shutdown(){}}/**
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
 */class Eg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sa=null;function hc(){return Sa===null?Sa=function(){return 268435456+Math.round(2147483648*Math.random())}():Sa++,"0x"+Sa.toString(16)}/**
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
 */const Uk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class jk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ht="WebChannelConnection";class Bk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=hc(),u=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(m=>(Q("RestConnection",`Received RPC '${n}' ${l}: `,m),m),m=>{throw qs("RestConnection",`RPC '${n}' ${l} failed with error: `,m,"url: ",u,"request:",s),m})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ti}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Uk[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=hc();return new Promise((o,l)=>{const u=new M0;u.setWithCredentials(!0),u.listenOnce(F0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case qa.NO_ERROR:const m=u.getResponseJson();Q(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case qa.TIMEOUT:Q(ht,`RPC '${e}' ${i} timed out`),l(new J(j.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const y=u.getStatus();if(Q(ht,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const C=function(L){const b=L.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(b)>=0?b:j.UNKNOWN}(A.status);l(new J(C,A.message))}else l(new J(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new J(j.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{Q(ht,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Q(ht,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=hc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=B0(),l=j0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const m=i.join("");Q(ht,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=o.createWebChannel(m,u);let _=!1,A=!1;const C=new jk({Io:L=>{A?Q(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(_||(Q(ht,`Opening RPC '${e}' stream ${s} transport.`),y.open(),_=!0),Q(ht,`RPC '${e}' stream ${s} sending:`,L),y.send(L))},To:()=>y.close()}),P=(L,b,w)=>{L.listen(b,I=>{try{w(I)}catch(D){setTimeout(()=>{throw D},0)}})};return P(y,Li.EventType.OPEN,()=>{A||(Q(ht,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),P(y,Li.EventType.CLOSE,()=>{A||(A=!0,Q(ht,`RPC '${e}' stream ${s} transport closed`),C.So())}),P(y,Li.EventType.ERROR,L=>{A||(A=!0,qs(ht,`RPC '${e}' stream ${s} transport errored:`,L),C.So(new J(j.UNAVAILABLE,"The operation could not be completed")))}),P(y,Li.EventType.MESSAGE,L=>{var b;if(!A){const w=L.data[0];we(!!w);const I=w,D=I.error||((b=I[0])===null||b===void 0?void 0:b.error);if(D){Q(ht,`RPC '${e}' stream ${s} received error:`,D);const M=D.status;let F=function(v){const x=qe[v];if(x!==void 0)return h_(x)}(M),T=D.message;F===void 0&&(F=j.INTERNAL,T="Unknown error status: "+M+" with message "+D.message),A=!0,C.So(new J(F,T)),y.close()}else Q(ht,`RPC '${e}' stream ${s} received:`,w),C.bo(w)}}),P(l,U0.STAT_EVENT,L=>{L.stat===yd.PROXY?Q(ht,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===yd.NOPROXY&&Q(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function fc(){return typeof document<"u"?document:null}/**
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
 */function au(t){return new YI(t,!0)}/**
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
 */class b_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class S_{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new b_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new J(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zk extends S_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=ek(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?fn(o.readTime):ne.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Id(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=wd(u)?{documents:rk(i,u)}:{query:sk(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=p_(i,o.resumeToken);const h=xd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=Cl(i,o.snapshotVersion.toTimestamp());const h=xd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=ok(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Id(this.serializer),n.removeTarget=e,this.a_(n)}}class qk extends S_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=nk(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Id(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tk(this.serializer,r))};this.a_(n)}}/**
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
 */class $k extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,bd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(j.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,bd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Wk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(On(n),this.D_=!1):Q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Hk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=re(u);h.L_.add(4),await jo(h),h.q_.set("Unknown"),h.L_.delete(4),await lu(h)}(this))})}),this.q_=new Wk(r,s)}}async function lu(t){if(Zr(t))for(const e of t.B_)await e(!0)}async function jo(t){for(const e of t.B_)await e(!1)}function I_(t,e){const n=re(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),tf(n)?ef(n):si(n).r_()&&Zh(n,e))}function Jh(t,e){const n=re(t),r=si(n);n.N_.delete(e),r.r_()&&k_(n,e),n.N_.size===0&&(r.r_()?r.o_():Zr(n)&&n.q_.set("Unknown"))}function Zh(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}si(t).A_(e)}function k_(t,e){t.Q_.xe(e),si(t).R_(e)}function ef(t){t.Q_=new GI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),si(t).start(),t.q_.v_()}function tf(t){return Zr(t)&&!si(t).n_()&&t.N_.size>0}function Zr(t){return re(t).L_.size===0}function A_(t){t.Q_=void 0}async function Gk(t){t.q_.set("Online")}async function Kk(t){t.N_.forEach((e,n)=>{Zh(t,e)})}async function Qk(t,e){A_(t),tf(t)?(t.q_.M_(e),ef(t)):t.q_.set("Unknown")}async function Xk(t,e,n){if(t.q_.set("Online"),e instanceof m_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rl(t,r)}else if(e instanceof Ha?t.Q_.Ke(e):e instanceof f_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ne.min()))try{const r=await x_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.N_.get(h);m&&i.N_.set(h,m.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const m=i.N_.get(u);if(!m)return;i.N_.set(u,m.withResumeToken(ot.EMPTY_BYTE_STRING,m.snapshotVersion)),k_(i,u);const y=new er(m.target,u,h,m.sequenceNumber);Zh(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Rl(t,r)}}async function Rl(t,e,n){if(!Mo(e))throw e;t.L_.add(1),await jo(t),t.q_.set("Offline"),n||(n=()=>x_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await lu(t)})}function N_(t,e){return e().catch(n=>Rl(t,n,e))}async function uu(t){const e=re(t),n=yr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Yk(e);)try{const s=await Lk(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Jk(e,s)}catch(s){await Rl(e,s)}P_(e)&&C_(e)}function Yk(t){return Zr(t)&&t.O_.length<10}function Jk(t,e){t.O_.push(e);const n=yr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function P_(t){return Zr(t)&&!yr(t).n_()&&t.O_.length>0}function C_(t){yr(t).start()}async function Zk(t){yr(t).p_()}async function eA(t){const e=yr(t);for(const n of t.O_)e.m_(n.mutations)}async function tA(t,e,n){const r=t.O_.shift(),s=Hh.from(r,e,n);await N_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await uu(t)}async function nA(t,e){e&&yr(t).V_&&await async function(r,s){if(function(o){return $I(o)&&o!==j.ABORTED}(s.code)){const i=r.O_.shift();yr(r).s_(),await N_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await uu(r)}}(t,e),P_(t)&&C_(t)}async function wg(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.L_.add(3),await jo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await lu(n)}async function rA(t,e){const n=re(t);e?(n.L_.delete(2),await lu(n)):e||(n.L_.add(2),await jo(n),n.q_.set("Unknown"))}function si(t){return t.K_||(t.K_=function(n,r,s){const i=re(n);return i.w_(),new zk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Gk.bind(null,t),Ro:Kk.bind(null,t),mo:Qk.bind(null,t),d_:Xk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),tf(t)?ef(t):t.q_.set("Unknown")):(await t.K_.stop(),A_(t))})),t.K_}function yr(t){return t.U_||(t.U_=function(n,r,s){const i=re(n);return i.w_(),new qk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Zk.bind(null,t),mo:nA.bind(null,t),f_:eA.bind(null,t),g_:tA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await uu(t)):(await t.U_.stop(),t.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class nf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new nf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rf(t,e){if(On("AsyncQueue",`${e}: ${t}`),Mo(t))return new J(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Oi(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Tg{constructor(){this.W_=new Ve(Z.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):te():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ks{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ks(e,n,Ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class sA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class iA{constructor(){this.queries=xg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=re(n),i=s.queries;s.queries=xg(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new J(j.ABORTED,"Firestore shutting down"))}}function xg(){return new ri(t=>Z0(t),nu)}async function R_(t,e){const n=re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new sA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=rf(o,`Initialization of query '${us(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&sf(n)}async function D_(t,e){const n=re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oA(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&sf(n)}function aA(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function sf(t){t.Y_.forEach(e=>{e.next()})}var Ad,bg;(bg=Ad||(Ad={})).ea="default",bg.Cache="cache";class L_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ad.Cache}}/**
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
 */class O_{constructor(e){this.key=e}}class V_{constructor(e){this.key=e}}class lA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ae(),this.mutatedKeys=ae(),this.Aa=e_(e),this.Ra=new Ls(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Tg,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const _=s.get(m),A=ru(this.query,y)?y:null,C=!!_&&this.mutatedKeys.has(_.key),P=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let L=!1;_&&A?_.data.isEqual(A.data)?C!==P&&(r.track({type:3,doc:A}),L=!0):this.ga(_,A)||(r.track({type:2,doc:A}),L=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!_&&A?(r.track({type:0,doc:A}),L=!0):_&&!A&&(r.track({type:1,doc:_}),L=!0,(u||h)&&(l=!0)),L&&(A?(o=o.add(A),i=P?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((m,y)=>function(A,C){const P=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return P(A)-P(C)}(m.type,y.type)||this.Aa(m.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Ks(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Tg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ae(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new V_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new O_(r))}),n}ba(e){this.Ta=e.Ts,this.da=ae();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ks.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cA{constructor(e){this.key=e,this.va=!1}}class dA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ri(l=>Z0(l),nu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ve(Z.comparator),this.Na=new Map,this.La=new Qh,this.Ba={},this.ka=new Map,this.qa=Gs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function hA(t,e,n=!0){const r=z_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await M_(r,e,n,!0),s}async function fA(t,e){const n=z_(t);await M_(n,e,!0,!1)}async function M_(t,e,n,r){const s=await Ok(t.localStore,hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await mA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&I_(t.remoteStore,s),l}async function mA(t,e,n,r,s){t.Ka=(y,_,A)=>async function(P,L,b,w){let I=L.view.ma(b);I.ns&&(I=await vg(P.localStore,L.query,!1).then(({documents:T})=>L.view.ma(T,I)));const D=w&&w.targetChanges.get(L.targetId),M=w&&w.targetMismatches.get(L.targetId)!=null,F=L.view.applyChanges(I,P.isPrimaryClient,D,M);return Ig(P,L.targetId,F.wa),F.snapshot}(t,y,_,A);const i=await vg(t.localStore,e,!0),o=new lA(e,i.Ts),l=o.ma(i.documents),u=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Ig(t,n,h.wa);const m=new uA(e,n,o);return t.Fa.set(e,m),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function pA(t,e,n){const r=re(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!nu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Jh(r.remoteStore,s.targetId),Nd(r,s.targetId)}).catch(Vo)):(Nd(r,s.targetId),await kd(r.localStore,s.targetId,!0))}async function gA(t,e){const n=re(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jh(n.remoteStore,r.targetId))}async function yA(t,e,n){const r=bA(t);try{const s=await function(o,l){const u=re(o),h=Qe.now(),m=l.reduce((A,C)=>A.add(C.key),ae());let y,_;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=Vn(),P=ae();return u.cs.getEntries(A,m).next(L=>{C=L,C.forEach((b,w)=>{w.isValidDocument()||(P=P.add(b))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(L=>{y=L;const b=[];for(const w of l){const I=UI(w,y.get(w.key).overlayedDocument);I!=null&&b.push(new Jr(w.key,I,H0(I.value.mapValue),An.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,b,l)}).next(L=>{_=L;const b=L.applyToLocalDocumentSet(y,P);return u.documentOverlayCache.saveOverlays(A,L.batchId,b)})}).then(()=>({batchId:_.batchId,changes:n_(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ve(pe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Bo(r,s.changes),await uu(r.remoteStore)}catch(s){const i=rf(s,"Failed to persist write");n.reject(i)}}async function F_(t,e){const n=re(t);try{const r=await Rk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?we(o.va):s.removedDocuments.size>0&&(we(o.va),o.va=!1))}),await Bo(n,r,e)}catch(r){await Vo(r)}}function Sg(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=re(o);u.onlineState=l;let h=!1;u.queries.forEach((m,y)=>{for(const _ of y.j_)_.Z_(l)&&(h=!0)}),h&&sf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vA(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ve(Z.comparator);o=o.insert(i,pt.newNoDocument(i,ne.min()));const l=ae().add(i),u=new ou(ne.min(),new Map,new Ve(pe),o,l);await F_(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),of(r)}else await kd(r.localStore,e,!1).then(()=>Nd(r,e,n)).catch(Vo)}async function _A(t,e){const n=re(t),r=e.batch.batchId;try{const s=await Ck(n.localStore,e);j_(n,r,null),U_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bo(n,s)}catch(s){await Vo(s)}}async function EA(t,e,n){const r=re(t);try{const s=await function(o,l){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let m;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(we(y!==null),m=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m)).next(()=>u.localDocuments.getDocuments(h,m))})}(r.localStore,e);j_(r,e,n),U_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bo(r,s)}catch(s){await Vo(s)}}function U_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function j_(t,e,n){const r=re(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||B_(t,r)})}function B_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Jh(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),of(t))}function Ig(t,e,n){for(const r of n)r instanceof O_?(t.La.addReference(r.key,e),wA(t,r)):r instanceof V_?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||B_(t,r.key)):te()}function wA(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.xa.add(r),of(t))}function of(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Z(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new cA(n)),t.Oa=t.Oa.insert(n,r),I_(t.remoteStore,new er(hn($h(n.path)),r,"TargetPurposeLimboResolution",Fh.oe))}}async function Bo(t,e,n){const r=re(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var m;if((h||n)&&r.isPrimaryClient){const y=h?!h.fromCache:(m=n==null?void 0:n.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){s.push(h);const y=Yh.Wi(u.targetId,h);i.push(y)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const m=re(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>B.forEach(h,_=>B.forEach(_.$i,A=>m.persistence.referenceDelegate.addReference(y,_.targetId,A)).next(()=>B.forEach(_.Ui,A=>m.persistence.referenceDelegate.removeReference(y,_.targetId,A)))))}catch(y){if(!Mo(y))throw y;Q("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const _=y.targetId;if(!y.fromCache){const A=m.os.get(_),C=A.snapshotVersion,P=A.withLastLimboFreeSnapshotVersion(C);m.os=m.os.insert(_,P)}}}(r.localStore,i))}async function TA(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await T_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new J(j.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bo(n,r.hs)}}function xA(t,e){const n=re(t),r=n.Na.get(e);if(r&&r.va)return ae().add(r.key);{let s=ae();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function z_(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=F_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vA.bind(null,e),e.Ca.d_=oA.bind(null,e.eventManager),e.Ca.$a=aA.bind(null,e.eventManager),e}function bA(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_A.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EA.bind(null,e),e}class Dl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=au(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Pk(this.persistence,new Ak,e.initialUser,this.serializer)}Ga(e){return new Sk(Xh.Zr,this.serializer)}Wa(e){return new Mk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Dl.provider={build:()=>new Dl};class Pd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TA.bind(null,this.syncEngine),await rA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iA}()}createDatastore(e){const n=au(e.databaseInfo.databaseId),r=function(i){return new Bk(i)}(e.databaseInfo);return function(i,o,l,u){return new $k(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Hk(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Sg(this.syncEngine,n,0),function(){return Eg.D()?new Eg:new Fk}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,m){const y=new dA(s,i,o,l,u,h);return m&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=re(s);Q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await jo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Pd.provider={build:()=>new Pd};/**
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
 */class q_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class SA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=q0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mc(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await T_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IA(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>wg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>wg(e.remoteStore,s)),t._onlineComponents=e}async function IA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;qs("Error using user provided cache. Falling back to memory cache: "+n),await mc(t,new Dl)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await mc(t,new Dl);return t._offlineComponents}async function $_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await kg(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await kg(t,new Pd))),t._onlineComponents}function kA(t){return $_(t).then(e=>e.syncEngine)}async function W_(t){const e=await $_(t),n=e.eventManager;return n.onListen=hA.bind(null,e.syncEngine),n.onUnlisten=pA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gA.bind(null,e.syncEngine),n}function AA(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const m=new q_({next:_=>{m.Za(),o.enqueueAndForget(()=>D_(i,y));const A=_.docs.has(l);!A&&_.fromCache?h.reject(new J(j.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&u&&u.source==="server"?h.reject(new J(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),y=new L_($h(l.path),m,{includeMetadataChanges:!0,_a:!0});return R_(i,y)}(await W_(t),t.asyncQueue,e,n,r)),r.promise}function NA(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const m=new q_({next:_=>{m.Za(),o.enqueueAndForget(()=>D_(i,y)),_.fromCache&&u.source==="server"?h.reject(new J(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),y=new L_(l,m,{includeMetadataChanges:!0,_a:!0});return R_(i,y)}(await W_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function H_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ag=new Map;/**
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
 */function G_(t,e,n){if(!n)throw new J(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PA(t,e,n,r){if(e===!0&&r===!0)throw new J(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ng(t){if(!Z.isDocumentKey(t))throw new J(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pg(t){if(Z.isDocumentKey(t))throw new J(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function af(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=af(t);throw new J(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Cg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=H_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new G1;switch(r.type){case"firstParty":return new Y1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ag.get(n);r&&(Q("ComponentProvider","Removing Datastore"),Ag.delete(n),r.terminate())}(this),Promise.resolve()}}function CA(t,e,n,r={}){var s;const i=(t=Kr(t,cu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ft.MOCK_USER;else{l=dx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new J(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ft(h)}t._authCredentials=new K1(new z0(l,u))}}/**
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
 */class du{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new du(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class hr extends du{constructor(e,n,r){super(e,n,$h(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new Z(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function RA(t,e,...n){if(t=Ht(t),G_("collection","path",e),t instanceof cu){const r=Re.fromString(e,...n);return Pg(r),new hr(t,null,r)}{if(!(t instanceof Ot||t instanceof hr))throw new J(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Pg(r),new hr(t.firestore,null,r)}}function ze(t,e,...n){if(t=Ht(t),arguments.length===1&&(e=q0.newId()),G_("doc","path",e),t instanceof cu){const r=Re.fromString(e,...n);return Ng(r),new Ot(t,null,new Z(r))}{if(!(t instanceof Ot||t instanceof hr))throw new J(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Ng(r),new Ot(t.firestore,t instanceof hr?t.converter:null,new Z(r))}}/**
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
 */class Rg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new b_(this,"async_queue_retry"),this.Vu=()=>{const r=fc();r&&Q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new kn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Mo(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw On("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=nf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class hu extends cu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Rg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rg(e),this._firestoreClient=void 0,await e}}}function DA(t,e){const n=typeof t=="object"?t:Zv(),r=typeof t=="string"?t:"(default)",s=kh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ux("firestore");i&&CA(s,...i)}return s}function lf(t){if(t._terminated)throw new J(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LA(t),t._firestoreClient}function LA(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,m){return new cI(l,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,H_(m.experimentalLongPollingOptions),m.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new SA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(ot.fromBase64String(e))}catch(n){throw new J(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class uf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class K_{constructor(e){this._methodName=e}}/**
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
 */class cf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */class df{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const OA=/^__.*__$/;class VA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}function Q_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class hf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new hf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ll(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Q_(this.Cu)&&OA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class MA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||au(e)}Qu(e,n,r,s=!1){return new hf({Cu:e,methodName:n,qu:r,path:nt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function FA(t){const e=t._freezeSettings(),n=au(t._databaseId);return new MA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function UA(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Z_("Data must be an object, but it was:",o,r);const l=Y_(r,o);let u,h;if(i.merge)u=new Jt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const _=jA(e,y,n);if(!o.contains(_))throw new J(j.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);zA(m,_)||m.push(_)}u=new Jt(m),h=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=o.fieldTransforms;return new VA(new Bt(l),u,h)}function X_(t,e){if(J_(t=Ht(t)))return Z_("Unsupported field value:",e,t),Y_(t,e);if(t instanceof K_)return function(r,s){if(!Q_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=X_(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:Cl(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cl(s.serializer,i)}}if(r instanceof cf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qs)return{bytesValue:p_(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof df)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Wh(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${af(r)}`)}(t,e)}function Y_(t,e){const n={};return $0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(r,s)=>{const i=X_(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function J_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof cf||t instanceof Qs||t instanceof Ot||t instanceof K_||t instanceof df)}function Z_(t,e,n){if(!J_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=af(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function jA(t,e,n){if((e=Ht(e))instanceof uf)return e._internalPath;if(typeof e=="string")return eE(t,e);throw Ll("Field path arguments must be of type string or ",t,!1,void 0,n)}const BA=new RegExp("[~\\*/\\[\\]]");function eE(t,e,n){if(e.search(BA)>=0)throw Ll(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uf(...e.split("."))._internalPath}catch{throw Ll(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ll(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new J(j.INVALID_ARGUMENT,l+t+u)}function zA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class tE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qA extends tE{data(){return super.data()}}function nE(t,e){return typeof e=="string"?eE(t,e):e instanceof uf?e._internalPath:e._delegate._internalPath}/**
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
 */function $A(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WA{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ni(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>je(o.doubleValue));return new df(i)}convertGeoPoint(e){return new cf(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Eo(e));default:return null}}convertTimestamp(e){const n=gr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);we(w_(r));const s=new wo(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||On(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function HA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Mi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rE extends tE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(nE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ga extends rE{data(e={}){return super.data(e)}}class GA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Mi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ga(this._firestore,this._userDataWriter,r.key,r,new Mi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Ga(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Mi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ga(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Mi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),m=o.indexOf(l.doc.key)),{type:KA(l.type),doc:u,oldIndex:h,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
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
 */function We(t){t=Kr(t,Ot);const e=Kr(t.firestore,hu);return AA(lf(e),t._key).then(n=>YA(e,t,n))}class sE extends WA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function QA(t){t=Kr(t,du);const e=Kr(t.firestore,hu),n=lf(e),r=new sE(e);return $A(t._query),NA(n,t._query).then(s=>new GA(e,r,t,s))}function ii(t,e,n){t=Kr(t,Ot);const r=Kr(t.firestore,hu),s=HA(t.converter,e,n);return XA(r,[UA(FA(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,An.none())])}function XA(t,e){return function(r,s){const i=new kn;return r.asyncQueue.enqueueAndForget(async()=>yA(await kA(r),s,i)),i.promise}(lf(t),e)}function YA(t,e,n){const r=n.docs.get(e._key),s=new sE(t);return new rE(t,s,e._key,r,new Mi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ti=s})(Zs),zs(new zr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new hu(new Q1(r.getProvider("auth-internal")),new Z1(r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(h.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),dr(Yp,"4.7.3",e),dr(Yp,"4.7.3","esm2017")})();const JA={apiKey:"AIzaSyAcjNCDe3-Whc5LUcd9Xfyl68hVYcdz1GU",authDomain:"alex-english-academy-react.firebaseapp.com",projectId:"alex-english-academy-react",storageBucket:"alex-english-academy-react.firebasestorage.app",messagingSenderId:"166060472334",appId:"1:166060472334:web:5e12a5376efc73f192e45f"},iE=Jv(JA),Ia=W1(iE),Ue=DA(iE);function Dg({onLogin:t,onNavigate:e}){const[n,r]=$.useState(!1),[s,i]=$.useState(!1),[o,l]=$.useState(!1),[u,h]=$.useState(""),[m,y]=$.useState(""),[_,A]=$.useState(""),[C,P]=$.useState(""),[L,b]=$.useState(""),[w,I]=$.useState(""),[D,M]=$.useState(!1),F=async p=>{var v;if(p.preventDefault(),b(""),I(""),M(!0),!u||!m){b("Por favor, preencha todos os campos"),M(!1);return}try{const x=ze(Ue,"students",u),k=await We(x);if(!k.exists()){b("Usuário não encontrado. Contate o Professor Alex."),M(!1);return}const E=k.data();if(E.password!==m){b("Senha incorreta"),M(!1);return}const S=`${u}@student.alexacademy.com`;try{await jp(Ia,S,m)}catch(ve){if(ve.code==="auth/user-not-found")try{await RS(Ia,S,m)}catch(be){console.log("User creation error:",be)}}const le={username:u,displayName:E.name||u,email:S,userType:"student",uid:(v=Ia.currentUser)==null?void 0:v.uid};I("✅ Login realizado com sucesso!"),setTimeout(()=>{t(le,"student"),M(!1)},1e3)}catch(x){console.error("Student Login Error:",x),b("Erro ao fazer login. Verifique suas credenciais."),M(!1)}},T=async p=>{if(p.preventDefault(),b(""),I(""),M(!0),!_||!C){b("Por favor, preencha todos os campos"),M(!1);return}try{const x=(await jp(Ia,_,C)).user,k=ze(Ue,"teachers",x.uid),E=await We(k);let S;E.exists()?S=E.data():(S={email:_,displayName:"Professor Alex",userType:"teacher",createdAt:Date.now(),uid:x.uid},await ii(k,S));const le={email:_,displayName:S.displayName||"Professor Alex",userType:"teacher",uid:x.uid};I("✅ Login de professor realizado com sucesso!"),setTimeout(()=>{t(le,"teacher"),r(!1),M(!1)},1e3)}catch(v){console.error("Teacher Login Error:",v);let x="Email ou senha inválidos";v.code==="auth/user-not-found"?x="Professor não encontrado. Contate o administrador.":v.code==="auth/wrong-password"?x="Senha incorreta":v.code==="auth/invalid-email"?x="Email inválido":v.code==="auth/too-many-requests"&&(x="Muitas tentativas. Tente novamente mais tarde."),b(x),M(!1)}};return c.createElement("div",{className:"sophisticated-bg min-h-screen"},c.createElement("div",{className:"min-h-screen flex items-center justify-center p-4"},c.createElement("div",{className:"w-full max-w-md"},c.createElement("div",{className:"elegant-card rounded-3xl p-8 fade-in"},c.createElement("div",{className:"text-center mb-8"},c.createElement("div",{className:"w-20 h-20 logo-sophisticated rounded-full flex items-center justify-center mx-auto mb-6"},c.createElement("span",{className:"text-3xl font-bold text-white"},"A")),c.createElement("h1",{className:"text-2xl font-medium mb-1",style:{color:"var(--alex-blue)"}},"Teacher Alex"),c.createElement("h2",{className:"text-4xl font-bold mb-4",style:{color:"var(--academy-red)"}},"ENGLISH ACADEMY"),c.createElement("div",{className:"beta-badge text-white px-4 py-2 rounded-full text-sm font-semibold mb-5"},c.createElement("span",{className:"w-2 h-2 bg-white rounded-full mr-2 animate-pulse"}),"FIREBASE AUTH"),c.createElement("h3",{className:"text-xl font-medium mb-2",style:{color:"var(--academy-red)"}},"Portal do Estudante"),c.createElement("p",{className:"text-base",style:{color:"var(--medium-gray)"}},"Autenticação segura via Firebase")),c.createElement("form",{onSubmit:F,className:"space-y-5"},c.createElement("div",null,c.createElement("label",{className:"block text-base font-medium mb-2",style:{color:"var(--charcoal)"}},"Nome de usuário"),c.createElement("input",{type:"text",placeholder:"Digite seu nome de usuário",value:u,onChange:p=>h(p.target.value),disabled:D,required:!0,className:"elegant-input"})),c.createElement("div",null,c.createElement("label",{className:"block text-base font-medium mb-2",style:{color:"var(--charcoal)"}},"Senha"),c.createElement("div",{className:"relative"},c.createElement("input",{type:s?"text":"password",placeholder:"Digite sua senha",value:m,onChange:p=>y(p.target.value),disabled:D,required:!0,className:"elegant-input pr-12"}),c.createElement("button",{type:"button",onClick:()=>i(!s),disabled:D,className:"absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity",style:{background:"none",border:"none",fontSize:"18px",color:"var(--medium-gray)"}},s?"👁️":"👁️‍🗨️"))),c.createElement("button",{type:"submit",disabled:D,className:`btn-primary w-full text-white font-bold py-4 rounded-xl text-lg transition-all ${D?"opacity-50 cursor-not-allowed":"hover:transform hover:scale-105"}`},D?c.createElement("div",{className:"flex items-center justify-center"},c.createElement("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"AUTENTICANDO..."):"ACESSAR MINHAS AULAS")),c.createElement("div",{className:"text-center mt-8 pt-6",style:{borderTop:"1px solid var(--light-gray)"}},c.createElement("p",{className:"text-base mb-1",style:{color:"var(--medium-gray)"}},"Precisa de ajuda?"),c.createElement("p",{className:"text-base font-medium mb-6",style:{color:"var(--charcoal)"}},"Entre em contato com ",c.createElement("span",{style:{color:"var(--academy-red)"},className:"font-semibold"},"Professor Alex")),c.createElement("div",{className:"space-y-3"},c.createElement("button",{className:"block w-full link-sophisticated text-base py-3 px-4 rounded-lg transition-all font-medium",style:{background:"none",border:"none"},disabled:D},"Esqueci minha senha"),c.createElement("button",{onClick:()=>r(!0),disabled:D,className:"block w-full link-muted text-sm py-3 px-4 rounded-lg hover:bg-gray-50 transition-all",style:{background:"none",border:"none"}},"🎓 Acesso para Professores"))),L&&c.createElement("div",{className:"mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-base text-center font-medium"},L),w&&c.createElement("div",{className:"mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-base text-center font-medium"},w)))),n&&c.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-4 z-50"},c.createElement("div",{className:"elegant-card rounded-2xl p-6 w-full max-w-sm"},c.createElement("h3",{className:"text-xl font-bold mb-6 text-center",style:{color:"var(--charcoal)"}},"🎓 Acesso Professor (Firebase)"),c.createElement("form",{onSubmit:T,className:"space-y-4"},c.createElement("input",{type:"email",placeholder:"Email do Professor",value:_,onChange:p=>A(p.target.value),disabled:D,required:!0,className:"elegant-input p-3 rounded-lg"}),c.createElement("div",{className:"relative"},c.createElement("input",{type:o?"text":"password",placeholder:"Senha",value:C,onChange:p=>P(p.target.value),disabled:D,required:!0,className:"elegant-input p-3 rounded-lg pr-12"}),c.createElement("button",{type:"button",onClick:()=>l(!o),disabled:D,className:"absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity",style:{background:"none",border:"none",fontSize:"16px",color:"var(--medium-gray)"}},o?"👁️":"👁️‍🗨️")),c.createElement("button",{type:"submit",disabled:D,className:`btn-secondary w-full text-white font-semibold py-3 rounded-lg transition-all ${D?"opacity-50 cursor-not-allowed":"hover:transform hover:scale-105"}`},D?c.createElement("div",{className:"flex items-center justify-center"},c.createElement("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"Autenticando..."):"Acessar Dashboard")),c.createElement("button",{onClick:()=>r(!1),disabled:D,className:"w-full mt-4 text-sm py-2 transition-colors",style:{background:"none",border:"none",color:"var(--medium-gray)"}},"Fechar"))),c.createElement("style",{jsx:!0},`
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
      `))}function ZA({user:t,onLogout:e,onNavigate:n}){const[r,s]=$.useState({level:1,xp:0,streak:0,completedLessons:0,totalLessons:110,foundationLessons:0,gamingLessons:0,moviesLessons:0,foodLessons:0}),[i,o]=$.useState(!0),[l,u]=$.useState("🔥 Loading your progress...");$.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){u("❌ User not found"),o(!1);return}try{u("🔥 Loading Foundation progress...");const w=ze(Ue,"students",t.username,"progress","foundation"),I=await We(w);u("🎮 Loading Gaming progress...");const D=ze(Ue,"students",t.username,"progress","gaming"),M=await We(D);u("🎬 Loading Movies progress...");const F=ze(Ue,"students",t.username,"progress","movies"),T=await We(F);u("🍕 Loading Food progress...");const p=ze(Ue,"students",t.username,"progress","food"),v=await We(p);let x=0,k=0,E=0,S=0,le=0,ve=0;if(I.exists()){const G=I.data();x+=G.totalXP||0,E=Object.keys(G.lessons||{}).length,k+=E}if(M.exists()){const G=M.data();x+=G.totalXP||0,S=Object.keys(G.lessons||{}).length,k+=S}if(T.exists()){const G=T.data();x+=G.totalXP||0,le=Object.keys(G.lessons||{}).length,k+=le}if(v.exists()){const G=v.data();x+=G.totalXP||0,ve=Object.keys(G.lessons||{}).length,k+=ve}const be=h(x),_e=m(I,M,T,v),z={level:be,xp:x,streak:_e,completedLessons:k,totalLessons:110,foundationLessons:E,gamingLessons:S,moviesLessons:le,foodLessons:ve};s(z),u(`✅ Progress loaded! ${E} Foundation + ${S} Gaming + ${le} Movies + ${ve} Food lessons`),o(!1),setTimeout(()=>{_(z)},500)}catch(w){console.error("Firebase Error loading progress:",w),u("❌ Failed to load progress"),o(!1);const I={level:3,xp:275,streak:5,completedLessons:8,totalLessons:110,foundationLessons:0,gamingLessons:0,moviesLessons:0,foodLessons:0};s(I),setTimeout(()=>_(I),500)}})()},[t]);const h=b=>{if(b<100)return 1;let w=1,I=0;for(;b>=I&&(w++,I+=(w-1)*150,!(w>1e3)););return Math.min(w-1,1e3)},m=(b,w,I,D)=>{let M=0;if(b.exists()){const T=b.data();M=Math.max(M,T.lastUpdated||0)}if(w.exists()){const T=w.data();M=Math.max(M,T.lastUpdated||0)}if(I.exists()){const T=I.data();M=Math.max(M,T.lastUpdated||0)}if(D.exists()){const T=D.data();M=Math.max(M,T.lastUpdated||0)}if(M===0)return 0;const F=Math.floor((Date.now()-M)/(1e3*60*60*24));return F<=1?5:Math.max(0,5-F)},y=b=>b<=50?"Beginner":b<=150?"Elementary":b<=400?"Intermediate":b<=700?"Advanced":"Expert",_=b=>{[{id:"totalCompletedCounter",value:b.completedLessons},{id:"totalXPCounter",value:b.xp},{id:"currentLevelCounter",value:b.level},{id:"dayStreakCounter",value:b.streak}].forEach((I,D)=>{setTimeout(()=>{const M=document.getElementById(I.id);A(M,I.value,1200+D*200)},100+D*200)})},A=(b,w,I=1500)=>{if(!b)return;const D=0,M=Date.now(),F=()=>{const T=Date.now()-M,p=Math.min(T/I,1),v=1-Math.pow(1-p,3),x=Math.floor(D+(w-D)*v);b.textContent=x.toLocaleString("pt-BR"),p<1?requestAnimationFrame(F):(b.textContent=w.toLocaleString("pt-BR"),b.style.transform="scale(1.1)",setTimeout(()=>{b.style.transform="scale(1)"},200))};F()},C=r.level,P=y(C),L=r.completedLessons/r.totalLessons*100;return i?c.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-6xl mb-4"},"📊"),c.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Your Progress..."),c.createElement("p",{className:"text-gray-600 mb-4"},l),c.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):c.createElement("div",{className:"sophisticated-bg min-h-screen"},c.createElement("div",{className:"portal-header"},c.createElement("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 md:px-8"},c.createElement("div",{className:"brand-title"},"TEACHER ALEX ENGLISH ACADEMY"),c.createElement("div",{className:"welcome-message"},"Bem-vindo(a) de volta, ",(t==null?void 0:t.displayName)||"Estudante"),c.createElement("div",{className:"firebase-status"},l))),c.createElement("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6"},c.createElement("div",{className:"professional-card rounded-xl p-4 sm:p-5 md:p-6"},c.createElement("div",{className:"text-center"},c.createElement("h2",{className:"text-lg sm:text-xl md:text-2xl font-semibold mb-2",style:{color:"var(--charcoal)"}},"Nível ",C," • ",P),c.createElement("div",{className:"flex items-center justify-center space-x-4 sm:space-x-6 text-sm sm:text-base mb-3",style:{color:"var(--medium-gray)"}},c.createElement("span",null,r.xp," XP"),c.createElement("span",{style:{color:"var(--light-gray)"}},"•"),c.createElement("span",null,"Sequência ",r.streak)),c.createElement("div",{className:"progress-card rounded-lg p-3 mt-3"},c.createElement("div",{className:"flex justify-between text-xs sm:text-sm mb-1",style:{color:"var(--medium-gray)"}},c.createElement("span",null,"Progresso das Aulas"),c.createElement("span",null,r.completedLessons,"/",r.totalLessons)),c.createElement("div",{className:"w-full rounded-full h-2",style:{backgroundColor:"var(--light-gray)"}},c.createElement("div",{className:"h-2 rounded-full transition-all duration-500",style:{backgroundColor:"var(--alex-blue)",width:`${L}%`}}))),(r.foundationLessons>0||r.gamingLessons>0||r.moviesLessons>0||r.foodLessons>0)&&c.createElement("div",{className:"mt-4 flex justify-center space-x-2 text-xs flex-wrap gap-1"},r.foundationLessons>0&&c.createElement("div",{className:"bg-blue-100 text-blue-800 px-2 py-1 rounded-full"},"🌟 Foundation: ",r.foundationLessons,"/10"),r.gamingLessons>0&&c.createElement("div",{className:"bg-purple-100 text-purple-800 px-2 py-1 rounded-full"},"🎮 Gaming: ",r.gamingLessons,"/10"),r.moviesLessons>0&&c.createElement("div",{className:"bg-red-100 text-red-800 px-2 py-1 rounded-full"},"🎬 Movies: ",r.moviesLessons,"/10"),r.foodLessons>0&&c.createElement("div",{className:"bg-orange-100 text-orange-800 px-2 py-1 rounded-full"},"🍕 Food: ",r.foodLessons,"/10")))),c.createElement("div",{className:"professional-card rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100"},c.createElement("div",{className:"text-center mb-4"},c.createElement("h3",{className:"text-xl sm:text-2xl font-bold mb-2",style:{color:"var(--charcoal)"}},"📊 Seu Progresso Real"),c.createElement("p",{className:"text-sm sm:text-base",style:{color:"var(--medium-gray)"}},"Dados carregados diretamente do Firebase!")),c.createElement("div",{className:"grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"},c.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-blue-600 mb-1 counter-number",id:"totalCompletedCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),c.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Lições Completas"))),c.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-red-100 hover:shadow-md transition-all duration-300"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-red-500 mb-1 counter-number",id:"totalXPCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),c.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"XP Real"))),c.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-purple-600 mb-1 counter-number",id:"currentLevelCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"1"),c.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Nível Atual"))),c.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-green-100 hover:shadow-md transition-all duration-300"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-green-600 mb-1 counter-number",id:"dayStreakCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),c.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Sequência")))),c.createElement("div",{className:"mt-4 text-center"},c.createElement("p",{className:"text-sm sm:text-base text-blue-600 font-medium"},"🔥 4 series ativas: Foundation + Gaming + Movies + Food! 🚀"))),c.createElement("div",null,c.createElement("h2",{className:"text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6",style:{color:"var(--charcoal)"}},"🎧 Suas Aulas"),c.createElement("div",{className:"space-y-4 sm:space-y-5 md:space-y-6"},c.createElement("div",{className:"lesson-card-enhanced"},c.createElement("div",{className:"flex items-center justify-between"},c.createElement("div",{className:"flex-1"},c.createElement("h3",{className:"text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2"},"🌟 STUDY ENGLISH"),c.createElement("p",{className:"text-sm sm:text-base text-blue-100 mb-3 sm:mb-4"},r.completedLessons," lições completadas • ",r.xp," XP total"),c.createElement("div",{className:"flex items-center gap-2 mb-3"},c.createElement("div",{className:"bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white"},"🎧 Audio Lessons"),c.createElement("div",{className:"bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white"},"🔥 Firebase Sync"))),c.createElement("div",{className:"ml-4 text-3xl sm:text-4xl"},"🌟")),c.createElement("button",{onClick:()=>n("hub"),className:"btn-enhanced w-full sm:w-auto inline-block text-center font-bold py-3 px-6 rounded-lg text-sm sm:text-base"},"🎯 CONTINUAR ESTUDOS")),c.createElement("div",{className:"lesson-card-soon"},c.createElement("div",{className:"flex items-center justify-between"},c.createElement("div",{className:"flex-1"},c.createElement("h3",{className:"text-lg sm:text-xl font-semibold mb-1 sm:mb-2",style:{color:"var(--medium-gray)"}},"📝 EXERCÍCIOS"),c.createElement("p",{className:"text-sm sm:text-base mb-3 sm:mb-4",style:{color:"var(--medium-gray)"}},"Sistema de exercícios interativos completo")),c.createElement("div",{className:"ml-4 text-2xl sm:text-3xl",style:{color:"var(--light-gray)"}},"────")),c.createElement("button",{className:"btn-disabled w-full sm:w-auto font-semibold py-3 px-6 rounded-lg text-sm sm:text-base cursor-not-allowed"},"EM BREVE")))),c.createElement("div",{className:"revolutionary-footer"},c.createElement("p",{className:"revolutionary-text"},"🔥 4 séries ativas • Foundation + Gaming + Movies + Food • Teacher Alex English Academy")),c.createElement("div",{className:"text-center pb-4"},c.createElement("button",{onClick:e,className:"text-sm transition-colors",style:{color:"var(--charcoal)",background:"none",border:"none"}},"Sair"))),c.createElement("style",{jsx:!0},`
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

        .sophisticated-bg {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          min-height: 100vh;
        }

        :root {
          --alex-blue: #3b82f6;
          --charcoal: #1f2937;
          --medium-gray: #6b7280;
          --light-gray: #e2e8f0;
          --soft-blue: #dbeafe;
        }
      `))}function eN({user:t,onLogout:e,onNavigate:n}){const[r,s]=$.useState({totalXP:0,completedLessons:0,foundationLessons:0,gamingLessons:0,moviesLessons:0,foodLessons:0,themesCompleted:0,totalThemes:6}),[i,o]=$.useState(!0),[l,u]=$.useState("🔥 Loading your progress..."),h=[{id:"foundation",title:"Foundation",emoji:"🌟",description:"Basics of English - Start here!",lessons:10,status:"active",color:"blue",completedLessons:0,totalXP:0},{id:"gaming",title:"Gaming World",emoji:"🎮",description:"Video games and technology",lessons:10,status:"active",color:"purple",completedLessons:0,totalXP:0},{id:"movies",title:"Movie Magic",emoji:"🎬",description:"Cinema and entertainment",lessons:10,status:"active",color:"red",completedLessons:0,totalXP:0},{id:"food",title:"Food Adventures",emoji:"🍕",description:"Cooking and restaurants",lessons:10,status:"active",color:"orange",completedLessons:0,totalXP:0},{id:"travel",title:"Travel Dreams",emoji:"✈️",description:"Vacations and adventures",lessons:10,status:"coming-soon",color:"green",completedLessons:0,totalXP:0},{id:"business",title:"Business English",emoji:"💼",description:"Professional communication",lessons:10,status:"coming-soon",color:"gray",completedLessons:0,totalXP:0}],[m,y]=$.useState(h);$.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){u("❌ User not found"),o(!1);return}try{u("🔥 Loading Foundation progress...");const L=ze(Ue,"students",t.username,"progress","foundation"),b=await We(L);u("🎮 Loading Gaming progress...");const w=ze(Ue,"students",t.username,"progress","gaming"),I=await We(w);u("🎬 Loading Movies progress...");const D=ze(Ue,"students",t.username,"progress","movies"),M=await We(D);u("🍕 Loading Food progress...");const F=ze(Ue,"students",t.username,"progress","food"),T=await We(F);let p=0,v=0,x=0,k=0,E=0,S=0,le=0,ve=0,be=0,_e=0,z=0;if(b.exists()){const Y=b.data();le=Y.totalXP||0,x=Object.keys(Y.lessons||{}).length,p+=le,v+=x,x===10&&z++}if(I.exists()){const Y=I.data();ve=Y.totalXP||0,k=Object.keys(Y.lessons||{}).length,p+=ve,v+=k,k===10&&z++}if(M.exists()){const Y=M.data();be=Y.totalXP||0,E=Object.keys(Y.lessons||{}).length,p+=be,v+=E,E===10&&z++}if(T.exists()){const Y=T.data();_e=Y.totalXP||0,S=Object.keys(Y.lessons||{}).length,p+=_e,v+=S,S===10&&z++}s({totalXP:p,completedLessons:v,foundationLessons:x,gamingLessons:k,moviesLessons:E,foodLessons:S,themesCompleted:z,totalThemes:6});const X=h.map(Y=>Y.id==="foundation"?{...Y,completedLessons:x,totalXP:le,status:"active"}:Y.id==="gaming"?{...Y,completedLessons:k,totalXP:ve,status:"active"}:Y.id==="movies"?{...Y,completedLessons:E,totalXP:be,status:"active"}:Y.id==="food"?{...Y,completedLessons:S,totalXP:_e,status:"active"}:Y);y(X),u(`✅ Progress loaded! ${x} Foundation + ${k} Gaming + ${E} Movies + ${S} Food = ${p} XP`),o(!1)}catch(L){console.error("Hub Firebase Error:",L),u("❌ Failed to load progress"),o(!1),s({totalXP:0,completedLessons:0,foundationLessons:0,gamingLessons:0,moviesLessons:0,foodLessons:0,themesCompleted:0,totalThemes:6})}})()},[t]);const _=P=>{const L="theme-card rounded-xl p-6 transition-all duration-300 border-2";return P.status==="active"?`${L} theme-card-active cursor-pointer hover:transform hover:scale-105`:`${L} theme-card-disabled opacity-60`},A=(P,L)=>{if(L!=="active")return{background:"#f3f4f6",border:"#e5e7eb",text:"#6b7280"};const b={blue:{background:"linear-gradient(135deg, #dbeafe, #93c5fd)",border:"#3b82f6",text:"#1e40af"},purple:{background:"linear-gradient(135deg, #e9d5ff, #c084fc)",border:"#8b5cf6",text:"#6b21a8"},red:{background:"linear-gradient(135deg, #fecaca, #f87171)",border:"#ef4444",text:"#b91c1c"},orange:{background:"linear-gradient(135deg, #fed7aa, #fb923c)",border:"#f97316",text:"#c2410c"},green:{background:"linear-gradient(135deg, #d1fae5, #6ee7b7)",border:"#10b981",text:"#047857"},gray:{background:"linear-gradient(135deg, #f3f4f6, #d1d5db)",border:"#6b7280",text:"#374151"}};return b[P]||b.gray},C=P=>{P.status==="active"?P.id==="foundation"?n("foundation-lessons"):P.id==="gaming"?n("gaming-lessons"):P.id==="movies"?n("movies-lessons"):P.id==="food"?n("food-lessons"):P.id==="travel"?alert("✈️ Travel Dreams lessons coming soon! Currently implementing..."):alert(`${P.title} lessons are being prepared! 🚀`):alert(`${P.title} será lançado em breve! 🚀`)};return i?c.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-6xl mb-4"},"🎯"),c.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Study Hub..."),c.createElement("p",{className:"text-gray-600 mb-4"},l),c.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):c.createElement("div",{className:"sophisticated-bg min-h-screen"},c.createElement("div",{className:"hub-header"},c.createElement("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8"},c.createElement("div",{className:"flex items-center justify-between"},c.createElement("div",null,c.createElement("h1",{className:"brand-title"},"🎯 STUDY ENGLISH HUB"),c.createElement("p",{className:"subtitle"},"Escolha seu tema de interesse"),c.createElement("p",{className:"firebase-status"},l)),c.createElement("button",{onClick:()=>n("portal"),className:"back-btn"},"← Voltar")))),c.createElement("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8"},c.createElement("div",{className:"text-center mb-8"},c.createElement("h2",{className:"text-2xl sm:text-3xl font-bold mb-2",style:{color:"var(--charcoal)"}},"Olá, ",(t==null?void 0:t.displayName)||"Estudante","! 👋"),c.createElement("p",{className:"text-lg",style:{color:"var(--medium-gray)"}},"Selecione um tema para continuar seus estudos")),c.createElement("div",{className:"professional-card rounded-xl p-4 mb-6 text-center"},c.createElement("h3",{className:"text-lg font-bold mb-2",style:{color:"var(--charcoal)"}},"📊 Seu Progresso Real (Firebase)"),c.createElement("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4"},c.createElement("div",{className:"stat-item"},c.createElement("div",{className:"text-2xl font-bold text-blue-600"},r.themesCompleted),c.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Temas Completos")),c.createElement("div",{className:"stat-item"},c.createElement("div",{className:"text-2xl font-bold text-green-600"},r.completedLessons),c.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Lições Completas")),c.createElement("div",{className:"stat-item"},c.createElement("div",{className:"text-2xl font-bold text-purple-600"},r.foundationLessons+r.gamingLessons+r.moviesLessons+r.foodLessons),c.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Total Estudado")),c.createElement("div",{className:"stat-item"},c.createElement("div",{className:"text-2xl font-bold text-red-600"},r.totalXP),c.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"XP Total"))),c.createElement("div",{className:"mt-4 text-sm text-blue-600"},"🔥 Dados carregados em tempo real do Firebase!")),c.createElement("div",{className:"professional-card rounded-xl p-4 mb-6 text-center"},c.createElement("h3",{className:"text-lg font-bold mb-2",style:{color:"var(--charcoal)"}},"🎉 4 Series Active: Foundation, Gaming, Movies & Food!"),c.createElement("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-sm"},c.createElement("div",{className:"text-blue-600"},"🌟 Foundation: ",r.foundationLessons,"/10"),c.createElement("div",{className:"text-purple-600"},"🎮 Gaming: ",r.gamingLessons,"/10"),c.createElement("div",{className:"text-red-600"},"🎬 Movies: ",r.moviesLessons,"/10"),c.createElement("div",{className:"text-orange-600"},"🍕 Food: ",r.foodLessons,"/10"))),c.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"},m.map(P=>{const L=A(P.color,P.status);return c.createElement("div",{key:P.id,className:_(P),onClick:()=>C(P),style:{background:L.background,borderColor:L.border}},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-5xl mb-4"},P.emoji),c.createElement("h3",{className:"text-xl font-bold mb-2",style:{color:L.text}},P.title),c.createElement("p",{className:"text-sm mb-4",style:{color:L.text,opacity:.8}},P.description),c.createElement("div",{className:"flex items-center justify-center space-x-4 text-sm"},c.createElement("span",{style:{color:L.text}},"📚 ",P.lessons," lições"),P.status==="active"&&c.createElement("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"},"✅ Ready!"),P.status==="coming-soon"&&c.createElement("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold"},"🚀 Em breve")),P.completedLessons>0&&c.createElement("div",{className:"mt-3 text-xs",style:{color:L.text}},c.createElement("div",{className:"bg-white/20 rounded-full p-2"},"✨ ",P.completedLessons,"/",P.lessons," completas • ",P.totalXP," XP"))))})),c.createElement("div",{className:"professional-card rounded-xl p-6 text-center"},c.createElement("h3",{className:"text-xl font-bold mb-4",style:{color:"var(--charcoal)"}},"📈 Resumo Completo (Firebase)"),c.createElement("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4"},c.createElement("div",{className:"stat-item"},c.createElement("div",{className:"text-2xl font-bold text-blue-600"},"4"),c.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Temas Ativos")),c.createElement("div",{className:"stat-item"},c.createElement("div",{className:"text-2xl font-bold text-green-600"},r.completedLessons),c.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Lições Feitas")),c.createElement("div",{className:"stat-item"},c.createElement("div",{className:"text-2xl font-bold text-purple-600"},r.themesCompleted),c.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Séries Completas")),c.createElement("div",{className:"stat-item"},c.createElement("div",{className:"text-2xl font-bold text-red-600"},r.totalXP),c.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"XP Acumulado"))),c.createElement("div",{className:"mt-4 text-sm text-gray-600"},"🔥 Foundation, Gaming, Movies & Food - Todos sincronizados com Firebase!")),c.createElement("div",{className:"text-center mt-8"},c.createElement("button",{onClick:e,className:"text-sm transition-colors",style:{color:"var(--medium-gray)",background:"none",border:"none"}},"Sair da conta"))),c.createElement("style",{jsx:!0},`
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
      `))}function tN({user:t,onLogout:e,onNavigate:n}){const[r,s]=$.useState({totalStudents:0,activeStudents:0,newStudentsThisMonth:0,totalLessonsCompleted:0,totalXPEarned:0}),[i,o]=$.useState(!1),[l,u]=$.useState({name:"",username:"",password:""}),[h,m]=$.useState([]),[y,_]=$.useState(!0),[A,C]=$.useState("🔥 Loading dashboard...");$.useEffect(()=>{(async()=>{try{C("🔥 Loading students from Firebase...");const b=RA(Ue,"students"),w=await QA(b);if(w.empty){m([]),s({totalStudents:0,activeStudents:0,newStudentsThisMonth:0,totalLessonsCompleted:0,totalXPEarned:0}),C("✅ Firebase connected - No students yet"),_(!1);return}C("📊 Calculating student progress...");const I=[];let D=0,M=0,F=0,T=0;const p=new Date().getMonth(),v=new Date().getFullYear();for(const x of w.docs){const k=x.id,E=ze(Ue,"students",k,"progress","foundation"),S=await We(E),le=ze(Ue,"students",k,"progress","gaming"),ve=await We(le);let be=0,_e=0,z=0,G=0,X="Never";if(S.exists()){const ye=S.data();be+=ye.totalXP||0,z=Object.keys(ye.lessons||{}).length,_e+=z,ye.lastUpdated&&(X=new Date(ye.lastUpdated).toLocaleDateString("pt-BR"))}if(ve.exists()){const ye=ve.data();if(be+=ye.totalXP||0,G=Object.keys(ye.lessons||{}).length,_e+=G,ye.lastUpdated){const Ne=new Date(ye.lastUpdated),Te=S.exists()&&S.data().lastUpdated?new Date(S.data().lastUpdated):new Date(0);X=(Ne>Te?Ne:Te).toLocaleDateString("pt-BR")}}const Y=X!=="Never"&&Date.now()-new Date(X.split("/").reverse().join("-")).getTime()<7*24*60*60*1e3;Y&&F++;const se=x.data().createdAt;if(se){const ye=new Date(se);ye.getMonth()===p&&ye.getFullYear()===v&&T++}const ge=Math.round(_e/20*100);I.push({id:k,name:x.data().name||k,username:k,lastAccess:X,totalXP:be,totalLessons:_e,foundationLessons:z,gamingLessons:G,progress:ge,isActive:Y}),D+=_e,M+=be}I.sort((x,k)=>k.totalXP-x.totalXP),m(I),s({totalStudents:I.length,activeStudents:F,newStudentsThisMonth:T,totalLessonsCompleted:D,totalXPEarned:M}),C(`✅ ${I.length} students loaded, ${D} lessons completed`),_(!1)}catch(b){console.error("Firebase Dashboard Error:",b),C("❌ Failed to load dashboard data"),_(!1),m([{id:1,name:"João Silva",username:"joao123",lastAccess:"23/07/2025",progress:75,totalXP:450,totalLessons:8},{id:2,name:"Maria Santos",username:"maria456",lastAccess:"22/07/2025",progress:45,totalXP:280,totalLessons:5},{id:3,name:"Pedro Costa",username:"pedro789",lastAccess:"21/07/2025",progress:90,totalXP:680,totalLessons:12}])}})()},[]);const P=async L=>{if(L.preventDefault(),!l.name||!l.username||!l.password){alert("Por favor, preencha todos os campos");return}if(l.password.length<4){alert("Senha deve ter pelo menos 4 caracteres");return}if(h.find(w=>w.username===l.username)){alert("Nome de usuário já existe! Escolha outro.");return}try{C("📝 Creating student account...");const w=ze(Ue,"students",l.username);await ii(w,{name:l.name,username:l.username,password:l.password,createdAt:Date.now(),createdBy:(t==null?void 0:t.email)||"teacher",status:"active"});const I={id:Date.now(),name:l.name,username:l.username,lastAccess:"Never",progress:0,totalXP:0,totalLessons:0,foundationLessons:0,gamingLessons:0,isActive:!1};m([...h,I]),s(D=>({...D,totalStudents:D.totalStudents+1,newStudentsThisMonth:D.newStudentsThisMonth+1})),alert(`✅ Conta criada com sucesso no Firebase!

Usuário: ${l.username}
Senha: ${l.password}

Envie estas credenciais para o aluno.`),u({name:"",username:"",password:""}),o(!1),C(`✅ Student ${l.name} created successfully`)}catch(w){console.error("Firebase Create Student Error:",w),alert("❌ Erro ao criar estudante no Firebase. Tente novamente."),C("❌ Failed to create student")}};return y?c.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-6xl mb-4"},"👨‍🏫"),c.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Teacher Dashboard..."),c.createElement("p",{className:"text-gray-600 mb-4"},A),c.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):c.createElement("div",{className:"sophisticated-bg min-h-screen"},c.createElement("nav",{className:"bg-white shadow-sm border-b border-gray-200 p-4"},c.createElement("div",{className:"flex justify-between items-center max-w-6xl mx-auto"},c.createElement("div",{className:"flex items-center space-x-3"},c.createElement("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"},c.createElement("span",{className:"text-xl font-bold text-white"},"A")),c.createElement("div",null,c.createElement("span",{className:"text-gray-800 font-semibold text-lg"},"Dashboard Professor"),c.createElement("div",{className:"text-gray-500 text-sm"},"Teacher Alex English Academy"))),c.createElement("div",{className:"flex items-center space-x-4"},c.createElement("span",{className:"text-gray-600 text-sm"},(t==null?void 0:t.displayName)||"Professor"),c.createElement("button",{onClick:e,className:"bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"},"Sair")))),c.createElement("div",{className:"max-w-6xl mx-auto p-6"},c.createElement("div",{className:"bg-white rounded-xl shadow-lg p-4 mb-6 text-center"},c.createElement("div",{className:"text-sm"},c.createElement("span",{className:"text-blue-600 font-medium"},A)))),c.createElement("div",{className:"max-w-6xl mx-auto p-6"},c.createElement("div",{className:"grid md:grid-cols-5 gap-6 mb-8"},c.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},c.createElement("div",{className:"text-3xl font-bold text-blue-600 mb-2"},r.totalStudents),c.createElement("div",{className:"text-gray-600 text-sm"},"Total Students")),c.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},c.createElement("div",{className:"text-3xl font-bold text-green-600 mb-2"},r.activeStudents),c.createElement("div",{className:"text-gray-600 text-sm"},"Active Students")),c.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},c.createElement("div",{className:"text-3xl font-bold text-red-500 mb-2"},r.newStudentsThisMonth),c.createElement("div",{className:"text-gray-600 text-sm"},"New This Month")),c.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},c.createElement("div",{className:"text-3xl font-bold text-purple-600 mb-2"},r.totalLessonsCompleted),c.createElement("div",{className:"text-gray-600 text-sm"},"Lessons Completed")),c.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},c.createElement("div",{className:"text-3xl font-bold text-yellow-600 mb-2"},r.totalXPEarned.toLocaleString()),c.createElement("div",{className:"text-gray-600 text-sm"},"Total XP Earned"))),c.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8"},c.createElement("div",{className:"flex justify-between items-center mb-6"},c.createElement("h3",{className:"text-xl font-bold text-gray-800"},"👥 Gerenciar Alunos (Firebase)"),c.createElement("button",{onClick:()=>o(!i),className:"bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"},"+ Adicionar Novo Aluno")),i&&c.createElement("div",{className:"bg-gray-50 rounded-lg p-6 mb-6"},c.createElement("h4",{className:"text-lg font-semibold text-gray-800 mb-4"},"📝 Criar Conta Firebase para Cliente"),c.createElement("form",{onSubmit:P,className:"grid md:grid-cols-3 gap-4 mb-4"},c.createElement("input",{type:"text",placeholder:"Nome do aluno",value:l.name,onChange:L=>u({...l,name:L.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),c.createElement("input",{type:"text",placeholder:"Nome de usuário (login)",value:l.username,onChange:L=>u({...l,username:L.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),c.createElement("input",{type:"password",placeholder:"Senha (min 4 caracteres)",value:l.password,onChange:L=>u({...l,password:L.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),c.createElement("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"},"✅ Criar no Firebase"),c.createElement("button",{type:"button",onClick:()=>o(!1),className:"bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"},"❌ Cancelar"))),c.createElement("div",{className:"space-y-3"},h.length===0?c.createElement("div",{className:"text-center py-8"},c.createElement("div",{className:"text-gray-500 mb-4"},"📚 Nenhum estudante no Firebase ainda"),c.createElement("p",{className:"text-sm text-gray-400"},'Clique em "Adicionar Novo Aluno" para criar a primeira conta')):h.map(L=>c.createElement("div",{key:L.id,className:"border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"},c.createElement("div",{className:"flex justify-between items-start"},c.createElement("div",{className:"flex-1"},c.createElement("div",{className:"flex items-center space-x-3 mb-2"},c.createElement("h4",{className:"font-semibold text-gray-800"},L.name),L.isActive&&c.createElement("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"},"● Active")),c.createElement("p",{className:"text-sm text-gray-600 mb-2"},"@",L.username," • Último acesso: ",L.lastAccess),c.createElement("div",{className:"flex items-center space-x-4 text-xs text-gray-500"},c.createElement("span",null,"🌟 Foundation: ",L.foundationLessons||0,"/10"),c.createElement("span",null,"🎮 Gaming: ",L.gamingLessons||0,"/10"),c.createElement("span",null,"⚡ Total XP: ",L.totalXP))),c.createElement("div",{className:"text-right"},c.createElement("div",{className:"text-lg font-bold text-blue-600"},L.progress,"%"),c.createElement("div",{className:"text-xs text-gray-500"},L.totalLessons,"/20 lessons"))))))),c.createElement("div",{className:"grid lg:grid-cols-2 gap-8"},c.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6"},c.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"⚡ Ações Rápidas"),c.createElement("div",{className:"space-y-3"},c.createElement("button",{onClick:()=>n("portal"),className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm transition-colors"},"📱 Visualizar Portal do Estudante"),c.createElement("button",{className:"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg text-sm transition-colors"},"📊 Exportar Relatório Firebase"),c.createElement("button",{className:"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg text-sm transition-colors"},"📧 Mensagem para Todos os Alunos"),c.createElement("button",{onClick:()=>window.location.reload(),className:"w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-sm transition-colors"},"🔄 Atualizar Dados Firebase"))),c.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6"},c.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"📈 Status do Sistema"),c.createElement("div",{className:"space-y-4"},c.createElement("div",{className:"flex items-center justify-between"},c.createElement("span",{className:"text-gray-600 text-sm"},"🔥 Firebase Connection"),c.createElement("span",{className:"text-green-600 font-semibold"},"● Connected")),c.createElement("div",{className:"flex items-center justify-between"},c.createElement("span",{className:"text-gray-600 text-sm"},"📊 React System"),c.createElement("span",{className:"text-green-600 font-semibold"},"● Running")),c.createElement("div",{className:"flex items-center justify-between"},c.createElement("span",{className:"text-gray-600 text-sm"},"🌟 Foundation Series"),c.createElement("span",{className:"text-green-600 font-semibold"},"10/10 Active")),c.createElement("div",{className:"flex items-center justify-between"},c.createElement("span",{className:"text-gray-600 text-sm"},"🎮 Gaming Series"),c.createElement("span",{className:"text-green-600 font-semibold"},"10/10 Active")),c.createElement("div",{className:"flex items-center justify-between"},c.createElement("span",{className:"text-gray-600 text-sm"},"📊 Student Data"),c.createElement("span",{className:"text-blue-600 font-semibold"},"Real Firebase")),c.createElement("div",{className:"flex items-center justify-between"},c.createElement("span",{className:"text-gray-600 text-sm"},"⚡ XP Tracking"),c.createElement("span",{className:"text-green-600 font-semibold"},"● Persistent")))))),c.createElement("style",{jsx:!0},`
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
      `))}const is=[{id:"foundation-01",title:"Basic Greetings",description:"Learn essential greeting phrases and introductions",duration:"35s",icon:"🌟",audioFile:"audio/a1-foundation/audio-01-greetings.mp3",questions:[{question:"What is the woman's name?",options:["Sara","Sarah","Sandra","Samantha"],correct:1},{question:"Where is she from?",options:["Brazil","USA","Canada","Mexico"],correct:2},{question:"What is her job?",options:["Teacher","Nurse","Doctor","Engineer"],correct:1},{question:"How old is she?",options:["23","24","25","26"],correct:2},{question:"What does she say at the end?",options:["Goodbye","See you later","Have a great day","Take care"],correct:2}]},{id:"foundation-02",title:"Family Introduction",description:"Learn family members and relationship vocabulary",duration:"38s",icon:"👨‍👩‍👧‍👦",audioFile:"audio/a1-foundation/audio-02-family.mp3",questions:[{question:"How many people are in the family?",options:["3","4","5","6"],correct:1},{question:"What does the mother like?",options:["Reading","Cooking","Dancing","Shopping"],correct:1},{question:"How old is the sister?",options:["18","20","22","25"],correct:1},{question:"Where does the father work?",options:["Hospital","School","Bank","Restaurant"],correct:2},{question:"Where do they live?",options:["Small apartment","Big house","Small house","Big apartment"],correct:1}]},{id:"foundation-03",title:"Daily Routine",description:"Express daily activities and time management",duration:"40s",icon:"⏰",audioFile:"audio/a1-foundation/audio-03-routine.mp3",questions:[{question:"What time does he wake up?",options:["6 o'clock","7 o'clock","8 o'clock","9 o'clock"],correct:1},{question:"How does he go to work?",options:["By car","By bus","Walking","By bike"],correct:1},{question:"What time does he go to bed?",options:["9 o'clock","10 o'clock","11 o'clock","12 o'clock"],correct:1},{question:"What does he eat for breakfast?",options:["Cereal","Eggs","Bread with butter","Fruit"],correct:2},{question:"What time does he start work?",options:["8 o'clock","9 o'clock","8:30","9:30"],correct:1}]},{id:"foundation-04",title:"Food and Drinks",description:"Learn about meals, food types, and dining",duration:"36s",icon:"🍕",audioFile:"audio/a1-foundation/audio-04-food.mp3",questions:[{question:"What is his favorite drink?",options:["Coffee","Tea","Orange juice","Water"],correct:2},{question:"What dessert does he want?",options:["Ice cream","Chocolate cake","Apple pie","Cookies"],correct:1},{question:"When does he come to the restaurant?",options:["Every day","Every weekend","Every month","Every week"],correct:1},{question:"What food does he like?",options:["Pizza only","Hamburgers only","Pizza and hamburgers","Salad"],correct:2},{question:"How is the food at the restaurant?",options:["Expensive","Delicious","Bad","Cold"],correct:1}]},{id:"foundation-05",title:"Weather and Clothes",description:"Describe weather conditions and clothing",duration:"37s",icon:"🌤️",audioFile:"audio/a1-foundation/audio-05-weather.mp3",questions:[{question:"What is the weather like today?",options:["Cold and rainy","Sunny and warm","Cloudy","Windy"],correct:1},{question:"What did he wear yesterday?",options:["T-shirt and shorts","Jacket and boots","Jeans and sweater","Dress"],correct:1},{question:"Why does he love summer?",options:["No school","Nice weather","Long days","Vacation time"],correct:1},{question:"What is he wearing today?",options:["Jacket and boots","Blue t-shirt and white shorts","Jeans and sweater","Black pants"],correct:1},{question:"What will tomorrow's weather be like?",options:["Sunny","Rainy","Cloudy","Hot"],correct:2}]},{id:"foundation-06",title:"Shopping",description:"Learn shopping vocabulary and money expressions",duration:"39s",icon:"🛒",audioFile:"audio/a1-foundation/audio-06-shopping.mp3",questions:[{question:"What fruits does he want to buy?",options:["Apples and oranges only","Bananas only","Apples, bananas, and oranges","Only oranges"],correct:2},{question:"When does the supermarket close?",options:["9 at night","10 at night","11 at night","8 at night"],correct:1},{question:"How does he pay?",options:["Cash","Credit card","Check","Debit card"],correct:1},{question:"What other things does he need to buy?",options:["Milk and eggs","Bread only","Milk, eggs, and bread","Just milk"],correct:2},{question:"How long does shopping take?",options:["20 minutes","30 minutes","40 minutes","1 hour"],correct:1}]},{id:"foundation-07",title:"Hobbies and Free Time",description:"Express interests, hobbies, and leisure activities",duration:"35s",icon:"🎨",audioFile:"audio/a1-foundation/audio-07-hobbies.mp3",questions:[{question:"What instrument does he play?",options:["Piano","Guitar","Drums","Violin"],correct:1},{question:"When does he play this instrument?",options:["Every day","Weekdays","Weekends","Sometimes"],correct:2},{question:"What is his favorite hobby?",options:["Reading","Photography","Singing","Dancing"],correct:1},{question:"What does he not like doing?",options:["Singing","Dancing","Reading","Playing guitar"],correct:1},{question:"What does he take pictures of?",options:["People","Buildings","Nature and animals","Cars"],correct:2}]},{id:"foundation-08",title:"Transportation",description:"Learn about vehicles, directions, and travel",duration:"38s",icon:"🚗",audioFile:"audio/a1-foundation/audio-08-transportation.mp3",questions:[{question:"How does he usually go to work?",options:["By car","Walking","By bus","By bike"],correct:1},{question:"When does he drive his car?",options:["Every day","When it rains","On weekends","Never"],correct:2},{question:"Why doesn't he like the subway?",options:["Too expensive","Too crowded","Too slow","Too far"],correct:1},{question:"Where does he live?",options:["Countryside","City center","Suburbs","Near the park"],correct:1},{question:"Where is the bus stop?",options:["Near his work","In front of his building","At the corner","Far from home"],correct:1}]},{id:"foundation-09",title:"Health and Body",description:"Learn body parts, health, and medical vocabulary",duration:"40s",icon:"⚕️",audioFile:"audio/a1-foundation/audio-09-health.mp3",questions:[{question:"How often does he exercise?",options:["Every day","Three times a week","Once a week","Never"],correct:1},{question:"How many glasses of water does he drink?",options:["6","7","8","10"],correct:2},{question:"How many hours does he sleep?",options:["7 hours","8 hours","9 hours","6 hours"],correct:1},{question:"How often does he brush his teeth?",options:["Once a day","Twice a day","Three times a day","Never"],correct:1},{question:"What doesn't he do?",options:["Exercise","Eat vegetables","Smoke and drink alcohol","Sleep"],correct:2}]},{id:"foundation-10",title:"Future Plans",description:"Express future intentions, goals, and dreams",duration:"37s",icon:"🚀",audioFile:"audio/a1-foundation/audio-10-future.mp3",questions:[{question:"Where will he travel next month?",options:["Asia","Europe","America","Africa"],correct:1},{question:"How long will he stay?",options:["One week","Two weeks","Three weeks","One month"],correct:1},{question:"What will he do after his trip?",options:["Study more","Start a new job","Buy a house","Move cities"],correct:1},{question:"Which countries will he visit?",options:["France and Italy","Italy and Spain","France, Italy, and Spain","Only France"],correct:2},{question:"What languages is he learning?",options:["Spanish","French","French and Italian","Italian"],correct:2}]}];function nN({user:t,onBack:e}){const[n,r]=$.useState("selection"),[s,i]=$.useState(null),[o,l]=$.useState([]),[u,h]=$.useState(0),[m,y]=$.useState("Listen to Audio"),[_,A]=$.useState(!1),[C,P]=$.useState(!1),[L,b]=$.useState({}),[w,I]=$.useState(1),[D,M]=$.useState(null),[F,T]=$.useState(null),[p,v]=$.useState("🔥 Loading Firebase..."),[x,k]=$.useState(!0),E=$.useRef(null);$.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),k(!1);return}try{v("🔥 Connecting to Firebase...");const V=ze(Ue,"students",t.username,"progress","foundation"),U=await We(V);if(U.exists()){const W=U.data();b(W.lessons||{}),T({totalXP:W.totalXP||0,completedLessons:Object.keys(W.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Foundation progress loaded")}else b({}),T({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New student initialized");k(!1)}catch(V){console.error("Firebase Error:",V),v("❌ Firebase connection failed"),k(!1),b({"foundation-01":{status:"completed",score:5,attempts:1},"foundation-02":{status:"completed",score:4,attempts:2}})}})()},[t]);const S=async(N,V,U=1)=>{if(t!=null&&t.username)try{const W=V*10+(V===5?25:0),oe=Date.now(),ue={lessonId:N,score:V,attempts:U,xpEarned:W,completedAt:oe,status:"completed"};b(de=>({...de,[N]:ue}));const vt=ze(Ue,"students",t.username,"progress","foundation"),_t=await We(vt);let Pe={lessons:{[N]:ue},totalXP:W,lastUpdated:oe,series:"foundation"};if(_t.exists()){const de=_t.data();Pe={...de,lessons:{...de.lessons,[N]:ue},totalXP:(de.totalXP||0)+W,lastUpdated:oe}}await ii(vt,Pe,{merge:!0}),T(de=>({...de,totalXP:Pe.totalXP,completedLessons:Object.keys(Pe.lessons).length})),console.log("✅ Firebase Save Success:",{lessonId:N,score:V,xpEarned:W})}catch(W){console.error("❌ Firebase Save Error:",W)}},le=()=>{E.current&&(E.current.paused?(E.current.play(),h(Math.max(u,20))):E.current.pause())},ve=()=>{E.current&&(E.current.currentTime=Math.max(0,E.current.currentTime-10))},be=()=>{E.current&&(E.current.currentTime=Math.min(E.current.duration,E.current.currentTime+10))},_e=N=>{I(N),E.current&&(E.current.playbackRate=N)},z=N=>{const V=is.find(U=>U.id===N);V&&(i(V),l(new Array(V.questions.length).fill(null)),h(0),y("Listen to Audio"),r("lesson"),M(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},G=(N,V)=>{const U=[...o];U[N]=V,l(U);const W=U.filter(ue=>ue!==null).length,oe=20+W/s.questions.length*80;h(oe),y(`${W}/5 Questions Answered`)},X=async()=>{const N=o.reduce((W,oe,ue)=>W+(oe===s.questions[ue].correct?1:0),0),V=L[s.id],U=V?V.attempts+1:1;await S(s.id,N,U),console.log(`✅ Foundation Lesson ${s.id} saved to Firebase! Score: ${N}/5, Attempts: ${U}`),A(!0)},Y=()=>{const N=is.findIndex(U=>U.id===s.id),V=is[N+1];A(!1),V?z(V.id):(r("selection"),alert("🎉 Congratulations! Foundation Course Complete! 🌟"))},se=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},ge=()=>{s&&(A(!1),l(new Array(s.questions.length).fill(null)),M(Date.now()),h(0),y("Listen to Audio"),E.current&&(E.current.currentTime=0,E.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},ye=N=>{const V=L[N];return V?{status:"Completed",class:"status-completed",score:V.score,attempts:V.attempts,xpEarned:V.xpEarned}:{status:"Available",class:"status-not-started"}},Ne=o.filter(N=>N!==null).length,Te=Ne===(s==null?void 0:s.questions.length);return x?c.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-6xl mb-4"},"🔥"),c.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),c.createElement("p",{className:"text-gray-600"},"Loading your Foundation progress"))):n==="selection"?c.createElement("div",{className:"sophisticated-bg min-h-screen"},c.createElement("div",{className:"foundation-header"},c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},c.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),c.createElement("div",{className:"text-center mt-6"},c.createElement("div",{className:"text-5xl mb-4"},"🌟"),c.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"A1 Foundation Course"),c.createElement("p",{className:"text-blue-100 mb-4"},"Complete English basics with 10 interactive audio lessons"),c.createElement("div",{className:"foundation-accent-card rounded-lg p-3"},c.createElement("p",{className:"text-white font-medium"},"🎯 Questions match audio content • 📊 Track progress • 🏆 Earn XP!"))))),c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},c.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},c.createElement("div",{className:"text-sm"},c.createElement("span",{className:"text-primary-blue font-medium"},p),F&&c.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Total XP: ",F.totalXP," • Lessons: ",F.completedLessons,"/10")))),c.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},c.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},is.map((N,V)=>{const U=ye(N.id);return c.createElement("div",{key:N.id,className:"lesson-card foundation-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>z(N.id)},c.createElement("div",{className:"flex items-center justify-between mb-3"},c.createElement("div",{className:"text-2xl"},N.icon),c.createElement("span",{className:`status-badge ${U.class}`},U.status)),c.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",V+1,": ",N.title),c.createElement("p",{className:"text-sm text-gray-600 mb-3"},N.description),c.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},c.createElement("span",null,"🎧 ",N.duration),c.createElement("span",{className:"font-semibold text-blue-600"},U.score?`✅ ${U.score}/5`:"+50 XP")),U.attempts>0&&c.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",U.attempts," • Score: ",U.score||0,"/5 • XP: ",U.xpEarned||0))}))),c.createElement("style",{jsx:!0},`
          .sophisticated-bg {
            background: linear-gradient(135deg, #f8fafc, #e2e8f0);
            min-height: 100vh;
          }
          
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
        `)):c.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},c.createElement("div",{className:"foundation-lesson-card rounded-xl p-6 mb-6"},c.createElement("div",{className:"flex items-center justify-between mb-4"},c.createElement("button",{onClick:se,className:"text-blue-600 text-sm hover:underline"},"← Back to Foundation"),c.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",is.findIndex(N=>N.id===s.id)+1," of ",is.length)),c.createElement("h2",{className:"text-2xl font-bold text-blue-600 mb-2"},s.title),c.createElement("p",{className:"text-gray-600 mb-4"},s.description),c.createElement("div",{className:"progress-card rounded-lg p-3"},c.createElement("div",{className:"flex justify-between text-sm mb-2"},c.createElement("span",null,"Lesson Progress"),c.createElement("span",null,m)),c.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},c.createElement("div",{className:"bg-blue-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),c.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},c.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🎧 Listen to the Audio"),c.createElement("audio",{ref:E,src:s.audioFile,onLoadedData:()=>{console.log("✅ Audio loaded:",s.audioFile),E.current&&(E.current.playbackRate=w)},onError:N=>{console.error("❌ Audio error:",N.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{E.current&&E.current.duration>0&&E.current.currentTime/E.current.duration*100>10&&h(Math.max(u,20))},className:"hidden"}),c.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},c.createElement("button",{onClick:ve,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),c.createElement("button",{onClick:le,className:"btn-audio bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},"▶️ Play/Pause"),c.createElement("button",{onClick:be,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),c.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},c.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(N=>c.createElement("button",{key:N,onClick:()=>_e(N),className:`px-3 py-1 rounded ${w===N?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},N,"x"))),c.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🎯 Listen carefully and then answer the questions below")),c.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((N,V)=>c.createElement("div",{key:V,className:"question-card rounded-xl p-6"},c.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},V+1,". ",N.question),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},N.options.map((U,W)=>c.createElement("button",{key:W,onClick:()=>G(V,W),className:`p-3 rounded-lg text-left transition-all ${o[V]===W?"bg-blue-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+W),". ",U)))))),c.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},c.createElement("button",{onClick:X,disabled:!Te,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${Te?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},Te?"🔥 Save to Firebase - Ready! 🌟":`Submit Answers (${Ne}/5 Complete)`),c.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Questions now match the audio content!"))),_&&c.createElement(rN,{lesson:s,userAnswers:o,onNext:Y,onReview:()=>P(!0),onClose:()=>A(!1),onRestart:ge}),C&&c.createElement(sN,{lesson:s,userAnswers:o,onClose:()=>P(!1)}),c.createElement("style",{jsx:!0},`
        .foundation-lesson-card, .audio-card, .question-card, .submit-card {
          background: white;
          border: 2px solid #dbeafe;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
        }
        
        .progress-card {
          background: linear-gradient(135deg, #dbeafe, #e2e8f0);
          border: 2px solid #93c5fd;
        }
        
        .btn-audio {
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
      `))}function rN({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((m,y,_)=>m+(y===t.questions[_].correct?1:0),0),l=Math.round(o/5*100),u=o*10+(o===5?25:0),h=o===5;return c.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},c.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-5xl mb-4"},h?"🏆":o>=4?"🌟":"📝"),c.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},h?"Perfect Score!":o>=4?"Great Job!":"Lesson Complete!"),c.createElement("div",{className:"bg-blue-50 rounded-lg p-4 mb-4"},c.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),c.createElement("div",{className:"text-lg text-gray-600 mb-2"},l,"% Correct"),c.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," XP Earned!")),h&&c.createElement("div",{className:"bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-3 mb-4"},c.createElement("div",{className:"text-sm font-semibold text-blue-700 mb-2"},"🎉 Achievement Unlocked!"),c.createElement("div",{className:"font-medium"},"Perfect Foundation Score!")),c.createElement("div",{className:"space-y-3"},c.createElement("button",{onClick:r,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&c.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),c.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Lesson →"),c.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Foundation")))))}function sN({lesson:t,userAnswers:e,onClose:n}){return c.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},c.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},c.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"📝 Answer Review"),c.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,l=r.options[r.correct],u=r.options[i];return c.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},c.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),c.createElement("div",{className:"space-y-1"},c.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&c.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",l)))})),c.createElement("button",{onClick:n,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}const os=[{id:"gaming-01",title:"My Gaming PC Setup",description:"Building the perfect gaming computer setup",duration:"38s",icon:"🖥️",audioFile:"audio/a1-gaming/audio-01-pc-setup.mp3",questions:[{question:"What graphics card does she have?",options:["RTX 3070","RTX 4070","GTX 1080","RX 6700"],correct:1},{question:"How much RAM is in her computer?",options:["8GB","16GB","32GB","64GB"],correct:1},{question:"What type of keyboard switches does she use?",options:["Blue switches","Brown switches","Red switches","Black switches"],correct:2},{question:"How much did she spend on her setup?",options:["$2000","$3000","$4000","$5000"],correct:1},{question:"What happens to her RGB lighting during games?",options:["Turns off","Changes colors when she gets kills","Stays red","Flashes randomly"],correct:1}]},{id:"gaming-02",title:"Online Gaming with Friends",description:"Playing with friends and communicating online",duration:"36s",icon:"🎮",audioFile:"audio/a1-gaming/audio-02-online-gaming.mp3",questions:[{question:"What game do they play together?",options:["Counter-Strike","Valorant","Overwatch","Call of Duty"],correct:1},{question:"What platform do they use to communicate?",options:["Skype","Discord","TeamSpeak","WhatsApp"],correct:1},{question:"What is her role in the team?",options:["Tank","DPS","Support","Sniper"],correct:2},{question:"How many games did they win last week?",options:["5","6","7","8"],correct:2},{question:"Where does her best friend live?",options:["Rio de Janeiro","São Paulo","Belo Horizonte","Brasília"],correct:1}]},{id:"gaming-03",title:"My Favorite Game Genres",description:"Different types of games and their characteristics",duration:"40s",icon:"🕹️",audioFile:"audio/a1-gaming/audio-03-game-genres.mp3",questions:[{question:"What is her favorite game genre?",options:["FPS","RPG","Strategy","Racing"],correct:1},{question:"Which RPG is her favorite?",options:["Skyrim","Final Fantasy","The Witcher 3","Dark Souls"],correct:2},{question:"How many hours did she play her favorite RPG?",options:["50 hours","75 hours","100 hours","150 hours"],correct:2},{question:"Why doesn't she like horror games?",options:["Bad graphics","Too expensive","Too scary","Boring story"],correct:2},{question:"Where does she find indie games?",options:["PlayStation Store","Steam","Epic Games","Xbox Store"],correct:1}]},{id:"gaming-04",title:"Esports Tournament",description:"Professional gaming competitions and events",duration:"39s",icon:"🏆",audioFile:"audio/a1-gaming/audio-04-esports-tournament.mp3",questions:[{question:"What game is the tournament for?",options:["Valorant","Counter-Strike","League of Legends","FIFA"],correct:2},{question:"How many teams are participating?",options:["16","24","32","64"],correct:2},{question:"How much is the entry fee per player?",options:["25 reais","50 reais","75 reais","100 reais"],correct:1},{question:"How much does first place win?",options:["3,000 reais","4,000 reais","5,000 reais","6,000 reais"],correct:2},{question:"How many hours do they practice daily?",options:["2 hours","3 hours","4 hours","5 hours"],correct:2}]},{id:"gaming-05",title:"Streaming on Twitch",description:"Broadcasting gameplay and building audience",duration:"37s",icon:"📺",audioFile:"audio/a1-gaming/audio-05-streaming-twitch.mp3",questions:[{question:"How many followers does she have on Twitch?",options:["650","750","850","950"],correct:2},{question:"Which days does she stream?",options:["Monday and Wednesday","Tuesday and Thursday","Friday and Saturday","Sunday and Monday"],correct:1},{question:"What time does she start streaming?",options:["7 PM","8 PM","9 PM","10 PM"],correct:1},{question:"How many viewers was her personal record?",options:["150","200","250","300"],correct:1},{question:"What type of microphone does she use?",options:["Red microphone","Black microphone","Blue microphone","Silver microphone"],correct:2}]},{id:"gaming-06",title:"Game Review Channel",description:"Analyzing and rating video games",duration:"41s",icon:"⭐",audioFile:"audio/a1-gaming/audio-06-game-reviews.mp3",questions:[{question:"What score did she give FIFA?",options:["6 out of 10","7 out of 10","8 out of 10","9 out of 10"],correct:1},{question:"What problem did she find with FIFA?",options:["Bad graphics","Slow gameplay","Too many bugs","Expensive price"],correct:2},{question:"How many hours did she play before reviewing?",options:["20 hours","25 hours","30 hours","35 hours"],correct:2},{question:"How many views did her video get on the first day?",options:["3,000","4,000","5,000","6,000"],correct:2},{question:"What type of game will she review next week?",options:["Racing game","Sports game","Horror game","Puzzle game"],correct:2}]},{id:"gaming-07",title:"Mobile Gaming Addiction",description:"Gaming on smartphones and tablets",duration:"35s",icon:"📱",audioFile:"audio/a1-gaming/audio-07-mobile-gaming.mp3",questions:[{question:"Which mobile game does she play?",options:["Free Fire","PUBG Mobile","Call of Duty Mobile","Fortnite Mobile"],correct:1},{question:"How many hours does she play daily?",options:["1 hour","2 hours","3 hours","4 hours"],correct:1},{question:"How much money has she spent this year?",options:["100 reais","150 reais","200 reais","250 reais"],correct:2},{question:"How many players are in Battle Royale mode?",options:["50","75","100","150"],correct:2},{question:"What happens to her phone during intensive games?",options:["Gets slow","Gets hot","Loses battery","Crashes"],correct:1}]},{id:"gaming-08",title:"Gaming Nostalgia",description:"Classic games and retro gaming culture",duration:"42s",icon:"🕰️",audioFile:"audio/a1-gaming/audio-08-gaming-nostalgia.mp3",questions:[{question:"What was her first gaming console?",options:["Nintendo 64","PlayStation 1","Sega Genesis","Game Boy"],correct:1},{question:"How old was she when she got her first console?",options:["6 years old","7 years old","8 years old","9 years old"],correct:2},{question:"Which classic game does she mention?",options:["Super Mario","Sonic","Crash Bandicoot","Street Fighter"],correct:2},{question:"How often did they take turns with the controller?",options:["Every 15 minutes","Every 30 minutes","Every 45 minutes","Every hour"],correct:1},{question:"What does she use to play old games now?",options:["Original consoles","Remasters","Emulators","Mobile apps"],correct:2}]},{id:"gaming-09",title:"Perfect Gaming Setup",description:"Creating the ideal gaming environment",duration:"44s",icon:"🛠️",audioFile:"audio/a1-gaming/audio-09-perfect-setup.mp3",questions:[{question:"Where is her gaming room located?",options:["Bedroom","Living room","Basement","Attic"],correct:2},{question:"What color are the walls painted?",options:["White","Blue","Red","Black"],correct:3},{question:"How many monitors fit on her desk?",options:["2","3","4","5"],correct:1},{question:"How much did her gaming chair cost?",options:["1,500 reais","2,000 reais","2,500 reais","3,000 reais"],correct:2},{question:"How often does she upgrade her setup?",options:["Every year","Every two years","Every three years","Every five years"],correct:1}]},{id:"gaming-10",title:"Virtual Reality Future",description:"VR technology and immersive gaming experiences",duration:"40s",icon:"🥽",audioFile:"audio/a1-gaming/audio-10-virtual-reality.mp3",questions:[{question:"Which VR headset did she try?",options:["PlayStation VR","Oculus Quest 2","HTC Vive","Valve Index"],correct:1},{question:"How much do VR headsets cost in Brazil?",options:["2,000 reais","2,500 reais","3,000 reais","3,500 reais"],correct:2},{question:"In how many years does she think VR will be more accessible?",options:["3 years","4 years","5 years","6 years"],correct:2},{question:"What is still a problem with VR for some people?",options:["High price","Motion sickness","Heavy weight","Bad graphics"],correct:1},{question:"When is she planning to buy her own VR headset?",options:["This year","Next year","In 2 years","In 3 years"],correct:1}]}];function iN({user:t,onBack:e}){const[n,r]=$.useState("selection"),[s,i]=$.useState(null),[o,l]=$.useState([]),[u,h]=$.useState(0),[m,y]=$.useState("Listen to Audio"),[_,A]=$.useState(!1),[C,P]=$.useState(!1),[L,b]=$.useState({}),[w,I]=$.useState(1),[D,M]=$.useState(null),[F,T]=$.useState(null),[p,v]=$.useState("🔥 Loading Firebase..."),[x,k]=$.useState(!0),E=$.useRef(null);$.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),k(!1);return}try{v("🔥 Connecting to Firebase...");const V=ze(Ue,"students",t.username,"progress","gaming"),U=await We(V);if(U.exists()){const W=U.data();b(W.lessons||{}),T({totalXP:W.totalXP||0,completedLessons:Object.keys(W.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Gaming progress loaded")}else b({}),T({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New gamer initialized");k(!1)}catch(V){console.error("Firebase Error:",V),v("❌ Firebase connection failed"),k(!1),b({"gaming-01":{status:"completed",score:5,attempts:1},"gaming-02":{status:"completed",score:4,attempts:1}})}})()},[t]);const S=async(N,V,U=1)=>{if(t!=null&&t.username)try{const W=V*10+(V===5?25:0),oe=Date.now(),ue={lessonId:N,score:V,attempts:U,xpEarned:W,completedAt:oe,status:"completed",series:"gaming"};b(de=>({...de,[N]:ue}));const vt=ze(Ue,"students",t.username,"progress","gaming"),_t=await We(vt);let Pe={lessons:{[N]:ue},totalXP:W,lastUpdated:oe,series:"gaming"};if(_t.exists()){const de=_t.data();Pe={...de,lessons:{...de.lessons,[N]:ue},totalXP:(de.totalXP||0)+W,lastUpdated:oe}}await ii(vt,Pe,{merge:!0}),T(de=>({...de,totalXP:Pe.totalXP,completedLessons:Object.keys(Pe.lessons).length})),Object.keys(Pe.lessons).length===10&&console.log("🏆 GAMING WORLD COMPLETE! Game Master Achievement Unlocked!"),console.log("✅ Firebase Gaming Save Success:",{lessonId:N,score:V,xpEarned:W})}catch(W){console.error("❌ Firebase Gaming Save Error:",W)}},le=()=>{E.current&&(E.current.paused?(E.current.play(),h(Math.max(u,20))):E.current.pause())},ve=()=>{E.current&&(E.current.currentTime=Math.max(0,E.current.currentTime-10))},be=()=>{E.current&&(E.current.currentTime=Math.min(E.current.duration,E.current.currentTime+10))},_e=N=>{I(N),E.current&&(E.current.playbackRate=N)},z=N=>{const V=os.find(U=>U.id===N);V&&(i(V),l(new Array(V.questions.length).fill(null)),h(0),y("Listen to Audio"),r("lesson"),M(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},G=(N,V)=>{const U=[...o];U[N]=V,l(U);const W=U.filter(ue=>ue!==null).length,oe=20+W/s.questions.length*80;h(oe),y(`${W}/5 Questions Answered`)},X=async()=>{const N=o.reduce((W,oe,ue)=>W+(oe===s.questions[ue].correct?1:0),0),V=L[s.id],U=V?V.attempts+1:1;await S(s.id,N,U),console.log(`✅ Gaming Lesson ${s.id} saved to Firebase! Score: ${N}/5, Attempts: ${U}`),A(!0)},Y=()=>{const N=os.findIndex(U=>U.id===s.id),V=os[N+1];A(!1),V?z(V.id):(r("selection"),alert("🎉 Congratulations! Gaming World Complete! 🎮 Game Master Achievement Unlocked!"))},se=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},ge=()=>{s&&(A(!1),l(new Array(s.questions.length).fill(null)),M(Date.now()),h(0),y("Listen to Audio"),E.current&&(E.current.currentTime=0,E.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},ye=N=>{const V=L[N];return V?{status:"Completed",class:"status-completed",score:V.score,attempts:V.attempts,xpEarned:V.xpEarned}:{status:"Available",class:"status-not-started"}},Ne=o.filter(N=>N!==null).length,Te=Ne===(s==null?void 0:s.questions.length);return x?c.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-6xl mb-4"},"🎮"),c.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),c.createElement("p",{className:"text-gray-600"},"Loading your Gaming World progress"))):n==="selection"?c.createElement("div",{className:"sophisticated-bg min-h-screen"},c.createElement("div",{className:"gaming-header"},c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},c.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),c.createElement("div",{className:"text-center mt-6"},c.createElement("div",{className:"text-5xl mb-4"},"🎮"),c.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"Gaming World"),c.createElement("p",{className:"text-blue-100 mb-4"},"Learn English through gaming vocabulary and Brazilian gaming culture"),c.createElement("div",{className:"gaming-accent-card rounded-lg p-3"},c.createElement("p",{className:"text-white font-medium"},"🎯 Questions match audio content • 🏆 Esports • 🎧 Gaming English!"))))),c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},c.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},c.createElement("div",{className:"text-sm"},c.createElement("span",{className:"text-primary-blue font-medium"},p),F&&c.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Gaming XP: ",F.totalXP," • Lessons: ",F.completedLessons,"/10")))),c.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},c.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},os.map((N,V)=>{const U=ye(N.id);return c.createElement("div",{key:N.id,className:"lesson-card gaming-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>z(N.id)},c.createElement("div",{className:"flex items-center justify-between mb-3"},c.createElement("div",{className:"text-2xl"},N.icon),c.createElement("span",{className:`status-badge ${U.class}`},U.status)),c.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",V+1,": ",N.title),c.createElement("p",{className:"text-sm text-gray-600 mb-3"},N.description),c.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},c.createElement("span",null,"🎧 ",N.duration),c.createElement("span",{className:"font-semibold text-purple-600"},U.score?`✅ ${U.score}/5`:"+50 XP")),U.attempts>0&&c.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",U.attempts," • Score: ",U.score||0,"/5 • XP: ",U.xpEarned||0))}))),c.createElement("style",{jsx:!0},`
          .sophisticated-bg {
            background: linear-gradient(135deg, #f8fafc, #e2e8f0);
            min-height: 100vh;
          }
          
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
        `)):c.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},c.createElement("div",{className:"gaming-lesson-card rounded-xl p-6 mb-6"},c.createElement("div",{className:"flex items-center justify-between mb-4"},c.createElement("button",{onClick:se,className:"text-purple-600 text-sm hover:underline"},"← Back to Gaming World"),c.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",os.findIndex(N=>N.id===s.id)+1," of ",os.length)),c.createElement("h2",{className:"text-2xl font-bold text-purple-600 mb-2"},s.title),c.createElement("p",{className:"text-gray-600 mb-4"},s.description),c.createElement("div",{className:"progress-card rounded-lg p-3"},c.createElement("div",{className:"flex justify-between text-sm mb-2"},c.createElement("span",null,"Lesson Progress"),c.createElement("span",null,m)),c.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},c.createElement("div",{className:"bg-purple-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),c.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},c.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🎮 Listen to the Gaming Audio"),c.createElement("audio",{ref:E,src:s.audioFile,onLoadedData:()=>{console.log("✅ Gaming Audio loaded:",s.audioFile),E.current&&(E.current.playbackRate=w)},onError:N=>{console.error("❌ Gaming Audio error:",N.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{E.current&&E.current.duration>0&&E.current.currentTime/E.current.duration*100>10&&h(Math.max(u,20))},className:"hidden"}),c.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},c.createElement("button",{onClick:ve,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),c.createElement("button",{onClick:le,className:"btn-audio bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},"▶️ Play/Pause"),c.createElement("button",{onClick:be,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),c.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},c.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(N=>c.createElement("button",{key:N,onClick:()=>_e(N),className:`px-3 py-1 rounded ${w===N?"bg-purple-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},N,"x"))),c.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🎮 Listen to gaming content and then answer the questions below")),c.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((N,V)=>c.createElement("div",{key:V,className:"question-card rounded-xl p-6"},c.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},V+1,". ",N.question),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},N.options.map((U,W)=>c.createElement("button",{key:W,onClick:()=>G(V,W),className:`p-3 rounded-lg text-left transition-all ${o[V]===W?"bg-purple-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+W),". ",U)))))),c.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},c.createElement("button",{onClick:X,disabled:!Te,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${Te?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},Te?"🔥 Save Gaming Progress - Ready! 🎮":`Submit Answers (${Ne}/5 Complete)`),c.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Questions now match the gaming audio content!"))),_&&c.createElement(oN,{lesson:s,userAnswers:o,onNext:Y,onReview:()=>P(!0),onClose:()=>A(!1),onRestart:ge}),C&&c.createElement(aN,{lesson:s,userAnswers:o,onClose:()=>P(!1)}),c.createElement("style",{jsx:!0},`
        .gaming-lesson-card, .audio-card, .question-card, .submit-card {
          background: white;
          border: 2px solid #e9d5ff;
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15);
        }
        
        .progress-card {
          background: linear-gradient(135deg, #e9d5ff, #e2e8f0);
          border: 2px solid #c4b5fd;
        }
        
        .btn-audio {
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
      `))}function oN({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((m,y,_)=>m+(y===t.questions[_].correct?1:0),0),l=Math.round(o/5*100),u=o*10+(o===5?25:0),h=o===5;return c.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},c.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-5xl mb-4"},h?"🏆":o>=4?"🎮":"📝"),c.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},h?"Perfect Gaming Score!":o>=4?"Great Gaming!":"Lesson Complete!"),c.createElement("div",{className:"bg-purple-50 rounded-lg p-4 mb-4"},c.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),c.createElement("div",{className:"text-lg text-gray-600 mb-2"},l,"% Correct"),c.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," Gaming XP Earned!")),h&&c.createElement("div",{className:"bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-3 mb-4"},c.createElement("div",{className:"text-sm font-semibold text-purple-700 mb-2"},"🎉 Achievement Unlocked!"),c.createElement("div",{className:"font-medium"},"🎮 Perfect Gaming Score!")),c.createElement("div",{className:"space-y-3"},c.createElement("button",{onClick:r,className:"w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&c.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),c.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Gaming Lesson →"),c.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Gaming World")))))}function aN({lesson:t,userAnswers:e,onClose:n}){return c.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},c.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},c.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"📝 Answer Review"),c.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,l=r.options[r.correct],u=r.options[i];return c.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},c.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),c.createElement("div",{className:"space-y-1"},c.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&c.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",l)))})),c.createElement("button",{onClick:n,className:"w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}const as=[{id:"movies-01",title:"Going to the Cinema",description:"Learn about cinema experiences and movie outings",duration:"38s",icon:"🎬",audioFile:"audio/a1-movies/audio-01-cinema-date.mp3",questions:[{question:"Who did she go to the cinema with?",options:["Her sister","Her friend","Her boyfriend","Her mom"],correct:2},{question:"How much did each ticket cost?",options:["20 reais","25 reais","30 reais","35 reais"],correct:1},{question:"What type of movie did they watch?",options:["Comedy","Horror","Marvel movie","Romance"],correct:2},{question:"How early did they arrive?",options:["10 minutes","15 minutes","20 minutes","30 minutes"],correct:1},{question:"Where did they go after the movie?",options:["Home","McDonald's","Another cinema","The park"],correct:1}]},{id:"movies-02",title:"Netflix Night at Home",description:"Streaming and home entertainment vocabulary",duration:"36s",icon:"📺",audioFile:"audio/a1-movies/audio-02-netflix-night.mp3",questions:[{question:"Which series did she watch?",options:["The Crown","Stranger Things","Bridgerton","Money Heist"],correct:1},{question:"How many episodes did she watch?",options:["2","3","4","5"],correct:1},{question:"What did she drink while watching?",options:["Coffee","Tea","Hot chocolate","Soda"],correct:2},{question:"What time did she start watching?",options:["7 PM","8 PM","9 PM","10 PM"],correct:1},{question:"How many times did she pause?",options:["Once","Twice","Three times","Four times"],correct:1}]},{id:"movies-03",title:"Movie Genres",description:"Express preferences about different film types",duration:"40s",icon:"🎭",audioFile:"audio/a1-movies/audio-03-movie-genres.mp3",questions:[{question:"What is her favorite movie genre?",options:["Action","Horror","Romantic comedies","Science fiction"],correct:2},{question:"Which actor is in her favorite rom-com?",options:["Brad Pitt","Ryan Gosling","Leonardo DiCaprio","Will Smith"],correct:1},{question:"Why does she hate horror movies?",options:["They're boring","They give her nightmares","They're too long","They're expensive"],correct:1},{question:"How old is her nephew?",options:["4 years old","5 years old","6 years old","7 years old"],correct:2},{question:"What does she think about science fiction?",options:["It's boring","It's scary","It's interesting but complicated","It's her favorite"],correct:2}]},{id:"movies-04",title:"Binge Watching",description:"Learn about marathon viewing and streaming habits",duration:"39s",icon:"📱",audioFile:"audio/a1-movies/audio-04-binge-watching.mp3",questions:[{question:"Which series did she binge watch?",options:["Stranger Things","Wednesday","The Crown","Emily in Paris"],correct:1},{question:"How many episodes are in the first season?",options:["6","7","8","10"],correct:2},{question:"What did she order on Saturday?",options:["Chinese food","Pizza","Hamburgers","Sushi"],correct:1},{question:"What time did she start on Saturday?",options:["8 AM","9 AM","10 AM","11 AM"],correct:1},{question:"How many episodes will she watch per day next weekend?",options:["1","2","3","4"],correct:1}]},{id:"movies-05",title:"Movie Reviews",description:"Writing and sharing opinions about films",duration:"37s",icon:"⭐",audioFile:"audio/a1-movies/audio-05-movie-reviews.mp3",questions:[{question:"How many stars did she give Spider-Man?",options:["3 out of 5","4 out of 5","5 out of 5","2 out of 5"],correct:1},{question:"What was excellent about the movie?",options:["The story","The music","The acting","The length"],correct:2},{question:"How many views did her review get in the first hour?",options:["300","400","500","600"],correct:2},{question:"How many times does she watch movies before reviewing?",options:["Once","Twice","Three times","Four times"],correct:1},{question:"How does writing reviews help her English?",options:["Grammar practice","Speaking practice","Vocabulary improvement","Listening practice"],correct:2}]},{id:"movies-06",title:"Streaming Services",description:"Compare platforms and subscription costs",duration:"41s",icon:"💻",audioFile:"audio/a1-movies/audio-06-streaming-services.mp3",questions:[{question:"How much does Netflix cost per month?",options:["30 reais","35 reais","40 reais","45 reais"],correct:1},{question:"Which service costs 15 reais monthly?",options:["Netflix","Disney Plus","Amazon Prime","HBO Max"],correct:2},{question:"How many hours does she watch daily?",options:["3 hours","4 hours","5 hours","6 hours"],correct:1},{question:"Which show does she mention from Netflix?",options:["Wednesday","Stranger Things","Squid Game","The Crown"],correct:2},{question:"What extra benefit does Amazon Prime include?",options:["Free movies","Free shipping","Free music","Free books"],correct:1}]},{id:"movies-07",title:"Cinema Date Night",description:"Dating and social movie experiences",duration:"35s",icon:"💕",audioFile:"audio/a1-movies/audio-07-cinema-first-date.mp3",questions:[{question:"What time are they meeting?",options:["7:00 PM","7:30 PM","8:00 PM","8:30 PM"],correct:1},{question:"Where did she meet her date?",options:["Instagram","Facebook","Tinder","Work"],correct:2},{question:"What type of movie did she choose?",options:["Horror","Action","Romantic comedy","Drama"],correct:2},{question:"What color dress is she wearing?",options:["Red","Black","Blue","White"],correct:2},{question:"Why are cinema dates perfect for first meetings?",options:["They're cheap","Movies are fun","You can talk about the movie","It's dark"],correct:2}]},{id:"movies-08",title:"Classic vs Modern",description:"Compare old and new cinema styles",duration:"42s",icon:"🎞️",audioFile:"audio/a1-movies/audio-08-classic-vs-modern.mp3",questions:[{question:"Which classic movie did she watch?",options:["Gone with the Wind","Casablanca","Roman Holiday","Singin' in the Rain"],correct:1},{question:"What year was the classic movie made?",options:["1940","1941","1942","1943"],correct:2},{question:"Which modern movie did she compare it to?",options:["Avatar","Titanic","The Avengers","Star Wars"],correct:1},{question:"What do classic movies have that's better?",options:["Special effects","Sound quality","Storytelling and dialogue","Action scenes"],correct:2},{question:"What do modern films have that's incredible?",options:["Stories","Actors","Music","Special effects and sound"],correct:3}]},{id:"movies-09",title:"Theater Experience",description:"IMAX, sound systems, and cinema atmosphere",duration:"44s",icon:"🏛️",audioFile:"audio/a1-movies/audio-09-theater-experience.mp3",questions:[{question:"Which movie did she watch in IMAX?",options:["Avatar","Dune","Top Gun","Spider-Man"],correct:1},{question:"Which row does she prefer for the best viewing angle?",options:["Row F","Row G","Row H","Row I"],correct:2},{question:"What made her seat vibrate?",options:["The air conditioning","Other people","Sound effects","The movie length"],correct:2},{question:"What does she find annoying at the cinema?",options:["Expensive tickets","People talking","Loud sound","Long lines"],correct:1},{question:"When does she think theaters are worth the expense?",options:["For any movie","For romantic films","For big blockbusters","For horror movies"],correct:2}]},{id:"movies-10",title:"Awards Night",description:"Oscar parties and movie award celebrations",duration:"40s",icon:"🏆",audioFile:"audio/a1-movies/audio-10-awards-night.mp3",questions:[{question:"How many friends came to her Oscar party?",options:["6","7","8","9"],correct:2},{question:"What time did they start watching in Brazilian time?",options:["8 PM","9 PM","10 PM","11 PM"],correct:1},{question:"How many categories did she guess correctly?",options:["5","6","7","8"],correct:1},{question:"Who won their betting pool?",options:["She did","Carlos","Her sister","Nobody"],correct:1},{question:"What prize did the winner receive?",options:["Money","A movie ticket","A bottle of champagne","A trophy"],correct:2}]}];function lN({user:t,onBack:e}){const[n,r]=$.useState("selection"),[s,i]=$.useState(null),[o,l]=$.useState([]),[u,h]=$.useState(0),[m,y]=$.useState("Listen to Audio"),[_,A]=$.useState(!1),[C,P]=$.useState(!1),[L,b]=$.useState({}),[w,I]=$.useState(1),[D,M]=$.useState(null),[F,T]=$.useState(null),[p,v]=$.useState("🔥 Loading Firebase..."),[x,k]=$.useState(!0),E=$.useRef(null);$.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),k(!1);return}try{v("🔥 Connecting to Firebase...");const V=ze(Ue,"students",t.username,"progress","movies"),U=await We(V);if(U.exists()){const W=U.data();b(W.lessons||{}),T({totalXP:W.totalXP||0,completedLessons:Object.keys(W.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Movies progress loaded")}else b({}),T({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New student initialized");k(!1)}catch(V){console.error("Firebase Error:",V),v("❌ Firebase connection failed"),k(!1),b({"movies-01":{status:"completed",score:5,attempts:1},"movies-02":{status:"completed",score:4,attempts:2}})}})()},[t]);const S=async(N,V,U=1)=>{if(t!=null&&t.username)try{const W=V*10+(V===5?25:0),oe=Date.now(),ue={lessonId:N,score:V,attempts:U,xpEarned:W,completedAt:oe,status:"completed"};b(de=>({...de,[N]:ue}));const vt=ze(Ue,"students",t.username,"progress","movies"),_t=await We(vt);let Pe={lessons:{[N]:ue},totalXP:W,lastUpdated:oe,series:"movies"};if(_t.exists()){const de=_t.data();Pe={...de,lessons:{...de.lessons,[N]:ue},totalXP:(de.totalXP||0)+W,lastUpdated:oe}}await ii(vt,Pe,{merge:!0}),T(de=>({...de,totalXP:Pe.totalXP,completedLessons:Object.keys(Pe.lessons).length})),console.log("✅ Firebase Save Success:",{lessonId:N,score:V,xpEarned:W})}catch(W){console.error("❌ Firebase Save Error:",W)}},le=()=>{E.current&&(E.current.paused?(E.current.play(),h(Math.max(u,20))):E.current.pause())},ve=()=>{E.current&&(E.current.currentTime=Math.max(0,E.current.currentTime-10))},be=()=>{E.current&&(E.current.currentTime=Math.min(E.current.duration,E.current.currentTime+10))},_e=N=>{I(N),E.current&&(E.current.playbackRate=N)},z=N=>{const V=as.find(U=>U.id===N);V&&(i(V),l(new Array(V.questions.length).fill(null)),h(0),y("Listen to Audio"),r("lesson"),M(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},G=(N,V)=>{const U=[...o];U[N]=V,l(U);const W=U.filter(ue=>ue!==null).length,oe=20+W/s.questions.length*80;h(oe),y(`${W}/5 Questions Answered`)},X=async()=>{const N=o.reduce((W,oe,ue)=>W+(oe===s.questions[ue].correct?1:0),0),V=L[s.id],U=V?V.attempts+1:1;await S(s.id,N,U),console.log(`✅ Movies Lesson ${s.id} saved to Firebase! Score: ${N}/5, Attempts: ${U}`),A(!0)},Y=()=>{const N=as.findIndex(U=>U.id===s.id),V=as[N+1];A(!1),V?z(V.id):(r("selection"),alert("🎬 Congratulations! Movie Magic Course Complete! 🏆"))},se=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},ge=()=>{s&&(A(!1),l(new Array(s.questions.length).fill(null)),M(Date.now()),h(0),y("Listen to Audio"),E.current&&(E.current.currentTime=0,E.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},ye=N=>{const V=L[N];return V?{status:"Completed",class:"status-completed",score:V.score,attempts:V.attempts,xpEarned:V.xpEarned}:{status:"Available",class:"status-not-started"}},Ne=o.filter(N=>N!==null).length,Te=Ne===(s==null?void 0:s.questions.length);return x?c.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-6xl mb-4"},"🎬"),c.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),c.createElement("p",{className:"text-gray-600"},"Loading your Movies progress"))):n==="selection"?c.createElement("div",{className:"sophisticated-bg min-h-screen"},c.createElement("div",{className:"movies-header"},c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},c.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),c.createElement("div",{className:"text-center mt-6"},c.createElement("div",{className:"text-5xl mb-4"},"🎬"),c.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"Movie Magic Course"),c.createElement("p",{className:"text-red-100 mb-4"},"Learn English through cinema and entertainment!"),c.createElement("div",{className:"movies-accent-card rounded-lg p-3"},c.createElement("p",{className:"text-white font-medium"},"🎭 Cinema vocabulary • 📱 Streaming culture • 🏆 Earn XP!"))))),c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},c.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},c.createElement("div",{className:"text-sm"},c.createElement("span",{className:"text-primary-red font-medium"},p),F&&c.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Total XP: ",F.totalXP," • Lessons: ",F.completedLessons,"/10")))),c.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},c.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},as.map((N,V)=>{const U=ye(N.id);return c.createElement("div",{key:N.id,className:"lesson-card movies-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>z(N.id)},c.createElement("div",{className:"flex items-center justify-between mb-3"},c.createElement("div",{className:"text-2xl"},N.icon),c.createElement("span",{className:`status-badge ${U.class}`},U.status)),c.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",V+1,": ",N.title),c.createElement("p",{className:"text-sm text-gray-600 mb-3"},N.description),c.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},c.createElement("span",null,"🎧 ",N.duration),c.createElement("span",{className:"font-semibold text-red-600"},U.score?`✅ ${U.score}/5`:"+50 XP")),U.attempts>0&&c.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",U.attempts," • Score: ",U.score||0,"/5 • XP: ",U.xpEarned||0))}))),c.createElement("style",{jsx:!0},`
          .sophisticated-bg {
            background: linear-gradient(135deg, #f8fafc, #fee2e2);
            min-height: 100vh;
          }
          
          .movies-header {
            background: linear-gradient(135deg, #dc2626, #b91c1c);
            box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3);
          }
          
          .movies-accent-card {
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
          }
          
          .back-btn {
            background: rgba(255, 255, 255, 0.9);
            color: #b91c1c;
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
          
          .movies-card {
            background: white;
            border: 2px solid #fecaca;
            box-shadow: 0 8px 25px rgba(220, 38, 38, 0.15);
          }
          
          .movies-card:hover {
            border-color: #dc2626;
            box-shadow: 0 12px 35px rgba(220, 38, 38, 0.25);
          }
          
          .status-badge {
            padding: 0.3rem 0.8rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
          }
          
          .status-completed {
            background: #dc2626;
            color: white;
          }
          
          .status-not-started {
            background: #fecaca;
            color: #b91c1c;
          }

          .status-card {
            background: linear-gradient(135deg, #fecaca, #fee2e2);
            border: 2px solid #f87171;
            color: #b91c1c;
          }

          .text-primary-red {
            color: #dc2626;
          }
        `)):c.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},c.createElement("div",{className:"movies-lesson-card rounded-xl p-6 mb-6"},c.createElement("div",{className:"flex items-center justify-between mb-4"},c.createElement("button",{onClick:se,className:"text-red-600 text-sm hover:underline"},"← Back to Movies"),c.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",as.findIndex(N=>N.id===s.id)+1," of ",as.length)),c.createElement("h2",{className:"text-2xl font-bold text-red-600 mb-2"},s.title),c.createElement("p",{className:"text-gray-600 mb-4"},s.description),c.createElement("div",{className:"progress-card rounded-lg p-3"},c.createElement("div",{className:"flex justify-between text-sm mb-2"},c.createElement("span",null,"Lesson Progress"),c.createElement("span",null,m)),c.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},c.createElement("div",{className:"bg-red-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),c.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},c.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🎧 Listen to the Audio"),c.createElement("audio",{ref:E,src:s.audioFile,onLoadedData:()=>{console.log("✅ Audio loaded:",s.audioFile),E.current&&(E.current.playbackRate=w)},onError:N=>{console.error("❌ Audio error:",N.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{E.current&&E.current.duration>0&&E.current.currentTime/E.current.duration*100>10&&h(Math.max(u,20))},className:"hidden"}),c.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},c.createElement("button",{onClick:ve,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),c.createElement("button",{onClick:le,className:"btn-audio bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},"▶️ Play/Pause"),c.createElement("button",{onClick:be,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),c.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},c.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(N=>c.createElement("button",{key:N,onClick:()=>_e(N),className:`px-3 py-1 rounded ${w===N?"bg-red-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},N,"x"))),c.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🎬 Listen carefully and then answer the questions below")),c.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((N,V)=>c.createElement("div",{key:V,className:"question-card rounded-xl p-6"},c.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},V+1,". ",N.question),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},N.options.map((U,W)=>c.createElement("button",{key:W,onClick:()=>G(V,W),className:`p-3 rounded-lg text-left transition-all ${o[V]===W?"bg-red-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+W),". ",U)))))),c.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},c.createElement("button",{onClick:X,disabled:!Te,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${Te?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},Te?"🎬 Save to Firebase - Ready! 🏆":`Submit Answers (${Ne}/5 Complete)`),c.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Cinema knowledge questions!"))),_&&c.createElement(uN,{lesson:s,userAnswers:o,onNext:Y,onReview:()=>P(!0),onClose:()=>A(!1),onRestart:ge}),C&&c.createElement(cN,{lesson:s,userAnswers:o,onClose:()=>P(!1)}),c.createElement("style",{jsx:!0},`
        .movies-lesson-card, .audio-card, .question-card, .submit-card {
          background: white;
          border: 2px solid #fecaca;
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.15);
        }
        
        .progress-card {
          background: linear-gradient(135deg, #fecaca, #fee2e2);
          border: 2px solid #f87171;
        }
        
        .btn-audio {
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
      `))}function uN({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((m,y,_)=>m+(y===t.questions[_].correct?1:0),0),l=Math.round(o/5*100),u=o*10+(o===5?25:0),h=o===5;return c.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},c.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-5xl mb-4"},h?"🏆":o>=4?"🎬":"🎭"),c.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},h?"Cinema Master!":o>=4?"Great Movie Knowledge!":"Lesson Complete!"),c.createElement("div",{className:"bg-red-50 rounded-lg p-4 mb-4"},c.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),c.createElement("div",{className:"text-lg text-gray-600 mb-2"},l,"% Correct"),c.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," XP Earned!")),h&&c.createElement("div",{className:"bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-3 mb-4"},c.createElement("div",{className:"text-sm font-semibold text-red-700 mb-2"},"🎬 Achievement Unlocked!"),c.createElement("div",{className:"font-medium"},"Perfect Movie Score!")),c.createElement("div",{className:"space-y-3"},c.createElement("button",{onClick:r,className:"w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&c.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),c.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Lesson →"),c.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Movies")))))}function cN({lesson:t,userAnswers:e,onClose:n}){return c.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},c.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},c.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"🎬 Answer Review"),c.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,l=r.options[r.correct],u=r.options[i];return c.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},c.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),c.createElement("div",{className:"space-y-1"},c.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&c.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",l)))})),c.createElement("button",{onClick:n,className:"w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}const ls=[{id:"food-01",title:"Cooking Pasta at Home",description:"Learn cooking vocabulary and kitchen experiences",duration:"38s",icon:"🍝",audioFile:"audio/a1-food/audio-01-cooking-pasta.mp3",questions:[{question:"How long was the pasta supposed to boil?",options:["10 minutes","12 minutes","15 minutes","20 minutes"],correct:1},{question:"What herb did she use from her garden?",options:["Oregano","Rosemary","Basil","Thyme"],correct:2},{question:"Who helped her grate the cheese?",options:["Her sister","Her mom","Maria","Her boyfriend"],correct:2},{question:"How long did she accidentally cook the pasta?",options:["15 minutes","18 minutes","20 minutes","25 minutes"],correct:2},{question:"What does she think about cooking at home?",options:["It's too difficult","It's too expensive","It's better than delivery","It's too time-consuming"],correct:2}]},{id:"food-02",title:"Brazilian BBQ Weekend",description:"Traditional churrasco and Brazilian food culture",duration:"36s",icon:"🥩",audioFile:"audio/a1-food/audio-02-brazilian-bbq.mp3",questions:[{question:"Who was the grillmaster?",options:["Her father","Uncle João","Her brother","Her cousin"],correct:1},{question:"What time did they start eating?",options:["1 PM","2 PM","3 PM","4 PM"],correct:1},{question:"What did she make with bacon?",options:["Salad","Farofa","Rice","Beans"],correct:1},{question:"How many people attended the barbecue?",options:["12","13","15","18"],correct:2},{question:"What type of music did they listen to?",options:["Rock","Pop","Sertanejo","Funk"],correct:2}]},{id:"food-03",title:"Pizza Delivery Disaster",description:"Food delivery experiences and disappointments",duration:"40s",icon:"🍕",audioFile:"audio/a1-food/audio-03-pizza-delivery.mp3",questions:[{question:"How much did the pizza cost?",options:["30 reais","35 reais","40 reais","45 reais"],correct:1},{question:"How long was the pizza supposed to take?",options:["20 minutes","25 minutes","30 minutes","45 minutes"],correct:2},{question:"How long did she actually wait?",options:["45 minutes","1 hour","1 hour 15 minutes","1 hour 30 minutes"],correct:2},{question:"Why was the delivery late?",options:["Traffic jam","Wrong order","Delivery guy got lost","Restaurant was busy"],correct:2},{question:"What will she make next time instead?",options:["Soup","Salad","Pasta","Sandwich"],correct:3}]},{id:"food-04",title:"Fancy Restaurant Date",description:"Fine dining and restaurant experiences",duration:"39s",icon:"🍽️",audioFile:"audio/a1-food/audio-04-fancy-restaurant.mp3",questions:[{question:"What language was the menu written in?",options:["Portuguese","English","Italian","Spanish"],correct:2},{question:"What did they order as the main course?",options:["Pasta and pizza","Risotto and salmon","Steak and chicken","Soup and salad"],correct:1},{question:"How much did the wine cost?",options:["60 reais","70 reais","80 reais","90 reais"],correct:2},{question:"How much did they spend in total?",options:["200 reais","220 reais","240 reais","260 reais"],correct:2},{question:"How did she feel about the portion sizes?",options:["Perfect","Too big","Too tiny","Just right"],correct:2}]},{id:"food-05",title:"Learning to Bake Bread",description:"Baking skills and homemade bread making",duration:"37s",icon:"🍞",audioFile:"audio/a1-food/audio-05-baking-bread.mp3",questions:[{question:"How many YouTube videos did she watch?",options:["3","4","5","6"],correct:2},{question:"How was her first bread attempt?",options:["Perfect","Good","Okay","Hard as a rock"],correct:3},{question:"How long did it take to perfect the recipe?",options:["2 weeks","3 weeks","4 weeks","1 month"],correct:1},{question:"When does she bake bread now?",options:["Every day","Every Sunday morning","Every weekend","Once a month"],correct:1},{question:"Who gave her the recipe?",options:["Her mother","Her aunt","Her grandmother","Her sister"],correct:2}]},{id:"food-06",title:"Street Food Adventure",description:"Exploring São Paulo food districts and flavors",duration:"41s",icon:"🥟",audioFile:"audio/a1-food/audio-06-street-food.mp3",questions:[{question:"Which district did she visit first?",options:["Vila Madalena","Liberdade","Centro","Moema"],correct:1},{question:"What did takoyaki contain?",options:["Shrimp","Octopus","Fish","Chicken"],correct:1},{question:"How much did 6 pieces of takoyaki cost?",options:["12 reais","15 reais","18 reais","20 reais"],correct:1},{question:"How much was the gourmet hot dog?",options:["15 reais","16 reais","18 reais","20 reais"],correct:2},{question:"What does she think about street food compared to fast food chains?",options:["It's more expensive","It's fresher and more interesting","It's less healthy","It's the same quality"],correct:1}]},{id:"food-07",title:"Healthy Eating Journey",description:"Diet changes and healthy lifestyle choices",duration:"35s",icon:"🥗",audioFile:"audio/a1-food/audio-07-healthy-eating.mp3",questions:[{question:"When did she start her healthy eating journey?",options:["2 months ago","3 months ago","4 months ago","6 months ago"],correct:1},{question:"What vegetables does she put in her smoothie?",options:["Carrots","Broccoli","Spinach","Cucumber"],correct:2},{question:"When does she do meal prep?",options:["Saturdays","Sundays","Mondays","Daily"],correct:1},{question:"How much weight has she lost?",options:["6 kilos","7 kilos","8 kilos","10 kilos"],correct:2},{question:"How often does she eat dark chocolate now?",options:["Once a week","Twice a week","Every day","Never"],correct:1}]},{id:"food-08",title:"Family Recipe Secrets",description:"Traditional recipes and family food traditions",duration:"42s",icon:"🍫",audioFile:"audio/a1-food/audio-08-family-recipe.mp3",questions:[{question:"Who originally had the secret recipe?",options:["Her grandmother","Her great-grandmother","Her mother","Her aunt"],correct:1},{question:"When did her mother teach her the recipe?",options:["Last Easter","Last Christmas","Her birthday","New Year"],correct:1},{question:"What is the secret ingredient?",options:["Vanilla","Cinnamon","Sea salt","Lemon"],correct:2},{question:"How many brigadeiros did she make for her birthday?",options:["30","40","50","60"],correct:2},{question:"What makes the secret ingredient special?",options:["Makes it sweeter","Makes it softer","Makes chocolate flavor more intense","Makes it last longer"],correct:2}]},{id:"food-09",title:"International Food Festival",description:"Global cuisine experiences and food diversity",duration:"44s",icon:"🌮",audioFile:"audio/a1-food/audio-09-food-festival.mp3",questions:[{question:"Where was the food festival located?",options:["Ibirapuera Park","Vila Madalena","Centro","Paulista Avenue"],correct:0},{question:"How many countries were represented?",options:["12","15","18","20"],correct:1},{question:"How much did the Mexican tacos cost?",options:["15 reais","18 reais","20 reais","22 reais"],correct:1},{question:"Which stands had the longest lines?",options:["Thai and Mexican","Indian and Thai","Japanese and Italian","Mexican and Indian"],correct:2},{question:"How long did they spend at the festival?",options:["4 hours","5 hours","6 hours","7 hours"],correct:1}]},{id:"food-10",title:"Opening My Own Restaurant",description:"Restaurant business dreams and entrepreneurship",duration:"40s",icon:"🏪",audioFile:"audio/a1-food/audio-10-own-restaurant.mp3",questions:[{question:"How long has she been saving money?",options:["1 year","2 years","3 years","4 years"],correct:1},{question:"How much money has she saved?",options:["40,000 reais","45,000 reais","50,000 reais","60,000 reais"],correct:2},{question:"How much is the monthly rent?",options:["6,000 reais","7,000 reais","8,000 reais","9,000 reais"],correct:2},{question:"When is she planning to open?",options:["Next October","Next November","Next December","Next January"],correct:2},{question:"What type of food will she serve?",options:["International fusion","Italian classics","Asian street food","Brazilian comfort food with modern twist"],correct:3}]}];function dN({user:t,onBack:e}){const[n,r]=$.useState("selection"),[s,i]=$.useState(null),[o,l]=$.useState([]),[u,h]=$.useState(0),[m,y]=$.useState("Listen to Audio"),[_,A]=$.useState(!1),[C,P]=$.useState(!1),[L,b]=$.useState({}),[w,I]=$.useState(1),[D,M]=$.useState(null),[F,T]=$.useState(null),[p,v]=$.useState("🔥 Loading Firebase..."),[x,k]=$.useState(!0),E=$.useRef(null);$.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),k(!1);return}try{v("🔥 Connecting to Firebase...");const V=ze(Ue,"students",t.username,"progress","food"),U=await We(V);if(U.exists()){const W=U.data();b(W.lessons||{}),T({totalXP:W.totalXP||0,completedLessons:Object.keys(W.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Food progress loaded")}else b({}),T({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New student initialized");k(!1)}catch(V){console.error("Firebase Error:",V),v("❌ Firebase connection failed"),k(!1),b({"food-01":{status:"completed",score:5,attempts:1},"food-02":{status:"completed",score:4,attempts:2}})}})()},[t]);const S=async(N,V,U=1)=>{if(t!=null&&t.username)try{const W=V*10+(V===5?25:0),oe=Date.now(),ue={lessonId:N,score:V,attempts:U,xpEarned:W,completedAt:oe,status:"completed"};b(de=>({...de,[N]:ue}));const vt=ze(Ue,"students",t.username,"progress","food"),_t=await We(vt);let Pe={lessons:{[N]:ue},totalXP:W,lastUpdated:oe,series:"food"};if(_t.exists()){const de=_t.data();Pe={...de,lessons:{...de.lessons,[N]:ue},totalXP:(de.totalXP||0)+W,lastUpdated:oe}}await ii(vt,Pe,{merge:!0}),T(de=>({...de,totalXP:Pe.totalXP,completedLessons:Object.keys(Pe.lessons).length})),console.log("✅ Firebase Save Success:",{lessonId:N,score:V,xpEarned:W})}catch(W){console.error("❌ Firebase Save Error:",W)}},le=()=>{E.current&&(E.current.paused?(E.current.play(),h(Math.max(u,20))):E.current.pause())},ve=()=>{E.current&&(E.current.currentTime=Math.max(0,E.current.currentTime-10))},be=()=>{E.current&&(E.current.currentTime=Math.min(E.current.duration,E.current.currentTime+10))},_e=N=>{I(N),E.current&&(E.current.playbackRate=N)},z=N=>{const V=ls.find(U=>U.id===N);V&&(i(V),l(new Array(V.questions.length).fill(null)),h(0),y("Listen to Audio"),r("lesson"),M(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},G=(N,V)=>{const U=[...o];U[N]=V,l(U);const W=U.filter(ue=>ue!==null).length,oe=20+W/s.questions.length*80;h(oe),y(`${W}/5 Questions Answered`)},X=async()=>{const N=o.reduce((W,oe,ue)=>W+(oe===s.questions[ue].correct?1:0),0),V=L[s.id],U=V?V.attempts+1:1;await S(s.id,N,U),console.log(`✅ Food Lesson ${s.id} saved to Firebase! Score: ${N}/5, Attempts: ${U}`),A(!0)},Y=()=>{const N=ls.findIndex(U=>U.id===s.id),V=ls[N+1];A(!1),V?z(V.id):(r("selection"),alert("🍕 Congratulations! Food Adventures Course Complete! 🍴"))},se=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},ge=()=>{s&&(A(!1),l(new Array(s.questions.length).fill(null)),M(Date.now()),h(0),y("Listen to Audio"),E.current&&(E.current.currentTime=0,E.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},ye=N=>{const V=L[N];return V?{status:"Completed",class:"status-completed",score:V.score,attempts:V.attempts,xpEarned:V.xpEarned}:{status:"Available",class:"status-not-started"}},Ne=o.filter(N=>N!==null).length,Te=Ne===(s==null?void 0:s.questions.length);return x?c.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-6xl mb-4"},"🍕"),c.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),c.createElement("p",{className:"text-gray-600"},"Loading your Food progress"))):n==="selection"?c.createElement("div",{className:"sophisticated-bg min-h-screen"},c.createElement("div",{className:"food-header"},c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},c.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),c.createElement("div",{className:"text-center mt-6"},c.createElement("div",{className:"text-5xl mb-4"},"🍕"),c.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"Food Adventures Course"),c.createElement("p",{className:"text-orange-100 mb-4"},"Learn English through food culture and cooking!"),c.createElement("div",{className:"food-accent-card rounded-lg p-3"},c.createElement("p",{className:"text-white font-medium"},"🍴 Food vocabulary • 🥘 Brazilian cuisine • 🏆 Earn XP!"))))),c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},c.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},c.createElement("div",{className:"text-sm"},c.createElement("span",{className:"text-primary-orange font-medium"},p),F&&c.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Total XP: ",F.totalXP," • Lessons: ",F.completedLessons,"/10")))),c.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},c.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},ls.map((N,V)=>{const U=ye(N.id);return c.createElement("div",{key:N.id,className:"lesson-card food-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>z(N.id)},c.createElement("div",{className:"flex items-center justify-between mb-3"},c.createElement("div",{className:"text-2xl"},N.icon),c.createElement("span",{className:`status-badge ${U.class}`},U.status)),c.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",V+1,": ",N.title),c.createElement("p",{className:"text-sm text-gray-600 mb-3"},N.description),c.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},c.createElement("span",null,"🎧 ",N.duration),c.createElement("span",{className:"font-semibold text-orange-600"},U.score?`✅ ${U.score}/5`:"+50 XP")),U.attempts>0&&c.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",U.attempts," • Score: ",U.score||0,"/5 • XP: ",U.xpEarned||0))}))),c.createElement("style",{jsx:!0},`
          .sophisticated-bg {
            background: linear-gradient(135deg, #f8fafc, #fed7aa);
            min-height: 100vh;
          }
          
          .food-header {
            background: linear-gradient(135deg, #f97316, #ea580c);
            box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);
          }
          
          .food-accent-card {
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
          }
          
          .back-btn {
            background: rgba(255, 255, 255, 0.9);
            color: #ea580c;
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
          
          .food-card {
            background: white;
            border: 2px solid #fed7aa;
            box-shadow: 0 8px 25px rgba(249, 115, 22, 0.15);
          }
          
          .food-card:hover {
            border-color: #f97316;
            box-shadow: 0 12px 35px rgba(249, 115, 22, 0.25);
          }
          
          .status-badge {
            padding: 0.3rem 0.8rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
          }
          
          .status-completed {
            background: #f97316;
            color: white;
          }
          
          .status-not-started {
            background: #fed7aa;
            color: #ea580c;
          }

          .status-card {
            background: linear-gradient(135deg, #fed7aa, #ffedd5);
            border: 2px solid #fb923c;
            color: #ea580c;
          }

          .text-primary-orange {
            color: #f97316;
          }
        `)):c.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},c.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},c.createElement("div",{className:"food-lesson-card rounded-xl p-6 mb-6"},c.createElement("div",{className:"flex items-center justify-between mb-4"},c.createElement("button",{onClick:se,className:"text-orange-600 text-sm hover:underline"},"← Back to Food"),c.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",ls.findIndex(N=>N.id===s.id)+1," of ",ls.length)),c.createElement("h2",{className:"text-2xl font-bold text-orange-600 mb-2"},s.title),c.createElement("p",{className:"text-gray-600 mb-4"},s.description),c.createElement("div",{className:"progress-card rounded-lg p-3"},c.createElement("div",{className:"flex justify-between text-sm mb-2"},c.createElement("span",null,"Lesson Progress"),c.createElement("span",null,m)),c.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},c.createElement("div",{className:"bg-orange-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),c.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},c.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🎧 Listen to the Audio"),c.createElement("audio",{ref:E,src:s.audioFile,onLoadedData:()=>{console.log("✅ Audio loaded:",s.audioFile),E.current&&(E.current.playbackRate=w)},onError:N=>{console.error("❌ Audio error:",N.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{E.current&&E.current.duration>0&&E.current.currentTime/E.current.duration*100>10&&h(Math.max(u,20))},className:"hidden"}),c.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},c.createElement("button",{onClick:ve,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),c.createElement("button",{onClick:le,className:"btn-audio bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},"▶️ Play/Pause"),c.createElement("button",{onClick:be,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),c.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},c.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(N=>c.createElement("button",{key:N,onClick:()=>_e(N),className:`px-3 py-1 rounded ${w===N?"bg-orange-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},N,"x"))),c.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🍕 Listen carefully and then answer the questions below")),c.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((N,V)=>c.createElement("div",{key:V,className:"question-card rounded-xl p-6"},c.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},V+1,". ",N.question),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},N.options.map((U,W)=>c.createElement("button",{key:W,onClick:()=>G(V,W),className:`p-3 rounded-lg text-left transition-all ${o[V]===W?"bg-orange-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+W),". ",U)))))),c.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},c.createElement("button",{onClick:X,disabled:!Te,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${Te?"bg-orange-500 hover:bg-orange-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},Te?"🍕 Save to Firebase - Ready! 🍴":`Submit Answers (${Ne}/5 Complete)`),c.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Food culture questions!"))),_&&c.createElement(hN,{lesson:s,userAnswers:o,onNext:Y,onReview:()=>P(!0),onClose:()=>A(!1),onRestart:ge}),C&&c.createElement(fN,{lesson:s,userAnswers:o,onClose:()=>P(!1)}),c.createElement("style",{jsx:!0},`
        .food-lesson-card, .audio-card, .question-card, .submit-card {
          background: white;
          border: 2px solid #fed7aa;
          box-shadow: 0 8px 25px rgba(249, 115, 22, 0.15);
        }
        
        .progress-card {
          background: linear-gradient(135deg, #fed7aa, #ffedd5);
          border: 2px solid #fb923c;
        }
        
        .btn-audio {
          font-weight: 600;
          border: none;
          cursor: pointer;
        }
      `))}function hN({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((m,y,_)=>m+(y===t.questions[_].correct?1:0),0),l=Math.round(o/5*100),u=o*10+(o===5?25:0),h=o===5;return c.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},c.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},c.createElement("div",{className:"text-center"},c.createElement("div",{className:"text-5xl mb-4"},h?"🏆":o>=4?"🍕":"🍴"),c.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},h?"Food Explorer!":o>=4?"Great Food Knowledge!":"Lesson Complete!"),c.createElement("div",{className:"bg-orange-50 rounded-lg p-4 mb-4"},c.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),c.createElement("div",{className:"text-lg text-gray-600 mb-2"},l,"% Correct"),c.createElement("div",{className:"text-orange-500 font-semibold text-lg"},"+",u," XP Earned!")),h&&c.createElement("div",{className:"bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-3 mb-4"},c.createElement("div",{className:"text-sm font-semibold text-orange-700 mb-2"},"🍕 Achievement Unlocked!"),c.createElement("div",{className:"font-medium"},"Perfect Food Score!")),c.createElement("div",{className:"space-y-3"},c.createElement("button",{onClick:r,className:"w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&c.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),c.createElement("button",{onClick:n,className:"w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"},"Next Lesson →"),c.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Food")))))}function fN({lesson:t,userAnswers:e,onClose:n}){return c.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},c.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},c.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"🍕 Answer Review"),c.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,l=r.options[r.correct],u=r.options[i];return c.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},c.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),c.createElement("div",{className:"space-y-1"},c.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&c.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",l)))})),c.createElement("button",{onClick:n,className:"w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}function mN(){const[t,e]=$.useState("login"),[n,r]=$.useState(null);$.useEffect(()=>{const u=localStorage.getItem("studentAuth"),h=localStorage.getItem("teacherAuth");if(u){const m=JSON.parse(u);m.isAuthenticated&&(r(m),e("portal"))}else if(h){const m=JSON.parse(h);m.isAuthenticated&&(r(m),e("teacher-dashboard"))}},[]);const s=u=>{e(u)},i=(u,h)=>{r(u),h==="student"?(localStorage.setItem("studentAuth",JSON.stringify({...u,isAuthenticated:!0,loginTime:new Date().toISOString()})),e("portal")):h==="teacher"&&(localStorage.setItem("teacherAuth",JSON.stringify({...u,isAuthenticated:!0,loginTime:new Date().toISOString()})),e("teacher-dashboard"))},o=()=>{localStorage.removeItem("studentAuth"),localStorage.removeItem("teacherAuth"),r(null),e("login")},l=()=>{switch(t){case"login":return c.createElement(Dg,{onLogin:i,onNavigate:s});case"portal":return c.createElement(ZA,{user:n,onLogout:o,onNavigate:s});case"hub":return c.createElement(eN,{user:n,onLogout:o,onNavigate:s});case"foundation-lessons":return c.createElement(nN,{user:n,onBack:()=>e("hub")});case"gaming-lessons":return c.createElement(iN,{user:n,onBack:()=>e("hub")});case"movies-lessons":return c.createElement(lN,{user:n,onBack:()=>e("hub")});case"food-lessons":return c.createElement(dN,{user:n,onBack:()=>e("hub")});case"teacher-dashboard":return c.createElement(tN,{user:n,onLogout:o,onNavigate:s});default:return c.createElement(Dg,{onLogin:i,onNavigate:s})}};return c.createElement("div",{className:"App"},l())}pc.createRoot(document.getElementById("root")).render(c.createElement(c.StrictMode,null,c.createElement(mN,null)));
