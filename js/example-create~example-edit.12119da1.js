(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["example-create~example-edit"],{1172:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"createPost-container"},[a("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[a("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.status}},[a("comment-dropdown",{model:{value:t.postForm.disableComment,callback:function(e){t.$set(t.postForm,"disableComment",e)},expression:"postForm.disableComment"}}),a("platform-dropdown",{model:{value:t.postForm.platforms,callback:function(e){t.$set(t.postForm,"platforms",e)},expression:"postForm.platforms"}}),a("source-url-dropdown",{model:{value:t.postForm.sourceURL,callback:function(e){t.$set(t.postForm,"sourceURL",e)},expression:"postForm.sourceURL"}}),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("\n        Publush\n      ")]),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:t.draftForm}},[t._v("\n        Draft\n      ")])],1),a("div",{staticClass:"createPost-main-container"},[a("el-row",[a("warning"),a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[a("material-input",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[t._v("\n              Title\n            ")])],1),a("div",{staticClass:"postInfo-container"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:"Author:"}},[a("el-select",{attrs:{"remote-method":t.getRemoteUserList,filterable:"","default-first-option":"",remote:"",placeholder:"Search user"},model:{value:t.postForm.author,callback:function(e){t.$set(t.postForm,"author",e)},expression:"postForm.author"}},t._l(t.userListOptions,function(t,e){return a("el-option",{key:t+e,attrs:{label:t,value:t}})}),1)],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"120px",label:"Publush Time:"}},[a("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"Select date and time"},model:{value:t.timestamp,callback:function(e){t.timestamp=e},expression:"timestamp"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"90px",label:"Importance:"}},[a("el-rate",{staticStyle:{display:"inline-block"},attrs:{max:3,colors:["#99A9BF","#F7BA2A","#FF9900"],"low-threshold":1,"high-threshold":3},model:{value:t.postForm.importance,callback:function(e){t.$set(t.postForm,"importance",e)},expression:"postForm.importance"}})],1)],1)],1)],1)],1)],1),a("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"70px",label:"Summary:"}},[a("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"Please enter the content"},model:{value:t.postForm.abstractContent,callback:function(e){t.$set(t.postForm,"abstractContent",e)},expression:"postForm.abstractContent"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.abstractContentLength,expression:"abstractContentLength"}],staticClass:"word-counter"},[t._v(t._s(t.abstractContentLength)+"words")])],1),a("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[a("tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.fullContent,callback:function(e){t.$set(t.postForm,"fullContent",e)},expression:"postForm.fullContent"}})],1),a("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"imageURL"}},[a("upload-image",{model:{value:t.postForm.imageURL,callback:function(e){t.$set(t.postForm,"imageURL",e)},expression:"postForm.imageURL"}})],1)],1)],1)],1)},n=[],s=(a("7f7f"),a("96cf"),a("3b8d")),o=a("d225"),r=a("b0b4"),l=a("308d"),c=a("6bb5"),u=a("4e2b"),m=a("9ab4"),p=a("60a3"),d=a("75fb"),h=a("fadb"),f=a("480f"),b=a("ac1a"),v=a("e741"),g=a("da80"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{height:t.height,zIndex:t.zIndex}},[a("div",{class:t.className,style:{top:t.isSticky?t.stickyTop+"px":"",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height}},[t._t("default",[a("div",[t._v("sticky")])])],2)])},y=[],k=(a("6b54"),function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.active=!1,t.position="",t.isSticky=!1,t.width="auto",t.height="auto",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"mounted",value:function(){this.height=this.$el.getBoundingClientRect().height.toString()+"px",window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)}},{key:"activated",value:function(){this.handleScroll()}},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)}},{key:"sticky",value:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)}},{key:"handleReset",value:function(){this.active&&(this.position="",this.width="auto",this.active=!1,this.isSticky=!1)}},{key:"handleScroll",value:function(){var t=this.$el.getBoundingClientRect().width;this.width=t.toString()+"px"||!1;var e=this.$el.getBoundingClientRect().top;e<this.stickyTop?this.sticky():this.handleReset()}},{key:"handleResize",value:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width.toString()+"px")}}]),e}(p["c"]));m["a"]([Object(p["b"])({default:0})],k.prototype,"stickyTop",void 0),m["a"]([Object(p["b"])({default:1})],k.prototype,"zIndex",void 0),m["a"]([Object(p["b"])({default:""})],k.prototype,"className",void 0),k=m["a"]([p["a"]],k);var O=k,x=O,j=a("0c7c"),C=Object(j["a"])(x,w,y,!1,null,null,null),F=C.exports,_=a("8256"),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-container"},[a("el-upload",{staticClass:"image-uploader",attrs:{data:t.dataObj,multiple:!1,"show-file-list":!1,"on-success":t.handleImageSuccess,drag:"",action:"https://httpbin.org/post"}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v("\n      将文件拖到此处，或"),a("em",[t._v("点击上传")])])]),a("div",{staticClass:"image-preview image-app-preview"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.imageUrl.length>1,expression:"imageUrl.length>1"}],staticClass:"image-preview-wrapper"},[a("img",{attrs:{src:t.imageUrl}}),a("div",{staticClass:"image-preview-action"},[a("i",{staticClass:"el-icon-delete",on:{click:t.rmImage}})])])]),a("div",{staticClass:"image-preview"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.imageUrl.length>1,expression:"imageUrl.length>1"}],staticClass:"image-preview-wrapper"},[a("img",{attrs:{src:t.imageUrl}}),a("div",{staticClass:"image-preview-action"},[a("i",{staticClass:"el-icon-delete",on:{click:t.rmImage}})])])])],1)},U=[],$=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.tempUrl="",t.dataObj={token:"",key:""},t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"emitInput",value:function(t){this.$emit("input",t)}},{key:"rmImage",value:function(){this.emitInput("")}},{key:"handleImageSuccess",value:function(t){this.emitInput(t.files.file)}},{key:"imageUrl",get:function(){return this.value}}]),e}(p["c"]);m["a"]([Object(p["b"])({default:""})],$.prototype,"value",void 0),$=m["a"]([p["a"]],$);var L=$,S=L,I=(a("becf"),Object(j["a"])(S,R,U,!1,null,"f6dffa1a",null)),T=I.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[t._v("\n  "+t._s(t.$t("example.warning"))+"\n  "),a("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html",target:"_blank"}},[t._v("Document")])])},z=[],P=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(p["c"]);P=m["a"]([p["a"]],P);var q=P,A=q,D=Object(j["a"])(A,E,z,!1,null,null,null),B=D.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[a("el-button",{attrs:{plain:""}},[t._v("\n    "+t._s(t.disableComment?"Comment: closed":"Comment: opened")+"\n    "),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),a("el-dropdown-menu",{staticClass:"no-padding",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-radio-group",{staticStyle:{padding:"10px"},model:{value:t.disableComment,callback:function(e){t.disableComment=e},expression:"disableComment"}},[a("el-radio",{attrs:{label:!0}},[t._v("\n          Close comment\n        ")]),a("el-radio",{attrs:{label:!1}},[t._v("\n          Open comment\n        ")])],1)],1)],1)],1)},M=[],V=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"disableComment",get:function(){return this.value},set:function(t){this.$emit("input",t)}}]),e}(p["c"]);m["a"]([Object(p["b"])({default:!1})],V.prototype,"value",void 0),V=m["a"]([p["a"]],V);var H=V,J=H,W=(a("8fe7"),Object(j["a"])(J,N,M,!1,null,"07fb4321",null)),G=W.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dropdown",{attrs:{"hide-on-click":!1,"show-timeout":100,trigger:"click"}},[a("el-button",{attrs:{plain:""}},[t._v("\n    Platfroms("+t._s(t.platforms.length)+")\n    "),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-checkbox-group",{staticStyle:{padding:"5px 15px"},model:{value:t.platforms,callback:function(e){t.platforms=e},expression:"platforms"}},t._l(t.platformsOptions,function(e){return a("el-checkbox",{key:e.key,attrs:{label:e.key}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),1)],1)],1)},Q=[],X=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.platformsOptions=[{key:"a-platform",name:"a-platform"},{key:"b-platform",name:"b-platform"},{key:"c-platform",name:"c-platform"}],t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"platforms",get:function(){return this.value},set:function(t){this.$emit("input",t)}}]),e}(p["c"]);m["a"]([Object(p["b"])({default:function(){return[]}})],X.prototype,"value",void 0),X=m["a"]([p["a"]],X);var Y=X,Z=Y,tt=Object(j["a"])(Z,K,Q,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dropdown",{attrs:{"show-timeout":100,trigger:"click"}},[a("el-button",{attrs:{plain:""}},[t._v("\n    Link\n    "),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),a("el-dropdown-menu",{staticClass:"no-padding",staticStyle:{width:"400px"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{"label-width":"0px",prop:"sourceURL"}},[a("el-input",{attrs:{placeholder:"Please enter the content"},model:{value:t.sourceURL,callback:function(e){t.sourceURL=e},expression:"sourceURL"}},[a("template",{slot:"prepend"},[t._v("\n          URL\n        ")])],2)],1)],1)],1)},it=[],nt=function(t){function e(){return Object(o["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"sourceURL",get:function(){return this.value},set:function(t){this.$emit("input",t)}}]),e}(p["c"]);m["a"]([Object(p["b"])({default:""})],nt.prototype,"value",void 0),nt=m["a"]([p["a"]],nt);var st=nt,ot=st,rt=(a("cfa4"),Object(j["a"])(ot,at,it,!1,null,"6de9dfd8",null)),lt=rt.exports,ct=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.validateRequire=function(e,a,i){""===a?("imageURL"===e.field?t.$message({message:"Upload cover image is required",type:"error"}):t.$message({message:e.field+" is required",type:"error"}),i(new Error(e.field+" is required"))):i()},t.validateSourceUrl=function(e,a,i){a?Object(d["c"])(a)?i():(t.$message({message:"Invalid URL",type:"error"}),i(new Error("Invalid URL"))):i()},t.postForm=h["b"],t.loading=!1,t.userListOptions=[],t.rules={imageURL:[{validator:t.validateRequire}],title:[{validator:t.validateRequire}],fullContent:[{validator:t.validateRequire}],sourceURL:[{validator:t.validateSourceUrl,trigger:"blur"}]},t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"created",value:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=h["b"];this.tempTagView=Object.assign({},this.$route)}},{key:"fetchData",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var a,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h["c"])(e);case 3:a=t.sent,i=a.data,this.postForm=i,this.postForm.title+="   Article Id:".concat(this.postForm.id),this.postForm.abstractContent+="   Article Id:".concat(this.postForm.id),n="zh"===this.lang?"编辑文章":"Edit Article",this.setTagsViewTitle(n),this.setPageTitle(n),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.error(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));function e(e){return t.apply(this,arguments)}return e}()},{key:"setTagsViewTitle",value:function(t){var e=this.tempTagView;e&&(e.title="".concat(t,"-").concat(this.postForm.id),v["a"].updateVisitedView(e))}},{key:"setPageTitle",value:function(t){document.title="".concat(t," - ").concat(this.postForm.id)}},{key:"submitForm",value:function(){var t=this;this.$refs.postForm.validate(function(e){if(!e)return console.error("Submit Error!"),!1;t.loading=!0,t.$notify({title:"Success",message:"The post published successfully",type:"success",duration:2e3}),t.postForm.status="published",t.loading=!1})}},{key:"draftForm",value:function(){0!==this.postForm.fullContent.length&&0!==this.postForm.title.length?(this.$message({message:"The draft saved successfully",type:"success",showClose:!0,duration:1e3}),this.postForm.status="draft"):this.$message({message:"Title and detail content are required",type:"warning"})}},{key:"getRemoteUserList",value:function(t){var e=this;Object(f["a"])(t).then(function(t){t.data.items&&(e.userListOptions=t.data.items.map(function(t){return t.name}))})}},{key:"abstractContentLength",get:function(){return this.postForm.abstractContent.length}},{key:"lang",get:function(){return b["a"].language}},{key:"timestamp",get:function(){return+new Date(this.postForm.timestamp)},set:function(t){this.postForm.timestamp=+new Date(t)}}]),e}(p["c"]);m["a"]([Object(p["b"])({default:!1})],ct.prototype,"isEdit",void 0),ct=m["a"]([Object(p["a"])({components:{CommentDropdown:G,PlatformDropdown:et,SourceUrlDropdown:lt,MaterialInput:g["a"],Sticky:F,Tinymce:_["a"],UploadImage:T,Warning:B}})],ct);var ut=ct,mt=ut,pt=(a("7162"),a("e212"),Object(j["a"])(mt,i,n,!1,null,"8d36138a",null));e["a"]=pt.exports},"413a":function(t,e,a){},"480f":function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s});var i=a("b32d"),n=function(t){return Object(i["a"])({url:"/search/user",method:"get",params:{name:t}})},s=function(t){return Object(i["a"])({url:"/transaction/list",method:"get",params:t})}},"48d7":function(t,e,a){},"595b":function(t,e,a){},7162:function(t,e,a){"use strict";var i=a("a6dc"),n=a.n(i);n.a},"7f80":function(t,e,a){},"8fe7":function(t,e,a){"use strict";var i=a("413a"),n=a.n(i);n.a},a6dc:function(t,e,a){t.exports={subMenuBg:"#1f2d3d",subMenuHover:"#001528",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409EFF"}},becf:function(t,e,a){"use strict";var i=a("595b"),n=a.n(i);n.a},cfa4:function(t,e,a){"use strict";var i=a("48d7"),n=a.n(i);n.a},e212:function(t,e,a){"use strict";var i=a("7f80"),n=a.n(i);n.a},fadb:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"d",function(){return s}),a.d(e,"c",function(){return o}),a.d(e,"e",function(){return r}),a.d(e,"a",function(){return l}),a.d(e,"f",function(){return c});var i=a("b32d"),n={id:"",status:"draft",title:"",fullContent:"",abstractContent:"",sourceURL:"",imageURL:"",timestamp:"",platforms:["a-platform"],disableComment:!1,importance:0,author:"",reviewer:"",type:"",pageviews:0},s=function(t){return Object(i["a"])({url:"/article/list",method:"get",params:t})},o=function(t){return Object(i["a"])({url:"/article/detail",method:"get",params:{id:t}})},r=function(t){return Object(i["a"])({url:"/article/pv",method:"get",params:{pv:t}})},l=function(t){return Object(i["a"])({url:"/article/create",method:"post",data:t})},c=function(t){return Object(i["a"])({url:"/article/update",method:"post",data:t})}}}]);