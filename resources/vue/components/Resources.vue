<template>
    <div class="resources">  

    </div>
</template>

<script>
import Search from '../components/Search.vue'
import ResourcesLayout from '../components/ResourcesLayout.vue'
import { getResourcesWithString } from '../helpers/search'

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
            return getResourcesWithString(this.filteredResources, this.search)
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