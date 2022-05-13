<template>
  <div class="dashboard">
    <h1>This is dashboard.</h1>
    <SidebarComponent />
  </div>
</template>
<script>
import SidebarComponent from '@/components/Sidebar.vue'

export default {
  name: 'DashboardLayout',
  components: {
    SidebarComponent,
  },
}
</script>
