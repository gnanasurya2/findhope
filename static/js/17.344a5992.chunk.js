(this.webpackJsonpfindhope=this.webpackJsonpfindhope||[]).push([[17],{107:function(e,t,n){e.exports={wrapper:"Blog_wrapper__1YW-i",header:"Blog_header__1uA2_",title:"Blog_title__2PPFz",author:"Blog_author__2zkqT"}},108:function(e,t,n){var a={"./failure.json":[124,25],"./rejection.json":[125,26]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(a)},o.id=108,e.exports=o},126:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n(0),r=n.n(o),i=n(2),l=n(9),c=n(107),u=n.n(c),s={p:{fontSize:"20px",letterSpacing:"1.1px",lineHeight:"36px",marginBottom:"40px"},li:{textAlign:"left",listStylePosition:"inside",marginBottom:"20px",fontSize:"24px",lineHeight:"34px"},h2:{fontSize:"40px",lineHeight:"48px",marginBottom:"25px"}};t.default=function(){var e=Object(i.h)().name,t=Object(o.useState)(null),c=Object(a.a)(t,2),p=c[0],f=c[1];Object(o.useEffect)((function(){n(108)("./".concat(e,".json")).then((function(e){var t=e.default;console.log(t),f(t)}))}),[]);return r.a.createElement("div",null,p?r.a.createElement("div",{className:u.a.wrapper},r.a.createElement("div",{className:u.a.header},r.a.createElement("h1",{className:u.a.title},p.title),r.a.createElement(l.b,{to:"/blogger/".concat(p.url)},r.a.createElement("h3",{className:u.a.author},"Written by ",p.author))),p.content.map((function(e){return r.a.createElement(e.type,{style:s[e.type]},e.content)}))):null)}}}]);
//# sourceMappingURL=17.344a5992.chunk.js.map