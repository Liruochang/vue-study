<template>
  <div>
    <p>子组件</p>
    <button @click="handleClick">点我给父传数据</button>
  </div>
</template>

<script>
export default {
  // props: {
  //   name: String,
  //   age: {
  //     type: Number,
  //     default: 19
  //   }
  // },
  methods: {
    handleClick() {
      // 参数1：事件名字（要和父 @后面名字一模一样！）
      // 参数2：传给父的数据，可以是数字、字符串、对象
      this.$emit('sendMsg', '我是子组件发过来的数据！')
    }
  }
}
</script>
