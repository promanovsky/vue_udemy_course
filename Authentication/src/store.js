import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth.js';
import globalAxios from 'axios';
import router from './router.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData){
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user){
      state.user = user;
    },
    clearData(state){
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    signup({commit, dispatch}, authData){
      axios.post(':signUp?key=AIzaSyC3d6NRQr99M9-s2OO99BIQMVINeY86gAc', {email : authData.email, password : authData.password, returnSercureToken: true})
          .then(res => {
            console.log(res);
            commit('authUser',{
              token: res.data.idToken,
              userId: res.data.localId
            });
          }).then(res=>{
            dispatch('storeUser', authData);
          })
          .catch(error => console.log(error))
    },
    login({commit, dispatch}, authData){
      axios.post(':signInWithPassword?key=AIzaSyC3d6NRQr99M9-s2OO99BIQMVINeY86gAc', {email : authData.email, password : authData.password, returnSercureToken: true})
          .then(res => {
            console.log(res);
            commit('authUser',{
              token: res.data.idToken,
              userId: res.data.localId
            });
          }).then(res=>{
            dispatch('fetchUser');
          })
          .catch(error => console.log(error));
    },
    storeUser({commit, state}, userData){
      if(!state.idToken) return;
      globalAxios.post('/users.json'+'?auth='+state.idToken, userData).then(res => console.log(res)).catch(err=> console.log(err));
    },
    fetchUser({commit, state}){
      if(!state.idToken) return;
      console.log('FETCHING WITH TOKEN_ID='+state.idToken);
      globalAxios.get('/users.json'+'?auth='+state.idToken)
          .then(res => {
            console.log(res);
            const data = res.data;
            const users = [];
            for (let key in data) {
              const user = data[key];
              user.id = key;
              users.push(user)
            }
            console.log(users);
            commit('storeUser', users[0]);
          })
          .catch(error => console.log(error))
    },
    logout({commit}){
      commit('clearData');
      router.replace('/signin');
    }
  },
  getters: {
      user(state){
        return state.user;
      },
      isAuthenticated(state){
        return state.idToken !== null;
      }
  }
})