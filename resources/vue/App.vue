<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'app',
    methods: {
        ...mapActions('links', ['LoadLinks']),
        ...mapActions('files', ['LoadFiles']),
        ...mapActions('codes', ['LoadCodes']),
    },
    mounted(){
        this.LoadLinks()
        this.LoadFiles()
        this.LoadCodes()
    }
};
</script>