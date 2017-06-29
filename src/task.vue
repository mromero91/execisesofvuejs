<template>

  <div>
    <TaskComplete></TaskComplete>

    <ul>
      <li v-for="task in tasks">{{ task.title }}</li>
    </ul>

  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import TaskComplete from './components/taskCompleted.vue'

  export default {
    components: {TaskComplete},
    data () {
      return {
      }
    },
    computed: mapState(['tasks']),
  }
</script>

<style>
</style>
