import murmurhash from 'murmurhash';
import toString64Base from './utils/string/toString64Base';

interface Shortener {
    encode(value: string): string;
    decode(value: string): string | undefined;
}

export function createShortener(): Shortener {
    const shortenedToOriginalMap = new Map<string, string>();

    return {
        encode(value: string): string {
            // murmur hash algorithm is chosen because of its performance and low rate of collisions.
            // See for details: https://softwareengineering.stackexchange.com/questions/49550/which-hashing-algorithm-is-best-for-uniqueness-and-speed/145633#145633
            const hash = murmurhash.v3(value);

            const shortened = toString64Base(hash, 32);

            if (shortenedToOriginalMap.has(shortened) && shortenedToOriginalMap.get(shortened) !== value) {
                throw new Error(
                    `Hash collision: ${shortened} is already mapped to ${shortenedToOriginalMap.get(shortened)}`
                );
            }

            shortenedToOriginalMap.set(shortened, value);
            return shortened;
        },

        decode(value: string): string | undefined {
            return shortenedToOriginalMap.get(value);
        }
    };
}

export default createShortener();

