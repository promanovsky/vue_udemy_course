<template>
    <div class="container">
        <form>
            <div class="row" v-if="!isSubmited">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h3>Full Name</h3>
                    <full-name v-model="userName"></full-name>
                    <hr>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="text"
                                id="password"
                                class="form-control"
                                v-model.lazy="password">
                    </div>
                    <div class="form-group">
                        <label for="storeInDb">
                            <input
                                    type="checkbox"
                                    id="storeInDb"
                                    value="storeInDb"
                                    v-model="storeInDb"> Store in Database?
                        </label>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                    class="btn btn-primary" @click.prevent="submitIt">Submit!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmited">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userName.firstName}} {{userName.lastName}}</p>
                        <p>Email: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeInDb ? 'yes' : 'no'}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName.vue";
    export default {
        components: {FullName},
        data(){
            return {
                userName: {
                    firstName: 'test',
                    lastName: ''
                },
                email: '',
                password: '',
                storeInDb: false,
                isSubmited: false
            }
        },
        methods:{
            submitIt(){
                this.isSubmited = true;
            }
        }
    }
</script>

<style>
</style>
