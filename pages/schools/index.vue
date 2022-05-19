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

    <!-- Filter  -->
    <!-- <label class="relative block">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 stroke-slate-300"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        v-model="searchSchool"
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..."
        type="text"
        name="search"
        @keyup="getSearchSchool"
      />
    </label> -->
    <!-- End -->

    <!-- Content -->
    <div
      aria-label="group of cards"
      tabindex="0"
      class="focus:outline-none flex justify-center py-8"
    >
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 place-content-center">
        <div
          v-for="(school, index) in getSchools"
          :key="(school.sch_id, index)"
          tabindex="0"
          aria-label="card 1"
          class="focus:outline-none lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded"
        >
          <div class="flex items-center border-b border-gray-200 pb-6">
            <img
              src="assets/logo/academic.svg"
              alt="coin avatar"
              class="w-12 h-12 border rounded-full"
            />
            <div class="flex items-start justify-between w-full">
              <div class="pl-3 w-full">
                <p
                  tabindex="0"
                  class="focus:outline-none text-sm leading-5 text-gray-800"
                >
                  NPSN: {{ school.sch_npsn }}
                </p>
                <p
                  tabindex="0"
                  class="focus:outline-none text-xl leading-normal pt-2 font-semibold text-gray-800"
                >
                  {{ school.sch_name }}
                </p>
              </div>
              <div role="img" aria-label="link">
                <Nuxt-Link :to="`/schools/${school.sch_npsn}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 transition ease-in duration-300 hover:text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Nuxt-Link>
              </div>
            </div>
          </div>
          <div class="px-2">
            <p
              tabindex="0"
              class="focus:outline-none text-sm leading-5 py-4 text-gray-800"
            >
              Location: {{ school.sch_address }}, {{ school.sch_kab_kota }},
              {{ school.sch_province }},
              {{ school.sch_zip_code }}
            </p>
            <div tabindex="0" class="focus:outline-none flex justify-center">
              <div
                class="py-2 px-4 text-xs leading-3 text-white rounded-full bg-green-500"
              >
                <!-- {{ school.sch_zip_code }} -->
              </div>
              <div
                class="py-2 px-4 ml-3 text-xs leading-3 text-white rounded-full bg-red-500"
              >
                <!-- {{ school.sch_status }} Not Yet Ready -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import filterSchools from '@/graphql/filterSchools.gql'

export default {
  name: 'ShcoolsPage',
  computed: {
    getSchools() {
      return this.$store.state.schools.listSchool
    },
  },
  mounted() {
    this.fetchSchools()
  },
  methods: {
    fetchSchools() {
      this.$store.dispatch('schools/fetchSchools')
    },
  },
}
</script>
