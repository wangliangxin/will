<!--  -->
<template>
  <div class="jdDatav">
    <el-tabs 
    type="border-card" 
    style="height: 80vh; margin: 10vh auto; width: 80vw " 
    value = 'sbed'
    >
      <el-tab-pane label="智能床" lazy name="sbed">
        <details-form></details-form>
      </el-tab-pane>
      <el-tab-pane label="传统床" lazy>传统床</el-tab-pane>
      <el-tab-pane label="床垫" lazy>床垫</el-tab-pane>
      <el-tab-pane label="枕头" lazy>枕头</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import detailsForm from './components/detailsForm'
export default {
  data() {
    return {
    
    };
  },

  components: {
    detailsForm
  },

  computed: {},

  methods: {},
};
</script>
<style  scoped>
/* .jdDatav{
  width: 100vw;
  height: 100vh;
  padding: 10vh;
  background-image: url(./img/bg.png);
} */

</style>