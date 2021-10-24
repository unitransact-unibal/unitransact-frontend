import { createWebHistory, createRouter } from "vue-router";
import SignIn from "../../pages/auth/SignIn.vue";
import StudentLanding from "../../pages/landings/StudentLanding.vue";
import RegSchool from "../../pages/auth/RegSchool.vue";
import MyAccount from "../../pages/auth/MyAccount.vue";

const routes = [
  {
    path: "/",
    component: StudentLanding,
  },
  {
    path: "/sign-in",
    component: SignIn,
  },
  {
    path: "/my-account",
    component: MyAccount,
  },
  {
    path: "/reg-school",
    component: RegSchool,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
