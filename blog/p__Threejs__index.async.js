"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[102],{87739:function($,S,o){o.r(S),o.d(S,{default:function(){return X}});var D=o(2927),b=o.n(D),E=o(39346),s=o.n(E),Z=o(38497),t=o(47827),K=o(98957),I=o(96469),R=function(){var d=(0,Z.useRef)(null),A=function(){var v=new t.xsS,u=new t.cPb(75,d.current.offsetWidth/d.current.offsetHeight,.1,1e3),c=new t.CP7({antialias:!0,alpha:!0}),H=0;c.setClearColor("#a5c7a5",1),c.setSize(d.current.offsetWidth,d.current.offsetHeight);var J=new t.DvJ(1,1,1),L=new t.Wid({color:"#bfe5ba"}),U=new t.Kj0(J,L),q=new t.y8_(200);v.add(new t.Mig("#f00"));var O=new t.xo$(.5,16,18),p=new t.cek("#f00",6e4);p.add(new t.Kj0(O,new t.vBJ({color:"#e0003f"}))),p.position.x=50,p.position.y=50,p.position.z=100;var V=6,Y=new t.xG9(p,V);v.add(Y);var w=new t.cek("#ffffff",6e4);v.add(w),w.position.x=50,w.position.y=50,w.position.z=-100;var M=function(r){var a=new t.bnF,e=r.radius,n=r.width,i=r.height;return a.moveTo(0,-i/2),a.lineTo((n-e*2)/2,-i/2),a.absarc((n-e*2)/2,-(i-e*2)/2,e,-Math.PI/2,0,!1),a.lineTo(n/2,(i-e*2)/2),a.absarc((n-e*2)/2,i/2-e,e,0,Math.PI/2,!1),a.lineTo(-(n-e*2)/2,i/2),a.absarc(-(n-e*2)/2,(i-e*2)/2,e,Math.PI/2,-Math.PI,!1),a.lineTo(-n/2,-(i-e*2)/2),a.absarc(-(n/2-e),-(i/2-e),e,Math.PI,Math.PI*3/2,!1),a.closePath(),a},y=function(r){var a={depth:r.deep,bevelEnabled:!1,bevelSegments:2,steps:2,bevelSize:1,bevelThickness:1},e=new t.O7d(M(r),a),n=new t.Kj0(e,new t.jyz({transparent:!0,depthWrite:!1,uniforms:{time:{type:"f",value:0},startZ:{type:"f",value:l.deep},color2:{type:"v3",value:new t.Ilk("#5500ff")}},vertexShader:`
                  varying vec3 vPosition;
                              void main() {
                                  vPosition = position;
                                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                              }
                          `,fragmentShader:`
                              varying vec3 vPosition;
                              uniform vec3 color2;
                              uniform float startZ;
                              void main() {
                                  gl_FragColor = vec4(color2,  .3 * smoothstep(30. ,0., vPosition.z));
                                  //gl_FragColor = vec4(color2, 1. / pow(vPosition.z / startZ, 3.));
                              }
                          `}));return n},j=function(r){var a={depth:r.deep,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:1,bevelThickness:1},e=new t.O7d(M(r),a),n=new t.Kj0(e,[new t.xoR({color:"#021a3e"}),new t.xoR({color:"#021a3e"})]);return n},f={rotateX:Math.PI/180*90,translateZ:-10},l={width:16,height:6,radius:3,deep:50},h={width:50,height:50},F=function(){var r=y(s()({x:0,y:0,z:0},l));r.translateZ(h.width/2);var a=y(s()({x:0,y:0,z:0},l));a.rotateY(Math.PI/2),a.translateZ(h.width/2);var e=y(s()({x:0,y:0,z:0},l));e.rotateY(-Math.PI/2),e.translateZ(h.width/2);var n=y(s()({x:0,y:0,z:0},l));return n.rotateY(Math.PI*2/2),n.translateZ(h.width/2),v.add(n),[r,a,e,n]},m=new t.xsS;m.add.apply(m,b()(F()));var x=j(s()(s()({},h),{},{x:0,y:0,z:0,radius:6,deep:20}));x.rotateX(f.rotateX),x.translateZ(f.translateZ),m.add(x),m.translateZ(f.translateZ-100),v.add(m);var P=j(s()(s()({},h),{},{x:0,y:0,z:0,radius:6,deep:20}));P.rotateX(f.rotateX),P.translateZ(f.translateZ);var g=new t.xsS;g.add(P),g.translateZ(f.translateZ+100),g.add.apply(g,b()(F())),v.add(g);var G=new t.DvJ(l.width*.8,l.height*.8,200),C=new t.jyz({transparent:!0,depthWrite:!1,side:t.ehD,uniforms:{time:{type:"f",value:H},startZ:{type:"f",value:l.deep},color2:{type:"v3",value:new t.Ilk("#bca7e7")}},vertexShader:`
            varying vec3 vPosition;
						void main() {
							vPosition = position;
							gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
						}
					`,fragmentShader:`
						varying vec3 vPosition;
						varying float pi;
						uniform vec3 color2;
						uniform float startZ;
						uniform float time;
						void main() {
						  float pi = 3.1415;
							gl_FragColor = vec4(color2,  0.5 * abs(sin(pi / 100.*(vPosition.z)+ time * 0.5)));
						}
					`}),T=new t.Kj0(G,C);T.position.set(0,0,0),v.add(T);var k=new t.bnF().moveTo(80,20).lineTo(40,80).lineTo(120,80).lineTo(80,20),_=k.getPoints();u.position.x=-300,u.position.y=100,u.position.z=150;var B=new K.z(u,c.domElement);d.current.appendChild(c.domElement);function W(){C.uniforms.time.value+=.1,B.update(),requestAnimationFrame(W),c.render(v,u)}W()};return(0,Z.useEffect)(function(){A()},[]),(0,I.jsx)("div",{children:(0,I.jsx)("div",{class:"three-class",ref:d})})},X=R}}]);
