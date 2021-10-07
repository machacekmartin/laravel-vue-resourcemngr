<template>
    <button class="plain-button" :class="dark ? 'plain-button--dark' : 'plain-button--light'">
        {{ uppercase ? text.toUpperCase() : text }}
    </button>
</template>

<script>
export default {
    name: 'PlainButton',
    props: {
        text: {
            type: String,
            required: true
        },
        dark: {
            type: Boolean,
            default: false
        },
        uppercase: {
            type: Boolean,
            default: false
        }
    }
}
</script>