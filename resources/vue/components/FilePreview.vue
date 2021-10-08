<template>
    <div class="file-preview">
        <embed class="file-preview__item" :src="file" width="100%" height="100%">
    </div>
</template>

<script>
export default {
    name: 'FilePreview',
    props: {
        file: {
            type: String,
            required: true
        },
    }
}
</script>