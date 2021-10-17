<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <div class="h-auto w-3/12">
      <div class="card text-center shadow-2xl bg-base-200">
        <div class="card-body">
          <div class="card-title">Sign In</div>

          <div class="flex flex-wrap space-y-3">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input type="text" placeholder="username" class="input" />
            </div>

            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" class="input" />
            </div>

            <button class="btn btn-primary">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style></style>
