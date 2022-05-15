const state = () => ({
  token: null,
})

const mutations = {
  setToken(state, param) {
    state.token = param
  },
}

const actions = {
  setToken(store, param) {
    store.commit('setToken', param)
  },
  fetchLogin(store, param) {
    // const response = await this.$axios.post('', {
    //   username: param.email,
    //   password: param.password,
    // })

    // this.$cookies.set('token', response.data.result.token, {
    //   path: '/',
    //   maxAge: 60 * 60 * 24 * 7,
    // })
    // store.commit('setToken', response.data.result.token)

    // Hard Code
    if (param.username === 'admin' && param.password === 'password') {
      this.$cookies.set('token', 'isLoggedIn')
      this.$router.push('/dashboard')
    }
  },
  fetchLogout(store) {
    this.$cookies.remove('token')
    this.$router.push('/login')
  },
}

export { state, mutations, actions }
