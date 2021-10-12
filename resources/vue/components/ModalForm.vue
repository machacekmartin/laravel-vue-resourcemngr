<template>
    <div class="modal">
        <div class="modal__content">
            <div class="modal__header">
                <h2 class="modal__title">TADY BUDE NEJAKY TITLE</h2>
                <icon-button class="modal__button" colorMode="dark" icon="cross" :iconSize="14" @click="cancel()"></icon-button>
            </div>
            <form class="modal__window">
                <component v-for="(input, index) in getModalInputs" :is="input.component + '-input'" :name="input.name" :title="input.description" :key="index" @update="UpdateFormData" :value="getCurrentData(input)" :error="getCurrentError(input)"></component>
            </form>
            <div class="modal__footer">
                <template v-if="getModalType === 'edit'">
                    <icon-button class="modal__button" text="Delete forever" colorMode="ruby" :iconSize="18" @click="remove()"></icon-button>
                    <icon-button class="modal__button" colorMode="blue" text="Confirm edit" icon="checkmark" :iconSize="16" @click="edit()"></icon-button>
                </template>
                <template v-if="getModalType === 'create'">
                    <icon-button class="modal__button" colorMode="blue" text="Create" icon="checkmark" :iconSize="16" @click="create()"></icon-button>
                </template>    
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TextInput from '../components/inputs/TextInput.vue'
import SnippetInput from '../components/inputs/SnippetInput.vue'
import TextareaInput from '../components/inputs/TextareaInput.vue'
import CheckboxInput from '../components/inputs/CheckboxInput.vue'
import FileInput from '../components/inputs/FileInput.vue'

export default {
    name: 'Modal',
    components: {
        TextInput,
        SnippetInput,
        TextareaInput,
        CheckboxInput,
        FileInput
    },
    data() {
        return {
            formData: new FormData(),
            errors: null 
        };
    },
    computed: {
        ...mapGetters('modal', ['getModalType', 'getModalInputs', 'getModalInputData', 'getModalFormData', 'getModalPurpose']),
    },
    methods: {
        ...mapActions('modal', ['DeactivateModal', 'UpdateFormData']),
        getCurrentData(input){
            return this.getModalInputData ? this.getModalInputData[input.name] : null
        },
        getCurrentError(input){
            return this.errors ? this.errors[input.name] : null
        },

        cancel(){
            this.DeactivateModal()
        },
        async remove(){
            this.$emit('delete', this.getModalInputData)
        },
        async edit(){

        },
        async create(){
            //loading = true
            let response
            switch(this.getModalPurpose){
                case 'link':
                    response = await this.CreateLink(this.getModalFormData)
                    break
                case 'file':
                    response = await this.CreateFile(this.getModalFormData)
                    break
                case 'code':
                    response = await this.CreateCode(this.getModalFormData)
                    break
            //loading = false
            }
            /*if (response.NOT OK){
                response.errors
            }*/
        }
    },
};
</script>
