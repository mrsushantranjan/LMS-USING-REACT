(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(i){if(i.ep)return;i.ep=!0;const d=s(i);fetch(i.href,d)}})();function ig(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Su={exports:{}},Nr={};var Qm;function wx(){if(Qm)return Nr;Qm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,i,d){var h=null;if(d!==void 0&&(h=""+d),i.key!==void 0&&(h=""+i.key),"key"in i){d={};for(var m in i)m!=="key"&&(d[m]=i[m])}else d=i;return i=d.ref,{$$typeof:a,type:o,key:h,ref:i!==void 0?i:null,props:d}}return Nr.Fragment=r,Nr.jsx=s,Nr.jsxs=s,Nr}var $m;function jx(){return $m||($m=1,Su.exports=wx()),Su.exports}var f=jx(),wu={exports:{}},de={};var Im;function Ex(){if(Im)return de;Im=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),E=Symbol.iterator;function M(j){return j===null||typeof j!="object"?null:(j=E&&j[E]||j["@@iterator"],typeof j=="function"?j:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,_={};function X(j,P,J){this.props=j,this.context=P,this.refs=_,this.updater=J||k}X.prototype.isReactComponent={},X.prototype.setState=function(j,P){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,P,"setState")},X.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function U(){}U.prototype=X.prototype;function q(j,P,J){this.props=j,this.context=P,this.refs=_,this.updater=J||k}var F=q.prototype=new U;F.constructor=q,N(F,X.prototype),F.isPureReactComponent=!0;var H=Array.isArray;function $(){}var V={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function ae(j,P,J){var Q=J.ref;return{$$typeof:a,type:j,key:P,ref:Q!==void 0?Q:null,props:J}}function je(j,P){return ae(j.type,P,j.props)}function xe(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function me(j){var P={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(J){return P[J]})}var Z=/\/+/g;function re(j,P){return typeof j=="object"&&j!==null&&j.key!=null?me(""+j.key):P.toString(36)}function he(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then($,$):(j.status="pending",j.then(function(P){j.status==="pending"&&(j.status="fulfilled",j.value=P)},function(P){j.status==="pending"&&(j.status="rejected",j.reason=P)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function R(j,P,J,Q,W){var se=typeof j;(se==="undefined"||se==="boolean")&&(j=null);var ge=!1;if(j===null)ge=!0;else switch(se){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(j.$$typeof){case a:case r:ge=!0;break;case x:return ge=j._init,R(ge(j._payload),P,J,Q,W)}}if(ge)return W=W(j),ge=Q===""?"."+re(j,0):Q,H(W)?(J="",ge!=null&&(J=ge.replace(Z,"$&/")+"/"),R(W,P,J,"",function(On){return On})):W!=null&&(xe(W)&&(W=je(W,J+(W.key==null||j&&j.key===W.key?"":(""+W.key).replace(Z,"$&/")+"/")+ge)),P.push(W)),1;ge=0;var Pe=Q===""?".":Q+":";if(H(j))for(var Me=0;Me<j.length;Me++)Q=j[Me],se=Pe+re(Q,Me),ge+=R(Q,P,J,se,W);else if(Me=M(j),typeof Me=="function")for(j=Me.call(j),Me=0;!(Q=j.next()).done;)Q=Q.value,se=Pe+re(Q,Me++),ge+=R(Q,P,J,se,W);else if(se==="object"){if(typeof j.then=="function")return R(he(j),P,J,Q,W);throw P=String(j),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return ge}function I(j,P,J){if(j==null)return j;var Q=[],W=0;return R(j,Q,"","",function(se){return P.call(J,se,W++)}),Q}function te(j){if(j._status===-1){var P=j._result;P=P(),P.then(function(J){(j._status===0||j._status===-1)&&(j._status=1,j._result=J)},function(J){(j._status===0||j._status===-1)&&(j._status=2,j._result=J)}),j._status===-1&&(j._status=0,j._result=P)}if(j._status===1)return j._result.default;throw j._result}var Ee=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},_e={map:I,forEach:function(j,P,J){I(j,function(){P.apply(this,arguments)},J)},count:function(j){var P=0;return I(j,function(){P++}),P},toArray:function(j){return I(j,function(P){return P})||[]},only:function(j){if(!xe(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return de.Activity=v,de.Children=_e,de.Component=X,de.Fragment=s,de.Profiler=i,de.PureComponent=q,de.StrictMode=o,de.Suspense=g,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,de.__COMPILER_RUNTIME={__proto__:null,c:function(j){return V.H.useMemoCache(j)}},de.cache=function(j){return function(){return j.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(j,P,J){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Q=N({},j.props),W=j.key;if(P!=null)for(se in P.key!==void 0&&(W=""+P.key),P)!le.call(P,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&P.ref===void 0||(Q[se]=P[se]);var se=arguments.length-2;if(se===1)Q.children=J;else if(1<se){for(var ge=Array(se),Pe=0;Pe<se;Pe++)ge[Pe]=arguments[Pe+2];Q.children=ge}return ae(j.type,W,Q)},de.createContext=function(j){return j={$$typeof:h,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:d,_context:j},j},de.createElement=function(j,P,J){var Q,W={},se=null;if(P!=null)for(Q in P.key!==void 0&&(se=""+P.key),P)le.call(P,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(W[Q]=P[Q]);var ge=arguments.length-2;if(ge===1)W.children=J;else if(1<ge){for(var Pe=Array(ge),Me=0;Me<ge;Me++)Pe[Me]=arguments[Me+2];W.children=Pe}if(j&&j.defaultProps)for(Q in ge=j.defaultProps,ge)W[Q]===void 0&&(W[Q]=ge[Q]);return ae(j,se,W)},de.createRef=function(){return{current:null}},de.forwardRef=function(j){return{$$typeof:m,render:j}},de.isValidElement=xe,de.lazy=function(j){return{$$typeof:x,_payload:{_status:-1,_result:j},_init:te}},de.memo=function(j,P){return{$$typeof:b,type:j,compare:P===void 0?null:P}},de.startTransition=function(j){var P=V.T,J={};V.T=J;try{var Q=j(),W=V.S;W!==null&&W(J,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then($,Ee)}catch(se){Ee(se)}finally{P!==null&&J.types!==null&&(P.types=J.types),V.T=P}},de.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},de.use=function(j){return V.H.use(j)},de.useActionState=function(j,P,J){return V.H.useActionState(j,P,J)},de.useCallback=function(j,P){return V.H.useCallback(j,P)},de.useContext=function(j){return V.H.useContext(j)},de.useDebugValue=function(){},de.useDeferredValue=function(j,P){return V.H.useDeferredValue(j,P)},de.useEffect=function(j,P){return V.H.useEffect(j,P)},de.useEffectEvent=function(j){return V.H.useEffectEvent(j)},de.useId=function(){return V.H.useId()},de.useImperativeHandle=function(j,P,J){return V.H.useImperativeHandle(j,P,J)},de.useInsertionEffect=function(j,P){return V.H.useInsertionEffect(j,P)},de.useLayoutEffect=function(j,P){return V.H.useLayoutEffect(j,P)},de.useMemo=function(j,P){return V.H.useMemo(j,P)},de.useOptimistic=function(j,P){return V.H.useOptimistic(j,P)},de.useReducer=function(j,P,J){return V.H.useReducer(j,P,J)},de.useRef=function(j){return V.H.useRef(j)},de.useState=function(j){return V.H.useState(j)},de.useSyncExternalStore=function(j,P,J){return V.H.useSyncExternalStore(j,P,J)},de.useTransition=function(){return V.H.useTransition()},de.version="19.2.5",de}var Zm;function qs(){return Zm||(Zm=1,wu.exports=Ex()),wu.exports}var S=qs();const D=ig(S);var ju={exports:{}},zr={},Eu={exports:{}},Cu={};var Jm;function Cx(){return Jm||(Jm=1,(function(a){function r(R,I){var te=R.length;R.push(I);e:for(;0<te;){var Ee=te-1>>>1,_e=R[Ee];if(0<i(_e,I))R[Ee]=I,R[te]=_e,te=Ee;else break e}}function s(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var I=R[0],te=R.pop();if(te!==I){R[0]=te;e:for(var Ee=0,_e=R.length,j=_e>>>1;Ee<j;){var P=2*(Ee+1)-1,J=R[P],Q=P+1,W=R[Q];if(0>i(J,te))Q<_e&&0>i(W,J)?(R[Ee]=W,R[Q]=te,Ee=Q):(R[Ee]=J,R[P]=te,Ee=P);else if(Q<_e&&0>i(W,te))R[Ee]=W,R[Q]=te,Ee=Q;else break e}}return I}function i(R,I){var te=R.sortIndex-I.sortIndex;return te!==0?te:R.id-I.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var h=Date,m=h.now();a.unstable_now=function(){return h.now()-m}}var g=[],b=[],x=1,v=null,E=3,M=!1,k=!1,N=!1,_=!1,X=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function F(R){for(var I=s(b);I!==null;){if(I.callback===null)o(b);else if(I.startTime<=R)o(b),I.sortIndex=I.expirationTime,r(g,I);else break;I=s(b)}}function H(R){if(N=!1,F(R),!k)if(s(g)!==null)k=!0,$||($=!0,me());else{var I=s(b);I!==null&&he(H,I.startTime-R)}}var $=!1,V=-1,le=5,ae=-1;function je(){return _?!0:!(a.unstable_now()-ae<le)}function xe(){if(_=!1,$){var R=a.unstable_now();ae=R;var I=!0;try{e:{k=!1,N&&(N=!1,U(V),V=-1),M=!0;var te=E;try{t:{for(F(R),v=s(g);v!==null&&!(v.expirationTime>R&&je());){var Ee=v.callback;if(typeof Ee=="function"){v.callback=null,E=v.priorityLevel;var _e=Ee(v.expirationTime<=R);if(R=a.unstable_now(),typeof _e=="function"){v.callback=_e,F(R),I=!0;break t}v===s(g)&&o(g),F(R)}else o(g);v=s(g)}if(v!==null)I=!0;else{var j=s(b);j!==null&&he(H,j.startTime-R),I=!1}}break e}finally{v=null,E=te,M=!1}I=void 0}}finally{I?me():$=!1}}}var me;if(typeof q=="function")me=function(){q(xe)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,re=Z.port2;Z.port1.onmessage=xe,me=function(){re.postMessage(null)}}else me=function(){X(xe,0)};function he(R,I){V=X(function(){R(a.unstable_now())},I)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(R){R.callback=null},a.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<R?Math.floor(1e3/R):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(R){switch(E){case 1:case 2:case 3:var I=3;break;default:I=E}var te=E;E=I;try{return R()}finally{E=te}},a.unstable_requestPaint=function(){_=!0},a.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var te=E;E=R;try{return I()}finally{E=te}},a.unstable_scheduleCallback=function(R,I,te){var Ee=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Ee+te:Ee):te=Ee,R){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=te+_e,R={id:x++,callback:I,priorityLevel:R,startTime:te,expirationTime:_e,sortIndex:-1},te>Ee?(R.sortIndex=te,r(b,R),s(g)===null&&R===s(b)&&(N?(U(V),V=-1):N=!0,he(H,te-Ee))):(R.sortIndex=_e,r(g,R),k||M||(k=!0,$||($=!0,me()))),R},a.unstable_shouldYield=je,a.unstable_wrapCallback=function(R){var I=E;return function(){var te=E;E=I;try{return R.apply(this,arguments)}finally{E=te}}}})(Cu)),Cu}var Wm;function kx(){return Wm||(Wm=1,Eu.exports=Cx()),Eu.exports}var ku={exports:{}},ot={};var e0;function _x(){if(e0)return ot;e0=1;var a=qs();function r(g){var b="https://react.dev/errors/"+g;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)b+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},i=Symbol.for("react.portal");function d(g,b,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i,key:v==null?null:""+v,children:g,containerInfo:b,implementation:x}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,b){if(g==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ot.createPortal=function(g,b){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(r(299));return d(g,b,null,x)},ot.flushSync=function(g){var b=h.T,x=o.p;try{if(h.T=null,o.p=2,g)return g()}finally{h.T=b,o.p=x,o.d.f()}},ot.preconnect=function(g,b){typeof g=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,o.d.C(g,b))},ot.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ot.preinit=function(g,b){if(typeof g=="string"&&b&&typeof b.as=="string"){var x=b.as,v=m(x,b.crossOrigin),E=typeof b.integrity=="string"?b.integrity:void 0,M=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;x==="style"?o.d.S(g,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:v,integrity:E,fetchPriority:M}):x==="script"&&o.d.X(g,{crossOrigin:v,integrity:E,fetchPriority:M,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ot.preinitModule=function(g,b){if(typeof g=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var x=m(b.as,b.crossOrigin);o.d.M(g,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&o.d.M(g)},ot.preload=function(g,b){if(typeof g=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var x=b.as,v=m(x,b.crossOrigin);o.d.L(g,x,{crossOrigin:v,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ot.preloadModule=function(g,b){if(typeof g=="string")if(b){var x=m(b.as,b.crossOrigin);o.d.m(g,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else o.d.m(g)},ot.requestFormReset=function(g){o.d.r(g)},ot.unstable_batchedUpdates=function(g,b){return g(b)},ot.useFormState=function(g,b,x){return h.H.useFormState(g,b,x)},ot.useFormStatus=function(){return h.H.useHostTransitionStatus()},ot.version="19.2.5",ot}var t0;function sg(){if(t0)return ku.exports;t0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),ku.exports=_x(),ku.exports}var n0;function Nx(){if(n0)return zr;n0=1;var a=kx(),r=qs(),s=sg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(o(188))}function b(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var c=n.return;if(c===null)break;var u=c.alternate;if(u===null){if(l=c.return,l!==null){n=l;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===n)return g(c),e;if(u===l)return g(c),t;u=u.sibling}throw Error(o(188))}if(n.return!==l.return)n=c,l=u;else{for(var p=!1,y=c.child;y;){if(y===n){p=!0,n=c,l=u;break}if(y===l){p=!0,l=c,n=u;break}y=y.sibling}if(!p){for(y=u.child;y;){if(y===n){p=!0,n=u,l=c;break}if(y===l){p=!0,l=u,n=c;break}y=y.sibling}if(!p)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),q=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),je=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case X:return"Profiler";case _:return"StrictMode";case H:return"Suspense";case $:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case q:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var he=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},Ee=[],_e=-1;function j(e){return{current:e}}function P(e){0>_e||(e.current=Ee[_e],Ee[_e]=null,_e--)}function J(e,t){_e++,Ee[_e]=e.current,e.current=t}var Q=j(null),W=j(null),se=j(null),ge=j(null);function Pe(e,t){switch(J(se,t),J(W,e),J(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bm(t),e=ym(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(Q),J(Q,e)}function Me(){P(Q),P(W),P(se)}function On(e){e.memoizedState!==null&&J(ge,e);var t=Q.current,n=ym(t,e.type);t!==n&&(J(W,e),J(Q,n))}function da(e){W.current===e&&(P(Q),P(W)),ge.current===e&&(P(ge),Er._currentValue=te)}var Ul,Fd;function fa(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||"",Fd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ul+e+Fd}var ao=!1;function lo(e,t){if(!e||ao)return"";ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var O=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){O=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){O=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&O&&typeof B.stack=="string")return[B.stack,O.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),p=u[0],y=u[1];if(p&&y){var w=p.split(`
`),T=y.split(`
`);for(c=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;c<T.length&&!T[c].includes("DetermineComponentFrameRoot");)c++;if(l===w.length||c===T.length)for(l=w.length-1,c=T.length-1;1<=l&&0<=c&&w[l]!==T[c];)c--;for(;1<=l&&0<=c;l--,c--)if(w[l]!==T[c]){if(l!==1||c!==1)do if(l--,c--,0>c||w[l]!==T[c]){var Y=`
`+w[l].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=l&&0<=c);break}}}finally{ao=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?fa(n):""}function W1(e,t){switch(e.tag){case 26:case 27:case 5:return fa(e.type);case 16:return fa("Lazy");case 13:return e.child!==t&&t!==null?fa("Suspense Fallback"):fa("Suspense");case 19:return fa("SuspenseList");case 0:case 15:return lo(e.type,!1);case 11:return lo(e.type.render,!1);case 1:return lo(e.type,!0);case 31:return fa("Activity");default:return""}}function Kd(e){try{var t="",n=null;do t+=W1(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ro=Object.prototype.hasOwnProperty,io=a.unstable_scheduleCallback,so=a.unstable_cancelCallback,eb=a.unstable_shouldYield,tb=a.unstable_requestPaint,Et=a.unstable_now,nb=a.unstable_getCurrentPriorityLevel,Qd=a.unstable_ImmediatePriority,$d=a.unstable_UserBlockingPriority,Jr=a.unstable_NormalPriority,ab=a.unstable_LowPriority,Id=a.unstable_IdlePriority,lb=a.log,rb=a.unstable_setDisableYieldValue,Dl=null,Ct=null;function Mn(e){if(typeof lb=="function"&&rb(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Dl,e)}catch{}}var kt=Math.clz32?Math.clz32:ob,ib=Math.log,sb=Math.LN2;function ob(e){return e>>>=0,e===0?32:31-(ib(e)/sb|0)|0}var Wr=256,ei=262144,ti=4194304;function ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ni(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var c=0,u=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var y=l&134217727;return y!==0?(l=y&~u,l!==0?c=ha(l):(p&=y,p!==0?c=ha(p):n||(n=y&~e,n!==0&&(c=ha(n))))):(y=l&~u,y!==0?c=ha(y):p!==0?c=ha(p):n||(n=l&~e,n!==0&&(c=ha(n)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:c}function Ll(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zd(){var e=ti;return ti<<=1,(ti&62914560)===0&&(ti=4194304),e}function oo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ub(e,t,n,l,c,u){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,w=e.expirationTimes,T=e.hiddenUpdates;for(n=p&~n;0<n;){var Y=31-kt(n),K=1<<Y;y[Y]=0,w[Y]=-1;var O=T[Y];if(O!==null)for(T[Y]=null,Y=0;Y<O.length;Y++){var B=O[Y];B!==null&&(B.lane&=-536870913)}n&=~K}l!==0&&Jd(e,l,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(p&~t))}function Jd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-kt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Wd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-kt(n),c=1<<l;c&t|e[l]&t&&(e[l]|=t),n&=~c}}function ef(e,t){var n=t&-t;return n=(n&42)!==0?1:co(n),(n&(e.suspendedLanes|t))!==0?0:n}function co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function uo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tf(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Ym(e.type))}function nf(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}var Un=Math.random().toString(36).slice(2),at="__reactFiber$"+Un,pt="__reactProps$"+Un,Ya="__reactContainer$"+Un,fo="__reactEvents$"+Un,db="__reactListeners$"+Un,fb="__reactHandles$"+Un,af="__reactResources$"+Un,Hl="__reactMarker$"+Un;function ho(e){delete e[at],delete e[pt],delete e[fo],delete e[db],delete e[fb]}function Va(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ya]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cm(e);e!==null;){if(n=e[at])return n;e=Cm(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){if(e=e[at]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ga(e){var t=e[af];return t||(t=e[af]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Hl]=!0}var lf=new Set,rf={};function pa(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(rf[e]=t,e=0;e<t.length;e++)lf.add(t[e])}var hb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sf={},of={};function pb(e){return ro.call(of,e)?!0:ro.call(sf,e)?!1:hb.test(e)?of[e]=!0:(sf[e]=!0,!1)}function ai(e,t,n){if(pb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function li(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function cn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mb(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var c=l.get,u=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(p){n=""+p,u.call(this,p)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){if(!e._valueTracker){var t=cf(e)?"checked":"value";e._valueTracker=mb(e,t,""+e[t])}}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=cf(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gb=/[\n"\\]/g;function Lt(e){return e.replace(gb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function mo(e,t,n,l,c,u,p,y){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?go(e,p,Dt(t)):n!=null?go(e,p,Dt(n)):l!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Dt(y):e.removeAttribute("name")}function df(e,t,n,l,c,u,p,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){po(e);return}n=n!=null?""+Dt(n):"",t=t!=null?""+Dt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=y?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),po(e)}function go(e,t,n){t==="number"&&ri(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Fa(e,t,n,l){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function ff(e,t,n){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Dt(n):""}function hf(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(he(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Dt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),po(e)}function Ka(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pf(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||bb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function mf(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var c in t)l=t[c],t.hasOwnProperty(c)&&n[c]!==l&&pf(e,c,l)}else for(var u in t)t.hasOwnProperty(u)&&pf(e,u,t[u])}function bo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ii(e){return xb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function un(){}var yo=null;function xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,$a=null;function gf(e){var t=Pa(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;e:switch(e=t.stateNode,t.type){case"input":if(mo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Lt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var c=l[pt]||null;if(!c)throw Error(o(90));mo(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&uf(l)}break e;case"textarea":ff(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Fa(e,!!n.multiple,t,!1)}}}var vo=!1;function bf(e,t,n){if(vo)return e(t,n);vo=!0;try{var l=e(t);return l}finally{if(vo=!1,(Qa!==null||$a!==null)&&(Ki(),Qa&&(t=Qa,e=$a,$a=Qa=null,gf(t),e)))for(t=0;t<e.length;t++)gf(e[t])}}function Yl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[pt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),So=!1;if(dn)try{var Vl={};Object.defineProperty(Vl,"passive",{get:function(){So=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{So=!1}var Dn=null,wo=null,si=null;function yf(){if(si)return si;var e,t=wo,n=t.length,l,c="value"in Dn?Dn.value:Dn.textContent,u=c.length;for(e=0;e<n&&t[e]===c[e];e++);var p=n-e;for(l=1;l<=p&&t[n-l]===c[u-l];l++);return si=c.slice(e,1<l?1-l:void 0)}function oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function xf(){return!1}function mt(e){function t(n,l,c,u,p){this._reactName=n,this._targetInst=c,this.type=l,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ci:xf,this.isPropagationStopped=xf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=mt(ma),Pl=v({},ma,{view:0,detail:0}),vb=mt(Pl),jo,Eo,Gl,di=v({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gl&&(Gl&&e.type==="mousemove"?(jo=e.screenX-Gl.screenX,Eo=e.screenY-Gl.screenY):Eo=jo=0,Gl=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),vf=mt(di),Sb=v({},di,{dataTransfer:0}),wb=mt(Sb),jb=v({},Pl,{relatedTarget:0}),Co=mt(jb),Eb=v({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Cb=mt(Eb),kb=v({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_b=mt(kb),Nb=v({},ma,{data:0}),Sf=mt(Nb),zb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ab={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tb[e])?!!t[e]:!1}function ko(){return Rb}var Ob=v({},Pl,{key:function(e){if(e.key){var t=zb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ab[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ko,charCode:function(e){return e.type==="keypress"?oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mb=mt(Ob),Ub=v({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=mt(Ub),Db=v({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ko}),Lb=mt(Db),Bb=v({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hb=mt(Bb),qb=v({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yb=mt(qb),Vb=v({},ma,{newState:0,oldState:0}),Pb=mt(Vb),Gb=[9,13,27,32],_o=dn&&"CompositionEvent"in window,Xl=null;dn&&"documentMode"in document&&(Xl=document.documentMode);var Xb=dn&&"TextEvent"in window&&!Xl,jf=dn&&(!_o||Xl&&8<Xl&&11>=Xl),Ef=" ",Cf=!1;function kf(e,t){switch(e){case"keyup":return Gb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _f(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function Fb(e,t){switch(e){case"compositionend":return _f(t);case"keypress":return t.which!==32?null:(Cf=!0,Ef);case"textInput":return e=t.data,e===Ef&&Cf?null:e;default:return null}}function Kb(e,t){if(Ia)return e==="compositionend"||!_o&&kf(e,t)?(e=yf(),si=wo=Dn=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jf&&t.locale!=="ko"?null:t.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qb[e.type]:t==="textarea"}function zf(e,t,n,l){Qa?$a?$a.push(l):$a=[l]:Qa=l,t=es(t,"onChange"),0<t.length&&(n=new ui("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Fl=null,Kl=null;function $b(e){dm(e,0)}function fi(e){var t=ql(e);if(uf(t))return e}function Af(e,t){if(e==="change")return t}var Tf=!1;if(dn){var No;if(dn){var zo="oninput"in document;if(!zo){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),zo=typeof Rf.oninput=="function"}No=zo}else No=!1;Tf=No&&(!document.documentMode||9<document.documentMode)}function Of(){Fl&&(Fl.detachEvent("onpropertychange",Mf),Kl=Fl=null)}function Mf(e){if(e.propertyName==="value"&&fi(Kl)){var t=[];zf(t,Kl,e,xo(e)),bf($b,t)}}function Ib(e,t,n){e==="focusin"?(Of(),Fl=t,Kl=n,Fl.attachEvent("onpropertychange",Mf)):e==="focusout"&&Of()}function Zb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(Kl)}function Jb(e,t){if(e==="click")return fi(t)}function Wb(e,t){if(e==="input"||e==="change")return fi(t)}function ey(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:ey;function Ql(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var c=n[l];if(!ro.call(t,c)||!_t(e[c],t[c]))return!1}return!0}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Df(e,t){var n=Uf(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uf(n)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ri(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ri(e.document)}return t}function Ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ty=dn&&"documentMode"in document&&11>=document.documentMode,Za=null,To=null,$l=null,Ro=!1;function Hf(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ro||Za==null||Za!==ri(l)||(l=Za,"selectionStart"in l&&Ao(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$l&&Ql($l,l)||($l=l,l=es(To,"onSelect"),0<l.length&&(t=new ui("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Za)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ja={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},Oo={},qf={};dn&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function ba(e){if(Oo[e])return Oo[e];if(!Ja[e])return e;var t=Ja[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qf)return Oo[e]=t[n];return e}var Yf=ba("animationend"),Vf=ba("animationiteration"),Pf=ba("animationstart"),ny=ba("transitionrun"),ay=ba("transitionstart"),ly=ba("transitioncancel"),Gf=ba("transitionend"),Xf=new Map,Mo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mo.push("scrollEnd");function Qt(e,t){Xf.set(e,t),pa(t,[e])}var hi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bt=[],Wa=0,Uo=0;function pi(){for(var e=Wa,t=Uo=Wa=0;t<e;){var n=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var c=Bt[t];Bt[t++]=null;var u=Bt[t];if(Bt[t++]=null,l!==null&&c!==null){var p=l.pending;p===null?c.next=c:(c.next=p.next,p.next=c),l.pending=c}u!==0&&Ff(n,c,u)}}function mi(e,t,n,l){Bt[Wa++]=e,Bt[Wa++]=t,Bt[Wa++]=n,Bt[Wa++]=l,Uo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Do(e,t,n,l){return mi(e,t,n,l),gi(e)}function ya(e,t){return mi(e,null,null,t),gi(e)}function Ff(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var c=!1,u=e.return;u!==null;)u.childLanes|=n,l=u.alternate,l!==null&&(l.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-kt(n),e=u.hiddenUpdates,l=e[c],l===null?e[c]=[t]:l.push(t),t.lane=n|536870912),u):null}function gi(e){if(50<br)throw br=0,Xc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var el={};function ry(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,l){return new ry(e,t,n,l)}function Lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Kf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,l,c,u){var p=0;if(l=e,typeof e=="function")Lo(e)&&(p=1);else if(typeof e=="string")p=ux(e,n,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=Nt(31,n,t,c),e.elementType=ae,e.lanes=u,e;case N:return xa(n.children,c,u,t);case _:p=8,c|=24;break;case X:return e=Nt(12,n,t,c|2),e.elementType=X,e.lanes=u,e;case H:return e=Nt(13,n,t,c),e.elementType=H,e.lanes=u,e;case $:return e=Nt(19,n,t,c),e.elementType=$,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:p=10;break e;case U:p=9;break e;case F:p=11;break e;case V:p=14;break e;case le:p=16,l=null;break e}p=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Nt(p,n,t,c),t.elementType=e,t.type=l,t.lanes=u,t}function xa(e,t,n,l){return e=Nt(7,e,l,t),e.lanes=n,e}function Bo(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function Qf(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function Ho(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $f=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var n=$f.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Kd(t)},$f.set(e,t),t)}return{value:e,source:t,stack:Kd(t)}}var tl=[],nl=0,yi=null,Il=0,qt=[],Yt=0,Ln=null,nn=1,an="";function hn(e,t){tl[nl++]=Il,tl[nl++]=yi,yi=e,Il=t}function If(e,t,n){qt[Yt++]=nn,qt[Yt++]=an,qt[Yt++]=Ln,Ln=e;var l=nn;e=an;var c=32-kt(l)-1;l&=~(1<<c),n+=1;var u=32-kt(t)+c;if(30<u){var p=c-c%5;u=(l&(1<<p)-1).toString(32),l>>=p,c-=p,nn=1<<32-kt(t)+c|n<<c|l,an=u+e}else nn=1<<u|n<<c|l,an=e}function qo(e){e.return!==null&&(hn(e,1),If(e,1,0))}function Yo(e){for(;e===yi;)yi=tl[--nl],tl[nl]=null,Il=tl[--nl],tl[nl]=null;for(;e===Ln;)Ln=qt[--Yt],qt[Yt]=null,an=qt[--Yt],qt[Yt]=null,nn=qt[--Yt],qt[Yt]=null}function Zf(e,t){qt[Yt++]=nn,qt[Yt++]=an,qt[Yt++]=Ln,nn=t.id,an=t.overflow,Ln=e}var lt=null,Le=null,we=!1,Bn=null,Vt=!1,Vo=Error(o(519));function Hn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zl(Ht(t,e)),Vo}function Jf(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[at]=e,t[pt]=l,n){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(n=0;n<xr.length;n++)ye(xr[n],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),df(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),hf(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||mm(t.textContent,n)?(l.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),l.onScroll!=null&&ye("scroll",t),l.onScrollEnd!=null&&ye("scrollend",t),l.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Hn(e,!0)}function Wf(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:lt=lt.return}}function al(e){if(e!==lt)return!1;if(!we)return Wf(e),we=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||iu(e.type,e.memoizedProps)),n=!n),n&&Le&&Hn(e),Wf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=Em(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Le=Em(e)}else t===27?(t=Le,Wn(e.type)?(e=du,du=null,Le=e):Le=t):Le=lt?Gt(e.stateNode.nextSibling):null;return!0}function va(){Le=lt=null,we=!1}function Po(){var e=Bn;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),Bn=null),e}function Zl(e){Bn===null?Bn=[e]:Bn.push(e)}var Go=j(null),Sa=null,pn=null;function qn(e,t,n){J(Go,t._currentValue),t._currentValue=n}function mn(e){e._currentValue=Go.current,P(Go)}function Xo(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Fo(e,t,n,l){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var p=c.child;u=u.firstContext;e:for(;u!==null;){var y=u;u=c;for(var w=0;w<t.length;w++)if(y.context===t[w]){u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),Xo(u.return,n,e),l||(p=null);break e}u=y.next}}else if(c.tag===18){if(p=c.return,p===null)throw Error(o(341));p.lanes|=n,u=p.alternate,u!==null&&(u.lanes|=n),Xo(p,n,e),p=null}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===e){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}}function ll(e,t,n,l){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var p=c.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var y=c.type;_t(c.pendingProps.value,p.value)||(e!==null?e.push(y):e=[y])}}else if(c===ge.current){if(p=c.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Er):e=[Er])}c=c.return}e!==null&&Fo(t,e,n,l),t.flags|=262144}function xi(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){Sa=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function rt(e){return eh(Sa,e)}function vi(e,t){return Sa===null&&wa(e),eh(e,t)}function eh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pn===null){if(e===null)throw Error(o(308));pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pn=pn.next=t;return n}var iy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},sy=a.unstable_scheduleCallback,oy=a.unstable_NormalPriority,Qe={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ko(){return{controller:new iy,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&sy(oy,function(){e.controller.abort()})}var Wl=null,Qo=0,rl=0,il=null;function cy(e,t){if(Wl===null){var n=Wl=[];Qo=0,rl=Zc(),il={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Qo++,t.then(th,th),t}function th(){if(--Qo===0&&Wl!==null){il!==null&&(il.status="fulfilled");var e=Wl;Wl=null,rl=0,il=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function uy(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(l.status="rejected",l.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),l}var nh=R.S;R.S=function(e,t){Hp=Et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&cy(e,t),nh!==null&&nh(e,t)};var ja=j(null);function $o(){var e=ja.current;return e!==null?e:Ue.pooledCache}function Si(e,t){t===null?J(ja,ja.current):J(ja,t.pool)}function ah(){var e=$o();return e===null?null:{parent:Qe._currentValue,pool:e}}var sl=Error(o(460)),Io=Error(o(474)),wi=Error(o(542)),ji={then:function(){}};function lh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sh(e),e;default:if(typeof t.status=="string")t.then(un,un);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=l}},function(l){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sh(e),e}throw Ca=t,sl}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ca=n,sl):n}}var Ca=null;function ih(){if(Ca===null)throw Error(o(459));var e=Ca;return Ca=null,e}function sh(e){if(e===sl||e===wi)throw Error(o(483))}var ol=null,er=0;function Ei(e){var t=er;return er+=1,ol===null&&(ol=[]),rh(ol,e,t)}function tr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ci(e,t){throw t.$$typeof===E?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function oh(e){function t(z,C){if(e){var A=z.deletions;A===null?(z.deletions=[C],z.flags|=16):A.push(C)}}function n(z,C){if(!e)return null;for(;C!==null;)t(z,C),C=C.sibling;return null}function l(z){for(var C=new Map;z!==null;)z.key!==null?C.set(z.key,z):C.set(z.index,z),z=z.sibling;return C}function c(z,C){return z=fn(z,C),z.index=0,z.sibling=null,z}function u(z,C,A){return z.index=A,e?(A=z.alternate,A!==null?(A=A.index,A<C?(z.flags|=67108866,C):A):(z.flags|=67108866,C)):(z.flags|=1048576,C)}function p(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function y(z,C,A,G){return C===null||C.tag!==6?(C=Bo(A,z.mode,G),C.return=z,C):(C=c(C,A),C.return=z,C)}function w(z,C,A,G){var ie=A.type;return ie===N?Y(z,C,A.props.children,G,A.key):C!==null&&(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===le&&Ea(ie)===C.type)?(C=c(C,A.props),tr(C,A),C.return=z,C):(C=bi(A.type,A.key,A.props,null,z.mode,G),tr(C,A),C.return=z,C)}function T(z,C,A,G){return C===null||C.tag!==4||C.stateNode.containerInfo!==A.containerInfo||C.stateNode.implementation!==A.implementation?(C=Ho(A,z.mode,G),C.return=z,C):(C=c(C,A.children||[]),C.return=z,C)}function Y(z,C,A,G,ie){return C===null||C.tag!==7?(C=xa(A,z.mode,G,ie),C.return=z,C):(C=c(C,A),C.return=z,C)}function K(z,C,A){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Bo(""+C,z.mode,A),C.return=z,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case M:return A=bi(C.type,C.key,C.props,null,z.mode,A),tr(A,C),A.return=z,A;case k:return C=Ho(C,z.mode,A),C.return=z,C;case le:return C=Ea(C),K(z,C,A)}if(he(C)||me(C))return C=xa(C,z.mode,A,null),C.return=z,C;if(typeof C.then=="function")return K(z,Ei(C),A);if(C.$$typeof===q)return K(z,vi(z,C),A);Ci(z,C)}return null}function O(z,C,A,G){var ie=C!==null?C.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ie!==null?null:y(z,C,""+A,G);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case M:return A.key===ie?w(z,C,A,G):null;case k:return A.key===ie?T(z,C,A,G):null;case le:return A=Ea(A),O(z,C,A,G)}if(he(A)||me(A))return ie!==null?null:Y(z,C,A,G,null);if(typeof A.then=="function")return O(z,C,Ei(A),G);if(A.$$typeof===q)return O(z,C,vi(z,A),G);Ci(z,A)}return null}function B(z,C,A,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return z=z.get(A)||null,y(C,z,""+G,ie);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return z=z.get(G.key===null?A:G.key)||null,w(C,z,G,ie);case k:return z=z.get(G.key===null?A:G.key)||null,T(C,z,G,ie);case le:return G=Ea(G),B(z,C,A,G,ie)}if(he(G)||me(G))return z=z.get(A)||null,Y(C,z,G,ie,null);if(typeof G.then=="function")return B(z,C,A,Ei(G),ie);if(G.$$typeof===q)return B(z,C,A,vi(C,G),ie);Ci(C,G)}return null}function ee(z,C,A,G){for(var ie=null,Ce=null,ne=C,pe=C=0,Se=null;ne!==null&&pe<A.length;pe++){ne.index>pe?(Se=ne,ne=null):Se=ne.sibling;var ke=O(z,ne,A[pe],G);if(ke===null){ne===null&&(ne=Se);break}e&&ne&&ke.alternate===null&&t(z,ne),C=u(ke,C,pe),Ce===null?ie=ke:Ce.sibling=ke,Ce=ke,ne=Se}if(pe===A.length)return n(z,ne),we&&hn(z,pe),ie;if(ne===null){for(;pe<A.length;pe++)ne=K(z,A[pe],G),ne!==null&&(C=u(ne,C,pe),Ce===null?ie=ne:Ce.sibling=ne,Ce=ne);return we&&hn(z,pe),ie}for(ne=l(ne);pe<A.length;pe++)Se=B(ne,z,pe,A[pe],G),Se!==null&&(e&&Se.alternate!==null&&ne.delete(Se.key===null?pe:Se.key),C=u(Se,C,pe),Ce===null?ie=Se:Ce.sibling=Se,Ce=Se);return e&&ne.forEach(function(la){return t(z,la)}),we&&hn(z,pe),ie}function oe(z,C,A,G){if(A==null)throw Error(o(151));for(var ie=null,Ce=null,ne=C,pe=C=0,Se=null,ke=A.next();ne!==null&&!ke.done;pe++,ke=A.next()){ne.index>pe?(Se=ne,ne=null):Se=ne.sibling;var la=O(z,ne,ke.value,G);if(la===null){ne===null&&(ne=Se);break}e&&ne&&la.alternate===null&&t(z,ne),C=u(la,C,pe),Ce===null?ie=la:Ce.sibling=la,Ce=la,ne=Se}if(ke.done)return n(z,ne),we&&hn(z,pe),ie;if(ne===null){for(;!ke.done;pe++,ke=A.next())ke=K(z,ke.value,G),ke!==null&&(C=u(ke,C,pe),Ce===null?ie=ke:Ce.sibling=ke,Ce=ke);return we&&hn(z,pe),ie}for(ne=l(ne);!ke.done;pe++,ke=A.next())ke=B(ne,z,pe,ke.value,G),ke!==null&&(e&&ke.alternate!==null&&ne.delete(ke.key===null?pe:ke.key),C=u(ke,C,pe),Ce===null?ie=ke:Ce.sibling=ke,Ce=ke);return e&&ne.forEach(function(Sx){return t(z,Sx)}),we&&hn(z,pe),ie}function Oe(z,C,A,G){if(typeof A=="object"&&A!==null&&A.type===N&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case M:e:{for(var ie=A.key;C!==null;){if(C.key===ie){if(ie=A.type,ie===N){if(C.tag===7){n(z,C.sibling),G=c(C,A.props.children),G.return=z,z=G;break e}}else if(C.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===le&&Ea(ie)===C.type){n(z,C.sibling),G=c(C,A.props),tr(G,A),G.return=z,z=G;break e}n(z,C);break}else t(z,C);C=C.sibling}A.type===N?(G=xa(A.props.children,z.mode,G,A.key),G.return=z,z=G):(G=bi(A.type,A.key,A.props,null,z.mode,G),tr(G,A),G.return=z,z=G)}return p(z);case k:e:{for(ie=A.key;C!==null;){if(C.key===ie)if(C.tag===4&&C.stateNode.containerInfo===A.containerInfo&&C.stateNode.implementation===A.implementation){n(z,C.sibling),G=c(C,A.children||[]),G.return=z,z=G;break e}else{n(z,C);break}else t(z,C);C=C.sibling}G=Ho(A,z.mode,G),G.return=z,z=G}return p(z);case le:return A=Ea(A),Oe(z,C,A,G)}if(he(A))return ee(z,C,A,G);if(me(A)){if(ie=me(A),typeof ie!="function")throw Error(o(150));return A=ie.call(A),oe(z,C,A,G)}if(typeof A.then=="function")return Oe(z,C,Ei(A),G);if(A.$$typeof===q)return Oe(z,C,vi(z,A),G);Ci(z,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,C!==null&&C.tag===6?(n(z,C.sibling),G=c(C,A),G.return=z,z=G):(n(z,C),G=Bo(A,z.mode,G),G.return=z,z=G),p(z)):n(z,C)}return function(z,C,A,G){try{er=0;var ie=Oe(z,C,A,G);return ol=null,ie}catch(ne){if(ne===sl||ne===wi)throw ne;var Ce=Nt(29,ne,null,z.mode);return Ce.lanes=G,Ce.return=z,Ce}}}var ka=oh(!0),ch=oh(!1),Yn=!1;function Zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,t=gi(e),Ff(e,null,n),t}return mi(e,l,t,n),gi(e)}function nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Wd(e,n)}}function Wo(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var c=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?c=u=p:u=u.next=p,n=n.next}while(n!==null);u===null?c=u=t:u=u.next=t}else c=u=t;n={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ec=!1;function ar(){if(ec){var e=il;if(e!==null)throw e}}function lr(e,t,n,l){ec=!1;var c=e.updateQueue;Yn=!1;var u=c.firstBaseUpdate,p=c.lastBaseUpdate,y=c.shared.pending;if(y!==null){c.shared.pending=null;var w=y,T=w.next;w.next=null,p===null?u=T:p.next=T,p=w;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,y=Y.lastBaseUpdate,y!==p&&(y===null?Y.firstBaseUpdate=T:y.next=T,Y.lastBaseUpdate=w))}if(u!==null){var K=c.baseState;p=0,Y=T=w=null,y=u;do{var O=y.lane&-536870913,B=O!==y.lane;if(B?(ve&O)===O:(l&O)===O){O!==0&&O===rl&&(ec=!0),Y!==null&&(Y=Y.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ee=e,oe=y;O=t;var Oe=n;switch(oe.tag){case 1:if(ee=oe.payload,typeof ee=="function"){K=ee.call(Oe,K,O);break e}K=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=oe.payload,O=typeof ee=="function"?ee.call(Oe,K,O):ee,O==null)break e;K=v({},K,O);break e;case 2:Yn=!0}}O=y.callback,O!==null&&(e.flags|=64,B&&(e.flags|=8192),B=c.callbacks,B===null?c.callbacks=[O]:B.push(O))}else B={lane:O,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Y===null?(T=Y=B,w=K):Y=Y.next=B,p|=O;if(y=y.next,y===null){if(y=c.shared.pending,y===null)break;B=y,y=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);Y===null&&(w=K),c.baseState=w,c.firstBaseUpdate=T,c.lastBaseUpdate=Y,u===null&&(c.shared.lanes=0),Qn|=p,e.lanes=p,e.memoizedState=K}}function uh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function dh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)uh(n[e],t)}var cl=j(null),ki=j(0);function fh(e,t){e=En,J(ki,e),J(cl,t),En=e|t.baseLanes}function tc(){J(ki,En),J(cl,cl.current)}function nc(){En=ki.current,P(cl),P(ki)}var zt=j(null),Pt=null;function Gn(e){var t=e.alternate;J(Fe,Fe.current&1),J(zt,e),Pt===null&&(t===null||cl.current!==null||t.memoizedState!==null)&&(Pt=e)}function ac(e){J(Fe,Fe.current),J(zt,e),Pt===null&&(Pt=e)}function hh(e){e.tag===22?(J(Fe,Fe.current),J(zt,e),Pt===null&&(Pt=e)):Xn()}function Xn(){J(Fe,Fe.current),J(zt,zt.current)}function At(e){P(zt),Pt===e&&(Pt=null),P(Fe)}var Fe=j(0);function _i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cu(n)||uu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gn=0,fe=null,Te=null,$e=null,Ni=!1,ul=!1,_a=!1,zi=0,rr=0,dl=null,dy=0;function Ge(){throw Error(o(321))}function lc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function rc(e,t,n,l,c,u){return gn=u,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Ih:vc,_a=!1,u=n(l,c),_a=!1,ul&&(u=mh(t,n,l,c)),ph(e),u}function ph(e){R.H=or;var t=Te!==null&&Te.next!==null;if(gn=0,$e=Te=fe=null,Ni=!1,rr=0,dl=null,t)throw Error(o(300));e===null||Ie||(e=e.dependencies,e!==null&&xi(e)&&(Ie=!0))}function mh(e,t,n,l){fe=e;var c=0;do{if(ul&&(dl=null),rr=0,ul=!1,25<=c)throw Error(o(301));if(c+=1,$e=Te=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=Zh,u=t(n,l)}while(ul);return u}function fy(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?ir(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(fe.flags|=1024),t}function ic(){var e=zi!==0;return zi=0,e}function sc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function oc(e){if(Ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ni=!1}gn=0,$e=Te=fe=null,ul=!1,rr=zi=0,dl=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?fe.memoizedState=$e=e:$e=$e.next=e,$e}function Ke(){if(Te===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=$e===null?fe.memoizedState:$e.next;if(t!==null)$e=t,Te=e;else{if(e===null)throw fe.alternate===null?Error(o(467)):Error(o(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},$e===null?fe.memoizedState=$e=e:$e=$e.next=e}return $e}function Ai(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ir(e){var t=rr;return rr+=1,dl===null&&(dl=[]),e=rh(dl,e,t),t=fe,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Ih:vc),e}function Ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ir(e);if(e.$$typeof===q)return rt(e)}throw Error(o(438,String(e)))}function cc(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ai(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=je;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function Ri(e){var t=Ke();return uc(t,Te,e)}function uc(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var c=e.baseQueue,u=l.pending;if(u!==null){if(c!==null){var p=c.next;c.next=u.next,u.next=p}t.baseQueue=c=u,l.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var y=p=null,w=null,T=t,Y=!1;do{var K=T.lane&-536870913;if(K!==T.lane?(ve&K)===K:(gn&K)===K){var O=T.revertLane;if(O===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),K===rl&&(Y=!0);else if((gn&O)===O){T=T.next,O===rl&&(Y=!0);continue}else K={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},w===null?(y=w=K,p=u):w=w.next=K,fe.lanes|=O,Qn|=O;K=T.action,_a&&n(u,K),u=T.hasEagerState?T.eagerState:n(u,K)}else O={lane:K,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},w===null?(y=w=O,p=u):w=w.next=O,fe.lanes|=K,Qn|=K;T=T.next}while(T!==null&&T!==t);if(w===null?p=u:w.next=y,!_t(u,e.memoizedState)&&(Ie=!0,Y&&(n=il,n!==null)))throw n;e.memoizedState=u,e.baseState=p,e.baseQueue=w,l.lastRenderedState=u}return c===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function dc(e){var t=Ke(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,c=n.pending,u=t.memoizedState;if(c!==null){n.pending=null;var p=c=c.next;do u=e(u,p.action),p=p.next;while(p!==c);_t(u,t.memoizedState)||(Ie=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,l]}function gh(e,t,n){var l=fe,c=Ke(),u=we;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var p=!_t((Te||c).memoizedState,n);if(p&&(c.memoizedState=n,Ie=!0),c=c.queue,pc(xh.bind(null,l,c,e),[e]),c.getSnapshot!==t||p||$e!==null&&$e.memoizedState.tag&1){if(l.flags|=2048,fl(9,{destroy:void 0},yh.bind(null,l,c,n,t),null),Ue===null)throw Error(o(349));u||(gn&127)!==0||bh(l,t,n)}return n}function bh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=Ai(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yh(e,t,n,l){t.value=n,t.getSnapshot=l,vh(t)&&Sh(e)}function xh(e,t,n){return n(function(){vh(t)&&Sh(e)})}function vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function Sh(e){var t=ya(e,2);t!==null&&vt(t,e,2)}function fc(e){var t=dt();if(typeof e=="function"){var n=e;if(e=n(),_a){Mn(!0);try{n()}finally{Mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function wh(e,t,n,l){return e.baseState=n,uc(e,Te,typeof l=="function"?l:bn)}function hy(e,t,n,l,c){if(Ui(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};R.T!==null?n(!0):u.isTransition=!1,l(u),n=t.pending,n===null?(u.next=t.pending=u,jh(t,u)):(u.next=n.next,t.pending=n.next=u)}}function jh(e,t){var n=t.action,l=t.payload,c=e.state;if(t.isTransition){var u=R.T,p={};R.T=p;try{var y=n(c,l),w=R.S;w!==null&&w(p,y),Eh(e,t,y)}catch(T){hc(e,t,T)}finally{u!==null&&p.types!==null&&(u.types=p.types),R.T=u}}else try{u=n(c,l),Eh(e,t,u)}catch(T){hc(e,t,T)}}function Eh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Ch(e,t,l)},function(l){return hc(e,t,l)}):Ch(e,t,n)}function Ch(e,t,n){t.status="fulfilled",t.value=n,kh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,jh(e,n)))}function hc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,kh(t),t=t.next;while(t!==l)}e.action=null}function kh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _h(e,t){return t}function Nh(e,t){if(we){var n=Ue.formState;if(n!==null){e:{var l=fe;if(we){if(Le){t:{for(var c=Le,u=Vt;c.nodeType!==8;){if(!u){c=null;break t}if(c=Gt(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Le=Gt(c.nextSibling),l=c.data==="F!";break e}}Hn(l)}l=!1}l&&(t=n[0])}}return n=dt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_h,lastRenderedState:t},n.queue=l,n=Kh.bind(null,fe,l),l.dispatch=n,l=fc(!1),u=xc.bind(null,fe,!1,l.queue),l=dt(),c={state:t,dispatch:null,action:e,pending:null},l.queue=c,n=hy.bind(null,fe,c,u,n),c.dispatch=n,l.memoizedState=e,[t,n,!1]}function zh(e){var t=Ke();return Ah(t,Te,e)}function Ah(e,t,n){if(t=uc(e,t,_h)[0],e=Ri(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ir(t)}catch(p){throw p===sl?wi:p}else l=t;t=Ke();var c=t.queue,u=c.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,fl(9,{destroy:void 0},py.bind(null,c,n),null)),[l,u,e]}function py(e,t){e.action=t}function Th(e){var t=Ke(),n=Te;if(n!==null)return Ah(t,n,e);Ke(),t=t.memoizedState,n=Ke();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function fl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=fe.updateQueue,t===null&&(t=Ai(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Rh(){return Ke().memoizedState}function Oi(e,t,n,l){var c=dt();fe.flags|=e,c.memoizedState=fl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Mi(e,t,n,l){var c=Ke();l=l===void 0?null:l;var u=c.memoizedState.inst;Te!==null&&l!==null&&lc(l,Te.memoizedState.deps)?c.memoizedState=fl(t,u,n,l):(fe.flags|=e,c.memoizedState=fl(1|t,u,n,l))}function Oh(e,t){Oi(8390656,8,e,t)}function pc(e,t){Mi(2048,8,e,t)}function my(e){fe.flags|=4;var t=fe.updateQueue;if(t===null)t=Ai(),fe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Mh(e){var t=Ke().memoizedState;return my({ref:t,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Uh(e,t){return Mi(4,2,e,t)}function Dh(e,t){return Mi(4,4,e,t)}function Lh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bh(e,t,n){n=n!=null?n.concat([e]):null,Mi(4,4,Lh.bind(null,t,e),n)}function mc(){}function Hh(e,t){var n=Ke();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&lc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function qh(e,t){var n=Ke();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&lc(t,l[1]))return l[0];if(l=e(),_a){Mn(!0);try{e()}finally{Mn(!1)}}return n.memoizedState=[l,t],l}function gc(e,t,n){return n===void 0||(gn&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Yp(),fe.lanes|=e,Qn|=e,n)}function Yh(e,t,n,l){return _t(n,t)?n:cl.current!==null?(e=gc(e,n,l),_t(e,t)||(Ie=!0),e):(gn&42)===0||(gn&1073741824)!==0&&(ve&261930)===0?(Ie=!0,e.memoizedState=n):(e=Yp(),fe.lanes|=e,Qn|=e,t)}function Vh(e,t,n,l,c){var u=I.p;I.p=u!==0&&8>u?u:8;var p=R.T,y={};R.T=y,xc(e,!1,t,n);try{var w=c(),T=R.S;if(T!==null&&T(y,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var Y=uy(w,l);sr(e,t,Y,Ot(e))}else sr(e,t,l,Ot(e))}catch(K){sr(e,t,{then:function(){},status:"rejected",reason:K},Ot())}finally{I.p=u,p!==null&&y.types!==null&&(p.types=y.types),R.T=p}}function gy(){}function bc(e,t,n,l){if(e.tag!==5)throw Error(o(476));var c=Ph(e).queue;Vh(e,c,t,te,n===null?gy:function(){return Gh(e),n(l)})}function Ph(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Gh(e){var t=Ph(e);t.next===null&&(t=e.alternate.memoizedState),sr(e,t.next.queue,{},Ot())}function yc(){return rt(Er)}function Xh(){return Ke().memoizedState}function Fh(){return Ke().memoizedState}function by(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ot();e=Vn(n);var l=Pn(t,e,n);l!==null&&(vt(l,t,n),nr(l,t,n)),t={cache:Ko()},e.payload=t;return}t=t.return}}function yy(e,t,n){var l=Ot();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ui(e)?Qh(t,n):(n=Do(e,t,n,l),n!==null&&(vt(n,e,l),$h(n,t,l)))}function Kh(e,t,n){var l=Ot();sr(e,t,n,l)}function sr(e,t,n,l){var c={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ui(e))Qh(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var p=t.lastRenderedState,y=u(p,n);if(c.hasEagerState=!0,c.eagerState=y,_t(y,p))return mi(e,t,c,0),Ue===null&&pi(),!1}catch{}if(n=Do(e,t,c,l),n!==null)return vt(n,e,l),$h(n,t,l),!0}return!1}function xc(e,t,n,l){if(l={lane:2,revertLane:Zc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ui(e)){if(t)throw Error(o(479))}else t=Do(e,n,l,2),t!==null&&vt(t,e,2)}function Ui(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Qh(e,t){ul=Ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $h(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Wd(e,n)}}var or={readContext:rt,use:Ti,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};or.useEffectEvent=Ge;var Ih={readContext:rt,use:Ti,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Oh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Oi(4194308,4,Lh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){Oi(4,2,e,t)},useMemo:function(e,t){var n=dt();t=t===void 0?null:t;var l=e();if(_a){Mn(!0);try{e()}finally{Mn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=dt();if(n!==void 0){var c=n(t);if(_a){Mn(!0);try{n(t)}finally{Mn(!1)}}}else c=t;return l.memoizedState=l.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},l.queue=e,e=e.dispatch=yy.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=fc(e);var t=e.queue,n=Kh.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:mc,useDeferredValue:function(e,t){var n=dt();return gc(n,e,t)},useTransition:function(){var e=fc(!1);return e=Vh.bind(null,fe,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=fe,c=dt();if(we){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ue===null)throw Error(o(349));(ve&127)!==0||bh(l,t,n)}c.memoizedState=n;var u={value:n,getSnapshot:t};return c.queue=u,Oh(xh.bind(null,l,u,e),[e]),l.flags|=2048,fl(9,{destroy:void 0},yh.bind(null,l,u,n,t),null),n},useId:function(){var e=dt(),t=Ue.identifierPrefix;if(we){var n=an,l=nn;n=(l&~(1<<32-kt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=zi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=dy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:yc,useFormState:Nh,useActionState:Nh,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=xc.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:cc,useCacheRefresh:function(){return dt().memoizedState=by.bind(null,fe)},useEffectEvent:function(e){var t=dt(),n={impl:e};return t.memoizedState=n,function(){if((Ne&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},vc={readContext:rt,use:Ti,useCallback:Hh,useContext:rt,useEffect:pc,useImperativeHandle:Bh,useInsertionEffect:Uh,useLayoutEffect:Dh,useMemo:qh,useReducer:Ri,useRef:Rh,useState:function(){return Ri(bn)},useDebugValue:mc,useDeferredValue:function(e,t){var n=Ke();return Yh(n,Te.memoizedState,e,t)},useTransition:function(){var e=Ri(bn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:ir(e),t]},useSyncExternalStore:gh,useId:Xh,useHostTransitionStatus:yc,useFormState:zh,useActionState:zh,useOptimistic:function(e,t){var n=Ke();return wh(n,Te,e,t)},useMemoCache:cc,useCacheRefresh:Fh};vc.useEffectEvent=Mh;var Zh={readContext:rt,use:Ti,useCallback:Hh,useContext:rt,useEffect:pc,useImperativeHandle:Bh,useInsertionEffect:Uh,useLayoutEffect:Dh,useMemo:qh,useReducer:dc,useRef:Rh,useState:function(){return dc(bn)},useDebugValue:mc,useDeferredValue:function(e,t){var n=Ke();return Te===null?gc(n,e,t):Yh(n,Te.memoizedState,e,t)},useTransition:function(){var e=dc(bn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:ir(e),t]},useSyncExternalStore:gh,useId:Xh,useHostTransitionStatus:yc,useFormState:Th,useActionState:Th,useOptimistic:function(e,t){var n=Ke();return Te!==null?wh(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:cc,useCacheRefresh:Fh};Zh.useEffectEvent=Mh;function Sc(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Ot(),c=Vn(l);c.payload=t,n!=null&&(c.callback=n),t=Pn(e,c,l),t!==null&&(vt(t,e,l),nr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Ot(),c=Vn(l);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=Pn(e,c,l),t!==null&&(vt(t,e,l),nr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),l=Vn(n);l.tag=2,t!=null&&(l.callback=t),t=Pn(e,l,n),t!==null&&(vt(t,e,n),nr(t,e,n))}};function Jh(e,t,n,l,c,u,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,p):t.prototype&&t.prototype.isPureReactComponent?!Ql(n,l)||!Ql(c,u):!0}function Wh(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&wc.enqueueReplaceState(t,t.state,null)}function Na(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function ep(e){hi(e)}function tp(e){console.error(e)}function np(e){hi(e)}function Di(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ap(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function jc(e,t,n){return n=Vn(n),n.tag=3,n.payload={element:null},n.callback=function(){Di(e,t)},n}function lp(e){return e=Vn(e),e.tag=3,e}function rp(e,t,n,l){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var u=l.value;e.payload=function(){return c(u)},e.callback=function(){ap(t,n,l)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){ap(t,n,l),typeof c!="function"&&($n===null?$n=new Set([this]):$n.add(this));var y=l.stack;this.componentDidCatch(l.value,{componentStack:y!==null?y:""})})}function xy(e,t,n,l,c){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&ll(t,n,c,!0),n=zt.current,n!==null){switch(n.tag){case 31:case 13:return Pt===null?Qi():n.alternate===null&&Xe===0&&(Xe=3),n.flags&=-257,n.flags|=65536,n.lanes=c,l===ji?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Qc(e,l,c)),!1;case 22:return n.flags|=65536,l===ji?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Qc(e,l,c)),!1}throw Error(o(435,n.tag))}return Qc(e,l,c),Qi(),!1}if(we)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,l!==Vo&&(e=Error(o(422),{cause:l}),Zl(Ht(e,n)))):(l!==Vo&&(t=Error(o(423),{cause:l}),Zl(Ht(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,l=Ht(l,n),c=jc(e.stateNode,l,c),Wo(e,c),Xe!==4&&(Xe=2)),!1;var u=Error(o(520),{cause:l});if(u=Ht(u,n),gr===null?gr=[u]:gr.push(u),Xe!==4&&(Xe=2),t===null)return!0;l=Ht(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=jc(n.stateNode,l,e),Wo(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&($n===null||!$n.has(u))))return n.flags|=65536,c&=-c,n.lanes|=c,c=lp(c),rp(c,e,n,l),Wo(n,c),!1}n=n.return}while(n!==null);return!1}var Ec=Error(o(461)),Ie=!1;function it(e,t,n,l){t.child=e===null?ch(t,null,n,l):ka(t,e.child,n,l)}function ip(e,t,n,l,c){n=n.render;var u=t.ref;if("ref"in l){var p={};for(var y in l)y!=="ref"&&(p[y]=l[y])}else p=l;return wa(t),l=rc(e,t,n,p,u,c),y=ic(),e!==null&&!Ie?(sc(e,t,c),yn(e,t,c)):(we&&y&&qo(t),t.flags|=1,it(e,t,l,c),t.child)}function sp(e,t,n,l,c){if(e===null){var u=n.type;return typeof u=="function"&&!Lo(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,op(e,t,u,l,c)):(e=bi(n.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Rc(e,c)){var p=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ql,n(p,l)&&e.ref===t.ref)return yn(e,t,c)}return t.flags|=1,e=fn(u,l),e.ref=t.ref,e.return=t,t.child=e}function op(e,t,n,l,c){if(e!==null){var u=e.memoizedProps;if(Ql(u,l)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=l=u,Rc(e,c))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,yn(e,t,c)}return Cc(e,t,n,l,c)}function cp(e,t,n,l){var c=l.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(l=t.child=e.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;l=c&~u}else l=0,t.child=null;return up(e,t,u,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Si(t,u!==null?u.cachePool:null),u!==null?fh(t,u):tc(),hh(t);else return l=t.lanes=536870912,up(e,t,u!==null?u.baseLanes|n:n,n,l)}else u!==null?(Si(t,u.cachePool),fh(t,u),Xn(),t.memoizedState=null):(e!==null&&Si(t,null),tc(),Xn());return it(e,t,c,n),t.child}function cr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function up(e,t,n,l,c){var u=$o();return u=u===null?null:{parent:Qe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&Si(t,null),tc(),hh(t),e!==null&&ll(e,t,l,!0),t.childLanes=c,null}function Li(e,t){return t=Hi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dp(e,t,n){return ka(t,e.child,null,n),e=Li(t,t.pendingProps),e.flags|=2,At(t),t.memoizedState=null,e}function vy(e,t,n){var l=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=Li(t,l),t.lanes=536870912,cr(null,e);if(ac(t),(e=Le)?(e=jm(e,Vt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Qf(e),n.return=t,t.child=n,lt=t,Le=null)):e=null,e===null)throw Hn(t);return t.lanes=536870912,null}return Li(t,l)}var u=e.memoizedState;if(u!==null){var p=u.dehydrated;if(ac(t),c)if(t.flags&256)t.flags&=-257,t=dp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ie||ll(e,t,n,!1),c=(n&e.childLanes)!==0,Ie||c){if(l=Ue,l!==null&&(p=ef(l,n),p!==0&&p!==u.retryLane))throw u.retryLane=p,ya(e,p),vt(l,e,p),Ec;Qi(),t=dp(e,t,n)}else e=u.treeContext,Le=Gt(p.nextSibling),lt=t,we=!0,Bn=null,Vt=!1,e!==null&&Zf(t,e),t=Li(t,l),t.flags|=4096;return t}return e=fn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cc(e,t,n,l,c){return wa(t),n=rc(e,t,n,l,void 0,c),l=ic(),e!==null&&!Ie?(sc(e,t,c),yn(e,t,c)):(we&&l&&qo(t),t.flags|=1,it(e,t,n,c),t.child)}function fp(e,t,n,l,c,u){return wa(t),t.updateQueue=null,n=mh(t,l,n,c),ph(e),l=ic(),e!==null&&!Ie?(sc(e,t,u),yn(e,t,u)):(we&&l&&qo(t),t.flags|=1,it(e,t,n,u),t.child)}function hp(e,t,n,l,c){if(wa(t),t.stateNode===null){var u=el,p=n.contextType;typeof p=="object"&&p!==null&&(u=rt(p)),u=new n(l,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=wc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=l,u.state=t.memoizedState,u.refs={},Zo(t),p=n.contextType,u.context=typeof p=="object"&&p!==null?rt(p):el,u.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Sc(t,n,p,l),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&wc.enqueueReplaceState(u,u.state,null),lr(t,l,u,c),ar(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){u=t.stateNode;var y=t.memoizedProps,w=Na(n,y);u.props=w;var T=u.context,Y=n.contextType;p=el,typeof Y=="object"&&Y!==null&&(p=rt(Y));var K=n.getDerivedStateFromProps;Y=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,Y||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||T!==p)&&Wh(t,u,l,p),Yn=!1;var O=t.memoizedState;u.state=O,lr(t,l,u,c),ar(),T=t.memoizedState,y||O!==T||Yn?(typeof K=="function"&&(Sc(t,n,K,l),T=t.memoizedState),(w=Yn||Jh(t,n,w,l,O,T,p))?(Y||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=T),u.props=l,u.state=T,u.context=p,l=w):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{u=t.stateNode,Jo(e,t),p=t.memoizedProps,Y=Na(n,p),u.props=Y,K=t.pendingProps,O=u.context,T=n.contextType,w=el,typeof T=="object"&&T!==null&&(w=rt(T)),y=n.getDerivedStateFromProps,(T=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==K||O!==w)&&Wh(t,u,l,w),Yn=!1,O=t.memoizedState,u.state=O,lr(t,l,u,c),ar();var B=t.memoizedState;p!==K||O!==B||Yn||e!==null&&e.dependencies!==null&&xi(e.dependencies)?(typeof y=="function"&&(Sc(t,n,y,l),B=t.memoizedState),(Y=Yn||Jh(t,n,Y,l,O,B,w)||e!==null&&e.dependencies!==null&&xi(e.dependencies))?(T||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,B,w),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,B,w)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=B),u.props=l,u.state=B,u.context=w,l=Y):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),l=!1)}return u=l,Bi(e,t),l=(t.flags&128)!==0,u||l?(u=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&l?(t.child=ka(t,e.child,null,c),t.child=ka(t,null,n,c)):it(e,t,n,c),t.memoizedState=u.state,e=t.child):e=yn(e,t,c),e}function pp(e,t,n,l){return va(),t.flags|=256,it(e,t,n,l),t.child}var kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:ah()}}function Nc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function mp(e,t,n){var l=t.pendingProps,c=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),p&&(c=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(c?Gn(t):Xn(),(e=Le)?(e=jm(e,Vt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=Qf(e),n.return=t,t.child=n,lt=t,Le=null)):e=null,e===null)throw Hn(t);return uu(e)?t.lanes=32:t.lanes=536870912,null}var y=l.children;return l=l.fallback,c?(Xn(),c=t.mode,y=Hi({mode:"hidden",children:y},c),l=xa(l,c,n,null),y.return=t,l.return=t,y.sibling=l,t.child=y,l=t.child,l.memoizedState=_c(n),l.childLanes=Nc(e,p,n),t.memoizedState=kc,cr(null,l)):(Gn(t),zc(t,y))}var w=e.memoizedState;if(w!==null&&(y=w.dehydrated,y!==null)){if(u)t.flags&256?(Gn(t),t.flags&=-257,t=Ac(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),y=l.fallback,c=t.mode,l=Hi({mode:"visible",children:l.children},c),y=xa(y,c,n,null),y.flags|=2,l.return=t,y.return=t,l.sibling=y,t.child=l,ka(t,e.child,null,n),l=t.child,l.memoizedState=_c(n),l.childLanes=Nc(e,p,n),t.memoizedState=kc,t=cr(null,l));else if(Gn(t),uu(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var T=p.dgst;p=T,l=Error(o(419)),l.stack="",l.digest=p,Zl({value:l,source:null,stack:null}),t=Ac(e,t,n)}else if(Ie||ll(e,t,n,!1),p=(n&e.childLanes)!==0,Ie||p){if(p=Ue,p!==null&&(l=ef(p,n),l!==0&&l!==w.retryLane))throw w.retryLane=l,ya(e,l),vt(p,e,l),Ec;cu(y)||Qi(),t=Ac(e,t,n)}else cu(y)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Le=Gt(y.nextSibling),lt=t,we=!0,Bn=null,Vt=!1,e!==null&&Zf(t,e),t=zc(t,l.children),t.flags|=4096);return t}return c?(Xn(),y=l.fallback,c=t.mode,w=e.child,T=w.sibling,l=fn(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,T!==null?y=fn(T,y):(y=xa(y,c,n,null),y.flags|=2),y.return=t,l.return=t,l.sibling=y,t.child=l,cr(null,l),l=t.child,y=e.child.memoizedState,y===null?y=_c(n):(c=y.cachePool,c!==null?(w=Qe._currentValue,c=c.parent!==w?{parent:w,pool:w}:c):c=ah(),y={baseLanes:y.baseLanes|n,cachePool:c}),l.memoizedState=y,l.childLanes=Nc(e,p,n),t.memoizedState=kc,cr(e.child,l)):(Gn(t),n=e.child,e=n.sibling,n=fn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function zc(e,t){return t=Hi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hi(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function Ac(e,t,n){return ka(t,e.child,null,n),e=zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gp(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Xo(e.return,t,n)}function Tc(e,t,n,l,c,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:c,treeForkCount:u}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=n,p.tailMode=c,p.treeForkCount=u)}function bp(e,t,n){var l=t.pendingProps,c=l.revealOrder,u=l.tail;l=l.children;var p=Fe.current,y=(p&2)!==0;if(y?(p=p&1|2,t.flags|=128):p&=1,J(Fe,p),it(e,t,l,n),l=we?Il:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gp(e,n,t);else if(e.tag===19)gp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&_i(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),Tc(t,!1,c,n,u,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&_i(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}Tc(t,!0,n,null,u,l);break;case"together":Tc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ll(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xi(e)))}function Sy(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),qn(t,Qe,e.memoizedState.cache),va();break;case 27:case 5:On(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ac(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?mp(e,t,n):(Gn(t),e=yn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var c=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(ll(e,t,n,!1),l=(n&t.childLanes)!==0),c){if(l)return bp(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),J(Fe,Fe.current),l)break;return null;case 22:return t.lanes=0,cp(e,t,n,t.pendingProps);case 24:qn(t,Qe,e.memoizedState.cache)}return yn(e,t,n)}function yp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Rc(e,n)&&(t.flags&128)===0)return Ie=!1,Sy(e,t,n);Ie=(e.flags&131072)!==0}else Ie=!1,we&&(t.flags&1048576)!==0&&If(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e=="function")Lo(e)?(l=Na(e,l),t.tag=1,t=hp(null,t,e,l,n)):(t.tag=0,t=Cc(null,t,e,l,n));else{if(e!=null){var c=e.$$typeof;if(c===F){t.tag=11,t=ip(null,t,e,l,n);break e}else if(c===V){t.tag=14,t=sp(null,t,e,l,n);break e}}throw t=re(e)||e,Error(o(306,t,""))}}return t;case 0:return Cc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,c=Na(l,t.pendingProps),hp(e,t,l,c,n);case 3:e:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var u=t.memoizedState;c=u.element,Jo(e,t),lr(t,l,null,n);var p=t.memoizedState;if(l=p.cache,qn(t,Qe,l),l!==u.cache&&Fo(t,[Qe],n,!0),ar(),l=p.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=pp(e,t,l,n);break e}else if(l!==c){c=Ht(Error(o(424)),t),Zl(c),t=pp(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Le=Gt(e.firstChild),lt=t,we=!0,Bn=null,Vt=!0,n=ch(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(va(),l===c){t=yn(e,t,n);break e}it(e,t,l,n)}t=t.child}return t;case 26:return Bi(e,t),e===null?(n=zm(t.type,null,t.pendingProps,null))?t.memoizedState=n:we||(n=t.type,e=t.pendingProps,l=ts(se.current).createElement(n),l[at]=t,l[pt]=e,st(l,n,e),We(l),t.stateNode=l):t.memoizedState=zm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return On(t),e===null&&we&&(l=t.stateNode=km(t.type,t.pendingProps,se.current),lt=t,Vt=!0,c=Le,Wn(t.type)?(du=c,Le=Gt(l.firstChild)):Le=c),it(e,t,t.pendingProps.children,n),Bi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((c=l=Le)&&(l=Zy(l,t.type,t.pendingProps,Vt),l!==null?(t.stateNode=l,lt=t,Le=Gt(l.firstChild),Vt=!1,c=!0):c=!1),c||Hn(t)),On(t),c=t.type,u=t.pendingProps,p=e!==null?e.memoizedProps:null,l=u.children,iu(c,u)?l=null:p!==null&&iu(c,p)&&(t.flags|=32),t.memoizedState!==null&&(c=rc(e,t,fy,null,null,n),Er._currentValue=c),Bi(e,t),it(e,t,l,n),t.child;case 6:return e===null&&we&&((e=n=Le)&&(n=Jy(n,t.pendingProps,Vt),n!==null?(t.stateNode=n,lt=t,Le=null,e=!0):e=!1),e||Hn(t)),null;case 13:return mp(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ka(t,null,l,n):it(e,t,l,n),t.child;case 11:return ip(e,t,t.type,t.pendingProps,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,qn(t,t.type,l.value),it(e,t,l.children,n),t.child;case 9:return c=t.type._context,l=t.pendingProps.children,wa(t),c=rt(c),l=l(c),t.flags|=1,it(e,t,l,n),t.child;case 14:return sp(e,t,t.type,t.pendingProps,n);case 15:return op(e,t,t.type,t.pendingProps,n);case 19:return bp(e,t,n);case 31:return vy(e,t,n);case 22:return cp(e,t,n,t.pendingProps);case 24:return wa(t),l=rt(Qe),e===null?(c=$o(),c===null&&(c=Ue,u=Ko(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=n),c=u),t.memoizedState={parent:l,cache:c},Zo(t),qn(t,Qe,c)):((e.lanes&n)!==0&&(Jo(e,t),lr(t,null,null,n),ar()),c=e.memoizedState,u=t.memoizedState,c.parent!==l?(c={parent:l,cache:l},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),qn(t,Qe,l)):(l=u.cache,qn(t,Qe,l),l!==c.cache&&Fo(t,[Qe],n,!0))),it(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function xn(e){e.flags|=4}function Oc(e,t,n,l,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Xp())e.flags|=8192;else throw Ca=ji,Io}else e.flags&=-16777217}function xp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mm(t))if(Xp())e.flags|=8192;else throw Ca=ji,Io}function qi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Zd():536870912,e.lanes|=t,gl|=t)}function ur(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function wy(e,t,n){var l=t.pendingProps;switch(Yo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),mn(Qe),Me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(al(t)?xn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Po())),Be(t),null;case 26:var c=t.type,u=t.memoizedState;return e===null?(xn(t),u!==null?(Be(t),xp(t,u)):(Be(t),Oc(t,c,null,l,n))):u?u!==e.memoizedState?(xn(t),Be(t),xp(t,u)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&xn(t),Be(t),Oc(t,c,e,l,n)),null;case 27:if(da(t),n=se.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Be(t),null}e=Q.current,al(t)?Jf(t):(e=km(c,l,n),t.stateNode=e,xn(t))}return Be(t),null;case 5:if(da(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Be(t),null}if(u=Q.current,al(t))Jf(t);else{var p=ts(se.current);switch(u){case 1:u=p.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=p.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=p.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=p.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=p.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof l.is=="string"?p.createElement("select",{is:l.is}):p.createElement("select"),l.multiple?u.multiple=!0:l.size&&(u.size=l.size);break;default:u=typeof l.is=="string"?p.createElement(c,{is:l.is}):p.createElement(c)}}u[at]=t,u[pt]=l;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)u.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=u;e:switch(st(u,c,l),c){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&xn(t)}}return Be(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&xn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=se.current,al(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,c=lt,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}e[at]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||mm(e.nodeValue,n)),e||Hn(t,!0)}else e=ts(e).createTextNode(l),e[at]=t,t.stateNode=e}return Be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=al(t),n!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[at]=t}else va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else n=Po(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(At(t),t):(At(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Be(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=al(t),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[at]=t}else va(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),c=!1}else c=Po(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(At(t),t):(At(t),null)}return At(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool),u=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==c&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),qi(t,t.updateQueue),Be(t),null);case 4:return Me(),e===null&&tu(t.stateNode.containerInfo),Be(t),null;case 10:return mn(t.type),Be(t),null;case 19:if(P(Fe),l=t.memoizedState,l===null)return Be(t),null;if(c=(t.flags&128)!==0,u=l.rendering,u===null)if(c)ur(l,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=_i(e),u!==null){for(t.flags|=128,ur(l,!1),e=u.updateQueue,t.updateQueue=e,qi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Kf(n,e),n=n.sibling;return J(Fe,Fe.current&1|2),we&&hn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Et()>Xi&&(t.flags|=128,c=!0,ur(l,!1),t.lanes=4194304)}else{if(!c)if(e=_i(u),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,qi(t,e),ur(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!we)return Be(t),null}else 2*Et()-l.renderingStartTime>Xi&&n!==536870912&&(t.flags|=128,c=!0,ur(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(e=l.last,e!==null?e.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Et(),e.sibling=null,n=Fe.current,J(Fe,c?n&1|2:n&1),we&&hn(t,l.treeForkCount),e):(Be(t),null);case 22:case 23:return At(t),nc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),n=t.updateQueue,n!==null&&qi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&P(ja),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),mn(Qe),Be(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function jy(e,t){switch(Yo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(Qe),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return da(t),null;case 31:if(t.memoizedState!==null){if(At(t),t.alternate===null)throw Error(o(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(At(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Fe),null;case 4:return Me(),null;case 10:return mn(t.type),null;case 22:case 23:return At(t),nc(),e!==null&&P(ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return mn(Qe),null;case 25:return null;default:return null}}function vp(e,t){switch(Yo(t),t.tag){case 3:mn(Qe),Me();break;case 26:case 27:case 5:da(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&At(t);break;case 13:At(t);break;case 19:P(Fe);break;case 10:mn(t.type);break;case 22:case 23:At(t),nc(),e!==null&&P(ja);break;case 24:mn(Qe)}}function dr(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var c=l.next;n=c;do{if((n.tag&e)===e){l=void 0;var u=n.create,p=n.inst;l=u(),p.destroy=l}n=n.next}while(n!==c)}}catch(y){Ae(t,t.return,y)}}function Fn(e,t,n){try{var l=t.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var u=c.next;l=u;do{if((l.tag&e)===e){var p=l.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,c=t;var w=n,T=y;try{T()}catch(Y){Ae(c,w,Y)}}}l=l.next}while(l!==u)}}catch(Y){Ae(t,t.return,Y)}}function Sp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{dh(t,n)}catch(l){Ae(e,e.return,l)}}}function wp(e,t,n){n.props=Na(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ae(e,t,l)}}function fr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(c){Ae(e,t,c)}}function ln(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(c){Ae(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Ae(e,t,c)}else n.current=null}function jp(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(c){Ae(e,e.return,c)}}function Mc(e,t,n){try{var l=e.stateNode;Xy(l,e.type,n,t),l[pt]=t}catch(c){Ae(e,e.return,c)}}function Ep(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wn(e.type)||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(l!==4&&(l===27&&Wn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Dc(e,t,n),e=e.sibling;e!==null;)Dc(e,t,n),e=e.sibling}function Yi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Wn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}function Cp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);st(t,l,n),t[at]=e,t[pt]=n}catch(u){Ae(e,e.return,u)}}var vn=!1,Ze=!1,Lc=!1,kp=typeof WeakSet=="function"?WeakSet:Set,et=null;function Ey(e,t){if(e=e.containerInfo,lu=os,e=Bf(e),Ao(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var c=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var p=0,y=-1,w=-1,T=0,Y=0,K=e,O=null;t:for(;;){for(var B;K!==n||c!==0&&K.nodeType!==3||(y=p+c),K!==u||l!==0&&K.nodeType!==3||(w=p+l),K.nodeType===3&&(p+=K.nodeValue.length),(B=K.firstChild)!==null;)O=K,K=B;for(;;){if(K===e)break t;if(O===n&&++T===c&&(y=p),O===u&&++Y===l&&(w=p),(B=K.nextSibling)!==null)break;K=O,O=K.parentNode}K=B}n=y===-1||w===-1?null:{start:y,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(ru={focusedElem:e,selectionRange:n},os=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,c=u.memoizedProps,u=u.memoizedState,l=n.stateNode;try{var ee=Na(n.type,c);e=l.getSnapshotBeforeUpdate(ee,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ae(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ou(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ou(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function _p(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:wn(e,n),l&4&&dr(5,n);break;case 1:if(wn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Ae(n,n.return,p)}else{var c=Na(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ae(n,n.return,p)}}l&64&&Sp(n),l&512&&fr(n,n.return);break;case 3:if(wn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{dh(e,t)}catch(p){Ae(n,n.return,p)}}break;case 27:t===null&&l&4&&Cp(n);case 26:case 5:wn(e,n),t===null&&l&4&&jp(n),l&512&&fr(n,n.return);break;case 12:wn(e,n);break;case 31:wn(e,n),l&4&&Ap(e,n);break;case 13:wn(e,n),l&4&&Tp(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Oy.bind(null,n),Wy(e,n))));break;case 22:if(l=n.memoizedState!==null||vn,!l){t=t!==null&&t.memoizedState!==null||Ze,c=vn;var u=Ze;vn=l,(Ze=t)&&!u?jn(e,n,(n.subtreeFlags&8772)!==0):wn(e,n),vn=c,Ze=u}break;case 30:break;default:wn(e,n)}}function Np(e){var t=e.alternate;t!==null&&(e.alternate=null,Np(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ho(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,gt=!1;function Sn(e,t,n){for(n=n.child;n!==null;)zp(e,t,n),n=n.sibling}function zp(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 26:Ze||ln(n,t),Sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ze||ln(n,t);var l=Ye,c=gt;Wn(n.type)&&(Ye=n.stateNode,gt=!1),Sn(e,t,n),Sr(n.stateNode),Ye=l,gt=c;break;case 5:Ze||ln(n,t);case 6:if(l=Ye,c=gt,Ye=null,Sn(e,t,n),Ye=l,gt=c,Ye!==null)if(gt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(u){Ae(n,t,u)}else try{Ye.removeChild(n.stateNode)}catch(u){Ae(n,t,u)}break;case 18:Ye!==null&&(gt?(e=Ye,Sm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),El(e)):Sm(Ye,n.stateNode));break;case 4:l=Ye,c=gt,Ye=n.stateNode.containerInfo,gt=!0,Sn(e,t,n),Ye=l,gt=c;break;case 0:case 11:case 14:case 15:Fn(2,n,t),Ze||Fn(4,n,t),Sn(e,t,n);break;case 1:Ze||(ln(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&wp(n,t,l)),Sn(e,t,n);break;case 21:Sn(e,t,n);break;case 22:Ze=(l=Ze)||n.memoizedState!==null,Sn(e,t,n),Ze=l;break;default:Sn(e,t,n)}}function Ap(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{El(e)}catch(n){Ae(t,t.return,n)}}}function Tp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{El(e)}catch(n){Ae(t,t.return,n)}}function Cy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new kp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new kp),t;default:throw Error(o(435,e.tag))}}function Vi(e,t){var n=Cy(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var c=My.bind(null,e,l);l.then(c,c)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var c=n[l],u=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 27:if(Wn(y.type)){Ye=y.stateNode,gt=!1;break e}break;case 5:Ye=y.stateNode,gt=!1;break e;case 3:case 4:Ye=y.stateNode.containerInfo,gt=!0;break e}y=y.return}if(Ye===null)throw Error(o(160));zp(u,p,c),Ye=null,gt=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Rp(t,e),t=t.sibling}var $t=null;function Rp(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),yt(e),l&4&&(Fn(3,e,e.return),dr(3,e),Fn(5,e,e.return));break;case 1:bt(t,e),yt(e),l&512&&(Ze||n===null||ln(n,n.return)),l&64&&vn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var c=$t;if(bt(t,e),yt(e),l&512&&(Ze||n===null||ln(n,n.return)),l&4){var u=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":u=c.getElementsByTagName("title")[0],(!u||u[Hl]||u[at]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(l),c.head.insertBefore(u,c.querySelector("head > title"))),st(u,l,n),u[at]=e,We(u),l=u;break e;case"link":var p=Rm("link","href",c).get(l+(n.href||""));if(p){for(var y=0;y<p.length;y++)if(u=p[y],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(y,1);break t}}u=c.createElement(l),st(u,l,n),c.head.appendChild(u);break;case"meta":if(p=Rm("meta","content",c).get(l+(n.content||""))){for(y=0;y<p.length;y++)if(u=p[y],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(y,1);break t}}u=c.createElement(l),st(u,l,n),c.head.appendChild(u);break;default:throw Error(o(468,l))}u[at]=e,We(u),l=u}e.stateNode=l}else Om(c,e.type,e.stateNode);else e.stateNode=Tm(c,l,e.memoizedProps);else u!==l?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,l===null?Om(c,e.type,e.stateNode):Tm(c,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Mc(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),yt(e),l&512&&(Ze||n===null||ln(n,n.return)),n!==null&&l&4&&Mc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),yt(e),l&512&&(Ze||n===null||ln(n,n.return)),e.flags&32){c=e.stateNode;try{Ka(c,"")}catch(ee){Ae(e,e.return,ee)}}l&4&&e.stateNode!=null&&(c=e.memoizedProps,Mc(e,c,n!==null?n.memoizedProps:c)),l&1024&&(Lc=!0);break;case 6:if(bt(t,e),yt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ee){Ae(e,e.return,ee)}}break;case 3:if(ls=null,c=$t,$t=ns(t.containerInfo),bt(t,e),$t=c,yt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{El(t.containerInfo)}catch(ee){Ae(e,e.return,ee)}Lc&&(Lc=!1,Op(e));break;case 4:l=$t,$t=ns(e.stateNode.containerInfo),bt(t,e),yt(e),$t=l;break;case 12:bt(t,e),yt(e);break;case 31:bt(t,e),yt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vi(e,l)));break;case 13:bt(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Gi=Et()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vi(e,l)));break;case 22:c=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,T=vn,Y=Ze;if(vn=T||c,Ze=Y||w,bt(t,e),Ze=Y,vn=T,yt(e),l&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||w||vn||Ze||za(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(u=w.stateNode,c)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=w.stateNode;var K=w.memoizedProps.style,O=K!=null&&K.hasOwnProperty("display")?K.display:null;y.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ee){Ae(w,w.return,ee)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=c?"":w.memoizedProps}catch(ee){Ae(w,w.return,ee)}}}else if(t.tag===18){if(n===null){w=t;try{var B=w.stateNode;c?wm(B,!0):wm(w.stateNode,!1)}catch(ee){Ae(w,w.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Vi(e,n))));break;case 19:bt(t,e),yt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Vi(e,l)));break;case 30:break;case 21:break;default:bt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Ep(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var c=n.stateNode,u=Uc(e);Yi(e,u,c);break;case 5:var p=n.stateNode;n.flags&32&&(Ka(p,""),n.flags&=-33);var y=Uc(e);Yi(e,y,p);break;case 3:case 4:var w=n.stateNode.containerInfo,T=Uc(e);Dc(e,T,w);break;default:throw Error(o(161))}}catch(Y){Ae(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Op(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Op(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_p(e,t.alternate,t),t=t.sibling}function za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Fn(4,t,t.return),za(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&wp(t,t.return,n),za(t);break;case 27:Sr(t.stateNode);case 26:case 5:ln(t,t.return),za(t);break;case 22:t.memoizedState===null&&za(t);break;case 30:za(t);break;default:za(t)}e=e.sibling}}function jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,c=e,u=t,p=u.flags;switch(u.tag){case 0:case 11:case 15:jn(c,u,n),dr(4,u);break;case 1:if(jn(c,u,n),l=u,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(T){Ae(l,l.return,T)}if(l=u,c=l.updateQueue,c!==null){var y=l.stateNode;try{var w=c.shared.hiddenCallbacks;if(w!==null)for(c.shared.hiddenCallbacks=null,c=0;c<w.length;c++)uh(w[c],y)}catch(T){Ae(l,l.return,T)}}n&&p&64&&Sp(u),fr(u,u.return);break;case 27:Cp(u);case 26:case 5:jn(c,u,n),n&&l===null&&p&4&&jp(u),fr(u,u.return);break;case 12:jn(c,u,n);break;case 31:jn(c,u,n),n&&p&4&&Ap(c,u);break;case 13:jn(c,u,n),n&&p&4&&Tp(c,u);break;case 22:u.memoizedState===null&&jn(c,u,n),fr(u,u.return);break;case 30:break;default:jn(c,u,n)}t=t.sibling}}function Bc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Jl(n))}function Hc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function It(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mp(e,t,n,l),t=t.sibling}function Mp(e,t,n,l){var c=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,l),c&2048&&dr(9,t);break;case 1:It(e,t,n,l);break;case 3:It(e,t,n,l),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(c&2048){It(e,t,n,l),e=t.stateNode;try{var u=t.memoizedProps,p=u.id,y=u.onPostCommit;typeof y=="function"&&y(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ae(t,t.return,w)}}else It(e,t,n,l);break;case 31:It(e,t,n,l);break;case 13:It(e,t,n,l);break;case 23:break;case 22:u=t.stateNode,p=t.alternate,t.memoizedState!==null?u._visibility&2?It(e,t,n,l):hr(e,t):u._visibility&2?It(e,t,n,l):(u._visibility|=2,hl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Bc(p,t);break;case 24:It(e,t,n,l),c&2048&&Hc(t.alternate,t);break;default:It(e,t,n,l)}}function hl(e,t,n,l,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,p=t,y=n,w=l,T=p.flags;switch(p.tag){case 0:case 11:case 15:hl(u,p,y,w,c),dr(8,p);break;case 23:break;case 22:var Y=p.stateNode;p.memoizedState!==null?Y._visibility&2?hl(u,p,y,w,c):hr(u,p):(Y._visibility|=2,hl(u,p,y,w,c)),c&&T&2048&&Bc(p.alternate,p);break;case 24:hl(u,p,y,w,c),c&&T&2048&&Hc(p.alternate,p);break;default:hl(u,p,y,w,c)}t=t.sibling}}function hr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,c=l.flags;switch(l.tag){case 22:hr(n,l),c&2048&&Bc(l.alternate,l);break;case 24:hr(n,l),c&2048&&Hc(l.alternate,l);break;default:hr(n,l)}t=t.sibling}}var pr=8192;function pl(e,t,n){if(e.subtreeFlags&pr)for(e=e.child;e!==null;)Up(e,t,n),e=e.sibling}function Up(e,t,n){switch(e.tag){case 26:pl(e,t,n),e.flags&pr&&e.memoizedState!==null&&dx(n,$t,e.memoizedState,e.memoizedProps);break;case 5:pl(e,t,n);break;case 3:case 4:var l=$t;$t=ns(e.stateNode.containerInfo),pl(e,t,n),$t=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=pr,pr=16777216,pl(e,t,n),pr=l):pl(e,t,n));break;default:pl(e,t,n)}}function Dp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];et=l,Bp(l,e)}Dp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lp(e),e=e.sibling}function Lp(e){switch(e.tag){case 0:case 11:case 15:mr(e),e.flags&2048&&Fn(9,e,e.return);break;case 3:mr(e);break;case 12:mr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pi(e)):mr(e);break;default:mr(e)}}function Pi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];et=l,Bp(l,e)}Dp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Fn(8,t,t.return),Pi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pi(t));break;default:Pi(t)}e=e.sibling}}function Bp(e,t){for(;et!==null;){var n=et;switch(n.tag){case 0:case 11:case 15:Fn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,et=l;else e:for(n=e;et!==null;){l=et;var c=l.sibling,u=l.return;if(Np(l),l===n){et=null;break e}if(c!==null){c.return=u,et=c;break e}et=u}}}var ky={getCacheForType:function(e){var t=rt(Qe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return rt(Qe).controller.signal}},_y=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ue=null,be=null,ve=0,ze=0,Tt=null,Kn=!1,ml=!1,qc=!1,En=0,Xe=0,Qn=0,Aa=0,Yc=0,Rt=0,gl=0,gr=null,xt=null,Vc=!1,Gi=0,Hp=0,Xi=1/0,Fi=null,$n=null,Je=0,In=null,bl=null,Cn=0,Pc=0,Gc=null,qp=null,br=0,Xc=null;function Ot(){return(Ne&2)!==0&&ve!==0?ve&-ve:R.T!==null?Zc():tf()}function Yp(){if(Rt===0)if((ve&536870912)===0||we){var e=ei;ei<<=1,(ei&3932160)===0&&(ei=262144),Rt=e}else Rt=536870912;return e=zt.current,e!==null&&(e.flags|=32),Rt}function vt(e,t,n){(e===Ue&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(yl(e,0),Zn(e,ve,Rt,!1)),Bl(e,n),((Ne&2)===0||e!==Ue)&&(e===Ue&&((Ne&2)===0&&(Aa|=n),Xe===4&&Zn(e,ve,Rt,!1)),rn(e))}function Vp(e,t,n){if((Ne&6)!==0)throw Error(o(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ll(e,t),c=l?Ay(e,t):Kc(e,t,!0),u=l;do{if(c===0){ml&&!l&&Zn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Ny(n)){c=Kc(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var y=e;c=gr;var w=y.current.memoizedState.isDehydrated;if(w&&(yl(y,p).flags|=256),p=Kc(y,p,!1),p!==2){if(qc&&!w){y.errorRecoveryDisabledLanes|=u,Aa|=u,c=4;break e}u=xt,xt=c,u!==null&&(xt===null?xt=u:xt.push.apply(xt,u))}c=p}if(u=!1,c!==2)continue}}if(c===1){yl(e,0),Zn(e,t,0,!0);break}e:{switch(l=e,u=c,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Zn(l,t,Rt,!Kn);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(c=Gi+300-Et(),10<c)){if(Zn(l,t,Rt,!Kn),ni(l,0,!0)!==0)break e;Cn=t,l.timeoutHandle=xm(Pp.bind(null,l,n,xt,Fi,Vc,t,Rt,Aa,gl,Kn,u,"Throttled",-0,0),c);break e}Pp(l,n,xt,Fi,Vc,t,Rt,Aa,gl,Kn,u,null,-0,0)}}break}while(!0);rn(e)}function Pp(e,t,n,l,c,u,p,y,w,T,Y,K,O,B){if(e.timeoutHandle=-1,K=t.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Up(t,u,K);var ee=(u&62914560)===u?Gi-Et():(u&4194048)===u?Hp-Et():0;if(ee=fx(K,ee),ee!==null){Cn=u,e.cancelPendingCommit=ee(Zp.bind(null,e,t,u,n,l,c,p,y,w,Y,K,null,O,B)),Zn(e,u,p,!T);return}}Zp(e,t,u,n,l,c,p,y,w)}function Ny(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var c=n[l],u=c.getSnapshot;c=c.value;try{if(!_t(u(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,n,l){t&=~Yc,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var c=t;0<c;){var u=31-kt(c),p=1<<u;l[u]=-1,c&=~p}n!==0&&Jd(e,n,t)}function Ki(){return(Ne&6)===0?(yr(0),!1):!0}function Fc(){if(be!==null){if(ze===0)var e=be.return;else e=be,pn=Sa=null,oc(e),ol=null,er=0,e=be;for(;e!==null;)vp(e.alternate,e),e=e.return;be=null}}function yl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Qy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Cn=0,Fc(),Ue=e,be=n=fn(e.current,null),ve=t,ze=0,Tt=null,Kn=!1,ml=Ll(e,t),qc=!1,gl=Rt=Yc=Aa=Qn=Xe=0,xt=gr=null,Vc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var c=31-kt(l),u=1<<c;t|=e[c],l&=~u}return En=t,pi(),n}function Gp(e,t){fe=null,R.H=or,t===sl||t===wi?(t=ih(),ze=3):t===Io?(t=ih(),ze=4):ze=t===Ec?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,be===null&&(Xe=1,Di(e,Ht(t,e.current)))}function Xp(){var e=zt.current;return e===null?!0:(ve&4194048)===ve?Pt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Pt:!1}function Fp(){var e=R.H;return R.H=or,e===null?or:e}function Kp(){var e=R.A;return R.A=ky,e}function Qi(){Xe=4,Kn||(ve&4194048)!==ve&&zt.current!==null||(ml=!0),(Qn&134217727)===0&&(Aa&134217727)===0||Ue===null||Zn(Ue,ve,Rt,!1)}function Kc(e,t,n){var l=Ne;Ne|=2;var c=Fp(),u=Kp();(Ue!==e||ve!==t)&&(Fi=null,yl(e,t)),t=!1;var p=Xe;e:do try{if(ze!==0&&be!==null){var y=be,w=Tt;switch(ze){case 8:Fc(),p=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var T=ze;if(ze=0,Tt=null,xl(e,y,w,T),n&&ml){p=0;break e}break;default:T=ze,ze=0,Tt=null,xl(e,y,w,T)}}zy(),p=Xe;break}catch(Y){Gp(e,Y)}while(!0);return t&&e.shellSuspendCounter++,pn=Sa=null,Ne=l,R.H=c,R.A=u,be===null&&(Ue=null,ve=0,pi()),p}function zy(){for(;be!==null;)Qp(be)}function Ay(e,t){var n=Ne;Ne|=2;var l=Fp(),c=Kp();Ue!==e||ve!==t?(Fi=null,Xi=Et()+500,yl(e,t)):ml=Ll(e,t);e:do try{if(ze!==0&&be!==null){t=be;var u=Tt;t:switch(ze){case 1:ze=0,Tt=null,xl(e,t,u,1);break;case 2:case 9:if(lh(u)){ze=0,Tt=null,$p(t);break}t=function(){ze!==2&&ze!==9||Ue!==e||(ze=7),rn(e)},u.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:lh(u)?(ze=0,Tt=null,$p(t)):(ze=0,Tt=null,xl(e,t,u,7));break;case 5:var p=null;switch(be.tag){case 26:p=be.memoizedState;case 5:case 27:var y=be;if(p?Mm(p):y.stateNode.complete){ze=0,Tt=null;var w=y.sibling;if(w!==null)be=w;else{var T=y.return;T!==null?(be=T,$i(T)):be=null}break t}}ze=0,Tt=null,xl(e,t,u,5);break;case 6:ze=0,Tt=null,xl(e,t,u,6);break;case 8:Fc(),Xe=6;break e;default:throw Error(o(462))}}Ty();break}catch(Y){Gp(e,Y)}while(!0);return pn=Sa=null,R.H=l,R.A=c,Ne=n,be!==null?0:(Ue=null,ve=0,pi(),Xe)}function Ty(){for(;be!==null&&!eb();)Qp(be)}function Qp(e){var t=yp(e.alternate,e,En);e.memoizedProps=e.pendingProps,t===null?$i(e):be=t}function $p(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fp(n,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=fp(n,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:oc(t);default:vp(n,t),t=be=Kf(t,En),t=yp(n,t,En)}e.memoizedProps=e.pendingProps,t===null?$i(e):be=t}function xl(e,t,n,l){pn=Sa=null,oc(t),ol=null,er=0;var c=t.return;try{if(xy(e,c,t,n,ve)){Xe=1,Di(e,Ht(n,e.current)),be=null;return}}catch(u){if(c!==null)throw be=c,u;Xe=1,Di(e,Ht(n,e.current)),be=null;return}t.flags&32768?(we||l===1?e=!0:ml||(ve&536870912)!==0?e=!1:(Kn=e=!0,(l===2||l===9||l===3||l===6)&&(l=zt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ip(t,e)):$i(t)}function $i(e){var t=e;do{if((t.flags&32768)!==0){Ip(t,Kn);return}e=t.return;var n=wy(t.alternate,t,En);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Xe===0&&(Xe=5)}function Ip(e,t){do{var n=jy(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Xe=6,be=null}function Zp(e,t,n,l,c,u,p,y,w){e.cancelPendingCommit=null;do Ii();while(Je!==0);if((Ne&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=Uo,ub(e,n,u,p,y,w),e===Ue&&(be=Ue=null,ve=0),bl=t,In=e,Cn=n,Pc=u,Gc=c,qp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Uy(Jr,function(){return nm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,c=I.p,I.p=2,p=Ne,Ne|=4;try{Ey(e,t,n)}finally{Ne=p,I.p=c,R.T=l}}Je=1,Jp(),Wp(),em()}}function Jp(){if(Je===1){Je=0;var e=In,t=bl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var l=I.p;I.p=2;var c=Ne;Ne|=4;try{Rp(t,e);var u=ru,p=Bf(e.containerInfo),y=u.focusedElem,w=u.selectionRange;if(p!==y&&y&&y.ownerDocument&&Lf(y.ownerDocument.documentElement,y)){if(w!==null&&Ao(y)){var T=w.start,Y=w.end;if(Y===void 0&&(Y=T),"selectionStart"in y)y.selectionStart=T,y.selectionEnd=Math.min(Y,y.value.length);else{var K=y.ownerDocument||document,O=K&&K.defaultView||window;if(O.getSelection){var B=O.getSelection(),ee=y.textContent.length,oe=Math.min(w.start,ee),Oe=w.end===void 0?oe:Math.min(w.end,ee);!B.extend&&oe>Oe&&(p=Oe,Oe=oe,oe=p);var z=Df(y,oe),C=Df(y,Oe);if(z&&C&&(B.rangeCount!==1||B.anchorNode!==z.node||B.anchorOffset!==z.offset||B.focusNode!==C.node||B.focusOffset!==C.offset)){var A=K.createRange();A.setStart(z.node,z.offset),B.removeAllRanges(),oe>Oe?(B.addRange(A),B.extend(C.node,C.offset)):(A.setEnd(C.node,C.offset),B.addRange(A))}}}}for(K=[],B=y;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<K.length;y++){var G=K[y];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}os=!!lu,ru=lu=null}finally{Ne=c,I.p=l,R.T=n}}e.current=t,Je=2}}function Wp(){if(Je===2){Je=0;var e=In,t=bl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var l=I.p;I.p=2;var c=Ne;Ne|=4;try{_p(e,t.alternate,t)}finally{Ne=c,I.p=l,R.T=n}}Je=3}}function em(){if(Je===4||Je===3){Je=0,tb();var e=In,t=bl,n=Cn,l=qp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,bl=In=null,tm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&($n=null),uo(n),t=t.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,c=I.p,I.p=2,R.T=null;try{for(var u=e.onRecoverableError,p=0;p<l.length;p++){var y=l[p];u(y.value,{componentStack:y.stack})}}finally{R.T=t,I.p=c}}(Cn&3)!==0&&Ii(),rn(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===Xc?br++:(br=0,Xc=e):br=0,yr(0)}}function tm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function Ii(){return Jp(),Wp(),em(),nm()}function nm(){if(Je!==5)return!1;var e=In,t=Pc;Pc=0;var n=uo(Cn),l=R.T,c=I.p;try{I.p=32>n?32:n,R.T=null,n=Gc,Gc=null;var u=In,p=Cn;if(Je=0,bl=In=null,Cn=0,(Ne&6)!==0)throw Error(o(331));var y=Ne;if(Ne|=4,Lp(u.current),Mp(u,u.current,p,n),Ne=y,yr(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Dl,u)}catch{}return!0}finally{I.p=c,R.T=l,tm(e,t)}}function am(e,t,n){t=Ht(n,t),t=jc(e.stateNode,t,2),e=Pn(e,t,2),e!==null&&(Bl(e,2),rn(e))}function Ae(e,t,n){if(e.tag===3)am(e,e,n);else for(;t!==null;){if(t.tag===3){am(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&($n===null||!$n.has(l))){e=Ht(n,e),n=lp(2),l=Pn(t,n,2),l!==null&&(rp(n,l,t,e),Bl(l,2),rn(l));break}}t=t.return}}function Qc(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new _y;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(n)||(qc=!0,c.add(n),e=Ry.bind(null,e,t,n),t.then(e,e))}function Ry(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ue===e&&(ve&n)===n&&(Xe===4||Xe===3&&(ve&62914560)===ve&&300>Et()-Gi?(Ne&2)===0&&yl(e,0):Yc|=n,gl===ve&&(gl=0)),rn(e)}function lm(e,t){t===0&&(t=Zd()),e=ya(e,t),e!==null&&(Bl(e,t),rn(e))}function Oy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lm(e,n)}function My(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),lm(e,n)}function Uy(e,t){return io(e,t)}var Zi=null,vl=null,$c=!1,Ji=!1,Ic=!1,Jn=0;function rn(e){e!==vl&&e.next===null&&(vl===null?Zi=vl=e:vl=vl.next=e),Ji=!0,$c||($c=!0,Ly())}function yr(e,t){if(!Ic&&Ji){Ic=!0;do for(var n=!1,l=Zi;l!==null;){if(e!==0){var c=l.pendingLanes;if(c===0)var u=0;else{var p=l.suspendedLanes,y=l.pingedLanes;u=(1<<31-kt(42|e)+1)-1,u&=c&~(p&~y),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,om(l,u))}else u=ve,u=ni(l,l===Ue?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||Ll(l,u)||(n=!0,om(l,u));l=l.next}while(n);Ic=!1}}function Dy(){rm()}function rm(){Ji=$c=!1;var e=0;Jn!==0&&Ky()&&(e=Jn);for(var t=Et(),n=null,l=Zi;l!==null;){var c=l.next,u=im(l,t);u===0?(l.next=null,n===null?Zi=c:n.next=c,c===null&&(vl=n)):(n=l,(e!==0||(u&3)!==0)&&(Ji=!0)),l=c}Je!==0&&Je!==5||yr(e),Jn!==0&&(Jn=0)}function im(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var p=31-kt(u),y=1<<p,w=c[p];w===-1?((y&n)===0||(y&l)!==0)&&(c[p]=cb(y,t)):w<=t&&(e.expiredLanes|=y),u&=~y}if(t=Ue,n=ve,n=ni(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&so(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ll(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&so(l),uo(n)){case 2:case 8:n=$d;break;case 32:n=Jr;break;case 268435456:n=Id;break;default:n=Jr}return l=sm.bind(null,e),n=io(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&so(l),e.callbackPriority=2,e.callbackNode=null,2}function sm(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ii()&&e.callbackNode!==n)return null;var l=ve;return l=ni(e,e===Ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vp(e,l,t),im(e,Et()),e.callbackNode!=null&&e.callbackNode===n?sm.bind(null,e):null)}function om(e,t){if(Ii())return null;Vp(e,t,!0)}function Ly(){$y(function(){(Ne&6)!==0?io(Qd,Dy):rm()})}function Zc(){if(Jn===0){var e=rl;e===0&&(e=Wr,Wr<<=1,(Wr&261888)===0&&(Wr=256)),Jn=e}return Jn}function cm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ii(""+e)}function um(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function By(e,t,n,l,c){if(t==="submit"&&n&&n.stateNode===c){var u=cm((c[pt]||null).action),p=l.submitter;p&&(t=(t=p[pt]||null)?cm(t.formAction):p.getAttribute("formAction"),t!==null&&(u=t,p=null));var y=new ui("action","action",null,l,c);e.push({event:y,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Jn!==0){var w=p?um(c,p):new FormData(c);bc(n,{pending:!0,data:w,method:c.method,action:u},null,w)}}else typeof u=="function"&&(y.preventDefault(),w=p?um(c,p):new FormData(c),bc(n,{pending:!0,data:w,method:c.method,action:u},u,w))},currentTarget:c}]})}}for(var Jc=0;Jc<Mo.length;Jc++){var Wc=Mo[Jc],Hy=Wc.toLowerCase(),qy=Wc[0].toUpperCase()+Wc.slice(1);Qt(Hy,"on"+qy)}Qt(Yf,"onAnimationEnd"),Qt(Vf,"onAnimationIteration"),Qt(Pf,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(ny,"onTransitionRun"),Qt(ay,"onTransitionStart"),Qt(ly,"onTransitionCancel"),Qt(Gf,"onTransitionEnd"),Xa("onMouseEnter",["mouseout","mouseover"]),Xa("onMouseLeave",["mouseout","mouseover"]),Xa("onPointerEnter",["pointerout","pointerover"]),Xa("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xr));function dm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],c=l.event;l=l.listeners;e:{var u=void 0;if(t)for(var p=l.length-1;0<=p;p--){var y=l[p],w=y.instance,T=y.currentTarget;if(y=y.listener,w!==u&&c.isPropagationStopped())break e;u=y,c.currentTarget=T;try{u(c)}catch(Y){hi(Y)}c.currentTarget=null,u=w}else for(p=0;p<l.length;p++){if(y=l[p],w=y.instance,T=y.currentTarget,y=y.listener,w!==u&&c.isPropagationStopped())break e;u=y,c.currentTarget=T;try{u(c)}catch(Y){hi(Y)}c.currentTarget=null,u=w}}}}function ye(e,t){var n=t[fo];n===void 0&&(n=t[fo]=new Set);var l=e+"__bubble";n.has(l)||(fm(t,e,2,!1),n.add(l))}function eu(e,t,n){var l=0;t&&(l|=4),fm(n,e,l,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function tu(e){if(!e[Wi]){e[Wi]=!0,lf.forEach(function(n){n!=="selectionchange"&&(Yy.has(n)||eu(n,!1,e),eu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wi]||(t[Wi]=!0,eu("selectionchange",!1,t))}}function fm(e,t,n,l){switch(Ym(t)){case 2:var c=mx;break;case 8:c=gx;break;default:c=gu}n=c.bind(null,t,n,e),c=void 0,!So||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function nu(e,t,n,l,c){var u=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var y=l.stateNode.containerInfo;if(y===c)break;if(p===4)for(p=l.return;p!==null;){var w=p.tag;if((w===3||w===4)&&p.stateNode.containerInfo===c)return;p=p.return}for(;y!==null;){if(p=Va(y),p===null)return;if(w=p.tag,w===5||w===6||w===26||w===27){l=u=p;continue e}y=y.parentNode}}l=l.return}bf(function(){var T=u,Y=xo(n),K=[];e:{var O=Xf.get(e);if(O!==void 0){var B=ui,ee=e;switch(e){case"keypress":if(oi(n)===0)break e;case"keydown":case"keyup":B=Mb;break;case"focusin":ee="focus",B=Co;break;case"focusout":ee="blur",B=Co;break;case"beforeblur":case"afterblur":B=Co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=wb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Lb;break;case Yf:case Vf:case Pf:B=Cb;break;case Gf:B=Hb;break;case"scroll":case"scrollend":B=vb;break;case"wheel":B=Yb;break;case"copy":case"cut":case"paste":B=_b;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=wf;break;case"toggle":case"beforetoggle":B=Pb}var oe=(t&4)!==0,Oe=!oe&&(e==="scroll"||e==="scrollend"),z=oe?O!==null?O+"Capture":null:O;oe=[];for(var C=T,A;C!==null;){var G=C;if(A=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||A===null||z===null||(G=Yl(C,z),G!=null&&oe.push(vr(C,G,A))),Oe)break;C=C.return}0<oe.length&&(O=new B(O,ee,null,n,Y),K.push({event:O,listeners:oe}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",O&&n!==yo&&(ee=n.relatedTarget||n.fromElement)&&(Va(ee)||ee[Ya]))break e;if((B||O)&&(O=Y.window===Y?Y:(O=Y.ownerDocument)?O.defaultView||O.parentWindow:window,B?(ee=n.relatedTarget||n.toElement,B=T,ee=ee?Va(ee):null,ee!==null&&(Oe=d(ee),oe=ee.tag,ee!==Oe||oe!==5&&oe!==27&&oe!==6)&&(ee=null)):(B=null,ee=T),B!==ee)){if(oe=vf,G="onMouseLeave",z="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(oe=wf,G="onPointerLeave",z="onPointerEnter",C="pointer"),Oe=B==null?O:ql(B),A=ee==null?O:ql(ee),O=new oe(G,C+"leave",B,n,Y),O.target=Oe,O.relatedTarget=A,G=null,Va(Y)===T&&(oe=new oe(z,C+"enter",ee,n,Y),oe.target=A,oe.relatedTarget=Oe,G=oe),Oe=G,B&&ee)t:{for(oe=Vy,z=B,C=ee,A=0,G=z;G;G=oe(G))A++;G=0;for(var ie=C;ie;ie=oe(ie))G++;for(;0<A-G;)z=oe(z),A--;for(;0<G-A;)C=oe(C),G--;for(;A--;){if(z===C||C!==null&&z===C.alternate){oe=z;break t}z=oe(z),C=oe(C)}oe=null}else oe=null;B!==null&&hm(K,O,B,oe,!1),ee!==null&&Oe!==null&&hm(K,Oe,ee,oe,!0)}}e:{if(O=T?ql(T):window,B=O.nodeName&&O.nodeName.toLowerCase(),B==="select"||B==="input"&&O.type==="file")var Ce=Af;else if(Nf(O))if(Tf)Ce=Wb;else{Ce=Zb;var ne=Ib}else B=O.nodeName,!B||B.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?T&&bo(T.elementType)&&(Ce=Af):Ce=Jb;if(Ce&&(Ce=Ce(e,T))){zf(K,Ce,n,Y);break e}ne&&ne(e,O,T),e==="focusout"&&T&&O.type==="number"&&T.memoizedProps.value!=null&&go(O,"number",O.value)}switch(ne=T?ql(T):window,e){case"focusin":(Nf(ne)||ne.contentEditable==="true")&&(Za=ne,To=T,$l=null);break;case"focusout":$l=To=Za=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,Hf(K,n,Y);break;case"selectionchange":if(ty)break;case"keydown":case"keyup":Hf(K,n,Y)}var pe;if(_o)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Ia?kf(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(jf&&n.locale!=="ko"&&(Ia||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ia&&(pe=yf()):(Dn=Y,wo="value"in Dn?Dn.value:Dn.textContent,Ia=!0)),ne=es(T,Se),0<ne.length&&(Se=new Sf(Se,e,null,n,Y),K.push({event:Se,listeners:ne}),pe?Se.data=pe:(pe=_f(n),pe!==null&&(Se.data=pe)))),(pe=Xb?Fb(e,n):Kb(e,n))&&(Se=es(T,"onBeforeInput"),0<Se.length&&(ne=new Sf("onBeforeInput","beforeinput",null,n,Y),K.push({event:ne,listeners:Se}),ne.data=pe)),By(K,e,T,n,Y)}dm(K,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function es(e,t){for(var n=t+"Capture",l=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=Yl(e,n),c!=null&&l.unshift(vr(e,c,u)),c=Yl(e,t),c!=null&&l.push(vr(e,c,u))),e.tag===3)return l;e=e.return}return[]}function Vy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hm(e,t,n,l,c){for(var u=t._reactName,p=[];n!==null&&n!==l;){var y=n,w=y.alternate,T=y.stateNode;if(y=y.tag,w!==null&&w===l)break;y!==5&&y!==26&&y!==27||T===null||(w=T,c?(T=Yl(n,u),T!=null&&p.unshift(vr(n,T,w))):c||(T=Yl(n,u),T!=null&&p.push(vr(n,T,w)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Py=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function pm(e){return(typeof e=="string"?e:""+e).replace(Py,`
`).replace(Gy,"")}function mm(e,t){return t=pm(t),pm(e)===t}function Re(e,t,n,l,c,u){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ka(e,""+l);break;case"className":li(e,"class",l);break;case"tabIndex":li(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":li(e,n,l);break;case"style":mf(e,l,u);break;case"data":if(t!=="object"){li(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ii(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Re(e,t,"name",c.name,c,null),Re(e,t,"formEncType",c.formEncType,c,null),Re(e,t,"formMethod",c.formMethod,c,null),Re(e,t,"formTarget",c.formTarget,c,null)):(Re(e,t,"encType",c.encType,c,null),Re(e,t,"method",c.method,c,null),Re(e,t,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ii(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=un);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ii(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),ai(e,"popover",l);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ai(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=yb.get(n)||n,ai(e,n,l))}}function au(e,t,n,l,c,u){switch(n){case"style":mf(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&Ka(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=un);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),u=e[pt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof l=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,c);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ai(e,n,l)}}}function st(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,c=!1,u;for(u in n)if(n.hasOwnProperty(u)){var p=n[u];if(p!=null)switch(u){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Re(e,t,u,p,n,null)}}c&&Re(e,t,"srcSet",n.srcSet,n,null),l&&Re(e,t,"src",n.src,n,null);return;case"input":ye("invalid",e);var y=u=p=c=null,w=null,T=null;for(l in n)if(n.hasOwnProperty(l)){var Y=n[l];if(Y!=null)switch(l){case"name":c=Y;break;case"type":p=Y;break;case"checked":w=Y;break;case"defaultChecked":T=Y;break;case"value":u=Y;break;case"defaultValue":y=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:Re(e,t,l,Y,n,null)}}df(e,u,y,w,T,p,c,!1);return;case"select":ye("invalid",e),l=p=u=null;for(c in n)if(n.hasOwnProperty(c)&&(y=n[c],y!=null))switch(c){case"value":u=y;break;case"defaultValue":p=y;break;case"multiple":l=y;default:Re(e,t,c,y,n,null)}t=u,n=p,e.multiple=!!l,t!=null?Fa(e,!!l,t,!1):n!=null&&Fa(e,!!l,n,!0);return;case"textarea":ye("invalid",e),u=c=l=null;for(p in n)if(n.hasOwnProperty(p)&&(y=n[p],y!=null))switch(p){case"value":l=y;break;case"defaultValue":c=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Re(e,t,p,y,n,null)}hf(e,l,c,u);return;case"option":for(w in n)n.hasOwnProperty(w)&&(l=n[w],l!=null)&&(w==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Re(e,t,w,l,n,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<xr.length;l++)ye(xr[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in n)if(n.hasOwnProperty(T)&&(l=n[T],l!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Re(e,t,T,l,n,null)}return;default:if(bo(t)){for(Y in n)n.hasOwnProperty(Y)&&(l=n[Y],l!==void 0&&au(e,t,Y,l,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(l=n[y],l!=null&&Re(e,t,y,l,n,null))}function Xy(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,p=null,y=null,w=null,T=null,Y=null;for(B in n){var K=n[B];if(n.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=K;default:l.hasOwnProperty(B)||Re(e,t,B,null,l,K)}}for(var O in l){var B=l[O];if(K=n[O],l.hasOwnProperty(O)&&(B!=null||K!=null))switch(O){case"type":u=B;break;case"name":c=B;break;case"checked":T=B;break;case"defaultChecked":Y=B;break;case"value":p=B;break;case"defaultValue":y=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==K&&Re(e,t,O,B,l,K)}}mo(e,p,y,w,T,Y,u,c);return;case"select":B=p=y=O=null;for(u in n)if(w=n[u],n.hasOwnProperty(u)&&w!=null)switch(u){case"value":break;case"multiple":B=w;default:l.hasOwnProperty(u)||Re(e,t,u,null,l,w)}for(c in l)if(u=l[c],w=n[c],l.hasOwnProperty(c)&&(u!=null||w!=null))switch(c){case"value":O=u;break;case"defaultValue":y=u;break;case"multiple":p=u;default:u!==w&&Re(e,t,c,u,l,w)}t=y,n=p,l=B,O!=null?Fa(e,!!n,O,!1):!!l!=!!n&&(t!=null?Fa(e,!!n,t,!0):Fa(e,!!n,n?[]:"",!1));return;case"textarea":B=O=null;for(y in n)if(c=n[y],n.hasOwnProperty(y)&&c!=null&&!l.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Re(e,t,y,null,l,c)}for(p in l)if(c=l[p],u=n[p],l.hasOwnProperty(p)&&(c!=null||u!=null))switch(p){case"value":O=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==u&&Re(e,t,p,c,l,u)}ff(e,O,B);return;case"option":for(var ee in n)O=n[ee],n.hasOwnProperty(ee)&&O!=null&&!l.hasOwnProperty(ee)&&(ee==="selected"?e.selected=!1:Re(e,t,ee,null,l,O));for(w in l)O=l[w],B=n[w],l.hasOwnProperty(w)&&O!==B&&(O!=null||B!=null)&&(w==="selected"?e.selected=O&&typeof O!="function"&&typeof O!="symbol":Re(e,t,w,O,l,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)O=n[oe],n.hasOwnProperty(oe)&&O!=null&&!l.hasOwnProperty(oe)&&Re(e,t,oe,null,l,O);for(T in l)if(O=l[T],B=n[T],l.hasOwnProperty(T)&&O!==B&&(O!=null||B!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Re(e,t,T,O,l,B)}return;default:if(bo(t)){for(var Oe in n)O=n[Oe],n.hasOwnProperty(Oe)&&O!==void 0&&!l.hasOwnProperty(Oe)&&au(e,t,Oe,void 0,l,O);for(Y in l)O=l[Y],B=n[Y],!l.hasOwnProperty(Y)||O===B||O===void 0&&B===void 0||au(e,t,Y,O,l,B);return}}for(var z in n)O=n[z],n.hasOwnProperty(z)&&O!=null&&!l.hasOwnProperty(z)&&Re(e,t,z,null,l,O);for(K in l)O=l[K],B=n[K],!l.hasOwnProperty(K)||O===B||O==null&&B==null||Re(e,t,K,O,l,B)}function gm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var c=n[l],u=c.transferSize,p=c.initiatorType,y=c.duration;if(u&&y&&gm(p)){for(p=0,y=c.responseEnd,l+=1;l<n.length;l++){var w=n[l],T=w.startTime;if(T>y)break;var Y=w.transferSize,K=w.initiatorType;Y&&gm(K)&&(w=w.responseEnd,p+=Y*(w<y?1:(y-T)/(w-T)))}if(--l,t+=8*(u+p)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var lu=null,ru=null;function ts(e){return e.nodeType===9?e:e.ownerDocument}function bm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ym(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function iu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var su=null;function Ky(){var e=window.event;return e&&e.type==="popstate"?e===su?!1:(su=e,!0):(su=null,!1)}var xm=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(e){return vm.resolve(null).then(e).catch(Iy)}:xm;function Iy(e){setTimeout(function(){throw e})}function Wn(e){return e==="head"}function Sm(e,t){var n=t,l=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(c),El(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Sr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Sr(n);for(var u=n.firstChild;u;){var p=u.nextSibling,y=u.nodeName;u[Hl]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=p}}else n==="body"&&Sr(e.ownerDocument.body);n=c}while(n);El(t)}function wm(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function ou(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ou(n),ho(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Zy(e,t,n,l){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Hl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function Jy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Gt(e.nextSibling),e===null))return null;return e}function jm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function cu(e){return e.data==="$?"||e.data==="$~"}function uu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var du=null;function Em(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Gt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Cm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function km(e,t,n){switch(t=ts(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Sr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ho(e)}var Xt=new Map,_m=new Set;function ns(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kn=I.d;I.d={f:ex,r:tx,D:nx,C:ax,L:lx,m:rx,X:sx,S:ix,M:ox};function ex(){var e=kn.f(),t=Ki();return e||t}function tx(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?Gh(t):kn.r(e)}var Sl=typeof document>"u"?null:document;function Nm(e,t,n){var l=Sl;if(l&&typeof t=="string"&&t){var c=Lt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),_m.has(c)||(_m.add(c),e={rel:e,crossOrigin:n,href:t},l.querySelector(c)===null&&(t=l.createElement("link"),st(t,"link",e),We(t),l.head.appendChild(t)))}}function nx(e){kn.D(e),Nm("dns-prefetch",e,null)}function ax(e,t){kn.C(e,t),Nm("preconnect",e,t)}function lx(e,t,n){kn.L(e,t,n);var l=Sl;if(l&&e&&t){var c='link[rel="preload"][as="'+Lt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Lt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Lt(n.imageSizes)+'"]')):c+='[href="'+Lt(e)+'"]';var u=c;switch(t){case"style":u=wl(e);break;case"script":u=jl(e)}Xt.has(u)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Xt.set(u,e),l.querySelector(c)!==null||t==="style"&&l.querySelector(wr(u))||t==="script"&&l.querySelector(jr(u))||(t=l.createElement("link"),st(t,"link",e),We(t),l.head.appendChild(t)))}}function rx(e,t){kn.m(e,t);var n=Sl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Lt(l)+'"][href="'+Lt(e)+'"]',u=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=jl(e)}if(!Xt.has(u)&&(e=v({rel:"modulepreload",href:e},t),Xt.set(u,e),n.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(jr(u)))return}l=n.createElement("link"),st(l,"link",e),We(l),n.head.appendChild(l)}}}function ix(e,t,n){kn.S(e,t,n);var l=Sl;if(l&&e){var c=Ga(l).hoistableStyles,u=wl(e);t=t||"default";var p=c.get(u);if(!p){var y={loading:0,preload:null};if(p=l.querySelector(wr(u)))y.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Xt.get(u))&&fu(e,n);var w=p=l.createElement("link");We(w),st(w,"link",e),w._p=new Promise(function(T,Y){w.onload=T,w.onerror=Y}),w.addEventListener("load",function(){y.loading|=1}),w.addEventListener("error",function(){y.loading|=2}),y.loading|=4,as(p,t,l)}p={type:"stylesheet",instance:p,count:1,state:y},c.set(u,p)}}}function sx(e,t){kn.X(e,t);var n=Sl;if(n&&e){var l=Ga(n).hoistableScripts,c=jl(e),u=l.get(c);u||(u=n.querySelector(jr(c)),u||(e=v({src:e,async:!0},t),(t=Xt.get(c))&&hu(e,t),u=n.createElement("script"),We(u),st(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(c,u))}}function ox(e,t){kn.M(e,t);var n=Sl;if(n&&e){var l=Ga(n).hoistableScripts,c=jl(e),u=l.get(c);u||(u=n.querySelector(jr(c)),u||(e=v({src:e,async:!0,type:"module"},t),(t=Xt.get(c))&&hu(e,t),u=n.createElement("script"),We(u),st(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(c,u))}}function zm(e,t,n,l){var c=(c=se.current)?ns(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=wl(n.href),n=Ga(c).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=wl(n.href);var u=Ga(c).hoistableStyles,p=u.get(e);if(p||(c=c.ownerDocument||c,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,p),(u=c.querySelector(wr(e)))&&!u._p&&(p.instance=u,p.state.loading=5),Xt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Xt.set(e,n),u||cx(c,e,n,p.state))),t&&l===null)throw Error(o(528,""));return p}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=jl(n),n=Ga(c).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function wl(e){return'href="'+Lt(e)+'"'}function wr(e){return'link[rel="stylesheet"]['+e+"]"}function Am(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function cx(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),st(t,"link",n),We(t),e.head.appendChild(t))}function jl(e){return'[src="'+Lt(e)+'"]'}function jr(e){return"script[async]"+e}function Tm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Lt(n.href)+'"]');if(l)return t.instance=l,We(l),l;var c=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),We(l),st(l,"style",c),as(l,n.precedence,e),t.instance=l;case"stylesheet":c=wl(n.href);var u=e.querySelector(wr(c));if(u)return t.state.loading|=4,t.instance=u,We(u),u;l=Am(n),(c=Xt.get(c))&&fu(l,c),u=(e.ownerDocument||e).createElement("link"),We(u);var p=u;return p._p=new Promise(function(y,w){p.onload=y,p.onerror=w}),st(u,"link",l),t.state.loading|=4,as(u,n.precedence,e),t.instance=u;case"script":return u=jl(n.src),(c=e.querySelector(jr(u)))?(t.instance=c,We(c),c):(l=n,(c=Xt.get(u))&&(l=v({},n),hu(l,c)),e=e.ownerDocument||e,c=e.createElement("script"),We(c),st(c,"link",l),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,as(l,n.precedence,e));return t.instance}function as(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,u=c,p=0;p<l.length;p++){var y=l[p];if(y.dataset.precedence===t)u=y;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function fu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ls=null;function Rm(e,t,n){if(ls===null){var l=new Map,c=ls=new Map;c.set(n,l)}else c=ls,l=c.get(n),l||(l=new Map,c.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var u=n[c];if(!(u[Hl]||u[at]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(t)||"";p=e+p;var y=l.get(p);y?y.push(u):l.set(p,[u])}}return l}function Om(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ux(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Mm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dx(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=wl(l.href),u=t.querySelector(wr(c));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=rs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,We(u);return}u=t.ownerDocument||t,l=Am(l),(c=Xt.get(c))&&fu(l,c),u=u.createElement("link"),We(u);var p=u;p._p=new Promise(function(y,w){p.onload=y,p.onerror=w}),st(u,"link",l),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=rs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var pu=0;function fx(e,t){return e.stylesheets&&e.count===0&&ss(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&ss(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&pu===0&&(pu=62500*Fy());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ss(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>pu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(c)}}:null}function rs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ss(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var is=null;function ss(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,is=new Map,t.forEach(hx,e),is=null,rs.call(e))}function hx(e,t){if(!(t.state.loading&4)){var n=is.get(e);if(n)var l=n.get(null);else{n=new Map,is.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var p=c[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),l=p)}l&&n.set(null,l)}c=t.instance,p=c.getAttribute("data-precedence"),u=n.get(p)||l,u===l&&n.set(null,c),n.set(p,c),this.count++,l=rs.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Er={$$typeof:q,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function px(e,t,n,l,c,u,p,y,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oo(0),this.hiddenUpdates=oo(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Um(e,t,n,l,c,u,p,y,w,T,Y,K){return e=new px(e,t,n,p,w,T,Y,K,y),t=1,u===!0&&(t|=24),u=Nt(3,null,null,t),e.current=u,u.stateNode=e,t=Ko(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:l,isDehydrated:n,cache:t},Zo(u),e}function Dm(e){return e?(e=el,e):el}function Lm(e,t,n,l,c,u){c=Dm(c),l.context===null?l.context=c:l.pendingContext=c,l=Vn(t),l.payload={element:n},u=u===void 0?null:u,u!==null&&(l.callback=u),n=Pn(e,l,t),n!==null&&(vt(n,e,t),nr(n,e,t))}function Bm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mu(e,t){Bm(e,t),(e=e.alternate)&&Bm(e,t)}function Hm(e){if(e.tag===13||e.tag===31){var t=ya(e,67108864);t!==null&&vt(t,e,67108864),mu(e,67108864)}}function qm(e){if(e.tag===13||e.tag===31){var t=Ot();t=co(t);var n=ya(e,t);n!==null&&vt(n,e,t),mu(e,t)}}var os=!0;function mx(e,t,n,l){var c=R.T;R.T=null;var u=I.p;try{I.p=2,gu(e,t,n,l)}finally{I.p=u,R.T=c}}function gx(e,t,n,l){var c=R.T;R.T=null;var u=I.p;try{I.p=8,gu(e,t,n,l)}finally{I.p=u,R.T=c}}function gu(e,t,n,l){if(os){var c=bu(l);if(c===null)nu(e,t,l,cs,n),Vm(e,l);else if(yx(c,e,t,n,l))l.stopPropagation();else if(Vm(e,l),t&4&&-1<bx.indexOf(e)){for(;c!==null;){var u=Pa(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=ha(u.pendingLanes);if(p!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var w=1<<31-kt(p);y.entanglements[1]|=w,p&=~w}rn(u),(Ne&6)===0&&(Xi=Et()+500,yr(0))}}break;case 31:case 13:y=ya(u,2),y!==null&&vt(y,u,2),Ki(),mu(u,2)}if(u=bu(l),u===null&&nu(e,t,l,cs,n),u===c)break;c=u}c!==null&&l.stopPropagation()}else nu(e,t,l,null,n)}}function bu(e){return e=xo(e),yu(e)}var cs=null;function yu(e){if(cs=null,e=Va(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cs=e,null}function Ym(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nb()){case Qd:return 2;case $d:return 8;case Jr:case ab:return 32;case Id:return 268435456;default:return 32}default:return 32}}var xu=!1,ea=null,ta=null,na=null,Cr=new Map,kr=new Map,aa=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vm(e,t){switch(e){case"focusin":case"focusout":ea=null;break;case"dragenter":case"dragleave":ta=null;break;case"mouseover":case"mouseout":na=null;break;case"pointerover":case"pointerout":Cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function _r(e,t,n,l,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:u,targetContainers:[c]},t!==null&&(t=Pa(t),t!==null&&Hm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function yx(e,t,n,l,c){switch(t){case"focusin":return ea=_r(ea,e,t,n,l,c),!0;case"dragenter":return ta=_r(ta,e,t,n,l,c),!0;case"mouseover":return na=_r(na,e,t,n,l,c),!0;case"pointerover":var u=c.pointerId;return Cr.set(u,_r(Cr.get(u)||null,e,t,n,l,c)),!0;case"gotpointercapture":return u=c.pointerId,kr.set(u,_r(kr.get(u)||null,e,t,n,l,c)),!0}return!1}function Pm(e){var t=Va(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,nf(e.priority,function(){qm(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,nf(e.priority,function(){qm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bu(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);yo=l,n.target.dispatchEvent(l),yo=null}else return t=Pa(n),t!==null&&Hm(t),e.blockedOn=n,!1;t.shift()}return!0}function Gm(e,t,n){us(e)&&n.delete(t)}function xx(){xu=!1,ea!==null&&us(ea)&&(ea=null),ta!==null&&us(ta)&&(ta=null),na!==null&&us(na)&&(na=null),Cr.forEach(Gm),kr.forEach(Gm)}function ds(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,xx)))}var fs=null;function Xm(e){fs!==e&&(fs=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){fs===e&&(fs=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],c=e[t+2];if(typeof l!="function"){if(yu(l||n)===null)continue;break}var u=Pa(n);u!==null&&(e.splice(t,3),t-=3,bc(u,{pending:!0,data:c,method:n.method,action:l},l,c))}}))}function El(e){function t(w){return ds(w,e)}ea!==null&&ds(ea,e),ta!==null&&ds(ta,e),na!==null&&ds(na,e),Cr.forEach(t),kr.forEach(t);for(var n=0;n<aa.length;n++){var l=aa[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<aa.length&&(n=aa[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&aa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var c=n[l],u=n[l+1],p=c[pt]||null;if(typeof u=="function")p||Xm(n);else if(p){var y=null;if(u&&u.hasAttribute("formAction")){if(c=u,p=u[pt]||null)y=p.formAction;else if(yu(c)!==null)continue}else y=p.action;typeof y=="function"?n[l+1]=y:(n.splice(l,3),l-=3),Xm(n)}}}function Fm(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(p){return c=p})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function vu(e){this._internalRoot=e}hs.prototype.render=vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=Ot();Lm(n,l,e,t,null,null)},hs.prototype.unmount=vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lm(e.current,2,null,e,null,null),Ki(),t[Ya]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<aa.length&&t!==0&&t<aa[n].priority;n++);aa.splice(n,0,e),n===0&&Pm(e)}};var Km=r.version;if(Km!=="19.2.5")throw Error(o(527,Km,"19.2.5"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=b(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var vx={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{Dl=ps.inject(vx),Ct=ps}catch{}}return zr.createRoot=function(e,t){if(!i(e))throw Error(o(299));var n=!1,l="",c=ep,u=tp,p=np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=Um(e,1,!1,null,null,n,l,null,c,u,p,Fm),e[Ya]=t.current,tu(e),new vu(t)},zr.hydrateRoot=function(e,t,n){if(!i(e))throw Error(o(299));var l=!1,c="",u=ep,p=tp,y=np,w=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Um(e,1,!0,t,n??null,l,c,w,u,p,y,Fm),t.context=Dm(null),n=t.current,l=Ot(),l=co(l),c=Vn(l),c.callback=null,Pn(n,c,l),n=l,t.current.lanes=n,Bl(t,n),rn(t),e[Ya]=t.current,tu(e),new hs(t)},zr.version="19.2.5",zr}var a0;function zx(){if(a0)return ju.exports;a0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),ju.exports=Nx(),ju.exports}var Ax=zx();const Tx=ig(Ax);var l0="popstate";function r0(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function Rx(a={}){function r(i,d){let{pathname:h="/",search:m="",hash:g=""}=Ha(i.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),td("",{pathname:h,search:m,hash:g},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(i,d){let h=i.document.querySelector("base"),m="";if(h&&h.getAttribute("href")){let g=i.location.href,b=g.indexOf("#");m=b===-1?g:g.slice(0,b)}return m+"#"+(typeof d=="string"?d:Hr(d))}function o(i,d){en(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return Mx(r,s,o,a)}function Ve(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function en(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Ox(){return Math.random().toString(36).substring(2,10)}function i0(a,r){return{usr:a.state,key:a.key,idx:r,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function td(a,r,s=null,o,i){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Ha(r):r,state:s,key:r&&r.key||o||Ox(),unstable_mask:i}}function Hr({pathname:a="/",search:r="",hash:s=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function Ha(a){let r={};if(a){let s=a.indexOf("#");s>=0&&(r.hash=a.substring(s),a=a.substring(0,s));let o=a.indexOf("?");o>=0&&(r.search=a.substring(o),a=a.substring(0,o)),a&&(r.pathname=a)}return r}function Mx(a,r,s,o={}){let{window:i=document.defaultView,v5Compat:d=!1}=o,h=i.history,m="POP",g=null,b=x();b==null&&(b=0,h.replaceState({...h.state,idx:b},""));function x(){return(h.state||{idx:null}).idx}function v(){m="POP";let _=x(),X=_==null?null:_-b;b=_,g&&g({action:m,location:N.location,delta:X})}function E(_,X){m="PUSH";let U=r0(_)?_:td(N.location,_,X);s&&s(U,_),b=x()+1;let q=i0(U,b),F=N.createHref(U.unstable_mask||U);try{h.pushState(q,"",F)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;i.location.assign(F)}d&&g&&g({action:m,location:N.location,delta:1})}function M(_,X){m="REPLACE";let U=r0(_)?_:td(N.location,_,X);s&&s(U,_),b=x();let q=i0(U,b),F=N.createHref(U.unstable_mask||U);h.replaceState(q,"",F),d&&g&&g({action:m,location:N.location,delta:0})}function k(_){return Ux(_)}let N={get action(){return m},get location(){return a(i,h)},listen(_){if(g)throw new Error("A history only accepts one active listener");return i.addEventListener(l0,v),g=_,()=>{i.removeEventListener(l0,v),g=null}},createHref(_){return r(i,_)},createURL:k,encodeLocation(_){let X=k(_);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:E,replace:M,go(_){return h.go(_)}};return N}function Ux(a,r=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ve(s,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Hr(a);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=s+o),new URL(o,s)}function og(a,r,s="/"){return Dx(a,r,s,!1)}function Dx(a,r,s,o){let i=typeof r=="string"?Ha(r):r,d=An(i.pathname||"/",s);if(d==null)return null;let h=cg(a);Lx(h);let m=null;for(let g=0;m==null&&g<h.length;++g){let b=Qx(d);m=Fx(h[g],b,o)}return m}function cg(a,r=[],s=[],o="",i=!1){let d=(h,m,g=i,b)=>{let x={relativePath:b===void 0?h.path||"":b,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&g)return;Ve(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let v=Jt([o,x.relativePath]),E=s.concat(x);h.children&&h.children.length>0&&(Ve(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),cg(h.children,r,E,v,g)),!(h.path==null&&!h.index)&&r.push({path:v,score:Gx(v,h.index),routesMeta:E})};return a.forEach((h,m)=>{if(h.path===""||!h.path?.includes("?"))d(h,m);else for(let g of ug(h.path))d(h,m,!0,g)}),r}function ug(a){let r=a.split("/");if(r.length===0)return[];let[s,...o]=r,i=s.endsWith("?"),d=s.replace(/\?$/,"");if(o.length===0)return i?[d,""]:[d];let h=ug(o.join("/")),m=[];return m.push(...h.map(g=>g===""?d:[d,g].join("/"))),i&&m.push(...h),m.map(g=>a.startsWith("/")&&g===""?"/":g)}function Lx(a){a.sort((r,s)=>r.score!==s.score?s.score-r.score:Xx(r.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}var Bx=/^:[\w-]+$/,Hx=3,qx=2,Yx=1,Vx=10,Px=-2,s0=a=>a==="*";function Gx(a,r){let s=a.split("/"),o=s.length;return s.some(s0)&&(o+=Px),r&&(o+=qx),s.filter(i=>!s0(i)).reduce((i,d)=>i+(Bx.test(d)?Hx:d===""?Yx:Vx),o)}function Xx(a,r){return a.length===r.length&&a.slice(0,-1).every((o,i)=>o===r[i])?a[a.length-1]-r[r.length-1]:0}function Fx(a,r,s=!1){let{routesMeta:o}=a,i={},d="/",h=[];for(let m=0;m<o.length;++m){let g=o[m],b=m===o.length-1,x=d==="/"?r:r.slice(d.length)||"/",v=Ms({path:g.relativePath,caseSensitive:g.caseSensitive,end:b},x),E=g.route;if(!v&&b&&s&&!o[o.length-1].route.index&&(v=Ms({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!v)return null;Object.assign(i,v.params),h.push({params:i,pathname:Jt([d,v.pathname]),pathnameBase:Jx(Jt([d,v.pathnameBase])),route:E}),v.pathnameBase!=="/"&&(d=Jt([d,v.pathnameBase]))}return h}function Ms(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,o]=Kx(a.path,a.caseSensitive,a.end),i=r.match(s);if(!i)return null;let d=i[0],h=d.replace(/(.)\/+$/,"$1"),m=i.slice(1);return{params:o.reduce((b,{paramName:x,isOptional:v},E)=>{if(x==="*"){let k=m[E]||"";h=d.slice(0,d.length-k.length).replace(/(.)\/+$/,"$1")}const M=m[E];return v&&!M?b[x]=void 0:b[x]=(M||"").replace(/%2F/g,"/"),b},{}),pathname:d,pathnameBase:h,pattern:a}}function Kx(a,r=!1,s=!0){en(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],i="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,g,b,x)=>{if(o.push({paramName:m,isOptional:g!=null}),g){let v=x.charAt(b+h.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),i+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?i+="\\/*$":a!==""&&a!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,r?void 0:"i"),o]}function Qx(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return en(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function An(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let s=r.endsWith("/")?r.length-1:r.length,o=a.charAt(s);return o&&o!=="/"?null:a.slice(s)||"/"}var $x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ix(a,r="/"){let{pathname:s,search:o="",hash:i=""}=typeof a=="string"?Ha(a):a,d;return s?(s=fg(s),s.startsWith("/")?d=o0(s.substring(1),"/"):d=o0(s,r)):d=r,{pathname:d,search:Wx(o),hash:ev(i)}}function o0(a,r){let s=Us(r).split("/");return a.split("/").forEach(i=>{i===".."?s.length>1&&s.pop():i!=="."&&s.push(i)}),s.length>1?s.join("/"):"/"}function _u(a,r,s,o){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zx(a){return a.filter((r,s)=>s===0||r.route.path&&r.route.path.length>0)}function dg(a){let r=Zx(a);return r.map((s,o)=>o===r.length-1?s.pathname:s.pathnameBase)}function wd(a,r,s,o=!1){let i;typeof a=="string"?i=Ha(a):(i={...a},Ve(!i.pathname||!i.pathname.includes("?"),_u("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),_u("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),_u("#","search","hash",i)));let d=a===""||i.pathname==="",h=d?"/":i.pathname,m;if(h==null)m=s;else{let v=r.length-1;if(!o&&h.startsWith("..")){let E=h.split("/");for(;E[0]==="..";)E.shift(),v-=1;i.pathname=E.join("/")}m=v>=0?r[v]:"/"}let g=Ix(i,m),b=h&&h!=="/"&&h.endsWith("/"),x=(d||h===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(b||x)&&(g.pathname+="/"),g}var fg=a=>a.replace(/\/\/+/g,"/"),Jt=a=>fg(a.join("/")),Us=a=>a.replace(/\/+$/,""),Jx=a=>Us(a).replace(/^\/*/,"/"),Wx=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,ev=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,tv=class{constructor(a,r,s,o=!1){this.status=a,this.statusText=r||"",this.internal=o,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function nv(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function av(a){let r=a.map(s=>s.route.path).filter(Boolean);return Jt(r)||"/"}var hg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function pg(a,r){let s=a;if(typeof s!="string"||!$x.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let o=s,i=!1;if(hg)try{let d=new URL(window.location.href),h=s.startsWith("//")?new URL(d.protocol+s):new URL(s),m=An(h.pathname,r);h.origin===d.origin&&m!=null?s=m+h.search+h.hash:i=!0}catch{en(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:i,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var mg=["POST","PUT","PATCH","DELETE"];new Set(mg);var lv=["GET",...mg];new Set(lv);var Rl=S.createContext(null);Rl.displayName="DataRouter";var Ys=S.createContext(null);Ys.displayName="DataRouterState";var gg=S.createContext(!1);function rv(){return S.useContext(gg)}var bg=S.createContext({isTransitioning:!1});bg.displayName="ViewTransition";var iv=S.createContext(new Map);iv.displayName="Fetchers";var sv=S.createContext(null);sv.displayName="Await";var Kt=S.createContext(null);Kt.displayName="Navigation";var Yr=S.createContext(null);Yr.displayName="Location";var on=S.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var jd=S.createContext(null);jd.displayName="RouteError";var yg="REACT_ROUTER_ERROR",ov="REDIRECT",cv="ROUTE_ERROR_RESPONSE";function uv(a){if(a.startsWith(`${yg}:${ov}:{`))try{let r=JSON.parse(a.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function dv(a){if(a.startsWith(`${yg}:${cv}:{`))try{let r=JSON.parse(a.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new tv(r.status,r.statusText,r.data)}catch{}}function fv(a,{relative:r}={}){Ve(Vr(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:o}=S.useContext(Kt),{hash:i,pathname:d,search:h}=Gr(a,{relative:r}),m=d;return s!=="/"&&(m=d==="/"?s:Jt([s,d])),o.createHref({pathname:m,search:h,hash:i})}function Vr(){return S.useContext(Yr)!=null}function Tn(){return Ve(Vr(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Yr).location}var xg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vg(a){S.useContext(Kt).static||S.useLayoutEffect(a)}function Pr(){let{isDataRoute:a}=S.useContext(on);return a?Cv():hv()}function hv(){Ve(Vr(),"useNavigate() may be used only in the context of a <Router> component.");let a=S.useContext(Rl),{basename:r,navigator:s}=S.useContext(Kt),{matches:o}=S.useContext(on),{pathname:i}=Tn(),d=JSON.stringify(dg(o)),h=S.useRef(!1);return vg(()=>{h.current=!0}),S.useCallback((g,b={})=>{if(en(h.current,xg),!h.current)return;if(typeof g=="number"){s.go(g);return}let x=wd(g,JSON.parse(d),i,b.relative==="path");a==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:Jt([r,x.pathname])),(b.replace?s.replace:s.push)(x,b.state,b)},[r,s,d,i,a])}S.createContext(null);function Sg(){let{matches:a}=S.useContext(on),r=a[a.length-1];return r?r.params:{}}function Gr(a,{relative:r}={}){let{matches:s}=S.useContext(on),{pathname:o}=Tn(),i=JSON.stringify(dg(s));return S.useMemo(()=>wd(a,JSON.parse(i),o,r==="path"),[a,i,o,r])}function pv(a,r){return wg(a,r)}function wg(a,r,s){Ve(Vr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=S.useContext(Kt),{matches:i}=S.useContext(on),d=i[i.length-1],h=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",b=d&&d.route;{let _=b&&b.path||"";Eg(m,!b||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let x=Tn(),v;if(r){let _=typeof r=="string"?Ha(r):r;Ve(g==="/"||_.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=x;let E=v.pathname||"/",M=E;if(g!=="/"){let _=g.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(_.length).join("/")}let k=og(a,{pathname:M});en(b||k!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),en(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=xv(k&&k.map(_=>Object.assign({},_,{params:Object.assign({},h,_.params),pathname:Jt([g,o.encodeLocation?o.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?g:Jt([g,o.encodeLocation?o.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),i,s);return r&&N?S.createElement(Yr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},N):N}function mv(){let a=Ev(),r=nv(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:d},"ErrorBoundary")," or"," ",S.createElement("code",{style:d},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},r),s?S.createElement("pre",{style:i},s):null,h)}var gv=S.createElement(mv,null),jg=class extends S.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){this.props.onError?this.props.onError(a,r):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const s=dv(a.digest);s&&(a=s)}let r=a!==void 0?S.createElement(on.Provider,{value:this.props.routeContext},S.createElement(jd.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?S.createElement(bv,{error:a},r):r}};jg.contextType=gg;var Nu=new WeakMap;function bv({children:a,error:r}){let{basename:s}=S.useContext(Kt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=uv(r.digest);if(o){let i=Nu.get(r);if(i)throw i;let d=pg(o.location,s);if(hg&&!Nu.get(r))if(d.isExternal||o.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:o.replace}));throw Nu.set(r,h),h}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return a}function yv({routeContext:a,match:r,children:s}){let o=S.useContext(Rl);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),S.createElement(on.Provider,{value:a},s)}function xv(a,r=[],s){let o=s?.state;if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let i=a,d=o?.errors;if(d!=null){let x=i.findIndex(v=>v.route.id&&d?.[v.route.id]!==void 0);Ve(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),i=i.slice(0,Math.min(i.length,x+1))}let h=!1,m=-1;if(s&&o){h=o.renderFallback;for(let x=0;x<i.length;x++){let v=i[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=x),v.route.id){let{loaderData:E,errors:M}=o,k=v.route.loader&&!E.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||k){s.isStatic&&(h=!0),m>=0?i=i.slice(0,m+1):i=[i[0]];break}}}}let g=s?.onError,b=o&&g?(x,v)=>{g(x,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:av(o.matches),errorInfo:v})}:void 0;return i.reduceRight((x,v,E)=>{let M,k=!1,N=null,_=null;o&&(M=d&&v.route.id?d[v.route.id]:void 0,N=v.route.errorElement||gv,h&&(m<0&&E===0?(Eg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,_=null):m===E&&(k=!0,_=v.route.hydrateFallbackElement||null)));let X=r.concat(i.slice(0,E+1)),U=()=>{let q;return M?q=N:k?q=_:v.route.Component?q=S.createElement(v.route.Component,null):v.route.element?q=v.route.element:q=x,S.createElement(yv,{match:v,routeContext:{outlet:x,matches:X,isDataRoute:o!=null},children:q})};return o&&(v.route.ErrorBoundary||v.route.errorElement||E===0)?S.createElement(jg,{location:o.location,revalidation:o.revalidation,component:N,error:M,children:U(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:b}):U()},null)}function Ed(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vv(a){let r=S.useContext(Rl);return Ve(r,Ed(a)),r}function Sv(a){let r=S.useContext(Ys);return Ve(r,Ed(a)),r}function wv(a){let r=S.useContext(on);return Ve(r,Ed(a)),r}function Cd(a){let r=wv(a),s=r.matches[r.matches.length-1];return Ve(s.route.id,`${a} can only be used on routes that contain a unique "id"`),s.route.id}function jv(){return Cd("useRouteId")}function Ev(){let a=S.useContext(jd),r=Sv("useRouteError"),s=Cd("useRouteError");return a!==void 0?a:r.errors?.[s]}function Cv(){let{router:a}=vv("useNavigate"),r=Cd("useNavigate"),s=S.useRef(!1);return vg(()=>{s.current=!0}),S.useCallback(async(i,d={})=>{en(s.current,xg),s.current&&(typeof i=="number"?await a.navigate(i):await a.navigate(i,{fromRouteId:r,...d}))},[a,r])}var c0={};function Eg(a,r,s){!r&&!c0[a]&&(c0[a]=!0,en(!1,s))}S.memo(kv);function kv({routes:a,future:r,state:s,isStatic:o,onError:i}){return wg(a,void 0,{state:s,isStatic:o,onError:i})}function _n(a){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _v({basename:a="/",children:r=null,location:s,navigationType:o="POP",navigator:i,static:d=!1,unstable_useTransitions:h}){Ve(!Vr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=a.replace(/^\/*/,"/"),g=S.useMemo(()=>({basename:m,navigator:i,static:d,unstable_useTransitions:h,future:{}}),[m,i,d,h]);typeof s=="string"&&(s=Ha(s));let{pathname:b="/",search:x="",hash:v="",state:E=null,key:M="default",unstable_mask:k}=s,N=S.useMemo(()=>{let _=An(b,m);return _==null?null:{location:{pathname:_,search:x,hash:v,state:E,key:M,unstable_mask:k},navigationType:o}},[m,b,x,v,E,M,o,k]);return en(N!=null,`<Router basename="${m}"> is not able to match the URL "${b}${x}${v}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:S.createElement(Kt.Provider,{value:g},S.createElement(Yr.Provider,{children:r,value:N}))}function Nv({children:a,location:r}){return pv(nd(a),r)}function nd(a,r=[]){let s=[];return S.Children.forEach(a,(o,i)=>{if(!S.isValidElement(o))return;let d=[...r,i];if(o.type===S.Fragment){s.push.apply(s,nd(o.props.children,d));return}Ve(o.type===_n,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=nd(o.props.children,d)),s.push(h)}),s}var js="get",Es="application/x-www-form-urlencoded";function Vs(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function zv(a){return Vs(a)&&a.tagName.toLowerCase()==="button"}function Av(a){return Vs(a)&&a.tagName.toLowerCase()==="form"}function Tv(a){return Vs(a)&&a.tagName.toLowerCase()==="input"}function Rv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Ov(a,r){return a.button===0&&(!r||r==="_self")&&!Rv(a)}var ms=null;function Mv(){if(ms===null)try{new FormData(document.createElement("form"),0),ms=!1}catch{ms=!0}return ms}var Uv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zu(a){return a!=null&&!Uv.has(a)?(en(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Es}"`),null):a}function Dv(a,r){let s,o,i,d,h;if(Av(a)){let m=a.getAttribute("action");o=m?An(m,r):null,s=a.getAttribute("method")||js,i=zu(a.getAttribute("enctype"))||Es,d=new FormData(a)}else if(zv(a)||Tv(a)&&(a.type==="submit"||a.type==="image")){let m=a.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||m.getAttribute("action");if(o=g?An(g,r):null,s=a.getAttribute("formmethod")||m.getAttribute("method")||js,i=zu(a.getAttribute("formenctype"))||zu(m.getAttribute("enctype"))||Es,d=new FormData(m,a),!Mv()){let{name:b,type:x,value:v}=a;if(x==="image"){let E=b?`${b}.`:"";d.append(`${E}x`,"0"),d.append(`${E}y`,"0")}else b&&d.append(b,v)}}else{if(Vs(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=js,o=null,i=Es,h=a}return d&&i==="text/plain"&&(h=d,d=void 0),{action:o,method:s.toLowerCase(),encType:i,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kd(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Cg(a,r,s,o){let i=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${o}`:i.pathname=`${i.pathname}.${o}`:i.pathname==="/"?i.pathname=`_root.${o}`:r&&An(i.pathname,r)==="/"?i.pathname=`${Us(r)}/_root.${o}`:i.pathname=`${Us(i.pathname)}.${o}`,i}async function Lv(a,r){if(a.id in r)return r[a.id];try{let s=await import(a.module);return r[a.id]=s,s}catch(s){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Bv(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Hv(a,r,s){let o=await Promise.all(a.map(async i=>{let d=r.routes[i.route.id];if(d){let h=await Lv(d,s);return h.links?h.links():[]}return[]}));return Pv(o.flat(1).filter(Bv).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function u0(a,r,s,o,i,d){let h=(g,b)=>s[b]?g.route.id!==s[b].route.id:!0,m=(g,b)=>s[b].pathname!==g.pathname||s[b].route.path?.endsWith("*")&&s[b].params["*"]!==g.params["*"];return d==="assets"?r.filter((g,b)=>h(g,b)||m(g,b)):d==="data"?r.filter((g,b)=>{let x=o.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(h(g,b)||m(g,b))return!0;if(g.route.shouldRevalidate){let v=g.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function qv(a,r,{includeHydrateFallback:s}={}){return Yv(a.map(o=>{let i=r.routes[o.route.id];if(!i)return[];let d=[i.module];return i.clientActionModule&&(d=d.concat(i.clientActionModule)),i.clientLoaderModule&&(d=d.concat(i.clientLoaderModule)),s&&i.hydrateFallbackModule&&(d=d.concat(i.hydrateFallbackModule)),i.imports&&(d=d.concat(i.imports)),d}).flat(1))}function Yv(a){return[...new Set(a)]}function Vv(a){let r={},s=Object.keys(a).sort();for(let o of s)r[o]=a[o];return r}function Pv(a,r){let s=new Set;return new Set(r),a.reduce((o,i)=>{let d=JSON.stringify(Vv(i));return s.has(d)||(s.add(d),o.push({key:d,link:i})),o},[])}function _d(){let a=S.useContext(Rl);return kd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Gv(){let a=S.useContext(Ys);return kd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Nd=S.createContext(void 0);Nd.displayName="FrameworkContext";function zd(){let a=S.useContext(Nd);return kd(a,"You must render this element inside a <HydratedRouter> element"),a}function Xv(a,r){let s=S.useContext(Nd),[o,i]=S.useState(!1),[d,h]=S.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:b,onMouseLeave:x,onTouchStart:v}=r,E=S.useRef(null);S.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let N=X=>{X.forEach(U=>{h(U.isIntersecting)})},_=new IntersectionObserver(N,{threshold:.5});return E.current&&_.observe(E.current),()=>{_.disconnect()}}},[a]),S.useEffect(()=>{if(o){let N=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(N)}}},[o]);let M=()=>{i(!0)},k=()=>{i(!1),h(!1)};return s?a!=="intent"?[d,E,{}]:[d,E,{onFocus:Ar(m,M),onBlur:Ar(g,k),onMouseEnter:Ar(b,M),onMouseLeave:Ar(x,k),onTouchStart:Ar(v,M)}]:[!1,E,{}]}function Ar(a,r){return s=>{a&&a(s),s.defaultPrevented||r(s)}}function Fv({page:a,...r}){let s=rv(),{router:o}=_d(),i=S.useMemo(()=>og(o.routes,a,o.basename),[o.routes,a,o.basename]);return i?s?S.createElement(Qv,{page:a,matches:i,...r}):S.createElement($v,{page:a,matches:i,...r}):null}function Kv(a){let{manifest:r,routeModules:s}=zd(),[o,i]=S.useState([]);return S.useEffect(()=>{let d=!1;return Hv(a,r,s).then(h=>{d||i(h)}),()=>{d=!0}},[a,r,s]),o}function Qv({page:a,matches:r,...s}){let o=Tn(),{future:i}=zd(),{basename:d}=_d(),h=S.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let m=Cg(a,d,i.unstable_trailingSlashAwareDataRequests,"rsc"),g=!1,b=[];for(let x of r)typeof x.route.shouldRevalidate=="function"?g=!0:b.push(x.route.id);return g&&b.length>0&&m.searchParams.set("_routes",b.join(",")),[m.pathname+m.search]},[d,i.unstable_trailingSlashAwareDataRequests,a,o,r]);return S.createElement(S.Fragment,null,h.map(m=>S.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...s})))}function $v({page:a,matches:r,...s}){let o=Tn(),{future:i,manifest:d,routeModules:h}=zd(),{basename:m}=_d(),{loaderData:g,matches:b}=Gv(),x=S.useMemo(()=>u0(a,r,b,d,o,"data"),[a,r,b,d,o]),v=S.useMemo(()=>u0(a,r,b,d,o,"assets"),[a,r,b,d,o]),E=S.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let N=new Set,_=!1;if(r.forEach(U=>{let q=d.routes[U.route.id];!q||!q.hasLoader||(!x.some(F=>F.route.id===U.route.id)&&U.route.id in g&&h[U.route.id]?.shouldRevalidate||q.hasClientLoader?_=!0:N.add(U.route.id))}),N.size===0)return[];let X=Cg(a,m,i.unstable_trailingSlashAwareDataRequests,"data");return _&&N.size>0&&X.searchParams.set("_routes",r.filter(U=>N.has(U.route.id)).map(U=>U.route.id).join(",")),[X.pathname+X.search]},[m,i.unstable_trailingSlashAwareDataRequests,g,o,d,x,r,a,h]),M=S.useMemo(()=>qv(v,d),[v,d]),k=Kv(v);return S.createElement(S.Fragment,null,E.map(N=>S.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...s})),M.map(N=>S.createElement("link",{key:N,rel:"modulepreload",href:N,...s})),k.map(({key:N,link:_})=>S.createElement("link",{key:N,nonce:s.nonce,..._,crossOrigin:_.crossOrigin??s.crossOrigin})))}function Iv(...a){return r=>{a.forEach(s=>{typeof s=="function"?s(r):s!=null&&(s.current=r)})}}var Zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Zv&&(window.__reactRouterVersion="7.14.1")}catch{}function Jv({basename:a,children:r,unstable_useTransitions:s,window:o}){let i=S.useRef();i.current==null&&(i.current=Rx({window:o,v5Compat:!0}));let d=i.current,[h,m]=S.useState({action:d.action,location:d.location}),g=S.useCallback(b=>{s===!1?m(b):S.startTransition(()=>m(b))},[s]);return S.useLayoutEffect(()=>d.listen(g),[d,g]),S.createElement(_v,{basename:a,children:r,location:h.location,navigationType:h.action,navigator:d,unstable_useTransitions:s})}var kg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_g=S.forwardRef(function({onClick:r,discover:s="render",prefetch:o="none",relative:i,reloadDocument:d,replace:h,unstable_mask:m,state:g,target:b,to:x,preventScrollReset:v,viewTransition:E,unstable_defaultShouldRevalidate:M,...k},N){let{basename:_,navigator:X,unstable_useTransitions:U}=S.useContext(Kt),q=typeof x=="string"&&kg.test(x),F=pg(x,_);x=F.to;let H=fv(x,{relative:i}),$=Tn(),V=null;if(m){let he=wd(m,[],$.unstable_mask?$.unstable_mask.pathname:"/",!0);_!=="/"&&(he.pathname=he.pathname==="/"?_:Jt([_,he.pathname])),V=X.createHref(he)}let[le,ae,je]=Xv(o,k),xe=t2(x,{replace:h,unstable_mask:m,state:g,target:b,preventScrollReset:v,relative:i,viewTransition:E,unstable_defaultShouldRevalidate:M,unstable_useTransitions:U});function me(he){r&&r(he),he.defaultPrevented||xe(he)}let Z=!(F.isExternal||d),re=S.createElement("a",{...k,...je,href:(Z?V:void 0)||F.absoluteURL||H,onClick:Z?me:r,ref:Iv(N,ae),target:b,"data-discover":!q&&s==="render"?"true":void 0});return le&&!q?S.createElement(S.Fragment,null,re,S.createElement(Fv,{page:H})):re});_g.displayName="Link";var St=S.forwardRef(function({"aria-current":r="page",caseSensitive:s=!1,className:o="",end:i=!1,style:d,to:h,viewTransition:m,children:g,...b},x){let v=Gr(h,{relative:b.relative}),E=Tn(),M=S.useContext(Ys),{navigator:k,basename:N}=S.useContext(Kt),_=M!=null&&i2(v)&&m===!0,X=k.encodeLocation?k.encodeLocation(v).pathname:v.pathname,U=E.pathname,q=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;s||(U=U.toLowerCase(),q=q?q.toLowerCase():null,X=X.toLowerCase()),q&&N&&(q=An(q,N)||q);const F=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let H=U===X||!i&&U.startsWith(X)&&U.charAt(F)==="/",$=q!=null&&(q===X||!i&&q.startsWith(X)&&q.charAt(X.length)==="/"),V={isActive:H,isPending:$,isTransitioning:_},le=H?r:void 0,ae;typeof o=="function"?ae=o(V):ae=[o,H?"active":null,$?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let je=typeof d=="function"?d(V):d;return S.createElement(_g,{...b,"aria-current":le,className:ae,ref:x,style:je,to:h,viewTransition:m},typeof g=="function"?g(V):g)});St.displayName="NavLink";var Wv=S.forwardRef(({discover:a="render",fetcherKey:r,navigate:s,reloadDocument:o,replace:i,state:d,method:h=js,action:m,onSubmit:g,relative:b,preventScrollReset:x,viewTransition:v,unstable_defaultShouldRevalidate:E,...M},k)=>{let{unstable_useTransitions:N}=S.useContext(Kt),_=l2(),X=r2(m,{relative:b}),U=h.toLowerCase()==="get"?"get":"post",q=typeof m=="string"&&kg.test(m),F=H=>{if(g&&g(H),H.defaultPrevented)return;H.preventDefault();let $=H.nativeEvent.submitter,V=$?.getAttribute("formmethod")||h,le=()=>_($||H.currentTarget,{fetcherKey:r,method:V,navigate:s,replace:i,state:d,relative:b,preventScrollReset:x,viewTransition:v,unstable_defaultShouldRevalidate:E});N&&s!==!1?S.startTransition(()=>le()):le()};return S.createElement("form",{ref:k,method:U,action:X,onSubmit:o?g:F,...M,"data-discover":!q&&a==="render"?"true":void 0})});Wv.displayName="Form";function e2(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ng(a){let r=S.useContext(Rl);return Ve(r,e2(a)),r}function t2(a,{target:r,replace:s,unstable_mask:o,state:i,preventScrollReset:d,relative:h,viewTransition:m,unstable_defaultShouldRevalidate:g,unstable_useTransitions:b}={}){let x=Pr(),v=Tn(),E=Gr(a,{relative:h});return S.useCallback(M=>{if(Ov(M,r)){M.preventDefault();let k=s!==void 0?s:Hr(v)===Hr(E),N=()=>x(a,{replace:k,unstable_mask:o,state:i,preventScrollReset:d,relative:h,viewTransition:m,unstable_defaultShouldRevalidate:g});b?S.startTransition(()=>N()):N()}},[v,x,E,s,o,i,r,a,d,h,m,g,b])}var n2=0,a2=()=>`__${String(++n2)}__`;function l2(){let{router:a}=Ng("useSubmit"),{basename:r}=S.useContext(Kt),s=jv(),o=a.fetch,i=a.navigate;return S.useCallback(async(d,h={})=>{let{action:m,method:g,encType:b,formData:x,body:v}=Dv(d,r);if(h.navigate===!1){let E=h.fetcherKey||a2();await o(E,s,h.action||m,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:x,body:v,formMethod:h.method||g,formEncType:h.encType||b,flushSync:h.flushSync})}else await i(h.action||m,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:x,body:v,formMethod:h.method||g,formEncType:h.encType||b,replace:h.replace,state:h.state,fromRouteId:s,flushSync:h.flushSync,viewTransition:h.viewTransition})},[o,i,r,s])}function r2(a,{relative:r}={}){let{basename:s}=S.useContext(Kt),o=S.useContext(on);Ve(o,"useFormAction must be used inside a RouteContext");let[i]=o.matches.slice(-1),d={...Gr(a||".",{relative:r})},h=Tn();if(a==null){d.search=h.search;let m=new URLSearchParams(d.search),g=m.getAll("index");if(g.some(x=>x==="")){m.delete("index"),g.filter(v=>v).forEach(v=>m.append("index",v));let x=m.toString();d.search=x?`?${x}`:""}}return(!a||a===".")&&i.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:Jt([s,d.pathname])),Hr(d)}function i2(a,{relative:r}={}){let s=S.useContext(bg);Ve(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Ng("useViewTransitionState"),i=Gr(a,{relative:r});if(!s.isTransitioning)return!1;let d=An(s.currentLocation.pathname,o)||s.currentLocation.pathname,h=An(s.nextLocation.pathname,o)||s.nextLocation.pathname;return Ms(i.pathname,h)!=null||Ms(i.pathname,d)!=null}var s2=sg(),o2=class zg extends Error{static kind="ClerkError";clerkError=!0;code;longMessage;docsUrl;cause;get name(){return this.constructor.name}constructor(r){super(new.target.formatMessage(new.target.kind,r.message,r.code,r.docsUrl),{cause:r.cause}),Object.setPrototypeOf(this,zg.prototype),this.code=r.code,this.docsUrl=r.docsUrl,this.longMessage=r.longMessage,this.cause=r.cause}toString(){return`[${this.name}]
Message:${this.message}`}static formatMessage(r,s,o,i){const d="Clerk:",h=new RegExp(d.replace(" ","\\s*"),"i");return s=s.replace(h,""),s=`${d} ${s.trim()}

(code="${o}")

`,i&&(s+=`

Docs: ${i}`),s}};const c2=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:"The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",MissingPublishableKeyErrorMessage:"Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",MissingSecretKeyErrorMessage:"Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function Ag({packageName:a,customMessages:r}){let s=a;function o(d,h){if(!h)return`${s}: ${d}`;let m=d;const g=d.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const b of g){const x=(h[b[1]]||"").toString();m=m.replace(`{{${b[1]}}}`,x)}return`${s}: ${m}`}const i={...c2,...r};return{setPackageName({packageName:d}){return typeof d=="string"&&(s=d),this},setMessages({customMessages:d}){return Object.assign(i,d||{}),this},throwInvalidPublishableKeyError(d){throw new Error(o(i.InvalidPublishableKeyErrorMessage,d))},throwInvalidProxyUrl(d){throw new Error(o(i.InvalidProxyUrlErrorMessage,d))},throwMissingPublishableKeyError(){throw new Error(o(i.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(o(i.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(d){throw new Error(o(i.MissingClerkProvider,d))},throw(d){throw new Error(o(d))}}}var ad=class Tg extends o2{static kind="ClerkRuntimeError";clerkRuntimeError=!0;constructor(r,s){super({...s,message:r}),Object.setPrototypeOf(this,Tg.prototype)}};const u2={strict_mfa:{afterMinutes:10,level:"multi_factor"},strict:{afterMinutes:10,level:"second_factor"},moderate:{afterMinutes:60,level:"second_factor"},lax:{afterMinutes:1440,level:"second_factor"}},d2=new Set(["first_factor","second_factor","multi_factor"]),f2=new Set(["strict_mfa","strict","moderate","lax"]),h2=a=>typeof a=="number"&&a>0,p2=a=>d2.has(a),m2=a=>f2.has(a),Au=a=>a.replace(/^(org:)*/,"org:"),g2=(a,r)=>{const{orgId:s,orgRole:o,orgPermissions:i}=r;return!a.role&&!a.permission||!s||!o||!i?null:a.permission?i.includes(Au(a.permission)):a.role?Au(o)===Au(a.role):null},d0=(a,r)=>{const{org:s,user:o}=y2(a),[i,d]=r.split(":"),h=d||i;return i==="org"?s.includes(h):i==="user"?o.includes(h):[...s,...o].includes(h)},b2=(a,r)=>{const{features:s,plans:o}=r;return a.feature&&s?d0(s,a.feature):a.plan&&o?d0(o,a.plan):null},y2=a=>{const r=a?a.split(",").map(s=>s.trim()):[];return{org:r.filter(s=>s.split(":")[0].includes("o")).map(s=>s.split(":")[1]),user:r.filter(s=>s.split(":")[0].includes("u")).map(s=>s.split(":")[1])}},x2=a=>{if(!a)return!1;const r=i=>typeof i=="string"?u2[i]:i,s=typeof a=="string"&&m2(a),o=typeof a=="object"&&p2(a.level)&&h2(a.afterMinutes);return s||o?r.bind(null,a):!1},v2=(a,{factorVerificationAge:r})=>{if(!a.reverification||!r)return null;const s=x2(a.reverification);if(!s)return null;const{level:o,afterMinutes:i}=s(),[d,h]=r,m=d!==-1?i>d:null,g=h!==-1?i>h:null;switch(o){case"first_factor":return m;case"second_factor":return h!==-1?g:m;case"multi_factor":return h===-1?m:m&&g}},S2=a=>r=>{if(!a.userId)return!1;const s=b2(r,a),o=g2(r,a),i=v2(r,a);return[s||o,i].some(d=>d===null)?[s||o,i].some(d=>d===!0):[s||o,i].every(d=>d===!0)},w2=({authObject:{sessionId:a,sessionStatus:r,userId:s,actor:o,orgId:i,orgRole:d,orgSlug:h,signOut:m,getToken:g,has:b,sessionClaims:x},options:{treatPendingAsSignedOut:v=!0}})=>{if(a===void 0&&s===void 0)return{isLoaded:!1,isSignedIn:void 0,sessionId:a,sessionClaims:void 0,userId:s,actor:void 0,orgId:void 0,orgRole:void 0,orgSlug:void 0,has:void 0,signOut:m,getToken:g};if(a===null&&s===null)return{isLoaded:!0,isSignedIn:!1,sessionId:a,userId:s,sessionClaims:null,actor:null,orgId:null,orgRole:null,orgSlug:null,has:()=>!1,signOut:m,getToken:g};if(v&&r==="pending")return{isLoaded:!0,isSignedIn:!1,sessionId:null,userId:null,sessionClaims:null,actor:null,orgId:null,orgRole:null,orgSlug:null,has:()=>!1,signOut:m,getToken:g};if(a&&x&&s&&i&&d)return{isLoaded:!0,isSignedIn:!0,sessionId:a,sessionClaims:x,userId:s,actor:o||null,orgId:i,orgRole:d,orgSlug:h||null,has:b,signOut:m,getToken:g};if(a&&x&&s&&!i)return{isLoaded:!0,isSignedIn:!0,sessionId:a,sessionClaims:x,userId:s,actor:o||null,orgId:null,orgRole:null,orgSlug:null,has:b,signOut:m,getToken:g}},j2=[".lcl.dev",".stg.dev",".lclstage.dev",".stgstage.dev",".dev.lclclerk.com",".stg.lclclerk.com",".accounts.lclclerk.com","accountsstage.dev","accounts.dev"],Rg=a=>typeof atob<"u"&&typeof atob=="function"?atob(a):typeof global<"u"&&global.Buffer?new global.Buffer(a,"base64").toString():a,Og="pk_live_",E2="pk_test_";function Mg(a){if(!a.endsWith("$"))return!1;const r=a.slice(0,-1);return r.includes("$")?!1:r.includes(".")}function f0(a,r={}){if(a=a||"",!a||!ld(a)){if(r.fatal&&!a)throw new Error("Publishable key is missing. Ensure that your publishable key is correctly configured. Double-check your environment configuration for your keys, or access them here: https://dashboard.clerk.com/last-active?path=api-keys");if(r.fatal&&!ld(a))throw new Error("Publishable key not valid.");return null}const s=a.startsWith(Og)?"production":"development";let o;try{o=Rg(a.split("_")[2])}catch{if(r.fatal)throw new Error("Publishable key not valid: Failed to decode key.");return null}if(!Mg(o)){if(r.fatal)throw new Error("Publishable key not valid: Decoded key has invalid format.");return null}let i=o.slice(0,-1);return r.proxyUrl?i=r.proxyUrl:s!=="development"&&r.domain&&r.isSatellite&&(i=`clerk.${r.domain}`),{instanceType:s,frontendApi:i}}function ld(a=""){try{if(!(a.startsWith(Og)||a.startsWith(E2)))return!1;const r=a.split("_");if(r.length!==3)return!1;const s=r[2];return s?Mg(Rg(s)):!1}catch{return!1}}function C2(){const a=new Map;return{isDevOrStagingUrl:r=>{if(!r)return!1;const s=typeof r=="string"?r:r.hostname;let o=a.get(s);return o===void 0&&(o=j2.some(i=>s.endsWith(i)),a.set(s,o)),o}}}const k2="METHOD_CALLED",_2=.1;function Ug(a,r){return{event:k2,eventSamplingRate:_2,payload:{method:a,...r}}}var Tu={exports:{}},Ru={};var h0;function N2(){if(h0)return Ru;h0=1;var a=qs();function r(v,E){return v===E&&(v!==0||1/v===1/E)||v!==v&&E!==E}var s=typeof Object.is=="function"?Object.is:r,o=a.useState,i=a.useEffect,d=a.useLayoutEffect,h=a.useDebugValue;function m(v,E){var M=E(),k=o({inst:{value:M,getSnapshot:E}}),N=k[0].inst,_=k[1];return d(function(){N.value=M,N.getSnapshot=E,g(N)&&_({inst:N})},[v,M,E]),i(function(){return g(N)&&_({inst:N}),v(function(){g(N)&&_({inst:N})})},[v]),h(M),M}function g(v){var E=v.getSnapshot;v=v.value;try{var M=E();return!s(v,M)}catch{return!0}}function b(v,E){return E()}var x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?b:m;return Ru.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:x,Ru}var p0;function z2(){return p0||(p0=1,Tu.exports=N2()),Tu.exports}z2();const A2=0,T2=1,R2=2;var m0=Object.prototype.hasOwnProperty;function rd(a,r){var s,o;if(a===r)return!0;if(a&&r&&(s=a.constructor)===r.constructor){if(s===Date)return a.getTime()===r.getTime();if(s===RegExp)return a.toString()===r.toString();if(s===Array){if((o=a.length)===r.length)for(;o--&&rd(a[o],r[o]););return o===-1}if(!s||typeof a=="object"){o=0;for(s in a)if(m0.call(a,s)&&++o&&!m0.call(r,s)||!(s in r)||!rd(a[s],r[s]))return!1;return Object.keys(r).length===o}}return a!==a&&r!==r}const oa=new WeakMap,ua=()=>{},Ut=ua(),Ds=Object,Zt=a=>a===Ut,ca=a=>typeof a=="function",La=(a,r)=>({...a,...r}),O2=a=>ca(a.then),Ou={},gs={},Dg="undefined",Ps=typeof window!=Dg,id=typeof document!=Dg,M2=Ps&&"Deno"in window,U2=(a,r)=>{const s=oa.get(a);return[()=>!Zt(r)&&a.get(r)||Ou,o=>{if(!Zt(r)){const i=a.get(r);r in gs||(gs[r]=i),s[5](r,La(i,o),i||Ou)}},s[6],()=>!Zt(r)&&r in gs?gs[r]:!Zt(r)&&a.get(r)||Ou]};let sd=!0;const D2=()=>sd,[od,cd]=Ps&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[ua,ua],L2=()=>{const a=id&&document.visibilityState;return Zt(a)||a!=="hidden"},B2=a=>(id&&document.addEventListener("visibilitychange",a),od("focus",a),()=>{id&&document.removeEventListener("visibilitychange",a),cd("focus",a)}),H2=a=>{const r=()=>{sd=!0,a()},s=()=>{sd=!1};return od("online",r),od("offline",s),()=>{cd("online",r),cd("offline",s)}},q2={isOnline:D2,isVisible:L2},Y2={initFocus:B2,initReconnect:H2};D.useId;const Ad=!Ps||M2,V2=Ad?S.useEffect:S.useLayoutEffect,Mu=typeof navigator<"u"&&navigator.connection,g0=!Ad&&Mu&&(["slow-2g","2g"].includes(Mu.effectiveType)||Mu.saveData),bs=new WeakMap,P2=a=>Ds.prototype.toString.call(a),Uu=(a,r)=>a===`[object ${r}]`;let G2=0;const ud=a=>{const r=typeof a,s=P2(a),o=Uu(s,"Date"),i=Uu(s,"RegExp"),d=Uu(s,"Object");let h,m;if(Ds(a)===a&&!o&&!i){if(h=bs.get(a),h)return h;if(h=++G2+"~",bs.set(a,h),Array.isArray(a)){for(h="@",m=0;m<a.length;m++)h+=ud(a[m])+",";bs.set(a,h)}if(d){h="#";const g=Ds.keys(a).sort();for(;!Zt(m=g.pop());)Zt(a[m])||(h+=m+":"+ud(a[m])+",");bs.set(a,h)}}else h=o?a.toJSON():r=="symbol"?a.toString():r=="string"?JSON.stringify(a):""+a;return h},Lg=a=>{if(ca(a))try{a=a()}catch{a=""}const r=a;return a=typeof a=="string"?a:(Array.isArray(a)?a.length:a)?ud(a):"",[a,r]};let X2=0;const b0=()=>++X2;async function F2(...a){const[r,s,o,i]=a,d=La({populateCache:!0,throwOnError:!0},typeof i=="boolean"?{revalidate:i}:i||{});let h=d.populateCache;const m=d.rollbackOnError;let g=d.optimisticData;const b=E=>typeof m=="function"?m(E):m!==!1,x=d.throwOnError;if(ca(s)){const E=s,M=[],k=r.keys();for(const N of k)!/^\$(inf|sub)\$/.test(N)&&E(r.get(N)._k)&&M.push(N);return Promise.all(M.map(v))}return v(s);async function v(E){const[M]=Lg(E);if(!M)return;const[k,N]=U2(r,M),[_,X,U,q]=oa.get(r),F=()=>{const re=_[M];return(ca(d.revalidate)?d.revalidate(k().data,E):d.revalidate!==!1)&&(delete U[M],delete q[M],re&&re[0])?re[0](R2).then(()=>k().data):k().data};if(a.length<3)return F();let H=o,$,V=!1;const le=b0();X[M]=[le,0];const ae=!Zt(g),je=k(),xe=je.data,me=je._c,Z=Zt(me)?xe:me;if(ae&&(g=ca(g)?g(Z,xe):g,N({data:g,_c:Z})),ca(H))try{H=H(Z)}catch(re){$=re,V=!0}if(H&&O2(H))if(H=await H.catch(re=>{$=re,V=!0}),le!==X[M][0]){if(V)throw $;return H}else V&&ae&&b($)&&(h=!0,N({data:Z,_c:Ut}));if(h&&!V)if(ca(h)){const re=h(H,Z);N({data:re,error:Ut,_c:Ut})}else N({data:H,error:Ut,_c:Ut});if(X[M][1]=b0(),Promise.resolve(F()).then(()=>{N({_c:Ut})}),V){if(x)throw $;return}return H}}const y0=(a,r)=>{for(const s in a)a[s][0]&&a[s][0](r)},Bg=(a,r)=>{if(!oa.has(a)){const s=La(Y2,r),o=Object.create(null),i=F2.bind(Ut,a);let d=ua;const h=Object.create(null),m=(x,v)=>{const E=h[x]||[];return h[x]=E,E.push(v),()=>E.splice(E.indexOf(v),1)},g=(x,v,E)=>{a.set(x,v);const M=h[x];if(M)for(const k of M)k(v,E)},b=()=>{if(!oa.has(a)&&(oa.set(a,[o,Object.create(null),Object.create(null),Object.create(null),i,g,m]),!Ad)){const x=s.initFocus(setTimeout.bind(Ut,y0.bind(Ut,o,A2))),v=s.initReconnect(setTimeout.bind(Ut,y0.bind(Ut,o,T2)));d=()=>{x&&x(),v&&v(),oa.delete(a)}}};return b(),[a,i,b,d]}return[a,oa.get(a)[4]]},K2=(a,r,s,o,i)=>{const d=s.errorRetryCount,h=i.retryCount,m=~~((Math.random()+.5)*(1<<(h<8?h:8)))*s.errorRetryInterval;!Zt(d)&&h>d||setTimeout(o,m,i)},Q2=rd,[Td,$2]=Bg(new Map),I2=La({onLoadingSlow:ua,onSuccess:ua,onError:ua,onErrorRetry:K2,onDiscarded:ua,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:g0?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:g0?5e3:3e3,compare:Q2,isPaused:()=>!1,cache:Td,mutate:$2,fallback:{}},q2),Z2=(a,r)=>{const s=La(a,r);if(r){const{use:o,fallback:i}=a,{use:d,fallback:h}=r;o&&d&&(s.use=o.concat(d)),i&&h&&(s.fallback=La(i,h))}return s},x0=S.createContext({}),J2=a=>{const{value:r}=a,s=S.useContext(x0),o=ca(r),i=S.useMemo(()=>o?r(s):r,[o,s,r]),d=S.useMemo(()=>o?i:Z2(s,i),[o,s,i]),h=i&&i.provider,m=S.useRef(Ut);h&&!m.current&&(m.current=Bg(h(d.cache||Td),i));const g=m.current;return g&&(d.cache=g[0],d.mutate=g[1]),V2(()=>{if(g)return g[2]&&g[2](),g[3]},[]),S.createElement(x0.Provider,La(a,{value:d}))},W2="$inf$",Hg=Ps&&window.__SWR_DEVTOOLS_USE__,e4=Hg?window.__SWR_DEVTOOLS_USE__:[],t4=()=>{Hg&&(window.__SWR_DEVTOOLS_REACT__=D)},n4=a=>(r,s,o)=>a(r,s&&((...d)=>{const[h]=Lg(r),[,,,m]=oa.get(Td);if(h.startsWith(W2))return s(...d);const g=m[h];return Zt(g)?s(...d):(delete m[h],g)}),o);e4.concat(n4);t4();D.use;const a4=Ds.defineProperty(J2,"defaultValue",{value:I2});var v0=Object.prototype.hasOwnProperty;function S0(a,r,s){for(s of a.keys())if(Dr(s,r))return s}function Dr(a,r){var s,o,i;if(a===r)return!0;if(a&&r&&(s=a.constructor)===r.constructor){if(s===Date)return a.getTime()===r.getTime();if(s===RegExp)return a.toString()===r.toString();if(s===Array){if((o=a.length)===r.length)for(;o--&&Dr(a[o],r[o]););return o===-1}if(s===Set){if(a.size!==r.size)return!1;for(o of a)if(i=o,i&&typeof i=="object"&&(i=S0(r,i),!i)||!r.has(i))return!1;return!0}if(s===Map){if(a.size!==r.size)return!1;for(o of a)if(i=o[0],i&&typeof i=="object"&&(i=S0(r,i),!i)||!Dr(o[1],r.get(i)))return!1;return!0}if(s===ArrayBuffer)a=new Uint8Array(a),r=new Uint8Array(r);else if(s===DataView){if((o=a.byteLength)===r.byteLength)for(;o--&&a.getInt8(o)===r.getInt8(o););return o===-1}if(ArrayBuffer.isView(a)){if((o=a.byteLength)===r.byteLength)for(;o--&&a[o]===r[o];);return o===-1}if(!s||typeof a=="object"){o=0;for(s in a)if(v0.call(a,s)&&++o&&!v0.call(r,s)||!(s in r)||!Dr(a[s],r[s]))return!1;return Object.keys(r).length===o}}return a!==a&&r!==r}function l4(a,r){if(!a)throw typeof r=="string"?new Error(r):new Error(`${r.displayName} not found`)}const Rn=(a,r)=>{const{assertCtxFn:s=l4}={},o=D.createContext(void 0);return o.displayName=a,[o,()=>{const h=D.useContext(o);return s(h,`${a} not found`),h.value},()=>{const h=D.useContext(o);return h?h.value:{}}]};function r4({swrConfig:a,children:r}){return D.createElement(a4,{value:a},r)}const[qg,Rd]=Rn("ClerkInstanceContext"),[i4,s4]=Rn("UserContext"),[o4]=Rn("ClientContext"),[c4]=Rn("SessionContext");D.createContext({});const[u4]=Rn("CheckoutContext"),d4=({children:a,...r})=>D.createElement(u4.Provider,{value:{value:r}},a),[f4]=Rn("OrganizationContext"),h4=({children:a,organization:r,swrConfig:s})=>D.createElement(r4,{swrConfig:s},D.createElement(f4.Provider,{value:{value:{organization:r}}},a));function Od(a){if(!D.useContext(qg)){if(typeof a=="function"){a();return}throw new Error(`${a} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}const Yg=()=>(Od("useClerk"),Rd());typeof window<"u"?D.useLayoutEffect:D.useEffect;const w0="useUser";function Ol(){Od(w0);const a=s4();return Rd().telemetry?.record(Ug(w0)),a===void 0?{isLoaded:!1,isSignedIn:void 0,user:void 0}:a===null?{isLoaded:!0,isSignedIn:!1,user:null}:{isLoaded:!0,isSignedIn:!0,user:a}}const j0=Dr,p4=a=>{const r=S.useRef(a);return S.useEffect(()=>{r.current=a},[a]),r.current},Mt=(a,r,s)=>{const o=!!s,i=S.useRef(s);S.useEffect(()=>{i.current=s},[s]),S.useEffect(()=>{if(!o||!a)return()=>{};const d=(...h)=>{i.current&&i.current(...h)};return a.on(r,d),()=>{a.off(r,d)}},[o,r,a,i])},Vg=D.createContext(null);Vg.displayName="ElementsContext";const m4=(a,r)=>{if(!a)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${r} in an <Elements> provider.`);return a},Ls=a=>a!==null&&typeof a=="object",g4=(a,r,s)=>Ls(a)?Object.keys(a).reduce((o,i)=>{const d=!Ls(r)||!Pg(a[i],r[i]);return s.includes(i)?(d&&console.warn(`Unsupported prop change: options.${i} is not a mutable property.`),o):d?{...o||{},[i]:a[i]}:o},null):null,E0="[object Object]",Pg=(a,r)=>{if(!Ls(a)||!Ls(r))return a===r;const s=Array.isArray(a);if(s!==Array.isArray(r))return!1;const o=Object.prototype.toString.call(a)===E0;if(o!==(Object.prototype.toString.call(r)===E0))return!1;if(!o&&!s)return a===r;const i=Object.keys(a),d=Object.keys(r);if(i.length!==d.length)return!1;const h={};for(let v=0;v<i.length;v+=1)h[i[v]]=!0;for(let v=0;v<d.length;v+=1)h[d[v]]=!0;const m=Object.keys(h);if(m.length!==i.length)return!1;const g=a,b=r,x=v=>Pg(g[v],b[v]);return m.every(x)},C0=a=>m4(D.useContext(Vg),a),b4=a=>a.charAt(0).toUpperCase()+a.slice(1),y4=(a,r)=>{const s=`${b4(a)}Element`,d=r?h=>{C0(`mounts <${s}>`);const{id:m,className:g}=h;return D.createElement("div",{id:m,className:g})}:({id:h,className:m,fallback:g,options:b={},onBlur:x,onFocus:v,onReady:E,onChange:M,onEscape:k,onClick:N,onLoadError:_,onLoaderStart:X,onNetworksChange:U,onConfirm:q,onCancel:F,onShippingAddressChange:H,onShippingRateChange:$})=>{const V=C0(`mounts <${s}>`),le="elements"in V?V.elements:null,[ae,je]=D.useState(null),xe=D.useRef(null),me=D.useRef(null),[Z,re]=S.useState(!1);Mt(ae,"blur",x),Mt(ae,"focus",v),Mt(ae,"escape",k),Mt(ae,"click",N),Mt(ae,"loaderror",_),Mt(ae,"loaderstart",X),Mt(ae,"networkschange",U),Mt(ae,"confirm",q),Mt(ae,"cancel",F),Mt(ae,"shippingaddresschange",H),Mt(ae,"shippingratechange",$),Mt(ae,"change",M);let he;E&&(he=()=>{re(!0),E(ae)}),Mt(ae,"ready",he),D.useLayoutEffect(()=>{if(xe.current===null&&me.current!==null&&le){let I=null;le&&(I=le.create(a,b)),xe.current=I,je(I),I&&I.mount(me.current)}},[le,b]);const R=p4(b);return D.useEffect(()=>{if(!xe.current)return;const I=g4(b,R,["paymentRequest"]);I&&"update"in xe.current&&xe.current.update(I)},[b,R]),D.useLayoutEffect(()=>()=>{if(xe.current&&typeof xe.current.destroy=="function")try{xe.current.destroy(),xe.current=null}catch{}},[]),D.createElement(D.Fragment,null,!Z&&g,D.createElement("div",{id:h,style:{height:Z?"unset":"0px",visibility:Z?"visible":"hidden"},className:m,ref:me}))};return d.displayName=s,d.__elementType=a,d};y4("payment",typeof window>"u");Rn("PaymentElementContext");Rn("StripeUtilsContext");var Wt=Ag({packageName:"@clerk/clerk-react"});function x4(a){Wt.setMessages(a).setPackageName(a)}var[v4,S4]=Rn("AuthContext"),w4=qg,Gg=Rd,j4="You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.",E4=a=>`You've passed multiple children components to <${a}/>. You can only pass a single child component or text.`,C4="Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support",Du="Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.",k4="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",_4="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",N4="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",z4="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",A4=a=>`<${a} /> can only accept <${a}.Page /> and <${a}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,T4=a=>`Missing props. <${a}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,R4=a=>`Missing props. <${a}.Link /> component requires the following props: url, label and labelIcon.`,O4="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",M4="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",U4="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",D4="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",L4="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",B4="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",H4="Missing props. <UserButton.Action /> component requires the following props: label.",Xg=a=>{Od(()=>{Wt.throwMissingClerkProviderError({source:a})})},Fg=a=>new Promise(r=>{const s=o=>{["ready","degraded"].includes(o)&&(r(),a.off("status",s))};a.on("status",s,{notify:!0})}),q4=a=>async r=>(await Fg(a),a.session?a.session.getToken(r):null),Y4=a=>async(...r)=>(await Fg(a),a.signOut(...r)),Kg=(a={})=>{var r;Xg("useAuth");const{treatPendingAsSignedOut:s,...o}=a??{},i=o;let h=S4();h.sessionId===void 0&&h.userId===void 0&&(h=i??{});const m=Gg(),g=S.useCallback(q4(m),[m]),b=S.useCallback(Y4(m),[m]);return(r=m.telemetry)==null||r.record(Ug("useAuth",{treatPendingAsSignedOut:s})),V4({...h,getToken:g,signOut:b},{treatPendingAsSignedOut:s})};function V4(a,{treatPendingAsSignedOut:r=!0}={}){const{userId:s,orgId:o,orgRole:i,has:d,signOut:h,getToken:m,orgPermissions:g,factorVerificationAge:b,sessionClaims:x}=a??{},v=S.useCallback(M=>d?d(M):S2({userId:s,orgId:o,orgRole:i,orgPermissions:g,factorVerificationAge:b,features:x?.fea||"",plans:x?.pla||""})(M),[d,s,o,i,g,b,x]),E=w2({authObject:{...a,getToken:m,signOut:h,has:v},options:{treatPendingAsSignedOut:r}});return E||Wt.throw(C4)}var De=(a,r)=>{const o=(typeof r=="string"?r:r?.component)||a.displayName||a.name||"Component";a.displayName=o;const i=typeof r=="string"?void 0:r,d=h=>{Xg(o||"withClerk");const m=Gg();return!m.loaded&&!i?.renderWhileLoading?null:D.createElement(a,{...h,component:o,clerk:m})};return d.displayName=`withClerk(${o})`,d};const P4=()=>{try{return!1}catch{}return!1},G4=()=>{try{return!1}catch{}return!1},X4=()=>{try{return!0}catch{}return!1},k0=new Set,Md=(a,r,s)=>{const o=G4()||X4(),i=a;k0.has(i)||o||(k0.add(i),console.warn(`Clerk - DEPRECATION WARNING: "${a}" is deprecated and will be removed in the next major release.
${r}`))};De(({clerk:a,...r})=>{const{client:s,session:o}=a,i=s.signedInSessions?s.signedInSessions.length>0:s.activeSessions&&s.activeSessions.length>0;return D.useEffect(()=>{o===null&&i?a.redirectToAfterSignOut():a.redirectToSignIn(r)},[]),null},"RedirectToSignIn");De(({clerk:a,...r})=>(D.useEffect(()=>{a.redirectToSignUp(r)},[]),null),"RedirectToSignUp");De(({clerk:a,...r})=>(D.useEffect(()=>{a.redirectToTasks(r)},[]),null),"RedirectToTasks");De(({clerk:a})=>(D.useEffect(()=>{Md("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),a.redirectToUserProfile()},[]),null),"RedirectToUserProfile");De(({clerk:a})=>(D.useEffect(()=>{Md("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),a.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");De(({clerk:a})=>(D.useEffect(()=>{Md("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),a.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");De(({clerk:a,...r})=>(D.useEffect(()=>{a.handleRedirectCallback(r)},[]),null),"AuthenticateWithRedirectCallback");function Lu(a,r,s){if(typeof a=="function")return a(r);if(typeof a<"u")return a;if(typeof s<"u")return s}const ht=a=>{P4()&&console.error(`Clerk: ${a}`)},_0=(a,...r)=>{const s={...a};for(const o of r)delete s[o];return s};var Gs=a=>r=>{try{return D.Children.only(a)}catch{return Wt.throw(E4(r))}},Xs=(a,r)=>(a||(a=r),typeof a=="string"&&(a=D.createElement("button",null,a)),a),Fs=a=>(...r)=>{if(a&&typeof a=="function")return a(...r)};function F4(a){return typeof a=="function"}var ys=new Map;function K4(a,r,s=1){D.useEffect(()=>{const o=ys.get(a)||0;return o==s?Wt.throw(r):(ys.set(a,o+1),()=>{ys.set(a,(ys.get(a)||1)-1)})},[])}function Q4(a,r,s){const o=a.displayName||a.name||r||"Component",i=d=>(K4(r,s),D.createElement(a,{...d}));return i.displayName=`withMaxAllowedInstancesGuard(${o})`,i}var Lr=a=>{const[r,s]=S.useState(new Map);return a.map(o=>({id:o.id,mount:i=>s(d=>new Map(d).set(String(o.id),i)),unmount:()=>s(i=>{const d=new Map(i);return d.set(String(o.id),null),d}),portal:()=>{const i=r.get(String(o.id));return i?s2.createPortal(o.component,i):null}}))},ft=(a,r)=>!!a&&D.isValidElement(a)&&a?.type===r,Qg=(a,r)=>Zg({children:a,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:Fr,PageComponent:Xr,MenuItemsComponent:Qs,componentName:"UserProfile"},r),$g=(a,r)=>Zg({children:a,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:Is,PageComponent:$s,componentName:"OrganizationProfile"},r),Ig=a=>{const r=[],s=[Is,$s,Qs,Xr,Fr];return D.Children.forEach(a,o=>{s.some(i=>ft(o,i))||r.push(o)}),r},Zg=(a,r)=>{const{children:s,LinkComponent:o,PageComponent:i,MenuItemsComponent:d,reorderItemsLabels:h,componentName:m}=a,{allowForAnyChildren:g=!1}=r||{},b=[];D.Children.forEach(s,U=>{if(!ft(U,i)&&!ft(U,o)&&!ft(U,d)){U&&!g&&ht(A4(m));return}const{props:q}=U,{children:F,label:H,url:$,labelIcon:V}=q;if(ft(U,i))if(N0(q,h))b.push({label:H});else if(Bu(q))b.push({label:H,labelIcon:V,children:F,url:$});else{ht(T4(m));return}if(ft(U,o))if(Hu(q))b.push({label:H,labelIcon:V,url:$});else{ht(R4(m));return}});const x=[],v=[],E=[];b.forEach((U,q)=>{if(Bu(U)){x.push({component:U.children,id:q}),v.push({component:U.labelIcon,id:q});return}Hu(U)&&E.push({component:U.labelIcon,id:q})});const M=Lr(x),k=Lr(v),N=Lr(E),_=[],X=[];return b.forEach((U,q)=>{if(N0(U,h)){_.push({label:U.label});return}if(Bu(U)){const{portal:F,mount:H,unmount:$}=M.find(je=>je.id===q),{portal:V,mount:le,unmount:ae}=k.find(je=>je.id===q);_.push({label:U.label,url:U.url,mount:H,unmount:$,mountIcon:le,unmountIcon:ae}),X.push(F),X.push(V);return}if(Hu(U)){const{portal:F,mount:H,unmount:$}=N.find(V=>V.id===q);_.push({label:U.label,url:U.url,mountIcon:H,unmountIcon:$}),X.push(F);return}}),{customPages:_,customPagesPortals:X}},N0=(a,r)=>{const{children:s,label:o,url:i,labelIcon:d}=a;return!s&&!i&&!d&&r.some(h=>h===o)},Bu=a=>{const{children:r,label:s,url:o,labelIcon:i}=a;return!!r&&!!o&&!!i&&!!s},Hu=a=>{const{children:r,label:s,url:o,labelIcon:i}=a;return!r&&!!o&&!!i&&!!s},$4=(a,r)=>{var s;return I4({children:a,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:Qs,MenuActionComponent:Wg,MenuLinkComponent:e1,UserProfileLinkComponent:Fr,UserProfilePageComponent:Xr,allowForAnyChildren:(s=r?.allowForAnyChildren)!=null?s:!1})},I4=({children:a,MenuItemsComponent:r,MenuActionComponent:s,MenuLinkComponent:o,UserProfileLinkComponent:i,UserProfilePageComponent:d,reorderItemsLabels:h,allowForAnyChildren:m=!1})=>{const g=[],b=[],x=[];D.Children.forEach(a,N=>{if(!ft(N,r)&&!ft(N,i)&&!ft(N,d)){N&&!m&&ht(O4);return}if(ft(N,i)||ft(N,d))return;const{props:_}=N;D.Children.forEach(_.children,X=>{if(!ft(X,s)&&!ft(X,o)){X&&ht(M4);return}const{props:U}=X,{label:q,labelIcon:F,href:H,onClick:$,open:V}=U;if(ft(X,s))if(z0(U,h))g.push({label:q});else if(qu(U)){const le={label:q,labelIcon:F};if($!==void 0)g.push({...le,onClick:$});else if(V!==void 0)g.push({...le,open:V.startsWith("/")?V:`/${V}`});else{ht("Custom menu item must have either onClick or open property");return}}else{ht(H4);return}if(ft(X,o))if(Yu(U))g.push({label:q,labelIcon:F,href:H});else{ht(B4);return}})});const v=[],E=[];g.forEach((N,_)=>{qu(N)&&v.push({component:N.labelIcon,id:_}),Yu(N)&&E.push({component:N.labelIcon,id:_})});const M=Lr(v),k=Lr(E);return g.forEach((N,_)=>{if(z0(N,h)&&b.push({label:N.label}),qu(N)){const{portal:X,mount:U,unmount:q}=M.find(H=>H.id===_),F={label:N.label,mountIcon:U,unmountIcon:q};"onClick"in N?F.onClick=N.onClick:"open"in N&&(F.open=N.open),b.push(F),x.push(X)}if(Yu(N)){const{portal:X,mount:U,unmount:q}=k.find(F=>F.id===_);b.push({label:N.label,href:N.href,mountIcon:U,unmountIcon:q}),x.push(X)}}),{customMenuItems:b,customMenuItemsPortals:x}},z0=(a,r)=>{const{children:s,label:o,onClick:i,labelIcon:d}=a;return!s&&!i&&!d&&r.some(h=>h===o)},qu=a=>{const{label:r,labelIcon:s,onClick:o,open:i}=a;return!!s&&!!r&&(typeof o=="function"||typeof i=="string")},Yu=a=>{const{label:r,href:s,labelIcon:o}=a;return!!s&&!!o&&!!r},Z4=a=>{const r=a?.isReady;return s=>new Promise((o,i)=>{const{root:d=document?.body,selector:h,timeout:m=0}=s;if(!d){i(new Error("No root element provided"));return}let g=d;if(h&&(g=d?.querySelector(h)),r(g,h)){o();return}const b=new MutationObserver(x=>{for(const v of x)if(!g&&h&&(g=d?.querySelector(h)),(a.childList&&v.type==="childList"||a.attributes&&v.type==="attributes")&&r(g,h)){b.disconnect(),o();return}});b.observe(d,a),m>0&&setTimeout(()=>{b.disconnect(),i(new Error(`Timeout waiting for ${h}`))},m)})},J4=Z4({childList:!0,subtree:!0,isReady:(a,r)=>{var s;return!!a?.childElementCount&&((s=a?.matches)==null?void 0:s.call(a,r))&&a.childElementCount>0}});function ut(a,r){const s=S.useRef(),[o,i]=S.useState("rendering");return S.useEffect(()=>{if(!a)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!s.current){const d=`[data-clerk-component="${a}"]`,h=r?.selector;s.current=J4({selector:h?d+h:d}).then(()=>{i("rendered")}).catch(()=>{i("error")})}},[a,r?.selector]),o}var xs=a=>"mount"in a,A0=a=>"open"in a,T0=a=>a?.map(({mountIcon:r,unmountIcon:s,...o})=>o),nt=class extends D.PureComponent{constructor(){super(...arguments),this.rootRef=D.createRef()}componentDidUpdate(a){var r,s,o,i;if(!xs(a)||!xs(this.props))return;const d=_0(a.props,"customPages","customMenuItems","children"),h=_0(this.props.props,"customPages","customMenuItems","children"),m=((r=d.customPages)==null?void 0:r.length)!==((s=h.customPages)==null?void 0:s.length),g=((o=d.customMenuItems)==null?void 0:o.length)!==((i=h.customMenuItems)==null?void 0:i.length),b=T0(a.props.customMenuItems),x=T0(this.props.props.customMenuItems);(!j0(d,h)||!j0(b,x)||m||g)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(xs(this.props)&&this.props.mount(this.rootRef.current,this.props.props),A0(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(xs(this.props)&&this.props.unmount(this.rootRef.current),A0(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:a=!1}=this.props,r={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return D.createElement(D.Fragment,null,!a&&D.createElement("div",{...r}),this.props.children)}},Ks=a=>{var r,s;return D.createElement(D.Fragment,null,(r=a?.customPagesPortals)==null?void 0:r.map((o,i)=>S.createElement(o,{key:i})),(s=a?.customMenuItemsPortals)==null?void 0:s.map((o,i)=>S.createElement(o,{key:i})))};De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountSignIn,unmount:a.unmountSignIn,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"SignIn",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountSignUp,unmount:a.unmountSignUp,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"SignUp",renderWhileLoading:!0});function Xr({children:a}){return ht(k4),D.createElement(D.Fragment,null,a)}function Fr({children:a}){return ht(_4),D.createElement(D.Fragment,null,a)}var W4=De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:g}=Qg(o.children);return D.createElement(D.Fragment,null,d&&s,D.createElement(nt,{component:r,mount:a.mountUserProfile,unmount:a.unmountUserProfile,updateProps:a.__unstable__updateProps,props:{...o,customPages:m},rootProps:h},D.createElement(Ks,{customPagesPortals:g})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(W4,{Page:Xr,Link:Fr});var Jg=S.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),eS=De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:g}=Qg(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),b={...o.userProfileProps,customPages:m},{customMenuItems:x,customMenuItemsPortals:v}=$4(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),E=Ig(o.children),M={mount:a.mountUserButton,unmount:a.unmountUserButton,updateProps:a.__unstable__updateProps,props:{...o,userProfileProps:b,customMenuItems:x}},k={customPagesPortals:g,customMenuItemsPortals:v};return D.createElement(Jg.Provider,{value:M},d&&s,a.loaded&&D.createElement(nt,{component:r,...M,hideRootHtmlElement:!!o.__experimental_asProvider,rootProps:h},o.__experimental_asProvider?E:null,D.createElement(Ks,{...k})))},{component:"UserButton",renderWhileLoading:!0});function Qs({children:a}){return ht(U4),D.createElement(D.Fragment,null,a)}function Wg({children:a}){return ht(D4),D.createElement(D.Fragment,null,a)}function e1({children:a}){return ht(L4),D.createElement(D.Fragment,null,a)}function tS(a){const r=S.useContext(Jg),s={...r,props:{...r.props,...a}};return D.createElement(nt,{...s})}var t1=Object.assign(eS,{UserProfilePage:Xr,UserProfileLink:Fr,MenuItems:Qs,Action:Wg,Link:e1,__experimental_Outlet:tS});function $s({children:a}){return ht(N4),D.createElement(D.Fragment,null,a)}function Is({children:a}){return ht(z4),D.createElement(D.Fragment,null,a)}var nS=De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:g}=$g(o.children);return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountOrganizationProfile,unmount:a.unmountOrganizationProfile,updateProps:a.__unstable__updateProps,props:{...o,customPages:m},rootProps:h},D.createElement(Ks,{customPagesPortals:g})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(nS,{Page:$s,Link:Is});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountCreateOrganization,unmount:a.unmountCreateOrganization,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"CreateOrganization",renderWhileLoading:!0});var n1=S.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),aS=De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:g}=$g(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),b={...o.organizationProfileProps,customPages:m},x=Ig(o.children),v={mount:a.mountOrganizationSwitcher,unmount:a.unmountOrganizationSwitcher,updateProps:a.__unstable__updateProps,props:{...o,organizationProfileProps:b},rootProps:h,component:r};return a.__experimental_prefetchOrganizationSwitcher(),D.createElement(n1.Provider,{value:v},D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{...v,hideRootHtmlElement:!!o.__experimental_asProvider},o.__experimental_asProvider?x:null,D.createElement(Ks,{customPagesPortals:g}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function lS(a){const r=S.useContext(n1),s={...r,props:{...r.props,...a}};return D.createElement(nt,{...s})}Object.assign(aS,{OrganizationProfilePage:$s,OrganizationProfileLink:Is,__experimental_Outlet:lS});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountOrganizationList,unmount:a.unmountOrganizationList,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"OrganizationList",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,open:a.openGoogleOneTap,close:a.closeGoogleOneTap,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"GoogleOneTap",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountWaitlist,unmount:a.unmountWaitlist,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"Waitlist",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r,{selector:'[data-component-status="ready"]'})==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountPricingTable,unmount:a.unmountPricingTable,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"PricingTable",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountAPIKeys,unmount:a.unmountAPIKeys,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"ApiKeys",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountUserAvatar,unmount:a.unmountUserAvatar,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"UserAvatar",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountTaskChooseOrganization,unmount:a.unmountTaskChooseOrganization,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountTaskResetPassword,unmount:a.unmountTaskResetPassword,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"TaskResetPassword",renderWhileLoading:!0});De(({clerk:a,component:r,fallback:s,...o})=>{const d=ut(r)==="rendering"||!a.loaded,h={...d&&s&&{style:{display:"none"}}};return D.createElement(D.Fragment,null,d&&s,a.loaded&&D.createElement(nt,{component:r,mount:a.mountTaskSetupMFA,unmount:a.unmountTaskSetupMFA,updateProps:a.__unstable__updateProps,props:o,rootProps:h}))},{component:"TaskSetupMFA",renderWhileLoading:!0});var a1=a=>{throw TypeError(a)},Ud=(a,r,s)=>r.has(a)||a1("Cannot "+s),He=(a,r,s)=>(Ud(a,r,"read from private field"),s?s.call(a):r.get(a)),ra=(a,r,s)=>r.has(a)?a1("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(a):r.set(a,s),Ta=(a,r,s,o)=>(Ud(a,r,"write to private field"),r.set(a,s),s),Vu=(a,r,s)=>(Ud(a,r,"access private method"),s);const rS={initialDelay:125,maxDelayBetweenRetries:0,factor:2,shouldRetry:(a,r)=>r<5,retryImmediately:!1,jitter:!0},iS=100,l1=async a=>new Promise(r=>setTimeout(r,a)),r1=(a,r)=>r?a*(1+Math.random()):a,sS=a=>{let r=0;const s=()=>{const o=a.initialDelay,i=a.factor;let d=o*Math.pow(i,r);return d=r1(d,a.jitter),Math.min(a.maxDelayBetweenRetries||d,d)};return async()=>{await l1(s()),r++}},oS=async(a,r={})=>{let s=0;const{shouldRetry:o,initialDelay:i,maxDelayBetweenRetries:d,factor:h,retryImmediately:m,jitter:g,onBeforeRetry:b}={...rS,...r},x=sS({initialDelay:i,maxDelayBetweenRetries:d,factor:h,jitter:g});for(;;)try{return await a()}catch(v){if(s++,!o(v,s))throw v;b&&await b(s),m&&s===1?await l1(r1(iS,g)):await x()}},cS="loadScript cannot be called when document does not exist",uS="loadScript cannot be called without a src";async function dS(a="",r){const{async:s,defer:o,beforeLoad:i,crossOrigin:d,nonce:h}=r||{};return oS(()=>new Promise((g,b)=>{a||b(new Error(uS)),(!document||!document.body)&&b(new Error(cS));const x=document.createElement("script");d&&x.setAttribute("crossorigin",d),x.async=s||!1,x.defer=o||!1,x.addEventListener("load",()=>{x.remove(),g(x)}),x.addEventListener("error",v=>{x.remove(),b(v.error??new Error(`failed to load script: ${a}`))}),x.src=a,x.nonce=h,i?.(x),document.body.appendChild(x)}),{shouldRetry:(g,b)=>b<=5})}function fS(a){return a?hS(a)||i1(a):!0}function hS(a){return/^http(s)?:\/\//.test(a||"")}function i1(a){return a.startsWith("/")}function pS(a){return a?i1(a)?new URL(a,window.location.origin).toString():a:""}function mS(a){if(!a)return"";let r;if(a.match(/^(clerk\.)+\w*$/))r=/(clerk\.)*(?=clerk\.)/;else{if(a.match(/\.clerk.accounts/))return a;r=/^(clerk\.)*/gi}return`clerk.${a.replace(r,"")}`}const gS=(a,r="5.125.7")=>{if(a)return a;const s=bS(r);return s?s==="snapshot"?"5.125.7":s:yS(r)},bS=a=>a.trim().replace(/^v/,"").match(/-(.+?)(\.|$)/)?.[1],yS=a=>a.trim().replace(/^v/,"").split(".")[0],s1="failed_to_load_clerk_js",xS="failed_to_load_clerk_js_timeout",dd="Failed to load Clerk",{isDevOrStagingUrl:vS}=C2(),o1=Ag({packageName:"@clerk/shared"});function SS(a){o1.setPackageName({packageName:a})}function fd(){if(typeof window>"u"||!window.Clerk)return!1;const a=window.Clerk;return typeof a=="object"&&typeof a.load=="function"}function wS(a){if(typeof window>"u"||!window.performance)return!1;const r=performance.getEntriesByName(a,"resource");if(r.length===0)return!1;const s=r[r.length-1];return s.transferSize===0&&s.decodedBodySize===0&&(s.responseEnd===0||s.responseEnd>0&&s.responseStart>0||"responseStatus"in s&&(s.responseStatus>=400||s.responseStatus===0))}function R0(a,r){return new Promise((s,o)=>{let i=!1;const d=(x,v)=>{clearTimeout(x),clearInterval(v)};r?.addEventListener("error",()=>{d(g,b),o(new ad(dd,{code:s1}))});const h=()=>{i||fd()&&(i=!0,d(g,b),s(null))},g=setTimeout(()=>{i||(i=!0,d(g,b),fd()?s(null):o(new ad(dd,{code:xS})))},a);h();const b=setInterval(()=>{if(i){clearInterval(b);return}h()},100)})}const jS=async a=>{const r=a?.scriptLoadTimeout??15e3;if(fd())return null;if(!a?.publishableKey)return o1.throwMissingPublishableKeyError(),null;const s=ES(a),o=document.querySelector("script[data-clerk-js-script]");if(o)if(wS(s))o.remove();else try{return await R0(r,o),null}catch{o.remove()}const i=R0(r);return dS(s,{async:!0,crossOrigin:"anonymous",nonce:a.nonce,beforeLoad:kS(a)}).catch(d=>{throw new ad(dd+(d.message?`, ${d.message}`:""),{code:s1,cause:d})}),i},ES=a=>{const{clerkJSUrl:r,clerkJSVariant:s,clerkJSVersion:o,proxyUrl:i,domain:d,publishableKey:h}=a;if(r)return r;let m="";i&&fS(i)?m=pS(i).replace(/http(s)?:\/\//,""):d&&!vS(f0(h)?.frontendApi||"")?m=mS(d):m=f0(h)?.frontendApi||"";const g=s?`${s.replace(/\.+$/,"")}.`:"",b=gS(o);return`https://${m}/npm/@clerk/clerk-js@${b}/dist/clerk.${g}browser.js`},CS=a=>{const r={};return a.publishableKey&&(r["data-clerk-publishable-key"]=a.publishableKey),a.proxyUrl&&(r["data-clerk-proxy-url"]=a.proxyUrl),a.domain&&(r["data-clerk-domain"]=a.domain),a.nonce&&(r.nonce=a.nonce),r},kS=a=>r=>{const s=CS(a);for(const o in s)r.setAttribute(o,s[o])},_S=(a,r,s)=>!a&&s?NS(s):zS(r),NS=a=>{const r=a.userId,s=a.user,o=a.sessionId,i=a.sessionStatus,d=a.sessionClaims;return{userId:r,user:s,sessionId:o,session:a.session,sessionStatus:i,sessionClaims:d,organization:a.organization,orgId:a.orgId,orgRole:a.orgRole,orgPermissions:a.orgPermissions,orgSlug:a.orgSlug,actor:a.actor,factorVerificationAge:a.factorVerificationAge}},zS=a=>{const r=a.user?a.user.id:a.user,s=a.user,o=a.session?a.session.id:a.session,i=a.session,d=a.session?.status,h=a.session?a.session.lastActiveToken?.jwt?.claims:null,m=a.session?a.session.factorVerificationAge:null,g=i?.actor,b=a.organization,x=a.organization?a.organization.id:a.organization,v=b?.slug,E=b&&s?.organizationMemberships?.find(k=>k.organization.id===x),M=E&&E.permissions;return{userId:r,user:s,sessionId:o,session:i,sessionStatus:d,sessionClaims:h,organization:b,orgId:x,orgRole:E&&E.role,orgSlug:v,orgPermissions:M,actor:g,factorVerificationAge:m}};function Bs(){return typeof window<"u"}const O0=(a,r,s,o,i)=>{const{notify:d}=i||{};let h=a.get(s);h||(h=[],a.set(s,h)),h.push(o),d&&r.has(s)&&o(r.get(s))},M0=(a,r,s)=>(a.get(r)||[]).map(o=>o(s)),U0=(a,r,s)=>{const o=a.get(r);o&&(s?o.splice(o.indexOf(s)>>>0,1):a.set(r,[]))},AS=()=>{const a=new Map,r=new Map,s=new Map;return{on:(...i)=>O0(a,r,...i),prioritizedOn:(...i)=>O0(s,r,...i),emit:(i,d)=>{r.set(i,d),M0(s,i,d),M0(a,i,d)},off:(...i)=>U0(a,...i),prioritizedOff:(...i)=>U0(s,...i),internal:{retrieveListeners:i=>a.get(i)||[]}}},vs={Status:"status"},TS=()=>AS();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);De(({clerk:a,children:r,...s})=>{const{appearance:o,signUpFallbackRedirectUrl:i,forceRedirectUrl:d,fallbackRedirectUrl:h,signUpForceRedirectUrl:m,mode:g,initialValues:b,withSignUp:x,oauthFlow:v,...E}=s;r=Xs(r,"Sign in");const M=Gs(r)("SignInButton"),k=()=>{const X={forceRedirectUrl:d,fallbackRedirectUrl:h,signUpFallbackRedirectUrl:i,signUpForceRedirectUrl:m,initialValues:b,withSignUp:x,oauthFlow:v};return g==="modal"?a.openSignIn({...X,appearance:o}):a.redirectToSignIn({...X,signInFallbackRedirectUrl:h,signInForceRedirectUrl:d})},_={...E,onClick:async X=>(M&&typeof M=="object"&&"props"in M&&await Fs(M.props.onClick)(X),k())};return D.cloneElement(M,_)},{component:"SignInButton",renderWhileLoading:!0});De(({clerk:a,children:r,...s})=>{const{redirectUrl:o,...i}=s;r=Xs(r,"Sign in with Metamask");const d=Gs(r)("SignInWithMetamaskButton"),h=async()=>{async function b(){await a.authenticateWithMetamask({redirectUrl:o||void 0})}b()},g={...i,onClick:async b=>(await Fs(d.props.onClick)(b),h())};return D.cloneElement(d,g)},{component:"SignInWithMetamask",renderWhileLoading:!0});De(({clerk:a,children:r,...s})=>{const{redirectUrl:o="/",signOutOptions:i,...d}=s;r=Xs(r,"Sign out");const h=Gs(r)("SignOutButton"),m=()=>a.signOut({redirectUrl:o,...i}),b={...d,onClick:async x=>(await Fs(h.props.onClick)(x),m())};return D.cloneElement(h,b)},{component:"SignOutButton",renderWhileLoading:!0});De(({clerk:a,children:r,...s})=>{const{appearance:o,unsafeMetadata:i,fallbackRedirectUrl:d,forceRedirectUrl:h,signInFallbackRedirectUrl:m,signInForceRedirectUrl:g,mode:b,initialValues:x,oauthFlow:v,...E}=s;r=Xs(r,"Sign up");const M=Gs(r)("SignUpButton"),k=()=>{const X={fallbackRedirectUrl:d,forceRedirectUrl:h,signInFallbackRedirectUrl:m,signInForceRedirectUrl:g,initialValues:x,oauthFlow:v};return b==="modal"?a.openSignUp({...X,appearance:o,unsafeMetadata:i}):a.redirectToSignUp({...X,signUpFallbackRedirectUrl:d,signUpForceRedirectUrl:h})},_={...E,onClick:async X=>(M&&typeof M=="object"&&"props"in M&&await Fs(M.props.onClick)(X),k())};return D.cloneElement(M,_)},{component:"SignUpButton",renderWhileLoading:!0});var RS=()=>({fields:{identifier:null,password:null,code:null},raw:null,global:null}),OS=()=>({fields:{firstName:null,lastName:null,emailAddress:null,phoneNumber:null,password:null,username:null,code:null,captcha:null,legalAccepted:null},raw:null,global:null}),MS=class{constructor(a){this.isomorphicClerk=a,this.signInSignalProxy=this.buildSignInProxy(),this.signUpSignalProxy=this.buildSignUpProxy()}signInSignal(){return this.signInSignalProxy}signUpSignal(){return this.signUpSignalProxy}buildSignInProxy(){const a=this.gateProperty.bind(this),r=()=>this.client.signIn.__internal_future;return{errors:RS(),fetchStatus:"idle",signIn:{status:"needs_identifier",availableStrategies:[],isTransferable:!1,get id(){return a(r,"id",void 0)},get supportedFirstFactors(){return a(r,"supportedFirstFactors",[])},get supportedSecondFactors(){return a(r,"supportedSecondFactors",[])},get secondFactorVerification(){return a(r,"secondFactorVerification",{status:null,error:null,expireAt:null,externalVerificationRedirectURL:null,nonce:null,attempts:null,message:null,strategy:null,verifiedAtClient:null,verifiedFromTheSameClient:()=>!1,__internal_toSnapshot:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")},pathRoot:"",reload:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")}})},get identifier(){return a(r,"identifier",null)},get createdSessionId(){return a(r,"createdSessionId",null)},get userData(){return a(r,"userData",{})},get firstFactorVerification(){return a(r,"firstFactorVerification",{status:null,error:null,expireAt:null,externalVerificationRedirectURL:null,nonce:null,attempts:null,message:null,strategy:null,verifiedAtClient:null,verifiedFromTheSameClient:()=>!1,__internal_toSnapshot:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")},pathRoot:"",reload:()=>{throw new Error("__internal_toSnapshot called before Clerk is loaded")}})},create:this.gateMethod(r,"create"),password:this.gateMethod(r,"password"),sso:this.gateMethod(r,"sso"),finalize:this.gateMethod(r,"finalize"),emailCode:this.wrapMethods(()=>r().emailCode,["sendCode","verifyCode"]),emailLink:this.wrapStruct(()=>r().emailLink,["sendLink","waitForVerification"],["verification"],{verification:null}),resetPasswordEmailCode:this.wrapMethods(()=>r().resetPasswordEmailCode,["sendCode","verifyCode","submitPassword"]),phoneCode:this.wrapMethods(()=>r().phoneCode,["sendCode","verifyCode"]),mfa:this.wrapMethods(()=>r().mfa,["sendPhoneCode","verifyPhoneCode","verifyTOTP","verifyBackupCode"]),ticket:this.gateMethod(r,"ticket"),passkey:this.gateMethod(r,"passkey"),web3:this.gateMethod(r,"web3")}}}buildSignUpProxy(){const a=this.gateProperty.bind(this),r=this.gateMethod.bind(this),s=this.wrapMethods.bind(this),o=()=>this.client.signUp.__internal_future;return{errors:OS(),fetchStatus:"idle",signUp:{get id(){return a(o,"id",void 0)},get requiredFields(){return a(o,"requiredFields",[])},get optionalFields(){return a(o,"optionalFields",[])},get missingFields(){return a(o,"missingFields",[])},get username(){return a(o,"username",null)},get firstName(){return a(o,"firstName",null)},get lastName(){return a(o,"lastName",null)},get emailAddress(){return a(o,"emailAddress",null)},get phoneNumber(){return a(o,"phoneNumber",null)},get web3Wallet(){return a(o,"web3Wallet",null)},get hasPassword(){return a(o,"hasPassword",!1)},get unsafeMetadata(){return a(o,"unsafeMetadata",{})},get createdSessionId(){return a(o,"createdSessionId",null)},get createdUserId(){return a(o,"createdUserId",null)},get abandonAt(){return a(o,"abandonAt",null)},get legalAcceptedAt(){return a(o,"legalAcceptedAt",null)},get locale(){return a(o,"locale",null)},get status(){return a(o,"status","missing_requirements")},get unverifiedFields(){return a(o,"unverifiedFields",[])},get isTransferable(){return a(o,"isTransferable",!1)},create:r(o,"create"),update:r(o,"update"),sso:r(o,"sso"),password:r(o,"password"),ticket:r(o,"ticket"),web3:r(o,"web3"),finalize:r(o,"finalize"),verifications:s(()=>o().verifications,["sendEmailCode","verifyEmailCode","sendPhoneCode","verifyPhoneCode"])}}}__internal_effect(a){throw new Error("__internal_effect called before Clerk is loaded")}__internal_computed(a){throw new Error("__internal_computed called before Clerk is loaded")}get client(){const a=this.isomorphicClerk.client;if(!a)throw new Error("Clerk client not ready");return a}gateProperty(a,r,s){return!Bs()||!this.isomorphicClerk.loaded?s:a()[r]}gateMethod(a,r){return(async(...s)=>{if(!Bs())return Wt.throw(`Attempted to call a method (${r}) that is not supported on the server.`);this.isomorphicClerk.loaded||await new Promise(i=>this.isomorphicClerk.addOnLoaded(i));const o=a();return o[r].apply(o,s)})}wrapMethods(a,r){return Object.fromEntries(r.map(s=>[s,this.gateMethod(a,s)]))}wrapStruct(a,r,s,o){const i={};for(const d of r)i[d]=this.gateMethod(a,d);for(const d of s)Object.defineProperty(i,d,{get:()=>this.gateProperty(a,d,o[d]),enumerable:!0});return i}};typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);var US={name:"@clerk/clerk-react",version:"5.61.4",environment:"production"},Cs,Nl,zl,ia,sn,ks,sa,Mr,_s,c1=class u1{constructor(r){ra(this,Mr),this.clerkjs=null,this.preopenOneTap=null,this.preopenUserVerification=null,this.preopenEnableOrganizationsPrompt=null,this.preopenSignIn=null,this.preopenCheckout=null,this.preopenPlanDetails=null,this.preopenSubscriptionDetails=null,this.preopenSignUp=null,this.preopenUserProfile=null,this.preopenOrganizationProfile=null,this.preopenCreateOrganization=null,this.preOpenWaitlist=null,this.premountSignInNodes=new Map,this.premountSignUpNodes=new Map,this.premountUserAvatarNodes=new Map,this.premountUserProfileNodes=new Map,this.premountUserButtonNodes=new Map,this.premountOrganizationProfileNodes=new Map,this.premountCreateOrganizationNodes=new Map,this.premountOrganizationSwitcherNodes=new Map,this.premountOrganizationListNodes=new Map,this.premountMethodCalls=new Map,this.premountWaitlistNodes=new Map,this.premountPricingTableNodes=new Map,this.premountAPIKeysNodes=new Map,this.premountOAuthConsentNodes=new Map,this.premountTaskChooseOrganizationNodes=new Map,this.premountTaskResetPasswordNodes=new Map,this.premountTaskSetupMFANodes=new Map,this.premountAddListenerCalls=new Map,this.loadedListeners=[],ra(this,Cs,"loading"),ra(this,Nl),ra(this,zl),ra(this,ia),ra(this,sn,TS()),ra(this,ks),this.buildSignInUrl=i=>{const d=()=>{var h;return((h=this.clerkjs)==null?void 0:h.buildSignInUrl(i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildSignInUrl",d)},this.buildSignUpUrl=i=>{const d=()=>{var h;return((h=this.clerkjs)==null?void 0:h.buildSignUpUrl(i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildSignUpUrl",d)},this.buildAfterSignInUrl=(...i)=>{const d=()=>{var h;return((h=this.clerkjs)==null?void 0:h.buildAfterSignInUrl(...i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildAfterSignInUrl",d)},this.buildAfterSignUpUrl=(...i)=>{const d=()=>{var h;return((h=this.clerkjs)==null?void 0:h.buildAfterSignUpUrl(...i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildAfterSignUpUrl",d)},this.buildAfterSignOutUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildAfterSignOutUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildAfterSignOutUrl",i)},this.buildNewSubscriptionRedirectUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildNewSubscriptionRedirectUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildNewSubscriptionRedirectUrl",i)},this.buildAfterMultiSessionSingleSignOutUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildAfterMultiSessionSingleSignOutUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildAfterMultiSessionSingleSignOutUrl",i)},this.buildUserProfileUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildUserProfileUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildUserProfileUrl",i)},this.buildCreateOrganizationUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildCreateOrganizationUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildCreateOrganizationUrl",i)},this.buildOrganizationProfileUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildOrganizationProfileUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildOrganizationProfileUrl",i)},this.buildWaitlistUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildWaitlistUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildWaitlistUrl",i)},this.buildTasksUrl=()=>{const i=()=>{var d;return((d=this.clerkjs)==null?void 0:d.buildTasksUrl())||""};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("buildTasksUrl",i)},this.buildUrlWithAuth=i=>{const d=()=>{var h;return((h=this.clerkjs)==null?void 0:h.buildUrlWithAuth(i))||""};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("buildUrlWithAuth",d)},this.handleUnauthenticated=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.handleUnauthenticated()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("handleUnauthenticated",i)},this.on=(...i)=>{var d;if((d=this.clerkjs)!=null&&d.on)return this.clerkjs.on(...i);He(this,sn).on(...i)},this.off=(...i)=>{var d;if((d=this.clerkjs)!=null&&d.off)return this.clerkjs.off(...i);He(this,sn).off(...i)},this.addOnLoaded=i=>{this.loadedListeners.push(i),this.loaded&&this.emitLoaded()},this.emitLoaded=()=>{this.loadedListeners.forEach(i=>i()),this.loadedListeners=[]},this.beforeLoad=i=>{if(!i)throw new Error("Failed to hydrate latest Clerk JS")},this.hydrateClerkJS=i=>{var d,h;if(!i)throw new Error("Failed to hydrate latest Clerk JS");return this.clerkjs=i,this.premountMethodCalls.forEach(m=>m()),this.premountAddListenerCalls.forEach((m,g)=>{m.nativeUnsubscribe=i.addListener(g)}),(d=He(this,sn).internal.retrieveListeners("status"))==null||d.forEach(m=>{this.on("status",m,{notify:!0})}),(h=He(this,sn).internal.retrieveListeners("queryClientStatus"))==null||h.forEach(m=>{this.on("queryClientStatus",m,{notify:!0})}),this.preopenSignIn!==null&&i.openSignIn(this.preopenSignIn),this.preopenCheckout!==null&&i.__internal_openCheckout(this.preopenCheckout),this.preopenPlanDetails!==null&&i.__internal_openPlanDetails(this.preopenPlanDetails),this.preopenSubscriptionDetails!==null&&i.__internal_openSubscriptionDetails(this.preopenSubscriptionDetails),this.preopenSignUp!==null&&i.openSignUp(this.preopenSignUp),this.preopenUserProfile!==null&&i.openUserProfile(this.preopenUserProfile),this.preopenUserVerification!==null&&i.__internal_openReverification(this.preopenUserVerification),this.preopenOneTap!==null&&i.openGoogleOneTap(this.preopenOneTap),this.preopenOrganizationProfile!==null&&i.openOrganizationProfile(this.preopenOrganizationProfile),this.preopenCreateOrganization!==null&&i.openCreateOrganization(this.preopenCreateOrganization),this.preOpenWaitlist!==null&&i.openWaitlist(this.preOpenWaitlist),this.preopenEnableOrganizationsPrompt&&i.__internal_openEnableOrganizationsPrompt(this.preopenEnableOrganizationsPrompt),this.premountSignInNodes.forEach((m,g)=>{i.mountSignIn(g,m)}),this.premountSignUpNodes.forEach((m,g)=>{i.mountSignUp(g,m)}),this.premountUserProfileNodes.forEach((m,g)=>{i.mountUserProfile(g,m)}),this.premountUserAvatarNodes.forEach((m,g)=>{i.mountUserAvatar(g,m)}),this.premountUserButtonNodes.forEach((m,g)=>{i.mountUserButton(g,m)}),this.premountOrganizationListNodes.forEach((m,g)=>{i.mountOrganizationList(g,m)}),this.premountWaitlistNodes.forEach((m,g)=>{i.mountWaitlist(g,m)}),this.premountPricingTableNodes.forEach((m,g)=>{i.mountPricingTable(g,m)}),this.premountAPIKeysNodes.forEach((m,g)=>{i.mountAPIKeys(g,m)}),this.premountOAuthConsentNodes.forEach((m,g)=>{i.__internal_mountOAuthConsent(g,m)}),this.premountTaskChooseOrganizationNodes.forEach((m,g)=>{i.mountTaskChooseOrganization(g,m)}),this.premountTaskResetPasswordNodes.forEach((m,g)=>{i.mountTaskResetPassword(g,m)}),this.premountTaskSetupMFANodes.forEach((m,g)=>{i.mountTaskSetupMFA(g,m)}),typeof this.clerkjs.status>"u"&&He(this,sn).emit(vs.Status,"ready"),this.emitLoaded(),this.clerkjs},this.__experimental_checkout=(...i)=>{var d;return(d=this.clerkjs)==null?void 0:d.__experimental_checkout(...i)},this.__unstable__updateProps=async i=>{const d=await Vu(this,Mr,_s).call(this);if(d&&"__unstable__updateProps"in d)return d.__unstable__updateProps(i)},this.setActive=i=>this.clerkjs?this.clerkjs.setActive(i):Promise.reject(),this.openSignIn=i=>{this.clerkjs&&this.loaded?this.clerkjs.openSignIn(i):this.preopenSignIn=i},this.closeSignIn=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeSignIn():this.preopenSignIn=null},this.__internal_openCheckout=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openCheckout(i):this.preopenCheckout=i},this.__internal_closeCheckout=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeCheckout():this.preopenCheckout=null},this.__internal_openPlanDetails=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openPlanDetails(i):this.preopenPlanDetails=i},this.__internal_closePlanDetails=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closePlanDetails():this.preopenPlanDetails=null},this.__internal_openSubscriptionDetails=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openSubscriptionDetails(i):this.preopenSubscriptionDetails=i??null},this.__internal_closeSubscriptionDetails=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeSubscriptionDetails():this.preopenSubscriptionDetails=null},this.__internal_openReverification=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openReverification(i):this.preopenUserVerification=i},this.__internal_closeReverification=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeReverification():this.preopenUserVerification=null},this.__internal_openEnableOrganizationsPrompt=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_openEnableOrganizationsPrompt(i):this.preopenEnableOrganizationsPrompt=i},this.__internal_closeEnableOrganizationsPrompt=()=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_closeEnableOrganizationsPrompt():this.preopenEnableOrganizationsPrompt=null},this.openGoogleOneTap=i=>{this.clerkjs&&this.loaded?this.clerkjs.openGoogleOneTap(i):this.preopenOneTap=i},this.closeGoogleOneTap=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeGoogleOneTap():this.preopenOneTap=null},this.openUserProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.openUserProfile(i):this.preopenUserProfile=i},this.closeUserProfile=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeUserProfile():this.preopenUserProfile=null},this.openOrganizationProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.openOrganizationProfile(i):this.preopenOrganizationProfile=i},this.closeOrganizationProfile=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeOrganizationProfile():this.preopenOrganizationProfile=null},this.openCreateOrganization=i=>{this.clerkjs&&this.loaded?this.clerkjs.openCreateOrganization(i):this.preopenCreateOrganization=i},this.closeCreateOrganization=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeCreateOrganization():this.preopenCreateOrganization=null},this.openWaitlist=i=>{this.clerkjs&&this.loaded?this.clerkjs.openWaitlist(i):this.preOpenWaitlist=i},this.closeWaitlist=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeWaitlist():this.preOpenWaitlist=null},this.openSignUp=i=>{this.clerkjs&&this.loaded?this.clerkjs.openSignUp(i):this.preopenSignUp=i},this.closeSignUp=()=>{this.clerkjs&&this.loaded?this.clerkjs.closeSignUp():this.preopenSignUp=null},this.mountSignIn=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountSignIn(i,d):this.premountSignInNodes.set(i,d)},this.unmountSignIn=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountSignIn(i):this.premountSignInNodes.delete(i)},this.mountSignUp=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountSignUp(i,d):this.premountSignUpNodes.set(i,d)},this.unmountSignUp=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountSignUp(i):this.premountSignUpNodes.delete(i)},this.mountUserAvatar=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountUserAvatar(i,d):this.premountUserAvatarNodes.set(i,d)},this.unmountUserAvatar=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountUserAvatar(i):this.premountUserAvatarNodes.delete(i)},this.mountUserProfile=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountUserProfile(i,d):this.premountUserProfileNodes.set(i,d)},this.unmountUserProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountUserProfile(i):this.premountUserProfileNodes.delete(i)},this.mountOrganizationProfile=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountOrganizationProfile(i,d):this.premountOrganizationProfileNodes.set(i,d)},this.unmountOrganizationProfile=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountOrganizationProfile(i):this.premountOrganizationProfileNodes.delete(i)},this.mountCreateOrganization=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountCreateOrganization(i,d):this.premountCreateOrganizationNodes.set(i,d)},this.unmountCreateOrganization=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountCreateOrganization(i):this.premountCreateOrganizationNodes.delete(i)},this.mountOrganizationSwitcher=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountOrganizationSwitcher(i,d):this.premountOrganizationSwitcherNodes.set(i,d)},this.unmountOrganizationSwitcher=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountOrganizationSwitcher(i):this.premountOrganizationSwitcherNodes.delete(i)},this.__experimental_prefetchOrganizationSwitcher=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.__experimental_prefetchOrganizationSwitcher()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("__experimental_prefetchOrganizationSwitcher",i)},this.mountOrganizationList=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountOrganizationList(i,d):this.premountOrganizationListNodes.set(i,d)},this.unmountOrganizationList=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountOrganizationList(i):this.premountOrganizationListNodes.delete(i)},this.mountUserButton=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountUserButton(i,d):this.premountUserButtonNodes.set(i,d)},this.unmountUserButton=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountUserButton(i):this.premountUserButtonNodes.delete(i)},this.mountWaitlist=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountWaitlist(i,d):this.premountWaitlistNodes.set(i,d)},this.unmountWaitlist=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountWaitlist(i):this.premountWaitlistNodes.delete(i)},this.mountPricingTable=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountPricingTable(i,d):this.premountPricingTableNodes.set(i,d)},this.unmountPricingTable=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountPricingTable(i):this.premountPricingTableNodes.delete(i)},this.mountAPIKeys=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountAPIKeys(i,d):this.premountAPIKeysNodes.set(i,d)},this.unmountAPIKeys=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountAPIKeys(i):this.premountAPIKeysNodes.delete(i)},this.__internal_mountOAuthConsent=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_mountOAuthConsent(i,d):this.premountOAuthConsentNodes.set(i,d)},this.__internal_unmountOAuthConsent=i=>{this.clerkjs&&this.loaded?this.clerkjs.__internal_unmountOAuthConsent(i):this.premountOAuthConsentNodes.delete(i)},this.mountTaskChooseOrganization=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountTaskChooseOrganization(i,d):this.premountTaskChooseOrganizationNodes.set(i,d)},this.unmountTaskChooseOrganization=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountTaskChooseOrganization(i):this.premountTaskChooseOrganizationNodes.delete(i)},this.mountTaskResetPassword=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountTaskResetPassword(i,d):this.premountTaskResetPasswordNodes.set(i,d)},this.unmountTaskResetPassword=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountTaskResetPassword(i):this.premountTaskResetPasswordNodes.delete(i)},this.mountTaskSetupMFA=(i,d)=>{this.clerkjs&&this.loaded?this.clerkjs.mountTaskSetupMFA(i,d):this.premountTaskSetupMFANodes.set(i,d)},this.unmountTaskSetupMFA=i=>{this.clerkjs&&this.loaded?this.clerkjs.unmountTaskSetupMFA(i):this.premountTaskSetupMFANodes.delete(i)},this.addListener=i=>{if(this.clerkjs)return this.clerkjs.addListener(i);{const d=()=>{var h;const m=this.premountAddListenerCalls.get(i);m&&((h=m.nativeUnsubscribe)==null||h.call(m),this.premountAddListenerCalls.delete(i))};return this.premountAddListenerCalls.set(i,{unsubscribe:d,nativeUnsubscribe:void 0}),d}},this.navigate=i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.navigate(i)};this.clerkjs&&this.loaded?d():this.premountMethodCalls.set("navigate",d)},this.redirectWithAuth=async(...i)=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.redirectWithAuth(...i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectWithAuth",d)},this.redirectToSignIn=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.redirectToSignIn(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectToSignIn",d)},this.redirectToSignUp=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.redirectToSignUp(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectToSignUp",d)},this.redirectToUserProfile=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToUserProfile()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToUserProfile",i)},this.redirectToAfterSignUp=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToAfterSignUp()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToAfterSignUp",i)},this.redirectToAfterSignIn=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToAfterSignIn()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("redirectToAfterSignIn",i)},this.redirectToAfterSignOut=()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToAfterSignOut()};this.clerkjs&&this.loaded?i():this.premountMethodCalls.set("redirectToAfterSignOut",i)},this.redirectToOrganizationProfile=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToOrganizationProfile()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToOrganizationProfile",i)},this.redirectToCreateOrganization=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToCreateOrganization()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToCreateOrganization",i)},this.redirectToWaitlist=async()=>{const i=()=>{var d;return(d=this.clerkjs)==null?void 0:d.redirectToWaitlist()};if(this.clerkjs&&this.loaded)return i();this.premountMethodCalls.set("redirectToWaitlist",i)},this.redirectToTasks=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.redirectToTasks(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("redirectToTasks",d)},this.handleRedirectCallback=async i=>{var d;const h=()=>{var m;return(m=this.clerkjs)==null?void 0:m.handleRedirectCallback(i)};this.clerkjs&&this.loaded?(d=h())==null||d.catch(()=>{}):this.premountMethodCalls.set("handleRedirectCallback",h)},this.handleGoogleOneTapCallback=async(i,d)=>{var h;const m=()=>{var g;return(g=this.clerkjs)==null?void 0:g.handleGoogleOneTapCallback(i,d)};this.clerkjs&&this.loaded?(h=m())==null||h.catch(()=>{}):this.premountMethodCalls.set("handleGoogleOneTapCallback",m)},this.handleEmailLinkVerification=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.handleEmailLinkVerification(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("handleEmailLinkVerification",d)},this.authenticateWithMetamask=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithMetamask(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithMetamask",d)},this.authenticateWithCoinbaseWallet=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithCoinbaseWallet(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithCoinbaseWallet",d)},this.authenticateWithBase=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithBase(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithBase",d)},this.authenticateWithOKXWallet=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithOKXWallet(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithOKXWallet",d)},this.authenticateWithSolana=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithSolana(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithSolana",d)},this.authenticateWithWeb3=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.authenticateWithWeb3(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("authenticateWithWeb3",d)},this.authenticateWithGoogleOneTap=async i=>(await Vu(this,Mr,_s).call(this)).authenticateWithGoogleOneTap(i),this.__internal_loadStripeJs=async()=>(await Vu(this,Mr,_s).call(this)).__internal_loadStripeJs(),this.createOrganization=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.createOrganization(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("createOrganization",d)},this.getOrganization=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.getOrganization(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("getOrganization",d)},this.joinWaitlist=async i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.joinWaitlist(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("joinWaitlist",d)},this.signOut=async(...i)=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.signOut(...i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("signOut",d)},this.__internal_attemptToEnableEnvironmentSetting=i=>{const d=()=>{var h;return(h=this.clerkjs)==null?void 0:h.__internal_attemptToEnableEnvironmentSetting(i)};if(this.clerkjs&&this.loaded)return d();this.premountMethodCalls.set("__internal_attemptToEnableEnvironmentSetting",d)};const{Clerk:s=null,publishableKey:o}=r||{};Ta(this,ia,o),Ta(this,zl,r?.proxyUrl),Ta(this,Nl,r?.domain),this.options=r,this.Clerk=s,this.mode=Bs()?"browser":"server",Ta(this,ks,new MS(this)),this.options.sdkMetadata||(this.options.sdkMetadata=US),He(this,sn).emit(vs.Status,"loading"),He(this,sn).prioritizedOn(vs.Status,i=>Ta(this,Cs,i)),He(this,ia)&&this.loadClerkJS()}get publishableKey(){return He(this,ia)}get loaded(){var r;return((r=this.clerkjs)==null?void 0:r.loaded)||!1}get status(){var r;return this.clerkjs?((r=this.clerkjs)==null?void 0:r.status)||(this.clerkjs.loaded?"ready":"loading"):He(this,Cs)}static getOrCreateInstance(r){return(!Bs()||!He(this,sa)||r.Clerk&&He(this,sa).Clerk!==r.Clerk||He(this,sa).publishableKey!==r.publishableKey)&&Ta(this,sa,new u1(r)),He(this,sa)}static clearInstance(){Ta(this,sa,null)}get domain(){return typeof window<"u"&&window.location?Lu(He(this,Nl),new URL(window.location.href),""):typeof He(this,Nl)=="function"?Wt.throw(Du):He(this,Nl)||""}get proxyUrl(){return typeof window<"u"&&window.location?Lu(He(this,zl),new URL(window.location.href),""):typeof He(this,zl)=="function"?Wt.throw(Du):He(this,zl)||""}__internal_getOption(r){var s,o;return(s=this.clerkjs)!=null&&s.__internal_getOption?(o=this.clerkjs)==null?void 0:o.__internal_getOption(r):this.options[r]}get sdkMetadata(){var r;return((r=this.clerkjs)==null?void 0:r.sdkMetadata)||this.options.sdkMetadata||void 0}get instanceType(){var r;return(r=this.clerkjs)==null?void 0:r.instanceType}get frontendApi(){var r;return((r=this.clerkjs)==null?void 0:r.frontendApi)||""}get isStandardBrowser(){var r;return((r=this.clerkjs)==null?void 0:r.isStandardBrowser)||this.options.standardBrowser||!1}get __internal_queryClient(){var r;return(r=this.clerkjs)==null?void 0:r.__internal_queryClient}get isSatellite(){return typeof window<"u"&&window.location?Lu(this.options.isSatellite,new URL(window.location.href),!1):typeof this.options.isSatellite=="function"?Wt.throw(Du):!1}async loadClerkJS(){var r;if(!(this.mode!=="browser"||this.loaded)){typeof window<"u"&&(window.__clerk_publishable_key=He(this,ia),window.__clerk_proxy_url=this.proxyUrl,window.__clerk_domain=this.domain);try{if(this.Clerk){let s;F4(this.Clerk)?(s=new this.Clerk(He(this,ia),{proxyUrl:this.proxyUrl,domain:this.domain}),this.beforeLoad(s),await s.load(this.options)):(s=this.Clerk,s.loaded||(this.beforeLoad(s),await s.load(this.options))),global.Clerk=s}else if(!__BUILD_DISABLE_RHC__){if(global.Clerk||await jS({...this.options,publishableKey:He(this,ia),proxyUrl:this.proxyUrl,domain:this.domain,nonce:this.options.nonce}),!global.Clerk)throw new Error("Failed to download latest ClerkJS. Contact support@clerk.com.");this.beforeLoad(global.Clerk),await global.Clerk.load(this.options)}return(r=global.Clerk)!=null&&r.loaded?this.hydrateClerkJS(global.Clerk):void 0}catch(s){const o=s;He(this,sn).emit(vs.Status,"error"),console.error(o.stack||o.message||o);return}}}get version(){var r;return(r=this.clerkjs)==null?void 0:r.version}get client(){if(this.clerkjs)return this.clerkjs.client}get session(){if(this.clerkjs)return this.clerkjs.session}get user(){if(this.clerkjs)return this.clerkjs.user}get organization(){if(this.clerkjs)return this.clerkjs.organization}get telemetry(){if(this.clerkjs)return this.clerkjs.telemetry}get __unstable__environment(){if(this.clerkjs)return this.clerkjs.__unstable__environment}get isSignedIn(){return this.clerkjs?this.clerkjs.isSignedIn:!1}get billing(){var r;return(r=this.clerkjs)==null?void 0:r.billing}get __internal_state(){return this.loaded&&this.clerkjs?this.clerkjs.__internal_state:He(this,ks)}get apiKeys(){var r;return(r=this.clerkjs)==null?void 0:r.apiKeys}__unstable__setEnvironment(...r){if(this.clerkjs&&"__unstable__setEnvironment"in this.clerkjs)this.clerkjs.__unstable__setEnvironment(r);else return}};Cs=new WeakMap;Nl=new WeakMap;zl=new WeakMap;ia=new WeakMap;sn=new WeakMap;ks=new WeakMap;sa=new WeakMap;Mr=new WeakSet;_s=function(){return new Promise(a=>{this.addOnLoaded(()=>a(this.clerkjs))})};ra(c1,sa);var D0=c1;function DS(a){const{isomorphicClerkOptions:r,initialState:s,children:o}=a,{isomorphicClerk:i,clerkStatus:d}=LS(r),[h,m]=D.useState({client:i.client,session:i.session,user:i.user,organization:i.organization});D.useEffect(()=>i.addListener(me=>m({...me})),[]);const g=_S(i.loaded,h,s),b=D.useMemo(()=>({value:i}),[d]),x=D.useMemo(()=>({value:h.client}),[h.client]),{sessionId:v,sessionStatus:E,sessionClaims:M,session:k,userId:N,user:_,orgId:X,actor:U,organization:q,orgRole:F,orgSlug:H,orgPermissions:$,factorVerificationAge:V}=g,le=D.useMemo(()=>({value:{sessionId:v,sessionStatus:E,sessionClaims:M,userId:N,actor:U,orgId:X,orgRole:F,orgSlug:H,orgPermissions:$,factorVerificationAge:V}}),[v,E,N,U,X,F,H,V,M?.__raw]),ae=D.useMemo(()=>({value:k}),[v,k]),je=D.useMemo(()=>({value:_}),[N,_]),xe=D.useMemo(()=>({value:{organization:q}}),[X,q]);return D.createElement(w4.Provider,{value:b},D.createElement(o4.Provider,{value:x},D.createElement(c4.Provider,{value:ae},D.createElement(h4,{...xe.value},D.createElement(v4.Provider,{value:le},D.createElement(i4.Provider,{value:je},D.createElement(d4,{value:void 0},o)))))))}var LS=a=>{const r=D.useRef(D0.getOrCreateInstance(a)),[s,o]=D.useState(r.current.status);return D.useEffect(()=>{r.current.__unstable__updateProps({appearance:a.appearance})},[a.appearance]),D.useEffect(()=>{r.current.__unstable__updateProps({options:a})},[a.localization]),D.useEffect(()=>(r.current.on("status",o),()=>{r.current&&r.current.off("status",o),D0.clearInstance()}),[]),{isomorphicClerk:r.current,clerkStatus:s}};function BS(a){const{initialState:r,children:s,__internal_bypassMissingPublishableKey:o,...i}=a,{publishableKey:d="",Clerk:h}=i;return!h&&!o&&(d?d&&!ld(d)&&Wt.throwInvalidPublishableKeyError({key:d}):Wt.throwMissingPublishableKeyError()),D.createElement(DS,{initialState:r,isomorphicClerkOptions:i},s)}var d1=Q4(BS,"ClerkProvider",j4);d1.displayName="ClerkProvider";x4({packageName:"@clerk/clerk-react"});SS("@clerk/clerk-react");function f1(a,r){return function(){return a.apply(r,arguments)}}const{toString:HS}=Object.prototype,{getPrototypeOf:Dd}=Object,{iterator:Zs,toStringTag:h1}=Symbol,Js=(a=>r=>{const s=HS.call(r);return a[s]||(a[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),tn=a=>(a=a.toLowerCase(),r=>Js(r)===a),Ws=a=>r=>typeof r===a,{isArray:Ml}=Array,Tl=Ws("undefined");function Kr(a){return a!==null&&!Tl(a)&&a.constructor!==null&&!Tl(a.constructor)&&wt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const p1=tn("ArrayBuffer");function qS(a){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(a):r=a&&a.buffer&&p1(a.buffer),r}const YS=Ws("string"),wt=Ws("function"),m1=Ws("number"),Qr=a=>a!==null&&typeof a=="object",VS=a=>a===!0||a===!1,Ns=a=>{if(Js(a)!=="object")return!1;const r=Dd(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(h1 in a)&&!(Zs in a)},PS=a=>{if(!Qr(a)||Kr(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},GS=tn("Date"),XS=tn("File"),FS=a=>!!(a&&typeof a.uri<"u"),KS=a=>a&&typeof a.getParts<"u",QS=tn("Blob"),$S=tn("FileList"),IS=a=>Qr(a)&&wt(a.pipe);function ZS(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const L0=ZS(),B0=typeof L0.FormData<"u"?L0.FormData:void 0,JS=a=>{let r;return a&&(B0&&a instanceof B0||wt(a.append)&&((r=Js(a))==="formdata"||r==="object"&&wt(a.toString)&&a.toString()==="[object FormData]"))},WS=tn("URLSearchParams"),[ew,tw,nw,aw]=["ReadableStream","Request","Response","Headers"].map(tn),lw=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $r(a,r,{allOwnKeys:s=!1}={}){if(a===null||typeof a>"u")return;let o,i;if(typeof a!="object"&&(a=[a]),Ml(a))for(o=0,i=a.length;o<i;o++)r.call(null,a[o],o,a);else{if(Kr(a))return;const d=s?Object.getOwnPropertyNames(a):Object.keys(a),h=d.length;let m;for(o=0;o<h;o++)m=d[o],r.call(null,a[m],m,a)}}function g1(a,r){if(Kr(a))return null;r=r.toLowerCase();const s=Object.keys(a);let o=s.length,i;for(;o-- >0;)if(i=s[o],r===i.toLowerCase())return i;return null}const Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,b1=a=>!Tl(a)&&a!==Ma;function hd(){const{caseless:a,skipUndefined:r}=b1(this)&&this||{},s={},o=(i,d)=>{if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=a&&g1(s,d)||d;Ns(s[h])&&Ns(i)?s[h]=hd(s[h],i):Ns(i)?s[h]=hd({},i):Ml(i)?s[h]=i.slice():(!r||!Tl(i))&&(s[h]=i)};for(let i=0,d=arguments.length;i<d;i++)arguments[i]&&$r(arguments[i],o);return s}const rw=(a,r,s,{allOwnKeys:o}={})=>($r(r,(i,d)=>{s&&wt(i)?Object.defineProperty(a,d,{value:f1(i,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(a,d,{value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:o}),a),iw=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),sw=(a,r,s,o)=>{a.prototype=Object.create(r.prototype,o),Object.defineProperty(a.prototype,"constructor",{value:a,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(a,"super",{value:r.prototype}),s&&Object.assign(a.prototype,s)},ow=(a,r,s,o)=>{let i,d,h;const m={};if(r=r||{},a==null)return r;do{for(i=Object.getOwnPropertyNames(a),d=i.length;d-- >0;)h=i[d],(!o||o(h,a,r))&&!m[h]&&(r[h]=a[h],m[h]=!0);a=s!==!1&&Dd(a)}while(a&&(!s||s(a,r))&&a!==Object.prototype);return r},cw=(a,r,s)=>{a=String(a),(s===void 0||s>a.length)&&(s=a.length),s-=r.length;const o=a.indexOf(r,s);return o!==-1&&o===s},uw=a=>{if(!a)return null;if(Ml(a))return a;let r=a.length;if(!m1(r))return null;const s=new Array(r);for(;r-- >0;)s[r]=a[r];return s},dw=(a=>r=>a&&r instanceof a)(typeof Uint8Array<"u"&&Dd(Uint8Array)),fw=(a,r)=>{const o=(a&&a[Zs]).call(a);let i;for(;(i=o.next())&&!i.done;){const d=i.value;r.call(a,d[0],d[1])}},hw=(a,r)=>{let s;const o=[];for(;(s=a.exec(r))!==null;)o.push(s);return o},pw=tn("HTMLFormElement"),mw=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,o,i){return o.toUpperCase()+i}),H0=(({hasOwnProperty:a})=>(r,s)=>a.call(r,s))(Object.prototype),gw=tn("RegExp"),y1=(a,r)=>{const s=Object.getOwnPropertyDescriptors(a),o={};$r(s,(i,d)=>{let h;(h=r(i,d,a))!==!1&&(o[d]=h||i)}),Object.defineProperties(a,o)},bw=a=>{y1(a,(r,s)=>{if(wt(a)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const o=a[s];if(wt(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},yw=(a,r)=>{const s={},o=i=>{i.forEach(d=>{s[d]=!0})};return Ml(a)?o(a):o(String(a).split(r)),s},xw=()=>{},vw=(a,r)=>a!=null&&Number.isFinite(a=+a)?a:r;function Sw(a){return!!(a&&wt(a.append)&&a[h1]==="FormData"&&a[Zs])}const ww=a=>{const r=new Array(10),s=(o,i)=>{if(Qr(o)){if(r.indexOf(o)>=0)return;if(Kr(o))return o;if(!("toJSON"in o)){r[i]=o;const d=Ml(o)?[]:{};return $r(o,(h,m)=>{const g=s(h,i+1);!Tl(g)&&(d[m]=g)}),r[i]=void 0,d}}return o};return s(a,0)},jw=tn("AsyncFunction"),Ew=a=>a&&(Qr(a)||wt(a))&&wt(a.then)&&wt(a.catch),x1=((a,r)=>a?setImmediate:r?((s,o)=>(Ma.addEventListener("message",({source:i,data:d})=>{i===Ma&&d===s&&o.length&&o.shift()()},!1),i=>{o.push(i),Ma.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",wt(Ma.postMessage)),Cw=typeof queueMicrotask<"u"?queueMicrotask.bind(Ma):typeof process<"u"&&process.nextTick||x1,kw=a=>a!=null&&wt(a[Zs]),L={isArray:Ml,isArrayBuffer:p1,isBuffer:Kr,isFormData:JS,isArrayBufferView:qS,isString:YS,isNumber:m1,isBoolean:VS,isObject:Qr,isPlainObject:Ns,isEmptyObject:PS,isReadableStream:ew,isRequest:tw,isResponse:nw,isHeaders:aw,isUndefined:Tl,isDate:GS,isFile:XS,isReactNativeBlob:FS,isReactNative:KS,isBlob:QS,isRegExp:gw,isFunction:wt,isStream:IS,isURLSearchParams:WS,isTypedArray:dw,isFileList:$S,forEach:$r,merge:hd,extend:rw,trim:lw,stripBOM:iw,inherits:sw,toFlatObject:ow,kindOf:Js,kindOfTest:tn,endsWith:cw,toArray:uw,forEachEntry:fw,matchAll:hw,isHTMLForm:pw,hasOwnProperty:H0,hasOwnProp:H0,reduceDescriptors:y1,freezeMethods:bw,toObjectSet:yw,toCamelCase:mw,noop:xw,toFiniteNumber:vw,findKey:g1,global:Ma,isContextDefined:b1,isSpecCompliantForm:Sw,toJSONObject:ww,isAsyncFn:jw,isThenable:Ew,setImmediate:x1,asap:Cw,isIterable:kw};let ue=class v1 extends Error{static from(r,s,o,i,d,h){const m=new v1(r.message,s||r.code,o,i,d);return m.cause=r,m.name=r.name,r.status!=null&&m.status==null&&(m.status=r.status),h&&Object.assign(m,h),m}constructor(r,s,o,i,d){super(r),Object.defineProperty(this,"message",{value:r,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),o&&(this.config=o),i&&(this.request=i),d&&(this.response=d,this.status=d.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}};ue.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ue.ERR_BAD_OPTION="ERR_BAD_OPTION";ue.ECONNABORTED="ECONNABORTED";ue.ETIMEDOUT="ETIMEDOUT";ue.ERR_NETWORK="ERR_NETWORK";ue.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ue.ERR_DEPRECATED="ERR_DEPRECATED";ue.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ue.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ue.ERR_CANCELED="ERR_CANCELED";ue.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ue.ERR_INVALID_URL="ERR_INVALID_URL";const _w=null;function pd(a){return L.isPlainObject(a)||L.isArray(a)}function S1(a){return L.endsWith(a,"[]")?a.slice(0,-2):a}function Pu(a,r,s){return a?a.concat(r).map(function(i,d){return i=S1(i),!s&&d?"["+i+"]":i}).join(s?".":""):r}function Nw(a){return L.isArray(a)&&!a.some(pd)}const zw=L.toFlatObject(L,{},null,function(r){return/^is[A-Z]/.test(r)});function eo(a,r,s){if(!L.isObject(a))throw new TypeError("target must be an object");r=r||new FormData,s=L.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,_){return!L.isUndefined(_[N])});const o=s.metaTokens,i=s.visitor||x,d=s.dots,h=s.indexes,g=(s.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(r);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function b(k){if(k===null)return"";if(L.isDate(k))return k.toISOString();if(L.isBoolean(k))return k.toString();if(!g&&L.isBlob(k))throw new ue("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(k)||L.isTypedArray(k)?g&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function x(k,N,_){let X=k;if(L.isReactNative(r)&&L.isReactNativeBlob(k))return r.append(Pu(_,N,d),b(k)),!1;if(k&&!_&&typeof k=="object"){if(L.endsWith(N,"{}"))N=o?N:N.slice(0,-2),k=JSON.stringify(k);else if(L.isArray(k)&&Nw(k)||(L.isFileList(k)||L.endsWith(N,"[]"))&&(X=L.toArray(k)))return N=S1(N),X.forEach(function(q,F){!(L.isUndefined(q)||q===null)&&r.append(h===!0?Pu([N],F,d):h===null?N:N+"[]",b(q))}),!1}return pd(k)?!0:(r.append(Pu(_,N,d),b(k)),!1)}const v=[],E=Object.assign(zw,{defaultVisitor:x,convertValue:b,isVisitable:pd});function M(k,N){if(!L.isUndefined(k)){if(v.indexOf(k)!==-1)throw Error("Circular reference detected in "+N.join("."));v.push(k),L.forEach(k,function(X,U){(!(L.isUndefined(X)||X===null)&&i.call(r,X,L.isString(U)?U.trim():U,N,E))===!0&&M(X,N?N.concat(U):[U])}),v.pop()}}if(!L.isObject(a))throw new TypeError("data must be an object");return M(a),r}function q0(a){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function Ld(a,r){this._pairs=[],a&&eo(a,this,r)}const w1=Ld.prototype;w1.append=function(r,s){this._pairs.push([r,s])};w1.toString=function(r){const s=r?function(o){return r.call(this,o,q0)}:q0;return this._pairs.map(function(i){return s(i[0])+"="+s(i[1])},"").join("&")};function Aw(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function j1(a,r,s){if(!r)return a;const o=s&&s.encode||Aw,i=L.isFunction(s)?{serialize:s}:s,d=i&&i.serialize;let h;if(d?h=d(r,i):h=L.isURLSearchParams(r)?r.toString():new Ld(r,i).toString(o),h){const m=a.indexOf("#");m!==-1&&(a=a.slice(0,m)),a+=(a.indexOf("?")===-1?"?":"&")+h}return a}class Y0{constructor(){this.handlers=[]}use(r,s,o){return this.handlers.push({fulfilled:r,rejected:s,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){L.forEach(this.handlers,function(o){o!==null&&r(o)})}}const Bd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Tw=typeof URLSearchParams<"u"?URLSearchParams:Ld,Rw=typeof FormData<"u"?FormData:null,Ow=typeof Blob<"u"?Blob:null,Mw={isBrowser:!0,classes:{URLSearchParams:Tw,FormData:Rw,Blob:Ow},protocols:["http","https","file","blob","url","data"]},Hd=typeof window<"u"&&typeof document<"u",md=typeof navigator=="object"&&navigator||void 0,Uw=Hd&&(!md||["ReactNative","NativeScript","NS"].indexOf(md.product)<0),Dw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Lw=Hd&&window.location.href||"http://localhost",Bw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Hd,hasStandardBrowserEnv:Uw,hasStandardBrowserWebWorkerEnv:Dw,navigator:md,origin:Lw},Symbol.toStringTag,{value:"Module"})),ct={...Bw,...Mw};function Hw(a,r){return eo(a,new ct.classes.URLSearchParams,{visitor:function(s,o,i,d){return ct.isNode&&L.isBuffer(s)?(this.append(o,s.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...r})}function qw(a){return L.matchAll(/\w+|\[(\w*)]/g,a).map(r=>r[0]==="[]"?"":r[1]||r[0])}function Yw(a){const r={},s=Object.keys(a);let o;const i=s.length;let d;for(o=0;o<i;o++)d=s[o],r[d]=a[d];return r}function E1(a){function r(s,o,i,d){let h=s[d++];if(h==="__proto__")return!0;const m=Number.isFinite(+h),g=d>=s.length;return h=!h&&L.isArray(i)?i.length:h,g?(L.hasOwnProp(i,h)?i[h]=[i[h],o]:i[h]=o,!m):((!i[h]||!L.isObject(i[h]))&&(i[h]=[]),r(s,o,i[h],d)&&L.isArray(i[h])&&(i[h]=Yw(i[h])),!m)}if(L.isFormData(a)&&L.isFunction(a.entries)){const s={};return L.forEachEntry(a,(o,i)=>{r(qw(o),i,s,0)}),s}return null}function Vw(a,r,s){if(L.isString(a))try{return(r||JSON.parse)(a),L.trim(a)}catch(o){if(o.name!=="SyntaxError")throw o}return(s||JSON.stringify)(a)}const Ir={transitional:Bd,adapter:["xhr","http","fetch"],transformRequest:[function(r,s){const o=s.getContentType()||"",i=o.indexOf("application/json")>-1,d=L.isObject(r);if(d&&L.isHTMLForm(r)&&(r=new FormData(r)),L.isFormData(r))return i?JSON.stringify(E1(r)):r;if(L.isArrayBuffer(r)||L.isBuffer(r)||L.isStream(r)||L.isFile(r)||L.isBlob(r)||L.isReadableStream(r))return r;if(L.isArrayBufferView(r))return r.buffer;if(L.isURLSearchParams(r))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let m;if(d){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Hw(r,this.formSerializer).toString();if((m=L.isFileList(r))||o.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return eo(m?{"files[]":r}:r,g&&new g,this.formSerializer)}}return d||i?(s.setContentType("application/json",!1),Vw(r)):r}],transformResponse:[function(r){const s=this.transitional||Ir.transitional,o=s&&s.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(r)||L.isReadableStream(r))return r;if(r&&L.isString(r)&&(o&&!this.responseType||i)){const h=!(s&&s.silentJSONParsing)&&i;try{return JSON.parse(r,this.parseReviver)}catch(m){if(h)throw m.name==="SyntaxError"?ue.from(m,ue.ERR_BAD_RESPONSE,this,null,this.response):m}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],a=>{Ir.headers[a]={}});const Pw=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gw=a=>{const r={};let s,o,i;return a&&a.split(`
`).forEach(function(h){i=h.indexOf(":"),s=h.substring(0,i).trim().toLowerCase(),o=h.substring(i+1).trim(),!(!s||r[s]&&Pw[s])&&(s==="set-cookie"?r[s]?r[s].push(o):r[s]=[o]:r[s]=r[s]?r[s]+", "+o:o)}),r},V0=Symbol("internals"),Xw=a=>!/[\r\n]/.test(a);function C1(a,r){if(!(a===!1||a==null)){if(L.isArray(a)){a.forEach(s=>C1(s,r));return}if(!Xw(String(a)))throw new Error(`Invalid character in header content ["${r}"]`)}}function Tr(a){return a&&String(a).trim().toLowerCase()}function Fw(a){let r=a.length;for(;r>0;){const s=a.charCodeAt(r-1);if(s!==10&&s!==13)break;r-=1}return r===a.length?a:a.slice(0,r)}function zs(a){return a===!1||a==null?a:L.isArray(a)?a.map(zs):Fw(String(a))}function Kw(a){const r=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=s.exec(a);)r[o[1]]=o[2];return r}const Qw=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Gu(a,r,s,o,i){if(L.isFunction(o))return o.call(this,r,s);if(i&&(r=s),!!L.isString(r)){if(L.isString(o))return r.indexOf(o)!==-1;if(L.isRegExp(o))return o.test(r)}}function $w(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,s,o)=>s.toUpperCase()+o)}function Iw(a,r){const s=L.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(a,o+s,{value:function(i,d,h){return this[o].call(this,r,i,d,h)},configurable:!0})})}let jt=class{constructor(r){r&&this.set(r)}set(r,s,o){const i=this;function d(m,g,b){const x=Tr(g);if(!x)throw new Error("header name must be a non-empty string");const v=L.findKey(i,x);(!v||i[v]===void 0||b===!0||b===void 0&&i[v]!==!1)&&(C1(m,g),i[v||g]=zs(m))}const h=(m,g)=>L.forEach(m,(b,x)=>d(b,x,g));if(L.isPlainObject(r)||r instanceof this.constructor)h(r,s);else if(L.isString(r)&&(r=r.trim())&&!Qw(r))h(Gw(r),s);else if(L.isObject(r)&&L.isIterable(r)){let m={},g,b;for(const x of r){if(!L.isArray(x))throw TypeError("Object iterator must return a key-value pair");m[b=x[0]]=(g=m[b])?L.isArray(g)?[...g,x[1]]:[g,x[1]]:x[1]}h(m,s)}else r!=null&&d(s,r,o);return this}get(r,s){if(r=Tr(r),r){const o=L.findKey(this,r);if(o){const i=this[o];if(!s)return i;if(s===!0)return Kw(i);if(L.isFunction(s))return s.call(this,i,o);if(L.isRegExp(s))return s.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,s){if(r=Tr(r),r){const o=L.findKey(this,r);return!!(o&&this[o]!==void 0&&(!s||Gu(this,this[o],o,s)))}return!1}delete(r,s){const o=this;let i=!1;function d(h){if(h=Tr(h),h){const m=L.findKey(o,h);m&&(!s||Gu(o,o[m],m,s))&&(delete o[m],i=!0)}}return L.isArray(r)?r.forEach(d):d(r),i}clear(r){const s=Object.keys(this);let o=s.length,i=!1;for(;o--;){const d=s[o];(!r||Gu(this,this[d],d,r,!0))&&(delete this[d],i=!0)}return i}normalize(r){const s=this,o={};return L.forEach(this,(i,d)=>{const h=L.findKey(o,d);if(h){s[h]=zs(i),delete s[d];return}const m=r?$w(d):String(d).trim();m!==d&&delete s[d],s[m]=zs(i),o[m]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const s=Object.create(null);return L.forEach(this,(o,i)=>{o!=null&&o!==!1&&(s[i]=r&&L.isArray(o)?o.join(", "):o)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,s])=>r+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...s){const o=new this(r);return s.forEach(i=>o.set(i)),o}static accessor(r){const o=(this[V0]=this[V0]={accessors:{}}).accessors,i=this.prototype;function d(h){const m=Tr(h);o[m]||(Iw(i,h),o[m]=!0)}return L.isArray(r)?r.forEach(d):d(r),this}};jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(jt.prototype,({value:a},r)=>{let s=r[0].toUpperCase()+r.slice(1);return{get:()=>a,set(o){this[s]=o}}});L.freezeMethods(jt);function Xu(a,r){const s=this||Ir,o=r||s,i=jt.from(o.headers);let d=o.data;return L.forEach(a,function(m){d=m.call(s,d,i.normalize(),r?r.status:void 0)}),i.normalize(),d}function k1(a){return!!(a&&a.__CANCEL__)}let Zr=class extends ue{constructor(r,s,o){super(r??"canceled",ue.ERR_CANCELED,s,o),this.name="CanceledError",this.__CANCEL__=!0}};function _1(a,r,s){const o=s.config.validateStatus;!s.status||!o||o(s.status)?a(s):r(new ue("Request failed with status code "+s.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function Zw(a){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return r&&r[1]||""}function Jw(a,r){a=a||10;const s=new Array(a),o=new Array(a);let i=0,d=0,h;return r=r!==void 0?r:1e3,function(g){const b=Date.now(),x=o[d];h||(h=b),s[i]=g,o[i]=b;let v=d,E=0;for(;v!==i;)E+=s[v++],v=v%a;if(i=(i+1)%a,i===d&&(d=(d+1)%a),b-h<r)return;const M=x&&b-x;return M?Math.round(E*1e3/M):void 0}}function Ww(a,r){let s=0,o=1e3/r,i,d;const h=(b,x=Date.now())=>{s=x,i=null,d&&(clearTimeout(d),d=null),a(...b)};return[(...b)=>{const x=Date.now(),v=x-s;v>=o?h(b,x):(i=b,d||(d=setTimeout(()=>{d=null,h(i)},o-v)))},()=>i&&h(i)]}const Hs=(a,r,s=3)=>{let o=0;const i=Jw(50,250);return Ww(d=>{const h=d.loaded,m=d.lengthComputable?d.total:void 0,g=h-o,b=i(g),x=h<=m;o=h;const v={loaded:h,total:m,progress:m?h/m:void 0,bytes:g,rate:b||void 0,estimated:b&&m&&x?(m-h)/b:void 0,event:d,lengthComputable:m!=null,[r?"download":"upload"]:!0};a(v)},s)},P0=(a,r)=>{const s=a!=null;return[o=>r[0]({lengthComputable:s,total:a,loaded:o}),r[1]]},G0=a=>(...r)=>L.asap(()=>a(...r)),e5=ct.hasStandardBrowserEnv?((a,r)=>s=>(s=new URL(s,ct.origin),a.protocol===s.protocol&&a.host===s.host&&(r||a.port===s.port)))(new URL(ct.origin),ct.navigator&&/(msie|trident)/i.test(ct.navigator.userAgent)):()=>!0,t5=ct.hasStandardBrowserEnv?{write(a,r,s,o,i,d,h){if(typeof document>"u")return;const m=[`${a}=${encodeURIComponent(r)}`];L.isNumber(s)&&m.push(`expires=${new Date(s).toUTCString()}`),L.isString(o)&&m.push(`path=${o}`),L.isString(i)&&m.push(`domain=${i}`),d===!0&&m.push("secure"),L.isString(h)&&m.push(`SameSite=${h}`),document.cookie=m.join("; ")},read(a){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+a+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function n5(a){return typeof a!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function a5(a,r){return r?a.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):a}function N1(a,r,s){let o=!n5(r);return a&&(o||s==!1)?a5(a,r):r}const X0=a=>a instanceof jt?{...a}:a;function Ba(a,r){r=r||{};const s={};function o(b,x,v,E){return L.isPlainObject(b)&&L.isPlainObject(x)?L.merge.call({caseless:E},b,x):L.isPlainObject(x)?L.merge({},x):L.isArray(x)?x.slice():x}function i(b,x,v,E){if(L.isUndefined(x)){if(!L.isUndefined(b))return o(void 0,b,v,E)}else return o(b,x,v,E)}function d(b,x){if(!L.isUndefined(x))return o(void 0,x)}function h(b,x){if(L.isUndefined(x)){if(!L.isUndefined(b))return o(void 0,b)}else return o(void 0,x)}function m(b,x,v){if(v in r)return o(b,x);if(v in a)return o(void 0,b)}const g={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:m,headers:(b,x,v)=>i(X0(b),X0(x),v,!0)};return L.forEach(Object.keys({...a,...r}),function(x){if(x==="__proto__"||x==="constructor"||x==="prototype")return;const v=L.hasOwnProp(g,x)?g[x]:i,E=v(a[x],r[x],x);L.isUndefined(E)&&v!==m||(s[x]=E)}),s}const z1=a=>{const r=Ba({},a);let{data:s,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:d,headers:h,auth:m}=r;if(r.headers=h=jt.from(h),r.url=j1(N1(r.baseURL,r.url,r.allowAbsoluteUrls),a.params,a.paramsSerializer),m&&h.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):""))),L.isFormData(s)){if(ct.hasStandardBrowserEnv||ct.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(L.isFunction(s.getHeaders)){const g=s.getHeaders(),b=["content-type","content-length"];Object.entries(g).forEach(([x,v])=>{b.includes(x.toLowerCase())&&h.set(x,v)})}}if(ct.hasStandardBrowserEnv&&(o&&L.isFunction(o)&&(o=o(r)),o||o!==!1&&e5(r.url))){const g=i&&d&&t5.read(d);g&&h.set(i,g)}return r},l5=typeof XMLHttpRequest<"u",r5=l5&&function(a){return new Promise(function(s,o){const i=z1(a);let d=i.data;const h=jt.from(i.headers).normalize();let{responseType:m,onUploadProgress:g,onDownloadProgress:b}=i,x,v,E,M,k;function N(){M&&M(),k&&k(),i.cancelToken&&i.cancelToken.unsubscribe(x),i.signal&&i.signal.removeEventListener("abort",x)}let _=new XMLHttpRequest;_.open(i.method.toUpperCase(),i.url,!0),_.timeout=i.timeout;function X(){if(!_)return;const q=jt.from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),H={data:!m||m==="text"||m==="json"?_.responseText:_.response,status:_.status,statusText:_.statusText,headers:q,config:a,request:_};_1(function(V){s(V),N()},function(V){o(V),N()},H),_=null}"onloadend"in _?_.onloadend=X:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout(X)},_.onabort=function(){_&&(o(new ue("Request aborted",ue.ECONNABORTED,a,_)),_=null)},_.onerror=function(F){const H=F&&F.message?F.message:"Network Error",$=new ue(H,ue.ERR_NETWORK,a,_);$.event=F||null,o($),_=null},_.ontimeout=function(){let F=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const H=i.transitional||Bd;i.timeoutErrorMessage&&(F=i.timeoutErrorMessage),o(new ue(F,H.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,a,_)),_=null},d===void 0&&h.setContentType(null),"setRequestHeader"in _&&L.forEach(h.toJSON(),function(F,H){_.setRequestHeader(H,F)}),L.isUndefined(i.withCredentials)||(_.withCredentials=!!i.withCredentials),m&&m!=="json"&&(_.responseType=i.responseType),b&&([E,k]=Hs(b,!0),_.addEventListener("progress",E)),g&&_.upload&&([v,M]=Hs(g),_.upload.addEventListener("progress",v),_.upload.addEventListener("loadend",M)),(i.cancelToken||i.signal)&&(x=q=>{_&&(o(!q||q.type?new Zr(null,a,_):q),_.abort(),_=null)},i.cancelToken&&i.cancelToken.subscribe(x),i.signal&&(i.signal.aborted?x():i.signal.addEventListener("abort",x)));const U=Zw(i.url);if(U&&ct.protocols.indexOf(U)===-1){o(new ue("Unsupported protocol "+U+":",ue.ERR_BAD_REQUEST,a));return}_.send(d||null)})},i5=(a,r)=>{const{length:s}=a=a?a.filter(Boolean):[];if(r||s){let o=new AbortController,i;const d=function(b){if(!i){i=!0,m();const x=b instanceof Error?b:this.reason;o.abort(x instanceof ue?x:new Zr(x instanceof Error?x.message:x))}};let h=r&&setTimeout(()=>{h=null,d(new ue(`timeout of ${r}ms exceeded`,ue.ETIMEDOUT))},r);const m=()=>{a&&(h&&clearTimeout(h),h=null,a.forEach(b=>{b.unsubscribe?b.unsubscribe(d):b.removeEventListener("abort",d)}),a=null)};a.forEach(b=>b.addEventListener("abort",d));const{signal:g}=o;return g.unsubscribe=()=>L.asap(m),g}},s5=function*(a,r){let s=a.byteLength;if(s<r){yield a;return}let o=0,i;for(;o<s;)i=o+r,yield a.slice(o,i),o=i},o5=async function*(a,r){for await(const s of c5(a))yield*s5(s,r)},c5=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const r=a.getReader();try{for(;;){const{done:s,value:o}=await r.read();if(s)break;yield o}}finally{await r.cancel()}},F0=(a,r,s,o)=>{const i=o5(a,r);let d=0,h,m=g=>{h||(h=!0,o&&o(g))};return new ReadableStream({async pull(g){try{const{done:b,value:x}=await i.next();if(b){m(),g.close();return}let v=x.byteLength;if(s){let E=d+=v;s(E)}g.enqueue(new Uint8Array(x))}catch(b){throw m(b),b}},cancel(g){return m(g),i.return()}},{highWaterMark:2})},K0=64*1024,{isFunction:Ss}=L,u5=(({Request:a,Response:r})=>({Request:a,Response:r}))(L.global),{ReadableStream:Q0,TextEncoder:$0}=L.global,I0=(a,...r)=>{try{return!!a(...r)}catch{return!1}},d5=a=>{a=L.merge.call({skipUndefined:!0},u5,a);const{fetch:r,Request:s,Response:o}=a,i=r?Ss(r):typeof fetch=="function",d=Ss(s),h=Ss(o);if(!i)return!1;const m=i&&Ss(Q0),g=i&&(typeof $0=="function"?(k=>N=>k.encode(N))(new $0):async k=>new Uint8Array(await new s(k).arrayBuffer())),b=d&&m&&I0(()=>{let k=!1;const N=new Q0,_=new s(ct.origin,{body:N,method:"POST",get duplex(){return k=!0,"half"}}).headers.has("Content-Type");return N.cancel(),k&&!_}),x=h&&m&&I0(()=>L.isReadableStream(new o("").body)),v={stream:x&&(k=>k.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(k=>{!v[k]&&(v[k]=(N,_)=>{let X=N&&N[k];if(X)return X.call(N);throw new ue(`Response type '${k}' is not supported`,ue.ERR_NOT_SUPPORT,_)})});const E=async k=>{if(k==null)return 0;if(L.isBlob(k))return k.size;if(L.isSpecCompliantForm(k))return(await new s(ct.origin,{method:"POST",body:k}).arrayBuffer()).byteLength;if(L.isArrayBufferView(k)||L.isArrayBuffer(k))return k.byteLength;if(L.isURLSearchParams(k)&&(k=k+""),L.isString(k))return(await g(k)).byteLength},M=async(k,N)=>{const _=L.toFiniteNumber(k.getContentLength());return _??E(N)};return async k=>{let{url:N,method:_,data:X,signal:U,cancelToken:q,timeout:F,onDownloadProgress:H,onUploadProgress:$,responseType:V,headers:le,withCredentials:ae="same-origin",fetchOptions:je}=z1(k),xe=r||fetch;V=V?(V+"").toLowerCase():"text";let me=i5([U,q&&q.toAbortSignal()],F),Z=null;const re=me&&me.unsubscribe&&(()=>{me.unsubscribe()});let he;try{if($&&b&&_!=="get"&&_!=="head"&&(he=await M(le,X))!==0){let j=new s(N,{method:"POST",body:X,duplex:"half"}),P;if(L.isFormData(X)&&(P=j.headers.get("content-type"))&&le.setContentType(P),j.body){const[J,Q]=P0(he,Hs(G0($)));X=F0(j.body,K0,J,Q)}}L.isString(ae)||(ae=ae?"include":"omit");const R=d&&"credentials"in s.prototype,I={...je,signal:me,method:_.toUpperCase(),headers:le.normalize().toJSON(),body:X,duplex:"half",credentials:R?ae:void 0};Z=d&&new s(N,I);let te=await(d?xe(Z,je):xe(N,I));const Ee=x&&(V==="stream"||V==="response");if(x&&(H||Ee&&re)){const j={};["status","statusText","headers"].forEach(W=>{j[W]=te[W]});const P=L.toFiniteNumber(te.headers.get("content-length")),[J,Q]=H&&P0(P,Hs(G0(H),!0))||[];te=new o(F0(te.body,K0,J,()=>{Q&&Q(),re&&re()}),j)}V=V||"text";let _e=await v[L.findKey(v,V)||"text"](te,k);return!Ee&&re&&re(),await new Promise((j,P)=>{_1(j,P,{data:_e,headers:jt.from(te.headers),status:te.status,statusText:te.statusText,config:k,request:Z})})}catch(R){throw re&&re(),R&&R.name==="TypeError"&&/Load failed|fetch/i.test(R.message)?Object.assign(new ue("Network Error",ue.ERR_NETWORK,k,Z,R&&R.response),{cause:R.cause||R}):ue.from(R,R&&R.code,k,Z,R&&R.response)}}},f5=new Map,A1=a=>{let r=a&&a.env||{};const{fetch:s,Request:o,Response:i}=r,d=[o,i,s];let h=d.length,m=h,g,b,x=f5;for(;m--;)g=d[m],b=x.get(g),b===void 0&&x.set(g,b=m?new Map:d5(r)),x=b;return b};A1();const qd={http:_w,xhr:r5,fetch:{get:A1}};L.forEach(qd,(a,r)=>{if(a){try{Object.defineProperty(a,"name",{value:r})}catch{}Object.defineProperty(a,"adapterName",{value:r})}});const Z0=a=>`- ${a}`,h5=a=>L.isFunction(a)||a===null||a===!1;function p5(a,r){a=L.isArray(a)?a:[a];const{length:s}=a;let o,i;const d={};for(let h=0;h<s;h++){o=a[h];let m;if(i=o,!h5(o)&&(i=qd[(m=String(o)).toLowerCase()],i===void 0))throw new ue(`Unknown adapter '${m}'`);if(i&&(L.isFunction(i)||(i=i.get(r))))break;d[m||"#"+h]=i}if(!i){const h=Object.entries(d).map(([g,b])=>`adapter ${g} `+(b===!1?"is not supported by the environment":"is not available in the build"));let m=s?h.length>1?`since :
`+h.map(Z0).join(`
`):" "+Z0(h[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+m,"ERR_NOT_SUPPORT")}return i}const T1={getAdapter:p5,adapters:qd};function Fu(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new Zr(null,a)}function J0(a){return Fu(a),a.headers=jt.from(a.headers),a.data=Xu.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),T1.getAdapter(a.adapter||Ir.adapter,a)(a).then(function(o){return Fu(a),o.data=Xu.call(a,a.transformResponse,o),o.headers=jt.from(o.headers),o},function(o){return k1(o)||(Fu(a),o&&o.response&&(o.response.data=Xu.call(a,a.transformResponse,o.response),o.response.headers=jt.from(o.response.headers))),Promise.reject(o)})}const R1="1.15.0",to={};["object","boolean","number","function","string","symbol"].forEach((a,r)=>{to[a]=function(o){return typeof o===a||"a"+(r<1?"n ":" ")+a}});const W0={};to.transitional=function(r,s,o){function i(d,h){return"[Axios v"+R1+"] Transitional option '"+d+"'"+h+(o?". "+o:"")}return(d,h,m)=>{if(r===!1)throw new ue(i(h," has been removed"+(s?" in "+s:"")),ue.ERR_DEPRECATED);return s&&!W0[h]&&(W0[h]=!0,console.warn(i(h," has been deprecated since v"+s+" and will be removed in the near future"))),r?r(d,h,m):!0}};to.spelling=function(r){return(s,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function m5(a,r,s){if(typeof a!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const o=Object.keys(a);let i=o.length;for(;i-- >0;){const d=o[i],h=r[d];if(h){const m=a[d],g=m===void 0||h(m,d,a);if(g!==!0)throw new ue("option "+d+" must be "+g,ue.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new ue("Unknown option "+d,ue.ERR_BAD_OPTION)}}const As={assertOptions:m5,validators:to},Ft=As.validators;let Ua=class{constructor(r){this.defaults=r||{},this.interceptors={request:new Y0,response:new Y0}}async request(r,s){try{return await this._request(r,s)}catch(o){if(o instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const d=(()=>{if(!i.stack)return"";const h=i.stack.indexOf(`
`);return h===-1?"":i.stack.slice(h+1)})();try{if(!o.stack)o.stack=d;else if(d){const h=d.indexOf(`
`),m=h===-1?-1:d.indexOf(`
`,h+1),g=m===-1?"":d.slice(m+1);String(o.stack).endsWith(g)||(o.stack+=`
`+d)}}catch{}}throw o}}_request(r,s){typeof r=="string"?(s=s||{},s.url=r):s=r||{},s=Ba(this.defaults,s);const{transitional:o,paramsSerializer:i,headers:d}=s;o!==void 0&&As.assertOptions(o,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean),legacyInterceptorReqResOrdering:Ft.transitional(Ft.boolean)},!1),i!=null&&(L.isFunction(i)?s.paramsSerializer={serialize:i}:As.assertOptions(i,{encode:Ft.function,serialize:Ft.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),As.assertOptions(s,{baseUrl:Ft.spelling("baseURL"),withXsrfToken:Ft.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let h=d&&L.merge(d.common,d[s.method]);d&&L.forEach(["delete","get","head","post","put","patch","common"],k=>{delete d[k]}),s.headers=jt.concat(h,d);const m=[];let g=!0;this.interceptors.request.forEach(function(N){if(typeof N.runWhen=="function"&&N.runWhen(s)===!1)return;g=g&&N.synchronous;const _=s.transitional||Bd;_&&_.legacyInterceptorReqResOrdering?m.unshift(N.fulfilled,N.rejected):m.push(N.fulfilled,N.rejected)});const b=[];this.interceptors.response.forEach(function(N){b.push(N.fulfilled,N.rejected)});let x,v=0,E;if(!g){const k=[J0.bind(this),void 0];for(k.unshift(...m),k.push(...b),E=k.length,x=Promise.resolve(s);v<E;)x=x.then(k[v++],k[v++]);return x}E=m.length;let M=s;for(;v<E;){const k=m[v++],N=m[v++];try{M=k(M)}catch(_){N.call(this,_);break}}try{x=J0.call(this,M)}catch(k){return Promise.reject(k)}for(v=0,E=b.length;v<E;)x=x.then(b[v++],b[v++]);return x}getUri(r){r=Ba(this.defaults,r);const s=N1(r.baseURL,r.url,r.allowAbsoluteUrls);return j1(s,r.params,r.paramsSerializer)}};L.forEach(["delete","get","head","options"],function(r){Ua.prototype[r]=function(s,o){return this.request(Ba(o||{},{method:r,url:s,data:(o||{}).data}))}});L.forEach(["post","put","patch"],function(r){function s(o){return function(d,h,m){return this.request(Ba(m||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}Ua.prototype[r]=s(),Ua.prototype[r+"Form"]=s(!0)});let g5=class O1{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(d){s=d});const o=this;this.promise.then(i=>{if(!o._listeners)return;let d=o._listeners.length;for(;d-- >0;)o._listeners[d](i);o._listeners=null}),this.promise.then=i=>{let d;const h=new Promise(m=>{o.subscribe(m),d=m}).then(i);return h.cancel=function(){o.unsubscribe(d)},h},r(function(d,h,m){o.reason||(o.reason=new Zr(d,h,m),s(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const s=this._listeners.indexOf(r);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const r=new AbortController,s=o=>{r.abort(o)};return this.subscribe(s),r.signal.unsubscribe=()=>this.unsubscribe(s),r.signal}static source(){let r;return{token:new O1(function(i){r=i}),cancel:r}}};function b5(a){return function(s){return a.apply(null,s)}}function y5(a){return L.isObject(a)&&a.isAxiosError===!0}const gd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(gd).forEach(([a,r])=>{gd[r]=a});function M1(a){const r=new Ua(a),s=f1(Ua.prototype.request,r);return L.extend(s,Ua.prototype,r,{allOwnKeys:!0}),L.extend(s,r,null,{allOwnKeys:!0}),s.create=function(i){return M1(Ba(a,i))},s}const qe=M1(Ir);qe.Axios=Ua;qe.CanceledError=Zr;qe.CancelToken=g5;qe.isCancel=k1;qe.VERSION=R1;qe.toFormData=eo;qe.AxiosError=ue;qe.Cancel=qe.CanceledError;qe.all=function(r){return Promise.all(r)};qe.spread=b5;qe.isAxiosError=y5;qe.mergeConfig=Ba;qe.AxiosHeaders=jt;qe.formToJSON=a=>E1(L.isHTMLForm(a)?new FormData(a):a);qe.getAdapter=T1.getAdapter;qe.HttpStatusCode=gd;qe.default=qe;const{Axios:kE,AxiosError:_E,CanceledError:NE,isCancel:zE,CancelToken:AE,VERSION:TE,all:RE,Cancel:OE,isAxiosError:ME,spread:UE,toFormData:DE,AxiosHeaders:LE,HttpStatusCode:BE,formToJSON:HE,getAdapter:qE,mergeConfig:YE}=qe,Ur="https://lms-backend-7btf.onrender.com",x5={syncUser:async(a,r)=>(await qe.post(`${Ur}/api/auth/sync`,r,{headers:{Authorization:`Bearer ${a}`}})).data},Ts={getAll:async(a={})=>(await qe.get(`${Ur}/api/courses`,{params:a})).data,getById:async a=>(await qe.get(`${Ur}/api/courses/${a}`)).data,enroll:async(a,r)=>(await qe.post(`${Ur}/api/courses/${a}/enroll`,{clerkId:r})).data,checkEnrollment:async(a,r)=>(await qe.get(`${Ur}/api/courses/${a}/enrollment-status`,{params:{clerkId:r}})).data},v5=()=>{const{isSignedIn:a,user:r,isLoaded:s}=Ol(),{getToken:o}=Kg(),[i,d]=S.useState(null),[h,m]=S.useState(!0),[g,b]=S.useState(null);return S.useEffect(()=>{if(!s)return;if(!a||!r){d(null),m(!1);return}(async()=>{try{m(!0);const v=await o(),E=await x5.syncUser(v,{clerkId:r.id,name:r.fullName||r.firstName||"User",email:r.primaryEmailAddress?.emailAddress||"",avatar:r.imageUrl||""});d(E.user)}catch(v){console.error("Failed to sync user:",v.message),b(v.message)}finally{m(!1)}})()},[a,s,r]),{dbUser:i,loading:h,error:g,isSignedIn:a,user:r}};const U1=(...a)=>a.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim();const S5=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const w5=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase());const eg=a=>{const r=w5(a);return r.charAt(0).toUpperCase()+r.slice(1)};var j5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const E5=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};const C5=S.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:i="",children:d,iconNode:h,...m},g)=>S.createElement("svg",{ref:g,...j5,width:r,height:r,stroke:a,strokeWidth:o?Number(s)*24/Number(r):s,className:U1("lucide",i),...!d&&!E5(m)&&{"aria-hidden":"true"},...m},[...h.map(([b,x])=>S.createElement(b,x)),...Array.isArray(d)?d:[d]]));const ce=(a,r)=>{const s=S.forwardRef(({className:o,...i},d)=>S.createElement(C5,{ref:d,iconNode:r,className:U1(`lucide-${S5(eg(a))}`,`lucide-${a}`,o),...i}));return s.displayName=eg(a),s};const k5=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],D1=ce("arrow-left",k5);const _5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Br=ce("arrow-right",_5);const N5=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],qr=ce("award",N5);const z5=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],tg=ce("badge-check",z5);const A5=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],L1=ce("book-marked",A5);const T5=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],tt=ce("book-open",T5);const R5=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],B1=ce("chart-column",R5);const O5=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Yd=ce("chevron-down",O5);const M5=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Rs=ce("chevron-right",M5);const U5=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],H1=ce("chevron-up",U5);const D5=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Al=ce("circle-check-big",D5);const L5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],B5=ce("circle-check",L5);const H5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ng=ce("circle",H5);const q5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Da=ce("clock",q5);const Y5=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],q1=ce("code-xml",Y5);const V5=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],Y1=ce("contact",V5);const P5=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],G5=ce("credit-card",P5);const X5=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],ag=ce("flame",X5);const F5=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],K5=ce("funnel",F5);const Q5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Vd=ce("globe",Q5);const $5=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],zn=ce("graduation-cap",$5);const I5=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],Z5=ce("heart-handshake",I5);const J5=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Pd=ce("heart",J5);const W5=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],V1=ce("house",W5);const ej=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],tj=ce("instagram",ej);const nj=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],P1=ce("linkedin",nj);const aj=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],G1=ce("loader",aj);const lj=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],bd=ce("lock",lj);const rj=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],no=ce("mail",rj);const ij=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],X1=ce("map-pin",ij);const sj=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],F1=ce("megaphone",sj);const oj=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],ws=ce("message-circle",oj);const cj=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],uj=ce("message-square",cj);const dj=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],K1=ce("palette",dj);const fj=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Gd=ce("phone",fj);const hj=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],yd=ce("play",hj);const pj=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],xd=ce("search",pj);const mj=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Q1=ce("send",mj);const gj=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],lg=ce("shield-check",gj);const bj=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],$1=ce("shield",bj);const yj=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],xj=ce("sliders-horizontal",yj);const vj=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],vd=ce("sparkles",vj);const Sj=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nn=ce("star",Sj);const wj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],jj=ce("target",wj);const Ej=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Xd=ce("trending-up",Ej);const Cj=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],I1=ce("twitter",Cj);const kj=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Z1=ce("user",kj);const _j=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],qa=ce("users",_j);const Nj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Sd=ce("x",Nj);const zj=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Aj=ce("youtube",zj);const Tj=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Rj=ce("zap",Tj),Oj=[{name:"Home",icon:V1,href:"/"},{name:"Courses",icon:tt,href:"/courses"},{name:"About",icon:L1,href:"/about"},{name:"Faculty",icon:qa,href:"/faculty"},{name:"Contact",icon:Y1,href:"/contact"}],Mj=[{value:"12K+",label:"Students",icon:qa},{value:"240+",label:"Courses",icon:tt},{value:"94%",label:"Success",icon:qr},{value:"58",label:"Countries",icon:Vd}],Uj=[{icon:Rj,title:"Learn at Your Pace",desc:"Lifetime access. Resume exactly where you left off, on any device, any time."},{icon:$1,title:"Expert Instructors",desc:"Every teacher is a vetted industry professional with real shipped products."},{icon:jj,title:"Career-Ready Skills",desc:"Curriculum built around what employers actually hire for — zero fluff."},{icon:Pd,title:"Community Support",desc:"Cohort peers, alumni mentors and weekly live Q&A sessions included."}],Dj=[{label:"Development",icon:q1,count:4,color:"#0e7490",bg:"#e0f7fa"},{label:"Design",icon:K1,count:3,color:"#0f766e",bg:"#d1fae5"},{label:"Data",icon:B1,count:3,color:"#0369a1",bg:"#dbeafe"},{label:"Marketing",icon:F1,count:2,color:"#7c3aed",bg:"#ede9fe"}],Lj=[{id:"1",name:"Full Stack Web Development",teacher:"Arjun Mehta",image:"https://picsum.photos/seed/c1/480/270",cat:"Development",level:"Intermediate",rating:4.8,students:4820,isFree:!1,price:{original:2999,sale:1499},hot:!0},{id:"2",name:"UI/UX Design Mastery",teacher:"Priya Sharma",image:"https://picsum.photos/seed/c2/480/270",cat:"Design",level:"Beginner",rating:4.9,students:2310,isFree:!1,price:{original:1999,sale:null},hot:!0},{id:"3",name:"Data Science with Python",teacher:"Rohit Verma",image:"https://picsum.photos/seed/c3/480/270",cat:"Data",level:"Advanced",rating:4.7,students:6100,isFree:!0,price:null,hot:!1},{id:"4",name:"React & Next.js Bootcamp",teacher:"Sneha Patel",image:"https://picsum.photos/seed/c4/480/270",cat:"Development",level:"Intermediate",rating:4.8,students:3750,isFree:!1,price:{original:3499,sale:2199},hot:!0}],Bj=[{name:"Aisha Rahman",role:"Frontend Engineer @ Google",avatar:"https://i.pravatar.cc/80?img=47",text:"LearnHub changed my career completely. Real-world projects, genuine mentorship — I landed my dream job in 5 months.",rating:5},{name:"Marcus Chen",role:"Data Scientist @ Stripe",avatar:"https://i.pravatar.cc/80?img=12",text:"Switched careers at 34 with zero ML background. The pacing was perfect — challenging but never overwhelming.",rating:5},{name:"Sofia Alvarez",role:"UX Designer @ Figma",avatar:"https://i.pravatar.cc/80?img=29",text:"Most thoughtfully designed course I've ever taken. Real briefs, real feedback, a portfolio I'm proud of.",rating:5}],Hj=a=>{if(a.isFree||!a.price)return{free:!0};const{original:r,sale:s}=a.price;return s?{free:!1,display:`₹${s}`,original:`₹${r}`,pct:Math.round((r-s)/r*100)}:{free:!1,display:`₹${r}`,original:null,pct:null}},qj=a=>a>=1e3?`${(a/1e3).toFixed(1)}k`:String(a);function Cl(a=.15){const r=S.useRef(null),[s,o]=S.useState(!1);return S.useEffect(()=>{const i=new IntersectionObserver(([d])=>{d.isIntersecting&&o(!0)},{threshold:a});return r.current&&i.observe(r.current),()=>i.disconnect()},[a]),[r,s]}const Ku=({n:a=5,size:r=12})=>f.jsx("div",{style:{display:"flex",gap:2},children:[1,2,3,4,5].map(s=>f.jsx(Nn,{size:r,fill:s<=a?"#f59e0b":"none",color:s<=a?"#f59e0b":"#cbd5e1"},s))});function Yj(){const a=Pr(),{openSignUp:r}=Yg(),{isSignedIn:s,isLoaded:o}=Ol(),[i,d]=S.useState(!1);S.useEffect(()=>{const U=()=>d(window.scrollY>10);return window.addEventListener("scroll",U,{passive:!0}),()=>window.removeEventListener("scroll",U)},[]);const[h,m]=Cl(.3),[g,b]=Cl(.15),[x,v]=Cl(.15),[E,M]=Cl(.1),[k,N]=Cl(.1),[_,X]=Cl(.2);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("nav",{className:`h-nav${i?" scrolled":""}`,children:[f.jsxs(St,{to:"/",className:"h-brand",children:[f.jsx("div",{className:"h-brand-icon",children:f.jsx(zn,{size:17,color:"#fff"})}),f.jsxs("div",{children:[f.jsx("div",{className:"h-brand-name",children:"LearnHub"}),f.jsx("div",{className:"h-brand-sub",children:"Learning Platform"})]})]}),f.jsx("div",{className:"h-pill",children:Oj.map(({name:U,icon:q,href:F})=>f.jsxs(St,{to:F,className:({isActive:H})=>`h-link${H?" active":""}`,children:[f.jsx(q,{size:14}),f.jsx("span",{children:U})]},U))}),f.jsx("div",{className:"h-auth",children:o?s?f.jsx("div",{className:"h-userBtn",children:f.jsx(t1,{afterSignOutUrl:"/"})}):f.jsx("button",{type:"button",className:"h-signup",onClick:()=>r({}),children:"Create Account"}):f.jsx("div",{className:"h-auth-skeleton"})})]}),f.jsxs("div",{className:"h-page",children:[f.jsxs("section",{className:"h-hero",children:[f.jsx("div",{className:"h-blob h-blob-1"}),f.jsx("div",{className:"h-blob h-blob-2"}),[{Icon:q1,color:"#0e7490",bg:"#e0f7fa",top:"15%",left:"5%",size:19,d:0},{Icon:K1,color:"#0f766e",bg:"#d1fae5",top:"62%",left:"3%",size:17,d:.5},{Icon:B1,color:"#0369a1",bg:"#dbeafe",top:"18%",left:"89%",size:19,d:.35},{Icon:F1,color:"#7c3aed",bg:"#ede9fe",top:"74%",left:"92%",size:16,d:.8},{Icon:Nn,color:"#f59e0b",bg:"#fef3c7",top:"40%",left:"2%",size:15,d:1}].map(({Icon:U,color:q,bg:F,top:H,left:$,size:V,d:le},ae)=>f.jsx("div",{className:"h-fi",style:{top:H,left:$,background:F,animationDelay:`${le}s, ${le+.6}s`},children:f.jsx(U,{size:V,color:q,strokeWidth:1.8})},ae)),f.jsxs("div",{className:"h-hero-grid",children:[f.jsxs("div",{className:"h-hero-left",children:[f.jsxs("div",{className:"h-announce",children:[f.jsx("div",{className:"h-ann-dot",children:f.jsx(vd,{size:11,color:"#fff"})}),"New cohort starting April 2026 — Limited seats",f.jsx(Rs,{size:13})]}),f.jsxs("h1",{className:"h-hero-title",children:["Learn Skills That",f.jsx("br",{}),"Open ",f.jsx("em",{children:"Real Doors"})]}),f.jsx("p",{className:"h-hero-sub",children:"Join 12,000+ learners building real careers through project-based courses taught by industry experts. Code, design, data — every path covered."}),f.jsx("div",{className:"h-checks",children:["Project-based learning","Expert instructors","Lifetime access","Career support"].map(U=>f.jsxs("div",{className:"h-check",children:[f.jsx(Al,{size:15,color:"#0e7490"}),U]},U))}),f.jsxs("div",{className:"h-ctas",children:[f.jsxs(St,{to:"/courses",className:"h-btn-p",children:[f.jsx(tt,{size:16})," Explore Courses ",f.jsx(Br,{size:14})]}),f.jsxs(St,{to:"/about",className:"h-btn-s",children:[f.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg,#0e7490,#06b6d4)",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(yd,{size:10,color:"#fff",fill:"#fff"})}),"How It Works"]})]})]}),f.jsxs("div",{className:"h-hero-right",children:[f.jsxs("div",{className:"h-card",children:[f.jsx("span",{className:"h-card-tag",children:"🔥 Trending"}),f.jsx("img",{src:"https://picsum.photos/seed/hero/600/340",alt:"Course",className:"h-card-img"}),f.jsx("div",{className:"h-card-title",children:"Full Stack Web Development"}),f.jsxs("div",{className:"h-card-meta",children:[f.jsx(Ku,{n:5,size:13}),f.jsx("span",{children:"4.8 · 4,820 students · 42h"})]})]}),f.jsxs("div",{className:"h-chip h-chip-1",children:[f.jsx("div",{className:"h-chip-ico",style:{background:"#d1fae5"},children:f.jsx(zn,{size:14,color:"#0f766e"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:".81rem",fontWeight:600},children:"12K+"}),f.jsx("div",{style:{fontSize:".63rem",color:"var(--slate-lt)"},children:"Students"})]})]}),f.jsxs("div",{className:"h-chip h-chip-2",children:[f.jsx("div",{className:"h-chip-ico",style:{background:"#fef3c7"},children:f.jsx(Nn,{size:14,color:"#f59e0b",fill:"#f59e0b"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:".81rem",fontWeight:600},children:"4.9/5"}),f.jsx("div",{style:{fontSize:".63rem",color:"var(--slate-lt)"},children:"Rating"})]})]})]})]})]}),f.jsx("div",{className:"h-stats",ref:h,children:f.jsx("div",{className:"h-stats-grid",children:Mj.map(({value:U,label:q,icon:F},H)=>f.jsxs("div",{className:"h-st",children:[f.jsx("div",{className:"h-st-ico",children:f.jsx(F,{size:16})}),f.jsx("div",{className:`h-st-val${m?" on":""}`,style:{transitionDelay:`${H*.1}s`},children:U}),f.jsx("div",{className:"h-st-lbl",children:q})]},q))})}),f.jsxs("section",{className:"h-features",ref:g,children:[f.jsxs("div",{className:"h-sec-head",children:[f.jsxs("div",{className:"h-sec-badge",children:[f.jsx(vd,{size:11})," Why LearnHub"]}),f.jsxs("h2",{className:"h-sec-title",children:["Built for ",f.jsx("em",{children:"Real Growth"})]}),f.jsx("p",{className:"h-sec-sub",children:"Everything you need to go from beginner to career-ready, in one place."})]}),f.jsx("div",{className:"h-feat-grid",children:Uj.map(({icon:U,title:q,desc:F},H)=>f.jsxs("div",{className:`h-feat-card${b?" on":""}`,style:{transitionDelay:`${H*.09}s`},children:[f.jsx("div",{className:"h-feat-ico",children:f.jsx(U,{size:20})}),f.jsx("div",{className:"h-feat-title",children:q}),f.jsx("div",{className:"h-feat-desc",children:F})]},q))})]}),f.jsxs("section",{className:"h-cats",ref:x,children:[f.jsxs("div",{className:"h-sec-head",children:[f.jsxs("div",{className:"h-sec-badge",children:[f.jsx(tt,{size:11})," Explore Topics"]}),f.jsxs("h2",{className:"h-sec-title",children:["Pick Your ",f.jsx("em",{children:"Path"})]}),f.jsx("p",{className:"h-sec-sub",children:"Four career tracks, hundreds of hours, all on one platform."})]}),f.jsx("div",{className:"h-cat-grid",children:Dj.map(({label:U,icon:q,count:F,color:H,bg:$},V)=>f.jsxs(St,{to:"/courses",className:`h-cat-card${v?" on":""}`,style:{transitionDelay:`${V*.09}s`},children:[f.jsx("div",{className:"h-cat-ico",style:{background:$},children:f.jsx(q,{size:22,color:H})}),f.jsxs("div",{children:[f.jsx("div",{className:"h-cat-name",children:U}),f.jsxs("div",{className:"h-cat-cnt",children:[F," courses available"]})]}),f.jsx(Rs,{size:15,className:"h-cat-arr"})]},U))})]}),f.jsxs("section",{className:"h-courses",ref:E,children:[f.jsxs("div",{className:"h-sec-head",children:[f.jsxs("div",{className:"h-sec-badge",children:[f.jsx(ag,{size:11})," Popular Now"]}),f.jsxs("h2",{className:"h-sec-title",children:["Top ",f.jsx("em",{children:"Courses"})]}),f.jsx("p",{className:"h-sec-sub",children:"Hand-picked, loved by thousands of learners worldwide."})]}),f.jsx("div",{className:"h-cr-grid",children:Lj.map((U,q)=>{const F=Hj(U);return f.jsxs("article",{className:`h-cr-card${M?" on":""}`,style:{transitionDelay:`${q*.08}s`},onClick:()=>a("/courses"),role:"button",tabIndex:0,onKeyDown:H=>{H.key==="Enter"&&a("/courses")},children:[f.jsxs("div",{className:"h-cr-thumb",children:[f.jsx("img",{src:U.image,alt:U.name,loading:"lazy"}),f.jsxs("div",{className:"h-cr-ov",children:[f.jsx(tt,{size:18,color:"#fff"}),f.jsx("span",{children:"View Course"})]}),f.jsxs("div",{className:"h-cr-bgs",children:[F.free&&f.jsxs("span",{className:"h-cr-bg h-cr-bg-free",children:[f.jsx(tg,{size:9})," Free"]}),F.pct&&f.jsxs("span",{className:"h-cr-bg h-cr-bg-sale",children:[f.jsx(Xd,{size:9})," ",F.pct,"% off"]}),U.hot&&f.jsxs("span",{className:"h-cr-bg h-cr-bg-hot",children:[f.jsx(ag,{size:9})," Hot"]})]}),f.jsx("span",{className:"h-cr-lvl",children:U.level})]}),f.jsxs("div",{className:"h-cr-body",children:[f.jsx("div",{className:"h-cr-cat",children:U.cat}),f.jsx("div",{className:"h-cr-name",children:U.name}),f.jsx("div",{className:"h-cr-teacher",children:U.teacher}),f.jsxs("div",{className:"h-cr-meta",children:[f.jsxs("span",{className:"h-cr-mi",children:[f.jsx(Da,{size:10}),U.duration??30,"h"]}),f.jsxs("span",{className:"h-cr-mi",children:[f.jsx(qa,{size:10}),qj(U.students)]}),f.jsxs("span",{className:"h-cr-mi h-cr-rat",children:[f.jsx(Nn,{size:10,fill:"#f59e0b",color:"#f59e0b"}),U.rating]})]}),f.jsxs("div",{className:"h-cr-foot",children:[f.jsx(Ku,{n:Math.round(U.rating),size:12}),F.free?f.jsx("span",{className:"h-pf",children:"Free"}):f.jsxs("span",{children:[f.jsx("span",{className:"h-pc",children:F.display}),F.original&&f.jsx("span",{className:"h-po",children:F.original})]})]})]})]},U.id)})}),f.jsx("div",{style:{textAlign:"center"},children:f.jsxs(St,{to:"/courses",className:"h-btn-p",style:{display:"inline-flex"},children:[f.jsx(tt,{size:15})," View All Courses ",f.jsx(Br,{size:14})]})})]}),f.jsxs("section",{className:"h-tm",ref:k,children:[f.jsxs("div",{className:"h-sec-head",style:{position:"relative",zIndex:1},children:[f.jsxs("div",{className:"h-sec-badge",style:{background:"rgba(14,116,144,.14)",color:"#67e8f9",borderColor:"rgba(14,116,144,.28)"},children:[f.jsx(Nn,{size:11,fill:"#67e8f9",color:"#67e8f9"})," Student Stories"]}),f.jsxs("h2",{className:"h-sec-title",style:{color:"#fff"},children:["Real People, ",f.jsx("em",{children:"Real Results"})]}),f.jsx("p",{className:"h-sec-sub",style:{color:"var(--slate-lt)"},children:"12,000+ learners transformed their careers. Here's what they say."})]}),f.jsx("div",{className:"h-tm-grid",children:Bj.map((U,q)=>f.jsxs("div",{className:`h-tm-card${N?" on":""}`,style:{transitionDelay:`${q*.12}s`},children:[f.jsx(Ku,{n:U.rating,size:13}),f.jsxs("p",{className:"h-tm-text",children:['"',U.text,'"']}),f.jsxs("div",{className:"h-tm-author",children:[f.jsx("img",{src:U.avatar,alt:U.name,className:"h-tm-av"}),f.jsxs("div",{children:[f.jsx("div",{className:"h-tm-name",children:U.name}),f.jsx("div",{className:"h-tm-role",children:U.role})]})]})]},U.name))})]}),f.jsx("section",{className:"h-cta",ref:_,children:f.jsxs("div",{className:`h-cta-inner${X?" on":""}`,children:[f.jsxs("div",{className:"h-sec-badge",style:{marginBottom:14},children:[f.jsx(zn,{size:11})," Start Today"]}),f.jsxs("h2",{className:"h-cta-title",children:["Your Next Chapter",f.jsx("br",{}),"Starts ",f.jsx("em",{children:"Here"})]}),f.jsx("p",{className:"h-cta-sub",children:"Join thousands who chose LearnHub to build real skills, gain confidence, and land the careers they deserve."}),f.jsxs("div",{className:"h-cta-btns",children:[f.jsxs(St,{to:"/courses",className:"h-btn-p",children:[f.jsx(tt,{size:16})," Get Started Free ",f.jsx(Br,{size:14})]}),f.jsxs(St,{to:"/faculty",className:"h-btn-s",children:["Meet Instructors ",f.jsx(Rs,{size:13})]})]}),f.jsxs("p",{className:"h-cta-note",children:[f.jsx(tg,{size:13,color:"#0e7490"})," No credit card required · Free courses available"]})]})})]})]})}const Vj=[{name:"Home",icon:V1,href:"/"},{name:"Courses",icon:tt,href:"/courses"},{name:"About",icon:L1,href:"/about"},{name:"Faculty",icon:qa,href:"/faculty"},{name:"Contact",icon:Y1,href:"/contact"}],Pj=()=>{const{openSignUp:a}=Yg(),{isSignedIn:r}=Ol(),{getToken:s}=Kg(),[o,i]=S.useState(!1),[d,h]=S.useState(0),[m,g]=S.useState(!1),[b,x]=S.useState(!0);return S.useRef(null),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsx("nav",{className:["lms-navbar",b?"":"hidden",m?"scrolled":""].filter(Boolean).join(" "),children:f.jsxs("div",{className:"lms-inner",children:[f.jsxs(St,{to:"/",className:"lms-logo",children:[f.jsx("div",{className:"lms-logo-icon",children:f.jsx(zn,{size:18,color:"#fff"})}),f.jsxs("div",{children:[f.jsx("div",{className:"lms-logo-text",children:"LMS"}),f.jsx("div",{className:"lms-logo-sub",children:"Learning Platform"})]})]}),f.jsx("div",{className:"lms-nav-pill",children:Vj.map(v=>{const E=v.icon;return f.jsxs(St,{to:v.href,className:({isActive:M})=>`lms-nav-link${M?" active":""}`,children:[f.jsx(E,{size:14}),f.jsx("span",{children:v.name})]},v.name)})}),f.jsx("div",{className:"lms-auth",children:r?f.jsx("div",{className:"lms-user-btn",children:f.jsx(t1,{afterSignOutUrl:"/"})}):f.jsx("button",{type:"button",onClick:()=>a({}),className:"lms-signup-btn",children:f.jsx("span",{children:"Create Account"})})})]})})]})},Gj=[{name:"Twitter",Icon:I1,href:"#",color:"#1da1f2",bg:"rgba(29,161,242,0.12)"},{name:"Instagram",Icon:tj,href:"https://www.instagram.com/mr.sushant_pathak?igsh=Z2p1cmp4amFmdmcy",color:"#e1306c",bg:"rgba(225,48,108,0.12)"},{name:"LinkedIn",Icon:P1,href:"https://www.linkedin.com/in/sushant-ranjan-8926b8323?utm_source=share_via&utm_content=profile&utm_medium=member_android",color:"#0a66c2",bg:"rgba(10,102,194,0.12)"},{name:"YouTube",Icon:Aj,href:"#",color:"#ff0000",bg:"rgba(255,0,0,0.10)"}],Xj=[{heading:"Platform",icon:tt,links:[{label:"Browse Courses",to:"/courses"},{label:"Meet Faculty",to:"/faculty"},{label:"About Us",to:"/about"},{label:"Contact",to:"/contact"},{label:"Become Instructor",to:"/faculty"}]},{heading:"Community",icon:qa,links:[{label:"Student Stories",to:"/about"},{label:"Events & Webinars",to:"/contact"},{label:"Blog & Articles",to:"/"},{label:"Career Resources",to:"/"},{label:"Referral Program",to:"/"}]},{heading:"Support",icon:Z5,links:[{label:"Help Center",to:"/"},{label:"FAQs",to:"/"},{label:"Privacy Policy",to:"/"},{label:"Terms of Service",to:"/"},{label:"Cookie Settings",to:"/"}]}],Fj=[{Icon:no,value:"sushantpathak2028@gmail.com",href:"mailto:hello@learnhub.in"},{Icon:Gd,value:"+91 705079 04068",href:"tel:+917050794068"},{Icon:X1,value:"Rajkot, Gujarat, India",href:null}],Kj=[{value:"12K+",label:"Students"},{value:"240+",label:"Courses"},{value:"94%",label:"Success Rate"},{value:"58",label:"Countries"}],Qj=()=>{const[a,r]=S.useState(""),[s,o]=S.useState("idle"),[i,d]=S.useState(""),h=m=>{if(m.preventDefault(),!a.trim()){d("Please enter your email.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)){d("Please enter a valid email.");return}d(""),o("loading"),setTimeout(()=>{o("success"),r("")},1e3)};return f.jsxs("div",{className:"ft-newsletter",children:[f.jsxs("p",{className:"ft-newsletter-label",children:[f.jsx(Q1,{size:12})," Stay in the loop"]}),f.jsx("p",{className:"ft-newsletter-sub",children:"Get new course announcements, tips and career insights — no spam, ever."}),s==="success"?f.jsxs("div",{className:"ft-newsletter-success",children:[f.jsx(Pd,{size:14,fill:"#0e7490",color:"#0e7490"}),"You're subscribed! Thanks for joining."]}):f.jsxs("form",{onSubmit:h,noValidate:!0,className:"ft-newsletter-form",children:[f.jsxs("div",{className:"ft-newsletter-input-wrap",children:[f.jsx(no,{size:13,className:"ft-newsletter-icon"}),f.jsx("input",{type:"email",value:a,onChange:m=>{r(m.target.value),d("")},placeholder:"your@email.com",className:"ft-newsletter-input","aria-label":"Email address",disabled:s==="loading"})]}),i&&f.jsx("p",{className:"ft-newsletter-error",children:i}),f.jsx("button",{type:"submit",className:"ft-newsletter-btn",disabled:s==="loading",children:s==="loading"?f.jsx("span",{className:"ft-spinner"}):f.jsxs(f.Fragment,{children:[f.jsx(Br,{size:14})," Subscribe"]})})]})]})},$j=()=>{const a=new Date().getFullYear();return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("footer",{className:"ft-root",role:"contentinfo",children:[f.jsxs("div",{className:"ft-bg","aria-hidden":"true",children:[f.jsx("div",{className:"ft-bg-grid"}),f.jsx("div",{className:"ft-bg-glow-1"}),f.jsx("div",{className:"ft-bg-glow-2"})]}),f.jsx("div",{className:"ft-stats-band",children:f.jsx("div",{className:"ft-stats-inner",children:Kj.map(({value:r,label:s})=>f.jsxs("div",{className:"ft-stat-item",children:[f.jsx("div",{className:"ft-stat-val",children:r}),f.jsx("div",{className:"ft-stat-lbl",children:s})]},s))})}),f.jsxs("div",{className:"ft-body",children:[f.jsxs("div",{className:"ft-left",children:[f.jsxs(St,{to:"/",className:"ft-brand",children:[f.jsx("div",{className:"ft-brand-icon",children:f.jsx(zn,{size:18,color:"#fff"})}),f.jsxs("div",{children:[f.jsx("div",{className:"ft-brand-name",children:"LearnHub"}),f.jsx("div",{className:"ft-brand-tagline",children:"Learning Platform"})]})]}),f.jsx("p",{className:"ft-desc",children:"Empowering 12,000+ learners across 58 countries with expert-led courses in development, design, data & marketing."}),f.jsx("div",{className:"ft-contact-list",children:Fj.map(({Icon:r,value:s,href:o})=>o?f.jsxs("a",{href:o,className:"ft-contact-item",children:[f.jsx("div",{className:"ft-contact-icon",children:f.jsx(r,{size:13})}),s]},s):f.jsxs("div",{className:"ft-contact-item",children:[f.jsx("div",{className:"ft-contact-icon",children:f.jsx(r,{size:13})}),s]},s))}),f.jsx("div",{className:"ft-socials",children:Gj.map(({name:r,Icon:s,href:o,color:i,bg:d})=>f.jsxs("a",{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":r,className:"ft-social-btn",style:{background:d},children:[f.jsx(s,{size:15,color:i}),f.jsx("span",{className:"ft-social-tooltip",children:r})]},r))}),f.jsx(Qj,{})]}),f.jsx("div",{className:"ft-right",children:Xj.map(({heading:r,icon:s,links:o})=>f.jsxs("div",{className:"ft-link-group",children:[f.jsxs("div",{className:"ft-link-heading",children:[f.jsx("div",{className:"ft-link-heading-icon",children:f.jsx(s,{size:12})}),r]}),f.jsx("ul",{className:"ft-link-list",children:o.map(({label:i,to:d})=>f.jsx("li",{children:f.jsxs(St,{to:d,className:"ft-link",children:[f.jsx(Rs,{size:11,className:"ft-link-arrow"}),i]})},i))})]},r))})]}),f.jsx("div",{className:"ft-divider"}),f.jsxs("div",{className:"ft-bottom",children:[f.jsxs("p",{className:"ft-copyright",children:["© ",a," ",f.jsx("span",{children:"LearnHub"}),". All rights reserved."]}),f.jsx("nav",{className:"ft-bottom-links","aria-label":"Legal links",children:["Privacy Policy","Terms of Service","Cookie Policy","Sitemap"].map(r=>f.jsx(St,{to:"/",className:"ft-bottom-link",children:r},r))}),f.jsxs("p",{className:"ft-made-with",children:["Made with ",f.jsx(Pd,{size:11,fill:"#0e7490",color:"#0e7490"})," in India"]})]})]})]})},Ij=["All","Development","Design","Data","Marketing"],Zj=["All Levels","Beginner","Intermediate","Advanced"],Ra=8,Os=a=>a.isFree||!a.price||a.price.original==null&&a.price.sale==null||a.price.original===0,Rr=a=>{if(Os(a))return{type:"free"};const{original:r,sale:s}=a.price??{};return s!=null?{type:"sale",current:`₹${s}`,original:r>s?`₹${r}`:null}:r!=null?{type:"paid",current:`₹${r}`,original:null}:{type:"free"}},rg={Development:{bg:"#1e3a5f",accent:"#38bdf8",dot:"#0ea5e9"},Design:{bg:"#3b1f5e",accent:"#c084fc",dot:"#a855f7"},Data:{bg:"#1a3d2e",accent:"#34d399",dot:"#10b981"},Marketing:{bg:"#3d1f1f",accent:"#fb923c",dot:"#f97316"},default:{bg:"#1e293b",accent:"#94a3b8",dot:"#64748b"}},Jj=a=>rg[a]||rg.default;function Wj(){const a=Pr(),{user:r}=Ol(),[s,o]=S.useState([]),[i,d]=S.useState(!0),[h,m]=S.useState(null),[g,b]=S.useState(""),[x,v]=S.useState("All"),[E,M]=S.useState("All Levels"),[k,N]=S.useState("popularity"),[_,X]=S.useState(!1),[U,q]=S.useState(Ra),F=S.useCallback(async()=>{try{d(!0),m(null);const Z=new URLSearchParams;g&&Z.append("search",g),x!=="All"&&Z.append("category",x),E!=="All Levels"&&Z.append("level",E),k&&Z.append("sort",k);const re=await Ts.getAll(Object.fromEntries(Z));o(Array.isArray(re)?re:re.courses||[])}catch(Z){console.error("Error fetching courses:",Z),m("Failed to load courses. Please try again."),o([])}finally{d(!1)}},[g,x,E,k]);S.useEffect(()=>{F()},[F]);const H=(Z,re)=>{if(!r){a("/sign-in");return}a(re?`/courses/${Z}`:`/payment/${Z}`)},$=()=>q(Z=>Z+Ra),V=()=>{b(""),v("All"),M("All Levels"),N("popularity"),q(Ra)},ae=[...s.filter(Z=>{const re=Z.title?.toLowerCase().includes(g.toLowerCase())||Z.description?.toLowerCase().includes(g.toLowerCase()),he=x==="All"||Z.category?.toLowerCase()===x.toLowerCase(),R=E==="All Levels"||Z.level?.toLowerCase()===E.toLowerCase();return re&&he&&R})].sort((Z,re)=>{switch(k){case"price-low":return(Rr(Z).current?.replace("₹","")||0)-(Rr(re).current?.replace("₹","")||0);case"price-high":return(Rr(re).current?.replace("₹","")||0)-(Rr(Z).current?.replace("₹","")||0);case"rating":return(re.rating||0)-(Z.rating||0);case"newest":return new Date(re.createdAt)-new Date(Z.createdAt);default:return(re.enrollmentCount||0)-(Z.enrollmentCount||0)}}),je=ae.slice(0,U),xe=U<ae.length,me=(x!=="All"?1:0)+(E!=="All Levels"?1:0);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("div",{className:"cdp-root",children:[f.jsxs("div",{className:"cdp-hero",children:[f.jsx("div",{className:"cdp-hero-glow"}),f.jsxs("div",{className:"cdp-hero-label",children:[f.jsx(tt,{size:11}),"Course Catalog"]}),f.jsxs("h1",{className:"cdp-hero-title",children:["Expand Your ",f.jsx("span",{children:"Knowledge"})]}),f.jsx("p",{className:"cdp-hero-sub",children:"Explore our curated library of courses — from beginner fundamentals to advanced specializations."})]}),f.jsx("div",{className:"cdp-toolbar",children:f.jsxs("div",{className:"cdp-toolbar-inner",children:[f.jsxs("div",{className:"cdp-search-wrap",children:[f.jsx(xd,{size:16,className:"cdp-search-icon"}),f.jsx("input",{type:"text",placeholder:"Search courses, topics, instructors…",value:g,onChange:Z=>{b(Z.target.value),q(Ra)},className:"cdp-search"})]}),f.jsxs("button",{onClick:()=>X(!_),className:`cdp-filter-btn ${_||me>0?"active":""}`,children:[f.jsx(xj,{size:14}),"Filters",me>0&&f.jsx("span",{className:"cdp-filter-badge",children:me})]})]})}),f.jsx("div",{className:`cdp-filters ${_?"open":""}`,children:f.jsxs("div",{className:"cdp-filters-inner",children:[f.jsxs("div",{className:"cdp-filter-group",children:[f.jsx("label",{children:"Level"}),f.jsx("select",{className:"cdp-select",value:E,onChange:Z=>{M(Z.target.value),q(Ra)},children:Zj.map(Z=>f.jsx("option",{value:Z,children:Z},Z))})]}),f.jsxs("div",{className:"cdp-filter-group",children:[f.jsx("label",{children:"Sort By"}),f.jsxs("select",{className:"cdp-select",value:k,onChange:Z=>{N(Z.target.value),q(Ra)},children:[f.jsx("option",{value:"popularity",children:"Popularity"}),f.jsx("option",{value:"newest",children:"Newest"}),f.jsx("option",{value:"rating",children:"Rating"}),f.jsx("option",{value:"price-low",children:"Price: Low → High"}),f.jsx("option",{value:"price-high",children:"Price: High → Low"})]})]}),f.jsxs("div",{className:"cdp-filter-group",children:[f.jsx("label",{children:" "}),f.jsxs("button",{onClick:V,className:"cdp-reset-btn",children:[f.jsx(Sd,{size:13})," Reset all"]})]})]})}),f.jsx("div",{className:"cdp-pills",children:Ij.map(Z=>f.jsx("button",{className:`cdp-pill ${x===Z?"active":""}`,onClick:()=>{v(Z),q(Ra)},children:Z},Z))}),f.jsxs("div",{className:"cdp-main",children:[h&&f.jsxs("div",{className:"cdp-error",children:[f.jsx("span",{children:h}),f.jsx("button",{onClick:F,className:"cdp-retry-btn",children:"Retry"})]}),!i&&f.jsx("div",{className:"cdp-meta",children:f.jsxs("p",{className:"cdp-meta-count",children:["Showing ",f.jsx("strong",{children:je.length})," of ",f.jsx("strong",{children:ae.length})," courses"]})}),i&&f.jsxs("div",{className:"cdp-loading",children:[f.jsx(G1,{size:28,color:"#38bdf8",style:{animation:"spin 0.8s linear infinite"}}),f.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"}),f.jsx("span",{className:"cdp-loading-text",children:"Loading courses…"})]}),!i&&je.length>0&&f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"cdp-grid",children:je.map(Z=>{const re=Jj(Z.category),he=Rr(Z);return f.jsxs("div",{className:"cdp-card",children:[f.jsxs("div",{className:"cdp-card-thumb",style:{background:`linear-gradient(135deg, ${re.bg}, #0d1525)`},children:[Z.thumbnail?f.jsx("img",{src:Z.thumbnail,alt:Z.title,className:"cdp-card-thumb-bg"}):f.jsx("div",{className:"cdp-card-thumb-placeholder",style:{background:`linear-gradient(135deg, ${re.bg}, #080e1a)`},children:f.jsx(tt,{size:36,color:re.accent,style:{opacity:.4}})}),Os(Z)&&f.jsx("div",{className:"cdp-free-badge",children:"Free"})]}),f.jsxs("div",{className:"cdp-card-body",children:[Z.category&&f.jsxs("div",{className:"cdp-card-cat",style:{color:re.accent},children:[f.jsx("span",{className:"cdp-card-cat-dot",style:{background:re.dot}}),Z.category]}),f.jsx("h3",{className:"cdp-card-title",children:Z.title}),Z.rating&&f.jsxs("div",{className:"cdp-card-stars",children:[[...Array(5)].map((R,I)=>f.jsx(Nn,{className:`cdp-card-star ${I<Math.floor(Z.rating)?"filled":"empty"}`},I)),f.jsxs("span",{className:"cdp-card-enroll-count",children:["(",Z.enrollmentCount||0,")"]})]}),Z.instructor&&f.jsxs("div",{className:"cdp-card-instructor",children:[f.jsx(Z1,{size:12}),f.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Z.instructor})]})]}),f.jsxs("div",{className:"cdp-card-footer",children:[he.type==="free"?f.jsx("span",{className:"cdp-price-free",children:"Free"}):f.jsxs("div",{className:"cdp-price-paid",children:[f.jsx("span",{className:"cdp-price-current",children:he.current}),he.original&&f.jsx("span",{className:"cdp-price-original",children:he.original})]}),f.jsx("button",{className:"cdp-enroll-btn",onClick:()=>H(Z._id,Os(Z)),children:Os(Z)?"Enroll Free":"Buy Now"})]})]},Z._id)})}),xe&&f.jsx("div",{className:"cdp-load-wrap",children:f.jsx("button",{className:"cdp-load-btn",onClick:$,children:"Load more courses"})})]}),!i&&je.length===0&&f.jsxs("div",{className:"cdp-empty",children:[f.jsx("div",{className:"cdp-empty-icon",children:f.jsx(tt,{size:28,color:"#334155"})}),f.jsx("p",{className:"cdp-empty-title",children:"No courses found"}),f.jsx("p",{className:"cdp-empty-sub",children:"Try adjusting your filters or search term."})]})]})]})]})}const Or=a=>{if(!a&&a!==0)return"--";const r=Math.floor(a/60),s=a%60;return r>0?`${r}h ${s}m`:`${s}m`},Qu=a=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(a),eE=a=>{if(!a)return"";try{const r=String(a).trim();if(/\/embed\//.test(r))return r;const s=r.match(/[?&]v=([^&#]+)/);if(s?.[1])return`https://www.youtube.com/embed/${s[1]}`;const o=r.match(/youtu\.be\/([^?&#/]+)/);if(o?.[1])return`https://www.youtube.com/embed/${o[1]}`;if(/drive\.google\.com/.test(r)){const i=r.match(/\/file\/d\/([^/]+)/);if(i?.[1])return`https://drive.google.com/file/d/${i[1]}/preview`}return r}catch{return a}},tE=a=>!!(a&&/\.(mp4|webm|ogg)(\?.*)?$/i.test(a)),nE=({toast:a,onDismiss:r})=>a?f.jsx("div",{onClick:r,style:{position:"fixed",top:80,right:20,zIndex:9999,padding:"12px 20px",borderRadius:"10px",background:a.type==="error"?"#ef4444":"#0e7490",color:"#fff",fontSize:"0.85rem",fontWeight:500,boxShadow:"0 8px 24px rgba(0,0,0,0.18)",cursor:"pointer",animation:"slideInRight 0.3s ease",maxWidth:320},children:a.message}):null,aE=()=>{const{id:a}=Sg(),r=Pr(),{isSignedIn:s,user:o}=Ol(),[i,d]=S.useState(null),[h,m]=S.useState(!0),[g,b]=S.useState(null),[x,v]=S.useState(!1),[E,M]=S.useState(!1),[k,N]=S.useState(null),[_,X]=S.useState(new Set),[U,q]=S.useState(new Set),[F,H]=S.useState({type:null,lectureId:null,chapterId:null});S.useEffect(()=>{(async()=>{try{m(!0);const W=await Ts.getById(a);d(W)}catch(W){console.error("Error fetching course:",W),b("Course not found or failed to load.")}finally{m(!1)}})()},[a]),S.useEffect(()=>{if(!s||!o||!a)return;(async()=>{try{const W=await Ts.checkEnrollment(a,o.id);v(W.isEnrolled)}catch(W){console.error("Error checking enrollment:",W)}})()},[s,o,a]);const $=S.useCallback((Q,W="error")=>{N({message:Q,type:W}),setTimeout(()=>N(null),3500)},[]),V=i?.isFree||!i?.price||i?.price?.original===0,le=i?.price?.original??null,ae=i?.price?.sale??null,je=le!=null&&ae!=null&&ae<le,xe=S.useMemo(()=>(i?.lectures||[]).flatMap(Q=>Q.chapters||[]),[i]),me=S.useMemo(()=>xe.reduce((Q,W)=>Q+(W.duration||W.durationMin||0),0),[xe]),Z=xe.length,re=Z>0?Math.round(U.size/Z*100):0,he=S.useMemo(()=>(i?.lectures||[]).find(Q=>Q._id===F.lectureId||Q.id===F.lectureId),[i,F.lectureId]),R=S.useMemo(()=>F.lectureId?F.chapterId?he?.chapters?.find(Q=>Q._id===F.chapterId||Q.id===F.chapterId)??null:he??null:null,[F,he]),I=R?.videoUrl||null,te=I?eE(I):null,Ee=tE(te),_e=S.useCallback(Q=>{if(!s){$("Please login to access course content");return}if(!V&&!x){$("Please enroll to access content");return}X(W=>{const se=new Set(W);return se.has(Q)?se.delete(Q):se.add(Q),se})},[s,V,x,$]),j=S.useCallback((Q,W=null)=>{if(!s){$("Please login to access course content");return}if(!V&&!x){$("Please enroll to access this content");return}H({type:W?"chapter":"lecture",lectureId:Q,chapterId:W}),X(se=>{const ge=new Set(se);return ge.add(Q),ge})},[s,V,x,$]),P=S.useCallback(Q=>{q(W=>{const se=new Set(W);return se.has(Q)?se.delete(Q):se.add(Q),se})},[]),J=S.useCallback(async()=>{if(!s){$("Please login to enroll");return}try{M(!0),await Ts.enroll(a,o.id),v(!0),$("Successfully enrolled! Start learning.","success")}catch(Q){console.error("Enrollment error:",Q),$("Enrollment failed. Please try again.")}finally{M(!1)}},[s,o,a,$]);return h?f.jsxs("div",{style:{minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f0f9ff"},children:[f.jsx(G1,{size:32,color:"#0e7490",style:{animation:"spin 0.8s linear infinite"}}),f.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):g||!i?f.jsxs("div",{style:{minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"DM Sans, sans-serif",gap:16,background:"#f0f9ff"},children:[f.jsx(tt,{size:40,color:"#94a3b8"}),f.jsx("p",{style:{color:"#475569",fontSize:"1rem"},children:g||"Course not found."}),f.jsx("button",{onClick:()=>r("/courses"),style:{padding:"10px 22px",background:"#0e7490",color:"#fff",border:"none",borderRadius:"100px",cursor:"pointer",fontSize:"0.85rem"},children:"Back to Courses"})]}):f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsx(nE,{toast:k,onDismiss:()=>N(null)}),f.jsxs("div",{className:"cd-page",children:[f.jsxs("div",{className:"cd-hero",children:[i.thumbnail&&f.jsx("img",{src:i.thumbnail,alt:i.title,className:"cd-hero-img"}),f.jsx("div",{className:"cd-hero-overlay",children:f.jsxs("div",{className:"cd-hero-content",children:[f.jsxs("button",{className:"cd-back-btn",onClick:()=>r("/courses"),children:[f.jsx(D1,{size:13})," Back to Courses"]}),f.jsxs("div",{className:"cd-hero-category",children:[i.category," · ",i.level]}),f.jsx("h1",{className:"cd-hero-title",children:i.title}),f.jsxs("div",{className:"cd-hero-meta",children:[i.rating>0&&f.jsxs("span",{className:"cd-hero-meta-item",children:[f.jsx(Nn,{size:12,fill:"#f59e0b",color:"#f59e0b"})," ",i.rating]}),f.jsxs("span",{className:"cd-hero-meta-item",children:[f.jsx(qa,{size:12})," ",(i.totalStudents||0).toLocaleString()," students"]}),f.jsxs("span",{className:"cd-hero-meta-item",children:[f.jsx(Da,{size:12})," ",Or(me)," total"]}),f.jsxs("span",{className:"cd-hero-meta-item",children:[f.jsx(tt,{size:12})," ",Z," lessons"]})]})]})})]}),f.jsxs("div",{className:"cd-main",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"cd-video-card cd-animate",children:[f.jsx("div",{className:"cd-video-frame",children:te?Ee?f.jsx("video",{controls:!0,src:te}):f.jsx("iframe",{title:"Video Player",src:te,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):f.jsxs("div",{className:"cd-video-placeholder",children:[f.jsx("div",{className:"cd-play-ring",children:f.jsx(yd,{size:22,color:"#67e8f9",fill:"#67e8f9"})}),f.jsx("p",{children:"Select a chapter to start learning"}),(!s||!x&&!V)&&f.jsxs("span",{className:"cd-lock-note",children:[f.jsx(bd,{size:11}),s?"Enrollment required":"Login required"]})]})}),f.jsxs("div",{className:"cd-video-info",children:[f.jsx("h3",{className:"cd-video-title",children:R?.title||R?.name||"Select a chapter to begin"}),f.jsx("p",{className:"cd-video-desc",children:F.type==="chapter"?`Part of: ${he?.title}`:R?.description||i.description}),f.jsxs("div",{className:"cd-video-chips",children:[(R?.duration||R?.durationMin)&&f.jsxs("span",{className:"cd-chip",children:[f.jsx(Da,{size:11})," ",Or(R.duration||R.durationMin)]}),F.type==="chapter"&&f.jsx("span",{className:"cd-chip",children:"Chapter"}),he&&f.jsxs("span",{className:"cd-chip",children:[f.jsx(tt,{size:11})," ",he.title]})]}),s&&(x||V)&&F.chapterId&&f.jsx("button",{className:`cd-complete-btn ${U.has(F.chapterId)?"done":"undone"}`,onClick:()=>P(F.chapterId),children:U.has(F.chapterId)?f.jsxs(f.Fragment,{children:[f.jsx(Al,{size:15})," Chapter Completed"]}):f.jsxs(f.Fragment,{children:[f.jsx(ng,{size:15})," Mark as Complete"]})})]})]}),f.jsxs("div",{className:"cd-card cd-animate cd-delay-1",children:[f.jsx("div",{className:"cd-card-header",children:f.jsx("span",{className:"cd-card-title",children:"About This Course"})}),f.jsxs("div",{style:{padding:"16px 20px"},children:[f.jsx("p",{style:{fontSize:"0.88rem",color:"#475569",fontWeight:300,lineHeight:1.7},children:i.description}),i.tags?.length>0&&f.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:14},children:i.tags.map(Q=>f.jsx("span",{className:"cd-chip",children:Q},Q))})]})]})]}),f.jsxs("div",{className:"cd-sidebar",children:[f.jsxs("div",{className:"cd-card cd-animate",children:[f.jsxs("div",{className:"cd-card-header",children:[f.jsx("span",{className:"cd-card-title",children:"Course Content"}),V&&f.jsxs("span",{className:"cd-free-badge",children:[f.jsx(vd,{size:10})," Free"]})]}),f.jsx("div",{className:"cd-lecture-list",children:(i.lectures||[]).length===0?f.jsx("div",{style:{padding:"24px",textAlign:"center",color:"#94a3b8",fontSize:"0.82rem"},children:"No lectures available yet."}):(i.lectures||[]).map(Q=>{const W=Q._id||Q.id,se=_.has(W),ge=V||x;return f.jsxs("div",{className:"cd-lecture-item",children:[f.jsxs("div",{className:`cd-lecture-header${se?" expanded":""}`,onClick:()=>_e(W),children:[f.jsxs("div",{className:"cd-lecture-left",children:[f.jsx(Yd,{size:15,className:`cd-chevron${se?" open":""}`}),f.jsxs("div",{style:{minWidth:0},children:[f.jsx("div",{className:"cd-lecture-title",children:Q.title}),f.jsxs("div",{className:"cd-lecture-sub",children:[f.jsx(Da,{size:10})," ",Or(Q.duration||Q.durationMin),f.jsx("span",{children:"·"}),f.jsxs("span",{children:[Q.chapters?.length||0," lessons"]})]})]})]}),!ge&&f.jsx(bd,{size:13,className:"cd-lecture-lock"})]}),se&&f.jsx("div",{className:"cd-chapter-list",children:(Q.chapters||[]).map(Pe=>{const Me=Pe._id||Pe.id,On=U.has(Me),da=F.chapterId===Me&&F.lectureId===W;return f.jsxs("div",{className:`cd-chapter-item${da?" selected":""}${ge?"":" disabled"}`,onClick:()=>j(W,Me),children:[f.jsxs("div",{className:"cd-chapter-left",children:[f.jsx("button",{className:`cd-toggle-btn${On?" done":""}`,onClick:Ul=>{Ul.stopPropagation(),ge&&P(Me)},disabled:!ge,children:On?f.jsx(Al,{size:14}):f.jsx(ng,{size:14})}),f.jsxs("div",{style:{minWidth:0},children:[f.jsx("div",{className:`cd-chapter-name${da?" selected":""}`,children:Pe.title}),f.jsx("div",{className:"cd-chapter-topic",children:Pe.description})]})]}),f.jsx("span",{className:"cd-chapter-dur",children:Or(Pe.duration||Pe.durationMin)})]},Me)})})]},W)})})]}),f.jsxs("div",{className:"cd-card cd-animate cd-delay-1",children:[f.jsx("div",{className:"cd-card-header",children:f.jsx("span",{className:"cd-card-title",children:"Pricing"})}),f.jsxs("div",{className:"cd-pricing-body",children:[f.jsxs("div",{className:"cd-price-row",children:[f.jsx("span",{className:`cd-price-main${V?" free":""}`,children:V?"Free":ae!=null?Qu(ae):le!=null?Qu(le):"Free"}),!V&&je&&f.jsx("span",{className:"cd-price-original",children:Qu(le)}),!V&&je&&f.jsxs("span",{className:"cd-discount-pill",children:[Math.round((le-ae)/le*100),"% off"]})]}),f.jsx("p",{className:"cd-price-note",children:V?"Free access · Learn anytime":"One-time payment · Lifetime access"}),V?f.jsxs("button",{disabled:!0,className:"cd-enroll-btn free-access",children:[f.jsx(Al,{size:15})," Free Access Granted"]}):x?f.jsxs("button",{disabled:!0,className:"cd-enroll-btn enrolled",children:[f.jsx(Al,{size:15})," Enrolled"]}):f.jsx("button",{onClick:J,disabled:E,className:"cd-enroll-btn paid",children:E?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"cd-spinner"})," Enrolling…"]}):f.jsxs(f.Fragment,{children:[f.jsx(yd,{size:14,fill:"#fff"})," Enroll Now ",f.jsx(Br,{size:14})]})})]})]}),f.jsxs("div",{className:"cd-card cd-animate cd-delay-2",children:[f.jsx("div",{className:"cd-card-header",children:f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[f.jsx(qr,{size:16,color:"var(--cyan)"}),f.jsx("span",{className:"cd-card-title",children:"Your Progress"})]})}),f.jsxs("div",{className:"cd-progress-body",children:[f.jsxs("div",{className:"cd-progress-label",children:[f.jsx("span",{children:"Course Completion"}),f.jsxs("span",{children:[re,"%"]})]}),f.jsx("div",{className:"cd-progress-track",children:f.jsx("div",{className:"cd-progress-fill",style:{width:`${re}%`}})}),f.jsxs("div",{className:"cd-progress-stats",children:[f.jsxs("div",{className:"cd-progress-stat",children:[f.jsx("div",{className:"cd-stat-val",children:Or(me)}),f.jsx("div",{className:"cd-stat-lbl",children:"Total Duration"})]}),f.jsxs("div",{className:"cd-progress-stat",children:[f.jsxs("div",{className:"cd-stat-val",children:[U.size,"/",Z]}),f.jsx("div",{className:"cd-stat-lbl",children:"Completed"})]})]})]})]})]})]})]})]})},$u={students:12e3,courses:240,successRate:94,countries:58,certificates:31500,support:0},lE=[{key:"students",label:"Students Enrolled",icon:zn},{key:"courses",label:"Courses Available",icon:Xd},{key:"successRate",label:"Success Rate",icon:qr},{key:"countries",label:"Countries Reached",icon:Vd},{key:"certificates",label:"Certificates Issued",icon:qr},{key:"support",label:"Support Available",icon:Da}],rE=[{title:"Excellence",description:"We hold ourselves to the highest standards in every course, every interaction, every outcome.",features:["Peer-reviewed curriculum","Expert-led instruction","Continuous improvement"],accent:"#0e7490",light:"#e0f7fa"},{title:"Accessibility",description:"World-class education should never be gated by geography, background, or budget.",features:["Affordable pricing tiers","Mobile-first design","Multi-language support"],accent:"#0369a1",light:"#dbeafe"},{title:"Community",description:"Learning thrives in connection. We build spaces where collaboration sparks growth.",features:["Live cohort sessions","Peer mentorship","Alumni network"],accent:"#0f766e",light:"#d1fae5"},{title:"Innovation",description:"The future of learning is adaptive, interactive, and built for how humans actually learn.",features:["AI-powered paths","Project-based learning","Real-world challenges"],accent:"#7c3aed",light:"#ede9fe"}],Iu="/LMS-USING-REACT/images",iE=[{name:"Sushant Pathak",role:"AI Engineer @ Google",rating:5,text:"LearnHub didn't just teach me to code — it taught me how to think like an engineer. The projects were real, the mentorship was genuine.",image:`${Iu}/sushant.jpeg`},{name:"Satyam Kumar",role:"Data Scientist @ Stripe",rating:5,text:"I switched careers at 34. LearnHub gave me the confidence and the skills to land a role I'd only dreamed about. Incredible platform.",image:`${Iu}/satyam.jpeg`},{name:"Sahil Kumar",role:"UX Designer @ Figma",rating:5,text:"The UI/UX track is the most thoughtfully designed course I've ever taken. Real briefs, real feedback, real portfolio pieces.",image:`${Iu}/sahil.jpeg`}];function Zu(a=.2){const r=S.useRef(null),[s,o]=S.useState(!1);return S.useEffect(()=>{const i=new IntersectionObserver(([d])=>{d.isIntersecting&&o(!0)},{threshold:a});return r.current&&i.observe(r.current),()=>i.disconnect()},[a]),[r,s]}function sE(a){const[r,s]=S.useState(()=>Object.fromEntries(Object.keys($u).map(o=>[o,0])));return S.useEffect(()=>{if(!a)return;const o=2e3,i=60,d=o/i,h=[];return Object.keys($u).forEach(m=>{if(m==="support")return;let g=0;const b=$u[m],x=b/i,v=setInterval(()=>{g+=x,g>=b&&(g=b,clearInterval(v)),s(E=>({...E,[m]:Math.floor(g)}))},d);h.push(v)}),()=>h.forEach(m=>clearInterval(m))},[a]),r}const oE=(a,r)=>a==="support"?"24/7":a==="successRate"?`${r}%`:`${r.toLocaleString()}+`;function cE(){const[a,r]=Zu(.3),s=sE(r),[o,i]=Zu(.15),[d,h]=Zu(.15);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsx("div",{className:"hero-vignette"}),f.jsx("section",{className:"stats-section",ref:a,children:f.jsx("div",{className:"stats-grid",children:lE.map(({key:m,label:g,icon:b},x)=>f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:f.jsx(b,{size:18})}),f.jsx("div",{className:"stat-number",children:oE(m,s[m]??0)}),f.jsx("div",{className:"stat-label",children:g})]},m))})}),f.jsx("section",{className:"section values-section",ref:o,children:f.jsxs("div",{className:"section-inner",children:[f.jsxs("div",{className:`values-header fade-up ${i?"visible":""}`,children:[f.jsxs("div",{className:"section-badge",children:[f.jsx(lg,{size:13}),f.jsx("span",{children:"Our Guiding Principles"})]}),f.jsx("h2",{className:"section-title",children:"Core Values That Define Us"}),f.jsx("p",{className:"section-subtitle",children:"The foundation of everything we do at LearnHub"})]}),f.jsx("div",{className:"values-grid",children:rE.map((m,g)=>f.jsxs("div",{className:`value-card fade-up ${i?"visible":""} fade-up-delay-${Math.min(g+1,4)}`,children:[f.jsx("div",{className:"value-card-accent",style:{background:m.accent}}),f.jsx("div",{className:"value-icon-wrap",style:{background:m.light},children:f.jsx(lg,{size:20,style:{color:m.accent}})}),f.jsx("h3",{className:"value-card-title",children:m.title}),f.jsx("p",{className:"value-card-desc",children:m.description}),f.jsx("ul",{className:"value-features",children:m.features.map((b,x)=>f.jsxs("li",{className:"value-feature-item",children:[f.jsx("div",{className:"value-feature-dot",style:{background:m.accent}}),b]},x))})]},g))})]})}),f.jsx("section",{className:"section testimonials-section",ref:d,children:f.jsxs("div",{className:"section-inner",children:[f.jsxs("div",{className:`testimonials-header fade-up ${h?"visible":""}`,children:[f.jsx("h2",{className:"section-title",children:"What Our Students Say"}),f.jsx("p",{className:"section-subtitle",children:"Real stories from real learners who transformed their careers"})]}),f.jsx("div",{className:"testimonials-grid",children:iE.map((m,g)=>f.jsxs("div",{className:`testimonial-card fade-up ${h?"visible":""} fade-up-delay-${Math.min(g+1,4)}`,children:[f.jsx("div",{className:"testimonial-stars",children:[...Array(m.rating)].map((b,x)=>f.jsx(Nn,{className:"testimonial-star"},x))}),f.jsxs("p",{className:"testimonial-text",children:['"',m.text,'"']}),f.jsxs("div",{className:"testimonial-author",children:[f.jsx("img",{src:m.image,alt:m.name,className:"testimonial-avatar"}),f.jsxs("div",{children:[f.jsx("div",{className:"testimonial-name",children:m.name}),f.jsx("div",{className:"testimonial-role",children:m.role})]})]})]},g))})]})})]})}const kl="/LMS-USING-REACT/images",_l=[{id:"f1",name:"Prof. Charmy Vora",role:"Full Stack Engineer",specialization:"Development",bio:"10+ years at Google & Stripe...",avatar:`${kl}/charmyvora.png`,rating:4.9,totalStudents:4820,totalCourses:4,experience:"10+ years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:"#"},skills:["React","Node.js","AWS","TypeScript"],courses:["Full Stack Web Dev","Node.js APIs","React Bootcamp","Cloud & AWS"]},{id:"f2",name:"Prof. Urvi Dhamecha",role:"Senior Product Designer",specialization:"Design",bio:"Led design at Figma and Notion...",avatar:`${kl}/ud.png`,rating:4.9,totalStudents:5730,totalCourses:3,experience:"8 years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:null},skills:["Figma","UX Research","Prototyping","Design Systems"],courses:["UI/UX Mastery","Figma for Beginners","Design Systems"]},{id:"f3",name:"Prof. Jigar Dave",role:"Frontend Architect",specialization:"Development",bio:"Core contributor to React ecosystem...",avatar:`${kl}/jigardave.jpeg`,rating:4.8,totalStudents:3750,totalCourses:2,experience:"7 years",badge:"Expert",social:{linkedin:"#",twitter:"#",website:"#"},skills:["React","Next.js","Performance","CSS"],courses:["React & Next.js Bootcamp","Frontend Performance"]},{id:"f4",name:"Prof. Bhavesh Kamalpara",role:"Growth Marketing Lead",specialization:"Marketing",bio:"Scaled startups from 0 to 1M users...",avatar:`${kl}/bk.png`,rating:4.6,totalStudents:2870,totalCourses:2,experience:"6 years",badge:null,social:{linkedin:"#",twitter:"#",website:null},skills:["SEO","Google Ads","Analytics","Content Strategy"],courses:["Digital Marketing Pro","Content Writing Fundamentals"]},{id:"f5",name:"Prof. Monisha Mohan",role:"Operating System",specialization:"Data",bio:"Former Amazon Alexa team...",avatar:`${kl}/monishamohan.png`,rating:4.9,totalStudents:5420,totalCourses:2,experience:"9 years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:"#"},skills:["PyTorch","NLP","Computer Vision","MLOps"],courses:["Machine Learning A-Z","Deep Learning Fundamentals"]},{id:"f6",name:"Prof. Niraj Bhagchandani",role:"Computer Networking",specialization:"Development",bio:"AWS Certified Solutions Architect...",avatar:`${kl}/nb.png`,rating:4.7,totalStudents:2890,totalCourses:2,experience:"8 years",badge:"Expert",social:{linkedin:"#",twitter:"#",website:null},skills:["AWS","Docker","Kubernetes","Terraform"],courses:["Cloud Computing & AWS","DevOps Fundamentals"]}],uE=["All","Development","Design","Data","Marketing"],dE=["Most Popular","Top Rated","Most Courses","Most Experience"],Ju=6,J1=a=>a>=1e3?`${(a/1e3).toFixed(1)}k`:String(a),fE=a=>a==="Top Instructor"?{bg:"rgba(245,158,11,0.1)",color:"#b45309",border:"rgba(245,158,11,0.25)"}:a==="Expert"?{bg:"rgba(14,116,144,0.08)",color:"#0e7490",border:"rgba(14,116,144,0.2)"}:null,hE=D.memo(({rating:a,size:r=13})=>f.jsxs("div",{style:{display:"flex",gap:2,alignItems:"center"},children:[[1,2,3,4,5].map(s=>{const o=s<=Math.round(a);return f.jsx(Nn,{size:r,fill:o?"#f59e0b":"none",color:o?"#f59e0b":"#cbd5e1"},s)}),f.jsx("span",{style:{fontSize:"0.74rem",fontWeight:600,color:"#92400e",marginLeft:4},children:a.toFixed(1)})]})),Wu=({href:a,icon:r,label:s})=>a?f.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":s,className:"fc-social-btn",onClick:o=>o.stopPropagation(),children:f.jsx(r,{size:14})}):null,pE=D.memo(({teacher:a,index:r,isExpanded:s,onToggle:o})=>{const i=fE(a.badge);return f.jsxs("article",{className:"fc-card",style:{animationDelay:`${Math.min(r,5)*70}ms`},children:[f.jsx("div",{className:"fc-card-accent",style:{background:a.specialization==="Design"?"linear-gradient(90deg,#0f766e,#14b8a6)":a.specialization==="Data"?"linear-gradient(90deg,#0369a1,#38bdf8)":a.specialization==="Marketing"?"linear-gradient(90deg,#7c3aed,#a78bfa)":"linear-gradient(90deg,#0a5c73,#0e7490)"}}),f.jsxs("div",{className:"fc-card-top",children:[f.jsxs("div",{className:"fc-avatar-wrap",children:[f.jsx("img",{src:a.avatar,alt:a.name,className:"fc-avatar",loading:"lazy"}),f.jsx("div",{className:"fc-avatar-ring"})]}),f.jsxs("div",{className:"fc-card-info",children:[f.jsxs("div",{className:"fc-name-row",children:[f.jsx("h3",{className:"fc-name",children:a.name}),i&&f.jsxs("span",{className:"fc-badge",style:{background:i.bg,color:i.color,borderColor:i.border},children:[f.jsx(qr,{size:9})," ",a.badge]})]}),f.jsx("p",{className:"fc-role",children:a.role}),f.jsx("span",{className:"fc-spec",children:a.specialization})]})]}),f.jsxs("div",{className:"fc-stats",children:[f.jsxs("div",{className:"fc-stat",children:[f.jsx(qa,{size:12,color:"#0e7490"}),f.jsx("span",{className:"fc-stat-val",children:J1(a.totalStudents)}),f.jsx("span",{className:"fc-stat-lbl",children:"Students"})]}),f.jsx("div",{className:"fc-stat-divider"}),f.jsxs("div",{className:"fc-stat",children:[f.jsx(tt,{size:12,color:"#0e7490"}),f.jsx("span",{className:"fc-stat-val",children:a.totalCourses}),f.jsx("span",{className:"fc-stat-lbl",children:"Courses"})]}),f.jsx("div",{className:"fc-stat-divider"}),f.jsxs("div",{className:"fc-stat",children:[f.jsx(Xd,{size:12,color:"#0e7490"}),f.jsx("span",{className:"fc-stat-val",children:a.experience}),f.jsx("span",{className:"fc-stat-lbl",children:"Experience"})]})]}),f.jsx("div",{className:"fc-rating-row",children:f.jsx(hE,{rating:a.rating})}),f.jsx("p",{className:"fc-bio",children:a.bio}),f.jsx("div",{className:"fc-skills",children:a.skills.map(d=>f.jsx("span",{className:"fc-skill",children:d},d))}),s&&f.jsxs("div",{className:"fc-courses",children:[f.jsxs("div",{className:"fc-courses-label",children:[f.jsx(zn,{size:12})," Courses by ",a.name.split(" ")[0]]}),f.jsx("div",{className:"fc-courses-list",children:a.courses.map(d=>f.jsxs("div",{className:"fc-course-item",children:[f.jsx(tt,{size:11,color:"#0e7490"}),f.jsx("span",{children:d})]},d))})]}),f.jsxs("div",{className:"fc-card-footer",children:[f.jsxs("div",{className:"fc-socials",children:[f.jsx(Wu,{href:a.social.linkedin,icon:P1,label:"LinkedIn"}),f.jsx(Wu,{href:a.social.twitter,icon:I1,label:"Twitter"}),f.jsx(Wu,{href:a.social.website,icon:Vd,label:"Website"})]}),f.jsx("button",{type:"button",className:"fc-expand-btn",onClick:()=>o(a.id),"aria-expanded":s,"aria-label":s?"Show less":"View courses",children:s?f.jsxs(f.Fragment,{children:[f.jsx(H1,{size:13})," Less"]}):f.jsxs(f.Fragment,{children:[f.jsx(Yd,{size:13})," Courses"]})})]})]})}),mE=()=>{const[a,r]=S.useState(""),[s,o]=S.useState("All"),[i,d]=S.useState("Most Popular"),[h,m]=S.useState(!1),[g,b]=S.useState(new Set),[x,v]=S.useState(!1),E=S.useCallback(H=>{b($=>{const V=new Set($);return V.has(H)?V.delete(H):V.add(H),V})},[]),M=S.useMemo(()=>{let H=_l.filter($=>{const V=a.toLowerCase(),le=!V||$.name.toLowerCase().includes(V)||$.role.toLowerCase().includes(V)||$.skills.some(je=>je.toLowerCase().includes(V)),ae=s==="All"||$.specialization===s;return le&&ae});switch(i){case"Top Rated":H=[...H].sort(($,V)=>V.rating-$.rating);break;case"Most Popular":H=[...H].sort(($,V)=>V.totalStudents-$.totalStudents);break;case"Most Courses":H=[...H].sort(($,V)=>V.totalCourses-$.totalCourses);break;case"Most Experience":H=[...H].sort(($,V)=>parseInt(V.experience)-parseInt($.experience));break}return H},[a,s,i]),k=S.useMemo(()=>h?M:M.slice(0,Ju),[M,h]),N=Math.max(0,M.length-Ju),_=s!=="All"||a!==""||i!=="Most Popular",X=S.useCallback(()=>{r(""),o("All"),d("Most Popular"),m(!1)},[]),U=S.useMemo(()=>_l.reduce((H,$)=>H+$.totalStudents,0),[]),q=S.useMemo(()=>_l.reduce((H,$)=>H+$.totalCourses,0),[]),F=S.useMemo(()=>(_l.reduce((H,$)=>H+$.rating,0)/_l.length).toFixed(1),[]);return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("div",{className:"fc-page",children:[f.jsxs("div",{className:"fc-header",children:[f.jsxs("div",{className:"fc-header-badge",children:[f.jsx(zn,{size:11})," Meet Our Faculty"]}),f.jsxs("h1",{className:"fc-title",children:["Learn from the ",f.jsx("span",{children:"Best"})]}),f.jsx("p",{className:"fc-subtitle",children:"Our instructors are industry veterans, researchers, and practitioners who bring real-world experience into every lesson."})]}),f.jsxs("div",{className:"fc-summary",children:[f.jsxs("div",{className:"fc-summary-item",children:[f.jsx("div",{className:"fc-summary-val",children:_l.length}),f.jsx("div",{className:"fc-summary-lbl",children:"Instructors"})]}),f.jsxs("div",{className:"fc-summary-item",children:[f.jsx("div",{className:"fc-summary-val",children:J1(U)}),f.jsx("div",{className:"fc-summary-lbl",children:"Students Taught"})]}),f.jsxs("div",{className:"fc-summary-item",children:[f.jsx("div",{className:"fc-summary-val",children:q}),f.jsx("div",{className:"fc-summary-lbl",children:"Courses"})]}),f.jsxs("div",{className:"fc-summary-item",children:[f.jsxs("div",{className:"fc-summary-val",children:[F,"★"]}),f.jsx("div",{className:"fc-summary-lbl",children:"Avg Rating"})]})]}),f.jsx("div",{className:"fc-spec-tabs",children:uE.map(H=>f.jsx("button",{type:"button",className:`fc-spec-tab ${s===H?"active":""}`,onClick:()=>{o(H),m(!1)},children:H},H))}),f.jsxs("div",{className:"fc-controls",children:[f.jsxs("div",{className:"fc-search-row",children:[f.jsxs("div",{className:"fc-search-wrap",children:[f.jsx(xd,{size:15,className:"fc-search-icon"}),f.jsx("input",{type:"search",className:"fc-search",placeholder:"Search by name, role, or skill…",value:a,onChange:H=>{r(H.target.value),m(!1)},"aria-label":"Search faculty"}),a&&f.jsx("button",{className:"fc-search-clear",onClick:()=>r(""),"aria-label":"Clear",children:f.jsx(Sd,{size:13})})]}),f.jsx("select",{className:"fc-sort-select",value:i,onChange:H=>{d(H.target.value),m(!1)},"aria-label":"Sort faculty",children:dE.map(H=>f.jsx("option",{value:H,children:H},H))})]}),_&&f.jsxs("div",{className:"fc-filter-bar",children:[a&&f.jsxs("span",{className:"fc-filter-tag",children:[f.jsx(xd,{size:10}),' "',a,'"']}),s!=="All"&&f.jsx("span",{className:"fc-filter-tag",children:s}),i!=="Most Popular"&&f.jsxs("span",{className:"fc-filter-tag",children:[f.jsx(K5,{size:10})," ",i]}),f.jsxs("button",{type:"button",className:"fc-clear-btn",onClick:X,children:[f.jsx(Sd,{size:10})," Clear all"]}),f.jsxs("span",{className:"fc-result-count",children:[M.length," instructor",M.length!==1?"s":""]})]})]}),f.jsxs("div",{className:"fc-grid-wrap",children:[f.jsx("div",{className:"fc-grid",children:M.length===0?f.jsxs("div",{className:"fc-empty",children:[f.jsx("div",{className:"fc-empty-icon",children:f.jsx(zn,{size:30})}),f.jsx("h3",{className:"fc-empty-title",children:"No instructors found"}),f.jsx("button",{type:"button",className:"fc-empty-btn",onClick:X,children:"Show All Faculty"})]}):k.map((H,$)=>f.jsx(pE,{teacher:H,index:$,isExpanded:g.has(H.id),onToggle:E},H.id))}),M.length>Ju&&f.jsxs("div",{className:"fc-show-more",children:[f.jsx("button",{type:"button",className:"fc-show-more-btn",onClick:()=>m(H=>!H),children:h?f.jsxs(f.Fragment,{children:[f.jsx(H1,{size:15})," Show Less"]}):f.jsxs(f.Fragment,{children:[f.jsx(Yd,{size:15})," Show ",N," More"]})}),!h&&f.jsxs("span",{className:"fc-count-note",children:["Showing ",k.length," of ",M.length]})]})]})]})]})},gE=[{icon:Gd,label:"Call Us",value:"+91 70507 90468",sub:"Mon–Sat, 9am–6pm IST",accent:"#0e7490",light:"#e0f7fa"},{icon:no,label:"Email Us",value:"sushantpathak2028@gmail.com",sub:"We reply within 24 hours",accent:"#0369a1",light:"#dbeafe"},{icon:X1,label:"Visit Us",value:"Rajkot, Gujarat",sub:"India — 360001",accent:"#0f766e",light:"#d1fae5"}],bE=["General Inquiry","Project Collaboration","Support","Feedback","Other"];function yE(){const[a,r]=S.useState({name:"",email:"",phone:"",subject:"",message:""}),[s,o]=S.useState(""),[i,d]=S.useState(!1),[h,m]=S.useState(!1),g=E=>/^\d{10}$/.test(E),b=a.name.trim()&&a.email.trim()&&g(a.phone)&&a.subject&&a.message.trim(),x=E=>{const{name:M,value:k}=E.target;r(N=>({...N,[M]:k})),M==="phone"&&(k&&!g(k)?o("Phone number must be exactly 10 digits."):o(""))},v=E=>{if(E.preventDefault(),!b)return;d(!0);const k=`https://wa.me/7050794068?text=${`Name: ${a.name}%0AEmail: ${a.email}%0APhone: ${a.phone}%0ASubject: ${a.subject}%0AMessage: ${a.message}`}`;window.open(k,"_blank"),setTimeout(()=>{d(!1),m(!0),r({name:"",email:"",phone:"",subject:"",message:""}),setTimeout(()=>m(!1),4e3)},800)};return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsxs("div",{className:"cp-page",children:[f.jsxs("div",{className:"cp-header",children:[f.jsxs("div",{className:"cp-badge",children:[f.jsx(ws,{size:12}),"Get In Touch"]}),f.jsxs("h1",{className:"cp-title",children:["Let's Start a ",f.jsx("span",{children:"Conversation"})]}),f.jsx("p",{className:"cp-subtitle",children:"Have a question, idea, or just want to say hello? We'd love to hear from you. Fill out the form and we'll get back to you via WhatsApp."})]}),f.jsx("div",{className:"cp-info-grid",children:gE.map(E=>{const M=E.icon;return f.jsxs("div",{className:"cp-info-card",children:[f.jsx("div",{className:"cp-info-icon",style:{background:E.light},children:f.jsx(M,{size:18,style:{color:E.accent}})}),f.jsxs("div",{children:[f.jsx("div",{className:"cp-info-label",children:E.label}),f.jsx("div",{className:"cp-info-value",children:E.value}),f.jsx("div",{className:"cp-info-sub",children:E.sub})]})]},E.label)})}),f.jsxs("div",{className:"cp-main",children:[f.jsxs("div",{className:"cp-form-card",children:[f.jsx("h2",{className:"cp-form-title",children:"Send Us a Message"}),f.jsx("p",{className:"cp-form-sub",children:"All fields marked * are required"}),f.jsxs("form",{onSubmit:v,noValidate:!0,children:[f.jsxs("div",{className:"cp-row",children:[f.jsxs("div",{className:"cp-field",children:[f.jsxs("label",{className:"cp-label",children:[f.jsx(Z1,{size:13,color:"#0e7490"}),"Full Name *"]}),f.jsx("input",{className:"cp-input",type:"text",name:"name",value:a.name,onChange:x,placeholder:"Your full name",required:!0})]}),f.jsxs("div",{className:"cp-field",children:[f.jsxs("label",{className:"cp-label",children:[f.jsx(no,{size:13,color:"#0369a1"}),"Email Address *"]}),f.jsx("input",{className:"cp-input",type:"email",name:"email",value:a.email,onChange:x,placeholder:"you@example.com",required:!0})]})]}),f.jsxs("div",{className:"cp-field",children:[f.jsxs("label",{className:"cp-label",children:[f.jsx(Gd,{size:13,color:"#0f766e"}),"Phone Number *"]}),f.jsx("input",{className:`cp-input ${s?"error":""}`,type:"tel",name:"phone",value:a.phone,onChange:x,placeholder:"10-digit mobile number",inputMode:"numeric",maxLength:10,required:!0}),s&&f.jsxs("span",{className:"cp-error",children:["⚠ ",s]})]}),f.jsxs("div",{className:"cp-field",children:[f.jsxs("label",{className:"cp-label",children:[f.jsx(uj,{size:13,color:"#7c3aed"}),"Subject *"]}),f.jsxs("select",{className:"cp-select",name:"subject",value:a.subject,onChange:x,required:!0,children:[f.jsx("option",{value:"",children:"Select a subject"}),bE.map(E=>f.jsx("option",{value:E,children:E},E))]})]}),f.jsxs("div",{className:"cp-field",children:[f.jsxs("label",{className:"cp-label",children:[f.jsx(ws,{size:13,color:"#0e7490"}),"Message *"]}),f.jsx("textarea",{className:"cp-textarea",name:"message",value:a.message,onChange:x,placeholder:"Tell us what's on your mind...",required:!0})]}),f.jsx("button",{type:"submit",className:`cp-submit ${h?"success":""}`,disabled:!b||i,children:i?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"cp-spinner"})," Opening WhatsApp…"]}):h?f.jsxs(f.Fragment,{children:[f.jsx(B5,{size:16})," Message Sent!"]}):f.jsxs(f.Fragment,{children:[f.jsx(Q1,{size:15})," Send via WhatsApp"]})}),f.jsxs("div",{className:"cp-wa-note",children:[f.jsx(ws,{size:13}),"This form opens WhatsApp with your message pre-filled"]})]})]}),f.jsxs("div",{className:"cp-lottie",children:[f.jsx("div",{className:"cp-lottie-wrap",children:f.jsxs("div",{style:{width:"100%",height:"340px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"},children:[f.jsx("style",{children:`
                  @keyframes cpFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
                  @keyframes cpPulse  { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
                  @keyframes cpSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                  @keyframes cpBounce { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
                  @keyframes cpDash   { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
                  @keyframes cpFadeIn { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
                `}),f.jsx("div",{style:{position:"absolute",width:260,height:260,borderRadius:"50%",background:"linear-gradient(135deg,rgba(14,116,144,.07),rgba(8,145,178,.05))",border:"1.5px solid rgba(14,116,144,.12)",animation:"cpPulse 3s ease-in-out infinite"}}),f.jsx("div",{style:{position:"absolute",width:300,height:300,borderRadius:"50%",border:"1px dashed rgba(14,116,144,.15)",animation:"cpSpin 20s linear infinite"}}),f.jsxs("div",{style:{animation:"cpFloat 3.5s ease-in-out infinite",zIndex:2,textAlign:"center"},children:[f.jsxs("svg",{width:"100",height:"80",viewBox:"0 0 100 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("rect",{x:"5",y:"15",width:"90",height:"60",rx:"8",fill:"white",stroke:"#0e7490",strokeWidth:"2"}),f.jsx("path",{d:"M5 23 L50 48 L95 23",stroke:"#0e7490",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),f.jsx("path",{d:"M5 75 L35 48",stroke:"#0e7490",strokeWidth:"1.5",strokeLinecap:"round",opacity:".5"}),f.jsx("path",{d:"M95 75 L65 48",stroke:"#0e7490",strokeWidth:"1.5",strokeLinecap:"round",opacity:".5"}),f.jsx("circle",{cx:"75",cy:"22",r:"12",fill:"#0e7490"}),f.jsx("path",{d:"M69 22 L73 26 L81 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"18",strokeDashoffset:"18",style:{animation:"cpDash 1s .5s ease forwards",strokeDashoffset:18}})]}),f.jsx("div",{style:{marginTop:12,fontFamily:"Cormorant Garamond, Georgia, serif",fontSize:"1.1rem",fontWeight:600,color:"#0e7490"},children:"We'd love to hear from you"}),f.jsx("div",{style:{marginTop:4,fontFamily:"DM Sans, sans-serif",fontSize:".78rem",fontWeight:300,color:"#94a3b8"},children:"Fill the form and we'll reply on WhatsApp"})]}),f.jsxs("div",{style:{position:"absolute",top:32,right:24,background:"#fff",border:"1px solid rgba(14,116,144,.15)",borderRadius:12,padding:"8px 12px",boxShadow:"0 4px 16px rgba(14,116,144,.1)",display:"flex",alignItems:"center",gap:7,animation:"cpBounce 2.8s ease-in-out infinite",animationDelay:".4s"},children:[f.jsx("div",{style:{width:24,height:24,borderRadius:7,background:"#d1fae5",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(ws,{size:13,color:"#0f766e"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:".72rem",fontWeight:600,color:"#0c1a2e"},children:"WhatsApp"}),f.jsx("div",{style:{fontSize:".62rem",color:"#94a3b8",fontWeight:300},children:"Instant reply"})]})]}),f.jsxs("div",{style:{position:"absolute",bottom:36,left:20,background:"#fff",border:"1px solid rgba(14,116,144,.15)",borderRadius:12,padding:"8px 12px",boxShadow:"0 4px 16px rgba(14,116,144,.1)",display:"flex",alignItems:"center",gap:7,animation:"cpBounce 3.2s ease-in-out infinite",animationDelay:".8s"},children:[f.jsx("div",{style:{width:24,height:24,borderRadius:7,background:"#e0f7fa",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(Da,{size:13,color:"#0e7490"})}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:".72rem",fontWeight:600,color:"#0c1a2e"},children:"24h"}),f.jsx("div",{style:{fontSize:".62rem",color:"#94a3b8",fontWeight:300},children:"Response time"})]})]})]})}),f.jsxs("div",{className:"cp-hours",children:[f.jsxs("div",{className:"cp-hours-title",children:[f.jsx(Da,{size:16}),"Office Hours"]}),[{day:"Monday – Friday",time:"9:00 AM – 6:00 PM"},{day:"Saturday",time:"10:00 AM – 4:00 PM"},{day:"Sunday",time:"Closed"}].map(E=>f.jsxs("div",{className:"cp-hours-row",children:[f.jsx("span",{className:"cp-hours-day",children:E.day}),f.jsx("span",{className:"cp-hours-time",children:E.time})]},E.day))]})]})]})]})]})}const ed="https://lms-backend-7btf.onrender.com",xE=async()=>{try{return await window.Clerk?.session?.getToken()}catch{return null}},vE=()=>{const{id:a}=Sg(),r=Pr(),{isSignedIn:s,user:o}=Ol(),[i,d]=S.useState(null),[h,m]=S.useState(!0),[g,b]=S.useState(!1),[x,v]=S.useState(!1),[E,M]=S.useState(null),[k,N]=S.useState({name:"",number:"",expiry:"",cvv:""});S.useEffect(()=>{if(!s){r("/");return}(async()=>{try{const H=await(await fetch(`${ed}/courses/${a}`)).json();d(H)}catch{M("Failed to load course.")}finally{m(!1)}})()},[a,s]);const _=q=>{let{name:F,value:H}=q.target;F==="number"&&(H=H.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim()),F==="expiry"&&(H=H.replace(/\D/g,"").slice(0,4).replace(/^(.{2})(.+)/,"$1/$2")),F==="cvv"&&(H=H.replace(/\D/g,"").slice(0,3)),N($=>({...$,[F]:H}))},X=async q=>{if(q.preventDefault(),!k.name||k.number.replace(/\s/g,"").length<16||!k.expiry||k.cvv.length<3){M("Please fill all card details correctly.");return}M(null),b(!0);try{const F=await xE(),H=await fetch(`${ed}/payment/create-order`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${F}`},body:JSON.stringify({courseId:a})}),$=await H.json();if(!H.ok)throw new Error($.message);const V=await fetch(`${ed}/payment/verify`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${F}`},body:JSON.stringify({orderId:$.orderId,courseId:a,amount:$.amount,clerkId:o?.id})}),le=await V.json();if(!V.ok)throw new Error(le.message);v(!0),setTimeout(()=>r(`/courses/${a}`),3e3)}catch(F){M(F.message||"Payment failed. Please try again.")}finally{b(!1)}};if(h)return f.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f0f9ff",fontFamily:"DM Sans, sans-serif"},children:f.jsx("p",{style:{color:"#94a3b8"},children:"Loading..."})});if(E&&!i)return f.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#f0f9ff",fontFamily:"DM Sans, sans-serif",gap:12},children:[f.jsx("p",{style:{color:"#ef4444"},children:E}),f.jsx("button",{onClick:()=>r(-1),style:{padding:"10px 22px",background:"#0e7490",color:"#fff",border:"none",borderRadius:"100px",cursor:"pointer"},children:"Go Back"})]});const U=i?.price?.sale||i?.price?.original||0;return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:`
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
      `}),f.jsx("div",{className:"pay-page",children:x?f.jsx("div",{style:{background:"var(--white)",borderRadius:18,padding:40,maxWidth:440,width:"100%",boxShadow:"0 4px 24px rgba(14,116,144,.08)",textAlign:"center"},children:f.jsxs("div",{className:"pay-success",children:[f.jsx("div",{className:"pay-success-icon",children:f.jsx(Al,{size:36,color:"#0f766e"})}),f.jsx("div",{className:"pay-success-title",children:"Payment Successful! 🎉"}),f.jsxs("div",{className:"pay-success-sub",children:["You're now enrolled in ",f.jsx("strong",{children:i?.title}),".",f.jsx("br",{}),"Redirecting to your course..."]}),f.jsx("div",{className:"pay-success-bar",children:f.jsx("div",{className:"pay-success-fill"})})]})}):f.jsxs("div",{className:"pay-wrap",children:[f.jsxs("div",{className:"pay-left",children:[f.jsx("img",{src:i?.thumbnail||`https://picsum.photos/seed/${a}/600/300`,alt:i?.title,className:"pay-course-img"}),f.jsxs("div",{className:"pay-course-body",children:[f.jsx("div",{className:"pay-course-cat",children:i?.category}),f.jsx("div",{className:"pay-course-title",children:i?.title}),f.jsxs("div",{className:"pay-course-desc",children:[i?.description?.slice(0,120),i?.description?.length>120?"...":""]}),f.jsx("div",{className:"pay-divider"}),f.jsxs("div",{className:"pay-price-row",children:[f.jsxs("div",{children:[f.jsx("div",{className:"pay-price-label",children:"Total Amount"}),f.jsxs("div",{className:"pay-incl",children:[f.jsx(tt,{size:12})," Lifetime access included"]})]}),f.jsxs("div",{style:{textAlign:"right"},children:[f.jsxs("div",{className:"pay-price-val",children:["₹",U]}),i?.price?.original&&i?.price?.sale&&f.jsxs("div",{style:{fontSize:".75rem",color:"#94a3b8",textDecoration:"line-through"},children:["₹",i.price.original]})]})]})]})]}),f.jsxs("div",{className:"pay-right",children:[f.jsxs("button",{className:"pay-back",onClick:()=>r(-1),children:[f.jsx(D1,{size:14})," Back"]}),f.jsx("div",{className:"pay-form-title",children:"Complete Payment"}),f.jsxs("div",{className:"pay-form-sub",children:[f.jsx(bd,{size:12})," Secure & encrypted payment"]}),f.jsxs("form",{onSubmit:X,noValidate:!0,children:[f.jsxs("div",{className:"pay-field",children:[f.jsx("label",{className:"pay-label",children:"Cardholder Name"}),f.jsx("input",{className:"pay-input",name:"name",value:k.name,onChange:_,placeholder:"Name on card"})]}),f.jsxs("div",{className:"pay-field",children:[f.jsx("label",{className:"pay-label",children:"Card Number"}),f.jsx("input",{className:"pay-input",name:"number",value:k.number,onChange:_,placeholder:"1234 5678 9012 3456",maxLength:19})]}),f.jsxs("div",{className:"pay-row",children:[f.jsxs("div",{className:"pay-field",children:[f.jsx("label",{className:"pay-label",children:"Expiry Date"}),f.jsx("input",{className:"pay-input",name:"expiry",value:k.expiry,onChange:_,placeholder:"MM/YY",maxLength:5})]}),f.jsxs("div",{className:"pay-field",children:[f.jsx("label",{className:"pay-label",children:"CVV"}),f.jsx("input",{className:"pay-input",name:"cvv",value:k.cvv,onChange:_,placeholder:"123",maxLength:3,type:"password"})]})]}),E&&f.jsx("div",{className:"pay-error",children:E}),f.jsx("button",{type:"submit",className:"pay-btn",disabled:g,children:g?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"pay-spinner"})," Processing..."]}):f.jsxs(f.Fragment,{children:[f.jsx(G5,{size:16})," Pay ₹",U," Now"]})}),f.jsxs("div",{className:"pay-secure",children:[f.jsx($1,{size:12})," 256-bit SSL encrypted · Safe & secure"]})]})]})]})})]})},Oa=({children:a})=>f.jsxs(f.Fragment,{children:[f.jsx(Pj,{}),f.jsx("main",{children:a}),f.jsx($j,{})]});function SE(){const{dbUser:a}=v5();return S.useEffect(()=>{a&&console.log("✅ User synced:",a.name)},[a]),f.jsxs(Nv,{children:[f.jsx(_n,{path:"/",element:f.jsx(Yj,{})}),f.jsx(_n,{path:"/courses",element:f.jsx(Oa,{children:f.jsx(Wj,{})})}),f.jsx(_n,{path:"/courses/:id",element:f.jsx(Oa,{children:f.jsx(aE,{})})}),f.jsx(_n,{path:"/payment/:id",element:f.jsx(Oa,{children:f.jsx(vE,{})})}),f.jsx(_n,{path:"/about",element:f.jsx(Oa,{children:f.jsx(cE,{})})}),f.jsx(_n,{path:"/faculty",element:f.jsx(Oa,{children:f.jsx(mE,{})})}),f.jsx(_n,{path:"/contact",element:f.jsx(Oa,{children:f.jsx(yE,{})})}),f.jsx(_n,{path:"*",element:f.jsx(Oa,{children:f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"80vh",gap:16,textAlign:"center",padding:"0 24px"},children:[f.jsx("div",{style:{fontSize:"5rem",fontWeight:700,color:"#e2e8f0"},children:"404"}),f.jsx("div",{style:{fontSize:"1.4rem",fontWeight:600,color:"#0c1a2e"},children:"Page not found"}),f.jsx("a",{href:"/",style:{marginTop:8,padding:"11px 26px",borderRadius:"100px",background:"#0e7490",color:"#fff",textDecoration:"none",fontSize:"0.88rem",fontWeight:500},children:"Back to Home"})]})})})]})}const wE="pk_live_Y2xlcmsubXJzdXNoYW50cmFuamFuLmdpdGh1Yi5pbyQ";Tx.createRoot(document.getElementById("root")).render(f.jsx(D.StrictMode,{children:f.jsx(Jv,{children:f.jsx(d1,{publishableKey:wE,clerkJSUrl:"https://cdn.jsdelivr.net/npm/@clerk/clerk-js@5/dist/clerk.browser.js",afterSignOutUrl:"/",children:f.jsx(SE,{})})})}));
