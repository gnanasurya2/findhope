(this.webpackJsonpfindhope=this.webpackJsonpfindhope||[]).push([[10],{113:function(e,a,t){e.exports={outerWrapper:"college_outerWrapper__1Jkqr",background:"college_background__5vtxM",square:"college_square__2EEor",circle:"college_circle__uPkY9",collegeName:"college_collegeName__21Yq3",content:"college_content__1plHL",subContent:"college_subContent__1Acy1",founderContent:"college_founderContent__3hSE4",photo:"college_photo__32aI_",svg:"college_svg___Fr-U",orangeBox:"college_orangeBox__1yUc1",orangeText:"college_orangeText__1Jrgo",whiteText:"college_whiteText__2LBaH"}},114:function(e,a,t){e.exports=t.p+"static/media/humaaans1.0ee43966.png"},115:function(e,a,t){e.exports=t.p+"static/media/humaaans2.aed39a86.png"},128:function(e,a,t){"use strict";t.r(a);var n=t(34),o=t(13),r=t(0),l=t.n(r),c=t(113),s=t.n(c),i=t(2),m=(t(31),t(69)),u=t(114),p=t.n(u),g=t(115),d=t.n(g),f=t(32);a.default=function(e){var a=Object(i.h)().name,t=Object(r.useState)(null),c=Object(o.a)(t,2),u=c[0],g=c[1],h=f.a.firestore();return Object(r.useEffect)((function(){h.collection("safespace").doc(a).get().then((function(e){e.exists?(g(Object(n.a)({},e.data())),console.log(e.data(),e.id)):console.log("doesn't exist")}))}),[]),l.a.createElement("div",{className:s.a.outerWrapper},u?l.a.createElement("div",null,l.a.createElement("div",{className:s.a.background},l.a.createElement("div",{className:s.a.square}),l.a.createElement("div",{className:s.a.circle})),l.a.createElement("div",{className:s.a.content},l.a.createElement("h1",{className:s.a.collegeName},"pune"===u.url?"Pune":u.name),l.a.createElement("p",{className:s.a.subContent},"pune"===u.url?"Safe space is a empathetic and non-judgemental space built for pune's youth to vent out and get help.":"Safe space built by students of ".concat(u.name))),l.a.createElement("div",{className:s.a.founderContent},u.members.filter((function(e){return"Founder"===e.role})).map((function(e){return l.a.createElement(m.a,{name:e.name,url:e.url})})),l.a.createElement("h1",{className:s.a.collegeName},"Message from the ",u.cofounder?"founders":"founder"),l.a.createElement("p",{className:s.a.subContent},"It's not everyday that you have an opportunity to make the world a happier place. With Safe space ",u.url," we are going to completely transform the way people around us percieve and deal with mental health issues")),l.a.createElement("img",{src:p.a,alt:"svg",className:s.a.svg}),l.a.createElement("div",{className:s.a.orangeBox},l.a.createElement("p",{className:s.a.orangeText},"As students we face a lot of challenges for the very first time in our lives. From Acadamic stress to relationships Issues, anything that stops you from being at your full potential, can be dealt easily by maintaing a positive mental health. Join our safe space and learn emotional first aid to keep a positive mental health.")),l.a.createElement("h1",{className:s.a.whiteText},"The easiest way to maintain a positive mindset"),l.a.createElement("img",{src:d.a,alt:"svg",className:s.a.svg}),l.a.createElement("h1",{className:s.a.whiteText},"Spend just 10 minutes a day for 11 days in a row to learn emotional first aid and get better at dealing with common problems in life ( from acadamic stress to relationships etc)"),u.members.length>1?l.a.createElement("div",{className:s.a.orangeBox},l.a.createElement("h1",{className:s.a.orangeText,style:{marginTop:"30px"}},"Members"),u.members.filter((function(e){return"Member"===e.role})).map((function(e){return l.a.createElement(m.a,{name:e.name,url:e.url,color:"white"})}))):null):null)}},69:function(e,a,t){"use strict";var n=t(12),o=t(0),r=t.n(o),l=t(11);function c(){var e=Object(n.a)(["\n  font-size: 32px;\n  margin: 5px 0px;\n  color: ",";\n  text-align: center;\n"]);return c=function(){return e},e}function s(){var e=Object(n.a)(["\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n"]);return s=function(){return e},e}function i(){var e=Object(n.a)(["\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 20px 0px;\n"]);return i=function(){return e},e}var m=l.a.div(i()),u=l.a.img(s()),p=l.a.h1(c(),(function(e){return e.color}));a.a=function(e){return r.a.createElement(m,null,r.a.createElement(u,{src:e.url||""+"/assest/".concat(e.photo),alt:"find hope member"}),r.a.createElement(p,{color:e.color},e.name),r.a.createElement("h2",null,e.title))}}}]);
//# sourceMappingURL=10.4b0a8dc2.chunk.js.map