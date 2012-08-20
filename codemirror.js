var CodeMirror=function(){function ha(a,b){if(a.indexOf)return a.indexOf(b);for(var e=0,d=a.length;e<d;++e)if(a[e]==b)return e;return-1}function Y(a){ia.innerText=ia.textContent=a;return ia.innerHTML}function B(a,b){return a.line<b.line||a.line==b.line&&a.ch<b.ch}function z(a,b){return a.line==b.line&&a.ch==b.ch}function M(a,b){for(var e=a.ownerDocument.body,d=0,f=0,k=!1,n=a;n;n=n.offsetParent)if(d+=n.offsetLeft,f+=n.offsetTop,b){var p;p=n.currentStyle?n.currentStyle:window.getComputedStyle(n,null);
p.position=="fixed"&&(k=!0)}e=b&&!k?null:e;for(n=a.parentNode;n!=e;n=n.parentNode)n.scrollLeft!=null&&(d-=n.scrollLeft,f-=n.scrollTop);return{left:d,top:f}}function s(a,b){b==null&&(b=a.search(/[^\s\u00a0]/),b==-1&&(b=a.length));for(var e=0,d=0;e<b;++e)a.charAt(e)=="\t"?d+=Ba-d%Ba:++d;return d}function wa(){this.id=null}function r(a,b,e,d){function f(a){e(a||window.event)}if(typeof a.addEventListener=="function"){if(a.addEventListener(b,f,!1),d)return function(){a.removeEventListener(b,f,!1)}}else if(a.attachEvent("on"+
b,f),d)return function(){a.detachEvent("on"+b,f)}}function j(a){if(a.pageY!=null)return a.pageY;var b=(a.target||a.srcElement).ownerDocument;return a.clientY+b.body.scrollTop+b.documentElement.scrollTop}function q(a){if(a.pageX!=null)return a.pageX;var b=(a.target||a.srcElement).ownerDocument;return a.clientX+b.body.scrollLeft+b.documentElement.scrollLeft}function p(a){if(a.which)return a.which;if(a.button&1)return 1;if(a.button&2)return 3;if(a.button&4)return 2}function F(a){v(a);a.stopPropagation?
a.stopPropagation():a.cancelBubble=!0}function v(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function Ra(a){a.stop||(a.stop=Sa);return a}function Sa(){F(this)}function Ta(){this.time=0;this.done=[];this.undone=[]}function ja(a,b,e,d){for(var f=0,k=0,n=0;k<b;f+=2){var p=e[f],j=k+p.length;n==0?(j>a&&d.push(p.slice(a-k,Math.min(p.length,b-k)),e[f+1]),j>=a&&(n=1)):n==1&&(j>b?d.push(p.slice(0,b-k),e[f+1]):d.push(p,e[f+1]));k=j}}function xa(a,b){this.styles=b||[a,null];this.stateAfter=null;
this.text=a;this.marked=this.gutterMarker=this.className=null}function ka(a){this.pos=this.start=0;this.string=a}function Ua(a,b,e){return a.startState?a.startState(b,e):!0}function la(a,b){if(b===!0)return b;if(a.copyState)return a.copyState(b);var e={},d;for(d in b){var f=b[d];f instanceof Array&&(f=f.concat([]));e[d]=f}return e}function x(a,b){function e(c,o,l){this.atOccurrence=!1;l==null&&(l=typeof c=="string"&&c==c.toLowerCase());o&&typeof o=="object"?o=A(o):o={line:0,ch:0};this.pos={from:o,
to:o};if(typeof c!="string")this.matches=function(o,l){if(o)for(var a=h[l.line].text.slice(0,l.ch),L=a.match(c),b=0;L;){var I=a.indexOf(L[0]);b+=I;a=a.slice(I+1);if(I=a.match(c))L=I;else break;b++}else a=h[l.line].text.slice(l.ch),b=(L=a.match(c))&&l.ch+a.indexOf(L[0]);if(L)return{from:{line:l.line,ch:b},to:{line:l.line,ch:b+L[0].length},match:L}};else{l&&(c=c.toLowerCase());var a=l?function(c){return c.toLowerCase()}:function(c){return c},b=c.split("\n");b.length==1?this.matches=function(o,l){var b=
a(h[l.line].text),I=c.length,d;if(o?l.ch>=I&&(d=b.lastIndexOf(c,l.ch-I))!=-1:(d=b.indexOf(c,l.ch))!=-1)return{from:{line:l.line,ch:d},to:{line:l.line,ch:d+I}}}:this.matches=function(c,o){var l=o.line,d=c?b.length-1:0,m=b[d],g=a(h[l].text),e=c?g.indexOf(m)+m.length:g.lastIndexOf(m);if(!(c?e>=o.ch||e!=m.length:e<=o.ch||e!=g.length-m.length))for(;;){if(c?!l:l==h.length-1)break;g=a(h[l+=c?-1:1].text);m=b[c?--d:++d];if(d>0&&d<b.length-1){if(g!=m)break}else{d=c?g.lastIndexOf(m):g.indexOf(m)+m.length;if(c?
d!=g.length-m.length:d!=m.length)break;m={line:o.line,ch:e};l={line:l,ch:d};return{from:c?l:m,to:c?m:l}}}}}}function d(c){return function(){ib++||k();try{var o=c.apply(this,arguments)}finally{--ib||f()}return o}}function f(){var c=!1;Z&&(c=!jb());J.length?Ca(J):Z&&ga();c&&jb();Z&&kb();P&&!ya&&(Q===!0||Q!==!1&&Z)&&Va();Z&&i.matchBrackets&&setTimeout(d(function(){Da&&(Da(),Da=null);lb(!1)}),20);c=Wa;Z&&i.onCursorActivity&&i.onCursorActivity(K);c&&i.onChange&&K&&i.onChange(K,c)}function k(){Q=null;J=
[];Wa=Z=!1}function n(c){!V.length||Sa.set(c,d(Eb))}function Eb(){for(var c=+new Date+i.workTime,o=V.length;V.length;){var l=h[C].stateAfter?V.pop():C;if(!(l>=h.length)){var a=mb(l),b=a&&h[a-1].stateAfter;b?b=la(D,b):b=Ua(D);for(var d=0,u=D.compareStates,g=h.length;a<g;++a){var e=h[a],m=e.stateAfter;if(+new Date>c){V.push(a);n(i.workDelay);J.push({from:l,to:a+1});return}var f=e.highlight(D,b);e.stateAfter=la(D,b);if(u){if(m&&u(m,b))break}else if(f||!m)d=0;else if(++d>3)break}J.push({from:l,to:a+1})}}o&&
i.onHighlightComplete&&i.onHighlightComplete(K)}function s(c){var o=mb(c),l=o&&h[o-1].stateAfter;for(l?l=la(D,l):l=Ua(D);o<c;++o){var a=h[o];a.highlight(D,l);a.stateAfter=la(D,l)}c<h.length&&!h[c].stateAfter&&V.push(c);return l}function mb(c){var o,l,a=c;for(c-=40;a>c;--a){if(a==0)return 0;var b=h[a-1];if(b.stateAfter)return a;b=b.indentation();if(l==null||o>b)l=a,o=b}return l}function lb(c){function o(c,o,a){if(c.text)for(var l=c.styles,c=u?0:c.text.length-1,b,L=u?0:l.length-2,d=u?l.length:-2;L!=
d;L+=2*w){var I=l[L];if(l[L+1]!=null&&l[L+1]!=i)c+=w*I.length;else for(var e=u?0:I.length-1,g=u?I.length:-1;e!=g;e+=w,c+=w)if(c>=o&&c<a&&p.test(b=I.charAt(e))){var m=Xa[b];if(m.charAt(1)==">"==u)k.push(b);else{if(k.pop()!=m.charAt(0))return{pos:c,match:!1};if(!k.length)return{pos:c,match:!0}}}}}var l=g.inverted?g.from:g.to,a=h[l.line],b=l.ch-1,e=b>=0&&Xa[a.text.charAt(b)]||Xa[a.text.charAt(++b)];if(e){e.charAt(0);for(var u=e.charAt(1)==">",w=u?1:-1,f=a.styles,m=b+1,e=0,n=f.length;e<n;e+=2)if((m-=
f[e].length)<=0){var i=f[e+1];break}for(var k=[a.text.charAt(b)],p=/[(){}[\]]/,e=l.line,n=u?Math.min(e+100,h.length):Math.max(-1,e-100);e!=n;e+=w){var a=h[e],j=e==l.line;if(j=o(a,j&&u?b+1:0,j&&!u?b:a.text.length))break}j||(j={pos:null,match:!1});var i=j.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket",t=Ya({line:l.line,ch:b},{line:l.line,ch:b+1},i),q=j.pos!=null?Ya({line:e,ch:j.pos},{line:e,ch:j.pos+1},i):function(){},l=d(function(){t();q()});c?setTimeout(l,800):Da=l}}function kb(){clearInterval(Za);
var c=!0;ba.style.visibility="";Za=setInterval(function(){ba.style.visibility=(c=!c)?"":"hidden"},650)}function nb(c){function o(){var c=R(y.value).join("\n");c!=I&&d(Ea)(c,"end");Fa.style.position="relative";y.style.cssText=b;ya=!1;Va();Ga()}var a=ma(c);if(a&&!window.opera){(z(g.from,g.to)||B(a,g.from)||!B(a,g.to))&&d(na)(a.line,a.ch);var b=y.style.cssText;Fa.style.position="absolute";y.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(j(c)-1)+"px; left: "+(q(c)-1)+"px; z-index: 1000; background: white; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
ya=!0;var I=y.value=ob();Ha();oa(y,0,y.value.length);if($a){F(c);var e=r(window,"mouseup",function(){e();setTimeout(o,20)},!0)}else setTimeout(o,50)}}function ma(c,o){var a=M(t,!0),b,d;try{b=c.clientX,d=c.clientY}catch(e){return null}if(!o&&(b-a.left>t.clientWidth||d-a.top>t.clientHeight))return null;a=M(G,!0);d=C+Math.floor((d-a.top)/S());return A({line:d,ch:pb(ca(d),b-a.left)})}function S(){var c=H.childNodes.length;if(c)return H.offsetHeight/c||1;W.innerHTML="<pre>x</pre>";return W.firstChild.offsetHeight||
1}function qb(c){var c=ab(c,!0),o=M(G);return{x:o.left+c.x,y:o.top+c.y,yBot:o.top+c.yBot}}function ab(c,o){var a=S(),b=c.line-(o?C:0);return{x:Y(c.line,c.ch),y:b*a,yBot:(b+1)*a}}function pb(c,o){function a(c){W.innerHTML="<pre><span>"+b.getHTML(null,null,!1,c)+"</span></pre>";return W.firstChild.firstChild.offsetWidth}if(o<=0)return 0;for(var b=h[c],d=0,e=0,g=b.text.length,w,f=Math.min(g,Math.ceil(o/rb("x")));;){var m=a(f);if(m<=o&&f<g)f=Math.min(g,Math.ceil(f*1.2));else{w=m;g=f;break}}if(o>w)return g;
f=Math.floor(g*0.8);m=a(f);for(m<o&&(d=f,e=m);;){if(g-d<=1)return w-o>o-e?d:g;f=Math.ceil((d+g)/2);m=a(f);m>o?(g=f,w=m):(d=f,e=m)}}function Y(c,o){if(o==0)return 0;W.innerHTML="<pre><span>"+h[c].getHTML(null,null,!1,o)+"</span></pre>";return W.firstChild.firstChild.offsetWidth}function rb(c){W.innerHTML="<pre><span>x</span></pre>";W.firstChild.firstChild.firstChild.nodeValue=c;return W.firstChild.firstChild.offsetWidth||10}function Ya(c,o,a){function b(c,a,o,l){c=h[c];a=c.addMark(a,o,l);a.line=c;
d.push(a)}var c=A(c),o=A(o),d=[];if(c.line==o.line)b(c.line,c.ch,o.ch,a);else{b(c.line,c.ch,null,a);for(var e=c.line+1,g=o.line;e<g;++e)b(e,0,null,a);b(o.line,0,o.ch,a)}J.push({from:c.line,to:o.line+1});return function(){for(var c,a,o=0;o<d.length;++o){var l=d[o],b=ha(h,l.line);l.line.removeMark(l);b>-1&&(c==null&&(c=b),a=b)}c!=null&&J.push({from:c,to:a+1})}}function aa(){D=x.getMode(i,i.mode);for(var c=0,a=h.length;c<a;++c)h[c].stateAfter=null;V=[0];n()}function pa(c,a){if(a=="smart")if(D.indent)var l=
s(c);else a="prev";var b=h[c],d=b.indentation(),e=b.text.match(/^\s*/)[0],f;a=="prev"?c?f=h[c-1].indentation():f=0:a=="smart"?f=D.indent(l,b.text.slice(e.length)):a=="add"?f=d+i.indentUnit:a=="subtract"&&(f=d-i.indentUnit);f=Math.max(0,f);if(f-d){d="";l=0;if(i.indentWithTabs)for(b=Math.floor(f/Ba);b;--b)l+=Ba,d+="\t";for(;l<f;)++l,d+=" "}else{if(g.from.line!=c&&g.to.line!=c)return;d=e}da(d,{line:c,ch:0},{line:c,ch:e.length})}function ka(c){function a(c){if(z(g.from,g.to))return pa(g.from.line,c);
for(var o=g.to.line-(g.to.ch?0:1),b=g.from.line;b<=o;++b)pa(b,c)}T=null;switch(i.tabMode){case "default":return!1;case "indent":a("smart");break;case "classic":if(z(g.from,g.to)){c?pa(g.from.line,"smart"):Ea("\t","end");break}case "shift":a(c?"subtract":"add")}return!0}function va(c){qa({line:c,ch:0},{line:c,ch:h[c].text.length})}function A(c){if(c.line<0)return{line:0,ch:0};if(c.line>=h.length)return{line:h.length-1,ch:h[h.length-1].text.length};var a=c.ch,l=h[c.line].text.length;return a==null||
a>l?{line:c.line,ch:l}:a<0?{line:c.line,ch:0}:c}function ca(c){return Math.max(0,Math.min(c,h.length-1))}function na(c,a,l){c=A({line:c,ch:a||0});(l?qa:ra)(c,c)}function ra(c,a,l,b){if(!z(g.from,c)||!z(g.to,a)){if(B(a,c))var d=a,a=c,c=d;z(c,a)?g.inverted=!1:z(c,g.to)?g.inverted=!1:z(a,g.from)&&(g.inverted=!0);l==null&&(l=g.from.line,b=g.to.line);z(c,a)?z(g.from,g.to)||J.push({from:l,to:b+1}):z(g.from,g.to)?J.push({from:c.line,to:a.line+1}):(z(c,g.from)||(c.line<l?J.push({from:c.line,to:Math.min(a.line,
l)+1}):J.push({from:l,to:Math.min(b,c.line)+1})),z(a,g.to)||(a.line<b?J.push({from:Math.max(l,c.line),to:b+1}):J.push({from:Math.max(c.line,b),to:a.line+1})));g.from=c;g.to=a;Z=!0}}function qa(c,a){var l=T&&A(T);l&&(B(l,c)?c=l:B(a,l)&&(a=l));ra(c,a)}function ga(){var c=g.inverted?g.from:g.to,a=S(),l=Y(c.line,c.ch)+"px",b=(c.line-C)*a+"px";Fa.style.top=c.line*a-t.scrollTop+"px";z(g.from,g.to)?(ba.style.top=b,ba.style.left=l,ba.style.display=""):ba.style.display="none"}function Ia(){if(i.gutter||i.lineNumbers){var c=
Ja.offsetHeight,a=t.clientHeight;$.style.height=(c-a<2?a:c)+"px";c=[];for(a=C;a<Math.max(X,C+1);++a){var l=h[a].gutterMarker,b=i.lineNumbers?a+i.firstLineNumber:null;l&&l.text?b=l.text.replace("%N%",b!=null?b:""):b==null&&(b="\u00a0");c.push(l&&l.style?'<pre class="'+l.style+'">':"<pre>",b,"</pre>")}$.style.display="none";Ka.innerHTML=c.join("");c=String(h.length).length;a=Ka.firstChild;l=a.textContent||a.innerText||a.nodeValue||"";for(b="";l.length+b.length<c;)b+="\u00a0";b&&a.insertBefore(ea.createTextNode(b),
a.firstChild);$.style.display="";G.style.marginLeft=$.offsetWidth+"px"}}function Ca(c){if(t.clientWidth){for(var a=c===!0?[]:[{from:C,to:X,domStart:0}],b=0,d=c.length||0;b<d;++b){for(var e=c[b],f=[],u=e.diff||0,w=0,n=a.length;w<n;++w){var m=a[w];e.to<=m.from?f.push({from:m.from+u,to:m.to+u,domStart:m.domStart}):m.to<=e.from?f.push(m):(e.from>m.from&&f.push({from:m.from,to:e.from,domStart:m.domStart}),e.to<m.to&&f.push({from:e.to+u,to:m.to+u,domStart:m.domStart+(e.to-m.from)}))}a=f}for(var u=ia(),
c=Math.min(C,Math.max(u.from-3,0)),e=Math.min(h.length,Math.max(X,u.to+3)),f=[],w=0,n=X-C,i=c,k=0,b=0,d=a.length;b<d;++b)if(m=a[b],!(m.to<=c)){if(m.from>=e)break;if(m.domStart>w||m.from>i)f.push({from:i,to:m.from,domSize:m.domStart-w,domStart:w}),k+=m.from-i;i=m.to;w=m.domStart+(m.to-m.from)}if(w!=n||i!=e)k+=Math.abs(e-i),f.push({from:i,to:e,domSize:n-w,domStart:w});if(f.length){H.style.display="none";if(k>(u.to-u.from)*0.3){m=c=Math.max(u.from-10,0);a=e=Math.min(u.to+7,h.length);b=[];d={line:m,ch:0};
for(d=B(g.from,d)&&!B(g.to,d);m<a;++m)w=u=null,d?(u=0,g.to.line==m&&(d=!1,w=g.to.ch)):g.from.line==m&&(g.to.line==m?(u=g.from.ch,w=g.to.ch):(d=!0,u=g.from.ch)),b.push(h[m].getHTML(u,w,!0));H.innerHTML=b.join("")}else{a=g.from.line;b=g.to.line;d=0;m=bb&&ea.createElement("div");u=0;for(w=f.length;u<w;++u){n=f[u];i=n.to-n.from-n.domSize;k=H.childNodes[n.domStart+n.domSize+d]||null;if(bb)for(var j=Math.max(-i,n.domSize);j>0;--j)H.removeChild(k?k.previousSibling:H.lastChild);else if(i){for(j=Math.max(0,
i);j>0;--j)H.insertBefore(ea.createElement("pre"),k);for(j=Math.max(0,-i);j>0;--j)H.removeChild(k?k.previousSibling:H.lastChild)}for(var p=H.childNodes[n.domStart+d],q=a<n.from&&b>=n.from,j=n.from;j<n.to;++j){var r=null,F=null;q?(r=0,b==j&&(q=!1,F=g.to.ch)):a==j&&(b==j?(r=g.from.ch,F=g.to.ch):(q=!0,r=g.from.ch));bb?(m.innerHTML=h[j].getHTML(r,F,!0),H.insertBefore(m.firstChild,k)):(p.innerHTML=h[j].getHTML(r,F,!1),p.className=h[j].className||"",p=p.nextSibling)}d+=i}}H.style.display="";a=c!=C||e!=
X||sb!=t.clientHeight;C=c;X=e;Ja.style.top=c*S()+"px";a&&(sb=t.clientHeight,U.style.height=h.length*S()+2*G.offsetTop+"px",Ia());sa==null&&(sa=rb(za));sa>t.clientWidth?(G.style.width=sa+"px",U.style.width="",U.style.width=t.scrollWidth+"px"):G.style.width=U.style.width="";if(H.childNodes.length!=X-C)throw Error("BAD PATCH! "+JSON.stringify(f)+" size="+(X-C)+" nodes="+H.childNodes.length);ga()}}else C=X=0}function ia(){var c=S(),a=t.scrollTop-G.offsetTop;return{from:Math.min(h.length,Math.max(0,Math.floor(a/
c))),to:Math.min(h.length,Math.ceil((a+t.clientHeight)/c))}}function ja(c,a,b,d){var e=G.offsetLeft,f=G.offsetTop,g=S();a+=f;d+=f;c+=e;b+=e;var h=t.clientHeight,n=t.scrollTop,e=!1,f=!0;a<n?(t.scrollTop=Math.max(0,a-2*g),e=!0):d>n+h&&(t.scrollTop=d+g-h,e=!0);a=t.clientWidth;d=t.scrollLeft;c<d?(c<50&&(c=0),t.scrollLeft=Math.max(0,c-10),e=!0):b>a+d&&(t.scrollLeft=b+10-a,e=!0,b>U.clientWidth&&(f=!1));e&&i.onScroll&&i.onScroll(K);return f}function jb(){var c=ab(g.inverted?g.from:g.to);return ja(c.x,c.y,
c.x,c.yBot)}function Ha(){i.readOnly!="nocursor"&&y.focus()}function Va(){for(var c=[],a=Math.max(0,g.from.line-1),b=Math.min(h.length,g.to.line+2),d=a;d<b;++d)c.push(h[d].text);for(var c=y.value=c.join(La),e=g.from.ch,f=g.to.ch,d=a;d<g.from.line;++d)e+=La.length+h[d].text.length;for(d=a;d<g.to.line;++d)f+=La.length+h[d].text.length;E={text:c,from:a,to:b,start:e,end:f};oa(y,e,fa?e:f)}function tb(){function c(c,a){for(var o=0;;){var d=b.indexOf("\n",o);if(d==-1||(b.charAt(d-1)=="\r"?d-1:d)>=c)return{line:a,
ch:c-o};++a;o=d+1}}if(!ya&&P){var a=!1,b=y.value,d=Ma(y);if(!d)return!1;var a=E.text!=b,e=fa,f=a||d.start!=E.start||d.end!=(e?E.start:E.end);if(!f&&!e)return!1;if(a&&(T=fa=null,i.readOnly))return Q=!0,"changed";var h=c(d.start,E.from),n=c(d.end,E.from);if(e){var k=d.start==e.anchor?n:h,e=T?g.to:d.start==e.anchor?h:n;(g.inverted=B(k,e))?(h=k,n=e):(fa=null,h=e,n=k)}h.line==n.line&&h.line==g.from.line&&h.line==g.to.line&&!T&&(Q=!1);if(a){for(var k=0,e=b.length,m=Math.min(e,E.text.length),j,p=E.from,
q=-1;k<m&&(j=b.charAt(k))==E.text.charAt(k);)++k,j=="\n"&&(p++,q=k);for(var m=q>-1?k-q:k,t=E.to-1,r=E.text.length;;){j=E.text.charAt(r);if(b.charAt(e)!=j){++e;++r;break}j=="\n"&&t--;if(r<=k||e<=k)break;--e;--r}q=E.text.lastIndexOf("\n",r-1);cb({line:p,ch:m},{line:t,ch:q==-1?r:r-q-1},R(b.slice(k,e)),h,n);if(p!=t||h.line!=p)Q=!0}else ra(h,n);E.text=b;E.start=d.start;E.end=d.end;return a?"changed":f?"moved":!1}}function ta(c){function a(){k();var d=tb();d=="moved"&&c&&(Na[c]=!0);!d&&!b?(b=!0,db.set(80,
a)):(eb=!1,Ga());f()}var b=!1;eb=!0;db.set(20,a)}function Ga(){eb||db.set(2E3,function(){k();tb();P&&Ga();f()})}function ob(){return ub(g.from,g.to)}function ub(c,a){var b=c.line,d=a.line;if(b==d)return h[b].text.slice(c.ch,a.ch);var e=[h[b].text.slice(c.ch)];for(b+=1;b<d;++b)e.push(h[b].text);e.push(h[d].text.slice(0,a.ch));return e.join("\n")}function vb(c,a,b,d){d=d({line:a.line+c.length-1,ch:c.length==1?c[0].length+a.ch:c[c.length-1].length});cb(a,b,c,d.from,d.to)}function Ea(c,a){vb(R(c),g.from,
g.to,function(c){return a=="end"?{from:c,to:c}:a=="start"?{from:g.from,to:g.from}:{from:g.from,to:c}})}function da(c,a,b){function d(f){if(B(f,a))return f;if(!B(b,f))return e;var g=f.line+c.length-(b.line-a.line)-1,h=f.ch;f.line==b.line&&(h+=c[c.length-1].length-(b.ch-(b.line==a.line?a.ch:0)));return{line:g,ch:h}}a=A(a);b?b=A(b):b=a;var c=R(c),e;vb(c,a,b,function(c){e=c;return{from:d(g.from),to:d(g.to)}});return e}function wb(c,a,b,d,e){for(var f=!1,k=za.length,i=c.line;i<=a.line;++i)if(h[i].text.length==
k){f=!0;break}var j=a.line-c.line,i=h[c.line],m=h[a.line];if(i==m)if(b.length==1)i.replace(c.ch,a.ch,b[0]);else{var m=i.split(a.ch,b[b.length-1]),p=[c.line+1,j];i.replace(c.ch,i.text.length,b[0]);for(var i=1,q=b.length-1;i<q;++i)p.push(new xa(b[i]));p.push(m);h.splice.apply(h,p)}else if(b.length==1)i.replace(c.ch,i.text.length,b[0]+m.text.slice(a.ch)),h.splice(c.line+1,j);else{p=[c.line+1,j-1];i.replace(c.ch,i.text.length,b[0]);m.replace(0,a.ch,b[b.length-1]);i=1;for(q=b.length-1;i<q;++i)p.push(new xa(b[i]));
h.splice.apply(h,p)}i=c.line;for(q=i+b.length;i<q;++i)m=h[i].text,m.length>k&&(za=m,k=m.length,sa=null,f=!1);if(f){k=0;za="";sa=null;i=0;for(q=h.length;i<q;++i)m=h[i].text,m.length>k&&(k=m.length,za=m)}f=[];j=b.length-j-1;i=0;for(m=V.length;i<m;++i)k=V[i],k<c.line?f.push(k):k>a.line&&f.push(k+j);if(b.length<5){m=c.line;i=c.line+b.length;for(k=s(m);m<i;++m)p=h[m],p.highlight(D,k),p.stateAfter=la(D,k);f.push(c.line+b.length)}else f.push(c.line);V=f;n(100);J.push({from:c.line,to:a.line+1,diff:j});Wa=
{from:c,to:a,text:b};ra(d,e,g.from.line<=Math.min(a.line,a.line+j)?g.from.line:g.from.line+j,g.to.line<=Math.min(a.line,a.line+j)?g.to.line:g.to.line+j);U.style.height=h.length*S()+2*G.offsetTop+"px"}function xb(){yb(O.undone,O.done)}function zb(){yb(O.done,O.undone)}function yb(c,a){var b=c.pop();if(b){for(var d=[],e=b.start+b.added,f=b.start;f<e;++f)d.push(h[f].text);a.push({start:b.start,added:b.old.length,old:d});f=b.start+b.old.length-1;var d=d[d.length-1],g=b.old[b.old.length-1];if(g)if(d){for(var i=
d.length,k=g.length;i>=0&&k>=0;--i,--k)if(d.charAt(i)!=g.charAt(k))break;d=k+1}else d=g.length;else d=d?d.length:0;f=A({line:f,ch:d});wb({line:b.start,ch:0},{line:e-1,ch:h[e-1].text.length},b.old,f,f);Q=!0}}function cb(c,a,b,d,e){if(O){for(var f=[],g=c.line,k=a.line+1;g<k;++g)f.push(h[g].text);for(O.addChange(c.line,b.length,f);O.done.length>i.undoDepth;)O.done.shift()}wb(c,a,b,d,e)}function Ab(){P&&(i.onBlur&&i.onBlur(K),P=!1,N.className=N.className.replace(" CodeMirror-focused",""));clearInterval(Za);
setTimeout(function(){P||(T=null)},150)}function ua(){i.readOnly!="nocursor"&&(P||(i.onFocus&&i.onFocus(K),P=!0,N.className.search(/\bCodeMirror-focused\b/)==-1&&(N.className+=" CodeMirror-focused"),ya||Va()),Ga(),kb())}function Bb(c){O=null;var a={line:0,ch:0};cb(a,{line:h.length-1,ch:h[h.length-1].text.length},R(c),a,a);O=new Ta}var i={},fb=x.defaults,Aa;for(Aa in fb)fb.hasOwnProperty(Aa)&&(i[Aa]=(b&&b.hasOwnProperty(Aa)?b:fb)[Aa]);var ea=i.document,N=ea.createElement("div");N.className="CodeMirror";
N.innerHTML='<div style="overflow: hidden; position: relative; width: 1px; height: 0px;"><textarea style="position: absolute; width: 2px;" wrap="off"></textarea></div><div class="CodeMirror-scroll cm-s-'+i.theme+'"><div style="position: relative"><div style="position: absolute; height: 0; width: 0; overflow: hidden;"></div><div style="position: relative"><div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div><div class="CodeMirror-lines"><div style="position: relative"><pre class="CodeMirror-cursor">&#160;</pre><div></div></div></div></div></div></div>';
a.appendChild?a.appendChild(N):a(N);var Fa=N.firstChild,y=Fa.firstChild,t=N.lastChild,U=t.firstChild,W=U.firstChild,Ja=W.nextSibling,$=Ja.firstChild,Ka=$.firstChild,G=$.nextSibling.firstChild,ba=G.firstChild,H=ba.nextSibling;i.tabindex!=null&&(y.tabindex=i.tabindex);!i.gutter&&!i.lineNumbers&&($.style.display="none");var db=new wa,Sa=new wa,Za,D,h=[new xa("")],V,O=new Ta,P;aa();var g={from:{line:0,ch:0},to:{line:0,ch:0},inverted:!1},T,fa,gb,Q,J,Wa,Z,ya,C=0,X=0,sb=0,Oa=null,E,Da,za="",sa;d(function(){Bb(i.value||
"");Q=!1})();r(t,"mousedown",d(function(c){function a(c){var b=ma(c,!0);if(b&&!z(b,g)){P||ua();g=b;qa(f,b);Q=!1;var e=ia();if(b.line>=e.to||b.line<e.from)h=setTimeout(d(function(){a(c)}),150)}}for(var b=c.target||c.srcElement;b!=N;b=b.parentNode)if(b.parentNode==U&&b!=Ja)return;var e=gb;gb=null;for(b=c.target||c.srcElement;b!=N;b=b.parentNode)if(b.parentNode==Ka)return i.onGutterClick&&i.onGutterClick(K,ha(Ka.childNodes,b)+C),v(c);var f=ma(c);switch(p(c)){case 3:$a&&!hb&&nb(c);return;case 2:f&&na(f.line,
f.ch,!0);return}if(f){P||ua();v(c);if(e&&+new Date-e<400)return va(f.line);na(f.line,f.ch,!0);var g=f,h,k=r(ea,"mousemove",d(function(c){clearTimeout(h);v(c);a(c)}),!0),n=r(ea,"mouseup",d(function(c){clearTimeout(h);var a=ma(c);a&&qa(f,a);v(c);Ha();Q=!0;k();n()}),!0)}else(c.target||c.srcElement)==t&&v(c)}));$a||r(t,"contextmenu",nb);r(U,"dblclick",d(function(c){var a=ma(c);if(a){for(var b=h[a.line].text,d=a.ch,e=a.ch;d>0&&/\w/.test(b.charAt(d-1));)--d;for(;e<b.length&&/\w/.test(b.charAt(e));)++e;
qa({line:a.line,ch:d},{line:a.line,ch:e});v(c);gb=+new Date}}));r(t,"scroll",function(){Ca([]);i.onScroll&&i.onScroll(K)});r(window,"resize",function(){Ca(!0)});r(y,"keyup",d(function(c){if(!i.onKeyEvent||!i.onKeyEvent(K,Ra(c)))fa&&(fa=null,Q=!0),c.keyCode==16&&(T=null)}));r(y,"keydown",d(function(c){P||ua();var a=c.keyCode;Fb&&a==27&&(c.returnValue=!1);var b=(hb?c.metaKey:c.ctrlKey)&&!c.altKey,d=c.ctrlKey||c.altKey||c.metaKey;a==16||c.shiftKey?T=T||(g.inverted?g.to:g.from):T=null;if(!i.onKeyEvent||
!i.onKeyEvent(K,Ra(c))){if(a==33||a==34)return a=a==34,b=Math.floor(t.clientHeight/S()),d=g.inverted?g.from:g.to,na(d.line+Math.max(b-1,1)*(a?1:-1),d.ch,!0),v(c);if(b&&(a==36||a==35||hb&&(a==38||a==40)))return a=a==36||a==38?{line:0,ch:0}:{line:h.length-1,ch:h[h.length-1].text.length},qa(a,a),v(c);if(b&&a==65)return a=h.length-1,ra({line:0,ch:0},{line:a,ch:h[a].text.length}),v(c);if(!i.readOnly){if(!d&&a==13)return;if(!d&&a==9&&ka(c.shiftKey))return v(c);if(b&&a==90)return zb(),v(c);if(b&&(c.shiftKey&&
a==90||a==89))return xb(),v(c)}Oa=(b?"c":"")+a;g.inverted&&Na.hasOwnProperty(Oa)&&(c=Ma(y))&&(fa={anchor:c.start},oa(y,c.start,c.start));ta(Oa)}}));r(y,"keypress",d(function(a){if(!i.onKeyEvent||!i.onKeyEvent(K,Ra(a))){if(i.electricChars&&D.electricChars){var b=String.fromCharCode(a.charCode==null?a.keyCode:a.charCode);D.electricChars.indexOf(b)>-1&&setTimeout(d(function(){pa(g.to.line,"smart")}),50)}b=a.keyCode;b==13?(i.readOnly||(Ea("\n","end"),i.enterMode!="flat"&&pa(g.from.line,i.enterMode=="keep"?
"prev":"smart")),v(a)):!a.ctrlKey&&!a.altKey&&!a.metaKey&&b==9&&i.tabMode!="default"?v(a):ta(Oa)}}));r(y,"focus",ua);r(y,"blur",Ab);r(t,"dragenter",F);r(t,"dragover",F);r(t,"drop",d(function(a){a.preventDefault();var b=ma(a,!0),d=a.dataTransfer.files;if(b&&!i.readOnly)if(d&&d.length&&window.FileReader&&window.File)for(var a=function(a,c){var d=new FileReader;d.onload=function(){f[c]=d.result;++g==e&&da(f.join(""),A(b),A(b))};d.readAsText(a)},e=d.length,f=Array(e),g=0,h=0;h<e;++h)a(d[h],h);else try{(f=
a.dataTransfer.getData("Text"))&&da(f,b,b)}catch(k){}}));r(t,"paste",function(){Ha();ta()});r(y,"paste",function(){ta()});r(y,"cut",function(){ta()});var Cb;try{Cb=ea.activeElement==y}catch(Db){}Cb?setTimeout(ua,20):Ab();var K={getValue:function(){for(var a=[],b=0,d=h.length;b<d;++b)a.push(h[b].text);return a.join("\n")},setValue:d(Bb),getSelection:ob,replaceSelection:d(Ea),focus:function(){Ha();ua();ta()},setOption:function(a,b){i[a]=b;if(a=="lineNumbers"||a=="gutter"){var d=i.gutter||i.lineNumbers;
$.style.display=d?"":"none";d?Ia():H.parentNode.style.marginLeft=0}else a=="mode"||a=="indentUnit"?aa():a=="readOnly"&&b=="nocursor"?y.blur():a=="theme"&&(t.className=t.className.replace(/cm-s-\w+/,"cm-s-"+b))},getOption:function(a){return i[a]},undo:d(zb),redo:d(xb),indentLine:d(function(a){a>=0&&a<h.length&&pa(a,"smart")}),historySize:function(){return{undo:O.done.length,redo:O.undone.length}},matchBrackets:d(function(){lb(!0)}),getTokenAt:function(a){a=A(a);return h[a.line].getTokenAt(D,s(a.line),
a.ch)},getStateAfter:function(a){a=ca(a==null?h.length-1:a);return s(a+1)},cursorCoords:function(a){a==null&&(a=g.inverted);return qb(a?g.from:g.to)},charCoords:function(a){return qb(A(a))},coordsChar:function(a){var b=M(G),d=ca(Math.min(h.length-1,C+Math.floor((a.y-b.top)/S())));return A({line:d,ch:pb(ca(d),a.x-b.left)})},getSearchCursor:function(a,b,d){return new e(a,b,d)},markText:d(function(a,b,e){return d(Ya(a,b,e))}),setMarker:function(a,b,d){typeof a=="number"&&(a=h[ca(a)]);a.gutterMarker=
{text:b,style:d};Ia();return a},clearMarker:function(a){typeof a=="number"&&(a=h[ca(a)]);a.gutterMarker=null;Ia()},setLineClass:d(function(a,b){if(typeof a=="number")var d=a,a=h[ca(a)];else if(d=ha(h,a),d==-1)return null;a.className!=b&&(a.className=b,J.push({from:d,to:d+1}));return a}),lineInfo:function(a){if(typeof a=="number"){var b=a,a=h[a];if(!a)return null}else if(b=ha(h,a),b==-1)return null;var d=a.gutterMarker;return{line:b,text:a.text,markerText:d&&d.text,markerClass:d&&d.style}},addWidget:function(a,
b,d,e){var a=ab(A(a)),f=a.yBot,g=a.x;b.style.position="absolute";U.appendChild(b);b.style.left=g+"px";if(e=="over")f=a.y;else if(e=="near"){var e=Math.max(t.offsetHeight,h.length*S()),i=Math.max(U.clientWidth,G.clientWidth)-G.offsetLeft;a.yBot+b.offsetHeight>e&&a.y>b.offsetHeight&&(f=a.y-b.offsetHeight);g+b.offsetWidth>i&&(g=i-b.offsetWidth)}b.style.top=f+G.offsetTop+"px";b.style.left=g+G.offsetLeft+"px";d&&ja(g,f,g+b.offsetWidth,f+b.offsetHeight)},lineCount:function(){return h.length},getCursor:function(a){a==
null&&(a=g.inverted);return{line:(a?g.from:g.to).line,ch:(a?g.from:g.to).ch}},somethingSelected:function(){return!z(g.from,g.to)},setCursor:d(function(a,b){b==null&&typeof a.line=="number"?na(a.line,a.ch):na(a,b)}),setSelection:d(function(a,b){ra(A(a),A(b||a))}),getLine:function(a){if(a>=0&&a<h.length)return h[a].text},setLine:d(function(a,b){a>=0&&a<h.length&&da(b,{line:a,ch:0},{line:a,ch:h[a].text.length})}),removeLine:d(function(a){a>=0&&a<h.length&&da("",{line:a,ch:0},A({line:a+1,ch:0}))}),replaceRange:d(da),
getRange:function(a,b){return ub(A(a),A(b))},operation:function(a){return d(a)()},refresh:function(){Ca(!0)},getInputField:function(){return y},getWrapperElement:function(){return N},getScrollerElement:function(){return t}},eb=!1,Xa={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"},ib=0;e.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(a){function b(a){a={line:a,ch:0};d.pos={from:a,to:a};return d.atOccurrence=!1}for(var d=this,
e=A(a?this.pos.from:this.pos.to);;){if(this.pos=this.matches(a,e))return this.atOccurrence=!0,this.pos.match||!0;if(a){if(!e.line)return b(0);e={line:e.line-1,ch:h[e.line-1].text.length}}else{if(e.line==h.length-1)return b(h.length);e={line:e.line+1,ch:0}}}},from:function(){if(this.atOccurrence)return{line:this.pos.from.line,ch:this.pos.from.ch}},to:function(){if(this.atOccurrence)return{line:this.pos.to.line,ch:this.pos.to.ch}},replace:function(a){var b=this;this.atOccurrence&&d(function(){b.pos.to=
da(a,b.pos.from,b.pos.to)})()}};for(var Pa in Qa)Qa.propertyIsEnumerable(Pa)&&!K.propertyIsEnumerable(Pa)&&(K[Pa]=Qa[Pa]);return K}x.defaults={value:"",mode:null,theme:"default",indentUnit:2,indentWithTabs:!1,tabMode:"classic",enterMode:"indent",electricChars:!0,onKeyEvent:null,lineNumbers:!1,gutter:!1,firstLineNumber:1,readOnly:!1,onChange:null,onCursorActivity:null,onGutterClick:null,onHighlightComplete:null,onFocus:null,onBlur:null,onScroll:null,matchBrackets:!1,workTime:100,workDelay:200,undoDepth:40,
tabindex:null,document:window.document};var va={},aa={};x.defineMode=function(a,b){!x.defaults.mode&&a!="null"&&(x.defaults.mode=a);va[a]=b};x.defineMIME=function(a,b){aa[a]=b};x.getMode=function(a,b){typeof b=="string"&&aa.hasOwnProperty(b)&&(b=aa[b]);if(typeof b=="string")var e=b,d={};else if(b!=null)e=b.name,d=b;var f=va[e];if(!f)return window.console&&console.warn("No mode "+e+" found, falling back to plain text."),x.getMode(a,"text/plain");return f(a,d||{})};x.listModes=function(){var a=[],b;
for(b in va)va.propertyIsEnumerable(b)&&a.push(b);return a};x.listMIMEs=function(){var a=[],b;for(b in aa)aa.propertyIsEnumerable(b)&&a.push(b);return a};var Qa={};x.defineExtension=function(a,b){Qa[a]=b};x.fromTextArea=function(a,b){function e(){a.value=n.getValue()}b||(b={});b.value=a.value;!b.tabindex&&a.tabindex&&(b.tabindex=a.tabindex);if(a.form){var d=r(a.form,"submit",e,!0);if(typeof a.form.submit=="function"){var f=a.form.submit,k=function(){e();a.form.submit=f;a.form.submit();a.form.submit=
k};a.form.submit=k}}a.style.display="none";var n=x(function(b){a.parentNode.insertBefore(b,a.nextSibling)},b);n.save=e;n.toTextArea=function(){e();a.parentNode.removeChild(n.getWrapperElement());a.style.display="";a.form&&(d(),typeof a.form.submit=="function"&&(a.form.submit=f))};return n};x.startState=Ua;x.copyState=la;ka.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==0},peek:function(){return this.string.charAt(this.pos)},next:function(){if(this.pos<
this.string.length)return this.string.charAt(this.pos++)},eat:function(a){var b=this.string.charAt(this.pos);if(typeof a=="string"?b==a:b&&(a.test?a.test(b):a(b)))return++this.pos,b},eatWhile:function(a){for(var b=this.start;this.eat(a););return this.pos>b},eatSpace:function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){a=this.string.indexOf(a,this.pos);if(a>-1)return this.pos=
a,!0},backUp:function(a){this.pos-=a},column:function(){return s(this.string,this.start)},indentation:function(){return s(this.string)},match:function(a,b,e){if(typeof a!="string")return(a=this.string.slice(this.pos).match(a))&&b!==!1&&(this.pos+=a[0].length),a;if((e?this.string.toLowerCase():this.string).indexOf(e?a.toLowerCase():a,this.pos)==this.pos)return b!==!1&&(this.pos+=a.length),!0},current:function(){return this.string.slice(this.start,this.pos)}};x.StringStream=ka;xa.prototype={replace:function(a,
b,e){var d=[],f=this.marked;ja(0,a,this.styles,d);e&&d.push(e,null);ja(b,this.text.length,this.styles,d);this.styles=d;this.text=this.text.slice(0,a)+e+this.text.slice(b);this.stateAfter=null;if(f){a=e.length-(b-a);e=this.text.length;for(d=0;d<f.length;++d){var k=f[d],n=!1;k.from>=e?n=!0:(k.from=k.from<=Math.min(b,b+a)?k.from:k.from+a,k.to!=null&&(k.to=k.to<=Math.min(b,b+a)?k.to:k.to+a));if(n||k.from>=k.to)f.splice(d,1),d--}}},split:function(a,b){var e=[b,null];ja(a,this.text.length,this.styles,e);
return new xa(b+this.text.slice(a),e)},addMark:function(a,b,e){a={from:a,to:b,style:e};this.marked==null&&(this.marked=[]);this.marked.push(a);this.marked.sort(function(a,b){return a.from-b.from});return a},removeMark:function(a){var b=this.marked;if(b)for(var e=0;e<b.length;++e)if(b[e]==a){b.splice(e,1);break}},highlight:function(a,b){var e=new ka(this.text),d=this.styles,f=0,k=!1,n=d[0],j;for(this.text==""&&a.blankLine&&a.blankLine(b);!e.eol();){var p=a.token(e,b),q=this.text.slice(e.start,e.pos);
e.start=e.pos;f&&d[f-1]==p?d[f-2]+=q:q&&(!k&&(d[f+1]!=p||f&&d[f-2]!=j)&&(k=!0),d[f++]=q,d[f++]=p,j=n,n=d[f]);if(e.pos>5E3){d[f++]=this.text.slice(e.pos);d[f++]=null;break}}d.length!=f&&(d.length=f,k=!0);f&&d[f-2]!=j&&(k=!0);return k||d.length<5&&this.text.length<10},getTokenAt:function(a,b,e){for(var d=new ka(this.text);d.pos<e&&!d.eol();){d.start=d.pos;var f=a.token(d,b)}return{start:d.start,end:d.pos,string:d.current(),className:f||null,state:b}},indentation:function(){return s(this.text)},getHTML:function(a,
b,e,d){function f(a,b){!a||(b?k.push('<span class="',b,'">',Y(a),"</span>"):k.push(Y(a)))}var k=[];e&&k.push(this.className?'<pre class="'+this.className+'">':"<pre>");var n=this.styles,j=this.text,p=this.marked;a==b&&(a=null);var q=j.length;d!=null&&(q=Math.min(d,q));if(!j&&d==null)f(" ",a!=null&&b==null?"CodeMirror-selected":null);else if(!p&&a==null)for(a=d=0;a<q;d+=2){var b=n[d],r=b.length;a+r>q&&(b=b.slice(0,q-a));a+=r;f(b,"cm-"+n[d+1])}else{var d=j=0,F="",x=-1,s=null,z=function(){p&&(x+=1,s=
x<p.length?p[x]:null)};for(z();j<q;){var v=q,B="";if(a!=null)if(a>j)v=a;else if(b==null||b>j)B=" CodeMirror-selected",b!=null&&(v=Math.min(v,b));for(;s&&s.to!=null&&s.to<=j;)z();for(s&&(s.from>j?v=Math.min(v,s.from):(B+=" "+s.style,s.to!=null&&(v=Math.min(v,s.to))));;){var M=j+F.length,R=r;B&&(R=r?r+B:B);f(M>v?F.slice(0,v-j):F,R);if(M>=v){F=F.slice(v-j);j=v;break}j=M;F=n[d++];r="cm-"+n[d++]}}a!=null&&b==null&&f(" ","CodeMirror-selected")}e&&k.push("</pre>");return k.join("")}};Ta.prototype={addChange:function(a,
b,e){this.undone.length=0;var d=+new Date,f=this.done[this.done.length-1];if(d-this.time>400||!f||f.start>a+b||f.start+f.added<a-f.added+f.old.length)this.done.push({start:a,added:b,old:e});else{var k=0;if(a<f.start){for(var j=f.start-a-1;j>=0;--j)f.old.unshift(e[j]);f.added+=f.start-a;f.start=a}else f.start<a&&(k=a-f.start,b+=k);j=f.added-k;for(a=e.length;j<a;++j)f.old.push(e[j]);f.added<b&&(f.added=b)}this.time=d}};wa.prototype={set:function(a,b){clearTimeout(this.id);this.id=setTimeout(b,a)}};
var bb=function(){var a=document.createElement("pre");a.innerHTML=" ";return!a.innerHTML}(),$a=/gecko\/\d{7}/i.test(navigator.userAgent),Fb=/MSIE \d/.test(navigator.userAgent),Db=/Apple Computer/.test(navigator.vendor),La="\n";(function(){var a=document.createElement("textarea");a.value="foo\nbar";a.value.indexOf("\r")>-1&&(La="\r\n")})();for(var Ba=8,hb=/Mac/.test(navigator.platform),Na={},ga=35;ga<=40;++ga)Na[ga]=Na["c"+ga]=!0;var ia=document.createElement("div");x.htmlEscape=Y;var R,Ma,oa;"\n\nb".split(/\n/).length!=
3?R=function(a){for(var b=0,e,d=[];(e=a.indexOf("\n",b))>-1;)d.push(a.slice(b,a.charAt(e-1)=="\r"?e-1:e)),b=e+1;d.push(a.slice(b));return d}:R=function(a){return a.split(/\r?\n/)};x.splitLines=R;window.getSelection?(Ma=function(a){try{return{start:a.selectionStart,end:a.selectionEnd}}catch(b){return null}},Db?oa=function(a,b,e){b==e?a.setSelectionRange(b,e):(a.setSelectionRange(b,e-1),window.getSelection().modify("extend","forward","character"))}:oa=function(a,b,e){try{a.setSelectionRange(b,e)}catch(d){}}):
(Ma=function(a){try{var b=a.ownerDocument.selection.createRange()}catch(e){return null}if(!b||b.parentElement()!=a)return null;var d=a.value,f=d.length,k=a.createTextRange();k.moveToBookmark(b.getBookmark());var j=a.createTextRange();j.collapse(!1);if(k.compareEndPoints("StartToEnd",j)>-1)return{start:f,end:f};a=-k.moveStart("character",-f);for(b=d.indexOf("\r");b>-1&&b<a;b=d.indexOf("\r",b+1),a++);if(k.compareEndPoints("EndToEnd",j)>-1)return{start:a,end:f};f=-k.moveEnd("character",-f);for(b=d.indexOf("\r");b>
-1&&b<f;b=d.indexOf("\r",b+1),f++);return{start:a,end:f}},oa=function(a,b,e){var d=a.createTextRange();d.collapse(!0);for(var f=d.duplicate(),j=0,a=a.value,n=a.indexOf("\n");n>-1&&n<b;n=a.indexOf("\n",n+1))++j;for(d.move("character",b-j);n>-1&&n<e;n=a.indexOf("\n",n+1))++j;f.move("character",e-j);d.setEndPoint("EndToEnd",f);d.select()});x.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}});x.defineMIME("text/plain","null");return x}();
CodeMirror.defineMode("css",function(ha){function Y(j){return function(q,p){for(var r=!1,v;(v=q.next())!=null;){if(v==j&&!r)break;r=!r&&v=="\\"}r||(p.tokenize=M);return s("string","string")}}function B(j,q){for(var p=0,r;(r=j.next())!=null;){if(p>=2&&r==">"){q.tokenize=M;break}p=r=="-"?p+1:0}return s("comment","comment")}function z(j,q){for(var p=!1,r;(r=j.next())!=null;){if(p&&r=="/"){q.tokenize=M;break}p=r=="*"}return s("comment","comment")}function M(j,q){var p=j.next();if(p=="@")return j.eatWhile(/\w/),
s("meta",j.current());if(p=="/"&&j.eat("*"))return q.tokenize=z,z(j,q);if(p=="<"&&j.eat("!"))return q.tokenize=B,B(j,q);if(p=="=")s(null,"compare");else{if(p!="~"&&p!="|"||!j.eat("=")){if(p=='"'||p=="'")return q.tokenize=Y(p),q.tokenize(j,q);if(p=="#")return j.eatWhile(/\w/),s("atom","hash");if(p=="!")return j.match(/^\s*\w*/),s("keyword","important");if(/\d/.test(p))return j.eatWhile(/[\w.%]/),s("number","unit");if(/[,.+>*\/]/.test(p))return s(null,"select-op");if(/[;{}:\[\]]/.test(p))return s(null,
p);j.eatWhile(/[\w\\\-_]/);return s("variable","variable")}return s(null,"compare")}}function s(j,q){r=q;return j}var wa=ha.indentUnit,r;return{startState:function(j){return{tokenize:M,baseIndent:j||0,stack:[]}},token:function(j,q){if(j.eatSpace())return null;var p=q.tokenize(j,q),s=q.stack[q.stack.length-1];if(r=="hash"&&s=="rule")p="atom";else if(p=="variable")if(s=="rule")p="number";else if(!s||s=="@media{")p="tag";s=="rule"&&/^[\{\};]$/.test(r)&&q.stack.pop();r=="{"?s=="@media"?q.stack[q.stack.length-
1]="@media{":q.stack.push("{"):r=="}"?q.stack.pop():r=="@media"?q.stack.push("@media"):s=="{"&&r!="comment"&&q.stack.push("rule");return p},indent:function(j,q){var p=j.stack.length;/^\}/.test(q)&&(p-=j.stack[j.stack.length-1]=="rule"?2:1);return j.baseIndent+p*wa},electricChars:"}"}});CodeMirror.defineMIME("text/css","css");