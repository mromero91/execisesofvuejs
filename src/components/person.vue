<template>
	<div>
		<template v-if="person">
			<h1 v-text="dataPerson.name"></h1>
			<img :src="dataPerson.photo">
		</template>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {

		data () {
			return {
				person: null,
			}
		},
		mounted() {
			axios.get('https://randomuser.me/api')
				.then((request) => {
					this.person = request.data.results[0];
				})
		},
		computed: {
			dataPerson() {
				return {
					name: `${ this.person.name.first } ${ this.person.name.last }`,
					photo: `${this.person.picture.thumbnail}`,
				}
			}
		}
	}
</script>

<style>
</style>
