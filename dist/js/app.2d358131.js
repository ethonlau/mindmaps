(function(e){function t(t){for(var o,a,l=t[0],u=t[1],c=t[2],d=0,f=[];d<l.length;d++)a=l[d],i[a]&&f.push(i[a][0]),i[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==i[u]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"217d":function(e,t,n){"use strict";var o=n("84c0"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theme-1",attrs:{id:"app"}},[n("loopComponent",{attrs:{data:e.model}}),e._m(0),n("div",{staticClass:"clear-btn",on:{click:e.clearModel}},[e._v("清空画布")])],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tip"},[n("span",[e._v("Tab")]),e._v("添加子节点\n    "),n("span",[e._v("Enter")]),e._v("添加同级节点\n    "),n("span",[e._v("Ctrl + Delete")]),e._v("删除当前节点\n  ")])}],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[e._l(e.data,function(t,o){return[n("li",{key:o,class:[{center:t.isCenter}]},[n("div",{staticClass:"node-wrap"},[n("editableDiv",{attrs:{subnode:t.child.length>0},on:{"delete-node":function(t){e.deleteItem(o)}},nativeOn:{keyup:[function(n){if(!("button"in n)&&e._k(n.keyCode,"tab",9,n.key,"Tab"))return null;e.addSubItem(n,t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.addItem(t)},function(t){return("button"in t||!e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"]))&&t.ctrlKey?void e.deleteItem(o):null}]},model:{value:t.content,callback:function(n){e.$set(t,"content",n)},expression:"item.content"}}),n("button",{staticClass:"delete-btn",on:{click:function(t){e.deleteItem(o)}}},[e._v("×")]),0==t.child.length?n("button",{staticClass:"create-subnode",on:{click:function(n){e.addSubItem(n,t)}}},[e._v("\n          +\n        ")]):e._e(),t.child.length>0?n("button",{staticClass:"show-or-hide",on:{click:function(n){e.showOrHide(t)}}},[t.show?[e._v("-")]:[e._v("+")]],2):e._e()],1),n("transition",{attrs:{name:"fade"}},[t.show&&t.child?n("loopComponent",{attrs:{data:t.child}}):e._e()],1)],1)]})],2)},l=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"node",class:[e.subnode?"have-subnode":"no-subnode"],attrs:{contenteditable:e.canEdit},domProps:{innerHTML:e._s(e.innerText)},on:{focus:function(t){e.isLocked=!0},blur:function(t){e.isLocked=!1},input:e.changeText}})},c=[],s={name:"editableDiv",props:{value:{type:String,default:""},canEdit:{type:Boolean,default:!0},subnode:{type:Boolean}},data:function(){return{innerText:this.value,isLocked:!1}},watch:{value:function(){this.isLocked||this.innerText||(this.innerText=this.value)}},methods:{changeText:function(){this.$emit("input",this.$el.innerHTML)}}},d=s,f=n("2877"),p=Object(f["a"])(d,u,c,!1,null,null,null);p.options.__file="editableDiv.vue";var h=p.exports,v={name:"loopComponent",props:["data"],components:{editableDiv:h},methods:{deleteItem:function(e){this.data.splice(e,1)},addSubItem:function(e,t){t.child.push({content:"",show:!0,child:[]});var n=e.currentTarget.parentElement.parentElement;this.$nextTick(function(){n.querySelector("li:last-child").querySelector(".node").focus()})},addItem:function(e){this.data.push({content:"",show:!0,child:[]});var t=e.currentTarget.parentElement.parentElement;this.$nextTick(function(){t.parentElement.lastElementChild.querySelector(".node").focus()})},showOrHide:function(e){e.show=!e.show}},mounted:function(){window.addEventListener("keydown",function(e){9!==e.keyCode&&13!==e.keyCode&&17!==e.keyCode||e.preventDefault()})}},m=v,b=(n("217d"),Object(f["a"])(m,a,l,!1,null,null,null));b.options.__file="loopComponent.vue";var _=b.exports,w={name:"app",components:{loopComponent:_},data:function(){return{model:[{content:"中心主题",show:!0,isCenter:!0,child:[]}]}},mounted:function(){this.adjustTransform();var e=document.querySelector("ul");e.addEventListener("keydown",this.adjustTransform),e.addEventListener("mousedown",this.adjustTransform)},methods:{clearModel:function(){this.model=[{content:"中心主题",show:!0,isCenter:!0,child:[]}]},adjustTransform:function(){var e=document.querySelector("ul");if(e.offsetWidth>window.innerWidth)var t=window.innerWidth/2+"px";else t="50%";if(e.offsetHeight>window.innerHeight)var n=window.innerHeight/2+"px";else n="50%";e.style.transform="translate(-"+t+", -"+n+")"}}},y=w,k=(n("5c0b"),Object(f["a"])(y,i,r,!1,null,null,null));k.options.__file="App.vue";var C=k.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),i=n.n(o);i.a},"5e27":function(e,t,n){},"84c0":function(e,t,n){}});
//# sourceMappingURL=app.2d358131.js.map