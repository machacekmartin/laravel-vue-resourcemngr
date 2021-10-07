import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'

import App from './App.vue'
import Icon from './components/Icon.vue'

Vue.use(VueRouter)
Vue.component('icon', Icon)

new Vue({
    el: '#app',
    router,
    components: { App }
});