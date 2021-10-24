<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">Register School</h1>

    <div class="p-10 card bg-base-200 bg-opacity-60">
      <form class="w-auto justify-around" @submit="submit">
        <div class="w-full flex space-x-5">
          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              class="input"
              :class="{ 'input-error input-bordered': nameValidation }"
              v-model="name"
            />
            <label class="label" v-if="nameValidation">
              <span class="label-text-alt text-error">
                {{ nameValidation }}
              </span>
            </label>
          </div>

          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="address"
              class="input"
              :class="{ 'input-error input-bordered': addressValidation }"
              v-model="address"
            />
            <label class="label" v-if="addressValidation">
              <span class="label-text-alt text-error">
                {{ addressValidation }}
              </span>
            </label>
          </div>
        </div>

        <div class="w-full flex space-x-5 mt-1">
          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="location"
              class="input"
              :class="{ 'input-error input-bordered': locationValidation }"
              v-model="location"
            />
            <label class="label" v-if="locationValidation">
              <span class="label-text-alt text-error">
                {{ locationValidation }}
              </span>
            </label>
          </div>

          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Country</span>
            </label>

            <select
              class="select"
              :class="{ 'select-error select-bordered': countryValidation }"
              v-model="country"
            >
              <option value="" disabled="disabled" selected="selected">
                country
              </option>
              <option v-for="ct in countries" :key="ct.code" :value="ct.code">
                {{ ct.name }}
              </option>
            </select>

            <label class="label" v-if="countryValidation">
              <span class="label-text-alt text-error">
                {{ countryValidation }}
              </span>
            </label>
          </div>
        </div>

        <button class="btn btn-primary mt-4">Register</button>
      </form>
    </div>

    <ErrorAlerts :errors="errors" />
  </Base01>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Base01 from "../../components/layouts/Base01.vue";
import ErrorAlerts from "./ErrorAlerts.vue";
import countries from "../../utils/data/countries";
export default {
  name: "RegSchool",
  components: {
    Base01,
    ErrorAlerts,
  },
  data() {
    return {
      countries: countries,
      name: "",
      address: "",
      location: "",
      country: "",
      nameValidation: "",
      addressValidation: "",
      locationValidation: "",
      countryValidation: "",
    };
  },
  computed: {
    ...mapGetters({ errors: "schools/errors" }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      createSchool: "schools/createSchool",
    }),
    submit(e) {
      e.preventDefault();
      const fillThis = "This field should not be left empty";
      this.nameValidation = this.name === "" ? fillThis : "";
      this.addressValidation = this.address === "" ? fillThis : "";
      this.locationValidation = this.location === "" ? fillThis : "";
      this.countryValidation = this.country === "" ? fillThis : "";

      if (
        this.nameValidation !== "" ||
        this.addressValidation !== "" ||
        this.locationValidation !== "" ||
        this.countryValidation !== ""
      ) {
        return;
      }

      this.createSchool({
        name: this.name,
        address: this.address,
        location: this.location,
        country: this.country,
      });
    },
    test() {
      console.log("Up and running");
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style></style>
