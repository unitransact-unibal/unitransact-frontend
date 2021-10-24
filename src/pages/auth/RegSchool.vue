<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">Register School</h1>
    <div class="p-10 card bg-base-200 bg-opacity-60">
      <div class="w-auto justify-around">
        <div class="w-full flex space-x-5">
          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" class="input" />
          </div>

          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Address</span>
            </label>
            <input type="text" placeholder="address" class="input" />
          </div>
        </div>

        <div class="w-full flex space-x-5 mt-1">
          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Location</span>
            </label>
            <input type="text" placeholder="location" class="input" />
          </div>

          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Country</span>
            </label>
            <input type="text" placeholder="country" class="input" />
          </div>
        </div>

        <button class="btn btn-primary mt-4">Sign In</button>
      </div>
    </div>
  </Base01>
</template>

<script>
import Base01 from "../../components/layouts/Base01.vue";
export default {
  name: "RegSchool",
  components: {
    Base01,
  },
};
</script>

<style></style>
