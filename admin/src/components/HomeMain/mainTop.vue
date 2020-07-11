<template>
  <div class="main_top">
    <div class="nav_name">
      {{this.$store.state.routerName}}
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .main_top{
    height: 50px;
    background-color: #fff;
    box-shadow: 0 2px 2px #eee;
    display: flex;
    align-items: center;
    padding: 0 20px;
    .nav_name{
      color: #97a8be;
    }
  }
</style>