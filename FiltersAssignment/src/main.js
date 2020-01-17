import Vue from 'vue'
import App from './App.vue'

Vue.filter('count_letters', function(value) {
    return value + ' {'+value.length+'}';
});

import {computedPropsMixin} from "./computedPropsMixin.js";
Vue.mixin(computedPropsMixin);

new Vue({
  el: '#app',
  render: h => h(App)
});
