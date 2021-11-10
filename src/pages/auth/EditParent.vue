<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">Edit Parent</h1>

    <div class="p-10 card bg-base-200 bg-opacity-66">
      <form class="w-auto justify-around" @submit="submit">
        <div class="w-full flex space-x-5">
          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">National Id</span>
            </label>
            <input
              type="text"
              placeholder="national id"
              class="input"
              :class="{ 'input-error input-bordered': nationalIdValidation }"
              v-model="nationalId"
            />
            <label class="label" v-if="nationalIdValidation">
              <span class="label-text-alt text-error">
                {{ nationalIdValidation }}
              </span>
            </label>
          </div>

          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Telephone</span>
            </label>
            <input
              type="text"
              placeholder="telephone"
              class="input"
              :class="{ 'input-error input-bordered': telephoneValidation }"
              v-model="telephone"
            />
            <label class="label" v-if="telephoneValidation">
              <span class="label-text-alt text-error">
                {{ telephoneValidation }}
              </span>
            </label>
          </div>
        </div>

        <div class="w-full flex space-x-5 mt-1">
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
import ErrorAlerts from "../../components/shared/ErrorAlerts.vue";
import { countries } from "../../utils/data/countries";
export default {
  name: "EditParent",
  components: {
    Base01,
    ErrorAlerts,
  },
  data() {
    return {
      countries: countries,
      nationalId: "",
      telephone: "",
      address: "",
      country: "",
      nationalIdValidation: "",
      telephoneValidation: "",
      addressValidation: "",
      countryValidation: "",
    };
  },
  computed: {
    ...mapGetters({ errors: "parents/errors" }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      createParent: "parents/createParent",
    }),
    submit(e) {
      e.preventDefault();

      const fillThis = "This field should not be left empty";
      this.nationalIdValidation = this.nationalId === "" ? fillThis : "";
      this.telephoneValidation = this.telephone === "" ? fillThis : "";
      this.addressValidation = this.address === "" ? fillThis : "";
      this.countryValidation = this.country === "" ? fillThis : "";

      if (
        this.nationalIdValidation !== "" ||
        this.addressValidation !== "" ||
        this.telephoneValidation !== "" ||
        this.countryValidation !== ""
      ) {
        return;
      }

      this.createParent({
        national_id: this.nationalId,
        telephone: this.telephone,
        address: this.address,
        country: this.country,
      });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style></style>
