import { createApp } from 'vue';
import { createStore } from 'vuex'
import App from './App.vue';

const store = createStore({
  state(){
    return{
      counter: 0,
      isLoggedIn: false
    }
  },
  mutations: {
    increment(state){
      state.counter = state.counter + 1;
    },
    setAuth(state, payload){

      state.isLoggedIn = payload.isAuth
    }
  },
  actions: {
    login(context){

      context.commit('setAuth', {isAuth:  true})
    },
    logout(context){
      context.commit('setAuth', {isAuth: false})
    }
  },
  getters: {
    isUserAuthenticated(state){
      return state.isLoggedIn;
    }
  }
})
const app = createApp(App);
app.use(store);
app.mount('#app');
