<template>
  <div id="app">
    <h1>vue-nani-dropzone</h1>
    <h3>Feed me with files</h3>
    <hr>

    <h4>WIP</h4>
    <p class="code">more info soon</p>

    <h4>Examples</h4>
    <vue-nani-dropzone
      :key="new Date().getTime()"
      url="/upload-image"
      v-model="attachments"
      :sortable="true"
      :slugify="true"
      text="Upload some files here..."
      file-parameter="uploadfile"          
      >
      <template slot="file" slot-scope="{data}">
        <div>
          <img src="data.file"/>                      
        </div>
      </template>
    </vue-nani-dropzone>
    <h4>
      Check
      <a href="https://github.com/goto10hq/vue-nani-dropzone">GitHub</a> for more
    </h4>
    <br>
  </div>
</template>

<script>
  import Vue from "vue";
  import VueNaniDropzone from "../src/index.js";

  export default {
    name: "app",
    data() {
      return {
        attachments: []
      }
    },
    components: {
      VueNaniDropzone
    }
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900");
  @import url("https://fonts.googleapis.com/css?family=Overpass+Mono:400,700");
  body {
    background-color: #fafafa;
  }
  #app {
    max-width: 980px;
    margin: auto;
    font-family: "Roboto", sans-serif;
    color: #2c3e50;
  }
  input {
    margin: 12px 0;
    font-family: inherit;
    font-size: inherit;
    padding: 8px 16px;
    border: none;
    border-bottom: 2px solid #4fc08d;
    outline: none;
    margin-right: 24px;
  }
  hr {
    border: none;
    border-bottom: 2px solid #ddd;
  }
  h1 {
    font-size: 48px;
    margin: 48px 0 8px 0;
    font-weight: 900;
  }
  h3 {
    margin: 0 0 24px;
    font-weight: 300;
  }
  h4 {
    margin: 36px 0 12px;
  }
  span {
    opacity: 0.5;
    margin-left: 16px;
    white-space: nowrap;
  }
  .code {
    padding: 24px;
    font-family: "Overpass Mono", monospace;
    background-color: #eee;
    font-size: 0.95em;
    font-weight: 500;
    line-height: 1.5em;
  }
  table.code {
    width: 100%;
    text-align: left;
  }
  table.code tbody tr {
    width: 100%;
    text-align: left;
    vertical-align: top;
  }
</style>