import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Login from '../views/LoginPage'
import Chat from '../views/Chat'
import NotFound from '../views/NotFound'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	
	{
		path: '/chat',
		name: 'Chat',
		props: true,
		component: Chat
	},
	{
		path: '/notfound',
		name: 'NotFound',
		component: NotFound
	},
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes,})
export default router