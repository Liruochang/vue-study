<template>
  <div class="brother-a">
    <h3>兄弟A（发送方）</h3>
    <button @click="sendMsg">发给兄弟B</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendMsg() {
      // $bus.$emit 触发事件，携带数据
      this.$bus.$emit('toB', '来自A的消息：你好兄弟！')
    }
  }
}
</script>

<style scoped>
.brother-a {
  padding: 10px;
  background: #e8f4ff;
  margin: 10px;
}
</style>
