export default {
	async loadUserInfo(context) {
		const response = await fetch('http://localhost:3006/user');
		console.log(response.data);
		// const responseData = await response.json();

		if (!response.ok) {
			console.log('sdfgh');
			// const error = new Error(responseData.message || 'Failed to fetch!');
			// throw error;
		}

		context.commit('setTest');
	},
};
