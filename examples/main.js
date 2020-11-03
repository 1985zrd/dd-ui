import Vue from 'vue'
import router from './router/'
// 导入组件库
import ddUi from '~/index'
import App from './App.vue'

import CodeBox from '@/components/common/CodeBox.vue'
import MarkdownRender from '@/components/common/MarkdownRender.vue'

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 注册ikit组件库
Vue.use(ddUi)

Vue.component('CodeBox', CodeBox)
Vue.component('MarkdownRender', MarkdownRender)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
