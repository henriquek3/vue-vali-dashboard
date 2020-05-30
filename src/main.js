import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import $ from 'jquery';
import 'popper.js';
//window.$ = $;
global.$ = $;
require('bootstrap');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
