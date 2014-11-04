/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
    f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
    {for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
// SignalBinding -------------------------------------------------
//================================================================

/**
 * Object that represents a binding between a Signal and a listener function.
 * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
 * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
 * @author Miller Medeiros
 * @constructor
 * @internal
 * @name SignalBinding
 * @param {Signal} signal Reference to Signal object that listener is currently bound to.
 * @param {Function} listener Handler function bound to the signal.
 * @param {boolean} isOnce If binding should be executed just once.
 * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
 * @param {Number} [priority] The priority level of the event listener. (default = 0).
 */
function SignalBinding(signal, listener, isOnce, listenerContext, priority) {

    /**
     * Handler function bound to the signal.
     * @type Function
     * @private
     */
    this._listener = listener;

    /**
     * If binding should be executed just once.
     * @type boolean
     * @private
     */
    this._isOnce = isOnce;

    /**
     * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @memberOf SignalBinding.prototype
     * @name context
     * @type Object|undefined|null
     */
    this.context = listenerContext;

    /**
     * Reference to Signal object that listener is currently bound to.
     * @type Signal
     * @private
     */
    this._signal = signal;

    /**
     * Listener priority
     * @type Number
     * @private
     */
    this._priority = priority || 0;
}

SignalBinding.prototype = {

    /**
     * If binding is active and should be executed.
     * @type boolean
     */
    active : true,

    /**
     * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
     * @type Array|null
     */
    params : null,

    /**
     * Call listener passing arbitrary parameters.
     * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
     * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
     * @return {*} Value returned by the listener.
     */
    execute : function (paramsArr) {
        var handlerReturn, params;
        if (this.active && !!this._listener) {
            params = this.params? this.params.concat(paramsArr) : paramsArr;
            handlerReturn = this._listener.apply(this.context, params);
            if (this._isOnce) {
                this.detach();
            }
        }
        return handlerReturn;
    },

    /**
     * Detach binding from signal.
     * - alias to: mySignal.remove(myBinding.getListener());
     * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
     */
    detach : function () {
        return this.isBound()? this._signal.remove(this._listener, this.context) : null;
    },

    /**
     * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
     */
    isBound : function () {
        return (!!this._signal && !!this._listener);
    },

    /**
     * @return {boolean} If SignalBinding will only be executed once.
     */
    isOnce : function () {
        return this._isOnce;
    },

    /**
     * @return {Function} Handler function bound to the signal.
     */
    getListener : function () {
        return this._listener;
    },

    /**
     * @return {Signal} Signal that listener is currently bound to.
     */
    getSignal : function () {
        return this._signal;
    },

    /**
     * Delete instance properties
     * @private
     */
    _destroy : function () {
        delete this._signal;
        delete this._listener;
        delete this.context;
    },

    /**
     * @return {string} String representation of the object.
     */
    toString : function () {
        return '[SignalBinding isOnce:' + this._isOnce +', isBound:'+ this.isBound() +', active:' + this.active + ']';
    }

};

/*global SignalBinding:false*/

// Signal --------------------------------------------------------
//================================================================

function validateListener(listener, fnName) {
    if (typeof listener !== 'function') {
        throw new Error( 'listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName) );
    }
}

/**
 * Custom event broadcaster
 * <br />- inspired by Robert Penner's AS3 Signals.
 * @name Signal
 * @author Miller Medeiros
 * @constructor
 */
function Signal() {
    /**
     * @type Array.<SignalBinding>
     * @private
     */
    this._bindings = [];
    this._prevParams = null;

    // enforce dispatch to aways work on same context (#47)
    var self = this;
    this.dispatch = function(){
        Signal.prototype.dispatch.apply(self, arguments);
    };
}

Signal.prototype = {

    /**
     * Signals Version Number
     * @type String
     * @const
     */
    VERSION : '::VERSION_NUMBER::',

    /**
     * If Signal should keep record of previously dispatched parameters and
     * automatically execute listener during `add()`/`addOnce()` if Signal was
     * already dispatched before.
     * @type boolean
     */
    memorize : false,

    /**
     * @type boolean
     * @private
     */
    _shouldPropagate : true,

    /**
     * If Signal is active and should broadcast events.
     * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
     * @type boolean
     */
    active : true,

    /**
     * @param {Function} listener
     * @param {boolean} isOnce
     * @param {Object} [listenerContext]
     * @param {Number} [priority]
     * @return {SignalBinding}
     * @private
     */
    _registerListener : function (listener, isOnce, listenerContext, priority) {

        var prevIndex = this._indexOfListener(listener, listenerContext),
            binding;

        if (prevIndex !== -1) {
            binding = this._bindings[prevIndex];
            if (binding.isOnce() !== isOnce) {
                throw new Error('You cannot add'+ (isOnce? '' : 'Once') +'() then add'+ (!isOnce? '' : 'Once') +'() the same listener without removing the relationship first.');
            }
        } else {
            binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
            this._addBinding(binding);
        }

        if(this.memorize && this._prevParams){
            binding.execute(this._prevParams);
        }

        return binding;
    },

    /**
     * @param {SignalBinding} binding
     * @private
     */
    _addBinding : function (binding) {
        //simplified insertion sort
        var n = this._bindings.length;
        do { --n; } while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
        this._bindings.splice(n + 1, 0, binding);
    },

    /**
     * @param {Function} listener
     * @return {number}
     * @private
     */
    _indexOfListener : function (listener, context) {
        var n = this._bindings.length,
            cur;
        while (n--) {
            cur = this._bindings[n];
            if (cur._listener === listener && cur.context === context) {
                return n;
            }
        }
        return -1;
    },

    /**
     * Check if listener was attached to Signal.
     * @param {Function} listener
     * @param {Object} [context]
     * @return {boolean} if Signal has the specified listener.
     */
    has : function (listener, context) {
        return this._indexOfListener(listener, context) !== -1;
    },

    /**
     * Add a listener to the signal.
     * @param {Function} listener Signal handler function.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
     * @return {SignalBinding} An Object representing the binding between the Signal and listener.
     */
    add : function (listener, listenerContext, priority) {
        validateListener(listener, 'add');
        return this._registerListener(listener, false, listenerContext, priority);
    },

    /**
     * Add listener to the signal that should be removed after first execution (will be executed only once).
     * @param {Function} listener Signal handler function.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
     * @return {SignalBinding} An Object representing the binding between the Signal and listener.
     */
    addOnce : function (listener, listenerContext, priority) {
        validateListener(listener, 'addOnce');
        return this._registerListener(listener, true, listenerContext, priority);
    },

    /**
     * Remove a single listener from the dispatch queue.
     * @param {Function} listener Handler function that should be removed.
     * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
     * @return {Function} Listener handler function.
     */
    remove : function (listener, context) {
        validateListener(listener, 'remove');

        var i = this._indexOfListener(listener, context);
        if (i !== -1) {
            this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
            this._bindings.splice(i, 1);
        }
        return listener;
    },

    /**
     * Remove all listeners from the Signal.
     */
    removeAll : function () {
        var n = this._bindings.length;
        while (n--) {
            this._bindings[n]._destroy();
        }
        this._bindings.length = 0;
    },

    /**
     * @return {number} Number of listeners attached to the Signal.
     */
    getNumListeners : function () {
        return this._bindings.length;
    },

    /**
     * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
     * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
     * @see Signal.prototype.disable
     */
    halt : function () {
        this._shouldPropagate = false;
    },

    /**
     * Dispatch/Broadcast Signal to all listeners added to the queue.
     * @param {...*} [params] Parameters that should be passed to each handler.
     */
    dispatch : function (params) {
        if (! this.active) {
            return;
        }

        var paramsArr = Array.prototype.slice.call(arguments),
            n = this._bindings.length,
            bindings;

        if (this.memorize) {
            this._prevParams = paramsArr;
        }

        if (! n) {
            //should come after memorize
            return;
        }

        bindings = this._bindings.slice(); //clone array in case add/remove items during dispatch
        this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.

        //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
        //reverse loop since listeners with higher priority will be added at the end of the list
        do { n--; } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
    },

    /**
     * Forget memorized arguments.
     * @see Signal.memorize
     */
    forget : function(){
        this._prevParams = null;
    },

    /**
     * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
     * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
     */
    dispose : function () {
        this.removeAll();
        delete this._bindings;
        delete this._prevParams;
    },

    /**
     * @return {string} String representation of the object.
     */
    toString : function () {
        return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
    }

};


// Namespace -----------------------------------------------------
//================================================================

/**
 * Signals namespace
 * @namespace
 * @name signals
 */
var signals = Signal;

/**
 * Custom event broadcaster
 * @see Signal
 */
    // alias for backwards compatibility (see #gh-44)
signals.Signal = Signal;


/*!
 * Hasher <http://github.com/millermedeiros/hasher>
 * @author Miller Medeiros
 * @version 1.1.2 (2012/10/31 03:19 PM)
 * Released under the MIT License
 */
(function(a){a("hasher",["signals"],function(b){var c=(function(k){var o=25,q=k.document,n=k.history,w=b.Signal,f,u,m,E,d,C,s=/#(.*)$/,j=/(\?.*)|(\#.*)/,g=/^\#/,i=(!+"\v1"),A=("onhashchange" in k)&&q.documentMode!==7,e=i&&!A,r=(location.protocol==="file:");function t(G){if(!G){return""}var F=new RegExp("^\\"+f.prependHash+"|\\"+f.appendHash+"$","g");return G.replace(F,"")}function D(){var F=s.exec(f.getURL());return(F&&F[1])?decodeURIComponent(F[1]):""}function z(){return(d)?d.contentWindow.frameHash:null}function y(){d=q.createElement("iframe");d.src="about:blank";d.style.display="none";q.body.appendChild(d)}function h(){if(d&&u!==z()){var F=d.contentWindow.document;F.open();F.write("<html><head><title>"+q.title+'</title><script type="text/javascript">var frameHash="'+u+'";<\/script></head><body>&nbsp;</body></html>');F.close()}}function l(F,G){if(u!==F){var H=u;u=F;if(e){if(!G){h()}else{d.contentWindow.frameHash=F}}f.changed.dispatch(t(F),t(H))}}if(e){C=function(){var G=D(),F=z();if(F!==u&&F!==G){f.setHash(t(F))}else{if(G!==u){l(G)}}}}else{C=function(){var F=D();if(F!==u){l(F)}}}function B(H,F,G){if(H.addEventListener){H.addEventListener(F,G,false)}else{if(H.attachEvent){H.attachEvent("on"+F,G)}}}function x(H,F,G){if(H.removeEventListener){H.removeEventListener(F,G,false)}else{if(H.detachEvent){H.detachEvent("on"+F,G)}}}function p(G){G=Array.prototype.slice.call(arguments);var F=G.join(f.separator);F=F?f.prependHash+F.replace(g,"")+f.appendHash:F;return F}function v(F){F=encodeURI(F);if(i&&r){F=F.replace(/\?/,"%3F")}return F}f={VERSION:"1.1.2",appendHash:"",prependHash:"/",separator:"/",changed:new w(),stopped:new w(),initialized:new w(),init:function(){if(E){return}u=D();if(A){B(k,"hashchange",C)}else{if(e){if(!d){y()}h()}m=setInterval(C,o)}E=true;f.initialized.dispatch(t(u))},stop:function(){if(!E){return}if(A){x(k,"hashchange",C)}else{clearInterval(m);m=null}E=false;f.stopped.dispatch(t(u))},isActive:function(){return E},getURL:function(){return k.location.href},getBaseURL:function(){return f.getURL().replace(j,"")},setHash:function(F){F=p.apply(null,arguments);if(F!==u){l(F);if(F===u){k.location.hash="#"+v(F)}}},replaceHash:function(F){F=p.apply(null,arguments);if(F!==u){l(F,true);if(F===u){k.location.replace("#"+v(F))}}},getHash:function(){return t(u)},getHashAsArray:function(){return f.getHash().split(f.separator)},dispose:function(){f.stop();f.initialized.dispose();f.stopped.dispose();f.changed.dispose();d=f=k.hasher=null},toString:function(){return'[hasher version="'+f.VERSION+'" hash="'+f.getHash()+'"]'}};f.initialized.memorize=true;return f}(window));return c})}(typeof define==="function"&&define.amd?define:function(c,b,a){window[c]=a(window[b[0]])}));
/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
    c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
    a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
(1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
    function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
    !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
    '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
    "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
    a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
    e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
    p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
    (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
    "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
    b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
    a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
    a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
!g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
    "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0,
    zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
    b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*q:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
    function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
    function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
    !s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
    a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%",
    "float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
    0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
    setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
    d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
    d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
    f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():
    a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
    keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),
    i.start&&i.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);
/*!
 jQuery Wookmark plugin 0.6
 @name jquery.wookmark.js
 @author Christoph Ono (chri@sto.ph or @gbks)
 @version 0.6
 @date 1/17/2013
 @category jQuery plugin
 @copyright (c) 2009-2012 Christoph Ono (www.wookmark.com)
 @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */

/*
 MAJ 21 / 01 / 2013
 start de l'effet par un fade + organisation du damier de manière ordonné et plus par hauteur.
 */

$.fn.wookmark = function(options) {

    if(!this.wookmarkOptions) {
        this.wookmarkOptions = $.extend( {
            container: $('body'),
            offset: 2,
            autoResize: false,
            itemWidth: $(this[0]).outerWidth(),
            resizeDelay: 0
        }, options);
    } else if(options) {
        this.wookmarkOptions = $.extend(this.wookmarkOptions, options);
    }

    // Layout variables.
    if(!this.wookmarkColumns) {
        this.wookmarkColumns = null;
        this.wookmarkContainerWidth = null;
    }

    // Main layout function.
    this.wookmarkLayout = function() {
        // Calculate basic layout parameters.
        var columnWidth = this.wookmarkOptions.itemWidth + this.wookmarkOptions.offset;
        var containerWidth = this.wookmarkOptions.container.width();
        var columns = Math.floor((containerWidth + this.wookmarkOptions.offset) / columnWidth);
        var offset = Math.round((containerWidth - (columns * columnWidth - this.wookmarkOptions.offset))/2);

        // If container and column count hasn't changed, we can only update the columns.
        var bottom = 0;
        if(this.wookmarkColumns != null && this.wookmarkColumns.length == columns) {
            bottom = this.wookmarkLayoutColumns(columnWidth, offset);
        } else {
            bottom = this.wookmarkLayoutFull(columnWidth, columns, offset);
        }

        // Set container height to height of the grid.
        this.wookmarkOptions.container.css('height', bottom+'px');
    };

    /**
     * Perform a full layout update.
     */
    this.wookmarkLayoutFull = function(columnWidth, columns, offset) {
        // Prepare Array to store height of columns.
        var heights = [];
        while(heights.length < columns) {
            heights.push(0);
        }

        // Store column data.
        this.wookmarkColumns = [];
        while(this.wookmarkColumns.length < columns) {
            this.wookmarkColumns.push([]);
        }

        // Loop over items.
        var item, top, left, i=0, k=0, length=this.length, shortest=null, shortestIndex=null, bottom = 0;
        for(; i<length; i++ ) {
            item = $(this[i]);

            var k = i;

            if(i > columns - 1)
            {
                k = i % columns;
            }

            shortest = heights[k];
            shortestIndex = k;

            if(this.wookmarkColumns.length > 0) this.wookmarkColumns[shortestIndex].push(item);

            // Postion the item.
            item.css({
                position: 'absolute',
                top: shortest+'px',
                left: (shortestIndex*columnWidth + offset)+'px'
            });

            // Update column height.
            heights[shortestIndex] = shortest + item.outerHeight() + this.wookmarkOptions.offset;
            bottom = Math.max(bottom, heights[shortestIndex]);

        }
        return bottom;
    };

    /**
     * This layout function only updates the vertical position of the
     * existing column assignments.
     */
    this.wookmarkLayoutColumns = function(columnWidth, offset) {
        var heights = [];
        while(heights.length < this.wookmarkColumns.length) {
            heights.push(0);
        }

        var i=0, length = this.wookmarkColumns.length, column;
        var k=0, kLength, item;
        var bottom = 0;
        for(; i<length; i++) {
            column = this.wookmarkColumns[i];
            kLength = column.length;
            for(k=0; k<kLength; k++) {
                item = column[k];
                item.css({
                    left: (i*columnWidth + offset)+'px',
                    top: heights[i]+'px'
                });
                heights[i] += item.outerHeight() + this.wookmarkOptions.offset;

                bottom = Math.max(bottom, heights[i]);
            }
        }

        return bottom;
    };

    // Listen to resize event if requested.
    this.wookmarkResizeTimer = null;
    if(!this.wookmarkResizeMethod) {
        this.wookmarkResizeMethod = null;
    }
    if(this.wookmarkOptions.autoResize) {
        // This timer ensures that layout is not continuously called as window is being dragged.
        this.wookmarkOnResize = function(event) {
            if(this.wookmarkResizeTimer) {
                clearTimeout(this.wookmarkResizeTimer);
            }
            this.wookmarkResizeTimer = setTimeout($.proxy(this.wookmarkLayout, this), this.wookmarkOptions.resizeDelay)
        };

        // Bind event listener.
        if(!this.wookmarkResizeMethod) {
            this.wookmarkResizeMethod = $.proxy(this.wookmarkOnResize, this);
        }
        $(window).resize(this.wookmarkResizeMethod);
    };

    /**
     * Clear event listeners and time outs.
     */
    this.wookmarkClear = function() {
        if(this.wookmarkResizeTimer) {
            clearTimeout(this.wookmarkResizeTimer);
            this.wookmarkResizeTimer = null;
        }
        if(this.wookmarkResizeMethod) {
            $(window).unbind('resize', this.wookmarkResizeMethod);
        }
    };

    // Apply layout
    this.wookmarkLayout();

    // Display items (if hidden).
    this.fadeIn(1500);
};

(function ($) {
    // VERTICALLY ALIGN FUNCTION
    $.fn.vAlign = function() {
        return this.each(function(i){
            var ah = $(this).height();
            var ph = $(this).parent().height();
            var mh = (ph - ah) / 2;
            $(this).css('margin-top', mh);
        });
    };
})(jQuery);
/*!
 Video.js - HTML5 Video Player
 Version 3.1.0

 LGPL v3 LICENSE INFO
 This file is part of Video.js. Copyright 2011 Zencoder, Inc.

 Video.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Video.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with Video.js.  If not, see <http://www.gnu.org/licenses/>.
 */

// Self-executing function to prevent global vars and help with minification
;(function(window, undefined){
    var document = window.document;// HTML5 Shiv. Must be in <head> to support older browsers.
    document.createElement("video");document.createElement("audio");

    var VideoJS = function(id, addOptions, ready){
            var tag; // Element of ID


            // Allow for element or ID to be passed in
            // String ID
            if (typeof id == "string") {

                // Adjust for jQuery ID syntax
                if (id.indexOf("#") === 0) {
                    id = id.slice(1);
                }

                // If a player instance has already been created for this ID return it.
                if (_V_.players[id]) {
                    return _V_.players[id];

                    // Otherwise get element for ID
                } else {
                    tag = _V_.el(id)
                }

                // ID is a media element
            } else {
                tag = id;
            }

            // Check for a useable element
            if (!tag || !tag.nodeName) { // re: nodeName, could be a box div also
                throw new TypeError("The element or ID supplied is not valid. (VideoJS)"); // Returns
            }

            // Element may have a player attr referring to an already created player instance.
            // If not, set up a new player and return the instance.
            return tag.player || new _V_.Player(tag, addOptions, ready);
        },

// Shortcut
        _V_ = VideoJS,

// CDN Version. Used to target right flash swf.
        CDN_VERSION = "3.1";

    VideoJS.players = {};

    VideoJS.options = {

        // Default order of fallback technology
        techOrder: ["html5","flash"],
        // techOrder: ["flash","html5"],

        html5: {},
        flash: { swf: "http://vjs.zencdn.net/c/video-js.swf" },

        // Default of web browser is 300x150. Should rely on source width/height.
        width: "auto",
        height: "auto",

        // defaultVolume: 0.85,
        defaultVolume: 0.00, // The freakin seaguls are driving me crazy!

        // Included control sets
        components: {
            "poster": {},
            "loadingSpinner": {},
            "bigPlayButton": {},
            "controlBar": {},
            "subtitlesDisplay": {}
        }

        // components: [
        //   "poster",
        //   "loadingSpinner",
        //   "bigPlayButton",
        //   { name: "controlBar", options: {
        //     components: [
        //       "playToggle",
        //       "fullscreenToggle",
        //       "currentTimeDisplay",
        //       "timeDivider",
        //       "durationDisplay",
        //       "remainingTimeDisplay",
        //       { name: "progressControl", options: {
        //         components: [
        //           { name: "seekBar", options: {
        //             components: [
        //               "loadProgressBar",
        //               "playProgressBar",
        //               "seekHandle"
        //             ]}
        //           }
        //         ]}
        //       },
        //       { name: "volumeControl", options: {
        //         components: [
        //           { name: "volumeBar", options: {
        //             components: [
        //               "volumeLevel",
        //               "volumeHandle"
        //             ]}
        //           }
        //         ]}
        //       },
        //       "muteToggle"
        //     ]
        //   }},
        //   "subtitlesDisplay"/*, "replay"*/
        // ]
    };

// Set CDN Version of swf
    if (CDN_VERSION != "GENERATED_CDN_VSN") {
        _V_.options.flash.swf = "http://vjs.zencdn.net/"+CDN_VERSION+"/video-js.swf"
    }

// Automatically set up any tags that have a data-setup attribute
    _V_.autoSetup = function(){
        var options, vid, player,
            vids = document.getElementsByTagName("video");

        // Check if any media elements exist
        if (vids && vids.length > 0) {

            for (var i=0,j=vids.length; i<j; i++) {
                vid = vids[i];

                // Check if element exists, has getAttribute func.
                // IE seems to consider typeof el.getAttribute == "object" instead of "function" like expected, at least when loading the player immediately.
                if (vid && vid.getAttribute) {

                    // Make sure this player hasn't already been set up.
                    if (vid.player === undefined) {
                        options = vid.getAttribute("data-setup");

                        // Check if data-setup attr exists. 
                        // We only auto-setup if they've added the data-setup attr.
                        if (options !== null) {

                            // Parse options JSON
                            // If empty string, make it a parsable json object.
                            options = JSON.parse(options || "{}");

                            // Create new video.js instance.
                            player = _V_(vid, options);
                        }
                    }

                    // If getAttribute isn't defined, we need to wait for the DOM.
                } else {
                    _V_.autoSetupTimeout(1);
                    break;
                }
            }

            // No videos were found, so keep looping unless page is finisehd loading.
        } else if (!_V_.windowLoaded) {
            _V_.autoSetupTimeout(1);
        }
    };

// Pause to let the DOM keep processing
    _V_.autoSetupTimeout = function(wait){
        setTimeout(_V_.autoSetup, wait);
    };
    _V_.merge = function(obj1, obj2, safe){
        // Make sure second object exists
        if (!obj2) { obj2 = {}; };

        for (var attrname in obj2){
            if (obj2.hasOwnProperty(attrname) && (!safe || !obj1.hasOwnProperty(attrname))) { obj1[attrname]=obj2[attrname]; }
        }
        return obj1;
    };
    _V_.extend = function(obj){ this.merge(this, obj, true); };

    _V_.extend({
        tech: {}, // Holder for playback technology settings
        controlSets: {}, // Holder for control set definitions

        // Device Checks
        isIE: function(){ return !+"\v1"; },
        isFF: function(){ return !!_V_.ua.match("Firefox") },
        isIPad: function(){ return navigator.userAgent.match(/iPad/i) !== null; },
        isIPhone: function(){ return navigator.userAgent.match(/iPhone/i) !== null; },
        isIOS: function(){ return VideoJS.isIPhone() || VideoJS.isIPad(); },
        iOSVersion: function() {
            var match = navigator.userAgent.match(/OS (\d+)_/i);
            if (match && match[1]) { return match[1]; }
        },
        isAndroid: function(){ return navigator.userAgent.match(/Android.*AppleWebKit/i) !== null; },
        androidVersion: function() {
            var match = navigator.userAgent.match(/Android (\d+)\./i);
            if (match && match[1]) { return match[1]; }
        },

        testVid: document.createElement("video"),
        ua: navigator.userAgent,
        support: {},

        each: function(arr, fn){
            if (!arr || arr.length === 0) { return; }
            for (var i=0,j=arr.length; i<j; i++) {
                fn.call(this, arr[i], i);
            }
        },

        eachProp: function(obj, fn){
            if (!obj) { return; }
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    fn.call(this, name, obj[name]);
                }
            }
        },

        el: function(id){ return document.getElementById(id); },
        createElement: function(tagName, attributes){
            var el = document.createElement(tagName),
                attrname;
            for (attrname in attributes){
                if (attributes.hasOwnProperty(attrname)) {
                    if (attrname.indexOf("-") !== -1) {
                        el.setAttribute(attrname, attributes[attrname]);
                    } else {
                        el[attrname] = attributes[attrname];
                    }
                }
            }
            return el;
        },

        insertFirst: function(node, parent){
            if (parent.firstChild) {
                parent.insertBefore(node, parent.firstChild);
            } else {
                parent.appendChild(node);
            }
        },

        addClass: function(element, classToAdd){
            if ((" "+element.className+" ").indexOf(" "+classToAdd+" ") == -1) {
                element.className = element.className === "" ? classToAdd : element.className + " " + classToAdd;
            }
        },

        removeClass: function(element, classToRemove){
            if (element.className.indexOf(classToRemove) == -1) { return; }
            var classNames = element.className.split(" ");
            classNames.splice(classNames.indexOf(classToRemove),1);
            element.className = classNames.join(" ");
        },

        remove: function(item, array){
            if (!array) return;
            var i = array.indexOf(item);
            if (i != -1) {
                return array.splice(i, 1)
            };
        },

        // Attempt to block the ability to select text while dragging controls
        blockTextSelection: function(){
            document.body.focus();
            document.onselectstart = function () { return false; };
        },
        // Turn off text selection blocking
        unblockTextSelection: function(){ document.onselectstart = function () { return true; }; },

        // Return seconds as H:MM:SS or M:SS
        // Supplying a guide (in seconds) will include enough leading zeros to cover the length of the guide
        formatTime: function(seconds, guide) {
            guide = guide || seconds; // Default to using seconds as guide
            var s = Math.floor(seconds % 60),
                m = Math.floor(seconds / 60 % 60),
                h = Math.floor(seconds / 3600),
                gm = Math.floor(guide / 60 % 60),
                gh = Math.floor(guide / 3600);

            // Check if we need to show hours
            h = (h > 0 || gh > 0) ? h + ":" : "";

            // If hours are showing, we may need to add a leading zero.
            // Always show at least one digit of minutes.
            m = (((h || gm >= 10) && m < 10) ? "0" + m : m) + ":";

            // Check if leading zero is need for seconds
            s = (s < 10) ? "0" + s : s;

            return h + m + s;
        },

        capitalize: function(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        // Return the relative horizonal position of an event as a value from 0-1
        getRelativePosition: function(x, relativeElement){
            return Math.max(0, Math.min(1, (x - _V_.findPosX(relativeElement)) / relativeElement.offsetWidth));
        },

        getComputedStyleValue: function(element, style){
            return window.getComputedStyle(element, null).getPropertyValue(style);
        },

        trim: function(string){ return string.toString().replace(/^\s+/, "").replace(/\s+$/, ""); },
        round: function(num, dec) {
            if (!dec) { dec = 0; }
            return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
        },

        isEmpty: function(object) {
            for (var prop in object) {
                return false;
            }
            return true;
        },

        // Mimic HTML5 TimeRange Spec.
        createTimeRange: function(start, end){
            return {
                length: 1,
                start: function() { return start; },
                end: function() { return end; }
            };
        },

        /* Element Data Store. Allows for binding data to an element without putting it directly on the element.
         Ex. Event listneres are stored here.
         (also from jsninja.com)
         ================================================================================ */
        cache: {}, // Where the data is stored
        guid: 1, // Unique ID for the element
        expando: "vdata" + (new Date).getTime(), // Unique attribute to store element's guid in

        // Returns the cache object where data for the element is stored
        getData: function(elem){
            var id = elem[_V_.expando];
            if (!id) {
                id = elem[_V_.expando] = _V_.guid++;
                _V_.cache[id] = {};
            }
            return _V_.cache[id];
        },
        // Delete data for the element from the cache and the guid attr from element
        removeData: function(elem){
            var id = elem[_V_.expando];
            if (!id) { return; }
            // Remove all stored data
            delete _V_.cache[id];
            // Remove the expando property from the DOM node
            try {
                delete elem[_V_.expando];
            } catch(e) {
                if (elem.removeAttribute) {
                    elem.removeAttribute(_V_.expando);
                } else {
                    // IE doesn't appear to support removeAttribute on the document element
                    elem[_V_.expando] = null;
                }
            }
        },

        /* Proxy (a.k.a Bind or Context). A simple method for changing the context of a function
         It also stores a unique id on the function so it can be easily removed from events
         ================================================================================ */
        proxy: function(context, fn) {
            // Make sure the function has a unique ID
            if (!fn.guid) { fn.guid = _V_.guid++; }
            // Create the new function that changes the context
            var ret = function() {
                return fn.apply(context, arguments);
            };

            // Give the new function the same ID
            // (so that they are equivalent and can be easily removed)
            ret.guid = fn.guid;

            return ret;
        },

        get: function(url, onSuccess, onError){
            // if (netscape.security.PrivilegeManager.enablePrivilege) {
            //   netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
            // }

            var local = (url.indexOf("file:") == 0 || (window.location.href.indexOf("file:") == 0 && url.indexOf("http:") == -1));

            if (typeof XMLHttpRequest == "undefined") {
                XMLHttpRequest = function () {
                    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {}
                    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (f) {}
                    try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (g) {}
                    throw new Error("This browser does not support XMLHttpRequest.");
                };
            }

            var request = new XMLHttpRequest();

            try {
                request.open("GET", url);
            } catch(e) {
                _V_.log("VideoJS XMLHttpRequest (open)", e);
                // onError(e);
                return false;
            }

            request.onreadystatechange = _V_.proxy(this, function() {
                if (request.readyState == 4) {
                    if (request.status == 200 || local && request.status == 0) {
                        onSuccess(request.responseText);
                    } else {
                        if (onError) {
                            onError();
                        }
                    }
                }
            });

            try {
                request.send();
            } catch(e) {
                _V_.log("VideoJS XMLHttpRequest (send)", e);
                if (onError) {
                    onError(e);
                }
            }
        },

        /* Local Storage
         ================================================================================ */
        setLocalStorage: function(key, value){
            // IE was throwing errors referencing the var anywhere without this
            var localStorage = localStorage || false;
            if (!localStorage) { return; }
            try {
                localStorage[key] = value;
            } catch(e) {
                if (e.code == 22 || e.code == 1014) { // Webkit == 22 / Firefox == 1014
                    _V_.log("LocalStorage Full (VideoJS)", e);
                } else {
                    _V_.log("LocalStorage Error (VideoJS)", e);
                }
            }
        }

    });

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
    _V_.log = function(){
        _V_.log.history = _V_.log.history || [];// store logs to an array for reference
        _V_.log.history.push(arguments);
        if(window.console) {
            arguments.callee = arguments.callee.caller;
            var newarr = [].slice.call(arguments);
            (typeof console.log === 'object' ? _V_.log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
        }
    };

// make it safe to use console.log always
    (function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
    {console.log();return window.console;}catch(err){return window.console={};}})());

// Offset Left
// getBoundingClientRect technique from John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
    if ("getBoundingClientRect" in document.documentElement) {
        _V_.findPosX = function(el) {
            var box;

            try {
                box = el.getBoundingClientRect();
            } catch(e) {}

            if (!box) { return 0; }

            var docEl = document.documentElement,
                body = document.body,
                clientLeft = docEl.clientLeft || body.clientLeft || 0,
                scrollLeft = window.pageXOffset || body.scrollLeft,
                left = box.left + scrollLeft - clientLeft;

            return left;
        };
    } else {
        _V_.findPosX = function(el) {
            var curleft = el.offsetLeft;
            // _V_.log(obj.className, obj.offsetLeft)
            while(el = obj.offsetParent) {
                if (el.className.indexOf("video-js") == -1) {
                    // _V_.log(el.offsetParent, "OFFSETLEFT", el.offsetLeft)
                    // _V_.log("-webkit-full-screen", el.webkitMatchesSelector("-webkit-full-screen"));
                    // _V_.log("-webkit-full-screen", el.querySelectorAll(".video-js:-webkit-full-screen"));
                } else {
                }
                curleft += el.offsetLeft;
            }
            return curleft;
        };
    }// Using John Resig's Class implementation http://ejohn.org/blog/simple-javascript-inheritance/
// (function(){var initializing=false, fnTest=/xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/; _V_.Class = function(){}; _V_.Class.extend = function(prop) { var _super = this.prototype; initializing = true; var prototype = new this(); initializing = false; for (var name in prop) { prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn){ return function() { var tmp = this._super; this._super = _super[name]; var ret = fn.apply(this, arguments); this._super = tmp; return ret; }; })(name, prop[name]) : prop[name]; } function Class() { if ( !initializing && this.init ) this.init.apply(this, arguments); } Class.prototype = prototype; Class.constructor = Class; Class.extend = arguments.callee; return Class;};})();
    (function(){
        var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
        _V_.Class = function(){};
        _V_.Class.extend = function(prop) {
            var _super = this.prototype;
            initializing = true;
            var prototype = new this();
            initializing = false;
            for (var name in prop) {
                prototype[name] = typeof prop[name] == "function" &&
                    typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                    (function(name, fn){
                        return function() {
                            var tmp = this._super;
                            this._super = _super[name];
                            var ret = fn.apply(this, arguments);
                            this._super = tmp;
                            return ret;
                        };
                    })(name, prop[name]) :
                    prop[name];
            }
            function Class() {
                if ( !initializing && this.init ) {
                    return this.init.apply(this, arguments);

                    // Attempting to recreate accessing function form of class.
                } else if (!initializing) {
                    return arguments.callee.prototype.init()
                }
            }
            Class.prototype = prototype;
            Class.constructor = Class;
            Class.extend = arguments.callee;
            return Class;
        };
    })();

    /* Player Component- Base class for all UI objects
     ================================================================================ */
    _V_.Component = _V_.Class.extend({

        init: function(player, options){
            this.player = player;

            // Allow for overridding default component options
            options = this.options = _V_.merge(this.options || {}, options);

            // Create element if one wasn't provided in options
            if (options.el) {
                this.el = options.el;
            } else {
                this.el = this.createElement();
            }

            // Add any components in options
            this.initComponents();
        },

        destroy: function(){},

        createElement: function(type, attrs){
            return _V_.createElement(type || "div", attrs);
        },

        buildCSSClass: function(){
            // Child classes can include a function that does:
            // return "CLASS NAME" + this._super();
            return "";
        },

        initComponents: function(){
            var options = this.options;
            if (options && options.components) {
                // Loop through components and add them to the player
                this.eachProp(options.components, function(name, opts){

                    // Allow waiting to add components until a specific event is called
                    var tempAdd = this.proxy(function(){
                        this.addComponent(name, opts);
                    });

                    if (opts.loadEvent) {
                        this.one(opts.loadEvent, tempAdd)
                    } else {
                        tempAdd();
                    }
                });
            }
        },

        // Add child components to this component.
        // Will generate a new child component and then append child component's element to this component's element.
        // Takes either the name of the UI component class, or an object that contains a name, UI Class, and options.
        addComponent: function(name, options){
            var componentClass, component;

            // Make sure options is at least an empty object to protect against errors
            options = options || {};

            // Assume name of set is a lowercased name of the UI Class (PlayButton, etc.)
            componentClass = options.componentClass || _V_.capitalize(name);

            // Create a new object & element for this controls set
            // If there's no .player, this is a player
            component = new _V_[componentClass](this.player || this, options);

            // Add the UI object's element to the container div (box)
            this.el.appendChild(component.el);

            // Set property name on player. Could cause conflicts with other prop names, but it's worth making refs easy.
            this[name] = component;
        },

        /* Display
         ================================================================================ */
        show: function(){
            this.el.style.display = "block";
        },

        hide: function(){
            this.el.style.display = "none";
        },

        fadeIn: function(){
            this.removeClass("vjs-fade-out");
            this.addClass("vjs-fade-in");
        },

        fadeOut: function(){
            this.removeClass("vjs-fade-in");
            this.addClass("vjs-fade-out");
        },

        addClass: function(classToAdd){
            _V_.addClass(this.el, classToAdd);
        },

        removeClass: function(classToRemove){
            _V_.removeClass(this.el, classToRemove);
        },

        /* Events
         ================================================================================ */
        addEvent: function(type, fn){
            return _V_.addEvent(this.el, type, _V_.proxy(this, fn));
        },
        removeEvent: function(type, fn){
            return _V_.removeEvent(this.el, type, fn);
        },
        triggerEvent: function(type, e){
            return _V_.triggerEvent(this.el, type, e);
        },
        one: function(type, fn) {
            _V_.one.call(this, this.el, type, fn);
        },

        /* Ready - Trigger functions when component is ready
         ================================================================================ */
        ready: function(fn){
            if (!fn) return this;

            if (this.isReady) {
                fn.call(this);
            } else {
                if (this.readyQueue === undefined) {
                    this.readyQueue = [];
                }
                this.readyQueue.push(fn);
            }

            return this;
        },

        triggerReady: function(){
            this.isReady = true;
            if (this.readyQueue && this.readyQueue.length > 0) {
                // Call all functions in ready queue
                this.each(this.readyQueue, function(fn){
                    fn.call(this);
                });

                // Reset Ready Queue
                this.readyQueue = [];
            }
        },

        /* Utility
         ================================================================================ */
        each: function(arr, fn){ _V_.each.call(this, arr, fn); },

        eachProp: function(obj, fn){ _V_.eachProp.call(this, obj, fn); },

        extend: function(obj){ _V_.merge(this, obj) },

        // More easily attach 'this' to functions
        proxy: function(fn){  return _V_.proxy(this, fn); }

    });/* Control - Base class for all control elements
     ================================================================================ */
    _V_.Control = _V_.Component.extend({

        buildCSSClass: function(){
            return "vjs-control " + this._super();
        }

    });

    /* Button - Base class for all buttons
     ================================================================================ */
    _V_.Button = _V_.Control.extend({

        init: function(player, options){
            this._super(player, options);

            this.addEvent("click", this.onClick);
            this.addEvent("focus", this.onFocus);
            this.addEvent("blur", this.onBlur);
        },

        createElement: function(type, attrs){
            // Add standard Aria and Tabindex info
            attrs = _V_.merge({
                className: this.buildCSSClass(),
                innerHTML: '<div><span class="vjs-control-text">' + (this.buttonText || "Need Text") + '</span></div>',
                role: "button",
                tabIndex: 0
            }, attrs);

            return this._super(type, attrs);
        },

        // Click - Override with specific functionality for button
        onClick: function(){},

        // Focus - Add keyboard functionality to element
        onFocus: function(){
            _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
        },

        // KeyPress (document level) - Trigger click when keys are pressed
        onKeyPress: function(event){
            // Check for space bar (32) or enter (13) keys
            if (event.which == 32 || event.which == 13) {
                event.preventDefault();
                this.onClick();
            }
        },

        // Blur - Remove keyboard triggers
        onBlur: function(){
            _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
        }

    });

    /* Play Button
     ================================================================================ */
    _V_.PlayButton = _V_.Button.extend({

        buttonText: "Play",

        buildCSSClass: function(){
            return "vjs-play-button " + this._super();
        },

        onClick: function(){
            this.player.play();
        }

    });

    /* Pause Button
     ================================================================================ */
    _V_.PauseButton = _V_.Button.extend({

        buttonText: "Pause",

        buildCSSClass: function(){
            return "vjs-pause-button " + this._super();
        },

        onClick: function(){
            this.player.pause();
        }

    });

    /* Play Toggle - Play or Pause Media
     ================================================================================ */
    _V_.PlayToggle = _V_.Button.extend({

        buttonText: "Play",

        init: function(player, options){
            this._super(player, options);

            player.addEvent("play", _V_.proxy(this, this.onPlay));
            player.addEvent("pause", _V_.proxy(this, this.onPause));
        },

        buildCSSClass: function(){
            return "vjs-play-control " + this._super();
        },

        // OnClick - Toggle between play and pause
        onClick: function(){
            if (this.player.paused()) {
                this.player.play();
            } else {
                this.player.pause();
            }
        },

        // OnPlay - Add the vjs-playing class to the element so it can change appearance
        onPlay: function(){
            _V_.removeClass(this.el, "vjs-paused");
            _V_.addClass(this.el, "vjs-playing");
        },

        // OnPause - Add the vjs-paused class to the element so it can change appearance
        onPause: function(){
            _V_.removeClass(this.el, "vjs-playing");
            _V_.addClass(this.el, "vjs-paused");
        }

    });


    /* Fullscreen Toggle Behaviors
     ================================================================================ */
    _V_.FullscreenToggle = _V_.Button.extend({

        buttonText: "Fullscreen",

        buildCSSClass: function(){
            return "vjs-fullscreen-control " + this._super();
        }

    });

    /* Big Play Button
     ================================================================================ */
    _V_.BigPlayButton = _V_.Button.extend({
        init: function(player, options){
            this._super(player, options);

            player.addEvent("play", _V_.proxy(this, this.hide));
            player.addEvent("ended", _V_.proxy(this, this.show));
        },

        createElement: function(){
            return this._super("div", {
                className: "vjs-big-play-button",
                innerHTML: "<span></span>"
            });
        },

        onClick: function(){
            // Go back to the beginning if big play button is showing at the end.
            // Have to check for current time otherwise it might throw a 'not ready' error.
            if(this.player.currentTime()) {
                this.player.currentTime(0);
            }
            this.player.play();
        }
    });

    /* Loading Spinner
     ================================================================================ */
    _V_.LoadingSpinner = _V_.Component.extend({
        init: function(player, options){
            this._super(player, options);

            player.addEvent("canplay", _V_.proxy(this, this.hide));
            player.addEvent("canplaythrough", _V_.proxy(this, this.hide));
            player.addEvent("playing", _V_.proxy(this, this.hide));

            player.addEvent("seeking", _V_.proxy(this, this.show));
            player.addEvent("error", _V_.proxy(this, this.show));

            // Not showing spinner on stalled any more. Browsers may stall and then not trigger any events that would remove the spinner.
            // Checked in Chrome 16 and Safari 5.1.2. http://help.videojs.com/discussions/problems/883-why-is-the-download-progress-showing
            // player.addEvent("stalled", _V_.proxy(this, this.show));

            player.addEvent("waiting", _V_.proxy(this, this.show));
        },

        createElement: function(){

            var classNameSpinner, innerHtmlSpinner;

            if ( typeof this.player.el.style.WebkitBorderRadius == "string"
                || typeof this.player.el.style.MozBorderRadius == "string"
                || typeof this.player.el.style.KhtmlBorderRadius == "string"
                || typeof this.player.el.style.borderRadius == "string")
            {
                classNameSpinner = "vjs-loading-spinner";
                innerHtmlSpinner = "<div class='ball1'></div><div class='ball2'></div><div class='ball3'></div><div class='ball4'></div><div class='ball5'></div><div class='ball6'></div><div class='ball7'></div><div class='ball8'></div>";
            } else {
                classNameSpinner = "vjs-loading-spinner-fallback";
                innerHtmlSpinner = "";
            }

            return this._super("div", {
                className: classNameSpinner,
                innerHTML: innerHtmlSpinner
            });
        }
    });

    /* Control Bar
     ================================================================================ */
    _V_.ControlBar = _V_.Component.extend({

        options: {
            loadEvent: "play",
            components: {
                "playToggle": {},
                "fullscreenToggle": {},
                "currentTimeDisplay": {},
                "timeDivider": {},
                "durationDisplay": {},
                "remainingTimeDisplay": {},
                "progressControl": {},
                "volumeControl": {},
                "muteToggle": {}
            }
        },

        init: function(player, options){
            this._super(player, options);

            player.addEvent("play", this.proxy(function(){
                this.fadeIn();
                this.player.addEvent("mouseover", this.proxy(this.fadeIn));
                this.player.addEvent("mouseout", this.proxy(this.fadeOut));
            }));
        },

        createElement: function(){
            return _V_.createElement("div", {
                className: "vjs-controls"
            });
        },

        fadeIn: function(){
            this._super();
            this.player.triggerEvent("controlsvisible");
        },

        fadeOut: function(){
            this._super();
            this.player.triggerEvent("controlshidden");
        }
    });

    /* Time
     ================================================================================ */
    _V_.CurrentTimeDisplay = _V_.Component.extend({

        init: function(player, options){
            this._super(player, options);

            player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
        },

        createElement: function(){
            var el = this._super("div", {
                className: "vjs-current-time vjs-time-controls vjs-control"
            });

            this.content = _V_.createElement("div", {
                className: "vjs-current-time-display",
                innerHTML: '0:00'
            });

            el.appendChild(_V_.createElement("div").appendChild(this.content));
            return el;
        },

        updateContent: function(){
            // Allows for smooth scrubbing, when player can't keep up.
            var time = (this.player.scrubbing) ? this.player.values.currentTime : this.player.currentTime();
            this.content.innerHTML = _V_.formatTime(time, this.player.duration());
        }

    });

    _V_.DurationDisplay = _V_.Component.extend({

        init: function(player, options){
            this._super(player, options);

            player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
        },

        createElement: function(){
            var el = this._super("div", {
                className: "vjs-duration vjs-time-controls vjs-control"
            });

            this.content = _V_.createElement("div", {
                className: "vjs-duration-display",
                innerHTML: '0:00'
            });

            el.appendChild(_V_.createElement("div").appendChild(this.content));
            return el;
        },

        updateContent: function(){
            if (this.player.duration()) { this.content.innerHTML = _V_.formatTime(this.player.duration()); }
        }

    });

// Time Separator (Not used in main skin, but still available, and could be used as a 'spare element')
    _V_.TimeDivider = _V_.Component.extend({

        createElement: function(){
            return this._super("div", {
                className: "vjs-time-divider",
                innerHTML: '<div><span>/</span></div>'
            });
        }

    });

    _V_.RemainingTimeDisplay = _V_.Component.extend({

        init: function(player, options){
            this._super(player, options);

            player.addEvent("timeupdate", _V_.proxy(this, this.updateContent));
        },

        createElement: function(){
            var el = this._super("div", {
                className: "vjs-remaining-time vjs-time-controls vjs-control"
            });

            this.content = _V_.createElement("div", {
                className: "vjs-remaining-time-display",
                innerHTML: '-0:00'
            });

            el.appendChild(_V_.createElement("div").appendChild(this.content));
            return el;
        },

        updateContent: function(){
            if (this.player.duration()) { this.content.innerHTML = "-"+_V_.formatTime(this.player.remainingTime()); }

            // Allows for smooth scrubbing, when player can't keep up.
            // var time = (this.player.scrubbing) ? this.player.values.currentTime : this.player.currentTime();
            // this.content.innerHTML = _V_.formatTime(time, this.player.duration());
        }

    });

    /* Slider - Parent for seek bar and volume slider
     ================================================================================ */
    _V_.Slider = _V_.Component.extend({

        init: function(player, options){
            this._super(player, options);

            player.addEvent(this.playerEvent, _V_.proxy(this, this.update));

            this.addEvent("mousedown", this.onMouseDown);
            this.addEvent("focus", this.onFocus);
            this.addEvent("blur", this.onBlur);

            this.player.addEvent("controlsvisible", this.proxy(this.update));

            // This is actually to fix the volume handle position. http://twitter.com/#!/gerritvanaaken/status/159046254519787520
            // this.player.one("timeupdate", this.proxy(this.update));

            this.update();
        },

        createElement: function(type, attrs) {
            attrs = _V_.merge({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, attrs);

            return this._super(type, attrs);
        },

        onMouseDown: function(event){
            event.preventDefault();
            _V_.blockTextSelection();

            _V_.addEvent(document, "mousemove", _V_.proxy(this, this.onMouseMove));
            _V_.addEvent(document, "mouseup", _V_.proxy(this, this.onMouseUp));

            this.onMouseMove(event);
        },

        onMouseUp: function(event) {
            _V_.unblockTextSelection();
            _V_.removeEvent(document, "mousemove", this.onMouseMove, false);
            _V_.removeEvent(document, "mouseup", this.onMouseUp, false);

            this.update();
        },

        update: function(){
            // If scrubbing, we could use a cached value to make the handle keep up with the user's mouse.
            // On HTML5 browsers scrubbing is really smooth, but some flash players are slow, so we might want to utilize this later.
            // var progress =  (this.player.scrubbing) ? this.player.values.currentTime / this.player.duration() : this.player.currentTime() / this.player.duration();

            var barProgress,
                progress = this.getPercent();
            handle = this.handle,
                bar = this.bar;

            // Protect against no duration and other division issues
            if (isNaN(progress)) { progress = 0; }

            barProgress = progress;

            // If there is a handle, we need to account for the handle in our calculation for progress bar
            // so that it doesn't fall short of or extend past the handle.
            if (handle) {

                var box = this.el,
                    boxWidth = box.offsetWidth,

                    handleWidth = handle.el.offsetWidth,

                // The width of the handle in percent of the containing box
                // In IE, widths may not be ready yet causing NaN
                    handlePercent = (handleWidth) ? handleWidth / boxWidth : 0,

                // Get the adjusted size of the box, considering that the handle's center never touches the left or right side.
                // There is a margin of half the handle's width on both sides.
                    boxAdjustedPercent = 1 - handlePercent;

                // Adjust the progress that we'll use to set widths to the new adjusted box width
                adjustedProgress = progress * boxAdjustedPercent,

                    // The bar does reach the left side, so we need to account for this in the bar's width
                    barProgress = adjustedProgress + (handlePercent / 2);

                // Move the handle from the left based on the adjected progress
                handle.el.style.left = _V_.round(adjustedProgress * 100, 2) + "%";
            }

            // Set the new bar width
            bar.el.style.width = _V_.round(barProgress * 100, 2) + "%";
        },

        calculateDistance: function(event){
            var box = this.el,
                boxX = _V_.findPosX(box),
                boxW = box.offsetWidth,
                handle = this.handle;

            if (handle) {
                var handleW = handle.el.offsetWidth;

                // Adjusted X and Width, so handle doesn't go outside the bar
                boxX = boxX + (handleW / 2);
                boxW = boxW - handleW;
            }

            // Percent that the click is through the adjusted area
            return Math.max(0, Math.min(1, (event.pageX - boxX) / boxW));
        },

        onFocus: function(event){
            _V_.addEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
        },

        onKeyPress: function(event){
            if (event.which == 37) { // Left Arrow
                event.preventDefault();
                this.stepBack();
            } else if (event.which == 39) { // Right Arrow
                event.preventDefault();
                this.stepForward();
            }
        },

        onBlur: function(event){
            _V_.removeEvent(document, "keyup", _V_.proxy(this, this.onKeyPress));
        }
    });


    /* Progress
     ================================================================================ */

// Progress Control: Seek, Load Progress, and Play Progress
    _V_.ProgressControl = _V_.Component.extend({

        options: {
            components: {
                "seekBar": {}
            }
        },

        createElement: function(){
            return this._super("div", {
                className: "vjs-progress-control vjs-control"
            });
        }

    });

// Seek Bar and holder for the progress bars
    _V_.SeekBar = _V_.Slider.extend({

        options: {
            components: {
                "loadProgressBar": {},

                // Set property names to bar and handle to match with the parent Slider class is looking for
                "bar": { componentClass: "PlayProgressBar" },
                "handle": { componentClass: "SeekHandle" }
            }
        },

        playerEvent: "timeupdate",

        init: function(player, options){
            this._super(player, options);
        },

        createElement: function(){
            return this._super("div", {
                className: "vjs-progress-holder"
            });
        },

        getPercent: function(){
            return this.player.currentTime() / this.player.duration();
        },

        onMouseDown: function(event){
            this._super(event);

            this.player.scrubbing = true;

            this.videoWasPlaying = !this.player.paused();
            this.player.pause();
        },

        onMouseMove: function(event){
            var newTime = this.calculateDistance(event) * this.player.duration();

            // Don't let video end while scrubbing.
            if (newTime == this.player.duration()) { newTime = newTime - 0.1; }

            // Set new time (tell player to seek to new time)
            this.player.currentTime(newTime);
        },

        onMouseUp: function(event){
            this._super(event);

            this.player.scrubbing = false;
            if (this.videoWasPlaying) {
                this.player.play();
            }
        },

        stepForward: function(){
            this.player.currentTime(this.player.currentTime() + 1);
        },

        stepBack: function(){
            this.player.currentTime(this.player.currentTime() - 1);
        }

    });

// Load Progress Bar
    _V_.LoadProgressBar = _V_.Component.extend({

        init: function(player, options){
            this._super(player, options);
            player.addEvent("progress", _V_.proxy(this, this.update));
        },

        createElement: function(){
            return this._super("div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
            });
        },

        update: function(){
            if (this.el.style) { this.el.style.width = _V_.round(this.player.bufferedPercent() * 100, 2) + "%"; }
        }

    });

// Play Progress Bar
    _V_.PlayProgressBar = _V_.Component.extend({

        createElement: function(){
            return this._super("div", {
                className: "vjs-play-progress",
                innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
            });
        }

    });

// Seek Handle
// SeekBar Behavior includes play progress bar, and seek handle
// Needed so it can determine seek position based on handle position/size
    _V_.SeekHandle = _V_.Component.extend({

        createElement: function(){
            return this._super("div", {
                className: "vjs-seek-handle",
                innerHTML: '<span class="vjs-control-text">00:00</span>'
            });
        }

    });

    /* Volume Scrubber
     ================================================================================ */
// Progress Control: Seek, Load Progress, and Play Progress
    _V_.VolumeControl = _V_.Component.extend({

        options: {
            components: {
                "volumeBar": {}
            }
        },

        createElement: function(){
            return this._super("div", {
                className: "vjs-volume-control vjs-control"
            });
        }

    });

    _V_.VolumeBar = _V_.Slider.extend({

        options: {
            components: {
                "bar": { componentClass: "VolumeLevel" },
                "handle": { componentClass: "VolumeHandle" }
            }
        },

        playerEvent: "volumechange",

        createElement: function(){
            return this._super("div", {
                className: "vjs-volume-bar"
            });
        },

        onMouseMove: function(event) {
            this.player.volume(this.calculateDistance(event));
        },

        getPercent: function(){
            return this.player.volume();
        },

        stepForward: function(){
            this.player.volume(this.player.volume() + 0.1);
        },

        stepBack: function(){
            this.player.volume(this.player.volume() - 0.1);
        }
    });

    _V_.VolumeLevel = _V_.Component.extend({

        createElement: function(){
            return this._super("div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            });
        }

    });

    _V_.VolumeHandle = _V_.Component.extend({

        createElement: function(){
            return this._super("div", {
                className: "vjs-volume-handle",
                innerHTML: '<span class="vjs-control-text"></span>'
                // tabindex: 0,
                // role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100
            });
        }

    });

    _V_.MuteToggle = _V_.Button.extend({

        init: function(player, options){
            this._super(player, options);

            player.addEvent("volumechange", _V_.proxy(this, this.update));
        },

        createElement: function(){
            return this._super("div", {
                className: "vjs-mute-control vjs-control",
                innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
            });
        },

        onClick: function(event){
            this.player.muted( this.player.muted() ? false : true );
        },

        update: function(event){
            var vol = this.player.volume(),
                level = 3;

            if (vol == 0 || this.player.muted()) {
                level = 0;
            } else if (vol < 0.33) {
                level = 1;
            } else if (vol < 0.67) {
                level = 2;
            }

            /* TODO improve muted icon classes */
            _V_.each.call(this, [0,1,2,3], function(i){
                _V_.removeClass(this.el, "vjs-vol-"+i);
            });
            _V_.addClass(this.el, "vjs-vol-"+level);
        }

    });


    /* Poster Image
     ================================================================================ */
    _V_.Poster = _V_.Button.extend({
        init: function(player, options){
            this._super(player, options);

            if (!this.player.options.poster) {
                this.hide();
            }

            player.addEvent("play", _V_.proxy(this, this.hide));
        },

        createElement: function(){
            return _V_.createElement("img", {
                className: "vjs-poster",
                src: this.player.options.poster,

                // Don't want poster to be tabbable.
                tabIndex: -1
            });
        },

        onClick: function(){
            this.player.play();
        }
    });


    /* Text Track Displays
     ================================================================================ */
// Create a behavior type for each text track type (subtitlesDisplay, captionsDisplay, etc.).
// Then you can easily do something like.
//    player.addBehavior(myDiv, "subtitlesDisplay");
// And the myDiv's content will be updated with the text change.

// Base class for all track displays. Should not be instantiated on its own.
    _V_.TextTrackDisplay = _V_.Component.extend({

        init: function(player, options){
            this._super(player, options);

            player.addEvent(this.trackType + "update", _V_.proxy(this, this.update));
        },

        createElement: function(){
            return this._super("div", {
                className: "vjs-" + this.trackType
            });
        },

        update: function(){
            this.el.innerHTML = this.player.textTrackValue(this.trackType);
        }

    });

    _V_.SubtitlesDisplay = _V_.TextTrackDisplay.extend({

        trackType: "subtitles"

    });

    _V_.CaptionsDisplay = _V_.TextTrackDisplay.extend({

        trackType: "captions"

    });

    _V_.ChaptersDisplay = _V_.TextTrackDisplay.extend({

        trackType: "chapters"

    });

    _V_.DescriptionsDisplay = _V_.TextTrackDisplay.extend({

        trackType: "descriptions"

    });// ECMA-262 is the standard for javascript.
// The following methods are impelemented EXACTLY as described in the standard (according to Mozilla Docs), and do not override the default method if one exists.
// This may conflict with other libraries that modify the array prototype, but those libs should update to use the standard.

// [].indexOf
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
            "use strict";
            if (this === void 0 || this === null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = 0;
            if (arguments.length > 0) {
                n = Number(arguments[1]);
                if (n !== n) { // shortcut for verifying if it's NaN
                    n = 0;
                } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            if (n >= len) {
                return -1;
            }
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                    return k;
                }
            }
            return -1;
        }
    }

// NOT NEEDED YET
// [].lastIndexOf
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
// if (!Array.prototype.lastIndexOf)
// {
//   Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/)
//   {
//     "use strict";
// 
//     if (this === void 0 || this === null)
//       throw new TypeError();
// 
//     var t = Object(this);
//     var len = t.length >>> 0;
//     if (len === 0)
//       return -1;
// 
//     var n = len;
//     if (arguments.length > 1)
//     {
//       n = Number(arguments[1]);
//       if (n !== n)
//         n = 0;
//       else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
//         n = (n > 0 || -1) * Math.floor(Math.abs(n));
//     }
// 
//     var k = n >= 0
//           ? Math.min(n, len - 1)
//           : len - Math.abs(n);
// 
//     for (; k >= 0; k--)
//     {
//       if (k in t && t[k] === searchElement)
//         return k;
//     }
//     return -1;
//   };
// }


// NOT NEEDED YET
// Array forEach per ECMA standard https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/foreach
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
// if ( !Array.prototype.forEach ) {
// 
//   Array.prototype.forEach = function( callback, thisArg ) {
// 
//     var T, k;
// 
//     if ( this == null ) {
//       throw new TypeError( " this is null or not defined" );
//     }
// 
//     // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
//     var O = Object(this);
// 
//     // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
//     // 3. Let len be ToUint32(lenValue).
//     var len = O.length >>> 0;
// 
//     // 4. If IsCallable(callback) is false, throw a TypeError exception.
//     // See: http://es5.github.com/#x9.11
//     if ( {}.toString.call(callback) != "[object Function]" ) {
//       throw new TypeError( callback + " is not a function" );
//     }
// 
//     // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
//     if ( thisArg ) {
//       T = thisArg;
//     }
// 
//     // 6. Let k be 0
//     k = 0;
// 
//     // 7. Repeat, while k < len
//     while( k < len ) {
// 
//       var kValue;
// 
//       // a. Let Pk be ToString(k).
//       //   This is implicit for LHS operands of the in operator
//       // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
//       //   This step can be combined with c
//       // c. If kPresent is true, then
//       if ( k in O ) {
// 
//         // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
//         kValue = O[ Pk ];
// 
//         // ii. Call the Call internal method of callback with T as the this value and
//         // argument list containing kValue, k, and O.
//         callback.call( T, kValue, k, O );
//       }
//       // d. Increase k by 1.
//       k++;
//     }
//     // 8. return undefined
//   };
// }


// NOT NEEDED YET
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.com/#x15.4.4.19
// if (!Array.prototype.map) {
//   Array.prototype.map = function(callback, thisArg) {
// 
//     var T, A, k;
// 
//     if (this == null) {
//       throw new TypeError(" this is null or not defined");
//     }
// 
//     // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
//     var O = Object(this);
// 
//     // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
//     // 3. Let len be ToUint32(lenValue).
//     var len = O.length >>> 0;
// 
//     // 4. If IsCallable(callback) is false, throw a TypeError exception.
//     // See: http://es5.github.com/#x9.11
//     if ({}.toString.call(callback) != "[object Function]") {
//       throw new TypeError(callback + " is not a function");
//     }
// 
//     // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
//     if (thisArg) {
//       T = thisArg;
//     }
// 
//     // 6. Let A be a new array created as if by the expression new Array(len) where Array is
//     // the standard built-in constructor with that name and len is the value of len.
//     A = new Array(len);
// 
//     // 7. Let k be 0
//     k = 0;
// 
//     // 8. Repeat, while k < len
//     while(k < len) {
// 
//       var kValue, mappedValue;
// 
//       // a. Let Pk be ToString(k).
//       //   This is implicit for LHS operands of the in operator
//       // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
//       //   This step can be combined with c
//       // c. If kPresent is true, then
//       if (k in O) {
// 
//         // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
//         kValue = O[ k ];
// 
//         // ii. Let mappedValue be the result of calling the Call internal method of callback
//         // with T as the this value and argument list containing kValue, k, and O.
//         mappedValue = callback.call(T, kValue, k, O);
// 
//         // iii. Call the DefineOwnProperty internal method of A with arguments
//         // Pk, Property Descriptor {Value: mappedValue, Writable: true, Enumerable: true, Configurable: true},
//         // and false.
// 
//         // In browsers that support Object.defineProperty, use the following:
//         // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });
// 
//         // For best browser support, use the following:
//         A[ k ] = mappedValue;
//       }
//       // d. Increase k by 1.
//       k++;
//     }
// 
//     // 9. return A
//     return A;
//   };      
// }
// Event System (J.Resig - Secrets of a JS Ninja http://jsninja.com/ [Go read it, really])
// (Book version isn't completely usable, so fixed some things and borrowed from jQuery where it's working)
// 
// This should work very similarly to jQuery's events, however it's based off the book version which isn't as
// robust as jquery's, so there's probably some differences.
// 
// When you add an event listener using _V_.addEvent, 
//   it stores the handler function in seperate cache object, 
//   and adds a generic handler to the element's event,
//   along with a unique id (guid) to the element.

    _V_.extend({

        // Add an event listener to element
        // It stores the handler function in a separate cache object
        // and adds a generic handler to the element's event,
        // along with a unique id (guid) to the element.
        addEvent: function(elem, type, fn){
            var data = _V_.getData(elem), handlers;

            // We only need to generate one handler per element
            if (data && !data.handler) {
                // Our new meta-handler that fixes the event object and the context
                data.handler = function(event){
                    event = _V_.fixEvent(event);
                    var handlers = _V_.getData(elem).events[event.type];
                    // Go through and call all the real bound handlers
                    if (handlers) {

                        // Copy handlers so if handlers are added/removed during the process it doesn't throw everything off.
                        var handlersCopy = [];
                        _V_.each(handlers, function(handler, i){
                            handlersCopy[i] = handler;
                        })

                        for (var i = 0, l = handlersCopy.length; i < l; i++) {
                            handlersCopy[i].call(elem, event);
                        }
                    }
                };
            }

            // We need a place to store all our event data
            if (!data.events) { data.events = {}; }

            // And a place to store the handlers for this event type
            handlers = data.events[type];

            if (!handlers) {
                handlers = data.events[ type ] = [];

                // Attach our meta-handler to the element, since one doesn't exist
                if (document.addEventListener) {
                    elem.addEventListener(type, data.handler, false);
                } else if (document.attachEvent) {
                    elem.attachEvent("on" + type, data.handler);
                }
            }

            if (!fn.guid) { fn.guid = _V_.guid++; }

            handlers.push(fn);
        },

        removeEvent: function(elem, type, fn) {
            var data = _V_.getData(elem), handlers;
            // If no events exist, nothing to unbind
            if (!data.events) { return; }

            // Are we removing all bound events?
            if (!type) {
                for (type in data.events) {
                    _V_.cleanUpEvents(elem, type);
                }
                return;
            }

            // And a place to store the handlers for this event type
            handlers = data.events[type];

            // If no handlers exist, nothing to unbind
            if (!handlers) { return; }

            // See if we're only removing a single handler
            if (fn && fn.guid) {
                for (var i = 0; i < handlers.length; i++) {
                    // We found a match (don't stop here, there could be a couple bound)
                    if (handlers[i].guid === fn.guid) {
                        // Remove the handler from the array of handlers
                        handlers.splice(i--, 1);
                    }
                }
            }

            _V_.cleanUpEvents(elem, type);
        },

        cleanUpEvents: function(elem, type) {
            var data = _V_.getData(elem);
            // Remove the events of a particular type if there are none left

            if (data.events[type].length === 0) {
                delete data.events[type];

                // Remove the meta-handler from the element
                if (document.removeEventListener) {
                    elem.removeEventListener(type, data.handler, false);
                } else if (document.detachEvent) {
                    elem.detachEvent("on" + type, data.handler);
                }
            }

            // Remove the events object if there are no types left
            if (_V_.isEmpty(data.events)) {
                delete data.events;
                delete data.handler;
            }

            // Finally remove the expando if there is no data left
            if (_V_.isEmpty(data)) {
                _V_.removeData(elem);
            }
        },

        fixEvent: function(event) {
            if (event[_V_.expando]) { return event; }
            // store a copy of the original event object
            // and "clone" to set read-only properties
            var originalEvent = event;
            event = new _V_.Event(originalEvent);

            for ( var i = _V_.Event.props.length, prop; i; ) {
                prop = _V_.Event.props[ --i ];
                event[prop] = originalEvent[prop];
            }

            // Fix target property, if necessary
            if (!event.target) { event.target = event.srcElement || document; }

            // check if target is a textnode (safari)
            if (event.target.nodeType === 3) { event.target = event.target.parentNode; }

            // Add relatedTarget, if necessary
            if (!event.relatedTarget && event.fromElement) {
                event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
            }

            // Calculate pageX/Y if missing and clientX/Y available
            if ( event.pageX == null && event.clientX != null ) {
                var eventDocument = event.target.ownerDocument || document,
                    doc = eventDocument.documentElement,
                    body = eventDocument.body;

                event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
            }

            // Add which for key events
            if (event.which == null && (event.charCode != null || event.keyCode != null)) {
                event.which = event.charCode != null ? event.charCode : event.keyCode;
            }

            // Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
            if ( !event.metaKey && event.ctrlKey ) {
                event.metaKey = event.ctrlKey;
            }

            // Add which for click: 1 === left; 2 === middle; 3 === right
            // Note: button is not normalized, so don't use it
            if ( !event.which && event.button !== undefined ) {
                event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));
            }

            return event;
        },

        triggerEvent: function(elem, event) {
            var data = _V_.getData(elem),
                parent = elem.parentNode || elem.ownerDocument,
                type = event.type || event,
                handler;

            if (data) { handler = data.handler }

            // Added in attion to book. Book code was broke.
            event = typeof event === "object" ?
                event[_V_.expando] ?
                    event :
                    new _V_.Event(type, event) :
                new _V_.Event(type);

            event.type = type;
            if (handler) {
                handler.call(elem, event);
            }

            // Clean up the event in case it is being reused
            event.result = undefined;
            event.target = elem;

            // Bubble the event up the tree to the document,
            // Unless it's been explicitly stopped
            // if (parent && !event.isPropagationStopped()) {
            //   _V_.triggerEvent(parent, event);
            // 
            // // We're at the top document so trigger the default action
            // } else if (!parent && !event.isDefaultPrevented()) {
            //   // log(type);
            //   var targetData = _V_.getData(event.target);
            //   // log(targetData);
            //   var targetHandler = targetData.handler;
            //   // log("2");
            //   if (event.target[event.type]) {
            //     // Temporarily disable the bound handler,
            //     // don't want to execute it twice
            //     if (targetHandler) {
            //       targetData.handler = function(){};
            //     }
            // 
            //     // Trigger the native event (click, focus, blur)
            //     event.target[event.type]();
            // 
            //     // Restore the handler
            //     if (targetHandler) {
            //       targetData.handler = targetHandler;
            //     }
            //   }
            // }
        },

        one: function(elem, type, fn) {
            _V_.addEvent(elem, type, function(){
                _V_.removeEvent(elem, type, arguments.callee)
                fn.apply(this, arguments);
            });
        }
    });

// Custom Event object for standardizing event objects between browsers.
    _V_.Event = function(src, props){
        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;

            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false ||
                src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;

            // Event type
        } else {
            this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if (props) { _V_.merge(this, props); }

        this.timeStamp = (new Date).getTime();

        // Mark it as fixed
        this[_V_.expando] = true;
    };

    _V_.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = returnTrue;

            var e = this.originalEvent;
            if (!e) { return; }

            // if preventDefault exists run it on the original event
            if (e.preventDefault) {
                e.preventDefault();
                // otherwise set the returnValue property of the original event to false (IE)
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = returnTrue;

            var e = this.originalEvent;
            if (!e) { return; }
            // if stopPropagation exists run it on the original event
            if (e.stopPropagation) { e.stopPropagation(); }
            // otherwise set the cancelBubble property of the original event to true (IE)
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        },
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse
    };
    _V_.Event.props = "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");

    function returnTrue(){ return true; }
    function returnFalse(){ return false; }

// Javascript JSON implementation
// (Parse Method Only)
// https://github.com/douglascrockford/JSON-js/blob/master/json2.js

    var JSON;
    if (!JSON) { JSON = {}; }

    (function(){
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

        if (typeof JSON.parse !== 'function') {
            JSON.parse = function (text, reviver) {
                var j;

                function walk(holder, key) {
                    var k, v, value = holder[key];
                    if (value && typeof value === 'object') {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v;
                                } else {
                                    delete value[k];
                                }
                            }
                        }
                    }
                    return reviver.call(holder, key, value);
                }
                text = String(text);
                cx.lastIndex = 0;
                if (cx.test(text)) {
                    text = text.replace(cx, function (a) {
                        return '\\u' +
                            ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                    });
                }

                if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                    j = eval('(' + text + ')');

                    return typeof reviver === 'function' ?
                        walk({'': j}, '') : j;
                }

                throw new SyntaxError('JSON.parse');
            };
        }
    }());
    /* UI Component- Base class for all UI objects
     ================================================================================ */
    _V_.Player = _V_.Component.extend({

        init: function(tag, addOptions, ready){

            this.tag = tag; // Store the original tag used to set options

            var el = this.el = _V_.createElement("div"), // Div to contain video and controls
                options = this.options = {},
                width = options.width = tag.getAttribute('width'),
                height = options.height = tag.getAttribute('height'),
            // Browsers default to 300x150 if there's no width/height or video size data.
                initWidth = width || 720,
                initHeight = height || 450;

            // Make player findable on elements
            tag.player = el.player = this;

            // Add callback to ready queue
            this.ready(ready);

            // Wrap video tag in div (el/box) container
            tag.parentNode.insertBefore(el, tag);
            el.appendChild(tag); // Breaks iPhone, fixed in HTML5 setup.

            // Give video tag properties to box
            el.id = this.id = tag.id; // ID will now reference box, not the video tag
            el.className = tag.className;
            // Update tag id/class for use as HTML5 playback tech
            tag.id += "_html5_api";
            tag.className = "vjs-tech";

            // Make player easily findable by ID
            _V_.players[el.id] = this;

            // Make box use width/height of tag, or default 300x150
            el.setAttribute("width", initWidth);
            el.setAttribute("height", initHeight);

            // Enforce with CSS since width/height attrs don't work on divs
            el.style.width = initWidth;//+"px";
            el.style.height = initHeight;//+"px";
            //MAX 2012/02/28 => suppression du +"px" pour fixer la vidéo à 100% de son conteneur
            // Remove width/height attrs from tag so CSS can make it 100% width/height
            tag.removeAttribute("width");
            tag.removeAttribute("height");

            // Set Options
            _V_.merge(options, _V_.options); // Copy Global Defaults
            _V_.merge(options, this.getVideoTagSettings()); // Override with Video Tag Options
            _V_.merge(options, addOptions); // Override/extend with options from setup call

            // Store controls setting, and then remove immediately so native controls don't flash.
            tag.removeAttribute("controls");

            // Poster will be handled by a manual <img>
            tag.removeAttribute("poster");

            // Empty video tag sources and tracks so the built in player doesn't use them also.
            if (tag.hasChildNodes()) {
                for (var i=0,j=tag.childNodes;i<j.length;i++) {
                    if (j[i].nodeName == "SOURCE" || j[i].nodeName == "TRACK") {
                        tag.removeChild(j[i]);
                    }
                }
            }

            // Holder for playback tech components
            this.techs = {};

            // Cache for video property values.
            this.values = {};

            this.addClass("vjs-paused");

            this.addEvent("ended", this.onEnded);
            this.addEvent("play", this.onPlay);
            this.addEvent("pause", this.onPause);
            this.addEvent("error", this.onError);

            // When the API is ready, loop through the components and add to the player.
            if (options.controls) {
                this.ready(function(){
                    this.initComponents();
                });
            }

            // If there are no sources when the player is initialized,
            // load the first supported playback technology.
            if (!options.sources || options.sources.length == 0) {
                for (var i=0,j=options.techOrder; i<j.length; i++) {
                    var techName = j[i],
                        tech = _V_[techName];

                    // Check if the browser supports this technology
                    if (tech.isSupported()) {
                        this.loadTech(techName);
                        break;
                    }
                }
            } else {
                // Loop through playback technologies (HTML5, Flash) and check for support
                // Then load the best source.
                this.src(options.sources);
            }
        },

        // Cache for video property values.
        values: {},

        destroy: function(){
            // Ensure that tracking progress and time progress will stop and plater deleted
            this.stopTrackingProgress();
            this.stopTrackingCurrentTime();
            delete _V_.players[this.id]
        },

        createElement: function(type, options){

        },

        getVideoTagSettings: function(){
            var options = {
                sources: [],
                tracks: []
            };

            options.src = this.tag.getAttribute("src");
            options.controls = this.tag.getAttribute("controls") !== null;
            options.poster = this.tag.getAttribute("poster");
            options.preload = this.tag.getAttribute("preload");
            options.autoplay = this.tag.getAttribute("autoplay") !== null; // hasAttribute not IE <8 compatible
            options.loop = this.tag.getAttribute("loop") !== null;
            options.muted = this.tag.getAttribute("muted") !== null;

            if (this.tag.hasChildNodes()) {
                for (var c,i=0,j=this.tag.childNodes;i<j.length;i++) {
                    c = j[i];
                    if (c.nodeName == "SOURCE") {
                        options.sources.push({
                            src: c.getAttribute('src'),
                            type: c.getAttribute('type'),
                            media: c.getAttribute('media'),
                            title: c.getAttribute('title')
                        });
                    }
                    if (c.nodeName == "TRACK") {
                        options.tracks.push(new _V_.Track({
                            src: c.getAttribute("src"),
                            kind: c.getAttribute("kind"),
                            srclang: c.getAttribute("srclang"),
                            label: c.getAttribute("label"),
                            'default': c.getAttribute("default") !== null,
                            title: c.getAttribute("title")
                        }, this));

                    }
                }
            }
            return options;
        },

        /* PLayback Technology (tech)
         ================================================================================ */
        // Load/Create an instance of playback technlogy including element and API methods
        // And append playback element in player div.
        loadTech: function(techName, source){

            // Pause and remove current playback technology
            if (this.tech) {
                this.unloadTech();

                // If the first time loading, HTML5 tag will exist but won't be initialized
                // So we need to remove it if we're not loading HTML5
            } else if (techName != "html5" && this.tag) {
                this.el.removeChild(this.tag);
                this.tag = false;
            }

            this.techName = techName;

            // Turn off API access because we're loading a new tech that might load asynchronously
            this.isReady = false;

            var techReady = function(){
                this.player.triggerReady();

                // Manually track progress in cases where the browser/flash player doesn't report it.
                if (!this.support.progressEvent) {
                    this.player.manualProgressOn();
                }

                // Manually track timeudpates in cases where the browser/flash player doesn't report it.
                if (!this.support.timeupdateEvent) {
                    this.player.manualTimeUpdatesOn();
                }
            }

            // Grab tech-specific options from player options and add source and parent element to use.
            var techOptions = _V_.merge({ source: source, parentEl: this.el }, this.options[techName])

            if (source) {
                if (source.src == this.values.src && this.values.currentTime > 0) {
                    techOptions.startTime = this.values.currentTime;
                }

                this.values.src = (source.src.indexOf('http://') == -1) ? 'http://'+window.location.host+source.src : source.src;
            }

            // Initialize tech instance
            this.tech = new _V_[techName](this, techOptions);
            this.tech.ready(techReady);
        },

        unloadTech: function(){
            this.tech.destroy();

            // Turn off any manual progress or timeupdate tracking
            if (this.manualProgress) { this.manualProgressOff(); }

            if (this.manualTimeUpdates) { this.manualTimeUpdatesOff(); }

            this.tech = false;
        },

        // There's many issues around changing the size of a Flash (or other plugin) object.
        // First is a plugin reload issue in Firefox that has been around for 11 years: https://bugzilla.mozilla.org/show_bug.cgi?id=90268
        // Then with the new fullscreen API, Mozilla and webkit browsers will reload the flash object after going to fullscreen.
        // To get around this, we're unloading the tech, caching source and currentTime values, and reloading the tech once the plugin is resized.
        // reloadTech: function(betweenFn){
        //   _V_.log("unloadingTech")
        //   this.unloadTech();
        //   _V_.log("unloadedTech")
        //   if (betweenFn) { betweenFn.call(); }
        //   _V_.log("LoadingTech")
        //   this.loadTech(this.techName, { src: this.values.src })
        //   _V_.log("loadedTech")
        // },

        /* Fallbacks for unsupported event types
         ================================================================================ */
        // Manually trigger progress events based on changes to the buffered amount
        // Many flash players and older HTML5 browsers don't send progress or progress-like events
        manualProgressOn: function(){
            this.manualProgress = true;

            // Trigger progress watching when a source begins loading
            this.trackProgress();

            // Watch for a native progress event call on the tech element
            // In HTML5, some older versions don't support the progress event
            // So we're assuming they don't, and turning off manual progress if they do.
            this.tech.addEvent("progress", function(){

                // Remove this listener from the element
                this.removeEvent("progress", arguments.callee);

                // Update known progress support for this playback technology
                this.support.progressEvent = true;

                // Turn off manual progress tracking
                this.player.manualProgressOff();
            });
        },

        manualProgressOff: function(){
            this.manualProgress = false;
            this.stopTrackingProgress();
        },

        trackProgress: function(){
            this.progressInterval = setInterval(_V_.proxy(this, function(){
                // Don't trigger unless buffered amount is greater than last time
                // log(this.values.bufferEnd, this.buffered().end(0), this.duration())
                /* TODO: update for multiple buffered regions */
                if (this.values.bufferEnd < this.buffered().end(0)) {
                    this.triggerEvent("progress");
                } else if (this.bufferedPercent() == 1) {
                    this.stopTrackingProgress();
                    this.triggerEvent("progress"); // Last update
                }
            }), 500);
        },
        stopTrackingProgress: function(){ clearInterval(this.progressInterval); },

        /* Time Tracking -------------------------------------------------------------- */
        manualTimeUpdatesOn: function(){
            this.manualTimeUpdates = true;

            this.addEvent("play", this.trackCurrentTime);
            this.addEvent("pause", this.stopTrackingCurrentTime);
            // timeupdate is also called by .currentTime whenever current time is set

            // Watch for native timeupdate event
            this.tech.addEvent("timeupdate", function(){

                // Remove this listener from the element
                this.removeEvent("timeupdate", arguments.callee);

                // Update known progress support for this playback technology
                this.support.timeupdateEvent = true;

                // Turn off manual progress tracking
                this.player.manualTimeUpdatesOff();
            });
        },

        manualTimeUpdatesOff: function(){
            this.manualTimeUpdates = false;
            this.stopTrackingCurrentTime();
            this.removeEvent("play", this.trackCurrentTime);
            this.removeEvent("pause", this.stopTrackingCurrentTime);
        },

        trackCurrentTime: function(){
            if (this.currentTimeInterval) { this.stopTrackingCurrentTime(); }
            this.currentTimeInterval = setInterval(_V_.proxy(this, function(){
                this.triggerEvent("timeupdate");
            }), 250); // 42 = 24 fps // 250 is what Webkit uses // FF uses 15
        },

        // Turn off play progress tracking (when paused or dragging)
        stopTrackingCurrentTime: function(){ clearInterval(this.currentTimeInterval); },

        /* Player event handlers (how the player reacts to certain events)
         ================================================================================ */
        onEnded: function(){
            if (this.options.loop) {
                this.currentTime(0);
                this.play();
            } else {
                this.pause();
                this.currentTime(0);
                this.pause();
            }
        },

        onPlay: function(){
            _V_.removeClass(this.el, "vjs-paused");
            _V_.addClass(this.el, "vjs-playing");
        },

        onPause: function(){
            _V_.removeClass(this.el, "vjs-playing");
            _V_.addClass(this.el, "vjs-paused");
        },

        onError: function(e) {
            _V_.log("Video Error", e);
        },

        /* Player API
         ================================================================================ */

        apiCall: function(method, arg){
            if (this.isReady) {
                return this.tech[method](arg);
            } else {
                _V_.log("The playback technology API is not ready yet. Use player.ready(myFunction)."+" ["+method+"]", arguments.callee.caller.arguments.callee.caller.arguments.callee.caller)
                return false;
                // throw new Error("The playback technology API is not ready yet. Use player.ready(myFunction)."+" ["+method+"]");
            }
        },

        play: function(){
            this.apiCall("play"); return this;
        },
        pause: function(){
            this.apiCall("pause"); return this;
        },
        paused: function(){
            return this.apiCall("paused");
        },

        currentTime: function(seconds){
            if (seconds !== undefined) {

                // Cache the last set value for smoother scrubbing.
                this.values.lastSetCurrentTime = seconds;

                this.apiCall("setCurrentTime", seconds);

                if (this.manualTimeUpdates) {
                    this.triggerEvent("timeupdate");
                }
                return this;
            }

            // Cache last currentTime and return
            return this.values.currentTime = this.apiCall("currentTime");
        },
        duration: function(){
            return this.apiCall("duration");
        },
        remainingTime: function(){
            return this.duration() - this.currentTime();
        },

        buffered: function(){
            var buffered = this.apiCall("buffered"),
                start = 0, end = this.values.bufferEnd = this.values.bufferEnd || 0,
                timeRange;

            if (buffered && buffered.length > 0 && buffered.end(0) !== end) {
                end = buffered.end(0);
                // Storing values allows them be overridden by setBufferedFromProgress
                this.values.bufferEnd = end;
            }

            return _V_.createTimeRange(start, end);
        },

        // Calculates amount of buffer is full
        bufferedPercent: function(){
            return (this.duration()) ? this.buffered().end(0) / this.duration() : 0;
        },

        volume: function(percentAsDecimal){
            if (percentAsDecimal !== undefined) {
                var vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal))); // Force value to between 0 and 1
                this.values.volume = vol;
                this.apiCall("setVolume", vol);
                _V_.setLocalStorage("volume", vol);
                return this;
            }
            // if (this.values.volume) { return this.values.volume; }
            return this.apiCall("volume");
        },
        muted: function(muted){
            if (muted !== undefined) {
                this.apiCall("setMuted", muted);
                return this;
            }
            return this.apiCall("muted");
        },

        width: function(width, skipListeners){
            if (width !== undefined) {
                this.el.width = width;
                this.el.style.width = width+"px";
                if (!skipListeners) { this.triggerEvent("resize"); }
                return this;
            }
            return parseInt(this.el.getAttribute("width"));
        },
        height: function(height){
            if (height !== undefined) {
                this.el.height = height;
                this.el.style.height = height+"px";
                this.triggerEvent("resize");
                return this;
            }
            return parseInt(this.el.getAttribute("height"));
        },
        size: function(width, height){
            // Skip resize listeners on width for optimization
            return this.width(width, true).height(height);
        },

        supportsFullScreen: function(){ return this.apiCall("supportsFullScreen"); },

        // Turn on fullscreen (or window) mode
        requestFullScreen: function(){
            var requestFullScreen = _V_.support.requestFullScreen;

            this.isFullScreen = true;

            // Check for browser element fullscreen support
            if (requestFullScreen) {

                // Flash and other plugins get reloaded when you take their parent to fullscreen.
                // To fix that we'll remove the tech, and reload it after the resize has finished.
                if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {

                    this.pause();
                    this.unloadTech();

                    _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
                        _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
                        this.loadTech(this.techName, { src: this.values.src });
                    }));

                    this.el[requestFullScreen.requestFn]();

                } else {
                    this.el[requestFullScreen.requestFn]();
                }

                // In case the user presses escape to exit fullscreen, we need to update fullscreen status
                _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
                    this.isFullScreen = document[requestFullScreen.isFullScreen];
                }));

            } else if (this.tech.supportsFullScreen()) {
                this.apiCall("enterFullScreen");

            } else {
                this.enterFullWindow();
            }

            this.triggerEvent("fullscreenchange");

            return this;
        },

        cancelFullScreen: function(){
            var requestFullScreen = _V_.support.requestFullScreen;

            // Check for browser element fullscreen support
            if (requestFullScreen) {

                // Flash and other plugins get reloaded when you take their parent to fullscreen.
                // To fix that we'll remove the tech, and reload it after the resize has finished.
                if (this.tech.support.fullscreenResize === false && this.options.flash.iFrameMode != true) {

                    this.pause();
                    this.unloadTech();

                    _V_.addEvent(document, requestFullScreen.eventName, this.proxy(function(){
                        _V_.removeEvent(document, requestFullScreen.eventName, arguments.callee);
                        this.loadTech(this.techName, { src: this.values.src })
                    }));

                    document[requestFullScreen.cancelFn]();

                } else {
                    document[requestFullScreen.cancelFn]();
                }

            } else if (this.tech.supportsFullScreen()) {
                this.apiCall("exitFullScreen");

            } else {
                this.exitFullWindow();
            }

            this.isFullScreen = false;
            this.triggerEvent("fullscreenchange");

            return this;
        },

        enterFullWindow: function(){
            this.isFullWindow = true;

            // Storing original doc overflow value to return to when fullscreen is off
            this.docOrigOverflow = document.documentElement.style.overflow;

            // Add listener for esc key to exit fullscreen
            _V_.addEvent(document, "keydown", _V_.proxy(this, this.fullWindowOnEscKey));

            // Hide any scroll bars
            document.documentElement.style.overflow = 'hidden';

            // Apply fullscreen styles
            _V_.addClass(document.body, "vjs-full-window");
            _V_.addClass(this.el, "vjs-fullscreen");

            this.triggerEvent("enterFullWindow");
        },

        fullWindowOnEscKey: function(event){
            if (event.keyCode == 27) {
                if (this.isFullScreen == true) {
                    this.cancelFullScreen();
                } else {
                    this.exitFullWindow();
                }
            }
        },

        exitFullWindow: function(){
            this.isFullWindow = false;
            _V_.removeEvent(document, "keydown", this.fullWindowOnEscKey);

            // Unhide scroll bars.
            document.documentElement.style.overflow = this.docOrigOverflow;

            // Remove fullscreen styles
            _V_.removeClass(document.body, "vjs-full-window");
            _V_.removeClass(this.el, "vjs-fullscreen");

            // Resize the box, controller, and poster to original sizes
            // this.positionAll();
            this.triggerEvent("exitFullWindow");
        },

        // src is a pretty powerful function
        // If you pass it an array of source objects, it will find the best source to play and use that object.src
        //   If the new source requires a new playback technology, it will switch to that.
        // If you pass it an object, it will set the source to object.src
        // If you pass it anything else (url string) it will set the video source to that
        src: function(source){
            // Case: Array of source objects to choose from and pick the best to play
            if (source instanceof Array) {

                var sources = source;

                techLoop: // Named loop for breaking both loops
                    // Loop through each playback technology in the options order
                    for (var i=0,j=this.options.techOrder;i<j.length;i++) {
                        var techName = j[i],
                            tech = _V_[techName];
                        // tech = _V_.tech[techName];

                        // Check if the browser supports this technology
                        if (tech.isSupported()) {

                            // Loop through each source object
                            for (var a=0,b=sources;a<b.length;a++) {
                                b[a].src = (b[a].src.indexOf('http://') == -1) ? 'http://'+window.location.host+b[a].src : b[a].src;
                                var source = b[a];

                                // Check if source can be played with this technology
                                if (tech.canPlaySource.call(this, source)) {

                                    // If this technology is already loaded, set source
                                    if (techName == this.techName) {
                                        this.src(source); // Passing the source object

                                        // Otherwise load this technology with chosen source
                                    } else {
                                        this.loadTech(techName, source);
                                    }

                                    break techLoop; // Break both loops
                                }
                            }
                        }
                    }

                // Case: Source object { src: "", type: "" ... }
            } else if (source instanceof Object) {
                if (_V_[this.techName].canPlaySource(source)) {
                    this.src(source.src);
                } else {
                    // Send through tech loop to check for a compatible technology.
                    this.src([source]);
                }
                // Case: URL String (http://myvideo...)
            } else {
                // Cache for getting last set source
                this.values.src = source;

                if (!this.isReady) {
                    this.ready(function(){
                        this.src(source);
                    });
                } else {
                    this.apiCall("src", source);
                    if (this.options.preload == "auto") {
                        this.load();
                    }
                    if (this.options.autoplay) {
                        this.play();
                    }
                }
            }
            return this;
        },

        // Begin loading the src data
        load: function(){
            this.apiCall("load");
            return this;
        },
        currentSrc: function(){
            return this.apiCall("currentSrc");
        },

        textTrackValue: function(kind, value){
            if (value !== undefined) {
                this.values[kind] = value;
                this.triggerEvent(kind+"update");
                return this;
            }
            return this.values[kind];
        },

        // Attributes/Options
        preload: function(value){
            if (value !== undefined) {
                this.apiCall("setPreload", value);
                this.options.preload = value;
                return this;
            }
            return this.apiCall("preload", value);
        },
        autoplay: function(value){
            if (value !== undefined) {
                this.apiCall("setAutoplay", value);
                this.options.autoplay = value;
                return this;
            }
            return this.apiCall("autoplay", value);
        },
        loop: function(value){
            if (value !== undefined) {
                this.apiCall("setLoop", value);
                this.options.loop = value;
                return this;
            }
            return this.apiCall("loop", value);
        },

        controls: function(){ return this.options.controls; },
        textTracks: function(){ return this.options.tracks; },
        poster: function(){ return this.apiCall("poster"); },

        error: function(){ return this.apiCall("error"); },
        networkState: function(){ return this.apiCall("networkState"); },
        readyState: function(){ return this.apiCall("readyState"); },
        seeking: function(){ return this.apiCall("seeking"); },
        initialTime: function(){ return this.apiCall("initialTime"); },
        startOffsetTime: function(){ return this.apiCall("startOffsetTime"); },
        played: function(){ return this.apiCall("played"); },
        seekable: function(){ return this.apiCall("seekable"); },
        ended: function(){ return this.apiCall("ended"); },
        videoTracks: function(){ return this.apiCall("videoTracks"); },
        audioTracks: function(){ return this.apiCall("audioTracks"); },
        videoWidth: function(){ return this.apiCall("videoWidth"); },
        videoHeight: function(){ return this.apiCall("videoHeight"); },
        defaultPlaybackRate: function(){ return this.apiCall("defaultPlaybackRate"); },
        playbackRate: function(){ return this.apiCall("playbackRate"); },
        // mediaGroup: function(){ return this.apiCall("mediaGroup"); },
        // controller: function(){ return this.apiCall("controller"); },
        controls: function(){ return this.apiCall("controls"); },
        defaultMuted: function(){ return this.apiCall("defaultMuted"); }
    });

