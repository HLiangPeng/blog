<template>
  <div class="input">
    <input type="text" placeholder="输入关键词搜索...">
    <div class="search">
      <img src="../../assets/search.png">
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.input{
  display: flex;
  align-items: center;
  input{  
    background:none;  
    outline:none;
    border: 2px solid #fff;
    box-shadow: 0 0 6px #ddd;
    background-color: #fff;
    height: 26px;
    width: 140px;
    padding: 6px;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
    font-size: 12px;
    &:focus{
      box-sizing: border-box;
      border:2px solid #489fb9;
    }
  }
  input::-webkit-input-placeholder{
    color: #999;
    line-height: 50px;
  }
  input:hover{
    background-color: #ededed;
  }
  .search{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 26px;
    background-color: #fff;
    box-shadow: 3px 0 6px #ddd;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    &:hover{
      cursor: pointer;
    }
    img{
      width: 16px;
    }
  }
}
</style>