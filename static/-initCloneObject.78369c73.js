import{aU as p,bu as O,aV as y,bP as x}from"./entry.c07dde69.js";import{q as v,l as P,r as m,t as w,U as u}from"./el-input.7a05f511.js";var i=Object.create,b=function(){function e(){}return function(n){if(!p(n))return{};if(i)return i(n);e.prototype=n;var r=new e;return e.prototype=void 0,r}}();const U=b;function M(e,n){var r=-1,t=e.length;for(n||(n=Array(t));++r<t;)n[r]=e[r];return n}function N(e,n,r,t){var g=!r;r||(r={});for(var a=-1,h=n.length;++a<h;){var o=n[a],s=t?t(r[o],e[o],o,r,e):void 0;s===void 0&&(s=e[o]),g?O(r,o,s):y(r,o,s)}return r}function A(e){var n=[];if(e!=null)for(var r in Object(e))n.push(r);return n}var C=Object.prototype,I=C.hasOwnProperty;function K(e){if(!p(e))return A(e);var n=v(e),r=[];for(var t in e)t=="constructor"&&(n||!I.call(e,t))||r.push(t);return r}function D(e){return P(e)?m(e,!0):K(e)}var L=w(Object.getPrototypeOf,Object);const T=L;var d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,B=f&&f.exports===d,l=B?x.Buffer:void 0,c=l?l.allocUnsafe:void 0;function F(e,n){if(n)return e.slice();var r=e.length,t=c?c(r):new e.constructor(r);return e.copy(t),t}function E(e){var n=new e.constructor(e.byteLength);return new u(n).set(new u(e)),n}function G(e,n){var r=n?E(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function H(e){return typeof e.constructor=="function"&&!v(e)?U(T(e)):{}}export{E as a,G as b,N as c,M as d,F as e,T as g,H as i,D as k};
