import Vue from 'vue'
// 导入组件库
import ddUi from '~/index'
import App from './App.vue'

// 注册ikit组件库
Vue.use(ddUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
