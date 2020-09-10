<template>
  <div class="main_write">
    <h-title placeholder="请输入博客标题" v-model="value"/>
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px" />
    <!-- <Markdown v-model="content"/> -->
    <div class="btn" @click="saveArticle">
      提交
    </div>
  </div>
</template>

<script>
import HTitle from '../MainWrite/title'
// import Markdown from 'vue-meditor'
export default {
  data() {
    return {
      html: "",
      content: "",
      value: ""
    };
  },
  components: {
    HTitle,
    // Markdown
  },
  created(){
    this.getArticleList()
  },
  mounted(){
    
  },
  methods: {
    // 列表
    getArticleList(){
      console.log(this.$api)
      this.$api.home().then(res=>{
        console.log(res)
      })
    },
    // 提交技术博客
    saveArticle(){
      this.$api.saveArticle({
        title: this.value,
        content: this.content
      }).then(res=>{
        console.log(res)
      })
    },
    change(value, render) {
      this.html = render;
    }
  }
};
</script>

<style lang="scss" scoped>
.main_write {
  height: 50px;
  background-color: #fff;
  box-shadow: 0 2px 2px #eee;
  .btn{
    color: #fff;
    width: 100px;
    line-height: 50px;
    background-color: rgb(24, 144, 255);
    cursor: pointer;
    margin-left: auto;
    margin-top: 20px;
    margin-right: 50px;
    border-radius: 10px;
    &:hover{
      background-color: rgb(43, 118, 189);
    }
  }
}
</style>