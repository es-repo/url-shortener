import request from 'supertest';
import express from 'express';
import encodeRouter from './encode';
import encode from '../operations/encode';

jest.mock('../operations/encode', () => ({
    __esModule: true,
    default: jest.fn()
}));

const app = express();
app.use(express.json());
app.use('/encode', encodeRouter);

describe('POST /encode', () => {
    test('should encode a URL successfully', async () => {
        const mockUrl = 'https://example.com';
        const mockEncoded = 'encoded_string';
        (encode as jest.Mock).mockResolvedValueOnce({ type: 'ok', value: mockEncoded });

        const response = await request(app).post('/encode').send({ url: mockUrl });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(mockEncoded);
    });

    test('should return 400 for an empty URL', async () => {
        const response = await request(app).post('/encode').send({ url: '' });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid or missing "url" parameter.' });
    });

    test('should return 500 for internal server error', async () => {
        (encode as jest.Mock).mockResolvedValueOnce({ type: 'error' });

        const response = await request(app).post('/encode').send({ url: 'https://example.com' });

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ error: 'Internal Server Error.' });
    });
});

