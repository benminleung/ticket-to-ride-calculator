(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,n){e.exports=n(293)},291:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(16),o=n.n(r),s=n(295),c=n(21),l=n(22),u=n(24),d=n(23),m=n(25),p=n(8),h=n.n(p),f=n(296),b=n(56),g=n.n(b),v=n(19),O=n(26),E=n(110),j=n.n(E),w=n(108),k=n.n(w),x=n(109),T=n.n(x),y=n(111),P=n.n(y),D=n(106),C=n.n(D),S=n(32),R=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.versionData,a=n.name,i=n.fields,r=t.classes;return h.a.createElement(h.a.Fragment,null,h.a.createElement("h1",null,a),h.a.createElement(C.a,{className:r.card},Object.keys(i).map(function(t){return h.a.createElement("div",{key:"field-key-".concat(t)},i[t].checkbox?h.a.createElement(k.a,{control:h.a.createElement(T.a,{id:t,checked:!!e.global.formData[t],onChange:function(t){return Object(p.setGlobal)({formData:Object(O.a)({},e.global.formData,Object(v.a)({},t.target.id,t.target.checked))})},color:"primary"}),label:i[t].text}):h.a.createElement(j.a,{id:t,label:i[t].text,type:"number",margin:"dense",value:e.global.formData[t],onChange:function(t){return Object(p.setGlobal)({formData:Object(O.a)({},e.global.formData,Object(v.a)({},t.target.id,t.target.value))})},InputProps:{endAdornment:h.a.createElement(P.a,{position:"end"},"x",i[t].unitPoints,"pts")}}))}),h.a.createElement("div",null,h.a.createElement("h4",null,"Points"),h.a.createElement("h1",null,Object.keys(this.global.formData).filter(function(e){return Object.keys(i).includes(e)}).reduce(function(t,n){return e.global.formData[n]*i[n].unitPoints+t},0)))))}}]),t}(p.Component);R.defaultProps={};var F=Object(S.withStyles)({card:{minWidth:275,padding:"10px 30px"}})(R),N=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.version,n=t.name,a=t.versionFields,i=e.fields,r={name:n,fields:Object.keys(i).filter(function(e){return a.includes(e)}).reduce(function(e,t){return Object(O.a)({},e,Object(v.a)({},t,i[t]))},{})};return h.a.createElement(F,{versionData:r})}}]),t}(p.Component);N.defaultProps={fields:{}};var B=n(5),L=n.n(B),G=n(115),H=n.n(G),I=n(112),W=n.n(I),K=n(113),A=n.n(K),J=n(55),M=n.n(J),$=n(39),q=n.n($),z=n(73),Q=n.n(z),U=n(54),V=n.n(U),X=n(114),Y=n.n(X),Z=n(116),_=n.n(Z),ee=n(117),te=n.n(ee),ne=n(74),ae=n.n(ne),ie=n(75),re=n.n(ie),oe=n(294),se=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={open:!1},n.handleDrawerOpen=function(){n.setState({open:!0})},n.handleDrawerClose=function(){n.setState({open:!1})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.theme,a=e.children,r=e.versions,o=e.routes,s=this.state.open;return i.a.createElement("div",{className:t.root},i.a.createElement(g.a,null),i.a.createElement(W.a,{position:"fixed",className:L()(t.appBar,Object(v.a)({},t.appBarShift,s))},i.a.createElement(A.a,{disableGutters:!s},i.a.createElement(V.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:L()(t.menuButton,s&&t.hide)},i.a.createElement(Y.a,null)),i.a.createElement(q.a,{variant:"h6",color:"inherit",noWrap:!0},"Ticket To Ride Calculator"))),i.a.createElement(H.a,{className:t.drawer,variant:"persistent",anchor:"left",open:s,classes:{paper:t.drawerPaper},onClick:this.handleDrawerClose},i.a.createElement("div",{className:t.drawerHeader},i.a.createElement(V.a,{onClick:this.handleDrawerClose},"ltr"===n.direction?i.a.createElement(_.a,null):i.a.createElement(te.a,null))),i.a.createElement(Q.a,null),i.a.createElement(M.a,null,Object.keys(o).map(function(e){return i.a.createElement(ae.a,{button:!0,key:"drawerListItem-".concat(e),component:oe.a,to:o[e].path},i.a.createElement(re.a,{primary:o[e].name}))})),i.a.createElement(Q.a,null),i.a.createElement(M.a,null,Object.keys(r).map(function(e){return i.a.createElement(ae.a,{button:!0,key:"drawerListItem-".concat(e),component:oe.a,to:r[e].path},i.a.createElement(re.a,{primary:r[e].name}))}))),i.a.createElement("main",{className:L()(t.content,Object(v.a)({},t.contentShift,s))},i.a.createElement("div",{className:t.drawerHeader}),a))}}]),t}(i.a.Component);se.defaultProps={children:null};var ce=Object(S.withStyles)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(O.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})(se),le={home:{path:"/",name:"Home"}},ue=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.global.formFields,t=e.versions,n=e.fields;return h.a.createElement(h.a.Fragment,null,h.a.createElement(g.a,null),h.a.createElement(ce,{versions:t,routes:le},h.a.createElement(f.a,{path:"/",exact:!0,render:function(){return h.a.createElement("div",null,"Home")}}),Object.keys(t).map(function(e){return h.a.createElement(f.a,{key:"route-".concat(e),path:t[e].path,exact:!0,render:function(){return h.a.createElement(N,{version:t[e],fields:n})}})})))}}]),t}(p.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=n(76),me=function(){var e={};Object.keys(de.fields).forEach(function(t){e[t]=0}),Object(p.setGlobal)({count:1,formFields:de,formData:e})};n(291);me();console.log("basename: ","/ticket-to-ride-calculator"),o.a.render(i.a.createElement(s.a,{basename:"".concat("/ticket-to-ride-calculator","/")},i.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},76:function(e){e.exports={versions:{classic:{id:"classic",path:"/classic",name:"Classic",versionFields:["completedRoutePoints","longestRoute","mostDestinationTickets","oneTrain","twoTrains","threeTrains","fourTrains","fiveTrains","sixTrains"]},europe:{id:"europe",path:"/europe",name:"Europe",versionFields:["completedRoutePoints","longestRoute","stationsKept","oneTrain","twoTrains","threeTrains","fourTrains","sixTrains","eightTrains"]}},fields:{longestRoute:{id:"longestRoute",text:"Longest Route",checkbox:!0,unitPoints:10},mostDestinationTickets:{id:"mostDestinationTickets",text:"Most Destination Tickets",checkbox:!0,unitPoints:10},completedRoutePoints:{id:"completedRoutePoints",text:"Completed Route Points",unitPoints:1},oneTrain:{id:"oneTrain",text:"One train",unitPoints:1},twoTrains:{id:"twoTrains",text:"Two trains",unitPoints:2},threeTrains:{id:"threeTrains",text:"Three trains",unitPoints:4},fourTrains:{id:"fourTrains",text:"Four trains",unitPoints:7},fiveTrains:{id:"fiveTrains",text:"Five trains",unitPoints:10},sixTrains:{id:"sixTrains",text:"Six trains",unitPoints:15},sevenTrains:{id:"sevenTrains",text:"Seven trains",unitPoints:1},eightTrains:{id:"eightTrains",text:"Eight trains",unitPoints:21},nineTrains:{id:"nineTrains",text:"Nine trains",unitPoints:27},stationsKept:{id:"stationsKept",text:"Stations kept",unitPoints:4}}}}},[[119,2,1]]]);
//# sourceMappingURL=main.3107091c.chunk.js.map