(this.webpackJsonpnetflixroulette=this.webpackJsonpnetflixroulette||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(10),a=n.n(s),r=(n(17),n(5)),l=(n(18),n(2)),j=(n(19),n(20),n(21),n(0)),o=function(){return Object(j.jsx)("input",{className:"input",type:"text"})},u=function(){return Object(j.jsx)("form",{className:"forma",children:Object(j.jsx)(o,{})})},d=(n(23),n(24),function(e){var t=Object(l.a)({},e),n=t.name,c=t.handleClick;return Object(j.jsx)("button",{type:"button",className:"button",onClick:c,children:n})}),b=function(e){var t=Object(l.a)({},e),n=t.info,c=t.nameBtn1,i=t.nameBtn2;return Object(j.jsxs)("div",{className:"filter",children:[Object(j.jsxs)("p",{children:[n," ","by"]}),Object(j.jsx)(d,{name:c}),Object(j.jsx)(d,{name:i})]})},f=(n(25),function(){return Object(j.jsx)("h1",{className:"logo",children:" netflixroulette "})}),m=function(e){var t=Object(l.a)({},e).handleClick;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(f,{}),Object(j.jsx)("h2",{className:"header__title",children:" find your movie "}),Object(j.jsx)(u,{}),Object(j.jsx)(b,{info:"search",nameBtn1:"title",nameBtn2:"genre"}),Object(j.jsx)(d,{name:"Search",handleClick:t})]})},O=(n(26),n(27),function(e){var t=Object(l.a)({},e).count;return Object(j.jsx)("div",{className:"films-counter",children:Object(j.jsxs)("p",{children:[t," ","movies found"]})})}),h=(n(28),function(e){var t=Object(l.a)({},e),n=t.film,c=t.showModal;return Object(j.jsxs)("div",{className:"film",role:"button",tabIndex:0,onKeyDown:c,onClick:c,children:[Object(j.jsx)("div",{className:"film__poster",children:Object(j.jsx)("img",{src:n.poster_path,alt:n.title,className:"posters"})}),Object(j.jsxs)("div",{className:"film__info",children:[Object(j.jsxs)("div",{className:"film__description",children:[Object(j.jsx)("div",{className:"film__title",children:Object(j.jsx)("p",{children:n.title})}),Object(j.jsx)("div",{className:"film__genres",children:Object(j.jsx)("p",{children:n.genres.join(", ")})})]}),Object(j.jsx)("div",{className:"film__date",children:Object(j.jsx)("p",{children:n.release_date.slice(0,4)})})]})]})}),x=(n(29),n(30),function(e){var t=Object(l.a)({},e),n=t.active,c=t.setActive;return Object(j.jsx)("div",{className:n?"modal active":"modal",role:"button",tabIndex:0,onClick:function(){return c(!1)},onKeyDown:c,children:Object(j.jsx)("div",{className:n?"modal__content active":"modal",onClick:function(e){return e.stopPropagation()},role:"button",tabIndex:0,onKeyDown:c,children:Object(j.jsx)("p",{children:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430"})})})}),v=function(e){var t=Object(l.a)({},e).films,n=Object(c.useState)(!1),i=Object(r.a)(n,2),s=i[0],a=i[1];return Object(j.jsxs)("div",{className:"films",children:[t.map((function(e){return Object(j.jsx)(h,{film:e,showModal:function(){return a(!0)}})})),Object(j.jsx)(x,{active:s,setActive:a})]})},p=function(e){var t=Object(l.a)({},e).films;return Object(j.jsxs)("main",{className:"main",children:[Object(j.jsxs)("div",{className:"main__title",children:[Object(j.jsx)(O,{count:t.length}),Object(j.jsx)(b,{info:"sort",nameBtn1:"release date",nameBtn2:"rating"})]}),Object(j.jsx)(v,{films:t})]})},N=(n(31),function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)(f,{})})}),_=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(m,{handleClick:function(){return fetch("".concat("https://reactjs-cdp.herokuapp.com/movies","?search=").concat(e,"&searchBy=").concat(t)).then((function(e){return e.json()})).then((function(e){i(e.data)}));var e,t}}),Object(j.jsx)(p,{films:n}),Object(j.jsx)(N,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))},k=n(12),C=function(e){var t=e.children;return Object(j.jsx)(k.a,{children:t})};C.defaultProps={children:null};var y=C;a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(y,{children:Object(j.jsx)(_,{})})}),document.getElementById("root")),g()}],[[40,1,2]]]);
//# sourceMappingURL=main.8d48e671.chunk.js.map