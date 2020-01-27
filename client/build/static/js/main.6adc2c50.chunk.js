(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,a,t){e.exports=t(83)},55:function(e,a,t){},56:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(20),l=t.n(r),i=(t(55),t(87)),o=t(16),m=t(7),u=t(88),s=t(89),d=t(10);t(56);function b(){var e=Object(n.useState)("All Articles"),a=Object(m.a)(e,2),t=a[0],r=a[1],l=function(e){r(e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{className:"navBar",expand:"lg"},c.a.createElement("h4",null," | ",t),c.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(s.a,{className:"ml-auto"},c.a.createElement(s.a.Link,{className:"mr-5 fontSize"},c.a.createElement(d.b,{onClick:function(){return l("All Articles")},style:{color:"black"},to:"/"},"All Articles")),c.a.createElement(s.a.Link,{className:"mr-5 fontSize"},c.a.createElement(d.b,{onClick:function(){return l("Add New Article")},style:{color:"black"},to:"/article/add"},"Add New Article")),c.a.createElement("a",{className:"mr-5 mt-2 fontSize",href:"https://www.linkedin.com/in/saurav-sehgal/",target:"_blank"},"My Linkedin"),c.a.createElement("a",{className:"mr-5 mt-2 fontSize",href:"https://github.com/sauravsehgal24",target:"_blank"},"My Github")))))}var E=t(30),h=t(15),g=t.n(h);function f(e){var a=Object(n.useState)({articles:[]}),t=Object(m.a)(a,2),r=t[0],l=t[1];return Object(n.useEffect)((function(){g.a.get("/api/articles").then((function(e){var a=e.data;l({articles:[].concat(Object(E.a)(r.articles),Object(E.a)(a))}),console.log(r)})).catch((function(e){throw e}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,c.a.createElement("u",null,"Articles")),r.articles.map((function(e){return c.a.createElement(d.b,{to:"/article/".concat(e.name)},c.a.createElement("h3",null,e.name))})))}var p=t(49),v=t(85);function N(e){var a=Object(n.useState)({article:{}}),t=Object(m.a)(a,2),r=t[0],l=t[1];return Object(n.useEffect)((function(){g.a.get("/api/articles/"+e.match.params.name).then((function(e){console.log(e);var a=e.data;l(Object(p.a)({},r,{article:a}))})).catch((function(e){throw e}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,c.a.createElement("u",null,r.article.name),c.a.createElement(d.b,{to:"/article/edit/"+r.article.name},c.a.createElement(v.a,{variant:"link",size:"lg"},"Edit"))),c.a.createElement("h3",null,"Author: ",r.article.author),c.a.createElement("h3",null,"Genere: ",r.article.genere))}var j=t(90),O=t(86),A=t(91);function k(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),u=o[0],s=o[1],d=Object(n.useState)(""),b=Object(m.a)(d,2),E=b[0],h=b[1],f=function(e,a){"Name"===a?l(e.target.value):"Author"===a?s(e.target.value):h(e.target.value)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,null,c.a.createElement("h1",null,"New Article "),c.a.createElement(O.a,{className:"mb-3"},c.a.createElement(O.a.Prepend,null,c.a.createElement(O.a.Text,{id:"basic-addon1"},"Name")),c.a.createElement(A.a,{"aria-label":"Name","aria-describedby":"basic-addon1",onChange:function(e){f(e,"Name")}})),c.a.createElement(O.a,{className:"mb-3"},c.a.createElement(O.a.Prepend,null,c.a.createElement(O.a.Text,{id:"basic-addon1"},"Author")),c.a.createElement(A.a,{"aria-label":"Author","aria-describedby":"basic-addon1",onChange:function(e){f(e,"Author")}})),c.a.createElement(O.a,{className:"mb-3"},c.a.createElement(O.a.Prepend,null,c.a.createElement(O.a.Text,{id:"basic-addon1"},"Genere")),c.a.createElement(A.a,{"aria-label":"Genere","aria-describedby":"basic-addon1",onChange:function(e){f(e,"Genere")}})),c.a.createElement(v.a,{variant:"primary",size:"lg",onClick:function(){return function(){console.log("name: ".concat(r,"  author=").concat(u," genere=").concat(E));var a={name:r,author:u,genere:E};g.a.put("/api/articles/"+r,a).then((function(a){console.log(a),e.history.push("/")})).catch((function(e){console.log(e)}))}()}},"Add"),c.a.createElement(v.a,{className:"mt-3",variant:"danger",size:"lg",onClick:function(){return e.history.push("/")}},"Cancel")))}function y(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],l=t[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),u=o[0],s=o[1],d=Object(n.useState)(""),b=Object(m.a)(d,2),E=b[0],h=b[1],f=function(e,a){"Author"===a?s(e.target.value):"Genere"===a?h(e.target.value):l(e.target.value)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,null,c.a.createElement("h1",null,"Edit Article ",c.a.createElement("i",null,'"',e.match.params.name,'"')),c.a.createElement(O.a,{className:"mb-3"},c.a.createElement(O.a.Prepend,null,c.a.createElement(O.a.Text,{id:"basic-addon1"},"Name")),c.a.createElement(A.a,{"aria-label":"Name","aria-describedby":"basic-addon1",onChange:function(e){f(e,"Name")}})),c.a.createElement(O.a,{className:"mb-3"},c.a.createElement(O.a.Prepend,null,c.a.createElement(O.a.Text,{id:"basic-addon1"},"Author")),c.a.createElement(A.a,{"aria-label":"Author","aria-describedby":"basic-addon1",onChange:function(e){f(e,"Author")}})),c.a.createElement(O.a,{className:"mb-3"},c.a.createElement(O.a.Prepend,null,c.a.createElement(O.a.Text,{id:"basic-addon1"},"Genere")),c.a.createElement(A.a,{"aria-label":"Genere","aria-describedby":"basic-addon1",onChange:function(e){f(e,"Genere")}})),c.a.createElement(v.a,{variant:"primary",size:"lg",onClick:function(){return function(){var a={name:r,author:u,genere:E};g.a.put("/api/articles/"+e.match.params.name,a).then((function(a){console.log(a),e.history.push("/")})).catch((function(e){console.log(e)}))}()}},"Update"),c.a.createElement(v.a,{className:"mt-3",variant:"danger",size:"lg",onClick:function(){return e.history.push("/")}},"Cancel")))}t(82);function w(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement(i.a,{className:"splashPageContainer",fluid:!0},c.a.createElement(o.c,null,c.a.createElement(o.a,Object.assign({exact:!0,path:"/article/add"},e,{component:k})),c.a.createElement(o.a,{exact:!0,path:"/article/edit/:name",component:y}),c.a.createElement(o.a,{exact:!0,path:"/article/:name",component:N}),c.a.createElement(o.a,{exact:!0,path:"/",component:f})))))}var C=function(){return c.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(d.a,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.6adc2c50.chunk.js.map