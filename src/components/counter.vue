<template>
	<div>
		<h1 v-text="quantity"></h1>
		<button @click="increase">Increase</button>
		<button @click="reduce">reduce</button>
	</div>
</template>

<script>

	export default {

		props: ['quantity'],
		data () {
			return {}
		},
		mounted() {
		},
		methods: {
			increase() {
				this.$emit('increase');
			},
			reduce() {
				this.$emit('reduce');
			},
		},
		computed: {
		}
	}
</script>

<style>
</style>
