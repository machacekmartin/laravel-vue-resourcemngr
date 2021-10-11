import Vue from 'vue'

import axios from 'axios'
import store from './store'
import router from './router'

import App from './App.vue'

import Checkbox from './components/Checkbox.vue'
import IconButton from './components/IconButton.vue'
import Sticker from './components/Sticker.vue'
import Icon from './components/Icon.vue'

Vue.prototype.$http = axios

Vue.component('icon-button', IconButton)
Vue.component('sticker', Sticker)
Vue.component('checkbox', Checkbox)
Vue.component('icon', Icon)

new Vue({
    el: '#app',
    router,
    store,
    components: { App }
});