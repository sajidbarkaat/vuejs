<template>
  <transition-group tag="ul" name="list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <ul>
    <input type="text" v-model="enteredUser" />
  </ul>
  <ul>
    <button @click="addUser()">Add User</button>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      users: ["Inma", "Solana", "Jasmy", "June", "Bryan"],
      enteredUser: "",
    };
  },
  methods: {
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
    addUser() {
      this.users.unshift(this.enteredUser);
      this.enteredUser = "";
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 1rem;
  margin: 0;
}
li {
  border: 1px solid antiquewhite;
  padding: 1rem;
  text-align: center;
}
.list-enter-from,
.list-leave-to{
  opacity: 0;
}
.list-enter-active{
  transition: all 1s ease-out;
}
.list-leave-active{
  transition: all 1s ease-in;
  position: absolute;
}
.list-enter-to,
.list-leave-from{
  opacity: 1;
}
.list-move{
  transition: transform 2s ease;
}
</style>
