<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
import cookies from 'js-cookie'

export default {
  
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      cookieData:''
    }
  },

  created() {
    this.getCookieData()
  },
  methods: {
    getCookieData(){
      console.log(cookies.get('username')) 
      console.log(JSON.parse(cookies.get('obj')).age)   
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
