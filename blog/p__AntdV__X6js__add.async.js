"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[352],{64909:function(ie,k,t){t.r(k),t.d(k,{default:function(){return T}});var I=t(39346),d=t.n(I),z=t(9083),v=t.n(z),f=t(49188),A=t(52353),E=t(98539),L=t(80676),W=t(63287),Z=t(1169),J=t(88350),P=t(80062),w=t(673),u=t(38497),O=t(17746),B=t(78329),N=t(34951),b=t(79853),m=t(72049),H=t(76856),x=t(34892),i=t(96469),D=function(){var Y=(0,u.useState)(),C=v()(Y,2),a=C[0],G=C[1],R=function(){ae(),f.kJ.registerEdge("custom-edge-label",{inherit:"edge",defaultLabel:{markup:[{tagName:"rect",selector:"body"},{tagName:"text",selector:"label"}],attrs:{label:{fill:"#000",fontSize:14,textAnchor:"middle",textVerticalAnchor:"middle",pointerEvents:"none"},body:{ref:"label",fill:"#ffd591",stroke:"#ffa940",strokeWidth:2,rx:4,ry:4,refWidth:"140%",refHeight:"140%",refX:"-20%",refY:"-20%"}},position:{distance:200,options:{absoluteDistance:!0,reverseDistance:!0}}}},!0);var e=new f.kJ({container:document.getElementById("graph-container"),grid:1,autoResize:!0,width:1600,height:500,mousewheel:{enabled:!0,zoomAtMousePosition:!0,modifiers:"ctrl",minScale:.5,maxScale:3},connecting:{router:"manhattan",connector:{name:"rounded",args:{radius:8}},anchor:"center",connectionPoint:"anchor",allowBlank:!1,snap:{radius:20},createEdge:function(){var s=new f.bn.kS({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2,strokeDasharray:5,style:{animation:"ant-line 30s infinite linear"},targetMarker:{name:"block",width:12,height:8}}},tools:[{name:"target-arrowhead"},{name:"target-arrowhead"},{name:"edge-editor"},{name:"button-remove",args:{distance:"50%",offset:{y:-20}}}],zIndex:0});return s.appendLabel({attrs:{text:{text:"Hello Label"},offset:{y:-20}}}),s},validateConnection:function(s){var p=s.targetMagnet;return!!p}},highlighting:{magnetAdsorbed:{name:"stroke",args:{attrs:{fill:"#5F95FF",stroke:"#5F95FF"}}}}});console.log("graphIns",e);var o=e;o.use(new E.w({resizing:!0,rotating:!0})),o.use(new L.Y({rubberband:!0,showNodeSelectionBox:!0})),o.use(new W.H({enabled:!0})),o.use(new Z.N({enabled:!0,global:!0})),o.use(new J.T({enabled:!0})),o.use(new P.A({enabled:!0})),e.on("edge:mouseenter",function(n){var s=n.cell;console.log("cell",s)}),e.on("edge:mouseleave",function(n){var s=n.cell;s.hasTools("onhover")&&s.removeTools()});var g=new A.t({title:"\u6D41\u7A0B\u56FE",target:e,stencilGraphWidth:200,stencilGraphHeight:180,collapsable:!0,groups:[{title:"\u57FA\u7840\u6D41\u7A0B\u56FE",name:"group1"},{title:"\u7CFB\u7EDF\u8BBE\u8BA1\u56FE",name:"group2",graphHeight:250,layoutOptions:{rowHeight:70}}],layoutOptions:{columns:2,columnWidth:80,rowHeight:55}});document.getElementById("stencil").appendChild(g.container),e.bindKey(["meta+c","ctrl+c"],function(){var n=e.getSelectedCells();return n.length&&e.copy(n),!1}),e.bindKey(["meta+v","ctrl+v"],function(){if(!e.isClipboardEmpty()){var n=e.paste({offset:32});e.cleanSelection(),e.select(n)}return!1}),e.bindKey(["meta+z","ctrl+z"],function(){return console.log(e.canUndo),e.canUndo()&&e.undo(),!1}),e.bindKey(["meta+shift+z","ctrl+shift+z"],function(){return e.canRedo()&&e.redo(),!1}),e.bindKey(["meta+a","ctrl+a"],function(){var n=e.getNodes();n&&e.select(n)}),e.bindKey("delete",function(){var n=e.getSelectedCells();n.length&&e.removeCells(n)});var l={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{}}}},right:{position:"right",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{}}}},left:{position:"left",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{}}}}},items:[{group:"top"},{group:"right"},{group:"bottom"},{group:"left"}]};f.kJ.registerNode("custom-rect",{inherit:"rect",width:66,height:36,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},ports:d()({},l)},!0),f.kJ.registerNode("custom-polygon",{inherit:"polygon",width:66,height:36,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},ports:d()(d()({},l),{},{items:[{group:"top"},{group:"bottom"},{group:"left"},{group:"right"}]})},!0),f.kJ.registerNode("custom-circle",{inherit:"circle",width:45,height:45,attrs:{body:{strokeWidth:1,stroke:"#5F95FF",fill:"#EFF4FF"},text:{fontSize:12,fill:"#262626"}},ports:d()({},l)},!0),f.kJ.registerNode("custom-image",{inherit:"rect",width:52,height:52,markup:[{tagName:"rect",selector:"body"},{tagName:"image"},{tagName:"text",selector:"label"}],attrs:{body:{stroke:"#5F95FF",fill:"#5F95FF"},image:{width:26,height:26,refX:13,refY:16},label:{refX:3,refY:2,textAnchor:"left",textVerticalAnchor:"top",fontSize:12,fill:"#fff"}},ports:d()({},l)},!0),G(e);var Q=e.createNode({shape:"custom-rect",label:"\u5F00\u59CB",attrs:{body:{rx:20,ry:26}},tools:[{name:"node-editor"},{name:"button-remove",args:{x:"100%",y:0,offset:{x:0,y:0}}}]}),q=e.createNode({shape:"custom-rect",label:"\u8FC7\u7A0B",tools:[{name:"node-editor"},{name:"button-remove",args:{x:"100%",y:0,offset:{x:0,y:0}}}]}),_=e.createNode({shape:"custom-rect",attrs:{body:{rx:6,ry:6}},label:"\u53EF\u9009\u8FC7\u7A0B",tools:[{name:"node-editor"},{name:"button-remove",args:{x:"100%",y:0,offset:{x:0,y:0}}}]}),ee=e.createNode({shape:"custom-polygon",attrs:{body:{refPoints:"0,10 10,0 20,10 10,20"}},label:"\u51B3\u7B56",tools:[{name:"node-editor"},{name:"button-remove",args:{x:"100%",y:0,offset:{x:0,y:0}}}]}),te=e.createNode({shape:"custom-polygon",attrs:{body:{refPoints:"10,0 40,0 30,20 0,20"}},label:"\u6570\u636E",tools:[{name:"node-editor"},{name:"button-remove",args:{x:"100%",y:0,offset:{x:0,y:0}}}]}),ne=e.createNode({shape:"custom-circle",label:"\u8FDE\u63A5",tools:[{name:"node-editor"},{name:"button-remove",args:{x:"100%",y:0,offset:{x:0,y:0}}}]});g.load([Q,q,_,ee,te,ne],"group1");var oe=[{label:"Client",image:"https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg"},{label:"Http",image:"https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg"},{label:"Api",image:"https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg"},{label:"Sql",image:"https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg"},{label:"Clound",image:"https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg"},{label:"Mq",image:"https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg"}],re=oe.map(function(n){return e.createNode({shape:"custom-image",label:n.label,attrs:{image:{"xlink:href":n.image}}})});g.load(re,"group2");function ae(){var n=document.getElementById("container"),s=document.createElement("div");s.id="stencil";var p=document.createElement("div");p.id="graph-container",n.appendChild(s),n.appendChild(p),(0,w.insertCss)(`
    #container {
      border: 1px solid #dfe3e8;
      display: flex;
      width: 100%;
      height: 500px;
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
  `),(0,w.insertCss)(`
  @keyframes ant-line {
    to {
        stroke-dashoffset: -1000
    }
  }
