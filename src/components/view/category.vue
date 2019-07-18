<template>
  <div>

  </div>
</template>

<script>
import listData from '@/json/data.json'
import treeData from '@/json/treeData.json'
export default {
  name: 'homePage',
  data () {
    return {
      demoRowData: {
        id: '1',
        name: 'Aaron'
      },
      treeData: [],
      gridData: [],
      sort: {
        column: '',
        sort_type: ''
      }
    }
  },
  created () {
    // this.gridData.push(this.demoRowData)
    this.gridData = listData.data.list
    this.grid = listData.field
    this.treeData = treeData.data.list
  },
  methods: {
    sortBy () {
      console.log('sortBy')
    },
    $t (t) {
      return t
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
.tree-layout {
  padding: 10px 0;
  list-style: none;
  /*min-height: 500px;*/
  height: 500px;
  overflow-x: hidden;
  list-style: none;
  text-align: left;
}
</style>
