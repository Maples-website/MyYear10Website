"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["ext/luau"],{2201:(e,t,r)=>{r.r(t);var n=r(2063),a=r.n(n);a().defineMode("luau",(function(){const e=/\b(function|export|type|end|if|then|else|elseif|while|do|for|in|repeat|until|return|local|not|and|or)\b/,t=/\b(print|math|table|string|coroutine|Vector2|Vector3|UDim|UDim2|os|io|debug|package|require|_G|shared|game|pairs|ipairs|setmetatable|getmetatable|newproxy)\b/;function r(e,t){for(;!e.eol();){if(e.match(/\]\]/)){t.tokenize=null;break}e.next()}return"comment"}function n(e,t){for(;!e.eol();){if(e.match(/`/)){t.tokenize=null;break}e.next()}return"string"}return{startState:function(){return{tokenize:null,afterColon:!1,afterTypeKeyword:!1}},token:function(a,o){if(o.tokenize)return o.tokenize(a,o);if(a.match(/--\[\[/))return o.tokenize=r,o.tokenize(a,o);if(a.match(/`/))return o.tokenize=n,o.tokenize(a,o);if(a.match(/--/))return a.skipToEnd(),"comment";if(a.match(/"([^"\\]|\\.)*"?/))return"string";if(a.match(/'([^'\\]|\\.)*'?/))return"string";if(a.match(/\b\d+(\.\d+)?\b/))return"number";if(a.match(/\btype\b/))return o.afterTypeKeyword=!0,"keyword";if(o.afterTypeKeyword&&a.match(/[a-zA-Z_]\w*/))return o.afterTypeKeyword=!1,"type";if(a.match(e))return"keyword";if(a.match(/self/))return"variable-3";if(o.afterColon&&a.match(/[a-zA-Z_]\w*/))return o.afterColon=!1,"type";if(a.match(t))return"builtin";if(a.match(/\btrue\b/))return"positive";if(a.match(/\bfalse\b/))return"negative";if(a.match(/[a-zA-Z_]\w*/)){if(a.match(/\s*&\s*{/,!1))return"type";let e=a.pos;return a.match(/\s*:\s*[a-zA-Z_]\w*\s*,|\s*,\s*[a-zA-Z_]\w*\s*|\s*\)\s*(do)?/,!1)?(a.pos=e,"variable-2"):"variable"}if(a.match(/:/)){let e=a.pos;return a.match(/\s*[a-zA-Z_]\w*\s*\(/,!1)?(a.pos=e,"operator"):(o.afterColon=!0,"operator")}return a.match(/\|/)?(o.afterColon=!0,"operator"):a.match(/==|~=|>=|<=|[=+\-*/|()?#\[\]&]/)?(o.afterColon=!1,"operator"):a.match(/[{}]/)?"bracket":(a.next(),null)}}})),a().defineMIME("text/x-lua","luau"),a().defineMIME("text/x-luau","luau")}}]);
//# sourceMappingURL=luau.js.map