<template>
  <div class="p-3 space-y-3">
    <NavBar />
    <Drawer>
      <slot></slot>
    </Drawer>
  </div>
</template>

<script>
import NavBar from "../shared/NavBar.vue";
import Drawer from "../shared/Drawer.vue";

export default {
  name: "Base01",
  components: {
    NavBar,
    Drawer,
  },
};
</script>

<style></style>
