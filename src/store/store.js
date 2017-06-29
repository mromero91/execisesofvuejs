import Vue from 'vue';
import Vuex from 'vuex'; 

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		tasks: [
			{title: 'Ir al centro', completed: false,},
			{title: 'Read book of big data', completed: false,},
		],
	},
	getters: {
		tasksCompleted: (state) => {
			return state.tasks.filter((task) => task.completed).length;
		}
	}
});