import Vue from 'vue'
import Router from 'vue-router'
import ListTab from '@/components/ListTab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListTab',
      component: ListTab
    }
  ]
})
