<template>
  <div>
    {{ getDetail[0] }}

    <NuxtLink to="/schools">Back</NuxtLink>
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
