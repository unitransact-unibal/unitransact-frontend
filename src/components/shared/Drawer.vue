<template>
  <div class="shadow bg-base-100 drawer drawer-mobile min-h-screen">
    <input id="nav-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content rounded-lg shadow-2xl">
      <slot></slot>
    </div>
    <div class="drawer-side bg-base-100">
      <label for="nav-drawer" class="drawer-overlay"></label>
      <ul
        class="
          menu
          p-4
          overflow-y-auto
          w-80
          bg-neutral
          text-base-content
          mr-3
          rounded-lg
        "
      >
        <li>
          <a>Menu Item</a>
        </li>
        <li>
          <a>Menu Item</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drawer",
};
</script>

<style></style>
