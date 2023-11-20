import config from '../config';
import shortener from '../shortener';
import { Result } from './result';

export interface DecodeParams {
    shortenedUrl: string;
}

export interface DecodeOk {
    url: string;
}

export type DecodeErr = 'Not found';

export type DecodeResult = Result<DecodeOk, DecodeErr>;

export default function decode(params: DecodeParams): Promise<DecodeResult> {
    const shortened = params.shortenedUrl.substring(config.prodHost.length);

    const url = shortener.decode(shortened);
    if (url === undefined) {
        return Promise.resolve({ type: 'error', value: 'Not found' });
    }

    const result: DecodeResult = { type: 'ok', value: { url: url } };

    return Promise.resolve(result);
}

