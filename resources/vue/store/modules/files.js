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
    async LoadFiles({ commit }){
        //const files = await this.$http.get('')
        let files = [
            {
                id: 0,
                title: 'My first oficial PDF document',
                file: '/storage/sample.pdf'
            },
            {
                id: 1,
                title: 'hey2',
                file: 'https://www.africau.edu/images/default/sample.pdf'
            },
            {
                id: 2,
                title: 'hey2',
                file: 'https://www.africau.edu/images/default/sample.pdf'
            },
            {
                id: 3,
                title: 'hey2',
                file: 'https://www.africau.edu/images/default/sample.pdf'
            },
        ]
        files.map(file => {
            file.type = 'file'
        })
        commit('setFiles', files)
    },
    async DeleteFile({state, commit}, id){
        //https.$delete...
    },
    async CreateFile({ state, commit }, formData){
        console.log(formData)

        //let response = await this.$http.post('/api/files/create', formData).data
        // return response.code OK/ERR
    },
    async EditFile({ state, commit }, formData){
        // get id from formData, 
        //http.edit based on id from formData
    }
};
const mutations = {
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