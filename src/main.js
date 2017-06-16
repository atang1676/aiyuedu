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
import { Search,Cell,Indicator,Actionsheet} from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'amazeui/dist/css/amazeui.min.css'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'normalize.css/normalize.css'
<<<<<<< Updated upstream
import verify from "vue-verify-plugin";
=======
import '../static/iconfont.css'
>>>>>>> Stashed changes

Vue.use(VueAxios, axios)
Vue.component(Search.name, Search)
Vue.component(Cell.name, Cell);
<<<<<<< Updated upstream
Vue.use(verify);
=======
Vue.component(Actionsheet.name, Actionsheet);
>>>>>>> Stashed changes
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App,Search,Cell,Indicator,Actionsheet}
})
