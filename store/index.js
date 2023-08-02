export const state = () => ({
  scrollTop: 0
})

export const mutations = {
  UPDATE_SCROLL_TOP(state, data) {
    state.scrollTop = data
  }
}

export const getters = {
  scrollTop: state => state.scrollTop
}
