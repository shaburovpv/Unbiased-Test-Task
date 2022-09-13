import Vue from 'vue'
import App from './App.vue'
import './styles/main.scss'

import ApiPlugin from './plugins/api'

console.log('blueberry')

console.log('on log')

Vue.use(ApiPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
