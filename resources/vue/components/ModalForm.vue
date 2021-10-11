<template>
    <div class="modal">
        <div class="modal__content">
            <div class="modal__header">
                <h2 class="modal__title">TADY BUDE NEJAKY TITLE</h2>
                <icon-button class="modal__button" colorMode="dark" icon="cross" :iconSize="15" @click="cancel()"></icon-button>
            </div>
            <div class="modal__window">
                <component v-for="(input, index) in inputs" :is="input.component + '-input'" :name="input.name" :title="input.description" :key="index" @update="UpdateFormData" :value="currentInputValue(input)"></component>
            </div>
            <div class="modal__footer">
                <icon-button v-if="getModalType === 'edit'" class="modal__button" text="Delete" colorMode="ruby" :iconSize="18" @click="remove()"></icon-button>
                <icon-button class="modal__button" colorMode="blue" text="Create" icon="checkmark" :iconSize="16" @click="submit()"></icon-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TextInput from '../components/TextInput.vue'
import SnippetInput from '../components/SnippetInput.vue'

export default {
    name: 'Modal',
    components: {
        TextInput,
        SnippetInput
    },
    props: {
        inputs: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentResource: null,
            formData: new FormData()
        };
    },
    computed: {
        ...mapGetters('modal', ['getModalType', 'getModalInputData'])
        
    },
    methods: {
        ...mapActions('modal', ['DeactivateModel', 'UpdateFormData']),

        currentInputValue(input){
            return this.getModalInputData ? this.getModalInputData[input.name] : null
        },

        remove(){
            this.DeactivateModel()
            this.$emit('delete')
        },
        cancel(){
            this.DeactivateModel()
        },
        submit(){
            this.DeactivateModel()
            this.$emit('submit')
        }
    },
    mounted(){

        //get item from vuex link/file/snippet by checking modal vuex purpose if in edit type
    }
};
</script>
