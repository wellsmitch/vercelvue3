"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[387],{68862:function(M,g,n){n.r(g),n.d(g,{default:function(){return N}});var u=n(39346),a=n.n(u),o=n(49188),m=n(52353),p=n(98539),b=n(80676),v=n(63287),y=n(1169),x=n(88350),F=n(80062),w=n(673),k=n(38497),f=n(45401),l=n(96469),z=function(){var e,C=function(){H(),e=new o.kJ({container:document.getElementById("graph-container"),grid:!0,autoResize:!0,width:200,height:200,mousewheel:{enabled:!0,zoomAtMousePosition:!0,modifiers:"ctrl",minScale:.5,maxScale:3},connecting:{router:"manhattan",connector:{name:"rounded",args:{radius:8}},anchor:"center",connectionPoint:"anchor",allowBlank:!1,snap:{radius:20},createEdge:function(){return new o.bn.kS({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2,targetMarker:{name:"block",width:12,height:8}}},zIndex:0})},validateConnection:function(r){var i=r.targetMagnet;return!!i}},highlighting:{magnetAdsorbed:{name:"stroke",args:{attrs:{fill:"#5F95FF",stroke:"#5F95FF"}}}}}),e.use(new p.w({resizing:!0,rotating:!0})).use(new b.Y({rubberband:!0,showNodeSelectionBox:!0})).use(new v.H).use(new y.N).use(new x.T).use(new F.A);var s=new m.t({title:"\u6D41\u7A0B\u56FE",target:e,stencilGraphWidth:200,stencilGraphHeight:180,collapsable:!0,groups:[{title:"\u57FA\u7840\u6D41\u7A0B\u56FE",name:"group1"},{title:"\u7CFB\u7EDF\u8BBE\u8BA1\u56FE",name:"group2",graphHeight:250,layoutOptions:{rowHeight:70}}],layoutOptions:{columns:2,columnWidth:80,rowHeight:55}});document.getElementById("stencil").appendChild(s.container),e.bindKey(["meta+c","ctrl+c"],function(){var t=e.getSelectedCells();return t.length&&e.copy(t),!1}),e.bindKey(["meta+x","ctrl+x"],function(){var t=e.getSelectedCells();return t.length&&e.cut(t),!1}),e.bindKey(["meta+v","ctrl+v"],function(){if(!e.isClipboardEmpty()){var t=e.paste({offset:32});e.cleanSelection(),e.select(t)}return!1}),e.bindKey(["meta+z","ctrl+z"],function(){return e.canUndo()&&e.undo(),!1}),e.bindKey(["meta+shift+z","ctrl+shift+z"],function(){return e.canRedo()&&e.redo(),!1}),e.bindKey(["meta+a","ctrl+a"],function(){var t=e.getNodes();t&&e.select(t)}),e.bindKey("backspace",function(){var t=e.getSelectedCells();t.length&&e.removeCells(t)}),e.bindKey(["ctrl+1","meta+1"],function(){var t=e.zoom();t<1.5&&e.zoom(.1)}),e.bindKey(["ctrl+2","meta+2"],function(){var t=e.zoom();t>.5&&e.zoom(-.1)});var h=function(r,i){for(var d=0,J=r.length;d<J;d+=1)r[d].style.visibility=i?"visible":"hidden"};e.on("node:mouseenter",function(){var t=document.getElementById("graph-container"),r=t.querySelectorAll(".x6-port-body");h(r,!0)}),e.on("node:mouseleave",function(){var t=document.getElementById("graph-container"),r=t.querySelectorAll(".x6-port-body");h(r,!1)});var c={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{group:"top"},{group:"right"},{group:"bottom"},{group:"left"}]};o.kJ.registerNode("custom-rect",{inherit:"rect",width:66,height:36,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},ports:a()({},c)},!0),o.kJ.registerNode("custom-polygon",{inherit:"polygon",width:66,height:36,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},ports:a()(a()({},c),{},{items:[{group:"top"},{group:"bottom"}]})},!0),o.kJ.registerNode("custom-circle",{inherit:"circle",width:45,height:45,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},ports:a()({},c)},!0),o.kJ.registerNode("custom-image",{inherit:"rect",width:52,height:52,markup:[{tagName:"rect",selector:"body"},{tagName:"image"},{tagName:"text",selector:"label"}],attrs:{body:{stroke:"#5F95FF",fill:"#5F95FF"},image:{width:26,height:26,refX:13,refY:16},label:{refX:3,refY:2,textAnchor:"left",textVerticalAnchor:"top",fontSize:12,fill:"#fff"}},ports:a()({},c)},!0);var j=e.createNode({shape:"custom-rect",label:"\u5F00\u59CB",attrs:{body:{rx:20,ry:26}}}),E=e.createNode({shape:"custom-rect",label:"\u8FC7\u7A0B"}),W=e.createNode({shape:"custom-rect",attrs:{body:{rx:6,ry:6}},label:"\u53EF\u9009\u8FC7\u7A0B"}),A=e.createNode({shape:"custom-polygon",attrs:{body:{refPoints:"0,10 10,0 20,10 10,20"}},label:"\u51B3\u7B56"}),B=e.createNode({shape:"custom-polygon",attrs:{body:{refPoints:"10,0 40,0 30,20 0,20"}},label:"\u6570\u636E"}),I=e.createNode({shape:"custom-circle",label:"\u8FDE\u63A5"});s.load([j,E,W,A,B,I],"group1");var K=[{label:"Client",image:"https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg"},{label:"Http",image:"https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg"},{label:"Api",image:"https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg"},{label:"Sql",image:"https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg"},{label:"Clound",image:"https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg"},{label:"Mq",image:"https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg"}],P=K.map(function(t){return e.createNode({shape:"custom-image",label:t.label,attrs:{image:{"xlink:href":t.image}}})});s.load(P,"group2");function H(){var t=document.getElementById("container"),r=document.createElement("div");r.id="stencil";var i=document.createElement("div");i.id="graph-container",t.appendChild(r),t.appendChild(i),(0,w.insertCss)(`
    #container {
      border: 1px solid #dfe3e8;
      display: flex;
      width: 100%;
      height: 500px;
    }
    #graph-container {
      flex-basis: 500px
    }
    #stencil {
      width: 180px;
      height: 100%;
      position: relative;
      flex-basic: 180px;
      flex-shrink: 0;
      border-right: 1px solid #dfe3e8;
    }
    .x6-widget-stencil  {
      background-color: #fff;
    }
    .x6-widget-stencil-title {
      background-color: #fff;
    }
    .x6-widget-stencil-group-title {
      background-color: #fff !important;
    }
    .x6-widget-transform {
      margin: -1px 0 0 -1px;
      padding: 0px;
      border: 1px solid #239edd;
    }
    .x6-widget-transform > div {
      border: 1px solid #239edd;
    }
    .x6-widget-transform > div:hover {
      background-color: #3dafe4;
    }
    .x6-widget-transform-active-handle {
      background-color: #3dafe4;
    }
    .x6-widget-transform-resize {
      border-radius: 0;
    }
    .x6-widget-selection-inner {
      border: 1px solid #239edd;
    }
    .x6-widget-selection-box {
      opacity: 0;
    }
  `)}};return(0,k.useEffect)(function(){C()},[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"dddccc",children:"aaaaaaaa"}),(0,l.jsx)(f.ZP,{type:"link",children:"aaaddd"}),(0,l.jsx)(f.ZP,{type:"primary",ghost:!0,onClick:function(){console.log("graph",e);var s=new o.NB({shape:"rect",size:{width:100,height:60},markup:[{tagName:"rect",selector:"body1"},{tagName:"text",selector:"label"}],x:100,y:40,width:100,attrs:{body1:{stroke:"#0f0",fill:"#0ff",width:100,height:50,refHeight:80},label:{text:"rectcccccccccc",fill:"#f00"}}});e.addNode(s)},children:"add cell"}),(0,l.jsx)("div",{id:"container"})]})},N=z}}]);
