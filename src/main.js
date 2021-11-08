import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = true
Vue.config.devtools = true

import mock from './prize.js'

let data = {

	count: 0,
	bool: "unlocked",
	prizes: mock,
	chest: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
