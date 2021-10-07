<template>
    <button class="icon-button" :class="dark ? 'icon-button--dark' : 'icon-button--light'">
        <span class="icon-button__text">{{ text }}</span>
        <div class="icon-button__icon">
            <icon name="edit" :width="20" :height="20"></icon>
        </div>
    </button>
</template>

<script>
export default {
    name: 'IconButton',
    props: {
        text: {
            type: String,
            required: true
        },
        dark: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script>