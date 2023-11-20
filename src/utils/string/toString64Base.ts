const getRange = (start: number, length: number): number[] => Array.from({ length: length }, (_, i) => start + i);
const toSymbols = (input: number[]): string[] => input.map(x => String.fromCharCode(x));

const alphabet = toSymbols(getRange(65, 26)) // A-Z
    .concat(toSymbols(getRange(97, 26))) // a-z
    .concat(toSymbols(getRange(48, 10))) // digits
    .concat(['-', '~']);

export default function toString64Base(value: number, bits: number): string {
    const numberOfIterations = Math.ceil(bits / 6);

    let result = '';

    for (let i = 0; i < numberOfIterations; i++) {
        result += alphabet[value % 64];
        value = value >>> 6;
    }

    return result;
}

