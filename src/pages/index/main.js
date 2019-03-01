import Vue from 'vue'
import App from './index'
import Bus from './bus.vue'
// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}
Vue.prototype.$bus = new Vue(Bus)
const app = new Vue(App)
app.$mount()
