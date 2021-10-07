<template>
    <div class="page">  
        <div class="resources">
            <div class="resources__header">
                <h1 class="resources__title">Resources</h1>
                    <checkbox class="resources__filter" type="code" @toggled="toggleFilter('code')"></checkbox>
                    <checkbox class="resources__filter" type="pdf" @toggled="toggleFilter('pdf')"></checkbox>
                    <checkbox class="resources__filter" type="link" @toggled="toggleFilter('link')"></checkbox>
            </div>
            <search style="margin-bottom: 2rem" @keypress="setSearch"></search>
            <resource-item v-for="resource in foundResources" :key="resource.text" :data="resource"></resource-item>
        </div>
    </div>
</template>

<script>
import ResourceItem from '../components/ResourceItem.vue'
import Search from '../components/Search.vue'
import Checkbox from '../components/Checkbox.vue'

export default {
    components: {
        ResourceItem,
        Search,
        Checkbox
    },
    data(){
        return {
            search: '',
            resources: [
                {
                    type: 'pdf',
                    text: 'My first oficial PDF document'
                },
                {
                    type: 'code',
                    text: 'hey1'
                },
                {
                    type: 'pdf',
                    text: 'hey2'
                },
                {
                    type: 'link',
                    text: 'hey3',
                    link: 'https://www.gogle.com/docs/documents/'
                },
                {
                    type: 'link',
                    text: 'ASD NKASD JNKLASD JNKL ASDKJNASD JNKASD jnklasd ',
                    link: 'https://www.gogle.com/docs/documents/awdjnawd'
                },
            ],
            
            activeFilters: [],
        }
    },
    computed: {
        foundResources(){
            if (this.search !== ''){
                return this.filteredResources.filter(resource => {
                    return resource.text.includes(this.search) || 
                    resource.type.includes(this.search) ||
                    resource.link?.includes(this.search)
                })
            }
            return this.filteredResources;
        },
        filteredResources(){
            return this.resources.filter(resource => {
                return this.activeFilters.includes(resource.type)
            })
        }
    },
    methods: {
        toggleFilter(toggledFilter){
            if (this.activeFilters.includes(toggledFilter)){
                const index = this.activeFilters.indexOf(toggledFilter)
                this.activeFilters.splice(index, 1)
            }
            else{
                this.activeFilters.push(toggledFilter)
            }
        },
        setSearch(search){
            this.search = search
        },
    },
    mounted(){
        this.activeFilters = [... new Set(this.resources.map(res => res.type))]
    }
}
</script>