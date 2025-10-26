// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import LoginView from "@/pages/LoginView.vue";
import SignupView from "@/pages/SignupView.vue";
import DashboardView from "@/pages/DashboardView.vue";
import TicketView from "@/pages/TicketView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/auth/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/auth/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/tickets",
    name: "tickets",
    component: TicketView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
