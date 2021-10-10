<template>
    <div class="resources-grid-item">
        {{ data.title }}
        <icon-button @click="edit()" icon="edit" :iconSize="18"></icon-button>
        <icon-button @click="remove()" icon="trash" :iconSize="18"></icon-button>
    </div>
</template>
<script>


export default {
    name: 'ResourcesGridItem',
    props: {
        data: {
            type: Object,
            required: true
        },
    },

    // Editor-related methods need to happen HERE, NOT IN RESOURCESLAYOUT!!!
    methods: {
        edit(){
            // open editing modal from vuex
            this.$emit('edit')
        },
    }

}
</script>