(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},r={app:0},o=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"087359c9","chunk-5b258c75":"71e33b89"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1,"chunk-5b258c75":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"f293a575","chunk-5b258c75":"0f886a79"}[t]+".css",r=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===n||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],d.parentNode.removeChild(d),a(o)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){i[t]=0}));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",p.name="ChunkLoadError",p.type=n,p.request=i,a[1](p)}r[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0404":function(t,e,a){},1605:function(t,e,a){"use strict";var n=a("0404"),i=a.n(n);i.a},"1b9c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-entry"},[a("span",{staticClass:"control-text"},[t._v(t._s(t.text))]),a("select",{staticClass:"control-select",domProps:{value:t.value||t.def},on:{input:function(e){return t.updateValue(e.target.value)}}},["number"===typeof t.option?t._l(t.option,function(e){return a("option",{key:e-1,domProps:{value:e-1}},[t._v("图表"+t._s(e))])}):t._l(t.option,function(e,n){return a("option",{key:n,domProps:{value:e.value}},[t._v(t._s(e.text))])})],2)])},i=[],r=(a("c5f6"),{props:{value:null,option:[Array,Number],text:String,def:String},methods:{updateValue:function(t){"number"===typeof this.option&&(t=parseInt(t,10)),this.$emit("onChoice",t),this.$emit("input",t)}}}),o=r,s=(a("abd9"),a("2877")),c=Object(s["a"])(o,n,i,!1,null,"55710904",null);e["a"]=c.exports},"261e":function(t,e,a){"use strict";var n=a("f6e6"),i=a.n(n);i.a},"2ea3":function(t,e,a){},"4fc5":function(t,e,a){"use strict";var n=a("9478"),i=a.n(n);i.a},5119:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-entry"},[a("span",{staticClass:"auto-text"},[t._v(t._s(t.name))]),a("div",{staticClass:"input-box",class:{number:t.type===Number&&0!==t.step}},[t.type===Number?[0!==t.step?a("div",{staticClass:"icon reduce",on:{click:function(e){return t.changeValue(t.value-t.step)}}},[t._v("-")]):t._e(),a("input",{staticClass:"auto-input",attrs:{type:"number",placeholder:t.def},domProps:{value:t.value},on:{change:function(e){return t.updateValue(e)}}}),0!==t.step?a("div",{staticClass:"icon add",on:{click:function(e){return t.changeValue(t.value+t.step)}}},[t._v("+")]):t._e()]:a("input",{staticClass:"auto-input",attrs:{type:"text",placeholder:t.def},domProps:{value:t.value},on:{change:function(e){return t.updateValue(e)}}})],2)])},i=[],r=(a("c5f6"),{props:{value:{type:[String,Number]},type:{default:Number},max:Number,min:Number,name:{type:String,default:""},step:{type:Number,default:1},def:[Number,String]},methods:{updateValue:function(t){var e=t.target.value;if(!e)return t.target.value=this.value,void t.preventDefault();var a=null;if(this.type===Number||0===this.type){if(a=Number(e),isNaN(a))return;a=this.check(a)}else a=e;this.$emit("input",a),this.$emit("onClick",a)},changeValue:function(t){isNaN(t)&&void 0!==this.def&&(t=this.def);var e=null;if(this.type===Number){if(e=parseFloat(t),isNaN(e))return;e=this.check(e)}else e=t;this.$emit("input",e),this.$emit("onClick",e)},check:function(t){var e=t;return this.max<e&&(e=this.max),this.min>e&&(e=this.min),/^\d+$/.test(e)?e:Number(e.toFixed(1))}}}),o=r,s=(a("773c"),a("2877")),c=Object(s["a"])(o,n,i,!1,null,"78166ab1",null);e["a"]=c.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("router-view")],1)},r=[],o=(a("5c0b"),a("2877")),s={},c=Object(o["a"])(s,i,r,!1,null,null,null),u=c.exports,l=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t.loading?a("div",{staticClass:"loading-box"}):[a("div",{staticClass:"type-bar"},t._l(t.typeList,function(e){return a("div",{staticClass:"type-item",class:{active:t.$route.params.type===e.value},on:{click:function(a){return t.changeType(e.value)}}},[t._v(t._s(e.name))])}),0),a("div",{staticClass:"content-bar"},[a("div",{staticClass:"left"},[a("div",{staticClass:"card-box"},t._l(t.templateList,function(e,n){return a("TemplateCard",{key:e.id,attrs:{data:e},on:{changeConfig:function(a){return t.templateClick(e,n)}}},[a("iframe",{attrs:{src:"https://owo.ink/public/"+e.template+"/index.html"}})])}),1),a("div",{staticClass:"bottom-bar"},[a("PaginationBox",{attrs:{paginationNum:t.paginationNum,activePaginationNum:t.activePaginationNum},on:{changePageNum:t.changePageNum}}),a("div",{staticClass:"add-temple-button icon",attrs:{title:"添加新组件"},on:{click:function(e){return t.$router.push("/add/"+t.$route.params.type)}}},[t._v("")])],1)]),null!==t.activeID?a("Deformation",{staticClass:"control-bar",attrs:{id:"attribute",dragElement:"drag-bar",w:320,h:760,x:100,y:100}},[a("div",{staticClass:"title-bar drag-bar"},[a("div",{staticClass:"title"},[t._v("属性管理")]),a("div",{staticClass:"title-button-box"},[a("div",{staticClass:"close title-button-box-item",on:{click:function(e){t.activeID=null}}},[a("div",{staticClass:"icon"},[t._v("")]),a("span",[t._v("关闭")])])])]),t.templateControl.control?a("div",{staticClass:"input-box"},t._l(t.templateControl.control,function(e){return a("div",{staticClass:"control-item"},["string"===e.type?a("TextareaEntry",{attrs:{name:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"control.value"}}):"array"===e.type?a("JsonEntry",{attrs:{name:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"control.value"}}):"object"===e.type?a("JsonEntry",{attrs:{name:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"control.value"}}):"number"===e.type?a("AutoEntry",{attrs:{type:Number,name:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"control.value"}}):"color"===e.type?a("ColorEntry",{attrs:{name:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"control.value"}}):t._e()],1)}),0):t._e(),a("WaterRipple",{staticClass:"creat",attrs:{text:"生成预览"},on:{onClick:t.creatTemplate}})],1):t._e()],1)]],2)},d=[],f=a("46f2"),m=a("79fa"),v=a("5119"),h=a("1b9c"),b=a("ea69"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"json-entry"},[a("div",{staticClass:"title"},[t._v(t._s(t.name))]),a("Highlight",{attrs:{contenteditable:!0},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}})],1)},y=[],_=a("9393"),C={props:{value:[Array,Object],name:String},data:function(){return{inputText:""}},components:{Highlight:_["a"]},created:function(){this.inputText=this.value},methods:{updateValue:function(t){this.showText=t,this.$emit("input",String(t))},delate:function(t){var e=this.value;e.splice(t,1),this.$emit("input",e)},add:function(){if(!this.inputText)return alert("待添加值不能为空！"),null;var t=this.value;t.push(this.inputText),this.$emit("input",t)}}},x=C,N=(a("bf9e"),Object(o["a"])(x,g,y,!1,null,"54ad202b",null)),k=N.exports,$=a("efaa"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"template-card"},[a("div",{staticClass:"title-bar",class:{compatible:"兼容所有浏览器"===t.data.browser}},[a("div",{staticClass:"name"},[t._v(t._s(t.data.name))]),a("a",{staticClass:"url",attrs:{title:"预览模板",target:"_blank",href:t.getShowUrl()}},[t._v(t._s(t.getShowUrl()))]),a("div",{staticClass:"icon-bar"},[a("div",{staticClass:"icon set-default",attrs:{title:"设置为默认模板"},on:{click:function(e){return e.stopPropagation(),t.setDefault()}}},[t._v("")]),a("div",{staticClass:"icon copy",attrs:{title:"复制模板代码","data-clipboard-text":t.getCopyUrl()}},[t._v("")]),a("div",{staticClass:"icon config-icon",attrs:{title:"配置管理"},on:{click:function(e){return e.stopPropagation(),t.$emit("changeConfig")}}},[t._v("")]),a("div",{staticClass:"icon edit-icon",attrs:{title:"编辑模板"},on:{click:function(e){return t.edit(t.data.id)}}},[t._v("")])])]),a("div",{staticClass:"attribute-bar"},[a("span",{staticClass:"attribute-bar-item"},[t._v(t._s(t.data.browser))]),t._l(JSON.parse(t.data.scriptList),function(e){return a("span",{key:"script"+e,staticClass:"attribute-bar-item attribute-script"},[t._v(t._s(e))])}),t._l(JSON.parse(t.data.styleList),function(e){return a("span",{key:"style"+e,staticClass:"attribute-bar-item attribute-style"},[t._v(t._s(e))])})],2),t.data.height?a("div",{staticClass:"template-view",style:"height: "+t.data.height+"px;"},[t._t("default")],2):a("div",{staticClass:"template-view"},[t._t("default")],2)])},T=[],P=(a("7f7f"),a("bc3a")),S=a.n(P),E=a("b311"),O=a.n(E),j={props:{data:Object},created:function(){new O.a(".copy")},methods:{getUrl:function(){return"https://owo.ink/public/"+this.data.template+".page"},getShowUrl:function(){return"https://owo.ink/public/"+this.data.template},edit:function(t){this.$router.push("/edit/".concat(t))},getCopyUrl:function(){var t="string"===typeof this.data.control?JSON.parse(this.data.control):this.data.control,e="";if(t)for(var a=0;a<t.length;a++){var n=t[a];"template"!==n.model&&(e+="".concat(n.name,"=").concat(JSON.stringify(n.value)," "))}var i='<temple _name="'.concat(this.data.templateFile,'" ').concat(e,' _src="https://').concat(window.location.host,"/public/").concat(this.data.template,'.page"></temple>');return i},setDefault:function(){console.log("更新默认模板!"),S.a.get("https://owo.ink/setDefault?id=".concat(this.data.id,"&template=").concat(this.data.template)).then(function(t){0===t.data.err?alert("更新成功!"):alert("更新失败!")})}}},L=j,D=(a("4fc5"),Object(o["a"])(L,w,T,!1,null,"323656df",null)),V=D.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-box"},[a("span",{staticClass:"text"},[t._v("页码:")]),t._l(t.paginationNum,function(e){return a("div",{staticClass:"page",class:{active:t.activePaginationNum===e},on:{click:function(a){return t.$emit("changePageNum",e)}}},[t._v(t._s(e))])})],2)},J=[],I=(a("c5f6"),{props:{paginationNum:Number,activePaginationNum:Number}}),U=I,B=(a("5b0d"),Object(o["a"])(U,A,J,!1,null,"15e62260",null)),M=B.exports,F={name:"home",data:function(){return{loading:!0,src:"",activeID:null,templateControl:[],templateList:[],typeList:[],templateNumber:0,paginationNum:1,activePaginationNum:1}},created:function(){this.load(),this.$store.commit("changeActiveType","header")},components:{ColorEntry:b["a"],AutoEntry:v["a"],JsonEntry:k,SelectEntry:h["a"],WaterRipple:m["a"],TemplateCard:V,TextareaEntry:$["a"],Deformation:f["a"],PaginationBox:M},methods:{load:function(){var t=this,e=this.$route.params.type?this.$route.params.type:"header",a=this.$route.params.page?this.$route.params.page:1;S.a.get("https://owo.ink/getTemplateListByType?type=".concat(e,"&page=").concat(a,"&num=5")).then(function(e){var n=e.data.data;t.templateList=n.template,t.typeList=n.type,t.templateNumber=n.total,t.paginationNum=Math.ceil(n.total/5),t.loading=!1,t.activePaginationNum=parseInt(a)})},templateClick:function(t,e){"string"===typeof t.control&&(t.control=JSON.parse(t.control)),this.activeID=e,this.templateControl=t},creatTemplate:function(){var t=this;S.a.post("https://owo.ink/creatTemplate",{data:this.templateControl}).then(function(e){t.templateList[t.activeID].template=e.data.templateID})},changeType:function(t){this.loading=!0,this.activePaginationNum=1,this.$store.commit("changeActiveType",t),this.$router.push("/home/".concat(t,"/1"))},changePageNum:function(t){console.log("跳转到页码: ".concat(t)),this.activePaginationNum=t,this.loading=!0,this.$router.push("/home/".concat(this.$route.params.type,"/").concat(t))}},watch:{$route:function(){this.load()}}},H=F,q=(a("1605"),Object(o["a"])(H,p,d,!1,null,"615eb94a",null)),R=q.exports;n["a"].use(l["a"]);var W=new l["a"]({routes:[{path:"/",name:"start",redirect:"/home/header/1"},{path:"/home/:type/:page",name:"home",component:R},{path:"/edit/:id",name:"edit",component:function(){return a.e("chunk-5b258c75").then(a.bind(null,"1071"))}},{path:"/add/:type",name:"add",component:function(){return a.e("chunk-5b258c75").then(a.bind(null,"1071"))}},{path:"/create",name:"create",component:function(){return a.e("about").then(a.bind(null,"d879"))}}]}),K=a("2f62");n["a"].use(K["a"]);var z={type:null,activeType:null},G={},Q={changeActiveType:function(t,e){t.activeType=e},changeType:function(t,e){t.type=e}},X=new K["a"].Store({state:z,getters:G,mutations:Q}),Y=X;n["a"].config.productionTip=!1,new n["a"]({router:W,store:Y,render:function(t){return t(u)}}).$mount("#app")},"5b0d":function(t,e,a){"use strict";var n=a("9651"),i=a.n(n);i.a},"5c0b":function(t,e,a){"use strict";var n=a("e332"),i=a.n(n);i.a},7469:function(t,e,a){},"773c":function(t,e,a){"use strict";var n=a("dd5e"),i=a.n(n);i.a},"78a3":function(t,e,a){},9478:function(t,e,a){},9651:function(t,e,a){},abd9:function(t,e,a){"use strict";var n=a("7469"),i=a.n(n);i.a},bf9e:function(t,e,a){"use strict";var n=a("78a3"),i=a.n(n);i.a},c3c4:function(t,e,a){"use strict";var n=a("2ea3"),i=a.n(n);i.a},dd5e:function(t,e,a){},e332:function(t,e,a){},ea69:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"color-selection control-entry"},[a("span",{staticClass:"control-text"},[t._v(t._s(t.name))]),a("div",{staticClass:"input-box"},[a("div",{staticClass:"color-input"},[a("div",{staticClass:"input-color",style:{background:t.value||t.def}},[a("input",{attrs:{type:"color"},domProps:{value:t.value||t.def},on:{input:function(e){return t.updateValue(e.target.value)}}})])]),a("input",{staticClass:"text",attrs:{type:"text",placeholder:t.def},domProps:{value:t.value||""},on:{blur:function(e){return t.updateValue(e.target.value)}}})])])},i=[],r={props:{value:String,name:String,emit:String,def:{type:String,default:"#333333"}},data:function(){return{showText:null}},created:function(){var t=this.value;t&&(t.indexOf("url")>=0?this.showText="图片":this.showText=t)},methods:{updateValue:function(t){this.showText=t,this.$emit("input",String(t))}}},o=r,s=(a("261e"),a("2877")),c=Object(s["a"])(o,n,i,!1,null,"53d11ff4",null);e["a"]=c.exports},efaa:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textarea-entry"},[a("div",{staticClass:"lable"},[t._v(t._s(t.name))]),a("textarea",{domProps:{value:t.value},on:{blur:function(e){return t.updateValue(e.target.value)}}})])},i=[],r={props:["name","value"],methods:{updateValue:function(t){this.$emit("input",t)}}},o=r,s=(a("c3c4"),a("2877")),c=Object(s["a"])(o,n,i,!1,null,"7a11a64a",null);e["a"]=c.exports},f6e6:function(t,e,a){}});
//# sourceMappingURL=app.fec63b6c.js.map