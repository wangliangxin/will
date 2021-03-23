<!--  -->
<template>
  <div>
    <el-row>
      <div id="filter">
        <el-col :lg="6">
          <el-date-picker
            v-model="dateValue"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </el-col>
        <el-col :lg="4">
          <el-autocomplete
            v-model="selectBrand"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入品牌"
            @select="handleSelect"
            label="品牌："
            width = '100%'
          ></el-autocomplete>
        </el-col>
        <el-col :lg="2">
          <el-button type="success" icon ='el-icon-search'  >搜索</el-button>
        </el-col>
        <el-col :lg="2">
          <el-button type="info" icon='el-icon-refresh-left'>重置</el-button>
        </el-col>
      </div>
    </el-row>
    <el-divider></el-divider>
    <el-row>
        <el-table
        :data="tableData"
        style="width: 100%"
        
        height="600"
        :row-class-name="tableRowClassName"
        >
        <el-table-column
          type="index"
          fixed
          label = '排名'
          width="50">
        </el-table-column>
        <el-table-column prop="brand" label="品牌" width="150" >
        </el-table-column>
        <el-table-column prop="name" label="销售额" width="150" sortable >
        </el-table-column>
        <el-table-column prop="address" label="市场占有率" width="250" sortable >
        </el-table-column>
        <el-table-column prop="address" label="销量" width="250" sortable >
        </el-table-column>
        <el-table-column prop="address" label="最低价格" width="250" sortable >
        </el-table-column>
        <el-table-column prop="address" label="最高价格" width="250" sortable >
        </el-table-column>
        <el-table-column prop="address" label="商品个数" width="250" sortable >
        </el-table-column>
        <el-table-column prop="address" label="XX" width="280">
        </el-table-column>
        <el-table-column label="操作" width="150" fixed="right">
          <el-button type="primary" size="mini">详情</el-button>
          <el-button type="success" size="mini">查看</el-button>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近半年",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一年",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      dateValue: "",
      selectBrand: "",
      brands: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-04",
          name: "12312312",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-01",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-03",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-03",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-03",
          name: "123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-03",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-03",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-03",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-03",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-03",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-03",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
        {
          date: "2016-05-03",
          name: "123123",
          address: "上海市普陀区金沙江路 1518 弄",
          brand: '品牌1'
        },
      ],
    };
  },

  components: {},
  mounted() {
    this.brands = this.loadAll();
  },
  computed: {},

  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex%2 == 0) {
        return "warning-row";
      } else  {
        return "success-row";
      }
    },
    handleSelect(item) {
      console.log("选中了", item.value);
    },
    loadAll() {
      return [
        { value: "品牌1" },
        { value: "品牌2" },
        { value: "品牌3" },
        { value: "品牌4" },
        { value: "泷千家(天山西路店)" },
        { value: "胖仙女纸杯蛋糕（上海凌空店）" },
        { value: "胖仙女纸杯蛋糕（上海凌空店）" },
      ];
    },
    querySearchAsync(queryString, cb) {
      var brands = this.brands;
      var results = queryString
        ? brands.filter(this.createStateFilter(queryString))
        : brands;

      // clearTimeout(this.timeout);
      // this.timeout = setTimeout(() => {
        cb(results);
      // }, 3000 * 0.25);
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
  },
};
</script>
<style >
  .el-table .warning-row {
    background:#fff;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>