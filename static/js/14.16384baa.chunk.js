(this.webpackJsonpfindhope=this.webpackJsonpfindhope||[]).push([[14],{129:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(0),l=n.n(r),c=n(66),i=n.n(c),o=n(33),u=n(31),s=n(32),m=n(2),f=n(63);t.default=function(e){var t=Object(r.useState)(""),n=Object(a.a)(t,2),c=n[0],p=n[1],h=Object(r.useState)(null),d=Object(a.a)(h,2),b=d[0],g=d[1],E=Object(r.useState)(""),j=Object(a.a)(E,2),v=j[0],O=j[1],w=Object(r.useState)(""),x=Object(a.a)(w,2),y=x[0],C=x[1],S=Object(r.useState)(""),_=Object(a.a)(S,2),P=_[0],k=_[1],B=Object(r.useState)(!1),T=Object(a.a)(B,2),N=T[0],F=T[1],I=Object(r.useState)(!1),J=Object(a.a)(I,2),L=J[0],U=J[1],z=s.a.firestore();Object(m.g)();return l.a.createElement("div",{className:i.a.wrapper},l.a.createElement("div",{className:i.a.loginBox},N?l.a.createElement(m.a,{to:"/login"}):null,b?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Create Profile"),l.a.createElement(o.a,{title:"Email",value:v,onChangeText:function(e){return O(e.target.value)}}),l.a.createElement(o.a,{title:"Password",value:y,onChangeText:function(e){return C(e.target.value)}}),l.a.createElement(o.a,{title:"Confirm Password",value:P,onChangeText:function(e){return k(e.target.value)}}),l.a.createElement(u.a,{title:L?"":"Sign Up",onClick:function(){y.length<6?alert("password must be atleast 6 characters"):y!==P?alert("passwords don't match"):s.a.auth().createUserWithEmailAndPassword(v,y).then((function(e){z.collection("payments").doc(b.order_id).set({email:v,payment:c}).then((function(){return F(!0)}))})).catch((function(e){return alert(e.message)}))}},L?l.a.createElement(f.a,null):null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Create Profile"),l.a.createElement(o.a,{title:"payment Id",value:c,onChangeText:function(e){return p(e.target.value)}}),l.a.createElement("p",null,"payment ID is sent in email "),l.a.createElement(u.a,{title:L?"":"Next",onClick:function(){U(!0),z.collection("payments").where("payment","==",c).get().then((function(e){e.size?e.forEach((function(e){alert("payment_id is already in use")})):fetch("https://limitless-springs-02261.herokuapp.com/api/payments/".concat(c)).then((function(e){return e.json()})).then((function(e){U(!1),e.statusCode?alert(e.error.description):g(e)})).catch((function(e){alert(e.error.description),U(!1)}))})).catch((function(e){alert(e),U(!1)}))}},L?l.a.createElement(f.a,null):null))))}},63:function(e,t,n){"use strict";var a=n(12),r=n(0),l=n.n(r),c=n(11);function i(){var e=Object(a.a)(["\n  border: 6px solid #f3f3f3; /* Light grey */\n  border-top: 6px solid #3498db; /* Blue */\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  animation: "," 2s linear infinite;\n"]);return i=function(){return e},e}function o(){var e=Object(a.a)(["\n0% { transform: rotate(0deg); }\n100% { transform: rotate(360deg); }\n"]);return o=function(){return e},e}var u=Object(c.b)(o()),s=c.a.div(i(),u);t.a=function(e){return l.a.createElement(s,{style:e.style})}},66:function(e,t,n){e.exports={wrapper:"CreateProfile_wrapper__1wGnM",loginBox:"CreateProfile_loginBox__2vRnL"}}}]);
//# sourceMappingURL=14.16384baa.chunk.js.map