<template>
	<div>
		<h1 v-text="quantity"></h1>
		<button @click="increase">increase</button>
		<button @click="reduce">reduce</button>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';

	export default {
		computed: mapState(['quantity']),
		methods: mapMutations(['reduce', 'increase']),
		/*
		method 1 applicated reduce and increase
		methods: {
			increase () {
				//this.$store.state.quantity++;
				this.$store.commit('increase');
			},
			reduce () {
				//this.$store.state.quantity--;
				this.$store.commit('reduce');
			}
		},*/
	}
</script>

<style>
</style>
