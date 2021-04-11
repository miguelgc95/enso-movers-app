import UserModel from "../models/UserModel.js";

async function getUser(req, res) {
	try {
        const user = await UserModel.find().lean().exec()
        res.json(user)
	} catch (error) {
		console.log(error);
		res.json(error);
	}
}

export { getUser };