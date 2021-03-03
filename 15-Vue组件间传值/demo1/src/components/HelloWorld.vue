<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <input type="button" value="点击触发" @click="childClick">

     <hr>

     <brother-1></brother-1>
     <sister></sister>
  </div>
</template>

<script>

import brother1 from './brother1'
import sister from './sister'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      childInfo: '我是子组件的数据'
    }
  },
  methods: {
    childClick(){
      this.$emit('transmit', this.childInfo)
    }
  },
  components:{
    brother1,
    sister
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
