<template>
  <div class="navbar shadow-lg bg-neutral text-neutral-content rounded-box">
    <div class="flex-none">
      <label
        for="nav-drawer"
        class="btn btn-square btn-ghost drawer-button lg:hidden"
      >
        <div class="inline-block w-6 h-6 stroke-current">
          <i class="fa fa-bars"></i>
        </div>
      </label>
    </div>
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold"> Hi {{ username }} </span>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <i class="fa fa-user-circle text-lg"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["username"]),
  },
};
</script>

<style></style>
