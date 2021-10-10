<template>
    <div class="modal">
        <div class="modal__content">
            <div class="modal__header">
                <h2 class="modal__title">Hey, edit resource  - {{ existingData.title }} !?</h2>
                <icon-button class="modal__button" colorMode="ruby" icon="cross" :iconSize="15" @click="emitClick(0)"></icon-button>
            </div>
            
            <div class="modal__window">
                <p>Wtf this is the window</p>
            </div>
            <div class="modal__footer">
                <icon-button class="modal__button" colorMode="blue" text="Create" icon="checkmark" :iconSize="16" @click="emitClick(1)"></icon-button>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EditModal',
        data() {
            return {
                resolve: null
            };
        },
        props: {
            existingData: {
                type: Object,
                required: true
            }
        },
        methods: {
            async generate() {
                return new Promise(resolve => {
                    this.resolve = resolve;
                });
            },
            emitClick(value) {
                this.resolve && this.resolve(value);
            }
        }
    };
</script>
