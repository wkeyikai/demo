import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'

Vue.use(Router)

let nestingComponent = {
  level2: { render: h => h('router-view', { props: { name: 'level1' } }) },
  level3: { render: h => h('router-view', { props: { name: 'level2' } }) }
}
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'index',
      component: homePage,
      children: [
        {
          path: 'category',
          name: 'category',
          // { render: h => h('router-view', { props: {name: 'level1'}}) },
          components: {
            level1: { render: h => h('router-view') },
            ...nestingComponent
          },
          children: [
            {
              path: 'tree',
              name: 'tree',
              components: {
                // level1: r => require.ensure([], () => r(require('@/components/view/tree')), 'treeContent')
                level1: { render: h => h('div', '/category/tree') }
                // ...nestingComponent
              }
            },
            {
              path: 'table',
              name: 'table',
              components: {
                level1: r => require.ensure([], () => r(require('@/components/view/tables')), 'tablesContent'),
                // level2: { render: h => h('router-view', { props: { name: 'level1' } }) }
                level2: { render: h => h('div', '/category/table') }
                // ...nestingComponent
              },
              children: [
                {
                  path: 'test',
                  name: 'test',
                  components: {
                    level1: { render: h => h('div', '/category/table/test') }
                    // ...nestingComponent
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: { name: 'index' }
    }
  ]
})
// console.log('router', router)
export default router
