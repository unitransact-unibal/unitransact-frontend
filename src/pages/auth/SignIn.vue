<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <div class="h-auto w-3/12">
      <div class="card text-center shadow-2xl bg-base-200">
        <div class="card-body">
          <div class="card-title">Sign In</div>

          <div class="flex flex-wrap space-y-3">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                class="input"
                :class="{ 'input-error input-bordered': passValidation }"
                v-model="email"
              />
              <label class="label" v-if="emailValidation">
                <span class="label-text-alt">{{ emailValidation }}</span>
              </label>
            </div>

            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input"
                :class="{ 'input-error input-bordered': passValidation }"
                v-model="password"
              />
              <label class="label" v-if="passValidation">
                <span class="label-text-alt">{{ passValidation }}</span>
              </label>
            </div>

            <button class="btn btn-primary" @click="signIn()">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      emailValidation: "",
      passValidation: "",
    };
  },
  methods: {
    ...mapActions({ authenticate: "auth/authenticate" }),
    signIn() {
      const fillThis = "This field should not be left empty";
      this.emailValidation = this.email === "" ? fillThis : "";
      this.passValidation = this.email === "" ? fillThis : "";
      if (this.emailValidation != "" || this.passValidation != "") {
        return;
      }

      this.authenticate({ email: this.email, password: this.password });
    },
  },
};
</script>

<style></style>
