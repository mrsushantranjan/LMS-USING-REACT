(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function u(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=u(d);fetch(d.href,p)}})();function ym(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Mc={exports:{}},ui={};var _h;function I1(){if(_h)return ui;_h=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,d,p){var h=null;if(p!==void 0&&(h=""+p),d.key!==void 0&&(h=""+d.key),"key"in d){p={};for(var g in d)g!=="key"&&(p[g]=d[g])}else p=d;return d=p.ref,{$$typeof:l,type:c,key:h,ref:d!==void 0?d:null,props:p}}return ui.Fragment=o,ui.jsx=u,ui.jsxs=u,ui}var Mh;function P1(){return Mh||(Mh=1,Mc.exports=I1()),Mc.exports}var r=P1(),Dc={exports:{}},ce={};var Dh;function ex(){if(Dh)return ce;Dh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),k=Symbol.iterator;function X(w){return w===null||typeof w!="object"?null:(w=k&&w[k]||w["@@iterator"],typeof w=="function"?w:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,C={};function Q(w,L,W){this.props=w,this.context=L,this.refs=C,this.updater=W||E}Q.prototype.isReactComponent={},Q.prototype.setState=function(w,L){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,L,"setState")},Q.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function F(){}F.prototype=Q.prototype;function Z(w,L,W){this.props=w,this.context=L,this.refs=C,this.updater=W||E}var K=Z.prototype=new F;K.constructor=Z,D(K,Q.prototype),K.isPureReactComponent=!0;var Y=Array.isArray;function B(){}var G={H:null,A:null,T:null,S:null},ae=Object.prototype.hasOwnProperty;function oe(w,L,W){var V=W.ref;return{$$typeof:l,type:w,key:L,ref:V!==void 0?V:null,props:W}}function ke(w,L){return oe(w.type,L,w.props)}function Me(w){return typeof w=="object"&&w!==null&&w.$$typeof===l}function we(w){var L={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(W){return L[W]})}var $=/\/+/g;function ue(w,L){return typeof w=="object"&&w!==null&&w.key!=null?we(""+w.key):L.toString(36)}function he(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(B,B):(w.status="pending",w.then(function(L){w.status==="pending"&&(w.status="fulfilled",w.value=L)},function(L){w.status==="pending"&&(w.status="rejected",w.reason=L)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function O(w,L,W,V,I){var ie=typeof w;(ie==="undefined"||ie==="boolean")&&(w=null);var pe=!1;if(w===null)pe=!0;else switch(ie){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(w.$$typeof){case l:case o:pe=!0;break;case y:return pe=w._init,O(pe(w._payload),L,W,V,I)}}if(pe)return I=I(w),pe=V===""?"."+ue(w,0):V,Y(I)?(W="",pe!=null&&(W=pe.replace($,"$&/")+"/"),O(I,L,W,"",function(ja){return ja})):I!=null&&(Me(I)&&(I=ke(I,W+(I.key==null||w&&w.key===I.key?"":(""+I.key).replace($,"$&/")+"/")+pe)),L.push(I)),1;pe=0;var Be=V===""?".":V+":";if(Y(w))for(var Oe=0;Oe<w.length;Oe++)V=w[Oe],ie=Be+ue(V,Oe),pe+=O(V,L,W,ie,I);else if(Oe=X(w),typeof Oe=="function")for(w=Oe.call(w),Oe=0;!(V=w.next()).done;)V=V.value,ie=Be+ue(V,Oe++),pe+=O(V,L,W,ie,I);else if(ie==="object"){if(typeof w.then=="function")return O(he(w),L,W,V,I);throw L=String(w),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return pe}function J(w,L,W){if(w==null)return w;var V=[],I=0;return O(w,V,"","",function(ie){return L.call(W,ie,I++)}),V}function ee(w){if(w._status===-1){var L=w._result;L=L(),L.then(function(W){(w._status===0||w._status===-1)&&(w._status=1,w._result=W)},function(W){(w._status===0||w._status===-1)&&(w._status=2,w._result=W)}),w._status===-1&&(w._status=0,w._result=L)}if(w._status===1)return w._result.default;throw w._result}var ve=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},Ne={map:J,forEach:function(w,L,W){J(w,function(){L.apply(this,arguments)},W)},count:function(w){var L=0;return J(w,function(){L++}),L},toArray:function(w){return J(w,function(L){return L})||[]},only:function(w){if(!Me(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ce.Activity=j,ce.Children=Ne,ce.Component=Q,ce.Fragment=u,ce.Profiler=d,ce.PureComponent=Z,ce.StrictMode=c,ce.Suspense=b,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ce.__COMPILER_RUNTIME={__proto__:null,c:function(w){return G.H.useMemoCache(w)}},ce.cache=function(w){return function(){return w.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(w,L,W){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var V=D({},w.props),I=w.key;if(L!=null)for(ie in L.key!==void 0&&(I=""+L.key),L)!ae.call(L,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&L.ref===void 0||(V[ie]=L[ie]);var ie=arguments.length-2;if(ie===1)V.children=W;else if(1<ie){for(var pe=Array(ie),Be=0;Be<ie;Be++)pe[Be]=arguments[Be+2];V.children=pe}return oe(w.type,I,V)},ce.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:p,_context:w},w},ce.createElement=function(w,L,W){var V,I={},ie=null;if(L!=null)for(V in L.key!==void 0&&(ie=""+L.key),L)ae.call(L,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(I[V]=L[V]);var pe=arguments.length-2;if(pe===1)I.children=W;else if(1<pe){for(var Be=Array(pe),Oe=0;Oe<pe;Oe++)Be[Oe]=arguments[Oe+2];I.children=Be}if(w&&w.defaultProps)for(V in pe=w.defaultProps,pe)I[V]===void 0&&(I[V]=pe[V]);return oe(w,ie,I)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(w){return{$$typeof:g,render:w}},ce.isValidElement=Me,ce.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:ee}},ce.memo=function(w,L){return{$$typeof:x,type:w,compare:L===void 0?null:L}},ce.startTransition=function(w){var L=G.T,W={};G.T=W;try{var V=w(),I=G.S;I!==null&&I(W,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(B,ve)}catch(ie){ve(ie)}finally{L!==null&&W.types!==null&&(L.types=W.types),G.T=L}},ce.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ce.use=function(w){return G.H.use(w)},ce.useActionState=function(w,L,W){return G.H.useActionState(w,L,W)},ce.useCallback=function(w,L){return G.H.useCallback(w,L)},ce.useContext=function(w){return G.H.useContext(w)},ce.useDebugValue=function(){},ce.useDeferredValue=function(w,L){return G.H.useDeferredValue(w,L)},ce.useEffect=function(w,L){return G.H.useEffect(w,L)},ce.useEffectEvent=function(w){return G.H.useEffectEvent(w)},ce.useId=function(){return G.H.useId()},ce.useImperativeHandle=function(w,L,W){return G.H.useImperativeHandle(w,L,W)},ce.useInsertionEffect=function(w,L){return G.H.useInsertionEffect(w,L)},ce.useLayoutEffect=function(w,L){return G.H.useLayoutEffect(w,L)},ce.useMemo=function(w,L){return G.H.useMemo(w,L)},ce.useOptimistic=function(w,L){return G.H.useOptimistic(w,L)},ce.useReducer=function(w,L,W){return G.H.useReducer(w,L,W)},ce.useRef=function(w){return G.H.useRef(w)},ce.useState=function(w){return G.H.useState(w)},ce.useSyncExternalStore=function(w,L,W){return G.H.useSyncExternalStore(w,L,W)},ce.useTransition=function(){return G.H.useTransition()},ce.version="19.2.5",ce}var Uh;function fu(){return Uh||(Uh=1,Dc.exports=ex()),Dc.exports}var S=fu();const vm=ym(S);var Uc={exports:{}},di={},Lc={exports:{}},Hc={};var Lh;function tx(){return Lh||(Lh=1,(function(l){function o(O,J){var ee=O.length;O.push(J);e:for(;0<ee;){var ve=ee-1>>>1,Ne=O[ve];if(0<d(Ne,J))O[ve]=J,O[ee]=Ne,ee=ve;else break e}}function u(O){return O.length===0?null:O[0]}function c(O){if(O.length===0)return null;var J=O[0],ee=O.pop();if(ee!==J){O[0]=ee;e:for(var ve=0,Ne=O.length,w=Ne>>>1;ve<w;){var L=2*(ve+1)-1,W=O[L],V=L+1,I=O[V];if(0>d(W,ee))V<Ne&&0>d(I,W)?(O[ve]=I,O[V]=ee,ve=V):(O[ve]=W,O[L]=ee,ve=L);else if(V<Ne&&0>d(I,ee))O[ve]=I,O[V]=ee,ve=V;else break e}}return J}function d(O,J){var ee=O.sortIndex-J.sortIndex;return ee!==0?ee:O.id-J.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var h=Date,g=h.now();l.unstable_now=function(){return h.now()-g}}var b=[],x=[],y=1,j=null,k=3,X=!1,E=!1,D=!1,C=!1,Q=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function K(O){for(var J=u(x);J!==null;){if(J.callback===null)c(x);else if(J.startTime<=O)c(x),J.sortIndex=J.expirationTime,o(b,J);else break;J=u(x)}}function Y(O){if(D=!1,K(O),!E)if(u(b)!==null)E=!0,B||(B=!0,we());else{var J=u(x);J!==null&&he(Y,J.startTime-O)}}var B=!1,G=-1,ae=5,oe=-1;function ke(){return C?!0:!(l.unstable_now()-oe<ae)}function Me(){if(C=!1,B){var O=l.unstable_now();oe=O;var J=!0;try{e:{E=!1,D&&(D=!1,F(G),G=-1),X=!0;var ee=k;try{t:{for(K(O),j=u(b);j!==null&&!(j.expirationTime>O&&ke());){var ve=j.callback;if(typeof ve=="function"){j.callback=null,k=j.priorityLevel;var Ne=ve(j.expirationTime<=O);if(O=l.unstable_now(),typeof Ne=="function"){j.callback=Ne,K(O),J=!0;break t}j===u(b)&&c(b),K(O)}else c(b);j=u(b)}if(j!==null)J=!0;else{var w=u(x);w!==null&&he(Y,w.startTime-O),J=!1}}break e}finally{j=null,k=ee,X=!1}J=void 0}}finally{J?we():B=!1}}}var we;if(typeof Z=="function")we=function(){Z(Me)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ue=$.port2;$.port1.onmessage=Me,we=function(){ue.postMessage(null)}}else we=function(){Q(Me,0)};function he(O,J){G=Q(function(){O(l.unstable_now())},J)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(O){O.callback=null},l.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<O?Math.floor(1e3/O):5},l.unstable_getCurrentPriorityLevel=function(){return k},l.unstable_next=function(O){switch(k){case 1:case 2:case 3:var J=3;break;default:J=k}var ee=k;k=J;try{return O()}finally{k=ee}},l.unstable_requestPaint=function(){C=!0},l.unstable_runWithPriority=function(O,J){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ee=k;k=O;try{return J()}finally{k=ee}},l.unstable_scheduleCallback=function(O,J,ee){var ve=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ve+ee:ve):ee=ve,O){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=ee+Ne,O={id:y++,callback:J,priorityLevel:O,startTime:ee,expirationTime:Ne,sortIndex:-1},ee>ve?(O.sortIndex=ee,o(x,O),u(b)===null&&O===u(x)&&(D?(F(G),G=-1):D=!0,he(Y,ee-ve))):(O.sortIndex=Ne,o(b,O),E||X||(E=!0,B||(B=!0,we()))),O},l.unstable_shouldYield=ke,l.unstable_wrapCallback=function(O){var J=k;return function(){var ee=k;k=J;try{return O.apply(this,arguments)}finally{k=ee}}}})(Hc)),Hc}var Hh;function ax(){return Hh||(Hh=1,Lc.exports=tx()),Lc.exports}var Bc={exports:{}},lt={};var Bh;function nx(){if(Bh)return lt;Bh=1;var l=fu();function o(b){var x="https://react.dev/errors/"+b;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)x+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+b+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(b,x,y){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:j==null?null:""+j,children:b,containerInfo:x,implementation:y}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,x){if(b==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,lt.createPortal=function(b,x){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(o(299));return p(b,x,null,y)},lt.flushSync=function(b){var x=h.T,y=c.p;try{if(h.T=null,c.p=2,b)return b()}finally{h.T=x,c.p=y,c.d.f()}},lt.preconnect=function(b,x){typeof b=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,c.d.C(b,x))},lt.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},lt.preinit=function(b,x){if(typeof b=="string"&&x&&typeof x.as=="string"){var y=x.as,j=g(y,x.crossOrigin),k=typeof x.integrity=="string"?x.integrity:void 0,X=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;y==="style"?c.d.S(b,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:j,integrity:k,fetchPriority:X}):y==="script"&&c.d.X(b,{crossOrigin:j,integrity:k,fetchPriority:X,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},lt.preinitModule=function(b,x){if(typeof b=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var y=g(x.as,x.crossOrigin);c.d.M(b,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&c.d.M(b)},lt.preload=function(b,x){if(typeof b=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var y=x.as,j=g(y,x.crossOrigin);c.d.L(b,y,{crossOrigin:j,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},lt.preloadModule=function(b,x){if(typeof b=="string")if(x){var y=g(x.as,x.crossOrigin);c.d.m(b,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else c.d.m(b)},lt.requestFormReset=function(b){c.d.r(b)},lt.unstable_batchedUpdates=function(b,x){return b(x)},lt.useFormState=function(b,x,y){return h.H.useFormState(b,x,y)},lt.useFormStatus=function(){return h.H.useHostTransitionStatus()},lt.version="19.2.5",lt}var qh;function lx(){if(qh)return Bc.exports;qh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Bc.exports=nx(),Bc.exports}var Yh;function ix(){if(Yh)return di;Yh=1;var l=ax(),o=fu(),u=lx();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(p(e)!==e)throw Error(c(188))}function x(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return b(i),e;if(s===n)return b(i),t;s=s.sibling}throw Error(c(188))}if(a.return!==n.return)a=i,n=s;else{for(var f=!1,m=i.child;m;){if(m===a){f=!0,a=i,n=s;break}if(m===n){f=!0,n=i,a=s;break}m=m.sibling}if(!f){for(m=s.child;m;){if(m===a){f=!0,a=s,n=i;break}if(m===n){f=!0,n=s,a=i;break}m=m.sibling}if(!f)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,k=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),ke=Symbol.for("react.memo_cache_sentinel"),Me=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=Me&&e[Me]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case Q:return"Profiler";case C:return"StrictMode";case Y:return"Suspense";case B:return"SuspenseList";case oe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case Z:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case ae:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var he=Array.isArray,O=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ve=[],Ne=-1;function w(e){return{current:e}}function L(e){0>Ne||(e.current=ve[Ne],ve[Ne]=null,Ne--)}function W(e,t){Ne++,ve[Ne]=e.current,e.current=t}var V=w(null),I=w(null),ie=w(null),pe=w(null);function Be(e,t){switch(W(ie,t),W(I,e),W(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ah(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ah(t),e=nh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(V),W(V,e)}function Oe(){L(V),L(I),L(ie)}function ja(e){e.memoizedState!==null&&W(pe,e);var t=V.current,a=nh(t,e.type);t!==a&&(W(I,e),W(V,a))}function $a(e){I.current===e&&(L(V),L(I)),pe.current===e&&(L(pe),ri._currentValue=ee)}var xl,ku;function Fa(e){if(xl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||"",ku=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xl+e+ku}var gs=!1;function xs(e,t){if(!e||gs)return"";gs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(M){var T=M}Reflect.construct(e,[],q)}else{try{q.call()}catch(M){T=M}e.call(q.prototype)}}else{try{throw Error()}catch(M){T=M}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(M){if(M&&T&&typeof M.stack=="string")return[M.stack,T.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),f=s[0],m=s[1];if(f&&m){var v=f.split(`
`),R=m.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===R.length)for(n=v.length-1,i=R.length-1;1<=n&&0<=i&&v[n]!==R[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==R[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==R[i]){var U=`
`+v[n].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=n&&0<=i);break}}}finally{gs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Fa(a):""}function R0(e,t){switch(e.tag){case 26:case 27:case 5:return Fa(e.type);case 16:return Fa("Lazy");case 13:return e.child!==t&&t!==null?Fa("Suspense Fallback"):Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 15:return xs(e.type,!1);case 11:return xs(e.type.render,!1);case 1:return xs(e.type,!0);case 31:return Fa("Activity");default:return""}}function Ou(e){try{var t="",a=null;do t+=R0(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var bs=Object.prototype.hasOwnProperty,ys=l.unstable_scheduleCallback,vs=l.unstable_cancelCallback,T0=l.unstable_shouldYield,k0=l.unstable_requestPaint,bt=l.unstable_now,O0=l.unstable_getCurrentPriorityLevel,_u=l.unstable_ImmediatePriority,Mu=l.unstable_UserBlockingPriority,zi=l.unstable_NormalPriority,_0=l.unstable_LowPriority,Du=l.unstable_IdlePriority,M0=l.log,D0=l.unstable_setDisableYieldValue,bl=null,yt=null;function wa(e){if(typeof M0=="function"&&D0(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(bl,e)}catch{}}var vt=Math.clz32?Math.clz32:H0,U0=Math.log,L0=Math.LN2;function H0(e){return e>>>=0,e===0?32:31-(U0(e)/L0|0)|0}var Ci=256,Ai=262144,Ri=4194304;function Wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ti(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=n&134217727;return m!==0?(n=m&~s,n!==0?i=Wa(n):(f&=m,f!==0?i=Wa(f):a||(a=m&~e,a!==0&&(i=Wa(a))))):(m=n&~s,m!==0?i=Wa(m):f!==0?i=Wa(f):a||(a=n&~e,a!==0&&(i=Wa(a)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:i}function yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function B0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uu(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function Ss(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function vl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function q0(e,t,a,n,i,s){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,R=e.hiddenUpdates;for(a=f&~a;0<a;){var U=31-vt(a),q=1<<U;m[U]=0,v[U]=-1;var T=R[U];if(T!==null)for(R[U]=null,U=0;U<T.length;U++){var M=T[U];M!==null&&(M.lane&=-536870913)}a&=~q}n!==0&&Lu(e,n,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(f&~t))}function Lu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-vt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Hu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-vt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Bu(e,t){var a=t&-t;return a=(a&42)!==0?1:js(a),(a&(e.suspendedLanes|t))!==0?0:a}function js(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qu(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:zh(e.type))}function Yu(e,t){var a=J.p;try{return J.p=e,t()}finally{J.p=a}}var Na=Math.random().toString(36).slice(2),Pe="__reactFiber$"+Na,st="__reactProps$"+Na,wn="__reactContainer$"+Na,Ns="__reactEvents$"+Na,Y0="__reactListeners$"+Na,G0="__reactHandles$"+Na,Gu="__reactResources$"+Na,Sl="__reactMarker$"+Na;function Es(e){delete e[Pe],delete e[st],delete e[Ns],delete e[Y0],delete e[G0]}function Nn(e){var t=e[Pe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[wn]||a[Pe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=uh(e);e!==null;){if(a=e[Pe])return a;e=uh(e)}return t}e=a,a=e.parentNode}return null}function En(e){if(e=e[Pe]||e[wn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function jl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function zn(e){var t=e[Gu];return t||(t=e[Gu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Sl]=!0}var Vu=new Set,Xu={};function Ia(e,t){Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(Xu[e]=t,e=0;e<t.length;e++)Vu.add(t[e])}var V0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qu={},Zu={};function X0(e){return bs.call(Zu,e)?!0:bs.call(Qu,e)?!1:V0.test(e)?Zu[e]=!0:(Qu[e]=!0,!1)}function ki(e,t,a){if(X0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Oi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Pt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Q0(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,s.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zs(e){if(!e._valueTracker){var t=Ku(e)?"checked":"value";e._valueTracker=Q0(e,t,""+e[t])}}function Ju(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ku(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Z0=/[\n"\\]/g;function kt(e){return e.replace(Z0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cs(e,t,a,n,i,s,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?As(e,f,Tt(t)):a!=null?As(e,f,Tt(a)):n!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Tt(m):e.removeAttribute("name")}function $u(e,t,a,n,i,s,f,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){zs(e);return}a=a!=null?""+Tt(a):"",t=t!=null?""+Tt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=m?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),zs(e)}function As(e,t,a){t==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function An(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Tt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fu(e,t,a){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Tt(a):""}function Wu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(he(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Tt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),zs(e)}function Rn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var K0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Iu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||K0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Pu(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Iu(e,i,n)}else for(var s in t)t.hasOwnProperty(s)&&Iu(e,s,t[s])}function Rs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mi(e){return $0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var Ts=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tn=null,kn=null;function ed(e){var t=En(e);if(t&&(e=t.stateNode)){var a=e[st]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[st]||null;if(!i)throw Error(c(90));Cs(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ju(n)}break e;case"textarea":Fu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&An(e,!!a.multiple,t,!1)}}}var Os=!1;function td(e,t,a){if(Os)return e(t,a);Os=!0;try{var n=e(t);return n}finally{if(Os=!1,(Tn!==null||kn!==null)&&(Sr(),Tn&&(t=Tn,e=kn,kn=Tn=null,ed(t),e)))for(t=0;t<e.length;t++)ed(e[t])}}function wl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[st]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_s=!1;if(ta)try{var Nl={};Object.defineProperty(Nl,"passive",{get:function(){_s=!0}}),window.addEventListener("test",Nl,Nl),window.removeEventListener("test",Nl,Nl)}catch{_s=!1}var Ea=null,Ms=null,Di=null;function ad(){if(Di)return Di;var e,t=Ms,a=t.length,n,i="value"in Ea?Ea.value:Ea.textContent,s=i.length;for(e=0;e<a&&t[e]===i[e];e++);var f=a-e;for(n=1;n<=f&&t[a-n]===i[s-n];n++);return Di=i.slice(e,1<n?1-n:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function nd(){return!1}function ot(e){function t(a,n,i,s,f){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Li:nd,this.isPropagationStopped=nd,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=ot(Pa),El=j({},Pa,{view:0,detail:0}),F0=ot(El),Ds,Us,zl,Bi=j({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(Ds=e.screenX-zl.screenX,Us=e.screenY-zl.screenY):Us=Ds=0,zl=e),Ds)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),ld=ot(Bi),W0=j({},Bi,{dataTransfer:0}),I0=ot(W0),P0=j({},El,{relatedTarget:0}),Ls=ot(P0),eg=j({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=ot(eg),ag=j({},Pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ng=ot(ag),lg=j({},Pa,{data:0}),id=ot(lg),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function og(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sg[e])?!!t[e]:!1}function Hs(){return og}var cg=j({},El,{key:function(e){if(e.key){var t=ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ug=ot(cg),dg=j({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=ot(dg),fg=j({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),pg=ot(fg),hg=j({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),mg=ot(hg),gg=j({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xg=ot(gg),bg=j({},Pa,{newState:0,oldState:0}),yg=ot(bg),vg=[9,13,27,32],Bs=ta&&"CompositionEvent"in window,Cl=null;ta&&"documentMode"in document&&(Cl=document.documentMode);var Sg=ta&&"TextEvent"in window&&!Cl,sd=ta&&(!Bs||Cl&&8<Cl&&11>=Cl),od=" ",cd=!1;function ud(e,t){switch(e){case"keyup":return vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function jg(e,t){switch(e){case"compositionend":return dd(t);case"keypress":return t.which!==32?null:(cd=!0,od);case"textInput":return e=t.data,e===od&&cd?null:e;default:return null}}function wg(e,t){if(On)return e==="compositionend"||!Bs&&ud(e,t)?(e=ad(),Di=Ms=Ea=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sd&&t.locale!=="ko"?null:t.data;default:return null}}var Ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ng[e.type]:t==="textarea"}function pd(e,t,a,n){Tn?kn?kn.push(n):kn=[n]:Tn=n,t=Ar(t,"onChange"),0<t.length&&(a=new Hi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Al=null,Rl=null;function Eg(e){Fp(e,0)}function qi(e){var t=jl(e);if(Ju(t))return e}function hd(e,t){if(e==="change")return t}var md=!1;if(ta){var qs;if(ta){var Ys="oninput"in document;if(!Ys){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),Ys=typeof gd.oninput=="function"}qs=Ys}else qs=!1;md=qs&&(!document.documentMode||9<document.documentMode)}function xd(){Al&&(Al.detachEvent("onpropertychange",bd),Rl=Al=null)}function bd(e){if(e.propertyName==="value"&&qi(Rl)){var t=[];pd(t,Rl,e,ks(e)),td(Eg,t)}}function zg(e,t,a){e==="focusin"?(xd(),Al=t,Rl=a,Al.attachEvent("onpropertychange",bd)):e==="focusout"&&xd()}function Cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Rl)}function Ag(e,t){if(e==="click")return qi(t)}function Rg(e,t){if(e==="input"||e==="change")return qi(t)}function Tg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Tg;function Tl(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!bs.call(t,i)||!St(e[i],t[i]))return!1}return!0}function yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vd(e,t){var a=yd(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yd(a)}}function Sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_i(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=_i(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kg=ta&&"documentMode"in document&&11>=document.documentMode,_n=null,Vs=null,kl=null,Xs=!1;function wd(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xs||_n==null||_n!==_i(n)||(n=_n,"selectionStart"in n&&Gs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kl&&Tl(kl,n)||(kl=n,n=Ar(Vs,"onSelect"),0<n.length&&(t=new Hi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=_n)))}function en(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Mn={animationend:en("Animation","AnimationEnd"),animationiteration:en("Animation","AnimationIteration"),animationstart:en("Animation","AnimationStart"),transitionrun:en("Transition","TransitionRun"),transitionstart:en("Transition","TransitionStart"),transitioncancel:en("Transition","TransitionCancel"),transitionend:en("Transition","TransitionEnd")},Qs={},Nd={};ta&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function tn(e){if(Qs[e])return Qs[e];if(!Mn[e])return e;var t=Mn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Nd)return Qs[e]=t[a];return e}var Ed=tn("animationend"),zd=tn("animationiteration"),Cd=tn("animationstart"),Og=tn("transitionrun"),_g=tn("transitionstart"),Mg=tn("transitioncancel"),Ad=tn("transitionend"),Rd=new Map,Zs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zs.push("scrollEnd");function Gt(e,t){Rd.set(e,t),Ia(t,[e])}var Yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ot=[],Dn=0,Ks=0;function Gi(){for(var e=Dn,t=Ks=Dn=0;t<e;){var a=Ot[t];Ot[t++]=null;var n=Ot[t];Ot[t++]=null;var i=Ot[t];Ot[t++]=null;var s=Ot[t];if(Ot[t++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}s!==0&&Td(a,i,s)}}function Vi(e,t,a,n){Ot[Dn++]=e,Ot[Dn++]=t,Ot[Dn++]=a,Ot[Dn++]=n,Ks|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Js(e,t,a,n){return Vi(e,t,a,n),Xi(e)}function an(e,t){return Vi(e,null,null,t),Xi(e)}function Td(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-vt(a),e=s.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),s):null}function Xi(e){if(50<Pl)throw Pl=0,lc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Un={};function Dg(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,a,n){return new Dg(e,t,a,n)}function $s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,t){var a=e.alternate;return a===null?(a=jt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,a,n,i,s){var f=0;if(n=e,typeof e=="function")$s(e)&&(f=1);else if(typeof e=="string")f=q1(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case oe:return e=jt(31,a,t,i),e.elementType=oe,e.lanes=s,e;case D:return nn(a.children,i,s,t);case C:f=8,i|=24;break;case Q:return e=jt(12,a,t,i|2),e.elementType=Q,e.lanes=s,e;case Y:return e=jt(13,a,t,i),e.elementType=Y,e.lanes=s,e;case B:return e=jt(19,a,t,i),e.elementType=B,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:f=10;break e;case F:f=9;break e;case K:f=11;break e;case G:f=14;break e;case ae:f=16,n=null;break e}f=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=jt(f,a,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function nn(e,t,a,n){return e=jt(7,e,n,t),e.lanes=a,e}function Fs(e,t,a){return e=jt(6,e,null,t),e.lanes=a,e}function Od(e){var t=jt(18,null,null,0);return t.stateNode=e,t}function Ws(e,t,a){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _d=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var a=_d.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ou(t)},_d.set(e,t),t)}return{value:e,source:t,stack:Ou(t)}}var Ln=[],Hn=0,Zi=null,Ol=0,Mt=[],Dt=0,za=null,$t=1,Ft="";function na(e,t){Ln[Hn++]=Ol,Ln[Hn++]=Zi,Zi=e,Ol=t}function Md(e,t,a){Mt[Dt++]=$t,Mt[Dt++]=Ft,Mt[Dt++]=za,za=e;var n=$t;e=Ft;var i=32-vt(n)-1;n&=~(1<<i),a+=1;var s=32-vt(t)+i;if(30<s){var f=i-i%5;s=(n&(1<<f)-1).toString(32),n>>=f,i-=f,$t=1<<32-vt(t)+i|a<<i|n,Ft=s+e}else $t=1<<s|a<<i|n,Ft=e}function Is(e){e.return!==null&&(na(e,1),Md(e,1,0))}function Ps(e){for(;e===Zi;)Zi=Ln[--Hn],Ln[Hn]=null,Ol=Ln[--Hn],Ln[Hn]=null;for(;e===za;)za=Mt[--Dt],Mt[Dt]=null,Ft=Mt[--Dt],Mt[Dt]=null,$t=Mt[--Dt],Mt[Dt]=null}function Dd(e,t){Mt[Dt++]=$t,Mt[Dt++]=Ft,Mt[Dt++]=za,$t=t.id,Ft=t.overflow,za=e}var et=null,De=null,ye=!1,Ca=null,Ut=!1,eo=Error(c(519));function Aa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _l(_t(t,e)),eo}function Ud(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Pe]=e,t[st]=n,a){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(a=0;a<ti.length;a++)ge(ti[a],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":ge("invalid",t),$u(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ge("invalid",t);break;case"textarea":ge("invalid",t),Wu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||eh(t.textContent,a)?(n.popover!=null&&(ge("beforetoggle",t),ge("toggle",t)),n.onScroll!=null&&ge("scroll",t),n.onScrollEnd!=null&&ge("scrollend",t),n.onClick!=null&&(t.onclick=ea),t=!0):t=!1,t||Aa(e,!0)}function Ld(e){for(et=e.return;et;)switch(et.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:et=et.return}}function Bn(e){if(e!==et)return!1;if(!ye)return Ld(e),ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yc(e.type,e.memoizedProps)),a=!a),a&&De&&Aa(e),Ld(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));De=ch(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));De=ch(e)}else t===27?(t=De,Ga(e.type)?(e=Nc,Nc=null,De=e):De=t):De=et?Ht(e.stateNode.nextSibling):null;return!0}function ln(){De=et=null,ye=!1}function to(){var e=Ca;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),Ca=null),e}function _l(e){Ca===null?Ca=[e]:Ca.push(e)}var ao=w(null),rn=null,la=null;function Ra(e,t,a){W(ao,t._currentValue),t._currentValue=a}function ia(e){e._currentValue=ao.current,L(ao)}function no(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function lo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var f=i.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=i;for(var v=0;v<t.length;v++)if(m.context===t[v]){s.lanes|=a,m=s.alternate,m!==null&&(m.lanes|=a),no(s.return,a,e),n||(f=null);break e}s=m.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(c(341));f.lanes|=a,s=f.alternate,s!==null&&(s.lanes|=a),no(f,a,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function qn(e,t,a,n){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var m=i.type;St(i.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(i===pe.current){if(f=i.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ri):e=[ri])}i=i.return}e!==null&&lo(t,e,a,n),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sn(e){rn=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return Hd(rn,e)}function Ji(e,t){return rn===null&&sn(e),Hd(e,t)}function Hd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},la===null){if(e===null)throw Error(c(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return a}var Ug=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Lg=l.unstable_scheduleCallback,Hg=l.unstable_NormalPriority,Qe={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function io(){return{controller:new Ug,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&Lg(Hg,function(){e.controller.abort()})}var Dl=null,ro=0,Yn=0,Gn=null;function Bg(e,t){if(Dl===null){var a=Dl=[];ro=0,Yn=uc(),Gn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ro++,t.then(Bd,Bd),t}function Bd(){if(--ro===0&&Dl!==null){Gn!==null&&(Gn.status="fulfilled");var e=Dl;Dl=null,Yn=0,Gn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var qd=O.S;O.S=function(e,t){Np=bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bg(e,t),qd!==null&&qd(e,t)};var on=w(null);function so(){var e=on.current;return e!==null?e:_e.pooledCache}function $i(e,t){t===null?W(on,on.current):W(on,t.pool)}function Yd(){var e=so();return e===null?null:{parent:Qe._currentValue,pool:e}}var Vn=Error(c(460)),oo=Error(c(474)),Fi=Error(c(542)),Wi={then:function(){}};function Gd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ea,ea),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qd(e),e;default:if(typeof t.status=="string")t.then(ea,ea);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qd(e),e}throw un=t,Vn}}function cn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(un=a,Vn):a}}var un=null;function Xd(){if(un===null)throw Error(c(459));var e=un;return un=null,e}function Qd(e){if(e===Vn||e===Fi)throw Error(c(483))}var Xn=null,Ul=0;function Ii(e){var t=Ul;return Ul+=1,Xn===null&&(Xn=[]),Vd(Xn,e,t)}function Ll(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pi(e,t){throw t.$$typeof===k?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Zd(e){function t(z,N){if(e){var A=z.deletions;A===null?(z.deletions=[N],z.flags|=16):A.push(N)}}function a(z,N){if(!e)return null;for(;N!==null;)t(z,N),N=N.sibling;return null}function n(z){for(var N=new Map;z!==null;)z.key!==null?N.set(z.key,z):N.set(z.index,z),z=z.sibling;return N}function i(z,N){return z=aa(z,N),z.index=0,z.sibling=null,z}function s(z,N,A){return z.index=A,e?(A=z.alternate,A!==null?(A=A.index,A<N?(z.flags|=67108866,N):A):(z.flags|=67108866,N)):(z.flags|=1048576,N)}function f(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,N,A,H){return N===null||N.tag!==6?(N=Fs(A,z.mode,H),N.return=z,N):(N=i(N,A),N.return=z,N)}function v(z,N,A,H){var ne=A.type;return ne===D?U(z,N,A.props.children,H,A.key):N!==null&&(N.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ae&&cn(ne)===N.type)?(N=i(N,A.props),Ll(N,A),N.return=z,N):(N=Qi(A.type,A.key,A.props,null,z.mode,H),Ll(N,A),N.return=z,N)}function R(z,N,A,H){return N===null||N.tag!==4||N.stateNode.containerInfo!==A.containerInfo||N.stateNode.implementation!==A.implementation?(N=Ws(A,z.mode,H),N.return=z,N):(N=i(N,A.children||[]),N.return=z,N)}function U(z,N,A,H,ne){return N===null||N.tag!==7?(N=nn(A,z.mode,H,ne),N.return=z,N):(N=i(N,A),N.return=z,N)}function q(z,N,A){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Fs(""+N,z.mode,A),N.return=z,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case X:return A=Qi(N.type,N.key,N.props,null,z.mode,A),Ll(A,N),A.return=z,A;case E:return N=Ws(N,z.mode,A),N.return=z,N;case ae:return N=cn(N),q(z,N,A)}if(he(N)||we(N))return N=nn(N,z.mode,A,null),N.return=z,N;if(typeof N.then=="function")return q(z,Ii(N),A);if(N.$$typeof===Z)return q(z,Ji(z,N),A);Pi(z,N)}return null}function T(z,N,A,H){var ne=N!==null?N.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ne!==null?null:m(z,N,""+A,H);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case X:return A.key===ne?v(z,N,A,H):null;case E:return A.key===ne?R(z,N,A,H):null;case ae:return A=cn(A),T(z,N,A,H)}if(he(A)||we(A))return ne!==null?null:U(z,N,A,H,null);if(typeof A.then=="function")return T(z,N,Ii(A),H);if(A.$$typeof===Z)return T(z,N,Ji(z,A),H);Pi(z,A)}return null}function M(z,N,A,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return z=z.get(A)||null,m(N,z,""+H,ne);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case X:return z=z.get(H.key===null?A:H.key)||null,v(N,z,H,ne);case E:return z=z.get(H.key===null?A:H.key)||null,R(N,z,H,ne);case ae:return H=cn(H),M(z,N,A,H,ne)}if(he(H)||we(H))return z=z.get(A)||null,U(N,z,H,ne,null);if(typeof H.then=="function")return M(z,N,A,Ii(H),ne);if(H.$$typeof===Z)return M(z,N,A,Ji(N,H),ne);Pi(N,H)}return null}function P(z,N,A,H){for(var ne=null,Se=null,te=N,fe=N=0,be=null;te!==null&&fe<A.length;fe++){te.index>fe?(be=te,te=null):be=te.sibling;var je=T(z,te,A[fe],H);if(je===null){te===null&&(te=be);break}e&&te&&je.alternate===null&&t(z,te),N=s(je,N,fe),Se===null?ne=je:Se.sibling=je,Se=je,te=be}if(fe===A.length)return a(z,te),ye&&na(z,fe),ne;if(te===null){for(;fe<A.length;fe++)te=q(z,A[fe],H),te!==null&&(N=s(te,N,fe),Se===null?ne=te:Se.sibling=te,Se=te);return ye&&na(z,fe),ne}for(te=n(te);fe<A.length;fe++)be=M(te,z,fe,A[fe],H),be!==null&&(e&&be.alternate!==null&&te.delete(be.key===null?fe:be.key),N=s(be,N,fe),Se===null?ne=be:Se.sibling=be,Se=be);return e&&te.forEach(function(Ka){return t(z,Ka)}),ye&&na(z,fe),ne}function re(z,N,A,H){if(A==null)throw Error(c(151));for(var ne=null,Se=null,te=N,fe=N=0,be=null,je=A.next();te!==null&&!je.done;fe++,je=A.next()){te.index>fe?(be=te,te=null):be=te.sibling;var Ka=T(z,te,je.value,H);if(Ka===null){te===null&&(te=be);break}e&&te&&Ka.alternate===null&&t(z,te),N=s(Ka,N,fe),Se===null?ne=Ka:Se.sibling=Ka,Se=Ka,te=be}if(je.done)return a(z,te),ye&&na(z,fe),ne;if(te===null){for(;!je.done;fe++,je=A.next())je=q(z,je.value,H),je!==null&&(N=s(je,N,fe),Se===null?ne=je:Se.sibling=je,Se=je);return ye&&na(z,fe),ne}for(te=n(te);!je.done;fe++,je=A.next())je=M(te,z,fe,je.value,H),je!==null&&(e&&je.alternate!==null&&te.delete(je.key===null?fe:je.key),N=s(je,N,fe),Se===null?ne=je:Se.sibling=je,Se=je);return e&&te.forEach(function(W1){return t(z,W1)}),ye&&na(z,fe),ne}function Te(z,N,A,H){if(typeof A=="object"&&A!==null&&A.type===D&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case X:e:{for(var ne=A.key;N!==null;){if(N.key===ne){if(ne=A.type,ne===D){if(N.tag===7){a(z,N.sibling),H=i(N,A.props.children),H.return=z,z=H;break e}}else if(N.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ae&&cn(ne)===N.type){a(z,N.sibling),H=i(N,A.props),Ll(H,A),H.return=z,z=H;break e}a(z,N);break}else t(z,N);N=N.sibling}A.type===D?(H=nn(A.props.children,z.mode,H,A.key),H.return=z,z=H):(H=Qi(A.type,A.key,A.props,null,z.mode,H),Ll(H,A),H.return=z,z=H)}return f(z);case E:e:{for(ne=A.key;N!==null;){if(N.key===ne)if(N.tag===4&&N.stateNode.containerInfo===A.containerInfo&&N.stateNode.implementation===A.implementation){a(z,N.sibling),H=i(N,A.children||[]),H.return=z,z=H;break e}else{a(z,N);break}else t(z,N);N=N.sibling}H=Ws(A,z.mode,H),H.return=z,z=H}return f(z);case ae:return A=cn(A),Te(z,N,A,H)}if(he(A))return P(z,N,A,H);if(we(A)){if(ne=we(A),typeof ne!="function")throw Error(c(150));return A=ne.call(A),re(z,N,A,H)}if(typeof A.then=="function")return Te(z,N,Ii(A),H);if(A.$$typeof===Z)return Te(z,N,Ji(z,A),H);Pi(z,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,N!==null&&N.tag===6?(a(z,N.sibling),H=i(N,A),H.return=z,z=H):(a(z,N),H=Fs(A,z.mode,H),H.return=z,z=H),f(z)):a(z,N)}return function(z,N,A,H){try{Ul=0;var ne=Te(z,N,A,H);return Xn=null,ne}catch(te){if(te===Vn||te===Fi)throw te;var Se=jt(29,te,null,z.mode);return Se.lanes=H,Se.return=z,Se}}}var dn=Zd(!0),Kd=Zd(!1),Ta=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ee&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Xi(e),Td(e,null,a),t}return Vi(e,n,t,a),Xi(e)}function Hl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Hu(e,a)}}function fo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=f:s=s.next=f,a=a.next}while(a!==null);s===null?i=s=t:s=s.next=t}else i=s=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var po=!1;function Bl(){if(po){var e=Gn;if(e!==null)throw e}}function ql(e,t,a,n){po=!1;var i=e.updateQueue;Ta=!1;var s=i.firstBaseUpdate,f=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var v=m,R=v.next;v.next=null,f===null?s=R:f.next=R,f=v;var U=e.alternate;U!==null&&(U=U.updateQueue,m=U.lastBaseUpdate,m!==f&&(m===null?U.firstBaseUpdate=R:m.next=R,U.lastBaseUpdate=v))}if(s!==null){var q=i.baseState;f=0,U=R=v=null,m=s;do{var T=m.lane&-536870913,M=T!==m.lane;if(M?(xe&T)===T:(n&T)===T){T!==0&&T===Yn&&(po=!0),U!==null&&(U=U.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var P=e,re=m;T=t;var Te=a;switch(re.tag){case 1:if(P=re.payload,typeof P=="function"){q=P.call(Te,q,T);break e}q=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=re.payload,T=typeof P=="function"?P.call(Te,q,T):P,T==null)break e;q=j({},q,T);break e;case 2:Ta=!0}}T=m.callback,T!==null&&(e.flags|=64,M&&(e.flags|=8192),M=i.callbacks,M===null?i.callbacks=[T]:M.push(T))}else M={lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},U===null?(R=U=M,v=q):U=U.next=M,f|=T;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;M=m,m=M.next,M.next=null,i.lastBaseUpdate=M,i.shared.pending=null}}while(!0);U===null&&(v=q),i.baseState=v,i.firstBaseUpdate=R,i.lastBaseUpdate=U,s===null&&(i.shared.lanes=0),La|=f,e.lanes=f,e.memoizedState=q}}function Jd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function $d(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jd(a[e],t)}var Qn=w(null),er=w(0);function Fd(e,t){e=ha,W(er,e),W(Qn,t),ha=e|t.baseLanes}function ho(){W(er,ha),W(Qn,Qn.current)}function mo(){ha=er.current,L(Qn),L(er)}var wt=w(null),Lt=null;function _a(e){var t=e.alternate;W(Ge,Ge.current&1),W(wt,e),Lt===null&&(t===null||Qn.current!==null||t.memoizedState!==null)&&(Lt=e)}function go(e){W(Ge,Ge.current),W(wt,e),Lt===null&&(Lt=e)}function Wd(e){e.tag===22?(W(Ge,Ge.current),W(wt,e),Lt===null&&(Lt=e)):Ma()}function Ma(){W(Ge,Ge.current),W(wt,wt.current)}function Nt(e){L(wt),Lt===e&&(Lt=null),L(Ge)}var Ge=w(0);function tr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jc(a)||wc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=0,de=null,Ae=null,Ze=null,ar=!1,Zn=!1,fn=!1,nr=0,Yl=0,Kn=null,Yg=0;function qe(){throw Error(c(321))}function xo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!St(e[a],t[a]))return!1;return!0}function bo(e,t,a,n,i,s){return ra=s,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Df:_o,fn=!1,s=a(n,i),fn=!1,Zn&&(s=Pd(t,a,n,i)),Id(e),s}function Id(e){O.H=Xl;var t=Ae!==null&&Ae.next!==null;if(ra=0,Ze=Ae=de=null,ar=!1,Yl=0,Kn=null,t)throw Error(c(300));e===null||Ke||(e=e.dependencies,e!==null&&Ki(e)&&(Ke=!0))}function Pd(e,t,a,n){de=e;var i=0;do{if(Zn&&(Kn=null),Yl=0,Zn=!1,25<=i)throw Error(c(301));if(i+=1,Ze=Ae=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}O.H=Uf,s=t(a,n)}while(Zn);return s}function Gg(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Gl(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(de.flags|=1024),t}function yo(){var e=nr!==0;return nr=0,e}function vo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function So(e){if(ar){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ar=!1}ra=0,Ze=Ae=de=null,Zn=!1,Yl=nr=0,Kn=null}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?de.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Ve(){if(Ae===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ze===null?de.memoizedState:Ze.next;if(t!==null)Ze=t,Ae=e;else{if(e===null)throw de.alternate===null?Error(c(467)):Error(c(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ze===null?de.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function lr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gl(e){var t=Yl;return Yl+=1,Kn===null&&(Kn=[]),e=Vd(Kn,e,t),t=de,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Df:_o),e}function ir(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Gl(e);if(e.$$typeof===Z)return tt(e)}throw Error(c(438,String(e)))}function jo(e){var t=null,a=de.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=de.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=lr(),de.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=ke;return t.index++,a}function sa(e,t){return typeof t=="function"?t(e):t}function rr(e){var t=Ve();return wo(t,Ae,e)}function wo(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var i=e.baseQueue,s=n.pending;if(s!==null){if(i!==null){var f=i.next;i.next=s.next,s.next=f}t.baseQueue=i=s,n.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var m=f=null,v=null,R=t,U=!1;do{var q=R.lane&-536870913;if(q!==R.lane?(xe&q)===q:(ra&q)===q){var T=R.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),q===Yn&&(U=!0);else if((ra&T)===T){R=R.next,T===Yn&&(U=!0);continue}else q={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(m=v=q,f=s):v=v.next=q,de.lanes|=T,La|=T;q=R.action,fn&&a(s,q),s=R.hasEagerState?R.eagerState:a(s,q)}else T={lane:q,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(m=v=T,f=s):v=v.next=T,de.lanes|=q,La|=q;R=R.next}while(R!==null&&R!==t);if(v===null?f=s:v.next=m,!St(s,e.memoizedState)&&(Ke=!0,U&&(a=Gn,a!==null)))throw a;e.memoizedState=s,e.baseState=f,e.baseQueue=v,n.lastRenderedState=s}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function No(e){var t=Ve(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,s=t.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do s=e(s,f.action),f=f.next;while(f!==i);St(s,t.memoizedState)||(Ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function ef(e,t,a){var n=de,i=Ve(),s=ye;if(s){if(a===void 0)throw Error(c(407));a=a()}else a=t();var f=!St((Ae||i).memoizedState,a);if(f&&(i.memoizedState=a,Ke=!0),i=i.queue,Co(nf.bind(null,n,i,e),[e]),i.getSnapshot!==t||f||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Jn(9,{destroy:void 0},af.bind(null,n,i,a,t),null),_e===null)throw Error(c(349));s||(ra&127)!==0||tf(n,t,a)}return a}function tf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=de.updateQueue,t===null?(t=lr(),de.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function af(e,t,a,n){t.value=a,t.getSnapshot=n,lf(t)&&rf(e)}function nf(e,t,a){return a(function(){lf(t)&&rf(e)})}function lf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!St(e,a)}catch{return!0}}function rf(e){var t=an(e,2);t!==null&&pt(t,e,2)}function Eo(e){var t=rt();if(typeof e=="function"){var a=e;if(e=a(),fn){wa(!0);try{a()}finally{wa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t}function sf(e,t,a,n){return e.baseState=a,wo(e,Ae,typeof n=="function"?n:sa)}function Vg(e,t,a,n,i){if(cr(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){s.listeners.push(f)}};O.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,of(t,s)):(s.next=a.next,t.pending=a.next=s)}}function of(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var s=O.T,f={};O.T=f;try{var m=a(i,n),v=O.S;v!==null&&v(f,m),cf(e,t,m)}catch(R){zo(e,t,R)}finally{s!==null&&f.types!==null&&(s.types=f.types),O.T=s}}else try{s=a(i,n),cf(e,t,s)}catch(R){zo(e,t,R)}}function cf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){uf(e,t,n)},function(n){return zo(e,t,n)}):uf(e,t,a)}function uf(e,t,a){t.status="fulfilled",t.value=a,df(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,of(e,a)))}function zo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,df(t),t=t.next;while(t!==n)}e.action=null}function df(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ff(e,t){return t}function pf(e,t){if(ye){var a=_e.formState;if(a!==null){e:{var n=de;if(ye){if(De){t:{for(var i=De,s=Ut;i.nodeType!==8;){if(!s){i=null;break t}if(i=Ht(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){De=Ht(i.nextSibling),n=i.data==="F!";break e}}Aa(n)}n=!1}n&&(t=a[0])}}return a=rt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ff,lastRenderedState:t},a.queue=n,a=Of.bind(null,de,n),n.dispatch=a,n=Eo(!1),s=Oo.bind(null,de,!1,n.queue),n=rt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Vg.bind(null,de,i,s,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function hf(e){var t=Ve();return mf(t,Ae,e)}function mf(e,t,a){if(t=wo(e,t,ff)[0],e=rr(sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Gl(t)}catch(f){throw f===Vn?Fi:f}else n=t;t=Ve();var i=t.queue,s=i.dispatch;return a!==t.memoizedState&&(de.flags|=2048,Jn(9,{destroy:void 0},Xg.bind(null,i,a),null)),[n,s,e]}function Xg(e,t){e.action=t}function gf(e){var t=Ve(),a=Ae;if(a!==null)return mf(t,a,e);Ve(),t=t.memoizedState,a=Ve();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Jn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=de.updateQueue,t===null&&(t=lr(),de.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function xf(){return Ve().memoizedState}function sr(e,t,a,n){var i=rt();de.flags|=e,i.memoizedState=Jn(1|t,{destroy:void 0},a,n===void 0?null:n)}function or(e,t,a,n){var i=Ve();n=n===void 0?null:n;var s=i.memoizedState.inst;Ae!==null&&n!==null&&xo(n,Ae.memoizedState.deps)?i.memoizedState=Jn(t,s,a,n):(de.flags|=e,i.memoizedState=Jn(1|t,s,a,n))}function bf(e,t){sr(8390656,8,e,t)}function Co(e,t){or(2048,8,e,t)}function Qg(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=lr(),de.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function yf(e){var t=Ve().memoizedState;return Qg({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function vf(e,t){return or(4,2,e,t)}function Sf(e,t){return or(4,4,e,t)}function jf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wf(e,t,a){a=a!=null?a.concat([e]):null,or(4,4,jf.bind(null,t,e),a)}function Ao(){}function Nf(e,t){var a=Ve();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&xo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Ef(e,t){var a=Ve();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&xo(t,n[1]))return n[0];if(n=e(),fn){wa(!0);try{e()}finally{wa(!1)}}return a.memoizedState=[n,t],n}function Ro(e,t,a){return a===void 0||(ra&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=zp(),de.lanes|=e,La|=e,a)}function zf(e,t,a,n){return St(a,t)?a:Qn.current!==null?(e=Ro(e,a,n),St(e,t)||(Ke=!0),e):(ra&42)===0||(ra&1073741824)!==0&&(xe&261930)===0?(Ke=!0,e.memoizedState=a):(e=zp(),de.lanes|=e,La|=e,t)}function Cf(e,t,a,n,i){var s=J.p;J.p=s!==0&&8>s?s:8;var f=O.T,m={};O.T=m,Oo(e,!1,t,a);try{var v=i(),R=O.S;if(R!==null&&R(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var U=qg(v,n);Vl(e,t,U,Ct(e))}else Vl(e,t,n,Ct(e))}catch(q){Vl(e,t,{then:function(){},status:"rejected",reason:q},Ct())}finally{J.p=s,f!==null&&m.types!==null&&(f.types=m.types),O.T=f}}function Zg(){}function To(e,t,a,n){if(e.tag!==5)throw Error(c(476));var i=Af(e).queue;Cf(e,i,t,ee,a===null?Zg:function(){return Rf(e),a(n)})}function Af(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:ee},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rf(e){var t=Af(e);t.next===null&&(t=e.alternate.memoizedState),Vl(e,t.next.queue,{},Ct())}function ko(){return tt(ri)}function Tf(){return Ve().memoizedState}function kf(){return Ve().memoizedState}function Kg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ct();e=ka(a);var n=Oa(t,e,a);n!==null&&(pt(n,t,a),Hl(n,t,a)),t={cache:io()},e.payload=t;return}t=t.return}}function Jg(e,t,a){var n=Ct();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cr(e)?_f(t,a):(a=Js(e,t,a,n),a!==null&&(pt(a,e,n),Mf(a,t,n)))}function Of(e,t,a){var n=Ct();Vl(e,t,a,n)}function Vl(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cr(e))_f(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var f=t.lastRenderedState,m=s(f,a);if(i.hasEagerState=!0,i.eagerState=m,St(m,f))return Vi(e,t,i,0),_e===null&&Gi(),!1}catch{}if(a=Js(e,t,i,n),a!==null)return pt(a,e,n),Mf(a,t,n),!0}return!1}function Oo(e,t,a,n){if(n={lane:2,revertLane:uc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cr(e)){if(t)throw Error(c(479))}else t=Js(e,a,n,2),t!==null&&pt(t,e,2)}function cr(e){var t=e.alternate;return e===de||t!==null&&t===de}function _f(e,t){Zn=ar=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Mf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Hu(e,a)}}var Xl={readContext:tt,use:ir,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};Xl.useEffectEvent=qe;var Df={readContext:tt,use:ir,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:bf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,sr(4194308,4,jf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return sr(4194308,4,e,t)},useInsertionEffect:function(e,t){sr(4,2,e,t)},useMemo:function(e,t){var a=rt();t=t===void 0?null:t;var n=e();if(fn){wa(!0);try{e()}finally{wa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=rt();if(a!==void 0){var i=a(t);if(fn){wa(!0);try{a(t)}finally{wa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Jg.bind(null,de,e),[n.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:function(e){e=Eo(e);var t=e.queue,a=Of.bind(null,de,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ao,useDeferredValue:function(e,t){var a=rt();return Ro(a,e,t)},useTransition:function(){var e=Eo(!1);return e=Cf.bind(null,de,e.queue,!0,!1),rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=de,i=rt();if(ye){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),_e===null)throw Error(c(349));(xe&127)!==0||tf(n,t,a)}i.memoizedState=a;var s={value:a,getSnapshot:t};return i.queue=s,bf(nf.bind(null,n,s,e),[e]),n.flags|=2048,Jn(9,{destroy:void 0},af.bind(null,n,s,a,t),null),a},useId:function(){var e=rt(),t=_e.identifierPrefix;if(ye){var a=Ft,n=$t;a=(n&~(1<<32-vt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=nr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Yg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ko,useFormState:pf,useActionState:pf,useOptimistic:function(e){var t=rt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Oo.bind(null,de,!0,a),a.dispatch=t,[e,t]},useMemoCache:jo,useCacheRefresh:function(){return rt().memoizedState=Kg.bind(null,de)},useEffectEvent:function(e){var t=rt(),a={impl:e};return t.memoizedState=a,function(){if((Ee&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},_o={readContext:tt,use:ir,useCallback:Nf,useContext:tt,useEffect:Co,useImperativeHandle:wf,useInsertionEffect:vf,useLayoutEffect:Sf,useMemo:Ef,useReducer:rr,useRef:xf,useState:function(){return rr(sa)},useDebugValue:Ao,useDeferredValue:function(e,t){var a=Ve();return zf(a,Ae.memoizedState,e,t)},useTransition:function(){var e=rr(sa)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Gl(e),t]},useSyncExternalStore:ef,useId:Tf,useHostTransitionStatus:ko,useFormState:hf,useActionState:hf,useOptimistic:function(e,t){var a=Ve();return sf(a,Ae,e,t)},useMemoCache:jo,useCacheRefresh:kf};_o.useEffectEvent=yf;var Uf={readContext:tt,use:ir,useCallback:Nf,useContext:tt,useEffect:Co,useImperativeHandle:wf,useInsertionEffect:vf,useLayoutEffect:Sf,useMemo:Ef,useReducer:No,useRef:xf,useState:function(){return No(sa)},useDebugValue:Ao,useDeferredValue:function(e,t){var a=Ve();return Ae===null?Ro(a,e,t):zf(a,Ae.memoizedState,e,t)},useTransition:function(){var e=No(sa)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Gl(e),t]},useSyncExternalStore:ef,useId:Tf,useHostTransitionStatus:ko,useFormState:gf,useActionState:gf,useOptimistic:function(e,t){var a=Ve();return Ae!==null?sf(a,Ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jo,useCacheRefresh:kf};Uf.useEffectEvent=yf;function Mo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Do={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Ct(),i=ka(n);i.payload=t,a!=null&&(i.callback=a),t=Oa(e,i,n),t!==null&&(pt(t,e,n),Hl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Ct(),i=ka(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Oa(e,i,n),t!==null&&(pt(t,e,n),Hl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ct(),n=ka(a);n.tag=2,t!=null&&(n.callback=t),t=Oa(e,n,a),t!==null&&(pt(t,e,a),Hl(t,e,a))}};function Lf(e,t,a,n,i,s,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,f):t.prototype&&t.prototype.isPureReactComponent?!Tl(a,n)||!Tl(i,s):!0}function Hf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Do.enqueueReplaceState(t,t.state,null)}function pn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Bf(e){Yi(e)}function qf(e){console.error(e)}function Yf(e){Yi(e)}function ur(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Gf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Uo(e,t,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){ur(e,t)},a}function Vf(e){return e=ka(e),e.tag=3,e}function Xf(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;e.payload=function(){return i(s)},e.callback=function(){Gf(t,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Gf(t,a,n),typeof i!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var m=n.stack;this.componentDidCatch(n.value,{componentStack:m!==null?m:""})})}function $g(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&qn(t,a,i,!0),a=wt.current,a!==null){switch(a.tag){case 31:case 13:return Lt===null?jr():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Wi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),sc(e,n,i)),!1;case 22:return a.flags|=65536,n===Wi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),sc(e,n,i)),!1}throw Error(c(435,a.tag))}return sc(e,n,i),jr(),!1}if(ye)return t=wt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==eo&&(e=Error(c(422),{cause:n}),_l(_t(e,a)))):(n!==eo&&(t=Error(c(423),{cause:n}),_l(_t(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=_t(n,a),i=Uo(e.stateNode,n,i),fo(e,i),Ye!==4&&(Ye=2)),!1;var s=Error(c(520),{cause:n});if(s=_t(s,a),Il===null?Il=[s]:Il.push(s),Ye!==4&&(Ye=2),t===null)return!0;n=_t(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Uo(a.stateNode,n,e),fo(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ha===null||!Ha.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Vf(i),Xf(i,e,a,n),fo(a,i),!1}a=a.return}while(a!==null);return!1}var Lo=Error(c(461)),Ke=!1;function at(e,t,a,n){t.child=e===null?Kd(t,null,a,n):dn(t,e.child,a,n)}function Qf(e,t,a,n,i){a=a.render;var s=t.ref;if("ref"in n){var f={};for(var m in n)m!=="ref"&&(f[m]=n[m])}else f=n;return sn(t),n=bo(e,t,a,f,s,i),m=yo(),e!==null&&!Ke?(vo(e,t,i),oa(e,t,i)):(ye&&m&&Is(t),t.flags|=1,at(e,t,n,i),t.child)}function Zf(e,t,a,n,i){if(e===null){var s=a.type;return typeof s=="function"&&!$s(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Kf(e,t,s,n,i)):(e=Qi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Qo(e,i)){var f=s.memoizedProps;if(a=a.compare,a=a!==null?a:Tl,a(f,n)&&e.ref===t.ref)return oa(e,t,i)}return t.flags|=1,e=aa(s,n),e.ref=t.ref,e.return=t,t.child=e}function Kf(e,t,a,n,i){if(e!==null){var s=e.memoizedProps;if(Tl(s,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=s,Qo(e,i))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,oa(e,t,i)}return Ho(e,t,a,n,i)}function Jf(e,t,a,n){var i=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,t.child=null;return $f(e,t,s,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$i(t,s!==null?s.cachePool:null),s!==null?Fd(t,s):ho(),Wd(t);else return n=t.lanes=536870912,$f(e,t,s!==null?s.baseLanes|a:a,a,n)}else s!==null?($i(t,s.cachePool),Fd(t,s),Ma(),t.memoizedState=null):(e!==null&&$i(t,null),ho(),Ma());return at(e,t,i,a),t.child}function Ql(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $f(e,t,a,n,i){var s=so();return s=s===null?null:{parent:Qe._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&$i(t,null),ho(),Wd(t),e!==null&&qn(e,t,n,!0),t.childLanes=i,null}function dr(e,t){return t=pr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ff(e,t,a){return dn(t,e.child,null,a),e=dr(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function Fg(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ye){if(n.mode==="hidden")return e=dr(t,n),t.lanes=536870912,Ql(null,e);if(go(t),(e=De)?(e=oh(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:$t,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},a=Od(e),a.return=t,t.child=a,et=t,De=null)):e=null,e===null)throw Aa(t);return t.lanes=536870912,null}return dr(t,n)}var s=e.memoizedState;if(s!==null){var f=s.dehydrated;if(go(t),i)if(t.flags&256)t.flags&=-257,t=Ff(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ke||qn(e,t,a,!1),i=(a&e.childLanes)!==0,Ke||i){if(n=_e,n!==null&&(f=Bu(n,a),f!==0&&f!==s.retryLane))throw s.retryLane=f,an(e,f),pt(n,e,f),Lo;jr(),t=Ff(e,t,a)}else e=s.treeContext,De=Ht(f.nextSibling),et=t,ye=!0,Ca=null,Ut=!1,e!==null&&Dd(t,e),t=dr(t,n),t.flags|=4096;return t}return e=aa(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ho(e,t,a,n,i){return sn(t),a=bo(e,t,a,n,void 0,i),n=yo(),e!==null&&!Ke?(vo(e,t,i),oa(e,t,i)):(ye&&n&&Is(t),t.flags|=1,at(e,t,a,i),t.child)}function Wf(e,t,a,n,i,s){return sn(t),t.updateQueue=null,a=Pd(t,n,a,i),Id(e),n=yo(),e!==null&&!Ke?(vo(e,t,s),oa(e,t,s)):(ye&&n&&Is(t),t.flags|=1,at(e,t,a,s),t.child)}function If(e,t,a,n,i){if(sn(t),t.stateNode===null){var s=Un,f=a.contextType;typeof f=="object"&&f!==null&&(s=tt(f)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Do,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},co(t),f=a.contextType,s.context=typeof f=="object"&&f!==null?tt(f):Un,s.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Mo(t,a,f,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(f=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),f!==s.state&&Do.enqueueReplaceState(s,s.state,null),ql(t,n,s,i),Bl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,v=pn(a,m);s.props=v;var R=s.context,U=a.contextType;f=Un,typeof U=="object"&&U!==null&&(f=tt(U));var q=a.getDerivedStateFromProps;U=typeof q=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,U||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||R!==f)&&Hf(t,s,n,f),Ta=!1;var T=t.memoizedState;s.state=T,ql(t,n,s,i),Bl(),R=t.memoizedState,m||T!==R||Ta?(typeof q=="function"&&(Mo(t,a,q,n),R=t.memoizedState),(v=Ta||Lf(t,a,v,n,T,R,f))?(U||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=R),s.props=n,s.state=R,s.context=f,n=v):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,uo(e,t),f=t.memoizedProps,U=pn(a,f),s.props=U,q=t.pendingProps,T=s.context,R=a.contextType,v=Un,typeof R=="object"&&R!==null&&(v=tt(R)),m=a.getDerivedStateFromProps,(R=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f!==q||T!==v)&&Hf(t,s,n,v),Ta=!1,T=t.memoizedState,s.state=T,ql(t,n,s,i),Bl();var M=t.memoizedState;f!==q||T!==M||Ta||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof m=="function"&&(Mo(t,a,m,n),M=t.memoizedState),(U=Ta||Lf(t,a,U,n,T,M,v)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(R||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,M,v),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,M,v)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=M),s.props=n,s.state=M,s.context=v,n=U):(typeof s.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,fr(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=dn(t,e.child,null,i),t.child=dn(t,null,a,i)):at(e,t,a,i),t.memoizedState=s.state,e=t.child):e=oa(e,t,i),e}function Pf(e,t,a,n){return ln(),t.flags|=256,at(e,t,a,n),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qo(e){return{baseLanes:e,cachePool:Yd()}}function Yo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=zt),e}function ep(e,t,a){var n=t.pendingProps,i=!1,s=(t.flags&128)!==0,f;if((f=s)||(f=e!==null&&e.memoizedState===null?!1:(Ge.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(i?_a(t):Ma(),(e=De)?(e=oh(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:$t,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},a=Od(e),a.return=t,t.child=a,et=t,De=null)):e=null,e===null)throw Aa(t);return wc(e)?t.lanes=32:t.lanes=536870912,null}var m=n.children;return n=n.fallback,i?(Ma(),i=t.mode,m=pr({mode:"hidden",children:m},i),n=nn(n,i,a,null),m.return=t,n.return=t,m.sibling=n,t.child=m,n=t.child,n.memoizedState=qo(a),n.childLanes=Yo(e,f,a),t.memoizedState=Bo,Ql(null,n)):(_a(t),Go(t,m))}var v=e.memoizedState;if(v!==null&&(m=v.dehydrated,m!==null)){if(s)t.flags&256?(_a(t),t.flags&=-257,t=Vo(e,t,a)):t.memoizedState!==null?(Ma(),t.child=e.child,t.flags|=128,t=null):(Ma(),m=n.fallback,i=t.mode,n=pr({mode:"visible",children:n.children},i),m=nn(m,i,a,null),m.flags|=2,n.return=t,m.return=t,n.sibling=m,t.child=n,dn(t,e.child,null,a),n=t.child,n.memoizedState=qo(a),n.childLanes=Yo(e,f,a),t.memoizedState=Bo,t=Ql(null,n));else if(_a(t),wc(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var R=f.dgst;f=R,n=Error(c(419)),n.stack="",n.digest=f,_l({value:n,source:null,stack:null}),t=Vo(e,t,a)}else if(Ke||qn(e,t,a,!1),f=(a&e.childLanes)!==0,Ke||f){if(f=_e,f!==null&&(n=Bu(f,a),n!==0&&n!==v.retryLane))throw v.retryLane=n,an(e,n),pt(f,e,n),Lo;jc(m)||jr(),t=Vo(e,t,a)}else jc(m)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,De=Ht(m.nextSibling),et=t,ye=!0,Ca=null,Ut=!1,e!==null&&Dd(t,e),t=Go(t,n.children),t.flags|=4096);return t}return i?(Ma(),m=n.fallback,i=t.mode,v=e.child,R=v.sibling,n=aa(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,R!==null?m=aa(R,m):(m=nn(m,i,a,null),m.flags|=2),m.return=t,n.return=t,n.sibling=m,t.child=n,Ql(null,n),n=t.child,m=e.child.memoizedState,m===null?m=qo(a):(i=m.cachePool,i!==null?(v=Qe._currentValue,i=i.parent!==v?{parent:v,pool:v}:i):i=Yd(),m={baseLanes:m.baseLanes|a,cachePool:i}),n.memoizedState=m,n.childLanes=Yo(e,f,a),t.memoizedState=Bo,Ql(e.child,n)):(_a(t),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function Go(e,t){return t=pr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function pr(e,t){return e=jt(22,e,null,t),e.lanes=0,e}function Vo(e,t,a){return dn(t,e.child,null,a),e=Go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tp(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),no(e.return,t,a)}function Xo(e,t,a,n,i,s){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=n,f.tail=a,f.tailMode=i,f.treeForkCount=s)}function ap(e,t,a){var n=t.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var f=Ge.current,m=(f&2)!==0;if(m?(f=f&1|2,t.flags|=128):f&=1,W(Ge,f),at(e,t,n,a),n=ye?Ol:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tp(e,a,t);else if(e.tag===19)tp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&tr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Xo(t,!1,i,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&tr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Xo(t,!0,a,null,s,n);break;case"together":Xo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function oa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),La|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(qn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=aa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Qo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ki(e)))}function Wg(e,t,a){switch(t.tag){case 3:Be(t,t.stateNode.containerInfo),Ra(t,Qe,e.memoizedState.cache),ln();break;case 27:case 5:ja(t);break;case 4:Be(t,t.stateNode.containerInfo);break;case 10:Ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,go(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(_a(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ep(e,t,a):(_a(t),e=oa(e,t,a),e!==null?e.sibling:null);_a(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(qn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return ap(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Ge,Ge.current),n)break;return null;case 22:return t.lanes=0,Jf(e,t,a,t.pendingProps);case 24:Ra(t,Qe,e.memoizedState.cache)}return oa(e,t,a)}function np(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!Qo(e,a)&&(t.flags&128)===0)return Ke=!1,Wg(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,ye&&(t.flags&1048576)!==0&&Md(t,Ol,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=cn(t.elementType),t.type=e,typeof e=="function")$s(e)?(n=pn(e,n),t.tag=1,t=If(null,t,e,n,a)):(t.tag=0,t=Ho(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===K){t.tag=11,t=Qf(null,t,e,n,a);break e}else if(i===G){t.tag=14,t=Zf(null,t,e,n,a);break e}}throw t=ue(e)||e,Error(c(306,t,""))}}return t;case 0:return Ho(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=pn(n,t.pendingProps),If(e,t,n,i,a);case 3:e:{if(Be(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var s=t.memoizedState;i=s.element,uo(e,t),ql(t,n,null,a);var f=t.memoizedState;if(n=f.cache,Ra(t,Qe,n),n!==s.cache&&lo(t,[Qe],a,!0),Bl(),n=f.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Pf(e,t,n,a);break e}else if(n!==i){i=_t(Error(c(424)),t),_l(i),t=Pf(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,De=Ht(e.firstChild),et=t,ye=!0,Ca=null,Ut=!0,a=Kd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ln(),n===i){t=oa(e,t,a);break e}at(e,t,n,a)}t=t.child}return t;case 26:return fr(e,t),e===null?(a=hh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ye||(a=t.type,e=t.pendingProps,n=Rr(ie.current).createElement(a),n[Pe]=t,n[st]=e,nt(n,a,e),We(n),t.stateNode=n):t.memoizedState=hh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ja(t),e===null&&ye&&(n=t.stateNode=dh(t.type,t.pendingProps,ie.current),et=t,Ut=!0,i=De,Ga(t.type)?(Nc=i,De=Ht(n.firstChild)):De=i),at(e,t,t.pendingProps.children,a),fr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((i=n=De)&&(n=C1(n,t.type,t.pendingProps,Ut),n!==null?(t.stateNode=n,et=t,De=Ht(n.firstChild),Ut=!1,i=!0):i=!1),i||Aa(t)),ja(t),i=t.type,s=t.pendingProps,f=e!==null?e.memoizedProps:null,n=s.children,yc(i,s)?n=null:f!==null&&yc(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=bo(e,t,Gg,null,null,a),ri._currentValue=i),fr(e,t),at(e,t,n,a),t.child;case 6:return e===null&&ye&&((e=a=De)&&(a=A1(a,t.pendingProps,Ut),a!==null?(t.stateNode=a,et=t,De=null,e=!0):e=!1),e||Aa(t)),null;case 13:return ep(e,t,a);case 4:return Be(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=dn(t,null,n,a):at(e,t,n,a),t.child;case 11:return Qf(e,t,t.type,t.pendingProps,a);case 7:return at(e,t,t.pendingProps,a),t.child;case 8:return at(e,t,t.pendingProps.children,a),t.child;case 12:return at(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ra(t,t.type,n.value),at(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,sn(t),i=tt(i),n=n(i),t.flags|=1,at(e,t,n,a),t.child;case 14:return Zf(e,t,t.type,t.pendingProps,a);case 15:return Kf(e,t,t.type,t.pendingProps,a);case 19:return ap(e,t,a);case 31:return Fg(e,t,a);case 22:return Jf(e,t,a,t.pendingProps);case 24:return sn(t),n=tt(Qe),e===null?(i=so(),i===null&&(i=_e,s=io(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),t.memoizedState={parent:n,cache:i},co(t),Ra(t,Qe,i)):((e.lanes&a)!==0&&(uo(e,t),ql(t,null,null,a),Bl()),i=e.memoizedState,s=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ra(t,Qe,n)):(n=s.cache,Ra(t,Qe,n),n!==i.cache&&lo(t,[Qe],a,!0))),at(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ca(e){e.flags|=4}function Zo(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Tp())e.flags|=8192;else throw un=Wi,oo}else e.flags&=-16777217}function lp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yh(t))if(Tp())e.flags|=8192;else throw un=Wi,oo}function hr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Uu():536870912,e.lanes|=t,In|=t)}function Zl(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ig(e,t,a){var n=t.pendingProps;switch(Ps(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(Qe),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bn(t)?ca(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,to())),Ue(t),null;case 26:var i=t.type,s=t.memoizedState;return e===null?(ca(t),s!==null?(Ue(t),lp(t,s)):(Ue(t),Zo(t,i,null,n,a))):s?s!==e.memoizedState?(ca(t),Ue(t),lp(t,s)):(Ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ca(t),Ue(t),Zo(t,i,e,n,a)),null;case 27:if($a(t),a=ie.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ca(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}e=V.current,Bn(t)?Ud(t):(e=dh(i,n,a),t.stateNode=e,ca(t))}return Ue(t),null;case 5:if($a(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ca(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}if(s=V.current,Bn(t))Ud(t);else{var f=Rr(ie.current);switch(s){case 1:s=f.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=f.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=f.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?f.createElement("select",{is:n.is}):f.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?f.createElement(i,{is:n.is}):f.createElement(i)}}s[Pe]=t,s[st]=n;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)s.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=s;e:switch(nt(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ca(t)}}return Ue(t),Zo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ca(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,Bn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=et,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Pe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||eh(e.nodeValue,a)),e||Aa(t,!0)}else e=Rr(e).createTextNode(n),e[Pe]=t,t.stateNode=e}return Ue(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Bn(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Pe]=t}else ln(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),e=!1}else a=to(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ue(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Bn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Pe]=t}else ln(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),i=!1}else i=to(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),hr(t,t.updateQueue),Ue(t),null);case 4:return Oe(),e===null&&hc(t.stateNode.containerInfo),Ue(t),null;case 10:return ia(t.type),Ue(t),null;case 19:if(L(Ge),n=t.memoizedState,n===null)return Ue(t),null;if(i=(t.flags&128)!==0,s=n.rendering,s===null)if(i)Zl(n,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=tr(e),s!==null){for(t.flags|=128,Zl(n,!1),e=s.updateQueue,t.updateQueue=e,hr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)kd(a,e),a=a.sibling;return W(Ge,Ge.current&1|2),ye&&na(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&bt()>yr&&(t.flags|=128,i=!0,Zl(n,!1),t.lanes=4194304)}else{if(!i)if(e=tr(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,hr(t,e),Zl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ye)return Ue(t),null}else 2*bt()-n.renderingStartTime>yr&&a!==536870912&&(t.flags|=128,i=!0,Zl(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=bt(),e.sibling=null,a=Ge.current,W(Ge,i?a&1|2:a&1),ye&&na(t,n.treeForkCount),e):(Ue(t),null);case 22:case 23:return Nt(t),mo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),a=t.updateQueue,a!==null&&hr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&L(on),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ia(Qe),Ue(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Pg(e,t){switch(Ps(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(Qe),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $a(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(c(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Ge),null;case 4:return Oe(),null;case 10:return ia(t.type),null;case 22:case 23:return Nt(t),mo(),e!==null&&L(on),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(Qe),null;case 25:return null;default:return null}}function ip(e,t){switch(Ps(t),t.tag){case 3:ia(Qe),Oe();break;case 26:case 27:case 5:$a(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:L(Ge);break;case 10:ia(t.type);break;case 22:case 23:Nt(t),mo(),e!==null&&L(on);break;case 24:ia(Qe)}}function Kl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var s=a.create,f=a.inst;n=s(),f.destroy=n}a=a.next}while(a!==i)}}catch(m){Ce(t,t.return,m)}}function Da(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){var f=n.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,i=t;var v=a,R=m;try{R()}catch(U){Ce(i,v,U)}}}n=n.next}while(n!==s)}}catch(U){Ce(t,t.return,U)}}function rp(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{$d(t,a)}catch(n){Ce(e,e.return,n)}}}function sp(e,t,a){a.props=pn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ce(e,t,n)}}function Jl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Ce(e,t,i)}}function Wt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ce(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ce(e,t,i)}else a.current=null}function op(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ce(e,e.return,i)}}function Ko(e,t,a){try{var n=e.stateNode;S1(n,e.type,a,t),n[st]=t}catch(i){Ce(e,e.return,i)}}function cp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Jo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ea));else if(n!==4&&(n===27&&Ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for($o(e,t,a),e=e.sibling;e!==null;)$o(e,t,a),e=e.sibling}function mr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(mr(e,t,a),e=e.sibling;e!==null;)mr(e,t,a),e=e.sibling}function up(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);nt(t,n,a),t[Pe]=e,t[st]=a}catch(s){Ce(e,e.return,s)}}var ua=!1,Je=!1,Fo=!1,dp=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function e1(e,t){if(e=e.containerInfo,xc=Ur,e=jd(e),Gs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var f=0,m=-1,v=-1,R=0,U=0,q=e,T=null;t:for(;;){for(var M;q!==a||i!==0&&q.nodeType!==3||(m=f+i),q!==s||n!==0&&q.nodeType!==3||(v=f+n),q.nodeType===3&&(f+=q.nodeValue.length),(M=q.firstChild)!==null;)T=q,q=M;for(;;){if(q===e)break t;if(T===a&&++R===i&&(m=f),T===s&&++U===n&&(v=f),(M=q.nextSibling)!==null)break;q=T,T=q.parentNode}q=M}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:e,selectionRange:a},Ur=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var P=pn(a.type,i);e=n.getSnapshotBeforeUpdate(P,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(re){Ce(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Sc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function fp(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),n&4&&Kl(5,a);break;case 1:if(fa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){Ce(a,a.return,f)}else{var i=pn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ce(a,a.return,f)}}n&64&&rp(a),n&512&&Jl(a,a.return);break;case 3:if(fa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{$d(e,t)}catch(f){Ce(a,a.return,f)}}break;case 27:t===null&&n&4&&up(a);case 26:case 5:fa(e,a),t===null&&n&4&&op(a),n&512&&Jl(a,a.return);break;case 12:fa(e,a);break;case 31:fa(e,a),n&4&&mp(e,a);break;case 13:fa(e,a),n&4&&gp(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=c1.bind(null,a),R1(e,a))));break;case 22:if(n=a.memoizedState!==null||ua,!n){t=t!==null&&t.memoizedState!==null||Je,i=ua;var s=Je;ua=n,(Je=t)&&!s?pa(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),ua=i,Je=s}break;case 30:break;default:fa(e,a)}}function pp(e){var t=e.alternate;t!==null&&(e.alternate=null,pp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Es(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,ct=!1;function da(e,t,a){for(a=a.child;a!==null;)hp(e,t,a),a=a.sibling}function hp(e,t,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(bl,a)}catch{}switch(a.tag){case 26:Je||Wt(a,t),da(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Wt(a,t);var n=Le,i=ct;Ga(a.type)&&(Le=a.stateNode,ct=!1),da(e,t,a),ni(a.stateNode),Le=n,ct=i;break;case 5:Je||Wt(a,t);case 6:if(n=Le,i=ct,Le=null,da(e,t,a),Le=n,ct=i,Le!==null)if(ct)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(a.stateNode)}catch(s){Ce(a,t,s)}else try{Le.removeChild(a.stateNode)}catch(s){Ce(a,t,s)}break;case 18:Le!==null&&(ct?(e=Le,rh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rl(e)):rh(Le,a.stateNode));break;case 4:n=Le,i=ct,Le=a.stateNode.containerInfo,ct=!0,da(e,t,a),Le=n,ct=i;break;case 0:case 11:case 14:case 15:Da(2,a,t),Je||Da(4,a,t),da(e,t,a);break;case 1:Je||(Wt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&sp(a,t,n)),da(e,t,a);break;case 21:da(e,t,a);break;case 22:Je=(n=Je)||a.memoizedState!==null,da(e,t,a),Je=n;break;default:da(e,t,a)}}function mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rl(e)}catch(a){Ce(t,t.return,a)}}}function gp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rl(e)}catch(a){Ce(t,t.return,a)}}function t1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new dp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new dp),t;default:throw Error(c(435,e.tag))}}function gr(e,t){var a=t1(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=u1.bind(null,e,n);n.then(i,i)}})}function ut(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(Ga(m.type)){Le=m.stateNode,ct=!1;break e}break;case 5:Le=m.stateNode,ct=!1;break e;case 3:case 4:Le=m.stateNode.containerInfo,ct=!0;break e}m=m.return}if(Le===null)throw Error(c(160));hp(s,f,i),Le=null,ct=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)xp(t,e),t=t.sibling}var Vt=null;function xp(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),dt(e),n&4&&(Da(3,e,e.return),Kl(3,e),Da(5,e,e.return));break;case 1:ut(t,e),dt(e),n&512&&(Je||a===null||Wt(a,a.return)),n&64&&ua&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Vt;if(ut(t,e),dt(e),n&512&&(Je||a===null||Wt(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Sl]||s[Pe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),nt(s,n,a),s[Pe]=e,We(s),n=s;break e;case"link":var f=xh("link","href",i).get(n+(a.href||""));if(f){for(var m=0;m<f.length;m++)if(s=f[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(m,1);break t}}s=i.createElement(n),nt(s,n,a),i.head.appendChild(s);break;case"meta":if(f=xh("meta","content",i).get(n+(a.content||""))){for(m=0;m<f.length;m++)if(s=f[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(m,1);break t}}s=i.createElement(n),nt(s,n,a),i.head.appendChild(s);break;default:throw Error(c(468,n))}s[Pe]=e,We(s),n=s}e.stateNode=n}else bh(i,e.type,e.stateNode);else e.stateNode=gh(i,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?bh(i,e.type,e.stateNode):gh(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ko(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),dt(e),n&512&&(Je||a===null||Wt(a,a.return)),a!==null&&n&4&&Ko(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),dt(e),n&512&&(Je||a===null||Wt(a,a.return)),e.flags&32){i=e.stateNode;try{Rn(i,"")}catch(P){Ce(e,e.return,P)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Ko(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Fo=!0);break;case 6:if(ut(t,e),dt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(P){Ce(e,e.return,P)}}break;case 3:if(Or=null,i=Vt,Vt=Tr(t.containerInfo),ut(t,e),Vt=i,dt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{rl(t.containerInfo)}catch(P){Ce(e,e.return,P)}Fo&&(Fo=!1,bp(e));break;case 4:n=Vt,Vt=Tr(e.stateNode.containerInfo),ut(t,e),dt(e),Vt=n;break;case 12:ut(t,e),dt(e);break;case 31:ut(t,e),dt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,gr(e,n)));break;case 13:ut(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(br=bt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,gr(e,n)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,R=ua,U=Je;if(ua=R||i,Je=U||v,ut(t,e),Je=U,ua=R,dt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||ua||Je||hn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(s=v.stateNode,i)f=s.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=v.stateNode;var q=v.memoizedProps.style,T=q!=null&&q.hasOwnProperty("display")?q.display:null;m.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(P){Ce(v,v.return,P)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(P){Ce(v,v.return,P)}}}else if(t.tag===18){if(a===null){v=t;try{var M=v.stateNode;i?sh(M,!0):sh(v.stateNode,!1)}catch(P){Ce(v,v.return,P)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,gr(e,a))));break;case 19:ut(t,e),dt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,gr(e,n)));break;case 30:break;case 21:break;default:ut(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(cp(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var i=a.stateNode,s=Jo(e);mr(e,s,i);break;case 5:var f=a.stateNode;a.flags&32&&(Rn(f,""),a.flags&=-33);var m=Jo(e);mr(e,m,f);break;case 3:case 4:var v=a.stateNode.containerInfo,R=Jo(e);$o(e,R,v);break;default:throw Error(c(161))}}catch(U){Ce(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fp(e,t.alternate,t),t=t.sibling}function hn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Da(4,t,t.return),hn(t);break;case 1:Wt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&sp(t,t.return,a),hn(t);break;case 27:ni(t.stateNode);case 26:case 5:Wt(t,t.return),hn(t);break;case 22:t.memoizedState===null&&hn(t);break;case 30:hn(t);break;default:hn(t)}e=e.sibling}}function pa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,s=t,f=s.flags;switch(s.tag){case 0:case 11:case 15:pa(i,s,a),Kl(4,s);break;case 1:if(pa(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(R){Ce(n,n.return,R)}if(n=s,i=n.updateQueue,i!==null){var m=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Jd(v[i],m)}catch(R){Ce(n,n.return,R)}}a&&f&64&&rp(s),Jl(s,s.return);break;case 27:up(s);case 26:case 5:pa(i,s,a),a&&n===null&&f&4&&op(s),Jl(s,s.return);break;case 12:pa(i,s,a);break;case 31:pa(i,s,a),a&&f&4&&mp(i,s);break;case 13:pa(i,s,a),a&&f&4&&gp(i,s);break;case 22:s.memoizedState===null&&pa(i,s,a),Jl(s,s.return);break;case 30:break;default:pa(i,s,a)}t=t.sibling}}function Wo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ml(a))}function Io(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ml(e))}function Xt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yp(e,t,a,n),t=t.sibling}function yp(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,a,n),i&2048&&Kl(9,t);break;case 1:Xt(e,t,a,n);break;case 3:Xt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ml(e)));break;case 12:if(i&2048){Xt(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,f=s.id,m=s.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ce(t,t.return,v)}}else Xt(e,t,a,n);break;case 31:Xt(e,t,a,n);break;case 13:Xt(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,f=t.alternate,t.memoizedState!==null?s._visibility&2?Xt(e,t,a,n):$l(e,t):s._visibility&2?Xt(e,t,a,n):(s._visibility|=2,$n(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Wo(f,t);break;case 24:Xt(e,t,a,n),i&2048&&Io(t.alternate,t);break;default:Xt(e,t,a,n)}}function $n(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,f=t,m=a,v=n,R=f.flags;switch(f.tag){case 0:case 11:case 15:$n(s,f,m,v,i),Kl(8,f);break;case 23:break;case 22:var U=f.stateNode;f.memoizedState!==null?U._visibility&2?$n(s,f,m,v,i):$l(s,f):(U._visibility|=2,$n(s,f,m,v,i)),i&&R&2048&&Wo(f.alternate,f);break;case 24:$n(s,f,m,v,i),i&&R&2048&&Io(f.alternate,f);break;default:$n(s,f,m,v,i)}t=t.sibling}}function $l(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:$l(a,n),i&2048&&Wo(n.alternate,n);break;case 24:$l(a,n),i&2048&&Io(n.alternate,n);break;default:$l(a,n)}t=t.sibling}}var Fl=8192;function Fn(e,t,a){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)vp(e,t,a),e=e.sibling}function vp(e,t,a){switch(e.tag){case 26:Fn(e,t,a),e.flags&Fl&&e.memoizedState!==null&&Y1(a,Vt,e.memoizedState,e.memoizedProps);break;case 5:Fn(e,t,a);break;case 3:case 4:var n=Vt;Vt=Tr(e.stateNode.containerInfo),Fn(e,t,a),Vt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Fl,Fl=16777216,Fn(e,t,a),Fl=n):Fn(e,t,a));break;default:Fn(e,t,a)}}function Sp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Wl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ie=n,wp(n,e)}Sp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jp(e),e=e.sibling}function jp(e){switch(e.tag){case 0:case 11:case 15:Wl(e),e.flags&2048&&Da(9,e,e.return);break;case 3:Wl(e);break;case 12:Wl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,xr(e)):Wl(e);break;default:Wl(e)}}function xr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ie=n,wp(n,e)}Sp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Da(8,t,t.return),xr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,xr(t));break;default:xr(t)}e=e.sibling}}function wp(e,t){for(;Ie!==null;){var a=Ie;switch(a.tag){case 0:case 11:case 15:Da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ml(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ie=n;else e:for(a=e;Ie!==null;){n=Ie;var i=n.sibling,s=n.return;if(pp(n),n===a){Ie=null;break e}if(i!==null){i.return=s,Ie=i;break e}Ie=s}}}var a1={getCacheForType:function(e){var t=tt(Qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return tt(Qe).controller.signal}},n1=typeof WeakMap=="function"?WeakMap:Map,Ee=0,_e=null,me=null,xe=0,ze=0,Et=null,Ua=!1,Wn=!1,Po=!1,ha=0,Ye=0,La=0,mn=0,ec=0,zt=0,In=0,Il=null,ft=null,tc=!1,br=0,Np=0,yr=1/0,vr=null,Ha=null,Fe=0,Ba=null,Pn=null,ma=0,ac=0,nc=null,Ep=null,Pl=0,lc=null;function Ct(){return(Ee&2)!==0&&xe!==0?xe&-xe:O.T!==null?uc():qu()}function zp(){if(zt===0)if((xe&536870912)===0||ye){var e=Ai;Ai<<=1,(Ai&3932160)===0&&(Ai=262144),zt=e}else zt=536870912;return e=wt.current,e!==null&&(e.flags|=32),zt}function pt(e,t,a){(e===_e&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(el(e,0),qa(e,xe,zt,!1)),vl(e,a),((Ee&2)===0||e!==_e)&&(e===_e&&((Ee&2)===0&&(mn|=a),Ye===4&&qa(e,xe,zt,!1)),It(e))}function Cp(e,t,a){if((Ee&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||yl(e,t),i=n?r1(e,t):rc(e,t,!0),s=n;do{if(i===0){Wn&&!n&&qa(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!l1(a)){i=rc(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;i=Il;var v=m.current.memoizedState.isDehydrated;if(v&&(el(m,f).flags|=256),f=rc(m,f,!1),f!==2){if(Po&&!v){m.errorRecoveryDisabledLanes|=s,mn|=s,i=4;break e}s=ft,ft=i,s!==null&&(ft===null?ft=s:ft.push.apply(ft,s))}i=f}if(s=!1,i!==2)continue}}if(i===1){el(e,0),qa(e,t,0,!0);break}e:{switch(n=e,s=i,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:qa(n,t,zt,!Ua);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=br+300-bt(),10<i)){if(qa(n,t,zt,!Ua),Ti(n,0,!0)!==0)break e;ma=t,n.timeoutHandle=lh(Ap.bind(null,n,a,ft,vr,tc,t,zt,mn,In,Ua,s,"Throttled",-0,0),i);break e}Ap(n,a,ft,vr,tc,t,zt,mn,In,Ua,s,null,-0,0)}}break}while(!0);It(e)}function Ap(e,t,a,n,i,s,f,m,v,R,U,q,T,M){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},vp(t,s,q);var P=(s&62914560)===s?br-bt():(s&4194048)===s?Np-bt():0;if(P=G1(q,P),P!==null){ma=s,e.cancelPendingCommit=P(Up.bind(null,e,t,s,a,n,i,f,m,v,U,q,null,T,M)),qa(e,s,f,!R);return}}Up(e,t,s,a,n,i,f,m,v)}function l1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!St(s(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qa(e,t,a,n){t&=~ec,t&=~mn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var s=31-vt(i),f=1<<s;n[s]=-1,i&=~f}a!==0&&Lu(e,a,t)}function Sr(){return(Ee&6)===0?(ei(0),!1):!0}function ic(){if(me!==null){if(ze===0)var e=me.return;else e=me,la=rn=null,So(e),Xn=null,Ul=0,e=me;for(;e!==null;)ip(e.alternate,e),e=e.return;me=null}}function el(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,N1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ma=0,ic(),_e=e,me=a=aa(e.current,null),xe=t,ze=0,Et=null,Ua=!1,Wn=yl(e,t),Po=!1,In=zt=ec=mn=La=Ye=0,ft=Il=null,tc=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-vt(n),s=1<<i;t|=e[i],n&=~s}return ha=t,Gi(),a}function Rp(e,t){de=null,O.H=Xl,t===Vn||t===Fi?(t=Xd(),ze=3):t===oo?(t=Xd(),ze=4):ze=t===Lo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,me===null&&(Ye=1,ur(e,_t(t,e.current)))}function Tp(){var e=wt.current;return e===null?!0:(xe&4194048)===xe?Lt===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Lt:!1}function kp(){var e=O.H;return O.H=Xl,e===null?Xl:e}function Op(){var e=O.A;return O.A=a1,e}function jr(){Ye=4,Ua||(xe&4194048)!==xe&&wt.current!==null||(Wn=!0),(La&134217727)===0&&(mn&134217727)===0||_e===null||qa(_e,xe,zt,!1)}function rc(e,t,a){var n=Ee;Ee|=2;var i=kp(),s=Op();(_e!==e||xe!==t)&&(vr=null,el(e,t)),t=!1;var f=Ye;e:do try{if(ze!==0&&me!==null){var m=me,v=Et;switch(ze){case 8:ic(),f=6;break e;case 3:case 2:case 9:case 6:wt.current===null&&(t=!0);var R=ze;if(ze=0,Et=null,tl(e,m,v,R),a&&Wn){f=0;break e}break;default:R=ze,ze=0,Et=null,tl(e,m,v,R)}}i1(),f=Ye;break}catch(U){Rp(e,U)}while(!0);return t&&e.shellSuspendCounter++,la=rn=null,Ee=n,O.H=i,O.A=s,me===null&&(_e=null,xe=0,Gi()),f}function i1(){for(;me!==null;)_p(me)}function r1(e,t){var a=Ee;Ee|=2;var n=kp(),i=Op();_e!==e||xe!==t?(vr=null,yr=bt()+500,el(e,t)):Wn=yl(e,t);e:do try{if(ze!==0&&me!==null){t=me;var s=Et;t:switch(ze){case 1:ze=0,Et=null,tl(e,t,s,1);break;case 2:case 9:if(Gd(s)){ze=0,Et=null,Mp(t);break}t=function(){ze!==2&&ze!==9||_e!==e||(ze=7),It(e)},s.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:Gd(s)?(ze=0,Et=null,Mp(t)):(ze=0,Et=null,tl(e,t,s,7));break;case 5:var f=null;switch(me.tag){case 26:f=me.memoizedState;case 5:case 27:var m=me;if(f?yh(f):m.stateNode.complete){ze=0,Et=null;var v=m.sibling;if(v!==null)me=v;else{var R=m.return;R!==null?(me=R,wr(R)):me=null}break t}}ze=0,Et=null,tl(e,t,s,5);break;case 6:ze=0,Et=null,tl(e,t,s,6);break;case 8:ic(),Ye=6;break e;default:throw Error(c(462))}}s1();break}catch(U){Rp(e,U)}while(!0);return la=rn=null,O.H=n,O.A=i,Ee=a,me!==null?0:(_e=null,xe=0,Gi(),Ye)}function s1(){for(;me!==null&&!T0();)_p(me)}function _p(e){var t=np(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?wr(e):me=t}function Mp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Wf(a,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=Wf(a,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:So(t);default:ip(a,t),t=me=kd(t,ha),t=np(a,t,ha)}e.memoizedProps=e.pendingProps,t===null?wr(e):me=t}function tl(e,t,a,n){la=rn=null,So(t),Xn=null,Ul=0;var i=t.return;try{if($g(e,i,t,a,xe)){Ye=1,ur(e,_t(a,e.current)),me=null;return}}catch(s){if(i!==null)throw me=i,s;Ye=1,ur(e,_t(a,e.current)),me=null;return}t.flags&32768?(ye||n===1?e=!0:Wn||(xe&536870912)!==0?e=!1:(Ua=e=!0,(n===2||n===9||n===3||n===6)&&(n=wt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Dp(t,e)):wr(t)}function wr(e){var t=e;do{if((t.flags&32768)!==0){Dp(t,Ua);return}e=t.return;var a=Ig(t.alternate,t,ha);if(a!==null){me=a;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);Ye===0&&(Ye=5)}function Dp(e,t){do{var a=Pg(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ye=6,me=null}function Up(e,t,a,n,i,s,f,m,v){e.cancelPendingCommit=null;do Nr();while(Fe!==0);if((Ee&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Ks,q0(e,a,s,f,m,v),e===_e&&(me=_e=null,xe=0),Pn=t,Ba=e,ma=a,ac=s,nc=i,Ep=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,d1(zi,function(){return Yp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null,i=J.p,J.p=2,f=Ee,Ee|=4;try{e1(e,t,a)}finally{Ee=f,J.p=i,O.T=n}}Fe=1,Lp(),Hp(),Bp()}}function Lp(){if(Fe===1){Fe=0;var e=Ba,t=Pn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var n=J.p;J.p=2;var i=Ee;Ee|=4;try{xp(t,e);var s=bc,f=jd(e.containerInfo),m=s.focusedElem,v=s.selectionRange;if(f!==m&&m&&m.ownerDocument&&Sd(m.ownerDocument.documentElement,m)){if(v!==null&&Gs(m)){var R=v.start,U=v.end;if(U===void 0&&(U=R),"selectionStart"in m)m.selectionStart=R,m.selectionEnd=Math.min(U,m.value.length);else{var q=m.ownerDocument||document,T=q&&q.defaultView||window;if(T.getSelection){var M=T.getSelection(),P=m.textContent.length,re=Math.min(v.start,P),Te=v.end===void 0?re:Math.min(v.end,P);!M.extend&&re>Te&&(f=Te,Te=re,re=f);var z=vd(m,re),N=vd(m,Te);if(z&&N&&(M.rangeCount!==1||M.anchorNode!==z.node||M.anchorOffset!==z.offset||M.focusNode!==N.node||M.focusOffset!==N.offset)){var A=q.createRange();A.setStart(z.node,z.offset),M.removeAllRanges(),re>Te?(M.addRange(A),M.extend(N.node,N.offset)):(A.setEnd(N.node,N.offset),M.addRange(A))}}}}for(q=[],M=m;M=M.parentNode;)M.nodeType===1&&q.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<q.length;m++){var H=q[m];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Ur=!!xc,bc=xc=null}finally{Ee=i,J.p=n,O.T=a}}e.current=t,Fe=2}}function Hp(){if(Fe===2){Fe=0;var e=Ba,t=Pn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var n=J.p;J.p=2;var i=Ee;Ee|=4;try{fp(e,t.alternate,t)}finally{Ee=i,J.p=n,O.T=a}}Fe=3}}function Bp(){if(Fe===4||Fe===3){Fe=0,k0();var e=Ba,t=Pn,a=ma,n=Ep;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,Pn=Ba=null,qp(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ha=null),ws(a),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=O.T,i=J.p,J.p=2,O.T=null;try{for(var s=e.onRecoverableError,f=0;f<n.length;f++){var m=n[f];s(m.value,{componentStack:m.stack})}}finally{O.T=t,J.p=i}}(ma&3)!==0&&Nr(),It(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===lc?Pl++:(Pl=0,lc=e):Pl=0,ei(0)}}function qp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ml(t)))}function Nr(){return Lp(),Hp(),Bp(),Yp()}function Yp(){if(Fe!==5)return!1;var e=Ba,t=ac;ac=0;var a=ws(ma),n=O.T,i=J.p;try{J.p=32>a?32:a,O.T=null,a=nc,nc=null;var s=Ba,f=ma;if(Fe=0,Pn=Ba=null,ma=0,(Ee&6)!==0)throw Error(c(331));var m=Ee;if(Ee|=4,jp(s.current),yp(s,s.current,f,a),Ee=m,ei(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(bl,s)}catch{}return!0}finally{J.p=i,O.T=n,qp(e,t)}}function Gp(e,t,a){t=_t(a,t),t=Uo(e.stateNode,t,2),e=Oa(e,t,2),e!==null&&(vl(e,2),It(e))}function Ce(e,t,a){if(e.tag===3)Gp(e,e,a);else for(;t!==null;){if(t.tag===3){Gp(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ha===null||!Ha.has(n))){e=_t(a,e),a=Vf(2),n=Oa(t,a,2),n!==null&&(Xf(a,n,t,e),vl(n,2),It(n));break}}t=t.return}}function sc(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new n1;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Po=!0,i.add(a),e=o1.bind(null,e,t,a),t.then(e,e))}function o1(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,_e===e&&(xe&a)===a&&(Ye===4||Ye===3&&(xe&62914560)===xe&&300>bt()-br?(Ee&2)===0&&el(e,0):ec|=a,In===xe&&(In=0)),It(e)}function Vp(e,t){t===0&&(t=Uu()),e=an(e,t),e!==null&&(vl(e,t),It(e))}function c1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vp(e,a)}function u1(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Vp(e,a)}function d1(e,t){return ys(e,t)}var Er=null,al=null,oc=!1,zr=!1,cc=!1,Ya=0;function It(e){e!==al&&e.next===null&&(al===null?Er=al=e:al=al.next=e),zr=!0,oc||(oc=!0,p1())}function ei(e,t){if(!cc&&zr){cc=!0;do for(var a=!1,n=Er;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var f=n.suspendedLanes,m=n.pingedLanes;s=(1<<31-vt(42|e)+1)-1,s&=i&~(f&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Kp(n,s))}else s=xe,s=Ti(n,n===_e?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||yl(n,s)||(a=!0,Kp(n,s));n=n.next}while(a);cc=!1}}function f1(){Xp()}function Xp(){zr=oc=!1;var e=0;Ya!==0&&w1()&&(e=Ya);for(var t=bt(),a=null,n=Er;n!==null;){var i=n.next,s=Qp(n,t);s===0?(n.next=null,a===null?Er=i:a.next=i,i===null&&(al=a)):(a=n,(e!==0||(s&3)!==0)&&(zr=!0)),n=i}Fe!==0&&Fe!==5||ei(e),Ya!==0&&(Ya=0)}function Qp(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var f=31-vt(s),m=1<<f,v=i[f];v===-1?((m&a)===0||(m&n)!==0)&&(i[f]=B0(m,t)):v<=t&&(e.expiredLanes|=m),s&=~m}if(t=_e,a=xe,a=Ti(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&vs(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||yl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&vs(n),ws(a)){case 2:case 8:a=Mu;break;case 32:a=zi;break;case 268435456:a=Du;break;default:a=zi}return n=Zp.bind(null,e),a=ys(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&vs(n),e.callbackPriority=2,e.callbackNode=null,2}function Zp(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nr()&&e.callbackNode!==a)return null;var n=xe;return n=Ti(e,e===_e?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Cp(e,n,t),Qp(e,bt()),e.callbackNode!=null&&e.callbackNode===a?Zp.bind(null,e):null)}function Kp(e,t){if(Nr())return null;Cp(e,t,!0)}function p1(){E1(function(){(Ee&6)!==0?ys(_u,f1):Xp()})}function uc(){if(Ya===0){var e=Yn;e===0&&(e=Ci,Ci<<=1,(Ci&261888)===0&&(Ci=256)),Ya=e}return Ya}function Jp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mi(""+e)}function $p(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function h1(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var s=Jp((i[st]||null).action),f=n.submitter;f&&(t=(t=f[st]||null)?Jp(t.formAction):f.getAttribute("formAction"),t!==null&&(s=t,f=null));var m=new Hi("action","action",null,n,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ya!==0){var v=f?$p(i,f):new FormData(i);To(a,{pending:!0,data:v,method:i.method,action:s},null,v)}}else typeof s=="function"&&(m.preventDefault(),v=f?$p(i,f):new FormData(i),To(a,{pending:!0,data:v,method:i.method,action:s},s,v))},currentTarget:i}]})}}for(var dc=0;dc<Zs.length;dc++){var fc=Zs[dc],m1=fc.toLowerCase(),g1=fc[0].toUpperCase()+fc.slice(1);Gt(m1,"on"+g1)}Gt(Ed,"onAnimationEnd"),Gt(zd,"onAnimationIteration"),Gt(Cd,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(Og,"onTransitionRun"),Gt(_g,"onTransitionStart"),Gt(Mg,"onTransitionCancel"),Gt(Ad,"onTransitionEnd"),Cn("onMouseEnter",["mouseout","mouseover"]),Cn("onMouseLeave",["mouseout","mouseover"]),Cn("onPointerEnter",["pointerout","pointerover"]),Cn("onPointerLeave",["pointerout","pointerover"]),Ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ti));function Fp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var f=n.length-1;0<=f;f--){var m=n[f],v=m.instance,R=m.currentTarget;if(m=m.listener,v!==s&&i.isPropagationStopped())break e;s=m,i.currentTarget=R;try{s(i)}catch(U){Yi(U)}i.currentTarget=null,s=v}else for(f=0;f<n.length;f++){if(m=n[f],v=m.instance,R=m.currentTarget,m=m.listener,v!==s&&i.isPropagationStopped())break e;s=m,i.currentTarget=R;try{s(i)}catch(U){Yi(U)}i.currentTarget=null,s=v}}}}function ge(e,t){var a=t[Ns];a===void 0&&(a=t[Ns]=new Set);var n=e+"__bubble";a.has(n)||(Wp(t,e,2,!1),a.add(n))}function pc(e,t,a){var n=0;t&&(n|=4),Wp(a,e,n,t)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function hc(e){if(!e[Cr]){e[Cr]=!0,Vu.forEach(function(a){a!=="selectionchange"&&(x1.has(a)||pc(a,!1,e),pc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cr]||(t[Cr]=!0,pc("selectionchange",!1,t))}}function Wp(e,t,a,n){switch(zh(t)){case 2:var i=Q1;break;case 8:i=Z1;break;default:i=Rc}a=i.bind(null,t,a,e),i=void 0,!_s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function mc(e,t,a,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var m=n.stateNode.containerInfo;if(m===i)break;if(f===4)for(f=n.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;m!==null;){if(f=Nn(m),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){n=s=f;continue e}m=m.parentNode}}n=n.return}td(function(){var R=s,U=ks(a),q=[];e:{var T=Rd.get(e);if(T!==void 0){var M=Hi,P=e;switch(e){case"keypress":if(Ui(a)===0)break e;case"keydown":case"keyup":M=ug;break;case"focusin":P="focus",M=Ls;break;case"focusout":P="blur",M=Ls;break;case"beforeblur":case"afterblur":M=Ls;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=I0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=pg;break;case Ed:case zd:case Cd:M=tg;break;case Ad:M=mg;break;case"scroll":case"scrollend":M=F0;break;case"wheel":M=xg;break;case"copy":case"cut":case"paste":M=ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=rd;break;case"toggle":case"beforetoggle":M=yg}var re=(t&4)!==0,Te=!re&&(e==="scroll"||e==="scrollend"),z=re?T!==null?T+"Capture":null:T;re=[];for(var N=R,A;N!==null;){var H=N;if(A=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||A===null||z===null||(H=wl(N,z),H!=null&&re.push(ai(N,H,A))),Te)break;N=N.return}0<re.length&&(T=new M(T,P,null,a,U),q.push({event:T,listeners:re}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",T&&a!==Ts&&(P=a.relatedTarget||a.fromElement)&&(Nn(P)||P[wn]))break e;if((M||T)&&(T=U.window===U?U:(T=U.ownerDocument)?T.defaultView||T.parentWindow:window,M?(P=a.relatedTarget||a.toElement,M=R,P=P?Nn(P):null,P!==null&&(Te=p(P),re=P.tag,P!==Te||re!==5&&re!==27&&re!==6)&&(P=null)):(M=null,P=R),M!==P)){if(re=ld,H="onMouseLeave",z="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(re=rd,H="onPointerLeave",z="onPointerEnter",N="pointer"),Te=M==null?T:jl(M),A=P==null?T:jl(P),T=new re(H,N+"leave",M,a,U),T.target=Te,T.relatedTarget=A,H=null,Nn(U)===R&&(re=new re(z,N+"enter",P,a,U),re.target=A,re.relatedTarget=Te,H=re),Te=H,M&&P)t:{for(re=b1,z=M,N=P,A=0,H=z;H;H=re(H))A++;H=0;for(var ne=N;ne;ne=re(ne))H++;for(;0<A-H;)z=re(z),A--;for(;0<H-A;)N=re(N),H--;for(;A--;){if(z===N||N!==null&&z===N.alternate){re=z;break t}z=re(z),N=re(N)}re=null}else re=null;M!==null&&Ip(q,T,M,re,!1),P!==null&&Te!==null&&Ip(q,Te,P,re,!0)}}e:{if(T=R?jl(R):window,M=T.nodeName&&T.nodeName.toLowerCase(),M==="select"||M==="input"&&T.type==="file")var Se=hd;else if(fd(T))if(md)Se=Rg;else{Se=Cg;var te=zg}else M=T.nodeName,!M||M.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?R&&Rs(R.elementType)&&(Se=hd):Se=Ag;if(Se&&(Se=Se(e,R))){pd(q,Se,a,U);break e}te&&te(e,T,R),e==="focusout"&&R&&T.type==="number"&&R.memoizedProps.value!=null&&As(T,"number",T.value)}switch(te=R?jl(R):window,e){case"focusin":(fd(te)||te.contentEditable==="true")&&(_n=te,Vs=R,kl=null);break;case"focusout":kl=Vs=_n=null;break;case"mousedown":Xs=!0;break;case"contextmenu":case"mouseup":case"dragend":Xs=!1,wd(q,a,U);break;case"selectionchange":if(kg)break;case"keydown":case"keyup":wd(q,a,U)}var fe;if(Bs)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else On?ud(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(sd&&a.locale!=="ko"&&(On||be!=="onCompositionStart"?be==="onCompositionEnd"&&On&&(fe=ad()):(Ea=U,Ms="value"in Ea?Ea.value:Ea.textContent,On=!0)),te=Ar(R,be),0<te.length&&(be=new id(be,e,null,a,U),q.push({event:be,listeners:te}),fe?be.data=fe:(fe=dd(a),fe!==null&&(be.data=fe)))),(fe=Sg?jg(e,a):wg(e,a))&&(be=Ar(R,"onBeforeInput"),0<be.length&&(te=new id("onBeforeInput","beforeinput",null,a,U),q.push({event:te,listeners:be}),te.data=fe)),h1(q,e,R,a,U)}Fp(q,t)})}function ai(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ar(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=wl(e,a),i!=null&&n.unshift(ai(e,i,s)),i=wl(e,t),i!=null&&n.push(ai(e,i,s))),e.tag===3)return n;e=e.return}return[]}function b1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ip(e,t,a,n,i){for(var s=t._reactName,f=[];a!==null&&a!==n;){var m=a,v=m.alternate,R=m.stateNode;if(m=m.tag,v!==null&&v===n)break;m!==5&&m!==26&&m!==27||R===null||(v=R,i?(R=wl(a,s),R!=null&&f.unshift(ai(a,R,v))):i||(R=wl(a,s),R!=null&&f.push(ai(a,R,v)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var y1=/\r\n?/g,v1=/\u0000|\uFFFD/g;function Pp(e){return(typeof e=="string"?e:""+e).replace(y1,`
`).replace(v1,"")}function eh(e,t){return t=Pp(t),Pp(e)===t}function Re(e,t,a,n,i,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Rn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Rn(e,""+n);break;case"className":Oi(e,"class",n);break;case"tabIndex":Oi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Oi(e,a,n);break;case"style":Pu(e,n,s);break;case"data":if(t!=="object"){Oi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Mi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Re(e,t,"name",i.name,i,null),Re(e,t,"formEncType",i.formEncType,i,null),Re(e,t,"formMethod",i.formMethod,i,null),Re(e,t,"formTarget",i.formTarget,i,null)):(Re(e,t,"encType",i.encType,i,null),Re(e,t,"method",i.method,i,null),Re(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Mi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ea);break;case"onScroll":n!=null&&ge("scroll",e);break;case"onScrollEnd":n!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Mi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ki(e,"popover",n);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ki(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=J0.get(a)||a,ki(e,a,n))}}function gc(e,t,a,n,i,s){switch(a){case"style":Pu(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Rn(e,n):(typeof n=="number"||typeof n=="bigint")&&Rn(e,""+n);break;case"onScroll":n!=null&&ge("scroll",e);break;case"onScrollEnd":n!=null&&ge("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),s=e[st]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):ki(e,a,n)}}}function nt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var f=a[s];if(f!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Re(e,t,s,f,a,null)}}i&&Re(e,t,"srcSet",a.srcSet,a,null),n&&Re(e,t,"src",a.src,a,null);return;case"input":ge("invalid",e);var m=s=f=i=null,v=null,R=null;for(n in a)if(a.hasOwnProperty(n)){var U=a[n];if(U!=null)switch(n){case"name":i=U;break;case"type":f=U;break;case"checked":v=U;break;case"defaultChecked":R=U;break;case"value":s=U;break;case"defaultValue":m=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:Re(e,t,n,U,a,null)}}$u(e,s,m,v,R,f,i,!1);return;case"select":ge("invalid",e),n=f=s=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":s=m;break;case"defaultValue":f=m;break;case"multiple":n=m;default:Re(e,t,i,m,a,null)}t=s,a=f,e.multiple=!!n,t!=null?An(e,!!n,t,!1):a!=null&&An(e,!!n,a,!0);return;case"textarea":ge("invalid",e),s=i=n=null;for(f in a)if(a.hasOwnProperty(f)&&(m=a[f],m!=null))switch(f){case"value":n=m;break;case"defaultValue":i=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(c(91));break;default:Re(e,t,f,m,a,null)}Wu(e,n,i,s);return;case"option":for(v in a)a.hasOwnProperty(v)&&(n=a[v],n!=null)&&(v==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Re(e,t,v,n,a,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(n=0;n<ti.length;n++)ge(ti[n],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(n=a[R],n!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Re(e,t,R,n,a,null)}return;default:if(Rs(t)){for(U in a)a.hasOwnProperty(U)&&(n=a[U],n!==void 0&&gc(e,t,U,n,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(n=a[m],n!=null&&Re(e,t,m,n,a,null))}function S1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,f=null,m=null,v=null,R=null,U=null;for(M in a){var q=a[M];if(a.hasOwnProperty(M)&&q!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":v=q;default:n.hasOwnProperty(M)||Re(e,t,M,null,n,q)}}for(var T in n){var M=n[T];if(q=a[T],n.hasOwnProperty(T)&&(M!=null||q!=null))switch(T){case"type":s=M;break;case"name":i=M;break;case"checked":R=M;break;case"defaultChecked":U=M;break;case"value":f=M;break;case"defaultValue":m=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==q&&Re(e,t,T,M,n,q)}}Cs(e,f,m,v,R,U,s,i);return;case"select":M=f=m=T=null;for(s in a)if(v=a[s],a.hasOwnProperty(s)&&v!=null)switch(s){case"value":break;case"multiple":M=v;default:n.hasOwnProperty(s)||Re(e,t,s,null,n,v)}for(i in n)if(s=n[i],v=a[i],n.hasOwnProperty(i)&&(s!=null||v!=null))switch(i){case"value":T=s;break;case"defaultValue":m=s;break;case"multiple":f=s;default:s!==v&&Re(e,t,i,s,n,v)}t=m,a=f,n=M,T!=null?An(e,!!a,T,!1):!!n!=!!a&&(t!=null?An(e,!!a,t,!0):An(e,!!a,a?[]:"",!1));return;case"textarea":M=T=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!n.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Re(e,t,m,null,n,i)}for(f in n)if(i=n[f],s=a[f],n.hasOwnProperty(f)&&(i!=null||s!=null))switch(f){case"value":T=i;break;case"defaultValue":M=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==s&&Re(e,t,f,i,n,s)}Fu(e,T,M);return;case"option":for(var P in a)T=a[P],a.hasOwnProperty(P)&&T!=null&&!n.hasOwnProperty(P)&&(P==="selected"?e.selected=!1:Re(e,t,P,null,n,T));for(v in n)T=n[v],M=a[v],n.hasOwnProperty(v)&&T!==M&&(T!=null||M!=null)&&(v==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":Re(e,t,v,T,n,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)T=a[re],a.hasOwnProperty(re)&&T!=null&&!n.hasOwnProperty(re)&&Re(e,t,re,null,n,T);for(R in n)if(T=n[R],M=a[R],n.hasOwnProperty(R)&&T!==M&&(T!=null||M!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:Re(e,t,R,T,n,M)}return;default:if(Rs(t)){for(var Te in a)T=a[Te],a.hasOwnProperty(Te)&&T!==void 0&&!n.hasOwnProperty(Te)&&gc(e,t,Te,void 0,n,T);for(U in n)T=n[U],M=a[U],!n.hasOwnProperty(U)||T===M||T===void 0&&M===void 0||gc(e,t,U,T,n,M);return}}for(var z in a)T=a[z],a.hasOwnProperty(z)&&T!=null&&!n.hasOwnProperty(z)&&Re(e,t,z,null,n,T);for(q in n)T=n[q],M=a[q],!n.hasOwnProperty(q)||T===M||T==null&&M==null||Re(e,t,q,T,n,M)}function th(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function j1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,f=i.initiatorType,m=i.duration;if(s&&m&&th(f)){for(f=0,m=i.responseEnd,n+=1;n<a.length;n++){var v=a[n],R=v.startTime;if(R>m)break;var U=v.transferSize,q=v.initiatorType;U&&th(q)&&(v=v.responseEnd,f+=U*(v<m?1:(m-R)/(v-R)))}if(--n,t+=8*(s+f)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xc=null,bc=null;function Rr(e){return e.nodeType===9?e:e.ownerDocument}function ah(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vc=null;function w1(){var e=window.event;return e&&e.type==="popstate"?e===vc?!1:(vc=e,!0):(vc=null,!1)}var lh=typeof setTimeout=="function"?setTimeout:void 0,N1=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,E1=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(e){return ih.resolve(null).then(e).catch(z1)}:lh;function z1(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function rh(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),rl(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")ni(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ni(a);for(var s=a.firstChild;s;){var f=s.nextSibling,m=s.nodeName;s[Sl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=f}}else a==="body"&&ni(e.ownerDocument.body);a=i}while(a);rl(t)}function sh(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Sc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sc(a),Es(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function C1(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Sl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function A1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ht(e.nextSibling),e===null))return null;return e}function oh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function jc(e){return e.data==="$?"||e.data==="$~"}function wc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function R1(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nc=null;function ch(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function uh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function dh(e,t,a){switch(t=Rr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ni(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Es(e)}var Bt=new Map,fh=new Set;function Tr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=J.d;J.d={f:T1,r:k1,D:O1,C:_1,L:M1,m:D1,X:L1,S:U1,M:H1};function T1(){var e=ga.f(),t=Sr();return e||t}function k1(e){var t=En(e);t!==null&&t.tag===5&&t.type==="form"?Rf(t):ga.r(e)}var nl=typeof document>"u"?null:document;function ph(e,t,a){var n=nl;if(n&&typeof t=="string"&&t){var i=kt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),fh.has(i)||(fh.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),nt(t,"link",e),We(t),n.head.appendChild(t)))}}function O1(e){ga.D(e),ph("dns-prefetch",e,null)}function _1(e,t){ga.C(e,t),ph("preconnect",e,t)}function M1(e,t,a){ga.L(e,t,a);var n=nl;if(n&&e&&t){var i='link[rel="preload"][as="'+kt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+kt(a.imageSizes)+'"]')):i+='[href="'+kt(e)+'"]';var s=i;switch(t){case"style":s=ll(e);break;case"script":s=il(e)}Bt.has(s)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Bt.set(s,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(li(s))||t==="script"&&n.querySelector(ii(s))||(t=n.createElement("link"),nt(t,"link",e),We(t),n.head.appendChild(t)))}}function D1(e,t){ga.m(e,t);var a=nl;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+kt(n)+'"][href="'+kt(e)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=il(e)}if(!Bt.has(s)&&(e=j({rel:"modulepreload",href:e},t),Bt.set(s,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ii(s)))return}n=a.createElement("link"),nt(n,"link",e),We(n),a.head.appendChild(n)}}}function U1(e,t,a){ga.S(e,t,a);var n=nl;if(n&&e){var i=zn(n).hoistableStyles,s=ll(e);t=t||"default";var f=i.get(s);if(!f){var m={loading:0,preload:null};if(f=n.querySelector(li(s)))m.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Bt.get(s))&&Ec(e,a);var v=f=n.createElement("link");We(v),nt(v,"link",e),v._p=new Promise(function(R,U){v.onload=R,v.onerror=U}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,kr(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:m},i.set(s,f)}}}function L1(e,t){ga.X(e,t);var a=nl;if(a&&e){var n=zn(a).hoistableScripts,i=il(e),s=n.get(i);s||(s=a.querySelector(ii(i)),s||(e=j({src:e,async:!0},t),(t=Bt.get(i))&&zc(e,t),s=a.createElement("script"),We(s),nt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function H1(e,t){ga.M(e,t);var a=nl;if(a&&e){var n=zn(a).hoistableScripts,i=il(e),s=n.get(i);s||(s=a.querySelector(ii(i)),s||(e=j({src:e,async:!0,type:"module"},t),(t=Bt.get(i))&&zc(e,t),s=a.createElement("script"),We(s),nt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function hh(e,t,a,n){var i=(i=ie.current)?Tr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ll(a.href),a=zn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ll(a.href);var s=zn(i).hoistableStyles,f=s.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,f),(s=i.querySelector(li(e)))&&!s._p&&(f.instance=s,f.state.loading=5),Bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Bt.set(e,a),s||B1(i,e,a,f.state))),t&&n===null)throw Error(c(528,""));return f}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=il(a),a=zn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ll(e){return'href="'+kt(e)+'"'}function li(e){return'link[rel="stylesheet"]['+e+"]"}function mh(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function B1(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),nt(t,"link",a),We(t),e.head.appendChild(t))}function il(e){return'[src="'+kt(e)+'"]'}function ii(e){return"script[async]"+e}function gh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+kt(a.href)+'"]');if(n)return t.instance=n,We(n),n;var i=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),We(n),nt(n,"style",i),kr(n,a.precedence,e),t.instance=n;case"stylesheet":i=ll(a.href);var s=e.querySelector(li(i));if(s)return t.state.loading|=4,t.instance=s,We(s),s;n=mh(a),(i=Bt.get(i))&&Ec(n,i),s=(e.ownerDocument||e).createElement("link"),We(s);var f=s;return f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),nt(s,"link",n),t.state.loading|=4,kr(s,a.precedence,e),t.instance=s;case"script":return s=il(a.src),(i=e.querySelector(ii(s)))?(t.instance=i,We(i),i):(n=a,(i=Bt.get(s))&&(n=j({},a),zc(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),We(i),nt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,kr(n,a.precedence,e));return t.instance}function kr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,f=0;f<n.length;f++){var m=n[f];if(m.dataset.precedence===t)s=m;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ec(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Or=null;function xh(e,t,a){if(Or===null){var n=new Map,i=Or=new Map;i.set(a,n)}else i=Or,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var s=a[i];if(!(s[Sl]||s[Pe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var f=s.getAttribute(t)||"";f=e+f;var m=n.get(f);m?m.push(s):n.set(f,[s])}}return n}function bh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function q1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Y1(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=ll(n.href),s=t.querySelector(li(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_r.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,We(s);return}s=t.ownerDocument||t,n=mh(n),(i=Bt.get(i))&&Ec(n,i),s=s.createElement("link"),We(s);var f=s;f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),nt(s,"link",n),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_r.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Cc=0;function G1(e,t){return e.stylesheets&&e.count===0&&Dr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Dr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Cc===0&&(Cc=62500*j1());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Dr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Cc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function _r(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Dr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mr=null;function Dr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mr=new Map,t.forEach(V1,e),Mr=null,_r.call(e))}function V1(e,t){if(!(t.state.loading&4)){var a=Mr.get(e);if(a)var n=a.get(null);else{a=new Map,Mr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var f=i[s];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}i=t.instance,f=i.getAttribute("data-precedence"),s=a.get(f)||n,s===n&&a.set(null,i),a.set(f,i),this.count++,n=_r.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ri={$$typeof:Z,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function X1(e,t,a,n,i,s,f,m,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.hiddenUpdates=Ss(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function vh(e,t,a,n,i,s,f,m,v,R,U,q){return e=new X1(e,t,a,f,v,R,U,q,m),t=1,s===!0&&(t|=24),s=jt(3,null,null,t),e.current=s,s.stateNode=e,t=io(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},co(s),e}function Sh(e){return e?(e=Un,e):Un}function jh(e,t,a,n,i,s){i=Sh(i),n.context===null?n.context=i:n.pendingContext=i,n=ka(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Oa(e,n,t),a!==null&&(pt(a,e,t),Hl(a,e,t))}function wh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ac(e,t){wh(e,t),(e=e.alternate)&&wh(e,t)}function Nh(e){if(e.tag===13||e.tag===31){var t=an(e,67108864);t!==null&&pt(t,e,67108864),Ac(e,67108864)}}function Eh(e){if(e.tag===13||e.tag===31){var t=Ct();t=js(t);var a=an(e,t);a!==null&&pt(a,e,t),Ac(e,t)}}var Ur=!0;function Q1(e,t,a,n){var i=O.T;O.T=null;var s=J.p;try{J.p=2,Rc(e,t,a,n)}finally{J.p=s,O.T=i}}function Z1(e,t,a,n){var i=O.T;O.T=null;var s=J.p;try{J.p=8,Rc(e,t,a,n)}finally{J.p=s,O.T=i}}function Rc(e,t,a,n){if(Ur){var i=Tc(n);if(i===null)mc(e,t,n,Lr,a),Ch(e,n);else if(J1(i,e,t,a,n))n.stopPropagation();else if(Ch(e,n),t&4&&-1<K1.indexOf(e)){for(;i!==null;){var s=En(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var f=Wa(s.pendingLanes);if(f!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var v=1<<31-vt(f);m.entanglements[1]|=v,f&=~v}It(s),(Ee&6)===0&&(yr=bt()+500,ei(0))}}break;case 31:case 13:m=an(s,2),m!==null&&pt(m,s,2),Sr(),Ac(s,2)}if(s=Tc(n),s===null&&mc(e,t,n,Lr,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else mc(e,t,n,null,a)}}function Tc(e){return e=ks(e),kc(e)}var Lr=null;function kc(e){if(Lr=null,e=Nn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Lr=e,null}function zh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(O0()){case _u:return 2;case Mu:return 8;case zi:case _0:return 32;case Du:return 268435456;default:return 32}default:return 32}}var Oc=!1,Va=null,Xa=null,Qa=null,si=new Map,oi=new Map,Za=[],K1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ch(e,t){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function ci(e,t,a,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=En(t),t!==null&&Nh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function J1(e,t,a,n,i){switch(t){case"focusin":return Va=ci(Va,e,t,a,n,i),!0;case"dragenter":return Xa=ci(Xa,e,t,a,n,i),!0;case"mouseover":return Qa=ci(Qa,e,t,a,n,i),!0;case"pointerover":var s=i.pointerId;return si.set(s,ci(si.get(s)||null,e,t,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,oi.set(s,ci(oi.get(s)||null,e,t,a,n,i)),!0}return!1}function Ah(e){var t=Nn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Yu(e.priority,function(){Eh(a)});return}}else if(t===31){if(t=g(a),t!==null){e.blockedOn=t,Yu(e.priority,function(){Eh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Tc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ts=n,a.target.dispatchEvent(n),Ts=null}else return t=En(a),t!==null&&Nh(t),e.blockedOn=a,!1;t.shift()}return!0}function Rh(e,t,a){Hr(e)&&a.delete(t)}function $1(){Oc=!1,Va!==null&&Hr(Va)&&(Va=null),Xa!==null&&Hr(Xa)&&(Xa=null),Qa!==null&&Hr(Qa)&&(Qa=null),si.forEach(Rh),oi.forEach(Rh)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,Oc||(Oc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,$1)))}var qr=null;function Th(e){qr!==e&&(qr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){qr===e&&(qr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(kc(n||a)===null)continue;break}var s=En(a);s!==null&&(e.splice(t,3),t-=3,To(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function rl(e){function t(v){return Br(v,e)}Va!==null&&Br(Va,e),Xa!==null&&Br(Xa,e),Qa!==null&&Br(Qa,e),si.forEach(t),oi.forEach(t);for(var a=0;a<Za.length;a++){var n=Za[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Ah(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],f=i[st]||null;if(typeof s=="function")f||Th(a);else if(f){var m=null;if(s&&s.hasAttribute("formAction")){if(i=s,f=s[st]||null)m=f.formAction;else if(kc(i)!==null)continue}else m=f.action;typeof m=="function"?a[n+1]=m:(a.splice(n,3),n-=3),Th(a)}}}function kh(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(f){return i=f})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function _c(e){this._internalRoot=e}Yr.prototype.render=_c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=Ct();jh(a,n,e,t,null,null)},Yr.prototype.unmount=_c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jh(e.current,2,null,e,null,null),Sr(),t[wn]=null}};function Yr(e){this._internalRoot=e}Yr.prototype.unstable_scheduleHydration=function(e){if(e){var t=qu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Za.length&&t!==0&&t<Za[a].priority;a++);Za.splice(a,0,e),a===0&&Ah(e)}};var Oh=o.version;if(Oh!=="19.2.5")throw Error(c(527,Oh,"19.2.5"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=x(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var F1={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{bl=Gr.inject(F1),yt=Gr}catch{}}return di.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,n="",i=Bf,s=qf,f=Yf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=vh(e,1,!1,null,null,a,n,null,i,s,f,kh),e[wn]=t.current,hc(e),new _c(t)},di.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var n=!1,i="",s=Bf,f=qf,m=Yf,v=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=vh(e,1,!0,t,a??null,n,i,v,s,f,m,kh),t.context=Sh(null),a=t.current,n=Ct(),n=js(n),i=ka(n),i.callback=null,Oa(a,i,n),a=n,t.current.lanes=a,vl(t,a),It(t),e[wn]=t.current,hc(e),new Yr(t)},di.version="19.2.5",di}var Gh;function rx(){if(Gh)return Uc.exports;Gh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Uc.exports=ix(),Uc.exports}var sx=rx();const ox=ym(sx);var Vh="popstate";function Xh(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function cx(l={}){function o(d,p){let{pathname:h="/",search:g="",hash:b=""}=jn(d.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),au("",{pathname:h,search:g,hash:b},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function u(d,p){let h=d.document.querySelector("base"),g="";if(h&&h.getAttribute("href")){let b=d.location.href,x=b.indexOf("#");g=x===-1?b:b.slice(0,x)}return g+"#"+(typeof p=="string"?p:xi(p))}function c(d,p){Yt(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return dx(o,u,c,l)}function He(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function Yt(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function ux(){return Math.random().toString(36).substring(2,10)}function Qh(l,o){return{usr:l.state,key:l.key,idx:o,masked:l.unstable_mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function au(l,o,u=null,c,d){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?jn(o):o,state:u,key:o&&o.key||c||ux(),unstable_mask:d}}function xi({pathname:l="/",search:o="",hash:u=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(l+=u.charAt(0)==="#"?u:"#"+u),l}function jn(l){let o={};if(l){let u=l.indexOf("#");u>=0&&(o.hash=l.substring(u),l=l.substring(0,u));let c=l.indexOf("?");c>=0&&(o.search=l.substring(c),l=l.substring(0,c)),l&&(o.pathname=l)}return o}function dx(l,o,u,c={}){let{window:d=document.defaultView,v5Compat:p=!1}=c,h=d.history,g="POP",b=null,x=y();x==null&&(x=0,h.replaceState({...h.state,idx:x},""));function y(){return(h.state||{idx:null}).idx}function j(){g="POP";let C=y(),Q=C==null?null:C-x;x=C,b&&b({action:g,location:D.location,delta:Q})}function k(C,Q){g="PUSH";let F=Xh(C)?C:au(D.location,C,Q);u&&u(F,C),x=y()+1;let Z=Qh(F,x),K=D.createHref(F.unstable_mask||F);try{h.pushState(Z,"",K)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;d.location.assign(K)}p&&b&&b({action:g,location:D.location,delta:1})}function X(C,Q){g="REPLACE";let F=Xh(C)?C:au(D.location,C,Q);u&&u(F,C),x=y();let Z=Qh(F,x),K=D.createHref(F.unstable_mask||F);h.replaceState(Z,"",K),p&&b&&b({action:g,location:D.location,delta:0})}function E(C){return fx(C)}let D={get action(){return g},get location(){return l(d,h)},listen(C){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(Vh,j),b=C,()=>{d.removeEventListener(Vh,j),b=null}},createHref(C){return o(d,C)},createURL:E,encodeLocation(C){let Q=E(C);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:k,replace:X,go(C){return h.go(C)}};return D}function fx(l,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),He(u,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:xi(l);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function Sm(l,o,u="/"){return px(l,o,u,!1)}function px(l,o,u,c){let d=typeof o=="string"?jn(o):o,p=ya(d.pathname||"/",u);if(p==null)return null;let h=jm(l);hx(h);let g=null;for(let b=0;g==null&&b<h.length;++b){let x=Ex(p);g=wx(h[b],x,c)}return g}function jm(l,o=[],u=[],c="",d=!1){let p=(h,g,b=d,x)=>{let y={relativePath:x===void 0?h.path||"":x,caseSensitive:h.caseSensitive===!0,childrenIndex:g,route:h};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(c)&&b)return;He(y.relativePath.startsWith(c),`Absolute route path "${y.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(c.length)}let j=Qt([c,y.relativePath]),k=u.concat(y);h.children&&h.children.length>0&&(He(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),jm(h.children,o,k,j,b)),!(h.path==null&&!h.index)&&o.push({path:j,score:Sx(j,h.index),routesMeta:k})};return l.forEach((h,g)=>{if(h.path===""||!h.path?.includes("?"))p(h,g);else for(let b of wm(h.path))p(h,g,!0,b)}),o}function wm(l){let o=l.split("/");if(o.length===0)return[];let[u,...c]=o,d=u.endsWith("?"),p=u.replace(/\?$/,"");if(c.length===0)return d?[p,""]:[p];let h=wm(c.join("/")),g=[];return g.push(...h.map(b=>b===""?p:[p,b].join("/"))),d&&g.push(...h),g.map(b=>l.startsWith("/")&&b===""?"/":b)}function hx(l){l.sort((o,u)=>o.score!==u.score?u.score-o.score:jx(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var mx=/^:[\w-]+$/,gx=3,xx=2,bx=1,yx=10,vx=-2,Zh=l=>l==="*";function Sx(l,o){let u=l.split("/"),c=u.length;return u.some(Zh)&&(c+=vx),o&&(c+=xx),u.filter(d=>!Zh(d)).reduce((d,p)=>d+(mx.test(p)?gx:p===""?bx:yx),c)}function jx(l,o){return l.length===o.length&&l.slice(0,-1).every((c,d)=>c===o[d])?l[l.length-1]-o[o.length-1]:0}function wx(l,o,u=!1){let{routesMeta:c}=l,d={},p="/",h=[];for(let g=0;g<c.length;++g){let b=c[g],x=g===c.length-1,y=p==="/"?o:o.slice(p.length)||"/",j=es({path:b.relativePath,caseSensitive:b.caseSensitive,end:x},y),k=b.route;if(!j&&x&&u&&!c[c.length-1].route.index&&(j=es({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},y)),!j)return null;Object.assign(d,j.params),h.push({params:d,pathname:Qt([p,j.pathname]),pathnameBase:Rx(Qt([p,j.pathnameBase])),route:k}),j.pathnameBase!=="/"&&(p=Qt([p,j.pathnameBase]))}return h}function es(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[u,c]=Nx(l.path,l.caseSensitive,l.end),d=o.match(u);if(!d)return null;let p=d[0],h=p.replace(/(.)\/+$/,"$1"),g=d.slice(1);return{params:c.reduce((x,{paramName:y,isOptional:j},k)=>{if(y==="*"){let E=g[k]||"";h=p.slice(0,p.length-E.length).replace(/(.)\/+$/,"$1")}const X=g[k];return j&&!X?x[y]=void 0:x[y]=(X||"").replace(/%2F/g,"/"),x},{}),pathname:p,pathnameBase:h,pattern:l}}function Nx(l,o=!1,u=!0){Yt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,g,b,x,y)=>{if(c.push({paramName:g,isOptional:b!=null}),b){let j=y.charAt(x+h.length);return j&&j!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),c]}function Ex(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Yt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function ya(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=l.charAt(u);return c&&c!=="/"?null:l.slice(u)||"/"}var zx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Cx(l,o="/"){let{pathname:u,search:c="",hash:d=""}=typeof l=="string"?jn(l):l,p;return u?(u=Nm(u),u.startsWith("/")?p=Kh(u.substring(1),"/"):p=Kh(u,o)):p=o,{pathname:p,search:Tx(c),hash:kx(d)}}function Kh(l,o){let u=ts(o).split("/");return l.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function qc(l,o,u,c){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ax(l){return l.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function pu(l){let o=Ax(l);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function rs(l,o,u,c=!1){let d;typeof l=="string"?d=jn(l):(d={...l},He(!d.pathname||!d.pathname.includes("?"),qc("?","pathname","search",d)),He(!d.pathname||!d.pathname.includes("#"),qc("#","pathname","hash",d)),He(!d.search||!d.search.includes("#"),qc("#","search","hash",d)));let p=l===""||d.pathname==="",h=p?"/":d.pathname,g;if(h==null)g=u;else{let j=o.length-1;if(!c&&h.startsWith("..")){let k=h.split("/");for(;k[0]==="..";)k.shift(),j-=1;d.pathname=k.join("/")}g=j>=0?o[j]:"/"}let b=Cx(d,g),x=h&&h!=="/"&&h.endsWith("/"),y=(p||h===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(x||y)&&(b.pathname+="/"),b}var Nm=l=>l.replace(/\/\/+/g,"/"),Qt=l=>Nm(l.join("/")),ts=l=>l.replace(/\/+$/,""),Rx=l=>ts(l).replace(/^\/*/,"/"),Tx=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,kx=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,Ox=class{constructor(l,o,u,c=!1){this.status=l,this.statusText=o||"",this.internal=c,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function _x(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function Mx(l){let o=l.map(u=>u.route.path).filter(Boolean);return Qt(o)||"/"}var Em=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function zm(l,o){let u=l;if(typeof u!="string"||!zx.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let c=u,d=!1;if(Em)try{let p=new URL(window.location.href),h=u.startsWith("//")?new URL(p.protocol+u):new URL(u),g=ya(h.pathname,o);h.origin===p.origin&&g!=null?u=g+h.search+h.hash:d=!0}catch{Yt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:d,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Cm=["POST","PUT","PATCH","DELETE"];new Set(Cm);var Dx=["GET",...Cm];new Set(Dx);var hl=S.createContext(null);hl.displayName="DataRouter";var ss=S.createContext(null);ss.displayName="DataRouterState";var Am=S.createContext(!1);function Ux(){return S.useContext(Am)}var Rm=S.createContext({isTransitioning:!1});Rm.displayName="ViewTransition";var Lx=S.createContext(new Map);Lx.displayName="Fetchers";var Hx=S.createContext(null);Hx.displayName="Await";var Rt=S.createContext(null);Rt.displayName="Navigation";var yi=S.createContext(null);yi.displayName="Location";var Zt=S.createContext({outlet:null,matches:[],isDataRoute:!1});Zt.displayName="Route";var hu=S.createContext(null);hu.displayName="RouteError";var Tm="REACT_ROUTER_ERROR",Bx="REDIRECT",qx="ROUTE_ERROR_RESPONSE";function Yx(l){if(l.startsWith(`${Tm}:${Bx}:{`))try{let o=JSON.parse(l.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Gx(l){if(l.startsWith(`${Tm}:${qx}:{`))try{let o=JSON.parse(l.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new Ox(o.status,o.statusText,o.data)}catch{}}function Vx(l,{relative:o}={}){He(ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=S.useContext(Rt),{hash:d,pathname:p,search:h}=vi(l,{relative:o}),g=p;return u!=="/"&&(g=p==="/"?u:Qt([u,p])),c.createHref({pathname:g,search:h,hash:d})}function ml(){return S.useContext(yi)!=null}function Kt(){return He(ml(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(yi).location}var km="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Om(l){S.useContext(Rt).static||S.useLayoutEffect(l)}function Ja(){let{isDataRoute:l}=S.useContext(Zt);return l?ab():Xx()}function Xx(){He(ml(),"useNavigate() may be used only in the context of a <Router> component.");let l=S.useContext(hl),{basename:o,navigator:u}=S.useContext(Rt),{matches:c}=S.useContext(Zt),{pathname:d}=Kt(),p=JSON.stringify(pu(c)),h=S.useRef(!1);return Om(()=>{h.current=!0}),S.useCallback((b,x={})=>{if(Yt(h.current,km),!h.current)return;if(typeof b=="number"){u.go(b);return}let y=rs(b,JSON.parse(p),d,x.relative==="path");l==null&&o!=="/"&&(y.pathname=y.pathname==="/"?o:Qt([o,y.pathname])),(x.replace?u.replace:u.push)(y,x.state,x)},[o,u,p,d,l])}S.createContext(null);function _m(){let{matches:l}=S.useContext(Zt),o=l[l.length-1];return o?o.params:{}}function vi(l,{relative:o}={}){let{matches:u}=S.useContext(Zt),{pathname:c}=Kt(),d=JSON.stringify(pu(u));return S.useMemo(()=>rs(l,JSON.parse(d),c,o==="path"),[l,d,c,o])}function Qx(l,o){return Mm(l,o)}function Mm(l,o,u){He(ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=S.useContext(Rt),{matches:d}=S.useContext(Zt),p=d[d.length-1],h=p?p.params:{},g=p?p.pathname:"/",b=p?p.pathnameBase:"/",x=p&&p.route;{let C=x&&x.path||"";Um(g,!x||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let y=Kt(),j;if(o){let C=typeof o=="string"?jn(o):o;He(b==="/"||C.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${C.pathname}" was given in the \`location\` prop.`),j=C}else j=y;let k=j.pathname||"/",X=k;if(b!=="/"){let C=b.replace(/^\//,"").split("/");X="/"+k.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=Sm(l,{pathname:X});Yt(x||E!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),Yt(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=Fx(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},h,C.params),pathname:Qt([b,c.encodeLocation?c.encodeLocation(C.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?b:Qt([b,c.encodeLocation?c.encodeLocation(C.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),d,u);return o&&D?S.createElement(yi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...j},navigationType:"POP"}},D):D}function Zx(){let l=tb(),o=_x(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),u=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",l),h=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:p},"ErrorBoundary")," or"," ",S.createElement("code",{style:p},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},o),u?S.createElement("pre",{style:d},u):null,h)}var Kx=S.createElement(Zx,null),Dm=class extends S.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){this.props.onError?this.props.onError(l,o):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const u=Gx(l.digest);u&&(l=u)}let o=l!==void 0?S.createElement(Zt.Provider,{value:this.props.routeContext},S.createElement(hu.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?S.createElement(Jx,{error:l},o):o}};Dm.contextType=Am;var Yc=new WeakMap;function Jx({children:l,error:o}){let{basename:u}=S.useContext(Rt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=Yx(o.digest);if(c){let d=Yc.get(o);if(d)throw d;let p=zm(c.location,u);if(Em&&!Yc.get(o))if(p.isExternal||c.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Yc.set(o,h),h}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return l}function $x({routeContext:l,match:o,children:u}){let c=S.useContext(hl);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),S.createElement(Zt.Provider,{value:l},u)}function Fx(l,o=[],u){let c=u?.state;if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let d=l,p=c?.errors;if(p!=null){let y=d.findIndex(j=>j.route.id&&p?.[j.route.id]!==void 0);He(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,y+1))}let h=!1,g=-1;if(u&&c){h=c.renderFallback;for(let y=0;y<d.length;y++){let j=d[y];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(g=y),j.route.id){let{loaderData:k,errors:X}=c,E=j.route.loader&&!k.hasOwnProperty(j.route.id)&&(!X||X[j.route.id]===void 0);if(j.route.lazy||E){u.isStatic&&(h=!0),g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}}let b=u?.onError,x=c&&b?(y,j)=>{b(y,{location:c.location,params:c.matches?.[0]?.params??{},unstable_pattern:Mx(c.matches),errorInfo:j})}:void 0;return d.reduceRight((y,j,k)=>{let X,E=!1,D=null,C=null;c&&(X=p&&j.route.id?p[j.route.id]:void 0,D=j.route.errorElement||Kx,h&&(g<0&&k===0?(Um("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,C=null):g===k&&(E=!0,C=j.route.hydrateFallbackElement||null)));let Q=o.concat(d.slice(0,k+1)),F=()=>{let Z;return X?Z=D:E?Z=C:j.route.Component?Z=S.createElement(j.route.Component,null):j.route.element?Z=j.route.element:Z=y,S.createElement($x,{match:j,routeContext:{outlet:y,matches:Q,isDataRoute:c!=null},children:Z})};return c&&(j.route.ErrorBoundary||j.route.errorElement||k===0)?S.createElement(Dm,{location:c.location,revalidation:c.revalidation,component:D,error:X,children:F(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:x}):F()},null)}function mu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wx(l){let o=S.useContext(hl);return He(o,mu(l)),o}function Ix(l){let o=S.useContext(ss);return He(o,mu(l)),o}function Px(l){let o=S.useContext(Zt);return He(o,mu(l)),o}function gu(l){let o=Px(l),u=o.matches[o.matches.length-1];return He(u.route.id,`${l} can only be used on routes that contain a unique "id"`),u.route.id}function eb(){return gu("useRouteId")}function tb(){let l=S.useContext(hu),o=Ix("useRouteError"),u=gu("useRouteError");return l!==void 0?l:o.errors?.[u]}function ab(){let{router:l}=Wx("useNavigate"),o=gu("useNavigate"),u=S.useRef(!1);return Om(()=>{u.current=!0}),S.useCallback(async(d,p={})=>{Yt(u.current,km),u.current&&(typeof d=="number"?await l.navigate(d):await l.navigate(d,{fromRouteId:o,...p}))},[l,o])}var Jh={};function Um(l,o,u){!o&&!Jh[l]&&(Jh[l]=!0,Yt(!1,u))}S.memo(nb);function nb({routes:l,future:o,state:u,isStatic:c,onError:d}){return Mm(l,void 0,{state:u,isStatic:c,onError:d})}function $h({to:l,replace:o,state:u,relative:c}){He(ml(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=S.useContext(Rt);Yt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=S.useContext(Zt),{pathname:h}=Kt(),g=Ja(),b=rs(l,pu(p),h,c==="path"),x=JSON.stringify(b);return S.useEffect(()=>{g(JSON.parse(x),{replace:o,state:u,relative:c})},[g,x,c,o,u]),null}function At(l){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lb({basename:l="/",children:o=null,location:u,navigationType:c="POP",navigator:d,static:p=!1,unstable_useTransitions:h}){He(!ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=l.replace(/^\/*/,"/"),b=S.useMemo(()=>({basename:g,navigator:d,static:p,unstable_useTransitions:h,future:{}}),[g,d,p,h]);typeof u=="string"&&(u=jn(u));let{pathname:x="/",search:y="",hash:j="",state:k=null,key:X="default",unstable_mask:E}=u,D=S.useMemo(()=>{let C=ya(x,g);return C==null?null:{location:{pathname:C,search:y,hash:j,state:k,key:X,unstable_mask:E},navigationType:c}},[g,x,y,j,k,X,c,E]);return Yt(D!=null,`<Router basename="${g}"> is not able to match the URL "${x}${y}${j}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:S.createElement(Rt.Provider,{value:b},S.createElement(yi.Provider,{children:o,value:D}))}function Lm({children:l,location:o}){return Qx(nu(l),o)}function nu(l,o=[]){let u=[];return S.Children.forEach(l,(c,d)=>{if(!S.isValidElement(c))return;let p=[...o,d];if(c.type===S.Fragment){u.push.apply(u,nu(c.props.children,p));return}He(c.type===At,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=nu(c.props.children,p)),u.push(h)}),u}var Zr="get",Kr="application/x-www-form-urlencoded";function os(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function ib(l){return os(l)&&l.tagName.toLowerCase()==="button"}function rb(l){return os(l)&&l.tagName.toLowerCase()==="form"}function sb(l){return os(l)&&l.tagName.toLowerCase()==="input"}function ob(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function cb(l,o){return l.button===0&&(!o||o==="_self")&&!ob(l)}var Vr=null;function ub(){if(Vr===null)try{new FormData(document.createElement("form"),0),Vr=!1}catch{Vr=!0}return Vr}var db=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gc(l){return l!=null&&!db.has(l)?(Yt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kr}"`),null):l}function fb(l,o){let u,c,d,p,h;if(rb(l)){let g=l.getAttribute("action");c=g?ya(g,o):null,u=l.getAttribute("method")||Zr,d=Gc(l.getAttribute("enctype"))||Kr,p=new FormData(l)}else if(ib(l)||sb(l)&&(l.type==="submit"||l.type==="image")){let g=l.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||g.getAttribute("action");if(c=b?ya(b,o):null,u=l.getAttribute("formmethod")||g.getAttribute("method")||Zr,d=Gc(l.getAttribute("formenctype"))||Gc(g.getAttribute("enctype"))||Kr,p=new FormData(g,l),!ub()){let{name:x,type:y,value:j}=l;if(y==="image"){let k=x?`${x}.`:"";p.append(`${k}x`,"0"),p.append(`${k}y`,"0")}else x&&p.append(x,j)}}else{if(os(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Zr,c=null,d=Kr,h=l}return p&&d==="text/plain"&&(h=p,p=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:p,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function xu(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function Hm(l,o,u,c){let d=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${c}`:d.pathname=`${d.pathname}.${c}`:d.pathname==="/"?d.pathname=`_root.${c}`:o&&ya(d.pathname,o)==="/"?d.pathname=`${ts(o)}/_root.${c}`:d.pathname=`${ts(d.pathname)}.${c}`,d}async function pb(l,o){if(l.id in o)return o[l.id];try{let u=await import(l.module);return o[l.id]=u,u}catch(u){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hb(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function mb(l,o,u){let c=await Promise.all(l.map(async d=>{let p=o.routes[d.route.id];if(p){let h=await pb(p,u);return h.links?h.links():[]}return[]}));return yb(c.flat(1).filter(hb).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Fh(l,o,u,c,d,p){let h=(b,x)=>u[x]?b.route.id!==u[x].route.id:!0,g=(b,x)=>u[x].pathname!==b.pathname||u[x].route.path?.endsWith("*")&&u[x].params["*"]!==b.params["*"];return p==="assets"?o.filter((b,x)=>h(b,x)||g(b,x)):p==="data"?o.filter((b,x)=>{let y=c.routes[b.route.id];if(!y||!y.hasLoader)return!1;if(h(b,x)||g(b,x))return!0;if(b.route.shouldRevalidate){let j=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function gb(l,o,{includeHydrateFallback:u}={}){return xb(l.map(c=>{let d=o.routes[c.route.id];if(!d)return[];let p=[d.module];return d.clientActionModule&&(p=p.concat(d.clientActionModule)),d.clientLoaderModule&&(p=p.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(p=p.concat(d.hydrateFallbackModule)),d.imports&&(p=p.concat(d.imports)),p}).flat(1))}function xb(l){return[...new Set(l)]}function bb(l){let o={},u=Object.keys(l).sort();for(let c of u)o[c]=l[c];return o}function yb(l,o){let u=new Set;return new Set(o),l.reduce((c,d)=>{let p=JSON.stringify(bb(d));return u.has(p)||(u.add(p),c.push({key:p,link:d})),c},[])}function bu(){let l=S.useContext(hl);return xu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function vb(){let l=S.useContext(ss);return xu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var yu=S.createContext(void 0);yu.displayName="FrameworkContext";function vu(){let l=S.useContext(yu);return xu(l,"You must render this element inside a <HydratedRouter> element"),l}function Sb(l,o){let u=S.useContext(yu),[c,d]=S.useState(!1),[p,h]=S.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:x,onMouseLeave:y,onTouchStart:j}=o,k=S.useRef(null);S.useEffect(()=>{if(l==="render"&&h(!0),l==="viewport"){let D=Q=>{Q.forEach(F=>{h(F.isIntersecting)})},C=new IntersectionObserver(D,{threshold:.5});return k.current&&C.observe(k.current),()=>{C.disconnect()}}},[l]),S.useEffect(()=>{if(c){let D=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(D)}}},[c]);let X=()=>{d(!0)},E=()=>{d(!1),h(!1)};return u?l!=="intent"?[p,k,{}]:[p,k,{onFocus:fi(g,X),onBlur:fi(b,E),onMouseEnter:fi(x,X),onMouseLeave:fi(y,E),onTouchStart:fi(j,X)}]:[!1,k,{}]}function fi(l,o){return u=>{l&&l(u),u.defaultPrevented||o(u)}}function jb({page:l,...o}){let u=Ux(),{router:c}=bu(),d=S.useMemo(()=>Sm(c.routes,l,c.basename),[c.routes,l,c.basename]);return d?u?S.createElement(Nb,{page:l,matches:d,...o}):S.createElement(Eb,{page:l,matches:d,...o}):null}function wb(l){let{manifest:o,routeModules:u}=vu(),[c,d]=S.useState([]);return S.useEffect(()=>{let p=!1;return mb(l,o,u).then(h=>{p||d(h)}),()=>{p=!0}},[l,o,u]),c}function Nb({page:l,matches:o,...u}){let c=Kt(),{future:d}=vu(),{basename:p}=bu(),h=S.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let g=Hm(l,p,d.unstable_trailingSlashAwareDataRequests,"rsc"),b=!1,x=[];for(let y of o)typeof y.route.shouldRevalidate=="function"?b=!0:x.push(y.route.id);return b&&x.length>0&&g.searchParams.set("_routes",x.join(",")),[g.pathname+g.search]},[p,d.unstable_trailingSlashAwareDataRequests,l,c,o]);return S.createElement(S.Fragment,null,h.map(g=>S.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...u})))}function Eb({page:l,matches:o,...u}){let c=Kt(),{future:d,manifest:p,routeModules:h}=vu(),{basename:g}=bu(),{loaderData:b,matches:x}=vb(),y=S.useMemo(()=>Fh(l,o,x,p,c,"data"),[l,o,x,p,c]),j=S.useMemo(()=>Fh(l,o,x,p,c,"assets"),[l,o,x,p,c]),k=S.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let D=new Set,C=!1;if(o.forEach(F=>{let Z=p.routes[F.route.id];!Z||!Z.hasLoader||(!y.some(K=>K.route.id===F.route.id)&&F.route.id in b&&h[F.route.id]?.shouldRevalidate||Z.hasClientLoader?C=!0:D.add(F.route.id))}),D.size===0)return[];let Q=Hm(l,g,d.unstable_trailingSlashAwareDataRequests,"data");return C&&D.size>0&&Q.searchParams.set("_routes",o.filter(F=>D.has(F.route.id)).map(F=>F.route.id).join(",")),[Q.pathname+Q.search]},[g,d.unstable_trailingSlashAwareDataRequests,b,c,p,y,o,l,h]),X=S.useMemo(()=>gb(j,p),[j,p]),E=wb(j);return S.createElement(S.Fragment,null,k.map(D=>S.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...u})),X.map(D=>S.createElement("link",{key:D,rel:"modulepreload",href:D,...u})),E.map(({key:D,link:C})=>S.createElement("link",{key:D,nonce:u.nonce,...C,crossOrigin:C.crossOrigin??u.crossOrigin})))}function zb(...l){return o=>{l.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var Cb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cb&&(window.__reactRouterVersion="7.14.1")}catch{}function Ab({basename:l,children:o,unstable_useTransitions:u,window:c}){let d=S.useRef();d.current==null&&(d.current=cx({window:c,v5Compat:!0}));let p=d.current,[h,g]=S.useState({action:p.action,location:p.location}),b=S.useCallback(x=>{u===!1?g(x):S.startTransition(()=>g(x))},[u]);return S.useLayoutEffect(()=>p.listen(b),[p,b]),S.createElement(lb,{basename:l,children:o,location:h.location,navigationType:h.action,navigator:p,unstable_useTransitions:u})}var Bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ul=S.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:d,reloadDocument:p,replace:h,unstable_mask:g,state:b,target:x,to:y,preventScrollReset:j,viewTransition:k,unstable_defaultShouldRevalidate:X,...E},D){let{basename:C,navigator:Q,unstable_useTransitions:F}=S.useContext(Rt),Z=typeof y=="string"&&Bm.test(y),K=zm(y,C);y=K.to;let Y=Vx(y,{relative:d}),B=Kt(),G=null;if(g){let he=rs(g,[],B.unstable_mask?B.unstable_mask.pathname:"/",!0);C!=="/"&&(he.pathname=he.pathname==="/"?C:Qt([C,he.pathname])),G=Q.createHref(he)}let[ae,oe,ke]=Sb(c,E),Me=kb(y,{replace:h,unstable_mask:g,state:b,target:x,preventScrollReset:j,relative:d,viewTransition:k,unstable_defaultShouldRevalidate:X,unstable_useTransitions:F});function we(he){o&&o(he),he.defaultPrevented||Me(he)}let $=!(K.isExternal||p),ue=S.createElement("a",{...E,...ke,href:($?G:void 0)||K.absoluteURL||Y,onClick:$?we:o,ref:zb(D,oe),target:x,"data-discover":!Z&&u==="render"?"true":void 0});return ae&&!Z?S.createElement(S.Fragment,null,ue,S.createElement(jb,{page:Y})):ue});ul.displayName="Link";var ht=S.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:d=!1,style:p,to:h,viewTransition:g,children:b,...x},y){let j=vi(h,{relative:x.relative}),k=Kt(),X=S.useContext(ss),{navigator:E,basename:D}=S.useContext(Rt),C=X!=null&&Ub(j)&&g===!0,Q=E.encodeLocation?E.encodeLocation(j).pathname:j.pathname,F=k.pathname,Z=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;u||(F=F.toLowerCase(),Z=Z?Z.toLowerCase():null,Q=Q.toLowerCase()),Z&&D&&(Z=ya(Z,D)||Z);const K=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let Y=F===Q||!d&&F.startsWith(Q)&&F.charAt(K)==="/",B=Z!=null&&(Z===Q||!d&&Z.startsWith(Q)&&Z.charAt(Q.length)==="/"),G={isActive:Y,isPending:B,isTransitioning:C},ae=Y?o:void 0,oe;typeof c=="function"?oe=c(G):oe=[c,Y?"active":null,B?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let ke=typeof p=="function"?p(G):p;return S.createElement(ul,{...x,"aria-current":ae,className:oe,ref:y,style:ke,to:h,viewTransition:g},typeof b=="function"?b(G):b)});ht.displayName="NavLink";var Rb=S.forwardRef(({discover:l="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:d,state:p,method:h=Zr,action:g,onSubmit:b,relative:x,preventScrollReset:y,viewTransition:j,unstable_defaultShouldRevalidate:k,...X},E)=>{let{unstable_useTransitions:D}=S.useContext(Rt),C=Mb(),Q=Db(g,{relative:x}),F=h.toLowerCase()==="get"?"get":"post",Z=typeof g=="string"&&Bm.test(g),K=Y=>{if(b&&b(Y),Y.defaultPrevented)return;Y.preventDefault();let B=Y.nativeEvent.submitter,G=B?.getAttribute("formmethod")||h,ae=()=>C(B||Y.currentTarget,{fetcherKey:o,method:G,navigate:u,replace:d,state:p,relative:x,preventScrollReset:y,viewTransition:j,unstable_defaultShouldRevalidate:k});D&&u!==!1?S.startTransition(()=>ae()):ae()};return S.createElement("form",{ref:E,method:F,action:Q,onSubmit:c?b:K,...X,"data-discover":!Z&&l==="render"?"true":void 0})});Rb.displayName="Form";function Tb(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qm(l){let o=S.useContext(hl);return He(o,Tb(l)),o}function kb(l,{target:o,replace:u,unstable_mask:c,state:d,preventScrollReset:p,relative:h,viewTransition:g,unstable_defaultShouldRevalidate:b,unstable_useTransitions:x}={}){let y=Ja(),j=Kt(),k=vi(l,{relative:h});return S.useCallback(X=>{if(cb(X,o)){X.preventDefault();let E=u!==void 0?u:xi(j)===xi(k),D=()=>y(l,{replace:E,unstable_mask:c,state:d,preventScrollReset:p,relative:h,viewTransition:g,unstable_defaultShouldRevalidate:b});x?S.startTransition(()=>D()):D()}},[j,y,k,u,c,d,o,l,p,h,g,b,x])}var Ob=0,_b=()=>`__${String(++Ob)}__`;function Mb(){let{router:l}=qm("useSubmit"),{basename:o}=S.useContext(Rt),u=eb(),c=l.fetch,d=l.navigate;return S.useCallback(async(p,h={})=>{let{action:g,method:b,encType:x,formData:y,body:j}=fb(p,o);if(h.navigate===!1){let k=h.fetcherKey||_b();await c(k,u,h.action||g,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:y,body:j,formMethod:h.method||b,formEncType:h.encType||x,flushSync:h.flushSync})}else await d(h.action||g,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:y,body:j,formMethod:h.method||b,formEncType:h.encType||x,replace:h.replace,state:h.state,fromRouteId:u,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,d,o,u])}function Db(l,{relative:o}={}){let{basename:u}=S.useContext(Rt),c=S.useContext(Zt);He(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),p={...vi(l||".",{relative:o})},h=Kt();if(l==null){p.search=h.search;let g=new URLSearchParams(p.search),b=g.getAll("index");if(b.some(y=>y==="")){g.delete("index"),b.filter(j=>j).forEach(j=>g.append("index",j));let y=g.toString();p.search=y?`?${y}`:""}}return(!l||l===".")&&d.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(p.pathname=p.pathname==="/"?u:Qt([u,p.pathname])),xi(p)}function Ub(l,{relative:o}={}){let u=S.useContext(Rm);He(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=qm("useViewTransitionState"),d=vi(l,{relative:o});if(!u.isTransitioning)return!1;let p=ya(u.currentLocation.pathname,c)||u.currentLocation.pathname,h=ya(u.nextLocation.pathname,c)||u.nextLocation.pathname;return es(d.pathname,h)!=null||es(d.pathname,p)!=null}function Ym(l,o){return function(){return l.apply(o,arguments)}}const{toString:Lb}=Object.prototype,{getPrototypeOf:Su}=Object,{iterator:cs,toStringTag:Gm}=Symbol,us=(l=>o=>{const u=Lb.call(o);return l[u]||(l[u]=u.slice(8,-1).toLowerCase())})(Object.create(null)),Jt=l=>(l=l.toLowerCase(),o=>us(o)===l),ds=l=>o=>typeof o===l,{isArray:gl}=Array,pl=ds("undefined");function Si(l){return l!==null&&!pl(l)&&l.constructor!==null&&!pl(l.constructor)&&gt(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const Vm=Jt("ArrayBuffer");function Hb(l){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(l):o=l&&l.buffer&&Vm(l.buffer),o}const Bb=ds("string"),gt=ds("function"),Xm=ds("number"),ji=l=>l!==null&&typeof l=="object",qb=l=>l===!0||l===!1,Jr=l=>{if(us(l)!=="object")return!1;const o=Su(l);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Gm in l)&&!(cs in l)},Yb=l=>{if(!ji(l)||Si(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},Gb=Jt("Date"),Vb=Jt("File"),Xb=l=>!!(l&&typeof l.uri<"u"),Qb=l=>l&&typeof l.getParts<"u",Zb=Jt("Blob"),Kb=Jt("FileList"),Jb=l=>ji(l)&&gt(l.pipe);function $b(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Wh=$b(),Ih=typeof Wh.FormData<"u"?Wh.FormData:void 0,Fb=l=>{let o;return l&&(Ih&&l instanceof Ih||gt(l.append)&&((o=us(l))==="formdata"||o==="object"&&gt(l.toString)&&l.toString()==="[object FormData]"))},Wb=Jt("URLSearchParams"),[Ib,Pb,ey,ty]=["ReadableStream","Request","Response","Headers"].map(Jt),ay=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function wi(l,o,{allOwnKeys:u=!1}={}){if(l===null||typeof l>"u")return;let c,d;if(typeof l!="object"&&(l=[l]),gl(l))for(c=0,d=l.length;c<d;c++)o.call(null,l[c],c,l);else{if(Si(l))return;const p=u?Object.getOwnPropertyNames(l):Object.keys(l),h=p.length;let g;for(c=0;c<h;c++)g=p[c],o.call(null,l[g],g,l)}}function Qm(l,o){if(Si(l))return null;o=o.toLowerCase();const u=Object.keys(l);let c=u.length,d;for(;c-- >0;)if(d=u[c],o===d.toLowerCase())return d;return null}const bn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Zm=l=>!pl(l)&&l!==bn;function lu(){const{caseless:l,skipUndefined:o}=Zm(this)&&this||{},u={},c=(d,p)=>{if(p==="__proto__"||p==="constructor"||p==="prototype")return;const h=l&&Qm(u,p)||p;Jr(u[h])&&Jr(d)?u[h]=lu(u[h],d):Jr(d)?u[h]=lu({},d):gl(d)?u[h]=d.slice():(!o||!pl(d))&&(u[h]=d)};for(let d=0,p=arguments.length;d<p;d++)arguments[d]&&wi(arguments[d],c);return u}const ny=(l,o,u,{allOwnKeys:c}={})=>(wi(o,(d,p)=>{u&&gt(d)?Object.defineProperty(l,p,{value:Ym(d,u),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(l,p,{value:d,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:c}),l),ly=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),iy=(l,o,u,c)=>{l.prototype=Object.create(o.prototype,c),Object.defineProperty(l.prototype,"constructor",{value:l,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(l,"super",{value:o.prototype}),u&&Object.assign(l.prototype,u)},ry=(l,o,u,c)=>{let d,p,h;const g={};if(o=o||{},l==null)return o;do{for(d=Object.getOwnPropertyNames(l),p=d.length;p-- >0;)h=d[p],(!c||c(h,l,o))&&!g[h]&&(o[h]=l[h],g[h]=!0);l=u!==!1&&Su(l)}while(l&&(!u||u(l,o))&&l!==Object.prototype);return o},sy=(l,o,u)=>{l=String(l),(u===void 0||u>l.length)&&(u=l.length),u-=o.length;const c=l.indexOf(o,u);return c!==-1&&c===u},oy=l=>{if(!l)return null;if(gl(l))return l;let o=l.length;if(!Xm(o))return null;const u=new Array(o);for(;o-- >0;)u[o]=l[o];return u},cy=(l=>o=>l&&o instanceof l)(typeof Uint8Array<"u"&&Su(Uint8Array)),uy=(l,o)=>{const c=(l&&l[cs]).call(l);let d;for(;(d=c.next())&&!d.done;){const p=d.value;o.call(l,p[0],p[1])}},dy=(l,o)=>{let u;const c=[];for(;(u=l.exec(o))!==null;)c.push(u);return c},fy=Jt("HTMLFormElement"),py=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(u,c,d){return c.toUpperCase()+d}),Ph=(({hasOwnProperty:l})=>(o,u)=>l.call(o,u))(Object.prototype),hy=Jt("RegExp"),Km=(l,o)=>{const u=Object.getOwnPropertyDescriptors(l),c={};wi(u,(d,p)=>{let h;(h=o(d,p,l))!==!1&&(c[p]=h||d)}),Object.defineProperties(l,c)},my=l=>{Km(l,(o,u)=>{if(gt(l)&&["arguments","caller","callee"].indexOf(u)!==-1)return!1;const c=l[u];if(gt(c)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+u+"'")})}})},gy=(l,o)=>{const u={},c=d=>{d.forEach(p=>{u[p]=!0})};return gl(l)?c(l):c(String(l).split(o)),u},xy=()=>{},by=(l,o)=>l!=null&&Number.isFinite(l=+l)?l:o;function yy(l){return!!(l&&gt(l.append)&&l[Gm]==="FormData"&&l[cs])}const vy=l=>{const o=new Array(10),u=(c,d)=>{if(ji(c)){if(o.indexOf(c)>=0)return;if(Si(c))return c;if(!("toJSON"in c)){o[d]=c;const p=gl(c)?[]:{};return wi(c,(h,g)=>{const b=u(h,d+1);!pl(b)&&(p[g]=b)}),o[d]=void 0,p}}return c};return u(l,0)},Sy=Jt("AsyncFunction"),jy=l=>l&&(ji(l)||gt(l))&&gt(l.then)&&gt(l.catch),Jm=((l,o)=>l?setImmediate:o?((u,c)=>(bn.addEventListener("message",({source:d,data:p})=>{d===bn&&p===u&&c.length&&c.shift()()},!1),d=>{c.push(d),bn.postMessage(u,"*")}))(`axios@${Math.random()}`,[]):u=>setTimeout(u))(typeof setImmediate=="function",gt(bn.postMessage)),wy=typeof queueMicrotask<"u"?queueMicrotask.bind(bn):typeof process<"u"&&process.nextTick||Jm,Ny=l=>l!=null&&gt(l[cs]),_={isArray:gl,isArrayBuffer:Vm,isBuffer:Si,isFormData:Fb,isArrayBufferView:Hb,isString:Bb,isNumber:Xm,isBoolean:qb,isObject:ji,isPlainObject:Jr,isEmptyObject:Yb,isReadableStream:Ib,isRequest:Pb,isResponse:ey,isHeaders:ty,isUndefined:pl,isDate:Gb,isFile:Vb,isReactNativeBlob:Xb,isReactNative:Qb,isBlob:Zb,isRegExp:hy,isFunction:gt,isStream:Jb,isURLSearchParams:Wb,isTypedArray:cy,isFileList:Kb,forEach:wi,merge:lu,extend:ny,trim:ay,stripBOM:ly,inherits:iy,toFlatObject:ry,kindOf:us,kindOfTest:Jt,endsWith:sy,toArray:oy,forEachEntry:uy,matchAll:dy,isHTMLForm:fy,hasOwnProperty:Ph,hasOwnProp:Ph,reduceDescriptors:Km,freezeMethods:my,toObjectSet:gy,toCamelCase:py,noop:xy,toFiniteNumber:by,findKey:Qm,global:bn,isContextDefined:Zm,isSpecCompliantForm:yy,toJSONObject:vy,isAsyncFn:Sy,isThenable:jy,setImmediate:Jm,asap:wy,isIterable:Ny};let se=class $m extends Error{static from(o,u,c,d,p,h){const g=new $m(o.message,u||o.code,c,d,p);return g.cause=o,g.name=o.name,o.status!=null&&g.status==null&&(g.status=o.status),h&&Object.assign(g,h),g}constructor(o,u,c,d,p){super(o),Object.defineProperty(this,"message",{value:o,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,u&&(this.code=u),c&&(this.config=c),d&&(this.request=d),p&&(this.response=p,this.status=p.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}};se.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";se.ERR_BAD_OPTION="ERR_BAD_OPTION";se.ECONNABORTED="ECONNABORTED";se.ETIMEDOUT="ETIMEDOUT";se.ERR_NETWORK="ERR_NETWORK";se.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";se.ERR_DEPRECATED="ERR_DEPRECATED";se.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";se.ERR_BAD_REQUEST="ERR_BAD_REQUEST";se.ERR_CANCELED="ERR_CANCELED";se.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";se.ERR_INVALID_URL="ERR_INVALID_URL";const Ey=null;function iu(l){return _.isPlainObject(l)||_.isArray(l)}function Fm(l){return _.endsWith(l,"[]")?l.slice(0,-2):l}function Vc(l,o,u){return l?l.concat(o).map(function(d,p){return d=Fm(d),!u&&p?"["+d+"]":d}).join(u?".":""):o}function zy(l){return _.isArray(l)&&!l.some(iu)}const Cy=_.toFlatObject(_,{},null,function(o){return/^is[A-Z]/.test(o)});function fs(l,o,u){if(!_.isObject(l))throw new TypeError("target must be an object");o=o||new FormData,u=_.toFlatObject(u,{metaTokens:!0,dots:!1,indexes:!1},!1,function(D,C){return!_.isUndefined(C[D])});const c=u.metaTokens,d=u.visitor||y,p=u.dots,h=u.indexes,b=(u.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(o);if(!_.isFunction(d))throw new TypeError("visitor must be a function");function x(E){if(E===null)return"";if(_.isDate(E))return E.toISOString();if(_.isBoolean(E))return E.toString();if(!b&&_.isBlob(E))throw new se("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(E)||_.isTypedArray(E)?b&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function y(E,D,C){let Q=E;if(_.isReactNative(o)&&_.isReactNativeBlob(E))return o.append(Vc(C,D,p),x(E)),!1;if(E&&!C&&typeof E=="object"){if(_.endsWith(D,"{}"))D=c?D:D.slice(0,-2),E=JSON.stringify(E);else if(_.isArray(E)&&zy(E)||(_.isFileList(E)||_.endsWith(D,"[]"))&&(Q=_.toArray(E)))return D=Fm(D),Q.forEach(function(Z,K){!(_.isUndefined(Z)||Z===null)&&o.append(h===!0?Vc([D],K,p):h===null?D:D+"[]",x(Z))}),!1}return iu(E)?!0:(o.append(Vc(C,D,p),x(E)),!1)}const j=[],k=Object.assign(Cy,{defaultVisitor:y,convertValue:x,isVisitable:iu});function X(E,D){if(!_.isUndefined(E)){if(j.indexOf(E)!==-1)throw Error("Circular reference detected in "+D.join("."));j.push(E),_.forEach(E,function(Q,F){(!(_.isUndefined(Q)||Q===null)&&d.call(o,Q,_.isString(F)?F.trim():F,D,k))===!0&&X(Q,D?D.concat(F):[F])}),j.pop()}}if(!_.isObject(l))throw new TypeError("data must be an object");return X(l),o}function em(l){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(c){return o[c]})}function ju(l,o){this._pairs=[],l&&fs(l,this,o)}const Wm=ju.prototype;Wm.append=function(o,u){this._pairs.push([o,u])};Wm.toString=function(o){const u=o?function(c){return o.call(this,c,em)}:em;return this._pairs.map(function(d){return u(d[0])+"="+u(d[1])},"").join("&")};function Ay(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Im(l,o,u){if(!o)return l;const c=u&&u.encode||Ay,d=_.isFunction(u)?{serialize:u}:u,p=d&&d.serialize;let h;if(p?h=p(o,d):h=_.isURLSearchParams(o)?o.toString():new ju(o,d).toString(c),h){const g=l.indexOf("#");g!==-1&&(l=l.slice(0,g)),l+=(l.indexOf("?")===-1?"?":"&")+h}return l}class tm{constructor(){this.handlers=[]}use(o,u,c){return this.handlers.push({fulfilled:o,rejected:u,synchronous:c?c.synchronous:!1,runWhen:c?c.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){_.forEach(this.handlers,function(c){c!==null&&o(c)})}}const wu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Ry=typeof URLSearchParams<"u"?URLSearchParams:ju,Ty=typeof FormData<"u"?FormData:null,ky=typeof Blob<"u"?Blob:null,Oy={isBrowser:!0,classes:{URLSearchParams:Ry,FormData:Ty,Blob:ky},protocols:["http","https","file","blob","url","data"]},Nu=typeof window<"u"&&typeof document<"u",ru=typeof navigator=="object"&&navigator||void 0,_y=Nu&&(!ru||["ReactNative","NativeScript","NS"].indexOf(ru.product)<0),My=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dy=Nu&&window.location.href||"http://localhost",Uy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Nu,hasStandardBrowserEnv:_y,hasStandardBrowserWebWorkerEnv:My,navigator:ru,origin:Dy},Symbol.toStringTag,{value:"Module"})),it={...Uy,...Oy};function Ly(l,o){return fs(l,new it.classes.URLSearchParams,{visitor:function(u,c,d,p){return it.isNode&&_.isBuffer(u)?(this.append(c,u.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...o})}function Hy(l){return _.matchAll(/\w+|\[(\w*)]/g,l).map(o=>o[0]==="[]"?"":o[1]||o[0])}function By(l){const o={},u=Object.keys(l);let c;const d=u.length;let p;for(c=0;c<d;c++)p=u[c],o[p]=l[p];return o}function Pm(l){function o(u,c,d,p){let h=u[p++];if(h==="__proto__")return!0;const g=Number.isFinite(+h),b=p>=u.length;return h=!h&&_.isArray(d)?d.length:h,b?(_.hasOwnProp(d,h)?d[h]=[d[h],c]:d[h]=c,!g):((!d[h]||!_.isObject(d[h]))&&(d[h]=[]),o(u,c,d[h],p)&&_.isArray(d[h])&&(d[h]=By(d[h])),!g)}if(_.isFormData(l)&&_.isFunction(l.entries)){const u={};return _.forEachEntry(l,(c,d)=>{o(Hy(c),d,u,0)}),u}return null}function qy(l,o,u){if(_.isString(l))try{return(o||JSON.parse)(l),_.trim(l)}catch(c){if(c.name!=="SyntaxError")throw c}return(u||JSON.stringify)(l)}const Ni={transitional:wu,adapter:["xhr","http","fetch"],transformRequest:[function(o,u){const c=u.getContentType()||"",d=c.indexOf("application/json")>-1,p=_.isObject(o);if(p&&_.isHTMLForm(o)&&(o=new FormData(o)),_.isFormData(o))return d?JSON.stringify(Pm(o)):o;if(_.isArrayBuffer(o)||_.isBuffer(o)||_.isStream(o)||_.isFile(o)||_.isBlob(o)||_.isReadableStream(o))return o;if(_.isArrayBufferView(o))return o.buffer;if(_.isURLSearchParams(o))return u.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let g;if(p){if(c.indexOf("application/x-www-form-urlencoded")>-1)return Ly(o,this.formSerializer).toString();if((g=_.isFileList(o))||c.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return fs(g?{"files[]":o}:o,b&&new b,this.formSerializer)}}return p||d?(u.setContentType("application/json",!1),qy(o)):o}],transformResponse:[function(o){const u=this.transitional||Ni.transitional,c=u&&u.forcedJSONParsing,d=this.responseType==="json";if(_.isResponse(o)||_.isReadableStream(o))return o;if(o&&_.isString(o)&&(c&&!this.responseType||d)){const h=!(u&&u.silentJSONParsing)&&d;try{return JSON.parse(o,this.parseReviver)}catch(g){if(h)throw g.name==="SyntaxError"?se.from(g,se.ERR_BAD_RESPONSE,this,null,this.response):g}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:it.classes.FormData,Blob:it.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],l=>{Ni.headers[l]={}});const Yy=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gy=l=>{const o={};let u,c,d;return l&&l.split(`
`).forEach(function(h){d=h.indexOf(":"),u=h.substring(0,d).trim().toLowerCase(),c=h.substring(d+1).trim(),!(!u||o[u]&&Yy[u])&&(u==="set-cookie"?o[u]?o[u].push(c):o[u]=[c]:o[u]=o[u]?o[u]+", "+c:c)}),o},am=Symbol("internals"),Vy=l=>!/[\r\n]/.test(l);function e0(l,o){if(!(l===!1||l==null)){if(_.isArray(l)){l.forEach(u=>e0(u,o));return}if(!Vy(String(l)))throw new Error(`Invalid character in header content ["${o}"]`)}}function pi(l){return l&&String(l).trim().toLowerCase()}function Xy(l){let o=l.length;for(;o>0;){const u=l.charCodeAt(o-1);if(u!==10&&u!==13)break;o-=1}return o===l.length?l:l.slice(0,o)}function $r(l){return l===!1||l==null?l:_.isArray(l)?l.map($r):Xy(String(l))}function Qy(l){const o=Object.create(null),u=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let c;for(;c=u.exec(l);)o[c[1]]=c[2];return o}const Zy=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function Xc(l,o,u,c,d){if(_.isFunction(c))return c.call(this,o,u);if(d&&(o=u),!!_.isString(o)){if(_.isString(c))return o.indexOf(c)!==-1;if(_.isRegExp(c))return c.test(o)}}function Ky(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,u,c)=>u.toUpperCase()+c)}function Jy(l,o){const u=_.toCamelCase(" "+o);["get","set","has"].forEach(c=>{Object.defineProperty(l,c+u,{value:function(d,p,h){return this[c].call(this,o,d,p,h)},configurable:!0})})}let xt=class{constructor(o){o&&this.set(o)}set(o,u,c){const d=this;function p(g,b,x){const y=pi(b);if(!y)throw new Error("header name must be a non-empty string");const j=_.findKey(d,y);(!j||d[j]===void 0||x===!0||x===void 0&&d[j]!==!1)&&(e0(g,b),d[j||b]=$r(g))}const h=(g,b)=>_.forEach(g,(x,y)=>p(x,y,b));if(_.isPlainObject(o)||o instanceof this.constructor)h(o,u);else if(_.isString(o)&&(o=o.trim())&&!Zy(o))h(Gy(o),u);else if(_.isObject(o)&&_.isIterable(o)){let g={},b,x;for(const y of o){if(!_.isArray(y))throw TypeError("Object iterator must return a key-value pair");g[x=y[0]]=(b=g[x])?_.isArray(b)?[...b,y[1]]:[b,y[1]]:y[1]}h(g,u)}else o!=null&&p(u,o,c);return this}get(o,u){if(o=pi(o),o){const c=_.findKey(this,o);if(c){const d=this[c];if(!u)return d;if(u===!0)return Qy(d);if(_.isFunction(u))return u.call(this,d,c);if(_.isRegExp(u))return u.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,u){if(o=pi(o),o){const c=_.findKey(this,o);return!!(c&&this[c]!==void 0&&(!u||Xc(this,this[c],c,u)))}return!1}delete(o,u){const c=this;let d=!1;function p(h){if(h=pi(h),h){const g=_.findKey(c,h);g&&(!u||Xc(c,c[g],g,u))&&(delete c[g],d=!0)}}return _.isArray(o)?o.forEach(p):p(o),d}clear(o){const u=Object.keys(this);let c=u.length,d=!1;for(;c--;){const p=u[c];(!o||Xc(this,this[p],p,o,!0))&&(delete this[p],d=!0)}return d}normalize(o){const u=this,c={};return _.forEach(this,(d,p)=>{const h=_.findKey(c,p);if(h){u[h]=$r(d),delete u[p];return}const g=o?Ky(p):String(p).trim();g!==p&&delete u[p],u[g]=$r(d),c[g]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const u=Object.create(null);return _.forEach(this,(c,d)=>{c!=null&&c!==!1&&(u[d]=o&&_.isArray(c)?c.join(", "):c)}),u}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,u])=>o+": "+u).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...u){const c=new this(o);return u.forEach(d=>c.set(d)),c}static accessor(o){const c=(this[am]=this[am]={accessors:{}}).accessors,d=this.prototype;function p(h){const g=pi(h);c[g]||(Jy(d,h),c[g]=!0)}return _.isArray(o)?o.forEach(p):p(o),this}};xt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(xt.prototype,({value:l},o)=>{let u=o[0].toUpperCase()+o.slice(1);return{get:()=>l,set(c){this[u]=c}}});_.freezeMethods(xt);function Qc(l,o){const u=this||Ni,c=o||u,d=xt.from(c.headers);let p=c.data;return _.forEach(l,function(g){p=g.call(u,p,d.normalize(),o?o.status:void 0)}),d.normalize(),p}function t0(l){return!!(l&&l.__CANCEL__)}let Ei=class extends se{constructor(o,u,c){super(o??"canceled",se.ERR_CANCELED,u,c),this.name="CanceledError",this.__CANCEL__=!0}};function a0(l,o,u){const c=u.config.validateStatus;!u.status||!c||c(u.status)?l(u):o(new se("Request failed with status code "+u.status,[se.ERR_BAD_REQUEST,se.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))}function $y(l){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return o&&o[1]||""}function Fy(l,o){l=l||10;const u=new Array(l),c=new Array(l);let d=0,p=0,h;return o=o!==void 0?o:1e3,function(b){const x=Date.now(),y=c[p];h||(h=x),u[d]=b,c[d]=x;let j=p,k=0;for(;j!==d;)k+=u[j++],j=j%l;if(d=(d+1)%l,d===p&&(p=(p+1)%l),x-h<o)return;const X=y&&x-y;return X?Math.round(k*1e3/X):void 0}}function Wy(l,o){let u=0,c=1e3/o,d,p;const h=(x,y=Date.now())=>{u=y,d=null,p&&(clearTimeout(p),p=null),l(...x)};return[(...x)=>{const y=Date.now(),j=y-u;j>=c?h(x,y):(d=x,p||(p=setTimeout(()=>{p=null,h(d)},c-j)))},()=>d&&h(d)]}const as=(l,o,u=3)=>{let c=0;const d=Fy(50,250);return Wy(p=>{const h=p.loaded,g=p.lengthComputable?p.total:void 0,b=h-c,x=d(b),y=h<=g;c=h;const j={loaded:h,total:g,progress:g?h/g:void 0,bytes:b,rate:x||void 0,estimated:x&&g&&y?(g-h)/x:void 0,event:p,lengthComputable:g!=null,[o?"download":"upload"]:!0};l(j)},u)},nm=(l,o)=>{const u=l!=null;return[c=>o[0]({lengthComputable:u,total:l,loaded:c}),o[1]]},lm=l=>(...o)=>_.asap(()=>l(...o)),Iy=it.hasStandardBrowserEnv?((l,o)=>u=>(u=new URL(u,it.origin),l.protocol===u.protocol&&l.host===u.host&&(o||l.port===u.port)))(new URL(it.origin),it.navigator&&/(msie|trident)/i.test(it.navigator.userAgent)):()=>!0,Py=it.hasStandardBrowserEnv?{write(l,o,u,c,d,p,h){if(typeof document>"u")return;const g=[`${l}=${encodeURIComponent(o)}`];_.isNumber(u)&&g.push(`expires=${new Date(u).toUTCString()}`),_.isString(c)&&g.push(`path=${c}`),_.isString(d)&&g.push(`domain=${d}`),p===!0&&g.push("secure"),_.isString(h)&&g.push(`SameSite=${h}`),document.cookie=g.join("; ")},read(l){if(typeof document>"u")return null;const o=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return o?decodeURIComponent(o[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ev(l){return typeof l!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function tv(l,o){return o?l.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):l}function n0(l,o,u){let c=!ev(o);return l&&(c||u==!1)?tv(l,o):o}const im=l=>l instanceof xt?{...l}:l;function Sn(l,o){o=o||{};const u={};function c(x,y,j,k){return _.isPlainObject(x)&&_.isPlainObject(y)?_.merge.call({caseless:k},x,y):_.isPlainObject(y)?_.merge({},y):_.isArray(y)?y.slice():y}function d(x,y,j,k){if(_.isUndefined(y)){if(!_.isUndefined(x))return c(void 0,x,j,k)}else return c(x,y,j,k)}function p(x,y){if(!_.isUndefined(y))return c(void 0,y)}function h(x,y){if(_.isUndefined(y)){if(!_.isUndefined(x))return c(void 0,x)}else return c(void 0,y)}function g(x,y,j){if(j in o)return c(x,y);if(j in l)return c(void 0,x)}const b={url:p,method:p,data:p,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:g,headers:(x,y,j)=>d(im(x),im(y),j,!0)};return _.forEach(Object.keys({...l,...o}),function(y){if(y==="__proto__"||y==="constructor"||y==="prototype")return;const j=_.hasOwnProp(b,y)?b[y]:d,k=j(l[y],o[y],y);_.isUndefined(k)&&j!==g||(u[y]=k)}),u}const l0=l=>{const o=Sn({},l);let{data:u,withXSRFToken:c,xsrfHeaderName:d,xsrfCookieName:p,headers:h,auth:g}=o;if(o.headers=h=xt.from(h),o.url=Im(n0(o.baseURL,o.url,o.allowAbsoluteUrls),l.params,l.paramsSerializer),g&&h.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):""))),_.isFormData(u)){if(it.hasStandardBrowserEnv||it.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(_.isFunction(u.getHeaders)){const b=u.getHeaders(),x=["content-type","content-length"];Object.entries(b).forEach(([y,j])=>{x.includes(y.toLowerCase())&&h.set(y,j)})}}if(it.hasStandardBrowserEnv&&(c&&_.isFunction(c)&&(c=c(o)),c||c!==!1&&Iy(o.url))){const b=d&&p&&Py.read(p);b&&h.set(d,b)}return o},av=typeof XMLHttpRequest<"u",nv=av&&function(l){return new Promise(function(u,c){const d=l0(l);let p=d.data;const h=xt.from(d.headers).normalize();let{responseType:g,onUploadProgress:b,onDownloadProgress:x}=d,y,j,k,X,E;function D(){X&&X(),E&&E(),d.cancelToken&&d.cancelToken.unsubscribe(y),d.signal&&d.signal.removeEventListener("abort",y)}let C=new XMLHttpRequest;C.open(d.method.toUpperCase(),d.url,!0),C.timeout=d.timeout;function Q(){if(!C)return;const Z=xt.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),Y={data:!g||g==="text"||g==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:Z,config:l,request:C};a0(function(G){u(G),D()},function(G){c(G),D()},Y),C=null}"onloadend"in C?C.onloadend=Q:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(Q)},C.onabort=function(){C&&(c(new se("Request aborted",se.ECONNABORTED,l,C)),C=null)},C.onerror=function(K){const Y=K&&K.message?K.message:"Network Error",B=new se(Y,se.ERR_NETWORK,l,C);B.event=K||null,c(B),C=null},C.ontimeout=function(){let K=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const Y=d.transitional||wu;d.timeoutErrorMessage&&(K=d.timeoutErrorMessage),c(new se(K,Y.clarifyTimeoutError?se.ETIMEDOUT:se.ECONNABORTED,l,C)),C=null},p===void 0&&h.setContentType(null),"setRequestHeader"in C&&_.forEach(h.toJSON(),function(K,Y){C.setRequestHeader(Y,K)}),_.isUndefined(d.withCredentials)||(C.withCredentials=!!d.withCredentials),g&&g!=="json"&&(C.responseType=d.responseType),x&&([k,E]=as(x,!0),C.addEventListener("progress",k)),b&&C.upload&&([j,X]=as(b),C.upload.addEventListener("progress",j),C.upload.addEventListener("loadend",X)),(d.cancelToken||d.signal)&&(y=Z=>{C&&(c(!Z||Z.type?new Ei(null,l,C):Z),C.abort(),C=null)},d.cancelToken&&d.cancelToken.subscribe(y),d.signal&&(d.signal.aborted?y():d.signal.addEventListener("abort",y)));const F=$y(d.url);if(F&&it.protocols.indexOf(F)===-1){c(new se("Unsupported protocol "+F+":",se.ERR_BAD_REQUEST,l));return}C.send(p||null)})},lv=(l,o)=>{const{length:u}=l=l?l.filter(Boolean):[];if(o||u){let c=new AbortController,d;const p=function(x){if(!d){d=!0,g();const y=x instanceof Error?x:this.reason;c.abort(y instanceof se?y:new Ei(y instanceof Error?y.message:y))}};let h=o&&setTimeout(()=>{h=null,p(new se(`timeout of ${o}ms exceeded`,se.ETIMEDOUT))},o);const g=()=>{l&&(h&&clearTimeout(h),h=null,l.forEach(x=>{x.unsubscribe?x.unsubscribe(p):x.removeEventListener("abort",p)}),l=null)};l.forEach(x=>x.addEventListener("abort",p));const{signal:b}=c;return b.unsubscribe=()=>_.asap(g),b}},iv=function*(l,o){let u=l.byteLength;if(u<o){yield l;return}let c=0,d;for(;c<u;)d=c+o,yield l.slice(c,d),c=d},rv=async function*(l,o){for await(const u of sv(l))yield*iv(u,o)},sv=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const o=l.getReader();try{for(;;){const{done:u,value:c}=await o.read();if(u)break;yield c}}finally{await o.cancel()}},rm=(l,o,u,c)=>{const d=rv(l,o);let p=0,h,g=b=>{h||(h=!0,c&&c(b))};return new ReadableStream({async pull(b){try{const{done:x,value:y}=await d.next();if(x){g(),b.close();return}let j=y.byteLength;if(u){let k=p+=j;u(k)}b.enqueue(new Uint8Array(y))}catch(x){throw g(x),x}},cancel(b){return g(b),d.return()}},{highWaterMark:2})},sm=64*1024,{isFunction:Xr}=_,ov=(({Request:l,Response:o})=>({Request:l,Response:o}))(_.global),{ReadableStream:om,TextEncoder:cm}=_.global,um=(l,...o)=>{try{return!!l(...o)}catch{return!1}},cv=l=>{l=_.merge.call({skipUndefined:!0},ov,l);const{fetch:o,Request:u,Response:c}=l,d=o?Xr(o):typeof fetch=="function",p=Xr(u),h=Xr(c);if(!d)return!1;const g=d&&Xr(om),b=d&&(typeof cm=="function"?(E=>D=>E.encode(D))(new cm):async E=>new Uint8Array(await new u(E).arrayBuffer())),x=p&&g&&um(()=>{let E=!1;const D=new om,C=new u(it.origin,{body:D,method:"POST",get duplex(){return E=!0,"half"}}).headers.has("Content-Type");return D.cancel(),E&&!C}),y=h&&g&&um(()=>_.isReadableStream(new c("").body)),j={stream:y&&(E=>E.body)};d&&["text","arrayBuffer","blob","formData","stream"].forEach(E=>{!j[E]&&(j[E]=(D,C)=>{let Q=D&&D[E];if(Q)return Q.call(D);throw new se(`Response type '${E}' is not supported`,se.ERR_NOT_SUPPORT,C)})});const k=async E=>{if(E==null)return 0;if(_.isBlob(E))return E.size;if(_.isSpecCompliantForm(E))return(await new u(it.origin,{method:"POST",body:E}).arrayBuffer()).byteLength;if(_.isArrayBufferView(E)||_.isArrayBuffer(E))return E.byteLength;if(_.isURLSearchParams(E)&&(E=E+""),_.isString(E))return(await b(E)).byteLength},X=async(E,D)=>{const C=_.toFiniteNumber(E.getContentLength());return C??k(D)};return async E=>{let{url:D,method:C,data:Q,signal:F,cancelToken:Z,timeout:K,onDownloadProgress:Y,onUploadProgress:B,responseType:G,headers:ae,withCredentials:oe="same-origin",fetchOptions:ke}=l0(E),Me=o||fetch;G=G?(G+"").toLowerCase():"text";let we=lv([F,Z&&Z.toAbortSignal()],K),$=null;const ue=we&&we.unsubscribe&&(()=>{we.unsubscribe()});let he;try{if(B&&x&&C!=="get"&&C!=="head"&&(he=await X(ae,Q))!==0){let w=new u(D,{method:"POST",body:Q,duplex:"half"}),L;if(_.isFormData(Q)&&(L=w.headers.get("content-type"))&&ae.setContentType(L),w.body){const[W,V]=nm(he,as(lm(B)));Q=rm(w.body,sm,W,V)}}_.isString(oe)||(oe=oe?"include":"omit");const O=p&&"credentials"in u.prototype,J={...ke,signal:we,method:C.toUpperCase(),headers:ae.normalize().toJSON(),body:Q,duplex:"half",credentials:O?oe:void 0};$=p&&new u(D,J);let ee=await(p?Me($,ke):Me(D,J));const ve=y&&(G==="stream"||G==="response");if(y&&(Y||ve&&ue)){const w={};["status","statusText","headers"].forEach(I=>{w[I]=ee[I]});const L=_.toFiniteNumber(ee.headers.get("content-length")),[W,V]=Y&&nm(L,as(lm(Y),!0))||[];ee=new c(rm(ee.body,sm,W,()=>{V&&V(),ue&&ue()}),w)}G=G||"text";let Ne=await j[_.findKey(j,G)||"text"](ee,E);return!ve&&ue&&ue(),await new Promise((w,L)=>{a0(w,L,{data:Ne,headers:xt.from(ee.headers),status:ee.status,statusText:ee.statusText,config:E,request:$})})}catch(O){throw ue&&ue(),O&&O.name==="TypeError"&&/Load failed|fetch/i.test(O.message)?Object.assign(new se("Network Error",se.ERR_NETWORK,E,$,O&&O.response),{cause:O.cause||O}):se.from(O,O&&O.code,E,$,O&&O.response)}}},uv=new Map,i0=l=>{let o=l&&l.env||{};const{fetch:u,Request:c,Response:d}=o,p=[c,d,u];let h=p.length,g=h,b,x,y=uv;for(;g--;)b=p[g],x=y.get(b),x===void 0&&y.set(b,x=g?new Map:cv(o)),y=x;return x};i0();const Eu={http:Ey,xhr:nv,fetch:{get:i0}};_.forEach(Eu,(l,o)=>{if(l){try{Object.defineProperty(l,"name",{value:o})}catch{}Object.defineProperty(l,"adapterName",{value:o})}});const dm=l=>`- ${l}`,dv=l=>_.isFunction(l)||l===null||l===!1;function fv(l,o){l=_.isArray(l)?l:[l];const{length:u}=l;let c,d;const p={};for(let h=0;h<u;h++){c=l[h];let g;if(d=c,!dv(c)&&(d=Eu[(g=String(c)).toLowerCase()],d===void 0))throw new se(`Unknown adapter '${g}'`);if(d&&(_.isFunction(d)||(d=d.get(o))))break;p[g||"#"+h]=d}if(!d){const h=Object.entries(p).map(([b,x])=>`adapter ${b} `+(x===!1?"is not supported by the environment":"is not available in the build"));let g=u?h.length>1?`since :
`+h.map(dm).join(`
`):" "+dm(h[0]):"as no adapter specified";throw new se("There is no suitable adapter to dispatch the request "+g,"ERR_NOT_SUPPORT")}return d}const r0={getAdapter:fv,adapters:Eu};function Zc(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new Ei(null,l)}function fm(l){return Zc(l),l.headers=xt.from(l.headers),l.data=Qc.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),r0.getAdapter(l.adapter||Ni.adapter,l)(l).then(function(c){return Zc(l),c.data=Qc.call(l,l.transformResponse,c),c.headers=xt.from(c.headers),c},function(c){return t0(c)||(Zc(l),c&&c.response&&(c.response.data=Qc.call(l,l.transformResponse,c.response),c.response.headers=xt.from(c.response.headers))),Promise.reject(c)})}const s0="1.15.0",ps={};["object","boolean","number","function","string","symbol"].forEach((l,o)=>{ps[l]=function(c){return typeof c===l||"a"+(o<1?"n ":" ")+l}});const pm={};ps.transitional=function(o,u,c){function d(p,h){return"[Axios v"+s0+"] Transitional option '"+p+"'"+h+(c?". "+c:"")}return(p,h,g)=>{if(o===!1)throw new se(d(h," has been removed"+(u?" in "+u:"")),se.ERR_DEPRECATED);return u&&!pm[h]&&(pm[h]=!0,console.warn(d(h," has been deprecated since v"+u+" and will be removed in the near future"))),o?o(p,h,g):!0}};ps.spelling=function(o){return(u,c)=>(console.warn(`${c} is likely a misspelling of ${o}`),!0)};function pv(l,o,u){if(typeof l!="object")throw new se("options must be an object",se.ERR_BAD_OPTION_VALUE);const c=Object.keys(l);let d=c.length;for(;d-- >0;){const p=c[d],h=o[p];if(h){const g=l[p],b=g===void 0||h(g,p,l);if(b!==!0)throw new se("option "+p+" must be "+b,se.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new se("Unknown option "+p,se.ERR_BAD_OPTION)}}const Fr={assertOptions:pv,validators:ps},qt=Fr.validators;let yn=class{constructor(o){this.defaults=o||{},this.interceptors={request:new tm,response:new tm}}async request(o,u){try{return await this._request(o,u)}catch(c){if(c instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const p=(()=>{if(!d.stack)return"";const h=d.stack.indexOf(`
`);return h===-1?"":d.stack.slice(h+1)})();try{if(!c.stack)c.stack=p;else if(p){const h=p.indexOf(`
`),g=h===-1?-1:p.indexOf(`
`,h+1),b=g===-1?"":p.slice(g+1);String(c.stack).endsWith(b)||(c.stack+=`
`+p)}}catch{}}throw c}}_request(o,u){typeof o=="string"?(u=u||{},u.url=o):u=o||{},u=Sn(this.defaults,u);const{transitional:c,paramsSerializer:d,headers:p}=u;c!==void 0&&Fr.assertOptions(c,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean),legacyInterceptorReqResOrdering:qt.transitional(qt.boolean)},!1),d!=null&&(_.isFunction(d)?u.paramsSerializer={serialize:d}:Fr.assertOptions(d,{encode:qt.function,serialize:qt.function},!0)),u.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?u.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:u.allowAbsoluteUrls=!0),Fr.assertOptions(u,{baseUrl:qt.spelling("baseURL"),withXsrfToken:qt.spelling("withXSRFToken")},!0),u.method=(u.method||this.defaults.method||"get").toLowerCase();let h=p&&_.merge(p.common,p[u.method]);p&&_.forEach(["delete","get","head","post","put","patch","common"],E=>{delete p[E]}),u.headers=xt.concat(h,p);const g=[];let b=!0;this.interceptors.request.forEach(function(D){if(typeof D.runWhen=="function"&&D.runWhen(u)===!1)return;b=b&&D.synchronous;const C=u.transitional||wu;C&&C.legacyInterceptorReqResOrdering?g.unshift(D.fulfilled,D.rejected):g.push(D.fulfilled,D.rejected)});const x=[];this.interceptors.response.forEach(function(D){x.push(D.fulfilled,D.rejected)});let y,j=0,k;if(!b){const E=[fm.bind(this),void 0];for(E.unshift(...g),E.push(...x),k=E.length,y=Promise.resolve(u);j<k;)y=y.then(E[j++],E[j++]);return y}k=g.length;let X=u;for(;j<k;){const E=g[j++],D=g[j++];try{X=E(X)}catch(C){D.call(this,C);break}}try{y=fm.call(this,X)}catch(E){return Promise.reject(E)}for(j=0,k=x.length;j<k;)y=y.then(x[j++],x[j++]);return y}getUri(o){o=Sn(this.defaults,o);const u=n0(o.baseURL,o.url,o.allowAbsoluteUrls);return Im(u,o.params,o.paramsSerializer)}};_.forEach(["delete","get","head","options"],function(o){yn.prototype[o]=function(u,c){return this.request(Sn(c||{},{method:o,url:u,data:(c||{}).data}))}});_.forEach(["post","put","patch"],function(o){function u(c){return function(p,h,g){return this.request(Sn(g||{},{method:o,headers:c?{"Content-Type":"multipart/form-data"}:{},url:p,data:h}))}}yn.prototype[o]=u(),yn.prototype[o+"Form"]=u(!0)});let hv=class o0{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let u;this.promise=new Promise(function(p){u=p});const c=this;this.promise.then(d=>{if(!c._listeners)return;let p=c._listeners.length;for(;p-- >0;)c._listeners[p](d);c._listeners=null}),this.promise.then=d=>{let p;const h=new Promise(g=>{c.subscribe(g),p=g}).then(d);return h.cancel=function(){c.unsubscribe(p)},h},o(function(p,h,g){c.reason||(c.reason=new Ei(p,h,g),u(c.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const u=this._listeners.indexOf(o);u!==-1&&this._listeners.splice(u,1)}toAbortSignal(){const o=new AbortController,u=c=>{o.abort(c)};return this.subscribe(u),o.signal.unsubscribe=()=>this.unsubscribe(u),o.signal}static source(){let o;return{token:new o0(function(d){o=d}),cancel:o}}};function mv(l){return function(u){return l.apply(null,u)}}function gv(l){return _.isObject(l)&&l.isAxiosError===!0}const su={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(su).forEach(([l,o])=>{su[o]=l});function c0(l){const o=new yn(l),u=Ym(yn.prototype.request,o);return _.extend(u,yn.prototype,o,{allOwnKeys:!0}),_.extend(u,o,null,{allOwnKeys:!0}),u.create=function(d){return c0(Sn(l,d))},u}const Xe=c0(Ni);Xe.Axios=yn;Xe.CanceledError=Ei;Xe.CancelToken=hv;Xe.isCancel=t0;Xe.VERSION=s0;Xe.toFormData=fs;Xe.AxiosError=se;Xe.Cancel=Xe.CanceledError;Xe.all=function(o){return Promise.all(o)};Xe.spread=mv;Xe.isAxiosError=gv;Xe.mergeConfig=Sn;Xe.AxiosHeaders=xt;Xe.formToJSON=l=>Pm(_.isHTMLForm(l)?new FormData(l):l);Xe.getAdapter=r0.getAdapter;Xe.HttpStatusCode=su;Xe.default=Xe;const{Axios:D4,AxiosError:U4,CanceledError:L4,isCancel:H4,CancelToken:B4,VERSION:q4,all:Y4,Cancel:G4,isAxiosError:V4,spread:X4,toFormData:Q4,AxiosHeaders:Z4,HttpStatusCode:K4,formToJSON:J4,getAdapter:$4,mergeConfig:F4}=Xe,xv="https://lms-backend-7btf.onrender.com",mt=Xe.create({baseURL:xv});mt.interceptors.request.use(l=>{const o=localStorage.getItem("lms_token");return o&&(l.headers.Authorization=`Bearer ${o}`),l},l=>Promise.reject(l));const Kc={login:async l=>(await mt.post("/api/auth/login",l)).data,register:async l=>(await mt.post("/api/auth/register",l)).data,getMe:async()=>(await mt.get("/api/auth/me")).data},Wr={getAll:async(l={})=>(await mt.get("/api/courses",{params:l})).data,getById:async l=>(await mt.get(`/api/courses/${l}`)).data,enroll:async l=>(await mt.post(`/api/courses/${l}/enroll`)).data,checkEnrollment:async l=>(await mt.get(`/api/courses/${l}/enrollment-status`)).data},fl={getDashboardStats:async()=>(await mt.get("/api/admin/dashboard")).data,getUsers:async()=>(await mt.get("/api/admin/users")).data,updateUserRole:async(l,o)=>(await mt.put(`/api/admin/users/${l}/role`,{role:o})).data,deleteUser:async l=>(await mt.delete(`/api/admin/users/${l}`)).data,getCourses:async()=>(await mt.get("/api/admin/courses")).data,toggleCoursePublish:async l=>(await mt.put(`/api/admin/courses/${l}/publish`)).data},u0=S.createContext(),bv=({children:l})=>{const[o,u]=S.useState(null),[c,d]=S.useState(!0),[p,h]=S.useState(null),[g,b]=S.useState(!1),[x,y]=S.useState("login"),j=!!o;S.useEffect(()=>{(async()=>{if(!localStorage.getItem("lms_token")){d(!1);return}try{d(!0);const{user:Q}=await Kc.getMe();u(Q)}catch(Q){console.error("Token verification failed:",Q),localStorage.removeItem("lms_token"),u(null)}finally{d(!1)}})()},[]);const k=async(D,C)=>{try{h(null);const Q=await Kc.login({email:D,password:C});if(Q.token)return localStorage.setItem("lms_token",Q.token),u(Q.user),b(!1),{success:!0,user:Q.user}}catch(Q){const F=Q.response?.data?.message||Q.message;return h(F),{success:!1,error:F}}},X=async(D,C,Q,F)=>{try{h(null);const Z=await Kc.register({name:D,email:C,password:Q,adminSecret:F});if(Z.token)return localStorage.setItem("lms_token",Z.token),u(Z.user),b(!1),{success:!0,user:Z.user}}catch(Z){const K=Z.response?.data?.message||Z.message;return h(K),{success:!1,error:K}}},E=()=>{localStorage.removeItem("lms_token"),u(null)};return r.jsx(u0.Provider,{value:{user:o,loading:c,error:p,isSignedIn:j,login:k,register:X,logout:E,authModalOpen:g,setAuthModalOpen:b,authView:x,setAuthView:y},children:l})},va=()=>S.useContext(u0);const d0=(...l)=>l.filter((o,u,c)=>!!o&&o.trim()!==""&&c.indexOf(o)===u).join(" ").trim();const yv=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const vv=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,u,c)=>c?c.toUpperCase():u.toLowerCase());const hm=l=>{const o=vv(l);return o.charAt(0).toUpperCase()+o.slice(1)};var Sv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const jv=l=>{for(const o in l)if(o.startsWith("aria-")||o==="role"||o==="title")return!0;return!1};const wv=S.forwardRef(({color:l="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:c,className:d="",children:p,iconNode:h,...g},b)=>S.createElement("svg",{ref:b,...Sv,width:o,height:o,stroke:l,strokeWidth:c?Number(u)*24/Number(o):u,className:d0("lucide",d),...!p&&!jv(g)&&{"aria-hidden":"true"},...g},[...h.map(([x,y])=>S.createElement(x,y)),...Array.isArray(p)?p:[p]]));const le=(l,o)=>{const u=S.forwardRef(({className:c,...d},p)=>S.createElement(wv,{ref:p,iconNode:o,className:d0(`lucide-${yv(hm(l))}`,`lucide-${l}`,c),...d}));return u.displayName=hm(l),u};const Nv=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ev=le("activity",Nv);const zv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],f0=le("arrow-left",zv);const Cv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],gi=le("arrow-right",Cv);const Av=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],bi=le("award",Av);const Rv=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mm=le("badge-check",Rv);const Tv=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],p0=le("book-marked",Tv);const kv=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],$e=le("book-open",kv);const Ov=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],h0=le("chart-column",Ov);const _v=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],zu=le("chevron-down",_v);const Mv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ir=le("chevron-right",Mv);const Dv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],m0=le("chevron-up",Dv);const Uv=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],dl=le("circle-check-big",Uv);const Lv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Hv=le("circle-check",Lv);const Bv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],g0=le("circle-user",Bv);const qv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],gm=le("circle",qv);const Yv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],vn=le("clock",Yv);const Gv=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],x0=le("code-xml",Gv);const Vv=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],b0=le("contact",Vv);const Xv=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Qv=le("credit-card",Xv);const Zv=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],xm=le("flame",Zv);const Kv=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Jv=le("funnel",Kv);const $v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Cu=le("globe",$v);const Fv=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],ba=le("graduation-cap",Fv);const Wv=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],Iv=le("heart-handshake",Wv);const Pv=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Au=le("heart",Pv);const e2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],y0=le("house",e2);const t2=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],a2=le("instagram",t2);const n2=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],l2=le("layout-dashboard",n2);const i2=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],v0=le("linkedin",i2);const r2=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],Ru=le("loader",r2);const s2=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ou=le("lock",s2);const o2=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],S0=le("log-out",o2);const c2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],hs=le("mail",c2);const u2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],j0=le("map-pin",u2);const d2=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],w0=le("megaphone",d2);const f2=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Qr=le("message-circle",f2);const p2=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],h2=le("message-square",p2);const m2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],N0=le("palette",m2);const g2=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Tu=le("phone",g2);const x2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],cu=le("play",x2);const b2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],uu=le("search",b2);const y2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],E0=le("send",y2);const v2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ns=le("shield-check",v2);const S2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ls=le("shield",S2);const j2=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],w2=le("sliders-horizontal",j2);const N2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],du=le("sparkles",N2);const E2=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],xa=le("star",E2);const z2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],C2=le("target",z2);const A2=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],ms=le("trending-up",A2);const R2=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],z0=le("twitter",R2);const T2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],C0=le("user",T2);const k2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Sa=le("users",k2);const O2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],is=le("x",O2);const _2=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],M2=le("youtube",_2);const D2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],U2=le("zap",D2),L2=[{name:"Home",icon:y0,href:"/"},{name:"Courses",icon:$e,href:"/courses"},{name:"About",icon:p0,href:"/about"},{name:"Faculty",icon:Sa,href:"/faculty"},{name:"Contact",icon:b0,href:"/contact"}],H2=[{value:"12K+",label:"Students",icon:Sa},{value:"240+",label:"Courses",icon:$e},{value:"94%",label:"Success",icon:bi},{value:"58",label:"Countries",icon:Cu}],B2=[{icon:U2,title:"Learn at Your Pace",desc:"Lifetime access. Resume exactly where you left off, on any device, any time."},{icon:ls,title:"Expert Instructors",desc:"Every teacher is a vetted industry professional with real shipped products."},{icon:C2,title:"Career-Ready Skills",desc:"Curriculum built around what employers actually hire for — zero fluff."},{icon:Au,title:"Community Support",desc:"Cohort peers, alumni mentors and weekly live Q&A sessions included."}],q2=[{label:"Development",icon:x0,count:4,color:"#0e7490",bg:"#e0f7fa"},{label:"Design",icon:N0,count:3,color:"#0f766e",bg:"#d1fae5"},{label:"Data",icon:h0,count:3,color:"#0369a1",bg:"#dbeafe"},{label:"Marketing",icon:w0,count:2,color:"#7c3aed",bg:"#ede9fe"}],Y2=[{id:"1",name:"Full Stack Web Development",teacher:"Arjun Mehta",image:"https://picsum.photos/seed/c1/480/270",cat:"Development",level:"Intermediate",rating:4.8,students:4820,isFree:!1,price:{original:2999,sale:1499},hot:!0},{id:"2",name:"UI/UX Design Mastery",teacher:"Priya Sharma",image:"https://picsum.photos/seed/c2/480/270",cat:"Design",level:"Beginner",rating:4.9,students:2310,isFree:!1,price:{original:1999,sale:null},hot:!0},{id:"3",name:"Data Science with Python",teacher:"Rohit Verma",image:"https://picsum.photos/seed/c3/480/270",cat:"Data",level:"Advanced",rating:4.7,students:6100,isFree:!0,price:null,hot:!1},{id:"4",name:"React & Next.js Bootcamp",teacher:"Sneha Patel",image:"https://picsum.photos/seed/c4/480/270",cat:"Development",level:"Intermediate",rating:4.8,students:3750,isFree:!1,price:{original:3499,sale:2199},hot:!0}],G2=[{name:"Aisha Rahman",role:"Frontend Engineer @ Google",avatar:"https://i.pravatar.cc/80?img=47",text:"LearnHub changed my career completely. Real-world projects, genuine mentorship — I landed my dream job in 5 months.",rating:5},{name:"Marcus Chen",role:"Data Scientist @ Stripe",avatar:"https://i.pravatar.cc/80?img=12",text:"Switched careers at 34 with zero ML background. The pacing was perfect — challenging but never overwhelming.",rating:5},{name:"Sofia Alvarez",role:"UX Designer @ Figma",avatar:"https://i.pravatar.cc/80?img=29",text:"Most thoughtfully designed course I've ever taken. Real briefs, real feedback, a portfolio I'm proud of.",rating:5}],V2=l=>{if(l.isFree||!l.price)return{free:!0};const{original:o,sale:u}=l.price;return u?{free:!1,display:`₹${u}`,original:`₹${o}`,pct:Math.round((o-u)/o*100)}:{free:!1,display:`₹${o}`,original:null,pct:null}},X2=l=>l>=1e3?`${(l/1e3).toFixed(1)}k`:String(l);function sl(l=.15){const o=S.useRef(null),[u,c]=S.useState(!1);return S.useEffect(()=>{const d=new IntersectionObserver(([p])=>{p.isIntersecting&&c(!0)},{threshold:l});return o.current&&d.observe(o.current),()=>d.disconnect()},[l]),[o,u]}const Jc=({n:l=5,size:o=12})=>r.jsx("div",{style:{display:"flex",gap:2},children:[1,2,3,4,5].map(u=>r.jsx(xa,{size:o,fill:u<=l?"#f59e0b":"none",color:u<=l?"#f59e0b":"#cbd5e1"},u))});function Q2(){const l=Ja(),{setAuthView:o,setAuthModalOpen:u,isSignedIn:c,loading:d,user:p,logout:h}=va(),g=!d,[b,x]=S.useState(!1);S.useEffect(()=>{const B=()=>x(window.scrollY>10);return window.addEventListener("scroll",B,{passive:!0}),()=>window.removeEventListener("scroll",B)},[]);const[y,j]=sl(.3),[k,X]=sl(.15),[E,D]=sl(.15),[C,Q]=sl(.1),[F,Z]=sl(.1),[K,Y]=sl(.2);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("nav",{className:`h-nav${b?" scrolled":""}`,children:[r.jsxs(ht,{to:"/",className:"h-brand",children:[r.jsx("div",{className:"h-brand-icon",children:r.jsx(ba,{size:17,color:"#fff"})}),r.jsxs("div",{children:[r.jsx("div",{className:"h-brand-name",children:"LearnHub"}),r.jsx("div",{className:"h-brand-sub",children:"Learning Platform"})]})]}),r.jsx("div",{className:"h-pill",children:L2.map(({name:B,icon:G,href:ae})=>r.jsxs(ht,{to:ae,className:({isActive:oe})=>`h-link${oe?" active":""}`,children:[r.jsx(G,{size:14}),r.jsx("span",{children:B})]},B))}),r.jsx("div",{className:"h-auth",children:g?c?r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[p?.role==="admin"&&r.jsxs("button",{onClick:()=>l("/admin"),className:"h-signup",style:{display:"flex",alignItems:"center",gap:"6px",background:"linear-gradient(135deg, #0ea5e9, #6366f1)",borderColor:"transparent",color:"white"},children:[r.jsx(ns,{size:16})," Admin Panel"]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--cyan)",fontWeight:"500",fontSize:"0.9rem"},children:[r.jsx(g0,{size:20}),r.jsxs("span",{children:[p?.name?.split(" ")[0]," (",p?.role||"undefined role",")"]})]}),r.jsx("button",{onClick:h,className:"h-signup",style:{padding:"6px 12px",background:"rgba(239, 68, 68, 0.1)",color:"#ef4444",borderColor:"rgba(239, 68, 68, 0.2)"},children:r.jsx(S0,{size:16})})]}):r.jsx("button",{type:"button",className:"h-signup",onClick:()=>{o("register"),u(!0)},children:"Create Account"}):r.jsx("div",{className:"h-auth-skeleton"})})]}),r.jsxs("div",{className:"h-page",children:[r.jsxs("section",{className:"h-hero",children:[r.jsx("div",{className:"h-blob h-blob-1"}),r.jsx("div",{className:"h-blob h-blob-2"}),[{Icon:x0,color:"#0e7490",bg:"#e0f7fa",top:"15%",left:"5%",size:19,d:0},{Icon:N0,color:"#0f766e",bg:"#d1fae5",top:"62%",left:"3%",size:17,d:.5},{Icon:h0,color:"#0369a1",bg:"#dbeafe",top:"18%",left:"89%",size:19,d:.35},{Icon:w0,color:"#7c3aed",bg:"#ede9fe",top:"74%",left:"92%",size:16,d:.8},{Icon:xa,color:"#f59e0b",bg:"#fef3c7",top:"40%",left:"2%",size:15,d:1}].map(({Icon:B,color:G,bg:ae,top:oe,left:ke,size:Me,d:we},$)=>r.jsx("div",{className:"h-fi",style:{top:oe,left:ke,background:ae,animationDelay:`${we}s, ${we+.6}s`},children:r.jsx(B,{size:Me,color:G,strokeWidth:1.8})},$)),r.jsxs("div",{className:"h-hero-grid",children:[r.jsxs("div",{className:"h-hero-left",children:[r.jsxs("div",{className:"h-announce",children:[r.jsx("div",{className:"h-ann-dot",children:r.jsx(du,{size:11,color:"#fff"})}),"New cohort starting April 2026 — Limited seats",r.jsx(Ir,{size:13})]}),r.jsxs("h1",{className:"h-hero-title",children:["Learn Skills That",r.jsx("br",{}),"Open ",r.jsx("em",{children:"Real Doors"})]}),r.jsx("p",{className:"h-hero-sub",children:"Join 12,000+ learners building real careers through project-based courses taught by industry experts. Code, design, data — every path covered."}),r.jsx("div",{className:"h-checks",children:["Project-based learning","Expert instructors","Lifetime access","Career support"].map(B=>r.jsxs("div",{className:"h-check",children:[r.jsx(dl,{size:15,color:"#0e7490"}),B]},B))}),r.jsxs("div",{className:"h-ctas",children:[r.jsxs(ht,{to:"/courses",className:"h-btn-p",children:[r.jsx($e,{size:16})," Explore Courses ",r.jsx(gi,{size:14})]}),r.jsxs(ht,{to:"/about",className:"h-btn-s",children:[r.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"linear-gradient(135deg,#0e7490,#06b6d4)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(cu,{size:10,color:"#fff",fill:"#fff"})}),"How It Works"]})]})]}),r.jsxs("div",{className:"h-hero-right",children:[r.jsxs("div",{className:"h-card",children:[r.jsx("span",{className:"h-card-tag",children:"🔥 Trending"}),r.jsx("img",{src:"https://picsum.photos/seed/hero/600/340",alt:"Course",className:"h-card-img"}),r.jsx("div",{className:"h-card-title",children:"Full Stack Web Development"}),r.jsxs("div",{className:"h-card-meta",children:[r.jsx(Jc,{n:5,size:13}),r.jsx("span",{children:"4.8 · 4,820 students · 42h"})]})]}),r.jsxs("div",{className:"h-chip h-chip-1",children:[r.jsx("div",{className:"h-chip-ico",style:{background:"#d1fae5"},children:r.jsx(ba,{size:14,color:"#0f766e"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:".81rem",fontWeight:600},children:"12K+"}),r.jsx("div",{style:{fontSize:".63rem",color:"var(--slate-lt)"},children:"Students"})]})]}),r.jsxs("div",{className:"h-chip h-chip-2",children:[r.jsx("div",{className:"h-chip-ico",style:{background:"#fef3c7"},children:r.jsx(xa,{size:14,color:"#f59e0b",fill:"#f59e0b"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:".81rem",fontWeight:600},children:"4.9/5"}),r.jsx("div",{style:{fontSize:".63rem",color:"var(--slate-lt)"},children:"Rating"})]})]})]})]})]}),r.jsx("div",{className:"h-stats",ref:y,children:r.jsx("div",{className:"h-stats-grid",children:H2.map(({value:B,label:G,icon:ae},oe)=>r.jsxs("div",{className:"h-st",children:[r.jsx("div",{className:"h-st-ico",children:r.jsx(ae,{size:16})}),r.jsx("div",{className:`h-st-val${j?" on":""}`,style:{transitionDelay:`${oe*.1}s`},children:B}),r.jsx("div",{className:"h-st-lbl",children:G})]},G))})}),r.jsxs("section",{className:"h-features",ref:k,children:[r.jsxs("div",{className:"h-sec-head",children:[r.jsxs("div",{className:"h-sec-badge",children:[r.jsx(du,{size:11})," Why LearnHub"]}),r.jsxs("h2",{className:"h-sec-title",children:["Built for ",r.jsx("em",{children:"Real Growth"})]}),r.jsx("p",{className:"h-sec-sub",children:"Everything you need to go from beginner to career-ready, in one place."})]}),r.jsx("div",{className:"h-feat-grid",children:B2.map(({icon:B,title:G,desc:ae},oe)=>r.jsxs("div",{className:`h-feat-card${X?" on":""}`,style:{transitionDelay:`${oe*.09}s`},children:[r.jsx("div",{className:"h-feat-ico",children:r.jsx(B,{size:20})}),r.jsx("div",{className:"h-feat-title",children:G}),r.jsx("div",{className:"h-feat-desc",children:ae})]},G))})]}),r.jsxs("section",{className:"h-cats",ref:E,children:[r.jsxs("div",{className:"h-sec-head",children:[r.jsxs("div",{className:"h-sec-badge",children:[r.jsx($e,{size:11})," Explore Topics"]}),r.jsxs("h2",{className:"h-sec-title",children:["Pick Your ",r.jsx("em",{children:"Path"})]}),r.jsx("p",{className:"h-sec-sub",children:"Four career tracks, hundreds of hours, all on one platform."})]}),r.jsx("div",{className:"h-cat-grid",children:q2.map(({label:B,icon:G,count:ae,color:oe,bg:ke},Me)=>r.jsxs(ht,{to:"/courses",className:`h-cat-card${D?" on":""}`,style:{transitionDelay:`${Me*.09}s`},children:[r.jsx("div",{className:"h-cat-ico",style:{background:ke},children:r.jsx(G,{size:22,color:oe})}),r.jsxs("div",{children:[r.jsx("div",{className:"h-cat-name",children:B}),r.jsxs("div",{className:"h-cat-cnt",children:[ae," courses available"]})]}),r.jsx(Ir,{size:15,className:"h-cat-arr"})]},B))})]}),r.jsxs("section",{className:"h-courses",ref:C,children:[r.jsxs("div",{className:"h-sec-head",children:[r.jsxs("div",{className:"h-sec-badge",children:[r.jsx(xm,{size:11})," Popular Now"]}),r.jsxs("h2",{className:"h-sec-title",children:["Top ",r.jsx("em",{children:"Courses"})]}),r.jsx("p",{className:"h-sec-sub",children:"Hand-picked, loved by thousands of learners worldwide."})]}),r.jsx("div",{className:"h-cr-grid",children:Y2.map((B,G)=>{const ae=V2(B);return r.jsxs("article",{className:`h-cr-card${Q?" on":""}`,style:{transitionDelay:`${G*.08}s`},onClick:()=>l("/courses"),role:"button",tabIndex:0,onKeyDown:oe=>{oe.key==="Enter"&&l("/courses")},children:[r.jsxs("div",{className:"h-cr-thumb",children:[r.jsx("img",{src:B.image,alt:B.name,loading:"lazy"}),r.jsxs("div",{className:"h-cr-ov",children:[r.jsx($e,{size:18,color:"#fff"}),r.jsx("span",{children:"View Course"})]}),r.jsxs("div",{className:"h-cr-bgs",children:[ae.free&&r.jsxs("span",{className:"h-cr-bg h-cr-bg-free",children:[r.jsx(mm,{size:9})," Free"]}),ae.pct&&r.jsxs("span",{className:"h-cr-bg h-cr-bg-sale",children:[r.jsx(ms,{size:9})," ",ae.pct,"% off"]}),B.hot&&r.jsxs("span",{className:"h-cr-bg h-cr-bg-hot",children:[r.jsx(xm,{size:9})," Hot"]})]}),r.jsx("span",{className:"h-cr-lvl",children:B.level})]}),r.jsxs("div",{className:"h-cr-body",children:[r.jsx("div",{className:"h-cr-cat",children:B.cat}),r.jsx("div",{className:"h-cr-name",children:B.name}),r.jsx("div",{className:"h-cr-teacher",children:B.teacher}),r.jsxs("div",{className:"h-cr-meta",children:[r.jsxs("span",{className:"h-cr-mi",children:[r.jsx(vn,{size:10}),B.duration??30,"h"]}),r.jsxs("span",{className:"h-cr-mi",children:[r.jsx(Sa,{size:10}),X2(B.students)]}),r.jsxs("span",{className:"h-cr-mi h-cr-rat",children:[r.jsx(xa,{size:10,fill:"#f59e0b",color:"#f59e0b"}),B.rating]})]}),r.jsxs("div",{className:"h-cr-foot",children:[r.jsx(Jc,{n:Math.round(B.rating),size:12}),ae.free?r.jsx("span",{className:"h-pf",children:"Free"}):r.jsxs("span",{children:[r.jsx("span",{className:"h-pc",children:ae.display}),ae.original&&r.jsx("span",{className:"h-po",children:ae.original})]})]})]})]},B.id)})}),r.jsx("div",{style:{textAlign:"center"},children:r.jsxs(ht,{to:"/courses",className:"h-btn-p",style:{display:"inline-flex"},children:[r.jsx($e,{size:15})," View All Courses ",r.jsx(gi,{size:14})]})})]}),r.jsxs("section",{className:"h-tm",ref:F,children:[r.jsxs("div",{className:"h-sec-head",style:{position:"relative",zIndex:1},children:[r.jsxs("div",{className:"h-sec-badge",style:{background:"rgba(14,116,144,.14)",color:"#67e8f9",borderColor:"rgba(14,116,144,.28)"},children:[r.jsx(xa,{size:11,fill:"#67e8f9",color:"#67e8f9"})," Student Stories"]}),r.jsxs("h2",{className:"h-sec-title",style:{color:"#fff"},children:["Real People, ",r.jsx("em",{children:"Real Results"})]}),r.jsx("p",{className:"h-sec-sub",style:{color:"var(--slate-lt)"},children:"12,000+ learners transformed their careers. Here's what they say."})]}),r.jsx("div",{className:"h-tm-grid",children:G2.map((B,G)=>r.jsxs("div",{className:`h-tm-card${Z?" on":""}`,style:{transitionDelay:`${G*.12}s`},children:[r.jsx(Jc,{n:B.rating,size:13}),r.jsxs("p",{className:"h-tm-text",children:['"',B.text,'"']}),r.jsxs("div",{className:"h-tm-author",children:[r.jsx("img",{src:B.avatar,alt:B.name,className:"h-tm-av"}),r.jsxs("div",{children:[r.jsx("div",{className:"h-tm-name",children:B.name}),r.jsx("div",{className:"h-tm-role",children:B.role})]})]})]},B.name))})]}),r.jsx("section",{className:"h-cta",ref:K,children:r.jsxs("div",{className:`h-cta-inner${Y?" on":""}`,children:[r.jsxs("div",{className:"h-sec-badge",style:{marginBottom:14},children:[r.jsx(ba,{size:11})," Start Today"]}),r.jsxs("h2",{className:"h-cta-title",children:["Your Next Chapter",r.jsx("br",{}),"Starts ",r.jsx("em",{children:"Here"})]}),r.jsx("p",{className:"h-cta-sub",children:"Join thousands who chose LearnHub to build real skills, gain confidence, and land the careers they deserve."}),r.jsxs("div",{className:"h-cta-btns",children:[r.jsxs(ht,{to:"/courses",className:"h-btn-p",children:[r.jsx($e,{size:16})," Get Started Free ",r.jsx(gi,{size:14})]}),r.jsxs(ht,{to:"/faculty",className:"h-btn-s",children:["Meet Instructors ",r.jsx(Ir,{size:13})]})]}),r.jsxs("p",{className:"h-cta-note",children:[r.jsx(mm,{size:13,color:"#0e7490"})," No credit card required · Free courses available"]})]})})]})]})}const Z2=[{name:"Home",icon:y0,href:"/"},{name:"Courses",icon:$e,href:"/courses"},{name:"About",icon:p0,href:"/about"},{name:"Faculty",icon:Sa,href:"/faculty"},{name:"Contact",icon:b0,href:"/contact"}],K2=()=>{const{isSignedIn:l,user:o,logout:u,setAuthModalOpen:c,setAuthView:d}=va(),[p,h]=S.useState(!1),[g,b]=S.useState(0),[x,y]=S.useState(!1),[j,k]=S.useState(!0);S.useRef(null);const X=Ja();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("nav",{className:["lms-navbar",j?"":"hidden",x?"scrolled":""].filter(Boolean).join(" "),children:r.jsxs("div",{className:"lms-inner",children:[r.jsxs(ht,{to:"/",className:"lms-logo",children:[r.jsx("div",{className:"lms-logo-icon",children:r.jsx(ba,{size:18,color:"#fff"})}),r.jsxs("div",{children:[r.jsx("div",{className:"lms-logo-text",children:"LMS"}),r.jsx("div",{className:"lms-logo-sub",children:"Learning Platform"})]})]}),r.jsx("div",{className:"lms-nav-pill",children:Z2.map(E=>{const D=E.icon;return r.jsxs(ht,{to:E.href,className:({isActive:C})=>`lms-nav-link${C?" active":""}`,children:[r.jsx(D,{size:14}),r.jsx("span",{children:E.name})]},E.name)})}),r.jsx("div",{className:"lms-auth",children:l?r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[o?.role==="admin"&&r.jsxs("button",{onClick:()=>X("/admin"),className:"lms-signup-btn",style:{padding:"0 12px",display:"flex",alignItems:"center",gap:"6px",background:"linear-gradient(135deg, #0ea5e9, #6366f1)",borderColor:"transparent",color:"white"},children:[r.jsx(ns,{size:16})," Admin Panel"]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent)",fontWeight:"500",fontSize:"0.9rem"},children:[r.jsx(g0,{size:20}),r.jsx("span",{children:o?.name?.split(" ")[0]})]}),r.jsx("button",{onClick:u,className:"lms-signup-btn",style:{padding:"6px 12px",background:"rgba(239, 68, 68, 0.1)",color:"#ef4444",borderColor:"rgba(239, 68, 68, 0.2)"},children:r.jsx(S0,{size:16})})]}):r.jsx("button",{type:"button",onClick:()=>{d("register"),c(!0)},className:"lms-signup-btn",children:r.jsx("span",{children:"Create Account"})})})]})})]})},J2=()=>{const{authModalOpen:l,setAuthModalOpen:o,authView:u,setAuthView:c,login:d,register:p,error:h}=va(),g=Ja(),[b,x]=S.useState(""),[y,j]=S.useState(""),[k,X]=S.useState(""),[E,D]=S.useState(""),[C,Q]=S.useState(!1),[F,Z]=S.useState(!1);if(!l)return null;const K=async Y=>{Y.preventDefault(),Z(!0);let B;u==="login"?B=await d(b,y):B=await p(k,b,y,C?E:void 0),Z(!1),B?.success&&B?.user?.role==="admin"&&setTimeout(()=>g("/admin"),100)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .auth-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease-out;
        }

        .auth-modal-content {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          width: 90%;
          max-width: 420px;
          border-radius: 20px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
          padding: 2rem;
          transform: translateY(0);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .auth-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(241, 245, 249, 0.8);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s;
        }
        
        .auth-close:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .auth-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .auth-subtitle {
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .auth-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .auth-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
          margin-left: 0.2rem;
        }

        .auth-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          background: rgba(255, 255, 255, 0.8);
          outline: none;
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .auth-input:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }

        .auth-submit {
          margin-top: 1rem;
          padding: 0.85rem;
          border-radius: 12px;
          background: linear-gradient(135deg, #0284c7, #0ea5e9);
          color: white;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.1s, box-shadow 0.2s;
        }

        .auth-submit:hover {
          box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3);
          transform: translateY(-1px);
        }

        .auth-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .auth-toggle {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 0.9rem;
          color: #64748b;
        }

        .auth-toggle span {
          color: #0284c7;
          font-weight: 600;
          cursor: pointer;
          margin-left: 0.3rem;
        }

        .auth-toggle span:hover {
          text-decoration: underline;
        }

        .auth-error {
          background: #fef2f2;
          color: #ef4444;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-bottom: 1rem;
          border: 1px solid #fecaca;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}),r.jsx("div",{className:"auth-modal-overlay",onClick:()=>o(!1),children:r.jsxs("div",{className:"auth-modal-content",onClick:Y=>Y.stopPropagation(),children:[r.jsx("button",{className:"auth-close",onClick:()=>o(!1),children:r.jsx(is,{size:18})}),r.jsx("h2",{className:"auth-title",children:u==="login"?"Welcome Back":"Create Account"}),r.jsx("p",{className:"auth-subtitle",children:u==="login"?"Enter your details to access your learning journey.":"Sign up to start learning today."}),h&&r.jsx("div",{className:"auth-error",children:h}),r.jsxs("form",{className:"auth-form",onSubmit:K,children:[u==="register"&&r.jsxs("div",{className:"auth-input-group",children:[r.jsx("label",{className:"auth-label",children:"Full Name"}),r.jsx("input",{type:"text",className:"auth-input",placeholder:"John Doe",value:k,onChange:Y=>X(Y.target.value),required:!0})]}),u==="register"&&C&&r.jsxs("div",{className:"auth-input-group",children:[r.jsxs("label",{className:"auth-label",style:{color:"#0ea5e9"},children:[r.jsx(ls,{size:12,style:{display:"inline",marginRight:"4px"}}),"Admin Secret Code"]}),r.jsx("input",{type:"password",className:"auth-input",placeholder:"Enter Secret Code",value:E,onChange:Y=>D(Y.target.value),style:{borderColor:"#0ea5e9",boxShadow:"0 0 0 1px rgba(14, 165, 233, 0.2)"},required:C})]}),r.jsxs("div",{className:"auth-input-group",children:[r.jsx("label",{className:"auth-label",children:"Email Address"}),r.jsx("input",{type:"email",className:"auth-input",placeholder:"you@example.com",value:b,onChange:Y=>x(Y.target.value),required:!0})]}),r.jsxs("div",{className:"auth-input-group",children:[r.jsx("label",{className:"auth-label",children:"Password"}),r.jsx("input",{type:"password",className:"auth-input",placeholder:"••••••••",value:y,onChange:Y=>j(Y.target.value),required:!0})]}),r.jsx("button",{type:"submit",className:"auth-submit",disabled:F,children:F?"Processing...":u==="login"?"Sign In":"Sign Up"})]}),r.jsx("div",{className:"auth-toggle",children:u==="login"?r.jsxs(r.Fragment,{children:["Don't have an account? ",r.jsx("span",{onClick:()=>c("register"),children:"Sign Up"})]}):r.jsxs(r.Fragment,{children:["Already have an account? ",r.jsx("span",{onClick:()=>c("login"),children:"Sign In"})]})}),u==="register"&&r.jsx("div",{style:{marginTop:"1rem",textAlign:"center",fontSize:"0.8rem",color:"#94a3b8"},children:r.jsxs("span",{style:{cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"4px",transition:"color 0.2s"},onClick:()=>Q(!C),onMouseOver:Y=>Y.target.style.color="#0ea5e9",onMouseOut:Y=>Y.target.style.color="#94a3b8",children:[r.jsx(ls,{size:12})," ",C?"Register as Student instead":"Register as Admin"]})})]})})]})},$2=[{name:"Twitter",Icon:z0,href:"#",color:"#1da1f2",bg:"rgba(29,161,242,0.12)"},{name:"Instagram",Icon:a2,href:"https://www.instagram.com/mr.sushant_pathak?igsh=Z2p1cmp4amFmdmcy",color:"#e1306c",bg:"rgba(225,48,108,0.12)"},{name:"LinkedIn",Icon:v0,href:"https://www.linkedin.com/in/sushant-ranjan-8926b8323?utm_source=share_via&utm_content=profile&utm_medium=member_android",color:"#0a66c2",bg:"rgba(10,102,194,0.12)"},{name:"YouTube",Icon:M2,href:"#",color:"#ff0000",bg:"rgba(255,0,0,0.10)"}],F2=[{heading:"Platform",icon:$e,links:[{label:"Browse Courses",to:"/courses"},{label:"Meet Faculty",to:"/faculty"},{label:"About Us",to:"/about"},{label:"Contact",to:"/contact"},{label:"Become Instructor",to:"/faculty"}]},{heading:"Community",icon:Sa,links:[{label:"Student Stories",to:"/about"},{label:"Events & Webinars",to:"/contact"},{label:"Blog & Articles",to:"/"},{label:"Career Resources",to:"/"},{label:"Referral Program",to:"/"}]},{heading:"Support",icon:Iv,links:[{label:"Help Center",to:"/"},{label:"FAQs",to:"/"},{label:"Privacy Policy",to:"/"},{label:"Terms of Service",to:"/"},{label:"Cookie Settings",to:"/"}]}],W2=[{Icon:hs,value:"sushantpathak2028@gmail.com",href:"mailto:hello@learnhub.in"},{Icon:Tu,value:"+91 705079 04068",href:"tel:+917050794068"},{Icon:j0,value:"Rajkot, Gujarat, India",href:null}],I2=[{value:"12K+",label:"Students"},{value:"240+",label:"Courses"},{value:"94%",label:"Success Rate"},{value:"58",label:"Countries"}],P2=()=>{const[l,o]=S.useState(""),[u,c]=S.useState("idle"),[d,p]=S.useState(""),h=g=>{if(g.preventDefault(),!l.trim()){p("Please enter your email.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)){p("Please enter a valid email.");return}p(""),c("loading"),setTimeout(()=>{c("success"),o("")},1e3)};return r.jsxs("div",{className:"ft-newsletter",children:[r.jsxs("p",{className:"ft-newsletter-label",children:[r.jsx(E0,{size:12})," Stay in the loop"]}),r.jsx("p",{className:"ft-newsletter-sub",children:"Get new course announcements, tips and career insights — no spam, ever."}),u==="success"?r.jsxs("div",{className:"ft-newsletter-success",children:[r.jsx(Au,{size:14,fill:"#0e7490",color:"#0e7490"}),"You're subscribed! Thanks for joining."]}):r.jsxs("form",{onSubmit:h,noValidate:!0,className:"ft-newsletter-form",children:[r.jsxs("div",{className:"ft-newsletter-input-wrap",children:[r.jsx(hs,{size:13,className:"ft-newsletter-icon"}),r.jsx("input",{type:"email",value:l,onChange:g=>{o(g.target.value),p("")},placeholder:"your@email.com",className:"ft-newsletter-input","aria-label":"Email address",disabled:u==="loading"})]}),d&&r.jsx("p",{className:"ft-newsletter-error",children:d}),r.jsx("button",{type:"submit",className:"ft-newsletter-btn",disabled:u==="loading",children:u==="loading"?r.jsx("span",{className:"ft-spinner"}):r.jsxs(r.Fragment,{children:[r.jsx(gi,{size:14})," Subscribe"]})})]})]})},e4=()=>{const l=new Date().getFullYear();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("footer",{className:"ft-root",role:"contentinfo",children:[r.jsxs("div",{className:"ft-bg","aria-hidden":"true",children:[r.jsx("div",{className:"ft-bg-grid"}),r.jsx("div",{className:"ft-bg-glow-1"}),r.jsx("div",{className:"ft-bg-glow-2"})]}),r.jsx("div",{className:"ft-stats-band",children:r.jsx("div",{className:"ft-stats-inner",children:I2.map(({value:o,label:u})=>r.jsxs("div",{className:"ft-stat-item",children:[r.jsx("div",{className:"ft-stat-val",children:o}),r.jsx("div",{className:"ft-stat-lbl",children:u})]},u))})}),r.jsxs("div",{className:"ft-body",children:[r.jsxs("div",{className:"ft-left",children:[r.jsxs(ht,{to:"/",className:"ft-brand",children:[r.jsx("div",{className:"ft-brand-icon",children:r.jsx(ba,{size:18,color:"#fff"})}),r.jsxs("div",{children:[r.jsx("div",{className:"ft-brand-name",children:"LearnHub"}),r.jsx("div",{className:"ft-brand-tagline",children:"Learning Platform"})]})]}),r.jsx("p",{className:"ft-desc",children:"Empowering 12,000+ learners across 58 countries with expert-led courses in development, design, data & marketing."}),r.jsx("div",{className:"ft-contact-list",children:W2.map(({Icon:o,value:u,href:c})=>c?r.jsxs("a",{href:c,className:"ft-contact-item",children:[r.jsx("div",{className:"ft-contact-icon",children:r.jsx(o,{size:13})}),u]},u):r.jsxs("div",{className:"ft-contact-item",children:[r.jsx("div",{className:"ft-contact-icon",children:r.jsx(o,{size:13})}),u]},u))}),r.jsx("div",{className:"ft-socials",children:$2.map(({name:o,Icon:u,href:c,color:d,bg:p})=>r.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":o,className:"ft-social-btn",style:{background:p},children:[r.jsx(u,{size:15,color:d}),r.jsx("span",{className:"ft-social-tooltip",children:o})]},o))}),r.jsx(P2,{})]}),r.jsx("div",{className:"ft-right",children:F2.map(({heading:o,icon:u,links:c})=>r.jsxs("div",{className:"ft-link-group",children:[r.jsxs("div",{className:"ft-link-heading",children:[r.jsx("div",{className:"ft-link-heading-icon",children:r.jsx(u,{size:12})}),o]}),r.jsx("ul",{className:"ft-link-list",children:c.map(({label:d,to:p})=>r.jsx("li",{children:r.jsxs(ht,{to:p,className:"ft-link",children:[r.jsx(Ir,{size:11,className:"ft-link-arrow"}),d]})},d))})]},o))})]}),r.jsx("div",{className:"ft-divider"}),r.jsxs("div",{className:"ft-bottom",children:[r.jsxs("p",{className:"ft-copyright",children:["© ",l," ",r.jsx("span",{children:"LearnHub"}),". All rights reserved."]}),r.jsx("nav",{className:"ft-bottom-links","aria-label":"Legal links",children:["Privacy Policy","Terms of Service","Cookie Policy","Sitemap"].map(o=>r.jsx(ht,{to:"/",className:"ft-bottom-link",children:o},o))}),r.jsxs("p",{className:"ft-made-with",children:["Made with ",r.jsx(Au,{size:11,fill:"#0e7490",color:"#0e7490"})," in India"]})]})]})]})},t4=["All","Development","Design","Data","Marketing"],a4=["All Levels","Beginner","Intermediate","Advanced"],gn=8,Pr=l=>l.isFree||!l.price||l.price.original==null&&l.price.sale==null||l.price.original===0,hi=l=>{if(Pr(l))return{type:"free"};const{original:o,sale:u}=l.price??{};return u!=null?{type:"sale",current:`₹${u}`,original:o>u?`₹${o}`:null}:o!=null?{type:"paid",current:`₹${o}`,original:null}:{type:"free"}},bm={Development:{bg:"#1e3a5f",accent:"#38bdf8",dot:"#0ea5e9"},Design:{bg:"#3b1f5e",accent:"#c084fc",dot:"#a855f7"},Data:{bg:"#1a3d2e",accent:"#34d399",dot:"#10b981"},Marketing:{bg:"#3d1f1f",accent:"#fb923c",dot:"#f97316"},default:{bg:"#1e293b",accent:"#94a3b8",dot:"#64748b"}},n4=l=>bm[l]||bm.default;function l4(){const l=Ja(),{user:o}=va(),[u,c]=S.useState([]),[d,p]=S.useState(!0),[h,g]=S.useState(null),[b,x]=S.useState(""),[y,j]=S.useState("All"),[k,X]=S.useState("All Levels"),[E,D]=S.useState("popularity"),[C,Q]=S.useState(!1),[F,Z]=S.useState(gn),K=S.useCallback(async()=>{try{p(!0),g(null);const $=new URLSearchParams;b&&$.append("search",b),y!=="All"&&$.append("category",y),k!=="All Levels"&&$.append("level",k),E&&$.append("sort",E);const ue=await Wr.getAll(Object.fromEntries($));c(Array.isArray(ue)?ue:ue.courses||[])}catch($){console.error("Error fetching courses:",$),g("Failed to load courses. Please try again."),c([])}finally{p(!1)}},[b,y,k,E]);S.useEffect(()=>{K()},[K]);const Y=($,ue)=>{if(!o){l("/sign-in");return}l(ue?`/courses/${$}`:`/payment/${$}`)},B=()=>Z($=>$+gn),G=()=>{x(""),j("All"),X("All Levels"),D("popularity"),Z(gn)},oe=[...u.filter($=>{const ue=$.title?.toLowerCase().includes(b.toLowerCase())||$.description?.toLowerCase().includes(b.toLowerCase()),he=y==="All"||$.category?.toLowerCase()===y.toLowerCase(),O=k==="All Levels"||$.level?.toLowerCase()===k.toLowerCase();return ue&&he&&O})].sort(($,ue)=>{switch(E){case"price-low":return(hi($).current?.replace("₹","")||0)-(hi(ue).current?.replace("₹","")||0);case"price-high":return(hi(ue).current?.replace("₹","")||0)-(hi($).current?.replace("₹","")||0);case"rating":return(ue.rating||0)-($.rating||0);case"newest":return new Date(ue.createdAt)-new Date($.createdAt);default:return(ue.enrollmentCount||0)-($.enrollmentCount||0)}}),ke=oe.slice(0,F),Me=F<oe.length,we=(y!=="All"?1:0)+(k!=="All Levels"?1:0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"cdp-root",children:[r.jsxs("div",{className:"cdp-hero",children:[r.jsx("div",{className:"cdp-hero-glow"}),r.jsxs("div",{className:"cdp-hero-label",children:[r.jsx($e,{size:11}),"Course Catalog"]}),r.jsxs("h1",{className:"cdp-hero-title",children:["Expand Your ",r.jsx("span",{children:"Knowledge"})]}),r.jsx("p",{className:"cdp-hero-sub",children:"Explore our curated library of courses — from beginner fundamentals to advanced specializations."})]}),r.jsx("div",{className:"cdp-toolbar",children:r.jsxs("div",{className:"cdp-toolbar-inner",children:[r.jsxs("div",{className:"cdp-search-wrap",children:[r.jsx(uu,{size:16,className:"cdp-search-icon"}),r.jsx("input",{type:"text",placeholder:"Search courses, topics, instructors…",value:b,onChange:$=>{x($.target.value),Z(gn)},className:"cdp-search"})]}),r.jsxs("button",{onClick:()=>Q(!C),className:`cdp-filter-btn ${C||we>0?"active":""}`,children:[r.jsx(w2,{size:14}),"Filters",we>0&&r.jsx("span",{className:"cdp-filter-badge",children:we})]})]})}),r.jsx("div",{className:`cdp-filters ${C?"open":""}`,children:r.jsxs("div",{className:"cdp-filters-inner",children:[r.jsxs("div",{className:"cdp-filter-group",children:[r.jsx("label",{children:"Level"}),r.jsx("select",{className:"cdp-select",value:k,onChange:$=>{X($.target.value),Z(gn)},children:a4.map($=>r.jsx("option",{value:$,children:$},$))})]}),r.jsxs("div",{className:"cdp-filter-group",children:[r.jsx("label",{children:"Sort By"}),r.jsxs("select",{className:"cdp-select",value:E,onChange:$=>{D($.target.value),Z(gn)},children:[r.jsx("option",{value:"popularity",children:"Popularity"}),r.jsx("option",{value:"newest",children:"Newest"}),r.jsx("option",{value:"rating",children:"Rating"}),r.jsx("option",{value:"price-low",children:"Price: Low → High"}),r.jsx("option",{value:"price-high",children:"Price: High → Low"})]})]}),r.jsxs("div",{className:"cdp-filter-group",children:[r.jsx("label",{children:" "}),r.jsxs("button",{onClick:G,className:"cdp-reset-btn",children:[r.jsx(is,{size:13})," Reset all"]})]})]})}),r.jsx("div",{className:"cdp-pills",children:t4.map($=>r.jsx("button",{className:`cdp-pill ${y===$?"active":""}`,onClick:()=>{j($),Z(gn)},children:$},$))}),r.jsxs("div",{className:"cdp-main",children:[h&&r.jsxs("div",{className:"cdp-error",children:[r.jsx("span",{children:h}),r.jsx("button",{onClick:K,className:"cdp-retry-btn",children:"Retry"})]}),!d&&r.jsx("div",{className:"cdp-meta",children:r.jsxs("p",{className:"cdp-meta-count",children:["Showing ",r.jsx("strong",{children:ke.length})," of ",r.jsx("strong",{children:oe.length})," courses"]})}),d&&r.jsxs("div",{className:"cdp-loading",children:[r.jsx(Ru,{size:28,color:"#38bdf8",style:{animation:"spin 0.8s linear infinite"}}),r.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"}),r.jsx("span",{className:"cdp-loading-text",children:"Loading courses…"})]}),!d&&ke.length>0&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"cdp-grid",children:ke.map($=>{const ue=n4($.category),he=hi($);return r.jsxs("div",{className:"cdp-card",children:[r.jsxs("div",{className:"cdp-card-thumb",style:{background:`linear-gradient(135deg, ${ue.bg}, #0d1525)`},children:[$.thumbnail?r.jsx("img",{src:$.thumbnail,alt:$.title,className:"cdp-card-thumb-bg"}):r.jsx("div",{className:"cdp-card-thumb-placeholder",style:{background:`linear-gradient(135deg, ${ue.bg}, #080e1a)`},children:r.jsx($e,{size:36,color:ue.accent,style:{opacity:.4}})}),Pr($)&&r.jsx("div",{className:"cdp-free-badge",children:"Free"})]}),r.jsxs("div",{className:"cdp-card-body",children:[$.category&&r.jsxs("div",{className:"cdp-card-cat",style:{color:ue.accent},children:[r.jsx("span",{className:"cdp-card-cat-dot",style:{background:ue.dot}}),$.category]}),r.jsx("h3",{className:"cdp-card-title",children:$.title}),$.rating&&r.jsxs("div",{className:"cdp-card-stars",children:[[...Array(5)].map((O,J)=>r.jsx(xa,{className:`cdp-card-star ${J<Math.floor($.rating)?"filled":"empty"}`},J)),r.jsxs("span",{className:"cdp-card-enroll-count",children:["(",$.enrollmentCount||0,")"]})]}),$.instructor&&r.jsxs("div",{className:"cdp-card-instructor",children:[r.jsx(C0,{size:12}),r.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:$.instructor})]})]}),r.jsxs("div",{className:"cdp-card-footer",children:[he.type==="free"?r.jsx("span",{className:"cdp-price-free",children:"Free"}):r.jsxs("div",{className:"cdp-price-paid",children:[r.jsx("span",{className:"cdp-price-current",children:he.current}),he.original&&r.jsx("span",{className:"cdp-price-original",children:he.original})]}),r.jsx("button",{className:"cdp-enroll-btn",onClick:()=>Y($._id,Pr($)),children:Pr($)?"Enroll Free":"Buy Now"})]})]},$._id)})}),Me&&r.jsx("div",{className:"cdp-load-wrap",children:r.jsx("button",{className:"cdp-load-btn",onClick:B,children:"Load more courses"})})]}),!d&&ke.length===0&&r.jsxs("div",{className:"cdp-empty",children:[r.jsx("div",{className:"cdp-empty-icon",children:r.jsx($e,{size:28,color:"#334155"})}),r.jsx("p",{className:"cdp-empty-title",children:"No courses found"}),r.jsx("p",{className:"cdp-empty-sub",children:"Try adjusting your filters or search term."})]})]})]})]})}const mi=l=>{if(!l&&l!==0)return"--";const o=Math.floor(l/60),u=l%60;return o>0?`${o}h ${u}m`:`${u}m`},$c=l=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(l),i4=l=>{if(!l)return"";try{const o=String(l).trim();if(/\/embed\//.test(o))return o;const u=o.match(/[?&]v=([^&#]+)/);if(u?.[1])return`https://www.youtube.com/embed/${u[1]}`;const c=o.match(/youtu\.be\/([^?&#/]+)/);if(c?.[1])return`https://www.youtube.com/embed/${c[1]}`;if(/drive\.google\.com/.test(o)){const d=o.match(/\/file\/d\/([^/]+)/);if(d?.[1])return`https://drive.google.com/file/d/${d[1]}/preview`}return o}catch{return l}},r4=l=>!!(l&&/\.(mp4|webm|ogg)(\?.*)?$/i.test(l)),s4=({toast:l,onDismiss:o})=>l?r.jsx("div",{onClick:o,style:{position:"fixed",top:80,right:20,zIndex:9999,padding:"12px 20px",borderRadius:"10px",background:l.type==="error"?"#ef4444":"#0e7490",color:"#fff",fontSize:"0.85rem",fontWeight:500,boxShadow:"0 8px 24px rgba(0,0,0,0.18)",cursor:"pointer",animation:"slideInRight 0.3s ease",maxWidth:320},children:l.message}):null,o4=()=>{const{id:l}=_m(),o=Ja(),{isSignedIn:u,user:c}=va(),[d,p]=S.useState(null),[h,g]=S.useState(!0),[b,x]=S.useState(null),[y,j]=S.useState(!1),[k,X]=S.useState(!1),[E,D]=S.useState(null),[C,Q]=S.useState(new Set),[F,Z]=S.useState(new Set),[K,Y]=S.useState({type:null,lectureId:null,chapterId:null});S.useEffect(()=>{(async()=>{try{g(!0);const I=await Wr.getById(l);p(I)}catch(I){console.error("Error fetching course:",I),x("Course not found or failed to load.")}finally{g(!1)}})()},[l]),S.useEffect(()=>{if(!u||!c||!l)return;(async()=>{try{const I=await Wr.checkEnrollment(l,c.id);j(I.isEnrolled)}catch(I){console.error("Error checking enrollment:",I)}})()},[u,c,l]);const B=S.useCallback((V,I="error")=>{D({message:V,type:I}),setTimeout(()=>D(null),3500)},[]),G=d?.isFree||!d?.price||d?.price?.original===0,ae=d?.price?.original??null,oe=d?.price?.sale??null,ke=ae!=null&&oe!=null&&oe<ae,Me=S.useMemo(()=>(d?.lectures||[]).flatMap(V=>V.chapters||[]),[d]),we=S.useMemo(()=>Me.reduce((V,I)=>V+(I.duration||I.durationMin||0),0),[Me]),$=Me.length,ue=$>0?Math.round(F.size/$*100):0,he=S.useMemo(()=>(d?.lectures||[]).find(V=>V._id===K.lectureId||V.id===K.lectureId),[d,K.lectureId]),O=S.useMemo(()=>K.lectureId?K.chapterId?he?.chapters?.find(V=>V._id===K.chapterId||V.id===K.chapterId)??null:he??null:null,[K,he]),J=O?.videoUrl||null,ee=J?i4(J):null,ve=r4(ee),Ne=S.useCallback(V=>{if(!u){B("Please login to access course content");return}if(!G&&!y){B("Please enroll to access content");return}Q(I=>{const ie=new Set(I);return ie.has(V)?ie.delete(V):ie.add(V),ie})},[u,G,y,B]),w=S.useCallback((V,I=null)=>{if(!u){B("Please login to access course content");return}if(!G&&!y){B("Please enroll to access this content");return}Y({type:I?"chapter":"lecture",lectureId:V,chapterId:I}),Q(ie=>{const pe=new Set(ie);return pe.add(V),pe})},[u,G,y,B]),L=S.useCallback(V=>{Z(I=>{const ie=new Set(I);return ie.has(V)?ie.delete(V):ie.add(V),ie})},[]),W=S.useCallback(async()=>{if(!u){B("Please login to enroll");return}try{X(!0),await Wr.enroll(l,c.id),j(!0),B("Successfully enrolled! Start learning.","success")}catch(V){console.error("Enrollment error:",V),B("Enrollment failed. Please try again.")}finally{X(!1)}},[u,c,l,B]);return h?r.jsxs("div",{style:{minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f0f9ff"},children:[r.jsx(Ru,{size:32,color:"#0e7490",style:{animation:"spin 0.8s linear infinite"}}),r.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):b||!d?r.jsxs("div",{style:{minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"DM Sans, sans-serif",gap:16,background:"#f0f9ff"},children:[r.jsx($e,{size:40,color:"#94a3b8"}),r.jsx("p",{style:{color:"#475569",fontSize:"1rem"},children:b||"Course not found."}),r.jsx("button",{onClick:()=>o("/courses"),style:{padding:"10px 22px",background:"#0e7490",color:"#fff",border:"none",borderRadius:"100px",cursor:"pointer",fontSize:"0.85rem"},children:"Back to Courses"})]}):r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx(s4,{toast:E,onDismiss:()=>D(null)}),r.jsxs("div",{className:"cd-page",children:[r.jsxs("div",{className:"cd-hero",children:[d.thumbnail&&r.jsx("img",{src:d.thumbnail,alt:d.title,className:"cd-hero-img"}),r.jsx("div",{className:"cd-hero-overlay",children:r.jsxs("div",{className:"cd-hero-content",children:[r.jsxs("button",{className:"cd-back-btn",onClick:()=>o("/courses"),children:[r.jsx(f0,{size:13})," Back to Courses"]}),r.jsxs("div",{className:"cd-hero-category",children:[d.category," · ",d.level]}),r.jsx("h1",{className:"cd-hero-title",children:d.title}),r.jsxs("div",{className:"cd-hero-meta",children:[d.rating>0&&r.jsxs("span",{className:"cd-hero-meta-item",children:[r.jsx(xa,{size:12,fill:"#f59e0b",color:"#f59e0b"})," ",d.rating]}),r.jsxs("span",{className:"cd-hero-meta-item",children:[r.jsx(Sa,{size:12})," ",(d.totalStudents||0).toLocaleString()," students"]}),r.jsxs("span",{className:"cd-hero-meta-item",children:[r.jsx(vn,{size:12})," ",mi(we)," total"]}),r.jsxs("span",{className:"cd-hero-meta-item",children:[r.jsx($e,{size:12})," ",$," lessons"]})]})]})})]}),r.jsxs("div",{className:"cd-main",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"cd-video-card cd-animate",children:[r.jsx("div",{className:"cd-video-frame",children:ee?ve?r.jsx("video",{controls:!0,src:ee}):r.jsx("iframe",{title:"Video Player",src:ee,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.jsxs("div",{className:"cd-video-placeholder",children:[r.jsx("div",{className:"cd-play-ring",children:r.jsx(cu,{size:22,color:"#67e8f9",fill:"#67e8f9"})}),r.jsx("p",{children:"Select a chapter to start learning"}),(!u||!y&&!G)&&r.jsxs("span",{className:"cd-lock-note",children:[r.jsx(ou,{size:11}),u?"Enrollment required":"Login required"]})]})}),r.jsxs("div",{className:"cd-video-info",children:[r.jsx("h3",{className:"cd-video-title",children:O?.title||O?.name||"Select a chapter to begin"}),r.jsx("p",{className:"cd-video-desc",children:K.type==="chapter"?`Part of: ${he?.title}`:O?.description||d.description}),r.jsxs("div",{className:"cd-video-chips",children:[(O?.duration||O?.durationMin)&&r.jsxs("span",{className:"cd-chip",children:[r.jsx(vn,{size:11})," ",mi(O.duration||O.durationMin)]}),K.type==="chapter"&&r.jsx("span",{className:"cd-chip",children:"Chapter"}),he&&r.jsxs("span",{className:"cd-chip",children:[r.jsx($e,{size:11})," ",he.title]})]}),u&&(y||G)&&K.chapterId&&r.jsx("button",{className:`cd-complete-btn ${F.has(K.chapterId)?"done":"undone"}`,onClick:()=>L(K.chapterId),children:F.has(K.chapterId)?r.jsxs(r.Fragment,{children:[r.jsx(dl,{size:15})," Chapter Completed"]}):r.jsxs(r.Fragment,{children:[r.jsx(gm,{size:15})," Mark as Complete"]})})]})]}),r.jsxs("div",{className:"cd-card cd-animate cd-delay-1",children:[r.jsx("div",{className:"cd-card-header",children:r.jsx("span",{className:"cd-card-title",children:"About This Course"})}),r.jsxs("div",{style:{padding:"16px 20px"},children:[r.jsx("p",{style:{fontSize:"0.88rem",color:"#475569",fontWeight:300,lineHeight:1.7},children:d.description}),d.tags?.length>0&&r.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:14},children:d.tags.map(V=>r.jsx("span",{className:"cd-chip",children:V},V))})]})]})]}),r.jsxs("div",{className:"cd-sidebar",children:[r.jsxs("div",{className:"cd-card cd-animate",children:[r.jsxs("div",{className:"cd-card-header",children:[r.jsx("span",{className:"cd-card-title",children:"Course Content"}),G&&r.jsxs("span",{className:"cd-free-badge",children:[r.jsx(du,{size:10})," Free"]})]}),r.jsx("div",{className:"cd-lecture-list",children:(d.lectures||[]).length===0?r.jsx("div",{style:{padding:"24px",textAlign:"center",color:"#94a3b8",fontSize:"0.82rem"},children:"No lectures available yet."}):(d.lectures||[]).map(V=>{const I=V._id||V.id,ie=C.has(I),pe=G||y;return r.jsxs("div",{className:"cd-lecture-item",children:[r.jsxs("div",{className:`cd-lecture-header${ie?" expanded":""}`,onClick:()=>Ne(I),children:[r.jsxs("div",{className:"cd-lecture-left",children:[r.jsx(zu,{size:15,className:`cd-chevron${ie?" open":""}`}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{className:"cd-lecture-title",children:V.title}),r.jsxs("div",{className:"cd-lecture-sub",children:[r.jsx(vn,{size:10})," ",mi(V.duration||V.durationMin),r.jsx("span",{children:"·"}),r.jsxs("span",{children:[V.chapters?.length||0," lessons"]})]})]})]}),!pe&&r.jsx(ou,{size:13,className:"cd-lecture-lock"})]}),ie&&r.jsx("div",{className:"cd-chapter-list",children:(V.chapters||[]).map(Be=>{const Oe=Be._id||Be.id,ja=F.has(Oe),$a=K.chapterId===Oe&&K.lectureId===I;return r.jsxs("div",{className:`cd-chapter-item${$a?" selected":""}${pe?"":" disabled"}`,onClick:()=>w(I,Oe),children:[r.jsxs("div",{className:"cd-chapter-left",children:[r.jsx("button",{className:`cd-toggle-btn${ja?" done":""}`,onClick:xl=>{xl.stopPropagation(),pe&&L(Oe)},disabled:!pe,children:ja?r.jsx(dl,{size:14}):r.jsx(gm,{size:14})}),r.jsxs("div",{style:{minWidth:0},children:[r.jsx("div",{className:`cd-chapter-name${$a?" selected":""}`,children:Be.title}),r.jsx("div",{className:"cd-chapter-topic",children:Be.description})]})]}),r.jsx("span",{className:"cd-chapter-dur",children:mi(Be.duration||Be.durationMin)})]},Oe)})})]},I)})})]}),r.jsxs("div",{className:"cd-card cd-animate cd-delay-1",children:[r.jsx("div",{className:"cd-card-header",children:r.jsx("span",{className:"cd-card-title",children:"Pricing"})}),r.jsxs("div",{className:"cd-pricing-body",children:[r.jsxs("div",{className:"cd-price-row",children:[r.jsx("span",{className:`cd-price-main${G?" free":""}`,children:G?"Free":oe!=null?$c(oe):ae!=null?$c(ae):"Free"}),!G&&ke&&r.jsx("span",{className:"cd-price-original",children:$c(ae)}),!G&&ke&&r.jsxs("span",{className:"cd-discount-pill",children:[Math.round((ae-oe)/ae*100),"% off"]})]}),r.jsx("p",{className:"cd-price-note",children:G?"Free access · Learn anytime":"One-time payment · Lifetime access"}),G?r.jsxs("button",{disabled:!0,className:"cd-enroll-btn free-access",children:[r.jsx(dl,{size:15})," Free Access Granted"]}):y?r.jsxs("button",{disabled:!0,className:"cd-enroll-btn enrolled",children:[r.jsx(dl,{size:15})," Enrolled"]}):r.jsx("button",{onClick:W,disabled:k,className:"cd-enroll-btn paid",children:k?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"cd-spinner"})," Enrolling…"]}):r.jsxs(r.Fragment,{children:[r.jsx(cu,{size:14,fill:"#fff"})," Enroll Now ",r.jsx(gi,{size:14})]})})]})]}),r.jsxs("div",{className:"cd-card cd-animate cd-delay-2",children:[r.jsx("div",{className:"cd-card-header",children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx(bi,{size:16,color:"var(--cyan)"}),r.jsx("span",{className:"cd-card-title",children:"Your Progress"})]})}),r.jsxs("div",{className:"cd-progress-body",children:[r.jsxs("div",{className:"cd-progress-label",children:[r.jsx("span",{children:"Course Completion"}),r.jsxs("span",{children:[ue,"%"]})]}),r.jsx("div",{className:"cd-progress-track",children:r.jsx("div",{className:"cd-progress-fill",style:{width:`${ue}%`}})}),r.jsxs("div",{className:"cd-progress-stats",children:[r.jsxs("div",{className:"cd-progress-stat",children:[r.jsx("div",{className:"cd-stat-val",children:mi(we)}),r.jsx("div",{className:"cd-stat-lbl",children:"Total Duration"})]}),r.jsxs("div",{className:"cd-progress-stat",children:[r.jsxs("div",{className:"cd-stat-val",children:[F.size,"/",$]}),r.jsx("div",{className:"cd-stat-lbl",children:"Completed"})]})]})]})]})]})]})]})]})},Fc={students:12e3,courses:240,successRate:94,countries:58,certificates:31500,support:0},c4=[{key:"students",label:"Students Enrolled",icon:ba},{key:"courses",label:"Courses Available",icon:ms},{key:"successRate",label:"Success Rate",icon:bi},{key:"countries",label:"Countries Reached",icon:Cu},{key:"certificates",label:"Certificates Issued",icon:bi},{key:"support",label:"Support Available",icon:vn}],u4=[{title:"Excellence",description:"We hold ourselves to the highest standards in every course, every interaction, every outcome.",features:["Peer-reviewed curriculum","Expert-led instruction","Continuous improvement"],accent:"#0e7490",light:"#e0f7fa"},{title:"Accessibility",description:"World-class education should never be gated by geography, background, or budget.",features:["Affordable pricing tiers","Mobile-first design","Multi-language support"],accent:"#0369a1",light:"#dbeafe"},{title:"Community",description:"Learning thrives in connection. We build spaces where collaboration sparks growth.",features:["Live cohort sessions","Peer mentorship","Alumni network"],accent:"#0f766e",light:"#d1fae5"},{title:"Innovation",description:"The future of learning is adaptive, interactive, and built for how humans actually learn.",features:["AI-powered paths","Project-based learning","Real-world challenges"],accent:"#7c3aed",light:"#ede9fe"}],Wc="/LMS-USING-REACT/images",d4=[{name:"Sushant Pathak",role:"AI Engineer @ Google",rating:5,text:"LearnHub didn't just teach me to code — it taught me how to think like an engineer. The projects were real, the mentorship was genuine.",image:`${Wc}/sushant.jpeg`},{name:"Satyam Kumar",role:"Data Scientist @ Stripe",rating:5,text:"I switched careers at 34. LearnHub gave me the confidence and the skills to land a role I'd only dreamed about. Incredible platform.",image:`${Wc}/satyam.jpeg`},{name:"Sahil Kumar",role:"UX Designer @ Figma",rating:5,text:"The UI/UX track is the most thoughtfully designed course I've ever taken. Real briefs, real feedback, real portfolio pieces.",image:`${Wc}/sahil.jpeg`}];function Ic(l=.2){const o=S.useRef(null),[u,c]=S.useState(!1);return S.useEffect(()=>{const d=new IntersectionObserver(([p])=>{p.isIntersecting&&c(!0)},{threshold:l});return o.current&&d.observe(o.current),()=>d.disconnect()},[l]),[o,u]}function f4(l){const[o,u]=S.useState(()=>Object.fromEntries(Object.keys(Fc).map(c=>[c,0])));return S.useEffect(()=>{if(!l)return;const c=2e3,d=60,p=c/d,h=[];return Object.keys(Fc).forEach(g=>{if(g==="support")return;let b=0;const x=Fc[g],y=x/d,j=setInterval(()=>{b+=y,b>=x&&(b=x,clearInterval(j)),u(k=>({...k,[g]:Math.floor(b)}))},p);h.push(j)}),()=>h.forEach(g=>clearInterval(g))},[l]),o}const p4=(l,o)=>l==="support"?"24/7":l==="successRate"?`${o}%`:`${o.toLocaleString()}+`;function h4(){const[l,o]=Ic(.3),u=f4(o),[c,d]=Ic(.15),[p,h]=Ic(.15);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"hero-vignette"}),r.jsx("section",{className:"stats-section",ref:l,children:r.jsx("div",{className:"stats-grid",children:c4.map(({key:g,label:b,icon:x},y)=>r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon",children:r.jsx(x,{size:18})}),r.jsx("div",{className:"stat-number",children:p4(g,u[g]??0)}),r.jsx("div",{className:"stat-label",children:b})]},g))})}),r.jsx("section",{className:"section values-section",ref:c,children:r.jsxs("div",{className:"section-inner",children:[r.jsxs("div",{className:`values-header fade-up ${d?"visible":""}`,children:[r.jsxs("div",{className:"section-badge",children:[r.jsx(ns,{size:13}),r.jsx("span",{children:"Our Guiding Principles"})]}),r.jsx("h2",{className:"section-title",children:"Core Values That Define Us"}),r.jsx("p",{className:"section-subtitle",children:"The foundation of everything we do at LearnHub"})]}),r.jsx("div",{className:"values-grid",children:u4.map((g,b)=>r.jsxs("div",{className:`value-card fade-up ${d?"visible":""} fade-up-delay-${Math.min(b+1,4)}`,children:[r.jsx("div",{className:"value-card-accent",style:{background:g.accent}}),r.jsx("div",{className:"value-icon-wrap",style:{background:g.light},children:r.jsx(ns,{size:20,style:{color:g.accent}})}),r.jsx("h3",{className:"value-card-title",children:g.title}),r.jsx("p",{className:"value-card-desc",children:g.description}),r.jsx("ul",{className:"value-features",children:g.features.map((x,y)=>r.jsxs("li",{className:"value-feature-item",children:[r.jsx("div",{className:"value-feature-dot",style:{background:g.accent}}),x]},y))})]},b))})]})}),r.jsx("section",{className:"section testimonials-section",ref:p,children:r.jsxs("div",{className:"section-inner",children:[r.jsxs("div",{className:`testimonials-header fade-up ${h?"visible":""}`,children:[r.jsx("h2",{className:"section-title",children:"What Our Students Say"}),r.jsx("p",{className:"section-subtitle",children:"Real stories from real learners who transformed their careers"})]}),r.jsx("div",{className:"testimonials-grid",children:d4.map((g,b)=>r.jsxs("div",{className:`testimonial-card fade-up ${h?"visible":""} fade-up-delay-${Math.min(b+1,4)}`,children:[r.jsx("div",{className:"testimonial-stars",children:[...Array(g.rating)].map((x,y)=>r.jsx(xa,{className:"testimonial-star"},y))}),r.jsxs("p",{className:"testimonial-text",children:['"',g.text,'"']}),r.jsxs("div",{className:"testimonial-author",children:[r.jsx("img",{src:g.image,alt:g.name,className:"testimonial-avatar"}),r.jsxs("div",{children:[r.jsx("div",{className:"testimonial-name",children:g.name}),r.jsx("div",{className:"testimonial-role",children:g.role})]})]})]},b))})]})})]})}const ol="/LMS-USING-REACT/images",cl=[{id:"f1",name:"Prof. Charmy Vora",role:"Full Stack Engineer",specialization:"Development",bio:"10+ years at Google & Stripe...",avatar:`${ol}/charmyvora.png`,rating:4.9,totalStudents:4820,totalCourses:4,experience:"10+ years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:"#"},skills:["React","Node.js","AWS","TypeScript"],courses:["Full Stack Web Dev","Node.js APIs","React Bootcamp","Cloud & AWS"]},{id:"f2",name:"Prof. Urvi Dhamecha",role:"Senior Product Designer",specialization:"Design",bio:"Led design at Figma and Notion...",avatar:`${ol}/ud.png`,rating:4.9,totalStudents:5730,totalCourses:3,experience:"8 years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:null},skills:["Figma","UX Research","Prototyping","Design Systems"],courses:["UI/UX Mastery","Figma for Beginners","Design Systems"]},{id:"f3",name:"Prof. Jigar Dave",role:"Frontend Architect",specialization:"Development",bio:"Core contributor to React ecosystem...",avatar:`${ol}/jigardave.jpeg`,rating:4.8,totalStudents:3750,totalCourses:2,experience:"7 years",badge:"Expert",social:{linkedin:"#",twitter:"#",website:"#"},skills:["React","Next.js","Performance","CSS"],courses:["React & Next.js Bootcamp","Frontend Performance"]},{id:"f4",name:"Prof. Bhavesh Kamalpara",role:"Growth Marketing Lead",specialization:"Marketing",bio:"Scaled startups from 0 to 1M users...",avatar:`${ol}/bk.png`,rating:4.6,totalStudents:2870,totalCourses:2,experience:"6 years",badge:null,social:{linkedin:"#",twitter:"#",website:null},skills:["SEO","Google Ads","Analytics","Content Strategy"],courses:["Digital Marketing Pro","Content Writing Fundamentals"]},{id:"f5",name:"Prof. Monisha Mohan",role:"Operating System",specialization:"Data",bio:"Former Amazon Alexa team...",avatar:`${ol}/monishamohan.png`,rating:4.9,totalStudents:5420,totalCourses:2,experience:"9 years",badge:"Top Instructor",social:{linkedin:"#",twitter:"#",website:"#"},skills:["PyTorch","NLP","Computer Vision","MLOps"],courses:["Machine Learning A-Z","Deep Learning Fundamentals"]},{id:"f6",name:"Prof. Niraj Bhagchandani",role:"Computer Networking",specialization:"Development",bio:"AWS Certified Solutions Architect...",avatar:`${ol}/nb.png`,rating:4.7,totalStudents:2890,totalCourses:2,experience:"8 years",badge:"Expert",social:{linkedin:"#",twitter:"#",website:null},skills:["AWS","Docker","Kubernetes","Terraform"],courses:["Cloud Computing & AWS","DevOps Fundamentals"]}],m4=["All","Development","Design","Data","Marketing"],g4=["Most Popular","Top Rated","Most Courses","Most Experience"],Pc=6,A0=l=>l>=1e3?`${(l/1e3).toFixed(1)}k`:String(l),x4=l=>l==="Top Instructor"?{bg:"rgba(245,158,11,0.1)",color:"#b45309",border:"rgba(245,158,11,0.25)"}:l==="Expert"?{bg:"rgba(14,116,144,0.08)",color:"#0e7490",border:"rgba(14,116,144,0.2)"}:null,b4=vm.memo(({rating:l,size:o=13})=>r.jsxs("div",{style:{display:"flex",gap:2,alignItems:"center"},children:[[1,2,3,4,5].map(u=>{const c=u<=Math.round(l);return r.jsx(xa,{size:o,fill:c?"#f59e0b":"none",color:c?"#f59e0b":"#cbd5e1"},u)}),r.jsx("span",{style:{fontSize:"0.74rem",fontWeight:600,color:"#92400e",marginLeft:4},children:l.toFixed(1)})]})),eu=({href:l,icon:o,label:u})=>l?r.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":u,className:"fc-social-btn",onClick:c=>c.stopPropagation(),children:r.jsx(o,{size:14})}):null,y4=vm.memo(({teacher:l,index:o,isExpanded:u,onToggle:c})=>{const d=x4(l.badge);return r.jsxs("article",{className:"fc-card",style:{animationDelay:`${Math.min(o,5)*70}ms`},children:[r.jsx("div",{className:"fc-card-accent",style:{background:l.specialization==="Design"?"linear-gradient(90deg,#0f766e,#14b8a6)":l.specialization==="Data"?"linear-gradient(90deg,#0369a1,#38bdf8)":l.specialization==="Marketing"?"linear-gradient(90deg,#7c3aed,#a78bfa)":"linear-gradient(90deg,#0a5c73,#0e7490)"}}),r.jsxs("div",{className:"fc-card-top",children:[r.jsxs("div",{className:"fc-avatar-wrap",children:[r.jsx("img",{src:l.avatar,alt:l.name,className:"fc-avatar",loading:"lazy"}),r.jsx("div",{className:"fc-avatar-ring"})]}),r.jsxs("div",{className:"fc-card-info",children:[r.jsxs("div",{className:"fc-name-row",children:[r.jsx("h3",{className:"fc-name",children:l.name}),d&&r.jsxs("span",{className:"fc-badge",style:{background:d.bg,color:d.color,borderColor:d.border},children:[r.jsx(bi,{size:9})," ",l.badge]})]}),r.jsx("p",{className:"fc-role",children:l.role}),r.jsx("span",{className:"fc-spec",children:l.specialization})]})]}),r.jsxs("div",{className:"fc-stats",children:[r.jsxs("div",{className:"fc-stat",children:[r.jsx(Sa,{size:12,color:"#0e7490"}),r.jsx("span",{className:"fc-stat-val",children:A0(l.totalStudents)}),r.jsx("span",{className:"fc-stat-lbl",children:"Students"})]}),r.jsx("div",{className:"fc-stat-divider"}),r.jsxs("div",{className:"fc-stat",children:[r.jsx($e,{size:12,color:"#0e7490"}),r.jsx("span",{className:"fc-stat-val",children:l.totalCourses}),r.jsx("span",{className:"fc-stat-lbl",children:"Courses"})]}),r.jsx("div",{className:"fc-stat-divider"}),r.jsxs("div",{className:"fc-stat",children:[r.jsx(ms,{size:12,color:"#0e7490"}),r.jsx("span",{className:"fc-stat-val",children:l.experience}),r.jsx("span",{className:"fc-stat-lbl",children:"Experience"})]})]}),r.jsx("div",{className:"fc-rating-row",children:r.jsx(b4,{rating:l.rating})}),r.jsx("p",{className:"fc-bio",children:l.bio}),r.jsx("div",{className:"fc-skills",children:l.skills.map(p=>r.jsx("span",{className:"fc-skill",children:p},p))}),u&&r.jsxs("div",{className:"fc-courses",children:[r.jsxs("div",{className:"fc-courses-label",children:[r.jsx(ba,{size:12})," Courses by ",l.name.split(" ")[0]]}),r.jsx("div",{className:"fc-courses-list",children:l.courses.map(p=>r.jsxs("div",{className:"fc-course-item",children:[r.jsx($e,{size:11,color:"#0e7490"}),r.jsx("span",{children:p})]},p))})]}),r.jsxs("div",{className:"fc-card-footer",children:[r.jsxs("div",{className:"fc-socials",children:[r.jsx(eu,{href:l.social.linkedin,icon:v0,label:"LinkedIn"}),r.jsx(eu,{href:l.social.twitter,icon:z0,label:"Twitter"}),r.jsx(eu,{href:l.social.website,icon:Cu,label:"Website"})]}),r.jsx("button",{type:"button",className:"fc-expand-btn",onClick:()=>c(l.id),"aria-expanded":u,"aria-label":u?"Show less":"View courses",children:u?r.jsxs(r.Fragment,{children:[r.jsx(m0,{size:13})," Less"]}):r.jsxs(r.Fragment,{children:[r.jsx(zu,{size:13})," Courses"]})})]})]})}),v4=()=>{const[l,o]=S.useState(""),[u,c]=S.useState("All"),[d,p]=S.useState("Most Popular"),[h,g]=S.useState(!1),[b,x]=S.useState(new Set),[y,j]=S.useState(!1),k=S.useCallback(Y=>{x(B=>{const G=new Set(B);return G.has(Y)?G.delete(Y):G.add(Y),G})},[]),X=S.useMemo(()=>{let Y=cl.filter(B=>{const G=l.toLowerCase(),ae=!G||B.name.toLowerCase().includes(G)||B.role.toLowerCase().includes(G)||B.skills.some(ke=>ke.toLowerCase().includes(G)),oe=u==="All"||B.specialization===u;return ae&&oe});switch(d){case"Top Rated":Y=[...Y].sort((B,G)=>G.rating-B.rating);break;case"Most Popular":Y=[...Y].sort((B,G)=>G.totalStudents-B.totalStudents);break;case"Most Courses":Y=[...Y].sort((B,G)=>G.totalCourses-B.totalCourses);break;case"Most Experience":Y=[...Y].sort((B,G)=>parseInt(G.experience)-parseInt(B.experience));break}return Y},[l,u,d]),E=S.useMemo(()=>h?X:X.slice(0,Pc),[X,h]),D=Math.max(0,X.length-Pc),C=u!=="All"||l!==""||d!=="Most Popular",Q=S.useCallback(()=>{o(""),c("All"),p("Most Popular"),g(!1)},[]),F=S.useMemo(()=>cl.reduce((Y,B)=>Y+B.totalStudents,0),[]),Z=S.useMemo(()=>cl.reduce((Y,B)=>Y+B.totalCourses,0),[]),K=S.useMemo(()=>(cl.reduce((Y,B)=>Y+B.rating,0)/cl.length).toFixed(1),[]);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"fc-page",children:[r.jsxs("div",{className:"fc-header",children:[r.jsxs("div",{className:"fc-header-badge",children:[r.jsx(ba,{size:11})," Meet Our Faculty"]}),r.jsxs("h1",{className:"fc-title",children:["Learn from the ",r.jsx("span",{children:"Best"})]}),r.jsx("p",{className:"fc-subtitle",children:"Our instructors are industry veterans, researchers, and practitioners who bring real-world experience into every lesson."})]}),r.jsxs("div",{className:"fc-summary",children:[r.jsxs("div",{className:"fc-summary-item",children:[r.jsx("div",{className:"fc-summary-val",children:cl.length}),r.jsx("div",{className:"fc-summary-lbl",children:"Instructors"})]}),r.jsxs("div",{className:"fc-summary-item",children:[r.jsx("div",{className:"fc-summary-val",children:A0(F)}),r.jsx("div",{className:"fc-summary-lbl",children:"Students Taught"})]}),r.jsxs("div",{className:"fc-summary-item",children:[r.jsx("div",{className:"fc-summary-val",children:Z}),r.jsx("div",{className:"fc-summary-lbl",children:"Courses"})]}),r.jsxs("div",{className:"fc-summary-item",children:[r.jsxs("div",{className:"fc-summary-val",children:[K,"★"]}),r.jsx("div",{className:"fc-summary-lbl",children:"Avg Rating"})]})]}),r.jsx("div",{className:"fc-spec-tabs",children:m4.map(Y=>r.jsx("button",{type:"button",className:`fc-spec-tab ${u===Y?"active":""}`,onClick:()=>{c(Y),g(!1)},children:Y},Y))}),r.jsxs("div",{className:"fc-controls",children:[r.jsxs("div",{className:"fc-search-row",children:[r.jsxs("div",{className:"fc-search-wrap",children:[r.jsx(uu,{size:15,className:"fc-search-icon"}),r.jsx("input",{type:"search",className:"fc-search",placeholder:"Search by name, role, or skill…",value:l,onChange:Y=>{o(Y.target.value),g(!1)},"aria-label":"Search faculty"}),l&&r.jsx("button",{className:"fc-search-clear",onClick:()=>o(""),"aria-label":"Clear",children:r.jsx(is,{size:13})})]}),r.jsx("select",{className:"fc-sort-select",value:d,onChange:Y=>{p(Y.target.value),g(!1)},"aria-label":"Sort faculty",children:g4.map(Y=>r.jsx("option",{value:Y,children:Y},Y))})]}),C&&r.jsxs("div",{className:"fc-filter-bar",children:[l&&r.jsxs("span",{className:"fc-filter-tag",children:[r.jsx(uu,{size:10}),' "',l,'"']}),u!=="All"&&r.jsx("span",{className:"fc-filter-tag",children:u}),d!=="Most Popular"&&r.jsxs("span",{className:"fc-filter-tag",children:[r.jsx(Jv,{size:10})," ",d]}),r.jsxs("button",{type:"button",className:"fc-clear-btn",onClick:Q,children:[r.jsx(is,{size:10})," Clear all"]}),r.jsxs("span",{className:"fc-result-count",children:[X.length," instructor",X.length!==1?"s":""]})]})]}),r.jsxs("div",{className:"fc-grid-wrap",children:[r.jsx("div",{className:"fc-grid",children:X.length===0?r.jsxs("div",{className:"fc-empty",children:[r.jsx("div",{className:"fc-empty-icon",children:r.jsx(ba,{size:30})}),r.jsx("h3",{className:"fc-empty-title",children:"No instructors found"}),r.jsx("button",{type:"button",className:"fc-empty-btn",onClick:Q,children:"Show All Faculty"})]}):E.map((Y,B)=>r.jsx(y4,{teacher:Y,index:B,isExpanded:b.has(Y.id),onToggle:k},Y.id))}),X.length>Pc&&r.jsxs("div",{className:"fc-show-more",children:[r.jsx("button",{type:"button",className:"fc-show-more-btn",onClick:()=>g(Y=>!Y),children:h?r.jsxs(r.Fragment,{children:[r.jsx(m0,{size:15})," Show Less"]}):r.jsxs(r.Fragment,{children:[r.jsx(zu,{size:15})," Show ",D," More"]})}),!h&&r.jsxs("span",{className:"fc-count-note",children:["Showing ",E.length," of ",X.length]})]})]})]})]})},S4=[{icon:Tu,label:"Call Us",value:"+91 70507 90468",sub:"Mon–Sat, 9am–6pm IST",accent:"#0e7490",light:"#e0f7fa"},{icon:hs,label:"Email Us",value:"sushantpathak2028@gmail.com",sub:"We reply within 24 hours",accent:"#0369a1",light:"#dbeafe"},{icon:j0,label:"Visit Us",value:"Rajkot, Gujarat",sub:"India — 360001",accent:"#0f766e",light:"#d1fae5"}],j4=["General Inquiry","Project Collaboration","Support","Feedback","Other"];function w4(){const[l,o]=S.useState({name:"",email:"",phone:"",subject:"",message:""}),[u,c]=S.useState(""),[d,p]=S.useState(!1),[h,g]=S.useState(!1),b=k=>/^\d{10}$/.test(k),x=l.name.trim()&&l.email.trim()&&b(l.phone)&&l.subject&&l.message.trim(),y=k=>{const{name:X,value:E}=k.target;o(D=>({...D,[X]:E})),X==="phone"&&(E&&!b(E)?c("Phone number must be exactly 10 digits."):c(""))},j=k=>{if(k.preventDefault(),!x)return;p(!0);const E=`https://wa.me/7050794068?text=${`Name: ${l.name}%0AEmail: ${l.email}%0APhone: ${l.phone}%0ASubject: ${l.subject}%0AMessage: ${l.message}`}`;window.open(E,"_blank"),setTimeout(()=>{p(!1),g(!0),o({name:"",email:"",phone:"",subject:"",message:""}),setTimeout(()=>g(!1),4e3)},800)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"cp-page",children:[r.jsxs("div",{className:"cp-header",children:[r.jsxs("div",{className:"cp-badge",children:[r.jsx(Qr,{size:12}),"Get In Touch"]}),r.jsxs("h1",{className:"cp-title",children:["Let's Start a ",r.jsx("span",{children:"Conversation"})]}),r.jsx("p",{className:"cp-subtitle",children:"Have a question, idea, or just want to say hello? We'd love to hear from you. Fill out the form and we'll get back to you via WhatsApp."})]}),r.jsx("div",{className:"cp-info-grid",children:S4.map(k=>{const X=k.icon;return r.jsxs("div",{className:"cp-info-card",children:[r.jsx("div",{className:"cp-info-icon",style:{background:k.light},children:r.jsx(X,{size:18,style:{color:k.accent}})}),r.jsxs("div",{children:[r.jsx("div",{className:"cp-info-label",children:k.label}),r.jsx("div",{className:"cp-info-value",children:k.value}),r.jsx("div",{className:"cp-info-sub",children:k.sub})]})]},k.label)})}),r.jsxs("div",{className:"cp-main",children:[r.jsxs("div",{className:"cp-form-card",children:[r.jsx("h2",{className:"cp-form-title",children:"Send Us a Message"}),r.jsx("p",{className:"cp-form-sub",children:"All fields marked * are required"}),r.jsxs("form",{onSubmit:j,noValidate:!0,children:[r.jsxs("div",{className:"cp-row",children:[r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{className:"cp-label",children:[r.jsx(C0,{size:13,color:"#0e7490"}),"Full Name *"]}),r.jsx("input",{className:"cp-input",type:"text",name:"name",value:l.name,onChange:y,placeholder:"Your full name",required:!0})]}),r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{className:"cp-label",children:[r.jsx(hs,{size:13,color:"#0369a1"}),"Email Address *"]}),r.jsx("input",{className:"cp-input",type:"email",name:"email",value:l.email,onChange:y,placeholder:"you@example.com",required:!0})]})]}),r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{className:"cp-label",children:[r.jsx(Tu,{size:13,color:"#0f766e"}),"Phone Number *"]}),r.jsx("input",{className:`cp-input ${u?"error":""}`,type:"tel",name:"phone",value:l.phone,onChange:y,placeholder:"10-digit mobile number",inputMode:"numeric",maxLength:10,required:!0}),u&&r.jsxs("span",{className:"cp-error",children:["⚠ ",u]})]}),r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{className:"cp-label",children:[r.jsx(h2,{size:13,color:"#7c3aed"}),"Subject *"]}),r.jsxs("select",{className:"cp-select",name:"subject",value:l.subject,onChange:y,required:!0,children:[r.jsx("option",{value:"",children:"Select a subject"}),j4.map(k=>r.jsx("option",{value:k,children:k},k))]})]}),r.jsxs("div",{className:"cp-field",children:[r.jsxs("label",{className:"cp-label",children:[r.jsx(Qr,{size:13,color:"#0e7490"}),"Message *"]}),r.jsx("textarea",{className:"cp-textarea",name:"message",value:l.message,onChange:y,placeholder:"Tell us what's on your mind...",required:!0})]}),r.jsx("button",{type:"submit",className:`cp-submit ${h?"success":""}`,disabled:!x||d,children:d?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"cp-spinner"})," Opening WhatsApp…"]}):h?r.jsxs(r.Fragment,{children:[r.jsx(Hv,{size:16})," Message Sent!"]}):r.jsxs(r.Fragment,{children:[r.jsx(E0,{size:15})," Send via WhatsApp"]})}),r.jsxs("div",{className:"cp-wa-note",children:[r.jsx(Qr,{size:13}),"This form opens WhatsApp with your message pre-filled"]})]})]}),r.jsxs("div",{className:"cp-lottie",children:[r.jsx("div",{className:"cp-lottie-wrap",children:r.jsxs("div",{style:{width:"100%",height:"340px",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"},children:[r.jsx("style",{children:`
                  @keyframes cpFloat  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
                  @keyframes cpPulse  { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
                  @keyframes cpSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                  @keyframes cpBounce { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
                  @keyframes cpDash   { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
                  @keyframes cpFadeIn { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
                `}),r.jsx("div",{style:{position:"absolute",width:260,height:260,borderRadius:"50%",background:"linear-gradient(135deg,rgba(14,116,144,.07),rgba(8,145,178,.05))",border:"1.5px solid rgba(14,116,144,.12)",animation:"cpPulse 3s ease-in-out infinite"}}),r.jsx("div",{style:{position:"absolute",width:300,height:300,borderRadius:"50%",border:"1px dashed rgba(14,116,144,.15)",animation:"cpSpin 20s linear infinite"}}),r.jsxs("div",{style:{animation:"cpFloat 3.5s ease-in-out infinite",zIndex:2,textAlign:"center"},children:[r.jsxs("svg",{width:"100",height:"80",viewBox:"0 0 100 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("rect",{x:"5",y:"15",width:"90",height:"60",rx:"8",fill:"white",stroke:"#0e7490",strokeWidth:"2"}),r.jsx("path",{d:"M5 23 L50 48 L95 23",stroke:"#0e7490",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),r.jsx("path",{d:"M5 75 L35 48",stroke:"#0e7490",strokeWidth:"1.5",strokeLinecap:"round",opacity:".5"}),r.jsx("path",{d:"M95 75 L65 48",stroke:"#0e7490",strokeWidth:"1.5",strokeLinecap:"round",opacity:".5"}),r.jsx("circle",{cx:"75",cy:"22",r:"12",fill:"#0e7490"}),r.jsx("path",{d:"M69 22 L73 26 L81 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"18",strokeDashoffset:"18",style:{animation:"cpDash 1s .5s ease forwards",strokeDashoffset:18}})]}),r.jsx("div",{style:{marginTop:12,fontFamily:"Cormorant Garamond, Georgia, serif",fontSize:"1.1rem",fontWeight:600,color:"#0e7490"},children:"We'd love to hear from you"}),r.jsx("div",{style:{marginTop:4,fontFamily:"DM Sans, sans-serif",fontSize:".78rem",fontWeight:300,color:"#94a3b8"},children:"Fill the form and we'll reply on WhatsApp"})]}),r.jsxs("div",{style:{position:"absolute",top:32,right:24,background:"#fff",border:"1px solid rgba(14,116,144,.15)",borderRadius:12,padding:"8px 12px",boxShadow:"0 4px 16px rgba(14,116,144,.1)",display:"flex",alignItems:"center",gap:7,animation:"cpBounce 2.8s ease-in-out infinite",animationDelay:".4s"},children:[r.jsx("div",{style:{width:24,height:24,borderRadius:7,background:"#d1fae5",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(Qr,{size:13,color:"#0f766e"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:".72rem",fontWeight:600,color:"#0c1a2e"},children:"WhatsApp"}),r.jsx("div",{style:{fontSize:".62rem",color:"#94a3b8",fontWeight:300},children:"Instant reply"})]})]}),r.jsxs("div",{style:{position:"absolute",bottom:36,left:20,background:"#fff",border:"1px solid rgba(14,116,144,.15)",borderRadius:12,padding:"8px 12px",boxShadow:"0 4px 16px rgba(14,116,144,.1)",display:"flex",alignItems:"center",gap:7,animation:"cpBounce 3.2s ease-in-out infinite",animationDelay:".8s"},children:[r.jsx("div",{style:{width:24,height:24,borderRadius:7,background:"#e0f7fa",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(vn,{size:13,color:"#0e7490"})}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:".72rem",fontWeight:600,color:"#0c1a2e"},children:"24h"}),r.jsx("div",{style:{fontSize:".62rem",color:"#94a3b8",fontWeight:300},children:"Response time"})]})]})]})}),r.jsxs("div",{className:"cp-hours",children:[r.jsxs("div",{className:"cp-hours-title",children:[r.jsx(vn,{size:16}),"Office Hours"]}),[{day:"Monday – Friday",time:"9:00 AM – 6:00 PM"},{day:"Saturday",time:"10:00 AM – 4:00 PM"},{day:"Sunday",time:"Closed"}].map(k=>r.jsxs("div",{className:"cp-hours-row",children:[r.jsx("span",{className:"cp-hours-day",children:k.day}),r.jsx("span",{className:"cp-hours-time",children:k.time})]},k.day))]})]})]})]})]})}const tu="http://localhost:8000/api",N4=async()=>localStorage.getItem("lms_token"),E4=()=>{const{id:l}=_m(),o=Ja(),{isSignedIn:u,user:c}=va(),[d,p]=S.useState(null),[h,g]=S.useState(!0),[b,x]=S.useState(!1),[y,j]=S.useState(!1),[k,X]=S.useState(null),[E,D]=S.useState({name:"",number:"",expiry:"",cvv:""});S.useEffect(()=>{if(!u){o("/");return}(async()=>{try{const Y=await(await fetch(`${tu}/courses/${l}`)).json();p(Y)}catch{X("Failed to load course.")}finally{g(!1)}})()},[l,u]);const C=Z=>{let{name:K,value:Y}=Z.target;K==="number"&&(Y=Y.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim()),K==="expiry"&&(Y=Y.replace(/\D/g,"").slice(0,4).replace(/^(.{2})(.+)/,"$1/$2")),K==="cvv"&&(Y=Y.replace(/\D/g,"").slice(0,3)),D(B=>({...B,[K]:Y}))},Q=async Z=>{if(Z.preventDefault(),!E.name||E.number.replace(/\s/g,"").length<16||!E.expiry||E.cvv.length<3){X("Please fill all card details correctly.");return}X(null),x(!0);try{const K=await N4(),Y=await fetch(`${tu}/payment/create-order`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${K}`},body:JSON.stringify({courseId:l})}),B=await Y.json();if(!Y.ok)throw new Error(B.message);const G=await fetch(`${tu}/payment/verify`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${K}`},body:JSON.stringify({orderId:B.orderId,courseId:l,amount:B.amount,clerkId:c?.id})}),ae=await G.json();if(!G.ok)throw new Error(ae.message);j(!0),setTimeout(()=>o(`/courses/${l}`),3e3)}catch(K){X(K.message||"Payment failed. Please try again.")}finally{x(!1)}};if(h)return r.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f0f9ff",fontFamily:"DM Sans, sans-serif"},children:r.jsx("p",{style:{color:"#94a3b8"},children:"Loading..."})});if(k&&!d)return r.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#f0f9ff",fontFamily:"DM Sans, sans-serif",gap:12},children:[r.jsx("p",{style:{color:"#ef4444"},children:k}),r.jsx("button",{onClick:()=>o(-1),style:{padding:"10px 22px",background:"#0e7490",color:"#fff",border:"none",borderRadius:"100px",cursor:"pointer"},children:"Go Back"})]});const F=d?.price?.sale||d?.price?.original||0;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"pay-page",children:y?r.jsx("div",{style:{background:"var(--white)",borderRadius:18,padding:40,maxWidth:440,width:"100%",boxShadow:"0 4px 24px rgba(14,116,144,.08)",textAlign:"center"},children:r.jsxs("div",{className:"pay-success",children:[r.jsx("div",{className:"pay-success-icon",children:r.jsx(dl,{size:36,color:"#0f766e"})}),r.jsx("div",{className:"pay-success-title",children:"Payment Successful! 🎉"}),r.jsxs("div",{className:"pay-success-sub",children:["You're now enrolled in ",r.jsx("strong",{children:d?.title}),".",r.jsx("br",{}),"Redirecting to your course..."]}),r.jsx("div",{className:"pay-success-bar",children:r.jsx("div",{className:"pay-success-fill"})})]})}):r.jsxs("div",{className:"pay-wrap",children:[r.jsxs("div",{className:"pay-left",children:[r.jsx("img",{src:d?.thumbnail||`https://picsum.photos/seed/${l}/600/300`,alt:d?.title,className:"pay-course-img"}),r.jsxs("div",{className:"pay-course-body",children:[r.jsx("div",{className:"pay-course-cat",children:d?.category}),r.jsx("div",{className:"pay-course-title",children:d?.title}),r.jsxs("div",{className:"pay-course-desc",children:[d?.description?.slice(0,120),d?.description?.length>120?"...":""]}),r.jsx("div",{className:"pay-divider"}),r.jsxs("div",{className:"pay-price-row",children:[r.jsxs("div",{children:[r.jsx("div",{className:"pay-price-label",children:"Total Amount"}),r.jsxs("div",{className:"pay-incl",children:[r.jsx($e,{size:12})," Lifetime access included"]})]}),r.jsxs("div",{style:{textAlign:"right"},children:[r.jsxs("div",{className:"pay-price-val",children:["₹",F]}),d?.price?.original&&d?.price?.sale&&r.jsxs("div",{style:{fontSize:".75rem",color:"#94a3b8",textDecoration:"line-through"},children:["₹",d.price.original]})]})]})]})]}),r.jsxs("div",{className:"pay-right",children:[r.jsxs("button",{className:"pay-back",onClick:()=>o(-1),children:[r.jsx(f0,{size:14})," Back"]}),r.jsx("div",{className:"pay-form-title",children:"Complete Payment"}),r.jsxs("div",{className:"pay-form-sub",children:[r.jsx(ou,{size:12})," Secure & encrypted payment"]}),r.jsxs("form",{onSubmit:Q,noValidate:!0,children:[r.jsxs("div",{className:"pay-field",children:[r.jsx("label",{className:"pay-label",children:"Cardholder Name"}),r.jsx("input",{className:"pay-input",name:"name",value:E.name,onChange:C,placeholder:"Name on card"})]}),r.jsxs("div",{className:"pay-field",children:[r.jsx("label",{className:"pay-label",children:"Card Number"}),r.jsx("input",{className:"pay-input",name:"number",value:E.number,onChange:C,placeholder:"1234 5678 9012 3456",maxLength:19})]}),r.jsxs("div",{className:"pay-row",children:[r.jsxs("div",{className:"pay-field",children:[r.jsx("label",{className:"pay-label",children:"Expiry Date"}),r.jsx("input",{className:"pay-input",name:"expiry",value:E.expiry,onChange:C,placeholder:"MM/YY",maxLength:5})]}),r.jsxs("div",{className:"pay-field",children:[r.jsx("label",{className:"pay-label",children:"CVV"}),r.jsx("input",{className:"pay-input",name:"cvv",value:E.cvv,onChange:C,placeholder:"123",maxLength:3,type:"password"})]})]}),k&&r.jsx("div",{className:"pay-error",children:k}),r.jsx("button",{type:"submit",className:"pay-btn",disabled:b,children:b?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"pay-spinner"})," Processing..."]}):r.jsxs(r.Fragment,{children:[r.jsx(Qv,{size:16})," Pay ₹",F," Now"]})}),r.jsxs("div",{className:"pay-secure",children:[r.jsx(ls,{size:12})," 256-bit SSL encrypted · Safe & secure"]})]})]})]})})]})},z4=({children:l,requireAdmin:o=!1})=>{const{user:u,loading:c,isSignedIn:d}=va();return c?r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:r.jsx(Ru,{className:"animate-spin",size:48,color:"#0ea5e9"})}):d?o&&u?.role!=="admin"?r.jsx($h,{to:"/",replace:!0}):l:r.jsx($h,{to:"/",replace:!0})},C4=({stats:l})=>r.jsx(r.Fragment,{children:r.jsxs("div",{className:"admin-grid",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx(Sa,{size:22}),r.jsx("h3",{children:l.totalUsers}),r.jsx("p",{children:"Total Users"})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx($e,{size:22}),r.jsx("h3",{children:l.totalCourses}),r.jsx("p",{children:"Courses"})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx(ms,{size:22}),r.jsx("h3",{children:l.totalEnrollments}),r.jsx("p",{children:"Enrollments"})]})]})}),A4=()=>{const[l,o]=S.useState([]);S.useEffect(()=>{fl.getUsers().then(o)},[]);const u=async(c,d)=>{await fl.updateUserRole(c,d),o(l.map(p=>p._id===c?{...p,role:d}:p))};return r.jsxs("div",{className:"admin-panel",children:[r.jsx("h3",{children:"User Management"}),r.jsxs("table",{className:"admin-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Role"}),r.jsx("th",{children:"Action"})]})}),r.jsx("tbody",{children:l.map(c=>r.jsxs("tr",{children:[r.jsx("td",{children:c.name}),r.jsx("td",{children:c.email}),r.jsx("td",{children:c.role}),r.jsx("td",{children:r.jsxs("select",{value:c.role,onChange:d=>u(c._id,d.target.value),children:[r.jsx("option",{value:"student",children:"Student"}),r.jsx("option",{value:"instructor",children:"Instructor"}),r.jsx("option",{value:"admin",children:"Admin"})]})})]},c._id))})]})]})},R4=()=>{const[l,o]=S.useState([]);S.useEffect(()=>{fl.getCourses().then(o)},[]);const u=async c=>{await fl.toggleCoursePublish(c),o(await fl.getCourses())};return r.jsxs("div",{className:"admin-panel",children:[r.jsx("h3",{children:"Course Management"}),r.jsxs("table",{className:"admin-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Course"}),r.jsx("th",{children:"Instructor"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Action"})]})}),r.jsx("tbody",{children:l.map(c=>r.jsxs("tr",{children:[r.jsx("td",{children:c.title}),r.jsx("td",{children:c.instructor?.name}),r.jsx("td",{children:c.isPublished?"Published":"Draft"}),r.jsx("td",{children:r.jsx("button",{onClick:()=>u(c._id),children:c.isPublished?"Unpublish":"Publish"})})]},c._id))})]})]})},T4=()=>{const{user:l}=va(),u=Kt().pathname.split("/").pop(),[c,d]=S.useState({totalUsers:0,totalCourses:0,totalEnrollments:0});return S.useEffect(()=>{fl.getDashboardStats().then(p=>{p.success&&d(p.stats)})},[]),r.jsxs("div",{className:"admin-layout",children:[r.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=DM+Sans:wght@300;400;500&display=swap');

        body {
          font-family: 'DM Sans', sans-serif;
          background: #f8fafc;
        }

        .admin-layout {
          display: flex;
          min-height: 100vh;
        }

        /* SIDEBAR */
        .admin-sidebar {
          width: 260px;
          background: linear-gradient(180deg, #0a5c73, #0e7490, #0369a1);
          color: white;
          padding: 20px;
        }

        .nav-link {
          display: block;
          padding: 10px;
          margin: 6px 0;
          border-radius: 8px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
        }

        .nav-link.active,
        .nav-link:hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
        }

        /* MAIN */
        .admin-main {
          flex: 1;
          padding: 30px;
        }

        .page-title {
          font-family: 'Cormorant Garamond';
          font-size: 2rem;
          margin-bottom: 20px;
        }

        /* CARDS */
        .admin-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
          gap: 20px;
        }

        .stat-card {
          background: white;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        /* PANEL */
        .admin-panel {
          background: white;
          border-radius: 16px;
          padding: 20px;
          margin-top: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        /* TABLE */
        .admin-table {
          width: 100%;
          border-collapse: collapse;
        }

        .admin-table th,
        .admin-table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }

        .admin-table tr:hover {
          background: #f9fafb;
        }

      `}),r.jsxs("aside",{className:"admin-sidebar",children:[r.jsx("h2",{children:"LMS Admin"}),r.jsxs(ul,{to:"/admin",className:`nav-link ${u==="admin"?"active":""}`,children:[r.jsx(l2,{size:18})," Dashboard"]}),r.jsxs(ul,{to:"/admin/users",className:`nav-link ${u==="users"?"active":""}`,children:[r.jsx(Sa,{size:18})," Users"]}),r.jsxs(ul,{to:"/admin/courses",className:`nav-link ${u==="courses"?"active":""}`,children:[r.jsx($e,{size:18})," Courses"]}),r.jsxs(ul,{to:"/",className:"nav-link",children:[r.jsx(Ev,{size:18})," Website"]})]}),r.jsxs("main",{className:"admin-main",children:[r.jsx("h1",{className:"page-title",children:u==="users"?"Users":u==="courses"?"Courses":"Dashboard"}),r.jsxs("p",{children:["Welcome, ",l?.name]}),r.jsxs(Lm,{children:[r.jsx(At,{path:"/",element:r.jsx(C4,{stats:c})}),r.jsx(At,{path:"/users",element:r.jsx(A4,{})}),r.jsx(At,{path:"/courses",element:r.jsx(R4,{})})]})]})]})},xn=({children:l})=>r.jsxs(r.Fragment,{children:[r.jsx(K2,{}),r.jsx("main",{children:l}),r.jsx(e4,{})]});function k4(){const{dbUser:l}=va();return S.useEffect(()=>{l&&console.log("✅ User synced:",l.name)},[l]),r.jsxs(r.Fragment,{children:[r.jsxs(Lm,{children:[r.jsx(At,{path:"/",element:r.jsx(Q2,{})}),r.jsx(At,{path:"/courses",element:r.jsx(xn,{children:r.jsx(l4,{})})}),r.jsx(At,{path:"/courses/:id",element:r.jsx(xn,{children:r.jsx(o4,{})})}),r.jsx(At,{path:"/payment/:id",element:r.jsx(xn,{children:r.jsx(E4,{})})}),r.jsx(At,{path:"/about",element:r.jsx(xn,{children:r.jsx(h4,{})})}),r.jsx(At,{path:"/faculty",element:r.jsx(xn,{children:r.jsx(v4,{})})}),r.jsx(At,{path:"/contact",element:r.jsx(xn,{children:r.jsx(w4,{})})}),r.jsx(At,{path:"/admin/*",element:r.jsx(z4,{requireAdmin:!0,children:r.jsx(T4,{})})}),r.jsx(At,{path:"*",element:r.jsx(xn,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"80vh",gap:16,textAlign:"center",padding:"0 24px"},children:[r.jsx("div",{style:{fontSize:"5rem",fontWeight:700,color:"#e2e8f0"},children:"404"}),r.jsx("div",{style:{fontSize:"1.4rem",fontWeight:600,color:"#0c1a2e"},children:"Page not found"}),r.jsx("a",{href:"/",style:{marginTop:8,padding:"11px 26px",borderRadius:"100px",background:"#0e7490",color:"#fff",textDecoration:"none",fontSize:"0.88rem",fontWeight:500},children:"Back to Home"})]})})})]}),r.jsx(J2,{})]})}ox.createRoot(document.getElementById("root")).render(r.jsx(bv,{children:r.jsx(Ab,{children:r.jsx(k4,{})})}));
