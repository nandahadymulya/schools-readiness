import gql from 'graphql-tag'

const state = () => ({
  listSchool: [],
  schoolDetail: {},
  schoolRating: [],
})

const mutations = {
  setListSchool(state, param) {
    state.listSchool = param
  },

  setSchoolDetail(state, param) {
    state.schoolDetail = param
  },

  setSchoolRating(state, param) {
    state.schoolRating = param
  },
}

const actions = {
  async fetchSchools(store) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query getSchools {
          schools(order_by: { sch_npsn: asc }) {
            sch_id
            sch_npsn
            sch_name
            sch_kec
            sch_kab_kota
            sch_province
            sch_zip_code
            sch_address
          }
        }
      `,
    })
    store.commit('setListSchool', response.data.schools)
  },

  async fetchSchoolByNpsn(store, _eq) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query getSchoolByNpsn($_eq: Int) {
          schools(where: { sch_npsn: { _eq: $_eq } }) {
            sch_id
            sch_npsn
            sch_name
            sch_kec
            sch_kab_kota
            sch_province
            sch_zip_code
            sch_address
          }
        }
      `,
      variables: { _eq },
    })
    store.commit('setSchoolDetail', response.data.schools)
  },

  async fetchSchoolRating(store) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: gql`
        query getSchoolRating {
          schools(limit: 3, where: { id_readiness: { _eq: 1 } }) {
            sch_id
            sch_npsn
            sch_name
            sch_address
            sch_website
            readinessStatus {
              status
            }
          }
        }
      `,
    })
    store.commit('setSchoolRating', response.data.schools)
  },
}

export default {
  state,
  mutations,
  actions,
}
