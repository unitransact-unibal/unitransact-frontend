<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">Add Parent</h1>

    <div class="p-10 card bg-base-200 bg-opacity-66">
      <form class="w-auto justify-around" @submit="submit">
        <!--field-->
        <div class="form-control w-12/12">
          <label class="label">
            <span class="label-text">Parent</span>
          </label>

          <select
            class="select"
            :class="{ 'select-error select-bordered': parentIdValidation }"
            v-model="parentId"
          >
            <option value="" disabled="disabled" selected="selected">
              parent
            </option>
            <option v-for="pt in parentList" :key="pt.id" :value="pt.id">
              {{ pt.national_id }}: {{ pt.first_name }} {{ pt.last_name }}
            </option>
          </select>

          <label class="label" v-if="parentIdValidation">
            <span class="label-text-alt text-error">
              {{ parentIdValidation }}
            </span>
          </label>
        </div>

        <button class="btn btn-primary mt-4">Save</button>
      </form>
    </div>

    <ErrorAlerts :errors="errors" />
  </Base01>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Base01 from "../../components/layouts/Base01.vue";
import ErrorAlerts from "../../components/shared/ErrorAlerts.vue";
export default {
  name: "StudentAddParent",
  data() {
    return {
      parentId: "",
      parentIdValidation: "",
    };
  },
  components: {
    Base01,
    ErrorAlerts,
  },
  computed: {
    ...mapGetters({
      errors: "student_parents/errors",
      parentList: "parents/parent_list",
      student: "students/studentObj",
    }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      getStudent: "students/getStudent",
      getParentList: "parents/getParentList",
      createStudentParent: "student_parents/createStudentParent",
    }),
    submit(e) {
      e.preventDefault();

      const fillThis = "This field should not be left empty";
      this.parentIdValidation = this.parentId === "" ? fillThis : "";

      if (this.parentIdValidation !== "") {
        return;
      }

      this.createStudentParent({
        student_id: this.student.id,
        parent_id: this.parentId,
      });
    },
  },
  async created() {
    await this.getUser();
    await this.getStudent();
    await this.getParentList();
  },
};
</script>

<style></style>
