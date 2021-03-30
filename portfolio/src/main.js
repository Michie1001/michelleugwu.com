import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import CircleType from 'circletype'
import VueTypedJs from 'vue-typed-js'


Vue.config.productionTip = false
Vue.use(VueTypedJs)

new Vue({
  router,
  store,
  vuetify,
  CircleType,
  render: h => h(App)
}).$mount('#app')
