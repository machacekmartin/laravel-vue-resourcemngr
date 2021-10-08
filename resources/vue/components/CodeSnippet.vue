<template>
    <div class="code-snippet">
        <div class="code-snippet__wrapper">
            <pre class="code-snippet__content">{{ content }}</pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CodeSnippet',
    props: {
        content: {
            type: String,
            required: true
        }
    },
}
</script>