<template>
    <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" role="presentation">
            <use :xlink:href="'/icons/icon-set.svg#icon-' + icon" />
        </svg>
    </span>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        icon: {
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