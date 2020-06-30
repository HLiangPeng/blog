<template>
  <div class="navLink">
    <div class="title">导航</div>
    <div class="list">
      <div class="item" v-for="(item,index) of list" :key="index" @click="$router.push({name: item.linkName})">
        <img :src="item.img" >
        <div class="name">{{item.name}}</div>
        <div class="num">{{item.num}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list: [
        {
          name: '动态',
          num: 7,
          img: require('../../assets/news.png'),
          linkName: 'News'
        },
        {
          name: '编程技术',
          num: 5,
          img: require('../../assets/code.png'),
          linkName: 'Code'
        },
        {
          name: '生活轶事',
          num: 2,
          img: require('../../assets/live.png'),
          linkName: 'Live'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.navLink{
  color: #999;
  font-size: 14px;
  padding: 20px 0;
  .title{
    color: #98a6ad;
    text-align: left;
    font-size: 13px;
    margin-bottom: 10px;
    padding: 0 20px;
  }
  .list{
    .item{
      display: flex;
      align-items: center;
      padding: 0 30px;
      height: 40px;
      position: relative;
      &:hover{
        cursor: pointer;
        background-color: #e7e7e7;
      }
      img{
        width: 20px;
        margin-right: 20px;
      }
      .num{
        position: absolute;
        right: 30px;
        background-color: #cfdadd;
        color: #fff;
        padding: 0 6px;
        border-radius: 8px;
      }
    }
  }
}
</style>