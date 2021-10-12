<template>
    <div class="search">
        <icon class="search__icon" icon="search" :width="20" :height="20"></icon>
        <input class="search__input" placeholder="Search by keyword or something.." v-model="input">
    </div>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return {
            input: ''
        }
    },
    watch: {
        input(){
            this.$emit('keypress', this.input);
        }
    },
}
</script>