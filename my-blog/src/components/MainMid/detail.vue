<template>
  <div class="detail" v-if="initData">
    <h2 class="title">{{initData.title}}</h2>
    <div class="info">
      <div class="date">{{initData.date}}</div>
    </div>
    <!-- <vue-markdown  :source="initData.content"></vue-markdown> -->
    <mavon-editor :toolbars="toolbars" v-model="initData.content" :editable="false" defaultOpen="preview" :subfield="false" />
  </div>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
export default {
  data(){
    return{
      initData: '',
      toolbars: {}
    }
  },
  mounted(){
    this.initData = JSON.parse(this.$route.query.initData)
    this.initData.date = this.$utils.timeZh(this.initData.date)
  },
  components:{
    // VueMarkdown,
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.detail{
  padding: 20px 0;
  .info{
    font-size: 13px;
    color: #6a737d;
    display: flex;
    padding: 0 30px;
    justify-content: flex-end;
    .date{
      margin: 10px 0;
    }
  }
  .markdown-body{
    color: #444;
  }
  ::v-deep .v-note-op{
    display: none;
  }
}
</style>