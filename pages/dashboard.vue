<template>
  <div class="dashboard">
    <h1>Welcome, to Dashboard Page</h1>
  </div>
</template>
<script>
export default {
  name: 'DashboardPage',
  layout: 'dashboard',
  middleware: ['auth'],
}
</script>
