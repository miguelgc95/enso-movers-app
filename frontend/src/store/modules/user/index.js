import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
	namespaced: true,
	state() {
		return {
			mail: '',
			name: '',
			birdth: '',
			photo: '',
			mesocycle: {},
			blockExplanation: [],
			goals: [],
		}
	},
	mutations,
	actions,
	getters,
}
