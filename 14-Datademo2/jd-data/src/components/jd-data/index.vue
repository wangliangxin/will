<!--  -->
<template>
  <div class="jdData">
      <top-header></top-header>

      <scroll-board></scroll-board>
  </div>
</template>

<script>
import topHeader from './components/topHeader'
import scrollBoard from './components/scrollBoard'

export default {
  name: 'jdData',
  data () {
    return {
    };
  },

  components: {
      topHeader,
      scrollBoard
  },

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style scoped>

.jdData{
    width: 100vw;
    height: 100vh;
    color: #fff;
    background-image: url('./img/bg.png');
}
</style>