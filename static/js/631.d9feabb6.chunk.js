"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[631],{631:function(n,e,i){i.r(e),i.d(e,{default:function(){return D}});var t,r,o,s,a,c,l,d,p,x,h,f,u,g=i(861),j=i(439),m=i(757),v=i.n(m),Z=i(689),b=i(791),w=i(243),y=i(728),k=i(881),P=i(168),z=i(884),I=i(87),_=z.ZP.div(t||(t=(0,P.Z)(["\n  display: flex;\n"]))),J=z.ZP.div(r||(r=(0,P.Z)(["\n  flex: 1;\n  padding: 20px;\n"]))),N=z.ZP.h1(o||(o=(0,P.Z)(["\n  font-size: 24px;\n  margin: 0;\n  color: #333; \n  font-weight: bold;\n"]))),O=z.ZP.span(s||(s=(0,P.Z)(["\n  font-size: 18px;\n  font-weight: bold; \n  display: block;\n  margin-bottom: 20px;\n"]))),C=z.ZP.p(a||(a=(0,P.Z)(["\n  font-size: 18px;\n \n"]))),T=z.ZP.p(c||(c=(0,P.Z)(["\n  font-size: 18px;\n  color: #777; \n"]))),G=z.ZP.p(l||(l=(0,P.Z)(["\n  font-size: 18px;\n"]))),U=z.ZP.ul(d||(d=(0,P.Z)(["\n  list-style-type: none;\n  font-size: 18px;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  gap: 10px;\n\n\n  li {\n    margin-bottom: 5px;\n \n  }\n"]))),Y=(0,z.ZP)(I.rU)(p||(p=(0,P.Z)(["\n  font-size: 18px;\n  margin-right: 20px;\n  color: #ff4500;\n  font-weight: bold; \n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n"]))),M=z.ZP.img(x||(x=(0,P.Z)(["\nwidth: 300px;\nborder-radius: 10px;\n"]))),Q=z.ZP.div(h||(h=(0,P.Z)(["\ndisplay: flex; \njustify-content: space-around;\npadding-bottom: auto;\n"]))),B=z.ZP.ul(f||(f=(0,P.Z)(["\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n"]))),V=z.ZP.li(u||(u=(0,P.Z)(["\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  margin: 10px;\n  width: 250px;\n  padding: 10px;\n  text-align: center;\n\n  img {\n    width: 100px;\n    height: 100px;\n    object-fit: contain;\n    margin: 10px auto;\n    display: block;\n  }\n\n  div {\n    font-weight: bold;\n    margin-top: 10px;\n  }\n"]))),W=i(184),D=function(){var n,e,i=(0,Z.UO)().movieId,t=(0,Z.TH)(),r=(0,b.useState)(null),o=(0,j.Z)(r,2),s=o[0],a=o[1],c=(0,b.useRef)(null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,b.useEffect)((function(){var n=function(){var n=(0,g.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.Z.get("\n       https://api.themoviedb.org/3/movie/".concat(i),{headers:{Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmQwOGNhMTljY2JmM2U1MjgwN2ViZmVjZDEwOGUzNiIsInN1YiI6IjY1MTJiYjFkYTkxMTdmNzY1ZDg4OTgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wk5fdIqZPgG2xDOolV97Xo9axot0ymipWFnQCS9z3XQ"}});case 3:e=n.sent,a(e.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[i]),s?(0,W.jsxs)("div",{children:[(0,W.jsxs)(_,{children:[(0,W.jsxs)(J,{children:[(0,W.jsx)(N,{children:s.title}),(0,W.jsxs)(C,{children:[" ",(0,W.jsx)(O,{children:"User score: "}),s.popularity]}),(0,W.jsxs)(T,{children:["Release date: ",s.release_date]}),(0,W.jsxs)(G,{children:[(0,W.jsx)(O,{children:"Overview:"})," ",s.overview]})]}),(0,W.jsx)("div",{children:(0,W.jsx)(M,{src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),alt:s.title})})]}),(0,W.jsxs)(U,{children:[(0,W.jsx)(O,{children:"Genres: "}),s.genres.map((function(n){return(0,W.jsx)("li",{children:n.name},n.id)}))]}),(0,W.jsxs)("div",{children:[(0,W.jsx)(O,{children:"Production companies:"}),(0,W.jsx)(B,{children:s.production_companies.map((function(n){return(0,W.jsxs)(V,{children:[(0,W.jsx)("div",{children:n.logo_path?(0,W.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(n.logo_path),alt:n.name}):(0,W.jsx)(y.To4,{style:{width:"100px",height:"100px"}})}),(0,W.jsx)("div",{children:n.name})]},n.id)}))})]}),(0,W.jsx)("div",{children:(0,W.jsxs)(Q,{children:[(0,W.jsx)(Y,{to:"cast",children:"Cast"}),(0,W.jsx)(Y,{to:"reviews",children:"Reviews"}),(0,W.jsx)(Y,{to:c.current,children:"Back"})]})}),(0,W.jsx)(Z.j3,{})]}):(0,W.jsx)("div",{children:(0,W.jsx)(k.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}}}]);
//# sourceMappingURL=631.d9feabb6.chunk.js.map