import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入
import { globalRegister } from './global'

Vue.use(globalRegister)

Vue.config.productionTip = false

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
