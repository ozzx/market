(function(t){function e(e){for(var n,i,l=e[0],o=e[1],u=e[2],c=0,d=[];c<l.length;c++)i=l[c],r[i]&&d.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r={app:0},s=[];function l(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"de7e3c54"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"8da28fc4"}[t]+".css",r=o.p+n,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var u=s[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===r))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],c=u.getAttribute("data-href");if(c===n||c===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.request=n,delete i[t],p.parentNode.removeChild(p),a(s)},p.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(p)}).then(function(){i[t]=0}));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=l(t),u=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");s.type=n,s.request=i,a[1](s)}r[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01fe":function(t,e,a){"use strict";var n=a("4369"),i=a.n(n);i.a},"0c61":function(t,e,a){"use strict";var n=a("b43c"),i=a.n(n);i.a},4369:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("14c6"),a("08c1"),a("4842"),a("d9fc");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("router-view")],1)},r=[],s=(a("5c0b"),a("2877")),l={},o=Object(s["a"])(l,i,r,!1,null,null,null),u=o.exports,c=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"type-bar"},t._l(t.typeList,function(e){return a("div",{staticClass:"type-item",class:{active:t.activeType===e.value},on:{click:function(a){return t.changeType(e.value)}}},[t._v(t._s(e.name))])}),0),a("div",{staticClass:"content-bar"},[a("div",{staticClass:"left"},[a("div",{staticClass:"card-box"},t._l(t.templateList,function(e,n){return a("TemplateCard",{key:e.id,attrs:{data:e},on:{onClick:function(a){return t.templateClick(e,n)}}},[a("iframe",{attrs:{src:"/public/"+e.template+"/index.html"}})])}),1),a("div",{staticClass:"add-temple-button icon",on:{click:function(e){return t.$router.push("/edit/new")}}},[t._v("")])]),a("Deformation",{staticClass:"control-bar",class:{active:null!==t.activeID},attrs:{id:"attribute",shouIcon:t.flase,dragElement:"drag-bar",w:320,h:760}},[a("div",{staticClass:"title-bar drag-bar"},[a("div",{staticClass:"title"},[t._v("属性管理")]),a("div",{staticClass:"title-button-box"},[a("div",{staticClass:"close title-button-box-item",on:{click:function(e){t.activeID=null}}},[a("div",{staticClass:"icon"},[t._v("")]),a("span",[t._v("关闭")])])])]),"value"===t.controlModel?[a("div",{staticClass:"input-box"},t._l(t.templateControl.control,function(e){return a("div",{staticClass:"control-item"},["string"===e.type?a("TextareaEntry",{attrs:{name:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"control.value"}}):"array"===e.type?a("JsonEntry",{attrs:{name:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"control.value"}}):"object"===e.type?a("JsonEntry",{attrs:{name:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"control.value"}}):"number"===e.type?a("AutoEntry",{attrs:{name:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"control.value"}}):"color"===e.type?a("ColorEntry",{attrs:{name:e.label},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"control.value"}}):t._e()],1)}),0),a("WaterRipple",{staticClass:"creat",attrs:{text:"生成预览"},on:{onClick:t.creatTemplate}})]:[a("div",{staticClass:"tag-list"},t._l(t.templateControl.control,function(e,n){return e?a("div",{staticClass:"tag-item"},[a("div",{staticClass:"label"},[t._v(t._s(e.label))]),a("div",{staticClass:"edit icon",on:{click:function(a){return t.showEditTagBox(e,n)}}},[t._v("")]),a("div",{staticClass:"delete icon",on:{click:function(a){return t.deleteTag(e,n)}}},[t._v("")])]):t._e()}),0)]],2)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showAddTagBox||null!==t.editTagID,expression:"showAddTagBox || editTagID !== null"}],staticClass:"add-tag-box"},[a("div",{staticClass:"close icon",on:{click:function(e){t.showAddTagBox=!1,t.editTagID=null}}},[t._v("")]),a("div",{staticClass:"add-box"},[a("div",{staticClass:"title-bar"},[t._v(t._s(t.showAddTagBox?"添加标签":"修改标签"))]),a("AutoEntry",{attrs:{name:"标签字段",type:String},model:{value:t.addTag.name,callback:function(e){t.$set(t.addTag,"name",e)},expression:"addTag.name"}}),a("SelectEntry",{attrs:{text:"标签类型",option:t.typeSelectList,def:"string"},model:{value:t.addTag.type,callback:function(e){t.$set(t.addTag,"type",e)},expression:"addTag.type"}}),a("AutoEntry",{attrs:{name:"标签名称",type:String},model:{value:t.addTag.label,callback:function(e){t.$set(t.addTag,"label",e)},expression:"addTag.label"}}),a("TextareaEntry",{attrs:{name:"标签数值"},model:{value:t.addTag.value,callback:function(e){t.$set(t.addTag,"value",e)},expression:"addTag.value"}}),t.showAddTagBox?a("WaterRipple",{staticClass:"add-tag",attrs:{text:"确定添加"},on:{onClick:t.addNewTag}}):a("WaterRipple",{staticClass:"add-tag",attrs:{text:"确定修改"},on:{onClick:t.editTag}})],1)])])},p=[],v=a("7618"),f=a("f499"),m=a.n(f),h=a("46f2"),b=a("79fa"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-entry"},[a("span",{staticClass:"auto-text"},[t._v(t._s(t.name))]),a("div",{staticClass:"input-box",class:{number:t.type===Number&&0!==t.step}},[t.type===Number?[0!==t.step?a("div",{staticClass:"icon add",on:{click:function(e){return t.changeValue(t.value+t.step)}}},[t._v("")]):t._e(),a("input",{staticClass:"auto-input",attrs:{type:"number",placeholder:t.def},domProps:{value:t.value},on:{change:function(e){return t.updateValue(e)}}}),0!==t.step?a("div",{staticClass:"icon reduce",on:{click:function(e){return t.changeValue(t.value-t.step)}}},[t._v("")]):t._e()]:a("input",{staticClass:"auto-input",attrs:{type:"text",placeholder:t.def},domProps:{value:t.value},on:{change:function(e){return t.updateValue(e)}}})],2)])},y=[],C=a("59ad"),x=a.n(C),T=(a("c5f6"),{props:{value:{type:[String,Number]},type:{default:Number},max:Number,min:Number,name:{type:String,default:""},step:{type:Number,default:1},def:[Number,String]},methods:{updateValue:function(t){var e=t.target.value;if(!e)return t.target.value=this.value,void t.preventDefault();var a=null;if(this.type===Number||0===this.type){if(a=Number(e),isNaN(a))return;a=this.check(a)}else a=e;this.$emit("input",a),this.$emit("onClick",a)},changeValue:function(t){isNaN(t)&&void 0!==this.def&&(t=this.def);var e=null;if(this.type===Number){if(e=x()(t),isNaN(e))return;e=this.check(e)}else e=t;this.$emit("input",e),this.$emit("onClick",e)},check:function(t){var e=t;return this.max<e&&(e=this.max),this.min>e&&(e=this.min),/^\d+$/.test(e)?e:Number(e.toFixed(1))}}}),_=T,w=(a("cdb3"),Object(s["a"])(_,g,y,!1,null,"50e0da3c",null)),k=w.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-entry"},[a("span",{staticClass:"control-text"},[t._v(t._s(t.text))]),a("select",{staticClass:"control-select",domProps:{value:t.value||t.def},on:{input:function(e){return t.updateValue(e.target.value)}}},["number"===typeof t.option?t._l(t.option,function(e){return a("option",{key:e-1,domProps:{value:e-1}},[t._v("图表"+t._s(e))])}):t._l(t.option,function(e,n){return a("option",{key:n,domProps:{value:e.value}},[t._v(t._s(e.text))])})],2)])},S=[],$=a("e814"),E=a.n($),O={props:{value:null,option:[Array,Number],text:String,def:String},methods:{updateValue:function(t){"number"===typeof this.option&&(t=E()(t,10)),this.$emit("onChoice",t),this.$emit("input",t)}}},j=O,D=(a("0c61"),Object(s["a"])(j,N,S,!1,null,"68ead76c",null)),A=D.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"color-selection control-entry"},[a("span",{staticClass:"control-text"},[t._v(t._s(t.name))]),a("div",{staticClass:"input-box"},[a("div",{staticClass:"color-input"},[a("div",{staticClass:"input-color",style:{background:t.value||t.def}},[a("input",{attrs:{type:"color"},domProps:{value:t.value||t.def},on:{input:function(e){return t.updateValue(e.target.value)}}})])]),a("input",{staticClass:"text",attrs:{type:"text",placeholder:t.def},domProps:{value:t.value||""},on:{blur:function(e){return t.updateValue(e.target.value)}}})])])},L=[],P={props:{value:String,name:String,emit:String,def:{type:String,default:"#333333"}},data:function(){return{showText:null}},created:function(){var t=this.value;t&&(t.indexOf("url")>=0?this.showText="图片":this.showText=t)},methods:{updateValue:function(t){this.showText=t,this.$emit("input",String(t))}}},B=P,J=(a("874f"),Object(s["a"])(B,I,L,!1,null,"602f4faf",null)),V=J.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"json-entry"},[a("div",{staticClass:"title"},[t._v(t._s(t.name))]),a("Highlight",{attrs:{contenteditable:!0},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}})],1)},R=[],W=a("9393"),q={props:{value:Array,name:String},data:function(){return{inputText:""}},components:{Highlight:W["a"]},created:function(){this.inputText=this.value},methods:{updateValue:function(t){this.showText=t,this.$emit("input",String(t))},delate:function(t){var e=this.value;e.splice(t,1),this.$emit("input",e)},add:function(){if(!this.inputText)return alert("待添加值不能为空！"),null;var t=this.value;t.push(this.inputText),this.$emit("input",t)}}},H=q,U=(a("a0b8"),Object(s["a"])(H,M,R,!1,null,"527fb941",null)),F=U.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textarea-entry"},[a("div",{staticClass:"lable"},[t._v(t._s(t.name))]),a("textarea",{domProps:{value:t.value},on:{blur:function(e){return t.updateValue(e.target.value)}}})])},G=[],K={props:["name","value"],methods:{updateValue:function(t){this.$emit("input",t)}}},Q=K,X=(a("01fe"),Object(s["a"])(Q,z,G,!1,null,"20f98087",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"template-card"},[a("div",{staticClass:"title-bar"},[a("div",{staticClass:"name"},[t._v(t._s(t.data.name))]),a("div",{staticClass:"url"},[t._v(t._s(t.getUrl(t.data)))]),a("div",{staticClass:"icon config-icon",on:{click:function(e){return e.stopPropagation(),t.$emit("onClick")}}},[t._v("")]),a("div",{staticClass:"icon edit-icon",on:{click:function(e){return t.edit(t.data.id)}}},[t._v("")])]),a("div",{staticClass:"attribute-bar"},[a("span",{staticClass:"attribute-bar-item"},[t._v(t._s(t.data.browser))]),t._l(JSON.parse(t.data.scriptList),function(e){return a("span",{key:"script"+e,staticClass:"attribute-bar-item attribute-script"},[t._v(t._s(e))])}),t._l(JSON.parse(t.data.styleList),function(e){return a("span",{key:"style"+e,staticClass:"attribute-bar-item attribute-style"},[t._v(t._s(e))])})],2),a("div",{staticClass:"template-view"},[t._t("default")],2)])},tt=[],et={props:{data:Object},methods:{getUrl:function(t){return"https://"+window.location.host+"/public/"+t.template+".page"},edit:function(t){this.$router.push("/edit/".concat(t))}}},at=et,nt=(a("ed3c"),Object(s["a"])(at,Z,tt,!1,null,"73383c30",null)),it=nt.exports,rt=a("bc3a"),st=a.n(rt),lt={name:"home",data:function(){return{src:"",activeID:null,activeTemplate:null,templateControl:[],templateList:[],typeList:[],controlModel:"value",showAddTagBox:!1,editTagID:null,activeType:null,typeSelectList:[{value:"string",text:"字符串"},{value:"array",text:"数组"},{value:"color",text:"颜色"},{value:"object",text:"对象"},{value:"numnber",text:"数字"}],addTag:{name:"",type:"",label:"",value:""}}},created:function(){var t=this;st.a.get("/typeList").then(function(e){var a=e.data.data;t.templateList=a.template,t.typeList=a.type,t.activeType=a.type[0].value})},components:{ColorEntry:V,AutoEntry:k,JsonEntry:F,SelectEntry:A,WaterRipple:b["a"],TemplateCard:it,TextareaEntry:Y,Deformation:h["a"]},methods:{templateClick:function(t,e){"string"===typeof t.control&&(t.control=JSON.parse(t.control)),this.activeID=e,this.activeTemplate=t,this.templateControl=t},creatTemplate:function(){var t=this;st.a.post("/creatTemplate",{data:this.templateControl}).then(function(e){t.templateList[t.activeID].template=e.data.templateID})},changeType:function(t){var e=this;this.activeType=t,st.a.get("/getTemplateListByType?type=".concat(t)).then(function(t){e.templateList=t.data.data})},addNewTag:function(){var t=this,e=JSON.parse(m()(this.templateControl["control"])),a=JSON.parse(m()(this.addTag));console.log(a),"array"!==a.type&&"object"!==a.type||(a.value=JSON.parse(a.value)),e.push(a),st.a.post("/changeControl",{id:this.templateList[this.activeID].id,data:e}).then(function(a){0===a.data.err&&(t.addTag={name:"",type:"",label:"",value:""},t.templateControl["control"]=e,alert("添加成功!"),t.showAddTagBox=!1)})},deleteTag:function(t,e){var a=this,n=window.confirm('确认删除 "'.concat(t.label,'" 这个标签吗!'));if(n){var i=JSON.parse(m()(this.templateControl));i.control.splice(e,1),st.a.post("/changeControl",{id:this.templateList[this.activeID].id,data:i.control}).then(function(t){0===t.data.err&&(a.templateControl=i)})}},showEditTagBox:function(t,e){var a=Object(v["a"])(t.value);"object"!==a&&"array"!==a||(t.value=m()(t.value)),this.addTag=t,this.editTagID=e},editTag:function(){var t=this,e=JSON.parse(m()(this.templateControl));console.log(e),e.control[this.editTagID]=this.addTag,"array"!==this.addTag.type&&"object"!==this.addTag.type||(e.control[this.editTagID].value=JSON.parse(e.control[this.editTagID].value)),this.templateControl=e,st.a.post("/changeControl",{id:this.templateList[this.activeID].id,data:e.control}).then(function(e){0===e.data.err&&(t.editTagID=null,alert("修改成功!"))})},showAddNewBox:function(){this.addTag={name:"",type:"",label:"",value:""},this.showAddTagBox=!this.showAddTagBox}}},ot=lt,ut=(a("839a"),Object(s["a"])(ot,d,p,!1,null,"0be45e98",null)),ct=ut.exports;n["a"].use(c["a"]);var dt=new c["a"]({routes:[{path:"/",name:"home",component:ct},{path:"/edit/:id",name:"edit",component:function(){return a.e("about").then(a.bind(null,"1071"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:dt,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),i=a.n(n);i.a},"5e27":function(t,e,a){},"679e":function(t,e,a){},"7a56":function(t,e,a){},"839a":function(t,e,a){"use strict";var n=a("a660"),i=a.n(n);i.a},"874f":function(t,e,a){"use strict";var n=a("d97e"),i=a.n(n);i.a},a0b8:function(t,e,a){"use strict";var n=a("e4a0"),i=a.n(n);i.a},a660:function(t,e,a){},b43c:function(t,e,a){},cdb3:function(t,e,a){"use strict";var n=a("7a56"),i=a.n(n);i.a},d97e:function(t,e,a){},e4a0:function(t,e,a){},ed3c:function(t,e,a){"use strict";var n=a("679e"),i=a.n(n);i.a}});
//# sourceMappingURL=app.7aaececd.js.map