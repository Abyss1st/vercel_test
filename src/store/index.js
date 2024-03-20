import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        version: {
            code: 100,
            displayName: "v1.0",
            dsc: "初始化版本"
        }
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
