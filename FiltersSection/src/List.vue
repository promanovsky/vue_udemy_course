<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText"/>
        <ul>
            <li v-for="fr in filteredFruits">{{fr}}</li>
        </ul>
    </div>
</template>

<script>
    import {fruitMixin} from "./fruitMixin.js";

    export default {
        mixins: [fruitMixin],
        created(){
            console.log('inside list CREATED');
        }
    }
</script>

<style>

</style>
