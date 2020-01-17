<template>
    <div class="form-group">
        <label for="firstName">First Name</label>
        <input
                type="text"
                id="firstName"
                class="form-control"
                @input="nameEntered()"
                v-model="value.firstName">
        <label for="lastName">Last Name</label>
        <input
                type="text"
                id="lastName"
                class="form-control"
                @input="nameEntered()"
                v-model="value.lastName">
    </div>
</template>

<script>
    export default {
        name: "FullName",
        props:['value'],
        methods: {
            nameEntered: function(){
                this.$emit('input', this.value);
            }
        },
        computed:{
            firstName(){
                return this.value.firstName;
            },
            lastName(){
                return this.value.lastName;
            }
        }
    }
</script>

<style scoped>

</style>