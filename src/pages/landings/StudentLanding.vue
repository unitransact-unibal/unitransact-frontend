<template>
  <Base01>
    <div class="h-full w-full flex flex-col justify-center">
      <div class="hidden text-xs text-center lg:block">
        Menu is always open on desktop size. <br />Resize the browser to see
        toggle button on mobile size
      </div>
      <div class="text-xs text-center lg:hidden">
        Menu can be toggled on mobile size. <br />Resize the browser to see
        fixed sidebar on desktop size
      </div>
    </div>
  </Base01>
</template>

<script>
import { mapGetters } from "vuex";
import Base01 from "../../components/layouts/Base01.vue";

export default {
  name: "StudentLanding",
  components: {
    Base01,
  },
  computed: {
    ...mapGetters(["username"]),
  },
};
</script>

<style></style>
