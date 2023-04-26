import { createStore } from 'vuex';
import productModule from './modules/product.js';
import cartModule from './modules/cart.js';

const store = createStore({
  modules: {
    prods: productModule,
    carts: cartModule,
  },
  state(){
    return{
      isLoggedIn: false
    }
  },
  mutations:{
    login(state) {
      console.log('asda')
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  getters:{
    userSession(state){
      console.log('qwe')
      return state.isLoggedIn
    }
  },
  actions:{
    userLogin(context){
      context.commit('login')
    },
    userLogout(context){
      context.commit('logout')
    }
  }
});

export default store;
