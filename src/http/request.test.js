import request from './request';
import * as utils from './utils';

jest.mock('./utils', () => ({
    handleErrors: jest.fn().mockImplementation(res => res),
}));

describe('should call fetch', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true, headers: { get: () => '' } }));
    it('without parameters in the url', () => {
        const url = 'endpoint',
            method = 'GET',
            params = {};
        request(method, url, params);
        expect(fetch).toBeCalledWith(url, { credentials: 'same-origin', headers: {}, method });
    });
    it('with one parameters in the url', () => {
        const url = 'endpoint',
            method = 'GET',
            params = { q: 'test' };
        request(method, url, params);
        expect(fetch).toBeCalledWith(`${url}?q=test`, { credentials: 'same-origin', headers: {}, method });
    });
    it('with multiple parameters in the url', () => {
        const url = 'endpoint',
            method = 'GET',
            params = { q: 'test', q2: 'test2' };
        request(method, url, params);
        expect(fetch).toBeCalledWith(`${url}?q=test&q2=test2`, { credentials: 'same-origin', headers: {}, method });
    });

    it('and get the json', () => {
        const url = 'endpoint',
            method = 'GET',
            params = {},
            result = { test: 'test' };
        global.fetch = jest
            .fn()
            .mockImplementation(() =>
                Promise.resolve({ ok: true, headers: { get: () => 'application/json' }, json: () => result }));

        request(method, url, params).then((response) => {
            expect(response.json()).toBe(result);
        });
        expect(fetch).toBeCalledWith(`${url}`, { credentials: 'same-origin', headers: {}, method });
    });
});

describe('should handle errors', () => {
    const testError = new Error('test error');

    beforeEach((done) => {
        utils.handleErrors.mockReset();
        done();
    });

    it('with multiple parameters in the url', () => {
        const url = 'endpoint',
            method = 'GET',
            params = {};
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({}));

        utils.handleErrors.mockImplementation(() => {
            throw testError;
        });
        request(method, url, params).catch((err) => {
            expect(err).toBe(testError);
        });
    });
});
