<template>
    <div class="resources-list-item">
        <div class="resources-list-item__header">
            <sticker class="resource-item__sticker" :text="data.type" :type="data.type"></sticker>
            <h4 class="resources-list-item__title">{{ data.title }}</h4>
            <div class="resources-list-item__buttons">
                <template v-if="data.type == 'code'">
                    <transition name="slide">
                        <icon icon="checkmark" v-if="showClipped" :width="14" :height="14" class="resources-list-item__button-popup"></icon>
                    </transition>
                    <icon-button class="resources-list-item__button" text="Copy" icon="copy" :iconSize="16" colorMode="dark" @click="copyToClipboard(data.snippet)"></icon-button>
                    <icon-button class="resources-list-item__button" :icon="showSnippet ? 'hide' : 'show'" :iconSize="20" colorMode="white" @click="toggleShowSnippet()"></icon-button>
                </template>
                
                <template v-if="data.type == 'link'">
                    <icon-button class="resources-list-item__button" :text="data.path" :icon="data.newtab ? 'newtab': 'next' " :iconSize="18" colorMode="blue" @click="openLink(data.path, data.newtab)"></icon-button>
                </template>

                <template v-if="data.type == 'file'">
                    <icon-button class="resources-list-item__button" text="Download" icon="download" :iconSize="20" colorMode="dark" @click="downloadFile(data.file)"></icon-button>
                    <icon-button class="resources-list-item__button" :icon="showPreview ? 'hide' : 'show'" :iconSize="20" colorMode="white" @click="toggleShowPreview()"></icon-button>
                </template>
            </div>
        </div>
        <transition name="fade" v-if="data.type == 'code'">
            <div class="resources-list-item__addition" v-if="showSnippet">
                <p>{{ data.description }}</p>
                <code-snippet :content="data.snippet"></code-snippet>
            </div>
        </transition>
        <transition name="fade" v-if="data.type == 'file'">
            <template v-if="showPreview">
                <file-preview class="resources-list-item__addition resources-list-item__preview" :file="data.file"></file-preview>
            </template>
        </transition>
    </div>
</template>
<script>
import CodeSnippet from './CodeSnippet.vue'
import FilePreview from './FilePreview.vue'

export default {
    name: 'ResourcesListItem',
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
            showPreview: false,
            showClipped: false
        }
    },
    methods: {
        async downloadFile(path){
            const name = path.split('/').pop()
            const response = await this.$http.get(path)
            const url = window.URL.createObjectURL(new Blob([response.data]))
            let link = document.createElement('a')

            link.href = url;
            link.setAttribute('download', name);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        },
        copyToClipboard(text){
            navigator.clipboard.writeText(text)

            this.showClipped = true
            setTimeout(() => {
                this.showClipped = false
            }, 2000)

        },
        openLink(link, newtab){
            if (newtab){
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