<template>
  <div class="MainMid">
    <mid-top />
  </div>
</template>

<script>
import MidTop from '@/components/MainMid/midTop.vue'
export default {
  data(){
    return{
      
    }
  },
  components: {
    MidTop
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