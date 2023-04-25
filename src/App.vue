<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      isParaVisible: false,
      isUser: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animation() {
      this.animatedBlock = true;
    },
    paragraphToggler() {
      this.isParaVisible = !this.isParaVisible;
    },
    showUser() {
      this.isUser = true;
    },
    hideUser() {
      this.isUser = false;
    },
  },
};
</script>

<style>
.v-enter-from {
  opacity: 0;
  transform: translateY(-40px);
}
.v-enter-active {
  transition: all 0.3s ease-out;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s ease-in;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animation {
  /* transform: translateX(150px); */
  animation: slide-fade 0.3s forwards;
}
.user-button-enter-active {
  animation: show-user 0.3s ease-out;
}
.route-enter-active {
  animation: show-user 1s ease-out;
}
/* .user-button-leave-active{
  animation: show-user 0.3s ease-in;
} */
@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(0);
  }
  60% {
    transform: translateX(-100px) scale(1.5);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
@keyframes show-user {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
