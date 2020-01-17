<template>
    <div class="container">
        <container-row :is-header="true"></container-row>
        <container-row :is-main="true"></container-row>
        <container-row :is-footer="true"></container-row>
    </div>
</template>
<script>
    import Row from "./Row.vue";
    export default {
        components:{
            'container-row': Row
        }
    }
</script>