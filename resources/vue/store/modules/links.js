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
    async LoadLinks({ commit }){
        //const links = await this.$http.get('')
        let links = [
            {
                id: 0,
                title: 'ASD NKASD JNKLASD JNKL ASDKJNASD JNKASD jnklasd ASD NKASD JNKLASD JNKL ASDKJNASD JNKASD jnklasd ASD',
                path: 'https://www.gogle.com/docs/documents/awdjnawd',
                newTab: true
            },
            {
                id: 1,
                title: 'ASD NKASD JNKLASD JNKL ASDKJNASD JNKASD jnklasd ',
                path: 'https://www.gogle.com/docs',
                newTab: false
            },
            {
                id: 2,
                title: 'hey3',
                path: 'https://www.gogle.com/docs/documents/',
                newTab: true
            },
            {
                id: 3,
                title: 'ASD NKASD JNKLASD JNKL ASDKJNASD JNKASD jnklasd ',
                path: 'https://www.gogle.com',
                newTab: true
            },   
        ]
        links.map(link => {
            link.type = 'link'
        })
        commit('setLinks', links)
        
    }
};
const mutations = {
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