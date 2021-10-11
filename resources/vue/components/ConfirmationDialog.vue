<template>
    <div class="modal">
    
    </div>
</template>

<script>
export default {
    name: 'ConfirmationDialog',
    props: {
    },
    methods: {
        emitClick(){
            this.$emit('click')
        }
    }
}
</script>