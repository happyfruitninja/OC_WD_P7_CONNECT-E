import { createWebHistory, createRouter } from "vue-router";
import SignupPage from "@/pages/SignupPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import PostPage from "@/pages/PostPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import NotFound from "@/pages/NotFound.vue";
import ViewSingle from "@/pages/ViewSingle.vue";
import ViewAll from "@/pages/ViewAll.vue";

const routes = [
  {
    path: "/",
    name: "SignupPage",
    component: SignupPage,
  },
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/",
    name: "PostPage",
    component: PostPage,
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
    name: "ViewSingle",
    component: ViewSingle,
  },
  {
    path: "/",
    name: "ViewAll",
    component: ViewAll,
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