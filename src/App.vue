<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import SignIn from "./pages/auth/SignIn.vue";
export default {
  name: "App",
  components: { SignIn },
};
</script>

<style></style>
