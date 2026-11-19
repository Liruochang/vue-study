<template>
  <div>
    {{ title }}
    {{ user.name }}
    <button @click="changeMsg">调用祖先的方法</button>
  </div>
</template>
<script>
export default {
  // inject 接收祖先provide出来的key
  inject: ['title', 'user', 'changeMsg'],
  mounted() {
    console.log(this.title)
    console.log(this.user)
  }
}
</script>
