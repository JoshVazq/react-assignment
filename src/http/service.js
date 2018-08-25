import request from './request';

export const get = (url, params) => request('GET', url, params);

export default get;
