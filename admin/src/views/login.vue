<template>
  <div class="login">
    <div class="loginForm">
      <input type="text" @keyup.enter="submit" v-model="name">
      <input type="password" @keyup.enter="submit" v-model="password">
      <div class="btn" @click="register">注册</div>
      <div class="btn" @click="login">登陆</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      password: ''
    }
  },
  methods: {
    register(){
      this.$api.register({
        name: this.name,
        password: this.password
      }).then(res=>{
        console.log(res)
      })
    },
    login(){
      this.$api.login({
        name: this.name,
        password: this.password
      }).then(res=>{
        this.$store.commit('setToken',res.data.token)
        this.$router.push({name: 'home'})
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  height: 100vh;
  width: 100vw;
  position: relative;
  // background: url('../assets/img/login/bg.jpg') 100% 100%;
  .loginForm{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-20%,-50%);
    display: flex;
    flex-direction: column;
    input{
      width: 300px;
      height: 50px;
      margin: 20px 0;
      padding: 0px 10px;
    }
    .btn{
      cursor: pointer;
      width: 300px;
      line-height: 50px;
      background: violet;
      border-radius: 10px;
      color: #fff;
      margin: 20px 0;
    }
  }
}
</style>