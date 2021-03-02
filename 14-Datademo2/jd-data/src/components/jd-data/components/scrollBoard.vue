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
          ['2019-07-01 19:25:00', '路面危害-松散', '5', 'xxxxxxx'],
          ['2019-07-02 17:25:00', '路面危害-路面油污清理', '13', 'xxxxxxx'],
          ['2019-07-03 16:25:00', '交安设施-交通标志牌结构', '6', 'xxxxxxx'],
          ['2019-07-04 15:25:00', '路基危害-防尘网', '2', 'xxxxxxx'],
          ['2019-07-05 14:25:00', '交安设施-交通标志牌结构', '1', 'xxxxxxx'],
          ['2019-07-06 13:25:00', '路面危害-松散', '3', 'xxxxxxx'],
          ['2019-07-07 12:25:00', '路基危害-防尘网', '4', 'xxxxxxx'],
          ['2019-07-08 11:25:00', '路面危害-路面油污清理', '2', 'xxxxxxx'],
          ['2019-07-09 10:25:00', '交安设施-交通标志牌结构', '5', 'xxxxxxx'],
          ['2019-07-10 09:25:00', '路基危害-防尘网', '3', 'xxxxxxx']
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
  }
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
