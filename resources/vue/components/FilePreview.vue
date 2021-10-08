<template>
    <div class="file-preview">
        <embed class="file-preview__item" :src="file + '#toolbar=0&navpanes=0&scrollbar=0'" width="100%" height="100%">
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