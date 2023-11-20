import toString64Base from './toString64Base';

test('toString64Base should convert a large number to a base-64 string correctly', () => {
    const received = toString64Base(124463620242320921, 32);
    const expected = 'g4KAQD';

    expect(received).toBe(expected);
});

