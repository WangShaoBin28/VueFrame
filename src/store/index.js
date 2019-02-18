import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

// 定义状态
const state = {
  test: '',
  token: '',
  user: null
}
// 新建状态管理器并导出
export default new Vuex.Store({
  // 绑定状态
  state,
  actions,
  getters,
  mutations,
  plugins: [vuexLocal.plugin]
})
