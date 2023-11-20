export interface ResultOk<T> {
    type: 'ok';
    value: T;
}

export interface ResultError<T = string> {
    type: 'error';
    value: T;
}

export type Result<TOk = boolean, TError = string> = ResultOk<TOk> | ResultError<TError>;

