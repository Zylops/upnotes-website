(this["webpackJsonpupnotes-website"]=this["webpackJsonpupnotes-website"]||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),c=a.n(i),r=(a(59),a(60),a(1)),o=function(){return Object(r.jsxs)("footer",{className:"w3-container w3-padding-64 w3-center w3-opacity",children:[Object(r.jsxs)("div",{className:"w3-xlarge w3-padding-32",children:[Object(r.jsx)("i",{className:"fa fa-facebook-official w3-hover-opacity"}),Object(r.jsx)("i",{className:"fa fa-instagram w3-hover-opacity"}),Object(r.jsx)("i",{className:"fa fa-snapchat w3-hover-opacity"}),Object(r.jsx)("i",{className:"fa fa-pinterest-p w3-hover-opacity"}),Object(r.jsx)("i",{className:"fa fa-twitter w3-hover-opacity"}),Object(r.jsx)("i",{className:"fa fa-linkedin w3-hover-opacity"})]}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:"https://upnotes.io",children:" upnotes.io "})})]})},d=a(14),l=a(33),j=a(98),h=a(100),b=a(106),p=a(105),x=a(103),g=a(104),m=a(50),w=a.n(m),u=a(102),O=[{label:"Join Chat",href:"https://discord.gg/ATZTMeyWsW",target:"_blank"},{label:"Github",href:"https://github.com/upnotes-io/",target:"_blank"},{label:"Report Issue",href:"https://github.com/upnotes-io/upnotes-website/issues/new",target:"_blank"},{label:"Download",href:"#download",target:"_blank"}],f=Object(j.a)((function(){return{header:{backgroundColor:"#0a7cef",paddingRight:"79px",paddingLeft:"79px","@media (max-width: 900px)":{paddingLeft:0}},logo:{fontFamily:"Work Sans, sans-serif",fontWeight:600,color:"black",textAlign:"left"},menuButton:{fontFamily:"Open Sans, sans-serif",fontWeight:700,size:"18px",marginLeft:"38px",color:"black"},toolbar:{display:"flex",justifyContent:"space-between"},drawerContainer:{padding:"20px 30px"},imageIcon:{display:"flex",height:"inherit",width:"inherit",alignSelf:"center"},iconRoot:{textAlign:"center",height:"36px",width:"36px"},headerBrand:{display:"flex",flexDirection:"row",alignItems:"center"}}}));function y(){var e=f(),t=e.header,a=e.logo,s=e.menuButton,i=e.toolbar,c=e.drawerContainer,o=e.iconRoot,j=e.imageIcon,m=e.headerBrand,y=Object(n.useState)({mobileView:!1,drawerOpen:!1}),v=Object(l.a)(y,2),k=v[0],N=v[1],C=k.mobileView,W=k.drawerOpen;Object(n.useEffect)((function(){var e=function(){return window.innerWidth<900?N((function(e){return Object(d.a)(Object(d.a)({},e),{},{mobileView:!0})})):N((function(e){return Object(d.a)(Object(d.a)({},e),{},{mobileView:!1})}))};e(),window.addEventListener("resize",(function(){return e()}))}),[]);var M=function(){return O.map((function(e){var t=e.label,a=e.href,n=e.target;return Object(r.jsx)("a",{href:a,color:"inherit",style:{textDecoration:"none"},key:t,target:n,children:t})}))},T=Object(r.jsxs)("a",{href:"/",className:m,children:[Object(r.jsx)(u.a,{className:o,children:Object(r.jsx)("img",{className:j,src:"/assets/icon.svg",alt:"logo"})}),Object(r.jsx)(x.a,{variant:"h6",component:"h1",className:a,children:"Upnotes"})]}),A=function(){return O.map((function(e){var t=e.label,a=e.href,n=e.target;return Object(r.jsx)("a",{key:t,color:"inherit",href:a,target:n,className:s,children:t})}))};return Object(r.jsx)("header",{children:Object(r.jsx)(g.a,{className:t,children:C?Object(r.jsxs)(h.a,{children:[Object(r.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(){return N((function(e){return Object(d.a)(Object(d.a)({},e),{},{drawerOpen:!0})}))},children:Object(r.jsx)(w.a,{})}),Object(r.jsx)(p.a,{anchor:"left",open:W,onClose:function(){return N((function(e){return Object(d.a)(Object(d.a)({},e),{},{drawerOpen:!1})}))},children:Object(r.jsx)("div",{className:c,children:M()})}),Object(r.jsx)("div",{children:T})]}):Object(r.jsxs)(h.a,{className:i,children:[T,Object(r.jsx)("div",{children:A()})]})})})}var v=a(42),k=a.n(v),N=a(51),C=a(36),W=a(37);function M(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(N.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/upnotes-io/upnotes-website/tags");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a[0].name.substr(1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("div",{className:"w3-container w3-red w3-center",style:{padding:"128px 16px"},children:[Object(r.jsx)("h1",{className:"w3-margin w3-jumbo",style:{background:"-webkit-linear-gradient(#eb543b, #fbd51c)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Upnotes"}),Object(r.jsx)("h2",{className:"w3-xlarge",style:{color:"black"},children:"Automatically organize your software engineering notes."}),Object(r.jsx)("a",{href:"#download",className:"w3-button w3-black w3-padding-large w3-large w3-margin-top",children:Object(r.jsx)("span",{children:" Download "})})]}),Object(r.jsx)("div",{className:"w3-row-padding w3-padding-64 w3-container",children:Object(r.jsxs)("div",{className:"w3-content",children:[Object(r.jsxs)("div",{className:"w3-twothird",children:[Object(r.jsxs)("h5",{className:"w3-padding-32",children:["Complete your git history by making notes part of your git history.",Object(r.jsx)("br",{}),"Investigating and taking notes is big part of any programming task so why not keep it in the same repository."]}),Object(r.jsxs)("p",{className:"w3-text-grey",children:[Object(r.jsx)("p",{children:"Orgnaze your notes in following 5 categories for each of your git repository."}),Object(r.jsxs)("li",{children:[" ",Object(r.jsx)("a",{href:"#shared-tasks",children:" Tasks  "})]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsx)("a",{href:"#your-shared-wiki",children:"Wiki "})]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsx)("a",{href:"#my-tasks",children:"My tasks "})]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsx)("a",{href:"#my-wiki",children:"My wiki "})," "]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsx)("a",{href:"#meetings",children:"Meetings "})]})]})]}),Object(r.jsx)("div",{className:"w3-third w3-center",children:Object(r.jsx)("i",{className:"fa fa-anchor w3-padding-64 w3-text-red"})})]})}),Object(r.jsx)("div",{id:"shared-tasks",className:"w3-row-padding w3-light-grey w3-padding-64 w3-container",children:Object(r.jsxs)("div",{className:"w3-content detail-container",children:[Object(r.jsx)("div",{className:"w3-center detail-image-container",children:Object(r.jsx)("img",{src:"assets/shared-tasks.png",height:450,alt:"shared tasks"})}),Object(r.jsxs)("div",{className:"detail-content-container",children:[Object(r.jsx)("h1",{children:"Tasks"}),Object(r.jsx)("h5",{className:"w3-padding-32",children:"All your task is automatically created based on your git branch and stored in the repository itself."}),Object(r.jsx)("p",{className:"w3-text-grey",children:"Your notes for any task should be part of the repository and available for the whole team."})]})]})}),Object(r.jsx)("div",{id:"my-tasks",className:"w3-row-padding w3-padding-64 w3-container",children:Object(r.jsxs)("div",{className:"w3-content detail-container",children:[Object(r.jsxs)("div",{className:"detail-content-container",children:[Object(r.jsx)("h1",{children:"My tasks"}),Object(r.jsx)("h5",{className:"w3-padding-32",children:"Your private space for notes. Create your tasks Ex - production investigation, etc"}),Object(r.jsx)("p",{className:"w3-text-grey",children:"Your personal area for notes. Things can move from my tasks to common tasks if required."})]}),Object(r.jsx)("div",{className:"w3-center detail-image-container",children:Object(r.jsx)("img",{src:"assets/shared-tasks.png",height:450,alt:"my tasks "})})]})}),Object(r.jsx)("div",{id:"my-wiki",className:"w3-row-padding w3-light-grey w3-padding-64 w3-container",children:Object(r.jsxs)("div",{className:"w3-content detail-container",children:[Object(r.jsx)("div",{className:"w3-center detail-image-container",children:Object(r.jsx)("img",{src:"assets/shared-tasks.png",height:450,alt:"my wiki"})}),Object(r.jsxs)("div",{className:"detail-content-container",children:[Object(r.jsx)("h1",{children:"My wiki"}),Object(r.jsx)("h5",{className:"w3-padding-32",children:"Your personal wiki like commands to remember Database queries, etc"}),Object(r.jsx)("p",{className:"w3-text-grey",children:"Anything you want to come back to. Database queries, cheat sheets etc."})]})]})}),Object(r.jsx)("div",{id:"your-shared-wiki",className:"w3-row-padding w3-padding-64 w3-container",children:Object(r.jsxs)("div",{className:"w3-content detail-container",children:[Object(r.jsxs)("div",{className:"detail-content-container",children:[Object(r.jsx)("h1",{children:"Wiki"}),Object(r.jsx)("h5",{className:"w3-padding-32",children:"your team wiki\u2019s all the common script, commands and queries"}),Object(r.jsx)("p",{className:"w3-text-grey",children:"Wiki is a natual progression of notes. Write documentation, and wiki right from your notes app and share it with your team by commiting it to repository."})]}),Object(r.jsx)("div",{className:"w3-center detail-image-container",children:Object(r.jsx)("img",{src:"assets/shared-tasks.png",height:450,alt:"your shared wiki"})})]})}),Object(r.jsx)("div",{id:"meetings",className:"w3-row-padding w3-light-grey w3-padding-64 w3-container",children:Object(r.jsxs)("div",{className:"w3-content detail-container",children:[Object(r.jsx)("div",{className:"w3-center detail-image-container",children:Object(r.jsx)("img",{src:"assets/shared-tasks.png",height:450,alt:"meetings"})}),Object(r.jsxs)("div",{className:"detail-content-container",children:[Object(r.jsx)("h1",{children:"Meetings"}),Object(r.jsx)("h5",{className:"w3-padding-32",children:"Your meeting notes"}),Object(r.jsx)("p",{className:"w3-text-grey",children:"Just like your code, your meeting notes can also live in the repository. Take your meeting notes in the upnotes and share it with your team by commiting it to git repo."})]})]})}),Object(r.jsx)("div",{id:"download",style:{"max-width":"1024px",margin:"auto"},className:"w3-row-padding w3-padding-64 w3-container",children:null==a?Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Getting latest version..."})}):Object(r.jsx)("div",{children:Object(r.jsxs)("div",{style:{display:"flex","flex-direction":"row","justify-content":"space-between","max-width":"1024px",margin:"auto","font-size":"xx-large"},children:[Object(r.jsx)("div",{children:Object(r.jsxs)("a",{href:"https://github.com/upnotes-io/upnotes-website/releases/download/v".concat(a,"/Upnotes-").concat(a,".exe"),children:[Object(r.jsx)(C.a,{icon:W.c})," ",Object(r.jsx)("span",{children:"Windows"})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("a",{href:"https://github.com/upnotes-io/upnotes-website/releases/download/v".concat(a,"/Upnotes-").concat(a,".AppImage"),children:[Object(r.jsx)(C.a,{icon:W.b})," ",Object(r.jsx)("span",{children:"Linux"})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("a",{href:"https://github.com/upnotes-io/upnotes-website/releases/download/v".concat(a,"/Upnotes-").concat(a,".dmg"),children:[Object(r.jsx)(C.a,{icon:W.a})," ",Object(r.jsx)("span",{children:"Mac"})]})})]})})})]})}var T=a(43);var A=function(){return s.a.useEffect((function(){T.a.initialize("UA-196765342-1",{debug:!0}),T.a.pageview(window.location.pathname+window.location.search)})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y,{}),Object(r.jsx)(M,{}),Object(r.jsx)(o,{})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),F()}},[[75,1,2]]]);
//# sourceMappingURL=main.91b0ff00.chunk.js.map