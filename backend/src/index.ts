import 'dotenv/config';
import express from 'express';
import { connect } from './db';

const app = express();
app.get('/', (_req, res) => {
    res.send('Hello World!');
});

app.get('/add', (req, res) => {
    if(typeof req.query.a !== 'string' || typeof req.query.b !== 'string') {
       return res.send("INVALID PARAMETER");
    }
    res.json({sum: parseInt(req.query.a) + parseInt(req.query.b)})
});
app.get('/hello',(req,res)=>{
    if(typeof req.query.name !== 'string'){
        return res.send("Hello World"); //slayyyyyyyyyyyyyy
    }
    return res.send("Hello "+req.query.name);
});

app.get('/artists', async (_req, res) => {
    const db = await connect();
    const artists = await db.query('select * from artist');
    res.json(artists);
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});
