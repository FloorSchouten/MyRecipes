import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Cookies from "@/views/Cookies.vue";
import Breakfast from "@/views/Breakfast.vue";
import Dinners from "@/views/Dinners.vue";

const   routes= [
    //{
      //name: "404",
      //path: "*",
      //component: PageNotFound
    //},
    {
      name: "home",
      path: "/",
      component: Home
    },
    {
      name: "cookies",
      path: "/cookies",
      component: Cookies
    },
    {
      name: "breakfast",
      path: "/breakfast",
      component: Breakfast
    },
    {
      name: "dinners",
      path: "/dinners",
      component: Dinners
    }
    
  ];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;