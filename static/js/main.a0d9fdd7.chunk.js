(this["webpackJsonprocket-docket"]=this["webpackJsonprocket-docket"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(19),s=c.n(a),r=(c(25),c(10)),o=c(11),i=c(13),l=c(12),u=(c(26),c(2)),h=c(7),j=(c(27),c.p+"static/media/rocket-docket-logo.741c2a33.png"),d=c(0);var m=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsxs)("section",{className:"left-header",children:[Object(d.jsx)("img",{className:"logo",src:j,alt:"logo"}),Object(d.jsx)(h.b,{to:"/rocket-docket",children:Object(d.jsxs)("article",{className:"site-banner",children:[Object(d.jsx)("h1",{className:"site-title",children:"Rocket Docket"}),Object(d.jsx)("p",{className:"tagline",children:"A docket of upcoming rocket launches."})]})})]})})},b=(c(34),function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).handleChange=function(t){e.setState({value:t.target.value},e.props.filterRockets(t,t.target.value))},e.state={value:""},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.setState({value:""})}},{key:"render",value:function(){return Object(d.jsx)("input",{className:"search",placeholder:"Search rockets",type:"text",value:this.state.value,onChange:this.handleChange})}}]),c}(n.Component));c(35);var f=function(e){var t=e.filterRockets,c=e.showSelectedRockets,n=e.active,a="upcoming"===n?"active upcoming nav-button":"upcoming nav-button",s="recent"===n?"active recent nav-button":"recent nav-button";return Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsx)(b,{filterRockets:t,active:n}),Object(d.jsx)("article",{className:a,onClick:function(){return c("upcoming")},children:"Upcoming Launches"}),Object(d.jsx)("article",{className:s,onClick:function(){return c("recent")},children:"Recently Launched"})]})},p=(c(36),c(37),c.p+"static/media/stock-photo.8b45cb02.jpg");var k=function(e){var t,c=e.image,n=e.name,a=e.window_start,s=e.slug;return t=c||p,Object(d.jsx)("article",{className:"rocket-card",style:{backgroundImage:"url(".concat(t,")")},children:Object(d.jsxs)("section",{className:"rocket-content",children:[Object(d.jsx)("h2",{className:"thumbnail-rocket-name",children:n}),Object(d.jsx)("p",{className:"thumbnail-start-date",children:a.slice(0,10)}),Object(d.jsx)("p",{className:"thumbnail-start-time",children:a.slice(11)}),Object(d.jsx)(h.b,{to:"/rocket-docket/".concat(s),"aria-label":n,children:Object(d.jsx)("h3",{className:"more-info",children:"More Info"})})]})})};c(38);var O=function(){return Object(d.jsxs)("section",{className:"loading-screen",children:[Object(d.jsx)("img",{className:"loading-image",src:j,alt:"logo"}),"Loading..."]})};var g=function(e){var t,c=e.rocketData;return t=c&&c.length>0?c.map((function(e){return Object(d.jsx)(k,{image:e.image,name:e.name,window_start:e.window_start,slug:e.slug},e.slug)})):c&&0===c.length?Object(d.jsx)("p",{className:"no-results-message",children:"No rocket launches match that search. Sorry!"}):Object(d.jsx)(O,{}),Object(d.jsx)("main",{className:"card-container",children:t})};c(39),c(40);var x=function(e){var t,c=e.errorMessage;return t=c||"No information available",Object(d.jsxs)("article",{className:"error-page",children:[Object(d.jsxs)("section",{className:"error-message",children:[Object(d.jsx)("img",{src:j,className:"error-logo",alt:"rocket"}),Object(d.jsx)("p",{children:"Oops! An error with message"}),Object(d.jsxs)("p",{className:"displayed-error",children:['"',t,'"']}),Object(d.jsx)("p",{children:"has occured."})]}),Object(d.jsx)(h.b,{to:"/rocket-docket",children:Object(d.jsx)("article",{className:"error-back-button",children:"Back to Home"})})]})};var v=function(e){var t=(0,e.findRocket)(e.id);return t?Object(d.jsxs)("main",{className:"rocket-details",children:[Object(d.jsxs)("section",{className:"rocket-info",children:[Object(d.jsx)("h2",{className:"rocket-name",children:t.name}),Object(d.jsx)("h3",{className:"summary info-header",children:"Mission Summary:"}),Object(d.jsx)("p",{className:"summary info-content",children:t.mission.description}),Object(d.jsx)("h3",{className:"date info-header",children:"Launch Date and Time:"}),Object(d.jsx)("p",{className:"start-date",children:t.window_start.slice(0,10)}),Object(d.jsx)("p",{className:"start-time",children:t.window_start.slice(11)}),Object(d.jsx)("h3",{className:"agency info-header",children:"Launch Agency:"}),Object(d.jsx)("p",{className:"agency info-content",children:t.launch_service_provider.name}),Object(d.jsx)("h3",{className:"location info-header",children:"Location:"}),Object(d.jsxs)("p",{className:"location info-content",children:[t.pad.name," at ",t.pad.location.name]}),Object(d.jsx)("h3",{className:"webcast info-header",children:t.webcast_live?"Webcast available elsewhere":"No webcast available"})]}),Object(d.jsxs)("section",{className:"rocket-image-section",children:[Object(d.jsx)(h.b,{to:"/rocket-docket",children:Object(d.jsx)("article",{className:"back-button",children:"Back to Home"})}),Object(d.jsx)("img",{className:"rocket-image",src:t.image||p,alt:t.name})]})]}):Object(d.jsx)(x,{errorMessage:"404 Page not found"})},N=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).showSelectedRockets=function(t){return e.setState({searchResults:null,active:t})},e.displayHomeContent=function(){return"recent"===e.state.active?e.state.recentRocketsData:e.state.upcomingRocketsData},e.findRocket=function(t){return e.displayHomeContent()?e.displayHomeContent().find((function(e){return e.slug===t})):null},e.filterRockets=function(t,c){if(t.preventDefault(),!e.displayHomeContent())return null;e.displayHomeContent().filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})),e.setState({searchResults:undefined})},e.state={upcomingRocketsData:null,recentRocketsData:null,active:"upcoming",searchResults:null,error:null},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.setState({searchResults:null}),function(){var e=new Headers;return e.append("Content-Type","application/json"),fetch("https://ll.thespacedevs.com/2.0.0/launch/upcoming",{headers:e}).then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(e){return console.log("error",e)}))}().then((function(t){return e.setState({upcomingRocketsData:t})})).catch((function(t){return e.throwError(t)})),function(){var e=new Headers;return e.append("Content-Type","application/json"),fetch("https://ll.thespacedevs.com/2.0.0/launch/previous",{headers:e}).then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(e){return console.log("error",e)}))}().then((function(t){return e.setState({recentRocketsData:t})}))}},{key:"render",value:function(){var e=this,t=this.state.searchResults?this.state.searchResults:this.displayHomeContent();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{filterRockets:this.filterRockets}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/rocket-docket/:id",render:function(t){var c=t.match;return Object(d.jsx)(v,{throwError:e.throwError,findRocket:e.findRocket,id:c.params.id})}}),Object(d.jsx)(u.a,{exact:!0,path:"/rocket-docket",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{filterRockets:e.filterRockets,showSelectedRockets:e.showSelectedRockets,active:e.state.active}),Object(d.jsx)(g,{rocketData:t})]})}})]})]})}}]),c}(n.Component),R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};s.a.render(Object(d.jsx)(h.a,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),R()}},[[41,1,2]]]);
//# sourceMappingURL=main.a0d9fdd7.chunk.js.map