import Vue from 'vue'
import VueRouter from 'vue-router'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
