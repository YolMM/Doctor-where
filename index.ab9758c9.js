function e(e,i,s,t){Object.defineProperty(e,i,{get:s,set:t,enumerable:!0,configurable:!0})}function i(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=s.parcelRequire77f2;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){n[e]=i},s.parcelRequire77f2=r),r.register("bXuNP",(function(i,s){var t,n;e(i.exports,"register",(()=>t),(e=>t=e)),e(i.exports,"resolve",(()=>n),(e=>n=e));var r={};t=function(e){for(var i=Object.keys(e),s=0;s<i.length;s++)r[i[s]]=e[i[s]]},n=function(e){var i=r[e];if(null==i)throw new Error("Could not resolve bundle with id "+e);return i}})),r("bXuNP").register(JSON.parse('{"6qpDd":"index.ab9758c9.js","f0l4j":"wall-frame.c502dc68.png","5pFhl":"floor.3354bec9.png","epMPL":"angel-right.e91cb588.png","3U7TB":"angel-left.0c005157.png","hgygF":"angel-down.4cd5535b.png","idrqs":"angel-up.f0b009d4.png","946b5":"doc-right.d8b29833.png","01mcB":"doc-left.bc7c292c.png","22u3L":"doc-up.0069c93e.png","iyKzN":"doc-down.1139ec31.png","fhylE":"tardis.bd7af273.png","17X6N":"tardis-glowing.cf475750.png","iCks3":"tardis-vanishing1.34888314.png","4Ldw1":"tardis-vanishing2.9f359b83.png","kCKJs":"tardis-vanishing3.71003deb.png","9wONu":"tardis-vanishing4.2779d16c.png","eL4h6":"tardis-vanishing5.c3179310.png","DQjR3":"tardis-vanishing6.fc29c506.png","dDY7o":"tardis-vanishing7.e11dd270.png","imqZu":"tardis-vanishing8.34b624a8.png","6Nmrd":"tardis-vanishing9.422beb80.png","4SeRG":"tardis-vanished.92b8a686.png","76KnA":"sonic-screwdriver.5a360144.png","5ogZ8":"banana.f4db1deb.png","57VzN":"spoon.f7033ecc.png"}'));class a{constructor(e){this.position=e}update(e){}draw(e,i){}keyboard_event(e){}}var W;r.register("kPq84",(function(i,s){var t;e(i.exports,"getBundleURL",(()=>t),(e=>t=e));var n={};function r(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var i=n[e];return i||(i=function(){try{throw new Error}catch(i){var e=(""+i.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),n[e]=i),i}})),W=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("f0l4j");var o;o=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("5pFhl");let g="\nWWWWWWWWWWWWWWWWWWWWWWWWWW\nW......W.............W.W.W\nW.W.WWWWWWWWWWWW.WWW.W.W.W\nW.W..W...W....W....W.W.W.W\nWWW.WW.W.W.W.WWW.W.W.W...W\nW.W....WWWWW...W.W.W.W.W.W\nW.W.W....W....WW.W.W...W.W\nW...WWWW...WW.W..W.WWW.W.W\nW.W.W..WWWW.WWWW.W...W.W.W\nW.W...W...W......W.WWW.WWW\nW.WWW.W.WWW.W.W.WW.W....WW\nW...WWW...W.WWW.W..WWWW.WW\nWW.WW.WWW...W...WW.W..W.WW\nWW..W...WWWWWW...WWWW.W..W\nWW.WW.WWW...W..W....W.WW.W\nW...W.....WWWWWWWWW.W....W\nW.W.WW.WW...W.......WW.WWW\nW.W.....WWW.W.WWWWWWW....W\nWWWW.WW...W.W..W......WW.W\nW.....W.W.WWWW.W.WWWW..W.W\nW.W.W.W.W......W....WWWW.W\nW.W.W.W.WWWWWWWWWWW...W..W\nW.W.W...W......W..W.W.WWWW\nW.W.WWWWW.WWWWWW.WW.W.W..W\nW.W..............W..W....W\nWWWWWWWWWWWWWWWWWWWWWWWWWW\n";class h extends a{constructor(e){super({x:0,y:0}),this.canvasSize={width:1020,height:1024},this.blockSize=40,this.gridSize={x:Math.round(this.canvasSize.width/this.blockSize),y:Math.round(this.canvasSize.height/this.blockSize)},this.origin={x:0,y:0},this.coords,this.matrix=g.match(/.{1,26}/g).map((e=>e.split(""))),this.wallImg=new Image,this.wallImg.src=i(W),this.pathImg=new Image,this.pathImg.src=i(o)}update(){}keyboard_event(){}draw(e,i){this.matrix.forEach(((i,s)=>{this.origin.y=s;i.forEach(((i,s)=>{switch(this.origin.x=s,this.coords={x:this.origin.x*this.blockSize,y:this.origin.y*this.blockSize},i){case"W":e.drawImage(this.wallImg,this.coords.x,this.coords.y,this.blockSize,this.blockSize);break;case".":e.drawImage(this.pathImg,this.coords.x,this.coords.y,this.blockSize,this.blockSize)}}))}))}isCollision(e,i){return"W"===this.matrix[i][e]}}var d;d=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("epMPL");var c;c=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("3U7TB");var l;l=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("hgygF");var u;u=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("idrqs");class w extends a{constructor(e){super(e),this.angelSize=40,this.newPosition={x:e.x,y:e.y},this.angelRightImg=new Image,this.angelRightImg.src=i(d),this.angelLeftImg=new Image,this.angelLeftImg.src=i(c),this.angelDownImg=new Image,this.angelDownImg.src=i(l),this.angelUpImg=new Image,this.angelUpImg.src=i(u),this.currentAngelImg=this.angelLeftImg}update(){}keyboard_event(e){let i,s,t=new h({x:0,y:0}),n=this.newPosition,r=this.angelSize;switch(e){case"ArrowDown":n={x:n.x+r,y:n.y},i=n.x/r,s=n.y/r,t.isCollision(i,s)||(this.newPosition.x+=r),this.currentAngelImg=this.angelRightImg;break;case"ArrowRight":n={x:n.x-r,y:n.y},i=n.x/r,s=n.y/r,t.isCollision(i,s)||(this.newPosition.x-=r),this.currentAngelImg=this.angelLeftImg;break;case"ArrowUp":n={x:n.x,y:n.y+r},i=n.x/r,s=n.y/r,t.isCollision(i,s)||(this.newPosition.y+=r),this.currentAngelImg=this.angelDownImg;break;case"ArrowLeft":n={x:n.x,y:n.y-r},i=n.x/r,s=n.y/r,t.isCollision(i,s)||(this.newPosition.y-=r),this.currentAngelImg=this.angelUpImg}}getPos(){return this.newPosition}draw(e,i){let s=this.angelSize,t=this.newPosition,n=this.currentAngelImg;e.drawImage(n,t.x,t.y,s,s)}}var m;m=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("946b5");var y;y=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("01mcB");var x;x=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("22u3L");var p;p=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("iyKzN");class b extends a{constructor(e){super(e),this.docSize=40,this.newDocPosition={x:e.x,y:e.y},this.docRightImg=new Image,this.docRightImg.src=i(m),this.docLeftImg=new Image,this.docLeftImg.src=i(y),this.docDownImg=new Image,this.docDownImg.src=i(p),this.docUpImg=new Image,this.docUpImg.src=i(x),this.frameCount=0,this.currentImg=this.docRightImg,this.docFrames=[{src_origin:{x:10,y:0},size:{x:40,y:60}},{src_origin:{x:75,y:0},size:{x:40,y:60}},{src_origin:{x:140,y:0},size:{x:40,y:60}},{src_origin:{x:205,y:0},size:{x:40,y:60}},{src_origin:{x:265,y:0},size:{x:40,y:60}},{src_origin:{x:330,y:0},size:{x:40,y:60}},{src_origin:{x:395,y:0},size:{x:40,y:60}},{src_origin:{x:460,y:0},size:{x:40,y:60}},{src_origin:{x:525,y:0},size:{x:40,y:60}}]}update(){}keyboard_event(e){let i,s,t=new h({x:0,y:0}),n=this.newDocPosition,r=this.docSize;switch(e){case"ArrowRight":n={x:n.x+r,y:n.y},i=n.x/r,s=n.y/r,t.isCollision(i,s)||(this.newDocPosition.x+=r),this.currentFrames=this.docFrames,this.currentImg=this.docRightImg;break;case"ArrowLeft":n={x:n.x-r,y:n.y},i=n.x/r,s=n.y/r,t.isCollision(i,s)||(this.newDocPosition.x-=r),this.currentFrames=this.docFrames,this.currentImg=this.docLeftImg;break;case"ArrowDown":n={x:n.x,y:n.y+r},i=n.x/r,s=n.y/r,t.isCollision(i,s)||(this.newDocPosition.y+=r),this.currentFrames=this.docFrames,this.currentImg=this.docDownImg;break;case"ArrowUp":n={x:n.x,y:n.y-r},i=n.x/r,s=n.y/r,t.isCollision(i,s)||(this.newDocPosition.y-=r),this.currentFrames=this.docFrames,this.currentImg=this.docUpImg}}getPos(){return this.newDocPosition}draw(e,i){let s=this.docSize,t=this.newDocPosition;this.currentFrames=this.docFrames;let n=Math.floor(10*this.frameCount),r=this.currentFrames[n%this.currentFrames.length];e.drawImage(this.currentImg,r.src_origin.x,r.src_origin.y,r.size.x,r.size.y,t.x,t.y,s,s),this.frameCount+=i}}class v extends a{update(){}keyboard_event(){}draw(e,i){const s=(1/i).toFixed(2);e.font="18px Arial",e.fillStyle="silver",e.fillRect(3,3,100,20),e.fillStyle="black",e.fillText(`FPS:${s}`,this.position.x,this.position.y)}}var I;I=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("fhylE");var P;P=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("17X6N");var f;f=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("iCks3");var _;_=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("4Ldw1");var R;R=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("kCKJs");var k;k=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("9wONu");var q;q=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("eL4h6");var S;S=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("DQjR3");var H;H=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("dDY7o");var D;D=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("imqZu");var F;F=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("6Nmrd");var A;A=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("4SeRG");class L extends a{constructor(e){super(e),this.origin={x:e.x,y:e.y},this.tardisSize={x:40,y:80},this.tardisImg=new Image,this.tardisImg.src=i(I),this.tardisGlowing=new Image,this.tardisGlowing.src=i(P),this.tardisVanishing1=new Image,this.tardisVanishing1.src=i(f),this.tardisVanishing2=new Image,this.tardisVanishing2.src=i(_),this.tardisVanishing3=new Image,this.tardisVanishing3.src=i(R),this.tardisVanishing4=new Image,this.tardisVanishing4.src=i(k),this.tardisVanishing5=new Image,this.tardisVanishing5.src=i(q),this.tardisVanishing6=new Image,this.tardisVanishing6.src=i(S),this.tardisVanishing7=new Image,this.tardisVanishing7.src=i(H),this.tardisVanishing8=new Image,this.tardisVanishing8.src=i(D),this.tardisVanishing9=new Image,this.tardisVanishing9.src=i(F),this.tardisVanished=new Image,this.tardisVanished.src=i(A),this.currentImg=this.tardisImg,this.tardisEndImg=[this.tardisGlowing,this.tardisVanishing1,this.tardisVanishing2,this.tardisVanishing3,this.tardisVanishing4,this.tardisVanishing5,this.tardisVanishing6,this.tardisVanishing7,this.tardisVanishing8,this.tardisVanishing9,this.tardisVanished]}update(){}keyboard_event(e){}setImg(e){return this.currentImg=e}draw(e,i){e.drawImage(this.currentImg,this.origin.x,this.origin.y,this.tardisSize.x,this.tardisSize.y)}}var E;E=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("76KnA");var N;N=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("5ogZ8");var U;U=r("kPq84").getBundleURL("6qpDd")+r("bXuNP").resolve("57VzN");class z extends a{constructor(e,s){super(e),this.tool=s,this.origin={x:e.x,y:e.y},this.screwdriverImg=new Image,this.screwdriverImg.src=i(E),this.bananaImg=new Image,this.bananaImg.src=i(N),this.spoonImg=new Image,this.spoonImg.src=i(U)}update(){}keyboard_event(e){}getPos(){return this.origin}draw(e,i){"screwdriver"==this.tool?e.drawImage(this.screwdriverImg,this.origin.x,this.origin.y,40,40):"banana"==this.tool?e.drawImage(this.bananaImg,this.origin.x,this.origin.y,40,40):"spoon"==this.tool&&e.drawImage(this.spoonImg,this.origin.x,this.origin.y,40,40)}}window.onload=()=>{var e=document.getElementById("canvas").getContext("2d");let i=new b({x:40,y:40}),s=new h({x:0,y:0}),t=new v({x:10,y:20}),n=new L({x:960,y:920}),r=new z({x:400,y:160},"screwdriver"),a=new z({x:240,y:320},"banana"),W=new z({x:520,y:560},"spoon"),o=[s,t,i,n,r,a,W,new w({x:120,y:360}),new w({x:480,y:240}),new w({x:200,y:880}),new w({x:800,y:240}),new w({x:560,y:800}),new w({x:880,y:680})];let g=0;const d=s=>{let t=(s-g)/1e3;g=s,o.forEach((e=>e.update(t))),e.clearRect(0,0,1020,1024),o.forEach((i=>{e.save(),i.draw(e,t),e.restore()})),r.getPos().x==i.getPos().x&&r.getPos().y==i.getPos().y?(r=new z({x:120,y:0},"screwdriver"),o[4]=r):a.getPos().x==i.getPos().x&&a.getPos().y==i.getPos().y?(a=new z({x:160,y:0},"banana"),o[5]=a):W.getPos().x==i.getPos().x&&W.getPos().y==i.getPos().y&&(W=new z({x:200,y:0},"spoon"),o[6]=W),(()=>{if(0==r.getPos().y&&0==a.getPos().y&&0==W.getPos().y)return!1;for(let e=0;e<o.length;e++)if(o[e]instanceof w&&o[e].getPos().x==i.getPos().x&&o[e].getPos().y==i.getPos().y)return!0})()&&(i=new b({x:40,y:40}),o[2]=i),(async()=>{if(i.getPos().x==n.origin.x&&i.getPos().y==n.origin.y+40){const s=o.indexOf(i);if(s>-1){o.splice(s,1);for(let i=0;i<n.tardisEndImg.length;i++)n.setImg(n.tardisEndImg[i]),n.draw(e),await new Promise((e=>setTimeout(e,500)))}}})(),window.requestAnimationFrame(d)};window.requestAnimationFrame(d),document.body.addEventListener("keydown",(e=>{o.forEach((i=>{i.keyboard_event&&i.keyboard_event(e.key)}))}))};
//# sourceMappingURL=index.ab9758c9.js.map
