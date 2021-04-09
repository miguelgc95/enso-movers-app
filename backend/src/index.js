import dotenv from 'dotenv'
import { app } from './server.js'

dotenv.config();

const port = process.env.PORT || 3006;

app.listen(3000, () => console.log(`INIT SERVER ON PORT ${port} :)`))