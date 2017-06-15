// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.\n
 
import Vue from 'vue'
import App from './App'
import router from './router'
import jsonp from "jsonp"
import axios from 'axios'
import VueAxios from 'vue-axios'
import jQuery from "jquery"
window.$=window.jQuery=jQuery;
import amazeui from "amazeui"
import { Search } from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'amazeui/dist/css/amazeui.min.css'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'normalize.css/normalize.css'


Vue.use(VueAxios, axios)
Vue.component(Search.name, Search)


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App,Search}
})
