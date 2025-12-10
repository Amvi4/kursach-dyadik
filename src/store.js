import { reactive, computed } from 'vue'

const state = reactive({
  token: localStorage.getItem('') || null
})

export default {
  state,
  getters: {
    isAuthenticated: computed(() => !!state.token)
  },
  mutations: {
    setToken(token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    logout() {
      state.token = null
      localStorage.removeItem('token')
    }
  }
}
