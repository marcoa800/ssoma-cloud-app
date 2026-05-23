(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function fT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oy={exports:{}},Kl={},Ly={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),pT=Symbol.for("react.portal"),mT=Symbol.for("react.fragment"),gT=Symbol.for("react.strict_mode"),yT=Symbol.for("react.profiler"),_T=Symbol.for("react.provider"),vT=Symbol.for("react.context"),wT=Symbol.for("react.forward_ref"),ET=Symbol.for("react.suspense"),TT=Symbol.for("react.memo"),IT=Symbol.for("react.lazy"),Qp=Symbol.iterator;function ST(t){return t===null||typeof t!="object"?null:(t=Qp&&t[Qp]||t["@@iterator"],typeof t=="function"?t:null)}var jy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fy=Object.assign,Uy={};function ri(t,e,n){this.props=t,this.context=e,this.refs=Uy,this.updater=n||jy}ri.prototype.isReactComponent={};ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zy(){}zy.prototype=ri.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=Uy,this.updater=n||jy}var od=id.prototype=new zy;od.constructor=id;Fy(od,ri.prototype);od.isPureReactComponent=!0;var Yp=Array.isArray,By=Object.prototype.hasOwnProperty,ad={current:null},$y={key:!0,ref:!0,__self:!0,__source:!0};function Hy(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)By.call(e,r)&&!$y.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Oo,type:t,key:i,ref:o,props:s,_owner:ad.current}}function xT(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function AT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jp=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AT(""+t.key):e.toString(36)}function La(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case pT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Ju(o,0):r,Yp(s)?(n="",t!=null&&(n=t.replace(Jp,"$&/")+"/"),La(s,e,n,"",function(h){return h})):s!=null&&(ld(s)&&(s=xT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Jp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Yp(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Ju(i,l);o+=La(i,e,n,u,s)}else if(u=ST(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Ju(i,l++),o+=La(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fa(t,e,n){if(t==null)return t;var r=[],s=0;return La(t,r,"","",function(i){return e.call(n,i,s++)}),r}function CT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},ja={transition:null},kT={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:ja,ReactCurrentOwner:ad};function qy(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:fa,forEach:function(t,e,n){fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fa(t,function(){e++}),e},toArray:function(t){return fa(t,function(e){return e})||[]},only:function(t){if(!ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=ri;re.Fragment=mT;re.Profiler=yT;re.PureComponent=id;re.StrictMode=gT;re.Suspense=ET;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kT;re.act=qy;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ad.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)By.call(e,u)&&!$y.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Oo,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:vT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_T,_context:t},t.Consumer=t};re.createElement=Hy;re.createFactory=function(t){var e=Hy.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:wT,render:t}};re.isValidElement=ld;re.lazy=function(t){return{$$typeof:IT,_payload:{_status:-1,_result:t},_init:CT}};re.memo=function(t,e){return{$$typeof:TT,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=ja.transition;ja.transition={};try{t()}finally{ja.transition=e}};re.unstable_act=qy;re.useCallback=function(t,e){return ft.current.useCallback(t,e)};re.useContext=function(t){return ft.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};re.useEffect=function(t,e){return ft.current.useEffect(t,e)};re.useId=function(){return ft.current.useId()};re.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return ft.current.useMemo(t,e)};re.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};re.useRef=function(t){return ft.current.useRef(t)};re.useState=function(t){return ft.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return ft.current.useTransition()};re.version="18.3.1";Ly.exports=re;var G=Ly.exports;const RT=fT(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NT=G,PT=Symbol.for("react.element"),DT=Symbol.for("react.fragment"),bT=Object.prototype.hasOwnProperty,VT=NT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MT={key:!0,ref:!0,__self:!0,__source:!0};function Wy(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bT.call(e,r)&&!MT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:PT,type:t,key:i,ref:o,props:s,_owner:VT.current}}Kl.Fragment=DT;Kl.jsx=Wy;Kl.jsxs=Wy;Oy.exports=Kl;var f=Oy.exports,Gy={exports:{}},kt={},Ky={exports:{}},Qy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var Z=z.length;z.push(Q);e:for(;0<Z;){var de=Z-1>>>1,W=z[de];if(0<s(W,Q))z[de]=Q,z[Z]=W,Z=de;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],Z=z.pop();if(Z!==Q){z[0]=Z;e:for(var de=0,W=z.length,ae=W>>>1;de<ae;){var Te=2*(de+1)-1,qe=z[Te],Ft=Te+1,Mn=z[Ft];if(0>s(qe,Z))Ft<W&&0>s(Mn,qe)?(z[de]=Mn,z[Ft]=Z,de=Ft):(z[de]=qe,z[Te]=Z,de=Te);else if(Ft<W&&0>s(Mn,Z))z[de]=Mn,z[Ft]=Z,de=Ft;else break e}}return Q}function s(z,Q){var Z=z.sortIndex-Q.sortIndex;return Z!==0?Z:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,g=null,_=3,k=!1,P=!1,A=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=z)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function R(z){if(A=!1,C(z),!P)if(n(u)!==null)P=!0,Pr(L);else{var Q=n(h);Q!==null&&Dr(R,Q.startTime-z)}}function L(z,Q){P=!1,A&&(A=!1,E(m),m=-1),k=!0;var Z=_;try{for(C(Q),g=n(u);g!==null&&(!(g.expirationTime>Q)||z&&!x());){var de=g.callback;if(typeof de=="function"){g.callback=null,_=g.priorityLevel;var W=de(g.expirationTime<=Q);Q=t.unstable_now(),typeof W=="function"?g.callback=W:g===n(u)&&r(u),C(Q)}else r(u);g=n(u)}if(g!==null)var ae=!0;else{var Te=n(h);Te!==null&&Dr(R,Te.startTime-Q),ae=!1}return ae}finally{g=null,_=Z,k=!1}}var F=!1,w=null,m=-1,v=5,S=-1;function x(){return!(t.unstable_now()-S<v)}function N(){if(w!==null){var z=t.unstable_now();S=z;var Q=!0;try{Q=w(!0,z)}finally{Q?I():(F=!1,w=null)}}else F=!1}var I;if(typeof T=="function")I=function(){T(N)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,jt=Me.port2;Me.port1.onmessage=N,I=function(){jt.postMessage(null)}}else I=function(){b(N,0)};function Pr(z){w=z,F||(F=!0,I())}function Dr(z,Q){m=b(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){P||k||(P=!0,Pr(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var Z=_;_=Q;try{return z()}finally{_=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=_;_=z;try{return Q()}finally{_=Z}},t.unstable_scheduleCallback=function(z,Q,Z){var de=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?de+Z:de):Z=de,z){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=Z+W,z={id:p++,callback:Q,priorityLevel:z,startTime:Z,expirationTime:W,sortIndex:-1},Z>de?(z.sortIndex=Z,e(h,z),n(u)===null&&z===n(h)&&(A?(E(m),m=-1):A=!0,Dr(R,Z-de))):(z.sortIndex=W,e(u,z),P||k||(P=!0,Pr(L))),z},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(z){var Q=_;return function(){var Z=_;_=Q;try{return z.apply(this,arguments)}finally{_=Z}}}})(Qy);Ky.exports=Qy;var OT=Ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LT=G,Ct=OT;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yy=new Set,lo={};function os(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(lo[t]=e,t=0;t<e.length;t++)Yy.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=Object.prototype.hasOwnProperty,jT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xp={},Zp={};function FT(t){return jc.call(Zp,t)?!0:jc.call(Xp,t)?!1:jT.test(t)?Zp[t]=!0:(Xp[t]=!0,!1)}function UT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zT(t,e,n,r){if(e===null||typeof e>"u"||UT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ud=/[\-:]([a-z])/g;function cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ud,cd);Je[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ud,cd);Je[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ud,cd);Je[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hd(t,e,n,r){var s=Je.hasOwnProperty(e)?Je[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zT(e,n,s,r)&&(n=null),r||s===null?FT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var bn=LT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),vs=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),dd=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),Jy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),zc=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),Zy=Symbol.for("react.offscreen"),em=Symbol.iterator;function Ri(t){return t===null||typeof t!="object"?null:(t=em&&t[em]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Xu;function Fi(t){if(Xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xu=e&&e[1]||""}return`
`+Xu+t}var Zu=!1;function ec(t,e){if(!t||Zu)return"";Zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Zu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fi(t):""}function BT(t){switch(t.tag){case 5:return Fi(t.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return t=ec(t.type,!1),t;case 11:return t=ec(t.type.render,!1),t;case 1:return t=ec(t.type,!0),t;default:return""}}function Bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case vs:return"Portal";case Fc:return"Profiler";case dd:return"StrictMode";case Uc:return"Suspense";case zc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xy:return(t.displayName||"Context")+".Consumer";case Jy:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pd:return e=t.displayName||null,e!==null?e:Bc(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return Bc(t(e))}catch{}}return null}function $T(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bc(e);case 8:return e===dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HT(t){var e=e_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ma(t){t._valueTracker||(t._valueTracker=HT(t))}function t_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n_(t,e){e=e.checked,e!=null&&hd(t,"checked",e,!1)}function Hc(t,e){n_(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&qc(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qc(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ui=Array.isArray;function Ds(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ui(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function r_(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ga,i_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qT=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(t){qT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gi[e]=Gi[t]})});function o_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gi.hasOwnProperty(t)&&Gi[t]?(""+e).trim():e+"px"}function a_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=o_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var WT=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(WT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yc=null;function md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,bs=null,Vs=null;function im(t){if(t=Fo(t)){if(typeof Jc!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Zl(e),Jc(t.stateNode,t.type,e))}}function l_(t){bs?Vs?Vs.push(t):Vs=[t]:bs=t}function u_(){if(bs){var t=bs,e=Vs;if(Vs=bs=null,im(t),e)for(t=0;t<e.length;t++)im(e[t])}}function c_(t,e){return t(e)}function h_(){}var tc=!1;function d_(t,e,n){if(tc)return t(e,n);tc=!0;try{return c_(t,e,n)}finally{tc=!1,(bs!==null||Vs!==null)&&(h_(),u_())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Xc=!1;if(Sn)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Xc=!1}function GT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Ki=!1,ol=null,al=!1,Zc=null,KT={onError:function(t){Ki=!0,ol=t}};function QT(t,e,n,r,s,i,o,l,u){Ki=!1,ol=null,GT.apply(KT,arguments)}function YT(t,e,n,r,s,i,o,l,u){if(QT.apply(this,arguments),Ki){if(Ki){var h=ol;Ki=!1,ol=null}else throw Error(j(198));al||(al=!0,Zc=h)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function om(t){if(as(t)!==t)throw Error(j(188))}function JT(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return om(s),t;if(i===r)return om(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function p_(t){return t=JT(t),t!==null?m_(t):null}function m_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m_(t);if(e!==null)return e;t=t.sibling}return null}var g_=Ct.unstable_scheduleCallback,am=Ct.unstable_cancelCallback,XT=Ct.unstable_shouldYield,ZT=Ct.unstable_requestPaint,Re=Ct.unstable_now,eI=Ct.unstable_getCurrentPriorityLevel,gd=Ct.unstable_ImmediatePriority,y_=Ct.unstable_UserBlockingPriority,ll=Ct.unstable_NormalPriority,tI=Ct.unstable_LowPriority,__=Ct.unstable_IdlePriority,Ql=null,sn=null;function nI(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:iI,rI=Math.log,sI=Math.LN2;function iI(t){return t>>>=0,t===0?32:31-(rI(t)/sI|0)|0}var ya=64,_a=4194304;function zi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=zi(l):(i&=o,i!==0&&(r=zi(i)))}else o=n&~s,o!==0?r=zi(o):i!==0&&(r=zi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),s=1<<n,r|=t[n],e&=~s;return r}function oI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Wt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=oI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v_(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function lI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Wt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ce=0;function w_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E_,_d,T_,I_,S_,th=!1,va=[],er=null,tr=null,nr=null,ho=new Map,fo=new Map,Wn=[],uI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lm(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Pi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Fo(e),e!==null&&_d(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function cI(t,e,n,r,s){switch(e){case"focusin":return er=Pi(er,t,e,n,r,s),!0;case"dragenter":return tr=Pi(tr,t,e,n,r,s),!0;case"mouseover":return nr=Pi(nr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ho.set(i,Pi(ho.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,fo.set(i,Pi(fo.get(i)||null,t,e,n,r,s)),!0}return!1}function x_(t){var e=zr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=f_(n),e!==null){t.blockedOn=e,S_(t.priority,function(){T_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yc=r,n.target.dispatchEvent(r),Yc=null}else return e=Fo(n),e!==null&&_d(e),t.blockedOn=n,!1;e.shift()}return!0}function um(t,e,n){Fa(t)&&n.delete(e)}function hI(){th=!1,er!==null&&Fa(er)&&(er=null),tr!==null&&Fa(tr)&&(tr=null),nr!==null&&Fa(nr)&&(nr=null),ho.forEach(um),fo.forEach(um)}function Di(t,e){t.blockedOn===e&&(t.blockedOn=null,th||(th=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,hI)))}function po(t){function e(s){return Di(s,t)}if(0<va.length){Di(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(er!==null&&Di(er,t),tr!==null&&Di(tr,t),nr!==null&&Di(nr,t),ho.forEach(e),fo.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)x_(n),n.blockedOn===null&&Wn.shift()}var Ms=bn.ReactCurrentBatchConfig,cl=!0;function dI(t,e,n,r){var s=ce,i=Ms.transition;Ms.transition=null;try{ce=1,vd(t,e,n,r)}finally{ce=s,Ms.transition=i}}function fI(t,e,n,r){var s=ce,i=Ms.transition;Ms.transition=null;try{ce=4,vd(t,e,n,r)}finally{ce=s,Ms.transition=i}}function vd(t,e,n,r){if(cl){var s=nh(t,e,n,r);if(s===null)dc(t,e,r,hl,n),lm(t,r);else if(cI(s,t,e,n,r))r.stopPropagation();else if(lm(t,r),e&4&&-1<uI.indexOf(t)){for(;s!==null;){var i=Fo(s);if(i!==null&&E_(i),i=nh(t,e,n,r),i===null&&dc(t,e,r,hl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else dc(t,e,r,null,n)}}var hl=null;function nh(t,e,n,r){if(hl=null,t=md(r),t=zr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function A_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eI()){case gd:return 1;case y_:return 4;case ll:case tI:return 16;case __:return 536870912;default:return 16}default:return 16}}var Jn=null,wd=null,Ua=null;function C_(){if(Ua)return Ua;var t,e=wd,n=e.length,r,s="value"in Jn?Jn.value:Jn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ua=s.slice(t,1<r?1-r:void 0)}function za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function cm(){return!1}function Rt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wa:cm,this.isPropagationStopped=cm,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ed=Rt(si),jo=xe({},si,{view:0,detail:0}),pI=Rt(jo),rc,sc,bi,Yl=xe({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bi&&(bi&&t.type==="mousemove"?(rc=t.screenX-bi.screenX,sc=t.screenY-bi.screenY):sc=rc=0,bi=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),hm=Rt(Yl),mI=xe({},Yl,{dataTransfer:0}),gI=Rt(mI),yI=xe({},jo,{relatedTarget:0}),ic=Rt(yI),_I=xe({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),vI=Rt(_I),wI=xe({},si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EI=Rt(wI),TI=xe({},si,{data:0}),dm=Rt(TI),II={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xI[t])?!!e[t]:!1}function Td(){return AI}var CI=xe({},jo,{key:function(t){if(t.key){var e=II[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Td,charCode:function(t){return t.type==="keypress"?za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kI=Rt(CI),RI=xe({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=Rt(RI),NI=xe({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Td}),PI=Rt(NI),DI=xe({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),bI=Rt(DI),VI=xe({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MI=Rt(VI),OI=[9,13,27,32],Id=Sn&&"CompositionEvent"in window,Qi=null;Sn&&"documentMode"in document&&(Qi=document.documentMode);var LI=Sn&&"TextEvent"in window&&!Qi,k_=Sn&&(!Id||Qi&&8<Qi&&11>=Qi),pm=" ",mm=!1;function R_(t,e){switch(t){case"keyup":return OI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function jI(t,e){switch(t){case"compositionend":return N_(e);case"keypress":return e.which!==32?null:(mm=!0,pm);case"textInput":return t=e.data,t===pm&&mm?null:t;default:return null}}function FI(t,e){if(Es)return t==="compositionend"||!Id&&R_(t,e)?(t=C_(),Ua=wd=Jn=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k_&&e.locale!=="ko"?null:e.data;default:return null}}var UI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UI[t.type]:e==="textarea"}function P_(t,e,n,r){l_(r),e=dl(e,"onChange"),0<e.length&&(n=new Ed("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,mo=null;function zI(t){B_(t,0)}function Jl(t){var e=Ss(t);if(t_(e))return t}function BI(t,e){if(t==="change")return e}var D_=!1;if(Sn){var oc;if(Sn){var ac="oninput"in document;if(!ac){var ym=document.createElement("div");ym.setAttribute("oninput","return;"),ac=typeof ym.oninput=="function"}oc=ac}else oc=!1;D_=oc&&(!document.documentMode||9<document.documentMode)}function _m(){Yi&&(Yi.detachEvent("onpropertychange",b_),mo=Yi=null)}function b_(t){if(t.propertyName==="value"&&Jl(mo)){var e=[];P_(e,mo,t,md(t)),d_(zI,e)}}function $I(t,e,n){t==="focusin"?(_m(),Yi=e,mo=n,Yi.attachEvent("onpropertychange",b_)):t==="focusout"&&_m()}function HI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(mo)}function qI(t,e){if(t==="click")return Jl(e)}function WI(t,e){if(t==="input"||t==="change")return Jl(e)}function GI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:GI;function go(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!jc.call(e,s)||!Yt(t[s],e[s]))return!1}return!0}function vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wm(t,e){var n=vm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vm(n)}}function V_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?V_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function M_(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function Sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function KI(t){var e=M_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&V_(n.ownerDocument.documentElement,n)){if(r!==null&&Sd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=wm(n,i);var o=wm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QI=Sn&&"documentMode"in document&&11>=document.documentMode,Ts=null,rh=null,Ji=null,sh=!1;function Em(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sh||Ts==null||Ts!==il(r)||(r=Ts,"selectionStart"in r&&Sd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ji&&go(Ji,r)||(Ji=r,r=dl(rh,"onSelect"),0<r.length&&(e=new Ed("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ts)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Is={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},lc={},O_={};Sn&&(O_=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Xl(t){if(lc[t])return lc[t];if(!Is[t])return t;var e=Is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in O_)return lc[t]=e[n];return t}var L_=Xl("animationend"),j_=Xl("animationiteration"),F_=Xl("animationstart"),U_=Xl("transitionend"),z_=new Map,Tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){z_.set(t,e),os(e,[t])}for(var uc=0;uc<Tm.length;uc++){var cc=Tm[uc],YI=cc.toLowerCase(),JI=cc[0].toUpperCase()+cc.slice(1);xr(YI,"on"+JI)}xr(L_,"onAnimationEnd");xr(j_,"onAnimationIteration");xr(F_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(U_,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function Im(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YT(r,e,void 0,t),t.currentTarget=null}function B_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Im(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Im(s,l,h),i=u}}}if(al)throw t=Zc,al=!1,Zc=null,t}function ge(t,e){var n=e[uh];n===void 0&&(n=e[uh]=new Set);var r=t+"__bubble";n.has(r)||($_(e,t,2,!1),n.add(r))}function hc(t,e,n){var r=0;e&&(r|=4),$_(n,t,r,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Ta]){t[Ta]=!0,Yy.forEach(function(n){n!=="selectionchange"&&(XI.has(n)||hc(n,!1,t),hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,hc("selectionchange",!1,e))}}function $_(t,e,n,r){switch(A_(e)){case 1:var s=dI;break;case 4:s=fI;break;default:s=vd}n=s.bind(null,e,n,t),s=void 0,!Xc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function dc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=zr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}d_(function(){var h=i,p=md(n),g=[];e:{var _=z_.get(t);if(_!==void 0){var k=Ed,P=t;switch(t){case"keypress":if(za(n)===0)break e;case"keydown":case"keyup":k=kI;break;case"focusin":P="focus",k=ic;break;case"focusout":P="blur",k=ic;break;case"beforeblur":case"afterblur":k=ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=gI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=PI;break;case L_:case j_:case F_:k=vI;break;case U_:k=bI;break;case"scroll":k=pI;break;case"wheel":k=MI;break;case"copy":case"cut":case"paste":k=EI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=fm}var A=(e&4)!==0,b=!A&&t==="scroll",E=A?_!==null?_+"Capture":null:_;A=[];for(var T=h,C;T!==null;){C=T;var R=C.stateNode;if(C.tag===5&&R!==null&&(C=R,E!==null&&(R=co(T,E),R!=null&&A.push(_o(T,R,C)))),b)break;T=T.return}0<A.length&&(_=new k(_,P,null,n,p),g.push({event:_,listeners:A}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",_&&n!==Yc&&(P=n.relatedTarget||n.fromElement)&&(zr(P)||P[xn]))break e;if((k||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,k?(P=n.relatedTarget||n.toElement,k=h,P=P?zr(P):null,P!==null&&(b=as(P),P!==b||P.tag!==5&&P.tag!==6)&&(P=null)):(k=null,P=h),k!==P)){if(A=hm,R="onMouseLeave",E="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(A=fm,R="onPointerLeave",E="onPointerEnter",T="pointer"),b=k==null?_:Ss(k),C=P==null?_:Ss(P),_=new A(R,T+"leave",k,n,p),_.target=b,_.relatedTarget=C,R=null,zr(p)===h&&(A=new A(E,T+"enter",P,n,p),A.target=C,A.relatedTarget=b,R=A),b=R,k&&P)t:{for(A=k,E=P,T=0,C=A;C;C=fs(C))T++;for(C=0,R=E;R;R=fs(R))C++;for(;0<T-C;)A=fs(A),T--;for(;0<C-T;)E=fs(E),C--;for(;T--;){if(A===E||E!==null&&A===E.alternate)break t;A=fs(A),E=fs(E)}A=null}else A=null;k!==null&&Sm(g,_,k,A,!1),P!==null&&b!==null&&Sm(g,b,P,A,!0)}}e:{if(_=h?Ss(h):window,k=_.nodeName&&_.nodeName.toLowerCase(),k==="select"||k==="input"&&_.type==="file")var L=BI;else if(gm(_))if(D_)L=WI;else{L=HI;var F=$I}else(k=_.nodeName)&&k.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(L=qI);if(L&&(L=L(t,h))){P_(g,L,n,p);break e}F&&F(t,_,h),t==="focusout"&&(F=_._wrapperState)&&F.controlled&&_.type==="number"&&qc(_,"number",_.value)}switch(F=h?Ss(h):window,t){case"focusin":(gm(F)||F.contentEditable==="true")&&(Ts=F,rh=h,Ji=null);break;case"focusout":Ji=rh=Ts=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,Em(g,n,p);break;case"selectionchange":if(QI)break;case"keydown":case"keyup":Em(g,n,p)}var w;if(Id)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Es?R_(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(k_&&n.locale!=="ko"&&(Es||m!=="onCompositionStart"?m==="onCompositionEnd"&&Es&&(w=C_()):(Jn=p,wd="value"in Jn?Jn.value:Jn.textContent,Es=!0)),F=dl(h,m),0<F.length&&(m=new dm(m,t,null,n,p),g.push({event:m,listeners:F}),w?m.data=w:(w=N_(n),w!==null&&(m.data=w)))),(w=LI?jI(t,n):FI(t,n))&&(h=dl(h,"onBeforeInput"),0<h.length&&(p=new dm("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:h}),p.data=w))}B_(g,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=co(t,n),i!=null&&r.unshift(_o(t,i,s)),i=co(t,e),i!=null&&r.push(_o(t,i,s))),t=t.return}return r}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=co(n,i),u!=null&&o.unshift(_o(n,u,l))):s||(u=co(n,i),u!=null&&o.push(_o(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ZI=/\r\n?/g,eS=/\u0000|\uFFFD/g;function xm(t){return(typeof t=="string"?t:""+t).replace(ZI,`
`).replace(eS,"")}function Ia(t,e,n){if(e=xm(e),xm(t)!==e&&n)throw Error(j(425))}function fl(){}var ih=null,oh=null;function ah(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lh=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(t){return Am.resolve(null).then(t).catch(rS)}:lh;function rS(t){setTimeout(function(){throw t})}function fc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);po(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ii=Math.random().toString(36).slice(2),rn="__reactFiber$"+ii,vo="__reactProps$"+ii,xn="__reactContainer$"+ii,uh="__reactEvents$"+ii,sS="__reactListeners$"+ii,iS="__reactHandles$"+ii;function zr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cm(t);t!==null;){if(n=t[rn])return n;t=Cm(t)}return e}t=n,n=t.parentNode}return null}function Fo(t){return t=t[rn]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Zl(t){return t[vo]||null}var ch=[],xs=-1;function Ar(t){return{current:t}}function ve(t){0>xs||(t.current=ch[xs],ch[xs]=null,xs--)}function pe(t,e){xs++,ch[xs]=t.current,t.current=e}var gr={},at=Ar(gr),vt=Ar(!1),Qr=gr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function wt(t){return t=t.childContextTypes,t!=null}function pl(){ve(vt),ve(at)}function km(t,e,n){if(at.current!==gr)throw Error(j(168));pe(at,e),pe(vt,n)}function H_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,$T(t)||"Unknown",s));return xe({},n,r)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Qr=at.current,pe(at,t),pe(vt,vt.current),!0}function Rm(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=H_(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,ve(vt),ve(at),pe(at,t)):ve(vt),pe(vt,n)}var gn=null,eu=!1,pc=!1;function q_(t){gn===null?gn=[t]:gn.push(t)}function oS(t){eu=!0,q_(t)}function Cr(){if(!pc&&gn!==null){pc=!0;var t=0,e=ce;try{var n=gn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,eu=!1}catch(s){throw gn!==null&&(gn=gn.slice(t+1)),g_(gd,Cr),s}finally{ce=e,pc=!1}}return null}var As=[],Cs=0,gl=null,yl=0,Nt=[],Pt=0,Yr=null,_n=1,vn="";function jr(t,e){As[Cs++]=yl,As[Cs++]=gl,gl=t,yl=e}function W_(t,e,n){Nt[Pt++]=_n,Nt[Pt++]=vn,Nt[Pt++]=Yr,Yr=t;var r=_n;t=vn;var s=32-Wt(r)-1;r&=~(1<<s),n+=1;var i=32-Wt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,_n=1<<32-Wt(e)+s|n<<s|r,vn=i+t}else _n=1<<i|n<<s|r,vn=t}function xd(t){t.return!==null&&(jr(t,1),W_(t,1,0))}function Ad(t){for(;t===gl;)gl=As[--Cs],As[Cs]=null,yl=As[--Cs],As[Cs]=null;for(;t===Yr;)Yr=Nt[--Pt],Nt[Pt]=null,vn=Nt[--Pt],Nt[Pt]=null,_n=Nt[--Pt],Nt[Pt]=null}var At=null,St=null,we=!1,$t=null;function G_(t,e){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,St=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:_n,overflow:vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,St=null,!0):!1;default:return!1}}function hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dh(t){if(we){var e=St;if(e){var n=e;if(!Nm(t,e)){if(hh(t))throw Error(j(418));e=rr(n.nextSibling);var r=At;e&&Nm(t,e)?G_(r,n):(t.flags=t.flags&-4097|2,we=!1,At=t)}}else{if(hh(t))throw Error(j(418));t.flags=t.flags&-4097|2,we=!1,At=t}}}function Pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function Sa(t){if(t!==At)return!1;if(!we)return Pm(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ah(t.type,t.memoizedProps)),e&&(e=St)){if(hh(t))throw K_(),Error(j(418));for(;e;)G_(t,e),e=rr(e.nextSibling)}if(Pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=At?rr(t.stateNode.nextSibling):null;return!0}function K_(){for(var t=St;t;)t=rr(t.nextSibling)}function qs(){St=At=null,we=!1}function Cd(t){$t===null?$t=[t]:$t.push(t)}var aS=bn.ReactCurrentBatchConfig;function Vi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function xa(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dm(t){var e=t._init;return e(t._payload)}function Q_(t){function e(E,T){if(t){var C=E.deletions;C===null?(E.deletions=[T],E.flags|=16):C.push(T)}}function n(E,T){if(!t)return null;for(;T!==null;)e(E,T),T=T.sibling;return null}function r(E,T){for(E=new Map;T!==null;)T.key!==null?E.set(T.key,T):E.set(T.index,T),T=T.sibling;return E}function s(E,T){return E=ar(E,T),E.index=0,E.sibling=null,E}function i(E,T,C){return E.index=C,t?(C=E.alternate,C!==null?(C=C.index,C<T?(E.flags|=2,T):C):(E.flags|=2,T)):(E.flags|=1048576,T)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,T,C,R){return T===null||T.tag!==6?(T=Ec(C,E.mode,R),T.return=E,T):(T=s(T,C),T.return=E,T)}function u(E,T,C,R){var L=C.type;return L===ws?p(E,T,C.props.children,R,C.key):T!==null&&(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Hn&&Dm(L)===T.type)?(R=s(T,C.props),R.ref=Vi(E,T,C),R.return=E,R):(R=Ka(C.type,C.key,C.props,null,E.mode,R),R.ref=Vi(E,T,C),R.return=E,R)}function h(E,T,C,R){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=Tc(C,E.mode,R),T.return=E,T):(T=s(T,C.children||[]),T.return=E,T)}function p(E,T,C,R,L){return T===null||T.tag!==7?(T=Wr(C,E.mode,R,L),T.return=E,T):(T=s(T,C),T.return=E,T)}function g(E,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Ec(""+T,E.mode,C),T.return=E,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case pa:return C=Ka(T.type,T.key,T.props,null,E.mode,C),C.ref=Vi(E,null,T),C.return=E,C;case vs:return T=Tc(T,E.mode,C),T.return=E,T;case Hn:var R=T._init;return g(E,R(T._payload),C)}if(Ui(T)||Ri(T))return T=Wr(T,E.mode,C,null),T.return=E,T;xa(E,T)}return null}function _(E,T,C,R){var L=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return L!==null?null:l(E,T,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case pa:return C.key===L?u(E,T,C,R):null;case vs:return C.key===L?h(E,T,C,R):null;case Hn:return L=C._init,_(E,T,L(C._payload),R)}if(Ui(C)||Ri(C))return L!==null?null:p(E,T,C,R,null);xa(E,C)}return null}function k(E,T,C,R,L){if(typeof R=="string"&&R!==""||typeof R=="number")return E=E.get(C)||null,l(T,E,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case pa:return E=E.get(R.key===null?C:R.key)||null,u(T,E,R,L);case vs:return E=E.get(R.key===null?C:R.key)||null,h(T,E,R,L);case Hn:var F=R._init;return k(E,T,C,F(R._payload),L)}if(Ui(R)||Ri(R))return E=E.get(C)||null,p(T,E,R,L,null);xa(T,R)}return null}function P(E,T,C,R){for(var L=null,F=null,w=T,m=T=0,v=null;w!==null&&m<C.length;m++){w.index>m?(v=w,w=null):v=w.sibling;var S=_(E,w,C[m],R);if(S===null){w===null&&(w=v);break}t&&w&&S.alternate===null&&e(E,w),T=i(S,T,m),F===null?L=S:F.sibling=S,F=S,w=v}if(m===C.length)return n(E,w),we&&jr(E,m),L;if(w===null){for(;m<C.length;m++)w=g(E,C[m],R),w!==null&&(T=i(w,T,m),F===null?L=w:F.sibling=w,F=w);return we&&jr(E,m),L}for(w=r(E,w);m<C.length;m++)v=k(w,E,m,C[m],R),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?m:v.key),T=i(v,T,m),F===null?L=v:F.sibling=v,F=v);return t&&w.forEach(function(x){return e(E,x)}),we&&jr(E,m),L}function A(E,T,C,R){var L=Ri(C);if(typeof L!="function")throw Error(j(150));if(C=L.call(C),C==null)throw Error(j(151));for(var F=L=null,w=T,m=T=0,v=null,S=C.next();w!==null&&!S.done;m++,S=C.next()){w.index>m?(v=w,w=null):v=w.sibling;var x=_(E,w,S.value,R);if(x===null){w===null&&(w=v);break}t&&w&&x.alternate===null&&e(E,w),T=i(x,T,m),F===null?L=x:F.sibling=x,F=x,w=v}if(S.done)return n(E,w),we&&jr(E,m),L;if(w===null){for(;!S.done;m++,S=C.next())S=g(E,S.value,R),S!==null&&(T=i(S,T,m),F===null?L=S:F.sibling=S,F=S);return we&&jr(E,m),L}for(w=r(E,w);!S.done;m++,S=C.next())S=k(w,E,m,S.value,R),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?m:S.key),T=i(S,T,m),F===null?L=S:F.sibling=S,F=S);return t&&w.forEach(function(N){return e(E,N)}),we&&jr(E,m),L}function b(E,T,C,R){if(typeof C=="object"&&C!==null&&C.type===ws&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case pa:e:{for(var L=C.key,F=T;F!==null;){if(F.key===L){if(L=C.type,L===ws){if(F.tag===7){n(E,F.sibling),T=s(F,C.props.children),T.return=E,E=T;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Hn&&Dm(L)===F.type){n(E,F.sibling),T=s(F,C.props),T.ref=Vi(E,F,C),T.return=E,E=T;break e}n(E,F);break}else e(E,F);F=F.sibling}C.type===ws?(T=Wr(C.props.children,E.mode,R,C.key),T.return=E,E=T):(R=Ka(C.type,C.key,C.props,null,E.mode,R),R.ref=Vi(E,T,C),R.return=E,E=R)}return o(E);case vs:e:{for(F=C.key;T!==null;){if(T.key===F)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){n(E,T.sibling),T=s(T,C.children||[]),T.return=E,E=T;break e}else{n(E,T);break}else e(E,T);T=T.sibling}T=Tc(C,E.mode,R),T.return=E,E=T}return o(E);case Hn:return F=C._init,b(E,T,F(C._payload),R)}if(Ui(C))return P(E,T,C,R);if(Ri(C))return A(E,T,C,R);xa(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,T!==null&&T.tag===6?(n(E,T.sibling),T=s(T,C),T.return=E,E=T):(n(E,T),T=Ec(C,E.mode,R),T.return=E,E=T),o(E)):n(E,T)}return b}var Ws=Q_(!0),Y_=Q_(!1),_l=Ar(null),vl=null,ks=null,kd=null;function Rd(){kd=ks=vl=null}function Nd(t){var e=_l.current;ve(_l),t._currentValue=e}function fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){vl=t,kd=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(kd!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(vl===null)throw Error(j(308));ks=t,vl.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Br=null;function Pd(t){Br===null?Br=[t]:Br.push(t)}function J_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Pd(e)):(n.next=s.next,s.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function Dd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function In(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,An(t,n)}return s=r.interleaved,s===null?(e.next=e,Pd(r)):(e.next=s.next,s.next=e),r.interleaved=e,An(t,n)}function Ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yd(t,n)}}function bm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,r){var s=t.updateQueue;qn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;o=0,p=h=u=null,l=i;do{var _=l.lane,k=l.eventTime;if((r&_)===_){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,A=l;switch(_=e,k=n,A.tag){case 1:if(P=A.payload,typeof P=="function"){g=P.call(k,g,_);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=A.payload,_=typeof P=="function"?P.call(k,g,_):P,_==null)break e;g=xe({},g,_);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[l]:_.push(l))}else k={eventTime:k,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=k,u=g):p=p.next=k,o|=_;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;_=l,l=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(p===null&&(u=g),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=g}}function Vm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Uo={},on=Ar(Uo),wo=Ar(Uo),Eo=Ar(Uo);function $r(t){if(t===Uo)throw Error(j(174));return t}function bd(t,e){switch(pe(Eo,e),pe(wo,t),pe(on,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gc(e,t)}ve(on),pe(on,e)}function Gs(){ve(on),ve(wo),ve(Eo)}function Z_(t){$r(Eo.current);var e=$r(on.current),n=Gc(e,t.type);e!==n&&(pe(wo,t),pe(on,n))}function Vd(t){wo.current===t&&(ve(on),ve(wo))}var Ie=Ar(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mc=[];function Md(){for(var t=0;t<mc.length;t++)mc[t]._workInProgressVersionPrimary=null;mc.length=0}var $a=bn.ReactCurrentDispatcher,gc=bn.ReactCurrentBatchConfig,Jr=0,Se=null,Le=null,Be=null,Tl=!1,Xi=!1,To=0,lS=0;function et(){throw Error(j(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function Ld(t,e,n,r,s,i){if(Jr=i,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$a.current=t===null||t.memoizedState===null?dS:fS,t=n(r,s),Xi){i=0;do{if(Xi=!1,To=0,25<=i)throw Error(j(301));i+=1,Be=Le=null,e.updateQueue=null,$a.current=pS,t=n(r,s)}while(Xi)}if($a.current=Il,e=Le!==null&&Le.next!==null,Jr=0,Be=Le=Se=null,Tl=!1,e)throw Error(j(300));return t}function jd(){var t=To!==0;return To=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Se.memoizedState=Be=t:Be=Be.next=t,Be}function Lt(){if(Le===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=Be===null?Se.memoizedState:Be.next;if(e!==null)Be=e,Le=t;else{if(t===null)throw Error(j(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Be===null?Se.memoizedState=Be=t:Be=Be.next=t}return Be}function Io(t,e){return typeof e=="function"?e(t):e}function yc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Le,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var p=h.lane;if((Jr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Se.lanes|=p,Xr|=p}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,Yt(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Se.lanes|=i,Xr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _c(t){var e=Lt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Yt(i,e.memoizedState)||(_t=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function ev(){}function tv(t,e){var n=Se,r=Lt(),s=e(),i=!Yt(r.memoizedState,s);if(i&&(r.memoizedState=s,_t=!0),r=r.queue,Fd(sv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,So(9,rv.bind(null,n,r,s,e),void 0,null),$e===null)throw Error(j(349));Jr&30||nv(n,e,s)}return s}function nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,r){e.value=n,e.getSnapshot=r,iv(e)&&ov(t)}function sv(t,e,n){return n(function(){iv(e)&&ov(t)})}function iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function ov(t){var e=An(t,1);e!==null&&Gt(e,t,1,-1)}function Mm(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},e.queue=t,t=t.dispatch=hS.bind(null,Se,t),[e.memoizedState,t]}function So(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function av(){return Lt().memoizedState}function Ha(t,e,n,r){var s=tn();Se.flags|=t,s.memoizedState=So(1|e,n,void 0,r===void 0?null:r)}function tu(t,e,n,r){var s=Lt();r=r===void 0?null:r;var i=void 0;if(Le!==null){var o=Le.memoizedState;if(i=o.destroy,r!==null&&Od(r,o.deps)){s.memoizedState=So(e,n,i,r);return}}Se.flags|=t,s.memoizedState=So(1|e,n,i,r)}function Om(t,e){return Ha(8390656,8,t,e)}function Fd(t,e){return tu(2048,8,t,e)}function lv(t,e){return tu(4,2,t,e)}function uv(t,e){return tu(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hv(t,e,n){return n=n!=null?n.concat([t]):null,tu(4,4,cv.bind(null,e,t),n)}function Ud(){}function dv(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fv(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pv(t,e,n){return Jr&21?(Yt(n,e)||(n=v_(),Se.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function uS(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=gc.transition;gc.transition={};try{t(!1),e()}finally{ce=n,gc.transition=r}}function mv(){return Lt().memoizedState}function cS(t,e,n){var r=or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gv(t))yv(e,n);else if(n=J_(t,e,n,r),n!==null){var s=dt();Gt(n,t,r,s),_v(n,e,r)}}function hS(t,e,n){var r=or(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gv(t))yv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Yt(l,o)){var u=e.interleaved;u===null?(s.next=s,Pd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=J_(t,e,s,r),n!==null&&(s=dt(),Gt(n,t,r,s),_v(n,e,r))}}function gv(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function yv(t,e){Xi=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yd(t,n)}}var Il={readContext:Ot,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},dS={readContext:Ot,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:Om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cS.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:Mm,useDebugValue:Ud,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Mm(!1),e=t[0];return t=uS.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,s=tn();if(we){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),$e===null)throw Error(j(349));Jr&30||nv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Om(sv.bind(null,r,i,t),[t]),r.flags|=2048,So(9,rv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=tn(),e=$e.identifierPrefix;if(we){var n=vn,r=_n;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fS={readContext:Ot,useCallback:dv,useContext:Ot,useEffect:Fd,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:yc,useRef:av,useState:function(){return yc(Io)},useDebugValue:Ud,useDeferredValue:function(t){var e=Lt();return pv(e,Le.memoizedState,t)},useTransition:function(){var t=yc(Io)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},pS={readContext:Ot,useCallback:dv,useContext:Ot,useEffect:Fd,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:_c,useRef:av,useState:function(){return _c(Io)},useDebugValue:Ud,useDeferredValue:function(t){var e=Lt();return Le===null?e.memoizedState=t:pv(e,Le.memoizedState,t)},useTransition:function(){var t=_c(Io)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ph(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nu={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),s=or(t),i=In(r,s);i.payload=e,n!=null&&(i.callback=n),e=sr(t,i,s),e!==null&&(Gt(e,t,s,r),Ba(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),s=or(t),i=In(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=sr(t,i,s),e!==null&&(Gt(e,t,s,r),Ba(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=or(t),s=In(n,r);s.tag=2,e!=null&&(s.callback=e),e=sr(t,s,r),e!==null&&(Gt(e,t,r,n),Ba(e,t,r))}};function Lm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(s,i):!0}function vv(t,e,n){var r=!1,s=gr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ot(i):(s=wt(e)?Qr:at.current,r=e.contextTypes,i=(r=r!=null)?Hs(t,s):gr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nu.enqueueReplaceState(e,e.state,null)}function mh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Dd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ot(i):(i=wt(e)?Qr:at.current,s.context=Hs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ph(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&nu.enqueueReplaceState(s,s.state,null),wl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e){try{var n="",r=e;do n+=BT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mS=typeof WeakMap=="function"?WeakMap:Map;function wv(t,e,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xl||(xl=!0,Ah=r),gh(t,e)},n}function Ev(t,e,n){n=In(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){gh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){gh(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=RS.bind(null,t,e,n),e.then(t,t))}function Um(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=In(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var gS=bn.ReactCurrentOwner,_t=!1;function ht(t,e,n,r){e.child=t===null?Y_(e,null,n,r):Ws(e,t.child,n,r)}function Bm(t,e,n,r,s){n=n.render;var i=e.ref;return Os(e,s),r=Ld(t,e,n,r,i,s),n=jd(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Cn(t,e,s)):(we&&n&&xd(e),e.flags|=1,ht(t,e,r,s),e.child)}function $m(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Kd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Tv(t,e,i,r,s)):(t=Ka(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(o,r)&&t.ref===e.ref)return Cn(t,e,s)}return e.flags|=1,t=ar(i,r),t.ref=e.ref,t.return=e,e.child=t}function Tv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(go(i,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Cn(t,e,s)}return yh(t,e,n,r,s)}function Iv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ns,It),It|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Ns,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,pe(Ns,It),It|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,pe(Ns,It),It|=r;return ht(t,e,s,n),e.child}function Sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yh(t,e,n,r,s){var i=wt(n)?Qr:at.current;return i=Hs(e,i),Os(e,s),n=Ld(t,e,n,r,i,s),r=jd(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Cn(t,e,s)):(we&&r&&xd(e),e.flags|=1,ht(t,e,n,s),e.child)}function Hm(t,e,n,r,s){if(wt(n)){var i=!0;ml(e)}else i=!1;if(Os(e,s),e.stateNode===null)qa(t,e),vv(e,n,r),mh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ot(h):(h=wt(n)?Qr:at.current,h=Hs(e,h));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&jm(e,o,r,h),qn=!1;var _=e.memoizedState;o.state=_,wl(e,r,o,s),u=e.memoizedState,l!==r||_!==u||vt.current||qn?(typeof p=="function"&&(ph(e,n,p,r),u=e.memoizedState),(l=qn||Lm(e,n,l,r,_,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,X_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:zt(e.type,l),o.props=h,g=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=wt(n)?Qr:at.current,u=Hs(e,u));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||_!==u)&&jm(e,o,r,u),qn=!1,_=e.memoizedState,o.state=_,wl(e,r,o,s);var P=e.memoizedState;l!==g||_!==P||vt.current||qn?(typeof k=="function"&&(ph(e,n,k,r),P=e.memoizedState),(h=qn||Lm(e,n,h,r,_,P,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return _h(t,e,n,r,i,s)}function _h(t,e,n,r,s,i){Sv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Rm(e,n,!1),Cn(t,e,i);r=e.stateNode,gS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ws(e,t.child,null,i),e.child=Ws(e,null,l,i)):ht(t,e,l,i),e.memoizedState=r.state,s&&Rm(e,n,!0),e.child}function xv(t){var e=t.stateNode;e.pendingContext?km(t,e.pendingContext,e.pendingContext!==e.context):e.context&&km(t,e.context,!1),bd(t,e.containerInfo)}function qm(t,e,n,r,s){return qs(),Cd(s),e.flags|=256,ht(t,e,n,r),e.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Av(t,e,n){var r=e.pendingProps,s=Ie.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),pe(Ie,s&1),t===null)return dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=iu(o,r,0,null),t=Wr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=wh(n),e.memoizedState=vh,t):zd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return yS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ar(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ar(l,i):(i=Wr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?wh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=vh,r}return i=t.child,t=i.sibling,r=ar(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zd(t,e){return e=iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Aa(t,e,n,r){return r!==null&&Cd(r),Ws(e,t.child,null,n),t=zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=vc(Error(j(422))),Aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=iu({mode:"visible",children:r.children},s,0,null),i=Wr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ws(e,t.child,null,o),e.child.memoizedState=wh(o),e.memoizedState=vh,i);if(!(e.mode&1))return Aa(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=vc(i,r,void 0),Aa(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=$e,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,An(t,s),Gt(r,t,s,-1))}return Gd(),r=vc(Error(j(421))),Aa(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=NS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,St=rr(s.nextSibling),At=e,we=!0,$t=null,t!==null&&(Nt[Pt++]=_n,Nt[Pt++]=vn,Nt[Pt++]=Yr,_n=t.id,vn=t.overflow,Yr=e),e=zd(e,r.children),e.flags|=4096,e)}function Wm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fh(t.return,e,n)}function wc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Cv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ht(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,n,e);else if(t.tag===19)Wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),wc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&El(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}wc(e,!0,n,null,i);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _S(t,e,n){switch(e.tag){case 3:xv(e),qs();break;case 5:Z_(e);break;case 1:wt(e.type)&&ml(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;pe(_l,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Av(t,e,n):(pe(Ie,Ie.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);pe(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Cv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),pe(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Iv(t,e,n)}return Cn(t,e,n)}var kv,Eh,Rv,Nv;kv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eh=function(){};Rv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,$r(on.current);var i=null;switch(n){case"input":s=$c(t,s),r=$c(t,r),i=[];break;case"select":s=xe({},s,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":s=Wc(t,s),r=Wc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fl)}Kc(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(lo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(lo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ge("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Nv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mi(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vS(t,e,n){var r=e.pendingProps;switch(Ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return wt(e.type)&&pl(),tt(e),null;case 3:return r=e.stateNode,Gs(),ve(vt),ve(at),Md(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(Rh($t),$t=null))),Eh(t,e),tt(e),null;case 5:Vd(e);var s=$r(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)Rv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return tt(e),null}if(t=$r(on.current),Sa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[rn]=e,r[vo]=i,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(s=0;s<Bi.length;s++)ge(Bi[s],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":tm(r,i),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ge("invalid",r);break;case"textarea":rm(r,i),ge("invalid",r)}Kc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ia(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ia(r.textContent,l,t),s=["children",""+l]):lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":ma(r),nm(r,i,!0);break;case"textarea":ma(r),sm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[vo]=r,kv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,r),n){case"dialog":ge("cancel",t),ge("close",t),s=r;break;case"iframe":case"object":case"embed":ge("load",t),s=r;break;case"video":case"audio":for(s=0;s<Bi.length;s++)ge(Bi[s],t);s=r;break;case"source":ge("error",t),s=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),s=r;break;case"details":ge("toggle",t),s=r;break;case"input":tm(t,r),s=$c(t,r),ge("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=xe({},r,{value:void 0}),ge("invalid",t);break;case"textarea":rm(t,r),s=Wc(t,r),ge("invalid",t);break;default:s=r}Kc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?a_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&i_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&uo(t,u):typeof u=="number"&&uo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ge("scroll",t):u!=null&&hd(t,i,u,o))}switch(n){case"input":ma(t),nm(t,r,!1);break;case"textarea":ma(t),sm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ds(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)Nv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=$r(Eo.current),$r(on.current),Sa(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(i=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:Ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ia(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return tt(e),null;case 13:if(ve(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&St!==null&&e.mode&1&&!(e.flags&128))K_(),qs(),e.flags|=98560,i=!1;else if(i=Sa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[rn]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),i=!1}else $t!==null&&(Rh($t),$t=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?je===0&&(je=3):Gd())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return Gs(),Eh(t,e),t===null&&yo(e.stateNode.containerInfo),tt(e),null;case 10:return Nd(e.type._context),tt(e),null;case 17:return wt(e.type)&&pl(),tt(e),null;case 19:if(ve(Ie),i=e.memoizedState,i===null)return tt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Mi(i,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=El(t),o!==null){for(e.flags|=128,Mi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ie,Ie.current&1|2),e.child}t=t.sibling}i.tail!==null&&Re()>Qs&&(e.flags|=128,r=!0,Mi(i,!1),e.lanes=4194304)}else{if(!r)if(t=El(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!we)return tt(e),null}else 2*Re()-i.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,r=!0,Mi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Re(),e.sibling=null,n=Ie.current,pe(Ie,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Wd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function wS(t,e){switch(Ad(e),e.tag){case 1:return wt(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),ve(vt),ve(at),Md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vd(e),null;case 13:if(ve(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Ie),null;case 4:return Gs(),null;case 10:return Nd(e.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var Ca=!1,it=!1,ES=typeof WeakSet=="function"?WeakSet:Set,H=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function Th(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Gm=!1;function TS(t,e){if(ih=cl,t=M_(),Sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,g=t,_=null;t:for(;;){for(var k;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(k=g.firstChild)!==null;)_=g,g=k;for(;;){if(g===t)break t;if(_===n&&++h===s&&(l=o),_===i&&++p===r&&(u=o),(k=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(oh={focusedElem:t,selectionRange:n},cl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var A=P.memoizedProps,b=P.memoizedState,E=e.stateNode,T=E.getSnapshotBeforeUpdate(e.elementType===e.type?A:zt(e.type,A),b);E.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(R){Ce(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return P=Gm,Gm=!1,P}function Zi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Th(e,n,i)}s=s.next}while(s!==r)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pv(t){var e=t.alternate;e!==null&&(t.alternate=null,Pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[vo],delete e[uh],delete e[sS],delete e[iS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dv(t){return t.tag===5||t.tag===3||t.tag===4}function Km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(r!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}function xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}var Ge=null,Bt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)bv(t,e,n),n=n.sibling}function bv(t,e,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:it||Rs(n,e);case 6:var r=Ge,s=Bt;Ge=null,Bn(t,e,n),Ge=r,Bt=s,Ge!==null&&(Bt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Bt?(t=Ge,n=n.stateNode,t.nodeType===8?fc(t.parentNode,n):t.nodeType===1&&fc(t,n),po(t)):fc(Ge,n.stateNode));break;case 4:r=Ge,s=Bt,Ge=n.stateNode.containerInfo,Bt=!0,Bn(t,e,n),Ge=r,Bt=s;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Th(n,e,o),s=s.next}while(s!==r)}Bn(t,e,n);break;case 1:if(!it&&(Rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Bn(t,e,n),it=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function Qm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ES),e.forEach(function(r){var s=PS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Bt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Bt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(Ge===null)throw Error(j(160));bv(i,o,s),Ge=null,Bt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Ce(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vv(e,t),e=e.sibling}function Vv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),en(t),r&4){try{Zi(3,t,t.return),ru(3,t)}catch(A){Ce(t,t.return,A)}try{Zi(5,t,t.return)}catch(A){Ce(t,t.return,A)}}break;case 1:Ut(e,t),en(t),r&512&&n!==null&&Rs(n,n.return);break;case 5:if(Ut(e,t),en(t),r&512&&n!==null&&Rs(n,n.return),t.flags&32){var s=t.stateNode;try{uo(s,"")}catch(A){Ce(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&n_(s,i),Qc(l,o);var h=Qc(l,i);for(o=0;o<u.length;o+=2){var p=u[o],g=u[o+1];p==="style"?a_(s,g):p==="dangerouslySetInnerHTML"?i_(s,g):p==="children"?uo(s,g):hd(s,p,g,h)}switch(l){case"input":Hc(s,i);break;case"textarea":r_(s,i);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Ds(s,!!i.multiple,k,!1):_!==!!i.multiple&&(i.defaultValue!=null?Ds(s,!!i.multiple,i.defaultValue,!0):Ds(s,!!i.multiple,i.multiple?[]:"",!1))}s[vo]=i}catch(A){Ce(t,t.return,A)}}break;case 6:if(Ut(e,t),en(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){Ce(t,t.return,A)}}break;case 3:if(Ut(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(e.containerInfo)}catch(A){Ce(t,t.return,A)}break;case 4:Ut(e,t),en(t);break;case 13:Ut(e,t),en(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Hd=Re())),r&4&&Qm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(it=(h=it)||p,Ut(e,t),it=h):Ut(e,t),en(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(H=t,p=t.child;p!==null;){for(g=H=p;H!==null;){switch(_=H,k=_.child,_.tag){case 0:case 11:case 14:case 15:Zi(4,_,_.return);break;case 1:Rs(_,_.return);var P=_.stateNode;if(typeof P.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(A){Ce(r,n,A)}}break;case 5:Rs(_,_.return);break;case 22:if(_.memoizedState!==null){Jm(g);continue}}k!==null?(k.return=_,H=k):Jm(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{s=g.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=o_("display",o))}catch(A){Ce(t,t.return,A)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(A){Ce(t,t.return,A)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ut(e,t),en(t),r&4&&Qm(t);break;case 21:break;default:Ut(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dv(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(uo(s,""),r.flags&=-33);var i=Km(t);xh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Km(t);Sh(t,l,o);break;default:throw Error(j(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function IS(t,e,n){H=t,Mv(t)}function Mv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ca;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||it;l=Ca;var h=it;if(Ca=o,(it=u)&&!h)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Xm(s):u!==null?(u.return=o,H=u):Xm(s);for(;i!==null;)H=i,Mv(i),i=i.sibling;H=s,Ca=l,it=h}Ym(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):Ym(t)}}function Ym(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Vm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&po(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}it||e.flags&512&&Ih(e)}catch(_){Ce(e,e.return,_)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Jm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Xm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ce(e,s,u)}}var i=e.return;try{Ih(e)}catch(u){Ce(e,i,u)}break;case 5:var o=e.return;try{Ih(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var SS=Math.ceil,Sl=bn.ReactCurrentDispatcher,Bd=bn.ReactCurrentOwner,Mt=bn.ReactCurrentBatchConfig,oe=0,$e=null,Pe=null,Ye=0,It=0,Ns=Ar(0),je=0,xo=null,Xr=0,su=0,$d=0,eo=null,gt=null,Hd=0,Qs=1/0,mn=null,xl=!1,Ah=null,ir=null,ka=!1,Xn=null,Al=0,to=0,Ch=null,Wa=-1,Ga=0;function dt(){return oe&6?Re():Wa!==-1?Wa:Wa=Re()}function or(t){return t.mode&1?oe&2&&Ye!==0?Ye&-Ye:aS.transition!==null?(Ga===0&&(Ga=v_()),Ga):(t=ce,t!==0||(t=window.event,t=t===void 0?16:A_(t.type)),t):1}function Gt(t,e,n,r){if(50<to)throw to=0,Ch=null,Error(j(185));Lo(t,n,r),(!(oe&2)||t!==$e)&&(t===$e&&(!(oe&2)&&(su|=n),je===4&&Gn(t,Ye)),Et(t,r),n===1&&oe===0&&!(e.mode&1)&&(Qs=Re()+500,eu&&Cr()))}function Et(t,e){var n=t.callbackNode;aI(t,e);var r=ul(t,t===$e?Ye:0);if(r===0)n!==null&&am(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&am(n),e===1)t.tag===0?oS(Zm.bind(null,t)):q_(Zm.bind(null,t)),nS(function(){!(oe&6)&&Cr()}),n=null;else{switch(w_(r)){case 1:n=gd;break;case 4:n=y_;break;case 16:n=ll;break;case 536870912:n=__;break;default:n=ll}n=$v(n,Ov.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ov(t,e){if(Wa=-1,Ga=0,oe&6)throw Error(j(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var r=ul(t,t===$e?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cl(t,r);else{e=r;var s=oe;oe|=2;var i=jv();($e!==t||Ye!==e)&&(mn=null,Qs=Re()+500,qr(t,e));do try{CS();break}catch(l){Lv(t,l)}while(!0);Rd(),Sl.current=i,oe=s,Pe!==null?e=0:($e=null,Ye=0,e=je)}if(e!==0){if(e===2&&(s=eh(t),s!==0&&(r=s,e=kh(t,s))),e===1)throw n=xo,qr(t,0),Gn(t,r),Et(t,Re()),n;if(e===6)Gn(t,r);else{if(s=t.current.alternate,!(r&30)&&!xS(s)&&(e=Cl(t,r),e===2&&(i=eh(t),i!==0&&(r=i,e=kh(t,i))),e===1))throw n=xo,qr(t,0),Gn(t,r),Et(t,Re()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Fr(t,gt,mn);break;case 3:if(Gn(t,r),(r&130023424)===r&&(e=Hd+500-Re(),10<e)){if(ul(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=lh(Fr.bind(null,t,gt,mn),e);break}Fr(t,gt,mn);break;case 4:if(Gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Wt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*SS(r/1960))-r,10<r){t.timeoutHandle=lh(Fr.bind(null,t,gt,mn),r);break}Fr(t,gt,mn);break;case 5:Fr(t,gt,mn);break;default:throw Error(j(329))}}}return Et(t,Re()),t.callbackNode===n?Ov.bind(null,t):null}function kh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=gt,gt=n,e!==null&&Rh(e)),t}function Rh(t){gt===null?gt=t:gt.push.apply(gt,t)}function xS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Yt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e){for(e&=~$d,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function Zm(t){if(oe&6)throw Error(j(327));Ls();var e=ul(t,0);if(!(e&1))return Et(t,Re()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var r=eh(t);r!==0&&(e=r,n=kh(t,r))}if(n===1)throw n=xo,qr(t,0),Gn(t,e),Et(t,Re()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,gt,mn),Et(t,Re()),null}function qd(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Qs=Re()+500,eu&&Cr())}}function Zr(t){Xn!==null&&Xn.tag===0&&!(oe&6)&&Ls();var e=oe;oe|=1;var n=Mt.transition,r=ce;try{if(Mt.transition=null,ce=1,t)return t()}finally{ce=r,Mt.transition=n,oe=e,!(oe&6)&&Cr()}}function Wd(){It=Ns.current,ve(Ns)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tS(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:Gs(),ve(vt),ve(at),Md();break;case 5:Vd(r);break;case 4:Gs();break;case 13:ve(Ie);break;case 19:ve(Ie);break;case 10:Nd(r.type._context);break;case 22:case 23:Wd()}n=n.return}if($e=t,Pe=t=ar(t.current,null),Ye=It=e,je=0,xo=null,$d=su=Xr=0,gt=eo=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Br=null}return t}function Lv(t,e){do{var n=Pe;try{if(Rd(),$a.current=Il,Tl){for(var r=Se.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Tl=!1}if(Jr=0,Be=Le=Se=null,Xi=!1,To=0,Bd.current=null,n===null||n.return===null){je=1,xo=e,Pe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=Um(o);if(k!==null){k.flags&=-257,zm(k,o,l,i,e),k.mode&1&&Fm(i,h,e),e=k,u=h;var P=e.updateQueue;if(P===null){var A=new Set;A.add(u),e.updateQueue=A}else P.add(u);break e}else{if(!(e&1)){Fm(i,h,e),Gd();break e}u=Error(j(426))}}else if(we&&l.mode&1){var b=Um(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),zm(b,o,l,i,e),Cd(Ks(u,l));break e}}i=u=Ks(u,l),je!==4&&(je=2),eo===null?eo=[i]:eo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=wv(i,u,e);bm(i,E);break e;case 1:l=u;var T=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(ir===null||!ir.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var R=Ev(i,l,e);bm(i,R);break e}}i=i.return}while(i!==null)}Uv(n)}catch(L){e=L,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function jv(){var t=Sl.current;return Sl.current=Il,t===null?Il:t}function Gd(){(je===0||je===3||je===2)&&(je=4),$e===null||!(Xr&268435455)&&!(su&268435455)||Gn($e,Ye)}function Cl(t,e){var n=oe;oe|=2;var r=jv();($e!==t||Ye!==e)&&(mn=null,qr(t,e));do try{AS();break}catch(s){Lv(t,s)}while(!0);if(Rd(),oe=n,Sl.current=r,Pe!==null)throw Error(j(261));return $e=null,Ye=0,je}function AS(){for(;Pe!==null;)Fv(Pe)}function CS(){for(;Pe!==null&&!XT();)Fv(Pe)}function Fv(t){var e=Bv(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?Uv(t):Pe=e,Bd.current=null}function Uv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wS(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Pe=null;return}}else if(n=vS(n,e,It),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);je===0&&(je=5)}function Fr(t,e,n){var r=ce,s=Mt.transition;try{Mt.transition=null,ce=1,kS(t,e,n,r)}finally{Mt.transition=s,ce=r}return null}function kS(t,e,n,r){do Ls();while(Xn!==null);if(oe&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(lI(t,i),t===$e&&(Pe=$e=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,$v(ll,function(){return Ls(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Mt.transition,Mt.transition=null;var o=ce;ce=1;var l=oe;oe|=4,Bd.current=null,TS(t,n),Vv(n,t),KI(oh),cl=!!ih,oh=ih=null,t.current=n,IS(n),ZT(),oe=l,ce=o,Mt.transition=i}else t.current=n;if(ka&&(ka=!1,Xn=t,Al=s),i=t.pendingLanes,i===0&&(ir=null),nI(n.stateNode),Et(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(xl)throw xl=!1,t=Ah,Ah=null,t;return Al&1&&t.tag!==0&&Ls(),i=t.pendingLanes,i&1?t===Ch?to++:(to=0,Ch=t):to=0,Cr(),null}function Ls(){if(Xn!==null){var t=w_(Al),e=Mt.transition,n=ce;try{if(Mt.transition=null,ce=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,Al=0,oe&6)throw Error(j(331));var s=oe;for(oe|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:Zi(8,p,i)}var g=p.child;if(g!==null)g.return=p,H=g;else for(;H!==null;){p=H;var _=p.sibling,k=p.return;if(Pv(p),p===h){H=null;break}if(_!==null){_.return=k,H=_;break}H=k}}}var P=i.alternate;if(P!==null){var A=P.child;if(A!==null){P.child=null;do{var b=A.sibling;A.sibling=null,A=b}while(A!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zi(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,H=E;break e}H=i.return}}var T=t.current;for(H=T;H!==null;){o=H;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,H=C;else e:for(o=T;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ru(9,l)}}catch(L){Ce(l,l.return,L)}if(l===o){H=null;break e}var R=l.sibling;if(R!==null){R.return=l.return,H=R;break e}H=l.return}}if(oe=s,Cr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Ql,t)}catch{}r=!0}return r}finally{ce=n,Mt.transition=e}}return!1}function eg(t,e,n){e=Ks(n,e),e=wv(t,e,1),t=sr(t,e,1),e=dt(),t!==null&&(Lo(t,1,e),Et(t,e))}function Ce(t,e,n){if(t.tag===3)eg(t,t,n);else for(;e!==null;){if(e.tag===3){eg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Ks(n,t),t=Ev(e,t,1),e=sr(e,t,1),t=dt(),e!==null&&(Lo(e,1,t),Et(e,t));break}}e=e.return}}function RS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ye&n)===n&&(je===4||je===3&&(Ye&130023424)===Ye&&500>Re()-Hd?qr(t,0):$d|=n),Et(t,e)}function zv(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=dt();t=An(t,e),t!==null&&(Lo(t,e,n),Et(t,n))}function NS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zv(t,n)}function PS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),zv(t,n)}var Bv;Bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,_S(t,e,n);_t=!!(t.flags&131072)}else _t=!1,we&&e.flags&1048576&&W_(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qa(t,e),t=e.pendingProps;var s=Hs(e,at.current);Os(e,n),s=Ld(null,e,r,t,s,n);var i=jd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(i=!0,ml(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Dd(e),s.updater=nu,e.stateNode=s,s._reactInternals=e,mh(e,r,t,n),e=_h(null,e,r,!0,i,n)):(e.tag=0,we&&i&&xd(e),ht(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qa(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=bS(r),t=zt(r,t),s){case 0:e=yh(null,e,r,t,n);break e;case 1:e=Hm(null,e,r,t,n);break e;case 11:e=Bm(null,e,r,t,n);break e;case 14:e=$m(null,e,r,zt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zt(r,s),yh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zt(r,s),Hm(t,e,r,s,n);case 3:e:{if(xv(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,X_(t,e),wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ks(Error(j(423)),e),e=qm(t,e,r,n,s);break e}else if(r!==s){s=Ks(Error(j(424)),e),e=qm(t,e,r,n,s);break e}else for(St=rr(e.stateNode.containerInfo.firstChild),At=e,we=!0,$t=null,n=Y_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),r===s){e=Cn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return Z_(e),t===null&&dh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,ah(r,s)?o=null:i!==null&&ah(r,i)&&(e.flags|=32),Sv(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&dh(e),null;case 13:return Av(t,e,n);case 4:return bd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ws(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zt(r,s),Bm(t,e,r,s,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,pe(_l,r._currentValue),r._currentValue=o,i!==null)if(Yt(i.value,o)){if(i.children===s.children&&!vt.current){e=Cn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=In(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),fh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ht(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Os(e,n),s=Ot(s),r=r(s),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,s=zt(r,e.pendingProps),s=zt(r.type,s),$m(t,e,r,s,n);case 15:return Tv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zt(r,s),qa(t,e),e.tag=1,wt(r)?(t=!0,ml(e)):t=!1,Os(e,n),vv(e,r,s),mh(e,r,s,n),_h(null,e,r,!0,t,n);case 19:return Cv(t,e,n);case 22:return Iv(t,e,n)}throw Error(j(156,e.tag))};function $v(t,e){return g_(t,e)}function DS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,n,r){return new DS(t,e,n,r)}function Kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bS(t){if(typeof t=="function")return Kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===pd)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ka(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return Wr(n.children,s,i,e);case dd:o=8,s|=8;break;case Fc:return t=bt(12,n,e,s|2),t.elementType=Fc,t.lanes=i,t;case Uc:return t=bt(13,n,e,s),t.elementType=Uc,t.lanes=i,t;case zc:return t=bt(19,n,e,s),t.elementType=zc,t.lanes=i,t;case Zy:return iu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jy:o=10;break e;case Xy:o=9;break e;case fd:o=11;break e;case pd:o=14;break e;case Hn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=bt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Wr(t,e,n,r){return t=bt(7,t,r,e),t.lanes=n,t}function iu(t,e,n,r){return t=bt(22,t,r,e),t.elementType=Zy,t.lanes=n,t.stateNode={isHidden:!1},t}function Ec(t,e,n){return t=bt(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nc(0),this.expirationTimes=nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qd(t,e,n,r,s,i,o,l,u){return t=new VS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=bt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(i),t}function MS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hv(t){if(!t)return gr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(wt(n))return H_(t,n,e)}return e}function qv(t,e,n,r,s,i,o,l,u){return t=Qd(n,r,!0,t,s,i,o,l,u),t.context=Hv(null),n=t.current,r=dt(),s=or(n),i=In(r,s),i.callback=e??null,sr(n,i,s),t.current.lanes=s,Lo(t,s,r),Et(t,r),t}function ou(t,e,n,r){var s=e.current,i=dt(),o=or(s);return n=Hv(n),e.context===null?e.context=n:e.pendingContext=n,e=In(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sr(s,e,o),t!==null&&(Gt(t,s,o,i),Ba(t,s,o)),o}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yd(t,e){tg(t,e),(t=t.alternate)&&tg(t,e)}function OS(){return null}var Wv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jd(t){this._internalRoot=t}au.prototype.render=Jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));ou(t,e,null,null)};au.prototype.unmount=Jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){ou(null,t,null,null)}),e[xn]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=I_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&x_(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ng(){}function LS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=kl(o);i.call(h)}}var o=qv(e,r,t,0,null,!1,!1,"",ng);return t._reactRootContainer=o,t[xn]=o.current,yo(t.nodeType===8?t.parentNode:t),Zr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=kl(u);l.call(h)}}var u=Qd(t,0,!1,null,null,!1,!1,"",ng);return t._reactRootContainer=u,t[xn]=u.current,yo(t.nodeType===8?t.parentNode:t),Zr(function(){ou(e,u,n,r)}),u}function uu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=kl(o);l.call(u)}}ou(e,o,t,s)}else o=LS(n,e,t,s,r);return kl(o)}E_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zi(e.pendingLanes);n!==0&&(yd(e,n|1),Et(e,Re()),!(oe&6)&&(Qs=Re()+500,Cr()))}break;case 13:Zr(function(){var r=An(t,1);if(r!==null){var s=dt();Gt(r,t,1,s)}}),Yd(t,1)}};_d=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=dt();Gt(e,t,134217728,n)}Yd(t,134217728)}};T_=function(t){if(t.tag===13){var e=or(t),n=An(t,e);if(n!==null){var r=dt();Gt(n,t,e,r)}Yd(t,e)}};I_=function(){return ce};S_=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Jc=function(t,e,n){switch(e){case"input":if(Hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Zl(r);if(!s)throw Error(j(90));t_(r),Hc(r,s)}}}break;case"textarea":r_(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};c_=qd;h_=Zr;var jS={usingClientEntryPoint:!1,Events:[Fo,Ss,Zl,l_,u_,qd]},Oi={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FS={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p_(t),t===null?null:t.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||OS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{Ql=Ra.inject(FS),sn=Ra}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(j(200));return MS(t,e,null,n)};kt.createRoot=function(t,e){if(!Xd(t))throw Error(j(299));var n=!1,r="",s=Wv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Qd(t,1,!1,null,null,n,!1,r,s),t[xn]=e.current,yo(t.nodeType===8?t.parentNode:t),new Jd(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=p_(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return Zr(t)};kt.hydrate=function(t,e,n){if(!lu(e))throw Error(j(200));return uu(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Wv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qv(e,null,t,1,n??null,s,!1,i,o),t[xn]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new au(e)};kt.render=function(t,e,n){if(!lu(e))throw Error(j(200));return uu(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!lu(t))throw Error(j(40));return t._reactRootContainer?(Zr(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};kt.unstable_batchedUpdates=qd;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return uu(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(t){console.error(t)}}Gv(),Gy.exports=kt;var US=Gy.exports,Kv,rg=US;Kv=rg.createRoot,rg.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),le=(t,e)=>{const n=G.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...h},p)=>G.createElement("svg",{ref:p,...zS,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${BS(t)}`,l].join(" "),...h},[...e.map(([g,_])=>G.createElement(g,_)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=le("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=le("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=le("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=le("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=le("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=le("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=le("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=le("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=le("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=le("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=le("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=le("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=le("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=le("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=le("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=le("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=le("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=le("Package2",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=le("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=le("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=le("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=le("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=le("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=le("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=le("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=le("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=le("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),s1=()=>{};var ig={};/**
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
 */const i0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},i1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},o0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,p=i>>2,g=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(_=64)),r.push(n[p],n[g],n[_],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new o1;const _=i<<2|l>>4;if(r.push(_),h!==64){const k=l<<4&240|h>>2;if(r.push(k),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class o1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a1=function(t){const e=i0(t);return o0.encodeByteArray(e,!0)},Rl=function(t){return a1(t).replace(/\./g,"")},a0=function(t){try{return o0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function l1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const u1=()=>l1().__FIREBASE_DEFAULTS__,c1=()=>{if(typeof process>"u"||typeof ig>"u")return;const t=ig.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},h1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&a0(t[1]);return e&&JSON.parse(e)},hu=()=>{try{return s1()||u1()||c1()||h1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l0=t=>{var e,n;return(n=(e=hu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},d1=t=>{const e=l0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},u0=()=>{var t;return(t=hu())==null?void 0:t.config},c0=t=>{var e;return(e=hu())==null?void 0:e[`_${t}`]};/**
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
 */class f1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function p1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Rl(JSON.stringify(n)),Rl(JSON.stringify(o)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function g1(){var e;const t=(e=hu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function y1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function v1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w1(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function E1(){return!g1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T1(){try{return typeof indexedDB=="object"}catch{return!1}}function I1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const S1="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=S1,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zo.prototype.create)}}class zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?x1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,l,r)}}function x1(t,e){return t.replace(A1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const A1=/\{\$([^}]+)}/g;function C1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(og(i)&&og(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function og(t){return t!==null&&typeof t=="object"}/**
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
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function k1(t,e){const n=new R1(t,e);return n.subscribe.bind(n)}class R1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");N1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ic),s.error===void 0&&(s.error=Ic),s.complete===void 0&&(s.complete=Ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ic(){}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function h0(t){return(await fetch(t,{credentials:"include"})).ok}class ts{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ur="[DEFAULT]";/**
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
 */class P1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new f1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(b1(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:D1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D1(t){return t===Ur?void 0:t}function b1(t){return t.instantiationMode==="EAGER"}/**
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
 */class V1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new P1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const M1={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},O1=se.INFO,L1={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},j1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=L1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nf{constructor(e){this.name=e,this._logLevel=O1,this._logHandler=j1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?M1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const F1=(t,e)=>e.some(n=>t instanceof n);let ag,lg;function U1(){return ag||(ag=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z1(){return lg||(lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d0=new WeakMap,Nh=new WeakMap,f0=new WeakMap,Sc=new WeakMap,rf=new WeakMap;function B1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(lr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&d0.set(n,t)}).catch(()=>{}),rf.set(e,t),e}function $1(t){if(Nh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Nh.set(t,e)}let Ph={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||f0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function H1(t){Ph=t(Ph)}function q1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xc(this),e,...n);return f0.set(r,e.sort?e.sort():[e]),lr(r)}:z1().includes(t)?function(...e){return t.apply(xc(this),e),lr(d0.get(this))}:function(...e){return lr(t.apply(xc(this),e))}}function W1(t){return typeof t=="function"?q1(t):(t instanceof IDBTransaction&&$1(t),F1(t,U1())?new Proxy(t,Ph):t)}function lr(t){if(t instanceof IDBRequest)return B1(t);if(Sc.has(t))return Sc.get(t);const e=W1(t);return e!==t&&(Sc.set(t,e),rf.set(e,t)),e}const xc=t=>rf.get(t);function G1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(lr(o.result),u.oldVersion,u.newVersion,lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const K1=["get","getKey","getAll","getAllKeys","count"],Q1=["put","add","delete","clear"],Ac=new Map;function ug(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Q1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||K1.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Ac.set(e,i),i}H1(t=>({...t,get:(e,n,r)=>ug(e,n)||t.get(e,n,r),has:(e,n)=>!!ug(e,n)||t.has(e,n)}));/**
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
 */class Y1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dh="@firebase/app",cg="0.14.12";/**
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
 */const kn=new nf("@firebase/app"),X1="@firebase/app-compat",Z1="@firebase/analytics-compat",ex="@firebase/analytics",tx="@firebase/app-check-compat",nx="@firebase/app-check",rx="@firebase/auth",sx="@firebase/auth-compat",ix="@firebase/database",ox="@firebase/data-connect",ax="@firebase/database-compat",lx="@firebase/functions",ux="@firebase/functions-compat",cx="@firebase/installations",hx="@firebase/installations-compat",dx="@firebase/messaging",fx="@firebase/messaging-compat",px="@firebase/performance",mx="@firebase/performance-compat",gx="@firebase/remote-config",yx="@firebase/remote-config-compat",_x="@firebase/storage",vx="@firebase/storage-compat",wx="@firebase/firestore",Ex="@firebase/ai",Tx="@firebase/firestore-compat",Ix="firebase",Sx="12.13.0";/**
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
 */const bh="[DEFAULT]",xx={[Dh]:"fire-core",[X1]:"fire-core-compat",[ex]:"fire-analytics",[Z1]:"fire-analytics-compat",[nx]:"fire-app-check",[tx]:"fire-app-check-compat",[rx]:"fire-auth",[sx]:"fire-auth-compat",[ix]:"fire-rtdb",[ox]:"fire-data-connect",[ax]:"fire-rtdb-compat",[lx]:"fire-fn",[ux]:"fire-fn-compat",[cx]:"fire-iid",[hx]:"fire-iid-compat",[dx]:"fire-fcm",[fx]:"fire-fcm-compat",[px]:"fire-perf",[mx]:"fire-perf-compat",[gx]:"fire-rc",[yx]:"fire-rc-compat",[_x]:"fire-gcs",[vx]:"fire-gcs-compat",[wx]:"fire-fst",[Tx]:"fire-fst-compat",[Ex]:"fire-vertex","fire-js":"fire-js",[Ix]:"fire-js-all"};/**
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
 */const Nl=new Map,Ax=new Map,Vh=new Map;function hg(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Js(t){const e=t.name;if(Vh.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Vh.set(e,t);for(const n of Nl.values())hg(n,t);for(const n of Ax.values())hg(n,t);return!0}function sf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ht(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Cx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new zo("app","Firebase",Cx);/**
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
 */class kx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const oi=Sx;function p0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:bh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(n||(n=u0()),!n)throw ur.create("no-options");const i=Nl.get(s);if(i){if(es(n,i.options)&&es(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new V1(s);for(const u of Vh.values())o.addComponent(u);const l=new kx(n,r,o);return Nl.set(s,l),l}function m0(t=bh){const e=Nl.get(t);if(!e&&t===bh&&u0())return p0();if(!e)throw ur.create("no-app",{appName:t});return e}function cr(t,e,n){let r=xx[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(o.join(" "));return}Js(new ts(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Rx="firebase-heartbeat-database",Nx=1,Ao="firebase-heartbeat-store";let Cc=null;function g0(){return Cc||(Cc=G1(Rx,Nx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Cc}async function Px(t){try{const n=(await g0()).transaction(Ao),r=await n.objectStore(Ao).get(y0(t));return await n.done,r}catch(e){if(e instanceof Vn)kn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function dg(t,e){try{const r=(await g0()).transaction(Ao,"readwrite");await r.objectStore(Ao).put(e,y0(t)),await r.done}catch(n){if(n instanceof Vn)kn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function y0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Dx=1024,bx=30;class Vx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ox(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>bx){const o=Lx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fg(),{heartbeatsToSend:r,unsentEntries:s}=Mx(this._heartbeatsCache.heartbeats),i=Rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return kn.warn(n),""}}}function fg(){return new Date().toISOString().substring(0,10)}function Mx(t,e=Dx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ox{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T1()?I1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Px(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return dg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return dg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pg(t){return Rl(JSON.stringify({version:2,heartbeats:t})).length}function Lx(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function jx(t){Js(new ts("platform-logger",e=>new Y1(e),"PRIVATE")),Js(new ts("heartbeat",e=>new Vx(e),"PRIVATE")),cr(Dh,cg,t),cr(Dh,cg,"esm2020"),cr("fire-js","")}jx("");var Fx="firebase",Ux="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr(Fx,Ux,"app");var mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,_0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.F=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.D=function(S,x,N){for(var I=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)I[Me-2]=arguments[Me];return m.prototype[x].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,v){v||(v=0);const S=Array(16);if(typeof m=="string")for(var x=0;x<16;++x)S[x]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(x=0;x<16;++x)S[x]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],x=w.g[2];let N=w.g[3],I;I=m+(N^v&(x^N))+S[0]+3614090360&4294967295,m=v+(I<<7&4294967295|I>>>25),I=N+(x^m&(v^x))+S[1]+3905402710&4294967295,N=m+(I<<12&4294967295|I>>>20),I=x+(v^N&(m^v))+S[2]+606105819&4294967295,x=N+(I<<17&4294967295|I>>>15),I=v+(m^x&(N^m))+S[3]+3250441966&4294967295,v=x+(I<<22&4294967295|I>>>10),I=m+(N^v&(x^N))+S[4]+4118548399&4294967295,m=v+(I<<7&4294967295|I>>>25),I=N+(x^m&(v^x))+S[5]+1200080426&4294967295,N=m+(I<<12&4294967295|I>>>20),I=x+(v^N&(m^v))+S[6]+2821735955&4294967295,x=N+(I<<17&4294967295|I>>>15),I=v+(m^x&(N^m))+S[7]+4249261313&4294967295,v=x+(I<<22&4294967295|I>>>10),I=m+(N^v&(x^N))+S[8]+1770035416&4294967295,m=v+(I<<7&4294967295|I>>>25),I=N+(x^m&(v^x))+S[9]+2336552879&4294967295,N=m+(I<<12&4294967295|I>>>20),I=x+(v^N&(m^v))+S[10]+4294925233&4294967295,x=N+(I<<17&4294967295|I>>>15),I=v+(m^x&(N^m))+S[11]+2304563134&4294967295,v=x+(I<<22&4294967295|I>>>10),I=m+(N^v&(x^N))+S[12]+1804603682&4294967295,m=v+(I<<7&4294967295|I>>>25),I=N+(x^m&(v^x))+S[13]+4254626195&4294967295,N=m+(I<<12&4294967295|I>>>20),I=x+(v^N&(m^v))+S[14]+2792965006&4294967295,x=N+(I<<17&4294967295|I>>>15),I=v+(m^x&(N^m))+S[15]+1236535329&4294967295,v=x+(I<<22&4294967295|I>>>10),I=m+(x^N&(v^x))+S[1]+4129170786&4294967295,m=v+(I<<5&4294967295|I>>>27),I=N+(v^x&(m^v))+S[6]+3225465664&4294967295,N=m+(I<<9&4294967295|I>>>23),I=x+(m^v&(N^m))+S[11]+643717713&4294967295,x=N+(I<<14&4294967295|I>>>18),I=v+(N^m&(x^N))+S[0]+3921069994&4294967295,v=x+(I<<20&4294967295|I>>>12),I=m+(x^N&(v^x))+S[5]+3593408605&4294967295,m=v+(I<<5&4294967295|I>>>27),I=N+(v^x&(m^v))+S[10]+38016083&4294967295,N=m+(I<<9&4294967295|I>>>23),I=x+(m^v&(N^m))+S[15]+3634488961&4294967295,x=N+(I<<14&4294967295|I>>>18),I=v+(N^m&(x^N))+S[4]+3889429448&4294967295,v=x+(I<<20&4294967295|I>>>12),I=m+(x^N&(v^x))+S[9]+568446438&4294967295,m=v+(I<<5&4294967295|I>>>27),I=N+(v^x&(m^v))+S[14]+3275163606&4294967295,N=m+(I<<9&4294967295|I>>>23),I=x+(m^v&(N^m))+S[3]+4107603335&4294967295,x=N+(I<<14&4294967295|I>>>18),I=v+(N^m&(x^N))+S[8]+1163531501&4294967295,v=x+(I<<20&4294967295|I>>>12),I=m+(x^N&(v^x))+S[13]+2850285829&4294967295,m=v+(I<<5&4294967295|I>>>27),I=N+(v^x&(m^v))+S[2]+4243563512&4294967295,N=m+(I<<9&4294967295|I>>>23),I=x+(m^v&(N^m))+S[7]+1735328473&4294967295,x=N+(I<<14&4294967295|I>>>18),I=v+(N^m&(x^N))+S[12]+2368359562&4294967295,v=x+(I<<20&4294967295|I>>>12),I=m+(v^x^N)+S[5]+4294588738&4294967295,m=v+(I<<4&4294967295|I>>>28),I=N+(m^v^x)+S[8]+2272392833&4294967295,N=m+(I<<11&4294967295|I>>>21),I=x+(N^m^v)+S[11]+1839030562&4294967295,x=N+(I<<16&4294967295|I>>>16),I=v+(x^N^m)+S[14]+4259657740&4294967295,v=x+(I<<23&4294967295|I>>>9),I=m+(v^x^N)+S[1]+2763975236&4294967295,m=v+(I<<4&4294967295|I>>>28),I=N+(m^v^x)+S[4]+1272893353&4294967295,N=m+(I<<11&4294967295|I>>>21),I=x+(N^m^v)+S[7]+4139469664&4294967295,x=N+(I<<16&4294967295|I>>>16),I=v+(x^N^m)+S[10]+3200236656&4294967295,v=x+(I<<23&4294967295|I>>>9),I=m+(v^x^N)+S[13]+681279174&4294967295,m=v+(I<<4&4294967295|I>>>28),I=N+(m^v^x)+S[0]+3936430074&4294967295,N=m+(I<<11&4294967295|I>>>21),I=x+(N^m^v)+S[3]+3572445317&4294967295,x=N+(I<<16&4294967295|I>>>16),I=v+(x^N^m)+S[6]+76029189&4294967295,v=x+(I<<23&4294967295|I>>>9),I=m+(v^x^N)+S[9]+3654602809&4294967295,m=v+(I<<4&4294967295|I>>>28),I=N+(m^v^x)+S[12]+3873151461&4294967295,N=m+(I<<11&4294967295|I>>>21),I=x+(N^m^v)+S[15]+530742520&4294967295,x=N+(I<<16&4294967295|I>>>16),I=v+(x^N^m)+S[2]+3299628645&4294967295,v=x+(I<<23&4294967295|I>>>9),I=m+(x^(v|~N))+S[0]+4096336452&4294967295,m=v+(I<<6&4294967295|I>>>26),I=N+(v^(m|~x))+S[7]+1126891415&4294967295,N=m+(I<<10&4294967295|I>>>22),I=x+(m^(N|~v))+S[14]+2878612391&4294967295,x=N+(I<<15&4294967295|I>>>17),I=v+(N^(x|~m))+S[5]+4237533241&4294967295,v=x+(I<<21&4294967295|I>>>11),I=m+(x^(v|~N))+S[12]+1700485571&4294967295,m=v+(I<<6&4294967295|I>>>26),I=N+(v^(m|~x))+S[3]+2399980690&4294967295,N=m+(I<<10&4294967295|I>>>22),I=x+(m^(N|~v))+S[10]+4293915773&4294967295,x=N+(I<<15&4294967295|I>>>17),I=v+(N^(x|~m))+S[1]+2240044497&4294967295,v=x+(I<<21&4294967295|I>>>11),I=m+(x^(v|~N))+S[8]+1873313359&4294967295,m=v+(I<<6&4294967295|I>>>26),I=N+(v^(m|~x))+S[15]+4264355552&4294967295,N=m+(I<<10&4294967295|I>>>22),I=x+(m^(N|~v))+S[6]+2734768916&4294967295,x=N+(I<<15&4294967295|I>>>17),I=v+(N^(x|~m))+S[13]+1309151649&4294967295,v=x+(I<<21&4294967295|I>>>11),I=m+(x^(v|~N))+S[4]+4149444226&4294967295,m=v+(I<<6&4294967295|I>>>26),I=N+(v^(m|~x))+S[11]+3174756917&4294967295,N=m+(I<<10&4294967295|I>>>22),I=x+(m^(N|~v))+S[2]+718787259&4294967295,x=N+(I<<15&4294967295|I>>>17),I=v+(N^(x|~m))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(x+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+x&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.v=function(w,m){m===void 0&&(m=w.length);const v=m-this.blockSize,S=this.C;let x=this.h,N=0;for(;N<m;){if(x==0)for(;N<=v;)s(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<m;)if(S[x++]=w.charCodeAt(N++),x==this.blockSize){s(this,S),x=0;break}}else for(;N<m;)if(S[x++]=w[N++],x==this.blockSize){s(this,S),x=0;break}}this.h=x,this.o+=m},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;m=this.o*8;for(var v=w.length-8;v<w.length;++v)w[v]=m&255,m/=256;for(this.v(w),w=Array(16),m=0,v=0;v<4;++v)for(let S=0;S<32;S+=8)w[m++]=this.g[v]>>>S&255;return w};function i(w,m){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function o(w,m){this.h=m;const v=[];let S=!0;for(let x=w.length-1;x>=0;x--){const N=w[x]|0;S&&N==m||(v[x]=N,S=!1)}this.g=v}var l={};function u(w){return-128<=w&&w<128?i(w,function(m){return new o([m|0],m<0?-1:0)}):new o([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(w<0)return b(h(-w));const m=[];let v=1;for(let S=0;w>=v;S++)m[S]=w/v|0,v*=4294967296;return new o(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return b(p(w.substring(1),m));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(m,8));let S=g;for(let N=0;N<w.length;N+=8){var x=Math.min(8,w.length-N);const I=parseInt(w.substring(N,N+x),m);x<8?(x=h(Math.pow(m,x)),S=S.j(x).add(h(I))):(S=S.j(v),S=S.add(h(I)))}return S}var g=u(0),_=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-b(this).m();let w=0,m=1;for(let v=0;v<this.g.length;v++){const S=this.i(v);w+=(S>=0?S:4294967296+S)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(A(this))return"-"+b(this).toString(w);const m=h(Math.pow(w,6));var v=this;let S="";for(;;){const x=R(v,m).g;v=E(v,x.j(m));let N=((v.g.length>0?v.g[0]:v.h)>>>0).toString(w);if(v=x,P(v))return N+S;for(;N.length<6;)N="0"+N;S=N+S}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=E(this,w),A(w)?-1:P(w)?0:1};function b(w){const m=w.g.length,v=[];for(let S=0;S<m;S++)v[S]=~w.g[S];return new o(v,~w.h).add(_)}t.abs=function(){return A(this)?b(this):this},t.add=function(w){const m=Math.max(this.g.length,w.g.length),v=[];let S=0;for(let x=0;x<=m;x++){let N=S+(this.i(x)&65535)+(w.i(x)&65535),I=(N>>>16)+(this.i(x)>>>16)+(w.i(x)>>>16);S=I>>>16,N&=65535,I&=65535,v[x]=I<<16|N}return new o(v,v[v.length-1]&-2147483648?-1:0)};function E(w,m){return w.add(b(m))}t.j=function(w){if(P(this)||P(w))return g;if(A(this))return A(w)?b(this).j(b(w)):b(b(this).j(w));if(A(w))return b(this.j(b(w)));if(this.l(k)<0&&w.l(k)<0)return h(this.m()*w.m());const m=this.g.length+w.g.length,v=[];for(var S=0;S<2*m;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(let x=0;x<w.g.length;x++){const N=this.i(S)>>>16,I=this.i(S)&65535,Me=w.i(x)>>>16,jt=w.i(x)&65535;v[2*S+2*x]+=I*jt,T(v,2*S+2*x),v[2*S+2*x+1]+=N*jt,T(v,2*S+2*x+1),v[2*S+2*x+1]+=I*Me,T(v,2*S+2*x+1),v[2*S+2*x+2]+=N*Me,T(v,2*S+2*x+2)}for(w=0;w<m;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=m;w<2*m;w++)v[w]=0;return new o(v,0)};function T(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function C(w,m){this.g=w,this.h=m}function R(w,m){if(P(m))throw Error("division by zero");if(P(w))return new C(g,g);if(A(w))return m=R(b(w),m),new C(b(m.g),b(m.h));if(A(m))return m=R(w,b(m)),new C(b(m.g),m.h);if(w.g.length>30){if(A(w)||A(m))throw Error("slowDivide_ only works with positive integers.");for(var v=_,S=m;S.l(w)<=0;)v=L(v),S=L(S);var x=F(v,1),N=F(S,1);for(S=F(S,2),v=F(v,2);!P(S);){var I=N.add(S);I.l(w)<=0&&(x=x.add(v),N=I),S=F(S,1),v=F(v,1)}return m=E(w,x.j(m)),new C(x,m)}for(x=g;w.l(m)>=0;){for(v=Math.max(1,Math.floor(w.m()/m.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),N=h(v),I=N.j(m);A(I)||I.l(w)>0;)v-=S,N=h(v),I=N.j(m);P(N)&&(N=_),x=x.add(N),w=E(w,I)}return new C(x,w)}t.B=function(w){return R(this,w).h},t.and=function(w){const m=Math.max(this.g.length,w.g.length),v=[];for(let S=0;S<m;S++)v[S]=this.i(S)&w.i(S);return new o(v,this.h&w.h)},t.or=function(w){const m=Math.max(this.g.length,w.g.length),v=[];for(let S=0;S<m;S++)v[S]=this.i(S)|w.i(S);return new o(v,this.h|w.h)},t.xor=function(w){const m=Math.max(this.g.length,w.g.length),v=[];for(let S=0;S<m;S++)v[S]=this.i(S)^w.i(S);return new o(v,this.h^w.h)};function L(w){const m=w.g.length+1,v=[];for(let S=0;S<m;S++)v[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(v,w.h)}function F(w,m){const v=m>>5;m%=32;const S=w.g.length-v,x=[];for(let N=0;N<S;N++)x[N]=m>0?w.i(N+v)>>>m|w.i(N+v+1)<<32-m:w.i(N+v);return new o(x,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,_0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,hr=o}).apply(typeof mg<"u"?mg:typeof self<"u"?self:typeof window<"u"?window:{});var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v0,$i,w0,Qa,Mh,E0,T0,I0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Na=="object"&&Na];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var D=a[y];if(!(D in d))break e;d=d[D]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],y;for(y in c)Object.prototype.hasOwnProperty.call(c,y)&&d.push([y,c[y]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function p(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(y,D,V){for(var U=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)U[ee-2]=arguments[ee];return c.prototype[D].apply(y,U)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const c=a.length;if(c>0){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function P(a,c){for(let y=1;y<arguments.length;y++){const D=arguments[y];var d=typeof D;if(d=d!="object"?d:D?Array.isArray(D)?"array":d:"null",d=="array"||d=="object"&&typeof D.length=="number"){d=a.length||0;const V=D.length||0;a.length=d+V;for(let U=0;U<V;U++)a[d+U]=D[U]}else a.push(D)}}class A{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function b(a){o.setTimeout(()=>{throw a},0)}function E(){var a=w;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class T{constructor(){this.h=this.g=null}add(c,d){const y=C.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var C=new A(()=>new R,a=>a.reset());class R{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let L,F=!1,w=new T,m=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(v)}};function v(){for(var a;a=E();){try{a.h.call(a.g)}catch(d){b(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}F=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Me(a,c){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}g(Me,x),Me.prototype.init=function(a,c){const d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Me.Z.h.call(this)},Me.prototype.h=function(){Me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var jt="closure_listenable_"+(Math.random()*1e6|0),Pr=0;function Dr(a,c,d,y,D){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=D,this.key=++Pr,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function Z(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function de(a){const c={};for(const d in a)c[d]=a[d];return c}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ae(a,c){let d,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(d in y)a[d]=y[d];for(let V=0;V<W.length;V++)d=W[V],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,c,d,y,D){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const U=Ft(a,c,y,D);return U>-1?(c=a[U],d||(c.fa=!1)):(c=new Dr(c,this.src,V,!!y,D),c.fa=d,a.push(c)),c};function qe(a,c){const d=c.type;if(d in a.g){var y=a.g[d],D=Array.prototype.indexOf.call(y,c,void 0),V;(V=D>=0)&&Array.prototype.splice.call(y,D,1),V&&(z(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ft(a,c,d,y){for(let D=0;D<a.length;++D){const V=a[D];if(!V.da&&V.listener==c&&V.capture==!!d&&V.ha==y)return D}return-1}var Mn="closure_lm_"+(Math.random()*1e6|0),Nu={};function Jf(a,c,d,y,D){if(Array.isArray(c)){for(let V=0;V<c.length;V++)Jf(a,c[V],d,y,D);return null}return d=ep(d),a&&a[jt]?a.J(c,d,l(y)?!!y.capture:!1,D):jE(a,c,d,!1,y,D)}function jE(a,c,d,y,D,V){if(!c)throw Error("Invalid event type");const U=l(D)?!!D.capture:!!D;let ee=Du(a);if(ee||(a[Mn]=ee=new Te(a)),d=ee.add(c,d,y,U,V),d.proxy)return d;if(y=FE(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)N||(D=U),D===void 0&&(D=!1),a.addEventListener(c.toString(),y,D);else if(a.attachEvent)a.attachEvent(Zf(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function FE(){function a(d){return c.call(a.src,a.listener,d)}const c=UE;return a}function Xf(a,c,d,y,D){if(Array.isArray(c))for(var V=0;V<c.length;V++)Xf(a,c[V],d,y,D);else y=l(y)?!!y.capture:!!y,d=ep(d),a&&a[jt]?(a=a.i,V=String(c).toString(),V in a.g&&(c=a.g[V],d=Ft(c,d,y,D),d>-1&&(z(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[V],a.h--)))):a&&(a=Du(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Ft(c,d,y,D)),(d=a>-1?c[a]:null)&&Pu(d))}function Pu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[jt])qe(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(Zf(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Du(c))?(qe(d,a),d.h==0&&(d.src=null,c[Mn]=null)):z(a)}}}function Zf(a){return a in Nu?Nu[a]:Nu[a]="on"+a}function UE(a,c){if(a.da)a=!0;else{c=new Me(c,this);const d=a.listener,y=a.ha||a.src;a.fa&&Pu(a),a=d.call(y,c)}return a}function Du(a){return a=a[Mn],a instanceof Te?a:null}var bu="__closure_events_fn_"+(Math.random()*1e9>>>0);function ep(a){return typeof a=="function"?a:(a[bu]||(a[bu]=function(c){return a.handleEvent(c)}),a[bu])}function Ze(){S.call(this),this.i=new Te(this),this.M=this,this.G=null}g(Ze,S),Ze.prototype[jt]=!0,Ze.prototype.removeEventListener=function(a,c,d,y){Xf(this,a,c,d,y)};function ut(a,c){var d,y=a.G;if(y)for(d=[];y;y=y.G)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new x(c,a);else if(c instanceof x)c.target=c.target||a;else{var D=c;c=new x(y,a),ae(c,D)}D=!0;let V,U;if(d)for(U=d.length-1;U>=0;U--)V=c.g=d[U],D=ta(V,y,!0,c)&&D;if(V=c.g=a,D=ta(V,y,!0,c)&&D,D=ta(V,y,!1,c)&&D,d)for(U=0;U<d.length;U++)V=c.g=d[U],D=ta(V,y,!1,c)&&D}Ze.prototype.N=function(){if(Ze.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let y=0;y<d.length;y++)z(d[y]);delete a.g[c],a.h--}}this.G=null},Ze.prototype.J=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},Ze.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function ta(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let D=!0;for(let V=0;V<c.length;++V){const U=c[V];if(U&&!U.da&&U.capture==d){const ee=U.listener,Oe=U.ha||U.src;U.fa&&qe(a.i,U),D=ee.call(Oe,y)!==!1&&D}}return D&&!y.defaultPrevented}function zE(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function tp(a){a.g=zE(()=>{a.g=null,a.i&&(a.i=!1,tp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class BE extends S{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:tp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fi(a){S.call(this),this.h=a,this.g={}}g(fi,S);var np=[];function rp(a){Q(a.g,function(c,d){this.g.hasOwnProperty(d)&&Pu(c)},a),a.g={}}fi.prototype.N=function(){fi.Z.N.call(this),rp(this)},fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vu=o.JSON.stringify,$E=o.JSON.parse,HE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function sp(){}function ip(){}var pi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Mu(){x.call(this,"d")}g(Mu,x);function Ou(){x.call(this,"c")}g(Ou,x);var br={},op=null;function na(){return op=op||new Ze}br.Ia="serverreachability";function ap(a){x.call(this,br.Ia,a)}g(ap,x);function mi(a){const c=na();ut(c,new ap(c))}br.STAT_EVENT="statevent";function lp(a,c){x.call(this,br.STAT_EVENT,a),this.stat=c}g(lp,x);function ct(a){const c=na();ut(c,new lp(c,a))}br.Ja="timingevent";function up(a,c){x.call(this,br.Ja,a),this.size=c}g(up,x);function gi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function yi(){this.g=!0}yi.prototype.ua=function(){this.g=!1};function qE(a,c,d,y,D,V){a.info(function(){if(a.g)if(V){var U="",ee=V.split("&");for(let he=0;he<ee.length;he++){var Oe=ee[he].split("=");if(Oe.length>1){const Ue=Oe[0];Oe=Oe[1];const Zt=Ue.split("_");U=Zt.length>=2&&Zt[1]=="type"?U+(Ue+"="+Oe+"&"):U+(Ue+"=redacted&")}}}else U=null;else U=V;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+c+`
`+d+`
`+U})}function WE(a,c,d,y,D,V,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+c+`
`+d+`
`+V+" "+U})}function cs(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+KE(a,d)+(y?" "+y:"")})}function GE(a,c){a.info(function(){return"TIMEOUT: "+c})}yi.prototype.info=function(){};function KE(a,c){if(!a.g)return c;if(!c)return null;try{const V=JSON.parse(c);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var y=d[1];if(Array.isArray(y)&&!(y.length<1)){var D=y[0];if(D!="noop"&&D!="stop"&&D!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return Vu(V)}catch{return c}}var ra={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},cp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hp;function Lu(){}g(Lu,sp),Lu.prototype.g=function(){return new XMLHttpRequest},hp=new Lu;function _i(a){return encodeURIComponent(String(a))}function QE(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function On(a,c,d,y){this.j=a,this.i=c,this.l=d,this.S=y||1,this.V=new fi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dp}function dp(){this.i=null,this.g="",this.h=!1}var fp={},ju={};function Fu(a,c,d){a.M=1,a.A=ia(Xt(c)),a.u=d,a.R=!0,pp(a,null)}function pp(a,c){a.F=Date.now(),sa(a),a.B=Xt(a.A);var d=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Cp(d.i,"t",y),a.C=0,d=a.j.L,a.h=new dp,a.g=qp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new BE(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,y=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(np[0]=D.toString()),D=np);for(let V=0;V<D.length;V++){const U=Jf(d,D[V],y||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.J?de(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),mi(),qE(a.i,a.v,a.B,a.l,a.S,a.u)}On.prototype.ba=function(a){a=a.target;const c=this.O;c&&Fn(a)==3?c.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Fn(this.g),Oe=this.g.ya(),he=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Vp(this.g)))){this.K||ee!=4||Oe==7||(Oe==8||he<=0?mi(3):mi(2)),Uu(this);var c=this.g.ca();this.X=c;var d=YE(this);if(this.o=c==200,WE(this.i,this.v,this.B,this.l,this.S,ee,c),this.o){if(this.U&&!this.L){t:{if(this.g){var y,D=this.g;if((y=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(y)){var V=y;break t}}V=null}if(a=V)cs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zu(this,a);else{this.o=!1,this.m=3,ct(12),Vr(this),vi(this);break e}}if(this.R){a=!0;let Ue;for(;!this.K&&this.C<d.length;)if(Ue=JE(this,d),Ue==ju){ee==4&&(this.m=4,ct(14),a=!1),cs(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==fp){this.m=4,ct(15),cs(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else cs(this.i,this.l,Ue,null),zu(this,Ue);if(mp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,ct(16),a=!1),this.o=this.o&&a,!a)cs(this.i,this.l,d,"[Invalid Chunked Response]"),Vr(this),vi(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Qu(U),U.P=!0,ct(11))}}else cs(this.i,this.l,d,null),zu(this,d);ee==4&&Vr(this),this.o&&!this.K&&(ee==4?zp(this.j,this):(this.o=!1,sa(this)))}else hT(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,ct(12)):(this.m=0,ct(13)),Vr(this),vi(this)}}}catch{}finally{}};function YE(a){if(!mp(a))return a.g.la();const c=Vp(a.g);if(c==="")return"";let d="";const y=c.length,D=Fn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Vr(a),vi(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<y;V++)a.h.h=!0,d+=a.h.i.decode(c[V],{stream:!(D&&V==y-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function mp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function JE(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?ju:(d=Number(c.substring(d,y)),isNaN(d)?fp:(y+=1,y+d>c.length?ju:(c=c.slice(y,y+d),a.C=y+d,c)))}On.prototype.cancel=function(){this.K=!0,Vr(this)};function sa(a){a.T=Date.now()+a.H,gp(a,a.H)}function gp(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=gi(h(a.aa,a),c)}function Uu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}On.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(GE(this.i,this.B),this.M!=2&&(mi(),ct(17)),Vr(this),this.m=2,vi(this)):gp(this,this.T-a)};function vi(a){a.j.I==0||a.K||zp(a.j,a)}function Vr(a){Uu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,rp(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function zu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Bu(d.h,a))){if(!a.L&&Bu(d.h,a)&&d.I==3){try{var y=d.Ba.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ca(d),la(d);else break e;Ku(d),ct(18)}}else d.xa=D[1],0<d.xa-d.K&&D[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=gi(h(d.Va,d),6e3));vp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Or(d,11)}else if((a.L||d.g==a)&&ca(d),!I(c))for(D=d.Ba.g.parse(c),c=0;c<D.length;c++){let he=D[c];const Ue=he[0];if(!(Ue<=d.K))if(d.K=Ue,he=he[1],d.I==2)if(he[0]=="c"){d.M=he[1],d.ba=he[2];const Zt=he[3];Zt!=null&&(d.ka=Zt,d.j.info("VER="+d.ka));const Lr=he[4];Lr!=null&&(d.za=Lr,d.j.info("SVER="+d.za));const Un=he[5];Un!=null&&typeof Un=="number"&&Un>0&&(y=1.5*Un,d.O=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const zn=a.g;if(zn){const da=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(da){var V=y.h;V.g||da.indexOf("spdy")==-1&&da.indexOf("quic")==-1&&da.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&($u(V,V.h),V.h=null))}if(y.G){const Yu=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Yu&&(y.wa=Yu,me(y.J,y.G,Yu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),y=d;var U=a;if(y.na=Hp(y,y.L?y.ba:null,y.W),U.L){wp(y.h,U);var ee=U,Oe=y.O;Oe&&(ee.H=Oe),ee.D&&(Uu(ee),sa(ee)),y.g=U}else Fp(y);d.i.length>0&&ua(d)}else he[0]!="stop"&&he[0]!="close"||Or(d,7);else d.I==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Or(d,7):Gu(d):he[0]!="noop"&&d.l&&d.l.qa(he),d.A=0)}}mi(4)}catch{}}var XE=class{constructor(a,c){this.g=a,this.map=c}};function yp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _p(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vp(a){return a.h?1:a.g?a.g.size:0}function Bu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function $u(a,c){a.g?a.g.add(c):a.h=c}function wp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}yp.prototype.cancel=function(){if(this.i=Ep(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ep(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return k(a.i)}var Tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const y=a[d].indexOf("=");let D,V=null;y>=0?(D=a[d].substring(0,y),V=a[d].substring(y+1)):D=a[d],c(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Ln(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Ln?(this.l=a.l,wi(this,a.j),this.o=a.o,this.g=a.g,Ei(this,a.u),this.h=a.h,Hu(this,kp(a.i)),this.m=a.m):a&&(c=String(a).match(Tp))?(this.l=!1,wi(this,c[1]||"",!0),this.o=Ti(c[2]||""),this.g=Ti(c[3]||"",!0),Ei(this,c[4]),this.h=Ti(c[5]||"",!0),Hu(this,c[6]||"",!0),this.m=Ti(c[7]||"")):(this.l=!1,this.i=new Si(null,this.l))}Ln.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(Ii(c,Ip,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ii(c,Ip,!0),"@"),a.push(_i(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ii(d,d.charAt(0)=="/"?nT:tT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ii(d,sT)),a.join("")},Ln.prototype.resolve=function(a){const c=Xt(this);let d=!!a.j;d?wi(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var y=a.h;if(d)Ei(c,a.u);else if(d=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var D=c.h.lastIndexOf("/");D!=-1&&(y=c.h.slice(0,D+1)+y)}if(D=y,D==".."||D==".")y="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){y=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let U=0;U<D.length;){const ee=D[U++];ee=="."?y&&U==D.length&&V.push(""):ee==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),y&&U==D.length&&V.push("")):(V.push(ee),y=!0)}y=V.join("/")}else y=D}return d?c.h=y:d=a.i.toString()!=="",d?Hu(c,kp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Xt(a){return new Ln(a)}function wi(a,c,d){a.j=d?Ti(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ei(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Hu(a,c,d){c instanceof Si?(a.i=c,iT(a.i,a.l)):(d||(c=Ii(c,rT)),a.i=new Si(c,a.l))}function me(a,c,d){a.i.set(c,d)}function ia(a){return me(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ti(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ii(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,eT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function eT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ip=/[#\/\?@]/g,tT=/[#\?:]/g,nT=/[#\?]/g,rT=/[#\?@]/g,sT=/#/g;function Si(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Mr(a){a.g||(a.g=new Map,a.h=0,a.i&&ZE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Si.prototype,t.add=function(a,c){Mr(this),this.i=null,a=hs(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Sp(a,c){Mr(a),c=hs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function xp(a,c){return Mr(a),c=hs(a,c),a.g.has(c)}t.forEach=function(a,c){Mr(this),this.g.forEach(function(d,y){d.forEach(function(D){a.call(c,D,y,this)},this)},this)};function Ap(a,c){Mr(a);let d=[];if(typeof c=="string")xp(a,c)&&(d=d.concat(a.g.get(hs(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Mr(this),this.i=null,a=hs(this,a),xp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=Ap(this,a),a.length>0?String(a[0]):c):c};function Cp(a,c,d){Sp(a,c),d.length>0&&(a.i=null,a.g.set(hs(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let y=0;y<c.length;y++){var d=c[y];const D=_i(d);d=Ap(this,d);for(let V=0;V<d.length;V++){let U=D;d[V]!==""&&(U+="="+_i(d[V])),a.push(U)}}return this.i=a.join("&")};function kp(a){const c=new Si;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function hs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function iT(a,c){c&&!a.j&&(Mr(a),a.i=null,a.g.forEach(function(d,y){const D=y.toLowerCase();y!=D&&(Sp(this,y),Cp(this,D,d))},a)),a.j=c}function oT(a,c){const d=new yi;if(o.Image){const y=new Image;y.onload=p(jn,d,"TestLoadImage: loaded",!0,c,y),y.onerror=p(jn,d,"TestLoadImage: error",!1,c,y),y.onabort=p(jn,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=p(jn,d,"TestLoadImage: timeout",!1,c,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function aT(a,c){const d=new yi,y=new AbortController,D=setTimeout(()=>{y.abort(),jn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(D),V.ok?jn(d,"TestPingServer: ok",!0,c):jn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(D),jn(d,"TestPingServer: error",!1,c)})}function jn(a,c,d,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(d)}catch{}}function lT(){this.g=new HE}function qu(a){this.i=a.Sb||null,this.h=a.ab||!1}g(qu,sp),qu.prototype.g=function(){return new oa(this.i,this.h)};function oa(a,c){Ze.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(oa,Ze),t=oa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Ai(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?xi(this):Ai(this),this.readyState==3&&Rp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,xi(this))},t.Na=function(a){this.g&&(this.response=a,xi(this))},t.ga=function(){this.g&&xi(this)};function xi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ai(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ai(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Np(a){let c="";return Q(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function Wu(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Np(d),typeof a=="string"?d!=null&&_i(d):me(a,c,d))}function Ae(a){Ze.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Ae,Ze);var uT=/^https?$/i,cT=["POST","PUT"];t=Ae.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hp.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(V){Pp(this,V);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)d.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())d.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(cT,c,void 0)>=0)||y||D||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,U]of d)this.g.setRequestHeader(V,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Pp(this,V)}};function Pp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Dp(a),aa(a)}function Dp(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ut(this,"complete"),ut(this,"abort"),aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),aa(this,!0)),Ae.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?bp(this):this.Xa())},t.Xa=function(){bp(this)};function bp(a){if(a.h&&typeof i<"u"){if(a.v&&Fn(a)==4)setTimeout(a.Ca.bind(a),0);else if(ut(a,"readystatechange"),Fn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=V===0){let U=String(a.D).match(Tp)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),y=!uT.test(U?U.toLowerCase():"")}d=y}if(d)ut(a,"complete"),ut(a,"success");else{a.o=6;try{var D=Fn(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",Dp(a)}}finally{aa(a)}}}}function aa(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||ut(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Fn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Fn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),$E(c)}};function Vp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function hT(a){const c={};a=(a.g&&Fn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var d=QE(a[y]);const D=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=c[D]||[];c[D]=V,V.push(d)}Z(c,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ci(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Mp(a){this.za=0,this.i=[],this.j=new yi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ci("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ci("baseRetryDelayMs",5e3,a),this.Za=Ci("retryDelaySeedMs",1e4,a),this.Ta=Ci("forwardChannelMaxRetries",2,a),this.va=Ci("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new yp(a&&a.concurrentRequestLimit),this.Ba=new lT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Mp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,y){ct(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.J=Hp(this,null,this.W),ua(this)};function Gu(a){if(Op(a),a.I==3){var c=a.V++,d=Xt(a.J);if(me(d,"SID",a.M),me(d,"RID",c),me(d,"TYPE","terminate"),ki(a,d),c=new On(a,a.j,c),c.M=2,c.A=ia(Xt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=qp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),sa(c)}$p(a)}function la(a){a.g&&(Qu(a),a.g.cancel(),a.g=null)}function Op(a){la(a),a.v&&(o.clearTimeout(a.v),a.v=null),ca(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ua(a){if(!_p(a.h)&&!a.m){a.m=!0;var c=a.Ea;L||m(),F||(L(),F=!0),w.add(c,a),a.D=0}}function dT(a,c){return vp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=gi(h(a.Ea,a,c),Bp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new On(this,this.j,a);let V=this.o;if(this.U&&(V?(V=de(V),ae(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=jp(this,D,c),d=Xt(this.J),me(d,"RID",a),me(d,"CVER",22),this.G&&me(d,"X-HTTP-Session-Id",this.G),ki(this,d),V&&(this.R?c="headers="+_i(Np(V))+"&"+c:this.u&&Wu(d,this.u,V)),$u(this.h,D),this.Ra&&me(d,"TYPE","init"),this.S?(me(d,"$req",c),me(d,"SID","null"),D.U=!0,Fu(D,d,null)):Fu(D,d,c),this.I=2}}else this.I==3&&(a?Lp(this,a):this.i.length==0||_p(this.h)||Lp(this))};function Lp(a,c){var d;c?d=c.l:d=a.V++;const y=Xt(a.J);me(y,"SID",a.M),me(y,"RID",d),me(y,"AID",a.K),ki(a,y),a.u&&a.o&&Wu(y,a.u,a.o),d=new On(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=jp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),$u(a.h,d),Fu(d,y,c)}function ki(a,c){a.H&&Q(a.H,function(d,y){me(c,y,d)}),a.l&&Q({},function(d,y){me(c,y,d)})}function jp(a,c,d){d=Math.min(a.i.length,d);const y=a.l?h(a.l.Ka,a.l,a):null;e:{var D=a.i;let ee=-1;for(;;){const Oe=["count="+d];ee==-1?d>0?(ee=D[0].g,Oe.push("ofs="+ee)):ee=0:Oe.push("ofs="+ee);let he=!0;for(let Ue=0;Ue<d;Ue++){var V=D[Ue].g;const Zt=D[Ue].map;if(V-=ee,V<0)ee=Math.max(0,D[Ue].g-100),he=!1;else try{V="req"+V+"_"||"";try{var U=Zt instanceof Map?Zt:Object.entries(Zt);for(const[Lr,Un]of U){let zn=Un;l(Un)&&(zn=Vu(Un)),Oe.push(V+Lr+"="+encodeURIComponent(zn))}}catch(Lr){throw Oe.push(V+"type="+encodeURIComponent("_badmap")),Lr}}catch{y&&y(Zt)}}if(he){U=Oe.join("&");break e}}U=void 0}return a=a.i.splice(0,d),c.G=a,U}function Fp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;L||m(),F||(L(),F=!0),w.add(c,a),a.A=0}}function Ku(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=gi(h(a.Da,a),Bp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Up(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=gi(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ct(10),la(this),Up(this))};function Qu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Up(a){a.g=new On(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Xt(a.na);me(c,"RID","rpc"),me(c,"SID",a.M),me(c,"AID",a.K),me(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&me(c,"TO",a.ia),me(c,"TYPE","xmlhttp"),ki(a,c),a.u&&a.o&&Wu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ia(Xt(c)),d.u=null,d.R=!0,pp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,la(this),Ku(this),ct(19))};function ca(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function zp(a,c){var d=null;if(a.g==c){ca(a),Qu(a),a.g=null;var y=2}else if(Bu(a.h,c))d=c.G,wp(a.h,c),y=1;else return;if(a.I!=0){if(c.o)if(y==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var D=a.D;y=na(),ut(y,new up(y,d)),ua(a)}else Fp(a);else if(D=c.m,D==3||D==0&&c.X>0||!(y==1&&dT(a,c)||y==2&&Ku(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),D){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function Bp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Or(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),y=a.Ua;const D=!y;y=new Ln(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||wi(y,"https"),ia(y),D?oT(y.toString(),d):aT(y.toString(),d)}else ct(2);a.I=0,a.l&&a.l.pa(c),$p(a),Op(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function $p(a){if(a.I=0,a.ja=[],a.l){const c=Ep(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Hp(a,c,d){var y=d instanceof Ln?Xt(d):new Ln(d);if(y.g!="")c&&(y.g=c+"."+y.g),Ei(y,y.u);else{var D=o.location;y=D.protocol,c=c?c+"."+D.hostname:D.hostname,D=+D.port;const V=new Ln(null);y&&wi(V,y),c&&(V.g=c),D&&Ei(V,D),d&&(V.h=d),y=V}return d=a.G,c=a.wa,d&&c&&me(y,d,c),me(y,"VER",a.ka),ki(a,y),y}function qp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ae(new qu({ab:d})):new Ae(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wp(){}t=Wp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ha(){}ha.prototype.g=function(a,c){return new Tt(a,c)};function Tt(a,c){Ze.call(this),this.g=new Mp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!I(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!I(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ds(this)}g(Tt,Ze),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Gu(this.g)},Tt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Vu(a),a=d);c.i.push(new XE(c.Ya++,a)),c.I==3&&ua(c)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Gu(this.g),delete this.g,Tt.Z.N.call(this)};function Gp(a){Mu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}g(Gp,Mu);function Kp(){Ou.call(this),this.status=1}g(Kp,Ou);function ds(a){this.g=a}g(ds,Wp),ds.prototype.ra=function(){ut(this.g,"a")},ds.prototype.qa=function(a){ut(this.g,new Gp(a))},ds.prototype.pa=function(a){ut(this.g,new Kp)},ds.prototype.oa=function(){ut(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,I0=function(){return new ha},T0=function(){return na()},E0=br,Mh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ra.NO_ERROR=0,ra.TIMEOUT=8,ra.HTTP_ERROR=6,Qa=ra,cp.COMPLETE="complete",w0=cp,ip.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",Ze.prototype.listen=Ze.prototype.J,$i=ip,Ae.prototype.listenOnce=Ae.prototype.K,Ae.prototype.getLastError=Ae.prototype.Ha,Ae.prototype.getLastErrorCode=Ae.prototype.ya,Ae.prototype.getStatus=Ae.prototype.ca,Ae.prototype.getResponseJson=Ae.prototype.La,Ae.prototype.getResponseText=Ae.prototype.la,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Fa,v0=Ae}).apply(typeof Na<"u"?Na:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let ai="12.13.0";function zx(t){ai=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ns=new nf("@firebase/firestore");function ms(){return ns.logLevel}function B(t,...e){if(ns.logLevel<=se.DEBUG){const n=e.map(of);ns.debug(`Firestore (${ai}): ${t}`,...n)}}function Rn(t,...e){if(ns.logLevel<=se.ERROR){const n=e.map(of);ns.error(`Firestore (${ai}): ${t}`,...n)}}function rs(t,...e){if(ns.logLevel<=se.WARN){const n=e.map(of);ns.warn(`Firestore (${ai}): ${t}`,...n)}}function of(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,S0(t,r,n)}function S0(t,e,n){let r=`FIRESTORE (${ai}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Rn(r),new Error(r)}function ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||S0(e,s,r)}function X(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class x0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class $x{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Hx{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new x0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class qx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Wx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new qx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ht(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new gg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new gg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class af{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Kx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Oh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return kc(s)===kc(i)?te(s,i):kc(s)?1:-1}return te(t.length,e.length)}const Qx=55296,Yx=57343;function kc(t){const e=t.charCodeAt(0);return e>=Qx&&e<=Yx}function Xs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const yg="__name__";class nn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=nn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return te(e.length,n.length)}static compareSegments(e,n){const r=nn.isNumericId(e),s=nn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?nn.extractNumericId(e).compare(nn.extractNumericId(n)):Oh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hr.fromString(e.substring(4,e.length-2))}}class fe extends nn{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const Jx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends nn{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return Jx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yg}static keyField(){return new Qe([yg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}/**
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
 */function A0(t,e,n){if(!n)throw new $(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Xx(t,e,n,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _g(t){if(!q.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vg(t){if(q.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function C0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function du(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=du(t);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ho(t,e){if(!C0(t))throw new $(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new $(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const wg=-62135596800,Eg=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Eg);return new _e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<wg)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Eg}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ho(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:be("string",_e._jsonSchemaVersion),seconds:be("number"),nanoseconds:be("number")};/**
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
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new _e(0,0))}static max(){return new J(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Co=-1;function Zx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new yr(s,q.empty(),e)}function eA(t){return new yr(t.readTime,t.key,Co)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(J.min(),q.empty(),Co)}static max(){return new yr(J.max(),q.empty(),Co)}}function tA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function li(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==nA)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function sA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ui(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fu.ce=-1;/**
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
 */const lf=-1;function pu(t){return t==null}function Pl(t){return t===0&&1/t==-1/0}function iA(t){return typeof t=="number"&&Number.isInteger(t)&&!Pl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const k0="";function oA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Tg(e)),e=aA(t.get(n),e);return Tg(e)}function aA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case k0:n+="";break;default:n+=i}}return n}function Tg(t){return t+k0+""}/**
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
 */function Ig(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function R0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ke(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sg(this.data.getIterator())}getIteratorFrom(e){return new Sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class Sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Fe(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class N0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new N0("Invalid base64 string: "+i):i}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const lA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=lA.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="server_timestamp",D0="__type__",b0="__previous_value__",V0="__local_write_time__";function uf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[D0])==null?void 0:r.stringValue)===P0}function mu(t){const e=t.mapValue.fields[b0];return uf(e)?mu(e):e}function ko(t){const e=_r(t.mapValue.fields[V0].timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class uA{constructor(e,n,r,s,i,o,l,u,h,p,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const Dl="(default)";class Ro{constructor(e,n){this.projectId=e,this.database=n||Dl}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database===Dl}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}function cA(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="__type__",hA="__max__",Da={mapValue:{}},O0="__vector__",bl="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uf(t)?4:fA(t)?9007199254740991:dA(t)?10:11:K(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ko(t).isEqual(ko(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_r(s.timestampValue),l=_r(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),l=ke(i.doubleValue);return o===l?Pl(o)===Pl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Xs(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ig(o)!==Ig(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function No(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function Zs(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ke(i.integerValue||i.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return xg(t.timestampValue,e.timestampValue);case 4:return xg(ko(t),ko(e));case 5:return Oh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=vr(i),u=vr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=te(l[h],u[h]);if(p!==0)return p}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=te(ke(i.latitude),ke(o.latitude));return l!==0?l:te(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ag(t.arrayValue,e.arrayValue);case 10:return function(i,o){var _,k,P,A;const l=i.fields||{},u=o.fields||{},h=(_=l[bl])==null?void 0:_.arrayValue,p=(k=u[bl])==null?void 0:k.arrayValue,g=te(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((A=p==null?void 0:p.values)==null?void 0:A.length)||0);return g!==0?g:Ag(h,p)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Da.mapValue&&o===Da.mapValue)return 0;if(i===Da.mapValue)return 1;if(o===Da.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const _=Oh(u[g],p[g]);if(_!==0)return _;const k=Zs(l[u[g]],h[p[g]]);if(k!==0)return k}return te(u.length,p.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function xg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=_r(t),r=_r(e),s=te(n.seconds,r.seconds);return s!==0?s:te(n.nanos,r.nanos)}function Ag(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Zs(n[s],r[s]);if(i)return i}return te(n.length,r.length)}function ei(t){return Lh(t)}function Lh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Lh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Lh(n.fields[o])}`;return s+"}"}(t.mapValue):K(61005,{value:t})}function Ya(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mu(t);return e?16+Ya(e):16;case 5:return 2*t.stringValue.length;case 6:return vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ya(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return kr(r.fields,(i,o)=>{s+=i.length+Ya(o)}),s}(t.mapValue);default:throw K(13486,{value:t})}}function Cg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jh(t){return!!t&&"integerValue"in t}function cf(t){return!!t&&"arrayValue"in t}function kg(t){return!!t&&"nullValue"in t}function Rg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function dA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[M0])==null?void 0:r.stringValue)===O0}function no(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=no(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=no(t.arrayValue.values[n]);return e}return{...t}}function fA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===hA}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(n)}setAll(e){let n=Qe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=no(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new yt(no(this.value))}}function L0(t){const e=[];return kr(t.fields,(n,r)=>{const s=new Qe([n]);if(Ja(r)){const i=L0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new xt(e)}/**
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
 */class ot{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,J.min(),J.min(),J.min(),yt.empty(),0)}static newFoundDocument(e,n,r,s){return new ot(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new ot(e,2,n,J.min(),J.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,J.min(),J.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vl{constructor(e,n){this.position=e,this.inclusive=n}}function Ng(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Zs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Po{constructor(e,n="asc"){this.field=e,this.dir=n}}function pA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class j0{}class De extends j0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gA(e,n,r):n==="array-contains"?new vA(e,r):n==="in"?new wA(e,r):n==="not-in"?new EA(e,r):n==="array-contains-any"?new TA(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yA(e,r):new _A(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Zs(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(Zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends j0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Jt(e,n)}matches(e){return F0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function F0(t){return t.op==="and"}function U0(t){return mA(t)&&F0(t)}function mA(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function Fh(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+ei(t.value);if(U0(t))return t.filters.map(e=>Fh(e)).join(",");{const e=t.filters.map(n=>Fh(n)).join(",");return`${t.op}(${e})`}}function z0(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(t,e):t instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&z0(o,s.filters[l]),!0):!1}(t,e):void K(19439)}function B0(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${ei(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(B0).join(" ,")+"}"}(t):"Filter"}class gA extends De{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class yA extends De{constructor(e,n){super(e,"in",n),this.keys=$0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _A extends De{constructor(e,n){super(e,"not-in",n),this.keys=$0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class vA extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cf(n)&&No(n.arrayValue,this.value)}}class wA extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class EA extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!No(this.value.arrayValue,n)}}class TA extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>No(this.value.arrayValue,r))}}/**
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
 */class IA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Dg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new IA(t,e,n,r,s,i,o)}function hf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ei(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ei(r)).join(",")),e.Te=n}return e.Te}function df(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!z0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pg(t.startAt,e.startAt)&&Pg(t.endAt,e.endAt)}function Uh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ci{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function SA(t,e,n,r,s,i,o,l){return new ci(t,e,n,r,s,i,o,l)}function ff(t){return new ci(t)}function bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xA(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function H0(t){return t.collectionGroup!==null}function ro(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(Qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Po(i,r))}),n.has(Qe.keyField().canonicalString())||e.Ie.push(new Po(Qe.keyField(),r))}return e.Ie}function ln(t){const e=X(t);return e.Ee||(e.Ee=AA(e,ro(t))),e.Ee}function AA(t,e){if(t.limitType==="F")return Dg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Po(s.field,i)});const n=t.endAt?new Vl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vl(t.startAt.position,t.startAt.inclusive):null;return Dg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zh(t,e){const n=t.filters.concat([e]);return new ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function CA(t,e){const n=t.explicitOrderBy.concat([e]);return new ci(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Bh(t,e,n){return new ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gu(t,e){return df(ln(t),ln(e))&&t.limitType===e.limitType}function q0(t){return`${hf(ln(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>B0(s)).join(", ")}]`),pu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ei(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ei(s)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function yu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ro(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Ng(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,ro(r),s)||r.endAt&&!function(o,l,u){const h=Ng(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,ro(r),s))}(t,e)}function kA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function W0(t){return(e,n)=>{let r=!1;for(const s of ro(t)){const i=RA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function RA(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Zs(u,h):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return R0(this.inner)}size(){return this.innerSize}}/**
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
 */const NA=new Ee(q.comparator);function Nn(){return NA}const G0=new Ee(q.comparator);function Hi(...t){let e=G0;for(const n of t)e=e.insert(n.key,n);return e}function K0(t){let e=G0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hr(){return so()}function Q0(){return so()}function so(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const PA=new Ee(q.comparator),DA=new Fe(q.comparator);function ne(...t){let e=DA;for(const n of t)e=e.add(n);return e}const bA=new Fe(te);function VA(){return bA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pl(e)?"-0":e}}function Y0(t){return{integerValue:""+t}}function MA(t,e){return iA(e)?Y0(e):pf(t,e)}/**
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
 */class _u{constructor(){this._=void 0}}function OA(t,e,n){return t instanceof Do?function(s,i){const o={fields:{[D0]:{stringValue:P0},[V0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uf(i)&&(i=mu(i)),i&&(o.fields[b0]=i),{mapValue:o}}(n,e):t instanceof bo?X0(t,e):t instanceof Vo?Z0(t,e):function(s,i){const o=J0(s,i),l=Vg(o)+Vg(s.Ae);return jh(o)&&jh(s.Ae)?Y0(l):pf(s.serializer,l)}(t,e)}function LA(t,e,n){return t instanceof bo?X0(t,e):t instanceof Vo?Z0(t,e):n}function J0(t,e){return t instanceof Ml?function(r){return jh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Do extends _u{}class bo extends _u{constructor(e){super(),this.elements=e}}function X0(t,e){const n=ew(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vo extends _u{constructor(e){super(),this.elements=e}}function Z0(t,e){let n=ew(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class Ml extends _u{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Vg(t){return ke(t.integerValue||t.doubleValue)}function ew(t){return cf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class jA{constructor(e,n){this.field=e,this.transform=n}}function FA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof bo&&s instanceof bo||r instanceof Vo&&s instanceof Vo?Xs(r.elements,s.elements,fn):r instanceof Ml&&s instanceof Ml?fn(r.Ae,s.Ae):r instanceof Do&&s instanceof Do}(t.transform,e.transform)}class UA{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vu{}function tw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mf(t.key,Kt.none()):new qo(t.key,t.data,Kt.none());{const n=t.data,r=yt.empty();let s=new Fe(Qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rr(t.key,r,new xt(s.toArray()),Kt.none())}}function zA(t,e,n){t instanceof qo?function(s,i,o){const l=s.value.clone(),u=Og(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(s,i,o){if(!Xa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Og(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(nw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n,r){return t instanceof qo?function(i,o,l,u){if(!Xa(i.precondition,o))return l;const h=i.value.clone(),p=Lg(i.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,o,l,u){if(!Xa(i.precondition,o))return l;const h=Lg(i.fieldTransforms,u,o),p=o.data;return p.setAll(nw(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,l){return Xa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function BA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=J0(r.transform,s||null);i!=null&&(n===null&&(n=yt.empty()),n.set(r.field,i))}return n||null}function Mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xs(r,s,(i,o)=>FA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qo extends vu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends vu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Og(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,LA(o,l,n[s]))}return r}function Lg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,OA(i,o,e))}return r}class mf extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $A extends vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&zA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Q0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=tw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(n,r)=>Mg(n,r))&&Xs(this.baseMutations,e.baseMutations,(n,r)=>Mg(n,r))}}class gf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return PA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gf(e,n,r,s)}}/**
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
 */class qA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ne,ie;function GA(t){switch(t){case M.OK:return K(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function rw(t){if(t===void 0)return Rn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ne.OK:return M.OK;case Ne.CANCELLED:return M.CANCELLED;case Ne.UNKNOWN:return M.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return M.INTERNAL;case Ne.UNAVAILABLE:return M.UNAVAILABLE;case Ne.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ne.NOT_FOUND:return M.NOT_FOUND;case Ne.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ne.ABORTED:return M.ABORTED;case Ne.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ne.DATA_LOSS:return M.DATA_LOSS;default:return K(39323,{code:t})}}(ie=Ne||(Ne={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function KA(){return new TextEncoder}/**
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
 */const QA=new hr([4294967295,4294967295],0);function jg(t){const e=KA().encode(t),n=new _0;return n.update(e),new Uint8Array(n.digest())}function Fg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class yf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qi(`Invalid padding: ${n}`);if(r<0)throw new qi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=hr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(hr.fromNumber(r)));return s.compare(QA)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=jg(e),[r,s]=Fg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=jg(e),[r,s]=Fg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wo(J.min(),s,new Ee(te),Nn(),ne())}}class Go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Go(r,n,ne(),ne(),ne())}}/**
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
 */class Za{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class sw{constructor(e,n){this.targetId=e,this.Ce=n}}class iw{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ug{constructor(){this.ve=0,this.Fe=zg(),this.Me=Xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}}),new Go(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=zg()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class YA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nn(),this.Je=ba(),this.He=ba(),this.Ze=new Ee(te)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Uh(i))if(r===0){const o=new q(i.path);this.et(n,o,ot.newNoDocument(o,J.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=vr(r).toUint8Array()}catch(u){if(u instanceof N0)return rs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new yf(o,s,i)}catch(u){return rs(u instanceof qi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Uh(l.target)){const u=new q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ot.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ne();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Wo(e,n,this.Ze,this.je,r);return this.je=Nn(),this.Je=ba(),this.He=ba(),this.Ze=new Ee(te),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Ug,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Fe(te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Fe(te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ug),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ba(){return new Ee(q.comparator)}function zg(){return new Ee(q.comparator)}const JA={asc:"ASCENDING",desc:"DESCENDING"},XA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZA={and:"AND",or:"OR"};class eC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $h(t,e){return t.useProto3Json||pu(e)?e:{value:e}}function Ol(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ow(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tC(t,e){return Ol(t,e.toTimestamp())}function un(t){return ue(!!t,49232),J.fromTimestamp(function(n){const r=_r(n);return new _e(r.seconds,r.nanos)}(t))}function _f(t,e){return Hh(t,e).canonicalString()}function Hh(t,e){const n=function(s){return new fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function aw(t){const e=fe.fromString(t);return ue(dw(e),10190,{key:e.toString()}),e}function qh(t,e){return _f(t.databaseId,e.path)}function Rc(t,e){const n=aw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(uw(n))}function lw(t,e){return _f(t.databaseId,e)}function nC(t){const e=aw(t);return e.length===4?fe.emptyPath():uw(e)}function Wh(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uw(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Bg(t,e,n){return{name:qh(t,e),fields:n.value.mapValue.fields}}function rC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(ue(p===void 0||typeof p=="string",58123),Xe.fromBase64String(p||"")):(ue(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Xe.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?M.UNKNOWN:rw(h.code);return new $(p,h.message||"")}(o);n=new iw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rc(t,r.document.name),i=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):J.min(),l=new yt({mapValue:{fields:r.document.fields}}),u=ot.newFoundDocument(s,i,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new Za(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rc(t,r.document),i=r.readTime?un(r.readTime):J.min(),o=ot.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Za([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rc(t,r.document),i=r.removedTargetIds||[];n=new Za([],i,s,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new WA(s,i),l=r.targetId;n=new sw(l,o)}}return n}function sC(t,e){let n;if(e instanceof qo)n={update:Bg(t,e.key,e.value)};else if(e instanceof mf)n={delete:qh(t,e.key)};else if(e instanceof Rr)n={update:Bg(t,e.key,e.data),updateMask:fC(e.fieldMask)};else{if(!(e instanceof $A))return K(16599,{dt:e.type});n={verify:qh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Do)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ml)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)}(t,e.precondition)),n}function iC(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?un(s.updateTime):un(i);return o.isEqual(J.min())&&(o=un(i)),new UA(o,s.transformResults||[])}(n,e))):[]}function oC(t,e){return{documents:[lw(t,e.path)]}}function aC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=lw(t,s);const i=function(h){if(h.length!==0)return hw(Jt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(_){return{field:ys(_.field),direction:cC(_.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=$h(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function lC(t){let e=nC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ue(r===1,65062);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(g){const _=cw(g);return _ instanceof Jt&&U0(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(_=>function(P){return new Po(_s(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(g){let _;return _=typeof g=="object"?g.value:g,pu(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(g){const _=!!g.before,k=g.values||[];return new Vl(k,_)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const _=!g.before,k=g.values||[];return new Vl(k,_)}(n.endAt)),SA(e,s,o,i,l,"F",u,h)}function uC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_s(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_s(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_s(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return De.create(_s(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>cw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function cC(t){return JA[t]}function hC(t){return XA[t]}function dC(t){return ZA[t]}function ys(t){return{fieldPath:t.canonicalString()}}function _s(t){return Qe.fromServerFormat(t.fieldPath)}function hw(t){return t instanceof De?function(n){if(n.op==="=="){if(Rg(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(kg(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rg(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(kg(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:hC(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(s=>hw(s));return r.length===1?r[0]:{compositeFilter:{op:dC(n.op),filters:r}}}(t):K(54877,{filter:t})}function fC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function fw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class wn{constructor(e,n,r,s,i=J.min(),o=J.min(),l=Xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pC{constructor(e){this.yt=e}}function mC(t){const e=lC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bh(e,e.limit,"L"):e}/**
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
 */class gC{constructor(){this.bn=new yC}addToCollectionParentIndex(e,n){return this.bn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(yr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class yC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Fe(fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(fe.comparator)).toArray()}}/**
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
 */const $g={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pw=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(pw,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
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
 */class Er{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Er(0)}static ar(){return new Er(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="LruGarbageCollector",_C=1048576;function qg([t,e],[n,r]){const s=te(t,n);return s===0?te(e,r):s}class vC{constructor(e){this.Pr=e,this.buffer=new Fe(qg),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(Hg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ui(n)?B(Hg,"Ignoring IndexedDB error during garbage collection: ",n):await li(n)}await this.Ar(3e5)})}}class EC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(fu.ce);const r=new vC(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve($g)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$g):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),ms()<=se.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function TC(t,e){return new EC(t,e)}/**
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
 */class IC{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class xC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&io(r.mutation,s,xt.empty(),_e.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=Hr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Nn();const o=so(),l=function(){return so()}();return n.forEach((u,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Rr)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),io(p.mutation,h,p.mutation.getFieldMask(),_e.now())):o.set(h.key,xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>l.set(h,new SC(p,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=so();let s=new Ee((o,l)=>o-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||xt.empty();p=l.applyToLocalView(h,p),r.set(u,p);const g=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,g=Q0();p.forEach(_=>{if(!i.has(_)){const k=tw(n.get(_),r.get(_));k!==null&&g.set(_,k),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return xA(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):H0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(Hr());let l=Co,u=i;return o.next(h=>O.forEach(h,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(p)?O.resolve():this.remoteDocumentCache.getEntry(e,p).next(_=>{u=u.insert(p,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ne())).next(p=>({batchId:l,changes:K0(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=Hi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Hi();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const h=function(g,_){return new ci(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((g,_)=>{o=o.insert(g,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,ot.newInvalidDocument(p)))});let l=Hi();return o.forEach((u,h)=>{const p=i.get(u);p!==void 0&&io(p.mutation,h,xt.empty(),_e.now()),yu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return O.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:mC(s.bundledQuery),readTime:un(s.readTime)}}(n)),O.resolve()}}/**
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
 */class CC{constructor(){this.overlays=new Ee(q.comparator),this.Lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hr();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Hr(),i=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ee((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=Hr(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Hr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return O.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qA(n,r));let i=this.Lr.get(n);i===void 0&&(i=ne(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class kC{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class vf{constructor(){this.kr=new Fe(ze.Kr),this.qr=new Fe(ze.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ze(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new q(new fe([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new q(new fe([])),r=new ze(n,e),s=new ze(n,e+1);let i=ne();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return q.comparator(e.key,n.key)||te(e.Jr,n.Jr)}static Ur(e,n){return te(e.Jr,n.Jr)||q.comparator(e.key,n.key)}}/**
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
 */class RC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Fe(ze.Kr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?lf:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(te);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),O.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new ze(new q(i),0);let l=new Fe(te);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},o),O.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ue(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return O.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new ze(n,0),s=this.Hr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class NC{constructor(e){this.ti=e,this.docs=function(){return new Ee(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Nn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Nn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||tA(eA(p),r)<=0||(s.has(p.key)||yu(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K(9500)}ni(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PC(this)}getSize(e){return O.resolve(this.size)}}class PC extends IC{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class DC{constructor(e){this.persistence=e,this.ri=new ls(n=>hf(n),df),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new vf,this.targetCount=0,this.oi=Er._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),O.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Er(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.lr(n),O.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.si.containsKey(n))}}/**
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
 */class mw{constructor(e,n){this._i={},this.overlays={},this.ai=new fu(0),this.ui=!1,this.ui=!0,this.ci=new kC,this.referenceDelegate=e(this),this.li=new DC(this),this.indexManager=new gC,this.remoteDocumentCache=function(s){return new NC(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new pC(n),this.Pi=new AC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new RC(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const s=new bC(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return O.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class bC extends rA{constructor(e){super(),this.currentSequenceNumber=e}}class wf{constructor(e){this.persistence=e,this.Ri=new vf,this.Ai=null}static Vi(e){return new wf(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,r=>{const s=q.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ll{constructor(e,n){this.persistence=e,this.fi=new ls(r=>oA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=TC(this,n)}static Vi(e,n){return new Ll(e,n)}Ti(){}Ii(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return O.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ya(e.data.value)),n}wr(e,n,r){return O.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ef{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ef(e,n.fromCache,r,s)}}/**
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
 */class VC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class MC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return E1()?8:sA(lt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new VC;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ms()<=se.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(ms()<=se.DEBUG&&B("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ms()<=se.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):O.resolve())}gs(e,n){if(bg(n))return O.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Bh(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,Bh(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,s){return bg(n)||s.isEqual(J.min())?O.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?O.resolve(null):(ms()<=se.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gs(n)),this.Ds(e,o,n,Zx(s,Co)).next(l=>l))})}Ss(e,n){let r=new Fe(W0(e));return n.forEach((s,i)=>{yu(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ms()<=se.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",gs(n)),this.fs.getDocumentsMatchingQuery(e,n,yr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="LocalStore",OC=3e8;class LC{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ee(te),this.Fs=new ls(i=>hf(i),df),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function jC(t,e,n,r){return new LC(t,e,n,r)}async function gw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ne();for(const h of s){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function FC(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const g=h.batch,_=g.keys();let k=O.resolve();return _.forEach(P=>{k=k.next(()=>p.getEntry(u,P)).next(A=>{const b=h.docVersions.get(P);ue(b!==null,48541),A.version.compareTo(b)<0&&(g.applyToRemoteDocument(A,h),A.isValidDocument()&&(A.setReadTime(h.commitVersion),p.addEntry(A)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function yw(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function UC(t,e){const n=X(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((p,g)=>{const _=s.get(g);if(!_)return;l.push(n.li.removeMatchingKeys(i,p.removedDocuments,g).next(()=>n.li.addMatchingKeys(i,p.addedDocuments,g)));let k=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(Xe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),s=s.insert(g,k),function(A,b,E){return A.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=OC?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(_,k,p)&&l.push(n.li.updateTargetData(i,k))});let u=Nn(),h=ne();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(zC(i,o,e.documentUpdates).next(p=>{u=p.Bs,h=p.Ls})),!r.isEqual(J.min())){const p=n.li.getLastRemoteSnapshotVersion(i).next(g=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return O.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.vs=s,i))}function zC(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Nn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(Tf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function BC(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=lf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $C(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Gh(t,e,n){const r=X(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ui(o))throw o;B(Tf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Wg(t,e,n){const r=X(t);let s=J.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const g=X(u),_=g.Fs.get(p);return _!==void 0?O.resolve(g.vs.get(_)):g.li.getTargetData(h,p)}(r,o,ln(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ne())).next(l=>(HC(r,kA(e),l),{documents:l,ks:i})))}function HC(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Gg{constructor(){this.activeTargetIds=VA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qC{constructor(){this.vo=new Gg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Gg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WC{Mo(e){}shutdown(){}}/**
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
 */const Kg="ConnectivityMonitor";class Qg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(Kg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(Kg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Va=null;function Kh(){return Va===null?Va=function(){return 268435456+Math.round(2147483648*Math.random())}():Va++,"0x"+Va.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="RestConnection",GC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class KC{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Dl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Kh(),l=this.Qo(e,n.toUriEncodedString());B(Nc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),p=$o(h);return this.zo(e,l,u,r,p).then(g=>(B(Nc,`Received RPC '${e}' ${o}: `,g),g),g=>{throw rs(Nc,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ai}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=GC[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class QC{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const nt="WebChannelConnection",Li=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class js extends KC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!js.c_){const e=T0();Li(e,E0.STAT_EVENT,n=>{n.stat===Mh.PROXY?B(nt,"STAT_EVENT: detected buffering proxy"):n.stat===Mh.NOPROXY&&B(nt,"STAT_EVENT: detected no buffering proxy")}),js.c_=!0}}zo(e,n,r,s,i){const o=Kh();return new Promise((l,u)=>{const h=new v0;h.setWithCredentials(!0),h.listenOnce(w0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Qa.NO_ERROR:const g=h.getResponseJson();B(nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case Qa.TIMEOUT:B(nt,`RPC '${e}' ${o} timed out`),u(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case Qa.HTTP_ERROR:const _=h.getStatus();if(B(nt,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const P=k==null?void 0:k.error;if(P&&P.status&&P.message){const A=function(E){const T=E.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(P.status);u(new $(A,P.message))}else u(new $(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(M.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(nt,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);B(nt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",p,r,15)})}T_(e,n,r){const s=Kh(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");B(nt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);this.I_(p);let g=!1,_=!1;const k=new QC({Jo:P=>{_?B(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(B(nt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),B(nt,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Ho:()=>p.close()});return Li(p,$i.EventType.OPEN,()=>{_||(B(nt,`RPC '${e}' stream ${s} transport opened.`),k.i_())}),Li(p,$i.EventType.CLOSE,()=>{_||(_=!0,B(nt,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(p))}),Li(p,$i.EventType.ERROR,P=>{_||(_=!0,rs(nt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),k.o_(new $(M.UNAVAILABLE,"The operation could not be completed")))}),Li(p,$i.EventType.MESSAGE,P=>{var A;if(!_){const b=P.data[0];ue(!!b,16349);const E=b,T=(E==null?void 0:E.error)||((A=E[0])==null?void 0:A.error);if(T){B(nt,`RPC '${e}' stream ${s} received error:`,T);const C=T.status;let R=function(w){const m=Ne[w];if(m!==void 0)return rw(m)}(C),L=T.message;C==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&rs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),R===void 0&&(R=M.INTERNAL,L="Unknown error status: "+C+" with message "+T.message),_=!0,k.o_(new $(R,L)),p.close()}else B(nt,`RPC '${e}' stream ${s} received:`,b),k.__(b)}}),js.u_(),setTimeout(()=>{k.s_()},0),k}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return I0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){return new js(t)}function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){return new eC(t,!0)}/**
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
 */js.c_=!1;class _w{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Yg="PersistentStream";class vw{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _w(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new $(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(Yg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(B(Yg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JC extends vw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=rC(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?un(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Wh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Uh(u)?{documents:oC(i,u)}:{query:aC(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ow(i,o.resumeToken);const h=$h(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Ol(i,o.snapshotVersion.toTimestamp());const h=$h(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=uC(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Wh(this.serializer),n.removeTarget=e,this.K_(n)}}class XC extends vw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=iC(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Wh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>sC(this.serializer,r))};this.K_(n)}}/**
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
 */class ZC{}class ek extends ZC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Hh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(M.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Hh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function tk(t,e,n,r){return new ek(t,e,n,r)}class nk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const pn="RemoteStore";class rk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Er(1e3),this.Va=new Er(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{us(this)&&(B(pn,"Restarting streams for network reachability change."),await async function(u){const h=X(u);h.da.add(4),await Ko(h),h.ga.set("Unknown"),h.da.delete(4),await Eu(h)}(this))})}),this.ga=new nk(r,s)}}async function Eu(t){if(us(t))for(const e of t.ma)await e(!0)}async function Ko(t){for(const e of t.ma)await e(!1)}function Qh(t,e){return t.Ea.get(e)||void 0}function ww(t,e){const n=X(t),r=Qh(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const h=Qh(l,u);h!==void 0&&l.Ra.delete(h);const p=function(_,k){return k%2!=0?_.Va.next():_.Aa.next()}(l,u);return l.Ea.set(u,p),l.Ra.set(p,u),p}(n,e.targetId);B(pn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new wn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),Af(n)?xf(n):hi(n).O_()&&Sf(n,i)}function If(t,e){const n=X(t),r=hi(n),s=Qh(n,e);B(pn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&Ew(n,s),n.Ia.size===0&&(r.O_()?r.L_():us(n)&&n.ga.set("Unknown"))}function Sf(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void B(pn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}hi(t).Z_(e)}function Ew(t,e){t.pa.$e(e),hi(t).X_(e)}function xf(t){t.pa=new YA({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ne()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),hi(t).start(),t.ga.ua()}function Af(t){return us(t)&&!hi(t).x_()&&t.Ia.size>0}function us(t){return X(t).da.size===0}function Tw(t){t.pa=void 0}async function sk(t){t.ga.set("Online")}async function ik(t){t.Ia.forEach((e,n)=>{Sf(t,e)})}async function ok(t,e){Tw(t),Af(t)?(t.ga.ha(e),xf(t)):t.ga.set("Unknown")}async function ak(t,e,n){if(t.ga.set("Online"),e instanceof iw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){B(pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jl(t,r)}else if(e instanceof Za?t.pa.Xe(e):e instanceof sw?t.pa.st(e):t.pa.tt(e),!n.isEqual(J.min()))try{const r=await yw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const g=i.Ia.get(p);g&&i.Ia.set(p,g.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,p)=>{const g=i.Ia.get(h);if(!g)return;i.Ia.set(h,g.withResumeToken(Xe.EMPTY_BYTE_STRING,g.snapshotVersion)),Ew(i,h);const _=new wn(g.target,h,p,g.sequenceNumber);Sf(i,_)});const u=function(p,g){const _=new Map;g.targetChanges.forEach((P,A)=>{const b=p.Ra.get(A);b!==void 0&&_.set(b,P)});let k=new Ee(te);return g.targetMismatches.forEach((P,A)=>{const b=p.Ra.get(P);b!==void 0&&(k=k.insert(b,A))}),new Wo(g.snapshotVersion,_,k,g.documentUpdates,g.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){B(pn,"Failed to raise snapshot:",r),await jl(t,r)}}async function jl(t,e,n){if(!ui(e))throw e;t.da.add(1),await Ko(t),t.ga.set("Offline"),n||(n=()=>yw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(pn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Eu(t)})}function Iw(t,e){return e().catch(n=>jl(t,n,e))}async function Tu(t){const e=X(t),n=Tr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lf;for(;lk(e);)try{const s=await BC(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,uk(e,s)}catch(s){await jl(e,s)}Sw(e)&&xw(e)}function lk(t){return us(t)&&t.Ta.length<10}function uk(t,e){t.Ta.push(e);const n=Tr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Sw(t){return us(t)&&!Tr(t).x_()&&t.Ta.length>0}function xw(t){Tr(t).start()}async function ck(t){Tr(t).ra()}async function hk(t){const e=Tr(t);for(const n of t.Ta)e.ea(n.mutations)}async function dk(t,e,n){const r=t.Ta.shift(),s=gf.from(r,e,n);await Iw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Tu(t)}async function fk(t,e){e&&Tr(t).Y_&&await async function(r,s){if(function(o){return GA(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();Tr(r).B_(),await Iw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Tu(r)}}(t,e),Sw(t)&&xw(t)}async function Jg(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),B(pn,"RemoteStore received new credentials");const r=us(n);n.da.add(3),await Ko(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Eu(n)}async function pk(t,e){const n=X(t);e?(n.da.delete(2),await Eu(n)):e||(n.da.add(2),await Ko(n),n.ga.set("Unknown"))}function hi(t){return t.ya||(t.ya=function(n,r,s){const i=X(n);return i.sa(),new JC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:sk.bind(null,t),Yo:ik.bind(null,t),t_:ok.bind(null,t),H_:ak.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Af(t)?xf(t):t.ga.set("Unknown")):(await t.ya.stop(),Tw(t))})),t.ya}function Tr(t){return t.wa||(t.wa=function(n,r,s){const i=X(n);return i.sa(),new XC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ck.bind(null,t),t_:fk.bind(null,t),ta:hk.bind(null,t),na:dk.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await Tu(t)):(await t.wa.stop(),t.Ta.length>0&&(B(pn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
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
 */class Cf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Cf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kf(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),ui(t))return new $(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fs{static emptySet(e){return new Fs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Hi(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Xg{constructor(){this.Sa=new Ee(q.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ti{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ti(e,n,Fs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class mk{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class gk{constructor(){this.queries=Zg(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=Zg(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function Zg(){return new ls(t=>q0(t),gu)}async function Aw(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new mk,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=kf(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&Rf(n)}async function Cw(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function yk(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&Rf(n)}function _k(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function Rf(t){t.xa.forEach(e=>{e.next()})}var Yh,ey;(ey=Yh||(Yh={})).Ba="default",ey.Cache="cache";class kw{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Yh.Cache}}/**
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
 */class Rw{constructor(e){this.key=e}}class Nw{constructor(e){this.key=e}}class vk{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ne(),this.mutatedKeys=ne(),this.iu=W0(e),this.su=new Fs(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Xg,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,g)=>{const _=s.get(p),k=yu(this.query,g)?g:null,P=!!_&&this.mutatedKeys.has(_.key),A=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let b=!1;_&&k?_.data.isEqual(k.data)?P!==A&&(r.track({type:3,doc:k}),b=!0):this.uu(_,k)||(r.track({type:2,doc:k}),b=!0,(u&&this.iu(k,u)>0||h&&this.iu(k,h)<0)&&(l=!0)):!_&&k?(r.track({type:0,doc:k}),b=!0):_&&!k&&(r.track({type:1,doc:_}),b=!0,(u||h)&&(l=!0)),b&&(k?(o=o.add(k),i=A?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((p,g)=>function(k,P){const A=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:b})}};return A(k)-A(P)}(p.type,g.type)||this.iu(p.doc,g.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,h=u!==this.nu;return this.nu=u,o.length!==0||h?{snapshot:new ti(this.query,e.su,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Xg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ne(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new Nw(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new Rw(r))}),n}Tu(e){this.tu=e.ks,this.ru=ne();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return ti.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Nf="SyncEngine";class wk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ek{constructor(e){this.key=e,this.Eu=!1}}class Tk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new ls(l=>q0(l),gu),this.Vu=new Map,this.du=new Set,this.mu=new Ee(q.comparator),this.fu=new Map,this.gu=new vf,this.pu={},this.yu=new Map,this.wu=Er.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Ik(t,e,n=!0){const r=Ow(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await Pw(r,e,n,!0),s}async function Sk(t,e){const n=Ow(t);await Pw(n,e,!0,!1)}async function Pw(t,e,n,r){const s=await $C(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await xk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ww(t.remoteStore,s),l}async function xk(t,e,n,r,s){t.bu=(g,_,k)=>async function(A,b,E,T){let C=b.view._u(E);C.bs&&(C=await Wg(A.localStore,b.query,!1).then(({documents:w})=>b.view._u(w,C)));const R=T&&T.targetChanges.get(b.targetId),L=T&&T.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(C,A.isPrimaryClient,R,L);return ny(A,b.targetId,F.hu),F.snapshot}(t,g,_,k);const i=await Wg(t.localStore,e,!0),o=new vk(e,i.ks),l=o._u(i.documents),u=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);ny(t,n,h.hu);const p=new wk(e,n,o);return t.Au.set(e,p),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function Ak(t,e,n){const r=X(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!gu(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Gh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&If(r.remoteStore,s.targetId),Jh(r,s.targetId)}).catch(li)):(Jh(r,s.targetId),await Gh(r.localStore,s.targetId,!0))}async function Ck(t,e){const n=X(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),If(n.remoteStore,r.targetId))}async function kk(t,e,n){const r=Mk(t);try{const s=await function(o,l){const u=X(o),h=_e.now(),p=l.reduce((k,P)=>k.add(P.key),ne());let g,_;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let P=Nn(),A=ne();return u.xs.getEntries(k,p).next(b=>{P=b,P.forEach((E,T)=>{T.isValidDocument()||(A=A.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,P)).next(b=>{g=b;const E=[];for(const T of l){const C=BA(T,g.get(T.key).overlayedDocument);C!=null&&E.push(new Rr(T.key,C,L0(C.value.mapValue),Kt.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,E,l)}).next(b=>{_=b;const E=b.applyToLocalDocumentSet(g,A);return u.documentOverlayCache.saveOverlays(k,b.batchId,E)})}).then(()=>({batchId:_.batchId,changes:K0(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.pu[o.currentUser.toKey()];h||(h=new Ee(te)),h=h.insert(l,u),o.pu[o.currentUser.toKey()]=h}(r,s.batchId,n),await Qo(r,s.changes),await Tu(r.remoteStore)}catch(s){const i=kf(s,"Failed to persist write");n.reject(i)}}async function Dw(t,e){const n=X(t);try{const r=await UC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?ue(o.Eu,14607):s.removedDocuments.size>0&&(ue(o.Eu,42227),o.Eu=!1))}),await Qo(n,r,e)}catch(r){await li(r)}}function ty(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((p,g)=>{for(const _ of g.va)_.Oa(l)&&(h=!0)}),h&&Rf(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rk(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new Ee(q.comparator);o=o.insert(i,ot.newNoDocument(i,J.min()));const l=ne().add(i),u=new Wo(J.min(),new Map,new Ee(te),o,l);await Dw(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),Pf(r)}else await Gh(r.localStore,e,!1).then(()=>Jh(r,e,n)).catch(li)}async function Nk(t,e){const n=X(t),r=e.batch.batchId;try{const s=await FC(n.localStore,e);Vw(n,r,null),bw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qo(n,s)}catch(s){await li(s)}}async function Pk(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(ue(g!==null,37113),p=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);Vw(r,e,n),bw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qo(r,s)}catch(s){await li(s)}}function bw(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function Vw(t,e,n){const r=X(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||Mw(t,r)})}function Mw(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(If(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Pf(t))}function ny(t,e,n){for(const r of n)r instanceof Rw?(t.gu.addReference(r.key,e),Dk(t,r)):r instanceof Nw?(B(Nf,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||Mw(t,r.key)):K(19791,{Cu:r})}function Dk(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(B(Nf,"New document in limbo: "+n),t.du.add(r),Pf(t))}function Pf(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new q(fe.fromString(e)),r=t.wu.next();t.fu.set(r,new Ek(n)),t.mu=t.mu.insert(n,r),ww(t.remoteStore,new wn(ln(ff(n.path)),r,"TargetPurposeLimboResolution",fu.ce))}}async function Qo(t,e,n){const r=X(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Ef.Es(u.targetId,h);i.push(g)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,h){const p=X(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(h,_=>O.forEach(_.Ts,k=>p.persistence.referenceDelegate.addReference(g,_.targetId,k)).next(()=>O.forEach(_.Is,k=>p.persistence.referenceDelegate.removeReference(g,_.targetId,k)))))}catch(g){if(!ui(g))throw g;B(Tf,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const k=p.vs.get(_),P=k.snapshotVersion,A=k.withLastLimboFreeSnapshotVersion(P);p.vs=p.vs.insert(_,A)}}}(r.localStore,i))}async function bk(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){B(Nf,"User change. New user:",e.toKey());const r=await gw(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new $(M.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qo(n,r.Ns)}}function Vk(t,e){const n=X(t),r=n.fu.get(e);if(r&&r.Eu)return ne().add(r.key);{let s=ne();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function Ow(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rk.bind(null,e),e.Ru.H_=yk.bind(null,e.eventManager),e.Ru.Du=_k.bind(null,e.eventManager),e}function Mk(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pk.bind(null,e),e}class Fl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return jC(this.persistence,new MC,e.initialUser,this.serializer)}xu(e){return new mw(wf.Vi,this.serializer)}Mu(e){return new qC}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fl.provider={build:()=>new Fl};class Ok extends Fl{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){ue(this.persistence.referenceDelegate instanceof Ll,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wC(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new mw(r=>Ll.Vi(r,n),this.serializer)}}class Xh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ty(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bk.bind(null,this.syncEngine),await pk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gk}()}createDatastore(e){const n=wu(e.databaseInfo.databaseId),r=YC(e.databaseInfo);return tk(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new rk(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ty(this.syncEngine,n,0),function(){return Qg.v()?new Qg:new WC}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,p){const g=new Tk(s,i,o,l,u,h);return p&&(g.Su=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);B(pn,"RemoteStore shutting down."),i.da.add(5),await Ko(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Xh.provider={build:()=>new Xh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ir="FirestoreClient";class Lk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=af.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{B(Ir,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(Ir,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dc(t,e){t.asyncQueue.verifyOperationInProgress(),B(Ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ry(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jk(t);B(Ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Jg(e.remoteStore,s)),t._onlineComponents=e}async function jk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Ir,"Using user provided OfflineComponentProvider");try{await Dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await Dc(t,new Fl)}}else B(Ir,"Using default OfflineComponentProvider"),await Dc(t,new Ok(void 0));return t._offlineComponents}async function jw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Ir,"Using user provided OnlineComponentProvider"),await ry(t,t._uninitializedComponentsProvider._online)):(B(Ir,"Using default OnlineComponentProvider"),await ry(t,new Xh))),t._onlineComponents}function Fk(t){return jw(t).then(e=>e.syncEngine)}async function Zh(t){const e=await jw(t),n=e.eventManager;return n.onListen=Ik.bind(null,e.syncEngine),n.onUnlisten=Ak.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Sk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ck.bind(null,e.syncEngine),n}function Uk(t,e,n,r){const s=new Lw(r),i=new kw(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Aw(await Zh(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>Cw(await Zh(t),i))}}function zk(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new Lw({next:_=>{p.Ku(),o.enqueueAndForget(()=>Cw(i,g)),_.fromCache&&u.source==="server"?h.reject(new $(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new kw(l,p,{includeMetadataChanges:!0,Wa:!0});return Aw(i,g)}(await Zh(t),t.asyncQueue,e,n,r)),r.promise}function Bk(t,e){const n=new dr;return t.asyncQueue.enqueueAndForget(async()=>kk(await Fk(t),e,n)),n.promise}/**
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
 */function Fw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="ComponentProvider",sy=new Map;function Hk(t,e,n,r,s){return new uA(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Fw(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="firestore.googleapis.com",iy=!0;class oy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uw,this.ssl=iy}else this.host=e.host,this.ssl=e.ssl??iy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_C)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Xx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Iu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Bx;switch(r.type){case"firstParty":return new Wx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sy.get(n);r&&(B($k,"Removing Datastore"),sy.delete(n),r.terminate())}(this),Promise.resolve()}}function qk(t,e,n,r={}){var h;t=an(t,Iu);const s=$o(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&h0(`https://${l}`),i.host!==Uw&&i.host!==l&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!es(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=st.MOCK_USER;else{p=p1(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new $(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new st(_)}t._authCredentials=new $x(new x0(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nr(this.firestore,e,this._query)}}class Ve{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ho(n,Ve._jsonSchema))return new Ve(e,r||null,new q(fe.fromString(n.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:be("string",Ve._jsonSchemaVersion),referencePath:be("string")};class fr extends Nr{constructor(e,n,r){super(e,n,ff(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new q(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function Zn(t,e,...n){if(t=He(t),A0("collection","path",e),t instanceof Iu){const r=fe.fromString(e,...n);return vg(r),new fr(t,null,r)}{if(!(t instanceof Ve||t instanceof fr))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return vg(r),new fr(t.firestore,null,r)}}function Yo(t,e,...n){if(t=He(t),arguments.length===1&&(e=af.newId()),A0("doc","path",e),t instanceof Iu){const r=fe.fromString(e,...n);return _g(r),new Ve(t,null,new q(r))}{if(!(t instanceof Ve||t instanceof fr))throw new $(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return _g(r),new Ve(t.firestore,t instanceof fr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="AsyncQueue";class ly{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new _w(this,"async_queue_retry"),this.lc=()=>{const r=Pc();r&&B(ay,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new dr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ui(e))throw e;B(ay,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Rn("INTERNAL UNHANDLED ERROR: ",uy(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=Cf.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&K(47125,{Rc:uy(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function uy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ss extends Iu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ly,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ly(e),this._firestoreClient=void 0,await e}}}function Wk(t,e){const n=typeof t=="object"?t:m0(),r=typeof t=="string"?t:Dl,s=sf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=d1("firestore");i&&qk(s,...i)}return s}function Df(t){if(t._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Gk(t),t._firestoreClient}function Gk(t){var r,s,i,o;const e=t._freezeSettings(),n=Hk(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Lk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(Xe.fromBase64String(e))}catch(n){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dt(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ho(e,Dt._jsonSchema))return Dt.fromBase64String(e.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:be("string",Dt._jsonSchemaVersion),bytes:be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this._methodName=e}}/**
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
 */class cn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cn._jsonSchemaVersion}}static fromJSON(e){if(Ho(e,cn._jsonSchema))return new cn(e.latitude,e.longitude)}}cn._jsonSchemaVersion="firestore/geoPoint/1.0",cn._jsonSchema={type:be("string",cn._jsonSchemaVersion),latitude:be("number"),longitude:be("number")};/**
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
 */class Qt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ho(e,Qt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Qt(e.vectorValues);throw new $(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qt._jsonSchemaVersion="firestore/vectorValue/1.0",Qt._jsonSchema={type:be("string",Qt._jsonSchemaVersion),vectorValues:be("object")};/**
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
 */const Kk=/^__.*__$/;class Qk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new qo(e,this.data,n,this.fieldTransforms)}}class zw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class Vf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Vf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Ul(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Bw(this.dataSource)&&Kk.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class Yk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wu(e)}V(e,n,r,s=!1){return new Vf({dataSource:e,methodName:n,targetDoc:r,path:Qe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mf(t){const e=t._freezeSettings(),n=wu(t._databaseId);return new Yk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jk(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);Lf("Data must be an object, but it was:",o,r);const l=$w(r,o);let u,h;if(i.merge)u=new xt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const _=ni(e,g,n);if(!o.contains(_))throw new $(M.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Ww(p,_)||p.push(_)}u=new xt(p),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new Qk(new yt(l),u,h)}class xu extends Su{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xu}}class Of extends Su{_toFieldTransform(e){return new jA(e.path,new Do)}isEqual(e){return e instanceof Of}}function Xk(t,e,n,r){const s=t.V(1,e,n);Lf("Data must be an object, but it was:",s,r);const i=[],o=yt.empty();kr(r,(u,h)=>{const p=qw(e,u,n);h=He(h);const g=s.Sc(p);if(h instanceof xu)i.push(p);else{const _=Jo(h,g);_!=null&&(i.push(p),o.set(p,_))}});const l=new xt(i);return new zw(o,l,s.fieldTransforms)}function Zk(t,e,n,r,s,i){const o=t.V(1,e,n),l=[ni(e,r,n)],u=[s];if(i.length%2!=0)throw new $(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(ni(e,i[_])),u.push(i[_+1]);const h=[],p=yt.empty();for(let _=l.length-1;_>=0;--_)if(!Ww(h,l[_])){const k=l[_];let P=u[_];P=He(P);const A=o.Sc(k);if(P instanceof xu)h.push(k);else{const b=Jo(P,A);b!=null&&(h.push(k),p.set(k,b))}}const g=new xt(h);return new zw(p,g,o.fieldTransforms)}function eR(t,e,n,r=!1){return Jo(n,t.V(r?4:3,e))}function Jo(t,e){if(Hw(t=He(t)))return Lf("Unsupported field value:",e,t),$w(t,e);if(t instanceof Su)return function(r,s){if(!Bw(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Jo(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=_e.fromDate(r);return{timestampValue:Ol(s.serializer,i)}}if(r instanceof _e){const i=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ol(s.serializer,i)}}if(r instanceof cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dt)return{bytesValue:ow(s.serializer,r._byteString)};if(r instanceof Ve){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_f(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qt)return function(o,l){const u=o instanceof Qt?o.toArray():o;return{mapValue:{fields:{[M0]:{stringValue:O0},[bl]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.Dc("VectorValues must only contain numeric values.");return pf(l.serializer,p)})}}}}}}(r,s);if(fw(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${du(r)}`)}(t,e)}function $w(t,e){const n={};return R0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(r,s)=>{const i=Jo(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Hw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof cn||t instanceof Dt||t instanceof Ve||t instanceof Su||t instanceof Qt||fw(t))}function Lf(t,e,n){if(!Hw(n)||!C0(n)){const r=du(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function ni(t,e,n){if((e=He(e))instanceof bf)return e._internalPath;if(typeof e=="string")return qw(t,e);throw Ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const tR=new RegExp("[~\\*/\\[\\]]");function qw(t,e,n){if(e.search(tR)>=0)throw Ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bf(...e.split("."))._internalPath}catch{throw Ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ul(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(M.INVALID_ARGUMENT,l+t+u)}function Ww(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return kr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[bl].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ke(o.doubleValue));return new Qt(n)}convertGeoPoint(e){return new cn(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ko(e));default:return null}}convertTimestamp(e){const n=_r(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ue(dw(r),9688,{name:e});const s=new Ro(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||Rn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class jf extends nR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function Gw(){return new Of("serverTimestamp")}const cy="@firebase/firestore",hy="4.14.1";/**
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
 */function dy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ni("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rR extends Kw{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ff{}class Yw extends Ff{}function sR(t,e,...n){let r=[];e instanceof Ff&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof zf).length,l=i.filter(u=>u instanceof Uf).length;if(o>1||o>0&&l>0)throw new $(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Uf extends Yw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Uf(e,n,r)}_apply(e){const n=this._parse(e);return Jw(e._query,n),new Nr(e.firestore,e.converter,zh(e._query,n))}_parse(e){const n=Mf(e.firestore);return function(i,o,l,u,h,p,g){let _;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new $(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){py(g,p);const P=[];for(const A of g)P.push(fy(u,i,A));_={arrayValue:{values:P}}}else _=fy(u,i,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||py(g,p),_=eR(l,o,g,p==="in"||p==="not-in");return De.create(h,p,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class zf extends Ff{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)Jw(o,u),o=zh(o,u)}(e._query,n),new Nr(e.firestore,e.converter,zh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bf extends Yw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bf(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Po(i,o)}(e._query,this._field,this._direction);return new Nr(e.firestore,e.converter,CA(e._query,n))}}function iR(t,e="asc"){const n=e,r=ni("orderBy",t);return Bf._create(r,n)}function fy(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new $(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!H0(e)&&n.indexOf("/")!==-1)throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!q.isDocumentKey(r))throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cg(t,new q(r))}if(n instanceof Ve)return Cg(t,n._key);throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${du(n)}.`)}function py(t,e){if(!Array.isArray(t)||t.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jw(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function oR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gr extends Kw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new el(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ni("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gr._jsonSchema={type:be("string",Gr._jsonSchemaVersion),bundleSource:be("string","DocumentSnapshot"),bundleName:be("string"),bundle:be("string")};class el extends Gr{data(e={}){return super.data(e)}}class Kr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Wi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new el(this._firestore,this._userDataWriter,r.key,r,new Wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new el(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new el(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:aR(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=af.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */Kr._jsonSchemaVersion="firestore/querySnapshot/1.0",Kr._jsonSchema={type:be("string",Kr._jsonSchemaVersion),bundleSource:be("string","QuerySnapshot"),bundleName:be("string"),bundle:be("string")};function my(t){t=an(t,Nr);const e=an(t.firestore,ss),n=Df(e),r=new jf(e);return Qw(t._query),zk(n,t._query).then(s=>new Kr(e,r,t,s))}function Xw(t,e,n,...r){t=an(t,Ve);const s=an(t.firestore,ss),i=Mf(s);let o;return o=typeof(e=He(e))=="string"||e instanceof bf?Zk(i,"updateDoc",t._key,e,n,r):Xk(i,"updateDoc",t._key,e),$f(s,[o.toMutation(t._key,Kt.exists(!0))])}function Zw(t){return $f(an(t.firestore,ss),[new mf(t._key,Kt.none())])}function zl(t,e){const n=an(t.firestore,ss),r=Yo(t),s=oR(t.converter,e),i=Mf(t.firestore);return $f(n,[Jk(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function eE(t,...e){var h,p,g;t=He(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||dy(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(dy(e[r])){const _=e[r];e[r]=(h=_.next)==null?void 0:h.bind(_),e[r+1]=(p=_.error)==null?void 0:p.bind(_),e[r+2]=(g=_.complete)==null?void 0:g.bind(_)}let i,o,l;if(t instanceof Ve)o=an(t.firestore,ss),l=ff(t._key.path),i={next:_=>{e[r]&&e[r](lR(o,t,_))},error:e[r+1],complete:e[r+2]};else{const _=an(t,Nr);o=an(_.firestore,ss),l=_._query;const k=new jf(o);i={next:P=>{e[r]&&e[r](new Kr(o,k,_,P))},error:e[r+1],complete:e[r+2]},Qw(t._query)}const u=Df(o);return Uk(u,l,s,i)}function $f(t,e){const n=Df(t);return Bk(n,e)}function lR(t,e,n){const r=n.docs.get(e._key),s=new jf(t);return new Gr(t,s,e._key,r,new Wi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){zx(oi),Js(new ts("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ss(new Hx(r.getProvider("auth-internal")),new Gx(o,r.getProvider("app-check-internal")),cA(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),cr(cy,hy,e),cr(cy,hy,"esm2020")})();function tE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uR=tE,nE=new zo("auth","Firebase",tE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new nf("@firebase/auth");function cR(t,...e){Bl.logLevel<=se.WARN&&Bl.warn(`Auth (${oi}): ${t}`,...e)}function tl(t,...e){Bl.logLevel<=se.ERROR&&Bl.error(`Auth (${oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw Hf(t,...e)}function hn(t,...e){return Hf(t,...e)}function rE(t,e,n){const r={...uR(),[e]:n};return new zo("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return rE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nE.create(t,...e)}function Y(t,e,...n){if(!t)throw Hf(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function Dn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function hR(){return gy()==="http:"||gy()==="https:"}function gy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hR()||_1()||"connection"in navigator)?navigator.onLine:!0}function fR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=m1()||v1()}get(){return dR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gR=new Xo(3e4,6e4);function Au(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function di(t,e,n,r,s={}){return iE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Bo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return y1()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&$o(t.emulatorConfig.host)&&(h.credentials="include"),sE.fetch()(await aE(t,t.config.apiHost,n,l),h)})}async function iE(t,e,n){t._canInitEmulator=!1;const r={...pR,...e};try{const s=new yR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ma(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ma(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw rE(t,p,h);Pn(t,p)}}catch(s){if(s instanceof Vn)throw s;Pn(t,"network-request-failed",{message:String(s)})}}async function oE(t,e,n,r,s={}){const i=await di(t,e,n,r,s);return"mfaPendingCredential"in i&&Pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function aE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?qf(t.config,s):`${t.config.apiScheme}://${s}`;return mR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class yR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),gR.get())})}}function Ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=hn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(t,e){return di(t,"POST","/v1/accounts:delete",e)}async function $l(t,e){return di(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vR(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=Wf(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oo(bc(s.auth_time)),issuedAtTime:oo(bc(s.iat)),expirationTime:oo(bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function Wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const s=a0(n);return s?JSON.parse(s):(tl("Failed to decode base64 JWT payload"),null)}catch(s){return tl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yy(t){const e=Wf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&wR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hl(t){var g;const e=t.auth,n=await t.getIdToken(),r=await Mo(t,$l(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?lE(s.providerUserInfo):[],o=IR(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new td(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function TR(t){const e=He(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e){const n=await iE(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await aE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&$o(t.emulatorConfig.host)&&(u.credentials="include"),sE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xR(t,e){return di(t,"POST","/v2/accounts:revokeToken",Au(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=yy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await SR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Us;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new ER(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new td(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vR(this,e)}reload(){return TR(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await Mo(this,_R(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:g,emailVerified:_,isAnonymous:k,providerData:P,stsTokenManager:A}=n;Y(g&&A,e,"internal-error");const b=Us.fromJSON(this.name,A);Y(typeof g=="string",e,"internal-error"),$n(r,e.name),$n(s,e.name),Y(typeof _=="boolean",e,"internal-error"),Y(typeof k=="boolean",e,"internal-error"),$n(i,e.name),$n(o,e.name),$n(l,e.name),$n(u,e.name),$n(h,e.name),$n(p,e.name);const E=new qt({uid:g,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:h,lastLoginAt:p});return P&&Array.isArray(P)&&(E.providerData=P.map(T=>({...T}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Us;s.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Us;l.updateFromIdToken(r);const u=new qt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new td(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=new Map;function Tn(t){Dn(t instanceof Function,"Expected a class definition");let e=_y.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_y.set(t,e),e)}/**
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
 */class uE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uE.type="NONE";const vy=uE;/**
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
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nl(this.userKey,s.apiKey,i),this.fullPersistenceKey=nl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $l(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(Tn(vy),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Tn(vy);const o=nl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){let g;if(typeof p=="string"){const _=await $l(e,{idToken:p}).catch(()=>{});if(!_)break;g=await qt._fromGetAccountInfoResponse(e,_,p)}else g=qt._fromJSON(e,p);h!==i&&(l=g),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new zs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new zs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mE(e))return"Blackberry";if(gE(e))return"Webos";if(hE(e))return"Safari";if((e.includes("chrome/")||dE(e))&&!e.includes("edge/"))return"Chrome";if(pE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cE(t=lt()){return/firefox\//i.test(t)}function hE(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dE(t=lt()){return/crios\//i.test(t)}function fE(t=lt()){return/iemobile/i.test(t)}function pE(t=lt()){return/android/i.test(t)}function mE(t=lt()){return/blackberry/i.test(t)}function gE(t=lt()){return/webos/i.test(t)}function Gf(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AR(t=lt()){var e;return Gf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function CR(){return w1()&&document.documentMode===10}function yE(t=lt()){return Gf(t)||pE(t)||gE(t)||mE(t)||/windows phone/i.test(t)||fE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t,e=[]){let n;switch(t){case"Browser":n=wy(lt());break;case"Worker":n=`${wy(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oi}/${r}`}/**
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
 */class kR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function RR(t,e={}){return di(t,"GET","/v2/passwordPolicy",Au(t,e))}/**
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
 */const NR=6;class PR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??NR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ey(this),this.idTokenSubscription=new Ey(this),this.beforeStateQueue=new kR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $l(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ht(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(pr(this));const n=e?He(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RR(this),n=new PR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_E(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&cR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Cu(t){return He(t)}class Ey{constructor(e){this.auth=e,this.observer=null,this.addObserver=k1(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bR(t){Kf=t}function VR(t){return Kf.loadJS(t)}function MR(){return Kf.gapiScript}function OR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t,e){const n=sf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(es(i,e??{}))return s;Pn(s,"already-initialized")}return n.initialize({options:e})}function jR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FR(t,e,n){const r=Cu(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vE(e),{host:o,port:l}=UR(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(es(h,r.config.emulator)&&es(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,$o(o)?h0(`${i}//${o}${u}`):zR()}function vE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UR(t){const e=vE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ty(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ty(o)}}}function Ty(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e){return oE(t,"POST","/v1/accounts:signInWithIdp",Au(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="http://localhost";class is extends wE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bs(e,n)}buildRequest(){const e={requestUri:BR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends EE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Zo{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Zo{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Zo{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return oE(t,"POST","/v1/accounts:signUp",Au(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qt._fromIdTokenResponse(e,r,s),o=Iy(r);return new Sr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Iy(r);return new Sr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Iy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t){var s;if(Ht(t.app))return Promise.reject(pr(t));const e=Cu(t);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new Sr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await $R(e,{returnSecureToken:!0}),r=await Sr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Vn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ql(e,n,r,s)}}function TE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,i,e,r):i})}async function qR(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sr._forOperation(t,"link",r)}/**
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
 */async function WR(t,e,n=!1){const{auth:r}=t;if(Ht(r.app))return Promise.reject(pr(r));const s="reauthenticate";try{const i=await Mo(t,TE(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Wf(i.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Sr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(t,e,n=!1){if(Ht(t.app))return Promise.reject(pr(t));const r="signIn",s=await TE(t,r,e),i=await Sr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function KR(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function QR(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function YR(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function JR(t){return He(t).signOut()}const Wl="__sak";/**
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
 */class IE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wl,"1"),this.storage.removeItem(Wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=1e3,ZR=10;class SE extends IE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);CR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ZR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}SE.type="LOCAL";const e2=SE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE extends IE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xE.type="SESSION";const AE=xE;/**
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
 */function t2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ku{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ku(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await t2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ku.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class n2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Qf("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function r2(t){dn().location.href=t}/**
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
 */function CE(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function s2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function o2(){return CE()?self:null}/**
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
 */const kE="firebaseLocalStorageDb",a2=1,Gl="firebaseLocalStorage",RE="fbase_key";class ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ru(t,e){return t.transaction([Gl],e?"readwrite":"readonly").objectStore(Gl)}function l2(){const t=indexedDB.deleteDatabase(kE);return new ea(t).toPromise()}function nd(){const t=indexedDB.open(kE,a2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gl,{keyPath:RE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gl)?e(r):(r.close(),await l2(),e(await nd()))})})}async function Sy(t,e,n){const r=Ru(t,!0).put({[RE]:e,value:n});return new ea(r).toPromise()}async function u2(t,e){const n=Ru(t,!1).get(e),r=await new ea(n).toPromise();return r===void 0?null:r.value}function xy(t,e){const n=Ru(t,!0).delete(e);return new ea(n).toPromise()}const c2=800,h2=3;class NE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>h2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ku._getInstance(o2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await s2(),!this.activeServiceWorker)return;this.sender=new n2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||i2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await Sy(e,Wl,"1"),await xy(e,Wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>u2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ru(s,!1).getAll();return new ea(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NE.type="LOCAL";const d2=NE;new Xo(3e4,6e4);/**
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
 */function f2(t,e){return e?Tn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yf extends wE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p2(t){return GR(t.auth,new Yf(t),t.bypassAuthState)}function m2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),WR(n,new Yf(t),t.bypassAuthState)}async function g2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),qR(n,new Yf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p2;case"linkViaPopup":case"linkViaRedirect":return g2;case"reauthViaPopup":case"reauthViaRedirect":return m2;default:Pn(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new Xo(2e3,1e4);class Ps extends PE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,y2.get())};e()}}Ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="pendingRedirect",rl=new Map;class v2 extends PE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const r=await w2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w2(t,e){const n=I2(e),r=T2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function E2(t,e){rl.set(t._key(),e)}function T2(t){return Tn(t._redirectPersistence)}function I2(t){return nl(_2,t.config.apiKey,t.name)}async function S2(t,e,n=!1){if(Ht(t.app))return Promise.reject(pr(t));const r=Cu(t),s=f2(r,e),o=await new v2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=10*60*1e3;class A2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ay(e))}saveEventToCache(e){this.cachedEventUids.add(Ay(e)),this.lastProcessedEventTime=Date.now()}}function Ay(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(t,e={}){return di(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N2=/^https?/;async function P2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await k2(t);for(const n of e)try{if(D2(n))return}catch{}Pn(t,"unauthorized-domain")}function D2(t){const e=ed(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!N2.test(n))return!1;if(R2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const b2=new Xo(3e4,6e4);function Cy(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function V2(t){return new Promise((e,n)=>{var s,i,o;function r(){Cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cy(),n(hn(t,"network-request-failed"))},timeout:b2.get()})}if((i=(s=dn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=dn().gapi)!=null&&o.load)r();else{const l=OR("iframefcb");return dn()[l]=()=>{gapi.load?r():n(hn(t,"network-request-failed"))},VR(`${MR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw sl=null,e})}let sl=null;function M2(t){return sl=sl||V2(t),sl}/**
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
 */const O2=new Xo(5e3,15e3),L2="__/auth/iframe",j2="emulator/auth/iframe",F2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z2(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qf(e,j2):`https://${t.config.authDomain}/${L2}`,r={apiKey:e.apiKey,appName:t.name,v:oi},s=U2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bo(r).slice(1)}`}async function B2(t){const e=await M2(t),n=dn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:z2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},O2.get());function u(){dn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const $2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H2=500,q2=600,W2="_blank",G2="http://localhost";class ky{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K2(t,e,n,r=H2,s=q2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...$2,width:r.toString(),height:s.toString(),top:i,left:o},h=lt().toLowerCase();n&&(l=dE(h)?W2:n),cE(h)&&(e=e||G2,u.scrollbars="yes");const p=Object.entries(u).reduce((_,[k,P])=>`${_}${k}=${P},`,"");if(AR(h)&&l!=="_self")return Q2(e||"",l),new ky(null);const g=window.open(e||"",l,p);Y(g,t,"popup-blocked");try{g.focus()}catch{}return new ky(g)}function Q2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Y2="__/auth/handler",J2="emulator/auth/handler",X2=encodeURIComponent("fac");async function Ry(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:oi,eventId:s};if(e instanceof EE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",C1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof Zo){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${X2}=${encodeURIComponent(u)}`:"";return`${Z2(t)}?${Bo(l).slice(1)}${h}`}function Z2({config:t}){return t.emulator?qf(t,J2):`https://${t.authDomain}/${Y2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="webStorageSupport";class eN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=AE,this._completeRedirectFn=S2,this._overrideRedirectResult=E2}async _openPopup(e,n,r,s){var o;Dn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ry(e,n,r,ed(),s);return K2(e,i,Qf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ry(e,n,r,ed(),s);return r2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await B2(e),r=new A2(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vc,{type:Vc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Vc];i!==void 0&&n(!!i),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=P2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yE()||hE()||Gf()}}const tN=eN;var Ny="@firebase/auth",Py="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sN(t){Js(new ts("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_E(t)},h=new DR(r,s,i,u);return jR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Js(new ts("auth-internal",e=>{const n=Cu(e.getProvider("auth").getImmediate());return(r=>new nN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(Ny,Py,rN(t)),cr(Ny,Py,"esm2020")}/**
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
 */const iN=5*60,oN=c0("authIdTokenMaxAge")||iN;let Dy=null;const aN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oN)return;const s=n==null?void 0:n.token;Dy!==s&&(Dy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lN(t=m0()){const e=sf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LR(t,{popupRedirectResolver:tN,persistence:[d2,e2,AE]}),r=c0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=aN(i.toString());QR(n,o,()=>o(n.currentUser)),KR(n,l=>o(l))}}const s=l0("auth");return s&&FR(n,`http://${s}`),n}function uN(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}bR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=hn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sN("Browser");const bE={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},rt=bE.apiKey.trim().length>0;let VE,ME,by;if(rt){const t=p0(bE);VE=Wk(t),ME=lN(t),by=new yn,by.setCustomParameters({prompt:"select_account"})}const Vt=VE,Mc=ME;function cN(t,e){const n=sR(Zn(Vt,"surgeries"),iR("date","desc"));return eE(n,r=>t(r.docs.map(s=>({...s.data(),id:s.id}))),e)}async function hN(t){const{id:e,...n}=t;await zl(Zn(Vt,"surgeries"),{...n,createdAt:Gw()})}async function dN(t,e){const{id:n,...r}=e;await Xw(Yo(Vt,"surgeries",t),r)}async function fN(t){await Zw(Yo(Vt,"surgeries",t))}function pN(t){return eE(Zn(Vt,"suppliers"),e=>t(e.docs.map(n=>({...n.data(),id:n.id}))))}async function mN(t){const{id:e,...n}=t;await zl(Zn(Vt,"suppliers"),n)}async function gN(t,e){const{id:n,...r}=e;await Xw(Yo(Vt,"suppliers",t),r)}async function yN(t){await Zw(Yo(Vt,"suppliers",t))}async function _N(t,e){const[n,r]=await Promise.all([my(Zn(Vt,"surgeries")),my(Zn(Vt,"suppliers"))]),s=[];if(n.empty)for(const i of t){const{id:o,...l}=i;s.push(zl(Zn(Vt,"surgeries"),{...l,createdAt:Gw()}))}if(r.empty)for(const i of e){const{id:o,...l}=i;s.push(zl(Zn(Vt,"suppliers"),l))}await Promise.all(s)}const vN=[{id:1,name:"Dr. Marco Melgarejo",role:"Jefe de Servicio"},{id:2,name:"Dr. Carlos Rodríguez",role:"Médico Asistente"},{id:3,name:"Dra. Ana Martínez",role:"Médico Asistente"},{id:4,name:"Dr. Luis Hernández",role:"Médico Asistente"}],wN=[{id:1,name:"Dr. Pedro García"},{id:2,name:"Dra. Sofía López"},{id:3,name:"Dr. Miguel Torres"},{id:4,name:"Dra. Carmen Vásquez"},{id:5,name:"Dr. Andrés Morales"}],Oc=[{id:1,name:"Medtronic",specialty:"Columna, Cráneo, Neuromodulación",contact:"ventas@medtronic.cl"},{id:2,name:"Stryker",specialty:"Columna, Trauma, Implantes",contact:"info@stryker.cl"},{id:3,name:"DePuy Synthes",specialty:"Columna, Trauma",contact:"depuy@jnj.com"},{id:4,name:"NuVasive",specialty:"Columna Mínimamente Invasiva",contact:"nuvacl@nuvco.com"},{id:5,name:"Integra LifeSciences",specialty:"Neurocirugía, Craniofacial",contact:"integra@integra.cl"}],Vy=["Columna Cervical","Columna Torácica","Columna Lumbar","Columna Lumbosacra","Cráneo – Tumor","Cráneo – Vascular","Cráneo – Trauma","Nervio Periférico","Endoscopia","Funcional / Estereotaxia","Pediátrica","Otro"],ao={"Columna Cervical":"#0d9488","Columna Torácica":"#0891b2","Columna Lumbar":"#2563eb","Columna Lumbosacra":"#4f46e5","Cráneo – Tumor":"#7c3aed","Cráneo – Vascular":"#db2777","Cráneo – Trauma":"#dc2626","Nervio Periférico":"#d97706",Endoscopia:"#16a34a","Funcional / Estereotaxia":"#65a30d",Pediátrica:"#ca8a04",Otro:"#6b7280"},EN=["Hernia discal L4-L5 con radiculopatía","Hernia discal L5-S1 con radiculopatía","Hernia discal C5-C6","Hernia discal C6-C7","Estenosis del canal lumbar","Estenosis del canal cervical","Espondilolistesis lumbar degenerativa","Glioblastoma multiforme","Meningioma","Neurinoma del acústico","Metástasis cerebral","Hematoma subdural agudo","Hematoma epidural agudo","Hemorragia subaracnoidea","Fractura vertebral cervical","Fractura vertebral lumbar","Espondilodiscitis","Malformación arteriovenosa cerebral","Aneurisma cerebral","Hidrocefalia","Mielopatía cervical","TCE grave"],Lc=[{id:1,date:"2026-05-15",durationHours:"3",durationMinutes:"20",patientName:"Juan Carlos Pérez Soto",clinicalRecord:"HC-2026-0521",primaryDiagnosis:"Hernia discal L4-L5 con radiculopatía",secondaryDiagnosis:"Estenosis del canal lumbar",mainSurgeon:"Dr. Marco Melgarejo",residents:["Dr. Pedro García","Dra. Sofía López"],additionalAssistants:"Dr. Carlos Rodríguez",surgeryCategory:"Columna Lumbar",materialCompany:"Medtronic",screws:[{id:1,size:"5.5 x 40mm",quantity:"4"},{id:2,size:"5.5 x 45mm",quantity:"4"}],barsQuantity:"2",crosslinkUsed:!0,crosslinkQuantity:"2",titaniumMeshUsed:!1,titaniumMeshSpecs:"",otherInstruments:"Cage TLIF 10x22mm",observations:"Procedimiento sin complicaciones. Monitoreo neurofisiológico intraoperatorio normal."},{id:2,date:"2026-05-10",durationHours:"5",durationMinutes:"45",patientName:"María Elena Gutiérrez",clinicalRecord:"HC-2026-0498",primaryDiagnosis:"Glioblastoma multiforme frontal derecho",secondaryDiagnosis:"",mainSurgeon:"Dr. Marco Melgarejo",residents:["Dr. Miguel Torres"],additionalAssistants:"Dra. Ana Martínez",surgeryCategory:"Cráneo – Tumor",materialCompany:"Integra LifeSciences",screws:[],barsQuantity:"",crosslinkUsed:!1,crosslinkQuantity:"",titaniumMeshUsed:!0,titaniumMeshSpecs:"Malla 4x4cm para cranioplastía",otherInstruments:"Neuronavegación StealthStation, Microscopio Zeiss",observations:"Resección subtotal. Márgenes enviados a anatomía patológica. Sin déficit neurológico nuevo."},{id:3,date:"2026-05-05",durationHours:"4",durationMinutes:"10",patientName:"Roberto Sánchez Lima",clinicalRecord:"HC-2026-0477",primaryDiagnosis:"Fractura cervical C5-C6 con inestabilidad",secondaryDiagnosis:"Mielopatía cervical",mainSurgeon:"Dr. Carlos Rodríguez",residents:["Dra. Carmen Vásquez","Dr. Andrés Morales"],additionalAssistants:"",surgeryCategory:"Columna Cervical",materialCompany:"Stryker",screws:[{id:1,size:"3.5 x 14mm",quantity:"4"},{id:2,size:"3.5 x 16mm",quantity:"4"}],barsQuantity:"1",crosslinkUsed:!1,crosslinkQuantity:"",titaniumMeshUsed:!1,titaniumMeshSpecs:"",otherInstruments:"Placa cervical anterior Zero-P",observations:"Abordaje anterior. Discectomía C5-C6 con fusión intersomática. Evolución satisfactoria."},{id:4,date:"2026-04-28",durationHours:"2",durationMinutes:"30",patientName:"Carmen Rosa Villanueva",clinicalRecord:"HC-2026-0443",primaryDiagnosis:"Hematoma epidural agudo temporoparietal derecho",secondaryDiagnosis:"TCE grave",mainSurgeon:"Dra. Ana Martínez",residents:["Dr. Pedro García"],additionalAssistants:"",surgeryCategory:"Cráneo – Trauma",materialCompany:"Medtronic",screws:[],barsQuantity:"",crosslinkUsed:!1,crosslinkQuantity:"",titaniumMeshUsed:!1,titaniumMeshSpecs:"",otherInstruments:"Trépano, craneotomía temporoparietal",observations:"Evacuación de hematoma epidural 45cc. Evolución neurológica favorable post-op."},{id:5,date:"2026-04-15",durationHours:"4",durationMinutes:"50",patientName:"Luis Alberto Ramírez Cruz",clinicalRecord:"HC-2026-0412",primaryDiagnosis:"Espondilodiscitis lumbar L3-L4",secondaryDiagnosis:"Diabetes mellitus tipo 2",mainSurgeon:"Dr. Marco Melgarejo",residents:["Dr. Miguel Torres","Dra. Sofía López"],additionalAssistants:"Dr. Luis Hernández",surgeryCategory:"Columna Lumbar",materialCompany:"DePuy Synthes",screws:[{id:1,size:"6.0 x 45mm",quantity:"4"},{id:2,size:"6.0 x 50mm",quantity:"4"}],barsQuantity:"2",crosslinkUsed:!0,crosslinkQuantity:"1",titaniumMeshUsed:!0,titaniumMeshSpecs:"Cage vertebral expandible 26mm",otherInstruments:"Sistema ISOLA de fijación posterior",observations:"Desbridamiento y fusión instrumentada. Cultivos de disco enviados a laboratorio."},{id:6,date:"2026-03-22",durationHours:"3",durationMinutes:"0",patientName:"Valentina Ortiz Mora",clinicalRecord:"HC-2026-0356",primaryDiagnosis:"Meningioma convexidad parietal izquierda",secondaryDiagnosis:"",mainSurgeon:"Dr. Marco Melgarejo",residents:["Dr. Pedro García"],additionalAssistants:"Dra. Ana Martínez",surgeryCategory:"Cráneo – Tumor",materialCompany:"Integra LifeSciences",screws:[],barsQuantity:"",crosslinkUsed:!1,crosslinkQuantity:"",titaniumMeshUsed:!1,titaniumMeshSpecs:"",otherInstruments:"Microscopio OPMI Pentero, neuronavegación",observations:"Resección total Simpson I. Sin complicaciones. Alta a las 48h."}];function OE(t){if(!t)return"—";const[e,n,r]=t.split("-");return`${r}/${n}/${e}`}function LE(t){const e=parseInt(t.durationHours||0),n=parseInt(t.durationMinutes||0);return e===0?`${n} min`:n===0?`${e}h`:`${e}h ${n}min`}function TN(t){return parseInt(t.durationHours||0)*60+parseInt(t.durationMinutes||0)}function rd(t){return!t.screws||t.screws.length===0?0:t.screws.reduce((e,n)=>e+parseInt(n.quantity||0),0)}function sd(t){return t?t.slice(0,7):""}function IN(t){const[,e]=t.split("-");return["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"][parseInt(e)-1]||""}function SN(t){return t&&(t.startsWith("Columna")||t==="Otro")}function xN({toast:t,onClose:e}){const n={success:{bg:"bg-emerald-600",icon:f.jsx(KS,{className:"w-5 h-5 flex-shrink-0"})},error:{bg:"bg-red-600",icon:f.jsx(HS,{className:"w-5 h-5 flex-shrink-0"})},info:{bg:"bg-blue-600",icon:f.jsx(Jv,{className:"w-5 h-5 flex-shrink-0"})}},r=n[t.type]||n.success;return f.jsxs("div",{className:`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl text-white shadow-2xl max-w-sm ${r.bg}`,style:{animation:"slideUp .25s ease"},children:[r.icon,f.jsx("span",{className:"font-medium text-sm",children:t.message}),f.jsx("button",{onClick:e,className:"ml-1 opacity-70 hover:opacity-100 flex-shrink-0",children:f.jsx(Ys,{className:"w-4 h-4"})})]})}function Oa({icon:t,label:e,value:n,subtitle:r,accent:s="teal"}){const i={teal:"from-teal-500 to-teal-600",blue:"from-blue-500 to-blue-600",indigo:"from-indigo-500 to-indigo-600",violet:"from-violet-500 to-violet-600"};return f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex gap-4 items-start hover:shadow-md transition-shadow",children:[f.jsx("div",{className:`p-3 rounded-xl bg-gradient-to-br ${i[s]||i.teal} text-white shadow-sm flex-shrink-0`,children:t}),f.jsxs("div",{className:"min-w-0",children:[f.jsx("p",{className:"text-xs text-slate-500 font-semibold uppercase tracking-wide leading-tight",children:e}),f.jsx("p",{className:"text-2xl font-bold text-slate-800 mt-0.5 leading-tight",children:n}),r&&f.jsx("p",{className:"text-xs text-slate-400 mt-0.5 truncate",children:r})]})]})}function My({data:t,title:e}){const n=Math.max(...t.map(r=>r.value),1);return f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-5 h-full",children:[f.jsx("h3",{className:"text-sm font-semibold text-slate-700 mb-4",children:e}),t.length===0?f.jsx("p",{className:"text-sm text-slate-400 text-center py-8",children:"Sin datos disponibles"}):f.jsx("div",{className:"space-y-3",children:t.map((r,s)=>f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("span",{className:"text-xs text-slate-600 w-36 truncate flex-shrink-0 text-right leading-tight",children:r.label}),f.jsx("div",{className:"flex-1 bg-slate-100 rounded-full h-3 overflow-hidden",children:f.jsx("div",{className:"h-3 rounded-full transition-all duration-700",style:{width:`${r.value/n*100}%`,backgroundColor:r.color||"#0d9488"}})}),f.jsx("span",{className:"text-xs font-bold text-slate-700 w-5 text-right flex-shrink-0",children:r.value})]},s))})]})}function AN({data:t,title:e}){const n=Math.max(...t.map(l=>l.value),1),r=26,s=12,i=90,o=t.length*(r+s)-s;return f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-5",children:[f.jsx("h3",{className:"text-sm font-semibold text-slate-700 mb-4",children:e}),t.length===0?f.jsx("p",{className:"text-sm text-slate-400 text-center py-8",children:"Sin datos"}):f.jsx("div",{className:"overflow-x-auto",children:f.jsx("svg",{width:Math.max(o,260),height:i+32,className:"overflow-visible mx-auto block",children:t.map((l,u)=>{const h=Math.max(l.value/n*i,l.value>0?3:0),p=u*(r+s);return f.jsxs("g",{children:[f.jsx("rect",{x:p,y:i-h,width:r,height:h,rx:5,fill:l.color||"#0d9488",opacity:"0.85"}),l.value>0&&f.jsx("text",{x:p+r/2,y:i-h-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"700",children:l.value}),f.jsx("text",{x:p+r/2,y:i+16,textAnchor:"middle",fontSize:"10",fill:"#94a3b8",children:l.label})]},u)})})})]})}const CN=[{id:"dashboard",label:"Dashboard",icon:XS},{id:"new-surgery",label:"Nueva Cirugía",icon:e0},{id:"history",label:"Historial",icon:Yv},{id:"inventory",label:"Proveedores",icon:t1}];function kN({currentView:t,setCurrentView:e,open:n,setOpen:r,user:s,onSignOut:i}){return f.jsxs("aside",{className:`
      fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 flex flex-col
      transition-transform duration-300 ease-in-out
      lg:relative lg:translate-x-0 lg:flex-shrink-0
      ${n?"translate-x-0":"-translate-x-full"}
    `,children:[f.jsx("div",{className:"px-5 py-5 border-b border-slate-700/50 flex-shrink-0",children:f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg flex-shrink-0",children:f.jsx(Qv,{className:"w-5 h-5 text-white"})}),f.jsxs("div",{children:[f.jsx("p",{className:"text-white font-bold text-sm leading-tight",children:"NeuroGestión"}),f.jsx("p",{className:"text-slate-400 text-xs",children:"Svc. Neurocirugía"})]}),f.jsx("button",{onClick:()=>r(!1),className:"ml-auto lg:hidden text-slate-500 hover:text-white p-1",children:f.jsx(Ys,{className:"w-4 h-4"})})]})}),f.jsx("nav",{className:"flex-1 px-3 py-5 space-y-1 overflow-y-auto",children:CN.map(o=>{const l=o.icon,u=t===o.id;return f.jsxs("button",{onClick:()=>{e(o.id),r(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left
                ${u?"bg-teal-500/20 text-teal-400":"text-slate-400 hover:text-white hover:bg-slate-700/50"}`,children:[f.jsx(l,{className:"w-5 h-5 flex-shrink-0"}),f.jsx("span",{children:o.label}),u&&f.jsx(QS,{className:"w-3.5 h-3.5 ml-auto opacity-60"})]},o.id)})}),f.jsx("div",{className:"px-3 py-4 border-t border-slate-700/50 flex-shrink-0",children:f.jsxs("div",{className:"flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-800/60",children:[s!=null&&s.photoURL?f.jsx("img",{src:s.photoURL,alt:"",className:"w-8 h-8 rounded-full flex-shrink-0 ring-2 ring-teal-500/40",referrerPolicy:"no-referrer"}):f.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0",children:((s==null?void 0:s.displayName)||"MM").split(" ").map(o=>o[0]).join("").slice(0,2).toUpperCase()}),f.jsxs("div",{className:"min-w-0 flex-1",children:[f.jsx("p",{className:"text-white text-xs font-semibold truncate",children:(s==null?void 0:s.displayName)||"Dr. Marco Melgarejo"}),f.jsx("p",{className:"text-slate-500 text-xs truncate",children:(s==null?void 0:s.email)||"Jefe de Servicio"})]})]})})]})}function RN({setOpen:t,title:e}){return f.jsxs("header",{className:"bg-white border-b border-slate-200 px-4 md:px-6 py-3.5 flex items-center gap-4 flex-shrink-0 sticky top-0 z-10",children:[f.jsx("button",{onClick:()=>t(!0),className:"lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors",children:f.jsx(ZS,{className:"w-5 h-5"})}),f.jsxs("div",{className:"min-w-0",children:[f.jsx("p",{className:"font-bold text-slate-800 text-sm md:text-base truncate",children:e}),f.jsx("p",{className:"text-xs text-slate-400 hidden md:block",children:"Servicio Dr. Marco Melgarejo · Neurocirugía"})]}),f.jsxs("div",{className:"ml-auto flex items-center gap-2 flex-shrink-0",children:[f.jsx("span",{className:"hidden md:block text-xs text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full",children:new Date().toLocaleDateString("es-CL",{weekday:"short",day:"numeric",month:"short",year:"numeric"})}),f.jsx("button",{className:"p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors",children:f.jsx(WS,{className:"w-4 h-4"})})]})]})}function NN({surgeries:t,onNew:e}){const n=new Date,r=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`,s=String(n.getFullYear()),i=G.useMemo(()=>t.filter(A=>sd(A.date)===r),[t,r]),o=G.useMemo(()=>t.filter(A=>A.date&&A.date.startsWith(s)),[t,s]),l=G.useMemo(()=>i.length===0?0:Math.round(i.reduce((A,b)=>A+TN(b),0)/i.length),[i]),u=(()=>{const A=Math.floor(l/60),b=l%60;return A===0?`${b} min`:b===0?`${A}h`:`${A}h ${b}m`})(),h=G.useMemo(()=>i.reduce((A,b)=>A+rd(b),0),[i]),p=G.useMemo(()=>{const A={};return i.forEach(b=>{b.mainSurgeon&&(A[b.mainSurgeon]=(A[b.mainSurgeon]||0)+1)}),Object.entries(A).sort((b,E)=>E[1]-b[1])},[i]),g=G.useMemo(()=>{const A={};return o.forEach(b=>{b.surgeryCategory&&(A[b.surgeryCategory]=(A[b.surgeryCategory]||0)+1)}),Object.entries(A).sort((b,E)=>E[1]-b[1]).map(([b,E])=>({label:b,value:E,color:ao[b]||"#6b7280"}))},[o]),_=G.useMemo(()=>{const A={};return o.forEach(b=>{b.materialCompany&&(A[b.materialCompany]=(A[b.materialCompany]||0)+1)}),Object.entries(A).sort((b,E)=>E[1]-b[1]).map(([b,E])=>({label:b,value:E,color:"#3b82f6"}))},[o]),k=G.useMemo(()=>Array.from({length:6},(A,b)=>{const E=new Date(n.getFullYear(),n.getMonth()-(5-b),1),T=`${E.getFullYear()}-${String(E.getMonth()+1).padStart(2,"0")}`;return{label:IN(T),value:t.filter(C=>sd(C.date)===T).length,color:"#0d9488"}}),[t]),P=G.useMemo(()=>[...t].sort((A,b)=>(b.date||"").localeCompare(A.date||"")).slice(0,5),[t]);return f.jsxs("div",{className:"space-y-6 pb-10",children:[f.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[f.jsxs("div",{children:[f.jsx("h1",{className:"text-xl font-bold text-slate-800",children:"Panel de Control"}),f.jsx("p",{className:"text-sm text-slate-500 mt-0.5",children:"Resumen del Servicio de Neurocirugía"})]}),f.jsxs("button",{onClick:e,className:"flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all self-start sm:self-auto",children:[f.jsx(e0,{className:"w-4 h-4"}),"Nueva Cirugía"]})]}),f.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4",children:[f.jsx(Oa,{icon:f.jsx($S,{className:"w-5 h-5"}),label:"Cirugías este mes",value:i.length,subtitle:`${o.length} en ${s}`,accent:"teal"}),f.jsx(Oa,{icon:f.jsx(YS,{className:"w-5 h-5"}),label:"Duración promedio",value:u,subtitle:"Por cirugía este mes",accent:"blue"}),f.jsx(Oa,{icon:f.jsx(r1,{className:"w-5 h-5"}),label:"Cirujano más activo",value:p[0]?p[0][1]:"—",subtitle:p[0]?p[0][0]:"Sin datos",accent:"indigo"}),f.jsx(Oa,{icon:f.jsx(cu,{className:"w-5 h-5"}),label:"Tornillos este mes",value:h,subtitle:"Total unidades usadas",accent:"violet"})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[f.jsx("div",{className:"lg:col-span-2",children:f.jsx(My,{title:`Cirugías por categoría (${s})`,data:g.slice(0,8)})}),f.jsx(AN,{title:"Tendencia 6 meses",data:k})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-5",children:[f.jsxs("h3",{className:"text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2",children:[f.jsx(tf,{className:"w-4 h-4 text-teal-500"})," Cirujanos este mes"]}),p.length===0?f.jsx("p",{className:"text-sm text-slate-400 py-6 text-center",children:"Sin cirugías este mes"}):p.map(([A,b],E)=>{var T;return f.jsxs("div",{className:"flex items-center gap-3 py-2.5 border-b border-slate-50 last:border-0",children:[f.jsx("span",{className:`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                  ${E===0?"bg-teal-100 text-teal-700":"bg-slate-100 text-slate-500"}`,children:E+1}),f.jsx("span",{className:"flex-1 text-sm text-slate-700 truncate",children:A}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:"w-20 bg-slate-100 rounded-full h-1.5",children:f.jsx("div",{className:"h-1.5 rounded-full bg-teal-500",style:{width:`${b/(((T=p[0])==null?void 0:T[1])||1)*100}%`}})}),f.jsx("span",{className:"text-sm font-bold text-slate-800 w-5 text-right",children:b})]})]},A)})]}),f.jsx(My,{title:`Empresas proveedoras (${s})`,data:_.slice(0,5)})]}),f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-5",children:[f.jsxs("h3",{className:"text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2",children:[f.jsx(ef,{className:"w-4 h-4 text-teal-500"})," Últimas cirugías registradas"]}),f.jsx("div",{className:"overflow-x-auto -mx-5 px-5",children:f.jsxs("table",{className:"w-full text-sm min-w-[500px]",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"text-xs text-slate-400 uppercase tracking-wide border-b border-slate-100",children:[f.jsx("th",{className:"pb-2 text-left font-semibold",children:"Fecha"}),f.jsx("th",{className:"pb-2 text-left font-semibold",children:"Paciente"}),f.jsx("th",{className:"pb-2 text-left font-semibold hidden md:table-cell",children:"Categoría"}),f.jsx("th",{className:"pb-2 text-left font-semibold hidden lg:table-cell",children:"Cirujano"}),f.jsx("th",{className:"pb-2 text-right font-semibold",children:"Duración"})]})}),f.jsxs("tbody",{children:[P.map(A=>f.jsxs("tr",{className:"border-b border-slate-50 hover:bg-slate-50/60 transition-colors",children:[f.jsx("td",{className:"py-2.5 text-slate-500 whitespace-nowrap",children:OE(A.date)}),f.jsx("td",{className:"py-2.5 font-medium text-slate-800 max-w-[180px] truncate",children:A.patientName}),f.jsx("td",{className:"py-2.5 hidden md:table-cell",children:f.jsx("span",{className:"px-2.5 py-1 rounded-full text-xs font-medium",style:{backgroundColor:(ao[A.surgeryCategory]||"#6b7280")+"20",color:ao[A.surgeryCategory]||"#6b7280"},children:A.surgeryCategory||"—"})}),f.jsx("td",{className:"py-2.5 text-slate-500 hidden lg:table-cell truncate max-w-[160px]",children:A.mainSurgeon}),f.jsx("td",{className:"py-2.5 text-slate-500 text-right whitespace-nowrap",children:LE(A)})]},A.id)),P.length===0&&f.jsx("tr",{children:f.jsx("td",{colSpan:5,className:"py-8 text-center text-slate-400",children:"No hay cirugías registradas"})})]})]})})]})]})}function ji({title:t,icon:e,children:n,accent:r="teal"}){const s={teal:"border-l-teal-500 bg-teal-50/60 text-teal-800",blue:"border-l-blue-500 bg-blue-50/60 text-blue-800",indigo:"border-l-indigo-500 bg-indigo-50/60 text-indigo-800",violet:"border-l-violet-500 bg-violet-50/60 text-violet-800",slate:"border-l-slate-400 bg-slate-50/80 text-slate-700"};return f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden",children:[f.jsxs("div",{className:`flex items-center gap-2 px-5 py-3.5 border-l-[3px] ${s[r]||s.teal}`,children:[e,f.jsx("h3",{className:"font-semibold text-sm",children:t})]}),f.jsx("div",{className:"p-5 space-y-4",children:n})]})}function We({label:t,required:e,hint:n,children:r}){return f.jsxs("div",{children:[f.jsxs("label",{className:"block text-xs font-semibold text-slate-600 mb-1.5 leading-tight",children:[t,e&&f.jsx("span",{className:"text-red-500 ml-0.5",children:"*"})]}),r,n&&f.jsx("p",{className:"text-xs text-slate-400 mt-1",children:n})]})}const ye="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all placeholder:text-slate-300 bg-white",ps="border-red-400 focus:ring-red-400/30 focus:border-red-400";function PN({onSave:t,editData:e,onCancel:n,surgeons:r,residents:s,suppliers:i,categories:o}){const[l,u]=G.useState(()=>e?{...e}:{date:new Date().toISOString().split("T")[0],durationHours:"2",durationMinutes:"0",patientName:"",clinicalRecord:"",primaryDiagnosis:"",secondaryDiagnosis:"",mainSurgeon:"",residents:[],additionalAssistants:"",surgeryCategory:"",materialCompany:"",screws:[{id:Date.now(),size:"",quantity:"1"}],barsQuantity:"",crosslinkUsed:!1,crosslinkQuantity:"",titaniumMeshUsed:!1,titaniumMeshSpecs:"",otherInstruments:"",observations:""}),[h,p]=G.useState({}),[g,_]=G.useState([]),[k,P]=G.useState(!1),A=(m,v)=>u(S=>({...S,[m]:v})),b=m=>A("residents",l.residents.includes(m)?l.residents.filter(v=>v!==m):[...l.residents,m]),E=()=>A("screws",[...l.screws,{id:Date.now(),size:"",quantity:"1"}]),T=m=>A("screws",l.screws.filter(v=>v.id!==m)),C=(m,v,S)=>A("screws",l.screws.map(x=>x.id===m?{...x,[v]:S}:x)),R=m=>{if(A("primaryDiagnosis",m),m.length>1){const v=EN.filter(S=>S.toLowerCase().includes(m.toLowerCase())).slice(0,5);_(v),P(v.length>0)}else P(!1)},L=()=>{const m={};return l.date||(m.date="Requerido"),l.patientName.trim()||(m.patientName="Requerido"),l.clinicalRecord.trim()||(m.clinicalRecord="Requerido"),l.primaryDiagnosis.trim()||(m.primaryDiagnosis="Requerido"),l.mainSurgeon||(m.mainSurgeon="Requerido"),l.surgeryCategory||(m.surgeryCategory="Requerido"),p(m),Object.keys(m).length===0},F=m=>{m.preventDefault(),L()&&t(l)},w=SN(l.surgeryCategory);return f.jsxs("form",{onSubmit:F,className:"space-y-4 pb-10 max-w-4xl mx-auto",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("button",{type:"button",onClick:n,className:"p-2 rounded-xl text-slate-500 hover:bg-slate-200 transition-colors flex-shrink-0",children:f.jsx(qS,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-xl font-bold text-slate-800",children:e?"Editar Cirugía":"Registrar Nueva Cirugía"}),f.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Campos marcados con (*) son obligatorios"})]})]}),f.jsxs(ji,{title:"Datos Generales del Procedimiento",icon:f.jsx(GS,{className:"w-4 h-4"}),accent:"teal",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[f.jsxs(We,{label:"Fecha de la cirugía",required:!0,children:[f.jsx("input",{type:"date",value:l.date,onChange:m=>A("date",m.target.value),className:`${ye} ${h.date?ps:""}`}),h.date&&f.jsx("p",{className:"text-xs text-red-500 mt-1",children:h.date})]}),f.jsx(We,{label:"Duración de la cirugía",children:f.jsxs("div",{className:"flex gap-2",children:[f.jsx("select",{value:l.durationHours,onChange:m=>A("durationHours",m.target.value),className:`${ye} flex-1`,children:Array.from({length:13},(m,v)=>f.jsxs("option",{value:v,children:[v,"h"]},v))}),f.jsx("select",{value:l.durationMinutes,onChange:m=>A("durationMinutes",m.target.value),className:`${ye} flex-1`,children:[0,5,10,15,20,25,30,35,40,45,50,55].map(m=>f.jsxs("option",{value:m,children:[m," min"]},m))})]})}),f.jsxs(We,{label:"Nombre del paciente",required:!0,children:[f.jsx("input",{type:"text",placeholder:"Apellido(s), Nombre(s)",value:l.patientName,onChange:m=>A("patientName",m.target.value),className:`${ye} ${h.patientName?ps:""}`}),h.patientName&&f.jsx("p",{className:"text-xs text-red-500 mt-1",children:h.patientName})]}),f.jsxs(We,{label:"Historia Clínica N°",required:!0,children:[f.jsx("input",{type:"text",placeholder:"HC-2026-XXXX",value:l.clinicalRecord,onChange:m=>A("clinicalRecord",m.target.value),className:`${ye} ${h.clinicalRecord?ps:""}`}),h.clinicalRecord&&f.jsx("p",{className:"text-xs text-red-500 mt-1",children:h.clinicalRecord})]})]}),f.jsx("div",{className:"relative",children:f.jsxs(We,{label:"Diagnóstico principal",required:!0,children:[f.jsx("input",{type:"text",placeholder:"Escribir o buscar diagnóstico...",value:l.primaryDiagnosis,onChange:m=>R(m.target.value),onBlur:()=>setTimeout(()=>P(!1),150),className:`${ye} ${h.primaryDiagnosis?ps:""}`}),h.primaryDiagnosis&&f.jsx("p",{className:"text-xs text-red-500 mt-1",children:h.primaryDiagnosis}),k&&f.jsx("div",{className:"absolute z-10 left-0 right-0 top-full bg-white border border-slate-200 rounded-xl shadow-xl mt-1 overflow-hidden",children:g.map(m=>f.jsx("button",{type:"button",onMouseDown:()=>{A("primaryDiagnosis",m),P(!1)},className:"w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-teal-50 border-b border-slate-50 last:border-0 transition-colors",children:m},m))})]})}),f.jsx(We,{label:"Diagnóstico secundario / comorbilidades",children:f.jsx("input",{type:"text",placeholder:"Opcional",value:l.secondaryDiagnosis,onChange:m=>A("secondaryDiagnosis",m.target.value),className:ye})})]}),f.jsxs(ji,{title:"Equipo Quirúrgico",icon:f.jsx(tf,{className:"w-4 h-4"}),accent:"blue",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[f.jsxs(We,{label:"Cirujano principal",required:!0,children:[f.jsxs("select",{value:l.mainSurgeon,onChange:m=>A("mainSurgeon",m.target.value),className:`${ye} ${h.mainSurgeon?ps:""}`,children:[f.jsx("option",{value:"",children:"Seleccionar cirujano..."}),r.map(m=>f.jsxs("option",{value:m.name,children:[m.name," · ",m.role]},m.id))]}),h.mainSurgeon&&f.jsx("p",{className:"text-xs text-red-500 mt-1",children:h.mainSurgeon})]}),f.jsx(We,{label:"Otros asistentes",children:f.jsx("input",{type:"text",placeholder:"Ej: Dra. Torres, Enf. Ramos",value:l.additionalAssistants,onChange:m=>A("additionalAssistants",m.target.value),className:ye})})]}),f.jsx(We,{label:"Médicos residentes participantes",children:f.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2 mt-0.5",children:s.map(m=>{const v=l.residents.includes(m.name);return f.jsxs("label",{className:`flex items-center gap-2.5 px-3 py-2 rounded-xl border cursor-pointer transition-all text-sm select-none
                  ${v?"border-teal-400 bg-teal-50 text-teal-800":"border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`,children:[f.jsx("input",{type:"checkbox",className:"sr-only",checked:v,onChange:()=>b(m.name)}),f.jsx("span",{className:`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors
                    ${v?"bg-teal-500 border-teal-500":"border-slate-300 bg-white"}`,children:v&&f.jsx(Zd,{className:"w-2.5 h-2.5 text-white"})}),f.jsx("span",{className:"truncate text-xs font-medium",children:m.name.replace(/Dr[a]?\. /,"")})]},m.id)})})})]}),f.jsx(ji,{title:"Clasificación de la Cirugía",icon:f.jsx(r0,{className:"w-4 h-4"}),accent:"indigo",children:f.jsxs(We,{label:"Categoría quirúrgica",required:!0,children:[f.jsxs("select",{value:l.surgeryCategory,onChange:m=>A("surgeryCategory",m.target.value),className:`${ye} ${h.surgeryCategory?ps:""}`,children:[f.jsx("option",{value:"",children:"Seleccionar categoría..."}),o.map(m=>f.jsx("option",{value:m,children:m},m))]}),h.surgeryCategory&&f.jsx("p",{className:"text-xs text-red-500 mt-1",children:h.surgeryCategory})]})}),f.jsxs(ji,{title:"Material de Osteosíntesis e Instrumental",icon:f.jsx(cu,{className:"w-4 h-4"}),accent:"violet",children:[!w&&f.jsxs("p",{className:"text-xs text-slate-400 flex items-center gap-1.5",children:[f.jsx(Jv,{className:"w-3.5 h-3.5 flex-shrink-0"}),"Seleccione categoría de columna para activar campos de material específico. Puede registrar instrumental libre abajo."]}),f.jsx(We,{label:"Empresa proveedora del material",children:f.jsxs("select",{value:l.materialCompany,onChange:m=>A("materialCompany",m.target.value),className:ye,children:[f.jsx("option",{value:"",children:"Sin material / No aplica"}),i.map(m=>f.jsx("option",{value:m.name,children:m.name},m.id))]})}),w&&f.jsxs(f.Fragment,{children:[f.jsx(We,{label:"Tornillos utilizados",hint:"Agregue una fila por cada medida diferente",children:f.jsxs("div",{className:"space-y-2",children:[l.screws.map(m=>f.jsxs("div",{className:"flex gap-2 items-center",children:[f.jsx("input",{type:"text",placeholder:"Medida (ej: 5.5 x 40mm)",value:m.size,onChange:v=>C(m.id,"size",v.target.value),className:`${ye} flex-1`}),f.jsx("input",{type:"number",placeholder:"Cant.",min:"0",value:m.quantity,onChange:v=>C(m.id,"quantity",v.target.value),className:`${ye} w-20 text-center`}),f.jsx("button",{type:"button",onClick:()=>T(m.id),disabled:l.screws.length===1,className:"p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0 disabled:opacity-30",children:f.jsx(e1,{className:"w-4 h-4"})})]},m.id)),f.jsxs("button",{type:"button",onClick:E,className:"flex items-center gap-1.5 text-teal-600 hover:text-teal-700 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-teal-50 transition-colors",children:[f.jsx(t0,{className:"w-4 h-4"})," Agregar medida"]})]})}),f.jsx(We,{label:"Barras / varillas (cantidad)",children:f.jsx("input",{type:"number",placeholder:"0",min:"0",value:l.barsQuantity,onChange:m=>A("barsQuantity",m.target.value),className:`${ye} w-32`})}),f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[f.jsxs("button",{type:"button",onClick:()=>A("crosslinkUsed",!l.crosslinkUsed),className:"flex items-center gap-2.5 select-none cursor-pointer",children:[f.jsx("div",{className:`w-10 h-6 rounded-full px-1 flex items-center transition-colors duration-200 flex-shrink-0
                    ${l.crosslinkUsed?"bg-teal-500":"bg-slate-300"}`,children:f.jsx("div",{className:`w-4 h-4 bg-white rounded-full shadow transition-transform duration-200
                      ${l.crosslinkUsed?"translate-x-4":"translate-x-0"}`})}),f.jsx("span",{className:"text-sm text-slate-700 font-medium",children:"Uso de Crosslink"})]}),l.crosslinkUsed&&f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-xs text-slate-500",children:"Cantidad:"}),f.jsx("input",{type:"number",min:"0",value:l.crosslinkQuantity,onChange:m=>A("crosslinkQuantity",m.target.value),className:`${ye} w-20 text-center`,placeholder:"0"})]})]}),f.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[f.jsxs("button",{type:"button",onClick:()=>A("titaniumMeshUsed",!l.titaniumMeshUsed),className:"flex items-center gap-2.5 select-none cursor-pointer",children:[f.jsx("div",{className:`w-10 h-6 rounded-full px-1 flex items-center transition-colors duration-200 flex-shrink-0
                    ${l.titaniumMeshUsed?"bg-teal-500":"bg-slate-300"}`,children:f.jsx("div",{className:`w-4 h-4 bg-white rounded-full shadow transition-transform duration-200
                      ${l.titaniumMeshUsed?"translate-x-4":"translate-x-0"}`})}),f.jsx("span",{className:"text-sm text-slate-700 font-medium",children:"Malla de Titanio"})]}),l.titaniumMeshUsed&&f.jsx("input",{type:"text",placeholder:"Especificaciones...",value:l.titaniumMeshSpecs,onChange:m=>A("titaniumMeshSpecs",m.target.value),className:`${ye} flex-1 min-w-[180px]`})]})]})]}),f.jsx(We,{label:"Otro instrumental / equipamiento",children:f.jsx("input",{type:"text",placeholder:"Ej: Neuronavegación, microscopio, cage, placa...",value:l.otherInstruments,onChange:m=>A("otherInstruments",m.target.value),className:ye})})]}),f.jsx(ji,{title:"Observaciones Clínicas",icon:f.jsx(ef,{className:"w-4 h-4"}),accent:"slate",children:f.jsx("textarea",{rows:4,value:l.observations,onChange:m=>A("observations",m.target.value),placeholder:"Notas relevantes, incidencias intraoperatorias, evolución postoperatoria inmediata, instrucciones especiales...",className:`${ye} resize-none`})}),f.jsxs("div",{className:"flex gap-3 justify-end pt-2",children:[f.jsx("button",{type:"button",onClick:n,className:"px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors",children:"Cancelar"}),f.jsxs("button",{type:"submit",className:"flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all",children:[f.jsx(n0,{className:"w-4 h-4"}),e?"Guardar cambios":"Registrar cirugía"]})]})]})}function DN({surgeries:t,onEdit:e,onDelete:n,categories:r}){const[s,i]=G.useState(""),[o,l]=G.useState(""),[u,h]=G.useState(""),[p,g]=G.useState(""),[_,k]=G.useState(null),[P,A]=G.useState(null),b=G.useMemo(()=>[...new Set(t.map(R=>R.mainSurgeon).filter(Boolean))].sort(),[t]),E=G.useMemo(()=>{let R=[...t].sort((L,F)=>(F.date||"").localeCompare(L.date||""));if(s){const L=s.toLowerCase();R=R.filter(F=>{var w,m,v,S;return((w=F.patientName)==null?void 0:w.toLowerCase().includes(L))||((m=F.clinicalRecord)==null?void 0:m.toLowerCase().includes(L))||((v=F.primaryDiagnosis)==null?void 0:v.toLowerCase().includes(L))||((S=F.mainSurgeon)==null?void 0:S.toLowerCase().includes(L))})}return o&&(R=R.filter(L=>L.surgeryCategory===o)),u&&(R=R.filter(L=>L.mainSurgeon===u)),p&&(R=R.filter(L=>sd(L.date)===p)),R},[t,s,o,u,p]),T=()=>{i(""),l(""),h(""),g("")},C=s||o||u||p;return f.jsxs("div",{className:"space-y-5 pb-10",children:[f.jsxs("div",{children:[f.jsx("h1",{className:"text-xl font-bold text-slate-800",children:"Historial de Cirugías"}),f.jsxs("p",{className:"text-sm text-slate-500 mt-0.5",children:[E.length," resultado",E.length!==1?"s":""," · ",t.length," total registrado",t.length!==1?"s":""]})]}),f.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-4",children:f.jsxs("div",{className:"flex flex-wrap gap-3",children:[f.jsxs("div",{className:"flex-1 min-w-[200px] relative",children:[f.jsx(n1,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),f.jsx("input",{type:"text",placeholder:"Buscar paciente, HC, diagnóstico...",value:s,onChange:R=>i(R.target.value),className:`${ye} pl-9`})]}),f.jsxs("select",{value:o,onChange:R=>l(R.target.value),className:`${ye} flex-1 min-w-[150px]`,children:[f.jsx("option",{value:"",children:"Todas las categorías"}),r.map(R=>f.jsx("option",{value:R,children:R},R))]}),f.jsxs("select",{value:u,onChange:R=>h(R.target.value),className:`${ye} flex-1 min-w-[150px]`,children:[f.jsx("option",{value:"",children:"Todos los cirujanos"}),b.map(R=>f.jsx("option",{value:R,children:R},R))]}),f.jsx("input",{type:"month",value:p,onChange:R=>g(R.target.value),className:`${ye} w-40`}),C&&f.jsxs("button",{onClick:T,className:"flex items-center gap-1.5 text-sm text-slate-500 hover:text-red-600 px-3 py-2 rounded-xl hover:bg-red-50 border border-slate-200 transition-colors flex-shrink-0",children:[f.jsx(Ys,{className:"w-4 h-4"})," Limpiar"]})]})}),f.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden",children:E.length===0?f.jsxs("div",{className:"py-16 text-center",children:[f.jsx(Yv,{className:"w-10 h-10 text-slate-300 mx-auto mb-3"}),f.jsx("p",{className:"text-slate-500 font-medium",children:"Sin resultados"}),f.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Intente ajustar los filtros de búsqueda"})]}):f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"w-full text-sm min-w-[580px]",children:[f.jsx("thead",{className:"bg-slate-50 border-b border-slate-100",children:f.jsxs("tr",{className:"text-xs text-slate-500 uppercase tracking-wide",children:[f.jsx("th",{className:"px-4 py-3 text-left font-semibold",children:"Fecha"}),f.jsx("th",{className:"px-4 py-3 text-left font-semibold",children:"Paciente / HC"}),f.jsx("th",{className:"px-4 py-3 text-left font-semibold hidden md:table-cell",children:"Categoría"}),f.jsx("th",{className:"px-4 py-3 text-left font-semibold hidden lg:table-cell",children:"Cirujano"}),f.jsx("th",{className:"px-4 py-3 text-center font-semibold hidden xl:table-cell",children:"Duración"}),f.jsx("th",{className:"px-4 py-3 text-right font-semibold",children:"Acciones"})]})}),f.jsx("tbody",{className:"divide-y divide-slate-50",children:E.map(R=>{var L,F;return f.jsxs(RT.Fragment,{children:[f.jsxs("tr",{onClick:()=>A(P===R.id?null:R.id),className:`transition-colors cursor-pointer ${P===R.id?"bg-slate-50":"hover:bg-slate-50/70"}`,children:[f.jsx("td",{className:"px-4 py-3.5 text-slate-500 font-medium whitespace-nowrap",children:OE(R.date)}),f.jsxs("td",{className:"px-4 py-3.5 max-w-[200px]",children:[f.jsx("p",{className:"font-semibold text-slate-800 truncate",children:R.patientName}),f.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:R.clinicalRecord})]}),f.jsx("td",{className:"px-4 py-3.5 hidden md:table-cell",children:R.surgeryCategory&&f.jsx("span",{className:"px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap",style:{backgroundColor:(ao[R.surgeryCategory]||"#6b7280")+"20",color:ao[R.surgeryCategory]||"#6b7280"},children:R.surgeryCategory})}),f.jsx("td",{className:"px-4 py-3.5 text-slate-600 hidden lg:table-cell truncate max-w-[160px]",children:R.mainSurgeon}),f.jsx("td",{className:"px-4 py-3.5 text-slate-500 text-center hidden xl:table-cell whitespace-nowrap",children:LE(R)}),f.jsx("td",{className:"px-4 py-3.5 text-right",onClick:w=>w.stopPropagation(),children:f.jsxs("div",{className:"flex gap-1 justify-end",children:[f.jsx("button",{onClick:()=>e(R),className:"p-2 text-blue-400 hover:bg-blue-50 rounded-lg transition-colors",title:"Editar",children:f.jsx(Zv,{className:"w-4 h-4"})}),_===R.id?f.jsxs("div",{className:"flex gap-1",children:[f.jsx("button",{onClick:()=>{n(R.id),k(null)},className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:f.jsx(Zd,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>k(null),className:"p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors",children:f.jsx(Ys,{className:"w-4 h-4"})})]}):f.jsx("button",{onClick:()=>k(R.id),className:"p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors",title:"Eliminar",children:f.jsx(s0,{className:"w-4 h-4"})})]})})]}),P===R.id&&f.jsx("tr",{children:f.jsx("td",{colSpan:6,className:"px-4 pb-4 pt-2 bg-slate-50/80",children:f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 text-xs",children:[f.jsxs("div",{className:"bg-white rounded-xl p-3.5 border border-slate-100",children:[f.jsxs("p",{className:"font-semibold text-slate-500 mb-2 flex items-center gap-1.5",children:[f.jsx(r0,{className:"w-3.5 h-3.5"})," Diagnósticos"]}),f.jsx("p",{className:"text-slate-800 font-medium",children:R.primaryDiagnosis}),R.secondaryDiagnosis&&f.jsx("p",{className:"text-slate-500 mt-1",children:R.secondaryDiagnosis})]}),f.jsxs("div",{className:"bg-white rounded-xl p-3.5 border border-slate-100",children:[f.jsxs("p",{className:"font-semibold text-slate-500 mb-2 flex items-center gap-1.5",children:[f.jsx(tf,{className:"w-3.5 h-3.5"})," Equipo"]}),f.jsx("p",{className:"text-slate-800 font-medium",children:R.mainSurgeon}),((L=R.residents)==null?void 0:L.length)>0&&f.jsxs("p",{className:"text-slate-500 mt-1",children:["Res: ",R.residents.join(", ")]}),R.additionalAssistants&&f.jsxs("p",{className:"text-slate-500 mt-0.5",children:["Asist: ",R.additionalAssistants]})]}),f.jsxs("div",{className:"bg-white rounded-xl p-3.5 border border-slate-100",children:[f.jsxs("p",{className:"font-semibold text-slate-500 mb-2 flex items-center gap-1.5",children:[f.jsx(cu,{className:"w-3.5 h-3.5"})," Material"]}),R.materialCompany?f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"text-slate-800 font-medium",children:R.materialCompany}),((F=R.screws)==null?void 0:F.length)>0&&rd(R)>0&&f.jsxs("p",{className:"text-slate-500 mt-1",children:["Tornillos: ",rd(R)," uds — ",R.screws.filter(w=>w.size).map(w=>`${w.size}×${w.quantity}`).join(", ")]}),R.barsQuantity&&R.barsQuantity!=="0"&&f.jsxs("p",{className:"text-slate-500",children:["Barras: ",R.barsQuantity]}),R.crosslinkUsed&&f.jsxs("p",{className:"text-slate-500",children:["Crosslink: ",R.crosslinkQuantity||1," ud."]}),R.titaniumMeshUsed&&f.jsxs("p",{className:"text-slate-500",children:["Malla Ti: ",R.titaniumMeshSpecs||"Sí"]})]}):f.jsx("p",{className:"text-slate-400",children:"Sin material registrado"}),R.otherInstruments&&f.jsx("p",{className:"text-slate-500 mt-1",children:R.otherInstruments})]}),R.observations&&f.jsxs("div",{className:"sm:col-span-2 xl:col-span-3 bg-amber-50 rounded-xl p-3.5 border border-amber-100",children:[f.jsxs("p",{className:"font-semibold text-amber-700 mb-1.5 flex items-center gap-1.5",children:[f.jsx(ef,{className:"w-3.5 h-3.5"})," Observaciones"]}),f.jsx("p",{className:"text-amber-900 leading-relaxed",children:R.observations})]})]})})})]},R.id)})})]})})})]})}const bN=[{icon:"🔩",label:"Tornillos pediculares",desc:"Fijación posterior columna"},{icon:"📏",label:"Barras Ti / CrCo",desc:"Varillas para sistemas de fijación"},{icon:"⬛",label:"Cages / Implantes",desc:"TLIF, PLIF, ALIF, cervicales"},{icon:"🔲",label:"Placas cervicales",desc:"Fijación anterior cervical"},{icon:"🟦",label:"Mallas de titanio",desc:"Cranioplastía y craneotomía"},{icon:"📡",label:"Neuronavegación",desc:"Guía intraoperatoria por imagen"},{icon:"🔗",label:"Crosslinks",desc:"Conectores transversales"},{icon:"🧬",label:"Parche dural",desc:"Expansores de duramadre"}];function VN({suppliers:t,onAdd:e,onUpdate:n,onDelete:r}){const[s,i]=G.useState(!1),[o,l]=G.useState(null),[u,h]=G.useState({name:"",specialty:"",contact:""}),[p,g]=G.useState(null),[_,k]=G.useState(!1),P=()=>{h({name:"",specialty:"",contact:""}),l(null),i(!0)},A=E=>{h({name:E.name,specialty:E.specialty,contact:E.contact}),l(E.id),i(!0)},b=async()=>{if(u.name.trim()){k(!0);try{o?await n(o,u):await e(u),i(!1),l(null)}finally{k(!1)}}};return f.jsxs("div",{className:"space-y-5 pb-10",children:[f.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[f.jsxs("div",{children:[f.jsx("h1",{className:"text-xl font-bold text-slate-800",children:"Proveedores e Inventario"}),f.jsx("p",{className:"text-sm text-slate-500 mt-0.5",children:"Gestión de empresas y tipos de material"})]}),f.jsxs("button",{onClick:P,className:"flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all self-start sm:self-auto",children:[f.jsx(t0,{className:"w-4 h-4"})," Agregar proveedor"]})]}),s&&f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-teal-200 p-5",children:[f.jsx("h3",{className:"font-semibold text-slate-700 mb-4 text-sm",children:o?"Editar proveedor":"Nuevo proveedor"}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[f.jsx(We,{label:"Nombre de la empresa",required:!0,children:f.jsx("input",{type:"text",placeholder:"Ej: Medtronic",value:u.name,onChange:E=>h(T=>({...T,name:E.target.value})),className:ye})}),f.jsx(We,{label:"Especialidad / productos",children:f.jsx("input",{type:"text",placeholder:"Ej: Columna, Trauma",value:u.specialty,onChange:E=>h(T=>({...T,specialty:E.target.value})),className:ye})}),f.jsx(We,{label:"Contacto / Email",children:f.jsx("input",{type:"email",placeholder:"email@empresa.com",value:u.contact,onChange:E=>h(T=>({...T,contact:E.target.value})),className:ye})})]}),f.jsxs("div",{className:"flex gap-2 mt-4 justify-end",children:[f.jsx("button",{onClick:()=>i(!1),className:"px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors",children:"Cancelar"}),f.jsxs("button",{onClick:b,disabled:_,className:"flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors disabled:opacity-60",children:[_?f.jsx(Xv,{className:"w-4 h-4 animate-spin"}):f.jsx(n0,{className:"w-4 h-4"}),_?"Guardando...":"Guardar"]})]})]}),f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden",children:[f.jsxs("div",{className:"px-5 py-3.5 border-b border-slate-100 flex items-center gap-2",children:[f.jsx(sg,{className:"w-4 h-4 text-teal-500"}),f.jsx("h3",{className:"font-semibold text-slate-700 text-sm",children:"Empresas proveedoras"}),f.jsx("span",{className:"ml-auto text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-semibold",children:t.length})]}),t.length===0?f.jsxs("div",{className:"py-12 text-center",children:[f.jsx(sg,{className:"w-8 h-8 text-slate-300 mx-auto mb-2"}),f.jsx("p",{className:"text-sm text-slate-400",children:"Sin proveedores registrados"})]}):f.jsx("div",{className:"divide-y divide-slate-50",children:t.map(E=>f.jsxs("div",{className:"flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0",children:f.jsx("span",{className:"text-sm font-bold text-blue-600",children:E.name.charAt(0)})}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("p",{className:"font-semibold text-slate-800 text-sm",children:E.name}),f.jsx("p",{className:"text-xs text-slate-500 truncate",children:E.specialty||"Sin especialidad"}),E.contact&&f.jsx("p",{className:"text-xs text-teal-600 mt-0.5",children:E.contact})]}),f.jsxs("div",{className:"flex gap-1 flex-shrink-0",children:[f.jsx("button",{onClick:()=>A(E),className:"p-2 text-blue-400 hover:bg-blue-50 rounded-lg transition-colors",children:f.jsx(Zv,{className:"w-4 h-4"})}),p===E.id?f.jsxs("div",{className:"flex gap-1",children:[f.jsx("button",{onClick:async()=>{await r(E.id),g(null)},className:"p-2 text-red-600 hover:bg-red-50 rounded-lg",children:f.jsx(Zd,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>g(null),className:"p-2 text-slate-400 hover:bg-slate-100 rounded-lg",children:f.jsx(Ys,{className:"w-4 h-4"})})]}):f.jsx("button",{onClick:()=>g(E.id),className:"p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors",children:f.jsx(s0,{className:"w-4 h-4"})})]})]},E.id))})]}),f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden",children:[f.jsxs("div",{className:"px-5 py-3.5 border-b border-slate-100 flex items-center gap-2",children:[f.jsx(cu,{className:"w-4 h-4 text-indigo-500"}),f.jsx("h3",{className:"font-semibold text-slate-700 text-sm",children:"Tipos de material de referencia"})]}),f.jsx("div",{className:"p-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3",children:bN.map((E,T)=>f.jsxs("div",{className:"flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors",children:[f.jsx("span",{className:"text-xl flex-shrink-0",children:E.icon}),f.jsxs("div",{children:[f.jsx("p",{className:"text-xs font-semibold text-slate-700 leading-tight",children:E.label}),f.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:E.desc})]})]},T))})]})]})}const MN={dashboard:"Panel de Control","new-surgery":"Registrar Cirugía",history:"Historial de Cirugías",inventory:"Proveedores e Inventario"};function ON({message:t="Cargando datos..."}){return f.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4",children:[f.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg",children:f.jsx(Qv,{className:"w-7 h-7 text-white"})}),f.jsxs("div",{className:"flex items-center gap-2 text-slate-500",children:[f.jsx(Xv,{className:"w-4 h-4 animate-spin"}),f.jsx("span",{className:"text-sm font-medium",children:t})]})]})}function LN(){const[t,e]=G.useState(null),[n,r]=G.useState(rt),[s,i]=G.useState([]),[o,l]=G.useState([]),[u,h]=G.useState(!1),[p,g]=G.useState(null),_=G.useRef(!1),[k,P]=G.useState(()=>{try{return JSON.parse(localStorage.getItem("ng_surgeries_v3"))||Lc}catch{return Lc}}),[A,b]=G.useState(()=>{try{return JSON.parse(localStorage.getItem("ng_suppliers_v2"))||Oc}catch{return Oc}}),[E,T]=G.useState("dashboard"),[C,R]=G.useState(null),[L,F]=G.useState(!1),[w,m]=G.useState(null);G.useEffect(()=>{rt||localStorage.setItem("ng_surgeries_v3",JSON.stringify(k))},[k]),G.useEffect(()=>{rt||localStorage.setItem("ng_suppliers_v2",JSON.stringify(A))},[A]),G.useEffect(()=>{if(rt)return YR(Mc,async W=>{if(W)e(W),r(!1);else try{await HR(Mc)}catch{r(!1)}})},[]),G.useEffect(()=>{if(!rt||!t)return;h(!0),g(null);let W,ae;return(async()=>{_.current||(_.current=!0,await _N(Lc,Oc).catch(console.error)),W=cN(qe=>{i(qe),h(!1)},qe=>{g(qe.message),h(!1)}),ae=pN(l)})().catch(qe=>{g(qe.message),h(!1)}),()=>{W==null||W(),ae==null||ae()}},[t]);const v=rt?s:k,S=rt?o:A,x=(W,ae="success")=>{m({message:W,type:ae}),setTimeout(()=>m(null),3500)},N=W=>{R(null),T(W)},I=async()=>{await JR(Mc),i([]),l([]),_.current=!1},Me=async W=>{try{rt?C?await dN(C.id,W):await hN(W):P(C?ae=>ae.map(Te=>Te.id===C.id?{...W,id:Te.id}:Te):ae=>[...ae,{...W,id:Date.now()}]),x(C?"Cirugía actualizada correctamente":"Cirugía registrada exitosamente"),R(null),T("history")}catch(ae){x("Error al guardar: "+ae.message,"error")}},jt=async W=>{try{rt?await fN(W):P(ae=>ae.filter(Te=>Te.id!==W)),x("Registro eliminado","error")}catch(ae){x("Error al eliminar: "+ae.message,"error")}},Pr=W=>{R(W),T("new-surgery")},Dr=()=>{R(null),T("new-surgery")},z=()=>{R(null),T(C?"history":"dashboard")},Q=async W=>{rt?await mN(W):b(ae=>[...ae,{...W,id:Date.now()}])},Z=async(W,ae)=>{rt?await gN(W,ae):b(Te=>Te.map(qe=>qe.id===W?{...qe,...ae}:qe))},de=async W=>{rt?await yN(W):b(ae=>ae.filter(Te=>Te.id!==W))};return rt&&(n||u)?f.jsx(ON,{message:n?"Conectando...":"Sincronizando datos..."}):f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),f.jsxs("div",{className:"flex h-screen bg-slate-50 overflow-hidden",style:{fontFamily:"system-ui, -apple-system, sans-serif"},children:[f.jsx(kN,{currentView:E,setCurrentView:N,open:L,setOpen:F,user:t,onSignOut:rt?I:null}),L&&f.jsx("div",{className:"fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm",onClick:()=>F(!1)}),f.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden",children:[f.jsx(RN,{setOpen:F,title:MN[E]||"NeuroGestión"}),rt&&f.jsxs("div",{className:"px-4 md:px-6 py-1.5 bg-teal-50 border-b border-teal-100 flex items-center gap-2 flex-shrink-0",children:[f.jsx(JS,{className:"w-3.5 h-3.5 text-teal-500"}),f.jsx("p",{className:"text-xs text-teal-700 font-medium",children:"Modo nube activo — datos sincronizados en tiempo real"})]}),p&&f.jsxs("div",{className:"px-4 md:px-6 py-2 bg-red-50 border-b border-red-200 flex items-center justify-between flex-shrink-0",children:[f.jsx("p",{className:"text-xs text-red-700",children:p}),f.jsx("button",{onClick:()=>g(null),children:f.jsx(Ys,{className:"w-3.5 h-3.5 text-red-400"})})]}),f.jsxs("main",{className:"flex-1 overflow-y-auto p-4 md:p-6 lg:p-8",children:[E==="dashboard"&&f.jsx(NN,{surgeries:v,onNew:Dr}),E==="new-surgery"&&f.jsx(PN,{onSave:Me,editData:C,onCancel:z,surgeons:vN,residents:wN,suppliers:S,categories:Vy}),E==="history"&&f.jsx(DN,{surgeries:v,onEdit:Pr,onDelete:jt,categories:Vy}),E==="inventory"&&f.jsx(VN,{suppliers:S,onAdd:Q,onUpdate:Z,onDelete:de})]})]}),w&&f.jsx(xN,{toast:w,onClose:()=>m(null)})]})]})}Kv(document.getElementById("root")).render(f.jsx(G.StrictMode,{children:f.jsx(LN,{})}));
