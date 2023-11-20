import express from 'express';
import decodeRouter from './routes/decode';
import encodeRouter from './routes/encode';
import config from './config';

const app = express();

app.use(express.json());

app.use('/decode', decodeRouter);
app.use('/encode', encodeRouter);

app.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
});

