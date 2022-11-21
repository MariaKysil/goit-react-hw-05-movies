"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{5886:function(n,e,t){t.d(e,{o:function(){return c}});var r=t(6471),i=t(184),c=function(n){var e=n.message;return(0,i.jsxs)("div",{role:"alert",children:[(0,i.jsx)("img",{src:r,alt:"sad cat",width:"240"}),(0,i.jsx)("h2",{children:"Sorry, something went wrong"}),(0,i.jsx)("p",{children:e})]})}},2881:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,i,c,s,o=t(885),a=t(7689),u=t(2791),l=t(4390),f=t(8137),p=t(168),d=t(6444),h=d.ZP.div(r||(r=(0,p.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  display: flex;\n  align-items: center;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]})),v=d.ZP.div(i||(i=(0,p.Z)(["\n  margin-left: ","px;\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n\n  & span {\n    font-weight: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontWeights.bold})),x=t(184),m=function(n){var e=n.poster,t=n.title,r=n.vote,i=n.overview,c=n.genres;return(0,x.jsxs)(h,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):f,alt:t,width:"250"})}),(0,x.jsxs)(v,{children:[(0,x.jsx)("h2",{children:t}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:"User Score:"})," ",r]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:"Overview:"})," ",i]}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("span",{children:"Genres:"}),c&&c.map((function(n){var e=n.id,t=n.name;return(0,x.jsx)("li",{children:t},e)}))]})]})]})},j=t(5886),g=t(3521),w=t(6731),b=(0,d.ZP)(w.OL)(c||(c=(0,p.Z)(["\n  color: ",";\n  font-size: ",";\n\n  &.active {\n    color: ",";\n    text-decoration: underline;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.secondary})),Z=d.ZP.ul(s||(s=(0,p.Z)(["\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[5]})),y=function(){var n,e,t,r,i=(0,a.TH)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h2",{children:"Additional information:"}),(0,x.jsxs)(Z,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(u.Suspense,{fallback:(0,x.jsx)(g.a,{}),children:(0,x.jsx)(b,{to:"cast",state:null!==(n={from:null===(e=i.state)||void 0===e?void 0:e.from})&&void 0!==n?n:"/",children:"Cast"})})}),(0,x.jsx)("li",{children:(0,x.jsx)(u.Suspense,{fallback:(0,x.jsx)(g.a,{}),children:(0,x.jsx)(b,{to:"reviews",state:null!==(t={from:null===(r=i.state)||void 0===r?void 0:r.from})&&void 0!==t?t:"/",children:"Reviews"})})})]})]})},k=t(6454),P=function(){var n,e,t=(0,u.useState)([]),r=(0,o.Z)(t,2),i=r[0],c=r[1],s=(0,u.useState)(null),f=(0,o.Z)(s,2),p=f[0],d=f[1],h=(0,u.useState)(!1),v=(0,o.Z)(h,2),w=v[0],b=v[1],Z=(0,a.UO)().movieId,P=(0,a.TH)();(0,u.useEffect)((function(){b(!0),(0,l.TP)(Z).then(c).catch((function(n){return d(n)})).finally(b(!1))}),[Z]);var _=i.poster_path,S=i.title,z=i.vote_average,F=i.overview,O=i.genres,T=null!==(n=null===(e=P.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,x.jsx)(x.Fragment,{children:p?(0,x.jsx)(j.o,{message:null===p||void 0===p?void 0:p.message}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(k.r,{to:T,children:"\u2190 Go back"}),w?(0,x.jsx)(g.a,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("ul",{children:(0,x.jsx)("li",{children:(0,x.jsx)(m,{poster:_,title:S,vote:z,overview:F,genres:O})})}),(0,x.jsx)(y,{}),(0,x.jsx)(u.Suspense,{fallback:(0,x.jsx)(g.a,{}),children:(0,x.jsx)(a.j3,{})})]})]})})}},6454:function(n,e,t){t.d(e,{r:function(){return s}});var r,i=t(168),c=t(6731),s=(0,t(6444).ZP)(c.OL)(r||(r=(0,i.Z)(["\n  font-size: ",";\n  color: ",";\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secondary}))},4390:function(n,e,t){t.d(e,{TP:function(){return p},qF:function(){return l},tx:function(){return x},wr:function(){return a},zv:function(){return h}});var r=t(5861),i=t(7757),c=t.n(i),s=t(1044),o="f295e5cfae9c135f6b0e3c499a4f507f";function a(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("/trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("/search/movie?api_key=".concat(o,"&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("/movie/".concat(e,"?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.ZP.defaults.baseURL="https://api.themoviedb.org/3/"},6471:function(n,e,t){n.exports=t.p+"static/media/error.7d86105a62bf3b28ec78.jpg"},8137:function(n,e,t){n.exports=t.p+"static/media/not-found.5935b90a9c1dfbd15126.png"}}]);
//# sourceMappingURL=881.c62a5ca3.chunk.js.map