<template>
  <div>
    <el-button @click="openCreateDialog">建立事件</el-button>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="名稱">
            <span>
              <el-button>設定</el-button>
            </span>
          </el-form-item>
          <el-form-item label="">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="分類">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="事件"
      prop="id">
    </el-table-column>
    <el-table-column
      label="來源"
      prop="name">
    </el-table-column>
    <el-table-column
      label="動作"
      prop="desc">
    </el-table-column>
    <el-table-column
      label="目標"
      prop="desc">
    </el-table-column>
     <el-table-column
      label="間隔時間"
      prop="desc">
    </el-table-column>
  </el-table>
  <el-dialog
  width="500"
  title="建立事件"
  :visible.sync="createDialog"
  :before-close="handleClose">
  <span>

  </span>
  <!-- <span slot="footer" class="dialog-footer">

  </span> -->
</el-dialog>
  </div>
</template>

<script>

export default {
  name: 'project',
  data () {
    // console.log('routes', this.$router.options)
    return {
      createDialog: false,
      tableData: [{
        id: '',
        name: '',
        category: '',
        desc: '',
        address: '',
        shop: '',
        shopId: ''
      }, {
        id: '',
        name: '',
        category: '',
        desc: '',
        address: '',
        shop: '',
        shopId: ''
      }, {
        id: '',
        name: '',
        category: '',
        desc: '',
        address: '',
        shop: '',
        shopId: ''
      }, {
        id: '',
        name: '',
        category: '',
        desc: '',
        address: '',
        shop: '',
        shopId: ''
      }]
    }
  },
  created () {

  },
  methods: {
    openCreateDialog () {
      this.createDialog = true
    },
    handleClose (done) {
      done()
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.demo-dialog-form {
  text-align: left;
}
</style>
