<template>
  <div class="home_main">
    <main-top />
    <router-view />
  </div>
</template>

<script>
import MainTop from '@/components/HomeMain/mainTop.vue'
export default {
  components: {
    MainTop
  }
}
</script>

<style lang="scss" scoped>
  .home_main{
    background-color: #fff;
  }
</style>