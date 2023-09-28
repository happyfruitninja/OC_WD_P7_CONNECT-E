import { createWebHistory, createRouter } from "vue-router";

import SignupComp from "@/components/SignupComp.vue";
import LoginComp from "@/components/LoginComp.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import PostPage from "@/pages/PostPage.vue";
import SinglePost from "@/pages/SinglePost.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "PostPage",
    component: PostPage,
    meta: { isRequiredAuth: true },
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
    meta: { isRequiredAuth: true },
  },
  {
    path: "/posts/:id",
    name: "SinglePost",
    component: SinglePost,
    meta: { isRequiredAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isUserauthenticated = localStorage.getItem("userInfo");
  const isRequiredAuth = to.matched.some(
    (record) => record.meta.isRequiredAuth
  );
  console.log(isRequiredAuth);
  if (isRequiredAuth && !isUserauthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
