import express from 'express';
import decode from '../operations/decode';
import isNullOrEmpty from '../utils/string/isEmpty';

const router = express.Router();

router.get('/', async (req, res) => {
    const shortenedUrl = req.query.shortenedUrl as string;

    if (isNullOrEmpty(shortenedUrl)) {
        return res.status(400).json({ error: 'Invalid or missing "shortenedUrl" parameter.' });
    }

    const decodeResult = await decode({ shortenedUrl });

    switch (decodeResult.type) {
        case 'ok':
            return res.json(decodeResult.value);
        case 'error':
            switch (decodeResult.value) {
                case 'Not found':
                    return res.status(404).json({ error: decodeResult.value });
                default:
                    return res.status(500).json({ error: 'Internal Server Error.' });
            }
    }
});

export default router;

