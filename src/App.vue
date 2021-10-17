<template>
  <div>
    <h1>Hello</h1>
    <SignIn />
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
