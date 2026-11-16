<template>
  <div>
    拿到爷爷传过来：{{$attrs.name}} -- {{$attrs.age}}
    <button @click="send">点我触发爷爷的change事件</button>
  </div>
</template>
<script>
export default {
  mounted(){
    // 打印看一下：{name:"张三",age:18}
    console.log(this.$attrs)
    // 打印：{ change: [Function] }
    console.log(this.$listeners)
  },
  methods:{
    send(){
      // 触发爷爷绑定的change事件
      this.$listeners.change(666)
    }
  }
}
</script>
