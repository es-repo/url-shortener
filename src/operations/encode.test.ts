import config from '../config';
import encode, { EncodeResult } from './encode';

test('encode should correctly shorten a given URL', async () => {
    const received = await encode({ url: 'https://www.google.com' });

    const expected: EncodeResult = {
        type: 'ok',
        value: {
            shortenedUrl: config.prodHost + 'QJjikC'
        }
    };

    expect(received).toEqual(expected);
});

