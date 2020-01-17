<template>
    <li class="list-group-item" @click="onDetailsClick">
        Server id={{ serverData.id }}
    </li>
</template>
<script>
    import {eventBus} from "../main.js";

    export default {
        props:{
            serverData: Object
        },
        methods: {
            onDetailsClick: function () {
                eventBus.serverDetailsCLicked(this.serverData);
            }
        }
    }
</script>