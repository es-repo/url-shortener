import { createShortener } from './shortener';

const shortener = createShortener();

test('encode should correctly shorten a given URL', () => {
    const received = shortener.encode('https://www.google.com');
    const expected = 'QJjikC';

    expect(received).toBe(expected);
});

test('decode should return the original URL for a given shortened value', () => {
    const received = shortener.decode('QJjikC');
    const expected = 'https://www.google.com';

    expect(received).toBe(expected);
});

test('decode should return undefined for a value that was not shortened', () => {
    const received = shortener.decode('123456');
    const expected = undefined;

    expect(received).toBe(expected);
});

