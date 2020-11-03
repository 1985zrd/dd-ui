import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/App.vue')
  }
]

const pages = require.context('../views/', false, /\.vue$/)

pages.keys().forEach(item => {
  /\/(\w+)\.\w+$/.test(item)
  let name = RegExp.$1.trim()
  routes.push({
    path: `/${name}`,
    name: name,
    component: () => import(`@/views/${name}.vue`)
  })
})

const router = new Router({
  mode: 'hash',
  routes: routes
})

export default router
