(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(i){if(i.ep)return;i.ep=!0;const d=s(i);fetch(i.href,d)}})();function ag(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var xu={exports:{}},_r={};var Xm;function yx(){if(Xm)return _r;Xm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,i,d){var h=null;if(d!==void 0&&(h=""+d),i.key!==void 0&&(h=""+i.key),"key"in i){d={};for(var m in i)m!=="key"&&(d[m]=i[m])}else d=i;return i=d.ref,{$$typeof:a,type:o,key:h,ref:i!==void 0?i:null,props:d}}return _r.Fragment=r,_r.jsx=s,_r.jsxs=s,_r}var Fm;function xx(){return Fm||(Fm=1,xu.exports=yx()),xu.exports}var f=xx(),vu={exports:{}},de={};var Km;function vx(){if(Km)return de;Km=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),E=Symbol.iterator;function M(j){return j===null||typeof j!="object"?null:(j=E&&j[E]||j["@@iterator"],typeof j=="function"?j:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,_={};function X(j,P,J){this.props=j,this.context=P,this.refs=_,this.updater=J||k}X.prototype.isReactComponent={},X.prototype.setState=function(j,P){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,P,"setState")},X.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function U(){}U.prototype=X.prototype;function q(j,P,J){this.props=j,this.context=P,this.refs=_,this.updater=J||k}var F=q.prototype=new U;F.constructor=q,N(F,X.prototype),F.isPureReactComponent=!0;var H=Array.isArray;function Z(){}var V={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function ae(j,P,J){var Q=J.ref;return{$$typeof:a,type:j,key:P,ref:Q!==void 0?Q:null,props:J}}function je(j,P){return ae(j.type,P,j.props)}function xe(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function me(j){var P={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(J){return P[J]})}var $=/\/+/g;function re(j,P){return typeof j=="object"&&j!==null&&j.key!=null?me(""+j.key):P.toString(36)}function he(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(Z,Z):(j.status="pending",j.then(function(P){j.status==="pending"&&(j.status="fulfilled",j.value=P)},function(P){j.status==="pending"&&(j.status="rejected",j.reason=P)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function R(j,P,J,Q,W){var se=typeof j;(se==="undefined"||se==="boolean")&&(j=null);var ge=!1;if(j===null)ge=!0;else switch(se){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(j.$$typeof){case a:case r:ge=!0;break;case x:return ge=j._init,R(ge(j._payload),P,J,Q,W)}}if(ge)return W=W(j),ge=Q===""?"."+re(j,0):Q,H(W)?(J="",ge!=null&&(J=ge.replace($,"$&/")+"/"),R(W,P,J,"",function(On){return On})):W!=null&&(xe(W)&&(W=je(W,J+(W.key==null||j&&j.key===W.key?"":(""+W.key).replace($,"$&/")+"/")+ge)),P.push(W)),1;ge=0;var Pe=Q===""?".":Q+":";if(H(j))for(var Me=0;Me<j.length;Me++)Q=j[Me],se=Pe+re(Q,Me),ge+=R(Q,P,J,se,W);else if(Me=M(j),typeof Me=="function")for(j=Me.call(j),Me=0;!(Q=j.next()).done;)Q=Q.value,se=Pe+re(Q,Me++),ge+=R(Q,P,J,se,W);else if(se==="object"){if(typeof j.then=="function")return R(he(j),P,J,Q,W);throw P=String(j),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return ge}function I(j,P,J){if(j==null)return j;var Q=[],W=0;return R(j,Q,"","",function(se){return P.call(J,se,W++)}),Q}function te(j){if(j._status===-1){var P=j._result;P=P(),P.then(function(J){(j._status===0||j._status===-1)&&(j._status=1,j._result=J)},function(J){(j._status===0||j._status===-1)&&(j._status=2,j._result=J)}),j._status===-1&&(j._status=0,j._result=P)}if(j._status===1)return j._result.default;throw j._result}var Ee=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},_e={map:I,forEach:function(j,P,J){I(j,function(){P.apply(this,arguments)},J)},count:function(j){var P=0;return I(j,function(){P++}),P},toArray:function(j){return I(j,function(P){return P})||[]},only:function(j){if(!xe(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return de.Activity=v,de.Children=_e,de.Component=X,de.Fragment=s,de.Profiler=i,de.PureComponent=q,de.StrictMode=o,de.Suspense=g,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,de.__COMPILER_RUNTIME={__proto__:null,c:function(j){return V.H.useMemoCache(j)}},de.cache=function(j){return function(){return j.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(j,P,J){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Q=N({},j.props),W=j.key;if(P!=null)for(se in P.key!==void 0&&(W=""+P.key),P)!le.call(P,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&P.ref===void 0||(Q[se]=P[se]);var se=arguments.length-2;if(se===1)Q.children=J;else if(1<se){for(var ge=Array(se),Pe=0;Pe<se;Pe++)ge[Pe]=arguments[Pe+2];Q.children=ge}return ae(j.type,W,Q)},de.createContext=function(j){return j={$$typeof:h,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:d,_context:j},j},de.createElement=function(j,P,J){var Q,W={},se=null;if(P!=null)for(Q in P.key!==void 0&&(se=""+P.key),P)le.call(P,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(W[Q]=P[Q]);var ge=arguments.length-2;if(ge===1)W.children=J;else if(1<ge){for(var Pe=Array(ge),Me=0;Me<ge;Me++)Pe[Me]=arguments[Me+2];W.children=Pe}if(j&&j.defaultProps)for(Q in ge=j.defaultProps,ge)W[Q]===void 0&&(W[Q]=ge[Q]);return ae(j,se,W)},de.createRef=function(){return{current:null}},de.forwardRef=function(j){return{$$typeof:m,render:j}},de.isValidElement=xe,de.lazy=function(j){return{$$typeof:x,_payload:{_status:-1,_result:j},_init:te}},de.memo=function(j,P){return{$$typeof:b,type:j,compare:P===void 0?null:P}},de.startTransition=function(j){var P=V.T,J={};V.T=J;try{var Q=j(),W=V.S;W!==null&&W(J,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(Z,Ee)}catch(se){Ee(se)}finally{P!==null&&J.types!==null&&(P.types=J.types),V.T=P}},de.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},de.use=function(j){return V.H.use(j)},de.useActionState=function(j,P,J){return V.H.useActionState(j,P,J)},de.useCallback=function(j,P){return V.H.useCallback(j,P)},de.useContext=function(j){return V.H.useContext(j)},de.useDebugValue=function(){},de.useDeferredValue=function(j,P){return V.H.useDeferredValue(j,P)},de.useEffect=function(j,P){return V.H.useEffect(j,P)},de.useEffectEvent=function(j){return V.H.useEffectEvent(j)},de.useId=function(){return V.H.useId()},de.useImperativeHandle=function(j,P,J){return V.H.useImperativeHandle(j,P,J)},de.useInsertionEffect=function(j,P){return V.H.useInsertionEffect(j,P)},de.useLayoutEffect=function(j,P){return V.H.useLayoutEffect(j,P)},de.useMemo=function(j,P){return V.H.useMemo(j,P)},de.useOptimistic=function(j,P){return V.H.useOptimistic(j,P)},de.useReducer=function(j,P,J){return V.H.useReducer(j,P,J)},de.useRef=function(j){return V.H.useRef(j)},de.useState=function(j){return V.H.useState(j)},de.useSyncExternalStore=function(j,P,J){return V.H.useSyncExternalStore(j,P,J)},de.useTransition=function(){return V.H.useTransition()},de.version="19.2.5",de}var Qm;function Bs(){return Qm||(Qm=1,vu.exports=vx()),vu.exports}var S=Bs();const D=ag(S);var Su={exports:{}},Nr={},wu={exports:{}},ju={};var Zm;function Sx(){return Zm||(Zm=1,(function(a){function r(R,I){var te=R.length;R.push(I);e:for(;0<te;){var Ee=te-1>>>1,_e=R[Ee];if(0<i(_e,I))R[Ee]=I,R[te]=_e,te=Ee;else break e}}function s(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var I=R[0],te=R.pop();if(te!==I){R[0]=te;e:for(var Ee=0,_e=R.length,j=_e>>>1;Ee<j;){var P=2*(Ee+1)-1,J=R[P],Q=P+1,W=R[Q];if(0>i(J,te))Q<_e&&0>i(W,J)?(R[Ee]=W,R[Q]=te,Ee=Q):(R[Ee]=J,R[P]=te,Ee=P);else if(Q<_e&&0>i(W,te))R[Ee]=W,R[Q]=te,Ee=Q;else break e}}return I}function i(R,I){var te=R.sortIndex-I.sortIndex;return te!==0?te:R.id-I.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var h=Date,m=h.now();a.unstable_now=function(){return h.now()-m}}var g=[],b=[],x=1,v=null,E=3,M=!1,k=!1,N=!1,_=!1,X=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function F(R){for(var I=s(b);I!==null;){if(I.callback===null)o(b);else if(I.startTime<=R)o(b),I.sortIndex=I.expirationTime,r(g,I);else break;I=s(b)}}function H(R){if(N=!1,F(R),!k)if(s(g)!==null)k=!0,Z||(Z=!0,me());else{var I=s(b);I!==null&&he(H,I.startTime-R)}}var Z=!1,V=-1,le=5,ae=-1;function je(){return _?!0:!(a.unstable_now()-ae<le)}function xe(){if(_=!1,Z){var R=a.unstable_now();ae=R;var I=!0;try{e:{k=!1,N&&(N=!1,U(V),V=-1),M=!0;var te=E;try{t:{for(F(R),v=s(g);v!==null&&!(v.expirationTime>R&&je());){var Ee=v.callback;if(typeof Ee=="function"){v.callback=null,E=v.priorityLevel;var _e=Ee(v.expirationTime<=R);if(R=a.unstable_now(),typeof _e=="function"){v.callback=_e,F(R),I=!0;break t}v===s(g)&&o(g),F(R)}else o(g);v=s(g)}if(v!==null)I=!0;else{var j=s(b);j!==null&&he(H,j.startTime-R),I=!1}}break e}finally{v=null,E=te,M=!1}I=void 0}}finally{I?me():Z=!1}}}var me;if(typeof q=="function")me=function(){q(xe)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,re=$.port2;$.port1.onmessage=xe,me=function(){re.postMessage(null)}}else me=function(){X(xe,0)};function he(R,I){V=X(function(){R(a.unstable_now())},I)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(R){R.callback=null},a.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<R?Math.floor(1e3/R):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(R){switch(E){case 1:case 2:case 3:var I=3;break;default:I=E}var te=E;E=I;try{return R()}finally{E=te}},a.unstable_requestPaint=function(){_=!0},a.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var te=E;E=R;try{return I()}finally{E=te}},a.unstable_scheduleCallback=function(R,I,te){var Ee=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Ee+te:Ee):te=Ee,R){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=te+_e,R={id:x++,callback:I,priorityLevel:R,startTime:te,expirationTime:_e,sortIndex:-1},te>Ee?(R.sortIndex=te,r(b,R),s(g)===null&&R===s(b)&&(N?(U(V),V=-1):N=!0,he(H,te-Ee))):(R.sortIndex=_e,r(g,R),k||M||(k=!0,Z||(Z=!0,me()))),R},a.unstable_shouldYield=je,a.unstable_wrapCallback=function(R){var I=E;return function(){var te=E;E=I;try{return R.apply(this,arguments)}finally{E=te}}}})(ju)),ju}var Im;function wx(){return Im||(Im=1,wu.exports=Sx()),wu.exports}var Eu={exports:{}},ot={};var $m;function jx(){if($m)return ot;$m=1;var a=Bs();function r(g){var b="https://react.dev/errors/"+g;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)b+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},i=Symbol.for("react.portal");function d(g,b,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i,key:v==null?null:""+v,children:g,containerInfo:b,implementation:x}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,b){if(g==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ot.createPortal=function(g,b){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(r(299));return d(g,b,null,x)},ot.flushSync=function(g){var b=h.T,x=o.p;try{if(h.T=null,o.p=2,g)return g()}finally{h.T=b,o.p=x,o.d.f()}},ot.preconnect=function(g,b){typeof g=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,o.d.C(g,b))},ot.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ot.preinit=function(g,b){if(typeof g=="string"&&b&&typeof b.as=="string"){var x=b.as,v=m(x,b.crossOrigin),E=typeof b.integrity=="string"?b.integrity:void 0,M=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;x==="style"?o.d.S(g,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:v,integrity:E,fetchPriority:M}):x==="script"&&o.d.X(g,{crossOrigin:v,integrity:E,fetchPriority:M,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ot.preinitModule=function(g,b){if(typeof g=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var x=m(b.as,b.crossOrigin);o.d.M(g,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&o.d.M(g)},ot.preload=function(g,b){if(typeof g=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var x=b.as,v=m(x,b.crossOrigin);o.d.L(g,x,{crossOrigin:v,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ot.preloadModule=function(g,b){if(typeof g=="string")if(b){var x=m(b.as,b.crossOrigin);o.d.m(g,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else o.d.m(g)},ot.requestFormReset=function(g){o.d.r(g)},ot.unstable_batchedUpdates=function(g,b){return g(b)},ot.useFormState=function(g,b,x){return h.H.useFormState(g,b,x)},ot.useFormStatus=function(){return h.H.useHostTransitionStatus()},ot.version="19.2.5",ot}var Jm;function lg(){if(Jm)return Eu.exports;Jm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Eu.exports=jx(),Eu.exports}var Wm;function Ex(){if(Wm)return Nr;Wm=1;var a=wx(),r=Bs(),s=lg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(o(188))}function b(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var c=n.return;if(c===null)break;var u=c.alternate;if(u===null){if(l=c.return,l!==null){n=l;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===n)return g(c),e;if(u===l)return g(c),t;u=u.sibling}throw Error(o(188))}if(n.return!==l.return)n=c,l=u;else{for(var p=!1,y=c.child;y;){if(y===n){p=!0,n=c,l=u;break}if(y===l){p=!0,l=c,n=u;break}y=y.sibling}if(!p){for(y=u.child;y;){if(y===n){p=!0,n=u,l=c;break}if(y===l){p=!0,l=u,n=c;break}y=y.sibling}if(!p)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),q=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),je=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case X:return"Profiler";case _:return"StrictMode";case H:return"Suspense";case Z:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case q:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var he=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},Ee=[],_e=-1;function j(e){return{current:e}}function P(e){0>_e||(e.current=Ee[_e],Ee[_e]=null,_e--)}function J(e,t){_e++,Ee[_e]=e.current,e.current=t}var Q=j(null),W=j(null),se=j(null),ge=j(null);function Pe(e,t){switch(J(se,t),J(W,e),J(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?pm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=pm(t),e=mm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(Q),J(Q,e)}function Me(){P(Q),P(W),P(se)}function On(e){e.memoizedState!==null&&J(ge,e);var t=Q.current,n=mm(t,e.type);t!==n&&(J(W,e),J(Q,n))}function da(e){W.current===e&&(P(Q),P(W)),ge.current===e&&(P(ge),jr._currentValue=te)}var Ml,Pd;function fa(e){if(Ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ml=t&&t[1]||"",Pd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ml+e+Pd}var to=!1;function no(e,t){if(!e||to)return"";to=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var O=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){O=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){O=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&O&&typeof B.stack=="string")return[B.stack,O.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),p=u[0],y=u[1];if(p&&y){var w=p.split(`
`),T=y.split(`
`);for(c=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;c<T.length&&!T[c].includes("DetermineComponentFrameRoot");)c++;if(l===w.length||c===T.length)for(l=w.length-1,c=T.length-1;1<=l&&0<=c&&w[l]!==T[c];)c--;for(;1<=l&&0<=c;l--,c--)if(w[l]!==T[c]){if(l!==1||c!==1)do if(l--,c--,0>c||w[l]!==T[c]){var Y=`
`+w[l].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=l&&0<=c);break}}}finally{to=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?fa(n):""}function Z1(e,t){switch(e.tag){case 26:case 27:case 5:return fa(e.type);case 16:return fa("Lazy");case 13:return e.child!==t&&t!==null?fa("Suspense Fallback"):fa("Suspense");case 19:return fa("SuspenseList");case 0:case 15:return no(e.type,!1);case 11:return no(e.type.render,!1);case 1:return no(e.type,!0);case 31:return fa("Activity");default:return""}}function Gd(e){try{var t="",n=null;do t+=Z1(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ao=Object.prototype.hasOwnProperty,lo=a.unstable_scheduleCallback,ro=a.unstable_cancelCallback,I1=a.unstable_shouldYield,$1=a.unstable_requestPaint,Et=a.unstable_now,J1=a.unstable_getCurrentPriorityLevel,Xd=a.unstable_ImmediatePriority,Fd=a.unstable_UserBlockingPriority,$r=a.unstable_NormalPriority,W1=a.unstable_LowPriority,Kd=a.unstable_IdlePriority,eb=a.log,tb=a.unstable_setDisableYieldValue,Ul=null,Ct=null;function Mn(e){if(typeof eb=="function"&&tb(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Ul,e)}catch{}}var kt=Math.clz32?Math.clz32:lb,nb=Math.log,ab=Math.LN2;function lb(e){return e>>>=0,e===0?32:31-(nb(e)/ab|0)|0}var Jr=256,Wr=262144,ei=4194304;function ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ti(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var c=0,u=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var y=l&134217727;return y!==0?(l=y&~u,l!==0?c=ha(l):(p&=y,p!==0?c=ha(p):n||(n=y&~e,n!==0&&(c=ha(n))))):(y=l&~u,y!==0?c=ha(y):p!==0?c=ha(p):n||(n=l&~e,n!==0&&(c=ha(n)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:c}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(){var e=ei;return ei<<=1,(ei&62914560)===0&&(ei=4194304),e}function io(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ll(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ib(e,t,n,l,c,u){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,w=e.expirationTimes,T=e.hiddenUpdates;for(n=p&~n;0<n;){var Y=31-kt(n),K=1<<Y;y[Y]=0,w[Y]=-1;var O=T[Y];if(O!==null)for(T[Y]=null,Y=0;Y<O.length;Y++){var B=O[Y];B!==null&&(B.lane&=-536870913)}n&=~K}l!==0&&Zd(e,l,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(p&~t))}function Zd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-kt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Id(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-kt(n),c=1<<l;c&t|e[l]&t&&(e[l]|=t),n&=~c}}function $d(e,t){var n=t&-t;return n=(n&42)!==0?1:so(n),(n&(e.suspendedLanes|t))!==0?0:n}function so(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function oo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jd(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Bm(e.type))}function Wd(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}var Un=Math.random().toString(36).slice(2),at="__reactFiber$"+Un,pt="__reactProps$"+Un,Ya="__reactContainer$"+Un,co="__reactEvents$"+Un,sb="__reactListeners$"+Un,ob="__reactHandles$"+Un,ef="__reactResources$"+Un,Bl="__reactMarker$"+Un;function uo(e){delete e[at],delete e[pt],delete e[co],delete e[sb],delete e[ob]}function Va(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ya]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wm(e);e!==null;){if(n=e[at])return n;e=wm(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){if(e=e[at]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ga(e){var t=e[ef];return t||(t=e[ef]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Bl]=!0}var tf=new Set,nf={};function pa(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(nf[e]=t,e=0;e<t.length;e++)tf.add(t[e])}var cb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),af={},lf={};function ub(e){return ao.call(lf,e)?!0:ao.call(af,e)?!1:cb.test(e)?lf[e]=!0:(af[e]=!0,!1)}function ni(e,t,n){if(ub(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ai(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function cn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function db(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var c=l.get,u=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(p){n=""+p,u.call(this,p)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fo(e){if(!e._valueTracker){var t=rf(e)?"checked":"value";e._valueTracker=db(e,t,""+e[t])}}function sf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=rf(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fb=/[\n"\\]/g;function Lt(e){return e.replace(fb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ho(e,t,n,l,c,u,p,y){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?po(e,p,Dt(t)):n!=null?po(e,p,Dt(n)):l!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Dt(y):e.removeAttribute("name")}function of(e,t,n,l,c,u,p,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){fo(e);return}n=n!=null?""+Dt(n):"",t=t!=null?""+Dt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=y?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),fo(e)}function po(e,t,n){t==="number"&&li(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Fa(e,t,n,l){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function cf(e,t,n){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Dt(n):""}function uf(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(he(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Dt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),fo(e)}function Ka(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function df(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||hb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ff(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var c in t)l=t[c],t.hasOwnProperty(c)&&n[c]!==l&&df(e,c,l)}else for(var u in t)t.hasOwnProperty(u)&&df(e,u,t[u])}function mo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ri(e){return mb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function un(){}var go=null;function bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Za=null;function hf(e){var t=Pa(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ho(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Lt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var c=l[pt]||null;if(!c)throw Error(o(90));ho(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&sf(l)}break e;case"textarea":cf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Fa(e,!!n.multiple,t,!1)}}}var yo=!1;function pf(e,t,n){if(yo)return e(t,n);yo=!0;try{var l=e(t);return l}finally{if(yo=!1,(Qa!==null||Za!==null)&&(Fi(),Qa&&(t=Qa,e=Za,Za=Qa=null,hf(t),e)))for(t=0;t<e.length;t++)hf(e[t])}}function ql(e,t){var n=e.stateNode;if(n===null)return null;var l=n[pt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=!1;if(dn)try{var Yl={};Object.defineProperty(Yl,"passive",{get:function(){xo=!0}}),window.addEventListener("test",Yl,Yl),window.removeEventListener("test",Yl,Yl)}catch{xo=!1}var Dn=null,vo=null,ii=null;function mf(){if(ii)return ii;var e,t=vo,n=t.length,l,c="value"in Dn?Dn.value:Dn.textContent,u=c.length;for(e=0;e<n&&t[e]===c[e];e++);var p=n-e;for(l=1;l<=p&&t[n-l]===c[u-l];l++);return ii=c.slice(e,1<l?1-l:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oi(){return!0}function gf(){return!1}function mt(e){function t(n,l,c,u,p){this._reactName=n,this._targetInst=c,this.type=l,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?oi:gf,this.isPropagationStopped=gf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),t}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=mt(ma),Vl=v({},ma,{view:0,detail:0}),gb=mt(Vl),So,wo,Pl,ui=v({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pl&&(Pl&&e.type==="mousemove"?(So=e.screenX-Pl.screenX,wo=e.screenY-Pl.screenY):wo=So=0,Pl=e),So)},movementY:function(e){return"movementY"in e?e.movementY:wo}}),bf=mt(ui),bb=v({},ui,{dataTransfer:0}),yb=mt(bb),xb=v({},Vl,{relatedTarget:0}),jo=mt(xb),vb=v({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Sb=mt(vb),wb=v({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jb=mt(wb),Eb=v({},ma,{data:0}),yf=mt(Eb),Cb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_b={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_b[e])?!!t[e]:!1}function Eo(){return Nb}var zb=v({},Vl,{key:function(e){if(e.key){var t=Cb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eo,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ab=mt(zb),Tb=v({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=mt(Tb),Rb=v({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eo}),Ob=mt(Rb),Mb=v({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ub=mt(Mb),Db=v({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lb=mt(Db),Bb=v({},ma,{newState:0,oldState:0}),Hb=mt(Bb),qb=[9,13,27,32],Co=dn&&"CompositionEvent"in window,Gl=null;dn&&"documentMode"in document&&(Gl=document.documentMode);var Yb=dn&&"TextEvent"in window&&!Gl,vf=dn&&(!Co||Gl&&8<Gl&&11>=Gl),Sf=" ",wf=!1;function jf(e,t){switch(e){case"keyup":return qb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function Vb(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(wf=!0,Sf);case"textInput":return e=t.data,e===Sf&&wf?null:e;default:return null}}function Pb(e,t){if(Ia)return e==="compositionend"||!Co&&jf(e,t)?(e=mf(),ii=vo=Dn=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vf&&t.locale!=="ko"?null:t.data;default:return null}}var Gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gb[e.type]:t==="textarea"}function kf(e,t,n,l){Qa?Za?Za.push(l):Za=[l]:Qa=l,t=Wi(t,"onChange"),0<t.length&&(n=new ci("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Xl=null,Fl=null;function Xb(e){om(e,0)}function di(e){var t=Hl(e);if(sf(t))return e}function _f(e,t){if(e==="change")return t}var Nf=!1;if(dn){var ko;if(dn){var _o="oninput"in document;if(!_o){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),_o=typeof zf.oninput=="function"}ko=_o}else ko=!1;Nf=ko&&(!document.documentMode||9<document.documentMode)}function Af(){Xl&&(Xl.detachEvent("onpropertychange",Tf),Fl=Xl=null)}function Tf(e){if(e.propertyName==="value"&&di(Fl)){var t=[];kf(t,Fl,e,bo(e)),pf(Xb,t)}}function Fb(e,t,n){e==="focusin"?(Af(),Xl=t,Fl=n,Xl.attachEvent("onpropertychange",Tf)):e==="focusout"&&Af()}function Kb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(Fl)}function Qb(e,t){if(e==="click")return di(t)}function Zb(e,t){if(e==="input"||e==="change")return di(t)}function Ib(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Ib;function Kl(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var c=n[l];if(!ao.call(t,c)||!_t(e[c],t[c]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Of(e,t){var n=Rf(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rf(n)}}function Mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=li(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=li(e.document)}return t}function No(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $b=dn&&"documentMode"in document&&11>=document.documentMode,$a=null,zo=null,Ql=null,Ao=!1;function Df(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ao||$a==null||$a!==li(l)||(l=$a,"selectionStart"in l&&No(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&Kl(Ql,l)||(Ql=l,l=Wi(zo,"onSelect"),0<l.length&&(t=new ci("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=$a)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ja={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},To={},Lf={};dn&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function ba(e){if(To[e])return To[e];if(!Ja[e])return e;var t=Ja[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lf)return To[e]=t[n];return e}var Bf=ba("animationend"),Hf=ba("animationiteration"),qf=ba("animationstart"),Jb=ba("transitionrun"),Wb=ba("transitionstart"),ey=ba("transitioncancel"),Yf=ba("transitionend"),Vf=new Map,Ro="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ro.push("scrollEnd");function Qt(e,t){Vf.set(e,t),pa(t,[e])}var fi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bt=[],Wa=0,Oo=0;function hi(){for(var e=Wa,t=Oo=Wa=0;t<e;){var n=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var c=Bt[t];Bt[t++]=null;var u=Bt[t];if(Bt[t++]=null,l!==null&&c!==null){var p=l.pending;p===null?c.next=c:(c.next=p.next,p.next=c),l.pending=c}u!==0&&Pf(n,c,u)}}function pi(e,t,n,l){Bt[Wa++]=e,Bt[Wa++]=t,Bt[Wa++]=n,Bt[Wa++]=l,Oo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Mo(e,t,n,l){return pi(e,t,n,l),mi(e)}function ya(e,t){return pi(e,null,null,t),mi(e)}function Pf(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var c=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-kt(n),e=u.hiddenUpdates,l=e[c],l===null?e[c]=[t]:l.push(t),t.lane=n|536870912),u):null}function mi(e){if(50<gr)throw gr=0,Pc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var el={};function ty(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,l){return new ty(e,t,n,l)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Gf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,l,c,u){var p=0;if(l=e,typeof e=="function")Uo(e)&&(p=1);else if(typeof e=="string")p=ix(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=Nt(31,n,t,c),e.elementType=ae,e.lanes=u,e;case N:return xa(n.children,c,u,t);case _:p=8,c|=24;break;case X:return e=Nt(12,n,t,c|2),e.elementType=X,e.lanes=u,e;case H:return e=Nt(13,n,t,c),e.elementType=H,e.lanes=u,e;case Z:return e=Nt(19,n,t,c),e.elementType=Z,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:p=10;break e;case U:p=9;break e;case F:p=11;break e;case V:p=14;break e;case le:p=16,l=null;break e}p=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Nt(p,n,t,c),t.elementType=e,t.type=l,t.lanes=u,t}function xa(e,t,n,l){return e=Nt(7,e,l,t),e.lanes=n,e}function Do(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function Xf(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function Lo(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ff=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var n=Ff.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Gd(t)},Ff.set(e,t),t)}return{value:e,source:t,stack:Gd(t)}}var tl=[],nl=0,bi=null,Zl=0,qt=[],Yt=0,Ln=null,tn=1,nn="";function hn(e,t){tl[nl++]=Zl,tl[nl++]=bi,bi=e,Zl=t}function Kf(e,t,n){qt[Yt++]=tn,qt[Yt++]=nn,qt[Yt++]=Ln,Ln=e;var l=tn;e=nn;var c=32-kt(l)-1;l&=~(1<<c),n+=1;var u=32-kt(t)+c;if(30<u){var p=c-c%5;u=(l&(1<<p)-1).toString(32),l>>=p,c-=p,tn=1<<32-kt(t)+c|n<<c|l,nn=u+e}else tn=1<<u|n<<c|l,nn=e}function Bo(e){e.return!==null&&(hn(e,1),Kf(e,1,0))}function Ho(e){for(;e===bi;)bi=tl[--nl],tl[nl]=null,Zl=tl[--nl],tl[nl]=null;for(;e===Ln;)Ln=qt[--Yt],qt[Yt]=null,nn=qt[--Yt],qt[Yt]=null,tn=qt[--Yt],qt[Yt]=null}function Qf(e,t){qt[Yt++]=tn,qt[Yt++]=nn,qt[Yt++]=Ln,tn=t.id,nn=t.overflow,Ln=e}var lt=null,Le=null,we=!1,Bn=null,Vt=!1,qo=Error(o(519));function Hn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Il(Ht(t,e)),qo}function Zf(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[at]=e,t[pt]=l,n){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(n=0;n<yr.length;n++)ye(yr[n],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),of(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),uf(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||fm(t.textContent,n)?(l.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),l.onScroll!=null&&ye("scroll",t),l.onScrollEnd!=null&&ye("scrollend",t),l.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Hn(e,!0)}function If(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:lt=lt.return}}function al(e){if(e!==lt)return!1;if(!we)return If(e),we=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lu(e.type,e.memoizedProps)),n=!n),n&&Le&&Hn(e),If(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=Sm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=Sm(e)}else t===27?(t=Le,Wn(e.type)?(e=cu,cu=null,Le=e):Le=t):Le=lt?Gt(e.stateNode.nextSibling):null;return!0}function va(){Le=lt=null,we=!1}function Yo(){var e=Bn;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),Bn=null),e}function Il(e){Bn===null?Bn=[e]:Bn.push(e)}var Vo=j(null),Sa=null,pn=null;function qn(e,t,n){J(Vo,t._currentValue),t._currentValue=n}function mn(e){e._currentValue=Vo.current,P(Vo)}function Po(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Go(e,t,n,l){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var p=c.child;u=u.firstContext;e:for(;u!==null;){var y=u;u=c;for(var w=0;w<t.length;w++)if(y.context===t[w]){u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),Po(u.return,n,e),l||(p=null);break e}u=y.next}}else if(c.tag===18){if(p=c.return,p===null)throw Error(o(341));p.lanes|=n,u=p.alternate,u!==null&&(u.lanes|=n),Po(p,n,e),p=null}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===e){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}}function ll(e,t,n,l){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var p=c.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var y=c.type;_t(c.pendingProps.value,p.value)||(e!==null?e.push(y):e=[y])}}else if(c===ge.current){if(p=c.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(jr):e=[jr])}c=c.return}e!==null&&Go(t,e,n,l),t.flags|=262144}function yi(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){Sa=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return $f(Sa,e)}function xi(e,t){return Sa===null&&wa(e),$f(e,t)}function $f(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pn===null){if(e===null)throw Error(o(308));pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pn=pn.next=t;return n}var ny=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ay=a.unstable_scheduleCallback,ly=a.unstable_NormalPriority,Qe={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xo(){return{controller:new ny,data:new Map,refCount:0}}function $l(e){e.refCount--,e.refCount===0&&ay(ly,function(){e.controller.abort()})}var Jl=null,Fo=0,rl=0,il=null;function ry(e,t){if(Jl===null){var n=Jl=[];Fo=0,rl=Zc(),il={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Fo++,t.then(Jf,Jf),t}function Jf(){if(--Fo===0&&Jl!==null){il!==null&&(il.status="fulfilled");var e=Jl;Jl=null,rl=0,il=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function iy(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(l.status="rejected",l.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),l}var Wf=R.S;R.S=function(e,t){Dp=Et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ry(e,t),Wf!==null&&Wf(e,t)};var ja=j(null);function Ko(){var e=ja.current;return e!==null?e:Ue.pooledCache}function vi(e,t){t===null?J(ja,ja.current):J(ja,t.pool)}function eh(){var e=Ko();return e===null?null:{parent:Qe._currentValue,pool:e}}var sl=Error(o(460)),Qo=Error(o(474)),Si=Error(o(542)),wi={then:function(){}};function th(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lh(e),e;default:if(typeof t.status=="string")t.then(un,un);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=l}},function(l){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lh(e),e}throw Ca=t,sl}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ca=n,sl):n}}var Ca=null;function ah(){if(Ca===null)throw Error(o(459));var e=Ca;return Ca=null,e}function lh(e){if(e===sl||e===Si)throw Error(o(483))}var ol=null,Wl=0;function ji(e){var t=Wl;return Wl+=1,ol===null&&(ol=[]),nh(ol,e,t)}function er(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ei(e,t){throw t.$$typeof===E?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rh(e){function t(z,C){if(e){var A=z.deletions;A===null?(z.deletions=[C],z.flags|=16):A.push(C)}}function n(z,C){if(!e)return null;for(;C!==null;)t(z,C),C=C.sibling;return null}function l(z){for(var C=new Map;z!==null;)z.key!==null?C.set(z.key,z):C.set(z.index,z),z=z.sibling;return C}function c(z,C){return z=fn(z,C),z.index=0,z.sibling=null,z}function u(z,C,A){return z.index=A,e?(A=z.alternate,A!==null?(A=A.index,A<C?(z.flags|=67108866,C):A):(z.flags|=67108866,C)):(z.flags|=1048576,C)}function p(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function y(z,C,A,G){return C===null||C.tag!==6?(C=Do(A,z.mode,G),C.return=z,C):(C=c(C,A),C.return=z,C)}function w(z,C,A,G){var ie=A.type;return ie===N?Y(z,C,A.props.children,G,A.key):C!==null&&(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===le&&Ea(ie)===C.type)?(C=c(C,A.props),er(C,A),C.return=z,C):(C=gi(A.type,A.key,A.props,null,z.mode,G),er(C,A),C.return=z,C)}function T(z,C,A,G){return C===null||C.tag!==4||C.stateNode.containerInfo!==A.containerInfo||C.stateNode.implementation!==A.implementation?(C=Lo(A,z.mode,G),C.return=z,C):(C=c(C,A.children||[]),C.return=z,C)}function Y(z,C,A,G,ie){return C===null||C.tag!==7?(C=xa(A,z.mode,G,ie),C.return=z,C):(C=c(C,A),C.return=z,C)}function K(z,C,A){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Do(""+C,z.mode,A),C.return=z,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case M:return A=gi(C.type,C.key,C.props,null,z.mode,A),er(A,C),A.return=z,A;case k:return C=Lo(C,z.mode,A),C.return=z,C;case le:return C=Ea(C),K(z,C,A)}if(he(C)||me(C))return C=xa(C,z.mode,A,null),C.return=z,C;if(typeof C.then=="function")return K(z,ji(C),A);if(C.$$typeof===q)return K(z,xi(z,C),A);Ei(z,C)}return null}function O(z,C,A,G){var ie=C!==null?C.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ie!==null?null:y(z,C,""+A,G);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case M:return A.key===ie?w(z,C,A,G):null;case k:return A.key===ie?T(z,C,A,G):null;case le:return A=Ea(A),O(z,C,A,G)}if(he(A)||me(A))return ie!==null?null:Y(z,C,A,G,null);if(typeof A.then=="function")return O(z,C,ji(A),G);if(A.$$typeof===q)return O(z,C,xi(z,A),G);Ei(z,A)}return null}function B(z,C,A,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return z=z.get(A)||null,y(C,z,""+G,ie);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return z=z.get(G.key===null?A:G.key)||null,w(C,z,G,ie);case k:return z=z.get(G.key===null?A:G.key)||null,T(C,z,G,ie);case le:return G=Ea(G),B(z,C,A,G,ie)}if(he(G)||me(G))return z=z.get(A)||null,Y(C,z,G,ie,null);if(typeof G.then=="function")return B(z,C,A,ji(G),ie);if(G.$$typeof===q)return B(z,C,A,xi(C,G),ie);Ei(C,G)}return null}function ee(z,C,A,G){for(var ie=null,Ce=null,ne=C,pe=C=0,Se=null;ne!==null&&pe<A.length;pe++){ne.index>pe?(Se=ne,ne=null):Se=ne.sibling;var ke=O(z,ne,A[pe],G);if(ke===null){ne===null&&(ne=Se);break}e&&ne&&ke.alternate===null&&t(z,ne),C=u(ke,C,pe),Ce===null?ie=ke:Ce.sibling=ke,Ce=ke,ne=Se}if(pe===A.length)return n(z,ne),we&&hn(z,pe),ie;if(ne===null){for(;pe<A.length;pe++)ne=K(z,A[pe],G),ne!==null&&(C=u(ne,C,pe),Ce===null?ie=ne:Ce.sibling=ne,Ce=ne);return we&&hn(z,pe),ie}for(ne=l(ne);pe<A.length;pe++)Se=B(ne,z,pe,A[pe],G),Se!==null&&(e&&Se.alternate!==null&&ne.delete(Se.key===null?pe:Se.key),C=u(Se,C,pe),Ce===null?ie=Se:Ce.sibling=Se,Ce=Se);return e&&ne.forEach(function(la){return t(z,la)}),we&&hn(z,pe),ie}function oe(z,C,A,G){if(A==null)throw Error(o(151));for(var ie=null,Ce=null,ne=C,pe=C=0,Se=null,ke=A.next();ne!==null&&!ke.done;pe++,ke=A.next()){ne.index>pe?(Se=ne,ne=null):Se=ne.sibling;var la=O(z,ne,ke.value,G);if(la===null){ne===null&&(ne=Se);break}e&&ne&&la.alternate===null&&t(z,ne),C=u(la,C,pe),Ce===null?ie=la:Ce.sibling=la,Ce=la,ne=Se}if(ke.done)return n(z,ne),we&&hn(z,pe),ie;if(ne===null){for(;!ke.done;pe++,ke=A.next())ke=K(z,ke.value,G),ke!==null&&(C=u(ke,C,pe),Ce===null?ie=ke:Ce.sibling=ke,Ce=ke);return we&&hn(z,pe),ie}for(ne=l(ne);!ke.done;pe++,ke=A.next())ke=B(ne,z,pe,ke.value,G),ke!==null&&(e&&ke.alternate!==null&&ne.delete(ke.key===null?pe:ke.key),C=u(ke,C,pe),Ce===null?ie=ke:Ce.sibling=ke,Ce=ke);return e&&ne.forEach(function(bx){return t(z,bx)}),we&&hn(z,pe),ie}function Oe(z,C,A,G){if(typeof A=="object"&&A!==null&&A.type===N&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case M:e:{for(var ie=A.key;C!==null;){if(C.key===ie){if(ie=A.type,ie===N){if(C.tag===7){n(z,C.sibling),G=c(C,A.props.children),G.return=z,z=G;break e}}else if(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===le&&Ea(ie)===C.type){n(z,C.sibling),G=c(C,A.props),er(G,A),G.return=z,z=G;break e}n(z,C);break}else t(z,C);C=C.sibling}A.type===N?(G=xa(A.props.children,z.mode,G,A.key),G.return=z,z=G):(G=gi(A.type,A.key,A.props,null,z.mode,G),er(G,A),G.return=z,z=G)}return p(z);case k:e:{for(ie=A.key;C!==null;){if(C.key===ie)if(C.tag===4&&C.stateNode.containerInfo===A.containerInfo&&C.stateNode.implementation===A.implementation){n(z,C.sibling),G=c(C,A.children||[]),G.return=z,z=G;break e}else{n(z,C);break}else t(z,C);C=C.sibling}G=Lo(A,z.mode,G),G.return=z,z=G}return p(z);case le:return A=Ea(A),Oe(z,C,A,G)}if(he(A))return ee(z,C,A,G);if(me(A)){if(ie=me(A),typeof ie!="function")throw Error(o(150));return A=ie.call(A),oe(z,C,A,G)}if(typeof A.then=="function")return Oe(z,C,ji(A),G);if(A.$$typeof===q)return Oe(z,C,xi(z,A),G);Ei(z,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,C!==null&&C.tag===6?(n(z,C.sibling),G=c(C,A),G.return=z,z=G):(n(z,C),G=Do(A,z.mode,G),G.return=z,z=G),p(z)):n(z,C)}return function(z,C,A,G){try{Wl=0;var ie=Oe(z,C,A,G);return ol=null,ie}catch(ne){if(ne===sl||ne===Si)throw ne;var Ce=Nt(29,ne,null,z.mode);return Ce.lanes=G,Ce.return=z,Ce}}}var ka=rh(!0),ih=rh(!1),Yn=!1;function Zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,t=mi(e),Pf(e,null,n),t}return pi(e,l,t,n),mi(e)}function tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Id(e,n)}}function $o(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var c=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?c=u=p:u=u.next=p,n=n.next}while(n!==null);u===null?c=u=t:u=u.next=t}else c=u=t;n={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Jo=!1;function nr(){if(Jo){var e=il;if(e!==null)throw e}}function ar(e,t,n,l){Jo=!1;var c=e.updateQueue;Yn=!1;var u=c.firstBaseUpdate,p=c.lastBaseUpdate,y=c.shared.pending;if(y!==null){c.shared.pending=null;var w=y,T=w.next;w.next=null,p===null?u=T:p.next=T,p=w;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,y=Y.lastBaseUpdate,y!==p&&(y===null?Y.firstBaseUpdate=T:y.next=T,Y.lastBaseUpdate=w))}if(u!==null){var K=c.baseState;p=0,Y=T=w=null,y=u;do{var O=y.lane&-536870913,B=O!==y.lane;if(B?(ve&O)===O:(l&O)===O){O!==0&&O===rl&&(Jo=!0),Y!==null&&(Y=Y.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ee=e,oe=y;O=t;var Oe=n;switch(oe.tag){case 1:if(ee=oe.payload,typeof ee=="function"){K=ee.call(Oe,K,O);break e}K=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=oe.payload,O=typeof ee=="function"?ee.call(Oe,K,O):ee,O==null)break e;K=v({},K,O);break e;case 2:Yn=!0}}O=y.callback,O!==null&&(e.flags|=64,B&&(e.flags|=8192),B=c.callbacks,B===null?c.callbacks=[O]:B.push(O))}else B={lane:O,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Y===null?(T=Y=B,w=K):Y=Y.next=B,p|=O;if(y=y.next,y===null){if(y=c.shared.pending,y===null)break;B=y,y=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);Y===null&&(w=K),c.baseState=w,c.firstBaseUpdate=T,c.lastBaseUpdate=Y,u===null&&(c.shared.lanes=0),Qn|=p,e.lanes=p,e.memoizedState=K}}function sh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function oh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)sh(n[e],t)}var cl=j(null),Ci=j(0);function ch(e,t){e=En,J(Ci,e),J(cl,t),En=e|t.baseLanes}function Wo(){J(Ci,En),J(cl,cl.current)}function ec(){En=Ci.current,P(cl),P(Ci)}var zt=j(null),Pt=null;function Gn(e){var t=e.alternate;J(Fe,Fe.current&1),J(zt,e),Pt===null&&(t===null||cl.current!==null||t.memoizedState!==null)&&(Pt=e)}function tc(e){J(Fe,Fe.current),J(zt,e),Pt===null&&(Pt=e)}function uh(e){e.tag===22?(J(Fe,Fe.current),J(zt,e),Pt===null&&(Pt=e)):Xn()}function Xn(){J(Fe,Fe.current),J(zt,zt.current)}function At(e){P(zt),Pt===e&&(Pt=null),P(Fe)}var Fe=j(0);function ki(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||su(n)||ou(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gn=0,fe=null,Te=null,Ze=null,_i=!1,ul=!1,_a=!1,Ni=0,lr=0,dl=null,sy=0;function Ge(){throw Error(o(321))}function nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function ac(e,t,n,l,c,u){return gn=u,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Kh:yc,_a=!1,u=n(l,c),_a=!1,ul&&(u=fh(t,n,l,c)),dh(e),u}function dh(e){R.H=sr;var t=Te!==null&&Te.next!==null;if(gn=0,Ze=Te=fe=null,_i=!1,lr=0,dl=null,t)throw Error(o(300));e===null||Ie||(e=e.dependencies,e!==null&&yi(e)&&(Ie=!0))}function fh(e,t,n,l){fe=e;var c=0;do{if(ul&&(dl=null),lr=0,ul=!1,25<=c)throw Error(o(301));if(c+=1,Ze=Te=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=Qh,u=t(n,l)}while(ul);return u}function oy(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?rr(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(fe.flags|=1024),t}function lc(){var e=Ni!==0;return Ni=0,e}function rc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ic(e){if(_i){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_i=!1}gn=0,Ze=Te=fe=null,ul=!1,lr=Ni=0,dl=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?fe.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Ke(){if(Te===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ze===null?fe.memoizedState:Ze.next;if(t!==null)Ze=t,Te=e;else{if(e===null)throw fe.alternate===null?Error(o(467)):Error(o(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ze===null?fe.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rr(e){var t=lr;return lr+=1,dl===null&&(dl=[]),e=nh(dl,e,t),t=fe,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Kh:yc),e}function Ai(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return rr(e);if(e.$$typeof===q)return rt(e)}throw Error(o(438,String(e)))}function sc(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zi(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=je;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function Ti(e){var t=Ke();return oc(t,Te,e)}function oc(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var c=e.baseQueue,u=l.pending;if(u!==null){if(c!==null){var p=c.next;c.next=u.next,u.next=p}t.baseQueue=c=u,l.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var y=p=null,w=null,T=t,Y=!1;do{var K=T.lane&-536870913;if(K!==T.lane?(ve&K)===K:(gn&K)===K){var O=T.revertLane;if(O===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),K===rl&&(Y=!0);else if((gn&O)===O){T=T.next,O===rl&&(Y=!0);continue}else K={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},w===null?(y=w=K,p=u):w=w.next=K,fe.lanes|=O,Qn|=O;K=T.action,_a&&n(u,K),u=T.hasEagerState?T.eagerState:n(u,K)}else O={lane:K,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},w===null?(y=w=O,p=u):w=w.next=O,fe.lanes|=K,Qn|=K;T=T.next}while(T!==null&&T!==t);if(w===null?p=u:w.next=y,!_t(u,e.memoizedState)&&(Ie=!0,Y&&(n=il,n!==null)))throw n;e.memoizedState=u,e.baseState=p,e.baseQueue=w,l.lastRenderedState=u}return c===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function cc(e){var t=Ke(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,c=n.pending,u=t.memoizedState;if(c!==null){n.pending=null;var p=c=c.next;do u=e(u,p.action),p=p.next;while(p!==c);_t(u,t.memoizedState)||(Ie=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function hh(e,t,n){var l=fe,c=Ke(),u=we;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var p=!_t((Te||c).memoizedState,n);if(p&&(c.memoizedState=n,Ie=!0),c=c.queue,fc(gh.bind(null,l,c,e),[e]),c.getSnapshot!==t||p||Ze!==null&&Ze.memoizedState.tag&1){if(l.flags|=2048,fl(9,{destroy:void 0},mh.bind(null,l,c,n,t),null),Ue===null)throw Error(o(349));u||(gn&127)!==0||ph(l,t,n)}return n}function ph(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=zi(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mh(e,t,n,l){t.value=n,t.getSnapshot=l,bh(t)&&yh(e)}function gh(e,t,n){return n(function(){bh(t)&&yh(e)})}function bh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function yh(e){var t=ya(e,2);t!==null&&vt(t,e,2)}function uc(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),_a){Mn(!0);try{n()}finally{Mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function xh(e,t,n,l){return e.baseState=n,oc(e,Te,typeof l=="function"?l:bn)}function cy(e,t,n,l,c){if(Mi(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};R.T!==null?n(!0):u.isTransition=!1,l(u),n=t.pending,n===null?(u.next=t.pending=u,vh(t,u)):(u.next=n.next,t.pending=n.next=u)}}function vh(e,t){var n=t.action,l=t.payload,c=e.state;if(t.isTransition){var u=R.T,p={};R.T=p;try{var y=n(c,l),w=R.S;w!==null&&w(p,y),Sh(e,t,y)}catch(T){dc(e,t,T)}finally{u!==null&&p.types!==null&&(u.types=p.types),R.T=u}}else try{u=n(c,l),Sh(e,t,u)}catch(T){dc(e,t,T)}}function Sh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){wh(e,t,l)},function(l){return dc(e,t,l)}):wh(e,t,n)}function wh(e,t,n){t.status="fulfilled",t.value=n,jh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,vh(e,n)))}function dc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,jh(t),t=t.next;while(t!==l)}e.action=null}function jh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Eh(e,t){return t}function Ch(e,t){if(we){var n=Ue.formState;if(n!==null){e:{var l=fe;if(we){if(Le){t:{for(var c=Le,u=Vt;c.nodeType!==8;){if(!u){c=null;break t}if(c=Gt(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Le=Gt(c.nextSibling),l=c.data==="F!";break e}}Hn(l)}l=!1}l&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eh,lastRenderedState:t},n.queue=l,n=Gh.bind(null,fe,l),l.dispatch=n,l=uc(!1),u=bc.bind(null,fe,!1,l.queue),l=dt(),c={state:t,dispatch:null,action:e,pending:null},l.queue=c,n=cy.bind(null,fe,c,u,n),c.dispatch=n,l.memoizedState=e,[t,n,!1]}function kh(e){var t=Ke();return _h(t,Te,e)}function _h(e,t,n){if(t=oc(e,t,Eh)[0],e=Ti(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=rr(t)}catch(p){throw p===sl?Si:p}else l=t;t=Ke();var c=t.queue,u=c.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,fl(9,{destroy:void 0},uy.bind(null,c,n),null)),[l,u,e]}function uy(e,t){e.action=t}function Nh(e){var t=Ke(),n=Te;if(n!==null)return _h(t,n,e);Ke(),t=t.memoizedState,n=Ke();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function fl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=fe.updateQueue,t===null&&(t=zi(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function zh(){return Ke().memoizedState}function Ri(e,t,n,l){var c=dt();fe.flags|=e,c.memoizedState=fl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Oi(e,t,n,l){var c=Ke();l=l===void 0?null:l;var u=c.memoizedState.inst;Te!==null&&l!==null&&nc(l,Te.memoizedState.deps)?c.memoizedState=fl(t,u,n,l):(fe.flags|=e,c.memoizedState=fl(1|t,u,n,l))}function Ah(e,t){Ri(8390656,8,e,t)}function fc(e,t){Oi(2048,8,e,t)}function dy(e){fe.flags|=4;var t=fe.updateQueue;if(t===null)t=zi(),fe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Th(e){var t=Ke().memoizedState;return dy({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Rh(e,t){return Oi(4,2,e,t)}function Oh(e,t){return Oi(4,4,e,t)}function Mh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uh(e,t,n){n=n!=null?n.concat([e]):null,Oi(4,4,Mh.bind(null,t,e),n)}function hc(){}function Dh(e,t){var n=Ke();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&nc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Lh(e,t){var n=Ke();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&nc(t,l[1]))return l[0];if(l=e(),_a){Mn(!0);try{e()}finally{Mn(!1)}}return n.memoizedState=[l,t],l}function pc(e,t,n){return n===void 0||(gn&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Bp(),fe.lanes|=e,Qn|=e,n)}function Bh(e,t,n,l){return _t(n,t)?n:cl.current!==null?(e=pc(e,n,l),_t(e,t)||(Ie=!0),e):(gn&42)===0||(gn&1073741824)!==0&&(ve&261930)===0?(Ie=!0,e.memoizedState=n):(e=Bp(),fe.lanes|=e,Qn|=e,t)}function Hh(e,t,n,l,c){var u=I.p;I.p=u!==0&&8>u?u:8;var p=R.T,y={};R.T=y,bc(e,!1,t,n);try{var w=c(),T=R.S;if(T!==null&&T(y,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var Y=iy(w,l);ir(e,t,Y,Ot(e))}else ir(e,t,l,Ot(e))}catch(K){ir(e,t,{then:function(){},status:"rejected",reason:K},Ot())}finally{I.p=u,p!==null&&y.types!==null&&(p.types=y.types),R.T=p}}function fy(){}function mc(e,t,n,l){if(e.tag!==5)throw Error(o(476));var c=qh(e).queue;Hh(e,c,t,te,n===null?fy:function(){return Yh(e),n(l)})}function qh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Yh(e){var t=qh(e);t.next===null&&(t=e.alternate.memoizedState),ir(e,t.next.queue,{},Ot())}function gc(){return rt(jr)}function Vh(){return Ke().memoizedState}function Ph(){return Ke().memoizedState}function hy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ot();e=Vn(n);var l=Pn(t,e,n);l!==null&&(vt(l,t,n),tr(l,t,n)),t={cache:Xo()},e.payload=t;return}t=t.return}}function py(e,t,n){var l=Ot();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Mi(e)?Xh(t,n):(n=Mo(e,t,n,l),n!==null&&(vt(n,e,l),Fh(n,t,l)))}function Gh(e,t,n){var l=Ot();ir(e,t,n,l)}function ir(e,t,n,l){var c={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mi(e))Xh(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var p=t.lastRenderedState,y=u(p,n);if(c.hasEagerState=!0,c.eagerState=y,_t(y,p))return pi(e,t,c,0),Ue===null&&hi(),!1}catch{}if(n=Mo(e,t,c,l),n!==null)return vt(n,e,l),Fh(n,t,l),!0}return!1}function bc(e,t,n,l){if(l={lane:2,revertLane:Zc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Mi(e)){if(t)throw Error(o(479))}else t=Mo(e,n,l,2),t!==null&&vt(t,e,2)}function Mi(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Xh(e,t){ul=_i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fh(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Id(e,n)}}var sr={readContext:rt,use:Ai,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};sr.useEffectEvent=Ge;var Kh={readContext:rt,use:Ai,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Ah,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ri(4194308,4,Mh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){Ri(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var l=e();if(_a){Mn(!0);try{e()}finally{Mn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=dt();if(n!==void 0){var c=n(t);if(_a){Mn(!0);try{n(t)}finally{Mn(!1)}}}else c=t;return l.memoizedState=l.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},l.queue=e,e=e.dispatch=py.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=uc(e);var t=e.queue,n=Gh.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:hc,useDeferredValue:function(e,t){var n=dt();return pc(n,e,t)},useTransition:function(){var e=uc(!1);return e=Hh.bind(null,fe,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=fe,c=dt();if(we){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ue===null)throw Error(o(349));(ve&127)!==0||ph(l,t,n)}c.memoizedState=n;var u={value:n,getSnapshot:t};return c.queue=u,Ah(gh.bind(null,l,u,e),[e]),l.flags|=2048,fl(9,{destroy:void 0},mh.bind(null,l,u,n,t),null),n},useId:function(){var e=dt(),t=Ue.identifierPrefix;if(we){var n=nn,l=tn;n=(l&~(1<<32-kt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=sy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:gc,useFormState:Ch,useActionState:Ch,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=bc.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:sc,useCacheRefresh:function(){return dt().memoizedState=hy.bind(null,fe)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((Ne&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},yc={readContext:rt,use:Ai,useCallback:Dh,useContext:rt,useEffect:fc,useImperativeHandle:Uh,useInsertionEffect:Rh,useLayoutEffect:Oh,useMemo:Lh,useReducer:Ti,useRef:zh,useState:function(){return Ti(bn)},useDebugValue:hc,useDeferredValue:function(e,t){var n=Ke();return Bh(n,Te.memoizedState,e,t)},useTransition:function(){var e=Ti(bn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:rr(e),t]},useSyncExternalStore:hh,useId:Vh,useHostTransitionStatus:gc,useFormState:kh,useActionState:kh,useOptimistic:function(e,t){var n=Ke();return xh(n,Te,e,t)},useMemoCache:sc,useCacheRefresh:Ph};yc.useEffectEvent=Th;var Qh={readContext:rt,use:Ai,useCallback:Dh,useContext:rt,useEffect:fc,useImperativeHandle:Uh,useInsertionEffect:Rh,useLayoutEffect:Oh,useMemo:Lh,useReducer:cc,useRef:zh,useState:function(){return cc(bn)},useDebugValue:hc,useDeferredValue:function(e,t){var n=Ke();return Te===null?pc(n,e,t):Bh(n,Te.memoizedState,e,t)},useTransition:function(){var e=cc(bn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:rr(e),t]},useSyncExternalStore:hh,useId:Vh,useHostTransitionStatus:gc,useFormState:Nh,useActionState:Nh,useOptimistic:function(e,t){var n=Ke();return Te!==null?xh(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:sc,useCacheRefresh:Ph};Qh.useEffectEvent=Th;function xc(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Ot(),c=Vn(l);c.payload=t,n!=null&&(c.callback=n),t=Pn(e,c,l),t!==null&&(vt(t,e,l),tr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Ot(),c=Vn(l);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=Pn(e,c,l),t!==null&&(vt(t,e,l),tr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),l=Vn(n);l.tag=2,t!=null&&(l.callback=t),t=Pn(e,l,n),t!==null&&(vt(t,e,n),tr(t,e,n))}};function Zh(e,t,n,l,c,u,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,p):t.prototype&&t.prototype.isPureReactComponent?!Kl(n,l)||!Kl(c,u):!0}function Ih(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&vc.enqueueReplaceState(t,t.state,null)}function Na(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function $h(e){fi(e)}function Jh(e){console.error(e)}function Wh(e){fi(e)}function Ui(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ep(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Sc(e,t,n){return n=Vn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ui(e,t)},n}function tp(e){return e=Vn(e),e.tag=3,e}function np(e,t,n,l){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var u=l.value;e.payload=function(){return c(u)},e.callback=function(){ep(t,n,l)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){ep(t,n,l),typeof c!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var y=l.stack;this.componentDidCatch(l.value,{componentStack:y!==null?y:""})})}function my(e,t,n,l,c){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&ll(t,n,c,!0),n=zt.current,n!==null){switch(n.tag){case 31:case 13:return Pt===null?Ki():n.alternate===null&&Xe===0&&(Xe=3),n.flags&=-257,n.flags|=65536,n.lanes=c,l===wi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Fc(e,l,c)),!1;case 22:return n.flags|=65536,l===wi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Fc(e,l,c)),!1}throw Error(o(435,n.tag))}return Fc(e,l,c),Ki(),!1}if(we)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,l!==qo&&(e=Error(o(422),{cause:l}),Il(Ht(e,n)))):(l!==qo&&(t=Error(o(423),{cause:l}),Il(Ht(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,l=Ht(l,n),c=Sc(e.stateNode,l,c),$o(e,c),Xe!==4&&(Xe=2)),!1;var u=Error(o(520),{cause:l});if(u=Ht(u,n),mr===null?mr=[u]:mr.push(u),Xe!==4&&(Xe=2),t===null)return!0;l=Ht(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=Sc(n.stateNode,l,e),$o(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Zn===null||!Zn.has(u))))return n.flags|=65536,c&=-c,n.lanes|=c,c=tp(c),np(c,e,n,l),$o(n,c),!1}n=n.return}while(n!==null);return!1}var wc=Error(o(461)),Ie=!1;function it(e,t,n,l){t.child=e===null?ih(t,null,n,l):ka(t,e.child,n,l)}function ap(e,t,n,l,c){n=n.render;var u=t.ref;if("ref"in l){var p={};for(var y in l)y!=="ref"&&(p[y]=l[y])}else p=l;return wa(t),l=ac(e,t,n,p,u,c),y=lc(),e!==null&&!Ie?(rc(e,t,c),yn(e,t,c)):(we&&y&&Bo(t),t.flags|=1,it(e,t,l,c),t.child)}function lp(e,t,n,l,c){if(e===null){var u=n.type;return typeof u=="function"&&!Uo(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,rp(e,t,u,l,c)):(e=gi(n.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Ac(e,c)){var p=u.memoizedProps;if(n=n.compare,n=n!==null?n:Kl,n(p,l)&&e.ref===t.ref)return yn(e,t,c)}return t.flags|=1,e=fn(u,l),e.ref=t.ref,e.return=t,t.child=e}function rp(e,t,n,l,c){if(e!==null){var u=e.memoizedProps;if(Kl(u,l)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=l=u,Ac(e,c))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,yn(e,t,c)}return jc(e,t,n,l,c)}function ip(e,t,n,l){var c=l.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(l=t.child=e.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;l=c&~u}else l=0,t.child=null;return sp(e,t,u,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vi(t,u!==null?u.cachePool:null),u!==null?ch(t,u):Wo(),uh(t);else return l=t.lanes=536870912,sp(e,t,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(vi(t,u.cachePool),ch(t,u),Xn(),t.memoizedState=null):(e!==null&&vi(t,null),Wo(),Xn());return it(e,t,c,n),t.child}function or(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sp(e,t,n,l,c){var u=Ko();return u=u===null?null:{parent:Qe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&vi(t,null),Wo(),uh(t),e!==null&&ll(e,t,l,!0),t.childLanes=c,null}function Di(e,t){return t=Bi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function op(e,t,n){return ka(t,e.child,null,n),e=Di(t,t.pendingProps),e.flags|=2,At(t),t.memoizedState=null,e}function gy(e,t,n){var l=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=Di(t,l),t.lanes=536870912,or(null,e);if(tc(t),(e=Le)?(e=vm(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=Xf(e),n.return=t,t.child=n,lt=t,Le=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return Di(t,l)}var u=e.memoizedState;if(u!==null){var p=u.dehydrated;if(tc(t),c)if(t.flags&256)t.flags&=-257,t=op(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ie||ll(e,t,n,!1),c=(n&e.childLanes)!==0,Ie||c){if(l=Ue,l!==null&&(p=$d(l,n),p!==0&&p!==u.retryLane))throw u.retryLane=p,ya(e,p),vt(l,e,p),wc;Ki(),t=op(e,t,n)}else e=u.treeContext,Le=Gt(p.nextSibling),lt=t,we=!0,Bn=null,Vt=!1,e!==null&&Qf(t,e),t=Di(t,l),t.flags|=4096;return t}return e=fn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Li(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function jc(e,t,n,l,c){return wa(t),n=ac(e,t,n,l,void 0,c),l=lc(),e!==null&&!Ie?(rc(e,t,c),yn(e,t,c)):(we&&l&&Bo(t),t.flags|=1,it(e,t,n,c),t.child)}function cp(e,t,n,l,c,u){return wa(t),t.updateQueue=null,n=fh(t,l,n,c),dh(e),l=lc(),e!==null&&!Ie?(rc(e,t,u),yn(e,t,u)):(we&&l&&Bo(t),t.flags|=1,it(e,t,n,u),t.child)}function up(e,t,n,l,c){if(wa(t),t.stateNode===null){var u=el,p=n.contextType;typeof p=="object"&&p!==null&&(u=rt(p)),u=new n(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=vc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},Zo(t),p=n.contextType,u.context=typeof p=="object"&&p!==null?rt(p):el,u.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(xc(t,n,p,l),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&vc.enqueueReplaceState(u,u.state,null),ar(t,l,u,c),nr(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var y=t.memoizedProps,w=Na(n,y);u.props=w;var T=u.context,Y=n.contextType;p=el,typeof Y=="object"&&Y!==null&&(p=rt(Y));var K=n.getDerivedStateFromProps;Y=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,Y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||T!==p)&&Ih(t,u,l,p),Yn=!1;var O=t.memoizedState;u.state=O,ar(t,l,u,c),nr(),T=t.memoizedState,y||O!==T||Yn?(typeof K=="function"&&(xc(t,n,K,l),T=t.memoizedState),(w=Yn||Zh(t,n,w,l,O,T,p))?(Y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),u.props=l,u.state=T,u.context=p,l=w):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,Io(e,t),p=t.memoizedProps,Y=Na(n,p),u.props=Y,K=t.pendingProps,O=u.context,T=n.contextType,w=el,typeof T=="object"&&T!==null&&(w=rt(T)),y=n.getDerivedStateFromProps,(T=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==K||O!==w)&&Ih(t,u,l,w),Yn=!1,O=t.memoizedState,u.state=O,ar(t,l,u,c),nr();var B=t.memoizedState;p!==K||O!==B||Yn||e!==null&&e.dependencies!==null&&yi(e.dependencies)?(typeof y=="function"&&(xc(t,n,y,l),B=t.memoizedState),(Y=Yn||Zh(t,n,Y,l,O,B,w)||e!==null&&e.dependencies!==null&&yi(e.dependencies))?(T||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,B,w),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,B,w)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=B),u.props=l,u.state=B,u.context=w,l=Y):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,Li(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=ka(t,e.child,null,c),t.child=ka(t,null,n,c)):it(e,t,n,c),t.memoizedState=u.state,e=t.child):e=yn(e,t,c),e}function dp(e,t,n,l){return va(),t.flags|=256,it(e,t,n,l),t.child}var Ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:eh()}}function kc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function fp(e,t,n){var l=t.pendingProps,c=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),p&&(c=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(c?Gn(t):Xn(),(e=Le)?(e=vm(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},n=Xf(e),n.return=t,t.child=n,lt=t,Le=null)):e=null,e===null)throw Hn(t);return ou(e)?t.lanes=32:t.lanes=536870912,null}var y=l.children;return l=l.fallback,c?(Xn(),c=t.mode,y=Bi({mode:"hidden",children:y},c),l=xa(l,c,n,null),y.return=t,l.return=t,y.sibling=l,t.child=y,l=t.child,l.memoizedState=Cc(n),l.childLanes=kc(e,p,n),t.memoizedState=Ec,or(null,l)):(Gn(t),_c(t,y))}var w=e.memoizedState;if(w!==null&&(y=w.dehydrated,y!==null)){if(u)t.flags&256?(Gn(t),t.flags&=-257,t=Nc(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),y=l.fallback,c=t.mode,l=Bi({mode:"visible",children:l.children},c),y=xa(y,c,n,null),y.flags|=2,l.return=t,y.return=t,l.sibling=y,t.child=l,ka(t,e.child,null,n),l=t.child,l.memoizedState=Cc(n),l.childLanes=kc(e,p,n),t.memoizedState=Ec,t=or(null,l));else if(Gn(t),ou(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var T=p.dgst;p=T,l=Error(o(419)),l.stack="",l.digest=p,Il({value:l,source:null,stack:null}),t=Nc(e,t,n)}else if(Ie||ll(e,t,n,!1),p=(n&e.childLanes)!==0,Ie||p){if(p=Ue,p!==null&&(l=$d(p,n),l!==0&&l!==w.retryLane))throw w.retryLane=l,ya(e,l),vt(p,e,l),wc;su(y)||Ki(),t=Nc(e,t,n)}else su(y)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Le=Gt(y.nextSibling),lt=t,we=!0,Bn=null,Vt=!1,e!==null&&Qf(t,e),t=_c(t,l.children),t.flags|=4096);return t}return c?(Xn(),y=l.fallback,c=t.mode,w=e.child,T=w.sibling,l=fn(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,T!==null?y=fn(T,y):(y=xa(y,c,n,null),y.flags|=2),y.return=t,l.return=t,l.sibling=y,t.child=l,or(null,l),l=t.child,y=e.child.memoizedState,y===null?y=Cc(n):(c=y.cachePool,c!==null?(w=Qe._currentValue,c=c.parent!==w?{parent:w,pool:w}:c):c=eh(),y={baseLanes:y.baseLanes|n,cachePool:c}),l.memoizedState=y,l.childLanes=kc(e,p,n),t.memoizedState=Ec,or(e.child,l)):(Gn(t),n=e.child,e=n.sibling,n=fn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function _c(e,t){return t=Bi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Bi(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function Nc(e,t,n){return ka(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Po(e.return,t,n)}function zc(e,t,n,l,c,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:c,treeForkCount:u}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=n,p.tailMode=c,p.treeForkCount=u)}function pp(e,t,n){var l=t.pendingProps,c=l.revealOrder,u=l.tail;l=l.children;var p=Fe.current,y=(p&2)!==0;if(y?(p=p&1|2,t.flags|=128):p&=1,J(Fe,p),it(e,t,l,n),l=we?Zl:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,n,t);else if(e.tag===19)hp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&ki(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),zc(t,!1,c,n,u,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ki(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}zc(t,!0,n,null,u,l);break;case"together":zc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ll(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&yi(e)))}function by(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),qn(t,Qe,e.memoizedState.cache),va();break;case 27:case 5:On(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,tc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?fp(e,t,n):(Gn(t),e=yn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var c=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(ll(e,t,n,!1),l=(n&t.childLanes)!==0),c){if(l)return pp(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),J(Fe,Fe.current),l)break;return null;case 22:return t.lanes=0,ip(e,t,n,t.pendingProps);case 24:qn(t,Qe,e.memoizedState.cache)}return yn(e,t,n)}function mp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Ac(e,n)&&(t.flags&128)===0)return Ie=!1,by(e,t,n);Ie=(e.flags&131072)!==0}else Ie=!1,we&&(t.flags&1048576)!==0&&Kf(t,Zl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e=="function")Uo(e)?(l=Na(e,l),t.tag=1,t=up(null,t,e,l,n)):(t.tag=0,t=jc(null,t,e,l,n));else{if(e!=null){var c=e.$$typeof;if(c===F){t.tag=11,t=ap(null,t,e,l,n);break e}else if(c===V){t.tag=14,t=lp(null,t,e,l,n);break e}}throw t=re(e)||e,Error(o(306,t,""))}}return t;case 0:return jc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,c=Na(l,t.pendingProps),up(e,t,l,c,n);case 3:e:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var u=t.memoizedState;c=u.element,Io(e,t),ar(t,l,null,n);var p=t.memoizedState;if(l=p.cache,qn(t,Qe,l),l!==u.cache&&Go(t,[Qe],n,!0),nr(),l=p.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=dp(e,t,l,n);break e}else if(l!==c){c=Ht(Error(o(424)),t),Il(c),t=dp(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Le=Gt(e.firstChild),lt=t,we=!0,Bn=null,Vt=!0,n=ih(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(va(),l===c){t=yn(e,t,n);break e}it(e,t,l,n)}t=t.child}return t;case 26:return Li(e,t),e===null?(n=km(t.type,null,t.pendingProps,null))?t.memoizedState=n:we||(n=t.type,e=t.pendingProps,l=es(se.current).createElement(n),l[at]=t,l[pt]=e,st(l,n,e),We(l),t.stateNode=l):t.memoizedState=km(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return On(t),e===null&&we&&(l=t.stateNode=jm(t.type,t.pendingProps,se.current),lt=t,Vt=!0,c=Le,Wn(t.type)?(cu=c,Le=Gt(l.firstChild)):Le=c),it(e,t,t.pendingProps.children,n),Li(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((c=l=Le)&&(l=Ky(l,t.type,t.pendingProps,Vt),l!==null?(t.stateNode=l,lt=t,Le=Gt(l.firstChild),Vt=!1,c=!0):c=!1),c||Hn(t)),On(t),c=t.type,u=t.pendingProps,p=e!==null?e.memoizedProps:null,l=u.children,lu(c,u)?l=null:p!==null&&lu(c,p)&&(t.flags|=32),t.memoizedState!==null&&(c=ac(e,t,oy,null,null,n),jr._currentValue=c),Li(e,t),it(e,t,l,n),t.child;case 6:return e===null&&we&&((e=n=Le)&&(n=Qy(n,t.pendingProps,Vt),n!==null?(t.stateNode=n,lt=t,Le=null,e=!0):e=!1),e||Hn(t)),null;case 13:return fp(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ka(t,null,l,n):it(e,t,l,n),t.child;case 11:return ap(e,t,t.type,t.pendingProps,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,qn(t,t.type,l.value),it(e,t,l.children,n),t.child;case 9:return c=t.type._context,l=t.pendingProps.children,wa(t),c=rt(c),l=l(c),t.flags|=1,it(e,t,l,n),t.child;case 14:return lp(e,t,t.type,t.pendingProps,n);case 15:return rp(e,t,t.type,t.pendingProps,n);case 19:return pp(e,t,n);case 31:return gy(e,t,n);case 22:return ip(e,t,n,t.pendingProps);case 24:return wa(t),l=rt(Qe),e===null?(c=Ko(),c===null&&(c=Ue,u=Xo(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=n),c=u),t.memoizedState={parent:l,cache:c},Zo(t),qn(t,Qe,c)):((e.lanes&n)!==0&&(Io(e,t),ar(t,null,null,n),nr()),c=e.memoizedState,u=t.memoizedState,c.parent!==l?(c={parent:l,cache:l},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),qn(t,Qe,l)):(l=u.cache,qn(t,Qe,l),l!==c.cache&&Go(t,[Qe],n,!0))),it(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function xn(e){e.flags|=4}function Tc(e,t,n,l,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Vp())e.flags|=8192;else throw Ca=wi,Qo}else e.flags&=-16777217}function gp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tm(t))if(Vp())e.flags|=8192;else throw Ca=wi,Qo}function Hi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Qd():536870912,e.lanes|=t,gl|=t)}function cr(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function yy(e,t,n){var l=t.pendingProps;switch(Ho(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),mn(Qe),Me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(al(t)?xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yo())),Be(t),null;case 26:var c=t.type,u=t.memoizedState;return e===null?(xn(t),u!==null?(Be(t),gp(t,u)):(Be(t),Tc(t,c,null,l,n))):u?u!==e.memoizedState?(xn(t),Be(t),gp(t,u)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&xn(t),Be(t),Tc(t,c,e,l,n)),null;case 27:if(da(t),n=se.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Be(t),null}e=Q.current,al(t)?Zf(t):(e=jm(c,l,n),t.stateNode=e,xn(t))}return Be(t),null;case 5:if(da(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Be(t),null}if(u=Q.current,al(t))Zf(t);else{var p=es(se.current);switch(u){case 1:u=p.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=p.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=p.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=p.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=p.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?p.createElement("select",{is:l.is}):p.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?p.createElement(c,{is:l.is}):p.createElement(c)}}u[at]=t,u[pt]=l;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)u.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=u;e:switch(st(u,c,l),c){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&xn(t)}}return Be(t),Tc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=se.current,al(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,c=lt,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}e[at]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||fm(e.nodeValue,n)),e||Hn(t,!0)}else e=es(e).createTextNode(l),e[at]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=al(t),n!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[at]=t}else va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=Yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(At(t),t):(At(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Be(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=al(t),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[at]=t}else va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),c=!1}else c=Yo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(At(t),t):(At(t),null)}return At(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==c&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Hi(t,t.updateQueue),Be(t),null);case 4:return Me(),e===null&&Wc(t.stateNode.containerInfo),Be(t),null;case 10:return mn(t.type),Be(t),null;case 19:if(P(Fe),l=t.memoizedState,l===null)return Be(t),null;if(c=(t.flags&128)!==0,u=l.rendering,u===null)if(c)cr(l,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=ki(e),u!==null){for(t.flags|=128,cr(l,!1),e=u.updateQueue,t.updateQueue=e,Hi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Gf(n,e),n=n.sibling;return J(Fe,Fe.current&1|2),we&&hn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Et()>Gi&&(t.flags|=128,c=!0,cr(l,!1),t.lanes=4194304)}else{if(!c)if(e=ki(u),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Hi(t,e),cr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!we)return Be(t),null}else 2*Et()-l.renderingStartTime>Gi&&n!==536870912&&(t.flags|=128,c=!0,cr(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(e=l.last,e!==null?e.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Et(),e.sibling=null,n=Fe.current,J(Fe,c?n&1|2:n&1),we&&hn(t,l.treeForkCount),e):(Be(t),null);case 22:case 23:return At(t),ec(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&Hi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&P(ja),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),mn(Qe),Be(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function xy(e,t){switch(Ho(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(Qe),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return da(t),null;case 31:if(t.memoizedState!==null){if(At(t),t.alternate===null)throw Error(o(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(At(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Fe),null;case 4:return Me(),null;case 10:return mn(t.type),null;case 22:case 23:return At(t),ec(),e!==null&&P(ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return mn(Qe),null;case 25:return null;default:return null}}function bp(e,t){switch(Ho(t),t.tag){case 3:mn(Qe),Me();break;case 26:case 27:case 5:da(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&At(t);break;case 13:At(t);break;case 19:P(Fe);break;case 10:mn(t.type);break;case 22:case 23:At(t),ec(),e!==null&&P(ja);break;case 24:mn(Qe)}}function ur(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var c=l.next;n=c;do{if((n.tag&e)===e){l=void 0;var u=n.create,p=n.inst;l=u(),p.destroy=l}n=n.next}while(n!==c)}}catch(y){Ae(t,t.return,y)}}function Fn(e,t,n){try{var l=t.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var u=c.next;l=u;do{if((l.tag&e)===e){var p=l.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,c=t;var w=n,T=y;try{T()}catch(Y){Ae(c,w,Y)}}}l=l.next}while(l!==u)}}catch(Y){Ae(t,t.return,Y)}}function yp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{oh(t,n)}catch(l){Ae(e,e.return,l)}}}function xp(e,t,n){n.props=Na(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ae(e,t,l)}}function dr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(c){Ae(e,t,c)}}function an(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(c){Ae(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Ae(e,t,c)}else n.current=null}function vp(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(c){Ae(e,e.return,c)}}function Rc(e,t,n){try{var l=e.stateNode;Yy(l,e.type,n,t),l[pt]=t}catch(c){Ae(e,e.return,c)}}function Sp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wn(e.type)||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(l!==4&&(l===27&&Wn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Mc(e,t,n),e=e.sibling;e!==null;)Mc(e,t,n),e=e.sibling}function qi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Wn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qi(e,t,n),e=e.sibling;e!==null;)qi(e,t,n),e=e.sibling}function wp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);st(t,l,n),t[at]=e,t[pt]=n}catch(u){Ae(e,e.return,u)}}var vn=!1,$e=!1,Uc=!1,jp=typeof WeakSet=="function"?WeakSet:Set,et=null;function vy(e,t){if(e=e.containerInfo,nu=ss,e=Uf(e),No(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var c=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var p=0,y=-1,w=-1,T=0,Y=0,K=e,O=null;t:for(;;){for(var B;K!==n||c!==0&&K.nodeType!==3||(y=p+c),K!==u||l!==0&&K.nodeType!==3||(w=p+l),K.nodeType===3&&(p+=K.nodeValue.length),(B=K.firstChild)!==null;)O=K,K=B;for(;;){if(K===e)break t;if(O===n&&++T===c&&(y=p),O===u&&++Y===l&&(w=p),(B=K.nextSibling)!==null)break;K=O,O=K.parentNode}K=B}n=y===-1||w===-1?null:{start:y,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(au={focusedElem:e,selectionRange:n},ss=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,c=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var ee=Na(n.type,c);e=l.getSnapshotBeforeUpdate(ee,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ae(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)iu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":iu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function Ep(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:wn(e,n),l&4&&ur(5,n);break;case 1:if(wn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Ae(n,n.return,p)}else{var c=Na(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ae(n,n.return,p)}}l&64&&yp(n),l&512&&dr(n,n.return);break;case 3:if(wn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{oh(e,t)}catch(p){Ae(n,n.return,p)}}break;case 27:t===null&&l&4&&wp(n);case 26:case 5:wn(e,n),t===null&&l&4&&vp(n),l&512&&dr(n,n.return);break;case 12:wn(e,n);break;case 31:wn(e,n),l&4&&_p(e,n);break;case 13:wn(e,n),l&4&&Np(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=zy.bind(null,n),Zy(e,n))));break;case 22:if(l=n.memoizedState!==null||vn,!l){t=t!==null&&t.memoizedState!==null||$e,c=vn;var u=$e;vn=l,($e=t)&&!u?jn(e,n,(n.subtreeFlags&8772)!==0):wn(e,n),vn=c,$e=u}break;case 30:break;default:wn(e,n)}}function Cp(e){var t=e.alternate;t!==null&&(e.alternate=null,Cp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&uo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,gt=!1;function Sn(e,t,n){for(n=n.child;n!==null;)kp(e,t,n),n=n.sibling}function kp(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 26:$e||an(n,t),Sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$e||an(n,t);var l=Ye,c=gt;Wn(n.type)&&(Ye=n.stateNode,gt=!1),Sn(e,t,n),vr(n.stateNode),Ye=l,gt=c;break;case 5:$e||an(n,t);case 6:if(l=Ye,c=gt,Ye=null,Sn(e,t,n),Ye=l,gt=c,Ye!==null)if(gt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(u){Ae(n,t,u)}else try{Ye.removeChild(n.stateNode)}catch(u){Ae(n,t,u)}break;case 18:Ye!==null&&(gt?(e=Ye,ym(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),El(e)):ym(Ye,n.stateNode));break;case 4:l=Ye,c=gt,Ye=n.stateNode.containerInfo,gt=!0,Sn(e,t,n),Ye=l,gt=c;break;case 0:case 11:case 14:case 15:Fn(2,n,t),$e||Fn(4,n,t),Sn(e,t,n);break;case 1:$e||(an(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&xp(n,t,l)),Sn(e,t,n);break;case 21:Sn(e,t,n);break;case 22:$e=(l=$e)||n.memoizedState!==null,Sn(e,t,n),$e=l;break;default:Sn(e,t,n)}}function _p(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{El(e)}catch(n){Ae(t,t.return,n)}}}function Np(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{El(e)}catch(n){Ae(t,t.return,n)}}function Sy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new jp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new jp),t;default:throw Error(o(435,e.tag))}}function Yi(e,t){var n=Sy(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var c=Ay.bind(null,e,l);l.then(c,c)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var c=n[l],u=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 27:if(Wn(y.type)){Ye=y.stateNode,gt=!1;break e}break;case 5:Ye=y.stateNode,gt=!1;break e;case 3:case 4:Ye=y.stateNode.containerInfo,gt=!0;break e}y=y.return}if(Ye===null)throw Error(o(160));kp(u,p,c),Ye=null,gt=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zp(t,e),t=t.sibling}var Zt=null;function zp(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),yt(e),l&4&&(Fn(3,e,e.return),ur(3,e),Fn(5,e,e.return));break;case 1:bt(t,e),yt(e),l&512&&($e||n===null||an(n,n.return)),l&64&&vn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var c=Zt;if(bt(t,e),yt(e),l&512&&($e||n===null||an(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":u=c.getElementsByTagName("title")[0],(!u||u[Bl]||u[at]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(l),c.head.insertBefore(u,c.querySelector("head > title"))),st(u,l,n),u[at]=e,We(u),l=u;break e;case"link":var p=zm("link","href",c).get(l+(n.href||""));if(p){for(var y=0;y<p.length;y++)if(u=p[y],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(y,1);break t}}u=c.createElement(l),st(u,l,n),c.head.appendChild(u);break;case"meta":if(p=zm("meta","content",c).get(l+(n.content||""))){for(y=0;y<p.length;y++)if(u=p[y],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(y,1);break t}}u=c.createElement(l),st(u,l,n),c.head.appendChild(u);break;default:throw Error(o(468,l))}u[at]=e,We(u),l=u}e.stateNode=l}else Am(c,e.type,e.stateNode);else e.stateNode=Nm(c,l,e.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?Am(c,e.type,e.stateNode):Nm(c,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Rc(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),yt(e),l&512&&($e||n===null||an(n,n.return)),n!==null&&l&4&&Rc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),yt(e),l&512&&($e||n===null||an(n,n.return)),e.flags&32){c=e.stateNode;try{Ka(c,"")}catch(ee){Ae(e,e.return,ee)}}l&4&&e.stateNode!=null&&(c=e.memoizedProps,Rc(e,c,n!==null?n.memoizedProps:c)),l&1024&&(Uc=!0);break;case 6:if(bt(t,e),yt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ee){Ae(e,e.return,ee)}}break;case 3:if(as=null,c=Zt,Zt=ts(t.containerInfo),bt(t,e),Zt=c,yt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{El(t.containerInfo)}catch(ee){Ae(e,e.return,ee)}Uc&&(Uc=!1,Ap(e));break;case 4:l=Zt,Zt=ts(e.stateNode.containerInfo),bt(t,e),yt(e),Zt=l;break;case 12:bt(t,e),yt(e);break;case 31:bt(t,e),yt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yi(e,l)));break;case 13:bt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Pi=Et()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yi(e,l)));break;case 22:c=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,T=vn,Y=$e;if(vn=T||c,$e=Y||w,bt(t,e),$e=Y,vn=T,yt(e),l&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||w||vn||$e||za(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(u=w.stateNode,c)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=w.stateNode;var K=w.memoizedProps.style,O=K!=null&&K.hasOwnProperty("display")?K.display:null;y.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ee){Ae(w,w.return,ee)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=c?"":w.memoizedProps}catch(ee){Ae(w,w.return,ee)}}}else if(t.tag===18){if(n===null){w=t;try{var B=w.stateNode;c?xm(B,!0):xm(w.stateNode,!1)}catch(ee){Ae(w,w.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Yi(e,n))));break;case 19:bt(t,e),yt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yi(e,l)));break;case 30:break;case 21:break;default:bt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Sp(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var c=n.stateNode,u=Oc(e);qi(e,u,c);break;case 5:var p=n.stateNode;n.flags&32&&(Ka(p,""),n.flags&=-33);var y=Oc(e);qi(e,y,p);break;case 3:case 4:var w=n.stateNode.containerInfo,T=Oc(e);Mc(e,T,w);break;default:throw Error(o(161))}}catch(Y){Ae(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ap(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ap(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ep(e,t.alternate,t),t=t.sibling}function za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fn(4,t,t.return),za(t);break;case 1:an(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&xp(t,t.return,n),za(t);break;case 27:vr(t.stateNode);case 26:case 5:an(t,t.return),za(t);break;case 22:t.memoizedState===null&&za(t);break;case 30:za(t);break;default:za(t)}e=e.sibling}}function jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,c=e,u=t,p=u.flags;switch(u.tag){case 0:case 11:case 15:jn(c,u,n),ur(4,u);break;case 1:if(jn(c,u,n),l=u,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(T){Ae(l,l.return,T)}if(l=u,c=l.updateQueue,c!==null){var y=l.stateNode;try{var w=c.shared.hiddenCallbacks;if(w!==null)for(c.shared.hiddenCallbacks=null,c=0;c<w.length;c++)sh(w[c],y)}catch(T){Ae(l,l.return,T)}}n&&p&64&&yp(u),dr(u,u.return);break;case 27:wp(u);case 26:case 5:jn(c,u,n),n&&l===null&&p&4&&vp(u),dr(u,u.return);break;case 12:jn(c,u,n);break;case 31:jn(c,u,n),n&&p&4&&_p(c,u);break;case 13:jn(c,u,n),n&&p&4&&Np(c,u);break;case 22:u.memoizedState===null&&jn(c,u,n),dr(u,u.return);break;case 30:break;default:jn(c,u,n)}t=t.sibling}}function Dc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$l(n))}function Lc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e))}function It(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tp(e,t,n,l),t=t.sibling}function Tp(e,t,n,l){var c=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,l),c&2048&&ur(9,t);break;case 1:It(e,t,n,l);break;case 3:It(e,t,n,l),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e)));break;case 12:if(c&2048){It(e,t,n,l),e=t.stateNode;try{var u=t.memoizedProps,p=u.id,y=u.onPostCommit;typeof y=="function"&&y(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ae(t,t.return,w)}}else It(e,t,n,l);break;case 31:It(e,t,n,l);break;case 13:It(e,t,n,l);break;case 23:break;case 22:u=t.stateNode,p=t.alternate,t.memoizedState!==null?u._visibility&2?It(e,t,n,l):fr(e,t):u._visibility&2?It(e,t,n,l):(u._visibility|=2,hl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Dc(p,t);break;case 24:It(e,t,n,l),c&2048&&Lc(t.alternate,t);break;default:It(e,t,n,l)}}function hl(e,t,n,l,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,p=t,y=n,w=l,T=p.flags;switch(p.tag){case 0:case 11:case 15:hl(u,p,y,w,c),ur(8,p);break;case 23:break;case 22:var Y=p.stateNode;p.memoizedState!==null?Y._visibility&2?hl(u,p,y,w,c):fr(u,p):(Y._visibility|=2,hl(u,p,y,w,c)),c&&T&2048&&Dc(p.alternate,p);break;case 24:hl(u,p,y,w,c),c&&T&2048&&Lc(p.alternate,p);break;default:hl(u,p,y,w,c)}t=t.sibling}}function fr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,c=l.flags;switch(l.tag){case 22:fr(n,l),c&2048&&Dc(l.alternate,l);break;case 24:fr(n,l),c&2048&&Lc(l.alternate,l);break;default:fr(n,l)}t=t.sibling}}var hr=8192;function pl(e,t,n){if(e.subtreeFlags&hr)for(e=e.child;e!==null;)Rp(e,t,n),e=e.sibling}function Rp(e,t,n){switch(e.tag){case 26:pl(e,t,n),e.flags&hr&&e.memoizedState!==null&&sx(n,Zt,e.memoizedState,e.memoizedProps);break;case 5:pl(e,t,n);break;case 3:case 4:var l=Zt;Zt=ts(e.stateNode.containerInfo),pl(e,t,n),Zt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=hr,hr=16777216,pl(e,t,n),hr=l):pl(e,t,n));break;default:pl(e,t,n)}}function Op(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function pr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];et=l,Up(l,e)}Op(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mp(e),e=e.sibling}function Mp(e){switch(e.tag){case 0:case 11:case 15:pr(e),e.flags&2048&&Fn(9,e,e.return);break;case 3:pr(e);break;case 12:pr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vi(e)):pr(e);break;default:pr(e)}}function Vi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];et=l,Up(l,e)}Op(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fn(8,t,t.return),Vi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Vi(t));break;default:Vi(t)}e=e.sibling}}function Up(e,t){for(;et!==null;){var n=et;switch(n.tag){case 0:case 11:case 15:Fn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$l(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,et=l;else e:for(n=e;et!==null;){l=et;var c=l.sibling,u=l.return;if(Cp(l),l===n){et=null;break e}if(c!==null){c.return=u,et=c;break e}et=u}}}var wy={getCacheForType:function(e){var t=rt(Qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Qe).controller.signal}},jy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ue=null,be=null,ve=0,ze=0,Tt=null,Kn=!1,ml=!1,Bc=!1,En=0,Xe=0,Qn=0,Aa=0,Hc=0,Rt=0,gl=0,mr=null,xt=null,qc=!1,Pi=0,Dp=0,Gi=1/0,Xi=null,Zn=null,Je=0,In=null,bl=null,Cn=0,Yc=0,Vc=null,Lp=null,gr=0,Pc=null;function Ot(){return(Ne&2)!==0&&ve!==0?ve&-ve:R.T!==null?Zc():Jd()}function Bp(){if(Rt===0)if((ve&536870912)===0||we){var e=Wr;Wr<<=1,(Wr&3932160)===0&&(Wr=262144),Rt=e}else Rt=536870912;return e=zt.current,e!==null&&(e.flags|=32),Rt}function vt(e,t,n){(e===Ue&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(yl(e,0),$n(e,ve,Rt,!1)),Ll(e,n),((Ne&2)===0||e!==Ue)&&(e===Ue&&((Ne&2)===0&&(Aa|=n),Xe===4&&$n(e,ve,Rt,!1)),ln(e))}function Hp(e,t,n){if((Ne&6)!==0)throw Error(o(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Dl(e,t),c=l?ky(e,t):Xc(e,t,!0),u=l;do{if(c===0){ml&&!l&&$n(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Ey(n)){c=Xc(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var y=e;c=mr;var w=y.current.memoizedState.isDehydrated;if(w&&(yl(y,p).flags|=256),p=Xc(y,p,!1),p!==2){if(Bc&&!w){y.errorRecoveryDisabledLanes|=u,Aa|=u,c=4;break e}u=xt,xt=c,u!==null&&(xt===null?xt=u:xt.push.apply(xt,u))}c=p}if(u=!1,c!==2)continue}}if(c===1){yl(e,0),$n(e,t,0,!0);break}e:{switch(l=e,u=c,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:$n(l,t,Rt,!Kn);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(c=Pi+300-Et(),10<c)){if($n(l,t,Rt,!Kn),ti(l,0,!0)!==0)break e;Cn=t,l.timeoutHandle=gm(qp.bind(null,l,n,xt,Xi,qc,t,Rt,Aa,gl,Kn,u,"Throttled",-0,0),c);break e}qp(l,n,xt,Xi,qc,t,Rt,Aa,gl,Kn,u,null,-0,0)}}break}while(!0);ln(e)}function qp(e,t,n,l,c,u,p,y,w,T,Y,K,O,B){if(e.timeoutHandle=-1,K=t.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Rp(t,u,K);var ee=(u&62914560)===u?Pi-Et():(u&4194048)===u?Dp-Et():0;if(ee=ox(K,ee),ee!==null){Cn=u,e.cancelPendingCommit=ee(Qp.bind(null,e,t,u,n,l,c,p,y,w,Y,K,null,O,B)),$n(e,u,p,!T);return}}Qp(e,t,u,n,l,c,p,y,w)}function Ey(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var c=n[l],u=c.getSnapshot;c=c.value;try{if(!_t(u(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t,n,l){t&=~Hc,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var c=t;0<c;){var u=31-kt(c),p=1<<u;l[u]=-1,c&=~p}n!==0&&Zd(e,n,t)}function Fi(){return(Ne&6)===0?(br(0),!1):!0}function Gc(){if(be!==null){if(ze===0)var e=be.return;else e=be,pn=Sa=null,ic(e),ol=null,Wl=0,e=be;for(;e!==null;)bp(e.alternate,e),e=e.return;be=null}}function yl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Gy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Cn=0,Gc(),Ue=e,be=n=fn(e.current,null),ve=t,ze=0,Tt=null,Kn=!1,ml=Dl(e,t),Bc=!1,gl=Rt=Hc=Aa=Qn=Xe=0,xt=mr=null,qc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var c=31-kt(l),u=1<<c;t|=e[c],l&=~u}return En=t,hi(),n}function Yp(e,t){fe=null,R.H=sr,t===sl||t===Si?(t=ah(),ze=3):t===Qo?(t=ah(),ze=4):ze=t===wc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,be===null&&(Xe=1,Ui(e,Ht(t,e.current)))}function Vp(){var e=zt.current;return e===null?!0:(ve&4194048)===ve?Pt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Pt:!1}function Pp(){var e=R.H;return R.H=sr,e===null?sr:e}function Gp(){var e=R.A;return R.A=wy,e}function Ki(){Xe=4,Kn||(ve&4194048)!==ve&&zt.current!==null||(ml=!0),(Qn&134217727)===0&&(Aa&134217727)===0||Ue===null||$n(Ue,ve,Rt,!1)}function Xc(e,t,n){var l=Ne;Ne|=2;var c=Pp(),u=Gp();(Ue!==e||ve!==t)&&(Xi=null,yl(e,t)),t=!1;var p=Xe;e:do try{if(ze!==0&&be!==null){var y=be,w=Tt;switch(ze){case 8:Gc(),p=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var T=ze;if(ze=0,Tt=null,xl(e,y,w,T),n&&ml){p=0;break e}break;default:T=ze,ze=0,Tt=null,xl(e,y,w,T)}}Cy(),p=Xe;break}catch(Y){Yp(e,Y)}while(!0);return t&&e.shellSuspendCounter++,pn=Sa=null,Ne=l,R.H=c,R.A=u,be===null&&(Ue=null,ve=0,hi()),p}function Cy(){for(;be!==null;)Xp(be)}function ky(e,t){var n=Ne;Ne|=2;var l=Pp(),c=Gp();Ue!==e||ve!==t?(Xi=null,Gi=Et()+500,yl(e,t)):ml=Dl(e,t);e:do try{if(ze!==0&&be!==null){t=be;var u=Tt;t:switch(ze){case 1:ze=0,Tt=null,xl(e,t,u,1);break;case 2:case 9:if(th(u)){ze=0,Tt=null,Fp(t);break}t=function(){ze!==2&&ze!==9||Ue!==e||(ze=7),ln(e)},u.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:th(u)?(ze=0,Tt=null,Fp(t)):(ze=0,Tt=null,xl(e,t,u,7));break;case 5:var p=null;switch(be.tag){case 26:p=be.memoizedState;case 5:case 27:var y=be;if(p?Tm(p):y.stateNode.complete){ze=0,Tt=null;var w=y.sibling;if(w!==null)be=w;else{var T=y.return;T!==null?(be=T,Qi(T)):be=null}break t}}ze=0,Tt=null,xl(e,t,u,5);break;case 6:ze=0,Tt=null,xl(e,t,u,6);break;case 8:Gc(),Xe=6;break e;default:throw Error(o(462))}}_y();break}catch(Y){Yp(e,Y)}while(!0);return pn=Sa=null,R.H=l,R.A=c,Ne=n,be!==null?0:(Ue=null,ve=0,hi(),Xe)}function _y(){for(;be!==null&&!I1();)Xp(be)}function Xp(e){var t=mp(e.alternate,e,En);e.memoizedProps=e.pendingProps,t===null?Qi(e):be=t}function Fp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=cp(n,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=cp(n,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:ic(t);default:bp(n,t),t=be=Gf(t,En),t=mp(n,t,En)}e.memoizedProps=e.pendingProps,t===null?Qi(e):be=t}function xl(e,t,n,l){pn=Sa=null,ic(t),ol=null,Wl=0;var c=t.return;try{if(my(e,c,t,n,ve)){Xe=1,Ui(e,Ht(n,e.current)),be=null;return}}catch(u){if(c!==null)throw be=c,u;Xe=1,Ui(e,Ht(n,e.current)),be=null;return}t.flags&32768?(we||l===1?e=!0:ml||(ve&536870912)!==0?e=!1:(Kn=e=!0,(l===2||l===9||l===3||l===6)&&(l=zt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Kp(t,e)):Qi(t)}function Qi(e){var t=e;do{if((t.flags&32768)!==0){Kp(t,Kn);return}e=t.return;var n=yy(t.alternate,t,En);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Xe===0&&(Xe=5)}function Kp(e,t){do{var n=xy(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Xe=6,be=null}function Qp(e,t,n,l,c,u,p,y,w){e.cancelPendingCommit=null;do Zi();while(Je!==0);if((Ne&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=Oo,ib(e,n,u,p,y,w),e===Ue&&(be=Ue=null,ve=0),bl=t,In=e,Cn=n,Yc=u,Vc=c,Lp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ty($r,function(){return Wp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,c=I.p,I.p=2,p=Ne,Ne|=4;try{vy(e,t,n)}finally{Ne=p,I.p=c,R.T=l}}Je=1,Zp(),Ip(),$p()}}function Zp(){if(Je===1){Je=0;var e=In,t=bl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var l=I.p;I.p=2;var c=Ne;Ne|=4;try{zp(t,e);var u=au,p=Uf(e.containerInfo),y=u.focusedElem,w=u.selectionRange;if(p!==y&&y&&y.ownerDocument&&Mf(y.ownerDocument.documentElement,y)){if(w!==null&&No(y)){var T=w.start,Y=w.end;if(Y===void 0&&(Y=T),"selectionStart"in y)y.selectionStart=T,y.selectionEnd=Math.min(Y,y.value.length);else{var K=y.ownerDocument||document,O=K&&K.defaultView||window;if(O.getSelection){var B=O.getSelection(),ee=y.textContent.length,oe=Math.min(w.start,ee),Oe=w.end===void 0?oe:Math.min(w.end,ee);!B.extend&&oe>Oe&&(p=Oe,Oe=oe,oe=p);var z=Of(y,oe),C=Of(y,Oe);if(z&&C&&(B.rangeCount!==1||B.anchorNode!==z.node||B.anchorOffset!==z.offset||B.focusNode!==C.node||B.focusOffset!==C.offset)){var A=K.createRange();A.setStart(z.node,z.offset),B.removeAllRanges(),oe>Oe?(B.addRange(A),B.extend(C.node,C.offset)):(A.setEnd(C.node,C.offset),B.addRange(A))}}}}for(K=[],B=y;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<K.length;y++){var G=K[y];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}ss=!!nu,au=nu=null}finally{Ne=c,I.p=l,R.T=n}}e.current=t,Je=2}}function Ip(){if(Je===2){Je=0;var e=In,t=bl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var l=I.p;I.p=2;var c=Ne;Ne|=4;try{Ep(e,t.alternate,t)}finally{Ne=c,I.p=l,R.T=n}}Je=3}}function $p(){if(Je===4||Je===3){Je=0,$1();var e=In,t=bl,n=Cn,l=Lp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,bl=In=null,Jp(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Zn=null),oo(n),t=t.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,c=I.p,I.p=2,R.T=null;try{for(var u=e.onRecoverableError,p=0;p<l.length;p++){var y=l[p];u(y.value,{componentStack:y.stack})}}finally{R.T=t,I.p=c}}(Cn&3)!==0&&Zi(),ln(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===Pc?gr++:(gr=0,Pc=e):gr=0,br(0)}}function Jp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$l(t)))}function Zi(){return Zp(),Ip(),$p(),Wp()}function Wp(){if(Je!==5)return!1;var e=In,t=Yc;Yc=0;var n=oo(Cn),l=R.T,c=I.p;try{I.p=32>n?32:n,R.T=null,n=Vc,Vc=null;var u=In,p=Cn;if(Je=0,bl=In=null,Cn=0,(Ne&6)!==0)throw Error(o(331));var y=Ne;if(Ne|=4,Mp(u.current),Tp(u,u.current,p,n),Ne=y,br(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Ul,u)}catch{}return!0}finally{I.p=c,R.T=l,Jp(e,t)}}function em(e,t,n){t=Ht(n,t),t=Sc(e.stateNode,t,2),e=Pn(e,t,2),e!==null&&(Ll(e,2),ln(e))}function Ae(e,t,n){if(e.tag===3)em(e,e,n);else for(;t!==null;){if(t.tag===3){em(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Zn===null||!Zn.has(l))){e=Ht(n,e),n=tp(2),l=Pn(t,n,2),l!==null&&(np(n,l,t,e),Ll(l,2),ln(l));break}}t=t.return}}function Fc(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new jy;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(n)||(Bc=!0,c.add(n),e=Ny.bind(null,e,t,n),t.then(e,e))}function Ny(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ue===e&&(ve&n)===n&&(Xe===4||Xe===3&&(ve&62914560)===ve&&300>Et()-Pi?(Ne&2)===0&&yl(e,0):Hc|=n,gl===ve&&(gl=0)),ln(e)}function tm(e,t){t===0&&(t=Qd()),e=ya(e,t),e!==null&&(Ll(e,t),ln(e))}function zy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tm(e,n)}function Ay(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),tm(e,n)}function Ty(e,t){return lo(e,t)}var Ii=null,vl=null,Kc=!1,$i=!1,Qc=!1,Jn=0;function ln(e){e!==vl&&e.next===null&&(vl===null?Ii=vl=e:vl=vl.next=e),$i=!0,Kc||(Kc=!0,Oy())}function br(e,t){if(!Qc&&$i){Qc=!0;do for(var n=!1,l=Ii;l!==null;){if(e!==0){var c=l.pendingLanes;if(c===0)var u=0;else{var p=l.suspendedLanes,y=l.pingedLanes;u=(1<<31-kt(42|e)+1)-1,u&=c&~(p&~y),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,rm(l,u))}else u=ve,u=ti(l,l===Ue?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Dl(l,u)||(n=!0,rm(l,u));l=l.next}while(n);Qc=!1}}function Ry(){nm()}function nm(){$i=Kc=!1;var e=0;Jn!==0&&Py()&&(e=Jn);for(var t=Et(),n=null,l=Ii;l!==null;){var c=l.next,u=am(l,t);u===0?(l.next=null,n===null?Ii=c:n.next=c,c===null&&(vl=n)):(n=l,(e!==0||(u&3)!==0)&&($i=!0)),l=c}Je!==0&&Je!==5||br(e),Jn!==0&&(Jn=0)}function am(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var p=31-kt(u),y=1<<p,w=c[p];w===-1?((y&n)===0||(y&l)!==0)&&(c[p]=rb(y,t)):w<=t&&(e.expiredLanes|=y),u&=~y}if(t=Ue,n=ve,n=ti(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ro(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Dl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&ro(l),oo(n)){case 2:case 8:n=Fd;break;case 32:n=$r;break;case 268435456:n=Kd;break;default:n=$r}return l=lm.bind(null,e),n=lo(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&ro(l),e.callbackPriority=2,e.callbackNode=null,2}function lm(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Zi()&&e.callbackNode!==n)return null;var l=ve;return l=ti(e,e===Ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Hp(e,l,t),am(e,Et()),e.callbackNode!=null&&e.callbackNode===n?lm.bind(null,e):null)}function rm(e,t){if(Zi())return null;Hp(e,t,!0)}function Oy(){Xy(function(){(Ne&6)!==0?lo(Xd,Ry):nm()})}function Zc(){if(Jn===0){var e=rl;e===0&&(e=Jr,Jr<<=1,(Jr&261888)===0&&(Jr=256)),Jn=e}return Jn}function im(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ri(""+e)}function sm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function My(e,t,n,l,c){if(t==="submit"&&n&&n.stateNode===c){var u=im((c[pt]||null).action),p=l.submitter;p&&(t=(t=p[pt]||null)?im(t.formAction):p.getAttribute("formAction"),t!==null&&(u=t,p=null));var y=new ci("action","action",null,l,c);e.push({event:y,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Jn!==0){var w=p?sm(c,p):new FormData(c);mc(n,{pending:!0,data:w,method:c.method,action:u},null,w)}}else typeof u=="function"&&(y.preventDefault(),w=p?sm(c,p):new FormData(c),mc(n,{pending:!0,data:w,method:c.method,action:u},u,w))},currentTarget:c}]})}}for(var Ic=0;Ic<Ro.length;Ic++){var $c=Ro[Ic],Uy=$c.toLowerCase(),Dy=$c[0].toUpperCase()+$c.slice(1);Qt(Uy,"on"+Dy)}Qt(Bf,"onAnimationEnd"),Qt(Hf,"onAnimationIteration"),Qt(qf,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(Jb,"onTransitionRun"),Qt(Wb,"onTransitionStart"),Qt(ey,"onTransitionCancel"),Qt(Yf,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yr));function om(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],c=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var p=l.length-1;0<=p;p--){var y=l[p],w=y.instance,T=y.currentTarget;if(y=y.listener,w!==u&&c.isPropagationStopped())break e;u=y,c.currentTarget=T;try{u(c)}catch(Y){fi(Y)}c.currentTarget=null,u=w}else for(p=0;p<l.length;p++){if(y=l[p],w=y.instance,T=y.currentTarget,y=y.listener,w!==u&&c.isPropagationStopped())break e;u=y,c.currentTarget=T;try{u(c)}catch(Y){fi(Y)}c.currentTarget=null,u=w}}}}function ye(e,t){var n=t[co];n===void 0&&(n=t[co]=new Set);var l=e+"__bubble";n.has(l)||(cm(t,e,2,!1),n.add(l))}function Jc(e,t,n){var l=0;t&&(l|=4),cm(n,e,l,t)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function Wc(e){if(!e[Ji]){e[Ji]=!0,tf.forEach(function(n){n!=="selectionchange"&&(Ly.has(n)||Jc(n,!1,e),Jc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ji]||(t[Ji]=!0,Jc("selectionchange",!1,t))}}function cm(e,t,n,l){switch(Bm(t)){case 2:var c=dx;break;case 8:c=fx;break;default:c=pu}n=c.bind(null,t,n,e),c=void 0,!xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function eu(e,t,n,l,c){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var y=l.stateNode.containerInfo;if(y===c)break;if(p===4)for(p=l.return;p!==null;){var w=p.tag;if((w===3||w===4)&&p.stateNode.containerInfo===c)return;p=p.return}for(;y!==null;){if(p=Va(y),p===null)return;if(w=p.tag,w===5||w===6||w===26||w===27){l=u=p;continue e}y=y.parentNode}}l=l.return}pf(function(){var T=u,Y=bo(n),K=[];e:{var O=Vf.get(e);if(O!==void 0){var B=ci,ee=e;switch(e){case"keypress":if(si(n)===0)break e;case"keydown":case"keyup":B=Ab;break;case"focusin":ee="focus",B=jo;break;case"focusout":ee="blur",B=jo;break;case"beforeblur":case"afterblur":B=jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=yb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Ob;break;case Bf:case Hf:case qf:B=Sb;break;case Yf:B=Ub;break;case"scroll":case"scrollend":B=gb;break;case"wheel":B=Lb;break;case"copy":case"cut":case"paste":B=jb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=xf;break;case"toggle":case"beforetoggle":B=Hb}var oe=(t&4)!==0,Oe=!oe&&(e==="scroll"||e==="scrollend"),z=oe?O!==null?O+"Capture":null:O;oe=[];for(var C=T,A;C!==null;){var G=C;if(A=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||A===null||z===null||(G=ql(C,z),G!=null&&oe.push(xr(C,G,A))),Oe)break;C=C.return}0<oe.length&&(O=new B(O,ee,null,n,Y),K.push({event:O,listeners:oe}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",O&&n!==go&&(ee=n.relatedTarget||n.fromElement)&&(Va(ee)||ee[Ya]))break e;if((B||O)&&(O=Y.window===Y?Y:(O=Y.ownerDocument)?O.defaultView||O.parentWindow:window,B?(ee=n.relatedTarget||n.toElement,B=T,ee=ee?Va(ee):null,ee!==null&&(Oe=d(ee),oe=ee.tag,ee!==Oe||oe!==5&&oe!==27&&oe!==6)&&(ee=null)):(B=null,ee=T),B!==ee)){if(oe=bf,G="onMouseLeave",z="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(oe=xf,G="onPointerLeave",z="onPointerEnter",C="pointer"),Oe=B==null?O:Hl(B),A=ee==null?O:Hl(ee),O=new oe(G,C+"leave",B,n,Y),O.target=Oe,O.relatedTarget=A,G=null,Va(Y)===T&&(oe=new oe(z,C+"enter",ee,n,Y),oe.target=A,oe.relatedTarget=Oe,G=oe),Oe=G,B&&ee)t:{for(oe=By,z=B,C=ee,A=0,G=z;G;G=oe(G))A++;G=0;for(var ie=C;ie;ie=oe(ie))G++;for(;0<A-G;)z=oe(z),A--;for(;0<G-A;)C=oe(C),G--;for(;A--;){if(z===C||C!==null&&z===C.alternate){oe=z;break t}z=oe(z),C=oe(C)}oe=null}else oe=null;B!==null&&um(K,O,B,oe,!1),ee!==null&&Oe!==null&&um(K,Oe,ee,oe,!0)}}e:{if(O=T?Hl(T):window,B=O.nodeName&&O.nodeName.toLowerCase(),B==="select"||B==="input"&&O.type==="file")var Ce=_f;else if(Cf(O))if(Nf)Ce=Zb;else{Ce=Kb;var ne=Fb}else B=O.nodeName,!B||B.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?T&&mo(T.elementType)&&(Ce=_f):Ce=Qb;if(Ce&&(Ce=Ce(e,T))){kf(K,Ce,n,Y);break e}ne&&ne(e,O,T),e==="focusout"&&T&&O.type==="number"&&T.memoizedProps.value!=null&&po(O,"number",O.value)}switch(ne=T?Hl(T):window,e){case"focusin":(Cf(ne)||ne.contentEditable==="true")&&($a=ne,zo=T,Ql=null);break;case"focusout":Ql=zo=$a=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,Df(K,n,Y);break;case"selectionchange":if($b)break;case"keydown":case"keyup":Df(K,n,Y)}var pe;if(Co)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ia?jf(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(vf&&n.locale!=="ko"&&(Ia||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ia&&(pe=mf()):(Dn=Y,vo="value"in Dn?Dn.value:Dn.textContent,Ia=!0)),ne=Wi(T,Se),0<ne.length&&(Se=new yf(Se,e,null,n,Y),K.push({event:Se,listeners:ne}),pe?Se.data=pe:(pe=Ef(n),pe!==null&&(Se.data=pe)))),(pe=Yb?Vb(e,n):Pb(e,n))&&(Se=Wi(T,"onBeforeInput"),0<Se.length&&(ne=new yf("onBeforeInput","beforeinput",null,n,Y),K.push({event:ne,listeners:Se}),ne.data=pe)),My(K,e,T,n,Y)}om(K,t)})}function xr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wi(e,t){for(var n=t+"Capture",l=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=ql(e,n),c!=null&&l.unshift(xr(e,c,u)),c=ql(e,t),c!=null&&l.push(xr(e,c,u))),e.tag===3)return l;e=e.return}return[]}function By(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function um(e,t,n,l,c){for(var u=t._reactName,p=[];n!==null&&n!==l;){var y=n,w=y.alternate,T=y.stateNode;if(y=y.tag,w!==null&&w===l)break;y!==5&&y!==26&&y!==27||T===null||(w=T,c?(T=ql(n,u),T!=null&&p.unshift(xr(n,T,w))):c||(T=ql(n,u),T!=null&&p.push(xr(n,T,w)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Hy=/\r\n?/g,qy=/\u0000|\uFFFD/g;function dm(e){return(typeof e=="string"?e:""+e).replace(Hy,`
`).replace(qy,"")}function fm(e,t){return t=dm(t),dm(e)===t}function Re(e,t,n,l,c,u){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ka(e,""+l);break;case"className":ai(e,"class",l);break;case"tabIndex":ai(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(e,n,l);break;case"style":ff(e,l,u);break;case"data":if(t!=="object"){ai(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ri(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Re(e,t,"name",c.name,c,null),Re(e,t,"formEncType",c.formEncType,c,null),Re(e,t,"formMethod",c.formMethod,c,null),Re(e,t,"formTarget",c.formTarget,c,null)):(Re(e,t,"encType",c.encType,c,null),Re(e,t,"method",c.method,c,null),Re(e,t,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ri(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=un);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ri(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),ni(e,"popover",l);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ni(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=pb.get(n)||n,ni(e,n,l))}}function tu(e,t,n,l,c,u){switch(n){case"style":ff(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&Ka(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=un);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),u=e[pt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof l=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,c);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ni(e,n,l)}}}function st(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,c=!1,u;for(u in n)if(n.hasOwnProperty(u)){var p=n[u];if(p!=null)switch(u){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Re(e,t,u,p,n,null)}}c&&Re(e,t,"srcSet",n.srcSet,n,null),l&&Re(e,t,"src",n.src,n,null);return;case"input":ye("invalid",e);var y=u=p=c=null,w=null,T=null;for(l in n)if(n.hasOwnProperty(l)){var Y=n[l];if(Y!=null)switch(l){case"name":c=Y;break;case"type":p=Y;break;case"checked":w=Y;break;case"defaultChecked":T=Y;break;case"value":u=Y;break;case"defaultValue":y=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:Re(e,t,l,Y,n,null)}}of(e,u,y,w,T,p,c,!1);return;case"select":ye("invalid",e),l=p=u=null;for(c in n)if(n.hasOwnProperty(c)&&(y=n[c],y!=null))switch(c){case"value":u=y;break;case"defaultValue":p=y;break;case"multiple":l=y;default:Re(e,t,c,y,n,null)}t=u,n=p,e.multiple=!!l,t!=null?Fa(e,!!l,t,!1):n!=null&&Fa(e,!!l,n,!0);return;case"textarea":ye("invalid",e),u=c=l=null;for(p in n)if(n.hasOwnProperty(p)&&(y=n[p],y!=null))switch(p){case"value":l=y;break;case"defaultValue":c=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Re(e,t,p,y,n,null)}uf(e,l,c,u);return;case"option":for(w in n)n.hasOwnProperty(w)&&(l=n[w],l!=null)&&(w==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Re(e,t,w,l,n,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<yr.length;l++)ye(yr[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(l=n[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Re(e,t,T,l,n,null)}return;default:if(mo(t)){for(Y in n)n.hasOwnProperty(Y)&&(l=n[Y],l!==void 0&&tu(e,t,Y,l,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(l=n[y],l!=null&&Re(e,t,y,l,n,null))}function Yy(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,p=null,y=null,w=null,T=null,Y=null;for(B in n){var K=n[B];if(n.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=K;default:l.hasOwnProperty(B)||Re(e,t,B,null,l,K)}}for(var O in l){var B=l[O];if(K=n[O],l.hasOwnProperty(O)&&(B!=null||K!=null))switch(O){case"type":u=B;break;case"name":c=B;break;case"checked":T=B;break;case"defaultChecked":Y=B;break;case"value":p=B;break;case"defaultValue":y=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==K&&Re(e,t,O,B,l,K)}}ho(e,p,y,w,T,Y,u,c);return;case"select":B=p=y=O=null;for(u in n)if(w=n[u],n.hasOwnProperty(u)&&w!=null)switch(u){case"value":break;case"multiple":B=w;default:l.hasOwnProperty(u)||Re(e,t,u,null,l,w)}for(c in l)if(u=l[c],w=n[c],l.hasOwnProperty(c)&&(u!=null||w!=null))switch(c){case"value":O=u;break;case"defaultValue":y=u;break;case"multiple":p=u;default:u!==w&&Re(e,t,c,u,l,w)}t=y,n=p,l=B,O!=null?Fa(e,!!n,O,!1):!!l!=!!n&&(t!=null?Fa(e,!!n,t,!0):Fa(e,!!n,n?[]:"",!1));return;case"textarea":B=O=null;for(y in n)if(c=n[y],n.hasOwnProperty(y)&&c!=null&&!l.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Re(e,t,y,null,l,c)}for(p in l)if(c=l[p],u=n[p],l.hasOwnProperty(p)&&(c!=null||u!=null))switch(p){case"value":O=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==u&&Re(e,t,p,c,l,u)}cf(e,O,B);return;case"option":for(var ee in n)O=n[ee],n.hasOwnProperty(ee)&&O!=null&&!l.hasOwnProperty(ee)&&(ee==="selected"?e.selected=!1:Re(e,t,ee,null,l,O));for(w in l)O=l[w],B=n[w],l.hasOwnProperty(w)&&O!==B&&(O!=null||B!=null)&&(w==="selected"?e.selected=O&&typeof O!="function"&&typeof O!="symbol":Re(e,t,w,O,l,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)O=n[oe],n.hasOwnProperty(oe)&&O!=null&&!l.hasOwnProperty(oe)&&Re(e,t,oe,null,l,O);for(T in l)if(O=l[T],B=n[T],l.hasOwnProperty(T)&&O!==B&&(O!=null||B!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Re(e,t,T,O,l,B)}return;default:if(mo(t)){for(var Oe in n)O=n[Oe],n.hasOwnProperty(Oe)&&O!==void 0&&!l.hasOwnProperty(Oe)&&tu(e,t,Oe,void 0,l,O);for(Y in l)O=l[Y],B=n[Y],!l.hasOwnProperty(Y)||O===B||O===void 0&&B===void 0||tu(e,t,Y,O,l,B);return}}for(var z in n)O=n[z],n.hasOwnProperty(z)&&O!=null&&!l.hasOwnProperty(z)&&Re(e,t,z,null,l,O);for(K in l)O=l[K],B=n[K],!l.hasOwnProperty(K)||O===B||O==null&&B==null||Re(e,t,K,O,l,B)}function hm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var c=n[l],u=c.transferSize,p=c.initiatorType,y=c.duration;if(u&&y&&hm(p)){for(p=0,y=c.responseEnd,l+=1;l<n.length;l++){var w=n[l],T=w.startTime;if(T>y)break;var Y=w.transferSize,K=w.initiatorType;Y&&hm(K)&&(w=w.responseEnd,p+=Y*(w<y?1:(y-T)/(w-T)))}if(--l,t+=8*(u+p)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nu=null,au=null;function es(e){return e.nodeType===9?e:e.ownerDocument}function pm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ru=null;function Py(){var e=window.event;return e&&e.type==="popstate"?e===ru?!1:(ru=e,!0):(ru=null,!1)}var gm=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(e){return bm.resolve(null).then(e).catch(Fy)}:gm;function Fy(e){setTimeout(function(){throw e})}function Wn(e){return e==="head"}function ym(e,t){var n=t,l=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(c),El(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")vr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,vr(n);for(var u=n.firstChild;u;){var p=u.nextSibling,y=u.nodeName;u[Bl]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=p}}else n==="body"&&vr(e.ownerDocument.body);n=c}while(n);El(t)}function xm(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function iu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":iu(n),uo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ky(e,t,n,l){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Bl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function Qy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Gt(e.nextSibling),e===null))return null;return e}function vm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function su(e){return e.data==="$?"||e.data==="$~"}function ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Zy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var cu=null;function Sm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Gt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function wm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function jm(e,t,n){switch(t=es(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function vr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);uo(e)}var Xt=new Map,Em=new Set;function ts(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kn=I.d;I.d={f:Iy,r:$y,D:Jy,C:Wy,L:ex,m:tx,X:ax,S:nx,M:lx};function Iy(){var e=kn.f(),t=Fi();return e||t}function $y(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?Yh(t):kn.r(e)}var Sl=typeof document>"u"?null:document;function Cm(e,t,n){var l=Sl;if(l&&typeof t=="string"&&t){var c=Lt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),Em.has(c)||(Em.add(c),e={rel:e,crossOrigin:n,href:t},l.querySelector(c)===null&&(t=l.createElement("link"),st(t,"link",e),We(t),l.head.appendChild(t)))}}function Jy(e){kn.D(e),Cm("dns-prefetch",e,null)}function Wy(e,t){kn.C(e,t),Cm("preconnect",e,t)}function ex(e,t,n){kn.L(e,t,n);var l=Sl;if(l&&e&&t){var c='link[rel="preload"][as="'+Lt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Lt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Lt(n.imageSizes)+'"]')):c+='[href="'+Lt(e)+'"]';var u=c;switch(t){case"style":u=wl(e);break;case"script":u=jl(e)}Xt.has(u)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Xt.set(u,e),l.querySelector(c)!==null||t==="style"&&l.querySelector(Sr(u))||t==="script"&&l.querySelector(wr(u))||(t=l.createElement("link"),st(t,"link",e),We(t),l.head.appendChild(t)))}}function tx(e,t){kn.m(e,t);var n=Sl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Lt(l)+'"][href="'+Lt(e)+'"]',u=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=jl(e)}if(!Xt.has(u)&&(e=v({rel:"modulepreload",href:e},t),Xt.set(u,e),n.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wr(u)))return}l=n.createElement("link"),st(l,"link",e),We(l),n.head.appendChild(l)}}}function nx(e,t,n){kn.S(e,t,n);var l=Sl;if(l&&e){var c=Ga(l).hoistableStyles,u=wl(e);t=t||"default";var p=c.get(u);if(!p){var y={loading:0,preload:null};if(p=l.querySelector(Sr(u)))y.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Xt.get(u))&&uu(e,n);var w=p=l.createElement("link");We(w),st(w,"link",e),w._p=new Promise(function(T,Y){w.onload=T,w.onerror=Y}),w.addEventListener("load",function(){y.loading|=1}),w.addEventListener("error",function(){y.loading|=2}),y.loading|=4,ns(p,t,l)}p={type:"stylesheet",instance:p,count:1,state:y},c.set(u,p)}}}function ax(e,t){kn.X(e,t);var n=Sl;if(n&&e){var l=Ga(n).hoistableScripts,c=jl(e),u=l.get(c);u||(u=n.querySelector(wr(c)),u||(e=v({src:e,async:!0},t),(t=Xt.get(c))&&du(e,t),u=n.createElement("script"),We(u),st(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(c,u))}}function lx(e,t){kn.M(e,t);var n=Sl;if(n&&e){var l=Ga(n).hoistableScripts,c=jl(e),u=l.get(c);u||(u=n.querySelector(wr(c)),u||(e=v({src:e,async:!0,type:"module"},t),(t=Xt.get(c))&&du(e,t),u=n.createElement("script"),We(u),st(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(c,u))}}function km(e,t,n,l){var c=(c=se.current)?ts(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=wl(n.href),n=Ga(c).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=wl(n.href);var u=Ga(c).hoistableStyles,p=u.get(e);if(p||(c=c.ownerDocument||c,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,p),(u=c.querySelector(Sr(e)))&&!u._p&&(p.instance=u,p.state.loading=5),Xt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Xt.set(e,n),u||rx(c,e,n,p.state))),t&&l===null)throw Error(o(528,""));return p}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=jl(n),n=Ga(c).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function wl(e){return'href="'+Lt(e)+'"'}function Sr(e){return'link[rel="stylesheet"]['+e+"]"}function _m(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function rx(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),st(t,"link",n),We(t),e.head.appendChild(t))}function jl(e){return'[src="'+Lt(e)+'"]'}function wr(e){return"script[async]"+e}function Nm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Lt(n.href)+'"]');if(l)return t.instance=l,We(l),l;var c=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),We(l),st(l,"style",c),ns(l,n.precedence,e),t.instance=l;case"stylesheet":c=wl(n.href);var u=e.querySelector(Sr(c));if(u)return t.state.loading|=4,t.instance=u,We(u),u;l=_m(n),(c=Xt.get(c))&&uu(l,c),u=(e.ownerDocument||e).createElement("link"),We(u);var p=u;return p._p=new Promise(function(y,w){p.onload=y,p.onerror=w}),st(u,"link",l),t.state.loading|=4,ns(u,n.precedence,e),t.instance=u;case"script":return u=jl(n.src),(c=e.querySelector(wr(u)))?(t.instance=c,We(c),c):(l=n,(c=Xt.get(u))&&(l=v({},n),du(l,c)),e=e.ownerDocument||e,c=e.createElement("script"),We(c),st(c,"link",l),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ns(l,n.precedence,e));return t.instance}function ns(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,u=c,p=0;p<l.length;p++){var y=l[p];if(y.dataset.precedence===t)u=y;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function du(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var as=null;function zm(e,t,n){if(as===null){var l=new Map,c=as=new Map;c.set(n,l)}else c=as,l=c.get(n),l||(l=new Map,c.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var u=n[c];if(!(u[Bl]||u[at]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(t)||"";p=e+p;var y=l.get(p);y?y.push(u):l.set(p,[u])}}return l}function Am(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ix(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sx(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=wl(l.href),u=t.querySelector(Sr(c));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ls.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,We(u);return}u=t.ownerDocument||t,l=_m(l),(c=Xt.get(c))&&uu(l,c),u=u.createElement("link"),We(u);var p=u;p._p=new Promise(function(y,w){p.onload=y,p.onerror=w}),st(u,"link",l),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ls.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var fu=0;function ox(e,t){return e.stylesheets&&e.count===0&&is(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&is(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&fu===0&&(fu=62500*Vy());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&is(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>fu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(c)}}:null}function ls(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)is(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rs=null;function is(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rs=new Map,t.forEach(cx,e),rs=null,ls.call(e))}function cx(e,t){if(!(t.state.loading&4)){var n=rs.get(e);if(n)var l=n.get(null);else{n=new Map,rs.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var p=c[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),l=p)}l&&n.set(null,l)}c=t.instance,p=c.getAttribute("data-precedence"),u=n.get(p)||l,u===l&&n.set(null,c),n.set(p,c),this.count++,l=ls.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var jr={$$typeof:q,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ux(e,t,n,l,c,u,p,y,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=io(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=io(0),this.hiddenUpdates=io(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Rm(e,t,n,l,c,u,p,y,w,T,Y,K){return e=new ux(e,t,n,p,w,T,Y,K,y),t=1,u===!0&&(t|=24),u=Nt(3,null,null,t),e.current=u,u.stateNode=e,t=Xo(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:t},Zo(u),e}function Om(e){return e?(e=el,e):el}function Mm(e,t,n,l,c,u){c=Om(c),l.context===null?l.context=c:l.pendingContext=c,l=Vn(t),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=Pn(e,l,t),n!==null&&(vt(n,e,t),tr(n,e,t))}function Um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){Um(e,t),(e=e.alternate)&&Um(e,t)}function Dm(e){if(e.tag===13||e.tag===31){var t=ya(e,67108864);t!==null&&vt(t,e,67108864),hu(e,67108864)}}function Lm(e){if(e.tag===13||e.tag===31){var t=Ot();t=so(t);var n=ya(e,t);n!==null&&vt(n,e,t),hu(e,t)}}var ss=!0;function dx(e,t,n,l){var c=R.T;R.T=null;var u=I.p;try{I.p=2,pu(e,t,n,l)}finally{I.p=u,R.T=c}}function fx(e,t,n,l){var c=R.T;R.T=null;var u=I.p;try{I.p=8,pu(e,t,n,l)}finally{I.p=u,R.T=c}}function pu(e,t,n,l){if(ss){var c=mu(l);if(c===null)eu(e,t,l,os,n),Hm(e,l);else if(px(c,e,t,n,l))l.stopPropagation();else if(Hm(e,l),t&4&&-1<hx.indexOf(e)){for(;c!==null;){var u=Pa(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=ha(u.pendingLanes);if(p!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var w=1<<31-kt(p);y.entanglements[1]|=w,p&=~w}ln(u),(Ne&6)===0&&(Gi=Et()+500,br(0))}}break;case 31:case 13:y=ya(u,2),y!==null&&vt(y,u,2),Fi(),hu(u,2)}if(u=mu(l),u===null&&eu(e,t,l,os,n),u===c)break;c=u}c!==null&&l.stopPropagation()}else eu(e,t,l,null,n)}}function mu(e){return e=bo(e),gu(e)}var os=null;function gu(e){if(os=null,e=Va(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return os=e,null}function Bm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J1()){case Xd:return 2;case Fd:return 8;case $r:case W1:return 32;case Kd:return 268435456;default:return 32}default:return 32}}var bu=!1,ea=null,ta=null,na=null,Er=new Map,Cr=new Map,aa=[],hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hm(e,t){switch(e){case"focusin":case"focusout":ea=null;break;case"dragenter":case"dragleave":ta=null;break;case"mouseover":case"mouseout":na=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function kr(e,t,n,l,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[c]},t!==null&&(t=Pa(t),t!==null&&Dm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function px(e,t,n,l,c){switch(t){case"focusin":return ea=kr(ea,e,t,n,l,c),!0;case"dragenter":return ta=kr(ta,e,t,n,l,c),!0;case"mouseover":return na=kr(na,e,t,n,l,c),!0;case"pointerover":var u=c.pointerId;return Er.set(u,kr(Er.get(u)||null,e,t,n,l,c)),!0;case"gotpointercapture":return u=c.pointerId,Cr.set(u,kr(Cr.get(u)||null,e,t,n,l,c)),!0}return!1}function qm(e){var t=Va(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Wd(e.priority,function(){Lm(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Wd(e.priority,function(){Lm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mu(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);go=l,n.target.dispatchEvent(l),go=null}else return t=Pa(n),t!==null&&Dm(t),e.blockedOn=n,!1;t.shift()}return!0}function Ym(e,t,n){cs(e)&&n.delete(t)}function mx(){bu=!1,ea!==null&&cs(ea)&&(ea=null),ta!==null&&cs(ta)&&(ta=null),na!==null&&cs(na)&&(na=null),Er.forEach(Ym),Cr.forEach(Ym)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,bu||(bu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,mx)))}var ds=null;function Vm(e){ds!==e&&(ds=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ds===e&&(ds=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],c=e[t+2];if(typeof l!="function"){if(gu(l||n)===null)continue;break}var u=Pa(n);u!==null&&(e.splice(t,3),t-=3,mc(u,{pending:!0,data:c,method:n.method,action:l},l,c))}}))}function El(e){function t(w){return us(w,e)}ea!==null&&us(ea,e),ta!==null&&us(ta,e),na!==null&&us(na,e),Er.forEach(t),Cr.forEach(t);for(var n=0;n<aa.length;n++){var l=aa[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<aa.length&&(n=aa[0],n.blockedOn===null);)qm(n),n.blockedOn===null&&aa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var c=n[l],u=n[l+1],p=c[pt]||null;if(typeof u=="function")p||Vm(n);else if(p){var y=null;if(u&&u.hasAttribute("formAction")){if(c=u,p=u[pt]||null)y=p.formAction;else if(gu(c)!==null)continue}else y=p.action;typeof y=="function"?n[l+1]=y:(n.splice(l,3),l-=3),Vm(n)}}}function Pm(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(p){return c=p})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function yu(e){this._internalRoot=e}fs.prototype.render=yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=Ot();Mm(n,l,e,t,null,null)},fs.prototype.unmount=yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mm(e.current,2,null,e,null,null),Fi(),t[Ya]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<aa.length&&t!==0&&t<aa[n].priority;n++);aa.splice(n,0,e),n===0&&qm(e)}};var Gm=r.version;if(Gm!=="19.2.5")throw Error(o(527,Gm,"19.2.5"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=b(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var gx={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hs.isDisabled&&hs.supportsFiber)try{Ul=hs.inject(gx),Ct=hs}catch{}}return Nr.createRoot=function(e,t){if(!i(e))throw Error(o(299));var n=!1,l="",c=$h,u=Jh,p=Wh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=Rm(e,1,!1,null,null,n,l,null,c,u,p,Pm),e[Ya]=t.current,Wc(e),new yu(t)},Nr.hydrateRoot=function(e,t,n){if(!i(e))throw Error(o(299));var l=!1,c="",u=$h,p=Jh,y=Wh,w=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Rm(e,1,!0,t,n??null,l,c,w,u,p,y,Pm),t.context=Om(null),n=t.current,l=Ot(),l=so(l),c=Vn(l),c.callback=null,Pn(n,c,l),n=l,t.current.lanes=n,Ll(t,n),ln(t),e[Ya]=t.current,Wc(e),new fs(t)},Nr.version="19.2.5",Nr}var e0;function Cx(){if(e0)return Su.exports;e0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Su.exports=Ex(),Su.exports}var kx=Cx();const _x=ag(kx);var t0="popstate";function n0(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function Nx(a={}){function r(i,d){let{pathname:h="/",search:m="",hash:g=""}=Ha(i.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Ju("",{pathname:h,search:m,hash:g},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(i,d){let h=i.document.querySelector("base"),m="";if(h&&h.getAttribute("href")){let g=i.location.href,b=g.indexOf("#");m=b===-1?g:g.slice(0,b)}return m+"#"+(typeof d=="string"?d:Br(d))}function o(i,d){Wt(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return Ax(r,s,o,a)}function Ve(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Wt(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function zx(){return Math.random().toString(36).substring(2,10)}function a0(a,r){return{usr:a.state,key:a.key,idx:r,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function Ju(a,r,s=null,o,i){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Ha(r):r,state:s,key:r&&r.key||o||zx(),unstable_mask:i}}function Br({pathname:a="/",search:r="",hash:s=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function Ha(a){let r={};if(a){let s=a.indexOf("#");s>=0&&(r.hash=a.substring(s),a=a.substring(0,s));let o=a.indexOf("?");o>=0&&(r.search=a.substring(o),a=a.substring(0,o)),a&&(r.pathname=a)}return r}function Ax(a,r,s,o={}){let{window:i=document.defaultView,v5Compat:d=!1}=o,h=i.history,m="POP",g=null,b=x();b==null&&(b=0,h.replaceState({...h.state,idx:b},""));function x(){return(h.state||{idx:null}).idx}function v(){m="POP";let _=x(),X=_==null?null:_-b;b=_,g&&g({action:m,location:N.location,delta:X})}function E(_,X){m="PUSH";let U=n0(_)?_:Ju(N.location,_,X);s&&s(U,_),b=x()+1;let q=a0(U,b),F=N.createHref(U.unstable_mask||U);try{h.pushState(q,"",F)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;i.location.assign(F)}d&&g&&g({action:m,location:N.location,delta:1})}function M(_,X){m="REPLACE";let U=n0(_)?_:Ju(N.location,_,X);s&&s(U,_),b=x();let q=a0(U,b),F=N.createHref(U.unstable_mask||U);h.replaceState(q,"",F),d&&g&&g({action:m,location:N.location,delta:0})}function k(_){return Tx(_)}let N={get action(){return m},get location(){return a(i,h)},listen(_){if(g)throw new Error("A history only accepts one active listener");return i.addEventListener(t0,v),g=_,()=>{i.removeEventListener(t0,v),g=null}},createHref(_){return r(i,_)},createURL:k,encodeLocation(_){let X=k(_);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:E,replace:M,go(_){return h.go(_)}};return N}function Tx(a,r=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ve(s,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Br(a);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function rg(a,r,s="/"){return Rx(a,r,s,!1)}function Rx(a,r,s,o){let i=typeof r=="string"?Ha(r):r,d=An(i.pathname||"/",s);if(d==null)return null;let h=ig(a);Ox(h);let m=null;for(let g=0;m==null&&g<h.length;++g){let b=Gx(d);m=Vx(h[g],b,o)}return m}function ig(a,r=[],s=[],o="",i=!1){let d=(h,m,g=i,b)=>{let x={relativePath:b===void 0?h.path||"":b,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&g)return;Ve(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let v=sn([o,x.relativePath]),E=s.concat(x);h.children&&h.children.length>0&&(Ve(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),ig(h.children,r,E,v,g)),!(h.path==null&&!h.index)&&r.push({path:v,score:qx(v,h.index),routesMeta:E})};return a.forEach((h,m)=>{if(h.path===""||!h.path?.includes("?"))d(h,m);else for(let g of sg(h.path))d(h,m,!0,g)}),r}function sg(a){let r=a.split("/");if(r.length===0)return[];let[s,...o]=r,i=s.endsWith("?"),d=s.replace(/\?$/,"");if(o.length===0)return i?[d,""]:[d];let h=sg(o.join("/")),m=[];return m.push(...h.map(g=>g===""?d:[d,g].join("/"))),i&&m.push(...h),m.map(g=>a.startsWith("/")&&g===""?"/":g)}function Ox(a){a.sort((r,s)=>r.score!==s.score?s.score-r.score:Yx(r.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var Mx=/^:[\w-]+$/,Ux=3,Dx=2,Lx=1,Bx=10,Hx=-2,l0=a=>a==="*";function qx(a,r){let s=a.split("/"),o=s.length;return s.some(l0)&&(o+=Hx),r&&(o+=Dx),s.filter(i=>!l0(i)).reduce((i,d)=>i+(Mx.test(d)?Ux:d===""?Lx:Bx),o)}function Yx(a,r){return a.length===r.length&&a.slice(0,-1).every((o,i)=>o===r[i])?a[a.length-1]-r[r.length-1]:0}function Vx(a,r,s=!1){let{routesMeta:o}=a,i={},d="/",h=[];for(let m=0;m<o.length;++m){let g=o[m],b=m===o.length-1,x=d==="/"?r:r.slice(d.length)||"/",v=Os({path:g.relativePath,caseSensitive:g.caseSensitive,end:b},x),E=g.route;if(!v&&b&&s&&!o[o.length-1].route.index&&(v=Os({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!v)return null;Object.assign(i,v.params),h.push({params:i,pathname:sn([d,v.pathname]),pathnameBase:Qx(sn([d,v.pathnameBase])),route:E}),v.pathnameBase!=="/"&&(d=sn([d,v.pathnameBase]))}return h}function Os(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,o]=Px(a.path,a.caseSensitive,a.end),i=r.match(s);if(!i)return null;let d=i[0],h=d.replace(/(.)\/+$/,"$1"),m=i.slice(1);return{params:o.reduce((b,{paramName:x,isOptional:v},E)=>{if(x==="*"){let k=m[E]||"";h=d.slice(0,d.length-k.length).replace(/(.)\/+$/,"$1")}const M=m[E];return v&&!M?b[x]=void 0:b[x]=(M||"").replace(/%2F/g,"/"),b},{}),pathname:d,pathnameBase:h,pattern:a}}function Px(a,r=!1,s=!0){Wt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],i="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,g,b,x)=>{if(o.push({paramName:m,isOptional:g!=null}),g){let v=x.charAt(b+h.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),i+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?i+="\\/*$":a!==""&&a!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,r?void 0:"i"),o]}function Gx(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Wt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function An(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let s=r.endsWith("/")?r.length-1:r.length,o=a.charAt(s);return o&&o!=="/"?null:a.slice(s)||"/"}var Xx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Fx(a,r="/"){let{pathname:s,search:o="",hash:i=""}=typeof a=="string"?Ha(a):a,d;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?d=r0(s.substring(1),"/"):d=r0(s,r)):d=r,{pathname:d,search:Zx(o),hash:Ix(i)}}function r0(a,r){let s=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(i=>{i===".."?s.length>1&&s.pop():i!=="."&&s.push(i)}),s.length>1?s.join("/"):"/"}function Cu(a,r,s,o){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Kx(a){return a.filter((r,s)=>s===0||r.route.path&&r.route.path.length>0)}function og(a){let r=Kx(a);return r.map((s,o)=>o===r.length-1?s.pathname:s.pathnameBase)}function xd(a,r,s,o=!1){let i;typeof a=="string"?i=Ha(a):(i={...a},Ve(!i.pathname||!i.pathname.includes("?"),Cu("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),Cu("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),Cu("#","search","hash",i)));let d=a===""||i.pathname==="",h=d?"/":i.pathname,m;if(h==null)m=s;else{let v=r.length-1;if(!o&&h.startsWith("..")){let E=h.split("/");for(;E[0]==="..";)E.shift(),v-=1;i.pathname=E.join("/")}m=v>=0?r[v]:"/"}let g=Fx(i,m),b=h&&h!=="/"&&h.endsWith("/"),x=(d||h===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(b||x)&&(g.pathname+="/"),g}var sn=a=>a.join("/").replace(/\/\/+/g,"/"),Qx=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Zx=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Ix=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,$x=class{constructor(a,r,s,o=!1){this.status=a,this.statusText=r||"",this.internal=o,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Jx(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Wx(a){return a.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var cg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ug(a,r){let s=a;if(typeof s!="string"||!Xx.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let o=s,i=!1;if(cg)try{let d=new URL(window.location.href),h=s.startsWith("//")?new URL(d.protocol+s):new URL(s),m=An(h.pathname,r);h.origin===d.origin&&m!=null?s=m+h.search+h.hash:i=!0}catch{Wt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:i,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var dg=["POST","PUT","PATCH","DELETE"];new Set(dg);var ev=["GET",...dg];new Set(ev);var Tl=S.createContext(null);Tl.displayName="DataRouter";var Hs=S.createContext(null);Hs.displayName="DataRouterState";var fg=S.createContext(!1);function tv(){return S.useContext(fg)}var hg=S.createContext({isTransitioning:!1});hg.displayName="ViewTransition";var nv=S.createContext(new Map);nv.displayName="Fetchers";var av=S.createContext(null);av.displayName="Await";var Kt=S.createContext(null);Kt.displayName="Navigation";var qr=S.createContext(null);qr.displayName="Location";var on=S.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var vd=S.createContext(null);vd.displayName="RouteError";var pg="REACT_ROUTER_ERROR",lv="REDIRECT",rv="ROUTE_ERROR_RESPONSE";function iv(a){if(a.startsWith(`${pg}:${lv}:{`))try{let r=JSON.parse(a.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function sv(a){if(a.startsWith(`${pg}:${rv}:{`))try{let r=JSON.parse(a.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new $x(r.status,r.statusText,r.data)}catch{}}function ov(a,{relative:r}={}){Ve(Yr(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=S.useContext(Kt),{hash:i,pathname:d,search:h}=Pr(a,{relative:r}),m=d;return s!=="/"&&(m=d==="/"?s:sn([s,d])),o.createHref({pathname:m,search:h,hash:i})}function Yr(){return S.useContext(qr)!=null}function Tn(){return Ve(Yr(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(qr).location}var mg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gg(a){S.useContext(Kt).static||S.useLayoutEffect(a)}function Vr(){let{isDataRoute:a}=S.useContext(on);return a?Sv():cv()}function cv(){Ve(Yr(),"useNavigate() may be used only in the context of a <Router> component.");let a=S.useContext(Tl),{basename:r,navigator:s}=S.useContext(Kt),{matches:o}=S.useContext(on),{pathname:i}=Tn(),d=JSON.stringify(og(o)),h=S.useRef(!1);return gg(()=>{h.current=!0}),S.useCallback((g,b={})=>{if(Wt(h.current,mg),!h.current)return;if(typeof g=="number"){s.go(g);return}let x=xd(g,JSON.parse(d),i,b.relative==="path");a==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:sn([r,x.pathname])),(b.replace?s.replace:s.push)(x,b.state,b)},[r,s,d,i,a])}S.createContext(null);function bg(){let{matches:a}=S.useContext(on),r=a[a.length-1];return r?r.params:{}}function Pr(a,{relative:r}={}){let{matches:s}=S.useContext(on),{pathname:o}=Tn(),i=JSON.stringify(og(s));return S.useMemo(()=>xd(a,JSON.parse(i),o,r==="path"),[a,i,o,r])}function uv(a,r){return yg(a,r)}function yg(a,r,s){Ve(Yr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=S.useContext(Kt),{matches:i}=S.useContext(on),d=i[i.length-1],h=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",b=d&&d.route;{let _=b&&b.path||"";vg(m,!b||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let x=Tn(),v;if(r){let _=typeof r=="string"?Ha(r):r;Ve(g==="/"||_.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=x;let E=v.pathname||"/",M=E;if(g!=="/"){let _=g.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(_.length).join("/")}let k=rg(a,{pathname:M});Wt(b||k!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Wt(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=mv(k&&k.map(_=>Object.assign({},_,{params:Object.assign({},h,_.params),pathname:sn([g,o.encodeLocation?o.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?g:sn([g,o.encodeLocation?o.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),i,s);return r&&N?S.createElement(qr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},N):N}function dv(){let a=vv(),r=Jx(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:d},"ErrorBoundary")," or"," ",S.createElement("code",{style:d},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},r),s?S.createElement("pre",{style:i},s):null,h)}var fv=S.createElement(dv,null),xg=class extends S.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){this.props.onError?this.props.onError(a,r):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const s=sv(a.digest);s&&(a=s)}let r=a!==void 0?S.createElement(on.Provider,{value:this.props.routeContext},S.createElement(vd.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?S.createElement(hv,{error:a},r):r}};xg.contextType=fg;var ku=new WeakMap;function hv({children:a,error:r}){let{basename:s}=S.useContext(Kt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=iv(r.digest);if(o){let i=ku.get(r);if(i)throw i;let d=ug(o.location,s);if(cg&&!ku.get(r))if(d.isExternal||o.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:o.replace}));throw ku.set(r,h),h}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return a}function pv({routeContext:a,match:r,children:s}){let o=S.useContext(Tl);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),S.createElement(on.Provider,{value:a},s)}function mv(a,r=[],s){let o=s?.state;if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let i=a,d=o?.errors;if(d!=null){let x=i.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);Ve(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),i=i.slice(0,Math.min(i.length,x+1))}let h=!1,m=-1;if(s&&o){h=o.renderFallback;for(let x=0;x<i.length;x++){let v=i[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=x),v.route.id){let{loaderData:E,errors:M}=o,k=v.route.loader&&!E.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||k){s.isStatic&&(h=!0),m>=0?i=i.slice(0,m+1):i=[i[0]];break}}}}let g=s?.onError,b=o&&g?(x,v)=>{g(x,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:Wx(o.matches),errorInfo:v})}:void 0;return i.reduceRight((x,v,E)=>{let M,k=!1,N=null,_=null;o&&(M=d&&v.route.id?d[v.route.id]:void 0,N=v.route.errorElement||fv,h&&(m<0&&E===0?(vg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,_=null):m===E&&(k=!0,_=v.route.hydrateFallbackElement||null)));let X=r.concat(i.slice(0,E+1)),U=()=>{let q;return M?q=N:k?q=_:v.route.Component?q=S.createElement(v.route.Component,null):v.route.element?q=v.route.element:q=x,S.createElement(pv,{match:v,routeContext:{outlet:x,matches:X,isDataRoute:o!=null},children:q})};return o&&(v.route.ErrorBoundary||v.route.errorElement||E===0)?S.createElement(xg,{location:o.location,revalidation:o.revalidation,component:N,error:M,children:U(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:b}):U()},null)}function Sd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gv(a){let r=S.useContext(Tl);return Ve(r,Sd(a)),r}function bv(a){let r=S.useContext(Hs);return Ve(r,Sd(a)),r}function yv(a){let r=S.useContext(on);return Ve(r,Sd(a)),r}function wd(a){let r=yv(a),s=r.matches[r.matches.length-1];return Ve(s.route.id,`${a} can only be used on routes that contain a unique "id"`),s.route.id}function xv(){return wd("useRouteId")}function vv(){let a=S.useContext(vd),r=bv("useRouteError"),s=wd("useRouteError");return a!==void 0?a:r.errors?.[s]}function Sv(){let{router:a}=gv("useNavigate"),r=wd("useNavigate"),s=S.useRef(!1);return gg(()=>{s.current=!0}),S.useCallback(async(i,d={})=>{Wt(s.current,mg),s.current&&(typeof i=="number"?await a.navigate(i):await a.navigate(i,{fromRouteId:r,...d}))},[a,r])}var i0={};function vg(a,r,s){!r&&!i0[a]&&(i0[a]=!0,Wt(!1,s))}S.memo(wv);function wv({routes:a,future:r,state:s,isStatic:o,onError:i}){return yg(a,void 0,{state:s,isStatic:o,onError:i})}function _n(a){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jv({basename:a="/",children:r=null,location:s,navigationType:o="POP",navigator:i,static:d=!1,unstable_useTransitions:h}){Ve(!Yr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=a.replace(/^\/*/,"/"),g=S.useMemo(()=>({basename:m,navigator:i,static:d,unstable_useTransitions:h,future:{}}),[m,i,d,h]);typeof s=="string"&&(s=Ha(s));let{pathname:b="/",search:x="",hash:v="",state:E=null,key:M="default",unstable_mask:k}=s,N=S.useMemo(()=>{let _=An(b,m);return _==null?null:{location:{pathname:_,search:x,hash:v,state:E,key:M,unstable_mask:k},navigationType:o}},[m,b,x,v,E,M,o,k]);return Wt(N!=null,`<Router basename="${m}"> is not able to match the URL "${b}${x}${v}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:S.createElement(Kt.Provider,{value:g},S.createElement(qr.Provider,{children:r,value:N}))}function Ev({children:a,location:r}){return uv(Wu(a),r)}function Wu(a,r=[]){let s=[];return S.Children.forEach(a,(o,i)=>{if(!S.isValidElement(o))return;let d=[...r,i];if(o.type===S.Fragment){s.push.apply(s,Wu(o.props.children,d));return}Ve(o.type===_n,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=Wu(o.props.children,d)),s.push(h)}),s}var ws="get",js="application/x-www-form-urlencoded";function qs(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function Cv(a){return qs(a)&&a.tagName.toLowerCase()==="button"}function kv(a){return qs(a)&&a.tagName.toLowerCase()==="form"}function _v(a){return qs(a)&&a.tagName.toLowerCase()==="input"}function Nv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function zv(a,r){return a.button===0&&(!r||r==="_self")&&!Nv(a)}var ps=null;function Av(){if(ps===null)try{new FormData(document.createElement("form"),0),ps=!1}catch{ps=!0}return ps}var Tv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _u(a){return a!=null&&!Tv.has(a)?(Wt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${js}"`),null):a}function Rv(a,r){let s,o,i,d,h;if(kv(a)){let m=a.getAttribute("action");o=m?An(m,r):null,s=a.getAttribute("method")||ws,i=_u(a.getAttribute("enctype"))||js,d=new FormData(a)}else if(Cv(a)||_v(a)&&(a.type==="submit"||a.type==="image")){let m=a.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||m.getAttribute("action");if(o=g?An(g,r):null,s=a.getAttribute("formmethod")||m.getAttribute("method")||ws,i=_u(a.getAttribute("formenctype"))||_u(m.getAttribute("enctype"))||js,d=new FormData(m,a),!Av()){let{name:b,type:x,value:v}=a;if(x==="image"){let E=b?`${b}.`:"";d.append(`${E}x`,"0"),d.append(`${E}y`,"0")}else b&&d.append(b,v)}}else{if(qs(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ws,o=null,i=js,h=a}return d&&i==="text/plain"&&(h=d,d=void 0),{action:o,method:s.toLowerCase(),encType:i,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jd(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Sg(a,r,s,o){let i=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${o}`:i.pathname=`${i.pathname}.${o}`:i.pathname==="/"?i.pathname=`_root.${o}`:r&&An(i.pathname,r)==="/"?i.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${o}`,i}async function Ov(a,r){if(a.id in r)return r[a.id];try{let s=await import(a.module);return r[a.id]=s,s}catch(s){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Mv(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Uv(a,r,s){let o=await Promise.all(a.map(async i=>{let d=r.routes[i.route.id];if(d){let h=await Ov(d,s);return h.links?h.links():[]}return[]}));return Hv(o.flat(1).filter(Mv).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function s0(a,r,s,o,i,d){let h=(g,b)=>s[b]?g.route.id!==s[b].route.id:!0,m=(g,b)=>s[b].pathname!==g.pathname||s[b].route.path?.endsWith("*")&&s[b].params["*"]!==g.params["*"];return d==="assets"?r.filter((g,b)=>h(g,b)||m(g,b)):d==="data"?r.filter((g,b)=>{let x=o.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(h(g,b)||m(g,b))return!0;if(g.route.shouldRevalidate){let v=g.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Dv(a,r,{includeHydrateFallback:s}={}){return Lv(a.map(o=>{let i=r.routes[o.route.id];if(!i)return[];let d=[i.module];return i.clientActionModule&&(d=d.concat(i.clientActionModule)),i.clientLoaderModule&&(d=d.concat(i.clientLoaderModule)),s&&i.hydrateFallbackModule&&(d=d.concat(i.hydrateFallbackModule)),i.imports&&(d=d.concat(i.imports)),d}).flat(1))}function Lv(a){return[...new Set(a)]}function Bv(a){let r={},s=Object.keys(a).sort();for(let o of s)r[o]=a[o];return r}function Hv(a,r){let s=new Set;return new Set(r),a.reduce((o,i)=>{let d=JSON.stringify(Bv(i));return s.has(d)||(s.add(d),o.push({key:d,link:i})),o},[])}function Ed(){let a=S.useContext(Tl);return jd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function qv(){let a=S.useContext(Hs);return jd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Cd=S.createContext(void 0);Cd.displayName="FrameworkContext";function kd(){let a=S.useContext(Cd);return jd(a,"You must render this element inside a <HydratedRouter> element"),a}function Yv(a,r){let s=S.useContext(Cd),[o,i]=S.useState(!1),[d,h]=S.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:b,onMouseLeave:x,onTouchStart:v}=r,E=S.useRef(null);S.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let N=X=>{X.forEach(U=>{h(U.isIntersecting)})},_=new IntersectionObserver(N,{threshold:.5});return E.current&&_.observe(E.current),()=>{_.disconnect()}}},[a]),S.useEffect(()=>{if(o){let N=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(N)}}},[o]);let M=()=>{i(!0)},k=()=>{i(!1),h(!1)};return s?a!=="intent"?[d,E,{}]:[d,E,{onFocus:zr(m,M),onBlur:zr(g,k),onMouseEnter:zr(b,M),onMouseLeave:zr(x,k),onTouchStart:zr(v,M)}]:[!1,E,{}]}function zr(a,r){return s=>{a&&a(s),s.defaultPrevented||r(s)}}function Vv({page:a,...r}){let s=tv(),{router:o}=Ed(),i=S.useMemo(()=>rg(o.routes,a,o.basename),[o.routes,a,o.basename]);return i?s?S.createElement(Gv,{page:a,matches:i,...r}):S.createElement(Xv,{page:a,matches:i,...r}):null}function Pv(a){let{manifest:r,routeModules:s}=kd(),[o,i]=S.useState([]);return S.useEffect(()=>{let d=!1;return Uv(a,r,s).then(h=>{d||i(h)}),()=>{d=!0}},[a,r,s]),o}function Gv({page:a,matches:r,...s}){let o=Tn(),{future:i}=kd(),{basename:d}=Ed(),h=S.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let m=Sg(a,d,i.unstable_trailingSlashAwareDataRequests,"rsc"),g=!1,b=[];for(let x of r)typeof x.route.shouldRevalidate=="function"?g=!0:b.push(x.route.id);return g&&b.length>0&&m.searchParams.set("_routes",b.join(",")),[m.pathname+m.search]},[d,i.unstable_trailingSlashAwareDataRequests,a,o,r]);return S.createElement(S.Fragment,null,h.map(m=>S.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...s})))}function Xv({page:a,matches:r,...s}){let o=Tn(),{future:i,manifest:d,routeModules:h}=kd(),{basename:m}=Ed(),{loaderData:g,matches:b}=qv(),x=S.useMemo(()=>s0(a,r,b,d,o,"data"),[a,r,b,d,o]),v=S.useMemo(()=>s0(a,r,b,d,o,"assets"),[a,r,b,d,o]),E=S.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let N=new Set,_=!1;if(r.forEach(U=>{let q=d.routes[U.route.id];!q||!q.hasLoader||(!x.some(F=>F.route.id===U.route.id)&&U.route.id in g&&h[U.route.id]?.shouldRevalidate||q.hasClientLoader?_=!0:N.add(U.route.id))}),N.size===0)return[];let X=Sg(a,m,i.unstable_trailingSlashAwareDataRequests,"data");return _&&N.size>0&&X.searchParams.set("_routes",r.filter(U=>N.has(U.route.id)).map(U=>U.route.id).join(",")),[X.pathname+X.search]},[m,i.unstable_trailingSlashAwareDataRequests,g,o,d,x,r,a,h]),M=S.useMemo(()=>Dv(v,d),[v,d]),k=Pv(v);return S.createElement(S.Fragment,null,E.map(N=>S.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...s})),M.map(N=>S.createElement("link",{key:N,rel:"modulepreload",href:N,...s})),k.map(({key:N,link:_})=>S.createElement("link",{key:N,nonce:s.nonce,..._,crossOrigin:_.crossOrigin??s.crossOrigin})))}function Fv(...a){return r=>{a.forEach(s=>{typeof s=="function"?s(r):s!=null&&(s.current=r)})}}var Kv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kv&&(window.__reactRouterVersion="7.14.0")}catch{}function Qv({basename:a,children:r,unstable_useTransitions:s,window:o}){let i=S.useRef();i.current==null&&(i.current=Nx({window:o,v5Compat:!0}));let d=i.current,[h,m]=S.useState({action:d.action,location:d.location}),g=S.useCallback(b=>{s===!1?m(b):S.startTransition(()=>m(b))},[s]);return S.useLayoutEffect(()=>d.listen(g),[d,g]),S.createElement(jv,{basename:a,children:r,location:h.location,navigationType:h.action,navigator:d,unstable_useTransitions:s})}var wg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jg=S.forwardRef(function({onClick:r,discover:s="render",prefetch:o="none",relative:i,reloadDocument:d,replace:h,unstable_mask:m,state:g,target:b,to:x,preventScrollReset:v,viewTransition:E,unstable_defaultShouldRevalidate:M,...k},N){let{basename:_,navigator:X,unstable_useTransitions:U}=S.useContext(Kt),q=typeof x=="string"&&wg.test(x),F=ug(x,_);x=F.to;let H=ov(x,{relative:i}),Z=Tn(),V=null;if(m){let he=xd(m,[],Z.unstable_mask?Z.unstable_mask.pathname:"/",!0);_!=="/"&&(he.pathname=he.pathname==="/"?_:sn([_,he.pathname])),V=X.createHref(he)}let[le,ae,je]=Yv(o,k),xe=$v(x,{replace:h,unstable_mask:m,state:g,target:b,preventScrollReset:v,relative:i,viewTransition:E,unstable_defaultShouldRevalidate:M,unstable_useTransitions:U});function me(he){r&&r(he),he.defaultPrevented||xe(he)}let $=!(F.isExternal||d),re=S.createElement("a",{...k,...je,href:($?V:void 0)||F.absoluteURL||H,onClick:$?me:r,ref:Fv(N,ae),target:b,"data-discover":!q&&s==="render"?"true":void 0});return le&&!q?S.createElement(S.Fragment,null,re,S.createElement(Vv,{page:H})):re});jg.displayName="Link";var St=S.forwardRef(function({"aria-current":r="page",caseSensitive:s=!1,className:o="",end:i=!1,style:d,to:h,viewTransition:m,children:g,...b},x){let v=Pr(h,{relative:b.relative}),E=Tn(),M=S.useContext(Hs),{navigator:k,basename:N}=S.useContext(Kt),_=M!=null&&n2(v)&&m===!0,X=k.encodeLocation?k.encodeLocation(v).pathname:v.pathname,U=E.pathname,q=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;s||(U=U.toLowerCase(),q=q?q.toLowerCase():null,X=X.toLowerCase()),q&&N&&(q=An(q,N)||q);const F=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let H=U===X||!i&&U.startsWith(X)&&U.charAt(F)==="/",Z=q!=null&&(q===X||!i&&q.startsWith(X)&&q.charAt(X.length)==="/"),V={isActive:H,isPending:Z,isTransitioning:_},le=H?r:void 0,ae;typeof o=="function"?ae=o(V):ae=[o,H?"active":null,Z?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let je=typeof d=="function"?d(V):d;return S.createElement(jg,{...b,"aria-current":le,className:ae,ref:x,style:je,to:h,viewTransition:m},typeof g=="function"?g(V):g)});St.displayName="NavLink";var Zv=S.forwardRef(({discover:a="render",fetcherKey:r,navigate:s,reloadDocument:o,replace:i,state:d,method:h=ws,action:m,onSubmit:g,relative:b,preventScrollReset:x,viewTransition:v,unstable_defaultShouldRevalidate:E,...M},k)=>{let{unstable_useTransitions:N}=S.useContext(Kt),_=e2(),X=t2(m,{relative:b}),U=h.toLowerCase()==="get"?"get":"post",q=typeof m=="string"&&wg.test(m),F=H=>{if(g&&g(H),H.defaultPrevented)return;H.preventDefault();let Z=H.nativeEvent.submitter,V=Z?.getAttribute("formmethod")||h,le=()=>_(Z||H.currentTarget,{fetcherKey:r,method:V,navigate:s,replace:i,state:d,relative:b,preventScrollReset:x,viewTransition:v,unstable_defaultShouldRevalidate:E});N&&s!==!1?S.startTransition(()=>le()):le()};return S.createElement("form",{ref:k,method:U,action:X,onSubmit:o?g:F,...M,"data-discover":!q&&a==="render"?"true":void 0})});Zv.displayName="Form";function Iv(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eg(a){let r=S.useContext(Tl);return Ve(r,Iv(a)),r}function $v(a,{target:r,replace:s,unstable_mask:o,state:i,preventScrollReset:d,relative:h,viewTransition:m,unstable_defaultShouldRevalidate:g,unstable_useTransitions:b}={}){let x=Vr(),v=Tn(),E=Pr(a,{relative:h});return S.useCallback(M=>{if(zv(M,r)){M.preventDefault();let k=s!==void 0?s:Br(v)===Br(E),N=()=>x(a,{replace:k,unstable_mask:o,state:i,preventScrollReset:d,relative:h,viewTransition:m,unstable_defaultShouldRevalidate:g});b?S.startTransition(()=>N()):N()}},[v,x,E,s,o,i,r,a,d,h,m,g,b])}var Jv=0,Wv=()=>`__${String(++Jv)}__`;function e2(){let{router:a}=Eg("useSubmit"),{basename:r}=S.useContext(Kt),s=xv(),o=a.fetch,i=a.navigate;return S.useCallback(async(d,h={})=>{let{action:m,method:g,encType:b,formData:x,body:v}=Rv(d,r);if(h.navigate===!1){let E=h.fetcherKey||Wv();await o(E,s,h.action||m,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:x,body:v,formMethod:h.method||g,formEncType:h.encType||b,flushSync:h.flushSync})}else await i(h.action||m,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:x,body:v,formMethod:h.method||g,formEncType:h.encType||b,replace:h.replace,state:h.state,fromRouteId:s,flushSync:h.flushSync,viewTransition:h.viewTransition})},[o,i,r,s])}function t2(a,{relative:r}={}){let{basename:s}=S.useContext(Kt),o=S.useContext(on);Ve(o,"useFormAction must be used inside a RouteContext");let[i]=o.matches.slice(-1),d={...Pr(a||".",{relative:r})},h=Tn();if(a==null){d.search=h.search;let m=new URLSearchParams(d.search),g=m.getAll("index");if(g.some(x=>x==="")){m.delete("index"),g.filter(v=>v).forEach(v=>m.append("index",v));let x=m.toString();d.search=x?`?${x}`:""}}return(!a||a===".")&&i.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:sn([s,d.pathname])),Br(d)}function n2(a,{relative:r}={}){let s=S.useContext(hg);Ve(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Eg("useViewTransitionState"),i=Pr(a,{relative:r});if(!s.isTransitioning)return!1;let d=An(s.currentLocation.pathname,o)||s.currentLocation.pathname,h=An(s.nextLocation.pathname,o)||s.nextLocation.pathname;return Os(i.pathname,h)!=null||Os(i.pathname,d)!=null}var a2=lg(),l2=class Cg extends Error{static kind="ClerkError";clerkError=!0;code;longMessage;docsUrl;cause;get name(){return this.constructor.name}constructor(r){super(new.target.formatMessage(new.target.kind,r.message,r.code,r.docsUrl),{cause:r.cause}),Object.setPrototypeOf(this,Cg.prototype),this.code=r.code,this.docsUrl=r.docsUrl,this.longMessage=r.longMessage,this.cause=r.cause}toString(){return`[${this.name}]
Message:${this.message}`}static formatMessage(r,s,o,i){const d="Clerk:",h=new RegExp(d.replace(" ","\\s*"),"i");return s=s.replace(h,""),s=`${d} ${s.trim()}

(code="${o}")

`,i&&(s+=`

Docs: ${i}`),s}};const r2=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:"The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",MissingPublishableKeyErrorMessage:"Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",MissingSecretKeyErrorMessage:"Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function kg({packageName:a,customMessages:r}){let s=a;function o(d,h){if(!h)return`${s}: ${d}`;let m=d;const g=d.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const b of g){const x=(h[b[1]]||"").toString();m=m.replace(`{{${b[1]}}}`,x)}return`${s}: ${m}`}const i={...r2,...r};return{setPackageName({packageName:d}){return typeof d=="string"&&(s=d),this},setMessages({customMessages:d}){return Object.assign(i,d||{}),this},throwInvalidPublishableKeyError(d){throw new Error(o(i.InvalidPublishableKeyErrorMessage,d))},throwInvalidProxyUrl(d){throw new Error(o(i.InvalidProxyUrlErrorMessage,d))},throwMissingPublishableKeyError(){throw new Error(o(i.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(o(i.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(d){throw new Error(o(i.MissingClerkProvider,d))},throw(d){throw new Error(o(d))}}}var ed=class _g extends l2{static kind="ClerkRuntimeError";clerkRuntimeError=!0;constructor(r,s){super({...s,message:r}),Object.setPrototypeOf(this,_g.prototype)}};const i2={strict_mfa:{afterMinutes:10,level:"multi_factor"},strict:{afterMinutes:10,level:"second_factor"},moderate:{afterMinutes:60,level:"second_factor"},lax:{afterMinutes:1440,level:"second_factor"}},s2=new Set(["first_factor","second_factor","multi_factor"]),o2=new Set(["strict_mfa","strict","moderate","lax"]),c2=a=>typeof a=="number"&&a>0,u2=a=>s2.has(a),d2=a=>o2.has(a),Nu=a=>a.replace(/^(org:)*/,"org:"),f2=(a,r)=>{const{orgId:s,orgRole:o,orgPermissions:i}=r;return!a.role&&!a.permission||!s||!o||!i?null:a.permission?i.includes(Nu(a.permission)):a.role?Nu(o)===Nu(a.role):null},o0=(a,r)=>{const{org:s,user:o}=p2(a),[i,d]=r.split(":"),h=d||i;return i==="org"?s.includes(h):i==="user"?o.includes(h):[...s,...o].includes(h)},h2=(a,r)=>{const{features:s,plans:o}=r;return a.feature&&s?o0(s,a.feature):a.plan&&o?o0(o,a.plan):null},p2=a=>{const r=a?a.split(",").map(s=>s.trim()):[];return{org:r.filter(s=>s.split(":")[0].includes("o")).map(s=>s.split(":")[1]),user:r.filter(s=>s.split(":")[0].includes("u")).map(s=>s.split(":")[1])}},m2=a=>{if(!a)return!1;const r=i=>typeof i=="string"?i2[i]:i,s=typeof a=="string"&&d2(a),o=typeof a=="object"&&u2(a.level)&&c2(a.afterMinutes);return s||o?r.bind(null,a):!1},g2=(a,{factorVerificationAge:r})=>{if(!a.reverification||!r)return null;const s=m2(a.reverification);if(!s)return null;const{level:o,afterMinutes:i}=s(),[d,h]=r,m=d!==-1?i>d:null,g=h!==-1?i>h:null;switch(o){case"first_factor":return m;case"second_factor":return h!==-1?g:m;case"multi_factor":return h===-1?m:m&&g}},b2=a=>r=>{if(!a.userId)return!1;const s=h2(r,a),o=f2(r,a),i=g2(r,a);return[s||o,i].some(d=>d===null)?[s||o,i].some(d=>d===!0):[s||o,i].every(d=>d===!0)},y2=({authObject:{sessionId:a,sessionStatus:r,userId:s,actor:o,orgId:i,orgRole:d,orgSlug:h,signOut:m,getToken:g,has:b,sessionClaims:x},options:{treatPendingAsSignedOut:v=!0}})=>{if(a===void 0&&s===void 0)return{isLoaded:!1,isSignedIn:void 0,sessionId:a,sessionClaims:void 0,userId:s,actor:void 0,orgId:void 0,orgRole:void 0,orgSlug:void 0,has:void 0,signOut:m,getToken:g};if(a===null&&s===null)return{isLoaded:!0,isSignedIn:!1,sessionId:a,userId:s,sessionClaims:null,actor:null,orgId:null,orgRole:null,orgSlug:null,has:()=>!1,signOut:m,getToken:g};if(v&&r==="pending")return{isLoaded:!0,isSignedIn:!1,sessionId:null,userId:null,sessionClaims:null,actor:null,orgId:null,orgRole:null,orgSlug:null,has:()=>!1,signOut:m,getToken:g};if(a&&x&&s&&i&&d)return{isLoaded:!0,isSignedIn:!0,sessionId:a,sessionClaims:x,userId:s,actor:o||null,orgId:i,orgRole:d,orgSlug:h||null,has:b,signOut:m,getToken:g};if(a&&x&&s&&!i)return{isLoaded:!0,isSignedIn:!0,sessionId:a,sessionClaims:x,userId:s,actor:o||null,orgId:null,orgRole:null,orgSlug:null,has:b,signOut:m,getToken:g}},x2=[".lcl.dev",".stg.dev",".lclstage.dev",".stgstage.dev",".dev.lclclerk.com",".stg.lclclerk.com",".accounts.lclclerk.com","accountsstage.dev","accounts.dev"],Ng=a=>typeof atob<"u"&&typeof atob=="function"?atob(a):typeof global<"u"&&global.Buffer?new global.Buffer(a,"base64").toString():a,zg="pk_live_",v2="pk_test_";function Ag(a){if(!a.endsWith("$"))return!1;const r=a.slice(0,-1);return r.includes("$")?!1:r.includes(".")}function c0(a,r={}){if(a=a||"",!a||!td(a)){if(r.fatal&&!a)throw new Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");if(r.fatal&&!td(a))throw new Error("Publishable key not valid.");return null}const s=a.startsWith(zg)?"production":"development";let o;try{o=Ng(a.split("_")[2])}catch{if(r.fatal)throw new Error("Publishable key not valid: Failed to decode key.");return null}if(!Ag(o)){if(r.fatal)throw new Error("Publishable key not valid: Decoded key has invalid format.");return null}let i=o.slice(0,-1);return r.proxyUrl?i=r.proxyUrl:s!=="development"&&r.domain&&r.isSatellite&&(i=`clerk.${r.domain}`),{instanceType:s,frontendApi:i}}function td(a=""){try{if(!(a.startsWith(zg)||a.startsWith(v2)))return!1;const r=a.split("_");if(r.length!==3)return!1;const s=r[2];return s?Ag(Ng(s)):!1}catch{return!1}}function S2(){const a=new Map;return{isDevOrStagingUrl:r=>{if(!r)return!1;const s=typeof r=="string"?r:r.hostname;let o=a.get(s);return o===void 0&&(o=x2.some(i=>s.endsWith(i)),a.set(s,o)),o}}}const w2="METHOD_CALLED",j2=.1;function Tg(a,r){return{event:w2,eventSamplingRate:j2,payload:{method:a,...r}}}var zu={exports:{}},Au={};var u0;function E2(){if(u0)return Au;u0=1;var a=Bs();function r(v,E){return v===E&&(v!==0||1/v===1/E)||v!==v&&E!==E}var s=typeof Object.is=="function"?Object.is:r,o=a.useState,i=a.useEffect,d=a.useLayoutEffect,h=a.useDebugValue;function m(v,E){var M=E(),k=o({inst:{value:M,getSnapshot:E}}),N=k[0].inst,_=k[1];return d(function(){N.value=M,N.getSnapshot=E,g(N)&&_({inst:N})},[v,M,E]),i(function(){return g(N)&&_({inst:N}),v(function(){g(N)&&_({inst:N})})},[v]),h(M),M}function g(v){var E=v.getSnapshot;v=v.value;try{var M=E();return!s(v,M)}catch{return!0}}function b(v,E){return E()}var x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?b:m;return Au.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:x,Au}var d0;function C2(){return d0||(d0=1,zu.exports=E2()),zu.exports}C2();const k2=0,_2=1,N2=2;var f0=Object.prototype.hasOwnProperty;function nd(a,r){var s,o;if(a===r)return!0;if(a&&r&&(s=a.constructor)===r.constructor){if(s===Date)return a.getTime()===r.getTime();if(s===RegExp)return a.toString()===r.toString();if(s===Array){if((o=a.length)===r.length)for(;o--&&nd(a[o],r[o]););return o===-1}if(!s||typeof a=="object"){o=0;for(s in a)if(f0.call(a,s)&&++o&&!f0.call(r,s)||!(s in r)||!nd(a[s],r[s]))return!1;return Object.keys(r).length===o}}return a!==a&&r!==r}const oa=new WeakMap,ua=()=>{},Ut=ua(),Ms=Object,$t=a=>a===Ut,ca=a=>typeof a=="function",La=(a,r)=>({...a,...r}),z2=a=>ca(a.then),Tu={},ms={},Rg="undefined",Ys=typeof window!=Rg,ad=typeof document!=Rg,A2=Ys&&"Deno"in window,T2=(a,r)=>{const s=oa.get(a);return[()=>!$t(r)&&a.get(r)||Tu,o=>{if(!$t(r)){const i=a.get(r);r in ms||(ms[r]=i),s[5](r,La(i,o),i||Tu)}},s[6],()=>!$t(r)&&r in ms?ms[r]:!$t(r)&&a.get(r)||Tu]};let ld=!0;const R2=()=>ld,[rd,id]=Ys&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[ua,ua],O2=()=>{const a=ad&&document.visibilityState;return $t(a)||a!=="hidden"},M2=a=>(ad&&document.addEventListener("visibilitychange",a),rd("focus",a),()=>{ad&&document.removeEventListener("visibilitychange",a),id("focus",a)}),U2=a=>{const r=()=>{ld=!0,a()},s=()=>{ld=!1};return rd("online",r),rd("offline",s),()=>{id("online",r),id("offline",s)}},D2={isOnline:R2,isVisible:O2},L2={initFocus:M2,initReconnect:U2};D.useId;const _d=!Ys||A2,B2=_d?S.useEffect:S.useLayoutEffect,Ru=typeof navigator<"u"&&navigator.connection,h0=!_d&&Ru&&(["slow-2g","2g"].includes(Ru.effectiveType)||Ru.saveData),gs=new WeakMap,H2=a=>Ms.prototype.toString.call(a),Ou=(a,r)=>a===`[object ${r}]`;let q2=0;const sd=a=>{const r=typeof a,s=H2(a),o=Ou(s,"Date"),i=Ou(s,"RegExp"),d=Ou(s,"Object");let h,m;if(Ms(a)===a&&!o&&!i){if(h=gs.get(a),h)return h;if(h=++q2+"~",gs.set(a,h),Array.isArray(a)){for(h="@",m=0;m<a.length;m++)h+=sd(a[m])+",";gs.set(a,h)}if(d){h="#";const g=Ms.keys(a).sort();for(;!$t(m=g.pop());)$t(a[m])||(h+=m+":"+sd(a[m])+",");gs.set(a,h)}}else h=o?a.toJSON():r=="symbol"?a.toString():r=="string"?JSON.stringify(a):""+a;return h},Og=a=>{if(ca(a))try{a=a()}catch{a=""}const r=a;return a=typeof a=="string"?a:(Array.isArray(a)?a.length:a)?sd(a):"",[a,r]};let Y2=0;const p0=()=>++Y2;async function V2(...a){const[r,s,o,i]=a,d=La({populateCache:!0,throwOnError:!0},typeof i=="boolean"?{revalidate:i}:i||{});let h=d.populateCache;const m=d.rollbackOnError;let g=d.optimisticData;const b=E=>typeof m=="function"?m(E):m!==!1,x=d.throwOnError;if(ca(s)){const E=s,M=[],k=r.keys();for(const N of k)!/^\$(inf|sub)\$/.test(N)&&E(r.get(N)._k)&&M.push(N);return Promise.all(M.map(v))}return v(s);async function v(E){const[M]=Og(E);if(!M)return;const[k,N]=T2(r,M),[_,X,U,q]=oa.get(r),F=()=>{const re=_[M];return(ca(d.revalidate)?d.revalidate(k().data,E):d.revalidate!==!1)&&(delete U[M],delete q[M],re&&re[0])?re[0](N2).then(()=>k().data):k().data};if(a.length<3)return F();let H=o,Z,V=!1;const le=p0();X[M]=[le,0];const ae=!$t(g),je=k(),xe=je.data,me=je._c,$=$t(me)?xe:me;if(ae&&(g=ca(g)?g($,xe):g,N({data:g,_c:$})),ca(H))try{H=H($)}catch(re){Z=re,V=!0}if(H&&z2(H))if(H=await H.catch(re=>{Z=re,V=!0}),le!==X[M][0]){if(V)throw Z;return H}else V&&ae&&b(Z)&&(h=!0,N({data:$,_c:Ut}));if(h&&!V)if(ca(h)){const re=h(H,$);N({data:re,error:Ut,_c:Ut})}else N({data:H,error:Ut,_c:Ut});if(X[M][1]=p0(),Promise.resolve(F()).then(()=>{N({_c:Ut})}),V){if(x)throw Z;return}return H}}const m0=(a,r)=>{for(const s in a)a[s][0]&&a[s][0](r)},Mg=(a,r)=>{if(!oa.has(a)){const s=La(L2,r),o=Object.create(null),i=V2.bind(Ut,a);let d=ua;const h=Object.create(null),m=(x,v)=>{const E=h[x]||[];return h[x]=E,E.push(v),()=>E.splice(E.indexOf(v),1)},g=(x,v,E)=>{a.set(x,v);const M=h[x];if(M)for(const k of M)k(v,E)},b=()=>{if(!oa.has(a)&&(oa.set(a,[o,Object.create(null),Object.create(null),Object.create(null),i,g,m]),!_d)){const x=s.initFocus(setTimeout.bind(Ut,m0.bind(Ut,o,k2))),v=s.initReconnect(setTimeout.bind(Ut,m0.bind(Ut,o,_2)));d=()=>{x&&x(),v&&v(),oa.delete(a)}}};return b(),[a,i,b,d]}return[a,oa.get(a)[4]]},P2=(a,r,s,o,i)=>{const d=s.errorRetryCount,h=i.retryCount,m=~~((Math.random()+.5)*(1<<(h<8?h:8)))*s.errorRetryInterval;!$t(d)&&h>d||setTimeout(o,m,i)},G2=nd,[Nd,X2]=Mg(new Map),F2=La({onLoadingSlow:ua,onSuccess:ua,onError:ua,onErrorRetry:P2,onDiscarded:ua,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:h0?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:h0?5e3:3e3,compare:G2,isPaused:()=>!1,cache:Nd,mutate:X2,fallback:{}},D2),K2=(a,r)=>{const s=La(a,r);if(r){const{use:o,fallback:i}=a,{use:d,fallback:h}=r;o&&d&&(s.use=o.concat(d)),i&&h&&(s.fallback=La(i,h))}return s},g0=S.createContext({}),Q2=a=>{const{value:r}=a,s=S.useContext(g0),o=ca(r),i=S.useMemo(()=>o?r(s):r,[o,s,r]),d=S.useMemo(()=>o?i:K2(s,i),[o,s,i]),h=i&&i.provider,m=S.useRef(Ut);h&&!m.current&&(m.current=Mg(h(d.cache||Nd),i));const g=m.current;return g&&(d.cache=g[0],d.mutate=g[1]),B2(()=>{if(g)return g[2]&&g[2](),g[3]},[]),S.createElement(g0.Provider,La(a,{value:d}))},Z2="$inf$",Ug=Ys&&window.__SWR_DEVTOOLS_USE__,I2=Ug?window.__SWR_DEVTOOLS_USE__:[],$2=()=>{Ug&&(window.__SWR_DEVTOOLS_REACT__=D)},J2=a=>(r,s,o)=>a(r,s&&((...d)=>{const[h]=Og(r),[,,,m]=oa.get(Nd);if(h.startsWith(Z2))return s(...d);const g=m[h];return $t(g)?s(...d):(delete m[h],g)}),o);I2.concat(J2);$2();D.use;const W2=Ms.defineProperty(Q2,"defaultValue",{value:F2});var b0=Object.prototype.hasOwnProperty;function y0(a,r,s){for(s of a.keys())if(Ur(s,r))return s}function Ur(a,r){var s,o,i;if(a===r)return!0;if(a&&r&&(s=a.constructor)===r.constructor){if(s===Date)return a.getTime()===r.getTime();if(s===RegExp)return a.toString()===r.toString();if(s===Array){if((o=a.length)===r.length)for(;o--&&Ur(a[o],r[o]););return o===-1}if(s===Set){if(a.size!==r.size)return!1;for(o of a)if(i=o,i&&typeof i=="object"&&(i=y0(r,i),!i)||!r.has(i))return!1;return!0}if(s===Map){if(a.size!==r.size)return!1;for(o of a)if(i=o[0],i&&typeof i=="object"&&(i=y0(r,i),!i)||!Ur(o[1],r.get(i)))return!1;return!0}if(s===ArrayBuffer)a=new Uint8Array(a),r=new Uint8Array(r);else if(s===DataView){if((o=a.byteLength)===r.byteLength)for(;o--&&a.getInt8(o)===r.getInt8(o););return o===-1}if(ArrayBuffer.isView(a)){if((o=a.byteLength)===r.byteLength)for(;o--&&a[o]===r[o];);return o===-1}if(!s||typeof a=="object"){o=0;for(s in a)if(b0.call(a,s)&&++o&&!b0.call(r,s)||!(s in r)||!Ur(a[s],r[s]))return!1;return Object.keys(r).length===o}}return a!==a&&r!==r}function e4(a,r){if(!a)throw typeof r=="string"?new Error(r):new Error(`${r.displayName} not found`)}const Rn=(a,r)=>{const{assertCtxFn:s=e4}={},o=D.createContext(void 0);return o.displayName=a,[o,()=>{const h=D.useContext(o);return s(h,`${a} not found`),h.value},()=>{const h=D.useContext(o);return h?h.value:{}}]};function t4({swrConfig:a,children:r}){return D.createElement(W2,{value:a},r)}const[Dg,zd]=Rn("ClerkInstanceContext"),[n4,a4]=Rn("UserContext"),[l4]=Rn("ClientContext"),[r4]=Rn("SessionContext");D.createContext({});const[i4]=Rn("CheckoutContext"),s4=({children:a,...r})=>D.createElement(i4.Provider,{value:{value:r}},a),[o4]=Rn("OrganizationContext"),c4=({children:a,organization:r,swrConfig:s})=>D.createElement(t4,{swrConfig:s},D.createElement(o4.Provider,{value:{value:{organization:r}}},a));function Ad(a){if(!D.useContext(Dg)){if(typeof a=="function"){a();return}throw new Error(`${a} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}const Lg=()=>(Ad("useClerk"),zd());typeof window<"u"?D.useLayoutEffect:D.useEffect;const x0="useUser";function Rl(){Ad(x0);const a=a4();return zd().telemetry?.record(Tg(x0)),a===void 0?{isLoaded:!1,isSignedIn:void 0,user:void 0}:a===null?{isLoaded:!0,isSignedIn:!1,user:null}:{isLoaded:!0,isSignedIn:!0,user:a}}const v0=Ur,u4=a=>{const r=S.useRef(a);return S.useEffect(()=>{r.current=a},[a]),r.current},Mt=(a,r,s)=>{const o=!!s,i=S.useRef(s);S.useEffect(()=>{i.current=s},[s]),S.useEffect(()=>{if(!o||!a)return()=>{};const d=(...h)=>{i.current&&i.current(...h)};return a.on(r,d),()=>{a.off(r,d)}},[o,r,a,i])},Bg=D.createContext(null);Bg.displayName="ElementsContext";const d4=(a,r)=>{if(!a)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${r} in an <Elements> provider.`);return a},Us=a=>a!==null&&typeof a=="object",f4=(a,r,s)=>Us(a)?Object.keys(a).reduce((o,i)=>{const d=!Us(r)||!Hg(a[i],r[i]);return s.includes(i)?(d&&console.warn(`Unsupported prop change: options.${i} is not a mutable property.`),o):d?{...o||{},[i]:a[i]}:o},null):null,S0="[object Object]",Hg=(a,r)=>{if(!Us(a)||!Us(r))return a===r;const s=Array.isArray(a);if(s!==Array.isArray(r))return!1;const o=Object.prototype.toString.call(a)===S0;if(o!==(Object.prototype.toString.call(r)===S0))return!1;if(!o&&!s)return a===r;const i=Object.keys(a),d=Object.keys(r);if(i.length!==d.length)return!1;const h={};for(let v=0;v<i.length;v+=1)h[i[v]]=!0;for(let v=0;v<d.length;v+=1)h[d[v]]=!0;const m=Object.keys(h);if(m.length!==i.length)return!1;const g=a,b=r,x=v=>Hg(g[v],b[v]);return m.every(x)},w0=a=>d4(D.useContext(Bg),a),h4=a=>a.charAt(0).toUpperCase()+a.slice(1),p4=(a,r)=>{const s=`${h4(a)}Element`,d=r?h=>{w0(`mounts <${s}>`);const{id:m,className:g}=h;return D.createElement("div",{id:m,className:g})}:({id:h,className:m,fallback:g,options:b={},onBlur:x,onFocus:v,onReady:E,onChange:M,onEscape:k,onClick:N,onLoadError:_,onLoaderStart:X,onNetworksChange:U,onConfirm:q,onCancel:F,onShippingAddressChange:H,onShippingRateChange:Z})=>{const V=w0(`mounts <${s}>`),le="elements"in V?V.elements:null,[ae,je]=D.useState(null),xe=D.useRef(null),me=D.useRef(null),[$,re]=S.useState(!1);Mt(ae,"blur",x),Mt(ae,"focus",v),Mt(ae,"escape",k),Mt(ae,"click",N),Mt(ae,"loaderror",_),Mt(ae,"loaderstart",X),Mt(ae,"networkschange",U),Mt(ae,"confirm",q),Mt(ae,"cancel",F),Mt(ae,"shippingaddresschange",H),Mt(ae,"shippingratechange",Z),Mt(ae,"change",M);let he;E&&(he=()=>{re(!0),E(ae)}),Mt(ae,"ready",he),D.useLayoutEffect(()=>{if(xe.current===null&&me.current!==null&&le){let I=null;le&&(I=le.create(a,b)),xe.current=I,je(I),I&&I.mount(me.current)}},[le,b]);const R=u4(b);return D.useEffect(()=>{if(!xe.current)return;const I=f4(b,R,["paymentRequest"]);I&&"update"in xe.current&&xe.current.update(I)},[b,R]),D.useLayoutEffect(()=>()=>{if(xe.current&&typeof xe.current.destroy=="function")try{xe.current.destroy(),xe.current=null}catch{}},[]),D.createElement(D.Fragment,null,!$&&g,D.createElement("div",{id:h,style:{height:$?"unset":"0px",visibility:$?"visible":"hidden"},className:m,ref:me}))};return d.displayName=s,d.__elementType=a,d};p4("payment",typeof window>"u");Rn("PaymentElementContext");Rn("StripeUtilsContext");var Jt=kg({packageName:"@clerk/clerk-react"});function m4(a){Jt.setMessages(a).setPackageName(a)}var[g4,b4]=Rn("AuthContext"),y4=Dg,qg=zd,x4="You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.",v4=a=>`You've passed multiple children components to <${a}/>. You can only pass a single child component or text.`,S4="Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support",Mu="Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.",w4="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",j4="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",E4="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",C4="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",k4=a=>`<${a} /> can only accept <${a}.Page /> and <${a}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,_4=a=>`Missing props. <${a}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,N4=a=>`Missing props. <${a}.Link /> component requires the following props: url, label and labelIcon.`,z4="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",A4="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",T4="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",R4="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",O4="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",M4="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",U4="Missing props. <UserButton.Action /> component requires the following props: label.",Yg=a=>{Ad(()=>{Jt.throwMissingClerkProviderError({source:a})})},Vg=a=>new Promise(r=>{const s=o=>{["ready","degraded"].includes(o)&&(r(),a.off("status",s))};a.on("status",s,{notify:!0})}),D4=a=>async r=>(await Vg(a),a.session?a.session.getToken(r):null),L4=a=>async(...r)=>(await Vg(a),a.signOut(...r)),Pg=(a={})=>{var r;Yg("useAuth");const{treatPendingAsSignedOut:s,...o}=a??{},i=o;let h=b4();h.sessionId===void 0&&h.userId===void 0&&(h=i??{});const m=qg(),g=S.useCallback(D4(m),[m]),b=S.useCallback(L4(m),[m]);return(r=m.telemetry)==null||r.record(Tg("useAuth",{treatPendingAsSignedOut:s})),B4({...h,getToken:g,signOut:b},{treatPendingAsSignedOut:s})};function B4(a,{treatPendingAsSignedOut:r=!0}={}){const{userId:s,orgId:o,orgRole:i,has:d,signOut:h,getToken:m,orgPermissions:g,factorVerificationAge:b,sessionClaims:x}=a??{},v=S.useCallback(M=>d?d(M):b2({userId:s,orgId:o,orgRole:i,orgPermissions:g,factorVerificationAge:b,features:x?.fea||"",plans:x?.pla||""})(M),[d,s,o,i,g,b,x]),E=y2({authObject:{...a,getToken:m,signOut:h,has:v},options:{treatPendingAsSignedOut:r}});return E||Jt.throw(S4)}var De=(a,r)=>{const o=(typeof r=="string"?r:r?.component)||a.displayName||a.name||"Component";a.displayName=o;const i=typeof r=="string"?void 0:r,d=h=>{Yg(o||"withClerk");const m=qg();return!m.loaded&&!i?.renderWhileLoading?null:D.createElement(a,{...h,component:o,clerk:m})};return d.displayName=`withClerk(${o})`,d};const H4=()=>{try{return!1}catch{}return!1},q4=()=>{try{return!1}catch{}return!1},Y4=()=>{try{return!0}catch{}return!1},j0=new Set,Td=(a,r,s)=>{const o=q4()||Y4(),i=a;j0.has(i)||o||(j0.add(i),console.warn(`Clerk - DEPRECATION WARNING: "${a}" is deprecated and will be removed in the next major release.
${r}`))};De(({clerk:a,...r})=>{const{client:s,session:o}=a,i=s.signedInSessions?s.signedInSessions.length>0:s.activeSessions&&s.activeSessions.length>0;return D.useEffect(()=>{o===null&&i?a.redirectToAfterSignOut():a.redirectToSignIn(r)},[]),null},"RedirectToSignIn");De(({clerk:a,...r})=>(D.useEffect(()=>{a.redirectToSignUp(r)},[]),null),"RedirectToSignUp");De(({clerk:a,...r})=>(D.useEffect(()=>{a.redirectToTasks(r)},[]),null),"RedirectToTasks");De(({clerk:a})=>(D.useEffect(()=>{Td("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),a.redirectToUserProfile()},[]),null),"RedirectToUserProfile");De(({clerk:a})=>(D.useEffect(()=>{Td("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),a.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");De(({clerk:a})=>(D.useEffect(()=>{Td("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),a.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");De(({clerk:a,...r})=>(D.useEffect(()=>{a.handleRedirectCallback(r)},[]),null),"AuthenticateWithRedirectCallback");function Uu(a,r,s){if(typeof a=="function")return a(r);if(typeof a<"u")return a;if(typeof s<"u")return s}const ht=a=>{H4()&&console.error(`Clerk: ${a}`)},E0=(a,...r)=>{const s={...a};for(const o of r)delete s[o];return s};var Vs=a=>r=>{try{return D.Children.only(a)}catch{return Jt.throw(v4(r))}},Ps=(a,r)=>(a||(a=r),typeof a=="string"&&(a=D.createElement("button",null,a)),a),Gs=a=>(...r)=>{if(a&&typeof a=="function")return a(...r)};function V4(a){return typeof a=="function"}var bs=new Map;function P4(a,r,s=1){D.useEffect(()=>{const o=bs.get(a)||0;return o==s?Jt.throw(r):(bs.set(a,o+1),()=>{bs.set(a,(bs.get(a)||1)-1)})},[])}function G4(a,r,s){const o=a.displayName||a.name||r||"Component",i=d=>(P4(r,s),D.createElement(a,{...d}));return i.displayName=`withMaxAllowedInstancesGuard(${o})`,i}var Dr=a=>{const[r,s]=S.useState(new Map);return a.map(o=>({id:o.id,mount:i=>s(d=>new Map(d).set(String(o.id),i)),unmount:()=>s(i=>{const d=new Map(i);return d.set(String(o.id),null),d}),portal:()=>{const i=r.get(String(o.id));return i?a2.createPortal(o.component,i):null}}))},ft=(a,r)=>!!a&&D.isValidElement(a)&&a?.type===r,Gg=(a,r)=>Kg({children:a,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:Xr,PageComponent:Gr,MenuItemsComponent:Fs,componentName:"UserProfile"},r),Xg=(a,r)=>Kg({children:a,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:Qs,PageComponent:Ks,componentName:"OrganizationProfile"},r),Fg=a=>{const r=[],s=[Qs,Ks,Fs,Gr,Xr];return D.Children.forEach(a,o=>{s.some(i=>ft(o,i))||r.push(o)}),r},Kg=(a,r)=>{const{children:s,LinkComponent:o,PageComponent:i,MenuItemsComponent:d,reorderItemsLabels:h,componentName:m}=a,{allowForAnyChildren:g=!1}=r||{},b=[];D.Children.forEach(s,U=>{if(!ft(U,i)&&!ft(U,o)&&!ft(U,d)){U&&!g&&ht(k4(m));return}const{props:q}=U,{children:F,label:H,url:Z,labelIcon:V}=q;if(ft(U,i))if(C0(q,h))b.push({label:H});else if(Du(q))b.push({label:H,labelIcon:V,children:F,url:Z});else{ht(_4(m));return}if(ft(U,o))if(Lu(q))b.push({label:H,labelIcon:V,url:Z});else{ht(N4(m));return}});const x=[],v=[],E=[];b.forEach((U,q)=>{if(Du(U)){x.push({component:U.children,id:q}),v.push({component:U.labelIcon,id:q});return}Lu(U)&&E.push({component:U.labelIcon,id:q})});const M=Dr(x),k=Dr(v),N=Dr(E),_=[],X=[];return b.forEach((U,q)=>{if(C0(U,h)){_.push({label:U.label});return}if(Du(U)){const{portal:F,mount:H,unmount:Z}=M.find(je=>je.id===q),{portal:V,mount:le,unmount:ae}=k.find(je=>je.id===q);_.push({label:U.label,url:U.url,mount:H,unmount:Z,mountIcon:le,unmountIcon:ae}),X.push(F),X.push(V);return}if(Lu(U)){const{portal:F,mount:H,unmount:Z}=N.find(V=>V.id===q);_.push({label:U.label,url:U.url,mountIcon:H,unmountIcon:Z}),X.push(F);return}}),{customPages:_,customPagesPortals:X}},C0=(a,r)=>{const{children:s,label:o,url:i,labelIcon:d}=a;return!s&&!i&&!d&&r.some(h=>h===o)},Du=a=>{const{children:r,label:s,url:o,labelIcon:i}=a;return!!r&&!!o&&!!i&&!!s},Lu=a=>{const{children:r,label:s,url:o,labelIcon:i}=a;return!r&&!!o&&!!i&&!!s},X4=(a,r)=>{var s;return F4({children:a,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:Fs,MenuActionComponent:Zg,MenuLinkComponent:Ig,UserProfileLinkComponent:Xr,UserProfilePageComponent:Gr,allowForAnyChildren:(s=r?.allowForAnyChildren)!=null?s:!1})},F4=({children:a,MenuItemsComponent:r,MenuActionComponent:s,MenuLinkComponent:o,UserProfileLinkComponent:i,UserProfilePageComponent:d,reorderItemsLabels:h,allowForAnyChildren:m=!1})=>{const g=[],b=[],x=[];D.Children.forEach(a,N=>{if(!ft(N,r)&&!ft(N,i)&&!ft(N,d)){N&&!m&&ht(z4);return}if(ft(N,i)||ft(N,d))return;const{props:_}=N;D.Children.forEach(_.children,X=>{if(!ft(X,s)&&!ft(X,o)){X&&ht(A4);return}const{props:U}=X,{label:q,labelIcon:F,href:H,onClick:Z,open:V}=U;if(ft(X,s))if(k0(U,h))g.push({label:q});else if(Bu(U)){const le={label:q,labelIcon:F};if(Z!==void 0)g.push({...le,onClick:Z});else if(V!==void 0)g.push({...le,open:V.startsWith("/")?V:`/${V}`});else{ht("Custom menu item must have either onClick or open property");return}}else{ht(U4);return}if(ft(X,o))if(Hu(U))g.push({label:q,labelIcon:F,href:H});else{ht(M4);return}})});const v=[],E=[];g.forEach((N,_)=>{Bu(N)&&v.push({component:N.labelIcon,id:_}),Hu(N)&&E.push({component:N.labelIcon,id:_})});const M=Dr(v),k=Dr(E);return g.forEach((N,_)=>{if(k0(N,h)&&b.push({label:N.label}),Bu(N)){const{portal:X,mount:U,unmount:q}=M.find(H=>H.id===_),F={label:N.label,mountIcon:U,unmountIcon:q};"onClick"in N?F.onClick=N.onClick:"open"in N&&(F.open=N.open),b.push(F),x.push(X)}if(Hu(N)){const{portal:X,mount:U,unmount:q}=k.find(F=>F.id===_);b.push({label:N.label,href:N.href,mountIcon:U,unmountIcon:q}),x.push(X)}}),{customMenuItems:b,customMenuItemsPortals:x}},k0=(a,r)=>{const{children:s,label:o,onClick:i,labelIcon:d}=a;return!s&&!i&&!d&&r.some(h=>h===o)},Bu=a=>{const{label:r,labelIcon:s,onClick:o,open:i}=a;return!!s&&!!r&&(typeof o=="function"||typeof i=="string")},Hu=a=>{const{label:r,href:s,labelIcon:o}=a;return!!s&&!!o&&!!r},K4=a=>{const r=a?.isReady;return s=>new Promise((o,i)=>{const{root:d=document?.body,selector:h,timeout:m=0}=s;if(!d){i(new Error("No root element provided"));return}let g=d;if(h&&(g=d?.querySelector(h)),r(g,h)){o();return}const b=new MutationObserver(x=>{for(const v of x)if(!g&&h&&(g=d?.querySelector(h)),(a.childList&&v.type==="childList"||a.attributes&&v.type==="attributes")&&r(g,h)){b.disconnect(),o();return}});b.observe(d,a),m>0&&setTimeout(()=>{b.disconnect(),i(new Error(`Timeout waiting for ${h}`))},m)})},Q4=K4({childList:!0,subtree:!0,isReady:(a,r)=>{var s;return!!a?.childElementCount&&((s=a?.matches)==null?void 0:s.call(a,r))&&a.childElementCount>0}});function ut(a,r){const s=S.useRef(),[o,i]=S.useState("rendering");return S.useEffect(()=>{if(!a)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!s.current){const d=`[data-clerk-component="${a}"]`,h=r?.selector;s.current=Q4({selector:h?d+h:d}).then(()=>{i("rendered")}).catch(()=>{i("error")})}},[a,r?.selector]),o}var ys=a=>"mount"in a,_0=a=>"open"in a,N0=a=>a?.map(({mountIcon:r,unmountIcon:s,...o})=>o),nt=class extends D.PureComponent{constructor(){super(...arguments),this.rootRef=D.createRef()}componentDidUpdate(a){var r,s,o,i;if(!ys(a)||!ys(this.props))return;const d=E0(a.props,"customPages","customMenuItems","children"),h=E0(this.props.props,"customPages","customMenuItems","children"),m=((r=d.customPages)==null?void 0:r.length)!==((s=h.customPages)==null?void 0:s.length),g=((o=d.customMenuItems)==null?void 0:o.length)!==((i=h.customMenuItems)==null?void 0:i.length),b=N0(a.props.customMenuItems),x=N0(this.props.props.customMenuItems);(!v0(d,h)||!v0(b,x)||m||g)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(ys(this.props)&&this.props.mount(this.rootRef.current,this.props.props),_0(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(ys(this.props)&&this.props.unmount(this.rootRef.current),_0(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:a=!1}=this.props,r={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return D.createElement(D.Fragment,null,!a&&D.createElement("div",{...r}),this.props.children)}},Xs=a=>{var r,s;return D.createElement(D.Fragment,null,(r=a?.customPagesPortals)==null?void 0:r.map((o,i)=>S.createElement(o,{key:i})),(s=a?.customMenuItemsPortals)==null?void 0:s.map((o,i)=>S.createElement(o,{key:i})))};De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountSignIn,unmount:a.unmountSignIn,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"SignIn",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountSignUp,unmount:a.unmountSignUp,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"SignUp",renderWhileLoading:!0});function Gr({children:a}){return ht(w4),D.createElement(D.Fragment,null,a)}function Xr({children:a}){return ht(j4),D.createElement(D.Fragment,null,a)}var Z4=De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:g}=Gg(o.children);return D.createElement(D.Fragment,null,d&&s,D.createElement(nt,{component:r,mount:a.mountUserProfile,unmount:a.unmountUserProfile,updateProps:a.__unstable__updateProps,props:{...o,customPages:m},rootProps:h},D.createElement(Xs,{customPagesPortals:g})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(Z4,{Page:Gr,Link:Xr});var Qg=S.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),I4=De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:g}=Gg(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),b={...o.userProfileProps,customPages:m},{customMenuItems:x,customMenuItemsPortals:v}=X4(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),E=Fg(o.children),M={mount:a.mountUserButton,unmount:a.unmountUserButton,updateProps:a.__unstable__updateProps,props:{...o,userProfileProps:b,customMenuItems:x}},k={customPagesPortals:g,customMenuItemsPortals:v};return D.createElement(Qg.Provider,{value:M},d&&s,a.loaded&&D.createElement(nt,{component:r,...M,hideRootHtmlElement:!!o.__experimental_asProvider,rootProps:h},o.__experimental_asProvider?E:null,D.createElement(Xs,{...k})))},{component:"UserButton",renderWhileLoading:!0});function Fs({children:a}){return ht(T4),D.createElement(D.Fragment,null,a)}function Zg({children:a}){return ht(R4),D.createElement(D.Fragment,null,a)}function Ig({children:a}){return ht(O4),D.createElement(D.Fragment,null,a)}function $4(a){const r=S.useContext(Qg),s={...r,props:{...r.props,...a}};return D.createElement(nt,{...s})}var $g=Object.assign(I4,{UserProfilePage:Gr,UserProfileLink:Xr,MenuItems:Fs,Action:Zg,Link:Ig,__experimental_Outlet:$4});function Ks({children:a}){return ht(E4),D.createElement(D.Fragment,null,a)}function Qs({children:a}){return ht(C4),D.createElement(D.Fragment,null,a)}var J4=De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:g}=Xg(o.children);return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountOrganizationProfile,unmount:a.unmountOrganizationProfile,updateProps:a.__unstable__updateProps,props:{...o,customPages:m},rootProps:h},D.createElement(Xs,{customPagesPortals:g})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(J4,{Page:Ks,Link:Qs});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountCreateOrganization,unmount:a.unmountCreateOrganization,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"CreateOrganization",renderWhileLoading:!0});var Jg=S.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),W4=De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:g}=Xg(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),b={...o.organizationProfileProps,customPages:m},x=Fg(o.children),v={mount:a.mountOrganizationSwitcher,unmount:a.unmountOrganizationSwitcher,updateProps:a.__unstable__updateProps,props:{...o,organizationProfileProps:b},rootProps:h,component:r};return a.__experimental_prefetchOrganizationSwitcher(),D.createElement(Jg.Provider,{value:v},D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{...v,hideRootHtmlElement:!!o.__experimental_asProvider},o.__experimental_asProvider?x:null,D.createElement(Xs,{customPagesPortals:g}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function eS(a){const r=S.useContext(Jg),s={...r,props:{...r.props,...a}};return D.createElement(nt,{...s})}Object.assign(W4,{OrganizationProfilePage:Ks,OrganizationProfileLink:Qs,__experimental_Outlet:eS});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountOrganizationList,unmount:a.unmountOrganizationList,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"OrganizationList",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,open:a.openGoogleOneTap,close:a.closeGoogleOneTap,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"GoogleOneTap",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountWaitlist,unmount:a.unmountWaitlist,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"Waitlist",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r,{selector:'[data-component-status="ready"]'})==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountPricingTable,unmount:a.unmountPricingTable,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"PricingTable",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountAPIKeys,unmount:a.unmountAPIKeys,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"ApiKeys",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountUserAvatar,unmount:a.unmountUserAvatar,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"UserAvatar",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountTaskChooseOrganization,unmount:a.unmountTaskChooseOrganization,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountTaskResetPassword,unmount:a.unmountTaskResetPassword,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"TaskResetPassword",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountTaskSetupMFA,unmount:a.unmountTaskSetupMFA,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"TaskSetupMFA",renderWhileLoading:!0});var Wg=a=>{throw TypeError(a)},Rd=(a,r,s)=>r.has(a)||Wg("Cannot "+s),He=(a,r,s)=>(Rd(a,r,"read from private field"),s?s.call(a):r.get(a)),ra=(a,r,s)=>r.has(a)?Wg("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(a):r.set(a,s),Ta=(a,r,s,o)=>(Rd(a,r,"write to private field"),r.set(a,s),s),qu=(a,r,s)=>(Rd(a,r,"access private method"),s);const tS={initialDelay:125,maxDelayBetweenRetries:0,factor:2,shouldRetry:(a,r)=>r<5,retryImmediately:!1,jitter:!0},nS=100,e1=async a=>new Promise(r=>setTimeout(r,a)),t1=(a,r)=>r?a*(1+Math.random()):a,aS=a=>{let r=0;const s=()=>{const o=a.initialDelay,i=a.factor;let d=o*Math.pow(i,r);return d=t1(d,a.jitter),Math.min(a.maxDelayBetweenRetries||d,d)};return async()=>{await e1(s()),r++}},lS=async(a,r={})=>{let s=0;const{shouldRetry:o,initialDelay:i,maxDelayBetweenRetries:d,factor:h,retryImmediately:m,jitter:g,onBeforeRetry:b}={...tS,...r},x=aS({initialDelay:i,maxDelayBetweenRetries:d,factor:h,jitter:g});for(;;)try{return await a()}catch(v){if(s++,!o(v,s))throw v;b&&await b(s),m&&s===1?await e1(t1(nS,g)):await x()}},rS="loadScript cannot be called when document does not exist",iS="loadScript cannot be called without a src";async function sS(a="",r){const{async:s,defer:o,beforeLoad:i,crossOrigin:d,nonce:h}=r||{};return lS(()=>new Promise((g,b)=>{a||b(new Error(iS)),(!document||!document.body)&&b(new Error(rS));const x=document.createElement("script");d&&x.setAttribute("crossorigin",d),x.async=s||!1,x.defer=o||!1,x.addEventListener("load",()=>{x.remove(),g(x)}),x.addEventListener("error",v=>{x.remove(),b(v.error??new Error(`failed to load script: ${a}`))}),x.src=a,x.nonce=h,i?.(x),document.body.appendChild(x)}),{shouldRetry:(g,b)=>b<=5})}function oS(a){return a?cS(a)||n1(a):!0}function cS(a){return/^http(s)?:\/\//.test(a||"")}function n1(a){return a.startsWith("/")}function uS(a){return a?n1(a)?new URL(a,window.location.origin).toString():a:""}function dS(a){if(!a)return"";let r;if(a.match(/^(clerk\.)+\w*$/))r=/(clerk\.)*(?=clerk\.)/;else{if(a.match(/\.clerk.accounts/))return a;r=/^(clerk\.)*/gi}return`clerk.${a.replace(r,"")}`}const fS=(a,r="5.125.7")=>{if(a)return a;const s=hS(r);return s?s==="snapshot"?"5.125.7":s:pS(r)},hS=a=>a.trim().replace(/^v/,"").match(/-(.+?)(\.|$)/)?.[1],pS=a=>a.trim().replace(/^v/,"").split(".")[0],a1="failed_to_load_clerk_js",mS="failed_to_load_clerk_js_timeout",od="Failed to load Clerk",{isDevOrStagingUrl:gS}=S2(),l1=kg({packageName:"@clerk/shared"});function bS(a){l1.setPackageName({packageName:a})}function cd(){if(typeof window>"u"||!window.Clerk)return!1;const a=window.Clerk;return typeof a=="object"&&typeof a.load=="function"}function yS(a){if(typeof window>"u"||!window.performance)return!1;const r=performance.getEntriesByName(a,"resource");if(r.length===0)return!1;const s=r[r.length-1];return s.transferSize===0&&s.decodedBodySize===0&&(s.responseEnd===0||s.responseEnd>0&&s.responseStart>0||"responseStatus"in s&&(s.responseStatus>=400||s.responseStatus===0))}function z0(a,r){return new Promise((s,o)=>{let i=!1;const d=(x,v)=>{clearTimeout(x),clearInterval(v)};r?.addEventListener("error",()=>{d(g,b),o(new ed(od,{code:a1}))});const h=()=>{i||cd()&&(i=!0,d(g,b),s(null))},g=setTimeout(()=>{i||(i=!0,d(g,b),cd()?s(null):o(new ed(od,{code:mS})))},a);h();const b=setInterval(()=>{if(i){clearInterval(b);return}h()},100)})}const xS=async a=>{const r=a?.scriptLoadTimeout??15e3;if(cd())return null;if(!a?.publishableKey)return l1.throwMissingPublishableKeyError(),null;const s=vS(a),o=document.querySelector("script[data-clerk-js-script]");if(o)if(yS(s))o.remove();else try{return await z0(r,o),null}catch{o.remove()}const i=z0(r);return sS(s,{async:!0,crossOrigin:"anonymous",nonce:a.nonce,beforeLoad:wS(a)}).catch(d=>{throw new ed(od+(d.message?`, ${d.message}`:""),{code:a1,cause:d})}),i},vS=a=>{const{clerkJSUrl:r,clerkJSVariant:s,clerkJSVersion:o,proxyUrl:i,domain:d,publishableKey:h}=a;if(r)return r;let m="";i&&oS(i)?m=uS(i).replace(/http(s)?:\/\//,""):d&&!gS(c0(h)?.frontendApi||"")?m=dS(d):m=c0(h)?.frontendApi||"";const g=s?`${s.replace(/\.+$/,"")}.`:"",b=fS(o);return`https://${m}/npm/@clerk/clerk-js@${b}/dist/clerk.${g}browser.js`},SS=a=>{const r={};return a.publishableKey&&(r["data-clerk-publishable-key"]=a.publishableKey),a.proxyUrl&&(r["data-clerk-proxy-url"]=a.proxyUrl),a.domain&&(r["data-clerk-domain"]=a.domain),a.nonce&&(r.nonce=a.nonce),r},wS=a=>r=>{const s=SS(a);for(const o in s)r.setAttribute(o,s[o])},jS=(a,r,s)=>!a&&s?ES(s):CS(r),ES=a=>{const r=a.userId,s=a.user,o=a.sessionId,i=a.sessionStatus,d=a.sessionClaims;return{userId:r,user:s,sessionId:o,session:a.session,sessionStatus:i,sessionClaims:d,organization:a.organization,orgId:a.orgId,orgRole:a.orgRole,orgPermissions:a.orgPermissions,orgSlug:a.orgSlug,actor:a.actor,factorVerificationAge:a.factorVerificationAge}},CS=a=>{const r=a.user?a.user.id:a.user,s=a.user,o=a.session?a.session.id:a.session,i=a.session,d=a.session?.status,h=a.session?a.session.lastActiveToken?.jwt?.claims:null,m=a.session?a.session.factorVerificationAge:null,g=i?.actor,b=a.organization,x=a.organization?a.organization.id:a.organization,v=b?.slug,E=b&&s?.organizationMemberships?.find(k=>k.organization.id===x),M=E&&E.permissions;return{userId:r,user:s,sessionId:o,session:i,sessionStatus:d,sessionClaims:h,organization:b,orgId:x,orgRole:E&&E.role,orgSlug:v,orgPermissions:M,actor:g,factorVerificationAge:m}};function Ds(){return typeof window<"u"}const A0=(a,r,s,o,i)=>{const{notify:d}=i||{};let h=a.get(s);h||(h=[],a.set(s,h)),h.push(o),d&&r.has(s)&&o(r.get(s))},T0=(a,r,s)=>(a.get(r)||[]).map(o=>o(s)),R0=(a,r,s)=>{const o=a.get(r);o&&(s?o.splice(o.indexOf(s)>>>0,1):a.set(r,[]))},kS=()=>{const a=new Map,r=new Map,s=new Map;return{on:(...i)=>A0(a,r,...i),prioritizedOn:(...i)=>A0(s,r,...i),emit:(i,d)=>{r.set(i,d),T0(s,i,d),T0(a,i,d)},off:(...i)=>R0(a,...i),prioritizedOff:(...i)=>R0(s,...i),internal:{retrieveListeners:i=>a.get(i)||[]}}},xs={Status:"status"},_S=()=>kS();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);De(({clerk:a,children:r,...s})=>{const{appearance:o,signUpFallbackRedirectUrl:i,forceRedirectUrl:d,fallbackRedirectUrl:h,signUpForceRedirectUrl:m,mode:g,initialValues:b,withSignUp:x,oauthFlow:v,...E}=s;r=Ps(r,"Sign in");const M=Vs(r)("SignInButton"),k=()=>{const X={forceRedirectUrl:d,fallbackRedirectUrl:h,signUpFallbackRedirectUrl:i,signUpForceRedirectUrl:m,initialValues:b,withSignUp:x,oauthFlow:v};return g==="modal"?a.openSignIn({...X,appearance:o}):a.redirectToSignIn({...X,signInFallbackRedirectUrl:h,signInForceRedirectUrl:d})},_={...E,onClick:async X=>(M&&typeof M=="object"&&"props"in M&&await Gs(M.props.onClick)(X),k())};return D.cloneElement(M,_)},{component:"SignInButton",renderWhileLoading:!0});De(({clerk:a,children:r,...s})=>{const{redirectUrl:o,...i}=s;r=Ps(r,"Sign in with Metamask");const d=Vs(r)("SignInWithMetamaskButton"),h=async()=>{async function b(){await a.authenticateWithMetamask({redirectUrl:o||void 0})}b()},g={...i,onClick:async b=>(await Gs(d.props.onClick)(b),h())};return D.cloneElement(d,g)},{component:"SignInWithMetamask",renderWhileLoading:!0});De(({clerk:a,children:r,...s})=>{const{redirectUrl:o="/",signOutOptions:i,...d}=s;r=Ps(r,"Sign out");const h=Vs(r)("SignOutButton"),m=()=>a.signOut({redirectUrl:o,...i}),b={...d,onClick:async x=>(await Gs(h.props.onClick)(x),m())};return D.cloneElement(h,b)},{component:"SignOutButton",renderWhileLoading:!0});De(({clerk:a,children:r,...s})=>{const{appearance:o,unsafeMetadata:i,fallbackRedirectUrl:d,forceRedirectUrl:h,signInFallbackRedirectUrl:m,signInForceRedirectUrl:g,mode:b,initialValues:x,oauthFlow:v,...E}=s;r=Ps(r,"Sign up");const M=Vs(r)("SignUpButton"),k=()=>{const X={fallbackRedirectUrl:d,forceRedirectUrl:h,signInFallbackRedirectUrl:m,signInForceRedirectUrl:g,initialValues:x,oauthFlow:v};return b==="modal"?a.openSignUp({...X,appearance:o,unsafeMetadata:i}):a.redirectToSignUp({...X,signUpFallbackRedirectUrl:d,signUpForceRedirectUrl:h})},_={...E,onClick:async X=>(M&&typeof M=="object"&&"props"in M&&await Gs(M.props.onClick)(X),k())};return D.cloneElement(M,_)},{component:"SignUpButton",renderWhileLoading:!0});var NS=()=>({fields:{identifier:null,password:null,code:null},raw:null,global:null}),zS=()=>({fields:{firstName:null,lastName:null,emailAddress:null,phoneNumber:null,password:null,username:null,code:null,captcha:null,legalAccepted:null},raw:null,global:null}),AS=class{constructor(a){this.isomorphicClerk=a,this.signInSignalProxy=this.buildSignInProxy(),this.signUpSignalProxy=this.buildSignUpProxy()}signInSignal(){return this.signInSignalProxy}signUpSignal(){return this.signUpSignalProxy}buildSignInProxy(){const a=this.gateProperty.bind(this),r=()=>this.client.signIn.__internal_future;return{errors:NS(),fetchStatus:"idle",signIn:{status:"needs_identifier",availableStrategies:[],isTransferable:!1,get id(){return a(r,"id",void 0)},get supportedFirstFactors(){return a(r,"supportedFirstFactors",[])},get supportedSecondFactors(){return a(r,"supportedSecondFactors",[])},get secondFactorVerification(){return a(r,"secondFactorVerification",{status:null,error:null,expireAt:null,externalVerificationRedirectURL:null,nonce:null,attempts:null,message:null,strategy:null,verifiedAtClient:null,verifiedFromTheSameClient:()=>!1,__internal_toSnapshot:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")},pathRoot:"",reload:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")}})},get identifier(){return a(r,"identifier",null)},get createdSessionId(){return a(r,"createdSessionId",null)},get userData(){return a(r,"userData",{})},get firstFactorVerification(){return a(r,"firstFactorVerification",{status:null,error:null,expireAt:null,externalVerificationRedirectURL:null,nonce:null,attempts:null,message:null,strategy:null,verifiedAtClient:null,verifiedFromTheSameClient:()=>!1,__internal_toSnapshot:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")},pathRoot:"",reload:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")}})},create:this.gateMethod(r,"create"),password:this.gateMethod(r,"password"),sso:this.gateMethod(r,"sso"),finalize:this.gateMethod(r,"finalize"),emailCode:this.wrapMethods(()=>r().emailCode,["sendCode","verifyCode"]),emailLink:this.wrapStruct(()=>r().emailLink,["sendLink","waitForVerification"],["verification"],{verification:null}),resetPasswordEmailCode:this.wrapMethods(()=>r().resetPasswordEmailCode,["sendCode","verifyCode","submitPassword"]),phoneCode:this.wrapMethods(()=>r().phoneCode,["sendCode","verifyCode"]),mfa:this.wrapMethods(()=>r().mfa,["sendPhoneCode","verifyPhoneCode","verifyTOTP","verifyBackupCode"]),ticket:this.gateMethod(r,"ticket"),passkey:this.gateMethod(r,"passkey"),web3:this.gateMethod(r,"web3")}}}buildSignUpProxy(){const a=this.gateProperty.bind(this),r=this.gateMethod.bind(this),s=this.wrapMethods.bind(this),o=()=>this.client.signUp.__internal_future;return{errors:zS(),fetchStatus:"idle",signUp:{get id(){return a(o,"id",void 0)},get requiredFields(){return a(o,"requiredFields",[])},get optionalFields(){return a(o,"optionalFields",[])},get missingFields(){return a(o,"missingFields",[])},get username(){return a(o,"username",null)},get firstName(){return a(o,"firstName",null)},get lastName(){return a(o,"lastName",null)},get emailAddress(){return a(o,"emailAddress",null)},get phoneNumber(){return a(o,"phoneNumber",null)},get web3Wallet(){return a(o,"web3Wallet",null)},get hasPassword(){return a(o,"hasPassword",!1)},get unsafeMetadata(){return a(o,"unsafeMetadata",{})},get createdSessionId(){return a(o,"createdSessionId",null)},get createdUserId(){return a(o,"createdUserId",null)},get abandonAt(){return a(o,"abandonAt",null)},get legalAcceptedAt(){return a(o,"legalAcceptedAt",null)},get locale(){return a(o,"locale",null)},get status(){return a(o,"status","missing_requirements")},get unverifiedFields(){return a(o,"unverifiedFields",[])},get isTransferable(){return a(o,"isTransferable",!1)},create:r(o,"create"),update:r(o,"update"),sso:r(o,"sso"),password:r(o,"password"),ticket:r(o,"ticket"),web3:r(o,"web3"),finalize:r(o,"finalize"),verifications:s(()=>o().verifications,["sendEmailCode","verifyEmailCode","sendPhoneCode","verifyPhoneCode"])}}}__internal_effect(a){throw new Error("__internal_effect called before Clerk is loaded")}__internal_computed(a){throw new Error("__internal_computed called before Clerk is loaded")}get client(){const a=this.isomorphicClerk.client;if(!a)throw new Error("Clerk client not ready");return a}gateProperty(a,r,s){return!Ds()||!this.isomorphicClerk.loaded?s:a()[r]}gateMethod(a,r){return(async(...s)=>{if(!Ds())return Jt.throw(`Attempted to call a method (${r}) that is not supported on the server.`);this.isomorphicClerk.loaded||await new Promise(i=>this.isomorphicClerk.addOnLoaded(i));const o=a();return o[r].apply(o,s)})}wrapMethods(a,r){return Object.fromEntries(r.map(s=>[s,this.gateMethod(a,s)]))}wrapStruct(a,r,s,o){const i={};for(const d of r)i[d]=this.gateMethod(a,d);for(const d of s)Object.defineProperty(i,d,{get:()=>this.gateProperty(a,d,o[d]),enumerable:!0});return i}};typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);var TS={name:"@clerk/clerk-react",version:"5.61.4",environment:"production"},Es,_l,Nl,ia,rn,Cs,sa,Or,ks,r1=class i1{constructor(r){ra(this,Or),this.clerkjs=null,this.preopenOneTap=null,this.preopenUserVerification=null,this.preopenEnableOrganizationsPrompt=null,this.preopenSignIn=null,this.preopenCheckout=null,this.preopenPlanDetails=null,this.preopenSubscriptionDetails=null,this.preopenSignUp=null,this.preopenUserProfile=null,this.preopenOrganizationProfile=null,this.preopenCreateOrganization=null,this.preOpenWaitlist=null,this.premountSignInNodes=new Map,this.premountSignUpNodes=new Map,this.premountUserAvatarNodes=new Map,this.premountUserProfileNodes=new Map,this.premountUserButtonNodes=new Map,this.premountOrganizationProfileNodes=new Map,this.premountCreateOrganizationNodes=new Map,this.premountOrganizationSwitcherNodes=new Map,this.premountOrganizationListNodes=new Map,this.premountMethodCalls=new Map,this.premountWaitlistNodes=new Map,this.premountPricingTableNodes=new Map,this.premountAPIKeysNodes=new Map,this.premountOAuthConsentNodes=new Map,this.premountTaskChooseOrganizationNodes=new Map,this.premountTaskResetPasswordNodes=new Map,this.premountTaskSetupMFANodes=new Map,this.premountAddListenerCalls=new Map,this.loadedListeners=[],ra(this,Es,"loading"),ra(this,_l),ra(this,Nl),ra(this,ia),ra(this,rn,_S()),ra(this,Cs),this.buildSignInUrl=i=>{const d=()=>{var h;return((h=this.clerkjs)==null?void 0:h.buildSignInUrl(i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildSignInUrl",d)},this.buildSignUpUrl=i=>{const d=()=>{var h;return((h=this.clerkjs)==null?void 0:h.buildSignUpUrl(i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildSignUpUrl",d)},this.buildAfterSignInUrl=(...i)=>{const d=()=>{var h;return((h=this.clerkjs)==null?void 0:h.buildAfterSignInUrl(...i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildAfterSignInUrl",d)},this.buildAfterSignUpUrl=(...i)=>{const d=()=>{var h;return((h=this.clerkjs)==null?void 0:h.buildAfterSignUpUrl(...i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildAfterSignUpUrl",d)},this.buildAfterSignOutUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildAfterSignOutUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildAfterSignOutUrl",i)},this.buildNewSubscriptionRedirectUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildNewSubscriptionRedirectUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildNewSubscriptionRedirectUrl",i)},this.buildAfterMultiSessionSingleSignOutUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildAfterMultiSessionSingleSignOutUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildAfterMultiSessionSingleSignOutUrl",i)},this.buildUserProfileUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildUserProfileUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildUserProfileUrl",i)},this.buildCreateOrganizationUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildCreateOrganizationUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildCreateOrganizationUrl",i)},this.buildOrganizationProfileUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildOrganizationProfileUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildOrganizationProfileUrl",i)},this.buildWaitlistUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildWaitlistUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildWaitlistUrl",i)},this.buildTasksUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildTasksUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildTasksUrl",i)},this.buildUrlWithAuth=i=>{const d=()=>{var h;return((h=this.clerkjs)==null?void 0:h.buildUrlWithAuth(i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildUrlWithAuth",d)},this.handleUnauthenticated=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.handleUnauthenticated()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("handleUnauthenticated",i)},this.on=(...i)=>{var d;if((d=this.clerkjs)!=null&&d.on)return this.clerkjs.on(...i);He(this,rn).on(...i)},this.off=(...i)=>{var d;if((d=this.clerkjs)!=null&&d.off)return this.clerkjs.off(...i);He(this,rn).off(...i)},this.addOnLoaded=i=>{this.loadedListeners.push(i),this.loaded&&this.emitLoaded()},this.emitLoaded=()=>{this.loadedListeners.forEach(i=>i()),this.loadedListeners=[]},this.beforeLoad=i=>{if(!i)throw new Error("Failed to hydrate latest Clerk JS")},this.hydrateClerkJS=i=>{var d,h;if(!i)throw new Error("Failed to hydrate latest Clerk JS");return this.clerkjs=i,this.premountMethodCalls.forEach(m=>m()),this.premountAddListenerCalls.forEach((m,g)=>{m.nativeUnsubscribe=i.addListener(g)}),(d=He(this,rn).internal.retrieveListeners("status"))==null||d.forEach(m=>{this.on("status",m,{notify:!0})}),(h=He(this,rn).internal.retrieveListeners("queryClientStatus"))==null||h.forEach(m=>{this.on("queryClientStatus",m,{notify:!0})}),this.preopenSignIn!==null&&i.openSignIn(this.preopenSignIn),this.preopenCheckout!==null&&i.__internal_openCheckout(this.preopenCheckout),this.preopenPlanDetails!==null&&i.__internal_openPlanDetails(this.preopenPlanDetails),this.preopenSubscriptionDetails!==null&&i.__internal_openSubscriptionDetails(this.preopenSubscriptionDetails),this.preopenSignUp!==null&&i.openSignUp(this.preopenSignUp),this.preopenUserProfile!==null&&i.openUserProfile(this.preopenUserProfile),this.preopenUserVerification!==null&&i.__internal_openReverification(this.preopenUserVerification),this.preopenOneTap!==null&&i.openGoogleOneTap(this.preopenOneTap),this.preopenOrganizationProfile!==null&&i.openOrganizationProfile(this.preopenOrganizationProfile),this.preopenCreateOrganization!==null&&i.openCreateOrganization(this.preopenCreateOrganization),this.preOpenWaitlist!==null&&i.openWaitlist(this.preOpenWaitlist),this.preopenEnableOrganizationsPrompt&&i.__internal_openEnableOrganizationsPrompt(this.preopenEnableOrganizationsPrompt),this.premountSignInNodes.forEach((m,g)=>{i.mountSignIn(g,m)}),this.premountSignUpNodes.forEach((m,g)=>{i.mountSignUp(g,m)}),this.premountUserProfileNodes.forEach((m,g)=>{i.mountUserProfile(g,m)}),this.premountUserAvatarNodes.forEach((m,g)=>{i.mountUserAvatar(g,m)}),this.premountUserButtonNodes.forEach((m,g)=>{i.mountUserButton(g,m)}),this.premountOrganizationListNodes.forEach((m,g)=>{i.mountOrganizationList(g,m)}),this.premountWaitlistNodes.forEach((m,g)=>{i.mountWaitlist(g,m)}),this.premountPricingTableNodes.forEach((m,g)=>{i.mountPricingTable(g,m)}),this.premountAPIKeysNodes.forEach((m,g)=>{i.mountAPIKeys(g,m)}),this.premountOAuthConsentNodes.forEach((m,g)=>{i.__internal_mountOAuthConsent(g,m)}),this.premountTaskChooseOrganizationNodes.forEach((m,g)=>{i.mountTaskChooseOrganization(g,m)}),this.premountTaskResetPasswordNodes.forEach((m,g)=>{i.mountTaskResetPassword(g,m)}),this.premountTaskSetupMFANodes.forEach((m,g)=>{i.mountTaskSetupMFA(g,m)}),typeof this.clerkjs.status>"u"&&He(this,rn).emit(xs.Status,"ready"),this.emitLoaded(),this.clerkjs},this.__experimental_checkout=(...i)=>{var d;return(d=this.clerkjs)==null?void 0:d.__experimental_checkout(...i)},this.__unstable__updateProps=async i=>{const d=await qu(this,Or,ks).call(this);if(d&&"__unstable__updateProps"in d)return d.__unstable__updateProps(i)},this.setActive=i=>this.clerkjs?this.clerkjs.setActive(i):Promise.reject(),this.openSignIn=i=>{this.clerkjs&&this.loaded?this.clerkjs.openSignIn(i):this.preopenSignIn=i},this.closeSignIn=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeSignIn():this.preopenSignIn=null},this.__internal_openCheckout=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openCheckout(i):this.preopenCheckout=i},this.__internal_closeCheckout=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeCheckout():this.preopenCheckout=null},this.__internal_openPlanDetails=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openPlanDetails(i):this.preopenPlanDetails=i},this.__internal_closePlanDetails=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closePlanDetails():this.preopenPlanDetails=null},this.__internal_openSubscriptionDetails=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openSubscriptionDetails(i):this.preopenSubscriptionDetails=i??null},this.__internal_closeSubscriptionDetails=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeSubscriptionDetails():this.preopenSubscriptionDetails=null},this.__internal_openReverification=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openReverification(i):this.preopenUserVerification=i},this.__internal_closeReverification=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeReverification():this.preopenUserVerification=null},this.__internal_openEnableOrganizationsPrompt=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openEnableOrganizationsPrompt(i):this.preopenEnableOrganizationsPrompt=i},this.__internal_closeEnableOrganizationsPrompt=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeEnableOrganizationsPrompt():this.preopenEnableOrganizationsPrompt=null},this.openGoogleOneTap=i=>{this.clerkjs&&this.loaded?this.clerkjs.openGoogleOneTap(i):this.preopenOneTap=i},this.closeGoogleOneTap=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeGoogleOneTap():this.preopenOneTap=null},this.openUserProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.openUserProfile(i):this.preopenUserProfile=i},this.closeUserProfile=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeUserProfile():this.preopenUserProfile=null},this.openOrganizationProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.openOrganizationProfile(i):this.preopenOrganizationProfile=i},this.closeOrganizationProfile=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeOrganizationProfile():this.preopenOrganizationProfile=null},this.openCreateOrganization=i=>{this.clerkjs&&this.loaded?this.clerkjs.openCreateOrganization(i):this.preopenCreateOrganization=i},this.closeCreateOrganization=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeCreateOrganization():this.preopenCreateOrganization=null},this.openWaitlist=i=>{this.clerkjs&&this.loaded?this.clerkjs.openWaitlist(i):this.preOpenWaitlist=i},this.closeWaitlist=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeWaitlist():this.preOpenWaitlist=null},this.openSignUp=i=>{this.clerkjs&&this.loaded?this.clerkjs.openSignUp(i):this.preopenSignUp=i},this.closeSignUp=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeSignUp():this.preopenSignUp=null},this.mountSignIn=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountSignIn(i,d):this.premountSignInNodes.set(i,d)},this.unmountSignIn=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountSignIn(i):this.premountSignInNodes.delete(i)},this.mountSignUp=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountSignUp(i,d):this.premountSignUpNodes.set(i,d)},this.unmountSignUp=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountSignUp(i):this.premountSignUpNodes.delete(i)},this.mountUserAvatar=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountUserAvatar(i,d):this.premountUserAvatarNodes.set(i,d)},this.unmountUserAvatar=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountUserAvatar(i):this.premountUserAvatarNodes.delete(i)},this.mountUserProfile=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountUserProfile(i,d):this.premountUserProfileNodes.set(i,d)},this.unmountUserProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountUserProfile(i):this.premountUserProfileNodes.delete(i)},this.mountOrganizationProfile=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountOrganizationProfile(i,d):this.premountOrganizationProfileNodes.set(i,d)},this.unmountOrganizationProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountOrganizationProfile(i):this.premountOrganizationProfileNodes.delete(i)},this.mountCreateOrganization=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountCreateOrganization(i,d):this.premountCreateOrganizationNodes.set(i,d)},this.unmountCreateOrganization=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountCreateOrganization(i):this.premountCreateOrganizationNodes.delete(i)},this.mountOrganizationSwitcher=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountOrganizationSwitcher(i,d):this.premountOrganizationSwitcherNodes.set(i,d)},this.unmountOrganizationSwitcher=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountOrganizationSwitcher(i):this.premountOrganizationSwitcherNodes.delete(i)},this.__experimental_prefetchOrganizationSwitcher=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.__experimental_prefetchOrganizationSwitcher()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("__experimental_prefetchOrganizationSwitcher",i)},this.mountOrganizationList=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountOrganizationList(i,d):this.premountOrganizationListNodes.set(i,d)},this.unmountOrganizationList=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountOrganizationList(i):this.premountOrganizationListNodes.delete(i)},this.mountUserButton=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountUserButton(i,d):this.premountUserButtonNodes.set(i,d)},this.unmountUserButton=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountUserButton(i):this.premountUserButtonNodes.delete(i)},this.mountWaitlist=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountWaitlist(i,d):this.premountWaitlistNodes.set(i,d)},this.unmountWaitlist=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountWaitlist(i):this.premountWaitlistNodes.delete(i)},this.mountPricingTable=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountPricingTable(i,d):this.premountPricingTableNodes.set(i,d)},this.unmountPricingTable=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountPricingTable(i):this.premountPricingTableNodes.delete(i)},this.mountAPIKeys=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountAPIKeys(i,d):this.premountAPIKeysNodes.set(i,d)},this.unmountAPIKeys=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountAPIKeys(i):this.premountAPIKeysNodes.delete(i)},this.__internal_mountOAuthConsent=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_mountOAuthConsent(i,d):this.premountOAuthConsentNodes.set(i,d)},this.__internal_unmountOAuthConsent=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_unmountOAuthConsent(i):this.premountOAuthConsentNodes.delete(i)},this.mountTaskChooseOrganization=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountTaskChooseOrganization(i,d):this.premountTaskChooseOrganizationNodes.set(i,d)},this.unmountTaskChooseOrganization=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountTaskChooseOrganization(i):this.premountTaskChooseOrganizationNodes.delete(i)},this.mountTaskResetPassword=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountTaskResetPassword(i,d):this.premountTaskResetPasswordNodes.set(i,d)},this.unmountTaskResetPassword=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountTaskResetPassword(i):this.premountTaskResetPasswordNodes.delete(i)},this.mountTaskSetupMFA=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountTaskSetupMFA(i,d):this.premountTaskSetupMFANodes.set(i,d)},this.unmountTaskSetupMFA=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountTaskSetupMFA(i):this.premountTaskSetupMFANodes.delete(i)},this.addListener=i=>{if(this.clerkjs)return this.clerkjs.addListener(i);{const d=()=>{var h;const m=this.premountAddListenerCalls.get(i);m&&((h=m.nativeUnsubscribe)==null||h.call(m),this.premountAddListenerCalls.delete(i))};return this.premountAddListenerCalls.set(i,{unsubscribe:d,nativeUnsubscribe:void 0}),d}},this.navigate=i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.navigate(i)};this.clerkjs&&this.loaded?d():this.premountMethodCalls.set("navigate",d)},this.redirectWithAuth=async(...i)=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.redirectWithAuth(...i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectWithAuth",d)},this.redirectToSignIn=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.redirectToSignIn(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectToSignIn",d)},this.redirectToSignUp=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.redirectToSignUp(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectToSignUp",d)},this.redirectToUserProfile=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToUserProfile()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToUserProfile",i)},this.redirectToAfterSignUp=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToAfterSignUp()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToAfterSignUp",i)},this.redirectToAfterSignIn=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToAfterSignIn()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("redirectToAfterSignIn",i)},this.redirectToAfterSignOut=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToAfterSignOut()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("redirectToAfterSignOut",i)},this.redirectToOrganizationProfile=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToOrganizationProfile()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToOrganizationProfile",i)},this.redirectToCreateOrganization=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToCreateOrganization()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToCreateOrganization",i)},this.redirectToWaitlist=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToWaitlist()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToWaitlist",i)},this.redirectToTasks=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.redirectToTasks(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectToTasks",d)},this.handleRedirectCallback=async i=>{var d;const h=()=>{var m;return(m=this.clerkjs)==null?void 0:m.handleRedirectCallback(i)};this.clerkjs&&this.loaded?(d=h())==null||d.catch(()=>{}):this.premountMethodCalls.set("handleRedirectCallback",h)},this.handleGoogleOneTapCallback=async(i,d)=>{var h;const m=()=>{var g;return(g=this.clerkjs)==null?void 0:g.handleGoogleOneTapCallback(i,d)};this.clerkjs&&this.loaded?(h=m())==null||h.catch(()=>{}):this.premountMethodCalls.set("handleGoogleOneTapCallback",m)},this.handleEmailLinkVerification=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.handleEmailLinkVerification(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("handleEmailLinkVerification",d)},this.authenticateWithMetamask=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithMetamask(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithMetamask",d)},this.authenticateWithCoinbaseWallet=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithCoinbaseWallet(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithCoinbaseWallet",d)},this.authenticateWithBase=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithBase(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithBase",d)},this.authenticateWithOKXWallet=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithOKXWallet(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithOKXWallet",d)},this.authenticateWithSolana=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithSolana(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithSolana",d)},this.authenticateWithWeb3=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithWeb3(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithWeb3",d)},this.authenticateWithGoogleOneTap=async i=>(await qu(this,Or,ks).call(this)).authenticateWithGoogleOneTap(i),this.__internal_loadStripeJs=async()=>(await qu(this,Or,ks).call(this)).__internal_loadStripeJs(),this.createOrganization=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.createOrganization(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("createOrganization",d)},this.getOrganization=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.getOrganization(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("getOrganization",d)},this.joinWaitlist=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.joinWaitlist(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("joinWaitlist",d)},this.signOut=async(...i)=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.signOut(...i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("signOut",d)},this.__internal_attemptToEnableEnvironmentSetting=i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.__internal_attemptToEnableEnvironmentSetting(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("__internal_attemptToEnableEnvironmentSetting",d)};const{Clerk:s=null,publishableKey:o}=r||{};Ta(this,ia,o),Ta(this,Nl,r?.proxyUrl),Ta(this,_l,r?.domain),this.options=r,this.Clerk=s,this.mode=Ds()?"browser":"server",Ta(this,Cs,new AS(this)),this.options.sdkMetadata||(this.options.sdkMetadata=TS),He(this,rn).emit(xs.Status,"loading"),He(this,rn).prioritizedOn(xs.Status,i=>Ta(this,Es,i)),He(this,ia)&&this.loadClerkJS()}get publishableKey(){return He(this,ia)}get loaded(){var r;return((r=this.clerkjs)==null?void 0:r.loaded)||!1}get status(){var r;return this.clerkjs?((r=this.clerkjs)==null?void 0:r.status)||(this.clerkjs.loaded?"ready":"loading"):He(this,Es)}static getOrCreateInstance(r){return(!Ds()||!He(this,sa)||r.Clerk&&He(this,sa).Clerk!==r.Clerk||He(this,sa).publishableKey!==r.publishableKey)&&Ta(this,sa,new i1(r)),He(this,sa)}static clearInstance(){Ta(this,sa,null)}get domain(){return typeof window<"u"&&window.location?Uu(He(this,_l),new URL(window.location.href),""):typeof He(this,_l)=="function"?Jt.throw(Mu):He(this,_l)||""}get proxyUrl(){return typeof window<"u"&&window.location?Uu(He(this,Nl),new URL(window.location.href),""):typeof He(this,Nl)=="function"?Jt.throw(Mu):He(this,Nl)||""}__internal_getOption(r){var s,o;return(s=this.clerkjs)!=null&&s.__internal_getOption?(o=this.clerkjs)==null?void 0:o.__internal_getOption(r):this.options[r]}get sdkMetadata(){var r;return((r=this.clerkjs)==null?void 0:r.sdkMetadata)||this.options.sdkMetadata||void 0}get instanceType(){var r;return(r=this.clerkjs)==null?void 0:r.instanceType}get frontendApi(){var r;return((r=this.clerkjs)==null?void 0:r.frontendApi)||""}get isStandardBrowser(){var r;return((r=this.clerkjs)==null?void 0:r.isStandardBrowser)||this.options.standardBrowser||!1}get __internal_queryClient(){var r;return(r=this.clerkjs)==null?void 0:r.__internal_queryClient}get isSatellite(){return typeof window<"u"&&window.location?Uu(this.options.isSatellite,new URL(window.location.href),!1):typeof this.options.isSatellite=="function"?Jt.throw(Mu):!1}async loadClerkJS(){var r;if(!(this.mode!=="browser"||this.loaded)){typeof window<"u"&&(window.__clerk_publishable_key=He(this,ia),window.__clerk_proxy_url=this.proxyUrl,window.__clerk_domain=this.domain);try{if(this.Clerk){let s;V4(this.Clerk)?(s=new this.Clerk(He(this,ia),{proxyUrl:this.proxyUrl,domain:this.domain}),this.beforeLoad(s),await s.load(this.options)):(s=this.Clerk,s.loaded||(this.beforeLoad(s),await s.load(this.options))),global.Clerk=s}else if(!__BUILD_DISABLE_RHC__){if(global.Clerk||await xS({...this.options,publishableKey:He(this,ia),proxyUrl:this.proxyUrl,domain:this.domain,nonce:this.options.nonce}),!global.Clerk)throw new Error("Failed to download latest ClerkJS. Contact support@clerk.com.");this.beforeLoad(global.Clerk),await global.Clerk.load(this.options)}return(r=global.Clerk)!=null&&r.loaded?this.hydrateClerkJS(global.Clerk):void 0}catch(s){const o=s;He(this,rn).emit(xs.Status,"error"),console.error(o.stack||o.message||o);return}}}get version(){var r;return(r=this.clerkjs)==null?void 0:r.version}get client(){if(this.clerkjs)return this.clerkjs.client}get session(){if(this.clerkjs)return this.clerkjs.session}get user(){if(this.clerkjs)return this.clerkjs.user}get organization(){if(this.clerkjs)return this.clerkjs.organization}get telemetry(){if(this.clerkjs)return this.clerkjs.telemetry}get __unstable__environment(){if(this.clerkjs)return this.clerkjs.__unstable__environment}get isSignedIn(){return this.clerkjs?this.clerkjs.isSignedIn:!1}get billing(){var r;return(r=this.clerkjs)==null?void 0:r.billing}get __internal_state(){return this.loaded&&this.clerkjs?this.clerkjs.__internal_state:He(this,Cs)}get apiKeys(){var r;return(r=this.clerkjs)==null?void 0:r.apiKeys}__unstable__setEnvironment(...r){if(this.clerkjs&&"__unstable__setEnvironment"in this.clerkjs)this.clerkjs.__unstable__setEnvironment(r);else return}};Es=new WeakMap;_l=new WeakMap;Nl=new WeakMap;ia=new WeakMap;rn=new WeakMap;Cs=new WeakMap;sa=new WeakMap;Or=new WeakSet;ks=function(){return new Promise(a=>{this.addOnLoaded(()=>a(this.clerkjs))})};ra(r1,sa);var O0=r1;function RS(a){const{isomorphicClerkOptions:r,initialState:s,children:o}=a,{isomorphicClerk:i,clerkStatus:d}=OS(r),[h,m]=D.useState({client:i.client,session:i.session,user:i.user,organization:i.organization});D.useEffect(()=>i.addListener(me=>m({...me})),[]);const g=jS(i.loaded,h,s),b=D.useMemo(()=>({value:i}),[d]),x=D.useMemo(()=>({value:h.client}),[h.client]),{sessionId:v,sessionStatus:E,sessionClaims:M,session:k,userId:N,user:_,orgId:X,actor:U,organization:q,orgRole:F,orgSlug:H,orgPermissions:Z,factorVerificationAge:V}=g,le=D.useMemo(()=>({value:{sessionId:v,sessionStatus:E,sessionClaims:M,userId:N,actor:U,orgId:X,orgRole:F,orgSlug:H,orgPermissions:Z,factorVerificationAge:V}}),[v,E,N,U,X,F,H,V,M?.__raw]),ae=D.useMemo(()=>({value:k}),[v,k]),je=D.useMemo(()=>({value:_}),[N,_]),xe=D.useMemo(()=>({value:{organization:q}}),[X,q]);return D.createElement(y4.Provider,{value:b},D.createElement(l4.Provider,{value:x},D.createElement(r4.Provider,{value:ae},D.createElement(c4,{...xe.value},D.createElement(g4.Provider,{value:le},D.createElement(n4.Provider,{value:je},D.createElement(s4,{value:void 0},o)))))))}var OS=a=>{const r=D.useRef(O0.getOrCreateInstance(a)),[s,o]=D.useState(r.current.status);return D.useEffect(()=>{r.current.__unstable__updateProps({appearance:a.appearance})},[a.appearance]),D.useEffect(()=>{r.current.__unstable__updateProps({options:a})},[a.localization]),D.useEffect(()=>(r.current.on("status",o),()=>{r.current&&r.current.off("status",o),O0.clearInstance()}),[]),{isomorphicClerk:r.current,clerkStatus:s}};function MS(a){const{initialState:r,children:s,__internal_bypassMissingPublishableKey:o,...i}=a,{publishableKey:d="",Clerk:h}=i;return!h&&!o&&(d?d&&!td(d)&&Jt.throwInvalidPublishableKeyError({key:d}):Jt.throwMissingPublishableKeyError()),D.createElement(RS,{initialState:r,isomorphicClerkOptions:i},s)}var s1=G4(MS,"ClerkProvider",x4);s1.displayName="ClerkProvider";m4({packageName:"@clerk/clerk-react"});bS("@clerk/clerk-react");function o1(a,r){return function(){return a.apply(r,arguments)}}const{toString:US}=Object.prototype,{getPrototypeOf:Od}=Object,{iterator:Zs,toStringTag:c1}=Symbol,Is=(a=>r=>{const s=US.call(r);return a[s]||(a[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),en=a=>(a=a.toLowerCase(),r=>Is(r)===a),$s=a=>r=>typeof r===a,{isArray:Ol}=Array,Al=$s("undefined");function Fr(a){return a!==null&&!Al(a)&&a.constructor!==null&&!Al(a.constructor)&&wt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const u1=en("ArrayBuffer");function DS(a){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(a):r=a&&a.buffer&&u1(a.buffer),r}const LS=$s("string"),wt=$s("function"),d1=$s("number"),Kr=a=>a!==null&&typeof a=="object",BS=a=>a===!0||a===!1,_s=a=>{if(Is(a)!=="object")return!1;const r=Od(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(c1 in a)&&!(Zs in a)},HS=a=>{if(!Kr(a)||Fr(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},qS=en("Date"),YS=en("File"),VS=a=>!!(a&&typeof a.uri<"u"),PS=a=>a&&typeof a.getParts<"u",GS=en("Blob"),XS=en("FileList"),FS=a=>Kr(a)&&wt(a.pipe);function KS(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const M0=KS(),U0=typeof M0.FormData<"u"?M0.FormData:void 0,QS=a=>{let r;return a&&(U0&&a instanceof U0||wt(a.append)&&((r=Is(a))==="formdata"||r==="object"&&wt(a.toString)&&a.toString()==="[object FormData]"))},ZS=en("URLSearchParams"),[IS,$S,JS,WS]=["ReadableStream","Request","Response","Headers"].map(en),ew=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qr(a,r,{allOwnKeys:s=!1}={}){if(a===null||typeof a>"u")return;let o,i;if(typeof a!="object"&&(a=[a]),Ol(a))for(o=0,i=a.length;o<i;o++)r.call(null,a[o],o,a);else{if(Fr(a))return;const d=s?Object.getOwnPropertyNames(a):Object.keys(a),h=d.length;let m;for(o=0;o<h;o++)m=d[o],r.call(null,a[m],m,a)}}function f1(a,r){if(Fr(a))return null;r=r.toLowerCase();const s=Object.keys(a);let o=s.length,i;for(;o-- >0;)if(i=s[o],r===i.toLowerCase())return i;return null}const Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,h1=a=>!Al(a)&&a!==Ma;function ud(){const{caseless:a,skipUndefined:r}=h1(this)&&this||{},s={},o=(i,d)=>{if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=a&&f1(s,d)||d;_s(s[h])&&_s(i)?s[h]=ud(s[h],i):_s(i)?s[h]=ud({},i):Ol(i)?s[h]=i.slice():(!r||!Al(i))&&(s[h]=i)};for(let i=0,d=arguments.length;i<d;i++)arguments[i]&&Qr(arguments[i],o);return s}const tw=(a,r,s,{allOwnKeys:o}={})=>(Qr(r,(i,d)=>{s&&wt(i)?Object.defineProperty(a,d,{value:o1(i,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(a,d,{value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:o}),a),nw=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),aw=(a,r,s,o)=>{a.prototype=Object.create(r.prototype,o),Object.defineProperty(a.prototype,"constructor",{value:a,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(a,"super",{value:r.prototype}),s&&Object.assign(a.prototype,s)},lw=(a,r,s,o)=>{let i,d,h;const m={};if(r=r||{},a==null)return r;do{for(i=Object.getOwnPropertyNames(a),d=i.length;d-- >0;)h=i[d],(!o||o(h,a,r))&&!m[h]&&(r[h]=a[h],m[h]=!0);a=s!==!1&&Od(a)}while(a&&(!s||s(a,r))&&a!==Object.prototype);return r},rw=(a,r,s)=>{a=String(a),(s===void 0||s>a.length)&&(s=a.length),s-=r.length;const o=a.indexOf(r,s);return o!==-1&&o===s},iw=a=>{if(!a)return null;if(Ol(a))return a;let r=a.length;if(!d1(r))return null;const s=new Array(r);for(;r-- >0;)s[r]=a[r];return s},sw=(a=>r=>a&&r instanceof a)(typeof Uint8Array<"u"&&Od(Uint8Array)),ow=(a,r)=>{const o=(a&&a[Zs]).call(a);let i;for(;(i=o.next())&&!i.done;){const d=i.value;r.call(a,d[0],d[1])}},cw=(a,r)=>{let s;const o=[];for(;(s=a.exec(r))!==null;)o.push(s);return o},uw=en("HTMLFormElement"),dw=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,o,i){return o.toUpperCase()+i}),D0=(({hasOwnProperty:a})=>(r,s)=>a.call(r,s))(Object.prototype),fw=en("RegExp"),p1=(a,r)=>{const s=Object.getOwnPropertyDescriptors(a),o={};Qr(s,(i,d)=>{let h;(h=r(i,d,a))!==!1&&(o[d]=h||i)}),Object.defineProperties(a,o)},hw=a=>{p1(a,(r,s)=>{if(wt(a)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const o=a[s];if(wt(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},pw=(a,r)=>{const s={},o=i=>{i.forEach(d=>{s[d]=!0})};return Ol(a)?o(a):o(String(a).split(r)),s},mw=()=>{},gw=(a,r)=>a!=null&&Number.isFinite(a=+a)?a:r;function bw(a){return!!(a&&wt(a.append)&&a[c1]==="FormData"&&a[Zs])}const yw=a=>{const r=new Array(10),s=(o,i)=>{if(Kr(o)){if(r.indexOf(o)>=0)return;if(Fr(o))return o;if(!("toJSON"in o)){r[i]=o;const d=Ol(o)?[]:{};return Qr(o,(h,m)=>{const g=s(h,i+1);!Al(g)&&(d[m]=g)}),r[i]=void 0,d}}return o};return s(a,0)},xw=en("AsyncFunction"),vw=a=>a&&(Kr(a)||wt(a))&&wt(a.then)&&wt(a.catch),m1=((a,r)=>a?setImmediate:r?((s,o)=>(Ma.addEventListener("message",({source:i,data:d})=>{i===Ma&&d===s&&o.length&&o.shift()()},!1),i=>{o.push(i),Ma.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",wt(Ma.postMessage)),Sw=typeof queueMicrotask<"u"?queueMicrotask.bind(Ma):typeof process<"u"&&process.nextTick||m1,ww=a=>a!=null&&wt(a[Zs]),L={isArray:Ol,isArrayBuffer:u1,isBuffer:Fr,isFormData:QS,isArrayBufferView:DS,isString:LS,isNumber:d1,isBoolean:BS,isObject:Kr,isPlainObject:_s,isEmptyObject:HS,isReadableStream:IS,isRequest:$S,isResponse:JS,isHeaders:WS,isUndefined:Al,isDate:qS,isFile:YS,isReactNativeBlob:VS,isReactNative:PS,isBlob:GS,isRegExp:fw,isFunction:wt,isStream:FS,isURLSearchParams:ZS,isTypedArray:sw,isFileList:XS,forEach:Qr,merge:ud,extend:tw,trim:ew,stripBOM:nw,inherits:aw,toFlatObject:lw,kindOf:Is,kindOfTest:en,endsWith:rw,toArray:iw,forEachEntry:ow,matchAll:cw,isHTMLForm:uw,hasOwnProperty:D0,hasOwnProp:D0,reduceDescriptors:p1,freezeMethods:hw,toObjectSet:pw,toCamelCase:dw,noop:mw,toFiniteNumber:gw,findKey:f1,global:Ma,isContextDefined:h1,isSpecCompliantForm:bw,toJSONObject:yw,isAsyncFn:xw,isThenable:vw,setImmediate:m1,asap:Sw,isIterable:ww};let ue=class g1 extends Error{static from(r,s,o,i,d,h){const m=new g1(r.message,s||r.code,o,i,d);return m.cause=r,m.name=r.name,r.status!=null&&m.status==null&&(m.status=r.status),h&&Object.assign(m,h),m}constructor(r,s,o,i,d){super(r),Object.defineProperty(this,"message",{value:r,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),o&&(this.config=o),i&&(this.request=i),d&&(this.response=d,this.status=d.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}};ue.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ue.ERR_BAD_OPTION="ERR_BAD_OPTION";ue.ECONNABORTED="ECONNABORTED";ue.ETIMEDOUT="ETIMEDOUT";ue.ERR_NETWORK="ERR_NETWORK";ue.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ue.ERR_DEPRECATED="ERR_DEPRECATED";ue.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ue.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ue.ERR_CANCELED="ERR_CANCELED";ue.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ue.ERR_INVALID_URL="ERR_INVALID_URL";const jw=null;function dd(a){return L.isPlainObject(a)||L.isArray(a)}function b1(a){return L.endsWith(a,"[]")?a.slice(0,-2):a}function Yu(a,r,s){return a?a.concat(r).map(function(i,d){return i=b1(i),!s&&d?"["+i+"]":i}).join(s?".":""):r}function Ew(a){return L.isArray(a)&&!a.some(dd)}const Cw=L.toFlatObject(L,{},null,function(r){return/^is[A-Z]/.test(r)});function Js(a,r,s){if(!L.isObject(a))throw new TypeError("target must be an object");r=r||new FormData,s=L.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,_){return!L.isUndefined(_[N])});const o=s.metaTokens,i=s.visitor||x,d=s.dots,h=s.indexes,g=(s.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(r);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function b(k){if(k===null)return"";if(L.isDate(k))return k.toISOString();if(L.isBoolean(k))return k.toString();if(!g&&L.isBlob(k))throw new ue("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(k)||L.isTypedArray(k)?g&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function x(k,N,_){let X=k;if(L.isReactNative(r)&&L.isReactNativeBlob(k))return r.append(Yu(_,N,d),b(k)),!1;if(k&&!_&&typeof k=="object"){if(L.endsWith(N,"{}"))N=o?N:N.slice(0,-2),k=JSON.stringify(k);else if(L.isArray(k)&&Ew(k)||(L.isFileList(k)||L.endsWith(N,"[]"))&&(X=L.toArray(k)))return N=b1(N),X.forEach(function(q,F){!(L.isUndefined(q)||q===null)&&r.append(h===!0?Yu([N],F,d):h===null?N:N+"[]",b(q))}),!1}return dd(k)?!0:(r.append(Yu(_,N,d),b(k)),!1)}const v=[],E=Object.assign(Cw,{defaultVisitor:x,convertValue:b,isVisitable:dd});function M(k,N){if(!L.isUndefined(k)){if(v.indexOf(k)!==-1)throw Error("Circular reference detected in "+N.join("."));v.push(k),L.forEach(k,function(X,U){(!(L.isUndefined(X)||X===null)&&i.call(r,X,L.isString(U)?U.trim():U,N,E))===!0&&M(X,N?N.concat(U):[U])}),v.pop()}}if(!L.isObject(a))throw new TypeError("data must be an object");return M(a),r}function L0(a){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function Md(a,r){this._pairs=[],a&&Js(a,this,r)}const y1=Md.prototype;y1.append=function(r,s){this._pairs.push([r,s])};y1.toString=function(r){const s=r?function(o){return r.call(this,o,L0)}:L0;return this._pairs.map(function(i){return s(i[0])+"="+s(i[1])},"").join("&")};function kw(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function x1(a,r,s){if(!r)return a;const o=s&&s.encode||kw,i=L.isFunction(s)?{serialize:s}:s,d=i&&i.serialize;let h;if(d?h=d(r,i):h=L.isURLSearchParams(r)?r.toString():new Md(r,i).toString(o),h){const m=a.indexOf("#");m!==-1&&(a=a.slice(0,m)),a+=(a.indexOf("?")===-1?"?":"&")+h}return a}class B0{constructor(){this.handlers=[]}use(r,s,o){return this.handlers.push({fulfilled:r,rejected:s,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){L.forEach(this.handlers,function(o){o!==null&&r(o)})}}const Ud={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},_w=typeof URLSearchParams<"u"?URLSearchParams:Md,Nw=typeof FormData<"u"?FormData:null,zw=typeof Blob<"u"?Blob:null,Aw={isBrowser:!0,classes:{URLSearchParams:_w,FormData:Nw,Blob:zw},protocols:["http","https","file","blob","url","data"]},Dd=typeof window<"u"&&typeof document<"u",fd=typeof navigator=="object"&&navigator||void 0,Tw=Dd&&(!fd||["ReactNative","NativeScript","NS"].indexOf(fd.product)<0),Rw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ow=Dd&&window.location.href||"http://localhost",Mw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Dd,hasStandardBrowserEnv:Tw,hasStandardBrowserWebWorkerEnv:Rw,navigator:fd,origin:Ow},Symbol.toStringTag,{value:"Module"})),ct={...Mw,...Aw};function Uw(a,r){return Js(a,new ct.classes.URLSearchParams,{visitor:function(s,o,i,d){return ct.isNode&&L.isBuffer(s)?(this.append(o,s.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...r})}function Dw(a){return L.matchAll(/\w+|\[(\w*)]/g,a).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Lw(a){const r={},s=Object.keys(a);let o;const i=s.length;let d;for(o=0;o<i;o++)d=s[o],r[d]=a[d];return r}function v1(a){function r(s,o,i,d){let h=s[d++];if(h==="__proto__")return!0;const m=Number.isFinite(+h),g=d>=s.length;return h=!h&&L.isArray(i)?i.length:h,g?(L.hasOwnProp(i,h)?i[h]=[i[h],o]:i[h]=o,!m):((!i[h]||!L.isObject(i[h]))&&(i[h]=[]),r(s,o,i[h],d)&&L.isArray(i[h])&&(i[h]=Lw(i[h])),!m)}if(L.isFormData(a)&&L.isFunction(a.entries)){const s={};return L.forEachEntry(a,(o,i)=>{r(Dw(o),i,s,0)}),s}return null}function Bw(a,r,s){if(L.isString(a))try{return(r||JSON.parse)(a),L.trim(a)}catch(o){if(o.name!=="SyntaxError")throw o}return(s||JSON.stringify)(a)}const Zr={transitional:Ud,adapter:["xhr","http","fetch"],transformRequest:[function(r,s){const o=s.getContentType()||"",i=o.indexOf("application/json")>-1,d=L.isObject(r);if(d&&L.isHTMLForm(r)&&(r=new FormData(r)),L.isFormData(r))return i?JSON.stringify(v1(r)):r;if(L.isArrayBuffer(r)||L.isBuffer(r)||L.isStream(r)||L.isFile(r)||L.isBlob(r)||L.isReadableStream(r))return r;if(L.isArrayBufferView(r))return r.buffer;if(L.isURLSearchParams(r))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let m;if(d){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Uw(r,this.formSerializer).toString();if((m=L.isFileList(r))||o.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return Js(m?{"files[]":r}:r,g&&new g,this.formSerializer)}}return d||i?(s.setContentType("application/json",!1),Bw(r)):r}],transformResponse:[function(r){const s=this.transitional||Zr.transitional,o=s&&s.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(r)||L.isReadableStream(r))return r;if(r&&L.isString(r)&&(o&&!this.responseType||i)){const h=!(s&&s.silentJSONParsing)&&i;try{return JSON.parse(r,this.parseReviver)}catch(m){if(h)throw m.name==="SyntaxError"?ue.from(m,ue.ERR_BAD_RESPONSE,this,null,this.response):m}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],a=>{Zr.headers[a]={}});const Hw=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qw=a=>{const r={};let s,o,i;return a&&a.split(`
`).forEach(function(h){i=h.indexOf(":"),s=h.substring(0,i).trim().toLowerCase(),o=h.substring(i+1).trim(),!(!s||r[s]&&Hw[s])&&(s==="set-cookie"?r[s]?r[s].push(o):r[s]=[o]:r[s]=r[s]?r[s]+", "+o:o)}),r},H0=Symbol("internals"),Yw=a=>!/[\r\n]/.test(a);function S1(a,r){if(!(a===!1||a==null)){if(L.isArray(a)){a.forEach(s=>S1(s,r));return}if(!Yw(String(a)))throw new Error(`Invalid character in header content ["${r}"]`)}}function Ar(a){return a&&String(a).trim().toLowerCase()}function Vw(a){let r=a.length;for(;r>0;){const s=a.charCodeAt(r-1);if(s!==10&&s!==13)break;r-=1}return r===a.length?a:a.slice(0,r)}function Ns(a){return a===!1||a==null?a:L.isArray(a)?a.map(Ns):Vw(String(a))}function Pw(a){const r=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=s.exec(a);)r[o[1]]=o[2];return r}const Gw=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Vu(a,r,s,o,i){if(L.isFunction(o))return o.call(this,r,s);if(i&&(r=s),!!L.isString(r)){if(L.isString(o))return r.indexOf(o)!==-1;if(L.isRegExp(o))return o.test(r)}}function Xw(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,s,o)=>s.toUpperCase()+o)}function Fw(a,r){const s=L.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(a,o+s,{value:function(i,d,h){return this[o].call(this,r,i,d,h)},configurable:!0})})}let jt=class{constructor(r){r&&this.set(r)}set(r,s,o){const i=this;function d(m,g,b){const x=Ar(g);if(!x)throw new Error("header name must be a non-empty string");const v=L.findKey(i,x);(!v||i[v]===void 0||b===!0||b===void 0&&i[v]!==!1)&&(S1(m,g),i[v||g]=Ns(m))}const h=(m,g)=>L.forEach(m,(b,x)=>d(b,x,g));if(L.isPlainObject(r)||r instanceof this.constructor)h(r,s);else if(L.isString(r)&&(r=r.trim())&&!Gw(r))h(qw(r),s);else if(L.isObject(r)&&L.isIterable(r)){let m={},g,b;for(const x of r){if(!L.isArray(x))throw TypeError("Object iterator must return a key-value pair");m[b=x[0]]=(g=m[b])?L.isArray(g)?[...g,x[1]]:[g,x[1]]:x[1]}h(m,s)}else r!=null&&d(s,r,o);return this}get(r,s){if(r=Ar(r),r){const o=L.findKey(this,r);if(o){const i=this[o];if(!s)return i;if(s===!0)return Pw(i);if(L.isFunction(s))return s.call(this,i,o);if(L.isRegExp(s))return s.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,s){if(r=Ar(r),r){const o=L.findKey(this,r);return!!(o&&this[o]!==void 0&&(!s||Vu(this,this[o],o,s)))}return!1}delete(r,s){const o=this;let i=!1;function d(h){if(h=Ar(h),h){const m=L.findKey(o,h);m&&(!s||Vu(o,o[m],m,s))&&(delete o[m],i=!0)}}return L.isArray(r)?r.forEach(d):d(r),i}clear(r){const s=Object.keys(this);let o=s.length,i=!1;for(;o--;){const d=s[o];(!r||Vu(this,this[d],d,r,!0))&&(delete this[d],i=!0)}return i}normalize(r){const s=this,o={};return L.forEach(this,(i,d)=>{const h=L.findKey(o,d);if(h){s[h]=Ns(i),delete s[d];return}const m=r?Xw(d):String(d).trim();m!==d&&delete s[d],s[m]=Ns(i),o[m]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const s=Object.create(null);return L.forEach(this,(o,i)=>{o!=null&&o!==!1&&(s[i]=r&&L.isArray(o)?o.join(", "):o)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,s])=>r+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...s){const o=new this(r);return s.forEach(i=>o.set(i)),o}static accessor(r){const o=(this[H0]=this[H0]={accessors:{}}).accessors,i=this.prototype;function d(h){const m=Ar(h);o[m]||(Fw(i,h),o[m]=!0)}return L.isArray(r)?r.forEach(d):d(r),this}};jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(jt.prototype,({value:a},r)=>{let s=r[0].toUpperCase()+r.slice(1);return{get:()=>a,set(o){this[s]=o}}});L.freezeMethods(jt);function Pu(a,r){const s=this||Zr,o=r||s,i=jt.from(o.headers);let d=o.data;return L.forEach(a,function(m){d=m.call(s,d,i.normalize(),r?r.status:void 0)}),i.normalize(),d}function w1(a){return!!(a&&a.__CANCEL__)}let Ir=class extends ue{constructor(r,s,o){super(r??"canceled",ue.ERR_CANCELED,s,o),this.name="CanceledError",this.__CANCEL__=!0}};function j1(a,r,s){const o=s.config.validateStatus;!s.status||!o||o(s.status)?a(s):r(new ue("Request failed with status code "+s.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function Kw(a){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return r&&r[1]||""}function Qw(a,r){a=a||10;const s=new Array(a),o=new Array(a);let i=0,d=0,h;return r=r!==void 0?r:1e3,function(g){const b=Date.now(),x=o[d];h||(h=b),s[i]=g,o[i]=b;let v=d,E=0;for(;v!==i;)E+=s[v++],v=v%a;if(i=(i+1)%a,i===d&&(d=(d+1)%a),b-h<r)return;const M=x&&b-x;return M?Math.round(E*1e3/M):void 0}}function Zw(a,r){let s=0,o=1e3/r,i,d;const h=(b,x=Date.now())=>{s=x,i=null,d&&(clearTimeout(d),d=null),a(...b)};return[(...b)=>{const x=Date.now(),v=x-s;v>=o?h(b,x):(i=b,d||(d=setTimeout(()=>{d=null,h(i)},o-v)))},()=>i&&h(i)]}const Ls=(a,r,s=3)=>{let o=0;const i=Qw(50,250);return Zw(d=>{const h=d.loaded,m=d.lengthComputable?d.total:void 0,g=h-o,b=i(g),x=h<=m;o=h;const v={loaded:h,total:m,progress:m?h/m:void 0,bytes:g,rate:b||void 0,estimated:b&&m&&x?(m-h)/b:void 0,event:d,lengthComputable:m!=null,[r?"download":"upload"]:!0};a(v)},s)},q0=(a,r)=>{const s=a!=null;return[o=>r[0]({lengthComputable:s,total:a,loaded:o}),r[1]]},Y0=a=>(...r)=>L.asap(()=>a(...r)),Iw=ct.hasStandardBrowserEnv?((a,r)=>s=>(s=new URL(s,ct.origin),a.protocol===s.protocol&&a.host===s.host&&(r||a.port===s.port)))(new URL(ct.origin),ct.navigator&&/(msie|trident)/i.test(ct.navigator.userAgent)):()=>!0,$w=ct.hasStandardBrowserEnv?{write(a,r,s,o,i,d,h){if(typeof document>"u")return;const m=[`${a}=${encodeURIComponent(r)}`];L.isNumber(s)&&m.push(`expires=${new Date(s).toUTCString()}`),L.isString(o)&&m.push(`path=${o}`),L.isString(i)&&m.push(`domain=${i}`),d===!0&&m.push("secure"),L.isString(h)&&m.push(`SameSite=${h}`),document.cookie=m.join("; ")},read(a){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+a+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Jw(a){return typeof a!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function Ww(a,r){return r?a.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):a}function E1(a,r,s){let o=!Jw(r);return a&&(o||s==!1)?Ww(a,r):r}const V0=a=>a instanceof jt?{...a}:a;function Ba(a,r){r=r||{};const s={};function o(b,x,v,E){return L.isPlainObject(b)&&L.isPlainObject(x)?L.merge.call({caseless:E},b,x):L.isPlainObject(x)?L.merge({},x):L.isArray(x)?x.slice():x}function i(b,x,v,E){if(L.isUndefined(x)){if(!L.isUndefined(b))return o(void 0,b,v,E)}else return o(b,x,v,E)}function d(b,x){if(!L.isUndefined(x))return o(void 0,x)}function h(b,x){if(L.isUndefined(x)){if(!L.isUndefined(b))return o(void 0,b)}else return o(void 0,x)}function m(b,x,v){if(v in r)return o(b,x);if(v in a)return o(void 0,b)}const g={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:m,headers:(b,x,v)=>i(V0(b),V0(x),v,!0)};return L.forEach(Object.keys({...a,...r}),function(x){if(x==="__proto__"||x==="constructor"||x==="prototype")return;const v=L.hasOwnProp(g,x)?g[x]:i,E=v(a[x],r[x],x);L.isUndefined(E)&&v!==m||(s[x]=E)}),s}const C1=a=>{const r=Ba({},a);let{data:s,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:d,headers:h,auth:m}=r;if(r.headers=h=jt.from(h),r.url=x1(E1(r.baseURL,r.url,r.allowAbsoluteUrls),a.params,a.paramsSerializer),m&&h.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):""))),L.isFormData(s)){if(ct.hasStandardBrowserEnv||ct.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(L.isFunction(s.getHeaders)){const g=s.getHeaders(),b=["content-type","content-length"];Object.entries(g).forEach(([x,v])=>{b.includes(x.toLowerCase())&&h.set(x,v)})}}if(ct.hasStandardBrowserEnv&&(o&&L.isFunction(o)&&(o=o(r)),o||o!==!1&&Iw(r.url))){const g=i&&d&&$w.read(d);g&&h.set(i,g)}return r},e5=typeof XMLHttpRequest<"u",t5=e5&&function(a){return new Promise(function(s,o){const i=C1(a);let d=i.data;const h=jt.from(i.headers).normalize();let{responseType:m,onUploadProgress:g,onDownloadProgress:b}=i,x,v,E,M,k;function N(){M&&M(),k&&k(),i.cancelToken&&i.cancelToken.unsubscribe(x),i.signal&&i.signal.removeEventListener("abort",x)}let _=new XMLHttpRequest;_.open(i.method.toUpperCase(),i.url,!0),_.timeout=i.timeout;function X(){if(!_)return;const q=jt.from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),H={data:!m||m==="text"||m==="json"?_.responseText:_.response,status:_.status,statusText:_.statusText,headers:q,config:a,request:_};j1(function(V){s(V),N()},function(V){o(V),N()},H),_=null}"onloadend"in _?_.onloadend=X:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout(X)},_.onabort=function(){_&&(o(new ue("Request aborted",ue.ECONNABORTED,a,_)),_=null)},_.onerror=function(F){const H=F&&F.message?F.message:"Network Error",Z=new ue(H,ue.ERR_NETWORK,a,_);Z.event=F||null,o(Z),_=null},_.ontimeout=function(){let F=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const H=i.transitional||Ud;i.timeoutErrorMessage&&(F=i.timeoutErrorMessage),o(new ue(F,H.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,a,_)),_=null},d===void 0&&h.setContentType(null),"setRequestHeader"in _&&L.forEach(h.toJSON(),function(F,H){_.setRequestHeader(H,F)}),L.isUndefined(i.withCredentials)||(_.withCredentials=!!i.withCredentials),m&&m!=="json"&&(_.responseType=i.responseType),b&&([E,k]=Ls(b,!0),_.addEventListener("progress",E)),g&&_.upload&&([v,M]=Ls(g),_.upload.addEventListener("progress",v),_.upload.addEventListener("loadend",M)),(i.cancelToken||i.signal)&&(x=q=>{_&&(o(!q||q.type?new Ir(null,a,_):q),_.abort(),_=null)},i.cancelToken&&i.cancelToken.subscribe(x),i.signal&&(i.signal.aborted?x():i.signal.addEventListener("abort",x)));const U=Kw(i.url);if(U&&ct.protocols.indexOf(U)===-1){o(new ue("Unsupported protocol "+U+":",ue.ERR_BAD_REQUEST,a));return}_.send(d||null)})},n5=(a,r)=>{const{length:s}=a=a?a.filter(Boolean):[];if(r||s){let o=new AbortController,i;const d=function(b){if(!i){i=!0,m();const x=b instanceof Error?b:this.reason;o.abort(x instanceof ue?x:new Ir(x instanceof Error?x.message:x))}};let h=r&&setTimeout(()=>{h=null,d(new ue(`timeout of ${r}ms exceeded`,ue.ETIMEDOUT))},r);const m=()=>{a&&(h&&clearTimeout(h),h=null,a.forEach(b=>{b.unsubscribe?b.unsubscribe(d):b.removeEventListener("abort",d)}),a=null)};a.forEach(b=>b.addEventListener("abort",d));const{signal:g}=o;return g.unsubscribe=()=>L.asap(m),g}},a5=function*(a,r){let s=a.byteLength;if(s<r){yield a;return}let o=0,i;for(;o<s;)i=o+r,yield a.slice(o,i),o=i},l5=async function*(a,r){for await(const s of r5(a))yield*a5(s,r)},r5=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const r=a.getReader();try{for(;;){const{done:s,value:o}=await r.read();if(s)break;yield o}}finally{await r.cancel()}},P0=(a,r,s,o)=>{const i=l5(a,r);let d=0,h,m=g=>{h||(h=!0,o&&o(g))};return new ReadableStream({async pull(g){try{const{done:b,value:x}=await i.next();if(b){m(),g.close();return}let v=x.byteLength;if(s){let E=d+=v;s(E)}g.enqueue(new Uint8Array(x))}catch(b){throw m(b),b}},cancel(g){return m(g),i.return()}},{highWaterMark:2})},G0=64*1024,{isFunction:vs}=L,i5=(({Request:a,Response:r})=>({Request:a,Response:r}))(L.global),{ReadableStream:X0,TextEncoder:F0}=L.global,K0=(a,...r)=>{try{return!!a(...r)}catch{return!1}},s5=a=>{a=L.merge.call({skipUndefined:!0},i5,a);const{fetch:r,Request:s,Response:o}=a,i=r?vs(r):typeof fetch=="function",d=vs(s),h=vs(o);if(!i)return!1;const m=i&&vs(X0),g=i&&(typeof F0=="function"?(k=>N=>k.encode(N))(new F0):async k=>new Uint8Array(await new s(k).arrayBuffer())),b=d&&m&&K0(()=>{let k=!1;const N=new X0,_=new s(ct.origin,{body:N,method:"POST",get duplex(){return k=!0,"half"}}).headers.has("Content-Type");return N.cancel(),k&&!_}),x=h&&m&&K0(()=>L.isReadableStream(new o("").body)),v={stream:x&&(k=>k.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(k=>{!v[k]&&(v[k]=(N,_)=>{let X=N&&N[k];if(X)return X.call(N);throw new ue(`Response type '${k}' is not supported`,ue.ERR_NOT_SUPPORT,_)})});const E=async k=>{if(k==null)return 0;if(L.isBlob(k))return k.size;if(L.isSpecCompliantForm(k))return(await new s(ct.origin,{method:"POST",body:k}).arrayBuffer()).byteLength;if(L.isArrayBufferView(k)||L.isArrayBuffer(k))return k.byteLength;if(L.isURLSearchParams(k)&&(k=k+""),L.isString(k))return(await g(k)).byteLength},M=async(k,N)=>{const _=L.toFiniteNumber(k.getContentLength());return _??E(N)};return async k=>{let{url:N,method:_,data:X,signal:U,cancelToken:q,timeout:F,onDownloadProgress:H,onUploadProgress:Z,responseType:V,headers:le,withCredentials:ae="same-origin",fetchOptions:je}=C1(k),xe=r||fetch;V=V?(V+"").toLowerCase():"text";let me=n5([U,q&&q.toAbortSignal()],F),$=null;const re=me&&me.unsubscribe&&(()=>{me.unsubscribe()});let he;try{if(Z&&b&&_!=="get"&&_!=="head"&&(he=await M(le,X))!==0){let j=new s(N,{method:"POST",body:X,duplex:"half"}),P;if(L.isFormData(X)&&(P=j.headers.get("content-type"))&&le.setContentType(P),j.body){const[J,Q]=q0(he,Ls(Y0(Z)));X=P0(j.body,G0,J,Q)}}L.isString(ae)||(ae=ae?"include":"omit");const R=d&&"credentials"in s.prototype,I={...je,signal:me,method:_.toUpperCase(),headers:le.normalize().toJSON(),body:X,duplex:"half",credentials:R?ae:void 0};$=d&&new s(N,I);let te=await(d?xe($,je):xe(N,I));const Ee=x&&(V==="stream"||V==="response");if(x&&(H||Ee&&re)){const j={};["status","statusText","headers"].forEach(W=>{j[W]=te[W]});const P=L.toFiniteNumber(te.headers.get("content-length")),[J,Q]=H&&q0(P,Ls(Y0(H),!0))||[];te=new o(P0(te.body,G0,J,()=>{Q&&Q(),re&&re()}),j)}V=V||"text";let _e=await v[L.findKey(v,V)||"text"](te,k);return!Ee&&re&&re(),await new Promise((j,P)=>{j1(j,P,{data:_e,headers:jt.from(te.headers),status:te.status,statusText:te.statusText,config:k,request:$})})}catch(R){throw re&&re(),R&&R.name==="TypeError"&&/Load failed|fetch/i.test(R.message)?Object.assign(new ue("Network Error",ue.ERR_NETWORK,k,$,R&&R.response),{cause:R.cause||R}):ue.from(R,R&&R.code,k,$,R&&R.response)}}},o5=new Map,k1=a=>{let r=a&&a.env||{};const{fetch:s,Request:o,Response:i}=r,d=[o,i,s];let h=d.length,m=h,g,b,x=o5;for(;m--;)g=d[m],b=x.get(g),b===void 0&&x.set(g,b=m?new Map:s5(r)),x=b;return b};k1();const Ld={http:jw,xhr:t5,fetch:{get:k1}};L.forEach(Ld,(a,r)=>{if(a){try{Object.defineProperty(a,"name",{value:r})}catch{}Object.defineProperty(a,"adapterName",{value:r})}});const Q0=a=>`- ${a}`,c5=a=>L.isFunction(a)||a===null||a===!1;function u5(a,r){a=L.isArray(a)?a:[a];const{length:s}=a;let o,i;const d={};for(let h=0;h<s;h++){o=a[h];let m;if(i=o,!c5(o)&&(i=Ld[(m=String(o)).toLowerCase()],i===void 0))throw new ue(`Unknown adapter '${m}'`);if(i&&(L.isFunction(i)||(i=i.get(r))))break;d[m||"#"+h]=i}if(!i){const h=Object.entries(d).map(([g,b])=>`adapter ${g} `+(b===!1?"is not supported by the environment":"is not available in the build"));let m=s?h.length>1?`since :
`+h.map(Q0).join(`
`):" "+Q0(h[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return i}const _1={getAdapter:u5,adapters:Ld};function Gu(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Ir(null,a)}function Z0(a){return Gu(a),a.headers=jt.from(a.headers),a.data=Pu.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),_1.getAdapter(a.adapter||Zr.adapter,a)(a).then(function(o){return Gu(a),o.data=Pu.call(a,a.transformResponse,o),o.headers=jt.from(o.headers),o},function(o){return w1(o)||(Gu(a),o&&o.response&&(o.response.data=Pu.call(a,a.transformResponse,o.response),o.response.headers=jt.from(o.response.headers))),Promise.reject(o)})}const N1="1.15.0",Ws={};["object","boolean","number","function","string","symbol"].forEach((a,r)=>{Ws[a]=function(o){return typeof o===a||"a"+(r<1?"n ":" ")+a}});const I0={};Ws.transitional=function(r,s,o){function i(d,h){return"[Axios v"+N1+"] Transitional option '"+d+"'"+h+(o?". "+o:"")}return(d,h,m)=>{if(r===!1)throw new ue(i(h," has been removed"+(s?" in "+s:"")),ue.ERR_DEPRECATED);return s&&!I0[h]&&(I0[h]=!0,console.warn(i(h," has been deprecated since v"+s+" and will be removed in the near future"))),r?r(d,h,m):!0}};Ws.spelling=function(r){return(s,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function d5(a,r,s){if(typeof a!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const o=Object.keys(a);let i=o.length;for(;i-- >0;){const d=o[i],h=r[d];if(h){const m=a[d],g=m===void 0||h(m,d,a);if(g!==!0)throw new ue("option "+d+" must be "+g,ue.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new ue("Unknown option "+d,ue.ERR_BAD_OPTION)}}const zs={assertOptions:d5,validators:Ws},Ft=zs.validators;let Ua=class{constructor(r){this.defaults=r||{},this.interceptors={request:new B0,response:new B0}}async request(r,s){try{return await this._request(r,s)}catch(o){if(o instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const d=(()=>{if(!i.stack)return"";const h=i.stack.indexOf(`
`);return h===-1?"":i.stack.slice(h+1)})();try{if(!o.stack)o.stack=d;else if(d){const h=d.indexOf(`
`),m=h===-1?-1:d.indexOf(`
`,h+1),g=m===-1?"":d.slice(m+1);String(o.stack).endsWith(g)||(o.stack+=`
`+d)}}catch{}}throw o}}_request(r,s){typeof r=="string"?(s=s||{},s.url=r):s=r||{},s=Ba(this.defaults,s);const{transitional:o,paramsSerializer:i,headers:d}=s;o!==void 0&&zs.assertOptions(o,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean),legacyInterceptorReqResOrdering:Ft.transitional(Ft.boolean)},!1),i!=null&&(L.isFunction(i)?s.paramsSerializer={serialize:i}:zs.assertOptions(i,{encode:Ft.function,serialize:Ft.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),zs.assertOptions(s,{baseUrl:Ft.spelling("baseURL"),withXsrfToken:Ft.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let h=d&&L.merge(d.common,d[s.method]);d&&L.forEach(["delete","get","head","post","put","patch","common"],k=>{delete d[k]}),s.headers=jt.concat(h,d);const m=[];let g=!0;this.interceptors.request.forEach(function(N){if(typeof N.runWhen=="function"&&N.runWhen(s)===!1)return;g=g&&N.synchronous;const _=s.transitional||Ud;_&&_.legacyInterceptorReqResOrdering?m.unshift(N.fulfilled,N.rejected):m.push(N.fulfilled,N.rejected)});const b=[];this.interceptors.response.forEach(function(N){b.push(N.fulfilled,N.rejected)});let x,v=0,E;if(!g){const k=[Z0.bind(this),void 0];for(k.unshift(...m),k.push(...b),E=k.length,x=Promise.resolve(s);v<E;)x=x.then(k[v++],k[v++]);return x}E=m.length;let M=s;for(;v<E;){const k=m[v++],N=m[v++];try{M=k(M)}catch(_){N.call(this,_);break}}try{x=Z0.call(this,M)}catch(k){return Promise.reject(k)}for(v=0,E=b.length;v<E;)x=x.then(b[v++],b[v++]);return x}getUri(r){r=Ba(this.defaults,r);const s=E1(r.baseURL,r.url,r.allowAbsoluteUrls);return x1(s,r.params,r.paramsSerializer)}};L.forEach(["delete","get","head","options"],function(r){Ua.prototype[r]=function(s,o){return this.request(Ba(o||{},{method:r,url:s,data:(o||{}).data}))}});L.forEach(["post","put","patch"],function(r){function s(o){return function(d,h,m){return this.request(Ba(m||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}Ua.prototype[r]=s(),Ua.prototype[r+"Form"]=s(!0)});let f5=class z1{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(d){s=d});const o=this;this.promise.then(i=>{if(!o._listeners)return;let d=o._listeners.length;for(;d-- >0;)o._listeners[d](i);o._listeners=null}),this.promise.then=i=>{let d;const h=new Promise(m=>{o.subscribe(m),d=m}).then(i);return h.cancel=function(){o.unsubscribe(d)},h},r(function(d,h,m){o.reason||(o.reason=new Ir(d,h,m),s(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const s=this._listeners.indexOf(r);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const r=new AbortController,s=o=>{r.abort(o)};return this.subscribe(s),r.signal.unsubscribe=()=>this.unsubscribe(s),r.signal}static source(){let r;return{token:new z1(function(i){r=i}),cancel:r}}};function h5(a){return function(s){return a.apply(null,s)}}function p5(a){return L.isObject(a)&&a.isAxiosError===!0}const hd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(hd).forEach(([a,r])=>{hd[r]=a});function A1(a){const r=new Ua(a),s=o1(Ua.prototype.request,r);return L.extend(s,Ua.prototype,r,{allOwnKeys:!0}),L.extend(s,r,null,{allOwnKeys:!0}),s.create=function(i){return A1(Ba(a,i))},s}const qe=A1(Zr);qe.Axios=Ua;qe.CanceledError=Ir;qe.CancelToken=f5;qe.isCancel=w1;qe.VERSION=N1;qe.toFormData=Js;qe.AxiosError=ue;qe.Cancel=qe.CanceledError;qe.all=function(r){return Promise.all(r)};qe.spread=h5;qe.isAxiosError=p5;qe.mergeConfig=Ba;qe.AxiosHeaders=jt;qe.formToJSON=a=>v1(L.isHTMLForm(a)?new FormData(a):a);qe.getAdapter=_1.getAdapter;qe.HttpStatusCode=hd;qe.default=qe;const{Axios:wE,AxiosError:jE,CanceledError:EE,isCancel:CE,CancelToken:kE,VERSION:_E,all:NE,Cancel:zE,isAxiosError:AE,spread:TE,toFormData:RE,AxiosHeaders:OE,HttpStatusCode:ME,formToJSON:UE,getAdapter:DE,mergeConfig:LE}=qe,Mr="https://lms-using-react.onrender.com/",m5={syncUser:async(a,r)=>(await qe.post(`${Mr}/auth/sync`,r,{headers:{Authorization:`Bearer ${a}`}})).data},As={getAll:async(a={})=>(await qe.get(`${Mr}/courses`,{params:a})).data,getById:async a=>(await qe.get(`${Mr}/courses/${a}`)).data,enroll:async(a,r)=>(await qe.post(`${Mr}/courses/${a}/enroll`,{clerkId:r})).data,checkEnrollment:async(a,r)=>(await qe.get(`${Mr}/courses/${a}/enrollment-status`,{params:{clerkId:r}})).data},g5=()=>{const{isSignedIn:a,user:r,isLoaded:s}=Rl(),{getToken:o}=Pg(),[i,d]=S.useState(null),[h,m]=S.useState(!0),[g,b]=S.useState(null);return S.useEffect(()=>{if(!s)return;if(!a||!r){d(null),m(!1);return}(async()=>{try{m(!0);const v=await o(),E=await m5.syncUser(v,{clerkId:r.id,name:r.fullName||r.firstName||"User",email:r.primaryEmailAddress?.emailAddress||"",avatar:r.imageUrl||""});d(E.user)}catch(v){console.error("Failed to sync user:",v.message),b(v.message)}finally{m(!1)}})()},[a,s,r]),{dbUser:i,loading:h,error:g,isSignedIn:a,user:r}};const T1=(...a)=>a.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim();const b5=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const y5=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase());const $0=a=>{const r=y5(a);return r.charAt(0).toUpperCase()+r.slice(1)};var x5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const v5=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};const S5=S.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:i="",children:d,iconNode:h,...m},g)=>S.createElement("svg",{ref:g,...x5,width:r,height:r,stroke:a,strokeWidth:o?Number(s)*24/Number(r):s,className:T1("lucide",i),...!d&&!v5(m)&&{"aria-hidden":"true"},...m},[...h.map(([b,x])=>S.createElement(b,x)),...Array.isArray(d)?d:[d]]));const ce=(a,r)=>{const s=S.forwardRef(({className:o,...i},d)=>S.createElement(S5,{ref:d,iconNode:r,className:T1(`lucide-${b5($0(a))}`,`lucide-${a}`,o),...i}));return s.displayName=$0(a),s};const w5=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],R1=ce("arrow-left",w5);const j5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Lr=ce("arrow-right",j5);const E5=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Hr=ce("award",E5);const C5=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],J0=ce("badge-check",C5);const k5=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],O1=ce("book-marked",k5);const _5=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],tt=ce("book-open",_5);const N5=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],M1=ce("chart-column",N5);const z5=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Bd=ce("chevron-down",z5);const A5=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ts=ce("chevron-right",A5);const T5=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],U1=ce("chevron-up",T5);const R5=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],zl=ce("circle-check-big",R5);const O5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],M5=ce("circle-check",O5);const U5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],W0=ce("circle",U5);const D5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Da=ce("clock",D5);const L5=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],D1=ce("code-xml",L5);const B5=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],L1=ce("contact",B5);const H5=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],q5=ce("credit-card",H5);const Y5=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],eg=ce("flame",Y5);const V5=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],P5=ce("funnel",V5);const G5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Hd=ce("globe",G5);const X5=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],zn=ce("graduation-cap",X5);const F5=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],K5=ce("heart-handshake",F5);const Q5=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],qd=ce("heart",Q5);const Z5=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],B1=ce("house",Z5);const I5=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],$5=ce("instagram",I5);const J5=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],H1=ce("linkedin",J5);const W5=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],q1=ce("loader",W5);const ej=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],pd=ce("lock",ej);const tj=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],eo=ce("mail",tj);const nj=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Y1=ce("map-pin",nj);const aj=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],V1=ce("megaphone",aj);const lj=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Ss=ce("message-circle",lj);const rj=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ij=ce("message-square",rj);const sj=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],P1=ce("palette",sj);const oj=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Yd=ce("phone",oj);const cj=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],md=ce("play",cj);const uj=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],gd=ce("search",uj);const dj=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],G1=ce("send",dj);const fj=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],tg=ce("shield-check",fj);const hj=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],X1=ce("shield",hj);const pj=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],mj=ce("sliders-horizontal",pj);const gj=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],bd=ce("sparkles",gj);const bj=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nn=ce("star",bj);const yj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],xj=ce("target",yj);const vj=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Vd=ce("trending-up",vj);const Sj=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],F1=ce("twitter",Sj);const wj=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],K1=ce("user",wj);const jj=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],qa=ce("users",jj);const Ej=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yd=ce("x",Ej);const Cj=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],kj=ce("youtube",Cj);const _j=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Nj=ce("zap",_j),zj=[{name:"Home",icon:B1,href:"/"},{name:"Courses",icon:tt,href:"/courses"},{name:"About",icon:O1,href:"/about"},{name:"Faculty",icon:qa,href:"/faculty"},{name:"Contact",icon:L1,href:"/contact"}],Aj=[{value:"12K+",label:"Students",icon:qa},{value:"240+",label:"Courses",icon:tt},{value:"94%",label:"Success",icon:Hr},{value:"58",label:"Countries",icon:Hd}],Tj=[{icon:Nj,title:"Learn at Your Pace",desc:"Lifetime access. Resume exactly where you left off, on any device, any time."},{icon:X1,title:"Expert Instructors",desc:"Every teacher is a vetted industry professional with real shipped products."},{icon:xj,title:"Career-Ready Skills",desc:"Curriculum built around what employers actually hire for — zero fluff."},{icon:qd,title:"Community Support",desc:"Cohort peers, alumni mentors and weekly live Q&A sessions included."}],Rj=[{label:"Development",icon:D1,count:4,color:"#0e7490",bg:"#e0f7fa"},{label:"Design",icon:P1,count:3,color:"#0f766e",bg:"#d1fae5"},{label:"Data",icon:M1,count:3,color:"#0369a1",bg:"#dbeafe"},{label:"Marketing",icon:V1,count:2,color:"#7c3aed",bg:"#ede9fe"}],Oj=[{id:"1",name:"Full Stack Web Development",teacher:"Arjun Mehta",image:"https://picsum.photos/seed/c1/480/270",cat:"Development",level:"Intermediate",rating:4.8,students:4820,isFree:!1,price:{original:2999,sale:1499},hot:!0},{id:"2",name:"UI/UX Design Mastery",teacher:"Priya Sharma",image:"https://picsum.photos/seed/c2/480/270",cat:"Design",level:"Beginner",rating:4.9,students:2310,isFree:!1,price:{original:1999,sale:null},hot:!0},{id:"3",name:"Data Science with Python",teacher:"Rohit Verma",image:"https://picsum.photos/seed/c3/480/270",cat:"Data",level:"Advanced",rating:4.7,students:6100,isFree:!0,price:null,hot:!1},{id:"4",name:"React & Next.js Bootcamp",teacher:"Sneha Patel",image:"https://picsum.photos/seed/c4/480/270",cat:"Development",level:"Intermediate",rating:4.8,students:3750,isFree:!1,price:{original:3499,sale:2199},hot:!0}],Mj=[{name:"Aisha Rahman",role:"Frontend Engineer @ Google",avatar:"https://i.pravatar.cc/80?img=47",text:"LearnHub changed my career completely. Real-world projects, genuine mentorship — I landed my dream job in 5 months.",rating:5},{name:"Marcus Chen",role:"Data Scientist @ Stripe",avatar:"https://i.pravatar.cc/80?img=12",text:"Switched careers at 34 with zero ML background. The pacing was perfect — challenging but never overwhelming.",rating:5},{name:"Sofia Alvarez",role:"UX Designer @ Figma",avatar:"https://i.pravatar.cc/80?img=29",text:"Most thoughtfully designed course I've ever taken. Real briefs, real feedback, a portfolio I'm proud of.",rating:5}],Uj=a=>{if(a.isFree||!a.price)return{free:!0};const{original:r,sale:s}=a.price;return s?{free:!1,display:`₹${s}`,original:`₹${r}`,pct:Math.round((r-s)/r*100)}:{free:!1,display:`₹${r}`,original:null,pct:null}},Dj=a=>a>=1e3?`${(a/1e3).toFixed(1)}k`:String(a);function Cl(a=.15){const r=S.useRef(null),[s,o]=S.useState(!1);return S.useEffect(()=>{const i=new IntersectionObserver(([d])=>{d.isIntersecting&&o(!0)},{threshold:a});return r.current&&i.observe(r.current),()=>i.disconnect()},[a]),[r,s]}const Xu=({n:a=5,size:r=12})=>f.jsx("div",{style:{display:"flex",gap:2},children:[1,2,3,4,5].map(s=>f.jsx(Nn,{size:r,fill:s<=a?"#f59e0b":"none",color:s<=a?"#f59e0b":"#cbd5e1"},s))});function Lj(){const a=Vr(),{openSignUp:r}=Lg(),{isSignedIn:s,isLoaded:o}=Rl(),[i,d]=S.useState(!1);S.useEffect(()=>{const U=()=>d(window.scrollY>10);return window.addEventListener("scroll",U,{passive:!0}),()=>window.removeEventListener("scroll",U)},[]);const[h,m]=Cl(.3),[g,b]=Cl(.15),[x,v]=Cl(.15),[E,M]=Cl(.1),[k,N]=Cl(.1),[_,X]=Cl(.2);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:     #0e7490;
          --cyan-dk:  #0a5c73;
          --cyan-md:  #0891b2;
          --teal:     #0f766e;
          --amber:    #f59e0b;
          --slate:    #475569;
          --slate-lt: #94a3b8;
          --border:   rgba(14,116,144,0.13);
          --bg:       #f0f9ff;
          --white:    #ffffff;
          --dark:     #0c1a2e;
          --ff-d:     'Cormorant Garamond', Georgia, serif;
          --ff-b:     'DM Sans', sans-serif;
          --sh:       0 2px 16px rgba(14,116,144,0.08);
          --sh-md:    0 8px 32px rgba(14,116,144,0.12);
          --sh-lg:    0 16px 48px rgba(14,116,144,0.16);
        }

        /* ── NAVBAR ── */
        .h-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 999;
          padding: 10px 28px;
          display: flex; align-items: center; justify-content: space-between;
          font-family: var(--ff-b);
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(18px) saturate(1.8);
          -webkit-backdrop-filter: blur(18px) saturate(1.8);
          border-bottom: 1px solid rgba(14,116,144,0.14);
          box-shadow: 0 2px 20px rgba(14,116,144,0.06);
          transition: background 0.3s, box-shadow 0.3s;
        }
        .h-nav.scrolled {
          background: rgba(255,255,255,0.97);
          box-shadow: 0 2px 24px rgba(14,116,144,0.13);
          border-bottom-color: rgba(14,116,144,0.18);
        }
        .h-brand {
          display: flex; align-items: center; gap: 9px; text-decoration: none; flex-shrink: 0;
        }
        .h-brand-icon {
          width: 34px; height: 34px;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 9px; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 10px rgba(14,116,144,0.3);
        }
        .h-brand-name {
          font-family: var(--ff-d); font-size: 1.25rem; font-weight: 700;
          background: linear-gradient(135deg, #0c4a6e, #0e7490, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; letter-spacing: -0.01em;
        }
        .h-brand-sub {
          font-size: 0.58rem; font-weight: 300; color: var(--slate-lt);
          letter-spacing: 0.13em; text-transform: uppercase; margin-top: 1px;
        }
        .h-pill {
          display: flex; align-items: center; gap: 2px;
          background: rgba(240,249,255,0.85);
          border: 1px solid rgba(14,116,144,0.14);
          border-radius: 100px; padding: 4px;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(14,116,144,0.06);
          position: absolute; left: 50%; transform: translateX(-50%);
        }
        .h-link {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 13px; border-radius: 100px; text-decoration: none;
          font-size: 0.79rem; font-weight: 500; color: #64748b; white-space: nowrap;
          transition: all 0.2s;
        }
        .h-link:hover { color: var(--cyan); background: rgba(14,116,144,0.07); }
        .h-link.active { color: var(--cyan); background: rgba(14,116,144,0.1); }
        .h-auth { display: flex; align-items: center; flex-shrink: 0; min-width: 110px; justify-content: flex-end; }
        .h-auth-skeleton {
          width: 100px; height: 36px; border-radius: 100px;
          background: rgba(14,116,144,0.07); animation: pulse 1.5s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
        .h-signup {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 18px; border-radius: 100px;
          font-family: var(--ff-b); font-size: 0.82rem; font-weight: 500;
          color: var(--cyan); background: rgba(240,249,255,0.8);
          border: 1.5px solid rgba(14,116,144,0.28);
          cursor: pointer; outline: none; transition: all 0.2s;
        }
        .h-signup:hover {
          background: var(--cyan); color: #fff; border-color: var(--cyan);
          box-shadow: 0 4px 16px rgba(14,116,144,0.28); transform: translateY(-1px);
        }
        .h-userBtn {
          padding: 3px; border-radius: 50%;
          border: 2px solid rgba(14,116,144,0.2);
          display: flex; align-items: center; transition: border-color 0.2s;
        }
        .h-userBtn:hover { border-color: var(--cyan); }

        /* ── SHARED ── */
        .h-page { font-family: var(--ff-b); background: var(--bg); overflow-x: hidden; }
        .h-sec-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 6px 14px; background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18); border-radius: 100px;
          font-size: 0.7rem; font-weight: 500; color: var(--cyan);
          letter-spacing: 0.09em; text-transform: uppercase; margin-bottom: 14px;
        }
        .h-sec-title {
          font-family: var(--ff-d); font-size: clamp(1.8rem,3.5vw,2.6rem);
          font-weight: 700; color: var(--dark); line-height: 1.08;
          letter-spacing: -0.02em; margin-bottom: 10px;
        }
        .h-sec-title em {
          font-style: italic;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .h-sec-sub { font-size: 0.91rem; color: var(--slate); font-weight: 300; line-height: 1.65; }
        .h-sec-head { text-align: center; max-width: 560px; margin: 0 auto 48px; }
        .h-reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s, transform 0.55s; }
        .h-reveal.on { opacity: 1; transform: translateY(0); }
        .h-btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: 100px;
          font-family: var(--ff-b); font-size: 0.9rem; font-weight: 500;
          color: #fff; border: none; cursor: pointer; text-decoration: none;
          background: linear-gradient(135deg, #0a5c73, #0e7490 55%, #0891b2);
          box-shadow: 0 6px 22px rgba(14,116,144,0.35);
          transition: transform 0.2s, box-shadow 0.2s; letter-spacing: 0.01em;
        }
        .h-btn-p:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(14,116,144,0.45); }
        .h-btn-s {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 22px; border-radius: 100px;
          font-family: var(--ff-b); font-size: 0.9rem; font-weight: 400;
          color: var(--cyan); background: rgba(255,255,255,0.92);
          border: 1.5px solid rgba(14,116,144,0.24);
          cursor: pointer; text-decoration: none; transition: all 0.2s;
        }
        .h-btn-s:hover { background: #fff; border-color: var(--cyan); transform: translateY(-2px); box-shadow: var(--sh); }

        /* ── HERO ── */
        .h-hero {
          min-height: 100vh; padding: 110px 28px 72px;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          background: linear-gradient(150deg, #dff4fb 0%, #f0f9ff 45%, #e0f2fe 100%);
        }
        .h-hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(14,116,144,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,0.045) 1px, transparent 1px);
          background-size: 54px 54px;
        }
        .h-blob { position: absolute; border-radius: 50%; filter: blur(75px); pointer-events: none; }
        .h-blob-1 { width: 520px; height: 520px; background: radial-gradient(#a5f3fc,#67e8f9); opacity: .25; top: -160px; left: -100px; }
        .h-blob-2 { width: 400px; height: 400px; background: radial-gradient(#bae6fd,#7dd3fc); opacity: .2; bottom: -80px; right: -80px; }
        .h-fi {
          position: absolute; width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.9); box-shadow: 0 4px 14px rgba(14,116,144,0.1);
          opacity: 0; z-index: 1;
          animation: fiIn .6s ease forwards, fiBob 4s ease-in-out infinite;
        }
        @keyframes fiIn  { from{opacity:0;transform:scale(.7) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes fiBob { 0%,100%{transform:translateY(0) rotate(0deg)} 40%{transform:translateY(-8px) rotate(1deg)} 70%{transform:translateY(4px) rotate(-1deg)} }
        .h-hero-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 52px; max-width: 1180px; width: 100%;
          align-items: center; position: relative; z-index: 2;
        }
        @media(max-width:900px) {
          .h-hero-grid { grid-template-columns: 1fr; gap: 36px; text-align: center; }
          .h-hero-right, .h-fi, .h-pill { display: none; }
        }
        .h-hero-left { animation: hSlide .65s ease both; }
        @keyframes hSlide { from{opacity:0;transform:translateX(-24px)} to{opacity:1;transform:translateX(0)} }
        .h-announce {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 16px 7px 10px; background: rgba(255,255,255,0.88);
          border: 1px solid rgba(14,116,144,0.2); border-radius: 100px;
          font-size: .74rem; font-weight: 500; color: var(--cyan);
          backdrop-filter: blur(8px); box-shadow: var(--sh); margin-bottom: 22px;
          animation: hSlide .5s .1s ease both;
        }
        .h-ann-dot {
          width: 22px; height: 22px;
          background: linear-gradient(135deg,#0e7490,#06b6d4);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
        }
        .h-hero-title {
          font-family: var(--ff-d); font-size: clamp(2.6rem,5.5vw,4.4rem);
          font-weight: 700; color: var(--dark); line-height: 1.03;
          letter-spacing: -0.03em; margin-bottom: 18px;
          animation: hSlide .55s .15s ease both;
        }
        .h-hero-title em {
          font-style: italic;
          background: linear-gradient(135deg,#0e7490 0%,#0891b2 55%,#06b6d4 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .h-hero-sub {
          font-size: 1rem; color: var(--slate); font-weight: 300;
          line-height: 1.7; max-width: 470px; margin-bottom: 26px;
          animation: hSlide .55s .22s ease both;
        }
        .h-checks {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 9px 22px; margin-bottom: 34px;
          animation: hSlide .55s .28s ease both;
        }
        .h-check { display: flex; align-items: center; gap: 8px; font-size: .83rem; color: var(--slate); }
        .h-ctas { display: flex; gap: 12px; flex-wrap: wrap; animation: hSlide .55s .34s ease both; }
        .h-hero-right { animation: hSlideR .65s .1s ease both; position: relative; }
        @keyframes hSlideR { from{opacity:0;transform:translateX(24px)} to{opacity:1;transform:translateX(0)} }
        .h-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 22px; padding: 28px;
          box-shadow: var(--sh-lg); position: relative; overflow: hidden;
        }
        .h-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg,#0e7490,#0891b2,#06b6d4);
        }
        .h-card-img { width: 100%; border-radius: 13px; display: block; margin-bottom: 18px; aspect-ratio: 16/9; object-fit: cover; }
        .h-card-title { font-family: var(--ff-d); font-size: 1.15rem; font-weight: 600; color: var(--dark); margin-bottom: 8px; }
        .h-card-meta { display: flex; align-items: center; gap: 10px; font-size: .75rem; color: var(--slate-lt); font-weight: 300; }
        .h-card-tag {
          position: absolute; top: 18px; right: 18px; padding: 5px 12px; border-radius: 100px;
          background: linear-gradient(135deg,#0e7490,#06b6d4); color: #fff; font-size: .68rem; font-weight: 600;
        }
        .h-chip {
          position: absolute; background: var(--white); border: 1px solid var(--border);
          border-radius: 12px; padding: 9px 13px; box-shadow: var(--sh-md);
          display: flex; align-items: center; gap: 8px;
          font-size: .75rem; font-weight: 500; color: var(--dark);
          animation: fiBob 5s ease-in-out infinite;
        }
        .h-chip-1 { bottom: -14px; left: -22px; animation-delay: .3s; }
        .h-chip-2 { top: 22px; left: -26px; animation-delay: .9s; }
        .h-chip-ico { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }

        /* ── STATS ── */
        .h-stats {
          background: linear-gradient(135deg,#0a5c73,#0e7490 60%,#0369a1);
          padding: 52px 28px; position: relative; overflow: hidden;
        }
        .h-stats-grid {
          display: grid; grid-template-columns: repeat(4,1fr);
          max-width: 900px; margin: 0 auto; position: relative; z-index: 1;
        }
        @media(max-width:640px) { .h-stats-grid { grid-template-columns: repeat(2,1fr); } }
        .h-st {
          text-align: center; padding: 18px 10px;
          border-right: 1px solid rgba(255,255,255,0.12); transition: background .2s;
        }
        .h-st:last-child { border-right: none; }
        .h-st:hover { background: rgba(255,255,255,0.06); }
        .h-st-ico {
          width: 34px; height: 34px; background: rgba(255,255,255,0.1); border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 9px; color: rgba(255,255,255,.85);
        }
        .h-st-val {
          font-family: var(--ff-d); font-size: 2rem; font-weight: 700; color: #fff;
          line-height: 1; margin-bottom: 4px; letter-spacing: -.02em;
          opacity: 0; transform: translateY(10px); transition: opacity .5s, transform .5s;
        }
        .h-st-val.on { opacity: 1; transform: translateY(0); }
        .h-st-lbl { font-size: .68rem; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .09em; }

        /* ── FEATURES ── */
        .h-features { padding: 88px 28px; background: var(--white); }
        .h-feat-grid {
          display: grid; grid-template-columns: repeat(auto-fill,minmax(240px,1fr));
          gap: 18px; max-width: 1100px; margin: 0 auto;
        }
        .h-feat-card {
          background: var(--bg); border: 1px solid var(--border); border-radius: 16px; padding: 26px 22px;
          opacity: 0; transform: translateY(18px);
          transition: opacity .5s, transform .5s, box-shadow .28s, border-color .22s;
        }
        .h-feat-card.on { opacity: 1; transform: translateY(0); }
        .h-feat-card:hover { transform: translateY(-4px); box-shadow: var(--sh-md); border-color: rgba(14,116,144,.25); }
        .h-feat-ico {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(14,116,144,0.09); border: 1px solid rgba(14,116,144,.14);
          display: flex; align-items: center; justify-content: center; color: var(--cyan); margin-bottom: 15px;
        }
        .h-feat-title { font-family: var(--ff-d); font-size: 1.08rem; font-weight: 600; color: var(--dark); margin-bottom: 7px; }
        .h-feat-desc  { font-size: .81rem; color: var(--slate); font-weight: 300; line-height: 1.65; }

        /* ── CATEGORIES ── */
        .h-cats { padding: 72px 28px; background: var(--bg); }
        .h-cat-grid {
          display: grid; grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
          gap: 15px; max-width: 1100px; margin: 0 auto;
        }
        .h-cat-card {
          background: var(--white); border: 1px solid var(--border); border-radius: 16px;
          padding: 26px 20px; cursor: pointer; text-decoration: none;
          display: flex; flex-direction: column; gap: 11px;
          opacity: 0; transform: translateY(14px);
          transition: opacity .45s, transform .45s, box-shadow .25s, border-color .2s;
        }
        .h-cat-card.on { opacity: 1; transform: translateY(0); }
        .h-cat-card:hover { transform: translateY(-4px); box-shadow: var(--sh-md); border-color: rgba(14,116,144,.28); }
        .h-cat-ico  { width: 46px; height: 46px; border-radius: 13px; display: flex; align-items: center; justify-content: center; }
        .h-cat-name { font-family: var(--ff-d); font-size: 1.08rem; font-weight: 600; color: var(--dark); }
        .h-cat-cnt  { font-size: .74rem; color: var(--slate-lt); font-weight: 300; }
        .h-cat-arr  { margin-top: auto; color: var(--slate-lt); transition: transform .2s, color .2s; }
        .h-cat-card:hover .h-cat-arr { transform: translateX(4px); color: var(--cyan); }

        /* ── COURSES ── */
        .h-courses { padding: 80px 28px; background: var(--white); }
        .h-cr-grid {
          display: grid; grid-template-columns: repeat(auto-fill,minmax(265px,1fr));
          gap: 18px; max-width: 1200px; margin: 0 auto 40px;
        }
        .h-cr-card {
          background: var(--bg); border: 1px solid var(--border); border-radius: 16px;
          overflow: hidden; cursor: pointer;
          opacity: 0; transform: translateY(16px);
          transition: opacity .45s, transform .45s, box-shadow .28s, border-color .22s; outline: none;
        }
        .h-cr-card.on { opacity: 1; transform: translateY(0); }
        .h-cr-card:hover { transform: translateY(-5px); box-shadow: var(--sh-lg); border-color: rgba(14,116,144,.3); }
        .h-cr-thumb { position: relative; height: 158px; overflow: hidden; background: #e2e8f0; }
        .h-cr-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .4s; }
        .h-cr-card:hover .h-cr-thumb img { transform: scale(1.06); }
        .h-cr-ov {
          position: absolute; inset: 0;
          background: rgba(10,92,115,.78);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
          opacity: 0; transition: opacity .22s; backdrop-filter: blur(2px);
        }
        .h-cr-card:hover .h-cr-ov { opacity: 1; }
        .h-cr-ov span { font-size: .74rem; font-weight: 500; color: rgba(255,255,255,.9); letter-spacing: .05em; }
        .h-cr-bgs { position: absolute; top: 8px; left: 8px; display: flex; gap: 4px; }
        .h-cr-bg {
          display: inline-flex; align-items: center; gap: 3px;
          padding: 3px 7px; border-radius: 100px;
          font-size: .61rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase;
        }
        .h-cr-bg-free { background: var(--teal); color: #fff; }
        .h-cr-bg-sale { background: #0f172a; color: var(--amber); }
        .h-cr-bg-hot  { background: rgba(239,68,68,.85); color: #fff; }
        .h-cr-lvl {
          position: absolute; top: 8px; right: 8px; padding: 3px 9px; border-radius: 100px;
          font-size: .59rem; font-weight: 500;
          background: rgba(255,255,255,.92); color: var(--slate); backdrop-filter: blur(4px);
        }
        .h-cr-body { padding: 15px 15px 13px; }
        .h-cr-cat  { font-size: .64rem; font-weight: 600; color: var(--cyan); text-transform: uppercase; letter-spacing: .1em; margin-bottom: 4px; }
        .h-cr-name {
          font-family: var(--ff-d); font-size: .99rem; font-weight: 600; color: var(--dark);
          line-height: 1.25; margin-bottom: 4px;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .h-cr-teacher { font-size: .71rem; color: var(--slate-lt); font-weight: 300; margin-bottom: 7px; }
        .h-cr-meta { display: flex; align-items: center; gap: 9px; font-size: .68rem; color: var(--slate-lt); margin-bottom: 9px; }
        .h-cr-mi   { display: flex; align-items: center; gap: 3px; }
        .h-cr-rat  { color: #92400e; font-weight: 500; }
        .h-cr-foot {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 9px; border-top: 1px solid rgba(14,116,144,.07);
        }
        .h-pf { font-size: .81rem; font-weight: 700; color: var(--teal); }
        .h-pc { font-size: .86rem; font-weight: 700; color: var(--dark); }
        .h-po { font-size: .71rem; color: var(--slate-lt); text-decoration: line-through; margin-left: 4px; }

        /* ── TESTIMONIALS ── */
        .h-tm { background: var(--dark); padding: 80px 28px; position: relative; overflow: hidden; }
        .h-tm-grid {
          display: grid; grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
          gap: 18px; max-width: 1100px; margin: 0 auto; position: relative; z-index: 1;
        }
        .h-tm-card {
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
          border-radius: 18px; padding: 26px 22px;
          display: flex; flex-direction: column; gap: 13px; position: relative; overflow: hidden;
          opacity: 0; transform: translateY(14px); transition: opacity .5s, transform .5s, box-shadow .28s;
        }
        .h-tm-card.on { opacity: 1; transform: translateY(0); }
        .h-tm-card:hover { transform: translateY(-4px); box-shadow: 0 16px 44px rgba(0,0,0,.35); }
        .h-tm-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,#0e7490,#67e8f9); }
        .h-tm-text { font-size: .86rem; color: rgba(255,255,255,.72); font-weight: 300; line-height: 1.72; font-style: italic; flex: 1; }
        .h-tm-author {
          display: flex; align-items: center; gap: 11px;
          padding-top: 13px; border-top: 1px solid rgba(255,255,255,.06);
        }
        .h-tm-av { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(14,116,144,.3); }
        .h-tm-name { font-size: .85rem; font-weight: 500; color: #fff; margin-bottom: 2px; }
        .h-tm-role { font-size: .71rem; color: var(--slate-lt); font-weight: 300; }

        /* ── CTA ── */
        .h-cta { padding: 96px 28px; background: var(--bg); position: relative; overflow: hidden; text-align: center; }
        .h-cta-inner {
          position: relative; z-index: 1; max-width: 600px; margin: 0 auto;
          opacity: 0; transform: translateY(18px); transition: opacity .6s, transform .6s;
        }
        .h-cta-inner.on { opacity: 1; transform: translateY(0); }
        .h-cta-title {
          font-family: var(--ff-d); font-size: clamp(2rem,4vw,3rem); font-weight: 700; color: var(--dark);
          line-height: 1.08; letter-spacing: -.025em; margin-bottom: 13px;
        }
        .h-cta-title em {
          font-style: italic;
          background: linear-gradient(135deg,#0e7490,#06b6d4);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .h-cta-sub  { font-size: .94rem; color: var(--slate); font-weight: 300; line-height: 1.65; margin-bottom: 34px; }
        .h-cta-btns { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; }
        .h-cta-note { font-size: .74rem; color: var(--slate-lt); font-weight: 300; display: flex; align-items: center; justify-content: center; gap: 5px; }

        @media(max-width:640px) {
          .h-checks { grid-template-columns: 1fr; }
          .h-ctas   { justify-content: center; }
          .h-hero-sub { max-width: 100%; }
          .h-nav { padding: 10px 16px; }
        }
      `}),f.jsxs("nav",{className:`h-nav${i?" scrolled":""}`,children:[f.jsxs(St,{to:"/",className:"h-brand",children:[f.jsx("div",{className:"h-brand-icon",children:f.jsx(zn,{size:17,color:"#fff"})}),f.jsxs("div",{children:[f.jsx("div",{className:"h-brand-name",children:"LearnHub"}),f.jsx("div",{className:"h-brand-sub",children:"Learning Platform"})]})]}),f.jsx("div",{className:"h-pill",children:zj.map(({name:U,icon:q,href:F})=>f.jsxs(St,{to:F,className:({isActive:H})=>`h-link${H?" active":""}`,children:[f.jsx(q,{size:14}),f.jsx("span",{children:U})]},U))}),f.jsx("div",{className:"h-auth",children:o?s?f.jsx("div",{className:"h-userBtn",children:f.jsx($g,{afterSignOutUrl:"/"})}):f.jsx("button",{type:"button",className:"h-signup",onClick:()=>r({}),children:"Create Account"}):f.jsx("div",{className:"h-auth-skeleton"})})]}),f.jsxs("div",{className:"h-page",children:[f.jsxs("section",{className:"h-hero",children:[f.jsx("div",{className:"h-blob h-blob-1"}),f.jsx("div",{className:"h-blob h-blob-2"}),[{Icon:D1,color:"#0e7490",bg:"#e0f7fa",top:"15%",left:"5%",size:19,d:0},{Icon:P1,color:"#0f766e",bg:"#d1fae5",top:"62%",left:"3%",size:17,d:.5},{Icon:M1,color:"#0369a1",bg:"#dbeafe",top:"18%",left:"89%",size:19,d:.35},{Icon:V1,color:"#7c3aed",bg:"#ede9fe",top:"74%",left:"92%",size:16,d:.8},{Icon:Nn,color:"#f59e0b",bg:"#fef3c7",top:"40%",left:"2%",size:15,d:1}].map(({Icon:U,color:q,bg:F,top:H,left:Z,size:V,d:le},ae)=>f.jsx("div",{className:"h-fi",style:{top:H,left:Z,background:F,animationDelay:`${le}s, ${le+.6}s`},children:f.jsx(U,{size:V,color:q,strokeWidth:1.8})},ae)),f.jsxs("div",{className:"h-hero-grid",children:[f.jsxs("div",{className:"h-hero-left",children:[f.jsxs("div",{className:"h-announce",children:[f.jsx("div",{className:"h-ann-dot",children:f.jsx(bd,{size:11,color:"#fff"})}),"New cohort starting April 2026 — Limited seats",f.jsx(Ts,{size:13})]}),f.jsxs("h1",{className:"h-hero-title",children:["Learn Skills That",f.jsx("br",{}),"Open ",f.jsx("em",{children:"Real Doors"})]}),f.jsx("p",{className:"h-hero-sub",children:"Join 12,000+ learners building real careers through project-based courses taught by industry experts. Code, design, data — every path covered."}),f.jsx("div",{className:"h-checks",children:["Project-based learning","Expert instructors","Lifetime access","Career support"].map(U=>f.jsxs("div",{className:"h-check",children:[f.jsx(zl,{size:15,color:"#0e7490"}),U]},U))}),f.jsxs("div",{className:"h-ctas",children:[f.jsxs(St,{to:"/courses",className:"h-btn-p",children:[f.jsx(tt,{size:16})," Explore Courses ",f.jsx(Lr,{size:14})]}),f.jsxs(St,{to:"/about",className:"h-btn-s",children:[f.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg,#0e7490,#06b6d4)",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(md,{size:10,color:"#fff",fill:"#fff"})}),"How It Works"]})]})]}),f.jsxs("div",{className:"h-hero-right",children:[f.jsxs("div",{className:"h-card",children:[f.jsx("span",{className:"h-card-tag",children:"🔥 Trending"}),f.jsx("img",{src:"https://picsum.photos/seed/hero/600/340",alt:"Course",className:"h-card-img"}),f.jsx("div",{className:"h-card-title",children:"Full Stack Web Development"}),f.jsxs("div",{className:"h-card-meta",children:[f.jsx(Xu,{n:5,size:13}),f.jsx("span",{children:"4.8 · 4,820 students · 42h"})]})]}),f.jsxs("div",{className:"h-chip h-chip-1",children:[f.jsx("div",{className:"h-chip-ico",style:{background:"#d1fae5"},children:f.jsx(zn,{size:14,color:"#0f766e"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:".81rem",fontWeight:600},children:"12K+"}),f.jsx("div",{style:{fontSize:".63rem",color:"var(--slate-lt)"},children:"Students"})]})]}),f.jsxs("div",{className:"h-chip h-chip-2",children:[f.jsx("div",{className:"h-chip-ico",style:{background:"#fef3c7"},children:f.jsx(Nn,{size:14,color:"#f59e0b",fill:"#f59e0b"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:".81rem",fontWeight:600},children:"4.9/5"}),f.jsx("div",{style:{fontSize:".63rem",color:"var(--slate-lt)"},children:"Rating"})]})]})]})]})]}),f.jsx("div",{className:"h-stats",ref:h,children:f.jsx("div",{className:"h-stats-grid",children:Aj.map(({value:U,label:q,icon:F},H)=>f.jsxs("div",{className:"h-st",children:[f.jsx("div",{className:"h-st-ico",children:f.jsx(F,{size:16})}),f.jsx("div",{className:`h-st-val${m?" on":""}`,style:{transitionDelay:`${H*.1}s`},children:U}),f.jsx("div",{className:"h-st-lbl",children:q})]},q))})}),f.jsxs("section",{className:"h-features",ref:g,children:[f.jsxs("div",{className:"h-sec-head",children:[f.jsxs("div",{className:"h-sec-badge",children:[f.jsx(bd,{size:11})," Why LearnHub"]}),f.jsxs("h2",{className:"h-sec-title",children:["Built for ",f.jsx("em",{children:"Real Growth"})]}),f.jsx("p",{className:"h-sec-sub",children:"Everything you need to go from beginner to career-ready, in one place."})]}),f.jsx("div",{className:"h-feat-grid",children:Tj.map(({icon:U,title:q,desc:F},H)=>f.jsxs("div",{className:`h-feat-card${b?" on":""}`,style:{transitionDelay:`${H*.09}s`},children:[f.jsx("div",{className:"h-feat-ico",children:f.jsx(U,{size:20})}),f.jsx("div",{className:"h-feat-title",children:q}),f.jsx("div",{className:"h-feat-desc",children:F})]},q))})]}),f.jsxs("section",{className:"h-cats",ref:x,children:[f.jsxs("div",{className:"h-sec-head",children:[f.jsxs("div",{className:"h-sec-badge",children:[f.jsx(tt,{size:11})," Explore Topics"]}),f.jsxs("h2",{className:"h-sec-title",children:["Pick Your ",f.jsx("em",{children:"Path"})]}),f.jsx("p",{className:"h-sec-sub",children:"Four career tracks, hundreds of hours, all on one platform."})]}),f.jsx("div",{className:"h-cat-grid",children:Rj.map(({label:U,icon:q,count:F,color:H,bg:Z},V)=>f.jsxs(St,{to:"/courses",className:`h-cat-card${v?" on":""}`,style:{transitionDelay:`${V*.09}s`},children:[f.jsx("div",{className:"h-cat-ico",style:{background:Z},children:f.jsx(q,{size:22,color:H})}),f.jsxs("div",{children:[f.jsx("div",{className:"h-cat-name",children:U}),f.jsxs("div",{className:"h-cat-cnt",children:[F," courses available"]})]}),f.jsx(Ts,{size:15,className:"h-cat-arr"})]},U))})]}),f.jsxs("section",{className:"h-courses",ref:E,children:[f.jsxs("div",{className:"h-sec-head",children:[f.jsxs("div",{className:"h-sec-badge",children:[f.jsx(eg,{size:11})," Popular Now"]}),f.jsxs("h2",{className:"h-sec-title",children:["Top ",f.jsx("em",{children:"Courses"})]}),f.jsx("p",{className:"h-sec-sub",children:"Hand-picked, loved by thousands of learners worldwide."})]}),f.jsx("div",{className:"h-cr-grid",children:Oj.map((U,q)=>{const F=Uj(U);return f.jsxs("article",{className:`h-cr-card${M?" on":""}`,style:{transitionDelay:`${q*.08}s`},onClick:()=>a("/courses"),role:"button",tabIndex:0,onKeyDown:H=>{H.key==="Enter"&&a("/courses")},children:[f.jsxs("div",{className:"h-cr-thumb",children:[f.jsx("img",{src:U.image,alt:U.name,loading:"lazy"}),f.jsxs("div",{className:"h-cr-ov",children:[f.jsx(tt,{size:18,color:"#fff"}),f.jsx("span",{children:"View Course"})]}),f.jsxs("div",{className:"h-cr-bgs",children:[F.free&&f.jsxs("span",{className:"h-cr-bg h-cr-bg-free",children:[f.jsx(J0,{size:9})," Free"]}),F.pct&&f.jsxs("span",{className:"h-cr-bg h-cr-bg-sale",children:[f.jsx(Vd,{size:9})," ",F.pct,"% off"]}),U.hot&&f.jsxs("span",{className:"h-cr-bg h-cr-bg-hot",children:[f.jsx(eg,{size:9})," Hot"]})]}),f.jsx("span",{className:"h-cr-lvl",children:U.level})]}),f.jsxs("div",{className:"h-cr-body",children:[f.jsx("div",{className:"h-cr-cat",children:U.cat}),f.jsx("div",{className:"h-cr-name",children:U.name}),f.jsx("div",{className:"h-cr-teacher",children:U.teacher}),f.jsxs("div",{className:"h-cr-meta",children:[f.jsxs("span",{className:"h-cr-mi",children:[f.jsx(Da,{size:10}),U.duration??30,"h"]}),f.jsxs("span",{className:"h-cr-mi",children:[f.jsx(qa,{size:10}),Dj(U.students)]}),f.jsxs("span",{className:"h-cr-mi h-cr-rat",children:[f.jsx(Nn,{size:10,fill:"#f59e0b",color:"#f59e0b"}),U.rating]})]}),f.jsxs("div",{className:"h-cr-foot",children:[f.jsx(Xu,{n:Math.round(U.rating),size:12}),F.free?f.jsx("span",{className:"h-pf",children:"Free"}):f.jsxs("span",{children:[f.jsx("span",{className:"h-pc",children:F.display}),F.original&&f.jsx("span",{className:"h-po",children:F.original})]})]})]})]},U.id)})}),f.jsx("div",{style:{textAlign:"center"},children:f.jsxs(St,{to:"/courses",className:"h-btn-p",style:{display:"inline-flex"},children:[f.jsx(tt,{size:15})," View All Courses ",f.jsx(Lr,{size:14})]})})]}),f.jsxs("section",{className:"h-tm",ref:k,children:[f.jsxs("div",{className:"h-sec-head",style:{position:"relative",zIndex:1},children:[f.jsxs("div",{className:"h-sec-badge",style:{background:"rgba(14,116,144,.14)",color:"#67e8f9",borderColor:"rgba(14,116,144,.28)"},children:[f.jsx(Nn,{size:11,fill:"#67e8f9",color:"#67e8f9"})," Student Stories"]}),f.jsxs("h2",{className:"h-sec-title",style:{color:"#fff"},children:["Real People, ",f.jsx("em",{children:"Real Results"})]}),f.jsx("p",{className:"h-sec-sub",style:{color:"var(--slate-lt)"},children:"12,000+ learners transformed their careers. Here's what they say."})]}),f.jsx("div",{className:"h-tm-grid",children:Mj.map((U,q)=>f.jsxs("div",{className:`h-tm-card${N?" on":""}`,style:{transitionDelay:`${q*.12}s`},children:[f.jsx(Xu,{n:U.rating,size:13}),f.jsxs("p",{className:"h-tm-text",children:['"',U.text,'"']}),f.jsxs("div",{className:"h-tm-author",children:[f.jsx("img",{src:U.avatar,alt:U.name,className:"h-tm-av"}),f.jsxs("div",{children:[f.jsx("div",{className:"h-tm-name",children:U.name}),f.jsx("div",{className:"h-tm-role",children:U.role})]})]})]},U.name))})]}),f.jsx("section",{className:"h-cta",ref:_,children:f.jsxs("div",{className:`h-cta-inner${X?" on":""}`,children:[f.jsxs("div",{className:"h-sec-badge",style:{marginBottom:14},children:[f.jsx(zn,{size:11})," Start Today"]}),f.jsxs("h2",{className:"h-cta-title",children:["Your Next Chapter",f.jsx("br",{}),"Starts ",f.jsx("em",{children:"Here"})]}),f.jsx("p",{className:"h-cta-sub",children:"Join thousands who chose LearnHub to build real skills, gain confidence, and land the careers they deserve."}),f.jsxs("div",{className:"h-cta-btns",children:[f.jsxs(St,{to:"/courses",className:"h-btn-p",children:[f.jsx(tt,{size:16})," Get Started Free ",f.jsx(Lr,{size:14})]}),f.jsxs(St,{to:"/faculty",className:"h-btn-s",children:["Meet Instructors ",f.jsx(Ts,{size:13})]})]}),f.jsxs("p",{className:"h-cta-note",children:[f.jsx(J0,{size:13,color:"#0e7490"})," No credit card required · Free courses available"]})]})})]})]})}const Bj=[{name:"Home",icon:B1,href:"/"},{name:"Courses",icon:tt,href:"/courses"},{name:"About",icon:O1,href:"/about"},{name:"Faculty",icon:qa,href:"/faculty"},{name:"Contact",icon:L1,href:"/contact"}],Hj=()=>{const{openSignUp:a}=Lg(),{isSignedIn:r}=Rl(),{getToken:s}=Pg(),[o,i]=S.useState(!1),[d,h]=S.useState(0),[m,g]=S.useState(!1),[b,x]=S.useState(!0);return S.useRef(null),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --nav-bg: rgba(255, 255, 255, 0.72);
          --nav-border: rgba(14, 116, 144, 0.12);
          --nav-shadow: 0 4px 32px rgba(14, 116, 144, 0.08), 0 1px 0 rgba(255,255,255,0.9) inset;
          --pill-bg: rgba(240, 249, 255, 0.8);
          --pill-border: rgba(14, 116, 144, 0.15);
          --active-bg: rgba(14, 116, 144, 0.1);
          --active-text: #0e7490;
          --inactive-text: #64748b;
          --hover-text: #0369a1;
          --accent: #0e7490;
          --accent-2: #0891b2;
        }

        .lms-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 10px 24px;
          background: var(--nav-bg);
          backdrop-filter: blur(20px) saturate(1.8);
          -webkit-backdrop-filter: blur(20px) saturate(1.8);
          border-bottom: 1px solid var(--nav-border);
          box-shadow: var(--nav-shadow);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.3s ease, box-shadow 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .lms-navbar.hidden  { transform: translateY(-100%); }

        .lms-navbar.scrolled {
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 8px 40px rgba(14, 116, 144, 0.12);
        }

        .lms-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%; max-width: 1400px;
          margin: 0 auto; position: relative;
        }

        /* ── LOGO ─────────────────────────────── */
        .lms-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0; z-index: 1;
        }

        /* Icon box replaces the missing image */
        .lms-logo-icon {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 10px rgba(14,116,144,0.28);
          flex-shrink: 0;
        }

        .lms-logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem; font-weight: 600;
          background: linear-gradient(135deg, #0c4a6e 0%, #0e7490 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.01em; line-height: 1;
        }

        .lms-logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem; font-weight: 300;
          color: #94a3b8; letter-spacing: 0.12em;
          text-transform: uppercase; margin-top: 2px;
          -webkit-text-fill-color: #94a3b8;
        }

        /* ── CENTER PILL ──────────────────────── */
        .lms-nav-pill {
          position: absolute; left: 50%; transform: translateX(-50%);
          display: flex; align-items: center; gap: 2px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 100px; padding: 4px;
          backdrop-filter: blur(12px);
          box-shadow: 0 2px 12px rgba(14,116,144,0.06), 0 0 0 1px rgba(255,255,255,0.8) inset;
        }

        .lms-nav-link {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 100px;
          text-decoration: none;
          font-size: 0.8rem; font-weight: 500;
          color: var(--inactive-text);
          letter-spacing: 0.01em;
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap; position: relative;
        }

        .lms-nav-link:hover {
          color: var(--hover-text);
          background: rgba(14, 116, 144, 0.06);
        }

        .lms-nav-link.active {
          color: var(--active-text);
          background: var(--active-bg);
          font-weight: 500;
        }

        .lms-nav-link svg { flex-shrink: 0; opacity: 0.7; transition: opacity 0.2s ease; }
        .lms-nav-link:hover svg, .lms-nav-link.active svg { opacity: 1; }

        /* ── AUTH ─────────────────────────────── */
        .lms-auth { display: flex; align-items: center; flex-shrink: 0; z-index: 1; }

        .lms-signup-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 18px; border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 500;
          letter-spacing: 0.01em; cursor: pointer;
          border: 1.5px solid rgba(14, 116, 144, 0.3);
          color: var(--accent);
          background: rgba(240, 249, 255, 0.7);
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }

        .lms-signup-btn:hover {
          background: var(--accent); color: #fff;
          border-color: var(--accent);
          box-shadow: 0 4px 18px rgba(14, 116, 144, 0.28);
          transform: translateY(-1px);
        }

        .lms-signup-btn:active { transform: translateY(0); }

        .lms-user-btn {
          display: flex; align-items: center;
          padding: 3px; border-radius: 50%;
          border: 2px solid rgba(14, 116, 144, 0.2);
          transition: border-color 0.2s ease;
        }

        .lms-user-btn:hover { border-color: var(--accent); }
      `}),f.jsx("nav",{className:["lms-navbar",b?"":"hidden",m?"scrolled":""].filter(Boolean).join(" "),children:f.jsxs("div",{className:"lms-inner",children:[f.jsxs(St,{to:"/",className:"lms-logo",children:[f.jsx("div",{className:"lms-logo-icon",children:f.jsx(zn,{size:18,color:"#fff"})}),f.jsxs("div",{children:[f.jsx("div",{className:"lms-logo-text",children:"LMS"}),f.jsx("div",{className:"lms-logo-sub",children:"Learning Platform"})]})]}),f.jsx("div",{className:"lms-nav-pill",children:Bj.map(v=>{const E=v.icon;return f.jsxs(St,{to:v.href,className:({isActive:M})=>`lms-nav-link${M?" active":""}`,children:[f.jsx(E,{size:14}),f.jsx("span",{children:v.name})]},v.name)})}),f.jsx("div",{className:"lms-auth",children:r?f.jsx("div",{className:"lms-user-btn",children:f.jsx($g,{afterSignOutUrl:"/"})}):f.jsx("button",{type:"button",onClick:()=>a({}),className:"lms-signup-btn",children:f.jsx("span",{children:"Create Account"})})})]})})]})},qj=[{name:"Twitter",Icon:F1,href:"#",color:"#1da1f2",bg:"rgba(29,161,242,0.12)"},{name:"Instagram",Icon:$5,href:"https://www.instagram.com/mr.sushant_pathak?igsh=Z2p1cmp4amFmdmcy",color:"#e1306c",bg:"rgba(225,48,108,0.12)"},{name:"LinkedIn",Icon:H1,href:"https://www.linkedin.com/in/sushant-ranjan-8926b8323?utm_source=share_via&utm_content=profile&utm_medium=member_android",color:"#0a66c2",bg:"rgba(10,102,194,0.12)"},{name:"YouTube",Icon:kj,href:"#",color:"#ff0000",bg:"rgba(255,0,0,0.10)"}],Yj=[{heading:"Platform",icon:tt,links:[{label:"Browse Courses",to:"/courses"},{label:"Meet Faculty",to:"/faculty"},{label:"About Us",to:"/about"},{label:"Contact",to:"/contact"},{label:"Become Instructor",to:"/faculty"}]},{heading:"Community",icon:qa,links:[{label:"Student Stories",to:"/about"},{label:"Events & Webinars",to:"/contact"},{label:"Blog & Articles",to:"/"},{label:"Career Resources",to:"/"},{label:"Referral Program",to:"/"}]},{heading:"Support",icon:K5,links:[{label:"Help Center",to:"/"},{label:"FAQs",to:"/"},{label:"Privacy Policy",to:"/"},{label:"Terms of Service",to:"/"},{label:"Cookie Settings",to:"/"}]}],Vj=[{Icon:eo,value:"sushantpathak2028@gmail.com",href:"mailto:hello@learnhub.in"},{Icon:Yd,value:"+91 705079 04068",href:"tel:+917050794068"},{Icon:Y1,value:"Rajkot, Gujarat, India",href:null}],Pj=[{value:"12K+",label:"Students"},{value:"240+",label:"Courses"},{value:"94%",label:"Success Rate"},{value:"58",label:"Countries"}],Gj=()=>{const[a,r]=S.useState(""),[s,o]=S.useState("idle"),[i,d]=S.useState(""),h=m=>{if(m.preventDefault(),!a.trim()){d("Please enter your email.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)){d("Please enter a valid email.");return}d(""),o("loading"),setTimeout(()=>{o("success"),r("")},1e3)};return f.jsxs("div",{className:"ft-newsletter",children:[f.jsxs("p",{className:"ft-newsletter-label",children:[f.jsx(G1,{size:12})," Stay in the loop"]}),f.jsx("p",{className:"ft-newsletter-sub",children:"Get new course announcements, tips and career insights — no spam, ever."}),s==="success"?f.jsxs("div",{className:"ft-newsletter-success",children:[f.jsx(qd,{size:14,fill:"#0e7490",color:"#0e7490"}),"You're subscribed! Thanks for joining."]}):f.jsxs("form",{onSubmit:h,noValidate:!0,className:"ft-newsletter-form",children:[f.jsxs("div",{className:"ft-newsletter-input-wrap",children:[f.jsx(eo,{size:13,className:"ft-newsletter-icon"}),f.jsx("input",{type:"email",value:a,onChange:m=>{r(m.target.value),d("")},placeholder:"your@email.com",className:"ft-newsletter-input","aria-label":"Email address",disabled:s==="loading"})]}),i&&f.jsx("p",{className:"ft-newsletter-error",children:i}),f.jsx("button",{type:"submit",className:"ft-newsletter-btn",disabled:s==="loading",children:s==="loading"?f.jsx("span",{className:"ft-spinner"}):f.jsxs(f.Fragment,{children:[f.jsx(Lr,{size:14})," Subscribe"]})})]})]})},Xj=()=>{const a=new Date().getFullYear();return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-mid:    #0891b2;
          --cyan-light:  #67e8f9;
          --cyan-dark:   #0a5c73;
          --slate:       #94a3b8;
          --slate-dim:   #64748b;
          --border:      rgba(255,255,255,0.07);
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
        }

        /* ── ROOT ──────────────────────────────────────── */
        .ft-root {
          background: #050f1a;
          font-family: var(--ff-body);
          position: relative;
          overflow: hidden;
        }

        /* ── BACKGROUND ────────────────────────────────── */
        .ft-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* FIX: Grid uses cyan palette — not purple/indigo */
        .ft-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(14,116,144,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,116,144,0.06) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .ft-bg-glow-1 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14,116,144,0.12) 0%, transparent 70%);
          top: -180px; left: -100px;
        }

        .ft-bg-glow-2 {
          position: absolute;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%);
          bottom: 0; right: 0;
        }

        /* ── STATS BAND ────────────────────────────────── */
        .ft-stats-band {
          position: relative;
          z-index: 1;
          border-bottom: 1px solid var(--border);
        }

        .ft-stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 28px 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .ft-stat-item {
          text-align: center;
          padding: 8px 0;
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .ft-stat-item:last-child { border-right: none; }
        .ft-stat-item:hover { background: rgba(14,116,144,0.05); }

        .ft-stat-val {
          font-family: var(--ff-display);
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--cyan-light);
          line-height: 1;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }

        .ft-stat-lbl {
          font-size: 0.68rem;
          color: var(--slate);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 400;
        }

        /* ── MAIN BODY ─────────────────────────────────── */
        .ft-body {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px 40px;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 64px;
        }

        /* ── LEFT COLUMN ───────────────────────────────── */
        .ft-left {}

        .ft-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          text-decoration: none;
        }

        .ft-brand-icon {
          width: 38px; height: 38px;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 14px rgba(14,116,144,0.35);
        }

        .ft-brand-name {
          font-family: var(--ff-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .ft-brand-tagline {
          font-size: 0.6rem;
          font-weight: 300;
          color: var(--slate);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 1px;
        }

        .ft-desc {
          font-size: 0.84rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 24px;
          max-width: 280px;
        }

        /* Contact items */
        .ft-contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .ft-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--slate);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.18s;
        }
        .ft-contact-item:hover { color: var(--cyan-light); }

        .ft-contact-icon {
          width: 28px; height: 28px;
          border-radius: 7px;
          background: rgba(14,116,144,0.12);
          border: 1px solid rgba(14,116,144,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: var(--cyan-mid);
        }

        /* Social icons */
        /* FIX: bg color set via inline style from data — not raw Tailwind className */
        .ft-socials {
          display: flex;
          gap: 9px;
          margin-bottom: 32px;
        }

        .ft-social-btn {
          width: 36px; height: 36px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
        }

        .ft-social-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.18);
        }

        /* Tooltip */
        .ft-social-tooltip {
          position: absolute;
          bottom: calc(100% + 7px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255,255,255,0.9);
          color: #0c1a2e;
          font-size: 0.65rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 5px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease;
          font-family: var(--ff-body);
        }

        .ft-social-tooltip::after {
          content: '';
          position: absolute;
          top: 100%; left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: rgba(255,255,255,0.9);
        }

        .ft-social-btn:hover .ft-social-tooltip { opacity: 1; }

        /* Newsletter */
        .ft-newsletter {
          background: rgba(14,116,144,0.07);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 12px;
          padding: 18px 16px;
        }

        .ft-newsletter-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--cyan-mid);
          text-transform: uppercase;
          letter-spacing: 0.09em;
          margin-bottom: 5px;
        }

        .ft-newsletter-sub {
          font-size: 0.76rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.55;
          margin-bottom: 12px;
        }

        .ft-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ft-newsletter-input-wrap {
          position: relative;
        }

        .ft-newsletter-icon {
          position: absolute;
          left: 11px; top: 50%;
          transform: translateY(-50%);
          color: var(--slate-dim);
          pointer-events: none;
        }

        .ft-newsletter-input {
          width: 100%;
          padding: 9px 12px 9px 32px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--white);
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .ft-newsletter-input::placeholder { color: var(--slate-dim); }
        .ft-newsletter-input:focus {
          border-color: rgba(14,116,144,0.5);
          background: rgba(255,255,255,0.08);
        }
        .ft-newsletter-input:disabled { opacity: 0.6; cursor: not-allowed; }

        .ft-newsletter-error {
          font-size: 0.71rem;
          color: #f87171;
          font-weight: 300;
        }

        .ft-newsletter-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 16px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          color: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 3px 12px rgba(14,116,144,0.3);
        }
        .ft-newsletter-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(14,116,144,0.4);
        }
        .ft-newsletter-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .ft-newsletter-success {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.8rem;
          color: var(--cyan-light);
          font-weight: 400;
          padding: 8px 0;
        }

        .ft-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.25);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── RIGHT COLUMN — LINK GRID ──────────────────── */
        .ft-right {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .ft-link-group {}

        .ft-link-heading {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }

        .ft-link-heading-icon {
          width: 22px; height: 22px;
          background: rgba(14,116,144,0.15);
          border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          color: var(--cyan-mid);
          flex-shrink: 0;
        }

        .ft-link-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
          list-style: none;
        }

        .ft-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--slate);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.18s ease, gap 0.18s ease;
          line-height: 1;
        }

        .ft-link:hover {
          color: var(--cyan-light);
          gap: 10px;
        }

        .ft-link-arrow {
          opacity: 0;
          transition: opacity 0.18s ease;
          flex-shrink: 0;
          color: var(--cyan-mid);
        }

        .ft-link:hover .ft-link-arrow { opacity: 1; }

        /* ── DIVIDER ───────────────────────────────────── */
        .ft-divider {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          height: 1px;
          background: var(--border);
        }

        /* ── BOTTOM BAR ────────────────────────────────── */
        .ft-bottom {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .ft-copyright {
          font-size: 0.76rem;
          color: var(--slate-dim);
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .ft-copyright span {
          color: var(--cyan-mid);
          font-weight: 500;
        }

        .ft-bottom-links {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ft-bottom-link {
          font-size: 0.74rem;
          color: var(--slate-dim);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.18s;
        }
        .ft-bottom-link:hover { color: var(--cyan-light); }

        .ft-made-with {
          font-size: 0.72rem;
          color: var(--slate-dim);
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 1024px) {
          .ft-body {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ft-desc { max-width: 100%; }
          .ft-newsletter { max-width: 420px; }
        }

        @media (max-width: 640px) {
          .ft-right { grid-template-columns: 1fr 1fr; }
          .ft-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .ft-stat-item:nth-child(2) { border-right: none; }
          .ft-bottom { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 400px) {
          .ft-right { grid-template-columns: 1fr; }
        }
      `}),f.jsxs("footer",{className:"ft-root",role:"contentinfo",children:[f.jsxs("div",{className:"ft-bg","aria-hidden":"true",children:[f.jsx("div",{className:"ft-bg-grid"}),f.jsx("div",{className:"ft-bg-glow-1"}),f.jsx("div",{className:"ft-bg-glow-2"})]}),f.jsx("div",{className:"ft-stats-band",children:f.jsx("div",{className:"ft-stats-inner",children:Pj.map(({value:r,label:s})=>f.jsxs("div",{className:"ft-stat-item",children:[f.jsx("div",{className:"ft-stat-val",children:r}),f.jsx("div",{className:"ft-stat-lbl",children:s})]},s))})}),f.jsxs("div",{className:"ft-body",children:[f.jsxs("div",{className:"ft-left",children:[f.jsxs(St,{to:"/",className:"ft-brand",children:[f.jsx("div",{className:"ft-brand-icon",children:f.jsx(zn,{size:18,color:"#fff"})}),f.jsxs("div",{children:[f.jsx("div",{className:"ft-brand-name",children:"LearnHub"}),f.jsx("div",{className:"ft-brand-tagline",children:"Learning Platform"})]})]}),f.jsx("p",{className:"ft-desc",children:"Empowering 12,000+ learners across 58 countries with expert-led courses in development, design, data & marketing."}),f.jsx("div",{className:"ft-contact-list",children:Vj.map(({Icon:r,value:s,href:o})=>o?f.jsxs("a",{href:o,className:"ft-contact-item",children:[f.jsx("div",{className:"ft-contact-icon",children:f.jsx(r,{size:13})}),s]},s):f.jsxs("div",{className:"ft-contact-item",children:[f.jsx("div",{className:"ft-contact-icon",children:f.jsx(r,{size:13})}),s]},s))}),f.jsx("div",{className:"ft-socials",children:qj.map(({name:r,Icon:s,href:o,color:i,bg:d})=>f.jsxs("a",{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":r,className:"ft-social-btn",style:{background:d},children:[f.jsx(s,{size:15,color:i}),f.jsx("span",{className:"ft-social-tooltip",children:r})]},r))}),f.jsx(Gj,{})]}),f.jsx("div",{className:"ft-right",children:Yj.map(({heading:r,icon:s,links:o})=>f.jsxs("div",{className:"ft-link-group",children:[f.jsxs("div",{className:"ft-link-heading",children:[f.jsx("div",{className:"ft-link-heading-icon",children:f.jsx(s,{size:12})}),r]}),f.jsx("ul",{className:"ft-link-list",children:o.map(({label:i,to:d})=>f.jsx("li",{children:f.jsxs(St,{to:d,className:"ft-link",children:[f.jsx(Ts,{size:11,className:"ft-link-arrow"}),i]})},i))})]},r))})]}),f.jsx("div",{className:"ft-divider"}),f.jsxs("div",{className:"ft-bottom",children:[f.jsxs("p",{className:"ft-copyright",children:["© ",a," ",f.jsx("span",{children:"LearnHub"}),". All rights reserved."]}),f.jsx("nav",{className:"ft-bottom-links","aria-label":"Legal links",children:["Privacy Policy","Terms of Service","Cookie Policy","Sitemap"].map(r=>f.jsx(St,{to:"/",className:"ft-bottom-link",children:r},r))}),f.jsxs("p",{className:"ft-made-with",children:["Made with ",f.jsx(qd,{size:11,fill:"#0e7490",color:"#0e7490"})," in India"]})]})]})]})},Fj=["All","Development","Design","Data","Marketing"],Kj=["All Levels","Beginner","Intermediate","Advanced"],Ra=8,Rs=a=>a.isFree||!a.price||a.price.original==null&&a.price.sale==null||a.price.original===0,Tr=a=>{if(Rs(a))return{type:"free"};const{original:r,sale:s}=a.price??{};return s!=null?{type:"sale",current:`₹${s}`,original:r>s?`₹${r}`:null}:r!=null?{type:"paid",current:`₹${r}`,original:null}:{type:"free"}},ng={Development:{bg:"#1e3a5f",accent:"#38bdf8",dot:"#0ea5e9"},Design:{bg:"#3b1f5e",accent:"#c084fc",dot:"#a855f7"},Data:{bg:"#1a3d2e",accent:"#34d399",dot:"#10b981"},Marketing:{bg:"#3d1f1f",accent:"#fb923c",dot:"#f97316"},default:{bg:"#1e293b",accent:"#94a3b8",dot:"#64748b"}},Qj=a=>ng[a]||ng.default;function Zj(){const a=Vr(),{user:r}=Rl(),[s,o]=S.useState([]),[i,d]=S.useState(!0),[h,m]=S.useState(null),[g,b]=S.useState(""),[x,v]=S.useState("All"),[E,M]=S.useState("All Levels"),[k,N]=S.useState("popularity"),[_,X]=S.useState(!1),[U,q]=S.useState(Ra),F=S.useCallback(async()=>{try{d(!0),m(null);const $=new URLSearchParams;g&&$.append("search",g),x!=="All"&&$.append("category",x),E!=="All Levels"&&$.append("level",E),k&&$.append("sort",k);const re=await As.getAll(Object.fromEntries($));o(Array.isArray(re)?re:re.courses||[])}catch($){console.error("Error fetching courses:",$),m("Failed to load courses. Please try again."),o([])}finally{d(!1)}},[g,x,E,k]);S.useEffect(()=>{F()},[F]);const H=($,re)=>{if(!r){a("/sign-in");return}a(re?`/courses/${$}`:`/payment/${$}`)},Z=()=>q($=>$+Ra),V=()=>{b(""),v("All"),M("All Levels"),N("popularity"),q(Ra)},ae=[...s.filter($=>{const re=$.title?.toLowerCase().includes(g.toLowerCase())||$.description?.toLowerCase().includes(g.toLowerCase()),he=x==="All"||$.category?.toLowerCase()===x.toLowerCase(),R=E==="All Levels"||$.level?.toLowerCase()===E.toLowerCase();return re&&he&&R})].sort(($,re)=>{switch(k){case"price-low":return(Tr($).current?.replace("₹","")||0)-(Tr(re).current?.replace("₹","")||0);case"price-high":return(Tr(re).current?.replace("₹","")||0)-(Tr($).current?.replace("₹","")||0);case"rating":return(re.rating||0)-($.rating||0);case"newest":return new Date(re.createdAt)-new Date($.createdAt);default:return(re.enrollmentCount||0)-($.enrollmentCount||0)}}),je=ae.slice(0,U),xe=U<ae.length,me=(x!=="All"?1:0)+(E!=="All Levels"?1:0);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:        #080e1a;
          --surface:   #0d1525;
          --surface2:  #111d30;
          --border:    rgba(148,163,184,0.08);
          --border2:   rgba(148,163,184,0.14);
          --text:      #e2e8f0;
          --muted:     #64748b;
          --accent:    #38bdf8;
          --accent2:   #818cf8;
          --green:     #34d399;
          --ff-head:   'Syne', sans-serif;
          --ff-body:   'DM Sans', sans-serif;
          --radius:    16px;
          --card-r:    20px;
        }

        .cdp-root {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          color: var(--text);
          position: relative;
          overflow-x: hidden;
        }

        /* ── NOISE OVERLAY ── */
        .cdp-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        /* ── HERO ── */
        .cdp-hero {
          position: relative;
          padding: 72px 24px 48px;
          text-align: center;
          overflow: hidden;
        }

        .cdp-hero-glow {
          position: absolute;
          top: -60px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .cdp-hero-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border: 1px solid rgba(56,189,248,0.25);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 20px;
          background: rgba(56,189,248,0.06);
        }

        .cdp-hero-title {
          font-family: var(--ff-head);
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #f1f5f9;
          margin-bottom: 14px;
        }

        .cdp-hero-title span {
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cdp-hero-sub {
          font-size: 0.95rem;
          color: var(--muted);
          font-weight: 300;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── STICKY TOOLBAR ── */
        .cdp-toolbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(8,14,26,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 14px 24px;
        }

        .cdp-toolbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cdp-search-wrap {
          flex: 1;
          position: relative;
        }

        .cdp-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--muted);
        }

        .cdp-search {
          width: 100%;
          padding: 11px 14px 11px 42px;
          background: var(--surface2);
          border: 1.5px solid var(--border2);
          border-radius: 12px;
          font-family: var(--ff-body);
          font-size: 0.875rem;
          color: var(--text);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .cdp-search::placeholder { color: var(--muted); }

        .cdp-search:focus {
          border-color: rgba(56,189,248,0.4);
          box-shadow: 0 0 0 3px rgba(56,189,248,0.08);
        }

        .cdp-filter-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 16px;
          background: var(--surface2);
          border: 1.5px solid var(--border2);
          border-radius: 12px;
          color: var(--text);
          font-family: var(--ff-body);
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .cdp-filter-btn:hover { border-color: rgba(56,189,248,0.3); background: var(--surface); }
        .cdp-filter-btn.active { border-color: rgba(56,189,248,0.5); color: var(--accent); }

        .cdp-filter-badge {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: var(--accent);
          color: #080e1a;
          font-size: 0.65rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── FILTER PANEL ── */
        .cdp-filters {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease, padding 0.35s ease;
        }

        .cdp-filters.open {
          max-height: 200px;
        }

        .cdp-filters-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 14px;
          align-items: end;
        }

        .cdp-filter-group label {
          display: block;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 8px;
        }

        .cdp-select {
          width: 100%;
          padding: 9px 32px 9px 12px;
          background: var(--surface2);
          border: 1.5px solid var(--border2);
          border-radius: 10px;
          font-family: var(--ff-body);
          font-size: 0.82rem;
          color: var(--text);
          outline: none;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
          transition: border-color 0.2s;
        }

        .cdp-select:focus { border-color: rgba(56,189,248,0.4); }
        .cdp-select option { background: #0d1525; }

        .cdp-reset-btn {
          width: 100%;
          padding: 10px 16px;
          background: transparent;
          border: 1.5px solid var(--border2);
          border-radius: 10px;
          font-family: var(--ff-body);
          font-size: 0.82rem;
          color: var(--muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .cdp-reset-btn:hover { border-color: rgba(239,68,68,0.4); color: #f87171; }

        /* ── CATEGORY PILLS ── */
        .cdp-pills {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 24px 0;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cdp-pill {
          padding: 6px 16px;
          border-radius: 100px;
          border: 1.5px solid var(--border2);
          background: transparent;
          font-family: var(--ff-body);
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }

        .cdp-pill:hover { border-color: var(--border2); color: var(--text); background: var(--surface2); }

        .cdp-pill.active {
          background: linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15));
          border-color: rgba(56,189,248,0.4);
          color: var(--accent);
        }

        /* ── MAIN ── */
        .cdp-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 28px 24px 64px;
          position: relative;
          z-index: 1;
        }

        .cdp-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .cdp-meta-count {
          font-family: var(--ff-head);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        .cdp-meta-count strong { color: var(--text); }

        /* ── GRID ── */
        .cdp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
          gap: 20px;
        }

        /* ── CARD ── */
        .cdp-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--card-r);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
        }

        .cdp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(56,189,248,0.15);
          border-color: rgba(56,189,248,0.2);
        }

        /* Card thumbnail */
        .cdp-card-thumb {
          position: relative;
          height: 160px;
          overflow: hidden;
        }

        .cdp-card-thumb-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cdp-card:hover .cdp-card-thumb-bg { transform: scale(1.06); }

        .cdp-card-thumb-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
        }

        .cdp-free-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 4px 10px;
          background: rgba(52,211,153,0.15);
          border: 1px solid rgba(52,211,153,0.4);
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--green);
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }

        /* Card body */
        .cdp-card-body { padding: 18px; }

        .cdp-card-cat {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .cdp-card-cat-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
        }

        .cdp-card-title {
          font-family: var(--ff-head);
          font-size: 0.95rem;
          font-weight: 700;
          color: #f1f5f9;
          line-height: 1.4;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s;
        }

        .cdp-card:hover .cdp-card-title { color: var(--accent); }

        .cdp-card-stars {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-bottom: 10px;
        }

        .cdp-card-star { width: 12px; height: 12px; }
        .cdp-card-star.filled { color: #fbbf24; fill: #fbbf24; }
        .cdp-card-star.empty  { color: #1e293b;  fill: #1e293b; }

        .cdp-card-enroll-count {
          font-size: 0.72rem;
          color: var(--muted);
          margin-left: 4px;
        }

        .cdp-card-instructor {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--muted);
          margin-bottom: 14px;
        }

        /* Card footer */
        .cdp-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-top: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
        }

        .cdp-price-free {
          font-family: var(--ff-head);
          font-size: 1rem;
          font-weight: 700;
          color: var(--green);
        }

        .cdp-price-paid {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .cdp-price-current {
          font-family: var(--ff-head);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
        }

        .cdp-price-original {
          font-size: 0.78rem;
          color: var(--muted);
          text-decoration: line-through;
        }

        .cdp-enroll-btn {
          padding: 8px 18px;
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          border: none;
          border-radius: 10px;
          font-family: var(--ff-body);
          font-size: 0.78rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 14px rgba(14,165,233,0.25);
        }

        .cdp-enroll-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(14,165,233,0.4);
        }

        /* ── STATES ── */
        .cdp-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          gap: 16px;
        }

        .cdp-loading-text {
          font-size: 0.85rem;
          color: var(--muted);
          font-weight: 300;
          letter-spacing: 0.04em;
        }

        .cdp-error {
          margin-bottom: 28px;
          padding: 16px 20px;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 14px;
          color: #fca5a5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-size: 0.85rem;
        }

        .cdp-retry-btn {
          padding: 7px 16px;
          background: rgba(239,68,68,0.15);
          border: 1px solid rgba(239,68,68,0.3);
          border-radius: 8px;
          color: #fca5a5;
          font-family: var(--ff-body);
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s;
        }

        .cdp-retry-btn:hover { background: rgba(239,68,68,0.25); }

        .cdp-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          gap: 14px;
          text-align: center;
        }

        .cdp-empty-icon {
          width: 64px; height: 64px;
          border-radius: 20px;
          background: var(--surface2);
          border: 1px solid var(--border2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }

        .cdp-empty-title {
          font-family: var(--ff-head);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text);
        }

        .cdp-empty-sub {
          font-size: 0.85rem;
          color: var(--muted);
          font-weight: 300;
        }

        /* ── LOAD MORE ── */
        .cdp-load-wrap {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .cdp-load-btn {
          padding: 13px 36px;
          background: var(--surface2);
          border: 1.5px solid var(--border2);
          border-radius: 100px;
          font-family: var(--ff-body);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text);
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.02em;
        }

        .cdp-load-btn:hover {
          border-color: rgba(56,189,248,0.4);
          color: var(--accent);
          background: rgba(56,189,248,0.06);
        }

        /* ── SKELETON ── */
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }

        .cdp-skeleton {
          background: linear-gradient(90deg, var(--surface2) 25%, rgba(255,255,255,0.04) 50%, var(--surface2) 75%);
          background-size: 600px 100%;
          animation: shimmer 1.6s infinite;
          border-radius: 8px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .cdp-hero { padding: 48px 16px 32px; }
          .cdp-toolbar { padding: 12px 16px; }
          .cdp-main { padding: 20px 16px 48px; }
          .cdp-pills { padding: 16px 16px 0; }
          .cdp-grid { grid-template-columns: 1fr; }
        }

        /* ── CARD ANIM ── */
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cdp-card { animation: cardIn 0.4s ease both; }
        .cdp-card:nth-child(1) { animation-delay: 0.04s; }
        .cdp-card:nth-child(2) { animation-delay: 0.08s; }
        .cdp-card:nth-child(3) { animation-delay: 0.12s; }
        .cdp-card:nth-child(4) { animation-delay: 0.16s; }
        .cdp-card:nth-child(5) { animation-delay: 0.20s; }
        .cdp-card:nth-child(6) { animation-delay: 0.24s; }
        .cdp-card:nth-child(7) { animation-delay: 0.28s; }
        .cdp-card:nth-child(8) { animation-delay: 0.32s; }
      `}),f.jsxs("div",{className:"cdp-root",children:[f.jsxs("div",{className:"cdp-hero",children:[f.jsx("div",{className:"cdp-hero-glow"}),f.jsxs("div",{className:"cdp-hero-label",children:[f.jsx(tt,{size:11}),"Course Catalog"]}),f.jsxs("h1",{className:"cdp-hero-title",children:["Expand Your ",f.jsx("span",{children:"Knowledge"})]}),f.jsx("p",{className:"cdp-hero-sub",children:"Explore our curated library of courses — from beginner fundamentals to advanced specializations."})]}),f.jsx("div",{className:"cdp-toolbar",children:f.jsxs("div",{className:"cdp-toolbar-inner",children:[f.jsxs("div",{className:"cdp-search-wrap",children:[f.jsx(gd,{size:16,className:"cdp-search-icon"}),f.jsx("input",{type:"text",placeholder:"Search courses, topics, instructors…",value:g,onChange:$=>{b($.target.value),q(Ra)},className:"cdp-search"})]}),f.jsxs("button",{onClick:()=>X(!_),className:`cdp-filter-btn ${_||me>0?"active":""}`,children:[f.jsx(mj,{size:14}),"Filters",me>0&&f.jsx("span",{className:"cdp-filter-badge",children:me})]})]})}),f.jsx("div",{className:`cdp-filters ${_?"open":""}`,children:f.jsxs("div",{className:"cdp-filters-inner",children:[f.jsxs("div",{className:"cdp-filter-group",children:[f.jsx("label",{children:"Level"}),f.jsx("select",{className:"cdp-select",value:E,onChange:$=>{M($.target.value),q(Ra)},children:Kj.map($=>f.jsx("option",{value:$,children:$},$))})]}),f.jsxs("div",{className:"cdp-filter-group",children:[f.jsx("label",{children:"Sort By"}),f.jsxs("select",{className:"cdp-select",value:k,onChange:$=>{N($.target.value),q(Ra)},children:[f.jsx("option",{value:"popularity",children:"Popularity"}),f.jsx("option",{value:"newest",children:"Newest"}),f.jsx("option",{value:"rating",children:"Rating"}),f.jsx("option",{value:"price-low",children:"Price: Low → High"}),f.jsx("option",{value:"price-high",children:"Price: High → Low"})]})]}),f.jsxs("div",{className:"cdp-filter-group",children:[f.jsx("label",{children:" "}),f.jsxs("button",{onClick:V,className:"cdp-reset-btn",children:[f.jsx(yd,{size:13})," Reset all"]})]})]})}),f.jsx("div",{className:"cdp-pills",children:Fj.map($=>f.jsx("button",{className:`cdp-pill ${x===$?"active":""}`,onClick:()=>{v($),q(Ra)},children:$},$))}),f.jsxs("div",{className:"cdp-main",children:[h&&f.jsxs("div",{className:"cdp-error",children:[f.jsx("span",{children:h}),f.jsx("button",{onClick:F,className:"cdp-retry-btn",children:"Retry"})]}),!i&&f.jsx("div",{className:"cdp-meta",children:f.jsxs("p",{className:"cdp-meta-count",children:["Showing ",f.jsx("strong",{children:je.length})," of ",f.jsx("strong",{children:ae.length})," courses"]})}),i&&f.jsxs("div",{className:"cdp-loading",children:[f.jsx(q1,{size:28,color:"#38bdf8",style:{animation:"spin 0.8s linear infinite"}}),f.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"}),f.jsx("span",{className:"cdp-loading-text",children:"Loading courses…"})]}),!i&&je.length>0&&f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"cdp-grid",children:je.map($=>{const re=Qj($.category),he=Tr($);return f.jsxs("div",{className:"cdp-card",children:[f.jsxs("div",{className:"cdp-card-thumb",style:{background:`linear-gradient(135deg, ${re.bg}, #0d1525)`},children:[$.thumbnail?f.jsx("img",{src:$.thumbnail,alt:$.title,className:"cdp-card-thumb-bg"}):f.jsx("div",{className:"cdp-card-thumb-placeholder",style:{background:`linear-gradient(135deg, ${re.bg}, #080e1a)`},children:f.jsx(tt,{size:36,color:re.accent,style:{opacity:.4}})}),Rs($)&&f.jsx("div",{className:"cdp-free-badge",children:"Free"})]}),f.jsxs("div",{className:"cdp-card-body",children:[$.category&&f.jsxs("div",{className:"cdp-card-cat",style:{color:re.accent},children:[f.jsx("span",{className:"cdp-card-cat-dot",style:{background:re.dot}}),$.category]}),f.jsx("h3",{className:"cdp-card-title",children:$.title}),$.rating&&f.jsxs("div",{className:"cdp-card-stars",children:[[...Array(5)].map((R,I)=>f.jsx(Nn,{className:`cdp-card-star ${I<Math.floor($.rating)?"filled":"empty"}`},I)),f.jsxs("span",{className:"cdp-card-enroll-count",children:["(",$.enrollmentCount||0,")"]})]}),$.instructor&&f.jsxs("div",{className:"cdp-card-instructor",children:[f.jsx(K1,{size:12}),f.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:$.instructor})]})]}),f.jsxs("div",{className:"cdp-card-footer",children:[he.type==="free"?f.jsx("span",{className:"cdp-price-free",children:"Free"}):f.jsxs("div",{className:"cdp-price-paid",children:[f.jsx("span",{className:"cdp-price-current",children:he.current}),he.original&&f.jsx("span",{className:"cdp-price-original",children:he.original})]}),f.jsx("button",{className:"cdp-enroll-btn",onClick:()=>H($._id,Rs($)),children:Rs($)?"Enroll Free":"Buy Now"})]})]},$._id)})}),xe&&f.jsx("div",{className:"cdp-load-wrap",children:f.jsx("button",{className:"cdp-load-btn",onClick:Z,children:"Load more courses"})})]}),!i&&je.length===0&&f.jsxs("div",{className:"cdp-empty",children:[f.jsx("div",{className:"cdp-empty-icon",children:f.jsx(tt,{size:28,color:"#334155"})}),f.jsx("p",{className:"cdp-empty-title",children:"No courses found"}),f.jsx("p",{className:"cdp-empty-sub",children:"Try adjusting your filters or search term."})]})]})]})]})}const Rr=a=>{if(!a&&a!==0)return"--";const r=Math.floor(a/60),s=a%60;return r>0?`${r}h ${s}m`:`${s}m`},Fu=a=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(a),Ij=a=>{if(!a)return"";try{const r=String(a).trim();if(/\/embed\//.test(r))return r;const s=r.match(/[?&]v=([^&#]+)/);if(s?.[1])return`https://www.youtube.com/embed/${s[1]}`;const o=r.match(/youtu\.be\/([^?&#/]+)/);if(o?.[1])return`https://www.youtube.com/embed/${o[1]}`;if(/drive\.google\.com/.test(r)){const i=r.match(/\/file\/d\/([^/]+)/);if(i?.[1])return`https://drive.google.com/file/d/${i[1]}/preview`}return r}catch{return a}},$j=a=>!!(a&&/\.(mp4|webm|ogg)(\?.*)?$/i.test(a)),Jj=({toast:a,onDismiss:r})=>a?f.jsx("div",{onClick:r,style:{position:"fixed",top:80,right:20,zIndex:9999,padding:"12px 20px",borderRadius:"10px",background:a.type==="error"?"#ef4444":"#0e7490",color:"#fff",fontSize:"0.85rem",fontWeight:500,boxShadow:"0 8px 24px rgba(0,0,0,0.18)",cursor:"pointer",animation:"slideInRight 0.3s ease",maxWidth:320},children:a.message}):null,Wj=()=>{const{id:a}=bg(),r=Vr(),{isSignedIn:s,user:o}=Rl(),[i,d]=S.useState(null),[h,m]=S.useState(!0),[g,b]=S.useState(null),[x,v]=S.useState(!1),[E,M]=S.useState(!1),[k,N]=S.useState(null),[_,X]=S.useState(new Set),[U,q]=S.useState(new Set),[F,H]=S.useState({type:null,lectureId:null,chapterId:null});S.useEffect(()=>{(async()=>{try{m(!0);const W=await As.getById(a);d(W)}catch(W){console.error("Error fetching course:",W),b("Course not found or failed to load.")}finally{m(!1)}})()},[a]),S.useEffect(()=>{if(!s||!o||!a)return;(async()=>{try{const W=await As.checkEnrollment(a,o.id);v(W.isEnrolled)}catch(W){console.error("Error checking enrollment:",W)}})()},[s,o,a]);const Z=S.useCallback((Q,W="error")=>{N({message:Q,type:W}),setTimeout(()=>N(null),3500)},[]),V=i?.isFree||!i?.price||i?.price?.original===0,le=i?.price?.original??null,ae=i?.price?.sale??null,je=le!=null&&ae!=null&&ae<le,xe=S.useMemo(()=>(i?.lectures||[]).flatMap(Q=>Q.chapters||[]),[i]),me=S.useMemo(()=>xe.reduce((Q,W)=>Q+(W.duration||W.durationMin||0),0),[xe]),$=xe.length,re=$>0?Math.round(U.size/$*100):0,he=S.useMemo(()=>(i?.lectures||[]).find(Q=>Q._id===F.lectureId||Q.id===F.lectureId),[i,F.lectureId]),R=S.useMemo(()=>F.lectureId?F.chapterId?he?.chapters?.find(Q=>Q._id===F.chapterId||Q.id===F.chapterId)??null:he??null:null,[F,he]),I=R?.videoUrl||null,te=I?Ij(I):null,Ee=$j(te),_e=S.useCallback(Q=>{if(!s){Z("Please login to access course content");return}if(!V&&!x){Z("Please enroll to access content");return}X(W=>{const se=new Set(W);return se.has(Q)?se.delete(Q):se.add(Q),se})},[s,V,x,Z]),j=S.useCallback((Q,W=null)=>{if(!s){Z("Please login to access course content");return}if(!V&&!x){Z("Please enroll to access this content");return}H({type:W?"chapter":"lecture",lectureId:Q,chapterId:W}),X(se=>{const ge=new Set(se);return ge.add(Q),ge})},[s,V,x,Z]),P=S.useCallback(Q=>{q(W=>{const se=new Set(W);return se.has(Q)?se.delete(Q):se.add(Q),se})},[]),J=S.useCallback(async()=>{if(!s){Z("Please login to enroll");return}try{M(!0),await As.enroll(a,o.id),v(!0),Z("Successfully enrolled! Start learning.","success")}catch(Q){console.error("Enrollment error:",Q),Z("Enrollment failed. Please try again.")}finally{M(!1)}},[s,o,a,Z]);return h?f.jsxs("div",{style:{minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f0f9ff"},children:[f.jsx(q1,{size:32,color:"#0e7490",style:{animation:"spin 0.8s linear infinite"}}),f.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):g||!i?f.jsxs("div",{style:{minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"DM Sans, sans-serif",gap:16,background:"#f0f9ff"},children:[f.jsx(tt,{size:40,color:"#94a3b8"}),f.jsx("p",{style:{color:"#475569",fontSize:"1rem"},children:g||"Course not found."}),f.jsx("button",{onClick:()=>r("/courses"),style:{padding:"10px 22px",background:"#0e7490",color:"#fff",border:"none",borderRadius:"100px",cursor:"pointer",fontSize:"0.85rem"},children:"Back to Courses"})]}):f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --cyan: #0e7490; --cyan-dark: #0a5c73; --cyan-mid: #0891b2;
          --teal: #0f766e; --slate: #475569; --slate-light: #94a3b8;
          --border: rgba(14,116,144,0.13); --bg: #f0f9ff; --white: #ffffff;
          --ff-display: 'Cormorant Garamond', Georgia, serif;
          --ff-body: 'DM Sans', sans-serif;
          --radius: 14px;
          --shadow: 0 2px 16px rgba(14,116,144,0.07);
          --shadow-md: 0 6px 28px rgba(14,116,144,0.11);
        }
        .cd-page { min-height: 100vh; background: var(--bg); font-family: var(--ff-body); padding-bottom: 64px; }
        .cd-hero { position: relative; height: 240px; overflow: hidden; background: var(--cyan-dark); }
        .cd-hero-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.35; }
        .cd-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(10,92,115,0.95) 40%, rgba(10,92,115,0.6) 100%); display: flex; align-items: flex-end; padding: 28px 32px; }
        .cd-hero-content { max-width: 680px; }
        .cd-back-btn { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 100px; color: rgba(255,255,255,0.85); font-size: 0.75rem; cursor: pointer; font-family: var(--ff-body); margin-bottom: 12px; transition: background 0.2s; }
        .cd-back-btn:hover { background: rgba(255,255,255,0.2); }
        .cd-hero-category { font-size: 0.68rem; font-weight: 500; color: #67e8f9; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 6px; }
        .cd-hero-title { font-family: var(--ff-display); font-size: clamp(1.4rem,3vw,2rem); font-weight: 700; color: #fff; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 10px; }
        .cd-hero-meta { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .cd-hero-meta-item { display: flex; align-items: center; gap: 5px; font-size: 0.76rem; color: rgba(255,255,255,0.75); font-weight: 300; }
        .cd-main { max-width: 1280px; margin: 28px auto 0; padding: 0 24px; display: grid; grid-template-columns: 1fr 360px; gap: 24px; align-items: start; }
        @media(max-width:1024px) { .cd-main { grid-template-columns: 1fr; } .cd-sidebar { order: -1; } }
        .cd-video-card { background: var(--white); border: 1px solid var(--border); border-radius: 18px; overflow: hidden; box-shadow: var(--shadow); margin-bottom: 20px; }
        .cd-video-frame { position: relative; width: 100%; padding-top: 56.25%; background: #0c1a2e; }
        .cd-video-frame iframe, .cd-video-frame video { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
        .cd-video-placeholder { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; background: linear-gradient(135deg, #0c1a2e 0%, #0a3d52 100%); }
        .cd-play-ring { width: 64px; height: 64px; border-radius: 50%; background: rgba(14,116,144,0.2); border: 2px solid rgba(14,116,144,0.4); display: flex; align-items: center; justify-content: center; animation: pulse 2.2s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(14,116,144,0.3)} 50%{box-shadow:0 0 0 16px rgba(14,116,144,0)} }
        .cd-video-placeholder p { color: rgba(255,255,255,0.55); font-size: 0.85rem; font-weight: 300; }
        .cd-lock-note { color: rgba(255,255,255,0.35); font-size: 0.75rem; display: flex; align-items: center; gap: 5px; }
        .cd-video-info { padding: 20px 24px; border-top: 1px solid var(--border); }
        .cd-video-title { font-family: var(--ff-display); font-size: 1.2rem; font-weight: 600; color: #0c1a2e; margin-bottom: 5px; }
        .cd-video-desc { font-size: 0.82rem; color: var(--slate-light); font-weight: 300; margin-bottom: 12px; line-height: 1.5; }
        .cd-video-chips { display: flex; gap: 8px; flex-wrap: wrap; }
        .cd-chip { display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 100px; font-size: 0.72rem; font-weight: 500; background: rgba(14,116,144,0.08); color: var(--cyan); border: 1px solid rgba(14,116,144,0.15); }
        .cd-complete-btn { display: inline-flex; align-items: center; gap: 7px; padding: 9px 20px; border-radius: 100px; border: none; font-family: var(--ff-body); font-size: 0.82rem; font-weight: 500; cursor: pointer; margin-top: 14px; transition: all 0.22s; }
        .cd-complete-btn.done   { background: rgba(15,118,110,0.1); color: var(--teal); border: 1.5px solid rgba(15,118,110,0.25); }
        .cd-complete-btn.undone { background: rgba(14,116,144,0.07); color: var(--cyan); border: 1.5px solid rgba(14,116,144,0.2); }
        .cd-sidebar { display: flex; flex-direction: column; gap: 18px; }
        .cd-card { background: var(--white); border: 1px solid var(--border); border-radius: 18px; overflow: hidden; box-shadow: var(--shadow); }
        .cd-card-header { padding: 18px 20px 14px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
        .cd-card-title { font-family: var(--ff-display); font-size: 1.05rem; font-weight: 600; color: #0c1a2e; }
        .cd-free-badge { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; background: rgba(15,118,110,0.1); border: 1px solid rgba(15,118,110,0.2); border-radius: 100px; font-size: 0.68rem; font-weight: 600; color: var(--teal); text-transform: uppercase; }
        .cd-lecture-list { padding: 8px 0; }
        .cd-lecture-item { border-bottom: 1px solid rgba(14,116,144,0.06); }
        .cd-lecture-item:last-child { border-bottom: none; }
        .cd-lecture-header { display: flex; align-items: center; justify-content: space-between; padding: 13px 18px; cursor: pointer; transition: background 0.18s; gap: 10px; user-select: none; }
        .cd-lecture-header:hover { background: rgba(14,116,144,0.04); }
        .cd-lecture-header.expanded { background: rgba(14,116,144,0.05); }
        .cd-lecture-left { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; }
        .cd-chevron { flex-shrink: 0; color: var(--slate-light); transition: transform 0.22s; }
        .cd-chevron.open { transform: rotate(180deg); }
        .cd-lecture-title { font-size: 0.85rem; font-weight: 500; color: #0c1a2e; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .cd-lecture-sub { display: flex; align-items: center; gap: 8px; font-size: 0.7rem; color: var(--slate-light); margin-top: 2px; }
        .cd-lecture-lock { flex-shrink: 0; color: var(--slate-light); }
        .cd-chapter-list { background: rgba(14,116,144,0.02); border-top: 1px solid rgba(14,116,144,0.07); }
        .cd-chapter-item { display: flex; align-items: center; justify-content: space-between; padding: 10px 18px 10px 22px; cursor: pointer; border-bottom: 1px solid rgba(14,116,144,0.05); transition: background 0.15s; gap: 10px; }
        .cd-chapter-item:last-child { border-bottom: none; }
        .cd-chapter-item:hover    { background: rgba(14,116,144,0.05); }
        .cd-chapter-item.selected { background: rgba(14,116,144,0.09); }
        .cd-chapter-item.disabled { opacity: 0.45; cursor: not-allowed; }
        .cd-chapter-left { display: flex; align-items: center; gap: 9px; flex: 1; min-width: 0; }
        .cd-toggle-btn { flex-shrink: 0; background: none; border: none; cursor: pointer; padding: 2px; color: var(--slate-light); transition: color 0.15s; line-height: 0; }
        .cd-toggle-btn.done { color: var(--teal); }
        .cd-toggle-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .cd-chapter-name { font-size: 0.8rem; font-weight: 400; color: #334155; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .cd-chapter-name.selected { color: var(--cyan); font-weight: 500; }
        .cd-chapter-topic { font-size: 0.68rem; color: var(--slate-light); font-weight: 300; }
        .cd-chapter-dur { flex-shrink: 0; font-size: 0.69rem; color: var(--slate-light); font-weight: 300; }
        .cd-pricing-body { padding: 18px 20px 20px; }
        .cd-price-row { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; }
        .cd-price-main { font-family: var(--ff-display); font-size: 2rem; font-weight: 700; color: #0c1a2e; }
        .cd-price-main.free { color: var(--teal); }
        .cd-price-original { font-size: 0.9rem; color: var(--slate-light); text-decoration: line-through; }
        .cd-discount-pill { padding: 3px 10px; background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.25); border-radius: 100px; font-size: 0.68rem; font-weight: 600; color: #b45309; }
        .cd-price-note { font-size: 0.76rem; color: var(--slate-light); font-weight: 300; margin-bottom: 18px; }
        .cd-enroll-btn { width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 13px 20px; border-radius: 100px; border: none; font-family: var(--ff-body); font-size: 0.88rem; font-weight: 500; cursor: pointer; transition: all 0.22s; }
        .cd-enroll-btn.paid { background: linear-gradient(135deg, #0a5c73, #0e7490); color: #fff; box-shadow: 0 4px 18px rgba(14,116,144,0.3); }
        .cd-enroll-btn.paid:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(14,116,144,0.4); }
        .cd-enroll-btn.free-access { background: rgba(15,118,110,0.1); color: var(--teal); border: 1.5px solid rgba(15,118,110,0.25); }
        .cd-enroll-btn.enrolled    { background: rgba(14,116,144,0.08); color: var(--cyan); border: 1.5px solid rgba(14,116,144,0.2); }
        .cd-enroll-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .cd-spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: spin 0.7s linear infinite; flex-shrink: 0; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .cd-progress-body { padding: 16px 20px 20px; }
        .cd-progress-label { display: flex; justify-content: space-between; font-size: 0.78rem; margin-bottom: 7px; }
        .cd-progress-label span:first-child { color: var(--slate); font-weight: 300; }
        .cd-progress-label span:last-child  { color: var(--cyan); font-weight: 600; }
        .cd-progress-track { width: 100%; height: 6px; background: rgba(14,116,144,0.1); border-radius: 100px; overflow: hidden; margin-bottom: 16px; }
        .cd-progress-fill  { height: 100%; background: linear-gradient(90deg,#0e7490,#06b6d4); border-radius: 100px; transition: width 0.5s; }
        .cd-progress-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .cd-progress-stat  { background: rgba(14,116,144,0.05); border-radius: 10px; padding: 12px; text-align: center; }
        .cd-stat-val { font-family: var(--ff-display); font-size: 1.15rem; font-weight: 700; color: var(--cyan); margin-bottom: 3px; }
        .cd-stat-lbl { font-size: 0.67rem; color: var(--slate-light); text-transform: uppercase; letter-spacing: 0.07em; }
        @keyframes slideInRight { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .cd-animate  { animation: fadeUp 0.45s ease both; }
        .cd-delay-1  { animation-delay: 0.08s; }
        .cd-delay-2  { animation-delay: 0.16s; }
      `}),f.jsx(Jj,{toast:k,onDismiss:()=>N(null)}),f.jsxs("div",{className:"cd-page",children:[f.jsxs("div",{className:"cd-hero",children:[i.thumbnail&&f.jsx("img",{src:i.thumbnail,alt:i.title,className:"cd-hero-img"}),f.jsx("div",{className:"cd-hero-overlay",children:f.jsxs("div",{className:"cd-hero-content",children:[f.jsxs("button",{className:"cd-back-btn",onClick:()=>r("/courses"),children:[f.jsx(R1,{size:13})," Back to Courses"]}),f.jsxs("div",{className:"cd-hero-category",children:[i.category," · ",i.level]}),f.jsx("h1",{className:"cd-hero-title",children:i.title}),f.jsxs("div",{className:"cd-hero-meta",children:[i.rating>0&&f.jsxs("span",{className:"cd-hero-meta-item",children:[f.jsx(Nn,{size:12,fill:"#f59e0b",color:"#f59e0b"})," ",i.rating]}),f.jsxs("span",{className:"cd-hero-meta-item",children:[f.jsx(qa,{size:12})," ",(i.totalStudents||0).toLocaleString()," students"]}),f.jsxs("span",{className:"cd-hero-meta-item",children:[f.jsx(Da,{size:12})," ",Rr(me)," total"]}),f.jsxs("span",{className:"cd-hero-meta-item",children:[f.jsx(tt,{size:12})," ",$," lessons"]})]})]})})]}),f.jsxs("div",{className:"cd-main",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"cd-video-card cd-animate",children:[f.jsx("div",{className:"cd-video-frame",children:te?Ee?f.jsx("video",{controls:!0,src:te}):f.jsx("iframe",{title:"Video Player",src:te,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):f.jsxs("div",{className:"cd-video-placeholder",children:[f.jsx("div",{className:"cd-play-ring",children:f.jsx(md,{size:22,color:"#67e8f9",fill:"#67e8f9"})}),f.jsx("p",{children:"Select a chapter to start learning"}),(!s||!x&&!V)&&f.jsxs("span",{className:"cd-lock-note",children:[f.jsx(pd,{size:11}),s?"Enrollment required":"Login required"]})]})}),f.jsxs("div",{className:"cd-video-info",children:[f.jsx("h3",{className:"cd-video-title",children:R?.title||R?.name||"Select a chapter to begin"}),f.jsx("p",{className:"cd-video-desc",children:F.type==="chapter"?`Part of: ${he?.title}`:R?.description||i.description}),f.jsxs("div",{className:"cd-video-chips",children:[(R?.duration||R?.durationMin)&&f.jsxs("span",{className:"cd-chip",children:[f.jsx(Da,{size:11})," ",Rr(R.duration||R.durationMin)]}),F.type==="chapter"&&f.jsx("span",{className:"cd-chip",children:"Chapter"}),he&&f.jsxs("span",{className:"cd-chip",children:[f.jsx(tt,{size:11})," ",he.title]})]}),s&&(x||V)&&F.chapterId&&f.jsx("button",{className:`cd-complete-btn ${U.has(F.chapterId)?"done":"undone"}`,onClick:()=>P(F.chapterId),children:U.has(F.chapterId)?f.jsxs(f.Fragment,{children:[f.jsx(zl,{size:15})," Chapter Completed"]}):f.jsxs(f.Fragment,{children:[f.jsx(W0,{size:15})," Mark as Complete"]})})]})]}),f.jsxs("div",{className:"cd-card cd-animate cd-delay-1",children:[f.jsx("div",{className:"cd-card-header",children:f.jsx("span",{className:"cd-card-title",children:"About This Course"})}),f.jsxs("div",{style:{padding:"16px 20px"},children:[f.jsx("p",{style:{fontSize:"0.88rem",color:"#475569",fontWeight:300,lineHeight:1.7},children:i.description}),i.tags?.length>0&&f.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:14},children:i.tags.map(Q=>f.jsx("span",{className:"cd-chip",children:Q},Q))})]})]})]}),f.jsxs("div",{className:"cd-sidebar",children:[f.jsxs("div",{className:"cd-card cd-animate",children:[f.jsxs("div",{className:"cd-card-header",children:[f.jsx("span",{className:"cd-card-title",children:"Course Content"}),V&&f.jsxs("span",{className:"cd-free-badge",children:[f.jsx(bd,{size:10})," Free"]})]}),f.jsx("div",{className:"cd-lecture-list",children:(i.lectures||[]).length===0?f.jsx("div",{style:{padding:"24px",textAlign:"center",color:"#94a3b8",fontSize:"0.82rem"},children:"No lectures available yet."}):(i.lectures||[]).map(Q=>{const W=Q._id||Q.id,se=_.has(W),ge=V||x;return f.jsxs("div",{className:"cd-lecture-item",children:[f.jsxs("div",{className:`cd-lecture-header${se?" expanded":""}`,onClick:()=>_e(W),children:[f.jsxs("div",{className:"cd-lecture-left",children:[f.jsx(Bd,{size:15,className:`cd-chevron${se?" open":""}`}),f.jsxs("div",{style:{minWidth:0},children:[f.jsx("div",{className:"cd-lecture-title",children:Q.title}),f.jsxs("div",{className:"cd-lecture-sub",children:[f.jsx(Da,{size:10})," ",Rr(Q.duration||Q.durationMin),f.jsx("span",{children:"·"}),f.jsxs("span",{children:[Q.chapters?.length||0," lessons"]})]})]})]}),!ge&&f.jsx(pd,{size:13,className:"cd-lecture-lock"})]}),se&&f.jsx("div",{className:"cd-chapter-list",children:(Q.chapters||[]).map(Pe=>{const Me=Pe._id||Pe.id,On=U.has(Me),da=F.chapterId===Me&&F.lectureId===W;return f.jsxs("div",{className:`cd-chapter-item${da?" selected":""}${ge?"":" disabled"}`,onClick:()=>j(W,Me),children:[f.jsxs("div",{className:"cd-chapter-left",children:[f.jsx("button",{className:`cd-toggle-btn${On?" done":""}`,onClick:Ml=>{Ml.stopPropagation(),ge&&P(Me)},disabled:!ge,children:On?f.jsx(zl,{size:14}):f.jsx(W0,{size:14})}),f.jsxs("div",{style:{minWidth:0},children:[f.jsx("div",{className:`cd-chapter-name${da?" selected":""}`,children:Pe.title}),f.jsx("div",{className:"cd-chapter-topic",children:Pe.description})]})]}),f.jsx("span",{className:"cd-chapter-dur",children:Rr(Pe.duration||Pe.durationMin)})]},Me)})})]},W)})})]}),f.jsxs("div",{className:"cd-card cd-animate cd-delay-1",children:[f.jsx("div",{className:"cd-card-header",children:f.jsx("span",{className:"cd-card-title",children:"Pricing"})}),f.jsxs("div",{className:"cd-pricing-body",children:[f.jsxs("div",{className:"cd-price-row",children:[f.jsx("span",{className:`cd-price-main${V?" free":""}`,children:V?"Free":ae!=null?Fu(ae):le!=null?Fu(le):"Free"}),!V&&je&&f.jsx("span",{className:"cd-price-original",children:Fu(le)}),!V&&je&&f.jsxs("span",{className:"cd-discount-pill",children:[Math.round((le-ae)/le*100),"% off"]})]}),f.jsx("p",{className:"cd-price-note",children:V?"Free access · Learn anytime":"One-time payment · Lifetime access"}),V?f.jsxs("button",{disabled:!0,className:"cd-enroll-btn free-access",children:[f.jsx(zl,{size:15})," Free Access Granted"]}):x?f.jsxs("button",{disabled:!0,className:"cd-enroll-btn enrolled",children:[f.jsx(zl,{size:15})," Enrolled"]}):f.jsx("button",{onClick:J,disabled:E,className:"cd-enroll-btn paid",children:E?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"cd-spinner"})," Enrolling…"]}):f.jsxs(f.Fragment,{children:[f.jsx(md,{size:14,fill:"#fff"})," Enroll Now ",f.jsx(Lr,{size:14})]})})]})]}),f.jsxs("div",{className:"cd-card cd-animate cd-delay-2",children:[f.jsx("div",{className:"cd-card-header",children:f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[f.jsx(Hr,{size:16,color:"var(--cyan)"}),f.jsx("span",{className:"cd-card-title",children:"Your Progress"})]})}),f.jsxs("div",{className:"cd-progress-body",children:[f.jsxs("div",{className:"cd-progress-label",children:[f.jsx("span",{children:"Course Completion"}),f.jsxs("span",{children:[re,"%"]})]}),f.jsx("div",{className:"cd-progress-track",children:f.jsx("div",{className:"cd-progress-fill",style:{width:`${re}%`}})}),f.jsxs("div",{className:"cd-progress-stats",children:[f.jsxs("div",{className:"cd-progress-stat",children:[f.jsx("div",{className:"cd-stat-val",children:Rr(me)}),f.jsx("div",{className:"cd-stat-lbl",children:"Total Duration"})]}),f.jsxs("div",{className:"cd-progress-stat",children:[f.jsxs("div",{className:"cd-stat-val",children:[U.size,"/",$]}),f.jsx("div",{className:"cd-stat-lbl",children:"Completed"})]})]})]})]})]})]})]})]})},Ku={students:12e3,courses:240,successRate:94,countries:58,certificates:31500,support:0},eE=[{key:"students",label:"Students Enrolled",icon:zn},{key:"courses",label:"Courses Available",icon:Vd},{key:"successRate",label:"Success Rate",icon:Hr},{key:"countries",label:"Countries Reached",icon:Hd},{key:"certificates",label:"Certificates Issued",icon:Hr},{key:"support",label:"Support Available",icon:Da}],tE=[{title:"Excellence",description:"We hold ourselves to the highest standards in every course, every interaction, every outcome.",features:["Peer-reviewed curriculum","Expert-led instruction","Continuous improvement"],accent:"#0e7490",light:"#e0f7fa"},{title:"Accessibility",description:"World-class education should never be gated by geography, background, or budget.",features:["Affordable pricing tiers","Mobile-first design","Multi-language support"],accent:"#0369a1",light:"#dbeafe"},{title:"Community",description:"Learning thrives in connection. We build spaces where collaboration sparks growth.",features:["Live cohort sessions","Peer mentorship","Alumni network"],accent:"#0f766e",light:"#d1fae5"},{title:"Innovation",description:"The future of learning is adaptive, interactive, and built for how humans actually learn.",features:["AI-powered paths","Project-based learning","Real-world challenges"],accent:"#7c3aed",light:"#ede9fe"}],nE=[{name:"Sushant Pathak",role:"AI Engineer @ Google",rating:5,text:"LearnHub didn't just teach me to code — it taught me how to think like an engineer. The projects were real, the mentorship was genuine.",image:"/sushant.jpeg"},{name:"Satyam Kumar",role:"Data Scientist @ Stripe",rating:5,text:"I switched careers at 34. LearnHub gave me the confidence and the skills to land a role I'd only dreamed about. Incredible platform.",image:"/satyam.jpeg"},{name:"Sahil kumar",role:"UX Designer @ Figma",rating:5,text:"The UI/UX track is the most thoughtfully designed course I've ever taken. Real briefs, real feedback, real portfolio pieces.",image:"/sahil.jpeg"}];function Qu(a=.2){const r=S.useRef(null),[s,o]=S.useState(!1);return S.useEffect(()=>{const i=new IntersectionObserver(([d])=>{d.isIntersecting&&o(!0)},{threshold:a});return r.current&&i.observe(r.current),()=>i.disconnect()},[a]),[r,s]}function aE(a){const[r,s]=S.useState(()=>Object.fromEntries(Object.keys(Ku).map(o=>[o,0])));return S.useEffect(()=>{if(!a)return;const o=2e3,i=60,d=o/i,h=[];return Object.keys(Ku).forEach(m=>{if(m==="support")return;let g=0;const b=Ku[m],x=b/i,v=setInterval(()=>{g+=x,g>=b&&(g=b,clearInterval(v)),s(E=>({...E,[m]:Math.floor(g)}))},d);h.push(v)}),()=>h.forEach(m=>clearInterval(m))},[a]),r}const lE=(a,r)=>a==="support"?"24/7":a==="successRate"?`${r}%`:`${r.toLocaleString()}+`;function rE(){const[a,r]=Qu(.3),s=aE(r),[o,i]=Qu(.15),[d,h]=Qu(.15);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan: #0e7490;
          --cyan-dark: #0a5c73;
          --blue: #0369a1;
          --teal: #0f766e;
          --slate: #475569;
          --slate-light: #94a3b8;
          --bg: #f8fafc;
          --white: #ffffff;
          --border: rgba(14,116,144,0.12);
          --ff-display: 'Cormorant Garamond', Georgia, serif;
          --ff-body: 'DM Sans', sans-serif;
        }

        /* ── HERO VIGNETTE ─────────────────────────── */
        .hero-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.0) 30%,
            rgba(0,0,0,0.0) 70%,
            rgba(0,0,0,0.72) 100%
          );
        }

        /* ── SHARED SECTION ────────────────────────── */
        .section {
          padding: 96px 24px;
          font-family: var(--ff-body);
        }

        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.2);
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .section-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .section-subtitle {
          font-size: 1rem;
          color: var(--slate);
          font-weight: 300;
          max-width: 480px;
          line-height: 1.6;
        }

        /* ── STATS STRIP ───────────────────────────── */
        .stats-section {
          background: linear-gradient(135deg, #0a5c73 0%, #0e7490 40%, #0369a1 100%);
          padding: 72px 24px;
          position: relative;
          overflow: hidden;
        }

        .stats-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .stat-card {
          padding: 36px 24px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
          transition: background 0.25s ease;
        }

        .stat-card:hover {
          background: rgba(255,255,255,0.06);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.12);
          border-radius: 10px;
          margin: 0 auto 16px;
          color: rgba(255,255,255,0.9);
        }

        .stat-number {
          font-family: var(--ff-display);
          font-size: 2.6rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-family: var(--ff-body);
          font-size: 0.78rem;
          font-weight: 400;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── VALUES SECTION ────────────────────────── */
        .values-section {
          background: var(--bg);
        }

        .values-header {
          margin-bottom: 56px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .value-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(14,116,144,0.1);
        }

        .value-card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 16px 16px 0 0;
        }

        .value-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .value-card-title {
          font-family: var(--ff-display);
          font-size: 1.4rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .value-card-desc {
          font-size: 0.88rem;
          color: var(--slate);
          line-height: 1.65;
          margin-bottom: 20px;
          font-weight: 300;
        }

        .value-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .value-feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #475569;
          font-weight: 400;
        }

        .value-feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── TESTIMONIALS SECTION ──────────────────── */
        .testimonials-section {
          background: #fff;
        }

        .testimonials-header {
          margin-bottom: 56px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }

        .testimonial-card {
          background: #f8fafc;
          border: 1px solid rgba(14,116,144,0.1);
          border-radius: 16px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          position: relative;
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: -8px;
          right: 20px;
          font-family: var(--ff-display);
          font-size: 8rem;
          color: rgba(14,116,144,0.06);
          line-height: 1;
          pointer-events: none;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(14,116,144,0.09);
        }

        .testimonial-stars {
          display: flex;
          gap: 3px;
        }

        .testimonial-star {
          width: 14px;
          height: 14px;
          color: #f59e0b;
          fill: #f59e0b;
        }

        .testimonial-text {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.7;
          font-weight: 300;
          font-style: italic;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(14,116,144,0.08);
        }

        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(14,116,144,0.2);
        }

        .testimonial-name {
          font-size: 0.88rem;
          font-weight: 500;
          color: #0f172a;
        }

        .testimonial-role {
          font-size: 0.76rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-top: 2px;
        }

        /* ── FADE-IN ANIMATION ─────────────────────── */
        .fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-up-delay-1 { transition-delay: 0.1s; }
        .fade-up-delay-2 { transition-delay: 0.2s; }
        .fade-up-delay-3 { transition-delay: 0.3s; }
        .fade-up-delay-4 { transition-delay: 0.4s; }
      `}),f.jsx("div",{className:"hero-vignette"}),f.jsx("section",{className:"stats-section",ref:a,children:f.jsx("div",{className:"stats-grid",children:eE.map(({key:m,label:g,icon:b},x)=>f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:f.jsx(b,{size:18})}),f.jsx("div",{className:"stat-number",children:lE(m,s[m]??0)}),f.jsx("div",{className:"stat-label",children:g})]},m))})}),f.jsx("section",{className:"section values-section",ref:o,children:f.jsxs("div",{className:"section-inner",children:[f.jsxs("div",{className:`values-header fade-up ${i?"visible":""}`,children:[f.jsxs("div",{className:"section-badge",children:[f.jsx(tg,{size:13}),f.jsx("span",{children:"Our Guiding Principles"})]}),f.jsx("h2",{className:"section-title",children:"Core Values That Define Us"}),f.jsx("p",{className:"section-subtitle",children:"The foundation of everything we do at LearnHub"})]}),f.jsx("div",{className:"values-grid",children:tE.map((m,g)=>f.jsxs("div",{className:`value-card fade-up ${i?"visible":""} fade-up-delay-${Math.min(g+1,4)}`,children:[f.jsx("div",{className:"value-card-accent",style:{background:m.accent}}),f.jsx("div",{className:"value-icon-wrap",style:{background:m.light},children:f.jsx(tg,{size:20,style:{color:m.accent}})}),f.jsx("h3",{className:"value-card-title",children:m.title}),f.jsx("p",{className:"value-card-desc",children:m.description}),f.jsx("ul",{className:"value-features",children:m.features.map((b,x)=>f.jsxs("li",{className:"value-feature-item",children:[f.jsx("div",{className:"value-feature-dot",style:{background:m.accent}}),b]},x))})]},g))})]})}),f.jsx("section",{className:"section testimonials-section",ref:d,children:f.jsxs("div",{className:"section-inner",children:[f.jsxs("div",{className:`testimonials-header fade-up ${h?"visible":""}`,children:[f.jsx("h2",{className:"section-title",children:"What Our Students Say"}),f.jsx("p",{className:"section-subtitle",children:"Real stories from real learners who transformed their careers"})]}),f.jsx("div",{className:"testimonials-grid",children:nE.map((m,g)=>f.jsxs("div",{className:`testimonial-card fade-up ${h?"visible":""} fade-up-delay-${Math.min(g+1,4)}`,children:[f.jsx("div",{className:"testimonial-stars",children:[...Array(m.rating)].map((b,x)=>f.jsx(Nn,{className:"testimonial-star"},x))}),f.jsxs("p",{className:"testimonial-text",children:['"',m.text,'"']}),f.jsxs("div",{className:"testimonial-author",children:[f.jsx("img",{src:m.image,alt:m.name,className:"testimonial-avatar"}),f.jsxs("div",{children:[f.jsx("div",{className:"testimonial-name",children:m.name}),f.jsx("div",{className:"testimonial-role",children:m.role})]})]})]},g))})]})})]})}const kl=[{id:"f1",name:"Prof. Charmy Vora",role:"Full Stack Engineer",specialization:"Development",bio:"10+ years at Google & Stripe. Built products used by millions. Passionate about clean architecture and mentoring the next generation of developers.",avatar:"/charmyvora.png",rating:4.9,totalStudents:4820,totalCourses:4,experience:"10+ years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:"#"},skills:["React","Node.js","AWS","TypeScript"],courses:["Full Stack Web Dev","Node.js APIs","React Bootcamp","Cloud & AWS"]},{id:"f2",name:"Prof. Urvi Dhamecha",role:"Senior Product Designer",specialization:"Design",bio:"Led design at Figma and Notion. Speaker at Design+Code conf. Believes great design starts with deep empathy for the user.",avatar:"/ud.png",rating:4.9,totalStudents:5730,totalCourses:3,experience:"8 years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:null},skills:["Figma","UX Research","Prototyping","Design Systems"],courses:["UI/UX Mastery","Figma for Beginners","Design Systems"]},{id:"f3",name:"Prof. Jigar Dave",role:"Frontend Architect",specialization:"Development",bio:"Core contributor to React ecosystem. Worked at Vercel. Obsessed with performance, accessibility and developer experience.",avatar:"/jigardave.jpeg",rating:4.8,totalStudents:3750,totalCourses:2,experience:"7 years",badge:"Expert",social:{linkedin:"#",twitter:"#",website:"#"},skills:["React","Next.js","Performance","CSS"],courses:["React & Next.js Bootcamp","Frontend Performance"]},{id:"f4",name:"Prof. Bhavesh Kamalpara",role:"Growth Marketing Lead",specialization:"Marketing",bio:"Scaled two startups from 0 to 1M users. Google-certified marketer. Teaches data-driven growth strategies that actually move the needle.",avatar:"/bk.png",rating:4.6,totalStudents:2870,totalCourses:2,experience:"6 years",badge:null,social:{linkedin:"#",twitter:"#",website:null},skills:["SEO","Google Ads","Analytics","Content Strategy"],courses:["Digital Marketing Pro","Content Writing Fundamentals"]},{id:"f5",name:"Prof. Monisha Mohan",role:"Operating System",specialization:"Data",bio:"Former Amazon Alexa team. Specializes in NLP and computer vision. Makes cutting-edge research accessible to every learner.",avatar:"/monishamohan.png",rating:4.9,totalStudents:5420,totalCourses:2,experience:"9 years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:"#"},skills:["PyTorch","NLP","Computer Vision","MLOps"],courses:["Machine Learning A-Z","Deep Learning Fundamentals"]},{id:"f6",name:"Prof. Niraj Bhagchandani",role:"Computer Networking",specialization:"Development",bio:"AWS Certified Solutions Architect with 8 certifications. Helped 50+ companies migrate to cloud. Breaks down complex infra into simple concepts.",avatar:"/nb.png",rating:4.7,totalStudents:2890,totalCourses:2,experience:"8 years",badge:"Expert",social:{linkedin:"#",twitter:"#",website:null},skills:["AWS","Docker","Kubernetes","Terraform"],courses:["Cloud Computing & AWS","DevOps Fundamentals"]}],iE=["All","Development","Design","Data","Marketing"],sE=["Most Popular","Top Rated","Most Courses","Most Experience"],Zu=6,Q1=a=>a>=1e3?`${(a/1e3).toFixed(1)}k`:String(a),oE=a=>a==="Top Instructor"?{bg:"rgba(245,158,11,0.1)",color:"#b45309",border:"rgba(245,158,11,0.25)"}:a==="Expert"?{bg:"rgba(14,116,144,0.08)",color:"#0e7490",border:"rgba(14,116,144,0.2)"}:null,cE=D.memo(({rating:a,size:r=13})=>f.jsxs("div",{style:{display:"flex",gap:2,alignItems:"center"},children:[[1,2,3,4,5].map(s=>{const o=s<=Math.round(a);return f.jsx(Nn,{size:r,fill:o?"#f59e0b":"none",color:o?"#f59e0b":"#cbd5e1"},s)}),f.jsx("span",{style:{fontSize:"0.74rem",fontWeight:600,color:"#92400e",marginLeft:4},children:a.toFixed(1)})]})),Iu=({href:a,icon:r,label:s})=>a?f.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":s,className:"fc-social-btn",onClick:o=>o.stopPropagation(),children:f.jsx(r,{size:14})}):null,uE=D.memo(({teacher:a,index:r,isExpanded:s,onToggle:o})=>{const i=oE(a.badge);return f.jsxs("article",{className:"fc-card",style:{animationDelay:`${Math.min(r,5)*70}ms`},children:[f.jsx("div",{className:"fc-card-accent",style:{background:a.specialization==="Design"?"linear-gradient(90deg,#0f766e,#14b8a6)":a.specialization==="Data"?"linear-gradient(90deg,#0369a1,#38bdf8)":a.specialization==="Marketing"?"linear-gradient(90deg,#7c3aed,#a78bfa)":"linear-gradient(90deg,#0a5c73,#0e7490)"}}),f.jsxs("div",{className:"fc-card-top",children:[f.jsxs("div",{className:"fc-avatar-wrap",children:[f.jsx("img",{src:a.avatar,alt:a.name,className:"fc-avatar",loading:"lazy"}),f.jsx("div",{className:"fc-avatar-ring"})]}),f.jsxs("div",{className:"fc-card-info",children:[f.jsxs("div",{className:"fc-name-row",children:[f.jsx("h3",{className:"fc-name",children:a.name}),i&&f.jsxs("span",{className:"fc-badge",style:{background:i.bg,color:i.color,borderColor:i.border},children:[f.jsx(Hr,{size:9})," ",a.badge]})]}),f.jsx("p",{className:"fc-role",children:a.role}),f.jsx("span",{className:"fc-spec",children:a.specialization})]})]}),f.jsxs("div",{className:"fc-stats",children:[f.jsxs("div",{className:"fc-stat",children:[f.jsx(qa,{size:12,color:"#0e7490"}),f.jsx("span",{className:"fc-stat-val",children:Q1(a.totalStudents)}),f.jsx("span",{className:"fc-stat-lbl",children:"Students"})]}),f.jsx("div",{className:"fc-stat-divider"}),f.jsxs("div",{className:"fc-stat",children:[f.jsx(tt,{size:12,color:"#0e7490"}),f.jsx("span",{className:"fc-stat-val",children:a.totalCourses}),f.jsx("span",{className:"fc-stat-lbl",children:"Courses"})]}),f.jsx("div",{className:"fc-stat-divider"}),f.jsxs("div",{className:"fc-stat",children:[f.jsx(Vd,{size:12,color:"#0e7490"}),f.jsx("span",{className:"fc-stat-val",children:a.experience}),f.jsx("span",{className:"fc-stat-lbl",children:"Experience"})]})]}),f.jsx("div",{className:"fc-rating-row",children:f.jsx(cE,{rating:a.rating})}),f.jsx("p",{className:"fc-bio",children:a.bio}),f.jsx("div",{className:"fc-skills",children:a.skills.map(d=>f.jsx("span",{className:"fc-skill",children:d},d))}),s&&f.jsxs("div",{className:"fc-courses",children:[f.jsxs("div",{className:"fc-courses-label",children:[f.jsx(zn,{size:12})," Courses by ",a.name.split(" ")[0]]}),f.jsx("div",{className:"fc-courses-list",children:a.courses.map(d=>f.jsxs("div",{className:"fc-course-item",children:[f.jsx(tt,{size:11,color:"#0e7490"}),f.jsx("span",{children:d})]},d))})]}),f.jsxs("div",{className:"fc-card-footer",children:[f.jsxs("div",{className:"fc-socials",children:[f.jsx(Iu,{href:a.social.linkedin,icon:H1,label:"LinkedIn"}),f.jsx(Iu,{href:a.social.twitter,icon:F1,label:"Twitter"}),f.jsx(Iu,{href:a.social.website,icon:Hd,label:"Website"})]}),f.jsx("button",{type:"button",className:"fc-expand-btn",onClick:()=>o(a.id),"aria-expanded":s,"aria-label":s?"Show less":"View courses",children:s?f.jsxs(f.Fragment,{children:[f.jsx(U1,{size:13})," Less"]}):f.jsxs(f.Fragment,{children:[f.jsx(Bd,{size:13})," Courses"]})})]})]})}),dE=()=>{const[a,r]=S.useState(""),[s,o]=S.useState("All"),[i,d]=S.useState("Most Popular"),[h,m]=S.useState(!1),[g,b]=S.useState(new Set),[x,v]=S.useState(!1),E=S.useCallback(H=>{b(Z=>{const V=new Set(Z);return V.has(H)?V.delete(H):V.add(H),V})},[]),M=S.useMemo(()=>{let H=kl.filter(Z=>{const V=a.toLowerCase(),le=!V||Z.name.toLowerCase().includes(V)||Z.role.toLowerCase().includes(V)||Z.skills.some(je=>je.toLowerCase().includes(V)),ae=s==="All"||Z.specialization===s;return le&&ae});switch(i){case"Top Rated":H=[...H].sort((Z,V)=>V.rating-Z.rating);break;case"Most Popular":H=[...H].sort((Z,V)=>V.totalStudents-Z.totalStudents);break;case"Most Courses":H=[...H].sort((Z,V)=>V.totalCourses-Z.totalCourses);break;case"Most Experience":H=[...H].sort((Z,V)=>parseInt(V.experience)-parseInt(Z.experience));break}return H},[a,s,i]),k=S.useMemo(()=>h?M:M.slice(0,Zu),[M,h]),N=Math.max(0,M.length-Zu),_=s!=="All"||a!==""||i!=="Most Popular",X=S.useCallback(()=>{r(""),o("All"),d("Most Popular"),m(!1)},[]),U=S.useMemo(()=>kl.reduce((H,Z)=>H+Z.totalStudents,0),[]),q=S.useMemo(()=>kl.reduce((H,Z)=>H+Z.totalCourses,0),[]),F=S.useMemo(()=>(kl.reduce((H,Z)=>H+Z.rating,0)/kl.length).toFixed(1),[]);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
          --teal:        #0f766e;
          --amber:       #f59e0b;
          --slate:       #475569;
          --slate-light: #94a3b8;
          --border:      rgba(14,116,144,0.13);
          --bg:          #f0f9ff;
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
          --shadow:      0 2px 14px rgba(14,116,144,0.07);
          --shadow-hover:0 12px 36px rgba(14,116,144,0.14);
          --radius:      18px;
        }

        .fc-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          padding: 88px 24px 80px;
        }

        /* ── HEADER ────────────────────────────────────── */
        .fc-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 40px;
          animation: fadeUp 0.5s ease both;
        }

        .fc-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: 0.71rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .fc-title {
          font-family: var(--ff-display);
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 700;
          color: #0c1a2e;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin-bottom: 12px;
        }

        .fc-title span {
          font-style: italic;
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .fc-subtitle {
          font-size: 0.92rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
        }

        /* ── SUMMARY STRIP ─────────────────────────────── */
        .fc-summary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          max-width: 560px;
          margin: 0 auto 44px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: var(--shadow);
          animation: fadeUp 0.5s 0.08s ease both;
        }

        .fc-summary-item {
          flex: 1;
          padding: 16px 12px;
          text-align: center;
          border-right: 1px solid var(--border);
        }
        .fc-summary-item:last-child { border-right: none; }

        .fc-summary-val {
          font-family: var(--ff-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--cyan);
          line-height: 1;
          margin-bottom: 3px;
          letter-spacing: -0.02em;
        }

        .fc-summary-lbl {
          font-size: 0.67rem;
          color: var(--slate-light);
          text-transform: uppercase;
          letter-spacing: 0.09em;
          font-weight: 400;
        }

        /* ── SPEC TABS ─────────────────────────────────── */
        .fc-spec-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
          animation: fadeUp 0.5s 0.12s ease both;
        }

        .fc-spec-tab {
          padding: 8px 20px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--slate);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow);
        }
        .fc-spec-tab:hover { border-color: var(--cyan); color: var(--cyan); }
        .fc-spec-tab.active {
          background: var(--cyan);
          border-color: var(--cyan);
          color: var(--white);
          font-weight: 500;
          box-shadow: 0 4px 14px rgba(14,116,144,0.28);
        }

        /* ── CONTROLS ──────────────────────────────────── */
        .fc-controls {
          max-width: 1200px;
          margin: 0 auto 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeUp 0.5s 0.16s ease both;
        }

        .fc-search-row {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .fc-search-wrap {
          position: relative;
          flex: 1;
        }

        .fc-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--slate-light);
          pointer-events: none;
        }

        .fc-search {
          width: 100%;
          padding: 12px 40px 12px 42px;
          border: 1.5px solid var(--border);
          border-radius: 100px;
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.875rem;
          font-weight: 300;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-shadow: var(--shadow);
        }
        .fc-search::placeholder { color: #cbd5e1; }
        .fc-search:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 0 3px rgba(14,116,144,0.1);
        }

        .fc-search-clear {
          position: absolute;
          right: 13px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer; color: var(--slate-light);
          display: flex; align-items: center;
          transition: color 0.15s;
        }
        .fc-search-clear:hover { color: #ef4444; }

        .fc-sort-select {
          padding: 11px 32px 11px 14px;
          border: 1.5px solid var(--border);
          border-radius: 100px;
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.8rem;
          color: var(--slate);
          cursor: pointer;
          outline: none;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          min-width: 175px;
          box-shadow: var(--shadow);
          transition: border-color 0.2s;
        }
        .fc-sort-select:focus { border-color: var(--cyan); }

        /* ── ACTIVE FILTER BAR ─────────────────────────── */
        .fc-filter-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .fc-filter-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 11px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.18);
          border-radius: 100px;
          font-size: 0.72rem;
          color: var(--cyan);
          font-weight: 500;
        }

        .fc-clear-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          background: none;
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 100px;
          font-family: var(--ff-body);
          font-size: 0.72rem;
          color: #ef4444;
          cursor: pointer;
          transition: background 0.18s;
        }
        .fc-clear-btn:hover { background: rgba(239,68,68,0.06); }

        .fc-result-count {
          margin-left: auto;
          font-size: 0.78rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── GRID ──────────────────────────────────────── */
        .fc-grid-wrap { max-width: 1200px; margin: 0 auto; }

        .fc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 22px;
          margin-bottom: 32px;
        }

        /* ── FACULTY CARD ──────────────────────────────── */
        .fc-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.28s ease,
                      border-color 0.22s ease;
          display: flex;
          flex-direction: column;
          gap: 0;
          opacity: 0;
          animation: cardIn 0.42s ease forwards;
          position: relative;
        }

        .fc-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(14,116,144,0.28);
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fc-card-accent {
          height: 3px;
          width: 100%;
        }

        .fc-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 20px 14px;
        }

        /* Avatar */
        .fc-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .fc-avatar {
          width: 62px; height: 62px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 2px solid var(--white);
          box-shadow: 0 2px 10px rgba(14,116,144,0.15);
        }

        .fc-avatar-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 1.5px solid rgba(14,116,144,0.2);
          pointer-events: none;
        }

        .fc-card-info { flex: 1; min-width: 0; }

        .fc-name-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 3px;
        }

        .fc-name {
          font-family: var(--ff-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: #0c1a2e;
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .fc-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 9px;
          border-radius: 100px;
          border: 1px solid;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .fc-role {
          font-size: 0.78rem;
          color: var(--slate);
          font-weight: 300;
          margin-bottom: 6px;
        }

        .fc-spec {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 500;
          background: rgba(14,116,144,0.08);
          color: var(--cyan);
          border: 1px solid rgba(14,116,144,0.15);
          letter-spacing: 0.05em;
        }

        /* Stats */
        .fc-stats {
          display: flex;
          align-items: center;
          margin: 0 20px;
          padding: 12px 0;
          border-top: 1px solid rgba(14,116,144,0.07);
          border-bottom: 1px solid rgba(14,116,144,0.07);
        }

        .fc-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }

        .fc-stat-divider {
          width: 1px;
          height: 28px;
          background: rgba(14,116,144,0.1);
        }

        .fc-stat-val {
          font-family: var(--ff-display);
          font-size: 1rem;
          font-weight: 700;
          color: #0c1a2e;
          line-height: 1;
        }

        .fc-stat-lbl {
          font-size: 0.62rem;
          color: var(--slate-light);
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        /* Rating */
        .fc-rating-row {
          padding: 10px 20px 6px;
        }

        /* Bio */
        .fc-bio {
          padding: 0 20px;
          font-size: 0.81rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Skills */
        .fc-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 12px 20px 6px;
        }

        .fc-skill {
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.68rem;
          font-weight: 400;
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
          transition: all 0.15s ease;
        }

        .fc-card:hover .fc-skill {
          background: rgba(14,116,144,0.06);
          border-color: rgba(14,116,144,0.18);
          color: var(--cyan);
        }

        /* Expanded courses */
        .fc-courses {
          margin: 10px 20px 0;
          padding: 14px;
          background: rgba(14,116,144,0.04);
          border: 1px solid rgba(14,116,144,0.1);
          border-radius: 10px;
          animation: slideDown 0.22s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fc-courses-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        .fc-courses-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .fc-course-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.78rem;
          color: #334155;
          font-weight: 300;
        }

        /* Footer */
        .fc-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px 16px;
          margin-top: auto;
          border-top: 1px solid rgba(14,116,144,0.07);
        }

        .fc-socials {
          display: flex;
          gap: 8px;
        }

        .fc-social-btn {
          width: 30px; height: 30px;
          border-radius: 8px;
          background: rgba(14,116,144,0.07);
          border: 1px solid rgba(14,116,144,0.12);
          display: flex; align-items: center; justify-content: center;
          color: var(--slate);
          text-decoration: none;
          transition: all 0.18s ease;
        }

        .fc-social-btn:hover {
          background: var(--cyan);
          border-color: var(--cyan);
          color: #fff;
          transform: translateY(-2px);
        }

        .fc-expand-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 14px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: none;
          font-family: var(--ff-body);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--cyan);
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .fc-expand-btn:hover {
          background: rgba(14,116,144,0.06);
          border-color: var(--cyan);
        }

        /* ── EMPTY STATE ───────────────────────────────── */
        .fc-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          text-align: center;
          gap: 14px;
        }

        .fc-empty-icon {
          width: 68px; height: 68px;
          background: rgba(14,116,144,0.06);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--slate-light);
        }

        .fc-empty-title {
          font-family: var(--ff-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: #0c1a2e;
        }

        .fc-empty-btn {
          padding: 10px 24px;
          border-radius: 100px;
          background: var(--cyan);
          color: #fff;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .fc-empty-btn:hover { background: var(--cyan-dark); transform: translateY(-1px); }

        /* ── SHOW MORE ─────────────────────────────────── */
        .fc-show-more {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .fc-show-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 12px 30px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--white);
          font-family: var(--ff-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--cyan);
          cursor: pointer;
          transition: all 0.22s ease;
          box-shadow: var(--shadow);
        }
        .fc-show-more-btn:hover {
          border-color: var(--cyan);
          background: rgba(14,116,144,0.05);
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }

        .fc-count-note {
          font-size: 0.78rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── ANIMATIONS ────────────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 768px) {
          .fc-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
          .fc-search-row { flex-wrap: wrap; }
          .fc-sort-select { min-width: 0; flex: 1; }
        }

        @media (max-width: 480px) {
          .fc-grid { grid-template-columns: 1fr; }
          .fc-summary { max-width: 100%; }
        }
      `}),f.jsxs("div",{className:"fc-page",children:[f.jsxs("div",{className:"fc-header",children:[f.jsxs("div",{className:"fc-header-badge",children:[f.jsx(zn,{size:11})," Meet Our Faculty"]}),f.jsxs("h1",{className:"fc-title",children:["Learn from the ",f.jsx("span",{children:"Best"})]}),f.jsx("p",{className:"fc-subtitle",children:"Our instructors are industry veterans, researchers, and practitioners who bring real-world experience into every lesson."})]}),f.jsxs("div",{className:"fc-summary",children:[f.jsxs("div",{className:"fc-summary-item",children:[f.jsx("div",{className:"fc-summary-val",children:kl.length}),f.jsx("div",{className:"fc-summary-lbl",children:"Instructors"})]}),f.jsxs("div",{className:"fc-summary-item",children:[f.jsx("div",{className:"fc-summary-val",children:Q1(U)}),f.jsx("div",{className:"fc-summary-lbl",children:"Students Taught"})]}),f.jsxs("div",{className:"fc-summary-item",children:[f.jsx("div",{className:"fc-summary-val",children:q}),f.jsx("div",{className:"fc-summary-lbl",children:"Courses"})]}),f.jsxs("div",{className:"fc-summary-item",children:[f.jsxs("div",{className:"fc-summary-val",children:[F,"★"]}),f.jsx("div",{className:"fc-summary-lbl",children:"Avg Rating"})]})]}),f.jsx("div",{className:"fc-spec-tabs",children:iE.map(H=>f.jsx("button",{type:"button",className:`fc-spec-tab ${s===H?"active":""}`,onClick:()=>{o(H),m(!1)},children:H},H))}),f.jsxs("div",{className:"fc-controls",children:[f.jsxs("div",{className:"fc-search-row",children:[f.jsxs("div",{className:"fc-search-wrap",children:[f.jsx(gd,{size:15,className:"fc-search-icon"}),f.jsx("input",{type:"search",className:"fc-search",placeholder:"Search by name, role, or skill…",value:a,onChange:H=>{r(H.target.value),m(!1)},"aria-label":"Search faculty"}),a&&f.jsx("button",{className:"fc-search-clear",onClick:()=>r(""),"aria-label":"Clear",children:f.jsx(yd,{size:13})})]}),f.jsx("select",{className:"fc-sort-select",value:i,onChange:H=>{d(H.target.value),m(!1)},"aria-label":"Sort faculty",children:sE.map(H=>f.jsx("option",{value:H,children:H},H))})]}),_&&f.jsxs("div",{className:"fc-filter-bar",children:[a&&f.jsxs("span",{className:"fc-filter-tag",children:[f.jsx(gd,{size:10}),' "',a,'"']}),s!=="All"&&f.jsx("span",{className:"fc-filter-tag",children:s}),i!=="Most Popular"&&f.jsxs("span",{className:"fc-filter-tag",children:[f.jsx(P5,{size:10})," ",i]}),f.jsxs("button",{type:"button",className:"fc-clear-btn",onClick:X,children:[f.jsx(yd,{size:10})," Clear all"]}),f.jsxs("span",{className:"fc-result-count",children:[M.length," instructor",M.length!==1?"s":""]})]})]}),f.jsxs("div",{className:"fc-grid-wrap",children:[f.jsx("div",{className:"fc-grid",children:M.length===0?f.jsxs("div",{className:"fc-empty",children:[f.jsx("div",{className:"fc-empty-icon",children:f.jsx(zn,{size:30})}),f.jsx("h3",{className:"fc-empty-title",children:"No instructors found"}),f.jsx("button",{type:"button",className:"fc-empty-btn",onClick:X,children:"Show All Faculty"})]}):k.map((H,Z)=>f.jsx(uE,{teacher:H,index:Z,isExpanded:g.has(H.id),onToggle:E},H.id))}),M.length>Zu&&f.jsxs("div",{className:"fc-show-more",children:[f.jsx("button",{type:"button",className:"fc-show-more-btn",onClick:()=>m(H=>!H),children:h?f.jsxs(f.Fragment,{children:[f.jsx(U1,{size:15})," Show Less"]}):f.jsxs(f.Fragment,{children:[f.jsx(Bd,{size:15})," Show ",N," More"]})}),!h&&f.jsxs("span",{className:"fc-count-note",children:["Showing ",k.length," of ",M.length]})]})]})]})]})},fE=[{icon:Yd,label:"Call Us",value:"+91 70507 90468",sub:"Mon–Sat, 9am–6pm IST",accent:"#0e7490",light:"#e0f7fa"},{icon:eo,label:"Email Us",value:"sushantpathak2028@gmail.com",sub:"We reply within 24 hours",accent:"#0369a1",light:"#dbeafe"},{icon:Y1,label:"Visit Us",value:"Rajkot, Gujarat",sub:"India — 360001",accent:"#0f766e",light:"#d1fae5"}],hE=["General Inquiry","Project Collaboration","Support","Feedback","Other"];function pE(){const[a,r]=S.useState({name:"",email:"",phone:"",subject:"",message:""}),[s,o]=S.useState(""),[i,d]=S.useState(!1),[h,m]=S.useState(!1),g=E=>/^\d{10}$/.test(E),b=a.name.trim()&&a.email.trim()&&g(a.phone)&&a.subject&&a.message.trim(),x=E=>{const{name:M,value:k}=E.target;r(N=>({...N,[M]:k})),M==="phone"&&(k&&!g(k)?o("Phone number must be exactly 10 digits."):o(""))},v=E=>{if(E.preventDefault(),!b)return;d(!0);const k=`https://wa.me/7050794068?text=${`Name: ${a.name}%0AEmail: ${a.email}%0APhone: ${a.phone}%0ASubject: ${a.subject}%0AMessage: ${a.message}`}`;window.open(k,"_blank"),setTimeout(()=>{d(!1),m(!0),r({name:"",email:"",phone:"",subject:"",message:""}),setTimeout(()=>m(!1),4e3)},800)};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cyan:        #0e7490;
          --cyan-dark:   #0a5c73;
          --cyan-light:  #e0f7fa;
          --blue:        #0369a1;
          --slate:       #475569;
          --slate-light: #94a3b8;
          --border:      rgba(14,116,144,0.15);
          --bg:          #f0f9ff;
          --white:       #ffffff;
          --ff-display:  'Cormorant Garamond', Georgia, serif;
          --ff-body:     'DM Sans', sans-serif;
          --radius:      14px;
          --shadow:      0 4px 24px rgba(14,116,144,0.08);
          --shadow-hover:0 12px 40px rgba(14,116,144,0.14);
        }

        .cp-page {
          min-height: 100vh;
          background: var(--bg);
          font-family: var(--ff-body);
          padding: 80px 24px 64px;
        }

        /* ── HERO HEADER ──────────────────────── */
        .cp-header {
          text-align: center;
          max-width: 580px;
          margin: 0 auto 64px;
        }

        .cp-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 16px;
          background: rgba(14,116,144,0.08);
          border: 1px solid rgba(14,116,144,0.2);
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .cp-title {
          font-family: var(--ff-display);
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 600;
          color: #0f172a;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }

        .cp-title span {
          background: linear-gradient(135deg, #0e7490, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cp-subtitle {
          font-size: 0.95rem;
          color: var(--slate);
          font-weight: 300;
          line-height: 1.65;
        }

        /* ── INFO CARDS ───────────────────────── */
        .cp-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          max-width: 860px;
          margin: 0 auto 56px;
        }

        .cp-info-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          box-shadow: var(--shadow);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cp-info-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        .cp-info-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cp-info-label {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--slate-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .cp-info-value {
          font-size: 0.9rem;
          font-weight: 500;
          color: #0f172a;
          margin-bottom: 3px;
        }

        .cp-info-sub {
          font-size: 0.75rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        /* ── MAIN GRID ────────────────────────── */
        .cp-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }

        @media (max-width: 860px) {
          .cp-main { grid-template-columns: 1fr; }
          .cp-lottie { order: -1; }
        }

        /* ── FORM CARD ────────────────────────── */
        .cp-form-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: var(--shadow);
        }

        .cp-form-title {
          font-family: var(--ff-display);
          font-size: 1.6rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .cp-form-sub {
          font-size: 0.83rem;
          color: var(--slate-light);
          font-weight: 300;
          margin-bottom: 32px;
        }

        /* ── FORM ELEMENTS ────────────────────── */
        .cp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 560px) {
          .cp-row { grid-template-columns: 1fr; }
          .cp-form-card { padding: 28px 20px; }
        }

        .cp-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 18px;
        }

        .cp-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 500;
          color: #334155;
          letter-spacing: 0.01em;
        }

        .cp-input, .cp-select, .cp-textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid rgba(14,116,144,0.18);
          border-radius: 10px;
          font-family: var(--ff-body);
          font-size: 0.875rem;
          font-weight: 300;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          appearance: none;
        }

        .cp-input::placeholder, .cp-textarea::placeholder {
          color: #cbd5e1;
        }

        .cp-input:focus, .cp-select:focus, .cp-textarea:focus {
          border-color: var(--cyan);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(14,116,144,0.1);
        }

        .cp-input.error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.08);
        }

        .cp-error {
          font-size: 0.73rem;
          color: #ef4444;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .cp-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        .cp-textarea {
          resize: vertical;
          min-height: 110px;
          line-height: 1.6;
        }

        /* ── SUBMIT BUTTON ────────────────────── */
        .cp-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 100px;
          border: none;
          font-family: var(--ff-body);
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          letter-spacing: 0.02em;
          background: linear-gradient(135deg, #0e7490, #0369a1);
          color: #fff;
          box-shadow: 0 4px 18px rgba(14,116,144,0.3);
          transition: all 0.25s ease;
          margin-top: 4px;
        }

        .cp-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(14,116,144,0.4);
        }

        .cp-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .cp-submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .cp-submit.success {
          background: linear-gradient(135deg, #0f766e, #059669);
          box-shadow: 0 4px 18px rgba(5,150,105,0.3);
        }

        /* ── WA NOTE ──────────────────────────── */
        .cp-wa-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 14px;
          font-size: 0.74rem;
          color: var(--slate-light);
          font-weight: 300;
        }

        .cp-wa-note svg {
          color: #25d366;
        }

        /* ── LOTTIE SIDE ──────────────────────── */
        .cp-lottie {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .cp-lottie-wrap {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* ── HOURS CARD ───────────────────────── */
        .cp-hours {
          background: linear-gradient(135deg, #0a5c73, #0e7490);
          border-radius: 16px;
          padding: 28px 24px;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .cp-hours::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='20' cy='20' r='10'/%3E%3C/g%3E%3C/svg%3E");
        }

        .cp-hours-title {
          font-family: var(--ff-display);
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 16px;
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cp-hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          font-size: 0.82rem;
          position: relative;
        }

        .cp-hours-row:last-child {
          border-bottom: none;
        }

        .cp-hours-day {
          color: rgba(255,255,255,0.7);
          font-weight: 300;
        }

        .cp-hours-time {
          color: #fff;
          font-weight: 500;
        }

        /* ── SPINNER ──────────────────────────── */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .cp-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* ── FADE UP ──────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cp-page > * { animation: fadeUp 0.5s ease both; }
        .cp-header   { animation-delay: 0.05s; }
        .cp-info-grid{ animation-delay: 0.1s; }
        .cp-main     { animation-delay: 0.18s; }
      `}),f.jsxs("div",{className:"cp-page",children:[f.jsxs("div",{className:"cp-header",children:[f.jsxs("div",{className:"cp-badge",children:[f.jsx(Ss,{size:12}),"Get In Touch"]}),f.jsxs("h1",{className:"cp-title",children:["Let's Start a ",f.jsx("span",{children:"Conversation"})]}),f.jsx("p",{className:"cp-subtitle",children:"Have a question, idea, or just want to say hello? We'd love to hear from you. Fill out the form and we'll get back to you via WhatsApp."})]}),f.jsx("div",{className:"cp-info-grid",children:fE.map(E=>{const M=E.icon;return f.jsxs("div",{className:"cp-info-card",children:[f.jsx("div",{className:"cp-info-icon",style:{background:E.light},children:f.jsx(M,{size:18,style:{color:E.accent}})}),f.jsxs("div",{children:[f.jsx("div",{className:"cp-info-label",children:E.label}),f.jsx("div",{className:"cp-info-value",children:E.value}),f.jsx("div",{className:"cp-info-sub",children:E.sub})]})]},E.label)})}),f.jsxs("div",{className:"cp-main",children:[f.jsxs("div",{className:"cp-form-card",children:[f.jsx("h2",{className:"cp-form-title",children:"Send Us a Message"}),f.jsx("p",{className:"cp-form-sub",children:"All fields marked * are required"}),f.jsxs("form",{onSubmit:v,noValidate:!0,children:[f.jsxs("div",{className:"cp-row",children:[f.jsxs("div",{className:"cp-field",children:[f.jsxs("label",{className:"cp-label",children:[f.jsx(K1,{size:13,color:"#0e7490"}),"Full Name *"]}),f.jsx("input",{className:"cp-input",type:"text",name:"name",value:a.name,onChange:x,placeholder:"Your full name",required:!0})]}),f.jsxs("div",{className:"cp-field",children:[f.jsxs("label",{className:"cp-label",children:[f.jsx(eo,{size:13,color:"#0369a1"}),"Email Address *"]}),f.jsx("input",{className:"cp-input",type:"email",name:"email",value:a.email,onChange:x,placeholder:"you@example.com",required:!0})]})]}),f.jsxs("div",{className:"cp-field",children:[f.jsxs("label",{className:"cp-label",children:[f.jsx(Yd,{size:13,color:"#0f766e"}),"Phone Number *"]}),f.jsx("input",{className:`cp-input ${s?"error":""}`,type:"tel",name:"phone",value:a.phone,onChange:x,placeholder:"10-digit mobile number",inputMode:"numeric",maxLength:10,required:!0}),s&&f.jsxs("span",{className:"cp-error",children:["⚠ ",s]})]}),f.jsxs("div",{className:"cp-field",children:[f.jsxs("label",{className:"cp-label",children:[f.jsx(ij,{size:13,color:"#7c3aed"}),"Subject *"]}),f.jsxs("select",{className:"cp-select",name:"subject",value:a.subject,onChange:x,required:!0,children:[f.jsx("option",{value:"",children:"Select a subject"}),hE.map(E=>f.jsx("option",{value:E,children:E},E))]})]}),f.jsxs("div",{className:"cp-field",children:[f.jsxs("label",{className:"cp-label",children:[f.jsx(Ss,{size:13,color:"#0e7490"}),"Message *"]}),f.jsx("textarea",{className:"cp-textarea",name:"message",value:a.message,onChange:x,placeholder:"Tell us what's on your mind...",required:!0})]}),f.jsx("button",{type:"submit",className:`cp-submit ${h?"success":""}`,disabled:!b||i,children:i?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"cp-spinner"})," Opening WhatsApp…"]}):h?f.jsxs(f.Fragment,{children:[f.jsx(M5,{size:16})," Message Sent!"]}):f.jsxs(f.Fragment,{children:[f.jsx(G1,{size:15})," Send via WhatsApp"]})}),f.jsxs("div",{className:"cp-wa-note",children:[f.jsx(Ss,{size:13}),"This form opens WhatsApp with your message pre-filled"]})]})]}),f.jsxs("div",{className:"cp-lottie",children:[f.jsx("div",{className:"cp-lottie-wrap",children:f.jsxs("div",{style:{width:"100%",height:"340px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"},children:[f.jsx("style",{children:`
                  @keyframes cpFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
                  @keyframes cpPulse  { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
                  @keyframes cpSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                  @keyframes cpBounce { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
                  @keyframes cpDash   { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
                  @keyframes cpFadeIn { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
                `}),f.jsx("div",{style:{position:"absolute",width:260,height:260,borderRadius:"50%",background:"linear-gradient(135deg,rgba(14,116,144,.07),rgba(8,145,178,.05))",border:"1.5px solid rgba(14,116,144,.12)",animation:"cpPulse 3s ease-in-out infinite"}}),f.jsx("div",{style:{position:"absolute",width:300,height:300,borderRadius:"50%",border:"1px dashed rgba(14,116,144,.15)",animation:"cpSpin 20s linear infinite"}}),f.jsxs("div",{style:{animation:"cpFloat 3.5s ease-in-out infinite",zIndex:2,textAlign:"center"},children:[f.jsxs("svg",{width:"100",height:"80",viewBox:"0 0 100 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("rect",{x:"5",y:"15",width:"90",height:"60",rx:"8",fill:"white",stroke:"#0e7490",strokeWidth:"2"}),f.jsx("path",{d:"M5 23 L50 48 L95 23",stroke:"#0e7490",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),f.jsx("path",{d:"M5 75 L35 48",stroke:"#0e7490",strokeWidth:"1.5",strokeLinecap:"round",opacity:".5"}),f.jsx("path",{d:"M95 75 L65 48",stroke:"#0e7490",strokeWidth:"1.5",strokeLinecap:"round",opacity:".5"}),f.jsx("circle",{cx:"75",cy:"22",r:"12",fill:"#0e7490"}),f.jsx("path",{d:"M69 22 L73 26 L81 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"18",strokeDashoffset:"18",style:{animation:"cpDash 1s .5s ease forwards",strokeDashoffset:18}})]}),f.jsx("div",{style:{marginTop:12,fontFamily:"Cormorant Garamond, Georgia, serif",fontSize:"1.1rem",fontWeight:600,color:"#0e7490"},children:"We'd love to hear from you"}),f.jsx("div",{style:{marginTop:4,fontFamily:"DM Sans, sans-serif",fontSize:".78rem",fontWeight:300,color:"#94a3b8"},children:"Fill the form and we'll reply on WhatsApp"})]}),f.jsxs("div",{style:{position:"absolute",top:32,right:24,background:"#fff",border:"1px solid rgba(14,116,144,.15)",borderRadius:12,padding:"8px 12px",boxShadow:"0 4px 16px rgba(14,116,144,.1)",display:"flex",alignItems:"center",gap:7,animation:"cpBounce 2.8s ease-in-out infinite",animationDelay:".4s"},children:[f.jsx("div",{style:{width:24,height:24,borderRadius:7,background:"#d1fae5",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(Ss,{size:13,color:"#0f766e"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:".72rem",fontWeight:600,color:"#0c1a2e"},children:"WhatsApp"}),f.jsx("div",{style:{fontSize:".62rem",color:"#94a3b8",fontWeight:300},children:"Instant reply"})]})]}),f.jsxs("div",{style:{position:"absolute",bottom:36,left:20,background:"#fff",border:"1px solid rgba(14,116,144,.15)",borderRadius:12,padding:"8px 12px",boxShadow:"0 4px 16px rgba(14,116,144,.1)",display:"flex",alignItems:"center",gap:7,animation:"cpBounce 3.2s ease-in-out infinite",animationDelay:".8s"},children:[f.jsx("div",{style:{width:24,height:24,borderRadius:7,background:"#e0f7fa",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(Da,{size:13,color:"#0e7490"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:".72rem",fontWeight:600,color:"#0c1a2e"},children:"24h"}),f.jsx("div",{style:{fontSize:".62rem",color:"#94a3b8",fontWeight:300},children:"Response time"})]})]})]})}),f.jsxs("div",{className:"cp-hours",children:[f.jsxs("div",{className:"cp-hours-title",children:[f.jsx(Da,{size:16}),"Office Hours"]}),[{day:"Monday – Friday",time:"9:00 AM – 6:00 PM"},{day:"Saturday",time:"10:00 AM – 4:00 PM"},{day:"Sunday",time:"Closed"}].map(E=>f.jsxs("div",{className:"cp-hours-row",children:[f.jsx("span",{className:"cp-hours-day",children:E.day}),f.jsx("span",{className:"cp-hours-time",children:E.time})]},E.day))]})]})]})]})]})}const $u="http://localhost:8000/api",mE=async()=>{try{return await window.Clerk?.session?.getToken()}catch{return null}},gE=()=>{const{id:a}=bg(),r=Vr(),{isSignedIn:s,user:o}=Rl(),[i,d]=S.useState(null),[h,m]=S.useState(!0),[g,b]=S.useState(!1),[x,v]=S.useState(!1),[E,M]=S.useState(null),[k,N]=S.useState({name:"",number:"",expiry:"",cvv:""});S.useEffect(()=>{if(!s){r("/");return}(async()=>{try{const H=await(await fetch(`${$u}/courses/${a}`)).json();d(H)}catch{M("Failed to load course.")}finally{m(!1)}})()},[a,s]);const _=q=>{let{name:F,value:H}=q.target;F==="number"&&(H=H.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim()),F==="expiry"&&(H=H.replace(/\D/g,"").slice(0,4).replace(/^(.{2})(.+)/,"$1/$2")),F==="cvv"&&(H=H.replace(/\D/g,"").slice(0,3)),N(Z=>({...Z,[F]:H}))},X=async q=>{if(q.preventDefault(),!k.name||k.number.replace(/\s/g,"").length<16||!k.expiry||k.cvv.length<3){M("Please fill all card details correctly.");return}M(null),b(!0);try{const F=await mE(),H=await fetch(`${$u}/payment/create-order`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${F}`},body:JSON.stringify({courseId:a})}),Z=await H.json();if(!H.ok)throw new Error(Z.message);const V=await fetch(`${$u}/payment/verify`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${F}`},body:JSON.stringify({orderId:Z.orderId,courseId:a,amount:Z.amount,clerkId:o?.id})}),le=await V.json();if(!V.ok)throw new Error(le.message);v(!0),setTimeout(()=>r(`/courses/${a}`),3e3)}catch(F){M(F.message||"Payment failed. Please try again.")}finally{b(!1)}};if(h)return f.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f0f9ff",fontFamily:"DM Sans, sans-serif"},children:f.jsx("p",{style:{color:"#94a3b8"},children:"Loading..."})});if(E&&!i)return f.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#f0f9ff",fontFamily:"DM Sans, sans-serif",gap:12},children:[f.jsx("p",{style:{color:"#ef4444"},children:E}),f.jsx("button",{onClick:()=>r(-1),style:{padding:"10px 22px",background:"#0e7490",color:"#fff",border:"none",borderRadius:"100px",cursor:"pointer"},children:"Go Back"})]});const U=i?.price?.sale||i?.price?.original||0;return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{--cyan:#0e7490;--cyan-dark:#0a5c73;--border:rgba(14,116,144,0.15);--bg:#f0f9ff;--white:#fff;--ff-d:'Cormorant Garamond',serif;--ff-b:'DM Sans',sans-serif}
        .pay-page{min-height:100vh;background:var(--bg);font-family:var(--ff-b);display:flex;align-items:center;justify-content:center;padding:24px}
        .pay-wrap{width:100%;max-width:900px;display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start}
        @media(max-width:700px){.pay-wrap{grid-template-columns:1fr}}
        .pay-left{background:var(--white);border:1px solid var(--border);border-radius:18px;overflow:hidden;box-shadow:0 4px 24px rgba(14,116,144,0.08)}
        .pay-course-img{width:100%;height:180px;object-fit:cover;display:block;background:#e2e8f0}
        .pay-course-body{padding:22px}
        .pay-course-cat{font-size:.68rem;font-weight:500;color:var(--cyan);text-transform:uppercase;letter-spacing:.09em;margin-bottom:6px}
        .pay-course-title{font-family:var(--ff-d);font-size:1.3rem;font-weight:700;color:#0c1a2e;line-height:1.2;margin-bottom:10px}
        .pay-course-desc{font-size:.82rem;color:#64748b;font-weight:300;line-height:1.6;margin-bottom:18px}
        .pay-divider{height:1px;background:var(--border);margin-bottom:18px}
        .pay-price-row{display:flex;align-items:center;justify-content:space-between}
        .pay-price-label{font-size:.8rem;color:#64748b;font-weight:300}
        .pay-price-val{font-family:var(--ff-d);font-size:2rem;font-weight:700;color:var(--cyan);letter-spacing:-.02em}
        .pay-incl{font-size:.72rem;color:#94a3b8;margin-top:4px;display:flex;align-items:center;gap:5px}
        .pay-right{background:var(--white);border:1px solid var(--border);border-radius:18px;padding:28px;box-shadow:0 4px 24px rgba(14,116,144,0.08)}
        .pay-back{display:inline-flex;align-items:center;gap:6px;font-size:.78rem;color:#94a3b8;cursor:pointer;background:none;border:none;font-family:var(--ff-b);margin-bottom:20px;transition:color .2s}
        .pay-back:hover{color:var(--cyan)}
        .pay-form-title{font-family:var(--ff-d);font-size:1.4rem;font-weight:700;color:#0c1a2e;margin-bottom:4px}
        .pay-form-sub{font-size:.8rem;color:#94a3b8;font-weight:300;margin-bottom:24px;display:flex;align-items:center;gap:5px}
        .pay-field{margin-bottom:16px}
        .pay-label{display:block;font-size:.75rem;font-weight:500;color:#334155;margin-bottom:6px;letter-spacing:.01em}
        .pay-input{width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:10px;font-family:var(--ff-b);font-size:.875rem;font-weight:300;color:#0f172a;background:#f8fafc;outline:none;transition:border-color .2s,box-shadow .2s}
        .pay-input::placeholder{color:#cbd5e1}
        .pay-input:focus{border-color:var(--cyan);background:var(--white);box-shadow:0 0 0 3px rgba(14,116,144,.1)}
        .pay-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .pay-error{padding:10px 14px;background:rgba(239,68,68,.07);border:1px solid rgba(239,68,68,.2);border-radius:8px;font-size:.78rem;color:#ef4444;margin-bottom:14px}
        .pay-btn{width:100%;padding:14px;border-radius:100px;border:none;font-family:var(--ff-b);font-size:.9rem;font-weight:500;color:#fff;cursor:pointer;background:linear-gradient(135deg,#0a5c73,#0e7490);box-shadow:0 4px 18px rgba(14,116,144,.3);transition:all .22s;display:flex;align-items:center;justify-content:center;gap:8px;margin-top:4px}
        .pay-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 28px rgba(14,116,144,.4)}
        .pay-btn:disabled{opacity:.6;cursor:not-allowed}
        .pay-secure{display:flex;align-items:center;justify-content:center;gap:6px;font-size:.72rem;color:#94a3b8;margin-top:12px;font-weight:300}
        .pay-spinner{width:16px;height:16px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite}
        @keyframes spin{to{transform:rotate(360deg)}}
        .pay-success{text-align:center;padding:40px 20px}
        .pay-success-icon{width:70px;height:70px;background:rgba(15,118,110,.1);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px}
        .pay-success-title{font-family:var(--ff-d);font-size:1.6rem;font-weight:700;color:#0c1a2e;margin-bottom:8px}
        .pay-success-sub{font-size:.85rem;color:#64748b;font-weight:300;line-height:1.6}
        .pay-success-bar{width:100%;height:4px;background:#e2e8f0;border-radius:100px;margin-top:24px;overflow:hidden}
        .pay-success-fill{height:100%;background:linear-gradient(90deg,#0e7490,#06b6d4);border-radius:100px;animation:fillBar 3s linear forwards}
        @keyframes fillBar{from{width:0}to{width:100%}}
      `}),f.jsx("div",{className:"pay-page",children:x?f.jsx("div",{style:{background:"var(--white)",borderRadius:18,padding:40,maxWidth:440,width:"100%",boxShadow:"0 4px 24px rgba(14,116,144,.08)",textAlign:"center"},children:f.jsxs("div",{className:"pay-success",children:[f.jsx("div",{className:"pay-success-icon",children:f.jsx(zl,{size:36,color:"#0f766e"})}),f.jsx("div",{className:"pay-success-title",children:"Payment Successful! 🎉"}),f.jsxs("div",{className:"pay-success-sub",children:["You're now enrolled in ",f.jsx("strong",{children:i?.title}),".",f.jsx("br",{}),"Redirecting to your course..."]}),f.jsx("div",{className:"pay-success-bar",children:f.jsx("div",{className:"pay-success-fill"})})]})}):f.jsxs("div",{className:"pay-wrap",children:[f.jsxs("div",{className:"pay-left",children:[f.jsx("img",{src:i?.thumbnail||`https://picsum.photos/seed/${a}/600/300`,alt:i?.title,className:"pay-course-img"}),f.jsxs("div",{className:"pay-course-body",children:[f.jsx("div",{className:"pay-course-cat",children:i?.category}),f.jsx("div",{className:"pay-course-title",children:i?.title}),f.jsxs("div",{className:"pay-course-desc",children:[i?.description?.slice(0,120),i?.description?.length>120?"...":""]}),f.jsx("div",{className:"pay-divider"}),f.jsxs("div",{className:"pay-price-row",children:[f.jsxs("div",{children:[f.jsx("div",{className:"pay-price-label",children:"Total Amount"}),f.jsxs("div",{className:"pay-incl",children:[f.jsx(tt,{size:12})," Lifetime access included"]})]}),f.jsxs("div",{style:{textAlign:"right"},children:[f.jsxs("div",{className:"pay-price-val",children:["₹",U]}),i?.price?.original&&i?.price?.sale&&f.jsxs("div",{style:{fontSize:".75rem",color:"#94a3b8",textDecoration:"line-through"},children:["₹",i.price.original]})]})]})]})]}),f.jsxs("div",{className:"pay-right",children:[f.jsxs("button",{className:"pay-back",onClick:()=>r(-1),children:[f.jsx(R1,{size:14})," Back"]}),f.jsx("div",{className:"pay-form-title",children:"Complete Payment"}),f.jsxs("div",{className:"pay-form-sub",children:[f.jsx(pd,{size:12})," Secure & encrypted payment"]}),f.jsxs("form",{onSubmit:X,noValidate:!0,children:[f.jsxs("div",{className:"pay-field",children:[f.jsx("label",{className:"pay-label",children:"Cardholder Name"}),f.jsx("input",{className:"pay-input",name:"name",value:k.name,onChange:_,placeholder:"Name on card"})]}),f.jsxs("div",{className:"pay-field",children:[f.jsx("label",{className:"pay-label",children:"Card Number"}),f.jsx("input",{className:"pay-input",name:"number",value:k.number,onChange:_,placeholder:"1234 5678 9012 3456",maxLength:19})]}),f.jsxs("div",{className:"pay-row",children:[f.jsxs("div",{className:"pay-field",children:[f.jsx("label",{className:"pay-label",children:"Expiry Date"}),f.jsx("input",{className:"pay-input",name:"expiry",value:k.expiry,onChange:_,placeholder:"MM/YY",maxLength:5})]}),f.jsxs("div",{className:"pay-field",children:[f.jsx("label",{className:"pay-label",children:"CVV"}),f.jsx("input",{className:"pay-input",name:"cvv",value:k.cvv,onChange:_,placeholder:"123",maxLength:3,type:"password"})]})]}),E&&f.jsx("div",{className:"pay-error",children:E}),f.jsx("button",{type:"submit",className:"pay-btn",disabled:g,children:g?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"pay-spinner"})," Processing..."]}):f.jsxs(f.Fragment,{children:[f.jsx(q5,{size:16})," Pay ₹",U," Now"]})}),f.jsxs("div",{className:"pay-secure",children:[f.jsx(X1,{size:12})," 256-bit SSL encrypted · Safe & secure"]})]})]})]})})]})},Oa=({children:a})=>f.jsxs(f.Fragment,{children:[f.jsx(Hj,{}),f.jsx("main",{children:a}),f.jsx(Xj,{})]});function bE(){const{dbUser:a}=g5();return S.useEffect(()=>{a&&console.log("✅ User synced:",a.name)},[a]),f.jsxs(Ev,{children:[f.jsx(_n,{path:"/",element:f.jsx(Lj,{})}),f.jsx(_n,{path:"/courses",element:f.jsx(Oa,{children:f.jsx(Zj,{})})}),f.jsx(_n,{path:"/courses/:id",element:f.jsx(Oa,{children:f.jsx(Wj,{})})}),f.jsx(_n,{path:"/payment/:id",element:f.jsx(Oa,{children:f.jsx(gE,{})})}),f.jsx(_n,{path:"/about",element:f.jsx(Oa,{children:f.jsx(rE,{})})}),f.jsx(_n,{path:"/faculty",element:f.jsx(Oa,{children:f.jsx(dE,{})})}),f.jsx(_n,{path:"/contact",element:f.jsx(Oa,{children:f.jsx(pE,{})})}),f.jsx(_n,{path:"*",element:f.jsx(Oa,{children:f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"80vh",gap:16,textAlign:"center",padding:"0 24px"},children:[f.jsx("div",{style:{fontSize:"5rem",fontWeight:700,color:"#e2e8f0"},children:"404"}),f.jsx("div",{style:{fontSize:"1.4rem",fontWeight:600,color:"#0c1a2e"},children:"Page not found"}),f.jsx("a",{href:"/",style:{marginTop:8,padding:"11px 26px",borderRadius:"100px",background:"#0e7490",color:"#fff",textDecoration:"none",fontSize:"0.88rem",fontWeight:500},children:"Back to Home"})]})})})]})}const yE="pk_test_cmVndWxhci1tYWNhdy0yMC5jbGVyay5hY2NvdW50cy5kZXYk";_x.createRoot(document.getElementById("root")).render(f.jsx(D.StrictMode,{children:f.jsx(Qv,{children:f.jsx(s1,{publishableKey:yE,afterSignOutUrl:"/",children:f.jsx(bE,{})})})}));
