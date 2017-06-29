<template>

  <div>
    <counter></counter>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import counter from './components/counter.vue';

  export default {
    data () {
      return {}
    },
    components: {counter},
  }
</script>

<style>
</style>
