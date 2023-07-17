import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import SignupComp from "@/components/SignupComp.vue";
//import LoginPage from "@/pages/LoginPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "SignupComp",
    component: SignupComp,
  },
  // {
  //   path: "/LoginPage",
  //   name: "LoginPage",
  //   component: LoginPage,
  // },
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
