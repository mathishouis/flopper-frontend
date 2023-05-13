import { createRouter, createWebHistory } from "vue-router";
import Home from "@views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    /*{
      name: "Register",
      path: "/register",
      component: () => import("@views/Register.vue"),
      beforeEnter: [isNotAuthenticatedGuard],
    },*/
  ],
});

export default router;
