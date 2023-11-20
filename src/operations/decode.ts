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
    if (params.shortenedUrl === 'notfound') {
        return Promise.resolve({ type: 'error', value: 'Not found' });
    }

    const url = params.shortenedUrl + ':decoded';
    const result: DecodeResult = { type: 'ok', value: { url: url } };

    return Promise.resolve(result);
}

