<template>
    <label class="input input--spacing input-checkbox checkbox" :class="['checkbox--'+ type, isActive ? 'checkbox--active' : '']">
        <span class="checkbox__text">{{ title }}</span>
        <icon class="checkbox__icon" icon="checkmark" :width="15" :height="15"></icon>
        <input class="checkbox__input" type="checkbox" @change="toggleIsActive">
    </label>
</template>

<script>
    export default {
        name: 'CheckboxInput',
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            value: {
                type: Boolean,
                required: false
            },
            type: {
                type: String,
                default: 'link'
            }
        },
        data() {
            return {
                isActive: this.value ? this.value : false,
            };
        },
        watch: {
            isActive() {
                this.$emit('update', {
                    name: this.name,
                    value: this.isActive === this.value ? null : this.isActive
                });
            }
        },
        methods: {
            toggleIsActive() {
                this.isActive = !this.isActive;
            }
        }
    };

</script>