// RequestFullscreen API
    (function(){
        var requestFn,
            cancelFn,
            eventName,
            isFullScreen,
            playerProto = _V_.Player.prototype;

        // Current W3C Spec
        // http://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api
        // Mozilla Draft: https://wiki.mozilla.org/Gecko:FullScreenAPI#fullscreenchange_event
        if (document.cancelFullscreen !== undefined) {
            requestFn = "requestFullscreen";
            cancelFn = "exitFullscreen";
            eventName = "fullscreenchange";
            isFullScreen = "fullScreen";

            // Webkit (Chrome/Safari) and Mozilla (Firefox) have working implementaitons
            // that use prefixes and vary slightly from the new W3C spec. Specifically, using 'exit' instead of 'cancel',
            // and lowercasing the 'S' in Fullscreen.
            // Other browsers don't have any hints of which version they might follow yet, so not going to try to predict by loopeing through all prefixes.
        } else {

            _V_.each(["moz", "webkit"], function(prefix){

                // https://github.com/zencoder/video-js/pull/128
                if ((prefix != "moz" || document.mozFullScreenEnabled) && document[prefix + "CancelFullScreen"] !== undefined) {
                    requestFn = prefix + "RequestFullScreen";
                    cancelFn = prefix + "CancelFullScreen";
                    eventName = prefix + "fullscreenchange";

                    if (prefix == "webkit") {
                        isFullScreen = prefix + "IsFullScreen";
                    } else {
                        _V_.log("moz here")
                        isFullScreen = prefix + "FullScreen";
                    }
                }

            });

        }

        if (requestFn) {
            _V_.support.requestFullScreen = {
                requestFn: requestFn,
                cancelFn: cancelFn,
                eventName: eventName,
                isFullScreen: isFullScreen
            };
        }

    })();/* Playback Technology - Base class for playback technologies
     ================================================================================ */
    _V_.PlaybackTech = _V_.Component.extend({
        init: function(player, options){
            // this._super(player, options);

            // Make playback element clickable
            // _V_.addEvent(this.el, "click", _V_.proxy(this, _V_.PlayToggle.prototype.onClick));

            // this.addEvent("click", this.proxy(this.onClick));

            // player.triggerEvent("techready");
        },
        // destroy: function(){},
        // createElement: function(){},
        onClick: function(){
            if (this.player.options.controls) {
                _V_.PlayToggle.prototype.onClick.call(this);
            }
        }
    });

