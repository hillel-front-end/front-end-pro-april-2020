import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        title: 'Hello title!',
        count: 140,
    },
    getters: {
        title: state => {
            return state.title;
        },
        count: state => state.count,
        titleSplitted: state => state.title.split('')
    },
    mutations: {
        countUpdate(state, newValue) {
            state.count = newValue;
        },
        titleUpdate(state, payload) {
            state.title = payload.value;
        }
    },
    actions: {
        countUpdateDelay({commit}, payload){
           setTimeout(() => {
            commit('countUpdate', payload.newValue);
           }, 1000)
        }
    }
})

export default store;