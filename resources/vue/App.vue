<template>
    <div class="app">
        <router-view v-if="isReady"></router-view>
        <loading v-else></loading>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'app',
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