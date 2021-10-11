const state = {
    resources: null,
};
const getters = {
    getResources: (state) => state.resources
};
const actions = {
    async LoadResources({ commit }){
        //const resources = await this.$http.get('')
        const resources = testResources;
        commit('setResources', resources)
    }
};
const mutations = {
    setResources(state, resources){
        state.resources = resources
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};

const testResources = [
    {
        type: 'link',
        title: 'ASD NKASD JNKLASD JNKL ASDKJNASD JNKASD jnklasd ASD NKASD JNKLASD JNKL ASDKJNASD JNKASD jnklasd ASD',
        link: 'https://www.gogle.com/docs/documents/awdjnawd',
        newTab: true
    },
    {
        type: 'file',
        title: 'My first oficial PDF document',
        file: '/storage/sample.pdf'
    },
    {
        type: 'code',
        title: 'hey1',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        snippet: 
`<form action="http://maps.google.com/maps" method="get" target="_blank">
<label for="saddr">Enter your location</label>
<input type="text" name="saddr" />
<input type="hidden" name="daddr" value="350 5th Ave New York, NY 10018 (Empire State Building ) 350 5th Ave New York, NY 10018 (Empire State Building)" />
<input type="submit" value="Get directions" />
</form>
<form action="http://maps.google.com/maps" method="get" target="_blank">
<label for="saddr">Enter your location</label>
<input type="text" name="saddr" />
<input type="hidden" name="daddr" value="350 5th Ave New York, NY 10018 (Empire State Building)" />
<input type="submit" value="Get directions" />
</form>
<form action="http://maps.google.com/maps" method="get" target="_blank">
<label for="saddr">Enter your location</label>
<input type="text" name="saddr" />
<input type="hidden" name="daddr" value="350 5th Ave New York, NY 10018 (Empire State Building ) 350 5th Ave New York, NY 10018 (Empire State Building)" />
<input type="submit" value="Get directions" />
</form>
<form action="http://maps.google.com/maps" method="get" target="_blank">
<label for="saddr">Enter your location</label>
<input type="text" name="saddr" />
<input type="hidden" name="daddr" value="350 5th Ave New York, NY 10018 (Empire State Building)" />
<input type="submit" value="Get directions" />
</form>`
    },
    {
        type: 'file',
        title: 'hey2',
        file: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
        type: 'link',
        title: 'ASD NKASD JNKLASD JNKL ASDKJNASD JNKASD jnklasd ',
        link: 'https://www.gogle.com/docs',
        newTab: false
    },
    {
        type: 'link',
        title: 'hey3',
        link: 'https://www.gogle.com/docs/documents/',
        newTab: true
    },
    {
        type: 'file',
        title: 'hey2',
        file: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
        type: 'file',
        title: 'hey2',
        file: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
        type: 'link',
        title: 'ASD NKASD JNKLASD JNKL ASDKJNASD JNKASD jnklasd ',
        link: 'https://www.gogle.com',
        newTab: true
    },
    {
        type: 'code',
        title: 'hey1',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        snippet: 
`<form action="http://maps.google.com/maps" method="get" target="_blank">
<label for="saddr">Enter your location</label>
<input type="text" name="saddr" />
<input type="hidden" name="daddr" value="350 5th Ave New York, NY 10018 (Empire State Building ) 350 5th Ave New York, NY 10018 (Empire State Building)" />
<input type="submit" value="Get directions" />
</form>
<form action="http://maps.google.com/maps" method="get" target="_blank">
<label for="saddr">Enter your location</label>
<input type="text" name="saddr" />
<input type="hidden" name="daddr" value="350 5th Ave New York, NY 10018 (Empire State Building)" />
<input type="submit" value="Get directions" />
</form>`
    },
]