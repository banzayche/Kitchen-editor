//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map;
(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define('backbone',["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone-min.map;
/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */

define('text',['module'], function (module) {
    'use strict';

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.14',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.lastIndexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config && config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config && config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'] &&
            !process.versions['atom-shell'])) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file[0] === '\uFEFF') {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                if (errback) {
                    errback(e);
                }
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status || 0;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        if (errback) {
                            errback(err);
                        }
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes;
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                           .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                                .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});


define('text!js/templates/kitchen_main.html',[],function () { return '<h2 class="text-center">ВЫБОР КАРТИНКИ И КАЛЬКУЛЯЦИЯ ФАРТУКА</h2>\r\n<div id=\'canvas-kitchen\' class="<%=position%> <%=rotate%>">\r\n\t<!-- if it\'s lateral panel - it cans rotate -->\r\n\t<%if(can_rotate === true){%>\r\n\t\t<div class="rotate_bg"></div>\r\n\t\t<div class="rotate text-center"><i></i><br><span class="text-on-button">Посмотреть эту сторону</span></div>\r\n\t<%}%>\r\n\t<!-- /end -->\r\n\t<div class="kitchen-panel" style="background: url(<%=kitcehn_bg%>);"></div>\r\n\r\n\t<div id="parent-draggable">\r\n\t\t<div id="draggable" class="movement" style="top:-43px; left:-89px;"></div>\r\n\t</div>\r\n\t<div class="k_wall">\r\n\t\t<div id="crop-area">\r\n\t\t\t<style>\r\n\t\t\t\t#parent-draggable>#draggable.movement{\r\n\t\t\t\t\ttransform: scale(<%= scale %>) !important;\r\n\t\t\t\t\t-webkit-transform: scale(<%= scale %>) !important;\r\n\t\t\t\t\t-moz-transform: scale(<%= scale %>) !important;\r\n\t\t\t\t\t-ms-transform: scale(<%= scale %>) !important;\r\n\t\t\t\t\tdisplay:block;\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t}\r\n\t\t\t\t#main-poster{\r\n\t\t\t\t\ttransform: scale(<%= scale %>) !important;\r\n\t\t\t\t\t-webkit-transform: scale(<%= scale %>) !important;\r\n\t\t\t\t\t-moz-transform: scale(<%= scale %>) !important;\r\n\t\t\t\t\t-ms-transform: scale(<%= scale %>) !important;\r\n\t\t\t\t\tdisplay:block;\r\n\t\t\t\t\tposition: absolute;\t\t\t\t\t\t\r\n\t\t/*\t\t\ttop: <%= top_place %>px !important;\r\n\t\t\t\t\tleft: <%= left_place %>px !important;\r\n\t\t\t\t\t<%if(top_place === 0){%>\r\n\t\t\t\t\ttop: -2px !important;\r\n\t\t\t\t\tleft: -2px !important;\r\n\t\t\t\t\t<%}%>*/\r\n\t\t\t\t}\r\n\t\t\t\t<%if(scale_mirrow === true){%>\r\n\t\t\t\t\t#crop-area>#main-poster{\r\n\t\t\t\t\t\ttransform: scale(-1, 1)!important;\r\n\t\t\t\t\t\t-webkit-transform: scale(-1, 1)!important;\r\n\t\t\t\t\t\t-moz-transform: scale(-1, 1)!important;\r\n\t\t\t\t\t\t-ms-transform: scale(-1, 1)!important;\r\n\t\t\t\t\t}\t\t\t\t\t\r\n\t\t\t\t<%}%>\r\n\t\t\t</style>\r\n\t\t\t<img id="main-poster" class="movement" style="top:-10px; left:-10px;" src="<%=poster%>">\t\t\r\n\t\t</div>\t\t\r\n\t</div>\r\n</div>\r\n<div id=\'control-panel\' class="pull-right col-sm-3 col-md-3 col-xs-3">\r\n\t<div class="position-panel col-sm-12 col-md-12 col-xs-12">\r\n\t\t<h4 class="text-center">Тип кухни</h4>\r\n\t\t<div class="without-style">\r\n\t\t\t<button class="position-button <%if(position === \'l_position\'){%>active<%}%>" id="position-left"></button>\r\n\t\t\t<button class="position-button <%if(position === \'c_position\'){%>active<%}%>" id="position-center"></button>\r\n\t\t\t<button class="position-button <%if(position === \'r_position\'){%>active<%}%>" id="position-right"></button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="color-panel col-sm-12 col-md-12 col-xs-12">\r\n\t\t<h4 class="text-center">Цвет кухни</h4>\r\n\t\t<div class="into-style">\r\n\t\t\t<div class="color-button <%if(current_color_of_panel === \'color1\'){%>active<%}%>" id="color1"></div>\r\n\t\t\t<div class="color-button <%if(current_color_of_panel === \'color2\'){%>active<%}%>" id="color2"></div>\r\n\t\t\t<div class="color-button <%if(current_color_of_panel === \'color3\'){%>active<%}%>" id="color3"></div>\r\n\t\t\t<div class="color-button <%if(current_color_of_panel === \'color4\'){%>active<%}%>" id="color4"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="getimg-panel col-sm-12 col-md-12 col-xs-12">\r\n\t\t<button class="spec-button text-on-button" id="choose_img_button"><span class="glyphicon glyphicon-picture"></span>&nbsp;&nbsp;&nbsp;Выбери фото</button>\r\n\t</div>\r\n\t<div class="scale-panel col-sm-12 col-md-12 col-xs-12">\r\n\t\t<button class="scale-button spec-button" id="minus">-</button>\r\n\t\t<button class="scale-button spec-button" id="plus">+</button>\r\n\t</div>\r\n\t<div class="mirrow-panel col-sm-12 col-md-12 col-xs-12">\r\n\t\t<button class="mirrow-button spec-button text-on-button"><span class="glyphicon glyphicon-picture"></span>&nbsp;&nbsp;&nbsp;Повернуть фото</button>\r\n\t</div>\r\n</div>';});

// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v2.4.4
//
// Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */


