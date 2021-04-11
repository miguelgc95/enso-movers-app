import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { app } from './server.js'

dotenv.config();

const port = process.env.PORT || 3006;
const dbconnection = process.env.DBCONNECTION || 'mongodb://localhost:27017/trainingProgram'

mongoose.connect(dbconnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('DB connected'));

app.listen(port, () => console.log(`INIT SERVER ON PORT ${port} :)`))
