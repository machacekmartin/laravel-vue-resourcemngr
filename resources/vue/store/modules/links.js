import axios from "axios";

const state = {
    links: null,
};
const getters = {
    getLinks: (state) => state.links,
    getLink: (state) => (id) => {
        return state.links.find(link => link.id === id)
    }
};
const actions = {
    async LoadLinks({ state, commit }){
        let links = (await axios({
            method: 'GET',
            url: '/api/links'
        })).data
        
        links.map(link => {
            link.type = 'link'
        })
        commit('setLinks', links)        
    },
    async CreateLink({ state, commit }, formData){
        let link = (await axios({
            method: 'POST',
            url: 'api/links',
            data: formData
        })).data
        link.type = 'link'
        
        commit('addLink', link)
    },
    async EditLink({ state, commit }, data){
        data.formData.append('_method', 'PATCH')
        let newLink = (await axios({
            method: 'POST',
            url: 'api/links/'+ data.id,
            data: data.formData
        })).data

        const index = state.links.findIndex(link => link.id === data.id)
        commit('updateLink', {link: newLink, index: index})
    },
    async DeleteLink({state, commit}, link){ 
        const index = state.links.indexOf(link)

        let response = (await axios({
            method: 'POST',
            url: 'api/links/'+ link.id,
            data: {'_method': 'DELETE'}
        })).data

        commit('removeLink', index)
    },
};
const mutations = {
    updateLink(state, {link, index}){
        Object.assign(state.links[index], link)
    },
    removeLink(state, index){
        state.links.splice(index, 1)
    },
    addLink(state, link){
        state.links.push(link)
    },
    setLinks(state, links){
        state.links = links
    }

};
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};