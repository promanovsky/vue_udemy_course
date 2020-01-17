<template>
    <div>
        <div class="row" v-if="isHeader">
            <header-row></header-row>
        </div>
        <div class="row" v-if="isMain">
            <servers-row></servers-row>
        </div>
        <hr v-if="isMain || isHeader">
        <div class="row" v-if="isFooter">
            <footer-row></footer-row>
        </div>
    </div>
</template>
<script>
    import Header from "./Header.vue";
    import Servers from "./Servers.vue";
    import Footer from "./Footer.vue";

    export default {
        props:{
            isHeader: Boolean,
            isMain: Boolean,
            isFooter: Boolean
        },
        components:{
            'header-row': Header,
            'servers-row': Servers,
            'footer-row': Footer
        }
    }
</script>