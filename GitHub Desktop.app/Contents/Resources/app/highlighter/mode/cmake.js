(self.webpackChunk=self.webpackChunk||[]).push([["mode/cmake"],{4952:(n,e,t)=>{!function(n){"use strict";n.defineMode("cmake",(function(){var n=/({)?[a-zA-Z0-9_]+(})?/;function e(n,e){for(var t,i,a=!1;!n.eol()&&(t=n.next())!=e.pending;){if("$"===t&&"\\"!=i&&'"'==e.pending){a=!0;break}i=t}return a&&n.backUp(1),t==e.pending?e.continueString=!1:e.continueString=!0,"string"}return{startState:function(){return{inDefinition:!1,inInclude:!1,continueString:!1,pending:!1}},token:function(t,i){return t.eatSpace()?null:function(t,i){var a=t.next();return"$"===a?t.match(n)?"variable-2":"variable":i.continueString?(t.backUp(1),e(t,i)):t.match(/(\s+)?\w+\(/)||t.match(/(\s+)?\w+\ \(/)?(t.backUp(1),"def"):"#"==a?(t.skipToEnd(),"comment"):"'"==a||'"'==a?(i.pending=a,e(t,i)):"("==a||")"==a?"bracket":a.match(/[0-9]/)?"number":(t.eatWhile(/[\w-]/),null)}(t,i)}}})),n.defineMIME("text/x-cmake","cmake")}(t(2063))}}]);
//# sourceMappingURL=cmake.js.map