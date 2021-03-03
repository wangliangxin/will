<!--  -->
<template>
  <div>
      <p>嘿，兄弟我要给你这个数据：{{ msg }}</p>
      <button @click="handle">点击触发</button>
  </div>
</template>

<script>

import Bus from '../assets/Bus'
export default {
  data () {
    return {
        msg: '1111111'
    };
  },

  components: {},

  computed: {},

  

  methods: {
      handle(){
          Bus.$emit('sendMsg',this.msg)
      }
  }
}

</script>
<style  scoped>
</style>