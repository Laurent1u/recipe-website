(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),o=(n(12),n(2)),s=n.n(o),l=n(5),u=n(1),m=function(e){var t=e.title,n=e.calories,a=e.image,r=e.ingredients;return c.a.createElement("div",null,c.a.createElement("h1",null,t),c.a.createElement("ol",null,r.map(function(e,t){return c.a.createElement("li",{key:t},e.text)})),c.a.createElement("p",null,n),c.a.createElement("img",{src:a,alt:""}))},p=(n(14),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),p=o[0],f=o[1],d=Object(a.useState)(""),b=Object(u.a)(d,2),h=b[0],v=b[1];Object(a.useEffect)(function(){!function(){var e=Object(l.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("fa6fdf86","&app_key=").concat("83c74dd3d52d4f1f5af6dbc83bbcbb30"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.hits);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[h]);return c.a.createElement("div",{className:"App"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),v(p),f("")}},c.a.createElement("input",{className:"search-bar",type:"text",value:p,onChange:function(e){f(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),n.map(function(e,t){return c.a.createElement(m,{key:t,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports=n(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.245d1871.chunk.js.map