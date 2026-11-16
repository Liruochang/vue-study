<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <MiddleDemo :name="张三" :age="18" @change="handleChange" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import MiddleDemo from "./components/MiddleDemo.vue";

export default {
  name: 'App',
  components: {
    MiddleDemo
  },
  data(){
    return {
      name:'张三',
      age:18
    }
  },
  methods:{
    handleChange(val){
      console.log('收到孙子发来的值：',val);
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
