(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){"use strict";var a=n(0);n.n(a).a},function(e,t,n){"use strict";var a=n(1);n.n(a).a},,,function(e,t,n){"use strict";n.r(t);var a=n(4),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("vue-nani-dropzone")]),e._v(" "),n("h3",[e._v("Feed me with files")]),e._v(" "),n("hr"),e._v(" "),n("h4",[e._v("WIP")]),e._v(" "),n("p",{staticClass:"code"},[e._v("more info soon")]),e._v(" "),n("h4",[e._v("Examples")]),e._v(" "),n("vue-nani-dropzone",{key:(new Date).getTime(),attrs:{url:"/upload-image",sortable:!0,slugify:!0,text:"Upload some files here...","file-parameter":"uploadfile"},scopedSlots:e._u([{key:"file",fn:function(e){e.data;return[n("div",[n("img",{attrs:{src:"data.file"}})])]}}]),model:{value:e.attachments,callback:function(t){e.attachments=t},expression:"attachments"}}),e._v(" "),e._m(0),e._v(" "),n("br")],1)};i._withStripped=!0;var r=n(6),l=n.n(r),s=n(7),o=n.n(s),u=n(8),f=n.n(u),d=n(12),p=n(14),c={name:"dropzone",components:{Draggable:o.a,Spinner:l.a},model:{prop:"modelValue",event:"files"},props:{id:{type:String,default:function(){return"vue-nani-dropzone-id-"+this._uid}},rowClass:{type:String,default:function(){return"row"}},sortable:{type:Boolean,default:!1},slugify:{type:Boolean,default:!1},modelValue:{type:Array,default:function(){return[]}},className:{type:String,default:"vue-nani-dropzone"},text:{type:String,default:"Drop files here or click to upload"},maxFiles:{type:Number,default:0},url:{type:String,required:!0},fileParameter:{type:String,default:"file"},parallelUploads:{type:Number,default:1}},data:function(){return{uploading:!1,progress:0,dz:{},files:this.modelValue}},methods:{removeFile:function(e,t){this.dz.removeFile(self.dz.files[t]),this.files.$remove(e)},orderChanged:function(){this.$emit("files",this.files),this.$emit("files-order-changed")}},mounted:function(){var e=this,t=new d(e.$refs.formie,{url:e.url,paramName:e.fileParameter,clickable:e.$refs.formie,parallelUploads:e.parallelUploads,createImageThumbnails:!1,previewTemplate:'<div style="display:none"></div>',init:function(){var t=this;this.on("sending",function(n){if(!(0==e.maxFiles||e.maxFiles>e.files.length)){e.$emit("max-files-exceeded",n),e.uploading=!1;try{t.off("error"),t.removeFile(n)}catch(a){}finally{t.on("error")}}}),this.on("error",function(t,n){e.uploading=!1,e.$emit("error",n)}),this.on("success",function(t,n){e.uploading=!1,e.files.push(n),e.$emit("file-uploaded",n)}),this.on("uploadprogress",function(t,n,a){var i=Math.round(n);e.progress=i,i<100&&(e.uploading=!0),e.$emit("upload-progress",Math.round(n))})},renameFile:function(t){return e.slugify?p.join(f()(p.basename(t.name,p.extname(t.name)))+p.extname(t.name)):t.name}});e.dz=t;for(var n=0;n<e.files.length;n++){var a={name:e.files[n].file,size:123};t.emit("addedfile",a),t.emit("complete",a),t.files.push(a)}}},m=(n(15),n(2)),h={name:"app",data:function(){return{attachments:[]}},components:{VueNaniDropzone:Object(m.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.className},[n("div",{directives:[{name:"show",rawName:"v-show",value:0==e.maxFiles||e.maxFiles>e.files.length,expression:"maxFiles == 0 || maxFiles > files.length"}]},[n("div",{staticClass:"dropzone-wrapper"},[n("form",{ref:"formie",staticClass:"dropzone-area text-center",attrs:{action:""}},[e._v("\n        "+e._s(e.text)+"\n        "),e.uploading?n("div",[n("spinner",{attrs:{"line-size":9,message:e.progress+"%"}})],1):e._e()])])]),e._v(" "),n("draggable",e._b({class:e.rowClass,on:{change:e.orderChanged},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}},"draggable",{disabled:!e.sortable},!1),[e._l(e.files,function(t){return e._t("file",null,{data:t})})],2)],1)},[],!1,null,null,null).exports}},v=(n(16),Object(m.a)(h,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("h4",[this._v("\n    Check\n    "),t("a",{attrs:{href:"https://github.com/goto10hq/vue-nani-dropzone"}},[this._v("GitHub")]),this._v(" for more\n  ")])}],!1,null,null,null));v.options.__file="docs.src/docs.vue";var g=v.exports;new a.a({el:"#app",render:function(e){return e(g)}})}],[[9,2,0]]]);