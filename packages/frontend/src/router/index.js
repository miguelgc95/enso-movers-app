import { createRouter, createWebHistory } from 'vue-router'

import TheHome from '../pages/user/TheHome.vue'
import TheTrainings from '../pages/user/TheTrainings.vue'
import UserInfo from '../pages/user/UserInfo.vue'
import EditUserInfo from '../pages/user/EditUserInfo.vue'
import UsersList from '../pages/admin/UsersList.vue'
import EditUserPlan from '../pages/admin/EditUserPlan.vue'
import TheLogin from '../pages/generic/TheLogin.vue'
import CreateAccount from '../pages/generic/CreateAccount.vue'
import NotFound from '../pages/generic/NotFound.vue'

const routes = [
	{ path: '/', redirect: '/home', component: TheHome },
	{ path: '/home', component: TheHome },
	{ path: '/trainings', component: TheTrainings },
	{
		path: '/:user',
		component: UserInfo,
		children: [{ path: 'edit', component: EditUserInfo }],
	},
	{
		path: '/admin',
		component: UsersList,
		children: [{ path: ':userID/edit', component: EditUserPlan }],
	},
	{ path: '/login', component: TheLogin },
	{ path: '/new-user', component: CreateAccount },
	{ path: '/notFound(*)', component: NotFound },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
