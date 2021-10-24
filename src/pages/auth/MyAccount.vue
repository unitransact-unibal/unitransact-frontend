<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">My Account</h1>
    <div class="btn-group">
      <router-link to="/reg-school" class="btn btn-info">
        Register School
      </router-link>
    </div>
  </Base01>
</template>

<script>
import Base01 from "../../components/layouts/Base01.vue";
export default {
  name: "MyAccount",
  components: {
    Base01,
  },
};
</script>

<style></style>
