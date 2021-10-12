<template>
    <div class="input input-text">
        <p class="input__title">{{ title }}</p>    
        <template v-if="value">
            <div v-if="editing" class="input-text__wrapper">
                <input type="text" class="input-text__field" v-model="localValue"/>  
                <icon-button class="input-text__icon" icon="cross" :iconSize="12" colorMode="white" @click="toggleEdit()"></icon-button>
            </div>
            <div v-else class="input-text__placeholder input-text__field" @click="toggleEdit()">
                <span class="input-text__text">{{ value }}</span>
                <icon class="input-text__icon input-text__icon--simple" icon="edit" :width="16" :height="18"></icon>
            </div>
        </template>
        <template v-else>
            <div class="input-text__wrapper">
                <input type="text" class="input-text__field" v-model="localValue"/>  
                <icon-button v-if="localValue" class="input-text__icon" icon="cross" :iconSize="12" colorMode="white" @click="clear()"></icon-button>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'TextInput',
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
                type: String,
                required: false
            }
        },
        data() {
            return {
                localValue: null,
                editing: false
            };
        },
        watch: {
            localValue() {
                this.$emit('update', {
                    name: this.name,
                    value: this.localValue === this.value ? null : this.localValue
                });
            }
        },
        methods: {
            clear(){
                this.localValue = null
            },
            toggleEdit() {
                this.localValue = this.value;
                this.editing = !this.editing;
            }
        }
    };

</script>
