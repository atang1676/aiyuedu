import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import NavInfo from '@/components/NavInfo'
import ListInfo from '@/components/ListInfo'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    
    {
    	path:'/navInfo/:kind',
    	name:'NavInfo',
    	component:NavInfo
    },
    {
      path: '/ListInfo/:id',
      name: 'ListInfo',
      component: ListInfo
    }
  ]
})
