<template>
    <div class="resource-item">
        <sticker :text="type"></sticker>
        <span class="resource-item__title">{{ text }}</span>

        <div class="resource-item__buttons">
        
            <template v-if="type=='pdf'">
                <icon-button style="margin-right: 1rem" text="Download" icon="cross" :iconSize="13" colorMode="dark"></icon-button>
                <plain-button text="Preview" :dark="true"></plain-button>
            </template>

            <template v-if="type=='code'">
                <icon-button style="margin-right: 1rem" text="Copy" icon="edit" :iconSize="16" colorMode="dark"></icon-button>
                <icon-button icon="plus" :iconSize="16" colorMode="white"></icon-button>
            </template>

            <template v-if="type=='link'">
                <icon-button :text="link" icon="next" :iconSize="16" colorMode="blue"></icon-button>
            </template>
        </div>
    </div>
</template>
<script>
import PlainButton from './PlainButton.vue'
import IconButton from './IconButton.vue'
import Sticker from './Sticker.vue'

export default {
    name: 'Resource',
    components: {
        PlainButton,
        IconButton,
        Sticker
    },
    props: {
        data: {
            type: Object,
            required: true
        },
    },
    computed: {
        type(){
            return this.data.type
        },
        text(){
            return this.data.text
        },
        link(){
            return this.data.link
        }
    }
}
</script>