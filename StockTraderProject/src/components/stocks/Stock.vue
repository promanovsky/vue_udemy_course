<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientFunds}"/>
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || Number.isNaN(quantity) || Number.parseInt(quantity) <= 0 ">
                        {{insufficientFunds ? 'Not enough' : 'Buy'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stock",
        props:['stock'],
        data(){
            return {
                quantity: 0
            }
        },
        computed:{
          insufficientFunds(){
              return this.quantity * this.stock.price > this.funds;
          },
          funds(){
              return this.$store.getters.funds;
          }
        },
        methods:{
            buyStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: Number.parseInt(this.quantity)
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }

</script>

<style scoped>
    .danger{
        border: 1px red solid;
    }
</style>