// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueResource from 'vue-resource'
import 'github-markdown-css'
import VueScroller from 'vue-scroller'
import {store} from './store/store'
Vue.use(VueScroller)
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,Icon

  }
})
