<template>
    <div class="input">
        <div class="input input-snippet">
            <p>{{ title }}</p>
            <input type="text" v-model="localValue" :placeholder="value" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SnippetInput',
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
                localValue: '',
                editing: false
            };
        },
        watch: {
            localValue() {
                this.$emit('update', {
                    name: this.data.name,
                    value: this.localValue
                });
            }
        },
        methods: {
            toggleEdit() {
                this.localValue = this.value;
                this.editing = !this.editing;
                this.localValue = this.value;
            }
        }
    };

</script>
