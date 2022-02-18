import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import Home from '@/views/home'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		name: "Layout",
		component: Layout,
		redirect: '/',
		children: [
			{
				path: '/',
				name: 'Home',
				component: Home
			},
			{
				path: '/about',
				name: 'About',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '@/views/about')
			},
			{
				path: '/brand',
				name: 'Brand',
				component: () => import( /* webpackChunkName: "brand" */ '@/views/brand')
			},
			{
				path: '/service',
				name: 'Service',
				component: () => import( /* webpackChunkName: "about" */ '@/views/service')
			},
			{
				path: '/comment',
				name: 'Comment',
				component: () => import( /* webpackChunkName: "comment" */ '@/views/comment')
			}
		]
	},
	
]

const router = new VueRouter({
	routes
})

export default router
