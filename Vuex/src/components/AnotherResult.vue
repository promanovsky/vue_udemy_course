<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Number of clicks: {{clicks}}</p>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        /*computed:{
            counter(){
                return this.$store.getters.doubleCounter;
            },
            clicks(){
                return this.$store.getters.stringCounter;
            }
        }*/
        /*computed: mapGetters([
            'doubleCounter', 'stringCounter'
        ]),*/
        computed:{
            ...mapGetters({
                counter: 'doubleCounter',
                clicks: 'stringCounter'
            }),
            anotherComputedProp(){
                return '&&&';
            }
        }
    }
</script>