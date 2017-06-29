import Vue from 'vue'

const shared = {
	user: {
		name: 'Miguel Romero',
	}
}

new Vue({
	el: '#app-first',
	data: shared
})

new Vue({
	el: '#app-second',
	data: shared
})
