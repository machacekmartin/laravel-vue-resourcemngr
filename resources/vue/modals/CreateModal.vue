<template>
    <div class="modal">
        <div class="modal__content">
            <div class="modal__header">
                <h2 class="modal__title">Hey, Create new resource!?</h2>
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
        name: 'CreateModal',
        data() {
            return {
                resolve: null
            };
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

            //ADD METHODS FOR CREATING API CALLS BASED ON TYPE WITH VUEX
        }
    };
</script>
