(this.webpackJsonpfindhope=this.webpackJsonpfindhope||[]).push([[23],{121:function(e,t,n){e.exports={wrapper:"ImageCropper_wrapper__1nCsw",preview:"ImageCropper_preview__2OrzB"}},145:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(13),i=n(0),c=n.n(i),l=n(38),u=n.n(l),o=n(2),s=n(34),h=n(120),d=n.n(h),m=n(121),g=n.n(m),f=(n(122),n(32)),p=n(31),v=function(e){var t,n,a=Object(i.useState)(),l=Object(r.a)(a,2),u=l[0],o=l[1],s=Object(i.useRef)(null),h=Object(i.useRef)(null),m=Object(i.useState)({unit:"px",width:100,aspect:1}),v=Object(r.a)(m,2),b=v[0],w=v[1],O=Object(i.useState)(null),j=Object(r.a)(O,2),E=j[0],C=j[1];Object(i.useEffect)((function(){if(E&&h.current&&s.current){var e=s.current,t=h.current,n=E,a=e.naturalWidth/e.width,r=e.naturalHeight/e.height,i=t.getContext("2d");t.width=4*n.width,t.height=4*n.height,i.setTransform(4,0,0,4,0,0),i.imageSmoothingEnabled=!1,i.drawImage(e,n.x*a,n.y*r,n.width*a,n.height*r,0,0,n.width,n.height)}}),[E]);var S=function(t,n){n&&t&&function(e,t,n){var a=document.createElement("canvas");return a.width=t,a.height=n,a.getContext("2d").drawImage(e,0,0,e.width,e.height,0,0,t,n),a}(t,n.width,n.height).toBlob((function(t){var n=f.a.storage().ref().child(e.name+".png");n.put(t).then((function(t){n.getDownloadURL().then((function(t){return e.submit(t)}))}))}),"image/png",1)},x=Object(i.useCallback)((function(e){return s.current=e}),[]);return c.a.createElement("div",{className:g.a.wrapper},c.a.createElement("div",null,c.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){return o(t.result)})),t.readAsDataURL(e.target.files[0])}}})),c.a.createElement(d.a,{src:u,onImageLoaded:x,crop:b,onChange:function(e){return w(e)},onComplete:function(e){return C(e)}}),(null===E||void 0===E?void 0:E.width)||(null===E||void 0===E?void 0:E.height)?c.a.createElement("div",{className:g.a.preview,style:{width:E.width,height:E.height}},c.a.createElement("canvas",{ref:h,style:{width:null!==(t=null===E||void 0===E?void 0:E.width)&&void 0!==t?t:0,height:null!==(n=null===E||void 0===E?void 0:E.height)&&void 0!==n?n:0}})):null,(null===E||void 0===E?void 0:E.width)||(null===E||void 0===E?void 0:E.height)?c.a.createElement(p.a,{type:"button",onClick:function(){return S(h.current,E)}},"Upload"):null)};t.default=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),l=n[0],h=n[1],d=Object(i.useState)(""),m=Object(r.a)(d,2),g=m[0],b=m[1],w=Object(i.useState)(!1),O=Object(r.a)(w,2),j=O[0],E=O[1],C=Object(o.h)().title,S=f.a.firestore(),x=Object(o.g)(),I=function(e){if(j){var t=JSON.parse(sessionStorage.getItem("data"));S.collection("safespace").doc(t.name.toLowerCase()).update({members:[].concat(Object(a.a)(t.members),[{role:C,name:g,url:e}])}).then((function(){return x.push("/safespace")})).catch((function(e){return alert(e.message)}))}else{if(!g.length)return void alert("Enter the name");E(!0)}};return Object(i.useEffect)((function(){sessionStorage.getItem("token")||h(!0)}),[]),c.a.createElement("div",{className:u.a.wrapper},l?c.a.createElement(o.a,{to:"/login"}):null,c.a.createElement("div",{className:u.a.imageUploader},j?c.a.createElement(v,{submit:I,name:g}):c.a.createElement("div",{className:u.a.flex},c.a.createElement(s.a,{title:"enter the name",value:g,onChangeText:function(e){return b(e.target.value)}}),c.a.createElement(p.a,{title:"Next",onClick:I}))))}}}]);
//# sourceMappingURL=23.9d03aef2.chunk.js.map