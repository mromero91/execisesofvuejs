<template>

  <div>
    <h1>{{ tasksCompleted }} taks completed</h1>    
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    /*computed: {
      tasksCompleted() {
          // method 1 for get task completed
          // return this.$store.state.tasks.filter((task) => {
          //   return task.completed;
          // }).length;

          // method 2 for get task completed
          // return this.$store.getters.tasksCompleted;
      }
    },*/
    computed: mapGetters(['tasksCompleted'])
  }
</script>

<style>
</style>
