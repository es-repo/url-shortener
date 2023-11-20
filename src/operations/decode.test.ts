import decode, { DecodeResult } from './decode';
import encode from './encode';

test('decode should return the original URL for a given shortened value', async () => {
    await encode({ url: 'https://www.google.com' });
    const received = await decode({ shortenedUrl: 'QJjikC' });

    const expected: DecodeResult = {
        type: 'ok',
        value: {
            url: 'https://www.google.com'
        }
    };

    expect(received).toEqual(expected);
});

test('decode should return "Not found" error for a URL that was not shortened before', async () => {
    const received = await decode({ shortenedUrl: '12345678' });

    const expected: DecodeResult = {
        type: 'error',
        value: 'Not found'
    };

    expect(received).toEqual(expected);
});

