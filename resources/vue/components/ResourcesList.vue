<template>
    <div class="resources-list">   
        <resources-item v-for="(item, index) in items" :key="index" :data="item"></resources-item>
    </div>
</template>
<script>
import ResourcesItem from './ResourcesItem.vue'

export default {
    name: 'ResourcesList',
    components: {
        ResourcesItem,
    },
    props: {
        items: {
            type: Array,
            required: true
        },
    },
}
</script>