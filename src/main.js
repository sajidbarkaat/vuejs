import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import AllUsers from './pages/AllUser.vue';
import CourseGoals from './pages/CourseGoals.vue'

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path:'/', component: AllUsers},
    {path:'/goals', component:CourseGoals}
  ]
})

app.use(router)
router.isReady().then(()=>{
  app.mount('#app');

})
