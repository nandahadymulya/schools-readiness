<template>
  <div>
    <div class="lg:pb-5">
      <NuxtLink to="/schools" class="text-blue-500">Back</NuxtLink>
    </div>
    <!-- Main Cover -->
    <main>
      <div
        class="flex w-full h-96 justify-center align-center text-center border rounded bg-gradient-to-r from-blue-900 to-blue-500"
      >
        <div class="flex flex-col justify-center">
          <img src="assets/img/home.jpg" alt="Cover Detail Page" />
        </div>
      </div>
    </main>
    <!-- End -->

    <!-- Section -->
    <div class="flex py-28">
      <img src="" alt="" />
      <ul v-for="(detail, index) in getDetail" :key="(detail.sch_npsn, index)">
        <li>School Name: {{ detail.sch_name }}</li>
        <li>NPSN: {{ detail.sch_npsn }}</li>
        <li>Address: {{ detail.sch_address }}</li>
        <li>Regional: {{ detail.sch_kec }}</li>
        <li>City: {{ detail.sch_kab_kota }}</li>
        <li>Province: {{ detail.sch_province }}</li>
        <li>ZIP Code: {{ detail.sch_zip_code }}</li>
      </ul>
    </div>
    <!-- End -->
  </div>
</template>
<script>
export default {
  computed: {
    npsn() {
      return this.$route.params.npsn
    },
    getDetail() {
      return this.$store.state.schools.schoolDetail
    },
  },
  mounted() {
    this.$store.dispatch('schools/fetchSchoolByNpsn', this.npsn)
  },
}
</script>