(function(e,t){if("function"==typeof define&&define.amd)define('backbonemarionette',["backbone","underscore"],function(i,n){return e.Marionette=e.Mn=t(e,i,n)});else if("undefined"!=typeof exports){var i=require("backbone"),n=require("underscore");module.exports=t(e,i,n)}else e.Marionette=e.Mn=t(e,e.Backbone,e._)})(this,function(e,t,i){"use strict";(function(e,t){var i=e.ChildViewContainer;return e.ChildViewContainer=function(e,t){var i=function(e){this._views={},this._indexByModel={},this._indexByCustom={},this._updateLength(),t.each(e,this.add,this)};t.extend(i.prototype,{add:function(e,t){var i=e.cid;return this._views[i]=e,e.model&&(this._indexByModel[e.model.cid]=i),t&&(this._indexByCustom[t]=i),this._updateLength(),this},findByModel:function(e){return this.findByModelCid(e.cid)},findByModelCid:function(e){var t=this._indexByModel[e];return this.findByCid(t)},findByCustom:function(e){var t=this._indexByCustom[e];return this.findByCid(t)},findByIndex:function(e){return t.values(this._views)[e]},findByCid:function(e){return this._views[e]},remove:function(e){var i=e.cid;return e.model&&delete this._indexByModel[e.model.cid],t.any(this._indexByCustom,function(e,t){return e===i?(delete this._indexByCustom[t],!0):void 0},this),delete this._views[i],this._updateLength(),this},call:function(e){this.apply(e,t.tail(arguments))},apply:function(e,i){t.each(this._views,function(n){t.isFunction(n[e])&&n[e].apply(n,i||[])})},_updateLength:function(){this.length=t.size(this._views)}});var n=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck","reduce"];return t.each(n,function(e){i.prototype[e]=function(){var i=t.values(this._views),n=[i].concat(t.toArray(arguments));return t[e].apply(t,n)}}),i}(e,t),e.ChildViewContainer.VERSION="0.1.10",e.ChildViewContainer.noConflict=function(){return e.ChildViewContainer=i,this},e.ChildViewContainer})(t,i),function(e,t){var i=e.Wreqr,n=e.Wreqr={};return e.Wreqr.VERSION="1.3.5",e.Wreqr.noConflict=function(){return e.Wreqr=i,this},n.Handlers=function(e,t){var i=function(e){this.options=e,this._wreqrHandlers={},t.isFunction(this.initialize)&&this.initialize(e)};return i.extend=e.Model.extend,t.extend(i.prototype,e.Events,{setHandlers:function(e){t.each(e,function(e,i){var n=null;t.isObject(e)&&!t.isFunction(e)&&(n=e.context,e=e.callback),this.setHandler(i,e,n)},this)},setHandler:function(e,t,i){var n={callback:t,context:i};this._wreqrHandlers[e]=n,this.trigger("handler:add",e,t,i)},hasHandler:function(e){return!!this._wreqrHandlers[e]},getHandler:function(e){var t=this._wreqrHandlers[e];if(t)return function(){return t.callback.apply(t.context,arguments)}},removeHandler:function(e){delete this._wreqrHandlers[e]},removeAllHandlers:function(){this._wreqrHandlers={}}}),i}(e,t),n.CommandStorage=function(){var i=function(e){this.options=e,this._commands={},t.isFunction(this.initialize)&&this.initialize(e)};return t.extend(i.prototype,e.Events,{getCommands:function(e){var t=this._commands[e];return t||(t={command:e,instances:[]},this._commands[e]=t),t},addCommand:function(e,t){var i=this.getCommands(e);i.instances.push(t)},clearCommands:function(e){var t=this.getCommands(e);t.instances=[]}}),i}(),n.Commands=function(e,t){return e.Handlers.extend({storageType:e.CommandStorage,constructor:function(t){this.options=t||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this),e.Handlers.prototype.constructor.apply(this,arguments)},execute:function(e){e=arguments[0];var i=t.rest(arguments);this.hasHandler(e)?this.getHandler(e).apply(this,i):this.storage.addCommand(e,i)},_executeCommands:function(e,i,n){var r=this.storage.getCommands(e);t.each(r.instances,function(e){i.apply(n,e)}),this.storage.clearCommands(e)},_initializeStorage:function(e){var i,n=e.storageType||this.storageType;i=t.isFunction(n)?new n:n,this.storage=i}})}(n,t),n.RequestResponse=function(e,t){return e.Handlers.extend({request:function(e){return this.hasHandler(e)?this.getHandler(e).apply(this,t.rest(arguments)):void 0}})}(n,t),n.EventAggregator=function(e,t){var i=function(){};return i.extend=e.Model.extend,t.extend(i.prototype,e.Events),i}(e,t),n.Channel=function(){var i=function(t){this.vent=new e.Wreqr.EventAggregator,this.reqres=new e.Wreqr.RequestResponse,this.commands=new e.Wreqr.Commands,this.channelName=t};return t.extend(i.prototype,{reset:function(){return this.vent.off(),this.vent.stopListening(),this.reqres.removeAllHandlers(),this.commands.removeAllHandlers(),this},connectEvents:function(e,t){return this._connect("vent",e,t),this},connectCommands:function(e,t){return this._connect("commands",e,t),this},connectRequests:function(e,t){return this._connect("reqres",e,t),this},_connect:function(e,i,n){if(i){n=n||this;var r="vent"===e?"on":"setHandler";t.each(i,function(i,s){this[e][r](s,t.bind(i,n))},this)}}}),i}(n),n.radio=function(e,t){var i=function(){this._channels={},this.vent={},this.commands={},this.reqres={},this._proxyMethods()};t.extend(i.prototype,{channel:function(e){if(!e)throw Error("Channel must receive a name");return this._getChannel(e)},_getChannel:function(t){var i=this._channels[t];return i||(i=new e.Channel(t),this._channels[t]=i),i},_proxyMethods:function(){t.each(["vent","commands","reqres"],function(e){t.each(n[e],function(t){this[e][t]=r(this,e,t)},this)},this)}});var n={vent:["on","off","trigger","once","stopListening","listenTo","listenToOnce"],commands:["execute","setHandler","setHandlers","removeHandler","removeAllHandlers"],reqres:["request","setHandler","setHandlers","removeHandler","removeAllHandlers"]},r=function(e,i,n){return function(r){var s=e._getChannel(r)[i];return s[n].apply(s,t.rest(arguments))}};return new i}(n,t),e.Wreqr}(t,i);var n=e.Marionette,r=e.Mn,s=t.Marionette={};s.VERSION="2.4.4",s.noConflict=function(){return e.Marionette=n,e.Mn=r,this},t.Marionette=s,s.Deferred=t.$.Deferred,s.extend=t.Model.extend,s.isNodeAttached=function(e){return t.$.contains(document.documentElement,e)},s.mergeOptions=function(e,t){e&&i.extend(this,i.pick(e,t))},s.getOption=function(e,t){return e&&t?e.options&&void 0!==e.options[t]?e.options[t]:e[t]:void 0},s.proxyGetOption=function(e){return s.getOption(this,e)},s._getValue=function(e,t,n){return i.isFunction(e)&&(e=n?e.apply(t,n):e.call(t)),e},s.normalizeMethods=function(e){return i.reduce(e,function(e,t,n){return i.isFunction(t)||(t=this[t]),t&&(e[n]=t),e},{},this)},s.normalizeUIString=function(e,t){return e.replace(/@ui\.[a-zA-Z_$0-9]*/g,function(e){return t[e.slice(4)]})},s.normalizeUIKeys=function(e,t){return i.reduce(e,function(e,i,n){var r=s.normalizeUIString(n,t);return e[r]=i,e},{})},s.normalizeUIValues=function(e,t,n){return i.each(e,function(r,o){i.isString(r)?e[o]=s.normalizeUIString(r,t):i.isObject(r)&&i.isArray(n)&&(i.extend(r,s.normalizeUIValues(i.pick(r,n),t)),i.each(n,function(e){var n=r[e];i.isString(n)&&(r[e]=s.normalizeUIString(n,t))}))}),e},s.actAsCollection=function(e,t){var n=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];i.each(n,function(n){e[n]=function(){var e=i.values(i.result(this,t)),r=[e].concat(i.toArray(arguments));return i[n].apply(i,r)}})};var o=s.deprecate=function(e,t){i.isObject(e)&&(e=e.prev+" is going to be removed in the future. "+"Please use "+e.next+" instead."+(e.url?" See: "+e.url:"")),void 0!==t&&t||o._cache[e]||(o._warn("Deprecation warning: "+e),o._cache[e]=!0)};o._warn="undefined"!=typeof console&&(console.warn||console.log)||function(){},o._cache={},s._triggerMethod=function(){function e(e,t,i){return i.toUpperCase()}var t=/(^|:)(\w)/gi;return function(n,r,s){var o=3>arguments.length;o&&(s=r,r=s[0]);var h,a="on"+r.replace(t,e),d=n[a];return i.isFunction(d)&&(h=d.apply(n,o?i.rest(s):s)),i.isFunction(n.trigger)&&(o+s.length>1?n.trigger.apply(n,o?s:[r].concat(i.drop(s,0))):n.trigger(r)),h}}(),s.triggerMethod=function(){return s._triggerMethod(this,arguments)},s.triggerMethodOn=function(e){var t=i.isFunction(e.triggerMethod)?e.triggerMethod:s.triggerMethod;return t.apply(e,i.rest(arguments))},s.MonitorDOMRefresh=function(e){function t(){e._isShown=!0,n()}function i(){e._isRendered=!0,n()}function n(){e._isShown&&e._isRendered&&s.isNodeAttached(e.el)&&s.triggerMethodOn(e,"dom:refresh",e)}e._isDomRefreshMonitored||(e._isDomRefreshMonitored=!0,e.on({show:t,render:i}))},function(e){function t(t,n,r,s){var o=s.split(/\s+/);i.each(o,function(i){var s=t[i];if(!s)throw new e.Error('Method "'+i+'" was configured as an event handler, but does not exist.');t.listenTo(n,r,s)})}function n(e,t,i,n){e.listenTo(t,i,n)}function r(e,t,n,r){var s=r.split(/\s+/);i.each(s,function(i){var r=e[i];e.stopListening(t,n,r)})}function s(e,t,i,n){e.stopListening(t,i,n)}function o(t,n,r,s,o){if(n&&r){if(!i.isObject(r))throw new e.Error({message:"Bindings must be an object or function.",url:"marionette.functions.html#marionettebindentityevents"});r=e._getValue(r,t),i.each(r,function(e,r){i.isFunction(e)?s(t,n,r,e):o(t,n,r,e)})}}e.bindEntityEvents=function(e,i,r){o(e,i,r,n,t)},e.unbindEntityEvents=function(e,t,i){o(e,t,i,s,r)},e.proxyBindEntityEvents=function(t,i){return e.bindEntityEvents(this,t,i)},e.proxyUnbindEntityEvents=function(t,i){return e.unbindEntityEvents(this,t,i)}}(s);var h=["description","fileName","lineNumber","name","message","number"];return s.Error=s.extend.call(Error,{urlRoot:"http://marionettejs.com/docs/v"+s.VERSION+"/",constructor:function(e,t){i.isObject(e)?(t=e,e=t.message):t||(t={});var n=Error.call(this,e);i.extend(this,i.pick(n,h),i.pick(t,h)),this.captureStackTrace(),t.url&&(this.url=this.urlRoot+t.url)},captureStackTrace:function(){Error.captureStackTrace&&Error.captureStackTrace(this,s.Error)},toString:function(){return this.name+": "+this.message+(this.url?" See: "+this.url:"")}}),s.Error.extend=s.extend,s.Callbacks=function(){this._deferred=s.Deferred(),this._callbacks=[]},i.extend(s.Callbacks.prototype,{add:function(e,t){var n=i.result(this._deferred,"promise");this._callbacks.push({cb:e,ctx:t}),n.then(function(i){t&&(i.context=t),e.call(i.context,i.options)})},run:function(e,t){this._deferred.resolve({options:e,context:t})},reset:function(){var e=this._callbacks;this._deferred=s.Deferred(),this._callbacks=[],i.each(e,function(e){this.add(e.cb,e.ctx)},this)}}),s.Controller=function(e){this.options=e||{},i.isFunction(this.initialize)&&this.initialize(this.options)},s.Controller.extend=s.extend,i.extend(s.Controller.prototype,t.Events,{destroy:function(){return s._triggerMethod(this,"before:destroy",arguments),s._triggerMethod(this,"destroy",arguments),this.stopListening(),this.off(),this},triggerMethod:s.triggerMethod,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption}),s.Object=function(e){this.options=i.extend({},i.result(this,"options"),e),this.initialize.apply(this,arguments)},s.Object.extend=s.extend,i.extend(s.Object.prototype,t.Events,{initialize:function(){},destroy:function(e){return e=e||{},this.triggerMethod("before:destroy",e),this.triggerMethod("destroy",e),this.stopListening(),this},triggerMethod:s.triggerMethod,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.Region=s.Object.extend({constructor:function(e){if(this.options=e||{},this.el=this.getOption("el"),this.el=this.el instanceof t.$?this.el[0]:this.el,!this.el)throw new s.Error({name:"NoElError",message:'An "el" must be specified for a region.'});this.$el=this.getEl(this.el),s.Object.call(this,e)},show:function(e,t){if(this._ensureElement()){this._ensureViewIsIntact(e),s.MonitorDOMRefresh(e);var n=t||{},r=e!==this.currentView,o=!!n.preventDestroy,h=!!n.forceShow,a=!!this.currentView,d=r&&!o,l=r||h;if(a&&this.triggerMethod("before:swapOut",this.currentView,this,t),this.currentView&&delete this.currentView._parent,d?this.empty():a&&l&&this.currentView.off("destroy",this.empty,this),l){e.once("destroy",this.empty,this),e._parent=this,this._renderView(e),a&&this.triggerMethod("before:swap",e,this,t),this.triggerMethod("before:show",e,this,t),s.triggerMethodOn(e,"before:show",e,this,t),a&&this.triggerMethod("swapOut",this.currentView,this,t);var c=s.isNodeAttached(this.el),u=[],g=i.extend({triggerBeforeAttach:this.triggerBeforeAttach,triggerAttach:this.triggerAttach},n);return c&&g.triggerBeforeAttach&&(u=this._displayedViews(e),this._triggerAttach(u,"before:")),this.attachHtml(e),this.currentView=e,c&&g.triggerAttach&&(u=this._displayedViews(e),this._triggerAttach(u)),a&&this.triggerMethod("swap",e,this,t),this.triggerMethod("show",e,this,t),s.triggerMethodOn(e,"show",e,this,t),this}return this}},triggerBeforeAttach:!0,triggerAttach:!0,_triggerAttach:function(e,t){var n=(t||"")+"attach";i.each(e,function(e){s.triggerMethodOn(e,n,e,this)},this)},_displayedViews:function(e){return i.union([e],i.result(e,"_getNestedViews")||[])},_renderView:function(e){e.supportsRenderLifecycle||s.triggerMethodOn(e,"before:render",e),e.render(),e.supportsRenderLifecycle||s.triggerMethodOn(e,"render",e)},_ensureElement:function(){if(i.isObject(this.el)||(this.$el=this.getEl(this.el),this.el=this.$el[0]),!this.$el||0===this.$el.length){if(this.getOption("allowMissingEl"))return!1;throw new s.Error('An "el" '+this.$el.selector+" must exist in DOM")}return!0},_ensureViewIsIntact:function(e){if(!e)throw new s.Error({name:"ViewNotValid",message:"The view passed is undefined and therefore invalid. You must pass a view instance to show."});if(e.isDestroyed)throw new s.Error({name:"ViewDestroyedError",message:'View (cid: "'+e.cid+'") has already been destroyed and cannot be used.'})},getEl:function(e){return t.$(e,s._getValue(this.options.parentEl,this))},attachHtml:function(e){this.$el.contents().detach(),this.el.appendChild(e.el)},empty:function(e){var t=this.currentView,i=e||{},n=!!i.preventDestroy;return t?(t.off("destroy",this.empty,this),this.triggerMethod("before:empty",t),n||this._destroyView(),this.triggerMethod("empty",t),delete this.currentView,n&&this.$el.contents().detach(),this):this},_destroyView:function(){var e=this.currentView;e.isDestroyed||(e.supportsDestroyLifecycle||s.triggerMethodOn(e,"before:destroy",e),e.destroy?e.destroy():(e.remove(),e.isDestroyed=!0),e.supportsDestroyLifecycle||s.triggerMethodOn(e,"destroy",e))},attachView:function(e){return this.currentView&&delete this.currentView._parent,e._parent=this,this.currentView=e,this},hasView:function(){return!!this.currentView},reset:function(){return this.empty(),this.$el&&(this.el=this.$el.selector),delete this.$el,this}},{buildRegion:function(e,t){if(i.isString(e))return this._buildRegionFromSelector(e,t);if(e.selector||e.el||e.regionClass)return this._buildRegionFromObject(e,t);if(i.isFunction(e))return this._buildRegionFromRegionClass(e);throw new s.Error({message:"Improper region configuration type.",url:"marionette.region.html#region-configuration-types"})},_buildRegionFromSelector:function(e,t){return new t({el:e})},_buildRegionFromObject:function(e,t){var n=e.regionClass||t,r=i.omit(e,"selector","regionClass");return e.selector&&!r.el&&(r.el=e.selector),new n(r)},_buildRegionFromRegionClass:function(e){return new e}}),s.RegionManager=s.Controller.extend({constructor:function(e){this._regions={},this.length=0,s.Controller.call(this,e),this.addRegions(this.getOption("regions"))},addRegions:function(e,t){return e=s._getValue(e,this,arguments),i.reduce(e,function(e,n,r){return i.isString(n)&&(n={selector:n}),n.selector&&(n=i.defaults({},n,t)),e[r]=this.addRegion(r,n),e},{},this)},addRegion:function(e,t){var i;return i=t instanceof s.Region?t:s.Region.buildRegion(t,s.Region),this.triggerMethod("before:add:region",e,i),i._parent=this,this._store(e,i),this.triggerMethod("add:region",e,i),i},get:function(e){return this._regions[e]},getRegions:function(){return i.clone(this._regions)},removeRegion:function(e){var t=this._regions[e];return this._remove(e,t),t},removeRegions:function(){var e=this.getRegions();return i.each(this._regions,function(e,t){this._remove(t,e)},this),e},emptyRegions:function(){var e=this.getRegions();return i.invoke(e,"empty"),e},destroy:function(){return this.removeRegions(),s.Controller.prototype.destroy.apply(this,arguments)},_store:function(e,t){this._regions[e]||this.length++,this._regions[e]=t},_remove:function(e,t){this.triggerMethod("before:remove:region",e,t),t.empty(),t.stopListening(),delete t._parent,delete this._regions[e],this.length--,this.triggerMethod("remove:region",e,t)}}),s.actAsCollection(s.RegionManager.prototype,"_regions"),s.TemplateCache=function(e){this.templateId=e},i.extend(s.TemplateCache,{templateCaches:{},get:function(e,t){var i=this.templateCaches[e];return i||(i=new s.TemplateCache(e),this.templateCaches[e]=i),i.load(t)},clear:function(){var e,t=i.toArray(arguments),n=t.length;if(n>0)for(e=0;n>e;e++)delete this.templateCaches[t[e]];else this.templateCaches={}}}),i.extend(s.TemplateCache.prototype,{load:function(e){if(this.compiledTemplate)return this.compiledTemplate;var t=this.loadTemplate(this.templateId,e);return this.compiledTemplate=this.compileTemplate(t,e),this.compiledTemplate},loadTemplate:function(e){var i=t.$(e);if(!i.length)throw new s.Error({name:"NoTemplateError",message:'Could not find template: "'+e+'"'});return i.html()},compileTemplate:function(e,t){return i.template(e,t)}}),s.Renderer={render:function(e,t){if(!e)throw new s.Error({name:"TemplateNotFoundError",message:"Cannot render the template since its false, null or undefined."});var n=i.isFunction(e)?e:s.TemplateCache.get(e);return n(t)}},s.View=t.View.extend({isDestroyed:!1,supportsRenderLifecycle:!0,supportsDestroyLifecycle:!0,constructor:function(e){this.render=i.bind(this.render,this),e=s._getValue(e,this),this.options=i.extend({},i.result(this,"options"),e),this._behaviors=s.Behaviors(this),t.View.call(this,this.options),s.MonitorDOMRefresh(this)},getTemplate:function(){return this.getOption("template")},serializeModel:function(e){return e.toJSON.apply(e,i.rest(arguments))},mixinTemplateHelpers:function(e){e=e||{};var t=this.getOption("templateHelpers");return t=s._getValue(t,this),i.extend(e,t)},normalizeUIKeys:function(e){var t=i.result(this,"_uiBindings");return s.normalizeUIKeys(e,t||i.result(this,"ui"))},normalizeUIValues:function(e,t){var n=i.result(this,"ui"),r=i.result(this,"_uiBindings");return s.normalizeUIValues(e,r||n,t)},configureTriggers:function(){if(this.triggers){var e=this.normalizeUIKeys(i.result(this,"triggers"));return i.reduce(e,function(e,t,i){return e[i]=this._buildViewTrigger(t),e},{},this)}},delegateEvents:function(e){return this._delegateDOMEvents(e),this.bindEntityEvents(this.model,this.getOption("modelEvents")),this.bindEntityEvents(this.collection,this.getOption("collectionEvents")),i.each(this._behaviors,function(e){e.bindEntityEvents(this.model,e.getOption("modelEvents")),e.bindEntityEvents(this.collection,e.getOption("collectionEvents"))},this),this},_delegateDOMEvents:function(e){var n=s._getValue(e||this.events,this);n=this.normalizeUIKeys(n),i.isUndefined(e)&&(this.events=n);var r={},o=i.result(this,"behaviorEvents")||{},h=this.configureTriggers(),a=i.result(this,"behaviorTriggers")||{};i.extend(r,o,n,h,a),t.View.prototype.delegateEvents.call(this,r)},undelegateEvents:function(){return t.View.prototype.undelegateEvents.apply(this,arguments),this.unbindEntityEvents(this.model,this.getOption("modelEvents")),this.unbindEntityEvents(this.collection,this.getOption("collectionEvents")),i.each(this._behaviors,function(e){e.unbindEntityEvents(this.model,e.getOption("modelEvents")),e.unbindEntityEvents(this.collection,e.getOption("collectionEvents"))},this),this},_ensureViewIsIntact:function(){if(this.isDestroyed)throw new s.Error({name:"ViewDestroyedError",message:'View (cid: "'+this.cid+'") has already been destroyed and cannot be used.'})},destroy:function(){if(this.isDestroyed)return this;var e=i.toArray(arguments);return this.triggerMethod.apply(this,["before:destroy"].concat(e)),this.isDestroyed=!0,this.triggerMethod.apply(this,["destroy"].concat(e)),this.unbindUIElements(),this.isRendered=!1,this.remove(),i.invoke(this._behaviors,"destroy",e),this},bindUIElements:function(){this._bindUIElements(),i.invoke(this._behaviors,this._bindUIElements)},_bindUIElements:function(){if(this.ui){this._uiBindings||(this._uiBindings=this.ui);var e=i.result(this,"_uiBindings");this.ui={},i.each(e,function(e,t){this.ui[t]=this.$(e)},this)}},unbindUIElements:function(){this._unbindUIElements(),i.invoke(this._behaviors,this._unbindUIElements)},_unbindUIElements:function(){this.ui&&this._uiBindings&&(i.each(this.ui,function(e,t){delete this.ui[t]},this),this.ui=this._uiBindings,delete this._uiBindings)},_buildViewTrigger:function(e){var t=i.defaults({},e,{preventDefault:!0,stopPropagation:!0}),n=i.isObject(e)?t.event:e;return function(e){e&&(e.preventDefault&&t.preventDefault&&e.preventDefault(),e.stopPropagation&&t.stopPropagation&&e.stopPropagation());var i={view:this,model:this.model,collection:this.collection};this.triggerMethod(n,i)}},setElement:function(){var e=t.View.prototype.setElement.apply(this,arguments);return i.invoke(this._behaviors,"proxyViewProperties",this),e},triggerMethod:function(){var e=s._triggerMethod(this,arguments);return this._triggerEventOnBehaviors(arguments),this._triggerEventOnParentLayout(arguments[0],i.rest(arguments)),e},_triggerEventOnBehaviors:function(e){for(var t=s._triggerMethod,i=this._behaviors,n=0,r=i&&i.length;r>n;n++)t(i[n],e)},_triggerEventOnParentLayout:function(e,t){var n=this._parentLayoutView();if(n){var r=s.getOption(n,"childViewEventPrefix"),o=r+":"+e,h=[this].concat(t);s._triggerMethod(n,o,h);var a=s.getOption(n,"childEvents");a=s._getValue(a,n);var d=n.normalizeMethods(a);d&&i.isFunction(d[e])&&d[e].apply(n,h)}},_getImmediateChildren:function(){return[]},_getNestedViews:function(){var e=this._getImmediateChildren();return e.length?i.reduce(e,function(e,t){return t._getNestedViews?e.concat(t._getNestedViews()):e},e):e},_parentLayoutView:function(){for(var e=this._parent;e;){if(e instanceof s.LayoutView)return e;e=e._parent}},normalizeMethods:s.normalizeMethods,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.ItemView=s.View.extend({constructor:function(){s.View.apply(this,arguments)},serializeData:function(){if(!this.model&&!this.collection)return{};var e=[this.model||this.collection];return arguments.length&&e.push.apply(e,arguments),this.model?this.serializeModel.apply(this,e):{items:this.serializeCollection.apply(this,e)}},serializeCollection:function(e){return e.toJSON.apply(e,i.rest(arguments))},render:function(){return this._ensureViewIsIntact(),this.triggerMethod("before:render",this),this._renderTemplate(),this.isRendered=!0,this.bindUIElements(),this.triggerMethod("render",this),this},_renderTemplate:function(){var e=this.getTemplate();if(e!==!1){if(!e)throw new s.Error({name:"UndefinedTemplateError",message:"Cannot render the template since it is null or undefined."});var t=this.mixinTemplateHelpers(this.serializeData()),i=s.Renderer.render(e,t,this);return this.attachElContent(i),this}},attachElContent:function(e){return this.$el.html(e),this}}),s.CollectionView=s.View.extend({childViewEventPrefix:"childview",sort:!0,constructor:function(){this.once("render",this._initialEvents),this._initChildViewStorage(),s.View.apply(this,arguments),this.on({"before:show":this._onBeforeShowCalled,show:this._onShowCalled,"before:attach":this._onBeforeAttachCalled,attach:this._onAttachCalled}),this.initRenderBuffer()},initRenderBuffer:function(){this._bufferedChildren=[]},startBuffering:function(){this.initRenderBuffer(),this.isBuffering=!0},endBuffering:function(){var e,t=this._isShown&&s.isNodeAttached(this.el);this.isBuffering=!1,this._isShown&&this._triggerMethodMany(this._bufferedChildren,this,"before:show"),t&&this._triggerBeforeAttach&&(e=this._getNestedViews(),this._triggerMethodMany(e,this,"before:attach")),this.attachBuffer(this,this._createBuffer()),t&&this._triggerAttach&&(e=this._getNestedViews(),this._triggerMethodMany(e,this,"attach")),this._isShown&&this._triggerMethodMany(this._bufferedChildren,this,"show"),this.initRenderBuffer()},_triggerMethodMany:function(e,t,n){var r=i.drop(arguments,3);i.each(e,function(e){s.triggerMethodOn.apply(e,[e,n,e,t].concat(r))})},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this.render),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},_onCollectionAdd:function(e,t,n){var r=void 0!==n.at&&(n.index||t.indexOf(e));if((this.getOption("filter")||r===!1)&&(r=i.indexOf(this._filteredSortedModels(r),e)),this._shouldAddChild(e,r)){this.destroyEmptyView();var s=this.getChildView(e);this.addChild(e,s,r)}},_onCollectionRemove:function(e){var t=this.children.findByModel(e);this.removeChildView(t),this.checkEmpty()},_onBeforeShowCalled:function(){this._triggerBeforeAttach=this._triggerAttach=!1,this.children.each(function(e){s.triggerMethodOn(e,"before:show",e)})},_onShowCalled:function(){this.children.each(function(e){s.triggerMethodOn(e,"show",e)})},_onBeforeAttachCalled:function(){this._triggerBeforeAttach=!0},_onAttachCalled:function(){this._triggerAttach=!0},render:function(){return this._ensureViewIsIntact(),this.triggerMethod("before:render",this),this._renderChildren(),this.isRendered=!0,this.triggerMethod("render",this),this},reorder:function(){var e=this.children,t=this._filteredSortedModels(),n=i.some(t,function(t){return!e.findByModel(t)});if(n)this.render();else{var r=i.map(t,function(t,i){var n=e.findByModel(t);return n._index=i,n.el}),s=e.filter(function(e){return!i.contains(r,e.el)});this.triggerMethod("before:reorder"),this._appendReorderedChildren(r),i.each(s,this.removeChildView,this),this.checkEmpty(),this.triggerMethod("reorder")}},resortView:function(){s.getOption(this,"reorderOnSort")?this.reorder():this.render()},_sortViews:function(){var e=this._filteredSortedModels(),t=i.find(e,function(e,t){var i=this.children.findByModel(e);return!i||i._index!==t},this);t&&this.resortView()},_emptyViewIndex:-1,_appendReorderedChildren:function(e){this.$el.append(e)},_renderChildren:function(){this.destroyEmptyView(),this.destroyChildren({checkEmpty:!1}),this.isEmpty(this.collection)?this.showEmptyView():(this.triggerMethod("before:render:collection",this),this.startBuffering(),this.showCollection(),this.endBuffering(),this.triggerMethod("render:collection",this),this.children.isEmpty()&&this.getOption("filter")&&this.showEmptyView())},showCollection:function(){var e,t=this._filteredSortedModels();i.each(t,function(t,i){e=this.getChildView(t),this.addChild(t,e,i)},this)},_filteredSortedModels:function(e){var t=this.getViewComparator(),n=this.collection.models;if(e=Math.min(Math.max(e,0),n.length-1),t){var r;e&&(r=n[e],n=n.slice(0,e).concat(n.slice(e+1))),n=this._sortModelsBy(n,t),r&&n.splice(e,0,r)}return this.getOption("filter")&&(n=i.filter(n,function(e,t){return this._shouldAddChild(e,t)},this)),n},_sortModelsBy:function(e,t){return"string"==typeof t?i.sortBy(e,function(e){return e.get(t)},this):1===t.length?i.sortBy(e,t,this):e.sort(i.bind(t,this))},showEmptyView:function(){var e=this.getEmptyView();if(e&&!this._showingEmptyView){this.triggerMethod("before:render:empty"),this._showingEmptyView=!0;var i=new t.Model;this.addEmptyView(i,e),this.triggerMethod("render:empty")}},destroyEmptyView:function(){this._showingEmptyView&&(this.triggerMethod("before:remove:empty"),this.destroyChildren(),delete this._showingEmptyView,this.triggerMethod("remove:empty"))},getEmptyView:function(){return this.getOption("emptyView")},addEmptyView:function(e,t){var n,r=this._isShown&&!this.isBuffering&&s.isNodeAttached(this.el),o=this.getOption("emptyViewOptions")||this.getOption("childViewOptions");i.isFunction(o)&&(o=o.call(this,e,this._emptyViewIndex));var h=this.buildChildView(e,t,o);h._parent=this,this.proxyChildEvents(h),h.once("render",function(){this._isShown&&s.triggerMethodOn(h,"before:show",h),r&&this._triggerBeforeAttach&&(n=this._getViewAndNested(h),this._triggerMethodMany(n,this,"before:attach"))},this),this.children.add(h),this.renderChildView(h,this._emptyViewIndex),r&&this._triggerAttach&&(n=this._getViewAndNested(h),this._triggerMethodMany(n,this,"attach")),this._isShown&&s.triggerMethodOn(h,"show",h)},getChildView:function(){var e=this.getOption("childView");if(!e)throw new s.Error({name:"NoChildViewError",message:'A "childView" must be specified'});return e},addChild:function(e,t,i){var n=this.getOption("childViewOptions");n=s._getValue(n,this,[e,i]);var r=this.buildChildView(e,t,n);return this._updateIndices(r,!0,i),this.triggerMethod("before:add:child",r),this._addChildView(r,i),this.triggerMethod("add:child",r),r._parent=this,r},_updateIndices:function(e,t,i){this.getOption("sort")&&(t&&(e._index=i),this.children.each(function(i){i._index>=e._index&&(i._index+=t?1:-1)}))},_addChildView:function(e,t){var i,n=this._isShown&&!this.isBuffering&&s.isNodeAttached(this.el);this.proxyChildEvents(e),e.once("render",function(){this._isShown&&!this.isBuffering&&s.triggerMethodOn(e,"before:show",e),n&&this._triggerBeforeAttach&&(i=this._getViewAndNested(e),this._triggerMethodMany(i,this,"before:attach"))},this),this.children.add(e),this.renderChildView(e,t),n&&this._triggerAttach&&(i=this._getViewAndNested(e),this._triggerMethodMany(i,this,"attach")),this._isShown&&!this.isBuffering&&s.triggerMethodOn(e,"show",e)},renderChildView:function(e,t){return e.supportsRenderLifecycle||s.triggerMethodOn(e,"before:render",e),e.render(),e.supportsRenderLifecycle||s.triggerMethodOn(e,"render",e),this.attachHtml(this,e,t),e},buildChildView:function(e,t,n){var r=i.extend({model:e},n),o=new t(r);return s.MonitorDOMRefresh(o),o},removeChildView:function(e){return e?(this.triggerMethod("before:remove:child",e),e.supportsDestroyLifecycle||s.triggerMethodOn(e,"before:destroy",e),e.destroy?e.destroy():e.remove(),e.supportsDestroyLifecycle||s.triggerMethodOn(e,"destroy",e),delete e._parent,this.stopListening(e),this.children.remove(e),this.triggerMethod("remove:child",e),this._updateIndices(e,!1),e):e},isEmpty:function(){return!this.collection||0===this.collection.length},checkEmpty:function(){this.isEmpty(this.collection)&&this.showEmptyView()},attachBuffer:function(e,t){e.$el.append(t)},_createBuffer:function(){var e=document.createDocumentFragment();return i.each(this._bufferedChildren,function(t){e.appendChild(t.el)}),e},attachHtml:function(e,t,i){e.isBuffering?e._bufferedChildren.splice(i,0,t):e._insertBefore(t,i)||e._insertAfter(t)},_insertBefore:function(e,t){var i,n=this.getOption("sort")&&this.children.length-1>t;return n&&(i=this.children.find(function(e){return e._index===t+1})),i?(i.$el.before(e.el),!0):!1},_insertAfter:function(e){this.$el.append(e.el)},_initChildViewStorage:function(){this.children=new t.ChildViewContainer},destroy:function(){return this.isDestroyed?this:(this.triggerMethod("before:destroy:collection"),this.destroyChildren({checkEmpty:!1}),this.triggerMethod("destroy:collection"),s.View.prototype.destroy.apply(this,arguments))},destroyChildren:function(e){var t=e||{},n=!0,r=this.children.map(i.identity);return i.isUndefined(t.checkEmpty)||(n=t.checkEmpty),this.children.each(this.removeChildView,this),n&&this.checkEmpty(),r},_shouldAddChild:function(e,t){var n=this.getOption("filter");return!i.isFunction(n)||n.call(this,e,t,this.collection)},proxyChildEvents:function(e){var t=this.getOption("childViewEventPrefix");this.listenTo(e,"all",function(){var n=i.toArray(arguments),r=n[0],s=this.normalizeMethods(i.result(this,"childEvents"));n[0]=t+":"+r,n.splice(1,0,e),s!==void 0&&i.isFunction(s[r])&&s[r].apply(this,n.slice(1)),this.triggerMethod.apply(this,n)
})},_getImmediateChildren:function(){return i.values(this.children._views)},_getViewAndNested:function(e){return[e].concat(i.result(e,"_getNestedViews")||[])},getViewComparator:function(){return this.getOption("viewComparator")}}),s.CompositeView=s.CollectionView.extend({constructor:function(){s.CollectionView.apply(this,arguments)},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this._renderChildren),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},getChildView:function(){var e=this.getOption("childView")||this.constructor;return e},serializeData:function(){var e={};return this.model&&(e=i.partial(this.serializeModel,this.model).apply(this,arguments)),e},render:function(){return this._ensureViewIsIntact(),this._isRendering=!0,this.resetChildViewContainer(),this.triggerMethod("before:render",this),this._renderTemplate(),this._renderChildren(),this._isRendering=!1,this.isRendered=!0,this.triggerMethod("render",this),this},_renderChildren:function(){(this.isRendered||this._isRendering)&&s.CollectionView.prototype._renderChildren.call(this)},_renderTemplate:function(){var e={};e=this.serializeData(),e=this.mixinTemplateHelpers(e),this.triggerMethod("before:render:template");var t=this.getTemplate(),i=s.Renderer.render(t,e,this);this.attachElContent(i),this.bindUIElements(),this.triggerMethod("render:template")},attachElContent:function(e){return this.$el.html(e),this},attachBuffer:function(e,t){var i=this.getChildViewContainer(e);i.append(t)},_insertAfter:function(e){var t=this.getChildViewContainer(this,e);t.append(e.el)},_appendReorderedChildren:function(e){var t=this.getChildViewContainer(this);t.append(e)},getChildViewContainer:function(e){if(e.$childViewContainer)return e.$childViewContainer;var t,i=s.getOption(e,"childViewContainer");if(i){var n=s._getValue(i,e);if(t="@"===n.charAt(0)&&e.ui?e.ui[n.substr(4)]:e.$(n),0>=t.length)throw new s.Error({name:"ChildViewContainerMissingError",message:'The specified "childViewContainer" was not found: '+e.childViewContainer})}else t=e.$el;return e.$childViewContainer=t,t},resetChildViewContainer:function(){this.$childViewContainer&&(this.$childViewContainer=void 0)}}),s.LayoutView=s.ItemView.extend({regionClass:s.Region,options:{destroyImmediate:!1},childViewEventPrefix:"childview",constructor:function(e){e=e||{},this._firstRender=!0,this._initializeRegions(e),s.ItemView.call(this,e)},render:function(){return this._ensureViewIsIntact(),this._firstRender?this._firstRender=!1:this._reInitializeRegions(),s.ItemView.prototype.render.apply(this,arguments)},destroy:function(){return this.isDestroyed?this:(this.getOption("destroyImmediate")===!0&&this.$el.remove(),this.regionManager.destroy(),s.ItemView.prototype.destroy.apply(this,arguments))},showChildView:function(e){var t=this.getRegion(e);return t.show.apply(t,i.rest(arguments))},getChildView:function(e){return this.getRegion(e).currentView},addRegion:function(e,t){var i={};return i[e]=t,this._buildRegions(i)[e]},addRegions:function(e){return this.regions=i.extend({},this.regions,e),this._buildRegions(e)},removeRegion:function(e){return delete this.regions[e],this.regionManager.removeRegion(e)},getRegion:function(e){return this.regionManager.get(e)},getRegions:function(){return this.regionManager.getRegions()},_buildRegions:function(e){var t={regionClass:this.getOption("regionClass"),parentEl:i.partial(i.result,this,"el")};return this.regionManager.addRegions(e,t)},_initializeRegions:function(e){var t;this._initRegionManager(),t=s._getValue(this.regions,this,[e])||{};var n=this.getOption.call(e,"regions");n=s._getValue(n,this,[e]),i.extend(t,n),t=this.normalizeUIValues(t,["selector","el"]),this.addRegions(t)},_reInitializeRegions:function(){this.regionManager.invoke("reset")},getRegionManager:function(){return new s.RegionManager},_initRegionManager:function(){this.regionManager=this.getRegionManager(),this.regionManager._parent=this,this.listenTo(this.regionManager,"before:add:region",function(e){this.triggerMethod("before:add:region",e)}),this.listenTo(this.regionManager,"add:region",function(e,t){this[e]=t,this.triggerMethod("add:region",e,t)}),this.listenTo(this.regionManager,"before:remove:region",function(e){this.triggerMethod("before:remove:region",e)}),this.listenTo(this.regionManager,"remove:region",function(e,t){delete this[e],this.triggerMethod("remove:region",e,t)})},_getImmediateChildren:function(){return i.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()}}),s.Behavior=s.Object.extend({constructor:function(e,t){this.view=t,this.defaults=i.result(this,"defaults")||{},this.options=i.extend({},this.defaults,e),this.ui=i.extend({},i.result(t,"ui"),i.result(this,"ui")),s.Object.apply(this,arguments)},$:function(){return this.view.$.apply(this.view,arguments)},destroy:function(){return this.stopListening(),this},proxyViewProperties:function(e){this.$el=e.$el,this.el=e.el}}),s.Behaviors=function(e,t){function i(e,n){return t.isObject(e.behaviors)?(n=i.parseBehaviors(e,n||t.result(e,"behaviors")),i.wrap(e,n,t.keys(o)),n):{}}function n(e,t){this._view=e,this._behaviors=t,this._triggers={}}function r(e){return e._uiBindings||e.ui}var s=/^(\S+)\s*(.*)$/,o={behaviorTriggers:function(e,t){var i=new n(this,t);return i.buildBehaviorTriggers()},behaviorEvents:function(i,n){var o={};return t.each(n,function(i,n){var h={},a=t.clone(t.result(i,"events"))||{};a=e.normalizeUIKeys(a,r(i));var d=0;t.each(a,function(e,r){var o=r.match(s),a=o[1]+"."+[this.cid,n,d++," "].join(""),l=o[2],c=a+l,u=t.isFunction(e)?e:i[e];h[c]=t.bind(u,i)},this),o=t.extend(o,h)},this),o}};return t.extend(i,{behaviorsLookup:function(){throw new e.Error({message:"You must define where your behaviors are stored.",url:"marionette.behaviors.html#behaviorslookup"})},getBehaviorClass:function(t,n){return t.behaviorClass?t.behaviorClass:e._getValue(i.behaviorsLookup,this,[t,n])[n]},parseBehaviors:function(e,n){return t.chain(n).map(function(n,r){var s=i.getBehaviorClass(n,r),o=new s(n,e),h=i.parseBehaviors(e,t.result(o,"behaviors"));return[o].concat(h)}).flatten().value()},wrap:function(e,i,n){t.each(n,function(n){e[n]=t.partial(o[n],e[n],i)})}}),t.extend(n.prototype,{buildBehaviorTriggers:function(){return t.each(this._behaviors,this._buildTriggerHandlersForBehavior,this),this._triggers},_buildTriggerHandlersForBehavior:function(i,n){var s=t.clone(t.result(i,"triggers"))||{};s=e.normalizeUIKeys(s,r(i)),t.each(s,t.bind(this._setHandlerForBehavior,this,i,n))},_setHandlerForBehavior:function(e,t,i,n){var r=n.replace(/^\S+/,function(e){return e+"."+"behaviortriggers"+t});this._triggers[r]=this._view._buildViewTrigger(i)}}),i}(s,i),s.AppRouter=t.Router.extend({constructor:function(e){this.options=e||{},t.Router.apply(this,arguments);var i=this.getOption("appRoutes"),n=this._getController();this.processAppRoutes(n,i),this.on("route",this._processOnRoute,this)},appRoute:function(e,t){var i=this._getController();this._addAppRoute(i,e,t)},_processOnRoute:function(e,t){if(i.isFunction(this.onRoute)){var n=i.invert(this.getOption("appRoutes"))[e];this.onRoute(e,n,t)}},processAppRoutes:function(e,t){if(t){var n=i.keys(t).reverse();i.each(n,function(i){this._addAppRoute(e,i,t[i])},this)}},_getController:function(){return this.getOption("controller")},_addAppRoute:function(e,t,n){var r=e[n];if(!r)throw new s.Error('Method "'+n+'" was not found on the controller');this.route(t,n,i.bind(r,e))},mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,triggerMethod:s.triggerMethod,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.Application=s.Object.extend({constructor:function(e){this._initializeRegions(e),this._initCallbacks=new s.Callbacks,this.submodules={},i.extend(this,e),this._initChannel(),s.Object.apply(this,arguments)},execute:function(){this.commands.execute.apply(this.commands,arguments)},request:function(){return this.reqres.request.apply(this.reqres,arguments)},addInitializer:function(e){this._initCallbacks.add(e)},start:function(e){this.triggerMethod("before:start",e),this._initCallbacks.run(e,this),this.triggerMethod("start",e)},addRegions:function(e){return this._regionManager.addRegions(e)},emptyRegions:function(){return this._regionManager.emptyRegions()},removeRegion:function(e){return this._regionManager.removeRegion(e)},getRegion:function(e){return this._regionManager.get(e)},getRegions:function(){return this._regionManager.getRegions()},module:function(e,t){var n=s.Module.getClass(t),r=i.toArray(arguments);return r.unshift(this),n.create.apply(n,r)},getRegionManager:function(){return new s.RegionManager},_initializeRegions:function(e){var t=i.isFunction(this.regions)?this.regions(e):this.regions||{};this._initRegionManager();var n=s.getOption(e,"regions");return i.isFunction(n)&&(n=n.call(this,e)),i.extend(t,n),this.addRegions(t),this},_initRegionManager:function(){this._regionManager=this.getRegionManager(),this._regionManager._parent=this,this.listenTo(this._regionManager,"before:add:region",function(){s._triggerMethod(this,"before:add:region",arguments)}),this.listenTo(this._regionManager,"add:region",function(e,t){this[e]=t,s._triggerMethod(this,"add:region",arguments)}),this.listenTo(this._regionManager,"before:remove:region",function(){s._triggerMethod(this,"before:remove:region",arguments)}),this.listenTo(this._regionManager,"remove:region",function(e){delete this[e],s._triggerMethod(this,"remove:region",arguments)})},_initChannel:function(){this.channelName=i.result(this,"channelName")||"global",this.channel=i.result(this,"channel")||t.Wreqr.radio.channel(this.channelName),this.vent=i.result(this,"vent")||this.channel.vent,this.commands=i.result(this,"commands")||this.channel.commands,this.reqres=i.result(this,"reqres")||this.channel.reqres}}),s.Module=function(e,t,n){this.moduleName=e,this.options=i.extend({},this.options,n),this.initialize=n.initialize||this.initialize,this.submodules={},this._setupInitializersAndFinalizers(),this.app=t,i.isFunction(this.initialize)&&this.initialize(e,t,this.options)},s.Module.extend=s.extend,i.extend(s.Module.prototype,t.Events,{startWithParent:!0,initialize:function(){},addInitializer:function(e){this._initializerCallbacks.add(e)},addFinalizer:function(e){this._finalizerCallbacks.add(e)},start:function(e){this._isInitialized||(i.each(this.submodules,function(t){t.startWithParent&&t.start(e)}),this.triggerMethod("before:start",e),this._initializerCallbacks.run(e,this),this._isInitialized=!0,this.triggerMethod("start",e))},stop:function(){this._isInitialized&&(this._isInitialized=!1,this.triggerMethod("before:stop"),i.invoke(this.submodules,"stop"),this._finalizerCallbacks.run(void 0,this),this._initializerCallbacks.reset(),this._finalizerCallbacks.reset(),this.triggerMethod("stop"))},addDefinition:function(e,t){this._runModuleDefinition(e,t)},_runModuleDefinition:function(e,n){if(e){var r=i.flatten([this,this.app,t,s,t.$,i,n]);e.apply(this,r)}},_setupInitializersAndFinalizers:function(){this._initializerCallbacks=new s.Callbacks,this._finalizerCallbacks=new s.Callbacks},triggerMethod:s.triggerMethod}),i.extend(s.Module,{create:function(e,t,n){var r=e,s=i.drop(arguments,3);t=t.split(".");var o=t.length,h=[];return h[o-1]=n,i.each(t,function(t,i){var o=r;r=this._getModule(o,t,e,n),this._addModuleDefinition(o,r,h[i],s)},this),r},_getModule:function(e,t,n,r){var s=i.extend({},r),o=this.getClass(r),h=e[t];return h||(h=new o(t,n,s),e[t]=h,e.submodules[t]=h),h},getClass:function(e){var t=s.Module;return e?e.prototype instanceof t?e:e.moduleClass||t:t},_addModuleDefinition:function(e,t,i,n){var r=this._getDefine(i),s=this._getStartWithParent(i,t);r&&t.addDefinition(r,n),this._addStartWithParent(e,t,s)},_getStartWithParent:function(e,t){var n;return i.isFunction(e)&&e.prototype instanceof s.Module?(n=t.constructor.prototype.startWithParent,i.isUndefined(n)?!0:n):i.isObject(e)?(n=e.startWithParent,i.isUndefined(n)?!0:n):!0},_getDefine:function(e){return!i.isFunction(e)||e.prototype instanceof s.Module?i.isObject(e)?e.define:null:e},_addStartWithParent:function(e,t,i){t.startWithParent=t.startWithParent&&i,t.startWithParent&&!t.startWithParentIsConfigured&&(t.startWithParentIsConfigured=!0,e.addInitializer(function(e){t.startWithParent&&t.start(e)}))}}),s});
//@ sourceMappingURL=backbone.marionette.map;
define('kitchen',['text!js/templates/kitchen_main.html', 'backbone', 'backbonemarionette', 'jquery'], function(kitchen_template, Backbone, Marionette) {
	var modelKitchen = Backbone.Model.extend({
		kitcehn_bg: void 0,
		poster: void 0,
		position: void 0,
		rotate: void 0,
		can_rotate: void 0,
		current_color_of_panel: void 0,
		scale: void 0,
		top_place: void 0,
		left_place: void 0,
		scale_mirrow: void 0,

		_changeScale: function(data){
			var scale = this.get('scale');
			if(data === 'plus') {
				if(scale<2){
					console.log(scale);
					this.set({scale: +scale+.1});
				}
			} else {
				if(scale>1){
					console.log(scale);
					this.set({scale: +scale-.1});
				}
			}
		},
		_changeMirrow: function(){
			if(this.get('scale_mirrow') === true){
				this.set({scale_mirrow: false});
			} else{
				this.set({scale_mirrow: true});
			}
		}
	});

	var panels_array = {
		color1: 'black',
		color2: 'white',
		color3: 'beige',
		color4: 'wood'
	};

	var AppLayoutView = Marionette.ItemView.extend({
		template: _.template(kitchen_template),
		id: 'main-kitchen',
		model: new modelKitchen(),
		initialize: function(options) {			
			this.panels_various = panels_array;
			this._setDefaultStates(options);
		},
		_setDefaultStates: function(data){
			this.model.set({
				kitcehn_bg: data.k2,
				position: data.position,
				rotate: 'rotate-main',
				can_rotate: data.can_rotate,
				current_color_of_panel: data.color_number,
				poster: data.default_poster,
				scale: data.scale,
				top_place: data.top_place,
				left_place: data.left_place,
				scale_mirrow: data.scale_mirrow
			});
		},		
		ui: {
			main_poster: '#main-poster',
			left_position: "#position-left",
			center_position: "#position-center",
			right_position: "#position-right",
			// rotate kitchen panel
			rotate_main_button: '.rotate-main .rotate',
			rotate_side_button: '.rotate-side .rotate',
			// color ui
			color_button: '#control-panel .color-button',
			// scale
			scale_button: '#control-panel .scale-button',
			// mirrow
			mirrow_button: '.mirrow-panel .mirrow-button',
			// open imgs
			open_img_button: '#choose_img_button'
		},
		modelEvents: {
			"change": "render"
		},
		events: {
			"click @ui.left_position": "_getLeftKitchen",
			"click @ui.center_position": "_getCenterKitchen",
			"click @ui.right_position": "_getRightKitchen",
			// rotate
			'click @ui.rotate_main_button': "_rotatingMain",
			'click @ui.rotate_side_button': "_rotatingSide",
			// color
			'click @ui.color_button': "_changeColor",
			// scale
			'click @ui.scale_button': '_changeScale',
			// mirrow
			'click @ui.mirrow_button': '_getMirrow',
			// images
			'click @ui.open_img_button': '_openImageList'
		},
		_openImageList: function(){
			this.mainApp.vent.trigger("open_images_list", function(){
				return 'images open';
			});
		},
		_getLeftKitchen: function() {
			var kitchen = this._checkPathPanel('k1');
			this.model.set({
				kitcehn_bg: kitchen,
				position: 'l_position',
				rotate: 'rotate-main',
				can_rotate: true
			});
		},
		_getCenterKitchen: function() {
			var kitchen = this._checkPathPanel('k2');
			this.model.set({
				kitcehn_bg: kitchen,
				position: 'c_position',
				rotate: 'rotate-main',
				can_rotate: false
			});
		},
		_getRightKitchen: function() {
			var kitchen = this._checkPathPanel('k3');
			this.model.set({
				kitcehn_bg: kitchen,
				position: 'r_position',
				rotate: 'rotate-main',
				can_rotate: true
			});
		},

		_rotatingMain: function() {
			var str = this.model.get('kitcehn_bg');
			this._whatTheSide(str);
			this.model.set({
				rotate: 'rotate-side'
			});
		},
		_rotatingSide: function() {
			var str = this.model.get('kitcehn_bg');
			this._whatTheSide(str);
			this.model.set({
				rotate: 'rotate-main'
			});
		},
		_whatTheSide: function(data) {
			if(data.indexOf("k1-")!==-1 || data.indexOf("k2-")!==-1 || data.indexOf("k3-")!==-1) {
				if(data.indexOf("k1-")!==-1){
					data = data.replace('k1-','k1r-');
				}else if(data.indexOf("k2-")!==-1){
					data = data.replace('k2-','k2r-');
				}else if(data.indexOf("k3-")!==-1){
					data = data.replace('k3-','k3r-');
				}
				this.model.set({
					kitcehn_bg: data
				});
			} else if (data.indexOf("k1r-") || data.indexOf("k2r-") || data.indexOf("k3r-")){
				if(data.indexOf("k1r-")!==-1){
					data = data.replace('k1r-','k1-');
				}else if(data.indexOf("k2r-")!==-1){
					data = data.replace('k2r-','k2-');
				}else if(data.indexOf("k3r-")!==-1){
					data = data.replace('k3r-','k3-');
				}
				this.model.set({
					kitcehn_bg: data
				});
			}
		},
		_checkPathPanel: function(data) {
			var color = this.panels_various[this.model.get('current_color_of_panel')];
			var main = this.options.mainPath;
				main = main+data+'-'+color+'.png';
			return main;
		},
		_changeColor: function(e) {
			var target = e.target.id;
			var path = this.model.get('kitcehn_bg');

			if(path.indexOf(this.panels_various['color1'])!==-1){
				path = path.replace(this.panels_various['color1'],this.panels_various[target]);
			}else if(path.indexOf(this.panels_various['color2'])!==-1){
				path = path.replace(this.panels_various['color2'],this.panels_various[target]);
			}else if(path.indexOf(this.panels_various['color3'])!==-1){
				path = path.replace(this.panels_various['color3'],this.panels_various[target]);
			}else if(path.indexOf(this.panels_various['color4'])!==-1){
				path = path.replace(this.panels_various['color4'],this.panels_various[target]);
			}
			this.model.set({
				kitcehn_bg: path,
				current_color_of_panel: target
			});
			// wip

			// this.mainApp.vent.trigger("change_image", function(){
			// 	return './src/images/posters/puuviljad-murul1.jpg';
			// });
		},
		_changeScale: function(e){
			var target = e.target.id;
			this.model._changeScale(target);
		},
		_getMirrow: function(){
			this.model._changeMirrow();
		},
		onRender: function() {
			var self = this;
			setTimeout(function() {
				// $('#draggable').draggable({
				// 	drag: function(event, ui) {						
				// 	    // ui.position.left = 0;
				// 	    // ceep position for image
				// 	    var image = $('#main-poster');
				// 	    ui.ceep = {};
				// 	    ui.ceep.top = ui.position.top;
				// 	    ui.ceep.left = ui.position.left;
					    // self._test();
				// 	    self.model.set({
				// 	    	top_place: ui.ceep.top,
				// 	    	left_place: ui.ceep.left
				// 	    });

				// 	    // image.css('top', ui.ceep.top);
				// 	    // image.css('left', ui.ceep.left);
				// 	    // none draggable cube
				// 	    ui.position.left = ui.originalPosition.left;
				// 	    ui.position.top = ui.originalPosition.top;
				//    }
				// });

			// $('#draggable').click(function(e) {
			// 	var x = e.offsetX==undefined?e.layerX:e.offsetX;
			// 	var y = e.offsetY==undefined?e.layerY:e.offsetY;
			// 	console.log(x +'x'+ y);
			// });				
			},1000);
		},
		onShow: function(){
			this._test();
		},
		_test: function() {
			// var ball = $('#draggable');
			var y_start;
			var x_start;

			// инфа про картинку
			var rect_img;
			// инфа про один обьект
			var rect_crop;

			// ball.mousedown(function(e) {
			// 	x_start = e.offsetX==undefined?e.layerX:e.offsetX;
			// 	y_start = e.offsetY==undefined?e.layerY:e.offsetY;
			// 	console.log(x_start +'x'+ y_start);
			// 	ball.css('z-index', '999999999999999999999999999999')
			// 	function moveAt(e) {
			// 	    ball.css('left', e.offsetX==undefined?e.layerX:e.offsetX);
			// 	    ball.css('top', e.offsetY==undefined?e.layerY:e.offsetY);

			// 	    // $('#main-poster').css('left', e.offsetX==undefined?e.layerX:e.offsetX);
			// 	    // $('#main-poster').css('top', e.offsetY==undefined?e.layerY:e.offsetY);
			// 	}

			// 	document.onmousemove = function(e) {
			// 		moveAt(e);
			// 	}

			// 	ball.mouseup(function() {
			// 		console.log('test up')
			// 	    document.onmousemove = null;
			// 	    document.getElementsByClassName("movement")[0].onmouseup = null;
			// 	    document.getElementsByClassName("movement")[1].onmouseup = null;
			// 	});
			// });
			// ball.ondragstart = function() {
			//   return false;
			// };

			$(function() {
    function getCoords(elem) { // кроме IE8-
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }
    var ball = document.getElementById('draggable');
    var poster = document.getElementById('main-poster');
    var after_up = {top:0, left:0};
    ball.onmousedown = function(e) {

      var coords = getCoords(ball);
      var shiftX = e.pageX;
      var shiftY = e.pageY;

      ball.style.position = 'absolute';
      // document.body.appendChild(ball);
      // document.body.appendChild(poster);
      moveAt(e, true);

      ball.style.zIndex = 1000; // над другими элементами

      function moveAt(e, data) {
      	if(data === true){
      		console.log('===========first')
      		ball.style.left = after_up.left + 'px';
	        ball.style.top = after_up.top + 'px';
	        // ball.style.background = 'red';

	        poster.style.left = after_up.left + 'px';
	        poster.style.top = after_up.top + 'px';
      	} else{
      		// инфа про картинку
			rect_img = document.getElementById("main-poster").getBoundingClientRect();
			// console.log('rect_img',rect_img);
			// инфа про один обьект
			rect_crop = document.getElementById("crop-area").getBoundingClientRect();
			// console.log('rect_crop',rect_crop);
	      	
	      	if(rect_img.left > rect_crop.left){
	      		done();
				console.log('wrong left. img: '+rect_img.left+'rect: '+rect_crop.left);
			} else if(rect_img.top > rect_crop.top){
				done();
				console.log('wrong top. img: '+rect_img.top+'rect: '+rect_crop.top);				
			} else if(rect_img.right < rect_crop.right){
				done();
				console.log('wrong right. img: '+rect_img.right+'rect: '+rect_crop.right);
			} else if(rect_img.bottom < rect_crop.bottom){
				done();
				console.log('wrong bottom. img: '+rect_img.bottom+'rect: '+rect_crop.bottom);
			}

	        ball.style.left = e.pageX - shiftX -10 + 'px';
	        ball.style.top = e.pageY - shiftY -10 + 'px';
	        // ball.style.background = 'red';

	        after_up.left = poster.style.left = e.pageX - shiftX -10 + 'px';
	        after_up.top = poster.style.top = e.pageY - shiftY -10 + 'px';
      	}   	


      }

      document.onmousemove = function(e) {
        moveAt(e);
      };

      ball.onmouseup = function() {
      	console.log(after_up.top ,'x',after_up.left)
        document.onmousemove = null;
        ball.onmouseup = null;
      };
      function done(){      	
      	document.onmousemove = null;
        ball.onmouseup = null;
      }
    }

    ball.ondragstart = function() {
        return false;
    };
});



			

			
		}
	});

	return AppLayoutView;
});

