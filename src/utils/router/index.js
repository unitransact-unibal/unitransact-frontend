import { createWebHistory, createRouter } from "vue-router";
import SignIn from "../../pages/auth/SignIn.vue";
import StudentLanding from "../../pages/landings/StudentLanding.vue";
import RegSchool from "../../pages/auth/RegSchool.vue";
import EditSchool from "../../pages/auth/EditSchool.vue";
import MyAccount from "../../pages/auth/MyAccount.vue";
import RegParent from "../../pages/auth/RegParent.vue";
import EditParent from "../../pages/auth/EditParent.vue";
import RegStudent from "../../pages/auth/RegStudent.vue";
import EditStudent from "../../pages/auth/EditStudent.vue";
import ListStudentParents from "../../pages/students/ListStudentParents.vue";
import StudentAddParent from "../../pages/students/StudentAddParent.vue";
import EditStudentParent from "../../pages/students/EditStudentParent.vue";

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
  {
    path: "/edit-school",
    component: EditSchool,
  },
  {
    path: "/reg-parent",
    component: RegParent,
  },
  {
    path: "/edit-parent",
    component: EditParent,
  },
  {
    path: "/reg-student",
    component: RegStudent,
  },
  {
    path: "/edit-student",
    component: EditStudent,
  },
  {
    path: "/student-parents",
    component: ListStudentParents,
  },
  {
    path: "/student-parents/:id",
    name: "student-parent-edit",
    component: EditStudentParent,
    params: true,
  },
  {
    path: "/student-parents-add",
    component: StudentAddParent,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
