interface Shortener {
    encode(value: string): string;
    decode(value: string): string | undefined;
}

export function createShortener(): Shortener {
    const shortenedToOriginalMap = new Map<string, string>();

    return {
        encode(value: string): string {
            const shortened = hash(value).toString(32);
            shortenedToOriginalMap.set(shortened, value);
            return shortened;
        },

        decode(value: string): string | undefined {
            return shortenedToOriginalMap.get(value);
        }
    };
}

function hash(value: string): number {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        const char = value.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return hash;
}

export default createShortener();

