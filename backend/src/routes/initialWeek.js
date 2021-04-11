import express from 'express';
import { getInitialWeek, postWeek } from '../controllers/initialWeekController.js'

const initialWeekRouter = express.Router()

initialWeekRouter.get('/', getInitialWeek)
initialWeekRouter.post('/post', postWeek)

export default initialWeekRouter;