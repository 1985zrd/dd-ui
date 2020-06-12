import Form from './src/form'
import Item from './src/form-item'

Form.install = function (Vue) {
  Vue.component(Form.name, Form)
  Vue.component(Item.name, Item)
}

Form.Item = Item

export const FormItem = Item

export default Form