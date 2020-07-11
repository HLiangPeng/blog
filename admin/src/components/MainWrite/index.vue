<template>
  <div class="main_write">
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px" />
    <div class="btn">
      提交
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: "",
      content: ""
    };
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
      this.$api.getArticleList().then(res=>{
        console.log(res)
      })
    },
    change(value, render) {
      this.html = render;
    },
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