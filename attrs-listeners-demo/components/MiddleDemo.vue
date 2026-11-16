<!-- Middle.vue 中间层（透明中转层，重点！） -->
<template>
  <div class="wrap">
    <!-- 把属性、事件全部原封不动传给Inner -->
    <InnerDemo v-bind="$attrs" v-on="$listeners"/>
  </div>
</template>
<script>
import InnerDemo from './InnerDemo.vue'
export default {
  components:{InnerDemo},
  inheritAttrs: false, // 关闭自动挂载到当前div根节点
}
</script>
