import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCharts from 'v-charts'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.use(VCharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
