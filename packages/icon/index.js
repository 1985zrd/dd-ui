import Icon from './src/icon'

let icons = require.context('./svg/', false, /\.svg$/)
icons.keys().map(icons)

Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon)
}

export default Icon
