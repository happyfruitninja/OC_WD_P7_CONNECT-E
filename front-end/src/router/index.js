import { createWebHistory, createRouter } from "vue-router";

import SignupComp from "@/components/SignupComp.vue";
import LoginComp from "@/components/LoginComp.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import PostPage from "@/pages/PostPage.vue";


const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "PostPage",
    component: PostPage,
  },
  {
    path: "/signup",
    name: "SignupComp",
    component: SignupComp,
  },
  {
    path: "/login",
    name: "LoginComp",
    component: LoginComp,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },

  // {
  //   path: "/",
  //   name: "NotFound",
  //   component: NotFound,
  // },
  //  {
  //   path: "/:catchAll(.*)",
  //   component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
