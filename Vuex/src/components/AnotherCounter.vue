<template>
    <div>
        <button class="btn btn-primary" @click="increment3(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement3(50)">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex';

    export default {
        methods:{
            ...mapActions(['asyncIncrement', 'asyncDecrement']),
            ...mapMutations(['increment', 'decrement']),
            increment2() {
                this.$store.commit('increment');
            },
            decrement2() {
                this.$store.commit('decrement');
            },
            increment3(payload) {
                this.$store.dispatch('increment', payload);
            },
            decrement3(payload) {
                this.$store.commit('decrement',payload);
            }
        }
    }
</script>