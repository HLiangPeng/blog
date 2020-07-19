<template>
  <div class="title">
    <div class="label">
      请输入标题：
    </div>
    <input type="text" :placeholder="placeholder" @input="change">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  data(){
    return{
      
    }
  },
  methods: {
    change(e){
      this.$emit('input',e.target.value)
    },
  }
}
</script>

<style lang="scss" scoped>
.title{
  display: flex;
  align-items: center;
  margin: 20px 10px;
  .label{
    color: #666;
  }
  input{
    padding:2px 10px;
    width: 400px;
  }
}
</style>