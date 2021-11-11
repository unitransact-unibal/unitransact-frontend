<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">Your Parents</h1>
    {{ studentParentList }}

    <div class="card bg-base-200 bg-opacity-60 mb-4">
      <div class="card-body">
        <div class="flex justify-between items-end mb-2">
          <div class="font-bold">Parents</div>
          <router-link to="edit-parent" class="btn btn-sm btn-info">
            <i class="fa fa-pencil mr-2 text-xs"></i>
            Edit
          </router-link>
        </div>
        <table class="table w-full table-zebra">
          <thead>
            <th>#</th>
            <th>Student Id</th>
            <th>Parent Id</th>
            <th>Created At</th>
            <th>Updated At</th>
          </thead>
          <tbody>
            <tr v-for="item in studentParentList" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.student_id }}</td>
              <td>{{ item.parent_id }}</td>
              <td>{{ item.created_at }}</td>
              <td>{{ item.updated_at }}</td>
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

export default {
  name: "ListStudentParents",
  components: {
    Base01,
  },
  computed: {
    ...mapGetters({
      student: "students/studentObj",
      studentParentList: "student_parents/studentParentList",
    }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      getStudent: "students/getStudent",
      getStudentParentList: "student_parents/getStudentParentList",
    }),
  },
  async created() {
    await this.getUser();
    await this.getStudent();
    // TODO: Handle when the student doesn't exist in the DB
    // probably look for errors is students/errors, or wrap in try/catch
    console.log(this.student.id);
    await this.getStudentParentList(this.student.id);
    console.log(this.studentParentList);
  },
};
</script>

<style></style>
