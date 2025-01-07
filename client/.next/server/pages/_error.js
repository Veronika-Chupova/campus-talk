(()=>{var e={};e.id=820,e.ids=[820,660,888],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8826:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>c,getServerSideProps:()=>h,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>m,routeModule:()=>P,unstable_getServerProps:()=>x,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>y});var a=r(7093),l=r(5244),o=r(1323),s=r(5949),i=r(3414),d=r(6971),u=e([i]);i=(u.then?(await u)():u)[0];let c=(0,o.l)(d,"default"),p=(0,o.l)(d,"getStaticProps"),f=(0,o.l)(d,"getStaticPaths"),h=(0,o.l)(d,"getServerSideProps"),g=(0,o.l)(d,"config"),m=(0,o.l)(d,"reportWebVitals"),y=(0,o.l)(d,"unstable_getStaticProps"),b=(0,o.l)(d,"unstable_getStaticPaths"),v=(0,o.l)(d,"unstable_getStaticParams"),x=(0,o.l)(d,"unstable_getServerProps"),S=(0,o.l)(d,"unstable_getServerSideProps"),P=new a.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:i.default,Document:s.default},userland:d});n()}catch(e){n(e)}})},6971:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(167),a=r(997),l=n._(r(6689)),o=n._(r(7828)),s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends l.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||s[e]||"An unexpected error has occurred";return(0,a.jsxs)("div",{style:d.error,children:[(0,a.jsx)(o.default,{children:(0,a.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,a.jsxs)("div",{style:d.desc,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,a.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,a.jsx)("div",{style:d.wrap,children:(0,a.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,a.jsx)(a.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}u.displayName="ErrorPage",u.getInitialProps=i,u.origGetInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5495:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},7828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(167),a=r(8760),l=r(997),o=a._(r(6689)),s=n._(r(7215)),i=r(8039),d=r(1988),u=r(5495);function c(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1997);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let l=!0,o=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){o=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?l=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?l=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!o)&&r.has(e)?l=!1:(r.add(e),n[t]=r)}}}}return l}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(d.HeadManagerContext);return(0,l.jsx)(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(6689),a=()=>{},l=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function s(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),s(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=s),()=>{r&&(r._pendingUpdate=s)})),l(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1997:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},3414:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>u});var a=r(997);r(6764);var l=r(968),o=r.n(l),s=r(4915),i=r(3291),d=e([s,i]);function u({Component:e,pageProps:t}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[a.jsx("title",{children:"Campus Talk"}),a.jsx("meta",{name:"description",content:"Generated by create next app"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.jsx("link",{rel:"icon",href:"/favicon.ico"})]}),a.jsx(i.Provider,{store:s.h,children:a.jsx(e,{...t})})]})}[s,i]=d.then?(await d)():d,n()}catch(e){n(e)}})},5949:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(997),a=r(6859);function l(){return(0,n.jsxs)(a.Html,{lang:"en",children:[n.jsx(a.Head,{}),(0,n.jsxs)("body",{children:[n.jsx(a.Main,{}),n.jsx(a.NextScript,{})]})]})}},8722:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{ZP:()=>c,pT:()=>u});var a=r(3258),l=e([a]);a=(l.then?(await l)():l)[0];let o=(0,a.createSlice)({name:"slots",initialState:{loading:!1,error:null,data:[{date:new Date(2025,0,26),start:new Date("2025-01-26T10:00:00"),end:new Date("2025-01-26T11:00:00"),name:"John Smith",userID:"1",venue:"Department of Biology",slots:[{slotStart:new Date("2025-01-26T10:00:00"),slotEnd:new Date("2025-01-26T11:30:00"),duration:30,available:!0},{slotStart:new Date("2025-01-26T10:30:00"),slotEnd:new Date("2025-01-26T11:00:00"),duration:30,available:!0},{slotStart:new Date("2025-01-26T10:00:00"),slotEnd:new Date("2025-01-26T11:00:00"),duration:60,available:!0}]},{date:new Date(2025,0,29),start:new Date("2025-01-29T10:00:00"),end:new Date("2025-01-29T11:00:00"),name:"Ammy Rodes",userID:"2",venue:"Department of Art",slots:[{slotStart:new Date("2025-01-29T10:00:00"),slotEnd:new Date("2025-01-29T11:30:00"),duration:30,available:!0},{slotStart:new Date("2025-01-29T10:30:00"),slotEnd:new Date("2025-01-29T11:00:00"),duration:30,available:!0},{slotStart:new Date("2025-01-29T10:00:00"),slotEnd:new Date("2025-01-29T11:00:00"),duration:60,available:!0}]},{date:new Date(2025,0,27),start:new Date("2025-01-27T10:00:00"),end:new Date("2025-01-27T11:00:00"),name:"Ali Wanes",userID:"3",venue:"Department of Computer Science",slots:[{slotStart:new Date("2025-01-27T10:00:00"),slotEnd:new Date("2025-01-27T11:30:00"),duration:30,available:!0},{slotStart:new Date("2025-01-27T10:30:00"),slotEnd:new Date("2025-01-27T11:00:00"),duration:30,available:!0},{slotStart:new Date("2025-01-27T10:00:00"),slotEnd:new Date("2025-01-27T11:00:00"),duration:60,available:!0}]}]},reducers:{fetchSlotsStart:e=>{e.loading=!0},fetchSlotsSuccess:(e,t)=>{e.loading=!1,e.slots=[...t.payload]},fetchSlotsFailure:(e,t)=>{e.loading=!1,e.error=t.payload},bookSlot:(e,t)=>{let{bookedSlotUserID:r,bookedSlotDate:n,bookedSlotStart:a,bookedSlotEnd:l}=t.payload||{};e.data=e.data.map(e=>{if(e.date.toISOString()!==n||e.userID!==r)return e;{let t=e.slots.map(e=>{let t=e.slotStart.getTime()||null,r=e.slotEnd.getTime()||null;return t===a||r===l?{...e,available:!1}:e});return{...e,slots:t}}})}}}),{fetchSlotsStart:s,fetchSlotsSuccess:i,fetchSlotsFailure:d,bookSlot:u}=o.actions,c=o.reducer;n()}catch(e){n(e)}})},3467:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{ZP:()=>u});var a=r(3258),l=e([a]);a=(l.then?(await l)():l)[0];let o=(0,a.createSlice)({name:"user",initialState:{loading:!1,error:null,id:null,name:null,avatar:null,department:null,research:null,email:null,plannedMeetings:[],pastMeetings:[],slots:[]},reducers:{fetchUserStart:e=>{e.loading=!0},fetchUserSuccess:(e,t)=>(e.loading=!1,{...e,...t.payload}),fetchUseFailure:(e,t)=>{e.loading=!1,e.error=t.payload}}}),{fetchUserStart:s,fetchUserSuccess:i,fetchUseFailure:d}=o.actions,u=o.reducer;n()}catch(e){n(e)}})},4915:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{h:()=>i});var a=r(3258),l=r(3467),o=r(8722),s=e([a,l,o]);[a,l,o]=s.then?(await s)():s;let i=(0,a.configureStore)({reducer:{userProfile:l.ZP,slots:o.ZP}});n()}catch(e){n(e)}})},6764:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},5315:e=>{"use strict";e.exports=require("path")},3258:e=>{"use strict";e.exports=import("@reduxjs/toolkit")},3291:e=>{"use strict";e.exports=import("react-redux")},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=l?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(a,o,s):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[859],()=>r(8826));module.exports=n})();