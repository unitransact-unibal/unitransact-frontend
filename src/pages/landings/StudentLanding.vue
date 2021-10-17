<template>
  <div class="p-3 space-y-3">
    <NavBar />
    <Drawer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "../../components/shared/NavBar.vue";
import Drawer from "../../components/shared/Drawer.vue";

export default {
  name: "StudentLanding",
  components: {
    NavBar,
    Drawer,
  },
  computed: {
    ...mapGetters(["username"]),
  },
};
</script>

<style></style>
