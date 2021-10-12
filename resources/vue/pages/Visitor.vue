<template>
    <div class="page">  
        <div class="page__header">
            <h1>Resources</h1>
        </div>
        <div class="page__mt-2">
            <search @keypress="setSearch"></search>
        </div>
        
        <div class="page__mt-2">
            <checkbox type="code" @toggled="toggleFilter('code')"></checkbox>
            <checkbox type="file" @toggled="toggleFilter('file')"></checkbox>
            <checkbox type="link" @toggled="toggleFilter('link')"></checkbox>
        </div>
        <div class="page__mt-1">
            <resources-layout type="list" :items="resources"></resources-layout>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getResourcesWithString, getResourcesByTypes  } from '../helpers/search'
import Search from '../components/Search.vue'

import ResourcesLayout from '../components/ResourcesLayout.vue'

export default {
    components: {
        Search,
        ResourcesLayout
    },
    data(){
        return {
            searchString: '',
            activeFilters: [],
        }
    },
    computed: {
        ...mapGetters('links', ['getLinks']),
        ...mapGetters('files', ['getFiles']),
        ...mapGetters('codes', ['getCodes']),

        combinedResources(){
            return [...this.getLinks, ...this.getCodes, ...this.getFiles]
        },
        resources(){
            const filteredResources = getResourcesByTypes(this.combinedResources, this.activeFilters);
            return getResourcesWithString(filteredResources, this.searchString)
        }
    },
    methods: {
        setSearch(string){
            this.searchString = string
        },
        toggleFilter(toggledFilter){
            if (this.activeFilters.includes(toggledFilter)){
                const index = this.activeFilters.indexOf(toggledFilter)
                this.activeFilters.splice(index, 1)
            }
            else{
                this.activeFilters.push(toggledFilter)
            }
        },
    },
    mounted(){
        this.activeFilters = [... new Set(this.combinedResources.map(res => res.type))]
    }
}
</script>