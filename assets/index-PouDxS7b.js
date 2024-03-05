function Gy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ip(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sp={exports:{}},Zo={},op={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ts=Symbol.for("react.element"),qy=Symbol.for("react.portal"),Yy=Symbol.for("react.fragment"),Qy=Symbol.for("react.strict_mode"),Xy=Symbol.for("react.profiler"),Jy=Symbol.for("react.provider"),Zy=Symbol.for("react.context"),e0=Symbol.for("react.forward_ref"),t0=Symbol.for("react.suspense"),n0=Symbol.for("react.memo"),r0=Symbol.for("react.lazy"),jh=Symbol.iterator;function i0(e){return e===null||typeof e!="object"?null:(e=jh&&e[jh]||e["@@iterator"],typeof e=="function"?e:null)}var ap={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lp=Object.assign,up={};function $r(e,t,n){this.props=e,this.context=t,this.refs=up,this.updater=n||ap}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cp(){}cp.prototype=$r.prototype;function Ku(e,t,n){this.props=e,this.context=t,this.refs=up,this.updater=n||ap}var Gu=Ku.prototype=new cp;Gu.constructor=Ku;lp(Gu,$r.prototype);Gu.isPureReactComponent=!0;var Uh=Array.isArray,hp=Object.prototype.hasOwnProperty,qu={current:null},dp={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)hp.call(t,r)&&!dp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ts,type:e,key:s,ref:o,props:i,_owner:qu.current}}function s0(e,t){return{$$typeof:ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ts}function o0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fh=/\/+/g;function ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?o0(""+e.key):t.toString(36)}function Hs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ts:case qy:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ba(o,0):r,Uh(i)?(n="",e!=null&&(n=e.replace(Fh,"$&/")+"/"),Hs(i,t,n,"",function(u){return u})):i!=null&&(Yu(i)&&(i=s0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fh,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Uh(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+ba(s,a);o+=Hs(s,t,n,l,i)}else if(l=i0(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+ba(s,a++),o+=Hs(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Is(e,t,n){if(e==null)return e;var r=[],i=0;return Hs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function a0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},Ws={transition:null},l0={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:qu};$.Children={map:Is,forEach:function(e,t,n){Is(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Is(e,function(){t++}),t},toArray:function(e){return Is(e,function(t){return t})||[]},only:function(e){if(!Yu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=$r;$.Fragment=Yy;$.Profiler=Xy;$.PureComponent=Ku;$.StrictMode=Qy;$.Suspense=t0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=qu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)hp.call(t,l)&&!dp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ts,type:e.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:Zy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jy,_context:e},e.Consumer=e};$.createElement=fp;$.createFactory=function(e){var t=fp.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:e0,render:e}};$.isValidElement=Yu;$.lazy=function(e){return{$$typeof:r0,_payload:{_status:-1,_result:e},_init:a0}};$.memo=function(e,t){return{$$typeof:n0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Ws.transition;Ws.transition={};try{e()}finally{Ws.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Ae.current.useCallback(e,t)};$.useContext=function(e){return Ae.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ae.current.useEffect(e,t)};$.useId=function(){return Ae.current.useId()};$.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ae.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};$.useRef=function(e){return Ae.current.useRef(e)};$.useState=function(e){return Ae.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ae.current.useTransition()};$.version="18.2.0";op.exports=$;var T=op.exports;const xt=ip(T),u0=Gy({__proto__:null,default:xt},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0=T,h0=Symbol.for("react.element"),d0=Symbol.for("react.fragment"),f0=Object.prototype.hasOwnProperty,p0=c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g0={key:!0,ref:!0,__self:!0,__source:!0};function pp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)f0.call(t,r)&&!g0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:h0,type:e,key:s,ref:o,props:i,_owner:p0.current}}Zo.Fragment=d0;Zo.jsx=pp;Zo.jsxs=pp;sp.exports=Zo;var m=sp.exports;const m0="_header_ow5jc_1",v0="_header__company_ow5jc_12",y0="_header__content_ow5jc_17",_0="_logo_ow5jc_47",w0="_nav_ow5jc_59",E0="_nav__item_ow5jc_72",I0="_light_ow5jc_99",S0="_background_ow5jc_111",T0="_dark_ow5jc_115",$e={header:m0,header__company:v0,header__content:y0,logo:_0,nav:w0,"nav--open":"_nav--open_ow5jc_68",nav__item:E0,light:I0,background:S0,dark:T0};var gp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},oo=xt.createContext&&xt.createContext(gp),k0=["attr","size","title"];function C0(e,t){if(e==null)return{};var n=A0(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function A0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ao.apply(this,arguments)}function zh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function lo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zh(Object(n),!0).forEach(function(r){P0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function P0(e,t,n){return t=R0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R0(e){var t=N0(e,"string");return typeof t=="symbol"?t:String(t)}function N0(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mp(e){return e&&e.map((t,n)=>xt.createElement(t.tag,lo({key:n},t.attr),mp(t.child)))}function Qu(e){return t=>xt.createElement(O0,ao({attr:lo({},e.attr)},t),mp(e.child))}function O0(e){var t=n=>{var{attr:r,size:i,title:s}=e,o=C0(e,k0),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),xt.createElement("svg",ao({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:lo(lo({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&xt.createElement("title",null,s),e.children)};return oo!==void 0?xt.createElement(oo.Consumer,null,n=>t(n)):t(gp)}const Bt=T.createContext({theme:"light",setTheme:()=>{}}),x0=({children:e})=>{const[t,n]=T.useState(()=>{const r=localStorage.getItem("theme");return r||"light"});return T.useEffect(()=>{localStorage.setItem("theme",t)},[t]),m.jsx(Bt.Provider,{value:{theme:t,setTheme:n},children:e})},L0=e=>{const[t,n]=T.useState(!1),{theme:r}=T.useContext(Bt),i=()=>{n(!0),setTimeout(()=>{window.location.href="http://localhost:5173/account"},400)};return m.jsxs("div",{children:[m.jsx("div",{className:`buttons ${t?"clicked":""}`,children:m.jsxs("button",{className:`blob-btn ${r==="light"?"light":"dark"}`,onClick:i,children:[e.text,m.jsx("span",{className:`blob-btn__inner ${r==="light"?"light":"dark"}`,children:m.jsxs("span",{className:"blob-btn__blobs",children:[m.jsx("span",{className:`blob-btn__blob ${r==="light"?"light":"dark"}`}),m.jsx("span",{className:`blob-btn__blob ${r==="light"?"light":"dark"}`}),m.jsx("span",{className:`blob-btn__blob ${r==="light"?"light":"dark"}`}),m.jsx("span",{className:`blob-btn__blob ${r==="light"?"light":"dark"}`})]})})]})}),m.jsx("br",{}),m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:m.jsx("defs",{children:m.jsxs("filter",{id:"goo",children:[m.jsx("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"10"}),m.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7",result:"goo"}),m.jsx("feBlend",{in2:"goo",in:"SourceGraphic",result:"mix"})]})})})]})};function D0(e){return Qu({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"},child:[]}]})(e)}const M0=()=>{const[e,t]=T.useState(!1),{theme:n,setTheme:r}=T.useContext(Bt);return console.log(n),m.jsx("div",{className:`${$e.header} ${$e[n]}`,children:m.jsxs("div",{className:$e.header__content,children:[m.jsx("div",{className:$e.header__company,children:m.jsx("span",{className:$e.logo,children:"SAVOR"})}),m.jsx("div",{children:m.jsxs("nav",{className:`${$e.nav} ${e?$e["nav--open"]:{}}`,children:[m.jsx("a",{className:$e.nav__item,href:"/",children:"Home"}),m.jsx("a",{className:$e.nav__item,href:"/compare",children:"Compare"}),m.jsx("a",{className:$e.nav__item,href:"/playlists",children:"Playlists"}),m.jsx("a",{className:$e.nav__item,href:"/search",children:"Search"}),m.jsx("a",{className:$e.nav__item,href:"/rankings",children:"Rankings"}),m.jsx("a",{className:$e.nav__item,href:"/account",children:m.jsx(oo.Provider,{value:{size:50},children:m.jsx(D0,{})})})]})})]})})},$0="/assets/ipod-9WJrDiKj.svg";function j0(){return T.useContext(Bt),m.jsxs(m.Fragment,{children:[m.jsxs("maintext",{children:["Savor ",m.jsx("span",{children:"your"})," taste today!"]}),m.jsx("subtitle",{children:"Get tailored suggestions today based on your interests"}),m.jsx(L0,{text:"Get Started"}),m.jsx("div",{class:"ipodContainer",children:m.jsx("img",{src:$0,alt:"Description of the image"})})]})}const U0="_compare_button_1lmj4_1",F0="_light_1lmj4_26",z0="_dark_1lmj4_31",Bh={compare_button:U0,light:F0,dark:z0},B0=e=>{const{theme:t}=T.useContext(Bt);return m.jsx("div",{children:m.jsx("button",{className:`${Bh.compare_button} ${Bh[t]}`,children:e.text})})},V0="f7edf86569454d63bed822956ad01312",b0="https://accounts.spotify.com/authorize",H0="http://localhost:5173/compare",W0=["user-read-private","streaming","user-top-read","user-read-email","playlist-read-private","playlist-read-collaborative"],K0="%20",G0=W0.join(K0),q0=`${b0}?client_id=${V0}&redirect_uri=${H0}&scope=${G0}&response_type=code&show_dialog=true`,Y0=()=>m.jsxs(m.Fragment,{children:[m.jsxs("mainCompareText",{children:["Before we get into it... You need to ",m.jsx("span",{children:"login"})]}),m.jsx("a",{href:q0,children:m.jsx(B0,{text:"Spotify"})})]}),Q0="_musicBox_pcdl0_1",X0="_songItem_pcdl0_10",J0="_album_pcdl0_20",Z0="_vl_pcdl0_28",e1="_songInfo_pcdl0_35",Ha={musicBox:Q0,songItem:X0,album:J0,vl:Z0,songInfo:e1},t1="/assets/icon-mOQeaq1A.png";function Vh(){const e=[{key:"1",title:"Song 1",artist:"Artist 1",album:"Album 1",year:"2023"},{key:"2",title:"Song 2",artist:"Artist 2",album:"Album 2",year:"2023"},{key:"3",title:"Song 3",artist:"Artist 3",album:"Album 3",year:"2023"},{key:"3",title:"Song 4",artist:"Artist 4",album:"Album 4",year:"2023"},{key:"3",title:"Song 5",artist:"Artist 5",album:"Album 5",year:"2023"}];return m.jsx("div",{className:Ha.musicBox,children:e.map(t=>m.jsxs("div",{className:Ha.songItem,children:[m.jsx("img",{src:t1,className:Ha.album,alt:""}),m.jsx("div",{className:"vl"}),m.jsx("p",{children:t.title})]}))})}const n1=()=>{const{theme:e}=T.useContext(Bt);return m.jsxs("body",{className:e==="light"?"light":"dark",children:[m.jsxs("h1",{children:["Music For ",m.jsx("span",{children:"You"})]}),m.jsx(Vh,{}),m.jsxs("h1",{children:["Top Music",m.jsx("span",{children:"Today"})]}),m.jsx(Vh,{})]})},r1="_search_1902r_1",i1="_search__wrapper_1902r_10",s1="_search__input_1902r_20",o1="_search__results_list_1902r_32",a1="_search__results_list__result_1902r_43",l1="_search__results_list__result__image_1902r_47",u1="_search__results_list__result__title_1902r_52",c1="_search__result_1902r_32",h1="_dark_1902r_70",Lt={search:r1,search__wrapper:i1,search__input:s1,search__results_list:o1,search__results_list__result:a1,search__results_list__result__image:l1,search__results_list__result__title:u1,search__result:c1,dark:h1};function d1(e){return Qu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"},child:[]}]})(e)}const f1="f7edf86569454d63bed822956ad01312",p1="dcfd14461e9f4b63abacec673ce3dc55",g1=({setResults:e})=>{const[t,n]=T.useState(""),[r,i]=T.useState("");T.useEffect(()=>{var a={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials&client_id="+f1+"&client_secret="+p1};fetch("https://accounts.spotify.com/api/token",a).then(l=>l.json()).then(l=>i(l.access_token))},[]);async function s(){var a={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r}};await fetch("https://api.spotify.com/v1/search?q="+t+"&type=track",a).then(l=>l.json()).then(l=>{console.log(l.tracks.items),e(l.tracks.items)})}const{theme:o}=T.useContext(Bt);return m.jsxs("div",{className:`${Lt.search__wrapper} ${Lt[o]}`,children:[m.jsx(oo.Provider,{value:{color:"rgb(205, 205, 205)",size:25},children:m.jsx(d1,{})}),m.jsx("input",{className:Lt.search__input,placeholder:"Search",value:t,onChange:a=>n(a.target.value),onKeyDown:a=>{a.key==="Enter"&&s()}})]})},m1=({result:e})=>m.jsxs("div",{className:Lt.search__results_list__result,onClick:t=>alert("You clicked on "+e.name),children:[m.jsx("img",{src:e.album.images[1].url,className:Lt.search__results_list__result__image}),m.jsx("div",{className:Lt.search__results_list__result__title,children:e.name})]}),v1=({results:e})=>{const{theme:t}=T.useContext(Bt);return m.jsx("div",{className:`${Lt.search__results_list} ${Lt[t]}`,children:e.map((n,r)=>m.jsx(m1,{result:n},r))})},y1=()=>{const[e,t]=T.useState([]);return m.jsxs(m.Fragment,{children:[m.jsx("image",{src:""}),m.jsxs("div",{className:Lt.search,children:[m.jsx(g1,{setResults:t}),m.jsx(v1,{results:e})]})]})},_1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD7SURBVHgBrZPtDYIwFEVfO4EjOIKO4AY6gTiBwgLqAsAIuoEbyAa4gYzgfwh4rz4TQviI0JPcQKA9fa8FE4bh1hgTi8hMppNZa08WwpMjIZmXZRlbh8IfL0p93ogb6DlTmiBLJJNpZMgKuVF614fLqqquMo6rFkZSSufIE9kHQeDhepb/8IGHgrYU0meiKKpqAy7y3WMe3l0X7CJDNnqNEO/3wjYGeroa+exPhzCRWrt1YZtUtLoU39sabbGS5naw3ZW229pNs/0msUoXCCU8kAdyRA5dk6z0w4lpnucvVLcrikK0ukPfpKFKRzFU6WhpIm75/FE7h+IE8d/YS1C+/KLdHAAAAABJRU5ErkJggg==",w1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEHSURBVHgB7ZTBDYIwFIZfEc4ygm7gCD1xdgPjBEoYQLmZkIBugBt45iJHx3ADcQHwrynxSSghgSN/8ueV99qP15YgyKAoiqRt2xsM17ALF/ANDn3ff7atEW3JJEkOCEcy6whg2EzOmok4jndCiBNLqY4eeuzqKD3Pe2dZ9jB2ho4WCHd4oVNowD+z+l4F9pIl6kVdtzisLEvJQCkHafK5qqpL3SXmr3n9D4btrdjjhVqEOalh/j+MfmdCjuO8qF0Fg827YIP0vQB9gxJDybrLDWtUvd7eUxlndw2CIBU9vqleAjBU29zTCLIsa6dgLo0jd9QLmGATrAOW0zhKFWyLH96VhimHww9gS0usfJITqQAAAABJRU5ErkJggg==";var bh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},E1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},yp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,v=u&63;l||(v=64,o||(g=64)),r.push(n[c],n[d],n[g],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):E1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new I1;const g=s<<2|a>>4;if(r.push(g),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class I1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S1=function(e){const t=vp(e);return yp.encodeByteArray(t,!0)},uo=function(e){return S1(e).replace(/\./g,"")},_p=function(e){try{return yp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function T1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k1=()=>T1().__FIREBASE_DEFAULTS__,C1=()=>{if(typeof process>"u"||typeof bh>"u")return;const e=bh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},A1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&_p(e[1]);return t&&JSON.parse(t)},Xu=()=>{try{return k1()||C1()||A1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},wp=e=>{var t,n;return(n=(t=Xu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},P1=e=>{const t=wp(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ep=()=>{var e;return(e=Xu())===null||e===void 0?void 0:e.config},Ip=e=>{var t;return(t=Xu())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function N1(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[uo(JSON.stringify(n)),uo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function O1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Sp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function x1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function L1(){const e=Ie();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Tp(){try{return typeof indexedDB=="object"}catch{return!1}}function kp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function D1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="FirebaseError";class dt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=M1,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?$1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dt(i,a,r)}}function $1(e,t){return e.replace(j1,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const j1=/\{\$([^}]+)}/g;function U1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Si(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Hh(s)&&Hh(o)){if(!Si(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ri(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ii(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function F1(e,t){const n=new z1(e,t);return n.subscribe.bind(n)}class z1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");B1(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Wa),i.error===void 0&&(i.error=Wa),i.complete===void 0&&(i.complete=Wa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Wa(){}/**
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
 */const V1=1e3,b1=2,H1=4*60*60*1e3,W1=.5;function Wh(e,t=V1,n=b1){const r=t*Math.pow(n,e),i=Math.round(W1*r*(Math.random()-.5)*2);return Math.min(H1,r+i)}/**
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
 */function tt(e){return e&&e._delegate?e._delegate:e}class ut{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const kn="[DEFAULT]";/**
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
 */class K1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new R1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(q1(t))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=kn){return this.instances.has(t)}getOptions(t=kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:G1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=kn){return this.component?this.component.multipleInstances?t:kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function G1(e){return e===kn?void 0:e}function q1(e){return e.instantiationMode==="EAGER"}/**
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
 */class Y1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new K1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const Q1={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},X1=F.INFO,J1={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Z1=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=J1[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ea{constructor(t){this.name=t,this._logLevel=X1,this._logHandler=Z1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Q1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const e_=(e,t)=>t.some(n=>e instanceof n);let Kh,Gh;function t_(){return Kh||(Kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n_(){return Gh||(Gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cp=new WeakMap,xl=new WeakMap,Ap=new WeakMap,Ka=new WeakMap,Ju=new WeakMap;function r_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(sn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Cp.set(n,e)}).catch(()=>{}),Ju.set(t,e),t}function i_(e){if(xl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});xl.set(e,t)}let Ll={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return xl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ap.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function s_(e){Ll=e(Ll)}function o_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ga(this),t,...n);return Ap.set(r,t.sort?t.sort():[t]),sn(r)}:n_().includes(e)?function(...t){return e.apply(Ga(this),t),sn(Cp.get(this))}:function(...t){return sn(e.apply(Ga(this),t))}}function a_(e){return typeof e=="function"?o_(e):(e instanceof IDBTransaction&&i_(e),e_(e,t_())?new Proxy(e,Ll):e)}function sn(e){if(e instanceof IDBRequest)return r_(e);if(Ka.has(e))return Ka.get(e);const t=a_(e);return t!==e&&(Ka.set(e,t),Ju.set(t,e)),t}const Ga=e=>Ju.get(e);function Pp(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=sn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const l_=["get","getKey","getAll","getAllKeys","count"],u_=["put","add","delete","clear"],qa=new Map;function qh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(qa.get(t))return qa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=u_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||l_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qa.set(t,s),s}s_(e=>({...e,get:(t,n,r)=>qh(t,n)||e.get(t,n,r),has:(t,n)=>!!qh(t,n)||e.has(t,n)}));/**
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
 */class c_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(h_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function h_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Dl="@firebase/app",Yh="0.9.27";/**
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
 */const zn=new ea("@firebase/app"),d_="@firebase/app-compat",f_="@firebase/analytics-compat",p_="@firebase/analytics",g_="@firebase/app-check-compat",m_="@firebase/app-check",v_="@firebase/auth",y_="@firebase/auth-compat",__="@firebase/database",w_="@firebase/database-compat",E_="@firebase/functions",I_="@firebase/functions-compat",S_="@firebase/installations",T_="@firebase/installations-compat",k_="@firebase/messaging",C_="@firebase/messaging-compat",A_="@firebase/performance",P_="@firebase/performance-compat",R_="@firebase/remote-config",N_="@firebase/remote-config-compat",O_="@firebase/storage",x_="@firebase/storage-compat",L_="@firebase/firestore",D_="@firebase/firestore-compat",M_="firebase",$_="10.8.0";/**
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
 */const Ml="[DEFAULT]",j_={[Dl]:"fire-core",[d_]:"fire-core-compat",[p_]:"fire-analytics",[f_]:"fire-analytics-compat",[m_]:"fire-app-check",[g_]:"fire-app-check-compat",[v_]:"fire-auth",[y_]:"fire-auth-compat",[__]:"fire-rtdb",[w_]:"fire-rtdb-compat",[E_]:"fire-fn",[I_]:"fire-fn-compat",[S_]:"fire-iid",[T_]:"fire-iid-compat",[k_]:"fire-fcm",[C_]:"fire-fcm-compat",[A_]:"fire-perf",[P_]:"fire-perf-compat",[R_]:"fire-rc",[N_]:"fire-rc-compat",[O_]:"fire-gcs",[x_]:"fire-gcs-compat",[L_]:"fire-fst",[D_]:"fire-fst-compat","fire-js":"fire-js",[M_]:"fire-js-all"};/**
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
 */const co=new Map,$l=new Map;function U_(e,t){try{e.container.addComponent(t)}catch(n){zn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function St(e){const t=e.name;if($l.has(t))return zn.debug(`There were multiple attempts to register component ${t}.`),!1;$l.set(t,e);for(const n of co.values())U_(n,e);return!0}function Xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const F_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},on=new Qn("app","Firebase",F_);/**
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
 */class z_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const jr=$_;function Rp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ml,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=Ep()),!n)throw on.create("no-options");const s=co.get(i);if(s){if(Si(n,s.options)&&Si(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new Y1(i);for(const l of $l.values())o.addComponent(l);const a=new z_(n,r,o);return co.set(i,a),a}function Zu(e=Ml){const t=co.get(e);if(!t&&e===Ml&&Ep())return Rp();if(!t)throw on.create("no-app",{appName:e});return t}function Qe(e,t,n){var r;let i=(r=j_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zn.warn(a.join(" "));return}St(new ut(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const B_="firebase-heartbeat-database",V_=1,Ti="firebase-heartbeat-store";let Ya=null;function Np(){return Ya||(Ya=Pp(B_,V_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(e=>{throw on.create("idb-open",{originalErrorMessage:e.message})})),Ya}async function b_(e){try{const n=(await Np()).transaction(Ti),r=await n.objectStore(Ti).get(Op(e));return await n.done,r}catch(t){if(t instanceof dt)zn.warn(t.message);else{const n=on.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zn.warn(n.message)}}}async function Qh(e,t){try{const r=(await Np()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(t,Op(e)),await r.done}catch(n){if(n instanceof dt)zn.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function Op(e){return`${e.name}!${e.options.appId}`}/**
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
 */const H_=1024,W_=30*24*60*60*1e3;class K_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new q_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xh();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=W_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xh(),{heartbeatsToSend:r,unsentEntries:i}=G_(this._heartbeatsCache.heartbeats),s=uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xh(){return new Date().toISOString().substring(0,10)}function G_(e,t=H_){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jh(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class q_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tp()?kp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await b_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Jh(e){return uo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Y_(e){St(new ut("platform-logger",t=>new c_(t),"PRIVATE")),St(new ut("heartbeat",t=>new K_(t),"PRIVATE")),Qe(Dl,Yh,e),Qe(Dl,Yh,"esm2017"),Qe("fire-js","")}Y_("");var Q_="firebase",X_="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(Q_,X_,"app");const xp="@firebase/installations",ec="0.6.5";/**
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
 */const Lp=1e4,Dp=`w:${ec}`,Mp="FIS_v2",J_="https://firebaseinstallations.googleapis.com/v1",Z_=60*60*1e3,ew="installations",tw="Installations";/**
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
 */const nw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bn=new Qn(ew,tw,nw);function $p(e){return e instanceof dt&&e.code.includes("request-failed")}/**
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
 */function jp({projectId:e}){return`${J_}/projects/${e}/installations`}function Up(e){return{token:e.token,requestStatus:2,expiresIn:iw(e.expiresIn),creationTime:Date.now()}}async function Fp(e,t){const r=(await t.json()).error;return Bn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function rw(e,{refreshToken:t}){const n=zp(e);return n.append("Authorization",sw(t)),n}async function Bp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function iw(e){return Number(e.replace("s","000"))}function sw(e){return`${Mp} ${e}`}/**
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
 */async function ow({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=jp(e),i=zp(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Mp,appId:e.appId,sdkVersion:Dp},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Bp(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Up(u.authToken)}}else throw await Fp("Create Installation",l)}/**
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
 */function Vp(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function aw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const lw=/^[cdef][\w-]{21}$/,jl="";function uw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=cw(e);return lw.test(n)?n:jl}catch{return jl}}function cw(e){return aw(e).substr(0,22)}/**
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
 */function ta(e){return`${e.appName}!${e.appId}`}/**
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
 */const bp=new Map;function Hp(e,t){const n=ta(e);Wp(n,t),hw(n,t)}function Wp(e,t){const n=bp.get(e);if(n)for(const r of n)r(t)}function hw(e,t){const n=dw();n&&n.postMessage({key:e,fid:t}),fw()}let Rn=null;function dw(){return!Rn&&"BroadcastChannel"in self&&(Rn=new BroadcastChannel("[Firebase] FID Change"),Rn.onmessage=e=>{Wp(e.data.key,e.data.fid)}),Rn}function fw(){bp.size===0&&Rn&&(Rn.close(),Rn=null)}/**
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
 */const pw="firebase-installations-database",gw=1,Vn="firebase-installations-store";let Qa=null;function tc(){return Qa||(Qa=Pp(pw,gw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Vn)}}})),Qa}async function ho(e,t){const n=ta(e),i=(await tc()).transaction(Vn,"readwrite"),s=i.objectStore(Vn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Hp(e,t.fid),t}async function Kp(e){const t=ta(e),r=(await tc()).transaction(Vn,"readwrite");await r.objectStore(Vn).delete(t),await r.done}async function na(e,t){const n=ta(e),i=(await tc()).transaction(Vn,"readwrite"),s=i.objectStore(Vn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Hp(e,a.fid),a}/**
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
 */async function nc(e){let t;const n=await na(e.appConfig,r=>{const i=mw(r),s=vw(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===jl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function mw(e){const t=e||{fid:uw(),registrationStatus:0};return Gp(t)}function vw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Bn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=yw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_w(e)}:{installationEntry:t}}async function yw(e,t){try{const n=await ow(e,t);return ho(e.appConfig,n)}catch(n){throw $p(n)&&n.customData.serverCode===409?await Kp(e.appConfig):await ho(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function _w(e){let t=await Zh(e.appConfig);for(;t.registrationStatus===1;)await Vp(100),t=await Zh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await nc(e);return r||n}return t}function Zh(e){return na(e,t=>{if(!t)throw Bn.create("installation-not-found");return Gp(t)})}function Gp(e){return ww(e)?{fid:e.fid,registrationStatus:0}:e}function ww(e){return e.registrationStatus===1&&e.registrationTime+Lp<Date.now()}/**
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
 */async function Ew({appConfig:e,heartbeatServiceProvider:t},n){const r=Iw(e,n),i=rw(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Dp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Bp(()=>fetch(r,a));if(l.ok){const u=await l.json();return Up(u)}else throw await Fp("Generate Auth Token",l)}function Iw(e,{fid:t}){return`${jp(e)}/${t}/authTokens:generate`}/**
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
 */async function rc(e,t=!1){let n;const r=await na(e.appConfig,s=>{if(!qp(s))throw Bn.create("not-registered");const o=s.authToken;if(!t&&kw(o))return s;if(o.requestStatus===1)return n=Sw(e,t),s;{if(!navigator.onLine)throw Bn.create("app-offline");const a=Aw(s);return n=Tw(e,a),a}});return n?await n:r.authToken}async function Sw(e,t){let n=await ed(e.appConfig);for(;n.authToken.requestStatus===1;)await Vp(100),n=await ed(e.appConfig);const r=n.authToken;return r.requestStatus===0?rc(e,t):r}function ed(e){return na(e,t=>{if(!qp(t))throw Bn.create("not-registered");const n=t.authToken;return Pw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Tw(e,t){try{const n=await Ew(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ho(e.appConfig,r),n}catch(n){if($p(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Kp(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ho(e.appConfig,r)}throw n}}function qp(e){return e!==void 0&&e.registrationStatus===2}function kw(e){return e.requestStatus===2&&!Cw(e)}function Cw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Z_}function Aw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Pw(e){return e.requestStatus===1&&e.requestTime+Lp<Date.now()}/**
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
 */async function Rw(e){const t=e,{installationEntry:n,registrationPromise:r}=await nc(t);return r?r.catch(console.error):rc(t).catch(console.error),n.fid}/**
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
 */async function Nw(e,t=!1){const n=e;return await Ow(n),(await rc(n,t)).token}async function Ow(e){const{registrationPromise:t}=await nc(e);t&&await t}/**
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
 */function xw(e){if(!e||!e.options)throw Xa("App Configuration");if(!e.name)throw Xa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Xa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Xa(e){return Bn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="installations",Lw="installations-internal",Dw=e=>{const t=e.getProvider("app").getImmediate(),n=xw(t),r=Xn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Mw=e=>{const t=e.getProvider("app").getImmediate(),n=Xn(t,Yp).getImmediate();return{getId:()=>Rw(n),getToken:i=>Nw(n,i)}};function $w(){St(new ut(Yp,Dw,"PUBLIC")),St(new ut(Lw,Mw,"PRIVATE"))}$w();Qe(xp,ec);Qe(xp,ec,"esm2017");/**
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
 */const fo="analytics",jw="firebase_id",Uw="origin",Fw=60*1e3,zw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ic="https://www.googletagmanager.com/gtag/js";/**
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
 */const Oe=new ea("@firebase/analytics");/**
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
 */const Bw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ze=new Qn("analytics","Analytics",Bw);/**
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
 */function Vw(e){if(!e.startsWith(ic)){const t=ze.create("invalid-gtag-resource",{gtagURL:e});return Oe.warn(t.message),""}return e}function Qp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function bw(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Hw(e,t){const n=bw("firebase-js-sdk-policy",{createScriptURL:Vw}),r=document.createElement("script"),i=`${ic}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ww(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Kw(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await Qp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Oe.error(a)}e("config",i,s)}async function Gw(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Qp(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Oe.error(s)}}function qw(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await Gw(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await Kw(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){Oe.error(a)}}return i}function Yw(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=qw(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Qw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ic)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=30,Jw=1e3;class Zw{constructor(t={},n=Jw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Xp=new Zw;function eE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function tE(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:eE(r)},s=zw.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ze.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function nE(e,t=Xp,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ze.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ze.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new sE;return setTimeout(async()=>{a.abort()},n!==void 0?n:Fw),Jp({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Jp(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Xp){var s;const{appId:o,measurementId:a}=e;try{await rE(r,t)}catch(l){if(a)return Oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await tE(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!iE(u)){if(i.deleteThrottleMetadata(o),a)return Oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Wh(n,i.intervalMillis,Xw):Wh(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),Oe.debug(`Calling attemptFetch again in ${c} millis`),Jp(e,d,r,i)}}function rE(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(ze.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function iE(e){if(!(e instanceof dt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class sE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function oE(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(){if(Tp())try{await kp()}catch(e){return Oe.warn(ze.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Oe.warn(ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lE(e,t,n,r,i,s,o){var a;const l=nE(e);l.then(v=>{n[v.measurementId]=v.appId,e.options.measurementId&&v.measurementId!==e.options.measurementId&&Oe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Oe.error(v)),t.push(l);const u=aE().then(v=>{if(v)return r.getId()}),[c,d]=await Promise.all([l,u]);Qw(s)||Hw(s,c.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[Uw]="firebase",g.update=!0,d!=null&&(g[jw]=d),i("config",c.measurementId,g),c.measurementId}/**
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
 */class uE{constructor(t){this.app=t}_delete(){return delete hi[this.app.options.appId],Promise.resolve()}}let hi={},td=[];const nd={};let Ja="dataLayer",cE="gtag",rd,Zp,id=!1;function hE(){const e=[];if(Sp()&&e.push("This is a browser extension environment."),D1()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ze.create("invalid-analytics-context",{errorInfo:t});Oe.warn(n.message)}}function dE(e,t,n){hE();const r=e.options.appId;if(!r)throw ze.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ze.create("no-api-key");if(hi[r]!=null)throw ze.create("already-exists",{id:r});if(!id){Ww(Ja);const{wrappedGtag:s,gtagCore:o}=Yw(hi,td,nd,Ja,cE);Zp=s,rd=o,id=!0}return hi[r]=lE(e,td,nd,t,rd,Ja,n),new uE(e)}function fE(e=Zu()){e=tt(e);const t=Xn(e,fo);return t.isInitialized()?t.getImmediate():pE(e)}function pE(e,t={}){const n=Xn(e,fo);if(n.isInitialized()){const i=n.getImmediate();if(Si(t,n.getOptions()))return i;throw ze.create("already-initialized")}return n.initialize({options:t})}function gE(e,t,n,r){e=tt(e),oE(Zp,hi[e.app.options.appId],t,n,r).catch(i=>Oe.error(i))}const sd="@firebase/analytics",od="0.10.1";function mE(){St(new ut(fo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return dE(r,i,n)},"PUBLIC")),St(new ut("analytics-internal",e,"PRIVATE")),Qe(sd,od),Qe(sd,od,"esm2017");function e(t){try{const n=t.getProvider(fo).getImmediate();return{logEvent:(r,i,s)=>gE(n,r,i,s)}}catch(n){throw ze.create("interop-component-reg-failed",{reason:n})}}}mE();function sc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function eg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vE=eg,tg=new Qn("auth","Firebase",eg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new ea("@firebase/auth");function yE(e,...t){po.logLevel<=F.WARN&&po.warn(`Auth (${jr}): ${e}`,...t)}function Ks(e,...t){po.logLevel<=F.ERROR&&po.error(`Auth (${jr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,...t){throw oc(e,...t)}function _t(e,...t){return oc(e,...t)}function _E(e,t,n){const r=Object.assign(Object.assign({},vE()),{[t]:n});return new Qn("auth","Firebase",r).create(t,{appName:e.name})}function oc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return tg.create(e,...t)}function O(e,t,...n){if(!e)throw oc(t,...n)}function At(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ks(t),new Error(t)}function Mt(e,t){e||At(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function wE(){return ad()==="http:"||ad()==="https:"}function ad(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wE()||Sp()||"connection"in navigator)?navigator.onLine:!0}function IE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n){this.shortDelay=t,this.longDelay=n,Mt(n>t,"Short delay should be less than long delay!"),this.isMobile=O1()||x1()}get(){return EE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e,t){Mt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=new rs(3e4,6e4);function Vt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function bt(e,t,n,r,i={}){return rg(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ns(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ng.fetch()(ig(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function rg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},SE),t);try{const i=new CE(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ss(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ss(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ss(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ss(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _E(e,c,u);ct(e,c)}}catch(i){if(i instanceof dt)throw i;ct(e,"network-request-failed",{message:String(i)})}}async function is(e,t,n,r,i={}){const s=await bt(e,t,n,r,i);return"mfaPendingCredential"in s&&ct(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ig(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ac(e.config,i):`${e.config.apiScheme}://${i}`}function kE(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),TE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ss(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_t(e,t,r);return i.customData._tokenResponse=n,i}function ld(e){return e!==void 0&&e.enterprise!==void 0}class AE{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return kE(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function PE(e,t){return bt(e,"GET","/v2/recaptchaConfig",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(e,t){return bt(e,"POST","/v1/accounts:delete",t)}async function NE(e,t){return bt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function OE(e,t=!1){const n=tt(e),r=await n.getIdToken(t),i=lc(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:di(Za(i.auth_time)),issuedAtTime:di(Za(i.iat)),expirationTime:di(Za(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Za(e){return Number(e)*1e3}function lc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=_p(n);return i?JSON.parse(i):(Ks("Failed to decode base64 JWT payload"),null)}catch(i){return Ks("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xE(e){const t=lc(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof dt&&LE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function LE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function go(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ki(e,NE(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?jE(s.providerUserInfo):[],a=$E(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sg(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function ME(e){const t=tt(e);await go(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function $E(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function jE(e){return e.map(t=>{var{providerId:n}=t,r=sc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(e,t){const n=await rg(e,{},async()=>{const r=ns({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=ig(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ng.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FE(e,t){return bt(e,"POST","/v2/accounts:revokeToken",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):xE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await UE(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ci;return r&&(O(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ci,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class $n{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=sc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ki(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return OE(this,t)}reload(){return ME(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new $n(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ki(this,RE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:_,isAnonymous:S,providerData:P,stsTokenManager:R}=n;O(p&&R,t,"internal-error");const N=Ci.fromJSON(this.name,R);O(typeof p=="string",t,"internal-error"),Wt(d,t.name),Wt(g,t.name),O(typeof _=="boolean",t,"internal-error"),O(typeof S=="boolean",t,"internal-error"),Wt(v,t.name),Wt(y,t.name),Wt(w,t.name),Wt(k,t.name),Wt(f,t.name),Wt(h,t.name);const b=new $n({uid:p,auth:t,email:g,emailVerified:_,displayName:d,isAnonymous:S,photoURL:y,phoneNumber:v,tenantId:w,stsTokenManager:N,createdAt:f,lastLoginAt:h});return P&&Array.isArray(P)&&(b.providerData=P.map(M=>Object.assign({},M))),k&&(b._redirectEventId=k),b}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ci;i.updateFromServerResponse(n);const s=new $n({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await go(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new Map;function Pt(e){Mt(e instanceof Function,"Expected a class definition");let t=ud.get(e);return t?(Mt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ud.set(e,t),t)}/**
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
 */class og{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}og.type="NONE";const cd=og;/**
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
 */function Gs(e,t,n){return`firebase:${e}:${t}:${n}`}class mr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?$n._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new mr(Pt(cd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pt(cd);const o=Gs(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=$n._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new mr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new mr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ug(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ag(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(hg(t))return"Blackberry";if(dg(t))return"Webos";if(uc(t))return"Safari";if((t.includes("chrome/")||lg(t))&&!t.includes("edge/"))return"Chrome";if(cg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ag(e=Ie()){return/firefox\//i.test(e)}function uc(e=Ie()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function lg(e=Ie()){return/crios\//i.test(e)}function ug(e=Ie()){return/iemobile/i.test(e)}function cg(e=Ie()){return/android/i.test(e)}function hg(e=Ie()){return/blackberry/i.test(e)}function dg(e=Ie()){return/webos/i.test(e)}function ra(e=Ie()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function zE(e=Ie()){var t;return ra(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function BE(){return L1()&&document.documentMode===10}function fg(e=Ie()){return ra(e)||cg(e)||dg(e)||hg(e)||/windows phone/i.test(e)||ug(e)}function VE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(e,t=[]){let n;switch(e){case"Browser":n=hd(Ie());break;case"Worker":n=`${hd(Ie())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
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
 */class bE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function HE(e,t={}){return bt(e,"GET","/v2/passwordPolicy",Vt(e,t))}/**
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
 */const WE=6;class KE{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:WE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dd(this),this.idTokenSubscription=new dd(this),this.beforeStateQueue=new bE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await go(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=IE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?tt(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await HE(this),n=new KE(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Qn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FE(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Pt(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&yE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vn(e){return tt(e)}class dd{constructor(t){this.auth=t,this.observer=null,this.addObserver=F1(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qE(e){ia=e}function gg(e){return ia.loadJS(e)}function YE(){return ia.recaptchaEnterpriseScript}function QE(){return ia.gapiScript}function XE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const JE="recaptcha-enterprise",ZE="NO_RECAPTCHA";class eI{constructor(t){this.type=JE,this.auth=vn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{PE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new AE(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ld(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(ZE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ld(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=YE();l.length!==0&&(l+=a),gg(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function fd(e,t,n,r=!1){const i=new eI(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function mo(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await fd(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fd(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(e,t){const n=Xn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Si(s,t??{}))return i;ct(i,"already-initialized")}return n.initialize({options:t})}function nI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function rI(e,t,n){const r=vn(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=mg(t),{host:o,port:a}=iI(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sI()}function mg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function iI(e){const t=mg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pd(o)}}}function pd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function sI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(t){return At("not implemented")}_linkToIdToken(t,n){return At("not implemented")}_getReauthenticationResolver(t){return At("not implemented")}}async function oI(e,t){return bt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(e,t){return is(e,"POST","/v1/accounts:signInWithPassword",Vt(e,t))}async function lI(e,t){return bt(e,"POST","/v1/accounts:sendOobCode",Vt(e,t))}async function uI(e,t){return lI(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(e,t){return is(e,"POST","/v1/accounts:signInWithEmailLink",Vt(e,t))}async function hI(e,t){return is(e,"POST","/v1/accounts:signInWithEmailLink",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends cc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ai(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ai(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mo(t,n,"signInWithPassword",aI);case"emailLink":return cI(t,{email:this._email,oobCode:this._password});default:ct(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mo(t,r,"signUpPassword",oI);case"emailLink":return hI(t,{idToken:n,email:this._email,oobCode:this._password});default:ct(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(e,t){return is(e,"POST","/v1/accounts:signInWithIdp",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="http://localhost";class bn extends cc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=sc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return vr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,vr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,vr(t,n)}buildRequest(){const t={requestUri:dI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ns(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pI(e){const t=ri(ii(e)).link,n=t?ri(ii(t)).deep_link_id:null,r=ri(ii(e)).deep_link_id;return(r?ri(ii(r)).link:null)||r||n||t||e}class hc{constructor(t){var n,r,i,s,o,a;const l=ri(ii(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=fI((i=l.mode)!==null&&i!==void 0?i:null);O(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=pI(t);try{return new hc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.providerId=Ur.PROVIDER_ID}static credential(t,n){return Ai._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=hc.parseLink(n);return O(r,"argument-error"),Ai._fromEmailAndCode(t,r.code,r.tenantId)}}Ur.PROVIDER_ID="password";Ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ss extends vg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends ss{constructor(){super("facebook.com")}static credential(t){return bn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return bn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends ss{constructor(){super("github.com")}static credential(t){return bn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Xt.credential(t.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends ss{constructor(){super("twitter.com")}static credential(t,n){return bn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(e,t){return is(e,"POST","/v1/accounts:signUp",Vt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await $n._fromIdTokenResponse(t,r,i),o=gd(r);return new Hn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=gd(r);return new Hn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function gd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends dt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new vo(t,n,r,i)}}function yg(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vo._fromErrorAndOperation(e,s,t,r):s})}async function mI(e,t,n=!1){const r=await ki(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Hn._forOperation(e,"link",r)}/**
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
 */async function vI(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ki(e,yg(r,i,t,e),n);O(s.idToken,r,"internal-error");const o=lc(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(e.uid===a,r,"user-mismatch"),Hn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(e,t,n=!1){const r="signIn",i=await yg(e,r,t),s=await Hn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function yI(e,t){return _g(vn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(e,t,n){var r;O(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(e){const t=vn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function wI(e,t,n){const r=vn(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&_I(r,i,n),await mo(r,i,"getOobCode",uI)}async function EI(e,t,n){const r=vn(e),o=await mo(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&wg(e),l}),a=await Hn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function II(e,t,n){return yI(tt(e),Ur.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wg(e),r})}function SI(e,t,n,r){return tt(e).onIdTokenChanged(t,n,r)}function TI(e,t,n){return tt(e).beforeAuthStateChanged(t,n)}function kI(e,t,n,r){return tt(e).onAuthStateChanged(t,n,r)}function CI(e){return tt(e).signOut()}const yo="__sak";/**
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
 */class Eg{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(){const e=Ie();return uc(e)||ra(e)}const PI=1e3,RI=10;class Ig extends Eg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=AI()&&VE(),this.fallbackToPolling=fg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);BE()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,RI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},PI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ig.type="LOCAL";const NI=Ig;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg extends Eg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Sg.type="SESSION";const Tg=Sg;/**
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
 */function OI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new sa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await OI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class xI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=dc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function LI(e){wt().location.href=e}/**
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
 */function kg(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function DI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function $I(){return kg()?self:null}/**
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
 */const Cg="firebaseLocalStorageDb",jI=1,_o="firebaseLocalStorage",Ag="fbase_key";class os{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oa(e,t){return e.transaction([_o],t?"readwrite":"readonly").objectStore(_o)}function UI(){const e=indexedDB.deleteDatabase(Cg);return new os(e).toPromise()}function Fl(){const e=indexedDB.open(Cg,jI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(_o,{keyPath:Ag})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(_o)?t(r):(r.close(),await UI(),t(await Fl()))})})}async function md(e,t,n){const r=oa(e,!0).put({[Ag]:t,value:n});return new os(r).toPromise()}async function FI(e,t){const n=oa(e,!1).get(t),r=await new os(n).toPromise();return r===void 0?null:r.value}function vd(e,t){const n=oa(e,!0).delete(t);return new os(n).toPromise()}const zI=800,BI=3;class Pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>BI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sa._getInstance($I()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await DI(),!this.activeServiceWorker)return;this.sender=new xI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||MI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fl();return await md(t,yo,"1"),await vd(t,yo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>md(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>FI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>vd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=oa(i,!1).getAll();return new os(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pg.type="LOCAL";const VI=Pg;new rs(3e4,6e4);/**
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
 */function bI(e,t){return t?Pt(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class fc extends cc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return vr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return vr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return vr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function HI(e){return _g(e.auth,new fc(e),e.bypassAuthState)}function WI(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),vI(n,new fc(e),e.bypassAuthState)}async function KI(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),mI(n,new fc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return HI;case"linkViaPopup":case"linkViaRedirect":return KI;case"reauthViaPopup":case"reauthViaRedirect":return WI;default:ct(this.auth,"internal-error")}}resolve(t){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=new rs(2e3,1e4);class nr extends Rg{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const t=dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,GI.get())};t()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="pendingRedirect",qs=new Map;class YI extends Rg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=qs.get(this.auth._key());if(!t){try{const r=await QI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}qs.set(this.auth._key(),t)}return this.bypassAuthState||qs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QI(e,t){const n=ZI(t),r=JI(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function XI(e,t){qs.set(e._key(),t)}function JI(e){return Pt(e._redirectPersistence)}function ZI(e){return Gs(qI,e.config.apiKey,e.name)}async function eS(e,t,n=!1){const r=vn(e),i=bI(r,t),o=await new YI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=10*60*1e3;class nS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!rS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ng(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=tS&&this.cachedEventUids.clear(),this.cachedEventUids.has(yd(t))}saveEventToCache(t){this.cachedEventUids.add(yd(t)),this.lastProcessedEventTime=Date.now()}}function yd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ng({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function rS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ng(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(e,t={}){return bt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oS=/^https?/;async function aS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await iS(e);for(const n of t)try{if(lS(n))return}catch{}ct(e,"unauthorized-domain")}function lS(e){const t=Ul(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oS.test(n))return!1;if(sS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const uS=new rs(3e4,6e4);function _d(){const e=wt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function cS(e){return new Promise((t,n)=>{var r,i,s;function o(){_d(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_d(),n(_t(e,"network-request-failed"))},timeout:uS.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const a=XE("iframefcb");return wt()[a]=()=>{gapi.load?o():n(_t(e,"network-request-failed"))},gg(`${QE()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ys=null,t})}let Ys=null;function hS(e){return Ys=Ys||cS(e),Ys}/**
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
 */const dS=new rs(5e3,15e3),fS="__/auth/iframe",pS="emulator/auth/iframe",gS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vS(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ac(t,pS):`https://${e.config.authDomain}/${fS}`,r={apiKey:t.apiKey,appName:e.name,v:jr},i=mS.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ns(r).slice(1)}`}async function yS(e){const t=await hS(e),n=wt().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:vS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_t(e,"network-request-failed"),a=wt().setTimeout(()=>{s(o)},dS.get());function l(){wt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _S={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wS=500,ES=600,IS="_blank",SS="http://localhost";class wd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TS(e,t,n,r=wS,i=ES){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_S),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ie().toLowerCase();n&&(a=lg(u)?IS:n),ag(u)&&(t=t||SS,l.scrollbars="yes");const c=Object.entries(l).reduce((g,[v,y])=>`${g}${v}=${y},`,"");if(zE(u)&&a!=="_self")return kS(t||"",a),new wd(null);const d=window.open(t||"",a,c);O(d,e,"popup-blocked");try{d.focus()}catch{}return new wd(d)}function kS(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const CS="__/auth/handler",AS="emulator/auth/handler",PS=encodeURIComponent("fac");async function Ed(e,t,n,r,i,s){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:jr,eventId:i};if(t instanceof vg){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",U1(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(t instanceof ss){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${PS}=${encodeURIComponent(l)}`:"";return`${RS(e)}?${ns(a).slice(1)}${u}`}function RS({config:e}){return e.emulator?ac(e,AS):`https://${e.authDomain}/${CS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="webStorageSupport";class NS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tg,this._completeRedirectFn=eS,this._overrideRedirectResult=XI}async _openPopup(t,n,r,i){var s;Mt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ed(t,n,r,Ul(),i);return TS(t,o,dc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Ed(t,n,r,Ul(),i);return LI(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await yS(t),r=new nS(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(el,{type:el},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[el];o!==void 0&&n(!!o),ct(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return fg()||uc()||ra()}}const OS=NS;var Id="@firebase/auth",Sd="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DS(e){St(new ut("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pg(e)},u=new GE(r,i,s,l);return nI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),St(new ut("auth-internal",t=>{const n=vn(t.getProvider("auth").getImmediate());return(r=>new xS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Id,Sd,LS(e)),Qe(Id,Sd,"esm2017")}/**
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
 */const MS=5*60,$S=Ip("authIdTokenMaxAge")||MS;let Td=null;const jS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$S)return;const i=n==null?void 0:n.token;Td!==i&&(Td=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function US(e=Zu()){const t=Xn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=tI(e,{popupRedirectResolver:OS,persistence:[VI,NI,Tg]}),r=Ip("authTokenSyncURL");if(r){const s=jS(r);TI(n,s,()=>s(n.currentUser)),SI(n,o=>s(o))}const i=wp("auth");return i&&rI(n,`http://${i}`),n}function FS(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}qE({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=_t("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",FS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DS("Browser");var zS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,pc=pc||{},x=zS||self;function aa(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function as(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function BS(e){return Object.prototype.hasOwnProperty.call(e,tl)&&e[tl]||(e[tl]=++VS)}var tl="closure_uid_"+(1e9*Math.random()>>>0),VS=0;function bS(e,t,n){return e.call.apply(e.bind,arguments)}function HS(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function we(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?we=bS:we=HS,we.apply(null,arguments)}function Ts(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ce(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function yn(){this.s=this.s,this.o=this.o}var WS=0;yn.prototype.s=!1;yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),WS!=0)&&BS(this)};yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Og=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function gc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function kd(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(aa(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Ee(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var KS=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};x.addEventListener("test",n,t),x.removeEventListener("test",n,t)}catch{}return e}();function Pi(e){return/^[\s\xa0]*$/.test(e)}function la(){var e=x.navigator;return e&&(e=e.userAgent)?e:""}function gt(e){return la().indexOf(e)!=-1}function mc(e){return mc[" "](e),e}mc[" "]=function(){};function GS(e,t){var n=zT;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var qS=gt("Opera"),Ri=gt("Trident")||gt("MSIE"),xg=gt("Edge"),zl=xg||Ri,Lg=gt("Gecko")&&!(la().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge"))&&!(gt("Trident")||gt("MSIE"))&&!gt("Edge"),YS=la().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge");function Dg(){var e=x.document;return e?e.documentMode:void 0}e:{var Cd="",nl=function(){var e=la();if(Lg)return/rv:([^\);]+)(\)|;)/.exec(e);if(xg)return/Edge\/([\d\.]+)/.exec(e);if(Ri)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(YS)return/WebKit\/(\S+)/.exec(e);if(qS)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(nl&&(Cd=nl?nl[1]:""),Ri){var Ad=Dg();if(Ad!=null&&Ad>parseFloat(Cd))break e}}x.document&&Ri&&Dg();function Ni(e,t){if(Ee.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Lg){e:{try{mc(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:QS[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ni.$.h.call(this)}}ce(Ni,Ee);var QS={2:"touch",3:"pen",4:"mouse"};Ni.prototype.h=function(){Ni.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ls="closure_listenable_"+(1e6*Math.random()|0),XS=0;function JS(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++XS,this.fa=this.ia=!1}function ua(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function vc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ZS(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Mg(e){const t={};for(const n in e)t[n]=e[n];return t}const Pd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $g(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Pd.length;s++)n=Pd[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ca(e){this.src=e,this.g={},this.h=0}ca.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Vl(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new JS(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Bl(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Og(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ua(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Vl(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var yc="closure_lm_"+(1e6*Math.random()|0),rl={};function jg(e,t,n,r,i){if(r&&r.once)return Fg(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)jg(e,t[s],n,r,i);return null}return n=Ec(n),e&&e[ls]?e.O(t,n,as(r)?!!r.capture:!!r,i):Ug(e,t,n,!1,r,i)}function Ug(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=as(i)?!!i.capture:!!i,a=wc(e);if(a||(e[yc]=a=new ca(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=eT(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)KS||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Bg(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eT(){function e(n){return t.call(e.src,e.listener,n)}const t=tT;return e}function Fg(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Fg(e,t[s],n,r,i);return null}return n=Ec(n),e&&e[ls]?e.P(t,n,as(r)?!!r.capture:!!r,i):Ug(e,t,n,!0,r,i)}function zg(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)zg(e,t[s],n,r,i);else r=as(r)?!!r.capture:!!r,n=Ec(n),e&&e[ls]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Vl(s,n,r,i),-1<n&&(ua(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=wc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Vl(t,n,r,i)),(n=-1<e?t[e]:null)&&_c(n))}function _c(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ls])Bl(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Bg(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=wc(t))?(Bl(n,e),n.h==0&&(n.src=null,t[yc]=null)):ua(e)}}}function Bg(e){return e in rl?rl[e]:rl[e]="on"+e}function tT(e,t){if(e.fa)e=!0;else{t=new Ni(t,this);var n=e.listener,r=e.la||e.src;e.ia&&_c(e),e=n.call(r,t)}return e}function wc(e){return e=e[yc],e instanceof ca?e:null}var il="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ec(e){return typeof e=="function"?e:(e[il]||(e[il]=function(t){return e.handleEvent(t)}),e[il])}function ue(){yn.call(this),this.i=new ca(this),this.S=this,this.J=null}ce(ue,yn);ue.prototype[ls]=!0;ue.prototype.removeEventListener=function(e,t,n,r){zg(this,e,t,n,r)};function fe(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ee(t,e);else if(t instanceof Ee)t.target=t.target||e;else{var i=t;t=new Ee(r,e),$g(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ks(o,r,!0,t)&&i}if(o=t.g=e,i=ks(o,r,!0,t)&&i,i=ks(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ks(o,r,!1,t)&&i}ue.prototype.N=function(){if(ue.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ua(n[r]);delete e.g[t],e.h--}}this.J=null};ue.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ue.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ks(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bl(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ic=x.JSON.stringify;let nT=class{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}};function rT(){var e=Sc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}let iT=class{constructor(){this.h=this.g=null}add(t,n){const r=Vg.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}};var Vg=new nT(()=>new sT,e=>e.reset());let sT=class{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}};function oT(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function aT(e){x.setTimeout(()=>{throw e},0)}let Oi,xi=!1,Sc=new iT,bg=()=>{const e=x.Promise.resolve(void 0);Oi=()=>{e.then(lT)}};var lT=()=>{for(var e;e=rT();){try{e.h.call(e.g)}catch(n){aT(n)}var t=Vg;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}xi=!1};function ha(e,t){ue.call(this),this.h=e||1,this.g=t||x,this.j=we(this.qb,this),this.l=Date.now()}ce(ha,ue);I=ha.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),fe(this,"tick"),this.ga&&(Tc(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}I.N=function(){ha.$.N.call(this),Tc(this),delete this.g};function kc(e,t,n){if(typeof e=="function")n&&(e=we(e,n));else if(e&&typeof e.handleEvent=="function")e=we(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:x.setTimeout(e,t||0)}function Hg(e){e.g=kc(()=>{e.g=null,e.i&&(e.i=!1,Hg(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}let uT=class extends yn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Hg(this)}N(){super.N(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function Li(e){yn.call(this),this.h=e,this.g={}}ce(Li,yn);var Rd=[];function Wg(e,t,n,r){Array.isArray(n)||(n&&(Rd[0]=n.toString()),n=Rd);for(var i=0;i<n.length;i++){var s=jg(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Kg(e){vc(e.g,function(t,n){this.g.hasOwnProperty(n)&&_c(t)},e),e.g={}}Li.prototype.N=function(){Li.$.N.call(this),Kg(this)};Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function da(){this.g=!0}da.prototype.Ea=function(){this.g=!1};function cT(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function hT(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function rr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+fT(e,n)+(r?" "+r:"")})}function dT(e,t){e.info(function(){return"TIMEOUT: "+t})}da.prototype.info=function(){};function fT(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ic(n)}catch{return t}}var Fr={},Nd=null;function Cc(){return Nd=Nd||new ue}Fr.Ta="serverreachability";function Gg(e){Ee.call(this,Fr.Ta,e)}ce(Gg,Ee);function Di(e){const t=Cc();fe(t,new Gg(t))}Fr.STAT_EVENT="statevent";function qg(e,t){Ee.call(this,Fr.STAT_EVENT,e),this.stat=t}ce(qg,Ee);function ke(e){const t=Cc();fe(t,new qg(t,e))}Fr.Ua="timingevent";function Yg(e,t){Ee.call(this,Fr.Ua,e),this.size=t}ce(Yg,Ee);function us(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){e()},t)}var Ac={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Pc(){}Pc.prototype.h=null;function Od(e){return e.h||(e.h=e.i())}function gT(){}var cs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rc(){Ee.call(this,"d")}ce(Rc,Ee);function Nc(){Ee.call(this,"c")}ce(Nc,Ee);var bl;function fa(){}ce(fa,Pc);fa.prototype.g=function(){return new XMLHttpRequest};fa.prototype.i=function(){return{}};bl=new fa;function hs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Li(this),this.P=mT,e=zl?125:void 0,this.V=new ha(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Qg}function Qg(){this.i=null,this.g="",this.h=!1}var mT=45e3,Xg={},Hl={};I=hs.prototype;I.setTimeout=function(e){this.P=e};function Wl(e,t,n){e.L=1,e.A=ga($t(t)),e.u=n,e.S=!0,Jg(e,null)}function Jg(e,t){e.G=Date.now(),ds(e),e.B=$t(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),om(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Qg,e.g=Am(e.l,n?t:null,!e.u),0<e.O&&(e.M=new uT(we(e.Pa,e,e.g),e.O)),Wg(e.U,e.g,"readystatechange",e.nb),t=e.I?Mg(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Di(),cT(e.j,e.v,e.B,e.m,e.W,e.u)}I.nb=function(e){e=e.target;const t=this.M;t&&vt(e)==3?t.l():this.Pa(e)};I.Pa=function(e){try{if(e==this.g)e:{const c=vt(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||zl||this.g&&(this.h.h||this.g.ja()||Md(this.g)))){this.J||c!=4||t==7||(t==8||0>=d?Di(3):Di(2)),pa(this);var n=this.g.da();this.ca=n;t:if(Zg(this)){var r=Md(this.g);e="";var i=r.length,s=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),fi(this);var o="";break t}this.h.i=new x.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,hT(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pi(a)){var u=a;break t}}u=null}if(n=u)rr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kl(this,n);else{this.i=!1,this.s=3,ke(12),Nn(this),fi(this);break e}}this.S?(em(this,c,o),zl&&this.i&&c==3&&(Wg(this.U,this.V,"tick",this.mb),this.V.start())):(rr(this.j,this.m,o,null),Kl(this,o)),c==4&&Nn(this),this.i&&!this.J&&(c==4?Sm(this.l,this):(this.i=!1,ds(this)))}else jT(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Nn(this),fi(this)}}}catch{}finally{}};function Zg(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function em(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=vT(e,n),i==Hl){t==4&&(e.s=4,ke(14),r=!1),rr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Xg){e.s=4,ke(15),rr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else rr(e.j,e.m,i,null),Kl(e,i);Zg(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,ke(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$c(t),t.M=!0,ke(11))):(rr(e.j,e.m,n,"[Invalid Chunked Response]"),Nn(e),fi(e))}I.mb=function(){if(this.g){var e=vt(this.g),t=this.g.ja();this.o<t.length&&(pa(this),em(this,e,t),this.i&&e!=4&&ds(this))}};function vT(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Hl:(n=Number(t.substring(n,r)),isNaN(n)?Xg:(r+=1,r+n>t.length?Hl:(t=t.slice(r,r+n),e.o=r+n,t)))}I.cancel=function(){this.J=!0,Nn(this)};function ds(e){e.Y=Date.now()+e.P,tm(e,e.P)}function tm(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=us(we(e.lb,e),t)}function pa(e){e.C&&(x.clearTimeout(e.C),e.C=null)}I.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(dT(this.j,this.B),this.L!=2&&(Di(),ke(17)),Nn(this),this.s=2,fi(this)):tm(this,this.Y-e)};function fi(e){e.l.H==0||e.J||Sm(e.l,e)}function Nn(e){pa(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Tc(e.V),Kg(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Kl(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Gl(n.i,e))){if(!e.K&&Gl(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Io(n),_a(n);else break e;Mc(n),ke(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=us(we(n.ib,n),6e3));if(1>=um(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else On(n,11)}else if((e.K||n.g==e)&&Io(n),!Pi(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const v=e.g;if(v){const y=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Oc(s,s.h),s.h=null))}if(r.F){const w=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,W(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Cm(r,r.J?r.pa:null,r.Y),o.K){cm(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(pa(a),ds(a)),r.g=o}else Em(r);0<n.j.length&&wa(n)}else u[0]!="stop"&&u[0]!="close"||On(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?On(n,7):Dc(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Di(4)}catch{}}function yT(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(aa(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function _T(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(aa(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function nm(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(aa(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=_T(e),r=yT(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wT(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jn){this.h=e.h,wo(this,e.j),this.s=e.s,this.g=e.g,Eo(this,e.m),this.l=e.l;var t=e.i,n=new Mi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),xd(this,n),this.o=e.o}else e&&(t=String(e).match(rm))?(this.h=!1,wo(this,t[1]||"",!0),this.s=si(t[2]||""),this.g=si(t[3]||"",!0),Eo(this,t[4]),this.l=si(t[5]||"",!0),xd(this,t[6]||"",!0),this.o=si(t[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}jn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(oi(t,Ld,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(oi(t,Ld,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(oi(n,n.charAt(0)=="/"?ST:IT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",oi(n,kT)),e.join("")};function $t(e){return new jn(e)}function wo(e,t,n){e.j=n?si(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Eo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xd(e,t,n){t instanceof Mi?(e.i=t,CT(e.i,e.h)):(n||(t=oi(t,TT)),e.i=new Mi(t,e.h))}function W(e,t,n){e.i.set(t,n)}function ga(e){return W(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function si(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function oi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ET),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ET(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ld=/[#\/\?@]/g,IT=/[#\?:]/g,ST=/[#\?]/g,TT=/[#\?@]/g,kT=/#/g;function Mi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _n(e){e.g||(e.g=new Map,e.h=0,e.i&&wT(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}I=Mi.prototype;I.add=function(e,t){_n(this),this.i=null,e=zr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function im(e,t){_n(e),t=zr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function sm(e,t){return _n(e),t=zr(e,t),e.g.has(t)}I.forEach=function(e,t){_n(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};I.ta=function(){_n(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};I.Z=function(e){_n(this);let t=[];if(typeof e=="string")sm(this,e)&&(t=t.concat(this.g.get(zr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};I.set=function(e,t){return _n(this),this.i=null,e=zr(this,e),sm(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};I.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function om(e,t,n){im(e,t),0<n.length&&(e.i=null,e.g.set(zr(e,t),gc(n)),e.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function zr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function CT(e,t){t&&!e.j&&(_n(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(im(this,r),om(this,i,n))},e)),e.j=t}var AT=class{constructor(t,n){this.g=t,this.map=n}};function am(e){this.l=e||PT,x.PerformanceNavigationTiming?(e=x.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(x.g&&x.g.Ka&&x.g.Ka()&&x.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var PT=10;function lm(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function um(e){return e.h?1:e.g?e.g.size:0}function Gl(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Oc(e,t){e.g?e.g.add(t):e.h=t}function cm(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}am.prototype.cancel=function(){if(this.i=hm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function hm(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return gc(e.i)}var RT=class{stringify(t){return x.JSON.stringify(t,void 0)}parse(t){return x.JSON.parse(t,void 0)}};function NT(){this.g=new RT}function OT(e,t,n){const r=n||"";try{nm(e,function(i,s){let o=i;as(i)&&(o=Ic(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function xT(e,t){const n=new da;if(x.Image){const r=new Image;r.onload=Ts(Cs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ts(Cs,n,r,"TestLoadImage: error",!1,t),r.onabort=Ts(Cs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ts(Cs,n,r,"TestLoadImage: timeout",!1,t),x.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Cs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ma(e){this.l=e.ec||null,this.j=e.ob||!1}ce(ma,Pc);ma.prototype.g=function(){return new va(this.l,this.j)};ma.prototype.i=function(e){return function(){return e}}({});function va(e,t){ue.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=xc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ce(va,ue);var xc=0;I=va.prototype;I.open=function(e,t){if(this.readyState!=xc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,$i(this)};I.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||x).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fs(this)),this.readyState=xc};I.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dm(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function dm(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}I.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?fs(this):$i(this),this.readyState==3&&dm(this)}};I.Za=function(e){this.g&&(this.response=this.responseText=e,fs(this))};I.Ya=function(e){this.g&&(this.response=e,fs(this))};I.ka=function(){this.g&&fs(this)};function fs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,$i(e)}I.setRequestHeader=function(e,t){this.v.append(e,t)};I.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function $i(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var LT=x.JSON.parse;function ee(e){ue.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fm,this.L=this.M=!1}ce(ee,ue);var fm="",DT=/^https?$/i,MT=["POST","PUT"];I=ee.prototype;I.Oa=function(e){this.M=e};I.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bl.g(),this.C=this.u?Od(this.u):Od(bl),this.g.onreadystatechange=we(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Dd(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=x.FormData&&e instanceof x.FormData,!(0<=Og(MT,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mm(this),0<this.B&&((this.L=$T(this.g))?(this.g.timeout=this.B,this.g.ontimeout=we(this.ua,this)):this.A=kc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Dd(this,s)}};function $T(e){return Ri&&typeof e.timeout=="number"&&e.ontimeout!==void 0}I.ua=function(){typeof pc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fe(this,"timeout"),this.abort(8))};function Dd(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,pm(e),ya(e)}function pm(e){e.F||(e.F=!0,fe(e,"complete"),fe(e,"error"))}I.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,fe(this,"complete"),fe(this,"abort"),ya(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ya(this,!0)),ee.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?gm(this):this.kb())};I.kb=function(){gm(this)};function gm(e){if(e.h&&typeof pc<"u"&&(!e.C[1]||vt(e)!=4||e.da()!=2)){if(e.v&&vt(e)==4)kc(e.La,0,e);else if(fe(e,"readystatechange"),vt(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(rm)[1]||null;!i&&x.self&&x.self.location&&(i=x.self.location.protocol.slice(0,-1)),r=!DT.test(i?i.toLowerCase():"")}n=r}if(n)fe(e,"complete"),fe(e,"success");else{e.m=6;try{var s=2<vt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",pm(e)}}finally{ya(e)}}}}function ya(e,t){if(e.g){mm(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||fe(e,"ready");try{n.onreadystatechange=r}catch{}}}function mm(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(x.clearTimeout(e.A),e.A=null)}I.isActive=function(){return!!this.g};function vt(e){return e.g?e.g.readyState:0}I.da=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),LT(t)}};function Md(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case fm:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function jT(e){const t={};e=(e.g&&2<=vt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Pi(e[r]))continue;var n=oT(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}ZS(t,function(r){return r.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vm(e){let t="";return vc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Lc(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vm(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):W(e,t,n))}function Kr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ym(e){this.Ga=0,this.j=[],this.l=new da,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Kr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Kr("baseRetryDelayMs",5e3,e),this.hb=Kr("retryDelaySeedMs",1e4,e),this.eb=Kr("forwardChannelMaxRetries",2,e),this.xa=Kr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new am(e&&e.concurrentRequestLimit),this.Ja=new NT,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=ym.prototype;I.ra=8;I.H=1;function Dc(e){if(_m(e),e.H==3){var t=e.W++,n=$t(e.I);if(W(n,"SID",e.K),W(n,"RID",t),W(n,"TYPE","terminate"),ps(e,n),t=new hs(e,e.l,t),t.L=2,t.A=ga($t(n)),n=!1,x.navigator&&x.navigator.sendBeacon)try{n=x.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&x.Image&&(new Image().src=t.A,n=!0),n||(t.g=Am(t.l,null),t.g.ha(t.A)),t.G=Date.now(),ds(t)}km(e)}function _a(e){e.g&&($c(e),e.g.cancel(),e.g=null)}function _m(e){_a(e),e.u&&(x.clearTimeout(e.u),e.u=null),Io(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&x.clearTimeout(e.m),e.m=null)}function wa(e){if(!lm(e.i)&&!e.m){e.m=!0;var t=e.Na;Oi||bg(),xi||(Oi(),xi=!0),Sc.add(t,e),e.C=0}}function UT(e,t){return um(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=us(we(e.Na,e,t),Tm(e,e.C)),e.C++,!0)}I.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new hs(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Mg(s),$g(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=wm(this,i,t),n=$t(this.I),W(n,"RID",e),W(n,"CVER",22),this.F&&W(n,"X-HTTP-Session-Id",this.F),ps(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(vm(s)))+"&"+t:this.o&&Lc(n,this.o,s)),Oc(this.i,i),this.bb&&W(n,"TYPE","init"),this.P?(W(n,"$req",t),W(n,"SID","null"),i.aa=!0,Wl(i,n,null)):Wl(i,n,t),this.H=2}}else this.H==3&&(e?$d(this,e):this.j.length==0||lm(this.i)||$d(this))};function $d(e,t){var n;t?n=t.m:n=e.W++;const r=$t(e.I);W(r,"SID",e.K),W(r,"RID",n),W(r,"AID",e.V),ps(e,r),e.o&&e.s&&Lc(r,e.o,e.s),n=new hs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=wm(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Oc(e.i,n),Wl(n,r,t)}function ps(e,t){e.na&&vc(e.na,function(n,r){W(t,r,n)}),e.h&&nm({},function(n,r){W(t,r,n)})}function wm(e,t,n){n=Math.min(e.j.length,n);var r=e.h?we(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{OT(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Em(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Oi||bg(),xi||(Oi(),xi=!0),Sc.add(t,e),e.A=0}}function Mc(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=us(we(e.Ma,e),Tm(e,e.A)),e.A++,!0)}I.Ma=function(){if(this.u=null,Im(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=us(we(this.jb,this),e)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ke(10),_a(this),Im(this))};function $c(e){e.B!=null&&(x.clearTimeout(e.B),e.B=null)}function Im(e){e.g=new hs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);W(t,"RID","rpc"),W(t,"SID",e.K),W(t,"AID",e.V),W(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&W(t,"TO",e.qa),W(t,"TYPE","xmlhttp"),ps(e,t),e.o&&e.s&&Lc(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=ga($t(t)),n.u=null,n.S=!0,Jg(n,e)}I.ib=function(){this.v!=null&&(this.v=null,_a(this),Mc(this),ke(19))};function Io(e){e.v!=null&&(x.clearTimeout(e.v),e.v=null)}function Sm(e,t){var n=null;if(e.g==t){Io(e),$c(e),e.g=null;var r=2}else if(Gl(e.i,t))n=t.F,cm(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=Cc(),fe(r,new Yg(r,n)),wa(e)}else Em(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&UT(e,t)||r==2&&Mc(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:On(e,5);break;case 4:On(e,10);break;case 3:On(e,6);break;default:On(e,2)}}}function Tm(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function On(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=we(e.pb,e);n||(n=new jn("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||wo(n,"https"),ga(n)),xT(n.toString(),r)}else ke(2);e.H=0,e.h&&e.h.za(t),km(e),_m(e)}I.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ke(2)):(this.l.info("Failed to ping google.com"),ke(1))};function km(e){if(e.H=0,e.ma=[],e.h){const t=hm(e.i);(t.length!=0||e.j.length!=0)&&(kd(e.ma,t),kd(e.ma,e.j),e.i.i.length=0,gc(e.j),e.j.length=0),e.h.ya()}}function Cm(e,t,n){var r=n instanceof jn?$t(n):new jn(n);if(r.g!="")t&&(r.g=t+"."+r.g),Eo(r,r.m);else{var i=x.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new jn(null);r&&wo(s,r),t&&(s.g=t),i&&Eo(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&W(r,n,t),W(r,"VER",e.ra),ps(e,r),r}function Am(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new ee(new ma({ob:n})):new ee(e.va),t.Oa(e.J),t}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function Pm(){}I=Pm.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function Je(e,t){ue.call(this),this.g=new ym(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Pi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Pi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Br(this)}ce(Je,ue);Je.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ke(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Cm(e,null,e.Y),wa(e)};Je.prototype.close=function(){Dc(this.g)};Je.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ic(e),e=n);t.j.push(new AT(t.fb++,e)),t.H==3&&wa(t)};Je.prototype.N=function(){this.g.h=null,delete this.j,Dc(this.g),delete this.g,Je.$.N.call(this)};function Rm(e){Rc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ce(Rm,Rc);function Nm(){Nc.call(this),this.status=1}ce(Nm,Nc);function Br(e){this.g=e}ce(Br,Pm);Br.prototype.Ba=function(){fe(this.g,"a")};Br.prototype.Aa=function(e){fe(this.g,new Rm(e))};Br.prototype.za=function(e){fe(this.g,new Nm)};Br.prototype.ya=function(){fe(this.g,"b")};function FT(){this.blockSize=-1}function Tt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ce(Tt,FT);Tt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function sl(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Tt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)sl(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){sl(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){sl(this,r),i=0;break}}this.h=i,this.i+=t};Tt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function B(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var zT={};function jc(e){return-128<=e&&128>e?GS(e,function(t){return new B([t|0],0>t?-1:0)}):new B([e|0],0>e?-1:0)}function yt(e){if(isNaN(e)||!isFinite(e))return yr;if(0>e)return de(yt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ql;return new B(t,0)}function Om(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return de(Om(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yt(Math.pow(t,8)),r=yr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=yt(Math.pow(t,s)),r=r.R(s).add(yt(o))):(r=r.R(n),r=r.add(yt(o)))}return r}var ql=4294967296,yr=jc(0),Yl=jc(1),jd=jc(16777216);I=B.prototype;I.ea=function(){if(qe(this))return-de(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ql+r)*t,t*=ql}return e};I.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Rt(this))return"0";if(qe(this))return"-"+de(this).toString(e);for(var t=yt(Math.pow(e,6)),n=this,r="";;){var i=To(n,t).g;n=So(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Rt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};I.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Rt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function qe(e){return e.h==-1}I.X=function(e){return e=So(this,e),qe(e)?-1:Rt(e)?0:1};function de(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new B(n,~e.h).add(Yl)}I.abs=function(){return qe(this)?de(this):this};I.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new B(n,n[n.length-1]&-2147483648?-1:0)};function So(e,t){return e.add(de(t))}I.R=function(e){if(Rt(this)||Rt(e))return yr;if(qe(this))return qe(e)?de(this).R(de(e)):de(de(this).R(e));if(qe(e))return de(this.R(de(e)));if(0>this.X(jd)&&0>e.X(jd))return yt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,As(n,2*r+2*i),n[2*r+2*i+1]+=s*l,As(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,As(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,As(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new B(n,0)};function As(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Gr(e,t){this.g=e,this.h=t}function To(e,t){if(Rt(t))throw Error("division by zero");if(Rt(e))return new Gr(yr,yr);if(qe(e))return t=To(de(e),t),new Gr(de(t.g),de(t.h));if(qe(t))return t=To(e,de(t)),new Gr(de(t.g),t.h);if(30<e.g.length){if(qe(e)||qe(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Yl,r=t;0>=r.X(e);)n=Ud(n),r=Ud(r);var i=er(n,1),s=er(r,1);for(r=er(r,2),n=er(n,2);!Rt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=er(r,1),n=er(n,1)}return t=So(e,i.R(t)),new Gr(i,t)}for(i=yr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=yt(n),o=s.R(t);qe(o)||0<o.X(e);)n-=r,s=yt(n),o=s.R(t);Rt(s)&&(s=Yl),i=i.add(s),e=So(e,o)}return new Gr(i,e)}I.gb=function(e){return To(this,e).h};I.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new B(n,this.h&e.h)};I.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new B(n,this.h|e.h)};I.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new B(n,this.h^e.h)};function Ud(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new B(n,e.h)}function er(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new B(i,e.h)}Je.prototype.send=Je.prototype.u;Je.prototype.open=Je.prototype.m;Je.prototype.close=Je.prototype.close;Ac.NO_ERROR=0;Ac.TIMEOUT=8;Ac.HTTP_ERROR=6;pT.COMPLETE="complete";gT.EventType=cs;cs.OPEN="a";cs.CLOSE="b";cs.ERROR="c";cs.MESSAGE="d";ue.prototype.listen=ue.prototype.O;ee.prototype.listenOnce=ee.prototype.P;ee.prototype.getLastError=ee.prototype.Sa;ee.prototype.getLastErrorCode=ee.prototype.Ia;ee.prototype.getStatus=ee.prototype.da;ee.prototype.getResponseJson=ee.prototype.Wa;ee.prototype.getResponseText=ee.prototype.ja;ee.prototype.send=ee.prototype.ha;ee.prototype.setWithCredentials=ee.prototype.Oa;Tt.prototype.digest=Tt.prototype.l;Tt.prototype.reset=Tt.prototype.reset;Tt.prototype.update=Tt.prototype.j;B.prototype.add=B.prototype.add;B.prototype.multiply=B.prototype.R;B.prototype.modulo=B.prototype.gb;B.prototype.compare=B.prototype.X;B.prototype.toNumber=B.prototype.ea;B.prototype.toString=B.prototype.toString;B.prototype.getBits=B.prototype.D;B.fromNumber=yt;B.fromString=Om;var BT=B;const Fd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new ea("@firebase/firestore");function Ue(e,...t){if(Pr.logLevel<=F.DEBUG){const n=t.map(Fc);Pr.debug(`Firestore (${gs}): ${e}`,...n)}}function Uc(e,...t){if(Pr.logLevel<=F.ERROR){const n=t.map(Fc);Pr.error(`Firestore (${gs}): ${e}`,...n)}}function VT(e,...t){if(Pr.logLevel<=F.WARN){const n=t.map(Fc);Pr.warn(`Firestore (${gs}): ${e}`,...n)}}function Fc(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e="Unexpected state"){const t=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+e;throw Uc(t),new Error(t)}function Ql(e,t){e||ji()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends dt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ye.UNAUTHENTICATED))}shutdown(){}}class HT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WT{constructor(t){this.t=t,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _r,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _r)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ql(typeof r.accessToken=="string"),new xm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ql(t===null||typeof t=="string"),new ye(t)}}class KT{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GT{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new KT(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qT{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YT{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&Ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Ue("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{Ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ql(typeof n.token=="string"),this.R=n.token,new qT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=QT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,n,r){n===void 0?n=0:n>t.length&&ji(),r===void 0?r=t.length-n:r>t.length-n&&ji(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ko.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ko?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class We extends ko{construct(t,n,r){return new We(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new ne(te.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t){this.path=t}static fromPath(t){return new xn(We.fromString(t))}static fromName(t){return new xn(We.fromString(t).popFirst(5))}static empty(){return new xn(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&We.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return We.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new xn(new We(t.slice()))}}function Lm(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Co{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Co("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Co&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ek(e){return new ZT(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zd,j;(j=zd||(zd={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new BT([4294967295,4294967295],0);function ol(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&Ue("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new zc(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(te.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nk(e,t){if(Uc("AsyncQueue",`${t}: ${e}`),Lm(e))return new ne(te.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ye.UNAUTHENTICATED,this.clientId=XT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Ue("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Ue("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(te.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=nk(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function Dm(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(e,t,n){if(!n)throw new ne(te.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function sk(e,t,n,r){if(t===!0&&r===!0)throw new ne(te.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Vd(e){if(xn.isDocumentKey(e))throw new ne(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ok(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ji()}function ak(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ne(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ok(e);throw new ne(te.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new ne(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ne(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}sk("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dm((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ne(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ne(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ne(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Bc{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new ne(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bd(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bT;switch(r.type){case"firstParty":return new GT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bd.get(n);r&&(Ue("ComponentProvider","Removing Datastore"),Bd.delete(n),r.terminate())}(this),Promise.resolve()}}function lk(e,t,n,r={}){var i;const s=(e=ak(e,Bc))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&VT("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ye.MOCK_USER;else{a=N1(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ne(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ye(u)}e._authCredentials=new HT(new xm(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Vc(this.firestore,t,this._query)}}class Ea{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ea(this.firestore,t,this._key)}}class wr extends Vc{constructor(t,n,r){super(t,n,ek(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ea(this.firestore,null,new xn(t))}withConverter(t){return new wr(this.firestore,t,this._path)}}function uk(e,t,...n){if(e=tt(e),ik("collection","path",t),e instanceof Bc){const r=We.fromString(t,...n);return Vd(r),new wr(e,null,r)}{if(!(e instanceof Ea||e instanceof wr))throw new ne(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(We.fromString(t,...n));return Vd(r),new wr(e.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new tk(this,"async_queue_retry"),this._u=()=>{const n=ol();n&&Ue("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=ol();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=ol();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new _r;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Lm(t))throw t;Ue("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Uc("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const i=zc.createAndSchedule(this,t,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&ji()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class hk extends Bc{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new ck}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fk(this),this._firestoreClient.terminate()}}function dk(e,t){const n=typeof e=="object"?e:Zu(),r=typeof e=="string"?e:t||"(default)",i=Xn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=P1("firestore");s&&lk(i,...s)}return i}function fk(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new JT(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Dm(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new rk(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){gs=i})(jr),St(new ut("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new hk(new WT(r.getProvider("auth-internal")),new YT(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Qe(Fd,"4.4.2",t),Qe(Fd,"4.4.2","esm2017")})();const pk={apiKey:"AIzaSyCkNXBEFLJz0k7-ziRid0q7txTueFvZvVY",authDomain:"savor-wheaton.firebaseapp.com",projectId:"savor-wheaton",storageBucket:"savor-wheaton.appspot.com",messagingSenderId:"585056215654",appId:"1:585056215654:web:4f7536830547d0ff5143a7"},bc=Rp(pk);fE(bc);const qr=US(bc),gk=dk(bc);uk(gk,"Song");const Mm=xt.createContext();function mk(){return T.useContext(Mm)}function vk({children:e}){const[t,n]=T.useState(),[r,i]=T.useState(!0);function s(g,v){return EI(qr,g,v)}function o(g,v){return II(qr,g,v)}function a(){return CI(qr)}function l(g){return wI(qr,g)}function u(g){return u()}function c(g){return c()}T.useEffect(()=>kI(qr,v=>{n(v),i(!1)}),[]);const d={currentUser:t,login:o,logout:a,resetPassword:l,updateEmail:u,updatePassword:c,signup:s};return m.jsx(Mm.Provider,{value:d,children:!r&&e})}const yk=()=>{const[e,t]=T.useState(""),[n,r]=T.useState(""),{signup:i}=mk(),s=o=>{o.preventDefault(),i(e,n).then(a=>{console.log(a)}).catch(a=>{console.log(a)})};return m.jsxs("div",{className:"container",children:[m.jsxs("div",{className:"header",children:[m.jsx("div",{className:"text",children:"Sign Up"}),m.jsx("div",{className:"underline"})]}),m.jsxs("form",{onSubmit:s,className:"inputs",children:[m.jsxs("div",{className:"input",children:[m.jsx("img",{src:_1,alt:"",className:"icons"}),m.jsx("input",{type:"email",placeholder:"Enter your email",value:e,onChange:o=>t(o.target.value)})]}),m.jsxs("div",{className:"input",children:[m.jsx("img",{src:w1,alt:"",className:"icons"}),m.jsx("input",{className:"input",type:"password",placeholder:"Enter your password",value:n,onChange:o=>r(o.target.value)})]}),m.jsx("button",{className:"button",type:"submit",children:"Sign Up"})]})]})};function _k(){return m.jsx(m.Fragment,{children:m.jsx("div",{children:m.jsx(yk,{})})})}function wk(e){return Qu({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}const Ek=()=>{const[e,t]=T.useState(null),[n,r]=T.useState(null);return m.jsx(m.Fragment,{children:m.jsxs("div",{className:"Rankings",children:[[...Array(5)].map((i,s)=>{const o=s+1;return m.jsxs("label",{children:[m.jsx("input",{type:"radio",name:"rating",value:o,onClick:()=>t(o)}),m.jsx(wk,{className:"star",size:50,color:o<=(n||e)?"#ffc107":"#e4e5e9",onMouseEnter:()=>r(o),onMouseLeave:()=>r(null)})]})}),m.jsxs("p",{children:["Rating: ",e]})]})})};var $m={exports:{}},be={},jm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,L){var D=A.length;A.push(L);e:for(;0<D;){var J=D-1>>>1,oe=A[J];if(0<i(oe,L))A[J]=L,A[D]=oe,D=J;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var L=A[0],D=A.pop();if(D!==L){A[0]=D;e:for(var J=0,oe=A.length,ws=oe>>>1;J<ws;){var Sn=2*(J+1)-1,Va=A[Sn],Tn=Sn+1,Es=A[Tn];if(0>i(Va,D))Tn<oe&&0>i(Es,Va)?(A[J]=Es,A[Tn]=D,J=Tn):(A[J]=Va,A[Sn]=D,J=Sn);else if(Tn<oe&&0>i(Es,D))A[J]=Es,A[Tn]=D,J=Tn;else break e}}return L}function i(A,L){var D=A.sortIndex-L.sortIndex;return D!==0?D:A.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,g=3,v=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(A){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=A)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function _(A){if(w=!1,p(A),!y)if(n(l)!==null)y=!0,za(S);else{var L=n(u);L!==null&&Ba(_,L.startTime-A)}}function S(A,L){y=!1,w&&(w=!1,f(N),N=-1),v=!0;var D=g;try{for(p(L),d=n(l);d!==null&&(!(d.expirationTime>L)||A&&!nt());){var J=d.callback;if(typeof J=="function"){d.callback=null,g=d.priorityLevel;var oe=J(d.expirationTime<=L);L=e.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&r(l),p(L)}else r(l);d=n(l)}if(d!==null)var ws=!0;else{var Sn=n(u);Sn!==null&&Ba(_,Sn.startTime-L),ws=!1}return ws}finally{d=null,g=D,v=!1}}var P=!1,R=null,N=-1,b=5,M=-1;function nt(){return!(e.unstable_now()-M<b)}function Hr(){if(R!==null){var A=e.unstable_now();M=A;var L=!0;try{L=R(!0,A)}finally{L?Wr():(P=!1,R=null)}}else P=!1}var Wr;if(typeof h=="function")Wr=function(){h(Hr)};else if(typeof MessageChannel<"u"){var $h=new MessageChannel,Ky=$h.port2;$h.port1.onmessage=Hr,Wr=function(){Ky.postMessage(null)}}else Wr=function(){k(Hr,0)};function za(A){R=A,P||(P=!0,Wr())}function Ba(A,L){N=k(function(){A(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,za(S))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var D=g;g=L;try{return A()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,L){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var D=g;g=A;try{return L()}finally{g=D}},e.unstable_scheduleCallback=function(A,L,D){var J=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?J+D:J):D=J,A){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=D+oe,A={id:c++,callback:L,priorityLevel:A,startTime:D,expirationTime:oe,sortIndex:-1},D>J?(A.sortIndex=D,t(u,A),n(l)===null&&A===n(u)&&(w?(f(N),N=-1):w=!0,Ba(_,D-J))):(A.sortIndex=oe,t(l,A),y||v||(y=!0,za(S))),A},e.unstable_shouldYield=nt,e.unstable_wrapCallback=function(A){var L=g;return function(){var D=g;g=L;try{return A.apply(this,arguments)}finally{g=D}}}})(Um);jm.exports=Um;var Ik=jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=T,Ve=Ik;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zm=new Set,Ui={};function Jn(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(Ui[e]=t,e=0;e<t.length;e++)zm.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Sk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hd={},Wd={};function Tk(e){return Xl.call(Wd,e)?!0:Xl.call(Hd,e)?!1:Sk.test(e)?Wd[e]=!0:(Hd[e]=!0,!1)}function kk(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ck(e,t,n,r){if(t===null||typeof t>"u"||kk(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hc=/[\-:]([a-z])/g;function Wc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hc,Wc);ge[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hc,Wc);ge[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hc,Wc);ge[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kc(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ck(t,n,i,r)&&(n=null),r||i===null?Tk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ps=Symbol.for("react.element"),ir=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),Gc=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),Bm=Symbol.for("react.provider"),Vm=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),eu=Symbol.for("react.suspense_list"),Yc=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),bm=Symbol.for("react.offscreen"),Kd=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=Kd&&e[Kd]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,al;function ai(e){if(al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);al=t&&t[1]||""}return`
`+al+e}var ll=!1;function ul(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ai(e):""}function Ak(e){switch(e.tag){case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return ai("Suspense");case 19:return ai("SuspenseList");case 0:case 2:case 15:return e=ul(e.type,!1),e;case 11:return e=ul(e.type.render,!1),e;case 1:return e=ul(e.type,!0),e;default:return""}}function tu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sr:return"Fragment";case ir:return"Portal";case Jl:return"Profiler";case Gc:return"StrictMode";case Zl:return"Suspense";case eu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vm:return(e.displayName||"Context")+".Consumer";case Bm:return(e._context.displayName||"Context")+".Provider";case qc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yc:return t=e.displayName||null,t!==null?t:tu(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return tu(e(t))}catch{}}return null}function Pk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tu(t);case 8:return t===Gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rk(e){var t=Hm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rs(e){e._valueTracker||(e._valueTracker=Rk(e))}function Wm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nu(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Km(e,t){t=t.checked,t!=null&&Kc(e,"checked",t,!1)}function ru(e,t){Km(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?iu(e,t.type,n):t.hasOwnProperty("defaultValue")&&iu(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function iu(e,t,n){(t!=="number"||Ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var li=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function su(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(li(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function Gm(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ou(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ns,Ym=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ns=Ns||document.createElement("div"),Ns.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ns.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nk=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(e){Nk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pi[t]=pi[e]})});function Qm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pi.hasOwnProperty(e)&&pi[e]?(""+t).trim():t+"px"}function Xm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ok=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function au(e,t){if(t){if(Ok[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function lu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uu=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cu=null,Ir=null,Sr=null;function Xd(e){if(e=ys(e)){if(typeof cu!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ca(t),cu(e.stateNode,e.type,t))}}function Jm(e){Ir?Sr?Sr.push(e):Sr=[e]:Ir=e}function Zm(){if(Ir){var e=Ir,t=Sr;if(Sr=Ir=null,Xd(e),t)for(e=0;e<t.length;e++)Xd(t[e])}}function ev(e,t){return e(t)}function tv(){}var cl=!1;function nv(e,t,n){if(cl)return e(t,n);cl=!0;try{return ev(e,t,n)}finally{cl=!1,(Ir!==null||Sr!==null)&&(tv(),Zm())}}function zi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ca(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var hu=!1;if(jt)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{hu=!1}function xk(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var gi=!1,Po=null,Ro=!1,du=null,Lk={onError:function(e){gi=!0,Po=e}};function Dk(e,t,n,r,i,s,o,a,l){gi=!1,Po=null,xk.apply(Lk,arguments)}function Mk(e,t,n,r,i,s,o,a,l){if(Dk.apply(this,arguments),gi){if(gi){var u=Po;gi=!1,Po=null}else throw Error(E(198));Ro||(Ro=!0,du=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jd(e){if(Zn(e)!==e)throw Error(E(188))}function $k(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jd(i),e;if(s===r)return Jd(i),t;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function iv(e){return e=$k(e),e!==null?sv(e):null}function sv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sv(e);if(t!==null)return t;e=e.sibling}return null}var ov=Ve.unstable_scheduleCallback,Zd=Ve.unstable_cancelCallback,jk=Ve.unstable_shouldYield,Uk=Ve.unstable_requestPaint,Z=Ve.unstable_now,Fk=Ve.unstable_getCurrentPriorityLevel,Xc=Ve.unstable_ImmediatePriority,av=Ve.unstable_UserBlockingPriority,No=Ve.unstable_NormalPriority,zk=Ve.unstable_LowPriority,lv=Ve.unstable_IdlePriority,Ia=null,Et=null;function Bk(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ia,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Hk,Vk=Math.log,bk=Math.LN2;function Hk(e){return e>>>=0,e===0?32:31-(Vk(e)/bk|0)|0}var Os=64,xs=4194304;function ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ui(a):(s&=o,s!==0&&(r=ui(s)))}else o=n&~i,o!==0?r=ui(o):s!==0&&(r=ui(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),i=1<<n,r|=e[n],t&=~i;return r}function Wk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-at(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Wk(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function fu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uv(){var e=Os;return Os<<=1,!(Os&4194240)&&(Os=64),e}function hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ms(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function Gk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Jc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function cv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hv,Zc,dv,fv,pv,pu=!1,Ls=[],an=null,ln=null,un=null,Bi=new Map,Vi=new Map,Zt=[],qk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ef(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function Xr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ys(t),t!==null&&Zc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yk(e,t,n,r,i){switch(t){case"focusin":return an=Xr(an,e,t,n,r,i),!0;case"dragenter":return ln=Xr(ln,e,t,n,r,i),!0;case"mouseover":return un=Xr(un,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bi.set(s,Xr(Bi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vi.set(s,Xr(Vi.get(s)||null,e,t,n,r,i)),!0}return!1}function gv(e){var t=Ln(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=rv(n),t!==null){e.blockedOn=t,pv(e.priority,function(){dv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);uu=r,n.target.dispatchEvent(r),uu=null}else return t=ys(n),t!==null&&Zc(t),e.blockedOn=n,!1;t.shift()}return!0}function tf(e,t,n){Qs(e)&&n.delete(t)}function Qk(){pu=!1,an!==null&&Qs(an)&&(an=null),ln!==null&&Qs(ln)&&(ln=null),un!==null&&Qs(un)&&(un=null),Bi.forEach(tf),Vi.forEach(tf)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,pu||(pu=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Qk)))}function bi(e){function t(i){return Jr(i,e)}if(0<Ls.length){Jr(Ls[0],e);for(var n=1;n<Ls.length;n++){var r=Ls[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Jr(an,e),ln!==null&&Jr(ln,e),un!==null&&Jr(un,e),Bi.forEach(t),Vi.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)gv(n),n.blockedOn===null&&Zt.shift()}var Tr=Ht.ReactCurrentBatchConfig,xo=!0;function Xk(e,t,n,r){var i=z,s=Tr.transition;Tr.transition=null;try{z=1,eh(e,t,n,r)}finally{z=i,Tr.transition=s}}function Jk(e,t,n,r){var i=z,s=Tr.transition;Tr.transition=null;try{z=4,eh(e,t,n,r)}finally{z=i,Tr.transition=s}}function eh(e,t,n,r){if(xo){var i=gu(e,t,n,r);if(i===null)El(e,t,r,Lo,n),ef(e,r);else if(Yk(i,e,t,n,r))r.stopPropagation();else if(ef(e,r),t&4&&-1<qk.indexOf(e)){for(;i!==null;){var s=ys(i);if(s!==null&&hv(s),s=gu(e,t,n,r),s===null&&El(e,t,r,Lo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else El(e,t,r,null,n)}}var Lo=null;function gu(e,t,n,r){if(Lo=null,e=Qc(r),e=Ln(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lo=e,null}function mv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fk()){case Xc:return 1;case av:return 4;case No:case zk:return 16;case lv:return 536870912;default:return 16}default:return 16}}var tn=null,th=null,Xs=null;function vv(){if(Xs)return Xs;var e,t=th,n=t.length,r,i="value"in tn?tn.value:tn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Xs=i.slice(e,1<r?1-r:void 0)}function Js(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ds(){return!0}function nf(){return!1}function He(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ds:nf,this.isPropagationStopped=nf,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ds)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ds)},persist:function(){},isPersistent:Ds}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nh=He(Vr),vs=Q({},Vr,{view:0,detail:0}),Zk=He(vs),dl,fl,Zr,Sa=Q({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(dl=e.screenX-Zr.screenX,fl=e.screenY-Zr.screenY):fl=dl=0,Zr=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),rf=He(Sa),eC=Q({},Sa,{dataTransfer:0}),tC=He(eC),nC=Q({},vs,{relatedTarget:0}),pl=He(nC),rC=Q({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),iC=He(rC),sC=Q({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oC=He(sC),aC=Q({},Vr,{data:0}),sf=He(aC),lC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cC[e])?!!t[e]:!1}function rh(){return hC}var dC=Q({},vs,{key:function(e){if(e.key){var t=lC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rh,charCode:function(e){return e.type==="keypress"?Js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fC=He(dC),pC=Q({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=He(pC),gC=Q({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rh}),mC=He(gC),vC=Q({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yC=He(vC),_C=Q({},Sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wC=He(_C),EC=[9,13,27,32],ih=jt&&"CompositionEvent"in window,mi=null;jt&&"documentMode"in document&&(mi=document.documentMode);var IC=jt&&"TextEvent"in window&&!mi,yv=jt&&(!ih||mi&&8<mi&&11>=mi),af=" ",lf=!1;function _v(e,t){switch(e){case"keyup":return EC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function SC(e,t){switch(e){case"compositionend":return wv(t);case"keypress":return t.which!==32?null:(lf=!0,af);case"textInput":return e=t.data,e===af&&lf?null:e;default:return null}}function TC(e,t){if(or)return e==="compositionend"||!ih&&_v(e,t)?(e=vv(),Xs=th=tn=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yv&&t.locale!=="ko"?null:t.data;default:return null}}var kC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kC[e.type]:t==="textarea"}function Ev(e,t,n,r){Jm(r),t=Do(t,"onChange"),0<t.length&&(n=new nh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vi=null,Hi=null;function CC(e){xv(e,0)}function Ta(e){var t=ur(e);if(Wm(t))return e}function AC(e,t){if(e==="change")return t}var Iv=!1;if(jt){var gl;if(jt){var ml="oninput"in document;if(!ml){var cf=document.createElement("div");cf.setAttribute("oninput","return;"),ml=typeof cf.oninput=="function"}gl=ml}else gl=!1;Iv=gl&&(!document.documentMode||9<document.documentMode)}function hf(){vi&&(vi.detachEvent("onpropertychange",Sv),Hi=vi=null)}function Sv(e){if(e.propertyName==="value"&&Ta(Hi)){var t=[];Ev(t,Hi,e,Qc(e)),nv(CC,t)}}function PC(e,t,n){e==="focusin"?(hf(),vi=t,Hi=n,vi.attachEvent("onpropertychange",Sv)):e==="focusout"&&hf()}function RC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(Hi)}function NC(e,t){if(e==="click")return Ta(t)}function OC(e,t){if(e==="input"||e==="change")return Ta(t)}function xC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:xC;function Wi(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xl.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ff(e,t){var n=df(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=df(n)}}function Tv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kv(){for(var e=window,t=Ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ao(e.document)}return t}function sh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function LC(e){var t=kv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tv(n.ownerDocument.documentElement,n)){if(r!==null&&sh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ff(n,s);var o=ff(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var DC=jt&&"documentMode"in document&&11>=document.documentMode,ar=null,mu=null,yi=null,vu=!1;function pf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vu||ar==null||ar!==Ao(r)||(r=ar,"selectionStart"in r&&sh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yi&&Wi(yi,r)||(yi=r,r=Do(mu,"onSelect"),0<r.length&&(t=new nh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ar)))}function Ms(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionend:Ms("Transition","TransitionEnd")},vl={},Cv={};jt&&(Cv=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function ka(e){if(vl[e])return vl[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cv)return vl[e]=t[n];return e}var Av=ka("animationend"),Pv=ka("animationiteration"),Rv=ka("animationstart"),Nv=ka("transitionend"),Ov=new Map,gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){Ov.set(e,t),Jn(t,[e])}for(var yl=0;yl<gf.length;yl++){var _l=gf[yl],MC=_l.toLowerCase(),$C=_l[0].toUpperCase()+_l.slice(1);wn(MC,"on"+$C)}wn(Av,"onAnimationEnd");wn(Pv,"onAnimationIteration");wn(Rv,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Nv,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function mf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mk(r,t,void 0,e),e.currentTarget=null}function xv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mf(i,a,u),s=l}}}if(Ro)throw e=du,Ro=!1,du=null,e}function H(e,t){var n=t[Iu];n===void 0&&(n=t[Iu]=new Set);var r=e+"__bubble";n.has(r)||(Lv(t,e,2,!1),n.add(r))}function wl(e,t,n){var r=0;t&&(r|=4),Lv(n,e,r,t)}var $s="_reactListening"+Math.random().toString(36).slice(2);function Ki(e){if(!e[$s]){e[$s]=!0,zm.forEach(function(n){n!=="selectionchange"&&(jC.has(n)||wl(n,!1,e),wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$s]||(t[$s]=!0,wl("selectionchange",!1,t))}}function Lv(e,t,n,r){switch(mv(t)){case 1:var i=Xk;break;case 4:i=Jk;break;default:i=eh}n=i.bind(null,t,n,e),i=void 0,!hu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function El(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ln(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nv(function(){var u=s,c=Qc(n),d=[];e:{var g=Ov.get(e);if(g!==void 0){var v=nh,y=e;switch(e){case"keypress":if(Js(n)===0)break e;case"keydown":case"keyup":v=fC;break;case"focusin":y="focus",v=pl;break;case"focusout":y="blur",v=pl;break;case"beforeblur":case"afterblur":v=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=tC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=mC;break;case Av:case Pv:case Rv:v=iC;break;case Nv:v=yC;break;case"scroll":v=Zk;break;case"wheel":v=wC;break;case"copy":case"cut":case"paste":v=oC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=of}var w=(t&4)!==0,k=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var h=u,p;h!==null;){p=h;var _=p.stateNode;if(p.tag===5&&_!==null&&(p=_,f!==null&&(_=zi(h,f),_!=null&&w.push(Gi(h,_,p)))),k)break;h=h.return}0<w.length&&(g=new v(g,y,null,n,c),d.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==uu&&(y=n.relatedTarget||n.fromElement)&&(Ln(y)||y[Ut]))break e;if((v||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?Ln(y):null,y!==null&&(k=Zn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=rf,_="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=of,_="onPointerLeave",f="onPointerEnter",h="pointer"),k=v==null?g:ur(v),p=y==null?g:ur(y),g=new w(_,h+"leave",v,n,c),g.target=k,g.relatedTarget=p,_=null,Ln(c)===u&&(w=new w(f,h+"enter",y,n,c),w.target=p,w.relatedTarget=k,_=w),k=_,v&&y)t:{for(w=v,f=y,h=0,p=w;p;p=tr(p))h++;for(p=0,_=f;_;_=tr(_))p++;for(;0<h-p;)w=tr(w),h--;for(;0<p-h;)f=tr(f),p--;for(;h--;){if(w===f||f!==null&&w===f.alternate)break t;w=tr(w),f=tr(f)}w=null}else w=null;v!==null&&vf(d,g,v,w,!1),y!==null&&k!==null&&vf(d,k,y,w,!0)}}e:{if(g=u?ur(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=AC;else if(uf(g))if(Iv)S=OC;else{S=RC;var P=PC}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=NC);if(S&&(S=S(e,u))){Ev(d,S,n,c);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&iu(g,"number",g.value)}switch(P=u?ur(u):window,e){case"focusin":(uf(P)||P.contentEditable==="true")&&(ar=P,mu=u,yi=null);break;case"focusout":yi=mu=ar=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,pf(d,n,c);break;case"selectionchange":if(DC)break;case"keydown":case"keyup":pf(d,n,c)}var R;if(ih)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else or?_v(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(yv&&n.locale!=="ko"&&(or||N!=="onCompositionStart"?N==="onCompositionEnd"&&or&&(R=vv()):(tn=c,th="value"in tn?tn.value:tn.textContent,or=!0)),P=Do(u,N),0<P.length&&(N=new sf(N,e,null,n,c),d.push({event:N,listeners:P}),R?N.data=R:(R=wv(n),R!==null&&(N.data=R)))),(R=IC?SC(e,n):TC(e,n))&&(u=Do(u,"onBeforeInput"),0<u.length&&(c=new sf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}xv(d,t)})}function Gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Do(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zi(e,n),s!=null&&r.unshift(Gi(e,s,i)),s=zi(e,t),s!=null&&r.push(Gi(e,s,i))),e=e.return}return r}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vf(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=zi(n,s),l!=null&&o.unshift(Gi(n,l,a))):i||(l=zi(n,s),l!=null&&o.push(Gi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var UC=/\r\n?/g,FC=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(UC,`
`).replace(FC,"")}function js(e,t,n){if(t=yf(t),yf(e)!==t&&n)throw Error(E(425))}function Mo(){}var yu=null,_u=null;function wu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,zC=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,BC=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(e){return _f.resolve(null).then(e).catch(VC)}:Eu;function VC(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),bi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bi(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),mt="__reactFiber$"+br,qi="__reactProps$"+br,Ut="__reactContainer$"+br,Iu="__reactEvents$"+br,bC="__reactListeners$"+br,HC="__reactHandles$"+br;function Ln(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wf(e);e!==null;){if(n=e[mt])return n;e=wf(e)}return t}e=n,n=e.parentNode}return null}function ys(e){return e=e[mt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ca(e){return e[qi]||null}var Su=[],cr=-1;function En(e){return{current:e}}function K(e){0>cr||(e.current=Su[cr],Su[cr]=null,cr--)}function V(e,t){cr++,Su[cr]=e.current,e.current=t}var mn={},Se=En(mn),xe=En(!1),Wn=mn;function Nr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function $o(){K(xe),K(Se)}function Ef(e,t,n){if(Se.current!==mn)throw Error(E(168));V(Se,t),V(xe,n)}function Dv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Pk(e)||"Unknown",i));return Q({},n,r)}function jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Wn=Se.current,V(Se,e),V(xe,xe.current),!0}function If(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Dv(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,K(xe),K(Se),V(Se,e)):K(xe),V(xe,n)}var Ct=null,Aa=!1,Sl=!1;function Mv(e){Ct===null?Ct=[e]:Ct.push(e)}function WC(e){Aa=!0,Mv(e)}function In(){if(!Sl&&Ct!==null){Sl=!0;var e=0,t=z;try{var n=Ct;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,Aa=!1}catch(i){throw Ct!==null&&(Ct=Ct.slice(e+1)),ov(Xc,In),i}finally{z=t,Sl=!1}}return null}var hr=[],dr=0,Uo=null,Fo=0,Ke=[],Ge=0,Kn=null,Nt=1,Ot="";function Cn(e,t){hr[dr++]=Fo,hr[dr++]=Uo,Uo=e,Fo=t}function $v(e,t,n){Ke[Ge++]=Nt,Ke[Ge++]=Ot,Ke[Ge++]=Kn,Kn=e;var r=Nt;e=Ot;var i=32-at(r)-1;r&=~(1<<i),n+=1;var s=32-at(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nt=1<<32-at(t)+i|n<<i|r,Ot=s+e}else Nt=1<<s|n<<i|r,Ot=e}function oh(e){e.return!==null&&(Cn(e,1),$v(e,1,0))}function ah(e){for(;e===Uo;)Uo=hr[--dr],hr[dr]=null,Fo=hr[--dr],hr[dr]=null;for(;e===Kn;)Kn=Ke[--Ge],Ke[Ge]=null,Ot=Ke[--Ge],Ke[Ge]=null,Nt=Ke[--Ge],Ke[Ge]=null}var Be=null,Fe=null,G=!1,ot=null;function jv(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Fe=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kn!==null?{id:Nt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Fe=null,!0):!1;default:return!1}}function Tu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ku(e){if(G){var t=Fe;if(t){var n=t;if(!Sf(e,t)){if(Tu(e))throw Error(E(418));t=cn(n.nextSibling);var r=Be;t&&Sf(e,t)?jv(r,n):(e.flags=e.flags&-4097|2,G=!1,Be=e)}}else{if(Tu(e))throw Error(E(418));e.flags=e.flags&-4097|2,G=!1,Be=e}}}function Tf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Us(e){if(e!==Be)return!1;if(!G)return Tf(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wu(e.type,e.memoizedProps)),t&&(t=Fe)){if(Tu(e))throw Uv(),Error(E(418));for(;t;)jv(e,t),t=cn(t.nextSibling)}if(Tf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Be?cn(e.stateNode.nextSibling):null;return!0}function Uv(){for(var e=Fe;e;)e=cn(e.nextSibling)}function Or(){Fe=Be=null,G=!1}function lh(e){ot===null?ot=[e]:ot.push(e)}var KC=Ht.ReactCurrentBatchConfig;function it(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var zo=En(null),Bo=null,fr=null,uh=null;function ch(){uh=fr=Bo=null}function hh(e){var t=zo.current;K(zo),e._currentValue=t}function Cu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){Bo=e,uh=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(uh!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(Bo===null)throw Error(E(308));fr=e,Bo.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var Dn=null;function dh(e){Dn===null?Dn=[e]:Dn.push(e)}function Fv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,dh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function fh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ft(e,n)}return i=r.interleaved,i===null?(t.next=t,dh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ft(e,n)}function Zs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jc(e,n)}}function kf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vo(e,t,n,r){var i=e.updateQueue;qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var g=a.lane,v=a.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(v,d,g);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,d,g):y,g==null)break e;d=Q({},d,g);break e;case 2:qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);qn|=o,e.lanes=o,e.memoizedState=d}}function Cf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Bv=new Fm.Component().refs;function Au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pa={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=fn(e),s=Dt(r,i);s.payload=t,n!=null&&(s.callback=n),t=hn(e,s,i),t!==null&&(lt(t,e,i,r),Zs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=fn(e),s=Dt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=hn(e,s,i),t!==null&&(lt(t,e,i,r),Zs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=fn(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(lt(t,e,r,n),Zs(t,e,r))}};function Af(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Wi(n,r)||!Wi(i,s):!0}function Vv(e,t,n){var r=!1,i=mn,s=t.contextType;return typeof s=="object"&&s!==null?s=Ze(s):(i=Le(t)?Wn:Se.current,r=t.contextTypes,s=(r=r!=null)?Nr(e,i):mn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Pf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pa.enqueueReplaceState(t,t.state,null)}function Pu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Bv,fh(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ze(s):(s=Le(t)?Wn:Se.current,i.context=Nr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Au(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pa.enqueueReplaceState(i,i.state,null),Vo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ei(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Bv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Fs(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rf(e){var t=e._init;return t(e._payload)}function bv(e){function t(f,h){if(e){var p=f.deletions;p===null?(f.deletions=[h],f.flags|=16):p.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=pn(f,h),f.index=0,f.sibling=null,f}function s(f,h,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<h?(f.flags|=2,h):p):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,h,p,_){return h===null||h.tag!==6?(h=Nl(p,f.mode,_),h.return=f,h):(h=i(h,p),h.return=f,h)}function l(f,h,p,_){var S=p.type;return S===sr?c(f,h,p.props.children,_,p.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gt&&Rf(S)===h.type)?(_=i(h,p.props),_.ref=ei(f,h,p),_.return=f,_):(_=so(p.type,p.key,p.props,null,f.mode,_),_.ref=ei(f,h,p),_.return=f,_)}function u(f,h,p,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=Ol(p,f.mode,_),h.return=f,h):(h=i(h,p.children||[]),h.return=f,h)}function c(f,h,p,_,S){return h===null||h.tag!==7?(h=Fn(p,f.mode,_,S),h.return=f,h):(h=i(h,p),h.return=f,h)}function d(f,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Nl(""+h,f.mode,p),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ps:return p=so(h.type,h.key,h.props,null,f.mode,p),p.ref=ei(f,null,h),p.return=f,p;case ir:return h=Ol(h,f.mode,p),h.return=f,h;case Gt:var _=h._init;return d(f,_(h._payload),p)}if(li(h)||Yr(h))return h=Fn(h,f.mode,p,null),h.return=f,h;Fs(f,h)}return null}function g(f,h,p,_){var S=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,h,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ps:return p.key===S?l(f,h,p,_):null;case ir:return p.key===S?u(f,h,p,_):null;case Gt:return S=p._init,g(f,h,S(p._payload),_)}if(li(p)||Yr(p))return S!==null?null:c(f,h,p,_,null);Fs(f,p)}return null}function v(f,h,p,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(p)||null,a(h,f,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ps:return f=f.get(_.key===null?p:_.key)||null,l(h,f,_,S);case ir:return f=f.get(_.key===null?p:_.key)||null,u(h,f,_,S);case Gt:var P=_._init;return v(f,h,p,P(_._payload),S)}if(li(_)||Yr(_))return f=f.get(p)||null,c(h,f,_,S,null);Fs(h,_)}return null}function y(f,h,p,_){for(var S=null,P=null,R=h,N=h=0,b=null;R!==null&&N<p.length;N++){R.index>N?(b=R,R=null):b=R.sibling;var M=g(f,R,p[N],_);if(M===null){R===null&&(R=b);break}e&&R&&M.alternate===null&&t(f,R),h=s(M,h,N),P===null?S=M:P.sibling=M,P=M,R=b}if(N===p.length)return n(f,R),G&&Cn(f,N),S;if(R===null){for(;N<p.length;N++)R=d(f,p[N],_),R!==null&&(h=s(R,h,N),P===null?S=R:P.sibling=R,P=R);return G&&Cn(f,N),S}for(R=r(f,R);N<p.length;N++)b=v(R,f,N,p[N],_),b!==null&&(e&&b.alternate!==null&&R.delete(b.key===null?N:b.key),h=s(b,h,N),P===null?S=b:P.sibling=b,P=b);return e&&R.forEach(function(nt){return t(f,nt)}),G&&Cn(f,N),S}function w(f,h,p,_){var S=Yr(p);if(typeof S!="function")throw Error(E(150));if(p=S.call(p),p==null)throw Error(E(151));for(var P=S=null,R=h,N=h=0,b=null,M=p.next();R!==null&&!M.done;N++,M=p.next()){R.index>N?(b=R,R=null):b=R.sibling;var nt=g(f,R,M.value,_);if(nt===null){R===null&&(R=b);break}e&&R&&nt.alternate===null&&t(f,R),h=s(nt,h,N),P===null?S=nt:P.sibling=nt,P=nt,R=b}if(M.done)return n(f,R),G&&Cn(f,N),S;if(R===null){for(;!M.done;N++,M=p.next())M=d(f,M.value,_),M!==null&&(h=s(M,h,N),P===null?S=M:P.sibling=M,P=M);return G&&Cn(f,N),S}for(R=r(f,R);!M.done;N++,M=p.next())M=v(R,f,N,M.value,_),M!==null&&(e&&M.alternate!==null&&R.delete(M.key===null?N:M.key),h=s(M,h,N),P===null?S=M:P.sibling=M,P=M);return e&&R.forEach(function(Hr){return t(f,Hr)}),G&&Cn(f,N),S}function k(f,h,p,_){if(typeof p=="object"&&p!==null&&p.type===sr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ps:e:{for(var S=p.key,P=h;P!==null;){if(P.key===S){if(S=p.type,S===sr){if(P.tag===7){n(f,P.sibling),h=i(P,p.props.children),h.return=f,f=h;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gt&&Rf(S)===P.type){n(f,P.sibling),h=i(P,p.props),h.ref=ei(f,P,p),h.return=f,f=h;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===sr?(h=Fn(p.props.children,f.mode,_,p.key),h.return=f,f=h):(_=so(p.type,p.key,p.props,null,f.mode,_),_.ref=ei(f,h,p),_.return=f,f=_)}return o(f);case ir:e:{for(P=p.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(f,h.sibling),h=i(h,p.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=Ol(p,f.mode,_),h.return=f,f=h}return o(f);case Gt:return P=p._init,k(f,h,P(p._payload),_)}if(li(p))return y(f,h,p,_);if(Yr(p))return w(f,h,p,_);Fs(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,p),h.return=f,f=h):(n(f,h),h=Nl(p,f.mode,_),h.return=f,f=h),o(f)):n(f,h)}return k}var xr=bv(!0),Hv=bv(!1),_s={},It=En(_s),Yi=En(_s),Qi=En(_s);function Mn(e){if(e===_s)throw Error(E(174));return e}function ph(e,t){switch(V(Qi,t),V(Yi,e),V(It,_s),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ou(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ou(t,e)}K(It),V(It,t)}function Lr(){K(It),K(Yi),K(Qi)}function Wv(e){Mn(Qi.current);var t=Mn(It.current),n=ou(t,e.type);t!==n&&(V(Yi,e),V(It,n))}function gh(e){Yi.current===e&&(K(It),K(Yi))}var q=En(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tl=[];function mh(){for(var e=0;e<Tl.length;e++)Tl[e]._workInProgressVersionPrimary=null;Tl.length=0}var eo=Ht.ReactCurrentDispatcher,kl=Ht.ReactCurrentBatchConfig,Gn=0,Y=null,ie=null,ae=null,Ho=!1,_i=!1,Xi=0,GC=0;function me(){throw Error(E(321))}function vh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function yh(e,t,n,r,i,s){if(Gn=s,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,eo.current=e===null||e.memoizedState===null?XC:JC,e=n(r,i),_i){s=0;do{if(_i=!1,Xi=0,25<=s)throw Error(E(301));s+=1,ae=ie=null,t.updateQueue=null,eo.current=ZC,e=n(r,i)}while(_i)}if(eo.current=Wo,t=ie!==null&&ie.next!==null,Gn=0,ae=ie=Y=null,Ho=!1,t)throw Error(E(300));return e}function _h(){var e=Xi!==0;return Xi=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Y.memoizedState=ae=e:ae=ae.next=e,ae}function et(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?Y.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(E(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?Y.memoizedState=ae=e:ae=ae.next=e}return ae}function Ji(e,t){return typeof t=="function"?t(e):t}function Cl(e){var t=et(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Gn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Y.lanes|=c,qn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ht(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Y.lanes|=s,qn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=et(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ht(s,t.memoizedState)||(Ne=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Kv(){}function Gv(e,t){var n=Y,r=et(),i=t(),s=!ht(r.memoizedState,i);if(s&&(r.memoizedState=i,Ne=!0),r=r.queue,wh(Qv.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Zi(9,Yv.bind(null,n,r,i,t),void 0,null),le===null)throw Error(E(349));Gn&30||qv(n,t,i)}return i}function qv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yv(e,t,n,r){t.value=n,t.getSnapshot=r,Xv(t)&&Jv(e)}function Qv(e,t,n){return n(function(){Xv(t)&&Jv(e)})}function Xv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Jv(e){var t=Ft(e,1);t!==null&&lt(t,e,1,-1)}function Nf(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},t.queue=e,e=e.dispatch=QC.bind(null,Y,e),[t.memoizedState,e]}function Zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zv(){return et().memoizedState}function to(e,t,n,r){var i=pt();Y.flags|=e,i.memoizedState=Zi(1|t,n,void 0,r===void 0?null:r)}function Ra(e,t,n,r){var i=et();r=r===void 0?null:r;var s=void 0;if(ie!==null){var o=ie.memoizedState;if(s=o.destroy,r!==null&&vh(r,o.deps)){i.memoizedState=Zi(t,n,s,r);return}}Y.flags|=e,i.memoizedState=Zi(1|t,n,s,r)}function Of(e,t){return to(8390656,8,e,t)}function wh(e,t){return Ra(2048,8,e,t)}function ey(e,t){return Ra(4,2,e,t)}function ty(e,t){return Ra(4,4,e,t)}function ny(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ry(e,t,n){return n=n!=null?n.concat([e]):null,Ra(4,4,ny.bind(null,t,e),n)}function Eh(){}function iy(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sy(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oy(e,t,n){return Gn&21?(ht(n,t)||(n=uv(),Y.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function qC(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{z=n,kl.transition=r}}function ay(){return et().memoizedState}function YC(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ly(e))uy(t,n);else if(n=Fv(e,t,n,r),n!==null){var i=Ce();lt(n,e,r,i),cy(n,t,r)}}function QC(e,t,n){var r=fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ly(e))uy(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ht(a,o)){var l=t.interleaved;l===null?(i.next=i,dh(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Fv(e,t,i,r),n!==null&&(i=Ce(),lt(n,e,r,i),cy(n,t,r))}}function ly(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function uy(e,t){_i=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jc(e,n)}}var Wo={readContext:Ze,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},XC={readContext:Ze,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Of,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,to(4194308,4,ny.bind(null,t,e),n)},useLayoutEffect:function(e,t){return to(4194308,4,e,t)},useInsertionEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=YC.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:Nf,useDebugValue:Eh,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=Nf(!1),t=e[0];return e=qC.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=pt();if(G){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),le===null)throw Error(E(349));Gn&30||qv(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Of(Qv.bind(null,r,s,e),[e]),r.flags|=2048,Zi(9,Yv.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=pt(),t=le.identifierPrefix;if(G){var n=Ot,r=Nt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=GC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},JC={readContext:Ze,useCallback:iy,useContext:Ze,useEffect:wh,useImperativeHandle:ry,useInsertionEffect:ey,useLayoutEffect:ty,useMemo:sy,useReducer:Cl,useRef:Zv,useState:function(){return Cl(Ji)},useDebugValue:Eh,useDeferredValue:function(e){var t=et();return oy(t,ie.memoizedState,e)},useTransition:function(){var e=Cl(Ji)[0],t=et().memoizedState;return[e,t]},useMutableSource:Kv,useSyncExternalStore:Gv,useId:ay,unstable_isNewReconciler:!1},ZC={readContext:Ze,useCallback:iy,useContext:Ze,useEffect:wh,useImperativeHandle:ry,useInsertionEffect:ey,useLayoutEffect:ty,useMemo:sy,useReducer:Al,useRef:Zv,useState:function(){return Al(Ji)},useDebugValue:Eh,useDeferredValue:function(e){var t=et();return ie===null?t.memoizedState=e:oy(t,ie.memoizedState,e)},useTransition:function(){var e=Al(Ji)[0],t=et().memoizedState;return[e,t]},useMutableSource:Kv,useSyncExternalStore:Gv,useId:ay,unstable_isNewReconciler:!1};function Dr(e,t){try{var n="",r=t;do n+=Ak(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ru(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e2=typeof WeakMap=="function"?WeakMap:Map;function hy(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,Fu=r),Ru(e,t)},n}function dy(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ru(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ru(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function xf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=p2.bind(null,e,t,n),t.then(e,e))}function Lf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Df(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e)}var t2=Ht.ReactCurrentOwner,Ne=!1;function Te(e,t,n,r){t.child=e===null?Hv(t,null,n,r):xr(t,e.child,n,r)}function Mf(e,t,n,r,i){n=n.render;var s=t.ref;return kr(t,i),r=yh(e,t,n,r,s,i),n=_h(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(G&&n&&oh(t),t.flags|=1,Te(e,t,r,i),t.child)}function $f(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Rh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,fy(e,t,s,r,i)):(e=so(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wi,n(o,r)&&e.ref===t.ref)return zt(e,t,i)}return t.flags|=1,e=pn(s,r),e.ref=t.ref,e.return=t,t.child=e}function fy(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Wi(s,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,zt(e,t,i)}return Nu(e,t,n,r,i)}function py(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(gr,je),je|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(gr,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(gr,je),je|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,V(gr,je),je|=r;return Te(e,t,i,n),t.child}function gy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nu(e,t,n,r,i){var s=Le(n)?Wn:Se.current;return s=Nr(t,s),kr(t,i),n=yh(e,t,n,r,s,i),r=_h(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,zt(e,t,i)):(G&&r&&oh(t),t.flags|=1,Te(e,t,n,i),t.child)}function jf(e,t,n,r,i){if(Le(n)){var s=!0;jo(t)}else s=!1;if(kr(t,i),t.stateNode===null)no(e,t),Vv(t,n,r),Pu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Le(n)?Wn:Se.current,u=Nr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Pf(t,o,r,u),qt=!1;var g=t.memoizedState;o.state=g,Vo(t,r,o,i),l=t.memoizedState,a!==r||g!==l||xe.current||qt?(typeof c=="function"&&(Au(t,n,c,r),l=t.memoizedState),(a=qt||Af(t,n,a,r,g,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,zv(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:it(t.type,a),o.props=u,d=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ze(l):(l=Le(n)?Wn:Se.current,l=Nr(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||g!==l)&&Pf(t,o,r,l),qt=!1,g=t.memoizedState,o.state=g,Vo(t,r,o,i);var y=t.memoizedState;a!==d||g!==y||xe.current||qt?(typeof v=="function"&&(Au(t,n,v,r),y=t.memoizedState),(u=qt||Af(t,n,u,r,g,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ou(e,t,n,r,s,i)}function Ou(e,t,n,r,i,s){gy(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&If(t,n,!1),zt(e,t,s);r=t.stateNode,t2.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=xr(t,e.child,null,s),t.child=xr(t,null,a,s)):Te(e,t,a,s),t.memoizedState=r.state,i&&If(t,n,!0),t.child}function my(e){var t=e.stateNode;t.pendingContext?Ef(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ef(e,t.context,!1),ph(e,t.containerInfo)}function Uf(e,t,n,r,i){return Or(),lh(i),t.flags|=256,Te(e,t,n,r),t.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function Lu(e){return{baseLanes:e,cachePool:null,transitions:null}}function vy(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(q,i&1),e===null)return ku(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xa(o,r,0,null),e=Fn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Lu(n),t.memoizedState=xu,e):Ih(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return n2(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=pn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=pn(a,s):(s=Fn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Lu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=xu,r}return s=e.child,e=s.sibling,r=pn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ih(e,t){return t=xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zs(e,t,n,r){return r!==null&&lh(r),xr(t,e.child,null,n),e=Ih(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n2(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(E(422))),zs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=xa({mode:"visible",children:r.children},i,0,null),s=Fn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&xr(t,e.child,null,o),t.child.memoizedState=Lu(o),t.memoizedState=xu,s);if(!(t.mode&1))return zs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Pl(s,r,void 0),zs(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ne||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ft(e,i),lt(r,e,i,-1))}return Ph(),r=Pl(Error(E(421))),zs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=g2.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Fe=cn(i.nextSibling),Be=t,G=!0,ot=null,e!==null&&(Ke[Ge++]=Nt,Ke[Ge++]=Ot,Ke[Ge++]=Kn,Nt=e.id,Ot=e.overflow,Kn=t),t=Ih(t,r.children),t.flags|=4096,t)}function Ff(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cu(e.return,t,n)}function Rl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yy(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Te(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ff(e,n,t);else if(e.tag===19)Ff(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rl(t,!0,n,null,s);break;case"together":Rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function no(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r2(e,t,n){switch(t.tag){case 3:my(t),Or();break;case 5:Wv(t);break;case 1:Le(t.type)&&jo(t);break;case 4:ph(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?vy(e,t,n):(V(q,q.current&1),e=zt(e,t,n),e!==null?e.sibling:null);V(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,py(e,t,n)}return zt(e,t,n)}var _y,Du,wy,Ey;_y=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Du=function(){};wy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mn(It.current);var s=null;switch(n){case"input":i=nu(e,i),r=nu(e,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=su(e,i),r=su(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mo)}au(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ui.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Ey=function(e,t,n,r){n!==r&&(t.flags|=4)};function ti(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i2(e,t,n){var r=t.pendingProps;switch(ah(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Le(t.type)&&$o(),ve(t),null;case 3:return r=t.stateNode,Lr(),K(xe),K(Se),mh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Us(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Vu(ot),ot=null))),Du(e,t),ve(t),null;case 5:gh(t);var i=Mn(Qi.current);if(n=t.type,e!==null&&t.stateNode!=null)wy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ve(t),null}if(e=Mn(It.current),Us(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[mt]=t,r[qi]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<ci.length;i++)H(ci[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Gd(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Yd(r,s),H("invalid",r)}au(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&js(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&js(r.textContent,a,e),i=["children",""+a]):Ui.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Rs(r),qd(r,s,!0);break;case"textarea":Rs(r),Qd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Mo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[mt]=t,e[qi]=r,_y(e,t,!1,!1),t.stateNode=e;e:{switch(o=lu(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<ci.length;i++)H(ci[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Gd(e,r),i=nu(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Yd(e,r),i=su(e,r),H("invalid",e);break;default:i=r}au(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Xm(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ym(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fi(e,l):typeof l=="number"&&Fi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ui.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",e):l!=null&&Kc(e,s,l,o))}switch(n){case"input":Rs(e),qd(e,r,!1);break;case"textarea":Rs(e),Qd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Er(e,!!r.multiple,s,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Ey(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Mn(Qi.current),Mn(It.current),Us(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(s=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:js(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&js(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return ve(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Fe!==null&&t.mode&1&&!(t.flags&128))Uv(),Or(),t.flags|=98560,s=!1;else if(s=Us(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[mt]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),s=!1}else ot!==null&&(Vu(ot),ot=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?se===0&&(se=3):Ph())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Lr(),Du(e,t),e===null&&Ki(t.stateNode.containerInfo),ve(t),null;case 10:return hh(t.type._context),ve(t),null;case 17:return Le(t.type)&&$o(),ve(t),null;case 19:if(K(q),s=t.memoizedState,s===null)return ve(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ti(s,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=bo(e),o!==null){for(t.flags|=128,ti(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>Mr&&(t.flags|=128,r=!0,ti(s,!1),t.lanes=4194304)}else{if(!r)if(e=bo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ti(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return ve(t),null}else 2*Z()-s.renderingStartTime>Mr&&n!==1073741824&&(t.flags|=128,r=!0,ti(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,n=q.current,V(q,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Ah(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function s2(e,t){switch(ah(t),t.tag){case 1:return Le(t.type)&&$o(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),K(xe),K(Se),mh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gh(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return Lr(),null;case 10:return hh(t.type._context),null;case 22:case 23:return Ah(),null;case 24:return null;default:return null}}var Bs=!1,_e=!1,o2=typeof WeakSet=="function"?WeakSet:Set,C=null;function pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Mu(e,t,n){try{n()}catch(r){X(e,t,r)}}var zf=!1;function a2(e,t){if(yu=xo,e=kv(),sh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,g=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)g=d,d=v;for(;;){if(d===e)break t;if(g===n&&++u===i&&(a=o),g===s&&++c===r&&(l=o),(v=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:e,selectionRange:n},xo=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:it(t.type,w),k);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(_){X(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=zf,zf=!1,y}function wi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mu(t,n,s)}i=i.next}while(i!==r)}}function Na(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $u(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Iy(e){var t=e.alternate;t!==null&&(e.alternate=null,Iy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[qi],delete t[Iu],delete t[bC],delete t[HC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sy(e){return e.tag===5||e.tag===3||e.tag===4}function Bf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ju(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mo));else if(r!==4&&(e=e.child,e!==null))for(ju(e,t,n),e=e.sibling;e!==null;)ju(e,t,n),e=e.sibling}function Uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Uu(e,t,n),e=e.sibling;e!==null;)Uu(e,t,n),e=e.sibling}var he=null,st=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Ty(e,t,n),n=n.sibling}function Ty(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ia,n)}catch{}switch(n.tag){case 5:_e||pr(n,t);case 6:var r=he,i=st;he=null,Kt(e,t,n),he=r,st=i,he!==null&&(st?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(st?(e=he,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),bi(e)):Il(he,n.stateNode));break;case 4:r=he,i=st,he=n.stateNode.containerInfo,st=!0,Kt(e,t,n),he=r,st=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mu(n,t,o),i=i.next}while(i!==r)}Kt(e,t,n);break;case 1:if(!_e&&(pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Kt(e,t,n),_e=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function Vf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new o2),t.forEach(function(r){var i=m2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,st=!1;break e;case 3:he=a.stateNode.containerInfo,st=!0;break e;case 4:he=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(he===null)throw Error(E(160));Ty(s,o,i),he=null,st=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ky(t,e),t=t.sibling}function ky(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),ft(e),r&4){try{wi(3,e,e.return),Na(3,e)}catch(w){X(e,e.return,w)}try{wi(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:rt(t,e),ft(e),r&512&&n!==null&&pr(n,n.return);break;case 5:if(rt(t,e),ft(e),r&512&&n!==null&&pr(n,n.return),e.flags&32){var i=e.stateNode;try{Fi(i,"")}catch(w){X(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Km(i,s),lu(a,o);var u=lu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Xm(i,d):c==="dangerouslySetInnerHTML"?Ym(i,d):c==="children"?Fi(i,d):Kc(i,c,d,u)}switch(a){case"input":ru(i,s);break;case"textarea":Gm(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Er(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?Er(i,!!s.multiple,s.defaultValue,!0):Er(i,!!s.multiple,s.multiple?[]:"",!1))}i[qi]=s}catch(w){X(e,e.return,w)}}break;case 6:if(rt(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){X(e,e.return,w)}}break;case 3:if(rt(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bi(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:rt(t,e),ft(e);break;case 13:rt(t,e),ft(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kh=Z())),r&4&&Vf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||c,rt(t,e),_e=u):rt(t,e),ft(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(C=e,c=e.child;c!==null;){for(d=C=c;C!==null;){switch(g=C,v=g.child,g.tag){case 0:case 11:case 14:case 15:wi(4,g,g.return);break;case 1:pr(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:pr(g,g.return);break;case 22:if(g.memoizedState!==null){Hf(d);continue}}v!==null?(v.return=g,C=v):Hf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qm("display",o))}catch(w){X(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){X(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:rt(t,e),ft(e),r&4&&Vf(e);break;case 21:break;default:rt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sy(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var s=Bf(e);Uu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Bf(e);ju(e,a,o);break;default:throw Error(E(161))}}catch(l){X(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l2(e,t,n){C=e,Cy(e)}function Cy(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Bs;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_e;a=Bs;var u=_e;if(Bs=o,(_e=l)&&!u)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?Wf(i):l!==null?(l.return=o,C=l):Wf(i);for(;s!==null;)C=s,Cy(s),s=s.sibling;C=i,Bs=a,_e=u}bf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):bf(e)}}function bf(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||Na(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Cf(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cf(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&bi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}_e||t.flags&512&&$u(t)}catch(g){X(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Hf(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Wf(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Na(4,t)}catch(l){X(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){X(t,i,l)}}var s=t.return;try{$u(t)}catch(l){X(t,s,l)}break;case 5:var o=t.return;try{$u(t)}catch(l){X(t,o,l)}}}catch(l){X(t,t.return,l)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var u2=Math.ceil,Ko=Ht.ReactCurrentDispatcher,Sh=Ht.ReactCurrentOwner,Xe=Ht.ReactCurrentBatchConfig,U=0,le=null,re=null,pe=0,je=0,gr=En(0),se=0,es=null,qn=0,Oa=0,Th=0,Ei=null,Re=null,kh=0,Mr=1/0,kt=null,Go=!1,Fu=null,dn=null,Vs=!1,nn=null,qo=0,Ii=0,zu=null,ro=-1,io=0;function Ce(){return U&6?Z():ro!==-1?ro:ro=Z()}function fn(e){return e.mode&1?U&2&&pe!==0?pe&-pe:KC.transition!==null?(io===0&&(io=uv()),io):(e=z,e!==0||(e=window.event,e=e===void 0?16:mv(e.type)),e):1}function lt(e,t,n,r){if(50<Ii)throw Ii=0,zu=null,Error(E(185));ms(e,n,r),(!(U&2)||e!==le)&&(e===le&&(!(U&2)&&(Oa|=n),se===4&&en(e,pe)),De(e,r),n===1&&U===0&&!(t.mode&1)&&(Mr=Z()+500,Aa&&In()))}function De(e,t){var n=e.callbackNode;Kk(e,t);var r=Oo(e,e===le?pe:0);if(r===0)n!==null&&Zd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zd(n),t===1)e.tag===0?WC(Kf.bind(null,e)):Mv(Kf.bind(null,e)),BC(function(){!(U&6)&&In()}),n=null;else{switch(cv(r)){case 1:n=Xc;break;case 4:n=av;break;case 16:n=No;break;case 536870912:n=lv;break;default:n=No}n=Dy(n,Ay.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ay(e,t){if(ro=-1,io=0,U&6)throw Error(E(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=Oo(e,e===le?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yo(e,r);else{t=r;var i=U;U|=2;var s=Ry();(le!==e||pe!==t)&&(kt=null,Mr=Z()+500,Un(e,t));do try{d2();break}catch(a){Py(e,a)}while(!0);ch(),Ko.current=s,U=i,re!==null?t=0:(le=null,pe=0,t=se)}if(t!==0){if(t===2&&(i=fu(e),i!==0&&(r=i,t=Bu(e,i))),t===1)throw n=es,Un(e,0),en(e,r),De(e,Z()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!c2(i)&&(t=Yo(e,r),t===2&&(s=fu(e),s!==0&&(r=s,t=Bu(e,s))),t===1))throw n=es,Un(e,0),en(e,r),De(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:An(e,Re,kt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=kh+500-Z(),10<t)){if(Oo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Eu(An.bind(null,e,Re,kt),t);break}An(e,Re,kt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-at(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u2(r/1960))-r,10<r){e.timeoutHandle=Eu(An.bind(null,e,Re,kt),r);break}An(e,Re,kt);break;case 5:An(e,Re,kt);break;default:throw Error(E(329))}}}return De(e,Z()),e.callbackNode===n?Ay.bind(null,e):null}function Bu(e,t){var n=Ei;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=Re,Re=n,t!==null&&Vu(t)),e}function Vu(e){Re===null?Re=e:Re.push.apply(Re,e)}function c2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~Th,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Kf(e){if(U&6)throw Error(E(327));Cr();var t=Oo(e,0);if(!(t&1))return De(e,Z()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=fu(e);r!==0&&(t=r,n=Bu(e,r))}if(n===1)throw n=es,Un(e,0),en(e,t),De(e,Z()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,Re,kt),De(e,Z()),null}function Ch(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Mr=Z()+500,Aa&&In())}}function Yn(e){nn!==null&&nn.tag===0&&!(U&6)&&Cr();var t=U;U|=1;var n=Xe.transition,r=z;try{if(Xe.transition=null,z=1,e)return e()}finally{z=r,Xe.transition=n,U=t,!(U&6)&&In()}}function Ah(){je=gr.current,K(gr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zC(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(ah(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$o();break;case 3:Lr(),K(xe),K(Se),mh();break;case 5:gh(r);break;case 4:Lr();break;case 13:K(q);break;case 19:K(q);break;case 10:hh(r.type._context);break;case 22:case 23:Ah()}n=n.return}if(le=e,re=e=pn(e.current,null),pe=je=t,se=0,es=null,Th=Oa=qn=0,Re=Ei=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dn=null}return e}function Py(e,t){do{var n=re;try{if(ch(),eo.current=Wo,Ho){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ho=!1}if(Gn=0,ae=ie=Y=null,_i=!1,Xi=0,Sh.current=null,n===null||n.return===null){se=1,es=t,re=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Lf(o);if(v!==null){v.flags&=-257,Df(v,o,a,s,t),v.mode&1&&xf(s,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){xf(s,u,t),Ph();break e}l=Error(E(426))}}else if(G&&a.mode&1){var k=Lf(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Df(k,o,a,s,t),lh(Dr(l,a));break e}}s=l=Dr(l,a),se!==4&&(se=2),Ei===null?Ei=[s]:Ei.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=hy(s,l,t);kf(s,f);break e;case 1:a=l;var h=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dn===null||!dn.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=dy(s,a,t);kf(s,_);break e}}s=s.return}while(s!==null)}Oy(n)}catch(S){t=S,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Ry(){var e=Ko.current;return Ko.current=Wo,e===null?Wo:e}function Ph(){(se===0||se===3||se===2)&&(se=4),le===null||!(qn&268435455)&&!(Oa&268435455)||en(le,pe)}function Yo(e,t){var n=U;U|=2;var r=Ry();(le!==e||pe!==t)&&(kt=null,Un(e,t));do try{h2();break}catch(i){Py(e,i)}while(!0);if(ch(),U=n,Ko.current=r,re!==null)throw Error(E(261));return le=null,pe=0,se}function h2(){for(;re!==null;)Ny(re)}function d2(){for(;re!==null&&!jk();)Ny(re)}function Ny(e){var t=Ly(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Oy(e):re=t,Sh.current=null}function Oy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=s2(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,re=null;return}}else if(n=i2(n,t,je),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);se===0&&(se=5)}function An(e,t,n){var r=z,i=Xe.transition;try{Xe.transition=null,z=1,f2(e,t,n,r)}finally{Xe.transition=i,z=r}return null}function f2(e,t,n,r){do Cr();while(nn!==null);if(U&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Gk(e,s),e===le&&(re=le=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vs||(Vs=!0,Dy(No,function(){return Cr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=z;z=1;var a=U;U|=4,Sh.current=null,a2(e,n),ky(n,e),LC(_u),xo=!!yu,_u=yu=null,e.current=n,l2(n),Uk(),U=a,z=o,Xe.transition=s}else e.current=n;if(Vs&&(Vs=!1,nn=e,qo=i),s=e.pendingLanes,s===0&&(dn=null),Bk(n.stateNode),De(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Go)throw Go=!1,e=Fu,Fu=null,e;return qo&1&&e.tag!==0&&Cr(),s=e.pendingLanes,s&1?e===zu?Ii++:(Ii=0,zu=e):Ii=0,In(),null}function Cr(){if(nn!==null){var e=cv(qo),t=Xe.transition,n=z;try{if(Xe.transition=null,z=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,qo=0,U&6)throw Error(E(331));var i=U;for(U|=4,C=e.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:wi(8,c,s)}var d=c.child;if(d!==null)d.return=c,C=d;else for(;C!==null;){c=C;var g=c.sibling,v=c.return;if(Iy(c),c===u){C=null;break}if(g!==null){g.return=v,C=g;break}C=v}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wi(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,C=f;break e}C=s.return}}var h=e.current;for(C=h;C!==null;){o=C;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,C=p;else e:for(o=h;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Na(9,a)}}catch(S){X(a,a.return,S)}if(a===o){C=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,C=_;break e}C=a.return}}if(U=i,In(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ia,e)}catch{}r=!0}return r}finally{z=n,Xe.transition=t}}return!1}function Gf(e,t,n){t=Dr(n,t),t=hy(e,t,1),e=hn(e,t,1),t=Ce(),e!==null&&(ms(e,1,t),De(e,t))}function X(e,t,n){if(e.tag===3)Gf(e,e,n);else for(;t!==null;){if(t.tag===3){Gf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=Dr(n,e),e=dy(t,e,1),t=hn(t,e,1),e=Ce(),t!==null&&(ms(t,1,e),De(t,e));break}}t=t.return}}function p2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(pe&n)===n&&(se===4||se===3&&(pe&130023424)===pe&&500>Z()-kh?Un(e,0):Th|=n),De(e,t)}function xy(e,t){t===0&&(e.mode&1?(t=xs,xs<<=1,!(xs&130023424)&&(xs=4194304)):t=1);var n=Ce();e=Ft(e,t),e!==null&&(ms(e,t,n),De(e,n))}function g2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xy(e,n)}function m2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),xy(e,n)}var Ly;Ly=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,r2(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,G&&t.flags&1048576&&$v(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;no(e,t),e=t.pendingProps;var i=Nr(t,Se.current);kr(t,n),i=yh(null,t,r,e,i,n);var s=_h();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(s=!0,jo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fh(t),i.updater=Pa,t.stateNode=i,i._reactInternals=t,Pu(t,r,e,n),t=Ou(null,t,r,!0,s,n)):(t.tag=0,G&&s&&oh(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(no(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=y2(r),e=it(r,e),i){case 0:t=Nu(null,t,r,e,n);break e;case 1:t=jf(null,t,r,e,n);break e;case 11:t=Mf(null,t,r,e,n);break e;case 14:t=$f(null,t,r,it(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Nu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),jf(e,t,r,i,n);case 3:e:{if(my(t),e===null)throw Error(E(387));r=t.pendingProps,s=t.memoizedState,i=s.element,zv(e,t),Vo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Dr(Error(E(423)),t),t=Uf(e,t,r,n,i);break e}else if(r!==i){i=Dr(Error(E(424)),t),t=Uf(e,t,r,n,i);break e}else for(Fe=cn(t.stateNode.containerInfo.firstChild),Be=t,G=!0,ot=null,n=Hv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){t=zt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Wv(t),e===null&&ku(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,wu(r,i)?o=null:s!==null&&wu(r,s)&&(t.flags|=32),gy(e,t),Te(e,t,o,n),t.child;case 6:return e===null&&ku(t),null;case 13:return vy(e,t,n);case 4:return ph(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Mf(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,V(zo,r._currentValue),r._currentValue=o,s!==null)if(ht(s.value,o)){if(s.children===i.children&&!xe.current){t=zt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Dt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cu(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cu(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,kr(t,n),i=Ze(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),$f(e,t,r,i,n);case 15:return fy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),no(e,t),t.tag=1,Le(r)?(e=!0,jo(t)):e=!1,kr(t,n),Vv(t,r,i),Pu(t,r,i,n),Ou(null,t,r,!0,e,n);case 19:return yy(e,t,n);case 22:return py(e,t,n)}throw Error(E(156,t.tag))};function Dy(e,t){return ov(e,t)}function v2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new v2(e,t,n,r)}function Rh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y2(e){if(typeof e=="function")return Rh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qc)return 11;if(e===Yc)return 14}return 2}function pn(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function so(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Rh(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case sr:return Fn(n.children,i,s,t);case Gc:o=8,i|=8;break;case Jl:return e=Ye(12,n,t,i|2),e.elementType=Jl,e.lanes=s,e;case Zl:return e=Ye(13,n,t,i),e.elementType=Zl,e.lanes=s,e;case eu:return e=Ye(19,n,t,i),e.elementType=eu,e.lanes=s,e;case bm:return xa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bm:o=10;break e;case Vm:o=9;break e;case qc:o=11;break e;case Yc:o=14;break e;case Gt:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ye(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Fn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function xa(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=bm,e.lanes=n,e.stateNode={isHidden:!1},e}function Nl(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function Ol(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nh(e,t,n,r,i,s,o,a,l){return e=new _2(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ye(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fh(s),e}function w2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function My(e){if(!e)return mn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Le(n))return Dv(e,n,t)}return t}function $y(e,t,n,r,i,s,o,a,l){return e=Nh(n,r,!0,e,i,s,o,a,l),e.context=My(null),n=e.current,r=Ce(),i=fn(n),s=Dt(r,i),s.callback=t??null,hn(n,s,i),e.current.lanes=i,ms(e,i,r),De(e,r),e}function La(e,t,n,r){var i=t.current,s=Ce(),o=fn(i);return n=My(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,o),e!==null&&(lt(e,i,o,s),Zs(e,i,o)),o}function Qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oh(e,t){qf(e,t),(e=e.alternate)&&qf(e,t)}function E2(){return null}var jy=typeof reportError=="function"?reportError:function(e){console.error(e)};function xh(e){this._internalRoot=e}Da.prototype.render=xh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));La(e,t,null,null)};Da.prototype.unmount=xh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yn(function(){La(null,e,null,null)}),t[Ut]=null}};function Da(e){this._internalRoot=e}Da.prototype.unstable_scheduleHydration=function(e){if(e){var t=fv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&gv(e)}};function Lh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yf(){}function I2(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Qo(o);s.call(u)}}var o=$y(t,r,e,0,null,!1,!1,"",Yf);return e._reactRootContainer=o,e[Ut]=o.current,Ki(e.nodeType===8?e.parentNode:e),Yn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Qo(l);a.call(u)}}var l=Nh(e,0,!1,null,null,!1,!1,"",Yf);return e._reactRootContainer=l,e[Ut]=l.current,Ki(e.nodeType===8?e.parentNode:e),Yn(function(){La(t,l,n,r)}),l}function $a(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Qo(o);a.call(l)}}La(t,o,e,i)}else o=I2(n,t,e,i,r);return Qo(o)}hv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ui(t.pendingLanes);n!==0&&(Jc(t,n|1),De(t,Z()),!(U&6)&&(Mr=Z()+500,In()))}break;case 13:Yn(function(){var r=Ft(e,1);if(r!==null){var i=Ce();lt(r,e,1,i)}}),Oh(e,1)}};Zc=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Ce();lt(t,e,134217728,n)}Oh(e,134217728)}};dv=function(e){if(e.tag===13){var t=fn(e),n=Ft(e,t);if(n!==null){var r=Ce();lt(n,e,t,r)}Oh(e,t)}};fv=function(){return z};pv=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};cu=function(e,t,n){switch(t){case"input":if(ru(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ca(r);if(!i)throw Error(E(90));Wm(r),ru(r,i)}}}break;case"textarea":Gm(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};ev=Ch;tv=Yn;var S2={usingClientEntryPoint:!1,Events:[ys,ur,Ca,Jm,Zm,Ch]},ni={findFiberByHostInstance:Ln,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},T2={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iv(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||E2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{Ia=bs.inject(T2),Et=bs}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S2;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(t))throw Error(E(200));return w2(e,t,null,n)};be.createRoot=function(e,t){if(!Lh(e))throw Error(E(299));var n=!1,r="",i=jy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nh(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,Ki(e.nodeType===8?e.parentNode:e),new xh(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=iv(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Yn(e)};be.hydrate=function(e,t,n){if(!Ma(t))throw Error(E(200));return $a(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Lh(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=$y(t,null,e,1,n??null,i,!1,s,o),e[Ut]=t.current,Ki(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Da(t)};be.render=function(e,t,n){if(!Ma(t))throw Error(E(200));return $a(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(E(40));return e._reactRootContainer?(Yn(function(){$a(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};be.unstable_batchedUpdates=Ch;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ma(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return $a(e,t,n,!1,r)};be.version="18.2.0-next-9e3b772b8-20220608";function Uy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uy)}catch(e){console.error(e)}}Uy(),$m.exports=be;var k2=$m.exports;const C2=ip(k2);/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}var rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rn||(rn={}));const Qf="popstate";function A2(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return bu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Fy(i)}return R2(t,n,null,e)}function Me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function P2(){return Math.random().toString(36).substr(2,8)}function Xf(e,t){return{usr:e.state,key:e.key,idx:t}}function bu(e,t,n,r){return n===void 0&&(n=null),Xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ja(t):t,{state:n,key:t&&t.key||r||P2()})}function Fy(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ja(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function R2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=rn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Xo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=rn.Pop;let k=c(),f=k==null?null:k-u;u=k,l&&l({action:a,location:w.location,delta:f})}function g(k,f){a=rn.Push;let h=bu(w.location,k,f);n&&n(h,k),u=c()+1;let p=Xf(h,u),_=w.createHref(h);try{o.pushState(p,"",_)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(_)}s&&l&&l({action:a,location:w.location,delta:1})}function v(k,f){a=rn.Replace;let h=bu(w.location,k,f);n&&n(h,k),u=c();let p=Xf(h,u),_=w.createHref(h);o.replaceState(p,"",_),s&&l&&l({action:a,location:w.location,delta:0})}function y(k){let f=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:Fy(k);return Me(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let w={get action(){return a},get location(){return e(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qf,d),l=k,()=>{i.removeEventListener(Qf,d),l=null}},createHref(k){return t(i,k)},createURL:y,encodeLocation(k){let f=y(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(k){return o.go(k)}};return w}var Jf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jf||(Jf={}));function N2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ja(t):t,i=Vy(r.pathname||"/",n);if(i==null)return null;let s=zy(e);O2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=z2(s[a],b2(i));return o}function zy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ar([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zy(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:U2(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of By(s.path))i(s,o,l)}),t}function By(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=By(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function O2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:F2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const x2=/^:[\w-]+$/,L2=3,D2=2,M2=1,$2=10,j2=-2,Zf=e=>e==="*";function U2(e,t){let n=e.split("/"),r=n.length;return n.some(Zf)&&(r+=j2),t&&(r+=D2),n.filter(i=>!Zf(i)).reduce((i,s)=>i+(x2.test(s)?L2:s===""?M2:$2),r)}function F2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function z2(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=B2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Ar([i,c.pathname]),pathnameBase:W2(Ar([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ar([i,c.pathnameBase]))}return s}function B2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=V2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:g,isOptional:v}=c;if(g==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[d];return v&&!y?u[g]=void 0:u[g]=H2(y||"",g),u},{}),pathname:s,pathnameBase:o,pattern:e}}function V2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Dh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function b2(e){try{return decodeURI(e)}catch(t){return Dh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function H2(e,t){try{return decodeURIComponent(e)}catch(n){return Dh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Vy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Ar=e=>e.join("/").replace(/\/\/+/g,"/"),W2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function K2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const by=["post","put","patch","delete"];new Set(by);const G2=["get",...by];new Set(G2);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(this,arguments)}const q2=T.createContext(null),Y2=T.createContext(null),Hy=T.createContext(null),Ua=T.createContext(null),Fa=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Wy=T.createContext(null);function Mh(){return T.useContext(Ua)!=null}function Q2(){return Mh()||Me(!1),T.useContext(Ua).location}function X2(e,t){return J2(e,t)}function J2(e,t,n,r){Mh()||Me(!1);let{navigator:i}=T.useContext(Hy),{matches:s}=T.useContext(Fa),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Q2(),c;if(t){var d;let k=typeof t=="string"?ja(t):t;l==="/"||(d=k.pathname)!=null&&d.startsWith(l)||Me(!1),c=k}else c=u;let g=c.pathname||"/",v=l==="/"?g:g.slice(l.length)||"/",y=N2(e,{pathname:v}),w=rA(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Ar([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:Ar([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&w?T.createElement(Ua.Provider,{value:{location:Jo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:rn.Pop}},w):w}function Z2(){let e=aA(),t=K2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const eA=T.createElement(Z2,null);class tA extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(Fa.Provider,{value:this.props.routeContext},T.createElement(Wy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nA(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(q2);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Fa.Provider,{value:t},r)}function rA(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||Me(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:g,errors:v}=n,y=d.route.loader&&g[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,g)=>{let v,y=!1,w=null,k=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||eA,l&&(u<0&&g===0?(lA("route-fallback",!1),y=!0,k=null):u===g&&(y=!0,k=d.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),h=()=>{let p;return v?p=w:y?p=k:d.route.Component?p=T.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=c,T.createElement(nA,{match:d,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?T.createElement(tA,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var Hu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hu||{});function iA(e){let t=T.useContext(Y2);return t||Me(!1),t}function sA(e){let t=T.useContext(Fa);return t||Me(!1),t}function oA(e){let t=sA(),n=t.matches[t.matches.length-1];return n.route.id||Me(!1),n.route.id}function aA(){var e;let t=T.useContext(Wy),n=iA(Hu.UseRouteError),r=oA(Hu.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}const ep={};function lA(e,t,n){!t&&!ep[e]&&(ep[e]=!0)}function Pn(e){Me(!1)}function uA(e){let{basename:t="/",children:n=null,location:r,navigationType:i=rn.Pop,navigator:s,static:o=!1,future:a}=e;Mh()&&Me(!1);let l=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:l,navigator:s,static:o,future:Jo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ja(r));let{pathname:c="/",search:d="",hash:g="",state:v=null,key:y="default"}=r,w=T.useMemo(()=>{let k=Vy(c,l);return k==null?null:{location:{pathname:k,search:d,hash:g,state:v,key:y},navigationType:i}},[l,c,d,g,v,y,i]);return w==null?null:T.createElement(Hy.Provider,{value:u},T.createElement(Ua.Provider,{children:n,value:w}))}function cA(e){let{children:t,location:n}=e;return X2(Wu(t),n)}new Promise(()=>{});function Wu(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let s=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Wu(r.props.children,s));return}r.type!==Pn&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const hA="6";try{window.__reactRouterVersion=hA}catch{}const dA="startTransition",tp=u0[dA];function fA(e){let{basename:t,children:n,future:r,window:i}=e,s=T.useRef();s.current==null&&(s.current=A2({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(d=>{u&&tp?tp(()=>l(d)):l(d)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(uA,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var np;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(np||(np={}));var rp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rp||(rp={}));const pA=()=>{const{theme:e,setTheme:t}=T.useContext(Bt);return T.useEffect(()=>{document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(e)},[e]),m.jsxs("div",{children:[m.jsx(M0,{}),m.jsxs(cA,{children:[m.jsx(Pn,{path:"/",element:m.jsx(j0,{})}),m.jsx(Pn,{path:"/compare",element:m.jsx(Y0,{})}),m.jsx(Pn,{path:"/playlists",element:m.jsx(n1,{})}),m.jsx(Pn,{path:"/search",element:m.jsx(y1,{})}),m.jsx(Pn,{path:"/account",element:m.jsx(_k,{})}),m.jsx(Pn,{path:"/rankings",element:m.jsx(Ek,{})})]}),m.jsx("button",{className:"theme-container",onClick:()=>t(e==="light"?"dark":"light"),children:e==="light"?"DARK":"LIGHT"}),m.jsx("input",{class:"menu-icon",type:"checkbox",id:"menu-icon",name:"menu-icon"}),m.jsx("label",{for:"menu-icon"}),m.jsx("nav",{class:"nav",children:m.jsxs("ul",{class:"pt-5",children:[m.jsx("li",{children:m.jsx("a",{href:"/",children:"Home"})}),m.jsx("li",{children:m.jsx("a",{href:"/compare",children:"Compare"})}),m.jsx("li",{children:m.jsx("a",{href:"/playlists",children:"Playlists"})}),m.jsx("li",{children:m.jsx("a",{href:"/search",children:"Search"})}),m.jsx("li",{children:m.jsx("a",{href:"/rankings",children:"Rankings"})}),m.jsx("li",{children:m.jsx("a",{href:"/account",children:"Account"})})]})})]})};C2.render(m.jsx(x0,{children:m.jsx(fA,{children:m.jsx(vk,{children:m.jsx(pA,{})})})}),document.getElementById("root"));
