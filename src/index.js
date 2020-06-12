
// 导入按钮组件
import Button from '../packages/button'
import Icon from '../packages/icon'
import Result from '../packages/result'
import Form, { FormItem } from '../packages/form'
import Input from '../packages/input'

import Toast from '../packages/toast'

import '../packages/theme-chalk/index.scss'

import { version } from '../package.json'

// 存储组件列表
const components = [
  Button,
  Icon,
  Result,
  Form,
  FormItem,
  Input
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$toast = Toast
  // Vue.prototype.$message = Message
  // Vue.prototype.$confirm = Modal.confirm
  // Vue.prototype.$info = Modal.info
  // Vue.prototype.$success = Modal.success
  // Vue.prototype.$error = Modal.error
  // Vue.prototype.$warning = Modal.warning
  // Vue.prototype.$destroyAll = Modal.destroyAll
  // Vue.prototype.$notification = Notification
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  Icon,
  Result,
  Form,
  Input
}

export default {
  version: version,
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
}
