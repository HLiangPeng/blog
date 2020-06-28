<template>
  <div class="MainNav">
    <div class="home">
      <img src="../../assets/home.png">
      <div class="name">JYYX</div>
      <h-input class="hInput"></h-input>
    </div>
  </div>
</template>

<script>
import HInput from './input'
export default {
  components: {
    HInput
  }
}
</script>

<style lang="scss" scoped>
.MainNav{
  background-color: #f9f9f9;
  height: 50px;
  box-shadow: 0 0 6px #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .home{
    display: flex;
    align-items: center;
    &:hover{
      cursor: pointer;
    }
    img{
      width: 20px;
      margin-right: 10px;
    }
    .name{
      font-weight: 700;
      color: #777;
    }
  }
  .hInput{
    margin-left: 140px;
  }
}
</style>