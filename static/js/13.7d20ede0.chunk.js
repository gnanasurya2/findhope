(this.webpackJsonpfindhope=this.webpackJsonpfindhope||[]).push([[13],{123:function(e,t,n){e.exports={wrapper:"SafeSpace_wrapper__IyIyh",title:"SafeSpace_title__3XFJV",card:"SafeSpace_card__1sv3N"}},124:function(e,t,n){e.exports=n.p+"static/media/edit.48b4c803.svg"},149:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(12),c=n(0),i=n.n(c),o=n(123),u=n.n(o),l=n(10),s=n(11),f=n(124),m=n.n(f),p=n(2);function d(){var e=Object(l.a)(["\n  border: none;\n  background: transparent;\n  cursor: pointer;\n"]);return d=function(){return e},e}function b(){var e=Object(l.a)(["\n  height: 25px;\n"]);return b=function(){return e},e}function g(){var e=Object(l.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  height: 50px;\n  background-color: orange;\n  border-radius: 10px;\n  padding: 0px 15px;\n  margin: 15px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return g=function(){return e},e}var h=s.a.div(g()),x=s.a.img(b()),v=s.a.button(d()),E=function(e){var t=Object(p.g)();return i.a.createElement(h,null,i.a.createElement("h2",null,e.title),i.a.createElement(v,{onClick:function(){JSON.parse(sessionStorage.getItem("data")).members.length?t.push("/memberprofile/"+e.title):t.push("/profilemaker/"+e.title)}},i.a.createElement(x,{src:m.a,alt:"edit"})))},j=n(28),O=n(67);t.default=function(e){var t=Object(c.useState)(null),n=Object(r.a)(t,2),o=n[0],l=n[1],s=Object(c.useState)(null),f=Object(r.a)(s,2),m=f[0],p=f[1];return Object(c.useEffect)((function(){j.a.then((function(e){return p(e.firestore())}))}),[]),Object(c.useEffect)((function(){var e=sessionStorage.getItem("email");m&&m.collection("safespace").where("email","==",e).get().then((function(e){e.size?e.forEach((function(e){l(Object(a.a)({name:e.id},e.data())),console.log(e.data()),sessionStorage.setItem("data",JSON.stringify(Object(a.a)({name:e.id},e.data())))})):alert("account not found")}))}),[m]),i.a.createElement("div",{className:u.a.wrapper},o?i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:u.a.title},"SafeSpace ",o.name),i.a.createElement(E,{title:"Founder"}),o.members.filter((function(e){return"Founder"===e.role})).map((function(e){return i.a.createElement("div",{className:u.a.card},i.a.createElement(O.a,{title:e.name,url:e.url}))})),i.a.createElement(E,{title:"Member"}),o.members.filter((function(e){return"Member"===e.role})).map((function(e){return i.a.createElement("div",{className:u.a.card},i.a.createElement(O.a,{title:e.name,url:e.url}))}))):null)}},67:function(e,t,n){"use strict";var a=n(10),r=n(0),c=n.n(r),i=n(11);function o(){var e=Object(a.a)(["\n  font-size: 32px;\n  margin: 5px 0px;\n  color: ",";\n  text-align: center;\n"]);return o=function(){return e},e}function u(){var e=Object(a.a)(["\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n"]);return u=function(){return e},e}function l(){var e=Object(a.a)(["\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px 0px;\n"]);return l=function(){return e},e}var s=i.a.div(l()),f=i.a.img(u()),m=i.a.h1(o(),(function(e){return e.color}));t.a=function(e){return c.a.createElement(s,null,c.a.createElement(f,{src:e.url||""+"/assest/".concat(e.photo),alt:"find hope member"}),c.a.createElement(m,{color:e.color},e.name),c.a.createElement("h2",null,e.title))}}}]);
//# sourceMappingURL=13.7d20ede0.chunk.js.map