import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import $ from 'jquery';
//window.$ = $;
global.$ = $;
import 'popper.js';
import 'vali-admin/src/sass/main.scss'
require('bootstrap');

import "~@fortawesome/fontawesome-free/scss/fontawesome";
import "~@fortawesome/fontawesome-free/scss/brands";
import "~@fortawesome/fontawesome-free/scss/regular";
import "~@fortawesome/fontawesome-free/scss/solid";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
