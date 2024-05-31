import 'dotenv/config';
import express from 'express';

const app = express();
app.get('/', (_req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
});
