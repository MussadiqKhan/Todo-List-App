(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(13)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),o=a.n(l),r=(a(11),a(4)),s=a(1);a(12);var m=function(){var e=JSON.parse(localStorage.getItem("todo"))||[],t=Object(n.useState)(e),a=Object(s.a)(t,2),l=a[0],o=a[1],m=Object(n.useState)(""),i=Object(s.a)(m,2),u=i[0],d=i[1];Object(n.useEffect)(function(){localStorage.setItem("todo",JSON.stringify(l))},[l]);var v=function(e){var t=l.filter(function(t){return t!==e.target.value});o(t)};return c.a.createElement("div",{className:"App container-fluid"},c.a.createElement("div",{className:"row mt-5"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-2"}),c.a.createElement("div",{className:"input-group col-lg-4 col-md-7 col-sm-3 col-xs-4 "},c.a.createElement("input",{type:"text",id:"noteinput",className:"form-control ",placeholder:"Enter a new note"}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){var e=document.querySelector("#noteinput").value.trim();l.includes(e)?(d("Task is already in todo list"),document.querySelector("#noteinput").value=""):(d(""),o(function(t){return[].concat(Object(r.a)(t),[e])}),document.querySelector("#noteinput").value="")}},"Add note")))),c.a.createElement("div",{className:"row mt-5"},c.a.createElement("div",{className:"col-lg-5 col-md-2 col-sm-1 "}),c.a.createElement("div",{className:"col-lg-3 col-md-2 col-sm-1 "},c.a.createElement("p",{className:"message text-danger center"},u))),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col-lg-3 col-md-2 col-sm-1"}),c.a.createElement("table",{className:"table table-borderless col-lg-8 col-md-9 md-offset-2 col-sm-7 col-xs-4 "},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col "},"Task"),c.a.createElement("th",{scope:"col"},"Action"))),l.map(function(e){return c.a.createElement("tr",{key:e},c.a.createElement("td",null,e),c.a.createElement("td",null," ",c.a.createElement("button",{className:"btn btn-danger",value:e,onClick:v},"Remove")))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.69cdf808.chunk.js.map