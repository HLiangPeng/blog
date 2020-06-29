<template>
  <div class="user">
    <div class="avatar" :style="note">

    </div>
    <div class="name">
      三分月色
    </div>
    <div class="motto">
      生活很好，樱花很美。
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      note: {
        backgroundImage: "url(" + require("../../assets/avatar.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        transform: "rotate(0deg)",
      },
    }
  },
  mounted(){
    this.changeAvatar()
  },
  methods: {
    changeAvatar(){
      let deg = 0
      setInterval(() => {
        deg == 360? deg=0: deg += 1
        this.note.transform = `rotate(${deg}deg)`
      }, 10);
    }
  },
  
}
</script>

<style lang="scss" scoped>
.user{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px 0;
  border-bottom: 1px solid #fff;
  .avatar{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    box-shadow: 0 0 6px #ddd;
  }
  .name{
    color: #777;
    font-weight: 700;
    font-size: 15px;
    margin-top: 10px;
  }
  .motto{
    color: #999;
    font-size: 13px;
  }
}
</style>