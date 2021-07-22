import Vue from 'vue'
import App from './App.vue'
import './styles/main.scss'

import ApiPlugin from './plugins/api'

console.log('cherry');

Vue.use(ApiPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
