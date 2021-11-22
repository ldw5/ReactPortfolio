(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var r=c(2),n=c.n(r),s=c(18),i=c.n(s),j=(c(27),c(12)),a=c(3),l=c(8),o=c(1),b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{className:"homepage",children:Object(o.jsxs)("div",{className:"overlay",children:[Object(o.jsx)("h1",{children:"Landrell Williams"}),Object(o.jsx)("p",{children:"Full Stack Web Developer"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/landrell-williams-a9bb447a/",target:"_blank",rel:"noopenner noreferrer",children:Object(o.jsx)(l.c,{})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/ldw5",target:"_blank",rel:"noopenner noreferrer",children:Object(o.jsx)(l.b,{})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"./public/LDW_Resume.pdf",target:"_blank",rel:"noopenner noreferrer",children:Object(o.jsx)(l.a,{})})})]})]})})})},h=c(11),d=c(35),O=[{id:Object(d.a)(),title:"Horiseon",desc:"Code Refactor",github:"https://github.com/ldw5/Horiseon-code-refactor-demo",demo:"https://ldw5.github.io/Horiseon-code-refactor-demo/",image:"../public/images/horison.png"},{id:Object(d.a)(),title:"Perfect Pet Placer",desc:"Group Project-HTML/CSS/Javascript/API",github:"https://github.com/PPP-Project1/Perfect-Pet-Placer",demo:"https://ppp-project1.github.io/Perfect-Pet-Placer/",image:"./images/PPP.png"},{id:Object(d.a)(),title:"Password Generator",desc:"Javascript",github:"https://github.com/ldw5/password-generator-demo",demo:"https://ldw5.github.io/password-generator-demo/",image:"./images/password.png"},{id:Object(d.a)(),title:"Party Planner",desc:"Group project - Full Stack",github:"hhttps://github.com/YummySocks/event-planner",demo:"https://group-event-planner.herokuapp.com/login ",image:"./images/Party.png"}],u=function(){var e=Object(r.useState)(O),t=Object(h.a)(e,2),c=t[0];t[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"projects",children:[Object(o.jsx)("h1",{children:"Projects"}),Object(o.jsx)("div",{className:"cards",children:c.map((function(e){var t=e.id,c=e.title,r=e.desc,n=e.github,s=e.demo,i=e.image;return Object(o.jsxs)("article",{children:[Object(o.jsx)("img",{src:i,alt:c}),Object(o.jsx)("h4",{children:c}),Object(o.jsx)("p",{children:r}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:n,target:"_blank",rel:"noopenner noreferrer",className:"github",children:[Object(o.jsx)(l.b,{style:{marginRight:5}}),"GitHub"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:s,target:"_blank",rel:"noopenner noreferrer",className:"demo",children:[Object(o.jsx)(l.d,{style:{marginRight:5}}),"Demo"]})})]})]},t)}))})]})})},x=c(19),m=[{id:Object(d.a)(),title:"Homepage",url:"/"},{id:Object(d.a)(),title:"Projects",url:"/projects"},{id:Object(d.a)(),title:"Contact Me",url:"/contact-me"},{id:Object(d.a)(),title:"About Me",url:"/about-me"}],p=function(){var e=Object(r.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(m),i=Object(h.a)(s,2),a=i[0];i[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"menu-btn",children:Object(o.jsx)("button",{onClick:function(){return n(!c)},children:Object(o.jsx)(x.a,{})})}),Object(o.jsx)("header",{className:"".concat(c?"header open":" header"),children:Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:a.map((function(e){var t=e.id,c=e.title,r=e.url;return Object(o.jsx)("li",{onClick:function(){return n(!1)},children:Object(o.jsx)(j.b,{to:r,children:c})},t)}))})})})]})},g=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("h1",{children:"Error 404"})})},f=c(16),P=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"contact",children:[Object(o.jsx)("h1",{children:"Contact Me"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"mailto:dontess5@yahoo.com",children:[Object(o.jsx)(f.a,{}),"dontess5@yahoo.com"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"tel:4053712743",children:[Object(o.jsx)(f.b,{}),"405-371-2743"]})})]})]})})},v=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"about",children:[Object(o.jsx)("h1",{children:"About Me"}),Object(o.jsx)("p",{children:"I'm currently a Georgia Tech Coding Bootcamp student in full stack web development. I am honing my skills in Bootstrap, React, HTML, CSS, jQuery, Javascript, SQL, Node, and a few other technologies."})]})})},w=function(){return Object(o.jsxs)(j.a,{children:[Object(o.jsx)(p,{}),Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{path:"/",exact:!0,children:Object(o.jsx)(b,{})}),Object(o.jsx)(a.a,{path:"/projects",children:Object(o.jsx)(u,{})}),Object(o.jsx)(a.a,{path:"/contact-me",children:Object(o.jsx)(P,{})}),Object(o.jsx)(a.a,{path:"/about-me",children:Object(o.jsx)(v,{})}),Object(o.jsx)(a.a,{path:"*",children:Object(o.jsx)(g,{})})]})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.efe2230c.chunk.js.map