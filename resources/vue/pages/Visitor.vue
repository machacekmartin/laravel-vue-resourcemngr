<template>
    <div>  
        <plain-button text="Create"></plain-button>
        <icon-button text="Download" icon="copy"></icon-button>
    </div>
</template>

<script>
import PlainButton from '../components/PlainButton.vue'
import IconButton from '../components/IconButton.vue'

export default {
    components: {
        PlainButton,
        IconButton
    },
    mounted() {
        console.log('Visitor page mounted.')
    }
}
</script>