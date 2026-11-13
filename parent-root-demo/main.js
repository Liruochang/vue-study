import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data(){
    return {
      globalRootVal:'这是main.js根实例的数据！$root本质就是它'
    }
  },
  methods: {
    rootFn(){
      alert('根实例的方法被调用了')
    }
  }
}).$mount('#app')
