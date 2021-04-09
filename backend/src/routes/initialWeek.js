import express from 'express';
import { getInitialWeeks, postWeek } from '../controllers/initialWeekController.js'

const initialWeekRouter = express.Router()

initialWeekRouter.get('/', getInitialWeeks)
initialWeekRouter.post('/post', postWeek)

export default initialWeekRouter;