(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(e,t,a){"use strict";a.r(t);a(133);var n=a(8),i=a.n(n),l=a(47),r=a.n(l),c=a(0),o=a.n(c),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isToggleOn:!0,isActive:!1},a.handleClick=a.handleClick.bind(r()(r()(a))),a.handleCloseClick=a.handleCloseClick.bind(r()(r()(a))),a.list_item=a.list_item.bind(r()(r()(a))),a}i()(t,e);var a=t.prototype;return a.handleCloseClick=function(e){this.state.isActive=!1},a.handleClick=function(e){this.state.isActive=!this.state.isActive},a.list_item=function(e,t){return o.a.createElement("li",{className:"sidebar-nav-item"},o.a.createElement("a",{className:"js-scroll-trigger",onClick:this.handleCloseClick,href:e},t))},a.render=function(){return o.a.createElement("div",null,o.a.createElement("a",{className:"menu-toggle rounded "+(this.state.isActive?"active":""),onBlur:this.handleClick,onClick:this.handleClick,href:"#page-top"},o.a.createElement("i",{className:"fa "+(this.state.isActive?"":"fa-bars fa-times")}," ")),o.a.createElement("nav",{id:"sidebar-wrapper",onClick:this.handleCloseClick,className:this.state.isActive?"active":""},o.a.createElement("ul",{className:"sidebar-nav"},o.a.createElement("li",{className:"sidebar-brand"},o.a.createElement("a",{className:"js-scroll-trigger",onClick:this.handleCloseClick,href:"#page-top"},"Jack Eadie")),this.list_item("#","Home"),this.list_item("#about","About"),this.list_item("#work","Work"),this.list_item("#summary","Summary"),this.list_item("#portfolio","Portfolio"))))},t}(o.a.Component),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("header",{className:"masthead d-flex",id:""},o.a.createElement("div",{className:"container my-auto"},o.a.createElement("h1",{className:"mb-1"}," Jack Eadie"),o.a.createElement("h3",{className:"mb-5"}),o.a.createElement("a",{className:"btn btn-primary btn-xl js-scroll-trigger",href:"#about"},"About Me")),o.a.createElement("div",{className:"overlay"}))},t}(o.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("section",{class:"content-section bg-light",id:"about"},o.a.createElement("div",{class:"container text-center"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-lg-10 mx-auto"},o.a.createElement("h2",null,"About Me"),o.a.createElement("p",{class:"lead mb-5"},"I wrote my first Hello World in July of 2016 whilst at university. I'm currently studying a Bachelors of Mathematics and a Bachelors of Engineering with honours, majoring in Software Engineering. I'm also a Backend Engineer at MaxwellPlus, a healthcare startup using AI to assists clinicians in the diagnosis and prevention of cancer. Through my experiences I've really enjoyed building things. I'm always open to new adventures especially open source projects and exciting tech ventures."),o.a.createElement("a",{class:"btn btn-dark btn-xl js-scroll-trigger",href:"#portfolio"},"My Open Source Projects")))))},t}(o.a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("section",{class:"content-section bg-primary text-white text-center",id:"summary"},o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"content-section-heading"},o.a.createElement("h3",{class:"text-secondary mb-0"},"Timeline"),o.a.createElement("h2",{class:"mb-5"},"Summary")),o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col-lg-3 col-md-6 mb-5 mb-lg-0"},o.a.createElement("span",{class:"service-icon rounded-circle mx-auto mb-3"},o.a.createElement("i",{class:"icon-graduation"})),o.a.createElement("h4",null,o.a.createElement("strong",null,"Study")),o.a.createElement("p",{class:"text-faded mb-0"},"Enrolled at UQ: February 2016")),o.a.createElement("div",{class:"col-lg-3 col-md-6 mb-5 mb-lg-0"},o.a.createElement("span",{class:"service-icon rounded-circle mx-auto mb-3"},o.a.createElement("i",{class:"icon-bulb"})),o.a.createElement("h4",null,o.a.createElement("strong",null,"Hello World")),o.a.createElement("p",{class:"text-faded mb-0"},"First touched code: July 2016")),o.a.createElement("div",{class:"col-lg-3 col-md-6 mb-5 mb-md-0"},o.a.createElement("span",{class:"service-icon rounded-circle mx-auto mb-3"},o.a.createElement("i",{class:"icon-briefcase"}," ")),o.a.createElement("h4",null,o.a.createElement("strong",null,"Work")),o.a.createElement("p",{class:"text-faded mb-0"},"Started work at MaxwellPlus: April 2018")),o.a.createElement("div",{class:"col-lg-3 col-md-6"},o.a.createElement("span",{class:"service-icon rounded-circle mx-auto mb-3"},o.a.createElement("a",{href:"./CV.pdf"},o.a.createElement("i",{class:"icon-cloud-download"}))),o.a.createElement("h4",null,o.a.createElement("strong",null,"More?")),o.a.createElement("p",{class:"text-faded mb-0"},"Have a look at my ",o.a.createElement("a",{href:"./CV.pdf"},o.a.createElement("u",{style:{color:"rgba(255, 255, 255, 0.7)"}},"CV")))))))},t}(o.a.Component),p=(a(134),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("div",{class:"col-lg-6"},o.a.createElement("a",{class:"portfolio-item",href:this.props.link},o.a.createElement("span",{class:"caption",style:{"background-color":this.props.colour}},o.a.createElement("span",{class:"caption-content"},o.a.createElement("h2",null,this.props.title),o.a.createElement("p",{class:"mb-0"},this.props.description))),o.a.createElement("svg",{class:"img-fluid",width:"530",height:"353.58"})))},t}(o.a.Component)),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("section",{class:"content-section",id:"portfolio"},o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"content-section-heading text-center"},o.a.createElement("h3",{class:"text-secondary mb-0"},"Portfolio"),o.a.createElement("h2",{class:"mb-5"},"Open Source Projects")),o.a.createElement("div",{class:"row no-gutters"},o.a.createElement(p,{title:"Chatroom Anonymisation service",description:"Contex aware messenger chatroom anonymisation (Coming Soon).",link:"https://github.com/Jeadie/",colour:"#ffc107"}),o.a.createElement(p,{title:"Super Broccoli",description:"Multivariate regression models with basic serialisation types",link:"https://github.com/Jeadie/super-broccoli",colour:"#80bdff"}),o.a.createElement(p,{title:"Turbo Robot",description:"Using decision tree classifiers for automated code generation and other readable formats",link:"https://github.com/Jeadie/turbo-robot",colour:"#b602ff"}),o.a.createElement(p,{title:"Beanti.me",description:"Tanda Hackathon Project 2018: Bringing employees together through coffee",link:"https://github.com/Jeadie/beanti.me",colour:"#1d809f"}),o.a.createElement(p,{title:"Silver Engine",description:"Financial based scripts and web apps based off content learnt in MATH3090 at UQ.",link:"https://github.com/Jeadie/silver-engine",colour:"#6610f2"}),o.a.createElement(p,{title:"UQ Winter Research Project 2017",description:"Mathematical modelling of rho signalling at cell junctions during collective cell migration",link:"https://github.com/Jeadie/UQ-Winter-Research-Project-2017",colour:"#e83e8c"}))))},t}(o.a.Component),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("div",{class:"col-lg-4"},o.a.createElement("a",{class:"portfolio-item",href:this.props.btnHref},o.a.createElement("span",{class:"caption",style:{"background-color":this.props.colour}},o.a.createElement("span",{class:"caption-content"},o.a.createElement("h2",null,this.props.title),o.a.createElement("p",{class:"mb-0"},this.props.description))),o.a.createElement("svg",{class:"img-fluid",width:"350",height:"400"})))},t}(o.a.Component),E=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("section",{class:"content-section text-center",id:"work",style:{"background-color":"#d6e4ff"}},o.a.createElement("div",{class:"content-section-heading text-center"},o.a.createElement("h3",{class:"text-secondary mb-0"},"Portfolio"),o.a.createElement("h2",{class:"mb-5"},"Client-based Projects")),o.a.createElement("div",{class:"row"},o.a.createElement(f,{title:"Chatloop",colour:"#6fa0ff",description:"Integrating a chatroom anonymisation service into Chatloop's pilot",btnHref:"https://www.chatloop.io/",btnText:"Go"}),o.a.createElement(f,{title:"Bookalope",colour:"#6fa0ff",description:"Using ML to improve manuscript styling",btnHref:"https://bookalope.net/",btnText:"Go"}),o.a.createElement(f,{title:"GCUH",colour:"#6fa0ff",description:"Using computer vision to monitor patient malnutrition",btnHref:"https://github.com/HealthHackAu2018/eat-me",btnText:"Coming Soon"})))},t}(o.a.Component),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("li",{class:"list-inline-item"},o.a.createElement("span",{class:"service-icon rounded-circle mx-auto mb-3 social-link text-white mr-3",href:this.props.link},o.a.createElement("i",{class:this.props.icon})))},t}(o.a.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("footer",{id:"footer",class:"footer text-center"},o.a.createElement("div",{class:"container"},o.a.createElement("ul",{class:"list-inline mb-5"},o.a.createElement(g,{icon:"icon-social-linkedin",link:"https://www.linkedin.com/in/jack-eadie/"}),o.a.createElement(g,{icon:"icon-social-github",link:"https://github.com/Jeadie"}),o.a.createElement(g,{icon:"icon-envelope",link:"mailto:jack.eadie0@gmail.com?Subject=Hello"}))))},t}(o.a.Component),v=(a(137),a(139),a(141),a(143),a(145),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showUpButton:!1},a.handleButtonFade=a.handleButtonFade.bind(r()(r()(a))),a}i()(t,e);var a=t.prototype;return a.handleButtonFade=function(e){var t=window.scrollY;this.state.showUpButton=t>100},a.render=function(){return o.a.createElement("div",null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic",rel:"stylesheet",type:"text/css"}),o.a.createElement(s,null),o.a.createElement(m,{id:"home"}),o.a.createElement(u,{id:"about"}),o.a.createElement(E,{id:"work"}),o.a.createElement(d,{id:"summary"}),o.a.createElement(h,{id:"portfolio"}),o.a.createElement(b,null),o.a.createElement("a",{className:"scroll-to-top rounded js-scroll-trigger",href:"#page-top",style:{display:this.state.showUpButton?"inline":""}},o.a.createElement("i",{className:"fa fa-angle-up"})))},t}(o.a.Component));t.default=v},139:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){},145:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-e40fa926843cb5367f36.js.map