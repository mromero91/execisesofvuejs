<template>
  <div>
    <h1>List</h1>
    <ul>
      <li>Read book of big data </li>
    </ul>
    <tasks></tasks>
  </div>
</template>

<script>
  import tasks from './components/tasks.vue'
  export default {
    components : {tasks},
    data () {
      return {
      }
    }
  }
</script>

<style module>

  .blue {
    color: blue;
  }

</style>
