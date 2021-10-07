<template>
    <label class="checkbox" :class="['checkbox--'+ type, isActive ? 'checkbox--active' : '']">
        <span class="checkbox__text">{{ type.toUpperCase() }}</span>
        <icon class="checkbox__icon" icon="checkmark" :width="15" :height="15"></icon>
        <input class="checkbox__input" type="checkbox" @change="toggle">
    </label>
</template>

<script>
export default {
    name: 'Checkbox',
    props: {
        type: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            isActive: true
        }
    },
    methods: {
        toggle(){
            this.isActive = !this.isActive
            this.$emit('toggled')
        },
    }
}
</script>