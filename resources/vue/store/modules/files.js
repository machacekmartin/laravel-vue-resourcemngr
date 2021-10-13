import axios from "axios";

const state = {
    files: null,
};
const getters = {
    getFiles: (state) => state.files,
    getFile: (state) => (id) => {
        return state.files.find(file => file.id === id)
    }
};
const actions = {
    async LoadFiles({ state, commit }){
        let files = (await axios({
            method: 'GET',
            url: '/api/files'
        })).data
        
        files.map(file => {
            file.type = 'file'
        })
        commit('setFiles', files)        
    },
    async CreateFile({ state, commit }, formData){
        let file = (await axios({
            method: 'POST',
            url: 'api/files',
            data: formData
        })).data
        file.type = 'file'
        
        commit('addFile', file)
    },
    async EditFile({ state, commit }, data){
        
        data.formData.append('_method', 'PATCH')
        let newFile = (await axios({
            method: 'POST',
            url: 'api/files/'+ data.id,
            data: data.formData
        })).data

        const index = state.files.findIndex(file => file.id === data.id)
        commit('updateFile', {file: newFile, index: index})
    },
    async DeleteFile({state, commit}, file){ 
        const index = state.files.indexOf(file)

        let response = (await axios({
            method: 'POST',
            url: 'api/files/'+ file.id,
            data: {'_method': 'DELETE'}
        })).data

        commit('removeFile', index)
    },
};
const mutations = {
    updateFile(state, {file, index}){
        Object.assign(state.files[index], file)
    },
    removeFile(state, index){
        state.files.splice(index, 1)
    },
    addFile(state, file){
        state.files.push(file)
    },
    setFiles(state, files){
        state.files = files
    }

};
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};