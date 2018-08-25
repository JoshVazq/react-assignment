export class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}

export function handleErrors(response) {
    if (!response.ok) {
        throw new HttpError(response.status, response.statusText);
    }
    return response;
}
