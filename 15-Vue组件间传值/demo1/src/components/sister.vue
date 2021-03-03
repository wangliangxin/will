<!--  -->
<template>
  <div>
      <p>哥们，我收到的是：{{ info }}</p>
  </div>
</template>

<script>

import Bus from '../assets/Bus'
export default {
  data () {
    return {
        info: ''
    };
  },

  components: {},

  computed: {},

  mounted() {
      Bus.$on('sendMsg', value=>{
              this.info = value
          })
  }
}

</script>
<style  scoped>
</style>