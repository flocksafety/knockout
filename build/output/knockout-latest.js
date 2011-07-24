// Knockout JavaScript library v1.2.1pre
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,undefined){ 
function c(e){throw e;}var n=void 0,o=null,p=window.ko={};p.b=function(e,d){for(var b=e.split("."),a=window,g=0;g<b.length-1;g++)a=a[b[g]];a[b[b.length-1]]=d};p.i=function(e,d,b){e[d]=b};
p.a=new function(){function e(a,g){if(a.tagName!="INPUT"||!a.type)return!1;if(g.toLowerCase()!="click")return!1;var b=a.type.toLowerCase();return b=="checkbox"||b=="radio"}var d=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,b={click:1,dblclick:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseout:1,mouseenter:1,mouseleave:1};return{ca:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],h:function(a,g){for(var b=0,d=a.length;b<d;b++)g(a[b])},g:function(a,g){if(typeof a.indexOf=="function")return a.indexOf(g);
for(var b=0,d=a.length;b<d;b++)if(a[b]===g)return b;return-1},xa:function(a,g,b){for(var d=0,e=a.length;d<e;d++)if(g.call(b,a[d]))return a[d];return o},M:function(a,g){var b=p.a.g(a,g);b>=0&&a.splice(b,1)},ba:function(a){for(var a=a||[],g=[],b=0,d=a.length;b<d;b++)p.a.g(g,a[b])<0&&g.push(a[b]);return g},L:function(a,g){for(var a=a||[],b=[],d=0,e=a.length;d<e;d++)b.push(g(a[d]));return b},K:function(a,g){for(var a=a||[],b=[],d=0,e=a.length;d<e;d++)g(a[d])&&b.push(a[d]);return b},z:function(a,g){for(var b=
0,d=g.length;b<d;b++)a.push(g[b])},P:function(a){for(;a.firstChild;)p.removeNode(a.firstChild)},Xa:function(a,b){p.a.P(a);b&&p.a.h(b,function(b){a.appendChild(b)})},ka:function(a,b){var d=a.nodeType?[a]:a;if(d.length>0){for(var e=d[0],i=e.parentNode,j=0,k=b.length;j<k;j++)i.insertBefore(b[j],e);j=0;for(k=d.length;j<k;j++)p.removeNode(d[j])}},ma:function(a,b){navigator.userAgent.indexOf("MSIE 6")>=0?a.setAttribute("selected",b):a.selected=b},da:function(a,b){if(!a||a.nodeType!=1)return[];var d=[];
a.getAttribute(b)!==o&&d.push(a);for(var e=a.getElementsByTagName("*"),i=0,j=e.length;i<j;i++)e[i].getAttribute(b)!==o&&d.push(e[i]);return d},k:function(a){return(a||"").replace(d,"")},ab:function(a,b){for(var d=[],e=(a||"").split(b),i=0,j=e.length;i<j;i++){var k=p.a.k(e[i]);k!==""&&d.push(k)}return d},Za:function(a,b){a=a||"";if(b.length>a.length)return!1;return a.substring(0,b.length)===b},Ha:function(a,b){if(b===n)return(new Function("return "+a))();return(new Function("sc","with(sc) { return ("+
a+") }"))(b)},Fa:function(a,b){if(b.compareDocumentPosition)return(b.compareDocumentPosition(a)&16)==16;for(;a!=o;){if(a==b)return!0;a=a.parentNode}return!1},O:function(a){return p.a.Fa(a,document)},t:function(a,b,d){if(typeof jQuery!="undefined"){if(e(a,b))var f=d,d=function(a,b){var d=this.checked;if(b)this.checked=b.Aa!==!0;f.call(this,a);this.checked=d};jQuery(a).bind(b,d)}else typeof a.addEventListener=="function"?a.addEventListener(b,d,!1):typeof a.attachEvent!="undefined"?a.attachEvent("on"+
b,function(b){d.call(a,b)}):c(Error("Browser doesn't support addEventListener or attachEvent"))},qa:function(a,d){(!a||!a.nodeType)&&c(Error("element must be a DOM node when calling triggerEvent"));if(typeof jQuery!="undefined"){var h=[];e(a,d)&&h.push({Aa:a.checked});jQuery(a).trigger(d,h)}else if(typeof document.createEvent=="function")typeof a.dispatchEvent=="function"?(h=document.createEvent(d in b?"MouseEvents":"HTMLEvents"),h.initEvent(d,!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,a),a.dispatchEvent(h)):
c(Error("The supplied element doesn't support dispatchEvent"));else if(typeof a.fireEvent!="undefined"){if(d=="click"&&a.tagName=="INPUT"&&(a.type.toLowerCase()=="checkbox"||a.type.toLowerCase()=="radio"))a.checked=a.checked!==!0;a.fireEvent("on"+d)}else c(Error("Browser doesn't support triggering events"))},d:function(a){return p.C(a)?a():a},Ea:function(a,b){return p.a.g((a.className||"").split(/\s+/),b)>=0},pa:function(a,b,d){var e=p.a.Ea(a,b);if(d&&!e)a.className=(a.className||"")+" "+b;else if(e&&
!d){for(var d=(a.className||"").split(/\s+/),e="",i=0;i<d.length;i++)d[i]!=b&&(e+=d[i]+" ");a.className=p.a.k(e)}},Ua:function(a,b){for(var a=p.a.d(a),b=p.a.d(b),d=[],e=a;e<=b;e++)d.push(e);return d},T:function(a){for(var b=[],d=0,e=a.length;d<e;d++)b.push(a[d]);return b},R:/MSIE 6/i.test(navigator.userAgent),Ma:/MSIE 7/i.test(navigator.userAgent),ea:function(a,b){for(var d=p.a.T(a.getElementsByTagName("INPUT")).concat(p.a.T(a.getElementsByTagName("TEXTAREA"))),e=typeof b=="string"?function(a){return a.name===
b}:function(a){return b.test(a.name)},i=[],j=d.length-1;j>=0;j--)e(d[j])&&i.push(d[j]);return i},F:function(a){if(typeof a=="string"&&(a=p.a.k(a))){if(window.JSON&&window.JSON.parse)return window.JSON.parse(a);return(new Function("return "+a))()}return o},X:function(a){(typeof JSON=="undefined"||typeof JSON.stringify=="undefined")&&c(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));
return JSON.stringify(p.a.d(a))},Ta:function(a,b,d){var d=d||{},e=d.params||{},i=d.includeFields||this.ca,j=a;if(typeof a=="object"&&a.tagName=="FORM")for(var j=a.action,k=i.length-1;k>=0;k--)for(var m=p.a.ea(a,i[k]),q=m.length-1;q>=0;q--)e[m[q].name]=m[q].value;var b=p.a.d(b),l=document.createElement("FORM");l.style.display="none";l.action=j;l.method="post";for(var s in b)a=document.createElement("INPUT"),a.name=s,a.value=p.a.X(p.a.d(b[s])),l.appendChild(a);for(s in e)a=document.createElement("INPUT"),
a.name=s,a.value=e[s],l.appendChild(a);document.body.appendChild(l);d.submitter?d.submitter(l):l.submit();setTimeout(function(){l.parentNode.removeChild(l)},0)}}};p.b("ko.utils",p.a);p.b("ko.utils.arrayForEach",p.a.h);p.b("ko.utils.arrayFirst",p.a.xa);p.b("ko.utils.arrayFilter",p.a.K);p.b("ko.utils.arrayGetDistinctValues",p.a.ba);p.b("ko.utils.arrayIndexOf",p.a.g);p.b("ko.utils.arrayMap",p.a.L);p.b("ko.utils.arrayPushAll",p.a.z);p.b("ko.utils.arrayRemoveItem",p.a.M);
p.b("ko.utils.fieldsIncludedWithJsonPost",p.a.ca);p.b("ko.utils.getElementsHavingAttribute",p.a.da);p.b("ko.utils.getFormFields",p.a.ea);p.b("ko.utils.postJson",p.a.Ta);p.b("ko.utils.parseJson",p.a.F);p.b("ko.utils.registerEventHandler",p.a.t);p.b("ko.utils.stringifyJson",p.a.X);p.b("ko.utils.range",p.a.Ua);p.b("ko.utils.toggleDomNodeCssClass",p.a.pa);p.b("ko.utils.triggerEvent",p.a.qa);p.b("ko.utils.unwrapObservable",p.a.d);
Function.prototype.bind||(Function.prototype.bind=function(e){var d=this,b=Array.prototype.slice.call(arguments),e=b.shift();return function(){return d.apply(e,b.concat(Array.prototype.slice.call(arguments)))}});
p.a.e=new function(){var e=0,d="__ko__"+(new Date).getTime(),b={};return{get:function(a,b){var d=p.a.e.getAll(a,!1);return d===n?n:d[b]},set:function(a,b,d){d===n&&p.a.e.getAll(a,!1)===n||(p.a.e.getAll(a,!0)[b]=d)},getAll:function(a,g){var h=a[d];if(!h){if(!g)return;h=a[d]="ko"+e++;b[h]={}}return b[h]},clear:function(a){var e=a[d];e&&(delete b[e],a[d]=o)}}};
p.a.p=new function(){function e(a,d){var e=p.a.e.get(a,b);e===n&&d&&(e=[],p.a.e.set(a,b,e));return e}function d(a){var b=e(a,!1);if(b)for(var b=b.slice(0),d=0;d<b.length;d++)b[d](a);p.a.e.clear(a);typeof jQuery=="function"&&typeof jQuery.cleanData=="function"&&jQuery.cleanData([a])}var b="__ko_domNodeDisposal__"+(new Date).getTime();return{aa:function(a,b){typeof b!="function"&&c(Error("Callback must be a function"));e(a,!0).push(b)},ja:function(a,d){var h=e(a,!1);h&&(p.a.M(h,d),h.length==0&&p.a.e.set(a,
b,n))},u:function(a){if(!(a.nodeType!=1&&a.nodeType!=9)){d(a);var b=[];p.a.z(b,a.getElementsByTagName("*"));for(var a=0,e=b.length;a<e;a++)d(b[a])}},removeNode:function(a){p.u(a);a.parentNode&&a.parentNode.removeChild(a)}}};p.u=p.a.p.u;p.removeNode=p.a.p.removeNode;p.b("ko.cleanNode",p.u);p.b("ko.removeNode",p.removeNode);p.b("ko.utils.domNodeDisposal",p.a.p);p.b("ko.utils.domNodeDisposal.addDisposeCallback",p.a.p.aa);p.b("ko.utils.domNodeDisposal.removeDisposeCallback",p.a.p.ja);
p.a.Sa=function(e){if(typeof jQuery!="undefined")e=jQuery.clean([e]);else{var d=p.a.k(e).toLowerCase(),b=document.createElement("div"),d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];for(b.innerHTML=d[1]+e+d[2];d[0]--;)b=b.lastChild;e=p.a.T(b.childNodes)}return e};
p.a.Ya=function(e,d){p.a.P(e);if(d!==o&&d!==n)if(typeof d!="string"&&(d=d.toString()),typeof jQuery!="undefined")jQuery(e).html(d);else for(var b=p.a.Sa(d),a=0;a<b.length;a++)e.appendChild(b[a])};
p.l=function(){function e(){return((1+Math.random())*4294967296|0).toString(16).substring(1)}function d(a,b){if(a)if(a.nodeType==8){var e=p.l.ha(a.nodeValue);e!=o&&b.push({Da:a,Pa:e})}else if(a.nodeType==1)for(var e=0,f=a.childNodes,i=f.length;e<i;e++)d(f[e],b)}var b={};return{U:function(a){typeof a!="function"&&c(Error("You can only pass a function to ko.memoization.memoize()"));var d=e()+e();b[d]=a;return"<\!--[ko_memo:"+d+"]--\>"},ra:function(a,d){var e=b[a];e===n&&c(Error("Couldn't find any memo with ID "+
a+". Perhaps it's already been unmemoized."));try{return e.apply(o,d||[]),!0}finally{delete b[a]}},sa:function(a,b){var e=[];d(a,e);for(var f=0,i=e.length;f<i;f++){var j=e[f].Da,k=[j];b&&p.a.z(k,b);p.l.ra(e[f].Pa,k);j.nodeValue="";j.parentNode&&j.parentNode.removeChild(j)}},ha:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:o}}}();p.b("ko.memoization",p.l);p.b("ko.memoization.memoize",p.l.U);p.b("ko.memoization.unmemoize",p.l.ra);p.b("ko.memoization.parseMemoText",p.l.ha);
p.b("ko.memoization.unmemoizeDomNodeAndDescendants",p.l.sa);p.$a=function(e,d){this.za=e;this.n=function(){this.La=!0;d()}.bind(this);p.i(this,"dispose",this.n)};p.Y=function(){var e=[];this.Z=function(d,b){var a=b?d.bind(b):d,g=new p.$a(a,function(){p.a.M(e,g)});e.push(g);return g};this.w=function(d){p.a.h(e.slice(0),function(b){b&&b.La!==!0&&b.za(d)})};this.Ja=function(){return e.length};p.i(this,"subscribe",this.Z);p.i(this,"notifySubscribers",this.w);p.i(this,"getSubscriptionsCount",this.Ja)};
p.ga=function(e){return typeof e.Z=="function"&&typeof e.w=="function"};p.b("ko.subscribable",p.Y);p.b("ko.isSubscribable",p.ga);p.A=function(){var e=[];return{ya:function(){e.push([])},end:function(){return e.pop()},ia:function(d){p.ga(d)||c("Only subscribable things can act as dependencies");e.length>0&&e[e.length-1].push(d)}}}();var v={undefined:!0,"boolean":!0,number:!0,string:!0};function w(e,d){return e===o||typeof e in v?e===d:!1}
p.s=function(e){function d(){if(arguments.length>0){if(!d.equalityComparer||!d.equalityComparer(b,arguments[0]))b=arguments[0],d.w(b);return this}else return p.A.ia(d),b}var b=e;d.o=p.s;d.H=function(){d.w(b)};d.equalityComparer=w;p.Y.call(d);p.i(d,"valueHasMutated",d.H);return d};p.C=function(e){if(e===o||e===n||e.o===n)return!1;if(e.o===p.s)return!0;return p.C(e.o)};p.D=function(e){if(typeof e=="function"&&e.o===p.s)return!0;if(typeof e=="function"&&e.o===p.j&&e.Ka)return!0;return!1};
p.b("ko.observable",p.s);p.b("ko.isObservable",p.C);p.b("ko.isWriteableObservable",p.D);
p.Ra=function(e){arguments.length==0&&(e=[]);e!==o&&e!==n&&!("length"in e)&&c(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var d=new p.s(e);p.a.h(["pop","push","reverse","shift","sort","splice","unshift"],function(b){d[b]=function(){var a=d(),a=a[b].apply(a,arguments);d.H();return a}});p.a.h(["slice"],function(b){d[b]=function(){var a=d();return a[b].apply(a,arguments)}});d.remove=function(b){for(var a=d(),e=[],h=[],f=typeof b=="function"?
b:function(a){return a===b},i=0,j=a.length;i<j;i++){var k=a[i];f(k)?h.push(k):e.push(k)}d(e);return h};d.Va=function(b){if(b===n){var a=d();d([]);return a}if(!b)return[];return d.remove(function(a){return p.a.g(b,a)>=0})};d.N=function(b){for(var a=d(),e=typeof b=="function"?b:function(a){return a===b},h=a.length-1;h>=0;h--)e(a[h])&&(a[h]._destroy=!0);d.H()};d.Ca=function(b){if(b===n)return d.N(function(){return!0});if(!b)return[];return d.N(function(a){return p.a.g(b,a)>=0})};d.indexOf=function(b){var a=
d();return p.a.g(a,b)};d.replace=function(b,a){var e=d.indexOf(b);e>=0&&(d()[e]=a,d.H())};p.i(d,"remove",d.remove);p.i(d,"removeAll",d.Va);p.i(d,"destroy",d.N);p.i(d,"destroyAll",d.Ca);p.i(d,"indexOf",d.indexOf);return d};p.b("ko.observableArray",p.Ra);
p.j=function(e,d,b){function a(){p.a.h(l,function(a){a.n()});l=[]}function g(b){a();p.a.h(b,function(a){l.push(a.Z(h))})}function h(){if(j&&typeof b.disposeWhen=="function"&&b.disposeWhen())f.n();else{try{p.A.ya(),i=b.owner?b.read.call(b.owner):b.read()}finally{var a=p.a.ba(p.A.end());g(a)}f.w(i);j=!0}}function f(){if(arguments.length>0)if(typeof b.write==="function"){var a=arguments[0];b.owner?b.write.call(b.owner,a):b.write(a)}else c("Cannot write a value to a dependentObservable unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
else return j||h(),p.A.ia(f),i}var i,j=!1;e&&typeof e=="object"?b=e:(b=b||{},b.read=e||b.read,b.owner=d||b.owner);typeof b.read!="function"&&c("Pass a function that returns the value of the dependentObservable");var k=typeof b.disposeWhenNodeIsRemoved=="object"?b.disposeWhenNodeIsRemoved:o,m=o;if(k){m=function(){f.n()};p.a.p.aa(k,m);var q=b.disposeWhen;b.disposeWhen=function(){return!p.a.O(k)||typeof q=="function"&&q()}}var l=[];f.o=p.j;f.Ia=function(){return l.length};f.Ka=typeof b.write==="function";
f.n=function(){k&&p.a.p.ja(k,m);a()};p.Y.call(f);b.deferEvaluation!==!0&&h();p.i(f,"dispose",f.n);p.i(f,"getDependenciesCount",f.Ia);return f};p.j.o=p.s;p.b("ko.dependentObservable",p.j);
(function(){function e(a,g,h){h=h||new b;a=g(a);if(!(typeof a=="object"&&a!==o&&a!==n))return a;var f=a instanceof Array?[]:{};h.save(a,f);d(a,function(b){var d=g(a[b]);switch(typeof d){case "boolean":case "number":case "string":case "function":f[b]=d;break;case "object":case "undefined":var k=h.get(d);f[b]=k!==n?k:e(d,g,h)}});return f}function d(a,b){if(a instanceof Array)for(var d=0;d<a.length;d++)b(d);else for(d in a)b(d)}function b(){var a=[],b=[];this.save=function(d,e){var i=p.a.g(a,d);i>=0?
b[i]=e:(a.push(d),b.push(e))};this.get=function(d){d=p.a.g(a,d);return d>=0?b[d]:n}}p.oa=function(a){arguments.length==0&&c(Error("When calling ko.toJS, pass the object you want to convert."));return e(a,function(a){for(var b=0;p.C(a)&&b<10;b++)a=a();return a})};p.toJSON=function(a){a=p.oa(a);return p.a.X(a)}})();p.b("ko.toJS",p.oa);p.b("ko.toJSON",p.toJSON);
p.f={m:function(e){if(e.tagName=="OPTION"){if(e.__ko__hasDomDataOptionValue__===!0)return p.a.e.get(e,p.c.options.V);return e.getAttribute("value")}else return e.tagName=="SELECT"?e.selectedIndex>=0?p.f.m(e.options[e.selectedIndex]):n:e.value},I:function(e,d){if(e.tagName=="OPTION")switch(typeof d){case "string":case "number":p.a.e.set(e,p.c.options.V,n);"__ko__hasDomDataOptionValue__"in e&&delete e.__ko__hasDomDataOptionValue__;e.value=d;break;default:p.a.e.set(e,p.c.options.V,d),e.__ko__hasDomDataOptionValue__=
!0,e.value=""}else if(e.tagName=="SELECT")for(var b=e.options.length-1;b>=0;b--){if(p.f.m(e.options[b])==d){e.selectedIndex=b;break}}else{if(d===o||d===n)d="";e.value=d}}};p.b("ko.selectExtensions",p.f);p.b("ko.selectExtensions.readValue",p.f.m);p.b("ko.selectExtensions.writeValue",p.f.I);
p.r=function(){function e(a,b){return a.replace(d,function(a,d){return b[d]})}var d=/\[ko_token_(\d+)\]/g,b=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,a=["true","false"];return{F:function(a){a=p.a.k(a);if(a.length<3)return{};for(var b=[],d=o,i,j=a.charAt(0)=="{"?1:0;j<a.length;j++){var k=a.charAt(j);if(d===o)switch(k){case '"':case "'":case "/":d=j;i=k;break;case "{":d=j;i="}";break;case "[":d=j,i="]"}else if(k==i){k=a.substring(d,j+1);b.push(k);var m="[ko_token_"+(b.length-
1)+"]",a=a.substring(0,d)+m+a.substring(j+1);j-=k.length-m.length;d=o}}d={};a=a.split(",");i=0;for(j=a.length;i<j;i++){var m=a[i],q=m.indexOf(":");q>0&&q<m.length-1&&(k=p.a.k(m.substring(0,q)),m=p.a.k(m.substring(q+1)),k.charAt(0)=="{"&&(k=k.substring(1)),m.charAt(m.length-1)=="}"&&(m=m.substring(0,m.length-1)),k=p.a.k(e(k,b)),m=p.a.k(e(m,b)),d[k]=m)}return d},Q:function(d){var e=p.r.F(d),f=[],i;for(i in e){var j=e[i],k;k=j;k=p.a.g(a,p.a.k(k).toLowerCase())>=0?!1:k.match(b)!==o;k&&(f.length>0&&f.push(", "),
f.push(i+" : function(__ko_value) { "+j+" = __ko_value; }"))}f.length>0&&(d=d+", '_ko_property_writers' : { "+f.join("")+" } ");return d}}}();p.b("ko.jsonExpressionRewriting",p.r);p.b("ko.jsonExpressionRewriting.parseJson",p.r.F);p.b("ko.jsonExpressionRewriting.insertPropertyAccessorsIntoJson",p.r.Q);p.c={};
p.J=function(e,d,b,a){function g(a){return function(){return i[a]}}function h(){return i}var f=!0,a=a||"data-bind",i;new p.j(function(){var j;if(!(j=typeof d=="function"?d():d)){var k=e.getAttribute(a);try{var m=" { "+p.r.Q(k)+" } ";j=p.a.Ha(m,b===o?window:b)}catch(q){c(Error("Unable to parse binding attribute.\nMessage: "+q+";\nAttribute value: "+k))}}i=j;if(f)for(var l in i)p.c[l]&&typeof p.c[l].init=="function"&&(0,p.c[l].init)(e,g(l),h,b);for(l in i)p.c[l]&&typeof p.c[l].update=="function"&&(0,p.c[l].update)(e,
g(l),h,b)},o,{disposeWhenNodeIsRemoved:e});f=!1};p.ua=function(e,d){d&&d.nodeType==n&&c(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node (note: this is a breaking change since KO version 1.05)"));var d=d||window.document.body,b=p.a.da(d,"data-bind");p.a.h(b,function(a){p.J(a,o,e)})};p.b("ko.bindingHandlers",p.c);p.b("ko.applyBindings",p.ua);p.b("ko.applyBindingsToNode",p.J);
p.a.h(["click"],function(e){p.c[e]={init:function(d,b,a,g){return p.c.event.init.call(this,d,function(){var a={};a[e]=b();return a},a,g)}}});p.c.event={init:function(e,d,b,a){var g=d()||{},h;for(h in g)(function(){var g=h;typeof g=="string"&&p.a.t(e,g,function(e){var h,k=d()[g],m=b();try{h=k.apply(a,arguments)}finally{if(h!==!0)e.preventDefault?e.preventDefault():e.returnValue=!1}if(m[g+"Bubble"]===!1)e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()})})()}};
p.c.submit={init:function(e,d,b,a){typeof d()!="function"&&c(Error("The value for a submit binding must be a function to invoke on submit"));p.a.t(e,"submit",function(b){var h,f=d();try{h=f.call(a,e)}finally{if(h!==!0)b.preventDefault?b.preventDefault():b.returnValue=!1}})}};p.c.visible={update:function(e,d){var b=p.a.d(d()),a=e.style.display!="none";if(b&&!a)e.style.display="";else if(!b&&a)e.style.display="none"}};
p.c.enable={update:function(e,d){var b=p.a.d(d());if(b&&e.disabled)e.removeAttribute("disabled");else if(!b&&!e.disabled)e.disabled=!0}};p.c.disable={update:function(e,d){p.c.enable.update(e,function(){return!p.a.d(d())})}};
p.c.value={init:function(e,d,b){var a=b().valueUpdate||"change",g=!1;p.a.Za(a,"after")&&(g=!0,a=a.substring(5));var h=g?function(a){setTimeout(a,0)}:function(a){a()};p.a.t(e,a,function(){h(function(){var a=d(),g=p.f.m(e);p.D(a)?a(g):(a=b(),a._ko_property_writers&&a._ko_property_writers.value&&a._ko_property_writers.value(g))})})},update:function(e,d){var b=p.a.d(d()),a=p.f.m(e),g=b!=a;b===0&&a!==0&&a!=="0"&&(g=!0);g&&(a=function(){p.f.I(e,b)},a(),e.tagName=="SELECT"&&setTimeout(a,0));e.tagName=="SELECT"&&
(a=p.f.m(e),a!==b&&p.a.qa(e,"change"))}};
p.c.options={update:function(e,d,b){e.tagName!="SELECT"&&c(Error("options binding applies only to SELECT elements"));var a=p.a.L(p.a.K(e.childNodes,function(a){return a.tagName&&a.tagName=="OPTION"&&a.selected}),function(a){return p.f.m(a)||a.innerText||a.textContent}),g=e.scrollTop,h=p.a.d(d());p.a.P(e);if(h){var f=b();typeof h.length!="number"&&(h=[h]);if(f.optionsCaption){var i=document.createElement("OPTION");i.innerHTML=f.optionsCaption;p.f.I(i,n);e.appendChild(i)}b=0;for(d=h.length;b<d;b++){var i=
document.createElement("OPTION"),j=typeof f.optionsValue=="string"?h[b][f.optionsValue]:h[b],k=f.optionsText;optionText=typeof k=="function"?k(h[b]):typeof k=="string"?h[b][k]:j;j=p.a.d(j);optionText=p.a.d(optionText);p.f.I(i,j);i.innerHTML=optionText.toString();e.appendChild(i)}h=e.getElementsByTagName("OPTION");b=f=0;for(d=h.length;b<d;b++)p.a.g(a,p.f.m(h[b]))>=0&&(p.a.ma(h[b],!0),f++);if(g)e.scrollTop=g}}};p.c.options.V="__ko.bindingHandlers.options.optionValueDomData__";
p.c.selectedOptions={fa:function(e){for(var d=[],e=e.childNodes,b=0,a=e.length;b<a;b++){var g=e[b];g.tagName=="OPTION"&&g.selected&&d.push(p.f.m(g))}return d},init:function(e,d,b){p.a.t(e,"change",function(){var a=d();p.D(a)?a(p.c.selectedOptions.fa(this)):(a=b(),a._ko_property_writers&&a._ko_property_writers.value&&a._ko_property_writers.value(p.c.selectedOptions.fa(this)))})},update:function(e,d){e.tagName!="SELECT"&&c(Error("values binding applies only to SELECT elements"));var b=p.a.d(d());if(b&&
typeof b.length=="number")for(var a=e.childNodes,g=0,h=a.length;g<h;g++){var f=a[g];f.tagName=="OPTION"&&p.a.ma(f,p.a.g(b,p.f.m(f))>=0)}}};p.c.text={update:function(e,d){var b=p.a.d(d());if(b===o||b===n)b="";typeof e.innerText=="string"?e.innerText=b:e.textContent=b}};p.c.html={update:function(e,d){var b=p.a.d(d());p.a.Ya(e,b)}};p.c.css={update:function(e,d){var b=p.a.d(d()||{}),a;for(a in b)if(typeof a=="string"){var g=p.a.d(b[a]);p.a.pa(e,a,g)}}};
p.c.style={update:function(e,d){var b=p.a.d(d()||{}),a;for(a in b)if(typeof a=="string"){var g=p.a.d(b[a]);e.style[a]=g||""}}};p.c.uniqueName={init:function(e,d){if(d())e.name="ko_unique_"+ ++p.c.uniqueName.Ba,p.a.R&&e.mergeAttributes(document.createElement("<input name='"+e.name+"'/>"),!1)}};p.c.uniqueName.Ba=0;
p.c.checked={init:function(e,d,b){p.a.t(e,"click",function(){var a;if(e.type=="checkbox")a=e.checked;else if(e.type=="radio"&&e.checked)a=e.value;else return;var g=d();e.type=="checkbox"&&p.a.d(g)instanceof Array?(a=p.a.g(p.a.d(g),e.value),e.checked&&a<0?g.push(e.value):!e.checked&&a>=0&&g.splice(a,1)):p.D(g)?g()!==a&&g(a):(g=b(),g._ko_property_writers&&g._ko_property_writers.checked&&g._ko_property_writers.checked(a))});e.type=="radio"&&!e.name&&p.c.uniqueName.init(e,function(){return!0})},update:function(e,
d){var b=p.a.d(d());if(e.type=="checkbox")e.checked=b instanceof Array?p.a.g(b,e.value)>=0:b,b&&p.a.R&&e.mergeAttributes(document.createElement("<input type='checkbox' checked='checked' />"),!1);else if(e.type=="radio")e.checked=e.value==b,e.value==b&&(p.a.R||p.a.Ma)&&e.mergeAttributes(document.createElement("<input type='radio' checked='checked' />"),!1)}};
p.c.attr={update:function(e,d){var b=p.a.d(d())||{},a;for(a in b)if(typeof a=="string"){var g=p.a.d(b[a]);g===!1||g===o||g===n?e.removeAttribute(a):e.setAttribute(a,g.toString())}}};
p.$=function(){this.renderTemplate=function(){c("Override renderTemplate in your ko.templateEngine subclass")};this.isTemplateRewritten=function(){c("Override isTemplateRewritten in your ko.templateEngine subclass")};this.rewriteTemplate=function(){c("Override rewriteTemplate in your ko.templateEngine subclass")};this.createJavaScriptEvaluatorBlock=function(){c("Override createJavaScriptEvaluatorBlock in your ko.templateEngine subclass")}};p.b("ko.templateEngine",p.$);
p.G=function(){var e=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi;return{Ga:function(d,b){b.isTemplateRewritten(d)||b.rewriteTemplate(d,function(a){return p.G.Qa(a,b)})},Qa:function(d,b){return d.replace(e,function(a,d,e,f,i,j,k){a=p.r.Q(k);return b.createJavaScriptEvaluatorBlock("ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {                     return (function() { return { "+a+" } })()                 })")+d})},
va:function(d){return p.l.U(function(b,a){b.nextSibling&&p.J(b.nextSibling,d,a)})}}}();p.b("ko.templateRewriting",p.G);p.b("ko.templateRewriting.applyMemoizedBindingsToNextSibling",p.G.va);
(function(){function e(b,a,e,h,f){var i=p.a.d(h),f=f||{},j=f.templateEngine||d;p.G.Ga(e,j);e=j.renderTemplate(e,i,f);(typeof e.length!="number"||e.length>0&&typeof e[0].nodeType!="number")&&c("Template engine must return an array of DOM nodes");e&&p.a.h(e,function(a){p.l.sa(a,[h])});switch(a){case "replaceChildren":p.a.Xa(b,e);break;case "replaceNode":p.a.ka(b,e);break;case "ignoreTargetNode":break;default:c(Error("Unknown renderMode: "+a))}f.afterRender&&f.afterRender(e,h);return e}var d;p.na=function(b){b!=
n&&!(b instanceof p.$)&&c("templateEngine must inherit from ko.templateEngine");d=b};p.W=function(b,a,g,h,f){g=g||{};(g.templateEngine||d)==n&&c("Set a template engine before calling renderTemplate");f=f||"replaceChildren";if(h){var i=h.nodeType?h:h.length>0?h[0]:o;return new p.j(function(){var d=typeof b=="function"?b(a):b,d=e(h,f,d,a,g);f=="replaceNode"&&(h=d,i=h.nodeType?h:h.length>0?h[0]:o)},o,{disposeWhen:function(){return!i||!p.a.O(i)},disposeWhenNodeIsRemoved:i&&f=="replaceNode"?i.parentNode:
i})}else return p.l.U(function(d){p.W(b,a,g,d,"replaceNode")})};p.Wa=function(b,a,d,h){return new p.j(function(){var f=p.a.d(a)||[];typeof f.length=="undefined"&&(f=[f]);f=p.a.K(f,function(a){return d.includeDestroyed||!a._destroy});p.a.la(h,f,function(a){var f=typeof b=="function"?b(a):b;return e(o,"ignoreTargetNode",f,a,d)},d)},o,{disposeWhenNodeIsRemoved:h})};p.c.template={update:function(b,a,d,e){a=p.a.d(a());d=typeof a=="string"?a:a.name;if(typeof a.foreach!="undefined")e=p.Wa(d,a.foreach||[],
{templateOptions:a.templateOptions,afterAdd:a.afterAdd,beforeRemove:a.beforeRemove,includeDestroyed:a.includeDestroyed,afterRender:a.afterRender},b);else var f=a.data,e=p.W(d,typeof f=="undefined"?e:f,{templateOptions:a.templateOptions,afterRender:a.afterRender},b);(a=p.a.e.get(b,"__ko__templateSubscriptionDomDataKey__"))&&typeof a.n=="function"&&a.n();p.a.e.set(b,"__ko__templateSubscriptionDomDataKey__",e)}}})();p.b("ko.setTemplateEngine",p.na);p.b("ko.renderTemplate",p.W);
p.a.v=function(e,d,b){if(b===n)return p.a.v(e,d,1)||p.a.v(e,d,10)||p.a.v(e,d,Number.MAX_VALUE);else{for(var e=e||[],d=d||[],a=e,g=d,h=[],f=0;f<=g.length;f++)h[f]=[];for(var f=0,i=Math.min(a.length,b);f<=i;f++)h[0][f]=f;f=1;for(i=Math.min(g.length,b);f<=i;f++)h[f][0]=f;for(var i=a.length,j,k=g.length,f=1;f<=i;f++){var m=Math.min(k,f+b);for(j=Math.max(1,f-b);j<=m;j++)h[j][f]=a[f-1]===g[j-1]?h[j-1][f-1]:Math.min(h[j-1][f]===n?Number.MAX_VALUE:h[j-1][f]+1,h[j][f-1]===n?Number.MAX_VALUE:h[j][f-1]+1)}b=
e.length;a=d.length;g=[];f=h[a][b];if(f===n)h=o;else{for(;b>0||a>0;){i=h[a][b];j=a>0?h[a-1][b]:f+1;k=b>0?h[a][b-1]:f+1;m=a>0&&b>0?h[a-1][b-1]:f+1;if(j===n||j<i-1)j=f+1;if(k===n||k<i-1)k=f+1;m<i-1&&(m=f+1);j<=k&&j<m?(g.push({status:"added",value:d[a-1]}),a--):(k<j&&k<m?g.push({status:"deleted",value:e[b-1]}):(g.push({status:"retained",value:e[b-1]}),a--),b--)}h=g.reverse()}return h}};p.b("ko.utils.compareArrays",p.a.v);
(function(){function e(d,b,a){var e=[],d=p.j(function(){var d=b(a)||[];e.length>0&&p.a.ka(e,d);e.splice(0,e.length);p.a.z(e,d)},o,{disposeWhenNodeIsRemoved:d,disposeWhen:function(){return e.length==0||!p.a.O(e[0])}});return{Oa:e,j:d}}p.a.la=function(d,b,a,g){for(var b=b||[],g=g||{},h=p.a.e.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===n,f=p.a.e.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=p.a.L(f,function(a){return a.wa}),j=p.a.v(i,b),b=[],k=0,m=[],i=[],q=
o,l=0,s=j.length;l<s;l++)switch(j[l].status){case "retained":var r=f[k];b.push(r);r.B.length>0&&(q=r.B[r.B.length-1]);k++;break;case "deleted":f[k].j.n();p.a.h(f[k].B,function(a){m.push({element:a,index:l,value:j[l].value});q=a});k++;break;case "added":var t=e(d,a,j[l].value),r=t.Oa;b.push({wa:j[l].value,B:r,j:t.j});for(var t=0,x=r.length;t<x;t++){var u=r[t];i.push({element:u,index:l,value:j[l].value});q==o?d.firstChild?d.insertBefore(u,d.firstChild):d.appendChild(u):q.nextSibling?d.insertBefore(u,
q.nextSibling):d.appendChild(u);q=u}}p.a.h(m,function(a){p.u(a.element)});a=!1;if(!h){if(g.afterAdd)for(l=0;l<i.length;l++)g.afterAdd(i[l].element,i[l].index,i[l].value);if(g.beforeRemove){for(l=0;l<m.length;l++)g.beforeRemove(m[l].element,m[l].index,m[l].value);a=!0}}a||p.a.h(m,function(a){a.element.parentNode&&a.element.parentNode.removeChild(a.element)});p.a.e.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",b)}})();p.b("ko.utils.setDomNodeChildrenFromArrayMapping",p.a.la);
p.S=function(){this.q=function(){if(typeof jQuery=="undefined"||!jQuery.tmpl)return 0;if(jQuery.tmpl.tag){if(jQuery.tmpl.tag.tmpl&&jQuery.tmpl.tag.tmpl.open&&jQuery.tmpl.tag.tmpl.open.toString().indexOf("__")>=0)return 3;return 2}return 1}();this.getTemplateNode=function(d){var b=document.getElementById(d);b==o&&c(Error("Cannot find template with ID="+d));return b};var e=RegExp("__ko_apos__","g");this.renderTemplate=function(d,b,a){a=a||{};this.q==0&&c(Error("jquery.tmpl not detected.\nTo use KO's default template engine, reference jQuery and jquery.tmpl. See Knockout installation documentation for more details."));
if(this.q==1)return d='<script type="text/html">'+this.getTemplateNode(d).text+"<\/script>",b=jQuery.tmpl(d,b)[0].text.replace(e,"'"),jQuery.clean([b],document);if(!(d in jQuery.template)){var g=this.getTemplateNode(d).text;jQuery.template(d,g)}b=[b];b=jQuery.tmpl(d,b,a.templateOptions);b.appendTo(document.createElement("div"));jQuery.fragments={};return b};this.isTemplateRewritten=function(d){if(d in jQuery.template)return!0;return this.getTemplateNode(d).Na===!0};this.rewriteTemplate=function(d,
b){var a=this.getTemplateNode(d),e=b(a.text);this.q==1&&(e=p.a.k(e),e=e.replace(/([\s\S]*?)(\${[\s\S]*?}|{{[\=a-z][\s\S]*?}}|$)/g,function(a,b,d){return b.replace(/\'/g,"__ko_apos__")+d}));a.text=e;a.Na=!0};this.createJavaScriptEvaluatorBlock=function(d){if(this.q==1)return"{{= "+d+"}}";return"{{ko_code ((function() { return "+d+" })()) }}"};this.ta=function(d,b){document.write("<script type='text/html' id='"+d+"'>"+b+"<\/script>")};p.i(this,"addTemplate",this.ta);this.q>1&&(jQuery.tmpl.tag.ko_code=
{open:(this.q<3?"_":"__")+".push($1 || '');"})};p.S.prototype=new p.$;p.na(new p.S);p.b("ko.jqueryTmplTemplateEngine",p.S);
})(window);                  