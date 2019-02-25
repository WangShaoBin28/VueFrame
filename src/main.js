// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  Antd   from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import CountTo from 'vue-count-to'

Vue.config.productionTip = false

Vue.use(Mint)
Vue.use(ElementUI)
Vue.use(Antd)
Vue.use(CountTo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
