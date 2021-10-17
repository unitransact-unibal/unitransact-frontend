<template>
  <div class="shadow bg-base-100 drawer drawer-mobile min-h-screen">
    <input id="nav-drawer" type="checkbox" class="drawer-toggle" />
    <div
      class="flex flex-col justify-center drawer-content rounded-lg shadow-2xl"
    >
      <div class="hidden text-xs text-center lg:block">
        Menu is always open on desktop size. <br />Resize the browser to see
        toggle button on mobile size
      </div>
      <div class="text-xs text-center lg:hidden">
        Menu can be toggled on mobile size. <br />Resize the browser to see
        fixed sidebar on desktop size
      </div>
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
