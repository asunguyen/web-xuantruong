
const getDefaultState = () => {
    return {
        dataSlie: []
    }
}

const state = getDefaultState()

const mutations = {
    GET_LIST_SLIDE: (state, data) => {
        state.dataSlie = data
    },
}

const actions = {
    getListSlider({ commit }, data) {
        commit('GET_LIST_SLIDE', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

