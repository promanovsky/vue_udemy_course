<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="serverData.id === -1">Server Details are currently not updated</p>
        <p v-else>Server Details for server# {{serverData.id}} status={{serverData.status}}</p>
    </div>
</template>
<script>
    import {eventBus} from "../main.js";

    export default {
        props:{
            serverData: {id: -1, status: ''}
        },
        created() {
            eventBus.$on('serverDetailsCLicked', (serverData)=>{
                this.serverData = serverData;
            });
        }
    }
</script>
<style scoped>
    div {
        border: 1px solid red;
    }
</style>