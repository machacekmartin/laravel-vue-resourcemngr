<template>
    <div class="input input-snippet">
        <p class="input__title">{{ title }}</p>    
        <template v-if="value">
            <div v-if="editing || !value" class="input-snippet__wrapper">
                <textarea ref="snippet" type="text" class="input-snippet__field" v-model="localValue" @keydown.tab.prevent="tab"></textarea>
                <icon-button class="input-snippet__icon" icon="cross" :iconSize="12" colorMode="white" @click="toggleEdit()"></icon-button>
            </div>
            <div v-else class="input-snippet__placeholder" @click="toggleEdit()">
                <pre class="input-snippet__code">{{ value }}</pre>
                <icon class="input-snippet__icon input-snippet__icon--simple" icon="edit" :width="16" :height="18"></icon>
            </div>        
        </template>
        <template v-else>
            <div class="input-snippet__wrapper">
                <textarea ref="snippet" type="text" class="input-snippet__field" v-model="localValue" @keydown.tab.prevent="tab"></textarea>
                <icon-button v-if="localValue" class="input-snippet__icon" icon="cross" :iconSize="12" colorMode="white" @click="clear()"></icon-button>
            </div>
        </template>
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
            tab(event){
                const selection = event.target.selectionStart
                this.localValue = this.localValue.substring(0, selection) + '\t' + this.localValue.substring(selection);

                let snippet = this.$refs.snippet;
                this.$nextTick(() => {
                    snippet.focus()
                    snippet.setSelectionRange(selection + 1, selection + 1)
                })
            },
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
