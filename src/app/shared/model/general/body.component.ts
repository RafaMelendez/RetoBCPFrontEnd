export interface GeneralRequest<T> {
    status_code: number;
    message: string;
    result?: T;
    error?: any;
}
