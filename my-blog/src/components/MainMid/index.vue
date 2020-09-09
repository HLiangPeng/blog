<template>
  <div class="MainMid">
    <mid-top />
    <!-- <keep-alive> -->
      <router-view>
        <News />
        <Code />
        <Live />
      </router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import MidTop from '@/components/MainMid/midTop.vue'
import News from '@/components/MainMid/news.vue'
import Code from '@/components/MainMid/code.vue'
import Live from '@/components/MainMid/live.vue'
export default {
  data(){
    return{
      
    }
  },
  components: {
    MidTop,
    News,
    Code,
    Live
  }
}
</script>

<style lang="scss" scoped>
.MainMid{
  .midTop{
    height: 250px;
  }
}
</style>