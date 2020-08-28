import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    toReduce(state) {
      state.count--
    }
  },
  actions: {
    actionIncrement(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 2000);
    },
    actionToReduce(context) {
      setTimeout(() => {
        context.commit('toReduce')
      }, 2000);
    },
  },
  modules: {

  }
})
