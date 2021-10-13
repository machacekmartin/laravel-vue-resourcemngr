<template>
    <div class="page">  
        <div class="page__header">
            <h1>Resources</h1>
        </div>
        <div class="page__mt-2">
            <search @keypress="setSearch"></search>
        </div>
        
        <div class="page__mt-2">
            <checkbox-input type="code" title="CODE" name="filter" @update="toggleFilter('code')" :value="1"></checkbox-input>
            <checkbox-input type="file" title="FILE" name="filter" @update="toggleFilter('file')" :value="1"></checkbox-input>
            <checkbox-input type="link" title="LINK" name="filter" @update="toggleFilter('link')" :value="1"></checkbox-input>
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
import CheckboxInput from '../components/inputs/CheckboxInput.vue'
import ResourcesLayout from '../components/ResourcesLayout.vue'

export default {
    components: {
        Search,
        ResourcesLayout,
        CheckboxInput
    },
    data(){
        return {
            searchString: '',
            activeFilters: ['code', 'file', 'link'],
        }
    },
    computed: {
        ...mapGetters('links', ['getLinks']),
        ...mapGetters('files', ['getFiles']),
        ...mapGetters('codes', ['getCodes']),

        resources(){
            const sortedResources = [...this.getLinks, ...this.getCodes, ...this.getFiles].sort((f, s) => s.created_at - f.created_at)
            const filteredResources = getResourcesByTypes(sortedResources, this.activeFilters);
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
}
</script>