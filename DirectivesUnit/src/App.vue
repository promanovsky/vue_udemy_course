<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background="'red'">Red color</p>
                <p v-highlight="'red'">Red color</p>
                <p v-highlight:background.delayed="'red'">Red color</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay:500}">Green blinked color</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:{
            'local-highlight': {
                bind(el, binding, vnode){
                    //el.style.backgroundColor = 'green';
                    //el.style.backgroundColor = binding.value;
                    var delay = 0;
                    if(binding.modifiers['delayed']){
                        delay = binding.value.delay;
                    }
                    if(binding.modifiers['blink']){
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(()=>{
                            setInterval(()=>{
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if(binding.arg == 'background'){
                                    el.style.backgroundColor = currentColor;
                                }else{
                                    el.style.color = currentColor;
                                }
                            }, 500);
                        },delay);
                    }else{
                        setTimeout(()=>{
                            if(binding.arg == 'background'){
                                el.style.backgroundColor = binding.value.mainColor;
                            }else{
                                el.style.color = binding.value.mainColor;
                            }
                        },delay);
                    }

                }
            }
        }
    }
</script>

<style>

</style>
