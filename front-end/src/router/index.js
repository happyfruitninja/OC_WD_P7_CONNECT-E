import { createWebHistory, createRouter } from "vue-router";
import NavPage from "@/pages/HomePage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import NotFound from "@/pages/NotFound.vue";
import PrivateChat from "@/pages/PrivateChat.vue";

const routes = [
  {
    path: "/homepage",
    name: "HomePage",
    component: NavPage,
  },
  {
    path: "/SignupPage",
    name: "SignupPage",
    component: SignupPage,
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/",
    name: "PrivateChat",
    component: PrivateChat,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
