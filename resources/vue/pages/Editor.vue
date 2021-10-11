<template>
    <div class="page">  
        <p>Editor</p>
        <div>
            Dropdown create new: 
            <button @click="ActivateModal({type:'create', purpose: 'link'})">create Link</button>
            <button @click="ActivateModal({type:'create', purpose: 'file'})">create Pdf</button>
            <button @click="ActivateModal({type:'create', purpose: 'code'})">create Code</button>
        </div>
        <modal-form v-if="isModalActive" @submit="submitModalForm" @delete="deleteResource" :inputs="inputsByModalPurpose"></modal-form>
        <resources-layout type="grid" :items="combinedResources"></resources-layout>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ResourcesLayout from '../components/ResourcesLayout.vue'
import ModalForm from '../components/ModalForm.vue'

import LinkFormModel from '../models/link-form-model'
import CodeFormModel from '../models/code-form-model'
import FileFormModel from '../models/file-form-model'

export default {
    components: {
        ResourcesLayout,
        ModalForm,
    },
    computed: {
        ...mapGetters('modal', ['isModalActive', 'getModalPurpose']),
        ...mapGetters('links', ['getLinks']),
        ...mapGetters('files', ['getFiles']),
        ...mapGetters('codes', ['getCodes']),

        inputsByModalPurpose(){
            switch(this.getModalPurpose){
                case 'link':
                    return LinkFormModel
                case 'code':
                    return CodeFormModel
                case 'file':
                    return FileFormModel
                default:
                    return null
            }
        },

        combinedResources(){
            return [...this.getLinks, ...this.getCodes, ...this.getFiles]
        }
    },
    methods: {
        ...mapActions('modal', ['ActivateModal', 'DeactivateModel']),

        submitModalForm(data){

        },

        createResource(data){
            console.log(data)
        }, 
        editResource(data){
            console.log(data)
        },

        deleteResource(data){
            console.log(data)
        },
    },
    data(){
        return {
            existingData: Object,
            createModalActive: false,
        }
    },
}
</script>