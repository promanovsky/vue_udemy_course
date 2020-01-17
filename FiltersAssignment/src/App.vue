<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>

                <input v-model="enteredText">
                <p>{{enteredText | reverse_text | count_letters}}</p>
                <hr/>
                <p>{{reverse_computed_text}}</p>
                <p>{{count_computed_letters}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                enteredText: ''
            }
        },
        filters:{
            reverse_text: function(value){
                return value.split("").reverse().join("");
            }
        },
        /*computed:{
            reverse_computed_text: function () {
                return this.enteredText.split("").reverse().join("");
            },
            count_computed_letters: function () {
                return this.enteredText + ' {'+this.enteredText.length+'}';
            }
        }*/
    }
</script>

<style>
</style>
