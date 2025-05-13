"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[387],{9924:function(R,w,t){t.r(w),t.d(w,{default:function(){return X}});var C=t(39346),l=t.n(C),j=t(9083),S=t.n(j),n=t(49188),z=t(98958),c=t(45401),u=t(38497),E=function(e){var p=new n.NB({id:"nodeId-".concat(Math.random()),markup:[{tagName:"rect",selector:"body1",groupSelector:"",attrs:{fill:"#f00",stroke:"#f0f",textAnchor:"top",textVerticalAnchor:"middle"},style:{},className:"",textContent:"",children:[]},{tagName:"text",selector:"label"}],attrs:{body1:{stroke:"#0f0",fill:"#0ff",width:100,height:50,refHeight:80},label:{text:"rectcccccccccc",fill:"#f00"}},shape:e.shape,size:{width:100,height:60},x:100,y:40,width:100}),g=new n.NB(e);return g},A=t(52353),W=t(98539),I=t(80676),P=t(63287),M=t(1169),B=t(88350),H=t(80062),Z=t(673),r=t(96469),G=function(){var e,p=function(){F(),e=new n.kJ({container:document.getElementById("graph-container"),grid:!0,autoResize:!0,width:200,height:200,mousewheel:{enabled:!0,zoomAtMousePosition:!0,modifiers:"ctrl",minScale:.5,maxScale:3},connecting:{router:"manhattan",connector:{name:"rounded",args:{radius:8}},anchor:"center",connectionPoint:"anchor",allowBlank:!1,snap:{radius:20},createEdge:function(){return new n.bn.kS({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2,targetMarker:{name:"block",width:12,height:8}}},zIndex:0})},validateConnection:function(x){var b=x.targetMagnet;return!!b}},highlighting:{magnetAdsorbed:{name:"stroke",args:{attrs:{fill:"#5F95FF",stroke:"#5F95FF"}}}}}),e.use(new W.w({resizing:!0,rotating:!0})).use(new I.Y({rubberband:!0,showNodeSelectionBox:!0})).use(new P.H).use(new M.N).use(new B.T).use(new H.A);var a=new A.t({title:"\u6D41\u7A0B\u56FE",target:e,stencilGraphWidth:200,stencilGraphHeight:180,collapsable:!0,groups:[{title:"\u57FA\u7840\u6D41\u7A0B\u56FE",name:"group1"},{title:"\u7CFB\u7EDF\u8BBE\u8BA1\u56FE",name:"group2",graphHeight:250,layoutOptions:{rowHeight:70}}],layoutOptions:{columns:2,columnWidth:80,rowHeight:55}});document.getElementById("stencil").appendChild(a.container);var h={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{group:"top"},{group:"right"},{group:"bottom"},{group:"left"}]};n.kJ.registerNode("custom-rect",{inherit:"rect",width:66,height:36,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},ports:l()({},h)},!0),n.kJ.registerNode("custom-polygon",{inherit:"polygon",width:66,height:36,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},ports:l()(l()({},h),{},{items:[{group:"top"},{group:"bottom"}]})},!0),n.kJ.registerNode("custom-circle",{inherit:"circle",width:45,height:45,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},ports:l()({},h)},!0),n.kJ.registerNode("custom-image",{inherit:"rect",width:52,height:52,markup:[{tagName:"rect",selector:"body"},{tagName:"image"},{tagName:"text",selector:"label"}],attrs:{body:{stroke:"#5F95FF",fill:"#5F95FF"},image:{width:26,height:26,refX:13,refY:16},label:{refX:3,refY:2,textAnchor:"left",textVerticalAnchor:"top",fontSize:12,fill:"#fff"}},ports:l()({},h)},!0);var v=e.createNode({shape:"custom-rect",label:"\u5F00\u59CB",attrs:{body:{rx:20,ry:26}}}),f=e.createNode({shape:"custom-rect",label:"\u8FC7\u7A0B"}),o=e.createNode({shape:"custom-rect",attrs:{body:{rx:6,ry:6}},label:"\u53EF\u9009\u8FC7\u7A0B"}),s=e.createNode({shape:"custom-polygon",attrs:{body:{refPoints:"0,10 10,0 20,10 10,20"}},label:"\u51B3\u7B56"}),m=e.createNode({shape:"custom-polygon",attrs:{body:{refPoints:"10,0 40,0 30,20 0,20"}},label:"\u6570\u636E"}),i=e.createNode({shape:"custom-circle",label:"\u8FDE\u63A5"});a.load([v,f,o,s,m,i],"group1");var k=[{label:"Client",image:"https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg"},{label:"Http",image:"https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg"},{label:"Api",image:"https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg"},{label:"Sql",image:"https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg"},{label:"Clound",image:"https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg"},{label:"Mq",image:"https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg"}],y=k.map(function(d){return e.createNode({shape:"custom-image",label:d.label,attrs:{image:{"xlink:href":d.image}}})});a.load(y,"group2");function F(){var d=document.getElementById("container"),x=document.createElement("div");x.id="stencil";var b=document.createElement("div");b.id="graph-container",d.appendChild(x),d.appendChild(b),(0,Z.insertCss)(`
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
  `)}};return(0,u.useEffect)(function(){p()},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"dddccc",children:"aaaaaaaa"}),(0,r.jsx)(c.ZP,{type:"link",children:"aaaddd"}),(0,r.jsx)(c.ZP,{type:"primary",ghost:!0,onClick:function(){console.log("graph",e);var a=new n.NB({shape:"rect",size:{width:100,height:60},markup:[{tagName:"rect",selector:"body1"},{tagName:"text",selector:"label"}],x:100,y:40,width:100,attrs:{body1:{stroke:"#0f0",fill:"#0ff",width:100,height:50,refHeight:80},label:{text:"rectcccccccccc",fill:"#f00"}}});e.addNode(a)},children:"add cell"}),(0,r.jsx)("div",{id:"container"})]})},J=G,T=function(){var e=(0,u.useRef)(null),p=(0,u.useState)(),g=S()(p,2),a=g[0],h=g[1],v=function(){var o=new n.kJ({container:e.current,grid:10,width:500,height:300,mousewheel:{enabled:!0,zoomAtMousePosition:!0,modifiers:"ctrl",minScale:.5,maxScale:3},connecting:{snap:{radius:50},highlight:!0,anchor:{name:"midSide",args:{dx:10}},router:"manhattan",connector:{name:"rounded",args:{radius:8}},connectionPoint:"anchor",allowBlank:!1,allowNode:!0,createEdge:function(){return new n.bn.kS({attrs:{line:{stroke:"#f0f",strokeWidth:2}},zIndex:0})},validateMagnet:function(){return!0},validateEdge:function(){return!0},validateConnection:function(m){var i=m.targetMagnet;return!!i}},highlighting:{magnetAdsorbed:{name:"stroke",args:{attrs:{fill:"transparent",stroke:"#5F95FF"}}},magnetAvailable:{name:"stroke",args:{attrs:{fill:"transparent",stroke:"##f0f"}}},nodeAvailable:{name:"stroke",args:{attrs:{fill:"transparent",stroke:"##1af"}}}}});h(o)};return(0,u.useEffect)(function(){v()},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(z.Z.Compact,{children:[(0,r.jsx)(c.ZP,{children:"Graph"}),(0,r.jsx)(c.ZP,{onClick:function(){a==null||a.addNode(E({shape:"rect",magnet:!0,width:100,height:50,x:100,y:100,ports:{items:[{markup:[{tagName:"rect",selector:"ddd1",textContent:"aacc"},{tagName:"rect",attrs:{stroke:"#f00",strokeWidth:1,fill:"#fff",width:20,height:20},textContent:"ddvv"}],label:{position:"right",markup:{tagName:"g",children:[{tagName:"rect",attrs:{width:30,height:12,fill:"#a0f"}},{tagName:"text",attrs:{text:"aadp",fill:"#1269d3"}}]}},attrs:{ddd1:{stroke:"#f00",strokeWidth:1,fill:"#fff",refWidth:10,refHeight:10},text:{text:"oop",fill:"#1269d3"}},args:{}}]},markup:[{tagName:"rect",selector:"body1",groupSelector:"",attrs:{fill:"#f00",stroke:"#ff0",strokeWidth:10,textAnchor:"middle"},style:{color:"#0f0"},className:"a--a"},{tagName:"text",selector:"label1"}],attrs:{port1111:{text:"port1111"},body1:{fill:"#0ff",refWidth:1,refHeight:1},label1:{text:"aaa",fill:"#000",y:"10px"}},tools:[{name:"button-remove",args:{x:100,y:-1}},{name:"node-editor"}],data:{bizID:125,date:"20200630",price:89}}))},children:"add custom Node"}),(0,r.jsx)(c.ZP,{onClick:function(){a==null||a.addNode({shape:"rect",width:100,height:50,x:100,y:100,ports:{groups:{a1:{markup:[{tagName:"circle",selector:"c1"}],attrs:{c1:{r:5,stroke:"#f00",fill:"transparent",magnet:!0}}}},items:[{group:"a1"},{group:"a1"}]}})},children:"add normal Node"}),(0,r.jsx)(c.ZP,{onClick:function(){var o=a==null?void 0:a.getNodes();console.log("nodes",o),o==null||o.forEach(function(s){Array.from({length:3}).forEach(function(m,i){var k=i===2?{position:{args:{x:20,y:-20}}}:{},y=i===2?{stroke:"red"}:{},F=i===2?{fill:"red"}:{};s.addPort({label:k,group:"group1",attrs:{circle:l()({magnet:!0},y),text:l()({text:"P".concat(i)},F)}})})})},children:"add ports"})]}),(0,r.jsx)("div",{ref:e}),(0,r.jsx)("h1",{children:"23"}),(0,r.jsx)(J,{})]})},X=T}}]);
