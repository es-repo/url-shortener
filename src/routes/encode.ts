import express from 'express';
import encode from '../operations/encode';
import isNullOrEmpty from '../utils/string/isEmpty';

interface EncodeRequestBody {
    url: string;
}

const router = express.Router();

router.post('/', async (req, res) => {
    const encodeRequestBody = req.body as EncodeRequestBody;

    if (isNullOrEmpty(encodeRequestBody.url)) {
        return res.status(400).json({ error: 'Invalid or missing "url" parameter.' });
    }

    const encodeResult = await encode(encodeRequestBody);

    switch (encodeResult.type) {
        case 'ok':
            return res.json(encodeResult.value);
        case 'error':
            return res.status(500).json({ error: 'Internal Server Error.' });
    }
});

export default router;

