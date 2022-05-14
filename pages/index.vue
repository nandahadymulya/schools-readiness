<template>
  <div>
    <!-- Main Hero -->
    <main>
      <div class="flex w-full h-96 justify-center align-center">
        <div class="flex flex-col w-1/2 justify-center align-center">
          <p class="text-blue-500">School education readiness.</p>
          <h1 class="text-5xl font-extrabold text-blue-900 lg:pt-5">
            Implementation <br />
            <span class="text-yellow-500">Blended-Learning</span> Methods
          </h1>
          <p class="font-light lg:pt-5">
            become a professional education that enhances <br />
            students' experience and competitiveness internationally.
          </p>
          <div class="flex gap-6 lg:pt-5">
            <button
              class="bg-blue-900 font-semibold lg:px-4 py-2 border-2 text-blue-100 border-blue-900 rounded transition duration-300 ease-in hover:bg-gradient-to-br hover:from-yellow-500 hover: to-blue-500 hover:border-white hover:text-blue-900"
            >
              <NuxtLink to="/register"> Get Started </NuxtLink>
            </button>
            <button
              class="bg-white font-semibold lg:px-4 py-2 border-2 text-blue-900 border-slate-400 rounded transition duration-300 ease-in hover:bg-gradient-to-br hover:from-yellow-500 hover: to-blue-500 hover:border-white hover:text-blue-900"
            >
              <NuxtLink to="/about"> Learn More </NuxtLink>
            </button>
          </div>
        </div>
        <div class="flex justify-end w-1/2">
          <img src="main-img.jpg" alt="SCH Main Image" />
        </div>
      </div>
    </main>
    <!-- End -->

    <!-- Section Technology Development -->
    <section class="lg:py-28">
      <div class="title-section">
        <div class="flex flex-col justify-center align-center text-center">
          <p class="text-blue-500">Depedencies</p>
          <h3 class="text-4xl font-bold text-blue-900">
            Technology Development
          </h3>
        </div>
        <div class="flex justify-center align-center lg:pt-20 lg:gap-36">
          <div v-for="item in depedencies" :key="item.logo" class="w-16 h-16">
            <img :src="item.logo" alt="" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section Rating of Schools -->
    <section class="lg: py-28">
      <div class="flex flex-col justify-center align-center text-center">
        <p class="text-blue-500">Junior High Schools</p>
        <h3 class="text-4xl font-bold text-blue-900">
          Rating of Schools Readiness
        </h3>
      </div>
      <div class="flex lg:pt-20 justify-center align-center">
        <!-- Card -->
        <div class="card bg-[#15263F] w-80 h-[32rem] rounded-xl p-6 space-y-4">
          <a href="#">
            <img
              class="w-full h-64 rounded-md transition hover:bg-cyan-300"
              src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFydHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </a>
          <div id="description" class="space-y-4">
            <a href="#">
              <h2
                class="text-white font-semibold text-xl transition hover:text-cyan-300"
              >
                Equilibrium #3429
              </h2>
            </a>
            <p class="text-slate-500 text-sm select-none">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div
              class="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6"
            >
              <span
                id="price"
                class="text-cyan-300 flex justify-between items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  viewBox="0 0 320 512"
                  fill="#67E7F9"
                >
                  <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                  />
                </svg>
                0.041 ETH
              </span>
              <span
                class="text-slate-500 flex justify-between items-center select-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                3 days left
              </span>
            </div>
            <div class="flex text-sm items-center">
              <img
                src="https://i.pravatar.cc/30?img=56"
                alt="avatar"
                class="rounded-full border border-white"
              />
              <span class="ml-2 text-slate-500">
                Creation of
                <a
                  href="#"
                  class="text-gray-300 transition hover:text-cyan-300"
                >
                  d855
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      depedencies: [
        {
          logo: 'js.svg',
        },
        {
          logo: 'nuxt.svg',
        },
        {
          logo: 'hasura.svg',
        },
        {
          logo: 'graphql.svg',
        },
        {
          logo: 'apollo.svg',
        },
        {
          logo: 'python.svg',
        },
        {
          logo: 'django.svg',
        },
      ],
    }
  },
}
</script>
