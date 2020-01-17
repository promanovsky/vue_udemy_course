<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p v-my-custom-on:action.click="{clickCallback: clickCallbackFunc}">V-ON</p>
                <input v-my-custom-on:action.input="{inputCallback: inputCallbackFunc}"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:{
            'my-custom-on':{
                bind(el, binding, vnode){
                    if(binding.arg === 'action'){
                        if(binding.modifiers['click']){
                            el.onclick = binding.value.clickCallback;
                        }
                        if(binding.modifiers['input']){
                            el.oninput = binding.value.inputCallback;
                        }
                    }
                }
            }
        },
        methods:{
            clickCallbackFunc(){
                alert('Directive callback on click event!')
            },
            inputCallbackFunc(){
                alert('Directive callback on input event!')
            }
        }
    }
</script>

<style>
</style>
