import InitialWeek from '../models/Initialweek.js';

async function getInitialWeeks(req, res) {
    try {
        const initialWeeks = await InitialWeek.find()
        console.log(initialWeeks);
        res.json(initialWeeks)
    } catch (error) {
        next(error)
    }
}

async function postWeek(req, res) {
    try {
        const week = new InitialWeek(req.body)
        const result = await week.save()
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

export { getInitialWeeks, postWeek };