define('text!js/templates/choose_image.html',[],function () { return '<div class="col-md-9 col-xs-9 col-sm-9 none-padd right-border">\r\n\t<ul class="nav nav-tabs nav-justified">\r\n\t  <li class="active"><a href="#native-img" id="img_tab1" data-toggle="tab">Выбрать изображение из нашего каталога</a></li>\r\n\t  <li><a href="#shutterhost_img" id="img_tab2" data-toggle="tab">Выбрать изображение из Shutterstock.com</a></li>\r\n\t</ul>\r\n</div>\r\n<div class="col-md-3 col-xs-3 col-sm-3 container-close-button">\r\n\t<button class="pull-right" id="close-list-img"></button>\r\n</div>\r\n<!-- Tab panes -->\r\n<div class="col-md-9 col-xs-9 col-sm-9 none-padd right-border">\r\n\t<div class="tab-content">\r\n\t\t<div class="tab-pane active" id="native-img">\t\t\r\n\t\t</div>\r\n\t\t<div class="tab-pane" id="shutterhost_img">Добавляшка</div>\r\n\t</div>\r\n</div>\r\n<div class="col-md-3 col-xs-3 col-sm-3 accord_container" id="accord_container">\r\n\t<div class="panel-group" id="accordion">\r\n\t  <div class="panel panel-default">\r\n\t    <div class="panel-heading">\r\n\t      <h4 class="panel-title">\r\n\t              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">\r\n\t                Пища\r\n\t              </a>\r\n\t            </h4>\r\n\t    </div>\r\n\t    <div id="collapseOne" class="panel-collapse collapse in">\r\n\t      <div class="panel-body">\r\n\t        <ul class="child-menu accord_menu_ul">\r\n\t\t\t\t<li><button class="btn" data-category="0">Фрукты и ягоды</button></li>\t\t\r\n\t\t\t\t<li><button class="btn" data-category="1">Овощи</button></li>\t\t\r\n\t\t\t\t<li><button class="btn" data-category="2">Специи</button></li>\t\t\r\n\t\t\t\t<li><button class="btn" data-category="3">Напитки</button></li>\t\t\r\n\t\t   \t</ul>\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t  <div class="panel panel-default">\r\n\t    <div class="panel-heading">\r\n\t      <h4 class="panel-title">\r\n\t              <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">\r\n\t                Природа\r\n\t              </a>\r\n\t            </h4>\r\n\t    </div>\r\n\t    <div id="collapseTwo" class="panel-collapse collapse">\r\n\t      <div class="panel-body">\r\n\t        <ul class="child-menu accord_menu_ul">\r\n\t\t\t\t<li><button class="btn" data-category="4">Закат</button></li>\t\t\r\n\t\t\t\t<li><button class="btn" data-category="5">Горы и водопад</button></li>\t\t\r\n\t\t\t\t<li><button class="btn" data-category="6">Море и пляж</button></li>\t\t\r\n\t\t\t\t<li><button class="btn" data-category="7">Галактика</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="8">Поле</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="9">Лес и деревья</button></li>\r\n\t\t   \t</ul>\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t  <div class="panel panel-default">\r\n\t    <div class="panel-heading">\r\n\t      <h4 class="panel-title">\r\n\t              <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">\r\n\t                Животные\r\n\t              </a>\r\n\t            </h4>\r\n\t    </div>\r\n\t    <div id="collapseThree" class="panel-collapse collapse">\r\n\t      <div class="panel-body">\r\n\t        <ul class="child-menu accord_menu_ul">\r\n\t\t\t\t<li><button class="btn" data-category="10">Слоны</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="11">Лошади</button></li>\r\n\t\t   \t</ul>\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t  <div class="panel panel-default">\r\n\t    <div class="panel-heading">\r\n\t      <h4 class="panel-title">\r\n\t              <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">\r\n\t                Цветы\r\n\t              </a>\r\n\t            </h4>\r\n\t    </div>\r\n\t    <div id="collapseFour" class="panel-collapse collapse">\r\n\t      <div class="panel-body">\r\n\t        <ul class="child-menu accord_menu_ul">\r\n\t\t\t\t<li><button class="btn" data-category="12">Орхидеи</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="13">Тюлпаны</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="14">Полевые цветы</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="15">Другие цветы</button></li>\t\r\n\t\t   \t</ul>\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t  <div class="panel panel-default">\r\n\t    <div class="panel-heading">\r\n\t      <h4 class="panel-title">\r\n\t              <a data-toggle="collapse" data-parent="#accordion" href="#collapseFife">\r\n\t                Подводный мир\r\n\t              </a>\r\n\t            </h4>\r\n\t    </div>\r\n\t    <div id="collapseFife" class="panel-collapse collapse">\r\n\t      <div class="panel-body">\r\n\t        <ul class="child-menu accord_menu_ul">\r\n\t\t\t\t<li><button class="btn" data-category="16">Обитатели подводного мира</button></li>\t\r\n\t\t   \t</ul>\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t  <div class="panel panel-default">\r\n\t    <div class="panel-heading">\r\n\t      <h4 class="panel-title">\r\n\t              <a data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">\r\n\t                Насекомые\r\n\t              </a>\r\n\t            </h4>\r\n\t    </div>\r\n\t    <div id="collapseSeven" class="panel-collapse collapse">\r\n\t      <div class="panel-body">\r\n\t        <ul class="child-menu accord_menu_ul">\r\n\t\t\t\t<li><button class="btn" data-category="17">Бабочки</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="18">Божьи коровки</button></li>\r\n\t\t   \t</ul>\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t  <div class="panel panel-default">\r\n\t    <div class="panel-heading">\r\n\t      <h4 class="panel-title">\r\n\t              <a data-toggle="collapse" data-parent="#accordion" href="#collapseEight">\r\n\t                Абстракция\r\n\t              </a>\r\n\t            </h4>\r\n\t    </div>\r\n\t    <div id="collapseEight" class="panel-collapse collapse">\r\n\t      <div class="panel-body">\r\n\t        <ul class="child-menu accord_menu_ul">\r\n\t\t\t\t<li><button class="btn" data-category="19">Бежевая и коричневая</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="20">Синяя</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="21">Черная</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="22">Зеленая</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="23">Красная и розовая</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="24">Разноцветная</button></li>\r\n\t\t   \t</ul>\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t  <div class="panel panel-default">\r\n\t    <div class="panel-heading">\r\n\t      <h4 class="panel-title">\r\n\t              <a data-toggle="collapse" data-parent="#accordion" href="#collapseNine">\r\n\t                Архитектура\r\n\t              </a>\r\n\t            </h4>\r\n\t    </div>\r\n\t    <div id="collapseNine" class="panel-collapse collapse">\r\n\t      <div class="panel-body">\r\n\t        <ul class="child-menu accord_menu_ul">\r\n\t\t\t\t<li><button class="btn" data-category="25">Города</button></li>\r\n\t\t\t\t<li><button class="btn" data-category="26">Стены</button></li>\r\n\t\t   \t</ul>\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t</div>\r\n\r\n\t<div id="shutterstock_menu">\r\n\t\t<ul class="child-menu accord_menu_ul">\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="Animals">Animals</button></li>\t\t\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="Food">Food</button></li>\t\t\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="Holidays">Holidays</button></li>\t\t\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="Landscapes">Landscapes</button></li>\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="Miscellaneous">Miscellaneous</button></li>\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="Musical">Musical</button></li>\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="Nature">Nature</button></li>\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="People">People</button></li>\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="Places">Places</button></li>\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="Sexual">Sexual</button></li>\r\n\t\t\t<li data-parent="shutterstock"><button class="btn" data-category="Sports">Sports</button></li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>';});


