(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function DE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ng={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),LE=Symbol.for("react.portal"),VE=Symbol.for("react.fragment"),OE=Symbol.for("react.strict_mode"),ME=Symbol.for("react.profiler"),FE=Symbol.for("react.provider"),UE=Symbol.for("react.context"),jE=Symbol.for("react.forward_ref"),BE=Symbol.for("react.suspense"),zE=Symbol.for("react.memo"),$E=Symbol.for("react.lazy"),um=Symbol.iterator;function qE(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var Dg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lg=Object.assign,Vg={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||Dg}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Og(){}Og.prototype=Ks.prototype;function Pd(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||Dg}var Cd=Pd.prototype=new Og;Cd.constructor=Pd;Lg(Cd,Ks.prototype);Cd.isPureReactComponent=!0;var cm=Array.isArray,Mg=Object.prototype.hasOwnProperty,Rd={current:null},Fg={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Mg.call(e,r)&&!Fg.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:To,type:t,key:i,ref:o,props:s,_owner:Rd.current}}function WE(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function HE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dm=/\/+/g;function Cu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?HE(""+t.key):e.toString(36)}function Sa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case To:case LE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Cu(o,0):r,cm(s)?(n="",t!=null&&(n=t.replace(dm,"$&/")+"/"),Sa(s,e,n,"",function(d){return d})):s!=null&&(Nd(s)&&(s=WE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(dm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",cm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Cu(i,l);o+=Sa(i,e,n,u,s)}else if(u=qE(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Cu(i,l++),o+=Sa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ta(t,e,n){if(t==null)return t;var r=[],s=0;return Sa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function GE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},xa={transition:null},KE={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:xa,ReactCurrentOwner:Rd};function jg(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!Nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ks;re.Fragment=VE;re.Profiler=ME;re.PureComponent=Pd;re.StrictMode=OE;re.Suspense=BE;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KE;re.act=jg;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lg({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Rd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Mg.call(e,u)&&!Fg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:To,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:UE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FE,_context:t},t.Consumer=t};re.createElement=Ug;re.createFactory=function(t){var e=Ug.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:jE,render:t}};re.isValidElement=Nd;re.lazy=function(t){return{$$typeof:$E,_payload:{_status:-1,_result:t},_init:GE}};re.memo=function(t,e){return{$$typeof:zE,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};re.unstable_act=jg;re.useCallback=function(t,e){return vt.current.useCallback(t,e)};re.useContext=function(t){return vt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};re.useEffect=function(t,e){return vt.current.useEffect(t,e)};re.useId=function(){return vt.current.useId()};re.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return vt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};re.useRef=function(t){return vt.current.useRef(t)};re.useState=function(t){return vt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return vt.current.useTransition()};re.version="18.3.1";Ng.exports=re;var H=Ng.exports;const h=DE(H);var fc={},Bg={exports:{}},Lt={},zg={exports:{}},$g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var Y=z.length;z.push(Q);e:for(;0<Y;){var de=Y-1>>>1,oe=z[de];if(0<s(oe,Q))z[de]=Q,z[Y]=oe,Y=de;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],Y=z.pop();if(Y!==Q){z[0]=Y;e:for(var de=0,oe=z.length,me=oe>>>1;de<me;){var ge=2*(de+1)-1,ze=z[ge],Ne=ge+1,U=z[Ne];if(0>s(ze,Y))Ne<oe&&0>s(U,ze)?(z[de]=U,z[Ne]=Y,de=Ne):(z[de]=ze,z[ge]=Y,de=ge);else if(Ne<oe&&0>s(U,Y))z[de]=U,z[Ne]=Y,de=Ne;else break e}}return Q}function s(z,Q){var Y=z.sortIndex-Q.sortIndex;return Y!==0?Y:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],m=1,y=null,v=3,b=!1,R=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=z)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(d)}}function N(z){if(P=!1,x(z),!R)if(n(u)!==null)R=!0,nt(V);else{var Q=n(d);Q!==null&&Oe(N,Q.startTime-z)}}function V(z,Q){R=!1,P&&(P=!1,I(p),p=-1),b=!0;var Y=v;try{for(x(Q),y=n(u);y!==null&&(!(y.expirationTime>Q)||z&&!k());){var de=y.callback;if(typeof de=="function"){y.callback=null,v=y.priorityLevel;var oe=de(y.expirationTime<=Q);Q=t.unstable_now(),typeof oe=="function"?y.callback=oe:y===n(u)&&r(u),x(Q)}else r(u);y=n(u)}if(y!==null)var me=!0;else{var ge=n(d);ge!==null&&Oe(N,ge.startTime-Q),me=!1}return me}finally{y=null,v=Y,b=!1}}var O=!1,w=null,p=-1,_=5,S=-1;function k(){return!(t.unstable_now()-S<_)}function A(){if(w!==null){var z=t.unstable_now();S=z;var Q=!0;try{Q=w(!0,z)}finally{Q?T():(O=!1,w=null)}}else O=!1}var T;if(typeof E=="function")T=function(){E(A)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,tt=ke.port2;ke.port1.onmessage=A,T=function(){tt.postMessage(null)}}else T=function(){D(A,0)};function nt(z){w=z,O||(O=!0,T())}function Oe(z,Q){p=D(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||b||(R=!0,nt(V))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var Y=v;v=Q;try{return z()}finally{v=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=v;v=z;try{return Q()}finally{v=Y}},t.unstable_scheduleCallback=function(z,Q,Y){var de=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=Y+oe,z={id:m++,callback:Q,priorityLevel:z,startTime:Y,expirationTime:oe,sortIndex:-1},Y>de?(z.sortIndex=Y,e(d,z),n(u)===null&&z===n(d)&&(P?(I(p),p=-1):P=!0,Oe(N,Y-de))):(z.sortIndex=oe,e(u,z),R||b||(R=!0,nt(V))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var Q=v;return function(){var Y=v;v=Q;try{return z.apply(this,arguments)}finally{v=Y}}}})($g);zg.exports=$g;var QE=zg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XE=H,Dt=QE;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qg=new Set,Qi={};function Qr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(Qi[t]=e,t=0;t<e.length;t++)qg.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mc=Object.prototype.hasOwnProperty,YE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hm={},fm={};function JE(t){return mc.call(fm,t)?!0:mc.call(hm,t)?!1:YE.test(t)?fm[t]=!0:(hm[t]=!0,!1)}function ZE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ew(t,e,n,r){if(e===null||typeof e>"u"||ZE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dd,Ld);Ze[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dd,Ld);Ze[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dd,Ld);Ze[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vd(t,e,n,r){var s=Ze.hasOwnProperty(e)?Ze[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ew(e,n,s,r)&&(n=null),r||s===null?JE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=XE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),cs=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),Wg=Symbol.for("react.provider"),Hg=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),yc=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),Gg=Symbol.for("react.offscreen"),mm=Symbol.iterator;function gi(t){return t===null||typeof t!="object"?null:(t=mm&&t[mm]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Ru;function xi(t){if(Ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ru=e&&e[1]||""}return`
`+Ru+t}var Nu=!1;function Du(t,e){if(!t||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xi(t):""}function tw(t){switch(t.tag){case 5:return xi(t.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return t=Du(t.type,!1),t;case 11:return t=Du(t.type.render,!1),t;case 1:return t=Du(t.type,!0),t;default:return""}}function vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case cs:return"Portal";case pc:return"Profiler";case Od:return"StrictMode";case gc:return"Suspense";case yc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hg:return(t.displayName||"Context")+".Consumer";case Wg:return(t._context.displayName||"Context")+".Provider";case Md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fd:return e=t.displayName||null,e!==null?e:vc(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return vc(t(e))}catch{}}return null}function nw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vc(e);case 8:return e===Od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rw(t){var e=Kg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ra(t){t._valueTracker||(t._valueTracker=rw(t))}function Qg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _c(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xg(t,e){e=e.checked,e!=null&&Vd(t,"checked",e,!1)}function Ec(t,e){Xg(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&wc(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wc(t,e,n){(e!=="number"||Wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ai=Array.isArray;function Is(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Tc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ai(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function Yg(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ic(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sa,Zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sw=["Webkit","ms","Moz","O"];Object.keys(Vi).forEach(function(t){sw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vi[e]=Vi[t]})});function ey(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vi.hasOwnProperty(t)&&Vi[t]?(""+e).trim():e+"px"}function ty(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ey(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var iw=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(t,e){if(e){if(iw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function xc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function Ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kc=null,Ss=null,xs=null;function _m(t){if(t=xo(t)){if(typeof kc!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Ol(e),kc(t.stateNode,t.type,e))}}function ny(t){Ss?xs?xs.push(t):xs=[t]:Ss=t}function ry(){if(Ss){var t=Ss,e=xs;if(xs=Ss=null,_m(t),e)for(t=0;t<e.length;t++)_m(e[t])}}function sy(t,e){return t(e)}function iy(){}var Lu=!1;function oy(t,e,n){if(Lu)return t(e,n);Lu=!0;try{return sy(t,e,n)}finally{Lu=!1,(Ss!==null||xs!==null)&&(iy(),ry())}}function Yi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var bc=!1;if(Pn)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){bc=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{bc=!1}function ow(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var Oi=!1,Ha=null,Ga=!1,Pc=null,aw={onError:function(t){Oi=!0,Ha=t}};function lw(t,e,n,r,s,i,o,l,u){Oi=!1,Ha=null,ow.apply(aw,arguments)}function uw(t,e,n,r,s,i,o,l,u){if(lw.apply(this,arguments),Oi){if(Oi){var d=Ha;Oi=!1,Ha=null}else throw Error(j(198));Ga||(Ga=!0,Pc=d)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ay(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Em(t){if(Xr(t)!==t)throw Error(j(188))}function cw(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Em(s),t;if(i===r)return Em(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function ly(t){return t=cw(t),t!==null?uy(t):null}function uy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uy(t);if(e!==null)return e;t=t.sibling}return null}var cy=Dt.unstable_scheduleCallback,wm=Dt.unstable_cancelCallback,dw=Dt.unstable_shouldYield,hw=Dt.unstable_requestPaint,Re=Dt.unstable_now,fw=Dt.unstable_getCurrentPriorityLevel,jd=Dt.unstable_ImmediatePriority,dy=Dt.unstable_UserBlockingPriority,Ka=Dt.unstable_NormalPriority,mw=Dt.unstable_LowPriority,hy=Dt.unstable_IdlePriority,Nl=null,on=null;function pw(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:vw,gw=Math.log,yw=Math.LN2;function vw(t){return t>>>=0,t===0?32:31-(gw(t)/yw|0)|0}var ia=64,oa=4194304;function ki(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ki(l):(i&=o,i!==0&&(r=ki(i)))}else o=n&~s,o!==0?r=ki(o):i!==0&&(r=ki(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),s=1<<n,r|=t[n],e&=~s;return r}function _w(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ew(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Yt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=_w(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fy(){var t=ia;return ia<<=1,!(ia&4194240)&&(ia=64),t}function Vu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function ww(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Yt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Bd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var he=0;function my(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var py,zd,gy,yy,vy,Rc=!1,aa=[],tr=null,nr=null,rr=null,Ji=new Map,Zi=new Map,Hn=[],Tw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(e.pointerId)}}function vi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=xo(e),e!==null&&zd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Iw(t,e,n,r,s){switch(e){case"focusin":return tr=vi(tr,t,e,n,r,s),!0;case"dragenter":return nr=vi(nr,t,e,n,r,s),!0;case"mouseover":return rr=vi(rr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ji.set(i,vi(Ji.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Zi.set(i,vi(Zi.get(i)||null,t,e,n,r,s)),!0}return!1}function _y(t){var e=Cr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=ay(n),e!==null){t.blockedOn=e,vy(t.priority,function(){gy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ac=r,n.target.dispatchEvent(r),Ac=null}else return e=xo(n),e!==null&&zd(e),t.blockedOn=n,!1;e.shift()}return!0}function Im(t,e,n){Aa(t)&&n.delete(e)}function Sw(){Rc=!1,tr!==null&&Aa(tr)&&(tr=null),nr!==null&&Aa(nr)&&(nr=null),rr!==null&&Aa(rr)&&(rr=null),Ji.forEach(Im),Zi.forEach(Im)}function _i(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,Sw)))}function eo(t){function e(s){return _i(s,t)}if(0<aa.length){_i(aa[0],t);for(var n=1;n<aa.length;n++){var r=aa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&_i(tr,t),nr!==null&&_i(nr,t),rr!==null&&_i(rr,t),Ji.forEach(e),Zi.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)_y(n),n.blockedOn===null&&Hn.shift()}var As=Mn.ReactCurrentBatchConfig,Xa=!0;function xw(t,e,n,r){var s=he,i=As.transition;As.transition=null;try{he=1,$d(t,e,n,r)}finally{he=s,As.transition=i}}function Aw(t,e,n,r){var s=he,i=As.transition;As.transition=null;try{he=4,$d(t,e,n,r)}finally{he=s,As.transition=i}}function $d(t,e,n,r){if(Xa){var s=Nc(t,e,n,r);if(s===null)Wu(t,e,r,Ya,n),Tm(t,r);else if(Iw(s,t,e,n,r))r.stopPropagation();else if(Tm(t,r),e&4&&-1<Tw.indexOf(t)){for(;s!==null;){var i=xo(s);if(i!==null&&py(i),i=Nc(t,e,n,r),i===null&&Wu(t,e,r,Ya,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Wu(t,e,r,null,n)}}var Ya=null;function Nc(t,e,n,r){if(Ya=null,t=Ud(r),t=Cr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ay(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ya=t,null}function Ey(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fw()){case jd:return 1;case dy:return 4;case Ka:case mw:return 16;case hy:return 536870912;default:return 16}default:return 16}}var Jn=null,qd=null,ka=null;function wy(){if(ka)return ka;var t,e=qd,n=e.length,r,s="value"in Jn?Jn.value:Jn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ka=s.slice(t,1<r?1-r:void 0)}function ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function Sm(){return!1}function Vt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?la:Sm,this.isPropagationStopped=Sm,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=Vt(Qs),So=xe({},Qs,{view:0,detail:0}),kw=Vt(So),Ou,Mu,Ei,Dl=xe({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?(Ou=t.screenX-Ei.screenX,Mu=t.screenY-Ei.screenY):Mu=Ou=0,Ei=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),xm=Vt(Dl),bw=xe({},Dl,{dataTransfer:0}),Pw=Vt(bw),Cw=xe({},So,{relatedTarget:0}),Fu=Vt(Cw),Rw=xe({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Nw=Vt(Rw),Dw=xe({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lw=Vt(Dw),Vw=xe({},Qs,{data:0}),Am=Vt(Vw),Ow={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Fw[t])?!!e[t]:!1}function Hd(){return Uw}var jw=xe({},So,{key:function(t){if(t.key){var e=Ow[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(t){return t.type==="keypress"?ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bw=Vt(jw),zw=xe({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=Vt(zw),$w=xe({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),qw=Vt($w),Ww=xe({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hw=Vt(Ww),Gw=xe({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kw=Vt(Gw),Qw=[9,13,27,32],Gd=Pn&&"CompositionEvent"in window,Mi=null;Pn&&"documentMode"in document&&(Mi=document.documentMode);var Xw=Pn&&"TextEvent"in window&&!Mi,Ty=Pn&&(!Gd||Mi&&8<Mi&&11>=Mi),bm=" ",Pm=!1;function Iy(t,e){switch(t){case"keyup":return Qw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function Yw(t,e){switch(t){case"compositionend":return Sy(e);case"keypress":return e.which!==32?null:(Pm=!0,bm);case"textInput":return t=e.data,t===bm&&Pm?null:t;default:return null}}function Jw(t,e){if(hs)return t==="compositionend"||!Gd&&Iy(t,e)?(t=wy(),ka=qd=Jn=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ty&&e.locale!=="ko"?null:e.data;default:return null}}var Zw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zw[t.type]:e==="textarea"}function xy(t,e,n,r){ny(r),e=Ja(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fi=null,to=null;function eT(t){Oy(t,0)}function Ll(t){var e=ps(t);if(Qg(e))return t}function tT(t,e){if(t==="change")return e}var Ay=!1;if(Pn){var Uu;if(Pn){var ju="oninput"in document;if(!ju){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),ju=typeof Rm.oninput=="function"}Uu=ju}else Uu=!1;Ay=Uu&&(!document.documentMode||9<document.documentMode)}function Nm(){Fi&&(Fi.detachEvent("onpropertychange",ky),to=Fi=null)}function ky(t){if(t.propertyName==="value"&&Ll(to)){var e=[];xy(e,to,t,Ud(t)),oy(eT,e)}}function nT(t,e,n){t==="focusin"?(Nm(),Fi=e,to=n,Fi.attachEvent("onpropertychange",ky)):t==="focusout"&&Nm()}function rT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(to)}function sT(t,e){if(t==="click")return Ll(e)}function iT(t,e){if(t==="input"||t==="change")return Ll(e)}function oT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:oT;function no(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!mc.call(e,s)||!Zt(t[s],e[s]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=Dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function by(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?by(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Py(){for(var t=window,e=Wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wa(t.document)}return e}function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aT(t){var e=Py(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&by(n.ownerDocument.documentElement,n)){if(r!==null&&Kd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Lm(n,i);var o=Lm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lT=Pn&&"documentMode"in document&&11>=document.documentMode,fs=null,Dc=null,Ui=null,Lc=!1;function Vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lc||fs==null||fs!==Wa(r)||(r=fs,"selectionStart"in r&&Kd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ui&&no(Ui,r)||(Ui=r,r=Ja(Dc,"onSelect"),0<r.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fs)))}function ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},Bu={},Cy={};Pn&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Vl(t){if(Bu[t])return Bu[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cy)return Bu[t]=e[n];return t}var Ry=Vl("animationend"),Ny=Vl("animationiteration"),Dy=Vl("animationstart"),Ly=Vl("transitionend"),Vy=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){Vy.set(t,e),Qr(e,[t])}for(var zu=0;zu<Om.length;zu++){var $u=Om[zu],uT=$u.toLowerCase(),cT=$u[0].toUpperCase()+$u.slice(1);vr(uT,"on"+cT)}vr(Ry,"onAnimationEnd");vr(Ny,"onAnimationIteration");vr(Dy,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(Ly,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dT=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function Mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uw(r,e,void 0,t),t.currentTarget=null}function Oy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Mm(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Mm(s,l,d),i=u}}}if(Ga)throw t=Pc,Ga=!1,Pc=null,t}function _e(t,e){var n=e[Uc];n===void 0&&(n=e[Uc]=new Set);var r=t+"__bubble";n.has(r)||(My(e,t,2,!1),n.add(r))}function qu(t,e,n){var r=0;e&&(r|=4),My(n,t,r,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[ca]){t[ca]=!0,qg.forEach(function(n){n!=="selectionchange"&&(dT.has(n)||qu(n,!1,t),qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ca]||(e[ca]=!0,qu("selectionchange",!1,e))}}function My(t,e,n,r){switch(Ey(e)){case 1:var s=xw;break;case 4:s=Aw;break;default:s=$d}n=s.bind(null,e,n,t),s=void 0,!bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Wu(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Cr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}oy(function(){var d=i,m=Ud(n),y=[];e:{var v=Vy.get(t);if(v!==void 0){var b=Wd,R=t;switch(t){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":b=Bw;break;case"focusin":R="focus",b=Fu;break;case"focusout":R="blur",b=Fu;break;case"beforeblur":case"afterblur":b=Fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Pw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=qw;break;case Ry:case Ny:case Dy:b=Nw;break;case Ly:b=Hw;break;case"scroll":b=kw;break;case"wheel":b=Kw;break;case"copy":case"cut":case"paste":b=Lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=km}var P=(e&4)!==0,D=!P&&t==="scroll",I=P?v!==null?v+"Capture":null:v;P=[];for(var E=d,x;E!==null;){x=E;var N=x.stateNode;if(x.tag===5&&N!==null&&(x=N,I!==null&&(N=Yi(E,I),N!=null&&P.push(so(E,N,x)))),D)break;E=E.return}0<P.length&&(v=new b(v,R,null,n,m),y.push({event:v,listeners:P}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",v&&n!==Ac&&(R=n.relatedTarget||n.fromElement)&&(Cr(R)||R[Cn]))break e;if((b||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,b?(R=n.relatedTarget||n.toElement,b=d,R=R?Cr(R):null,R!==null&&(D=Xr(R),R!==D||R.tag!==5&&R.tag!==6)&&(R=null)):(b=null,R=d),b!==R)){if(P=xm,N="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(P=km,N="onPointerLeave",I="onPointerEnter",E="pointer"),D=b==null?v:ps(b),x=R==null?v:ps(R),v=new P(N,E+"leave",b,n,m),v.target=D,v.relatedTarget=x,N=null,Cr(m)===d&&(P=new P(I,E+"enter",R,n,m),P.target=x,P.relatedTarget=D,N=P),D=N,b&&R)t:{for(P=b,I=R,E=0,x=P;x;x=ss(x))E++;for(x=0,N=I;N;N=ss(N))x++;for(;0<E-x;)P=ss(P),E--;for(;0<x-E;)I=ss(I),x--;for(;E--;){if(P===I||I!==null&&P===I.alternate)break t;P=ss(P),I=ss(I)}P=null}else P=null;b!==null&&Fm(y,v,b,P,!1),R!==null&&D!==null&&Fm(y,D,R,P,!0)}}e:{if(v=d?ps(d):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var V=tT;else if(Cm(v))if(Ay)V=iT;else{V=rT;var O=nT}else(b=v.nodeName)&&b.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(V=sT);if(V&&(V=V(t,d))){xy(y,V,n,m);break e}O&&O(t,v,d),t==="focusout"&&(O=v._wrapperState)&&O.controlled&&v.type==="number"&&wc(v,"number",v.value)}switch(O=d?ps(d):window,t){case"focusin":(Cm(O)||O.contentEditable==="true")&&(fs=O,Dc=d,Ui=null);break;case"focusout":Ui=Dc=fs=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,Vm(y,n,m);break;case"selectionchange":if(lT)break;case"keydown":case"keyup":Vm(y,n,m)}var w;if(Gd)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else hs?Iy(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Ty&&n.locale!=="ko"&&(hs||p!=="onCompositionStart"?p==="onCompositionEnd"&&hs&&(w=wy()):(Jn=m,qd="value"in Jn?Jn.value:Jn.textContent,hs=!0)),O=Ja(d,p),0<O.length&&(p=new Am(p,t,null,n,m),y.push({event:p,listeners:O}),w?p.data=w:(w=Sy(n),w!==null&&(p.data=w)))),(w=Xw?Yw(t,n):Jw(t,n))&&(d=Ja(d,"onBeforeInput"),0<d.length&&(m=new Am("onBeforeInput","beforeinput",null,n,m),y.push({event:m,listeners:d}),m.data=w))}Oy(y,e)})}function so(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Yi(t,n),i!=null&&r.unshift(so(t,i,s)),i=Yi(t,e),i!=null&&r.push(so(t,i,s))),t=t.return}return r}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=Yi(n,i),u!=null&&o.unshift(so(n,u,l))):s||(u=Yi(n,i),u!=null&&o.push(so(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hT=/\r\n?/g,fT=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(hT,`
`).replace(fT,"")}function da(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error(j(425))}function Za(){}var Vc=null,Oc=null;function Mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,mT=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,pT=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(t){return jm.resolve(null).then(t).catch(gT)}:Fc;function gT(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);eo(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),rn="__reactFiber$"+Xs,io="__reactProps$"+Xs,Cn="__reactContainer$"+Xs,Uc="__reactEvents$"+Xs,yT="__reactListeners$"+Xs,vT="__reactHandles$"+Xs;function Cr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[rn])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[rn]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Ol(t){return t[io]||null}var jc=[],gs=-1;function _r(t){return{current:t}}function Ee(t){0>gs||(t.current=jc[gs],jc[gs]=null,gs--)}function ye(t,e){gs++,jc[gs]=t.current,t.current=e}var mr={},ht=_r(mr),St=_r(!1),Mr=mr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function xt(t){return t=t.childContextTypes,t!=null}function el(){Ee(St),Ee(ht)}function zm(t,e,n){if(ht.current!==mr)throw Error(j(168));ye(ht,e),ye(St,n)}function Fy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,nw(t)||"Unknown",s));return xe({},n,r)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Mr=ht.current,ye(ht,t),ye(St,St.current),!0}function $m(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=Fy(t,e,Mr),r.__reactInternalMemoizedMergedChildContext=t,Ee(St),Ee(ht),ye(ht,t)):Ee(St),ye(St,n)}var _n=null,Ml=!1,Gu=!1;function Uy(t){_n===null?_n=[t]:_n.push(t)}function _T(t){Ml=!0,Uy(t)}function Er(){if(!Gu&&_n!==null){Gu=!0;var t=0,e=he;try{var n=_n;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,Ml=!1}catch(s){throw _n!==null&&(_n=_n.slice(t+1)),cy(jd,Er),s}finally{he=e,Gu=!1}}return null}var ys=[],vs=0,nl=null,rl=0,Ot=[],Mt=0,Fr=null,En=1,wn="";function kr(t,e){ys[vs++]=rl,ys[vs++]=nl,nl=t,rl=e}function jy(t,e,n){Ot[Mt++]=En,Ot[Mt++]=wn,Ot[Mt++]=Fr,Fr=t;var r=En;t=wn;var s=32-Yt(r)-1;r&=~(1<<s),n+=1;var i=32-Yt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,En=1<<32-Yt(e)+s|n<<s|r,wn=i+t}else En=1<<i|n<<s|r,wn=t}function Qd(t){t.return!==null&&(kr(t,1),jy(t,1,0))}function Xd(t){for(;t===nl;)nl=ys[--vs],ys[vs]=null,rl=ys[--vs],ys[vs]=null;for(;t===Fr;)Fr=Ot[--Mt],Ot[Mt]=null,wn=Ot[--Mt],Ot[Mt]=null,En=Ot[--Mt],Ot[Mt]=null}var Ct=null,Pt=null,we=!1,Qt=null;function By(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,Pt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:En,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,Pt=null,!0):!1;default:return!1}}function Bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zc(t){if(we){var e=Pt;if(e){var n=e;if(!qm(t,e)){if(Bc(t))throw Error(j(418));e=sr(n.nextSibling);var r=Ct;e&&qm(t,e)?By(r,n):(t.flags=t.flags&-4097|2,we=!1,Ct=t)}}else{if(Bc(t))throw Error(j(418));t.flags=t.flags&-4097|2,we=!1,Ct=t}}}function Wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function ha(t){if(t!==Ct)return!1;if(!we)return Wm(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mc(t.type,t.memoizedProps)),e&&(e=Pt)){if(Bc(t))throw zy(),Error(j(418));for(;e;)By(t,e),e=sr(e.nextSibling)}if(Wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Ct?sr(t.stateNode.nextSibling):null;return!0}function zy(){for(var t=Pt;t;)t=sr(t.nextSibling)}function Vs(){Pt=Ct=null,we=!1}function Yd(t){Qt===null?Qt=[t]:Qt.push(t)}var ET=Mn.ReactCurrentBatchConfig;function wi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function fa(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hm(t){var e=t._init;return e(t._payload)}function $y(t){function e(I,E){if(t){var x=I.deletions;x===null?(I.deletions=[E],I.flags|=16):x.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function s(I,E){return I=lr(I,E),I.index=0,I.sibling=null,I}function i(I,E,x){return I.index=x,t?(x=I.alternate,x!==null?(x=x.index,x<E?(I.flags|=2,E):x):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,x,N){return E===null||E.tag!==6?(E=ec(x,I.mode,N),E.return=I,E):(E=s(E,x),E.return=I,E)}function u(I,E,x,N){var V=x.type;return V===ds?m(I,E,x.props.children,N,x.key):E!==null&&(E.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===qn&&Hm(V)===E.type)?(N=s(E,x.props),N.ref=wi(I,E,x),N.return=I,N):(N=Va(x.type,x.key,x.props,null,I.mode,N),N.ref=wi(I,E,x),N.return=I,N)}function d(I,E,x,N){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=tc(x,I.mode,N),E.return=I,E):(E=s(E,x.children||[]),E.return=I,E)}function m(I,E,x,N,V){return E===null||E.tag!==7?(E=Vr(x,I.mode,N,V),E.return=I,E):(E=s(E,x),E.return=I,E)}function y(I,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ec(""+E,I.mode,x),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case na:return x=Va(E.type,E.key,E.props,null,I.mode,x),x.ref=wi(I,null,E),x.return=I,x;case cs:return E=tc(E,I.mode,x),E.return=I,E;case qn:var N=E._init;return y(I,N(E._payload),x)}if(Ai(E)||gi(E))return E=Vr(E,I.mode,x,null),E.return=I,E;fa(I,E)}return null}function v(I,E,x,N){var V=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return V!==null?null:l(I,E,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case na:return x.key===V?u(I,E,x,N):null;case cs:return x.key===V?d(I,E,x,N):null;case qn:return V=x._init,v(I,E,V(x._payload),N)}if(Ai(x)||gi(x))return V!==null?null:m(I,E,x,N,null);fa(I,x)}return null}function b(I,E,x,N,V){if(typeof N=="string"&&N!==""||typeof N=="number")return I=I.get(x)||null,l(E,I,""+N,V);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case na:return I=I.get(N.key===null?x:N.key)||null,u(E,I,N,V);case cs:return I=I.get(N.key===null?x:N.key)||null,d(E,I,N,V);case qn:var O=N._init;return b(I,E,x,O(N._payload),V)}if(Ai(N)||gi(N))return I=I.get(x)||null,m(E,I,N,V,null);fa(E,N)}return null}function R(I,E,x,N){for(var V=null,O=null,w=E,p=E=0,_=null;w!==null&&p<x.length;p++){w.index>p?(_=w,w=null):_=w.sibling;var S=v(I,w,x[p],N);if(S===null){w===null&&(w=_);break}t&&w&&S.alternate===null&&e(I,w),E=i(S,E,p),O===null?V=S:O.sibling=S,O=S,w=_}if(p===x.length)return n(I,w),we&&kr(I,p),V;if(w===null){for(;p<x.length;p++)w=y(I,x[p],N),w!==null&&(E=i(w,E,p),O===null?V=w:O.sibling=w,O=w);return we&&kr(I,p),V}for(w=r(I,w);p<x.length;p++)_=b(w,I,p,x[p],N),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?p:_.key),E=i(_,E,p),O===null?V=_:O.sibling=_,O=_);return t&&w.forEach(function(k){return e(I,k)}),we&&kr(I,p),V}function P(I,E,x,N){var V=gi(x);if(typeof V!="function")throw Error(j(150));if(x=V.call(x),x==null)throw Error(j(151));for(var O=V=null,w=E,p=E=0,_=null,S=x.next();w!==null&&!S.done;p++,S=x.next()){w.index>p?(_=w,w=null):_=w.sibling;var k=v(I,w,S.value,N);if(k===null){w===null&&(w=_);break}t&&w&&k.alternate===null&&e(I,w),E=i(k,E,p),O===null?V=k:O.sibling=k,O=k,w=_}if(S.done)return n(I,w),we&&kr(I,p),V;if(w===null){for(;!S.done;p++,S=x.next())S=y(I,S.value,N),S!==null&&(E=i(S,E,p),O===null?V=S:O.sibling=S,O=S);return we&&kr(I,p),V}for(w=r(I,w);!S.done;p++,S=x.next())S=b(w,I,p,S.value,N),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?p:S.key),E=i(S,E,p),O===null?V=S:O.sibling=S,O=S);return t&&w.forEach(function(A){return e(I,A)}),we&&kr(I,p),V}function D(I,E,x,N){if(typeof x=="object"&&x!==null&&x.type===ds&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case na:e:{for(var V=x.key,O=E;O!==null;){if(O.key===V){if(V=x.type,V===ds){if(O.tag===7){n(I,O.sibling),E=s(O,x.props.children),E.return=I,I=E;break e}}else if(O.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===qn&&Hm(V)===O.type){n(I,O.sibling),E=s(O,x.props),E.ref=wi(I,O,x),E.return=I,I=E;break e}n(I,O);break}else e(I,O);O=O.sibling}x.type===ds?(E=Vr(x.props.children,I.mode,N,x.key),E.return=I,I=E):(N=Va(x.type,x.key,x.props,null,I.mode,N),N.ref=wi(I,E,x),N.return=I,I=N)}return o(I);case cs:e:{for(O=x.key;E!==null;){if(E.key===O)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(I,E.sibling),E=s(E,x.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=tc(x,I.mode,N),E.return=I,I=E}return o(I);case qn:return O=x._init,D(I,E,O(x._payload),N)}if(Ai(x))return R(I,E,x,N);if(gi(x))return P(I,E,x,N);fa(I,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,E!==null&&E.tag===6?(n(I,E.sibling),E=s(E,x),E.return=I,I=E):(n(I,E),E=ec(x,I.mode,N),E.return=I,I=E),o(I)):n(I,E)}return D}var Os=$y(!0),qy=$y(!1),sl=_r(null),il=null,_s=null,Jd=null;function Zd(){Jd=_s=il=null}function eh(t){var e=sl.current;Ee(sl),t._currentValue=e}function $c(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){il=t,Jd=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Jd!==t)if(t={context:t,memoizedValue:e,next:null},_s===null){if(il===null)throw Error(j(308));_s=t,il.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return e}var Rr=null;function th(t){Rr===null?Rr=[t]:Rr.push(t)}function Wy(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,th(e)):(n.next=s.next,s.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function nh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Rn(t,n)}return s=r.interleaved,s===null?(e.next=e,th(r)):(e.next=s.next,s.next=e),r.interleaved=e,Rn(t,n)}function Pa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bd(t,n)}}function Gm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ol(t,e,n,r){var s=t.updateQueue;Wn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=u))}if(i!==null){var y=s.baseState;o=0,m=d=u=null,l=i;do{var v=l.lane,b=l.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(v=e,b=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){y=R.call(b,y,v);break e}y=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,v=typeof R=="function"?R.call(b,y,v):R,v==null)break e;y=xe({},y,v);break e;case 2:Wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=s.effects,v===null?s.effects=[l]:v.push(l))}else b={eventTime:b,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=b,u=y):m=m.next=b,o|=v;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;v=l,l=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(m===null&&(u=y),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=y}}function Km(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Ao={},an=_r(Ao),oo=_r(Ao),ao=_r(Ao);function Nr(t){if(t===Ao)throw Error(j(174));return t}function rh(t,e){switch(ye(ao,e),ye(oo,t),ye(an,Ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ic(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ic(e,t)}Ee(an),ye(an,e)}function Ms(){Ee(an),Ee(oo),Ee(ao)}function Gy(t){Nr(ao.current);var e=Nr(an.current),n=Ic(e,t.type);e!==n&&(ye(oo,t),ye(an,n))}function sh(t){oo.current===t&&(Ee(an),Ee(oo))}var Ie=_r(0);function al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ku=[];function ih(){for(var t=0;t<Ku.length;t++)Ku[t]._workInProgressVersionPrimary=null;Ku.length=0}var Ca=Mn.ReactCurrentDispatcher,Qu=Mn.ReactCurrentBatchConfig,Ur=0,Se=null,Fe=null,We=null,ll=!1,ji=!1,lo=0,wT=0;function ot(){throw Error(j(321))}function oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function ah(t,e,n,r,s,i){if(Ur=i,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ca.current=t===null||t.memoizedState===null?xT:AT,t=n(r,s),ji){i=0;do{if(ji=!1,lo=0,25<=i)throw Error(j(301));i+=1,We=Fe=null,e.updateQueue=null,Ca.current=kT,t=n(r,s)}while(ji)}if(Ca.current=ul,e=Fe!==null&&Fe.next!==null,Ur=0,We=Fe=Se=null,ll=!1,e)throw Error(j(300));return t}function lh(){var t=lo!==0;return lo=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Se.memoizedState=We=t:We=We.next=t,We}function zt(){if(Fe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=We===null?Se.memoizedState:We.next;if(e!==null)We=e,Fe=t;else{if(t===null)throw Error(j(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Se.memoizedState=We=t:We=We.next=t}return We}function uo(t,e){return typeof e=="function"?e(t):e}function Xu(t){var e=zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Fe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var m=d.lane;if((Ur&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var y={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,Se.lanes|=m,jr|=m}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,Zt(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Se.lanes|=i,jr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yu(t){var e=zt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Zt(i,e.memoizedState)||(Tt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Ky(){}function Qy(t,e){var n=Se,r=zt(),s=e(),i=!Zt(r.memoizedState,s);if(i&&(r.memoizedState=s,Tt=!0),r=r.queue,uh(Jy.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,co(9,Yy.bind(null,n,r,s,e),void 0,null),He===null)throw Error(j(349));Ur&30||Xy(n,e,s)}return s}function Xy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yy(t,e,n,r){e.value=n,e.getSnapshot=r,Zy(e)&&ev(t)}function Jy(t,e,n){return n(function(){Zy(e)&&ev(t)})}function Zy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function ev(t){var e=Rn(t,1);e!==null&&Jt(e,t,1,-1)}function Qm(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:t},e.queue=t,t=t.dispatch=ST.bind(null,Se,t),[e.memoizedState,t]}function co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tv(){return zt().memoizedState}function Ra(t,e,n,r){var s=nn();Se.flags|=t,s.memoizedState=co(1|e,n,void 0,r===void 0?null:r)}function Fl(t,e,n,r){var s=zt();r=r===void 0?null:r;var i=void 0;if(Fe!==null){var o=Fe.memoizedState;if(i=o.destroy,r!==null&&oh(r,o.deps)){s.memoizedState=co(e,n,i,r);return}}Se.flags|=t,s.memoizedState=co(1|e,n,i,r)}function Xm(t,e){return Ra(8390656,8,t,e)}function uh(t,e){return Fl(2048,8,t,e)}function nv(t,e){return Fl(4,2,t,e)}function rv(t,e){return Fl(4,4,t,e)}function sv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iv(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,sv.bind(null,e,t),n)}function ch(){}function ov(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function av(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lv(t,e,n){return Ur&21?(Zt(n,e)||(n=fy(),Se.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function TT(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Qu.transition;Qu.transition={};try{t(!1),e()}finally{he=n,Qu.transition=r}}function uv(){return zt().memoizedState}function IT(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cv(t))dv(e,n);else if(n=Wy(t,e,n,r),n!==null){var s=yt();Jt(n,t,r,s),hv(n,e,r)}}function ST(t,e,n){var r=ar(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cv(t))dv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Zt(l,o)){var u=e.interleaved;u===null?(s.next=s,th(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Wy(t,e,s,r),n!==null&&(s=yt(),Jt(n,t,r,s),hv(n,e,r))}}function cv(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function dv(t,e){ji=ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bd(t,n)}}var ul={readContext:Bt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},xT={readContext:Bt,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:Xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4194308,4,sv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ra(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=IT.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:ch,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=TT.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,s=nn();if(we){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),He===null)throw Error(j(349));Ur&30||Xy(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Xm(Jy.bind(null,r,i,t),[t]),r.flags|=2048,co(9,Yy.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=nn(),e=He.identifierPrefix;if(we){var n=wn,r=En;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AT={readContext:Bt,useCallback:ov,useContext:Bt,useEffect:uh,useImperativeHandle:iv,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:av,useReducer:Xu,useRef:tv,useState:function(){return Xu(uo)},useDebugValue:ch,useDeferredValue:function(t){var e=zt();return lv(e,Fe.memoizedState,t)},useTransition:function(){var t=Xu(uo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Ky,useSyncExternalStore:Qy,useId:uv,unstable_isNewReconciler:!1},kT={readContext:Bt,useCallback:ov,useContext:Bt,useEffect:uh,useImperativeHandle:iv,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:av,useReducer:Yu,useRef:tv,useState:function(){return Yu(uo)},useDebugValue:ch,useDeferredValue:function(t){var e=zt();return Fe===null?e.memoizedState=t:lv(e,Fe.memoizedState,t)},useTransition:function(){var t=Yu(uo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Ky,useSyncExternalStore:Qy,useId:uv,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ul={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),s=ar(t),i=xn(r,s);i.payload=e,n!=null&&(i.callback=n),e=ir(t,i,s),e!==null&&(Jt(e,t,s,r),Pa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),s=ar(t),i=xn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ir(t,i,s),e!==null&&(Jt(e,t,s,r),Pa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=ar(t),s=xn(n,r);s.tag=2,e!=null&&(s.callback=e),e=ir(t,s,r),e!==null&&(Jt(e,t,r,n),Pa(e,t,r))}};function Ym(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!no(n,r)||!no(s,i):!0}function fv(t,e,n){var r=!1,s=mr,i=e.contextType;return typeof i=="object"&&i!==null?i=Bt(i):(s=xt(e)?Mr:ht.current,r=e.contextTypes,i=(r=r!=null)?Ls(t,s):mr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ul,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ul.enqueueReplaceState(e,e.state,null)}function Wc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},nh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Bt(i):(i=xt(e)?Mr:ht.current,s.context=Ls(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(qc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ul.enqueueReplaceState(s,s.state,null),ol(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,e){try{var n="",r=e;do n+=tw(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ju(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bT=typeof WeakMap=="function"?WeakMap:Map;function mv(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dl||(dl=!0,nd=r),Hc(t,e)},n}function pv(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Hc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hc(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=zT.bind(null,t,e,n),e.then(t,t))}function ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tp(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var PT=Mn.ReactCurrentOwner,Tt=!1;function gt(t,e,n,r){e.child=t===null?qy(e,null,n,r):Os(e,t.child,n,r)}function np(t,e,n,r,s){n=n.render;var i=e.ref;return ks(e,s),r=ah(t,e,n,r,i,s),n=lh(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Nn(t,e,s)):(we&&n&&Qd(e),e.flags|=1,gt(t,e,r,s),e.child)}function rp(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!vh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,gv(t,e,i,r,s)):(t=Va(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(o,r)&&t.ref===e.ref)return Nn(t,e,s)}return e.flags|=1,t=lr(i,r),t.ref=e.ref,t.return=e,e.child=t}function gv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(no(i,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Nn(t,e,s)}return Gc(t,e,n,r,s)}function yv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(ws,bt),bt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(ws,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ye(ws,bt),bt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ye(ws,bt),bt|=r;return gt(t,e,s,n),e.child}function vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gc(t,e,n,r,s){var i=xt(n)?Mr:ht.current;return i=Ls(e,i),ks(e,s),n=ah(t,e,n,r,i,s),r=lh(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Nn(t,e,s)):(we&&r&&Qd(e),e.flags|=1,gt(t,e,n,s),e.child)}function sp(t,e,n,r,s){if(xt(n)){var i=!0;tl(e)}else i=!1;if(ks(e,s),e.stateNode===null)Na(t,e),fv(e,n,r),Wc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Bt(d):(d=xt(n)?Mr:ht.current,d=Ls(e,d));var m=n.getDerivedStateFromProps,y=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Jm(e,o,r,d),Wn=!1;var v=e.memoizedState;o.state=v,ol(e,r,o,s),u=e.memoizedState,l!==r||v!==u||St.current||Wn?(typeof m=="function"&&(qc(e,n,m,r),u=e.memoizedState),(l=Wn||Ym(e,n,l,r,v,u,d))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Hy(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Gt(e.type,l),o.props=d,y=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=xt(n)?Mr:ht.current,u=Ls(e,u));var b=n.getDerivedStateFromProps;(m=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||v!==u)&&Jm(e,o,r,u),Wn=!1,v=e.memoizedState,o.state=v,ol(e,r,o,s);var R=e.memoizedState;l!==y||v!==R||St.current||Wn?(typeof b=="function"&&(qc(e,n,b,r),R=e.memoizedState),(d=Wn||Ym(e,n,d,r,v,R,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Kc(t,e,n,r,i,s)}function Kc(t,e,n,r,s,i){vv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&$m(e,n,!1),Nn(t,e,i);r=e.stateNode,PT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,i),e.child=Os(e,null,l,i)):gt(t,e,l,i),e.memoizedState=r.state,s&&$m(e,n,!0),e.child}function _v(t){var e=t.stateNode;e.pendingContext?zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zm(t,e.context,!1),rh(t,e.containerInfo)}function ip(t,e,n,r,s){return Vs(),Yd(s),e.flags|=256,gt(t,e,n,r),e.child}var Qc={dehydrated:null,treeContext:null,retryLane:0};function Xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ev(t,e,n){var r=e.pendingProps,s=Ie.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ye(Ie,s&1),t===null)return zc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=zl(o,r,0,null),t=Vr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Xc(n),e.memoizedState=Qc,t):dh(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return CT(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=lr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=lr(l,i):(i=Vr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Xc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Qc,r}return i=t.child,t=i.sibling,r=lr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dh(t,e){return e=zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ma(t,e,n,r){return r!==null&&Yd(r),Os(e,t.child,null,n),t=dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Ju(Error(j(422))),ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=zl({mode:"visible",children:r.children},s,0,null),i=Vr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=Xc(o),e.memoizedState=Qc,i);if(!(e.mode&1))return ma(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Ju(i,r,void 0),ma(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=He,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Rn(t,s),Jt(r,t,s,-1))}return yh(),r=Ju(Error(j(421))),ma(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=$T.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Pt=sr(s.nextSibling),Ct=e,we=!0,Qt=null,t!==null&&(Ot[Mt++]=En,Ot[Mt++]=wn,Ot[Mt++]=Fr,En=t.id,wn=t.overflow,Fr=e),e=dh(e,r.children),e.flags|=4096,e)}function op(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$c(t.return,e,n)}function Zu(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function wv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(gt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,n,e);else if(t.tag===19)op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&al(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Zu(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&al(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Zu(e,!0,n,null,i);break;case"together":Zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Na(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RT(t,e,n){switch(e.tag){case 3:_v(e),Vs();break;case 5:Gy(e);break;case 1:xt(e.type)&&tl(e);break;case 4:rh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ye(sl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Ev(t,e,n):(ye(Ie,Ie.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);ye(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,yv(t,e,n)}return Nn(t,e,n)}var Tv,Yc,Iv,Sv;Tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yc=function(){};Iv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Nr(an.current);var i=null;switch(n){case"input":s=_c(t,s),r=_c(t,r),i=[];break;case"select":s=xe({},s,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":s=Tc(t,s),r=Tc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Za)}Sc(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Qi.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Qi.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&_e("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};Sv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ti(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NT(t,e,n){var r=e.pendingProps;switch(Xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return xt(e.type)&&el(),at(e),null;case 3:return r=e.stateNode,Ms(),Ee(St),Ee(ht),ih(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(id(Qt),Qt=null))),Yc(t,e),at(e),null;case 5:sh(e);var s=Nr(ao.current);if(n=e.type,t!==null&&e.stateNode!=null)Iv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return at(e),null}if(t=Nr(an.current),ha(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[rn]=e,r[io]=i,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(s=0;s<bi.length;s++)_e(bi[s],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":pm(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":ym(r,i),_e("invalid",r)}Sc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&da(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&da(r.textContent,l,t),s=["children",""+l]):Qi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":ra(r),gm(r,i,!0);break;case"textarea":ra(r),vm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Za)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[io]=r,Tv(t,e,!1,!1),e.stateNode=t;e:{switch(o=xc(n,r),n){case"dialog":_e("cancel",t),_e("close",t),s=r;break;case"iframe":case"object":case"embed":_e("load",t),s=r;break;case"video":case"audio":for(s=0;s<bi.length;s++)_e(bi[s],t);s=r;break;case"source":_e("error",t),s=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),s=r;break;case"details":_e("toggle",t),s=r;break;case"input":pm(t,r),s=_c(t,r),_e("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=xe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":ym(t,r),s=Tc(t,r),_e("invalid",t);break;default:s=r}Sc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?ty(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Zg(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xi(t,u):typeof u=="number"&&Xi(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&_e("scroll",t):u!=null&&Vd(t,i,u,o))}switch(n){case"input":ra(t),gm(t,r,!1);break;case"textarea":ra(t),vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Is(t,!!r.multiple,i,!1):r.defaultValue!=null&&Is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)Sv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Nr(ao.current),Nr(an.current),ha(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(i=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return at(e),null;case 13:if(Ee(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Pt!==null&&e.mode&1&&!(e.flags&128))zy(),Vs(),e.flags|=98560,i=!1;else if(i=ha(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[rn]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),i=!1}else Qt!==null&&(id(Qt),Qt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?je===0&&(je=3):yh())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return Ms(),Yc(t,e),t===null&&ro(e.stateNode.containerInfo),at(e),null;case 10:return eh(e.type._context),at(e),null;case 17:return xt(e.type)&&el(),at(e),null;case 19:if(Ee(Ie),i=e.memoizedState,i===null)return at(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ti(i,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=al(t),o!==null){for(e.flags|=128,Ti(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ie,Ie.current&1|2),e.child}t=t.sibling}i.tail!==null&&Re()>Us&&(e.flags|=128,r=!0,Ti(i,!1),e.lanes=4194304)}else{if(!r)if(t=al(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!we)return at(e),null}else 2*Re()-i.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,r=!0,Ti(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Re(),e.sibling=null,n=Ie.current,ye(Ie,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return gh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function DT(t,e){switch(Xd(e),e.tag){case 1:return xt(e.type)&&el(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),Ee(St),Ee(ht),ih(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sh(e),null;case 13:if(Ee(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ie),null;case 4:return Ms(),null;case 10:return eh(e.type._context),null;case 22:case 23:return gh(),null;case 24:return null;default:return null}}var pa=!1,ct=!1,LT=typeof WeakSet=="function"?WeakSet:Set,q=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Jc(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var ap=!1;function VT(t,e){if(Vc=Xa,t=Py(),Kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,m=0,y=t,v=null;t:for(;;){for(var b;y!==n||s!==0&&y.nodeType!==3||(l=o+s),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(b=y.firstChild)!==null;)v=y,y=b;for(;;){if(y===t)break t;if(v===n&&++d===s&&(l=o),v===i&&++m===r&&(u=o),(b=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=b}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oc={focusedElem:t,selectionRange:n},Xa=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,D=R.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?P:Gt(e.type,P),D);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(N){Pe(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return R=ap,ap=!1,R}function Bi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Jc(e,n,i)}s=s.next}while(s!==r)}}function jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xv(t){var e=t.alternate;e!==null&&(t.alternate=null,xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[io],delete e[Uc],delete e[yT],delete e[vT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Za));else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var Ke=null,Kt=!1;function zn(t,e,n){for(n=n.child;n!==null;)kv(t,e,n),n=n.sibling}function kv(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:ct||Es(n,e);case 6:var r=Ke,s=Kt;Ke=null,zn(t,e,n),Ke=r,Kt=s,Ke!==null&&(Kt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Kt?(t=Ke,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),eo(t)):Hu(Ke,n.stateNode));break;case 4:r=Ke,s=Kt,Ke=n.stateNode.containerInfo,Kt=!0,zn(t,e,n),Ke=r,Kt=s;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Jc(n,e,o),s=s.next}while(s!==r)}zn(t,e,n);break;case 1:if(!ct&&(Es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,zn(t,e,n),ct=r):zn(t,e,n);break;default:zn(t,e,n)}}function up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LT),e.forEach(function(r){var s=qT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Kt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Kt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(Ke===null)throw Error(j(160));kv(i,o,s),Ke=null,Kt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){Pe(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bv(e,t),e=e.sibling}function bv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),tn(t),r&4){try{Bi(3,t,t.return),jl(3,t)}catch(P){Pe(t,t.return,P)}try{Bi(5,t,t.return)}catch(P){Pe(t,t.return,P)}}break;case 1:Ht(e,t),tn(t),r&512&&n!==null&&Es(n,n.return);break;case 5:if(Ht(e,t),tn(t),r&512&&n!==null&&Es(n,n.return),t.flags&32){var s=t.stateNode;try{Xi(s,"")}catch(P){Pe(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Xg(s,i),xc(l,o);var d=xc(l,i);for(o=0;o<u.length;o+=2){var m=u[o],y=u[o+1];m==="style"?ty(s,y):m==="dangerouslySetInnerHTML"?Zg(s,y):m==="children"?Xi(s,y):Vd(s,m,y,d)}switch(l){case"input":Ec(s,i);break;case"textarea":Yg(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Is(s,!!i.multiple,b,!1):v!==!!i.multiple&&(i.defaultValue!=null?Is(s,!!i.multiple,i.defaultValue,!0):Is(s,!!i.multiple,i.multiple?[]:"",!1))}s[io]=i}catch(P){Pe(t,t.return,P)}}break;case 6:if(Ht(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Pe(t,t.return,P)}}break;case 3:if(Ht(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(P){Pe(t,t.return,P)}break;case 4:Ht(e,t),tn(t);break;case 13:Ht(e,t),tn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(mh=Re())),r&4&&up(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(d=ct)||m,Ht(e,t),ct=d):Ht(e,t),tn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(q=t,m=t.child;m!==null;){for(y=q=m;q!==null;){switch(v=q,b=v.child,v.tag){case 0:case 11:case 14:case 15:Bi(4,v,v.return);break;case 1:Es(v,v.return);var R=v.stateNode;if(typeof R.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Pe(r,n,P)}}break;case 5:Es(v,v.return);break;case 22:if(v.memoizedState!==null){dp(y);continue}}b!==null?(b.return=v,q=b):dp(y)}m=m.sibling}e:for(m=null,y=t;;){if(y.tag===5){if(m===null){m=y;try{s=y.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ey("display",o))}catch(P){Pe(t,t.return,P)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(P){Pe(t,t.return,P)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ht(e,t),tn(t),r&4&&up(t);break;case 21:break;default:Ht(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Xi(s,""),r.flags&=-33);var i=lp(t);td(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lp(t);ed(t,l,o);break;default:throw Error(j(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OT(t,e,n){q=t,Pv(t)}function Pv(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||pa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ct;l=pa;var d=ct;if(pa=o,(ct=u)&&!d)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?hp(s):u!==null?(u.return=o,q=u):hp(s);for(;i!==null;)q=i,Pv(i),i=i.sibling;q=s,pa=l,ct=d}cp(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):cp(t)}}function cp(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||jl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Km(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Km(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&eo(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ct||e.flags&512&&Zc(e)}catch(v){Pe(e,e.return,v)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function dp(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function hp(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jl(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Pe(e,s,u)}}var i=e.return;try{Zc(e)}catch(u){Pe(e,i,u)}break;case 5:var o=e.return;try{Zc(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var MT=Math.ceil,cl=Mn.ReactCurrentDispatcher,hh=Mn.ReactCurrentOwner,jt=Mn.ReactCurrentBatchConfig,le=0,He=null,Ve=null,Ye=0,bt=0,ws=_r(0),je=0,ho=null,jr=0,Bl=0,fh=0,zi=null,wt=null,mh=0,Us=1/0,vn=null,dl=!1,nd=null,or=null,ga=!1,Zn=null,hl=0,$i=0,rd=null,Da=-1,La=0;function yt(){return le&6?Re():Da!==-1?Da:Da=Re()}function ar(t){return t.mode&1?le&2&&Ye!==0?Ye&-Ye:ET.transition!==null?(La===0&&(La=fy()),La):(t=he,t!==0||(t=window.event,t=t===void 0?16:Ey(t.type)),t):1}function Jt(t,e,n,r){if(50<$i)throw $i=0,rd=null,Error(j(185));Io(t,n,r),(!(le&2)||t!==He)&&(t===He&&(!(le&2)&&(Bl|=n),je===4&&Gn(t,Ye)),At(t,r),n===1&&le===0&&!(e.mode&1)&&(Us=Re()+500,Ml&&Er()))}function At(t,e){var n=t.callbackNode;Ew(t,e);var r=Qa(t,t===He?Ye:0);if(r===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?_T(fp.bind(null,t)):Uy(fp.bind(null,t)),pT(function(){!(le&6)&&Er()}),n=null;else{switch(my(r)){case 1:n=jd;break;case 4:n=dy;break;case 16:n=Ka;break;case 536870912:n=hy;break;default:n=Ka}n=Mv(n,Cv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cv(t,e){if(Da=-1,La=0,le&6)throw Error(j(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var r=Qa(t,t===He?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fl(t,r);else{e=r;var s=le;le|=2;var i=Nv();(He!==t||Ye!==e)&&(vn=null,Us=Re()+500,Lr(t,e));do try{jT();break}catch(l){Rv(t,l)}while(!0);Zd(),cl.current=i,le=s,Ve!==null?e=0:(He=null,Ye=0,e=je)}if(e!==0){if(e===2&&(s=Cc(t),s!==0&&(r=s,e=sd(t,s))),e===1)throw n=ho,Lr(t,0),Gn(t,r),At(t,Re()),n;if(e===6)Gn(t,r);else{if(s=t.current.alternate,!(r&30)&&!FT(s)&&(e=fl(t,r),e===2&&(i=Cc(t),i!==0&&(r=i,e=sd(t,i))),e===1))throw n=ho,Lr(t,0),Gn(t,r),At(t,Re()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:br(t,wt,vn);break;case 3:if(Gn(t,r),(r&130023424)===r&&(e=mh+500-Re(),10<e)){if(Qa(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Fc(br.bind(null,t,wt,vn),e);break}br(t,wt,vn);break;case 4:if(Gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Yt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MT(r/1960))-r,10<r){t.timeoutHandle=Fc(br.bind(null,t,wt,vn),r);break}br(t,wt,vn);break;case 5:br(t,wt,vn);break;default:throw Error(j(329))}}}return At(t,Re()),t.callbackNode===n?Cv.bind(null,t):null}function sd(t,e){var n=zi;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=fl(t,e),t!==2&&(e=wt,wt=n,e!==null&&id(e)),t}function id(t){wt===null?wt=t:wt.push.apply(wt,t)}function FT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Zt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e){for(e&=~fh,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function fp(t){if(le&6)throw Error(j(327));bs();var e=Qa(t,0);if(!(e&1))return At(t,Re()),null;var n=fl(t,e);if(t.tag!==0&&n===2){var r=Cc(t);r!==0&&(e=r,n=sd(t,r))}if(n===1)throw n=ho,Lr(t,0),Gn(t,e),At(t,Re()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,wt,vn),At(t,Re()),null}function ph(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Us=Re()+500,Ml&&Er())}}function Br(t){Zn!==null&&Zn.tag===0&&!(le&6)&&bs();var e=le;le|=1;var n=jt.transition,r=he;try{if(jt.transition=null,he=1,t)return t()}finally{he=r,jt.transition=n,le=e,!(le&6)&&Er()}}function gh(){bt=ws.current,Ee(ws)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mT(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Xd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:Ms(),Ee(St),Ee(ht),ih();break;case 5:sh(r);break;case 4:Ms();break;case 13:Ee(Ie);break;case 19:Ee(Ie);break;case 10:eh(r.type._context);break;case 22:case 23:gh()}n=n.return}if(He=t,Ve=t=lr(t.current,null),Ye=bt=e,je=0,ho=null,fh=Bl=jr=0,wt=zi=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Rr=null}return t}function Rv(t,e){do{var n=Ve;try{if(Zd(),Ca.current=ul,ll){for(var r=Se.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ll=!1}if(Ur=0,We=Fe=Se=null,ji=!1,lo=0,hh.current=null,n===null||n.return===null){je=1,ho=e,Ve=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=l,y=m.tag;if(!(m.mode&1)&&(y===0||y===11||y===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var b=ep(o);if(b!==null){b.flags&=-257,tp(b,o,l,i,e),b.mode&1&&Zm(i,d,e),e=b,u=d;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){Zm(i,d,e),yh();break e}u=Error(j(426))}}else if(we&&l.mode&1){var D=ep(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),tp(D,o,l,i,e),Yd(Fs(u,l));break e}}i=u=Fs(u,l),je!==4&&(je=2),zi===null?zi=[i]:zi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=mv(i,u,e);Gm(i,I);break e;case 1:l=u;var E=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(or===null||!or.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var N=pv(i,l,e);Gm(i,N);break e}}i=i.return}while(i!==null)}Lv(n)}catch(V){e=V,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Nv(){var t=cl.current;return cl.current=ul,t===null?ul:t}function yh(){(je===0||je===3||je===2)&&(je=4),He===null||!(jr&268435455)&&!(Bl&268435455)||Gn(He,Ye)}function fl(t,e){var n=le;le|=2;var r=Nv();(He!==t||Ye!==e)&&(vn=null,Lr(t,e));do try{UT();break}catch(s){Rv(t,s)}while(!0);if(Zd(),le=n,cl.current=r,Ve!==null)throw Error(j(261));return He=null,Ye=0,je}function UT(){for(;Ve!==null;)Dv(Ve)}function jT(){for(;Ve!==null&&!dw();)Dv(Ve)}function Dv(t){var e=Ov(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?Lv(t):Ve=e,hh.current=null}function Lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DT(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Ve=null;return}}else if(n=NT(n,e,bt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);je===0&&(je=5)}function br(t,e,n){var r=he,s=jt.transition;try{jt.transition=null,he=1,BT(t,e,n,r)}finally{jt.transition=s,he=r}return null}function BT(t,e,n,r){do bs();while(Zn!==null);if(le&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(ww(t,i),t===He&&(Ve=He=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ga||(ga=!0,Mv(Ka,function(){return bs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=jt.transition,jt.transition=null;var o=he;he=1;var l=le;le|=4,hh.current=null,VT(t,n),bv(n,t),aT(Oc),Xa=!!Vc,Oc=Vc=null,t.current=n,OT(n),hw(),le=l,he=o,jt.transition=i}else t.current=n;if(ga&&(ga=!1,Zn=t,hl=s),i=t.pendingLanes,i===0&&(or=null),pw(n.stateNode),At(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(dl)throw dl=!1,t=nd,nd=null,t;return hl&1&&t.tag!==0&&bs(),i=t.pendingLanes,i&1?t===rd?$i++:($i=0,rd=t):$i=0,Er(),null}function bs(){if(Zn!==null){var t=my(hl),e=jt.transition,n=he;try{if(jt.transition=null,he=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,hl=0,le&6)throw Error(j(331));var s=le;for(le|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(q=d;q!==null;){var m=q;switch(m.tag){case 0:case 11:case 15:Bi(8,m,i)}var y=m.child;if(y!==null)y.return=m,q=y;else for(;q!==null;){m=q;var v=m.sibling,b=m.return;if(xv(m),m===d){q=null;break}if(v!==null){v.return=b,q=v;break}q=b}}}var R=i.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bi(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,q=I;break e}q=i.return}}var E=t.current;for(q=E;q!==null;){o=q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,q=x;else e:for(o=E;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:jl(9,l)}}catch(V){Pe(l,l.return,V)}if(l===o){q=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,q=N;break e}q=l.return}}if(le=s,Er(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Nl,t)}catch{}r=!0}return r}finally{he=n,jt.transition=e}}return!1}function mp(t,e,n){e=Fs(n,e),e=mv(t,e,1),t=ir(t,e,1),e=yt(),t!==null&&(Io(t,1,e),At(t,e))}function Pe(t,e,n){if(t.tag===3)mp(t,t,n);else for(;e!==null;){if(e.tag===3){mp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=Fs(n,t),t=pv(e,t,1),e=ir(e,t,1),t=yt(),e!==null&&(Io(e,1,t),At(e,t));break}}e=e.return}}function zT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ye&n)===n&&(je===4||je===3&&(Ye&130023424)===Ye&&500>Re()-mh?Lr(t,0):fh|=n),At(t,e)}function Vv(t,e){e===0&&(t.mode&1?(e=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):e=1);var n=yt();t=Rn(t,e),t!==null&&(Io(t,e,n),At(t,n))}function $T(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vv(t,n)}function qT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Vv(t,n)}var Ov;Ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,RT(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,we&&e.flags&1048576&&jy(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Na(t,e),t=e.pendingProps;var s=Ls(e,ht.current);ks(e,n),s=ah(null,e,r,t,s,n);var i=lh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(i=!0,tl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,nh(e),s.updater=Ul,e.stateNode=s,s._reactInternals=e,Wc(e,r,t,n),e=Kc(null,e,r,!0,i,n)):(e.tag=0,we&&i&&Qd(e),gt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Na(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=HT(r),t=Gt(r,t),s){case 0:e=Gc(null,e,r,t,n);break e;case 1:e=sp(null,e,r,t,n);break e;case 11:e=np(null,e,r,t,n);break e;case 14:e=rp(null,e,r,Gt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),Gc(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),sp(t,e,r,s,n);case 3:e:{if(_v(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Hy(t,e),ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Fs(Error(j(423)),e),e=ip(t,e,r,n,s);break e}else if(r!==s){s=Fs(Error(j(424)),e),e=ip(t,e,r,n,s);break e}else for(Pt=sr(e.stateNode.containerInfo.firstChild),Ct=e,we=!0,Qt=null,n=qy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),r===s){e=Nn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return Gy(e),t===null&&zc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Mc(r,s)?o=null:i!==null&&Mc(r,i)&&(e.flags|=32),vv(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&zc(e),null;case 13:return Ev(t,e,n);case 4:return rh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Os(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),np(t,e,r,s,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ye(sl,r._currentValue),r._currentValue=o,i!==null)if(Zt(i.value,o)){if(i.children===s.children&&!St.current){e=Nn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=xn(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),$c(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$c(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}gt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ks(e,n),s=Bt(s),r=r(s),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,s=Gt(r,e.pendingProps),s=Gt(r.type,s),rp(t,e,r,s,n);case 15:return gv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),Na(t,e),e.tag=1,xt(r)?(t=!0,tl(e)):t=!1,ks(e,n),fv(e,r,s),Wc(e,r,s,n),Kc(null,e,r,!0,t,n);case 19:return wv(t,e,n);case 22:return yv(t,e,n)}throw Error(j(156,e.tag))};function Mv(t,e){return cy(t,e)}function WT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new WT(t,e,n,r)}function vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HT(t){if(typeof t=="function")return vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Md)return 11;if(t===Fd)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")vh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ds:return Vr(n.children,s,i,e);case Od:o=8,s|=8;break;case pc:return t=Ut(12,n,e,s|2),t.elementType=pc,t.lanes=i,t;case gc:return t=Ut(13,n,e,s),t.elementType=gc,t.lanes=i,t;case yc:return t=Ut(19,n,e,s),t.elementType=yc,t.lanes=i,t;case Gg:return zl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wg:o=10;break e;case Hg:o=9;break e;case Md:o=11;break e;case Fd:o=14;break e;case qn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Vr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function zl(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=Gg,t.lanes=n,t.stateNode={isHidden:!1},t}function ec(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function tc(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vu(0),this.expirationTimes=Vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function _h(t,e,n,r,s,i,o,l,u){return t=new GT(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Ut(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(i),t}function KT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Fv(t){if(!t)return mr;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(xt(n))return Fy(t,n,e)}return e}function Uv(t,e,n,r,s,i,o,l,u){return t=_h(n,r,!0,t,s,i,o,l,u),t.context=Fv(null),n=t.current,r=yt(),s=ar(n),i=xn(r,s),i.callback=e??null,ir(n,i,s),t.current.lanes=s,Io(t,s,r),At(t,r),t}function $l(t,e,n,r){var s=e.current,i=yt(),o=ar(s);return n=Fv(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(s,e,o),t!==null&&(Jt(t,s,o,i),Pa(t,s,o)),o}function ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Eh(t,e){pp(t,e),(t=t.alternate)&&pp(t,e)}function QT(){return null}var jv=typeof reportError=="function"?reportError:function(t){console.error(t)};function wh(t){this._internalRoot=t}ql.prototype.render=wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));$l(t,e,null,null)};ql.prototype.unmount=wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){$l(null,t,null,null)}),e[Cn]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=yy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&_y(t)}};function Th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function XT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=ml(o);i.call(d)}}var o=Uv(e,r,t,0,null,!1,!1,"",gp);return t._reactRootContainer=o,t[Cn]=o.current,ro(t.nodeType===8?t.parentNode:t),Br(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=ml(u);l.call(d)}}var u=_h(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=u,t[Cn]=u.current,ro(t.nodeType===8?t.parentNode:t),Br(function(){$l(e,u,n,r)}),u}function Hl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=ml(o);l.call(u)}}$l(e,o,t,s)}else o=XT(n,e,t,s,r);return ml(o)}py=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ki(e.pendingLanes);n!==0&&(Bd(e,n|1),At(e,Re()),!(le&6)&&(Us=Re()+500,Er()))}break;case 13:Br(function(){var r=Rn(t,1);if(r!==null){var s=yt();Jt(r,t,1,s)}}),Eh(t,1)}};zd=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=yt();Jt(e,t,134217728,n)}Eh(t,134217728)}};gy=function(t){if(t.tag===13){var e=ar(t),n=Rn(t,e);if(n!==null){var r=yt();Jt(n,t,e,r)}Eh(t,e)}};yy=function(){return he};vy=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};kc=function(t,e,n){switch(e){case"input":if(Ec(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ol(r);if(!s)throw Error(j(90));Qg(r),Ec(r,s)}}}break;case"textarea":Yg(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};sy=ph;iy=Br;var YT={usingClientEntryPoint:!1,Events:[xo,ps,Ol,ny,ry,ph]},Ii={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JT={bundleType:Ii.bundleType,version:Ii.version,rendererPackageName:Ii.rendererPackageName,rendererConfig:Ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ly(t),t===null?null:t.stateNode},findFiberByHostInstance:Ii.findFiberByHostInstance||QT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{Nl=ya.inject(JT),on=ya}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YT;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(e))throw Error(j(200));return KT(t,e,null,n)};Lt.createRoot=function(t,e){if(!Th(t))throw Error(j(299));var n=!1,r="",s=jv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=_h(t,1,!1,null,null,n,!1,r,s),t[Cn]=e.current,ro(t.nodeType===8?t.parentNode:t),new wh(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=ly(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return Br(t)};Lt.hydrate=function(t,e,n){if(!Wl(e))throw Error(j(200));return Hl(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Th(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=jv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Uv(e,null,t,1,n??null,s,!1,i,o),t[Cn]=e.current,ro(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new ql(e)};Lt.render=function(t,e,n){if(!Wl(e))throw Error(j(200));return Hl(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(j(40));return t._reactRootContainer?(Br(function(){Hl(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Lt.unstable_batchedUpdates=ph;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wl(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Hl(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function Bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bv)}catch(t){console.error(t)}}Bv(),Bg.exports=Lt;var ZT=Bg.exports,yp=ZT;fc.createRoot=yp.createRoot,fc.hydrateRoot=yp.hydrateRoot;var vp={};/**
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
 */const zv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,m=i>>2,y=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,b=d&63;u||(b=64,o||(v=64)),r.push(n[m],n[y],n[v],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||y==null)throw new tI;const v=i<<2|l>>4;if(r.push(v),d!==64){const b=l<<4&240|d>>2;if(r.push(b),y!==64){const R=d<<6&192|y;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nI=function(t){const e=zv(t);return $v.encodeByteArray(e,!0)},pl=function(t){return nI(t).replace(/\./g,"")},qv=function(t){try{return $v.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const sI=()=>rI().__FIREBASE_DEFAULTS__,iI=()=>{if(typeof process>"u"||typeof vp>"u")return;const t=vp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qv(t[1]);return e&&JSON.parse(e)},Gl=()=>{try{return sI()||iI()||oI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wv=t=>{var e,n;return(n=(e=Gl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aI=t=>{const e=Wv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Hv=()=>{var t;return(t=Gl())===null||t===void 0?void 0:t.config},Gv=t=>{var e;return(e=Gl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function uI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pl(JSON.stringify(n)),pl(JSON.stringify(o)),""].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function dI(){var t;const e=(t=Gl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pI(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gI(){return!dI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yI(){try{return typeof indexedDB=="object"}catch{return!1}}function vI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const _I="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_I,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ko.prototype.create)}}class ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?EI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,l,r)}}function EI(t,e){return t.replace(wI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wI=/\{\$([^}]+)}/g;function TI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_p(i)&&_p(o)){if(!gl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _p(t){return t!==null&&typeof t=="object"}/**
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
 */function bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function II(t,e){const n=new SI(t,e);return n.subscribe.bind(n)}class SI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nc),s.error===void 0&&(s.error=nc),s.complete===void 0&&(s.complete=nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nc(){}/**
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
 */function $t(t){return t&&t._delegate?t._delegate:t}class zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */class AI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bI(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kI(t){return t===Pr?void 0:t}function bI(t){return t.instantiationMode==="EAGER"}/**
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
 */class PI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const CI={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},RI=ie.INFO,NI={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},DI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ih{constructor(e){this.name=e,this._logLevel=RI,this._logHandler=DI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const LI=(t,e)=>e.some(n=>t instanceof n);let Ep,wp;function VI(){return Ep||(Ep=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OI(){return wp||(wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kv=new WeakMap,od=new WeakMap,Qv=new WeakMap,rc=new WeakMap,Sh=new WeakMap;function MI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kv.set(n,t)}).catch(()=>{}),Sh.set(e,t),e}function FI(t){if(od.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});od.set(t,e)}let ad={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return od.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UI(t){ad=t(ad)}function jI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sc(this),e,...n);return Qv.set(r,e.sort?e.sort():[e]),ur(r)}:OI().includes(t)?function(...e){return t.apply(sc(this),e),ur(Kv.get(this))}:function(...e){return ur(t.apply(sc(this),e))}}function BI(t){return typeof t=="function"?jI(t):(t instanceof IDBTransaction&&FI(t),LI(t,VI())?new Proxy(t,ad):t)}function ur(t){if(t instanceof IDBRequest)return MI(t);if(rc.has(t))return rc.get(t);const e=BI(t);return e!==t&&(rc.set(t,e),Sh.set(e,t)),e}const sc=t=>Sh.get(t);function zI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ur(o.result),u.oldVersion,u.newVersion,ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const $I=["get","getKey","getAll","getAllKeys","count"],qI=["put","add","delete","clear"],ic=new Map;function Tp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$I.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return ic.set(e,i),i}UI(t=>({...t,get:(e,n,r)=>Tp(e,n)||t.get(e,n,r),has:(e,n)=>!!Tp(e,n)||t.has(e,n)}));/**
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
 */class WI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ld="@firebase/app",Ip="0.10.13";/**
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
 */const Dn=new Ih("@firebase/app"),GI="@firebase/app-compat",KI="@firebase/analytics-compat",QI="@firebase/analytics",XI="@firebase/app-check-compat",YI="@firebase/app-check",JI="@firebase/auth",ZI="@firebase/auth-compat",eS="@firebase/database",tS="@firebase/data-connect",nS="@firebase/database-compat",rS="@firebase/functions",sS="@firebase/functions-compat",iS="@firebase/installations",oS="@firebase/installations-compat",aS="@firebase/messaging",lS="@firebase/messaging-compat",uS="@firebase/performance",cS="@firebase/performance-compat",dS="@firebase/remote-config",hS="@firebase/remote-config-compat",fS="@firebase/storage",mS="@firebase/storage-compat",pS="@firebase/firestore",gS="@firebase/vertexai-preview",yS="@firebase/firestore-compat",vS="firebase",_S="10.14.1";/**
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
 */const ud="[DEFAULT]",ES={[ld]:"fire-core",[GI]:"fire-core-compat",[QI]:"fire-analytics",[KI]:"fire-analytics-compat",[YI]:"fire-app-check",[XI]:"fire-app-check-compat",[JI]:"fire-auth",[ZI]:"fire-auth-compat",[eS]:"fire-rtdb",[tS]:"fire-data-connect",[nS]:"fire-rtdb-compat",[rS]:"fire-fn",[sS]:"fire-fn-compat",[iS]:"fire-iid",[oS]:"fire-iid-compat",[aS]:"fire-fcm",[lS]:"fire-fcm-compat",[uS]:"fire-perf",[cS]:"fire-perf-compat",[dS]:"fire-rc",[hS]:"fire-rc-compat",[fS]:"fire-gcs",[mS]:"fire-gcs-compat",[pS]:"fire-fst",[yS]:"fire-fst-compat",[gS]:"fire-vertex","fire-js":"fire-js",[vS]:"fire-js-all"};/**
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
 */const yl=new Map,wS=new Map,cd=new Map;function Sp(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function js(t){const e=t.name;if(cd.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;cd.set(e,t);for(const n of yl.values())Sp(n,t);for(const n of wS.values())Sp(n,t);return!0}function xh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
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
 */const TS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new ko("app","Firebase",TS);/**
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
 */class IS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ys=_S;function Xv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ud,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw cr.create("bad-app-name",{appName:String(s)});if(n||(n=Hv()),!n)throw cr.create("no-options");const i=yl.get(s);if(i){if(gl(n,i.options)&&gl(r,i.config))return i;throw cr.create("duplicate-app",{appName:s})}const o=new PI(s);for(const u of cd.values())o.addComponent(u);const l=new IS(n,r,o);return yl.set(s,l),l}function Yv(t=ud){const e=yl.get(t);if(!e&&t===ud&&Hv())return Xv();if(!e)throw cr.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let s=(r=ES[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}js(new zr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const SS="firebase-heartbeat-database",xS=1,fo="firebase-heartbeat-store";let oc=null;function Jv(){return oc||(oc=zI(SS,xS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),oc}async function AS(t){try{const n=(await Jv()).transaction(fo),r=await n.objectStore(fo).get(Zv(t));return await n.done,r}catch(e){if(e instanceof Fn)Dn.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function xp(t,e){try{const r=(await Jv()).transaction(fo,"readwrite");await r.objectStore(fo).put(e,Zv(t)),await r.done}catch(n){if(n instanceof Fn)Dn.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function Zv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kS=1024,bS=30*24*60*60*1e3;class PS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ap();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=bS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ap(),{heartbeatsToSend:r,unsentEntries:s}=CS(this._heartbeatsCache.heartbeats),i=pl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dn.warn(n),""}}}function Ap(){return new Date().toISOString().substring(0,10)}function CS(t,e=kS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),kp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),kp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yI()?vI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function kp(t){return pl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function NS(t){js(new zr("platform-logger",e=>new WI(e),"PRIVATE")),js(new zr("heartbeat",e=>new PS(e),"PRIVATE")),dr(ld,Ip,t),dr(ld,Ip,"esm2017"),dr("fire-js","")}NS("");var DS="firebase",LS="10.14.1";/**
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
 */dr(DS,LS,"app");function Ah(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VS=e_,t_=new ko("auth","Firebase",e_());/**
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
 */const vl=new Ih("@firebase/auth");function OS(t,...e){vl.logLevel<=ie.WARN&&vl.warn(`Auth (${Ys}): ${t}`,...e)}function Oa(t,...e){vl.logLevel<=ie.ERROR&&vl.error(`Auth (${Ys}): ${t}`,...e)}/**
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
 */function en(t,...e){throw kh(t,...e)}function ln(t,...e){return kh(t,...e)}function n_(t,e,n){const r=Object.assign(Object.assign({},VS()),{[e]:n});return new ko("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return n_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return t_.create(t,...e)}function J(t,e,...n){if(!t)throw kh(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oa(e),new Error(e)}function Ln(t,e){t||Tn(e)}/**
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
 */function dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MS(){return bp()==="http:"||bp()==="https:"}function bp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */class Po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=cI()||mI()}get(){return FS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bh(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class r_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BS=new Po(3e4,6e4);function wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tr(t,e,n,r,s={}){return s_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=bo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return hI()||(d.referrerPolicy="no-referrer"),r_.fetch()(i_(t,t.config.apiHost,n,l),d)})}async function s_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jS),e);try{const s=new $S(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw va(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw va(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw va(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw va(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw n_(t,m,d);en(t,m)}}catch(s){if(s instanceof Fn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function Co(t,e,n,r,s={}){const i=await Tr(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}function i_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bh(t.config,s):`${t.config.apiScheme}://${s}`}function zS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $S{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),BS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function Pp(t){return t!==void 0&&t.enterprise!==void 0}class qS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function WS(t,e){return Tr(t,"GET","/v2/recaptchaConfig",wr(t,e))}/**
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
 */async function HS(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function o_(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GS(t,e=!1){const n=$t(t),r=await n.getIdToken(e),s=Ph(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qi(ac(s.auth_time)),issuedAtTime:qi(ac(s.iat)),expirationTime:qi(ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ac(t){return Number(t)*1e3}function Ph(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{const s=qv(n);return s?JSON.parse(s):(Oa("Failed to decode base64 JWT payload"),null)}catch(s){return Oa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cp(t){const e=Ph(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&KS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class hd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _l(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mo(t,o_(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?a_(i.providerUserInfo):[],l=YS(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),m=u?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new hd(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(t,y)}async function XS(t){const e=$t(t);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function a_(t){return t.map(e=>{var{providerId:n}=e,r=Ah(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function JS(t,e){const n=await s_(t,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=i_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",r_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZS(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",wr(t,e))}/**
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
 */class Ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Cp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await JS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ps;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ps,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function $n(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ah(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GS(this,e)}reload(){return XS(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await mo(this,HS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,d,m;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(d=n.createdAt)!==null&&d!==void 0?d:void 0,E=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:x,emailVerified:N,isAnonymous:V,providerData:O,stsTokenManager:w}=n;J(x&&w,e,"internal-error");const p=Ps.fromJSON(this.name,w);J(typeof x=="string",e,"internal-error"),$n(y,e.name),$n(v,e.name),J(typeof N=="boolean",e,"internal-error"),J(typeof V=="boolean",e,"internal-error"),$n(b,e.name),$n(R,e.name),$n(P,e.name),$n(D,e.name),$n(I,e.name),$n(E,e.name);const _=new In({uid:x,auth:e,email:v,emailVerified:N,displayName:y,isAnonymous:V,photoURL:R,phoneNumber:b,tenantId:P,stsTokenManager:p,createdAt:I,lastLoginAt:E});return O&&Array.isArray(O)&&(_.providerData=O.map(S=>Object.assign({},S))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ps;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _l(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?a_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ps;l.updateFromIdToken(r);const u=new In({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Rp=new Map;function Sn(t){Ln(t instanceof Function,"Expected a class definition");let e=Rp.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rp.set(t,e),e)}/**
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
 */class l_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}l_.type="NONE";const Np=l_;/**
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
 */function Ma(t,e,n){return`firebase:${t}:${e}:${n}`}class Cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ma(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ma("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cs(Sn(Np),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Sn(Np);const o=Ma(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const m=await d._get(o);if(m){const y=In._fromJSON(e,m);d!==i&&(l=y),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Cs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Cs(i,e,r))}}/**
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
 */function Dp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(m_(e))return"Blackberry";if(p_(e))return"Webos";if(c_(e))return"Safari";if((e.includes("chrome/")||d_(e))&&!e.includes("edge/"))return"Chrome";if(f_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function u_(t=ft()){return/firefox\//i.test(t)}function c_(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d_(t=ft()){return/crios\//i.test(t)}function h_(t=ft()){return/iemobile/i.test(t)}function f_(t=ft()){return/android/i.test(t)}function m_(t=ft()){return/blackberry/i.test(t)}function p_(t=ft()){return/webos/i.test(t)}function Ch(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function e1(t=ft()){var e;return Ch(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function t1(){return pI()&&document.documentMode===10}function g_(t=ft()){return Ch(t)||f_(t)||p_(t)||m_(t)||/windows phone/i.test(t)||h_(t)}/**
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
 */function y_(t,e=[]){let n;switch(t){case"Browser":n=Dp(ft());break;case"Worker":n=`${Dp(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${r}`}/**
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
 */class n1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function r1(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",wr(t,e))}/**
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
 */const s1=6;class i1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:s1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class o1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lp(this),this.idTokenSubscription=new Lp(this),this.beforeStateQueue=new n1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await o_(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=US()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(An(this));const n=e?$t(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await r1(this),n=new i1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Cs.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return $t(t)}class Lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=II(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function a1(t){Kl=t}function v_(t){return Kl.loadJS(t)}function l1(){return Kl.recaptchaEnterpriseScript}function u1(){return Kl.gapiScript}function c1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const d1="recaptcha-enterprise",h1="NO_RECAPTCHA";class f1{constructor(e){this.type=d1,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{WS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new qS(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Pp(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(h1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Pp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=l1();u.length!==0&&(u+=l),v_(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Vp(t,e,n,r=!1){const s=new f1(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Vp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function m1(t,e){const n=xh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(gl(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function p1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function g1(t,e,n){const r=Yr(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=__(e),{host:o,port:l}=y1(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),v1()}function __(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function y1(t){const e=__(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Op(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Op(o)}}}function Op(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function v1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function _1(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function E1(t,e){return Co(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}/**
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
 */async function w1(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}async function T1(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}/**
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
 */class po extends Rh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fd(e,n,"signInWithPassword",E1);case"emailLink":return w1(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fd(e,r,"signUpPassword",_1);case"emailLink":return T1(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rs(t,e){return Co(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}/**
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
 */const I1="http://localhost";class $r extends Rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ah(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:I1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bo(n)}return e}}/**
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
 */function S1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function x1(t){const e=Pi(Ci(t)).link,n=e?Pi(Ci(e)).deep_link_id:null,r=Pi(Ci(t)).deep_link_id;return(r?Pi(Ci(r)).link:null)||r||n||e||t}class Nh{constructor(e){var n,r,s,i,o,l;const u=Pi(Ci(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,y=S1((s=u.mode)!==null&&s!==void 0?s:null);J(d&&m&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=x1(e);try{return new Nh(n)}catch{return null}}}/**
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
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nh.parseLink(n);return J(r,"argument-error"),po._fromEmailAndCode(e,r.code,r.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ro extends E_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends Ro{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class Xn extends Ro{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Yn extends Ro{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function A1(t,e){return Co(t,"POST","/v1/accounts:signUp",wr(t,e))}/**
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
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=Mp(r);return new qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mp(r);return new qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class El extends Fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new El(e,n,r,s)}}function w_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(t,i,e,r):i})}async function k1(t,e,n=!1){const r=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
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
 */async function b1(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(An(r));const s="reauthenticate";try{const i=await mo(t,w_(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=Ph(i.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
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
 */async function T_(t,e,n=!1){if(sn(t.app))return Promise.reject(An(t));const r="signIn",s=await w_(t,r,e),i=await qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function P1(t,e){return T_(Yr(t),e)}/**
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
 */async function I_(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function C1(t,e,n){if(sn(t.app))return Promise.reject(An(t));const r=Yr(t),o=await fd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",A1).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&I_(t),u}),l=await qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Fp(t,e,n){return sn(t.app)?Promise.reject(An(t)):P1($t(t),Js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&I_(t),r})}function R1(t,e,n,r){return $t(t).onIdTokenChanged(e,n,r)}function N1(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}const wl="__sak";/**
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
 */class S_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wl,"1"),this.storage.removeItem(wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const D1=1e3,L1=10;class x_ extends S_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);t1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,L1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},D1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x_.type="LOCAL";const V1=x_;/**
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
 */class A_ extends S_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A_.type="SESSION";const k_=A_;/**
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
 */function O1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await O1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ql.receivers=[];/**
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
 */function Dh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class M1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=Dh("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(y){const v=y;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function un(){return window}function F1(t){un().location.href=t}/**
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
 */function b_(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function U1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function B1(){return b_()?self:null}/**
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
 */const P_="firebaseLocalStorageDb",z1=1,Tl="firebaseLocalStorage",C_="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xl(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function $1(){const t=indexedDB.deleteDatabase(P_);return new No(t).toPromise()}function md(){const t=indexedDB.open(P_,z1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:C_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await $1(),e(await md()))})})}async function Up(t,e,n){const r=Xl(t,!0).put({[C_]:e,value:n});return new No(r).toPromise()}async function q1(t,e){const n=Xl(t,!1).get(e),r=await new No(n).toPromise();return r===void 0?null:r.value}function jp(t,e){const n=Xl(t,!0).delete(e);return new No(n).toPromise()}const W1=800,H1=3;class R_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>H1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ql._getInstance(B1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await U1(),!this.activeServiceWorker)return;this.sender=new M1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await Up(e,wl,"1"),await jp(e,wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Up(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>q1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xl(s,!1).getAll();return new No(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R_.type="LOCAL";const G1=R_;new Po(3e4,6e4);/**
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
 */function K1(t,e){return e?Sn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lh extends Rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q1(t){return T_(t.auth,new Lh(t),t.bypassAuthState)}function X1(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),b1(n,new Lh(t),t.bypassAuthState)}async function Y1(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),k1(n,new Lh(t),t.bypassAuthState)}/**
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
 */class N_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q1;case"linkViaPopup":case"linkViaRedirect":return Y1;case"reauthViaPopup":case"reauthViaRedirect":return X1;default:en(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const J1=new Po(2e3,1e4);class Ts extends N_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,J1.get())};e()}}Ts.currentPopupAction=null;/**
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
 */const Z1="pendingRedirect",Fa=new Map;class ex extends N_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fa.get(this.auth._key());if(!e){try{const r=await tx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fa.set(this.auth._key(),e)}return this.bypassAuthState||Fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tx(t,e){const n=sx(e),r=rx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nx(t,e){Fa.set(t._key(),e)}function rx(t){return Sn(t._redirectPersistence)}function sx(t){return Ma(Z1,t.config.apiKey,t.name)}async function ix(t,e,n=!1){if(sn(t.app))return Promise.reject(An(t));const r=Yr(t),s=K1(r,e),o=await new ex(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ox=10*60*1e3;class ax{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!D_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ox&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bp(e))}saveEventToCache(e){this.cachedEventUids.add(Bp(e)),this.lastProcessedEventTime=Date.now()}}function Bp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function D_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D_(t);default:return!1}}/**
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
 */async function ux(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
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
 */const cx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dx=/^https?/;async function hx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ux(t);for(const n of e)try{if(fx(n))return}catch{}en(t,"unauthorized-domain")}function fx(t){const e=dd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dx.test(n))return!1;if(cx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const mx=new Po(3e4,6e4);function zp(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function px(t){return new Promise((e,n)=>{var r,s,i;function o(){zp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zp(),n(ln(t,"network-request-failed"))},timeout:mx.get()})}if(!((s=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=un().gapi)===null||i===void 0)&&i.load)o();else{const l=c1("iframefcb");return un()[l]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},v_(`${u1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ua=null,e})}let Ua=null;function gx(t){return Ua=Ua||px(t),Ua}/**
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
 */const yx=new Po(5e3,15e3),vx="__/auth/iframe",_x="emulator/auth/iframe",Ex={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tx(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bh(e,_x):`https://${t.config.authDomain}/${vx}`,r={apiKey:e.apiKey,appName:t.name,v:Ys},s=wx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${bo(r).slice(1)}`}async function Ix(t){const e=await gx(t),n=un().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:Tx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ex,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=un().setTimeout(()=>{i(o)},yx.get());function u(){un().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const Sx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xx=500,Ax=600,kx="_blank",bx="http://localhost";class $p{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Px(t,e,n,r=xx,s=Ax){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Sx),{width:r.toString(),height:s.toString(),top:i,left:o}),d=ft().toLowerCase();n&&(l=d_(d)?kx:n),u_(d)&&(e=e||bx,u.scrollbars="yes");const m=Object.entries(u).reduce((v,[b,R])=>`${v}${b}=${R},`,"");if(e1(d)&&l!=="_self")return Cx(e||"",l),new $p(null);const y=window.open(e||"",l,m);J(y,t,"popup-blocked");try{y.focus()}catch{}return new $p(y)}function Cx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Rx="__/auth/handler",Nx="emulator/auth/handler",Dx=encodeURIComponent("fac");async function qp(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ys,eventId:s};if(e instanceof E_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))o[m]=y}if(e instanceof Ro){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await t._getAppCheckToken(),d=u?`#${Dx}=${encodeURIComponent(u)}`:"";return`${Lx(t)}?${bo(l).slice(1)}${d}`}function Lx({config:t}){return t.emulator?bh(t,Nx):`https://${t.authDomain}/${Rx}`}/**
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
 */const lc="webStorageSupport";class Vx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k_,this._completeRedirectFn=ix,this._overrideRedirectResult=nx}async _openPopup(e,n,r,s){var i;Ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qp(e,n,r,dd(),s);return Px(e,o,Dh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qp(e,n,r,dd(),s);return F1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ix(e),r=new ax(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lc,{type:lc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[lc];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g_()||c_()||Ch()}}const Ox=Vx;var Wp="@firebase/auth",Hp="1.7.9";/**
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
 */class Mx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Fx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ux(t){js(new zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y_(t)},d=new o1(r,s,i,u);return p1(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),js(new zr("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new Mx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(Wp,Hp,Fx(t)),dr(Wp,Hp,"esm2017")}/**
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
 */const jx=5*60,Bx=Gv("authIdTokenMaxAge")||jx;let Gp=null;const zx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bx)return;const s=n==null?void 0:n.token;Gp!==s&&(Gp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $x(t=Yv()){const e=xh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=m1(t,{popupRedirectResolver:Ox,persistence:[G1,V1,k_]}),r=Gv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zx(i.toString());N1(n,o,()=>o(n.currentUser)),R1(n,l=>o(l))}}const s=Wv("auth");return s&&g1(n,`http://${s}`),n}function qx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}a1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",qx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ux("Browser");var Kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,L_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,p){function _(){}_.prototype=p.prototype,w.D=p.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(S,k,A){for(var T=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)T[ke-2]=arguments[ke];return p.prototype[k].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,p,_){_||(_=0);var S=Array(16);if(typeof p=="string")for(var k=0;16>k;++k)S[k]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(k=0;16>k;++k)S[k]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=w.g[0],_=w.g[1],k=w.g[2];var A=w.g[3],T=p+(A^_&(k^A))+S[0]+3614090360&4294967295;p=_+(T<<7&4294967295|T>>>25),T=A+(k^p&(_^k))+S[1]+3905402710&4294967295,A=p+(T<<12&4294967295|T>>>20),T=k+(_^A&(p^_))+S[2]+606105819&4294967295,k=A+(T<<17&4294967295|T>>>15),T=_+(p^k&(A^p))+S[3]+3250441966&4294967295,_=k+(T<<22&4294967295|T>>>10),T=p+(A^_&(k^A))+S[4]+4118548399&4294967295,p=_+(T<<7&4294967295|T>>>25),T=A+(k^p&(_^k))+S[5]+1200080426&4294967295,A=p+(T<<12&4294967295|T>>>20),T=k+(_^A&(p^_))+S[6]+2821735955&4294967295,k=A+(T<<17&4294967295|T>>>15),T=_+(p^k&(A^p))+S[7]+4249261313&4294967295,_=k+(T<<22&4294967295|T>>>10),T=p+(A^_&(k^A))+S[8]+1770035416&4294967295,p=_+(T<<7&4294967295|T>>>25),T=A+(k^p&(_^k))+S[9]+2336552879&4294967295,A=p+(T<<12&4294967295|T>>>20),T=k+(_^A&(p^_))+S[10]+4294925233&4294967295,k=A+(T<<17&4294967295|T>>>15),T=_+(p^k&(A^p))+S[11]+2304563134&4294967295,_=k+(T<<22&4294967295|T>>>10),T=p+(A^_&(k^A))+S[12]+1804603682&4294967295,p=_+(T<<7&4294967295|T>>>25),T=A+(k^p&(_^k))+S[13]+4254626195&4294967295,A=p+(T<<12&4294967295|T>>>20),T=k+(_^A&(p^_))+S[14]+2792965006&4294967295,k=A+(T<<17&4294967295|T>>>15),T=_+(p^k&(A^p))+S[15]+1236535329&4294967295,_=k+(T<<22&4294967295|T>>>10),T=p+(k^A&(_^k))+S[1]+4129170786&4294967295,p=_+(T<<5&4294967295|T>>>27),T=A+(_^k&(p^_))+S[6]+3225465664&4294967295,A=p+(T<<9&4294967295|T>>>23),T=k+(p^_&(A^p))+S[11]+643717713&4294967295,k=A+(T<<14&4294967295|T>>>18),T=_+(A^p&(k^A))+S[0]+3921069994&4294967295,_=k+(T<<20&4294967295|T>>>12),T=p+(k^A&(_^k))+S[5]+3593408605&4294967295,p=_+(T<<5&4294967295|T>>>27),T=A+(_^k&(p^_))+S[10]+38016083&4294967295,A=p+(T<<9&4294967295|T>>>23),T=k+(p^_&(A^p))+S[15]+3634488961&4294967295,k=A+(T<<14&4294967295|T>>>18),T=_+(A^p&(k^A))+S[4]+3889429448&4294967295,_=k+(T<<20&4294967295|T>>>12),T=p+(k^A&(_^k))+S[9]+568446438&4294967295,p=_+(T<<5&4294967295|T>>>27),T=A+(_^k&(p^_))+S[14]+3275163606&4294967295,A=p+(T<<9&4294967295|T>>>23),T=k+(p^_&(A^p))+S[3]+4107603335&4294967295,k=A+(T<<14&4294967295|T>>>18),T=_+(A^p&(k^A))+S[8]+1163531501&4294967295,_=k+(T<<20&4294967295|T>>>12),T=p+(k^A&(_^k))+S[13]+2850285829&4294967295,p=_+(T<<5&4294967295|T>>>27),T=A+(_^k&(p^_))+S[2]+4243563512&4294967295,A=p+(T<<9&4294967295|T>>>23),T=k+(p^_&(A^p))+S[7]+1735328473&4294967295,k=A+(T<<14&4294967295|T>>>18),T=_+(A^p&(k^A))+S[12]+2368359562&4294967295,_=k+(T<<20&4294967295|T>>>12),T=p+(_^k^A)+S[5]+4294588738&4294967295,p=_+(T<<4&4294967295|T>>>28),T=A+(p^_^k)+S[8]+2272392833&4294967295,A=p+(T<<11&4294967295|T>>>21),T=k+(A^p^_)+S[11]+1839030562&4294967295,k=A+(T<<16&4294967295|T>>>16),T=_+(k^A^p)+S[14]+4259657740&4294967295,_=k+(T<<23&4294967295|T>>>9),T=p+(_^k^A)+S[1]+2763975236&4294967295,p=_+(T<<4&4294967295|T>>>28),T=A+(p^_^k)+S[4]+1272893353&4294967295,A=p+(T<<11&4294967295|T>>>21),T=k+(A^p^_)+S[7]+4139469664&4294967295,k=A+(T<<16&4294967295|T>>>16),T=_+(k^A^p)+S[10]+3200236656&4294967295,_=k+(T<<23&4294967295|T>>>9),T=p+(_^k^A)+S[13]+681279174&4294967295,p=_+(T<<4&4294967295|T>>>28),T=A+(p^_^k)+S[0]+3936430074&4294967295,A=p+(T<<11&4294967295|T>>>21),T=k+(A^p^_)+S[3]+3572445317&4294967295,k=A+(T<<16&4294967295|T>>>16),T=_+(k^A^p)+S[6]+76029189&4294967295,_=k+(T<<23&4294967295|T>>>9),T=p+(_^k^A)+S[9]+3654602809&4294967295,p=_+(T<<4&4294967295|T>>>28),T=A+(p^_^k)+S[12]+3873151461&4294967295,A=p+(T<<11&4294967295|T>>>21),T=k+(A^p^_)+S[15]+530742520&4294967295,k=A+(T<<16&4294967295|T>>>16),T=_+(k^A^p)+S[2]+3299628645&4294967295,_=k+(T<<23&4294967295|T>>>9),T=p+(k^(_|~A))+S[0]+4096336452&4294967295,p=_+(T<<6&4294967295|T>>>26),T=A+(_^(p|~k))+S[7]+1126891415&4294967295,A=p+(T<<10&4294967295|T>>>22),T=k+(p^(A|~_))+S[14]+2878612391&4294967295,k=A+(T<<15&4294967295|T>>>17),T=_+(A^(k|~p))+S[5]+4237533241&4294967295,_=k+(T<<21&4294967295|T>>>11),T=p+(k^(_|~A))+S[12]+1700485571&4294967295,p=_+(T<<6&4294967295|T>>>26),T=A+(_^(p|~k))+S[3]+2399980690&4294967295,A=p+(T<<10&4294967295|T>>>22),T=k+(p^(A|~_))+S[10]+4293915773&4294967295,k=A+(T<<15&4294967295|T>>>17),T=_+(A^(k|~p))+S[1]+2240044497&4294967295,_=k+(T<<21&4294967295|T>>>11),T=p+(k^(_|~A))+S[8]+1873313359&4294967295,p=_+(T<<6&4294967295|T>>>26),T=A+(_^(p|~k))+S[15]+4264355552&4294967295,A=p+(T<<10&4294967295|T>>>22),T=k+(p^(A|~_))+S[6]+2734768916&4294967295,k=A+(T<<15&4294967295|T>>>17),T=_+(A^(k|~p))+S[13]+1309151649&4294967295,_=k+(T<<21&4294967295|T>>>11),T=p+(k^(_|~A))+S[4]+4149444226&4294967295,p=_+(T<<6&4294967295|T>>>26),T=A+(_^(p|~k))+S[11]+3174756917&4294967295,A=p+(T<<10&4294967295|T>>>22),T=k+(p^(A|~_))+S[2]+718787259&4294967295,k=A+(T<<15&4294967295|T>>>17),T=_+(A^(k|~p))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,p){p===void 0&&(p=w.length);for(var _=p-this.blockSize,S=this.B,k=this.h,A=0;A<p;){if(k==0)for(;A<=_;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<p;)if(S[k++]=w.charCodeAt(A++),k==this.blockSize){s(this,S),k=0;break}}else for(;A<p;)if(S[k++]=w[A++],k==this.blockSize){s(this,S),k=0;break}}this.h=k,this.o+=p},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;var _=8*this.o;for(p=w.length-8;p<w.length;++p)w[p]=_&255,_/=256;for(this.u(w),w=Array(16),p=_=0;4>p;++p)for(var S=0;32>S;S+=8)w[_++]=this.g[p]>>>S&255;return w};function i(w,p){var _=l;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=p(w)}function o(w,p){this.h=p;for(var _=[],S=!0,k=w.length-1;0<=k;k--){var A=w[k]|0;S&&A==p||(_[k]=A,S=!1)}this.g=_}var l={};function u(w){return-128<=w&&128>w?i(w,function(p){return new o([p|0],0>p?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return y;if(0>w)return D(d(-w));for(var p=[],_=1,S=0;w>=_;S++)p[S]=w/_|0,_*=4294967296;return new o(p,0)}function m(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return D(m(w.substring(1),p));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),S=y,k=0;k<w.length;k+=8){var A=Math.min(8,w.length-k),T=parseInt(w.substring(k,k+A),p);8>A?(A=d(Math.pow(p,A)),S=S.j(A).add(d(T))):(S=S.j(_),S=S.add(d(T)))}return S}var y=u(0),v=u(1),b=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var w=0,p=1,_=0;_<this.g.length;_++){var S=this.i(_);w+=(0<=S?S:4294967296+S)*p,p*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(P(this))return"-"+D(this).toString(w);for(var p=d(Math.pow(w,6)),_=this,S="";;){var k=N(_,p).g;_=I(_,k.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=k,R(_))return A+S;for(;6>A.length;)A="0"+A;S=A+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=I(this,w),P(w)?-1:R(w)?0:1};function D(w){for(var p=w.g.length,_=[],S=0;S<p;S++)_[S]=~w.g[S];return new o(_,~w.h).add(v)}t.abs=function(){return P(this)?D(this):this},t.add=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],S=0,k=0;k<=p;k++){var A=S+(this.i(k)&65535)+(w.i(k)&65535),T=(A>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);S=T>>>16,A&=65535,T&=65535,_[k]=T<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(w,p){return w.add(D(p))}t.j=function(w){if(R(this)||R(w))return y;if(P(this))return P(w)?D(this).j(D(w)):D(D(this).j(w));if(P(w))return D(this.j(D(w)));if(0>this.l(b)&&0>w.l(b))return d(this.m()*w.m());for(var p=this.g.length+w.g.length,_=[],S=0;S<2*p;S++)_[S]=0;for(S=0;S<this.g.length;S++)for(var k=0;k<w.g.length;k++){var A=this.i(S)>>>16,T=this.i(S)&65535,ke=w.i(k)>>>16,tt=w.i(k)&65535;_[2*S+2*k]+=T*tt,E(_,2*S+2*k),_[2*S+2*k+1]+=A*tt,E(_,2*S+2*k+1),_[2*S+2*k+1]+=T*ke,E(_,2*S+2*k+1),_[2*S+2*k+2]+=A*ke,E(_,2*S+2*k+2)}for(S=0;S<p;S++)_[S]=_[2*S+1]<<16|_[2*S];for(S=p;S<2*p;S++)_[S]=0;return new o(_,0)};function E(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function x(w,p){this.g=w,this.h=p}function N(w,p){if(R(p))throw Error("division by zero");if(R(w))return new x(y,y);if(P(w))return p=N(D(w),p),new x(D(p.g),D(p.h));if(P(p))return p=N(w,D(p)),new x(D(p.g),p.h);if(30<w.g.length){if(P(w)||P(p))throw Error("slowDivide_ only works with positive integers.");for(var _=v,S=p;0>=S.l(w);)_=V(_),S=V(S);var k=O(_,1),A=O(S,1);for(S=O(S,2),_=O(_,2);!R(S);){var T=A.add(S);0>=T.l(w)&&(k=k.add(_),A=T),S=O(S,1),_=O(_,1)}return p=I(w,k.j(p)),new x(k,p)}for(k=y;0<=w.l(p);){for(_=Math.max(1,Math.floor(w.m()/p.m())),S=Math.ceil(Math.log(_)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),A=d(_),T=A.j(p);P(T)||0<T.l(w);)_-=S,A=d(_),T=A.j(p);R(A)&&(A=v),k=k.add(A),w=I(w,T)}return new x(k,w)}t.A=function(w){return N(this,w).h},t.and=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],S=0;S<p;S++)_[S]=this.i(S)&w.i(S);return new o(_,this.h&w.h)},t.or=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],S=0;S<p;S++)_[S]=this.i(S)|w.i(S);return new o(_,this.h|w.h)},t.xor=function(w){for(var p=Math.max(this.g.length,w.g.length),_=[],S=0;S<p;S++)_[S]=this.i(S)^w.i(S);return new o(_,this.h^w.h)};function V(w){for(var p=w.g.length+1,_=[],S=0;S<p;S++)_[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(_,w.h)}function O(w,p){var _=p>>5;p%=32;for(var S=w.g.length-_,k=[],A=0;A<S;A++)k[A]=0<p?w.i(A+_)>>>p|w.i(A+_+1)<<32-p:w.i(A+_);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,L_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,Or=o}).apply(typeof Kp<"u"?Kp:typeof self<"u"?self:typeof window<"u"?window:{});var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var V_,Ri,O_,ja,pd,M_,F_,U_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _a=="object"&&_a];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],c=c(g),c!=g&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var L=f++;return{value:c(L,a[L]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function m(a,c,f){return a.call.apply(a.bind,arguments)}function y(a,c,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function v(a,c,f){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,v.apply(null,arguments)}function b(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,L){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return c.prototype[C].apply(g,B)}}function P(a){const c=a.length;if(0<c){const f=Array(c);for(let g=0;g<c;g++)f[g]=a[g];return f}return[]}function D(a,c){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const C=a.length||0,L=g.length||0;a.length=C+L;for(let B=0;B<L;B++)a[C+B]=g[B]}else a.push(g)}}class I{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var V=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function O(a,c,f){for(const g in a)c.call(f,a[g],g,a)}function w(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function p(a){const c={};for(const f in a)c[f]=a[f];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let L=0;L<_.length;L++)f=_[L],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function k(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function A(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ke{constructor(){this.h=this.g=null}add(c,f){const g=tt.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var tt=new I(()=>new nt,a=>a.reset());class nt{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,z=!1,Q=new ke,Y=()=>{const a=l.Promise.resolve(void 0);Oe=()=>{a.then(de)}};var de=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){A(f)}var c=tt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function ze(a,c){if(me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(V){e:{try{N(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ne[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ze.aa.h.call(this)}}R(ze,me);var Ne={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),$=0;function K(a,c,f,g,C){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=C,this.key=++$,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function De(a){this.src=a,this.g={},this.h=0}De.prototype.add=function(a,c,f,g,C){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var B=mn(a,c,g,C);return-1<B?(c=a[B],f||(c.fa=!1)):(c=new K(c,this.src,L,!!g,C),c.fa=f,a.push(c)),c};function Me(a,c){var f=c.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,c,void 0),L;(L=0<=C)&&Array.prototype.splice.call(g,C,1),L&&(Z(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function mn(a,c,f,g){for(var C=0;C<a.length;++C){var L=a[C];if(!L.da&&L.listener==c&&L.capture==!!f&&L.ha==g)return C}return-1}var pn="closure_lm_"+(1e6*Math.random()|0),Et={};function $e(a,c,f,g,C){if(Array.isArray(c)){for(var L=0;L<c.length;L++)$e(a,c[L],f,g,C);return null}return f=ff(f),a&&a[U]?a.K(c,f,d(g)?!!g.capture:!1,C):sE(a,c,f,!1,g,C)}function sE(a,c,f,g,C,L){if(!c)throw Error("Invalid event type");var B=d(C)?!!C.capture:!!C,pe=hu(a);if(pe||(a[pn]=pe=new De(a)),f=pe.add(c,f,g,B,L),f.proxy)return f;if(g=iE(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)ge||(C=B),C===void 0&&(C=!1),a.addEventListener(c.toString(),g,C);else if(a.attachEvent)a.attachEvent(hf(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function iE(){function a(f){return c.call(a.src,a.listener,f)}const c=oE;return a}function df(a,c,f,g,C){if(Array.isArray(c))for(var L=0;L<c.length;L++)df(a,c[L],f,g,C);else g=d(g)?!!g.capture:!!g,f=ff(f),a&&a[U]?(a=a.i,c=String(c).toString(),c in a.g&&(L=a.g[c],f=mn(L,f,g,C),-1<f&&(Z(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[c],a.h--)))):a&&(a=hu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=mn(c,f,g,C)),(f=-1<a?c[a]:null)&&du(f))}function du(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[U])Me(c.i,a);else{var f=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(f,g,a.capture):c.detachEvent?c.detachEvent(hf(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=hu(c))?(Me(f,a),f.h==0&&(f.src=null,c[pn]=null)):Z(a)}}}function hf(a){return a in Et?Et[a]:Et[a]="on"+a}function oE(a,c){if(a.da)a=!0;else{c=new ze(c,this);var f=a.listener,g=a.ha||a.src;a.fa&&du(a),a=f.call(g,c)}return a}function hu(a){return a=a[pn],a instanceof De?a:null}var fu="__closure_events_fn_"+(1e9*Math.random()>>>0);function ff(a){return typeof a=="function"?a:(a[fu]||(a[fu]=function(c){return a.handleEvent(c)}),a[fu])}function rt(){oe.call(this),this.i=new De(this),this.M=this,this.F=null}R(rt,oe),rt.prototype[U]=!0,rt.prototype.removeEventListener=function(a,c,f,g){df(this,a,c,f,g)};function mt(a,c){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new me(c,a);else if(c instanceof me)c.target=c.target||a;else{var C=c;c=new me(g,a),S(c,C)}if(C=!0,f)for(var L=f.length-1;0<=L;L--){var B=c.g=f[L];C=Uo(B,g,!0,c)&&C}if(B=c.g=a,C=Uo(B,g,!0,c)&&C,C=Uo(B,g,!1,c)&&C,f)for(L=0;L<f.length;L++)B=c.g=f[L],C=Uo(B,g,!1,c)&&C}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],g=0;g<f.length;g++)Z(f[g]);delete a.g[c],a.h--}}this.F=null},rt.prototype.K=function(a,c,f,g){return this.i.add(String(a),c,!1,f,g)},rt.prototype.L=function(a,c,f,g){return this.i.add(String(a),c,!0,f,g)};function Uo(a,c,f,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,L=0;L<c.length;++L){var B=c[L];if(B&&!B.da&&B.capture==f){var pe=B.listener,Ge=B.ha||B.src;B.fa&&Me(a.i,B),C=pe.call(Ge,g)!==!1&&C}}return C&&!g.defaultPrevented}function mf(a,c,f){if(typeof a=="function")f&&(a=v(a,f));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function pf(a){a.g=mf(()=>{a.g=null,a.i&&(a.i=!1,pf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class aE extends oe{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:pf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ri(a){oe.call(this),this.h=a,this.g={}}R(ri,oe);var gf=[];function yf(a){O(a.g,function(c,f){this.g.hasOwnProperty(f)&&du(c)},a),a.g={}}ri.prototype.N=function(){ri.aa.N.call(this),yf(this)},ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mu=l.JSON.stringify,lE=l.JSON.parse,uE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function pu(){}pu.prototype.h=null;function vf(a){return a.h||(a.h=a.i())}function _f(){}var si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gu(){me.call(this,"d")}R(gu,me);function yu(){me.call(this,"c")}R(yu,me);var Ir={},Ef=null;function jo(){return Ef=Ef||new rt}Ir.La="serverreachability";function wf(a){me.call(this,Ir.La,a)}R(wf,me);function ii(a){const c=jo();mt(c,new wf(c))}Ir.STAT_EVENT="statevent";function Tf(a,c){me.call(this,Ir.STAT_EVENT,a),this.stat=c}R(Tf,me);function pt(a){const c=jo();mt(c,new Tf(c,a))}Ir.Ma="timingevent";function If(a,c){me.call(this,Ir.Ma,a),this.size=c}R(If,me);function oi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ai(){this.g=!0}ai.prototype.xa=function(){this.g=!1};function cE(a,c,f,g,C,L){a.info(function(){if(a.g)if(L)for(var B="",pe=L.split("&"),Ge=0;Ge<pe.length;Ge++){var ue=pe[Ge].split("=");if(1<ue.length){var st=ue[0];ue=ue[1];var it=st.split("_");B=2<=it.length&&it[1]=="type"?B+(st+"="+ue+"&"):B+(st+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+c+`
`+f+`
`+B})}function dE(a,c,f,g,C,L,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+c+`
`+f+`
`+L+" "+B})}function es(a,c,f,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+fE(a,f)+(g?" "+g:"")})}function hE(a,c){a.info(function(){return"TIMEOUT: "+c})}ai.prototype.info=function(){};function fE(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var L=C[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<C.length;B++)C[B]=""}}}}return mu(f)}catch{return c}}var Bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vu;function zo(){}R(zo,pu),zo.prototype.g=function(){return new XMLHttpRequest},zo.prototype.i=function(){return{}},vu=new zo;function Un(a,c,f,g){this.j=a,this.i=c,this.l=f,this.R=g||1,this.U=new ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xf}function xf(){this.i=null,this.g="",this.h=!1}var Af={},_u={};function Eu(a,c,f){a.L=1,a.v=Ho(gn(c)),a.m=f,a.P=!0,kf(a,null)}function kf(a,c){a.F=Date.now(),$o(a),a.A=gn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Bf(f.i,"t",g),a.C=0,f=a.j.J,a.h=new xf,a.g=im(a.j,f?c:null,!a.m),0<a.O&&(a.M=new aE(v(a.Y,a,a.g),a.O)),c=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(gf[0]=C.toString()),C=gf);for(var L=0;L<C.length;L++){var B=$e(f,C[L],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?p(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ii(),cE(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const c=this.M;c&&yn(a)==3?c.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const it=yn(this.g);var c=this.g.Ba();const rs=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Kf(this.g)))){this.J||it!=4||c==7||(c==8||0>=rs?ii(3):ii(2)),wu(this);var f=this.g.Z();this.X=f;t:if(bf(this)){var g=Kf(this.g);a="";var C=g.length,L=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),li(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(L&&c==C-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,dE(this.i,this.u,this.A,this.l,this.R,it,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ge=this.g;if((pe=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(pe)){var ue=pe;break t}}ue=null}if(f=ue)es(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tu(this,f);else{this.o=!1,this.s=3,pt(12),Sr(this),li(this);break e}}if(this.P){f=!0;let Wt;for(;!this.J&&this.C<B.length;)if(Wt=mE(this,B),Wt==_u){it==4&&(this.s=4,pt(14),f=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==Af){this.s=4,pt(15),es(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else es(this.i,this.l,Wt,null),Tu(this,Wt);if(bf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||B.length!=0||this.h.h||(this.s=1,pt(16),f=!1),this.o=this.o&&f,!f)es(this.i,this.l,B,"[Invalid Chunked Response]"),Sr(this),li(this);else if(0<B.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),bu(st),st.M=!0,pt(11))}}else es(this.i,this.l,B,null),Tu(this,B);it==4&&Sr(this),this.o&&!this.J&&(it==4?tm(this.j,this):(this.o=!1,$o(this)))}else RE(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Sr(this),li(this)}}}catch{}finally{}};function bf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function mE(a,c){var f=a.C,g=c.indexOf(`
`,f);return g==-1?_u:(f=Number(c.substring(f,g)),isNaN(f)?Af:(g+=1,g+f>c.length?_u:(c=c.slice(g,g+f),a.C=g+f,c)))}Un.prototype.cancel=function(){this.J=!0,Sr(this)};function $o(a){a.S=Date.now()+a.I,Pf(a,a.I)}function Pf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=oi(v(a.ba,a),c)}function wu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(hE(this.i,this.A),this.L!=2&&(ii(),pt(17)),Sr(this),this.s=2,li(this)):Pf(this,this.S-a)};function li(a){a.j.G==0||a.J||tm(a.j,a)}function Sr(a){wu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,yf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Tu(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||Iu(f.h,a))){if(!a.K&&Iu(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Jo(f),Xo(f);else break e;ku(f),pt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=oi(v(f.Za,f),6e3));if(1>=Nf(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Ar(f,11)}else if((a.K||f.g==a)&&Jo(f),!E(c))for(C=f.Da.g.parse(c),c=0;c<C.length;c++){let ue=C[c];if(f.T=ue[0],ue=ue[1],f.G==2)if(ue[0]=="c"){f.K=ue[1],f.ia=ue[2];const st=ue[3];st!=null&&(f.la=st,f.j.info("VER="+f.la));const it=ue[4];it!=null&&(f.Aa=it,f.j.info("SVER="+f.Aa));const rs=ue[5];rs!=null&&typeof rs=="number"&&0<rs&&(g=1.5*rs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Wt=a.g;if(Wt){const ea=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ea){var L=g.h;L.g||ea.indexOf("spdy")==-1&&ea.indexOf("quic")==-1&&ea.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Su(L,L.h),L.h=null))}if(g.D){const Pu=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pu&&(g.ya=Pu,ve(g.I,g.D,Pu))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=a;if(g.qa=sm(g,g.J?g.ia:null,g.W),B.K){Df(g.h,B);var pe=B,Ge=g.L;Ge&&(pe.I=Ge),pe.B&&(wu(pe),$o(pe)),g.g=B}else Zf(g);0<f.i.length&&Yo(f)}else ue[0]!="stop"&&ue[0]!="close"||Ar(f,7);else f.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Ar(f,7):Au(f):ue[0]!="noop"&&f.l&&f.l.ta(ue),f.v=0)}}ii(4)}catch{}}var pE=class{constructor(a,c){this.g=a,this.map=c}};function Cf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Nf(a){return a.h?1:a.g?a.g.size:0}function Iu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Su(a,c){a.g?a.g.add(c):a.h=c}function Df(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Cf.prototype.cancel=function(){if(this.i=Lf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return P(a.i)}function gE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,g=0;g<f;g++)c.push(a[g]);return c}c=[],f=0;for(g in a)c[f++]=a[g];return c}function yE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const g in a)c[f++]=g;return c}}}function Vf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=yE(a),g=gE(a),C=g.length,L=0;L<C;L++)c.call(void 0,g[L],f&&f[L],a)}var Of=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vE(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var L=a[f].substring(0,g);C=a[f].substring(g+1)}else L=a[f];c(L,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xr){this.h=a.h,qo(this,a.j),this.o=a.o,this.g=a.g,Wo(this,a.s),this.l=a.l;var c=a.i,f=new di;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Mf(this,f),this.m=a.m}else a&&(c=String(a).match(Of))?(this.h=!1,qo(this,c[1]||"",!0),this.o=ui(c[2]||""),this.g=ui(c[3]||"",!0),Wo(this,c[4]),this.l=ui(c[5]||"",!0),Mf(this,c[6]||"",!0),this.m=ui(c[7]||"")):(this.h=!1,this.i=new di(null,this.h))}xr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ci(c,Ff,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ci(c,Ff,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ci(f,f.charAt(0)=="/"?wE:EE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ci(f,IE)),a.join("")};function gn(a){return new xr(a)}function qo(a,c,f){a.j=f?ui(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Wo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Mf(a,c,f){c instanceof di?(a.i=c,SE(a.i,a.h)):(f||(c=ci(c,TE)),a.i=new di(c,a.h))}function ve(a,c,f){a.i.set(c,f)}function Ho(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ui(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ci(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,_E),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _E(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ff=/[#\/\?@]/g,EE=/[#\?:]/g,wE=/[#\?]/g,TE=/[#\?@]/g,IE=/#/g;function di(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&vE(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=di.prototype,t.add=function(a,c){jn(this),this.i=null,a=ts(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function Uf(a,c){jn(a),c=ts(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function jf(a,c){return jn(a),c=ts(a,c),a.g.has(c)}t.forEach=function(a,c){jn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(c,C,g,this)},this)},this)},t.na=function(){jn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let g=0;g<c.length;g++){const C=a[g];for(let L=0;L<C.length;L++)f.push(c[g])}return f},t.V=function(a){jn(this);let c=[];if(typeof a=="string")jf(this,a)&&(c=c.concat(this.g.get(ts(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return jn(this),this.i=null,a=ts(this,a),jf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Bf(a,c,f){Uf(a,c),0<f.length&&(a.i=null,a.g.set(ts(a,c),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var g=c[f];const L=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var C=L;B[g]!==""&&(C+="="+encodeURIComponent(String(B[g]))),a.push(C)}}return this.i=a.join("&")};function ts(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function SE(a,c){c&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Uf(this,g),Bf(this,C,f))},a)),a.j=c}function xE(a,c){const f=new ai;if(l.Image){const g=new Image;g.onload=b(Bn,f,"TestLoadImage: loaded",!0,c,g),g.onerror=b(Bn,f,"TestLoadImage: error",!1,c,g),g.onabort=b(Bn,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=b(Bn,f,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function AE(a,c){const f=new ai,g=new AbortController,C=setTimeout(()=>{g.abort(),Bn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(C),L.ok?Bn(f,"TestPingServer: ok",!0,c):Bn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Bn(f,"TestPingServer: error",!1,c)})}function Bn(a,c,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function kE(){this.g=new uE}function bE(a,c,f){const g=f||"";try{Vf(a,function(C,L){let B=C;d(C)&&(B=mu(C)),c.push(g+L+"="+encodeURIComponent(B))})}catch(C){throw c.push(g+"type="+encodeURIComponent("_badmap")),C}}function Go(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Go,pu),Go.prototype.g=function(){return new Ko(this.l,this.j)},Go.prototype.i=function(a){return function(){return a}}({});function Ko(a,c){rt.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ko,rt),t=Ko.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,fi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function zf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?hi(this):fi(this),this.readyState==3&&zf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,hi(this))},t.Qa=function(a){this.g&&(this.response=a,hi(this))},t.ga=function(){this.g&&hi(this)};function hi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,fi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function fi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $f(a){let c="";return O(a,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function xu(a,c,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=$f(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ve(a,c,f))}function be(a){rt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(be,rt);var PE=/^https?$/i,CE=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vu.g(),this.v=this.o?vf(this.o):vf(vu),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(L){qf(this,L);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())f.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(CE,c,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of f)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gf(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){qf(this,L)}};function qf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Wf(a),Qo(a)}function Wf(a){a.A||(a.A=!0,mt(a,"complete"),mt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,mt(this,"complete"),mt(this,"abort"),Qo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qo(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hf(this):this.bb())},t.bb=function(){Hf(this)};function Hf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||yn(a)!=4||a.Z()!=2)){if(a.u&&yn(a)==4)mf(a.Ea,0,a);else if(mt(a,"readystatechange"),yn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var g;if(g=B===0){var C=String(a.D).match(Of)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!PE.test(C?C.toLowerCase():"")}f=g}if(f)mt(a,"complete"),mt(a,"success");else{a.m=6;try{var L=2<yn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",Wf(a)}}finally{Qo(a)}}}}function Qo(a,c){if(a.g){Gf(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||mt(a,"ready");try{f.onreadystatechange=g}catch{}}}function Gf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function yn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),lE(c)}};function Kf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function RE(a){const c={};a=(a.g&&2<=yn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var f=k(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=c[C]||[];c[C]=L,L.push(f)}w(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function Qf(a){this.Aa=0,this.i=[],this.j=new ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mi("baseRetryDelayMs",5e3,a),this.cb=mi("retryDelaySeedMs",1e4,a),this.Wa=mi("forwardChannelMaxRetries",2,a),this.wa=mi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cf(a&&a.concurrentRequestLimit),this.Da=new kE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qf.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,g){pt(0),this.W=a,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=sm(this,null,this.W),Yo(this)};function Au(a){if(Xf(a),a.G==3){var c=a.U++,f=gn(a.I);if(ve(f,"SID",a.K),ve(f,"RID",c),ve(f,"TYPE","terminate"),pi(a,f),c=new Un(a,a.j,c),c.L=2,c.v=Ho(gn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=im(c.j,null),c.g.ea(c.v)),c.F=Date.now(),$o(c)}rm(a)}function Xo(a){a.g&&(bu(a),a.g.cancel(),a.g=null)}function Xf(a){Xo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Jo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Yo(a){if(!Rf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Oe||Y(),z||(Oe(),z=!0),Q.add(c,a),a.B=0}}function NE(a,c){return Nf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=oi(v(a.Ga,a,c),nm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Un(this,this.j,a);let L=this.o;if(this.S&&(L?(L=p(L),S(L,this.S)):L=this.S),this.m!==null||this.O||(C.H=L,L=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=Jf(this,C,c),f=gn(this.I),ve(f,"RID",a),ve(f,"CVER",22),this.D&&ve(f,"X-HTTP-Session-Id",this.D),pi(this,f),L&&(this.O?c="headers="+encodeURIComponent(String($f(L)))+"&"+c:this.m&&xu(f,this.m,L)),Su(this.h,C),this.Ua&&ve(f,"TYPE","init"),this.P?(ve(f,"$req",c),ve(f,"SID","null"),C.T=!0,Eu(C,f,null)):Eu(C,f,c),this.G=2}}else this.G==3&&(a?Yf(this,a):this.i.length==0||Rf(this.h)||Yf(this))};function Yf(a,c){var f;c?f=c.l:f=a.U++;const g=gn(a.I);ve(g,"SID",a.K),ve(g,"RID",f),ve(g,"AID",a.T),pi(a,g),a.m&&a.o&&xu(g,a.m,a.o),f=new Un(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Jf(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Su(a.h,f),Eu(f,g,c)}function pi(a,c){a.H&&O(a.H,function(f,g){ve(c,g,f)}),a.l&&Vf({},function(f,g){ve(c,g,f)})}function Jf(a,c,f){f=Math.min(a.i.length,f);var g=a.l?v(a.l.Na,a.l,a):null;e:{var C=a.i;let L=-1;for(;;){const B=["count="+f];L==-1?0<f?(L=C[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let pe=!0;for(let Ge=0;Ge<f;Ge++){let ue=C[Ge].g;const st=C[Ge].map;if(ue-=L,0>ue)L=Math.max(0,C[Ge].g-100),pe=!1;else try{bE(st,B,"req"+ue+"_")}catch{g&&g(st)}}if(pe){g=B.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,g}function Zf(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Oe||Y(),z||(Oe(),z=!0),Q.add(c,a),a.v=0}}function ku(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=oi(v(a.Fa,a),nm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,em(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=oi(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Xo(this),em(this))};function bu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function em(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=gn(a.qa);ve(c,"RID","rpc"),ve(c,"SID",a.K),ve(c,"AID",a.T),ve(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(c,"TO",a.ja),ve(c,"TYPE","xmlhttp"),pi(a,c),a.m&&a.o&&xu(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ho(gn(c)),f.m=null,f.P=!0,kf(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Xo(this),ku(this),pt(19))};function Jo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function tm(a,c){var f=null;if(a.g==c){Jo(a),bu(a),a.g=null;var g=2}else if(Iu(a.h,c))f=c.D,Df(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;g=jo(),mt(g,new If(g,f)),Yo(a)}else Zf(a);else if(C=c.s,C==3||C==0&&0<c.X||!(g==1&&NE(a,c)||g==2&&ku(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),C){case 1:Ar(a,5);break;case 4:Ar(a,10);break;case 3:Ar(a,6);break;default:Ar(a,2)}}}function nm(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function Ar(a,c){if(a.j.info("Error code "+c),c==2){var f=v(a.fb,a),g=a.Xa;const C=!g;g=new xr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||qo(g,"https"),Ho(g),C?xE(g.toString(),f):AE(g.toString(),f)}else pt(2);a.G=0,a.l&&a.l.sa(c),rm(a),Xf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function rm(a){if(a.G=0,a.ka=[],a.l){const c=Lf(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function sm(a,c,f){var g=f instanceof xr?gn(f):new xr(f);if(g.g!="")c&&(g.g=c+"."+g.g),Wo(g,g.s);else{var C=l.location;g=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var L=new xr(null);g&&qo(L,g),c&&(L.g=c),C&&Wo(L,C),f&&(L.l=f),g=L}return f=a.D,c=a.ya,f&&c&&ve(g,f,c),ve(g,"VER",a.la),pi(a,g),g}function im(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new be(new Go({eb:f})):new be(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function om(){}t=om.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zo(){}Zo.prototype.g=function(a,c){return new kt(a,c)};function kt(a,c){rt.call(this),this.g=new Qf(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ns(this)}R(kt,rt),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Au(this.g)},kt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=mu(a),a=f);c.i.push(new pE(c.Ya++,a)),c.G==3&&Yo(c)},kt.prototype.N=function(){this.g.l=null,delete this.j,Au(this.g),delete this.g,kt.aa.N.call(this)};function am(a){gu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(am,gu);function lm(){yu.call(this),this.status=1}R(lm,yu);function ns(a){this.g=a}R(ns,om),ns.prototype.ua=function(){mt(this.g,"a")},ns.prototype.ta=function(a){mt(this.g,new am(a))},ns.prototype.sa=function(a){mt(this.g,new lm)},ns.prototype.ra=function(){mt(this.g,"b")},Zo.prototype.createWebChannel=Zo.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,U_=function(){return new Zo},F_=function(){return jo()},M_=Ir,pd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bo.NO_ERROR=0,Bo.TIMEOUT=8,Bo.HTTP_ERROR=6,ja=Bo,Sf.COMPLETE="complete",O_=Sf,_f.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",rt.prototype.listen=rt.prototype.K,Ri=_f,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,V_=be}).apply(typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{});const Qp="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let Zs="10.14.0";/**
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
 */const Wr=new Ih("@firebase/firestore");function Si(){return Wr.logLevel}function W(t,...e){if(Wr.logLevel<=ie.DEBUG){const n=e.map(Vh);Wr.debug(`Firestore (${Zs}): ${t}`,...n)}}function Vn(t,...e){if(Wr.logLevel<=ie.ERROR){const n=e.map(Vh);Wr.error(`Firestore (${Zs}): ${t}`,...n)}}function Bs(t,...e){if(Wr.logLevel<=ie.WARN){const n=e.map(Vh);Wr.warn(`Firestore (${Zs}): ${t}`,...n)}}function Vh(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Zs}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function fe(t,e){t||ee()}function ne(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class j_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class Hx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gx{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new j_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new ut(e)}}class Kx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Qx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Kx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new Xx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Jx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class B_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Jx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Be(0,0))}static max(){return new te(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class go{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends go{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const Zx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends go{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return Zx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Te.fromString(e))}static fromName(e){return new X(Te.fromString(e).popFirst(5))}static empty(){return new X(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Te(e.slice()))}}function eA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new pr(s,X.empty(),e)}function tA(t){return new pr(t.readTime,t.key,-1)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(te.min(),X.empty(),-1)}static max(){return new pr(te.max(),X.empty(),-1)}}function nA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const rA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Do(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==rA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(m=>{o[d]=m,++l,l===i&&r(o)},m=>s(m))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function iA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Lo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Oh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Oh.oe=-1;function Yl(t){return t==null}function Il(t){return t===0&&1/t==-1/0}function oA(t){return typeof t=="number"&&Number.isInteger(t)&&!Il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Xp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function z_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ea(this.root,e,this.comparator,!0)}}class Ea{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yp(this.data.getIterator())}getIteratorFrom(e){return new Yp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Yp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new Je(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $_("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const aA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=aA.exec(t);if(fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */function Mh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fh(t){const e=t.mapValue.fields.__previous_value__;return Mh(e)?Fh(e):e}function yo(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class lA{constructor(e,n,r,s,i,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class vo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wa={mapValue:{}};function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mh(t)?4:cA(t)?9007199254740991:uA(t)?10:11:ee()}function hn(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yo(t).isEqual(yo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gr(s.timestampValue),l=gr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Hr(s.bytesValue).isEqual(Hr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ce(s.doubleValue),l=Ce(i.doubleValue);return o===l?Il(o)===Il(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Xp(o)!==Xp(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!hn(o[u],l[u])))return!1;return!0}(t,e);default:return ee()}}function _o(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ce(i.integerValue||i.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Jp(t.timestampValue,e.timestampValue);case 4:return Jp(yo(t),yo(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Hr(i),u=Hr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=ce(l[d],u[d]);if(m!==0)return m}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ce(Ce(i.latitude),Ce(o.latitude));return l!==0?l:ce(Ce(i.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,d,m;const y=i.fields||{},v=o.fields||{},b=(l=y.value)===null||l===void 0?void 0:l.arrayValue,R=(u=v.value)===null||u===void 0?void 0:u.arrayValue,P=ce(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((m=R==null?void 0:R.values)===null||m===void 0?void 0:m.length)||0);return P!==0?P:Zp(b,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===wa.mapValue&&o===wa.mapValue)return 0;if(i===wa.mapValue)return 1;if(o===wa.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const v=ce(u[y],m[y]);if(v!==0)return v;const b=$s(l[u[y]],d[m[y]]);if(b!==0)return b}return ce(u.length,m.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=gr(t),r=gr(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Zp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=$s(n[s],r[s]);if(i)return i}return ce(n.length,r.length)}function qs(t){return gd(t)}function gd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=gd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${gd(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function yd(t){return!!t&&"integerValue"in t}function Uh(t){return!!t&&"arrayValue"in t}function eg(t){return!!t&&"nullValue"in t}function tg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ba(t){return!!t&&"mapValue"in t}function uA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Wi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wi(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Wi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ba(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ei(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(Wi(this.value))}}function q_(t){const e=[];return ei(t.fields,(n,r)=>{const s=new Xe([n]);if(Ba(r)){const i=q_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
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
 */class dt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,te.min(),te.min(),te.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,te.min(),te.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,te.min(),te.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sl{constructor(e,n){this.position=e,this.inclusive=n}}function ng(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=$s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xl{constructor(e,n="asc"){this.field=e,this.dir=n}}function dA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class W_{}class Ue extends W_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fA(e,n,r):n==="array-contains"?new gA(e,r):n==="in"?new yA(e,r):n==="not-in"?new vA(e,r):n==="array-contains-any"?new _A(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mA(e,r):new pA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($s(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends W_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fn(e,n)}matches(e){return H_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function H_(t){return t.op==="and"}function G_(t){return hA(t)&&H_(t)}function hA(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function vd(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+qs(t.value);if(G_(t))return t.filters.map(e=>vd(e)).join(",");{const e=t.filters.map(n=>vd(n)).join(",");return`${t.op}(${e})`}}function K_(t,e){return t instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&K_(o,s.filters[l]),!0):!1}(t,e):void ee()}function Q_(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${qs(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(Q_).join(" ,")+"}"}(t):"Filter"}class fA extends Ue{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class mA extends Ue{constructor(e,n){super(e,"in",n),this.keys=X_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pA extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=X_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function X_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class gA extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uh(n)&&_o(n.arrayValue,this.value)}}class yA extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class vA extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_o(this.value.arrayValue,n)}}class _A extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_o(this.value.arrayValue,r))}}/**
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
 */class EA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function sg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new EA(t,e,n,r,s,i,o)}function jh(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qs(r)).join(",")),e.ue=n}return e.ue}function Bh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!K_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rg(t.startAt,e.startAt)&&rg(t.endAt,e.endAt)}function _d(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Jl{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wA(t,e,n,r,s,i,o,l){return new Jl(t,e,n,r,s,i,o,l)}function zh(t){return new Jl(t)}function ig(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TA(t){return t.collectionGroup!==null}function Hi(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new xl(i,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new xl(Xe.keyField(),r))}return e.ce}function cn(t){const e=ne(t);return e.le||(e.le=IA(e,Hi(t))),e.le}function IA(t,e){if(t.limitType==="F")return sg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xl(s.field,i)});const n=t.endAt?new Sl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Sl(t.startAt.position,t.startAt.inclusive):null;return sg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ed(t,e,n){return new Jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zl(t,e){return Bh(cn(t),cn(e))&&t.limitType===e.limitType}function Y_(t){return`${jh(cn(t))}|lt:${t.limitType}`}function as(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Q_(s)).join(", ")}]`),Yl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>qs(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function eu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Hi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=ng(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Hi(r),s)||r.endAt&&!function(o,l,u){const d=ng(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Hi(r),s))}(t,e)}function SA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function J_(t){return(e,n)=>{let r=!1;for(const s of Hi(t)){const i=xA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xA(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?$s(u,d):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return z_(this.inner)}size(){return this.innerSize}}/**
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
 */const AA=new Ae(X.comparator);function On(){return AA}const Z_=new Ae(X.comparator);function Ni(...t){let e=Z_;for(const n of t)e=e.insert(n.key,n);return e}function e0(t){let e=Z_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Gi()}function t0(){return Gi()}function Gi(){return new ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const kA=new Ae(X.comparator),bA=new Je(X.comparator);function se(...t){let e=bA;for(const n of t)e=e.add(n);return e}const PA=new Je(ce);function CA(){return PA}/**
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
 */function $h(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function n0(t){return{integerValue:""+t}}function RA(t,e){return oA(e)?n0(e):$h(t,e)}/**
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
 */class tu{constructor(){this._=void 0}}function NA(t,e,n){return t instanceof Al?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mh(i)&&(i=Fh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Eo?s0(t,e):t instanceof wo?i0(t,e):function(s,i){const o=r0(s,i),l=og(o)+og(s.Pe);return yd(o)&&yd(s.Pe)?n0(l):$h(s.serializer,l)}(t,e)}function DA(t,e,n){return t instanceof Eo?s0(t,e):t instanceof wo?i0(t,e):n}function r0(t,e){return t instanceof kl?function(r){return yd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Al extends tu{}class Eo extends tu{constructor(e){super(),this.elements=e}}function s0(t,e){const n=o0(e);for(const r of t.elements)n.some(s=>hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class wo extends tu{constructor(e){super(),this.elements=e}}function i0(t,e){let n=o0(e);for(const r of t.elements)n=n.filter(s=>!hn(s,r));return{arrayValue:{values:n}}}class kl extends tu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function og(t){return Ce(t.integerValue||t.doubleValue)}function o0(t){return Uh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function LA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Eo&&s instanceof Eo||r instanceof wo&&s instanceof wo?zs(r.elements,s.elements,hn):r instanceof kl&&s instanceof kl?hn(r.Pe,s.Pe):r instanceof Al&&s instanceof Al}(t.transform,e.transform)}class VA{constructor(e,n){this.version=e,this.transformResults=n}}class bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nu{}function a0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new u0(t.key,bn.none()):new Vo(t.key,t.data,bn.none());{const n=t.data,r=Ft.empty();let s=new Je(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Jr(t.key,r,new Xt(s.toArray()),bn.none())}}function OA(t,e,n){t instanceof Vo?function(s,i,o){const l=s.value.clone(),u=lg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(s,i,o){if(!za(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=lg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(l0(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ki(t,e,n,r){return t instanceof Vo?function(i,o,l,u){if(!za(i.precondition,o))return l;const d=i.value.clone(),m=ug(i.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(i,o,l,u){if(!za(i.precondition,o))return l;const d=ug(i.fieldTransforms,u,o),m=o.data;return m.setAll(l0(i)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(i,o,l){return za(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function MA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=r0(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function ag(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zs(r,s,(i,o)=>LA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vo extends nu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jr extends nu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function l0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lg(t,e,n){const r=new Map;fe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,DA(o,l,n[s]))}return r}function ug(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,NA(i,o,e))}return r}class u0 extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FA extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class UA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ki(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ki(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=t0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=a0(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,r)=>ag(n,r))&&zs(this.baseMutations,e.baseMutations,(n,r)=>ag(n,r))}}class qh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length);let s=function(){return kA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new qh(e,n,r,s)}}/**
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
 */class jA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class BA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Le,ae;function zA(t){switch(t){default:return ee();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function c0(t){if(t===void 0)return Vn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Le.OK:return M.OK;case Le.CANCELLED:return M.CANCELLED;case Le.UNKNOWN:return M.UNKNOWN;case Le.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Le.INTERNAL:return M.INTERNAL;case Le.UNAVAILABLE:return M.UNAVAILABLE;case Le.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Le.NOT_FOUND:return M.NOT_FOUND;case Le.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Le.ABORTED:return M.ABORTED;case Le.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Le.DATA_LOSS:return M.DATA_LOSS;default:return ee()}}(ae=Le||(Le={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $A(){return new TextEncoder}/**
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
 */const qA=new Or([4294967295,4294967295],0);function cg(t){const e=$A().encode(t),n=new L_;return n.update(e),new Uint8Array(n.digest())}function dg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Or([n,r],0),new Or([s,i],0)]}class Wh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Di(`Invalid padding: ${n}`);if(r<0)throw new Di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Di(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Di(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Or.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Or.fromNumber(r)));return s.compare(qA)===1&&(s=new Or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=cg(e),[r,s]=dg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=cg(e),[r,s]=dg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ru{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Oo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ru(te.min(),s,new Ae(ce),On(),se())}}class Oo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Oo(r,n,se(),se(),se())}}/**
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
 */class $a{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class d0{constructor(e,n){this.targetId=e,this.me=n}}class h0{constructor(e,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class hg{constructor(){this.fe=0,this.ge=mg(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new Oo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=mg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class WA{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=fg(),this.Qe=new Ae(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(_d(i))if(r===0){const o=new X(i.path);this.Ue(n,o,dt.newNoDocument(o,te.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Hr(r).toUint8Array()}catch(u){if(u instanceof $_)return Bs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Wh(o,s,i)}catch(u){return Bs(u instanceof Di?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&_d(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,dt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=se();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ru(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=fg(),this.Qe=new Ae(ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new hg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function fg(){return new Ae(X.comparator)}function mg(){return new Ae(X.comparator)}const HA={asc:"ASCENDING",desc:"DESCENDING"},GA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KA={and:"AND",or:"OR"};class QA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wd(t,e){return t.useProto3Json||Yl(e)?e:{value:e}}function bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function f0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XA(t,e){return bl(t,e.toTimestamp())}function dn(t){return fe(!!t),te.fromTimestamp(function(n){const r=gr(n);return new Be(r.seconds,r.nanos)}(t))}function Hh(t,e){return Td(t,e).canonicalString()}function Td(t,e){const n=function(s){return new Te(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function m0(t){const e=Te.fromString(t);return fe(_0(e)),e}function Id(t,e){return Hh(t.databaseId,e.path)}function uc(t,e){const n=m0(e);if(n.get(1)!==t.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(g0(n))}function p0(t,e){return Hh(t.databaseId,e)}function YA(t){const e=m0(t);return e.length===4?Te.emptyPath():g0(e)}function Sd(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function g0(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pg(t,e,n){return{name:Id(t,e),fields:n.value.mapValue.fields}}function JA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(fe(m===void 0||typeof m=="string"),et.fromBase64String(m||"")):(fe(m===void 0||m instanceof Buffer||m instanceof Uint8Array),et.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const m=d.code===void 0?M.UNKNOWN:c0(d.code);return new G(m,d.message||"")}(o);n=new h0(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=uc(t,r.document.name),i=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):te.min(),l=new Ft({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(s,i,o,l),d=r.targetIds||[],m=r.removedTargetIds||[];n=new $a(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=uc(t,r.document),i=r.readTime?dn(r.readTime):te.min(),o=dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new $a([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=uc(t,r.document),i=r.removedTargetIds||[];n=new $a([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new BA(s,i),l=r.targetId;n=new d0(l,o)}}return n}function ZA(t,e){let n;if(e instanceof Vo)n={update:pg(t,e.key,e.value)};else if(e instanceof u0)n={delete:Id(t,e.key)};else if(e instanceof Jr)n={update:pg(t,e.key,e.data),updateMask:lk(e.fieldMask)};else{if(!(e instanceof FA))return ee();n={verify:Id(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Al)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof kl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:XA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function ek(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?dn(s.updateTime):dn(i);return o.isEqual(te.min())&&(o=dn(i)),new VA(o,s.transformResults||[])}(n,e))):[]}function tk(t,e){return{documents:[p0(t,e.path)]}}function nk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=p0(t,s);const i=function(d){if(d.length!==0)return v0(fn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:ls(v.field),direction:ik(v.dir)}}(m))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=wd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function rk(t){let e=YA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1);const m=n.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];n.where&&(i=function(y){const v=y0(y);return v instanceof fn&&G_(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(v=>function(R){return new xl(us(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(y){let v;return v=typeof y=="object"?y.value:y,Yl(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(y){const v=!!y.before,b=y.values||[];return new Sl(b,v)}(n.startAt));let d=null;return n.endAt&&(d=function(y){const v=!y.before,b=y.values||[];return new Sl(b,v)}(n.endAt)),wA(e,s,o,i,l,"F",u,d)}function sk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function y0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>y0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function ik(t){return HA[t]}function ok(t){return GA[t]}function ak(t){return KA[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return Xe.fromServerFormat(t.fieldPath)}function v0(t){return t instanceof Ue?function(n){if(n.op==="=="){if(tg(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(eg(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tg(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(eg(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:ok(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>v0(s));return r.length===1?r[0]:{compositeFilter:{op:ak(n.op),filters:r}}}(t):ee()}function lk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,s,i=te.min(),o=te.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uk{constructor(e){this.ct=e}}function ck(t){const e=rk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ed(e,e.limit,"L"):e}/**
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
 */class dk{constructor(){this.un=new hk}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(pr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class hk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Te.comparator)).toArray()}}/**
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
 */class Ws{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ws(0)}static kn(){return new Ws(-1)}}/**
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
 */class fk{constructor(){this.changes=new ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class pk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ki(r.mutation,s,Xt.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=Dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ni();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=On();const o=Gi(),l=function(){return Gi()}();return n.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Jr)?i=i.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),Ki(m.mutation,d,m.mutation.getFieldMask(),Be.now())):o.set(d.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>o.set(d,m)),n.forEach((d,m)=>{var y;return l.set(d,new mk(m,(y=o.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Gi();let s=new Ae((o,l)=>o-l),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let m=r.get(u)||Xt.empty();m=l.applyToLocalView(d,m),r.set(u,m);const y=(s.get(l.batchId)||se()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,y=t0();m.forEach(v=>{if(!i.has(v)){const b=a0(n.get(v),r.get(v));b!==null&&y.set(v,b),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,y))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):TA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Dr());let l=-1,u=i;return o.next(d=>F.forEach(d,(m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(m)?F.resolve():this.remoteDocumentCache.getEntry(e,m).next(v=>{u=u.insert(m,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,se())).next(m=>({batchId:l,changes:e0(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=Ni();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ni();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,u=>{const d=function(y,v){return new Jl(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((y,v)=>{o=o.insert(y,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,dt.newInvalidDocument(m)))});let l=Ni();return o.forEach((u,d)=>{const m=i.get(u);m!==void 0&&Ki(m.mutation,d,Xt.empty(),Be.now()),eu(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class gk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:dn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:ck(s.bundledQuery),readTime:dn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class yk{constructor(){this.overlays=new Ae(X.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Dr(),i=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ae((d,m)=>d-m);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=Dr(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Dr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return F.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jA(n,r));let i=this.Ir.get(n);i===void 0&&(i=se(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class vk{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Gh{constructor(){this.Tr=new Je(qe.Er),this.dr=new Je(qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new qe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Te([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Te([])),r=new qe(n,e),s=new qe(n,e+1);let i=se();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
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
 */class _k{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Je(qe.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ce);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new qe(new X(i),0);let l=new Je(ce);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new qe(n,0),s=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Ek{constructor(e){this.Mr=e,this.docs=function(){return new Ae(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=On();const o=n.path,l=new X(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||nA(tA(m),r)<=0||(s.has(m.key)||eu(n,m))&&(i=i.insert(m.key,m.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wk(this)}getSize(e){return F.resolve(this.size)}}class wk extends fk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Tk{constructor(e){this.persistence=e,this.Nr=new ti(n=>jh(n),Bh),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Gh,this.targetCount=0,this.kr=Ws.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ws(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class Ik{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Oh(0),this.Kr=!1,this.Kr=!0,this.$r=new vk,this.referenceDelegate=e(this),this.Ur=new Tk(this),this.indexManager=new dk,this.remoteDocumentCache=function(s){return new Ek(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new uk(n),this.Gr=new gk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new _k(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new Sk(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Sk extends sA{constructor(e){super(),this.currentSequenceNumber=e}}class Kh{constructor(e){this.persistence=e,this.Jr=new Gh,this.Yr=null}static Zr(e){return new Kh(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Qh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qh(e,n.fromCache,r,s)}}/**
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
 */class xk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ak{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gI()?8:iA(ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new xk;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Si()<=ie.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",as(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(Si()<=ie.DEBUG&&W("QueryEngine","Query:",as(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Si()<=ie.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",as(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):F.resolve())}Yi(e,n){if(ig(n))return F.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ed(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,Ed(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,s){return ig(n)||s.isEqual(te.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?F.resolve(null):(Si()<=ie.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),as(n)),this.rs(e,o,n,eA(s,-1)).next(l=>l))})}ts(e,n){let r=new Je(J_(e));return n.forEach((s,i)=>{eu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Si()<=ie.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",as(n)),this.Ji.getDocumentsMatchingQuery(e,n,pr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class kk{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ae(ce),this._s=new ti(i=>jh(i),Bh),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function bk(t,e,n,r){return new kk(t,e,n,r)}async function E0(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=se();for(const d of s){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function Pk(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const y=d.batch,v=y.keys();let b=F.resolve();return v.forEach(R=>{b=b.next(()=>m.getEntry(u,R)).next(P=>{const D=d.docVersions.get(R);fe(D!==null),P.version.compareTo(D)<0&&(y.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),m.addEntry(P)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function w0(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Ck(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((m,y)=>{const v=s.get(y);if(!v)return;l.push(n.Ur.removeMatchingKeys(i,m.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(i,m.addedDocuments,y)));let b=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?b=b.withResumeToken(et.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):m.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(m.resumeToken,r)),s=s.insert(y,b),function(P,D,I){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(v,b,m)&&l.push(n.Ur.updateTargetData(i,b))});let u=On(),d=se();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(Rk(i,o,e.documentUpdates).next(m=>{u=m.Ps,d=m.Is})),!r.isEqual(te.min())){const m=n.Ur.getLastRemoteSnapshotVersion(i).next(y=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.os=s,i))}function Rk(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=On();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function Nk(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Dk(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function xd(t,e,n){const r=ne(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Lo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function gg(t,e,n){const r=ne(t);let s=te.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,m){const y=ne(u),v=y._s.get(m);return v!==void 0?F.resolve(y.os.get(v)):y.Ur.getTargetData(d,m)}(r,o,cn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:se())).next(l=>(Lk(r,SA(e),l),{documents:l,Ts:i})))}function Lk(t,e,n){let r=t.us.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class yg{constructor(){this.activeTargetIds=CA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vk{constructor(){this.so=new yg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new yg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ok{_o(e){}shutdown(){}}/**
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
 */class vg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ta=null;function cc(){return Ta===null?Ta=function(){return 268435456+Math.round(2147483648*Math.random())}():Ta++,"0x"+Ta.toString(16)}/**
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
 */const Mk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Fk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const lt="WebChannelConnection";class Uk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=cc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,u,d,s).then(m=>(W("RestConnection",`Received RPC '${n}' ${l}: `,m),m),m=>{throw Bs("RestConnection",`RPC '${n}' ${l} failed with error: `,m,"url: ",u,"request:",s),m})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Mk[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=cc();return new Promise((o,l)=>{const u=new V_;u.setWithCredentials(!0),u.listenOnce(O_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ja.NO_ERROR:const m=u.getResponseJson();W(lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case ja.TIMEOUT:W(lt,`RPC '${e}' ${i} timed out`),l(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case ja.HTTP_ERROR:const y=u.getStatus();if(W(lt,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const b=v==null?void 0:v.error;if(b&&b.status&&b.message){const R=function(D){const I=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(I)>=0?I:M.UNKNOWN}(b.status);l(new G(R,b.message))}else l(new G(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(M.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{W(lt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);W(lt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=cc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=U_(),l=F_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const m=i.join("");W(lt,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=o.createWebChannel(m,u);let v=!1,b=!1;const R=new Fk({Io:D=>{b?W(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(v||(W(lt,`Opening RPC '${e}' stream ${s} transport.`),y.open(),v=!0),W(lt,`RPC '${e}' stream ${s} sending:`,D),y.send(D))},To:()=>y.close()}),P=(D,I,E)=>{D.listen(I,x=>{try{E(x)}catch(N){setTimeout(()=>{throw N},0)}})};return P(y,Ri.EventType.OPEN,()=>{b||(W(lt,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),P(y,Ri.EventType.CLOSE,()=>{b||(b=!0,W(lt,`RPC '${e}' stream ${s} transport closed`),R.So())}),P(y,Ri.EventType.ERROR,D=>{b||(b=!0,Bs(lt,`RPC '${e}' stream ${s} transport errored:`,D),R.So(new G(M.UNAVAILABLE,"The operation could not be completed")))}),P(y,Ri.EventType.MESSAGE,D=>{var I;if(!b){const E=D.data[0];fe(!!E);const x=E,N=x.error||((I=x[0])===null||I===void 0?void 0:I.error);if(N){W(lt,`RPC '${e}' stream ${s} received error:`,N);const V=N.status;let O=function(_){const S=Le[_];if(S!==void 0)return c0(S)}(V),w=N.message;O===void 0&&(O=M.INTERNAL,w="Unknown error status: "+V+" with message "+N.message),b=!0,R.So(new G(O,w)),y.close()}else W(lt,`RPC '${e}' stream ${s} received:`,E),R.bo(E)}}),P(l,M_.STAT_EVENT,D=>{D.stat===pd.PROXY?W(lt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===pd.NOPROXY&&W(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function dc(){return typeof document<"u"?document:null}/**
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
 */function su(t){return new QA(t,!0)}/**
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
 */class T0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class I0{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new T0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jk extends I0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=JA(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?dn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Sd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=_d(u)?{documents:tk(i,u)}:{query:nk(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=f0(i,o.resumeToken);const d=wd(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=bl(i,o.snapshotVersion.toTimestamp());const d=wd(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=sk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Sd(this.serializer),n.removeTarget=e,this.a_(n)}}class Bk extends I0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=ek(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Sd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZA(this.serializer,r))};this.a_(n)}}/**
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
 */class zk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Td(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Td(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class $k{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class qk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ne(u);d.L_.add(4),await Mo(d),d.q_.set("Unknown"),d.L_.delete(4),await iu(d)}(this))})}),this.q_=new $k(r,s)}}async function iu(t){if(Zr(t))for(const e of t.B_)await e(!0)}async function Mo(t){for(const e of t.B_)await e(!1)}function S0(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Zh(n)?Jh(n):ni(n).r_()&&Yh(n,e))}function Xh(t,e){const n=ne(t),r=ni(n);n.N_.delete(e),r.r_()&&x0(n,e),n.N_.size===0&&(r.r_()?r.o_():Zr(n)&&n.q_.set("Unknown"))}function Yh(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ni(t).A_(e)}function x0(t,e){t.Q_.xe(e),ni(t).R_(e)}function Jh(t){t.Q_=new WA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ni(t).start(),t.q_.v_()}function Zh(t){return Zr(t)&&!ni(t).n_()&&t.N_.size>0}function Zr(t){return ne(t).L_.size===0}function A0(t){t.Q_=void 0}async function Wk(t){t.q_.set("Online")}async function Hk(t){t.N_.forEach((e,n)=>{Yh(t,e)})}async function Gk(t,e){A0(t),Zh(t)?(t.q_.M_(e),Jh(t)):t.q_.set("Unknown")}async function Kk(t,e,n){if(t.q_.set("Online"),e instanceof h0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pl(t,r)}else if(e instanceof $a?t.Q_.Ke(e):e instanceof d0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await w0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.N_.get(d);m&&i.N_.set(d,m.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const m=i.N_.get(u);if(!m)return;i.N_.set(u,m.withResumeToken(et.EMPTY_BYTE_STRING,m.snapshotVersion)),x0(i,u);const y=new er(m.target,u,d,m.sequenceNumber);Yh(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Pl(t,r)}}async function Pl(t,e,n){if(!Lo(e))throw e;t.L_.add(1),await Mo(t),t.q_.set("Offline"),n||(n=()=>w0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await iu(t)})}function k0(t,e){return e().catch(n=>Pl(t,n,e))}async function ou(t){const e=ne(t),n=yr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Qk(e);)try{const s=await Nk(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Xk(e,s)}catch(s){await Pl(e,s)}b0(e)&&P0(e)}function Qk(t){return Zr(t)&&t.O_.length<10}function Xk(t,e){t.O_.push(e);const n=yr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function b0(t){return Zr(t)&&!yr(t).n_()&&t.O_.length>0}function P0(t){yr(t).start()}async function Yk(t){yr(t).p_()}async function Jk(t){const e=yr(t);for(const n of t.O_)e.m_(n.mutations)}async function Zk(t,e,n){const r=t.O_.shift(),s=qh.from(r,e,n);await k0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ou(t)}async function eb(t,e){e&&yr(t).V_&&await async function(r,s){if(function(o){return zA(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();yr(r).s_(),await k0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ou(r)}}(t,e),b0(t)&&P0(t)}async function _g(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.L_.add(3),await Mo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await iu(n)}async function tb(t,e){const n=ne(t);e?(n.L_.delete(2),await iu(n)):e||(n.L_.add(2),await Mo(n),n.q_.set("Unknown"))}function ni(t){return t.K_||(t.K_=function(n,r,s){const i=ne(n);return i.w_(),new jk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Wk.bind(null,t),Ro:Hk.bind(null,t),mo:Gk.bind(null,t),d_:Kk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Zh(t)?Jh(t):t.q_.set("Unknown")):(await t.K_.stop(),A0(t))})),t.K_}function yr(t){return t.U_||(t.U_=function(n,r,s){const i=ne(n);return i.w_(),new Bk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Yk.bind(null,t),mo:eb.bind(null,t),f_:Jk.bind(null,t),g_:Zk.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ou(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class ef{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ef(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tf(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Lo(t))return new G(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Ni(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Eg{constructor(){this.W_=new Ae(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Hs(e,n,Ns.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class nb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class rb{constructor(){this.queries=wg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=wg(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(M.ABORTED,"Firestore shutting down"))}}function wg(){return new ti(t=>Y_(t),Zl)}async function C0(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new nb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=tf(o,`Initialization of query '${as(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&nf(n)}async function R0(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sb(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&nf(n)}function ib(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function nf(t){t.Y_.forEach(e=>{e.next()})}var Ad,Tg;(Tg=Ad||(Ad={})).ea="default",Tg.Cache="cache";class N0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ad.Cache}}/**
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
 */class D0{constructor(e){this.key=e}}class L0{constructor(e){this.key=e}}class ob{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=J_(e),this.Ra=new Ns(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Eg,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const v=s.get(m),b=eu(this.query,y)?y:null,R=!!v&&this.mutatedKeys.has(v.key),P=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;v&&b?v.data.isEqual(b.data)?R!==P&&(r.track({type:3,doc:b}),D=!0):this.ga(v,b)||(r.track({type:2,doc:b}),D=!0,(u&&this.Aa(b,u)>0||d&&this.Aa(b,d)<0)&&(l=!0)):!v&&b?(r.track({type:0,doc:b}),D=!0):v&&!b&&(r.track({type:1,doc:v}),D=!0,(u||d)&&(l=!0)),D&&(b?(o=o.add(b),i=P?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((m,y)=>function(b,R){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return P(b)-P(R)}(m.type,y.type)||this.Aa(m.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new Hs(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Eg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new L0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new D0(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Hs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ab{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lb{constructor(e){this.key=e,this.va=!1}}class ub{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ti(l=>Y_(l),Zl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(X.comparator),this.Na=new Map,this.La=new Gh,this.Ba={},this.ka=new Map,this.qa=Ws.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function cb(t,e,n=!0){const r=j0(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await V0(r,e,n,!0),s}async function db(t,e){const n=j0(t);await V0(n,e,!0,!1)}async function V0(t,e,n,r){const s=await Dk(t.localStore,cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await hb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&S0(t.remoteStore,s),l}async function hb(t,e,n,r,s){t.Ka=(y,v,b)=>async function(P,D,I,E){let x=D.view.ma(I);x.ns&&(x=await gg(P.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,x)));const N=E&&E.targetChanges.get(D.targetId),V=E&&E.targetMismatches.get(D.targetId)!=null,O=D.view.applyChanges(x,P.isPrimaryClient,N,V);return Sg(P,D.targetId,O.wa),O.snapshot}(t,y,v,b);const i=await gg(t.localStore,e,!0),o=new ob(e,i.Ts),l=o.ma(i.documents),u=Oo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);Sg(t,n,d.wa);const m=new ab(e,n,o);return t.Fa.set(e,m),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function fb(t,e,n){const r=ne(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Zl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Xh(r.remoteStore,s.targetId),kd(r,s.targetId)}).catch(Do)):(kd(r,s.targetId),await xd(r.localStore,s.targetId,!0))}async function mb(t,e){const n=ne(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xh(n.remoteStore,r.targetId))}async function pb(t,e,n){const r=Tb(t);try{const s=await function(o,l){const u=ne(o),d=Be.now(),m=l.reduce((b,R)=>b.add(R.key),se());let y,v;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let R=On(),P=se();return u.cs.getEntries(b,m).next(D=>{R=D,R.forEach((I,E)=>{E.isValidDocument()||(P=P.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,R)).next(D=>{y=D;const I=[];for(const E of l){const x=MA(E,y.get(E.key).overlayedDocument);x!=null&&I.push(new Jr(E.key,x,q_(x.value.mapValue),bn.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,I,l)}).next(D=>{v=D;const I=D.applyToLocalDocumentSet(y,P);return u.documentOverlayCache.saveOverlays(b,D.batchId,I)})}).then(()=>({batchId:v.batchId,changes:e0(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Ae(ce)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await Fo(r,s.changes),await ou(r.remoteStore)}catch(s){const i=tf(s,"Failed to persist write");n.reject(i)}}async function O0(t,e){const n=ne(t);try{const r=await Ck(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?fe(o.va):s.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await Fo(n,r,e)}catch(r){await Do(r)}}function Ig(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let d=!1;u.queries.forEach((m,y)=>{for(const v of y.j_)v.Z_(l)&&(d=!0)}),d&&nf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gb(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ae(X.comparator);o=o.insert(i,dt.newNoDocument(i,te.min()));const l=se().add(i),u=new ru(te.min(),new Map,new Ae(ce),o,l);await O0(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),rf(r)}else await xd(r.localStore,e,!1).then(()=>kd(r,e,n)).catch(Do)}async function yb(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await Pk(n.localStore,e);F0(n,r,null),M0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fo(n,s)}catch(s){await Do(s)}}async function vb(t,e,n){const r=ne(t);try{const s=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(y=>(fe(y!==null),m=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);F0(r,e,n),M0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fo(r,s)}catch(s){await Do(s)}}function M0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function F0(t,e,n){const r=ne(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function kd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||U0(t,r)})}function U0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Xh(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),rf(t))}function Sg(t,e,n){for(const r of n)r instanceof D0?(t.La.addReference(r.key,e),_b(t,r)):r instanceof L0?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||U0(t,r.key)):ee()}function _b(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),rf(t))}function rf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new lb(n)),t.Oa=t.Oa.insert(n,r),S0(t.remoteStore,new er(cn(zh(n.path)),r,"TargetPurposeLimboResolution",Oh.oe))}}async function Fo(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var m;if((d||n)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=n==null?void 0:n.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Qh.Wi(u.targetId,d);i.push(y)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,d){const m=ne(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>F.forEach(d,v=>F.forEach(v.$i,b=>m.persistence.referenceDelegate.addReference(y,v.targetId,b)).next(()=>F.forEach(v.Ui,b=>m.persistence.referenceDelegate.removeReference(y,v.targetId,b)))))}catch(y){if(!Lo(y))throw y;W("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const v=y.targetId;if(!y.fromCache){const b=m.os.get(v),R=b.snapshotVersion,P=b.withLastLimboFreeSnapshotVersion(R);m.os=m.os.insert(v,P)}}}(r.localStore,i))}async function Eb(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await E0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fo(n,r.hs)}}function wb(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let s=se();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function j0(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=O0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gb.bind(null,e),e.Ca.d_=sb.bind(null,e.eventManager),e.Ca.$a=ib.bind(null,e.eventManager),e}function Tb(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vb.bind(null,e),e}class Cl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=su(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return bk(this.persistence,new Ak,e.initialUser,this.serializer)}Ga(e){return new Ik(Kh.Zr,this.serializer)}Wa(e){return new Vk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cl.provider={build:()=>new Cl};class bd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ig(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Eb.bind(null,this.syncEngine),await tb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rb}()}createDatastore(e){const n=su(e.databaseInfo.databaseId),r=function(i){return new Uk(i)}(e.databaseInfo);return function(i,o,l,u){return new zk(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new qk(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ig(this.syncEngine,n,0),function(){return vg.D()?new vg:new Ok}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,m){const y=new ub(s,i,o,l,u,d);return m&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);W("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Mo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}bd.provider={build:()=>new bd};/**
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
 */class B0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Ib{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=B_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await E0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sb(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_g(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>_g(e.remoteStore,s)),t._onlineComponents=e}async function Sb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Bs("Error using user provided cache. Falling back to memory cache: "+n),await hc(t,new Cl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await hc(t,new Cl);return t._offlineComponents}async function z0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await xg(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await xg(t,new bd))),t._onlineComponents}function xb(t){return z0(t).then(e=>e.syncEngine)}async function $0(t){const e=await z0(t),n=e.eventManager;return n.onListen=cb.bind(null,e.syncEngine),n.onUnlisten=fb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=db.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mb.bind(null,e.syncEngine),n}function Ab(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const m=new B0({next:v=>{m.Za(),o.enqueueAndForget(()=>R0(i,y));const b=v.docs.has(l);!b&&v.fromCache?d.reject(new G(M.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&v.fromCache&&u&&u.source==="server"?d.reject(new G(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),y=new N0(zh(l.path),m,{includeMetadataChanges:!0,_a:!0});return C0(i,y)}(await $0(t),t.asyncQueue,e,n,r)),r.promise}function kb(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const m=new B0({next:v=>{m.Za(),o.enqueueAndForget(()=>R0(i,y)),v.fromCache&&u.source==="server"?d.reject(new G(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),y=new N0(l,m,{includeMetadataChanges:!0,_a:!0});return C0(i,y)}(await $0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function q0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */function W0(t,e,n){if(!n)throw new G(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bb(t,e,n,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kg(t){if(!X.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bg(t){if(X.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sf(t);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Pg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class au{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wx;switch(r.type){case"firstParty":return new Qx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ag.get(n);r&&(W("ComponentProvider","Removing Datastore"),Ag.delete(n),r.terminate())}(this),Promise.resolve()}}function Pb(t,e,n,r={}){var s;const i=(t=Kr(t,au))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ut.MOCK_USER;else{l=uI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(d)}t._authCredentials=new Hx(new j_(l,u))}}/**
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
 */class lu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lu(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class hr extends lu{constructor(e,n,r){super(e,n,zh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new X(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function Cb(t,e,...n){if(t=$t(t),W0("collection","path",e),t instanceof au){const r=Te.fromString(e,...n);return bg(r),new hr(t,null,r)}{if(!(t instanceof Rt||t instanceof hr))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return bg(r),new hr(t.firestore,null,r)}}function Nt(t,e,...n){if(t=$t(t),arguments.length===1&&(e=B_.newId()),W0("doc","path",e),t instanceof au){const r=Te.fromString(e,...n);return kg(r),new Rt(t,null,new X(r))}{if(!(t instanceof Rt||t instanceof hr))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return kg(r),new Rt(t.firestore,t instanceof hr?t.converter:null,new X(r))}}/**
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
 */class Cg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new T0(this,"async_queue_retry"),this.Vu=()=>{const r=dc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=dc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new kn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Lo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=ef.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class uu extends au{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Cg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cg(e),this._firestoreClient=void 0,await e}}}function Rb(t,e){const n=typeof t=="object"?t:Yv(),r=typeof t=="string"?t:"(default)",s=xh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=aI("firestore");i&&Pb(s,...i)}return s}function of(t){if(t._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Nb(t),t._firestoreClient}function Nb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,d,m){return new lA(l,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,q0(m.experimentalLongPollingOptions),m.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Ib(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gs(et.fromBase64String(e))}catch(n){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gs(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class af{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class H0{constructor(e){this._methodName=e}}/**
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
 */class lf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class uf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Db=/^__.*__$/;class Lb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vo(e,this.data,n,this.fieldTransforms)}}function G0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class cf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Rl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(G0(this.Cu)&&Db.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Vb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||su(e)}Qu(e,n,r,s=!1){return new cf({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ob(t){const e=t._freezeSettings(),n=su(t._databaseId);return new Vb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mb(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Y0("Data must be an object, but it was:",o,r);const l=Q0(r,o);let u,d;if(i.merge)u=new Xt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const v=Fb(e,y,n);if(!o.contains(v))throw new G(M.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);jb(m,v)||m.push(v)}u=new Xt(m),d=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=o.fieldTransforms;return new Lb(new Ft(l),u,d)}function K0(t,e){if(X0(t=$t(t)))return Y0("Unsupported field value:",e,t),Q0(t,e);if(t instanceof H0)return function(r,s){if(!G0(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=K0(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:bl(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bl(s.serializer,i)}}if(r instanceof lf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gs)return{bytesValue:f0(s.serializer,r._byteString)};if(r instanceof Rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof uf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return $h(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${sf(r)}`)}(t,e)}function Q0(t,e){const n={};return z_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(t,(r,s)=>{const i=K0(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function X0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof lf||t instanceof Gs||t instanceof Rt||t instanceof H0||t instanceof uf)}function Y0(t,e,n){if(!X0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=sf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Fb(t,e,n){if((e=$t(e))instanceof af)return e._internalPath;if(typeof e=="string")return J0(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ub=new RegExp("[~\\*/\\[\\]]");function J0(t,e,n){if(e.search(Ub)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new af(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new G(M.INVALID_ARGUMENT,l+t+u)}function jb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Z0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Bb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Bb extends Z0{data(){return super.data()}}function eE(t,e){return typeof e=="string"?J0(t,e):e instanceof af?e._internalPath:e._delegate._internalPath}/**
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
 */function zb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $b{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ei(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ce(o.doubleValue));return new uf(i)}convertGeoPoint(e){return new lf(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yo(e));default:return null}}convertTimestamp(e){const n=gr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);fe(_0(r));const s=new vo(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function qb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tE extends Z0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(eE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qa extends tE{data(e={}){return super.data(e)}}class Wb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Li(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qa(this._firestore,this._userDataWriter,r.key,r,new Li(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new qa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Li(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new qa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Li(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),m=o.indexOf(l.doc.key)),{type:Hb(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Hb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function qt(t){t=Kr(t,Rt);const e=Kr(t.firestore,uu);return Ab(of(e),t._key).then(n=>Qb(e,t,n))}class nE extends $b{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function Gb(t){t=Kr(t,lu);const e=Kr(t.firestore,uu),n=of(e),r=new nE(e);return zb(t._query),kb(n,t._query).then(s=>new Wb(e,r,t,s))}function cu(t,e,n){t=Kr(t,Rt);const r=Kr(t.firestore,uu),s=qb(t.converter,e,n);return Kb(r,[Mb(Ob(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,bn.none())])}function Kb(t,e){return function(r,s){const i=new kn;return r.asyncQueue.enqueueAndForget(async()=>pb(await xb(r),s,i)),i.promise}(of(t),e)}function Qb(t,e,n){const r=n.docs.get(e._key),s=new nE(t);return new tE(t,s,e._key,r,new Li(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Zs=s})(Ys),js(new zr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new uu(new Gx(r.getProvider("auth-internal")),new Yx(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vo(d.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),dr(Qp,"4.7.3",e),dr(Qp,"4.7.3","esm2017")})();const Xb={apiKey:"AIzaSyAcjNCDe3-Whc5LUcd9Xfyl68hVYcdz1GU",authDomain:"alex-english-academy-react.firebaseapp.com",projectId:"alex-english-academy-react",storageBucket:"alex-english-academy-react.firebasestorage.app",messagingSenderId:"166060472334",appId:"1:166060472334:web:5e12a5376efc73f192e45f"},rE=Xv(Xb),Ia=$x(rE),It=Rb(rE);function Rg({onLogin:t,onNavigate:e}){const[n,r]=H.useState(!1),[s,i]=H.useState(!1),[o,l]=H.useState(!1),[u,d]=H.useState(""),[m,y]=H.useState(""),[v,b]=H.useState(""),[R,P]=H.useState(""),[D,I]=H.useState(""),[E,x]=H.useState(""),[N,V]=H.useState(!1),O=async p=>{var _;if(p.preventDefault(),I(""),x(""),V(!0),!u||!m){I("Por favor, preencha todos os campos"),V(!1);return}try{const S=Nt(It,"students",u),k=await qt(S);if(!k.exists()){I("Usuário não encontrado. Contate o Professor Alex."),V(!1);return}const A=k.data();if(A.password!==m){I("Senha incorreta"),V(!1);return}const T=`${u}@student.alexacademy.com`;try{await Fp(Ia,T,m)}catch(tt){if(tt.code==="auth/user-not-found")try{await C1(Ia,T,m)}catch(nt){console.log("User creation error:",nt)}}const ke={username:u,displayName:A.name||u,email:T,userType:"student",uid:(_=Ia.currentUser)==null?void 0:_.uid};x("✅ Login realizado com sucesso!"),setTimeout(()=>{t(ke,"student"),V(!1)},1e3)}catch(S){console.error("Student Login Error:",S),I("Erro ao fazer login. Verifique suas credenciais."),V(!1)}},w=async p=>{if(p.preventDefault(),I(""),x(""),V(!0),!v||!R){I("Por favor, preencha todos os campos"),V(!1);return}try{const S=(await Fp(Ia,v,R)).user,k=Nt(It,"teachers",S.uid),A=await qt(k);let T;A.exists()?T=A.data():(T={email:v,displayName:"Professor Alex",userType:"teacher",createdAt:Date.now(),uid:S.uid},await cu(k,T));const ke={email:v,displayName:T.displayName||"Professor Alex",userType:"teacher",uid:S.uid};x("✅ Login de professor realizado com sucesso!"),setTimeout(()=>{t(ke,"teacher"),r(!1),V(!1)},1e3)}catch(_){console.error("Teacher Login Error:",_);let S="Email ou senha inválidos";_.code==="auth/user-not-found"?S="Professor não encontrado. Contate o administrador.":_.code==="auth/wrong-password"?S="Senha incorreta":_.code==="auth/invalid-email"?S="Email inválido":_.code==="auth/too-many-requests"&&(S="Muitas tentativas. Tente novamente mais tarde."),I(S),V(!1)}};return h.createElement("div",{className:"sophisticated-bg min-h-screen"},h.createElement("div",{className:"min-h-screen flex items-center justify-center p-4"},h.createElement("div",{className:"w-full max-w-md"},h.createElement("div",{className:"elegant-card rounded-3xl p-8 fade-in"},h.createElement("div",{className:"text-center mb-8"},h.createElement("div",{className:"w-20 h-20 logo-sophisticated rounded-full flex items-center justify-center mx-auto mb-6"},h.createElement("span",{className:"text-3xl font-bold text-white"},"A")),h.createElement("h1",{className:"text-2xl font-medium",style:{color:"var(--alex-blue)"},className:"mb-1"},"Teacher Alex"),h.createElement("h2",{className:"text-4xl font-bold",style:{color:"var(--academy-red)"},className:"mb-4"},"ENGLISH ACADEMY"),h.createElement("div",{className:"beta-badge text-white px-4 py-2 rounded-full text-sm font-semibold mb-5"},h.createElement("span",{className:"w-2 h-2 bg-white rounded-full mr-2 animate-pulse"}),"FIREBASE AUTH"),h.createElement("h3",{className:"text-xl font-medium mb-2",style:{color:"var(--academy-red)"}},"Portal do Estudante"),h.createElement("p",{className:"text-base",style:{color:"var(--medium-gray)"}},"Autenticação segura via Firebase")),h.createElement("form",{onSubmit:O,className:"space-y-5"},h.createElement("div",null,h.createElement("label",{className:"block text-base font-medium mb-2",style:{color:"var(--charcoal)"}},"Nome de usuário"),h.createElement("input",{type:"text",placeholder:"Digite seu nome de usuário",value:u,onChange:p=>d(p.target.value),disabled:N,required:!0,className:"elegant-input"})),h.createElement("div",null,h.createElement("label",{className:"block text-base font-medium mb-2",style:{color:"var(--charcoal)"}},"Senha"),h.createElement("div",{className:"relative"},h.createElement("input",{type:s?"text":"password",placeholder:"Digite sua senha",value:m,onChange:p=>y(p.target.value),disabled:N,required:!0,className:"elegant-input pr-12"}),h.createElement("button",{type:"button",onClick:()=>i(!s),disabled:N,className:"absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity",style:{background:"none",border:"none",fontSize:"18px",color:"var(--medium-gray)"}},s?"👁️":"👁️‍🗨️"))),h.createElement("button",{type:"submit",disabled:N,className:`btn-primary w-full text-white font-bold py-4 rounded-xl text-lg transition-all ${N?"opacity-50 cursor-not-allowed":"hover:transform hover:scale-105"}`},N?h.createElement("div",{className:"flex items-center justify-center"},h.createElement("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"AUTENTICANDO..."):"ACESSAR MINHAS AULAS")),h.createElement("div",{className:"text-center mt-8 pt-6",style:{borderTop:"1px solid var(--light-gray)"}},h.createElement("p",{className:"text-base mb-1",style:{color:"var(--medium-gray)"}},"Precisa de ajuda?"),h.createElement("p",{className:"text-base font-medium mb-6",style:{color:"var(--charcoal)"}},"Entre em contato com ",h.createElement("span",{style:{color:"var(--academy-red)"},className:"font-semibold"},"Professor Alex")),h.createElement("div",{className:"space-y-3"},h.createElement("button",{className:"block w-full link-sophisticated text-base py-3 px-4 rounded-lg transition-all font-medium",style:{background:"none",border:"none"},disabled:N},"Esqueci minha senha"),h.createElement("button",{onClick:()=>r(!0),disabled:N,className:"block w-full link-muted text-sm py-3 px-4 rounded-lg hover:bg-gray-50 transition-all",style:{background:"none",border:"none"}},"🎓 Acesso para Professores"))),D&&h.createElement("div",{className:"mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-base text-center font-medium"},D),E&&h.createElement("div",{className:"mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-base text-center font-medium"},E)))),n&&h.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-4 z-50"},h.createElement("div",{className:"elegant-card rounded-2xl p-6 w-full max-w-sm"},h.createElement("h3",{className:"text-xl font-bold mb-6 text-center",style:{color:"var(--charcoal)"}},"🎓 Acesso Professor (Firebase)"),h.createElement("form",{onSubmit:w,className:"space-y-4"},h.createElement("input",{type:"email",placeholder:"Email do Professor",value:v,onChange:p=>b(p.target.value),disabled:N,required:!0,className:"elegant-input p-3 rounded-lg"}),h.createElement("div",{className:"relative"},h.createElement("input",{type:o?"text":"password",placeholder:"Senha",value:R,onChange:p=>P(p.target.value),disabled:N,required:!0,className:"elegant-input p-3 rounded-lg pr-12"}),h.createElement("button",{type:"button",onClick:()=>l(!o),disabled:N,className:"absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity",style:{background:"none",border:"none",fontSize:"16px",color:"var(--medium-gray)"}},o?"👁️":"👁️‍🗨️")),h.createElement("button",{type:"submit",disabled:N,className:`btn-secondary w-full text-white font-semibold py-3 rounded-lg transition-all ${N?"opacity-50 cursor-not-allowed":"hover:transform hover:scale-105"}`},N?h.createElement("div",{className:"flex items-center justify-center"},h.createElement("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"Autenticando..."):"Acessar Dashboard")),h.createElement("button",{onClick:()=>r(!1),disabled:N,className:"w-full mt-4 text-sm py-2 transition-colors",style:{background:"none",border:"none",color:"var(--medium-gray)"}},"Fechar"))),h.createElement("style",{jsx:!0},`
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
      `))}function Yb({user:t,onLogout:e,onNavigate:n}){const[r,s]=H.useState({level:1,xp:0,streak:0,completedLessons:0,totalLessons:110}),[i,o]=H.useState(!0),[l,u]=H.useState("🔥 Loading your progress...");H.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){u("❌ User not found"),o(!1);return}try{u("🔥 Loading Foundation progress...");const E=Nt(It,"students",t.username,"progress","foundation"),x=await qt(E);u("🎮 Loading Gaming progress...");const N=Nt(It,"students",t.username,"progress","gaming"),V=await qt(N);let O=0,w=0,p=0,_=0;if(x.exists()){const T=x.data();O+=T.totalXP||0,p=Object.keys(T.lessons||{}).length,w+=p}if(V.exists()){const T=V.data();O+=T.totalXP||0,_=Object.keys(T.lessons||{}).length,w+=_}const S=d(O),k=m(x,V),A={level:S,xp:O,streak:k,completedLessons:w,totalLessons:110,foundationLessons:p,gamingLessons:_};s(A),u(`✅ Progress loaded! ${p} Foundation + ${_} Gaming lessons`),o(!1),setTimeout(()=>{v(A)},500)}catch(E){console.error("Firebase Error loading progress:",E),u("❌ Failed to load progress"),o(!1);const x={level:3,xp:275,streak:5,completedLessons:8,totalLessons:110};s(x),setTimeout(()=>v(x),500)}})()},[t]);const d=I=>{if(I<100)return 1;let E=1,x=0;for(;I>=x&&(E++,x+=(E-1)*150,!(E>1e3)););return Math.min(E-1,1e3)},m=(I,E)=>{let x=0;if(I.exists()){const V=I.data();x=Math.max(x,V.lastUpdated||0)}if(E.exists()){const V=E.data();x=Math.max(x,V.lastUpdated||0)}if(x===0)return 0;const N=Math.floor((Date.now()-x)/(1e3*60*60*24));return N<=1?5:Math.max(0,5-N)},y=I=>I<=50?"Beginner":I<=150?"Elementary":I<=400?"Intermediate":I<=700?"Advanced":"Expert",v=I=>{[{id:"totalCompletedCounter",value:I.completedLessons},{id:"totalXPCounter",value:I.xp},{id:"currentLevelCounter",value:I.level},{id:"dayStreakCounter",value:I.streak}].forEach((x,N)=>{setTimeout(()=>{const V=document.getElementById(x.id);b(V,x.value,1200+N*200)},100+N*200)})},b=(I,E,x=1500)=>{if(!I)return;const N=0,V=Date.now(),O=()=>{const w=Date.now()-V,p=Math.min(w/x,1),_=1-Math.pow(1-p,3),S=Math.floor(N+(E-N)*_);I.textContent=S.toLocaleString("pt-BR"),p<1?requestAnimationFrame(O):(I.textContent=E.toLocaleString("pt-BR"),I.style.transform="scale(1.1)",setTimeout(()=>{I.style.transform="scale(1)"},200))};O()},R=r.level,P=y(R),D=r.completedLessons/r.totalLessons*100;return i?h.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-6xl mb-4"},"📊"),h.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Your Progress..."),h.createElement("p",{className:"text-gray-600 mb-4"},l),h.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):h.createElement("div",{className:"sophisticated-bg min-h-screen"},h.createElement("div",{className:"portal-header"},h.createElement("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 md:px-8"},h.createElement("div",{className:"brand-title"},"TEACHER ALEX ENGLISH ACADEMY"),h.createElement("div",{className:"welcome-message"},"Bem-vindo(a) de volta, ",(t==null?void 0:t.displayName)||"Estudante"),h.createElement("div",{className:"firebase-status"},l))),h.createElement("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6"},h.createElement("div",{className:"professional-card rounded-xl p-4 sm:p-5 md:p-6"},h.createElement("div",{className:"text-center"},h.createElement("h2",{className:"text-lg sm:text-xl md:text-2xl font-semibold mb-2",style:{color:"var(--charcoal)"}},"Nível ",R," • ",P),h.createElement("div",{className:"flex items-center justify-center space-x-4 sm:space-x-6 text-sm sm:text-base mb-3",style:{color:"var(--medium-gray)"}},h.createElement("span",null,r.xp," XP"),h.createElement("span",{style:{color:"var(--light-gray)"}},"•"),h.createElement("span",null,"Sequência ",r.streak)),h.createElement("div",{className:"progress-card rounded-lg p-3 mt-3"},h.createElement("div",{className:"flex justify-between text-xs sm:text-sm mb-1",style:{color:"var(--medium-gray)"}},h.createElement("span",null,"Progresso das Aulas"),h.createElement("span",null,r.completedLessons,"/",r.totalLessons)),h.createElement("div",{className:"w-full rounded-full h-2",style:{backgroundColor:"var(--light-gray)"}},h.createElement("div",{className:"h-2 rounded-full transition-all duration-500",style:{backgroundColor:"var(--alex-blue)",width:`${D}%`}}))),(r.foundationLessons>0||r.gamingLessons>0)&&h.createElement("div",{className:"mt-4 flex justify-center space-x-4 text-xs"},r.foundationLessons>0&&h.createElement("div",{className:"bg-blue-100 text-blue-800 px-2 py-1 rounded-full"},"🌟 Foundation: ",r.foundationLessons,"/10"),r.gamingLessons>0&&h.createElement("div",{className:"bg-purple-100 text-purple-800 px-2 py-1 rounded-full"},"🎮 Gaming: ",r.gamingLessons,"/10")))),h.createElement("div",{className:"professional-card rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100"},h.createElement("div",{className:"text-center mb-4"},h.createElement("h3",{className:"text-xl sm:text-2xl font-bold mb-2",style:{color:"var(--charcoal)"}},"📊 Seu Progresso Real"),h.createElement("p",{className:"text-sm sm:text-base",style:{color:"var(--medium-gray)"}},"Dados carregados diretamente do Firebase!")),h.createElement("div",{className:"grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"},h.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-blue-600 mb-1 counter-number",id:"totalCompletedCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),h.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Lições Completas"))),h.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-red-100 hover:shadow-md transition-all duration-300"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-red-500 mb-1 counter-number",id:"totalXPCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),h.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"XP Real"))),h.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-purple-600 mb-1 counter-number",id:"currentLevelCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"1"),h.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Nível Atual"))),h.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-green-100 hover:shadow-md transition-all duration-300"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-green-600 mb-1 counter-number",id:"dayStreakCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),h.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Sequência")))),h.createElement("div",{className:"mt-4 text-center"},h.createElement("p",{className:"text-sm sm:text-base text-blue-600 font-medium"},"🔥 Dados reais do Firebase! XP persiste entre sessões! 🚀"))),h.createElement("div",null,h.createElement("h2",{className:"text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6",style:{color:"var(--charcoal)"}},"🎧 Suas Aulas"),h.createElement("div",{className:"space-y-4 sm:space-y-5 md:space-y-6"},h.createElement("div",{className:"lesson-card-enhanced"},h.createElement("div",{className:"flex items-center justify-between"},h.createElement("div",{className:"flex-1"},h.createElement("h3",{className:"text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2"},"🌟 STUDY ENGLISH"),h.createElement("p",{className:"text-sm sm:text-base text-blue-100 mb-3 sm:mb-4"},r.completedLessons," lições completadas • ",r.xp," XP total"),h.createElement("div",{className:"flex items-center gap-2 mb-3"},h.createElement("div",{className:"bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white"},"🎧 Audio Lessons"),h.createElement("div",{className:"bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white"},"🔥 Firebase Sync"))),h.createElement("div",{className:"ml-4 text-3xl sm:text-4xl"},"🌟")),h.createElement("button",{onClick:()=>n("hub"),className:"btn-enhanced w-full sm:w-auto inline-block text-center font-bold py-3 px-6 rounded-lg text-sm sm:text-base"},"🎯 CONTINUAR ESTUDOS")),h.createElement("div",{className:"lesson-card-soon"},h.createElement("div",{className:"flex items-center justify-between"},h.createElement("div",{className:"flex-1"},h.createElement("h3",{className:"text-lg sm:text-xl font-semibold mb-1 sm:mb-2",style:{color:"var(--medium-gray)"}},"📝 EXERCÍCIOS"),h.createElement("p",{className:"text-sm sm:text-base mb-3 sm:mb-4",style:{color:"var(--medium-gray)"}},"Sistema de exercícios interativos completo")),h.createElement("div",{className:"ml-4 text-2xl sm:text-3xl",style:{color:"var(--light-gray)"}},"────")),h.createElement("button",{className:"btn-disabled w-full sm:w-auto font-semibold py-3 px-6 rounded-lg text-sm sm:text-base cursor-not-allowed"},"EM BREVE")))),h.createElement("div",{className:"revolutionary-footer"},h.createElement("p",{className:"revolutionary-text"},"🔥 Sua revolução no inglês agora é REAL • XP salvo no Firebase • Teacher Alex English Academy")),h.createElement("div",{className:"text-center pb-4"},h.createElement("button",{onClick:e,className:"text-sm transition-colors",style:{color:"var(--charcoal)",background:"none",border:"none"}},"Sair"))),h.createElement("style",{jsx:!0},`
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
      `))}function Jb({user:t,onLogout:e,onNavigate:n}){const[r,s]=H.useState({totalXP:0,completedLessons:0,foundationLessons:0,gamingLessons:0,themesCompleted:0,totalThemes:6}),[i,o]=H.useState(!0),[l,u]=H.useState("🔥 Loading your progress..."),d=[{id:"foundation",title:"Foundation",emoji:"🌟",description:"Basics of English - Start here!",lessons:10,status:"active",color:"blue",completedLessons:0,totalXP:0},{id:"gaming",title:"Gaming World",emoji:"🎮",description:"Video games and technology",lessons:10,status:"active",color:"purple",completedLessons:0,totalXP:0},{id:"movies",title:"Movie Magic",emoji:"🎬",description:"Cinema and entertainment",lessons:10,status:"coming-soon",color:"red",completedLessons:0,totalXP:0},{id:"food",title:"Food Adventures",emoji:"🍕",description:"Cooking and restaurants",lessons:10,status:"coming-soon",color:"orange",completedLessons:0,totalXP:0},{id:"travel",title:"Travel Dreams",emoji:"✈️",description:"Vacations and adventures",lessons:10,status:"coming-soon",color:"green",completedLessons:0,totalXP:0},{id:"business",title:"Business English",emoji:"💼",description:"Professional communication",lessons:10,status:"coming-soon",color:"gray",completedLessons:0,totalXP:0}],[m,y]=H.useState(d);H.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){u("❌ User not found"),o(!1);return}try{u("🔥 Loading Foundation progress...");const D=Nt(It,"students",t.username,"progress","foundation"),I=await qt(D);u("🎮 Loading Gaming progress...");const E=Nt(It,"students",t.username,"progress","gaming"),x=await qt(E);let N=0,V=0,O=0,w=0,p=0,_=0,S=0;if(I.exists()){const T=I.data();p=T.totalXP||0,O=Object.keys(T.lessons||{}).length,N+=p,V+=O,O===10&&S++}if(x.exists()){const T=x.data();_=T.totalXP||0,w=Object.keys(T.lessons||{}).length,N+=_,V+=w,w===10&&S++}s({totalXP:N,completedLessons:V,foundationLessons:O,gamingLessons:w,themesCompleted:S,totalThemes:6});const A=d.map(T=>T.id==="foundation"?{...T,completedLessons:O,totalXP:p,status:(O>0,"active")}:T.id==="gaming"?{...T,completedLessons:w,totalXP:_,status:(w>0,"active")}:T);y(A),u(`✅ Progress loaded! ${O} Foundation + ${w} Gaming = ${N} XP`),o(!1)}catch(D){console.error("Hub Firebase Error:",D),u("❌ Failed to load progress"),o(!1),s({totalXP:0,completedLessons:0,foundationLessons:0,gamingLessons:0,themesCompleted:0,totalThemes:6})}})()},[t]);const v=P=>{const D="theme-card rounded-xl p-6 transition-all duration-300 border-2";return P.status==="active"?`${D} theme-card-active cursor-pointer hover:transform hover:scale-105`:`${D} theme-card-disabled opacity-60`},b=(P,D)=>{if(D!=="active")return{background:"#f3f4f6",border:"#e5e7eb",text:"#6b7280"};const I={blue:{background:"linear-gradient(135deg, #dbeafe, #93c5fd)",border:"#3b82f6",text:"#1e40af"},purple:{background:"linear-gradient(135deg, #e9d5ff, #c084fc)",border:"#8b5cf6",text:"#6b21a8"},red:{background:"linear-gradient(135deg, #fecaca, #f87171)",border:"#ef4444",text:"#b91c1c"},orange:{background:"linear-gradient(135deg, #fed7aa, #fb923c)",border:"#f97316",text:"#c2410c"},green:{background:"linear-gradient(135deg, #d1fae5, #6ee7b7)",border:"#10b981",text:"#047857"},gray:{background:"linear-gradient(135deg, #f3f4f6, #d1d5db)",border:"#6b7280",text:"#374151"}};return I[P]||I.gray},R=P=>{P.status==="active"?P.id==="foundation"?n("foundation-lessons"):P.id==="gaming"?n("gaming-lessons"):P.id==="movies"?alert("🎬 Movie Magic lessons coming soon! Currently implementing..."):P.id==="food"?alert("🍕 Food Adventures lessons coming soon! Currently implementing..."):alert(`${P.title} lessons are being prepared! 🚀`):alert(`${P.title} será lançado em breve! 🚀`)};return i?h.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-6xl mb-4"},"🎯"),h.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Study Hub..."),h.createElement("p",{className:"text-gray-600 mb-4"},l),h.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):h.createElement("div",{className:"sophisticated-bg min-h-screen"},h.createElement("div",{className:"hub-header"},h.createElement("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8"},h.createElement("div",{className:"flex items-center justify-between"},h.createElement("div",null,h.createElement("h1",{className:"brand-title"},"🎯 STUDY ENGLISH HUB"),h.createElement("p",{className:"subtitle"},"Escolha seu tema de interesse"),h.createElement("p",{className:"firebase-status"},l)),h.createElement("button",{onClick:()=>n("portal"),className:"back-btn"},"← Voltar")))),h.createElement("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8"},h.createElement("div",{className:"text-center mb-8"},h.createElement("h2",{className:"text-2xl sm:text-3xl font-bold mb-2",style:{color:"var(--charcoal)"}},"Olá, ",(t==null?void 0:t.displayName)||"Estudante","! 👋"),h.createElement("p",{className:"text-lg",style:{color:"var(--medium-gray)"}},"Selecione um tema para continuar seus estudos")),h.createElement("div",{className:"professional-card rounded-xl p-4 mb-6 text-center"},h.createElement("h3",{className:"text-lg font-bold mb-2",style:{color:"var(--charcoal)"}},"📊 Seu Progresso Real (Firebase)"),h.createElement("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4"},h.createElement("div",{className:"stat-item"},h.createElement("div",{className:"text-2xl font-bold text-blue-600"},r.themesCompleted),h.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Temas Completos")),h.createElement("div",{className:"stat-item"},h.createElement("div",{className:"text-2xl font-bold text-green-600"},r.completedLessons),h.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Lições Completas")),h.createElement("div",{className:"stat-item"},h.createElement("div",{className:"text-2xl font-bold text-purple-600"},r.foundationLessons+r.gamingLessons),h.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Total Estudado")),h.createElement("div",{className:"stat-item"},h.createElement("div",{className:"text-2xl font-bold text-red-600"},r.totalXP),h.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"XP Total"))),h.createElement("div",{className:"mt-4 text-sm text-blue-600"},"🔥 Dados carregados em tempo real do Firebase!")),h.createElement("div",{className:"professional-card rounded-xl p-4 mb-6 text-center"},h.createElement("h3",{className:"text-lg font-bold mb-2",style:{color:"var(--charcoal)"}},"🎉 Series Status: Foundation & Gaming Active!"),h.createElement("div",{className:"flex justify-center space-x-6 text-sm"},h.createElement("div",{className:"text-blue-600"},"🌟 Foundation: ",r.foundationLessons,"/10 (",r.foundationLessons>0?"Started":"Ready",")"),h.createElement("div",{className:"text-purple-600"},"🎮 Gaming: ",r.gamingLessons,"/10 (",r.gamingLessons>0?"Started":"Ready",")"))),h.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"},m.map(P=>{const D=b(P.color,P.status);return h.createElement("div",{key:P.id,className:v(P),onClick:()=>R(P),style:{background:D.background,borderColor:D.border}},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-5xl mb-4"},P.emoji),h.createElement("h3",{className:"text-xl font-bold mb-2",style:{color:D.text}},P.title),h.createElement("p",{className:"text-sm mb-4",style:{color:D.text,opacity:.8}},P.description),h.createElement("div",{className:"flex items-center justify-center space-x-4 text-sm"},h.createElement("span",{style:{color:D.text}},"📚 ",P.lessons," lições"),P.status==="active"&&(P.id==="foundation"||P.id==="gaming")&&h.createElement("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"},"✅ Ready!"),P.status==="active"&&(P.id==="movies"||P.id==="food")&&h.createElement("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold"},"🚧 Building"),P.status==="coming-soon"&&h.createElement("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold"},"🚀 Em breve")),P.completedLessons>0&&h.createElement("div",{className:"mt-3 text-xs",style:{color:D.text}},h.createElement("div",{className:"bg-white/20 rounded-full p-2"},"✨ ",P.completedLessons,"/",P.lessons," completas • ",P.totalXP," XP"))))})),h.createElement("div",{className:"professional-card rounded-xl p-6 text-center"},h.createElement("h3",{className:"text-xl font-bold mb-4",style:{color:"var(--charcoal)"}},"📈 Resumo Completo (Firebase)"),h.createElement("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4"},h.createElement("div",{className:"stat-item"},h.createElement("div",{className:"text-2xl font-bold text-blue-600"},m.filter(P=>P.status==="active").length),h.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Temas Ativos")),h.createElement("div",{className:"stat-item"},h.createElement("div",{className:"text-2xl font-bold text-green-600"},r.completedLessons),h.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Lições Feitas")),h.createElement("div",{className:"stat-item"},h.createElement("div",{className:"text-2xl font-bold text-purple-600"},r.themesCompleted),h.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"Séries Completas")),h.createElement("div",{className:"stat-item"},h.createElement("div",{className:"text-2xl font-bold text-red-600"},r.totalXP),h.createElement("div",{className:"text-sm",style:{color:"var(--medium-gray)"}},"XP Acumulado"))),h.createElement("div",{className:"mt-4 text-sm text-gray-600"},"🔥 Todos os dados sincronizados com Firebase em tempo real")),h.createElement("div",{className:"text-center mt-8"},h.createElement("button",{onClick:e,className:"text-sm transition-colors",style:{color:"var(--medium-gray)",background:"none",border:"none"}},"Sair da conta"))),h.createElement("style",{jsx:!0},`
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
      `))}function Zb({user:t,onLogout:e,onNavigate:n}){const[r,s]=H.useState({totalStudents:0,activeStudents:0,newStudentsThisMonth:0,totalLessonsCompleted:0,totalXPEarned:0}),[i,o]=H.useState(!1),[l,u]=H.useState({name:"",username:"",password:""}),[d,m]=H.useState([]),[y,v]=H.useState(!0),[b,R]=H.useState("🔥 Loading dashboard...");H.useEffect(()=>{(async()=>{try{R("🔥 Loading students from Firebase...");const I=Cb(It,"students"),E=await Gb(I);if(E.empty){m([]),s({totalStudents:0,activeStudents:0,newStudentsThisMonth:0,totalLessonsCompleted:0,totalXPEarned:0}),R("✅ Firebase connected - No students yet"),v(!1);return}R("📊 Calculating student progress...");const x=[];let N=0,V=0,O=0,w=0;const p=new Date().getMonth(),_=new Date().getFullYear();for(const S of E.docs){const k=S.id,A=Nt(It,"students",k,"progress","foundation"),T=await qt(A),ke=Nt(It,"students",k,"progress","gaming"),tt=await qt(ke);let nt=0,Oe=0,z=0,Q=0,Y="Never";if(T.exists()){const ge=T.data();nt+=ge.totalXP||0,z=Object.keys(ge.lessons||{}).length,Oe+=z,ge.lastUpdated&&(Y=new Date(ge.lastUpdated).toLocaleDateString("pt-BR"))}if(tt.exists()){const ge=tt.data();if(nt+=ge.totalXP||0,Q=Object.keys(ge.lessons||{}).length,Oe+=Q,ge.lastUpdated){const ze=new Date(ge.lastUpdated),Ne=T.exists()&&T.data().lastUpdated?new Date(T.data().lastUpdated):new Date(0);Y=(ze>Ne?ze:Ne).toLocaleDateString("pt-BR")}}const de=Y!=="Never"&&Date.now()-new Date(Y.split("/").reverse().join("-")).getTime()<7*24*60*60*1e3;de&&O++;const oe=S.data().createdAt;if(oe){const ge=new Date(oe);ge.getMonth()===p&&ge.getFullYear()===_&&w++}const me=Math.round(Oe/20*100);x.push({id:k,name:S.data().name||k,username:k,lastAccess:Y,totalXP:nt,totalLessons:Oe,foundationLessons:z,gamingLessons:Q,progress:me,isActive:de}),N+=Oe,V+=nt}x.sort((S,k)=>k.totalXP-S.totalXP),m(x),s({totalStudents:x.length,activeStudents:O,newStudentsThisMonth:w,totalLessonsCompleted:N,totalXPEarned:V}),R(`✅ ${x.length} students loaded, ${N} lessons completed`),v(!1)}catch(I){console.error("Firebase Dashboard Error:",I),R("❌ Failed to load dashboard data"),v(!1),m([{id:1,name:"João Silva",username:"joao123",lastAccess:"23/07/2025",progress:75,totalXP:450,totalLessons:8},{id:2,name:"Maria Santos",username:"maria456",lastAccess:"22/07/2025",progress:45,totalXP:280,totalLessons:5},{id:3,name:"Pedro Costa",username:"pedro789",lastAccess:"21/07/2025",progress:90,totalXP:680,totalLessons:12}])}})()},[]);const P=async D=>{if(D.preventDefault(),!l.name||!l.username||!l.password){alert("Por favor, preencha todos os campos");return}if(l.password.length<4){alert("Senha deve ter pelo menos 4 caracteres");return}if(d.find(E=>E.username===l.username)){alert("Nome de usuário já existe! Escolha outro.");return}try{R("📝 Creating student account...");const E=Nt(It,"students",l.username);await cu(E,{name:l.name,username:l.username,password:l.password,createdAt:Date.now(),createdBy:(t==null?void 0:t.email)||"teacher",status:"active"});const x={id:Date.now(),name:l.name,username:l.username,lastAccess:"Never",progress:0,totalXP:0,totalLessons:0,foundationLessons:0,gamingLessons:0,isActive:!1};m([...d,x]),s(N=>({...N,totalStudents:N.totalStudents+1,newStudentsThisMonth:N.newStudentsThisMonth+1})),alert(`✅ Conta criada com sucesso no Firebase!

Usuário: ${l.username}
Senha: ${l.password}

Envie estas credenciais para o aluno.`),u({name:"",username:"",password:""}),o(!1),R(`✅ Student ${l.name} created successfully`)}catch(E){console.error("Firebase Create Student Error:",E),alert("❌ Erro ao criar estudante no Firebase. Tente novamente."),R("❌ Failed to create student")}};return y?h.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-6xl mb-4"},"👨‍🏫"),h.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Teacher Dashboard..."),h.createElement("p",{className:"text-gray-600 mb-4"},b),h.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):h.createElement("div",{className:"sophisticated-bg min-h-screen"},h.createElement("nav",{className:"bg-white shadow-sm border-b border-gray-200 p-4"},h.createElement("div",{className:"flex justify-between items-center max-w-6xl mx-auto"},h.createElement("div",{className:"flex items-center space-x-3"},h.createElement("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"},h.createElement("span",{className:"text-xl font-bold text-white"},"A")),h.createElement("div",null,h.createElement("span",{className:"text-gray-800 font-semibold text-lg"},"Dashboard Professor"),h.createElement("div",{className:"text-gray-500 text-sm"},"Teacher Alex English Academy"))),h.createElement("div",{className:"flex items-center space-x-4"},h.createElement("span",{className:"text-gray-600 text-sm"},(t==null?void 0:t.displayName)||"Professor"),h.createElement("button",{onClick:e,className:"bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"},"Sair")))),h.createElement("div",{className:"max-w-6xl mx-auto p-6"},h.createElement("div",{className:"bg-white rounded-xl shadow-lg p-4 mb-6 text-center"},h.createElement("div",{className:"text-sm"},h.createElement("span",{className:"text-blue-600 font-medium"},b)))),h.createElement("div",{className:"max-w-6xl mx-auto p-6"},h.createElement("div",{className:"grid md:grid-cols-5 gap-6 mb-8"},h.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},h.createElement("div",{className:"text-3xl font-bold text-blue-600 mb-2"},r.totalStudents),h.createElement("div",{className:"text-gray-600 text-sm"},"Total Students")),h.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},h.createElement("div",{className:"text-3xl font-bold text-green-600 mb-2"},r.activeStudents),h.createElement("div",{className:"text-gray-600 text-sm"},"Active Students")),h.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},h.createElement("div",{className:"text-3xl font-bold text-red-500 mb-2"},r.newStudentsThisMonth),h.createElement("div",{className:"text-gray-600 text-sm"},"New This Month")),h.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},h.createElement("div",{className:"text-3xl font-bold text-purple-600 mb-2"},r.totalLessonsCompleted),h.createElement("div",{className:"text-gray-600 text-sm"},"Lessons Completed")),h.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},h.createElement("div",{className:"text-3xl font-bold text-yellow-600 mb-2"},r.totalXPEarned.toLocaleString()),h.createElement("div",{className:"text-gray-600 text-sm"},"Total XP Earned"))),h.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8"},h.createElement("div",{className:"flex justify-between items-center mb-6"},h.createElement("h3",{className:"text-xl font-bold text-gray-800"},"👥 Gerenciar Alunos (Firebase)"),h.createElement("button",{onClick:()=>o(!i),className:"bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"},"+ Adicionar Novo Aluno")),i&&h.createElement("div",{className:"bg-gray-50 rounded-lg p-6 mb-6"},h.createElement("h4",{className:"text-lg font-semibold text-gray-800 mb-4"},"📝 Criar Conta Firebase para Cliente"),h.createElement("form",{onSubmit:P,className:"grid md:grid-cols-3 gap-4 mb-4"},h.createElement("input",{type:"text",placeholder:"Nome do aluno",value:l.name,onChange:D=>u({...l,name:D.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),h.createElement("input",{type:"text",placeholder:"Nome de usuário (login)",value:l.username,onChange:D=>u({...l,username:D.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),h.createElement("input",{type:"password",placeholder:"Senha (min 4 caracteres)",value:l.password,onChange:D=>u({...l,password:D.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),h.createElement("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"},"✅ Criar no Firebase"),h.createElement("button",{type:"button",onClick:()=>o(!1),className:"bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"},"❌ Cancelar"))),h.createElement("div",{className:"space-y-3"},d.length===0?h.createElement("div",{className:"text-center py-8"},h.createElement("div",{className:"text-gray-500 mb-4"},"📚 Nenhum estudante no Firebase ainda"),h.createElement("p",{className:"text-sm text-gray-400"},'Clique em "Adicionar Novo Aluno" para criar a primeira conta')):d.map(D=>h.createElement("div",{key:D.id,className:"border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"},h.createElement("div",{className:"flex justify-between items-start"},h.createElement("div",{className:"flex-1"},h.createElement("div",{className:"flex items-center space-x-3 mb-2"},h.createElement("h4",{className:"font-semibold text-gray-800"},D.name),D.isActive&&h.createElement("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"},"● Active")),h.createElement("p",{className:"text-sm text-gray-600 mb-2"},"@",D.username," • Último acesso: ",D.lastAccess),h.createElement("div",{className:"flex items-center space-x-4 text-xs text-gray-500"},h.createElement("span",null,"🌟 Foundation: ",D.foundationLessons||0,"/10"),h.createElement("span",null,"🎮 Gaming: ",D.gamingLessons||0,"/10"),h.createElement("span",null,"⚡ Total XP: ",D.totalXP))),h.createElement("div",{className:"text-right"},h.createElement("div",{className:"text-lg font-bold text-blue-600"},D.progress,"%"),h.createElement("div",{className:"text-xs text-gray-500"},D.totalLessons,"/20 lessons"))))))),h.createElement("div",{className:"grid lg:grid-cols-2 gap-8"},h.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6"},h.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"⚡ Ações Rápidas"),h.createElement("div",{className:"space-y-3"},h.createElement("button",{onClick:()=>n("portal"),className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm transition-colors"},"📱 Visualizar Portal do Estudante"),h.createElement("button",{className:"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg text-sm transition-colors"},"📊 Exportar Relatório Firebase"),h.createElement("button",{className:"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg text-sm transition-colors"},"📧 Mensagem para Todos os Alunos"),h.createElement("button",{onClick:()=>window.location.reload(),className:"w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-sm transition-colors"},"🔄 Atualizar Dados Firebase"))),h.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6"},h.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"📈 Status do Sistema"),h.createElement("div",{className:"space-y-4"},h.createElement("div",{className:"flex items-center justify-between"},h.createElement("span",{className:"text-gray-600 text-sm"},"🔥 Firebase Connection"),h.createElement("span",{className:"text-green-600 font-semibold"},"● Connected")),h.createElement("div",{className:"flex items-center justify-between"},h.createElement("span",{className:"text-gray-600 text-sm"},"📊 React System"),h.createElement("span",{className:"text-green-600 font-semibold"},"● Running")),h.createElement("div",{className:"flex items-center justify-between"},h.createElement("span",{className:"text-gray-600 text-sm"},"🌟 Foundation Series"),h.createElement("span",{className:"text-green-600 font-semibold"},"10/10 Active")),h.createElement("div",{className:"flex items-center justify-between"},h.createElement("span",{className:"text-gray-600 text-sm"},"🎮 Gaming Series"),h.createElement("span",{className:"text-green-600 font-semibold"},"10/10 Active")),h.createElement("div",{className:"flex items-center justify-between"},h.createElement("span",{className:"text-gray-600 text-sm"},"📊 Student Data"),h.createElement("span",{className:"text-blue-600 font-semibold"},"Real Firebase")),h.createElement("div",{className:"flex items-center justify-between"},h.createElement("span",{className:"text-gray-600 text-sm"},"⚡ XP Tracking"),h.createElement("span",{className:"text-green-600 font-semibold"},"● Persistent")))))),h.createElement("style",{jsx:!0},`
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
      `))}const is=[{id:"foundation-01",title:"Basic Greetings",description:"Learn essential greeting phrases and introductions",duration:"35s",icon:"🌟",audioFile:"audio/a1-foundation/audio-01-greetings.mp3",questions:[{question:"What is the woman's name?",options:["Sara","Sarah","Sandra","Samantha"],correct:1},{question:"Where is she from?",options:["Brazil","USA","Canada","Mexico"],correct:2},{question:"What is her job?",options:["Teacher","Nurse","Doctor","Engineer"],correct:1},{question:"How old is she?",options:["23","24","25","26"],correct:2},{question:"What does she say at the end?",options:["Goodbye","See you later","Have a great day","Take care"],correct:2}]},{id:"foundation-02",title:"Family Introduction",description:"Learn family members and relationship vocabulary",duration:"38s",icon:"👨‍👩‍👧‍👦",audioFile:"audio/a1-foundation/audio-02-family.mp3",questions:[{question:"How many people are in the family?",options:["3","4","5","6"],correct:1},{question:"What does the mother like?",options:["Reading","Cooking","Dancing","Shopping"],correct:1},{question:"How old is the sister?",options:["18","20","22","25"],correct:1},{question:"Where does the father work?",options:["Hospital","School","Bank","Restaurant"],correct:2},{question:"Where do they live?",options:["Small apartment","Big house","Small house","Big apartment"],correct:1}]},{id:"foundation-03",title:"Daily Routine",description:"Express daily activities and time management",duration:"40s",icon:"⏰",audioFile:"audio/a1-foundation/audio-03-routine.mp3",questions:[{question:"What time does he wake up?",options:["6 o'clock","7 o'clock","8 o'clock","9 o'clock"],correct:1},{question:"How does he go to work?",options:["By car","By bus","Walking","By bike"],correct:1},{question:"What time does he go to bed?",options:["9 o'clock","10 o'clock","11 o'clock","12 o'clock"],correct:1},{question:"What does he eat for breakfast?",options:["Cereal","Eggs","Bread with butter","Fruit"],correct:2},{question:"What time does he start work?",options:["8 o'clock","9 o'clock","8:30","9:30"],correct:1}]},{id:"foundation-04",title:"Food and Drinks",description:"Learn about meals, food types, and dining",duration:"36s",icon:"🍕",audioFile:"audio/a1-foundation/audio-04-food.mp3",questions:[{question:"What is his favorite drink?",options:["Coffee","Tea","Orange juice","Water"],correct:2},{question:"What dessert does he want?",options:["Ice cream","Chocolate cake","Apple pie","Cookies"],correct:1},{question:"When does he come to the restaurant?",options:["Every day","Every weekend","Every month","Every week"],correct:1},{question:"What food does he like?",options:["Pizza only","Hamburgers only","Pizza and hamburgers","Salad"],correct:2},{question:"How is the food at the restaurant?",options:["Expensive","Delicious","Bad","Cold"],correct:1}]},{id:"foundation-05",title:"Weather and Clothes",description:"Describe weather conditions and clothing",duration:"37s",icon:"🌤️",audioFile:"audio/a1-foundation/audio-05-weather.mp3",questions:[{question:"What is the weather like today?",options:["Cold and rainy","Sunny and warm","Cloudy","Windy"],correct:1},{question:"What did he wear yesterday?",options:["T-shirt and shorts","Jacket and boots","Jeans and sweater","Dress"],correct:1},{question:"Why does he love summer?",options:["No school","Nice weather","Long days","Vacation time"],correct:1},{question:"What is he wearing today?",options:["Jacket and boots","Blue t-shirt and white shorts","Jeans and sweater","Black pants"],correct:1},{question:"What will tomorrow's weather be like?",options:["Sunny","Rainy","Cloudy","Hot"],correct:2}]},{id:"foundation-06",title:"Shopping",description:"Learn shopping vocabulary and money expressions",duration:"39s",icon:"🛒",audioFile:"audio/a1-foundation/audio-06-shopping.mp3",questions:[{question:"What fruits does he want to buy?",options:["Apples and oranges only","Bananas only","Apples, bananas, and oranges","Only oranges"],correct:2},{question:"When does the supermarket close?",options:["9 at night","10 at night","11 at night","8 at night"],correct:1},{question:"How does he pay?",options:["Cash","Credit card","Check","Debit card"],correct:1},{question:"What other things does he need to buy?",options:["Milk and eggs","Bread only","Milk, eggs, and bread","Just milk"],correct:2},{question:"How long does shopping take?",options:["20 minutes","30 minutes","40 minutes","1 hour"],correct:1}]},{id:"foundation-07",title:"Hobbies and Free Time",description:"Express interests, hobbies, and leisure activities",duration:"35s",icon:"🎨",audioFile:"audio/a1-foundation/audio-07-hobbies.mp3",questions:[{question:"What instrument does he play?",options:["Piano","Guitar","Drums","Violin"],correct:1},{question:"When does he play this instrument?",options:["Every day","Weekdays","Weekends","Sometimes"],correct:2},{question:"What is his favorite hobby?",options:["Reading","Photography","Singing","Dancing"],correct:1},{question:"What does he not like doing?",options:["Singing","Dancing","Reading","Playing guitar"],correct:1},{question:"What does he take pictures of?",options:["People","Buildings","Nature and animals","Cars"],correct:2}]},{id:"foundation-08",title:"Transportation",description:"Learn about vehicles, directions, and travel",duration:"38s",icon:"🚗",audioFile:"audio/a1-foundation/audio-08-transportation.mp3",questions:[{question:"How does he usually go to work?",options:["By car","Walking","By bus","By bike"],correct:1},{question:"When does he drive his car?",options:["Every day","When it rains","On weekends","Never"],correct:2},{question:"Why doesn't he like the subway?",options:["Too expensive","Too crowded","Too slow","Too far"],correct:1},{question:"Where does he live?",options:["Countryside","City center","Suburbs","Near the park"],correct:1},{question:"Where is the bus stop?",options:["Near his work","In front of his building","At the corner","Far from home"],correct:1}]},{id:"foundation-09",title:"Health and Body",description:"Learn body parts, health, and medical vocabulary",duration:"40s",icon:"⚕️",audioFile:"audio/a1-foundation/audio-09-health.mp3",questions:[{question:"How often does he exercise?",options:["Every day","Three times a week","Once a week","Never"],correct:1},{question:"How many glasses of water does he drink?",options:["6","7","8","10"],correct:2},{question:"How many hours does he sleep?",options:["7 hours","8 hours","9 hours","6 hours"],correct:1},{question:"How often does he brush his teeth?",options:["Once a day","Twice a day","Three times a day","Never"],correct:1},{question:"What doesn't he do?",options:["Exercise","Eat vegetables","Smoke and drink alcohol","Sleep"],correct:2}]},{id:"foundation-10",title:"Future Plans",description:"Express future intentions, goals, and dreams",duration:"37s",icon:"🚀",audioFile:"audio/a1-foundation/audio-10-future.mp3",questions:[{question:"Where will he travel next month?",options:["Asia","Europe","America","Africa"],correct:1},{question:"How long will he stay?",options:["One week","Two weeks","Three weeks","One month"],correct:1},{question:"What will he do after his trip?",options:["Study more","Start a new job","Buy a house","Move cities"],correct:1},{question:"Which countries will he visit?",options:["France and Italy","Italy and Spain","France, Italy, and Spain","Only France"],correct:2},{question:"What languages is he learning?",options:["Spanish","French","French and Italian","Italian"],correct:2}]}];function eP({user:t,onBack:e}){const[n,r]=H.useState("selection"),[s,i]=H.useState(null),[o,l]=H.useState([]),[u,d]=H.useState(0),[m,y]=H.useState("Listen to Audio"),[v,b]=H.useState(!1),[R,P]=H.useState(!1),[D,I]=H.useState({}),[E,x]=H.useState(1),[N,V]=H.useState(null),[O,w]=H.useState(null),[p,_]=H.useState("🔥 Loading Firebase..."),[S,k]=H.useState(!0),A=H.useRef(null);H.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){_("❌ User not found"),k(!1);return}try{_("🔥 Connecting to Firebase...");const $=Nt(It,"students",t.username,"progress","foundation"),K=await qt($);if(K.exists()){const Z=K.data();I(Z.lessons||{}),w({totalXP:Z.totalXP||0,completedLessons:Object.keys(Z.lessons||{}).length,lastAccess:new Date().toISOString()}),_("✅ Firebase: Foundation progress loaded")}else I({}),w({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),_("✅ Firebase: New student initialized");k(!1)}catch($){console.error("Firebase Error:",$),_("❌ Firebase connection failed"),k(!1),I({"foundation-01":{status:"completed",score:5,attempts:1},"foundation-02":{status:"completed",score:4,attempts:2}})}})()},[t]);const T=async(U,$,K=1)=>{if(t!=null&&t.username)try{const Z=$*10+($===5?25:0),De=Date.now(),Me={lessonId:U,score:$,attempts:K,xpEarned:Z,completedAt:De,status:"completed"};I($e=>({...$e,[U]:Me}));const mn=Nt(It,"students",t.username,"progress","foundation"),pn=await qt(mn);let Et={lessons:{[U]:Me},totalXP:Z,lastUpdated:De,series:"foundation"};if(pn.exists()){const $e=pn.data();Et={...$e,lessons:{...$e.lessons,[U]:Me},totalXP:($e.totalXP||0)+Z,lastUpdated:De}}await cu(mn,Et,{merge:!0}),w($e=>({...$e,totalXP:Et.totalXP,completedLessons:Object.keys(Et.lessons).length})),console.log("✅ Firebase Save Success:",{lessonId:U,score:$,xpEarned:Z})}catch(Z){console.error("❌ Firebase Save Error:",Z)}},ke=()=>{A.current&&(A.current.paused?(A.current.play(),d(Math.max(u,20))):A.current.pause())},tt=()=>{A.current&&(A.current.currentTime=Math.max(0,A.current.currentTime-10))},nt=()=>{A.current&&(A.current.currentTime=Math.min(A.current.duration,A.current.currentTime+10))},Oe=U=>{x(U),A.current&&(A.current.playbackRate=U)},z=U=>{const $=is.find(K=>K.id===U);$&&(i($),l(new Array($.questions.length).fill(null)),d(0),y("Listen to Audio"),r("lesson"),V(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},Q=(U,$)=>{const K=[...o];K[U]=$,l(K);const Z=K.filter(Me=>Me!==null).length,De=20+Z/s.questions.length*80;d(De),y(`${Z}/5 Questions Answered`)},Y=async()=>{const U=o.reduce((Z,De,Me)=>Z+(De===s.questions[Me].correct?1:0),0),$=D[s.id],K=$?$.attempts+1:1;await T(s.id,U,K),console.log(`✅ Foundation Lesson ${s.id} saved to Firebase! Score: ${U}/5, Attempts: ${K}`),b(!0)},de=()=>{const U=is.findIndex(K=>K.id===s.id),$=is[U+1];b(!1),$?z($.id):(r("selection"),alert("🎉 Congratulations! Foundation Course Complete! 🌟"))},oe=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},me=()=>{s&&(b(!1),l(new Array(s.questions.length).fill(null)),V(Date.now()),d(0),y("Listen to Audio"),A.current&&(A.current.currentTime=0,A.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},ge=U=>{const $=D[U];return $?{status:"Completed",class:"status-completed",score:$.score,attempts:$.attempts,xpEarned:$.xpEarned}:{status:"Available",class:"status-not-started"}},ze=o.filter(U=>U!==null).length,Ne=ze===(s==null?void 0:s.questions.length);return S?h.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-6xl mb-4"},"🔥"),h.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),h.createElement("p",{className:"text-gray-600"},"Loading your Foundation progress"))):n==="selection"?h.createElement("div",{className:"sophisticated-bg min-h-screen"},h.createElement("div",{className:"foundation-header"},h.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},h.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),h.createElement("div",{className:"text-center mt-6"},h.createElement("div",{className:"text-5xl mb-4"},"🌟"),h.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"A1 Foundation Course"),h.createElement("p",{className:"text-blue-100 mb-4"},"Complete English basics with 10 interactive audio lessons"),h.createElement("div",{className:"foundation-accent-card rounded-lg p-3"},h.createElement("p",{className:"text-white font-medium"},"🎯 Questions match audio content • 📊 Track progress • 🏆 Earn XP!"))))),h.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},h.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},h.createElement("div",{className:"text-sm"},h.createElement("span",{className:"text-primary-blue font-medium"},p),O&&h.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Total XP: ",O.totalXP," • Lessons: ",O.completedLessons,"/10")))),h.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},h.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},is.map((U,$)=>{const K=ge(U.id);return h.createElement("div",{key:U.id,className:"lesson-card foundation-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>z(U.id)},h.createElement("div",{className:"flex items-center justify-between mb-3"},h.createElement("div",{className:"text-2xl"},U.icon),h.createElement("span",{className:`status-badge ${K.class}`},K.status)),h.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",$+1,": ",U.title),h.createElement("p",{className:"text-sm text-gray-600 mb-3"},U.description),h.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},h.createElement("span",null,"🎧 ",U.duration),h.createElement("span",{className:"font-semibold text-blue-600"},K.score?`✅ ${K.score}/5`:"+50 XP")),K.attempts>0&&h.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",K.attempts," • Score: ",K.score||0,"/5 • XP: ",K.xpEarned||0))}))),h.createElement("style",{jsx:!0},`
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
        `)):h.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},h.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},h.createElement("div",{className:"foundation-lesson-card rounded-xl p-6 mb-6"},h.createElement("div",{className:"flex items-center justify-between mb-4"},h.createElement("button",{onClick:oe,className:"text-blue-600 text-sm hover:underline"},"← Back to Foundation"),h.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",is.findIndex(U=>U.id===s.id)+1," of ",is.length)),h.createElement("h2",{className:"text-2xl font-bold text-blue-600 mb-2"},s.title),h.createElement("p",{className:"text-gray-600 mb-4"},s.description),h.createElement("div",{className:"progress-card rounded-lg p-3"},h.createElement("div",{className:"flex justify-between text-sm mb-2"},h.createElement("span",null,"Lesson Progress"),h.createElement("span",null,m)),h.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},h.createElement("div",{className:"bg-blue-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),h.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},h.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🎧 Listen to the Audio"),h.createElement("audio",{ref:A,src:s.audioFile,onLoadedData:()=>{console.log("✅ Audio loaded:",s.audioFile),A.current&&(A.current.playbackRate=E)},onError:U=>{console.error("❌ Audio error:",U.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{A.current&&A.current.duration>0&&A.current.currentTime/A.current.duration*100>10&&d(Math.max(u,20))},className:"hidden"}),h.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},h.createElement("button",{onClick:tt,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),h.createElement("button",{onClick:ke,className:"btn-audio bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},"▶️ Play/Pause"),h.createElement("button",{onClick:nt,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),h.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},h.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(U=>h.createElement("button",{key:U,onClick:()=>Oe(U),className:`px-3 py-1 rounded ${E===U?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},U,"x"))),h.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🎯 Listen carefully and then answer the questions below")),h.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((U,$)=>h.createElement("div",{key:$,className:"question-card rounded-xl p-6"},h.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},$+1,". ",U.question),h.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},U.options.map((K,Z)=>h.createElement("button",{key:Z,onClick:()=>Q($,Z),className:`p-3 rounded-lg text-left transition-all ${o[$]===Z?"bg-blue-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+Z),". ",K)))))),h.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},h.createElement("button",{onClick:Y,disabled:!Ne,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${Ne?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},Ne?"🔥 Save to Firebase - Ready! 🌟":`Submit Answers (${ze}/5 Complete)`),h.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Questions now match the audio content!"))),v&&h.createElement(tP,{lesson:s,userAnswers:o,onNext:de,onReview:()=>P(!0),onClose:()=>b(!1),onRestart:me}),R&&h.createElement(nP,{lesson:s,userAnswers:o,onClose:()=>P(!1)}),h.createElement("style",{jsx:!0},`
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
      `))}function tP({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((m,y,v)=>m+(y===t.questions[v].correct?1:0),0),l=Math.round(o/5*100),u=o*10+(o===5?25:0),d=o===5;return h.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},h.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-5xl mb-4"},d?"🏆":o>=4?"🌟":"📝"),h.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},d?"Perfect Score!":o>=4?"Great Job!":"Lesson Complete!"),h.createElement("div",{className:"bg-blue-50 rounded-lg p-4 mb-4"},h.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),h.createElement("div",{className:"text-lg text-gray-600 mb-2"},l,"% Correct"),h.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," XP Earned!")),d&&h.createElement("div",{className:"bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-3 mb-4"},h.createElement("div",{className:"text-sm font-semibold text-blue-700 mb-2"},"🎉 Achievement Unlocked!"),h.createElement("div",{className:"font-medium"},"Perfect Foundation Score!")),h.createElement("div",{className:"space-y-3"},h.createElement("button",{onClick:r,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&h.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),h.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Lesson →"),h.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Foundation")))))}function nP({lesson:t,userAnswers:e,onClose:n}){return h.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},h.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},h.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"📝 Answer Review"),h.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,l=r.options[r.correct],u=r.options[i];return h.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},h.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),h.createElement("div",{className:"space-y-1"},h.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&h.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",l)))})),h.createElement("button",{onClick:n,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}const os=[{id:"gaming-01",title:"My Gaming PC Setup",description:"Building the perfect gaming computer setup",duration:"38s",icon:"🖥️",audioFile:"audio/a1-gaming/audio-01-pc-setup.mp3",questions:[{question:"What graphics card does she have?",options:["RTX 3070","RTX 4070","GTX 1080","RX 6700"],correct:1},{question:"How much RAM is in her computer?",options:["8GB","16GB","32GB","64GB"],correct:1},{question:"What type of keyboard switches does she use?",options:["Blue switches","Brown switches","Red switches","Black switches"],correct:2},{question:"How much did she spend on her setup?",options:["$2000","$3000","$4000","$5000"],correct:1},{question:"What happens to her RGB lighting during games?",options:["Turns off","Changes colors when she gets kills","Stays red","Flashes randomly"],correct:1}]},{id:"gaming-02",title:"Online Gaming with Friends",description:"Playing with friends and communicating online",duration:"36s",icon:"🎮",audioFile:"audio/a1-gaming/audio-02-online-gaming.mp3",questions:[{question:"What game do they play together?",options:["Counter-Strike","Valorant","Overwatch","Call of Duty"],correct:1},{question:"What platform do they use to communicate?",options:["Skype","Discord","TeamSpeak","WhatsApp"],correct:1},{question:"What is her role in the team?",options:["Tank","DPS","Support","Sniper"],correct:2},{question:"How many games did they win last week?",options:["5","6","7","8"],correct:2},{question:"Where does her best friend live?",options:["Rio de Janeiro","São Paulo","Belo Horizonte","Brasília"],correct:1}]},{id:"gaming-03",title:"My Favorite Game Genres",description:"Different types of games and their characteristics",duration:"40s",icon:"🕹️",audioFile:"audio/a1-gaming/audio-03-game-genres.mp3",questions:[{question:"What is her favorite game genre?",options:["FPS","RPG","Strategy","Racing"],correct:1},{question:"Which RPG is her favorite?",options:["Skyrim","Final Fantasy","The Witcher 3","Dark Souls"],correct:2},{question:"How many hours did she play her favorite RPG?",options:["50 hours","75 hours","100 hours","150 hours"],correct:2},{question:"Why doesn't she like horror games?",options:["Bad graphics","Too expensive","Too scary","Boring story"],correct:2},{question:"Where does she find indie games?",options:["PlayStation Store","Steam","Epic Games","Xbox Store"],correct:1}]},{id:"gaming-04",title:"Esports Tournament",description:"Professional gaming competitions and events",duration:"39s",icon:"🏆",audioFile:"audio/a1-gaming/audio-04-esports-tournament.mp3",questions:[{question:"What game is the tournament for?",options:["Valorant","Counter-Strike","League of Legends","FIFA"],correct:2},{question:"How many teams are participating?",options:["16","24","32","64"],correct:2},{question:"How much is the entry fee per player?",options:["25 reais","50 reais","75 reais","100 reais"],correct:1},{question:"How much does first place win?",options:["3,000 reais","4,000 reais","5,000 reais","6,000 reais"],correct:2},{question:"How many hours do they practice daily?",options:["2 hours","3 hours","4 hours","5 hours"],correct:2}]},{id:"gaming-05",title:"Streaming on Twitch",description:"Broadcasting gameplay and building audience",duration:"37s",icon:"📺",audioFile:"audio/a1-gaming/audio-05-streaming-twitch.mp3",questions:[{question:"How many followers does she have on Twitch?",options:["650","750","850","950"],correct:2},{question:"Which days does she stream?",options:["Monday and Wednesday","Tuesday and Thursday","Friday and Saturday","Sunday and Monday"],correct:1},{question:"What time does she start streaming?",options:["7 PM","8 PM","9 PM","10 PM"],correct:1},{question:"How many viewers was her personal record?",options:["150","200","250","300"],correct:1},{question:"What type of microphone does she use?",options:["Red microphone","Black microphone","Blue microphone","Silver microphone"],correct:2}]},{id:"gaming-06",title:"Game Review Channel",description:"Analyzing and rating video games",duration:"41s",icon:"⭐",audioFile:"audio/a1-gaming/audio-06-game-reviews.mp3",questions:[{question:"What score did she give FIFA?",options:["6 out of 10","7 out of 10","8 out of 10","9 out of 10"],correct:1},{question:"What problem did she find with FIFA?",options:["Bad graphics","Slow gameplay","Too many bugs","Expensive price"],correct:2},{question:"How many hours did she play before reviewing?",options:["20 hours","25 hours","30 hours","35 hours"],correct:2},{question:"How many views did her video get on the first day?",options:["3,000","4,000","5,000","6,000"],correct:2},{question:"What type of game will she review next week?",options:["Racing game","Sports game","Horror game","Puzzle game"],correct:2}]},{id:"gaming-07",title:"Mobile Gaming Addiction",description:"Gaming on smartphones and tablets",duration:"35s",icon:"📱",audioFile:"audio/a1-gaming/audio-07-mobile-gaming.mp3",questions:[{question:"Which mobile game does she play?",options:["Free Fire","PUBG Mobile","Call of Duty Mobile","Fortnite Mobile"],correct:1},{question:"How many hours does she play daily?",options:["1 hour","2 hours","3 hours","4 hours"],correct:1},{question:"How much money has she spent this year?",options:["100 reais","150 reais","200 reais","250 reais"],correct:2},{question:"How many players are in Battle Royale mode?",options:["50","75","100","150"],correct:2},{question:"What happens to her phone during intensive games?",options:["Gets slow","Gets hot","Loses battery","Crashes"],correct:1}]},{id:"gaming-08",title:"Gaming Nostalgia",description:"Classic games and retro gaming culture",duration:"42s",icon:"🕰️",audioFile:"audio/a1-gaming/audio-08-gaming-nostalgia.mp3",questions:[{question:"What was her first gaming console?",options:["Nintendo 64","PlayStation 1","Sega Genesis","Game Boy"],correct:1},{question:"How old was she when she got her first console?",options:["6 years old","7 years old","8 years old","9 years old"],correct:2},{question:"Which classic game does she mention?",options:["Super Mario","Sonic","Crash Bandicoot","Street Fighter"],correct:2},{question:"How often did they take turns with the controller?",options:["Every 15 minutes","Every 30 minutes","Every 45 minutes","Every hour"],correct:1},{question:"What does she use to play old games now?",options:["Original consoles","Remasters","Emulators","Mobile apps"],correct:2}]},{id:"gaming-09",title:"Perfect Gaming Setup",description:"Creating the ideal gaming environment",duration:"44s",icon:"🛠️",audioFile:"audio/a1-gaming/audio-09-perfect-setup.mp3",questions:[{question:"Where is her gaming room located?",options:["Bedroom","Living room","Basement","Attic"],correct:2},{question:"What color are the walls painted?",options:["White","Blue","Red","Black"],correct:3},{question:"How many monitors fit on her desk?",options:["2","3","4","5"],correct:1},{question:"How much did her gaming chair cost?",options:["1,500 reais","2,000 reais","2,500 reais","3,000 reais"],correct:2},{question:"How often does she upgrade her setup?",options:["Every year","Every two years","Every three years","Every five years"],correct:1}]},{id:"gaming-10",title:"Virtual Reality Future",description:"VR technology and immersive gaming experiences",duration:"40s",icon:"🥽",audioFile:"audio/a1-gaming/audio-10-virtual-reality.mp3",questions:[{question:"Which VR headset did she try?",options:["PlayStation VR","Oculus Quest 2","HTC Vive","Valve Index"],correct:1},{question:"How much do VR headsets cost in Brazil?",options:["2,000 reais","2,500 reais","3,000 reais","3,500 reais"],correct:2},{question:"In how many years does she think VR will be more accessible?",options:["3 years","4 years","5 years","6 years"],correct:2},{question:"What is still a problem with VR for some people?",options:["High price","Motion sickness","Heavy weight","Bad graphics"],correct:1},{question:"When is she planning to buy her own VR headset?",options:["This year","Next year","In 2 years","In 3 years"],correct:1}]}];function rP({user:t,onBack:e}){const[n,r]=H.useState("selection"),[s,i]=H.useState(null),[o,l]=H.useState([]),[u,d]=H.useState(0),[m,y]=H.useState("Listen to Audio"),[v,b]=H.useState(!1),[R,P]=H.useState(!1),[D,I]=H.useState({}),[E,x]=H.useState(1),[N,V]=H.useState(null),[O,w]=H.useState(null),[p,_]=H.useState("🔥 Loading Firebase..."),[S,k]=H.useState(!0),A=H.useRef(null);H.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){_("❌ User not found"),k(!1);return}try{_("🔥 Connecting to Firebase...");const $=Nt(It,"students",t.username,"progress","gaming"),K=await qt($);if(K.exists()){const Z=K.data();I(Z.lessons||{}),w({totalXP:Z.totalXP||0,completedLessons:Object.keys(Z.lessons||{}).length,lastAccess:new Date().toISOString()}),_("✅ Firebase: Gaming progress loaded")}else I({}),w({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),_("✅ Firebase: New gamer initialized");k(!1)}catch($){console.error("Firebase Error:",$),_("❌ Firebase connection failed"),k(!1),I({"gaming-01":{status:"completed",score:5,attempts:1},"gaming-02":{status:"completed",score:4,attempts:1}})}})()},[t]);const T=async(U,$,K=1)=>{if(t!=null&&t.username)try{const Z=$*10+($===5?25:0),De=Date.now(),Me={lessonId:U,score:$,attempts:K,xpEarned:Z,completedAt:De,status:"completed",series:"gaming"};I($e=>({...$e,[U]:Me}));const mn=Nt(It,"students",t.username,"progress","gaming"),pn=await qt(mn);let Et={lessons:{[U]:Me},totalXP:Z,lastUpdated:De,series:"gaming"};if(pn.exists()){const $e=pn.data();Et={...$e,lessons:{...$e.lessons,[U]:Me},totalXP:($e.totalXP||0)+Z,lastUpdated:De}}await cu(mn,Et,{merge:!0}),w($e=>({...$e,totalXP:Et.totalXP,completedLessons:Object.keys(Et.lessons).length})),Object.keys(Et.lessons).length===10&&console.log("🏆 GAMING WORLD COMPLETE! Game Master Achievement Unlocked!"),console.log("✅ Firebase Gaming Save Success:",{lessonId:U,score:$,xpEarned:Z})}catch(Z){console.error("❌ Firebase Gaming Save Error:",Z)}},ke=()=>{A.current&&(A.current.paused?(A.current.play(),d(Math.max(u,20))):A.current.pause())},tt=()=>{A.current&&(A.current.currentTime=Math.max(0,A.current.currentTime-10))},nt=()=>{A.current&&(A.current.currentTime=Math.min(A.current.duration,A.current.currentTime+10))},Oe=U=>{x(U),A.current&&(A.current.playbackRate=U)},z=U=>{const $=os.find(K=>K.id===U);$&&(i($),l(new Array($.questions.length).fill(null)),d(0),y("Listen to Audio"),r("lesson"),V(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},Q=(U,$)=>{const K=[...o];K[U]=$,l(K);const Z=K.filter(Me=>Me!==null).length,De=20+Z/s.questions.length*80;d(De),y(`${Z}/5 Questions Answered`)},Y=async()=>{const U=o.reduce((Z,De,Me)=>Z+(De===s.questions[Me].correct?1:0),0),$=D[s.id],K=$?$.attempts+1:1;await T(s.id,U,K),console.log(`✅ Gaming Lesson ${s.id} saved to Firebase! Score: ${U}/5, Attempts: ${K}`),b(!0)},de=()=>{const U=os.findIndex(K=>K.id===s.id),$=os[U+1];b(!1),$?z($.id):(r("selection"),alert("🎉 Congratulations! Gaming World Complete! 🎮 Game Master Achievement Unlocked!"))},oe=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},me=()=>{s&&(b(!1),l(new Array(s.questions.length).fill(null)),V(Date.now()),d(0),y("Listen to Audio"),A.current&&(A.current.currentTime=0,A.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},ge=U=>{const $=D[U];return $?{status:"Completed",class:"status-completed",score:$.score,attempts:$.attempts,xpEarned:$.xpEarned}:{status:"Available",class:"status-not-started"}},ze=o.filter(U=>U!==null).length,Ne=ze===(s==null?void 0:s.questions.length);return S?h.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-6xl mb-4"},"🎮"),h.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),h.createElement("p",{className:"text-gray-600"},"Loading your Gaming World progress"))):n==="selection"?h.createElement("div",{className:"sophisticated-bg min-h-screen"},h.createElement("div",{className:"gaming-header"},h.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},h.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),h.createElement("div",{className:"text-center mt-6"},h.createElement("div",{className:"text-5xl mb-4"},"🎮"),h.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"Gaming World"),h.createElement("p",{className:"text-blue-100 mb-4"},"Learn English through gaming vocabulary and Brazilian gaming culture"),h.createElement("div",{className:"gaming-accent-card rounded-lg p-3"},h.createElement("p",{className:"text-white font-medium"},"🎯 Questions match audio content • 🏆 Esports • 🎧 Gaming English!"))))),h.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},h.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},h.createElement("div",{className:"text-sm"},h.createElement("span",{className:"text-primary-blue font-medium"},p),O&&h.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Gaming XP: ",O.totalXP," • Lessons: ",O.completedLessons,"/10")))),h.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},h.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},os.map((U,$)=>{const K=ge(U.id);return h.createElement("div",{key:U.id,className:"lesson-card gaming-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>z(U.id)},h.createElement("div",{className:"flex items-center justify-between mb-3"},h.createElement("div",{className:"text-2xl"},U.icon),h.createElement("span",{className:`status-badge ${K.class}`},K.status)),h.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",$+1,": ",U.title),h.createElement("p",{className:"text-sm text-gray-600 mb-3"},U.description),h.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},h.createElement("span",null,"🎧 ",U.duration),h.createElement("span",{className:"font-semibold text-purple-600"},K.score?`✅ ${K.score}/5`:"+50 XP")),K.attempts>0&&h.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",K.attempts," • Score: ",K.score||0,"/5 • XP: ",K.xpEarned||0))}))),h.createElement("style",{jsx:!0},`
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
        `)):h.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},h.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},h.createElement("div",{className:"gaming-lesson-card rounded-xl p-6 mb-6"},h.createElement("div",{className:"flex items-center justify-between mb-4"},h.createElement("button",{onClick:oe,className:"text-purple-600 text-sm hover:underline"},"← Back to Gaming World"),h.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",os.findIndex(U=>U.id===s.id)+1," of ",os.length)),h.createElement("h2",{className:"text-2xl font-bold text-purple-600 mb-2"},s.title),h.createElement("p",{className:"text-gray-600 mb-4"},s.description),h.createElement("div",{className:"progress-card rounded-lg p-3"},h.createElement("div",{className:"flex justify-between text-sm mb-2"},h.createElement("span",null,"Lesson Progress"),h.createElement("span",null,m)),h.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},h.createElement("div",{className:"bg-purple-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),h.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},h.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🎮 Listen to the Gaming Audio"),h.createElement("audio",{ref:A,src:s.audioFile,onLoadedData:()=>{console.log("✅ Gaming Audio loaded:",s.audioFile),A.current&&(A.current.playbackRate=E)},onError:U=>{console.error("❌ Gaming Audio error:",U.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{A.current&&A.current.duration>0&&A.current.currentTime/A.current.duration*100>10&&d(Math.max(u,20))},className:"hidden"}),h.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},h.createElement("button",{onClick:tt,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),h.createElement("button",{onClick:ke,className:"btn-audio bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},"▶️ Play/Pause"),h.createElement("button",{onClick:nt,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),h.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},h.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(U=>h.createElement("button",{key:U,onClick:()=>Oe(U),className:`px-3 py-1 rounded ${E===U?"bg-purple-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},U,"x"))),h.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🎮 Listen to gaming content and then answer the questions below")),h.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((U,$)=>h.createElement("div",{key:$,className:"question-card rounded-xl p-6"},h.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},$+1,". ",U.question),h.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},U.options.map((K,Z)=>h.createElement("button",{key:Z,onClick:()=>Q($,Z),className:`p-3 rounded-lg text-left transition-all ${o[$]===Z?"bg-purple-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+Z),". ",K)))))),h.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},h.createElement("button",{onClick:Y,disabled:!Ne,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${Ne?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},Ne?"🔥 Save Gaming Progress - Ready! 🎮":`Submit Answers (${ze}/5 Complete)`),h.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Questions now match the gaming audio content!"))),v&&h.createElement(sP,{lesson:s,userAnswers:o,onNext:de,onReview:()=>P(!0),onClose:()=>b(!1),onRestart:me}),R&&h.createElement(iP,{lesson:s,userAnswers:o,onClose:()=>P(!1)}),h.createElement("style",{jsx:!0},`
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
      `))}function sP({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((m,y,v)=>m+(y===t.questions[v].correct?1:0),0),l=Math.round(o/5*100),u=o*10+(o===5?25:0),d=o===5;return h.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},h.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},h.createElement("div",{className:"text-center"},h.createElement("div",{className:"text-5xl mb-4"},d?"🏆":o>=4?"🎮":"📝"),h.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},d?"Perfect Gaming Score!":o>=4?"Great Gaming!":"Lesson Complete!"),h.createElement("div",{className:"bg-purple-50 rounded-lg p-4 mb-4"},h.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),h.createElement("div",{className:"text-lg text-gray-600 mb-2"},l,"% Correct"),h.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," Gaming XP Earned!")),d&&h.createElement("div",{className:"bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-3 mb-4"},h.createElement("div",{className:"text-sm font-semibold text-purple-700 mb-2"},"🎉 Achievement Unlocked!"),h.createElement("div",{className:"font-medium"},"🎮 Perfect Gaming Score!")),h.createElement("div",{className:"space-y-3"},h.createElement("button",{onClick:r,className:"w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&h.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),h.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Gaming Lesson →"),h.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Gaming World")))))}function iP({lesson:t,userAnswers:e,onClose:n}){return h.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},h.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},h.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"📝 Answer Review"),h.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,l=r.options[r.correct],u=r.options[i];return h.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},h.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),h.createElement("div",{className:"space-y-1"},h.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&h.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",l)))})),h.createElement("button",{onClick:n,className:"w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}function oP(){const[t,e]=H.useState("login"),[n,r]=H.useState(null);H.useEffect(()=>{const u=localStorage.getItem("studentAuth"),d=localStorage.getItem("teacherAuth");if(u){const m=JSON.parse(u);m.isAuthenticated&&(r(m),e("portal"))}else if(d){const m=JSON.parse(d);m.isAuthenticated&&(r(m),e("teacher-dashboard"))}},[]);const s=u=>{e(u)},i=(u,d)=>{r(u),d==="student"?(localStorage.setItem("studentAuth",JSON.stringify({...u,isAuthenticated:!0,loginTime:new Date().toISOString()})),e("portal")):d==="teacher"&&(localStorage.setItem("teacherAuth",JSON.stringify({...u,isAuthenticated:!0,loginTime:new Date().toISOString()})),e("teacher-dashboard"))},o=()=>{localStorage.removeItem("studentAuth"),localStorage.removeItem("teacherAuth"),r(null),e("login")},l=()=>{switch(t){case"login":return h.createElement(Rg,{onLogin:i,onNavigate:s});case"portal":return h.createElement(Yb,{user:n,onLogout:o,onNavigate:s});case"hub":return h.createElement(Jb,{user:n,onLogout:o,onNavigate:s});case"foundation-lessons":return h.createElement(eP,{user:n,onBack:()=>e("hub")});case"gaming-lessons":return h.createElement(rP,{user:n,onBack:()=>e("hub")});case"teacher-dashboard":return h.createElement(Zb,{user:n,onLogout:o,onNavigate:s});default:return h.createElement(Rg,{onLogin:i,onNavigate:s})}};return h.createElement("div",{className:"App"},l())}fc.createRoot(document.getElementById("root")).render(h.createElement(h.StrictMode,null,h.createElement(oP,null)));
