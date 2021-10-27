<template>
  <div class="mt-5" v-for="error in errors" :key="error.key">
    <div class="alert alert-error">
      <div class="flex-1 flex items-center">
        <i class="fas fa-ban mx-2 text-xl"></i>
        <label>
          <span class="mr-2 capitalize">{{ error.key }}:</span>
          <span class="text-sm text-base-content text-opacity-60">
            {{ error.value }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorAlerts",
  props: {
    errors: Array,
  },
};
</script>

<style></style>
