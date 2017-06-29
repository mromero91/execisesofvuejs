import Vue from 'vue';
import Vuex from 'vuex'; 

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		name: 'Miguel Angel',
		last_name: 'Romero',
		age: 25,
		ciudad: 'Stanta Catarina',
	},
});