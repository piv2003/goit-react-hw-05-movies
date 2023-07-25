"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r,i=t(9439),a=t(2791),c=t(7689),o=t(647),s=t(168),f=t(5867).ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  justify-content: center;\n  padding: 15px;\n\n  & li {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 5px;\n    width: 200px;\n    border: solid 1px #5c048f;\n    border-radius: 35px;\n    box-shadow: 5px 5px 5px #0000004d, -12px 5px 20px -23px #000c,\n      23px 0 20px -23px #000c, inset 0 0 40px #0000001a;\n\n    & img {\n      margin-right: auto;\n      margin-left: auto;\n      margin-top: 15%;\n      border-radius: 15%;\n      box-shadow: 0 1px 4px #0000004d, -23px 0 20px -23px #000c,\n        23px 0 20px -23px #000c, inset 0 0 40px #0000001a;\n    }\n    & span {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100px;\n      height: 150px;\n      border: solid 1px black;\n      background-color: grey;\n    }\n    & p {\n      padding: 5px;\n      text-align: center;\n      font-size: 16px;\n      height: 50px;\n    }\n\n    & b {\n      text-align: center;\n      font-size: 16px;\n    }\n  }\n"]))),d=t(4101),p=t(184),l=function(){var n=(0,c.UO)().movieId,e=(0,a.useState)([]),t=(0,i.Z)(e,2),r=t[0],s=t[1];return(0,a.useEffect)((function(){(0,o.TP)(n,"credits").then((function(n){return s(n.cast)})).catch(console.log)}),[n]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(f,{children:[(0,p.jsx)(d.Z,{}),r.map((function(n){return(0,p.jsxs)("li",{children:[n.profile_path?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.profile_path),alt:n.name,width:"100"}):(0,p.jsx)("span",{children:"No photo"}),(0,p.jsx)("b",{children:n.name}),(0,p.jsx)("p",{children:n.character})]},n.cast_id)}))]})})}},4101:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i=t(9439),a=t(2791),c=t(6355),o=t(168),s=t(5867).ZP.div(r||(r=(0,o.Z)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: radial-gradient(circle, #ff98a0, #fa47c4);\n  color: #fff;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 20px;\n  transition: background 0.5s ease, transform 0.5s ease;\n\n  &:hover {\n    background: radial-gradient(circle, #ffa9a1, #af0292);\n    transform: scale(1.1);\n  }\n\n  &:active {\n    animation: clickEffect 0.2s linear;\n  }\n\n  @keyframes clickEffect {\n    0% {\n      transform: scale(1);\n      background: radial-gradient(circle, #ffa9a1, #ff98a0);\n    }\n    50% {\n      transform: scale(0.95);\n      background: radial-gradient(circle, #ff98a0, #fa47c4);\n    }\n    100% {\n      transform: scale(1);\n      background: radial-gradient(circle, #ffa9a1, #ff98a0);\n    }\n  }\n"]))),f=t(184),d=function(){var n=(0,a.useState)(!1),e=(0,i.Z)(n,2),t=e[0],r=e[1];(0,a.useEffect)((function(){var n=function(){window.pageYOffset>300?r(!0):r(!1)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]);return(0,f.jsx)("div",{children:t&&(0,f.jsx)(s,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,f.jsx)(c.ZTc,{})})})}}}]);
//# sourceMappingURL=736.25ffe42a.chunk.js.map