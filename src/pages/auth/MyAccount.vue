<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">My Account</h1>
    <div class="btn-group">
      <router-link to="/reg-school" class="btn btn-info" v-if="!school_id">
        Register School
      </router-link>
    </div>

    {{ school_id }}
    {{ school }}

    <div class="card bg-base-200 bg-opacity-60" v-if="school_id">
      <div class="card-body">
        <table class="table w-full table-zebra">
          <tbody>
            <tr v-for="item in school" :key="item.key">
              <th>{{ item.key }}</th>
              <td>{{ item.value }}</td>
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
  name: "MyAccount",
  components: {
    Base01,
  },
  computed: {
    ...mapGetters({ school_id: "schools/id", school: "schools/school" }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      getSchool: "schools/getSchool",
    }),
  },
  async created() {
    await this.getUser();
    this.getSchool();
  },
};
</script>

<style></style>
