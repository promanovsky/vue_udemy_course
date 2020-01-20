<template>
    <div>
        <button class="btn btn-primary" @click="increment2">Increment</button>
        <button class="btn btn-primary" @click="decrement2">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        methods: {
            ...mapMutations(['increment', 'decrement']),
            increment2() {
                //this.$emit('updated', 1);
                //this.$store.state.counter++;
                this.$store.commit('increment',1);
            },
            decrement2() {
                //this.$emit('updated', -1);
                //this.$store.state.counter--;
                this.$store.commit('decrement',1);
            }
        }
    }
</script>