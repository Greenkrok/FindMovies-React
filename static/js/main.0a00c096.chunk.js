(this.webpackJsonpnetflixroulette=this.webpackJsonpnetflixroulette||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(10),r=n.n(s),a=(n(17),n(18),n(19),n(20),n(21),n(0)),o=function(){return Object(a.jsx)("input",{className:"input",type:"text"})},l=function(){return Object(a.jsx)("form",{className:"forma",children:Object(a.jsx)(o,{})})},j=n(3),u=(n(23),n(24),function(e){var t=Object(j.a)({},e),n=t.name,c=t.onClick;return Object(a.jsx)("button",{type:"button",className:"button",onClick:c,children:n})}),d=function(e){var t=Object(j.a)({},e),n=t.info,c=t.nameBtn1,i=t.nameBtn2;return Object(a.jsxs)("div",{className:"filter",children:[Object(a.jsxs)("p",{children:[n," ","by"]}),Object(a.jsx)(u,{name:c}),Object(a.jsx)(u,{name:i})]})},b=(n(25),function(){return Object(a.jsx)("h1",{className:"logo",children:" netflixroulette "})}),f=function(){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)(b,{}),Object(a.jsx)("h2",{className:"header__title",children:" find your movie "}),Object(a.jsx)(l,{}),Object(a.jsx)(d,{info:"search",nameBtn1:"title",nameBtn2:"genre"}),Object(a.jsx)(u,{name:"Search",onClick:function(){return console.log("\u041d\u0430\u0436\u0430\u0442\u0430 \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u043e\u0438\u0441\u043a\u0430")}})]})},m=n(5),O=(n(26),n(27),function(e){var t=Object(j.a)({},e).count;return Object(a.jsx)("div",{className:"films-counter",children:Object(a.jsxs)("p",{children:[t," ","movies found"]})})}),h=(n(28),function(e){var t=Object(j.a)({},e),n=t.film,c=t.showModal;return Object(a.jsxs)("div",{className:"film",role:"button",tabIndex:0,onKeyDown:c,onClick:c,children:[Object(a.jsx)("div",{className:"film__poster",children:Object(a.jsx)("img",{src:n.poster_path,alt:n.title,className:"posters"})}),Object(a.jsxs)("div",{className:"film__info",children:[Object(a.jsxs)("div",{className:"film__description",children:[Object(a.jsx)("div",{className:"film__title",children:Object(a.jsx)("p",{children:n.title})}),Object(a.jsx)("div",{className:"film__genres",children:Object(a.jsx)("p",{children:n.genres.join(", ")})})]}),Object(a.jsx)("div",{className:"film__date",children:Object(a.jsx)("p",{children:n.release_date.slice(0,4)})})]})]})}),x=(n(29),n(30),function(e){var t=Object(j.a)({},e),n=t.active,c=t.setActive,i=t.children;return Object(a.jsx)("div",{className:n?"modal active":"modal",role:"button",tabIndex:0,onClick:function(){return c(!1)},onKeyDown:c,children:Object(a.jsx)("div",{className:n?"modal__content active":"modal",onClick:function(e){return e.stopPropagation()},role:"button",tabIndex:0,onKeyDown:c,children:i})})}),v=function(e){var t=Object(j.a)({},e).films,n=Object(c.useState)(!1),i=Object(m.a)(n,2),s=i[0],r=i[1];return Object(a.jsxs)("div",{className:"films",children:[t.map((function(e){return Object(a.jsx)(h,{film:e,showModal:function(){return r(!0)}})})),Object(a.jsx)(x,{active:s,setActive:r,children:Object(a.jsx)("p",{children:"\u0422\u0443\u0442 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0444\u0438\u043b\u044c\u043c\u0435"})})]})},p=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("https://reactjs-cdp.herokuapp.com/movies?search=&searchBy=title\n").then((function(e){return e.json()})).then((function(e){i(e.data)}))}),[]),Object(a.jsxs)("main",{className:"main",children:[Object(a.jsxs)("div",{className:"main__title",children:[Object(a.jsx)(O,{count:n.length}),Object(a.jsx)(d,{info:"sort",nameBtn1:"release date",nameBtn2:"rating"})]}),Object(a.jsx)(v,{films:n})]})},N=(n(31),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)(b,{})})}),_=function(){return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(f,{}),Object(a.jsx)(p,{}),Object(a.jsx)(N,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))},k=n(12),y=function(e){var t=e.children;return Object(a.jsx)(k.a,{children:t})};y.defaultProps={children:null};var B=y;r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(B,{children:Object(a.jsx)(_,{})})}),document.getElementById("root")),g()}],[[40,1,2]]]);
//# sourceMappingURL=main.0a00c096.chunk.js.map