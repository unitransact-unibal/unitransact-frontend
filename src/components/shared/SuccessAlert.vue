<template>
  <div class="mt-5" v-if="message">
    <div class="alert alert-success">
      <div class="flex-1 flex items-center">
        <i class="fas fa-ban mx-2 text-xl"></i>
        <label>
          {{ message }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessAlert",
  props: {
    message: String,
  },
};
</script>

<style></style>
