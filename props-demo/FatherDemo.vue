<template>
  <div>
    <h3>父组件</h3>
    <ChildrenDemo name="jack" :age="18"/>
  </div>
</template>

<script>
import ChildrenDemo from './ChildrenDemo.vue'
export default {
  components: {
    ChildrenDemo
  }
}
</script>
