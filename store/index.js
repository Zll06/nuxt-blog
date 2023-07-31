export const state = () => ({
  count: 0
})

export const mutations = {
  addCount(state) {
    state.count ++
  }
}

export const getters = {
  getCount: state => state.count
}
