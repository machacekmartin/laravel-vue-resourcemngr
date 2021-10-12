<template>
    <div class="modal">
        <div class="modal__content">
            <div class="modal__header">
                <h2 class="modal__title">{{ getTitleByModalType }}</h2>
                <icon-button class="modal__button" colorMode="dark" icon="cross" :iconSize="14" @click="cancel()"></icon-button>
            </div>
            <form class="modal__window">
                <loading v-if="getIsLoading"></loading>
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
import Loading from '../components/Loading.vue'
import TextInput from '../components/inputs/TextInput.vue'
import SnippetInput from '../components/inputs/SnippetInput.vue'
import TextareaInput from '../components/inputs/TextareaInput.vue'
import CheckboxInput from '../components/inputs/CheckboxInput.vue'
import FileInput from '../components/inputs/FileInput.vue'

export default {
    name: 'Modal',
    components: {
        Loading,
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
        ...mapGetters('loading', ['getIsLoading']),
        getTitleByModalType(){
            return this.getModalType.toUpperCase() + ' ' +  this.getModalPurpose.toUpperCase()
        }
    },
    methods: {
        ...mapActions('loading', ['SetLoading']),
        ...mapActions('modal', ['DeactivateModal', 'UpdateFormData']),
        ...mapActions('links', ['CreateLink', 'DeleteLink', 'EditLink']),
        ...mapActions('codes', ['CreateCode', 'DeleteCode', 'EditCode']),
        ...mapActions('files', ['CreateFile', 'DeleteFile', 'EditFile']),
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
            this.SetLoading(true)
            const id = this.getModalInputData['id'];
            console.log(id);
            let response
            switch(this.getModalPurpose){
                case 'link':
                    response = await this.DeleteLink(id)
                    break
                case 'file':
                    response = await this.DeleteFile(id)
                    break
                case 'code':
                    response = await this.DeleteCode(id)
                    break
            }
        },
        async edit(){
            this.SetLoading(true)
            //loading = true
            let response
            switch(this.getModalPurpose){
                case 'link':
                    response = await this.EditLink(this.getModalFormData)
                    break
                case 'file':
                    response = await this.EditFile(this.getModalFormData)
                    break
                case 'code':
                    response = await this.EditCode(this.getModalFormData)
                    break
            //loading = false
            }
            this.errors = {
                'title': 'required' 
            }
        },
        async create(){
            this.SetLoading(true)
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
