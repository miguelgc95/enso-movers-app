import express from 'express';
const app = express();

app.get('/', (req, res) => {
    const text = 'hola'
    console.log('response to client:',text);
    //res.status(200).send(text);
    res.json({key: text})
})


export { app };

