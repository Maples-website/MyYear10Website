(self.webpackChunk=self.webpackChunk||[]).push([["mode/vb"],{7902:(e,t,n)=>{!function(e){"use strict";e.defineMode("vb",(function(t,n){var r="error";function i(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var a=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),o=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),c=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),s=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),u=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),d=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),l=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],h=["else","elseif","case","catch","finally"],m=["next","loop"],f=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],p=i(f),b=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],g=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],v=i(b),y=i(g),w='"',k=i(l),x=i(h),I=i(m),E=i(["end"]),L=i(["do"]);function z(e,t){t.currentIndent++}function C(e,t){t.currentIndent--}function R(e,t){if(e.eatSpace())return null;if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var i=!1;if((e.match(/^\d*\.\d+F?/i)||e.match(/^\d+\.\d*F?/)||e.match(/^\.\d+F?/))&&(i=!0),i)return e.eat(/J/i),"number";var l=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?l=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),l=!0):e.match(/^0(?![\dx])/i)&&(l=!0),l)return e.eat(/L/i),"number"}return e.match(w)?(t.tokenize=(h=e.current(),m=1==h.length,f="string",function(e,t){for(;!e.eol();){if(e.eatWhile(/[^'"]/),e.match(h))return t.tokenize=R,f;e.eat(/['"]/)}if(m){if(n.singleLineStringErrors)return r;t.tokenize=R}return f}),t.tokenize(e,t)):e.match(u)||e.match(s)?null:e.match(c)||e.match(a)||e.match(p)?"operator":e.match(o)?null:e.match(L)?(z(0,t),t.doInCurrentLine=!0,"keyword"):e.match(k)?(t.doInCurrentLine?t.doInCurrentLine=!1:z(0,t),"keyword"):e.match(x)?"keyword":e.match(E)?(C(0,t),C(0,t),"keyword"):e.match(I)?(C(0,t),"keyword"):e.match(y)||e.match(v)?"keyword":e.match(d)?"variable":(e.next(),r);var h,m,f}return e.registerHelper("hintWords","vb",l.concat(h).concat(m).concat(f).concat(b).concat(g)),{electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:R,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var n=function(e,t){var n=t.tokenize(e,t),i=e.current();if("."===i)return"variable"===(n=t.tokenize(e,t))?"variable":r;var a="[({".indexOf(i);return-1!==a&&z(0,t),-1!==(a="])}".indexOf(i))&&C(0,t)?r:n}(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e,n){var r=n.replace(/^\s+|\s+$/g,"");return r.match(I)||r.match(E)||r.match(x)?t.indentUnit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*t.indentUnit},lineComment:"'"}})),e.defineMIME("text/x-vb","vb")}(n(2063))}}]);
//# sourceMappingURL=vb.js.map