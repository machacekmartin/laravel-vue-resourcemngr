<template>
    <div class="page">  
        <div class="page__header">
            <h1>Editor's page</h1>
            <dropdown-input :options="[{text: 'Create Link',value: 'link',},{text: 'Create Pdf',value: 'file',},{text: 'Create Code',value: 'code'}]" @update="openModalForm" name="create" title="Create resource"></dropdown-input>
        </div>
        <div class="page__mt-2">
            <search @keypress="setSearch"></search>
        </div>
        <div class="page__mt-2">
            <resources-layout type="grid" :items="resources"></resources-layout>
        </div>
        <transition name="fade">
            <modal-form v-if="isModalActive"></modal-form>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getResourcesWithString  } from '../helpers/search'
import Search from '../components/Search.vue'
import ResourcesLayout from '../components/ResourcesLayout.vue'
import ModalForm from '../components/ModalForm.vue'

import DropdownInput from '../components/inputs/DropdownInput.vue'

export default {
    components: {
        Search,
        ResourcesLayout,
        ModalForm,
        DropdownInput,
    },
    data(){
        return {
            searchString: '',
        }
    },    
    computed: {
        ...mapGetters('modal', ['isModalActive']),
        ...mapGetters('links', ['getLinks']),
        ...mapGetters('files', ['getFiles']),
        ...mapGetters('codes', ['getCodes']),

        resources(){
            const combinedResources = [...this.getLinks, ...this.getCodes, ...this.getFiles]
            return getResourcesWithString(combinedResources, this.searchString)
        }
    },
    methods: {
        ...mapActions('modal', ['ActivateModal']),

        openModalForm(target){
            this.ActivateModal({type: 'create', purpose: target.value})
        },

        setSearch(string){
            this.searchString = string
        },
    },
}
</script>