define('text!js/templates/img_el_template.html',[],function () { return '<div class="paret">\r\n\t<img class="item-image" src="<%=src%>">\r\n\t<div class="cover-all"></div>\t\r\n\t<div class="absolute-img-name"><span><%=name%></span></div>\r\n</div>';});


define('text!js/templates/shutterstock_img_template.html',[],function () { return '<div class="paret">\r\n\t<img class="item-image" src="<%=assets.preview.url%>">\r\n\t<div class="cover-all"></div>\t\r\n\t<div class="absolute-img-name"><span>Выбрать изображение</span></div>\r\n</div>';});

define('choose_image',['text!js/templates/choose_image.html', 'backbone', 'backbonemarionette', 'text!js/templates/img_el_template.html', 'img_collection', 'text!js/templates/shutterstock_img_template.html', 'jquery'], function(choose_image_template, Backbone, Marionette, img_el_template, img_collection, shutterstock_template_img) {
	
	var AppLayoutView = Marionette.LayoutView.extend({
		template: _.template(choose_image_template),
		ui: {
			close_list: '#close-list-img',
			category_button: '#accord_container button',
			// tabs
			tab1: '#img_tab1',
			tab2: '#img_tab2'
		},
		events: {
			'click @ui.close_list': '_closeListImg',
			'click @ui.category_button': '_getCategory',
			'click @ui.tab1': '_clickTab1',
			'click @ui.tab2': '_clickTab2',
		},
		_clickTab1: function(){
			this._show_hide_menu('main');
		},
		_clickTab2: function(){
			this._show_hide_menu('shutterstock');
		},


		_getCategory: function(e){
			var state = $(e.target).parent().attr('data-parent');
			if( state === 'shutterstock'){
				console.log(state);
				this._shutterstock_category = $(e.target).attr('data-category');
				this._sutterstock_images_view();
			} else{
				this.currentTheme = $(e.target).attr('data-category');
				this._main_images_view();
			}			
		},
		_closeListImg: function(){
			console.log('close')
			this.mainApp.vent.trigger("close_images_list", function(){
				return 'close list images';
			});
		},
		regions: {
			img_area: "#native-img",
			list_area: "#shutterhost_img"
		},
		currentTheme: 0,
		_shutterstock_category: 'animals',
		onRender: function(){
			this._showView()
			// this.list_area.show(new Marionette.CollectionView({
			// 	childView: item_list_view,
			// 	collection: new Backbone.Collection(img_collection)
			// }));
		},
		_main_images_view: function() {
			var self = this;
			var item_img_view = Marionette.ItemView.extend({
				mainApp: self.mainApp,
				template: _.template(img_el_template),
				ui: {
					image: 'img'
				},
				events: {
					'click': '_getSrc'					
				},
				_getSrc: function(){
					var src = this.model.get('src');
					console.log(src);
					this.mainApp.vent.trigger("change_image", function(){
						return src;
					});
				}				
			});
			this.img_area.show(new Marionette.CollectionView({
				childView: item_img_view,
				collection: new Backbone.Collection(img_collection[this.currentTheme].content)
			}));
		},
		_sutterstock_images_view: function(){
			$('#shutterhost_img').html('<h4 style="text-align:center;">Download...</h4>')
			var self = this;
			var view_2 = Marionette.ItemView.extend({
				mainApp: self.mainApp,
				template: _.template(shutterstock_template_img),
				className: 'counterImg',
				ui: {
					image: 'img'
				},
				events: {
					'click': '_getSrc'					
				},
				_getSrc: function(){
					var src = this.model.attributes.assets.preview.url;

					console.log(src);
					this.mainApp.vent.trigger("change_image", function(){
						return src;
					});
				}				
			});
			
			var jqxhr = $.ajax({
		        url: 'https://api.shutterstock.com/v2' + '/' + 'image' + 's/search',
		        data: "query="+self._shutterstock_category+"&safe=true&image_type=photo&orientation=horizontal&page=1&per_page=300",
		        headers: {
		            Authorization: 'Basic ' + window.btoa('3352aeffbd24d33f8859' + ':' + '097f832242ad371d9f012770cabdb1e6cebc433a')
		        }
		    })
		    .done(function (data) {
		    	// console.log(data.data)
		    	self.list_area.show(new Marionette.CollectionView({
					childView: view_2,
					collection: new Backbone.Collection(data.data)
				}));
		    });	
		},
		_showView: function(){
			// if(self._current_tab === 'main'){

			// } else{

			// }
			this._main_images_view();
			this._sutterstock_images_view();

			
			// var template;
			// if(data === 'main'){
			// 	template = _.template(img_el_template);
			// } else{
			// 	template = _.template(shutterstock_template_img);
			// }		    
		},
		onShow: function(){
			this._show_hide_menu('main');
		},
		_show_hide_menu: function(data){
			console.log('===================',data);
			if(data === 'main'){
				$('#accord_container #shutterstock_menu').hide();
				$('#accord_container #accordion').show();
			} else{
				$('#accord_container #accordion').hide();
				$('#accord_container #shutterstock_menu').show();
			}
		}
	});

	return AppLayoutView;
});
// Backbone.Wreqr (Backbone.Marionette)
// ----------------------------------
// v1.3.5
//
// Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/marionettejs/backbone.wreqr



