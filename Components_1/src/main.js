import Vue from 'vue'
import App from './App.vue'
import Container from "./components/Container.vue";

export const eventBus = new Vue({
  methods:{
    serverDetailsCLicked: function(serverDetails){
        this.$emit('serverDetailsCLicked', serverDetails);
    }
  }
});

Vue.component('container', Container);

new Vue({
  el: '#app',
  render: h => h(App)
});
