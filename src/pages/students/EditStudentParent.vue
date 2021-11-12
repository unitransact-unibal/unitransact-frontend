<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">Edit Student's Parent</h1>

    <div class="p-10 card bg-base-200 bg-opacity-66">
      <form class="w-auto justify-around" @submit="submit">
        <div class="w-full flex space-x-5">
          <!--field-->
          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Id</span>
            </label>
            <input
              type="text"
              placeholder="record id"
              class="input"
              v-model="id"
              readonly
            />
          </div>

          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Student Id</span>
            </label>
            <input
              type="text"
              placeholder="record id"
              class="input"
              :value="studentParent.student_id"
              readonly
            />
          </div>
        </div>

        <div class="w-full flex space-x-5 mt-1">
          <div class="form-control w-full">
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
  name: "EditStudentParent",
  components: { Base01, ErrorAlerts },
  data() {
    return {
      id: "",
      parentId: "",
      parentIdValidation: "",
    };
  },
  computed: {
    ...mapGetters({
      errors: "student_parents/errors",
      studentParent: "student_parents/studentParentObj",
      parentList: "parents/parent_list",
    }),
  },
  methods: {
    ...mapActions({
      getParentList: "parents/getParentList",
      getUser: "auth/getUser",
      getStudentParent: "student_parents/getStudentParent",
    }),
  },
  async created() {
    await this.getUser();
    await this.getParentList();

    this.id = this.$route.params.id;
    await this.getStudentParent(this.id);

    this.parentId = this.studentParent.parent_id;
  },
};
</script>

<style></style>
