var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{o(n.next(e))}catch(e){i(e)}}function l(e){try{o(n["throw"](e))}catch(e){i(e)}}function o(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(s,l)}o((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(t){return o([e,t])}}function o(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n={allRenderFn:true,cmpDidLoad:true,cmpDidUnload:true,cmpDidUpdate:false,cmpDidRender:false,cmpWillLoad:false,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:false,disconnectedCallback:false,element:false,event:false,hasRenderFn:true,lifecycle:true,hostListener:false,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:false,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:false,propNumber:false,propString:true,propMutable:false,reflect:false,scoped:false,shadowDom:true,slot:false,slotRelocation:false,state:true,style:true,svg:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:false,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,hydrateClientSide:false,isDebug:false,isDev:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true};var a="stencil-components";var i=window;var s=document;var l={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var o=!!s.documentElement.attachShadow;var f=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var u=new WeakMap;var c=function(e){return u.get(e)};var $=e("d",function(e,t){return u.set(t.$lazyInstance$=e,t)});var v=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return u.set(e,t)}};var d=function(e,t){return t in e};var h=function(e){return console.error(e)};var m=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},h)};var p=new Map;var y=i.__stencil_cssshim;var g=0;var b=false;var w=[];var _=[];var S=[];var R=function(e){return function(t){e.push(t);if(!b){b=true;l.raf(C)}}};var x=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){h(e)}}e.length=0};var k=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){h(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var C=function(){g++;x(w);var e=(l.$flags$&6)===2?performance.now()+7*Math.ceil(g*(1/22)):Infinity;k(_,e);k(S,e);if(_.length>0){S.push.apply(S,_);_.length=0}if(b=w.length+_.length+S.length>0){l.raf(C)}else{g=0}};var L=R(_);var E={};var j=function(e){return e!=null};var N=function(e){return e.toLowerCase()};var A=function(e){return["object","function"].includes(typeof e)};function P(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var T=e("c",function(){if(!(i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)"))){return t.import("./p-f57d4852.system.js")}return Promise.resolve()});var U=e("a",function(){return __awaiter(r,void 0,void 0,function(){var e,r,n;return __generator(this,function(l){switch(l.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(s.querySelectorAll("script")).find(function(e){return e.src.includes("/"+a+".esm.js")||e.getAttribute("data-namespace")===a});n=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,i.location.href));O(n.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:l.sent();l.label=3;case 3:return[2,n.href]}})})});var O=function(e){var t=P(a);try{i[t]=new Function("w","return import(w);")}catch(n){var r=new Map;i[t]=function(n){var a=new URL(n,e).href;var l=r.get(a);if(!l){var o=s.createElement("script");o.type="module";o.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));l=new Promise(function(e){o.onload=function(){e(i[t].m);o.remove()}});r.set(a,l);s.head.appendChild(o)}return l}}};var M="hydrated";var z=new WeakMap;var D=function(e,t){var r=p.get(e);if(f){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}p.set(e,r)};var I=function(e,t,r,n){var a=W(t,r);var i=p.get(a);e=e.nodeType===11?e:s;if(i){if(typeof i==="string"){e=e.head||e;var l=z.get(e);var o=void 0;if(!l){z.set(e,l=new Set)}if(!l.has(a)){{if(y){o=y.createHostStyle(n,a,i);var f=o["s-sc"];if(f){a=f;l=null}}else{o=s.createElement("style");o.innerHTML=i}e.appendChild(o)}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i])}}return a};var B=function(e,t,r){var n=I(o&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t.$tagName$,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var W=function(e,t){return"sc-"+e};var H=e("e",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var l;var o=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!A(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?{$flags$:0,$text$:a}:a)}s=i}}};f(r);if(t){{l=t.key||undefined}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,o,F)}var c={$flags$:0,$tag$:e,$children$:o.length>0?o:null,$elm$:undefined,$attrs$:t};{c.$key$=l}return c});var V={};var F={forEach:function(e,t){return e.map(q).forEach(t)},map:function(e,t){return e.map(q).map(t).map(Q)}};var q=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var Q=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var G=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{var s=K(r);var o=K(e.className).filter(function(e){return!s.includes(e)});e.className=o.concat(K(n).filter(function(e){return!o.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!d(e,t)){if(d(e,N(t))){t=N(t.substring(2))}else{t=N(t[2])+t.substring(3)}if(r){l.rel(e,t,r,false)}if(n){l.ael(e,t,n,false)}}else{var u=d(e,t);var c=A(n);if((u||c&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!u||i&4||a)&&!c){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var K=function(e){return!e?[]:e.split(" ")};var J=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||E;var s=t.$attrs$||E;{for(n in i){if(s[n]==null&&i[n]!=null){G(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){G(a,n,i[n],s[n],r,t.$flags$)}};var X;var Y;var Z=false;var ee=function(e,t,r,n){var a=t.$children$[r];var i=0;var l;var o;if(j(a.$text$)){a.$elm$=s.createTextNode(a.$text$)}else{l=a.$elm$=s.createElement(a.$tag$);{J(null,a,Z)}if(j(X)&&l["s-si"]!==X){l.classList.add(l["s-si"]=X)}if(a.$children$){for(i=0;i<a.$children$.length;++i){o=ee(e,a,i,l);if(o){l.appendChild(o)}}}}return a.$elm$};var te=function(e,t,r,n,a,i){var s=e;var l;if(s.shadowRoot&&N(s.tagName)===Y){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){l=ee(null,r,a,e);if(l){n[a].$elm$=l;s.insertBefore(l,t)}}}};var re=function(e,t,r,n){for(;t<=r;++t){if(j(e[t])){n=e[t].$elm$;se(e[t],true);n.remove()}}};var ne=function(e,t,r,n){var a=0;var i=0;var s=0;var l=0;var o=t.length-1;var f=t[0];var u=t[o];var c=n.length-1;var $=n[0];var v=n[c];var d;var h;while(a<=o&&i<=c){if(f==null){f=t[++a]}else if(u==null){u=t[--o]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(ae(f,$)){ie(f,$);f=t[++a];$=n[++i]}else if(ae(u,v)){ie(u,v);u=t[--o];v=n[--c]}else if(ae(f,v)){ie(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--c]}else if(ae(u,$)){ie(u,$);e.insertBefore(u.$elm$,f.$elm$);u=t[--o];$=n[++i]}else{s=-1;{for(l=a;l<=o;++l){if(t[l]&&j(t[l].$key$)&&t[l].$key$===$.$key$){s=l;break}}}if(s>=0){h=t[s];if(h.$tag$!==$.$tag$){d=ee(t&&t[i],r,s,e)}else{ie(h,$);t[s]=undefined;d=h.$elm$}$=n[++i]}else{d=ee(t&&t[i],r,i,e);$=n[++i]}if(d){{f.$elm$.parentNode.insertBefore(d,f.$elm$)}}}}if(a>o){te(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){re(t,a,o)}};var ae=function(e,t){if(e.$tag$===t.$tag$){{return e.$key$===t.$key$}return true}return false};var ie=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(!j(t.$text$)){{{J(e,t,Z)}}if(j(n)&&j(a)){ne(r,n,t,a)}else if(j(a)){if(j(e.$text$)){r.textContent=""}te(r,null,t,a,0,a.length-1)}else if(j(n)){re(n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var se=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){se(e,t)})}};var le=function(e){return e&&e.$tag$===V};var oe=function(e,t,r,n){var a=t.$vnode$||{$flags$:0};Y=N(e.tagName);if(le(n)){n.$tag$=null}else{n=H(null,null,n)}n.$flags$|=4;t.$vnode$=n;n.$elm$=a.$elm$=e.shadowRoot||e;{X=e["s-sc"]}ie(a,n)};var fe=function(e,t){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:if(!(e&&e[t]))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,e[t]()];case 2:n.sent();return[3,4];case 3:r=n.sent();h(r);return[3,4];case 4:return[2]}})})};var ue=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(i){{t.$flags$|=16}r=t.$lazyInstance$;{L(function(){return ce(e,t,n,r,a)})}return[2]})})};var ce=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){B(e,r,t.$modeName$)}{{t.$flags$|=4;try{oe(e,t,r,n.render())}catch(e){h(e)}t.$flags$&=~4}}if(y){y.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}$e(e,t)};var $e=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&512)){t.$flags$|=512;{e.classList.add(M)}{fe(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){s.documentElement.classList.add(M);{setTimeout(function(){return l.$flags$|=2},999)}}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var ve=function(e){if((l.$flags$&1)===0){var t=c(e);if(y){y.removeHost(e)}var r=t.$lazyInstance$;{fe(r,"componentDidUnload")}}};var de=function(e,t){if(e!=null&&!A(e)){if(t&1){return String(e)}return e}return e};var he=function(e,t){return c(e).$instanceValues$.get(t)};var me=function(e,t,r,n){var a=c(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var l=a.$flags$;r=de(r,n.$members$[t][0]);if(r!==s&&(!(l&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if((l&(4|2|16))===2){ue(i,a,n,false)}}}};var pe=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return he(this,n)},set:function(e){me(this,n,e,t)},configurable:true,enumerable:true})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=i.get(e);this[n]=r===null&&typeof this[n]==="boolean"?false:r};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var ye=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,function(){var r,l,o;return __generator(this,function(f){switch(f.label){case 0:if(!((n.$flags$&256)===0))return[3,4];n.$flags$|=256;return[4,m(a,n,i)];case 1:s=f.sent();if(!s.isProxied){pe(s,a,2);s.isProxied=true}{n.$flags$|=8}try{new s(n)}catch(e){h(e)}{n.$flags$&=~8}ge(n.$lazyInstance$);if(!(!s.isStyleRegistered&&s.style))return[3,4];r=s.style;l=W(a.$tagName$,n.$modeName$);if(!(a.$flags$&8))return[3,3];return[4,t.import("./p-1563a874.system.js").then(function(e){return e.scopeCss(r,l,false)})];case 2:r=f.sent();f.label=3;case 3:D(l,r);s.isStyleRegistered=true;f.label=4;case 4:o=n.$ancestorComponent$;if(o&&!o["s-lr"]&&o["s-rc"]){o["s-rc"].push(function(){return ye(e,n,a)})}else{ue(e,n,a,true)}return[2]}})})};var ge=function(e){};var be=function(e,t){if((l.$flags$&1)===0){var r=c(e);if(!(r.$flags$&1)){r.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&!a["s-lr"]||n.hydrateClientSide&&a.nodeType===1&&a.hasAttribute("s-id")){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{ye(e,r,t)}}ge(r.$lazyInstance$)}};var we=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=s.head;var f=i.customElements;var u=a.querySelector("meta[charset]");var $=s.createElement("style");Object.assign(l,t);l.$resourcesUrl$=new URL(t.resourcesUrl||"/",i.location.href).href;if(t.syncQueue){l.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!o&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var s=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}v(t);if(a.$flags$&1){if(o){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){be(this,a)};t.prototype.disconnectedCallback=function(){ve(this)};t.prototype["s-init"]=function(){var e=c(this);if(e.$lazyInstance$){$e(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){{var e=c(this);ue(this,e,a,false)}};t.prototype.componentOnReady=function(){return c(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!f.get(i)){r.push(i);f.define(i,pe(s,a,1))}})});$.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";$.setAttribute("data-styles","");a.insertBefore($,u?u.nextSibling:a.firstChild)})}}});