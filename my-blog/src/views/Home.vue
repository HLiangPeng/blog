<template>
  <div class="home">
    <main-nav/>
    <main-left class="mainLeft"/>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav/index.vue'
import MainLeft from '@/components/MainLeft/index.vue'
export default {
  name: 'Home',
  components: {
    MainNav,
    MainLeft
  }
}
</script>

<style lang="scss" scoped>
.home{
  min-width: 300px;
  height: 100px;
  max-width: 980px;
  margin: 0 auto;
  .mainLeft{
    width: 220px;
    background-color: #f9f9f9;
  }
}
</style>
