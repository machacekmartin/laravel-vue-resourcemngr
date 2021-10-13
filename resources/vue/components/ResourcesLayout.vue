<template>
    <div :class="'resources-layout resources-layout--' + type">   
        <template v-if="items.length">
            <component  :is="'resources-' + type + '-item'" v-for="(item, index) in items" :key="index" :data="item"></component>
        </template>
        <template v-else>
            <div class="resources-layout__placeholder">
                <span class="resources-layout__text" icon="search">Nothing here.. yet</span>
            </div>
        </template>
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