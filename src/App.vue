<template>

  <div>

    <!-- <counter
      :quantity="quantity"
      @increase="quantity++"
      @reduce="quantity--"
    ></counter> -->

    <counter></counter>

  </div>

</template>

<script>
  import counter from './components/counter.vue'

  export default {
    components: {counter},
    data () {
      return {
        quantity: 0,
      }
    }
  }
</script>

<style>
</style>
