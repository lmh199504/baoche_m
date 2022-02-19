import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/vant'
import '@/assets/styles/global.less'
Vue.config.productionTip = false
import VueClipBoard from 'vue-clipboard2'
Vue.use(VueClipBoard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
