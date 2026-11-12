<template>
  <div>
    <p>子组件内部数字：{{ num }}</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      num: 100
    }
  },
  methods:{
    addNum(){
      this.num += 10
    },
    lowNum(){
      this.num -= 10
    }
  }
}
</script>
