<template>
  <div>
    <TheNavbar />
    <div class="lg:p-28">
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/Navbar.vue'
import TheFooter from '@/components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheNavbar,
    TheFooter,
  },
}
</script>
