<template>
    <div class="input input-file">
        <p class="input__title">
            <span>{{ title }}</span>
        </p>
            <label :for="name" class="input-file__wrapper">
                <input ref="fileinput" class="input-file__field" accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps" type="file" :name="name" :id="name" @change="updatePreview" />
                
                <template v-if="preview || value">
                    <file-preview class="input-file__preview" :file="preview ? getSymPath() : '../storage/' + value"></file-preview>
                    <div class="input-file__controls">
                        <icon-button class="input-file__control" icon="edit" :iconSize="15" @click.native.prevent="invokeInput"></icon-button>
                        <icon-button class="input-file__control" icon="cross" :iconSize="15" @click.native.prevent="removePreview()" v-if="value && preview"></icon-button>
                    </div>
                </template>
                <template v-else>
                    <icon :width="40" :height="40" class="input-file__icon" icon="plus"></icon>
                </template>
            </label>
    </div>
</template>

<script>
    import FilePreview from '../FilePreview.vue'
    export default {
        name: 'FileInput',
        components: {
            FilePreview
        },
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: false
            },
            error: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                preview: null
            };
        },
        watch: {
            preview() {
                this.$emit("update", {
                    name: this.name,
                    value: this.preview
                });
            }
        },
        methods: {
            invokeInput(){
                this.$refs.fileinput.click();
            },
            removePreview() {
                this.preview = null;
            },
            getSymPath() {
                if (this.preview){
                    return URL.createObjectURL(this.preview);
                }            
                return null
            },
            updatePreview(event) {
                this.preview = event.target.files[0];
                event.target.value = "";
            }
        }
    };

</script>
