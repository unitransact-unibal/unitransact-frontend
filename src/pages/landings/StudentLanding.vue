<template>
  <h1>Hi {{ username }}</h1>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StudentLanding",
  computed: {
    ...mapGetters(["username"]),
  },
};
</script>

<style></style>
