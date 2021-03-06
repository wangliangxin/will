<template>
  <div id="scroll-board">
    <dv-border-box-1 >
      <div id="content">
        <dv-scroll-board :config="config"  />
        <br>
        <sider-bar></sider-bar>
      </div>
    </dv-border-box-1>
  </div>
</template>

<script>
import siderBar from './siderbar'

export default {
  name: 'ScrollBoard',
  data () {
    return {
      config: {
        header: ['品牌', '销售量', '好评率', '销售额'],
        data: [
          ['2019-07-01 19:25:00', '路面危害-松散', '5', '12', '  ']
        ],
        index: true,
        columnWidth: [50, 170, 300],
        align: ['center'],
        rowNum: 9,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(0, 44, 81, 0.8)',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)',
        waitTime: 2000,
        indexHeader: '序号'
      }
    }
  },
  components:{
    siderBar
  },

  created() {
    this.getData()
  },
  methods: {
    getData(){
      this.config.data = [
         ['索菲利尔1', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔2', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔3', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx'],
          ['索菲利尔', '11111', '100%', 'xxxxxxx']
      ]
    }

    // axios.get('http://sfddata.tech:8281/jingdong/getSaleDetails').then(res=>{
    //     console.log(res.data.data)
    // })
    
  },
}
</script>

<style  scoped>
#scroll-board {
  box-sizing: border-box;
  width: 80%;
  height: 80%;
  margin: 20px auto;
}

#content{
  margin: 0px 40px;
  padding: 60px 20px;
  height: 80%;
}

</style>
