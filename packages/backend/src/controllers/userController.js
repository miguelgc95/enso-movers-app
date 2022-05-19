import UserModel from '../models/UserModel.js'

async function getUser(req, res) {
	const mail = 'mike@test.com'
	try {
		const response = await UserModel.findOne({ mail }).lean().exec()

		if (response) return res.status(200).send(response)
		return res.status(400).send('error')
	} catch (error) {
		console.log(error)
		// next(error)??
		res.json(error)
	}
}

export { getUser }
