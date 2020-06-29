<template>
  <div class="midTop" :style="note">
    <div class="info">
      <div class="left">
        <div class="name">三分月色</div>
        <div class="desc">一枚得不到爱情，敲代码还经常报错的小倒霉蛋。</div>
      </div>
      <div class="right">
        <div class="item">
          <div class="num">
            5
          </div>
          <div class="name">
            编程
          </div>
        </div>
        <div class="item">
          <div class="num">
            2
          </div>
          <div class="name">
            生活
          </div>
        </div>
      </div>
    </div>
    <div class="github" @click="toGitHub">
      github
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      note: {
        backgroundImage: "url(" + require("../../assets/bg.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    }
  },
  methods: {
    toGitHub(){
      window.open('https://github.com/HLiangPeng/blog')
    }
  }
}
</script>

<style lang="scss" scoped>
.midTop{
  position: relative;
  padding: 0 40px;
  &::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 250px;
    opacity: 0.5;
    background-color: #fff;
    z-index: 1;
  }
  .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    z-index: 2;
    position: relative;
    .left{
      text-align: left;
      .name{
        color: #222;
        font-size: 22px;
        margin-bottom: 10px;
      }
      .desc{
        width: 200px;
        font-size: 12px;
        color: #666;
      }
    }
    .right{
      display: flex;
      color: #666;
      .item{
        margin: 0 10px;
        .num{
          font-size: 20px;
        }
        .name{
          font-size: 13px;
        }
      }
    }
  }
  .github{
    font-size: 12px;
    line-height: 28px;
    width: 60px;
    border-radius: 50px;
    background-color: #27c24c;
    color: #fff;
    position: relative;
    z-index: 5;
    margin-top: 50px;
    &:hover{
      cursor: pointer;
      background-color: #149b34;
    }
  }
}
</style>