!function(a,b){if("function"==typeof define&&define.amd)define('backbonewreqr',["backbone","underscore"],function(a,c){return b(a,c)});else if("undefined"!=typeof exports){var c=require("backbone"),d=require("underscore");module.exports=b(c,d)}else b(a.Backbone,a._)}(this,function(a,b){"use strict";var c=a.Wreqr,d=a.Wreqr={};return a.Wreqr.VERSION="1.3.5",a.Wreqr.noConflict=function(){return a.Wreqr=c,this},d.Handlers=function(a,b){var c=function(a){this.options=a,this._wreqrHandlers={},b.isFunction(this.initialize)&&this.initialize(a)};return c.extend=a.Model.extend,b.extend(c.prototype,a.Events,{setHandlers:function(a){b.each(a,function(a,c){var d=null;b.isObject(a)&&!b.isFunction(a)&&(d=a.context,a=a.callback),this.setHandler(c,a,d)},this)},setHandler:function(a,b,c){var d={callback:b,context:c};this._wreqrHandlers[a]=d,this.trigger("handler:add",a,b,c)},hasHandler:function(a){return!!this._wreqrHandlers[a]},getHandler:function(a){var b=this._wreqrHandlers[a];if(b)return function(){return b.callback.apply(b.context,arguments)}},removeHandler:function(a){delete this._wreqrHandlers[a]},removeAllHandlers:function(){this._wreqrHandlers={}}}),c}(a,b),d.CommandStorage=function(){var c=function(a){this.options=a,this._commands={},b.isFunction(this.initialize)&&this.initialize(a)};return b.extend(c.prototype,a.Events,{getCommands:function(a){var b=this._commands[a];return b||(b={command:a,instances:[]},this._commands[a]=b),b},addCommand:function(a,b){var c=this.getCommands(a);c.instances.push(b)},clearCommands:function(a){var b=this.getCommands(a);b.instances=[]}}),c}(),d.Commands=function(a,b){return a.Handlers.extend({storageType:a.CommandStorage,constructor:function(b){this.options=b||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this),a.Handlers.prototype.constructor.apply(this,arguments)},execute:function(a){a=arguments[0];var c=b.rest(arguments);this.hasHandler(a)?this.getHandler(a).apply(this,c):this.storage.addCommand(a,c)},_executeCommands:function(a,c,d){var e=this.storage.getCommands(a);b.each(e.instances,function(a){c.apply(d,a)}),this.storage.clearCommands(a)},_initializeStorage:function(a){var c,d=a.storageType||this.storageType;c=b.isFunction(d)?new d:d,this.storage=c}})}(d,b),d.RequestResponse=function(a,b){return a.Handlers.extend({request:function(a){return this.hasHandler(a)?this.getHandler(a).apply(this,b.rest(arguments)):void 0}})}(d,b),d.EventAggregator=function(a,b){var c=function(){};return c.extend=a.Model.extend,b.extend(c.prototype,a.Events),c}(a,b),d.Channel=function(c){var d=function(b){this.vent=new a.Wreqr.EventAggregator,this.reqres=new a.Wreqr.RequestResponse,this.commands=new a.Wreqr.Commands,this.channelName=b};return b.extend(d.prototype,{reset:function(){return this.vent.off(),this.vent.stopListening(),this.reqres.removeAllHandlers(),this.commands.removeAllHandlers(),this},connectEvents:function(a,b){return this._connect("vent",a,b),this},connectCommands:function(a,b){return this._connect("commands",a,b),this},connectRequests:function(a,b){return this._connect("reqres",a,b),this},_connect:function(a,c,d){if(c){d=d||this;var e="vent"===a?"on":"setHandler";b.each(c,function(c,f){this[a][e](f,b.bind(c,d))},this)}}}),d}(d),d.radio=function(a,b){var c=function(){this._channels={},this.vent={},this.commands={},this.reqres={},this._proxyMethods()};b.extend(c.prototype,{channel:function(a){if(!a)throw new Error("Channel must receive a name");return this._getChannel(a)},_getChannel:function(b){var c=this._channels[b];return c||(c=new a.Channel(b),this._channels[b]=c),c},_proxyMethods:function(){b.each(["vent","commands","reqres"],function(a){b.each(d[a],function(b){this[a][b]=e(this,a,b)},this)},this)}});var d={vent:["on","off","trigger","once","stopListening","listenTo","listenToOnce"],commands:["execute","setHandler","setHandlers","removeHandler","removeAllHandlers"],reqres:["request","setHandler","setHandlers","removeHandler","removeAllHandlers"]},e=function(a,c,d){return function(e){var f=a._getChannel(e)[c];return f[d].apply(f,b.rest(arguments))}};return new c}(d,b),a.Wreqr});
//# sourceMappingURL=backbone.wreqr.map;
// Backbone.BabySitter
// -------------------
// v0.1.10
//
// Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/marionettejs/backbone.babysitter

