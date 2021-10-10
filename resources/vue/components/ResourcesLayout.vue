<template>
    <div :class="'resources-' + type">   
        <component :is="'resources-' + type + '-item'" v-for="(item, index) in items" :key="index" :data="item"></component>
    </div>
</template>
<script>
import ResourcesListItem from './ResourcesListItem.vue'
import ResourcesGridItem from './ResourcesGridItem.vue'

export default {
    name: 'ResourcesLayout',
    components: {
        ResourcesListItem,
        ResourcesGridItem
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        type: {
            //grid is for editing, list is for public access
            type: String,
            required: true,
            validator: value => {
                return (['grid', 'list'].includes(value))
            }
        }
    },
}
</script>