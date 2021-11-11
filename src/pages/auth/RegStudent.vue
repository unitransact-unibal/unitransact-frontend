<template>
  <Base01>
    <h1 class="text-2xl font-normal mb-2 px-2">Register Student</h1>

    <div class="p-10 card bg-base-200 bg-opacity-66">
      <form class="w-auto justify-around" @submit="submit">
        <div class="w-full flex space-x-5">
          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">School</span>
            </label>
            <input
              type="text"
              placeholder="school Id"
              class="input"
              :class="{ 'input-error input-bordered': schoolIdValidation }"
              v-model="schoolId"
            />
            <label class="label" v-if="schoolIdValidation">
              <span class="label-text-alt text-error">
                {{ schoolIdValidation }}
              </span>
            </label>
          </div>

          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Admission Number</span>
            </label>
            <input
              type="text"
              placeholder="admission number"
              class="input"
              :class="{ 'input-error input-bordered': admNoValidation }"
              v-model="admNo"
            />
            <label class="label" v-if="admNoValidation">
              <span class="label-text-alt text-error">
                {{ admNoValidation }}
              </span>
            </label>
          </div>
        </div>

        <div class="w-full flex space-x-5 mt-1">
          <div class="form-control w-6/12">
            <label class="label">
              <span class="label-text">Date of Birth</span>
            </label>
            <input
              type="date"
              placeholder="dob"
              class="input"
              :class="{ 'input-error input-bordered': dobValidation }"
              v-model="dob"
            />
            <label class="label" v-if="dobValidation">
              <span class="label-text-alt text-error">
                {{ dobValidation }}
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
  name: "RegStudent",
  components: {
    Base01,
    ErrorAlerts,
  },
  data() {
    return {
      countries: countries,
      admNo: "",
      schoolId: "",
      dob: "",
      telephone: "",
      address: "",
      country: "",
      admNoValidation: "",
      schoolIdValidation: "",
      dobValidation: "",
      telephoneValidation: "",
      addressValidation: "",
      countryValidation: "",
    };
  },
  computed: {
    ...mapGetters({ errors: "students/errors" }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      createStudent: "students/createStudent",
    }),
    submit(e) {
      e.preventDefault();

      const fillThis = "This field should not be left empty";
      this.admNoValidation = this.admNo === "" ? fillThis : "";
      this.schoolIdValidation = this.schoolId === "" ? fillThis : "";
      this.dobValidation = this.dob === "" ? fillThis : "";
      this.telephoneValidation = this.telephone === "" ? fillThis : "";
      this.addressValidation = this.address === "" ? fillThis : "";
      this.countryValidation = this.country === "" ? fillThis : "";

      if (
        this.admNoValidation !== "" ||
        this.schoolIdValidation !== "" ||
        this.dobValidation !== "" ||
        this.addressValidation !== "" ||
        this.telephoneValidation !== "" ||
        this.countryValidation !== ""
      ) {
        return;
      }

      this.createStudent({
        admission_number: this.admNo,
        school_id: this.schoolId,
        address: this.address,
        date_of_birth: this.dob,
        telephone: this.telephone,
        country: this.country,
      });
    },
  },
};
</script>

<style></style>