// Create placeholder methods for each that warn when a method isn't supported by the current playback technology
    _V_.apiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
    _V_.each(_V_.apiMethods, function(methodName){
        _V_.PlaybackTech.prototype[methodName] = function(){
            throw new Error("The '"+method+"' method is not available on the playback technology's API");
        }
    });

    /* HTML5 Playback Technology - Wrapper for HTML5 Media API
     ================================================================================ */
    _V_.html5 = _V_.PlaybackTech.extend({

        init: function(player, options, ready){
            this.player = player;
            this.el = this.createElement();
            this.ready(ready);

            this.addEvent("click", this.proxy(this.onClick));

            var source = options.source;

            // If the element source is already set, we may have missed the loadstart event, and want to trigger it.
            // We don't want to set the source again and interrupt playback.
            if (source && this.el.currentSrc == source.src) {
                player.triggerEvent("loadstart");

                // Otherwise set the source if one was provided.
            } else if (source) {
                this.el.src = source.src;
            }

            // Chrome and Safari both have issues with autoplay.
            // In Safari (5.1.1), when we move the video element into the container div, autoplay doesn't work.
            // In Chrome (15), if you have autoplay + a poster + no controls, the video gets hidden (but audio plays)
            // This fixes both issues. Need to wait for API, so it updates displays correctly
            player.ready(function(){
                if (this.options.autoplay && this.paused()) {
                    this.tag.poster = null; // Chrome Fix. Fixed in Chrome v16.
                    this.play();
                }
            });

            this.setupTriggers();

            this.triggerReady();
        },

        destroy: function(){
            this.player.tag = false;
            this.removeTriggers();
        },

        createElement: function(){
            var html5 = _V_.html5,
                player = this.player,

            // If possible, reuse original tag for HTML5 playback technology element
                el = player.tag,
                newEl;

            // Check if this browser supports moving the element into the box.
            // On the iPhone video will break if you move the element,
            // So we have to create a brand new element.
            if (!el || this.support.movingElementInDOM === false) {

                // If the original tag is still there, remove it.
                if (el) {
                    player.el.removeChild(el);
                }

                newEl = _V_.createElement("video", {
                    id: el.id || player.el.id + "_html5_api",
                    className: el.className || "vjs-tech"
                });

                el = newEl;
                _V_.insertFirst(el, player.el);
            }

            // Update tag settings, in case they were overridden
            _V_.each(["autoplay","preload","loop","muted"], function(attr){ // ,"poster"
                el[attr] = player.options[attr];
            }, this);

            return el;
        },

        // Make video events trigger player events
        // May seem verbose here, but makes other APIs possible.
        setupTriggers: function(){
            _V_.each.call(this, _V_.html5.events, function(type){
                _V_.addEvent(this.el, type, _V_.proxy(this.player, this.eventHandler));
            });
        },
        removeTriggers: function(){
            _V_.each.call(this, _V_.html5.events, function(type){
                _V_.removeEvent(this.el, type, _V_.proxy(this.player, this.eventHandler));
            });
        },
        eventHandler: function(e){
            e.stopPropagation();
            this.triggerEvent(e);
        },

        play: function(){ this.el.play(); },
        pause: function(){ this.el.pause(); },
        paused: function(){ return this.el.paused; },

        currentTime: function(){ return this.el.currentTime; },
        setCurrentTime: function(seconds){
            try {
                this.el.currentTime = seconds;
            } catch(e) {
                _V_.log(e, "Video isn't ready. (VideoJS)");
                // this.warning(VideoJS.warnings.videoNotReady);
            }
        },

        duration: function(){ return this.el.duration || 0; },
        buffered: function(){ return this.el.buffered; },

        volume: function(){ return this.el.volume; },
        setVolume: function(percentAsDecimal){ this.el.volume = percentAsDecimal; },
        muted: function(){ return this.el.muted; },
        setMuted: function(muted){ this.el.muted = muted },

        width: function(){ return this.el.offsetWidth; },
        height: function(){ return this.el.offsetHeight; },

        supportsFullScreen: function(){
            if (typeof this.el.webkitEnterFullScreen == 'function') {

                // Seems to be broken in Chromium/Chrome && Safari in Leopard
                if (!navigator.userAgent.match("Chrome") && !navigator.userAgent.match("Mac OS X 10.5")) {
                    return true;
                }
            }
            return false;
        },

        enterFullScreen: function(){
            try {
                this.el.webkitEnterFullScreen();
            } catch (e) {
                if (e.code == 11) {
                    // this.warning(VideoJS.warnings.videoNotReady);
                    _V_.log("VideoJS: Video not ready.")
                }
            }
        },
        src: function(src){ this.el.src = src; },
        load: function(){ this.el.load(); },
        currentSrc: function(){ return this.el.currentSrc; },

        preload: function(){ return this.el.preload; },
        setPreload: function(val){ this.el.preload = val; },
        autoplay: function(){ return this.el.autoplay; },
        setAutoplay: function(val){ this.el.autoplay = val; },
        loop: function(){ return this.el.loop; },
        setLoop: function(val){ this.el.loop = val; },

        error: function(){ return this.el.error; },
        // networkState: function(){ return this.el.networkState; },
        // readyState: function(){ return this.el.readyState; },
        seeking: function(){ return this.el.seeking; },
        // initialTime: function(){ return this.el.initialTime; },
        // startOffsetTime: function(){ return this.el.startOffsetTime; },
        // played: function(){ return this.el.played; },
        // seekable: function(){ return this.el.seekable; },
        ended: function(){ return this.el.ended; },
        // videoTracks: function(){ return this.el.videoTracks; },
        // audioTracks: function(){ return this.el.audioTracks; },
        // videoWidth: function(){ return this.el.videoWidth; },
        // videoHeight: function(){ return this.el.videoHeight; },
        // textTracks: function(){ return this.el.textTracks; },
        // defaultPlaybackRate: function(){ return this.el.defaultPlaybackRate; },
        // playbackRate: function(){ return this.el.playbackRate; },
        // mediaGroup: function(){ return this.el.mediaGroup; },
        // controller: function(){ return this.el.controller; },
        controls: function(){ return this.player.options.controls; },
        defaultMuted: function(){ return this.el.defaultMuted; }
    });

    /* HTML5 Support Testing -------------------------------------------------------- */

    _V_.html5.isSupported = function(){
        return !!document.createElement("video").canPlayType;
    };

    _V_.html5.canPlaySource = function(srcObj){
        return !!document.createElement("video").canPlayType(srcObj.type);
        // TODO: Check Type
        // If no Type, check ext
        // Check Media Type
    };

