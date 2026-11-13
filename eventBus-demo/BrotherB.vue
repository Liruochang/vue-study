<template>
  <div class="brother-b">
    <h3>兄弟B（接收方）</h3>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '等待消息...'
    }
  },
  created() {
    // 监听事件
    this.$bus.$on('toB', (val) => {
      this.msg = val
    })
  },
  // ✅ 重点！组件销毁前解绑事件，防止内存泄漏、多次触发
  beforeDestroy() {
    this.$bus.$off('toB')
  }
}
</script>

<style scoped>
.brother-b {
  padding: 10px;
  background: #fff3e8;
  margin: 10px;
}
</style>
