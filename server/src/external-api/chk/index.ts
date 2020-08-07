import request from 'request-promise-native';

const slangFilterUrl = 'http://104.154.113.3/chk';

export const checkSlang = (text: string) => {
    return request({
        method: 'POST',
        uri: slangFilterUrl,
        body: { text: text },
        json: true
    });
}