import Vue from 'vue'
import VueRouter from 'vue-router'

import axios from 'axios'
import router from './router'
import App from './App.vue'

import Checkbox from './components/Checkbox.vue'
import PlainButton from './components/PlainButton.vue'
import IconButton from './components/IconButton.vue'
import Sticker from './components/Sticker.vue'
import Icon from './components/Icon.vue'

Vue.use(VueRouter)

Vue.prototype.$http = axios

Vue.component('plain-button', PlainButton)
Vue.component('icon-button', IconButton)
Vue.component('sticker', Sticker)
Vue.component('checkbox', Checkbox)
Vue.component('icon', Icon)

new Vue({
    el: '#app',
    router,
    components: { App }
});