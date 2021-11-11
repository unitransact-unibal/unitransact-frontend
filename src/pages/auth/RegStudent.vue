<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">Register Student</h1>
  </Base01>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Base01 from "../../components/layouts/Base01.vue";
import ErrorAlerts from "../../components/shared/ErrorAlerts.vue";
import { countries } from "../../utils/data/countries";
export default {
  name: "RegStudent",
  components: {
    Base01,
    ErrorAlerts,
  },
  data() {
    return {
      countries: countries,
    };
  },
  computed: {
    ...mapGetters({ errors: "students/errors" }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      createStudent: "students/createStudent",
    }),
    submit(e) {
      e.preventDefault();
      console.log("submitting");
    },
  },
};
</script>

<style></style>
