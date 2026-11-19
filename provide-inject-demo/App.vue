<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <AaSon />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AaSon from "@/components/AaSon.vue";

export default {
  name: 'App',
  components: {
    AaSon,
    // HelloWorld
  },
  data() {
    return {
      msg: '我是祖先的数据',
      user: { name: '李四' }
    }
  },
  provide() {
    // provide 是一个函数，返回对象，里面就是提供出去的内容
    return {
      // 直接传，基本类型默认非响应式
      title: '页面标题',
      // 传引用类型（对象），对象内部属性可以响应
      user: this.user,
      changeMsg: this.changeMsg
    }
  },
  methods: {
    changeMsg() {
      this.msg = '修改后的文字'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
