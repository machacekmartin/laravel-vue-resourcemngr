import { getFormModel } from '../../helpers/form-model-picker'

const state = {
    type: null,
    purpose: null,
    inputs: null,
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
    getModalPurpose: (state) => state.purpose,
    getModalInputs: (state) => state.inputs,
    getModalFormData: (state) => state.formData
};
const actions = {
    UpdateFormData({ commit }, input){
        commit('setFormData', input)
        if (input.value === '' || input.value === null){
            commit('removeFormData', input)
        }
        console.log("=============")
        for (let key of state.formData.keys()){
            console.log("key |", key)
        }
        for (let value of state.formData.values()){
            console.log("value | ", value)
        }
    },
    ActivateModal({ commit }, modal){
        commit('setType', modal.type)
        commit('setPurpose', modal.purpose)
        commit('setInputs', getFormModel(modal.purpose))
        commit('setInputData', modal.inputData)
        commit('clearFormData')
    },

    DeactivateModal({ commit }){
        commit('setType', null)
        commit('setPurpose', null)
        commit('setInputs', null)
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
    setInputs(state, inputs){
        state.inputs = inputs
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