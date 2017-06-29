<template>
	<div>
		<h1 v-text="quantity"></h1>
		<button @click="increase">Increase</button>
		<button @click="reduce">reduce</button>
	</div>
</template>

<script>

	export default {

		// props: ['quantity'],
		data () {
			return {}
		},
		mounted() {
		},
		methods: {
			increase() {
				// this.$emit('increase');
				this.$store.state.quantity++;
			},
			reduce() {
				// this.$emit('reduce');
				this.$store.state.quantity--;
			},
		},
		computed: {
			quantity () {
				return this.$store.state.quantity;
			}
		}
	}
</script>

<style>
</style>
