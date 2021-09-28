import express from 'express';
import {
    getInitialWeek,
    postWeek,
} from '../../controllers/initialWeekController.js';

const trainingRouter = express.Router();

trainingRouter.get('/', getInitialWeek);
trainingRouter.post('/post', postWeek);

export default trainingRouter;
