(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/*! @license Firebase v3.5.0
    Build: 3.5.0-rc.8
    Terms: https://developers.google.com/terms */
var firebase = null; (function() { for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ba=function(){ba=function(){};h.Symbol||(h.Symbol=ca)},da=0,ca=function(a){return"jscomp_symbol_"+(a||"")+da++},m=function(){ba();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=
h.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});m=function(){}},ea=function(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},fa=function(a){m();a={next:a};a[h.Symbol.iterator]=function(){return this};return a},n=function(a){m();var b=a[Symbol.iterator];return b?b.call(a):ea(a)},p=h,q=["Promise"],r=0;r<q.length-1;r++){var t=q[r];t in p||(p[t]={});p=p[t]}
var ga=q[q.length-1],u=p[ga],w=function(){function a(){this.c=null}if(u)return u;a.prototype.L=function(a){null==this.c&&(this.c=[],this.W());this.c.push(a)};a.prototype.W=function(){var a=this;this.M(function(){a.$()})};var b=h.setTimeout;a.prototype.M=function(a){b(a,0)};a.prototype.$=function(){for(;this.c&&this.c.length;){var a=this.c;this.c=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(k){this.X(k)}}}this.c=null};a.prototype.X=function(a){this.M(function(){throw a;})};var c=
function(a){this.a=0;this.j=void 0;this.m=[];var b=this.F();try{a(b.resolve,b.reject)}catch(g){b.reject(g)}};c.prototype.F=function(){function a(a){return function(e){c||(c=!0,a.call(b,e))}}var b=this,c=!1;return{resolve:a(this.ia),reject:a(this.K)}};c.prototype.ia=function(a){if(a===this)this.K(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof c)this.la(a);else{var b;a:switch(typeof a){case "object":b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.ha(a):
this.R(a)}};c.prototype.ha=function(a){var b=void 0;try{b=a.then}catch(g){this.K(g);return}"function"==typeof b?this.ma(b,a):this.R(a)};c.prototype.K=function(a){this.U(2,a)};c.prototype.R=function(a){this.U(1,a)};c.prototype.U=function(a,b){if(0!=this.a)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.a);this.a=a;this.j=b;this.ba()};c.prototype.ba=function(){if(null!=this.m){for(var a=this.m,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.m=null}};var d=new a;c.prototype.la=
function(a){var b=this.F();a.o(b.resolve,b.reject)};c.prototype.ma=function(a,b){var c=this.F();try{a.call(b,c.resolve,c.reject)}catch(k){c.reject(k)}};c.prototype.then=function(a,b){function e(a,b){return"function"==typeof a?function(b){try{d(a(b))}catch(Fa){f(Fa)}}:b}var d,f,z=new c(function(a,b){d=a;f=b});this.o(e(a,d),e(b,f));return z};c.prototype.catch=function(a){return this.then(void 0,a)};c.prototype.o=function(a,b){function c(){switch(e.a){case 1:a(e.j);break;case 2:b(e.j);break;default:throw Error("Unexpected state: "+
e.a);}}var e=this;null==this.m?d.L(c):this.m.push(function(){d.L(c)})};c.resolve=function(a){return a instanceof c?a:new c(function(b){b(a)})};c.reject=function(a){return new c(function(b,c){c(a)})};c.race=function(a){return new c(function(b,d){for(var e=n(a),f=e.next();!f.done;f=e.next())c.resolve(f.value).o(b,d)})};c.all=function(a){var b=n(a),d=b.next();return d.done?c.resolve([]):new c(function(a,e){function k(b){return function(c){f[b]=c;l--;0==l&&a(f)}}var f=[],l=0;do f.push(void 0),l++,c.resolve(d.value).o(k(f.length-
1),e),d=b.next();while(!d.done)})};c.$jscomp$new$AsyncExecutor=function(){return new a};return c}();w!=u&&null!=w&&aa(p,ga,{configurable:!0,writable:!0,value:w});
var x=this,y=function(){},ha=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},A=function(a){return"function"==ha(a)},ia=function(a,b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},B=function(a,b,c){B=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ia:ja;return B.apply(null,arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=function(a,b){function c(){}c.prototype=b.prototype;a.xa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.wa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var C;C="undefined"!==typeof window?window:"undefined"!==typeof self?self:global;function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
function __decorate(a,b,c,d){var e=arguments.length,f=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,g;g=C.Reflect;if("object"===typeof g&&"function"===typeof g.decorate)f=g.decorate(a,b,c,d);else for(var k=a.length-1;0<=k;k--)if(g=a[k])f=(3>e?g(f):3<e?g(b,c,f):g(b,c))||f;return 3<e&&f&&Object.defineProperty(b,c,f),f}function __metadata(a,b){var c=C.Reflect;if("object"===typeof c&&"function"===typeof c.metadata)return c.metadata(a,b)}
var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,f){function g(a){try{l(d.next(a))}catch(v){f(v)}}function k(a){try{l(d.throw(a))}catch(v){f(v)}}function l(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(g,k)}l((d=d.apply(a,b)).next())})};"undefined"!==typeof C.V&&C.V||(C.ta=__extends,C.sa=__decorate,C.ua=__metadata,C.va=__param,C.ra=__awaiter);var D=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};la(D,Error);D.prototype.name="CustomError";var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var E=function(a,b){b.unshift(a);D.call(this,ma.apply(null,b));b.shift()};la(E,D);E.prototype.name="AssertionError";var na=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new E(""+e,f||[]);},F=function(a,b,c){a||na("",null,b,Array.prototype.slice.call(arguments,2))},G=function(a,b,c){A(a)||na("Expected function but got %s: %s.",[ha(a),a],b,Array.prototype.slice.call(arguments,2))};var H=function(a,b,c){this.ea=c;this.Y=a;this.ga=b;this.A=0;this.w=null};H.prototype.get=function(){var a;0<this.A?(this.A--,a=this.w,this.w=a.next,a.next=null):a=this.Y();return a};H.prototype.put=function(a){this.ga(a);this.A<this.ea&&(this.A++,a.next=this.w,this.w=a)};var I;a:{var oa=x.navigator;if(oa){var pa=oa.userAgent;if(pa){I=pa;break a}}I=""};var qa=function(a){x.setTimeout(function(){throw a;},0)},J,ra=function(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==I.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
"//"+b.location.host,a=B(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==I.indexOf("Trident")&&-1==I.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.N;c.N=null;a()}};return function(a){d.next={N:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){x.setTimeout(a,0)}};var K=function(){this.C=this.g=null},sa=new H(function(){return new L},function(a){a.reset()},100);K.prototype.add=function(a,b){var c=sa.get();c.set(a,b);this.C?this.C.next=c:(F(!this.g),this.g=c);this.C=c};K.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.C=null),a.next=null);return a};var L=function(){this.next=this.scope=this.H=null};L.prototype.set=function(a,b){this.H=a;this.scope=b;this.next=null};
L.prototype.reset=function(){this.next=this.scope=this.H=null};var O=function(a,b){M||ta();N||(M(),N=!0);ua.add(a,b)},M,ta=function(){var a=x.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);M=function(){b.then(va)}}else M=function(){var a=va,b;!(b=!A(x.setImmediate))&&(b=x.Window&&x.Window.prototype)&&(b=-1==I.indexOf("Edge")&&x.Window.prototype.setImmediate==x.setImmediate);b?(J||(J=ra()),J(a)):x.setImmediate(a)}},N=!1,ua=new K,va=function(){for(var a;a=ua.remove();){try{a.H.call(a.scope)}catch(b){qa(b)}sa.put(a)}N=!1};var Q=function(a,b){this.a=0;this.j=void 0;this.s=this.h=this.B=null;this.v=this.G=!1;if(a!=y)try{var c=this;a.call(b,function(a){P(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}P(c,3,a)})}catch(d){P(this,3,d)}},wa=function(){this.next=this.context=this.i=this.f=this.child=null;this.D=!1};wa.prototype.reset=function(){this.context=this.i=this.f=this.child=null;this.D=!1};
var xa=new H(function(){return new wa},function(a){a.reset()},100),ya=function(a,b,c){var d=xa.get();d.f=a;d.i=b;d.context=c;return d},Aa=function(a,b,c){za(a,b,c,null)||O(ka(b,a))};Q.prototype.then=function(a,b,c){null!=a&&G(a,"opt_onFulfilled should be a function.");null!=b&&G(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Ba(this,A(a)?a:null,A(b)?b:null,c)};Q.prototype.then=Q.prototype.then;Q.prototype.$goog_Thenable=!0;
Q.prototype.na=function(a,b){return Ba(this,null,a,b)};var Da=function(a,b){a.h||2!=a.a&&3!=a.a||Ca(a);F(null!=b.f);a.s?a.s.next=b:a.h=b;a.s=b},Ba=function(a,b,c,d){var e=ya(null,null,null);e.child=new Q(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(z){g(z)}}:a;e.i=c?function(b){try{var e=c.call(d,b);a(e)}catch(z){g(z)}}:g});e.child.B=a;Da(a,e);return e.child};Q.prototype.oa=function(a){F(1==this.a);this.a=0;P(this,2,a)};
Q.prototype.pa=function(a){F(1==this.a);this.a=0;P(this,3,a)};
var P=function(a,b,c){0==a.a&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.a=1,za(c,a.oa,a.pa,a)||(a.j=c,a.a=b,a.B=null,Ca(a),3!=b||Ea(a,c)))},za=function(a,b,c,d){if(a instanceof Q)return null!=b&&G(b,"opt_onFulfilled should be a function."),null!=c&&G(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Da(a,ya(b||y,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),
!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var f=a.then;if(A(f))return Ga(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1},Ga=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(l){k(l)}},Ca=function(a){a.G||(a.G=!0,O(a.aa,a))},Ha=function(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.s=null);null!=b&&F(null!=b.f);return b};
Q.prototype.aa=function(){for(var a;a=Ha(this);){var b=this.a,c=this.j;if(3==b&&a.i&&!a.D){var d;for(d=this;d&&d.v;d=d.B)d.v=!1}if(a.child)a.child.B=null,Ia(a,b,c);else try{a.D?a.f.call(a.context):Ia(a,b,c)}catch(e){Ja.call(null,e)}xa.put(a)}this.G=!1};var Ia=function(a,b,c){2==b?a.f.call(a.context,c):a.i&&a.i.call(a.context,c)},Ea=function(a,b){a.v=!0;O(function(){a.v&&Ja.call(null,b)})},Ja=qa;function R(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=R(a[c],b[c]));return a};Q.all=function(a){return new Q(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},k=0,l;k<a.length;k++)l=a[k],Aa(l,ka(f,k),g);else b(e)})};Q.resolve=function(a){if(a instanceof Q)return a;var b=new Q(y);P(b,2,a);return b};Q.reject=function(a){return new Q(function(b,c){c(a)})};Q.prototype["catch"]=Q.prototype.na;var S=Q;"undefined"!==typeof Promise&&(S=Promise);var Ka=S;function La(a,b){a=new T(a,b);return a.subscribe.bind(a)}var T=function(a,b){var c=this;this.b=[];this.T=0;this.task=Ka.resolve();this.u=!1;this.J=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};T.prototype.next=function(a){U(this,function(b){b.next(a)})};T.prototype.error=function(a){U(this,function(b){b.error(a)});this.close(a)};T.prototype.complete=function(){U(this,function(a){a.complete()});this.close()};
T.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Ma(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=Na);void 0===e.error&&(e.error=Na);void 0===e.complete&&(e.complete=Na);a=this.qa.bind(this,this.b.length);this.u&&this.task.then(function(){try{d.O?e.error(d.O):e.complete()}catch(f){}});this.b.push(e);return a};
T.prototype.qa=function(a){void 0!==this.b&&void 0!==this.b[a]&&(delete this.b[a],--this.T,0===this.T&&void 0!==this.J&&this.J(this))};var U=function(a,b){if(!a.u)for(var c=0;c<a.b.length;c++)Oa(a,c,b)},Oa=function(a,b,c){a.task.then(function(){if(void 0!==a.b&&void 0!==a.b[b])try{c(a.b[b])}catch(d){}})};T.prototype.close=function(a){var b=this;this.u||(this.u=!0,void 0!==a&&(this.O=a),this.task.then(function(){b.b=void 0;b.J=void 0}))};
function Ma(a){if("object"!==typeof a||null===a)return!1;for(var b=n(["next","error","complete"]),c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function Na(){};var Pa=Error.captureStackTrace,V=function(a,b){this.code=a;this.message=b;if(Pa)Pa(this,Qa.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};V.prototype=Object.create(Error.prototype);V.prototype.constructor=V;V.prototype.name="FirebaseError";var Qa=function(a,b,c){this.ja=a;this.ka=b;this.Z=c;this.pattern=/\{\$([^}]+)}/g};
Qa.prototype.create=function(a,b){void 0===b&&(b={});var c=this.Z[a];a=this.ja+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>"}),c=this.ka+": "+c+" ("+a+").",c=new V(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};var W=S,X=function(a,b,c){var d=this;this.P=c;this.S=!1;this.l={};this.I=b;this.fa=R(void 0,a);Object.keys(c.INTERNAL.factories).forEach(function(a){var b=c.INTERNAL.useAsService(d,a);null!==b&&(b=d.da.bind(d,b),d[a]=b)})};X.prototype.delete=function(){var a=this;return(new W(function(b){Y(a);b()})).then(function(){a.P.INTERNAL.removeApp(a.I);return W.all(Object.keys(a.l).map(function(b){return a.l[b].INTERNAL.delete()}))}).then(function(){a.S=!0;a.l={}})};
X.prototype.da=function(a){Y(this);void 0===this.l[a]&&(this.l[a]=this.P.INTERNAL.factories[a](this,this.ca.bind(this)));return this.l[a]};X.prototype.ca=function(a){R(this,a)};var Y=function(a){a.S&&Z(Ra("deleted",{name:a.I}))};h.Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.I}},options:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.fa}}});X.prototype.name&&X.prototype.options||X.prototype.delete||console.log("dc");
function Sa(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&Z("noApp",{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&f[d])f[d](b,a)})}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth","serverAuth"in e||Z("serverAuthMissing"));return c}var d={},e={},f={},g={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Z("bad-app-name",
{name:c+""});void 0!==d[c]&&Z("dupApp",{name:c});a=new X(a,c,g);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||R(a,{INTERNAL:{getToken:function(){return W.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:W,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,v){e[b]&&Z("dupService",{name:b});e[b]=c;v&&(f[b]=v);c=function(c){void 0===c&&(c=a());return c[b]()};void 0!==d&&R(c,d);return g[b]=c},createFirebaseNamespace:Sa,
extendNamespace:function(a){R(g,a)},createSubscribe:La,ErrorFactory:Qa,removeApp:function(a){b(d[a],"delete");delete d[a]},factories:e,useAsService:c,Promise:Q,deepExtend:R}};g["default"]=g;Object.defineProperty(g,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=X;return g}function Z(a,b){throw Error(Ra(a,b));}
function Ra(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered.",serverAuthMissing:"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."}[a];
return void 0===b?"Application Error: ("+a+")":b};"undefined"!==typeof firebase&&(firebase=Sa()); })();
firebase.SDK_VERSION = "3.5.0";
module.exports = firebase;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
var firebase = require('./app');
/*! @license Firebase v3.5.0
    Build: 3.5.0-rc.8
    Terms: https://developers.google.com/terms */
(function(){var h,aa=aa||{},l=this,ba=function(){},ca=function(){throw Error("unimplemented abstract method");},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=
typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a){return null===a},ea=function(a){return"array"==m(a)},fa=function(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length},n=function(a){return"string"==typeof a},ga=function(a){return"number"==typeof a},p=function(a){return"function"==m(a)},ha=function(a){var b=typeof a;
return"object"==b&&null!=a||"function"==b},ia=function(a,b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return q.apply(null,
arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.Vc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.df=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(u,Error);u.prototype.name="CustomError";var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},oa=/&/g,pa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,ta=/\x00/g,va=/[\x00&<>"']/,v=function(a,b){return-1!=a.indexOf(b)},wa=function(a,b){return a<b?-1:a>b?1:0};var xa=function(a,b){b.unshift(a);u.call(this,ma.apply(null,b));b.shift()};r(xa,u);xa.prototype.name="AssertionError";
var ya=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new xa(""+e,f||[]);},w=function(a,b,c){a||ya("",null,b,Array.prototype.slice.call(arguments,2))},za=function(a,b){throw new xa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Aa=function(a,b,c){ga(a)||ya("Expected number but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2));return a},Ba=function(a,b,c){n(a)||ya("Expected string but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,
2))},Ca=function(a,b,c){p(a)||ya("Expected function but got %s: %s.",[m(a),a],b,Array.prototype.slice.call(arguments,2))};var Da=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ea=function(a,b){for(var c=n(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Fa=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=n(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ga=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Ia=function(a){var b;a:{b=Ha;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]},Ja=function(a,b){return 0<=Da(a,b)},La=function(a,b){b=Da(a,b);var c;(c=0<=b)&&Ka(a,b);return c},Ka=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Ma=function(a,b){var c=0;Ea(a,function(d,e){b.call(void 0,d,e,a)&&Ka(a,e)&&c++})},Na=function(a){return Array.prototype.concat.apply(Array.prototype,
arguments)},Oa=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},Pa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},Qa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};var Ra=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Sa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Ta=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ua=function(a){for(var b in a)return!1;return!0},Va=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Wa=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
Ya=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Xa.length;f++)c=Xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Za;a:{var $a=l.navigator;if($a){var ab=$a.userAgent;if(ab){Za=ab;break a}}Za=""}var y=function(a){return v(Za,a)};var bb=function(a){bb[" "](a);return a};bb[" "]=ba;var db=function(a,b){var c=cb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var eb=y("Opera"),z=y("Trident")||y("MSIE"),fb=y("Edge"),gb=fb||z,hb=y("Gecko")&&!(v(Za.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),ib=v(Za.toLowerCase(),"webkit")&&!y("Edge"),jb=function(){var a=l.document;return a?a.documentMode:void 0},kb;
a:{var lb="",mb=function(){var a=Za;if(hb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ib)return/WebKit\/(\S+)/.exec(a);if(eb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();mb&&(lb=mb?mb[1]:"");if(z){var nb=jb();if(null!=nb&&nb>parseFloat(lb)){kb=String(nb);break a}}kb=lb}
var ob=kb,cb={},A=function(a){return db(a,function(){for(var b=0,c=na(String(ob)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=wa(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||wa(0==g[2].length,0==k[2].length)||wa(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})},pb;var qb=l.document;
pb=qb&&z?jb()||("CSS1Compat"==qb.compatMode?parseInt(ob,10):5):void 0;var rb=null,sb=null,ub=function(a){var b="";tb(a,function(a){b+=String.fromCharCode(a)});return b},tb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=sb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}vb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},vb=function(){if(!rb){rb={};sb={};for(var a=0;65>a;a++)rb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
sb[rb[a]]=a,62<=a&&(sb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var wb=!z||9<=Number(pb),xb=z&&!A("9");!ib||A("528");hb&&A("1.9b")||z&&A("8")||eb&&A("9.5")||ib&&A("528");hb&&!A("8")||z&&A("9");var yb=function(){this.Ba=this.Ba;this.Wb=this.Wb};yb.prototype.Ba=!1;yb.prototype.isDisposed=function(){return this.Ba};yb.prototype.Ra=function(){if(this.Wb)for(;this.Wb.length;)this.Wb.shift()()};var zb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Ya=!1;this.Bd=!0};zb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Bd=!1};var Ab=function(a,b){zb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.ob=this.state=null;a&&this.init(a,b)};r(Ab,zb);
Ab.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(hb){var e;a:{try{bb(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=ib||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=ib||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.ob=a;a.defaultPrevented&&
this.preventDefault()};Ab.prototype.preventDefault=function(){Ab.Vc.preventDefault.call(this);var a=this.ob;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,xb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Ab.prototype.le=function(){return this.ob};var Bb="closure_listenable_"+(1E6*Math.random()|0),Cb=0;var Db=function(a,b,c,d,e){this.listener=a;this.ac=null;this.src=b;this.type=c;this.Gb=!!d;this.Nb=e;this.key=++Cb;this.cb=this.Fb=!1},Eb=function(a){a.cb=!0;a.listener=null;a.ac=null;a.src=null;a.Nb=null};var Fb=function(a){this.src=a;this.A={};this.Cb=0};Fb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.A[f];a||(a=this.A[f]=[],this.Cb++);var g=Gb(a,b,d,e);-1<g?(b=a[g],c||(b.Fb=!1)):(b=new Db(b,this.src,f,!!d,e),b.Fb=c,a.push(b));return b};Fb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.A))return!1;var e=this.A[a];b=Gb(e,b,c,d);return-1<b?(Eb(e[b]),Ka(e,b),0==e.length&&(delete this.A[a],this.Cb--),!0):!1};
var Hb=function(a,b){var c=b.type;c in a.A&&La(a.A[c],b)&&(Eb(b),0==a.A[c].length&&(delete a.A[c],a.Cb--))};Fb.prototype.Ac=function(a,b,c,d){a=this.A[a.toString()];var e=-1;a&&(e=Gb(a,b,c,d));return-1<e?a[e]:null};var Gb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.cb&&f.listener==b&&f.Gb==!!c&&f.Nb==d)return e}return-1};var Ib="closure_lm_"+(1E6*Math.random()|0),Jb={},Kb=0,Lb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Lb(a,b[f],c,d,e);else c=Mb(c),a&&a[Bb]?a.listen(b,c,d,e):Nb(a,b,c,!1,d,e)},Nb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=Ob(a);k||(a[Ib]=k=new Fb(a));c=k.add(b,c,d,e,f);if(!c.ac){d=Pb();c.ac=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Qb(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
Kb++}},Pb=function(){var a=Rb,b=wb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Sb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Sb(a,b[f],c,d,e);else c=Mb(c),a&&a[Bb]?Tb(a,b,c,d,e):Nb(a,b,c,!0,d,e)},Ub=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Ub(a,b[f],c,d,e);else c=Mb(c),a&&a[Bb]?a.ba.remove(String(b),c,d,e):a&&(a=Ob(a))&&(b=a.Ac(b,c,!!d,e))&&Vb(b)},Vb=function(a){if(!ga(a)&&a&&!a.cb){var b=a.src;if(b&&
b[Bb])Hb(b.ba,a);else{var c=a.type,d=a.ac;b.removeEventListener?b.removeEventListener(c,d,a.Gb):b.detachEvent&&b.detachEvent(Qb(c),d);Kb--;(c=Ob(b))?(Hb(c,a),0==c.Cb&&(c.src=null,b[Ib]=null)):Eb(a)}}},Qb=function(a){return a in Jb?Jb[a]:Jb[a]="on"+a},Xb=function(a,b,c,d){var e=!0;if(a=Ob(a))if(b=a.A[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.Gb==c&&!f.cb&&(f=Wb(f,d),e=e&&!1!==f)}return e},Wb=function(a,b){var c=a.listener,d=a.Nb||a.src;a.Fb&&Vb(a);return c.call(d,b)},Rb=function(a,
b){if(a.cb)return!0;if(!wb){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Ab(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Ya&&0<=e;e--){b.currentTarget=d[e];var f=Xb(d[e],a,!0,b),c=c&&f}for(e=0;!b.Ya&&e<d.length;e++)b.currentTarget=
d[e],f=Xb(d[e],a,!1,b),c=c&&f}return c}return Wb(a,new Ab(b,this))},Ob=function(a){a=a[Ib];return a instanceof Fb?a:null},Yb="__closure_events_fn_"+(1E9*Math.random()>>>0),Mb=function(a){w(a,"Listener can not be null.");if(p(a))return a;w(a.handleEvent,"An object listener must have handleEvent method.");a[Yb]||(a[Yb]=function(b){return a.handleEvent(b)});return a[Yb]};var Zb=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var ac=function(){this.kc="";this.Td=$b};ac.prototype.Qb=!0;ac.prototype.Lb=function(){return this.kc};ac.prototype.toString=function(){return"Const{"+this.kc+"}"};var bc=function(a){if(a instanceof ac&&a.constructor===ac&&a.Td===$b)return a.kc;za("expected object of type Const, got '"+a+"'");return"type_error:Const"},$b={},cc=function(a){var b=new ac;b.kc=a;return b};cc("");var B=function(){this.la="";this.Sd=dc};B.prototype.Qb=!0;B.prototype.Lb=function(){return this.la};B.prototype.toString=function(){return"SafeUrl{"+this.la+"}"};
var ec=function(a){if(a instanceof B&&a.constructor===B&&a.Sd===dc)return a.la;za("expected object of type SafeUrl, got '"+a+"' of type "+m(a));return"type_error:SafeUrl"},fc=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,hc=function(a){if(a instanceof B)return a;a=a.Qb?a.Lb():String(a);fc.test(a)||(a="about:invalid#zClosurez");return gc(a)},dc={},gc=function(a){var b=new B;b.la=a;return b};gc("about:blank");var ic=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))},jc=function(a){a=String(a);if(ic(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},mc=function(a){var b=[];kc(new lc,a,b);return b.join("")},lc=function(){this.ec=void 0},
kc=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],kc(a,a.ec?a.ec.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),nc(d,c),c.push(":"),kc(a,a.ec?a.ec.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":nc(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},oc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,nc=function(a,b){b.push('"',a.replace(pc,function(a){var b=oc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),
oc[a]=b);return b}),'"')};var qc=function(){};qc.prototype.Zc=null;qc.prototype.nb=ca;var rc=function(a){return a.Zc||(a.Zc=a.Tb())};qc.prototype.Tb=ca;var sc,tc=function(){};r(tc,qc);tc.prototype.nb=function(){var a=uc(this);return a?new ActiveXObject(a):new XMLHttpRequest};tc.prototype.Tb=function(){var a={};uc(this)&&(a[0]=!0,a[1]=!0);return a};
var uc=function(a){if(!a.od&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.od=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.od};sc=new tc;var vc=function(){};r(vc,qc);vc.prototype.nb=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new wc;throw Error("Unsupported browser");};vc.prototype.Tb=function(){return{}};
var wc=function(){this.qa=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.qa.onload=q(this.pe,this);this.qa.onerror=q(this.md,this);this.qa.onprogress=q(this.qe,this);this.qa.ontimeout=q(this.re,this)};h=wc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.qa.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.qa.send(a);else throw Error("Only string data is supported");else this.qa.send()};h.abort=function(){this.qa.abort()};h.setRequestHeader=function(){};h.pe=function(){this.status=200;this.responseText=this.qa.responseText;xc(this,4)};h.md=function(){this.status=500;this.responseText="";xc(this,4)};h.re=function(){this.md()};h.qe=function(){this.status=200;xc(this,1)};var xc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var C=function(a,b){this.h=[];this.g=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.h[d]=e,c=!1)}},yc={},zc=function(a){if(-128<=a&&128>a){var b=yc[a];if(b)return b}b=new C([a|0],0>a?-1:0);-128<=a&&128>a&&(yc[a]=b);return b},F=function(a){if(isNaN(a)||!isFinite(a))return D;if(0>a)return E(F(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=4294967296;return new C(b,0)},Ac=function(a,b){if(0==a.length)throw Error("number format error: empty string");b=b||10;if(2>b||36<b)throw Error("radix out of range: "+
b);if("-"==a.charAt(0))return E(Ac(a.substring(1),b));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=F(Math.pow(b,8)),d=D,e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),g=parseInt(a.substring(e,e+f),b);8>f?(f=F(Math.pow(b,f)),d=d.multiply(f).add(F(g))):(d=d.multiply(c),d=d.add(F(g)))}return d},D=zc(0),Bc=zc(1),Cc=zc(16777216),Dc=function(a){if(-1==a.g)return-Dc(E(a));for(var b=0,c=1,d=0;d<a.h.length;d++)b+=Ec(a,d)*c,c*=4294967296;return b};
C.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(Fc(this))return"0";if(-1==this.g)return"-"+E(this).toString(a);for(var b=F(Math.pow(a,6)),c=this,d="";;){var e=Gc(c,b),c=Hc(c,e.multiply(b)),f=((0<c.h.length?c.h[0]:c.g)>>>0).toString(a),c=e;if(Fc(c))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};
var G=function(a,b){return 0>b?0:b<a.h.length?a.h[b]:a.g},Ec=function(a,b){a=G(a,b);return 0<=a?a:4294967296+a},Fc=function(a){if(0!=a.g)return!1;for(var b=0;b<a.h.length;b++)if(0!=a.h[b])return!1;return!0};C.prototype.Ib=function(a){if(this.g!=a.g)return!1;for(var b=Math.max(this.h.length,a.h.length),c=0;c<b;c++)if(G(this,c)!=G(a,c))return!1;return!0};C.prototype.compare=function(a){a=Hc(this,a);return-1==a.g?-1:Fc(a)?0:1};
var E=function(a){for(var b=a.h.length,c=[],d=0;d<b;d++)c[d]=~a.h[d];return(new C(c,~a.g)).add(Bc)};C.prototype.add=function(a){for(var b=Math.max(this.h.length,a.h.length),c=[],d=0,e=0;e<=b;e++){var f=d+(G(this,e)&65535)+(G(a,e)&65535),g=(f>>>16)+(G(this,e)>>>16)+(G(a,e)>>>16),d=g>>>16,f=f&65535,g=g&65535;c[e]=g<<16|f}return new C(c,c[c.length-1]&-2147483648?-1:0)};var Hc=function(a,b){return a.add(E(b))};
C.prototype.multiply=function(a){if(Fc(this)||Fc(a))return D;if(-1==this.g)return-1==a.g?E(this).multiply(E(a)):E(E(this).multiply(a));if(-1==a.g)return E(this.multiply(E(a)));if(0>this.compare(Cc)&&0>a.compare(Cc))return F(Dc(this)*Dc(a));for(var b=this.h.length+a.h.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.h.length;d++)for(var e=0;e<a.h.length;e++){var f=G(this,d)>>>16,g=G(this,d)&65535,k=G(a,e)>>>16,t=G(a,e)&65535;c[2*d+2*e]+=g*t;Ic(c,2*d+2*e);c[2*d+2*e+1]+=f*t;Ic(c,2*d+2*e+1);c[2*d+2*e+
1]+=g*k;Ic(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;Ic(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new C(c,0)};
var Ic=function(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535,b++},Gc=function(a,b){if(Fc(b))throw Error("division by zero");if(Fc(a))return D;if(-1==a.g)return-1==b.g?Gc(E(a),E(b)):E(Gc(E(a),b));if(-1==b.g)return E(Gc(a,E(b)));if(30<a.h.length){if(-1==a.g||-1==b.g)throw Error("slowDivide_ only works with positive integers.");for(var c=Bc;0>=b.compare(a);)c=c.shiftLeft(1),b=b.shiftLeft(1);var d=Jc(c,1),e=Jc(b,1),f;b=Jc(b,2);for(c=Jc(c,2);!Fc(b);)f=e.add(b),0>=f.compare(a)&&(d=d.add(c),
e=f),b=Jc(b,1),c=Jc(c,1);return d}for(c=D;0<=a.compare(b);){d=Math.max(1,Math.floor(Dc(a)/Dc(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);f=F(d);for(var g=f.multiply(b);-1==g.g||0<g.compare(a);)d-=e,f=F(d),g=f.multiply(b);Fc(f)&&(f=Bc);c=c.add(f);a=Hc(a,g)}return c},Kc=function(a,b){for(var c=Math.max(a.h.length,b.h.length),d=[],e=0;e<c;e++)d[e]=G(a,e)|G(b,e);return new C(d,a.g|b.g)};
C.prototype.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.h.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?G(this,e-b)<<a|G(this,e-b-1)>>>32-a:G(this,e-b);return new C(d,this.g)};var Jc=function(a,b){var c=b>>5;b%=32;for(var d=a.h.length-c,e=[],f=0;f<d;f++)e[f]=0<b?G(a,f+c)>>>b|G(a,f+c+1)<<32-b:G(a,f+c);return new C(e,a.g)};var Lc=function(a,b){this.sb=a;this.pa=b};Lc.prototype.Ib=function(a){return this.pa==a.pa&&this.sb.Ib(Wa(a.sb))};Lc.prototype.toString=ca;
var Oc=function(a){try{var b;if(b=0==a.lastIndexOf("[",0)){var c=a.length-1;b=0<=c&&a.indexOf("]",c)==c}return b?new Mc(a.substring(1,a.length-1)):new Nc(a)}catch(d){return null}},Nc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0>a.compare(D)||0<a.compare(Pc))throw Error("The address does not look like an IPv4.");b=Wa(a)}else{if(!Qc.test(a))throw Error(a+" does not look like an IPv4 address.");var c=a.split(".");if(4!=c.length)throw Error(a+" does not look like an IPv4 address.");for(var d=0;d<
c.length;d++){var e;e=c[d];var f=Number(e);e=0==f&&/^[\s\xa0]*$/.test(e)?NaN:f;if(isNaN(e)||0>e||255<e||1!=c[d].length&&0==c[d].lastIndexOf("0",0))throw Error("In "+a+", octet "+d+" is not valid");e=F(e);b=Kc(b.shiftLeft(8),e)}}Lc.call(this,b,4)};r(Nc,Lc);var Qc=/^[0-9.]*$/,Pc=Hc(Bc.shiftLeft(32),Bc);Nc.prototype.toString=function(){if(this.Ea)return this.Ea;for(var a=Ec(this.sb,0),b=[],c=3;0<=c;c--)b[c]=String(a&255),a>>>=8;return this.Ea=b.join(".")};
var Mc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0>a.compare(D)||0<a.compare(Rc))throw Error("The address does not look like a valid IPv6.");b=Wa(a)}else{if(!Sc.test(a))throw Error(a+" is not a valid IPv6 address.");var c=a.split(":");if(-1!=c[c.length-1].indexOf(".")){a=Ec(Wa((new Nc(c[c.length-1])).sb),0);var d=[];d.push((a>>>16&65535).toString(16));d.push((a&65535).toString(16));Ka(c,c.length-1);Qa(c,d);a=c.join(":")}d=a.split("::");if(2<d.length||1==d.length&&8!=c.length)throw Error(a+
" is not a valid IPv6 address.");if(1<d.length){c=d[0].split(":");d=d[1].split(":");1==c.length&&""==c[0]&&(c=[]);1==d.length&&""==d[0]&&(d=[]);var e=8-(c.length+d.length);if(1>e)c=[];else{for(var f=[],g=0;g<e;g++)f[g]="0";c=Oa(c,f,d)}}if(8!=c.length)throw Error(a+" is not a valid IPv6 address");for(d=0;d<c.length;d++){e=Ac(c[d],16);if(0>e.compare(D)||0<e.compare(Tc))throw Error(c[d]+" in "+a+" is not a valid hextet.");b=Kc(b.shiftLeft(16),e)}}Lc.call(this,b,6)};r(Mc,Lc);
var Sc=/^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,Tc=zc(65535),Rc=Hc(Bc.shiftLeft(128),Bc);Mc.prototype.toString=function(){if(this.Ea)return this.Ea;for(var a=[],b=3;0<=b;b--){var c=Ec(this.sb,b),d=c&65535;a.push((c>>>16).toString(16));a.push(d.toString(16))}for(var c=b=-1,e=d=0,f=0;f<a.length;f++)"0"==a[f]?(e++,-1==c&&(c=f),e>d&&(d=e,b=c)):(c=-1,e=0);0<d&&(b+d==a.length&&a.push(""),a.splice(b,d,""),0==b&&(a=[""].concat(a)));return this.Ea=a.join(":")};var Vc=function(){this.Zb="";this.Ud=Uc};Vc.prototype.Qb=!0;Vc.prototype.Lb=function(){return this.Zb};Vc.prototype.toString=function(){return"TrustedResourceUrl{"+this.Zb+"}"};var Uc={};var Xc=function(){this.la="";this.Rd=Wc};Xc.prototype.Qb=!0;Xc.prototype.Lb=function(){return this.la};Xc.prototype.toString=function(){return"SafeHtml{"+this.la+"}"};var Yc=function(a){if(a instanceof Xc&&a.constructor===Xc&&a.Rd===Wc)return a.la;za("expected object of type SafeHtml, got '"+a+"' of type "+m(a));return"type_error:SafeHtml"},Wc={};Xc.prototype.ye=function(a){this.la=a;return this};!hb&&!z||z&&9<=Number(pb)||hb&&A("1.9.1");z&&A("9");var $c=function(a,b){Ra(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Zc.hasOwnProperty(d)?a.setAttribute(Zc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Zc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var ad=function(a,b,c){this.Ae=c;this.ae=a;this.Le=b;this.Vb=0;this.Ob=null};ad.prototype.get=function(){var a;0<this.Vb?(this.Vb--,a=this.Ob,this.Ob=a.next,a.next=null):a=this.ae();return a};ad.prototype.put=function(a){this.Le(a);this.Vb<this.Ae&&(this.Vb++,a.next=this.Ob,this.Ob=a)};var bd=function(a){l.setTimeout(function(){throw a;},0)},cd,dd=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=q(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.cd;c.cd=null;a()}};return function(a){d.next={cd:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var ed=function(){this.pc=this.Ma=null},gd=new ad(function(){return new fd},function(a){a.reset()},100);ed.prototype.add=function(a,b){var c=gd.get();c.set(a,b);this.pc?this.pc.next=c:(w(!this.Ma),this.Ma=c);this.pc=c};ed.prototype.remove=function(){var a=null;this.Ma&&(a=this.Ma,this.Ma=this.Ma.next,this.Ma||(this.pc=null),a.next=null);return a};var fd=function(){this.next=this.scope=this.zc=null};fd.prototype.set=function(a,b){this.zc=a;this.scope=b;this.next=null};
fd.prototype.reset=function(){this.next=this.scope=this.zc=null};var ld=function(a,b){hd||id();jd||(hd(),jd=!0);kd.add(a,b)},hd,id=function(){var a=l.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);hd=function(){b.then(md)}}else hd=function(){var a=md;!p(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(cd||(cd=dd()),cd(a)):l.setImmediate(a)}},jd=!1,kd=new ed,md=function(){for(var a;a=kd.remove();){try{a.zc.call(a.scope)}catch(b){bd(b)}gd.put(a)}jd=!1};var nd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},od=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var H=function(a,b){this.J=0;this.ma=void 0;this.Pa=this.ha=this.s=null;this.Mb=this.yc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){pd(c,2,a)},function(a){if(!(a instanceof qd))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}pd(c,3,a)})}catch(d){pd(this,3,d)}},rd=function(){this.next=this.context=this.Va=this.Ga=this.child=null;this.lb=!1};rd.prototype.reset=function(){this.context=this.Va=this.Ga=this.child=null;this.lb=!1};
var sd=new ad(function(){return new rd},function(a){a.reset()},100),td=function(a,b,c){var d=sd.get();d.Ga=a;d.Va=b;d.context=c;return d},I=function(a){if(a instanceof H)return a;var b=new H(ba);pd(b,2,a);return b},J=function(a){return new H(function(b,c){c(a)})},vd=function(a,b,c){ud(a,b,c,null)||ld(ka(b,a))},wd=function(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{ke:!0,value:f}:{ke:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],vd(g,ka(e,f,!0),
ka(e,f,!1));else b(d)})};H.prototype.then=function(a,b,c){null!=a&&Ca(a,"opt_onFulfilled should be a function.");null!=b&&Ca(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return xd(this,p(a)?a:null,p(b)?b:null,c)};nd(H);var zd=function(a,b){b=td(b,b,void 0);b.lb=!0;yd(a,b);return a};H.prototype.l=function(a,b){return xd(this,null,a,b)};H.prototype.cancel=function(a){0==this.J&&ld(function(){var b=new qd(a);Ad(this,b)},this)};
var Ad=function(a,b){if(0==a.J)if(a.s){var c=a.s;if(c.ha){for(var d=0,e=null,f=null,g=c.ha;g&&(g.lb||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.J&&1==d?Ad(c,b):(f?(d=f,w(c.ha),w(null!=d),d.next==c.Pa&&(c.Pa=d),d.next=d.next.next):Bd(c),Cd(c,e,3,b)))}a.s=null}else pd(a,3,b)},yd=function(a,b){a.ha||2!=a.J&&3!=a.J||Dd(a);w(null!=b.Ga);a.Pa?a.Pa.next=b:a.ha=b;a.Pa=b},xd=function(a,b,c,d){var e=td(null,null,null);e.child=new H(function(a,g){e.Ga=b?function(c){try{var e=b.call(d,c);a(e)}catch(ua){g(ua)}}:
a;e.Va=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof qd?g(b):a(e)}catch(ua){g(ua)}}:g});e.child.s=a;yd(a,e);return e.child};H.prototype.Ue=function(a){w(1==this.J);this.J=0;pd(this,2,a)};H.prototype.Ve=function(a){w(1==this.J);this.J=0;pd(this,3,a)};
var pd=function(a,b,c){0==a.J&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.J=1,ud(c,a.Ue,a.Ve,a)||(a.ma=c,a.J=b,a.s=null,Dd(a),3!=b||c instanceof qd||Ed(a,c)))},ud=function(a,b,c,d){if(a instanceof H)return null!=b&&Ca(b,"opt_onFulfilled should be a function."),null!=c&&Ca(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),yd(a,td(b||ba,c||null,d)),!0;if(od(a))return a.then(b,c,d),!0;if(ha(a))try{var e=a.then;if(p(e))return Fd(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Fd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(t){k(t)}},Dd=function(a){a.yc||(a.yc=!0,ld(a.fe,a))},Bd=function(a){var b=null;a.ha&&(b=a.ha,a.ha=b.next,b.next=null);a.ha||(a.Pa=null);null!=b&&w(null!=b.Ga);return b};H.prototype.fe=function(){for(var a;a=Bd(this);)Cd(this,a,this.J,this.ma);this.yc=!1};
var Cd=function(a,b,c,d){if(3==c&&b.Va&&!b.lb)for(;a&&a.Mb;a=a.s)a.Mb=!1;if(b.child)b.child.s=null,Gd(b,c,d);else try{b.lb?b.Ga.call(b.context):Gd(b,c,d)}catch(e){Hd.call(null,e)}sd.put(b)},Gd=function(a,b,c){2==b?a.Ga.call(a.context,c):a.Va&&a.Va.call(a.context,c)},Ed=function(a,b){a.Mb=!0;ld(function(){a.Mb&&Hd.call(null,b)})},Hd=bd,qd=function(a){u.call(this,a)};r(qd,u);qd.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Id=function(a,b){this.gc=[];this.ud=a;this.fd=b||null;this.qb=this.Ta=!1;this.ma=void 0;this.Tc=this.Yc=this.tc=!1;this.nc=0;this.s=null;this.uc=0};Id.prototype.cancel=function(a){if(this.Ta)this.ma instanceof Id&&this.ma.cancel();else{if(this.s){var b=this.s;delete this.s;a?b.cancel(a):(b.uc--,0>=b.uc&&b.cancel())}this.ud?this.ud.call(this.fd,this):this.Tc=!0;this.Ta||Jd(this,new Kd)}};Id.prototype.dd=function(a,b){this.tc=!1;Ld(this,a,b)};
var Ld=function(a,b,c){a.Ta=!0;a.ma=c;a.qb=!b;Md(a)},Od=function(a){if(a.Ta){if(!a.Tc)throw new Nd;a.Tc=!1}};Id.prototype.callback=function(a){Od(this);Pd(a);Ld(this,!0,a)};
var Jd=function(a,b){Od(a);Pd(b);Ld(a,!1,b)},Pd=function(a){w(!(a instanceof Id),"An execution sequence may not be initiated with a blocking Deferred.")},Td=function(a){var b=Qd("https://apis.google.com/js/client.js?onload="+Rd);Sd(b,null,a,void 0)},Sd=function(a,b,c,d){w(!a.Yc,"Blocking Deferreds can not be re-used");a.gc.push([b,c,d]);a.Ta&&Md(a)};Id.prototype.then=function(a,b,c){var d,e,f=new H(function(a,b){d=a;e=b});Sd(this,d,function(a){a instanceof Kd?f.cancel():e(a)});return f.then(a,b,c)};
nd(Id);
var Ud=function(a){return Ga(a.gc,function(a){return p(a[1])})},Md=function(a){if(a.nc&&a.Ta&&Ud(a)){var b=a.nc,c=Vd[b];c&&(l.clearTimeout(c.rb),delete Vd[b]);a.nc=0}a.s&&(a.s.uc--,delete a.s);for(var b=a.ma,d=c=!1;a.gc.length&&!a.tc;){var e=a.gc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.qb?g:f)try{var k=f.call(e||a.fd,b);void 0!==k&&(a.qb=a.qb&&(k==b||k instanceof Error),a.ma=b=k);if(od(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.tc=!0}catch(t){b=t,a.qb=!0,Ud(a)||(c=!0)}}a.ma=b;d&&
(k=q(a.dd,a,!0),d=q(a.dd,a,!1),b instanceof Id?(Sd(b,k,d),b.Yc=!0):b.then(k,d));c&&(b=new Wd(b),Vd[b.rb]=b,a.nc=b.rb)},Nd=function(){u.call(this)};r(Nd,u);Nd.prototype.message="Deferred has already fired";Nd.prototype.name="AlreadyCalledError";var Kd=function(){u.call(this)};r(Kd,u);Kd.prototype.message="Deferred was canceled";Kd.prototype.name="CanceledError";var Wd=function(a){this.rb=l.setTimeout(q(this.Te,this),0);this.N=a};
Wd.prototype.Te=function(){w(Vd[this.rb],"Cannot throw an error that is not scheduled.");delete Vd[this.rb];throw this.N;};var Vd={};var Qd=function(a){var b=new Vc;b.Zb=a;return Xd(b)},Xd=function(a){var b={},c=b.document||document,d;a instanceof Vc&&a.constructor===Vc&&a.Ud===Uc?d=a.Zb:(za("expected object of type TrustedResourceUrl, got '"+a+"' of type "+m(a)),d="type_error:TrustedResourceUrl");var e=document.createElement("SCRIPT");a={Cd:e,Bb:void 0};var f=new Id(Yd,a),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){Zd(e,!0);Jd(f,new $d(1,"Timeout reached for loading script "+d))},k),a.Bb=g);e.onload=
e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Zd(e,b.ef||!1,g),f.callback(null))};e.onerror=function(){Zd(e,!0,g);Jd(f,new $d(0,"Error while loading script "+d))};a=b.attributes||{};Ya(a,{type:"text/javascript",charset:"UTF-8",src:d});$c(e,a);ae(c).appendChild(e);return f},ae=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},Yd=function(){if(this&&this.Cd){var a=this.Cd;a&&"SCRIPT"==a.tagName&&
Zd(a,!0,this.Bb)}},Zd=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},$d=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a};r($d,u);var be=function(){yb.call(this);this.ba=new Fb(this);this.Xd=this;this.Ic=null};r(be,yb);be.prototype[Bb]=!0;h=be.prototype;h.addEventListener=function(a,b,c,d){Lb(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){Ub(this,a,b,c,d)};
h.dispatchEvent=function(a){ce(this);var b,c=this.Ic;if(c){b=[];for(var d=1;c;c=c.Ic)b.push(c),w(1E3>++d,"infinite loop")}c=this.Xd;d=a.type||a;if(n(a))a=new zb(a,c);else if(a instanceof zb)a.target=a.target||c;else{var e=a;a=new zb(d,c);Ya(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.Ya&&0<=g;g--)f=a.currentTarget=b[g],e=de(f,d,!0,a)&&e;a.Ya||(f=a.currentTarget=c,e=de(f,d,!0,a)&&e,a.Ya||(e=de(f,d,!1,a)&&e));if(b)for(g=0;!a.Ya&&g<b.length;g++)f=a.currentTarget=b[g],e=de(f,d,!1,a)&&e;return e};
h.Ra=function(){be.Vc.Ra.call(this);if(this.ba){var a=this.ba,b=0,c;for(c in a.A){for(var d=a.A[c],e=0;e<d.length;e++)++b,Eb(d[e]);delete a.A[c];a.Cb--}}this.Ic=null};h.listen=function(a,b,c,d){ce(this);return this.ba.add(String(a),b,!1,c,d)};
var Tb=function(a,b,c,d,e){a.ba.add(String(b),c,!0,d,e)},de=function(a,b,c,d){b=a.ba.A[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.cb&&g.Gb==c){var k=g.listener,t=g.Nb||g.src;g.Fb&&Hb(a.ba,g);e=!1!==k.call(t,d)&&e}}return e&&0!=d.Bd};be.prototype.Ac=function(a,b,c,d){return this.ba.Ac(String(a),b,c,d)};var ce=function(a){w(a.ba,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var ee="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},fe=function(){};fe.prototype.next=function(){throw ee;};fe.prototype.Wd=function(){return this};var ge=function(a,b){this.ca={};this.v=[];this.pa=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=ge.prototype;h.ld=function(){return this.i};h.X=function(){he(this);for(var a=[],b=0;b<this.v.length;b++)a.push(this.ca[this.v[b]]);return a};h.ja=function(){he(this);return this.v.concat()};h.mb=function(a){return ie(this.ca,a)};
h.Ib=function(a,b){if(this===a)return!0;if(this.i!=a.ld())return!1;b=b||je;he(this);for(var c,d=0;c=this.v[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};var je=function(a,b){return a===b};ge.prototype.remove=function(a){return ie(this.ca,a)?(delete this.ca[a],this.i--,this.pa++,this.v.length>2*this.i&&he(this),!0):!1};
var he=function(a){if(a.i!=a.v.length){for(var b=0,c=0;b<a.v.length;){var d=a.v[b];ie(a.ca,d)&&(a.v[c++]=d);b++}a.v.length=c}if(a.i!=a.v.length){for(var e={},c=b=0;b<a.v.length;)d=a.v[b],ie(e,d)||(a.v[c++]=d,e[d]=1),b++;a.v.length=c}};h=ge.prototype;h.get=function(a,b){return ie(this.ca,a)?this.ca[a]:b};h.set=function(a,b){ie(this.ca,a)||(this.i++,this.v.push(a),this.pa++);this.ca[a]=b};
h.addAll=function(a){var b;a instanceof ge?(b=a.ja(),a=a.X()):(b=Ta(a),a=Sa(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ja(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new ge(this)};h.Wd=function(a){he(this);var b=0,c=this.pa,d=this,e=new fe;e.next=function(){if(c!=d.pa)throw Error("The map has changed since the iterator was created");if(b>=d.v.length)throw ee;var e=d.v[b++];return a?e:d.ca[e]};return e};
var ie=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ke=function(a){if(a.X&&"function"==typeof a.X)return a.X();if(n(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Sa(a)},le=function(a){if(a.ja&&"function"==typeof a.ja)return a.ja();if(!a.X||"function"!=typeof a.X){if(fa(a)||n(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Ta(a)}},me=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||n(a))x(a,b,void 0);else for(var c=le(a),d=ke(a),e=
d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var ne=function(a,b,c,d,e){this.reset(a,b,c,d,e)};ne.prototype.hd=null;var oe=0;ne.prototype.reset=function(a,b,c,d,e){"number"==typeof e||oe++;d||la();this.ub=a;this.Ee=b;delete this.hd};ne.prototype.Fd=function(a){this.ub=a};var pe=function(a){this.Fe=a;this.nd=this.vc=this.ub=this.s=null},qe=function(a,b){this.name=a;this.value=b};qe.prototype.toString=function(){return this.name};var re=new qe("SEVERE",1E3),se=new qe("CONFIG",700),te=new qe("FINE",500);pe.prototype.getParent=function(){return this.s};pe.prototype.Fd=function(a){this.ub=a};var ue=function(a){if(a.ub)return a.ub;if(a.s)return ue(a.s);za("Root logger has no level set.");return null};
pe.prototype.log=function(a,b,c){if(a.value>=ue(this).value)for(p(b)&&(b=b()),a=new ne(a,String(b),this.Fe),c&&(a.hd=c),c="log:"+a.Ee,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.nd)for(var e=0,f;f=b.nd[e];e++)f(d);c=c.getParent()}};
var ve={},we=null,xe=function(a){we||(we=new pe(""),ve[""]=we,we.Fd(se));var b;if(!(b=ve[a])){b=new pe(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=xe(a.substr(0,c));c.vc||(c.vc={});c.vc[d]=b;b.s=c;ve[a]=b}return b};var K=function(a,b){a&&a.log(te,b,void 0)};var ye=function(a,b,c){if(p(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},ze=function(a){var b=null;return(new H(function(c,d){b=ye(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).l(function(a){l.clearTimeout(b);throw a;})};var Ae=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,Be=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var L=function(a){be.call(this);this.headers=new ge;this.rc=a||null;this.ra=!1;this.qc=this.b=null;this.tb=this.sd=this.Ub="";this.Da=this.Dc=this.Rb=this.xc=!1;this.ib=0;this.mc=null;this.Ad="";this.oc=this.Ke=this.Nd=!1};r(L,be);var Ce=L.prototype,De=xe("goog.net.XhrIo");Ce.T=De;var Ee=/^https?$/i,Fe=["POST","PUT"];
L.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Ub+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Ub=a;this.tb="";this.sd=b;this.xc=!1;this.ra=!0;this.b=this.rc?this.rc.nb():sc.nb();this.qc=this.rc?rc(this.rc):rc(sc);this.b.onreadystatechange=q(this.xd,this);this.Ke&&"onprogress"in this.b&&(this.b.onprogress=q(function(a){this.wd(a,!0)},this),this.b.upload&&(this.b.upload.onprogress=q(this.wd,this)));try{K(this.T,Ge(this,"Opening Xhr")),
this.Dc=!0,this.b.open(b,String(a),!0),this.Dc=!1}catch(f){K(this.T,Ge(this,"Error opening Xhr: "+f.message));this.N(5,f);return}a=c||"";var e=this.headers.clone();d&&me(d,function(a,b){e.set(b,a)});d=Ia(e.ja());c=l.FormData&&a instanceof l.FormData;!Ja(Fe,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.Ad&&(this.b.responseType=this.Ad);"withCredentials"in this.b&&this.b.withCredentials!==this.Nd&&(this.b.withCredentials=
this.Nd);try{He(this),0<this.ib&&(this.oc=Ie(this.b),K(this.T,Ge(this,"Will abort after "+this.ib+"ms if incomplete, xhr2 "+this.oc)),this.oc?(this.b.timeout=this.ib,this.b.ontimeout=q(this.Bb,this)):this.mc=ye(this.Bb,this.ib,this)),K(this.T,Ge(this,"Sending request")),this.Rb=!0,this.b.send(a),this.Rb=!1}catch(f){K(this.T,Ge(this,"Send error: "+f.message)),this.N(5,f)}};var Ie=function(a){return z&&A(9)&&ga(a.timeout)&&void 0!==a.ontimeout},Ha=function(a){return"content-type"==a.toLowerCase()};
L.prototype.Bb=function(){"undefined"!=typeof aa&&this.b&&(this.tb="Timed out after "+this.ib+"ms, aborting",K(this.T,Ge(this,this.tb)),this.dispatchEvent("timeout"),this.abort(8))};L.prototype.N=function(a,b){this.ra=!1;this.b&&(this.Da=!0,this.b.abort(),this.Da=!1);this.tb=b;Je(this);Ke(this)};var Je=function(a){a.xc||(a.xc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
L.prototype.abort=function(){this.b&&this.ra&&(K(this.T,Ge(this,"Aborting")),this.ra=!1,this.Da=!0,this.b.abort(),this.Da=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Ke(this))};L.prototype.Ra=function(){this.b&&(this.ra&&(this.ra=!1,this.Da=!0,this.b.abort(),this.Da=!1),Ke(this,!0));L.Vc.Ra.call(this)};L.prototype.xd=function(){this.isDisposed()||(this.Dc||this.Rb||this.Da?Le(this):this.Ie())};L.prototype.Ie=function(){Le(this)};
var Le=function(a){if(a.ra&&"undefined"!=typeof aa)if(a.qc[1]&&4==Me(a)&&2==Ne(a))K(a.T,Ge(a,"Local request error detected and ignored"));else if(a.Rb&&4==Me(a))ye(a.xd,0,a);else if(a.dispatchEvent("readystatechange"),4==Me(a)){K(a.T,Ge(a,"Request complete"));a.ra=!1;try{var b=Ne(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Ub).match(Ae)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
f=g.substr(0,g.length-1);e=!Ee.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<Me(a)?a.b.statusText:""}catch(t){K(a.T,"Can not get status: "+t.message),k=""}a.tb=k+" ["+Ne(a)+"]";Je(a)}}finally{Ke(a)}}};L.prototype.wd=function(a,b){w("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Oe(a,"progress"));this.dispatchEvent(Oe(a,b?"downloadprogress":"uploadprogress"))};
var Oe=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Ke=function(a,b){if(a.b){He(a);var c=a.b,d=a.qc[0]?ba:null;a.b=null;a.qc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.T)&&a.log(re,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},He=function(a){a.b&&a.oc&&(a.b.ontimeout=null);ga(a.mc)&&(l.clearTimeout(a.mc),a.mc=null)},Me=function(a){return a.b?a.b.readyState:0},Ne=function(a){try{return 2<Me(a)?
a.b.status:-1}catch(b){return-1}},Pe=function(a){try{return a.b?a.b.responseText:""}catch(b){return K(a.T,"Can not get responseText: "+b.message),""}},Ge=function(a,b){return b+" ["+a.sd+" "+a.Ub+" "+Ne(a)+"]"};var Qe=function(a,b){this.ia=this.Ka=this.na="";this.Xa=null;this.Ca=this.ta="";this.P=this.ze=!1;var c;a instanceof Qe?(this.P=void 0!==b?b:a.P,Re(this,a.na),c=a.Ka,M(this),this.Ka=c,Se(this,a.ia),Te(this,a.Xa),Ue(this,a.ta),Ve(this,a.$.clone()),a=a.Ca,M(this),this.Ca=a):a&&(c=String(a).match(Ae))?(this.P=!!b,Re(this,c[1]||"",!0),a=c[2]||"",M(this),this.Ka=We(a),Se(this,c[3]||"",!0),Te(this,c[4]),Ue(this,c[5]||"",!0),Ve(this,c[6]||"",!0),a=c[7]||"",M(this),this.Ca=We(a)):(this.P=!!b,this.$=new N(null,
0,this.P))};Qe.prototype.toString=function(){var a=[],b=this.na;b&&a.push(Xe(b,Ye,!0),":");var c=this.ia;if(c||"file"==b)a.push("//"),(b=this.Ka)&&a.push(Xe(b,Ye,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Xa,null!=c&&a.push(":",String(c));if(c=this.ta)this.ia&&"/"!=c.charAt(0)&&a.push("/"),a.push(Xe(c,"/"==c.charAt(0)?Ze:$e,!0));(c=this.$.toString())&&a.push("?",c);(c=this.Ca)&&a.push("#",Xe(c,af));return a.join("")};
Qe.prototype.resolve=function(a){var b=this.clone(),c=!!a.na;c?Re(b,a.na):c=!!a.Ka;if(c){var d=a.Ka;M(b);b.Ka=d}else c=!!a.ia;c?Se(b,a.ia):c=null!=a.Xa;d=a.ta;if(c)Te(b,a.Xa);else if(c=!!a.ta){if("/"!=d.charAt(0))if(this.ia&&!this.ta)d="/"+d;else{var e=b.ta.lastIndexOf("/");-1!=e&&(d=b.ta.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(v(e,"./")||v(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?Ue(b,d):c=""!==a.$.toString();c?Ve(b,We(a.$.toString())):c=!!a.Ca;c&&(a=a.Ca,M(b),b.Ca=a);return b};Qe.prototype.clone=function(){return new Qe(this)};
var Re=function(a,b,c){M(a);a.na=c?We(b,!0):b;a.na&&(a.na=a.na.replace(/:$/,""))},Se=function(a,b,c){M(a);a.ia=c?We(b,!0):b},Te=function(a,b){M(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Xa=b}else a.Xa=null},Ue=function(a,b,c){M(a);a.ta=c?We(b,!0):b},Ve=function(a,b,c){M(a);b instanceof N?(a.$=b,a.$.Sc(a.P)):(c||(b=Xe(b,bf)),a.$=new N(b,0,a.P))},O=function(a,b,c){M(a);a.$.set(b,c)},cf=function(a,b){M(a);a.$.remove(b)},M=function(a){if(a.ze)throw Error("Tried to modify a read-only Uri");
};Qe.prototype.Sc=function(a){this.P=a;this.$&&this.$.Sc(a);return this};
var df=function(a){return a instanceof Qe?a.clone():new Qe(a,void 0)},ef=function(a,b){var c=new Qe(null,void 0);Re(c,"https");a&&Se(c,a);b&&Ue(c,b);return c},We=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Xe=function(a,b,c){return n(a)?(a=encodeURI(a).replace(b,ff),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},ff=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Ye=/[#\/\?@]/g,$e=/[\#\?:]/g,Ze=/[\#\?]/g,bf=/[\#\?@]/g,
af=/#/g,N=function(a,b,c){this.i=this.j=null;this.M=a||null;this.P=!!c},gf=function(a){a.j||(a.j=new ge,a.i=0,a.M&&Be(a.M,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},jf=function(a){var b=le(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new N(null,0,void 0);a=ke(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ea(f)?hf(c,e,f):c.add(e,f)}return c};h=N.prototype;h.ld=function(){gf(this);return this.i};
h.add=function(a,b){gf(this);this.M=null;a=this.O(a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.i=Aa(this.i)+1;return this};h.remove=function(a){gf(this);a=this.O(a);return this.j.mb(a)?(this.M=null,this.i=Aa(this.i)-this.j.get(a).length,this.j.remove(a)):!1};h.mb=function(a){gf(this);a=this.O(a);return this.j.mb(a)};h.ja=function(){gf(this);for(var a=this.j.X(),b=this.j.ja(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.X=function(a){gf(this);var b=[];if(n(a))this.mb(a)&&(b=Na(b,this.j.get(this.O(a))));else{a=this.j.X();for(var c=0;c<a.length;c++)b=Na(b,a[c])}return b};h.set=function(a,b){gf(this);this.M=null;a=this.O(a);this.mb(a)&&(this.i=Aa(this.i)-this.j.get(a).length);this.j.set(a,[b]);this.i=Aa(this.i)+1;return this};h.get=function(a,b){a=a?this.X(a):[];return 0<a.length?String(a[0]):b};var hf=function(a,b,c){a.remove(b);0<c.length&&(a.M=null,a.j.set(a.O(b),Pa(c)),a.i=Aa(a.i)+c.length)};
N.prototype.toString=function(){if(this.M)return this.M;if(!this.j)return"";for(var a=[],b=this.j.ja(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.X(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.M=a.join("&")};N.prototype.clone=function(){var a=new N;a.M=this.M;this.j&&(a.j=this.j.clone(),a.i=this.i);return a};N.prototype.O=function(a){a=String(a);this.P&&(a=a.toLowerCase());return a};
N.prototype.Sc=function(a){a&&!this.P&&(gf(this),this.M=null,this.j.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),hf(this,b,a))},this));this.P=a};var lf=function(){var a=kf();return z&&!!pb&&11==pb||/Edge\/\d+/.test(a)},mf=function(){return l.window&&l.window.location.href||""},nf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ea(a[d])?Va(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<nf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},pf=function(){var a;a=kf();a="Chrome"!=of(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],
10):null;return a&&30>a?!1:!z||!pb||9<pb},qf=function(a){a=a||l.window;try{a.close()}catch(b){}},rf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};d&&(b.target=d);"Firefox"==of(kf())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof B?c:hc("undefined"!=
typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+"="+(d[g]?1:0))}g=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),"undefined"!=typeof HTMLAnchorElement&&"undefined"!=typeof Location&&"undefined"!=typeof Element&&(e=g&&(g instanceof
HTMLAnchorElement||!(g instanceof Location||g instanceof Element)),f=ha(g)?g.constructor.displayName||g.constructor.name||Object.prototype.toString.call(g):void 0===g?"undefined":null===g?"null":typeof g,w(e,"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",f)),b=b instanceof B?b:hc(b),g.href=ec(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?
(g=a.open("",c,g),d=ec(b),g&&(gb&&v(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=cc("b/12014412, meta tag with sanitized URL"),va.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(oa,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(pa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(qa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(ra,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(sa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ta,"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Ba(bc(a),"must provide justification"),
w(!/^[\s\xa0]*$/.test(bc(a)),"must provide non-empty justification"),g.document.write(Yc((new Xc).ye(d))),g.document.close())):g=a.open(ec(b),c,g);if(g)try{g.focus()}catch(k){}return g},sf=function(a){return new H(function(b){var c=function(){ze(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},tf=function(){var a=null;return(new H(function(b){"complete"==l.document.readyState?b():(a=function(){b()},Sb(window,"load",a))})).l(function(b){Ub(window,"load",a);throw b;})},uf=function(a){switch(a||
l.navigator&&l.navigator.product||""){case "ReactNative":return"ReactNative";default:return"undefined"!==typeof l.process?"Node":"Browser"}},vf=function(){var a=uf();return"ReactNative"===a||"Node"===a},of=function(a){var b=a.toLowerCase();if(v(b,"opera/")||v(b,"opr/")||v(b,"opios/"))return"Opera";if(v(b,"iemobile"))return"IEMobile";if(v(b,"msie")||v(b,"trident/"))return"IE";if(v(b,"edge/"))return"Edge";if(v(b,"firefox/"))return"Firefox";if(v(b,"silk/"))return"Silk";if(v(b,"blackberry"))return"Blackberry";
if(v(b,"webos"))return"Webos";if(!v(b,"safari/")||v(b,"chrome/")||v(b,"crios/")||v(b,"android"))if(!v(b,"chrome/")&&!v(b,"crios/")||v(b,"edge/")){if(v(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},wf=function(a){var b=uf(void 0);return("Browser"===b?of(kf()):b)+"/JsCore/"+a},kf=function(){return l.navigator&&l.navigator.userAgent||""},xf=function(a){a=a.split(".");for(var b=l,c=0;c<a.length&&
"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},zf=function(){var a;if(!(a=!l.location||!l.location.protocol||"http:"!=l.location.protocol&&"https:"!=l.location.protocol||vf())){var b;a:{try{var c=l.localStorage,d=yf();if(c){c.setItem(d,"1");c.removeItem(d);b=lf()?!!l.indexedDB:!0;break a}}catch(e){}b=!1}a=!b}return!a},Af=function(a){a=a||kf();var b=(a||kf()).toLowerCase();return b.match(/android/)||b.match(/webos/)||b.match(/iphone|ipad|ipod/)||b.match(/blackberry/)||
b.match(/windows phone/)||b.match(/iemobile/)||"Firefox"==of(a)?!1:!0},Bf=function(a){return"undefined"===typeof a?null:mc(a)},Cf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},Df=function(a){if(null!==a){var b;try{b=jc(a)}catch(c){try{b=JSON.parse(a)}catch(d){throw c;}}return b}},yf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},Ef=function(a){a=a||kf();return"Safari"==of(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?
!1:!0},Ff=function(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null};var Gf;try{var Hf={};Object.defineProperty(Hf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Hf,"abcd",{configurable:!0,enumerable:!0,value:2});Gf=2==Hf.abcd}catch(a){Gf=!1}
var P=function(a,b,c){Gf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},If=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&P(a,c,b[c])},Jf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},Kf=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0};var Lf=["client_id","response_type","scope","redirect_uri","state"],Mf={Od:{xb:500,wb:600,providerId:"facebook.com",fc:Lf},Pd:{xb:500,wb:620,providerId:"github.com",fc:Lf},Qd:{xb:515,wb:680,providerId:"google.com",fc:Lf},Vd:{xb:485,wb:705,providerId:"twitter.com",fc:"oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")}},Nf=function(a){for(var b in Mf)if(Mf[b].providerId==a)return Mf[b];return null},Of=function(a){return(a=Nf(a))&&
a.fc||[]};var Q=function(a,b){this.code="auth/"+a;this.message=b||Pf[a]||""};r(Q,Error);Q.prototype.K=function(){return{name:this.code,code:this.code,message:this.message}};
var Pf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.",
"invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
"user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported."};var Qf=function(a,b,c,d,e){this.ya=a;this.W=b||null;this.kb=c||null;this.hc=d||null;this.N=e||null;if(this.kb||this.N){if(this.kb&&this.N)throw new Q("invalid-auth-event");if(this.kb&&!this.hc)throw new Q("invalid-auth-event");}else throw new Q("invalid-auth-event");};Qf.prototype.getError=function(){return this.N};Qf.prototype.K=function(){return{type:this.ya,eventId:this.W,urlResponse:this.kb,sessionId:this.hc,error:this.N&&this.N.K()}};var Rf=function(a){var b="unauthorized-domain",c=void 0,d=df(a);a=d.ia;d=d.na;"http"!=d&&"https"!=d?b="operation-not-supported-in-this-environment":c=ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a);Q.call(this,b,c)};r(Rf,Q);var Sf=function(a){this.De=a.sub;la();this.Hb=a.email||null};var Tf=function(a,b,c,d){var e={};ha(c)?e=c:b&&n(c)&&n(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&&n(c)&&(e={accessToken:c});if(b||!e.idToken&&!e.accessToken)if(b&&e.oauthToken&&e.oauthTokenSecret)P(this,"accessToken",e.oauthToken),P(this,"secret",e.oauthTokenSecret);else{if(b)throw new Q("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");throw new Q("argument-error","credential failed: expected 1 argument (the OAuth access token).");}else e.idToken&&P(this,
"idToken",e.idToken),e.accessToken&&P(this,"accessToken",e.accessToken);P(this,"provider",a)};Tf.prototype.Kb=function(a){return Uf(a,Vf(this))};Tf.prototype.td=function(a,b){var c=Vf(this);c.idToken=b;return Wf(a,c)};var Vf=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:jf(b).toString(),requestUri:zf()?mf():"http://localhost"}};
Tf.prototype.K=function(){var a={provider:this.provider};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var Xf=function(a,b,c){var d=!!b,e=c||[];b=function(){If(this,{providerId:a,isOAuthProvider:!0});this.Rc=[];this.ed={};"google.com"==a&&this.addScope("profile")};d||(b.prototype.addScope=function(a){Ja(this.Rc,a)||this.Rc.push(a)});b.prototype.setCustomParameters=function(a){this.ed=Wa(a)};b.prototype.me=function(){var a=Cf(this.ed),b;for(b in a)a[b]=a[b].toString();a=Wa(a);for(b=0;b<e.length;b++){var c=e[b];c in a&&delete a[c]}return a};b.prototype.ne=function(){return Pa(this.Rc)};b.credential=
function(b,c){return new Tf(a,d,b,c)};If(b,{PROVIDER_ID:a});return b},Yf=Xf("facebook.com",!1,Of("facebook.com"));Yf.prototype.addScope=Yf.prototype.addScope||void 0;var Zf=Xf("github.com",!1,Of("github.com"));Zf.prototype.addScope=Zf.prototype.addScope||void 0;var $f=Xf("google.com",!1,Of("google.com"));$f.prototype.addScope=$f.prototype.addScope||void 0;
$f.credential=function(a,b){if(!a&&!b)throw new Q("argument-error","credential failed: must provide the ID token and/or the access token.");return new Tf("google.com",!1,ha(a)?a:{idToken:a||null,accessToken:b||null})};var ag=Xf("twitter.com",!0,Of("twitter.com")),bg=function(a,b){this.Hb=a;this.Jc=b;P(this,"provider","password")};bg.prototype.Kb=function(a){return R(a,cg,{email:this.Hb,password:this.Jc})};bg.prototype.td=function(a,b){return R(a,dg,{idToken:b,email:this.Hb,password:this.Jc})};
bg.prototype.K=function(){return{email:this.Hb,password:this.Jc}};var eg=function(){If(this,{providerId:"password",isOAuthProvider:!1})};If(eg,{PROVIDER_ID:"password"});var fg={cf:eg,Od:Yf,Qd:$f,Pd:Zf,Vd:ag},gg=function(a){var b=a&&a.providerId;if(!b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;for(var e in fg)if(fg[e].PROVIDER_ID==b)try{return fg[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d})}catch(f){break}return null};var hg=function(a,b,c,d){Q.call(this,a,d);P(this,"email",b);P(this,"credential",c)};r(hg,Q);hg.prototype.K=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.K();b&&(Ya(a,b),a.providerId=b.provider,delete a.provider);return a};var ig=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));return a.email?new hg(b,a.email,gg(a),a.message):new Q(b,a.message||void 0)}return null};var jg=function(a){this.bf=a};r(jg,qc);jg.prototype.nb=function(){return new this.bf};jg.prototype.Tb=function(){return{}};
var S=function(a,b,c){var d;d="Node"==uf();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new Q("internal-error","The XMLHttpRequest compatibility library was not found.");this.m=a;a=b||{};this.Ne=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.Oe=a.secureTokenTimeout||1E4;this.Dd=Wa(a.secureTokenHeaders||kg);this.ie=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.je=a.firebaseTimeout||
1E4;this.kd=Wa(a.firebaseHeaders||lg);c&&(this.kd["X-Client-Version"]=c,this.Dd["X-Client-Version"]=c);this.$d=new vc;this.af=new jg(d)},mg,kg={"Content-Type":"application/x-www-form-urlencoded"},lg={"Content-Type":"application/json"},og=function(a,b,c,d,e,f,g){pf()?a=q(a.Qe,a):(mg||(mg=new H(function(a,b){ng(a,b)})),a=q(a.Pe,a));a(b,c,d,e,f,g)};
S.prototype.Qe=function(a,b,c,d,e,f){var g="Node"==uf(),k=vf()?g?new L(this.af):new L:new L(this.$d),t;f&&(k.ib=Math.max(0,f),t=setTimeout(function(){k.dispatchEvent("timeout")},f));k.listen("complete",function(){t&&clearTimeout(t);var a=null;try{var c;c=this.b?jc(this.b.responseText):void 0;a=c||null}catch(Xi){try{a=JSON.parse(Pe(this))||null}catch(Yi){a=null}}b&&b(a)});Tb(k,"ready",function(){t&&clearTimeout(t);this.Ba||(this.Ba=!0,this.Ra())});Tb(k,"timeout",function(){t&&clearTimeout(t);this.Ba||
(this.Ba=!0,this.Ra());b&&b(null)});k.send(a,c,d,e)};var Rd="__fcb"+Math.floor(1E6*Math.random()).toString(),ng=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Rd]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},Td(function(){b(Error("CORS_UNSUPPORTED"))}))};
S.prototype.Pe=function(a,b,c,d,e){var f=this;mg.then(function(){window.gapi.client.setApiKey(f.m);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).l(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
var qg=function(a,b){return new H(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?og(a,a.Ne+"?key="+encodeURIComponent(a.m),function(a){a?a.error?d(pg(a)):a.access_token&&a.refresh_token?c(a):d(new Q("internal-error")):d(new Q("network-request-failed"))},"POST",jf(b).toString(),a.Dd,a.Oe):d(new Q("internal-error"))})},rg=function(a,b,c,d,e){var f=a.ie+b+"?key="+encodeURIComponent(a.m);e&&(f+="&cb="+la().toString());return new H(function(b,e){og(a,
f,function(a){a?a.error?e(pg(a)):b(a):e(new Q("network-request-failed"))},c,mc(Cf(d)),a.kd,a.je)})},sg=function(a){if(!Zb.test(a.email))throw new Q("invalid-email");},tg=function(a){"email"in a&&sg(a)},vg=function(a,b){var c=zf()?mf():"http://localhost";return R(a,ug,{identifier:b,continueUri:c}).then(function(a){return a.allProviders||[]})},xg=function(a){return R(a,wg,{}).then(function(a){return a.authorizedDomains||[]})},yg=function(a){if(!a.idToken)throw new Q("internal-error");};
S.prototype.signInAnonymously=function(){return R(this,zg,{})};S.prototype.updateEmail=function(a,b){return R(this,Ag,{idToken:a,email:b})};S.prototype.updatePassword=function(a,b){return R(this,dg,{idToken:a,password:b})};var Bg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};S.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Ra(Bg,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return R(this,Ag,c)};
S.prototype.sendPasswordResetEmail=function(a){return R(this,Cg,{requestType:"PASSWORD_RESET",email:a})};S.prototype.sendEmailVerification=function(a){return R(this,Dg,{requestType:"VERIFY_EMAIL",idToken:a})};
var Fg=function(a,b,c){return R(a,Eg,{idToken:b,deleteProvider:c})},Gg=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new Q("internal-error");},Hg=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=ig(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=ig(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=ig(a));if(b)throw b;if(!a.idToken)throw new Q("internal-error");},Uf=function(a,
b){b.returnIdpCredential=!0;return R(a,Ig,b)},Wf=function(a,b){b.returnIdpCredential=!0;return R(a,Jg,b)},Kg=function(a){if(!a.oobCode)throw new Q("invalid-action-code");};S.prototype.confirmPasswordReset=function(a,b){return R(this,Lg,{oobCode:a,newPassword:b})};S.prototype.checkActionCode=function(a){return R(this,Mg,{oobCode:a})};S.prototype.applyActionCode=function(a){return R(this,Ng,{oobCode:a})};
var Ng={endpoint:"setAccountInfo",I:Kg,gb:"email"},Mg={endpoint:"resetPassword",I:Kg,wa:function(a){if(!Zb.test(a.email))throw new Q("internal-error");}},Og={endpoint:"signupNewUser",I:function(a){sg(a);if(!a.password)throw new Q("weak-password");},wa:yg,xa:!0},ug={endpoint:"createAuthUri"},Pg={endpoint:"deleteAccount",eb:["idToken"]},Eg={endpoint:"setAccountInfo",eb:["idToken","deleteProvider"],I:function(a){if(!ea(a.deleteProvider))throw new Q("internal-error");}},Qg={endpoint:"getAccountInfo"},
Dg={endpoint:"getOobConfirmationCode",eb:["idToken","requestType"],I:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new Q("internal-error");},gb:"email"},Cg={endpoint:"getOobConfirmationCode",eb:["requestType"],I:function(a){if("PASSWORD_RESET"!=a.requestType)throw new Q("internal-error");sg(a)},gb:"email"},wg={Zd:!0,endpoint:"getProjectConfig",ue:"GET"},Lg={endpoint:"resetPassword",I:Kg,gb:"email"},Ag={endpoint:"setAccountInfo",eb:["idToken"],I:tg,xa:!0},dg={endpoint:"setAccountInfo",eb:["idToken"],
I:function(a){tg(a);if(!a.password)throw new Q("weak-password");},wa:yg,xa:!0},zg={endpoint:"signupNewUser",wa:yg,xa:!0},Ig={endpoint:"verifyAssertion",I:Gg,wa:Hg,xa:!0},Jg={endpoint:"verifyAssertion",I:function(a){Gg(a);if(!a.idToken)throw new Q("internal-error");},wa:Hg,xa:!0},Rg={endpoint:"verifyCustomToken",I:function(a){if(!a.token)throw new Q("invalid-custom-token");},wa:yg,xa:!0},cg={endpoint:"verifyPassword",I:function(a){sg(a);if(!a.password)throw new Q("wrong-password");},wa:yg,xa:!0},R=
function(a,b,c){if(!Kf(c,b.eb))return J(new Q("internal-error"));var d=b.ue||"POST",e;return I(c).then(b.I).then(function(){b.xa&&(c.returnSecureToken=!0);return rg(a,b.endpoint,d,c,b.Zd||!1)}).then(function(a){return e=a}).then(b.wa).then(function(){if(!b.gb)return e;if(!(b.gb in e))throw new Q("internal-error");return e[b.gb]})},pg=function(a){var b,c;c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?
new Q(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",
FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",
USER_CANCELLED:"user-cancelled"};b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new Q(d[e],b);!b&&a&&(b=Bf(a));return new Q("internal-error",b)};var Sg=function(a){this.U=a};Sg.prototype.value=function(){return this.U};Sg.prototype.Gd=function(a){this.U.style=a;return this};var Tg=function(a){this.U=a||{}};Tg.prototype.value=function(){return this.U};Tg.prototype.Gd=function(a){this.U.style=a;return this};var Vg=function(a){this.$e=a;this.Cc=null;this.vd=Ug(this)};Vg.prototype.Hc=function(){return this.vd};
var Wg=function(a){var b=new Tg;b.U.where=document.body;b.U.url=a.$e;b.U.messageHandlersFilter=xf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.U.attributes=b.U.attributes||{};(new Sg(b.U.attributes)).Gd({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.U.dontclear=!0;return b},Ug=function(a){return Xg().then(function(){return new H(function(b,c){xf("gapi.iframes.getContext")().open(Wg(a).value(),function(d){a.Cc=d;a.Cc.restyle({setHideOnLeave:!1});var e=setTimeout(function(){c(Error("Network Error"))},
5E3),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})},Yg=function(a,b){a.vd.then(function(){a.Cc.register("authEvent",b,xf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Zg="__iframefcb"+Math.floor(1E6*Math.random()).toString(),Xg=function(){return new H(function(a,b){var c=function(){Ff();xf("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Ff();b(Error("Network Error"))},timeout:3E3})};xf("gapi.iframes.Iframe")?a():xf("gapi.load")?c():
(l[Zg]=function(){xf("gapi.load")?c():b(Error("Network Error"))},I(Qd("https://apis.google.com/js/api.js?onload="+Zg)).l(function(){b(Error("Network Error"))}))})};var $g=function(a,b,c){this.C=a;this.m=b;this.F=c;this.La=null;this.u=ef(this.C,"/__/auth/iframe");O(this.u,"apiKey",this.m);O(this.u,"appName",this.F)};$g.prototype.setVersion=function(a){this.La=a;return this};$g.prototype.toString=function(){this.La?O(this.u,"v",this.La):cf(this.u,"v");return this.u.toString()};
var ah=function(a,b,c,d,e){this.C=a;this.m=b;this.F=c;this.Yd=d;this.La=this.W=this.Pc=null;this.$b=e;this.u=ef(this.C,"/__/auth/handler");O(this.u,"apiKey",this.m);O(this.u,"appName",this.F);O(this.u,"authType",this.Yd)};ah.prototype.setVersion=function(a){this.La=a;return this};
ah.prototype.toString=function(){if(this.$b.isOAuthProvider){O(this.u,"providerId",this.$b.providerId);var a=this.$b.ne();a&&a.length&&O(this.u,"scopes",a.join(","));a=this.$b.me();Ua(a)||O(this.u,"customParameters",Bf(a))}this.Pc?O(this.u,"redirectUrl",this.Pc):cf(this.u,"redirectUrl");this.W?O(this.u,"eventId",this.W):cf(this.u,"eventId");this.La?O(this.u,"v",this.La):cf(this.u,"v");return this.u.toString()};
var ch=function(a,b,c,d){this.C=a;this.m=b;this.F=c;d=this.Aa=d||null;this.ve=(new $g(a,b,c)).setVersion(d).toString();this.pd=new Vg(this.ve);this.Db=[];bh(this)};ch.prototype.Hc=function(){return this.pd.Hc()};
var dh=function(a,b,c,d,e,f,g,k){a=new ah(a,b,c,d,e);a.Pc=f;a.W=g;return a.setVersion(k).toString()},bh=function(a){Yg(a.pd,function(b){var c={};if(b&&b.authEvent){var d=!1;b=b.authEvent||{};if(b.type){if(c=b.error)var e=(c=b.error)&&(c.name||c.code),c=e?new Q(e.substring(5),c.message):null;b=new Qf(b.type,b.eventId,b.urlResponse,b.sessionId,c)}else b=null;for(c=0;c<a.Db.length;c++)d=a.Db[c](b)||d;c={};c.status=d?"ACK":"ERROR";return I(c)}c.status="ERROR";return I(c)})},eh=function(a,b){Ma(a.Db,function(a){return a==
b})};var fh=function(a){this.w=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.w)throw new Q("internal-error","The React Native compatibility library was not found.");};h=fh.prototype;h.get=function(a){return I(this.w.getItem(a)).then(function(a){return a&&Df(a)})};h.set=function(a,b){return I(this.w.setItem(a,Bf(b)))};h.remove=function(a){return I(this.w.removeItem(a))};h.Na=function(){};h.bb=function(){};var gh=function(){this.w={}};h=gh.prototype;h.get=function(a){return I(this.w[a])};h.set=function(a,b){this.w[a]=b;return I()};h.remove=function(a){delete this.w[a];return I()};h.Na=function(){};h.bb=function(){};var ih=function(){if(!hh()){if("Node"==uf())throw new Q("internal-error","The LocalStorage compatibility library was not found.");throw new Q("web-storage-unsupported");}this.w=l.localStorage||firebase.INTERNAL.node.localStorage},hh=function(){var a="Node"==uf(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=ih.prototype;
h.get=function(a){var b=this;return I().then(function(){var c=b.w.getItem(a);return Df(c)})};h.set=function(a,b){var c=this;return I().then(function(){var d=Bf(b);null===d?c.remove(a):c.w.setItem(a,d)})};h.remove=function(a){var b=this;return I().then(function(){b.w.removeItem(a)})};h.Na=function(a){l.window&&Lb(l.window,"storage",a)};h.bb=function(a){l.window&&Ub(l.window,"storage",a)};var jh=function(){this.w={}};h=jh.prototype;h.get=function(){return I(null)};h.set=function(){return I()};h.remove=function(){return I()};h.Na=function(){};h.bb=function(){};var lh=function(){if(!kh()){if("Node"==uf())throw new Q("internal-error","The SessionStorage compatibility library was not found.");throw new Q("web-storage-unsupported");}this.w=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},kh=function(){var a="Node"==uf(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=lh.prototype;
h.get=function(a){var b=this;return I().then(function(){var c=b.w.getItem(a);return Df(c)})};h.set=function(a,b){var c=this;return I().then(function(){var d=Bf(b);null===d?c.remove(a):c.w.setItem(a,d)})};h.remove=function(a){var b=this;return I().then(function(){b.w.removeItem(a)})};h.Na=function(){};h.bb=function(){};var mh=function(a,b,c,d,e,f){if(!window.indexedDB)throw new Q("web-storage-unsupported");this.be=a;this.Gc=b;this.wc=c;this.Md=d;this.pa=e;this.S={};this.zb=[];this.vb=0;this.we=f||l.indexedDB},nh,oh=function(a){return new H(function(b,c){var d=a.we.open(a.be,a.pa);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Gc,{keyPath:a.wc})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},ph=function(a){a.qd||(a.qd=
oh(a));return a.qd},qh=function(a,b){return b.objectStore(a.Gc)},rh=function(a,b,c){return b.transaction([a.Gc],c?"readwrite":"readonly")},sh=function(a){return new H(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=mh.prototype;
h.set=function(a,b){var c=!1,d,e=this;return zd(ph(this).then(function(b){d=b;b=qh(e,rh(e,d,!0));return sh(b.get(a))}).then(function(f){var g=qh(e,rh(e,d,!0));if(f)return f.value=b,sh(g.put(f));e.vb++;c=!0;f={};f[e.wc]=a;f[e.Md]=b;return sh(g.add(f))}).then(function(){e.S[a]=b}),function(){c&&e.vb--})};h.get=function(a){var b=this;return ph(this).then(function(c){return sh(qh(b,rh(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.remove=function(a){var b=!1,c=this;return zd(ph(this).then(function(d){b=!0;c.vb++;return sh(qh(c,rh(c,d,!0))["delete"](a))}).then(function(){delete c.S[a]}),function(){b&&c.vb--})};
h.Se=function(){var a=this;return ph(this).then(function(b){var c=qh(a,rh(a,b,!1));return c.getAll?sh(c.getAll()):new H(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.vb){for(d=0;d<b.length;d++)c[b[d][a.wc]]=b[d][a.Md];d=nf(a.S,c);a.S=c}return d})};h.Na=function(a){0==this.zb.length&&this.Uc();this.zb.push(a)};
h.bb=function(a){Ma(this.zb,function(b){return b==a});0==this.zb.length&&this.jc()};h.Uc=function(){var a=this;this.jc();var b=function(){a.Lc=ze(800).then(q(a.Se,a)).then(function(b){0<b.length&&x(a.zb,function(a){a(b)})}).then(b).l(function(a){"STOP_EVENT"!=a.message&&b()});return a.Lc};b()};h.jc=function(){this.Lc&&this.Lc.cancel("STOP_EVENT")};var wh=function(){this.gd={Browser:th,Node:uh,ReactNative:vh}[uf()]},xh,th={Z:ih,Wc:lh},uh={Z:ih,Wc:lh},vh={Z:fh,Wc:jh};var yh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),T=function(a,b){return{name:a||"",fa:"a valid string",optional:!!b,ga:n}},U=function(a){return{name:a||"",fa:"a valid object",optional:!1,ga:ha}},zh=function(a,b){return{name:a||"",fa:"a function",optional:!!b,ga:p}},Ah=function(){return{name:"",fa:"null",optional:!1,ga:da}},Bh=function(){return{name:"credential",fa:"a valid credential",optional:!1,ga:function(a){return!(!a||!a.Kb)}}},Ch=function(){return{name:"authProvider",
fa:"a valid Auth provider",optional:!1,ga:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},Dh=function(a,b,c,d){return{name:c||"",fa:a.fa+" or "+b.fa,optional:!!d,ga:function(c){return a.ga(c)||b.ga(c)}}};var Fh=function(a,b){for(var c in b){var d=b[c].name;a[d]=Eh(d,a[c],b[c].a)}},V=function(a,b,c,d){a[b]=Eh(b,c,d)},Eh=function(a,b,c){if(!c)return b;var d=Gh(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var t=!1,ua=0;ua<c.length;ua++)if(c[ua].optional)t=!0;else{if(t)throw new Q("internal-error","Argument validator encountered a required argument after an optional argument.");k++}t=c.length;if(e.length<k||t<e.length)e="Expected "+(k==
t?1==k?"1 argument":k+" arguments":k+"-"+t+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(t=c[k].optional&&void 0===e[k],!c[k].ga(e[k])&&!t){e=c[k];if(0>k||k>=yh.length)throw new Q("internal-error","Argument validator received an unsupported number of arguments.");e=yh[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.fa+".";break a}e=null}}if(e)throw new Q("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
b.prototype[e];return a},Gh=function(a){a=a.split(".");return a[a.length-1]};var Hh=function(a,b,c,d){this.Ge=a;this.Ed=b;this.Me=c;this.hb=d;this.R={};xh||(xh=new wh);a=xh;try{var e;lf()?(nh||(nh=new mh("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),e=nh):e=new a.gd.Z;this.Wa=e}catch(f){this.Wa=new gh,this.hb=!0}try{this.lc=new a.gd.Wc}catch(f){this.lc=new gh}this.Hd=q(this.Id,this);this.S={}},Ih,Jh=function(){Ih||(Ih=new Hh("firebase",":",!Ef(kf())&&l.window&&l.window!=l.window.top?!0:!1,Af()));return Ih};h=Hh.prototype;
h.O=function(a,b){return this.Ge+this.Ed+a.name+(b?this.Ed+b:"")};h.get=function(a,b){return(a.Z?this.Wa:this.lc).get(this.O(a,b))};h.remove=function(a,b){b=this.O(a,b);a.Z&&!this.hb&&(this.S[b]=null);return(a.Z?this.Wa:this.lc).remove(b)};h.set=function(a,b,c){var d=this.O(a,c),e=this,f=a.Z?this.Wa:this.lc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.Z&&!this.hb&&(e.S[d]=b)})};
h.addListener=function(a,b,c){a=this.O(a,b);this.hb||(this.S[a]=l.localStorage.getItem(a));Ua(this.R)&&this.Uc();this.R[a]||(this.R[a]=[]);this.R[a].push(c)};h.removeListener=function(a,b,c){a=this.O(a,b);this.R[a]&&(Ma(this.R[a],function(a){return a==c}),0==this.R[a].length&&delete this.R[a]);Ua(this.R)&&this.jc()};h.Uc=function(){this.Wa.Na(this.Hd);this.hb||Kh(this)};
var Kh=function(a){Lh(a);a.Fc=setInterval(function(){for(var b in a.R){var c=l.localStorage.getItem(b);c!=a.S[b]&&(a.S[b]=c,c=new Ab({type:"storage",key:b,target:window,oldValue:a.S[b],newValue:c}),a.Id(c))}},1E3)},Lh=function(a){a.Fc&&(clearInterval(a.Fc),a.Fc=null)};Hh.prototype.jc=function(){this.Wa.bb(this.Hd);this.hb||Lh(this)};
Hh.prototype.Id=function(a){if(a&&a.le){var b=a.ob.key;if(this.Me){var c=l.localStorage.getItem(b);a=a.ob.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.S[b]=l.localStorage.getItem(b);this.ad(b)}else x(a,q(this.ad,this))};Hh.prototype.ad=function(a){this.R[a]&&x(this.R[a],function(a){a()})};var Mh=function(a){this.D=a;this.B=Jh()},Nh={name:"pendingRedirect",Z:!1},Oh=function(a){return a.B.set(Nh,"pending",a.D)},Ph=function(a){return a.B.remove(Nh,a.D)},Qh=function(a){return a.B.get(Nh,a.D).then(function(a){return"pending"==a})};var Th=function(a,b,c){var d=this,e=(this.Aa=firebase.SDK_VERSION||null)?wf(this.Aa):null;this.f=new S(b,null,e);this.sa=null;this.C=a;this.m=b;this.F=c;this.Ab=[];this.Sb=!1;this.Xc=q(this.oe,this);this.Za=new Rh(this);this.yd=new Sh(this);this.Kc=new Mh(this.m+":"+this.F);this.jb={};this.jb.unknown=this.Za;this.jb.signInViaRedirect=this.Za;this.jb.linkViaRedirect=this.Za;this.jb.signInViaPopup=this.yd;this.jb.linkViaPopup=this.yd;this.dc=this.fb=null;this.Xb=new H(function(a,b){d.fb=a;d.dc=b})};
Th.prototype.reset=function(){var a=this;this.sa=null;this.Xb.cancel();this.Sb=!1;this.dc=this.fb=null;this.Pb&&eh(this.Pb,this.Xc);this.Xb=new H(function(b,c){a.fb=b;a.dc=c})};
var Uh=function(a){var b=mf();return xg(a).then(function(a){a:{for(var c=df(b).ia,e=0;e<a.length;e++){var f;var g=a[e];f=c;var k=Oc(g);k?f=(f=Oc(f))?k.Ib(f):!1:(k=g.split(".").join("\\."),f=(new RegExp("^(.+\\."+k+"|"+k+")$","i")).test(f));if(f){a=!0;break a}}a=!1}if(!a)throw new Rf(mf());})},Vh=function(a){a.Sb||(a.Sb=!0,tf().then(function(){a.Pb=new ch(a.C,a.m,a.F,a.Aa);a.Pb.Hc().l(function(){a.dc(new Q("network-request-failed"));a.reset()});a.Pb.Db.push(a.Xc)}));return a.Xb};
Th.prototype.subscribe=function(a){Ja(this.Ab,a)||this.Ab.push(a);if(!this.Sb){var b=this,c=function(){var a=kf();Af(a)||Ef(a)?Wh(b.Za):Vh(b)};Qh(this.Kc).then(function(a){a?Ph(b.Kc).then(function(){Vh(b)}):c()}).l(function(){c()})}};Th.prototype.unsubscribe=function(a){Ma(this.Ab,function(b){return b==a})};
Th.prototype.oe=function(a){if(!a)throw new Q("invalid-auth-event");this.fb&&(this.fb(),this.fb=null);for(var b=!1,c=0;c<this.Ab.length;c++){var d=this.Ab[c];if(d.bd(a.ya,a.W)){(b=this.jb[a.ya])&&b.zd(a,d);b=!0;break}}Wh(this.Za);return b};Th.prototype.getRedirectResult=function(){return this.Za.getRedirectResult()};
var Yh=function(a,b,c,d,e,f){if(!b)return J(new Q("popup-blocked"));if(f)return Vh(a),I();a.sa||(a.sa=Uh(a.f));return a.sa.then(function(){return Vh(a)}).then(function(){Xh(d);var f=dh(a.C,a.m,a.F,c,d,null,e,a.Aa);(b||l.window).location.href=ec(hc(f))}).l(function(b){"auth/network-request-failed"==b.code&&(a.sa=null);throw b;})},Zh=function(a,b,c,d){a.sa||(a.sa=Uh(a.f));return a.sa.then(function(){Xh(c);var e=dh(a.C,a.m,a.F,b,c,mf(),d,a.Aa);Oh(a.Kc).then(function(){l.window.location.href=ec(hc(e))})})},
$h=function(a,b,c,d,e){var f=new Q("popup-closed-by-user");return a.Xb.l(function(){}).then(function(){return sf(d)}).then(function(){return ze(2E3).then(function(){b.Ja(c,null,f,e)})})},Xh=function(a){if(!a.isOAuthProvider)throw new Q("invalid-oauth-provider");},ai={},bi=function(a,b,c){var d=b+":"+c;ai[d]||(ai[d]=new Th(a,b,c));return ai[d]},Rh=function(a){this.B=a;this.yb=this.cc=this.$a=this.aa=null;this.Oc=!1};
Rh.prototype.zd=function(a,b){if(!a)return J(new Q("invalid-auth-event"));this.Oc=!0;var c=a.ya,d=a.W;"unknown"==c?(this.aa||ci(this,!1,null,null),a=I()):a=a.N?this.Mc(a,b):b.pb(c,d)?this.Nc(a,b):J(new Q("invalid-auth-event"));return a};var Wh=function(a){a.Oc||(a.Oc=!0,ci(a,!1,null,null))};Rh.prototype.Mc=function(a){this.aa||ci(this,!0,null,a.getError());return I()};
Rh.prototype.Nc=function(a,b){var c=this,d=a.ya;b=b.pb(d,a.W);var e=a.kb;a=a.hc;var f="signInViaRedirect"==d||"linkViaRedirect"==d;if(this.aa)return I();this.yb&&this.yb.cancel();return b(e,a).then(function(a){c.aa||ci(c,f,a,null)}).l(function(a){c.aa||ci(c,f,null,a)})};var ci=function(a,b,c,d){b?d?(a.aa=function(){return J(d)},a.cc&&a.cc(d)):(a.aa=function(){return I(c)},a.$a&&a.$a(c)):(a.aa=function(){return I({user:null})},a.$a&&a.$a({user:null}));a.$a=null;a.cc=null};
Rh.prototype.getRedirectResult=function(){var a=this;this.$c||(this.$c=new H(function(b,c){a.aa?a.aa().then(b,c):(a.$a=b,a.cc=c,di(a))}));return this.$c};var di=function(a){var b=new Q("timeout");a.yb&&a.yb.cancel();a.yb=ze(1E4).then(function(){a.aa||ci(a,!0,null,b)})},Sh=function(a){this.B=a};Sh.prototype.zd=function(a,b){if(!a)return J(new Q("invalid-auth-event"));var c=a.ya,d=a.W;return a.N?this.Mc(a,b):b.pb(c,d)?this.Nc(a,b):J(new Q("invalid-auth-event"))};
Sh.prototype.Mc=function(a,b){b.Ja(a.ya,null,a.getError(),a.W);return I()};Sh.prototype.Nc=function(a,b){var c=a.W,d=a.ya;return b.pb(d,c)(a.kb,a.hc).then(function(a){b.Ja(d,a,null,c)}).l(function(a){b.Ja(d,null,a,c)})};var ei=function(a){this.f=a;this.za=this.V=null;this.Sa=0};ei.prototype.K=function(){return{apiKey:this.f.m,refreshToken:this.V,accessToken:this.za,expirationTime:this.Sa}};
var gi=function(a,b){var c=b.idToken,d=b.refreshToken;b=fi(b.expiresIn);a.za=c;a.Sa=b;a.V=d},fi=function(a){return la()+1E3*parseInt(a,10)},hi=function(a,b){return qg(a.f,b).then(function(b){a.za=b.access_token;a.Sa=fi(b.expires_in);a.V=b.refresh_token;return{accessToken:a.za,expirationTime:a.Sa,refreshToken:a.V}}).l(function(b){"auth/user-token-expired"==b.code&&(a.V=null);throw b;})},ii=function(a){return!(!a.za||a.V)};
ei.prototype.getToken=function(a){a=!!a;return ii(this)?J(new Q("user-token-expired")):a||!this.za||la()>this.Sa-3E4?this.V?hi(this,{grant_type:"refresh_token",refresh_token:this.V}):I(null):I({accessToken:this.za,expirationTime:this.Sa,refreshToken:this.V})};var ji=function(a,b,c,d,e){If(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},ki=function(a,b){zb.call(this,a);for(var c in b)this[c]=b[c]};r(ki,zb);
var W=function(a,b,c){this.Y=[];this.m=a.apiKey;this.F=a.appName;this.C=a.authDomain||null;a=firebase.SDK_VERSION?wf(firebase.SDK_VERSION):null;this.f=new S(this.m,null,a);this.ea=new ei(this.f);li(this,b.idToken);gi(this.ea,b);P(this,"refreshToken",this.ea.V);mi(this,c||{});be.call(this);this.Yb=!1;this.C&&zf()&&(this.o=bi(this.C,this.m,this.F));this.ic=[];this.sc=I()};r(W,be);
W.prototype.ua=function(a,b){var c=Array.prototype.slice.call(arguments,1),d=this;return this.sc=this.sc.then(function(){return a.apply(d,c)},function(){return a.apply(d,c)})};
var li=function(a,b){a.rd=b;P(a,"_lat",b)},ni=function(a,b){Ma(a.ic,function(a){return a==b})},oi=function(a){for(var b=[],c=0;c<a.ic.length;c++)b.push(a.ic[c](a));return wd(b).then(function(){return a})},pi=function(a){a.o&&!a.Yb&&(a.Yb=!0,a.o.subscribe(a))},mi=function(a,b){If(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};P(W.prototype,"providerId","firebase");
var qi=function(){},ri=function(a){return I().then(function(){if(a.de)throw new Q("app-deleted");})},si=function(a){return Fa(a.providerData,function(a){return a.providerId})},ui=function(a,b){b&&(ti(a,b.providerId),a.providerData.push(b))},ti=function(a,b){Ma(a.providerData,function(a){return a.providerId==b})},vi=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&P(a,b,c)};
W.prototype.copy=function(a){var b=this;b!=a&&(If(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){ui(b,a)}),this.ea=a.ea,P(this,"refreshToken",this.ea.V))};W.prototype.reload=function(){var a=this;return ri(this).then(function(){return wi(a).then(function(){return oi(a)}).then(qi)})};
var wi=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return xi(a,b).then(function(){c||vi(a,"isAnonymous",!1);return b}).l(function(b){"auth/user-token-expired"==b.code&&(a.dispatchEvent(new ki("userDeleted")),yi(a));throw b;})})};
W.prototype.getToken=function(a){var b=this,c=ii(this.ea);return ri(this).then(function(){return b.ea.getToken(a)}).then(function(a){if(!a)throw new Q("internal-error");a.accessToken!=b.rd&&(li(b,a.accessToken),b.Fa());vi(b,"refreshToken",a.refreshToken);return a.accessToken}).l(function(a){if("auth/user-token-expired"==a.code&&!c)return oi(b).then(function(){vi(b,"refreshToken",null);throw a;});throw a;})};
var zi=function(a,b){b.idToken&&a.rd!=b.idToken&&(gi(a.ea,b),a.Fa(),li(a,b.idToken),vi(a,"refreshToken",a.ea.V))};W.prototype.Fa=function(){this.dispatchEvent(new ki("tokenChanged"))};var xi=function(a,b){return R(a.f,Qg,{idToken:b}).then(q(a.Je,a))};
W.prototype.Je=function(a){a=a.users;if(!a||!a.length)throw new Q("internal-error");a=a[0];mi(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=Ai(a),c=0;c<b.length;c++)ui(this,b[c]);vi(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
var Ai=function(a){return(a=a.providerUserInfo)&&a.length?Fa(a,function(a){return new ji(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};W.prototype.reauthenticate=function(a){var b=this;return this.c(a.Kb(this.f).then(function(a){var c;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=jc(ub(e));if(k.sub&&k.iss&&k.aud&&k.exp){c=new Sf(k);break a}}catch(t){}}c=null}if(!c||b.uid!=c.De)throw new Q("user-mismatch");zi(b,a);return b.reload()}))};
var Bi=function(a,b){return wi(a).then(function(){if(Ja(si(a),b))return oi(a).then(function(){throw new Q("provider-already-linked");})})};h=W.prototype;h.Be=function(a){var b=this;return this.c(Bi(this,a.provider).then(function(){return b.getToken()}).then(function(c){return a.td(b.f,c)}).then(q(this.jd,this)))};h.link=function(a){return this.ua(this.Be,a)};h.jd=function(a){zi(this,a);var b=this;return this.reload().then(function(){return b})};
h.Xe=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updateEmail(c,a)}).then(function(a){zi(b,a);return b.reload()}))};h.updateEmail=function(a){return this.ua(this.Xe,a)};h.Ye=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updatePassword(c,a)}).then(function(a){zi(b,a);return b.reload()}))};h.updatePassword=function(a){return this.ua(this.Ye,a)};
h.Ze=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return ri(this);var b=this;return this.c(this.getToken().then(function(c){return b.f.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){zi(b,a);vi(b,"displayName",a.displayName||null);vi(b,"photoURL",a.photoUrl||null);return oi(b)}).then(qi))};h.updateProfile=function(a){return this.ua(this.Ze,a)};
h.We=function(a){var b=this;return this.c(wi(this).then(function(c){return Ja(si(b),a)?Fg(b.f,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x(si(b),function(a){c[a]||ti(b,a)});return oi(b)}):oi(b).then(function(){throw new Q("no-such-provider");})}))};h.unlink=function(a){return this.ua(this.We,a)};h.ce=function(){var a=this;return this.c(this.getToken().then(function(b){return R(a.f,Pg,{idToken:b})}).then(function(){a.dispatchEvent(new ki("userDeleted"))})).then(function(){yi(a)})};
h.delete=function(){return this.ua(this.ce)};h.bd=function(a,b){return"linkViaPopup"==a&&(this.ka||null)==b&&this.da||"linkViaRedirect"==a&&(this.bc||null)==b?!0:!1};h.Ja=function(a,b,c,d){"linkViaPopup"==a&&d==(this.ka||null)&&(c&&this.Ha?this.Ha(c):b&&!c&&this.da&&this.da(b),this.G&&(this.G.cancel(),this.G=null),delete this.da,delete this.Ha)};h.pb=function(a,b){return"linkViaPopup"==a&&b==(this.ka||null)||"linkViaRedirect"==a&&(this.bc||null)==b?q(this.ge,this):null};
h.Jb=function(){return yf(this.uid+":::")};
var Di=function(a,b){if(!zf())return J(new Q("operation-not-supported-in-this-environment"));var c=Nf(b.providerId),d=a.Jb(),e=null;!Af()&&a.C&&b.isOAuthProvider&&(e=dh(a.C,a.m,a.F,"linkViaPopup",b,null,d,firebase.SDK_VERSION||null));var f=rf(e,c&&c.xb,c&&c.wb),c=Bi(a,b.providerId).then(function(){return oi(a)}).then(function(){Ci(a);return a.getToken()}).then(function(){return Yh(a.o,f,"linkViaPopup",b,d,!!e)}).then(function(){return new H(function(b,c){a.Ja("linkViaPopup",null,new Q("cancelled-popup-request"),
a.ka||null);a.da=b;a.Ha=c;a.ka=d;a.G=$h(a.o,a,"linkViaPopup",f,d)})}).then(function(a){f&&qf(f);return a}).l(function(a){f&&qf(f);throw a;});return a.c(c)};W.prototype.linkWithPopup=function(a){var b=Di(this,a);return this.ua(function(){return b})};
W.prototype.Ce=function(a){if(!zf())return J(new Q("operation-not-supported-in-this-environment"));var b=this,c=null,d=this.Jb(),e=Bi(this,a.providerId).then(function(){Ci(b);return b.getToken()}).then(function(){b.bc=d;return oi(b)}).then(function(a){b.Ia&&(a=b.Ia,a=a.B.set(Ei,b.K(),a.D));return a}).then(function(){return Zh(b.o,"linkViaRedirect",a,d)}).l(function(a){c=a;if(b.Ia)return Fi(b.Ia);throw c;}).then(function(){if(c)throw c;});return this.c(e)};
W.prototype.linkWithRedirect=function(a){return this.ua(this.Ce,a)};var Ci=function(a){if(!a.o||!a.Yb){if(a.o&&!a.Yb)throw new Q("internal-error");throw new Q("auth-domain-config-required");}};W.prototype.ge=function(a,b){var c=this;this.G&&(this.G.cancel(),this.G=null);var d=null,e=this.getToken().then(function(d){return Wf(c.f,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=gg(a);return c.jd(a)}).then(function(a){return{user:a,credential:d}});return this.c(e)};
W.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getToken().then(function(b){return a.f.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};var yi=function(a){for(var b=0;b<a.Y.length;b++)a.Y[b].cancel("app-deleted");a.Y=[];a.de=!0;P(a,"refreshToken",null);a.o&&a.o.unsubscribe(a)};W.prototype.c=function(a){var b=this;this.Y.push(a);zd(a,function(){La(b.Y,a)});return a};W.prototype.toJSON=function(){return this.K()};
W.prototype.K=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.m,appName:this.F,authDomain:this.C,stsTokenManager:this.ea.K(),redirectEventId:this.bc||null};x(this.providerData,function(b){a.providerData.push(Jf(b))});return a};
var Gi=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-la())/1E3;else return null;var d=new W(b,c,a);a.providerData&&x(a.providerData,function(a){if(a){var b={};If(b,a);ui(d,b)}});a.redirectEventId&&(d.bc=a.redirectEventId);
return d},Hi=function(a,b,c){var d=new W(a,b);c&&(d.Ia=c);return d.reload().then(function(){return d})};var Ii=function(a){this.D=a;this.B=Jh()},Ei={name:"redirectUser",Z:!1},Fi=function(a){return a.B.remove(Ei,a.D)},Ji=function(a,b){return a.B.get(Ei,a.D).then(function(a){a&&b&&(a.authDomain=b);return Gi(a||{})})};var Ki=function(a){this.D=a;this.B=Jh()},Li={name:"authUser",Z:!0},Mi=function(a,b){return a.B.set(Li,b.K(),a.D)},Ni=function(a){return a.B.remove(Li,a.D)},Oi=function(a,b){return a.B.get(Li,a.D).then(function(a){a&&b&&(a.authDomain=b);return Gi(a||{})})};var Y=function(a){this.Qa=!1;P(this,"app",a);if(X(this).options&&X(this).options.apiKey)a=firebase.SDK_VERSION?wf(firebase.SDK_VERSION):null,this.f=new S(X(this).options&&X(this).options.apiKey,null,a);else throw new Q("invalid-api-key");this.Y=[];this.Oa=[];this.He=firebase.INTERNAL.createSubscribe(q(this.xe,this));Pi(this,null);this.oa=new Ki(X(this).options.apiKey+":"+X(this).name);this.ab=new Ii(X(this).options.apiKey+":"+X(this).name);this.Eb=this.c(Qi(this));this.va=this.c(Ri(this));this.Ec=
!1;this.Bc=q(this.Re,this);this.Kd=q(this.Ua,this);this.Ld=q(this.te,this);this.Jd=q(this.se,this);Si(this);this.INTERNAL={};this.INTERNAL.delete=q(this.delete,this)};Y.prototype.toJSON=function(){return{apiKey:X(this).options.apiKey,authDomain:X(this).options.authDomain,appName:X(this).name,currentUser:Z(this)&&Z(this).K()}};
var Ti=function(a){return a.ee||J(new Q("auth-domain-config-required"))},Si=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&&zf()&&(a.ee=a.Eb.then(function(){if(!a.Qa)return a.o=bi(b,c,X(a).name),a.o.subscribe(a),Z(a)&&pi(Z(a)),a.Qc&&(pi(a.Qc),a.Qc=null),a.o}))};h=Y.prototype;h.bd=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ka==b&&!!this.da;default:return!1}};
h.Ja=function(a,b,c,d){"signInViaPopup"==a&&this.ka==d&&(c&&this.Ha?this.Ha(c):b&&!c&&this.da&&this.da(b),this.G&&(this.G.cancel(),this.G=null),delete this.da,delete this.Ha)};h.pb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ka==b&&this.da?q(this.he,this):null};
h.he=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.G&&(this.G.cancel(),this.G=null);var d=null,e=Uf(c.f,a).then(function(a){d=gg(a);return a});a=c.Eb.then(function(){return e}).then(function(a){return Ui(c,a)}).then(function(){return{user:Z(c),credential:d}});return this.c(a)};h.Jb=function(){return yf()};
h.signInWithPopup=function(a){if(!zf())return J(new Q("operation-not-supported-in-this-environment"));var b=this,c=Nf(a.providerId),d=this.Jb(),e=null;!Af()&&X(this).options.authDomain&&a.isOAuthProvider&&(e=dh(X(this).options.authDomain,X(this).options.apiKey,X(this).name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=rf(e,c&&c.xb,c&&c.wb),c=Ti(this).then(function(b){return Yh(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new H(function(a,c){b.Ja("signInViaPopup",null,new Q("cancelled-popup-request"),
b.ka);b.da=a;b.Ha=c;b.ka=d;b.G=$h(b.o,b,"signInViaPopup",f,d)})}).then(function(a){f&&qf(f);return a}).l(function(a){f&&qf(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!zf())return J(new Q("operation-not-supported-in-this-environment"));var b=this,c=Ti(this).then(function(){return Zh(b.o,"signInViaRedirect",a)});return this.c(c)};
h.getRedirectResult=function(){if(!zf())return J(new Q("operation-not-supported-in-this-environment"));var a=this,b=Ti(this).then(function(){return a.o.getRedirectResult()});return this.c(b)};
var Ui=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.Eb.then(function(){return Hi(c,b,a.ab)}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.Ua(b);Pi(a,b);pi(b);return a.Ua(b)}).then(function(){a.Fa()})},Pi=function(a,b){Z(a)&&(ni(Z(a),a.Kd),Ub(Z(a),"tokenChanged",a.Ld),Ub(Z(a),"userDeleted",a.Jd));b&&(b.ic.push(a.Kd),Lb(b,"tokenChanged",a.Ld),Lb(b,"userDeleted",a.Jd));P(a,"currentUser",b)};
Y.prototype.signOut=function(){var a=this,b=this.va.then(function(){if(!Z(a))return I();Pi(a,null);return Ni(a.oa).then(function(){a.Fa()})});return this.c(b)};
var Vi=function(a){var b=Ji(a.ab,X(a).options.authDomain).then(function(b){if(a.Qc=b)b.Ia=a.ab;return Fi(a.ab)});return a.c(b)},Qi=function(a){var b=X(a).options.authDomain,c=Vi(a).then(function(){return Oi(a.oa,b)}).then(function(b){return b?(b.Ia=a.ab,b.reload().then(function(){return Mi(a.oa,b).then(function(){return b})}).l(function(c){return"auth/network-request-failed"==c.code?b:Ni(a.oa)})):null}).then(function(b){Pi(a,b||null)});return a.c(c)},Ri=function(a){return a.Eb.then(function(){return a.getRedirectResult()}).l(function(){}).then(function(){if(!a.Qa)return a.Bc()}).l(function(){}).then(function(){if(!a.Qa){a.Ec=
!0;var b=a.oa;b.B.addListener(Li,b.D,a.Bc)}})};Y.prototype.Re=function(){var a=this;return Oi(this.oa,X(this).options.authDomain).then(function(b){if(!a.Qa){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();if(Z(a)||b)Pi(a,b),b&&(pi(b),b.Ia=a.ab),a.o&&a.o.subscribe(a),a.Fa()}})};Y.prototype.Ua=function(a){return Mi(this.oa,a)};Y.prototype.te=function(){this.Fa();this.Ua(Z(this))};
Y.prototype.se=function(){this.signOut()};var Wi=function(a,b){return a.c(b.then(function(b){return Ui(a,b)}).then(function(){return Z(a)}))};h=Y.prototype;h.xe=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};h.onAuthStateChanged=function(a,b,c){var d=this;this.Ec&&firebase.Promise.resolve().then(function(){p(a)?a(Z(d)):p(a.next)&&a.next(Z(d))});return this.He(a,b,c)};
h.getToken=function(a){var b=this,c=this.va.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};h.signInWithCustomToken=function(a){var b=this;return this.va.then(function(){return Wi(b,R(b.f,Rg,{token:a}))}).then(function(a){vi(a,"isAnonymous",!1);return b.Ua(a)}).then(function(){return Z(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.va.then(function(){return Wi(c,R(c.f,cg,{email:a,password:b}))})};
h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.va.then(function(){return Wi(c,R(c.f,Og,{email:a,password:b}))})};h.signInWithCredential=function(a){var b=this;return this.va.then(function(){return Wi(b,a.Kb(b.f))})};h.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?I(a):this.va.then(function(){return Wi(b,b.f.signInAnonymously())}).then(function(a){vi(a,"isAnonymous",!0);return b.Ua(a)}).then(function(){return Z(b)})};
var X=function(a){return a.app},Z=function(a){return a.currentUser};h=Y.prototype;h.Fa=function(){if(this.Ec)for(var a=0;a<this.Oa.length;a++)if(this.Oa[a])this.Oa[a](Z(this)&&Z(this)._lat||null)};h.addAuthTokenListener=function(a){var b=this;this.Oa.push(a);this.c(this.va.then(function(){b.Qa||Ja(b.Oa,a)&&a(Z(b)&&Z(b)._lat||null)}))};h.removeAuthTokenListener=function(a){Ma(this.Oa,function(b){return b==a})};
h.delete=function(){this.Qa=!0;for(var a=0;a<this.Y.length;a++)this.Y[a].cancel("app-deleted");this.Y=[];this.oa&&(a=this.oa,a.B.removeListener(Li,a.D,this.Bc));this.o&&this.o.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.Y.push(a);zd(a,function(){La(b.Y,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(vg(this.f,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
h.confirmPasswordReset=function(a,b){return this.c(this.f.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.f.checkActionCode(a).then(function(a){return{data:{email:a.email}}}))};h.applyActionCode=function(a){return this.c(this.f.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.c(this.f.sendPasswordResetEmail(a).then(function(){}))};Fh(Y.prototype,{applyActionCode:{name:"applyActionCode",a:[T("code")]},checkActionCode:{name:"checkActionCode",a:[T("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[T("code"),T("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[T("email"),T("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[T("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[Dh(U(),zh(),"nextOrObserver"),
zh("opt_error",!0),zh("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[T("email")]},signInAnonymously:{name:"signInAnonymously",a:[]},signInWithCredential:{name:"signInWithCredential",a:[Bh()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[T("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",a:[T("email"),T("password")]},signInWithPopup:{name:"signInWithPopup",a:[Ch()]},signInWithRedirect:{name:"signInWithRedirect",a:[Ch()]},signOut:{name:"signOut",
a:[]},toJSON:{name:"toJSON",a:[T(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[T("code")]}});
Fh(W.prototype,{"delete":{name:"delete",a:[]},getToken:{name:"getToken",a:[{name:"opt_forceRefresh",fa:"a boolean",optional:!0,ga:function(a){return"boolean"==typeof a}}]},link:{name:"link",a:[Bh()]},linkWithPopup:{name:"linkWithPopup",a:[Ch()]},linkWithRedirect:{name:"linkWithRedirect",a:[Ch()]},reauthenticate:{name:"reauthenticate",a:[Bh()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[]},toJSON:{name:"toJSON",a:[T(null,!0)]},unlink:{name:"unlink",a:[T("provider")]},
updateEmail:{name:"updateEmail",a:[T("email")]},updatePassword:{name:"updatePassword",a:[T("password")]},updateProfile:{name:"updateProfile",a:[U("profile")]}});Fh(H.prototype,{l:{name:"catch"},then:{name:"then"}});V(eg,"credential",function(a,b){return new bg(a,b)},[T("email"),T("password")]);Fh(Yf.prototype,{addScope:{name:"addScope",a:[T("scope")]},setCustomParameters:{name:"setCustomParameters",a:[U("customOAuthParameters")]}});V(Yf,"credential",Yf.credential,[Dh(T(),U(),"token")]);
Fh(Zf.prototype,{addScope:{name:"addScope",a:[T("scope")]},setCustomParameters:{name:"setCustomParameters",a:[U("customOAuthParameters")]}});V(Zf,"credential",Zf.credential,[Dh(T(),U(),"token")]);Fh($f.prototype,{addScope:{name:"addScope",a:[T("scope")]},setCustomParameters:{name:"setCustomParameters",a:[U("customOAuthParameters")]}});V($f,"credential",$f.credential,[Dh(T(),Dh(U(),Ah()),"idToken"),Dh(T(),Ah(),"accessToken",!0)]);Fh(ag.prototype,{setCustomParameters:{name:"setCustomParameters",a:[U("customOAuthParameters")]}});
V(ag,"credential",ag.credential,[Dh(T(),U(),"token"),T("secret",!0)]);
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Y,Error:Q};V(a,"EmailAuthProvider",eg,[]);V(a,"FacebookAuthProvider",Yf,[]);V(a,"GithubAuthProvider",Zf,[]);V(a,"GoogleAuthProvider",$f,[]);V(a,"TwitterAuthProvider",ag,[]);firebase.INTERNAL.registerService("auth",function(a,c){a=new Y(a);c({INTERNAL:{getToken:q(a.getToken,a),addAuthTokenListener:q(a.addAuthTokenListener,a),removeAuthTokenListener:q(a.removeAuthTokenListener,a)}});return a},
a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:W})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();})();
module.exports = firebase.auth;

},{"./app":1}],3:[function(require,module,exports){
var firebase = require('./app');
/*! @license Firebase v3.5.0
    Build: 3.5.0-rc.8
    Terms: https://developers.google.com/terms */
(function() {var g,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.Wb=function(){return a.bf?a.bf:a.bf=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){return"array"==ca(a)}function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function ga(a){return"function"==ca(a)}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return r.apply(null,arguments)}
function ka(a,b){function c(){}c.prototype=b.prototype;a.Ig=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Eg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function la(){this.Ya=-1};function ma(){this.Ya=-1;this.Ya=64;this.N=[];this.Wd=[];this.Jf=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Ya;++a)this.zd[a]=0;this.Pd=this.ac=0;this.reset()}ka(ma,la);ma.prototype.reset=function(){this.N[0]=1732584193;this.N[1]=4023233417;this.N[2]=2562383102;this.N[3]=271733878;this.N[4]=3285377520;this.Pd=this.ac=0};
function na(a,b,c){c||(c=0);var d=a.Jf;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.N[0];c=a.N[1];for(var h=a.N[2],k=a.N[3],m=a.N[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),l=1518500249):(f=c^h^k,l=1859775393):60>e?(f=c&h|k&(c|h),l=2400959708):(f=c^h^k,l=3395469782),f=(b<<
5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.N[0]=a.N[0]+b&4294967295;a.N[1]=a.N[1]+c&4294967295;a.N[2]=a.N[2]+h&4294967295;a.N[3]=a.N[3]+k&4294967295;a.N[4]=a.N[4]+m&4294967295}
ma.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.Wd,f=this.ac;d<b;){if(0==f)for(;d<=c;)na(this,a,d),d+=this.Ya;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){na(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ya){na(this,e);f=0;break}}this.ac=f;this.Pd+=b}};function t(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function oa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function pa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function qa(a){var b=0,c;for(c in a)b++;return b}function ra(a){for(var b in a)return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ta(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ua(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function va(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function wa(a,b){var c=va(a,b,void 0);return c&&a[c]}function xa(a){for(var b in a)return!1;return!0}function ya(a){var b={},c;for(c in a)b[c]=a[c];return b};function za(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Aa(){this.Fd=void 0}
function Ba(a,b,c){switch(typeof b){case "string":Ca(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ba(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ca(f,c),
c.push(":"),Ba(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Da={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ea=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Ca(a,b){b.push('"',a.replace(Ea,function(a){if(a in Da)return Da[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Da[a]=e+b.toString(16)}),'"')};var v;a:{var Fa=n.navigator;if(Fa){var Ga=Fa.userAgent;if(Ga){v=Ga;break a}}v=""};function Ha(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ka(Ha,Error);Ha.prototype.name="CustomError";var w=Array.prototype,Ia=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ja=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=q(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},La=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ma=w.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=r(b,d));return w.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ja(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Na=w.every?function(a,b,
c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Oa(a,b){var c=Pa(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c]}function Pa(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Qa(a,b){var c=Ia(a,b);0<=c&&w.splice.call(a,c,1)}function Ra(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}
function Sa(a,b){a.sort(b||Ta)}function Ta(a,b){return a>b?1:a<b?-1:0};var Ua=-1!=v.indexOf("Opera")||-1!=v.indexOf("OPR"),Va=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"),Wa=-1!=v.indexOf("Gecko")&&-1==v.toLowerCase().indexOf("webkit")&&!(-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE")),Xa=-1!=v.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Ua&&n.opera)return a=n.opera.version,ga(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(v))?a[1]:"");return Va&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,h||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a){n.setTimeout(function(){throw a;},0)}var db;
function eb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==v.indexOf("Presto")&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==
d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==v.indexOf("Trident")&&-1==v.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Le;c.Le=null;a()}};return function(a){d.next={Le:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=
document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function fb(a,b){gb||hb();ib||(gb(),ib=!0);jb.push(new kb(a,b))}var gb;function hb(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve();gb=function(){a.then(lb)}}else gb=function(){var a=lb;!ga(n.setImmediate)||n.Window&&n.Window.prototype&&n.Window.prototype.setImmediate==n.setImmediate?(db||(db=eb()),db(a)):n.setImmediate(a)}}var ib=!1,jb=[];[].push(function(){ib=!1;jb=[]});
function lb(){for(;jb.length;){var a=jb;jb=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.Wf.call(c.scope)}catch(d){cb(d)}}}ib=!1}function kb(a,b){this.Wf=a;this.scope=b};function mb(a,b){this.L=nb;this.uf=void 0;this.Ca=this.Ha=null;this.jd=this.be=!1;if(a==ob)pb(this,qb,b);else try{var c=this;a.call(b,function(a){pb(c,qb,a)},function(a){if(!(a instanceof rb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}pb(c,sb,a)})}catch(d){pb(this,sb,d)}}var nb=0,qb=2,sb=3;function ob(){}mb.prototype.then=function(a,b,c){return tb(this,ga(a)?a:null,ga(b)?b:null,c)};mb.prototype.then=mb.prototype.then;mb.prototype.$goog_Thenable=!0;g=mb.prototype;
g.Ag=function(a,b){return tb(this,null,a,b)};g.cancel=function(a){this.L==nb&&fb(function(){var b=new rb(a);ub(this,b)},this)};function ub(a,b){if(a.L==nb)if(a.Ha){var c=a.Ha;if(c.Ca){for(var d=0,e=-1,f=0,h;h=c.Ca[f];f++)if(h=h.k)if(d++,h==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.L==nb&&1==d?ub(c,b):(d=c.Ca.splice(e,1)[0],vb(c,d,sb,b)))}a.Ha=null}else pb(a,sb,b)}function wb(a,b){a.Ca&&a.Ca.length||a.L!=qb&&a.L!=sb||xb(a);a.Ca||(a.Ca=[]);a.Ca.push(b)}
function tb(a,b,c,d){var e={k:null,hf:null,kf:null};e.k=new mb(function(a,h){e.hf=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){h(l)}}:a;e.kf=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof rb?h(b):a(e)}catch(l){h(l)}}:h});e.k.Ha=a;wb(a,e);return e.k}g.Cf=function(a){this.L=nb;pb(this,qb,a)};g.Df=function(a){this.L=nb;pb(this,sb,a)};
function pb(a,b,c){if(a.L==nb){if(a==c)b=sb,c=new TypeError("Promise cannot resolve to itself");else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.L=1;c.then(a.Cf,a.Df,a);return}if(ha(c))try{var f=c.then;if(ga(f)){yb(a,c,f);return}}catch(h){b=sb,c=h}}a.uf=c;a.L=b;a.Ha=null;xb(a);b!=sb||c instanceof rb||zb(a,c)}}function yb(a,b,c){function d(b){f||(f=!0,a.Df(b))}function e(b){f||(f=!0,a.Cf(b))}a.L=1;var f=!1;try{c.call(b,e,d)}catch(h){d(h)}}
function xb(a){a.be||(a.be=!0,fb(a.Uf,a))}g.Uf=function(){for(;this.Ca&&this.Ca.length;){var a=this.Ca;this.Ca=null;for(var b=0;b<a.length;b++)vb(this,a[b],this.L,this.uf)}this.be=!1};function vb(a,b,c,d){if(c==qb)b.hf(d);else{if(b.k)for(;a&&a.jd;a=a.Ha)a.jd=!1;b.kf(d)}}function zb(a,b){a.jd=!0;fb(function(){a.jd&&Ab.call(null,b)})}var Ab=cb;function rb(a){Ha.call(this,a)}ka(rb,Ha);rb.prototype.name="cancel";function Bb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function x(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Cb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function y(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function Db(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function A(a,b,c,d){if((!d||p(c))&&!ga(c))throw Error(Db(a,b,d)+"must be a valid function.");}function Eb(a,b,c){if(p(c)&&(!ha(c)||null===c))throw Error(Db(a,b,!0)+"must be a valid context object.");};function Fb(a){var b=[];Cb(a,function(a,d){da(d)?Ja(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var Gb=n.Promise||mb;mb.prototype["catch"]=mb.prototype.Ag;function Hb(){var a=this;this.reject=this.resolve=null;this.sa=new Gb(function(b,c){a.resolve=b;a.reject=c})}function Ib(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ga(b)&&(Jb(a.sa),1===b.length?b(c):b(c,d))}}function Jb(a){a.then(void 0,aa)};function Kb(a,b){if(!a)throw Lb(b);}function Lb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function Mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,Kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function Ob(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):za(a)}function B(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ba(new Aa,a,b);a=b.join("")}return a};function Pb(a,b){this.committed=a;this.snapshot=b};function Qb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function Rb(a){this.te=a;this.Bd=[];this.Rb=0;this.Yd=-1;this.Gb=null}function Sb(a,b,c){a.Yd=b;a.Gb=c;a.Yd<a.Rb&&(a.Gb(),a.Gb=null)}function Tb(a,b,c){for(a.Bd[b]=c;a.Bd[a.Rb];){var d=a.Bd[a.Rb];delete a.Bd[a.Rb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Ub(function(){f.te(d[e])})}if(a.Rb===a.Yd){a.Gb&&(clearTimeout(a.Gb),a.Gb(),a.Gb=null);break}a.Rb++}};function Vb(){this.qc={}}Vb.prototype.set=function(a,b){null==b?delete this.qc[a]:this.qc[a]=b};Vb.prototype.get=function(a){return Bb(this.qc,a)?this.qc[a]:null};Vb.prototype.remove=function(a){delete this.qc[a]};Vb.prototype.cf=!0;function Wb(a){this.vc=a;this.Cd="firebase:"}g=Wb.prototype;g.set=function(a,b){null==b?this.vc.removeItem(this.Cd+a):this.vc.setItem(this.Cd+a,B(b))};g.get=function(a){a=this.vc.getItem(this.Cd+a);return null==a?null:Ob(a)};g.remove=function(a){this.vc.removeItem(this.Cd+a)};g.cf=!1;g.toString=function(){return this.vc.toString()};function Xb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Wb(b)}}catch(c){}return new Vb}var Yb=Xb("localStorage"),Zb=Xb("sessionStorage");function $b(a,b,c){this.type=ac;this.source=a;this.path=b;this.Ja=c}$b.prototype.Nc=function(a){return this.path.e()?new $b(this.source,C,this.Ja.R(a)):new $b(this.source,D(this.path),this.Ja)};$b.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ja.toString()+")"};function bc(a,b){this.type=cc;this.source=a;this.path=b}bc.prototype.Nc=function(){return this.path.e()?new bc(this.source,C):new bc(this.source,D(this.path))};bc.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function dc(a){this.He=a}dc.prototype.getToken=function(a){return this.He.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function ec(a,b){a.He.INTERNAL.addAuthTokenListener(b)};function fc(){this.Jd=F}fc.prototype.j=function(a){return this.Jd.Q(a)};fc.prototype.toString=function(){return this.Jd.toString()};function gc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.Cg=d;this.nf=e||"";this.bb=Yb.get("host:"+a)||this.host}function hc(a,b){b!==a.bb&&(a.bb=b,"s-"===a.bb.substr(0,2)&&Yb.set("host:"+a.host,a.bb))}
function ic(a,b,c){H("string"===typeof b,"typeof type must == string");H("object"===typeof c,"typeof params must == object");if("websocket"===b)b=(a.Sc?"wss://":"ws://")+a.bb+"/.ws?";else if("long_polling"===b)b=(a.Sc?"https://":"http://")+a.bb+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.bb&&(c.ns=a.pe);var d=[];t(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}
gc.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.nf&&(a+="<"+this.nf+">");return a};function jc(){this.uc={}}function kc(a,b,c){p(c)||(c=1);Bb(a.uc,b)||(a.uc[b]=0);a.uc[b]+=c}jc.prototype.get=function(){return ya(this.uc)};function lc(a){this.Nf=a;this.rd=null}lc.prototype.get=function(){var a=this.Nf.get(),b=ya(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};function mc(){this.wb=[]}function nc(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.$(c.Zb())||(a.wb.push(c),c=null);null===c&&(c=new oc(f));c.add(e)}c&&a.wb.push(c)}function pc(a,b,c){nc(a,c);qc(a,function(a){return a.$(b)})}function rc(a,b,c){nc(a,c);qc(a,function(a){return a.contains(b)||b.contains(a)})}
function qc(a,b){for(var c=!0,d=0;d<a.wb.length;d++){var e=a.wb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.wb[d],f=0;f<e.hd.length;f++){var h=e.hd[f];if(null!==h){e.hd[f]=null;var k=h.Ub();sc&&E("event: "+h.toString());Ub(k)}}a.wb[d]=null}else c=!1}c&&(a.wb=[])}function oc(a){this.ra=a;this.hd=[]}oc.prototype.add=function(a){this.hd.push(a)};oc.prototype.Zb=function(){return this.ra};function tc(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.gd=a}tc.prototype.Zb=function(){var a=this.Md.xb();return"value"===this.gd?a.path:a.getParent().path};tc.prototype.ge=function(){return this.gd};tc.prototype.Ub=function(){return this.ae.Ub(this)};tc.prototype.toString=function(){return this.Zb().toString()+":"+this.gd+":"+B(this.Md.Ue())};function uc(a,b,c){this.ae=a;this.error=b;this.path=c}uc.prototype.Zb=function(){return this.path};uc.prototype.ge=function(){return"cancel"};
uc.prototype.Ub=function(){return this.ae.Ub(this)};uc.prototype.toString=function(){return this.path.toString()+":cancel"};function vc(){}vc.prototype.Xe=function(){return null};vc.prototype.fe=function(){return null};var wc=new vc;function xc(a,b,c){this.Gf=a;this.Na=b;this.yd=c}xc.prototype.Xe=function(a){var b=this.Na.O;if(yc(b,a))return b.j().R(a);b=null!=this.yd?new zc(this.yd,!0,!1):this.Na.w();return this.Gf.rc(a,b)};xc.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:Ac(this.Na);a=this.Gf.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function I(a,b,c,d){this.type=a;this.Ma=b;this.Za=c;this.qe=d;this.Dd=void 0}function Bc(a){return new I(Cc,a)}var Cc="value";function zc(a,b,c){this.A=a;this.ea=b;this.Tb=c}function Dc(a){return a.ea}function Ec(a){return a.Tb}function Fc(a,b){return b.e()?a.ea&&!a.Tb:yc(a,J(b))}function yc(a,b){return a.ea&&!a.Tb||a.A.Fa(b)}zc.prototype.j=function(){return this.A};function Gc(a,b){return Hc(a.name,b.name)}function Ic(a,b){return Hc(a,b)};function K(a,b){this.name=a;this.S=b}function Jc(a,b){return new K(a,b)};function Kc(a,b){return a&&"object"===typeof a?(H(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Lc(a,b){var c=new Mc;Nc(a,new L(""),function(a,e){Oc(c,a,Pc(e,b))});return c}function Pc(a,b){var c=a.C().H(),c=Kc(c,b),d;if(a.J()){var e=Kc(a.Ea(),b);return e!==a.Ea()||c!==a.C().H()?new Qc(e,M(c)):a}d=a;c!==a.C().H()&&(d=d.ga(new Qc(c)));a.P(N,function(a,c){var e=Pc(c,b);e!==c&&(d=d.U(a,e))});return d};var Rc=function(){var a=1;return function(){return a++}}(),H=Kb,Sc=Lb;
function Tc(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==m)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ra(d,c,c+8192));b=a}return b}catch(l){E("base64Decode failed: ",
l)}return null}function Uc(a){var b=Mb(a);a=new ma;a.update(b);var b=[],c=8*a.Pd;56>a.ac?a.update(a.zd,56-a.ac):a.update(a.zd,a.Ya-(a.ac-56));for(var d=a.Ya-1;56<=d;d--)a.Wd[d]=c&255,c/=256;na(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.N[d]>>e&255,++c;return ab(b)}function Vc(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+Vc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var sc=null,Wc=!0;
function Xc(a,b){Kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?sc=r(console.log,console):"object"===typeof console.log&&(sc=function(a){console.log(a)})),b&&Zb.set("logging_enabled",!0)):ga(a)?sc=a:(sc=null,Zb.remove("logging_enabled"))}function E(a){!0===Wc&&(Wc=!1,null===sc&&!0===Zb.get("logging_enabled")&&Xc(!0));if(sc){var b=Vc.apply(null,arguments);sc(b)}}
function Yc(a){return function(){E(a,arguments)}}function Zc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Vc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function $c(a){var b=Vc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function O(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Vc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function ad(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(q(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var m=h[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&$c(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
c&&"undefined"!=c||$c("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{kc:new gc(b,d,c,"ws"===e||"wss"===e),path:new L(f)}}function bd(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function cd(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function Hc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=dd(a),d=dd(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function ed(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
function fd(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=fd(a[b[d]]);return c+"}"}function gd(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function hd(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else t(a,b)}
function id(a){H(!bd(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var jd=/^-?\d{1,10}$/;function dd(a){return jd.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Ub(a){try{a()}catch(b){setTimeout(function(){O("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function kd(a,b,c){Object.defineProperty(a,b,{get:c})}function ld(a,b){var c=setTimeout(a,b);"object"===typeof c&&c.unref&&c.unref();return c};function md(a){var b={},c={},d={},e="";try{var f=a.split("."),b=Ob(Tc(f[0])||""),c=Ob(Tc(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{Fg:b,Me:c,data:d,xg:e}}function nd(a){a=md(a);var b=a.Me;return!!a.xg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function od(a){a=md(a).Me;return"object"===typeof a&&!0===x(a,"admin")};function pd(a,b,c){this.f=Yc("p:rest:");this.M=a;this.Hb=b;this.Vd=c;this.aa={}}function qd(a,b){if(p(b))return"tag$"+b;H(rd(a.n),"should have a tag if it's not a default query.");return a.path.toString()}g=pd.prototype;
g.df=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ka());var f=qd(a,c),h={};this.aa[f]=h;a=sd(a.n);var k=this;td(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Hb(e,u,!1,c);x(k.aa,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.Ef=function(a,b){var c=qd(a,b);delete this.aa[c]};g.qf=function(){};g.re=function(){};g.gf=function(){};g.xd=function(){};g.put=function(){};g.ef=function(){};g.ye=function(){};
function td(a,b,c,d){c=c||{};c.format="export";a.Vd.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.M.Sc?"https://":"http://")+a.M.host+b+"?"+Fb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=Ob(h.responseText)}catch(c){O("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
b)}else 401!==h.status&&404!==h.status&&O("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function vd(a,b,c){this.type=wd;this.source=a;this.path=b;this.children=c}vd.prototype.Nc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new $b(this.source,C,a.value):new vd(this.source,C,a);H(J(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new vd(this.source,D(this.path),this.children)};vd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function xd(a,b){this.zf={};this.Vc=new lc(a);this.wa=b;var c=1E4+2E4*Math.random();ld(r(this.rf,this),Math.floor(c))}xd.prototype.rf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&Bb(this.zf,d)&&(b[d]=a[d],c=!0);c&&this.wa.ye(b);ld(r(this.rf,this),Math.floor(6E5*Math.random()))};var yd={},zd={};function Ad(a){a=a.toString();yd[a]||(yd[a]=new jc);return yd[a]}function Bd(a,b){var c=a.toString();zd[c]||(zd[c]=b());return zd[c]};var Cd=null;"undefined"!==typeof MozWebSocket?Cd=MozWebSocket:"undefined"!==typeof WebSocket&&(Cd=WebSocket);function Dd(a,b,c,d){this.Zd=a;this.f=Yc(this.Zd);this.frames=this.Ac=null;this.qb=this.rb=this.Fe=0;this.Xa=Ad(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Ne=ic(b,"websocket",a)}var Ed;
Dd.prototype.open=function(a,b){this.kb=b;this.hg=a;this.f("Websocket connecting to "+this.Ne);this.xc=!1;Yb.set("previous_websocket_failure",!0);try{this.La=new Cd(this.Ne)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.fb();return}var e=this;this.La.onopen=function(){e.f("Websocket connected.");e.xc=!0};this.La.onclose=function(){e.f("Websocket connection was disconnected.");e.La=null;e.fb()};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.qb+=
a.length,kc(e.Xa,"bytes_received",a.length),Fd(e),null!==e.frames)Gd(e,a);else{a:{H(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&&Gd(e,a)}};this.La.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.fb()}};Dd.prototype.start=function(){};
Dd.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Cd&&!Ed};Dd.responsesRequiredToBeHealthy=2;Dd.healthyTimeout=3E4;g=Dd.prototype;g.sd=function(){Yb.remove("previous_websocket_failure")};function Gd(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=Ob(c);a.hg(c)}}
g.send=function(a){Fd(this);a=B(a);this.rb+=a.length;kc(this.Xa,"bytes_sent",a.length);a=gd(a,16384);1<a.length&&Hd(this,String(a.length));for(var b=0;b<a.length;b++)Hd(this,a[b])};g.Tc=function(){this.Bb=!0;this.Ac&&(clearInterval(this.Ac),this.Ac=null);this.La&&(this.La.close(),this.La=null)};g.fb=function(){this.Bb||(this.f("WebSocket is closing itself"),this.Tc(),this.kb&&(this.kb(this.xc),this.kb=null))};g.close=function(){this.Bb||(this.f("WebSocket is being closed"),this.Tc())};
function Fd(a){clearInterval(a.Ac);a.Ac=setInterval(function(){a.La&&Hd(a,"0");Fd(a)},Math.floor(45E3))}function Hd(a,b){try{a.La.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(r(a.fb,a),0)}};function Id(){this.hb={}}
function Jd(a,b){var c=b.type,d=b.Za;H("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");H(".priority"!==d,"Only non-priority child changes can be tracked.");var e=x(a.hb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.hb[d]=new I("child_changed",b.Ma,d,e.Ma);else if("child_removed"==c&&"child_added"==f)delete a.hb[d];else if("child_removed"==c&&"child_changed"==f)a.hb[d]=new I("child_removed",e.qe,d);else if("child_changed"==c&&
"child_added"==f)a.hb[d]=new I("child_added",b.Ma,d);else if("child_changed"==c&&"child_changed"==f)a.hb[d]=new I("child_changed",b.Ma,d,e.qe);else throw Sc("Illegal combination of changes: "+b+" occurred after "+e);}else a.hb[d]=b};function Kd(a){this.W=a;this.g=a.n.g}function Ld(a,b,c,d){var e=[],f=[];Ja(b,function(b){"child_changed"===b.type&&a.g.nd(b.qe,b.Ma)&&f.push(new I("child_moved",b.Ma,b.Za))});Md(a,e,"child_removed",b,d,c);Md(a,e,"child_added",b,d,c);Md(a,e,"child_moved",f,d,c);Md(a,e,"child_changed",b,d,c);Md(a,e,Cc,b,d,c);return e}function Md(a,b,c,d,e,f){d=Ka(d,function(a){return a.type===c});Sa(d,r(a.Of,a));Ja(d,function(c){var d=Nd(a,c,f);Ja(e,function(e){e.tf(c.type)&&b.push(e.createEvent(d,a.W))})})}
function Nd(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ze(b.Za,b.Ma,a.g));return b}Kd.prototype.Of=function(a,b){if(null==a.Za||null==b.Za)throw Sc("Should only compare child_ events.");return this.g.compare(new K(a.Za,a.Ma),new K(b.Za,b.Ma))};function Od(a,b){this.Sd=a;this.Mf=b}function Pd(a){this.V=a}
Pd.prototype.gb=function(a,b,c,d){var e=new Id,f;if(b.type===ac)b.source.ee?c=Qd(this,a,b.path,b.Ja,c,d,e):(H(b.source.We,"Unknown source."),f=b.source.Ee||Ec(a.w())&&!b.path.e(),c=Rd(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===wd)b.source.ee?c=Sd(this,a,b.path,b.children,c,d,e):(H(b.source.We,"Unknown source."),f=b.source.Ee||Ec(a.w()),c=Td(this,a,b.path,b.children,c,d,f,e));else if(b.type===Ud)if(b.Id)if(b=b.path,null!=c.mc(b))c=a;else{f=new xc(c,a,d);d=a.O.j();if(b.e()||".priority"===J(b))Dc(a.w())?
b=c.Ba(Ac(a)):(b=a.w().j(),H(b instanceof P,"serverChildren would be complete if leaf node"),b=c.sc(b)),b=this.V.za(d,b,e);else{var h=J(b),k=c.rc(h,a.w());null==k&&yc(a.w(),h)&&(k=d.R(h));b=null!=k?this.V.F(d,h,k,D(b),f,e):a.O.j().Fa(h)?this.V.F(d,h,F,D(b),f,e):d;b.e()&&Dc(a.w())&&(d=c.Ba(Ac(a)),d.J()&&(b=this.V.za(b,d,e)))}d=Dc(a.w())||null!=c.mc(C);c=Vd(a,b,d,this.V.Qa())}else c=Wd(this,a,b.path,b.Pb,c,d,e);else if(b.type===cc)d=b.path,b=a.w(),f=b.j(),h=b.ea||d.e(),c=Xd(this,new Yd(a.O,new zc(f,
h,b.Tb)),d,c,wc,e);else throw Sc("Unknown operation type: "+b.type);e=sa(e.hb);d=c;b=d.O;b.ea&&(f=b.j().J()||b.j().e(),h=Zd(a),(0<e.length||!a.O.ea||f&&!b.j().$(h)||!b.j().C().$(h.C()))&&e.push(Bc(Zd(d))));return new Od(c,e)};
function Xd(a,b,c,d,e,f){var h=b.O;if(null!=d.mc(c))return b;var k;if(c.e())H(Dc(b.w()),"If change path is empty, we must have complete server data"),Ec(b.w())?(e=Ac(b),d=d.sc(e instanceof P?e:F)):d=d.Ba(Ac(b)),f=a.V.za(b.O.j(),d,f);else{var m=J(c);if(".priority"==m)H(1==$d(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.$c(c,f,k),f=null!=d?a.V.ga(f,d):h.j();else{var l=D(c);yc(h,m)?(k=b.w().j(),d=d.$c(c,h.j(),k),d=null!=d?h.j().R(m).F(l,d):h.j().R(m)):d=d.rc(m,
b.w());f=null!=d?a.V.F(h.j(),m,d,l,e,f):h.j()}}return Vd(b,f,h.ea||c.e(),a.V.Qa())}function Rd(a,b,c,d,e,f,h,k){var m=b.w();h=h?a.V:a.V.Vb();if(c.e())d=h.za(m.j(),d,null);else if(h.Qa()&&!m.Tb)d=m.j().F(c,d),d=h.za(m.j(),d,null);else{var l=J(c);if(!Fc(m,c)&&1<$d(c))return b;var u=D(c);d=m.j().R(l).F(u,d);d=".priority"==l?h.ga(m.j(),d):h.F(m.j(),l,d,u,wc,null)}m=m.ea||c.e();b=new Yd(b.O,new zc(d,m,h.Qa()));return Xd(a,b,c,e,new xc(e,b,f),k)}
function Qd(a,b,c,d,e,f,h){var k=b.O;e=new xc(e,b,f);if(c.e())h=a.V.za(b.O.j(),d,h),a=Vd(b,h,!0,a.V.Qa());else if(f=J(c),".priority"===f)h=a.V.ga(b.O.j(),d),a=Vd(b,h,k.ea,k.Tb);else{c=D(c);var m=k.j().R(f);if(!c.e()){var l=e.Xe(f);d=null!=l?".priority"===ae(c)&&l.Q(c.parent()).e()?l:l.F(c,d):F}m.$(d)?a=b:(h=a.V.F(k.j(),f,d,c,e,h),a=Vd(b,h,k.ea,a.V.Qa()))}return a}
function Sd(a,b,c,d,e,f,h){var k=b;be(d,function(d,l){var u=c.k(d);yc(b.O,J(u))&&(k=Qd(a,k,u,l,e,f,h))});be(d,function(d,l){var u=c.k(d);yc(b.O,J(u))||(k=Qd(a,k,u,l,e,f,h))});return k}function ce(a,b){be(b,function(b,d){a=a.F(b,d)});return a}
function Td(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!Dc(b.w()))return b;var m=b;c=c.e()?d:de(Q,c,d);var l=b.w().j();c.children.ia(function(c,d){if(l.Fa(c)){var G=b.w().j().R(c),G=ce(G,d);m=Rd(a,m,new L(c),G,e,f,h,k)}});c.children.ia(function(c,d){var G=!yc(b.w(),c)&&null==d.value;l.Fa(c)||G||(G=b.w().j().R(c),G=ce(G,d),m=Rd(a,m,new L(c),G,e,f,h,k))});return m}
function Wd(a,b,c,d,e,f,h){if(null!=e.mc(c))return b;var k=Ec(b.w()),m=b.w();if(null!=d.value){if(c.e()&&m.ea||Fc(m,c))return Rd(a,b,c,m.j().Q(c),e,f,k,h);if(c.e()){var l=Q;m.j().P(ee,function(a,b){l=l.set(new L(a),b)});return Td(a,b,c,l,e,f,k,h)}return b}l=Q;be(d,function(a){var b=c.k(a);Fc(m,b)&&(l=l.set(a,m.j().Q(b)))});return Td(a,b,c,l,e,f,k,h)};function fe(a){this.g=a}g=fe.prototype;g.F=function(a,b,c,d,e,f){H(a.zc(this.g),"A node must be indexed if only a child is updated");e=a.R(b);if(e.Q(d).$(c.Q(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Fa(b)?Jd(f,new I("child_removed",e,b)):H(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?Jd(f,new I("child_added",c,b)):Jd(f,new I("child_changed",c,b,e)));return a.J()&&c.e()?a:a.U(b,c).ob(this.g)};
g.za=function(a,b,c){null!=c&&(a.J()||a.P(N,function(a,e){b.Fa(a)||Jd(c,new I("child_removed",e,a))}),b.J()||b.P(N,function(b,e){if(a.Fa(b)){var f=a.R(b);f.$(e)||Jd(c,new I("child_changed",e,b,f))}else Jd(c,new I("child_added",e,b))}));return b.ob(this.g)};g.ga=function(a,b){return a.e()?F:a.ga(b)};g.Qa=function(){return!1};g.Vb=function(){return this};function ge(a){this.he=new fe(a.g);this.g=a.g;var b;a.la?(b=he(a),b=a.g.Fc(ie(a),b)):b=a.g.Ic();this.Uc=b;a.oa?(b=je(a),a=a.g.Fc(ke(a),b)):a=a.g.Gc();this.wc=a}g=ge.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.wc)};g.F=function(a,b,c,d,e,f){this.matches(new K(b,c))||(c=F);return this.he.F(a,b,c,d,e,f)};
g.za=function(a,b,c){b.J()&&(b=F);var d=b.ob(this.g),d=d.ga(F),e=this;b.P(N,function(a,b){e.matches(new K(a,b))||(d=d.U(a,F))});return this.he.za(a,d,c)};g.ga=function(a){return a};g.Qa=function(){return!0};g.Vb=function(){return this.he};function le(a){this.ta=new ge(a);this.g=a.g;H(a.ya,"Only valid if limit has been set");this.pa=a.pa;this.Jb=!me(a)}g=le.prototype;g.F=function(a,b,c,d,e,f){this.ta.matches(new K(b,c))||(c=F);return a.R(b).$(c)?a:a.Fb()<this.pa?this.ta.Vb().F(a,b,c,d,e,f):ne(this,a,b,c,e,f)};
g.za=function(a,b,c){var d;if(b.J()||b.e())d=F.ob(this.g);else if(2*this.pa<b.Fb()&&b.zc(this.g)){d=F.ob(this.g);b=this.Jb?b.$b(this.ta.wc,this.g):b.Yb(this.ta.Uc,this.g);for(var e=0;0<b.Sa.length&&e<this.pa;){var f=R(b),h;if(h=this.Jb?0>=this.g.compare(this.ta.Uc,f):0>=this.g.compare(f,this.ta.wc))d=d.U(f.name,f.S),e++;else break}}else{d=b.ob(this.g);d=d.ga(F);var k,m,l;if(this.Jb){b=d.$e(this.g);k=this.ta.wc;m=this.ta.Uc;var u=oe(this.g);l=function(a,b){return u(b,a)}}else b=d.Xb(this.g),k=this.ta.Uc,
m=this.ta.wc,l=oe(this.g);for(var e=0,z=!1;0<b.Sa.length;)f=R(b),!z&&0>=l(k,f)&&(z=!0),(h=z&&e<this.pa&&0>=l(f,m))?e++:d=d.U(f.name,F)}return this.ta.Vb().za(a,d,c)};g.ga=function(a){return a};g.Qa=function(){return!0};g.Vb=function(){return this.ta.Vb()};
function ne(a,b,c,d,e,f){var h;if(a.Jb){var k=oe(a.g);h=function(a,b){return k(b,a)}}else h=oe(a.g);H(b.Fb()==a.pa,"");var m=new K(c,d),l=a.Jb?pe(b,a.g):qe(b,a.g),u=a.ta.matches(m);if(b.Fa(c)){for(var z=b.R(c),l=e.fe(a.g,l,a.Jb);null!=l&&(l.name==c||b.Fa(l.name));)l=e.fe(a.g,l,a.Jb);e=null==l?1:h(l,m);if(u&&!d.e()&&0<=e)return null!=f&&Jd(f,new I("child_changed",d,c,z)),b.U(c,d);null!=f&&Jd(f,new I("child_removed",z,c));b=b.U(c,F);return null!=l&&a.ta.matches(l)?(null!=f&&Jd(f,new I("child_added",
l.S,l.name)),b.U(l.name,l.S)):b}return d.e()?b:u&&0<=h(l,m)?(null!=f&&(Jd(f,new I("child_removed",l.S,l.name)),Jd(f,new I("child_added",d,c))),b.U(c,d).U(l.name,F)):b};function Qc(a,b){this.B=a;H(p(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.ba=b||F;re(this.ba);this.Eb=null}var se=["object","boolean","number","string"];g=Qc.prototype;g.J=function(){return!0};g.C=function(){return this.ba};g.ga=function(a){return new Qc(this.B,a)};g.R=function(a){return".priority"===a?this.ba:F};g.Q=function(a){return a.e()?this:".priority"===J(a)?this.ba:F};g.Fa=function(){return!1};g.Ze=function(){return null};
g.U=function(a,b){return".priority"===a?this.ga(b):b.e()&&".priority"!==a?this:F.U(a,b).ga(this.ba)};g.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;H(".priority"!==c||1===$d(a),".priority must be the last token in a path");return this.U(c,F.F(D(a),b))};g.e=function(){return!1};g.Fb=function(){return 0};g.P=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ea(),".priority":this.C().H()}:this.Ea()};
g.hash=function(){if(null===this.Eb){var a="";this.ba.e()||(a+="priority:"+te(this.ba.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+id(this.B):a+this.B;this.Eb=Uc(a)}return this.Eb};g.Ea=function(){return this.B};g.tc=function(a){if(a===F)return 1;if(a instanceof P)return-1;H(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Ia(se,b),e=Ia(se,c);H(0<=d,"Unknown leaf type: "+b);H(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
g.ob=function(){return this};g.zc=function(){return!0};g.$=function(a){return a===this?!0:a.J()?this.B===a.B&&this.ba.$(a.ba):!1};g.toString=function(){return B(this.H(!0))};function ue(){}var ve={};function oe(a){return r(a.compare,a)}ue.prototype.nd=function(a,b){return 0!==this.compare(new K("[MIN_NAME]",a),new K("[MIN_NAME]",b))};ue.prototype.Ic=function(){return we};function xe(a){H(!a.e()&&".priority"!==J(a),"Can't create PathIndex with empty path or .priority key");this.cc=a}ka(xe,ue);g=xe.prototype;g.yc=function(a){return!a.Q(this.cc).e()};g.compare=function(a,b){var c=a.S.Q(this.cc),d=b.S.Q(this.cc),c=c.tc(d);return 0===c?Hc(a.name,b.name):c};
g.Fc=function(a,b){var c=M(a),c=F.F(this.cc,c);return new K(b,c)};g.Gc=function(){var a=F.F(this.cc,ye);return new K("[MAX_NAME]",a)};g.toString=function(){return this.cc.slice().join("/")};function ze(){}ka(ze,ue);g=ze.prototype;g.compare=function(a,b){var c=a.S.C(),d=b.S.C(),c=c.tc(d);return 0===c?Hc(a.name,b.name):c};g.yc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().$(b.C())};g.Ic=function(){return we};g.Gc=function(){return new K("[MAX_NAME]",new Qc("[PRIORITY-POST]",ye))};
g.Fc=function(a,b){var c=M(a);return new K(b,new Qc("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var N=new ze;function Ae(){}ka(Ae,ue);g=Ae.prototype;g.compare=function(a,b){return Hc(a.name,b.name)};g.yc=function(){throw Sc("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Ic=function(){return we};g.Gc=function(){return new K("[MAX_NAME]",F)};g.Fc=function(a){H(q(a),"KeyIndex indexValue must always be a string.");return new K(a,F)};g.toString=function(){return".key"};
var ee=new Ae;function Be(){}ka(Be,ue);g=Be.prototype;g.compare=function(a,b){var c=a.S.tc(b.S);return 0===c?Hc(a.name,b.name):c};g.yc=function(){return!0};g.nd=function(a,b){return!a.$(b)};g.Ic=function(){return we};g.Gc=function(){return Ce};g.Fc=function(a,b){var c=M(a);return new K(b,c)};g.toString=function(){return".value"};var De=new Be;function Ee(){this.Sb=this.oa=this.Lb=this.la=this.ya=!1;this.pa=0;this.oc="";this.ec=null;this.Ab="";this.bc=null;this.yb="";this.g=N}var Fe=new Ee;function me(a){return""===a.oc?a.la:"l"===a.oc}function ie(a){H(a.la,"Only valid if start has been set");return a.ec}function he(a){H(a.la,"Only valid if start has been set");return a.Lb?a.Ab:"[MIN_NAME]"}function ke(a){H(a.oa,"Only valid if end has been set");return a.bc}
function je(a){H(a.oa,"Only valid if end has been set");return a.Sb?a.yb:"[MAX_NAME]"}function Ge(a){var b=new Ee;b.ya=a.ya;b.pa=a.pa;b.la=a.la;b.ec=a.ec;b.Lb=a.Lb;b.Ab=a.Ab;b.oa=a.oa;b.bc=a.bc;b.Sb=a.Sb;b.yb=a.yb;b.g=a.g;return b}g=Ee.prototype;g.ne=function(a){var b=Ge(this);b.ya=!0;b.pa=a;b.oc="l";return b};g.oe=function(a){var b=Ge(this);b.ya=!0;b.pa=a;b.oc="r";return b};g.Nd=function(a,b){var c=Ge(this);c.la=!0;p(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.Ab=b):(c.Lb=!1,c.Ab="");return c};
g.fd=function(a,b){var c=Ge(this);c.oa=!0;p(a)||(a=null);c.bc=a;p(b)?(c.Sb=!0,c.yb=b):(c.Hg=!1,c.yb="");return c};function He(a,b){var c=Ge(a);c.g=b;return c}function Ie(a){var b={};a.la&&(b.sp=a.ec,a.Lb&&(b.sn=a.Ab));a.oa&&(b.ep=a.bc,a.Sb&&(b.en=a.yb));if(a.ya){b.l=a.pa;var c=a.oc;""===c&&(c=me(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}function S(a){return!(a.la||a.oa||a.ya)}function rd(a){return S(a)&&a.g==N}
function sd(a){var b={};if(rd(a))return b;var c;a.g===N?c="$priority":a.g===De?c="$value":a.g===ee?c="$key":(H(a.g instanceof xe,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.la&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.Ab)));a.oa&&(b.endAt=B(a.bc),a.Sb&&(b.endAt+=","+B(a.yb)));a.ya&&(me(a)?b.limitToFirst=a.pa:b.limitToLast=a.pa);return b}g.toString=function(){return B(Ie(this))};function Je(a,b){this.od=a;this.dc=b}Je.prototype.get=function(a){var b=x(this.od,a);if(!b)throw Error("No index defined for "+a);return b===ve?null:b};function Ke(a,b,c){var d=oa(a.od,function(d,f){var h=x(a.dc,f);H(h,"Missing index implementation for "+f);if(d===ve){if(h.yc(b.S)){for(var k=[],m=c.Xb(Jc),l=R(m);l;)l.name!=b.name&&k.push(l),l=R(m);k.push(b);return Le(k,oe(h))}return ve}h=c.get(b.name);k=d;h&&(k=k.remove(new K(b.name,h)));return k.Ra(b,b.S)});return new Je(d,a.dc)}
function Me(a,b,c){var d=oa(a.od,function(a){if(a===ve)return a;var d=c.get(b.name);return d?a.remove(new K(b.name,d)):a});return new Je(d,a.dc)}var Ne=new Je({".priority":ve},{".priority":N});function Oe(){this.set={}}g=Oe.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return Bb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return xa(this.set)};g.count=function(){return qa(this.set)};function Pe(a,b){t(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];t(this.set,function(b,c){a.push(c)});return a};function Qe(a,b,c,d){this.Zd=a;this.f=Yc(a);this.kc=b;this.qb=this.rb=0;this.Xa=Ad(b);this.Bf=c;this.xc=!1;this.Db=d;this.Yc=function(a){return ic(b,"long_polling",a)}}var Re,Se;
Qe.prototype.open=function(a,b){this.Qe=0;this.ja=b;this.ff=new Rb(a);this.Bb=!1;var c=this;this.tb=setTimeout(function(){c.f("Timed out trying to connect.");c.fb();c.tb=null},Math.floor(3E4));cd(function(){if(!c.Bb){c.Wa=new Te(function(a,b,d,k,m){Ue(c,arguments);if(c.Wa)if(c.tb&&(clearTimeout(c.tb),c.tb=null),c.xc=!0,"start"==a)c.id=b,c.mf=d;else if("close"===a)b?(c.Wa.Kd=!1,Sb(c.ff,b,function(){c.fb()})):c.fb();else throw Error("Unrecognized command received: "+a);},function(a,b){Ue(c,arguments);
Tb(c.ff,a,b)},function(){c.fb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Wa.Qd&&(a.cb=c.Wa.Qd);a.v="5";c.Bf&&(a.s=c.Bf);c.Db&&(a.ls=c.Db);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);Ve(c.Wa,a,function(){})}})};
Qe.prototype.start=function(){var a=this.Wa,b=this.mf;a.fg=this.id;a.gg=b;for(a.Ud=!0;We(a););a=this.id;b=this.mf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.Yc(c);this.gc.style.display="none";document.body.appendChild(this.gc)};
Qe.isAvailable=function(){return Re||!Se&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Dg)&&!0};g=Qe.prototype;g.sd=function(){};g.Tc=function(){this.Bb=!0;this.Wa&&(this.Wa.close(),this.Wa=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.tb&&(clearTimeout(this.tb),this.tb=null)};
g.fb=function(){this.Bb||(this.f("Longpoll is closing itself"),this.Tc(),this.ja&&(this.ja(this.xc),this.ja=null))};g.close=function(){this.Bb||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=B(a);this.rb+=a.length;kc(this.Xa,"bytes_sent",a.length);a=Mb(a);a=ab(a,!0);a=gd(a,1840);for(var b=0;b<a.length;b++){var c=this.Wa;c.Qc.push({ug:this.Qe,Bg:a.length,Se:a[b]});c.Ud&&We(c);this.Qe++}};function Ue(a,b){var c=B(b).length;a.qb+=c;kc(a.Xa,"bytes_received",c)}
function Te(a,b,c,d){this.Yc=d;this.kb=c;this.ve=new Oe;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Rc();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||E("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.ib=a.contentDocument:a.contentWindow?a.ib=a.contentWindow.document:a.document&&(a.ib=a.document);this.Ga=a;a="";this.Ga.src&&"javascript:"===this.Ga.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ga.ib.open(),this.Ga.ib.write(a),this.Ga.ib.close()}catch(f){E("frame writing exception"),f.stack&&E(f.stack),E(f)}}
Te.prototype.close=function(){this.Ud=!1;if(this.Ga){this.Ga.ib.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ga&&(document.body.removeChild(a.Ga),a.Ga=null)},Math.floor(0))}var b=this.kb;b&&(this.kb=null,b())};
function We(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.fg;b.pw=a.gg;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Se.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.ug+"&ts"+d+"="+e.Bg+"&d"+d+"="+e.Se;d++}else break;Xe(a,b+c,a.$d);return!0}return!1}function Xe(a,b,c){function d(){a.ve.remove(c);We(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));Ve(a,b,function(){clearTimeout(e);d()})}
function Ve(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ga.ib.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){E("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ga.ib.body.appendChild(d)}}catch(e){}},Math.floor(1))};function Ye(a){Ze(this,a)}var $e=[Qe,Dd];function Ze(a,b){var c=Dd&&Dd.isAvailable(),d=c&&!(Yb.cf||!0===Yb.get("previous_websocket_failure"));b.Cg&&(c||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[Dd];else{var e=a.Wc=[];hd($e,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function af(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function bf(a,b,c,d,e,f,h){this.id=a;this.f=Yc("c:"+this.id+":");this.te=c;this.Mc=d;this.ja=e;this.se=f;this.M=b;this.Ad=[];this.Oe=0;this.Af=new Ye(b);this.L=0;this.Db=h;this.f("Connection created");cf(this)}
function cf(a){var b=af(a.Af);a.I=new b("c:"+a.id+":"+a.Oe++,a.M,void 0,a.Db);a.xe=b.responsesRequiredToBeHealthy||0;var c=df(a,a.I),d=ef(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Cb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=ld(function(){a.md=null;a.Cb||(a.I&&102400<a.I.qb?(a.f("Connection exceeded healthy timeout but has received "+a.I.qb+" bytes.  Marking connection healthy."),a.Cb=!0,a.I.sd()):a.I&&10240<a.I.rb?a.f("Connection exceeded healthy timeout but has sent "+
a.I.rb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function ef(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.L?1===a.L&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.M.bb.substr(0,2)&&(Yb.remove("host:"+a.M.host),a.M.bb=a.M.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
function df(a,b){return function(c){if(2!=a.L)if(b===a.Rc){var d=ed("t",c);c=ed("d",c);if("c"==d){if(d=ed("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.yf=c.s;hc(a.M,f);0==a.L&&(a.I.start(),ff(a,a.I,d),"5"!==e&&O("Protocol version mismatch detected"),c=a.Af,(c=1<c.Wc.length?c.Wc[1]:null)&&gf(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];hf(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.se&&(a.se(c),a.se=null),a.ja=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),hc(a.M,c),1===a.L?a.close():(jf(a),cf(a))):"e"===d?Zc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),kf(a),lf(a)):Zc("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=ed("t",c),c=ed("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?mf(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.xf--,mf(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}bf.prototype.va=function(a){nf(this,{t:"d",d:a})};function hf(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
function mf(a){0>=a.xf?(a.f("Secondary connection is healthy."),a.Cb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,hf(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}bf.prototype.wd=function(a){kf(this);this.te(a)};function kf(a){a.Cb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Cb=!0,a.I.sd()))}
function gf(a,b){a.D=new b("c:"+a.id+":"+a.Oe++,a.M,a.yf);a.xf=b.responsesRequiredToBeHealthy||0;a.D.open(df(a,a.D),ef(a,a.D));ld(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function ff(a,b,c){a.f("Realtime connection established.");a.I=b;a.L=1;a.Mc&&(a.Mc(c,a.yf),a.Mc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Cb=!0):ld(function(){lf(a)},Math.floor(5E3))}
function lf(a){a.Cb||1!==a.L||(a.f("sending ping on primary."),nf(a,{t:"c",d:{t:"p",d:{}}}))}function nf(a,b){if(1!==a.L)throw"Connection is not connected";a.Xc.send(b)}bf.prototype.close=function(){2!==this.L&&(this.f("Closing realtime connection."),this.L=2,jf(this),this.ja&&(this.ja(),this.ja=null))};function jf(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function L(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(D(a),D(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
function of(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=Hc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function J(a){return a.Z>=a.o.length?null:a.o[a.Z]}function $d(a){return a.o.length-a.Z}function D(a){var b=a.Z;b<a.o.length&&b++;return new L(a.o,b)}function ae(a){return a.Z<a.o.length?a.o[a.o.length-1]:null}g=L.prototype;
g.toString=function(){for(var a="",b=this.Z;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Z+(a||0))};g.parent=function(){if(this.Z>=this.o.length)return null;for(var a=[],b=this.Z;b<this.o.length-1;b++)a.push(this.o[b]);return new L(a,0)};
g.k=function(a){for(var b=[],c=this.Z;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Z;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new L(b,0)};g.e=function(){return this.Z>=this.o.length};g.$=function(a){if($d(this)!==$d(a))return!1;for(var b=this.Z,c=a.Z;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
g.contains=function(a){var b=this.Z,c=a.Z;if($d(this)>$d(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var C=new L("");function pf(a,b){this.Ta=a.slice();this.Ka=Math.max(1,this.Ta.length);this.Te=b;for(var c=0;c<this.Ta.length;c++)this.Ka+=Nb(this.Ta[c]);qf(this)}pf.prototype.push=function(a){0<this.Ta.length&&(this.Ka+=1);this.Ta.push(a);this.Ka+=Nb(a);qf(this)};pf.prototype.pop=function(){var a=this.Ta.pop();this.Ka-=Nb(a);0<this.Ta.length&&--this.Ka};
function qf(a){if(768<a.Ka)throw Error(a.Te+"has a key path longer than 768 bytes ("+a.Ka+").");if(32<a.Ta.length)throw Error(a.Te+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+rf(a));}function rf(a){return 0==a.Ta.length?"":"in property '"+a.Ta.join(".")+"'"};function sf(a){a instanceof tf||$c("Don't call new Database() directly - please use firebase.database().");this.ua=a;this.ca=new U(a,C);this.INTERNAL=new uf(this)}var vf={TIMESTAMP:{".sv":"timestamp"}};g=sf.prototype;g.app=null;g.pf=function(a){wf(this,"ref");y("database.ref",0,1,arguments.length);return p(a)?this.ca.k(a):this.ca};
g.rg=function(a){wf(this,"database.refFromURL");y("database.refFromURL",1,1,arguments.length);var b=ad(a);xf("database.refFromURL",b);var c=b.kc;c.host!==this.ua.M.host&&$c("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ua.M.host+")");return this.pf(b.path.toString())};function wf(a,b){null===a.ua&&$c("Cannot call "+b+" on a deleted database.")}g.$f=function(){y("database.goOffline",0,0,arguments.length);wf(this,"goOffline");this.ua.eb()};
g.ag=function(){y("database.goOnline",0,0,arguments.length);wf(this,"goOnline");this.ua.lc()};Object.defineProperty(sf.prototype,"app",{get:function(){return this.ua.app}});function uf(a){this.$a=a}uf.prototype.delete=function(){wf(this.$a,"delete");var a=yf.Wb(),b=this.$a.ua;x(a.nb,b.app.name)!==b&&$c("Database "+b.app.name+" has already been deleted.");b.eb();delete a.nb[b.app.name];this.$a.ua=null;this.$a.ca=null;this.$a=this.$a.INTERNAL=null;return firebase.Promise.resolve()};
sf.prototype.ref=sf.prototype.pf;sf.prototype.refFromURL=sf.prototype.rg;sf.prototype.goOnline=sf.prototype.ag;sf.prototype.goOffline=sf.prototype.$f;uf.prototype["delete"]=uf.prototype.delete;function Mc(){this.m=this.B=null}Mc.prototype.find=function(a){if(null!=this.B)return this.B.Q(a);if(a.e()||null==this.m)return null;var b=J(a);a=D(a);return this.m.contains(b)?this.m.get(b).find(a):null};function Oc(a,b,c){if(b.e())a.B=c,a.m=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.m&&(a.m=new Oe);var d=J(b);a.m.contains(d)||a.m.add(d,new Mc);a=a.m.get(d);b=D(b);Oc(a,b,c)}}
function zf(a,b){if(b.e())return a.B=null,a.m=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.P(N,function(b,c){Oc(a,new L(b),c)});return zf(a,b)}return null!==a.m?(c=J(b),b=D(b),a.m.contains(c)&&zf(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function Nc(a,b,c){null!==a.B?c(b,a.B):a.P(function(a,e){var f=new L(b.toString()+"/"+a);Nc(e,f,c)})}Mc.prototype.P=function(a){null!==this.m&&Pe(this.m,function(b,c){a(b,c)})};var Af=/[\[\].#$\/\u0000-\u001F\u007F]/,Bf=/[\[\].#$\u0000-\u001F\u007F]/;function Cf(a){return q(a)&&0!==a.length&&!Af.test(a)}function Df(a){return null===a||q(a)||fa(a)&&!bd(a)||ha(a)&&Bb(a,".sv")}function Ef(a,b,c,d){d&&!p(b)||Ff(Db(a,1,d),b,c)}
function Ff(a,b,c){c instanceof L&&(c=new pf(c,a));if(!p(b))throw Error(a+"contains undefined "+rf(c));if(ga(b))throw Error(a+"contains a function "+rf(c)+" with contents: "+b.toString());if(bd(b))throw Error(a+"contains "+b.toString()+" "+rf(c));if(q(b)&&b.length>10485760/3&&10485760<Nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+rf(c)+" ('"+b.substring(0,50)+"...')");if(ha(b)){var d=!1,e=!1;Cb(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!Cf(b)))throw Error(a+" contains an invalid key ("+b+") "+rf(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Ff(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+rf(c)+" in addition to actual children.");}}
function Gf(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Cf(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(of);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
function Hf(a,b,c){var d=Db(a,1,!1);if(!ha(b)||da(b))throw Error(d+" must be an object containing the children to replace.");var e=[];Cb(b,function(a,b){var k=new L(a);Ff(d,b,c.k(k));if(".priority"===ae(k)&&!Df(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});Gf(d,e)}
function If(a,b,c){if(bd(c))throw Error(Db(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Df(c))throw Error(Db(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Jf(a,b,c){if(!c||p(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(Db(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Kf(a,b){if(p(b)&&!Cf(b))throw Error(Db(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Lf(a,b){if(!q(b)||0===b.length||Bf.test(b))throw Error(Db(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Mf(a,b){if(".info"===J(b))throw Error(a+" failed: Can't modify data under /.info/");}
function xf(a,b){var c=b.path.toString(),d;!(d=!q(b.kc.host)||0===b.kc.host.length||!Cf(b.kc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(q(c)&&0!==c.length&&!Bf.test(c)));if(d)throw Error(Db(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function V(a,b){this.ua=a;this.ra=b}V.prototype.cancel=function(a){y("Firebase.onDisconnect().cancel",0,1,arguments.length);A("Firebase.onDisconnect().cancel",1,a,!0);var b=new Hb;this.ua.xd(this.ra,Ib(b,a));return b.sa};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){y("Firebase.onDisconnect().remove",0,1,arguments.length);Mf("Firebase.onDisconnect().remove",this.ra);A("Firebase.onDisconnect().remove",1,a,!0);var b=new Hb;Nf(this.ua,this.ra,null,Ib(b,a));return b.sa};
V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){y("Firebase.onDisconnect().set",1,2,arguments.length);Mf("Firebase.onDisconnect().set",this.ra);Ef("Firebase.onDisconnect().set",a,this.ra,!1);A("Firebase.onDisconnect().set",2,b,!0);var c=new Hb;Nf(this.ua,this.ra,a,Ib(c,b));return c.sa};V.prototype.set=V.prototype.set;
V.prototype.Kb=function(a,b,c){y("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Mf("Firebase.onDisconnect().setWithPriority",this.ra);Ef("Firebase.onDisconnect().setWithPriority",a,this.ra,!1);If("Firebase.onDisconnect().setWithPriority",2,b);A("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new Hb;Of(this.ua,this.ra,a,b,Ib(d,c));return d.sa};V.prototype.setWithPriority=V.prototype.Kb;
V.prototype.update=function(a,b){y("Firebase.onDisconnect().update",1,2,arguments.length);Mf("Firebase.onDisconnect().update",this.ra);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Hf("Firebase.onDisconnect().update",a,this.ra);A("Firebase.onDisconnect().update",2,b,!0);
c=new Hb;Pf(this.ua,this.ra,a,Ib(c,b));return c.sa};V.prototype.update=V.prototype.update;function Qf(a){H(da(a)&&0<a.length,"Requires a non-empty array");this.Kf=a;this.Ec={}}Qf.prototype.Ge=function(a,b){var c;c=this.Ec[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Ke.apply(c[d].Pa,Array.prototype.slice.call(arguments,1))};Qf.prototype.hc=function(a,b,c){Rf(this,a);this.Ec[a]=this.Ec[a]||[];this.Ec[a].push({Ke:b,Pa:c});(a=this.Ye(a))&&b.apply(c,a)};
Qf.prototype.Jc=function(a,b,c){Rf(this,a);a=this.Ec[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ke===b&&(!c||c===a[d].Pa)){a.splice(d,1);break}};function Rf(a,b){H(Oa(a.Kf,function(a){return a===b}),"Unknown event: "+b)};function Sf(){Qf.call(this,["online"]);this.ic=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!Qb()){var a=this;window.addEventListener("online",function(){a.ic||(a.ic=!0,a.Ge("online",!0))},!1);window.addEventListener("offline",function(){a.ic&&(a.ic=!1,a.Ge("online",!1))},!1)}}ka(Sf,Qf);Sf.prototype.Ye=function(a){H("online"===a,"Unknown event type: "+a);return[this.ic]};ba(Sf);function Tf(){Qf.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Nb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Nb&&(c.Nb=b,c.Ge("visible",b))},!1)}}ka(Tf,Qf);Tf.prototype.Ye=function(a){H("visible"===a,"Unknown event type: "+a);return[this.Nb]};ba(Tf);var Uf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);H(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);H(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Vf(a,b){this.Oa=a;this.ca=b?b:Wf}g=Vf.prototype;g.Ra=function(a,b){return new Vf(this.Oa,this.ca.Ra(a,b,this.Oa).Y(null,null,!1,null,null))};g.remove=function(a){return new Vf(this.Oa,this.ca.remove(a,this.Oa).Y(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ca;!c.e();){b=this.Oa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function Xf(a,b){for(var c,d=a.ca,e=null;!d.e();){c=a.Oa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ca.e()};g.count=function(){return this.ca.count()};g.Hc=function(){return this.ca.Hc()};g.fc=function(){return this.ca.fc()};g.ia=function(a){return this.ca.ia(a)};
g.Xb=function(a){return new Yf(this.ca,null,this.Oa,!1,a)};g.Yb=function(a,b){return new Yf(this.ca,a,this.Oa,!1,b)};g.$b=function(a,b){return new Yf(this.ca,a,this.Oa,!0,b)};g.$e=function(a){return new Yf(this.ca,null,this.Oa,!0,a)};function Yf(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Sa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Sa.push(a);break}else this.Sa.push(a),a=this.le?a.right:a.left}
function R(a){if(0===a.Sa.length)return null;var b=a.Sa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Sa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Sa.push(b),b=b.left;return c}function Zf(a){if(0===a.Sa.length)return null;var b;b=a.Sa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function $f(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Wf;this.right=null!=e?e:Wf}g=$f.prototype;
g.Y=function(a,b,c,d,e){return new $f(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a)};function ag(a){return a.left.e()?a:ag(a.left)}g.Hc=function(){return ag(this).key};g.fc=function(){return this.right.e()?this.key:this.right.fc()};
g.Ra=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Y(null,null,null,e.left.Ra(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.Ra(a,b,c));return bg(e)};function cg(a){if(a.left.e())return Wf;a.left.fa()||a.left.left.fa()||(a=dg(a));a=a.Y(null,null,null,cg(a.left),null);return bg(a)}
g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=dg(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=eg(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=fg(c),c.left.left.fa()&&(c=eg(c),c=fg(c)));if(0===b(a,c.key)){if(c.right.e())return Wf;d=ag(c.right);c=c.Y(d.key,d.value,null,null,cg(c.right))}c=c.Y(null,null,null,null,c.right.remove(a,b))}return bg(c)};g.fa=function(){return this.color};
function bg(a){a.right.fa()&&!a.left.fa()&&(a=gg(a));a.left.fa()&&a.left.left.fa()&&(a=eg(a));a.left.fa()&&a.right.fa()&&(a=fg(a));return a}function dg(a){a=fg(a);a.right.left.fa()&&(a=a.Y(null,null,null,null,eg(a.right)),a=gg(a),a=fg(a));return a}function gg(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null)}function eg(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null))}
function fg(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null))}function hg(){}g=hg.prototype;g.Y=function(){return this};g.Ra=function(a,b){return new $f(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ia=function(){return!1};g.Hc=function(){return null};g.fc=function(){return null};g.fa=function(){return!1};var Wf=new hg;function P(a,b,c){this.m=a;(this.ba=b)&&re(this.ba);a.e()&&H(!this.ba||this.ba.e(),"An empty node cannot have a priority");this.zb=c;this.Eb=null}g=P.prototype;g.J=function(){return!1};g.C=function(){return this.ba||F};g.ga=function(a){return this.m.e()?this:new P(this.m,a,this.zb)};g.R=function(a){if(".priority"===a)return this.C();a=this.m.get(a);return null===a?F:a};g.Q=function(a){var b=J(a);return null===b?this:this.R(b).Q(D(a))};g.Fa=function(a){return null!==this.m.get(a)};
g.U=function(a,b){H(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ga(b);var c=new K(a,b),d,e;b.e()?(d=this.m.remove(a),c=Me(this.zb,c,this.m)):(d=this.m.Ra(a,b),c=Ke(this.zb,c,this.m));e=d.e()?F:this.ba;return new P(d,e,c)};g.F=function(a,b){var c=J(a);if(null===c)return b;H(".priority"!==J(a)||1===$d(a),".priority must be the last token in a path");var d=this.R(c).F(D(a),b);return this.U(c,d)};g.e=function(){return this.m.e()};g.Fb=function(){return this.m.count()};
var ig=/^(0|[1-9]\d*)$/;g=P.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.P(N,function(f,h){b[f]=h.H(a);c++;e&&ig.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Eb){var a="";this.C().e()||(a+="priority:"+te(this.C().H())+":");this.P(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Eb=""===a?"":Uc(a)}return this.Eb};
g.Ze=function(a,b,c){return(c=jg(this,c))?(a=Xf(c,new K(a,b)))?a.name:null:Xf(this.m,a)};function pe(a,b){var c;c=(c=jg(a,b))?(c=c.Hc())&&c.name:a.m.Hc();return c?new K(c,a.m.get(c)):null}function qe(a,b){var c;c=(c=jg(a,b))?(c=c.fc())&&c.name:a.m.fc();return c?new K(c,a.m.get(c)):null}g.P=function(a,b){var c=jg(this,a);return c?c.ia(function(a){return b(a.name,a.S)}):this.m.ia(b)};g.Xb=function(a){return this.Yb(a.Ic(),a)};
g.Yb=function(a,b){var c=jg(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.m.Yb(a.name,Jc),d=Zf(c);null!=d&&0>b.compare(d,a);)R(c),d=Zf(c);return c};g.$e=function(a){return this.$b(a.Gc(),a)};g.$b=function(a,b){var c=jg(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.m.$b(a.name,Jc),d=Zf(c);null!=d&&0<b.compare(d,a);)R(c),d=Zf(c);return c};g.tc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===ye?-1:0};
g.ob=function(a){if(a===ee||ua(this.zb.dc,a.toString()))return this;var b=this.zb,c=this.m;H(a!==ee,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(Jc),f=R(c);f;)e=e||a.yc(f.S),d.push(f),f=R(c);d=e?Le(d,oe(a)):ve;e=a.toString();c=ya(b.dc);c[e]=a;a=ya(b.od);a[e]=d;return new P(this.m,this.ba,new Je(a,c))};g.zc=function(a){return a===ee||ua(this.zb.dc,a.toString())};
g.$=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().$(a.C())&&this.m.count()===a.m.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=R(b),d=R(a);c&&d;){if(c.name!==d.name||!c.S.$(d.S))return!1;c=R(b);d=R(a)}return null===c&&null===d}return!1};function jg(a,b){return b===ee?null:a.zb.get(b.toString())}g.toString=function(){return B(this.H(!0))};function M(a,b){if(null===a)return F;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);H(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Qc(a,M(c));if(a instanceof Array){var d=F,e=a;t(e,function(a,b){if(Bb(e,b)&&"."!==b.substring(0,1)){var c=M(a);if(c.J()||!c.e())d=
d.U(b,c)}});return d.ga(M(c))}var f=[],h=!1,k=a;Cb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=M(k[a]);b.e()||(h=h||!b.C().e(),f.push(new K(a,b)))}});if(0==f.length)return F;var m=Le(f,Gc,function(a){return a.name},Ic);if(h){var l=Le(f,oe(N));return new P(m,M(c),new Je({".priority":l},{".priority":N}))}return new P(m,M(c),Ne)}var kg=Math.log(2);
function lg(a){this.count=parseInt(Math.log(a+1)/kg,10);this.Re=this.count-1;this.Lf=a+1&parseInt(Array(this.count+1).join("1"),2)}function mg(a){var b=!(a.Lf&1<<a.Re);a.Re--;return b}
function Le(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new $f(u,l.S,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new $f(u,l.S,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],G=c?c(k):k,z=new $f(G,k.S,h,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var G=mg(b),ud=Math.pow(2,b.count-(z+1));G?d(ud,!1):(d(ud,!1),d(ud,!0))}return l}(new lg(a.length));
return null!==f?new Vf(d||b,f):new Vf(d||b)}function te(a){return"number"===typeof a?"number:"+id(a):"string:"+a}function re(a){if(a.J()){var b=a.H();H("string"===typeof b||"number"===typeof b||"object"===typeof b&&Bb(b,".sv"),"Priority must be a string or number.")}else H(a===ye||a.e(),"priority of unexpected type.");H(a===ye||a.C().e(),"Priority nodes can't have a priority of their own.")}var F=new P(new Vf(Ic),null,Ne);function ng(){P.call(this,new Vf(Ic),F,Ne)}ka(ng,P);g=ng.prototype;
g.tc=function(a){return a===this?0:1};g.$=function(a){return a===this};g.C=function(){return this};g.R=function(){return F};g.e=function(){return!1};var ye=new ng,we=new K("[MIN_NAME]",F),Ce=new K("[MAX_NAME]",ye);function W(a,b,c){this.A=a;this.W=b;this.g=c}W.prototype.H=function(){y("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};W.prototype.val=W.prototype.H;W.prototype.Ue=function(){y("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};W.prototype.exportVal=W.prototype.Ue;W.prototype.Vf=function(){y("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.Vf;
W.prototype.k=function(a){y("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));Lf("Firebase.DataSnapshot.child",a);var b=new L(a),c=this.W.k(b);return new W(this.A.Q(b),c,N)};W.prototype.child=W.prototype.k;W.prototype.Fa=function(a){y("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Lf("Firebase.DataSnapshot.hasChild",a);var b=new L(a);return!this.A.Q(b).e()};W.prototype.hasChild=W.prototype.Fa;
W.prototype.C=function(){y("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){y("Firebase.DataSnapshot.forEach",1,1,arguments.length);A("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.P(this.g,function(c,d){return a(new W(d,b.W.k(c),N))})};W.prototype.forEach=W.prototype.forEach;
W.prototype.kd=function(){y("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.kd;W.prototype.getKey=function(){y("Firebase.DataSnapshot.key",0,0,arguments.length);return this.W.getKey()};kd(W.prototype,"key",W.prototype.getKey);W.prototype.Fb=function(){y("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Fb()};W.prototype.numChildren=W.prototype.Fb;
W.prototype.xb=function(){y("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.W};kd(W.prototype,"ref",W.prototype.xb);function Yd(a,b){this.O=a;this.Ld=b}function Vd(a,b,c,d){return new Yd(new zc(b,c,d),a.Ld)}function Zd(a){return a.O.ea?a.O.j():null}Yd.prototype.w=function(){return this.Ld};function Ac(a){return a.Ld.ea?a.Ld.j():null};function og(a,b){this.W=a;var c=a.n,d=new fe(c.g),c=S(c)?new fe(c.g):c.ya?new le(c):new ge(c);this.of=new Pd(c);var e=b.w(),f=b.O,h=d.za(F,e.j(),null),k=c.za(F,f.j(),null);this.Na=new Yd(new zc(k,f.ea,c.Qa()),new zc(h,e.ea,d.Qa()));this.ab=[];this.Sf=new Kd(a)}function pg(a){return a.W}g=og.prototype;g.w=function(){return this.Na.w().j()};g.jb=function(a){var b=Ac(this.Na);return b&&(S(this.W.n)||!a.e()&&!b.R(J(a)).e())?b.Q(a):null};g.e=function(){return 0===this.ab.length};g.Ob=function(a){this.ab.push(a)};
g.mb=function(a,b){var c=[];if(b){H(null==a,"A cancel should cancel all event registrations.");var d=this.W.path;Ja(this.ab,function(a){(a=a.Pe(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.ab.length;++f){var h=this.ab[f];if(!h.matches(a))e.push(h);else if(a.af()){e=e.concat(this.ab.slice(f+1));break}}this.ab=e}else this.ab=[];return c};
g.gb=function(a,b,c){a.type===wd&&null!==a.source.Ib&&(H(Ac(this.Na),"We should always have a full cache before handling merges"),H(Zd(this.Na),"Missing event cache, even though we have a server cache"));var d=this.Na;a=this.of.gb(d,a,b,c);b=this.of;c=a.Sd;H(c.O.j().zc(b.V.g),"Event snap not indexed");H(c.w().j().zc(b.V.g),"Server snap not indexed");H(Dc(a.Sd.w())||!Dc(d.w()),"Once a server snap is complete, it should never go back");this.Na=a.Sd;return qg(this,a.Mf,a.Sd.O.j(),null)};
function rg(a,b){var c=a.Na.O,d=[];c.j().J()||c.j().P(N,function(a,b){d.push(new I("child_added",b,a))});c.ea&&d.push(Bc(c.j()));return qg(a,d,c.j(),b)}function qg(a,b,c,d){return Ld(a.Sf,b,c,d?[d]:a.ab)};function sg(a,b,c){this.Qb=a;this.sb=b;this.ub=c||null}g=sg.prototype;g.tf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.n.g;return new tc("value",this,new W(a.Ma,b.xb(),c))};g.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){H(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.Qb;return function(){d.call(b,a.Md)}};g.Pe=function(a,b){return this.sb?new uc(this,a,b):null};
g.matches=function(a){return a instanceof sg?a.Qb&&this.Qb?a.Qb===this.Qb&&a.ub===this.ub:!0:!1};g.af=function(){return null!==this.Qb};function tg(a,b,c){this.ha=a;this.sb=b;this.ub=c}g=tg.prototype;g.tf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ha};g.Pe=function(a,b){return this.sb?new uc(this,a,b):null};
g.createEvent=function(a,b){H(null!=a.Za,"Child events should have a childName.");var c=b.xb().k(a.Za);return new tc(a.type,this,new W(a.Ma,c,b.n.g),a.Dd)};g.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){H(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.ha[a.gd];return function(){d.call(b,a.Md,a.Dd)}};
g.matches=function(a){if(a instanceof tg){if(!this.ha||!a.ha)return!0;if(this.ub===a.ub){var b=qa(a.ha);if(b===qa(this.ha)){if(1===b){var b=ra(a.ha),c=ra(this.ha);return c===b&&(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c])}return pa(this.ha,function(b,c){return a.ha[c]===b})}}}return!1};g.af=function(){return null!==this.ha};function X(a,b,c,d){this.u=a;this.path=b;this.n=c;this.Oc=d}
function ug(a){var b=null,c=null;a.la&&(b=ie(a));a.oa&&(c=ke(a));if(a.g===ee){if(a.la){if("[MIN_NAME]"!=he(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.oa){if("[MAX_NAME]"!=je(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!Df(b)||null!=c&&!Df(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(H(a.g instanceof xe||a.g===De,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function vg(a){if(a.la&&a.oa&&a.ya&&(!a.ya||""===a.oc))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function wg(a,b){if(!0===a.Oc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.xb=function(){y("Query.ref",0,0,arguments.length);return new U(this.u,this.path)};
g.hc=function(a,b,c,d){y("Query.on",2,4,arguments.length);Jf("Query.on",a,!1);A("Query.on",2,b,!1);var e=xg("Query.on",c,d);if("value"===a)yg(this.u,this,new sg(b,e.cancel||null,e.Pa||null));else{var f={};f[a]=b;yg(this.u,this,new tg(f,e.cancel,e.Pa))}return b};
g.Jc=function(a,b,c){y("Query.off",0,3,arguments.length);Jf("Query.off",a,!0);A("Query.off",2,b,!0);Eb("Query.off",3,c);var d=null,e=null;"value"===a?d=new sg(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new tg(e,null,c||null));e=this.u;d=".info"===J(this.path)?e.pd.mb(this,d):e.K.mb(this,d);pc(e.da,this.path,d)};
g.kg=function(a,b){function c(k){f&&(f=!1,e.Jc(a,c),b&&b.call(d.Pa,k),h.resolve(k))}y("Query.once",1,4,arguments.length);Jf("Query.once",a,!1);A("Query.once",2,b,!0);var d=xg("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new Hb;Jb(h.sa);this.hc(a,c,function(b){e.Jc(a,c);d.cancel&&d.cancel.call(d.Pa,b);h.reject(b)});return h.sa};
g.ne=function(a){y("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.ya)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.n.ne(a),this.Oc)};
g.oe=function(a){y("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.ya)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.n.oe(a),this.Oc)};
g.lg=function(a){y("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Lf("Query.orderByChild",a);wg(this,"Query.orderByChild");var b=new L(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
b=new xe(b);b=He(this.n,b);ug(b);return new X(this.u,this.path,b,!0)};g.mg=function(){y("Query.orderByKey",0,0,arguments.length);wg(this,"Query.orderByKey");var a=He(this.n,ee);ug(a);return new X(this.u,this.path,a,!0)};g.ng=function(){y("Query.orderByPriority",0,0,arguments.length);wg(this,"Query.orderByPriority");var a=He(this.n,N);ug(a);return new X(this.u,this.path,a,!0)};
g.og=function(){y("Query.orderByValue",0,0,arguments.length);wg(this,"Query.orderByValue");var a=He(this.n,De);ug(a);return new X(this.u,this.path,a,!0)};g.Nd=function(a,b){y("Query.startAt",0,2,arguments.length);Ef("Query.startAt",a,this.path,!0);Kf("Query.startAt",b);var c=this.n.Nd(a,b);vg(c);ug(c);if(this.n.la)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new X(this.u,this.path,c,this.Oc)};
g.fd=function(a,b){y("Query.endAt",0,2,arguments.length);Ef("Query.endAt",a,this.path,!0);Kf("Query.endAt",b);var c=this.n.fd(a,b);vg(c);ug(c);if(this.n.oa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.u,this.path,c,this.Oc)};
g.Rf=function(a,b){y("Query.equalTo",1,2,arguments.length);Ef("Query.equalTo",a,this.path,!1);Kf("Query.equalTo",b);if(this.n.la)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.oa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).fd(a,b)};
g.toString=function(){y("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Z;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||"/")};g.ka=function(){var a=fd(Ie(this.n));return"{}"===a?"default":a};
g.isEqual=function(a){y("Query.isEqual",1,1,arguments.length);if(!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var b=this.u===a.u,c=this.path.$(a.path),d=this.ka()===a.ka();return b&&c&&d};
function xg(a,b,c){var d={cancel:null,Pa:null};if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Pa=c,Eb(a,4,d.Pa);else if(b)if("object"===typeof b&&null!==b)d.Pa=b;else if("function"===typeof b)d.cancel=b;else throw Error(Db(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.hc;X.prototype.off=X.prototype.Jc;X.prototype.once=X.prototype.kg;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.lg;
X.prototype.orderByKey=X.prototype.mg;X.prototype.orderByPriority=X.prototype.ng;X.prototype.orderByValue=X.prototype.og;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.fd;X.prototype.equalTo=X.prototype.Rf;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;kd(X.prototype,"ref",X.prototype.xb);function zg(a,b){this.value=a;this.children=b||Ag}var Ag=new Vf(function(a,b){return a===b?0:a<b?-1:1});function Bg(a){var b=Q;t(a,function(a,d){b=b.set(new L(d),a)});return b}g=zg.prototype;g.e=function(){return null===this.value&&this.children.e()};function Cg(a,b,c){if(null!=a.value&&c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=Cg(a,D(b),c),null!=b?{path:(new L(d)).k(b.path),value:b.value}:null):null}
function Dg(a,b){return Cg(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q};g.set=function(a,b){if(a.e())return new zg(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Ra(c,d);return new zg(this.value,c)};
g.remove=function(a){if(a.e())return this.children.e()?Q:new zg(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Ra(b,a),null===this.value&&b.e()?Q:new zg(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null};
function de(a,b,c){if(b.e())return c;var d=J(b);b=de(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Ra(d,b);return new zg(a.value,d)}function Eg(a,b){return Fg(a,C,b)}function Fg(a,b,c){var d={};a.children.ia(function(a,f){d[a]=Fg(f,b.k(a),c)});return c(b,a.value,d)}function Gg(a,b,c){return Hg(a,b,C,c)}function Hg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?Hg(a,D(b),c.k(e),d):null}
function Ig(a,b,c){Jg(a,b,C,c)}function Jg(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=J(b);return(a=a.children.get(e))?Jg(a,D(b),c.k(e),d):Q}function be(a,b){Kg(a,C,b)}function Kg(a,b,c){a.children.ia(function(a,e){Kg(e,b.k(a),c)});a.value&&c(b,a.value)}function Lg(a,b){a.children.ia(function(a,d){d.value&&b(a,d.value)})}var Q=new zg(null);zg.prototype.toString=function(){var a={};be(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Mg(a,b,c){this.type=Ud;this.source=Ng;this.path=a;this.Pb=b;this.Id=c}Mg.prototype.Nc=function(a){if(this.path.e()){if(null!=this.Pb.value)return H(this.Pb.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Pb.subtree(new L(a));return new Mg(C,a,this.Id)}H(J(this.path)===a,"operationForChild called for unrelated child.");return new Mg(D(this.path),this.Pb,this.Id)};
Mg.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Pb+")"};var ac=0,wd=1,Ud=2,cc=3;function Og(a,b,c,d){this.ee=a;this.We=b;this.Ib=c;this.Ee=d;H(!d||b,"Tagged queries must be from server.")}var Ng=new Og(!0,!1,null,!1),Pg=new Og(!1,!0,null,!1);Og.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Ib+")":"server"};function Qg(a){this.X=a}var Rg=new Qg(new zg(null));function Sg(a,b,c){if(b.e())return new Qg(new zg(c));var d=Dg(a.X,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.F(b,c);return new Qg(a.X.set(e,d))}a=de(a.X,b,new zg(c));return new Qg(a)}function Tg(a,b,c){var d=a;Cb(c,function(a,c){d=Sg(d,b.k(a),c)});return d}Qg.prototype.Ed=function(a){if(a.e())return Rg;a=de(this.X,a,Q);return new Qg(a)};function Ug(a,b){var c=Dg(a.X,b);return null!=c?a.X.get(c.path).Q(T(c.path,b)):null}
function Vg(a){var b=[],c=a.X.value;null!=c?c.J()||c.P(N,function(a,c){b.push(new K(a,c))}):a.X.children.ia(function(a,c){null!=c.value&&b.push(new K(a,c.value))});return b}function Wg(a,b){if(b.e())return a;var c=Ug(a,b);return null!=c?new Qg(new zg(c)):new Qg(a.X.subtree(b))}Qg.prototype.e=function(){return this.X.e()};Qg.prototype.apply=function(a){return Xg(C,this.X,a)};
function Xg(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ia(function(b,f){".priority"===b?(H(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Xg(a.k(b),f,c)});c.Q(a).e()||null===d||(c=c.F(a.k(".priority"),d));return c};function Yg(){this.Aa={}}g=Yg.prototype;g.e=function(){return xa(this.Aa)};g.gb=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=x(this.Aa,d),H(null!=d,"SyncTree gave us an op for an invalid query."),d.gb(a,b,c);var e=[];t(this.Aa,function(d){e=e.concat(d.gb(a,b,c))});return e};g.Ob=function(a,b,c,d,e){var f=a.ka(),h=x(this.Aa,f);if(!h){var h=c.Ba(e?d:null),k=!1;h?k=!0:(h=d instanceof P?c.sc(d):F,k=!1);h=new og(a,new Yd(new zc(h,k,!1),new zc(d,e,!1)));this.Aa[f]=h}h.Ob(b);return rg(h,b)};
g.mb=function(a,b,c){var d=a.ka(),e=[],f=[],h=null!=Zg(this);if("default"===d){var k=this;t(this.Aa,function(a,d){f=f.concat(a.mb(b,c));a.e()&&(delete k.Aa[d],S(a.W.n)||e.push(a.W))})}else{var m=x(this.Aa,d);m&&(f=f.concat(m.mb(b,c)),m.e()&&(delete this.Aa[d],S(m.W.n)||e.push(m.W)))}h&&null==Zg(this)&&e.push(new U(a.u,a.path));return{sg:e,Tf:f}};function $g(a){return Ka(sa(a.Aa),function(a){return!S(a.W.n)})}g.jb=function(a){var b=null;t(this.Aa,function(c){b=b||c.jb(a)});return b};
function ah(a,b){if(S(b.n))return Zg(a);var c=b.ka();return x(a.Aa,c)}function Zg(a){return wa(a.Aa,function(a){return S(a.W.n)})||null};function bh(){this.T=Rg;this.ma=[];this.Cc=-1}function ch(a,b){for(var c=0;c<a.ma.length;c++){var d=a.ma[c];if(d.Zc===b)return d}return null}g=bh.prototype;
g.Ed=function(a){var b=Pa(this.ma,function(b){return b.Zc===a});H(0<=b,"removeWrite called with nonexistent writeId.");var c=this.ma[b];this.ma.splice(b,1);for(var d=c.visible,e=!1,f=this.ma.length-1;d&&0<=f;){var h=this.ma[f];h.visible&&(f>=b&&dh(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.T=eh(this.ma,fh,C),this.Cc=0<this.ma.length?this.ma[this.ma.length-1].Zc:-1;else if(c.Ja)this.T=this.T.Ed(c.path);else{var k=this;t(c.children,function(a,b){k.T=k.T.Ed(c.path.k(b))})}return!0}return!1};
g.Ba=function(a,b,c,d){if(c||d){var e=Wg(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Ug(e,C)?(e=eh(this.ma,function(b){return(b.visible||d)&&(!c||!(0<=Ia(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||F,e.apply(b)):null}e=Ug(this.T,a);if(null!=e)return e;e=Wg(this.T,a);return e.e()?b:null!=b||null!=Ug(e,C)?(b=b||F,e.apply(b)):null};
g.sc=function(a,b){var c=F,d=Ug(this.T,a);if(d)d.J()||d.P(N,function(a,b){c=c.U(a,b)});else if(b){var e=Wg(this.T,a);b.P(N,function(a,b){var d=Wg(e,new L(a)).apply(b);c=c.U(a,d)});Ja(Vg(e),function(a){c=c.U(a.name,a.S)})}else e=Wg(this.T,a),Ja(Vg(e),function(a){c=c.U(a.name,a.S)});return c};g.$c=function(a,b,c,d){H(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.k(b);if(null!=Ug(this.T,a))return null;a=Wg(this.T,a);return a.e()?d.Q(b):a.apply(d.Q(b))};
g.rc=function(a,b,c){a=a.k(b);var d=Ug(this.T,a);return null!=d?d:yc(c,b)?Wg(this.T,a).apply(c.j().R(b)):null};g.mc=function(a){return Ug(this.T,a)};g.Xd=function(a,b,c,d,e,f){var h;a=Wg(this.T,a);h=Ug(a,C);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.ob(f);if(h.e()||h.J())return[];b=[];a=oe(f);e=e?h.$b(c,f):h.Yb(c,f);for(f=R(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=R(e);return b};
function dh(a,b){return a.Ja?a.path.contains(b):!!va(a.children,function(c,d){return a.path.k(d).contains(b)})}function fh(a){return a.visible}
function eh(a,b,c){for(var d=Rg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ja)c.contains(h)?(h=T(c,h),d=Sg(d,h,f.Ja)):h.contains(c)&&(h=T(h,c),d=Sg(d,C,f.Ja.Q(h)));else if(f.children)if(c.contains(h))h=T(c,h),d=Tg(d,h,f.children);else{if(h.contains(c))if(h=T(h,c),h.e())d=Tg(d,C,f.children);else if(f=x(f.children,J(h)))f=f.Q(D(h)),d=Sg(d,C,f)}else throw Sc("WriteRecord should have .snap or .children");}}return d}function gh(a,b){this.Mb=a;this.X=b}g=gh.prototype;
g.Ba=function(a,b,c){return this.X.Ba(this.Mb,a,b,c)};g.sc=function(a){return this.X.sc(this.Mb,a)};g.$c=function(a,b,c){return this.X.$c(this.Mb,a,b,c)};g.mc=function(a){return this.X.mc(this.Mb.k(a))};g.Xd=function(a,b,c,d,e){return this.X.Xd(this.Mb,a,b,c,d,e)};g.rc=function(a,b){return this.X.rc(this.Mb,a,b)};g.k=function(a){return new gh(this.Mb.k(a),this.X)};function hh(){this.children={};this.ad=0;this.value=null}function ih(a,b,c){this.ud=a?a:"";this.Ha=b?b:null;this.A=c?c:new hh}function jh(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=J(c));)d=new ih(e,d,x(d.A.children,e)||new hh),c=D(c);return d}g=ih.prototype;g.Ea=function(){return this.A.value};function kh(a,b){H("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;lh(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.ad=0;lh(this)};
g.kd=function(){return 0<this.A.ad};g.e=function(){return null===this.Ea()&&!this.kd()};g.P=function(a){var b=this;t(this.A.children,function(c,d){a(new ih(d,b,c))})};function mh(a,b,c,d){c&&!d&&b(a);a.P(function(a){mh(a,b,!0,d)});c&&d&&b(a)}function nh(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new L(null===this.Ha?this.ud:this.Ha.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Ha};
function lh(a){if(null!==a.Ha){var b=a.Ha,c=a.ud,d=a.e(),e=Bb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.ad--,lh(b)):d||e||(b.A.children[c]=a.A,b.A.ad++,lh(b))}};function oh(a,b,c,d,e,f){this.id=ph++;this.f=Yc("p:"+this.id+":");this.qd={};this.aa={};this.qa=[];this.Pc=0;this.Lc=[];this.na=!1;this.Va=1E3;this.td=3E5;this.Hb=b;this.Kc=c;this.ue=d;this.M=a;this.pb=this.Ia=this.Db=this.ze=null;this.Vd=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Je=f||null;this.vb=null;this.Nb=!1;this.Gd={};this.tg=0;this.Ve=!0;this.Bc=this.me=null;qh(this,0);Tf.Wb().hc("visible",this.jg,this);-1===
a.host.indexOf("fblocal")&&Sf.Wb().hc("online",this.ig,this)}var ph=0,rh=0;g=oh.prototype;g.va=function(a,b,c){var d=++this.tg;a={r:d,a:a,b:b};this.f(B(a));H(this.na,"sendRequest call when we're not connected not allowed.");this.Ia.va(a);c&&(this.Gd[d]=c)};
g.df=function(a,b,c,d){var e=a.ka(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.aa[f]=this.aa[f]||{};H(rd(a.n)||!S(a.n),"listen() called for non-default but complete query");H(!this.aa[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,pg:a,tag:c};this.aa[f][e]=a;this.na&&sh(this,a)};
function sh(a,b){var c=b.pg,d=c.path.toString(),e=c.ka();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=Ie(c.n),f.t=b.tag);f.h=b.ld();a.va("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&Bb(k,"w")){var l=x(k,"w");da(l)&&0<=Ia(l,"no_index")&&O("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.aa[d]&&a.aa[d][e])===b&&(a.f("listen response",f),"ok"!==m&&th(a,d,e),b.G&&
b.G(m,k))})}g.qf=function(a){this.pb=a;this.f("Auth token refreshed");this.pb?uh(this):this.na&&this.va("unauth",{},function(){});if(a&&40===a.length||od(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function uh(a){if(a.na&&a.pb){var b=a.pb,c=nd(b)?"auth":"gauth",d={cred:b};a.Je&&(d.authvar=a.Je);a.va(c,d,function(c){var d=c.s;c=c.d||"error";a.pb===b&&("ok"===d?a.ke=0:vh(a,d,c))})}}
g.Ef=function(a,b){var c=a.path.toString(),d=a.ka();this.f("Unlisten called for "+c+" "+d);H(rd(a.n)||!S(a.n),"unlisten() called for non-default but complete query");if(th(this,c,d)&&this.na){var e=Ie(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.va("n",c)}};g.re=function(a,b,c){this.na?wh(this,"o",a,b,c):this.Lc.push({we:a,action:"o",data:b,G:c})};g.gf=function(a,b,c){this.na?wh(this,"om",a,b,c):this.Lc.push({we:a,action:"om",data:b,G:c})};
g.xd=function(a,b){this.na?wh(this,"oc",a,null,b):this.Lc.push({we:a,action:"oc",data:null,G:b})};function wh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.va(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){xh(this,"p",a,b,c,d)};g.ef=function(a,b,c,d){xh(this,"m",a,b,c,d)};function xh(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.qa.push({action:b,sf:d,G:e});a.Pc++;b=a.qa.length-1;a.na?yh(a,b):a.f("Buffering put: "+c)}
function yh(a,b){var c=a.qa[b].action,d=a.qa[b].sf,e=a.qa[b].G;a.qa[b].qg=a.na;a.va(c,d,function(d){a.f(c+" response",d);delete a.qa[b];a.Pc--;0===a.Pc&&(a.qa=[]);e&&e(d.s,d.d)})}g.ye=function(a){this.na&&(a={c:a},this.f("reportStats",a),this.va("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
g.wd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Hb(a.p,a.d,!1,a.t):"m"===b?this.Hb(a.p,a.d,!0,a.t):"c"===b?zh(this,a.p,a.q):"ac"===b?vh(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):Zc("Unrecognized action received from server: "+
B(b)+"\nAre you using the latest client?"))}};g.Mc=function(a,b){this.f("connection ready");this.na=!0;this.Bc=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Db=b;if(this.Ve){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;Qb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c)}Ah(this);this.Ve=!1;this.Kc(!0)};
function qh(a,b){H(!a.Ia,"Scheduling a connect when we're already connected/ing?");a.vb&&clearTimeout(a.vb);a.vb=setTimeout(function(){a.vb=null;Bh(a)},Math.floor(b))}g.jg=function(a){a&&!this.Nb&&this.Va===this.td&&(this.f("Window became visible.  Reducing delay."),this.Va=1E3,this.Ia||qh(this,0));this.Nb=a};g.ig=function(a){a?(this.f("Browser went online."),this.Va=1E3,this.Ia||qh(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ia&&this.Ia.close())};
g.jf=function(){this.f("data client disconnected");this.na=!1;this.Ia=null;for(var a=0;a<this.qa.length;a++){var b=this.qa[a];b&&"h"in b.sf&&b.qg&&(b.G&&b.G("disconnect"),delete this.qa[a],this.Pc--)}0===this.Pc&&(this.qa=[]);this.Gd={};Ch(this)&&(this.Nb?this.Bc&&(3E4<(new Date).getTime()-this.Bc&&(this.Va=1E3),this.Bc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Va=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Va-((new Date).getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),qh(this,a),this.Va=Math.min(this.td,1.3*this.Va));this.Kc(!1)};
function Bh(a){if(Ch(a)){a.f("Making a connection attempt");a.me=(new Date).getTime();a.Bc=null;var b=r(a.wd,a),c=r(a.Mc,a),d=r(a.jf,a),e=a.id+":"+rh++,f=a.Db,h=!1,k=null,m=function(){k?k.close():(h=!0,d())};a.Ia={close:m,va:function(a){H(k,"sendRequest call when we're not connected not allowed.");k.va(a)}};var l=a.de;a.de=!1;a.Vd.getToken(l).then(function(l){h?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),a.pb=l&&l.accessToken,k=new bf(e,a.M,b,c,d,function(b){O(b+
" ("+a.M.toString()+")");a.eb("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||m()})}}g.eb=function(a){E("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Ia?this.Ia.close():(this.vb&&(clearTimeout(this.vb),this.vb=null),this.na&&this.jf())};g.lc=function(a){E("Resuming connection for reason: "+a);delete this.qd[a];xa(this.qd)&&(this.Va=1E3,this.Ia||qh(this,0))};
function zh(a,b,c){c=c?La(c,function(a){return fd(a)}).join("$"):"default";(a=th(a,b,c))&&a.G&&a.G("permission_denied")}function th(a,b,c){b=(new L(b)).toString();var d;p(a.aa[b])?(d=a.aa[b][c],delete a.aa[b][c],0===qa(a.aa[b])&&delete a.aa[b]):d=void 0;return d}
function vh(a,b,c){E("Auth token revoked: "+b+"/"+c);a.pb=null;a.de=!0;a.Ia.close();"invalid_token"===b&&(a.ke++,3<=a.ke&&(a.Va=3E4,O("Provided authentication credentials are invalid. This usually indicates your FirebaseApp instance was not initialized correctly. Make sure your apiKey and databaseURL match the values provided for your app at https://console.firebase.google.com/, or if you're using a service account, make sure it's authorized to access the specified databaseURL and is from the correct project.")))}
function Ah(a){uh(a);t(a.aa,function(b){t(b,function(b){sh(a,b)})});for(var b=0;b<a.qa.length;b++)a.qa[b]&&yh(a,b);for(;a.Lc.length;)b=a.Lc.shift(),wh(a,b.action,b.we,b.data,b.G)}function Ch(a){var b;b=Sf.Wb().ic;return xa(a.qd)&&b};var Y={Xf:function(){Re=Ed=!0}};Y.forceLongPolling=Y.Xf;Y.Yf=function(){Se=!0};Y.forceWebSockets=Y.Yf;Y.dg=function(){return Dd.isAvailable()};Y.isWebSocketsAvailable=Y.dg;Y.wg=function(a,b){a.u.Ua.ze=b};Y.setSecurityDebugCallback=Y.wg;Y.Be=function(a,b){a.u.Be(b)};Y.stats=Y.Be;Y.Ce=function(a,b){a.u.Ce(b)};Y.statsIncrementCounter=Y.Ce;Y.ed=function(a){return a.u.ed};Y.dataUpdateCount=Y.ed;Y.cg=function(a,b){a.u.je=b};Y.interceptServerData=Y.cg;function Dh(a){this.xa=Q;this.lb=new bh;this.De={};this.jc={};this.Dc=a}function Eh(a,b,c,d,e){var f=a.lb,h=e;H(d>f.Cc,"Stacking an older write on top of newer ones");p(h)||(h=!0);f.ma.push({path:b,Ja:c,Zc:d,visible:h});h&&(f.T=Sg(f.T,b,c));f.Cc=d;return e?Fh(a,new $b(Ng,b,c)):[]}function Gh(a,b,c,d){var e=a.lb;H(d>e.Cc,"Stacking an older merge on top of newer ones");e.ma.push({path:b,children:c,Zc:d,visible:!0});e.T=Tg(e.T,b,c);e.Cc=d;c=Bg(c);return Fh(a,new vd(Ng,b,c))}
function Hh(a,b,c){c=c||!1;var d=ch(a.lb,b);if(a.lb.Ed(b)){var e=Q;null!=d.Ja?e=e.set(C,!0):Cb(d.children,function(a,b){e=e.set(new L(a),b)});return Fh(a,new Mg(d.path,e,c))}return[]}function Ih(a,b,c){c=Bg(c);return Fh(a,new vd(Pg,b,c))}function Jh(a,b,c,d){d=Kh(a,d);if(null!=d){var e=Lh(d);d=e.path;e=e.Ib;b=T(d,b);c=new $b(new Og(!1,!0,e,!0),b,c);return Mh(a,d,c)}return[]}
function Nh(a,b,c,d){if(d=Kh(a,d)){var e=Lh(d);d=e.path;e=e.Ib;b=T(d,b);c=Bg(c);c=new vd(new Og(!1,!0,e,!0),b,c);return Mh(a,d,c)}return[]}
Dh.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;Ig(this.xa,c,function(a,b){var f=T(a,c);d=d||b.jb(f);e=e||null!=Zg(b)});var f=this.xa.get(c);f?(e=e||null!=Zg(f),d=d||f.jb(C)):(f=new Yg,this.xa=this.xa.set(c,f));var h;null!=d?h=!0:(h=!1,d=F,Lg(this.xa.subtree(c),function(a,b){var c=b.jb(C);c&&(d=d.U(a,c))}));var k=null!=ah(f,a);if(!k&&!S(a.n)){var m=Oh(a);H(!(m in this.jc),"View does not exist, but we have a tag");var l=Ph++;this.jc[m]=l;this.De["_"+l]=m}h=f.Ob(a,b,new gh(c,this.lb),d,h);k||
e||(f=ah(f,a),h=h.concat(Qh(this,a,f)));return h};
Dh.prototype.mb=function(a,b,c){var d=a.path,e=this.xa.get(d),f=[];if(e&&("default"===a.ka()||null!=ah(e,a))){f=e.mb(a,b,c);e.e()&&(this.xa=this.xa.remove(d));e=f.sg;f=f.Tf;b=-1!==Pa(e,function(a){return S(a.n)});var h=Gg(this.xa,d,function(a,b){return null!=Zg(b)});if(b&&!h&&(d=this.xa.subtree(d),!d.e()))for(var d=Rh(d),k=0;k<d.length;++k){var m=d[k],l=m.W,m=Sh(this,m);this.Dc.Ae(Th(l),Uh(this,l),m.ld,m.G)}if(!h&&0<e.length&&!c)if(b)this.Dc.Od(Th(a),null);else{var u=this;Ja(e,function(a){a.ka();
var b=u.jc[Oh(a)];u.Dc.Od(Th(a),b)})}Vh(this,e)}return f};Dh.prototype.Ba=function(a,b){var c=this.lb,d=Gg(this.xa,a,function(b,c){var d=T(b,a);if(d=c.jb(d))return d});return c.Ba(a,d,b,!0)};function Rh(a){return Eg(a,function(a,c,d){if(c&&null!=Zg(c))return[Zg(c)];var e=[];c&&(e=$g(c));t(d,function(a){e=e.concat(a)});return e})}function Vh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!S(d.n)){var d=Oh(d),e=a.jc[d];delete a.jc[d];delete a.De["_"+e]}}}
function Th(a){return S(a.n)&&!rd(a.n)?a.xb():a}function Qh(a,b,c){var d=b.path,e=Uh(a,b);c=Sh(a,c);b=a.Dc.Ae(Th(b),e,c.ld,c.G);d=a.xa.subtree(d);if(e)H(null==Zg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Eg(d,function(a,b,c){if(!a.e()&&b&&null!=Zg(b))return[pg(Zg(b))];var d=[];b&&(d=d.concat(La($g(b),function(a){return a.W})));t(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Dc.Od(Th(c),Uh(a,c));return b}
function Sh(a,b){var c=b.W,d=Uh(a,c);return{ld:function(){return(b.w()||F).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=Kh(a,d)){var h=Lh(b);b=h.path;h=h.Ib;f=T(b,f);f=new bc(new Og(!1,!0,h,!0),f);b=Mh(a,b,f)}else b=[]}else b=Fh(a,new bc(Pg,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.mb(c,null,f)}}}function Oh(a){return a.path.toString()+"$"+a.ka()}function Lh(a){var b=a.indexOf("$");H(-1!==b&&b<a.length-1,"Bad queryKey.");return{Ib:a.substr(b+1),path:new L(a.substr(0,b))}}function Kh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0}function Uh(a,b){var c=Oh(b);return x(a.jc,c)}var Ph=1;
function Mh(a,b,c){var d=a.xa.get(b);H(d,"Missing sync point for query tag that we're tracking");return d.gb(c,new gh(b,a.lb),null)}function Fh(a,b){return Wh(a,b,a.xa,null,new gh(C,a.lb))}function Wh(a,b,c,d,e){if(b.path.e())return Xh(a,b,c,d,e);var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var h=[],k=J(b.path),m=b.Nc(k);if((c=c.children.get(k))&&m)var l=d?d.R(k):null,k=e.k(k),h=h.concat(Wh(a,m,c,l,k));f&&(h=h.concat(f.gb(b,e,d)));return h}
function Xh(a,b,c,d,e){var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var h=[];c.children.ia(function(c,f){var l=d?d.R(c):null,u=e.k(c),z=b.Nc(c);z&&(h=h.concat(Xh(a,z,f,l,u)))});f&&(h=h.concat(f.gb(b,e,d)));return h};function tf(a,b,c){this.app=c;var d=new dc(c);this.M=a;this.Xa=Ad(a);this.Vc=null;this.da=new mc;this.vd=1;this.Ua=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.wa=new pd(this.M,r(this.Hb,this),d),setTimeout(r(this.Kc,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if("object"!==ca(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
try{B(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.wa=this.Ua=new oh(this.M,r(this.Hb,this),r(this.Kc,this),r(this.ue,this),d,b)}var f=this;ec(d,function(a){f.wa.qf(a)});this.zg=Bd(a,r(function(){return new xd(this.Xa,this.wa)},this));this.nc=new ih;this.ie=new fc;this.pd=new Dh({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=Fh(f.pd,new $b(Pg,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:aa});Yh(this,"connected",!1);this.ja=new Mc;this.$a=new sf(this);this.ed=
0;this.je=null;this.K=new Dh({Ae:function(a,b,c,d){f.wa.df(a,c,b,function(b,c){var e=d(b,c);rc(f.da,a.path,e)});return[]},Od:function(a,b){f.wa.Ef(a,b)}})}g=tf.prototype;g.toString=function(){return(this.M.Sc?"https://":"http://")+this.M.host};g.name=function(){return this.M.pe};function Zh(a){a=a.ie.j(new L(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function $h(a){a=a={timestamp:Zh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
g.Hb=function(a,b,c,d){this.ed++;var e=new L(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=oa(b,function(a){return M(a)}),a=Nh(this.K,e,b,d)):(b=M(b),a=Jh(this.K,e,b,d)):c?(d=oa(b,function(a){return M(a)}),a=Ih(this.K,e,d)):(d=M(b),a=Fh(this.K,new $b(Pg,e,d)));d=e;0<a.length&&(d=ai(this,e));rc(this.da,d,a)};g.Kc=function(a){Yh(this,"connected",a);!1===a&&bi(this)};g.ue=function(a){var b=this;hd(a,function(a,d){Yh(b,d,a)})};
function Yh(a,b,c){b=new L("/.info/"+b);c=M(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=Fh(a.pd,new $b(Pg,b,c));rc(a.da,b,c)}g.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Gg:c});var e=$h(this);b=M(b,c);var e=Pc(b,e),f=this.vd++,e=Eh(this.K,a,e,f,!0);nc(this.da,e);var h=this;this.wa.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||O("set at "+a+" failed: "+b);e=Hh(h.K,f,!e);rc(h.da,a,e);ci(d,b,c)});e=di(this,a);ai(this,e);rc(this.da,e,[])};
g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=$h(this),f={};t(b,function(a,b){d=!1;var c=M(a);f[b]=Pc(c,e)});if(d)E("update() called with empty data.  Don't do anything."),ci(c,"ok");else{var h=this.vd++,k=Gh(this.K,a,f,h);nc(this.da,k);var m=this;this.wa.ef(a.toString(),b,function(b,d){var e="ok"===b;e||O("update at "+a+" failed: "+b);var e=Hh(m.K,h,!e),f=a;0<e.length&&(f=ai(m,a));rc(m.da,f,e);ci(c,b,d)});t(b,function(b,c){var d=di(m,a.k(c));ai(m,d)});rc(this.da,
a,[])}};function bi(a){a.f("onDisconnectEvents");var b=$h(a),c=[];Nc(Lc(a.ja,b),C,function(b,e){c=c.concat(Fh(a.K,new $b(Pg,b,e)));var f=di(a,b);ai(a,f)});a.ja=new Mc;rc(a.da,C,c)}g.xd=function(a,b){var c=this;this.wa.xd(a.toString(),function(d,e){"ok"===d&&zf(c.ja,a);ci(b,d,e)})};function Nf(a,b,c,d){var e=M(c);a.wa.re(b.toString(),e.H(!0),function(c,h){"ok"===c&&Oc(a.ja,b,e);ci(d,c,h)})}
function Of(a,b,c,d,e){var f=M(c,d);a.wa.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Oc(a.ja,b,f);ci(e,c,d)})}function Pf(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(E("onDisconnect().update() called with empty data.  Don't do anything."),ci(d,"ok")):a.wa.gf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=M(c[m]);Oc(a.ja,b.k(m),l)}ci(d,e,f)})}function yg(a,b,c){c=".info"===J(b.path)?a.pd.Ob(b,c):a.K.Ob(b,c);pc(a.da,b.path,c)}g.eb=function(){this.Ua&&this.Ua.eb("repo_interrupt")};
g.lc=function(){this.Ua&&this.Ua.lc("repo_interrupt")};g.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new lc(this.Xa)),a=this.Vc.get()):a=this.Xa.get();var b=Ma(ta(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ce=function(a){kc(this.Xa,a);this.zg.zf[a]=!0};g.f=function(a){var b="";this.Ua&&(b=this.Ua.id+":");E(b,arguments)};
function ci(a,b,c){a&&Ub(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function ei(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.hc("value",f);c={path:b,update:c,G:d,status:null,lf:Rc(),Ie:e,wf:0,Rd:function(){h.Jc("value",f)},Td:null,Da:null,bd:null,cd:null,dd:null};d=a.K.Ba(b,void 0)||F;c.bd=d;d=c.update(d.H());if(p(d)){Ff("transaction failed: Data returned ",d,c.path);c.status=1;e=jh(a.nc,b);var k=e.Ea()||[];k.push(c);kh(e,k);"object"===typeof d&&null!==d&&Bb(d,".priority")?(k=x(d,".priority"),H(Df(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.K.Ba(b)||F).C().H();e=$h(a);d=M(d,k);e=Pc(d,e);c.cd=d;c.dd=e;c.Da=a.vd++;c=Eh(a.K,b,e,c.Da,c.Ie);rc(a.da,b,c);fi(a)}else c.Rd(),c.cd=null,c.dd=null,c.G&&(a=new W(c.bd,new U(a,c.path),N),c.G(null,!1,a))}function fi(a,b){var c=b||a.nc;b||gi(a,c);if(null!==c.Ea()){var d=hi(a,c);H(0<d.length,"Sending zero length transaction queue");Na(d,function(a){return 1===a.status})&&ii(a,c.path(),d)}else c.kd()&&c.P(function(b){fi(a,b)})}
function ii(a,b,c){for(var d=La(c,function(a){return a.Da}),e=a.K.Ba(b,d)||F,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];H(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.wf++;var k=T(b,h.path),d=d.F(k,h.cd)}d=d.H(!0);a.wa.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(Hh(a.K,c[f].Da));if(c[f].G){var h=c[f].dd,k=new U(a,c[f].path);d.push(r(c[f].G,
null,null,!0,new W(h,k,N)))}c[f].Rd()}gi(a,jh(a.nc,b));fi(a);rc(a.da,b,e);for(f=0;f<d.length;f++)Ub(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(O("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;ai(a,b)}},e)}function ai(a,b){var c=ji(a,b),d=c.path(),c=hi(a,c);ki(a,c,d);return d}
function ki(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ka(b,function(a){return 1===a.status}),f=La(f,function(a){return a.Da}),h=0;h<b.length;h++){var k=b[h],m=T(c,k.path),l=!1,u;H(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(Hh(a.K,k.Da,!0));else if(1===k.status)if(25<=k.wf)l=!0,u="maxretry",e=e.concat(Hh(a.K,k.Da,!0));else{var z=a.K.Ba(k.path,f)||F;k.bd=z;var G=b[h].update(z.H());p(G)?(Ff("transaction failed: Data returned ",G,
k.path),m=M(G),"object"===typeof G&&null!=G&&Bb(G,".priority")||(m=m.ga(z.C())),z=k.Da,G=$h(a),G=Pc(m,G),k.cd=m,k.dd=G,k.Da=a.vd++,Qa(f,z),e=e.concat(Eh(a.K,k.path,G,k.Da,k.Ie)),e=e.concat(Hh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(Hh(a.K,k.Da,!0)))}rc(a.da,c,e);e=[];l&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new U(a,b[h].path),d.push(r(b[h].G,null,null,!1,new W(b[h].bd,k,N)))):d.push(r(b[h].G,null,Error(u),!1,null))))}gi(a,a.nc);for(h=0;h<d.length;h++)Ub(d[h]);fi(a)}}
function ji(a,b){for(var c,d=a.nc;null!==(c=J(b))&&null===d.Ea();)d=jh(d,c),b=D(b);return d}function hi(a,b){var c=[];li(a,b,c);c.sort(function(a,b){return a.lf-b.lf});return c}function li(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.P(function(b){li(a,b,c)})}function gi(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;kh(b,0<c.length?c:null)}b.P(function(b){gi(a,b)})}
function di(a,b){var c=ji(a,b).path(),d=jh(a.nc,b);nh(d,function(b){mi(a,b)});mi(a,d);mh(d,function(b){mi(a,b)});return c}
function mi(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(H(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(H(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(Hh(a.K,c[h].Da,!0)),c[h].G&&d.push(r(c[h].G,null,Error("set"),!1,null))));-1===f?kh(b,null):c.length=f+1;rc(a.da,b.path(),e);for(h=0;h<d.length;h++)Ub(d[h])}};function yf(){this.nb={};this.Ff=!1}yf.prototype.eb=function(){for(var a in this.nb)this.nb[a].eb()};yf.prototype.lc=function(){for(var a in this.nb)this.nb[a].lc()};yf.prototype.ce=function(a){this.Ff=a};ba(yf);yf.prototype.interrupt=yf.prototype.eb;yf.prototype.resume=yf.prototype.lc;var Z={};Z.pc=oh;Z.DataConnection=Z.pc;oh.prototype.yg=function(a,b){this.va("q",{p:a},b)};Z.pc.prototype.simpleListen=Z.pc.prototype.yg;oh.prototype.Qf=function(a,b){this.va("echo",{d:a},b)};Z.pc.prototype.echo=Z.pc.prototype.Qf;oh.prototype.interrupt=oh.prototype.eb;Z.If=bf;Z.RealTimeConnection=Z.If;bf.prototype.sendRequest=bf.prototype.va;bf.prototype.close=bf.prototype.close;
Z.bg=function(a){var b=oh.prototype.put;oh.prototype.put=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f)};return function(){oh.prototype.put=b}};Z.hijackHash=Z.bg;Z.Hf=gc;Z.ConnectionTarget=Z.Hf;Z.ka=function(a){return a.ka()};Z.queryIdentifier=Z.ka;Z.eg=function(a){return a.u.Ua.aa};Z.listens=Z.eg;Z.ce=function(a){yf.Wb().ce(a)};Z.forceRestClient=Z.ce;Z.Context=yf;function U(a,b){if(!(a instanceof tf))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,Fe,!1);this.then=void 0;this["catch"]=void 0}ka(U,X);g=U.prototype;g.getKey=function(){y("Firebase.key",0,0,arguments.length);return this.path.e()?null:ae(this.path)};
g.k=function(a){y("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof L))if(null===J(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Lf("Firebase.child",b)}else Lf("Firebase.child",a);return new U(this.u,this.path.k(a))};g.getParent=function(){y("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.u,a)};
g.Zf=function(){y("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Pf=function(){return this.u.$a};g.set=function(a,b){y("Firebase.set",1,2,arguments.length);Mf("Firebase.set",this.path);Ef("Firebase.set",a,this.path,!1);A("Firebase.set",2,b,!0);var c=new Hb;this.u.Kb(this.path,a,null,Ib(c,b));return c.sa};
g.update=function(a,b){y("Firebase.update",1,2,arguments.length);Mf("Firebase.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;O("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Hf("Firebase.update",a,this.path);A("Firebase.update",2,b,!0);c=new Hb;this.u.update(this.path,a,Ib(c,b));return c.sa};
g.Kb=function(a,b,c){y("Firebase.setWithPriority",2,3,arguments.length);Mf("Firebase.setWithPriority",this.path);Ef("Firebase.setWithPriority",a,this.path,!1);If("Firebase.setWithPriority",2,b);A("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new Hb;this.u.Kb(this.path,a,b,Ib(d,c));return d.sa};
g.remove=function(a){y("Firebase.remove",0,1,arguments.length);Mf("Firebase.remove",this.path);A("Firebase.remove",1,a,!0);return this.set(null,a)};
g.transaction=function(a,b,c){y("Firebase.transaction",1,3,arguments.length);Mf("Firebase.transaction",this.path);A("Firebase.transaction",1,a,!1);A("Firebase.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(Db("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new Hb;ga(b)&&Jb(d.sa);ei(this.u,this.path,a,function(a,c,
h){a?d.reject(a):d.resolve(new Pb(c,h));ga(b)&&b(a,c,h)},c);return d.sa};g.vg=function(a,b){y("Firebase.setPriority",1,2,arguments.length);Mf("Firebase.setPriority",this.path);If("Firebase.setPriority",1,a);A("Firebase.setPriority",2,b,!0);var c=new Hb;this.u.Kb(this.path.k(".priority"),a,null,Ib(c,b));return c.sa};
g.push=function(a,b){y("Firebase.push",0,2,arguments.length);Mf("Firebase.push",this.path);Ef("Firebase.push",a,this.path,!0);A("Firebase.push",2,b,!0);var c=Zh(this.u),d=Uf(c),c=this.k(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.k(d)});c.then=r(f.then,f);c["catch"]=r(f.then,f,void 0);ga(b)&&Jb(f)}return c};g.kb=function(){Mf("Firebase.onDisconnect",this.path);return new V(this.u,this.path)};U.prototype.child=U.prototype.k;U.prototype.set=U.prototype.set;U.prototype.update=U.prototype.update;
U.prototype.setWithPriority=U.prototype.Kb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.vg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.kb;kd(U.prototype,"database",U.prototype.Pf);kd(U.prototype,"key",U.prototype.getKey);kd(U.prototype,"parent",U.prototype.getParent);kd(U.prototype,"root",U.prototype.Zf);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
try{firebase.INTERNAL.registerService("database",function(a){var b=yf.Wb(),c=a.options.databaseURL;p(c)||$c("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=ad(c),c=d.kc;xf("Invalid Firebase Database URL",d);d.path.e()||$c("Database URL must point to the root of a Firebase Database (not including a child path).");(d=x(b.nb,a.name))&&$c("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new tf(c,b.Ff,a);b.nb[a.name]=
d;return d.$a},{Reference:U,Query:X,Database:sf,enableLogging:Xc,INTERNAL:Y,TEST_ACCESS:Z,ServerValue:vf})}catch(ni){$c("Failed to register the Firebase Database Service ("+ni+")")};})();

module.exports = firebase.database;

},{"./app":1}],4:[function(require,module,exports){
/**
 *  Firebase libraries for browser - npm package.
 *
 * Usage:
 *
 *   firebase = require('firebase');
 */
var firebase = require('./app');
require('./auth');
require('./database');
require('./storage');
require('./messaging');
module.exports = firebase;

},{"./app":1,"./auth":2,"./database":3,"./messaging":5,"./storage":6}],5:[function(require,module,exports){
(function (global){
var firebase = require('./app');
/*! @license Firebase v3.5.0
    Build: 3.5.0-rc.8
    Terms: https://developers.google.com/terms */
(function() {var f=function(a,b){function d(){}d.prototype=b.prototype;a.prototype=new d;for(var c in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c]},g="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&
null!=global?global:this,l=function(a,b){if(b){var d=k;a=a.split(".");for(var c=0;c<a.length-1;c++){var e=a[c];e in d||(d[e]={});d=d[e]}a=a[a.length-1];c=d[a];b=b(c);b!=c&&null!=b&&g(d,a,{configurable:!0,writable:!0,value:b})}},n=function(){n=function(){};k.Symbol||(k.Symbol=q)},t=0,q=function(a){return"jscomp_symbol_"+(a||"")+t++},v=function(){n();var a=k.Symbol.iterator;a||(a=k.Symbol.iterator=k.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&g(Array.prototype,a,{configurable:!0,writable:!0,
value:function(){return u(this)}});v=function(){}},u=function(a){var b=0;return w(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},w=function(a){v();a={next:a};a[k.Symbol.iterator]=function(){return this};return a},x=function(a){v();var b=a[Symbol.iterator];return b?b.call(a):u(a)};
l("Promise",function(a){function b(){this.a=null}if(a)return a;b.prototype.b=function(a){null==this.a&&(this.a=[],this.f());this.a.push(a)};b.prototype.f=function(){var a=this;this.c(function(){a.h()})};var d=k.setTimeout;b.prototype.c=function(a){d(a,0)};b.prototype.h=function(){for(;this.a&&this.a.length;){var a=this.a;this.a=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(r){this.g(r)}}}this.a=null};b.prototype.g=function(a){this.c(function(){throw a;})};var c=function(a){this.b=
0;this.h=void 0;this.a=[];var b=this.f();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}};c.prototype.f=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.aa),reject:a(this.g)}};c.prototype.aa=function(a){if(a===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof c)this.ba(a);else{var b;a:switch(typeof a){case "object":b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.$(a):this.m(a)}};c.prototype.$=
function(a){var b=void 0;try{b=a.then}catch(p){this.g(p);return}"function"==typeof b?this.ca(b,a):this.m(a)};c.prototype.g=function(a){this.o(2,a)};c.prototype.m=function(a){this.o(1,a)};c.prototype.o=function(a,b){if(0!=this.b)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.b);this.b=a;this.h=b;this.v()};c.prototype.v=function(){if(null!=this.a){for(var a=this.a,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.a=null}};var e=new b;c.prototype.ba=function(a){var b=this.f();
a.c(b.resolve,b.reject)};c.prototype.ca=function(a,b){var c=this.f();try{a.call(b,c.resolve,c.reject)}catch(r){c.reject(r)}};c.prototype.then=function(a,b){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(V){h(V)}}:b}var e,h,m=new c(function(a,b){e=a;h=b});this.c(d(a,e),d(b,h));return m};c.prototype.catch=function(a){return this.then(void 0,a)};c.prototype.c=function(a,b){function c(){switch(d.b){case 1:a(d.h);break;case 2:b(d.h);break;default:throw Error("Unexpected state: "+
d.b);}}var d=this;null==this.a?e.b(c):this.a.push(function(){e.b(c)})};c.resolve=function(a){return a instanceof c?a:new c(function(b){b(a)})};c.reject=function(a){return new c(function(b,c){c(a)})};c.b=function(a){return new c(function(b,d){for(var e=x(a),h=e.next();!h.done;h=e.next())c.resolve(h.value).c(b,d)})};c.a=function(a){var b=x(a),d=b.next();return d.done?c.resolve([]):new c(function(a,e){function h(b){return function(c){m[b]=c;p--;0==p&&a(m)}}var m=[],p=0;do m.push(void 0),p++,c.resolve(d.value).c(h(m.length-
1),e),d=b.next();while(!d.done)})};c.$jscomp$new$AsyncExecutor=function(){return new b};return c});l("Array.prototype.findIndex",function(a){return a?a:function(a,d){a:{var b=this;b instanceof String&&(b=String(b));for(var e=b.length,h=0;h<e;h++)if(a.call(d,b[h],h,b)){a=h;break a}a=-1}return a}});l("Object.assign",function(a){return a?a:function(a,d){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var h in e)Object.prototype.hasOwnProperty.call(e,h)&&(a[h]=e[h])}return a}});
var y=this,z=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},A=function(a,b){function d(){}d.prototype=b.prototype;a.ha=b.prototype;a.prototype=new d;a.da=function(a,d,h){for(var c=Array(arguments.length-2),e=2;e<arguments.length;e++)c[e-2]=arguments[e];return b.prototype[d].apply(a,c)}};var B={i:"only-available-in-window",w:"only-available-in-sw",R:"should-be-overriden",j:"bad-sender-id",O:"permission-default",N:"permission-blocked",W:"unsupported-browser",J:"notifications-blocked",D:"failed-serviceworker-registration",l:"sw-registration-expected",G:"get-subscription-failed",I:"invalid-saved-token",s:"sw-reg-redundant",S:"token-subscribe-failed",U:"token-subscribe-no-token",T:"token-subscribe-no-push-set",X:"use-sw-before-get-token",H:"invalid-delete-token",C:"delete-token-not-found",
A:"bg-handler-function-expected",M:"no-window-client-to-msg",V:"unable-to-resubscribe",L:"no-fcm-token-for-resubscribe",F:"failed-to-delete-token"},C={},D=(C[B.i]="This method is available in a Window context.",C[B.w]="This method is available in a service worker context.",C[B.R]="This method should be overriden by extended classes.",C[B.j]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",C[B.O]="The required permissions were not granted and dismissed instead.",
C[B.N]="The required permissions were not granted and blocked instead.",C[B.W]="This browser doesn't support the API's required to use the firebase SDK.",C[B.J]="Notifications have been blocked.",C[B.D]="We are unable to register the default service worker. {$browserErrorMessage}",C[B.l]="A service worker registration was the expected input.",C[B.G]="There was an error when trying to get any existing Push Subscriptions.",C[B.I]="Unable to access details of the saved token.",C[B.s]="The service worker being used for push was made redundant.",
C[B.S]="A problem occured while subscribing the user to FCM: {$message}",C[B.U]="FCM returned no token when subscribing the user to push.",C[B.T]="FCM returned an invalid response when getting an FCM token.",C[B.X]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",C[B.H]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",C[B.C]="The deletion attempt for token could not be performed as the token was not found.",C[B.A]=
"The input to setBackgroundMessageHandler() must be a function.",C[B.M]="An attempt was made to message a non-existant window client.",C[B.V]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",C[B.L]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",C[B.F]="Unable to delete the currently saved token.",C);var E={userVisibleOnly:!0,applicationServerKey:new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110])};var F={u:"firebase-messaging-msg-type",B:"firebase-messaging-msg-data"},G={P:"push-msg-received",K:"notification-clicked"},H=function(a,b){var d={};return d[F.u]=a,d[F.B]=b,d};var I=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,I);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};A(I,Error);var J=function(a,b){for(var d=a.split("%s"),c="",e=Array.prototype.slice.call(arguments,1);e.length&&1<d.length;)c+=d.shift()+e.shift();return c+d.join("%s")};var K=function(a,b){b.unshift(a);I.call(this,J.apply(null,b));b.shift()};A(K,I);var L=function(a,b,d){if(!a){var c="Assertion failed";if(b)var c=c+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new K(""+c,e||[]);}};var M=null;var N=function(a){a=new Uint8Array(a);var b=z(a);L("array"==b||"object"==b&&"number"==typeof a.length,"encodeByteArray takes an array as a parameter");if(!M)for(M={},b=0;65>b;b++)M[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);for(var b=M,d=[],c=0;c<a.length;c+=3){var e=a[c],h=c+1<a.length,m=h?a[c+1]:0,p=c+2<a.length,r=p?a[c+2]:0,U=e>>2,e=(e&3)<<4|m>>4,m=(m&15)<<2|r>>6,r=r&63;p||(r=64,h||(m=64));d.push(b[U],b[e],b[m],b[r])}return d.join("").replace(/\+/g,"-").replace(/\//g,
"_").replace(/=+$/,"")};var O=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",D),P=function(){this.a=null},Q=function(a){if(a.a)return a.a;a.a=new Promise(function(a,d){var b=y.indexedDB.open("fcm_token_details_db",1);b.onerror=function(a){d(a.target.error)};b.onsuccess=function(b){a(b.target.result)};b.onupgradeneeded=function(a){a=a.target.result.createObjectStore("fcm_token_object_Store",{keyPath:"swScope"});a.createIndex("fcmSenderId","fcmSenderId",{unique:!1});a.createIndex("fcmToken","fcmToken",{unique:!0})}});
return a.a},aa=function(a){a.a?a.a.then(function(b){b.close();a.a=null}):Promise.resolve()},R=function(a,b){return Q(a).then(function(a){return new Promise(function(d,e){var c=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);c.onerror=function(a){e(a.target.error)};c.onsuccess=function(a){d(a.target.result)}})})},ba=function(a,b){return Q(a).then(function(a){return new Promise(function(d,e){var c=[],m=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
m.onerror=function(a){e(a.target.error)};m.onsuccess=function(a){(a=a.target.result)?(a.value.fcmSenderId===b&&c.push(a.value),a.continue()):d(c)}})})},ca=function(a){var b=a.installing||a.waiting||a.active;return new Promise(function(d,c){if("activated"===b.state)d(a);else if("redundant"===b.state)c(O.create(B.s));else{var e=function(){if("activated"===b.state)d(a);else if("redundant"===b.state)c(O.create(B.s));else return;b.removeEventListener("statechange",e)};b.addEventListener("statechange",
e)}})},S=function(a,b,d){var c=N(b.getKey("p256dh")),e=N(b.getKey("auth"));a="authorized_entity="+a+"&"+("endpoint="+b.endpoint+"&")+("encryption_key="+c+"&")+("encryption_auth="+e);d&&(a+="&pushSet="+d);d=new Headers;d.append("Content-Type","application/x-www-form-urlencoded");return fetch("https://fcm.googleapis.com/fcm/connect/subscribe",{method:"POST",headers:d,body:a}).then(function(a){return a.json()}).then(function(a){if(a.error)throw O.create(B.S,{message:a.error.message});if(!a.token)throw O.create(B.U);
if(!a.pushSet)throw O.create(B.T);return{token:a.token,pushSet:a.pushSet}})},da=function(a,b,d,c,e,h){var m={swScope:d.scope,endpoint:c.endpoint,auth:N(c.getKey("auth")),p256dh:N(c.getKey("p256dh")),fcmToken:e,fcmPushSet:h,fcmSenderId:b};return Q(a).then(function(a){return new Promise(function(b,d){var c=a.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").put(m);c.onerror=function(a){d(a.target.error)};c.onsuccess=function(){b()}})})};
P.prototype.Z=function(a,b){return b instanceof ServiceWorkerRegistration?"string"!==typeof a||0===a.length?Promise.reject(O.create(B.j)):ba(this,a).then(function(d){if(0!==d.length){var c=d.findIndex(function(d){return b.scope===d.swScope&&a===d.fcmSenderId});if(-1!==c)return d[c]}}).then(function(a){if(a)return b.pushManager.getSubscription().catch(function(){throw O.create(B.G);}).then(function(b){var d;if(d=b)d=b.endpoint===a.endpoint&&N(b.getKey("auth"))===a.auth&&N(b.getKey("p256dh"))===a.p256dh;
if(d)return a.fcmToken})}):Promise.reject(O.create(B.l))};P.prototype.getSavedToken=P.prototype.Z;P.prototype.Y=function(a,b){var d=this;return"string"!==typeof a||0===a.length?Promise.reject(O.create(B.j)):b instanceof ServiceWorkerRegistration?ca(b).then(function(){return b.pushManager.getSubscription()}).then(function(a){return a?a:b.pushManager.subscribe(E)}).then(function(c){return S(a,c).then(function(e){return da(d,a,b,c,e.token,e.pushSet).then(function(){return e.token})})}):Promise.reject(O.create(B.l))};
P.prototype.createToken=P.prototype.Y;P.prototype.deleteToken=function(a){var b=this;return"string"!==typeof a||0===a.length?Promise.reject(O.create(B.H)):R(this,a).then(function(a){if(!a)throw O.create(B.C);return Q(b).then(function(b){return new Promise(function(d,c){var e=b.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);e.onerror=function(a){c(a.target.error)};e.onsuccess=function(b){0===b.target.result?c(O.create(B.F)):d(a)}})})})};var T=function(a){var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",D);if(!a.options.messagingSenderId||"string"!==typeof a.options.messagingSenderId)throw this.a.create(B.j);this.h=a.options.messagingSenderId;this.c=new P;this.app=a;this.INTERNAL={};this.INTERNAL.delete=function(){return b.delete}};
T.prototype.getToken=function(){var a=this,b=Notification.permission;return"granted"!==b?"denied"===b?Promise.reject(this.a.create(B.J)):Promise.resolve(null):this.f().then(function(b){return a.c.Z(a.h,b).then(function(d){return d?d:a.c.Y(a.h,b)})})};T.prototype.getToken=T.prototype.getToken;T.prototype.deleteToken=function(a){var b=this;return this.c.deleteToken(a).then(function(){return b.f()}).then(function(a){return a?a.pushManager.getSubscription():null}).then(function(a){if(a)return a.unsubscribe()})};
T.prototype.deleteToken=T.prototype.deleteToken;T.prototype.f=function(){throw this.a.create(B.R);};T.prototype.requestPermission=function(){throw this.a.create(B.i);};T.prototype.useServiceWorker=function(){throw this.a.create(B.i);};T.prototype.useServiceWorker=T.prototype.useServiceWorker;T.prototype.onMessage=function(){throw this.a.create(B.i);};T.prototype.onMessage=T.prototype.onMessage;T.prototype.onTokenRefresh=function(){throw this.a.create(B.i);};T.prototype.onTokenRefresh=T.prototype.onTokenRefresh;
T.prototype.setBackgroundMessageHandler=function(){throw this.a.create(B.w);};T.prototype.setBackgroundMessageHandler=T.prototype.setBackgroundMessageHandler;T.prototype.delete=function(){aa(this.c)};var W=self,X=function(a){var b=this;T.call(this,a);this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",D);W.addEventListener("push",function(a){return ea(b,a)},!1);W.addEventListener("pushsubscriptionchange",function(a){return fa(b,a)},!1);W.addEventListener("notificationclick",function(a){return ga(b,a)},!1);this.b=null};f(X,T);
var ea=function(a,b){var d;try{d=b.data.json()}catch(e){return}var c=ha().then(function(b){if(b){if(d.notification||a.b)return ia(a,d)}else{if((b=d)&&"object"===typeof b.notification){var c=Object.assign({},b.notification),e={};c.data=(e.FCM_MSG=b,e);b=c}else b=void 0;if(b)return W.registration.showNotification(b.title||"",b);if(a.b)return a.b(d)}});b.waitUntil(c)},fa=function(a,b){var d=a.getToken().then(function(b){if(!b)throw a.a.create(B.L);var d=a.c;return R(d,b).then(function(b){if(!b)throw a.a.create(B.I);
return W.registration.pushManager.subscribe(E).then(function(a){return S(b.fa,a,b.ea)}).catch(function(c){return d.deleteToken(b.ga).then(function(){throw a.a.create(B.V,{message:c});})})})});b.waitUntil(d)},ga=function(a,b){if(b.notification&&b.notification.data&&b.notification.data.FCM_MSG){b.stopImmediatePropagation();b.notification.close();var d=b.notification.data.FCM_MSG,c=d.notification.click_action;if(c){var e=ja(c).then(function(a){return a?a:W.clients.openWindow(c)}).then(function(b){if(b)return delete d.notification,
Y(a,b,H(G.K,d))});b.waitUntil(e)}}};X.prototype.setBackgroundMessageHandler=function(a){if(a&&"function"!==typeof a)throw this.a.create(B.A);this.b=a};X.prototype.setBackgroundMessageHandler=X.prototype.setBackgroundMessageHandler;
var ja=function(a){var b=(new URL(a)).href;return W.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){for(var c=null,d=0;d<a.length;d++)if((new URL(a[d].url)).href===b){c=a[d];break}if(c)return c.focus(),c})},Y=function(a,b,d){return new Promise(function(c,e){if(!b)return e(a.a.create(B.M));b.postMessage(d);c()})},ha=function(){return W.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){return a.some(function(a){return"visible"===a.visibilityState})})},
ia=function(a,b){return W.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(d){var c=H(G.P,b);return Promise.all(d.map(function(b){return Y(a,b,c)}))})};X.prototype.f=function(){return Promise.resolve(W.registration)};var Z=function(a){var b=this;T.call(this,a);this.g=null;this.m=firebase.INTERNAL.createSubscribe(function(a){b.g=a});this.v=null;this.o=firebase.INTERNAL.createSubscribe(function(a){b.v=a});ka(this)};f(Z,T);Z.prototype.getToken=function(){return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")?T.prototype.getToken.call(this):Promise.reject(this.a.create(B.W))};
Z.prototype.getToken=Z.prototype.getToken;Z.prototype.requestPermission=function(){var a=this;return"granted"===Notification.permission?Promise.resolve():new Promise(function(b,d){var c=function(c){return"granted"===c?b():"denied"===c?d(a.a.create(B.N)):d(a.a.create(B.O))},e=Notification.requestPermission(function(a){e||c(a)});e&&e.then(c)})};Z.prototype.requestPermission=Z.prototype.requestPermission;
Z.prototype.useServiceWorker=function(a){if(!(a instanceof ServiceWorkerRegistration))throw this.a.create(B.l);if("undefined"!==typeof this.b)throw this.a.create(B.X);this.b=a};Z.prototype.useServiceWorker=Z.prototype.useServiceWorker;Z.prototype.onMessage=function(a,b,d){return this.m(a,b,d)};Z.prototype.onMessage=Z.prototype.onMessage;Z.prototype.onTokenRefresh=function(a,b,d){return this.o(a,b,d)};Z.prototype.onTokenRefresh=Z.prototype.onTokenRefresh;
Z.prototype.f=function(){var a=this;if(this.b)return Promise.resolve(this.b);this.b=null;return navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).then(function(b){a.b=b;b.update();return b}).catch(function(b){throw a.a.create(B.D,{browserErrorMessage:b.message});})};
var ka=function(a){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(b){if(b.data&&b.data[F.u])switch(b=b.data,b[F.u]){case G.P:case G.K:a.g.next(b[F.B])}},!1)};if(!(firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService))throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");firebase.INTERNAL.registerService("messaging",function(a){return self&&"ServiceWorkerGlobalScope"in self?new X(a):new Z(a)},{Messaging:Z});})();
module.exports = firebase.messaging;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./app":1}],6:[function(require,module,exports){
var firebase = require('./app');
/*! @license Firebase v3.5.0
    Build: 3.5.0-rc.8
    Terms: https://developers.google.com/terms */
(function() {var k,aa=aa||{},l=this,n=function(a){return void 0!==a},ba=function(){},ca=function(){throw Error("unimplemented abstract method");},p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length},r=function(a){return"string"==typeof a},t=function(a){return"function"==p(a)},ea=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},fa="closure_uid_"+(1E9*Math.random()>>>
0),ga=0,ha=function(a,b,c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return u.apply(null,arguments)},ja=Date.now||function(){return+new Date},
v=function(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.Ka=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ka=function(a,b,c){function d(){P||(P=!0,b.apply(null,arguments))}function e(b){m=setTimeout(function(){m=null;a(f,2===Q)},b)}function f(a,b){if(!P)if(a)d.apply(null,arguments);else if(2===Q||q)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===Q?(Q=2,c=0):c=1E3*(h+Math.random());e(c)}}function g(a){jc||(jc=!0,P||(null!==m?(a||(Q=2),clearTimeout(m),e(0)):a||(Q=1)))}var h=1,m=null,q=!1,Q=0,P=!1,jc=!1;e(0);setTimeout(function(){q=!0;g(!0)},c);return g};var la="https://firebasestorage.googleapis.com";var w=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};v(w,Error);
var ma=function(){return new w("unknown","An unknown error occurred, please check the error payload for server response.")},na=function(){return new w("canceled","User canceled the upload/download.")},oa=function(){return new w("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},pa=function(a,b,c){return new w("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c)},qa=function(){return new w("app-deleted","The Firebase app was deleted.")},ra=function(a,b){return new w("invalid-format",
"String does not match format '"+a+"': "+b)};var sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ta=function(a){var b={};sa(a,function(a,d){b[a]=d});return b};var x=function(a,b,c,d){this.j=a;this.b={};this.method=b;this.headers={};this.body="";this.M=c;this.c=this.a=null;this.f=[200];this.h=[];this.i=d;this.g=!0};var ua={STATE_CHANGED:"state_changed"},va={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},wa=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var y=function(a){return n(a)&&null!==a},xa=function(a){return"string"===typeof a||a instanceof String},ya=function(){return"undefined"!==typeof Blob};var za=function(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null};za.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};var Aa=function(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};var z=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};v(z,Error);z.prototype.name="CustomError";var Ba=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Ba.prototype.a=null;var Ca=0;Ba.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Ca++;d||ja();this.b=b;delete this.a};var Da=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Ea=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Fa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ga=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Fa.length;f++)c=Fa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ha=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Ia=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var Ja=function(a){Ja[" "](a);return a};Ja[" "]=ba;var La=function(a,b){var c=Ka;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},Na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Oa=function(a,b){return a<b?-1:a>b?1:0};var Pa=function(a,b){this.a=a;this.b=b};var Qa=function(a,b){this.bucket=a;this.path=b},Ra=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},Sa=function(a){for(var b=null,c=[{ia:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,ba:{bucket:1,path:3},ha:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{ia:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,ba:{bucket:1,path:3},ha:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=
c[d],f=e.ia.exec(a);if(f){b=f[e.ba.bucket];(f=f[e.ba.path])||(f="");b=new Qa(b,f);e.ha(b);break}}if(null==b)throw new w("invalid-url","Invalid URL '"+a+"'.");return b};var Ta=function(a,b,c){t(a)||y(b)||y(c)?(this.next=a,this.a=b||null,this.b=c||null):(this.next=a.next||null,this.a=a.error||null,this.b=a.complete||null)};var Ua={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},Va=function(a){switch(a){case "raw":case "base64":case "base64url":case "data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},Wa=function(a,b){this.data=a;this.a=b||null},$a=function(a,b){switch(a){case "raw":return new Wa(Xa(b));case "base64":case "base64url":return new Wa(Ya(a,b));case "data_url":return a=new Za(b),a=a.a?Ya("base64",a.c):Xa(a.c),new Wa(a,(new Za(b)).b)}throw ma();
},Xa=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(127>=d)b.push(d);else if(2047>=d)b.push(192|d>>6,128|d&63);else if(55296==(d&64512))if(c<a.length-1&&56320==(a.charCodeAt(c+1)&64512)){var e=a.charCodeAt(++c),d=65536|(d&1023)<<10|e&1023;b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63)}else b.push(239,191,189);else 56320==(d&64512)?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|d&63)}return new Uint8Array(b)},Ya=function(a,b){switch(a){case "base64":var c=-1!==b.indexOf("-"),
d=-1!==b.indexOf("_");if(c||d)throw ra(a,"Invalid character '"+(c?"-":"_")+"' found: is it base64url encoded?");break;case "base64url":c=-1!==b.indexOf("+");d=-1!==b.indexOf("/");if(c||d)throw ra(a,"Invalid character '"+(c?"+":"/")+"' found: is it base64 encoded?");b=b.replace(/-/g,"+").replace(/_/g,"/")}var e;try{e=atob(b)}catch(f){throw ra(a,"Invalid character found");}a=new Uint8Array(e.length);for(b=0;b<e.length;b++)a[b]=e.charCodeAt(b);return a},Za=function(a){var b=a.match(/^data:([^,]+)?,/);
if(null===b)throw ra("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0<=c&&b.indexOf(";base64",c)==c)?b.substring(0,b.length-7):b}this.c=a.substring(a.indexOf(",")+1)};var ab=function(a){var b=encodeURIComponent,c="?";sa(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var A=function(a,b,c,d,e,f){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=f};k=A.prototype;k.na=function(){return this.b};k.Ja=function(){return this.h};k.Ga=function(){return this.f};k.Ba=function(){return this.a};k.pa=function(){if(y(this.a)){var a=this.a.downloadURLs;return y(a)&&y(a[0])?a[0]:null}return null};k.Ia=function(){return this.g};k.Ea=function(){return this.c};var bb=function(a,b){b.unshift(a);z.call(this,Ma.apply(null,b));b.shift()};v(bb,z);bb.prototype.name="AssertionError";
var cb=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new bb(""+e,f||[]);},B=function(a,b,c){a||cb("",null,b,Array.prototype.slice.call(arguments,2))},db=function(a,b){throw new bb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},eb=function(a,b,c){t(a)||cb("Expected function but got %s: %s.",[p(a),a],b,Array.prototype.slice.call(arguments,2))};var fb=function(){this.g=this.g;this.o=this.o};fb.prototype.g=!1;fb.prototype.ea=function(){this.g||(this.g=!0,this.D())};fb.prototype.D=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var gb="closure_listenable_"+(1E6*Math.random()|0),hb=0;var ib;a:{var jb=l.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a}}ib=""}var C=function(a){return-1!=ib.indexOf(a)};var lb=function(){};lb.prototype.b=null;lb.prototype.a=ca;var mb=function(a){return a.b||(a.b=a.f())};lb.prototype.f=ca;var nb=Array.prototype.indexOf?function(a,b,c){B(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ob=Array.prototype.forEach?function(a,b,c){B(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},pb=Array.prototype.filter?function(a,
b,c){B(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&&(e[f++]=m)}return e},qb=Array.prototype.map?function(a,b,c){B(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},rb=Array.prototype.some?function(a,b,c){B(null!=a.length);return Array.prototype.some.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},tb=function(a){var b;a:{b=sb;for(var c=a.length,d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:r(a)?a.charAt(b):a[b]},ub=function(a,b){return 0<=nb(a,b)},vb=function(a){if("array"!=p(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0},wb=function(a,b){b=nb(a,b);var c;if(c=0<=b)B(null!=a.length),Array.prototype.splice.call(a,
b,1);return c},xb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var zb=new za(function(){return new yb},function(a){a.reset()},100),Bb=function(){var a=Ab,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b},yb=function(){this.next=this.b=this.a=null};yb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};yb.prototype.reset=function(){this.next=this.b=this.a=null};var Cb=function(a,b){this.type=a;this.a=this.target=b;this.ja=!0};Cb.prototype.b=function(){this.ja=!1};var Db=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.U=!!d;this.M=e;++hb;this.N=this.T=!1},Eb=function(a){a.N=!0;a.listener=null;a.a=null;a.src=null;a.M=null};var Fb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Gb=function(a,b){b=pb(b.split("/"),function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},Hb=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var Ib=function(a){this.src=a;this.a={};this.b=0},Kb=function(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=Jb(b,c,e,f);-1<h?(a=b[h],d||(a.T=!1)):(a=new Db(c,a.src,g,!!e,f),a.T=d,b.push(a));return a},Lb=function(a,b){var c=b.type;c in a.a&&wb(a.a[c],b)&&(Eb(b),0==a.a[c].length&&(delete a.a[c],a.b--))},Jb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.N&&f.listener==b&&f.U==!!c&&f.M==d)return e}return-1};var Mb,Nb=function(){};v(Nb,lb);Nb.prototype.a=function(){var a=Ob(this);return a?new ActiveXObject(a):new XMLHttpRequest};Nb.prototype.f=function(){var a={};Ob(this)&&(a[0]=!0,a[1]=!0);return a};
var Ob=function(a){if(!a.c&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.c=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.c};Mb=new Nb;var Pb=function(a){this.a=[];if(a)a:{var b;if(a instanceof Pb){if(b=a.H(),a=a.A(),0>=this.b()){for(var c=this.a,d=0;d<b.length;d++)c.push(new Pa(b[d],a[d]));break a}}else b=Ea(a),a=Da(a);for(d=0;d<b.length;d++)Qb(this,b[d],a[d])}},Qb=function(a,b,c){var d=a.a;d.push(new Pa(b,c));b=d.length-1;a=a.a;for(c=a[b];0<b;)if(d=b-1>>1,a[d].a>c.a)a[b]=a[d],b=d;else break;a[b]=c};Pb.prototype.A=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].b);return b};
Pb.prototype.H=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].a);return b};Pb.prototype.b=function(){return this.a.length};var Rb=function(){this.c=[];this.a=[]},Sb=function(a){0==a.c.length&&(a.c=a.a,a.c.reverse(),a.a=[]);return a.c.pop()};Rb.prototype.b=function(){return this.c.length+this.a.length};Rb.prototype.A=function(){for(var a=[],b=this.c.length-1;0<=b;--b)a.push(this.c[b]);for(var c=this.a.length,b=0;b<c;++b)a.push(this.a[b]);return a};var Tb=function(a){if(a.A&&"function"==typeof a.A)return a.A();if(r(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Da(a)},Ub=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(da(a)||r(a))ob(a,b,void 0);else{var c;if(a.H&&"function"==typeof a.H)c=a.H();else if(a.A&&"function"==typeof a.A)c=void 0;else if(da(a)||r(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Ea(a);for(var d=Tb(a),e=d.length,f=0;f<e;f++)b.call(void 0,
d[f],c&&c[f],a)}};var Vb=function(a){l.setTimeout(function(){throw a;},0)},Wb,Xb=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=u(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(n(c.next)){c=c.next;var a=c.da;c.da=null;a()}};return function(a){d.next={da:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var Yb="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},Zb=function(){};Zb.prototype.next=function(){throw Yb;};Zb.prototype.h=function(){return this};var $b=function(){Pb.call(this)};v($b,Pb);var ac=C("Opera"),D=C("Trident")||C("MSIE"),bc=C("Edge"),cc=C("Gecko")&&!(-1!=ib.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),dc=-1!=ib.toLowerCase().indexOf("webkit")&&!C("Edge"),ec=function(){var a=l.document;return a?a.documentMode:void 0},fc;
a:{var gc="",hc=function(){var a=ib;if(cc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(bc)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(dc)return/WebKit\/(\S+)/.exec(a);if(ac)return/(?:Version)[ \/]?(\S+)/.exec(a)}();hc&&(gc=hc?hc[1]:"");if(D){var ic=ec();if(null!=ic&&ic>parseFloat(gc)){fc=String(ic);break a}}fc=gc}
var kc=fc,Ka={},E=function(a){return La(a,function(){for(var b=0,c=Na(String(kc)).split("."),d=Na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Oa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Oa(0==g[2].length,0==h[2].length)||Oa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})},lc;var mc=l.document;
lc=mc&&D?ec()||("CSS1Compat"==mc.compatMode?parseInt(kc,10):5):void 0;var qc=function(a,b){nc||oc();pc||(nc(),pc=!0);var c=Ab,d=zb.get();d.set(a,b);c.b?c.b.next=d:(B(!c.a),c.a=d);c.b=d},nc,oc=function(){var a=l.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);nc=function(){b.then(rc)}}else nc=function(){var a=rc;!t(l.setImmediate)||l.Window&&l.Window.prototype&&!C("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Wb||(Wb=Xb()),Wb(a)):l.setImmediate(a)}},pc=!1,Ab=new function(){this.b=this.a=null},rc=function(){for(var a;a=Bb();){try{a.a.call(a.b)}catch(b){Vb(b)}Aa(zb,
a)}pc=!1};var sc;(sc=!D)||(sc=9<=Number(lc));var tc=sc,uc=D&&!E("9");!dc||E("528");cc&&E("1.9b")||D&&E("8")||ac&&E("9.5")||dc&&E("528");cc&&!E("8")||D&&E("9");var F=function(a,b){this.c={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof F?(c=a.H(),d=a.A()):(c=Ea(a),d=Da(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};F.prototype.b=function(){return this.f};F.prototype.A=function(){vc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.c[this.a[b]]);return a};F.prototype.H=function(){vc(this);return this.a.concat()};
var wc=function(a,b){return Object.prototype.hasOwnProperty.call(a.c,b)?(delete a.c[b],a.f--,a.g++,a.a.length>2*a.f&&vc(a),!0):!1},vc=function(a){if(a.f!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.c,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};
F.prototype.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.c,a)?this.c[a]:b};F.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.c,a)||(this.f++,this.a.push(a),this.g++);this.c[a]=b};F.prototype.forEach=function(a,b){for(var c=this.H(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
F.prototype.h=function(a){vc(this);var b=0,c=this.g,d=this,e=new Zb;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Yb;var e=d.a[b++];return a?e:d.c[e]};return e};var xc=function(a,b){Cb.call(this,a?a.type:"");this.c=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;if((b=a.relatedTarget)&&cc)try{Ja(b.nodeName)}catch(c){}this.c=a;a.defaultPrevented&&this.b()}};v(xc,Cb);xc.prototype.b=function(){xc.I.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,uc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var G=function(a,b){this.a=0;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ba)try{var c=this;a.call(b,function(a){yc(c,2,a)},function(a){if(!(a instanceof zc))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}yc(c,3,a)})}catch(d){yc(this,3,d)}},Ac=function(){this.next=this.f=this.c=this.b=this.a=null;this.g=!1};Ac.prototype.reset=function(){this.f=this.c=this.b=this.a=null;this.g=!1};
var Bc=new za(function(){return new Ac},function(a){a.reset()},100),Cc=function(a,b,c){var d=Bc.get();d.b=a;d.c=b;d.f=c;return d},Dc=function(a){if(a instanceof G)return a;var b=new G(ba);yc(b,2,a);return b},Ec=function(a){return new G(function(b,c){c(a)})};
G.prototype.then=function(a,b,c){null!=a&&eb(a,"opt_onFulfilled should be a function.");null!=b&&eb(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Fc(this,t(a)?a:null,t(b)?b:null,c)};Ha(G);G.prototype.l=function(a,b){return Fc(this,null,a,b)};G.prototype.cancel=function(a){0==this.a&&qc(function(){var b=new zc(a);Gc(this,b)},this)};
var Gc=function(a,b){if(0==a.a)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.g||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.a&&1==d?Gc(c,b):(f?(d=f,B(c.b),B(null!=d),d.next==c.f&&(c.f=d),d.next=d.next.next):Hc(c),Ic(c,e,3,b)))}a.c=null}else yc(a,3,b)},Kc=function(a,b){a.b||2!=a.a&&3!=a.a||Jc(a);B(null!=b.b);a.f?a.f.next=b:a.b=b;a.f=b},Fc=function(a,b,c,d){var e=Cc(null,null,null);e.a=new G(function(a,g){e.b=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){g(q)}}:a;
e.c=c?function(b){try{var e=c.call(d,b);!n(e)&&b instanceof zc?g(b):a(e)}catch(q){g(q)}}:g});e.a.c=a;Kc(a,e);return e.a};G.prototype.o=function(a){B(1==this.a);this.a=0;yc(this,2,a)};G.prototype.m=function(a){B(1==this.a);this.a=0;yc(this,3,a)};
var yc=function(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;var d;a:{var e=c,f=a.o,g=a.m;if(e instanceof G)null!=f&&eb(f,"opt_onFulfilled should be a function."),null!=g&&eb(g,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Kc(e,Cc(f||ba,g||null,a)),d=!0;else if(Ia(e))e.then(f,g,a),d=!0;else{if(ea(e))try{var h=e.then;if(t(h)){Lc(e,h,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}d||
(a.i=c,a.a=b,a.c=null,Jc(a),3!=b||c instanceof zc||Mc(a,c))}},Lc=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},h=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,h)}catch(m){h(m)}},Jc=function(a){a.h||(a.h=!0,qc(a.j,a))},Hc=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);null!=b&&B(null!=b.b);return b};G.prototype.j=function(){for(var a;a=Hc(this);)Ic(this,a,this.a,this.i);this.h=!1};
var Ic=function(a,b,c,d){if(3==c&&b.c&&!b.g)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Nc(b,c,d);else try{b.g?b.b.call(b.f):Nc(b,c,d)}catch(e){Oc.call(null,e)}Aa(Bc,b)},Nc=function(a,b,c){2==b?a.b.call(a.f,c):a.c&&a.c.call(a.f,c)},Mc=function(a,b){a.g=!0;qc(function(){a.g&&Oc.call(null,b)})},Oc=Vb,zc=function(a){z.call(this,a)};v(zc,z);zc.prototype.name="cancel";var Qc=function(a){this.a=new F;if(a){a=Tb(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];this.a.set(Pc(d),d)}}},Pc=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[fa]||(a[fa]=++ga)):b.substr(0,1)+a};Qc.prototype.b=function(){return this.a.b()};Qc.prototype.A=function(){return this.a.A()};Qc.prototype.h=function(){return this.a.h(!1)};var Rc=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);Dc(!0).then(function(){a.apply(null,b)})}};var Sc="closure_lm_"+(1E6*Math.random()|0),Tc={},Uc=0,Vc=function(a,b,c,d,e){if("array"==p(b)){for(var f=0;f<b.length;f++)Vc(a,b[f],c,d,e);return null}c=Wc(c);a&&a[gb]?(Xc(a),a=Kb(a.b,String(b),c,!1,d,e)):a=Yc(a,b,c,!1,d,e);return a},Yc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=Zc(a);h||(a[Sc]=h=new Ib(a));c=Kb(h,b,c,d,e,f);if(c.a)return c;d=$c();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(ad(b.toString()),
d);else throw Error("addEventListener and attachEvent are unavailable.");Uc++;return c},$c=function(){var a=bd,b=tc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},cd=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)cd(a,b[f],c,d,e);else c=Wc(c),a&&a[gb]?Kb(a.b,String(b),c,!0,d,e):Yc(a,b,c,!0,d,e)},dd=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)dd(a,b[f],c,d,e);else(c=Wc(c),a&&a[gb])?(a=a.b,b=String(b).toString(),
b in a.a&&(f=a.a[b],c=Jb(f,c,d,e),-1<c&&(Eb(f[c]),B(null!=f.length),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=Zc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Jb(b,c,!!d,e)),(c=-1<a?b[a]:null)&&ed(c))},ed=function(a){if("number"!=typeof a&&a&&!a.N){var b=a.src;if(b&&b[gb])Lb(b.b,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.U):b.detachEvent&&b.detachEvent(ad(c),d);Uc--;(c=Zc(b))?(Lb(c,a),0==c.b&&(c.src=null,b[Sc]=null)):Eb(a)}}},ad=function(a){return a in
Tc?Tc[a]:Tc[a]="on"+a},gd=function(a,b,c,d){var e=!0;if(a=Zc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.U==c&&!f.N&&(f=fd(f,d),e=e&&!1!==f)}return e},fd=function(a,b){var c=a.listener,d=a.M||a.src;a.T&&ed(a);return c.call(d,b)},bd=function(a,b){if(a.N)return!0;if(!tc){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new xc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=
-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.a=d[e];var f=gd(d[e],a,!0,b),c=c&&f}for(e=0;e<d.length;e++)b.a=d[e],f=gd(d[e],a,!1,b),c=c&&f}return c}return fd(a,new xc(b,this))},Zc=function(a){a=a[Sc];return a instanceof Ib?a:null},hd="__closure_events_fn_"+(1E9*Math.random()>>>0),Wc=function(a){B(a,"Listener can not be null.");if(t(a))return a;B(a.handleEvent,"An object listener must have handleEvent method.");
a[hd]||(a[hd]=function(b){return a.handleEvent(b)});return a[hd]};var H=function(a,b){fb.call(this);this.m=a||0;this.f=b||10;if(this.m>this.f)throw Error("[goog.structs.Pool] Min can not be greater than max");this.a=new Rb;this.c=new Qc;this.j=null;this.S()};v(H,fb);H.prototype.W=function(){var a=ja();if(!(null!=this.j&&0>a-this.j)){for(var b;0<this.a.b()&&(b=Sb(this.a),!this.l(b));)this.S();!b&&this.b()<this.f&&(b=this.i());b&&(this.j=a,this.c.a.set(Pc(b),b));return b}};var jd=function(a){var b=id;wc(b.c.a,Pc(a))&&b.$(a)};
H.prototype.$=function(a){wc(this.c.a,Pc(a));this.l(a)&&this.b()<this.f?this.a.a.push(a):kd(a)};H.prototype.S=function(){for(var a=this.a;this.b()<this.m;){var b=this.i();a.a.push(b)}for(;this.b()>this.f&&0<this.a.b();)kd(Sb(a))};H.prototype.i=function(){return{}};var kd=function(a){if("function"==typeof a.ea)a.ea();else for(var b in a)a[b]=null};H.prototype.l=function(a){return"function"==typeof a.oa?a.oa():!0};H.prototype.b=function(){return this.a.b()+this.c.b()};
H.prototype.D=function(){H.I.D.call(this);if(0<this.c.b())throw Error("[goog.structs.Pool] Objects not released");delete this.c;for(var a=this.a;0!=a.c.length||0!=a.a.length;)kd(Sb(a));delete this.a};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var ld=function(a,b){this.g=[];this.u=a;this.s=b||null;this.f=this.a=!1;this.b=void 0;this.l=this.o=this.i=!1;this.h=0;this.c=null;this.j=0};
ld.prototype.cancel=function(a){if(this.a)this.b instanceof ld&&this.b.cancel();else{if(this.c){var b=this.c;delete this.c;a?b.cancel(a):(b.j--,0>=b.j&&b.cancel())}this.u?this.u.call(this.s,this):this.l=!0;if(!this.a){a=new md;if(this.a){if(!this.l)throw new nd;this.l=!1}B(!(a instanceof ld),"An execution sequence may not be initiated with a blocking Deferred.");this.a=!0;this.b=a;this.f=!0;od(this)}}};ld.prototype.m=function(a,b){this.i=!1;this.a=!0;this.b=b;this.f=!a;od(this)};
var pd=function(a,b,c){B(!a.o,"Blocking Deferreds can not be re-used");a.g.push([b,c,void 0]);a.a&&od(a)};ld.prototype.then=function(a,b,c){var d,e,f=new G(function(a,b){d=a;e=b});pd(this,d,function(a){a instanceof md?f.cancel():e(a)});return f.then(a,b,c)};Ha(ld);
var qd=function(a){return rb(a.g,function(a){return t(a[1])})},od=function(a){if(a.h&&a.a&&qd(a)){var b=a.h,c=rd[b];c&&(l.clearTimeout(c.a),delete rd[b]);a.h=0}a.c&&(a.c.j--,delete a.c);for(var b=a.b,d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],g=e[1],e=e[2];if(f=a.f?g:f)try{var h=f.call(e||a.s,b);n(h)&&(a.f=a.f&&(h==b||h instanceof Error),a.b=b=h);if(Ia(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.i=!0}catch(m){b=m,a.f=!0,qd(a)||(c=!0)}}a.b=b;d&&(h=u(a.m,a,!0),d=u(a.m,a,
!1),b instanceof ld?(pd(b,h,d),b.o=!0):b.then(h,d));c&&(b=new sd(b),rd[b.a]=b,a.h=b.a)},nd=function(){z.call(this)};v(nd,z);nd.prototype.message="Deferred has already fired";nd.prototype.name="AlreadyCalledError";var md=function(){z.call(this)};v(md,z);md.prototype.message="Deferred was canceled";md.prototype.name="CanceledError";var sd=function(a){this.a=l.setTimeout(u(this.c,this),0);this.b=a};
sd.prototype.c=function(){B(rd[this.a],"Cannot throw an error that is not scheduled.");delete rd[this.a];throw this.b;};var rd={};var td=function(a){this.f=a;this.b=this.c=this.a=null},ud=function(a,b){this.name=a;this.value=b};ud.prototype.toString=function(){return this.name};var vd=new ud("SEVERE",1E3),wd=new ud("CONFIG",700),xd=new ud("FINE",500),yd=function(a){if(a.c)return a.c;if(a.a)return yd(a.a);db("Root logger has no level set.");return null};
td.prototype.log=function(a,b,c){if(a.value>=yd(this).value)for(t(b)&&(b=b()),a=new Ba(a,String(b),this.f),c&&(a.a=c),c="log:"+a.b,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;)c=c.a};
var zd={},Ad=null,Bd=function(a){Ad||(Ad=new td(""),zd[""]=Ad,Ad.c=wd);var b;if(!(b=zd[a])){b=new td(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Bd(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;zd[a]=b}return b};var Cd=function(){fb.call(this);this.b=new Ib(this);this.Y=this;this.G=null};v(Cd,fb);Cd.prototype[gb]=!0;Cd.prototype.removeEventListener=function(a,b,c,d){dd(this,a,b,c,d)};
var I=function(a,b){Xc(a);var c,d=a.G;if(d){c=[];for(var e=1;d;d=d.G)c.push(d),B(1E3>++e,"infinite loop")}a=a.Y;d=b.type||b;r(b)?b=new Cb(b,a):b instanceof Cb?b.target=b.target||a:(e=b,b=new Cb(d,a),Ga(b,e));var e=!0,f;if(c)for(var g=c.length-1;0<=g;g--)f=b.a=c[g],e=Dd(f,d,!0,b)&&e;f=b.a=a;e=Dd(f,d,!0,b)&&e;e=Dd(f,d,!1,b)&&e;if(c)for(g=0;g<c.length;g++)f=b.a=c[g],e=Dd(f,d,!1,b)&&e};
Cd.prototype.D=function(){Cd.I.D.call(this);if(this.b){var a=this.b,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Eb(d[e]);delete a.a[c];a.b--}}this.G=null};var Dd=function(a,b,c,d){b=a.b.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.N&&g.U==c){var h=g.listener,m=g.M||g.src;g.T&&Lb(a.b,g);e=!1!==h.call(m,d)&&e}}return e&&0!=d.ja},Xc=function(a){B(a.b,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var J=function(a,b){this.h=new $b;H.call(this,a,b)};v(J,H);k=J.prototype;k.W=function(a,b){if(!a)return J.I.W.call(this);Qb(this.h,n(b)?b:100,a);this.aa()};k.aa=function(){for(var a=this.h;0<a.b();){var b=this.W();if(b){var c;var d=a,e=d.a,f=e.length;c=e[0];if(0>=f)c=void 0;else{if(1==f)vb(e);else{e[0]=e.pop();for(var e=0,d=d.a,f=d.length,g=d[e];e<f>>1;){var h=2*e+1,m=2*e+2,h=m<f&&d[m].a<d[h].a?m:h;if(d[h].a>g.a)break;d[e]=d[h];e=h}d[e]=g}c=c.b}c.apply(this,[b])}else break}};
k.$=function(a){J.I.$.call(this,a);this.aa()};k.S=function(){J.I.S.call(this);this.aa()};k.D=function(){J.I.D.call(this);l.clearTimeout(void 0);vb(this.h.a);this.h=null};var K=function(a,b){a&&a.log(xd,b,void 0)};var Ed=function(a,b,c){if(t(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)};var L=function(a){Cd.call(this);this.headers=new F;this.B=a||null;this.c=!1;this.u=this.a=null;this.L=this.l="";this.K=0;this.h="";this.f=this.C=this.j=this.F=!1;this.i=0;this.m=null;this.R="";this.s=this.ca=this.X=!1};v(L,Cd);var Fd=L.prototype,Gd=Bd("goog.net.XhrIo");Fd.w=Gd;var Hd=/^https?$/i,Id=["POST","PUT"];
L.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.l+"; newUri="+a);b=b?b.toUpperCase():"GET";this.l=a;this.h="";this.K=0;this.L=b;this.F=!1;this.c=!0;this.a=this.B?this.B.a():Mb.a();this.u=this.B?mb(this.B):mb(Mb);this.a.onreadystatechange=u(this.P,this);this.ca&&"onprogress"in this.a&&(this.a.onprogress=u(function(a){this.O(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=u(this.O,this)));try{K(this.w,M(this,"Opening Xhr")),
this.C=!0,this.a.open(b,String(a),!0),this.C=!1}catch(f){K(this.w,M(this,"Error opening Xhr: "+f.message));Jd(this,f);return}a=c||"";var e=new F(this.headers);d&&Ub(d,function(a,b){e.set(b,a)});d=tb(e.H());c=l.FormData&&a instanceof l.FormData;!ub(Id,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.R&&(this.a.responseType=this.R);"withCredentials"in this.a&&this.a.withCredentials!==this.X&&(this.a.withCredentials=
this.X);try{Kd(this),0<this.i&&(this.s=Ld(this.a),K(this.w,M(this,"Will abort after "+this.i+"ms if incomplete, xhr2 "+this.s)),this.s?(this.a.timeout=this.i,this.a.ontimeout=u(this.J,this)):this.m=Ed(this.J,this.i,this)),K(this.w,M(this,"Sending request")),this.j=!0,this.a.send(a),this.j=!1}catch(f){K(this.w,M(this,"Send error: "+f.message)),Jd(this,f)}};var Ld=function(a){return D&&E(9)&&"number"==typeof a.timeout&&n(a.ontimeout)},sb=function(a){return"content-type"==a.toLowerCase()};
L.prototype.J=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.i+"ms, aborting",this.K=8,K(this.w,M(this,this.h)),I(this,"timeout"),this.abort(8))};var Jd=function(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;a.K=5;Md(a);Nd(a)},Md=function(a){a.F||(a.F=!0,I(a,"complete"),I(a,"error"))};L.prototype.abort=function(a){this.a&&this.c&&(K(this.w,M(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.K=a||7,I(this,"complete"),I(this,"abort"),Nd(this))};
L.prototype.D=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Nd(this,!0));L.I.D.call(this)};L.prototype.P=function(){this.g||(this.C||this.j||this.f?Od(this):this.Z())};L.prototype.Z=function(){Od(this)};
var Od=function(a){if(a.c&&"undefined"!=typeof aa)if(a.u[1]&&4==Pd(a)&&2==N(a))K(a.w,M(a,"Local request error detected and ignored"));else if(a.j&&4==Pd(a))Ed(a.P,0,a);else if(I(a,"readystatechange"),4==Pd(a)){K(a.w,M(a,"Request complete"));a.c=!1;try{if(Qd(a))I(a,"complete"),I(a,"success");else{a.K=6;var b;try{b=2<Pd(a)?a.a.statusText:""}catch(c){K(a.w,"Can not get status: "+c.message),b=""}a.h=b+" ["+N(a)+"]";Md(a)}}finally{Nd(a)}}};
L.prototype.O=function(a,b){B("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");I(this,Rd(a,"progress"));I(this,Rd(a,b?"downloadprogress":"uploadprogress"))};
var Rd=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Nd=function(a,b){if(a.a){Kd(a);var c=a.a,d=a.u[0]?ba:null;a.a=null;a.u=null;b||I(a,"ready");try{c.onreadystatechange=d}catch(e){(a=a.w)&&a.log(vd,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Kd=function(a){a.a&&a.s&&(a.a.ontimeout=null);"number"==typeof a.m&&(l.clearTimeout(a.m),a.m=null)},Qd=function(a){var b=N(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=
!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.l).match(Fb)[1]||null,!a&&l.self&&l.self.location&&(a=l.self.location.protocol,a=a.substr(0,a.length-1)),b=!Hd.test(a?a.toLowerCase():"");c=b}return c},Pd=function(a){return a.a?a.a.readyState:0},N=function(a){try{return 2<Pd(a)?a.a.status:-1}catch(b){return-1}},Sd=function(a){try{return a.a?a.a.responseText:""}catch(b){return K(a.w,"Can not get responseText: "+b.message),""}},Td=function(a,b){return a.a&&4==Pd(a)?a.a.getResponseHeader(b):void 0},
M=function(a,b){return b+" ["+a.L+" "+a.l+" "+N(a)+"]"};var Ud=function(a,b,c,d){this.s=a;this.u=!!d;J.call(this,b,c)};v(Ud,J);Ud.prototype.i=function(){var a=new L,b=this.s;b&&b.forEach(function(b,d){a.headers.set(d,b)});this.u&&(a.X=!0);return a};Ud.prototype.l=function(a){return!a.g&&!a.a};var id=new Ud;var Wd=function(a,b,c,d,e,f,g,h,m,q,Q){this.J=a;this.C=b;this.u=c;this.m=d;this.G=e.slice();this.o=f.slice();this.j=this.l=this.c=this.b=null;this.g=this.h=!1;this.s=g;this.i=h;this.f=q;this.L=Q;this.F=m;var P=this;this.B=new G(function(a,b){P.l=a;P.j=b;Vd(P)})},Xd=function(a,b,c){this.b=a;this.c=b;this.a=!!c},Vd=function(a){function b(a,b){b?a(!1,new Xd(!1,null,!0)):id.W(function(b){b.X=d.L;d.b=b;var c=null;null!==d.f&&(b.ca=!0,c=Vc(b,"uploadprogress",function(a){d.f(a.loaded,a.lengthComputable?
a.total:-1)}),b.ca=null!==d.f);b.send(d.J,d.C,d.m,d.u);cd(b,"complete",function(b){null!==c&&ed(c);d.b=null;b=b.target;var e=6===b.K&&100<=N(b),f=Qd(b)||e,e=N(b);if(!(f=!f))var g=d,f=500<=e&&600>e,h=ub([408,429],e),g=ub(g.o,e),f=f||h||g;f?(e=7===b.K,jd(b),a(!1,new Xd(!1,null,e))):(e=ub(d.G,e),a(!0,new Xd(e,b)))})})}function c(a,b){var c=d.l;a=d.j;var e=b.c;if(b.b)try{var f=d.s(e,Sd(e));n(f)?c(f):c()}catch(q){a(q)}else null!==e?(b=ma(),f=Sd(e),b.serverResponse=f,d.i?a(d.i(e,b)):a(b)):(b=b.a?d.g?qa():
na():new w("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),a(b));jd(e)}var d=a;a.h?c(0,new Xd(!1,null,!0)):a.c=ka(b,c,a.F)};Wd.prototype.a=function(){return this.B};Wd.prototype.cancel=function(a){this.h=!0;this.g=a||!1;null!==this.c&&(0,this.c)(!1);null!==this.b&&this.b.abort()};
var Yd=function(a,b,c){var d=ab(a.b),d=a.j+d,e=a.headers?ta(a.headers):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new Wd(d,a.method,e,a.body,a.f,a.h,a.M,a.a,a.i,a.c,c)};var Zd=function(a){var b=l.BlobBuilder||l.WebKitBlobBuilder;if(n(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=xb(arguments);c=l.BlobBuilder||l.WebKitBlobBuilder;if(n(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(n(l.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},$d=function(a,b,c){n(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,
c):a.slice?cc&&!E("13.0")||dc&&!E("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var O=function(a,b){ya()&&a instanceof Blob?(this.v=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.v=new Uint8Array(a):(this.v=new Uint8Array(a.byteLength),this.v.set(new Uint8Array(a))),b=this.v.length):(b?this.v=a:(this.v=new Uint8Array(a.length),this.v.set(a)),b=a.length),a="");this.a=b;this.b=a};O.prototype.type=function(){return this.b};
O.prototype.slice=function(a,b){if(ya()&&this.v instanceof Blob)return a=$d(this.v,a,b),null===a?null:new O(a);a=new Uint8Array(this.v.buffer,a,b-a);return new O(a,!0)};
var ae=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(ya())return b=qb(b,function(a){return a instanceof O?a.v:a}),new O(Zd.apply(null,b));var b=qb(b,function(a){return xa(a)?$a("raw",a).data.buffer:a.v.buffer}),c=0;ob(b,function(a){c+=a.byteLength});var d=new Uint8Array(c),e=0;ob(b,function(a){a=new Uint8Array(a);for(var b=0;b<a.length;b++)d[e++]=a[b]});return new O(d,!0)};var be=function(a){this.b=Ec(a)};be.prototype.a=function(){return this.b};be.prototype.cancel=function(){};var ce=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},de=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)},ee=function(a){sa(a.a,function(a,c){c&&c.cancel(!0)});a.a={}};var fe=function(a,b,c,d){this.a=a;this.g=null;if(null!==this.a&&(a=this.a.options,y(a))){a=a.storageBucket||null;if(null==a)a=null;else{var e=null;try{e=Sa(a)}catch(f){}if(null!==e){if(""!==e.path)throw new w("invalid-default-bucket","Invalid default bucket '"+a+"'.");a=e.bucket}}this.g=a}this.l=b;this.j=c;this.i=d;this.c=12E4;this.b=6E4;this.h=new ce;this.f=!1},ge=function(a){return null!==a.a&&y(a.a.INTERNAL)&&y(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return y(a)?a.accessToken:
null},function(){return null}):Dc(null)};fe.prototype.bucket=function(){if(this.f)throw qa();return this.g};var R=function(a,b,c){if(a.f)return new be(qa());b=a.j(b,c,null===a.a);de(a.h,b);return b};var he=function(a,b){return b},S=function(a,b,c,d){this.c=a;this.b=b||a;this.writable=!!c;this.a=d||he},ie=null,je=function(){if(ie)return ie;var a=[];a.push(new S("bucket"));a.push(new S("generation"));a.push(new S("metageneration"));a.push(new S("name","fullPath",!0));var b=new S("name");b.a=function(a,b){return!xa(b)||2>b.length?b:Hb(b)};a.push(b);b=new S("size");b.a=function(a,b){return y(b)?+b:b};a.push(b);a.push(new S("timeCreated"));a.push(new S("updated"));a.push(new S("md5Hash",null,!0));
a.push(new S("cacheControl",null,!0));a.push(new S("contentDisposition",null,!0));a.push(new S("contentEncoding",null,!0));a.push(new S("contentLanguage",null,!0));a.push(new S("contentType",null,!0));a.push(new S("metadata","customMetadata",!0));a.push(new S("downloadTokens","downloadURLs",!1,function(a,b){if(!(xa(b)&&0<b.length))return[];var c=encodeURIComponent;return qb(b.split(","),function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+c(a.bucket)+"/o/"+c(d));b=ab({alt:"media",
token:b});return d+b})}));return ie=a},ke=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.l(b,new Qa(a.bucket,a.fullPath))}})},le=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var f=b[e];f.writable&&(c[f.c]=a[f.b])}return JSON.stringify(c)},me=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b&&"object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}};var T=function(a,b,c){for(var d=b.length,e=b.length,f=0;f<b.length;f++)if(b[f].b){d=f;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new w("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(f=0;f<c.length;f++)try{b[f].a(c[f])}catch(g){if(g instanceof Error)throw pa(f,a,g.message);throw pa(f,a,g);}},U=function(a,b){var c=this;this.a=function(b){c.b&&!n(b)||a(b)};
this.b=!!b},ne=function(a,b){return function(c){a(c);b(c)}},oe=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=ne(c,a):d=c;return new U(d,b)},pe=function(){return new U(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||ya()&&a instanceof Blob))throw"Expected Blob or File.";})},qe=function(){return new U(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},re=function(a,
b){return new U(function(b){if(!(null===b||y(b)&&b instanceof Object))throw"Expected an Object.";y(a)&&a(b)},b)},se=function(){return new U(function(a){if(null!==a&&!t(a))throw"Expected a Function.";},!0)};var te=function(a){if(!a)throw ma();},ue=function(a,b){return function(c,d){a:{var e;try{e=JSON.parse(d)}catch(h){c=null;break a}c=ea(e)?e:null}if(null===c)c=null;else{d={type:"file"};e=b.length;for(var f=0;f<e;f++){var g=b[f];d[g.b]=g.a(d,c[g.c])}ke(d,a);c=d}te(null!==c);return c}},ve=function(a){return function(b,c){b=401===N(b)?new w("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===N(b)?new w("quota-exceeded","Quota for bucket '"+
a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===N(b)?new w("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b}},we=function(a){var b=ve(a);return function(c,d){var e=b(c,d);404===N(c)&&(e=new w("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e}},xe=function(a,b,c){var d=Ra(b);a=new x(la+"/v0"+d,"GET",ue(a,c),a.c);a.a=we(b);return a},ye=function(a,
b){var c=Ra(b);a=new x(la+"/v0"+c,"DELETE",function(){},a.c);a.f=[200,204];a.a=we(b);return a},ze=function(a,b,c){c=c?ta(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&&b.type()||"application/octet-stream",c.contentType=a);return c},Ae=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g={"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var m=0;2>m;m++)h+=Math.random().toString().slice(2);g["Content-Type"]="multipart/related; boundary="+h;e=ze(b,d,e);m=le(e,c);d=ae("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+
m+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");if(null===d)throw oa();a=new x(la+"/v0"+f,"POST",ue(a,c),a.b);a.b={name:e.fullPath};a.headers=g;a.body=d.v;a.a=ve(b);return a},Be=function(a,b,c,d){this.a=a;this.total=b;this.b=!!c;this.c=d||null},Ce=function(a,b){var c;try{c=Td(a,"X-Goog-Upload-Status")}catch(d){te(!1)}te(ub(b||["active"],c));return c},De=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g=ze(b,d,e);e={name:g.fullPath};f=la+"/v0"+f;d={"X-Goog-Upload-Protocol":"resumable",
"X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.a,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"};c=le(g,c);a=new x(f,"POST",function(a){Ce(a);var b;try{b=Td(a,"X-Goog-Upload-URL")}catch(q){te(!1)}te(xa(b));return b},a.b);a.b=e;a.headers=d;a.body=c;a.a=ve(b);return a},Ee=function(a,b,c,d){a=new x(c,"POST",function(a){var b=Ce(a,["active","final"]),c;try{c=Td(a,"X-Goog-Upload-Size-Received")}catch(h){te(!1)}a=c;isFinite(a)&&
(a=String(a));a=r(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;te(!isNaN(a));return new Be(a,d.a,"final"===b)},a.b);a.headers={"X-Goog-Upload-Command":"query"};a.a=ve(b);a.g=!1;return a},Fe=function(a,b,c,d,e,f,g){var h=new Be(0,0);g?(h.a=g.a,h.total=g.total):(h.a=0,h.total=d.a);if(d.a!==h.total)throw new w("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var m=g=h.total-h.a;0<e&&(m=Math.min(m,e));var q=h.a;e={"X-Goog-Upload-Command":m===
g?"upload, finalize":"upload","X-Goog-Upload-Offset":h.a};g=d.slice(q,q+m);if(null===g)throw oa();c=new x(c,"POST",function(a,c){var e=Ce(a,["active","final"]),g=h.a+m,Q=d.a,q;"final"===e?q=ue(b,f)(a,c):q=null;return new Be(g,Q,"final"===e,q)},b.b);c.headers=e;c.body=g.v;c.c=null;c.a=ve(a);c.g=!1;return c};var W=function(a,b,c,d,e,f){this.L=a;this.c=b;this.j=c;this.f=e;this.h=f||null;this.m=d;this.l=0;this.J=this.s=!1;this.F=[];this.Z=262144<this.f.a;this.b="running";this.a=this.u=this.g=null;this.i=1;var g=this;this.V=function(a){g.a=null;g.i=1;"storage/canceled"===a.code?(g.s=!0,Ge(g)):(g.g=a,V(g,"error"))};this.Y=function(a){g.a=null;"storage/canceled"===a.code?Ge(g):(g.g=a,V(g,"error"))};this.B=this.o=null;this.G=new G(function(a,b){g.o=a;g.B=b;He(g)});this.G.then(null,function(){})},He=function(a){"running"===
a.b&&null===a.a&&(a.Z?null===a.u?Ie(a):a.s?Je(a):a.J?Ke(a):Le(a):Me(a))},Ne=function(a,b){ge(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":V(a,"canceled");break;case "pausing":V(a,"paused")}})},Ie=function(a){Ne(a,function(b){var c=De(a.c,a.j,a.m,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.u=b;a.s=!1;Ge(a)},this.V)})},Je=function(a){var b=a.u;Ne(a,function(c){var d=Ee(a.c,a.j,b,a.f);a.a=R(a.c,d,c);a.a.a().then(function(b){a.a=null;Oe(a,b.a);a.s=!1;b.b&&
(a.J=!0);Ge(a)},a.V)})},Le=function(a){var b=262144*a.i,c=new Be(a.l,a.f.a),d=a.u;Ne(a,function(e){var f;try{f=Fe(a.j,a.c,d,a.f,b,a.m,c)}catch(g){a.g=g;V(a,"error");return}a.a=R(a.c,f,e);a.a.a().then(function(b){33554432>262144*a.i&&(a.i*=2);a.a=null;Oe(a,b.a);b.b?(a.h=b.c,V(a,"success")):Ge(a)},a.V)})},Ke=function(a){Ne(a,function(b){var c=xe(a.c,a.j,a.m);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;V(a,"success")},a.Y)})},Me=function(a){Ne(a,function(b){var c=Ae(a.c,a.j,a.m,a.f,a.h);a.a=
R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;Oe(a,a.f.a);V(a,"success")},a.V)})},Oe=function(a,b){var c=a.l;a.l=b;a.l>c&&Pe(a)},V=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.cancel();break;case "pausing":a.b=b;null!==a.a&&a.a.cancel();break;case "running":var c="paused"===a.b;a.b=b;c&&(Pe(a),He(a));break;case "paused":a.b=b;Pe(a);break;case "canceled":a.g=na();a.b=b;Pe(a);break;case "error":a.b=b;Pe(a);break;case "success":a.b=b,Pe(a)}},Ge=function(a){switch(a.b){case "pausing":V(a,
"paused");break;case "canceling":V(a,"canceled");break;case "running":He(a)}};W.prototype.C=function(){return new A(this.l,this.f.a,wa(this.b),this.h,this,this.L)};
W.prototype.O=function(a,b,c,d){function e(a){try{g(a);return}catch(P){}try{if(h(a),!(n(a.next)||n(a.error)||n(a.complete)))throw"";}catch(P){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function f(a){return function(b,c,d){null!==a&&T("on",a,arguments);var e=new Ta(b,c,d);Qe(m,e);return function(){wb(m.F,e)}}}var g=se().a,h=re(null,!0).a;T("on",[oe(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";}),re(e,!0),
se(),se()],arguments);var m=this,q=[re(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),se(),se()];return n(b)||n(c)||n(d)?f(null)(b,c,d):f(q)};W.prototype.then=function(a,b){return this.G.then(a,b)};
var Qe=function(a,b){a.F.push(b);Re(a,b)},Pe=function(a){Se(a);var b=xb(a.F);ob(b,function(b){Re(a,b)})},Se=function(a){if(null!==a.o){var b=!0;switch(wa(a.b)){case "success":Rc(a.o.bind(null,a.C()))();break;case "canceled":case "error":Rc(a.B.bind(null,a.g))();break;default:b=!1}b&&(a.o=null,a.B=null)}},Re=function(a,b){switch(wa(a.b)){case "running":case "paused":null!==b.next&&Rc(b.next.bind(b,a.C()))();break;case "success":null!==b.b&&Rc(b.b.bind(b))();break;case "canceled":case "error":null!==
b.a&&Rc(b.a.bind(b,a.g))();break;default:null!==b.a&&Rc(b.a.bind(b,a.g))()}};W.prototype.R=function(){T("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&V(this,"running");return a};W.prototype.P=function(){T("pause",[],arguments);var a="running"===this.b;a&&V(this,"pausing");return a};W.prototype.cancel=function(){T("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&V(this,"canceling");return a};var X=function(a,b){this.b=a;if(b)this.a=b instanceof Qa?b:Sa(b);else if(a=a.bucket(),null!==a)this.a=new Qa(a,"");else throw new w("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");};X.prototype.toString=function(){T("toString",[],arguments);return"gs://"+this.a.bucket+"/"+this.a.path};var Te=function(a,b){return new X(a,b)};k=X.prototype;
k.fa=function(a){T("child",[oe()],arguments);var b=Gb(this.a.path,a);return Te(this.b,new Qa(this.a.bucket,b))};k.Da=function(){var a;a=this.a.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Te(this.b,new Qa(this.a.bucket,a))};k.Fa=function(){return Te(this.b,new Qa(this.a.bucket,""))};k.ma=function(){return this.a.bucket};k.ya=function(){return this.a.path};k.Ca=function(){return Hb(this.a.path)};k.Ha=function(){return this.b.i};
k.ra=function(a,b){T("put",[pe(),new U(me,!0)],arguments);Ue(this,"put");return new W(this,this.b,this.a,je(),new O(a),b)};k.sa=function(a,b,c){T("putString",[oe(),oe(Va,!0),new U(me,!0)],arguments);Ue(this,"putString");var d=$a(y(b)?b:"raw",a),e=c?ta(c):{};!y(e.contentType)&&y(d.a)&&(e.contentType=d.a);return new W(this,this.b,this.a,je(),new O(d.data,!0),e)};
k.delete=function(){T("delete",[],arguments);Ue(this,"delete");var a=this;return ge(this.b).then(function(b){var c=ye(a.b,a.a);return R(a.b,c,b).a()})};k.ga=function(){T("getMetadata",[],arguments);Ue(this,"getMetadata");var a=this;return ge(this.b).then(function(b){var c=xe(a.b,a.a,je());return R(a.b,c,b).a()})};
k.ta=function(a){T("updateMetadata",[new U(me,void 0)],arguments);Ue(this,"updateMetadata");var b=this;return ge(this.b).then(function(c){var d=b.b,e=b.a,f=a,g=je(),h=Ra(e),h=la+"/v0"+h,f=le(f,g),d=new x(h,"PATCH",ue(d,g),d.c);d.headers={"Content-Type":"application/json; charset=utf-8"};d.body=f;d.a=we(e);return R(b.b,d,c).a()})};
k.qa=function(){T("getDownloadURL",[],arguments);Ue(this,"getDownloadURL");return this.ga().then(function(a){a=a.downloadURLs[0];if(y(a))return a;throw new w("no-download-url","The given file does not have any download URLs.");})};var Ue=function(a,b){if(""===a.a.path)throw new w("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a){this.a=new fe(a,function(a,c){return new X(a,c)},Yd,this);this.b=a;this.c=new Ve(this)};k=Y.prototype;k.ua=function(a){T("ref",[oe(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);var b=new X(this.a);return n(a)?b.fa(a):b};
k.va=function(a){T("refFromURL",[oe(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{Sa(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new X(this.a,a)};k.Aa=function(){return this.a.b};k.xa=function(a){T("setMaxUploadRetryTime",[qe()],arguments);this.a.b=a};k.za=function(){return this.a.c};k.wa=function(a){T("setMaxOperationRetryTime",[qe()],arguments);this.a.c=a};k.la=function(){return this.b};
k.ka=function(){return this.c};var Ve=function(a){this.a=a};Ve.prototype.delete=function(){var a=this.a.a;a.f=!0;a.a=null;ee(a.h)};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};X.prototype.toString=X.prototype.toString;X.prototype.child=X.prototype.fa;X.prototype.put=X.prototype.ra;X.prototype.putString=X.prototype.sa;X.prototype["delete"]=X.prototype.delete;X.prototype.getMetadata=X.prototype.ga;X.prototype.updateMetadata=X.prototype.ta;X.prototype.getDownloadURL=X.prototype.qa;Z(X.prototype,"parent",X.prototype.Da);Z(X.prototype,"root",X.prototype.Fa);Z(X.prototype,"bucket",X.prototype.ma);
Z(X.prototype,"fullPath",X.prototype.ya);Z(X.prototype,"name",X.prototype.Ca);Z(X.prototype,"storage",X.prototype.Ha);Y.prototype.ref=Y.prototype.ua;Y.prototype.refFromURL=Y.prototype.va;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.za);Y.prototype.setMaxOperationRetryTime=Y.prototype.wa;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.Aa);Y.prototype.setMaxUploadRetryTime=Y.prototype.xa;Z(Y.prototype,"app",Y.prototype.la);Z(Y.prototype,"INTERNAL",Y.prototype.ka);Ve.prototype["delete"]=Ve.prototype.delete;
Y.prototype.capi_=function(a){la=a};W.prototype.on=W.prototype.O;W.prototype.resume=W.prototype.R;W.prototype.pause=W.prototype.P;W.prototype.cancel=W.prototype.cancel;Z(W.prototype,"snapshot",W.prototype.C);Z(A.prototype,"bytesTransferred",A.prototype.na);Z(A.prototype,"totalBytes",A.prototype.Ja);Z(A.prototype,"state",A.prototype.Ga);Z(A.prototype,"metadata",A.prototype.Ba);Z(A.prototype,"downloadURL",A.prototype.pa);Z(A.prototype,"task",A.prototype.Ia);Z(A.prototype,"ref",A.prototype.Ea);
ua.STATE_CHANGED="state_changed";va.RUNNING="running";va.PAUSED="paused";va.SUCCESS="success";va.CANCELED="canceled";va.ERROR="error";Ua.RAW="raw";Ua.BASE64="base64";Ua.BASE64URL="base64url";Ua.DATA_URL="data_url";G.prototype["catch"]=G.prototype.l;G.prototype.then=G.prototype.then;
(function(){function a(a){return new Y(a)}var b={TaskState:va,TaskEvent:ua,StringFormat:Ua,Storage:Y,Reference:X};if("undefined"!==typeof firebase)firebase.INTERNAL.registerService("storage",a,b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();})();
module.exports = firebase.storage;

},{"./app":1}],7:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );

},{}],8:[function(require,module,exports){
var $ = require('jquery');

function applySpinner() {
    $('.preloader-wrapper').addClass('active');
    $('.overlay').removeClass('hide')
}

function removeSpinner() {
    $('.preloader-wrapper').removeClass('active')
    $('.overlay').addClass('hide')
}
function createElement(id, text, isDone) {

    var $li = $('<li/>', {
        class: 'collection-item dismissable list-items apply-overflow',
        'note-attribute': id
    });
    var $p = $('<p/>', {
        class: "check-delete hide left"
    });

    var $input = $('<input/>', {
        type: "checkbox",
        class: "filled-in item-delete",
        id: id + "y",
        'note-attribute': id,
    })
    var $label = $('<label/>', {
        for: id + "y"
    })
    var $p2 = $('<p/>', {
        class: "right check-marked"
    })
    var $input2 = $('<input/>', {
        type: "checkbox",
        class: "item-check",
        id: id + "x",
        'note-attribute': id,
        checked: isDone
    })
    var $label2 = $('<label/>', {
        for: id + "x"
    })
    var $button = $('<button/>', {
        class: "btn waves-effect waves-light right delete-button"
    })
    var $i = $('<i/>', {
        class: 'material-icons right delete-icon',
        text: "delete"
    })
    var $div = $('<div/>', {
        class: "right initial-buttons-div"
    })
    var $div2 = $('<div/>', {
        class: "right change-buttons-div "
    })
    var $button2 = $('<button/>', {
        class: 'btn waves-effect waves-light user-check-delete'
    })
    var $button3 = $('<button/>', {
        class: 'btn waves-effect waves-light user-uncheck-delete'
    })
    var $i1 = $('<i/>', {
        class: 'material-icons user-check-delete-icon',
        text: 'done'
    })
    var $i2 = $('<i/>', {
        class: 'material-icons user-check-delete-icon',
        text: 'clear'
    })
    $li.append($p)
    $li.append(text)
    $li.append($div)
    $li.append($div2)
    $div.append($button)
    $div2.append($button2)
    $div2.append($button3)
    $button.append($i)
    $button2.append($i1)
    $button3.append($i2)
    $li.append($p2)
    $div.append($p2)
    $p2.append($input2).append($label2)
    $p.append($input).append($label)
    return $li;
}

function applyFilter() {
    var $select = $('.select-filter').val()
        // Check if the selected filter is all
    if ($select == "all") {
        //remove class hide form all
        $('.list-items').removeClass('hide')
    }
    //Check if the selected filter is complete
    if ($select == "completed") {
        //add class hide to all
        $('.list-items')
            .addClass('hide')
            .has('.item-check:checked')
            .removeClass('hide')
    }
    //Check if the selected filter is incomplete
    if ($select == "pending") {
        //add class hide to all
        $('.list-items')
            .addClass('hide')
            .has($(".item-check:not(:checked)"))
            .removeClass('hide')
    }
}

function changeDiv(divToChange) {
    $(this)
        .parent()
        .siblings(divToChange)
        .removeClass('hide')
    $(this)
        .parent()
        .addClass('hide')
}
function applyErrorToInput($input, errorMessage) {
  $input
    .removeClass('valid')
    .addClass('invalid')
  $input
    .siblings('.validation-messages')
    .find('.custom-error')
    .text(errorMessage);
}
function applySuccesToInput($input) {
  $input
  .removeClass('invalid')
  .addClass('valid');
}
function activeUserNav(userName) {
  var $signInBtn = $('.signin-button')
  var $is = $("<i/>", {
  class: "material-icons left",
  text: "person_outline"})
  $signInBtn
    .text('Sign Out')
    .append($is)
  $registerBtn = $('.register-button')
  $ir = $("<i/>", {
  class: "material-icons left",
  text: "person"})
  $registerBtn
    .text(userName)
    .append($ir)
}
function deactivateUserNav() {
  var $signInBtn = $('.signin-button')
  var $is = $("<i/>", {
  class: "material-icons left",
  text: "person"})
  $signInBtn
    .text('Sign In')
    .append($is)
  var $registerBtn = $('.register-button')
  var $ir = $("<i/>", {
  class: "material-icons left",
  text: "person_outline"})
  $registerBtn
    .text("Register")
    .append($ir)
}
module.exports = {
    'applySpinner': applySpinner,
    'removeSpinner': removeSpinner,
    'createElement': createElement,
    'applyFilter': applyFilter,
    'applyErrorToInput': applyErrorToInput,
    'applySuccesToInput': applySuccesToInput,
    'activeUserNav' : activeUserNav,
    'deactivateUserNav' : deactivateUserNav
}

},{"jquery":7}],9:[function(require,module,exports){
var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBoqPLw-QjEtdSn156R-iHiv2MwktFZ0QM",
    // authDomain: "to-do-list-fed15.firebaseapp.com",
    databaseURL: "https://to-do-list-fed15.firebaseio.com",
    // storageBucket: "to-do-list-fed15.appspot.com",
    // messagingSenderId: "780475658827"
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref()

function registerUser(payLoad, registerCallback) {
    findUser(payLoad.username, function(userData) {
        var registerCheck
        if (userData) {
            registerCheck = false
        } else {
            dbRef.child('users').push(payLoad)
            registerCheck = true
        }
        registerCallback(registerCheck)
    })
}

function signInUser(payLoad, signInCallback) {
    // var notes = dbRef.child('users/' + userId + '/notes');
    findUser(payLoad.username, function(userData) {
        var signInCheck
        if (userData && (userData.password === payLoad.password)) {
            signInCheck = true
                // notes.off('value')
        } else {
            signInCheck = false
        }
        signInCallback(signInCheck, userData)
    })
}

function findUser(username, callback) {
    dbRef.child('users').once('value', function(snapshot) {
        var snapshotValue = snapshot.val()
        var userData = null;
        for (var key in snapshotValue) {
            if (snapshotValue[key].username === username) {
                userData = snapshotValue[key];
                userData.id = key
            }
        }
        callback(userData);
    })
}

function requestFirebaseData(userId, notesCallback) {
    var notes = dbRef.child('users/' + userId + '/notes');
    notes.on('value', function(snap) {
        notesCallback(snap.val())
    })
}

function addNote(dataInfo) {

    dbRef.child('users/' + dataInfo.id + '/notes/').push({
        note: dataInfo.note
    })
}

function deleteNote(dataInfo) {
    dbRef.child('users/' + dataInfo.id + '/notes/' + dataInfo.note + '/').remove()
}

function updateNote(dataInfo) {
    dbRef.child('users/' + dataInfo.id + '/notes/' + dataInfo.note + '/').update({
        checked: dataInfo.checked
    })
}

function detachEvent(userId) {
    var notes = dbRef.child('users/' + userId + '/notes');
    notes.off('value')
}

module.exports = {
    'requestFirebaseData': requestFirebaseData,
    'registerUser': registerUser,
    'signInUser': signInUser,
    'addNote': addNote,
    'deleteNote': deleteNote,
    'updateNote': updateNote,
    'detachEvent': detachEvent
}

},{"firebase":4}],10:[function(require,module,exports){
// var Materialize = require('node-materialize');
var $ = require('jquery');

var domManipulation = require('./DOM_manipulation.js')
var navBarController = require('./navBarController.js');
var firebaseInteraction = require('./firebaseInteraction.js')
var notesController = require('./notesController.js')
window.$ = $;
// Materialize.inject();
$(document).ready(function() {
  // Initialize the NavBar
  navBarController.init();

  $('#view').on('registerTriggred', function (event, payLoad) {
    firebaseInteraction.registerUser(payLoad, function (registerCheck) {
      if(registerCheck){
         // User signs in
         $('#signIn').trigger('signInTriggred', [payLoad])
      }
      else {
        domManipulation.applyErrorToInput($('[name="register_user_name"]'), "Username already taken")
      }
    })
})

  $('#view').on('signInTriggred', function (event, payLoad) {
    firebaseInteraction.signInUser(payLoad, function (signInCheck, userData) {
      if (signInCheck) {
        $('#nav').trigger('userSignedIn', [userData])
      }
      else {
        domManipulation.applyErrorToInput($('[name="signIn_username"]'), "Incorrect username or password")
        domManipulation.applyErrorToInput($('[name="signIn_password"]'), "Incorrect username or password")
      }
    })
  })
  $('#view').on('detachUser', function (event, userId) {
    firebaseInteraction.detachEvent(userId)
  })

  $('#view').on('updateUI', function (event, userData) {
    firebaseInteraction.requestFirebaseData(userData, function (notes) {
      $('#notes').trigger('usersNotes', [notes])
    })
  })
  $('#view').on('userAddedNote', function (event, dataInfo) {
    firebaseInteraction.addNote(dataInfo)
  })
  $('#view').on('userDeletedNote', function (event, dataInfo) {
    firebaseInteraction.deleteNote(dataInfo)
  })
  $('#view').on('Changed', function (event, dataInfo) {
    firebaseInteraction.updateNote(dataInfo)
  })
});

},{"./DOM_manipulation.js":8,"./firebaseInteraction.js":9,"./navBarController.js":11,"./notesController.js":12,"jquery":7}],11:[function(require,module,exports){
// Nav bar controller
var $ = require('jquery');
var domManipulation = require('./DOM_manipulation.js')
var notesController = require('./notesController.js');
var registerController = require('./registerController.js')
var signInController = require('./signInController.js')

var $nav;
var $view;
var data = {
    '#notes': {},
    '#register': {}
};

function init() {
    // Init all views
    notesController.init();
    registerController.init()
    signInController.init()
    $(".button-collapse").sideNav();

    // Mount all event handlers
    $nav = $('#nav');
    $view = $('#view');
    $nav
        .find('.to-do-list-button').on('click', function() {
            moveToView('#notes');
        })
    $nav
        .find('.signin-button').on('click.signIn', function() {
            moveToView('#signIn')
        })
    $nav
        .find('.register-button').on('click', function() {
            moveToView('#register');
        })

    $nav.on('userSignedIn', function(event, userData) {
        data['#notes'].signedUserId = userData.id;
        domManipulation.activeUserNav(userData.username)
        moveToView('#notes');
        $nav
          .find('.register-button').off('click')
        $nav
            .find('.signin-button').off('click.signIn')
        $nav
            .find('.signin-button').on('click.singOut', function() {
                data['#notes'].signedUserId = null;
                domManipulation.deactivateUserNav()
                $nav
                    .find('.signin-button').off('click.singOut')
                $nav
                    .find('.signin-button').on('click.signIn', function() {
                        moveToView('#signIn')
                    })
                $nav
                    .find('.register-button').on('click', function() {
                        moveToView('#register');
                    })
                moveToView()
            })
    })
}

function moveToView(pageId) {
    var currentActiveTabId = $('.active-view').attr('id');
    $view
        .find('> .active-view')
        .removeClass('active-view')
        .trigger('viewInactivated', [data['#' + currentActiveTabId]])

    $view
        .find(pageId)
        .addClass('active-view')
        .trigger('viewActivated', [data[pageId]])

}

module.exports = {
    'init': init,
    'moveToView': moveToView
}

},{"./DOM_manipulation.js":8,"./notesController.js":12,"./registerController.js":13,"./signInController.js":14,"jquery":7}],12:[function(require,module,exports){
var $ = require('jquery');
var domManipulation = require('./DOM_manipulation.js')
var firebaseInteraction = require('./firebaseInteraction.js')
    // var $notes;
var userId;

function init() {
    // $notes = $('#notes');
    listEvents()
    $('#notes').on('viewActivated', function(event, data) {
        userId = data.signedUserId;
        $('#notes').trigger('updateUI', userId);
    });

    $('#notes').on('viewInactivated', function(event, data) {
        $('.to-do-list').find('ul').remove()
        $('#notes').trigger('detachUser', userId)
        userId = data.signedUserId;

    })
}

function listEvents() {

    $('.add-input').on('click', function() {
        $('.hide-div').slideToggle('slow')
        if ($('.btn-change').text() == "add") {
            $('.btn-change').text("remove")
        } else {
            $('.btn-change').text("add");
        }
    })
    $('.delete-btn').on('click', function() {
        $('.remove-items').toggleClass('hide')
        $('.check-delete').toggleClass('hide')
        $('.rmv-container').toggleClass('hide')
    });
    $('.add-to-list-btn').on('click', function() {
        // domManipulation.applySpinner()
        var dataInfo = {
            note: $('textarea').val(),
            id: userId
        }
        $('.add-to-list-btn').trigger('userAddedNote', [dataInfo])
        $('.empty-textarea')
            .val('')
            .removeAttr('style')
            .siblings('.active')
            .removeClass('active')
        $('.add-to-list-btn').prop('disabled', true)
    })
    $('.empty-textarea').on('keyup', function() {
        if ($('.empty-textarea').val()) {
            $('.add-to-list-btn').prop('disabled', false)
        } else {
            $('.add-to-list-btn').prop('disabled', true)
        }
    })
    $('.remove-items').on('click', function() {
        $('.item-delete:checked').each(function(i, e) {
            // domManipulation.applySpinner()
            var dataInfo = {
                note: $(e).attr('note-attribute'),
                id: userId
            }
            $('.add-to-list-btn').trigger('userDeletedNote', dataInfo)
        })
        $('.remove-all-checkbox').prop('checked', false)
    });
    $('.select-filter').on('change', function() {
        domManipulation.applyFilter()
    })
    $('.remove-all-checkbox').on('change', function() {
        if ($('.remove-all-checkbox').prop('checked')) {
            $('.item-delete').prop('checked', true)
        } else {
            $('.item-delete').prop('checked', false)
        }
    })
}
$('#notes').on('usersNotes', function(event, notes) {
    //Empty list
    $('.to-do-list').empty()
        // Reset the remove button
    $('.remove-items').addClass('hide')
    $('.rmv-container').addClass('hide')

    if (notes) {

        var $ul = $('<ul/>', {
            class: "collection"
        })
        $('.to-do-list').append($ul)


        for (var key in notes) {
            var $li = domManipulation.createElement(key, notes[key].note, notes[key].checked);
            $ul.append($li)
        }
        // find all intem check and attach event handler on change
        $ul.find('.item-check').on('change', function(a, b) {
            var dataInfo = {
                    note: $(this).attr('note-attribute'),
                    checked: $(this).prop('checked'),
                    id: userId
                }
                // domManipulation.applySpinner()

            $ul.find('.item-check').trigger('Changed', dataInfo)

        })
        $('.delete-button').on('click', function() {
            var $self = $(this)
            $self
                .parent()
                .slideToggle(function() {
                    $self
                        .parent()
                        .siblings('.change-buttons-div')
                        .slideToggle()
                })

        })
        $('.user-uncheck-delete').on('click', function() {
            var $self = $(this)
            $self
                .parent()
                .slideToggle(function() {
                    $self
                        .parent()
                        .siblings('.initial-buttons-div')
                        .slideToggle()
                })

        })
        $('.user-check-delete').on('click', function() {
            var dataInfo = {
                note: $(this).parents('.collection-item').attr('note-attribute'),
                id: userId
            }
            $('.user-check-delete').trigger('userDeletedNote', dataInfo)
        })
    }
    domManipulation.applyFilter()

})


module.exports = {
    init: init,
}

},{"./DOM_manipulation.js":8,"./firebaseInteraction.js":9,"jquery":7}],13:[function(require,module,exports){
var $ = require('jquery');
var domManipulation = require('./DOM_manipulation.js');
var $register;

function init() {
  $register = $('#register');
  $register
    .find('[name=register_user_name]').on('blur', function () {
      valideUsername()
    })
  $register
    .find('[name="register_email"]').on('blur', function () {
        valideEmailAdress()
    })
  $register
    .find('[name="register_password"]').on('blur', function () {
        validePassword()
    })
  $register
    .find('[name="re-enter-password"]').on('blur', function () {
        reValidePassword()
    })
  $('#register-form').on('submit', function (event) {
    event.preventDefault()
     var payLoad
     var username = valideUsername();
     var emailAdress = valideEmailAdress();
     var password = validePassword();
     var rePassword = reValidePassword();
     if(username && emailAdress && password && rePassword){
       payLoad = {
         'username' : username,
         'emailAdress' : emailAdress,
         'password' : password,
         'rePassword' : rePassword
       }
       $register.trigger('registerTriggred', [payLoad])
     }

  })
  // $register.on('ACTIV', function() {
  //   // console.log('Register controller is ACTIVE!!!!');
  // });
}

  function valideUsername() {
    var $username = $('[name="register_user_name"]')
    var userNamePattern = $username.val().match(/^[A-Za-z0-9 ]{3,20}$/)
    if(!userNamePattern){
      if (!$username.val()) {
        domManipulation.applyErrorToInput($username, "Required field")
        return false
      }
        domManipulation.applyErrorToInput($username, "Invalid username")
        return false
    }
    else {
      domManipulation.applySuccesToInput($username)
      return $username.val()
    }
  }
  function valideEmailAdress() {
    var $emailAdress = $('[name="register_email"]')
    var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var emailPattern = regEx.test($emailAdress.val())
    if(!emailPattern){
      if ($emailAdress.val() == "") {
        domManipulation.applyErrorToInput($emailAdress, 'Required Field');
        return false
      }
        domManipulation.applyErrorToInput($emailAdress, 'Invalid email adress');
        return false
    }
    else {
        domManipulation.applySuccesToInput($emailAdress)
        return $emailAdress.val()
    }
  }
  function validePassword() {
    var $password = $('[name="register_password"]')
    var passwordPattern = $password.val().match(/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/)
    if (!passwordPattern) {
      if($password.val() == ""){
        domManipulation.applyErrorToInput($password, 'Password required');
        return false
      }
      domManipulation.applyErrorToInput($password, 'Incomplete password');
      return false
    }
    else {
      domManipulation.applySuccesToInput($password)
      return $password.val()
    }
  }
  function reValidePassword() {
    var $rePassword = $('[name="re-enter-password"]');
    var $password = $('[name="register_password"]')
    if ($rePassword.val() === $password.val()){
      domManipulation.applySuccesToInput($rePassword)
      return $rePassword.val()
    }
    else {
      domManipulation.applyErrorToInput($rePassword, 'Incorrect password');
      return false
    }
  }

module.exports = {
  init: init,
}

},{"./DOM_manipulation.js":8,"jquery":7}],14:[function(require,module,exports){
var $ = require('jquery');
var $signIn;

function init() {
  $signIn = $('#signIn');
  $('#singIn-form').on('submit', function (event) {
    event.preventDefault()
    var username = getInputValue($('[name="signIn_username"]'))
    var password = getInputValue($('[name="signIn_password"]'))
    if(username && password){
      payLoad = {
        'username' : username,
        'password' : password
      }
      $signIn.trigger('signInTriggred', [payLoad])
    }
  })
}

function getInputValue($input) {
  return $input.val()
}
module.exports = {
  init: init,
}

},{"jquery":7}]},{},[10]);
