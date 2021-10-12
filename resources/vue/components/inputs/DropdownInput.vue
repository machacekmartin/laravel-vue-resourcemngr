<template>
    <div class="input">
        <div class="input input-dropdown">
            <button type="button" class="input-dropdown__toggle" @click="toggleDropdown">
                <span class="input-dropdown__text"> {{ title }} </span>
                <icon icon="plus" :width="16" :height="16"></icon>
            </button>

            <ul class="input-dropdown__list" v-if="dropdownActive">
                <li class="input-dropdown__item" v-for="(option, index) in options" :key="index" @click="updateActiveItem(option)">
                    {{ option.text }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: false
            },
            options: {
                type: Array,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: false
            }
        },
        data() {
            return {
                retrievedOptions: null,
                dropdownActive: false,
                activeItem: null
            };
        },
        watch: {
            activeItem(){
                this.$emit("update", {
                    name: this.name,
                    value: this.activeItem.value
                });
            }
        },
        methods: {
            updateActiveItem(item){
                this.activeItem = item
                this.toggleDropdown()
            },
            toggleDropdown() {
                this.dropdownActive = !this.dropdownActive;
            },
        }
    };

</script>
