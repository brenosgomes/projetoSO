import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memory: [{name: "Livre", length: 100}],
    lastPoint: ''
  },
  mutations: {
    chagePoint(newPoint){
      this.lastPoint = newPoint
    }
  },
  actions: {

  }
})
