const state = {
    type: null,
    purpose: null,
    inputData: null,
    formData: new FormData()
};
const getters = {
    isModalActive: (state) => {
        if (state.purpose !== null){
            return true
        }
        return false
    },
    getModalInputData: (state) => state.inputData,
    getModalType: (state) => state.type,
    getModalPurpose: (state) => state.purpose
};
const actions = {
    UpdateFormData({ commit }, input){
        commit('setFormData', input)
        if (input.value == '' || input.value === null){
            commit('removeFormData', input)
        }
    },
    ActivateModal({ commit }, modal){
        commit('setType', modal.type)
        commit('setPurpose', modal.purpose)
        commit('setInputData', modal.inputData)
        commit('clearFormData')
    },

    DeactivateModel({ commit }){
        commit('setType', null)
        commit('setPurpose', null)
        commit('setInputData', null)
        commit('clearFormData')
    },
};
const mutations = {
    setType(state, type){
        state.type = type
    },
    setPurpose(state, purpose){
        state.purpose = purpose
    },
    setInputData(state, inputData){
        state.inputData = inputData
    },
    setFormData(state, input){
        state.formData.set(input.name, input.value)
    },
    removeFormData(state, input){
        state.formData.delete([input.name]);
    },
    clearFormData(state){
        state.formData = new FormData()
    },
};
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};