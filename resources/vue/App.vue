<template>
    <div class="app">
        <router-view v-if="isReady"></router-view>
        <loading v-else></loading>
        <navbar></navbar>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from './components/Navbar.vue'
export default {
    name: 'app',
    components: {
        Navbar
    },
    computed: {
        ...mapGetters('links', ['getLinks']),
        ...mapGetters('files', ['getFiles']),
        ...mapGetters('codes', ['getCodes']),
        
        isReady(){
            return this.getLinks && this.getFiles && this.getCodes
        }
    },
    methods: {
        ...mapActions('links', ['LoadLinks']),
        ...mapActions('files', ['LoadFiles']),
        ...mapActions('codes', ['LoadCodes']),
    },
    async mounted(){
        this.LoadLinks()
        this.LoadFiles()
        this.LoadCodes()
    }
};
</script>