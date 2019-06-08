import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

console.log(`${localStorage.getItem("authSpotify")} HELLO FROM MAIn.JS`)

Vue.config.productionTip = false
Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("authSpotify")}`

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')