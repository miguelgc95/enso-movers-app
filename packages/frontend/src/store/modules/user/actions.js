import axios from 'axios'

export default {
	async loadUserInfo(context) {
		const response = await axios('http://localhost:3006/user')

		if (response.status != 200) {
			const error = new Error(response.message || 'Failed to fetch!')
			throw error
		}

		context.commit('setUserInfo', response.data)
	},
}
