export const delaySetTest = ({commit, state}) => {
  setTimeout(() => {
    commit('setTest', '我是王少彬,too')
  }, 5000)
}
