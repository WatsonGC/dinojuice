(()=>{"use strict";var e={8411:(e,t,r)=>{r(7280),r(5363),r(71);var n=r(8880),o=r(3525),a=r(3673);function i(e,t,r,n,o,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l=(0,a.aZ)({name:"App"});l.render=i;const s=l;var d=r(7083),c=r(9582);const u=[{path:"/",name:"Login",component:()=>Promise.all([r.e(736),r.e(829)]).then(r.bind(r,5829)),children:[{name:"LoginChild",path:"",component:()=>Promise.all([r.e(736),r.e(327)]).then(r.bind(r,5327))}]},{path:"/Register",name:"Register",component:()=>Promise.all([r.e(736),r.e(829)]).then(r.bind(r,5829)),children:[{name:"RegisterChild",path:"",component:()=>Promise.all([r.e(736),r.e(629)]).then(r.bind(r,7629))}]},{path:"/Delivery",name:"Delivery",component:()=>Promise.all([r.e(736),r.e(829)]).then(r.bind(r,5829)),children:[{name:"DeliveryChild",path:"",component:()=>Promise.all([r.e(736),r.e(305)]).then(r.bind(r,3305))}]},{path:"/History",name:"History",component:()=>Promise.all([r.e(736),r.e(829)]).then(r.bind(r,5829)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(430)]).then(r.bind(r,5430))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(996)]).then(r.bind(r,4996))}],p=u,h=(0,d.BC)((function(){const e=c.r5,t=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:p,history:e("")});return t}));async function f(e,t){const r="function"===typeof h?await h({}):h,n=e(s);return n.use(o.Z,t),{app:n,router:r}}const m={config:{}},v="";async function b({app:e,router:t},r){let n=!1;const o=e=>{n=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},a=window.location.href.replace(window.location.origin,"");for(let l=0;!1===n&&l<r.length;l++)try{await r[l]({app:e,router:t,ssrContext:null,redirect:o,urlPath:a,publicPath:v})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==n&&(e.use(t),e.mount("#q-app"))}f(n.ri,m).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1768)),Promise.resolve().then(r.bind(r,2942)),Promise.resolve().then(r.bind(r,3119))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));b(e,r)}))))},1768:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,api:()=>i});var n=r(7083),o=r(52),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),l=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},2942:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d,firebaseAuth:()=>l,db:()=>s});var n=r(8785),o=r(7083);r(5738),r(7797);const a={apiKey:"AIzaSyBn0IMRFzxed4Eq_3yifffn81wazUB7zvA",authDomain:"dinojuice-26ea5.firebaseapp.com",projectId:"dinojuice-26ea5",storageBucket:"dinojuice-26ea5.appspot.com",messagingSenderId:"925430254013",appId:"1:925430254013:web:1ee6393ded446fe7d5aad4",measurementId:"G-B5HTX4MYF0"},i=n.w.initializeApp(a),l=i.auth?i.auth():void 0,s=n.w.firestore(),d=(0,o.xr)((({app:e})=>{e.config.globalProperties.db=s,e.config.globalProperties.firebaseAuth=l}))},3119:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i,_:()=>o.a});var n=r(8603),o=r.n(n),a=r(7083);const i=(0,a.xr)((({app:e})=>{e.config.globalProperties._=o()}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{305:"aa2d85a2",327:"2d59c0cb",430:"4986dc5d",629:"1c8590b7",829:"0e8ecc32",996:"bd3d9f50"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{305:"2c62f6ab",736:"3c3d7169"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="dinojuice:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={305:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,s=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,d=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(n);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0;return r.O(c)},n=self["webpackChunkdinojuice"]=self["webpackChunkdinojuice"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(8411)));n=r.O(n)})();