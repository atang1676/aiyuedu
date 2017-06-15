import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import NavInfo from '@/components/NavInfo'
import ListInfo from '@/components/ListInfo'
import fenleiInfo from '@/components/fenleiInfo'
import Search from '@/components/Search'
import Account from '@/components/Account'
import NewInfo from '@/components/NewInfo'
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
    },
    {//搜索 的 路由
  		path: '/Search',
      	name: 'Search',
     	component: Search
    },
    {//账户余额 的 路由
  		path: '/Account',
      	name: 'Account',
     	component: Account
    },
    {//主页 新上架 热门 画册 免费 的路由
  		path: '/NewInfo/:lbInfo',
      	name: 'NewInfo',
     	component: NewInfo
    },
  ]
})
