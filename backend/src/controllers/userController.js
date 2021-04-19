import UserModel from '../models/UserModel.js';

async function getUser(req, res) {
    const username = 'mike'; // req.user.username
    try {
        const response = await UserModel.findOne({ userName: username })
            .lean()
            .exec();
        console.log('response:', response);

        if (response) return res.status(200).send(response);
        return res.status(400).send('error');
    } catch (error) {
        console.log(error);
        // next(error)??
        res.json(error);
    }
}

export { getUser };
