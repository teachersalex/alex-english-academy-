(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ow(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fg={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),Vw=Symbol.for("react.portal"),Fw=Symbol.for("react.fragment"),Uw=Symbol.for("react.strict_mode"),qw=Symbol.for("react.profiler"),Bw=Symbol.for("react.provider"),jw=Symbol.for("react.context"),zw=Symbol.for("react.forward_ref"),Hw=Symbol.for("react.suspense"),Ww=Symbol.for("react.memo"),$w=Symbol.for("react.lazy"),gf=Symbol.iterator;function Gw(t){return t===null||typeof t!="object"?null:(t=gf&&t[gf]||t["@@iterator"],typeof t=="function"?t:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qg=Object.assign,Bg={};function ii(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||Ug}ii.prototype.isReactComponent={};ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jg(){}jg.prototype=ii.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||Ug}var Ud=Fd.prototype=new jg;Ud.constructor=Fd;qg(Ud,ii.prototype);Ud.isPureReactComponent=!0;var yf=Array.isArray,zg=Object.prototype.hasOwnProperty,qd={current:null},Hg={key:!0,ref:!0,__self:!0,__source:!0};function Wg(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)zg.call(e,r)&&!Hg.hasOwnProperty(r)&&(s[r]=e[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var u=Array(c),h=0;h<c;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:Lo,type:t,key:i,ref:o,props:s,_owner:qd.current}}function Kw(t,e){return{$$typeof:Lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lo}function Xw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vf=/\/+/g;function Uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xw(""+t.key):e.toString(36)}function Ma(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lo:case Vw:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Uc(o,0):r,yf(s)?(n="",t!=null&&(n=t.replace(vf,"$&/")+"/"),Ma(s,e,n,"",function(h){return h})):s!=null&&(Bd(s)&&(s=Kw(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(vf,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",yf(t))for(var c=0;c<t.length;c++){i=t[c];var u=r+Uc(i,c);o+=Ma(i,e,n,u,s)}else if(u=Gw(t),typeof u=="function")for(t=u.call(t),c=0;!(i=t.next()).done;)i=i.value,u=r+Uc(i,c++),o+=Ma(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ha(t,e,n){if(t==null)return t;var r=[],s=0;return Ma(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Qw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Oa={transition:null},Yw={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Oa,ReactCurrentOwner:qd};function $g(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:ha,forEach:function(t,e,n){ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ha(t,function(){e++}),e},toArray:function(t){return ha(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=ii;pe.Fragment=Fw;pe.Profiler=qw;pe.PureComponent=Fd;pe.StrictMode=Uw;pe.Suspense=Hw;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yw;pe.act=$g;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qg({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=qd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(u in e)zg.call(e,u)&&!Hg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&c!==void 0?c[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var h=0;h<u;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:Lo,type:t.type,key:s,ref:i,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:jw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bw,_context:t},t.Consumer=t};pe.createElement=Wg;pe.createFactory=function(t){var e=Wg.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:zw,render:t}};pe.isValidElement=Bd;pe.lazy=function(t){return{$$typeof:$w,_payload:{_status:-1,_result:t},_init:Qw}};pe.memo=function(t,e){return{$$typeof:Ww,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Oa.transition;Oa.transition={};try{t()}finally{Oa.transition=e}};pe.unstable_act=$g;pe.useCallback=function(t,e){return It.current.useCallback(t,e)};pe.useContext=function(t){return It.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return It.current.useDeferredValue(t)};pe.useEffect=function(t,e){return It.current.useEffect(t,e)};pe.useId=function(){return It.current.useId()};pe.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return It.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};pe.useRef=function(t){return It.current.useRef(t)};pe.useState=function(t){return It.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return It.current.useTransition()};pe.version="18.3.1";Fg.exports=pe;var U=Fg.exports;const l=Ow(U);var bu={},Gg={exports:{}},Bt={},Kg={exports:{}},Xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var te=$.length;$.push(Y);e:for(;0<te;){var he=te-1>>>1,ce=$[he];if(0<s(ce,Y))$[he]=Y,$[te]=ce,te=he;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],te=$.pop();if(te!==Y){$[0]=te;e:for(var he=0,ce=$.length,ye=ce>>>1;he<ye;){var me=2*(he+1)-1,Ie=$[me],Te=me+1,D=$[Te];if(0>s(Ie,te))Te<ce&&0>s(D,Ie)?($[he]=D,$[Te]=te,he=Te):($[he]=Ie,$[me]=te,he=me);else if(Te<ce&&0>s(D,te))$[he]=D,$[Te]=te,he=Te;else break e}}return Y}function s($,Y){var te=$.sortIndex-Y.sortIndex;return te!==0?te:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,c=o.now();t.unstable_now=function(){return o.now()-c}}var u=[],h=[],f=1,g=null,E=3,I=!1,P=!1,L=!1,M=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=$)r(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(h)}}function R($){if(L=!1,k($),!P)if(n(u)!==null)P=!0,B(V);else{var Y=n(h);Y!==null&&Se(R,Y.startTime-$)}}function V($,Y){P=!1,L&&(L=!1,x(p),p=-1),I=!0;var te=E;try{for(k(Y),g=n(u);g!==null&&(!(g.expirationTime>Y)||$&&!N());){var he=g.callback;if(typeof he=="function"){g.callback=null,E=g.priorityLevel;var ce=he(g.expirationTime<=Y);Y=t.unstable_now(),typeof ce=="function"?g.callback=ce:g===n(u)&&r(u),k(Y)}else r(u);g=n(u)}if(g!==null)var ye=!0;else{var me=n(h);me!==null&&Se(R,me.startTime-Y),ye=!1}return ye}finally{g=null,E=te,I=!1}}var q=!1,_=null,p=-1,v=5,T=-1;function N(){return!(t.unstable_now()-T<v)}function S(){if(_!==null){var $=t.unstable_now();T=$;var Y=!0;try{Y=_(!0,$)}finally{Y?b():(q=!1,_=null)}}else q=!1}var b;if(typeof w=="function")b=function(){w(S)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,de=oe.port2;oe.port1.onmessage=S,b=function(){de.postMessage(null)}}else b=function(){M(S,0)};function B($){_=$,q||(q=!0,b())}function Se($,Y){p=M(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||I||(P=!0,B(V))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(E){case 1:case 2:case 3:var Y=3;break;default:Y=E}var te=E;E=Y;try{return $()}finally{E=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var te=E;E=$;try{return Y()}finally{E=te}},t.unstable_scheduleCallback=function($,Y,te){var he=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?he+te:he):te=he,$){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=te+ce,$={id:f++,callback:Y,priorityLevel:$,startTime:te,expirationTime:ce,sortIndex:-1},te>he?($.sortIndex=te,e(h,$),n(u)===null&&$===n(h)&&(L?(x(p),p=-1):L=!0,Se(R,te-he))):($.sortIndex=ce,e(u,$),P||I||(P=!0,B(V))),$},t.unstable_shouldYield=N,t.unstable_wrapCallback=function($){var Y=E;return function(){var te=E;E=Y;try{return $.apply(this,arguments)}finally{E=te}}}})(Xg);Kg.exports=Xg;var Jw=Kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zw=U,qt=Jw;function G(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qg=new Set,oo={};function ns(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(oo[t]=e,t=0;t<e.length;t++)Qg.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=Object.prototype.hasOwnProperty,e_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ef={},wf={};function t_(t){return xu.call(wf,t)?!0:xu.call(Ef,t)?!1:e_.test(t)?wf[t]=!0:(Ef[t]=!0,!1)}function n_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function r_(t,e,n,r){if(e===null||typeof e>"u"||n_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jd,zd);dt[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jd,zd);dt[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jd,zd);dt[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,r){var s=dt.hasOwnProperty(e)?dt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(r_(e,n,s,r)&&(n=null),r||s===null?t_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=Zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),_s=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),Gd=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),_f=Symbol.iterator;function Ni(t){return t===null||typeof t!="object"?null:(t=_f&&t[_f]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Object.assign,qc;function Oi(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var Bc=!1;function jc(t,e){if(!t||Bc)return"";Bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,c=i.length-1;1<=o&&0<=c&&s[o]!==i[c];)c--;for(;1<=o&&0<=c;o--,c--)if(s[o]!==i[c]){if(o!==1||c!==1)do if(o--,c--,0>c||s[o]!==i[c]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=c);break}}}finally{Bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oi(t):""}function s_(t){switch(t.tag){case 5:return Oi(t.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 2:case 15:return t=jc(t.type,!1),t;case 11:return t=jc(t.type.render,!1),t;case 1:return t=jc(t.type,!0),t;default:return""}}function Nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case _s:return"Portal";case Tu:return"Profiler";case Wd:return"StrictMode";case Su:return"Suspense";case ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jg:return(t.displayName||"Context")+".Consumer";case Yg:return(t._context.displayName||"Context")+".Provider";case $d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gd:return e=t.displayName||null,e!==null?e:Nu(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return Nu(t(e))}catch{}}return null}function i_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ey(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o_(t){var e=ey(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=o_(t))}function ty(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ey(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Iu(t,e){var n=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ny(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function Au(t,e){ny(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pu(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pu(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vi=Array.isArray;function Ds(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(G(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(G(92));if(Vi(n)){if(1<n.length)throw Error(G(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function ry(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ru(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pa,iy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a_=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(t){a_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$i[e]=$i[t]})});function oy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$i.hasOwnProperty(t)&&$i[t]?(""+e).trim():e+"px"}function ay(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=oy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var l_=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lu(t,e){if(e){if(l_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(G(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(G(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(G(61))}if(e.style!=null&&typeof e.style!="object")throw Error(G(62))}}function Du(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mu=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,Ms=null,Os=null;function kf(t){if(t=Oo(t)){if(typeof Ou!="function")throw Error(G(280));var e=t.stateNode;e&&(e=Gl(e),Ou(t.stateNode,t.type,e))}}function ly(t){Ms?Os?Os.push(t):Os=[t]:Ms=t}function cy(){if(Ms){var t=Ms,e=Os;if(Os=Ms=null,kf(t),e)for(t=0;t<e.length;t++)kf(e[t])}}function uy(t,e){return t(e)}function dy(){}var zc=!1;function hy(t,e,n){if(zc)return t(e,n);zc=!0;try{return uy(t,e,n)}finally{zc=!1,(Ms!==null||Os!==null)&&(dy(),cy())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(G(231,e,typeof n));return n}var Vu=!1;if(Mn)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Vu=!1}function c_(t,e,n,r,s,i,o,c,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Gi=!1,rl=null,sl=!1,Fu=null,u_={onError:function(t){Gi=!0,rl=t}};function d_(t,e,n,r,s,i,o,c,u){Gi=!1,rl=null,c_.apply(u_,arguments)}function h_(t,e,n,r,s,i,o,c,u){if(d_.apply(this,arguments),Gi){if(Gi){var h=rl;Gi=!1,rl=null}else throw Error(G(198));sl||(sl=!0,Fu=h)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function my(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nf(t){if(rs(t)!==t)throw Error(G(188))}function m_(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(G(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Nf(s),t;if(i===r)return Nf(s),e;i=i.sibling}throw Error(G(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,c=s.child;c;){if(c===n){o=!0,n=s,r=i;break}if(c===r){o=!0,r=s,n=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===n){o=!0,n=i,r=s;break}if(c===r){o=!0,r=i,n=s;break}c=c.sibling}if(!o)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?t:e}function fy(t){return t=m_(t),t!==null?py(t):null}function py(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=py(t);if(e!==null)return e;t=t.sibling}return null}var gy=qt.unstable_scheduleCallback,If=qt.unstable_cancelCallback,f_=qt.unstable_shouldYield,p_=qt.unstable_requestPaint,$e=qt.unstable_now,g_=qt.unstable_getCurrentPriorityLevel,Xd=qt.unstable_ImmediatePriority,yy=qt.unstable_UserBlockingPriority,il=qt.unstable_NormalPriority,y_=qt.unstable_LowPriority,vy=qt.unstable_IdlePriority,zl=null,fn=null;function v_(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(zl,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:__,E_=Math.log,w_=Math.LN2;function __(t){return t>>>=0,t===0?32:31-(E_(t)/w_|0)|0}var ga=64,ya=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var c=o&~s;c!==0?r=Fi(c):(i&=o,i!==0&&(r=Fi(i)))}else o=n&~s,o!==0?r=Fi(o):i!==0&&(r=Fi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),s=1<<n,r|=t[n],e&=~s;return r}function b_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-on(i),c=1<<o,u=s[o];u===-1?(!(c&n)||c&r)&&(s[o]=b_(c,e)):u<=e&&(t.expiredLanes|=c),i&=~c}}function Uu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ey(){var t=ga;return ga<<=1,!(ga&4194240)&&(ga=64),t}function Hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Do(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function T_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-on(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ke=0;function wy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _y,Yd,by,xy,Ty,qu=!1,va=[],ar=null,lr=null,cr=null,co=new Map,uo=new Map,Jn=[],S_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Af(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function Ai(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Oo(e),e!==null&&Yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function k_(t,e,n,r,s){switch(e){case"focusin":return ar=Ai(ar,t,e,n,r,s),!0;case"dragenter":return lr=Ai(lr,t,e,n,r,s),!0;case"mouseover":return cr=Ai(cr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return co.set(i,Ai(co.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,uo.set(i,Ai(uo.get(i)||null,t,e,n,r,s)),!0}return!1}function Sy(t){var e=Vr(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=my(n),e!==null){t.blockedOn=e,Ty(t.priority,function(){by(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Mu=r,n.target.dispatchEvent(r),Mu=null}else return e=Oo(n),e!==null&&Yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Pf(t,e,n){Va(t)&&n.delete(e)}function N_(){qu=!1,ar!==null&&Va(ar)&&(ar=null),lr!==null&&Va(lr)&&(lr=null),cr!==null&&Va(cr)&&(cr=null),co.forEach(Pf),uo.forEach(Pf)}function Pi(t,e){t.blockedOn===e&&(t.blockedOn=null,qu||(qu=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,N_)))}function ho(t){function e(s){return Pi(s,t)}if(0<va.length){Pi(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ar!==null&&Pi(ar,t),lr!==null&&Pi(lr,t),cr!==null&&Pi(cr,t),co.forEach(e),uo.forEach(e),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)Sy(n),n.blockedOn===null&&Jn.shift()}var Vs=zn.ReactCurrentBatchConfig,al=!0;function I_(t,e,n,r){var s=ke,i=Vs.transition;Vs.transition=null;try{ke=1,Jd(t,e,n,r)}finally{ke=s,Vs.transition=i}}function A_(t,e,n,r){var s=ke,i=Vs.transition;Vs.transition=null;try{ke=4,Jd(t,e,n,r)}finally{ke=s,Vs.transition=i}}function Jd(t,e,n,r){if(al){var s=Bu(t,e,n,r);if(s===null)eu(t,e,r,ll,n),Af(t,r);else if(k_(s,t,e,n,r))r.stopPropagation();else if(Af(t,r),e&4&&-1<S_.indexOf(t)){for(;s!==null;){var i=Oo(s);if(i!==null&&_y(i),i=Bu(t,e,n,r),i===null&&eu(t,e,r,ll,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else eu(t,e,r,null,n)}}var ll=null;function Bu(t,e,n,r){if(ll=null,t=Kd(r),t=Vr(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=my(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function ky(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g_()){case Xd:return 1;case yy:return 4;case il:case y_:return 16;case vy:return 536870912;default:return 16}default:return 16}}var sr=null,Zd=null,Fa=null;function Ny(){if(Fa)return Fa;var t,e=Zd,n=e.length,r,s="value"in sr?sr.value:sr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Fa=s.slice(t,1<r?1-r:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function Cf(){return!1}function jt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ea:Cf,this.isPropagationStopped=Cf,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=jt(oi),Mo=qe({},oi,{view:0,detail:0}),P_=jt(Mo),Wc,$c,Ci,Hl=qe({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ci&&(Ci&&t.type==="mousemove"?(Wc=t.screenX-Ci.screenX,$c=t.screenY-Ci.screenY):$c=Wc=0,Ci=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Rf=jt(Hl),C_=qe({},Hl,{dataTransfer:0}),R_=jt(C_),L_=qe({},Mo,{relatedTarget:0}),Gc=jt(L_),D_=qe({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),M_=jt(D_),O_=qe({},oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V_=jt(O_),F_=qe({},oi,{data:0}),Lf=jt(F_),U_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B_[t])?!!e[t]:!1}function th(){return j_}var z_=qe({},Mo,{key:function(t){if(t.key){var e=U_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?q_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H_=jt(z_),W_=qe({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=jt(W_),$_=qe({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),G_=jt($_),K_=qe({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),X_=jt(K_),Q_=qe({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=jt(Q_),J_=[9,13,27,32],nh=Mn&&"CompositionEvent"in window,Ki=null;Mn&&"documentMode"in document&&(Ki=document.documentMode);var Z_=Mn&&"TextEvent"in window&&!Ki,Iy=Mn&&(!nh||Ki&&8<Ki&&11>=Ki),Mf=" ",Of=!1;function Ay(t,e){switch(t){case"keyup":return J_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Py(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function eb(t,e){switch(t){case"compositionend":return Py(e);case"keypress":return e.which!==32?null:(Of=!0,Mf);case"textInput":return t=e.data,t===Mf&&Of?null:t;default:return null}}function tb(t,e){if(xs)return t==="compositionend"||!nh&&Ay(t,e)?(t=Ny(),Fa=Zd=sr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iy&&e.locale!=="ko"?null:e.data;default:return null}}var nb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nb[t.type]:e==="textarea"}function Cy(t,e,n,r){ly(r),e=cl(e,"onChange"),0<e.length&&(n=new eh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xi=null,mo=null;function rb(t){jy(t,0)}function Wl(t){var e=ks(t);if(ty(e))return t}function sb(t,e){if(t==="change")return e}var Ry=!1;if(Mn){var Kc;if(Mn){var Xc="oninput"in document;if(!Xc){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),Xc=typeof Ff.oninput=="function"}Kc=Xc}else Kc=!1;Ry=Kc&&(!document.documentMode||9<document.documentMode)}function Uf(){Xi&&(Xi.detachEvent("onpropertychange",Ly),mo=Xi=null)}function Ly(t){if(t.propertyName==="value"&&Wl(mo)){var e=[];Cy(e,mo,t,Kd(t)),hy(rb,e)}}function ib(t,e,n){t==="focusin"?(Uf(),Xi=e,mo=n,Xi.attachEvent("onpropertychange",Ly)):t==="focusout"&&Uf()}function ob(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(mo)}function ab(t,e){if(t==="click")return Wl(e)}function lb(t,e){if(t==="input"||t==="change")return Wl(e)}function cb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:cb;function fo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!xu.call(e,s)||!ln(t[s],e[s]))return!1}return!0}function qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bf(t,e){var n=qf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qf(n)}}function Dy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function My(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ub(t){var e=My(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dy(n.ownerDocument.documentElement,n)){if(r!==null&&rh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Bf(n,i);var o=Bf(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var db=Mn&&"documentMode"in document&&11>=document.documentMode,Ts=null,ju=null,Qi=null,zu=!1;function jf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||Ts==null||Ts!==nl(r)||(r=Ts,"selectionStart"in r&&rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qi&&fo(Qi,r)||(Qi=r,r=cl(ju,"onSelect"),0<r.length&&(e=new eh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ts)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},Qc={},Oy={};Mn&&(Oy=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function $l(t){if(Qc[t])return Qc[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Oy)return Qc[t]=e[n];return t}var Vy=$l("animationend"),Fy=$l("animationiteration"),Uy=$l("animationstart"),qy=$l("transitionend"),By=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){By.set(t,e),ns(e,[t])}for(var Yc=0;Yc<zf.length;Yc++){var Jc=zf[Yc],hb=Jc.toLowerCase(),mb=Jc[0].toUpperCase()+Jc.slice(1);Tr(hb,"on"+mb)}Tr(Vy,"onAnimationEnd");Tr(Fy,"onAnimationIteration");Tr(Uy,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(qy,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Hf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,h_(r,e,void 0,t),t.currentTarget=null}function jy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var c=r[o],u=c.instance,h=c.currentTarget;if(c=c.listener,u!==i&&s.isPropagationStopped())break e;Hf(s,c,h),i=u}else for(o=0;o<r.length;o++){if(c=r[o],u=c.instance,h=c.currentTarget,c=c.listener,u!==i&&s.isPropagationStopped())break e;Hf(s,c,h),i=u}}}if(sl)throw t=Fu,sl=!1,Fu=null,t}function De(t,e){var n=e[Ku];n===void 0&&(n=e[Ku]=new Set);var r=t+"__bubble";n.has(r)||(zy(e,t,2,!1),n.add(r))}function Zc(t,e,n){var r=0;e&&(r|=4),zy(n,t,r,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[_a]){t[_a]=!0,Qg.forEach(function(n){n!=="selectionchange"&&(fb.has(n)||Zc(n,!1,t),Zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,Zc("selectionchange",!1,e))}}function zy(t,e,n,r){switch(ky(e)){case 1:var s=I_;break;case 4:s=A_;break;default:s=Jd}n=s.bind(null,e,n,t),s=void 0,!Vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function eu(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;c!==null;){if(o=Vr(c),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}c=c.parentNode}}r=r.return}hy(function(){var h=i,f=Kd(n),g=[];e:{var E=By.get(t);if(E!==void 0){var I=eh,P=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":I=H_;break;case"focusin":P="focus",I=Gc;break;case"focusout":P="blur",I=Gc;break;case"beforeblur":case"afterblur":I=Gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=G_;break;case Vy:case Fy:case Uy:I=M_;break;case qy:I=X_;break;case"scroll":I=P_;break;case"wheel":I=Y_;break;case"copy":case"cut":case"paste":I=V_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Df}var L=(e&4)!==0,M=!L&&t==="scroll",x=L?E!==null?E+"Capture":null:E;L=[];for(var w=h,k;w!==null;){k=w;var R=k.stateNode;if(k.tag===5&&R!==null&&(k=R,x!==null&&(R=lo(w,x),R!=null&&L.push(go(w,R,k)))),M)break;w=w.return}0<L.length&&(E=new I(E,P,null,n,f),g.push({event:E,listeners:L}))}}if(!(e&7)){e:{if(E=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",E&&n!==Mu&&(P=n.relatedTarget||n.fromElement)&&(Vr(P)||P[On]))break e;if((I||E)&&(E=f.window===f?f:(E=f.ownerDocument)?E.defaultView||E.parentWindow:window,I?(P=n.relatedTarget||n.toElement,I=h,P=P?Vr(P):null,P!==null&&(M=rs(P),P!==M||P.tag!==5&&P.tag!==6)&&(P=null)):(I=null,P=h),I!==P)){if(L=Rf,R="onMouseLeave",x="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(L=Df,R="onPointerLeave",x="onPointerEnter",w="pointer"),M=I==null?E:ks(I),k=P==null?E:ks(P),E=new L(R,w+"leave",I,n,f),E.target=M,E.relatedTarget=k,R=null,Vr(f)===h&&(L=new L(x,w+"enter",P,n,f),L.target=k,L.relatedTarget=M,R=L),M=R,I&&P)t:{for(L=I,x=P,w=0,k=L;k;k=ds(k))w++;for(k=0,R=x;R;R=ds(R))k++;for(;0<w-k;)L=ds(L),w--;for(;0<k-w;)x=ds(x),k--;for(;w--;){if(L===x||x!==null&&L===x.alternate)break t;L=ds(L),x=ds(x)}L=null}else L=null;I!==null&&Wf(g,E,I,L,!1),P!==null&&M!==null&&Wf(g,M,P,L,!0)}}e:{if(E=h?ks(h):window,I=E.nodeName&&E.nodeName.toLowerCase(),I==="select"||I==="input"&&E.type==="file")var V=sb;else if(Vf(E))if(Ry)V=lb;else{V=ob;var q=ib}else(I=E.nodeName)&&I.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(V=ab);if(V&&(V=V(t,h))){Cy(g,V,n,f);break e}q&&q(t,E,h),t==="focusout"&&(q=E._wrapperState)&&q.controlled&&E.type==="number"&&Pu(E,"number",E.value)}switch(q=h?ks(h):window,t){case"focusin":(Vf(q)||q.contentEditable==="true")&&(Ts=q,ju=h,Qi=null);break;case"focusout":Qi=ju=Ts=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,jf(g,n,f);break;case"selectionchange":if(db)break;case"keydown":case"keyup":jf(g,n,f)}var _;if(nh)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else xs?Ay(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Iy&&n.locale!=="ko"&&(xs||p!=="onCompositionStart"?p==="onCompositionEnd"&&xs&&(_=Ny()):(sr=f,Zd="value"in sr?sr.value:sr.textContent,xs=!0)),q=cl(h,p),0<q.length&&(p=new Lf(p,t,null,n,f),g.push({event:p,listeners:q}),_?p.data=_:(_=Py(n),_!==null&&(p.data=_)))),(_=Z_?eb(t,n):tb(t,n))&&(h=cl(h,"onBeforeInput"),0<h.length&&(f=new Lf("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=_))}jy(g,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=lo(t,n),i!=null&&r.unshift(go(t,i,s)),i=lo(t,e),i!=null&&r.push(go(t,i,s))),t=t.return}return r}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wf(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var c=n,u=c.alternate,h=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&h!==null&&(c=h,s?(u=lo(n,i),u!=null&&o.unshift(go(n,u,c))):s||(u=lo(n,i),u!=null&&o.push(go(n,u,c)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pb=/\r\n?/g,gb=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(pb,`
`).replace(gb,"")}function ba(t,e,n){if(e=$f(e),$f(t)!==e&&n)throw Error(G(425))}function ul(){}var Hu=null,Wu=null;function $u(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gu=typeof setTimeout=="function"?setTimeout:void 0,yb=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,vb=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf<"u"?function(t){return Gf.resolve(null).then(t).catch(Eb)}:Gu;function Eb(t){setTimeout(function(){throw t})}function tu(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ho(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ai=Math.random().toString(36).slice(2),hn="__reactFiber$"+ai,yo="__reactProps$"+ai,On="__reactContainer$"+ai,Ku="__reactEvents$"+ai,wb="__reactListeners$"+ai,_b="__reactHandles$"+ai;function Vr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[On]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kf(t);t!==null;){if(n=t[hn])return n;t=Kf(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[hn]||t[On],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(G(33))}function Gl(t){return t[yo]||null}var Xu=[],Ns=-1;function Sr(t){return{current:t}}function Me(t){0>Ns||(t.current=Xu[Ns],Xu[Ns]=null,Ns--)}function Pe(t,e){Ns++,Xu[Ns]=t.current,t.current=e}var wr={},bt=Sr(wr),Rt=Sr(!1),Hr=wr;function Ws(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Lt(t){return t=t.childContextTypes,t!=null}function dl(){Me(Rt),Me(bt)}function Xf(t,e,n){if(bt.current!==wr)throw Error(G(168));Pe(bt,e),Pe(Rt,n)}function Hy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(G(108,i_(t)||"Unknown",s));return qe({},n,r)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Hr=bt.current,Pe(bt,t),Pe(Rt,Rt.current),!0}function Qf(t,e,n){var r=t.stateNode;if(!r)throw Error(G(169));n?(t=Hy(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,Me(Rt),Me(bt),Pe(bt,t)):Me(Rt),Pe(Rt,n)}var Sn=null,Kl=!1,nu=!1;function Wy(t){Sn===null?Sn=[t]:Sn.push(t)}function bb(t){Kl=!0,Wy(t)}function kr(){if(!nu&&Sn!==null){nu=!0;var t=0,e=ke;try{var n=Sn;for(ke=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,Kl=!1}catch(s){throw Sn!==null&&(Sn=Sn.slice(t+1)),gy(Xd,kr),s}finally{ke=e,nu=!1}}return null}var Is=[],As=0,ml=null,fl=0,Ht=[],Wt=0,Wr=null,kn=1,Nn="";function Dr(t,e){Is[As++]=fl,Is[As++]=ml,ml=t,fl=e}function $y(t,e,n){Ht[Wt++]=kn,Ht[Wt++]=Nn,Ht[Wt++]=Wr,Wr=t;var r=kn;t=Nn;var s=32-on(r)-1;r&=~(1<<s),n+=1;var i=32-on(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,kn=1<<32-on(e)+s|n<<s|r,Nn=i+t}else kn=1<<i|n<<s|r,Nn=t}function sh(t){t.return!==null&&(Dr(t,1),$y(t,1,0))}function ih(t){for(;t===ml;)ml=Is[--As],Is[As]=null,fl=Is[--As],Is[As]=null;for(;t===Wr;)Wr=Ht[--Wt],Ht[Wt]=null,Nn=Ht[--Wt],Ht[Wt]=null,kn=Ht[--Wt],Ht[Wt]=null}var Ft=null,Vt=null,Oe=!1,rn=null;function Gy(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Vt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:kn,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Vt=null,!0):!1;default:return!1}}function Qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(Oe){var e=Vt;if(e){var n=e;if(!Yf(t,e)){if(Qu(t))throw Error(G(418));e=ur(n.nextSibling);var r=Ft;e&&Yf(t,e)?Gy(r,n):(t.flags=t.flags&-4097|2,Oe=!1,Ft=t)}}else{if(Qu(t))throw Error(G(418));t.flags=t.flags&-4097|2,Oe=!1,Ft=t}}}function Jf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function xa(t){if(t!==Ft)return!1;if(!Oe)return Jf(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$u(t.type,t.memoizedProps)),e&&(e=Vt)){if(Qu(t))throw Ky(),Error(G(418));for(;e;)Gy(t,e),e=ur(e.nextSibling)}if(Jf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(G(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Ft?ur(t.stateNode.nextSibling):null;return!0}function Ky(){for(var t=Vt;t;)t=ur(t.nextSibling)}function $s(){Vt=Ft=null,Oe=!1}function oh(t){rn===null?rn=[t]:rn.push(t)}var xb=zn.ReactCurrentBatchConfig;function Ri(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var c=s.refs;o===null?delete c[i]:c[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,t))}return t}function Ta(t,e){throw t=Object.prototype.toString.call(e),Error(G(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zf(t){var e=t._init;return e(t._payload)}function Xy(t){function e(x,w){if(t){var k=x.deletions;k===null?(x.deletions=[w],x.flags|=16):k.push(w)}}function n(x,w){if(!t)return null;for(;w!==null;)e(x,w),w=w.sibling;return null}function r(x,w){for(x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function s(x,w){return x=fr(x,w),x.index=0,x.sibling=null,x}function i(x,w,k){return x.index=k,t?(k=x.alternate,k!==null?(k=k.index,k<w?(x.flags|=2,w):k):(x.flags|=2,w)):(x.flags|=1048576,w)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function c(x,w,k,R){return w===null||w.tag!==6?(w=cu(k,x.mode,R),w.return=x,w):(w=s(w,k),w.return=x,w)}function u(x,w,k,R){var V=k.type;return V===bs?f(x,w,k.props.children,R,k.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Qn&&Zf(V)===w.type)?(R=s(w,k.props),R.ref=Ri(x,w,k),R.return=x,R):(R=$a(k.type,k.key,k.props,null,x.mode,R),R.ref=Ri(x,w,k),R.return=x,R)}function h(x,w,k,R){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=uu(k,x.mode,R),w.return=x,w):(w=s(w,k.children||[]),w.return=x,w)}function f(x,w,k,R,V){return w===null||w.tag!==7?(w=jr(k,x.mode,R,V),w.return=x,w):(w=s(w,k),w.return=x,w)}function g(x,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=cu(""+w,x.mode,k),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ma:return k=$a(w.type,w.key,w.props,null,x.mode,k),k.ref=Ri(x,null,w),k.return=x,k;case _s:return w=uu(w,x.mode,k),w.return=x,w;case Qn:var R=w._init;return g(x,R(w._payload),k)}if(Vi(w)||Ni(w))return w=jr(w,x.mode,k,null),w.return=x,w;Ta(x,w)}return null}function E(x,w,k,R){var V=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return V!==null?null:c(x,w,""+k,R);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ma:return k.key===V?u(x,w,k,R):null;case _s:return k.key===V?h(x,w,k,R):null;case Qn:return V=k._init,E(x,w,V(k._payload),R)}if(Vi(k)||Ni(k))return V!==null?null:f(x,w,k,R,null);Ta(x,k)}return null}function I(x,w,k,R,V){if(typeof R=="string"&&R!==""||typeof R=="number")return x=x.get(k)||null,c(w,x,""+R,V);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ma:return x=x.get(R.key===null?k:R.key)||null,u(w,x,R,V);case _s:return x=x.get(R.key===null?k:R.key)||null,h(w,x,R,V);case Qn:var q=R._init;return I(x,w,k,q(R._payload),V)}if(Vi(R)||Ni(R))return x=x.get(k)||null,f(w,x,R,V,null);Ta(w,R)}return null}function P(x,w,k,R){for(var V=null,q=null,_=w,p=w=0,v=null;_!==null&&p<k.length;p++){_.index>p?(v=_,_=null):v=_.sibling;var T=E(x,_,k[p],R);if(T===null){_===null&&(_=v);break}t&&_&&T.alternate===null&&e(x,_),w=i(T,w,p),q===null?V=T:q.sibling=T,q=T,_=v}if(p===k.length)return n(x,_),Oe&&Dr(x,p),V;if(_===null){for(;p<k.length;p++)_=g(x,k[p],R),_!==null&&(w=i(_,w,p),q===null?V=_:q.sibling=_,q=_);return Oe&&Dr(x,p),V}for(_=r(x,_);p<k.length;p++)v=I(_,x,p,k[p],R),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?p:v.key),w=i(v,w,p),q===null?V=v:q.sibling=v,q=v);return t&&_.forEach(function(N){return e(x,N)}),Oe&&Dr(x,p),V}function L(x,w,k,R){var V=Ni(k);if(typeof V!="function")throw Error(G(150));if(k=V.call(k),k==null)throw Error(G(151));for(var q=V=null,_=w,p=w=0,v=null,T=k.next();_!==null&&!T.done;p++,T=k.next()){_.index>p?(v=_,_=null):v=_.sibling;var N=E(x,_,T.value,R);if(N===null){_===null&&(_=v);break}t&&_&&N.alternate===null&&e(x,_),w=i(N,w,p),q===null?V=N:q.sibling=N,q=N,_=v}if(T.done)return n(x,_),Oe&&Dr(x,p),V;if(_===null){for(;!T.done;p++,T=k.next())T=g(x,T.value,R),T!==null&&(w=i(T,w,p),q===null?V=T:q.sibling=T,q=T);return Oe&&Dr(x,p),V}for(_=r(x,_);!T.done;p++,T=k.next())T=I(_,x,p,T.value,R),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?p:T.key),w=i(T,w,p),q===null?V=T:q.sibling=T,q=T);return t&&_.forEach(function(S){return e(x,S)}),Oe&&Dr(x,p),V}function M(x,w,k,R){if(typeof k=="object"&&k!==null&&k.type===bs&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ma:e:{for(var V=k.key,q=w;q!==null;){if(q.key===V){if(V=k.type,V===bs){if(q.tag===7){n(x,q.sibling),w=s(q,k.props.children),w.return=x,x=w;break e}}else if(q.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Qn&&Zf(V)===q.type){n(x,q.sibling),w=s(q,k.props),w.ref=Ri(x,q,k),w.return=x,x=w;break e}n(x,q);break}else e(x,q);q=q.sibling}k.type===bs?(w=jr(k.props.children,x.mode,R,k.key),w.return=x,x=w):(R=$a(k.type,k.key,k.props,null,x.mode,R),R.ref=Ri(x,w,k),R.return=x,x=R)}return o(x);case _s:e:{for(q=k.key;w!==null;){if(w.key===q)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(x,w.sibling),w=s(w,k.children||[]),w.return=x,x=w;break e}else{n(x,w);break}else e(x,w);w=w.sibling}w=uu(k,x.mode,R),w.return=x,x=w}return o(x);case Qn:return q=k._init,M(x,w,q(k._payload),R)}if(Vi(k))return P(x,w,k,R);if(Ni(k))return L(x,w,k,R);Ta(x,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(x,w.sibling),w=s(w,k),w.return=x,x=w):(n(x,w),w=cu(k,x.mode,R),w.return=x,x=w),o(x)):n(x,w)}return M}var Gs=Xy(!0),Qy=Xy(!1),pl=Sr(null),gl=null,Ps=null,ah=null;function lh(){ah=Ps=gl=null}function ch(t){var e=pl.current;Me(pl),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){gl=t,ah=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(ah!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(gl===null)throw Error(G(308));Ps=t,gl.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Fr=null;function uh(t){Fr===null?Fr=[t]:Fr.push(t)}function Yy(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,uh(e)):(n.next=s.next,s.next=n),e.interleaved=n,Vn(t,r)}function Vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function dh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Vn(t,n)}return s=r.interleaved,s===null?(e.next=e,uh(r)):(e.next=s.next,s.next=e),r.interleaved=e,Vn(t,n)}function qa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}function ep(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yl(t,e,n,r){var s=t.updateQueue;Yn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var u=c,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==o&&(c===null?f.firstBaseUpdate=h:c.next=h,f.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;o=0,f=h=u=null,c=i;do{var E=c.lane,I=c.eventTime;if((r&E)===E){f!==null&&(f=f.next={eventTime:I,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var P=t,L=c;switch(E=e,I=n,L.tag){case 1:if(P=L.payload,typeof P=="function"){g=P.call(I,g,E);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=L.payload,E=typeof P=="function"?P.call(I,g,E):P,E==null)break e;g=qe({},g,E);break e;case 2:Yn=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,E=s.effects,E===null?s.effects=[c]:E.push(c))}else I={eventTime:I,lane:E,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(h=f=I,u=g):f=f.next=I,o|=E;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;E=c,c=E.next,E.next=null,s.lastBaseUpdate=E,s.shared.pending=null}}while(!0);if(f===null&&(u=g),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=g}}function tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(G(191,s));s.call(r)}}}var Vo={},pn=Sr(Vo),vo=Sr(Vo),Eo=Sr(Vo);function Ur(t){if(t===Vo)throw Error(G(174));return t}function hh(t,e){switch(Pe(Eo,e),Pe(vo,t),Pe(pn,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ru(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ru(e,t)}Me(pn),Pe(pn,e)}function Ks(){Me(pn),Me(vo),Me(Eo)}function Zy(t){Ur(Eo.current);var e=Ur(pn.current),n=Ru(e,t.type);e!==n&&(Pe(vo,t),Pe(pn,n))}function mh(t){vo.current===t&&(Me(pn),Me(vo))}var Fe=Sr(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ru=[];function fh(){for(var t=0;t<ru.length;t++)ru[t]._workInProgressVersionPrimary=null;ru.length=0}var Ba=zn.ReactCurrentDispatcher,su=zn.ReactCurrentBatchConfig,$r=0,Ue=null,Ye=null,nt=null,El=!1,Yi=!1,wo=0,Tb=0;function gt(){throw Error(G(321))}function ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function gh(t,e,n,r,s,i){if($r=i,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ba.current=t===null||t.memoizedState===null?Ib:Ab,t=n(r,s),Yi){i=0;do{if(Yi=!1,wo=0,25<=i)throw Error(G(301));i+=1,nt=Ye=null,e.updateQueue=null,Ba.current=Pb,t=n(r,s)}while(Yi)}if(Ba.current=wl,e=Ye!==null&&Ye.next!==null,$r=0,nt=Ye=Ue=null,El=!1,e)throw Error(G(300));return t}function yh(){var t=wo!==0;return wo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Ue.memoizedState=nt=t:nt=nt.next=t,nt}function Qt(){if(Ye===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=nt===null?Ue.memoizedState:nt.next;if(e!==null)nt=e,Ye=t;else{if(t===null)throw Error(G(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},nt===null?Ue.memoizedState=nt=t:nt=nt.next=t}return nt}function _o(t,e){return typeof e=="function"?e(t):e}function iu(t){var e=Qt(),n=e.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=t;var r=Ye,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var c=o=null,u=null,h=i;do{var f=h.lane;if(($r&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(c=u=g,o=r):u=u.next=g,Ue.lanes|=f,Gr|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=c,ln(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ue.lanes|=i,Gr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ou(t){var e=Qt(),n=e.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);ln(i,e.memoizedState)||(Ct=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function e0(){}function t0(t,e){var n=Ue,r=Qt(),s=e(),i=!ln(r.memoizedState,s);if(i&&(r.memoizedState=s,Ct=!0),r=r.queue,vh(s0.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,bo(9,r0.bind(null,n,r,s,e),void 0,null),rt===null)throw Error(G(349));$r&30||n0(n,e,s)}return s}function n0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function r0(t,e,n,r){e.value=n,e.getSnapshot=r,i0(e)&&o0(t)}function s0(t,e,n){return n(function(){i0(e)&&o0(t)})}function i0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function o0(t){var e=Vn(t,1);e!==null&&an(e,t,1,-1)}function np(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=Nb.bind(null,Ue,t),[e.memoizedState,t]}function bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function a0(){return Qt().memoizedState}function ja(t,e,n,r){var s=dn();Ue.flags|=t,s.memoizedState=bo(1|e,n,void 0,r===void 0?null:r)}function Xl(t,e,n,r){var s=Qt();r=r===void 0?null:r;var i=void 0;if(Ye!==null){var o=Ye.memoizedState;if(i=o.destroy,r!==null&&ph(r,o.deps)){s.memoizedState=bo(e,n,i,r);return}}Ue.flags|=t,s.memoizedState=bo(1|e,n,i,r)}function rp(t,e){return ja(8390656,8,t,e)}function vh(t,e){return Xl(2048,8,t,e)}function l0(t,e){return Xl(4,2,t,e)}function c0(t,e){return Xl(4,4,t,e)}function u0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d0(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,u0.bind(null,e,t),n)}function Eh(){}function h0(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ph(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function m0(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ph(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function f0(t,e,n){return $r&21?(ln(n,e)||(n=Ey(),Ue.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function Sb(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var r=su.transition;su.transition={};try{t(!1),e()}finally{ke=n,su.transition=r}}function p0(){return Qt().memoizedState}function kb(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},g0(t))y0(e,n);else if(n=Yy(t,e,n,r),n!==null){var s=Nt();an(n,t,r,s),v0(n,e,r)}}function Nb(t,e,n){var r=mr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(g0(t))y0(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,c=i(o,n);if(s.hasEagerState=!0,s.eagerState=c,ln(c,o)){var u=e.interleaved;u===null?(s.next=s,uh(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Yy(t,e,s,r),n!==null&&(s=Nt(),an(n,t,r,s),v0(n,e,r))}}function g0(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function y0(t,e){Yi=El=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}var wl={readContext:Xt,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},Ib={readContext:Xt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:rp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ja(4194308,4,u0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return ja(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kb.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:np,useDebugValue:Eh,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=np(!1),e=t[0];return t=Sb.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,s=dn();if(Oe){if(n===void 0)throw Error(G(407));n=n()}else{if(n=e(),rt===null)throw Error(G(349));$r&30||n0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,rp(s0.bind(null,r,i,t),[t]),r.flags|=2048,bo(9,r0.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=dn(),e=rt.identifierPrefix;if(Oe){var n=Nn,r=kn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Tb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ab={readContext:Xt,useCallback:h0,useContext:Xt,useEffect:vh,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:m0,useReducer:iu,useRef:a0,useState:function(){return iu(_o)},useDebugValue:Eh,useDeferredValue:function(t){var e=Qt();return f0(e,Ye.memoizedState,t)},useTransition:function(){var t=iu(_o)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:p0,unstable_isNewReconciler:!1},Pb={readContext:Xt,useCallback:h0,useContext:Xt,useEffect:vh,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:m0,useReducer:ou,useRef:a0,useState:function(){return ou(_o)},useDebugValue:Eh,useDeferredValue:function(t){var e=Qt();return Ye===null?e.memoizedState=t:f0(e,Ye.memoizedState,t)},useTransition:function(){var t=ou(_o)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:p0,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),s=mr(t),i=Cn(r,s);i.payload=e,n!=null&&(i.callback=n),e=dr(t,i,s),e!==null&&(an(e,t,s,r),qa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),s=mr(t),i=Cn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=dr(t,i,s),e!==null&&(an(e,t,s,r),qa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=mr(t),s=Cn(n,r);s.tag=2,e!=null&&(s.callback=e),e=dr(t,s,r),e!==null&&(an(e,t,r,n),qa(e,t,r))}};function sp(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,r)||!fo(s,i):!0}function E0(t,e,n){var r=!1,s=wr,i=e.contextType;return typeof i=="object"&&i!==null?i=Xt(i):(s=Lt(e)?Hr:bt.current,r=e.contextTypes,i=(r=r!=null)?Ws(t,s):wr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function ip(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function ed(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},dh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Xt(i):(i=Lt(e)?Hr:bt.current,s.context=Ws(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Zu(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ql.enqueueReplaceState(s,s.state,null),yl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",r=e;do n+=s_(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cb=typeof WeakMap=="function"?WeakMap:Map;function w0(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bl||(bl=!0,dd=r),td(t,e)},n}function _0(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){td(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){td(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function op(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Cb;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Wb.bind(null,t,e,n),e.then(t,t))}function ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lp(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var Rb=zn.ReactCurrentOwner,Ct=!1;function kt(t,e,n,r){e.child=t===null?Qy(e,null,n,r):Gs(e,t.child,n,r)}function cp(t,e,n,r,s){n=n.render;var i=e.ref;return Fs(e,s),r=gh(t,e,n,r,i,s),n=yh(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Fn(t,e,s)):(Oe&&n&&sh(e),e.flags|=1,kt(t,e,r,s),e.child)}function up(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Nh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,b0(t,e,i,r,s)):(t=$a(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(o,r)&&t.ref===e.ref)return Fn(t,e,s)}return e.flags|=1,t=fr(i,r),t.ref=e.ref,t.return=e,e.child=t}function b0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(fo(i,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,Fn(t,e,s)}return nd(t,e,n,r,s)}function x0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Rs,Ot),Ot|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(Rs,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Pe(Rs,Ot),Ot|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Pe(Rs,Ot),Ot|=r;return kt(t,e,s,n),e.child}function T0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nd(t,e,n,r,s){var i=Lt(n)?Hr:bt.current;return i=Ws(e,i),Fs(e,s),n=gh(t,e,n,r,i,s),r=yh(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Fn(t,e,s)):(Oe&&r&&sh(e),e.flags|=1,kt(t,e,n,s),e.child)}function dp(t,e,n,r,s){if(Lt(n)){var i=!0;hl(e)}else i=!1;if(Fs(e,s),e.stateNode===null)za(t,e),E0(e,n,r),ed(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,c=e.memoizedProps;o.props=c;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Xt(h):(h=Lt(n)?Hr:bt.current,h=Ws(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||u!==h)&&ip(e,o,r,h),Yn=!1;var E=e.memoizedState;o.state=E,yl(e,r,o,s),u=e.memoizedState,c!==r||E!==u||Rt.current||Yn?(typeof f=="function"&&(Zu(e,n,f,r),u=e.memoizedState),(c=Yn||sp(e,n,c,r,E,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=c):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Jy(t,e),c=e.memoizedProps,h=e.type===e.elementType?c:tn(e.type,c),o.props=h,g=e.pendingProps,E=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xt(u):(u=Lt(n)?Hr:bt.current,u=Ws(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==g||E!==u)&&ip(e,o,r,u),Yn=!1,E=e.memoizedState,o.state=E,yl(e,r,o,s);var P=e.memoizedState;c!==g||E!==P||Rt.current||Yn?(typeof I=="function"&&(Zu(e,n,I,r),P=e.memoizedState),(h=Yn||sp(e,n,h,r,E,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),r=!1)}return rd(t,e,n,r,i,s)}function rd(t,e,n,r,s,i){T0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Qf(e,n,!1),Fn(t,e,i);r=e.stateNode,Rb.current=e;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,i),e.child=Gs(e,null,c,i)):kt(t,e,c,i),e.memoizedState=r.state,s&&Qf(e,n,!0),e.child}function S0(t){var e=t.stateNode;e.pendingContext?Xf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xf(t,e.context,!1),hh(t,e.containerInfo)}function hp(t,e,n,r,s){return $s(),oh(s),e.flags|=256,kt(t,e,n,r),e.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function k0(t,e,n){var r=e.pendingProps,s=Fe.current,i=!1,o=(e.flags&128)!==0,c;if((c=o)||(c=t!==null&&t.memoizedState===null?!1:(s&2)!==0),c?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Pe(Fe,s&1),t===null)return Yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Zl(o,r,0,null),t=jr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=id(n),e.memoizedState=sd,t):wh(e,o));if(s=t.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return Lb(t,e,o,r,c,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,c=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?i=fr(c,i):(i=jr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=sd,r}return i=t.child,t=i.sibling,r=fr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wh(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sa(t,e,n,r){return r!==null&&oh(r),Gs(e,t.child,null,n),t=wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lb(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=au(Error(G(422))),Sa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Zl({mode:"visible",children:r.children},s,0,null),i=jr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=id(o),e.memoizedState=sd,i);if(!(e.mode&1))return Sa(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(G(419)),r=au(i,r,void 0),Sa(t,e,o,r)}if(c=(o&t.childLanes)!==0,Ct||c){if(r=rt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Vn(t,s),an(r,t,s,-1))}return kh(),r=au(Error(G(421))),Sa(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=$b.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Vt=ur(s.nextSibling),Ft=e,Oe=!0,rn=null,t!==null&&(Ht[Wt++]=kn,Ht[Wt++]=Nn,Ht[Wt++]=Wr,kn=t.id,Nn=t.overflow,Wr=e),e=wh(e,r.children),e.flags|=4096,e)}function mp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ju(t.return,e,n)}function lu(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function N0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(kt(t,e,r.children,n),r=Fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,n,e);else if(t.tag===19)mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(Fe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),lu(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&vl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}lu(e,!0,n,null,i);break;case"together":lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(G(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Db(t,e,n){switch(e.tag){case 3:S0(e),$s();break;case 5:Zy(e);break;case 1:Lt(e.type)&&hl(e);break;case 4:hh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Pe(pl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Fe,Fe.current&1),e.flags|=128,null):n&e.child.childLanes?k0(t,e,n):(Pe(Fe,Fe.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);Pe(Fe,Fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return N0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Pe(Fe,Fe.current),r)break;return null;case 22:case 23:return e.lanes=0,x0(t,e,n)}return Fn(t,e,n)}var I0,od,A0,P0;I0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};od=function(){};A0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ur(pn.current);var i=null;switch(n){case"input":s=Iu(t,s),r=Iu(t,r),i=[];break;case"select":s=qe({},s,{value:void 0}),r=qe({},r,{value:void 0}),i=[];break;case"textarea":s=Cu(t,s),r=Cu(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ul)}Lu(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var c=s[h];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(oo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(c=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==c&&(u!=null||c!=null))if(h==="style")if(c){for(o in c)!c.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&c[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(oo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&De("scroll",t),i||c===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};P0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Li(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Mb(t,e,n){var r=e.pendingProps;switch(ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Lt(e.type)&&dl(),yt(e),null;case 3:return r=e.stateNode,Ks(),Me(Rt),Me(bt),fh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(fd(rn),rn=null))),od(t,e),yt(e),null;case 5:mh(e);var s=Ur(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)A0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(G(166));return yt(e),null}if(t=Ur(pn.current),xa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[hn]=e,r[yo]=i,t=(e.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(s=0;s<Ui.length;s++)De(Ui[s],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":bf(r,i),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},De("invalid",r);break;case"textarea":Tf(r,i),De("invalid",r)}Lu(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,c,t),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,c,t),s=["children",""+c]):oo.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&De("scroll",r)}switch(n){case"input":fa(r),xf(r,i,!0);break;case"textarea":fa(r),Sf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ul)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[yo]=r,I0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Du(n,r),n){case"dialog":De("cancel",t),De("close",t),s=r;break;case"iframe":case"object":case"embed":De("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ui.length;s++)De(Ui[s],t);s=r;break;case"source":De("error",t),s=r;break;case"img":case"image":case"link":De("error",t),De("load",t),s=r;break;case"details":De("toggle",t),s=r;break;case"input":bf(t,r),s=Iu(t,r),De("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=qe({},r,{value:void 0}),De("invalid",t);break;case"textarea":Tf(t,r),s=Cu(t,r),De("invalid",t);break;default:s=r}Lu(n,s),c=s;for(i in c)if(c.hasOwnProperty(i)){var u=c[i];i==="style"?ay(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&iy(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ao(t,u):typeof u=="number"&&ao(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(oo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&De("scroll",t):u!=null&&Hd(t,i,u,o))}switch(n){case"input":fa(t),xf(t,r,!1);break;case"textarea":fa(t),Sf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ds(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)P0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(G(166));if(n=Ur(Eo.current),Ur(pn.current),xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(i=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return yt(e),null;case 13:if(Me(Fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&Vt!==null&&e.mode&1&&!(e.flags&128))Ky(),$s(),e.flags|=98560,i=!1;else if(i=xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(G(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(G(317));i[hn]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),i=!1}else rn!==null&&(fd(rn),rn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Fe.current&1?Ze===0&&(Ze=3):kh())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Ks(),od(t,e),t===null&&po(e.stateNode.containerInfo),yt(e),null;case 10:return ch(e.type._context),yt(e),null;case 17:return Lt(e.type)&&dl(),yt(e),null;case 19:if(Me(Fe),i=e.memoizedState,i===null)return yt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Li(i,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vl(t),o!==null){for(e.flags|=128,Li(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(Fe,Fe.current&1|2),e.child}t=t.sibling}i.tail!==null&&$e()>Qs&&(e.flags|=128,r=!0,Li(i,!1),e.lanes=4194304)}else{if(!r)if(t=vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Li(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Oe)return yt(e),null}else 2*$e()-i.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,r=!0,Li(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=$e(),e.sibling=null,n=Fe.current,Pe(Fe,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return Sh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(G(156,e.tag))}function Ob(t,e){switch(ih(e),e.tag){case 1:return Lt(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),Me(Rt),Me(bt),fh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mh(e),null;case 13:if(Me(Fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(G(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(Fe),null;case 4:return Ks(),null;case 10:return ch(e.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var ka=!1,wt=!1,Vb=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function ad(t,e,n){try{n()}catch(r){ze(t,e,r)}}var fp=!1;function Fb(t,e){if(Hu=al,t=My(),rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,c=-1,u=-1,h=0,f=0,g=t,E=null;t:for(;;){for(var I;g!==n||s!==0&&g.nodeType!==3||(c=o+s),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(I=g.firstChild)!==null;)E=g,g=I;for(;;){if(g===t)break t;if(E===n&&++h===s&&(c=o),E===i&&++f===r&&(u=o),(I=g.nextSibling)!==null)break;g=E,E=g.parentNode}g=I}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wu={focusedElem:t,selectionRange:n},al=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var L=P.memoizedProps,M=P.memoizedState,x=e.stateNode,w=x.getSnapshotBeforeUpdate(e.elementType===e.type?L:tn(e.type,L),M);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(R){ze(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return P=fp,fp=!1,P}function Ji(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ad(e,n,i)}s=s.next}while(s!==r)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function C0(t){var e=t.alternate;e!==null&&(t.alternate=null,C0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[yo],delete e[Ku],delete e[wb],delete e[_b])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function R0(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(r!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}var ot=null,nn=!1;function Kn(t,e,n){for(n=n.child;n!==null;)L0(t,e,n),n=n.sibling}function L0(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:wt||Cs(n,e);case 6:var r=ot,s=nn;ot=null,Kn(t,e,n),ot=r,nn=s,ot!==null&&(nn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(nn?(t=ot,n=n.stateNode,t.nodeType===8?tu(t.parentNode,n):t.nodeType===1&&tu(t,n),ho(t)):tu(ot,n.stateNode));break;case 4:r=ot,s=nn,ot=n.stateNode.containerInfo,nn=!0,Kn(t,e,n),ot=r,nn=s;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ad(n,e,o),s=s.next}while(s!==r)}Kn(t,e,n);break;case 1:if(!wt&&(Cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ze(n,e,c)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,Kn(t,e,n),wt=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function gp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Vb),e.forEach(function(r){var s=Gb.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,c=o;e:for(;c!==null;){switch(c.tag){case 5:ot=c.stateNode,nn=!1;break e;case 3:ot=c.stateNode.containerInfo,nn=!0;break e;case 4:ot=c.stateNode.containerInfo,nn=!0;break e}c=c.return}if(ot===null)throw Error(G(160));L0(i,o,s),ot=null,nn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){ze(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)D0(e,t),e=e.sibling}function D0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),un(t),r&4){try{Ji(3,t,t.return),Yl(3,t)}catch(L){ze(t,t.return,L)}try{Ji(5,t,t.return)}catch(L){ze(t,t.return,L)}}break;case 1:en(e,t),un(t),r&512&&n!==null&&Cs(n,n.return);break;case 5:if(en(e,t),un(t),r&512&&n!==null&&Cs(n,n.return),t.flags&32){var s=t.stateNode;try{ao(s,"")}catch(L){ze(t,t.return,L)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,c=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&ny(s,i),Du(c,o);var h=Du(c,i);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?ay(s,g):f==="dangerouslySetInnerHTML"?iy(s,g):f==="children"?ao(s,g):Hd(s,f,g,h)}switch(c){case"input":Au(s,i);break;case"textarea":ry(s,i);break;case"select":var E=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var I=i.value;I!=null?Ds(s,!!i.multiple,I,!1):E!==!!i.multiple&&(i.defaultValue!=null?Ds(s,!!i.multiple,i.defaultValue,!0):Ds(s,!!i.multiple,i.multiple?[]:"",!1))}s[yo]=i}catch(L){ze(t,t.return,L)}}break;case 6:if(en(e,t),un(t),r&4){if(t.stateNode===null)throw Error(G(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(L){ze(t,t.return,L)}}break;case 3:if(en(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(L){ze(t,t.return,L)}break;case 4:en(e,t),un(t);break;case 13:en(e,t),un(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(xh=$e())),r&4&&gp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(h=wt)||f,en(e,t),wt=h):en(e,t),un(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(Z=t,f=t.child;f!==null;){for(g=Z=f;Z!==null;){switch(E=Z,I=E.child,E.tag){case 0:case 11:case 14:case 15:Ji(4,E,E.return);break;case 1:Cs(E,E.return);var P=E.stateNode;if(typeof P.componentWillUnmount=="function"){r=E,n=E.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(L){ze(r,n,L)}}break;case 5:Cs(E,E.return);break;case 22:if(E.memoizedState!==null){vp(g);continue}}I!==null?(I.return=E,Z=I):vp(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=oy("display",o))}catch(L){ze(t,t.return,L)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(L){ze(t,t.return,L)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:en(e,t),un(t),r&4&&gp(t);break;case 21:break;default:en(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(R0(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ao(s,""),r.flags&=-33);var i=pp(t);ud(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,c=pp(t);cd(t,c,o);break;default:throw Error(G(161))}}catch(u){ze(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ub(t,e,n){Z=t,M0(t)}function M0(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var s=Z,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ka;if(!o){var c=s.alternate,u=c!==null&&c.memoizedState!==null||wt;c=ka;var h=wt;if(ka=o,(wt=u)&&!h)for(Z=s;Z!==null;)o=Z,u=o.child,o.tag===22&&o.memoizedState!==null?Ep(s):u!==null?(u.return=o,Z=u):Ep(s);for(;i!==null;)Z=i,M0(i),i=i.sibling;Z=s,ka=c,wt=h}yp(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Z=i):yp(t)}}function yp(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Yl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&tp(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tp(e,o,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&ho(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}wt||e.flags&512&&ld(e)}catch(E){ze(e,e.return,E)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function vp(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function Ep(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yl(4,e)}catch(u){ze(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ze(e,s,u)}}var i=e.return;try{ld(e)}catch(u){ze(e,i,u)}break;case 5:var o=e.return;try{ld(e)}catch(u){ze(e,o,u)}}}catch(u){ze(e,e.return,u)}if(e===t){Z=null;break}var c=e.sibling;if(c!==null){c.return=e.return,Z=c;break}Z=e.return}}var qb=Math.ceil,_l=zn.ReactCurrentDispatcher,_h=zn.ReactCurrentOwner,Kt=zn.ReactCurrentBatchConfig,we=0,rt=null,Xe=null,ct=0,Ot=0,Rs=Sr(0),Ze=0,xo=null,Gr=0,Jl=0,bh=0,Zi=null,Pt=null,xh=0,Qs=1/0,Tn=null,bl=!1,dd=null,hr=null,Na=!1,ir=null,xl=0,eo=0,hd=null,Ha=-1,Wa=0;function Nt(){return we&6?$e():Ha!==-1?Ha:Ha=$e()}function mr(t){return t.mode&1?we&2&&ct!==0?ct&-ct:xb.transition!==null?(Wa===0&&(Wa=Ey()),Wa):(t=ke,t!==0||(t=window.event,t=t===void 0?16:ky(t.type)),t):1}function an(t,e,n,r){if(50<eo)throw eo=0,hd=null,Error(G(185));Do(t,n,r),(!(we&2)||t!==rt)&&(t===rt&&(!(we&2)&&(Jl|=n),Ze===4&&Zn(t,ct)),Dt(t,r),n===1&&we===0&&!(e.mode&1)&&(Qs=$e()+500,Kl&&kr()))}function Dt(t,e){var n=t.callbackNode;x_(t,e);var r=ol(t,t===rt?ct:0);if(r===0)n!==null&&If(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&If(n),e===1)t.tag===0?bb(wp.bind(null,t)):Wy(wp.bind(null,t)),vb(function(){!(we&6)&&kr()}),n=null;else{switch(wy(r)){case 1:n=Xd;break;case 4:n=yy;break;case 16:n=il;break;case 536870912:n=vy;break;default:n=il}n=z0(n,O0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function O0(t,e){if(Ha=-1,Wa=0,we&6)throw Error(G(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var r=ol(t,t===rt?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tl(t,r);else{e=r;var s=we;we|=2;var i=F0();(rt!==t||ct!==e)&&(Tn=null,Qs=$e()+500,Br(t,e));do try{zb();break}catch(c){V0(t,c)}while(!0);lh(),_l.current=i,we=s,Xe!==null?e=0:(rt=null,ct=0,e=Ze)}if(e!==0){if(e===2&&(s=Uu(t),s!==0&&(r=s,e=md(t,s))),e===1)throw n=xo,Br(t,0),Zn(t,r),Dt(t,$e()),n;if(e===6)Zn(t,r);else{if(s=t.current.alternate,!(r&30)&&!Bb(s)&&(e=Tl(t,r),e===2&&(i=Uu(t),i!==0&&(r=i,e=md(t,i))),e===1))throw n=xo,Br(t,0),Zn(t,r),Dt(t,$e()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(G(345));case 2:Mr(t,Pt,Tn);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=xh+500-$e(),10<e)){if(ol(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Gu(Mr.bind(null,t,Pt,Tn),e);break}Mr(t,Pt,Tn);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-on(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qb(r/1960))-r,10<r){t.timeoutHandle=Gu(Mr.bind(null,t,Pt,Tn),r);break}Mr(t,Pt,Tn);break;case 5:Mr(t,Pt,Tn);break;default:throw Error(G(329))}}}return Dt(t,$e()),t.callbackNode===n?O0.bind(null,t):null}function md(t,e){var n=Zi;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&fd(e)),t}function fd(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function Bb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!ln(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~bh,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function wp(t){if(we&6)throw Error(G(327));Us();var e=ol(t,0);if(!(e&1))return Dt(t,$e()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var r=Uu(t);r!==0&&(e=r,n=md(t,r))}if(n===1)throw n=xo,Br(t,0),Zn(t,e),Dt(t,$e()),n;if(n===6)throw Error(G(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,Pt,Tn),Dt(t,$e()),null}function Th(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(Qs=$e()+500,Kl&&kr())}}function Kr(t){ir!==null&&ir.tag===0&&!(we&6)&&Us();var e=we;we|=1;var n=Kt.transition,r=ke;try{if(Kt.transition=null,ke=1,t)return t()}finally{ke=r,Kt.transition=n,we=e,!(we&6)&&kr()}}function Sh(){Ot=Rs.current,Me(Rs)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yb(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(ih(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Ks(),Me(Rt),Me(bt),fh();break;case 5:mh(r);break;case 4:Ks();break;case 13:Me(Fe);break;case 19:Me(Fe);break;case 10:ch(r.type._context);break;case 22:case 23:Sh()}n=n.return}if(rt=t,Xe=t=fr(t.current,null),ct=Ot=e,Ze=0,xo=null,bh=Jl=Gr=0,Pt=Zi=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Fr=null}return t}function V0(t,e){do{var n=Xe;try{if(lh(),Ba.current=wl,El){for(var r=Ue.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}El=!1}if($r=0,nt=Ye=Ue=null,Yi=!1,wo=0,_h.current=null,n===null||n.return===null){Ze=1,xo=e,Xe=null;break}e:{var i=t,o=n.return,c=n,u=e;if(e=ct,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=c,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var E=f.alternate;E?(f.updateQueue=E.updateQueue,f.memoizedState=E.memoizedState,f.lanes=E.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=ap(o);if(I!==null){I.flags&=-257,lp(I,o,c,i,e),I.mode&1&&op(i,h,e),e=I,u=h;var P=e.updateQueue;if(P===null){var L=new Set;L.add(u),e.updateQueue=L}else P.add(u);break e}else{if(!(e&1)){op(i,h,e),kh();break e}u=Error(G(426))}}else if(Oe&&c.mode&1){var M=ap(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),lp(M,o,c,i,e),oh(Xs(u,c));break e}}i=u=Xs(u,c),Ze!==4&&(Ze=2),Zi===null?Zi=[i]:Zi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=w0(i,u,e);ep(i,x);break e;case 1:c=u;var w=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(hr===null||!hr.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var R=_0(i,c,e);ep(i,R);break e}}i=i.return}while(i!==null)}q0(n)}catch(V){e=V,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function F0(){var t=_l.current;return _l.current=wl,t===null?wl:t}function kh(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),rt===null||!(Gr&268435455)&&!(Jl&268435455)||Zn(rt,ct)}function Tl(t,e){var n=we;we|=2;var r=F0();(rt!==t||ct!==e)&&(Tn=null,Br(t,e));do try{jb();break}catch(s){V0(t,s)}while(!0);if(lh(),we=n,_l.current=r,Xe!==null)throw Error(G(261));return rt=null,ct=0,Ze}function jb(){for(;Xe!==null;)U0(Xe)}function zb(){for(;Xe!==null&&!f_();)U0(Xe)}function U0(t){var e=j0(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?q0(t):Xe=e,_h.current=null}function q0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ob(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Xe=null;return}}else if(n=Mb(n,e,Ot),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);Ze===0&&(Ze=5)}function Mr(t,e,n){var r=ke,s=Kt.transition;try{Kt.transition=null,ke=1,Hb(t,e,n,r)}finally{Kt.transition=s,ke=r}return null}function Hb(t,e,n,r){do Us();while(ir!==null);if(we&6)throw Error(G(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(G(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(T_(t,i),t===rt&&(Xe=rt=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,z0(il,function(){return Us(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Kt.transition,Kt.transition=null;var o=ke;ke=1;var c=we;we|=4,_h.current=null,Fb(t,n),D0(n,t),ub(Wu),al=!!Hu,Wu=Hu=null,t.current=n,Ub(n),p_(),we=c,ke=o,Kt.transition=i}else t.current=n;if(Na&&(Na=!1,ir=t,xl=s),i=t.pendingLanes,i===0&&(hr=null),v_(n.stateNode),Dt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(bl)throw bl=!1,t=dd,dd=null,t;return xl&1&&t.tag!==0&&Us(),i=t.pendingLanes,i&1?t===hd?eo++:(eo=0,hd=t):eo=0,kr(),null}function Us(){if(ir!==null){var t=wy(xl),e=Kt.transition,n=ke;try{if(Kt.transition=null,ke=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,xl=0,we&6)throw Error(G(331));var s=we;for(we|=4,Z=t.current;Z!==null;){var i=Z,o=i.child;if(Z.flags&16){var c=i.deletions;if(c!==null){for(var u=0;u<c.length;u++){var h=c[u];for(Z=h;Z!==null;){var f=Z;switch(f.tag){case 0:case 11:case 15:Ji(8,f,i)}var g=f.child;if(g!==null)g.return=f,Z=g;else for(;Z!==null;){f=Z;var E=f.sibling,I=f.return;if(C0(f),f===h){Z=null;break}if(E!==null){E.return=I,Z=E;break}Z=I}}}var P=i.alternate;if(P!==null){var L=P.child;if(L!==null){P.child=null;do{var M=L.sibling;L.sibling=null,L=M}while(L!==null)}}Z=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Z=o;else e:for(;Z!==null;){if(i=Z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ji(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,Z=x;break e}Z=i.return}}var w=t.current;for(Z=w;Z!==null;){o=Z;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,Z=k;else e:for(o=w;Z!==null;){if(c=Z,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Yl(9,c)}}catch(V){ze(c,c.return,V)}if(c===o){Z=null;break e}var R=c.sibling;if(R!==null){R.return=c.return,Z=R;break e}Z=c.return}}if(we=s,kr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(zl,t)}catch{}r=!0}return r}finally{ke=n,Kt.transition=e}}return!1}function _p(t,e,n){e=Xs(n,e),e=w0(t,e,1),t=dr(t,e,1),e=Nt(),t!==null&&(Do(t,1,e),Dt(t,e))}function ze(t,e,n){if(t.tag===3)_p(t,t,n);else for(;e!==null;){if(e.tag===3){_p(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=Xs(n,t),t=_0(e,t,1),e=dr(e,t,1),t=Nt(),e!==null&&(Do(e,1,t),Dt(e,t));break}}e=e.return}}function Wb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(ct&n)===n&&(Ze===4||Ze===3&&(ct&130023424)===ct&&500>$e()-xh?Br(t,0):bh|=n),Dt(t,e)}function B0(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=Nt();t=Vn(t,e),t!==null&&(Do(t,e,n),Dt(t,n))}function $b(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),B0(t,n)}function Gb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(e),B0(t,n)}var j0;j0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,Db(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Oe&&e.flags&1048576&&$y(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;za(t,e),t=e.pendingProps;var s=Ws(e,bt.current);Fs(e,n),s=gh(null,e,r,t,s,n);var i=yh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(i=!0,hl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,dh(e),s.updater=Ql,e.stateNode=s,s._reactInternals=e,ed(e,r,t,n),e=rd(null,e,r,!0,i,n)):(e.tag=0,Oe&&i&&sh(e),kt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(za(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Xb(r),t=tn(r,t),s){case 0:e=nd(null,e,r,t,n);break e;case 1:e=dp(null,e,r,t,n);break e;case 11:e=cp(null,e,r,t,n);break e;case 14:e=up(null,e,r,tn(r.type,t),n);break e}throw Error(G(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),nd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),dp(t,e,r,s,n);case 3:e:{if(S0(e),t===null)throw Error(G(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Jy(t,e),yl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Xs(Error(G(423)),e),e=hp(t,e,r,n,s);break e}else if(r!==s){s=Xs(Error(G(424)),e),e=hp(t,e,r,n,s);break e}else for(Vt=ur(e.stateNode.containerInfo.firstChild),Ft=e,Oe=!0,rn=null,n=Qy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),r===s){e=Fn(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return Zy(e),t===null&&Yu(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,$u(r,s)?o=null:i!==null&&$u(r,i)&&(e.flags|=32),T0(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Yu(e),null;case 13:return k0(t,e,n);case 4:return hh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gs(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),cp(t,e,r,s,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Pe(pl,r._currentValue),r._currentValue=o,i!==null)if(ln(i.value,o)){if(i.children===s.children&&!Rt.current){e=Fn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){o=i.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Cn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ju(i.return,n,e),c.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(G(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ju(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}kt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Fs(e,n),s=Xt(s),r=r(s),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,s=tn(r,e.pendingProps),s=tn(r.type,s),up(t,e,r,s,n);case 15:return b0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),za(t,e),e.tag=1,Lt(r)?(t=!0,hl(e)):t=!1,Fs(e,n),E0(e,r,s),ed(e,r,s,n),rd(null,e,r,!0,t,n);case 19:return N0(t,e,n);case 22:return x0(t,e,n)}throw Error(G(156,e.tag))};function z0(t,e){return gy(t,e)}function Kb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new Kb(t,e,n,r)}function Nh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xb(t){if(typeof t=="function")return Nh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$d)return 11;if(t===Gd)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $a(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Nh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return jr(n.children,s,i,e);case Wd:o=8,s|=8;break;case Tu:return t=Gt(12,n,e,s|2),t.elementType=Tu,t.lanes=i,t;case Su:return t=Gt(13,n,e,s),t.elementType=Su,t.lanes=i,t;case ku:return t=Gt(19,n,e,s),t.elementType=ku,t.lanes=i,t;case Zg:return Zl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yg:o=10;break e;case Jg:o=9;break e;case $d:o=11;break e;case Gd:o=14;break e;case Qn:o=16,r=null;break e}throw Error(G(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function jr(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function Zl(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=Zg,t.lanes=n,t.stateNode={isHidden:!1},t}function cu(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function uu(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qb(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hc(0),this.expirationTimes=Hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ih(t,e,n,r,s,i,o,c,u){return t=new Qb(t,e,n,c,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Gt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dh(i),t}function Yb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function H0(t){if(!t)return wr;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(G(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(G(171))}if(t.tag===1){var n=t.type;if(Lt(n))return Hy(t,n,e)}return e}function W0(t,e,n,r,s,i,o,c,u){return t=Ih(n,r,!0,t,s,i,o,c,u),t.context=H0(null),n=t.current,r=Nt(),s=mr(n),i=Cn(r,s),i.callback=e??null,dr(n,i,s),t.current.lanes=s,Do(t,s,r),Dt(t,r),t}function ec(t,e,n,r){var s=e.current,i=Nt(),o=mr(s);return n=H0(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(s,e,o),t!==null&&(an(t,s,o,i),qa(t,s,o)),o}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ah(t,e){bp(t,e),(t=t.alternate)&&bp(t,e)}function Jb(){return null}var $0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ph(t){this._internalRoot=t}tc.prototype.render=Ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(G(409));ec(t,e,null,null)};tc.prototype.unmount=Ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){ec(null,t,null,null)}),e[On]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=xy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jn.length&&e!==0&&e<Jn[n].priority;n++);Jn.splice(n,0,t),n===0&&Sy(t)}};function Ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function Zb(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Sl(o);i.call(h)}}var o=W0(e,r,t,0,null,!1,!1,"",xp);return t._reactRootContainer=o,t[On]=o.current,po(t.nodeType===8?t.parentNode:t),Kr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var h=Sl(u);c.call(h)}}var u=Ih(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=u,t[On]=u.current,po(t.nodeType===8?t.parentNode:t),Kr(function(){ec(e,u,n,r)}),u}function rc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var c=s;s=function(){var u=Sl(o);c.call(u)}}ec(e,o,t,s)}else o=Zb(n,e,t,s,r);return Sl(o)}_y=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fi(e.pendingLanes);n!==0&&(Qd(e,n|1),Dt(e,$e()),!(we&6)&&(Qs=$e()+500,kr()))}break;case 13:Kr(function(){var r=Vn(t,1);if(r!==null){var s=Nt();an(r,t,1,s)}}),Ah(t,1)}};Yd=function(t){if(t.tag===13){var e=Vn(t,134217728);if(e!==null){var n=Nt();an(e,t,134217728,n)}Ah(t,134217728)}};by=function(t){if(t.tag===13){var e=mr(t),n=Vn(t,e);if(n!==null){var r=Nt();an(n,t,e,r)}Ah(t,e)}};xy=function(){return ke};Ty=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};Ou=function(t,e,n){switch(e){case"input":if(Au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Gl(r);if(!s)throw Error(G(90));ty(r),Au(r,s)}}}break;case"textarea":ry(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};uy=Th;dy=Kr;var ex={usingClientEntryPoint:!1,Events:[Oo,ks,Gl,ly,cy,Th]},Di={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tx={bundleType:Di.bundleType,version:Di.version,rendererPackageName:Di.rendererPackageName,rendererConfig:Di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fy(t),t===null?null:t.stateNode},findFiberByHostInstance:Di.findFiberByHostInstance||Jb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{zl=Ia.inject(tx),fn=Ia}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ex;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ch(e))throw Error(G(200));return Yb(t,e,null,n)};Bt.createRoot=function(t,e){if(!Ch(t))throw Error(G(299));var n=!1,r="",s=$0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ih(t,1,!1,null,null,n,!1,r,s),t[On]=e.current,po(t.nodeType===8?t.parentNode:t),new Ph(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(G(188)):(t=Object.keys(t).join(","),Error(G(268,t)));return t=fy(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return Kr(t)};Bt.hydrate=function(t,e,n){if(!nc(e))throw Error(G(200));return rc(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!Ch(t))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=$0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W0(e,null,t,1,n??null,s,!1,i,o),t[On]=e.current,po(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new tc(e)};Bt.render=function(t,e,n){if(!nc(e))throw Error(G(200));return rc(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!nc(t))throw Error(G(40));return t._reactRootContainer?(Kr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[On]=null})}),!0):!1};Bt.unstable_batchedUpdates=Th;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nc(n))throw Error(G(200));if(t==null||t._reactInternals===void 0)throw Error(G(38));return rc(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function G0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G0)}catch(t){console.error(t)}}G0(),Gg.exports=Bt;var nx=Gg.exports,Tp=nx;bu.createRoot=Tp.createRoot,bu.hydrateRoot=Tp.hydrateRoot;var Sp={};/**
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
 */const K0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},X0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,I=h&63;u||(I=64,o||(E=64)),r.push(n[f],n[g],n[E],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new sx;const E=i<<2|c>>4;if(r.push(E),h!==64){const I=c<<4&240|h>>2;if(r.push(I),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ix=function(t){const e=K0(t);return X0.encodeByteArray(e,!0)},kl=function(t){return ix(t).replace(/\./g,"")},Q0=function(t){try{return X0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ox(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ax=()=>ox().__FIREBASE_DEFAULTS__,lx=()=>{if(typeof process>"u"||typeof Sp>"u")return;const t=Sp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q0(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return ax()||lx()||cx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y0=t=>{var e,n;return(n=(e=sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ux=t=>{const e=Y0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},J0=()=>{var t;return(t=sc())===null||t===void 0?void 0:t.config},Z0=t=>{var e;return(e=sc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kl(JSON.stringify(n)),kl(JSON.stringify(o)),""].join(".")}/**
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function fx(){var t;const e=(t=sc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function px(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vx(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ex(){return!fx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wx(){try{return typeof indexedDB=="object"}catch{return!1}}function _x(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const bx="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bx,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xx(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Hn(s,c,r)}}function xx(t,e){return t.replace(Tx,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Tx=/\{\$([^}]+)}/g;function Sx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kp(i)&&kp(o)){if(!Nl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kp(t){return t!==null&&typeof t=="object"}/**
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
 */function Uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kx(t,e){const n=new Nx(t,e);return n.subscribe.bind(n)}class Nx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ix(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=du),s.error===void 0&&(s.error=du),s.complete===void 0&&(s.complete=du);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ix(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function du(){}/**
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
 */function Yt(t){return t&&t._delegate?t._delegate:t}class Xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class Ax{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cx(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Px(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Px(t){return t===Or?void 0:t}function Cx(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ax(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const Lx={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Dx=ve.INFO,Mx={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Ox=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Mx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rh{constructor(e){this.name=e,this._logLevel=Dx,this._logHandler=Ox,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Vx=(t,e)=>e.some(n=>t instanceof n);let Np,Ip;function Fx(){return Np||(Np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ux(){return Ip||(Ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ev=new WeakMap,pd=new WeakMap,tv=new WeakMap,hu=new WeakMap,Lh=new WeakMap;function qx(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ev.set(n,t)}).catch(()=>{}),Lh.set(e,t),e}function Bx(t){if(pd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pd.set(t,e)}let gd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jx(t){gd=t(gd)}function zx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mu(this),e,...n);return tv.set(r,e.sort?e.sort():[e]),pr(r)}:Ux().includes(t)?function(...e){return t.apply(mu(this),e),pr(ev.get(this))}:function(...e){return pr(t.apply(mu(this),e))}}function Hx(t){return typeof t=="function"?zx(t):(t instanceof IDBTransaction&&Bx(t),Vx(t,Fx())?new Proxy(t,gd):t)}function pr(t){if(t instanceof IDBRequest)return qx(t);if(hu.has(t))return hu.get(t);const e=Hx(t);return e!==t&&(hu.set(t,e),Lh.set(e,t)),e}const mu=t=>Lh.get(t);function Wx(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pr(o.result),u.oldVersion,u.newVersion,pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const $x=["get","getKey","getAll","getAllKeys","count"],Gx=["put","add","delete","clear"],fu=new Map;function Ap(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fu.get(e))return fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Gx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$x.includes(n)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&u.done]))[0]};return fu.set(e,i),i}jx(t=>({...t,get:(e,n,r)=>Ap(e,n)||t.get(e,n,r),has:(e,n)=>!!Ap(e,n)||t.has(e,n)}));/**
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
 */class Kx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yd="@firebase/app",Pp="0.10.13";/**
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
 */const Un=new Rh("@firebase/app"),Qx="@firebase/app-compat",Yx="@firebase/analytics-compat",Jx="@firebase/analytics",Zx="@firebase/app-check-compat",e1="@firebase/app-check",t1="@firebase/auth",n1="@firebase/auth-compat",r1="@firebase/database",s1="@firebase/data-connect",i1="@firebase/database-compat",o1="@firebase/functions",a1="@firebase/functions-compat",l1="@firebase/installations",c1="@firebase/installations-compat",u1="@firebase/messaging",d1="@firebase/messaging-compat",h1="@firebase/performance",m1="@firebase/performance-compat",f1="@firebase/remote-config",p1="@firebase/remote-config-compat",g1="@firebase/storage",y1="@firebase/storage-compat",v1="@firebase/firestore",E1="@firebase/vertexai-preview",w1="@firebase/firestore-compat",_1="firebase",b1="10.14.1";/**
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
 */const vd="[DEFAULT]",x1={[yd]:"fire-core",[Qx]:"fire-core-compat",[Jx]:"fire-analytics",[Yx]:"fire-analytics-compat",[e1]:"fire-app-check",[Zx]:"fire-app-check-compat",[t1]:"fire-auth",[n1]:"fire-auth-compat",[r1]:"fire-rtdb",[s1]:"fire-data-connect",[i1]:"fire-rtdb-compat",[o1]:"fire-fn",[a1]:"fire-fn-compat",[l1]:"fire-iid",[c1]:"fire-iid-compat",[u1]:"fire-fcm",[d1]:"fire-fcm-compat",[h1]:"fire-perf",[m1]:"fire-perf-compat",[f1]:"fire-rc",[p1]:"fire-rc-compat",[g1]:"fire-gcs",[y1]:"fire-gcs-compat",[v1]:"fire-fst",[w1]:"fire-fst-compat",[E1]:"fire-vertex","fire-js":"fire-js",[_1]:"fire-js-all"};/**
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
 */const Il=new Map,T1=new Map,Ed=new Map;function Cp(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ys(t){const e=t.name;if(Ed.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,t);for(const n of Il.values())Cp(n,t);for(const n of T1.values())Cp(n,t);return!0}function Dh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mn(t){return t.settings!==void 0}/**
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
 */const S1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new Fo("app","Firebase",S1);/**
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
 */class k1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const li=b1;function nv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gr.create("bad-app-name",{appName:String(s)});if(n||(n=J0()),!n)throw gr.create("no-options");const i=Il.get(s);if(i){if(Nl(n,i.options)&&Nl(r,i.config))return i;throw gr.create("duplicate-app",{appName:s})}const o=new Rx(s);for(const u of Ed.values())o.addComponent(u);const c=new k1(n,r,o);return Il.set(s,c),c}function rv(t=vd){const e=Il.get(t);if(!e&&t===vd&&J0())return nv();if(!e)throw gr.create("no-app",{appName:t});return e}function yr(t,e,n){var r;let s=(r=x1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(c.join(" "));return}Ys(new Xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const N1="firebase-heartbeat-database",I1=1,To="firebase-heartbeat-store";let pu=null;function sv(){return pu||(pu=Wx(N1,I1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(To)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),pu}async function A1(t){try{const n=(await sv()).transaction(To),r=await n.objectStore(To).get(iv(t));return await n.done,r}catch(e){if(e instanceof Hn)Un.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function Rp(t,e){try{const r=(await sv()).transaction(To,"readwrite");await r.objectStore(To).put(e,iv(t)),await r.done}catch(n){if(n instanceof Hn)Un.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function iv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const P1=1024,C1=30*24*60*60*1e3;class R1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=C1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lp(),{heartbeatsToSend:r,unsentEntries:s}=L1(this._heartbeatsCache.heartbeats),i=kl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Un.warn(n),""}}}function Lp(){return new Date().toISOString().substring(0,10)}function L1(t,e=P1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class D1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wx()?_x().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dp(t){return kl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function M1(t){Ys(new Xr("platform-logger",e=>new Kx(e),"PRIVATE")),Ys(new Xr("heartbeat",e=>new R1(e),"PRIVATE")),yr(yd,Pp,t),yr(yd,Pp,"esm2017"),yr("fire-js","")}M1("");var O1="firebase",V1="10.14.1";/**
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
 */yr(O1,V1,"app");function Mh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F1=ov,av=new Fo("auth","Firebase",ov());/**
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
 */const Al=new Rh("@firebase/auth");function U1(t,...e){Al.logLevel<=ve.WARN&&Al.warn(`Auth (${li}): ${t}`,...e)}function Ga(t,...e){Al.logLevel<=ve.ERROR&&Al.error(`Auth (${li}): ${t}`,...e)}/**
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
 */function cn(t,...e){throw Oh(t,...e)}function gn(t,...e){return Oh(t,...e)}function lv(t,e,n){const r=Object.assign(Object.assign({},F1()),{[e]:n});return new Fo("auth","Firebase",r).create(e,{appName:t.name})}function Rn(t){return lv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return av.create(t,...e)}function se(t,e,...n){if(!t)throw Oh(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ga(e),new Error(e)}function qn(t,e){t||In(e)}/**
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
 */function wd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function q1(){return Mp()==="http:"||Mp()==="https:"}function Mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function B1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q1()||gx()||"connection"in navigator)?navigator.onLine:!0}function j1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=mx()||yx()}get(){return B1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vh(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const z1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const H1=new qo(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,r,s={}){return uv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Uo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return px()||(h.referrerPolicy="no-referrer"),cv.fetch()(dv(t,t.config.apiHost,n,c),h)})}async function uv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},z1),e);try{const s=new $1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Aa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw lv(t,f,h);cn(t,f)}}catch(s){if(s instanceof Hn)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function Bo(t,e,n,r,s={}){const i=await Ir(t,e,n,r,s);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vh(t.config,s):`${t.config.apiScheme}://${s}`}function W1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),H1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gn(t,e,r);return s.customData._tokenResponse=n,s}function Op(t){return t!==void 0&&t.enterprise!==void 0}class G1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return W1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function K1(t,e){return Ir(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
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
 */async function X1(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function hv(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function to(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Q1(t,e=!1){const n=Yt(t),r=await n.getIdToken(e),s=Fh(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:to(gu(s.auth_time)),issuedAtTime:to(gu(s.iat)),expirationTime:to(gu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gu(t){return Number(t)*1e3}function Fh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ga("JWT malformed, contained fewer than 3 sections"),null;try{const s=Q0(n);return s?JSON.parse(s):(Ga("Failed to decode base64 JWT payload"),null)}catch(s){return Ga("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vp(t){const e=Fh(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function So(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&Y1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Y1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class J1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await So(t,hv(n,{idToken:r}));se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mv(i.providerUserInfo):[],c=eT(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new _d(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function Z1(t){const e=Yt(t);await Pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mv(t){return t.map(e=>{var{providerId:n}=e,r=Mh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tT(t,e){const n=await uv(t,{},async()=>{const r=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=dv(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",cv.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nT(t,e){return Ir(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
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
 */class qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=Vp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new qs;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qs,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function Xn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Mh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _d(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await So(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Q1(this,e)}reload(){return Z1(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await So(this,X1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(c=n.tenantId)!==null&&c!==void 0?c:void 0,M=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,x=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:R,isAnonymous:V,providerData:q,stsTokenManager:_}=n;se(k&&_,e,"internal-error");const p=qs.fromJSON(this.name,_);se(typeof k=="string",e,"internal-error"),Xn(g,e.name),Xn(E,e.name),se(typeof R=="boolean",e,"internal-error"),se(typeof V=="boolean",e,"internal-error"),Xn(I,e.name),Xn(P,e.name),Xn(L,e.name),Xn(M,e.name),Xn(x,e.name),Xn(w,e.name);const v=new An({uid:k,auth:e,email:E,emailVerified:R,displayName:g,isAnonymous:V,photoURL:P,phoneNumber:I,tenantId:L,stsTokenManager:p,createdAt:x,lastLoginAt:w});return q&&Array.isArray(q)&&(v.providerData=q.map(T=>Object.assign({},T))),M&&(v._redirectEventId=M),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new qs;s.updateFromServerResponse(n);const i=new An({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?mv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new qs;c.updateFromIdToken(r);const u=new An({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _d(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Fp=new Map;function Pn(t){qn(t instanceof Function,"Expected a class definition");let e=Fp.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fp.set(t,e),e)}/**
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
 */class fv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fv.type="NONE";const Up=fv;/**
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
 */function Ka(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ka(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ka("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs(Pn(Up),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Pn(Up);const o=Ka(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const g=An._fromJSON(e,f);h!==i&&(c=g),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Bs(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Bs(i,e,r))}}/**
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
 */function qp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wv(e))return"Blackberry";if(_v(e))return"Webos";if(gv(e))return"Safari";if((e.includes("chrome/")||yv(e))&&!e.includes("edge/"))return"Chrome";if(Ev(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pv(t=xt()){return/firefox\//i.test(t)}function gv(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yv(t=xt()){return/crios\//i.test(t)}function vv(t=xt()){return/iemobile/i.test(t)}function Ev(t=xt()){return/android/i.test(t)}function wv(t=xt()){return/blackberry/i.test(t)}function _v(t=xt()){return/webos/i.test(t)}function Uh(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rT(t=xt()){var e;return Uh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sT(){return vx()&&document.documentMode===10}function bv(t=xt()){return Uh(t)||Ev(t)||_v(t)||wv(t)||/windows phone/i.test(t)||vv(t)}/**
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
 */function xv(t,e=[]){let n;switch(t){case"Browser":n=qp(xt());break;case"Worker":n=`${qp(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${r}`}/**
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
 */class iT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function oT(t,e={}){return Ir(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
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
 */const aT=6;class lT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bp(this),this.idTokenSubscription=new Bp(this),this.beforeStateQueue=new iT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hv(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Rn(this));const n=e?Yt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oT(this),n=new lT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&U1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ss(t){return Yt(t)}class Bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=kx(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uT(t){ic=t}function Tv(t){return ic.loadJS(t)}function dT(){return ic.recaptchaEnterpriseScript}function hT(){return ic.gapiScript}function mT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fT="recaptcha-enterprise",pT="NO_RECAPTCHA";class gT{constructor(e){this.type=fT,this.auth=ss(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{K1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new G1(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,o,c){const u=window.grecaptcha;Op(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(pT)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Op(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=dT();u.length!==0&&(u+=c),Tv(u).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function jp(t,e,n,r=!1){const s=new gT(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await jp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function yT(t,e){const n=Dh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Nl(i,e??{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function vT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ET(t,e,n){const r=ss(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Sv(e),{host:o,port:c}=wT(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),_T()}function Sv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wT(t){const e=Sv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zp(o)}}}function zp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _T(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class qh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function bT(t,e){return Ir(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function xT(t,e){return Bo(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
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
 */async function TT(t,e){return Bo(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function ST(t,e){return Bo(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
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
 */class ko extends qh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,n,"signInWithPassword",xT);case"emailLink":return TT(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,r,"signUpPassword",bT);case"emailLink":return ST(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function js(t,e){return Bo(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
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
 */const kT="http://localhost";class Qr extends qh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Mh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:kT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
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
 */function NT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function IT(t){const e=qi(Bi(t)).link,n=e?qi(Bi(e)).deep_link_id:null,r=qi(Bi(t)).deep_link_id;return(r?qi(Bi(r)).link:null)||r||n||e||t}class Bh{constructor(e){var n,r,s,i,o,c;const u=qi(Bi(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,g=NT((s=u.mode)!==null&&s!==void 0?s:null);se(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=IT(e);try{return new Bh(n)}catch{return null}}}/**
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
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,n){return ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bh.parseLink(n);return se(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends kv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends jo{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class tr extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
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
 */class nr extends jo{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends jo{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */async function AT(t,e){return Bo(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await An._fromIdTokenResponse(e,r,s),o=Hp(r);return new Yr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Hp(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Hp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Cl extends Hn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Cl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Cl(e,n,r,s)}}function Nv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Cl._fromErrorAndOperation(t,i,e,r):i})}async function PT(t,e,n=!1){const r=await So(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
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
 */async function CT(t,e,n=!1){const{auth:r}=t;if(mn(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await So(t,Nv(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=Fh(i.idToken);se(o,r,"internal-error");const{sub:c}=o;return se(t.uid===c,r,"user-mismatch"),Yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
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
 */async function Iv(t,e,n=!1){if(mn(t.app))return Promise.reject(Rn(t));const r="signIn",s=await Nv(t,r,e),i=await Yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function RT(t,e){return Iv(ss(t),e)}/**
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
 */async function Av(t){const e=ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LT(t,e,n){if(mn(t.app))return Promise.reject(Rn(t));const r=ss(t),o=await bd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",AT).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Av(t),u}),c=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Wp(t,e,n){return mn(t.app)?Promise.reject(Rn(t)):RT(Yt(t),ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Av(t),r})}function DT(t,e,n,r){return Yt(t).onIdTokenChanged(e,n,r)}function MT(t,e,n){return Yt(t).beforeAuthStateChanged(e,n)}const Rl="__sak";/**
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
 */class Pv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rl,"1"),this.storage.removeItem(Rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OT=1e3,VT=10;class Cv extends Pv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cv.type="LOCAL";const FT=Cv;/**
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
 */class Rv extends Pv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rv.type="SESSION";const Lv=Rv;/**
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
 */function UT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),u=await UT(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
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
 */function jh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const h=jh("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function BT(t){yn().location.href=t}/**
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
 */function Dv(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function jT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HT(){return Dv()?self:null}/**
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
 */const Mv="firebaseLocalStorageDb",WT=1,Ll="firebaseLocalStorage",Ov="fbase_key";class zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ac(t,e){return t.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function $T(){const t=indexedDB.deleteDatabase(Mv);return new zo(t).toPromise()}function xd(){const t=indexedDB.open(Mv,WT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ll,{keyPath:Ov})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ll)?e(r):(r.close(),await $T(),e(await xd()))})})}async function $p(t,e,n){const r=ac(t,!0).put({[Ov]:e,value:n});return new zo(r).toPromise()}async function GT(t,e){const n=ac(t,!1).get(e),r=await new zo(n).toPromise();return r===void 0?null:r.value}function Gp(t,e){const n=ac(t,!0).delete(e);return new zo(n).toPromise()}const KT=800,XT=3;class Vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(HT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jT(),!this.activeServiceWorker)return;this.sender=new qT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xd();return await $p(e,Rl,"1"),await Gp(e,Rl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$p(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ac(s,!1).getAll();return new zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vv.type="LOCAL";const QT=Vv;new qo(3e4,6e4);/**
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
 */function YT(t,e){return e?Pn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zh extends qh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JT(t){return Iv(t.auth,new zh(t),t.bypassAuthState)}function ZT(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),CT(n,new zh(t),t.bypassAuthState)}async function eS(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),PT(n,new zh(t),t.bypassAuthState)}/**
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
 */class Fv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JT;case"linkViaPopup":case"linkViaRedirect":return eS;case"reauthViaPopup":case"reauthViaRedirect":return ZT;default:cn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tS=new qo(2e3,1e4);class Ls extends Fv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ls.currentPopupAction&&Ls.currentPopupAction.cancel(),Ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tS.get())};e()}}Ls.currentPopupAction=null;/**
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
 */const nS="pendingRedirect",Xa=new Map;class rS extends Fv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await sS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sS(t,e){const n=aS(e),r=oS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function iS(t,e){Xa.set(t._key(),e)}function oS(t){return Pn(t._redirectPersistence)}function aS(t){return Ka(nS,t.config.apiKey,t.name)}async function lS(t,e,n=!1){if(mn(t.app))return Promise.reject(Rn(t));const r=ss(t),s=YT(r,e),o=await new rS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const cS=10*60*1e3;class uS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kp(e))}saveEventToCache(e){this.cachedEventUids.add(Kp(e)),this.lastProcessedEventTime=Date.now()}}function Kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uv(t);default:return!1}}/**
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
 */async function hS(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
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
 */const mS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fS=/^https?/;async function pS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hS(t);for(const n of e)try{if(gS(n))return}catch{}cn(t,"unauthorized-domain")}function gS(t){const e=wd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fS.test(n))return!1;if(mS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const yS=new qo(3e4,6e4);function Xp(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vS(t){return new Promise((e,n)=>{var r,s,i;function o(){Xp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xp(),n(gn(t,"network-request-failed"))},timeout:yS.get()})}if(!((s=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yn().gapi)===null||i===void 0)&&i.load)o();else{const c=mT("iframefcb");return yn()[c]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},Tv(`${hT()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw Qa=null,e})}let Qa=null;function ES(t){return Qa=Qa||vS(t),Qa}/**
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
 */const wS=new qo(5e3,15e3),_S="__/auth/iframe",bS="emulator/auth/iframe",xS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SS(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vh(e,bS):`https://${t.config.authDomain}/${_S}`,r={apiKey:e.apiKey,appName:t.name,v:li},s=TS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Uo(r).slice(1)}`}async function kS(t){const e=await ES(t),n=yn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:SS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),c=yn().setTimeout(()=>{i(o)},wS.get());function u(){yn().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const NS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IS=500,AS=600,PS="_blank",CS="http://localhost";class Qp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RS(t,e,n,r=IS,s=AS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},NS),{width:r.toString(),height:s.toString(),top:i,left:o}),h=xt().toLowerCase();n&&(c=yv(h)?PS:n),pv(h)&&(e=e||CS,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[I,P])=>`${E}${I}=${P},`,"");if(rT(h)&&c!=="_self")return LS(e||"",c),new Qp(null);const g=window.open(e||"",c,f);se(g,t,"popup-blocked");try{g.focus()}catch{}return new Qp(g)}function LS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DS="__/auth/handler",MS="emulator/auth/handler",OS=encodeURIComponent("fac");async function Yp(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:li,eventId:s};if(e instanceof kv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof jo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await t._getAppCheckToken(),h=u?`#${OS}=${encodeURIComponent(u)}`:"";return`${VS(t)}?${Uo(c).slice(1)}${h}`}function VS({config:t}){return t.emulator?Vh(t,MS):`https://${t.authDomain}/${DS}`}/**
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
 */const yu="webStorageSupport";class FS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lv,this._completeRedirectFn=lS,this._overrideRedirectResult=iS}async _openPopup(e,n,r,s){var i;qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Yp(e,n,r,wd(),s);return RS(e,o,jh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Yp(e,n,r,wd(),s);return BT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kS(e),r=new uS(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yu,{type:yu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[yu];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bv()||gv()||Uh()}}const US=FS;var Jp="@firebase/auth",Zp="1.7.9";/**
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
 */class qS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jS(t){Ys(new Xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xv(t)},h=new cT(r,s,i,u);return vT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ys(new Xr("auth-internal",e=>{const n=ss(e.getProvider("auth").getImmediate());return(r=>new qS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(Jp,Zp,BS(t)),yr(Jp,Zp,"esm2017")}/**
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
 */const zS=5*60,HS=Z0("authIdTokenMaxAge")||zS;let eg=null;const WS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>HS)return;const s=n==null?void 0:n.token;eg!==s&&(eg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $S(t=rv()){const e=Dh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yT(t,{popupRedirectResolver:US,persistence:[QT,FT,Lv]}),r=Z0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=WS(i.toString());MT(n,o,()=>o(n.currentUser)),DT(n,c=>o(c))}}const s=Y0("auth");return s&&ET(n,`http://${s}`),n}function GS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",GS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jS("Browser");var tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zr,qv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,p){function v(){}v.prototype=p.prototype,_.D=p.prototype,_.prototype=new v,_.prototype.constructor=_,_.C=function(T,N,S){for(var b=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)b[oe-2]=arguments[oe];return p.prototype[N].apply(T,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,p,v){v||(v=0);var T=Array(16);if(typeof p=="string")for(var N=0;16>N;++N)T[N]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(N=0;16>N;++N)T[N]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=_.g[0],v=_.g[1],N=_.g[2];var S=_.g[3],b=p+(S^v&(N^S))+T[0]+3614090360&4294967295;p=v+(b<<7&4294967295|b>>>25),b=S+(N^p&(v^N))+T[1]+3905402710&4294967295,S=p+(b<<12&4294967295|b>>>20),b=N+(v^S&(p^v))+T[2]+606105819&4294967295,N=S+(b<<17&4294967295|b>>>15),b=v+(p^N&(S^p))+T[3]+3250441966&4294967295,v=N+(b<<22&4294967295|b>>>10),b=p+(S^v&(N^S))+T[4]+4118548399&4294967295,p=v+(b<<7&4294967295|b>>>25),b=S+(N^p&(v^N))+T[5]+1200080426&4294967295,S=p+(b<<12&4294967295|b>>>20),b=N+(v^S&(p^v))+T[6]+2821735955&4294967295,N=S+(b<<17&4294967295|b>>>15),b=v+(p^N&(S^p))+T[7]+4249261313&4294967295,v=N+(b<<22&4294967295|b>>>10),b=p+(S^v&(N^S))+T[8]+1770035416&4294967295,p=v+(b<<7&4294967295|b>>>25),b=S+(N^p&(v^N))+T[9]+2336552879&4294967295,S=p+(b<<12&4294967295|b>>>20),b=N+(v^S&(p^v))+T[10]+4294925233&4294967295,N=S+(b<<17&4294967295|b>>>15),b=v+(p^N&(S^p))+T[11]+2304563134&4294967295,v=N+(b<<22&4294967295|b>>>10),b=p+(S^v&(N^S))+T[12]+1804603682&4294967295,p=v+(b<<7&4294967295|b>>>25),b=S+(N^p&(v^N))+T[13]+4254626195&4294967295,S=p+(b<<12&4294967295|b>>>20),b=N+(v^S&(p^v))+T[14]+2792965006&4294967295,N=S+(b<<17&4294967295|b>>>15),b=v+(p^N&(S^p))+T[15]+1236535329&4294967295,v=N+(b<<22&4294967295|b>>>10),b=p+(N^S&(v^N))+T[1]+4129170786&4294967295,p=v+(b<<5&4294967295|b>>>27),b=S+(v^N&(p^v))+T[6]+3225465664&4294967295,S=p+(b<<9&4294967295|b>>>23),b=N+(p^v&(S^p))+T[11]+643717713&4294967295,N=S+(b<<14&4294967295|b>>>18),b=v+(S^p&(N^S))+T[0]+3921069994&4294967295,v=N+(b<<20&4294967295|b>>>12),b=p+(N^S&(v^N))+T[5]+3593408605&4294967295,p=v+(b<<5&4294967295|b>>>27),b=S+(v^N&(p^v))+T[10]+38016083&4294967295,S=p+(b<<9&4294967295|b>>>23),b=N+(p^v&(S^p))+T[15]+3634488961&4294967295,N=S+(b<<14&4294967295|b>>>18),b=v+(S^p&(N^S))+T[4]+3889429448&4294967295,v=N+(b<<20&4294967295|b>>>12),b=p+(N^S&(v^N))+T[9]+568446438&4294967295,p=v+(b<<5&4294967295|b>>>27),b=S+(v^N&(p^v))+T[14]+3275163606&4294967295,S=p+(b<<9&4294967295|b>>>23),b=N+(p^v&(S^p))+T[3]+4107603335&4294967295,N=S+(b<<14&4294967295|b>>>18),b=v+(S^p&(N^S))+T[8]+1163531501&4294967295,v=N+(b<<20&4294967295|b>>>12),b=p+(N^S&(v^N))+T[13]+2850285829&4294967295,p=v+(b<<5&4294967295|b>>>27),b=S+(v^N&(p^v))+T[2]+4243563512&4294967295,S=p+(b<<9&4294967295|b>>>23),b=N+(p^v&(S^p))+T[7]+1735328473&4294967295,N=S+(b<<14&4294967295|b>>>18),b=v+(S^p&(N^S))+T[12]+2368359562&4294967295,v=N+(b<<20&4294967295|b>>>12),b=p+(v^N^S)+T[5]+4294588738&4294967295,p=v+(b<<4&4294967295|b>>>28),b=S+(p^v^N)+T[8]+2272392833&4294967295,S=p+(b<<11&4294967295|b>>>21),b=N+(S^p^v)+T[11]+1839030562&4294967295,N=S+(b<<16&4294967295|b>>>16),b=v+(N^S^p)+T[14]+4259657740&4294967295,v=N+(b<<23&4294967295|b>>>9),b=p+(v^N^S)+T[1]+2763975236&4294967295,p=v+(b<<4&4294967295|b>>>28),b=S+(p^v^N)+T[4]+1272893353&4294967295,S=p+(b<<11&4294967295|b>>>21),b=N+(S^p^v)+T[7]+4139469664&4294967295,N=S+(b<<16&4294967295|b>>>16),b=v+(N^S^p)+T[10]+3200236656&4294967295,v=N+(b<<23&4294967295|b>>>9),b=p+(v^N^S)+T[13]+681279174&4294967295,p=v+(b<<4&4294967295|b>>>28),b=S+(p^v^N)+T[0]+3936430074&4294967295,S=p+(b<<11&4294967295|b>>>21),b=N+(S^p^v)+T[3]+3572445317&4294967295,N=S+(b<<16&4294967295|b>>>16),b=v+(N^S^p)+T[6]+76029189&4294967295,v=N+(b<<23&4294967295|b>>>9),b=p+(v^N^S)+T[9]+3654602809&4294967295,p=v+(b<<4&4294967295|b>>>28),b=S+(p^v^N)+T[12]+3873151461&4294967295,S=p+(b<<11&4294967295|b>>>21),b=N+(S^p^v)+T[15]+530742520&4294967295,N=S+(b<<16&4294967295|b>>>16),b=v+(N^S^p)+T[2]+3299628645&4294967295,v=N+(b<<23&4294967295|b>>>9),b=p+(N^(v|~S))+T[0]+4096336452&4294967295,p=v+(b<<6&4294967295|b>>>26),b=S+(v^(p|~N))+T[7]+1126891415&4294967295,S=p+(b<<10&4294967295|b>>>22),b=N+(p^(S|~v))+T[14]+2878612391&4294967295,N=S+(b<<15&4294967295|b>>>17),b=v+(S^(N|~p))+T[5]+4237533241&4294967295,v=N+(b<<21&4294967295|b>>>11),b=p+(N^(v|~S))+T[12]+1700485571&4294967295,p=v+(b<<6&4294967295|b>>>26),b=S+(v^(p|~N))+T[3]+2399980690&4294967295,S=p+(b<<10&4294967295|b>>>22),b=N+(p^(S|~v))+T[10]+4293915773&4294967295,N=S+(b<<15&4294967295|b>>>17),b=v+(S^(N|~p))+T[1]+2240044497&4294967295,v=N+(b<<21&4294967295|b>>>11),b=p+(N^(v|~S))+T[8]+1873313359&4294967295,p=v+(b<<6&4294967295|b>>>26),b=S+(v^(p|~N))+T[15]+4264355552&4294967295,S=p+(b<<10&4294967295|b>>>22),b=N+(p^(S|~v))+T[6]+2734768916&4294967295,N=S+(b<<15&4294967295|b>>>17),b=v+(S^(N|~p))+T[13]+1309151649&4294967295,v=N+(b<<21&4294967295|b>>>11),b=p+(N^(v|~S))+T[4]+4149444226&4294967295,p=v+(b<<6&4294967295|b>>>26),b=S+(v^(p|~N))+T[11]+3174756917&4294967295,S=p+(b<<10&4294967295|b>>>22),b=N+(p^(S|~v))+T[2]+718787259&4294967295,N=S+(b<<15&4294967295|b>>>17),b=v+(S^(N|~p))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+p&4294967295,_.g[1]=_.g[1]+(N+(b<<21&4294967295|b>>>11))&4294967295,_.g[2]=_.g[2]+N&4294967295,_.g[3]=_.g[3]+S&4294967295}r.prototype.u=function(_,p){p===void 0&&(p=_.length);for(var v=p-this.blockSize,T=this.B,N=this.h,S=0;S<p;){if(N==0)for(;S<=v;)s(this,_,S),S+=this.blockSize;if(typeof _=="string"){for(;S<p;)if(T[N++]=_.charCodeAt(S++),N==this.blockSize){s(this,T),N=0;break}}else for(;S<p;)if(T[N++]=_[S++],N==this.blockSize){s(this,T),N=0;break}}this.h=N,this.o+=p},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var p=1;p<_.length-8;++p)_[p]=0;var v=8*this.o;for(p=_.length-8;p<_.length;++p)_[p]=v&255,v/=256;for(this.u(_),_=Array(16),p=v=0;4>p;++p)for(var T=0;32>T;T+=8)_[v++]=this.g[p]>>>T&255;return _};function i(_,p){var v=c;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=p(_)}function o(_,p){this.h=p;for(var v=[],T=!0,N=_.length-1;0<=N;N--){var S=_[N]|0;T&&S==p||(v[N]=S,T=!1)}this.g=v}var c={};function u(_){return-128<=_&&128>_?i(_,function(p){return new o([p|0],0>p?-1:0)}):new o([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return g;if(0>_)return M(h(-_));for(var p=[],v=1,T=0;_>=v;T++)p[T]=_/v|0,v*=4294967296;return new o(p,0)}function f(_,p){if(_.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(_.charAt(0)=="-")return M(f(_.substring(1),p));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(p,8)),T=g,N=0;N<_.length;N+=8){var S=Math.min(8,_.length-N),b=parseInt(_.substring(N,N+S),p);8>S?(S=h(Math.pow(p,S)),T=T.j(S).add(h(b))):(T=T.j(v),T=T.add(h(b)))}return T}var g=u(0),E=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(L(this))return-M(this).m();for(var _=0,p=1,v=0;v<this.g.length;v++){var T=this.i(v);_+=(0<=T?T:4294967296+T)*p,p*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(L(this))return"-"+M(this).toString(_);for(var p=h(Math.pow(_,6)),v=this,T="";;){var N=R(v,p).g;v=x(v,N.j(p));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(_);if(v=N,P(v))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var p=0;p<_.g.length;p++)if(_.g[p]!=0)return!1;return!0}function L(_){return _.h==-1}t.l=function(_){return _=x(this,_),L(_)?-1:P(_)?0:1};function M(_){for(var p=_.g.length,v=[],T=0;T<p;T++)v[T]=~_.g[T];return new o(v,~_.h).add(E)}t.abs=function(){return L(this)?M(this):this},t.add=function(_){for(var p=Math.max(this.g.length,_.g.length),v=[],T=0,N=0;N<=p;N++){var S=T+(this.i(N)&65535)+(_.i(N)&65535),b=(S>>>16)+(this.i(N)>>>16)+(_.i(N)>>>16);T=b>>>16,S&=65535,b&=65535,v[N]=b<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function x(_,p){return _.add(M(p))}t.j=function(_){if(P(this)||P(_))return g;if(L(this))return L(_)?M(this).j(M(_)):M(M(this).j(_));if(L(_))return M(this.j(M(_)));if(0>this.l(I)&&0>_.l(I))return h(this.m()*_.m());for(var p=this.g.length+_.g.length,v=[],T=0;T<2*p;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var N=0;N<_.g.length;N++){var S=this.i(T)>>>16,b=this.i(T)&65535,oe=_.i(N)>>>16,de=_.i(N)&65535;v[2*T+2*N]+=b*de,w(v,2*T+2*N),v[2*T+2*N+1]+=S*de,w(v,2*T+2*N+1),v[2*T+2*N+1]+=b*oe,w(v,2*T+2*N+1),v[2*T+2*N+2]+=S*oe,w(v,2*T+2*N+2)}for(T=0;T<p;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=p;T<2*p;T++)v[T]=0;return new o(v,0)};function w(_,p){for(;(_[p]&65535)!=_[p];)_[p+1]+=_[p]>>>16,_[p]&=65535,p++}function k(_,p){this.g=_,this.h=p}function R(_,p){if(P(p))throw Error("division by zero");if(P(_))return new k(g,g);if(L(_))return p=R(M(_),p),new k(M(p.g),M(p.h));if(L(p))return p=R(_,M(p)),new k(M(p.g),p.h);if(30<_.g.length){if(L(_)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var v=E,T=p;0>=T.l(_);)v=V(v),T=V(T);var N=q(v,1),S=q(T,1);for(T=q(T,2),v=q(v,2);!P(T);){var b=S.add(T);0>=b.l(_)&&(N=N.add(v),S=b),T=q(T,1),v=q(v,1)}return p=x(_,N.j(p)),new k(N,p)}for(N=g;0<=_.l(p);){for(v=Math.max(1,Math.floor(_.m()/p.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(v),b=S.j(p);L(b)||0<b.l(_);)v-=T,S=h(v),b=S.j(p);P(S)&&(S=E),N=N.add(S),_=x(_,b)}return new k(N,_)}t.A=function(_){return R(this,_).h},t.and=function(_){for(var p=Math.max(this.g.length,_.g.length),v=[],T=0;T<p;T++)v[T]=this.i(T)&_.i(T);return new o(v,this.h&_.h)},t.or=function(_){for(var p=Math.max(this.g.length,_.g.length),v=[],T=0;T<p;T++)v[T]=this.i(T)|_.i(T);return new o(v,this.h|_.h)},t.xor=function(_){for(var p=Math.max(this.g.length,_.g.length),v=[],T=0;T<p;T++)v[T]=this.i(T)^_.i(T);return new o(v,this.h^_.h)};function V(_){for(var p=_.g.length+1,v=[],T=0;T<p;T++)v[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(v,_.h)}function q(_,p){var v=p>>5;p%=32;for(var T=_.g.length-v,N=[],S=0;S<T;S++)N[S]=0<p?_.i(S+v)>>>p|_.i(S+v+1)<<32-p:_.i(S+v);return new o(N,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,zr=o}).apply(typeof tg<"u"?tg:typeof self<"u"?self:typeof window<"u"?window:{});var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bv,ji,jv,Ya,Td,zv,Hv,Wv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,m){return a==Array.prototype||a==Object.prototype||(a[d]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pa=="object"&&Pa];for(var d=0;d<a.length;++d){var m=a[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var m=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var C=a[y];if(!(C in m))break e;m=m[C]}a=a[a.length-1],y=m[a],d=d(y),d!=y&&d!=null&&e(m,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var m=0,y=!1,C={next:function(){if(!y&&m<a.length){var O=m++;return{value:d(O,a[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,m){return a.call.apply(a.bind,arguments)}function g(a,d,m){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,y),a.apply(d,C)}}return function(){return a.apply(d,arguments)}}function E(a,d,m){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,E.apply(null,arguments)}function I(a,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function P(a,d){function m(){}m.prototype=d.prototype,a.aa=d.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(y,C,O){for(var Q=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)Q[Ae-2]=arguments[Ae];return d.prototype[C].apply(y,Q)}}function L(a){const d=a.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=a[y];return m}return[]}function M(a,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const C=a.length||0,O=y.length||0;a.length=C+O;for(let Q=0;Q<O;Q++)a[C+Q]=y[Q]}else a.push(y)}}class x{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function R(a){return R[" "](a),a}R[" "]=function(){};var V=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function q(a,d,m){for(const y in a)d.call(m,a[y],y,a)}function _(a,d){for(const m in a)d.call(void 0,a[m],m,a)}function p(a){const d={};for(const m in a)d[m]=a[m];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,d){let m,y;for(let C=1;C<arguments.length;C++){y=arguments[C];for(m in y)a[m]=y[m];for(let O=0;O<v.length;O++)m=v[O],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function N(a){var d=1;a=a.split(":");const m=[];for(;0<d&&a.length;)m.push(a.shift()),d--;return a.length&&m.push(a.join(":")),m}function S(a){c.setTimeout(()=>{throw a},0)}function b(){var a=Y;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class oe{constructor(){this.h=this.g=null}add(d,m){const y=de.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var de=new x(()=>new B,a=>a.reset());class B{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,$=!1,Y=new oe,te=()=>{const a=c.Promise.resolve(void 0);Se=()=>{a.then(he)}};var he=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(m){S(m)}var d=de;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}$=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};c.addEventListener("test",m,d),c.removeEventListener("test",m,d)}catch{}return a}();function Ie(a,d){if(ye.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(V){e:{try{R(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else m=="mouseover"?d=a.fromElement:m=="mouseout"&&(d=a.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Te[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ie.aa.h.call(this)}}P(Ie,ye);var Te={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),z=0;function X(a,d,m,y,C){this.listener=a,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=C,this.key=++z,this.da=this.fa=!1}function J(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function fe(a){this.src=a,this.g={},this.h=0}fe.prototype.add=function(a,d,m,y,C){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var Q=A(a,d,y,C);return-1<Q?(d=a[Q],m||(d.fa=!1)):(d=new X(d,this.src,O,!!y,C),d.fa=m,a.push(d)),d};function ue(a,d){var m=d.type;if(m in a.g){var y=a.g[m],C=Array.prototype.indexOf.call(y,d,void 0),O;(O=0<=C)&&Array.prototype.splice.call(y,C,1),O&&(J(d),a.g[m].length==0&&(delete a.g[m],a.h--))}}function A(a,d,m,y){for(var C=0;C<a.length;++C){var O=a[C];if(!O.da&&O.listener==d&&O.capture==!!m&&O.ha==y)return C}return-1}var F="closure_lm_"+(1e6*Math.random()|0),j={};function K(a,d,m,y,C){if(Array.isArray(d)){for(var O=0;O<d.length;O++)K(a,d[O],m,y,C);return null}return m=Em(m),a&&a[D]?a.K(d,m,h(y)?!!y.capture:!1,C):xe(a,d,m,!1,y,C)}function xe(a,d,m,y,C,O){if(!d)throw Error("Invalid event type");var Q=h(C)?!!C.capture:!!C,Ae=_c(a);if(Ae||(a[F]=Ae=new fe(a)),m=Ae.add(d,m,y,Q,O),m.proxy)return m;if(y=Ce(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)me||(C=Q),C===void 0&&(C=!1),a.addEventListener(d.toString(),y,C);else if(a.attachEvent)a.attachEvent(st(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Ce(){function a(m){return d.call(a.src,a.listener,m)}const d=Re;return a}function Jt(a,d,m,y,C){if(Array.isArray(d))for(var O=0;O<d.length;O++)Jt(a,d[O],m,y,C);else y=h(y)?!!y.capture:!!y,m=Em(m),a&&a[D]?(a=a.i,d=String(d).toString(),d in a.g&&(O=a.g[d],m=A(O,m,y,C),-1<m&&(J(O[m]),Array.prototype.splice.call(O,m,1),O.length==0&&(delete a.g[d],a.h--)))):a&&(a=_c(a))&&(d=a.g[d.toString()],a=-1,d&&(a=A(d,m,y,C)),(m=-1<a?d[a]:null)&&zt(m))}function zt(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[D])ue(d.i,a);else{var m=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(m,y,a.capture):d.detachEvent?d.detachEvent(st(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=_c(d))?(ue(m,a),m.h==0&&(m.src=null,d[F]=null)):J(a)}}}function st(a){return a in j?j[a]:j[a]="on"+a}function Re(a,d){if(a.da)a=!0;else{d=new Ie(d,this);var m=a.listener,y=a.ha||a.src;a.fa&&zt(a),a=m.call(y,d)}return a}function _c(a){return a=a[F],a instanceof fe?a:null}var bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Em(a){return typeof a=="function"?a:(a[bc]||(a[bc]=function(d){return a.handleEvent(d)}),a[bc])}function mt(){ce.call(this),this.i=new fe(this),this.M=this,this.F=null}P(mt,ce),mt.prototype[D]=!0,mt.prototype.removeEventListener=function(a,d,m,y){Jt(this,a,d,m,y)};function Tt(a,d){var m,y=a.F;if(y)for(m=[];y;y=y.F)m.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new ye(d,a);else if(d instanceof ye)d.target=d.target||a;else{var C=d;d=new ye(y,a),T(d,C)}if(C=!0,m)for(var O=m.length-1;0<=O;O--){var Q=d.g=m[O];C=Qo(Q,y,!0,d)&&C}if(Q=d.g=a,C=Qo(Q,y,!0,d)&&C,C=Qo(Q,y,!1,d)&&C,m)for(O=0;O<m.length;O++)Q=d.g=m[O],C=Qo(Q,y,!1,d)&&C}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var m=a.g[d],y=0;y<m.length;y++)J(m[y]);delete a.g[d],a.h--}}this.F=null},mt.prototype.K=function(a,d,m,y){return this.i.add(String(a),d,!1,m,y)},mt.prototype.L=function(a,d,m,y){return this.i.add(String(a),d,!0,m,y)};function Qo(a,d,m,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,O=0;O<d.length;++O){var Q=d[O];if(Q&&!Q.da&&Q.capture==m){var Ae=Q.listener,it=Q.ha||Q.src;Q.fa&&ue(a.i,Q),C=Ae.call(it,y)!==!1&&C}}return C&&!y.defaultPrevented}function wm(a,d,m){if(typeof a=="function")m&&(a=E(a,m));else if(a&&typeof a.handleEvent=="function")a=E(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function _m(a){a.g=wm(()=>{a.g=null,a.i&&(a.i=!1,_m(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class uw extends ce{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:_m(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fi(a){ce.call(this),this.h=a,this.g={}}P(fi,ce);var bm=[];function xm(a){q(a.g,function(d,m){this.g.hasOwnProperty(m)&&zt(d)},a),a.g={}}fi.prototype.N=function(){fi.aa.N.call(this),xm(this)},fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xc=c.JSON.stringify,dw=c.JSON.parse,hw=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Tc(){}Tc.prototype.h=null;function Tm(a){return a.h||(a.h=a.i())}function Sm(){}var pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sc(){ye.call(this,"d")}P(Sc,ye);function kc(){ye.call(this,"c")}P(kc,ye);var Pr={},km=null;function Yo(){return km=km||new mt}Pr.La="serverreachability";function Nm(a){ye.call(this,Pr.La,a)}P(Nm,ye);function gi(a){const d=Yo();Tt(d,new Nm(d))}Pr.STAT_EVENT="statevent";function Im(a,d){ye.call(this,Pr.STAT_EVENT,a),this.stat=d}P(Im,ye);function St(a){const d=Yo();Tt(d,new Im(d,a))}Pr.Ma="timingevent";function Am(a,d){ye.call(this,Pr.Ma,a),this.size=d}P(Am,ye);function yi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function mw(a,d,m,y,C,O){a.info(function(){if(a.g)if(O)for(var Q="",Ae=O.split("&"),it=0;it<Ae.length;it++){var _e=Ae[it].split("=");if(1<_e.length){var ft=_e[0];_e=_e[1];var pt=ft.split("_");Q=2<=pt.length&&pt[1]=="type"?Q+(ft+"="+_e+"&"):Q+(ft+"=redacted&")}}else Q=null;else Q=O;return"XMLHTTP REQ ("+y+") [attempt "+C+"]: "+d+`
`+m+`
`+Q})}function fw(a,d,m,y,C,O,Q){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+C+"]: "+d+`
`+m+`
`+O+" "+Q})}function as(a,d,m,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+gw(a,m)+(y?" "+y:"")})}function pw(a,d){a.info(function(){return"TIMEOUT: "+d})}vi.prototype.info=function(){};function gw(a,d){if(!a.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var y=m[a];if(!(2>y.length)){var C=y[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var Q=1;Q<C.length;Q++)C[Q]=""}}}}return xc(m)}catch{return d}}var Jo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nc;function Zo(){}P(Zo,Tc),Zo.prototype.g=function(){return new XMLHttpRequest},Zo.prototype.i=function(){return{}},Nc=new Zo;function Wn(a,d,m,y){this.j=a,this.i=d,this.l=m,this.R=y||1,this.U=new fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cm}function Cm(){this.i=null,this.g="",this.h=!1}var Rm={},Ic={};function Ac(a,d,m){a.L=1,a.v=ra(bn(d)),a.m=m,a.P=!0,Lm(a,null)}function Lm(a,d){a.F=Date.now(),ea(a),a.A=bn(a.v);var m=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Gm(m.i,"t",y),a.C=0,m=a.j.J,a.h=new Cm,a.g=hf(a.j,m?d:null,!a.m),0<a.O&&(a.M=new uw(E(a.Y,a,a.g),a.O)),d=a.U,m=a.g,y=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(bm[0]=C.toString()),C=bm);for(var O=0;O<C.length;O++){var Q=K(m,C[O],y||d.handleEvent,!1,d.h||d);if(!Q)break;d.g[Q.key]=Q}d=a.H?p(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),gi(),mw(a.i,a.u,a.A,a.l,a.R,a.m)}Wn.prototype.ca=function(a){a=a.target;const d=this.M;d&&xn(a)==3?d.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const pt=xn(this.g);var d=this.g.Ba();const us=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||ef(this.g)))){this.J||pt!=4||d==7||(d==8||0>=us?gi(3):gi(2)),Pc(this);var m=this.g.Z();this.X=m;t:if(Dm(this)){var y=ef(this.g);a="";var C=y.length,O=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),Ei(this);var Q="";break t}this.h.i=new c.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,a+=this.h.i.decode(y[d],{stream:!(O&&d==C-1)});y.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,fw(this.i,this.u,this.A,this.l,this.R,pt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,it=this.g;if((Ae=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ae)){var _e=Ae;break t}}_e=null}if(m=_e)as(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cc(this,m);else{this.o=!1,this.s=3,St(12),Cr(this),Ei(this);break e}}if(this.P){m=!0;let Zt;for(;!this.J&&this.C<Q.length;)if(Zt=yw(this,Q),Zt==Ic){pt==4&&(this.s=4,St(14),m=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==Rm){this.s=4,St(15),as(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else as(this.i,this.l,Zt,null),Cc(this,Zt);if(Dm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||Q.length!=0||this.h.h||(this.s=1,St(16),m=!1),this.o=this.o&&m,!m)as(this.i,this.l,Q,"[Invalid Chunked Response]"),Cr(this),Ei(this);else if(0<Q.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Vc(ft),ft.M=!0,St(11))}}else as(this.i,this.l,Q,null),Cc(this,Q);pt==4&&Cr(this),this.o&&!this.J&&(pt==4?lf(this.j,this):(this.o=!1,ea(this)))}else Dw(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Cr(this),Ei(this)}}}catch{}finally{}};function Dm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function yw(a,d){var m=a.C,y=d.indexOf(`
`,m);return y==-1?Ic:(m=Number(d.substring(m,y)),isNaN(m)?Rm:(y+=1,y+m>d.length?Ic:(d=d.slice(y,y+m),a.C=y+m,d)))}Wn.prototype.cancel=function(){this.J=!0,Cr(this)};function ea(a){a.S=Date.now()+a.I,Mm(a,a.I)}function Mm(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=yi(E(a.ba,a),d)}function Pc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(pw(this.i,this.A),this.L!=2&&(gi(),St(17)),Cr(this),this.s=2,Ei(this)):Mm(this,this.S-a)};function Ei(a){a.j.G==0||a.J||lf(a.j,a)}function Cr(a){Pc(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,xm(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function Cc(a,d){try{var m=a.j;if(m.G!=0&&(m.g==a||Rc(m.h,a))){if(!a.K&&Rc(m.h,a)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var C=y;if(C[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)ca(m),aa(m);else break e;Oc(m),St(18)}}else m.za=C[1],0<m.za-m.T&&37500>C[2]&&m.F&&m.v==0&&!m.C&&(m.C=yi(E(m.Za,m),6e3));if(1>=Fm(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Lr(m,11)}else if((a.K||m.g==a)&&ca(m),!w(d))for(C=m.Da.g.parse(d),d=0;d<C.length;d++){let _e=C[d];if(m.T=_e[0],_e=_e[1],m.G==2)if(_e[0]=="c"){m.K=_e[1],m.ia=_e[2];const ft=_e[3];ft!=null&&(m.la=ft,m.j.info("VER="+m.la));const pt=_e[4];pt!=null&&(m.Aa=pt,m.j.info("SVER="+m.Aa));const us=_e[5];us!=null&&typeof us=="number"&&0<us&&(y=1.5*us,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const Zt=a.g;if(Zt){const da=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(da){var O=y.h;O.g||da.indexOf("spdy")==-1&&da.indexOf("quic")==-1&&da.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Lc(O,O.h),O.h=null))}if(y.D){const Fc=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fc&&(y.ya=Fc,Le(y.I,y.D,Fc))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var Q=a;if(y.qa=df(y,y.J?y.ia:null,y.W),Q.K){Um(y.h,Q);var Ae=Q,it=y.L;it&&(Ae.I=it),Ae.B&&(Pc(Ae),ea(Ae)),y.g=Q}else of(y);0<m.i.length&&la(m)}else _e[0]!="stop"&&_e[0]!="close"||Lr(m,7);else m.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Lr(m,7):Mc(m):_e[0]!="noop"&&m.l&&m.l.ta(_e),m.v=0)}}gi(4)}catch{}}var vw=class{constructor(a,d){this.g=a,this.map=d}};function Om(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Fm(a){return a.h?1:a.g?a.g.size:0}function Rc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Lc(a,d){a.g?a.g.add(d):a.h=d}function Um(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Om.prototype.cancel=function(){if(this.i=qm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const m of a.g.values())d=d.concat(m.D);return d}return L(a.i)}function Ew(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],m=a.length,y=0;y<m;y++)d.push(a[y]);return d}d=[],m=0;for(y in a)d[m++]=a[y];return d}function ww(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var m=0;m<a;m++)d.push(m);return d}d=[],m=0;for(const y in a)d[m++]=y;return d}}}function Bm(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var m=ww(a),y=Ew(a),C=y.length,O=0;O<C;O++)d.call(void 0,y[O],m&&m[O],a)}var jm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _w(a,d){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var y=a[m].indexOf("="),C=null;if(0<=y){var O=a[m].substring(0,y);C=a[m].substring(y+1)}else O=a[m];d(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Rr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Rr){this.h=a.h,ta(this,a.j),this.o=a.o,this.g=a.g,na(this,a.s),this.l=a.l;var d=a.i,m=new bi;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),zm(this,m),this.m=a.m}else a&&(d=String(a).match(jm))?(this.h=!1,ta(this,d[1]||"",!0),this.o=wi(d[2]||""),this.g=wi(d[3]||"",!0),na(this,d[4]),this.l=wi(d[5]||"",!0),zm(this,d[6]||"",!0),this.m=wi(d[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}Rr.prototype.toString=function(){var a=[],d=this.j;d&&a.push(_i(d,Hm,!0),":");var m=this.g;return(m||d=="file")&&(a.push("//"),(d=this.o)&&a.push(_i(d,Hm,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(_i(m,m.charAt(0)=="/"?Tw:xw,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",_i(m,kw)),a.join("")};function bn(a){return new Rr(a)}function ta(a,d,m){a.j=m?wi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function na(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function zm(a,d,m){d instanceof bi?(a.i=d,Nw(a.i,a.h)):(m||(d=_i(d,Sw)),a.i=new bi(d,a.h))}function Le(a,d,m){a.i.set(d,m)}function ra(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function wi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function _i(a,d,m){return typeof a=="string"?(a=encodeURI(a).replace(d,bw),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function bw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hm=/[#\/\?@]/g,xw=/[#\?:]/g,Tw=/[#\?]/g,Sw=/[#\?@]/g,kw=/#/g;function bi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&_w(a.i,function(d,m){a.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=bi.prototype,t.add=function(a,d){$n(this),this.i=null,a=ls(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(d),this.h+=1,this};function Wm(a,d){$n(a),d=ls(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function $m(a,d){return $n(a),d=ls(a,d),a.g.has(d)}t.forEach=function(a,d){$n(this),this.g.forEach(function(m,y){m.forEach(function(C){a.call(d,C,y,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const C=a[y];for(let O=0;O<C.length;O++)m.push(d[y])}return m},t.V=function(a){$n(this);let d=[];if(typeof a=="string")$m(this,a)&&(d=d.concat(this.g.get(ls(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)d=d.concat(a[m])}return d},t.set=function(a,d){return $n(this),this.i=null,a=ls(this,a),$m(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Gm(a,d,m){Wm(a,d),0<m.length&&(a.i=null,a.g.set(ls(a,d),L(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const O=encodeURIComponent(String(y)),Q=this.V(y);for(y=0;y<Q.length;y++){var C=O;Q[y]!==""&&(C+="="+encodeURIComponent(String(Q[y]))),a.push(C)}}return this.i=a.join("&")};function ls(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Nw(a,d){d&&!a.j&&($n(a),a.i=null,a.g.forEach(function(m,y){var C=y.toLowerCase();y!=C&&(Wm(this,y),Gm(this,C,m))},a)),a.j=d}function Iw(a,d){const m=new vi;if(c.Image){const y=new Image;y.onload=I(Gn,m,"TestLoadImage: loaded",!0,d,y),y.onerror=I(Gn,m,"TestLoadImage: error",!1,d,y),y.onabort=I(Gn,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=I(Gn,m,"TestLoadImage: timeout",!1,d,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function Aw(a,d){const m=new vi,y=new AbortController,C=setTimeout(()=>{y.abort(),Gn(m,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(C),O.ok?Gn(m,"TestPingServer: ok",!0,d):Gn(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),Gn(m,"TestPingServer: error",!1,d)})}function Gn(a,d,m,y,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),y(m)}catch{}}function Pw(){this.g=new hw}function Cw(a,d,m){const y=m||"";try{Bm(a,function(C,O){let Q=C;h(C)&&(Q=xc(C)),d.push(y+O+"="+encodeURIComponent(Q))})}catch(C){throw d.push(y+"type="+encodeURIComponent("_badmap")),C}}function sa(a){this.l=a.Ub||null,this.j=a.eb||!1}P(sa,Tc),sa.prototype.g=function(){return new ia(this.l,this.j)},sa.prototype.i=function(a){return function(){return a}}({});function ia(a,d){mt.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ia,mt),t=ia.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ti(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Km(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Km(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?xi(this):Ti(this),this.readyState==3&&Km(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xi(this))},t.Qa=function(a){this.g&&(this.response=a,xi(this))},t.ga=function(){this.g&&xi(this)};function xi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ti(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=d.next();return a.join(`\r
`)};function Ti(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xm(a){let d="";return q(a,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function Dc(a,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Xm(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Le(a,d,m))}function je(a){mt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(je,mt);var Rw=/^https?$/i,Lw=["POST","PUT"];t=je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nc.g(),this.v=this.o?Tm(this.o):Tm(Nc),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){Qm(this,O);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var C in y)m.set(C,y[C]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())m.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Lw,d,void 0))||y||C||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,Q]of m)this.g.setRequestHeader(O,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zm(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Qm(this,O)}};function Qm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Ym(a),oa(a)}function Ym(a){a.A||(a.A=!0,Tt(a,"complete"),Tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Tt(this,"complete"),Tt(this,"abort"),oa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oa(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Jm(this):this.bb())},t.bb=function(){Jm(this)};function Jm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xn(a)!=4||a.Z()!=2)){if(a.u&&xn(a)==4)wm(a.Ea,0,a);else if(Tt(a,"readystatechange"),xn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=Q===0){var C=String(a.D).match(jm)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),y=!Rw.test(C?C.toLowerCase():"")}m=y}if(m)Tt(a,"complete"),Tt(a,"success");else{a.m=6;try{var O=2<xn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Ym(a)}}finally{oa(a)}}}}function oa(a,d){if(a.g){Zm(a);const m=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Tt(a,"ready");try{m.onreadystatechange=y}catch{}}}function Zm(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),dw(d)}};function ef(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Dw(a){const d={};a=(a.g&&2<=xn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var m=N(a[y]);const C=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=d[C]||[];d[C]=O,O.push(m)}_(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Si(a,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||d}function tf(a){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Si("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Si("baseRetryDelayMs",5e3,a),this.cb=Si("retryDelaySeedMs",1e4,a),this.Wa=Si("forwardChannelMaxRetries",2,a),this.wa=Si("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Om(a&&a.concurrentRequestLimit),this.Da=new Pw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=tf.prototype,t.la=8,t.G=1,t.connect=function(a,d,m,y){St(0),this.W=a,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=df(this,null,this.W),la(this)};function Mc(a){if(nf(a),a.G==3){var d=a.U++,m=bn(a.I);if(Le(m,"SID",a.K),Le(m,"RID",d),Le(m,"TYPE","terminate"),ki(a,m),d=new Wn(a,a.j,d),d.L=2,d.v=ra(bn(m)),m=!1,c.navigator&&c.navigator.sendBeacon)try{m=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&c.Image&&(new Image().src=d.v,m=!0),m||(d.g=hf(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ea(d)}uf(a)}function aa(a){a.g&&(Vc(a),a.g.cancel(),a.g=null)}function nf(a){aa(a),a.u&&(c.clearTimeout(a.u),a.u=null),ca(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function la(a){if(!Vm(a.h)&&!a.s){a.s=!0;var d=a.Ga;Se||te(),$||(Se(),$=!0),Y.add(d,a),a.B=0}}function Mw(a,d){return Fm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=yi(E(a.Ga,a,d),cf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Wn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=p(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=sf(this,C,d),m=bn(this.I),Le(m,"RID",a),Le(m,"CVER",22),this.D&&Le(m,"X-HTTP-Session-Id",this.D),ki(this,m),O&&(this.O?d="headers="+encodeURIComponent(String(Xm(O)))+"&"+d:this.m&&Dc(m,this.m,O)),Lc(this.h,C),this.Ua&&Le(m,"TYPE","init"),this.P?(Le(m,"$req",d),Le(m,"SID","null"),C.T=!0,Ac(C,m,null)):Ac(C,m,d),this.G=2}}else this.G==3&&(a?rf(this,a):this.i.length==0||Vm(this.h)||rf(this))};function rf(a,d){var m;d?m=d.l:m=a.U++;const y=bn(a.I);Le(y,"SID",a.K),Le(y,"RID",m),Le(y,"AID",a.T),ki(a,y),a.m&&a.o&&Dc(y,a.m,a.o),m=new Wn(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),d&&(a.i=d.D.concat(a.i)),d=sf(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Lc(a.h,m),Ac(m,y,d)}function ki(a,d){a.H&&q(a.H,function(m,y){Le(d,y,m)}),a.l&&Bm({},function(m,y){Le(d,y,m)})}function sf(a,d,m){m=Math.min(a.i.length,m);var y=a.l?E(a.l.Na,a.l,a):null;e:{var C=a.i;let O=-1;for(;;){const Q=["count="+m];O==-1?0<m?(O=C[0].g,Q.push("ofs="+O)):O=0:Q.push("ofs="+O);let Ae=!0;for(let it=0;it<m;it++){let _e=C[it].g;const ft=C[it].map;if(_e-=O,0>_e)O=Math.max(0,C[it].g-100),Ae=!1;else try{Cw(ft,Q,"req"+_e+"_")}catch{y&&y(ft)}}if(Ae){y=Q.join("&");break e}}}return a=a.i.splice(0,m),d.D=a,y}function of(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Se||te(),$||(Se(),$=!0),Y.add(d,a),a.v=0}}function Oc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=yi(E(a.Fa,a),cf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,af(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=yi(E(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),aa(this),af(this))};function Vc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function af(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=bn(a.qa);Le(d,"RID","rpc"),Le(d,"SID",a.K),Le(d,"AID",a.T),Le(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(d,"TO",a.ja),Le(d,"TYPE","xmlhttp"),ki(a,d),a.m&&a.o&&Dc(d,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=ra(bn(d)),m.m=null,m.P=!0,Lm(m,a)}t.Za=function(){this.C!=null&&(this.C=null,aa(this),Oc(this),St(19))};function ca(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function lf(a,d){var m=null;if(a.g==d){ca(a),Vc(a),a.g=null;var y=2}else if(Rc(a.h,d))m=d.D,Um(a.h,d),y=1;else return;if(a.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var C=a.B;y=Yo(),Tt(y,new Am(y,m)),la(a)}else of(a);else if(C=d.s,C==3||C==0&&0<d.X||!(y==1&&Mw(a,d)||y==2&&Oc(a)))switch(m&&0<m.length&&(d=a.h,d.i=d.i.concat(m)),C){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function cf(a,d){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*d}function Lr(a,d){if(a.j.info("Error code "+d),d==2){var m=E(a.fb,a),y=a.Xa;const C=!y;y=new Rr(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ta(y,"https"),ra(y),C?Iw(y.toString(),m):Aw(y.toString(),m)}else St(2);a.G=0,a.l&&a.l.sa(d),uf(a),nf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function uf(a){if(a.G=0,a.ka=[],a.l){const d=qm(a.h);(d.length!=0||a.i.length!=0)&&(M(a.ka,d),M(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function df(a,d,m){var y=m instanceof Rr?bn(m):new Rr(m);if(y.g!="")d&&(y.g=d+"."+y.g),na(y,y.s);else{var C=c.location;y=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var O=new Rr(null);y&&ta(O,y),d&&(O.g=d),C&&na(O,C),m&&(O.l=m),y=O}return m=a.D,d=a.ya,m&&d&&Le(y,m,d),Le(y,"VER",a.la),ki(a,y),y}function hf(a,d,m){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new je(new sa({eb:m})):new je(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mf(){}t=mf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ua(){}ua.prototype.g=function(a,d){return new Mt(a,d)};function Mt(a,d){mt.call(this),this.g=new tf(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!w(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new cs(this)}P(Mt,mt),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Mc(this.g)},Mt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=xc(a),a=m);d.i.push(new vw(d.Ya++,a)),d.G==3&&la(d)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Mc(this.g),delete this.g,Mt.aa.N.call(this)};function ff(a){Sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const m in d){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}P(ff,Sc);function pf(){kc.call(this),this.status=1}P(pf,kc);function cs(a){this.g=a}P(cs,mf),cs.prototype.ua=function(){Tt(this.g,"a")},cs.prototype.ta=function(a){Tt(this.g,new ff(a))},cs.prototype.sa=function(a){Tt(this.g,new pf)},cs.prototype.ra=function(){Tt(this.g,"b")},ua.prototype.createWebChannel=ua.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,Wv=function(){return new ua},Hv=function(){return Yo()},zv=Pr,Td={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Jo.NO_ERROR=0,Jo.TIMEOUT=8,Jo.HTTP_ERROR=6,Ya=Jo,Pm.COMPLETE="complete",jv=Pm,Sm.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",mt.prototype.listen=mt.prototype.K,ji=Sm,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,Bv=je}).apply(typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{});const ng="@firebase/firestore";/**
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
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */let ui="10.14.0";/**
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
 */const Jr=new Rh("@firebase/firestore");function Mi(){return Jr.logLevel}function ee(t,...e){if(Jr.logLevel<=ve.DEBUG){const n=e.map(Hh);Jr.debug(`Firestore (${ui}): ${t}`,...n)}}function Bn(t,...e){if(Jr.logLevel<=ve.ERROR){const n=e.map(Hh);Jr.error(`Firestore (${ui}): ${t}`,...n)}}function Js(t,...e){if(Jr.logLevel<=ve.WARN){const n=e.map(Hh);Jr.warn(`Firestore (${ui}): ${t}`,...n)}}function Hh(t){if(typeof t=="string")return t;try{/**
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
 */function ie(t="Unexpected state"){const e=`FIRESTORE (${ui}) INTERNAL ASSERTION FAILED: `+t;throw Bn(e),new Error(e)}function Ne(t,e){t||ie()}function le(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $v{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class XS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QS{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ln,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new $v(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Et(e)}}class YS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class JS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ek{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new ZS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function tk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Gv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=tk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new et(0,0))}static max(){return new ae(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class No{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(),r===void 0?r=e.length-n:r>e.length-n&&ie(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return No.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof No?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends No{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const nk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends No{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return nk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ne(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ne(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ne(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ve.fromString(e))}static fromName(e){return new re(Ve.fromString(e).popFirst(5))}static empty(){return new re(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ve(e.slice()))}}function rk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new _r(s,re.empty(),e)}function sk(t){return new _r(t.readTime,t.key,-1)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(ae.min(),re.empty(),-1)}static max(){return new _r(ae.max(),re.empty(),-1)}}function ik(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const ok="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ak{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ho(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==ok)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(s=>s?W.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new W((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new W((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function lk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wh.oe=-1;function lc(t){return t==null}function Dl(t){return t===0&&1/t==-1/0}function ck(t){return typeof t=="number"&&Number.isInteger(t)&&!Dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function rg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ie();const e=this.left.check();if(e!==this.right.check())throw ie();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ie()}get value(){throw ie()}get color(){throw ie()}get left(){throw ie()}get right(){throw ie()}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sg(this.data.getIterator())}getIteratorFrom(e){return new sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class sn{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new sn([])}unionWith(e){let n=new ut(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Xv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xv("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const uk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=uk.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */function $h(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gh(t){const e=t.mapValue.fields.__previous_value__;return $h(e)?Gh(e):e}function Io(t){const e=br(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class dk{constructor(e,n,r,s,i,o,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class Ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ra={mapValue:{}};function es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$h(t)?4:mk(t)?9007199254740991:hk(t)?10:11:ie()}function wn(t,e){if(t===e)return!0;const n=es(t);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Io(t).isEqual(Io(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=br(s.timestampValue),c=br(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Zr(s.bytesValue).isEqual(Zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?Dl(o)===Dl(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(rg(o)!==rg(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!wn(o[u],c[u])))return!1;return!0}(t,e);default:return ie()}}function Po(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function ei(t,e){if(t===e)return 0;const n=es(t),r=es(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=We(i.integerValue||i.doubleValue),u=We(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(t,e);case 3:return ig(t.timestampValue,e.timestampValue);case 4:return ig(Io(t),Io(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Zr(i),u=Zr(o);return c.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=be(c[h],u[h]);if(f!==0)return f}return be(c.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=be(We(i.latitude),We(o.latitude));return c!==0?c:be(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return og(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,u,h,f;const g=i.fields||{},E=o.fields||{},I=(c=g.value)===null||c===void 0?void 0:c.arrayValue,P=(u=E.value)===null||u===void 0?void 0:u.arrayValue,L=be(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:og(I,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ra.mapValue&&o===Ra.mapValue)return 0;if(i===Ra.mapValue)return 1;if(o===Ra.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const E=be(u[g],f[g]);if(E!==0)return E;const I=ei(c[u[g]],h[f[g]]);if(I!==0)return I}return be(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ie()}}function ig(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=br(t),r=br(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function og(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ei(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function ti(t){return Sd(t)}function Sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Sd(n.fields[o])}`;return s+"}"}(t.mapValue):ie()}function kd(t){return!!t&&"integerValue"in t}function Kh(t){return!!t&&"arrayValue"in t}function ag(t){return!!t&&"nullValue"in t}function lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function hk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function no(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=no(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=no(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=no(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){di(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new $t(no(this.value))}}function Qv(t){const e=[];return di(t.fields,(n,r)=>{const s=new lt([n]);if(Ja(r)){const i=Qv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new sn(e)}/**
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
 */class _t{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new _t(e,0,ae.min(),ae.min(),ae.min(),$t.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,ae.min(),ae.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ae.min(),ae.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ml{constructor(e,n){this.position=e,this.inclusive=n}}function cg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=ei(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ug(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ol{constructor(e,n="asc"){this.field=e,this.dir=n}}function fk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yv{}class Je extends Yv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gk(e,n,r):n==="array-contains"?new Ek(e,r):n==="in"?new wk(e,r):n==="not-in"?new _k(e,r):n==="array-contains-any"?new bk(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yk(e,r):new vk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ei(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends Yv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new _n(e,n)}matches(e){return Jv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Jv(t){return t.op==="and"}function Zv(t){return pk(t)&&Jv(t)}function pk(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function Nd(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+ti(t.value);if(Zv(t))return t.filters.map(e=>Nd(e)).join(",");{const e=t.filters.map(n=>Nd(n)).join(",");return`${t.op}(${e})`}}function eE(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)}(t,e):t instanceof _n?function(r,s){return s instanceof _n&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&eE(o,s.filters[c]),!0):!1}(t,e):void ie()}function tE(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${ti(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(tE).join(" ,")+"}"}(t):"Filter"}class gk extends Je{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class yk extends Je{constructor(e,n){super(e,"in",n),this.keys=nE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vk extends Je{constructor(e,n){super(e,"not-in",n),this.keys=nE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class Ek extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kh(n)&&Po(n.arrayValue,this.value)}}class wk extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class _k extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Po(this.value.arrayValue,n)}}class bk extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}/**
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
 */class xk{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function dg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xk(t,e,n,r,s,i,o)}function Xh(t){const e=le(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ti(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ti(r)).join(",")),e.ue=n}return e.ue}function Qh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ug(t.startAt,e.startAt)&&ug(t.endAt,e.endAt)}function Id(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class cc{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Tk(t,e,n,r,s,i,o,c){return new cc(t,e,n,r,s,i,o,c)}function Yh(t){return new cc(t)}function hg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Sk(t){return t.collectionGroup!==null}function ro(t){const e=le(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ut(lt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ol(i,r))}),n.has(lt.keyField().canonicalString())||e.ce.push(new Ol(lt.keyField(),r))}return e.ce}function vn(t){const e=le(t);return e.le||(e.le=kk(e,ro(t))),e.le}function kk(t,e){if(t.limitType==="F")return dg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ol(s.field,i)});const n=t.endAt?new Ml(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ml(t.startAt.position,t.startAt.inclusive):null;return dg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ad(t,e,n){return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uc(t,e){return Qh(vn(t),vn(e))&&t.limitType===e.limitType}function rE(t){return`${Xh(vn(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>tE(s)).join(", ")}]`),lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ti(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ti(s)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ro(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,u){const h=cg(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,ro(r),s)||r.endAt&&!function(o,c,u){const h=cg(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,ro(r),s))}(t,e)}function Nk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sE(t){return(e,n)=>{let r=!1;for(const s of ro(t)){const i=Ik(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ik(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,c){const u=o.data.field(i),h=c.data.field(i);return u!==null&&h!==null?ei(u,h):ie()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie()}}/**
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
 */class hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Kv(this.inner)}size(){return this.innerSize}}/**
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
 */const Ak=new Be(re.comparator);function jn(){return Ak}const iE=new Be(re.comparator);function zi(...t){let e=iE;for(const n of t)e=e.insert(n.key,n);return e}function oE(t){let e=iE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qr(){return so()}function aE(){return so()}function so(){return new hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Pk=new Be(re.comparator),Ck=new ut(re.comparator);function ge(...t){let e=Ck;for(const n of t)e=e.add(n);return e}const Rk=new ut(be);function Lk(){return Rk}/**
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
 */function Jh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dl(e)?"-0":e}}function lE(t){return{integerValue:""+t}}function Dk(t,e){return ck(e)?lE(e):Jh(t,e)}/**
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
 */class hc{constructor(){this._=void 0}}function Mk(t,e,n){return t instanceof Vl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$h(i)&&(i=Gh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Co?uE(t,e):t instanceof Ro?dE(t,e):function(s,i){const o=cE(s,i),c=mg(o)+mg(s.Pe);return kd(o)&&kd(s.Pe)?lE(c):Jh(s.serializer,c)}(t,e)}function Ok(t,e,n){return t instanceof Co?uE(t,e):t instanceof Ro?dE(t,e):n}function cE(t,e){return t instanceof Fl?function(r){return kd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Vl extends hc{}class Co extends hc{constructor(e){super(),this.elements=e}}function uE(t,e){const n=hE(e);for(const r of t.elements)n.some(s=>wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ro extends hc{constructor(e){super(),this.elements=e}}function dE(t,e){let n=hE(e);for(const r of t.elements)n=n.filter(s=>!wn(s,r));return{arrayValue:{values:n}}}class Fl extends hc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function mg(t){return We(t.integerValue||t.doubleValue)}function hE(t){return Kh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Vk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Co&&s instanceof Co||r instanceof Ro&&s instanceof Ro?Zs(r.elements,s.elements,wn):r instanceof Fl&&s instanceof Fl?wn(r.Pe,s.Pe):r instanceof Vl&&s instanceof Vl}(t.transform,e.transform)}class Fk{constructor(e,n){this.version=e,this.transformResults=n}}class Dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function mE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pE(t.key,Dn.none()):new $o(t.key,t.data,Dn.none());{const n=t.data,r=$t.empty();let s=new ut(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new is(t.key,r,new sn(s.toArray()),Dn.none())}}function Uk(t,e,n){t instanceof $o?function(s,i,o){const c=s.value.clone(),u=pg(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof is?function(s,i,o){if(!Za(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=pg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(fE(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n,r){return t instanceof $o?function(i,o,c,u){if(!Za(i.precondition,o))return c;const h=i.value.clone(),f=gg(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof is?function(i,o,c,u){if(!Za(i.precondition,o))return c;const h=gg(i.fieldTransforms,u,o),f=o.data;return f.setAll(fE(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,c){return Za(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function qk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cE(r.transform,s||null);i!=null&&(n===null&&(n=$t.empty()),n.set(r.field,i))}return n||null}function fg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zs(r,s,(i,o)=>Vk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $o extends mc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class is extends mc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pg(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Ok(o,c,n[s]))}return r}function gg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Mk(i,o,e))}return r}class pE extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bk extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Uk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const u=mE(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>fg(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>fg(n,r))}}class Zh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return Pk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zh(e,n,r,s)}}/**
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
 */class zk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Hk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,Ee;function Wk(t){switch(t){default:return ie();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function gE(t){if(t===void 0)return Bn("GRPC error has no .code"),H.UNKNOWN;switch(t){case Ke.OK:return H.OK;case Ke.CANCELLED:return H.CANCELLED;case Ke.UNKNOWN:return H.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return H.INTERNAL;case Ke.UNAVAILABLE:return H.UNAVAILABLE;case Ke.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ke.NOT_FOUND:return H.NOT_FOUND;case Ke.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ke.ABORTED:return H.ABORTED;case Ke.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ke.DATA_LOSS:return H.DATA_LOSS;default:return ie()}}(Ee=Ke||(Ke={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $k(){return new TextEncoder}/**
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
 */const Gk=new zr([4294967295,4294967295],0);function yg(t){const e=$k().encode(t),n=new qv;return n.update(e),new Uint8Array(n.digest())}function vg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zr([n,r],0),new zr([s,i],0)]}class em{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hi(`Invalid padding: ${n}`);if(r<0)throw new Hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=zr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(zr.fromNumber(r)));return s.compare(Gk)===1&&(s=new zr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=yg(e),[r,s]=vg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new em(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=yg(e),[r,s]=vg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(ae.min(),s,new Be(be),jn(),ge())}}class Go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Go(r,n,ge(),ge(),ge())}}/**
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
 */class el{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class yE{constructor(e,n){this.targetId=e,this.me=n}}class vE{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Eg{constructor(){this.fe=0,this.ge=_g(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie()}}),new Go(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=_g()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Kk{constructor(e){this.Le=e,this.Be=new Map,this.ke=jn(),this.qe=wg(),this.Qe=new Be(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ie()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Id(i))if(r===0){const o=new re(i.path);this.Ue(n,o,_t.newNoDocument(o,ae.min()))}else Ne(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),u=c?this.Xe(c,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Zr(r).toUint8Array()}catch(u){if(u instanceof Xv)return Js("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new em(o,s,i)}catch(u){return Js(u instanceof Hi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Id(c.target)){const u=new re(c.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,_t.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new fc(e,n,this.Qe,this.ke,r);return this.ke=jn(),this.qe=wg(),this.Qe=new Be(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Eg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Eg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wg(){return new Be(re.comparator)}function _g(){return new Be(re.comparator)}const Xk={asc:"ASCENDING",desc:"DESCENDING"},Qk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yk={and:"AND",or:"OR"};class Jk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pd(t,e){return t.useProto3Json||lc(e)?e:{value:e}}function Ul(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zk(t,e){return Ul(t,e.toTimestamp())}function En(t){return Ne(!!t),ae.fromTimestamp(function(n){const r=br(n);return new et(r.seconds,r.nanos)}(t))}function tm(t,e){return Cd(t,e).canonicalString()}function Cd(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function wE(t){const e=Ve.fromString(t);return Ne(SE(e)),e}function Rd(t,e){return tm(t.databaseId,e.path)}function vu(t,e){const n=wE(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(bE(n))}function _E(t,e){return tm(t.databaseId,e)}function eN(t){const e=wE(t);return e.length===4?Ve.emptyPath():bE(e)}function Ld(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bE(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bg(t,e,n){return{name:Rd(t,e),fields:n.value.mapValue.fields}}function tN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ne(f===void 0||typeof f=="string"),ht.fromBase64String(f||"")):(Ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ht.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?H.UNKNOWN:gE(h.code);return new ne(f,h.message||"")}(o);n=new vE(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vu(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):ae.min(),c=new $t({mapValue:{fields:r.document.fields}}),u=_t.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new el(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vu(t,r.document),i=r.readTime?En(r.readTime):ae.min(),o=_t.newNoDocument(s,i),c=r.removedTargetIds||[];n=new el([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vu(t,r.document),i=r.removedTargetIds||[];n=new el([],i,s,null)}else{if(!("filter"in e))return ie();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Hk(s,i),c=r.targetId;n=new yE(c,o)}}return n}function nN(t,e){let n;if(e instanceof $o)n={update:bg(t,e.key,e.value)};else if(e instanceof pE)n={delete:Rd(t,e.key)};else if(e instanceof is)n={update:bg(t,e.key,e.data),updateMask:dN(e.fieldMask)};else{if(!(e instanceof Bk))return ie();n={verify:Rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fl)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ie()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Zk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie()}(t,e.precondition)),n}function rN(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(ae.min())&&(o=En(i)),new Fk(o,s.transformResults||[])}(n,e))):[]}function sN(t,e){return{documents:[_E(t,e.path)]}}function iN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_E(t,s);const i=function(h){if(h.length!==0)return TE(_n.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(E){return{field:Es(E.field),direction:lN(E.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Pd(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function oN(t){let e=eN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const E=xE(g);return E instanceof _n&&Zv(E)?E.getFilters():[E]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(E=>function(P){return new Ol(ws(P.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(E))}(n.orderBy));let c=null;n.limit&&(c=function(g){let E;return E=typeof g=="object"?g.value:g,lc(E)?null:E}(n.limit));let u=null;n.startAt&&(u=function(g){const E=!!g.before,I=g.values||[];return new Ml(I,E)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const E=!g.before,I=g.values||[];return new Ml(I,E)}(n.endAt)),Tk(e,s,o,i,c,"F",u,h)}function aN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ws(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ws(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ws(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ws(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ie()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(ws(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>xE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie()}}(n.compositeFilter.op))}(t):ie()}function lN(t){return Xk[t]}function cN(t){return Qk[t]}function uN(t){return Yk[t]}function Es(t){return{fieldPath:t.canonicalString()}}function ws(t){return lt.fromServerFormat(t.fieldPath)}function TE(t){return t instanceof Je?function(n){if(n.op==="=="){if(lg(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NAN"}};if(ag(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lg(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NAN"}};if(ag(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(n.field),op:cN(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(s=>TE(s));return r.length===1?r[0]:{compositeFilter:{op:uN(n.op),filters:r}}}(t):ie()}function dN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class or{constructor(e,n,r,s,i=ae.min(),o=ae.min(),c=ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hN{constructor(e){this.ct=e}}function mN(t){const e=oN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ad(e,e.limit,"L"):e}/**
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
 */class fN{constructor(){this.un=new pN}addToCollectionParentIndex(e,n){return this.un.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(_r.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class pN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Ve.comparator)).toArray()}}/**
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
 */class ni{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ni(0)}static kn(){return new ni(-1)}}/**
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
 */class gN{constructor(){this.changes=new hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class vN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&io(r.mutation,s,sn.empty(),et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=zi();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=jn();const o=so(),c=function(){return so()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof is)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),io(f.mutation,h,f.mutation.getFieldMask(),et.now())):o.set(h.key,sn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return c.set(h,new yN(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,n){const r=so();let s=new Be((o,c)=>o-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||sn.empty();f=c.applyToLocalView(h,f),r.set(u,f);const g=(s.get(c.batchId)||ge()).add(u);s=s.insert(c.batchId,g)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,g=aE();f.forEach(E=>{if(!i.has(E)){const I=mE(n.get(E),r.get(E));I!==null&&g.set(E,I),i=i.add(E)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):W.resolve(qr());let c=-1,u=i;return o.next(h=>W.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?W.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{u=u.insert(f,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ge())).next(f=>({batchId:c,changes:oE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=zi();return this.indexManager.getCollectionParents(e,i).next(c=>W.forEach(c,u=>{const h=function(g,E){return new cc(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,E)=>{o=o.insert(g,E)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,_t.newInvalidDocument(f)))});let c=zi();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&io(f.mutation,h,sn.empty(),et.now()),dc(n,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class EN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return W.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:mN(s.bundledQuery),readTime:En(s.readTime)}}(n)),W.resolve()}}/**
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
 */class wN{constructor(){this.overlays=new Be(re.comparator),this.Ir=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qr();return W.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const s=qr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return W.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=qr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=qr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return W.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zk(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class _N{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
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
 */class nm{constructor(){this.Tr=new ut(tt.Er),this.dr=new ut(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new Ve([])),r=new tt(n,e),s=new tt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Ve([])),r=new tt(n,e),s=new tt(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||be(e.wr,n.wr)}static Ar(e,n){return be(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
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
 */class bN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ut(tt.Er)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jk(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new tt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return W.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),s=new tt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),W.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(be);return n.forEach(s=>{const i=new tt(s,0),o=new tt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),W.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new tt(new re(i),0);let c=new ut(be);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.wr)),!0)},o),W.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return W.forEach(n.mutations,s=>{const i=new tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new tt(n,0),s=this.br.firstAfterOrEqual(r);return W.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class xN{constructor(e){this.Mr=e,this.docs=function(){return new Be(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=jn();const o=n.path,c=new re(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ik(sk(f),r)<=0||(s.has(f.key)||dc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return W.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie()}Or(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TN(this)}getSize(e){return W.resolve(this.size)}}class TN extends gN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class SN{constructor(e){this.persistence=e,this.Nr=new hi(n=>Xh(n),Qh),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nm,this.targetCount=0,this.kr=ni.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),W.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ni(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Kn(n),W.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),W.waitFor(i).next(()=>s)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),W.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Br.containsKey(n))}}/**
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
 */class kN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Wh(0),this.Kr=!1,this.Kr=!0,this.$r=new _N,this.referenceDelegate=e(this),this.Ur=new SN(this),this.indexManager=new fN,this.remoteDocumentCache=function(s){return new xN(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new hN(n),this.Gr=new EN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new bN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new NN(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return W.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class NN extends ak{constructor(e){super(),this.currentSequenceNumber=e}}class rm{constructor(e){this.persistence=e,this.Jr=new nm,this.Yr=null}static Zr(e){return new rm(e)}get Xr(){if(this.Yr)return this.Yr;throw ie()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),W.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Xr,r=>{const s=re.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ae.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return W.or([()=>W.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class sm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sm(e,n.fromCache,r,s)}}/**
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
 */class IN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class AN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ex()?8:lk(xt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new IN;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Mi()<=ve.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),W.resolve()):(Mi()<=ve.DEBUG&&ee("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Mi()<=ve.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):W.resolve())}Yi(e,n){if(hg(n))return W.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ad(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,c);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ad(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return hg(n)||s.isEqual(ae.min())?W.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?W.resolve(null):(Mi()<=ve.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vs(n)),this.rs(e,o,n,rk(s,-1)).next(c=>c))})}ts(e,n){let r=new ut(sE(e));return n.forEach((s,i)=>{dc(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Mi()<=ve.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",vs(n)),this.Ji.getDocumentsMatchingQuery(e,n,_r.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class PN{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Be(be),this._s=new hi(i=>Xh(i),Qh),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function CN(t,e,n,r){return new PN(t,e,n,r)}async function kE(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let u=ge();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function RN(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const g=h.batch,E=g.keys();let I=W.resolve();return E.forEach(P=>{I=I.next(()=>f.getEntry(u,P)).next(L=>{const M=h.docVersions.get(P);Ne(M!==null),L.version.compareTo(M)<0&&(g.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),f.addEntry(L)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ge();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function NE(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function LN(t,e){const n=le(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,g)=>{const E=s.get(g);if(!E)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,g)));let I=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?I=I.withResumeToken(ht.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(g,I),function(L,M,x){return L.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(E,I,f)&&c.push(n.Ur.updateTargetData(i,I))});let u=jn(),h=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(DN(i,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(ae.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return W.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function DN(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=jn();return n.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(ae.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):ee("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function MN(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ON(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,W.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Dd(t,e,n){const r=le(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wo(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function xg(t,e,n){const r=le(t);let s=ae.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=le(u),E=g._s.get(f);return E!==void 0?W.resolve(g.os.get(E)):g.Ur.getTargetData(h,f)}(r,o,vn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:ge())).next(c=>(VN(r,Nk(e),c),{documents:c,Ts:i})))}function VN(t,e,n){let r=t.us.get(e)||ae.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Tg{constructor(){this.activeTargetIds=Lk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FN{constructor(){this.so=new Tg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Tg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UN{_o(e){}shutdown(){}}/**
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
 */class Sg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let La=null;function Eu(){return La===null?La=function(){return 268435456+Math.round(2147483648*Math.random())}():La++,"0x"+La.toString(16)}/**
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
 */const qN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class BN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const vt="WebChannelConnection";class jN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=Eu(),u=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${c}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(f=>(ee("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw Js("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ui}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=qN[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Eu();return new Promise((o,c)=>{const u=new Bv;u.setWithCredentials(!0),u.listenOnce(jv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ya.NO_ERROR:const f=u.getResponseJson();ee(vt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Ya.TIMEOUT:ee(vt,`RPC '${e}' ${i} timed out`),c(new ne(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ya.HTTP_ERROR:const g=u.getStatus();if(ee(vt,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const I=E==null?void 0:E.error;if(I&&I.status&&I.message){const P=function(M){const x=M.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(x)>=0?x:H.UNKNOWN}(I.status);c(new ne(P,I.message))}else c(new ne(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ne(H.UNAVAILABLE,"Connection failed."));break;default:ie()}}finally{ee(vt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(vt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Eu(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Wv(),c=Hv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");ee(vt,`Creating RPC '${e}' stream ${s}: ${f}`,u);const g=o.createWebChannel(f,u);let E=!1,I=!1;const P=new BN({Io:M=>{I?ee(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(E||(ee(vt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),ee(vt,`RPC '${e}' stream ${s} sending:`,M),g.send(M))},To:()=>g.close()}),L=(M,x,w)=>{M.listen(x,k=>{try{w(k)}catch(R){setTimeout(()=>{throw R},0)}})};return L(g,ji.EventType.OPEN,()=>{I||(ee(vt,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),L(g,ji.EventType.CLOSE,()=>{I||(I=!0,ee(vt,`RPC '${e}' stream ${s} transport closed`),P.So())}),L(g,ji.EventType.ERROR,M=>{I||(I=!0,Js(vt,`RPC '${e}' stream ${s} transport errored:`,M),P.So(new ne(H.UNAVAILABLE,"The operation could not be completed")))}),L(g,ji.EventType.MESSAGE,M=>{var x;if(!I){const w=M.data[0];Ne(!!w);const k=w,R=k.error||((x=k[0])===null||x===void 0?void 0:x.error);if(R){ee(vt,`RPC '${e}' stream ${s} received error:`,R);const V=R.status;let q=function(v){const T=Ke[v];if(T!==void 0)return gE(T)}(V),_=R.message;q===void 0&&(q=H.INTERNAL,_="Unknown error status: "+V+" with message "+R.message),I=!0,P.So(new ne(q,_)),g.close()}else ee(vt,`RPC '${e}' stream ${s} received:`,w),P.bo(w)}}),L(c,zv.STAT_EVENT,M=>{M.stat===Td.PROXY?ee(vt,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Td.NOPROXY&&ee(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function wu(){return typeof document<"u"?document:null}/**
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
 */function pc(t){return new Jk(t,!0)}/**
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
 */class IE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class AE{constructor(e,n,r,s,i,o,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new IE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ne(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zN extends AE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=tN(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?En(o.readTime):ae.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ld(this.serializer),n.addTarget=function(i,o){let c;const u=o.target;if(c=Id(u)?{documents:sN(i,u)}:{query:iN(i,u)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=EE(i,o.resumeToken);const h=Pd(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ae.min())>0){c.readTime=Ul(i,o.snapshotVersion.toTimestamp());const h=Pd(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=aN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ld(this.serializer),n.removeTarget=e,this.a_(n)}}class HN extends AE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=rN(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ld(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nN(this.serializer,r))};this.a_(n)}}/**
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
 */class WN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Cd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(H.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Cd(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(H.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class $N{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Bn(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class GN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{os(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=le(u);h.L_.add(4),await Ko(h),h.q_.set("Unknown"),h.L_.delete(4),await gc(h)}(this))})}),this.q_=new $N(r,s)}}async function gc(t){if(os(t))for(const e of t.B_)await e(!0)}async function Ko(t){for(const e of t.B_)await e(!1)}function PE(t,e){const n=le(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lm(n)?am(n):mi(n).r_()&&om(n,e))}function im(t,e){const n=le(t),r=mi(n);n.N_.delete(e),r.r_()&&CE(n,e),n.N_.size===0&&(r.r_()?r.o_():os(n)&&n.q_.set("Unknown"))}function om(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mi(t).A_(e)}function CE(t,e){t.Q_.xe(e),mi(t).R_(e)}function am(t){t.Q_=new Kk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),mi(t).start(),t.q_.v_()}function lm(t){return os(t)&&!mi(t).n_()&&t.N_.size>0}function os(t){return le(t).L_.size===0}function RE(t){t.Q_=void 0}async function KN(t){t.q_.set("Online")}async function XN(t){t.N_.forEach((e,n)=>{om(t,e)})}async function QN(t,e){RE(t),lm(t)?(t.q_.M_(e),am(t)):t.q_.set("Unknown")}async function YN(t,e,n){if(t.q_.set("Online"),e instanceof vE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ql(t,r)}else if(e instanceof el?t.Q_.Ke(e):e instanceof yE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ae.min()))try{const r=await NE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),CE(i,u);const g=new or(f.target,u,h,f.sequenceNumber);om(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await ql(t,r)}}async function ql(t,e,n){if(!Wo(e))throw e;t.L_.add(1),await Ko(t),t.q_.set("Offline"),n||(n=()=>NE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await gc(t)})}function LE(t,e){return e().catch(n=>ql(t,n,e))}async function yc(t){const e=le(t),n=xr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;JN(e);)try{const s=await MN(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,ZN(e,s)}catch(s){await ql(e,s)}DE(e)&&ME(e)}function JN(t){return os(t)&&t.O_.length<10}function ZN(t,e){t.O_.push(e);const n=xr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function DE(t){return os(t)&&!xr(t).n_()&&t.O_.length>0}function ME(t){xr(t).start()}async function eI(t){xr(t).p_()}async function tI(t){const e=xr(t);for(const n of t.O_)e.m_(n.mutations)}async function nI(t,e,n){const r=t.O_.shift(),s=Zh.from(r,e,n);await LE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yc(t)}async function rI(t,e){e&&xr(t).V_&&await async function(r,s){if(function(o){return Wk(o)&&o!==H.ABORTED}(s.code)){const i=r.O_.shift();xr(r).s_(),await LE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yc(r)}}(t,e),DE(t)&&ME(t)}async function kg(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=os(n);n.L_.add(3),await Ko(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await gc(n)}async function sI(t,e){const n=le(t);e?(n.L_.delete(2),await gc(n)):e||(n.L_.add(2),await Ko(n),n.q_.set("Unknown"))}function mi(t){return t.K_||(t.K_=function(n,r,s){const i=le(n);return i.w_(),new zN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:KN.bind(null,t),Ro:XN.bind(null,t),mo:QN.bind(null,t),d_:YN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lm(t)?am(t):t.q_.set("Unknown")):(await t.K_.stop(),RE(t))})),t.K_}function xr(t){return t.U_||(t.U_=function(n,r,s){const i=le(n);return i.w_(),new HN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:eI.bind(null,t),mo:rI.bind(null,t),f_:tI.bind(null,t),g_:nI.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await yc(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class cm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new cm(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function um(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),Wo(t))return new ne(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class zs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=zi(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ng{constructor(){this.W_=new Be(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ie():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ri{constructor(e,n,r,s,i,o,c,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ri(e,n,zs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class iI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class oI{constructor(){this.queries=Ig(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=Ig(),i.forEach((o,c)=>{for(const u of c.j_)u.onError(r)})})(this,new ne(H.ABORTED,"Firestore shutting down"))}}function Ig(){return new hi(t=>rE(t),uc)}async function OE(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new iI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=um(o,`Initialization of query '${vs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&dm(n)}async function VE(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aI(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&dm(n)}function lI(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function dm(t){t.Y_.forEach(e=>{e.next()})}var Md,Ag;(Ag=Md||(Md={})).ea="default",Ag.Cache="cache";class FE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ri(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Md.Cache}}/**
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
 */class UE{constructor(e){this.key=e}}class qE{constructor(e){this.key=e}}class cI{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=sE(e),this.Ra=new zs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ng,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const E=s.get(f),I=dc(this.query,g)?g:null,P=!!E&&this.mutatedKeys.has(E.key),L=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let M=!1;E&&I?E.data.isEqual(I.data)?P!==L&&(r.track({type:3,doc:I}),M=!0):this.ga(E,I)||(r.track({type:2,doc:I}),M=!0,(u&&this.Aa(I,u)>0||h&&this.Aa(I,h)<0)&&(c=!0)):!E&&I?(r.track({type:0,doc:I}),M=!0):E&&!I&&(r.track({type:1,doc:E}),M=!0,(u||h)&&(c=!0)),M&&(I?(o=o.add(I),i=L?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(I,P){const L=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie()}};return L(I)-L(P)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new ri(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ng,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new qE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new UE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ri.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class dI{constructor(e){this.key=e,this.va=!1}}class hI{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new hi(c=>rE(c),uc),this.Ma=new Map,this.xa=new Set,this.Oa=new Be(re.comparator),this.Na=new Map,this.La=new nm,this.Ba={},this.ka=new Map,this.qa=ni.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function mI(t,e,n=!0){const r=$E(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await BE(r,e,n,!0),s}async function fI(t,e){const n=$E(t);await BE(n,e,!0,!1)}async function BE(t,e,n,r){const s=await ON(t.localStore,vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await pI(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&PE(t.remoteStore,s),c}async function pI(t,e,n,r,s){t.Ka=(g,E,I)=>async function(L,M,x,w){let k=M.view.ma(x);k.ns&&(k=await xg(L.localStore,M.query,!1).then(({documents:_})=>M.view.ma(_,k)));const R=w&&w.targetChanges.get(M.targetId),V=w&&w.targetMismatches.get(M.targetId)!=null,q=M.view.applyChanges(k,L.isPrimaryClient,R,V);return Cg(L,M.targetId,q.wa),q.snapshot}(t,g,E,I);const i=await xg(t.localStore,e,!0),o=new cI(e,i.Ts),c=o.ma(i.documents),u=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,u);Cg(t,n,h.wa);const f=new uI(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function gI(t,e,n){const r=le(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!uc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Dd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&im(r.remoteStore,s.targetId),Od(r,s.targetId)}).catch(Ho)):(Od(r,s.targetId),await Dd(r.localStore,s.targetId,!0))}async function yI(t,e){const n=le(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),im(n.remoteStore,r.targetId))}async function vI(t,e,n){const r=SI(t);try{const s=await function(o,c){const u=le(o),h=et.now(),f=c.reduce((I,P)=>I.add(P.key),ge());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=jn(),L=ge();return u.cs.getEntries(I,f).next(M=>{P=M,P.forEach((x,w)=>{w.isValidDocument()||(L=L.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,P)).next(M=>{g=M;const x=[];for(const w of c){const k=qk(w,g.get(w.key).overlayedDocument);k!=null&&x.push(new is(w.key,k,Qv(k.value.mapValue),Dn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,x,c)}).next(M=>{E=M;const x=M.applyToLocalDocumentSet(g,L);return u.documentOverlayCache.saveOverlays(I,M.batchId,x)})}).then(()=>({batchId:E.batchId,changes:oE(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Be(be)),h=h.insert(c,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Xo(r,s.changes),await yc(r.remoteStore)}catch(s){const i=um(s,"Failed to persist write");n.reject(i)}}async function jE(t,e){const n=le(t);try{const r=await LN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ne(o.va):s.removedDocuments.size>0&&(Ne(o.va),o.va=!1))}),await Xo(n,r,e)}catch(r){await Ho(r)}}function Pg(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=le(o);u.onlineState=c;let h=!1;u.queries.forEach((f,g)=>{for(const E of g.j_)E.Z_(c)&&(h=!0)}),h&&dm(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function EI(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Be(re.comparator);o=o.insert(i,_t.newNoDocument(i,ae.min()));const c=ge().add(i),u=new fc(ae.min(),new Map,new Be(be),o,c);await jE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),hm(r)}else await Dd(r.localStore,e,!1).then(()=>Od(r,e,n)).catch(Ho)}async function wI(t,e){const n=le(t),r=e.batch.batchId;try{const s=await RN(n.localStore,e);HE(n,r,null),zE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xo(n,s)}catch(s){await Ho(s)}}async function _I(t,e,n){const r=le(t);try{const s=await function(o,c){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(g=>(Ne(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);HE(r,e,n),zE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xo(r,s)}catch(s){await Ho(s)}}function zE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function HE(t,e,n){const r=le(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||WE(t,r)})}function WE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(im(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),hm(t))}function Cg(t,e,n){for(const r of n)r instanceof UE?(t.La.addReference(r.key,e),bI(t,r)):r instanceof qE?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||WE(t,r.key)):ie()}function bI(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),hm(t))}function hm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Ve.fromString(e)),r=t.qa.next();t.Na.set(r,new dI(n)),t.Oa=t.Oa.insert(n,r),PE(t.remoteStore,new or(vn(Yh(n.path)),r,"TargetPurposeLimboResolution",Wh.oe))}}async function Xo(t,e,n){const r=le(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){s.push(h);const g=sm.Wi(u.targetId,h);i.push(g)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const f=le(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>W.forEach(h,E=>W.forEach(E.$i,I=>f.persistence.referenceDelegate.addReference(g,E.targetId,I)).next(()=>W.forEach(E.Ui,I=>f.persistence.referenceDelegate.removeReference(g,E.targetId,I)))))}catch(g){if(!Wo(g))throw g;ee("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const E=g.targetId;if(!g.fromCache){const I=f.os.get(E),P=I.snapshotVersion,L=I.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(E,L)}}}(r.localStore,i))}async function xI(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await kE(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new ne(H.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xo(n,r.hs)}}function TI(t,e){const n=le(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function $E(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EI.bind(null,e),e.Ca.d_=aI.bind(null,e.eventManager),e.Ca.$a=lI.bind(null,e.eventManager),e}function SI(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_I.bind(null,e),e}class Bl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return CN(this.persistence,new AN,e.initialUser,this.serializer)}Ga(e){return new kN(rm.Zr,this.serializer)}Wa(e){return new FN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bl.provider={build:()=>new Bl};class Vd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xI.bind(null,this.syncEngine),await sI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oI}()}createDatastore(e){const n=pc(e.databaseInfo.databaseId),r=function(i){return new jN(i)}(e.databaseInfo);return function(i,o,c,u){return new WN(i,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new GN(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Pg(this.syncEngine,n,0),function(){return Sg.D()?new Sg:new UN}())}createSyncEngine(e,n){return function(s,i,o,c,u,h,f){const g=new hI(s,i,o,c,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=le(s);ee("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ko(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Vd.provider={build:()=>new Vd};/**
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
 */class GE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class kI{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=Gv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=um(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _u(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await kE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Rg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NI(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>kg(e.remoteStore,s)),t._onlineComponents=e}async function NI(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await _u(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await _u(t,new Bl)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await _u(t,new Bl);return t._offlineComponents}async function KE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Rg(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Rg(t,new Vd))),t._onlineComponents}function II(t){return KE(t).then(e=>e.syncEngine)}async function XE(t){const e=await KE(t),n=e.eventManager;return n.onListen=mI.bind(null,e.syncEngine),n.onUnlisten=gI.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fI.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=yI.bind(null,e.syncEngine),n}function AI(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,h){const f=new GE({next:E=>{f.Za(),o.enqueueAndForget(()=>VE(i,g));const I=E.docs.has(c);!I&&E.fromCache?h.reject(new ne(H.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&E.fromCache&&u&&u.source==="server"?h.reject(new ne(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(E)},error:E=>h.reject(E)}),g=new FE(Yh(c.path),f,{includeMetadataChanges:!0,_a:!0});return OE(i,g)}(await XE(t),t.asyncQueue,e,n,r)),r.promise}function PI(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,h){const f=new GE({next:E=>{f.Za(),o.enqueueAndForget(()=>VE(i,g)),E.fromCache&&u.source==="server"?h.reject(new ne(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(E)},error:E=>h.reject(E)}),g=new FE(c,f,{includeMetadataChanges:!0,_a:!0});return OE(i,g)}(await XE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function QE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Lg=new Map;/**
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
 */function YE(t,e,n){if(!n)throw new ne(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CI(t,e,n,r){if(e===!0&&r===!0)throw new ne(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dg(t){if(!re.isDocumentKey(t))throw new ne(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mg(t){if(re.isDocumentKey(t))throw new ne(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie()}function ts(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mm(t);throw new ne(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Og{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Og({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Og(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KS;switch(r.type){case"firstParty":return new JS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Lg.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Lg.delete(n),r.terminate())}(this),Promise.resolve()}}function RI(t,e,n,r={}){var s;const i=(t=ts(t,vc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Et.MOCK_USER;else{c=hx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ne(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Et(h)}t._authCredentials=new XS(new $v(c,u))}}/**
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
 */class Ec{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ec(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class vr extends Ec{constructor(e,n,r){super(e,n,Yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new re(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function LI(t,e,...n){if(t=Yt(t),YE("collection","path",e),t instanceof vc){const r=Ve.fromString(e,...n);return Mg(r),new vr(t,null,r)}{if(!(t instanceof Ut||t instanceof vr))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Mg(r),new vr(t.firestore,null,r)}}function Ge(t,e,...n){if(t=Yt(t),arguments.length===1&&(e=Gv.newId()),YE("doc","path",e),t instanceof vc){const r=Ve.fromString(e,...n);return Dg(r),new Ut(t,null,new re(r))}{if(!(t instanceof Ut||t instanceof vr))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Dg(r),new Ut(t.firestore,t instanceof vr?t.converter:null,new re(r))}}/**
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
 */class Vg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new IE(this,"async_queue_retry"),this.Vu=()=>{const r=wu();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=wu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ln;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Wo(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Bn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=cm.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ie()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class wc extends vc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Vg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vg(e),this._firestoreClient=void 0,await e}}}function DI(t,e){const n=typeof t=="object"?t:rv(),r=typeof t=="string"?t:"(default)",s=Dh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ux("firestore");i&&RI(s,...i)}return s}function fm(t){if(t._terminated)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||MI(t),t._firestoreClient}function MI(t){var e,n,r;const s=t._freezeSettings(),i=function(c,u,h,f){return new dk(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,QE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new kI(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new si(ht.fromBase64String(e))}catch(n){throw new ne(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new si(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class JE{constructor(e){this._methodName=e}}/**
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
 */class gm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class ym{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const OI=/^__.*__$/;class VI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,n,this.fieldTransforms):new $o(e,this.data,n,this.fieldTransforms)}}function ZE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie()}}class vm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return jl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ZE(this.Cu)&&OI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class FI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pc(e)}Qu(e,n,r,s=!1){return new vm({Cu:e,methodName:n,qu:r,path:lt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function UI(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new FI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qI(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);rw("Data must be an object, but it was:",o,r);const c=tw(r,o);let u,h;if(i.merge)u=new sn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const E=BI(e,g,n);if(!o.contains(E))throw new ne(H.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);zI(f,E)||f.push(E)}u=new sn(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new VI(new $t(c),u,h)}function ew(t,e){if(nw(t=Yt(t)))return rw("Unsupported field value:",e,t),tw(t,e);if(t instanceof JE)return function(r,s){if(!ZE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let u=ew(c,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Dk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:Ul(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ul(s.serializer,i)}}if(r instanceof gm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof si)return{bytesValue:EE(s.serializer,r._byteString)};if(r instanceof Ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ym)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return Jh(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${mm(r)}`)}(t,e)}function tw(t,e){const n={};return Kv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,s)=>{const i=ew(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function nw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof gm||t instanceof si||t instanceof Ut||t instanceof JE||t instanceof ym)}function rw(t,e,n){if(!nw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=mm(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function BI(t,e,n){if((e=Yt(e))instanceof pm)return e._internalPath;if(typeof e=="string")return sw(t,e);throw jl("Field path arguments must be of type string or ",t,!1,void 0,n)}const jI=new RegExp("[~\\*/\\[\\]]");function sw(t,e,n){if(e.search(jI)>=0)throw jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pm(...e.split("."))._internalPath}catch{throw jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new ne(H.INVALID_ARGUMENT,c+t+u)}function zI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class iw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ow("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HI extends iw{data(){return super.data()}}function ow(t,e){return typeof e=="string"?sw(t,e):e instanceof pm?e._internalPath:e._delegate._internalPath}/**
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
 */function WI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $I{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return di(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>We(o.doubleValue));return new ym(i)}convertGeoPoint(e){return new gm(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Io(e));default:return null}}convertTimestamp(e){const n=br(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Ne(SE(r));const s=new Ao(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function GI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aw extends iw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ow("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class tl extends aw{data(e={}){return super.data(e)}}class KI{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Wi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tl(this._firestore,this._userDataWriter,r.key,r,new Wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new tl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new tl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Wi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:XI(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie()}}/**
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
 */function Qe(t){t=ts(t,Ut);const e=ts(t.firestore,wc);return AI(fm(e),t._key).then(n=>JI(e,t,n))}class lw extends $I{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function QI(t){t=ts(t,Ec);const e=ts(t.firestore,wc),n=fm(e),r=new lw(e);return WI(t._query),PI(n,t._query).then(s=>new KI(e,r,t,s))}function Ar(t,e,n){t=ts(t,Ut);const r=ts(t.firestore,wc),s=GI(t.converter,e,n);return YI(r,[qI(UI(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dn.none())])}function YI(t,e){return function(r,s){const i=new Ln;return r.asyncQueue.enqueueAndForget(async()=>vI(await II(r),s,i)),i.promise}(fm(t),e)}function JI(t,e,n){const r=n.docs.get(e._key),s=new lw(t);return new aw(t,s,e._key,r,new Wi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ui=s})(li),Ys(new Xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new wc(new QS(r.getProvider("auth-internal")),new ek(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),yr(ng,"4.7.3",e),yr(ng,"4.7.3","esm2017")})();const ZI={apiKey:"AIzaSyAcjNCDe3-Whc5LUcd9Xfyl68hVYcdz1GU",authDomain:"alex-english-academy-react.firebaseapp.com",projectId:"alex-english-academy-react",storageBucket:"alex-english-academy-react.firebasestorage.app",messagingSenderId:"166060472334",appId:"1:166060472334:web:5e12a5376efc73f192e45f"},cw=nv(ZI),Da=$S(cw),He=DI(cw);function e2({onLoginSuccess:t,onNavigate:e}){const[n,r]=U.useState(!1),[s,i]=U.useState(!1),[o,c]=U.useState(!1),[u,h]=U.useState(""),[f,g]=U.useState(""),[E,I]=U.useState(""),[P,L]=U.useState(""),[M,x]=U.useState(""),[w,k]=U.useState(""),[R,V]=U.useState(!1),q=async p=>{var v;if(p.preventDefault(),x(""),k(""),V(!0),!u||!f){x("Por favor, preencha todos os campos"),V(!1);return}try{const T=Ge(He,"students",u),N=await Qe(T);if(!N.exists()){x("Usuário não encontrado. Contate o Professor Alex."),V(!1);return}const S=N.data();if(S.password!==f){x("Senha incorreta"),V(!1);return}const b=`${u}@student.alexacademy.com`;try{await Wp(Da,b,f)}catch(de){if(de.code==="auth/user-not-found")try{await LT(Da,b,f)}catch(B){console.log("User creation error:",B)}}const oe={username:u,displayName:S.name||u,email:b,role:"student",uid:(v=Da.currentUser)==null?void 0:v.uid};k("✅ Login realizado com sucesso!"),setTimeout(()=>{t(oe),V(!1)},1e3)}catch(T){console.error("Student Login Error:",T),x("Erro ao fazer login. Verifique suas credenciais."),V(!1)}},_=async p=>{if(p.preventDefault(),x(""),k(""),V(!0),!E||!P){x("Por favor, preencha todos os campos"),V(!1);return}try{const T=(await Wp(Da,E,P)).user,N=Ge(He,"teachers",T.uid),S=await Qe(N);let b;S.exists()?b=S.data():(b={email:E,displayName:"Professor Alex",userType:"teacher",createdAt:Date.now(),uid:T.uid},await Ar(N,b));const oe={email:E,displayName:b.displayName||"Professor Alex",role:"teacher",uid:T.uid};k("✅ Login de professor realizado com sucesso!"),setTimeout(()=>{t(oe),r(!1),V(!1)},1e3)}catch(v){console.error("Teacher Login Error:",v);let T="Email ou senha inválidos";v.code==="auth/user-not-found"?T="Professor não encontrado. Contate o administrador.":v.code==="auth/wrong-password"?T="Senha incorreta":v.code==="auth/invalid-email"?T="Email inválido":v.code==="auth/too-many-requests"&&(T="Muitas tentativas. Tente novamente mais tarde."),x(T),V(!1)}};return l.createElement("div",{className:"sophisticated-bg min-h-screen"},l.createElement("div",{className:"min-h-screen flex items-center justify-center p-4"},l.createElement("div",{className:"w-full max-w-md"},l.createElement("div",{className:"elegant-card rounded-3xl p-8 fade-in"},l.createElement("div",{className:"text-center mb-8"},l.createElement("div",{className:"w-20 h-20 logo-sophisticated rounded-full flex items-center justify-center mx-auto mb-6"},l.createElement("span",{className:"text-3xl font-bold text-white"},"A")),l.createElement("h1",{className:"text-2xl font-medium mb-1",style:{color:"var(--alex-blue)"}},"Teacher Alex"),l.createElement("h2",{className:"text-4xl font-bold mb-4",style:{color:"var(--academy-red)"}},"ENGLISH ACADEMY"),l.createElement("div",{className:"beta-badge text-white px-4 py-2 rounded-full text-sm font-semibold mb-5"},l.createElement("span",{className:"w-2 h-2 bg-white rounded-full mr-2 animate-pulse"}),"FIREBASE AUTH"),l.createElement("h3",{className:"text-xl font-medium mb-2",style:{color:"var(--academy-red)"}},"Portal do Estudante"),l.createElement("p",{className:"text-base",style:{color:"var(--medium-gray)"}},"Autenticação segura via Firebase")),l.createElement("form",{onSubmit:q,className:"space-y-5"},l.createElement("div",null,l.createElement("label",{className:"block text-base font-medium mb-2",style:{color:"var(--charcoal)"}},"Nome de usuário"),l.createElement("input",{type:"text",placeholder:"Digite seu nome de usuário",value:u,onChange:p=>h(p.target.value),disabled:R,required:!0,className:"elegant-input"})),l.createElement("div",null,l.createElement("label",{className:"block text-base font-medium mb-2",style:{color:"var(--charcoal)"}},"Senha"),l.createElement("div",{className:"relative"},l.createElement("input",{type:s?"text":"password",placeholder:"Digite sua senha",value:f,onChange:p=>g(p.target.value),disabled:R,required:!0,className:"elegant-input pr-12"}),l.createElement("button",{type:"button",onClick:()=>i(!s),disabled:R,className:"absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity",style:{background:"none",border:"none",fontSize:"18px",color:"var(--medium-gray)"}},s?"👁️":"👁️‍🗨️"))),l.createElement("button",{type:"submit",disabled:R,className:`btn-primary w-full text-white font-bold py-4 rounded-xl text-lg transition-all ${R?"opacity-50 cursor-not-allowed":"hover:transform hover:scale-105"}`},R?l.createElement("div",{className:"flex items-center justify-center"},l.createElement("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"AUTENTICANDO..."):"ACESSAR MINHAS AULAS")),l.createElement("div",{className:"text-center mt-8 pt-6",style:{borderTop:"1px solid var(--light-gray)"}},l.createElement("p",{className:"text-base mb-1",style:{color:"var(--medium-gray)"}},"Precisa de ajuda?"),l.createElement("p",{className:"text-base font-medium mb-6",style:{color:"var(--charcoal)"}},"Entre em contato com ",l.createElement("span",{style:{color:"var(--academy-red)"},className:"font-semibold"},"Professor Alex")),l.createElement("div",{className:"space-y-3"},l.createElement("button",{className:"block w-full link-sophisticated text-base py-3 px-4 rounded-lg transition-all font-medium",style:{background:"none",border:"none"},disabled:R},"Esqueci minha senha"),l.createElement("button",{onClick:()=>r(!0),disabled:R,className:"block w-full link-muted text-sm py-3 px-4 rounded-lg hover:bg-gray-50 transition-all",style:{background:"none",border:"none"}},"🎓 Acesso para Professores"))),M&&l.createElement("div",{className:"mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-base text-center font-medium"},M),w&&l.createElement("div",{className:"mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-base text-center font-medium"},w)))),n&&l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"elegant-card rounded-2xl p-6 w-full max-w-sm"},l.createElement("h3",{className:"text-xl font-bold mb-6 text-center",style:{color:"var(--charcoal)"}},"🎓 Acesso Professor (Firebase)"),l.createElement("form",{onSubmit:_,className:"space-y-4"},l.createElement("input",{type:"email",placeholder:"Email do Professor",value:E,onChange:p=>I(p.target.value),disabled:R,required:!0,className:"elegant-input p-3 rounded-lg"}),l.createElement("div",{className:"relative"},l.createElement("input",{type:o?"text":"password",placeholder:"Senha",value:P,onChange:p=>L(p.target.value),disabled:R,required:!0,className:"elegant-input p-3 rounded-lg pr-12"}),l.createElement("button",{type:"button",onClick:()=>c(!o),disabled:R,className:"absolute right-3 top-1/2 transform -translate-y-1/2 hover:opacity-75 transition-opacity",style:{background:"none",border:"none",fontSize:"16px",color:"var(--medium-gray)"}},o?"👁️":"👁️‍🗨️")),l.createElement("button",{type:"submit",disabled:R,className:`btn-secondary w-full text-white font-semibold py-3 rounded-lg transition-all ${R?"opacity-50 cursor-not-allowed":"hover:transform hover:scale-105"}`},R?l.createElement("div",{className:"flex items-center justify-center"},l.createElement("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"}),"Autenticando..."):"Acessar Dashboard")),l.createElement("button",{onClick:()=>r(!1),disabled:R,className:"w-full mt-4 text-sm py-2 transition-colors",style:{background:"none",border:"none",color:"var(--medium-gray)"}},"Fechar"))),l.createElement("style",{jsx:!0},`
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
      `))}function t2({user:t,onLogout:e,onNavigate:n}){const[r,s]=U.useState({level:1,xp:0,streak:0,completedLessons:0,totalLessons:110,foundationLessons:0,gamingLessons:0,moviesLessons:0,foodLessons:0}),[i,o]=U.useState(!0),[c,u]=U.useState("🔥 Loading your progress...");U.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){u("❌ User not found"),o(!1);return}try{u("🔥 Loading Foundation progress...");const w=Ge(He,"students",t.username,"progress","foundation"),k=await Qe(w);u("🎮 Loading Gaming progress...");const R=Ge(He,"students",t.username,"progress","gaming"),V=await Qe(R);u("🎬 Loading Movies progress...");const q=Ge(He,"students",t.username,"progress","movies"),_=await Qe(q);u("🍕 Loading Food progress...");const p=Ge(He,"students",t.username,"progress","food"),v=await Qe(p);let T=0,N=0,S=0,b=0,oe=0,de=0;if(k.exists()){const Y=k.data();T+=Y.totalXP||0,S=Object.keys(Y.lessons||{}).length,N+=S}if(V.exists()){const Y=V.data();T+=Y.totalXP||0,b=Object.keys(Y.lessons||{}).length,N+=b}if(_.exists()){const Y=_.data();T+=Y.totalXP||0,oe=Object.keys(Y.lessons||{}).length,N+=oe}if(v.exists()){const Y=v.data();T+=Y.totalXP||0,de=Object.keys(Y.lessons||{}).length,N+=de}const B=h(T),Se=f(k,V,_,v),$={level:B,xp:T,streak:Se,completedLessons:N,totalLessons:110,foundationLessons:S,gamingLessons:b,moviesLessons:oe,foodLessons:de};s($),u(`✅ Progress loaded! ${S} Foundation + ${b} Gaming + ${oe} Movies + ${de} Food lessons`),o(!1),setTimeout(()=>{E($)},500)}catch(w){console.error("Firebase Error loading progress:",w),u("❌ Failed to load progress"),o(!1);const k={level:3,xp:275,streak:5,completedLessons:8,totalLessons:110,foundationLessons:0,gamingLessons:0,moviesLessons:0,foodLessons:0};s(k),setTimeout(()=>E(k),500)}})()},[t]);const h=x=>{if(x<100)return 1;let w=1,k=0;for(;x>=k&&(w++,k+=(w-1)*150,!(w>1e3)););return Math.min(w-1,1e3)},f=(x,w,k,R)=>{let V=0;if(x.exists()){const _=x.data();V=Math.max(V,_.lastUpdated||0)}if(w.exists()){const _=w.data();V=Math.max(V,_.lastUpdated||0)}if(k.exists()){const _=k.data();V=Math.max(V,_.lastUpdated||0)}if(R.exists()){const _=R.data();V=Math.max(V,_.lastUpdated||0)}if(V===0)return 0;const q=Math.floor((Date.now()-V)/(1e3*60*60*24));return q<=1?5:Math.max(0,5-q)},g=x=>x<=50?"Beginner":x<=150?"Elementary":x<=400?"Intermediate":x<=700?"Advanced":"Expert",E=x=>{[{id:"totalCompletedCounter",value:x.completedLessons},{id:"totalXPCounter",value:x.xp},{id:"currentLevelCounter",value:x.level},{id:"dayStreakCounter",value:x.streak}].forEach((k,R)=>{setTimeout(()=>{const V=document.getElementById(k.id);I(V,k.value,1200+R*200)},100+R*200)})},I=(x,w,k=1500)=>{if(!x)return;const R=0,V=Date.now(),q=()=>{const _=Date.now()-V,p=Math.min(_/k,1),v=1-Math.pow(1-p,3),T=Math.floor(R+(w-R)*v);x.textContent=T.toLocaleString("pt-BR"),p<1?requestAnimationFrame(q):(x.textContent=w.toLocaleString("pt-BR"),x.style.transform="scale(1.1)",setTimeout(()=>{x.style.transform="scale(1)"},200))};q()},P=r.level,L=g(P),M=r.completedLessons/r.totalLessons*100;return i?l.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-6xl mb-4"},"📊"),l.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Your Progress..."),l.createElement("p",{className:"text-gray-600 mb-4"},c),l.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):l.createElement("div",{className:"sophisticated-bg min-h-screen"},l.createElement("div",{className:"portal-header"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 md:px-8"},l.createElement("div",{className:"brand-title"},"TEACHER ALEX ENGLISH ACADEMY"),l.createElement("div",{className:"welcome-message"},"Bem-vindo(a) de volta, ",(t==null?void 0:t.displayName)||"Estudante"),l.createElement("div",{className:"firebase-status"},c))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6"},l.createElement("div",{className:"professional-card rounded-xl p-4 sm:p-5 md:p-6"},l.createElement("div",{className:"text-center"},l.createElement("h2",{className:"text-lg sm:text-xl md:text-2xl font-semibold mb-2",style:{color:"var(--charcoal)"}},"Nível ",P," • ",L),l.createElement("div",{className:"flex items-center justify-center space-x-4 sm:space-x-6 text-sm sm:text-base mb-3",style:{color:"var(--medium-gray)"}},l.createElement("span",null,r.xp," XP"),l.createElement("span",{style:{color:"var(--light-gray)"}},"•"),l.createElement("span",null,"Sequência ",r.streak)),l.createElement("div",{className:"progress-card rounded-lg p-3 mt-3"},l.createElement("div",{className:"flex justify-between text-xs sm:text-sm mb-1",style:{color:"var(--medium-gray)"}},l.createElement("span",null,"Progresso das Aulas"),l.createElement("span",null,r.completedLessons,"/",r.totalLessons)),l.createElement("div",{className:"w-full rounded-full h-2",style:{backgroundColor:"var(--light-gray)"}},l.createElement("div",{className:"h-2 rounded-full transition-all duration-500",style:{backgroundColor:"var(--alex-blue)",width:`${M}%`}}))),(r.foundationLessons>0||r.gamingLessons>0||r.moviesLessons>0||r.foodLessons>0)&&l.createElement("div",{className:"mt-4 flex justify-center space-x-2 text-xs flex-wrap gap-1"},r.foundationLessons>0&&l.createElement("div",{className:"bg-blue-100 text-blue-800 px-2 py-1 rounded-full"},"🌟 Foundation: ",r.foundationLessons,"/10"),r.gamingLessons>0&&l.createElement("div",{className:"bg-purple-100 text-purple-800 px-2 py-1 rounded-full"},"🎮 Gaming: ",r.gamingLessons,"/10"),r.moviesLessons>0&&l.createElement("div",{className:"bg-red-100 text-red-800 px-2 py-1 rounded-full"},"🎬 Movies: ",r.moviesLessons,"/10"),r.foodLessons>0&&l.createElement("div",{className:"bg-orange-100 text-orange-800 px-2 py-1 rounded-full"},"🍕 Food: ",r.foodLessons,"/10")))),l.createElement("div",{className:"professional-card rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100"},l.createElement("div",{className:"text-center mb-4"},l.createElement("h3",{className:"text-xl sm:text-2xl font-bold mb-2",style:{color:"var(--charcoal)"}},"📊 Seu Progresso Real"),l.createElement("p",{className:"text-sm sm:text-base",style:{color:"var(--medium-gray)"}},"Dados carregados diretamente do Firebase!")),l.createElement("div",{className:"grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"},l.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-blue-600 mb-1 counter-number",id:"totalCompletedCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),l.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Lições Completas"))),l.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-red-100 hover:shadow-md transition-all duration-300"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-red-500 mb-1 counter-number",id:"totalXPCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),l.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"XP Real"))),l.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-purple-600 mb-1 counter-number",id:"currentLevelCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"1"),l.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Nível Atual"))),l.createElement("div",{className:"bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-green-100 hover:shadow-md transition-all duration-300"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-2xl sm:text-3xl font-bold text-green-600 mb-1 counter-number",id:"dayStreakCounter",style:{transition:"transform 0.2s ease",display:"inline-block"}},"0"),l.createElement("div",{className:"text-xs sm:text-sm font-medium",style:{color:"var(--medium-gray)"}},"Sequência")))),l.createElement("div",{className:"mt-4 text-center"},l.createElement("p",{className:"text-sm sm:text-base text-blue-600 font-medium"},"🔥 4 series ativas: Foundation + Gaming + Movies + Food! 🚀"))),l.createElement("div",null,l.createElement("h2",{className:"text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6",style:{color:"var(--charcoal)"}},"🎧 Suas Aulas"),l.createElement("div",{className:"space-y-4 sm:space-y-5 md:space-y-6"},l.createElement("div",{className:"lesson-card-enhanced"},l.createElement("div",{className:"flex items-center justify-between"},l.createElement("div",{className:"flex-1"},l.createElement("h3",{className:"text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2"},"🌟 STUDY ENGLISH"),l.createElement("p",{className:"text-sm sm:text-base text-blue-100 mb-3 sm:mb-4"},r.completedLessons," lições completadas • ",r.xp," XP total"),l.createElement("div",{className:"flex items-center gap-2 mb-3"},l.createElement("div",{className:"bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white"},"🎧 Audio Lessons"),l.createElement("div",{className:"bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white"},"🔥 Firebase Sync"))),l.createElement("div",{className:"ml-4 text-3xl sm:text-4xl"},"🌟")),l.createElement("button",{onClick:()=>n("hub"),className:"btn-enhanced w-full sm:w-auto inline-block text-center font-bold py-3 px-6 rounded-lg text-sm sm:text-base"},"🎯 CONTINUAR ESTUDOS")),l.createElement("div",{className:"lesson-card-soon"},l.createElement("div",{className:"flex items-center justify-between"},l.createElement("div",{className:"flex-1"},l.createElement("h3",{className:"text-lg sm:text-xl font-semibold mb-1 sm:mb-2",style:{color:"var(--medium-gray)"}},"📝 EXERCÍCIOS"),l.createElement("p",{className:"text-sm sm:text-base mb-3 sm:mb-4",style:{color:"var(--medium-gray)"}},"Sistema de exercícios interativos completo")),l.createElement("div",{className:"ml-4 text-2xl sm:text-3xl",style:{color:"var(--light-gray)"}},"────")),l.createElement("button",{className:"btn-disabled w-full sm:w-auto font-semibold py-3 px-6 rounded-lg text-sm sm:text-base cursor-not-allowed"},"EM BREVE")))),l.createElement("div",{className:"revolutionary-footer"},l.createElement("p",{className:"revolutionary-text"},"🔥 4 séries ativas • Foundation + Gaming + Movies + Food • Teacher Alex English Academy")),l.createElement("div",{className:"text-center pb-4"},l.createElement("button",{onClick:e,className:"text-sm transition-colors",style:{color:"var(--charcoal)",background:"none",border:"none"}},"Sair"))),l.createElement("style",{jsx:!0},`
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
      `))}function n2({user:t,onThemeSelect:e,onLogout:n}){return l.createElement("div",{className:"hub-container"},l.createElement("div",{className:"max-w-6xl mx-auto px-4 py-8"},l.createElement("div",{className:"text-center mb-12"},l.createElement("div",{className:"hub-logo"},l.createElement("div",{className:"logo-circle"},"A")),l.createElement("h1",{className:"text-3xl font-bold text-gray-800 mb-2"},"TEACHER ALEX ENGLISH ACADEMY"),l.createElement("div",{className:"beta-badge"},"BETA"),l.createElement("p",{className:"text-gray-600 mb-4"},"Choose your English adventure path, ",t.username,"!"),l.createElement("p",{className:"text-sm text-gray-500"},"Professional English learning with Brazilian context • 60 Interactive Lessons")),l.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"},l.createElement("div",{className:"theme-card foundation-card",onClick:()=>e("foundation")},l.createElement("div",{className:"card-header"},l.createElement("div",{className:"text-4xl mb-3"},"🌟"),l.createElement("h3",{className:"text-xl font-bold text-blue-600 mb-2"},"A1 Foundation"),l.createElement("div",{className:"lesson-count"},"10 Audio Lessons")),l.createElement("div",{className:"card-content"},l.createElement("p",{className:"text-gray-600 mb-4"},"Master English basics with interactive audio lessons. Perfect for beginners!"),l.createElement("div",{className:"features"},l.createElement("div",{className:"feature"},"✅ Greetings & Introductions"),l.createElement("div",{className:"feature"},"✅ Family & Daily Routine"),l.createElement("div",{className:"feature"},"✅ Food & Shopping"),l.createElement("div",{className:"feature"},"✅ Weather & Future Plans"))),l.createElement("div",{className:"card-footer"},l.createElement("div",{className:"xp-reward"},"🏆 Up to 500 XP"),l.createElement("div",{className:"start-btn foundation-btn"},"Start Learning →"))),l.createElement("div",{className:"theme-card gaming-card",onClick:()=>e("gaming")},l.createElement("div",{className:"card-header"},l.createElement("div",{className:"text-4xl mb-3"},"🎮"),l.createElement("h3",{className:"text-xl font-bold text-purple-600 mb-2"},"Gaming World"),l.createElement("div",{className:"lesson-count"},"10 Audio Lessons")),l.createElement("div",{className:"card-content"},l.createElement("p",{className:"text-gray-600 mb-4"},"Learn English through gaming culture and esports vocabulary!"),l.createElement("div",{className:"features"},l.createElement("div",{className:"feature"},"🖥️ PC Setup & Hardware"),l.createElement("div",{className:"feature"},"🏆 Esports & Tournaments"),l.createElement("div",{className:"feature"},"📱 Mobile Gaming"),l.createElement("div",{className:"feature"},"🎬 Game Reviews & Streaming"))),l.createElement("div",{className:"card-footer"},l.createElement("div",{className:"xp-reward"},"🏆 Up to 500 XP"),l.createElement("div",{className:"start-btn gaming-btn"},"Enter Game →"))),l.createElement("div",{className:"theme-card movies-card",onClick:()=>e("movies")},l.createElement("div",{className:"card-header"},l.createElement("div",{className:"text-4xl mb-3"},"🎬"),l.createElement("h3",{className:"text-xl font-bold text-red-600 mb-2"},"Movie Magic"),l.createElement("div",{className:"lesson-count"},"10 Audio Lessons")),l.createElement("div",{className:"card-content"},l.createElement("p",{className:"text-gray-600 mb-4"},"Discover English through cinema and entertainment culture!"),l.createElement("div",{className:"features"},l.createElement("div",{className:"feature"},"🎭 Cinema Experiences"),l.createElement("div",{className:"feature"},"📺 Streaming & Netflix"),l.createElement("div",{className:"feature"},"⭐ Movie Reviews"),l.createElement("div",{className:"feature"},"🏆 Awards & Festivals"))),l.createElement("div",{className:"card-footer"},l.createElement("div",{className:"xp-reward"},"🏆 Up to 500 XP"),l.createElement("div",{className:"start-btn movies-btn"},"Watch Now →"))),l.createElement("div",{className:"theme-card food-card",onClick:()=>e("food")},l.createElement("div",{className:"card-header"},l.createElement("div",{className:"text-4xl mb-3"},"🍕"),l.createElement("h3",{className:"text-xl font-bold text-orange-600 mb-2"},"Food Adventures"),l.createElement("div",{className:"lesson-count"},"10 Audio Lessons")),l.createElement("div",{className:"card-content"},l.createElement("p",{className:"text-gray-600 mb-4"},"Learn English through culinary experiences and Brazilian cuisine!"),l.createElement("div",{className:"features"},l.createElement("div",{className:"feature"},"🍝 Cooking at Home"),l.createElement("div",{className:"feature"},"🥩 Brazilian BBQ"),l.createElement("div",{className:"feature"},"🍞 Baking & Recipes"),l.createElement("div",{className:"feature"},"🏪 Restaurant Dreams"))),l.createElement("div",{className:"card-footer"},l.createElement("div",{className:"xp-reward"},"🏆 Up to 500 XP"),l.createElement("div",{className:"start-btn food-btn"},"Taste Now →"))),l.createElement("div",{className:"theme-card travel-card",onClick:()=>e("travel")},l.createElement("div",{className:"card-header"},l.createElement("div",{className:"text-4xl mb-3"},"✈️"),l.createElement("h3",{className:"text-xl font-bold text-green-600 mb-2"},"Travel Dreams"),l.createElement("div",{className:"lesson-count"},"10 Audio Lessons")),l.createElement("div",{className:"card-content"},l.createElement("p",{className:"text-gray-600 mb-4"},"Explore the world through amazing travel adventures and destinations!"),l.createElement("div",{className:"features"},l.createElement("div",{className:"feature"},"🌍 International Trips"),l.createElement("div",{className:"feature"},"🏖️ Beach Vacations"),l.createElement("div",{className:"feature"},"🎒 Backpacking Europe"),l.createElement("div",{className:"feature"},"🏝️ Dream Honeymoons"))),l.createElement("div",{className:"card-footer"},l.createElement("div",{className:"xp-reward"},"🏆 Up to 500 XP"),l.createElement("div",{className:"start-btn travel-btn"},"Explore →"))),l.createElement("div",{className:"theme-card sports-card",onClick:()=>e("sports")},l.createElement("div",{className:"card-header"},l.createElement("div",{className:"text-4xl mb-3"},"⚽"),l.createElement("h3",{className:"text-xl font-bold text-blue-600 mb-2"},"Sports Passion"),l.createElement("div",{className:"lesson-count"},"10 Audio Lessons")),l.createElement("div",{className:"card-content"},l.createElement("p",{className:"text-gray-600 mb-4"},"Learn English through Brazilian sports culture and athletic adventures!"),l.createElement("div",{className:"features"},l.createElement("div",{className:"feature"},"⚽ World Cup Passion"),l.createElement("div",{className:"feature"},"🔴 Flamengo Pride"),l.createElement("div",{className:"feature"},"🏖️ Beach Volleyball"),l.createElement("div",{className:"feature"},"🏃‍♀️ Marathon Running"))),l.createElement("div",{className:"card-footer"},l.createElement("div",{className:"xp-reward"},"🏆 Up to 500 XP"),l.createElement("div",{className:"start-btn sports-btn"},"Play Now →")))),l.createElement("div",{className:"achievement-summary"},l.createElement("div",{className:"achievement-card"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🏆 Your Learning Journey"),l.createElement("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4 text-center"},l.createElement("div",{className:"stat-item"},l.createElement("div",{className:"text-2xl font-bold text-blue-600"},"60"),l.createElement("div",{className:"text-sm text-gray-600"},"Total Lessons")),l.createElement("div",{className:"stat-item"},l.createElement("div",{className:"text-2xl font-bold text-green-600"},"3,000+"),l.createElement("div",{className:"text-sm text-gray-600"},"XP Available")),l.createElement("div",{className:"stat-item"},l.createElement("div",{className:"text-2xl font-bold text-purple-600"},"6"),l.createElement("div",{className:"text-sm text-gray-600"},"Course Series"))),l.createElement("div",{className:"motivation-text"},l.createElement("p",{className:"text-center text-gray-600 mt-4"},"🌟 Complete all series to become an English Master! 🌟")))),l.createElement("div",{className:"user-actions"},l.createElement("div",{className:"flex justify-center space-x-4"},l.createElement("button",{onClick:n,className:"logout-btn"},"🚪 Logout"),l.createElement("div",{className:"user-welcome"},"Welcome back, ",l.createElement("strong",null,t.username),"! Ready to learn? 🚀")))),l.createElement("style",{jsx:!0},`
        .hub-container {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          min-height: 100vh;
          padding: 2rem 0;
        }

        .hub-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .logo-circle {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .beta-badge {
          display: inline-block;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .theme-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 2px solid transparent;
        }

        .theme-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .foundation-card {
          border-color: #dbeafe;
        }
        .foundation-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.2);
        }

        .gaming-card {
          border-color: #e9d5ff;
        }
        .gaming-card:hover {
          border-color: #8b5cf6;
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.2);
        }

        .movies-card {
          border-color: #fecaca;
        }
        .movies-card:hover {
          border-color: #dc2626;
          box-shadow: 0 15px 35px rgba(220, 38, 38, 0.2);
        }

        .food-card {
          border-color: #fed7aa;
        }
        .food-card:hover {
          border-color: #f97316;
          box-shadow: 0 15px 35px rgba(249, 115, 22, 0.2);
        }

        .travel-card {
          border-color: #bbf7d0;
        }
        .travel-card:hover {
          border-color: #10b981;
          box-shadow: 0 15px 35px rgba(16, 185, 129, 0.2);
        }

        .sports-card {
          border-color: #dbeafe;
        }
        .sports-card:hover {
          border-color: #2563eb;
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.2);
        }

        .card-header {
          text-align: center;
          margin-bottom: 1rem;
        }

        .lesson-count {
          background: #f3f4f6;
          color: #374151;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
        }

        .card-content {
          margin-bottom: 1.5rem;
        }

        .features {
          display: grid;
          gap: 0.5rem;
        }

        .feature {
          font-size: 0.875rem;
          color: #6b7280;
          padding: 0.25rem 0;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .xp-reward {
          font-size: 0.875rem;
          font-weight: 600;
          color: #f59e0b;
        }

        .start-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .foundation-btn {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          color: white;
        }

        .gaming-btn {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          color: white;
        }

        .movies-btn {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
        }

        .food-btn {
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
        }

        .travel-btn {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }

        .sports-btn {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
        }

        .start-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .achievement-summary {
          margin-top: 3rem;
          margin-bottom: 2rem;
        }

        .achievement-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 2px solid #e5e7eb;
        }

        .stat-item {
          padding: 1rem;
        }

        .motivation-text {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .user-actions {
          text-align: center;
          margin-top: 2rem;
        }

        .logout-btn {
          background: linear-gradient(135deg, #6b7280, #4b5563);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logout-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(107, 114, 128, 0.3);
        }

        .user-welcome {
          display: flex;
          align-items: center;
          color: #374151;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .theme-card {
            padding: 1rem;
          }
          
          .card-footer {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .user-actions .flex {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `))}function r2({user:t,onLogout:e,onNavigate:n}){const[r,s]=U.useState({totalStudents:0,activeStudents:0,newStudentsThisMonth:0,totalLessonsCompleted:0,totalXPEarned:0}),[i,o]=U.useState(!1),[c,u]=U.useState({name:"",username:"",password:""}),[h,f]=U.useState([]),[g,E]=U.useState(!0),[I,P]=U.useState("🔥 Loading dashboard...");U.useEffect(()=>{(async()=>{try{P("🔥 Loading students from Firebase...");const x=LI(He,"students"),w=await QI(x);if(w.empty){f([]),s({totalStudents:0,activeStudents:0,newStudentsThisMonth:0,totalLessonsCompleted:0,totalXPEarned:0}),P("✅ Firebase connected - No students yet"),E(!1);return}P("📊 Calculating student progress...");const k=[];let R=0,V=0,q=0,_=0;const p=new Date().getMonth(),v=new Date().getFullYear();for(const T of w.docs){const N=T.id,S=Ge(He,"students",N,"progress","foundation"),b=await Qe(S),oe=Ge(He,"students",N,"progress","gaming"),de=await Qe(oe);let B=0,Se=0,$=0,Y=0,te="Never";if(b.exists()){const me=b.data();B+=me.totalXP||0,$=Object.keys(me.lessons||{}).length,Se+=$,me.lastUpdated&&(te=new Date(me.lastUpdated).toLocaleDateString("pt-BR"))}if(de.exists()){const me=de.data();if(B+=me.totalXP||0,Y=Object.keys(me.lessons||{}).length,Se+=Y,me.lastUpdated){const Ie=new Date(me.lastUpdated),Te=b.exists()&&b.data().lastUpdated?new Date(b.data().lastUpdated):new Date(0);te=(Ie>Te?Ie:Te).toLocaleDateString("pt-BR")}}const he=te!=="Never"&&Date.now()-new Date(te.split("/").reverse().join("-")).getTime()<7*24*60*60*1e3;he&&q++;const ce=T.data().createdAt;if(ce){const me=new Date(ce);me.getMonth()===p&&me.getFullYear()===v&&_++}const ye=Math.round(Se/20*100);k.push({id:N,name:T.data().name||N,username:N,lastAccess:te,totalXP:B,totalLessons:Se,foundationLessons:$,gamingLessons:Y,progress:ye,isActive:he}),R+=Se,V+=B}k.sort((T,N)=>N.totalXP-T.totalXP),f(k),s({totalStudents:k.length,activeStudents:q,newStudentsThisMonth:_,totalLessonsCompleted:R,totalXPEarned:V}),P(`✅ ${k.length} students loaded, ${R} lessons completed`),E(!1)}catch(x){console.error("Firebase Dashboard Error:",x),P("❌ Failed to load dashboard data"),E(!1),f([{id:1,name:"João Silva",username:"joao123",lastAccess:"23/07/2025",progress:75,totalXP:450,totalLessons:8},{id:2,name:"Maria Santos",username:"maria456",lastAccess:"22/07/2025",progress:45,totalXP:280,totalLessons:5},{id:3,name:"Pedro Costa",username:"pedro789",lastAccess:"21/07/2025",progress:90,totalXP:680,totalLessons:12}])}})()},[]);const L=async M=>{if(M.preventDefault(),!c.name||!c.username||!c.password){alert("Por favor, preencha todos os campos");return}if(c.password.length<4){alert("Senha deve ter pelo menos 4 caracteres");return}if(h.find(w=>w.username===c.username)){alert("Nome de usuário já existe! Escolha outro.");return}try{P("📝 Creating student account...");const w=Ge(He,"students",c.username);await Ar(w,{name:c.name,username:c.username,password:c.password,createdAt:Date.now(),createdBy:(t==null?void 0:t.email)||"teacher",status:"active"});const k={id:Date.now(),name:c.name,username:c.username,lastAccess:"Never",progress:0,totalXP:0,totalLessons:0,foundationLessons:0,gamingLessons:0,isActive:!1};f([...h,k]),s(R=>({...R,totalStudents:R.totalStudents+1,newStudentsThisMonth:R.newStudentsThisMonth+1})),alert(`✅ Conta criada com sucesso no Firebase!

Usuário: ${c.username}
Senha: ${c.password}

Envie estas credenciais para o aluno.`),u({name:"",username:"",password:""}),o(!1),P(`✅ Student ${c.name} created successfully`)}catch(w){console.error("Firebase Create Student Error:",w),alert("❌ Erro ao criar estudante no Firebase. Tente novamente."),P("❌ Failed to create student")}};return g?l.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-6xl mb-4"},"👨‍🏫"),l.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Loading Teacher Dashboard..."),l.createElement("p",{className:"text-gray-600 mb-4"},I),l.createElement("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}))):l.createElement("div",{className:"sophisticated-bg min-h-screen"},l.createElement("nav",{className:"bg-white shadow-sm border-b border-gray-200 p-4"},l.createElement("div",{className:"flex justify-between items-center max-w-6xl mx-auto"},l.createElement("div",{className:"flex items-center space-x-3"},l.createElement("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"},l.createElement("span",{className:"text-xl font-bold text-white"},"A")),l.createElement("div",null,l.createElement("span",{className:"text-gray-800 font-semibold text-lg"},"Dashboard Professor"),l.createElement("div",{className:"text-gray-500 text-sm"},"Teacher Alex English Academy"))),l.createElement("div",{className:"flex items-center space-x-4"},l.createElement("span",{className:"text-gray-600 text-sm"},(t==null?void 0:t.displayName)||"Professor"),l.createElement("button",{onClick:e,className:"bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"},"Sair")))),l.createElement("div",{className:"max-w-6xl mx-auto p-6"},l.createElement("div",{className:"bg-white rounded-xl shadow-lg p-4 mb-6 text-center"},l.createElement("div",{className:"text-sm"},l.createElement("span",{className:"text-blue-600 font-medium"},I)))),l.createElement("div",{className:"max-w-6xl mx-auto p-6"},l.createElement("div",{className:"grid md:grid-cols-5 gap-6 mb-8"},l.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},l.createElement("div",{className:"text-3xl font-bold text-blue-600 mb-2"},r.totalStudents),l.createElement("div",{className:"text-gray-600 text-sm"},"Total Students")),l.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},l.createElement("div",{className:"text-3xl font-bold text-green-600 mb-2"},r.activeStudents),l.createElement("div",{className:"text-gray-600 text-sm"},"Active Students")),l.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},l.createElement("div",{className:"text-3xl font-bold text-red-500 mb-2"},r.newStudentsThisMonth),l.createElement("div",{className:"text-gray-600 text-sm"},"New This Month")),l.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},l.createElement("div",{className:"text-3xl font-bold text-purple-600 mb-2"},r.totalLessonsCompleted),l.createElement("div",{className:"text-gray-600 text-sm"},"Lessons Completed")),l.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 text-center card-hover"},l.createElement("div",{className:"text-3xl font-bold text-yellow-600 mb-2"},r.totalXPEarned.toLocaleString()),l.createElement("div",{className:"text-gray-600 text-sm"},"Total XP Earned"))),l.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6 mb-8"},l.createElement("div",{className:"flex justify-between items-center mb-6"},l.createElement("h3",{className:"text-xl font-bold text-gray-800"},"👥 Gerenciar Alunos (Firebase)"),l.createElement("button",{onClick:()=>o(!i),className:"bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"},"+ Adicionar Novo Aluno")),i&&l.createElement("div",{className:"bg-gray-50 rounded-lg p-6 mb-6"},l.createElement("h4",{className:"text-lg font-semibold text-gray-800 mb-4"},"📝 Criar Conta Firebase para Cliente"),l.createElement("form",{onSubmit:L,className:"grid md:grid-cols-3 gap-4 mb-4"},l.createElement("input",{type:"text",placeholder:"Nome do aluno",value:c.name,onChange:M=>u({...c,name:M.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),l.createElement("input",{type:"text",placeholder:"Nome de usuário (login)",value:c.username,onChange:M=>u({...c,username:M.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),l.createElement("input",{type:"password",placeholder:"Senha (min 4 caracteres)",value:c.password,onChange:M=>u({...c,password:M.target.value}),className:"elegant-input p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),l.createElement("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"},"✅ Criar no Firebase"),l.createElement("button",{type:"button",onClick:()=>o(!1),className:"bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"},"❌ Cancelar"))),l.createElement("div",{className:"space-y-3"},h.length===0?l.createElement("div",{className:"text-center py-8"},l.createElement("div",{className:"text-gray-500 mb-4"},"📚 Nenhum estudante no Firebase ainda"),l.createElement("p",{className:"text-sm text-gray-400"},'Clique em "Adicionar Novo Aluno" para criar a primeira conta')):h.map(M=>l.createElement("div",{key:M.id,className:"border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"},l.createElement("div",{className:"flex justify-between items-start"},l.createElement("div",{className:"flex-1"},l.createElement("div",{className:"flex items-center space-x-3 mb-2"},l.createElement("h4",{className:"font-semibold text-gray-800"},M.name),M.isActive&&l.createElement("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"},"● Active")),l.createElement("p",{className:"text-sm text-gray-600 mb-2"},"@",M.username," • Último acesso: ",M.lastAccess),l.createElement("div",{className:"flex items-center space-x-4 text-xs text-gray-500"},l.createElement("span",null,"🌟 Foundation: ",M.foundationLessons||0,"/10"),l.createElement("span",null,"🎮 Gaming: ",M.gamingLessons||0,"/10"),l.createElement("span",null,"⚡ Total XP: ",M.totalXP))),l.createElement("div",{className:"text-right"},l.createElement("div",{className:"text-lg font-bold text-blue-600"},M.progress,"%"),l.createElement("div",{className:"text-xs text-gray-500"},M.totalLessons,"/20 lessons"))))))),l.createElement("div",{className:"grid lg:grid-cols-2 gap-8"},l.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"⚡ Ações Rápidas"),l.createElement("div",{className:"space-y-3"},l.createElement("button",{onClick:()=>n("portal"),className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm transition-colors"},"📱 Visualizar Portal do Estudante"),l.createElement("button",{className:"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg text-sm transition-colors"},"📊 Exportar Relatório Firebase"),l.createElement("button",{className:"w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg text-sm transition-colors"},"📧 Mensagem para Todos os Alunos"),l.createElement("button",{onClick:()=>window.location.reload(),className:"w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-sm transition-colors"},"🔄 Atualizar Dados Firebase"))),l.createElement("div",{className:"bg-white rounded-xl shadow-lg p-6"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"📈 Status do Sistema"),l.createElement("div",{className:"space-y-4"},l.createElement("div",{className:"flex items-center justify-between"},l.createElement("span",{className:"text-gray-600 text-sm"},"🔥 Firebase Connection"),l.createElement("span",{className:"text-green-600 font-semibold"},"● Connected")),l.createElement("div",{className:"flex items-center justify-between"},l.createElement("span",{className:"text-gray-600 text-sm"},"📊 React System"),l.createElement("span",{className:"text-green-600 font-semibold"},"● Running")),l.createElement("div",{className:"flex items-center justify-between"},l.createElement("span",{className:"text-gray-600 text-sm"},"🌟 Foundation Series"),l.createElement("span",{className:"text-green-600 font-semibold"},"10/10 Active")),l.createElement("div",{className:"flex items-center justify-between"},l.createElement("span",{className:"text-gray-600 text-sm"},"🎮 Gaming Series"),l.createElement("span",{className:"text-green-600 font-semibold"},"10/10 Active")),l.createElement("div",{className:"flex items-center justify-between"},l.createElement("span",{className:"text-gray-600 text-sm"},"📊 Student Data"),l.createElement("span",{className:"text-blue-600 font-semibold"},"Real Firebase")),l.createElement("div",{className:"flex items-center justify-between"},l.createElement("span",{className:"text-gray-600 text-sm"},"⚡ XP Tracking"),l.createElement("span",{className:"text-green-600 font-semibold"},"● Persistent")))))),l.createElement("style",{jsx:!0},`
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
      `))}const hs=[{id:"foundation-01",title:"Basic Greetings",description:"Learn essential greeting phrases and introductions",duration:"35s",icon:"🌟",audioFile:"audio/a1-foundation/audio-01-greetings.mp3",questions:[{question:"What is the woman's name?",options:["Sara","Sarah","Sandra","Samantha"],correct:1},{question:"Where is she from?",options:["Brazil","USA","Canada","Mexico"],correct:2},{question:"What is her job?",options:["Teacher","Nurse","Doctor","Engineer"],correct:1},{question:"How old is she?",options:["23","24","25","26"],correct:2},{question:"What does she say at the end?",options:["Goodbye","See you later","Have a great day","Take care"],correct:2}]},{id:"foundation-02",title:"Family Introduction",description:"Learn family members and relationship vocabulary",duration:"38s",icon:"👨‍👩‍👧‍👦",audioFile:"audio/a1-foundation/audio-02-family.mp3",questions:[{question:"How many people are in the family?",options:["3","4","5","6"],correct:1},{question:"What does the mother like?",options:["Reading","Cooking","Dancing","Shopping"],correct:1},{question:"How old is the sister?",options:["18","20","22","25"],correct:1},{question:"Where does the father work?",options:["Hospital","School","Bank","Restaurant"],correct:2},{question:"Where do they live?",options:["Small apartment","Big house","Small house","Big apartment"],correct:1}]},{id:"foundation-03",title:"Daily Routine",description:"Express daily activities and time management",duration:"40s",icon:"⏰",audioFile:"audio/a1-foundation/audio-03-routine.mp3",questions:[{question:"What time does he wake up?",options:["6 o'clock","7 o'clock","8 o'clock","9 o'clock"],correct:1},{question:"How does he go to work?",options:["By car","By bus","Walking","By bike"],correct:1},{question:"What time does he go to bed?",options:["9 o'clock","10 o'clock","11 o'clock","12 o'clock"],correct:1},{question:"What does he eat for breakfast?",options:["Cereal","Eggs","Bread with butter","Fruit"],correct:2},{question:"What time does he start work?",options:["8 o'clock","9 o'clock","8:30","9:30"],correct:1}]},{id:"foundation-04",title:"Food and Drinks",description:"Learn about meals, food types, and dining",duration:"36s",icon:"🍕",audioFile:"audio/a1-foundation/audio-04-food.mp3",questions:[{question:"What is his favorite drink?",options:["Coffee","Tea","Orange juice","Water"],correct:2},{question:"What dessert does he want?",options:["Ice cream","Chocolate cake","Apple pie","Cookies"],correct:1},{question:"When does he come to the restaurant?",options:["Every day","Every weekend","Every month","Every week"],correct:1},{question:"What food does he like?",options:["Pizza only","Hamburgers only","Pizza and hamburgers","Salad"],correct:2},{question:"How is the food at the restaurant?",options:["Expensive","Delicious","Bad","Cold"],correct:1}]},{id:"foundation-05",title:"Weather and Clothes",description:"Describe weather conditions and clothing",duration:"37s",icon:"🌤️",audioFile:"audio/a1-foundation/audio-05-weather.mp3",questions:[{question:"What is the weather like today?",options:["Cold and rainy","Sunny and warm","Cloudy","Windy"],correct:1},{question:"What did he wear yesterday?",options:["T-shirt and shorts","Jacket and boots","Jeans and sweater","Dress"],correct:1},{question:"Why does he love summer?",options:["No school","Nice weather","Long days","Vacation time"],correct:1},{question:"What is he wearing today?",options:["Jacket and boots","Blue t-shirt and white shorts","Jeans and sweater","Black pants"],correct:1},{question:"What will tomorrow's weather be like?",options:["Sunny","Rainy","Cloudy","Hot"],correct:2}]},{id:"foundation-06",title:"Shopping",description:"Learn shopping vocabulary and money expressions",duration:"39s",icon:"🛒",audioFile:"audio/a1-foundation/audio-06-shopping.mp3",questions:[{question:"What fruits does he want to buy?",options:["Apples and oranges only","Bananas only","Apples, bananas, and oranges","Only oranges"],correct:2},{question:"When does the supermarket close?",options:["9 at night","10 at night","11 at night","8 at night"],correct:1},{question:"How does he pay?",options:["Cash","Credit card","Check","Debit card"],correct:1},{question:"What other things does he need to buy?",options:["Milk and eggs","Bread only","Milk, eggs, and bread","Just milk"],correct:2},{question:"How long does shopping take?",options:["20 minutes","30 minutes","40 minutes","1 hour"],correct:1}]},{id:"foundation-07",title:"Hobbies and Free Time",description:"Express interests, hobbies, and leisure activities",duration:"35s",icon:"🎨",audioFile:"audio/a1-foundation/audio-07-hobbies.mp3",questions:[{question:"What instrument does he play?",options:["Piano","Guitar","Drums","Violin"],correct:1},{question:"When does he play this instrument?",options:["Every day","Weekdays","Weekends","Sometimes"],correct:2},{question:"What is his favorite hobby?",options:["Reading","Photography","Singing","Dancing"],correct:1},{question:"What does he not like doing?",options:["Singing","Dancing","Reading","Playing guitar"],correct:1},{question:"What does he take pictures of?",options:["People","Buildings","Nature and animals","Cars"],correct:2}]},{id:"foundation-08",title:"Transportation",description:"Learn about vehicles, directions, and travel",duration:"38s",icon:"🚗",audioFile:"audio/a1-foundation/audio-08-transportation.mp3",questions:[{question:"How does he usually go to work?",options:["By car","Walking","By bus","By bike"],correct:1},{question:"When does he drive his car?",options:["Every day","When it rains","On weekends","Never"],correct:2},{question:"Why doesn't he like the subway?",options:["Too expensive","Too crowded","Too slow","Too far"],correct:1},{question:"Where does he live?",options:["Countryside","City center","Suburbs","Near the park"],correct:1},{question:"Where is the bus stop?",options:["Near his work","In front of his building","At the corner","Far from home"],correct:1}]},{id:"foundation-09",title:"Health and Body",description:"Learn body parts, health, and medical vocabulary",duration:"40s",icon:"⚕️",audioFile:"audio/a1-foundation/audio-09-health.mp3",questions:[{question:"How often does he exercise?",options:["Every day","Three times a week","Once a week","Never"],correct:1},{question:"How many glasses of water does he drink?",options:["6","7","8","10"],correct:2},{question:"How many hours does he sleep?",options:["7 hours","8 hours","9 hours","6 hours"],correct:1},{question:"How often does he brush his teeth?",options:["Once a day","Twice a day","Three times a day","Never"],correct:1},{question:"What doesn't he do?",options:["Exercise","Eat vegetables","Smoke and drink alcohol","Sleep"],correct:2}]},{id:"foundation-10",title:"Future Plans",description:"Express future intentions, goals, and dreams",duration:"37s",icon:"🚀",audioFile:"audio/a1-foundation/audio-10-future.mp3",questions:[{question:"Where will he travel next month?",options:["Asia","Europe","America","Africa"],correct:1},{question:"How long will he stay?",options:["One week","Two weeks","Three weeks","One month"],correct:1},{question:"What will he do after his trip?",options:["Study more","Start a new job","Buy a house","Move cities"],correct:1},{question:"Which countries will he visit?",options:["France and Italy","Italy and Spain","France, Italy, and Spain","Only France"],correct:2},{question:"What languages is he learning?",options:["Spanish","French","French and Italian","Italian"],correct:2}]}];function s2({user:t,onBack:e}){const[n,r]=U.useState("selection"),[s,i]=U.useState(null),[o,c]=U.useState([]),[u,h]=U.useState(0),[f,g]=U.useState("Listen to Audio"),[E,I]=U.useState(!1),[P,L]=U.useState(!1),[M,x]=U.useState({}),[w,k]=U.useState(1),[R,V]=U.useState(null),[q,_]=U.useState(null),[p,v]=U.useState("🔥 Loading Firebase..."),[T,N]=U.useState(!0),[S,b]=U.useState(!1),[oe,de]=U.useState({currentTime:0,duration:0,percentage:0}),B=U.useRef(null);U.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),N(!1);return}try{v("🔥 Connecting to Firebase...");const F=Ge(He,"students",t.username,"progress","foundation"),j=await Qe(F);if(j.exists()){const K=j.data();x(K.lessons||{}),_({totalXP:K.totalXP||0,completedLessons:Object.keys(K.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Foundation progress loaded")}else x({}),_({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New student initialized");N(!1)}catch(F){console.error("Firebase Error:",F),v("❌ Firebase connection failed"),N(!1),x({"foundation-01":{status:"completed",score:5,attempts:1},"foundation-02":{status:"completed",score:4,attempts:2}})}})()},[t]);const Se=async(A,F,j=1)=>{if(t!=null&&t.username)try{const K=F*10+(F===5?25:0),xe=Date.now(),Ce={lessonId:A,score:F,attempts:j,xpEarned:K,completedAt:xe,status:"completed"};x(Re=>({...Re,[A]:Ce}));const Jt=Ge(He,"students",t.username,"progress","foundation"),zt=await Qe(Jt);let st={lessons:{[A]:Ce},totalXP:K,lastUpdated:xe,series:"foundation"};if(zt.exists()){const Re=zt.data();st={...Re,lessons:{...Re.lessons,[A]:Ce},totalXP:(Re.totalXP||0)+K,lastUpdated:xe}}await Ar(Jt,st,{merge:!0}),_(Re=>({...Re,totalXP:st.totalXP,completedLessons:Object.keys(st.lessons).length})),console.log("✅ Firebase Save Success:",{lessonId:A,score:F,xpEarned:K})}catch(K){console.error("❌ Firebase Save Error:",K)}},$=A=>{if(!A||isNaN(A))return"0:00";const F=Math.floor(A/60),j=Math.floor(A%60);return`${F}:${j.toString().padStart(2,"0")}`},Y=()=>{B.current&&(B.current.paused?(B.current.play(),b(!0),h(Math.max(u,20))):(B.current.pause(),b(!1)))},te=()=>{B.current&&(B.current.currentTime=Math.max(0,B.current.currentTime-10))},he=()=>{B.current&&(B.current.currentTime=Math.min(B.current.duration,B.current.currentTime+10))},ce=A=>{k(A),B.current&&(B.current.playbackRate=A)},ye=A=>{if(B.current&&B.current.duration){const F=A.currentTarget.getBoundingClientRect(),xe=(A.clientX-F.left)/F.width*B.current.duration;B.current.currentTime=xe}},me=A=>{const F=hs.find(j=>j.id===A);F&&(i(F),c(new Array(F.questions.length).fill(null)),h(0),g("Listen to Audio"),r("lesson"),V(Date.now()),b(!1),de({currentTime:0,duration:0,percentage:0}),window.scrollTo({top:0,behavior:"smooth"}))},Ie=(A,F)=>{const j=[...o];j[A]=F,c(j);const K=j.filter(Ce=>Ce!==null).length,xe=20+K/s.questions.length*80;h(xe),g(`${K}/5 Questions Answered`)},Te=async()=>{const A=o.reduce((K,xe,Ce)=>K+(xe===s.questions[Ce].correct?1:0),0),F=M[s.id],j=F?F.attempts+1:1;await Se(s.id,A,j),console.log(`✅ Foundation Lesson ${s.id} saved to Firebase! Score: ${A}/5, Attempts: ${j}`),I(!0)},D=()=>{const A=hs.findIndex(j=>j.id===s.id),F=hs[A+1];I(!1),F?me(F.id):(r("selection"),alert("🎉 Congratulations! Foundation Course Complete! 🌟"))},z=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},X=()=>{s&&(I(!1),c(new Array(s.questions.length).fill(null)),V(Date.now()),h(0),g("Listen to Audio"),b(!1),de({currentTime:0,duration:0,percentage:0}),B.current&&(B.current.currentTime=0,B.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},J=A=>{const F=M[A];return F?{status:"Completed",class:"status-completed",score:F.score,attempts:F.attempts,xpEarned:F.xpEarned}:{status:"Available",class:"status-not-started"}},fe=o.filter(A=>A!==null).length,ue=fe===(s==null?void 0:s.questions.length);return T?l.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-6xl mb-4"},"🔥"),l.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),l.createElement("p",{className:"text-gray-600"},"Loading your Foundation progress"))):n==="selection"?l.createElement("div",{className:"sophisticated-bg min-h-screen"},l.createElement("div",{className:"foundation-header"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},l.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),l.createElement("div",{className:"text-center mt-6"},l.createElement("div",{className:"text-lg font-bold text-blue-100 mb-2"},"TEACHER ALEX ENGLISH ACADEMY"),l.createElement("div",{className:"text-5xl mb-4"},"🌟"),l.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"A1 Foundation Course"),l.createElement("p",{className:"text-blue-100 mb-4"},"Complete English basics with 10 interactive audio lessons"),l.createElement("div",{className:"foundation-accent-card rounded-lg p-3"},l.createElement("p",{className:"text-white font-medium"},"🎯 Questions match audio content • 📊 Track progress • 🏆 Earn XP!"))))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},l.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},l.createElement("div",{className:"text-sm"},l.createElement("span",{className:"text-primary-blue font-medium"},p),q&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Total XP: ",q.totalXP," • Lessons: ",q.completedLessons,"/10")))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},l.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},hs.map((A,F)=>{const j=J(A.id);return l.createElement("div",{key:A.id,className:"lesson-card foundation-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>me(A.id)},l.createElement("div",{className:"flex items-center justify-between mb-3"},l.createElement("div",{className:"text-2xl"},A.icon),l.createElement("span",{className:`status-badge ${j.class}`},j.status)),l.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",F+1,": ",A.title),l.createElement("p",{className:"text-sm text-gray-600 mb-3"},A.description),l.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},l.createElement("span",null,"🎧 ",A.duration),l.createElement("span",{className:"font-semibold text-blue-600"},j.score?`✅ ${j.score}/5`:"+50 XP")),j.attempts>0&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",j.attempts," • Score: ",j.score||0,"/5 • XP: ",j.xpEarned||0))}))),l.createElement("style",{jsx:!0},`
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
        `)):l.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},l.createElement("div",{className:"foundation-lesson-card rounded-xl p-6 mb-6"},l.createElement("div",{className:"flex items-center justify-between mb-4"},l.createElement("button",{onClick:z,className:"text-blue-600 text-sm hover:underline"},"← Back to Foundation"),l.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",hs.findIndex(A=>A.id===s.id)+1," of ",hs.length)),l.createElement("div",{className:"text-center mb-4"},l.createElement("div",{className:"text-sm font-bold text-blue-600 mb-1"},"TEACHER ALEX ENGLISH ACADEMY"),l.createElement("h2",{className:"text-2xl font-bold text-blue-600 mb-2"},s.title),l.createElement("p",{className:"text-gray-600 mb-4"},s.description)),l.createElement("div",{className:"progress-card rounded-lg p-3"},l.createElement("div",{className:"flex justify-between text-sm mb-2"},l.createElement("span",null,"Lesson Progress"),l.createElement("span",null,f)),l.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},l.createElement("div",{className:"bg-blue-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),l.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🎧 Listen to the Audio"),l.createElement("audio",{ref:B,src:s.audioFile,onLoadedData:()=>{console.log("✅ Audio loaded:",s.audioFile),B.current&&(B.current.playbackRate=w)},onError:A=>{console.error("❌ Audio error:",A.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{if(B.current&&B.current.duration>0){const A=B.current.currentTime/B.current.duration*100;A>10&&h(Math.max(u,20)),de({currentTime:B.current.currentTime,duration:B.current.duration,percentage:A})}},onLoadedMetadata:()=>{B.current&&de(A=>({...A,duration:B.current.duration}))},onPlay:()=>b(!0),onPause:()=>b(!1),onEnded:()=>b(!1),className:"hidden"}),l.createElement("div",{className:"audio-progress-container mb-4"},l.createElement("div",{className:"flex justify-between text-sm text-gray-600 mb-2"},l.createElement("span",null,$(oe.currentTime)),l.createElement("span",{className:"font-medium"},s.title),l.createElement("span",null,$(oe.duration))),l.createElement("div",{className:"audio-progress-bar",onClick:ye},l.createElement("div",{className:"audio-progress-fill",style:{width:`${oe.percentage||0}%`}},l.createElement("div",{className:"audio-progress-thumb"}))),l.createElement("div",{className:"text-xs text-gray-500 mt-1"},Math.round(oe.percentage||0),"% completed")),l.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},l.createElement("button",{onClick:te,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),l.createElement("button",{onClick:Y,className:"btn-audio bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},S?"⏸️ Pause":"▶️ Play"),l.createElement("button",{onClick:he,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),l.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},l.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(A=>l.createElement("button",{key:A,onClick:()=>ce(A),className:`px-3 py-1 rounded ${w===A?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},A,"x"))),l.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🎯 Listen carefully and then answer the questions below")),l.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((A,F)=>l.createElement("div",{key:F,className:"question-card rounded-xl p-6"},l.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},F+1,". ",A.question),l.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},A.options.map((j,K)=>l.createElement("button",{key:K,onClick:()=>Ie(F,K),className:`p-3 rounded-lg text-left transition-all ${o[F]===K?"bg-blue-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+K),". ",j)))))),l.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},l.createElement("button",{onClick:Te,disabled:!ue,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${ue?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},ue?"🔥 Save to Firebase - Ready! 🌟":`Submit Answers (${fe}/5 Complete)`),l.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Teacher Alex English Academy"))),E&&l.createElement(i2,{lesson:s,userAnswers:o,onNext:D,onReview:()=>L(!0),onClose:()=>I(!1),onRestart:X}),P&&l.createElement(o2,{lesson:s,userAnswers:o,onClose:()=>L(!1)}),l.createElement("style",{jsx:!0},`
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

        .audio-progress-container {
          padding: 0 10px;
        }

        .audio-progress-bar {
          width: 100%;
          height: 8px;
          background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          border: 1px solid #cbd5e1;
          transition: all 0.2s ease;
        }

        .audio-progress-bar:hover {
          height: 10px;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
        }

        .audio-progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          border-radius: 4px;
          position: relative;
          transition: width 0.1s ease;
          min-width: 4px;
        }

        .audio-progress-thumb {
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 12px;
          background: white;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .audio-progress-bar:hover .audio-progress-thumb {
          opacity: 1;
        }
      `))}function i2({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((f,g,E)=>f+(g===t.questions[E].correct?1:0),0),c=Math.round(o/5*100),u=o*10+(o===5?25:0),h=o===5;return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-5xl mb-4"},h?"🏆":o>=4?"🌟":"📝"),l.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},h?"Perfect Score!":o>=4?"Great Job!":"Lesson Complete!"),l.createElement("div",{className:"bg-blue-50 rounded-lg p-4 mb-4"},l.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),l.createElement("div",{className:"text-lg text-gray-600 mb-2"},c,"% Correct"),l.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," XP Earned!")),h&&l.createElement("div",{className:"bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-3 mb-4"},l.createElement("div",{className:"text-sm font-semibold text-blue-700 mb-2"},"🎉 Achievement Unlocked!"),l.createElement("div",{className:"font-medium"},"Perfect Foundation Score!")),l.createElement("div",{className:"space-y-3"},l.createElement("button",{onClick:r,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&l.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),l.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Lesson →"),l.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Foundation")))))}function o2({lesson:t,userAnswers:e,onClose:n}){return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"📝 Answer Review"),l.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,c=r.options[r.correct],u=r.options[i];return l.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},l.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),l.createElement("div",{className:"space-y-1"},l.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&l.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",c)))})),l.createElement("button",{onClick:n,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}const ms=[{id:"gaming-01",title:"My Gaming PC Setup",description:"Building the perfect gaming computer setup",duration:"38s",icon:"🖥️",audioFile:"audio/a1-gaming/audio-01-pc-setup.mp3",questions:[{question:"What graphics card does she have?",options:["RTX 3070","RTX 4070","GTX 1080","RX 6700"],correct:1},{question:"How much RAM is in her computer?",options:["8GB","16GB","32GB","64GB"],correct:1},{question:"What type of keyboard switches does she use?",options:["Blue switches","Brown switches","Red switches","Black switches"],correct:2},{question:"How much did she spend on her setup?",options:["$2000","$3000","$4000","$5000"],correct:1},{question:"What happens to her RGB lighting during games?",options:["Turns off","Changes colors when she gets kills","Stays red","Flashes randomly"],correct:1}]},{id:"gaming-02",title:"Online Gaming with Friends",description:"Playing with friends and communicating online",duration:"36s",icon:"🎮",audioFile:"audio/a1-gaming/audio-02-online-gaming.mp3",questions:[{question:"What game do they play together?",options:["Counter-Strike","Valorant","Overwatch","Call of Duty"],correct:1},{question:"What platform do they use to communicate?",options:["Skype","Discord","TeamSpeak","WhatsApp"],correct:1},{question:"What is her role in the team?",options:["Tank","DPS","Support","Sniper"],correct:2},{question:"How many games did they win last week?",options:["5","6","7","8"],correct:2},{question:"Where does her best friend live?",options:["Rio de Janeiro","São Paulo","Belo Horizonte","Brasília"],correct:1}]},{id:"gaming-03",title:"My Favorite Game Genres",description:"Different types of games and their characteristics",duration:"40s",icon:"🕹️",audioFile:"audio/a1-gaming/audio-03-game-genres.mp3",questions:[{question:"What is her favorite game genre?",options:["FPS","RPG","Strategy","Racing"],correct:1},{question:"Which RPG is her favorite?",options:["Skyrim","Final Fantasy","The Witcher 3","Dark Souls"],correct:2},{question:"How many hours did she play her favorite RPG?",options:["50 hours","75 hours","100 hours","150 hours"],correct:2},{question:"Why doesn't she like horror games?",options:["Bad graphics","Too expensive","Too scary","Boring story"],correct:2},{question:"Where does she find indie games?",options:["PlayStation Store","Steam","Epic Games","Xbox Store"],correct:1}]},{id:"gaming-04",title:"Esports Tournament",description:"Professional gaming competitions and events",duration:"39s",icon:"🏆",audioFile:"audio/a1-gaming/audio-04-esports-tournament.mp3",questions:[{question:"What game is the tournament for?",options:["Valorant","Counter-Strike","League of Legends","FIFA"],correct:2},{question:"How many teams are participating?",options:["16","24","32","64"],correct:2},{question:"How much is the entry fee per player?",options:["25 reais","50 reais","75 reais","100 reais"],correct:1},{question:"How much does first place win?",options:["3,000 reais","4,000 reais","5,000 reais","6,000 reais"],correct:2},{question:"How many hours do they practice daily?",options:["2 hours","3 hours","4 hours","5 hours"],correct:2}]},{id:"gaming-05",title:"Streaming on Twitch",description:"Broadcasting gameplay and building audience",duration:"37s",icon:"📺",audioFile:"audio/a1-gaming/audio-05-streaming-twitch.mp3",questions:[{question:"How many followers does she have on Twitch?",options:["650","750","850","950"],correct:2},{question:"Which days does she stream?",options:["Monday and Wednesday","Tuesday and Thursday","Friday and Saturday","Sunday and Monday"],correct:1},{question:"What time does she start streaming?",options:["7 PM","8 PM","9 PM","10 PM"],correct:1},{question:"How many viewers was her personal record?",options:["150","200","250","300"],correct:1},{question:"What type of microphone does she use?",options:["Red microphone","Black microphone","Blue microphone","Silver microphone"],correct:2}]},{id:"gaming-06",title:"Game Review Channel",description:"Analyzing and rating video games",duration:"41s",icon:"⭐",audioFile:"audio/a1-gaming/audio-06-game-reviews.mp3",questions:[{question:"What score did she give FIFA?",options:["6 out of 10","7 out of 10","8 out of 10","9 out of 10"],correct:1},{question:"What problem did she find with FIFA?",options:["Bad graphics","Slow gameplay","Too many bugs","Expensive price"],correct:2},{question:"How many hours did she play before reviewing?",options:["20 hours","25 hours","30 hours","35 hours"],correct:2},{question:"How many views did her video get on the first day?",options:["3,000","4,000","5,000","6,000"],correct:2},{question:"What type of game will she review next week?",options:["Racing game","Sports game","Horror game","Puzzle game"],correct:2}]},{id:"gaming-07",title:"Mobile Gaming Addiction",description:"Gaming on smartphones and tablets",duration:"35s",icon:"📱",audioFile:"audio/a1-gaming/audio-07-mobile-gaming.mp3",questions:[{question:"Which mobile game does she play?",options:["Free Fire","PUBG Mobile","Call of Duty Mobile","Fortnite Mobile"],correct:1},{question:"How many hours does she play daily?",options:["1 hour","2 hours","3 hours","4 hours"],correct:1},{question:"How much money has she spent this year?",options:["100 reais","150 reais","200 reais","250 reais"],correct:2},{question:"How many players are in Battle Royale mode?",options:["50","75","100","150"],correct:2},{question:"What happens to her phone during intensive games?",options:["Gets slow","Gets hot","Loses battery","Crashes"],correct:1}]},{id:"gaming-08",title:"Gaming Nostalgia",description:"Classic games and retro gaming culture",duration:"42s",icon:"🕰️",audioFile:"audio/a1-gaming/audio-08-gaming-nostalgia.mp3",questions:[{question:"What was her first gaming console?",options:["Nintendo 64","PlayStation 1","Sega Genesis","Game Boy"],correct:1},{question:"How old was she when she got her first console?",options:["6 years old","7 years old","8 years old","9 years old"],correct:2},{question:"Which classic game does she mention?",options:["Super Mario","Sonic","Crash Bandicoot","Street Fighter"],correct:2},{question:"How often did they take turns with the controller?",options:["Every 15 minutes","Every 30 minutes","Every 45 minutes","Every hour"],correct:1},{question:"What does she use to play old games now?",options:["Original consoles","Remasters","Emulators","Mobile apps"],correct:2}]},{id:"gaming-09",title:"Perfect Gaming Setup",description:"Creating the ideal gaming environment",duration:"44s",icon:"🛠️",audioFile:"audio/a1-gaming/audio-09-perfect-setup.mp3",questions:[{question:"Where is her gaming room located?",options:["Bedroom","Living room","Basement","Attic"],correct:2},{question:"What color are the walls painted?",options:["White","Blue","Red","Black"],correct:3},{question:"How many monitors fit on her desk?",options:["2","3","4","5"],correct:1},{question:"How much did her gaming chair cost?",options:["1,500 reais","2,000 reais","2,500 reais","3,000 reais"],correct:2},{question:"How often does she upgrade her setup?",options:["Every year","Every two years","Every three years","Every five years"],correct:1}]},{id:"gaming-10",title:"Virtual Reality Future",description:"VR technology and immersive gaming experiences",duration:"40s",icon:"🥽",audioFile:"audio/a1-gaming/audio-10-virtual-reality.mp3",questions:[{question:"Which VR headset did she try?",options:["PlayStation VR","Oculus Quest 2","HTC Vive","Valve Index"],correct:1},{question:"How much do VR headsets cost in Brazil?",options:["2,000 reais","2,500 reais","3,000 reais","3,500 reais"],correct:2},{question:"In how many years does she think VR will be more accessible?",options:["3 years","4 years","5 years","6 years"],correct:2},{question:"What is still a problem with VR for some people?",options:["High price","Motion sickness","Heavy weight","Bad graphics"],correct:1},{question:"When is she planning to buy her own VR headset?",options:["This year","Next year","In 2 years","In 3 years"],correct:1}]}];function a2({user:t,onBack:e}){const[n,r]=U.useState("selection"),[s,i]=U.useState(null),[o,c]=U.useState([]),[u,h]=U.useState(0),[f,g]=U.useState("Listen to Audio"),[E,I]=U.useState(!1),[P,L]=U.useState(!1),[M,x]=U.useState({}),[w,k]=U.useState(1),[R,V]=U.useState(null),[q,_]=U.useState(null),[p,v]=U.useState("🔥 Loading Firebase..."),[T,N]=U.useState(!0),S=U.useRef(null);U.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),N(!1);return}try{v("🔥 Connecting to Firebase...");const z=Ge(He,"students",t.username,"progress","gaming"),X=await Qe(z);if(X.exists()){const J=X.data();x(J.lessons||{}),_({totalXP:J.totalXP||0,completedLessons:Object.keys(J.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Gaming progress loaded")}else x({}),_({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New gamer initialized");N(!1)}catch(z){console.error("Firebase Error:",z),v("❌ Firebase connection failed"),N(!1),x({"gaming-01":{status:"completed",score:5,attempts:1},"gaming-02":{status:"completed",score:4,attempts:1}})}})()},[t]);const b=async(D,z,X=1)=>{if(t!=null&&t.username)try{const J=z*10+(z===5?25:0),fe=Date.now(),ue={lessonId:D,score:z,attempts:X,xpEarned:J,completedAt:fe,status:"completed",series:"gaming"};x(K=>({...K,[D]:ue}));const A=Ge(He,"students",t.username,"progress","gaming"),F=await Qe(A);let j={lessons:{[D]:ue},totalXP:J,lastUpdated:fe,series:"gaming"};if(F.exists()){const K=F.data();j={...K,lessons:{...K.lessons,[D]:ue},totalXP:(K.totalXP||0)+J,lastUpdated:fe}}await Ar(A,j,{merge:!0}),_(K=>({...K,totalXP:j.totalXP,completedLessons:Object.keys(j.lessons).length})),Object.keys(j.lessons).length===10&&console.log("🏆 GAMING WORLD COMPLETE! Game Master Achievement Unlocked!"),console.log("✅ Firebase Gaming Save Success:",{lessonId:D,score:z,xpEarned:J})}catch(J){console.error("❌ Firebase Gaming Save Error:",J)}},oe=()=>{S.current&&(S.current.paused?(S.current.play(),h(Math.max(u,20))):S.current.pause())},de=()=>{S.current&&(S.current.currentTime=Math.max(0,S.current.currentTime-10))},B=()=>{S.current&&(S.current.currentTime=Math.min(S.current.duration,S.current.currentTime+10))},Se=D=>{k(D),S.current&&(S.current.playbackRate=D)},$=D=>{const z=ms.find(X=>X.id===D);z&&(i(z),c(new Array(z.questions.length).fill(null)),h(0),g("Listen to Audio"),r("lesson"),V(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},Y=(D,z)=>{const X=[...o];X[D]=z,c(X);const J=X.filter(ue=>ue!==null).length,fe=20+J/s.questions.length*80;h(fe),g(`${J}/5 Questions Answered`)},te=async()=>{const D=o.reduce((J,fe,ue)=>J+(fe===s.questions[ue].correct?1:0),0),z=M[s.id],X=z?z.attempts+1:1;await b(s.id,D,X),console.log(`✅ Gaming Lesson ${s.id} saved to Firebase! Score: ${D}/5, Attempts: ${X}`),I(!0)},he=()=>{const D=ms.findIndex(X=>X.id===s.id),z=ms[D+1];I(!1),z?$(z.id):(r("selection"),alert("🎉 Congratulations! Gaming World Complete! 🎮 Game Master Achievement Unlocked!"))},ce=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},ye=()=>{s&&(I(!1),c(new Array(s.questions.length).fill(null)),V(Date.now()),h(0),g("Listen to Audio"),S.current&&(S.current.currentTime=0,S.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},me=D=>{const z=M[D];return z?{status:"Completed",class:"status-completed",score:z.score,attempts:z.attempts,xpEarned:z.xpEarned}:{status:"Available",class:"status-not-started"}},Ie=o.filter(D=>D!==null).length,Te=Ie===(s==null?void 0:s.questions.length);return T?l.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-6xl mb-4"},"🎮"),l.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),l.createElement("p",{className:"text-gray-600"},"Loading your Gaming World progress"))):n==="selection"?l.createElement("div",{className:"sophisticated-bg min-h-screen"},l.createElement("div",{className:"gaming-header"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},l.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),l.createElement("div",{className:"text-center mt-6"},l.createElement("div",{className:"text-5xl mb-4"},"🎮"),l.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"Gaming World"),l.createElement("p",{className:"text-blue-100 mb-4"},"Learn English through gaming vocabulary and Brazilian gaming culture"),l.createElement("div",{className:"gaming-accent-card rounded-lg p-3"},l.createElement("p",{className:"text-white font-medium"},"🎯 Questions match audio content • 🏆 Esports • 🎧 Gaming English!"))))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},l.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},l.createElement("div",{className:"text-sm"},l.createElement("span",{className:"text-primary-blue font-medium"},p),q&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Gaming XP: ",q.totalXP," • Lessons: ",q.completedLessons,"/10")))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},l.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},ms.map((D,z)=>{const X=me(D.id);return l.createElement("div",{key:D.id,className:"lesson-card gaming-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>$(D.id)},l.createElement("div",{className:"flex items-center justify-between mb-3"},l.createElement("div",{className:"text-2xl"},D.icon),l.createElement("span",{className:`status-badge ${X.class}`},X.status)),l.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",z+1,": ",D.title),l.createElement("p",{className:"text-sm text-gray-600 mb-3"},D.description),l.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},l.createElement("span",null,"🎧 ",D.duration),l.createElement("span",{className:"font-semibold text-purple-600"},X.score?`✅ ${X.score}/5`:"+50 XP")),X.attempts>0&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",X.attempts," • Score: ",X.score||0,"/5 • XP: ",X.xpEarned||0))}))),l.createElement("style",{jsx:!0},`
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
        `)):l.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},l.createElement("div",{className:"gaming-lesson-card rounded-xl p-6 mb-6"},l.createElement("div",{className:"flex items-center justify-between mb-4"},l.createElement("button",{onClick:ce,className:"text-purple-600 text-sm hover:underline"},"← Back to Gaming World"),l.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",ms.findIndex(D=>D.id===s.id)+1," of ",ms.length)),l.createElement("h2",{className:"text-2xl font-bold text-purple-600 mb-2"},s.title),l.createElement("p",{className:"text-gray-600 mb-4"},s.description),l.createElement("div",{className:"progress-card rounded-lg p-3"},l.createElement("div",{className:"flex justify-between text-sm mb-2"},l.createElement("span",null,"Lesson Progress"),l.createElement("span",null,f)),l.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},l.createElement("div",{className:"bg-purple-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),l.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🎮 Listen to the Gaming Audio"),l.createElement("audio",{ref:S,src:s.audioFile,onLoadedData:()=>{console.log("✅ Gaming Audio loaded:",s.audioFile),S.current&&(S.current.playbackRate=w)},onError:D=>{console.error("❌ Gaming Audio error:",D.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{S.current&&S.current.duration>0&&S.current.currentTime/S.current.duration*100>10&&h(Math.max(u,20))},className:"hidden"}),l.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},l.createElement("button",{onClick:de,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),l.createElement("button",{onClick:oe,className:"btn-audio bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},"▶️ Play/Pause"),l.createElement("button",{onClick:B,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),l.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},l.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(D=>l.createElement("button",{key:D,onClick:()=>Se(D),className:`px-3 py-1 rounded ${w===D?"bg-purple-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},D,"x"))),l.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🎮 Listen to gaming content and then answer the questions below")),l.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((D,z)=>l.createElement("div",{key:z,className:"question-card rounded-xl p-6"},l.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},z+1,". ",D.question),l.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},D.options.map((X,J)=>l.createElement("button",{key:J,onClick:()=>Y(z,J),className:`p-3 rounded-lg text-left transition-all ${o[z]===J?"bg-purple-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+J),". ",X)))))),l.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},l.createElement("button",{onClick:te,disabled:!Te,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${Te?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},Te?"🔥 Save Gaming Progress - Ready! 🎮":`Submit Answers (${Ie}/5 Complete)`),l.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Questions now match the gaming audio content!"))),E&&l.createElement(l2,{lesson:s,userAnswers:o,onNext:he,onReview:()=>L(!0),onClose:()=>I(!1),onRestart:ye}),P&&l.createElement(c2,{lesson:s,userAnswers:o,onClose:()=>L(!1)}),l.createElement("style",{jsx:!0},`
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
      `))}function l2({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((f,g,E)=>f+(g===t.questions[E].correct?1:0),0),c=Math.round(o/5*100),u=o*10+(o===5?25:0),h=o===5;return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-5xl mb-4"},h?"🏆":o>=4?"🎮":"📝"),l.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},h?"Perfect Gaming Score!":o>=4?"Great Gaming!":"Lesson Complete!"),l.createElement("div",{className:"bg-purple-50 rounded-lg p-4 mb-4"},l.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),l.createElement("div",{className:"text-lg text-gray-600 mb-2"},c,"% Correct"),l.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," Gaming XP Earned!")),h&&l.createElement("div",{className:"bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-3 mb-4"},l.createElement("div",{className:"text-sm font-semibold text-purple-700 mb-2"},"🎉 Achievement Unlocked!"),l.createElement("div",{className:"font-medium"},"🎮 Perfect Gaming Score!")),l.createElement("div",{className:"space-y-3"},l.createElement("button",{onClick:r,className:"w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&l.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),l.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Gaming Lesson →"),l.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Gaming World")))))}function c2({lesson:t,userAnswers:e,onClose:n}){return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"📝 Answer Review"),l.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,c=r.options[r.correct],u=r.options[i];return l.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},l.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),l.createElement("div",{className:"space-y-1"},l.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&l.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",c)))})),l.createElement("button",{onClick:n,className:"w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}const fs=[{id:"movies-01",title:"Going to the Cinema",description:"Learn about cinema experiences and movie outings",duration:"38s",icon:"🎬",audioFile:"audio/a1-movies/audio-01-cinema-date.mp3",questions:[{question:"Who did she go to the cinema with?",options:["Her sister","Her friend","Her boyfriend","Her mom"],correct:2},{question:"How much did each ticket cost?",options:["20 reais","25 reais","30 reais","35 reais"],correct:1},{question:"What type of movie did they watch?",options:["Comedy","Horror","Marvel movie","Romance"],correct:2},{question:"How early did they arrive?",options:["10 minutes","15 minutes","20 minutes","30 minutes"],correct:1},{question:"Where did they go after the movie?",options:["Home","McDonald's","Another cinema","The park"],correct:1}]},{id:"movies-02",title:"Netflix Night at Home",description:"Streaming and home entertainment vocabulary",duration:"36s",icon:"📺",audioFile:"audio/a1-movies/audio-02-netflix-night.mp3",questions:[{question:"Which series did she watch?",options:["The Crown","Stranger Things","Bridgerton","Money Heist"],correct:1},{question:"How many episodes did she watch?",options:["2","3","4","5"],correct:1},{question:"What did she drink while watching?",options:["Coffee","Tea","Hot chocolate","Soda"],correct:2},{question:"What time did she start watching?",options:["7 PM","8 PM","9 PM","10 PM"],correct:1},{question:"How many times did she pause?",options:["Once","Twice","Three times","Four times"],correct:1}]},{id:"movies-03",title:"Movie Genres",description:"Express preferences about different film types",duration:"40s",icon:"🎭",audioFile:"audio/a1-movies/audio-03-movie-genres.mp3",questions:[{question:"What is her favorite movie genre?",options:["Action","Horror","Romantic comedies","Science fiction"],correct:2},{question:"Which actor is in her favorite rom-com?",options:["Brad Pitt","Ryan Gosling","Leonardo DiCaprio","Will Smith"],correct:1},{question:"Why does she hate horror movies?",options:["They're boring","They give her nightmares","They're too long","They're expensive"],correct:1},{question:"How old is her nephew?",options:["4 years old","5 years old","6 years old","7 years old"],correct:2},{question:"What does she think about science fiction?",options:["It's boring","It's scary","It's interesting but complicated","It's her favorite"],correct:2}]},{id:"movies-04",title:"Binge Watching",description:"Learn about marathon viewing and streaming habits",duration:"39s",icon:"📱",audioFile:"audio/a1-movies/audio-04-binge-watching.mp3",questions:[{question:"Which series did she binge watch?",options:["Stranger Things","Wednesday","The Crown","Emily in Paris"],correct:1},{question:"How many episodes are in the first season?",options:["6","7","8","10"],correct:2},{question:"What did she order on Saturday?",options:["Chinese food","Pizza","Hamburgers","Sushi"],correct:1},{question:"What time did she start on Saturday?",options:["8 AM","9 AM","10 AM","11 AM"],correct:1},{question:"How many episodes will she watch per day next weekend?",options:["1","2","3","4"],correct:1}]},{id:"movies-05",title:"Movie Reviews",description:"Writing and sharing opinions about films",duration:"37s",icon:"⭐",audioFile:"audio/a1-movies/audio-05-movie-reviews.mp3",questions:[{question:"How many stars did she give Spider-Man?",options:["3 out of 5","4 out of 5","5 out of 5","2 out of 5"],correct:1},{question:"What was excellent about the movie?",options:["The story","The music","The acting","The length"],correct:2},{question:"How many views did her review get in the first hour?",options:["300","400","500","600"],correct:2},{question:"How many times does she watch movies before reviewing?",options:["Once","Twice","Three times","Four times"],correct:1},{question:"How does writing reviews help her English?",options:["Grammar practice","Speaking practice","Vocabulary improvement","Listening practice"],correct:2}]},{id:"movies-06",title:"Streaming Services",description:"Compare platforms and subscription costs",duration:"41s",icon:"💻",audioFile:"audio/a1-movies/audio-06-streaming-services.mp3",questions:[{question:"How much does Netflix cost per month?",options:["30 reais","35 reais","40 reais","45 reais"],correct:1},{question:"Which service costs 15 reais monthly?",options:["Netflix","Disney Plus","Amazon Prime","HBO Max"],correct:2},{question:"How many hours does she watch daily?",options:["3 hours","4 hours","5 hours","6 hours"],correct:1},{question:"Which show does she mention from Netflix?",options:["Wednesday","Stranger Things","Squid Game","The Crown"],correct:2},{question:"What extra benefit does Amazon Prime include?",options:["Free movies","Free shipping","Free music","Free books"],correct:1}]},{id:"movies-07",title:"Cinema Date Night",description:"Dating and social movie experiences",duration:"35s",icon:"💕",audioFile:"audio/a1-movies/audio-07-cinema-first-date.mp3",questions:[{question:"What time are they meeting?",options:["7:00 PM","7:30 PM","8:00 PM","8:30 PM"],correct:1},{question:"Where did she meet her date?",options:["Instagram","Facebook","Tinder","Work"],correct:2},{question:"What type of movie did she choose?",options:["Horror","Action","Romantic comedy","Drama"],correct:2},{question:"What color dress is she wearing?",options:["Red","Black","Blue","White"],correct:2},{question:"Why are cinema dates perfect for first meetings?",options:["They're cheap","Movies are fun","You can talk about the movie","It's dark"],correct:2}]},{id:"movies-08",title:"Classic vs Modern",description:"Compare old and new cinema styles",duration:"42s",icon:"🎞️",audioFile:"audio/a1-movies/audio-08-classic-vs-modern.mp3",questions:[{question:"Which classic movie did she watch?",options:["Gone with the Wind","Casablanca","Roman Holiday","Singin' in the Rain"],correct:1},{question:"What year was the classic movie made?",options:["1940","1941","1942","1943"],correct:2},{question:"Which modern movie did she compare it to?",options:["Avatar","Titanic","The Avengers","Star Wars"],correct:1},{question:"What do classic movies have that's better?",options:["Special effects","Sound quality","Storytelling and dialogue","Action scenes"],correct:2},{question:"What do modern films have that's incredible?",options:["Stories","Actors","Music","Special effects and sound"],correct:3}]},{id:"movies-09",title:"Theater Experience",description:"IMAX, sound systems, and cinema atmosphere",duration:"44s",icon:"🏛️",audioFile:"audio/a1-movies/audio-09-theater-experience.mp3",questions:[{question:"Which movie did she watch in IMAX?",options:["Avatar","Dune","Top Gun","Spider-Man"],correct:1},{question:"Which row does she prefer for the best viewing angle?",options:["Row F","Row G","Row H","Row I"],correct:2},{question:"What made her seat vibrate?",options:["The air conditioning","Other people","Sound effects","The movie length"],correct:2},{question:"What does she find annoying at the cinema?",options:["Expensive tickets","People talking","Loud sound","Long lines"],correct:1},{question:"When does she think theaters are worth the expense?",options:["For any movie","For romantic films","For big blockbusters","For horror movies"],correct:2}]},{id:"movies-10",title:"Awards Night",description:"Oscar parties and movie award celebrations",duration:"40s",icon:"🏆",audioFile:"audio/a1-movies/audio-10-awards-night.mp3",questions:[{question:"How many friends came to her Oscar party?",options:["6","7","8","9"],correct:2},{question:"What time did they start watching in Brazilian time?",options:["8 PM","9 PM","10 PM","11 PM"],correct:1},{question:"How many categories did she guess correctly?",options:["5","6","7","8"],correct:1},{question:"Who won their betting pool?",options:["She did","Carlos","Her sister","Nobody"],correct:1},{question:"What prize did the winner receive?",options:["Money","A movie ticket","A bottle of champagne","A trophy"],correct:2}]}];function u2({user:t,onBack:e}){const[n,r]=U.useState("selection"),[s,i]=U.useState(null),[o,c]=U.useState([]),[u,h]=U.useState(0),[f,g]=U.useState("Listen to Audio"),[E,I]=U.useState(!1),[P,L]=U.useState(!1),[M,x]=U.useState({}),[w,k]=U.useState(1),[R,V]=U.useState(null),[q,_]=U.useState(null),[p,v]=U.useState("🔥 Loading Firebase..."),[T,N]=U.useState(!0),S=U.useRef(null);U.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),N(!1);return}try{v("🔥 Connecting to Firebase...");const z=Ge(He,"students",t.username,"progress","movies"),X=await Qe(z);if(X.exists()){const J=X.data();x(J.lessons||{}),_({totalXP:J.totalXP||0,completedLessons:Object.keys(J.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Movies progress loaded")}else x({}),_({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New student initialized");N(!1)}catch(z){console.error("Firebase Error:",z),v("❌ Firebase connection failed"),N(!1),x({"movies-01":{status:"completed",score:5,attempts:1},"movies-02":{status:"completed",score:4,attempts:2}})}})()},[t]);const b=async(D,z,X=1)=>{if(t!=null&&t.username)try{const J=z*10+(z===5?25:0),fe=Date.now(),ue={lessonId:D,score:z,attempts:X,xpEarned:J,completedAt:fe,status:"completed"};x(K=>({...K,[D]:ue}));const A=Ge(He,"students",t.username,"progress","movies"),F=await Qe(A);let j={lessons:{[D]:ue},totalXP:J,lastUpdated:fe,series:"movies"};if(F.exists()){const K=F.data();j={...K,lessons:{...K.lessons,[D]:ue},totalXP:(K.totalXP||0)+J,lastUpdated:fe}}await Ar(A,j,{merge:!0}),_(K=>({...K,totalXP:j.totalXP,completedLessons:Object.keys(j.lessons).length})),console.log("✅ Firebase Save Success:",{lessonId:D,score:z,xpEarned:J})}catch(J){console.error("❌ Firebase Save Error:",J)}},oe=()=>{S.current&&(S.current.paused?(S.current.play(),h(Math.max(u,20))):S.current.pause())},de=()=>{S.current&&(S.current.currentTime=Math.max(0,S.current.currentTime-10))},B=()=>{S.current&&(S.current.currentTime=Math.min(S.current.duration,S.current.currentTime+10))},Se=D=>{k(D),S.current&&(S.current.playbackRate=D)},$=D=>{const z=fs.find(X=>X.id===D);z&&(i(z),c(new Array(z.questions.length).fill(null)),h(0),g("Listen to Audio"),r("lesson"),V(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},Y=(D,z)=>{const X=[...o];X[D]=z,c(X);const J=X.filter(ue=>ue!==null).length,fe=20+J/s.questions.length*80;h(fe),g(`${J}/5 Questions Answered`)},te=async()=>{const D=o.reduce((J,fe,ue)=>J+(fe===s.questions[ue].correct?1:0),0),z=M[s.id],X=z?z.attempts+1:1;await b(s.id,D,X),console.log(`✅ Movies Lesson ${s.id} saved to Firebase! Score: ${D}/5, Attempts: ${X}`),I(!0)},he=()=>{const D=fs.findIndex(X=>X.id===s.id),z=fs[D+1];I(!1),z?$(z.id):(r("selection"),alert("🎬 Congratulations! Movie Magic Course Complete! 🏆"))},ce=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},ye=()=>{s&&(I(!1),c(new Array(s.questions.length).fill(null)),V(Date.now()),h(0),g("Listen to Audio"),S.current&&(S.current.currentTime=0,S.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},me=D=>{const z=M[D];return z?{status:"Completed",class:"status-completed",score:z.score,attempts:z.attempts,xpEarned:z.xpEarned}:{status:"Available",class:"status-not-started"}},Ie=o.filter(D=>D!==null).length,Te=Ie===(s==null?void 0:s.questions.length);return T?l.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-6xl mb-4"},"🎬"),l.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),l.createElement("p",{className:"text-gray-600"},"Loading your Movies progress"))):n==="selection"?l.createElement("div",{className:"sophisticated-bg min-h-screen"},l.createElement("div",{className:"movies-header"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},l.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),l.createElement("div",{className:"text-center mt-6"},l.createElement("div",{className:"text-5xl mb-4"},"🎬"),l.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"Movie Magic Course"),l.createElement("p",{className:"text-red-100 mb-4"},"Learn English through cinema and entertainment!"),l.createElement("div",{className:"movies-accent-card rounded-lg p-3"},l.createElement("p",{className:"text-white font-medium"},"🎭 Cinema vocabulary • 📱 Streaming culture • 🏆 Earn XP!"))))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},l.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},l.createElement("div",{className:"text-sm"},l.createElement("span",{className:"text-primary-red font-medium"},p),q&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Total XP: ",q.totalXP," • Lessons: ",q.completedLessons,"/10")))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},l.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},fs.map((D,z)=>{const X=me(D.id);return l.createElement("div",{key:D.id,className:"lesson-card movies-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>$(D.id)},l.createElement("div",{className:"flex items-center justify-between mb-3"},l.createElement("div",{className:"text-2xl"},D.icon),l.createElement("span",{className:`status-badge ${X.class}`},X.status)),l.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",z+1,": ",D.title),l.createElement("p",{className:"text-sm text-gray-600 mb-3"},D.description),l.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},l.createElement("span",null,"🎧 ",D.duration),l.createElement("span",{className:"font-semibold text-red-600"},X.score?`✅ ${X.score}/5`:"+50 XP")),X.attempts>0&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",X.attempts," • Score: ",X.score||0,"/5 • XP: ",X.xpEarned||0))}))),l.createElement("style",{jsx:!0},`
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
        `)):l.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},l.createElement("div",{className:"movies-lesson-card rounded-xl p-6 mb-6"},l.createElement("div",{className:"flex items-center justify-between mb-4"},l.createElement("button",{onClick:ce,className:"text-red-600 text-sm hover:underline"},"← Back to Movies"),l.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",fs.findIndex(D=>D.id===s.id)+1," of ",fs.length)),l.createElement("h2",{className:"text-2xl font-bold text-red-600 mb-2"},s.title),l.createElement("p",{className:"text-gray-600 mb-4"},s.description),l.createElement("div",{className:"progress-card rounded-lg p-3"},l.createElement("div",{className:"flex justify-between text-sm mb-2"},l.createElement("span",null,"Lesson Progress"),l.createElement("span",null,f)),l.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},l.createElement("div",{className:"bg-red-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),l.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🎧 Listen to the Audio"),l.createElement("audio",{ref:S,src:s.audioFile,onLoadedData:()=>{console.log("✅ Audio loaded:",s.audioFile),S.current&&(S.current.playbackRate=w)},onError:D=>{console.error("❌ Audio error:",D.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{S.current&&S.current.duration>0&&S.current.currentTime/S.current.duration*100>10&&h(Math.max(u,20))},className:"hidden"}),l.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},l.createElement("button",{onClick:de,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),l.createElement("button",{onClick:oe,className:"btn-audio bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},"▶️ Play/Pause"),l.createElement("button",{onClick:B,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),l.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},l.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(D=>l.createElement("button",{key:D,onClick:()=>Se(D),className:`px-3 py-1 rounded ${w===D?"bg-red-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},D,"x"))),l.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🎬 Listen carefully and then answer the questions below")),l.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((D,z)=>l.createElement("div",{key:z,className:"question-card rounded-xl p-6"},l.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},z+1,". ",D.question),l.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},D.options.map((X,J)=>l.createElement("button",{key:J,onClick:()=>Y(z,J),className:`p-3 rounded-lg text-left transition-all ${o[z]===J?"bg-red-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+J),". ",X)))))),l.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},l.createElement("button",{onClick:te,disabled:!Te,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${Te?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},Te?"🎬 Save to Firebase - Ready! 🏆":`Submit Answers (${Ie}/5 Complete)`),l.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Cinema knowledge questions!"))),E&&l.createElement(d2,{lesson:s,userAnswers:o,onNext:he,onReview:()=>L(!0),onClose:()=>I(!1),onRestart:ye}),P&&l.createElement(h2,{lesson:s,userAnswers:o,onClose:()=>L(!1)}),l.createElement("style",{jsx:!0},`
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
      `))}function d2({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((f,g,E)=>f+(g===t.questions[E].correct?1:0),0),c=Math.round(o/5*100),u=o*10+(o===5?25:0),h=o===5;return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-5xl mb-4"},h?"🏆":o>=4?"🎬":"🎭"),l.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},h?"Cinema Master!":o>=4?"Great Movie Knowledge!":"Lesson Complete!"),l.createElement("div",{className:"bg-red-50 rounded-lg p-4 mb-4"},l.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),l.createElement("div",{className:"text-lg text-gray-600 mb-2"},c,"% Correct"),l.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," XP Earned!")),h&&l.createElement("div",{className:"bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-3 mb-4"},l.createElement("div",{className:"text-sm font-semibold text-red-700 mb-2"},"🎬 Achievement Unlocked!"),l.createElement("div",{className:"font-medium"},"Perfect Movie Score!")),l.createElement("div",{className:"space-y-3"},l.createElement("button",{onClick:r,className:"w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&l.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),l.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Lesson →"),l.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Movies")))))}function h2({lesson:t,userAnswers:e,onClose:n}){return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"🎬 Answer Review"),l.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,c=r.options[r.correct],u=r.options[i];return l.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},l.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),l.createElement("div",{className:"space-y-1"},l.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&l.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",c)))})),l.createElement("button",{onClick:n,className:"w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}const ps=[{id:"food-01",title:"Cooking Pasta at Home",description:"Learn cooking vocabulary and kitchen experiences",duration:"38s",icon:"🍝",audioFile:"audio/a1-food/audio-01-cooking-pasta.mp3",questions:[{question:"How long was the pasta supposed to boil?",options:["10 minutes","12 minutes","15 minutes","20 minutes"],correct:1},{question:"What herb did she use from her garden?",options:["Oregano","Rosemary","Basil","Thyme"],correct:2},{question:"Who helped her grate the cheese?",options:["Her sister","Her mom","Maria","Her boyfriend"],correct:2},{question:"How long did she accidentally cook the pasta?",options:["15 minutes","18 minutes","20 minutes","25 minutes"],correct:2},{question:"What does she think about cooking at home?",options:["It's too difficult","It's too expensive","It's better than delivery","It's too time-consuming"],correct:2}]},{id:"food-02",title:"Brazilian BBQ Weekend",description:"Traditional churrasco and Brazilian food culture",duration:"36s",icon:"🥩",audioFile:"audio/a1-food/audio-02-brazilian-bbq.mp3",questions:[{question:"Who was the grillmaster?",options:["Her father","Uncle João","Her brother","Her cousin"],correct:1},{question:"What time did they start eating?",options:["1 PM","2 PM","3 PM","4 PM"],correct:1},{question:"What did she make with bacon?",options:["Salad","Farofa","Rice","Beans"],correct:1},{question:"How many people attended the barbecue?",options:["12","13","15","18"],correct:2},{question:"What type of music did they listen to?",options:["Rock","Pop","Sertanejo","Funk"],correct:2}]},{id:"food-03",title:"Pizza Delivery Disaster",description:"Food delivery experiences and disappointments",duration:"40s",icon:"🍕",audioFile:"audio/a1-food/audio-03-pizza-delivery.mp3",questions:[{question:"How much did the pizza cost?",options:["30 reais","35 reais","40 reais","45 reais"],correct:1},{question:"How long was the pizza supposed to take?",options:["20 minutes","25 minutes","30 minutes","45 minutes"],correct:2},{question:"How long did she actually wait?",options:["45 minutes","1 hour","1 hour 15 minutes","1 hour 30 minutes"],correct:2},{question:"Why was the delivery late?",options:["Traffic jam","Wrong order","Delivery guy got lost","Restaurant was busy"],correct:2},{question:"What will she make next time instead?",options:["Soup","Salad","Pasta","Sandwich"],correct:3}]},{id:"food-04",title:"Fancy Restaurant Date",description:"Fine dining and restaurant experiences",duration:"39s",icon:"🍽️",audioFile:"audio/a1-food/audio-04-fancy-restaurant.mp3",questions:[{question:"What language was the menu written in?",options:["Portuguese","English","Italian","Spanish"],correct:2},{question:"What did they order as the main course?",options:["Pasta and pizza","Risotto and salmon","Steak and chicken","Soup and salad"],correct:1},{question:"How much did the wine cost?",options:["60 reais","70 reais","80 reais","90 reais"],correct:2},{question:"How much did they spend in total?",options:["200 reais","220 reais","240 reais","260 reais"],correct:2},{question:"How did she feel about the portion sizes?",options:["Perfect","Too big","Too tiny","Just right"],correct:2}]},{id:"food-05",title:"Learning to Bake Bread",description:"Baking skills and homemade bread making",duration:"37s",icon:"🍞",audioFile:"audio/a1-food/audio-05-baking-bread.mp3",questions:[{question:"How many YouTube videos did she watch?",options:["3","4","5","6"],correct:2},{question:"How was her first bread attempt?",options:["Perfect","Good","Okay","Hard as a rock"],correct:3},{question:"How long did it take to perfect the recipe?",options:["2 weeks","3 weeks","4 weeks","1 month"],correct:1},{question:"When does she bake bread now?",options:["Every day","Every Sunday morning","Every weekend","Once a month"],correct:1},{question:"Who gave her the recipe?",options:["Her mother","Her aunt","Her grandmother","Her sister"],correct:2}]},{id:"food-06",title:"Street Food Adventure",description:"Exploring São Paulo food districts and flavors",duration:"41s",icon:"🥟",audioFile:"audio/a1-food/audio-06-street-food.mp3",questions:[{question:"Which district did she visit first?",options:["Vila Madalena","Liberdade","Centro","Moema"],correct:1},{question:"What did takoyaki contain?",options:["Shrimp","Octopus","Fish","Chicken"],correct:1},{question:"How much did 6 pieces of takoyaki cost?",options:["12 reais","15 reais","18 reais","20 reais"],correct:1},{question:"How much was the gourmet hot dog?",options:["15 reais","16 reais","18 reais","20 reais"],correct:2},{question:"What does she think about street food compared to fast food chains?",options:["It's more expensive","It's fresher and more interesting","It's less healthy","It's the same quality"],correct:1}]},{id:"food-07",title:"Healthy Eating Journey",description:"Diet changes and healthy lifestyle choices",duration:"35s",icon:"🥗",audioFile:"audio/a1-food/audio-07-healthy-eating.mp3",questions:[{question:"When did she start her healthy eating journey?",options:["2 months ago","3 months ago","4 months ago","6 months ago"],correct:1},{question:"What vegetables does she put in her smoothie?",options:["Carrots","Broccoli","Spinach","Cucumber"],correct:2},{question:"When does she do meal prep?",options:["Saturdays","Sundays","Mondays","Daily"],correct:1},{question:"How much weight has she lost?",options:["6 kilos","7 kilos","8 kilos","10 kilos"],correct:2},{question:"How often does she eat dark chocolate now?",options:["Once a week","Twice a week","Every day","Never"],correct:1}]},{id:"food-08",title:"Family Recipe Secrets",description:"Traditional recipes and family food traditions",duration:"42s",icon:"🍫",audioFile:"audio/a1-food/audio-08-family-recipe.mp3",questions:[{question:"Who originally had the secret recipe?",options:["Her grandmother","Her great-grandmother","Her mother","Her aunt"],correct:1},{question:"When did her mother teach her the recipe?",options:["Last Easter","Last Christmas","Her birthday","New Year"],correct:1},{question:"What is the secret ingredient?",options:["Vanilla","Cinnamon","Sea salt","Lemon"],correct:2},{question:"How many brigadeiros did she make for her birthday?",options:["30","40","50","60"],correct:2},{question:"What makes the secret ingredient special?",options:["Makes it sweeter","Makes it softer","Makes chocolate flavor more intense","Makes it last longer"],correct:2}]},{id:"food-09",title:"International Food Festival",description:"Global cuisine experiences and food diversity",duration:"44s",icon:"🌮",audioFile:"audio/a1-food/audio-09-food-festival.mp3",questions:[{question:"Where was the food festival located?",options:["Ibirapuera Park","Vila Madalena","Centro","Paulista Avenue"],correct:0},{question:"How many countries were represented?",options:["12","15","18","20"],correct:1},{question:"How much did the Mexican tacos cost?",options:["15 reais","18 reais","20 reais","22 reais"],correct:1},{question:"Which stands had the longest lines?",options:["Thai and Mexican","Indian and Thai","Japanese and Italian","Mexican and Indian"],correct:2},{question:"How long did they spend at the festival?",options:["4 hours","5 hours","6 hours","7 hours"],correct:1}]},{id:"food-10",title:"Opening My Own Restaurant",description:"Restaurant business dreams and entrepreneurship",duration:"40s",icon:"🏪",audioFile:"audio/a1-food/audio-10-own-restaurant.mp3",questions:[{question:"How long has she been saving money?",options:["1 year","2 years","3 years","4 years"],correct:1},{question:"How much money has she saved?",options:["40,000 reais","45,000 reais","50,000 reais","60,000 reais"],correct:2},{question:"How much is the monthly rent?",options:["6,000 reais","7,000 reais","8,000 reais","9,000 reais"],correct:2},{question:"When is she planning to open?",options:["Next October","Next November","Next December","Next January"],correct:2},{question:"What type of food will she serve?",options:["International fusion","Italian classics","Asian street food","Brazilian comfort food with modern twist"],correct:3}]}];function m2({user:t,onBack:e}){const[n,r]=U.useState("selection"),[s,i]=U.useState(null),[o,c]=U.useState([]),[u,h]=U.useState(0),[f,g]=U.useState("Listen to Audio"),[E,I]=U.useState(!1),[P,L]=U.useState(!1),[M,x]=U.useState({}),[w,k]=U.useState(1),[R,V]=U.useState(null),[q,_]=U.useState(null),[p,v]=U.useState("🔥 Loading Firebase..."),[T,N]=U.useState(!0),S=U.useRef(null);U.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),N(!1);return}try{v("🔥 Connecting to Firebase...");const z=Ge(He,"students",t.username,"progress","food"),X=await Qe(z);if(X.exists()){const J=X.data();x(J.lessons||{}),_({totalXP:J.totalXP||0,completedLessons:Object.keys(J.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Food progress loaded")}else x({}),_({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New student initialized");N(!1)}catch(z){console.error("Firebase Error:",z),v("❌ Firebase connection failed"),N(!1),x({"food-01":{status:"completed",score:5,attempts:1},"food-02":{status:"completed",score:4,attempts:2}})}})()},[t]);const b=async(D,z,X=1)=>{if(t!=null&&t.username)try{const J=z*10+(z===5?25:0),fe=Date.now(),ue={lessonId:D,score:z,attempts:X,xpEarned:J,completedAt:fe,status:"completed"};x(K=>({...K,[D]:ue}));const A=Ge(He,"students",t.username,"progress","food"),F=await Qe(A);let j={lessons:{[D]:ue},totalXP:J,lastUpdated:fe,series:"food"};if(F.exists()){const K=F.data();j={...K,lessons:{...K.lessons,[D]:ue},totalXP:(K.totalXP||0)+J,lastUpdated:fe}}await Ar(A,j,{merge:!0}),_(K=>({...K,totalXP:j.totalXP,completedLessons:Object.keys(j.lessons).length})),console.log("✅ Firebase Save Success:",{lessonId:D,score:z,xpEarned:J})}catch(J){console.error("❌ Firebase Save Error:",J)}},oe=()=>{S.current&&(S.current.paused?(S.current.play(),h(Math.max(u,20))):S.current.pause())},de=()=>{S.current&&(S.current.currentTime=Math.max(0,S.current.currentTime-10))},B=()=>{S.current&&(S.current.currentTime=Math.min(S.current.duration,S.current.currentTime+10))},Se=D=>{k(D),S.current&&(S.current.playbackRate=D)},$=D=>{const z=ps.find(X=>X.id===D);z&&(i(z),c(new Array(z.questions.length).fill(null)),h(0),g("Listen to Audio"),r("lesson"),V(Date.now()),window.scrollTo({top:0,behavior:"smooth"}))},Y=(D,z)=>{const X=[...o];X[D]=z,c(X);const J=X.filter(ue=>ue!==null).length,fe=20+J/s.questions.length*80;h(fe),g(`${J}/5 Questions Answered`)},te=async()=>{const D=o.reduce((J,fe,ue)=>J+(fe===s.questions[ue].correct?1:0),0),z=M[s.id],X=z?z.attempts+1:1;await b(s.id,D,X),console.log(`✅ Food Lesson ${s.id} saved to Firebase! Score: ${D}/5, Attempts: ${X}`),I(!0)},he=()=>{const D=ps.findIndex(X=>X.id===s.id),z=ps[D+1];I(!1),z?$(z.id):(r("selection"),alert("🍕 Congratulations! Food Adventures Course Complete! 🍴"))},ce=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},ye=()=>{s&&(I(!1),c(new Array(s.questions.length).fill(null)),V(Date.now()),h(0),g("Listen to Audio"),S.current&&(S.current.currentTime=0,S.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},me=D=>{const z=M[D];return z?{status:"Completed",class:"status-completed",score:z.score,attempts:z.attempts,xpEarned:z.xpEarned}:{status:"Available",class:"status-not-started"}},Ie=o.filter(D=>D!==null).length,Te=Ie===(s==null?void 0:s.questions.length);return T?l.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-6xl mb-4"},"🍕"),l.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),l.createElement("p",{className:"text-gray-600"},"Loading your Food progress"))):n==="selection"?l.createElement("div",{className:"sophisticated-bg min-h-screen"},l.createElement("div",{className:"food-header"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},l.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),l.createElement("div",{className:"text-center mt-6"},l.createElement("div",{className:"text-5xl mb-4"},"🍕"),l.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"Food Adventures Course"),l.createElement("p",{className:"text-orange-100 mb-4"},"Learn English through food culture and cooking!"),l.createElement("div",{className:"food-accent-card rounded-lg p-3"},l.createElement("p",{className:"text-white font-medium"},"🍴 Food vocabulary • 🥘 Brazilian cuisine • 🏆 Earn XP!"))))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},l.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},l.createElement("div",{className:"text-sm"},l.createElement("span",{className:"text-primary-orange font-medium"},p),q&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Total XP: ",q.totalXP," • Lessons: ",q.completedLessons,"/10")))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},l.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},ps.map((D,z)=>{const X=me(D.id);return l.createElement("div",{key:D.id,className:"lesson-card food-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>$(D.id)},l.createElement("div",{className:"flex items-center justify-between mb-3"},l.createElement("div",{className:"text-2xl"},D.icon),l.createElement("span",{className:`status-badge ${X.class}`},X.status)),l.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",z+1,": ",D.title),l.createElement("p",{className:"text-sm text-gray-600 mb-3"},D.description),l.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},l.createElement("span",null,"🎧 ",D.duration),l.createElement("span",{className:"font-semibold text-orange-600"},X.score?`✅ ${X.score}/5`:"+50 XP")),X.attempts>0&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",X.attempts," • Score: ",X.score||0,"/5 • XP: ",X.xpEarned||0))}))),l.createElement("style",{jsx:!0},`
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
        `)):l.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},l.createElement("div",{className:"food-lesson-card rounded-xl p-6 mb-6"},l.createElement("div",{className:"flex items-center justify-between mb-4"},l.createElement("button",{onClick:ce,className:"text-orange-600 text-sm hover:underline"},"← Back to Food"),l.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",ps.findIndex(D=>D.id===s.id)+1," of ",ps.length)),l.createElement("h2",{className:"text-2xl font-bold text-orange-600 mb-2"},s.title),l.createElement("p",{className:"text-gray-600 mb-4"},s.description),l.createElement("div",{className:"progress-card rounded-lg p-3"},l.createElement("div",{className:"flex justify-between text-sm mb-2"},l.createElement("span",null,"Lesson Progress"),l.createElement("span",null,f)),l.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},l.createElement("div",{className:"bg-orange-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),l.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"🎧 Listen to the Audio"),l.createElement("audio",{ref:S,src:s.audioFile,onLoadedData:()=>{console.log("✅ Audio loaded:",s.audioFile),S.current&&(S.current.playbackRate=w)},onError:D=>{console.error("❌ Audio error:",D.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{S.current&&S.current.duration>0&&S.current.currentTime/S.current.duration*100>10&&h(Math.max(u,20))},className:"hidden"}),l.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},l.createElement("button",{onClick:de,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),l.createElement("button",{onClick:oe,className:"btn-audio bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},"▶️ Play/Pause"),l.createElement("button",{onClick:B,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),l.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},l.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(D=>l.createElement("button",{key:D,onClick:()=>Se(D),className:`px-3 py-1 rounded ${w===D?"bg-orange-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},D,"x"))),l.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🍕 Listen carefully and then answer the questions below")),l.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((D,z)=>l.createElement("div",{key:z,className:"question-card rounded-xl p-6"},l.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},z+1,". ",D.question),l.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},D.options.map((X,J)=>l.createElement("button",{key:J,onClick:()=>Y(z,J),className:`p-3 rounded-lg text-left transition-all ${o[z]===J?"bg-orange-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+J),". ",X)))))),l.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},l.createElement("button",{onClick:te,disabled:!Te,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${Te?"bg-orange-500 hover:bg-orange-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},Te?"🍕 Save to Firebase - Ready! 🍴":`Submit Answers (${Ie}/5 Complete)`),l.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Food culture questions!"))),E&&l.createElement(f2,{lesson:s,userAnswers:o,onNext:he,onReview:()=>L(!0),onClose:()=>I(!1),onRestart:ye}),P&&l.createElement(p2,{lesson:s,userAnswers:o,onClose:()=>L(!1)}),l.createElement("style",{jsx:!0},`
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
      `))}function f2({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((f,g,E)=>f+(g===t.questions[E].correct?1:0),0),c=Math.round(o/5*100),u=o*10+(o===5?25:0),h=o===5;return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-5xl mb-4"},h?"🏆":o>=4?"🍕":"🍴"),l.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},h?"Food Explorer!":o>=4?"Great Food Knowledge!":"Lesson Complete!"),l.createElement("div",{className:"bg-orange-50 rounded-lg p-4 mb-4"},l.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),l.createElement("div",{className:"text-lg text-gray-600 mb-2"},c,"% Correct"),l.createElement("div",{className:"text-orange-500 font-semibold text-lg"},"+",u," XP Earned!")),h&&l.createElement("div",{className:"bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-3 mb-4"},l.createElement("div",{className:"text-sm font-semibold text-orange-700 mb-2"},"🍕 Achievement Unlocked!"),l.createElement("div",{className:"font-medium"},"Perfect Food Score!")),l.createElement("div",{className:"space-y-3"},l.createElement("button",{onClick:r,className:"w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&l.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),l.createElement("button",{onClick:n,className:"w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"},"Next Lesson →"),l.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Food")))))}function p2({lesson:t,userAnswers:e,onClose:n}){return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"🍕 Answer Review"),l.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,c=r.options[r.correct],u=r.options[i];return l.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},l.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),l.createElement("div",{className:"space-y-1"},l.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&l.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",c)))})),l.createElement("button",{onClick:n,className:"w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}const gs=[{id:"travel-01",title:"First International Trip",description:"Learn about international travel experiences and airports",duration:"38s",icon:"✈️",audioFile:"audio/a1-travel/audio-01-first-international.mp3",questions:[{question:"Which airport did she fly from in São Paulo?",options:["Congonhas","Guarulhos","Viracopos","Santos Dumont"],correct:1},{question:"How long was the flight to Paris?",options:["9 hours","10 hours","11 hours","12 hours"],correct:2},{question:"Which Paris airport did she arrive at?",options:["Orly","Charles de Gaulle","Le Bourget","Beauvais"],correct:1},{question:"How much did the taxi cost?",options:["45 euros","50 euros","55 euros","60 euros"],correct:2},{question:"How much is 55 euros in reais?",options:["250 reais","300 reais","350 reais","400 reais"],correct:1}]},{id:"travel-02",title:"Beach Vacation in Thailand",description:"Tropical destinations and resort experiences",duration:"36s",icon:"🏖️",audioFile:"audio/a1-travel/audio-02-thailand-beach.mp3",questions:[{question:"How long did she stay in Thailand?",options:["1 week","2 weeks","3 weeks","1 month"],correct:1},{question:"Which city did she visit?",options:["Bangkok","Chiang Mai","Phuket","Krabi"],correct:2},{question:"How much did the resort cost per night?",options:["2,000 baht","2,500 baht","3,000 baht","3,500 baht"],correct:1},{question:"What is 2,500 baht in reais?",options:["300 reais","350 reais","400 reais","450 reais"],correct:2},{question:"How much did a street food meal cost?",options:["80 baht","100 baht","120 baht","150 baht"],correct:1}]},{id:"travel-03",title:"European Backpacking Adventure",description:"Multi-country travel and budget accommodation",duration:"40s",icon:"🎒",audioFile:"audio/a1-travel/audio-03-europe-backpacking.mp3",questions:[{question:"How many countries did they visit?",options:["6","7","8","9"],correct:2},{question:"How much did hostels cost per night?",options:["20-35 euros","25-40 euros","30-45 euros","35-50 euros"],correct:1},{question:"Which was the most expensive city?",options:["Paris","Amsterdam","Zurich","Brussels"],correct:2},{question:"How much did a sandwich cost in the expensive city?",options:["12 euros","15 euros","18 euros","20 euros"],correct:1},{question:"How much was the Eurail pass for 30 days?",options:["400 euros","450 euros","500 euros","550 euros"],correct:2}]},{id:"travel-04",title:"Business Trip to New York",description:"Professional travel and conference experiences",duration:"39s",icon:"🏙️",audioFile:"audio/a1-travel/audio-04-business-newyork.mp3",questions:[{question:"How many nights did she stay in New York?",options:["3 nights","4 nights","5 nights","6 nights"],correct:1},{question:"How much did the hotel cost per night?",options:["250 dollars","300 dollars","350 dollars","400 dollars"],correct:1},{question:"What was the conference about?",options:["Technology","Digital marketing","Finance","Healthcare"],correct:1},{question:"Which companies had speakers at the conference?",options:["Google and Apple","Facebook and Microsoft","Amazon and Tesla","Google, Facebook, and Amazon"],correct:3},{question:"Where did she eat pizza?",options:["Times Square","Central Park","Little Italy","Brooklyn"],correct:2}]},{id:"travel-05",title:"Family Vacation in Disney World",description:"Theme parks and family travel experiences",duration:"37s",icon:"🏰",audioFile:"audio/a1-travel/audio-05-disney-family.mp3",questions:[{question:"How old is her daughter?",options:["6 years old","7 years old","8 years old","9 years old"],correct:2},{question:"How many days did they stay?",options:["4 days","5 days","6 days","7 days"],correct:1},{question:"How much did park tickets cost per day?",options:["120 dollars","130 dollars","150 dollars","180 dollars"],correct:2},{question:"What was her daughter's favorite ride?",options:["Big Thunder Mountain","Space Mountain","Pirates of the Caribbean","Haunted Mansion"],correct:1},{question:"How much did a hamburger cost in the park?",options:["15 dollars","16 dollars","18 dollars","20 dollars"],correct:2}]},{id:"travel-06",title:"Solo Trip to Japan",description:"Independent travel and cultural experiences",duration:"41s",icon:"🇯🇵",audioFile:"audio/a1-travel/audio-06-solo-japan.mp3",questions:[{question:"How many days did she spend in Japan total?",options:["8 days","9 days","10 days","12 days"],correct:2},{question:"How many days did she stay in Tokyo?",options:["5 days","6 days","7 days","8 days"],correct:1},{question:"How much did the capsule hotel cost per night?",options:["3,500 yen","4,000 yen","4,500 yen","5,000 yen"],correct:1},{question:"What is 4,000 yen in reais?",options:["120 reais","150 reais","180 reais","200 reais"],correct:1},{question:"How long did the bullet train take from Tokyo to Kyoto?",options:["2 hours","2 hours 15 minutes","2 hours 30 minutes","3 hours"],correct:1}]},{id:"travel-07",title:"Road Trip Through Argentina",description:"Regional travel and border crossing experiences",duration:"35s",icon:"🚗",audioFile:"audio/a1-travel/audio-07-argentina-roadtrip.mp3",questions:[{question:"How long did the road trip take with stops?",options:["20 hours","22 hours","24 hours","26 hours"],correct:1},{question:"How many nights did they spend in small towns?",options:["1 night","2 nights","3 nights","4 nights"],correct:1},{question:"Which neighborhood did they stay in Buenos Aires?",options:["San Telmo","Recoleta","Palermo","Puerto Madero"],correct:2},{question:"How many nights did they stay in Buenos Aires?",options:["5 nights","6 nights","7 nights","8 nights"],correct:1},{question:"How much did they spend per day for both people?",options:["150 reais","180 reais","200 reais","250 reais"],correct:2}]},{id:"travel-08",title:"Amazon Rainforest Expedition",description:"Eco-tourism and nature adventures in Brazil",duration:"42s",icon:"🌿",audioFile:"audio/a1-travel/audio-08-amazon-expedition.mp3",questions:[{question:"Which city did they fly to first?",options:["Belém","Manaus","Porto Velho","Rio Branco"],correct:1},{question:"How long was the boat ride to the lodge?",options:["2 hours","3 hours","4 hours","5 hours"],correct:1},{question:"What type of dolphins did they see?",options:["Gray dolphins","Blue dolphins","Pink dolphins","White dolphins"],correct:2},{question:"Which big cat did they see from a distance?",options:["Puma","Ocelot","Jaguar","Margay"],correct:2},{question:"What did their guide teach them about?",options:["Cooking techniques","Medicinal plants and survival","Fishing methods","Local languages"],correct:1}]},{id:"travel-09",title:"Studying Abroad in Canada",description:"Educational travel and international study programs",duration:"44s",icon:"🍁",audioFile:"audio/a1-travel/audio-09-studying-canada.mp3",questions:[{question:"How long is her study program?",options:["4 months","5 months","6 months","8 months"],correct:2},{question:"How much does she pay for room and board per month?",options:["700 CAD","800 CAD","900 CAD","1000 CAD"],correct:1},{question:"How much does the English school cost monthly?",options:["1,000 CAD","1,200 CAD","1,400 CAD","1,500 CAD"],correct:1},{question:"What was the temperature yesterday?",options:["Minus 3°C","Minus 5°C","Minus 7°C","Minus 10°C"],correct:1},{question:"How long has she been there already?",options:["2 months","3 months","4 months","5 months"],correct:1}]},{id:"travel-10",title:"Dream Honeymoon in Maldives",description:"Luxury travel and dream vacation planning",duration:"40s",icon:"🏝️",audioFile:"audio/a1-travel/audio-10-maldives-honeymoon.mp3",questions:[{question:"How long have they been saving money?",options:["15 months","18 months","20 months","24 months"],correct:1},{question:"How much money have they saved?",options:["20,000 reais","23,000 reais","25,000 reais","30,000 reais"],correct:2},{question:"How much does the resort cost per night?",options:["700 dollars","800 dollars","900 dollars","1000 dollars"],correct:1},{question:"How many nights do they plan to stay?",options:["5 nights","6 nights","7 nights","8 nights"],correct:2},{question:"How much do flights cost for both of them?",options:["2,500 dollars","3,000 dollars","3,500 dollars","4,000 dollars"],correct:1}]}];function g2({user:t,onBack:e}){const[n,r]=U.useState("selection"),[s,i]=U.useState(null),[o,c]=U.useState([]),[u,h]=U.useState(0),[f,g]=U.useState("Listen to Audio"),[E,I]=U.useState(!1),[P,L]=U.useState(!1),[M,x]=U.useState({}),[w,k]=U.useState(1),[R,V]=U.useState(null),[q,_]=U.useState(null),[p,v]=U.useState("🔥 Loading Firebase..."),[T,N]=U.useState(!0),[S,b]=U.useState(!1),[oe,de]=U.useState({currentTime:0,duration:0,percentage:0}),B=U.useRef(null);U.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),N(!1);return}try{v("🔥 Connecting to Firebase...");const F=Ge(He,"students",t.username,"progress","travel"),j=await Qe(F);if(j.exists()){const K=j.data();x(K.lessons||{}),_({totalXP:K.totalXP||0,completedLessons:Object.keys(K.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Travel progress loaded")}else x({}),_({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: New traveler initialized");N(!1)}catch(F){console.error("Firebase Error:",F),v("❌ Firebase connection failed"),N(!1),x({"travel-01":{status:"completed",score:5,attempts:1},"travel-02":{status:"completed",score:4,attempts:2}})}})()},[t]);const Se=async(A,F,j=1)=>{if(t!=null&&t.username)try{const K=F*10+(F===5?25:0),xe=Date.now(),Ce={lessonId:A,score:F,attempts:j,xpEarned:K,completedAt:xe,status:"completed"};x(Re=>({...Re,[A]:Ce}));const Jt=Ge(He,"students",t.username,"progress","travel"),zt=await Qe(Jt);let st={lessons:{[A]:Ce},totalXP:K,lastUpdated:xe,series:"travel"};if(zt.exists()){const Re=zt.data();st={...Re,lessons:{...Re.lessons,[A]:Ce},totalXP:(Re.totalXP||0)+K,lastUpdated:xe}}await Ar(Jt,st,{merge:!0}),_(Re=>({...Re,totalXP:st.totalXP,completedLessons:Object.keys(st.lessons).length})),console.log("✅ Firebase Save Success:",{lessonId:A,score:F,xpEarned:K})}catch(K){console.error("❌ Firebase Save Error:",K)}},$=A=>{if(!A||isNaN(A))return"0:00";const F=Math.floor(A/60),j=Math.floor(A%60);return`${F}:${j.toString().padStart(2,"0")}`},Y=()=>{B.current&&(B.current.paused?(B.current.play(),b(!0),h(Math.max(u,20))):(B.current.pause(),b(!1)))},te=()=>{B.current&&(B.current.currentTime=Math.max(0,B.current.currentTime-10))},he=()=>{B.current&&(B.current.currentTime=Math.min(B.current.duration,B.current.currentTime+10))},ce=A=>{k(A),B.current&&(B.current.playbackRate=A)},ye=A=>{if(B.current&&B.current.duration){const F=A.currentTarget.getBoundingClientRect(),xe=(A.clientX-F.left)/F.width*B.current.duration;B.current.currentTime=xe}},me=A=>{const F=gs.find(j=>j.id===A);F&&(i(F),c(new Array(F.questions.length).fill(null)),h(0),g("Listen to Audio"),r("lesson"),V(Date.now()),b(!1),de({currentTime:0,duration:0,percentage:0}),window.scrollTo({top:0,behavior:"smooth"}))},Ie=(A,F)=>{const j=[...o];j[A]=F,c(j);const K=j.filter(Ce=>Ce!==null).length,xe=20+K/s.questions.length*80;h(xe),g(`${K}/5 Questions Answered`)},Te=async()=>{const A=o.reduce((K,xe,Ce)=>K+(xe===s.questions[Ce].correct?1:0),0),F=M[s.id],j=F?F.attempts+1:1;await Se(s.id,A,j),console.log(`✅ Travel Lesson ${s.id} saved to Firebase! Score: ${A}/5, Attempts: ${j}`),I(!0)},D=()=>{const A=gs.findIndex(j=>j.id===s.id),F=gs[A+1];I(!1),F?me(F.id):(r("selection"),alert("🌍 Congratulations! Travel Dreams Course Complete! ✈️ World Traveler Achievement Unlocked!"))},z=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},X=()=>{s&&(I(!1),c(new Array(s.questions.length).fill(null)),V(Date.now()),h(0),g("Listen to Audio"),b(!1),de({currentTime:0,duration:0,percentage:0}),B.current&&(B.current.currentTime=0,B.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},J=A=>{const F=M[A];return F?{status:"Completed",class:"status-completed",score:F.score,attempts:F.attempts,xpEarned:F.xpEarned}:{status:"Available",class:"status-not-started"}},fe=o.filter(A=>A!==null).length,ue=fe===(s==null?void 0:s.questions.length);return T?l.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-6xl mb-4"},"✈️"),l.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),l.createElement("p",{className:"text-gray-600"},"Loading your Travel Dreams progress"))):n==="selection"?l.createElement("div",{className:"sophisticated-bg min-h-screen"},l.createElement("div",{className:"travel-header"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},l.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),l.createElement("div",{className:"text-center mt-6"},l.createElement("div",{className:"text-lg font-bold text-green-100 mb-2"},"TEACHER ALEX ENGLISH ACADEMY"),l.createElement("div",{className:"text-5xl mb-4"},"✈️"),l.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"Travel Dreams Course"),l.createElement("p",{className:"text-green-100 mb-4"},"Learn English through amazing travel adventures around the world!"),l.createElement("div",{className:"travel-accent-card rounded-lg p-3"},l.createElement("p",{className:"text-white font-medium"},"🌍 World destinations • 🛫 Airport vocabulary • 🏆 Earn XP!"))))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},l.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},l.createElement("div",{className:"text-sm"},l.createElement("span",{className:"text-primary-green font-medium"},p),q&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Travel XP: ",q.totalXP," • Lessons: ",q.completedLessons,"/10")))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},l.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},gs.map((A,F)=>{const j=J(A.id);return l.createElement("div",{key:A.id,className:"lesson-card travel-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>me(A.id)},l.createElement("div",{className:"flex items-center justify-between mb-3"},l.createElement("div",{className:"text-2xl"},A.icon),l.createElement("span",{className:`status-badge ${j.class}`},j.status)),l.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",F+1,": ",A.title),l.createElement("p",{className:"text-sm text-gray-600 mb-3"},A.description),l.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},l.createElement("span",null,"🎧 ",A.duration),l.createElement("span",{className:"font-semibold text-green-600"},j.score?`✅ ${j.score}/5`:"+50 XP")),j.attempts>0&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",j.attempts," • Score: ",j.score||0,"/5 • XP: ",j.xpEarned||0))}))),l.createElement("style",{jsx:!0},`
          .sophisticated-bg {
            background: linear-gradient(135deg, #f8fafc, #d1fae5);
            min-height: 100vh;
          }
          
          .travel-header {
            background: linear-gradient(135deg, #10b981, #059669);
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
          }
          
          .travel-accent-card {
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
          }
          
          .back-btn {
            background: rgba(255, 255, 255, 0.9);
            color: #059669;
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
          
          .travel-card {
            background: white;
            border: 2px solid #bbf7d0;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15);
          }
          
          .travel-card:hover {
            border-color: #10b981;
            box-shadow: 0 12px 35px rgba(16, 185, 129, 0.25);
          }
          
          .status-badge {
            padding: 0.3rem 0.8rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
          }
          
          .status-completed {
            background: #10b981;
            color: white;
          }
          
          .status-not-started {
            background: #bbf7d0;
            color: #059669;
          }

          .status-card {
            background: linear-gradient(135deg, #bbf7d0, #d1fae5);
            border: 2px solid #6ee7b7;
            color: #059669;
          }

          .text-primary-green {
            color: #10b981;
          }
        `)):l.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},l.createElement("div",{className:"travel-lesson-card rounded-xl p-6 mb-6"},l.createElement("div",{className:"flex items-center justify-between mb-4"},l.createElement("button",{onClick:z,className:"text-green-600 text-sm hover:underline"},"← Back to Travel Dreams"),l.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",gs.findIndex(A=>A.id===s.id)+1," of ",gs.length)),l.createElement("div",{className:"text-center mb-4"},l.createElement("div",{className:"text-sm font-bold text-green-600 mb-1"},"TEACHER ALEX ENGLISH ACADEMY"),l.createElement("h2",{className:"text-2xl font-bold text-green-600 mb-2"},s.title),l.createElement("p",{className:"text-gray-600 mb-4"},s.description)),l.createElement("div",{className:"progress-card rounded-lg p-3"},l.createElement("div",{className:"flex justify-between text-sm mb-2"},l.createElement("span",null,"Lesson Progress"),l.createElement("span",null,f)),l.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},l.createElement("div",{className:"bg-green-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),l.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"✈️ Listen to the Travel Audio"),l.createElement("audio",{ref:B,src:s.audioFile,onLoadedData:()=>{console.log("✅ Audio loaded:",s.audioFile),B.current&&(B.current.playbackRate=w)},onError:A=>{console.error("❌ Audio error:",A.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{if(B.current&&B.current.duration>0){const A=B.current.currentTime/B.current.duration*100;A>10&&h(Math.max(u,20)),de({currentTime:B.current.currentTime,duration:B.current.duration,percentage:A})}},onLoadedMetadata:()=>{B.current&&de(A=>({...A,duration:B.current.duration}))},onPlay:()=>b(!0),onPause:()=>b(!1),onEnded:()=>b(!1),className:"hidden"}),l.createElement("div",{className:"audio-progress-container mb-4"},l.createElement("div",{className:"flex justify-between text-sm text-gray-600 mb-2"},l.createElement("span",null,$(oe.currentTime)),l.createElement("span",{className:"font-medium"},s.title),l.createElement("span",null,$(oe.duration))),l.createElement("div",{className:"audio-progress-bar",onClick:ye},l.createElement("div",{className:"audio-progress-fill",style:{width:`${oe.percentage||0}%`}},l.createElement("div",{className:"audio-progress-thumb"}))),l.createElement("div",{className:"text-xs text-gray-500 mt-1"},Math.round(oe.percentage||0),"% completed")),l.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},l.createElement("button",{onClick:te,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),l.createElement("button",{onClick:Y,className:"btn-audio bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},S?"⏸️ Pause":"▶️ Play"),l.createElement("button",{onClick:he,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),l.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},l.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(A=>l.createElement("button",{key:A,onClick:()=>ce(A),className:`px-3 py-1 rounded ${w===A?"bg-green-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},A,"x"))),l.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🌍 Listen carefully and then answer the questions below")),l.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((A,F)=>l.createElement("div",{key:F,className:"question-card rounded-xl p-6"},l.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},F+1,". ",A.question),l.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},A.options.map((j,K)=>l.createElement("button",{key:K,onClick:()=>Ie(F,K),className:`p-3 rounded-lg text-left transition-all ${o[F]===K?"bg-green-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+K),". ",j)))))),l.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},l.createElement("button",{onClick:Te,disabled:!ue,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${ue?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},ue?"🔥 Save to Firebase - Ready! ✈️":`Submit Answers (${fe}/5 Complete)`),l.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Teacher Alex English Academy"))),E&&l.createElement(y2,{lesson:s,userAnswers:o,onNext:D,onReview:()=>L(!0),onClose:()=>I(!1),onRestart:X}),P&&l.createElement(v2,{lesson:s,userAnswers:o,onClose:()=>L(!1)}),l.createElement("style",{jsx:!0},`
        .travel-lesson-card, .audio-card, .question-card, .submit-card {
          background: white;
          border: 2px solid #bbf7d0;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15);
        }
        
        .progress-card {
          background: linear-gradient(135deg, #bbf7d0, #d1fae5);
          border: 2px solid #6ee7b7;
        }
        
        .btn-audio {
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        .audio-progress-container {
          padding: 0 10px;
        }

        .audio-progress-bar {
          width: 100%;
          height: 8px;
          background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          border: 1px solid #cbd5e1;
          transition: all 0.2s ease;
        }

        .audio-progress-bar:hover {
          height: 10px;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }

        .audio-progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 4px;
          position: relative;
          transition: width 0.1s ease;
          min-width: 4px;
        }

        .audio-progress-thumb {
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 12px;
          background: white;
          border: 2px solid #10b981;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .audio-progress-bar:hover .audio-progress-thumb {
          opacity: 1;
        }
      `))}function y2({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((f,g,E)=>f+(g===t.questions[E].correct?1:0),0),c=Math.round(o/5*100),u=o*10+(o===5?25:0),h=o===5;return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-5xl mb-4"},h?"🏆":o>=4?"✈️":"🌍"),l.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},h?"World Traveler!":o>=4?"Great Explorer!":"Lesson Complete!"),l.createElement("div",{className:"bg-green-50 rounded-lg p-4 mb-4"},l.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),l.createElement("div",{className:"text-lg text-gray-600 mb-2"},c,"% Correct"),l.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," Travel XP Earned!")),h&&l.createElement("div",{className:"bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3 mb-4"},l.createElement("div",{className:"text-sm font-semibold text-green-700 mb-2"},"🌍 Achievement Unlocked!"),l.createElement("div",{className:"font-medium"},"Perfect Travel Score!")),l.createElement("div",{className:"space-y-3"},l.createElement("button",{onClick:r,className:"w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&l.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),l.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Travel Lesson →"),l.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Travel Dreams")))))}function v2({lesson:t,userAnswers:e,onClose:n}){return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"✈️ Answer Review"),l.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,c=r.options[r.correct],u=r.options[i];return l.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},l.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),l.createElement("div",{className:"space-y-1"},l.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&l.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",c)))})),l.createElement("button",{onClick:n,className:"w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}const ys=[{id:"sports-01",title:"Watching the World Cup",description:"Learn about World Cup passion and Brazilian football culture",duration:"38s",icon:"⚽",audioFile:"audio/a1-sports/audio-01-world-cup.mp3",questions:[{question:"Where was the 2022 World Cup held?",options:["Russia","Qatar","Brazil","Germany"],correct:1},{question:"How many people watched the games together?",options:["12","15","18","20"],correct:1},{question:"Who scored against South Korea?",options:["Vinícius Jr","Casemiro","Neymar","Gabriel Jesus"],correct:2},{question:"How many pizzas did they order during the tournament?",options:["6","8","10","12"],correct:1},{question:"Which team eliminated Brazil?",options:["Argentina","France","Croatia","Netherlands"],correct:2}]},{id:"sports-02",title:"Playing Football with Friends",description:"Weekend football games and local sports activities",duration:"36s",icon:"🏃‍♂️",audioFile:"audio/a1-sports/audio-02-playing-football.mp3",questions:[{question:"What time do they start playing?",options:["7 AM","8 AM","9 AM","10 AM"],correct:1},{question:"How many players usually participate?",options:["10","12","14","16"],correct:1},{question:"What position does she play?",options:["Goalkeeper","Defender","Midfielder","Forward"],correct:2},{question:"How many assists did she make last Saturday?",options:["2","3","4","5"],correct:1},{question:"How many goals did Carlos score in one game?",options:["2","3","4","5"],correct:2}]},{id:"sports-03",title:"Supporting Flamengo",description:"Brazilian football fandom and team loyalty",duration:"40s",icon:"🔴",audioFile:"audio/a1-sports/audio-03-flamengo-fan.mp3",questions:[{question:"How long has she been supporting Flamengo?",options:["12 years","15 years","18 years","20 years"],correct:1},{question:"How old was she when she got her first jersey?",options:["10 years old","12 years old","14 years old","16 years old"],correct:1},{question:"How much do season tickets cost?",options:["1,000 reais","1,200 reais","1,500 reais","1,800 reais"],correct:1},{question:"What was the score against Palmeiras?",options:["1-0","2-1","3-2","2-0"],correct:1},{question:"Until what time did she celebrate after the victory?",options:["1 AM","2 AM","3 AM","4 AM"],correct:2}]},{id:"sports-04",title:"Learning to Surf",description:"Beach sports and surfing experiences in Florianópolis",duration:"39s",icon:"🏄‍♀️",audioFile:"audio/a1-sports/audio-04-learning-surf.mp3",questions:[{question:"Where did she learn to surf?",options:["Rio de Janeiro","São Paulo","Florianópolis","Salvador"],correct:2},{question:"How much did the instructor charge per hour?",options:["60 reais","70 reais","80 reais","90 reais"],correct:2},{question:"How many times did she fall on the first day?",options:["15","20","25","30"],correct:1},{question:"How long could she stand on the board by the third lesson?",options:["10 seconds","15 seconds","20 seconds","30 seconds"],correct:1},{question:"How long did she surf her best wave?",options:["30 seconds","45 seconds","60 seconds","90 seconds"],correct:1}]},{id:"sports-05",title:"Running My First Marathon",description:"Marathon training and long-distance running challenges",duration:"37s",icon:"🏃‍♀️",audioFile:"audio/a1-sports/audio-05-first-marathon.mp3",questions:[{question:"How long did she train for the marathon?",options:["4 months","5 months","6 months","8 months"],correct:2},{question:"How many times per week did she run during training?",options:["3 times","4 times","5 times","6 times"],correct:2},{question:"How long was her longest training run?",options:["30 km","32 km","35 km","40 km"],correct:2},{question:"How many runners participated in the race?",options:["25,000","30,000","35,000","40,000"],correct:1},{question:"What was her finishing time?",options:["4 hours 45 minutes","5 hours 23 minutes","5 hours 45 minutes","6 hours 15 minutes"],correct:1}]},{id:"sports-06",title:"Watching Tennis at Brazilian Open",description:"Professional tennis tournaments and live sports experiences",duration:"41s",icon:"🎾",audioFile:"audio/a1-sports/audio-06-tennis-tournament.mp3",questions:[{question:"How much did center court tickets cost?",options:["120 reais","150 reais","180 reais","200 reais"],correct:1},{question:"How long did the match last?",options:["2 hours 45 minutes","3 hours 15 minutes","3 hours 30 minutes","4 hours"],correct:1},{question:"What was the score in the first set?",options:["6-3","6-4","7-5","6-2"],correct:1},{question:"How much did the sandwich cost?",options:["20 reais","22 reais","25 reais","28 reais"],correct:2},{question:"How much was the bottle of water?",options:["6 reais","8 reais","10 reais","12 reais"],correct:1}]},{id:"sports-07",title:"Joining a Gym for Fitness",description:"Fitness routines and gym membership experiences",duration:"35s",icon:"💪",audioFile:"audio/a1-sports/audio-07-joining-gym.mp3",questions:[{question:"How much does the monthly gym membership cost?",options:["79 reais","89 reais","99 reais","109 reais"],correct:1},{question:"How many times per week does she go to the gym?",options:["3 times","4 times","5 times","6 times"],correct:1},{question:"What is her personal trainer's name?",options:["Carlos","Rafael","Lucas","Bruno"],correct:2},{question:"How much weight has she lost after 2 months?",options:["3 kilos","4 kilos","5 kilos","6 kilos"],correct:2},{question:"What time does she wake up for morning workouts?",options:["5 AM","5:30 AM","6 AM","6:30 AM"],correct:2}]},{id:"sports-08",title:"Volleyball on the Beach",description:"Beach volleyball and coastal sports culture",duration:"42s",icon:"🏐",audioFile:"audio/a1-sports/audio-08-beach-volleyball.mp3",questions:[{question:"What time do they meet on Sundays?",options:["3 PM","4 PM","5 PM","6 PM"],correct:1},{question:"How much does it cost to rent the net for 2 hours?",options:["35 reais","40 reais","45 reais","50 reais"],correct:1},{question:"How much does each person pay for the net rental?",options:["4 reais","5 reais","6 reais","7 reais"],correct:1},{question:"What was the final score of their close game?",options:["21-18","21-19","21-20","22-20"],correct:1},{question:"How much do açaí bowls cost from the vendor?",options:["10 reais","12 reais","15 reais","18 reais"],correct:1}]},{id:"sports-09",title:"Basketball Pickup Games",description:"Learning basketball and community sports courts",duration:"44s",icon:"🏀",audioFile:"audio/a1-sports/audio-09-basketball-pickup.mp3",questions:[{question:"How many evenings per week does she play?",options:["1","2","3","4"],correct:1},{question:"Until what time do the court lights stay on?",options:["9 PM","10 PM","11 PM","Midnight"],correct:1},{question:"How many players meet for pickup games?",options:["8","10","12","14"],correct:1},{question:"How many three-pointers does she make out of 10 attempts?",options:["1","2","3","4"],correct:1},{question:"How many calories does basketball burn per hour?",options:["300","350","400","450"],correct:2}]},{id:"sports-10",title:"Coaching Kids Football",description:"Volunteer coaching and youth sports development",duration:"40s",icon:"👶",audioFile:"audio/a1-sports/audio-10-coaching-kids.mp3",questions:[{question:"What ages are the kids she coaches?",options:["6 to 10","7 to 11","8 to 12","9 to 13"],correct:2},{question:"How long does each practice session last?",options:["1.5 hours","2 hours","2.5 hours","3 hours"],correct:1},{question:"How many kids are on her team?",options:["15","16","18","20"],correct:2},{question:"What do the kids call her?",options:["Coach Ana","Teacher Ana","Professora Ana","Miss Ana"],correct:2},{question:"What was the score in their friendly match?",options:["2-2","3-3","4-4","1-1"],correct:1}]}];function E2({user:t,onBack:e}){const[n,r]=U.useState("selection"),[s,i]=U.useState(null),[o,c]=U.useState([]),[u,h]=U.useState(0),[f,g]=U.useState("Listen to Audio"),[E,I]=U.useState(!1),[P,L]=U.useState(!1),[M,x]=U.useState({}),[w,k]=U.useState(1),[R,V]=U.useState(null),[q,_]=U.useState(null),[p,v]=U.useState("🔥 Loading Firebase..."),[T,N]=U.useState(!0),[S,b]=U.useState(!1),[oe,de]=U.useState({currentTime:0,duration:0,percentage:0}),B=U.useRef(null);U.useEffect(()=>{(async()=>{if(!(t!=null&&t.username)){v("❌ User not found"),N(!1);return}try{v("🔥 Connecting to Firebase...");const F=Ge(He,"students",t.username,"progress","sports"),j=await Qe(F);if(j.exists()){const K=j.data();x(K.lessons||{}),_({totalXP:K.totalXP||0,completedLessons:Object.keys(K.lessons||{}).length,lastAccess:new Date().toISOString()}),v("✅ Firebase: Sports progress loaded")}else x({}),_({totalXP:0,completedLessons:0,lastAccess:new Date().toISOString()}),v("✅ Firebase: Sports fan initialized");N(!1)}catch(F){console.error("Firebase Error:",F),v("❌ Firebase connection failed"),N(!1),x({"sports-01":{status:"completed",score:5,attempts:1},"sports-02":{status:"completed",score:4,attempts:2}})}})()},[t]);const Se=async(A,F,j=1)=>{if(t!=null&&t.username)try{const K=F*10+(F===5?25:0),xe=Date.now(),Ce={lessonId:A,score:F,attempts:j,xpEarned:K,completedAt:xe,status:"completed"};x(Re=>({...Re,[A]:Ce}));const Jt=Ge(He,"students",t.username,"progress","sports"),zt=await Qe(Jt);let st={lessons:{[A]:Ce},totalXP:K,lastUpdated:xe,series:"sports"};if(zt.exists()){const Re=zt.data();st={...Re,lessons:{...Re.lessons,[A]:Ce},totalXP:(Re.totalXP||0)+K,lastUpdated:xe}}await Ar(Jt,st,{merge:!0}),_(Re=>({...Re,totalXP:st.totalXP,completedLessons:Object.keys(st.lessons).length})),console.log("✅ Firebase Save Success:",{lessonId:A,score:F,xpEarned:K})}catch(K){console.error("❌ Firebase Save Error:",K)}},$=A=>{if(!A||isNaN(A))return"0:00";const F=Math.floor(A/60),j=Math.floor(A%60);return`${F}:${j.toString().padStart(2,"0")}`},Y=()=>{B.current&&(B.current.paused?(B.current.play(),b(!0),h(Math.max(u,20))):(B.current.pause(),b(!1)))},te=()=>{B.current&&(B.current.currentTime=Math.max(0,B.current.currentTime-10))},he=()=>{B.current&&(B.current.currentTime=Math.min(B.current.duration,B.current.currentTime+10))},ce=A=>{k(A),B.current&&(B.current.playbackRate=A)},ye=A=>{if(B.current&&B.current.duration){const F=A.currentTarget.getBoundingClientRect(),xe=(A.clientX-F.left)/F.width*B.current.duration;B.current.currentTime=xe}},me=A=>{const F=ys.find(j=>j.id===A);F&&(i(F),c(new Array(F.questions.length).fill(null)),h(0),g("Listen to Audio"),r("lesson"),V(Date.now()),b(!1),de({currentTime:0,duration:0,percentage:0}),window.scrollTo({top:0,behavior:"smooth"}))},Ie=(A,F)=>{const j=[...o];j[A]=F,c(j);const K=j.filter(Ce=>Ce!==null).length,xe=20+K/s.questions.length*80;h(xe),g(`${K}/5 Questions Answered`)},Te=async()=>{const A=o.reduce((K,xe,Ce)=>K+(xe===s.questions[Ce].correct?1:0),0),F=M[s.id],j=F?F.attempts+1:1;await Se(s.id,A,j),console.log(`✅ Sports Lesson ${s.id} saved to Firebase! Score: ${A}/5, Attempts: ${j}`),I(!0)},D=()=>{const A=ys.findIndex(j=>j.id===s.id),F=ys[A+1];I(!1),F?me(F.id):(r("selection"),alert("⚽ Congratulations! Sports Passion Course Complete! 🏆 Sports Fan Achievement Unlocked!"))},z=()=>{r("selection"),i(null),window.scrollTo({top:0,behavior:"smooth"})},X=()=>{s&&(I(!1),c(new Array(s.questions.length).fill(null)),V(Date.now()),h(0),g("Listen to Audio"),b(!1),de({currentTime:0,duration:0,percentage:0}),B.current&&(B.current.currentTime=0,B.current.pause()),window.scrollTo({top:0,behavior:"smooth"}))},J=A=>{const F=M[A];return F?{status:"Completed",class:"status-completed",score:F.score,attempts:F.attempts,xpEarned:F.xpEarned}:{status:"Available",class:"status-not-started"}},fe=o.filter(A=>A!==null).length,ue=fe===(s==null?void 0:s.questions.length);return T?l.createElement("div",{className:"sophisticated-bg min-h-screen flex items-center justify-center"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-6xl mb-4"},"⚽"),l.createElement("h2",{className:"text-xl font-bold text-gray-700 mb-2"},"Connecting to Firebase..."),l.createElement("p",{className:"text-gray-600"},"Loading your Sports Passion progress"))):n==="selection"?l.createElement("div",{className:"sophisticated-bg min-h-screen"},l.createElement("div",{className:"sports-header"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-8"},l.createElement("button",{onClick:e,className:"back-btn"},"← Back to Hub"),l.createElement("div",{className:"text-center mt-6"},l.createElement("div",{className:"text-lg font-bold text-blue-100 mb-2"},"TEACHER ALEX ENGLISH ACADEMY"),l.createElement("div",{className:"text-5xl mb-4"},"⚽"),l.createElement("h2",{className:"text-2xl font-bold text-white mb-2"},"Sports Passion Course"),l.createElement("p",{className:"text-blue-100 mb-4"},"Learn English through Brazilian sports culture and athletic adventures!"),l.createElement("div",{className:"sports-accent-card rounded-lg p-3"},l.createElement("p",{className:"text-white font-medium"},"🏆 World Cup passion • 🏖️ Beach sports • ⚽ Flamengo pride!"))))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-4"},l.createElement("div",{className:"status-card rounded-lg p-4 mb-6 text-center"},l.createElement("div",{className:"text-sm"},l.createElement("span",{className:"text-primary-blue font-medium"},p),q&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Sports XP: ",q.totalXP," • Lessons: ",q.completedLessons,"/10")))),l.createElement("div",{className:"max-w-4xl mx-auto px-4 pb-8"},l.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},ys.map((A,F)=>{const j=J(A.id);return l.createElement("div",{key:A.id,className:"lesson-card sports-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-all",onClick:()=>me(A.id)},l.createElement("div",{className:"flex items-center justify-between mb-3"},l.createElement("div",{className:"text-2xl"},A.icon),l.createElement("span",{className:`status-badge ${j.class}`},j.status)),l.createElement("h3",{className:"font-semibold text-gray-800 mb-2"},"Lesson ",F+1,": ",A.title),l.createElement("p",{className:"text-sm text-gray-600 mb-3"},A.description),l.createElement("div",{className:"flex items-center justify-between text-xs text-gray-600"},l.createElement("span",null,"🎧 ",A.duration),l.createElement("span",{className:"font-semibold text-blue-600"},j.score?`✅ ${j.score}/5`:"+50 XP")),j.attempts>0&&l.createElement("div",{className:"mt-2 text-xs text-gray-600"},"Attempts: ",j.attempts," • Score: ",j.score||0,"/5 • XP: ",j.xpEarned||0))}))),l.createElement("style",{jsx:!0},`
          .sophisticated-bg {
            background: linear-gradient(135deg, #f8fafc, #dbeafe);
            min-height: 100vh;
          }
          
          .sports-header {
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
          }
          
          .sports-accent-card {
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
          }
          
          .back-btn {
            background: rgba(255, 255, 255, 0.9);
            color: #1d4ed8;
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
          
          .sports-card {
            background: white;
            border: 2px solid #dbeafe;
            box-shadow: 0 8px 25px rgba(37, 99, 235, 0.15);
          }
          
          .sports-card:hover {
            border-color: #2563eb;
            box-shadow: 0 12px 35px rgba(37, 99, 235, 0.25);
          }
          
          .status-badge {
            padding: 0.3rem 0.8rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
          }
          
          .status-completed {
            background: #2563eb;
            color: white;
          }
          
          .status-not-started {
            background: #dbeafe;
            color: #1d4ed8;
          }

          .status-card {
            background: linear-gradient(135deg, #dbeafe, #e2e8f0);
            border: 2px solid #93c5fd;
            color: #1d4ed8;
          }

          .text-primary-blue {
            color: #2563eb;
          }
        `)):l.createElement("div",{className:"lesson-interface sophisticated-bg min-h-screen"},l.createElement("div",{className:"max-w-4xl mx-auto px-4 py-6"},l.createElement("div",{className:"sports-lesson-card rounded-xl p-6 mb-6"},l.createElement("div",{className:"flex items-center justify-between mb-4"},l.createElement("button",{onClick:z,className:"text-blue-600 text-sm hover:underline"},"← Back to Sports Passion"),l.createElement("div",{className:"text-sm text-gray-600"},"Lesson ",ys.findIndex(A=>A.id===s.id)+1," of ",ys.length)),l.createElement("div",{className:"text-center mb-4"},l.createElement("div",{className:"text-sm font-bold text-blue-600 mb-1"},"TEACHER ALEX ENGLISH ACADEMY"),l.createElement("h2",{className:"text-2xl font-bold text-blue-600 mb-2"},s.title),l.createElement("p",{className:"text-gray-600 mb-4"},s.description)),l.createElement("div",{className:"progress-card rounded-lg p-3"},l.createElement("div",{className:"flex justify-between text-sm mb-2"},l.createElement("span",null,"Lesson Progress"),l.createElement("span",null,f)),l.createElement("div",{className:"w-full bg-gray-200 rounded-full h-3"},l.createElement("div",{className:"bg-blue-600 h-3 rounded-full transition-all duration-500",style:{width:`${u}%`}})))),l.createElement("div",{className:"audio-card rounded-xl p-6 mb-6 text-center"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4"},"⚽ Listen to the Sports Audio"),l.createElement("audio",{ref:B,src:s.audioFile,onLoadedData:()=>{console.log("✅ Audio loaded:",s.audioFile),B.current&&(B.current.playbackRate=w)},onError:A=>{console.error("❌ Audio error:",A.target.error),alert(`Audio file not found: ${s.audioFile}

Please check if the file exists in your project.`)},onTimeUpdate:()=>{if(B.current&&B.current.duration>0){const A=B.current.currentTime/B.current.duration*100;A>10&&h(Math.max(u,20)),de({currentTime:B.current.currentTime,duration:B.current.duration,percentage:A})}},onLoadedMetadata:()=>{B.current&&de(A=>({...A,duration:B.current.duration}))},onPlay:()=>b(!0),onPause:()=>b(!1),onEnded:()=>b(!1),className:"hidden"}),l.createElement("div",{className:"audio-progress-container mb-4"},l.createElement("div",{className:"flex justify-between text-sm text-gray-600 mb-2"},l.createElement("span",null,$(oe.currentTime)),l.createElement("span",{className:"font-medium"},s.title),l.createElement("span",null,$(oe.duration))),l.createElement("div",{className:"audio-progress-bar",onClick:ye},l.createElement("div",{className:"audio-progress-fill",style:{width:`${oe.percentage||0}%`}},l.createElement("div",{className:"audio-progress-thumb"}))),l.createElement("div",{className:"text-xs text-gray-500 mt-1"},Math.round(oe.percentage||0),"% completed")),l.createElement("div",{className:"flex items-center justify-center space-x-4 mb-4"},l.createElement("button",{onClick:te,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"⏪ -10s"),l.createElement("button",{onClick:Y,className:"btn-audio bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-colors"},S?"⏸️ Pause":"▶️ Play"),l.createElement("button",{onClick:he,className:"btn-audio bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"},"+10s ⏩")),l.createElement("div",{className:"flex items-center justify-center space-x-2 text-sm"},l.createElement("span",{className:"text-gray-600"},"Speed:"),[.5,.75,1,1.25,1.5].map(A=>l.createElement("button",{key:A,onClick:()=>ce(A),className:`px-3 py-1 rounded ${w===A?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`},A,"x"))),l.createElement("p",{className:"text-gray-600 text-sm mt-3"},"🏆 Listen carefully and then answer the questions below")),l.createElement("div",{className:"space-y-4 mb-6"},s.questions.map((A,F)=>l.createElement("div",{key:F,className:"question-card rounded-xl p-6"},l.createElement("h4",{className:"font-semibold text-gray-800 mb-4"},F+1,". ",A.question),l.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3"},A.options.map((j,K)=>l.createElement("button",{key:K,onClick:()=>Ie(F,K),className:`p-3 rounded-lg text-left transition-all ${o[F]===K?"bg-blue-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`},String.fromCharCode(65+K),". ",j)))))),l.createElement("div",{className:"submit-card rounded-xl p-6 text-center"},l.createElement("button",{onClick:Te,disabled:!ue,className:`px-8 py-4 rounded-xl text-lg font-bold transition-all ${ue?"bg-red-500 hover:bg-red-600 text-white cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed"}`},ue?"🔥 Save to Firebase - Ready! ⚽":`Submit Answers (${fe}/5 Complete)`),l.createElement("p",{className:"text-gray-600 text-sm mt-2"},"Teacher Alex English Academy"))),E&&l.createElement(w2,{lesson:s,userAnswers:o,onNext:D,onReview:()=>L(!0),onClose:()=>I(!1),onRestart:X}),P&&l.createElement(_2,{lesson:s,userAnswers:o,onClose:()=>L(!1)}),l.createElement("style",{jsx:!0},`
        .sports-lesson-card, .audio-card, .question-card, .submit-card {
          background: white;
          border: 2px solid #dbeafe;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.15);
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

        .audio-progress-container {
          padding: 0 10px;
        }

        .audio-progress-bar {
          width: 100%;
          height: 8px;
          background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          border: 1px solid #cbd5e1;
          transition: all 0.2s ease;
        }

        .audio-progress-bar:hover {
          height: 10px;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
        }

        .audio-progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          border-radius: 4px;
          position: relative;
          transition: width 0.1s ease;
          min-width: 4px;
        }

        .audio-progress-thumb {
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 12px;
          background: white;
          border: 2px solid #2563eb;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .audio-progress-bar:hover .audio-progress-thumb {
          opacity: 1;
        }
      `))}function w2({lesson:t,userAnswers:e,onNext:n,onReview:r,onClose:s,onRestart:i}){const o=e.reduce((f,g,E)=>f+(g===t.questions[E].correct?1:0),0),c=Math.round(o/5*100),u=o*10+(o===5?25:0),h=o===5;return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full"},l.createElement("div",{className:"text-center"},l.createElement("div",{className:"text-5xl mb-4"},h?"🏆":o>=4?"⚽":"🏃‍♂️"),l.createElement("h3",{className:"text-xl font-bold text-gray-800 mb-4"},h?"Sports Champion!":o>=4?"Great Athletic Performance!":"Lesson Complete!"),l.createElement("div",{className:"bg-blue-50 rounded-lg p-4 mb-4"},l.createElement("div",{className:"text-3xl font-bold text-gray-800 mb-1"},o,"/5"),l.createElement("div",{className:"text-lg text-gray-600 mb-2"},c,"% Correct"),l.createElement("div",{className:"text-red-500 font-semibold text-lg"},"+",u," Sports XP Earned!")),h&&l.createElement("div",{className:"bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-3 mb-4"},l.createElement("div",{className:"text-sm font-semibold text-blue-700 mb-2"},"⚽ Achievement Unlocked!"),l.createElement("div",{className:"font-medium"},"Perfect Sports Score!")),l.createElement("div",{className:"space-y-3"},l.createElement("button",{onClick:r,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"},"📊 Review Answers"),o<5&&l.createElement("button",{onClick:i,className:"w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold"},"🔄 Try Again"),l.createElement("button",{onClick:n,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"},"Next Sports Lesson →"),l.createElement("button",{onClick:s,className:"text-gray-600 text-sm py-2"},"Back to Sports Passion")))))}function _2({lesson:t,userAnswers:e,onClose:n}){return l.createElement("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"},l.createElement("div",{className:"bg-white rounded-2xl p-6 max-w-2xl w-full max-h-96 overflow-y-auto"},l.createElement("h3",{className:"text-lg font-bold text-gray-800 mb-4 text-center"},"⚽ Answer Review"),l.createElement("div",{className:"space-y-4 mb-6"},t.questions.map((r,s)=>{const i=e[s],o=i===r.correct,c=r.options[r.correct],u=r.options[i];return l.createElement("div",{key:s,className:"border-b border-gray-200 pb-4 last:border-b-0"},l.createElement("div",{className:"font-medium text-gray-800 mb-2"},s+1,". ",r.question),l.createElement("div",{className:"space-y-1"},l.createElement("div",{className:`font-medium ${o?"text-green-600":"text-red-600"}`},o?"✅":"❌"," Your answer: ",u),!o&&l.createElement("div",{className:"text-green-600 font-medium"},"✅ Correct: ",c)))})),l.createElement("button",{onClick:n,className:"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"},"Close Review")))}function b2(){const[t,e]=U.useState("login"),[n,r]=U.useState(null);U.useEffect(()=>{const f=localStorage.getItem("currentUser");if(f)try{const g=JSON.parse(f);r(g),g.role==="teacher"?e("teacher-dashboard"):e("portal")}catch(g){console.error("Error parsing saved user:",g),localStorage.removeItem("currentUser")}},[]);const s=f=>{r(f),localStorage.setItem("currentUser",JSON.stringify(f)),f.role==="teacher"?e("teacher-dashboard"):e("portal")},i=()=>{r(null),e("login"),localStorage.removeItem("currentUser")},o=()=>{e("hub")},c=()=>{e("portal")},u=f=>{e(f)},h=()=>{switch(t){case"login":return l.createElement(e2,{onLoginSuccess:s});case"portal":return l.createElement(t2,{user:n,onNavigateToHub:o,onLogout:i});case"hub":return l.createElement(n2,{user:n,onThemeSelect:u,onLogout:i});case"teacher-dashboard":return l.createElement(r2,{user:n,onLogout:i});case"foundation":return l.createElement(s2,{user:n,onBack:o});case"gaming":return l.createElement(a2,{user:n,onBack:o});case"movies":return l.createElement(u2,{user:n,onBack:o});case"food":return l.createElement(m2,{user:n,onBack:o});case"travel":return l.createElement(g2,{user:n,onBack:o});case"sports":return l.createElement(E2,{user:n,onBack:o});default:return l.createElement("div",{className:"error-view"},l.createElement("div",{className:"max-w-md mx-auto text-center py-12"},l.createElement("div",{className:"text-6xl mb-4"},"❌"),l.createElement("h2",{className:"text-xl font-bold text-gray-800 mb-4"},"Page Not Found"),l.createElement("p",{className:"text-gray-600 mb-6"},"The page you're looking for doesn't exist."),l.createElement("button",{onClick:c,className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"},"← Back to Portal")))}};return l.createElement("div",{className:"App"},h(),l.createElement("style",{jsx:!0,global:!0},`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: #f8fafc;
        }

        .App {
          min-height: 100vh;
        }

        .error-view {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
        }

        /* Utility Classes */
        .text-center { text-align: center; }
        .font-bold { font-weight: bold; }
        .font-semibold { font-weight: 600; }
        .text-xl { font-size: 1.25rem; }
        .text-6xl { font-size: 4rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .max-w-md { max-width: 28rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .transition-colors { transition: color 150ms ease, background-color 150ms ease; }
        
        .text-gray-600 { color: #4b5563; }
        .text-gray-800 { color: #1f2937; }
        .text-white { color: white; }
        .bg-blue-600 { background-color: #2563eb; }
        .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }

        /* Professional Loading States */
        .loading-spinner {
          border: 4px solid #f3f4f6;
          border-top: 4px solid #3b82f6;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .text-6xl { font-size: 3rem; }
          .text-xl { font-size: 1.125rem; }
          .py-12 { padding-top: 2rem; padding-bottom: 2rem; }
        }

        /* Smooth Transitions */
        * {
          transition: all 0.2s ease;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }

        /* Focus States for Accessibility */
        button:focus,
        input:focus,
        select:focus,
        textarea:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Print Styles */
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `))}bu.createRoot(document.getElementById("root")).render(l.createElement(l.StrictMode,null,l.createElement(b2,null)));
