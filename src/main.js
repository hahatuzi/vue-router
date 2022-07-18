import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import '@/assets/common.css'
import 'element-ui/lib/theme-chalk/index.css'

import ElementUI from 'element-ui'
import Router from "vue-router";
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(Router)
router.beforeEach(async (to, from, next) => {
  // if (!store.state.hasAuth) {
    store.dispatch('setUserRouters').then(res =>{
      console.log(res)
    })
    // router.addRoutes(store.state.userRouters)
    // next({path: to.path})
  // } else {
    next()
  // }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
