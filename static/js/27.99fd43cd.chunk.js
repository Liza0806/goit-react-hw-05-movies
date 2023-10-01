"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[27],{7027:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var i,r,o,s,a,c,d,l,p,x,h,u,f,m=t(5861),v=t(9439),g=t(7757),j=t.n(g),Z=t(7689),w=t(2791),b=t(9362),y=t(8183),_=t(168),P=t(7884),k=t(1087),z=(0,P.ZP)(k.rU)(i||(i=(0,_.Z)(["\n  font-size: 18px;\n  margin-right: 20px;\n  color: #ff4500;\n  font-weight: bold; \n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n"]))),D=P.ZP.div(r||(r=(0,_.Z)(["\ndisplay: flex; \njustify-content: space-around;\npadding-bottom: auto;\n"]))),C=t(458),R=t(3728),T=P.ZP.div(o||(o=(0,_.Z)(["\n  display: flex;\n"]))),U=P.ZP.div(s||(s=(0,_.Z)(["\n  flex: 1;\n  padding: 20px;\n"]))),O=P.ZP.h1(a||(a=(0,_.Z)(["\n  font-size: 24px;\n  margin: 0;\n  color: #333; \n  font-weight: bold;\n"]))),B=P.ZP.span(c||(c=(0,_.Z)(["\n  font-size: 18px;\n  font-weight: bold; \n  display: block;\n  margin-bottom: 20px;\n"]))),E=P.ZP.p(d||(d=(0,_.Z)(["\n  font-size: 18px;\n \n"]))),G=P.ZP.p(l||(l=(0,_.Z)(["\n  font-size: 18px;\n  color: #777; \n"]))),H=P.ZP.p(p||(p=(0,_.Z)(["\n  font-size: 18px;\n"]))),I=P.ZP.ul(x||(x=(0,_.Z)(["\n  list-style-type: none;\n  font-size: 18px;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  gap: 10px;\n\n\n  li {\n    margin-bottom: 5px;\n \n  }\n"]))),S=P.ZP.img(h||(h=(0,_.Z)(["\nwidth: 300px;\nborder-radius: 10px;\n"]))),q=P.ZP.ul(u||(u=(0,_.Z)(["\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n"]))),A=P.ZP.li(f||(f=(0,_.Z)(["\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin: 10px;\n  width: 250px;\n  padding: 10px;\n  text-align: center;\n\n  img {\n    width: 100px;\n    height: 100px;\n    object-fit: contain;\n    margin: 10px auto;\n    display: block;\n  }\n\n  div {\n    font-weight: bold;\n    margin-top: 10px;\n  }\n"]))),F=t(184),J=function(n){var e=n.movieData;return(0,F.jsxs)(T,{children:[(0,F.jsxs)(U,{children:[(0,F.jsx)(O,{children:e.title}),(0,F.jsxs)(E,{children:[" ",(0,F.jsx)(B,{children:"User score: "}),e.popularity]}),(0,F.jsxs)(G,{children:["Release date: ",e.release_date]}),(0,F.jsxs)(H,{children:[(0,F.jsx)(B,{children:"Overview:"})," ",e.overview]})]}),(0,F.jsx)("div",{children:e.poster_path?(0,F.jsx)(S,{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title}):(0,F.jsx)(C.ezw,{style:{opacity:"0.5",width:"100px",height:"150px",margin:"10px auto"}})})]})},K=function(n){var e=n.movieData;return(0,F.jsxs)(I,{children:[(0,F.jsx)(B,{children:"Genres: "}),e.genres.map((function(n){return(0,F.jsx)("li",{children:n.name},n.id)}))]})},L=function(n){var e=n.movieData;return(0,F.jsxs)("div",{children:[(0,F.jsx)(B,{children:"Production companies:"}),(0,F.jsx)(q,{children:e.production_companies.map((function(n){return(0,F.jsxs)(A,{children:[(0,F.jsx)("div",{children:n.logo_path?(0,F.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(n.logo_path),alt:n.name}):(0,F.jsx)(R.To4,{style:{width:"100px",height:"100px"}})}),(0,F.jsx)("div",{children:n.name})]},n.id)}))})]})},M=function(){var n,e,t=(0,Z.UO)().movieId,i=(0,Z.TH)(),r=(0,w.useState)(null),o=(0,v.Z)(r,2),s=o[0],a=o[1],c=(0,w.useRef)(null!==(n=null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,w.useEffect)((function(){var n="movie/".concat(t),e=function(){var e=(0,m.Z)(j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.r)(n);case 2:(t=e.sent)&&a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),s?(0,F.jsxs)("div",{children:[(0,F.jsx)(J,{movieData:s}),(0,F.jsx)(K,{movieData:s}),s.production_companies.length>0?(0,F.jsx)(L,{movieData:s}):null,(0,F.jsx)("div",{children:(0,F.jsxs)(D,{children:[(0,F.jsx)(z,{to:"cast",children:"Cast"}),(0,F.jsx)(z,{to:"reviews",children:"Reviews"}),(0,F.jsx)(z,{to:c.current,children:"Back"})]})}),(0,F.jsx)(Z.j3,{})]}):(0,F.jsx)(y.T,{})}}}]);
//# sourceMappingURL=27.99fd43cd.chunk.js.map