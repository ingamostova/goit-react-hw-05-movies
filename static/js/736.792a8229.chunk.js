"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return O}});var r,a,c,i,s,o,u,p,f=e(5861),l=e(9439),h=e(4687),x=e.n(h),d=e(4390),m=e(2791),g=e(7689),v=e(168),Z=e(7402),w=Z.Z.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n  align-items: baseline;\n  margin-top: 16px;\n"]))),y=Z.Z.img(a||(a=(0,v.Z)(["\n  width: 185px;\n  border-radius: 5px;\n  max-height: 277px;\n  object-fit: cover;\n"]))),k=Z.Z.p(c||(c=(0,v.Z)(["\n  text-align: center;\n  margin-top: 16px;\n  font-family: inherit;\n  font-size: 20px;\n  font-weight: 700;\n"]))),b=Z.Z.li(i||(i=(0,v.Z)(["\n  max-width: 185px;\n"]))),j=Z.Z.p(s||(s=(0,v.Z)(["\n  margin-top: 8px;\n  display: flex;\n  gap: 5px;\n"]))),_=Z.Z.p(o||(o=(0,v.Z)(["\n  color: black;\n  font-size: 20px;\n  margin-top: 16px;\n  text-align: center;\n"]))),z=Z.Z.p(u||(u=(0,v.Z)(["\n  color: red;\n  font-size: 20px;\n  margin-top: 16px;\n"]))),C=Z.Z.div(p||(p=(0,v.Z)(["\n  text-align: center;\n  margin-top: 16px;\n  margin-bottom: 16px;\n"]))),S=e(7692),F=e(9126),I=e(6286),J=e(184),O=function(){var n=(0,m.useState)([]),t=(0,l.Z)(n,2),e=t[0],r=t[1],a=(0,m.useState)(null),c=(0,l.Z)(a,2),i=c[0],s=c[1],o=(0,m.useState)(!1),u=(0,l.Z)(o,2),p=u[0],h=u[1],v=(0,g.UO)().movieId;return(0,m.useEffect)((function(){function n(){return(n=(0,f.Z)(x().mark((function n(t){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.IQ)(t);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),s(n.t0.message);case 10:return n.prev=10,h(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))).apply(this,arguments)}h(!0),function(t){n.apply(this,arguments)}(v)}),[v]),(0,J.jsxs)(J.Fragment,{children:[e.length>0&&!p&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(k,{children:"ACTORS"}),(0,J.jsx)(w,{children:e.map((function(n){var t=n.cast_id,e=n.profile_path,r=n.name,a=n.character;return(0,J.jsxs)(b,{children:[(0,J.jsx)(y,{src:e?"https://image.tmdb.org/t/p/w185/".concat(e):"https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805__340.png",alt:r}),(0,J.jsxs)(j,{children:[(0,J.jsx)(F._Tb,{}),r]}),(0,J.jsxs)(j,{children:[(0,J.jsx)(S.FXJ,{}),a]})]},t)}))})]}),p&&(0,J.jsx)(C,{children:(0,J.jsx)(I.s5,{strokeColor:"grey",strokeWidth:"3",width:"32"})}),!e.length&&!p&&!i&&(0,J.jsx)(_,{children:"No information about actors"}),i&&(0,J.jsx)(z,{children:i})]})}},4390:function(n,t,e){e.d(t,{IQ:function(){return d},Jh:function(){return g},Pg:function(){return h},wr:function(){return u},zi:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1912),s="https://api.themoviedb.org/3/",o="917b4db2abe704f469567a6fce387097";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"trending/movie/week?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=736.792a8229.chunk.js.map