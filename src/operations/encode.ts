import config from '../config';
import shortener from '../shortener';
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
    const shortenedUrl = config.prodHost + shortener.encode(params.url);
    const result: EncodeResult = {
        type: 'ok',
        value: {
            shortenedUrl: shortenedUrl
        }
    };

    return Promise.resolve(result);
}

