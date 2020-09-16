<template>
  <div id="app">
    <!-- <button @click="globalChange">Change</button>
    {{ $parent.sharedState.global_data }} -->
  <Products></Products>
  
  </div>
</template>

<script>
import Products from './components/Products'

export default {
  name: 'App',
  components: {
    Products,
  },
  data() {
    return {

    }
  },
  methods: {
    globalChange() {
      this.$parent.sharedState.global_data.push(99)
    }
  },
  created() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
