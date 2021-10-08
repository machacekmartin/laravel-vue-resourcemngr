<template>
    <button class="icon-button" :class="'icon-button--'+ colorMode" @click="emitClick()" aria-label="button">
        <div v-if="text" class="icon-button__content">
            <span class="icon-button__text">{{ text }}</span>
        </div>
        <div class="icon-button__icon">
            <icon :icon="icon" :width="iconSize" :height="iconSize"></icon>
        </div>
    </button>
</template>

<script>
export default {
    name: 'IconButton',
    props: {
        iconSize: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            required: false
        },
        colorMode: {
            type: String,
            default: 'dark'
        },
        icon: {
            type: String,
            required: true
        }
    },
    methods: {
        emitClick(){
            this.$emit('click')
        }
    }
}
</script>