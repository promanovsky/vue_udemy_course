<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>UserName</label>
                    <input class="form-control" type="text" v-model="user.userName">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <br/>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr/>
                <input class="form-control" type="text" v-model="node">
                <br/>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br/><br/>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{u.userName}} - {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user:{
                    userName: '',
                    email: ''
                },
                users: [],
                resource: {},
                node:'data'
            }
        },
        methods:{
            submit(){
                /*this.$http.post('data.json', this.user)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });*/
                //this.resource.save({}, this.user);
                this.resource.saveAlt(this.user);
            },
            fetchData(){
                /*this.$http.get('data.json')
                    .then(response => {
                        return response.json();
                    }, error => {
                        console.log(error);
                    })
                    .then(data => {
                        const resArr = [];
                        for(let key in data){
                            resArr.push(data[key])
                        }
                        this.users = resArr;
                    });*/
                this.resource.getData({node: this.node}).then(response => {
                    return response.json();
                    }, error => {
                        console.log(error);
                    }).then(data => {
                        const resArr = [];
                        for(let key in data){
                            resArr.push(data[key])
                        }
                        this.users = resArr;
                    });
            }
        },
        created() {
            const customAction = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            };
            this.resource = this.$resource('{node}.json', {}, customAction);
        }
    }
</script>

<style>
</style>
