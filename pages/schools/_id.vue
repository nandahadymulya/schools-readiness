<template>
  <div>
    <ApolloQuery
      :query="require('../../graphql/getSchoolById.gql')"
      :variables="{ id: _schId }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          {{ data.schools.sch_name }}
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>
<script>
import getSchoolById from '@/graphql/getSchoolById'

export default {
  name: 'SchoolDetailPage',
  apollo: {
    schools: {
      query: getSchoolById,
    },
  },
  computed: {
    _schId() {
      return this.$route.params.id
    },
  },
  methods: {},
}
</script>
