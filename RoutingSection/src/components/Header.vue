<template>
    <ul class="nav nav-tabs">
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>