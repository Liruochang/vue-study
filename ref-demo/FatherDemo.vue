<template>
  <div>
    <ChildDemo ref="myChild"/>
    <button @click="operateChild">点我，父调用子里面的加法</button>
    <br><br>
    <button @click="operateChildren">点我，父调用子里面的减法</button>
  </div>
</template>
<script>
import ChildDemo from './ChildDemo.vue'
export default {
  components:{ChildDemo},
  methods:{
    operateChild(){
      // $refs 存放所有ref标记的节点/组件
      console.log(this.$refs.myChild.num) // 读取子组件data：100
      this.$refs.myChild.addNum() // 直接调用子组件的addNum方法
    },
    operateChildren(){
      this.$refs.myChild.lowNum()
    }
  }
}
</script>
