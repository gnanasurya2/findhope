(this.webpackJsonpfindhope=this.webpackJsonpfindhope||[]).push([[1],{10:function(e,t,n){e.exports={head:"Layout_head__1rYHv",logo:"Layout_logo__2ETmt",logoImage:"Layout_logoImage__1wrhj",navbar:"Layout_navbar__EDLub",link:"Layout_link__2I-Q1",close:"Layout_close__IfCoj",cross1:"Layout_cross1__2Mtp7",cross2:"Layout_cross2__1zLDh",hamburger:"Layout_hamburger__2SRz6",bar:"Layout_bar__1joZy"}},31:function(e,t,n){"use strict";var a=n(11),r=n(0),l=n.n(r);function o(){var e=Object(a.a)(["\n  background-color: #005eaa;\n  border: none;\n  border-radius: 30px;\n  padding: 12px 32px;\n  font-size: 24px;\n  margin-top: 24px;\n  color: white;\n  box-shadow: 0px 3px 5px grey;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  &:hover {\n    background-color: #005ee5;\n    cursor: pointer;\n  }\n"]);return o=function(){return e},e}var c=n(12).a.button(o());t.a=function(e){return l.a.createElement(c,{style:e.style,onClick:e.onClick,disabled:e.disabled},e.children,e.title)}},32:function(e,t,n){"use strict";var a=n(44),r=n.n(a),l=(n(56),n(59),n(62),r.a.initializeApp({apiKey:"AIzaSyAkUfua-pr7nlipSup5rj8rmgbdFNGvvKk",authDomain:"find-hope.firebaseapp.com",databaseURL:"https://find-hope.firebaseio.com",projectId:"find-hope",storageBucket:"find-hope.appspot.com",messagingSenderId:"750597049253",appId:"1:750597049253:web:bbaf1303709e5221"}));t.a=l},34:function(e,t,n){"use strict";var a=n(11),r=n(0),l=n.n(r),o=n(12);function c(){var e=Object(a.a)(["\n  border: 1px solid #167efb;\n  border-radius: 3px;\n  padding: 7px 5px;\n  font-size: 18px;\n  &:focus {\n    box-shadow: 0px 0px 4px 0px #167efb;\n  }\n"]);return c=function(){return e},e}function i(){var e=Object(a.a)(["\n  font-size: 22px;\n  margin-bottom: 10px;\n"]);return i=function(){return e},e}function u(){var e=Object(a.a)(["\n  width: 95%;\n  margin: 2.5% 0;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  @media screen and (min-width: 700px) {\n    width: 60%;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 40%;\n  }\n"]);return u=function(){return e},e}var p=o.a.div(u()),m=o.a.p(i()),s=o.a.input(c());t.a=function(e){return l.a.createElement(p,null,l.a.createElement(m,null,e.title),e.content?l.a.createElement(m,null,e.content):null,l.a.createElement(s,{type:"text",placeholder:e.placeholder,value:e.value,onChange:e.onChangeText}))}},38:function(e,t,n){e.exports={wrapper:"profileMaker_wrapper__22XYf",name:"profileMaker_name__23S28",imageUploader:"profileMaker_imageUploader__fRW7j",flex:"profileMaker_flex__3WtAo"}},43:function(e,t,n){e.exports=n.p+"static/media/Hope Logo.95fb7605.svg"},45:function(e,t,n){e.exports=n(61)},50:function(e,t,n){},51:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(39),o=n.n(l),c=(n(50),n(51),n(13)),i=n(10),u=n.n(i),p=n(8),m=n(16),s=n(11),b=n(12);function d(){var e=Object(s.a)(["\n  width: 40px;\n  height: 5px;\n  background-color: ",";\n  border-radius: 20px;\n  margin-top: 6px;\n"]);return d=function(){return e},e}function f(){var e=Object(s.a)(["\n  position: relative;\n  cursor: pointer;\n  padding: 0 10px;\n"]);return f=function(){return e},e}var h=b.a.div(f()),g=Object(b.a)(m.a.div)(d(),(function(e){return e.color})),E=function(e){var t=Object(m.c)((function(){return{opacity:1,angle:0}})),n=Object(c.a)(t,2),l=n[0],o=n[1];return Object(a.useEffect)((function(){o(e.toggle?{opacity:1,angle:0}:{opacity:0,angle:45})}),[e.toggle,o]),r.a.createElement(h,{onClick:e.onClick},r.a.createElement(g,{style:{opacity:l.opacity.interpolate((function(e){return e}))},color:e.color}),r.a.createElement(g,{style:{transform:l.angle.interpolate((function(e){return"rotateZ(".concat(e,"deg)")}))},color:e.color}),r.a.createElement(g,{style:{position:"absolute",top:"5px",transform:l.angle.interpolate((function(e){return"rotateZ(-".concat(e,"deg)")}))},color:e.color}),r.a.createElement(g,{style:{opacity:l.opacity.interpolate((function(e){return e}))},color:e.color}))},y=n(43),v=n.n(y),x=function(e){var t=Object(a.useState)({opacity:0,display:"none"}),n=Object(c.a)(t,2),l=n[0],o=n[1],i=Object(a.useState)(!0),s=Object(c.a)(i,2),b=s[0],d=s[1],f=Object(m.c)((function(){return{width:0}})),h=Object(c.a)(f,2),g=h[0],y=h[1],x=function(){d((function(e){return!e})),o(b?{opacity:1,display:"flex"}:{opacity:0,display:"none"}),y(b?{width:70}:{width:0})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:u.a.head},r.a.createElement("div",{className:u.a.logo},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:v.a,alt:"Findhope",className:u.a.logoImage}))),r.a.createElement(m.a.nav,{className:u.a.navbar,style:{width:g.width.interpolate((function(e){return e+"vw"}))}},r.a.createElement("div",{style:l},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(p.b,{to:"/",className:u.a.link,onClick:x},"Home")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/youthadvocates",className:u.a.link,onClick:x},"Advocate Program")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/test",className:u.a.link,onClick:x},"Self Assessments")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/freecounseling",className:u.a.link,onClick:x},"Free Support")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/blogs",className:u.a.link,onClick:x},"Blog")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/mhscan",className:u.a.link,onClick:x},"Mental Health Scan"))))),r.a.createElement("div",{style:{marginLeft:"40px",zIndex:200},onClick:x},r.a.createElement(E,{color:"white",toggle:b}))),e.children)},j=n(2),O=n(33),_=n(24);_.a.initialize("UA-174641907-1");var k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(e){_.a.set(Object(O.a)({page:e},t)),_.a.pageview(e)},l=function(t){return Object(a.useEffect)((function(){return n(t.location.pathname)}),[t.location.pathname]),r.a.createElement(e,t)};return l},w=n(34),z=n(31),C=n(32),L=n(38),S=n.n(L),N=function(e){var t=Object(a.useState)(),n=Object(c.a)(t,2),l=n[0],o=n[1],i=C.a.firestore(),u=Object(j.g)();Object(a.useEffect)((function(){sessionStorage.getItem("token")||u.replace("/login")}),[u]);return r.a.createElement("div",{className:S.a.wrapper,style:{paddingLeft:"15px",paddingRight:"15px"}},r.a.createElement(w.a,{title:"Enter the city name",value:l,onChangeText:function(e){return o(e.target.value)}}),r.a.createElement(z.a,{title:"Save",onClick:function(){var e=sessionStorage.getItem("email");e||(alert("please login again"),u.push("/login")),i.collection("safespace").doc(l.toLowerCase()).set({email:e,members:[],name:l.toLowerCase()}).then((function(){u.push("/safespace")}))}}))},I=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,134))})),A=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,140))})),M=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,141))})),U=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,137))})),B=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,138))})),F=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,142))})),H=Object(a.lazy)((function(){return n.e(20).then(n.bind(null,139))})),P=Object(a.lazy)((function(){return n.e(21).then(n.bind(null,135))})),R=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,143))})),W=Object(a.lazy)((function(){return n.e(19).then(n.bind(null,144))})),D=Object(a.lazy)((function(){return n.e(18).then(n.bind(null,127))})),T=Object(a.lazy)((function(){return n.e(13).then(n.bind(null,128))})),Z=Object(a.lazy)((function(){return n.e(17).then(n.bind(null,129))})),J=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,130))})),K=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,136))})),Y=Object(a.lazy)((function(){return n.e(14).then(n.bind(null,131))})),q=Object(a.lazy)((function(){return Promise.all([n.e(24),n.e(23)]).then(n.bind(null,145))})),G=Object(a.lazy)((function(){return n.e(15).then(n.bind(null,132))})),Q=Object(a.lazy)((function(){return n.e(12).then(n.bind(null,146))})),X=Object(a.lazy)((function(){return n.e(16).then(n.bind(null,133))})),$=Object(a.lazy)((function(){return n.e(25).then(n.bind(null,147))}));var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(x,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/test/:testName",component:k(A)}),r.a.createElement(j.b,{path:"/test"},r.a.createElement(M,null)),r.a.createElement(j.b,{path:"/createprofile"},r.a.createElement(Y,null)),r.a.createElement(j.b,{path:"/freecounseling",component:k(B)}),r.a.createElement(j.b,{path:"/freecounselingform",component:k(Z)}),r.a.createElement(j.b,{path:"/youthAdvocates",component:k(U)}),r.a.createElement(j.b,{path:"/profile/:name"},r.a.createElement(F,null)),r.a.createElement(j.b,{path:"/questions/:testname"},r.a.createElement(H,null)),r.a.createElement(j.b,{path:"/result/:testname/:score/:tips"},r.a.createElement(P,null)),r.a.createElement(j.b,{path:"/youthadvocate/:name"},r.a.createElement(R,null)),r.a.createElement(j.b,{path:"/blogs"},r.a.createElement(W,null)),r.a.createElement(j.b,{path:"/blog/:name"},r.a.createElement(D,null)),r.a.createElement(j.b,{path:"/blogger/:name"},r.a.createElement(T,null)),r.a.createElement(j.b,{exact:!0,path:"/login",component:G}),r.a.createElement(j.b,{exact:!0,path:"/profilemaker/:title",component:q}),r.a.createElement(j.b,{exact:!0,path:"/memberprofile/:title",component:X}),r.a.createElement(j.b,{exact:!0,path:"/mhscan",component:$}),r.a.createElement(j.b,{exact:!0,path:"/chat",component:k(K)}),r.a.createElement(j.b,{exact:!0,path:"/safespace",component:Q}),r.a.createElement(j.b,{exact:!0,path:"/entername",component:N}),r.a.createElement(j.b,{exact:!0,path:"/:name",component:J}),r.a.createElement(j.b,{exact:!0,path:"/",component:k(I)}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,2,3]]]);
//# sourceMappingURL=main.1ae4dc4e.chunk.js.map