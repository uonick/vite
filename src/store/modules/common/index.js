import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './state'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
