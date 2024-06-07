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

app.get('/posts', async(_req, res) => {
    const db= await connect();
    const posts= await db.query('select * from user_posts where parent_post_id IS NULL');
    res.json(posts[0]);
});


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});
