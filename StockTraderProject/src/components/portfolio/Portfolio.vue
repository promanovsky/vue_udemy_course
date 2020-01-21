<template>
    <div>
        <app-stock v-for="st in stocks" :stock="st"></app-stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from "./Stock.vue";
    export default {
        name: "Potfolio",
        computed:{
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components:{
            appStock: Stock
        }
    }
</script>

<style scoped>

</style>