// List of all HTML5 events (various uses).
    _V_.html5.events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(",");

    /* HTML5 Device Fixes ---------------------------------------------------------- */

    _V_.html5.prototype.support = {

        // Support for tech specific full screen. (webkitEnterFullScreen, not requestFullscreen)
        // http://developer.apple.com/library/safari/#documentation/AudioVideo/Reference/HTMLVideoElementClassReference/HTMLVideoElement/HTMLVideoElement.html
        // Seems to be broken in Chromium/Chrome && Safari in Leopard
        fullscreen: (typeof _V_.testVid.webkitEnterFullScreen !== undefined) ? (!_V_.ua.match("Chrome") && !_V_.ua.match("Mac OS X 10.5") ? true : false) : false,

        // In iOS, if you move a video element in the DOM, it breaks video playback.
        movingElementInDOM: !_V_.isIOS()

    };

// Android
    if (_V_.isAndroid()) {

        // Override Android 2.2 and less canPlayType method which is broken
        if (_V_.androidVersion() < 3) {
            document.createElement("video").constructor.prototype.canPlayType = function(type){
                return (type && type.toLowerCase().indexOf("video/mp4") != -1) ? "maybe" : "";
            };
        }
    }


    /* VideoJS-SWF - Custom Flash Player with HTML5-ish API - https://github.com/zencoder/video-js-swf
     ================================================================================ */
    _V_.flash = _V_.PlaybackTech.extend({

        init: function(player, options){
            this.player = player;

            var source = options.source,

            // Which element to embed in
                parentEl = options.parentEl,

            // Create a temporary element to be replaced by swf object
                placeHolder = this.el = _V_.createElement("div", { id: parentEl.id + "_temp_flash" }),

            // Generate ID for swf object
                objId = player.el.id+"_flash_api",

            // Store player options in local var for optimization
                playerOptions = player.options,

            // Merge default flashvars with ones passed in to init
                flashVars = _V_.merge({

                    // SWF Callback Functions
                    readyFunction: "_V_.flash.onReady",
                    eventProxyFunction: "_V_.flash.onEvent",
                    errorEventProxyFunction: "_V_.flash.onError",

                    // Player Settings
                    autoplay: playerOptions.autoplay,
                    preload: playerOptions.preload,
                    loop: playerOptions.loop,
                    muted: playerOptions.muted

                }, options.flashVars),

            // Merge default parames with ones passed in
                params = _V_.merge({
                    wmode: "opaque", // Opaque is needed to overlay controls, but can affect playback performance
                    bgcolor: "#000000" // Using bgcolor prevents a white flash when the object is loading
                }, options.params),

            // Merge default attributes with ones passed in
                attributes = _V_.merge({
                    id: objId,
                    name: objId, // Both ID and Name needed or swf to identifty itself
                    'class': 'vjs-tech'
                }, options.attributes)
                ;

            // If source was supplied pass as a flash var.
            if (source) {
                flashVars.src = encodeURIComponent(source.src);
            }

            // Add placeholder to player div
            _V_.insertFirst(placeHolder, parentEl);

            // Having issues with Flash reloading on certain page actions (hide/resize/fullscreen) in certain browsers
            // This allows resetting the playhead when we catch the reload
            if (options.startTime) {
                this.ready(function(){
                    this.load();
                    this.play();
                    this.currentTime(options.startTime);
                });
            }

            // Flash iFrame Mode
            // In web browsers there are multiple instances where changing the parent element or visibility of a plugin causes the plugin to reload.
            // - Firefox just about always. https://bugzilla.mozilla.org/show_bug.cgi?id=90268 (might be fixed by version 13)
            // - Webkit when hiding the plugin
            // - Webkit and Firefox when using requestFullScreen on a parent element
            // Loading the flash plugin into a dynamically generated iFrame gets around most of these issues.
            // Issues that remain include hiding the element and requestFullScreen in Firefox specifically

            // There's on particularly annoying issue with this method which is that Firefox throws a security error on an offsite Flash object loaded into a dynamically created iFrame.
            // Even though the iframe was inserted into a page on the web, Firefox + Flash considers it a local app trying to access an internet file.
            // I tried mulitple ways of setting the iframe src attribute but couldn't find a src that worked well. Tried a real/fake source, in/out of domain.
            // Also tried a method from stackoverflow that caused a security error in all browsers. http://stackoverflow.com/questions/2486901/how-to-set-document-domain-for-a-dynamically-generated-iframe
            // In the end the solution I found to work was setting the iframe window.location.href right before doing a document.write of the Flash object.
            // The only downside of this it seems to trigger another http request to the original page (no matter what's put in the href). Not sure why that is.

            // NOTE (2012-01-29): Cannot get Firefox to load the remote hosted SWF into a dynamically created iFrame
            // Firefox 9 throws a security error, unleess you call location.href right before doc.write.
            //    Not sure why that even works, but it causes the browser to look like it's continuously trying to load the page.
            // Firefox 3.6 keeps calling the iframe onload function anytime I write to it, causing an endless loop.

            if (options.iFrameMode == true && !_V_.isFF) {

                // Create iFrame with vjs-tech class so it's 100% width/height
                var iFrm = _V_.createElement("iframe", {
                    id: objId + "_iframe",
                    name: objId + "_iframe",
                    className: "vjs-tech",
                    scrolling: "no",
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0
                });

                // Update ready function names in flash vars for iframe window
                flashVars.readyFunction = "ready";
                flashVars.eventProxyFunction = "events";
                flashVars.errorEventProxyFunction = "errors";

                // Tried multiple methods to get this to work in all browsers

                // Tried embedding the flash object in the page first, and then adding a place holder to the iframe, then replacing the placeholder with the page object.
                // The goal here was to try to load the swf URL in the parent page first and hope that got around the firefox security error
                // var newObj = _V_.flash.embed(options.swf, placeHolder, flashVars, params, attributes);
                // (in onload)
                //  var temp = _V_.createElement("a", { id:"asdf", innerHTML: "asdf" } );
                //  iDoc.body.appendChild(temp);

                // Tried embedding the flash object through javascript in the iframe source.
                // This works in webkit but still triggers the firefox security error
                // iFrm.src = "javascript: document.write('"+_V_.flash.getEmbedCode(options.swf, flashVars, params, attributes)+"');";

                // Tried an actual local iframe just to make sure that works, but it kills the easiness of the CDN version if you require the user to host an iframe
                // We should add an option to host the iframe locally though, because it could help a lot of issues.
                // iFrm.src = "iframe.html";

                // Wait until iFrame has loaded to write into it.
                _V_.addEvent(iFrm, "load", _V_.proxy(this, function(){

                    var iDoc, objTag, swfLoc,
                        iWin = iFrm.contentWindow,
                        varString = "";


                    // The one working method I found was to use the iframe's document.write() to create the swf object
                    // This got around the security issue in all browsers except firefox.
                    // I did find a hack where if I call the iframe's window.location.href="", it would get around the security error
                    // However, the main page would look like it was loading indefinitely (URL bar loading spinner would never stop)
                    // Plus Firefox 3.6 didn't work no matter what I tried.
                    // if (_V_.ua.match("Firefox")) {
                    //   iWin.location.href = "";
                    // }

                    // Get the iFrame's document depending on what the browser supports
                    iDoc = iFrm.contentDocument ? iFrm.contentDocument : iFrm.contentWindow.document;

                    // Tried ensuring both document domains were the same, but they already were, so that wasn't the issue.
                    // Even tried adding /. that was mentioned in a browser security writeup
                    // document.domain = document.domain+"/.";
                    // iDoc.domain = document.domain+"/.";

                    // Tried adding the object to the iframe doc's innerHTML. Security error in all browsers.
                    // iDoc.body.innerHTML = swfObjectHTML;

                    // Tried appending the object to the iframe doc's body. Security error in all browsers.
                    // iDoc.body.appendChild(swfObject);

                    // Using document.write actually got around the security error that browsers were throwing.
                    // Again, it's a dynamically generated (same domain) iframe, loading an external Flash swf.
                    // Not sure why that's a security issue, but apparently it is.
                    iDoc.write(_V_.flash.getEmbedCode(options.swf, flashVars, params, attributes));

                    // Setting variables on the window needs to come after the doc write because otherwise they can get reset in some browsers
                    // So far no issues with swf ready event being called before it's set on the window.
                    iWin.player = this.player;

                    // Create swf ready function for iFrame window
                    iWin.ready = _V_.proxy(this.player, function(currSwf){
                        var el = iDoc.getElementById(currSwf),
                            player = this,
                            tech = player.tech;

                        // Update reference to playback technology element
                        tech.el = el;

                        // Now that the element is ready, make a click on the swf play the video
                        _V_.addEvent(el, "click", tech.proxy(tech.onClick));

                        // Make sure swf is actually ready. Sometimes the API isn't actually yet.
                        _V_.flash.checkReady(tech);
                    });

                    // Create event listener for all swf events
                    iWin.events = _V_.proxy(this.player, function(swfID, eventName, other){
                        var player = this;
                        if (player && player.techName == "flash") {
                            player.triggerEvent(eventName);
                        }
                    });

                    // Create error listener for all swf errors
                    iWin.errors = _V_.proxy(this.player, function(swfID, eventName){
                        _V_.log("Flash Error", eventName);
                    });

                }));

                // Replace placeholder with iFrame (it will load now)
                placeHolder.parentNode.replaceChild(iFrm, placeHolder);

                // If not using iFrame mode, embed as normal object
            } else {
                _V_.flash.embed(options.swf, placeHolder, flashVars, params, attributes);
            }
        },

        destroy: function(){
            this.el.parentNode.removeChild(this.el);
        },

        // setupTriggers: function(){}, // Using global onEvent func to distribute events

        play: function(){ this.el.vjs_play(); },
        pause: function(){ this.el.vjs_pause(); },
        src: function(src){
            this.el.vjs_src(src);

            // Currently the SWF doesn't autoplay if you load a source later.
            // e.g. Load player w/ no source, wait 2s, set src.
            if (this.player.autoplay) {
                var tech = this;
                setTimeout(function(){ tech.play(); }, 0);
            }
        },
        load: function(){ this.el.vjs_load(); },
        poster: function(){ this.el.vjs_getProperty("poster"); },

        buffered: function(){
            return _V_.createTimeRange(0, this.el.vjs_getProperty("buffered"));
        },

        supportsFullScreen: function(){
            return false; // Flash does not allow fullscreen through javascript
        },
        enterFullScreen: function(){
            return false;
        }
    });

// Create setters and getters for attributes
    (function(){

        var api = _V_.flash.prototype,
            readWrite = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),
            readOnly = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","),
            callOnly = "load,play,pause".split(",");
        // Overridden: buffered

        createSetter = function(attr){
            var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
            api["set"+attrUpper] = function(val){ return this.el.vjs_setProperty(attr, val); };
        },

            createGetter = function(attr){
                api[attr] = function(){ return this.el.vjs_getProperty(attr); };
            }
        ;

        // Create getter and setters for all read/write attributes
        _V_.each(readWrite, function(attr){
            createGetter(attr);
            createSetter(attr);
        });

        // Create getters for read-only attributes
        _V_.each(readOnly, function(attr){
            createGetter(attr);
        });

    })();

    /* Flash Support Testing -------------------------------------------------------- */

    _V_.flash.isSupported = function(){
        return _V_.flash.version()[0] >= 10;
        // return swfobject.hasFlashPlayerVersion("10");
    };

    _V_.flash.canPlaySource = function(srcObj){
        if (srcObj.type in _V_.flash.prototype.support.formats) { return "maybe"; }
    };

    _V_.flash.prototype.support = {
        formats: {
            "video/flv": "FLV",
            "video/x-flv": "FLV",
            "video/mp4": "MP4",
            "video/m4v": "MP4"
        },

        // Optional events that we can manually mimic with timers
        progressEvent: false,
        timeupdateEvent: false,

        // Resizing plugins using request fullscreen reloads the plugin
        fullscreenResize: false,

        // Resizing plugins in Firefox always reloads the plugin (e.g. full window mode)
        parentResize: !(_V_.ua.match("Firefox"))
    };

    _V_.flash.onReady = function(currSwf){

        var el = _V_.el(currSwf);

        // Get player from box
        // On firefox reloads, el might already have a player
        var player = el.player || el.parentNode.player,
            tech = player.tech;

        // Reference player on tech element
        el.player = player;

        // Update reference to playback technology element
        tech.el = el;

        // Now that the element is ready, make a click on the swf play the video
        tech.addEvent("click", tech.onClick);

        _V_.flash.checkReady(tech);
    };

// The SWF isn't alwasy ready when it says it is. Sometimes the API functions still need to be added to the object.
// If it's not ready, we set a timeout to check again shortly.
    _V_.flash.checkReady = function(tech){

        // Check if API property exists
        if (tech.el.vjs_getProperty) {

            // If so, tell tech it's ready
            tech.triggerReady();

            // Otherwise wait longer.
        } else {

            setTimeout(function(){
                _V_.flash.checkReady(tech);
            }, 50);

        }
    };

// Trigger events from the swf on the player
    _V_.flash.onEvent = function(swfID, eventName){
        var player = _V_.el(swfID).player;
        player.triggerEvent(eventName);
    };

// Log errors from the swf
    _V_.flash.onError = function(swfID, err){
        _V_.log("Flash Error", err, swfID);
    };

// Flash Version Check
    _V_.flash.version = function(){
        var version = '0,0,0'

        // IE
        try {
            version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];

            // other browsers
        } catch(e) {
            try {
                if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
                    version = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
                }
            } catch(e) {}
        }
        return version.split(",");
    }

// Flash embedding method. Only used in non-iframe mode
    _V_.flash.embed = function(swf, placeHolder, flashVars, params, attributes){
        var code = _V_.flash.getEmbedCode(swf, flashVars, params, attributes),

        // Get element by embedding code and retrieving created element
            obj = _V_.createElement("div", { innerHTML: code }).childNodes[0],

            par = placeHolder.parentNode
            ;

        placeHolder.parentNode.replaceChild(obj, placeHolder);

        // IE6 seems to have an issue where it won't initialize the swf object after injecting it.
        // This is a dumb temporary fix
        if (_V_.isIE()) {
            var newObj = par.childNodes[0];
            setTimeout(function(){
                newObj.style.display = "block";
            }, 1000);
        }

        return obj;

    };

    _V_.flash.getEmbedCode = function(swf, flashVars, params, attributes){

        var objTag = '<object type="application/x-shockwave-flash"',
            flashVarsString = '',
            paramsString = ''
        attrsString = '';

        // Convert flash vars to string
        if (flashVars) {
            _V_.eachProp(flashVars, function(key, val){
                flashVarsString += (key + "=" + val + "&amp;");
            });
        }

        // Add swf, flashVars, and other default params
        params = _V_.merge({
            movie: swf,
            flashvars: flashVarsString,
            allowScriptAccess: "always", // Required to talk to swf
            allowNetworking: "all" // All should be default, but having security issues.
        }, params);

        // Create param tags string
        _V_.eachProp(params, function(key, val){
            paramsString += '<param name="'+key+'" value="'+val+'" />';
        });

        attributes = _V_.merge({
            // Add swf to attributes (need both for IE and Others to work)
            data: swf,

            // Default to 100% width/height
            width: "100%",
            height: "100%"

        }, attributes);

        // Create Attributes string
        _V_.eachProp(attributes, function(key, val){
            attrsString += (key + '="' + val + '" ');
        });

        return objTag + attrsString + '>' + paramsString + '</object>';
    }
    _V_.Track = function(attributes, player){
        // Store reference to the parent player
        this.player = player;

        this.src = attributes.src;
        this.kind = attributes.kind;
        this.srclang = attributes.srclang;
        this.label = attributes.label;
        this["default"] = attributes["default"]; // 'default' is reserved-ish
        this.title = attributes.title;

        this.cues = [];
        this.currentCue = false;
        this.lastCueIndex = 0;

        // Update current cue on timeupdate
        player.addEvent("timeupdate", _V_.proxy(this, this.update));

        // Reset cue time on media end
        player.addEvent("ended", _V_.proxy(this, function() { this.lastCueIndex = 0; }));

        // Load Track File
        _V_.get(attributes.src, _V_.proxy(this, this.parseCues));
    };

    _V_.Track.prototype = {

        parseCues: function(srcContent) {
            var cue, time, text,
                lines = srcContent.split("\n"),
                line = "";

            for (var i=0; i<lines.length-1; i++) {
                line = _V_.trim(lines[i]); // Trim whitespace and linebreaks
                if (line) { // Loop until a line with content

                    // First line - Number
                    cue = {
                        id: line, // Cue Number
                        index: this.cues.length // Position in Array
                    };

                    // Second line - Time
                    line = _V_.trim(lines[++i]);
                    time = line.split(" --> ");
                    cue.startTime = this.parseCueTime(time[0]);
                    cue.endTime = this.parseCueTime(time[1]);

                    // Additional lines - Cue Text
                    text = [];
                    for (var j=i; j<lines.length-1; j++) { // Loop until a blank line or end of lines
                        line = _V_.trim(lines[++i]);
                        if (!line) { break; }
                        text.push(line);
                    }
                    cue.text = text.join('<br/>');

                    // Add this cue
                    this.cues.push(cue);
                }
            }
        },

        parseCueTime: function(timeText) {
            var parts = timeText.split(':'),
                time = 0;
            // hours => seconds
            time += parseFloat(parts[0])*60*60;
            // minutes => seconds
            time += parseFloat(parts[1])*60;
            // get seconds
            var seconds = parts[2].split(/\.|,/); // Either . or ,
            time += parseFloat(seconds[0]);
            // add miliseconds
            ms = parseFloat(seconds[1]);
            if (ms) { time += ms/1000; }
            return time;
        },

        update: function(){
            // Assuming all cues are in order by time, and do not overlap
            if (this.cues && this.cues.length > 0) {
                var time = this.player.currentTime();
                // If current cue should stay showing, don't do anything. Otherwise, find new cue.
                if (!this.currentCue || this.currentCue.startTime >= time || this.currentCue.endTime < time) {
                    var newSubIndex = false,
                    // Loop in reverse if lastCue is after current time (optimization)
                    // Meaning the user is scrubbing in reverse or rewinding
                        reverse = (this.cues[this.lastCueIndex].startTime > time),
                    // If reverse, step back 1 becase we know it's not the lastCue
                        i = this.lastCueIndex - (reverse ? 1 : 0);
                    while (true) { // Loop until broken
                        if (reverse) { // Looping in reverse
                            // Stop if no more, or this cue ends before the current time (no earlier cues should apply)
                            if (i < 0 || this.cues[i].endTime < time) { break; }
                            // End is greater than time, so if start is less, show this cue
                            if (this.cues[i].startTime < time) {
                                newSubIndex = i;
                                break;
                            }
                            i--;
                        } else { // Looping forward
                            // Stop if no more, or this cue starts after time (no later cues should apply)
                            if (i >= this.cues.length || this.cues[i].startTime > time) { break; }
                            // Start is less than time, so if end is later, show this cue
                            if (this.cues[i].endTime > time) {
                                newSubIndex = i;
                                break;
                            }
                            i++;
                        }
                    }

                    // Set or clear current cue
                    if (newSubIndex !== false) {
                        this.currentCue = this.cues[newSubIndex];
                        this.lastCueIndex = newSubIndex;
                        this.updatePlayer(this.currentCue.text);

                    } else if (this.currentCue) {
                        this.currentCue = false;
                        this.updatePlayer("");
                    }
                }
            }
        },

        // Update the stored value for the current track kind
        // and trigger an event to update all text track displays.
        updatePlayer: function(text){
            this.player.textTrackValue(this.kind, text);
        }
    };
    _V_.addEvent(window, "load", function(){
        _V_.windowLoaded = true;
    });

// Run Auto-load players
    _V_.autoSetup();
// Expose to global
    window.VideoJS = window._V_ = VideoJS;

// End self-executing function
})(window);

