const state = {
    isLoading: null,
};
const getters = {
    getIsLoading: (state) => state.isLoading,
};
const actions = {
    SetLoading({ commit }, isLoading){
        commit('setIsLoading', isLoading)
    },
};
const mutations = {
    setIsLoading(state, isLoading){
        state.isLoading = isLoading
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};