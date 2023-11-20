import { Result } from './result';

export interface EncodeParams {
    url: string;
}

export interface EncodeOk {
    shortenedUrl: string;
}

export type EncodeErr = void;

export type EncodeResult = Result<EncodeOk, EncodeErr>;

export default function encode(params: EncodeParams): Promise<EncodeResult> {
    const shortenedUrl = params.url + ':encoded';
    const result: EncodeResult = { type: 'ok', value: { shortenedUrl: shortenedUrl } };

    return Promise.resolve(result);
}

