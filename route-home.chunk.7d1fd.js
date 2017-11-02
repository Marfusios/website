webpackJsonp([0],{"+eBR":function(e){e.exports={eventList:"eventList__2-jsM",thumbnail:"thumbnail__3zgFY"}},"90IK":function(e,t,n){"use strict";function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return w});var s=n("KM04"),o=(n.n(s),n("5D9O")),r=(n.n(o),n("lB5c")),l=n.n(r),c=n("HKvr"),u=n("WNBr"),h=n("IM1s"),m=n("O0CW"),p=n("jKOM"),d=n("d9s1"),f=n("ZAL5"),v=n.n(f),_=l.a.Element,b=l.a.scrollSpy,g=n.i(s.h)(d.a,null,"Events"),N=n.i(s.h)(d.a,null,"Projects"),y=n.i(s.h)(d.a,null,"Governance"),O=n.i(s.h)("a",{href:"https://github.com/CityOfZion/governance"},"here"),w=function(e){function t(){return i(this,e.apply(this,arguments))}return a(t,e),t.prototype.componentDidMount=function(){b.update()},t.prototype.render=function(){var e=this.props.content,t=e.governanceList,i=e.eventList,a=e.projectList,o=e.resources;return n.i(s.h)("div",{className:v.a.home},n.i(s.h)("section",null,n.i(s.h)(_,{name:"welcome",class:v.a.welcomeBox},n.i(s.h)(c.a,{narrow:!0},n.i(s.h)("h1",{className:v.a.subHeadingCOZ},"Welcome, we are"),n.i(s.h)("h1",{className:v.a.headingCOZ},"City of Zion"),n.i(s.h)("div",{className:v.a.taglineWrapper},n.i(s.h)("div",{className:v.a.tagline},n.i(s.h)("div",{className:v.a.taglineContent},"Home of the Open-source Global NEO Developer Community"))),n.i(s.h)("p",{className:v.a.heroContent},"We are an independent group of open source developers, designers and translators formed to support the NEO BlockChain core and ecosystem.")))),n.i(s.h)("section",null,n.i(s.h)(_,{name:"events"},n.i(s.h)(c.a,{narrow:!0},g,n.i(s.h)("p",{className:v.a.subtitle},"Events and competitions run for the community by the City of Zion."),n.i(s.h)(h.a,{list:i})))),n.i(s.h)("section",null,n.i(s.h)(_,{name:"projects"},n.i(s.h)(c.a,{narrow:!0},N,n.i(s.h)("p",{className:v.a.subtitle},"Exemplary projects created through collaborative or individual efforts from the City of Zion."),n.i(s.h)(m.a,{list:a})))),n.i(s.h)("section",null,n.i(s.h)(_,{name:"governance"},n.i(s.h)(c.a,{narrow:!0},y,n.i(s.h)("p",{className:v.a.subtitle},"The community is free to choose its own targets and objectives. That said, our goal is to improve NEO, so we will align with the NEO team's needs and avoid retreading old ground as much as possible, unless it is possible to attain a substantially higher level of quality."),n.i(s.h)(u.a,{list:t}),n.i(s.h)("p",{className:v.a.governanceSubtitle},"Our most up to date governance can be found ",O)))),n.i(s.h)("section",null,n.i(s.h)(_,{name:"resources"},n.i(s.h)(c.a,null,n.i(s.h)(p.a,{socialList:o.socialList})))))},t}(s.Component)},AMCP:function(e,t,n){"use strict";var i=n("KM04"),a=(n.n(i),n("5D9O")),s=(n.n(a),n("Pro0")),o=n.n(s),r=function(e){var t=e.items,a=e.size,s=t.map(function(e){return n.i(i.h)("div",{className:3===a?o.a.itemThird:o.a.itemFourth},e)});return n.i(i.h)("div",{className:o.a.blockGrid},s)};r.defaultProps={items:[],size:3},t.a=r},BTYs:function(e){e.exports={projectList:"projectList__8xJMc",thumbnail:"thumbnail__3mBNf"}},IM1s:function(e,t,n){"use strict";var i=n("KM04"),a=(n.n(i),n("5D9O")),s=(n.n(a),n("AMCP")),o=n("+eBR"),r=n.n(o),l=function(e){var t=e.list,a=t.map(function(e){return n.i(i.h)("div",{className:r.a.eventList},n.i(i.h)("a",{href:e.target},n.i(i.h)("img",{alt:e.thumbnail.alt,className:r.a.thumbnail,src:e.thumbnail.src})),n.i(i.h)("h2",null,e.heading),n.i(i.h)("p",null,e.description),n.i(i.h)("a",{href:e.target},e.link))});return n.i(i.h)(s.a,{items:a})};l.defaultProps={list:[]},t.a=l},O0CW:function(e,t,n){"use strict";var i=n("KM04"),a=(n.n(i),n("5D9O")),s=(n.n(a),n("AMCP")),o=n("BTYs"),r=n.n(o),l=function(e){var t=e.list,a=t.map(function(e){return n.i(i.h)("div",{className:r.a.projectList},n.i(i.h)("a",{href:e.target},n.i(i.h)("img",{alt:e.thumbnail.alt,className:r.a.thumbnail,src:e.thumbnail.src})),n.i(i.h)("h2",null,e.heading),n.i(i.h)("p",null,e.description),n.i(i.h)("a",{href:e.target},e.link))});return n.i(i.h)(s.a,{items:a})};l.defaultProps={list:[]},t.a=l},Pro0:function(e){e.exports={blockGrid:"blockGrid__2vnNa",itemThird:"itemThird__2Qjah",itemFourth:"itemFourth__2KdmZ"}},QIRz:function(e){e.exports={governanceList:"governanceList__329bw",content:"content__2UNI4",count:"count__23bGU",itemContent:"itemContent__2Z4Ct",itemWrapper:"itemWrapper__386Oe",thumbnail:"thumbnail__2gHMV",secondary:"secondary__3hl0a"}},WNBr:function(e,t,n){"use strict";var i=n("KM04"),a=(n.n(i),n("5D9O")),s=(n.n(a),n("AMCP")),o=n("QIRz"),r=n.n(o),l=n.i(i.h)("small",null,"No"),c=function(e){var t=e.list,a=t.map(function(e,t){var a=function(){return e.secondary?n.i(i.h)("div",{className:r.a.secondary},n.i(i.h)("h3",null,e.secondary.heading),n.i(i.h)("p",null,e.secondary.content)):null};return n.i(i.h)("div",{className:r.a.governanceList},n.i(i.h)("div",{className:r.a.itemWrapper},n.i(i.h)("div",{className:r.a.itemContent},n.i(i.h)("h2",{className:r.a.count},l,t+1),n.i(i.h)("div",{className:r.a.content},n.i(i.h)("p",null,e.description),n.i(i.h)(a,null)))))});return n.i(i.h)(s.a,{items:a})};c.defaultProps={list:[]},t.a=c},ZAL5:function(e){e.exports={home:"home__MseGd",headingCOZ:"headingCOZ__2NnxS",subHeadingCOZ:"subHeadingCOZ__RhPJA",tagline:"tagline__18fpn",taglineContent:"taglineContent__ny-M6",taglineWrapper:"taglineWrapper__3sTvD",heroContent:"heroContent__IytNh",subtitle:"subtitle__3NylB",governanceSubtitle:"governanceSubtitle__1vhaP",welcomeBox:"welcomeBox__2OvPS"}},cEJm:function(e){e.exports={resources:"resources__3kWS3",accent:"accent__1nhVP",wrapper:"wrapper__2rbGW",container:"container__FezQu",subtitle:"subtitle__AUUpR",socialList:"socialList__TdX5_",itemContent:"itemContent__2tF0Q",license:"license__2hMGP",pullRequest:"pullRequest__1N-ow",testNet:"testNet__1KJun"}},d9s1:function(e,t,n){"use strict";var i=n("KM04"),a=(n.n(i),n("5D9O")),s=(n.n(a),n("zuXa")),o=n.n(s),r=n.i(i.h)("svg",{viewBox:"0 0 44 38",xmlns:"http://www.w3.org/2000/svg"},n.i(i.h)("g",{fill:"#FFF",fillRule:"evenodd"},n.i(i.h)("path",{d:"M44 26l-5.666 6H27l11.334-12M33 15.067l-4.826-4.932L33 5.202 27.75.27 22.5 5.2 17.536 0 12 5.202 27.75 20M5.75 12L23 27.6 11.5 38H0l11.5-10.4L0 17.2"})));t.a=function(e){var t=e.children;return n.i(i.h)("div",{className:o.a.title},r,n.i(i.h)("h1",null,t))}},jKOM:function(e,t,n){"use strict";var i=n("KM04"),a=(n.n(i),n("5D9O")),s=(n.n(a),n("AMCP")),o=n("HKvr"),r=n("d9s1"),l=n("cEJm"),c=n.n(l),u=n.i(i.h)(r.a,null,"Resources"),h=n.i(i.h)("hr",null),m=function(e){var t=e.socialList,a=t.map(function(e){return n.i(i.h)("div",{className:c.a.socialList},n.i(i.h)("a",{href:e.target},n.i(i.h)("img",{alt:e.name,src:e.logo}),n.i(i.h)("div",{className:c.a.itemContent},n.i(i.h)("h2",null,e.heading),n.i(i.h)("p",null,e.subtitle))))});return n.i(i.h)("div",{className:c.a.resources},n.i(i.h)("div",{className:c.a.accent}),n.i(i.h)("div",{className:c.a.wrapper},n.i(i.h)("div",{className:c.a.container},n.i(i.h)(o.a,{narrow:!0},u,n.i(i.h)("p",{className:c.a.subtitle},"Anyone can join us to work together or be a source of technical support."),n.i(i.h)(s.a,{items:a}),h,n.i(i.h)("p",{className:c.a.license},"Our code is free and 100% MIT-licensed; Even this website!"),n.i(i.h)("p",{className:c.a.pullRequest},"If you feel you can improve on anything, just send us a pull request.*"),n.i(i.h)("p",{className:c.a.testNet},"*We run JSON-RPC nodes for the mainnet and testnet networks at seed[1-5].cityofzion.io:8880 Furthermore, we are able to provide testnet NEO and GAS for collaborating developers.")))))};m.defaultProps={socialList:[]},t.a=m},zuXa:function(e){e.exports={title:"title__ALq8l"}}});
//# sourceMappingURL=route-home.chunk.7d1fd.js.map