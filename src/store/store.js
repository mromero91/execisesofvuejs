import Vue from 'vue';
import Vuex from 'vuex'; 

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		quantity: 0,
	},
	getters: {
		
	},
	mutations: {
		increase: (state) => state.quantity++,
		reduce: (state) => state.quantity--,
	}
});