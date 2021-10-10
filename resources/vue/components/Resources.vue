<template>
    <div class="resources">  
        <search class="resources__search" @keypress="setSearch"></search>
        
        <div class="resources__filters">
            <checkbox class="resources__filter" type="code" @toggled="toggleFilter('code')"></checkbox>
            <checkbox class="resources__filter" type="pdf" @toggled="toggleFilter('pdf')"></checkbox>
            <checkbox class="resources__filter" type="link" @toggled="toggleFilter('link')"></checkbox>
        </div>
        
         <resources-layout type="list" :items="foundResources"></resources-layout>
    </div>
</template>

<script>
import Search from '../components/Search.vue'
import ResourcesLayout from '../components/ResourcesLayout.vue'

export default {
    components: {
        Search,
        ResourcesLayout
    },
    props: {
        resources: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            search: '',
            activeFilters: [],
        }
    },
    computed: {
        foundResources(){
            if (this.search !== ''){
                return this.filteredResources.filter(resource => {
                    return resource.title.includes(this.search) || 
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