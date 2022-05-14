<template>
  <nav class="w-full fixed shadow lg:bg-white">
    <div class="flex flex-col lg:flex-row lg:items-center lg:px-28 lg:py-0">
      <div
        class="flex items-center justify-between px-4 py-4 lg:px-0 lg:py-0 border-b border-b-indigo-300 lg:border-b-0"
      >
        <div>
          <NuxtLink to="/" class="font-bold lg:text-2xl text-blue-900"
            >Sch<span class="text-yellow-400">oo</span
            ><span class="text-blue-500">l.</span>
          </NuxtLink>
        </div>
        <div>
          <button class="focus:outline-none block lg:hidden" @click="setIsOpen">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Navigation -->
      <div
        v-if="isOpen ? 'block' : 'hidden'"
        class="flex flex-col lg:flex-row w-full justify-end py-4 lg:py-0"
      >
        <!-- Navigation Menu -->
        <div class="flex flex-col lg:flex-row">
          <div v-for="item in menus" :key="item.name" class="block">
            <NuxtLink
              :to="item.path"
              class="block px-5 py-2 lg:py-5 text-gray-300 transition duration-300 hover:text-yellow-500 active:text-blue-900"
              >{{ item.name }}</NuxtLink
            >
          </div>
        </div>
        <!-- End -->

        <!-- Login Button / Profile Photos -->
        <div class="flex flex-col lg:flex-row">
          <div v-if="!userLogin" class="block">
            <NuxtLink
              to="/login"
              class="block lg:m-1 px-4 lg:px-7 py-2 lg:py-3 border-0 lg:border-2 rounded-lg text-blue-900 transition duration-300 hover:text-yellow-500 hover:bg-blue-900 active:text-blue-900"
              >Login</NuxtLink
            >
          </div>
          <div v-else class="block">Profile Photos</div>
        </div>
        <!-- End -->
      </div>
      <!-- End v-if -->
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      menus: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Schools',
          path: '/schools',
        },
        {
          name: 'About',
          path: '/about',
        },
      ],
      isOpen: false,
      userLogin: false,
    }
  },
  methods: {
    setIsOpen() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
