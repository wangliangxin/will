<template>
  <div class="hello">
    <h1>{{ $t("app.title") }}</h1>
    <el-select v-model="value" filterable placeholder="language"  @change = 'changeLang'>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      options: [
        {
          value: 'zh'
          
        },
        {
          value: 'en'
          
        },{
          value: 'es'
          
        },{
          value: 'ja'
        }
      ],
      value: ''
    }
  },
  methods: {
    changeLang(e){
      this.$i18n.locale = e
      Cookies.set('language', e, {expires: 7})

    }
  },
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