(function(i,e){if("function"==typeof define&&define.amd)define('backbonebabysitter',["backbone","underscore"],function(i,t){return e(i,t)});else if("undefined"!=typeof exports){var t=require("backbone"),n=require("underscore");module.exports=e(t,n)}else e(i.Backbone,i._)})(this,function(i,e){"use strict";var t=i.ChildViewContainer;return i.ChildViewContainer=function(i,e){var t=function(i){this._views={},this._indexByModel={},this._indexByCustom={},this._updateLength(),e.each(i,this.add,this)};e.extend(t.prototype,{add:function(i,e){var t=i.cid;return this._views[t]=i,i.model&&(this._indexByModel[i.model.cid]=t),e&&(this._indexByCustom[e]=t),this._updateLength(),this},findByModel:function(i){return this.findByModelCid(i.cid)},findByModelCid:function(i){var e=this._indexByModel[i];return this.findByCid(e)},findByCustom:function(i){var e=this._indexByCustom[i];return this.findByCid(e)},findByIndex:function(i){return e.values(this._views)[i]},findByCid:function(i){return this._views[i]},remove:function(i){var t=i.cid;return i.model&&delete this._indexByModel[i.model.cid],e.any(this._indexByCustom,function(i,e){return i===t?(delete this._indexByCustom[e],!0):void 0},this),delete this._views[t],this._updateLength(),this},call:function(i){this.apply(i,e.tail(arguments))},apply:function(i,t){e.each(this._views,function(n){e.isFunction(n[i])&&n[i].apply(n,t||[])})},_updateLength:function(){this.length=e.size(this._views)}});var n=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck","reduce"];return e.each(n,function(i){t.prototype[i]=function(){var t=e.values(this._views),n=[t].concat(e.toArray(arguments));return e[i].apply(e,n)}}),t}(i,e),i.ChildViewContainer.VERSION="0.1.10",i.ChildViewContainer.noConflict=function(){return i.ChildViewContainer=t,this},i.ChildViewContainer});
//@ sourceMappingURL=backbone.babysitter.map;
define('app',['kitchen','choose_image', 'jquery', 'jquery-ui', 'underscore', 'backbonewreqr', 'backbonebabysitter', 'backbone', 'backbonemarionette', 'bootstrap'], function(kitchenMainView, chooseImageView) {
	var deferred = Marionette.Deferred();
	var mainApp;



	
	// window.addEventListener('click', function(e) {
	//   console.log('screen: ' + e.screenX + 'x' + e.screenY + '\npage: ' + e.pageX + 'x' + e.pageY + '\nclient: ' + e.clientX + 'x' + e.clientY);
	// }, false);

	// $('#draggable').click(function(e) {
	// 	console.log('test');
	// 	var x = e.offsetX==undefined?e.layerX:e.offsetX;
	// 	var y = e.offsetY==undefined?e.layerY:e.offsetY;
	// 	console.log(x +'x'+ y);
	// });


	// return new Promise(function(resolve, reject) {
			var default_paths_images = {
			k1: './src/images/kitchen/k1-beige.png',
			k2: './src/images/kitchen/k2-beige.png',
			k3: './src/images/kitchen/k3-beige.png',
			color_number: 'color3',
			position: 'c_position',
			can_rotate: false,
			mainPath: './src/images/kitchen/',
			default_poster: './src/images/posters/number1/laimid_sidrun_munt_mustal_taustal1.jpg',
			scale: 1,
			top_place: 0,
			left_place: 0,
			scale_mirrow: false
		};
		var layoutView = new kitchenMainView(default_paths_images);
		var imagesView = new chooseImageView();

		mainApp = new Marionette.Application({
			mainView: layoutView,
			imagesView: imagesView,
			imagesListView: imagesView,
			regions: {
				aRegion: "#area-kitchen",
				bRegion: "#images_list"
			}
		});
		mainApp.addInitializer(function(options){
			layoutView.mainApp = mainApp;
			imagesView.mainApp = mainApp;
			mainApp.getRegion('aRegion').show(layoutView);
			mainApp.getRegion('bRegion').show(imagesView);
			$(mainApp.imagesListView.el).parent().hide();			
		});

		mainApp.vent.on("change_image", function(someData){
			var image = someData();
			mainApp.mainView.model.set({
				poster: image
			});
			$(mainApp.imagesListView.el).parent().hide(400);
			$(mainApp.mainView.el).parent().show(400);
		});

		mainApp.vent.on("close_images_list", function(someData){
			$(mainApp.imagesListView.el).parent().hide(400);
			$(mainApp.mainView.el).parent().show(400);
		});
		mainApp.vent.on("open_images_list", function(){
			$(mainApp.imagesListView.el).parent().show(400);
			$(mainApp.mainView.el).parent().hide(400);
		});

		// resolve(mainApp); // asynchronous "Hello, world!"
		return mainApp;
	// });	
});

require(["app"]);
