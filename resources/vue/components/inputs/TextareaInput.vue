<template>
    <div class="input input-textarea">
        <p class="input__title">{{ title }}</p>    
        <template v-if="value">
            <div v-if="editing || !value" class="input-textarea__wrapper">
                <textarea ref="textarea" type="text" class="input-textarea__field" v-model="localValue"></textarea>
                <icon-button class="input-textarea__icon" icon="cross" :iconSize="12" colorMode="white" @click="toggleEdit()"></icon-button>
            </div>
            <div v-else class="input-textarea__placeholder" @click="toggleEdit()">
                <span>{{ value }}</span>
                <icon class="input-textarea__icon input-textarea__icon--simple" icon="edit" :width="16" :height="18"></icon>
            </div>        
        </template>
        <template v-else>
            <div class="input-textarea__wrapper">
                <textarea ref="textarea" type="text" class="input-textarea__field" v-model="localValue" @keydown.tab.prevent="hey"></textarea>
                <icon-button v-if="localValue" class="input-textarea__icon" icon="cross" :iconSize="12" colorMode="white" @click="clear()"></icon-button>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'TextareaInput',
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
