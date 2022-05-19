import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	mail: {
		require: true,
		type: String,
	},
	name: {
		require: true,
		type: String,
	},
	birdth: {
		require: true,
		type: String,
	},
	description: {
		require: true,
		type: String,
	},
	// mesocycle: {
	// 	startingDate: {
	// 		require: true,
	// 		type: String,
	// 	},
	// 	weeks: [
	// 		{
	// 			require: true,
	// 			type: {},
	// 		},
	// 	],
	// },
	// blockExplanation: [
	// 	{
	// 		require: true,
	// 		type: Object,
	// 	},
	// ],
	// blockExplanation: [
	// 	{
	// 		require: true,
	// 		type: Object,
	// 	},
	// ],

	// initialWeek: [
	// 	{
	// 		require: [true, 'algo fue mal en require'],
	// 		type: [String, 'algo fue mal en type'],
	// 	},
	// ],
	// purposeTraining: [
	// 	{
	// 		require: [true, 'algo fue mal en require'],
	// 		type: [String, 'algo fue mal en type'],
	// 	},
	// ],
});

const UserModel = new mongoose.model('User', UserSchema);

export default UserModel;
