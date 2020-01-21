<template>
    <div>
        <app-stock v-for="st in stocks" :stock="st"></app-stock>
    </div>
</template>

<script>
    import Stock from "./Stock.vue";
    export default {
        name: "Stocks",
        components: {
            appStock: Stock
        },
        computed:{
            stocks(){
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style scoped>

</style>