var core = {
    _locale: '',
    _platform: '',
    _header: [],
    _footer: [],
    flagHome: false,
    intersticiel: true,
    ie: false,
    oldIe : false,
    ie7 : false,
    mobile: false,
    android : false,
    ipad: false,
    overlay: $('#overlay'),
    dir: null,
    loc: [],
    h : 0,
    IsFunction: function(a) {
        return typeof(a) == "function";
    },
    isVideo : false,
    isSlideshow : false,

    Init: function() {
        $(".DS_addict_plusPopin").unbind('click').bind('click', core.popinFoot.open );
        core.accordionFoot.init();

        core.h = $('body').height();

        core.lang = {
            'fr_BE': 'fr',
            'nl_BE': 'nl',
            'de_DE': 'de',
            'es_ES': 'es',
            'fr_FR': 'fr',
            'it_IT': 'it',
            'ru_RU': 'ru',
            'en_UK': 'en',
            'pt_BR': 'pt',
            'en_US': 'en',
            'zh_CN': 'zh',
            'zh_HK': 'zh',
            'en_HK': 'en',
            'ja_JP': 'ja',
            'ko_KR': 'ko',
            'zh_TW': 'zh',
            'en': 'en'
        };
        core.market = {
            'fr_BE': 'bel',
            'nl_BE': 'bel',
            'de_DE': 'deu',
            'es_ES': 'esp',
            'fr_FR': 'fra',
            'it_IT': 'ita',
            'ru_RU': 'rus',
            'en_UK': 'gbr',
            'pt_BR': 'bra',
            'en_US': 'usa',
            'zh_CN': 'chn',
            'zh_HK': 'hkg',
            'en_HK': 'hkg',
            'ja_JP': 'jpn',
            'ko_KR': 'kor',
            'zh_TW': 'twn',
            'en': 'int'
        };
        core.loc = {
            'fr_BE': 'bel/fr',
            'nl_BE': 'bel/nl',
            'de_DE': 'deu/de',
            'es_ES': 'esp/es',
            'fr_FR': 'fra/fr',
            'it_IT': 'ita/it',
            'ru_RU': 'rus/ru',
            'en_UK': 'gbr/en',
            'pt_BR': 'bra/pt',
            'en_US': 'usa/en',
            'zh_CN': 'chn/zh',
            'zh_HK': 'hkg/zh',
            'en_HK': 'hkg/en',
            'ja_JP': 'jpn/ja',
            'ko_KR': 'kor/ko',
            'zh_TW': 'twn/zh',
            'en': 'int/en'
        };

        //ie6 blocker
        if ( $.browser.version === '6.0' ) {

            $('body').addClass('ieFix').prepend('<div class="wrapMsg"><div class="msg"><strong>La version de votre navigateur est trop ancienne.</strong><p>Pour une meilleure expérience, nous vous recommandons de télécharger une version plus récente de votre navigateur.</p><a href="http://www.google.fr/intl/fr/chrome/browser/">Télécharger</a></div></div>');

        }

        core.loadLocale();

        if (navigator.userAgent.match(/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {
            if ( ((screen.width  >= 800) && (screen.height >= 480)) || navigator.userAgent.match(/ipad/gi) ) {
                core.ipad = true;
                $('body').addClass('ipad');
            } else {
                core.mobile = true;
                if (navigator.userAgent.match(/(android)/gi)) {
                    core.android = true;
                }
            }
        }

        if (navigator.userAgent.match(/(blackberry|bb10|playbook)/gi)) $('body').addClass('bb');

        if ($.browser.msie) core.ie = true;

        if ($.browser.msie && $.browser.version <= 8) core.oldIe = true;

        if ($.browser.msie && $.browser.version <= 7) core.ie7 = true;

        if (core.mobile === false)
        {
            core.createLayout();

            if (core.ie === false)
            {
                var cl = new CanvasLoader('canvasloader-container');
                cl.setColor('#7d7d7d'); // default is '#000000'
                cl.setShape('spiral'); // default is 'oval'
                cl.show();
            }

            core.hash();
            core.resize();
            core.ajaxify();

            $('#content.minisite a').on('click', function()
            {
                hasher.changed.active = false;
            });

            if (modules) modules.header.init();
        }
        else
        {
            var splitHref = window.location.href.split('/');
            if(splitHref[5] == '') splitHref[5] = 'homepage';
            var href ='';

            for (var h = 5; h < splitHref.length; ++h) {
                if(h == splitHref.length - 1) href += splitHref[h];
                else href += splitHref[h] + '/';
            }

            core.pushTrack(href);

            // add class for android device
            if (/Android/i.test(navigator.userAgent))
            {
                $('body').addClass('androidUa');
            }

            // create return button on header
            $('#header div a').click(function(e)
            {
                e.preventDefault();

                var route = Routing.generate('diorBackstageFrontBundle_index_home', {
                    '_locale': core._locale,
                    '_platform': core._platform
                });
                document.location.href = route;
            });

            // rearrange popin
            if ($('#popin').length > 0)
            {
                var cover = $('.popin-cover');

                cover.remove();

                $('.nav-popin').after(cover);
            };

            // add typo function
            if ($('#popin').length > 0 || $('.look-cover').length > 0)
            {

                var tmp = '<div class="typo border"><a href="#" class="less no-redir">normal</a><a href="#" class=" no-redir more">big</a></div>';

                $('.tag').before(tmp);

                $('.typo a').click(function(e) {

                    e.preventDefault();

                    if($(this).hasClass('big'))
                    {
                        $('.typo a.less').removeClass('big').addClass('lil');
                        $('.typo a.more').removeClass('big').addClass('lil');
                        $('p').css({
                            'font-size': '12px'
                        });
                    }
                    else
                    {
                        $('.typo a.less').removeClass('lil').addClass('big');
                        $('.typo a.more').removeClass('lil').addClass('big');
                        $('p').css({
                            'font-size': '14px'
                        });
                    }
                });
            }

            // launch FX
            if($('#content').length > 0)
            {
                var controller = $('#content').attr('data-controller');
                core.fire(controller);
            }
            if($('#popin').length > 0)
            {
                core.popin.launchFx();
            }

        };

        //FB.init({appId: "205785986155879", status: true, cookie: true});
    },

    getParameters : function()
    {
        var searchString = window.location.href.split('?'),
            params = searchString[1].split("&"),
            hashParam = {};

        if (!searchString || searchString === '') return {};

        for (var i = 0; i < params.length; i++) {
            var val = params[i].split("=");
            hashParam[unescape(val[0])] = unescape(val[1]);
        }

        return hashParam.anchor;
    },

    ajaxify: function()
    {
        $('a').each(function(i, item)
        {
            var href = $(this).attr('href');

            if (typeof(href) !== 'undefined')
            {
                var href = $(this).attr('href'),
                    dataAjax = $(this).attr('data-ajax');
            };
            if (typeof(href) !== 'undefined' && dataAjax != 'false')
            {
                var splitedHref = href.split('/'),
                    newUri = '';

                if (splitedHref[0] !== 'http:' && splitedHref[0] !== 'https:')
                {
                    for (var i = 0; i <= splitedHref.length; ++i)
                    {
                        var tmp = "/" + splitedHref[i];

                        if (i == 0) tmp = splitedHref[i];
                        if (i == 3) tmp = '/#/' + splitedHref[i];
                        if (splitedHref[i] === '#') tmp = "/" + splitedHref[i];
                        if (typeof(splitedHref[i]) != 'undefined')
                        {
                            newUri += tmp;
                        }
                    };
                    $(this).attr('href', newUri);
                }

                if(core.ie7)
                {
                    var sectionHref = splitedHref[5];

                    if(sectionHref == 'article' || sectionHref == 'look'|| sectionHref == 'search')
                    {
                        for (var i = 0; i <= splitedHref.length; ++i)
                        {
                            var tmp = "/" + splitedHref[i];

                            if (i == 0) tmp = splitedHref[i];
                            if (i == 5) tmp = '/#/' + splitedHref[i];
                            if (splitedHref[i] === '#') tmp = "/" + splitedHref[i];
                            if (typeof(splitedHref[i]) != 'undefined')
                            {
                                newUri += tmp;
                            }
                        };
                        $(this).attr('href', newUri).data('ie7Ajax', true);
                    }
                }
            }
        });
    },

    resize: function()
    {
        $(window).resize(function()
        {

            var _wW = $(window).width();
            var _W = core.loader.wrapper.width();
            var _H = core.loader.wrapper.height();
            var _css = {
                'border-left-width': _W + 1,
                'border-top-width': _H + 2
            };

            $('#topbar').css({
                'width': _wW
            });

            //placement des éléments de navigation
            var navMag = $('#nav-mag'),
                navSearch = $('#nav-search'),
                windowH = $(window).height(),
                navMagH = navMag.height(),
                navSearchH = navSearch.height(),
                loader = $('#loader div'),
                marTop = 0;

            if(core.ie == true) marTop = ((windowH - 40) / 2) + 120;
            else marTop = ((windowH - 40) / 4);

            loader.css({'margin-top': marTop});

            navMag.css({
                'top': (windowH - navMagH) / 2
            });
            navSearch.css({
                'top': (windowH - navSearchH) / 2
            });
        }).trigger('resize')
    },

    popinFoot: {

        content: null,

        open: function( e ){
            e.preventDefault();


            var id      				= $(this).attr('href');
            core.popinFoot.content = $(id).clone();

            $('body').css('overflow' , 'hidden' );
            $('.m_addict_popin .m_popin-content').prepend( core.popinFoot.content ).find('.m_popWrap').removeAttr('style');
            $('.DS_addict_overlay').fadeIn(500).find('.m_addict_popin').delay(500).fadeIn(500).parents('body').find('#content').css('left' , '-200%' );

            $('.m_nav-popin a.m_closePopin').unbind('click').bind('click', core.popinFoot.close );
        },

        close: function(e){
            e.preventDefault();
            $('#content').removeAttr('style');
            $('.DS_addict_overlay').fadeOut(1000)
                .find('#m_popin .m_popin-content').delay(500).empty();
            $('body').css('overflow' , 'scroll' );
            $(".m_addict_popin .m_popin-content , .m_addict_popin").removeAttr('style');
        }

    },

    accordionFoot: {

        init: function() {
            $('[data-role=accordion]').find('.trigger').live("click", function() {
                core.accordionFoot.run( $(this) );
            });

        },

        run: function( $this ) {

            if( $this.hasClass('on') ) {
                $this.removeClass('on').parent().find('.target').slideUp('slow');
            } else {
                $('[data-role=accordion]').find('.trigger').removeClass('on').next('.target').slideUp('slow');
                $this.addClass('on').parent().find('.target').slideDown('slow');
            }
        }
    },

    hash: function()
    {
        function handleChanges(newHash, oldHash)
        {
            //console.log('[core] handleChanges', newHash, oldHash);
            //console.log('[core] handleChanges', core.firstHash );

            // if first access to the site, and no hash : track homepage and manage all cases : /, /#, /#/
            if (oldHash===undefined && newHash==='') {
                //console.log('- first time: HOME without #', oldHash);
                core.pushTrack(newHash);
                core.managePage.page.build( document.getElementsByTagName('html')[0].innerHTML, oldHash );
                return;
            } else {
                //console.log('- navigation');
                core.pushTrack(newHash);
                core.managePage.init(newHash, oldHash);
            }
        };

        var locationHref = window.location.href;
        //console.log('[core] location = ', locationHref);

        if(!locationHref.match(/minisite|dioraddict-fluidstick/)) {
            // listen to url changes
            hasher.changed.add(handleChanges);

            // init hasher to have the first track (no more track on html base.html.twig)
            // see handleChange
            hasher.initialized.add(handleChanges);
            hasher.init();
        } else {
            hasher.changed.active = false;
        }

    },

    pushTrack : function(href)
    {
        var location = document.location.href;

        var splitLocation = location.split('/');
        var loc = splitLocation[4];

        if(core.mobile == true)
        {
            if(splitLocation[5] == 'special')
            {
                var special = '';
                var anchor = '';
                var search = document.location.search.split('=');

                if(search == '')
                {
                    anchor = 'homepage';
                    special = splitLocation[7];

                    href = special + '/' + anchor;
                }
                if(search[0]==="?anchor")
                {
                    anchor = search[1];

                    var splitSpecial = splitLocation[7].split('?');
                    special = splitSpecial[0];

                    href = special + '/' + anchor;
                }
                else
                {
                    anchor = 'homepage';

                    var splitSpecial = splitLocation[7].split('?');
                    special = splitSpecial[0];

                    href = special + '/' + anchor;
                }
            }
        }
        else
        {
            if(splitLocation[4] == 'special')
            {
                var special = '';
                var anchor = '';
                var search = document.location.search.split('=');

                if(search == '')
                {
                    anchor = 'homepage';
                    special = splitLocation[6];

                    href = special + '/' + anchor;
                }
                if(search[0]==="?anchor")
                {
                    anchor = search[1];

                    var splitSpecial = splitLocation[6].split('?');
                    special = splitSpecial[0];

                    href = special + '/' + anchor;
                }
                else
                {
                    anchor = 'homepage';

                    var splitSpecial = splitLocation[6].split('?');
                    special = splitSpecial[0];

                    href = special + '/' + anchor;
                }
            }
            else
            {
                var splitHref = window.location.href.split('/');
                if(splitHref[5] == '') splitHref[5] = 'homepage';
                var href ='';

                for (var h = 5; h < splitHref.length; ++h) {
                    if(splitHref[h] != '#')
                    {
                        if(h == splitHref.length - 1) href += splitHref[h];
                        else href += splitHref[h] + '/';
                    }
                }

                var searchHref = href.split('?');

                if(searchHref[1] != undefined)
                {
                    var splitedSearch = searchHref[1].split('&');
                    var splitedParameter = splitedSearch[0].split('=');

                    if(splitedParameter[0] == 'anchor')
                    {
                        href = searchHref[0] + '/' + splitedParameter[1];
                    }
                    else
                    {
                        href = searchHref[0];
                    }
                }
            }
        }



        var locale = "";
        switch(loc)
        {
            case "fr_BE" :
                locale = 'bel/fr';
                break;

            case "nl_BE" :
                locale = 'bel/nl';
                break;

            case "de_DE" :
                locale = 'deu/de';
                break;

            case "es_ES" :
                locale = 'esp/es';
                break;

            case "fr_FR" :
                locale = 'fra/fr';
                break;

            case "it_IT" :
                locale = 'ita/it';
                break;

            case "ru_RU" :
                locale = 'rus/ru';
                break;

            case "en_UK" :
                locale = 'gbr/en';
                break;

            case "pt_BR" :
                locale = 'bra/pt';
                break;

            case "en_US" :
                locale = 'usa/en';
                break;

            case "zh_CN" :
                locale = 'chn/zh';
                break;

            case "zh_HK" :
                locale = 'hkg/zh';
                break;

            case "en_HK" :
                locale = 'hkg/en';
                break;

            case "ja_JP" :
                locale = 'jpn/ja';
                break;

            case "ko_KR" :
                locale = 'kor/ko';
                break;

            case "zh_TW" :
                locale = 'twn/zh';
                break;

            case "en" :
                locale = 'int/en';
                break;
        }


        if (!href || href==="") href = 'homepage';

        var newHref = '';
        if(core.mobile == true) newHref = '/beauty/' + locale + '/backstage/mobile/' + href;
        else newHref = '/beauty/' + locale + '/backstage/' + href;

        // google track page
        _gaq.push(['_trackPageview', newHref]);
        dataLayer.push({'pageVirtualPath': newHref});
    },

    fire: function(func, funcname)
    {
        funcname = (typeof funcname === 'undefined') ? 'init' : funcname;

        if (func !== '' && core[func] && typeof core[func][funcname] == 'function')
        {
            //console.log('-> call', func, funcname);
            core[func][funcname]();
        };

        var title = $('#content').attr('data-title');
        document.title = title;
    },

    loader:
    {
        wrapper: $('#loader'),

        launch: function(callback)
        {
            core.loader.wrapper.addClass('open').fadeIn(700, function()
            {
                if (typeof callback == 'function') callback();
            });
        },

        close: function()
        {
            core.loader.wrapper.removeClass('open').fadeOut(700);
        }
    },
    share: {
        init: function() {
            //facebook share feed
            //   $('.facebooker').click(function(e) {
            //       e.preventDefault();

            //       var uri = $(this).attr('data-url'),
            //           pic = $(this).attr('data-pic'),
            //           title = $(this).attr('data-title'),
            //           description = $(this).attr('data-content');

            //       var obj = {
            //   method: 'feed',
            //   redirect_uri: uri,
            //   link: uri,
            //   picture: pic,
            //   name: title,
            //   caption: title,
            //   description: description
            // };

            //       FB.ui(obj);

            //   });
            //twitter feed
            $('.twitter').click(function(e) {
                e.preventDefault();
                var uri = $(this).attr('data-url'),
                    description = $(this).attr('data-content'),
                    twitUrl = 'https://twitter.com/share?';
                twitUrl += 'url=' + uri + '&text=' + description;
                window.open(twitUrl, 'twitter', 'location=no,width=575,height=250');
            });
            //tumblr feed
            $('.tumblr').click(function(e) {
                e.preventDefault();
                var uri   = $(this).attr('data-uri'),
                    media = $(this).attr('data-media'),
                    title = $(this).attr('data-title'),
                    desc  = $(this).attr('data-description');

                var media = encodeURIComponent(media);
                var uri = encodeURIComponent(uri);
                var title = encodeURIComponent(title);
                var desc = encodeURIComponent(desc);

                var url = "http://www.tumblr.com/share/photo?source="+ media +"&caption=" + desc + "&click_thru=" + uri;

                //console.log(url);

                window.open(url, 'tumblr', 'location=no,width=575,height=250');
            });
            //kaixin feed
            $('.kaixin').click(function(e) {
                e.preventDefault();
                var uri = $(this).attr('href');
                window.open(uri, 'kaixin', 'location=no,width=575,height=250');
            });
            //weibo feed
            $('.weibo').click(function(e) {
                e.preventDefault();
                var uri = $(this).attr('href');
                window.open(uri, 'kaixin', 'location=no,width=575,height=250');
            });
            //pinterest feed
            $('.pinterest').click(function(e)
            {
                e.preventDefault();
                var uri = document.location.origin;
                var media = $(this).attr('data-media');
                var description = $(this).attr('data-description');

                var url = 'http://pinterest.com/pin/create/button/?url=' + uri + '&media=' + media + '&description=' + description;

                window.open(url, 'pinterest', 'location=no,width=575,height=250');
            });
            //share by mail
            $('.email').click(function(e) {
                e.preventDefault();
                $('#overlay').fadeIn(350, function() {
                    $('#mail-pop').fadeIn(350);
                    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if( $('#mail-pop input[name=firstname]').val() != '' && $('#mail-pop input[name=lastname]').val() != '' && !reg.test($('#mail-pop input[name=mail-dest]').val()) ) {
                        $('.form p.submit input').css({ 'background' : '#000' });
                    }
                });
            });
            $('#mail-pop .close').click(function() {
                $('#mail-pop').fadeOut(350, function() {
                    $('#overlay').fadeOut(350);
                });

            });

            $('#mail-pop input[type=submit]').unbind('click').click(function() {

                var firstname 			= $('#mail-pop input[name=firstname]').val(),
                    lastname 			= $('#mail-pop input[name=lastname]').val(),
                    mailDest 			= $('#mail-pop input[name=mail-dest]').val(),
                    mailMes 			= $('#mail-pop input[name=message_mail]').val(),
                    subjectMail 		= $('#mail-pop input[name=subject_mail]').val(),
                    imageMail 			= $('#mail-pop input[name=image_mail]').val(),
                    logoMail 			= $('#mail-pop input[name=logo_mail]').val(),
                    tmplink 			= window.location.href.split('?'),
                    link  				= tmplink[0],
                    linkMessage 		= '<span style="color:#FFF; text-decoration:none; font-size : 14px; font-family:arial; text-transform : uppercase"><font color="#FFFFFF">' + $('#mail-pop input[name=libelle_lien]').val() + '</font></span>';


                var nbrInput = $('#mail-pop .fstd-input').length;
                var errorMsg = '';
                var loc = core._locale;

                for (var i = 0; i < nbrInput; ++i) {
                    var thisInput = $('#mail-pop .fstd-input:eq(' + i + ')');
                    var val = thisInput.val();
                    var inputName = thisInput.attr('name');
                    if (val === '') {
                        thisInput.addClass('inputError');
                        var label = $('#mail-pop label[for=' + inputName + ']').html();
                        errorMsg = Translator.get("Merci de renseigner le champ vide") + '<br/>';
                    }
                };
                var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!reg.test(mailDest)) {

                    $('#mail-pop input[name=mail-dest]').addClass('inputError');
//                    errorMsg += Translator.get("L'email n'est pas valide.");
                }

                if (errorMsg != '') $('#mail-pop .error').html(errorMsg);
                if (reg.test(mailDest) && firstname != '' && lastname != '') {

                    subjectMail = firstname + " " + lastname + subjectMail;
                    mailMes = firstname + " " + lastname + mailMes;

                    var data = {
                        'email': mailDest,
                        'email_exp': 'Dior',
                        'firstname': firstname,
                        'name': lastname,
                        'image1': imageMail,
                        'image1_home': '',
                        'image2': '',
                        'image3': '',
                        'image4': '',
                        'image5': '',
                        'image_footer': '',
                        'image_logo': logoMail,
                        'langue': core.lang[loc],
                        'libLinkDior': 'www.backstage.dior.com',
                        'linkDlDior': '',
                        'linkDior': "http://backstage.dior.com",
                        'libLinkMessage': linkMessage,
                        'linkMessage': link,
                        'maquette_name': 'jadore',
                        'site': core.market[loc],
                        'style_email_invisible': '',
                        'style_link_dior': 'color:#6a6a6a;font-family:Helvetica, Arial, sans-serif;font-size:10px;margin-right:40%;',
                        'style_link_message': 'color:#cccccc;font-family:Helvetica, Arial, sans-serif;font-size:11px;',
                        'style_subtitle': 'color:#cccccc;font-family:Helvetica, Arial, sans-serif;font-size:13px;',
                        'style_title': 'color:#ffffff;font-family:Granjon, Granjon LT, Times New Roman, Times, serif;font-size:26px;',
                        'subtitle_message': mailMes,
                        'subtitle_message_home': mailMes,
                        'subtitle_message_product': '',
                        'sujet': subjectMail,
                        'sujet_backup': subjectMail,
                        'title_message': '',
                        'background_color': '000'
                    };

                    var webservice  = 'http://www.dior.com/beauty/' + core.loc[loc] + '/tinyWebSite/sendToFriend.ep';

                    $.ajax({
                        type: "POST",
                        url: webservice,
                        data: data,
                        error: function(data)
                        {
                            $('#mail-pop .form').html('<p class="valid">'+Translator.get("Your email was sent.")+'</p>')
                        },
                        success: function(data)
                        {
                            $('#mail-pop .form').html(Translator.get("Your email was sent."))
                        }
                    });
                }

            });
        }

    },
    loadLocale: function() {
        $('#languages a').unbind('click').click(function(e) {
            e.preventDefault();
            var loc = $(this).attr('data-locale');
            var route = Routing.generate('diorBackstageFrontBundle_index_home', {
                '_locale': loc,
                '_platform': core._platform
            });
            window.location.href = route;
        });
    },
    createLayout: function() {

        var headerData = $.parseJSON(core._header),
            headerDataLength = headerData.length;

        // NAVLESS
        /*            
         for(var i = 0; i < headerDataLength; ++i) {
         var thisData = headerData[i];

         var nbrColumn = 0;

         $('.wrapMainNav').append('<li>\
         <a href="http://www.dior.com' + thisData.url + '" class="arial-narrow sub-nav-trigger" data-subnav-index="' + i + '">' + thisData.label + '</a>\
         </li>\
         ');

         var firstLi = $('.top-content:eq(' + i + ') li.first');
         firstLi.append('<h3>' + thisData.lead_name + '</h3><a href="' + thisData.lead_img_link[0].url + '" class="nav-img"><img src="http://www.dior.com' + thisData.lead_img_link[0].image.image + '" alt="' + thisData.lead_img_link[0].image.name + '" width="' + thisData.lead_img_link[0].image.width + '" height="' + thisData.lead_img_link[0].image.height + '"/><small>' + thisData.lead_img_link[0].label + '</small></a>');

         if(thisData.optionalLinks.length > 0) {
         for (var o = 0; o < thisData.optionalLinks.length; ++o) {
         if(!thisData.optionalLinks[o].url.match(/backstage/)) {
         firstLi.append('<a href="' + thisData.optionalLinks[o].url + '" >' + thisData.optionalLinks[o].label + '</a>')
         }
         }
         };

         var thisWrapper = $('.top-content:eq(' + i + ') ul');

         if(thisData.additional_links.length > 0) {
         nbrColumn += 1;
         var tempAdditional = $('<li/>');
         tempAdditional.append('<h3 class="sans-st">' + thisData.additional_title + '</h3>');
         for (var a = 0; a < thisData.additional_links.length; ++a) {
         tempAdditional.append('<a href="http://www.dior.com' + thisData.additional_links[a].url + '" >' + thisData.additional_links[a].label + '</a>')
         }

         thisWrapper.append(tempAdditional);
         };

         for(var param in thisData.columns) {

         nbrColumn += 1;

         var column = thisData.columns[ param ];

         var template = $('<li/>');

         for (var c = 0; c < column.length; ++c) {

         if(c === 0) template.append('<h3 class="sans-st">' + column[c].title + '</h3>');
         else template.append('<h3 class="sans-st in-list">' + column[c].title + '</h3>');

         for(var l = 0; l < column[c].links.length; ++l) {
         if(column[c].links[l].url.match(/http:\/\//)) {
         template.append('<a href="' + column[c].links[l].url + '">' + column[c].links[l].label + '</a>')
         } else {
         template.append('<a href="http://www.dior.com' + column[c].links[l].url + '">' + column[c].links[l].label + '</a>')
         }

         }
         }

         thisWrapper.append(template);
         }

         for (var f = 0; f < thisData.footer_links.length; ++f) {

         var template = $('<li class="image"/>');

         if(thisData.footer_links[f].url.match(/http:\/\//)){
         template.append('<a href="' + thisData.footer_links[f].url + '" class="nav-img"><img src="http://www.dior.com' + thisData.footer_links[f].over_image.image + '" alt="' + thisData.footer_links[f].over_image.name + '" width="' + thisData.footer_links[f].over_image.width + '" height="' + thisData.footer_links[f].over_image.height + '"/><img src="http://www.dior.com' + thisData.footer_links[f].image.image + '" class="bw" alt="' + thisData.footer_links[f].image.name + '" width="' + thisData.footer_links[f].image.width + '" height="' + thisData.footer_links[f].image.height + '"/><strong><h3>' + thisData.footer_links[f].label + '</h3><p>' + thisData.footer_links[f].description + '</p></strong></a>')
         } else {
         template.append('<a href="http://www.dior.com' + thisData.footer_links[f].url + '" class="nav-img"><img src="http://www.dior.com' + thisData.footer_links[f].over_image.image + '" alt="' + thisData.footer_links[f].over_image.name + '" width="' + thisData.footer_links[f].over_image.width + '" height="' + thisData.footer_links[f].over_image.height + '"/><img src="http://www.dior.com' + thisData.footer_links[f].image.image + '" class="bw" alt="' + thisData.footer_links[f].image.name + '" width="' + thisData.footer_links[f].image.width + '" height="' + thisData.footer_links[f].image.height + '"/><strong><h3>' + thisData.footer_links[f].label + '</h3><p>' + thisData.footer_links[f].description + '</p></strong></a>')
         }

         $('.bottom-content:eq(' + i + ') ul').append(template);
         }

         if (nbrColumn === 2) $('.top-content:eq(' + i + ') ul').addClass('three-col').removeClass('four-col');
         };

         $('.sub-nav-trigger:eq(1)').addClass('active');
         */

        var metanavData = $.parseJSON(core._metanav);

        $('#univers-trigger span').html(metanavData[2].infos_categ.name1 + ' ' + metanavData[2].infos_categ.name2);

        /*
         $('#menuList-01 li:eq(0)').html('<a href="' + metanavData[0].list_sous_categ[0].url + '" alt="' + metanavData[0].list_sous_categ[0].name + '">' + metanavData[0].list_sous_categ[0].name + '</a>');
         $('#menuBloc-01 ul:eq(1) li').html('<a href="' + metanavData[0].list_sous_categ[1].url + '" alt="' + metanavData[0].list_sous_categ[1].subname + '" target="_BLANK">' + metanavData[0].list_sous_categ[1].subname + '</a>');
         */

        var nbrItemTotal = metanavData.length;

        for (var i = 0; i < nbrItemTotal; ++i) {

            var _nlbr = ' ';
            //if (metanavData[i].infos_categ.name2 != '') var _nlbr = '<br/>';

            $('#menuBloc-0' + (i+1)).remove();

            var headerCol;

            if (i==0) {
                headerCol = $('<li id="menuBloc-0' + (i+1) + '" class="col padding-max"/>');
            } else if (i==nbrItemTotal-2) {
                headerCol = $('<li id="menuBloc-0' + (i+1) + '" class="col padding-max"/>');
            } else if (i==nbrItemTotal-1) {
                headerCol = $('<li id="menuBloc-0' + (i+1) + '" class="col last"/>');
            } else {
                headerCol = $('<li id="menuBloc-0' + (i+1) + '" class="col"/>');
            }

            var title = $('<h4/>').html(metanavData[i].infos_categ.name1 + _nlbr + metanavData[i].infos_categ.name2);
            var ul = $('<ul id="menuList-0' + i + '" />\
                ');

            headerCol.prepend(title).append(ul);

            $('#universContent > .container > ul').append(headerCol);

            for(var e = 0; e < metanavData[i].list_sous_categ.length; ++e)
            {
                if(metanavData[i].list_sous_categ[e] != undefined)
                {
                    var li = '<a href="' + metanavData[i].list_sous_categ[e].url + '" title="' + metanavData[i].list_sous_categ[e].name + '">' + metanavData[i].list_sous_categ[e].name + '</a> ';
                }
                $('#menuBloc-0' + (i + 1) + ' ul').append('<li>\
                    '+ li + '</li>\
                    ');
            }
        }

        var footerData = $.parseJSON(core._footer),
            template = '',
            _l, _data,
            _links = [],
            _socialLinks = [];

        // PRECIMPUTED LINKS
        // -> SOCIAL LINKS: links that have img set
        _l = footerData.length;
        for (var i=0; i<_l; ++i) {
            _data = footerData[i];
            if (_data.image!="") {
                _socialLinks.push( _data );
            } else {
                _links.push( _data );
            }
        }

        if (_socialLinks.length>0) {
            _l = _socialLinks.length;

            // SOCIAL LINKS
            for (i = 0; i < _l; ++i)
            {
                _data = _socialLinks[i];

                if (!_data.url.search('http') == 0)
                {
                    _data.url = 'http://www.dior.com' + _data.url;
                }

                if (i==0) {
                    template += '<li class="picto first"><a href="' + _data.url + '" target="_blank"><img src="'+ _data.image +'" alt="' + _data.label + '"></a></li>';
                } else {
                    template += '<li class="picto"><a href="' + _data.url + '" target="_blank"><img src="'+ _data.image +'" alt="' + _data.label + '"></a></li>';
                }
            }
        }

        if (_links.length>0) {
            _l = _links.length;
            for (i = 0; i < _l; ++i)
            {
                _data = _links[i];

                if (!_data.url.search('http') == 0)
                {
                    _data.url = 'http://www.dior.com' + _data.url;
                }

                if (i==0 || i==(_l-1)) {
                    template += '<li class="separator"><a href="' + _data.url + '" target="_blank">' + _data.label + '</a></li>';
                } else {
                    template += '<li><a href="' + _data.url + '" target="_blank">' + _data.label + '</a></li>';
                }
            }
            $('#footer-nav ul').html( template );
        }
    },
    hyphenate: function( str ) {
        if (str) return str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');
        else return;
    }
};
$(document).ready(function() {
    core.Init();
})

Params = {
    Idevice				: (/iPhone|iPod|iPad|BlackBerry|Android/.test(navigator.userAgent))
}

He = {
    IsNumber : function(a)
    {
        return typeof(a) == "number" && !isNaN(a);
    }
}

Jewel =
{
    Overlay :
    {
        Obj: null,

        Show: function(_callback)
        {
            if(Jewel.Overlay.Obj.is(':visible'))
            {
                if(core.IsFunction(_callback))
                {
                    _callback();
                }
            }
            else
            {
                Jewel.Overlay.Obj.fadeIn(200, function()
                {
                    if(core.IsFunction(_callback))
                    {
                        _callback();
                    }
                });
            }
        },

        Hide: function(_callback)
        {
            if(Jewel.Overlay.Obj.is(':hidden'))
            {
                if(core.IsFunction(_callback))
                {
                    _callback();
                }
            }
            else
            {
                Jewel.Overlay.Obj.fadeOut(200, function()
                {
                    if(core.IsFunction(_callback))
                    {
                        _callback();
                    }
                });
            }
        },

        Init: function()
        {
            var _w = (core.ie) ? $('#content').height() : '100%';
            var _p = (core.ie) ? 'absolute' : 'fixed';

            $('<div></div>')
                .attr('id', 'content-overlay')
                .css({
                    background: '#000',
                    display: 'none',
                    opacity: .6,
                    height: _w,
                    width: '100%',
                    position: _p,
                    left: 0,
                    top: 0,
                    zIndex: 99
                })
                .appendTo('body');
            //$('#content').append('<div id="content-overlay"></div>');

            Jewel.Overlay.Obj = $('#content-overlay');
        }
    },

    SubNav :
    {
        Triggers	: null,
        Items		: null,
        ItemsHeight	: new Array(),
        Drawer		: null,
        IsOpen		: false,
        Current		: null,
        Duration	: 300,
        Timer		: null,
        TimeOut		: 500,
        Speed		: 500,
        Delay		: 200,
        Fader		: 10,
        Flag		: false,
        Deploy      : true,

        mouseOverHeader: false,
        scrollTop: 0,
        isMainNavOpen: true,

        SetTimer: function( _index )
        {
            window.clearTimeout(Jewel.SubNav.Timer);

            Jewel.SubNav.Timer = window.setTimeout(function()
            {
                Jewel.SubNav.Hide(_index);
            }, Jewel.SubNav.TimeOut);
        },

        CancelTimer: function()
        {
            window.clearTimeout( Jewel.SubNav.Timer );
        },

        Open: function( _index )
        {
            Jewel.SubNav.CancelTimer();
            Jewel.SubNav.Items.hide();

            var _height		= Jewel.SubNav.ItemsHeight[_index];

            //console.log( 'open SubNav.Drawer: '+_height );

            if ( !isNaN(_index) && _index===Jewel.SubNav.Current ) {
                Jewel.SubNav.IsOpen	= true;
                Jewel.SubNav.Show();
            } else if ( _height>0 && !Jewel.SubNav.IsOpen || !isNaN(_index) ) {
                Jewel.SubNav.IsOpen	= true;
                Jewel.Overlay.Show();

                if (!isNaN(_index)) Jewel.SubNav.Current = _index;

                Jewel.SubNav.Drawer.stop(true, true).show().animate({height: _height},
                    Jewel.SubNav.Duration,
                    function()
                    {
                        Jewel.SubNav.Flag = true;
                        Jewel.SubNav.Show();
                    });
            }
        },

        Close: function()
        {
            Jewel.SubNav.CancelTimer();
            //He.OnClickOutside.TearDown();

            if (Jewel.SubNav.IsOpen) {

                //Jewel.SubNav.Current = null;
                Jewel.SubNav.IsOpen = false;
                Jewel.Overlay.Hide();

                Jewel.SubNav.Drawer.stop(true, true).animate({height: 0},
                    Jewel.SubNav.Duration,
                    function()
                    {
                        Jewel.SubNav.Flag = false;
                        Jewel.SubNav.onScroll();
                    });
                Jewel.SubNav.Hide();
            }
        },

        Show: function()
        {
            Jewel.SubNav.Items.hide();
            var _dom	= Jewel.SubNav.Items[ Jewel.SubNav.Current ];

            $(_dom).stop().fadeIn(Jewel.SubNav.Fader, function()
            {
                Jewel.SubNav.Flag = false;
            });
        },

        Hide: function(_index)
        {
            var _dom = Jewel.SubNav.Items[ Jewel.SubNav.Current ];

            Jewel.SubNav.Current = null;

            $(_dom).stop().fadeOut(Jewel.SubNav.Fader, function()
            {
                $(_dom).css({'opacity':1})
                if(He.IsNumber(_index))
                {
                    if (Jewel.SubNav.Current !== _index) Jewel.SubNav.Open(_index);
                    else Jewel.SubNav.Close();
                }
                else
                {
                    Jewel.SubNav.Close();
                }
            });
        },

        GetItemsHeights: function()
        {
            Jewel.SubNav.Items.each(function()
            {
                var $this = $(this),
                    _height	= $this.height();

                if ($('html').hasClass('ie7')) _height += 20;

                Jewel.SubNav.ItemsHeight.push( _height );

                $this.hide();
            });
        },


        onScroll: function() {
            if (!core.isTactile && Jewel.SubNav.Deploy) {
                Jewel.SubNav.scrollTop = $(window).scrollTop();

                //console.log('#onScroll', Jewel.SubNav.isMainNavOpen, Jewel.SubNav.IsOpen);

                if(Jewel.SubNav.mouseOverHeader) {
                    Jewel.SubNav.openNav();
                } else if (!Jewel.SubNav.IsOpen) {
                    if (Jewel.SubNav.scrollTop > 5) {
                        Jewel.SubNav.closeNav();
                    } else {
                        Jewel.SubNav.openNav();
                    }
                }
            }
        },

        openNav: function( e ) {
            //console.log('#open Main Nav', Jewel.SubNav.isMainNavOpen, Jewel.SubNav.IsOpen);
            Jewel.SubNav.CancelTimer();

            if (!Jewel.SubNav.isMainNavOpen) {
                $(document.getElementById('main-nav')).stop().animate( {top: 0}, Jewel.SubNav.Duration );
                Jewel.SubNav.isMainNavOpen = true;
            } else if (Jewel.SubNav.mouseOverHeader) {
                Jewel.SubNav.Close();
            }
        },
        closeNav: function( e ) {
            //console.log('#close Main Nav', Jewel.SubNav.isMainNavOpen, Jewel.SubNav.IsOpen);

            if (!Jewel.SubNav.IsOpen && !Jewel.SubNav.mouseOverHeader) {
                $(document.getElementById('main-nav')).stop().animate( {top: -32}, Jewel.SubNav.Duration );
                Jewel.SubNav.isMainNavOpen = false;
            }
        },


        Init: function()
        {
            Jewel.SubNav.Triggers	= $(document.getElementById('main-nav')).find('a.sub-nav-trigger');
            Jewel.SubNav.Items		= $('div.sub-nav-content');
            Jewel.SubNav.Drawer		= $(document.getElementById('sub-nav'));

            Jewel.SubNav.GetItemsHeights();

            /*if($('html').hasClass('ie') && $('html').hasClass('lte6'))
             {
             DD_belatedPNG.fix('#sub-nav div');
             }

             if($('html').hasClass('ie'))
             {
             Jewel.SubNav.Fader = 0;
             }

             Jewel.SubNav.Drawer.find('ul li a').off('mouseenter mouseleave').hover(function()
             {
             Jewel.SubNav.CancelTimer();

             var imageHover = $(this).find('img.bw');
             imageHover.hide();
             var imageParagraph =  $(this).find('p');
             imageParagraph.css({'color':'#FFF'});
             })
             .mouseleave( function() {
             var imageHover = $(this).find('img.bw');
             imageHover.show();
             var imageParagraph =  $(this).find('p');
             imageParagraph.css({'color':'#6A6B6D'});
             });


             Jewel.SubNav.Triggers.each(function(i)
             {
             var _this = $(this),
             _index = _this.data('subnav-index');


             if(Params.Idevice) // Ipad ready
             {
             _this.on('touchstart', function(event)
             {
             if(_index ==  Jewel.SubNav.Current)
             {
             //alert('go to href');
             }
             else
             {
             if(!Jewel.SubNav.IsOpen)
             {
             //console.log('-> open sub nav');
             if (event.preventDefault) event.preventDefault();
             else event.returnValue = false;

             Jewel.Languages.Close();

             if (!isNaN(_index)) {
             //var subnavHeight = $('#sub-nav').height();

             Jewel.Overlay.Show();
             Jewel.SubNav.Open( _index );

             //He.OnClickOutside.Init('sub-nav-content', Jewel.SubNav.Hide);

             $(document).click(function(event) {
             if($(event.target).parents().index($('.sub-nav-content')) == -1) {
             if($('.sub-nav-content').is(":visible")) {
             Jewel.SubNav.Hide();
             }
             }
             })

             Jewel.SubNav.IsOpen = true;
             }
             return false;
             }
             if (Jewel.SubNav.IsOpen)
             {
             //console.log('-> update subnav content');
             Jewel.SubNav.Hide( _index );
             Jewel.SubNav.IsOpen = false;
             }
             return false;
             }
             });
             }
             else
             {
             _this.bind('hover', { speed:Jewel.SubNav.Speed, delay:Jewel.SubNav.Delay }, function()

             // _this.hoverIntent(
             //     function()
             {
             // Reset Timer and close Languages Drawer
             Jewel.SubNav.CancelTimer();
             Jewel.Languages.Close();

             //if(_index !=  Jewel.SubNav.Current)
             //{
             if (!isNaN(_index)) {
             Jewel.Overlay.Show();
             Jewel.SubNav.Open( _index );
             //He.OnClickOutside.Init('sub-nav-content', Jewel.SubNav.Hide);

             $(document).click(function(event) {
             if($(event.target).parents().index($('.sub-nav-content')) == -1) {
             if($('.sub-nav-content').is(":visible")) {
             Jewel.SubNav.Hide();
             }
             }
             })

             } else {
             Jewel.SubNav.Hide();
             }
             //}
             },

             function() {
             Jewel.SubNav.SetTimer(null);
             }
             );

             _this.on('mouseleave', function()
             {
             Jewel.SubNav.SetTimer();
             });
             }
             });


             Jewel.SubNav.Items.off('mouseenter').hover( Jewel.SubNav.CancelTimer );
             Jewel.SubNav.Items.find('ul').hover( Jewel.SubNav.CancelTimer );

             Jewel.SubNav.Items.on('mouseleave', function()
             {
             Jewel.SubNav.SetTimer( _index );
             });

             Jewel.SubNav.Drawer.on('mouseenter', Jewel.SubNav.CancelTimer );
             Jewel.SubNav.Drawer.on('mouseleave', Jewel.SubNav.SetTimer );*/

            // init Dior.com V5 behavior
            // -> deploy sub nav roll header
            if (!core.isTactile && Jewel.SubNav.Deploy) {
                $(window).scroll( Jewel.SubNav.onScroll );
                $(window).resize( Jewel.SubNav.onScroll );
            }

            $(document.getElementById('topbar')).mouseenter( function() {
                if (!Jewel.SubNav.mouseOverHeader) {
                    Jewel.SubNav.mouseOverHeader = true;
                    Jewel.SubNav.openNav();
                }
            })
                .mouseleave( function() {
                    Jewel.SubNav.mouseOverHeader = false;
                });
            $(document.getElementById('main-nav')).mouseleave( Jewel.SubNav.onScroll );

            //--------------------------------------------------------------------//
            // TRACKING
            // Jewel.SubNav.Items.each( function() {

            //     var _topLabel = $(this).data('track-event-label');

            //     $(this).find('li').each(function() {

            //         $(this).find('a').on('click', function() {
            //             core.trackEvent('TopMenu', _topLabel+' - '+$(this).data('track-event-label') );
            //         });
            //     });
            // });
        }
    },

    /*
     namespace: Languages

     Gestion du selecteur de langues/pays du footer

     */

    Languages :
    {
        Drawer: null,
        Lists: null,
        Default: null,
        Duration: 500,
        Trigger: null,

        Toggle: function(event)
        {
            if (event.preventDefault) event.preventDefault();
            else event.returnValue = false;

            if(Jewel.Languages.Drawer.is(':visible'))
            {
                Jewel.Overlay.Hide();
                Jewel.Languages.Close();
            }
            else
            {
                Jewel.Overlay.Show();
                Jewel.Languages.Open();
            }
        },

        Open: function()
        {
            Jewel.Languages.Trigger.addClass('active');
            Jewel.Languages.Drawer.stop(true, true).slideDown(Jewel.Languages.Duration, function()
            {
                //$(document).off('click').on('click', function(e)
                //{
                if(Jewel.Languages.Drawer.is(':visible'))
                {
                    if(!$(this).parents('#footer')) Jewel.Languages.Toggle();
                }
                //});
            });
        },

        Close: function()
        {
            Jewel.Languages.Trigger.removeClass('active');
            Jewel.Languages.Drawer.stop(true, true).slideUp(Jewel.Languages.Duration, function()
            {
                //$(document).unbind('click');
                // Reset Default Languages
                Jewel.Languages.Lists.hide();
                Jewel.Languages.ResetActive();
                Jewel.Languages.Default.show();
                Jewel.Languages.Default.prev('h6').addClass('active');
            });
        },

        ResetActive: function()
        {
            Jewel.Languages.Titles.removeClass('active');
        },

        Init: function()
        {
            Jewel.Languages.Drawer  = $('#languages');
            Jewel.Languages.Trigger = $('#languages-trigger');
            Jewel.Languages.Lists   = Jewel.Languages.Drawer.find('ul');
            Jewel.Languages.Default = Jewel.Languages.Drawer.find('ul.default');
            Jewel.Languages.Titles  = Jewel.Languages.Drawer.find('h6');

//      Languages.Drawer.css('display', 'none');

            Jewel.Languages.Trigger.click(Jewel.Languages.Toggle)

            Jewel.Languages.Titles.click(function()
            {
                Jewel.Languages.ResetActive();

                var _next = $(this).addClass('active').next('ul');

                Jewel.Languages.Lists.not(_next).slideUp('fast');
                _next.slideToggle();

                var height = 0;
            });

            Jewel.Overlay.Obj.click(function()
            {
                Jewel.Languages.Close();
                Jewel.Overlay.Hide();
            });

        }
    },


    MetaNav :
    {
        trigger:null,
        isOpen: false,
        drawer:null,
        Duration: 300,

        open: function()
        {
            Jewel.MetaNav.setActive();

            Jewel.MetaNav.drawer.stop(true, true).slideDown(Jewel.MetaNav.Duration, function()
            {
                Jewel.MetaNav.isOpen = true;

                $(document).off('click').on('click', function(event){
                    if(Jewel.MetaNav.isOpen) {
                        if($(event.target).parents().index($('#univers-drawer')) == -1) {
                            if($('#univers-drawer').is(":visible")) {
                                Jewel.MetaNav.close();
                            }
                        }
                    }
                })
            });
        },

        close: function()
        {
            Jewel.MetaNav.drawer.stop(true, true).slideUp(Jewel.MetaNav.Duration, function()
            {
                Jewel.Overlay.Hide();
                Jewel.MetaNav.resetActive();
                Jewel.MetaNav.isOpen = false;
                Jewel.MetaNav.news();
            });
        },

        setActive: function()
        {
            $('#header #topbar span').addClass('active');
        },

        resetActive: function()
        {
            $('#header #topbar span').removeClass('active');
        },

        news : function()
        {
            nbNews  = $news.find('li').size();
            _heigth = (nbNews * 25);

            if($newsHolder.hasClass('open'))
            {
                $news.animate({'height': '74px'}, 200, function()
                {
                    $newsHolder.removeClass('open');
                })
            }
            else
            {
                $news.animate({'height': _heigth}, 200, function()
                {
                    $newsHolder.addClass('open');
                })
            }
        },

        Init: function()
        {
            Jewel.MetaNav.trigger = $('#univers-trigger');
            Jewel.MetaNav.drawer = $('#univers-drawer');
            $news = $('.univers-drawer-news');
            $newsHolder = Jewel.MetaNav.drawer.find('li.univers-drawer-block-news');

            $('#univers-drawer-news-trigger').click(function()
            {
                Jewel.MetaNav.news();
            });

            $('#content-overlay').click(function(){
                Jewel.MetaNav.close();
            })

            Jewel.MetaNav.trigger.click(function(e)
            {
                e.preventDefault();
                if(Jewel.MetaNav.isOpen)
                {

                    Jewel.MetaNav.close();

                }
                else
                {
                    Jewel.MetaNav.open();
                    Jewel.Overlay.Show();

                    var headerHextra = $('#univers-drawer-content'),
                        headerHextraWidth = $('#univers-drawer-content').width(),
                        headerHextraNewWidth = headerHextraWidth;
                    headerHextra.css({'width':headerHextraNewWidth+'px','float':'none'});

                }
            });
        }
    }

}


$(function()
{
    Jewel.Overlay.Init();
    //Jewel.SubNav.Init();
    Jewel.Languages.Init();
//	Newsletter.Init();
//	Account.Init();
//	Jewel.MetaNav.Init();
});


core.popin =
{
    firstCall : function(href)
    {
        //var home = Routing.generate('diorBackstageFrontBundle_index_home', { '_locale' : core._locale, '_platform' : core._platform });

        //console.log('[popin] firstCall');
        core.managePage.page.build( document.getElementsByTagName('html')[0].innerHTML, '', true );
        core.fire('home');

        core.flagHome = true;

        setTimeout(function()
        {
            core.popin.display(href);
        }, 100);
    },

    display : function(href)
    {
        if(core.overlay.hasClass('open'))
        {
            var overOverlay = '<div class="load-pop"><div id="canvaspopin-container"></div></div>';
            core.overlay.append(overOverlay);

            if(core.ie === false)
            {
                var cl = new CanvasLoader('canvaspopin-container');
                cl.setColor('#ffffff'); // default is '#000000'
                cl.setShape('spiral'); // default is 'oval'
                cl.show();

                var h = $(window).height();
                $('.load-pop div').css({'top': (h - 40) / 4});

            }

            $('.load-pop').fadeIn(500);
        }


        core.managePage.call(href);

        core.managePage.request.done(function(data)
        {
            if(core.overlay.hasClass('open'))
            {
                if(core.dir === 'right')
                {
                    $('#popin').animate({'left': '-100%'}, 500, function()
                    {
                        $('#popin').remove();
                        core.overlay.prepend($(data).find('#popin'));
                        $('#popin').addClass('right').animate({'left':'50%'}, 500, function()
                        {

                            $('.load-pop').fadeOut(500, function()
                            {
                                $('.load-pop').remove();
                            });
                        });
                        core.popin.launchFx();
                    });
                }
                else
                {
                    $('#popin').animate({'left': '200%'}, 500, function()
                    {
                        $('#popin').remove();
                        core.overlay.prepend($(data).find('#popin'));
                        $('#popin').addClass('left').animate({'left':'50%'}, 500, function()
                        {

                            $('.load-pop').fadeOut(500, function()
                            {
                                $('.load-pop').remove();
                            });
                        });
                        core.popin.launchFx();
                    });
                }

            }
            else
            {
                if(core.ie7 == false) core.home.scroll = typeof window.pageYOffset !== 'undefined' ? window.pageYOffset: document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop? document.body.scrollTop:0;

                core.h = $('body').height();

                core.overlay.html($(data).find('#popin'));

                core.overlay.addClass('open').fadeIn(750, function()
                {

                    $('#popin img').ready(function()
                    {
                        core.popin.launchFx(function()
                        {
                            $('#popin').css({'left':'50%'});
                            $('#close-popin').css({'left':'50%'});

                            $('#popin').fadeIn(500, function()
                            {
                                if(core.ie7 == false) $('#page').css({'top':core.home.scroll * -1}).addClass('fixed');
                            });

                        });

                    });

                    if($('#loader').hasClass('open'))
                    {
                        core.loader.close();
                    }
                });

                $('#overlay').append('<div id="close-popin" />');

                if(core.ie7)
                {
                    $('#overlay').height(h);

                    if($('#popin').height() > core.h)
                    {
                        $('body').height($('#popin').height())
                    }
                }
            }
        });
    },

    launchFx : function(callback)
    {
        if(core.mobile == false)
        {
            $(document).scrollTop(0);

            $('#close-popin').unbind('click').click(function()
            {
                //change history without load page
                hasher.changed.active = false;
                hasher.setHash('');
                hasher.changed.active = true;

                $('#popin').fadeOut(500, function()
                {
                    if(core.ie) document.documentElement.scrollTop = core.home.scroll;
                    if(core.ie7 == false) $('#page').removeClass('fixed');
                    if(core.ie7 == true)
                    {
                        $('body').height($('#popin').height(core.h));
                    }
                    $('body, html').scrollTop(core.home.scroll);
                    $('#page').css({'width':'100%'});

                    $('#close-popin').remove();

                    core.overlay.fadeOut(500, function()
                    {
                        $('#nav-search').css({'right':'0'});

                        core.medias.video.destroy();
                        core.overlay.removeClass('open').html('');
                    });
                });
            });

            core.ajaxify();

            if($('a.push-half').length > 0)
            {
                $('a.push-half:odd').addClass('right');
            }

            $('.left-arrow').unbind('click').click(function()
            {
                core.dir = 'left';
            });

            $('.right-arrow').unbind('click').click(function()
            {
                core.dir = 'right';
            });

            $('.do-not-miss a').hover(function()
            {
                $(this).find('strong').stop(true, true).fadeIn(300);
            }).mouseleave(function()
            {
                $(this).find('strong').stop(true, true).fadeOut(300);
            });

            var title = $('#popin').attr('data-title');
            document.title = title;

        }

        core.share.init();

        // color & medias management
        core.home.popinColor = $('#popin').attr('data-color');

        $('.bloc-text a').css({'color': '#'+core.home.popinColor});

        /*if($('.push-full').length > 0)
         {
         var css = {'color': '#'+core.home.popinColor};

         $('.push-full strong').css(css);
         $('.push-full h4').css(css);
         $('.push-full span').css(css).css({'border-color': '#'+core.home.popinColor});
         }*/

        $('.tag a').hover(function()
        {
            var thisColor = $(this).attr('data-color');
            var color = '#' + thisColor;
            $(this).css({'color':color});
        }).mouseleave(function()
        {
            $(this).css({'color':'#FFF'});
        });

        var allMedias = $("#popin").attr('data-media');

        if( typeof(allMedias) !== 'undefined')
        {
            var controller = allMedias.split(' ');

            for (var i = 0; i < controller.length; i++)
            {
                core.medias.init(controller[i]);
            }
        };

        if(typeof(callback) == 'function') callback();




    }
};
core.managePage =
{
    type        : null,
    controller  : null,
    request     : null,
    content     : $('#content'),
    //gestion de l'appel aux pages
    init : function(href, oldHash)
    {
        core.medias.video.destroy();
        core.managePage.type = href.split('/');

        if (core.managePage.type[0] === 'article')
        {
            if ( core.flagHome === false )
            {
                core.loader.launch(function()
                {
                    core.popin.firstCall(href);
                });
            }
            else
            {
                setTimeout(function()
                {
                    core.popin.display(href);
                }, 100);
            }
        }
        else
        {
            core.loader.launch(function()
            {
                core.managePage.page.init(href, oldHash);
            });
        }
    },

    call : function(href)
    {
        core.managePage.request = $.ajax(
            {
                url         : href,
                dataType    : 'html'
            });
    },

    page :
    {
        init : function(href, oldHash)
        {
            //console.log('[core.manage.page] init');            
            if(href == '')
            {
                href = Routing.generate('diorBackstageFrontBundle_index_home', { '_locale' : core._locale, '_platform' : core._platform });
            }
            core.managePage.call(href);
            core.managePage.content.remove();
            core.managePage.request.done( core.managePage.page.build );
        },

        build : function( data, oldHash, noDisplay ) {
            //console.log('[core.manage.page] build page', oldHash, noDisplay);

            if($('#page').hasClass('fixed')) {
                $('#page').removeClass('fixed');
                core.overlay.removeClass('open').html('').hide();
                $('#close-popin').remove();
            }

            $('#content').remove();

            if('#page #popin')
            {
                $('#page #popin').remove();
            }
            if(core.ie7 == true)
            {
                $('#overlay').html('').removeClass('open').removeAttr('style');
            }

            var content = $(data).find('#content');

            if( content.html() === null) content = $(data).find('#popin');

            $('#nav-search').after(content);

            //console.log(typeof noDisplay);

            if (!noDisplay || typeof noDisplay === 'object') {
                //console.log('-> display page');
                if (oldHash==='success') oldHash = '';
                core.managePage.page.loadFx( oldHash );
            }
        },

        loadFx : function(oldHash)
        {
            //console.log('[core.manage.loadFx]');

            $(window).resize(function()
            {
                $('#content').css({'height':'auto'});
            }).trigger('resize');

            $(window).scrollTop(0);

            var controller 	= $('#content').attr('data-controller');

            if(controller === 'home') core.flagHome = true;
            else core.flagHome = false;

            if($('.return a').length > 0)
            {
                if(typeof oldHash != 'undefined')
                {
                    splitHash = oldHash.split('/');

                    var newHref = '/makeup-mag/' + core._locale + '/#';

                    for(var h=0; h < splitHash.length; ++h)
                    {
                        newHref += '/' + splitHash[h];
                    }
                    if(controller === 'result')
                    {
                        newHref = Routing.generate('diorBackstageFrontBundle_index_search', { '_locale' : core._locale, '_platform' : core._platform });
                    }
                    if(controller === 'search')
                    {
                        newHref = '/makeup-mag/' + core._locale + '/#';
                    }

                    $('.return a').attr('href', newHref);
                }
                else
                {
                    route = Routing.generate('diorBackstageFrontBundle_index_home', { '_locale' : core._locale, '_platform' : core._platform });

                    var newHref = route + '/#';

                    $('.return a').attr('href', newHref);
                }
            }


            if(core.mobile == false) core.ajaxify();

            core.fire(controller);
            core.share.init();

            if($('#page #popin').length > 0)
            {
                core.popin.launchFx();
                if(core.ie7 == true) $('body').css('marginTop', '100px')
                core.loader.close();
            }
            else if($('.ds').length > 0)
            {
                core.loader.close();
            }

            $('a[data-ajax=false]').click(function()
            {
                hasher.changed.active = false;
            });

            if($('.vAlign').length > 0)
            {
                if(core.mobile === false){
                    setTimeout(function(){
                        $('.vAlign').vAlign();
                    }, 500)
                }
            }
        }
    }
};
core.medias =
{
    init : function(media)
    {
        switch(media)
        {
            case "video" :
                if($('video').length > 0)
                {
                    if(core.mobile == false)
                    {
                        core.medias.video.init();
                    }
                }

                break;

            case "slideshow" :
                if($('ul.slides').length > 0)
                {
                    core.medias.slider.init();
                }
                break;
        }
    },

    video :
    {
        player 	: [],
        height 	: 0,
        width	: 0,

        init : function()
        {
            $('video').each(function()
            {
                core.medias.video.width = $(this).parent().width();

                var thisId = $(this).attr('id');

                core.medias.video.player.push(_V_(thisId, {}));

                var css = {'height': (core.medias.video.width / 16) * 9, 'width': core.medias.video.width};

                $('#' + thisId).css(css);
                //$('#' + thisId + 'video').css(css);
                if(core.ie7 == false) $('#' + thisId + ' img').css(css);
                else $('#' + thisId + ' img').css({'height':'100%'});

                if(core.mobile)
                {
                    $('.vjs-default-skin .vjs-big-play-button').css({'margin-top':'0'});
                }

                var title = $(this).attr('data-title');
                var titleColor = $(this).attr('data-title-color');
                var subtitle = $(this).attr('data-subtitle');

                if(title)
                {
                    $('#' + thisId).append('<div class="title-wrapper" />');
                    var tmpTitle = '<div class="video-title">' + title + '</div>';
                    $('.title-wrapper').prepend(tmpTitle);
                    $('.video-title').css({'color':'#'+titleColor});
                    if( !core.mobile)
                    {
                        /*$('.title-wrapper').vAlign();*/
                        $('.title-wrapper').css({'padding-top': ($('#' + thisId).height() - $('.title-wrapper').height()) * 0.5 - 80});
                        $('.title-wrapper').height('100%');
                        /*$('.vjs-big-play-button').css({'margin-top':'140px'});*/

                    }
                };

                if(subtitle)
                {
                    var tmpSubtitle = '<div class="video-subtitle">' + subtitle + '</div>'
                    $('.title-wrapper').append(tmpSubtitle);
                }

                // affiche le poster à la fin de la vidéo
                _V_(thisId).addEvent("ended", function()
                {
                    $('#' + thisId + ' img.vjs-poster').css({'display':'block'});
                    $('#' + thisId + ' .vjs-loading-spinner div').hide();
                });


            });

            core.medias.video.bindEvent();
        },

        bindEvent : function()
        {
            /*$('.vjs-poster, .vjs-big-play-button, .vjs-play-control, .vjs-tech').click(function(e)
             {
             var thisSrc = $(this).parents('.bloc-media').attr('data-mp4');
             if( thisSrc ) {
             var splitSrc = thisSrc.split('/'),
             nbrEl		= splitSrc.length;

             _gaq.push(['_trackEvent', 'Backstage_Makeup_Mag', splitSrc[nbrEl - 1] , 'Click Vidéo ']);
             }

             var thisWrapper 	= $(this).parents('.video-js'),
             title 			= thisWrapper.find('.title-wrapper');

             console.log( $(this) );
             console.log( thisWrapper );
             console.log( title );

             if(thisWrapper.hasClass('vjs-paused'))
             {
             if(title) title.hide();
             };

             });*/

            $('.title-wrapper').click(function(e)
            {
                // 2 type of video container : .bloc-media (brief videos) and .video-look (on look pages)
                var thisSrc = $(this).parents('.bloc-media').attr('data-mp4');
                var splitSrc = null;
                if( thisSrc ) {
                    splitSrc 	= thisSrc.split('/'),
                        nbrEl		= splitSrc.length;
                } else {
                    thisSrc = $(this).parents('.video-look').attr('data-mp4');
                    if (thisSrc) {
                        splitSrc 	= thisSrc.split('/'),
                            nbrEl		= splitSrc.length;
                    }
                }
                if (splitSrc) {
                    _gaq.push(['_trackEvent', 'Backstage_Makeup_Mag', 'Video - '+splitSrc[nbrEl - 1] , 'Click Vidéo']);
                }

                var thisWrapper 	= $(this).parents('.video-js'),
                    title 			= thisWrapper.find('.title-wrapper');

                if(thisWrapper.hasClass('vjs-paused'))
                {
                    if(title) title.hide();
                };

                var thisId  	= thisWrapper.attr('id');
                _V_(thisId).play();
            });


            $('.vjs-fullscreen-control').live('click', function()
            {
                var par 	= $(this).parents('.video-js').parent(),
                    thisId  	= $(this).parents('.video-js').attr('id'),
                    mp4Src 		= par.attr('data-mp4'),
                    oggSrc 		= par.attr('data-ogg'),
                    subtitles   = par.attr('data-subtitles')
                template 	= '<div id="fullscreenWrapper"><div class="close-fullscreen"></div><video id="fullscreenVideo" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%"><source src="' + mp4Src + '" type="video/mp4"><source src="' + oggSrc + '" type="video/ogg"><track src="' + subtitles + '" kind="subtitles" /></video></div>';

                //ajouter le fullscreen au DOM
                $('body').append(template);
                var wrapper = $('#fullscreenWrapper');

                //stopper la vidéo en cours et récupérer son timecode
                var currentTimer = _V_(thisId).currentTime();
                _V_(thisId).pause();

                //appliquer videoJs
                var fullscreenPlayer = _V_("fullscreenVideo");

                fullscreenPlayer.ready(function()
                {
                    fullscreenPlayer.play();

                    wrapper.css({'display':'none', 'left':'0'});
                    if(core.ie == false)
                    {
                        wrapper.fadeIn(700);
                    }
                    else
                    {
                        wrapper.show(0);
                    }


                    $('#fullscreenVideo .vjs-fullscreen-control').remove();

                    // affiche le poster à la fin de la vidéo
                    _V_(thisId).addEvent("ended", function()
                    {
                        $('#' + thisId + ' img.vjs-poster').css({'display':'block'});
                        $('#' + thisId + ' .vjs-loading-spinner').css({'display':'none'});
                    });

                });

                $('.close-fullscreen').click(function()
                {
                    fullscreenPlayer.destroy();
                    if(core.ie == false)
                    {
                        wrapper.fadeOut(700, function()
                        {
                            wrapper.remove();
                        });
                    }
                    else
                    {
                        wrapper.remove();
                    }
                });
            });
        },

        pushVideo : function(_this)
        {
            var mp4Src 		= _this.attr('data-mp4'),
                oggSrc 		= _this.attr('data-ogg'),
                ieSrc		= _this.attr('data-ie'),
                subtitle    = _this.attr('data-videosubtitle'),
                urlSpecial 	= document.location.href.split('/');

            if(core.oldIe === false)
            {
                template           = '<div id="fullscreenWrapper"><div class="close-fullscreen"></div><video id="fullscreenVideo" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%"><source src="' + mp4Src + '" type="video/mp4"><source src="' + oggSrc + '" type="video/ogg"><track src="' + subtitle + '" kind="subtitles" /></video></div>';
            }
            else
            {
                if(ieSrc != undefined) template = '<div id="fullscreenWrapper"><div class="close-fullscreen"></div><video id="fullscreenVideo" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%"><source src="' + ieSrc + '" type="video/mp4"></video></div>';
                else template = '<div id="fullscreenWrapper"><div class="close-fullscreen"></div><video id="fullscreenVideo" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%"><source src="' + mp4Src + '" type="video/mp4"></video></div>';
            }

            if(core.mobile == false)
            {
                $('body').append(template);
                var wrapper = $('#fullscreenWrapper');

                if ($.browser.msie && $.browser.version <= 10) _V_.options.techOrder = ["flash"];


                var fullscreenPlayer = _V_("fullscreenVideo");

                fullscreenPlayer.ready(function()
                {
                    fullscreenPlayer.play();

                    wrapper.css({'display':'none', 'left':'0'});
                    if(core.ie == false)
                    {
                        wrapper.fadeIn(700);
                    }
                    else
                    {
                        wrapper.show(0);
                    }

                    $('#fullscreenVideo .vjs-fullscreen-control').remove();

                });

                $('.close-fullscreen').click(function()
                {
                    fullscreenPlayer.destroy();
                    if(core.ie == false)
                    {
                        wrapper.fadeOut(700, function()
                        {
                            wrapper.remove();
                        });
                    }
                    else
                    {
                        wrapper.remove();
                    }

                });
            }
        },

        destroy : function()
        {
            if( core.medias.video.player.length > 0)
            {
                var n = core.medias.video.player.length;

                for (var i = 0; i < n; i++)
                {
                    //core.medias.video.player[i].tech.destroy();
                    core.medias.video.player[i].destroy();
                };

                core.medias.video.player = [];
            }
        }
    },

    slider :
    {
        init : function()
        {
            $('ul.slides').each(function()
            {
                var thisParent = $(this).parent();

                thisParent.flexslider({
                    animation : 'slide',
                    slideshowSpeed: 4000,
                    pauseOnHover : false,
                    animationLoop : true,
                    slideshow: true,
                    directionNav: false,
                    touch: true
                });
            });
        }
    }
}
core.home =
{
    globalHeight 	: 0,
    contentW 		: 0,
    headerH 		: 0,
    subFooterH 		: 0,
    footerH 		: 0,
    contentH		: 0,
    popinColor		: null,
    scroll 			: null,
    video           : 'undefined',
    page            : 1,
    firstLoad       : true,

    flexSlider      : null,

    init : function()
    {
        //console.log('[Home] init');
        if(core.mobile)
        {
            var back = $('#covers li:first-child').attr('data-background')

            $('#covers li:first-child').css({'display': 'block', 'background':'#'+back});

            $('#more-tiles').click(function(e)
            {
                e.preventDefault();

                core.home.page += 1;

                var tilesRoute = Routing.generate('diorBackstageFrontBundle_article_show', { '_locale' : core._locale, '_platform' : core._platform, 'page': core.home.page });

                var req = $.ajax(
                    {
                        url         : tilesRoute,
                        dataType    : 'json'
                    });

                req.success(function(data)
                {
                    if( data.next === null)
                    {
                        $('#more-tiles').hide();
                    }

                    $('#tiles').append(data.content);
                });

            });
        }
        else
        {
            $('#tiles a').unbind('click').click(function(e)
            {
                e.preventDefault();
                var allRoute   = $(this).attr('href');
                var external = new RegExp(/http/);

                if(core.ie7)
                {
                    if($(this).data('ie7Ajax') == true)
                    {
                        var route       = allRoute.split('#/');
                        var myRoute     = route[1];

                        core.managePage.init(myRoute);

                        hasher.changed.active = false;
                        hasher.setHash(myRoute);
                        hasher.changed.active = true;

                        core.pushTrack(myRoute);
                    }
                }
                else
                {
                    if(!external.test(allRoute))
                    {
                        e.preventDefault();

                        var reg = new RegExp(/\#/);

                        if (reg.test(allRoute))
                        {
                            var route       = allRoute.split('#/');
                            var myRoute    = route[1];

                            core.managePage.init(myRoute);

                            hasher.changed.active = false;
                            hasher.setHash(myRoute);
                            hasher.changed.active = true;

                            core.pushTrack(myRoute);

                        }
                    }
                    else
                    {
                        document.location = allRoute;
                        return true;
                    }
                }
            });

            $('.wrapper li').each(function()
            {
                var back = $(this).attr('data-background');

                $(this).css({'background':'#'+back});
            });

            //launch tiler
            var tiles = $('#tiles li');
            var options = {
                autoResize : true,
                offset : 20,
                container: $('#tiles')
            };



            $('img').load(function(){
                core.home.wook = tiles.wookmark(options);

                //launch slider
                $('#covers').flexslider({
                    selector: '.wrapper > li',
                    animation : 'slide',
                    animationLoop : true,
                    slideshow: false,
                    controlNav: true,
                    controlsContainer : '.covers-control',
                    touch: false
                });

                core.home.resize();
            });

            var ww = $(window).width();

            /*if(ww > 1580)
             {
             var tilesRoute = Routing.generate('diorBackstageFrontBundle_article_show', { '_locale' : core._locale, '_platform' : core._platform, 'page': 2});

             var req = $.ajax(
             {
             url         : tilesRoute,
             dataType    : 'json'
             });

             req.success(function(data)
             {
             if( data.next === null)
             {
             $('#more-tiles').hide();
             }

             //tiles.wookmarkClear();

             $('#tiles').append(data.content);

             var options = {
             autoResize : true,
             offset : 20,
             container: $('#tiles')
             };

             tiles = $('#tiles li');

             core.ajaxify();

             $('#tiles img').load(function()
             {
             tiles.wookmark(options);
             core.home.resize();
             });

             core.home.page = 2;
             });
             }*/

            if(core.home.page > 1)
            {
                for( var t = 1; t < core.home.page; ++t )
                {
                    var tilesRoute = Routing.generate('diorBackstageFrontBundle_article_show', { '_locale' : core._locale, '_platform' : core._platform, 'page': t + 1});

                    var req = $.ajax(
                        {
                            url         : tilesRoute,
                            dataType    : 'json'
                        });

                    req.success(function(data)
                    {
                        if( data.next === null)
                        {
                            $('#more-tiles').hide();
                        }

                        //tiles.wookmarkClear();

                        $('#tiles').append(data.content);

                        var options = {
                            autoResize : true,
                            offset : 20,
                            container: $('#tiles')
                        };

                        tiles = $('#tiles li');

                        core.ajaxify();


                        $('#tiles img').load(function()
                        {
                            tiles.wookmark(options);
                            core.home.resize();
                        });
                    });
                }
            }


            //add more tiles
            $('#more-tiles').unbind('click').click(function(e)
            {
                e.preventDefault();
                core.home.page += 1;

                var tilesRoute = Routing.generate('diorBackstageFrontBundle_article_show', { '_locale' : core._locale, '_platform' : core._platform, 'page': core.home.page });

                var label = $(this).html();

                if(core.ie === false)
                {
                    $(this).html('<div id="loading-article"></div>');
                    var cl = new CanvasLoader('loading-article');
                    cl.setColor('#7d7d7d'); // default is '#000000'
                    cl.setShape('spiral'); // default is 'oval'
                    cl.setDiameter(15);
                    cl.show();
                };

                var req = $.ajax(
                    {
                        url         : tilesRoute,
                        dataType    : 'json'
                    });

                req.success(function(data)
                {
                    if( data.next === null)
                    {
                        $('#more-tiles').hide();
                    }

                    tiles.wookmarkClear();

                    $('#tiles').append(data.content);

                    var options = {
                        autoResize : true,
                        offset : 20,
                        container: $('#tiles')
                    };

                    tiles = $('#tiles li');

                    core.ajaxify();

                    $('#tiles img').load(function()
                    {
                        tiles.wookmark(options);
                        $('#more-tiles').html(label)
                        core.home.resize();
                    });
                });
            });

            $(window).resize(function()
            {
                core.home.resize();
            });
        }
    },

    placeIntersticiel : function()
    {
        if (core.ie == false)
        {
            if( core.intersticiel === true )
            {
                var _l = $('.background-cover').length,
                    coverImg = 0;

                for (var i=0; i<_l; ++i) {
                    coverImg = Math.max( coverImg, $('.background-cover:eq('+(_l-1)+')').height() );
                };

                $('#covers .wrapper li div.intersticiel').css({'top' : coverImg * .25});

                setTimeout(function()
                {
                    $('#covers .wrapper li div.intersticiel').fadeOut(1000, function()
                    {
                        $('#covers .wrapper li div.accroche').fadeIn(1000);

                        core.intersticiel = false;
                    });
                }, 3000);
            }

            if( core.intersticiel === false )
            {
                $('#covers .wrapper li div.intersticiel').hide();
                $('#covers .wrapper li div.accroche').show();
            }

            core.loader.close();
        }
        else
        {
            $('#covers .wrapper li div.intersticiel').hide();
            $('#covers .wrapper li div.accroche').show();
            core.loader.close();
        };

        core.home.firstLoad = false;
    },

    resize : function()
    {
        core.home.contentW = $(window).width();
        core.home.contentH = $('#page-content').height();


        var imgHeight = setTimeout(function()
        {
            var _l = $('.background-cover').length,
                coverImg = 0;

            for (var i=0; i<_l; ++i) {
                coverImg = Math.max( coverImg, $('.background-cover:eq('+(_l-1)+')').height() );
            }

            // dif = cover - 49% of cover ? so dif = 51% of cover
            //var difCover = coverImg - ((coverImg * 49) / 100);
            var difCover = coverImg * 0.51;

            // why this? media queries in css... :S
            $('#page-content').css({'top' : coverImg - difCover});

            if($('#page-content').length > 0) $('.wrapper li').height(core.home.contentH + $('#page-content').position().top);

            $('.accroche').each(function(){
                var accrocheHeight = $(this).height();

                $(this).css({'top' : ($('#page-content').position().top - accrocheHeight) / 2});
            });

            core.home.placeIntersticiel();

        }, 200);

    }
};

core.look =
{


    init : function()
    {
        if(core.mobile == false)
        {
            core.medias.video.init();
        }

        core.look.preload();

        core.look.slider.init();

        $('.push li:even').addClass('push-top');

        if(core.mobile == false)
        {
            $('.push li a').click(function(e)
            {
                var videoAttr = $(this).attr('data-mp4');

                if(videoAttr != undefined)
                {
                    e.preventDefault();

                    core.medias.video.pushVideo($(this));
                }
            });
        }

        $('.tag a').hover(function()
        {
            var thisColor = $(this).attr('data-color');
            var color = '#' + thisColor;
            $(this).css({'color':color});
        }).mouseleave(function()
        {
            $(this).css({'color':'#FFF'});
        });
    },

    displaySection : function()
    {
        var parameter = core.getParameters();

        if( parameter != undefined){
            var hDisplay = $('.' + parameter).offset().top;

            if(core.ie7 == true)
            {
                if(parameter == 'making-of') $(document).scrollTop(hDisplay);
                else $(document).scrollTop(hDisplay - 20);
            }
            else
            {
                if(parameter == 'making-of') $("html, body").scrollTop(hDisplay);
                else if(parameter == 'collection') $("html, body").scrollTop(hDisplay + 60);
                else $("html, body").scrollTop(hDisplay - 20);
            }
        }
    },

    preload : function () {
        var s,
            images = [],
            loaded = 0;

        $('img').each(function () {
            var src = $(this).attr('src');
            images.push(src);
        });

        core.look.launchPreload(images);
    },

    launchPreload : function (arr) {
        var newimages = [], loadedimages = 0,
            arr = (typeof arr !== "object") ? [arr] : arr;

        function imageloadpost () {
            loadedimages++;

            if (loadedimages === arr.length) {
                var searchLocation = document.location.href.split('?');

                if(searchLocation[1] != undefined) core.look.displaySection();

                core.loader.close();
            }
        };

        for (var i=0; i<arr.length; i++) {
            newimages[i] = new Image();
            newimages[i].src = arr[i];
            if($('html').hasClass('ie8'))
            {
                imageloadpost();
            }
            else if($('html').hasClass('ie7'))
            {
                imageloadpost();
            }
            else
            {
                newimages[i].onload = function()
                {
                    imageloadpost();
                }
                newimages[i].onerror = function()
                {
                    imageloadpost();
                }
            }
        };
    },

    slider :
    {
        previous 		: 0,
        current 		: 1,
        next 			: 2,
        table 			: [],
        flag			: false,

        init : function()
        {


            if(core.mobile)
            {
                $('.slider ul li img').each(function()
                {
                    var thisSrc = $(this).attr('src');

                    core.look.slider.table.push(thisSrc)
                });

                core.look.slider.buildMobile();

                // var height = $('.video-look img').height();

                // $('.video-look').css({'height': height});
            }
            else
            {



                var	wrapper = $('.slider ul');

                wrapper.prepend($('.slider ul li:last-child').clone()).append($('.slider ul li:eq(1)').clone()).append($('.slider ul li:eq(2)').clone());

                var item 		= $('.slider ul li'),
                    nbrItem 	= item.length;

                item.each(function(i)
                {
                    $(this).addClass('item-' + i).attr('data-item', i)
                });

                $('.slider-nav a').click(function(e)
                {
                    e.preventDefault();

                    if(core.look.slider.flag === false)
                    {
                        core.look.slider.flag = true;
                        setTimeout(function(){core.look.slider.flag = false;}, 700);

                        if($(this).hasClass('previous'))
                        {
                            item.each(function(i)
                            {
                                var curIndex 	= $(this).attr('data-item');
                                var newIndex	= parseInt(curIndex) + 1;

                                if( newIndex > nbrItem - 1 )
                                {
                                    newIndex = 0;
                                }

                                $(this).removeClass().addClass('item-' + newIndex ).attr('data-item', newIndex)

                            });
                        };

                        if($(this).hasClass('next'))
                        {
                            item.each(function(i)
                            {
                                var curIndex 	= $(this).attr('data-item');
                                var newIndex	= parseInt(curIndex) - 1;

                                if( newIndex < 0 )
                                {
                                    newIndex = nbrItem - 1;
                                }

                                $(this).removeClass().addClass('item-' + newIndex ).attr('data-item', newIndex)

                            });
                        }
                    }
                });
            }


        },

        buildMobile : function()
        {

            $('.slider ul, .slider-nav').remove();
            var nbrItem = core.look.slider.table.length;

            var template = '<div class="flexslider"><ul class="slides">';

            for (s = 0; s < nbrItem; s++)
            {
                template += '<li><img src="' + core.look.slider.table[s] + '"/></li>'
            }

            template += '</ul></div>'

            $('.slider .look-text').after(template);

            if(core.android) {
                $('.flexslider').flexslider({
                    animation : 'slide',
                    slideshowSpeed: 4000,
                    pauseOnHover : false,
                    animationLoop : true,
                    slideshow: true,
                    directionNav: false,
                    touch: true
                });
            } else {
                $('.flexslider').flexslider({
                    animation : 'slide',
                    slideshowSpeed: 4000,
                    pauseOnHover : false,
                    animationLoop : true,
                    slideshow: true,
                    directionNav: true,
                    touch: false
                });
            }

        }
    }

}
core.search =
{
    currentColor    : null,

    init : function()
    {

        var subFooter = $('#sub-footer').height();
        var footer = $('#footer').height();
        var layoutH = subFooter + footer;

        $(window).resize(function()
        {
            var _H = $(window).height();
            var dif = _H - layoutH;

            if($('#content').height() < dif) $('#content').css({'height':dif});

        }).trigger('resize');

        var link = $('.search-wrapper a');

        link.each(function()
        {
            var thisColor = $(this).attr('data-color');
            $(this).css({'color': '#' + thisColor});

        }).hover(function()
        {
            $(this).css({'color':'#000'});
        }).mouseleave(function()
        {
            var thisColor = $(this).attr('data-color');
            $(this).css({'color': '#' + thisColor});
        });

        core.loader.close();

    }

}
core.result =
{
    page 	: 1,
    tag : 0,
    init : function()
    {
        if(!core.mobile)
        {
            var tiles = $('#tiles li');
            var options = {
                autoResize : true,
                offset : 20,
                container: $('#tiles')
            };

            $('img').load(function()
            {
                tiles.wookmark(options);

                core.result.resize();

            });

            $(window).resize(function()
            {
                core.result.resize();
            });
        }

        $('#more-tiles').click(function(e)
        {
            e.preventDefault();

            core.result.tag = $(this).attr('data-tag');
            core.result.page += 1;
            var tilesRoute = Routing.generate('diorBackstageFrontBundle_tag_show', { '_locale' : core._locale, '_platform' : core._platform, 'tag':core.result.tag ,  'page': core.result.page });

            var label = $(this).html();

            if(core.ie === false)
            {
                $(this).html('<div id="loading-article"></div>');
                var cl = new CanvasLoader('loading-article');
                cl.setColor('#7d7d7d'); // default is '#000000'
                cl.setShape('spiral'); // default is 'oval'
                cl.setDiameter(15);
                cl.show();
            };

            var req = $.ajax(
                {
                    url         : tilesRoute,
                    dataType    : 'json'
                });

            req.success(function(data)
            {
                if( data.next === null)
                {
                    $('#more-tiles').hide();
                }

                tiles.wookmarkClear();

                $('#tiles').append(data.content);

                var options = {
                    autoResize : true,
                    offset : 20,
                    container: $('#tiles')
                };

                tiles = $('#tiles li');

                core.ajaxify();


                $('#tiles img').load(function()
                {
                    tiles.wookmark(options);
                    $('#more-tiles').html(label)
                    core.result.resize();
                })
            });
        });

        core.loader.close();

    },

    resize : function()
    {
        core.home.contentW = $(window).width();
        core.home.contentH = $('#page-content').height();

        if($("#content[data-controller=result]").length)
        {
            var pos = $('#tiles li:first-child').offset();
            var left = pos.left;

            var height = $('#tiles').height();
            $('#result-wrapper').css({'height':height + 150});


            $('.search-resume').css({'margin-left':left});
        }

    }
}
    /* Modernizr 2.8.2 (Custom Build) | MIT & BSD
     * Build: http://modernizr.com/download/#-opacity-csstransitions-video-touch-mq-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
     */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return w("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.opacity=function(){return B("opacity:.55"),/^0.55$/.test(j.opacity)},q.csstransitions=function(){return G("transition")},q.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c};for(var H in q)z(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.mq=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=w,e.prefixed=function(a,b,c){return b?G(a,b,c):G(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

(function( modules ) {

    modules.header = {
        $page: null,
        page: '',
        transformCSS: '',

        useTransform: false,
        cookieOptions: {expires: 15, path: '/'},

        init : function() {
            //DIORCOM: #mainScroller
            // -> override by Backstage, etc...
            modules.header.$page = $('#content');
            modules.header.page = $('#wrapper').data('page');

            modules.header.transformCSS = core.hyphenate( Modernizr.prefixed('transform') );

            // COOKIE: don't set defaults (minisites could use cookie too)
            // - use in basket
            // - advantage layer use specific cookie (specific expires)
            modules.header.cookieOptions.domain = window.location.host.substring(window.location.host.lastIndexOf(".", window.location.host.lastIndexOf(".") - 1) + 1);
            modules.header.cookieOptions.path = '/';
            modules.header.cookieOptions.expires = 15;

            // MINISITES: navLess case
            if ($('body').hasClass('navLess')) {
                modules.header.topLayer.paddingTop = parseInt($('#headerBar').outerHeight(true));
            } else if (modules.header.$page.hasClass('topbottom') && !core.ie6) {
                modules.header.topLayer.paddingTop = parseInt($('#headerBar').outerHeight(true)) + parseInt($('#main-nav').outerHeight(true));
                modules.header.$page.css('padding-top', modules.header.topLayer.paddingTop+'px');
            }

            // USER IS LOGGED?
            // -> hide/show the 'deconnection' button
            // -> set 'My Acount' link (if connected, no rollover, link to account page)
            var _connected = $.cookie('global_isauthenticated');

            if (_connected && _connected!=undefined) {
                $('#logout-trigger').show();
                $('#user-account-link > a').removeAttr('data-targetroll');
            } /*else {
             $('#user-account-link > a').attr('href', 'javascript:void(0);');
             }*/

            var _cartItemCount = $.cookie('CartItemsCount');
            modules.header.basket.updateTotalCount(_cartItemCount);

            modules.header.topLayer.init();
            modules.header.rolls.init();
            if (!$('body').hasClass('navLess')) modules.header.topMenu.init();

            //modules.header.account.init();
            //modules.header.basket.init();
            //modules.header.newsletter.init();
            //modules.header.search.init();

            modules.header.tracking.init();

            /* EXTRACT ALL LI <= 1024px: modules.header link on 2 lines */
            $('#topbar-nav').find('li').each( function() {
                modules.header.topLayer.linkArray[$(this).attr('id').replace('-trigger', '')] = $(this);
            });

            /* margin for hover label "Deconnexion" $('#logout-trigger a span').css('margin-left', (-$('#logout-trigger a span').width()-24)+'px' ); */

            $(window).resize( function(){
                modules.header.topLayer.onResize();
                modules.header.topMenu.onResize();
                if (! core.tablet) {
                    modules.header.rolls.onResize();
                }
            });

            $(window).scroll( function(){
                modules.header.topLayer.onScroll();
                modules.header.topMenu.onScroll();
                modules.header.rolls.onScroll();
            });
            if ( core.tablet ){
                core.scrollSignal.add(modules.header.topLayer.onScroll);
                core.scrollSignal.add(modules.header.topMenu.onScroll);
                core.scrollSignal.add(modules.header.rolls.onScroll);
            }
        },

        topLayer : {
            current:    null,
            activeMenu: $("#topbar-nav .advantages"),

            isOpened:   false,

            autoOpen: undefined,
            timesOpened: 0,
            maxTimesOpen: 2,

            timer:      null,
            linkArray:  {},
            TWO_LINES:  'two-lines',
            $el:        $('#headerTopLayer'),
            paddingTop: 94,
            giftWidth: 0,

            init: function() {
                // MINISITES: navLess case
                if ($('body').hasClass('navLess')) {
                    //modules.header.topLayer.paddingTop = 56;
                    $('#main-nav').remove();
                    modules.header.topLayer.paddingTop = parseInt($('#headerBar').outerHeight(true));
                } else /*if (modules.header.$page.hasClass('topbottom'))*/ {
                    // CONTEXT MINISITE
                    modules.header.$page.addClass('init-padding');
                    // QUICK FIX: prevent css transition
                    setTimeout( function() { modules.header.$page.addClass('use-padding'); }, 0);
                    modules.header.useTransform = false;

                    if (!core.ie6) modules.header.topLayer.paddingTop = parseInt($('#headerBar').outerHeight(true)) + parseInt($('#main-nav').outerHeight(true));
                    else modules.header.topLayer.paddingTop = 0;
                } /*else {
                 // CONTEXT DIOR.COM
                 modules.header.$page.addClass('init-transform');
                 // QUICK FIX: prevent css transition
                 setTimeout( function() { modules.header.$page.addClass('use-transform'); }, 0);
                 modules.header.useTransform = true;
                 }*/

                if (Modernizr.csstransitions) {
                    if (modules.header.useTransform) {
                        var _css = {};
                        _css[modules.header.transformCSS] = 'translate(0px, '+ modules.header.topLayer.paddingTop +'px)';
                        modules.header.$page.css( _css );
                    } else {
                        modules.header.$page.css('padding-top', modules.header.topLayer.paddingTop+'px');
                    }
                } else {
                    modules.header.$page.css('padding-top', modules.header.topLayer.paddingTop+'px');
                }

                // USER IS LOGGED?
                // -> hide/show the 'deconnection' button
                // -> set 'My Acount' link (if connected, no rollover, link to account page)
                var _connected = $.cookie('global_isauthenticated');

                if (_connected && _connected!=undefined) {
                    $('#logout-trigger').show();
                    $('#user-account-link > a').removeAttr('data-targetroll');
                } else {
                    $('#logout-trigger').hide();
                    $('#user-account-link > a').attr('data-targetroll', 'accountRoll');
                }

                if ($("#advantagesContent").length>0) {

                    modules.header.topLayer.current = $("#advantagesContent");
                    modules.header.topLayer.mode = 'init';
                    modules.header.topLayer.vAlign();

                    // READ PARAMS
                    modules.header.topLayer.autoOpen = modules.header.topLayer.$el.data('auto-open');

                    if (modules.header.topLayer.autoOpen) {
                        modules.header.topLayer.maxTimesOpen = modules.header.topLayer.$el.data('capping');
                        // DEFAULT: 1 open every 15 days
                        if (!modules.header.topLayer.maxTimesOpen) {
                            modules.header.topLayer.maxTimesOpen = 1;
                        }

                        modules.header.topLayer.delay = parseInt( modules.header.topLayer.$el.data('delay') );
                        if (modules.header.topLayer.delay && header.delay>0) {
                            modules.header.topLayer.delay = header.delay * 1000;
                        } else {
                            modules.header.topLayer.delay = 5000;
                        }

                        //$.cookie.defaults.path = '/';

                        modules.header.topLayer.timesOpened = $.cookie('advantages_opened');

                        if (!modules.header.topLayer.timesOpened || modules.header.topLayer.timesOpened==undefined) {
                            modules.header.topLayer.timesOpened = 0;
                        }

                        if (modules.header.topLayer.timesOpened < modules.header.topLayer.maxTimesOpen) {
                            modules.header.topLayer.autoOpen = true;

                            $.cookie( 'advantages_opened', '1', modules.header.cookieOptions);
                        } else {
                            modules.header.topLayer.autoOpen = false;
                        }
                    }
                }
                if ($('#headerTopLayer .gift').length > 0 ) modules.header.topLayer.giftWidth = $('#headerTopLayer .gift').outerWidth(true);

                /* FIRST TIME OPEN */
                if (modules.header.topLayer.autoOpen) {
                    modules.header.topLayer.timer = setTimeout( modules.header.topLayer.close, 2500 );
                    modules.header.topLayer.open();
                }

                modules.header.topLayer.$el.on('mouseover', function() {
                    clearTimeout( modules.header.topLayer.timer );
                });

                $('#headerTopLayer .close').on('click', modules.header.topLayer.close);
                $(document).on('click', '#topbar a[data-targettoplayer]', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var newTopLayer = $('#' + $(this).data('targettoplayer'));
                    modules.header.topLayer.toggle(newTopLayer, $(this));
                } );




            },

            vAlign : function() {
                modules.header.topLayer.$el.find('.v-align').each(function(){
                    $(this).css({ 'margin-top': ($(this).parent().height() - $(this).height()) / 2});
                });

            },

            onResize: function() {

                var winWidth        = $(window).width(),
                    extraWidth          = $('#headerTopLayer .gift').length > 0 ? modules.header.topLayer.giftWidth  + 50 : 0,
                /* don't get outerWidth: margin-left cause wrong results! */
                    decorWidth          = $('#headerTopLayer .decor').width() + 26,
                    listWidthAvailable  = winWidth - decorWidth - extraWidth,
                    $list               = $('#advantagesContent .advantages-wrap li'),
                    length              = $list.length,
                    decorVisibleWidth   = decorWidth,
                    margL               = 0;

                var minWidth, maxWidth;
                if ( winWidth > 1024 ) {

                    if( winWidth < 1800 ) {
                        $('.header-top-layer').removeClass('wide');
                        decorVisibleWidth =  (1024 - extraWidth) / length,
                            margL = decorWidth - decorVisibleWidth ;
                    } else {
                        decorVisibleWidth = ( (1024 - extraWidth) / length) + (winWidth - (1800 -1)),
                            margL = decorWidth - decorVisibleWidth ;
                        if (margL  <= 0) {
                            $('.header-top-layer').addClass('wide');
                            margL = 0;
                        }
                    }

                    $('.header-top-layer').removeClass('tiny');

                    if (modules.header.topLayer.mode == modules.header.topLayer.TWO_LINES || modules.header.topLayer.mode == 'init' ) {
                        modules.header.topLayer.mode = '';
                        $('#topbar-nav').removeClass('two-lines');

                        $('#logout-trigger span').css('margin-left', 0);

                        $('#topbar-nav').empty()
                            .append( '<ul id="headerLinkFirstLine" class="header-links-line"></ul>' );

                        if (modules.header.topLayer.$addtoCart) {
                            $('#topbar-nav').append( modules.header.topLayer.$addtoCart );
                        }

                        $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.search, modules.header.topLayer.linkArray.gocart );

                        $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray['user-account-link'] );
                        if (modules.header.topLayer.linkArray.logout) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.logout );
                        }
                        if (modules.header.topLayer.linkArray.diva) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.diva );
                        }
                        if (modules.header.topLayer.linkArray.exclusive) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.exclusive );
                        }
                        $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.newsletter );

                        if (modules.header.topLayer.linkArray.advantages) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.advantages );
                        }
                    }

                } else {

                    decorVisibleWidth =  ( winWidth - extraWidth ) / length,
                        margL = decorWidth - decorVisibleWidth ;
                }

                if( winWidth < 1200 ) {

                    if (modules.header.topLayer.mode != modules.header.topLayer.TWO_LINES ) {
                        modules.header.topLayer.mode = modules.header.topLayer.TWO_LINES;

                        $('.header-top-layer').addClass('tiny').removeClass('wide');

                        $('#topbar-nav').addClass('two-lines');

                        $('#topbar-nav').empty().append( '<ul id="headerLinkFirstLine" class="header-links-line"></ul> <ul id="headerLinkSecondLine" class="header-links-line"></ul>' );

                        if (modules.header.topLayer.$addtoCart) {
                            $('#topbar-nav').append( modules.header.topLayer.$addtoCart );
                        }

                        $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.search );

                        if (modules.header.topLayer.linkArray.diva) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.diva );
                        }

                        if (modules.header.topLayer.linkArray.exclusive) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.exclusive );
                        }

                        $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.newsletter );
                        if (modules.header.topLayer.linkArray.advantages) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.advantages );
                        }

                        $('#headerLinkSecondLine').append( modules.header.topLayer.linkArray.search, modules.header.topLayer.linkArray.gocart, modules.header.topLayer.linkArray['user-account-link'] );
                        if (modules.header.topLayer.linkArray.logout) {
                            $('#headerLinkSecondLine').append( modules.header.topLayer.linkArray.logout );
                        }
                    }
                }

                $('#headerTopLayer .decor').css('margin-left', -margL+'px' );

                listWidthAvailable =  winWidth - decorVisibleWidth;

                if( extraWidth > 0 ) {

                    if( listWidthAvailable /3 >= 400) {
                        $('#headerTopLayer .gift').width(400);
                    }
                    else {
                        $('#headerTopLayer .gift').width(modules.header.topLayer.giftWidth);
                    }
                    $list.width(( 2/3 * listWidthAvailable )/3);
                } else {
                    $list.width(listWidthAvailable / length );
                }

                var _advList = $('.advantages-wrap li');
                if (_advList.length>0) {
                    /* -> reinit natural height */
                    _advList.height('auto');
                    /* FORCE MAX-HEIGHT ON EACH LI */
                    var _maxHeight = 0;
                    _advList.each( function() {
                        _maxHeight = Math.max( _maxHeight,  $(this).height() );
                    });
                    _advList.height( _maxHeight );
                }
                modules.header.topLayer.vAlign();

                if (core.ie6) {
                    $('#logout-trigger a').hover(function() {
                            $(this).find('span').show().css('visibility', 'visible');
                        },
                        function() {
                            $(this).find('span').hide().css('visibility', 'hidden');
                        });
                }

            },
            onScroll: function() {
                if (modules.header.topLayer.isOpened) {
                    modules.header.topLayer.close();
                }
            },
            open : function() {
                modules.header.topLayer.isOpened = true;
                var newHeight = parseInt(modules.header.topLayer.current.find('.container').outerHeight(true));

                if (Modernizr.csstransitions) {
                    modules.header.topLayer.current.height(newHeight);
                    if (modules.header.useTransform) {
                        var _css = {};
                        _css[modules.header.transformCSS] = 'translate(0px, '+ (newHeight + modules.header.topLayer.paddingTop) +'px)';
                        modules.header.$page.css( _css );
                    } else {
                        modules.header.$page.css('padding-top', (newHeight + modules.header.topLayer.paddingTop)+"px");
                    }
                } else {
                    modules.header.topLayer.$el.animate({height: newHeight});
                    modules.header.topLayer.current.animate({height: newHeight});
                    modules.header.$page.animate({ paddingTop: (newHeight + modules.header.topLayer.paddingTop)+"px" });
                }

                $('body').addClass( modules.header.topLayer.current.attr('id')+'Opened' );

                modules.header.topLayer.activeMenu.parent().addClass('active');

            },
            close : function() {
                modules.header.topLayer.isOpened  = false;
                if (Modernizr.csstransitions) {
                    modules.header.topLayer.current.height(0);

                    if (modules.header.useTransform) {
                        var _css = {};
                        _css[modules.header.transformCSS] = 'translate(0px, '+ modules.header.topLayer.paddingTop +'px)';
                        modules.header.$page.css( _css );
                    } else {
                        modules.header.$page.css('padding-top', modules.header.topLayer.paddingTop);
                    }
                } else {
                    modules.header.topLayer.$el.animate({height: 0});
                    modules.header.topLayer.current.animate({height: 0});
                    modules.header.$page.animate({ paddingTop: modules.header.topLayer.paddingTop+'px' });
                }

                $('body').removeClass( modules.header.topLayer.current.attr('id')+'Opened' );

                modules.header.topLayer.activeMenu.parent().removeClass('active');

                if(core.tablet) {
                    window.setTimeout(function() {
                        pages.Transverses.stickyFooter();
                    },800);
                }
            },
            toggle : function( newTopLayer, active ) {
                if( !modules.header.topLayer.current || newTopLayer.attr('id') != modules.header.topLayer.current.attr('id')) {
                    if (modules.header.topLayer.isOpened) {
                        modules.header.topLayer.close();
                    }
                    modules.header.topLayer.current    = newTopLayer;
                    modules.header.topLayer.activeMenu = active;

                    modules.header.topLayer.open();
                }
                else {
                    if (modules.header.topLayer.isOpened) {
                        modules.header.topLayer.close();
                    } else {
                        modules.header.topLayer.open();
                    }
                }
            }
        },

        rolls : {
            current:    null,
            activeMenu: null,
            isOpened:   false,
            timerOut: null,

            init: function() {

                if(! core.tablet ) {
                    $(document).on('mouseover', '#topbar a[data-targetroll], .header-roll',function(e){

                        e.preventDefault();
                        e.stopPropagation();

                        window.clearTimeout(modules.header.rolls.timerOut);
                        modules.header.rolls.timerOut = null;

                        var newRoll = null;
                        if ($(this).data('targetroll') && $(this).data('targetroll') != 'passwordRoll') newRoll = $('#' + $(this).data('targetroll'));
                        else if ($(this).hasClass('header-roll')) newRoll = $(this);
                        else return;

                        modules.header.rolls.toggle(newRoll, $(this));

                    });

                    $(document).on('mouseout', '#topbar a[data-targetroll], .header-roll',function(e){
                        if (modules.header.rolls.timerOut == null) {
                            modules.header.rolls.timerOut = window.setTimeout(function() {
                                if (modules.header.rolls.isOpened) {
                                    modules.header.rolls.close();
                                }
                            }, 500);
                        }
                    });
                } else {
                    $(document).on('click', '#topbar a[data-targetroll]',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        var newRoll = $('#' + $(this).data('targetroll'));
                        modules.header.rolls.toggle(newRoll, $(this));

                        /*modules.header.rolls.validForm();*/
                    });

                    $(document).on('click',function(e){
                        var target = $('.header-roll');
                        if(! (target.is(event.target))  && (target.has(event.target).length === 0) ){
                            if (modules.header.rolls.isOpened) {
                                modules.header.rolls.close();
                            }
                        }
                    });

                    var fullHeader = $('.js-header');

                    $(document).on('focusin', 'input, textarea', function() {
                        fullHeader.parent('#container').addClass('unfixed');
                    }).on('focusout', 'input, textarea', function () {
                        fullHeader.parent('#container').removeClass('unfixed');
                        if ( core.tablet ){
                            core.scrollSignal.add(modules.header.topLayer.onScroll);
                            core.scrollSignal.add(modules.header.topMenu.onScroll);
                            core.scrollSignal.add(modules.header.rolls.onScroll);
                        }
                    });

                }

                $(document).on('click', '#accountRoll a[data-targetroll], .header-roll',function(e){

                    /* NO PREVENT: keep content active (FORM!!!) */
                    if ($(this) == $(e.target) ) {
                        e.preventDefault();
                        e.stopPropagation();
                    }

                    window.clearTimeout(modules.header.rolls.timerOut);
                    modules.header.rolls.timerOut = null;

                    var newRoll = null;
                    /* preventDefault for menu link */
                    if ($(e.target).data('targetroll')!=undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                        newRoll = $('#' + $(this).data('targetroll'));
                    }
                    else if ($(e.target).hasClass('header-roll')) {
                        e.preventDefault();
                        e.stopPropagation();
                        newRoll = $(this);
                    }
                    else return;

                    modules.header.rolls.toggle(newRoll, $(this));

                });

                $(document).on('click', '#cartRoll .next',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    modules.header.basket.scrollNext();
                } );
                $(document).on('click', '#cartRoll .prev',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    modules.header.basket.scrollPrev();
                } );

                $(document).on('click', '.close-roll',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    modules.header.rolls.close();
                    $(document.getElementById('newsletter-valid-pop')).hide();
                });

                /* INPUT VALUE RESET */
                $('.header-roll input[type=text]').each(function() {
                    $(this).on('focusin', function() {
                        $(this).val('');
                        if( $(this).hasClass('header-password') ) {
                            var newObject = document.createElement('input');
                            newObject.type = "password";
                            var oldObject = $(this)[0];
                            if(oldObject.size) newObject.size = oldObject.size;
                            if(oldObject.value) newObject.value = oldObject.value;
                            if(oldObject.name) newObject.name = oldObject.name;
                            if(oldObject.id) newObject.id = oldObject.id;
                            if(oldObject.className) newObject.className = oldObject.className;
                            oldObject.parentNode.replaceChild(newObject,oldObject);
                        }
                    });
                });
            },
            onResize: function() {

                if (modules.header.rolls.current != null){
                    modules.header.rolls.moveArrow();
                    modules.header.rolls.moveRollsTop();
                }
            },
            onScroll: function() {
                if (modules.header.rolls.isOpened && !$('.js-header').parent('#container').hasClass('unfixed')) {
                    modules.header.rolls.close();
                }
                modules.header.basket.scrollPosition = [];
                if( modules.header.basket.scrollContainer != null)
                    modules.header.basket.scrollContainer.scrollTop(0);
            },
            open : function() {
                /* if already open close hide arrow */
                if (!modules.header.rolls.isOpened) {
                    modules.header.rolls.current.parent().addClass('opened-rolls');
                }

                modules.header.rolls.isOpened = true;

                if (Modernizr.csstransitions) {
                    modules.header.rolls.current.addClass('open');
                } else {
                    var newHeight = parseInt(modules.header.rolls.current.children().first().outerHeight(true));

                    if (modules.header.rolls.current.attr('id')=="cartRoll" && core.ie) {
                        newHeight = 'auto';
                        modules.header.rolls.current.height( 'auto' );
                    } else {
                        modules.header.rolls.current.animate({height: newHeight});
                    }
                }

                if(! modules.header.rolls.current.hasClass('password-roll') ) modules.header.rolls.moveArrow();
                modules.header.rolls.moveRollsTop();
                modules.header.rolls.activeMenu.parent().addClass('active-roll');
            },
            close : function() {
                /* if already open close hide arrow */
                if (modules.header.rolls.isOpened) {
                    modules.header.rolls.current.parent().removeClass('opened-rolls');
                }

                modules.header.rolls.isOpened = false;

                if (Modernizr.csstransitions) {
                    modules.header.rolls.current.removeClass('open');
                } else {
                    modules.header.rolls.current.animate({height: 0});
                }
                modules.header.rolls.activeMenu.parent().removeClass('active-roll');
            },
            toggle : function( newRoll, active, params ) {
                if( modules.header.rolls.current != null && (newRoll.attr('id') != modules.header.rolls.current.attr('id') || !modules.header.rolls.isOpened)) {
                    if (modules.header.rolls.isOpened) {
                        modules.header.rolls.close();
                    }
                    modules.header.rolls.current    = newRoll;
                    modules.header.rolls.activeMenu = active;

                    /* IF CART: open only if carts not empty */
                    if (newRoll.attr('id')=="cartRoll") {
                        modules.header.basket.get( params );
                    } else {
                        modules.header.rolls.open();
                    }
                }
                else {
                    if (modules.header.rolls.current == null) {
                        modules.header.rolls.current    = newRoll;
                        modules.header.rolls.activeMenu = active;

                        /* IF CART: open only if carts not empty */
                        if (newRoll.attr('id')=="cartRoll") {
                            modules.header.basket.get( params );
                        } else {
                            modules.header.rolls.open();
                        }
                    }
                }

            },
            moveArrow : function() {
                var arrowWidth = modules.header.rolls.current.parent().find('.arrow-roll').outerWidth(true);
                var activeCenter = ($(window).width() - (modules.header.rolls.activeMenu.offset().left + (modules.header.rolls.activeMenu.outerWidth()*0.5))) - arrowWidth/2 ;
                modules.header.rolls.current.parent().find('.arrow-roll').css('right', activeCenter+'px');
            },
            moveRollsTop : function() {
                var winWidth    = $(window).width();

                if ( winWidth > 1024 ) {
                    if (modules.header.rolls.current != null)
                        modules.header.rolls.current.parent().css('top','100%');
                } else {
                    if( modules.header.rolls.activeMenu.offset().top < modules.header.topLayer.current.outerHeight(true) + 25)
                        modules.header.rolls.current.parent().css('top','35px');
                    else
                        modules.header.rolls.current.parent().css('top','100%');
                }
            }

        },

        topMenu : {
            current:    null,
            activeMenu: $(".wrapMainNav a.active"),
            isOpened:   false,
            $el:        null,
            overlay: null,
            timerLeave    : null,
            timeOut     : 500,

            init: function() {
                if ($(".header-top-menu .nav-content").length>0) {
                    modules.header.topMenu.current = $(".header-top-menu .nav-content:first");
                    modules.header.topMenu.$el = $('#headerTopMenu');

                    var _h = ($('html').hasClass('ie') && $('html').hasClass('lte6')) ? $(document.getElementById('wrapper')).height() : '100%',
                        _p = ($('html').hasClass('ie') && $('html').hasClass('lte6')) ? 'absolute' : 'fixed';

                    if (document.getElementById('content-overlay')==null) {
                        modules.header.topMenu.overlay = $('<div></div>')
                            .attr('id', 'content-overlay')
                            .css({
                                height: _h,
                                width: '100%'
                            }).appendTo('#wrapper');
                    } else {
                        modules.header.topMenu.overlay = $(document.getElementById('content-overlay'));
                    }

                    if (core.ie6) {
                        var left = parseInt($('.header-top-menu').offset().left);
                        $('.header-top-menu').css('margin-left','-'+left);
                    }

                    var column = [];
                    $('.header-top-menu .nav-content').each(function(i){

                        /* INPUT POSITION */
                        if($(this).hasClass('column-switch')) modules.header.topMenu.inputPosition($(this));

                        /* SET COLUMN HEIGHT */
                        $(this).find('.column').each(function(j){
                            if( column[i] == undefined || column[i] && column[i] < $(this).height()){
                                column[i] = $(this).height();
                            }
                        });

                        /*dynamic container height */
                        var $container = $(this).find('.container').first();
                        $container.find('.column:not(.last-line)').css('height', column[i]+'px');
                        var totalHeight = $container.find('.content').outerHeight(true);
                        $container.css('height',totalHeight+'px').attr('data-height', totalHeight);
                    });


                    if(!core.tablet) {
                        $(document).on('mouseover', '.wrapMainNav a[data-targettopmenu]',function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            var $link = $(this);


                            window.clearTimeout(modules.header.topMenu.timerLeave);
                            var newTopLayer = $('#' + $link.data('targettopmenu'));
                            modules.header.topMenu.toggle(newTopLayer, $link);

                        } );
                        $(document).on('mouseleave', '#main-nav',function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            modules.header.topMenu.timerLeave = window.setTimeout(function()
                            {
                                modules.header.topMenu.close();
                                modules.header.topMenu.$el.stop().animate({height: 0},300);
                                modules.header.topMenu.current.stop().animate({height: 0},300).fadeOut(50);
                                modules.header.topMenu.overlay.fadeOut(50);
                            }, 600);
                        });
                    }
                    else {
                        $(document).on('click', '.wrapMainNav a[data-targettopmenu]',function(e){

                            if (!modules.header.topMenu.isOpened || (modules.header.topMenu.isOpened && modules.header.topMenu.current.attr('id') != $(this).data('targettopmenu'))) {
                                e.preventDefault();
                                e.stopPropagation();
                                var $link = $(this);

                                modules.header.topMenu.timerOver = window.setTimeout(function()
                                {
                                    window.clearTimeout(modules.header.topMenu.timerOver);
                                    var newTopLayer = $('#' + $link.data('targettopmenu'));
                                    modules.header.topMenu.toggle(newTopLayer, $link);
                                }, 300);
                            }
                        });
                    }

                    /* MEDIAS ROLL */
                    $(document).on('mouseover', '.medias-roll a',function(e){
                        e.preventDefault();
                        var src = $(this).attr('data-img');
                        $(this).parents('.medias-roll').prev().find('img').attr('src', src);
                    });
                    $(document).on('mouseleave', '.medias-roll',function(){
                        var src = $(this).prev().find('img').attr('data-img');
                        $(this).prev().find('img').attr('src', src);
                    });
                }
            },

            onResize: function() {
                if (modules.header.topMenu.current != null) {
                    modules.header.topMenu.moveArrow();
                }
            },
            onScroll: function() {
                if (modules.header.topMenu.isOpened) {
                    modules.header.topMenu.close();
                    modules.header.topMenu.$el.stop().animate({height: 0},100);
                    modules.header.topMenu.current.stop().animate({height: 0},100).fadeOut(50);
                    modules.header.topMenu.overlay.fadeOut('slow');
                }
            },
            open : function() {
                /* if already open close hide arrow */
                if (!modules.header.topMenu.isOpened) {
                    modules.header.topMenu.current.parent().addClass('opened-topMenu');
                }

                modules.header.topMenu.isOpened = true;
                var newHeight = parseInt(modules.header.topMenu.current.children().first().data('height'));

                modules.header.topMenu.$el.stop().animate({height: newHeight},100);
                modules.header.topMenu.current.stop().delay(200).animate({height: newHeight},100).fadeIn(100);

                modules.header.topMenu.moveArrow();
                modules.header.topMenu.activeMenu.parent().addClass('active');
                modules.header.topMenu.overlay.fadeIn('slow');
            },
            close : function() {
                /* if already open close hide arrow */
                if (modules.header.topMenu.isOpened) {
                    modules.header.topMenu.current.parent().removeClass('opened-topMenu');
                }
                modules.header.topMenu.isOpened  = false;

                modules.header.topMenu.current.fadeOut(50);
                modules.header.topMenu.activeMenu.parent().removeClass('active');

            },
            toggle : function( newTopLayer, active ) {
                if( modules.header.topMenu.activeMenu.length>0 && newTopLayer.attr('id') != modules.header.topMenu.current.attr('id')) {
                    if (modules.header.topMenu.isOpened) {
                        modules.header.topMenu.close();
                    }
                }
                modules.header.topMenu.current    = newTopLayer;
                modules.header.topMenu.activeMenu = active;

                modules.header.topMenu.timerOver = window.setTimeout(function() {
                    window.clearTimeout(modules.header.topMenu.timerOver);
                    modules.header.topMenu.open();
                }, 300);
            },
            moveArrow : function() {
                var arrowWidth = modules.header.topMenu.current.parent().find('.arrow-topMenu').outerWidth(true),
                    activeCenter = 0;

                if ( modules.header.topMenu.activeMenu.length>0) {
                    activeCenter = ($(window).width() - (modules.header.topMenu.activeMenu.offset().left + (modules.header.topMenu.activeMenu.outerWidth()*0.5))) - arrowWidth*0.5;
                } else {
                    activeCenter = $(window).width()*0.5 - arrowWidth*0.5;
                }
                //modules.header.topMenu.current.parent().find('.arrow-topMenu').css('right', activeCenter+'px');
            },
            inputPosition: function($this) {
                var column      = $this.find('.column'),
                    inputLength = column.length;

                column.last().addClass('last-col');

                switch( inputLength ) {

                    case 5:
                        column.eq(2).addClass('last-col').after('<br />');
                        column.slice(-2).addClass('last-line');
                        break;
                    case 6:
                        column.eq(2).addClass('last-col').after('<br />');
                        column.slice(-3).addClass('last-line');
                        break;
                    case 7:
                        column.eq(3).addClass('last-col').after('<br />');
                        column.slice(-3).addClass('last-line');
                        break;
                    case 8:
                        column.eq(3).addClass('last-col').after('<br />');
                        column.slice(-4).addClass('last-line');
                        break;
                    case 9:
                        column.eq(2).addClass('last-col').after('<br />');
                        column.eq(5).addClass('last-col').after('<br />');
                        column.slice(-3).addClass('last-line');
                        break;
                    case 10:
                        column.eq(3).addClass('last-col').after('<br />');
                        column.eq(6).addClass('last-col').after('<br />');
                        column.slice(-4).addClass('last-line');
                        break;
                    case 11:
                        column.eq(3).addClass('last-col').after('<br />');
                        column.eq(7).addClass('last-col').after('<br />');
                        column.slice(-3).addClass('last-line');
                        break;
                    case 12:
                        column.eq(3).addClass('last-col').after('<br />');
                        column.eq(7).addClass('last-col').after('<br />');
                        column.slice(-4).addClass('last-line');
                        break;
                    default:
                        column.addClass('last-line');
                }
            }
        },

        account : {
            params: {},
            init: function() {
                if ( $('#user-account-link').length>0 ) {
                    /* L O S T   P A S S W O R D */
                    $(document).on('click','#passwordRoll .valid-form', function(e)
                    {
                        e.preventDefault();

                        if ( utils.FormValidator.validForm($('#passwordRoll form:first')) ) {

                            var emailVal = $('#passwordRoll').find("#email-header2").val();

                            $.ajax({
                                url: core.AjaxConfig.Account.HEADER_RESET_PASSWORD.url,
                                type: core.AjaxConfig.Account.HEADER_RESET_PASSWORD.method,
                                data: {email: emailVal},
                                success: function(response) {
                                    if (response.status=='ok') {
                                        $(document.getElementById('account-valid-pop')).show();
                                    } else {
                                        utils.FormValidator.errors( $('#passwordRoll form.password-form'), response );
                                    }
                                }
                            });
                        }

                        $("#passwordRoll .close-roll").on("click", function(e){
                            e.preventDefault();
                        });
                    });

                    $('#accountRoll .log-form .valid-form').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();

                        var $form = $(this).parents('.header-roll').find('.header-form');
                        if ( utils.FormValidator.validForm ($form) ) {
                            modules.header.tracking.account($(this));
                            modules.header.account.params = utils.FormValidator.getParams( $form );
                            modules.header.account.send();
                        }
                    });
                }
            },
            send: function() {
                $.ajax({
                    url: core.AjaxConfig.Account.LOGIN.url,
                    type: core.AjaxConfig.Account.LOGIN.method,
                    data: modules.header.newsletter.params,
                    success: function(response) {
                        if (response.status=='ok') {
                            window.location.href = $('#accountRoll form.header-form').attr('action');
                        } else {
                            utils.FormValidator.errors( $('#accountRoll form.header-form'), response );
                        }
                    }
                });
            },
            message: {
                timer: null,
                show: function( msg ) {
                    //clearTimeout( header.account.message.timer );

                    $('#passwordRoll .error-msg').html( msg ).show();

                    //header.account.message.timer = setTimeout( header.account.message.hide, 2500 );
                },
                hide: function() {
                    $('#passwordRoll .error-msg').hide();
                }
            }
        },

        newsletter : {
            params: {},
            init: function() {
                if ( $('#newsletterRoll').length>0 ) {

                    $('#newsletterRoll .valid-form').on('click', function (e) {
                        e.preventDefault();
                        var _this     = $(this);
                        var $form      =  _this.parents('form:first');

                        // utils.FormValidator
                        // - if $form hasn't ths class 'noSubmit': $form submit
                        if ( _this.hasClass('legal-trigger') ) {
                            $form.addClass('noSubmit');
                        }

                        if ( utils.FormValidator.validForm($form) ) {

                            modules.header.newsletter.params = utils.FormValidator.getParams( $form );

                            if ( _this.hasClass('legal-trigger') ) {
                                $(document.getElementById('legal-pop')).show();
                                $('#legal-pop .scroller').tinyscrollbar();

                                $(document.getElementById('legal-submit')).off('click').on('click', function(e) {
                                    e.preventDefault();
                                    if ($(document.getElementById('legal-accept')).is(':checked') ) {
                                        modules.header.tracking.newsletter(_this);
                                        modules.header.newsletter.send();
                                    } else {
                                        $('#legal-pop .alert').html( $(this).attr('data-error') );
                                        return false;
                                    }
                                });
                            } else {
                                modules.header.tracking.newsletter(_this);
                                modules.header.newsletter.send();
                            }
                        }
                    });
                }
            },
            send: function() {
                $.ajax({
                    url: core.AjaxConfig.Newsletter.url,
                    type : core.AjaxConfig.Newsletter.method,
                    data : modules.header.newsletter.params,
                    success : function( response ) {
                        if (response.status=='ok') {
                            $(document.getElementById('legal-pop')).hide();
                            $(document.getElementById('newsletter-valid-pop')).show();
                        } else {
                            $(document.getElementById('legal-pop')).hide();
                            utils.FormValidator.errors( $('#newsletterRoll form:first'), response );
                        }
                    }
                });
            }
        },

        basket : {
            $el: null,
            scrollItems: null,
            scrollContainer: null,
            scrollPosition: 0,
            scrollPositionArray: [],
            basketTotal: 0,
            currentCartItem: 0,
            prevButton: false,
            scrollItemsHeight: 0,

            /* itemsVisible dynamic */
            // ! NOT IN CSS: .scrollContainer & .container have static max-height
            defaultItemsVisible: 3,
            itemsVisible: 0,
            double: false,

            xhrPCD: null,
            xhrCDC: null,
            timeout: null,

            pcdSuccess: false,
            cdcSuccess: false,


            init: function() {
                if ($('#cartRoll').length>0) {
                    modules.header.basket.scrollContainer = $('#cartRoll .scrollContainer');
                    modules.header.basket.$el = $('#cartRoll');
                    // LOADER
                    if (core.ie === false) {
                        var cl = new CanvasLoader('basket-loader');
                        cl.setColor('#7d7d7d'); // default is '#000000'
                        cl.setShape('spiral'); // default is 'oval'
                        cl.show();
                    }

                    // L O C A L   T E S T S
                    // - set cart CDC
                    //$.cookie( core.AjaxConfig.Cart.CDC.COOKIE, '1', {path: '/'} );
                    // - set cart PCD
                    //$.cookie( core.AjaxConfig.Cart.PCD.COOKIE, 'gdskh', {path: '/'} );
                }
            },

            /* Open basket. If followind an 'addToCart', scroll to the last product added
             * @param sku String [optional]: if set, indicates the product that has just been added
             */
            get: function( sku ) {
                clearTimeout( modules.header.basket.timer );
                // REINIT
                modules.header.basket.scrollContainer.animate( {scrollTop: 0}, 0);
                modules.header.basket.currentCartItem = 0;
                modules.header.basket.scrollPosition = 0;
                modules.header.basket.scrollPositionArray = [];
                modules.header.basket.hideScrollArrow('previous');
                modules.header.basket.basketTotal = 0;

                modules.header.basket.$el.find('.pcd').hide();
                modules.header.basket.$el.find('.cdc').show();

                // NO DEFAULTS PARAMS: minisites could use cookie too
                //$.cookie.defaults.path = '/';
                // GET CART TOTAL
                var _cdcCart = $.cookie( core.AjaxConfig.Cart.CDC.COOKIE, Number ),
                    _pcdCart = $.cookie( core.AjaxConfig.Cart.PCD.COOKIE );


                //-----------------//
                // H E   D E B U G //
                //-----------------//
                //
                // FORCE VALUE FOR IE
                // He internal fix: subdomain with '_' aren't W3C compliant:
                // -> cookies won't be set
                if (window.location.href.indexOf("happyend-prep") > -1) {
                    // if on Gamme: only PCD cart
                    if ( document.location.href.indexOf('Gamme')!=-1) {
                        _pcdCart = 'jkjbkjbk';
                    }
                    // if on Collection: only CDC cart
                    else if ( document.location.href.indexOf('Collections')!=-1) {
                        _cdcCart = 5;
                    }

                    // else: both
                    else {
                        _cdcCart = 5;
                        _pcdCart = 'jkjbkjbk';
                    }
                }

                // if no-cdc class: no CDC cart
                if (modules.header.basket.$el.hasClass('no-cdc')){
                    _cdcCart = -1;
                }
                // if no-pcd class: no PCD cart
                if (modules.header.basket.$el.hasClass('no-pcd')){
                    _pcdCart = undefined;
                }

                //-----------------//
                // H E   D E B U G //
                //-----------------//


                // CHECK IF COOKIE EXISTS
                if ( (_cdcCart > 0 || _pcdCart != undefined) && modules.header.page != 'prehome') {

                    // OPEN CART
                    modules.header.rolls.open();
                    // if sku: cart opened from QuickBuy or AddToCart: auto close timer
                    if (sku) {
                        // - use header.rolls timer
                        modules.header.rolls.timerOut = window.setTimeout(function() {
                            if (modules.header.rolls.current.attr('id')=="cartRoll") modules.header.rolls.close();
                        }, 2500);
                    }

                    // DISPLAY LOADING
                    modules.header.basket.loading(true);

                    // DOUBLE: hide advantages
                    if (_cdcCart > 0 && _pcdCart != undefined) {
                        modules.header.basket.double = true;

                        $('#cartRoll').addClass('double');
                        $('#cartRoll .cart-ecommerce').hide();
                        // only 1 cart: we display the popin (if timeout, error displayed)
                    } else {
                        modules.header.basket.double = false;
                        $('#cartRoll').removeClass('double');

                        // single: hide avantages for CDC
                        if (_cdcCart > 0) {
                            $('#cartRoll .cart-ecommerce').hide();
                        } else {
                            $('#cartRoll .cart-ecommerce').show();
                            //$('#cartRoll .container').height( 520 + $('#cartRoll .cart-ecommerce').height() );
                        }
                    }

                    // IF SINGLE CART: itemsVisible is correct
                    // IF DOUBLE: the two universe titles fill space: itemsVisible -= 1 !
                    modules.header.basket.itemsVisible = modules.header.basket.defaultItemsVisible;
                    if (modules.header.basket.double) {
                        modules.header.basket.itemsVisible = modules.header.basket.itemsVisible - 1;
                    }

                    modules.header.basket.abort( true );
                    clearTimeout( modules.header.basket.timeout );
                    //modules.header.basket.timeout = setTimeout( modules.header.basket.abort, core.AjaxConfig.Cart.TIMEOUT_DELAY );

                    modules.header.basket.pcdSuccess = modules.header.basket.cdcSuccess = false;

                    if (_pcdCart != undefined) {
                        modules.header.basket.xhrPCD = $.ajax({
                            url : core.AjaxConfig.Cart.PCD.GET_BASKET.url,
                            type: core.AjaxConfig.Cart.PCD.GET_BASKET.method,

                            success : function(data) {
                                modules.header.basket.pcdSuccess = true;
                                modules.header.basket.xhrPCD = null;
                                modules.header.basket.render( data, 'pcd', sku );
                            },
                            error: function(data) {
                                modules.header.basket.pcdSuccess = true;
                                modules.header.basket.xhrPCD = null;
                            }
                        });
                    } else {
                        modules.header.basket.$el.find('.pcd').hide();
                    }

                    if (_cdcCart > 0) {
                        modules.header.basket.xhrCDC = $.ajax({
                            url : core.AjaxConfig.Cart.CDC.GET_BASKET.url,
                            type: core.AjaxConfig.Cart.CDC.GET_BASKET.method,

                            success : function(data) {
                                modules.header.basket.cdcSuccess = true;
                                modules.header.basket.xhrCDC = null;
                                modules.header.basket.render( data, 'cdc', sku );
                            },
                            error: function(data) {
                                modules.header.basket.cdcSuccess = true;
                                modules.header.basket.xhrCDC = null;
                            }
                        });
                    } else {
                        modules.header.basket.$el.find('.cdc').hide();
                    }



                }
            },
            abort: function( noError ) {
                if (modules.header.basket.xhrPCD) modules.header.basket.xhrPCD.abort();
                if (modules.header.basket.xhrCDC) modules.header.basket.xhrCDC.abort();

                // IF NO SUCCESS - display error
                if (!noError && !modules.header.basket.cdcSuccess && !modules.header.basket.pcdSuccess) {
                    modules.header.rolls.close();
                    modules.header.error.open();
                }
            },

            render: function( json, universe, sku ) {
                modules.header.basket.$el.find('.'+universe).show();

                var _tpl = '',
                    _locaQuantity = $('#cartRoll').data('loca-quantity'),
                    i = 0, l = json.basket.items.length, nofreeCount = 0;
                for (i=0; i<l; ++i) {
                    if( !json.basket.items[i].free ) {
                        _tpl += modules.header.basket.renderItem( i, json.basket.items[i], _locaQuantity );
                        modules.header.basket.basketTotal += 1;
                        nofreeCount +=1;

                    }
                }
                modules.header.basket.$el.find('.cart-title.'+universe+' i').html( nofreeCount );
                modules.header.basket.updateTotalCount(modules.header.basket.basketTotal);

                var _items = modules.header.basket.$el.find('.cart-items.'+universe);

                _items.empty().append( _tpl );
                modules.header.basket.$el.find('.cart-submit.'+universe+' .cart-subtotal--amount').html( json.basket.articlesSubTotalWithCurrency );

                // WS DELETE ITEM
                _items.find('a.item-remove').on('click', function() {
                    var _sku = $(this).data('sku');

                    // DISPLAY LOADING
                    modules.header.basket.loading(true);

                    var UNIVERSE = universe.toUpperCase();
                    $.ajax({
                        url : core.AjaxConfig.Cart[UNIVERSE].DELETE_ITEM.url,
                        type: core.AjaxConfig.Cart[UNIVERSE].DELETE_ITEM.method,
                        data: 'sku=' + _sku,
                        success : function(data) {
                            // RELOAD
                            modules.header.basket.get();
                        },
                        error: function(data) {
                            //console.log(data);
                        }
                    });
                });

                // AVANTAGES
                if ( json.conditions ) {
                    $('#cartRoll .cart-ecommerce > p').empty().append( json.conditions );
                }

                // GET ALL SCROLL ITEMS
                // update scroll
                modules.header.basket.updateScroller();

                // product just added?
                if (sku) {
                    // MATCH TARGET WITH .scrollItem
                    modules.header.basket.$el.find('.cart-item').each( function(i) {
                        if ($(this).data('sku') == sku ) {
                            // scroll to item
                            modules.header.basket.currentCartItem = i;
                            modules.header.basket.scrollPosition = $(this).offset().top;

                            modules.header.basket.scrollContainer.animate( {scrollTop: modules.header.basket.scrollPosition}, 0);
                            return false;
                        }
                    });
                }

                modules.header.basket.updateArrows();
                modules.header.basket.loading(false);
            },

            renderItem: function( i, json, locaQuantity ) {
                return '<div class="cart-item'+(i>0 ? ' scrollItem' : '')+'" data-sku="'+json.sku+'">\
                            <div class="container">\
                                <span class="visual"><img src="'+json.packshot+'" alt="" class="cart-item--picture"></span><!--\
                                --><div class="cart-item--infos">\
                                    <span class="item-infos item-infos--title">'+json.name+'</span>\
                                    <span class="item-infos item-infos--subtitle">'+json.title+'</span>\
                                    <span class="item-infos item-infos--variant">'+json.description+'</span>\
                                    <div class="item-infos--oneLine">\
                                        <span class="item-infos item-infos--quantity">'+locaQuantity+''+ json.quantity+'</span>\
                                        <span class="item-infos item-infos--price">'+json.subTotalWithCurrency+'</span>\
                                        <a href="javascript:void(0);" class="item-infos item-remove" data-sku="'+json.sku+'"></a>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>';
            },

            scrollNext : function() {
                if ( modules.header.basket.currentCartItem == 0) {
                    modules.header.basket.scrollPositionArray[0] = 0;
                }
                if ( modules.header.basket.currentCartItem+1 < modules.header.basket.scrollItems.length ){

                    var extraOffset = $('.topbar').outerHeight(true) + parseInt($('.topbar').offset().top);
                    if ( modules.header.topLayer.isOpened){
                        extraOffset += modules.header.topLayer.current.outerHeight(true);
                    }
                    if ( modules.header.rolls.prevButton)
                        extraOffset += modules.header.rolls.current.find('.prev').outerHeight(true);

                    modules.header.basket.currentCartItem ++;
                    modules.header.basket.scrollPosition = parseInt(modules.header.basket.scrollPosition + modules.header.basket.scrollItems.eq(modules.header.basket.currentCartItem).offset().top - extraOffset);
                    modules.header.basket.scrollPositionArray[modules.header.basket.currentCartItem]= parseInt(modules.header.basket.scrollPosition);

                    modules.header.basket.scrollContainer.animate( {scrollTop: modules.header.basket.scrollPosition}, 350);

                    modules.header.basket.updateArrows();
                }
            },
            scrollPrev : function() {
                if ( modules.header.basket.currentCartItem-1 >= 0 ) {
                    modules.header.basket.currentCartItem --;
                    modules.header.basket.scrollPosition = modules.header.basket.scrollPositionArray[modules.header.basket.currentCartItem];

                    modules.header.basket.scrollContainer.animate( {scrollTop:modules.header.basket.scrollPosition }, 350);

                    modules.header.basket.updateArrows();
                }
            },
            allNextItemAreVisible: function () {
                return modules.header.basket.scrollContainer.outerHeight(true) >= modules.header.basket.scrollItemsHeight - modules.header.basket.scrollPosition  ? true : false;
            },
            allPrevItemAreVisible: function () {
                return modules.header.basket.scrollPosition > 0  ? true : false;
            },

            showScrollArrow : function ( arrow ) {

                if ( modules.header.rolls.current.find('.cart-item').length > modules.header.basket.itemsVisible ) {

                    if ( arrow === "next" ){
                        modules.header.rolls.current.find('.next').removeClass('hidden');
                    }
                    else {
                        modules.header.rolls.current.find('.prev').removeClass('hidden', function(){
                            modules.header.rolls.prevButton = true;
                        });
                    }
                }
            },
            hideScrollArrow : function ( arrow ) {
                if ( modules.header.rolls.current ) {
                    if ( arrow === "next" ){
                        modules.header.rolls.current.find('.next').addClass('hidden');
                    }
                    else {
                        modules.header.rolls.current.find('.prev').addClass('hidden', function() {
                            modules.header.rolls.prevButton = false;
                        });
                    }
                }
            },

            updateScroller: function() {
                modules.header.basket.scrollContainer.children().each(function(){
                    modules.header.basket.scrollItemsHeight += $(this).outerHeight(true);
                });
                modules.header.basket.scrollContainer.parent().find('.next,.prev').addClass('hidden');

                modules.header.basket.scrollItems = modules.header.basket.scrollContainer.find('.scrollItem');

                //modules.header.basket.showScrollArrow();
            },
            // UPDATE ARROWS VISIBILITY
            updateArrows: function() {
                //console.log('#updateArrows');
                //console.log( modules.header.basket.currentCartItem );
                //console.log( modules.header.basket.allPrevItemAreVisible() );
                //console.log( modules.header.basket.allNextItemAreVisible() );

                if (modules.header.basket.currentCartItem<1) {
                    modules.header.basket.hideScrollArrow('previous');
                } else {
                    modules.header.basket.showScrollArrow('previous');
                }

                // IF SINGLE CART: itemsVisible is correct
                // IF DOUBLE: the two universe titles fill space: itemsVisible -= 1 !
                if (modules.header.basket.scrollItems.length - modules.header.basket.currentCartItem < modules.header.basket.itemsVisible) {
                    modules.header.basket.hideScrollArrow('next');
                } else {
                    modules.header.basket.showScrollArrow('next');
                }
            },
            updateTotalCount: function( count ) {
                // Update total count
                if ($("#cart-total-preview").length>0 && count != undefined) {
                    $("#cart-total-preview").html("(" + count + ")");
                }
            },

            loading: function( bool ) {
                if (bool) {
                    // FORCE LOADING HIDE
                    // - prevent loading vertcical
                    // - not accurate (scroller real height when ajax done)
                    // $('#cartRoll .basket-loader').height( $('#cartRoll .scrollContainer').height() );
                    $('#cartRoll .basket-loader').fadeIn();
                } else {
                    $('#cartRoll .basket-loader').fadeOut();
                }
            }
        },

        search : {

            init: function() {
                var $li      = $('#searchRoll li'),
                    l        = $li.length;

                if (l>0) {
                    var _top = $($li[0]).position().top;

                    $('#searchRoll li:first').append('<span class="hr">-</span>');

                    for( var i = 1; i < l; ++i ) {

                        var $current = $($li[i]);

                        // IF NEW LINE
                        if( $current.position().top > _top ) {
                            // FORCE NEW LINE
                            $current.addClass('new-line').append('<span class="hr">-</span>');
                            // REMOVE '-' AT THE END OF THE CURRENT LINE
                            $( $li[i-1] ).find('.hr').remove();
                            _top = $current.offset().top;
                        } else {
                            // ADD '-', AND CHECK FOR NEW LINE
                            $current.append('<span class="hr">-</span>');
                            if( $current.offset().top > _top ) {
                                $current.find('.hr').remove();
                                // FORCE NEW LINE ON NEXT ITEM
                                $( $li[i+1] ).addClass('new-line').append('<span class="hr">-</span>');
                                _top = $( $li[i+1] ).offset().top;
                                // - skip next item
                                ++i;
                            }
                        }
                    }
                    $('#searchRoll li:last').find('.hr').remove();
                }
            }

        },

        error : {

            timer: null,

            open: function() {

                $('#errorRoll').slideDown();
                $('#errorRoll p').css({ 'margin-top': ( - $('#errorRoll').height() - $('#errorRoll p').height()) * 0.5 });

                modules.header.error.timer = window.setTimeout(function() {
                    clearTimeout(modules.header.error.timer);
                    modules.header.error.close();
                }, 4000);
            },

            close: function() {
                $('#errorRoll').slideUp();
            }
        },

        tracking : {
            init: function() {
                /* Advantages */
                $('.js-header').on('click', '.advantages', function(){
                    var _this = $(this);
                    core.trackEvent('Header', 'Avantages Eco' );
                });

                /* MetaNav */
                $('.js-header').on('click', '.univers-content ul a', function(){
                    var _this = $(this),
                        section = _this.parents('.col').find('h4').text(),
                        label = _this.data('track-event-label');

                    if (label == "") label = 'Undefined';

                    core.trackEvent('Header - MetaNav', section + ' - ' + label);
                });

                /* Account */
                $('.js-header').on('click', '.js-create', function(){
                    modules.header.tracking.account($(this));
                });

                /* Cart */
                $('.js-header').on('click', '.js-cart-command--button', function(){
                    var _this = $(this),
                        label = _this.data('track-label');

                    if (label == "") label = 'Undefined';

                    core.trackEvent('Header', 'RollPanier - ' + label);
                });

                /* Search */
                $('.js-header').on('click', '.search-roll ul li a', function(){
                    var _this = $(this),
                        label = _this.data('track-label');

                    if (label == "") label = 'Undefined';

                    core.trackEvent('Header', 'Recherche - ' + label);
                });

                /* TopMenu */
                $('.js-header').on('click', '.header-top-menu a', function(){
                    var _this = $(this),
                        section = (_this.parents('.column').length > 0) ? _this.parents('.column').find('h4').text() : _this.parents('.insert').find('h4').text(),
                        label = _this.data('track-label');

                    if (label == "") label = 'Undefined';

                    core.trackEvent('TopMenu', section+' - ' + label );
                });
            },
            newsletter: function (submitBtn) {
                var label = 'Newsletter - ';
                var universe = []
                submitBtn.parents('.newsletter-roll').find(".universe :checkbox:checked").each(function(){
                    if ( $.inArray($(this).data('track-label'), universe) < 0 ){
                        universe.push( $(this).data('track-label') );
                    }
                });
                label = label + universe.join(' + ');
                core.trackEvent('Header',label );
            },
            account: function( submitBtn ) {
                core.trackEvent('Header', 'VotreCompte - ' +submitBtn.data('track-label') );
            }
        }
    };

})( window.modules = window.modules || {} );
