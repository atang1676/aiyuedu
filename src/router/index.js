import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< Updated upstream
import Content from '@/components/Content'
import NavInfo from '@/components/NavInfo'

=======
import ListTab from '@/components/ListTab'
import ListInfo from '@/components/ListInfo'
>>>>>>> Stashed changes
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
<<<<<<< Updated upstream
      name: 'Content',
      component: Content
    },
    
    {
    	path:'/navInfo/:kind',
    	name:'NavInfo',
    	component:NavInfo,
=======
      name: 'ListTab',
      component: ListTab
    },
    {
      path: '/ListInfo/:id',
      name: 'ListInfo',
      component: ListInfo
>>>>>>> Stashed changes
    }
  ]
})
