import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.css'
import router from './router'

Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')