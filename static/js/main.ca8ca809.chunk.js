(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{18:function(e,n,t){"use strict";var c=t(0),i=t(1),l=t(14),a=t(3),s=t(10),r=Object({NODE_ENV:"production",PUBLIC_URL:"/FYP",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(o);var b=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},d=t(7),u=t(23),h=[{index:!0,label:"Calvin and Justin",path:"/"},{label:"Project",path:"/project"},{label:"Timeline",path:"/timeline"},{label:"Resume (Calvin)",path:"/resumeCalvin"},{label:"Resume (Justin)",path:"/resumeJustin"},{label:"Contact",path:"/contact"},{label:"Acknowledgements",path:"/acknowledgements"}],O=Object(i.lazy)((function(){return t.e(3).then(t.t.bind(null,49,7))})),m=function(){var e=Object(i.useState)(!1),n=Object(u.a)(e,2),t=n[0],l=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,onClick:function(){return l(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(d.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},x="/FYP",f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(d.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat(x,"/images/calvin.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Calvin Tai"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:calvintai0402@gmail.com",children:"calvintai0402@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Calvin. I enjoy software engineering and deep learning. I am a ",Object(c.jsx)("a",{href:"https://www.colostate.edu/",children:"Colorado State University"})," senior, double majoring in computer science and compuer engineering. I plan to dive deep in Tensorflow and Keras with this final year project!"]})]}),Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(d.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat(x,"/images/justin.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Justin Cao"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:jcao7@rams.colostate.edu",children:"jcao7@rams.colostate.edu"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Hi, I am Justin, a senior studying electrical engineering with a minor in computer science and hope to create new technology that will be able to help people. I am currently taking embedded systems with machine learning and modern cybersecurity so I hope that we can publish a whitepaper with groundbreaking discoveries!"})]})]})},g=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | CT and JC",defaultTitle:"CT and JC",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Calvin and Justin's personal website."};n.a=v},34:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),l=t.n(i),a=t(13),s=t(7),r=t(3),j=t(18),o=(t(34),Object(i.lazy)((function(){return t.e(8).then(t.bind(null,45))}))),b=Object(i.lazy)((function(){return t.e(7).then(t.bind(null,46))})),d=Object(i.lazy)((function(){return t.e(9).then(t.bind(null,47))})),u=Object(i.lazy)((function(){return t.e(10).then(t.bind(null,48))})),h=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,51))})),O=Object(i.lazy)((function(){return t.e(4).then(t.bind(null,52))})),m=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,53))})),p=Object(i.lazy)((function(){return t.e(11).then(t.bind(null,50))})),x=function(){return Object(c.jsx)(s.a,{basename:"/FYP",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(r.a,{path:"/project",component:h}),Object(c.jsx)(r.a,{path:"/timeline",component:p}),Object(c.jsx)(r.a,{path:"/contact",component:o}),Object(c.jsx)(r.a,{path:"/acknowledgements",component:b}),Object(c.jsx)(r.a,{path:"/resumeCalvin",component:O}),Object(c.jsx)(r.a,{path:"/resumeJustin",component:m}),Object(c.jsx)(r.a,{component:u,status:404})]})})})},f=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(x,{})})},g=document.getElementById("root");g.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(f,{}),g):Object(a.render)(Object(c.jsx)(f,{}),g)}},[[35,1,2]]]);
//# sourceMappingURL=main.ca8ca809.chunk.js.map