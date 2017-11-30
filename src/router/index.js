import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
	{ path: '/login', component: _import('login/index'), hidden: true },
	{ path: '/404', component: _import('404'), hidden: true },
	{
		path: '/',
		component: Layout,
		redirect: 'dashboard',
		hidden: true,
		name: 'Dashboard',
		children: [{ path: 'dashboard', component: _import('dashboard/index') }]
	},
	{
		path: '/sys',
		component: Layout,
		redirect: 'noredirect',
		name: '',
		hidden: true,
		icon: 'fa-dedent',
		children: [
			{ path: '/sys/operaterole/list',name:"角色管理",component: _import('sys/operaterole/list')},
			{ path: '/sys/operateuser/list',name:"人员管理",component: _import('sys/operateuser/list')},
			{ path: '/sys/dictbase/list',name:"字典管理",component: _import('sys/dictbase/list')},
			{ path: '/sys/operatemenu/list',name:"菜单管理",component: _import('sys/operatemenu/list')}
			
		]
	},
	
	
	
	{ path: '*', redirect: '/404', hidden: true }
]

export default new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRouterMap
})


export const asyncRouterMap=[       //异步路由
	{ path: '*', redirect: '/404', hidden: true }
]