<template>
  <Base01>
    <div class="flex justify-between items-end mb-2">
      <h1 class="text-2xl font-normal px-2">My Account</h1>
      <div class="btn-group">
        <router-link
          to="/reg-school"
          class="btn btn-sm btn-outline btn-info"
          v-if="!school_id"
        >
          Register School
        </router-link>
        <router-link
          to="/reg-parent"
          class="btn btn-sm btn-outline btn-info"
          v-if="!parent_id"
        >
          Register Parent
        </router-link>
        <router-link
          to="/reg-student"
          class="btn btn-sm btn-outline btn-info"
          v-if="!student_id"
        >
          Register Student
        </router-link>
      </div>
    </div>

    <div class="card bg-base-200 bg-opacity-60 mb-4" v-if="school_id">
      <div class="card-body">
        <div class="flex justify-between items-end mb-2">
          <div class="font-bold">School Details</div>
          <router-link to="edit-school" class="btn btn-sm btn-info">
            <i class="fa fa-pencil mr-2 text-xs"></i>
            Edit
          </router-link>
        </div>
        <table class="table w-full table-zebra">
          <tbody>
            <tr v-for="item in school" :key="item.key">
              <th class="capitalize text-sm">
                {{ item.key.replaceAll("_", " ") }}
              </th>
              <td v-if="item.key === 'country'">
                {{ getCountryName(item.value) }}
              </td>
              <td v-else>{{ item.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card bg-base-200 bg-opacity-60 mb-4" v-if="parent_id">
      <div class="card-body">
        <div class="flex justify-between items-end mb-2">
          <div class="font-bold">Parent Details</div>
          <router-link to="edit-parent" class="btn btn-sm btn-info">
            <i class="fa fa-pencil mr-2 text-xs"></i>
            Edit
          </router-link>
        </div>
        <table class="table w-full table-zebra">
          <tbody>
            <tr v-for="item in parent" :key="item.key">
              <th class="capitalize text-sm">
                {{ item.key.replaceAll("_", " ") }}
              </th>
              <td v-if="item.key === 'country'">
                {{ getCountryName(item.value) }}
              </td>
              <td v-else>{{ item.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card bg-base-200 bg-opacity-60 mb-4" v-if="student_id">
      <div class="card-body">
        <div class="flex justify-between items-end mb-2">
          <div class="font-bold">Student Details</div>
          <div class="flex justify-end space-x-2">
            <router-link to="edit-student" class="btn btn-sm btn-info">
              <i class="fa fa-pencil mr-2 text-xs"></i>
              Edit
            </router-link>
            <router-link to="student-parents" class="btn btn-sm btn-info">
              <i class="fa fa-user-friends mr-2 text-xs"></i>
              Your Parents
            </router-link>
          </div>
        </div>
        <table class="table w-full table-zebra">
          <tbody>
            <tr v-for="item in student" :key="item.key">
              <th class="capitalize text-sm">
                {{ item.key.replaceAll("_", " ") }}
              </th>
              <td v-if="item.key === 'country'">
                {{ getCountryName(item.value) }}
              </td>
              <td v-else>{{ item.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Base01>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Base01 from "../../components/layouts/Base01.vue";
import { getCountryName } from "../../utils/data/countries";
export default {
  name: "MyAccount",
  components: {
    Base01,
  },
  computed: {
    ...mapGetters({
      school_id: "schools/id",
      school: "schools/school",
      parent_id: "parents/id",
      parent: "parents/parent",
      student_id: "students/id",
      student: "students/student",
    }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      getSchool: "schools/getSchool",
      getParent: "parents/getParent",
      getStudent: "students/getStudent",
    }),
    getCountryName,
  },
  async created() {
    await this.getUser();
    await this.getSchool();
    await this.getParent();
    await this.getStudent();
  },
};
</script>

<style></style>
