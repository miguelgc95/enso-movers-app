import express from 'express';

import cors from 'cors'
import morgan from 'morgan'

import initialWeekRouter from './routes/initialWeek.js'
import userRouter from './routes/userRoute.js'

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/initial-week', initialWeekRouter);
app.use('/user', userRouter);

export { app };
