import Vue from 'vue'

import store from './store'
import router from './router'

import App from './App.vue'

import Loading from './components/Loading.vue'
import IconButton from './components/IconButton.vue'
import Sticker from './components/Sticker.vue'
import Icon from './components/Icon.vue'

Vue.component('loading', Loading)
Vue.component('icon-button', IconButton)
Vue.component('sticker', Sticker)
Vue.component('icon', Icon)

new Vue({
    el: '#app',
    router,
    store,
    components: { App }
});