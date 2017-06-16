import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import NavInfo from '@/components/NavInfo'
import ListInfo from '@/components/ListInfo'
import fenleiInfo from '@/components/fenleiInfo'
import Search from '@/components/Search'
import Account from '@/components/Account'
import NewInfo from '@/components/NewInfo'

import Gift from '@/components/Gift'
import Library from '@/components/Library'
import GiftPack from '@/components/GiftPack'

import HotInfo from '@/components/HotInfo'
<<<<<<< HEAD
import Gift from '@/components/Gift'
import Library from '@/components/Library'
import GiftPack from '@/components/GiftPack'
=======

>>>>>>> e44fcef57e30ce4a49919c04feda9834c4ef6833
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
    {// 每本书的详情
      path: '/ListInfo/:id',
      name: 'ListInfo',
      component: ListInfo
    },
    {// 专栏 连载下 书的分类的详情
      path: '/fenleiInfo',
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
    {//礼券 的 路由
  		path: '/Gift',
      	name: 'Gift',
     	component: Gift
    },
    {//拥有的作品 的 路由
  		path: '/Library',
      	name: 'Library',
     	component: Library
    },
    {//礼物 的 路由
  		path: '/GiftPack',
      	name: 'GiftPack',
     	component: GiftPack
    },
    {//主页 新上架 热门 画册 免费 的路由
  		path: '/NewInfo/:lbInfo',
      	name: 'NewInfo',
     	component: NewInfo
    },
    {//专栏连载下  近期热门 最近更新的路由
  		path: '/HotInfo/:isHot',
      	name: 'HotInfo',
     	component: HotInfo
    },
  ]
})
