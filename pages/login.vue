<template>
  <div>
    <!-- Main -->
    <main>
      <div class="flex w-full h-screen text-center">
        <div class="flex w-80">
          <img src="assets/img/login.jpg" class="w-full" alt="" />
        </div>
        <div class="flex flex-col w-full lg:p-12">
          <div class="flex">
            <div class="flex flex-col lg:gap-9 text-left">
              <NuxtLink to="/" class="flex items-center text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
                <div>Back to home</div>
              </NuxtLink>

              <NuxtLink to="/" class="font-bold lg:text-3xl text-blue-900"
                >Sch<span class="text-yellow-500">oo</span
                ><span class="text-blue-500">l.</span>
              </NuxtLink>

              <h3 class="text-4xl text-blue-900">Let's Begin</h3>
            </div>
          </div>
          <div class="flex h-full justify-center items-center">
            <div
              class="flex justify-center align-center items-center card rounded-xl border-2 border-blue-100/500"
            >
              <form
                method="POST"
                class="flex flex-col justify-center w-full text-lg"
                @submit.prevent="submit"
              >
                <div
                  class="flex flex-col justify-center items-center font-light"
                >
                  <label class="lg:py-6" for="username">Username</label>
                  <input
                    v-model="username"
                    class="text-center text-blue-500 border-2 w-3/4 h-12 border-blue-500 rounded-full"
                    type="text"
                    name="username"
                    required="required"
                  />
                </div>
                <div
                  class="flex flex-col justify-center items-center font-light lg:py-6"
                >
                  <label class="lg:py-6" for="username">Password</label>
                  <input
                    v-model="password"
                    class="text-center text-blue-500 border-2 w-3/4 h-12 border-blue-500 rounded-full"
                    type="text"
                    name="password"
                    required="required"
                  />
                </div>
                <div class="flex flex-col justify-center items-center lg:py-6">
                  <input
                    class="border-2 w-3/4 h-12 border-blue-500 bg-blue-500 rounded-full text-blue-100"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- End -->
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'blank',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('authentication/fetchLogin', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>
<style lang="postcss" scoped>
.card {
  width: 500px;
  height: 519px;
}
</style>
