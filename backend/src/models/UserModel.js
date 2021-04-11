import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	name: {
		require: true,
		type: String,
	},
	description: {
		require: true,
		type: String,
	},
	initialWeek: [
		{
			require: [true, "algo fue mal en require"],
			type: [String, "algo fue mal en type"],
		},
	],
    purposeTraining: [
		{
			require: [true, "algo fue mal en require"],
			type: [String, "algo fue mal en type"],
		},
	],
});

const UserModel = new mongoose.model("User", UserSchema);

export default UserModel;