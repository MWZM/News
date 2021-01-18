import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '../utils/storage'

Vue.use(Vuex)

const USER = 'USER'
export default new Vuex.Store({
  state: {
    user: getItem(USER)
  },
  mutations: {
    setToken (state, user) {
      state.user = user
      setItem(USER, user)
    }
  },
  actions: {
  },
  modules: {
  }
})
