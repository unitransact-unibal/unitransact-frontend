<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">Add Parent</h1>

    <div class="p-10 card bg-base-200 bg-opacity-66">
      <form class="w-auto justify-around" @submit="submit">
        <!--field-->
        <div class="form-control w-6/12">
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
      </form>
    </div>
  </Base01>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Base01 from "../../components/layouts/Base01.vue";
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
  },
  computed: {
    ...mapGetters({
      parentList: "parents/parent_list",
    }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      getParentList: "parents/getParentList",
    }),
    submit(e) {
      e.preventDefault();
      console.log("Submitting");
    },
  },
  async created() {
    await this.getUser();
    await this.getParentList();
  },
};
</script>

<style></style>
