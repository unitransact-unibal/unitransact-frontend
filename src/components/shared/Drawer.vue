<template>
  <div class="shadow bg-base-100 drawer drawer-mobile min-h-screen">
    <input id="nav-drawer" type="checkbox" class="drawer-toggle" />
    <div
      class="drawer-content rounded-box bg-base-200 bg-opacity-50 shadow-2xl"
    >
      <slot></slot>
    </div>
    <div class="drawer-side bg-base-100">
      <label for="nav-drawer" class="drawer-overlay"></label>
      <ul
        class="
          menu
          p-4
          overflow-y-auto
          w-56
          bg-neutral
          text-base-content
          mr-3
          rounded-box
        "
      >
        <li class="menu-title">
          <span> Funds </span>
        </li>
        <li>
          <a>
            <i class="mr-2 fa fa-exchange-alt"></i>
            Transactions
          </a>
        </li>
        <li>
          <a>
            <i class="mr-2 fa fa-money-check-alt"></i>
            Wallet
          </a>
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
