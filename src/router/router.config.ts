export default [

	{
		path: '/',
		name: 'login',
		component: () => import('../pages/login.vue'),
	},
	{
		path: '/my',
		name: 'my',
		component: () => import('../pages/my.vue'),
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
	},
	{
		path: '/show',
		name: 'show',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/pages/show.vue')
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/pages/user/level1/home.vue'),
	},
	{
		path: '/addproject',
		name: 'addproject',
		component: () => import('../pages/user/level1/addproject.vue'),
	},
	{
		path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
		redirect: (_: any) => {
			return { path: '/404' }
		},
	},
]


