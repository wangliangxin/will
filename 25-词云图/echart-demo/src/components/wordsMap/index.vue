<!--  -->
<template>
  <div class="wordsMap">
    <div id="wordsmap" style="width: 100%;height:100%;"></div>
  </div>
</template>

<script>
import { createMap } from "./util.js"
export default {
    mounted() {
        var dom = document.getElementById("wordsmap");
        createMap(dom);
    }
};
</script>
<style  scoped>
.wordsMap{
    width: 60vw;
    height: 90vh;
    /* border: 1px solid #2c3e50; */
    margin: 0 auto;
}
</style>