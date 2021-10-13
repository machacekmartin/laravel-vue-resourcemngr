import axios from "axios";

const state = {
    codes: null,
};
const getters = {
    getCodes: (state) => state.codes,
    getCode: (state) => (id) => {
        return state.codes.find(code => code.id === id)
    }
};
const actions = {
    async LoadCodes({ state, commit }){
        let codes = (await axios({
            method: 'GET',
            url: '/api/codes'
        })).data
        
        codes.map(code => {
            code.type = 'code'
        })
        commit('setCodes', codes)        
    },
    async CreateCode({ state, commit }, formData){
        let code = (await axios({
            method: 'POST',
            url: 'api/codes',
            data: formData
        })).data
        code.type = 'code'
        
        commit('addCode', code)
    },
    async EditCode({ state, commit }, data){
        
        data.formData.append('_method', 'PATCH')
        let newCode = (await axios({
            method: 'POST',
            url: 'api/codes/'+ data.id,
            data: data.formData
        })).data

        const index = state.codes.findIndex(code => code.id === data.id)
        commit('updateCode', {code: newCode, index: index})
    },
    async DeleteCode({state, commit}, code){ 
        const index = state.codes.indexOf(code)

        let response = (await axios({
            method: 'POST',
            url: 'api/codes/'+ code.id,
            data: {'_method': 'DELETE'}
        })).data

        commit('removeCode', index)
    },
};
const mutations = {
    updateCode(state, {code, index}){
        Object.assign(state.codes[index], code)
    },
    removeCode(state, index){
        state.codes.splice(index, 1)
    },
    addCode(state, code){
        state.codes.push(code)
    },
    setCodes(state, codes){
        state.codes = codes
    }

};
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};