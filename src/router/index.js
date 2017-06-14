import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import NavInfo from '@/components/NavInfo'
import ListInfo from '@/components/ListInfo'
import fenleiInfo from '@/components/fenleiInfo'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {//主路由
      path: '/',
      name: 'Content',
      component: Content
    },
    {//专栏 连载 的路由  
    	path:'/navInfo/:kind',
    	name:'NavInfo',
    	component:NavInfo
    },
    {// 书的详情
      path: '/ListInfo/:id',
      name: 'ListInfo',
      component: ListInfo
    },
    {// 书的分类的详情
      path: '/fenleiInfo/:flInfo',
      name: 'fenleiInfo',
      component: fenleiInfo
    }
  ]
})
