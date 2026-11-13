<template>
  <div class="son">
    <h4>Son子组件</h4>
    <button @click="testParent">测试 $parent 直接父组件</button>
    <br>
    <button @click="testRoot">测试 $root 根实例</button>
    <br>
    <button @click="warning">不要链式$parent.$parent（反面例子）</button>
  </div>
</template>

<script>
export default {
  methods:{
    testParent(){
      this.$parent.fatherFunc()
    },
    testRoot(){
      this.$root.rootFn()
    },
    warning(){
      this.$parent.$parent.appMsg
    }
  }
}
</script>
