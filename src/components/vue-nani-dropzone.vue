<template>
  <div :class="className">
    <div v-show="maxFiles == 0 || maxFiles > files.length">
      <div class="dropzone-wrapper">
        <form ref="formie" action class="dropzone-area text-center">
          {{ text }}
          <div v-if="uploading">
            <spinner :line-size="9" :message="progress + '%'"></spinner>
          </div>
        </form>
      </div>
    </div>
    <draggable
      v-model="files"
      @change="orderChanged"
      v-bind="{ disabled: !sortable }"
      :class="rowClass"
    >
      <slot v-for="f in files" name="file" :data="f"></slot>
    </draggable>
  </div>
</template>
<script>
  import Spinner from 'vue-nani-spinner'
  import Draggable from 'vuedraggable'
  import Slug from 'slug'
  var Dropzone = require('dropzone')
  var Path = require('path')

  export default {
    name: 'dropzone',
    components: {
      Draggable,
      Spinner
    },
    model: {
      prop: 'modelValue',
      event: 'files'
    },
    props: {
      id: {
        type: String,
        default () {
          return 'vue-nani-dropzone-id-' + this._uid
        }
      },
      rowClass: {
        type: String,
        default () {
          return 'row'
        }
      },
      sortable: {
        type: Boolean,
        default: false
      },
      slugify: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: Array,
        default () {
          return []
        }
      },
      className: {
        type: String,
        default: 'vue-nani-dropzone'
      },
      text: {
        type: String,
        default: 'Drop files here or click to upload'
      },
      maxFiles: {
        type: Number,
        default: 0
      },
      url: {
        type: String,
        required: true
      },
      fileParameter: {
        type: String,
        default: 'file'
      },
      parallelUploads: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        uploading: false,
        progress: 0,
        dz: {},
        files: this.modelValue
      }
    },
    methods: {
      removeFile (p, idx) {
        this.dz.removeFile(self.dz.files[idx])
        this.files.$remove(p)
      },
      orderChanged () {
        this.$emit('files', this.files)
        this.$emit('files-order-changed')
      }
    },
    mounted () {
      var self = this
            
      var dz = new Dropzone(self.$refs.formie, {
        url: self.url,
        paramName: self.fileParameter,
        clickable: self.$refs.formie,
        parallelUploads: self.parallelUploads,
        createImageThumbnails: false,
        previewTemplate: '<div style="display:none"></div>',
        init: function () {
          var that = this
          this.on('sending', function (file) {
            if (self.maxFiles == 0 || self.maxFiles > self.files.length) {
              return
            }

            self.$emit('max-files-exceeded', file)
            self.uploading = false

            try {
              that.off('error')
              that.removeFile(file)
            } catch (e) {
            } finally {
              that.on('error')
            }
          })

          // this.on('maxfilesexceeded',
          //    function (file) {
          //         //this.removeFile(file);
          //         self.$emit('max-files-exceeded', message);
          //    }
          // );

          this.on('error', function (file, message) {
            self.uploading = false
            self.$emit('error', message)
          })

          this.on('success', function (file, json) {
            self.uploading = false

            self.files.push(json)
            self.$emit('file-uploaded', json)
          })

          this.on('uploadprogress', function (file, progress, bytesSent) {
            let p = Math.round(progress)
            self.progress = p
            if (p < 100) {
              self.uploading = true
            }
            self.$emit('upload-progress', Math.round(progress))
          })
        },
        renameFile: function (file) {
          if (self.slugify) {
            let fn = Path.join(Slug(Path.basename(file.name, Path.extname(file.name))) + Path.extname(file.name))            
            return fn
          }

          return file.name
        }
      })

      // if (self.maxFiles > 0) {
      //     dz.maxFiles = self.maxFiles;
      // }

      self.dz = dz

      for (let i = 0; i < self.files.length; i++) {
        let mockFile = { name: self.files[i].file, size: 123 }
        dz.emit('addedfile', mockFile)
        dz.emit('complete', mockFile)

        dz.files.push(mockFile)
      }
    }
  }
</script>
<style lang="scss">
  $grid-gutter-width: 30px !default;
  $color-border: #cbcbcb;
  $color-ok-solid: #5da2f5;
  $color-ok-text: darken($color-ok-solid, 5);
  $color-dropdown: #888888;
  $color-descrete: #a8a8a8;
  $color-warning-solid: #f46374;

  $base-font-size-for-rem-calc: 16;

  @mixin text-descrete() {
    @include font-size(13);
    color: $color-descrete;
    letter-spacing: 0.4px;
  }

  @mixin rem-polyfill($desired-rem-size) {
    font-size: ($desired-rem-size * $base-font-size-for-rem-calc) + px;
    font-size: $desired-rem-size + rem;
  }

  @mixin font-size($desired-pixel-size) {
    $desired-rem-size: $desired-pixel-size / $base-font-size-for-rem-calc;
    font-size: ($desired-rem-size * $base-font-size-for-rem-calc) + px;
    font-size: $desired-rem-size + rem;
  }

  @mixin text-dropdown() {
    @include font-size(13);
    color: $color-dropdown;
    letter-spacing: 0.4px;
  }

  .vue-nani-dropzone {
    .dropzone-wrapper {
      display: table;
      width: 100%;
      margin-bottom: $grid-gutter-width / 2;
    }
    .dropzone-area {
      cursor: pointer;
      /*width: 100%;*/
      height: 100px;
      position: relative;
      border: 2px dashed $color-border;
      display: table-cell;
      vertical-align: middle;
      &:hover,
      &.dropzone-hover {
        border: 2px dashed $color-ok-solid;
        .dropzone-title {
          color: darken($color-ok-text, 10);
        }
      }
    }

    .dropzone-area input {
      position: absolute;
      top: 0px;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }

    .dropzone-text {
      position: absolute;
      top: 50%;
      text-align: center;
      transform: translate(0, -50%);
      width: 100%;
      span {
        display: block;
      }
    }

    .dropzone-title {
      @include text-dropdown();
    }
    .dropzone-info {
      @include text-descrete();
    }
  }
</style>