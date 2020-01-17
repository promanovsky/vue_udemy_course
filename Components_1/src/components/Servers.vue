<template>
    <div>
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <server-item v-for="srv in servers" :server-data="srv"></server-item>
            </ul>
        </div>
        <server-details></server-details>
    </div>
</template>
<script>
    import Server from "./Server.vue";
    import ServerDetails from './ServerDetails.vue';
    export default {
        data: function(){
            return {
                servers:[
                    {id:1, status:'Normal'},
                    {id:2, status:'Critical'},
                    {id:3, status:'Unknown'},
                    {id:4, status:'Normal'}
                ]
            }
        },
        components:{
            'server-item': Server,
            'server-details': ServerDetails
        }
    }
</script>
<style scoped>
    div {
        border: 1px solid blue;
    }
</style>