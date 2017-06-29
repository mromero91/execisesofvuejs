<template>

  <div>
    <h4 v-text="name"></h4>
    <small v-text="age"></small>
  </div>

</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
      }
    },
    /*

      @msg option 1

      computed: {
        name () {
          return this.$store.state.name;
        },
        age () {
          return this.$store.state.age;
        }
      }
    */

    /*
      @msg option 1

      computed: mapState({
        name: function (state) {
          return state.name
        },
        age: (state => state.age ),
      })
    */
    computed: mapState(['name', 'age']),
  }
</script>

<style>
</style>
