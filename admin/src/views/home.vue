<template>
  <div class="home">
    <home-left />
    <home-main />
  </div>
</template>

<script>
import HomeLeft from '@/components/HomeLeft/index'
import HomeMain from '@/components/HomeMain/index'
export default {
  components: {
    HomeLeft,
    HomeMain
  }
}
</script>

<style lang="scss" scoped>
  .home{
    padding-left: 210px;
    .home_left{
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 210px;
    }
    .home_main{
      height: 1000px;
    }
  }
</style>