<template>
  <base-container title="Vuex" v-if="isAuth">
    <h2>{{ counter }}</h2>
    <button @click="addNow">Add 1</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';
export default {
  components: {
    BaseContainer,
    UserAuth
  },
  computed:{
    counter(){
      return this.$store.state.counter
    }
  },
  methods:{
    addNow(){
      this.$store.commit('increment');
    }
  },
  computed:{
    isAuth(){
      return this.$store.getters.isUserAuthenticated
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
