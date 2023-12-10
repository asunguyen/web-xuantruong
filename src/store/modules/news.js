
const getDefaultState = () => {
    return {
        news: [],
        categoryNew: []
    }
}

const state = getDefaultState()

const mutations = {
    GET_LIST_NEWS: (state, data) => {
        state.news = data
    },
    GET_LIST_CATEGORY: (state, data) => {
        state.categoryNew = data
    },
}

const actions = {
    getListnNews({ commit }, data) {
        commit('GET_LIST_NEWS', data)
        console.log('newdata', data)
    },
    getListnCategory({ commit }, data) {
        commit('GET_LIST_CATEGORY', data)
        console.log('newdata2', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

