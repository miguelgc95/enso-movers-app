export default {
	setUserInfo(state, currentUser) {
		state.mail = currentUser.mail
		state.name = currentUser.name
		state.birdth = currentUser.birdth
		state.photo = currentUser.photo
		state.mesocycle = currentUser.mesocycle
		state.blockExplanation = currentUser.blockExplanation
		state.goals = currentUser.goals
	},
}
