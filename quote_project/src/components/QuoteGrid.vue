<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
    import Quote from "./Quote.vue";
    export default {
        name: "QuoteGrid",
        props: ['quotes'],
        components: {
            'app-quote': Quote
        },
        methods:{
            deleteQuote(index){
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style scoped>

</style>