import{s as _,e as u,i as d,d as m,r as p,u as g,v as w,w as b}from"./scheduler.4cfaec68.js";import{S as h,i as k,a as f,g as T,t as n,c as S}from"./index.f2283658.js";import{g as y}from"./navigation.f864c72c.js";function c(a){let l;const i=a[3].default,e=p(i,a,a[2],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,o){e&&e.m(t,o),l=!0},p(t,o){e&&e.p&&(!l||o&4)&&g(e,i,t,t[2],l?b(i,t[2],o,null):w(t[2]),null)},i(t){l||(f(e,t),l=!0)},o(t){n(e,t),l=!1},d(t){e&&e.d(t)}}}function R(a){let l,i,e=a[0]&&c(a);return{c(){e&&e.c(),l=u()},l(t){e&&e.l(t),l=u()},m(t,o){e&&e.m(t,o),d(t,l,o),i=!0},p(t,[o]){t[0]?e?(e.p(t,o),o&1&&f(e,1)):(e=c(t),e.c(),f(e,1),e.m(l.parentNode,l)):e&&(T(),n(e,1,1,()=>{e=null}),S())},i(t){i||(f(e),i=!0)},o(t){n(e),i=!1},d(t){t&&m(l),e&&e.d(t)}}}function q(a,l,i){let{$$slots:e={},$$scope:t}=l,{allow:o=!1}=l,{redirectTo:s=void 0}=l;return a.$$set=r=>{"allow"in r&&i(0,o=r.allow),"redirectTo"in r&&i(1,s=r.redirectTo),"$$scope"in r&&i(2,t=r.$$scope)},a.$$.update=()=>{a.$$.dirty&3&&!o&&s&&y(s,{replaceState:!0})},[o,s,t,e]}class N extends h{constructor(l){super(),k(this,l,q,R,_,{allow:0,redirectTo:1})}}export{N as R};
