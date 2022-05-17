<template>
  <div>
    <!-- Main Cover -->
    <main>
      <div class="flex w-full h-96 justify-center align-center text-center">
        <div class="flex flex-col justify-center">
          <h1 class="text-6xl font-extrabold text-blue-900">
            List of Schools <br />
            <span class="text-yellow-500">Who are Participants</span>
          </h1>
          <p class="font-light lg:pt-5">
            schools that measure blended-learning readiness <br />
            using machine learning technology provided on this website.
          </p>
        </div>
      </div>
    </main>
    <!-- End -->

    <!-- Content -->
    <div
      aria-label="group of cards"
      tabindex="0"
      class="focus:outline-none w-full py-8"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center justify-center"
      >
        <div
          v-for="(sch, index) in schools"
          :key="index"
          tabindex="0"
          aria-label="card 1"
          class="focus:outline-none lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded"
        >
          <div class="flex items-center border-b border-gray-200 pb-6">
            <img
              src="apollo.svg"
              alt="coin avatar"
              class="w-12 h-12 rounded-full"
            />
            <div class="flex items-start justify-between w-full">
              <div class="pl-3 w-full">
                <p
                  tabindex="0"
                  class="focus:outline-none text-xl font-medium leading-5 text-gray-800"
                >
                  {{ sch.sch_name }}
                </p>
                <p
                  tabindex="0"
                  class="focus:outline-none text-sm leading-normal pt-2 text-gray-500"
                >
                  {{ sch.sch_npsn }}
                </p>
              </div>
              <div role="img" aria-label="bookmark">
                <svg
                  class="focus:outline-none"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z"
                    stroke="#2C3E50"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="px-2">
            <p
              tabindex="0"
              class="focus:outline-none text-sm leading-5 py-4 text-gray-600"
            >
              A group of people interested in dogecoin, the currency and a bit
              of side for the meme and dof that we all know and love. These
              cases are perfectly simple and easy to distinguish.
            </p>
            <div tabindex="0" class="focus:outline-none flex">
              <div
                class="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
              >
                {{ sch.sch_kab_kota }}
              </div>
              <div
                class="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
              >
                {{ sch.sch_province }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getSchools from '@/graphql/getSchools.gql'

export default {
  name: 'ShcoolsPage',
  apollo: {
    schools: {
      query: getSchools,
    },
  },
}
</script>
