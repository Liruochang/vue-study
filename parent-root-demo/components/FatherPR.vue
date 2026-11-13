<template>
  <div class="father">
    <h3>Father组件</h3>
    <p>Father的数据：{{ fatherMsg }}</p>
    <SonPR />
  </div>
</template>

<script>
import SonPR from './SonPR.vue'
export default {
  components:{SonPR},
  data(){
    return {
      fatherMsg: 'Father里面的消息'
    }
  },
  methods:{
    fatherFunc(){
      alert('Father组件的方法执行了！')
    }
  }
}
</script>
