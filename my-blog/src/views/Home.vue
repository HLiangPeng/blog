<template>
  <div class="home">
    <main-nav class="mainNav"/>
    <div class="content">
      <main-left class="mainLeft"/>
      <main-mid class="mainMid"/>
      <main-right class="mainRight"/>
    </div>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav/index.vue'
import MainLeft from '@/components/MainLeft/index.vue'
import MainMid from '@/components/MainMid/index.vue'
import MainRight from '@/components/MainRight/index.vue'
export default {
  name: 'Home',
  components: {
    MainNav,
    MainLeft,
    MainMid,
    MainRight
  }
}
</script>

<style lang="scss" scoped>
.home{
  /* 暂时不做太多兼容 */
  /* min-width: 980px;
  max-width: 980px; */
  width: 980px;
  height: 100px;
  margin: 0 auto;
  .mainNav{
    position: relative;
    z-index: 2;
  }
  .content{
    display: flex;
    padding-left: 220px;
    position: relative;
    .mainLeft{
      position: fixed;
      left: 0;
      top: 50px;
      width: 220px;
      height: calc(100vh - 50px);
      background-color: #f9f9f9;
      box-shadow: -3px 0px 3px #eee;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    .mainMid{
      flex: 1;
    }
    .mainRight{
      width: 260px;
      background-color: #f9f9f9;
      box-shadow: 3px 0px 3px #eee;
    }
  }
  
}
</style>
