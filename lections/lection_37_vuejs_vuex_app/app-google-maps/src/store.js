import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

// mutations
export const UPDATE_MARKERS_MUTATION = 'UPDATE_MARKERS_MUTATION';
export const UPDATE_MARKER_MUTATION = 'UPDATE_MARKER_MUTATION';
export const ADD_EMPTY_MARKER_MUTATION = 'ADD_EMPTY_MARKER_MUTATION';
export const ADD_MARKER_MUTATION = 'ADD_MARKER_MUTATION';
export const CENTER_UPDATE = 'CENTER_UPDATE';

// actions
export const UPDATE_MARKERS_ACTION = 'UPDATE_MARKERS_ACTION';



const store = new Vuex.Store({
    state: {
        markers: [],
        center: {
            lat: 10,
            lng: 10
        }
    },
    getters: {
        center(state) {
            return state.center;
        }
    },
    mutations: {
        [CENTER_UPDATE](state, indexOfMarker) {
            state.center = state.markers[indexOfMarker].position;
        },
        [UPDATE_MARKERS_MUTATION](state, payload) {
            state.markers = payload.markers;
        },
        [ADD_EMPTY_MARKER_MUTATION](state) {
            state.markers.push({
                title: '',
                position: {
                    lat: null,
                    lng: null
                }
            })
        },
        [ADD_MARKER_MUTATION](state, payload) {
            state.markers.push({
                title: payload.title,
                position: payload.position
            })
        },
        [UPDATE_MARKER_MUTATION](state, payload) {
            if(!state.markers[payload.index]) {
                return
            }
            state.markers[payload.index].position = payload.position;
        }
    },
    actions: {
        [UPDATE_MARKERS_ACTION]({commit}, payload) {
            commit(UPDATE_MARKERS_MUTATION, payload);
        }
    }
})

export default store;