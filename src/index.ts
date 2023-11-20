import express from 'express';
import decodeRouter from './routes/decode';
import encodeRouter from './routes/encode';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/decode', decodeRouter);
app.use('/encode', encodeRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

