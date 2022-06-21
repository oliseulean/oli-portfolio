import{_ as g,r as x,o as y,a as k,b as p,c as _,d as c,u as d,e as I,p as E,f as L,g as f,h as z,F as w,i as N,j as s,k as i,l}from"./oli.portfolio-v1.0.3.js";var V="/icons/down-arrow.webp";const T=e=>(E("data-v-687ab480"),e=e(),L(),e),R={class:"app__land"},S=T(()=>c("div",{class:"app__land__title"},[c("h1",{class:"app__land__title-name"},[f(" hello! \u{1F44B}\u{1F3FD} "),c("br"),f("I'm Olimpiu \u0218eulean ")]),c("div",{class:"app__land__title-typewriter"},[c("p",null,"and this website, is about me.")])],-1)),M={key:0,class:"app__land__bottom"},A=["src"],C={__name:"Land",setup(e){const t=x(!0);y(()=>window.addEventListener("scroll",n)),k(()=>window.removeEventListener("scroll",n));const n=()=>{(window==null?void 0:window.pageYOffset)>100?t.value=!1:t.value=!0},r=()=>{const o=document.getElementById("experience");!o||o.scrollIntoView({behavior:"smooth"})};return(o,v)=>(p(),_("div",R,[S,t.value?(p(),_("div",M,[c("button",{onClick:v[0]||(v[0]=m=>r()),class:"app__land__bottom-btn"},[c("img",{src:d(V),class:"app__land__bottom-downIcon",alt:"Down_Icon_Image",width:"50",height:"50"},null,8,A)])])):I("",!0)]))}};var P=g(C,[["__scopeId","data-v-687ab480"]]),u,j=new Uint8Array(16);function O(){if(!u&&(u=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(j)}var D=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function $(e){return typeof e=="string"&&D.test(e)}var a=[];for(var h=0;h<256;++h)a.push((h+256).toString(16).substr(1));function B(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!$(n))throw TypeError("Stringified UUID is invalid");return n}function b(e,t,n){e=e||{};var r=e.random||(e.rng||O)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return B(r)}var G="/icons/linkedin.webp",U="/icons/medium.webp",F="/icons/github.webp",H="/icons/gmail.webp",X="/icons/phone.webp";const Y=z({id:"leftNavbar",state:()=>({items:[{id:b(),path:"https://www.linkedin.com/in/seulean-olimpiu",alt:"Linkedin webp",icon:G,title:"Linkedin"},{id:b(),path:"https://medium.com/@olimpiuseulean",alt:"Medium webp",icon:U,title:"Medium"},{id:b(),path:"https://github.com/oliseulean",alt:"Github webp",icon:F,title:"Github"},{id:b(),path:"mailto:seulean.olimpiu@gmail.com",alt:"Mail webp",icon:H,title:"Mail"},{id:b(),path:"tel:0741547328",alt:"Telephone webp",icon:X,title:"Phone"}]}),getters:{},actions:{}});const q={class:"app__leftNavbar"},J=["href"],K=["src","alt"],Q={__name:"LeftNavbar",setup(e){const t=Y();return(n,r)=>(p(),_("div",q,[(p(!0),_(w,null,N(d(t).items,o=>(p(),_("a",{href:o.path,key:o.id,target:"_blank",class:"app__leftNavbar-link"},[c("img",{src:o.icon,alt:o.alt,class:"app__leftNavbar-icon",height:"30",width:"30",loading:"lazy"},null,8,K)],8,J))),128))]))}};var W=g(Q,[["__scopeId","data-v-2ede164a"]]);const Z={__name:"Main",setup(e){const t=s(()=>l(()=>import("./oli.portfolio-v1.0.34.js"),["oli.portfolio-v1.0.34.js","oli.portfolio-v1.0.34.css","oli.portfolio-v1.0.35.js","oli.portfolio-v1.0.3.js"])),n=s(()=>l(()=>import("./oli.portfolio-v1.0.36.js"),["oli.portfolio-v1.0.36.js","oli.portfolio-v1.0.39.css","oli.portfolio-v1.0.37.js","oli.portfolio-v1.0.36.css","oli.portfolio-v1.0.3.js"])),r=s(()=>l(()=>import("./oli.portfolio-v1.0.38.js"),["oli.portfolio-v1.0.38.js","oli.portfolio-v1.0.38.css","oli.portfolio-v1.0.3.js","oli.portfolio-v1.0.37.js","oli.portfolio-v1.0.36.css"])),o=s(()=>l(()=>import("./oli.portfolio-v1.0.39.js"),["oli.portfolio-v1.0.39.js","oli.portfolio-v1.0.35.css","oli.portfolio-v1.0.37.js","oli.portfolio-v1.0.36.css","oli.portfolio-v1.0.3.js"])),v=s(()=>l(()=>import("./oli.portfolio-v1.0.310.js"),["oli.portfolio-v1.0.310.js","oli.portfolio-v1.0.32.css","oli.portfolio-v1.0.3.js"])),m=s(()=>l(()=>import("./oli.portfolio-v1.0.311.js"),["oli.portfolio-v1.0.311.js","oli.portfolio-v1.0.37.css","oli.portfolio-v1.0.3.js","oli.portfolio-v1.0.35.js"]));return(ee,te)=>(p(),_(w,null,[i(P),i(W),i(d(t)),i(d(n)),i(d(r)),i(d(o)),i(d(v)),i(d(m))],64))}};var oe=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{oe as M,F as g,U as m,b as v};
