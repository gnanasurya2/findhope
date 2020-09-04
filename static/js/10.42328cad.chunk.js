(this.webpackJsonpfindhope=this.webpackJsonpfindhope||[]).push([[10],{128:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(66),o=t.n(i),c=t(20),s=t(19);function l(){var e=Object(c.a)(["\n  padding-left: 20px;\n  color: ",";\n  font-size: 24px;\n  width: 80%;\n  @media screen and (min-width: 700px) {\n    font-size: 36px;\n  }\n"]);return l=function(){return e},e}function u(){var e=Object(c.a)(["\n  width: 95%;\n  margin: 20px 2.5%;\n  padding: 24px 0px;\n  border-radius: 20px;\n  background-color: ",";\n  cursor: pointer;\n  @media screen and (min-width: 1200px) {\n    width: 60%;\n    margin: 40px 20%;\n    cursor: pointer;\n  }\n"]);return u=function(){return e},e}var d=s.a.div(u(),(function(e){return e.background})),m=s.a.h1(l(),(function(e){return e.color})),p=function(e){return r.a.createElement(d,{background:e.background,onClick:e.clicked},r.a.createElement(m,{color:e.color},e.title))},f=t(48),g=t(9),b=t(67);n.default=function(e){return Object(a.useEffect)((function(){window.scrollTo({top:0})}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:o.a.container},r.a.createElement("div",{className:o.a.backgroundImage},r.a.createElement("div",{className:o.a.backgroundSquare}),r.a.createElement("div",{className:o.a.backgroundCircle})),r.a.createElement("div",{className:o.a.titleContainer},r.a.createElement("h1",{className:o.a.mainTitle},"Assessments"),r.a.createElement("p",{className:o.a.mainContent},"Simple questionnaires on various topics to help you understand yourself better.",r.a.createElement("br",null),r.a.createElement("br",null),"Choose the ones that comes closest to describing your problem."))),r.a.createElement("div",{className:o.a.testContainer},r.a.createElement(g.c,{to:"/test/depression",style:{textDecoration:"none"}},r.a.createElement(p,{title:"Am I sad or Depressed ?",background:"#4dabde",color:"#dcf0f7"})),r.a.createElement(g.c,{to:"/test/stress",style:{textDecoration:"none"}},r.a.createElement(p,{title:"Am I Stressed ?",background:"#fce9a2",color:"#807a7d"})),r.a.createElement(g.c,{to:"/test/anxiety",style:{textDecoration:"none"}},r.a.createElement(p,{title:"Am I Anxious ?",background:"#6992d9",color:"#d9d9a9"}))),r.a.createElement(f.a,{data:b}))}},48:function(e,n,t){"use strict";var a=t(11),r=t(20),i=t(0),o=t.n(i),c=t(19),s=t(49),l=t.n(s);function u(){var e=Object(r.a)(["\n  position: relative;\n  bottom: 0px;\n  width: 70px;\n"]);return u=function(){return e},e}function d(){var e=Object(r.a)(["\n  font-size: 24px;\n  text-align: center;\n  width: 95%;\n"]);return d=function(){return e},e}function m(){var e=Object(r.a)(["\n  width: 20px;\n  height: 20px;\n  background-color: transparent;\n  transform: rotateZ(",");\n  border: solid 3px black;\n  border-color: transparent transparent black black;\n  cursor: pointer;\n  transition: all 0.2s;\n  &:hover {\n    transform: rotateZ(",")\n      scale(1.2);\n  }\n"]);return m=function(){return e},e}function p(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return p=function(){return e},e}function f(){var e=Object(r.a)(["\n  width: 95%;\n  margin: 30px 2.5%;\n  marign-bottom: 40px;\n  padding: 40px 0px;\n  min-height: 350px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 12px;\n  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.2);\n  justify-content: flex-start;\n  align-items: center;\n  @media screen and (min-width: 1200px) {\n    width: 40%;\n    margin-left: 30%;\n    padding: 60px 0px;\n    min-height: 220px;\n  }\n"]);return f=function(){return e},e}var g=c.a.div(f()),b=c.a.div(p()),x=c.a.div(m(),(function(e){return e.left?"45deg":"225deg"}),(function(e){return e.left?"45deg":"225deg"})),h=c.a.p(d()),k=c.a.img(u());n.a=function(e){var n=Object(i.useState)(e.data),t=Object(a.a)(n,1)[0],r=Object(i.useState)(0),c=Object(a.a)(r,2),s=c[0],u=c[1],d=function(e){var n=t.testimonial.length-1;u(-1===e&&0===s?n:1===e&&s===n?0:function(n){return n+e})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null,o.a.createElement(k,{src:l.a,alt:"quotation mark"}),o.a.createElement(b,null,o.a.createElement(x,{left:!0,onClick:function(){return d(-1)}}),o.a.createElement("h1",{style:{fontSize:"24px",marginTop:"24px",marginBottom:"24px",marginLeft:"10px",marginRight:"10px"}},t.testimonial[s].name),o.a.createElement(x,{onClick:function(){return d(1)}})),o.a.createElement(h,null,t.testimonial[s].content)))}},49:function(e,n,t){e.exports=t.p+"static/media/iconmonstr-quote-7.adad3167.svg"},66:function(e,n,t){e.exports={container:"Testpage_container__Lhfvg",backgroundImage:"Testpage_backgroundImage__2uUVW",backgroundSquare:"Testpage_backgroundSquare__QMtsP",backgroundCircle:"Testpage_backgroundCircle__1w_Al",titleContainer:"Testpage_titleContainer__2-hBl",mainTitle:"Testpage_mainTitle__3C2DV",mainContent:"Testpage_mainContent__3iiU-"}},67:function(e){e.exports=JSON.parse('{"testimonial":[{"content":"I was initially afraid and hesitant about taking the test, but then I took it and found out what was affecting me. Believe me its better this way .","name":"Shreya"},{"content":"Its good that you take time to introspect and find how are you dealing with stress . Its all about awareness","name":"Aziz"}]}')}}]);
//# sourceMappingURL=10.42328cad.chunk.js.map