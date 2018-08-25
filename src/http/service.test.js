import * as http from './service';
import request from './request';

jest.mock('./request', () => jest.fn());

describe('GET', () => {
    it('should call request with the correct arguments', () => {
        const url = 'endpoint',
            params = {};

        http.get(url, params);
        expect(request).toHaveBeenCalledWith('GET', url, params);
    });
});
