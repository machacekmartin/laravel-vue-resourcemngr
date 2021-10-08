<template>
    <div class="resources-item">
        <div class="resources-item__header">
            <sticker class="resource-item__sticker" :text="data.type"></sticker>
            <h4 class="resources-item__title">{{ data.title }}</h4>
            <div class="resources-item__buttons">
                <template v-if="data.type == 'code'">
                    <icon-button class="resources-item__button" text="Copy" icon="edit" :iconSize="16" colorMode="dark"></icon-button>
                    <icon-button class="resources-item__button" icon="plus" :iconSize="16" colorMode="white" @click="toggleShowSnippet()"></icon-button>
                </template>
                
                <template v-if="data.type == 'link'">
                    <icon-button  class="resources-item__button" :text="data.link" :icon="data.newTab ? 'next': 'cross' " :iconSize="16" colorMode="blue" @click="openLink(data.link, data.newTab)"></icon-button>
                </template>

                <template v-if="data.type == 'pdf'">
                    <icon-button class="resources-item__button" text="Download" icon="cross" :iconSize="13" colorMode="dark"></icon-button>
                    <plain-button class="resources-item__button" text="Preview" @click="toggleShowPreview()"></plain-button>
                </template>
            </div>
        </div>
        <transition name="fade" v-if="data.type == 'code'">
            <div class="resources-item__addition" v-if="showSnippet">
                <p>{{ data.description }}</p>
                <code-snippet :content="data.snippet"></code-snippet>
            </div>
        </transition>
        <transition name="fade" v-if="data.type == 'pdf'">
            <template v-if="showPreview">
                <file-preview class="resources-item__addition resources-item__preview" :file="data.file"></file-preview>
            </template>
        </transition>
    </div>
</template>
<script>
import CodeSnippet from './CodeSnippet.vue'
import FilePreview from './FilePreview.vue'

export default {
    name: 'ResourcesItem',
    components: {
        CodeSnippet,
        FilePreview
    },
    props: {
        data: {
            type: Object,
            required: true
        },
    },
    data(){
        return {
            showSnippet: false,
            showPreview: false
        }
    },
    methods: {
        openLink(link, newTab){
            if (newTab){
                window.open(link)
            }
            else{
                window.open(link, '_self')
            }
        },
        toggleShowSnippet(){
            this.showSnippet = !this.showSnippet
        },
        toggleShowPreview(){
            this.showPreview = !this.showPreview
        }
    }
}
</script>