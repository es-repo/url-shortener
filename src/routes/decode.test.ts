import request from 'supertest';
import express from 'express';
import decodeRouter from './decode';
import decode from '../operations/decode';

// Mock the decode function
jest.mock('../operations/decode', () => ({
    __esModule: true,
    default: jest.fn()
}));

const app = express();
app.use(express.json());
app.use('/', decodeRouter);

describe('GET /', () => {
    test('should decode a shortened URL successfully', async () => {
        const mockShortenedUrl = 'short_url';
        const mockDecoded = 'https://example.com';
        (decode as jest.Mock).mockResolvedValueOnce({ type: 'ok', value: mockDecoded });

        const response = await request(app).get('/').query({ shortenedUrl: mockShortenedUrl });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(mockDecoded);
    });

    test('should return 400 for an empty URL', async () => {
        const response = await request(app).get('/').query({ shortenedUrl: '' });

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid or missing "shortenedUrl" parameter.' });
    });

    test('should return 404 for not found', async () => {
        (decode as jest.Mock).mockResolvedValueOnce({ type: 'error', value: 'Not found' });

        const response = await request(app).get('/').query({ shortenedUrl: 'unknown_short_url' });

        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: 'Not found' });
    });

    test('should return 500 for internal server error', async () => {
        (decode as jest.Mock).mockResolvedValueOnce({ type: 'error' });

        const response = await request(app).get('/').query({ shortenedUrl: 'some_short_url' });

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ error: 'Internal Server Error.' });
    });
});

