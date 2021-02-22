<template>
  <div id="app">
    <my-form></my-form>
  </div>
</template>

<script>

import Myform from './components/myform'
export default {
  name: 'App',
  components: {
    'my-form': Myform
  }
}
</script>

<style>
#app {

}
</style>
