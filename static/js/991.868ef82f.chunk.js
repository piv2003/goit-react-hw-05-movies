"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[991],{4146:function(n,e,r){r.d(e,{Z:function(){return f}});var t,i,a=r(1087),o=r(7689),c=r(168),s=r(5867),d=s.ZP.ul(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  padding: 0 0 20px 0;\n  margin-top: 10px;\n"]))),p=s.ZP.li(i||(i=(0,c.Z)(["\n  overflow: hidden;\n  border: solid 1px #ac04ac;\n  border-radius: 25px;\n  box-shadow: 7px 7px 7px #0000004d, -23px 0 20px -23px #000c,\n    23px 0 20px -23px #000c, inset 0 0 40px #0000001a;\n  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    box-shadow: 0 1px 4px #0000004d, -23px 0 20px -23px #000c,\n      23px 0 20px -23px #000c, inset 0 0 40px #0000001a;\n  }\n\n  & a {\n    color: #000000;\n    transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    & div {\n      text-align: center;\n      width: 250px;\n      height: 460px;\n\n      & span {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 376px;\n        border-bottom: solid 1px black;\n        font-size: 30px;\n      }\n      & img {\n        width: 250px;\n        margin-bottom: 5px;\n        border-bottom: solid 1px black;\n      }\n    }\n\n    & b {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 10px;\n      font-size: 16px;\n    }\n  }\n\n  &:hover > a {\n    color: red;\n  }\n"]))),x=r(4101),l=r(184),f=function(n){var e=n.movies,r=(0,o.TH)();return(0,l.jsxs)(d,{children:[(0,l.jsx)(x.Z,{}),e.map((function(n){var e=n.id,t=n.title,i=n.poster_path;return(0,l.jsx)(p,{children:(0,l.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:r},children:(0,l.jsxs)("div",{children:[i?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(i),alt:"Poster ".concat(t),width:"250px",height:"375px"}):(0,l.jsx)("span",{children:"No poster"}),(0,l.jsx)("b",{children:t})]})})},e)}))]})}},4101:function(n,e,r){r.d(e,{Z:function(){return p}});var t,i=r(9439),a=r(2791),o=r(6355),c=r(168),s=r(5867).ZP.div(t||(t=(0,c.Z)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: radial-gradient(circle, #ff98a0, #fa47c4);\n  color: #fff;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 20px;\n  transition: background 0.5s ease, transform 0.5s ease;\n\n  &:hover {\n    background: radial-gradient(circle, #ffa9a1, #af0292);\n    transform: scale(1.1);\n  }\n\n  &:active {\n    animation: clickEffect 0.2s linear;\n  }\n\n  @keyframes clickEffect {\n    0% {\n      transform: scale(1);\n      background: radial-gradient(circle, #ffa9a1, #ff98a0);\n    }\n    50% {\n      transform: scale(0.95);\n      background: radial-gradient(circle, #ff98a0, #fa47c4);\n    }\n    100% {\n      transform: scale(1);\n      background: radial-gradient(circle, #ffa9a1, #ff98a0);\n    }\n  }\n"]))),d=r(184),p=function(){var n=(0,a.useState)(!1),e=(0,i.Z)(n,2),r=e[0],t=e[1];(0,a.useEffect)((function(){var n=function(){window.pageYOffset>300?t(!0):t(!1)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]);return(0,d.jsx)("div",{children:r&&(0,d.jsx)(s,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,d.jsx)(o.ZTc,{})})})}},1495:function(n,e,r){var t=r(1413),i=r(6459),a=(r(2791),r(8175)),o=r(184);e.Z=function(n){var e=Object.assign({},((0,i.Z)(n),n));return(0,o.jsx)(a.ZP,(0,t.Z)((0,t.Z)({speed:2,width:1400,height:2e3,viewBox:"0 0 1400 2000",backgroundColor:"#d9d9d9",foregroundColor:"#fbfbfb"},e),{},{children:Array.from({length:20},(function(n,e){var r=e%5*265+20,t=375*Math.floor(e/5)+20;return(0,o.jsx)("rect",{x:r,y:t,rx:0,ry:0,width:250,height:360},e)}))}))}},2991:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,i,a,o,c=r(4165),s=r(5861),d=r(9439),p=r(2791),x=r(1087),l=r(8174),f=r(4850),u=r(3853),h=r(4146),g=r(5763),b=r(168),m=r(5867),v=m.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 12px 24px;\n  background: radial-gradient(white, #7774d1);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),w=m.ZP.form(i||(i=(0,b.Z)(["\n  display: flex;\n  width: 100%;\n  max-width: 555px;\n  background-color: #fff;\n  border-radius: 3px;\n"]))),Z=m.ZP.button(a||(a=(0,b.Z)(["\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.4;\n  cursor: pointer;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    opacity: 1;\n  }\n\n  & svg {\n    width: 24px;\n    height: 24px;\n  }\n"]))),j=m.ZP.input(o||(o=(0,b.Z)(["\n  width: 100%;\n  font-size: 20px;\n  border: none;\n  border-radius: 20px;\n  outline: none;\n  padding-left: 14px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font-size: 18px;\n  }\n"]))),y=r(184),k=function(n){var e=n.onSubmit;return(0,y.jsx)(v,{children:(0,y.jsxs)(w,{onSubmit:e,children:[(0,y.jsx)(Z,{children:(0,y.jsx)(g.a4h,{})}),(0,y.jsx)(j,{type:"text",name:"name",autoComplete:"off",autoFocus:!0,placeholder:"Search movies, please enter your request"})]})})},P=r(1495),z=function(){var n,e=(0,p.useState)([]),r=(0,d.Z)(e,2),t=r[0],i=r[1],a=(0,x.lr)(),o=(0,d.Z)(a,2),g=o[0],b=o[1],m=(0,p.useState)(!1),v=(0,d.Z)(m,2),w=v[0],Z=v[1],j=(0,p.useState)(!1),z=(0,d.Z)(j,2),S=z[0],_=z[1],C=null!==(n=g.get("query"))&&void 0!==n?n:"",E=(0,p.useState)(!1),q=(0,d.Z)(E,2),F=q[0],T=q[1];(0,p.useEffect)((function(){function n(){return(n=(0,s.Z)((0,c.Z)().mark((function n(){var e;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(_(!1),!C){n.next=18;break}return T(!0),Z(!0),n.prev=4,n.next=7,(0,f.gH)(C);case 7:e=n.sent,i(e),_(0===e.length),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),console.log(n.t0);case 15:return n.prev=15,T(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[4,12,15,18]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[C]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{onSubmit:function(n){n.preventDefault();var e=n.target.name.value;""!==e?(b({query:e}),n.target.name.value=""):l.Am.error("Please enter your request")}}),w&&(0,y.jsx)(y.Fragment,{children:S?(0,y.jsx)(u.P,{children:"No results found for your search query"}):(0,y.jsx)(y.Fragment,{children:F?(0,y.jsx)(P.Z,{}):(0,y.jsx)(h.Z,{movies:t})})})]})}}}]);
//# sourceMappingURL=991.868ef82f.chunk.js.map