`)}},U=(0,u.useState)({}),S=v()(U,2),r=S[0],h=S[1],V=(0,u.useState)([]),j=v()(V,2),y=j[0],$=j[1],F=function(){x.d.k.getCodeListData("",{tableName:"x6List"}).then(function(e){$(e.results||[])})};return(0,u.useEffect)(function(){F(),R()},[]),(0,u.useEffect)(function(){a==null||a.fromJSON(JSON.parse(r.codeInfo||"{}"))},[r.objectId]),(0,i.jsxs)("div",{children:[(0,i.jsxs)(O.Z,{children:[(0,i.jsx)(B.Z,{style:{width:300},value:r==null?void 0:r.name,onChange:function(e){var o=e.target;console.log("v11111",o.value),h(d()(d()({},r),{},{name:o.value}))}}),(0,i.jsx)(N.Z,{style:{width:300},value:r.objectId,onChange:function(e){console.log("v22222",e),h(y.find(function(o){return o.objectId===e}))},children:y.map(function(c){return(0,i.jsx)(N.Z.Option,{children:c.name},c.objectId)})}),(0,i.jsx)(b.ZP,{type:"primary",onClick:function(){console.log(">>>>>>>>>",a==null?void 0:a.toJSON());var e=(a==null?void 0:a.toJSON())||{};if(!r.name){m.ZP.warning("\u6A21\u578B\u540D\u79F0\u5FC5\u586B\u5594\uFF01");return}x.d.k.addCodeListData("",{tableName:"x6List",body:d()(d()({},r),{},{createdAt:void 0,codeInfo:JSON.stringify(e)})}).then(function(o){m.ZP.success("\u64CD\u4F5C\u6210\u529F\uFF01"),h(r),F()})},children:"\u4FDD\u5B58"}),(0,i.jsx)(b.ZP,{type:"primary",danger:!0,onClick:function(){console.log("x6ActiveInfo",r);var e=y.find(function(o){return o.objectId===r.objectId});H.Z.confirm({title:"\u5220\u9664\u63D0\u793A",content:"\u60A8\u786E\u8BA4\u8981\u5220\u9664".concat(e.name,"\u5417?"),onOk:function(){console.log("x6ActiveInfo",r),x.d.k.deleteCodeListData("",{tableName:"x6List",objectId:r.objectId||""}).then(function(g){h({}),m.ZP.success("\u5220\u9664\u6210\u529F\uFF01"),F()}).catch(function(g){var l;m.ZP.warning((g==null||(l=g.response)===null||l===void 0||(l=l.data)===null||l===void 0?void 0:l.error)||"")})}})},children:"\u5220\u9664"}),(0,i.jsx)(b.ZP,{type:"primary",ghost:!0,onClick:function(){console.log("graph",a);var e=new f.NB({shape:"rect",size:{width:100,height:60},markup:[{tagName:"rect",selector:"body1"},{tagName:"text",selector:"label"}],x:100,y:40,width:100,attrs:{body1:{stroke:"#0f0",fill:"#0ff",width:100,height:50,refHeight:80},label:{text:"rectcccccccccc",fill:"#f00"}}});a==null||a.addNode(e)},children:"add cell"})]}),(0,i.jsx)("div",{id:"container"})]})},M=D,K=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(M,{})})},T=K}}]);
