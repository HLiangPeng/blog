<template>
  <div class="live">
    <div class="mainTitle">
      <div class="item">生活轶事</div>
    </div>
    <div class="list">
      <div class="item" v-for="(item,index) of 6" :key="index">
        <div class="title">
          2020 年 06 月 30 日
        </div>
        <div class="desc">
          出门前给爱人一个亲吻，每周为自己做一桌丰盛的大餐，帮同事庆祝一次生日，陪父母参观一次升旗仪式，定期给朋友打个问候电话……生活中的仪式感，无处不在，只是我们渐渐忽视、淡忘了。
          仪式感是把本来单调普通的事情，变得不一样，对此怀有敬畏心理。无聊的生活中，平淡是常态，你总要找到一种新的方式，让自己度过无趣的日子。
          你既可以享受美好的一切，也可以坦然面对糟糕的一切。你得意时不会忘形，失意时也不会潦倒。你知道，无论境况如何，生活都必须庄重。仪式感，会让你在平凡又琐碎的日子里，找到诗意的生活，找到继续前进的微光，找到不愿将就的勇气。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.live{
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
    background-color: #f1f3f4;
    text-align: left;
    padding: 20px;
    .item{
      background-color: #fff;
      margin-bottom: 20px;
      border-radius: 6px;
      padding: 30px;
      .title{
        color: #555;
        font-size: 20px;
        margin-bottom: 20px;
      }
      .desc{
        color: #a0a0a0;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 1px;
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        margin-bottom: 20px;
      }
    }
  }
}
</style>