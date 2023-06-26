import { createWebHistory, createRouter } from "vue-router";
import Signup from "@/pages/Signup.vue";
import Login from "@/pages/Login.vue";
import Postpage from "@/pages/Postpage.vue";
import Profile from "@/pages/Profile.vue";
import Notfound from "@/pages/Notfound.vue";
import View1 from "@/pages/View1.vue";
import Viewall from "@/Pages/Viewall.vue";


const routes = [
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Postpage",
    name: "Postpage",
    component: Postpage,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Notfound",
    name: "Notfound",
    component: Notfound,
  },
  {
    path: "/View1",
    name: "View1",
    component: View1,
  },
  {
    path: "/Viewall",
    name: "Viewall",
    component: Viewall,
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