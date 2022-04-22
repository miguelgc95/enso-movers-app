import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/home',
		component: null,
	},
	{
		path: '/home',
		component: null,
	},
	{
		path: '/trainings',
		component: null,
	},
	{
		path: '/:user',
		component: null,
		children: [
			{
				path: 'edit',
				component: null,
			},
		],
	},
	{
		path: '/admin',
		component: null,
		children: [
			{
				path: ':userID/edit',
				component: null,
			},
		],
	},
	{
		path: '/notFound(*)',
		component: null,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
