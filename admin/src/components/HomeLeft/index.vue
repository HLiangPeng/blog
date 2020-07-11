<template>
  <div class="home_left">
    <Logo />
    <div class="list">
      <div class="item" :class="handleIndex == index? 'active':''" v-for="(item,index) of nav_list" :key="index" @click="handleItem(item)">
        <img v-show="handleIndex != index" :src="item.icon" alt="">
        <img v-show="handleIndex == index" :src="item.icon_handle" alt="">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/HomeLeft/logo'
export default {
  data(){
    return{
      nav_list: [
        {
          name: '写博客',
          icon: require('@/assets/home_left/write.png'),
          icon_handle: require('@/assets/home_left/write_1.png'),
          link: 'MainWrite'
        },
        {
          name: '博客管理',
          icon: require('@/assets/home_left/write.png'),
          icon_handle: require('@/assets/home_left/write_1.png'),
        },
      ],
      handleIndex: 0
    }
  },
  components: {
    Logo
  },
  methods: {
    handleItem(item){
      this.handleIndex = item.index
      this.$store.commit('changeRouter',item.name)
      this.$router.push({name: item.link})
    }
  }
}
</script>

<style lang="scss" scoped>
  .home_left{
    background-color: #304156;
    color: #bfcbd9;
    .list{
      .item{
        height: 56px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        &:hover{
          background-color: #27384d;
        }
        img{
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
      .active{
        color: #409eff;
      }
    }
  }
</style>