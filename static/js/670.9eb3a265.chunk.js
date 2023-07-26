/*! For license information please see 670.9eb3a265.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[670],{4146:function(e,n,t){t.d(n,{Z:function(){return u}});var r,i,a=t(1087),o=t(7689),c=t(168),l=t(5867),s=l.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  padding: 0 0 20px 0;\n  margin-top: 10px;\n"]))),f=l.ZP.li(i||(i=(0,c.Z)(["\n  overflow: hidden;\n  border: solid 1px #ac04ac;\n  border-radius: 25px;\n  box-shadow: 7px 7px 7px #0000004d, -23px 0 20px -23px #000c,\n    23px 0 20px -23px #000c, inset 0 0 40px #0000001a;\n  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    box-shadow: 0 1px 4px #0000004d, -23px 0 20px -23px #000c,\n      23px 0 20px -23px #000c, inset 0 0 40px #0000001a;\n  }\n\n  & a {\n    color: #000000;\n    transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    & div {\n      text-align: center;\n      width: 250px;\n      height: 460px;\n\n      & span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 376px;\n        border-bottom: solid 1px black;\n        font-size: 30px;\n      }\n      & img {\n        margin-bottom: 5px;\n        border-bottom: solid 1px black;\n      }\n    }\n\n    & b {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 10px;\n      font-size: 16px;\n    }\n  }\n\n  &:hover > a {\n    color: red;\n  }\n"]))),d=t(4101),p=t(184),u=function(e){var n=e.movies,t=(0,o.TH)();return(0,p.jsxs)(s,{children:[(0,p.jsx)(d.Z,{}),n.map((function(e){var n=e.id,r=e.title,i=e.poster_path;return(0,p.jsx)(f,{children:(0,p.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:t},children:(0,p.jsxs)("div",{children:[i?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(i),alt:"Poster ".concat(r),width:"250px",height:"375px"}):(0,p.jsx)("span",{children:"No poster"}),(0,p.jsx)("b",{children:r})]})})},n)}))]})}},4101:function(e,n,t){t.d(n,{Z:function(){return f}});var r,i=t(9439),a=t(2791),o=t(6355),c=t(168),l=t(5867).ZP.div(r||(r=(0,c.Z)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: radial-gradient(circle, #ff98a0, #fa47c4);\n  color: #fff;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 20px;\n  transition: background 0.5s ease, transform 0.5s ease;\n\n  &:hover {\n    background: radial-gradient(circle, #ffa9a1, #af0292);\n    transform: scale(1.1);\n  }\n\n  &:active {\n    animation: clickEffect 0.2s linear;\n  }\n\n  @keyframes clickEffect {\n    0% {\n      transform: scale(1);\n      background: radial-gradient(circle, #ffa9a1, #ff98a0);\n    }\n    50% {\n      transform: scale(0.95);\n      background: radial-gradient(circle, #ff98a0, #fa47c4);\n    }\n    100% {\n      transform: scale(1);\n      background: radial-gradient(circle, #ffa9a1, #ff98a0);\n    }\n  }\n"]))),s=t(184),f=function(){var e=(0,a.useState)(!1),n=(0,i.Z)(e,2),t=n[0],r=n[1];(0,a.useEffect)((function(){var e=function(){window.pageYOffset>300?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);return(0,s.jsx)("div",{children:t&&(0,s.jsx)(l,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,s.jsx)(o.ZTc,{})})})}},1495:function(e,n,t){var r=t(1413),i=t(6459),a=(t(2791),t(8175)),o=t(184);n.Z=function(e){var n=Object.assign({},((0,i.Z)(e),e));return(0,o.jsx)(a.ZP,(0,r.Z)((0,r.Z)({speed:2,width:1400,height:2e3,viewBox:"0 0 1400 2000",backgroundColor:"#d9d9d9",foregroundColor:"#fbfbfb"},n),{},{children:Array.from({length:20},(function(e,n){var t=n%5*265+20,r=375*Math.floor(n/5)+20;return(0,o.jsx)("rect",{x:t,y:r,rx:0,ry:0,width:250,height:360},n)}))}))}},5670:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r,i=t(9439),a=t(2791),o=t(4146),c=t(4850),l=t(1495),s=t(4101),f=t(168),d=t(5867).ZP.h1(r||(r=(0,f.Z)(["\n  text-align: center;\n  -webkit-text-stroke: 2px #fa47c4;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  font-size: 35px;\n  letter-spacing: 2px;\n  font-weight: 900;\n  color: #130ff3;\n  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.55);\n  background-color: #fc73da;\n\n  @-webkit-keyframes pulsate {\n    50% {\n      color: #fff;\n      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;\n    }\n  }\n  @keyframes pulsate {\n    50% {\n      color: #fff;\n      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;\n    }\n  }\n  color: rgb(10, 10, 10);\n  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);\n  background: radial-gradient(white, #ffa9a1);\n  -webkit-animation: pulsate 2.2s linear infinite;\n  animation: pulsate 2.2s linear infinite;\n"]))),p=t(184),u=function(){var e=(0,a.useState)([]),n=(0,i.Z)(e,2),t=n[0],r=n[1],f=(0,a.useState)(!1),u=(0,i.Z)(f,2),x=u[0],g=u[1];return(0,a.useEffect)((function(){g(!0),(0,c.Df)().then((function(e){r(e),g(!1)})).catch(console.log)}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.Z,{}),(0,p.jsx)(d,{children:"Trending today"}),x?(0,p.jsx)(l.Z,{}):(0,p.jsx)(o.Z,{movies:t})]})}},8175:function(e,n,t){var r=t(2791),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},i.apply(this,arguments)};var a=function(e){var n=e.animate,t=void 0===n||n,a=e.animateBegin,o=e.backgroundColor,c=void 0===o?"#f5f6f7":o,l=e.backgroundOpacity,s=void 0===l?1:l,f=e.baseUrl,d=void 0===f?"":f,p=e.children,u=e.foregroundColor,x=void 0===u?"#eee":u,g=e.foregroundOpacity,m=void 0===g?1:g,h=e.gradientRatio,b=void 0===h?2:h,v=e.gradientDirection,y=void 0===v?"left-right":v,w=e.uniqueKey,k=e.interval,E=void 0===k?.25:k,j=e.rtl,Z=void 0!==j&&j,O=e.speed,C=void 0===O?1.2:O,P=e.style,T=void 0===P?{}:P,_=e.title,z=void 0===_?"Loading...":_,S=e.beforeMask,B=void 0===S?null:S,M=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),N=w||Math.random().toString(36).substring(6),D=N+"-diff",L=N+"-animated-diff",U=N+"-aria",q=Z?{transform:"scaleX(-1)"}:null,K="0; "+E+"; 1",R=C+"s",A="top-bottom"===y?"rotate(90)":void 0;return(0,r.createElement)("svg",i({"aria-labelledby":U,role:"img",style:i(i({},T),q)},M),z?(0,r.createElement)("title",{id:U},z):null,B&&(0,r.isValidElement)(B)?B:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+d+"#"+D+")",style:{fill:"url("+d+"#"+L+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:D},p),(0,r.createElement)("linearGradient",{id:L,gradientTransform:A},(0,r.createElement)("stop",{offset:"0%",stopColor:c,stopOpacity:s},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-b+"; "+-b+"; 1",keyTimes:K,dur:R,repeatCount:"indefinite",begin:a})),(0,r.createElement)("stop",{offset:"50%",stopColor:x,stopOpacity:m},t&&(0,r.createElement)("animate",{attributeName:"offset",values:-b/2+"; "+-b/2+"; "+(1+b/2),keyTimes:K,dur:R,repeatCount:"indefinite",begin:a})),(0,r.createElement)("stop",{offset:"100%",stopColor:c,stopOpacity:s},t&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+b),keyTimes:K,dur:R,repeatCount:"indefinite",begin:a})))))},o=function(e){return e.children?(0,r.createElement)(a,i({},e)):(0,r.createElement)(c,i({},e))},c=function(e){return(0,r.createElement)(o,i({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};n.ZP=o},6459:function(e,n,t){function r(e){if(null==e)throw new TypeError("Cannot destructure "+e)}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=670.9eb3a265.chunk.js.map