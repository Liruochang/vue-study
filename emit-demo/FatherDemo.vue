<template>
  <div>
    <h3>父组件，收到子组件消息：{{ msgFromChild }}</h3>
    <!-- 绑定自定义事件 sendMsg，触发时执行 receive 方法 -->
    <ChildrenDemo @sendMsg="receive" />
  </div>
</template>

<script>
import ChildrenDemo from './ChildrenDemo.vue'
export default {
  components: { ChildrenDemo },
  data() {
    return {
      msgFromChild: ''
    }
  },
  methods: {
    // 这个 val 就是子组件 $emit 传过来的值
    receive(val) {
      console.log('父收到：', val)
      this.msgFromChild = val
    }
  }
}
</script>
