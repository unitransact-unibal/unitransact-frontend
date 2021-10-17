import { createWebHistory, createRouter } from "vue-router";
import SignIn from "../../pages/auth/SignIn.vue";
import StudentLanding from "../../pages/landings/StudentLanding.vue";

const routes = [
  {
    path: "/",
    component: StudentLanding,
  },
  {
    path: "/sign-in",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
