<template>
  <div>
    <p>name：{{ name }}</p>
    <p>age：{{ age }}，age的类型：{{ typeof age }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // 简写：仅指定类型
    name: String,
    // 完整配置对象
    age: {
      type: Number,
      default: 19,
      required: true
    }
  }
}
</script>
