<template>
    <span class="sticker" :class="'sticker--'+ getTypeByText">
        {{ text.toUpperCase() }}
    </span>
</template>

<script>
export default {
    name: 'Sticker',
    props: {
        text: {
            type: String,
            required: true
        },
    },
    computed: {
        getTypeByText(){
            switch(this.text){
                case 'pdf':
                    return 'orange'
                case 'link':
                    return 'pink'
                case 'code':
                    return 'blue'
                default:
                    return 'dark'
            }
        }
    }
}
</script>