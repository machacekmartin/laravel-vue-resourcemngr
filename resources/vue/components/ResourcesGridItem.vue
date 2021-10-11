<template>
    <div class="resources-grid-item">
        <h4 class="resources-grid-item__title">{{ data.title }}</h4>
        <div class="resources-grid-item__body">
            <sticker class="resources-grid-item__sticker" :type="data.type" :text="data.type"></sticker>
            <icon-button class="resources-grid-item__button" @click="openEditModal(data.id)" text="Edit" icon="edit" :iconSize="18" colorMode="dark"></icon-button>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'ResourcesGridItem',
    props: {
        data: {
            type: Object,
            required: true
        },
    },
    computed: {
        ...mapGetters('modal', ['getModalPurpose']),
        ...mapGetters('links', ['getLink']),
        ...mapGetters('files', ['getFile']),
        ...mapGetters('codes', ['getCode'])
    },
    methods: {
        ...mapActions('modal', ['ActivateModal']),
        
        openEditModal(id){
            let resource;
            switch(this.data.type){
                case 'link':
                    resource = this.getLink(id)
                    break
                case 'file':
                    resource = this.getFile(id)
                    break
                case 'code':
                    resource = this.getCode(id)
                    break
            }            
            this.ActivateModal({type: 'edit', purpose: this.data.type, inputData: resource})
        },
    }

}
</script>