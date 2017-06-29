<template>
	<div>
		<template>

			<ul>
				<li v-for="task in taskPending">
					<input type="checkbox" @click="updateTask(task)">
					<label v-text="task.name"></label>
				</li>
			</ul>

			<hr />

			<ul>
				<li v-for="task in taskCompleted">
					<input type="checkbox" @click="updateTask(task)">
					<label v-text="task.name"></label>
				</li>
			</ul>

		</template>
	</div>
</template>

<script>

	export default {

		data () {
			return {
				tasks: [
					{name: 'Ir al centro', completed: false},
					{name: 'Ir a quick learning', completed: false},
				],
				finished: [],
			}
		},
		methods: {
			updateTask (task) {
				return task.completed = !task.completed;
			}
		},
		computed: {
			taskCompleted() {
				return this.tasks.filter((task) => task.completed);
			},
			taskPending() {
				return this.tasks.filter((task) => !task.completed);
			}
		}
	}
</script>

<style scoped>
	/*
	 * @scoped is only this componented
	 */

	li {
		color: red;
	}
</style>
