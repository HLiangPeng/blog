<template>
  <div class="news">
    <div class="mainTitle">
      <div class="item">我的动态</div>
    </div>
    <div class="list">
      <div class="line"></div>
      <div class="item" v-for="(item,index) of 6" :key="index">
        <img src="../../assets/avatar.jpg">
        <div class="tri"></div>
        <div class="content">
          <div class="itemTop">
            <div class="name">
              三分月色
            </div>
            <div class="time">
              2020-06-29；21:15
            </div>
          </div>
          <div class="itemText">
            后天就要离开这个呆了一年的出租小屋里，淡定的我一如往日，彷佛我不需要道别一样。我是什么时候变得对任何事都毫无计划，任由着生活推动着我前进的。此刻只想...只想~~~
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  .mainTitle {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    background-color: #fff;
    .item{
      padding: 6px 12px;
      color: #fff;
      background-color: #23b7e5;
      border-radius: 4px;
      font-size: 14px;
      &:hover{
        cursor: pointer;
        background-color: #337ab7;
      }
    }
  }
  .list{
    position: relative;
    background-color: #f0f3f4;
    padding: 20px;
    .line{
      position: absolute;
      width: 1.5px;
      height: 100%;
      background-color: #dee5e7;
      left: 40px;
      top: 0;
      z-index: 0;
    }
    .item{
      margin-bottom: 20px;
      display: flex;
      position: relative;
      z-index: 3;
      img{
        width: 40px;
        height: 40px;
        border-radius: 6px;
      }
      .tri{
        transform: translateY(13px);
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 6px solid #fff;
        border-bottom: 6px solid transparent;
        border-left: 6px solid transparent;
      }
      .content{
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 6px rgb(236, 236, 236);
        color: #777;
        font-size: 13px;
        .itemTop{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
          border-bottom: 1px solid #ededed;
          .name{
            font-size: 14px;
          }
          .time{
            color: #a0a0a0;
          }
        }
        .itemText{
          padding: 20px 20px 30px 20px;
          text-align: left;
          text-justify: inter-word;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>