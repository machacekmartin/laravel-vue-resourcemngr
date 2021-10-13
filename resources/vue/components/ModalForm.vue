<template>
    <div class="modal">
        <div class="modal__content">
            <div class="modal__header">
                <h2 class="modal__title">{{ getModalTitle }}</h2>
                <icon-button class="modal__button" colorMode="dark" icon="cross" :iconSize="14" @click="DeactivateModal()"></icon-button>
            </div>
            <form class="modal__window">
                <transition-group name="fade">
                    <loading key="loading" v-if="getIsLoading"></loading>
                    <checkmark key="checkmark" v-if="showCheckmark"></checkmark>
                </transition-group>
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

import Checkmark from '../components/Checkmark.vue'
import TextInput from '../components/inputs/TextInput.vue'
import SnippetInput from '../components/inputs/SnippetInput.vue'
import TextareaInput from '../components/inputs/TextareaInput.vue'
import CheckboxInput from '../components/inputs/CheckboxInput.vue'
import FileInput from '../components/inputs/FileInput.vue'

export default {
    name: 'Modal',
    components: {
        Checkmark,
        TextInput,
        SnippetInput,
        TextareaInput,
        CheckboxInput,
        FileInput
    },
    data() {
        return {
            formData: new FormData(),
            errors: [],
            showCheckmark: false
        };
    },
    computed: {
        ...mapGetters('modal', ['getModalType', 'getModalInputs', 'getModalInputData', 'getModalFormData', 'getModalPurpose']),
        ...mapGetters('loading', ['getIsLoading']),
        getModalTitle(){
            return this.getModalType.toUpperCase() + ' ' +  this.getModalPurpose.toUpperCase()
        }
    },
    methods: {
        ...mapActions('loading', ['SetLoading']),
        ...mapActions('modal', ['DeactivateModal', 'UpdateFormData']),
        ...mapActions('links', ['LoadLinks', 'CreateLink', 'DeleteLink', 'EditLink']),
        ...mapActions('codes', ['CreateCode', 'DeleteCode', 'EditCode']),
        ...mapActions('files', ['CreateFile', 'DeleteFile', 'EditFile']),
        getCurrentData(input){
            return this.getModalInputData ? this.getModalInputData[input.name] : null
        },
        getCurrentError(input){
            const errors = this.errors[input.name]
            return errors ? errors[0] : null
        },
        
        invokeModalApiAction(prefix, purpose, payload){
            this.SetLoading(true)
            // invoke Vuex Action f.e. this.EditLink(payload) or this.CreateFile(payload)
            this[prefix + purpose.charAt(0).toUpperCase() + purpose.slice(1)](payload).then(response => {
                this.errors = []
                this.showCheckmark = true
                this.SetLoading(false)
                setTimeout(() => {
                    this.showCheckmark = false
                    this.DeactivateModal()
                }, 1200)
            }).catch(error => {
                this.errors = error.response.data.errors
                this.SetLoading(false)
            })
        },

        async remove(){
            this.invokeModalApiAction("Delete", this.getModalPurpose, this.getModalInputData)
        },
        async edit(){
            this.invokeModalApiAction("Edit", this.getModalPurpose, {formData: this.getModalFormData, id: this.getModalInputData.id})
        },
        async create(){
            this.invokeModalApiAction("Create", this.getModalPurpose, this.getModalFormData)
        }
    },
};
</script>
