<template>
  <div id="app">
    <words-map></words-map>
  </div>
</template>

<script>

import wordsMap from './components/wordsMap'
export default {
  name: 'App',
  components: {
    wordsMap
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
