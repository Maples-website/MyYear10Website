"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["ext/zig"],{7018:(e,t,n)=>{n.r(t);var r=n(2063),i=n.n(r);i().defineMode("zig",(function(){var e={const:!0,var:!0,extern:!0,packed:!0,export:!0,pub:!0,noalias:!0,inline:!0,comptime:!0,test:!0,fn:!0,usingnamespace:!0,struct:!0,enum:!0,union:!0,if:!0,else:!0,switch:!0,while:!0,for:!0,break:!0,continue:!0,return:!0,defer:!0,errdefer:!0,as:!0,null:!0},t=/[+\-*&%=<>!?|]/;function n(r,i){var u,a=r.next();if('"'==a)return i.tokenize=(u=a,function(e,t){for(var r,i=!1,a=!1;null!=(r=e.next());){if(r==u&&!i){a=!0;break}i=!i&&"\\"==r}return!a&&i||(t.tokenize=n),"string"}),i.tokenize(r,i);if(/[\d]/.test(a))return r.eatWhile(/[\w\.]/),"number";if(/[\w_]/.test(a)){r.eatWhile(/[\w_]/);var o=r.current();return e.propertyIsEnumerable(o)?"keyword":"variable"}return t.test(a)?(r.eatWhile(t),"operator"):"/"==a&&r.eat("/")?(r.skipToEnd(),"comment"):null}return{startState:function(){return{tokenize:n}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}})),i().defineMIME("text/x-zig","zig")}}]);
//# sourceMappingURL=zig.js.map