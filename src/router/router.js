import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Category from "../views/Category/Category.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Cart from "../views/Cart.vue";
import Register from "../views/Register/Register.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/category", component: Category },
  { path: "/login", component: Login },
  { path: "/profile", component: Profile },
  { path: "/cart", component: Cart },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
