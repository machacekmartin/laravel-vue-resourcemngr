import Vue from 'vue'
import Vuex from "vuex";

import modal from './modules/modal';
import links from './modules/links';
import files from './modules/files';
import codes from './modules/codes';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        modal,
        links,
        files,
        codes
    }
});