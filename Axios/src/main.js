import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejsaxiosdb.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'some token or other value';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterId = axios.interceptors.request.use(config => {
  console.log('request interceptor ', config);
  config.headers.common['Authorization'] = 'some token or other value';
  return config;
});

const respInterId = axios.interceptors.response.use( res=> {
  console.log('response interceptor ',res);
  return res;
});

//axios.interceptors.request.eject(reqInterId);
//axios.interceptors.response.eject(respInterId);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
