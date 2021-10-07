<template>
    <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon__svg" :width="width" :height="height" role="presentation">
            <use :xlink:href="'/icons/icon-set.svg#icon-' + name" />
        </svg>
    </span>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        }
    }
}
</script>