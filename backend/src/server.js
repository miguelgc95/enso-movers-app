import express from 'express';

import cors from 'cors';
// import morgan from 'morgan'

import { trainingRouter, userRouter } from './routes/index.js';

const app = express();

// app.use(express.json())
app.use(cors());
// app.use(morgan('dev'))

app.use('/training', trainingRouter);
app.use('/user', userRouter);

export default app;
