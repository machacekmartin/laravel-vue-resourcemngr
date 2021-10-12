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
    async LoadCodes({ commit }){
        //const codes = await this.$http.get('')
        let codes = [
            {
                id: 0,
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
                id: 1,
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
        codes.map(code => {
            code.type = 'code'
        })
        commit('setCodes', codes)
        
    },
    async DeleteCode({state, commit}, id){
        //https.$delete...
    },
    async CreateCode({ state, commit }, formData){
        console.log(formData)

        //let response = await this.$http.post('/api/codes/create', formData).data
        // return response.code OK/ERR
    },
    async EditCode({ state, commit }, formData){
        // get id from formData, 
        //http.edit based on id from formData

    }
};
const mutations = {
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