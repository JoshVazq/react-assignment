import { handleErrors, HttpError } from './utils';

it('should call return the response if is ok', () => {
    const response = { ok: true };
    expect(handleErrors(response)).toBe(response);
});
it('should throught an error if the response is not ok', () => {
    const status = 404,
        statusText = 'Not found',
        response = { ok: false, status, statusText };
    try {
        handleErrors(response);
    } catch (error) {
        expect(error).toEqual(new HttpError(status, statusText));
    }
});
