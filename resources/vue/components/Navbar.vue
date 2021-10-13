<template>
    <div class="navbar">
        <router-link to="/" class="navbar__item">
            <small>Visitor</small>
        </router-link>
        <router-link to="/editor"  class="navbar__item">
            <small>Editor</small>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>