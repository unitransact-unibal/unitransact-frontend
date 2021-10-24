<template>
  <div class="navbar shadow-lg bg-neutral text-neutral-content rounded-box">
    <div class="flex-none">
      <label
        for="nav-drawer"
        class="btn btn-square btn-ghost drawer-button lg:hidden"
      >
        <div class="inline-block w-6 h-6 stroke-current">
          <i class="fa fa-bars"></i>
        </div>
      </label>
    </div>
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold"> UniTransact </span>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" class="btn btn-square btn-ghost">
          <i class="fa fa-user-circle text-lg"></i>
        </div>
        <ul
          tabindex="0"
          class="
            p-2
            shadow
            menu
            dropdown-content
            bg-base-100
            rounded-box
            w-52
            space-y-1
          "
        >
          <li>
            <div class="p-3 text-sm text-center">{{ fullName }}</div>
          </li>
          <li>
            <router-link to="/my-account" class="bg-base-200">
              My Account
            </router-link>
          </li>
          <li>
            <a class="bg-base-200">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters({ fullName: "auth/fullName" }),
  },
};
</script>

<style></style>
