import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Category from "../views/Category/Category.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Cart from "../views/Cart.vue";
import Register from "../views/Register/Register.vue";
import Logout from "../views/Logout.vue";
import { useUserStore } from "../store/userStore";

function validateUser() {
  const userStore = useUserStore();
  return userStore.isAuthenticated
    ? userStore.isAuthenticated
    : { path: "/login" };
}

const routes = [
  { path: "/", component: Home },
  { path: "/category", component: Category },
  {
    path: "/login",
    component: Login,
    beforeEnter: () => {
      const userStore = useUserStore();
      return userStore.isAuthenticated ? { path: "/profile" } : true;
    },
  },
  { path: "/profile", component: Profile, beforeEnter: validateUser },
  { path: "/cart", component: Cart },
  {
    path: "/register",
    component: Register,
    beforeEnter: () => {
      const userStore = useUserStore();
      return userStore.isAuthenticated ? { path: "/profile" } : true;
    },
  },
  { path: "/logout", component: Logout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
