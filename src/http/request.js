import { handleErrors } from './utils';
/* global fetch:false */
export default function (type, path, params) {
    const options = {
        method: type,
        credentials: 'same-origin',
        headers: {},
    };
    let url = path;

    if (type === 'GET' && params && Object.keys(params).length) {
        const query = Object.keys(params)
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
            .join('&');
        url += `?${query}`;
    }

    return new Promise((resolve, reject) => {
        let resp;
        fetch(url, { ...options })
            .then(handleErrors)
            .then((response) => {
                const contentType = response.headers.get('content-type');
                resp = response;
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    return response.json();
                }
                return {};
            })
            .then((json) => {
                resp.json = () => json;
                resolve(resp);
            })
            .catch(err => reject(err));
    });
}
