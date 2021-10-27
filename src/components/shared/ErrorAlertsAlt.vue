<template>
  <div class="mt-5" v-for="error in errors" :key="error.key">
    <div class="alert alert-error">
      <div class="flex-1">
        <i class="fas fa-ban mx-2 text-xl"></i>
        <label class="text-left">
          <h4 class="capitalize">{{ error.key }}</h4>
          <p class="text-sm text-base-content text-opacity-60">
            {{ error.value }}
          </p>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorAlertsAlt",
  props: {
    errors: Array,
  },
};
</script>

<style></style>
