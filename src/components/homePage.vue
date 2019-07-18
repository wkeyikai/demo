<template>
  <div>
    <router-link to="/category/tree">tree</router-link>
    <router-link to="/category/table">table</router-link>
    <router-link to="/category/table/test">table/test</router-link>
    <router-view :name="['level0','level1','level2','level3'][$route.matched.length-1]" ></router-view>
  </div>
</template>

<script>

export default {
  name: 'homePage',
  data () {
    console.log('routes', this.$router.options)
    return {

    }
  },
  created () {

  },
  methods: {

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
</style>
